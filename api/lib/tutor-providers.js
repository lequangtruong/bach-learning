// Tutor Providers: Gemini OAuth REST and Local AGY CLI

import { execFile } from "node:child_process";

const tokenCache = new Map();

/**
 * Xóa cache token (hữu ích cho unit test)
 */
export function clearTokenCache() {
  tokenCache.clear();
}

/**
 * Lấy Google Access Token từ OAuth Refresh Token
 * @param {object} params
 * @param {string} params.clientId
 * @param {string} params.clientSecret
 * @param {string} params.refreshToken
 * @param {Function} [params.fetchImpl]
 * @param {boolean} [params.forceRefresh]
 * @returns {Promise<string>}
 */
export async function getGeminiAccessToken({
  clientId,
  clientSecret,
  refreshToken,
  fetchImpl = globalThis.fetch,
  forceRefresh = false
} = {}) {
  if (!clientId || !clientSecret || !refreshToken) {
    const err = new Error("Thiếu thông tin xác thực OAuth Gemini (clientId, clientSecret, refreshToken).");
    err.code = "ERR_GEMINI_AUTH_MISSING";
    throw err;
  }

  const cacheKey = `${clientId}:${refreshToken}`;
  const now = Date.now();
  const cached = tokenCache.get(cacheKey);

  if (!forceRefresh && cached && cached.expiresAt > now + 60000 && fetchImpl === globalThis.fetch) {
    return cached.accessToken;
  }

  const tokenUrl = "https://oauth2.googleapis.com/token";
  const params = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    refresh_token: refreshToken,
    grant_type: "refresh_token"
  });

  let resp;
  try {
    resp = await fetchImpl(tokenUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString()
    });
  } catch (netErr) {
    const err = new Error(`Lỗi kết nối mạng khi lấy access token: ${netErr.message}`);
    err.code = "ERR_AUTH_NETWORK";
    throw err;
  }

  if (!resp.ok) {
    const errData = await resp.json().catch(() => ({}));
    const err = new Error(`Lỗi cấp lại access token: ${errData.error_description || resp.statusText || resp.status}`);
    err.code = "ERR_AUTH_TOKEN_REFRESH";
    err.status = resp.status;
    throw err;
  }

  const data = await resp.json();
  const accessToken = data.access_token;
  if (!accessToken) {
    const err = new Error("Google OAuth không trả về access_token.");
    err.code = "ERR_AUTH_INVALID_TOKEN_RESPONSE";
    throw err;
  }

  const expiresIn = Number(data.expires_in) || 3600;
  if (fetchImpl === globalThis.fetch) {
    tokenCache.set(cacheKey, {
      accessToken,
      expiresAt: now + expiresIn * 1000
    });
  }

  return accessToken;
}

/**
 * Gọi Gemini Generate Content API qua REST với Google Access Token
 * @param {object} params
 * @param {string} params.accessToken
 * @param {string} params.projectId
 * @param {string} [params.model]
 * @param {string} [params.systemPrompt]
 * @param {string} params.userMessage
 * @param {Array} [params.history]
 * @param {object} [params.writingImage]
 * @param {Function} [params.fetchImpl]
 * @returns {Promise<string>}
 */
export async function callGeminiRest({
  accessToken,
  projectId,
  model = "gemini-2.5-flash",
  systemPrompt = "",
  userMessage = "",
  history = [],
  writingImage = null,
  fetchImpl = globalThis.fetch
} = {}) {
  if (!projectId || typeof projectId !== "string" || !projectId.trim()) {
    const err = new Error("Thiếu GEMINI_PROJECT_ID để định tuyến hạn ngạch Gemini.");
    err.code = "ERR_GEMINI_CONFIG_MISSING";
    throw err;
  }

  const contents = [];
  if (Array.isArray(history)) {
    for (const item of history) {
      if (item && item.text) {
        contents.push({
          role: item.role === "model" ? "model" : "user",
          parts: [{ text: item.text }]
        });
      }
    }
  }

  const userParts = [{ text: userMessage || "" }];
  if (writingImage && writingImage.mimeType && writingImage.data) {
    userParts.push({
      inlineData: {
        mimeType: writingImage.mimeType,
        data: writingImage.data
      }
    });
  }
  contents.push({ role: "user", parts: userParts });

  const bodyPayload = { contents };
  if (systemPrompt) {
    bodyPayload.systemInstruction = {
      parts: [{ text: systemPrompt }]
    };
  }

  const endpointModel = model || "gemini-2.5-flash";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(endpointModel)}:generateContent`;

  const resp = await fetchImpl(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${accessToken}`,
      "x-goog-user-project": projectId.trim()
    },
    body: JSON.stringify(bodyPayload)
  });

  if (!resp.ok) {
    const errText = await resp.text().catch(() => "");
    const err = new Error(`Lỗi gọi Gemini REST API (${resp.status}): ${errText}`);
    err.status = resp.status;
    err.code = "ERR_GEMINI_REST_FAILED";
    throw err;
  }

  const json = await resp.json();
  const parts = json?.candidates?.[0]?.content?.parts;
  if (!Array.isArray(parts) || parts.length === 0) {
    return "";
  }

  return parts.map(p => p.text || "").join("");
}

/**
 * Gọi local agy CLI fallback
 * @param {object} params
 * @param {string} params.prompt
 * @param {string} [params.model]
 * @param {Function} [params.execFileImpl]
 * @returns {Promise<string>}
 */
