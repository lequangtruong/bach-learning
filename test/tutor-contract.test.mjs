import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import tutorHandler, {
  buildTutorSystemPrompt,
  boundString,
  getGeminiAccessToken,
  callGeminiRest,
  verifyGoogleIdToken,
  checkRateLimit
} from "../api/tutor.js";

// AIチューター契約、認証、Geminiプロバイダー検証テストスイート

test("tutor system prompt enforces Grade 4 pedagogical boundaries and rejects coding", () => {
  const prompt = buildTutorSystemPrompt("math", "w1", "Đọc đề");
  assert.match(prompt, /lớp 4/i);
  assert.match(prompt, /KHÔNG PHẢI công cụ lập trình/i);
  assert.match(prompt, /gợi ý từng nấc/i);
  assert.match(prompt, /TUYỆT ĐỐI KHÔNG làm bài hộ/i);
  assert.match(prompt, /QUY CHUẨN XƯNG HÔ/i);
  assert.match(prompt, /TUYỆT ĐỐI KHÔNG xưng là 'thầy' hoặc 'cô'/i);
});

test("tutor system prompt has a parent summary mode", () => {
  const prompt = buildTutorSystemPrompt("math", "w1", "Số tự nhiên", "parent_summary");
  assert.match(prompt, /báo cáo cuối tuần cho phụ huynh/i);
  assert.match(prompt, /Không bịa điểm số/i);
});

test("tutor API returns 503 configuration error when auth client ID missing on Vercel", async () => {
  const origClientId = process.env.GEMINI_CLIENT_ID;
  const origTutorId = process.env.GOOGLE_TUTOR_CLIENT_ID;
  const origVercel = process.env.VERCEL;

  delete process.env.GEMINI_CLIENT_ID;
  delete process.env.GOOGLE_TUTOR_CLIENT_ID;
  delete process.env.BACH_ENABLE_AGY_FALLBACK;
  process.env.VERCEL = "1";

  const req = {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: { userMessage: "Con chưa hiểu bài toán này" }
  };
  let statusCode = 0;
  let responseBody = "";

  const res = {
    setHeader() {},
    end(str) { responseBody = str; },
    set statusCode(code) { statusCode = code; },
    get statusCode() { return statusCode; }
  };

  try {
    await tutorHandler(req, res);
    assert.equal(statusCode, 503);
    const parsed = JSON.parse(responseBody);
    assert.match(parsed.error, /chưa được cấu hình xác thực/);
  } finally {
    if (origClientId) process.env.GEMINI_CLIENT_ID = origClientId;
    if (origTutorId) process.env.GOOGLE_TUTOR_CLIENT_ID = origTutorId;
    if (origVercel) process.env.VERCEL = origVercel;
    else delete process.env.VERCEL;
  }
});

test("tutor API requires Google ID Token (401) when not in explicit AGY fallback", async () => {
  const origClientId = process.env.GEMINI_CLIENT_ID;
  const origTutorId = process.env.GOOGLE_TUTOR_CLIENT_ID;
  const origAgy = process.env.BACH_ENABLE_AGY_FALLBACK;

  process.env.GOOGLE_TUTOR_CLIENT_ID = "test-client-id.apps.googleusercontent.com";
  delete process.env.BACH_ENABLE_AGY_FALLBACK;

  const req = {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: { userMessage: "Gợi ý cho con" }
  };
  let statusCode = 0;
  let responseBody = "";

  const res = {
    setHeader() {},
    end(str) { responseBody = str; },
    set statusCode(code) { statusCode = code; },
    get statusCode() { return statusCode; }
  };

  try {
    await tutorHandler(req, res);
    assert.equal(statusCode, 401);
    const parsed = JSON.parse(responseBody);
    assert.match(parsed.error, /Yêu cầu đăng nhập Google/);
  } finally {
    if (origClientId) process.env.GEMINI_CLIENT_ID = origClientId;
    else delete process.env.GEMINI_CLIENT_ID;
    if (origTutorId) process.env.GOOGLE_TUTOR_CLIENT_ID = origTutorId;
    else delete process.env.GOOGLE_TUTOR_CLIENT_ID;
    if (origAgy) process.env.BACH_ENABLE_AGY_FALLBACK = origAgy;
  }
});

