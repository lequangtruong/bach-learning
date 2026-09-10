// AIチューター（Gemini / Local AGY CLI）連携クライアントモジュール
import { state, allWeeks, buildLearningContext } from "./core.js";
import { formatConversationForTutor, isValidLessonKey } from "../data/data-core.js";

let currentAiAbortController = null;
let saveLocalHandler = async () => {};
let renderGuideHandler = () => {};

export function setAiClientHandlers({ saveLocal, renderGuide } = {}) {
  if (typeof saveLocal === "function") saveLocalHandler = saveLocal;
  if (typeof renderGuide === "function") renderGuideHandler = renderGuide;
}

// Handler gọi /api/tutor
export async function askAi({ mode = "student_tutor", userMessage = null, writingImage = null } = {}) {
  const input = typeof document !== "undefined" ? document.querySelector("#aiPrompt") : null;
  const status = typeof document !== "undefined" ? document.querySelector("#aiStatus") : null;
  const answer = typeof document !== "undefined" ? document.querySelector("#aiAnswer") : null;
  const askBtn = typeof document !== "undefined" ? document.querySelector("#askAi") : null;

  // Hủy luồng request cũ và ngắt speech TTS nếu đang phát
  if (currentAiAbortController) {
    try { currentAiAbortController.abort(); } catch {}
  }
  currentAiAbortController = typeof AbortController !== "undefined" ? new AbortController() : null;
  if (typeof window !== "undefined" && window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }

  const promptText = userMessage || input?.value.trim() || "";
  if (!promptText) {
    if (status) status.textContent = "Bách hoặc phụ huynh hãy viết hoặc nói câu hỏi trước nhé.";
    return;
  }

  const isReviewRequest = mode === "student_tutor"
    && Boolean(state.tutor.pendingSourceLessonKey)
    && Boolean(state.tutor.reviewPromptExpected)
    && promptText === state.tutor.reviewPromptExpected;

  const sourceLessonKey = isReviewRequest && isValidLessonKey(state.tutor.pendingSourceLessonKey)
    ? state.tutor.pendingSourceLessonKey
    : null;
  state.tutor.pendingSourceLessonKey = null;
  state.tutor.reviewPromptExpected = null;

  state.tutor.isLoading = true;
  if (askBtn) askBtn.disabled = true;
  if (askBtn) askBtn.textContent = "Đang suy nghĩ…";
  const thinkingIndicator = typeof document !== "undefined" ? document.querySelector("#aiThinkingIndicator") : null;
  const thinkingText = typeof document !== "undefined" ? document.querySelector("#aiThinkingText") : null;
  if (thinkingIndicator) {
    thinkingIndicator.hidden = false;
    thinkingIndicator.setAttribute("aria-hidden", "false");
  }
  if (status) status.textContent = "AI đang suy nghĩ gợi ý cho Bách…";
  if (answer) answer.hidden = true;

  const thinkingMessages = [
    "AI đang đọc kỹ câu hỏi…",
    "AI đang tìm cách gợi ý vừa sức…",
    "AI đang kiểm tra lại hướng giải…"
  ];
  let thinkingIndex = 0;
  clearInterval(state.tutor.thinkingTimer);
  state.tutor.thinkingTimer = setInterval(() => {
    thinkingIndex = (thinkingIndex + 1) % thinkingMessages.length;
    if (thinkingText) thinkingText.textContent = thinkingMessages[thinkingIndex];
    if (status) status.textContent = thinkingMessages[thinkingIndex];
  }, 1800);

  // Lấy bối cảnh môn và tuần từ bộ chọn Guide rõ ràng
  const weeks = allWeeks();
  const selectedWeekObj = weeks.find(w => w.id === state.tutor.selectedWeek) || weeks[0];
  const subject = state.tutor.selectedSubject || "math";
  const weekFocus = subject === "math"
    ? `${selectedWeekObj.math[0]}: ${selectedWeekObj.math[1]}`
    : `${selectedWeekObj.vietnamese[0]}: ${selectedWeekObj.vietnamese[1]}`;

  const payload = formatConversationForTutor({
    subject,
    weekId: selectedWeekObj.id,
    weekFocus,
    userMessage: promptText,
    history: mode === "parent_summary" ? [] : state.tutor.history,
    mode,
    learningContext: buildLearningContext()
  });

  if (writingImage && typeof writingImage === "object" && writingImage.mimeType && writingImage.data) {
    payload.writingImage = {
      mimeType: writingImage.mimeType,
      data: writingImage.data
    };
  }

  payload.stream = true;
  const headers = {
    "Content-Type": "application/json",
    "Accept": "text/event-stream, application/json"
  };
  // Truyền Google Sign-In ID Token nếu có
  if (state.drive.idToken) {
    headers["X-Google-ID-Token"] = state.drive.idToken;
  }

  try {
    const response = await fetch("/api/tutor", {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
      signal: currentAiAbortController?.signal
    });

    let data = {};
    const contentType = response.headers?.get ? (response.headers.get("content-type") || "") : "";
    if (contentType.includes("text/event-stream") && response.body && typeof response.body.getReader === "function") {
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let streamBuffer = "";
      let streamedText = "";
      let streamedAction = null;
      if (answer) {
        answer.textContent = "";
        answer.hidden = false;
      }
      if (status) status.textContent = "AI đang trả lời…";

      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          streamBuffer += decoder.decode(value, { stream: true });
          const events = streamBuffer.split("\n\n");
          streamBuffer = events.pop() || "";
          for (const evt of events) {
            const lines = evt.split("\n");
            let eventType = "message";
            let dataStr = "";
            for (const l of lines) {
              if (l.startsWith("event:")) eventType = l.slice(6).trim();
              else if (l.startsWith("data:")) dataStr = l.slice(5).trim();
            }
            if (eventType === "action" && dataStr) {
              try { streamedAction = JSON.parse(dataStr); } catch {}
            } else if (dataStr) {
              try {
                const parsed = JSON.parse(dataStr);
                if (parsed.text) {
                  streamedText += parsed.text;
                  if (answer) answer.textContent = streamedText;
                }
              } catch {}
            }
          }
        }
      } finally {
        reader.releaseLock();
      }
      data = { answer: streamedText, learningAction: streamedAction };
    } else {
      data = await response.json();
    }

    if (!response.ok) {
      const errDetail = data.hint ? `${data.error} (${data.hint})` : (data.error || "Không kết nối được trợ giảng.");
      throw new Error(errDetail);
    }

    state.tutor.lastAnswer = data.answer;
    state.tutor.lastAction = data.learningAction
      ? { ...data.learningAction, sourceLessonKey: isValidLessonKey(sourceLessonKey, data.learningAction.subject) ? sourceLessonKey : null }
      : null;
    if (answer) {
      answer.textContent = data.answer;
      answer.hidden = false;
    }

    if (mode === "parent_summary") {
      if (!state.db.weeklySummaries) state.db.weeklySummaries = {};
      state.db.weeklySummaries[selectedWeekObj.id] = data.answer;
      await saveLocalHandler(true);
      if (status) status.textContent = "Đã tạo và lưu tổng kết tuần cho phụ huynh.";
      return;
    }

    // Cập nhật history hội thoại trong runtime
    const userMsgObj = { role: "user", text: payload.userMessage, subject, weekId: selectedWeekObj.id, timestamp: new Date().toISOString() };
    const modelMsgObj = { role: "model", text: data.answer, subject, weekId: selectedWeekObj.id, timestamp: new Date().toISOString() };

    state.tutor.history.push(userMsgObj, modelMsgObj);
    if (state.tutor.history.length > 12) {
      state.tutor.history = state.tutor.history.slice(-12);
    }

    // Lưu bền vững vào state.db.chatHistory, IndexedDB và Drive
    if (!Array.isArray(state.db.chatHistory)) {
      state.db.chatHistory = [];
    }
    state.db.chatHistory.push(userMsgObj, modelMsgObj);
    if (state.db.chatHistory.length > 50) {
      state.db.chatHistory = state.db.chatHistory.slice(-50);
    }
    await saveLocalHandler(true);

    if (status) {
      status.textContent = data.provider === "gemini-oauth-rest"
        ? "Gợi ý từ Gemini · OAuth Trực Tuyến"
        : "Gợi ý từ Trợ giảng AI (Local Dev)";
    }
  } catch (error) {
    if (status) status.textContent = error.message;
  } finally {
    clearInterval(state.tutor.thinkingTimer);
    state.tutor.thinkingTimer = null;
    state.tutor.isLoading = false;
    if (askBtn) askBtn.disabled = false;
    // Rerender lại phần history nếu đang ở trang guide
    if (typeof location !== "undefined" && location.hash === "#guide") {
      renderGuideHandler();
    }
  }
}
