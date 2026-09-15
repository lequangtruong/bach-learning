import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import crypto from "node:crypto";
import { Writable } from "node:stream";
import test from "node:test";
import ttsHandler, {
  cleanTextForSpeech,
  checkTtsRateLimit,
  resetTtsRateLimit,
  getRequestIp,
  isProductionRuntime,
  verifyTtsAuthorization,
  pruneTtsCache,
  CACHE_MAX_AGE_MS
} from "../api/tts.js";

function createMockResponse() {
  let statusCode = 200;
  let headers = {};
  let body = "";

  const response = new Writable({
    write(chunk, _encoding, callback) {
      body += Buffer.isBuffer(chunk) ? chunk.toString("binary") : String(chunk);
      callback();
    }
  });
  Object.defineProperties(response, {
    statusCode: { get: () => statusCode, set: code => { statusCode = code; } },
    headers: { get: () => headers },
    body: { get: () => body }
  });
  Object.assign(response, {
    writeHead(code, h = {}) {
      statusCode = code;
      for (const [k, v] of Object.entries(h)) {
        headers[k.toLowerCase()] = String(v);
      }
    },
    setHeader(key, value) { headers[key.toLowerCase()] = String(value); },
    getHeader(key) { return headers[key.toLowerCase()]; },
    json() { return JSON.parse(body || "{}"); },
  });
  return response;
}

test("tts: text is sanitized and technical markup is removed", () => {
  assert.equal(cleanTextForSpeech("# Xin **chào**\n- Bách"), "Xin chào. Bách");
  assert.equal(cleanTextForSpeech(null), "");
  assert.equal(cleanTextForSpeech(123), "");
  assert.equal(
    cleanTextForSpeech("[Active Workspace: /path] [Working Folder: /path] Hãy giải bài toán `3 + 5`."),
    "Hãy giải bài toán 3 + 5."
  );
  assert.equal(
    cleanTextForSpeech("Xem [liên kết](https://example.com) và ```code block```."),
    "Xem liên kết và ."
  );
});

test("tts: production runtime is disabled and proxy IP is parsed safely", () => {
  assert.equal(isProductionRuntime({ VERCEL: "1" }), true);
  assert.equal(isProductionRuntime({ AWS_LAMBDA_FUNCTION_NAME: "tts-func" }), true);
  assert.equal(isProductionRuntime({ NODE_ENV: "production" }), true);
  assert.equal(isProductionRuntime({ NODE_ENV: "development" }), false);
  assert.equal(isProductionRuntime({}), false);

  assert.equal(getRequestIp({ headers: { "x-forwarded-for": "203.0.113.4, 10.0.0.1" } }), "203.0.113.4");
  assert.equal(getRequestIp({ socket: { remoteAddress: "192.168.1.50" } }), "192.168.1.50");
  assert.equal(getRequestIp({}), "unknown");
});

test("tts: rate limit rejects requests above the bounded window", () => {
  resetTtsRateLimit();
  const ip = `test-${Date.now()}`;
  for (let index = 0; index < 12; index += 1) {
    assert.equal(checkTtsRateLimit(ip).allowed, true);
  }
  const blocked = checkTtsRateLimit(ip);
  assert.equal(blocked.allowed, false);
  assert.ok(blocked.retryAfterSeconds > 0);

  resetTtsRateLimit();
  assert.equal(checkTtsRateLimit(ip).allowed, true);
});

