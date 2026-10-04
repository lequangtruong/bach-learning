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
  state.tutor.currentStreamText = "";
  if (askBtn) askBtn.disabled = true;
  if (askBtn) askBtn.textContent = "Đang suy nghĩ…";
  const summaryBtn = typeof document !== "undefined" ? document.querySelector("#weeklySummaryBtn") : null;
  if (summaryBtn && mode === "parent_summary") {
    summaryBtn.disabled = true;
    summaryBtn.textContent = "AI đang tổng kết…";
  }

  const thinkingIndicator = typeof document !== "undefined" ? document.querySelector("#aiThinkingIndicator") : null;
  const thinkingText = typeof document !== "undefined" ? document.querySelector("#aiThinkingText") : null;
  if (thinkingIndicator) {
    thinkingIndicator.hidden = false;
    thinkingIndicator.setAttribute("aria-hidden", "false");
  }
  if (status) status.textContent = mode === "parent_summary" ? "AI đang tổng hợp tiến độ tuần cho phụ huynh…" : "AI đang suy nghĩ gợi ý cho Bách…";
  if (answer) answer.hidden = true;

  const thinkingMessages = mode === "parent_summary" ? [
    "AI đang đọc tiến độ môn Toán và Tiếng Việt…",
    "AI đang tổng hợp các điểm tiến bộ và điểm cần ôn…",
    "AI đang chuẩn bị báo cáo hoàn chỉnh cho phụ huynh…"
  ] : [
    "AI đang đọc kỹ câu hỏi…",
    "AI đang tìm cách gợi ý vừa sức…",
    "AI đang kiểm tra lại hướng giải…"
  ];
  let thinkingIndex = 0;
  clearInterval(state.tutor.thinkingTimer);
  state.tutor.thinkingTimer = setInterval(() => {
    thinkingIndex = (thinkingIndex + 1) % thinkingMessages.length;
    const liveThinkingText = typeof document !== "undefined" ? document.querySelector("#aiThinkingText") : thinkingText;
    const liveStatus = typeof document !== "undefined" ? document.querySelector("#aiStatus") : status;
    if (liveThinkingText) liveThinkingText.textContent = thinkingMessages[thinkingIndex];
    if (liveStatus) liveStatus.textContent = thinkingMessages[thinkingIndex];
  }, 1800);

  // Lấy bối cảnh môn và tuần từ bộ chọn Guide rõ ràng
  const weeks = allWeeks();
  const selectedWeekObj = weeks.find(w => w.id === state.tutor.selectedWeek) || weeks[0] || {
    id: "w1",
    math: ["Tuần 1", "Toán 4"],
    vietnamese: ["Tuần 1", "Tiếng Việt 4"]
  };
  const subject = state.tutor.selectedSubject || "math";
  const weekFocus = subject === "math"
    ? `${selectedWeekObj.math?.[0] || "Tuần 1"}: ${selectedWeekObj.math?.[1] || "Toán 4"}`
    : `${selectedWeekObj.vietnamese?.[0] || "Tuần 1"}: ${selectedWeekObj.vietnamese?.[1] || "Tiếng Việt 4"}`;

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

  // Lưu lại cấu hình yêu cầu để hỗ trợ nút Thử lại khi mất mạng hoặc stream bị ngắt
  state.tutor.lastFailedSubmission = {
    mode,
    prompt: promptText,
    userMessage: promptText,
    writingImage,
    sourceLessonKey
  };

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
      let streamCompleted = false;
      const initialAnswer = typeof document !== "undefined" ? document.querySelector("#aiAnswer") : answer;
      if (initialAnswer) {
        initialAnswer.textContent = "";
        initialAnswer.hidden = false;
      }
      const initialStatus = typeof document !== "undefined" ? document.querySelector("#aiStatus") : status;
      if (initialStatus) initialStatus.textContent = "AI đang trả lời…";

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
            if (eventType === "done") {
              streamCompleted = true;
            }
            if (eventType === "error") {
              let errText = "Lỗi đường truyền từ AI.";
              try {
                const parsedErr = JSON.parse(dataStr);
                errText = parsedErr.error || parsedErr.message || errText;
              } catch {
                errText = dataStr || errText;
              }
              throw new Error(errText);
            }
            if (eventType === "action" && dataStr) {
              try { streamedAction = JSON.parse(dataStr); } catch {}
            } else if (dataStr) {
              try {
                const parsed = JSON.parse(dataStr);
                if (parsed.done === true) {
                  streamCompleted = true;
                }
                if (parsed.text) {
                  streamedText += parsed.text;
                  state.tutor.currentStreamText = streamedText;
                  const liveAnswer = typeof document !== "undefined" ? document.querySelector("#aiAnswer") : answer;
                  if (liveAnswer) {
                    liveAnswer.textContent = streamedText;
                    liveAnswer.hidden = false;
                  }
                }
              } catch {}
            }
          }
        }
      } finally {
        reader.releaseLock();
      }
      if (!streamCompleted) {
        throw new Error("Quá trình nhận phản hồi bị ngắt quãng giữa chừng. Bách hãy bấm nút 'Thử lại' để AI hoàn tất nhé.");
      }
      if (!streamedText) {
        throw new Error("AI chưa trả về nội dung hoàn chỉnh. Bách có thể bấm thử lại nhé.");
      }
      data = { answer: streamedText, learningAction: streamedAction };
    } else {
      data = await response.json();
    }

    if (!response.ok) {
      const errDetail = data.hint ? `${data.error} (${data.hint})` : (data.error || "Không kết nối được trợ giảng.");
      throw new Error(errDetail);
    }

    state.tutor.lastError = null;
    state.tutor.lastFailedSubmission = null;
    state.tutor.lastAnswer = data.answer;
    state.tutor.currentStreamText = "";
    if (state.examSession) {
      state.examSession.lastAiAnswer = data.answer;
      if (!state.db.examGrades) state.db.examGrades = {};
      state.db.examGrades[state.examSession.examWeek] = {
        examWeek: state.examSession.examWeek,
        lastAiAnswer: data.answer,
        gradedAt: new Date().toISOString()
      };
    }
    state.tutor.lastAction = data.learningAction
      ? { ...data.learningAction, sourceLessonKey: isValidLessonKey(sourceLessonKey, data.learningAction.subject) ? sourceLessonKey : null }
      : null;

    const liveAnswer = typeof document !== "undefined" ? document.querySelector("#aiAnswer") : answer;
    if (liveAnswer) {
      liveAnswer.textContent = data.answer;
      liveAnswer.hidden = false;
    }
    const feedbackToolbar = typeof document !== "undefined" ? document.querySelector("#aiFeedbackToolbar") : null;
    if (feedbackToolbar) {
      feedbackToolbar.hidden = false;
    }

    if (mode === "parent_summary") {
      if (!state.db.weeklySummaries) state.db.weeklySummaries = {};
      state.db.weeklySummaries[selectedWeekObj.id] = data.answer;
      await saveLocalHandler(true);
      const liveStatus = typeof document !== "undefined" ? document.querySelector("#aiStatus") : status;
      if (liveStatus) liveStatus.textContent = "Đã hoàn thành và lưu tổng kết tuần cho phụ huynh.";
      renderGuideHandler();
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

    const liveStatus = typeof document !== "undefined" ? document.querySelector("#aiStatus") : status;
    if (liveStatus) {
      liveStatus.textContent = data.provider === "gemini-oauth-rest"
        ? "Gợi ý từ Gemini · OAuth Trực Tuyến"
        : "Gợi ý từ Trợ giảng AI (Local Dev)";
    }
  } catch (error) {
    state.tutor.lastError = error.message;
    state.tutor.currentStreamText = "";
    const liveStatus = typeof document !== "undefined" ? document.querySelector("#aiStatus") : status;
    if (liveStatus) liveStatus.textContent = `Lỗi: ${error.message}`;
  } finally {
    state.tutor.isLoading = false;
    state.tutor.currentStreamText = "";
    clearInterval(state.tutor.thinkingTimer);
    state.tutor.thinkingTimer = null;
    const liveAskBtn = typeof document !== "undefined" ? document.querySelector("#askAi") : askBtn;
    if (liveAskBtn) {
      liveAskBtn.disabled = false;
      liveAskBtn.textContent = "Hỏi trợ giảng AI";
    }
    const liveSummaryBtn = typeof document !== "undefined" ? document.querySelector("#weeklySummaryBtn") : null;
    if (liveSummaryBtn) {
      liveSummaryBtn.disabled = false;
      liveSummaryBtn.textContent = "AI tổng kết tuần";
    }
    const thinkingIndicator = typeof document !== "undefined" ? document.querySelector("#aiThinkingIndicator") : null;
    if (thinkingIndicator) {
      thinkingIndicator.hidden = true;
      thinkingIndicator.setAttribute("aria-hidden", "true");
    }
    if (typeof location !== "undefined" && (location.hash === "#guide" || location.hash.startsWith("#guide"))) {
      renderGuideHandler();
    }
  }
}