test("verifyGoogleIdToken validates audience, email_verified and allowed email", async () => {
  // 1. Mock fetch trả token không hợp lệ (HTTP 400)
  const mockFetchInvalid = async () => ({
    ok: false,
    status: 400,
    json: async () => ({ error_description: "Invalid Value" })
  });

  await assert.rejects(
    async () => {
      await verifyGoogleIdToken({
        idToken: "bad-token",
        allowedAudience: "client-123",
        fetchImpl: mockFetchInvalid
      });
    },
    { code: "ERR_AUTH_INVALID" }
  );

  // 2. Mock fetch trả email_verified = false
  const mockFetchUnverified = async () => ({
    ok: true,
    json: async () => ({
      aud: "client-123",
      email: "user@example.com",
      email_verified: "false"
    })
  });

  await assert.rejects(
    async () => {
      await verifyGoogleIdToken({
        idToken: "valid-unverified-token",
        allowedAudience: "client-123",
        fetchImpl: mockFetchUnverified
      });
    },
    { code: "ERR_AUTH_EMAIL_UNVERIFIED" }
  );

  // 3. Mock fetch trả audience mismatch
  const mockFetchAudMismatch = async () => ({
    ok: true,
    json: async () => ({
      aud: "wrong-client",
      email: "user@example.com",
      email_verified: "true"
    })
  });

  await assert.rejects(
    async () => {
      await verifyGoogleIdToken({
        idToken: "valid-aud-mismatch",
        allowedAudience: "expected-client",
        fetchImpl: mockFetchAudMismatch
      });
    },
    { code: "ERR_AUTH_AUDIENCE_MISMATCH" }
  );

  // 4. Mock fetch hợp lệ và pass verification
  const mockFetchValid = async () => ({
    ok: true,
    json: async () => ({
      aud: "client-123",
      email: "bach.parent@gmail.com",
      email_verified: "true"
    })
  });

  const payload = await verifyGoogleIdToken({
    idToken: "valid-token",
    allowedAudience: "client-123",
    allowedEmail: "bach.parent@gmail.com",
    fetchImpl: mockFetchValid
  });
  assert.equal(payload.email, "bach.parent@gmail.com");
});

test("callGeminiRest enforces GEMINI_PROJECT_ID and sends x-goog-user-project header", async () => {
  let capturedHeaders = null;
  const mockFetch = async (url, options) => {
    capturedHeaders = options.headers;
    return {
      ok: true,
      json: async () => ({
        candidates: [{ content: { parts: [{ text: "Gợi ý bước 1..." }] } }]
      })
    };
  };

  // Nếu thiếu projectId thì phải reject
  await assert.rejects(
    async () => {
      await callGeminiRest({
        accessToken: "mock-token",
        projectId: "",
        systemPrompt: "prompt",
        userMessage: "bài toán",
        fetchImpl: mockFetch
      });
    },
    { code: "ERR_GEMINI_CONFIG_MISSING" }
  );

  // Khi có projectId thì phải gửi header x-goog-user-project
  const result = await callGeminiRest({
    accessToken: "mock-token",
    projectId: "gemini-quota-project-123",
    systemPrompt: "prompt",
    userMessage: "bài toán",
    fetchImpl: mockFetch
  });

  assert.equal(result, "Gợi ý bước 1...");
  assert.equal(capturedHeaders["x-goog-user-project"], "gemini-quota-project-123");
  assert.equal(capturedHeaders["Authorization"], "Bearer mock-token");
});

test("vercel.json configures 30-second maxDuration for api/tutor.js runtime", async () => {
  const vercelConfigRaw = await readFile(new URL("../vercel.json", import.meta.url), "utf8");
  const vercelConfig = JSON.parse(vercelConfigRaw);
  assert.ok(vercelConfig.functions, "vercel.json must define functions configuration");
  assert.equal(typeof vercelConfig.functions["api/tutor.js"], "object");
  assert.equal(vercelConfig.functions["api/tutor.js"].maxDuration, 30);
});

