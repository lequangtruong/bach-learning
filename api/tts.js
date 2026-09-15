import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { EdgeTTS } from "node-edge-tts";
import { verifyGoogleIdToken } from "./tutor.js";

export function cleanTextForSpeech(rawText) {
  if (typeof rawText !== "string") return "";
  return rawText
    .replace(/^(\[(?:Active Workspace|Working Folder):[^\]]*\]\s*)+/gim, "")
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/(\*\*|__)(.*?)\1/g, "$2")
    .replace(/(\*|_)(.*?)\1/g, "$2")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/^[•\-\*]\s+/gm, "")
    .replace(/\n+/g, ". ")
    .replace(/\s{2,}/g, " ")
    .trim();
}

const ALLOWED_VOICES = new Set([
  "vi-VN-HoaiMyNeural", // Nữ mượt mà, tự nhiên
  "vi-VN-NamMinhNeural"  // Nam trầm ấm
]);

export const RATE_LIMIT_WINDOW_MS = 60_000;
export const RATE_LIMIT_MAX_REQUESTS = 12;
export const CACHE_MAX_AGE_MS = 60 * 60 * 1000;
export const CACHE_MAX_FILES = 80;
const requestBuckets = new Map();

export function getRequestIp(req) {
  const forwarded = req?.headers?.["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.trim()) return forwarded.split(",")[0].trim();
  return req?.socket?.remoteAddress || "unknown";
}

export function isProductionRuntime(env = process.env) {
  return Boolean(env.VERCEL || env.AWS_LAMBDA_FUNCTION_NAME || env.NODE_ENV === "production");
}

export function checkTtsRateLimit(ip, now = Date.now()) {
  for (const [key, bucket] of requestBuckets) {
    if (now - bucket.startedAt >= RATE_LIMIT_WINDOW_MS) requestBuckets.delete(key);
  }
  if (requestBuckets.size > 1000) {
    for (const [key, bucket] of requestBuckets) {
      if (now - bucket.startedAt >= RATE_LIMIT_WINDOW_MS) requestBuckets.delete(key);
    }
  }
  const bucket = requestBuckets.get(ip);
  if (!bucket) {
    requestBuckets.set(ip, { startedAt: now, count: 1 });
    return { allowed: true, retryAfterSeconds: 0 };
  }
  if (bucket.count >= RATE_LIMIT_MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((RATE_LIMIT_WINDOW_MS - (now - bucket.startedAt)) / 1000))
    };
  }
  bucket.count += 1;
  return { allowed: true, retryAfterSeconds: 0 };
}

export function resetTtsRateLimit() {
  requestBuckets.clear();
}

export function getAuthToken(req, url) {
  const headerToken = req?.headers?.["x-google-id-token"] || req?.headers?.["x-id-token"];
  if (typeof headerToken === "string" && headerToken.trim()) return headerToken.trim();

  const authHeader = req?.headers?.authorization;
  if (typeof authHeader === "string" && authHeader.startsWith("Bearer ")) {
    const bearer = authHeader.slice(7).trim();
    if (bearer) return bearer;
  }

  return null;
}

export async function readTtsPayload(req, maxBytes = 4096) {
  if (req?.body && typeof req.body === "object") return req.body;
  if (!req || typeof req.on !== "function") return {};
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on("data", chunk => {
      size += chunk.length;
      if (size > maxBytes) {
        reject(Object.assign(new Error("payload_too_large"), { status: 413 }));
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => {
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}"));
      } catch {
        reject(Object.assign(new Error("invalid_json"), { status: 400 }));
      }
    });
    req.on("error", reject);
  });
}

export async function verifyTtsAuthorization(req, url, env = process.env, verifyFn = verifyGoogleIdToken) {
  const isProd = isProductionRuntime(env);
  const clientId = env.GEMINI_CLIENT_ID;
  const tutorClientId = env.GOOGLE_TUTOR_CLIENT_ID || clientId;
  const allowedEmail = env.BACH_ALLOWED_EMAIL;
  const token = getAuthToken(req, url);

  // Nếu có ID token và đã cấu hình auth, xác thực qua Google user model tương tự tutor
  if (token && tutorClientId) {
    try {
      const payload = await verifyFn({
        idToken: token,
        allowedAudience: [tutorClientId, clientId].filter(Boolean),
        allowedEmail,
        isVercel: isProd
      });
      return { authorized: true, user: payload };
    } catch (err) {
      return {
        authorized: false,
        status: err.status || 401,
        error: err.message || "Xác thực tài khoản Google không thành công."
      };
    }
  }

  // Trên môi trường production, tuyệt đối không mở công khai nếu không có Google auth hợp lệ
  if (isProd) {
    return { authorized: false, status: 404, error: "tts_not_available" };
  }

  // Môi trường local development / testing
  return { authorized: true };
}

export async function pruneTtsCache(tmpDir = os.tmpdir(), now = Date.now()) {
  try {
    const entries = await fs.promises.readdir(tmpDir, { withFileTypes: true });
    const files = [];
    for (const entry of entries) {
      if (!entry.isFile() || !/^bach_tts_[a-f0-9]{32}\.mp3$/.test(entry.name)) continue;
      const file = path.join(tmpDir, entry.name);
      try {
        const stat = await fs.promises.stat(file);
        if (now - stat.mtimeMs > CACHE_MAX_AGE_MS) {
          await fs.promises.unlink(file).catch(() => {});
        } else {
          files.push({ file, mtimeMs: stat.mtimeMs });
        }
      } catch {}
    }
    files.sort((a, b) => a.mtimeMs - b.mtimeMs);
    const excess = files.slice(0, Math.max(0, files.length - CACHE_MAX_FILES));
    await Promise.all(excess.map(({ file }) => fs.promises.unlink(file).catch(() => {})));
  } catch {}
}

