import test from "node:test";
import assert from "node:assert/strict";
import tutorHandler, {
  buildTutorSystemPrompt,
  boundString,
  parseTutorResponse,
  checkRateLimit,
  getGeminiAccessToken,
  callGeminiRest,
  callLocalAgyCli,
  verifyGoogleIdToken,
  executeWithAuthRetry,
  callGeminiRestStream
} from "../api/tutor.js";
import {
  buildTutorSystemPrompt as directBuildPrompt,
  boundString as directBoundString,
  parseTutorResponse as directParseResponse
} from "../api/lib/tutor-prompt.js";
import { checkRateLimit as directCheckRateLimit, resetRateLimit } from "../api/lib/rate-limit.js";
import {
  getGeminiAccessToken as directGetToken,
  callGeminiRest as directCallRest,
  callLocalAgyCli as directCallAgy,
  executeWithAuthRetry as directExecuteRetry,
  callGeminiRestStream as directCallStream,
  clearTokenCache
} from "../api/lib/tutor-providers.js";

function createMockResponse() {
  let statusCode = 200;
  let headers = {};
  let body = "";

  return {
    get statusCode() { return statusCode; },
    set statusCode(code) { statusCode = code; },
    setHeader(key, value) { headers[key.toLowerCase()] = value; },
    getHeader(key) { return headers[key.toLowerCase()]; },
    get headers() { return headers; },
    get body() { return body; },
    json() { return JSON.parse(body); },
    end(data) { body = data || ""; }
  };
}

test("api/tutor.js re-exports all required module symbols and maintains API contract", () => {
  assert.equal(typeof tutorHandler, "function");
  assert.equal(typeof buildTutorSystemPrompt, "function");
  assert.equal(typeof boundString, "function");
  assert.equal(typeof parseTutorResponse, "function");
  assert.equal(typeof checkRateLimit, "function");
  assert.equal(typeof getGeminiAccessToken, "function");
  assert.equal(typeof callGeminiRest, "function");
  assert.equal(typeof callLocalAgyCli, "function");
  assert.equal(typeof verifyGoogleIdToken, "function");

  // Re-exports match direct exports
  assert.equal(buildTutorSystemPrompt, directBuildPrompt);
  assert.equal(boundString, directBoundString);
  assert.equal(parseTutorResponse, directParseResponse);
  assert.equal(checkRateLimit, directCheckRateLimit);
  assert.equal(getGeminiAccessToken, directGetToken);
  assert.equal(callGeminiRest, directCallRest);
  assert.equal(callLocalAgyCli, directCallAgy);
});

test("tutor-prompt: boundString bounds, trims, and handles edge cases safely", () => {
  assert.equal(boundString("  hello world  ", 5), "hello");
  assert.equal(boundString("short", 10), "short");
  assert.equal(boundString(null, 10), "");
  assert.equal(boundString(undefined, 10), "");
  assert.equal(boundString(12345, 10), "");
  assert.equal(boundString("", 10), "");
});

test("tutor-prompt: buildTutorSystemPrompt builds student tutor and parent summary prompts", () => {
  const studentPrompt = buildTutorSystemPrompt("math", "w5", "Phép nhân số có nhiều chữ số");
  assert.match(studentPrompt, /lớp 4/i);
  assert.match(studentPrompt, /Toán/);
  assert.match(studentPrompt, /w5/);
  assert.match(studentPrompt, /Phép nhân/);
  assert.match(studentPrompt, /KHÔNG PHẢI công cụ lập trình/i);
  assert.match(studentPrompt, /TUYỆT ĐỐI KHÔNG làm bài hộ/i);
  assert.match(studentPrompt, /gợi ý từng nấc/i);

  const vietnamesePrompt = buildTutorSystemPrompt("vietnamese", "w2", "Từ láy và từ ghép");
  assert.match(vietnamesePrompt, /Tiếng Việt/);
  assert.match(vietnamesePrompt, /w2/);

  const parentPrompt = buildTutorSystemPrompt("math", "w5", "Phép nhân", "parent_summary");
  assert.match(parentPrompt, /báo cáo cuối tuần cho phụ huynh/i);
  assert.match(parentPrompt, /Không bịa điểm số/i);
});