test("writing photo fallback: server reject invalid image (MIME, base64, size, parent_summary)", async () => {
  // Mock response collector helper
  const createMockRes = () => {
    let statusCode = 200;
    let headers = {};
    let body = "";
    return {
      setHeader: (k, v) => { headers[k] = v; },
      end: (data) => { body = data; },
      get statusCode() { return statusCode; },
      set statusCode(c) { statusCode = c; },
      get headers() { return headers; },
      get json() { return body ? JSON.parse(body) : null; }
    };
  };

  const createMockReq = (bodyObj) => ({
    method: "POST",
    headers: { "x-google-id-token": "test-mock-token" },
    body: bodyObj,
    async *[Symbol.asyncIterator]() {
      yield JSON.stringify(bodyObj);
    }
  });

  // Enable AGY fallback to bypass Google OAuth for unit test
  const originalEnv = { ...process.env };
  process.env.BACH_ENABLE_AGY_FALLBACK = "1";
  delete process.env.VERCEL;
  delete process.env.AWS_LAMBDA_FUNCTION_NAME;
  delete process.env.GEMINI_CLIENT_ID;

  try {
    // 1. parent_summary must reject writingImage
    {
      const res = createMockRes();
      const req = createMockReq({
        mode: "parent_summary",
        userMessage: "Tổng kết tuần",
        writingImage: { mimeType: "image/jpeg", data: "aGVsbG8=" }
      });
      await tutorHandler(req, res);
      assert.equal(res.statusCode, 400);
      assert.match(res.json.error, /parent_summary.*không nhận ảnh/i);
    }

    // 2. Reject unsupported mimeType
    {
      const res = createMockRes();
      const req = createMockReq({
        userMessage: "Chữa bài giúp con",
        writingImage: { mimeType: "image/gif", data: "aGVsbG8=" }
      });
      await tutorHandler(req, res);
      assert.equal(res.statusCode, 400);
      assert.match(res.json.error, /Định dạng ảnh không hợp lệ/);
    }

    // 3. Reject data URL prefix in data
    {
      const res = createMockRes();
      const req = createMockReq({
        userMessage: "Chữa bài giúp con",
        writingImage: { mimeType: "image/jpeg", data: "data:image/jpeg;base64,aGVsbG8=" }
      });
      await tutorHandler(req, res);
      assert.equal(res.statusCode, 400);
      assert.match(res.json.error, /tiền tố data URL/);
    }

    // 4. Reject invalid base64 characters or padding
    {
      const res = createMockRes();
      const req = createMockReq({
        userMessage: "Chữa bài giúp con",
        writingImage: { mimeType: "image/png", data: "invalid_base64!!!" }
      });
      await tutorHandler(req, res);
      assert.equal(res.statusCode, 400);
      assert.match(res.json.error, /base64/);
    }

    // 5. Reject image exceeding 1 MiB (status 413)
    {
      const res = createMockRes();
      // 1 MiB + 4 bytes
      const bigBuffer = Buffer.alloc(1024 * 1024 + 4, 1);
      const req = createMockReq({
        userMessage: "Chữa bài giúp con",
        writingImage: { mimeType: "image/webp", data: bigBuffer.toString("base64") }
      });
      await tutorHandler(req, res);
      assert.equal(res.statusCode, 413);
      assert.match(res.json.error, /1 MiB/);
    }
  } finally {
    process.env = originalEnv;
  }
});

test("writing photo fallback: callGeminiRest appends inlineData to the last user message", async () => {
  let capturedBody = null;
  const mockFetch = async (url, options) => {
    capturedBody = JSON.parse(options.body);
    return {
      ok: true,
      json: async () => ({
        candidates: [{ content: { parts: [{ text: "Cô nhận xét bài văn..." }] } }]
      })
    };
  };

  const samplePhoto = {
    mimeType: "image/jpeg",
    data: "dGVzdC1pbWFnZS1ieXRlcw=="
  };

  const responseText = await callGeminiRest({
    accessToken: "mock-access-token",
    projectId: "mock-project-id",
    systemPrompt: "Bạn là cô giáo",
    userMessage: "Chữa bài văn giúp con",
    history: [{ role: "user", text: "Chào cô" }, { role: "model", text: "Chào em" }],
    writingImage: samplePhoto,
    fetchImpl: mockFetch
  });

  assert.equal(responseText, "Cô nhận xét bài văn...");
  assert.ok(capturedBody);
  assert.ok(Array.isArray(capturedBody.contents));

  // Verify history does NOT contain inlineData
  assert.equal(capturedBody.contents[0].parts.length, 1);
  assert.equal(capturedBody.contents[0].parts[0].text, "Chào cô");
  assert.equal(capturedBody.contents[1].parts.length, 1);
  assert.equal(capturedBody.contents[1].parts[0].text, "Chào em");

  // Verify last user content has text part AND inlineData part
  const lastUserContent = capturedBody.contents[capturedBody.contents.length - 1];
  assert.equal(lastUserContent.role, "user");
  assert.equal(lastUserContent.parts.length, 2);
  assert.equal(lastUserContent.parts[0].text, "Chữa bài văn giúp con");
  assert.deepEqual(lastUserContent.parts[1], {
    inlineData: {
      mimeType: "image/jpeg",
      data: "dGVzdC1pbWFnZS1ieXRlcw=="
    }
  });
});