export default async function ttsHandler(req, res, { env = process.env, verifyFn = verifyGoogleIdToken } = {}) {
  try {
    // 1. POST là luồng chuẩn vì ID token không được đưa vào URL. GET/HEAD chỉ
    // được giữ cho local development tương thích ngược với Audio cũ.
    if (req.method && req.method !== "GET" && req.method !== "HEAD" && req.method !== "POST") {
      res.writeHead(405, {
        "Content-Type": "application/json; charset=utf-8",
        "Allow": "GET, HEAD, POST"
      });
      res.end(JSON.stringify({ error: "Method not allowed. Chỉ chấp nhận GET, HEAD hoặc POST." }));
      return;
    }

    // 2. Phân tích URL
    let url;
    try {
      url = new URL(req.url, `http://${req.headers?.host || "localhost"}`);
    } catch {
      res.writeHead(400, { "Content-Type": "application/json; charset=utf-8" });
      res.end(JSON.stringify({ error: "Invalid request URL." }));
      return;
    }

    // 3. Giới hạn theo Google user model của tutor; không mở công khai trên production
    const authResult = await verifyTtsAuthorization(req, url, env, verifyFn);
    if (!authResult.authorized) {
      res.writeHead(authResult.status || 404, { "Content-Type": "application/json; charset=utf-8" });
      res.end(JSON.stringify({ error: authResult.error || "tts_not_available" }));
      return;
    }

    // 4. Rate limiting theo IP client
    const rateLimit = checkTtsRateLimit(getRequestIp(req));
    if (!rateLimit.allowed) {
      res.writeHead(429, {
        "Content-Type": "application/json; charset=utf-8",
        "Retry-After": String(rateLimit.retryAfterSeconds)
      });
      res.end(JSON.stringify({ error: "rate_limited" }));
      return;
    }

    // 5. Kiểm tra tính hợp lệ của tham số
    const payload = req.method === "POST" ? await readTtsPayload(req) : {};
    const rawText = req.method === "POST" ? payload.text : url.searchParams.get("text");
    if (typeof rawText !== "string" || !rawText.trim() || rawText.length > 2400) {
      res.writeHead(400, { "Content-Type": "application/json; charset=utf-8" });
      res.end(JSON.stringify({ error: "Missing or invalid 'text' query parameter." }));
      return;
    }

    let voice = (req.method === "POST" ? payload.voice : url.searchParams.get("voice")) || "vi-VN-HoaiMyNeural";
    if (!ALLOWED_VOICES.has(voice)) {
      voice = "vi-VN-HoaiMyNeural";
    }

    const cleanText = cleanTextForSpeech(rawText);
    if (!cleanText || cleanText.length > 1200) {
      res.writeHead(400, { "Content-Type": "application/json; charset=utf-8" });
      res.end(JSON.stringify({ error: "Missing or invalid 'text' query parameter." }));
      return;
    }

    const hash = crypto.createHash("md5").update(`${voice}:${cleanText}`).digest("hex");
    const cacheFile = path.join(os.tmpdir(), `bach_tts_${hash}.mp3`);
    await pruneTtsCache().catch(() => {});

    // 6. Kiểm tra cache trên đĩa
    let hasValidCache = false;
    try {
      const stats = await fs.promises.stat(cacheFile);
      if (stats.size > 1000) {
        hasValidCache = true;
      }
    } catch {}

    // 7. Nếu chưa có cache, gọi Edge Neural TTS (với Google fallback)
    if (!hasValidCache) {
      try {
        const tts = new EdgeTTS({ voice, lang: "vi-VN", timeout: 8000 });
        await tts.ttsPromise(cleanText, cacheFile);
        const newStats = await fs.promises.stat(cacheFile);
        if (newStats.size > 1000) {
          hasValidCache = true;
        }
      } catch (edgeErr) {
        console.warn("[TTS] EdgeTTS failed, attempting Google fallback:", edgeErr?.message || edgeErr);
        try {
          const gUrl = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=vi&q=${encodeURIComponent(cleanText.slice(0, 200))}`;
          const gRes = await fetch(gUrl, {
            headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" },
            signal: AbortSignal.timeout(5000)
          });
          if (gRes.ok) {
            const arrayBuf = await gRes.arrayBuffer();
            const buf = Buffer.from(arrayBuf);
            if (buf.length > 500) {
              await fs.promises.writeFile(cacheFile, buf);
              hasValidCache = true;
            }
          }
        } catch (gErr) {
          console.warn("[TTS] Google fallback failed:", gErr?.message || gErr);
        }
      }
    }

    // 8. Trả về file MP3 nếu tổng hợp thành công (tránh Access-Control-Allow-Origin: *)
    if (hasValidCache) {
      const stats = await fs.promises.stat(cacheFile);
      res.writeHead(200, {
        "Content-Type": "audio/mpeg",
        "Content-Length": stats.size,
        "Cache-Control": "private, max-age=3600",
        "Accept-Ranges": "bytes"
      });
      if (req.method === "HEAD") {
        res.end();
        return;
      }
      const stream = fs.createReadStream(cacheFile);
      stream.pipe(res);
      return;
    }

    // 9. Báo lỗi 502 để client tự động fallback về Web Speech API cục bộ
    res.writeHead(502, {
      "Content-Type": "application/json; charset=utf-8"
    });
    res.end(JSON.stringify({ error: "tts_generation_failed" }));
  } catch (err) {
    console.error("[TTS] Handler unexpected error:", err);
    res.writeHead(500, {
      "Content-Type": "application/json; charset=utf-8"
    });
    res.end(JSON.stringify({ error: "internal_server_error" }));
  }
}