test("tutor-prompt: parseTutorResponse parses text, JSON responses, and embedded learning actions", () => {
  // Plain text
  const plain = parseTutorResponse("Con hãy quan sát chữ số hàng trăm trước nhé.");
  assert.equal(plain.answer, "Con hãy quan sát chữ số hàng trăm trước nhé.");
  assert.equal(plain.learningAction, null);

  // Full JSON response
  const jsonResp = parseTutorResponse(JSON.stringify({
    answer: "Tuyệt vời, Bách đã tính đúng!",
    learningAction: { type: "AWARD_STAR", stars: 1 }
  }));
  assert.equal(jsonResp.answer, "Tuyệt vời, Bách đã tính đúng!");
  assert.deepEqual(jsonResp.learningAction, { type: "AWARD_STAR", stars: 1 });

  // Markdown code block with learningAction
  const markdownResp = parseTutorResponse(
    "Gợi ý cho con:\n1. Tính tổng\n```json\n{\n  \"learningAction\": { \"hintLevel\": 2 }\n}\n```"
  );
  assert.equal(markdownResp.answer, "Gợi ý cho con:\n1. Tính tổng");
  assert.deepEqual(markdownResp.learningAction, { hintLevel: 2 });

  // Non-string fallback
  const fallback = parseTutorResponse(null);
  assert.equal(fallback.answer, "");
  assert.equal(fallback.learningAction, null);
});

test("rate-limit: checkRateLimit restricts excessive requests per IP", () => {
  resetRateLimit();
  const testIp = "192.168.1.50";

  // First 3 requests should pass
  assert.equal(checkRateLimit(testIp, 3, 60000), true);
  assert.equal(checkRateLimit(testIp, 3, 60000), true);
  assert.equal(checkRateLimit(testIp, 3, 60000), true);

  // 4th request must be blocked
  assert.equal(checkRateLimit(testIp, 3, 60000), false);

  // Different IP should still pass
  assert.equal(checkRateLimit("192.168.1.51", 3, 60000), true);

  resetRateLimit();
  assert.equal(checkRateLimit(testIp, 3, 60000), true);
});

test("tutor-providers: getGeminiAccessToken validates config and refreshes token", async () => {
  clearTokenCache();

  // Rejects missing config
  await assert.rejects(
    async () => {
      await getGeminiAccessToken({ clientId: "", clientSecret: "secret", refreshToken: "token" });
    },
    { code: "ERR_GEMINI_AUTH_MISSING" }
  );

  // Successful token refresh
  const mockFetchSuccess = async (url, options) => {
    assert.equal(url, "https://oauth2.googleapis.com/token");
    assert.equal(options.method, "POST");
    assert.match(options.body, /grant_type=refresh_token/);
    return {
      ok: true,
      json: async () => ({ access_token: "mock-access-token-xyz", expires_in: 3600 })
    };
  };

  const token = await getGeminiAccessToken({
    clientId: "cid",
    clientSecret: "csec",
    refreshToken: "rtok",
    fetchImpl: mockFetchSuccess
  });
  assert.equal(token, "mock-access-token-xyz");

  // Failed token refresh
  const mockFetchFailure = async () => ({
    ok: false,
    status: 400,
    statusText: "Bad Request",
    json: async () => ({ error_description: "Invalid refresh token" })
  });

  await assert.rejects(
    async () => {
      await getGeminiAccessToken({
        clientId: "cid",
        clientSecret: "csec",
        refreshToken: "bad-rtok",
        fetchImpl: mockFetchFailure
      });
    },
    { code: "ERR_AUTH_TOKEN_REFRESH" }
  );
});