export async function callLocalAgyCli({
  prompt,
  model = "gemini-3.8-flash",
  execFileImpl
} = {}) {
  if (!prompt || typeof prompt !== "string") {
    const err = new Error("Thiếu nội dung prompt cho agy CLI.");
    err.code = "ERR_AGY_PROMPT_MISSING";
    throw err;
  }

  const runner = execFileImpl || execFile;
  const args = ["--model", model, prompt];

  return new Promise((resolve, reject) => {
    try {
      const maybePromise = runner("agy", args, { timeout: 30000 }, (err, stdout, stderr) => {
        if (err) return reject(err);
        resolve(String(stdout || "").trim());
      });
      if (maybePromise && typeof maybePromise.then === "function") {
        maybePromise.then(
          res => resolve(String(res?.stdout || res || "").trim()),
          reject
        );
      }
    } catch (e) {
      reject(e);
    }
  });
}

/**
 * Thực thi hàm gọi Gemini kèm cơ chế 401 Refresh Retry
 * @param {object} params
 * @param {string} params.clientId
 * @param {string} params.clientSecret
 * @param {string} params.refreshToken
 * @param {Function} params.fn
 * @param {Function} [params.fetchImpl]
 * @returns {Promise<any>}
 */
export async function executeWithAuthRetry({
  clientId,
  clientSecret,
  refreshToken,
  fn,
  fetchImpl = globalThis.fetch
}) {
  let accessToken = await getGeminiAccessToken({ clientId, clientSecret, refreshToken, fetchImpl });
  try {
    return await fn(accessToken);
  } catch (err) {
    if (err && err.status === 401) {
      accessToken = await getGeminiAccessToken({ clientId, clientSecret, refreshToken, fetchImpl, forceRefresh: true });
      return await fn(accessToken);
    }
    throw err;
  }
}

/**
 * Gọi Gemini Generate Content qua SSE Stream
 * @param {object} params
 * @returns {AsyncGenerator<string, void, unknown>}
 */
export async function* callGeminiRestStream({
  accessToken,
  projectId,
  model = "gemini-2.5-flash",
  systemPrompt = "",
  userMessage = "",
  history = [],
  writingImage = null,
  signal = null,
  fetchImpl = globalThis.fetch
} = {}) {
  if (!projectId || typeof projectId !== "string" || !projectId.trim()) {
    const err = new Error("Thiếu GEMINI_PROJECT_ID để định tuyến hạn ngạch Gemini.");
    err.code = "ERR_GEMINI_CONFIG_MISSING";
    throw err;
  }

  const contents = [];
  if (Array.isArray(history)) {
    for (const item of history) {
      if (item && item.text) {
        contents.push({
          role: item.role === "model" ? "model" : "user",
          parts: [{ text: item.text }]
        });
      }
    }
  }

  const userParts = [{ text: userMessage || "" }];
  if (writingImage && writingImage.mimeType && writingImage.data) {
    userParts.push({
      inlineData: {
        mimeType: writingImage.mimeType,
        data: writingImage.data
      }
    });
  }
  contents.push({ role: "user", parts: userParts });

  const bodyPayload = { contents };
  if (systemPrompt) {
    bodyPayload.systemInstruction = {
      parts: [{ text: systemPrompt }]
    };
  }

  const endpointModel = model || "gemini-2.5-flash";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(endpointModel)}:streamGenerateContent?alt=sse`;

  const resp = await fetchImpl(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${accessToken}`,
      "x-goog-user-project": projectId.trim()
    },
    body: JSON.stringify(bodyPayload),
    signal
  });

  if (!resp.ok) {
    const errText = await resp.text().catch(() => "");
    const err = new Error(`Lỗi gọi Gemini REST Stream API (${resp.status}): ${errText}`);
    err.status = resp.status;
    err.code = "ERR_GEMINI_REST_FAILED";
    throw err;
  }

  if (!resp.body) return;

  const reader = typeof resp.body.getReader === "function" ? resp.body.getReader() : null;
  const decoder = new TextDecoder();
  let buffer = "";

  if (reader) {
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";
        for (const line of lines) {
          const trimmed = line.trim();
          if (trimmed.startsWith("data:")) {
            const jsonStr = trimmed.slice(5).trim();
            if (jsonStr) {
              try {
                const parsed = JSON.parse(jsonStr);
                const textChunk = parsed?.candidates?.[0]?.content?.parts?.map(p => p.text || "").join("") || "";
                if (textChunk) yield textChunk;
              } catch {
                // Bỏ qua lỗi parse JSON của chunk không hoàn chỉnh
              }
            }
          }
        }
      }
      if (buffer.trim().startsWith("data:")) {
        try {
          const parsed = JSON.parse(buffer.trim().slice(5).trim());
          const textChunk = parsed?.candidates?.[0]?.content?.parts?.map(p => p.text || "").join("") || "";
          if (textChunk) yield textChunk;
        } catch {}
      }
    } finally {
      reader.releaseLock();
    }
  } else if (resp.body[Symbol.asyncIterator]) {
    for await (const chunk of resp.body) {
      buffer += typeof chunk === "string" ? chunk : decoder.decode(chunk, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() || "";
      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith("data:")) {
          const jsonStr = trimmed.slice(5).trim();
          if (jsonStr) {
            try {
              const parsed = JSON.parse(jsonStr);
              const textChunk = parsed?.candidates?.[0]?.content?.parts?.map(p => p.text || "").join("") || "";
              if (textChunk) yield textChunk;
            } catch {}
          }
        }
      }
    }
  }
}