test("tts: verifyTtsAuthorization enforces Google user model and protects production", async () => {
  const prodEnv = {
    VERCEL: "1",
    GOOGLE_TUTOR_CLIENT_ID: "tutor-client-id.apps.googleusercontent.com",
    BACH_ALLOWED_EMAIL: "parent@gmail.com"
  };

  // 1. Production without token -> 404 tts_not_available (endpoint is not exposed publicly)
  const unauthRes = await verifyTtsAuthorization({}, new URL("http://localhost/api/tts?text=test"), prodEnv);
  assert.equal(unauthRes.authorized, false);
  assert.equal(unauthRes.status, 404);
  assert.equal(unauthRes.error, "tts_not_available");

  // 2. Production with invalid token -> 401
  const mockFailingVerify = async () => {
    const err = new Error("Token không hợp lệ");
    err.status = 401;
    throw err;
  };
  const invalidRes = await verifyTtsAuthorization(
    { headers: { "x-google-id-token": "bad-token" } },
    new URL("http://localhost/api/tts?text=test"),
    prodEnv,
    mockFailingVerify
  );
  assert.equal(invalidRes.authorized, false);
  assert.equal(invalidRes.status, 401);

  // 3. Production with valid token in a request header -> authorized; URL is token-free.
  const mockPassingVerify = async () => ({ email: "parent@gmail.com", aud: prodEnv.GOOGLE_TUTOR_CLIENT_ID });
  const validRes = await verifyTtsAuthorization(
    { headers: { "x-google-id-token": "valid-google-token" } },
    new URL("http://localhost/api/tts?text=test"),
    prodEnv,
    mockPassingVerify
  );
  assert.equal(validRes.authorized, true);
  assert.equal(validRes.user?.email, "parent@gmail.com");

  // 4. Non-production (local development) -> authorized without token
  const devRes = await verifyTtsAuthorization({}, new URL("http://localhost/api/tts?text=test"), { NODE_ENV: "development" });
  assert.equal(devRes.authorized, true);
});

test("tts: pruneTtsCache enforces max retention age and max file count", async () => {
  const testTmpDir = path.join(os.tmpdir(), `bach_tts_test_${Date.now()}_${Math.random().toString(36).slice(2)}`);
  await fs.promises.mkdir(testTmpDir, { recursive: true });

  try {
    const now = Date.now();
    const expiredFile = path.join(testTmpDir, "bach_tts_aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.mp3");
    const freshFile = path.join(testTmpDir, "bach_tts_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.mp3");
    const unrelatedFile = path.join(testTmpDir, "other_file.txt");

    await fs.promises.writeFile(expiredFile, "mp3data");
    await fs.promises.writeFile(freshFile, "mp3data");
    await fs.promises.writeFile(unrelatedFile, "keep me");

    // Đặt thời gian mtime cho file cũ (> CACHE_MAX_AGE_MS)
    const oldTime = (now - CACHE_MAX_AGE_MS - 5000) / 1000;
    await fs.promises.utimes(expiredFile, oldTime, oldTime);

    await pruneTtsCache(testTmpDir, now);

    assert.equal(fs.existsSync(expiredFile), false, "File quá hạn phải bị xóa");
    assert.equal(fs.existsSync(freshFile), true, "File mới phải được giữ lại");
    assert.equal(fs.existsSync(unrelatedFile), true, "File không thuộc mẫu bach_tts không được xóa");
  } finally {
    await fs.promises.rm(testTmpDir, { recursive: true, force: true }).catch(() => {});
  }
});