test("tutor-providers: callGeminiRest formats payload with history and writingImage", async () => {
  let capturedBody = null;
  let capturedHeaders = null;

  const mockFetch = async (url, options) => {
    capturedHeaders = options.headers;
    capturedBody = JSON.parse(options.body);
    return {
      ok: true,
      json: async () => ({
        candidates: [{ content: { parts: [{ text: "Bước 1: Con tính trong ngoặc trước." }] } }]
      })
    };
  };

  const answer = await callGeminiRest({
    accessToken: "test-token",
    projectId: "gemini-proj",
    model: "gemini-2.5-flash",
    systemPrompt: "Gia sư lớp 4",
    userMessage: "Bài này làm sao ạ?",
    history: [
      { role: "user", text: "Chào gia sư" },
      { role: "model", text: "Chào Bách! Hôm nay con muốn hỏi bài nào?" }
    ],
    writingImage: { mimeType: "image/png", data: "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==" },
    fetchImpl: mockFetch
  });

  assert.equal(answer, "Bước 1: Con tính trong ngoặc trước.");
  assert.equal(capturedHeaders["Authorization"], "Bearer test-token");
  assert.equal(capturedHeaders["x-goog-user-project"], "gemini-proj");

  // Check history structure
  assert.equal(capturedBody.contents.length, 3);
  assert.equal(capturedBody.contents[0].role, "user");
  assert.equal(capturedBody.contents[1].role, "model");

  // Check user message and image in contents
  const lastContent = capturedBody.contents[2];
  assert.equal(lastContent.role, "user");
  assert.equal(lastContent.parts.length, 2);
  assert.equal(lastContent.parts[0].text, "Bài này làm sao ạ?");
  assert.equal(lastContent.parts[1].inlineData.mimeType, "image/png");
  assert.ok(lastContent.parts[1].inlineData.data.length > 0);
});

test("tutor-providers: callLocalAgyCli invokes agy CLI runner correctly", async () => {
  // Missing prompt check
  await assert.rejects(
    async () => {
      await callLocalAgyCli({ prompt: "" });
    },
    { code: "ERR_AGY_PROMPT_MISSING" }
  );

  // Mock runner check
  let capturedCmd = "";
  let capturedArgs = [];
  const mockRunner = (cmd, args, opts, cb) => {
    capturedCmd = cmd;
    capturedArgs = args;
    cb(null, "Phản hồi từ agy cục bộ", "");
  };

  const output = await callLocalAgyCli({
    prompt: "Tính diện tích hình chữ nhật",
    model: "gemini-3.8-flash",
    execFileImpl: mockRunner
  });

  assert.equal(capturedCmd, "agy");
  assert.deepEqual(capturedArgs, ["--model", "gemini-3.8-flash", "Tính diện tích hình chữ nhật"]);
  assert.equal(output, "Phản hồi từ agy cục bộ");
});

test("tutorHandler: enforces POST method, rate limiting, and validates input", async () => {
  resetRateLimit();

  // 1. GET method rejected with 405
  const getReq = { method: "GET", headers: {} };
  const getRes = createMockResponse();
  await tutorHandler(getReq, getRes);
  assert.equal(getRes.statusCode, 405);
  assert.equal(getRes.getHeader("Allow"), "POST");

  // 2. Empty prompt rejected with 400
  const emptyReq = {
    method: "POST",
    headers: { "x-google-id-token": "dummy-token" },
    body: { userMessage: "" }
  };
  const emptyRes = createMockResponse();
  // Opt in to AGY fallback to bypass Google token validation
  const origAgy = process.env.BACH_ENABLE_AGY_FALLBACK;
  process.env.BACH_ENABLE_AGY_FALLBACK = "1";
  try {
    await tutorHandler(emptyReq, emptyRes);
    assert.equal(emptyRes.statusCode, 400);
    assert.match(emptyRes.json().error, /Thiếu nội dung câu hỏi/);
  } finally {
    if (origAgy) process.env.BACH_ENABLE_AGY_FALLBACK = origAgy;
    else delete process.env.BACH_ENABLE_AGY_FALLBACK;
  }

  // 3. Invalid subject rejected with 400
  const badSubjectReq = {
    method: "POST",
    headers: {},
    body: { userMessage: "Hỏi bài", subject: "history" }
  };
  const badSubjectRes = createMockResponse();
  process.env.BACH_ENABLE_AGY_FALLBACK = "1";
  try {
    await tutorHandler(badSubjectReq, badSubjectRes);
    assert.equal(badSubjectRes.statusCode, 400);
    assert.match(badSubjectRes.json().error, /Môn học không hợp lệ/);
  } finally {
    if (origAgy) process.env.BACH_ENABLE_AGY_FALLBACK = origAgy;
    else delete process.env.BACH_ENABLE_AGY_FALLBACK;
  }

  // 4. Invalid weekId rejected with 400
  const badWeekReq = {
    method: "POST",
    headers: {},
    body: { userMessage: "Hỏi bài", weekId: "w50" }
  };
  const badWeekRes = createMockResponse();
  process.env.BACH_ENABLE_AGY_FALLBACK = "1";
  try {
    await tutorHandler(badWeekReq, badWeekRes);
    assert.equal(badWeekRes.statusCode, 400);
    assert.match(badWeekRes.json().error, /Tuần học không hợp lệ/);
  } finally {
    if (origAgy) process.env.BACH_ENABLE_AGY_FALLBACK = origAgy;
    else delete process.env.BACH_ENABLE_AGY_FALLBACK;
  }

  // 5. Image rejected in parent_summary mode
  const badImageReq = {
    method: "POST",
    headers: {},
    body: {
      userMessage: "Báo cáo",
      mode: "parent_summary",
      writingImage: { mimeType: "image/png", data: "AA==" }
    }
  };
  const badImageRes = createMockResponse();
  process.env.BACH_ENABLE_AGY_FALLBACK = "1";
  try {
    await tutorHandler(badImageReq, badImageRes);
    assert.equal(badImageRes.statusCode, 400);
    assert.match(badImageRes.json().error, /không nhận ảnh/);
  } finally {
    if (origAgy) process.env.BACH_ENABLE_AGY_FALLBACK = origAgy;
    else delete process.env.BACH_ENABLE_AGY_FALLBACK;
  }
});

test("executeWithAuthRetry: refreshes token on 401 and retries operation once", async () => {
  let callCount = 0;
  const mockFetch = async () => ({
    ok: true,
    json: async () => ({ access_token: `token_${++callCount}`, expires_in: 3600 })
  });

  let opCount = 0;
  const result = await executeWithAuthRetry({
    clientId: "client-1",
    clientSecret: "secret-1",
    refreshToken: "refresh-1",
    fetchImpl: mockFetch,
    fn: async (token) => {
      opCount++;
      if (opCount === 1) {
        const err = new Error("Unauthorized");
        err.status = 401;
        throw err;
      }
      return `success_with_${token}`;
    }
  });

  assert.equal(opCount, 2);
  assert.equal(result, "success_with_token_2");
});

test("callGeminiRestStream: parses SSE stream chunks and yields text", async () => {
  const sseData = [
    'data: {"candidates":[{"content":{"parts":[{"text":"Chào Bách! "}]}}]}\n\n',
    'data: {"candidates":[{"content":{"parts":[{"text":"Cùng giải bài nhé."}]}}]}\n\n'
  ].join("");

  const mockStream = new ReadableStream({
    start(controller) {
      controller.enqueue(new TextEncoder().encode(sseData));
      controller.close();
    }
  });

  const mockFetch = async () => ({
    ok: true,
    body: mockStream
  });

  const chunks = [];
  for await (const chunk of callGeminiRestStream({
    accessToken: "test_token",
    projectId: "project-1",
    userMessage: "Chào AI",
    fetchImpl: mockFetch
  })) {
    chunks.push(chunk);
  }

  assert.deepEqual(chunks, ["Chào Bách! ", "Cùng giải bài nhé."]);
});