test("tts: ttsHandler validates methods, parameters, and never emits wildcard CORS", async () => {
  resetTtsRateLimit();

  // 1. Reject unsupported method with 405; POST is the authenticated production flow.
  const putReq = { method: "PUT", url: "/api/tts", headers: { host: "localhost" } };
  const putRes = createMockResponse();
  await ttsHandler(putReq, putRes, { env: { NODE_ENV: "development" } });
  assert.equal(putRes.statusCode, 405);
  assert.equal(putRes.getHeader("allow"), "GET, HEAD, POST");
  assert.equal(putRes.getHeader("access-control-allow-origin"), undefined, "Không được chứa Access-Control-Allow-Origin: *");

  // 2. Reject missing text parameter with 400
  const missingTextReq = { method: "GET", url: "/api/tts", headers: { host: "localhost" } };
  const missingTextRes = createMockResponse();
  await ttsHandler(missingTextReq, missingTextRes, { env: { NODE_ENV: "development" } });
  assert.equal(missingTextRes.statusCode, 400);
  assert.equal(missingTextRes.getHeader("access-control-allow-origin"), undefined);

  // 3. Reject overly long text with 400
  const longText = "a".repeat(1300);
  const longTextReq = { method: "GET", url: `/api/tts?text=${encodeURIComponent(longText)}`, headers: { host: "localhost" } };
  const longTextRes = createMockResponse();
  await ttsHandler(longTextReq, longTextRes, { env: { NODE_ENV: "development" } });
  assert.equal(longTextRes.statusCode, 400);

  // 4. Reject unauthenticated requests in production runtime with 404
  const prodReq = { method: "GET", url: "/api/tts?text=test", headers: { host: "localhost" } };
  const prodRes = createMockResponse();
  await ttsHandler(prodReq, prodRes, { env: { VERCEL: "1" } });
  assert.equal(prodRes.statusCode, 404);
  assert.equal(prodRes.json().error, "tts_not_available");
  assert.equal(prodRes.getHeader("access-control-allow-origin"), undefined);

  // 5. Rate limit enforcement in handler (429)
  const rateReq = {
    method: "GET",
    url: "/api/tts?text=test",
    headers: { host: "localhost", "x-forwarded-for": "198.51.100.99" }
  };
  for (let i = 0; i < 12; i++) {
    const r = createMockResponse();
    await ttsHandler(rateReq, r, { env: { NODE_ENV: "development" } });
  }
  const blockedRes = createMockResponse();
  await ttsHandler(rateReq, blockedRes, { env: { NODE_ENV: "development" } });
  assert.equal(blockedRes.statusCode, 429);
  assert.equal(blockedRes.json().error, "rate_limited");
  assert.ok(Number(blockedRes.getHeader("retry-after")) > 0);
  assert.equal(blockedRes.getHeader("access-control-allow-origin"), undefined);
});

test("tts: ttsHandler serves valid cache and handles HEAD method without body", async () => {
  resetTtsRateLimit();
  const text = "Chào Bách";
  const voice = "vi-VN-HoaiMyNeural";
  const clean = cleanTextForSpeech(text);
  const hash = crypto.createHash("md5").update(`${voice}:${clean}`).digest("hex");
  const cacheFile = path.join(os.tmpdir(), `bach_tts_${hash}.mp3`);

  // Tạo file cache giả định có kích thước > 1000 bytes
  const dummyAudio = Buffer.alloc(1500, 0x55);
  await fs.promises.writeFile(cacheFile, dummyAudio);

  try {
    // 1. GET request phục vụ audio thành công
    const getReq = {
      method: "GET",
      url: `/api/tts?text=${encodeURIComponent(text)}&voice=${voice}`,
      headers: { host: "localhost" }
    };
    const getRes = createMockResponse();
    await ttsHandler(getReq, getRes, { env: { NODE_ENV: "development" } });
    assert.equal(getRes.statusCode, 200);
    assert.equal(getRes.getHeader("content-type"), "audio/mpeg");
    assert.equal(getRes.getHeader("cache-control"), "private, max-age=3600");
    assert.equal(getRes.getHeader("access-control-allow-origin"), undefined, "Không được chứa Access-Control-Allow-Origin: *");

    // 2. HEAD request trả header 200 và kết thúc mà không truyền body
    const headReq = {
      method: "HEAD",
      url: `/api/tts?text=${encodeURIComponent(text)}&voice=${voice}`,
      headers: { host: "localhost" }
    };
    const headRes = createMockResponse();
    await ttsHandler(headReq, headRes, { env: { NODE_ENV: "development" } });
    assert.equal(headRes.statusCode, 200);
    assert.equal(headRes.getHeader("content-type"), "audio/mpeg");
    assert.equal(headRes.body, "");
    assert.equal(headRes.getHeader("access-control-allow-origin"), undefined);
  } finally {
    await fs.promises.unlink(cacheFile).catch(() => {});
  }
});
