import {
  STORAGE_SCHEMA_VERSION,
  DRIVE_DB_FILENAME,
  createEmptyDatabase,
  validateDatabasePayload,
  touchUserEdit,
  mergeDatabases,
  appendVoiceTranscript,
  formatConversationForTutor,
  getLessonDefaultSeconds,
  formatTimerSeconds,
  computeCurrentTimerState,
  isValidLessonKey,
  lessonOrdinalFromKey
} from "./data/data-core.js";

import {
  storageKey,
  DB_NAME,
  DB_VERSION,
  DB_STORE,
  DEFAULT_GOOGLE_CLIENT_ID,
  getGoogleClientId,
  state,
  escapeHtml,
  splitInlineItems,
  renderInstructionSteps,
  allWeeks,
  doneCount,
  percent,
  buildLearningContext,
  buildWeeklySummaryPrompt,
  PHOTO_BOUNDS,
  validatePhotoFile
} from "./js/core.js";

import {
  initTouchNumpadListener
} from "./js/touch-numpad.js";

import { storage } from "./js/storage.js";
import { driveSync, renderGoogleTutorButton } from "./js/drive-sync.js";
import { lessonTimerManager, setTimerCallbacks } from "./js/study-timer.js";
import { createRenderViews } from "./js/render-views.js";
import { askAi as _askAi, setAiClientHandlers } from "./js/ai-client.js";

const curriculum = window.BACH_CURRICULUM;
const app = document.querySelector("#app");

// Re-export named exports expected by tests or consumers
export {
  storageKey,
  DB_NAME,
  DB_VERSION,
  DB_STORE,
  DEFAULT_GOOGLE_CLIENT_ID,
  getGoogleClientId,
  state,
  storage,
  driveSync,
  lessonTimerManager,
  escapeHtml,
  splitInlineItems,
  renderInstructionSteps,
  allWeeks,
  doneCount,
  percent,
  buildLearningContext,
  buildWeeklySummaryPrompt,
  PHOTO_BOUNDS,
  validatePhotoFile
};

// Wire Drive sync with UI render
driveSync.setRenderHandler(() => {
  render();
});

import {
  voiceInput as _voiceInput,
  tutorSpeech as _tutorSpeech,
  tutorAudio as _tutorAudio,
  updateVoiceUi
} from "./js/voice-input.js";

// Re-export voice and audio utilities
export const voiceInput = _voiceInput;
export const tutorSpeech = _tutorSpeech;
export const tutorAudio = _tutorAudio;
export { updateVoiceUi };


// Lưu tiến độ cục bộ và kích hoạt đồng bộ debounced nếu có Drive token
export async function saveLocal(touched = true) {
  if (touched) {
    state.db = touchUserEdit(state.db);
  }
  try {
    await storage.saveDatabase(state.db);
  } catch (err) {
    state.drive.syncStatus = `Lỗi lưu trên thiết bị: ${err.message}`;
    render();
    throw err;
  }

  if (state.drive.token && !state.drive.hasSessionExpired && navigator.onLine) {
    driveSync.scheduleSync(1200);
  }
}

// レンダリングビューのインスタンス化
const renderViews = createRenderViews({
  state,
  curriculum,
  escapeHtml,
  splitInlineItems,
  renderInstructionSteps,
  allWeeks,
  doneCount,
  percent,
  lessonOrdinalFromKey,
  getLessonDefaultSeconds,
  formatTimerSeconds,
  computeCurrentTimerState,
  lessonTimerManager,
  renderMentalMathFoundation: () => renderMentalMathFoundation(),
  app,
  document
});

export const {
  renderSvgVisual,
  progressBar,
  phaseChips,
  pageFrame,
  adaptivePlan,
  isAfterAdaptiveSource,
  adaptiveNextStep,
  lessonDifficulty,
  renderDriveBar,
  renderHome,
  renderPlan,
  weekCard,
  renderLessonPlan,
  renderParentLessonLauncher,
  getStudyWeek,
  resolveStudyDayIndex,
  getStudyDayIndex,
  renderMentalMathForToday,
  renderSubject,
  renderSubjectLegacyPlan,
  parseHintSteps,
  stripHintPrefix,
  renderProgressiveHints,
  renderDailyPlan
} = renderViews;

function renderMentalMathContinuation() {
  const track = curriculum.mentalMathContinuation;
  if (!track?.weeks?.length) return "";
  const selectedNumber = Number(String(state.tutor.selectedWeek || "w7").replace(/^w/, ""));
  const activeNumber = Math.max(7, Math.min(36, Number.isFinite(selectedNumber) ? selectedNumber : 7));
  const item = track.weeks.find(week => week.week === activeNumber) || track.weeks[0];
  return `<section class="panel mental-math-continuation-panel" aria-labelledby="mentalContinuationTitle">
    <div class="mental-math-continuation-head">
      <div>
        <div class="eyebrow">TOÁN · LUYỆN TIẾP NỐI</div>
        <h3 id="mentalContinuationTitle">${escapeHtml(track.title)} · tuần 7–36</h3>
        <p>${escapeHtml(track.intro)}</p>
      </div>
      <label class="mental-math-week-select">Chọn tuần
        <select id="mentalMathContinuationWeekSelect" aria-label="Chọn tuần kho tính nhẩm tiếp nối">
          ${track.weeks.map(week => `<option value="w${week.week}" ${week.week === item.week ? "selected" : ""}>Tuần ${week.week}</option>`).join("")}
        </select>
      </label>
    </div>
    <article class="mental-math-continuation-week">
      <div class="week-no">TUẦN ${String(item.week).padStart(2, "0")}</div>
      <h4>${escapeHtml(item.title)}</h4>
      <p>${escapeHtml(item.focus)}</p>
      <div class="mental-math-groups mental-math-continuation-groups">
        ${item.groups.map((group, groupIndex) => `<details class="mental-math-group-details" ${groupIndex === 0 ? "open" : ""}>
          <summary class="mental-math-group-summary"><span class="mental-math-group-tag">${escapeHtml(group.day)}</span><span class="mental-math-group-heading">${escapeHtml(group.title)}</span><span class="mental-math-question-count">${group.questions.length} câu</span></summary>
          <div class="mental-math-group-content">
            <div class="mental-math-group-hint">💡 <b>Gợi ý chiến lược:</b> ${escapeHtml(group.hint)}</div>
            <ol class="mental-math-question-list">${group.questions.map(question => `<li class="mental-math-question-item">${escapeHtml(question)}</li>`).join("")}</ol>
          </div>
        </details>`).join("")}
      </div>
    </article>
  </section>`;
}

function renderMentalMathFoundation() {
  const track = curriculum.mentalMathFoundation;
  const completed = track.weeks.filter(item => state.db.progress[`w${item.week}`]?.mentalMath).length;
  return pageFrame(
    track.title,
    "TOÁN · NỀN TẢNG TÍNH NHANH",
    track.intro,
    `<div class="panel mental-math-panel">
      <div class="mental-math-head">
        <div>
          <h3>8–10 phút đầu mỗi buổi</h3>
          <p class="week-focus">Bách không học lại từ đầu: bài chính vẫn ở mức khá–giỏi, còn 8–10 phút đầu dành riêng cho tốc độ tính nhẩm. Đúng, hiểu chiến lược rồi mới tăng tốc; không dùng máy tính bỏ túi cho phần nền này.</p>
        </div>
        <div class="mental-math-progress"><strong>${completed}/6</strong><span>tuần nền đã hoàn thành</span>${progressBar(Math.round(completed / 6 * 100))}</div>
      </div>
      <div class="mental-math-routine">
        ${track.dailyRoutine.map(([label, text]) => `<div class="mental-math-routine-item"><b>${escapeHtml(label)}</b><span>${escapeHtml(text)}</span></div>`).join("")}
      </div>
      <div class="mental-math-weeks">
        ${track.weeks.map(item => {
          const id = `w${item.week}`;
          const done = Boolean(state.db.progress[id]?.mentalMath);
          const groups = item.groups || [];
          return `<article class="mental-math-week ${done ? "done" : ""}">
            <div class="mental-math-week-top"><span class="week-no">TUẦN ${String(item.week).padStart(2, "0")}</span><button class="check-button mental-math-check ${done ? "done" : ""}" data-done-mental="${id}" aria-pressed="${done}" aria-label="${done ? "Bỏ đánh dấu" : "Đánh dấu"} tuần ${item.week} nền tính toán nhanh hoàn thành" title="${done ? "Bỏ đánh dấu" : "Đánh dấu"} nền tính toán nhanh hoàn thành">${done ? "✓" : ""}</button></div>
            <h4>${escapeHtml(item.title)}</h4>
            <p><b>Trọng tâm:</b> ${escapeHtml(item.focus)}</p>
            <div class="mental-math-strategies"><b>Cách nghĩ</b><ul>${splitInlineItems(item.strategies).map(strategy => `<li>${escapeHtml(strategy)}</li>`).join("")}</ul></div>
            <p><b>Luyện:</b> ${escapeHtml(item.practice)}</p>
            ${groups.length > 0 ? `
              <div class="mental-math-bank">
                <div class="mental-math-bank-title">Kho luyện 8–10 phút (${groups.length} nhóm bài · chọn 1 nhóm/ngày)</div>
                <div class="mental-math-groups">
                  ${groups.map((grp, gIdx) => `
                    <details class="mental-math-group-details" ${gIdx === 0 ? "open" : ""}>
                      <summary class="mental-math-group-summary">
                        <span class="mental-math-group-tag">${escapeHtml(grp.day || `Nhóm ${gIdx + 1}`)}</span>
                        <span class="mental-math-group-heading">${escapeHtml(grp.title)}</span>
                      </summary>
                      <div class="mental-math-group-content">
                        ${grp.hint ? `<div class="mental-math-group-hint">💡 <b>Gợi ý chiến lược:</b> ${escapeHtml(grp.hint)}</div>` : ""}
                        <ol class="mental-math-question-list">
                          ${(grp.questions || []).map(q => `<li class="mental-math-question-item">${escapeHtml(q)}</li>`).join("")}
                        </ol>
                      </div>
                    </details>
                  `).join("")}
                </div>
              </div>
            ` : ""}
            <div class="mental-math-success">${escapeHtml(item.success)}</div>
          </article>`;
        }).join("")}
      </div>
    </div>
    ${renderMentalMathContinuation()}`
  );
}

function renderGuide() {
  const weeks = allWeeks();
  const currentSelectedWeekObj = weeks.find(w => w.id === state.tutor.selectedWeek) || weeks[0];
  const isMath = state.tutor.selectedSubject === "math";
  const currentFocus = isMath
    ? `${currentSelectedWeekObj.math[0]}: ${currentSelectedWeekObj.math[1]}`
    : `${currentSelectedWeekObj.vietnamese[0]}: ${currentSelectedWeekObj.vietnamese[1]}`;

  const historyItems = (state.db.chatHistory || []).slice(-10);
  const learningProfile = state.db.learningProfile || { method: "Gợi ý từng bước", pace: "ổn định", focus: "" };

  app.innerHTML = `
    ${renderDriveBar()}
    ${pageFrame(
      "Cách đồng hành cùng Bách",
      "HƯỚNG DẪN CHO GIA ĐÌNH",
      "Giữ kỳ vọng cao, nhưng giữ niềm vui học còn cao hơn.",
      `<div class="guide-grid">
        <div class="panel">
          <h3>5 nguyên tắc</h3>
          <div class="rubric-list">
            <div class="rubric-card"><b>1 · Hỏi trước khi sửa</b><p>“Con đang nghĩ gì?” giúp nhìn thấy chiến lược, không chỉ nhìn đáp án.</p></div>
            <div class="rubric-card"><b>2 · Chữa ít nhưng sâu</b><p>Mỗi buổi chọn tối đa 3 lỗi quan trọng; Bách tự viết lại.</p></div>
            <div class="rubric-card"><b>3 · Không dùng văn mẫu</b><p>Đọc để học cách quan sát và tổ chức ý, không chép giọng người khác.</p></div>
            <div class="rubric-card"><b>4 · Bài khó được phép dở dang</b><p>Ghi lại hướng đã thử. Một chiến lược bị loại cũng là tiến bộ.</p></div>
            <div class="rubric-card"><b>5 · Khen quá trình</b><p>Khen câu hỏi hay, cách kiểm tra, sự bền bỉ — không chỉ khen điểm.</p></div>
          </div>
        </div>
        <div class="panel">
          <h3>Thang thử thách Toán</h3>
          <div class="ladder-list">${curriculum.challengeLadder.map(x => `<div class="ladder-card"><div class="rank">${x[0]}</div><div><b>${x[1]}</b><p>${x[2]}</p></div></div>`).join("")}</div>
        </div>
      </div>
      ${pageFrame(
        "Rubric 0–3",
        "CHẤM ĐỂ BIẾT BƯỚC TIẾP",
        "Không dùng rubric để gây áp lực; dùng để chọn bài tiếp theo.",
        `<div class="rubric-list">${curriculum.rubrics.map(x => `<div class="rubric-card"><b>${x[0]}</b><p>${x[1]}</p></div>`).join("")}</div>
        <div class="callout"><strong>Gợi ý lịch thực tế:</strong> 4 ngày học đủ Toán + Văn, 1 ngày chỉ chữa lỗi và đọc, thứ 7 làm mini test, chủ nhật nghỉ. Nếu Bách mệt, giảm số bài — giữ lại thói quen giải thích.</div>`
      )}
      ${pageFrame(
        "Trợ giảng AI trực tuyến cho Bách",
        "GEMINI TRỢ GIẢNG · OAUTH AN TOÀN",
        "AI định hướng tư duy: gợi mở từng tầng cho Toán, góp ý mạch lạc cho Văn. Không làm hộ, không nhận sửa mã nguồn.",
        `<div class="panel">
          <h3>Hỏi một gợi ý, cùng Bách tìm lời giải</h3>
          <p class="week-focus">Chọn rõ môn học và tuần học để Gemini trợ giảng bám sát đúng trọng tâm chương trình:</p>

          <!-- Bộ chọn rõ ràng môn học và tuần học -->
          <div class="guide-tutor-controls">
            <div class="guide-select-group">
              <label for="guideSubjectSelect">Môn học:</label>
              <select id="guideSubjectSelect" class="guide-select">
                <option value="math" ${state.tutor.selectedSubject === "math" ? "selected" : ""}>Toán lớp 4</option>
                <option value="vietnamese" ${state.tutor.selectedSubject === "vietnamese" ? "selected" : ""}>Tiếng Việt / Văn lớp 4</option>
              </select>
            </div>
            <div class="guide-select-group">
              <label for="guideWeekSelect">Tuần học:</label>
              <select id="guideWeekSelect" class="guide-select">
                ${weeks.map(w => `<option value="${w.id}" ${state.tutor.selectedWeek === w.id ? "selected" : ""}>Tuần ${w.number} · ${w.phase.title}</option>`).join("")}
              </select>
            </div>
          </div>
          <div class="guide-focus-chip">
            <span>🎯 Trọng tâm tuần đang chọn:</span>
            <span>${currentFocus}</span>
          </div>
          <div class="learning-profile-card">
            <div><span class="eyebrow">PHƯƠNG PHÁP HIỆN TẠI</span><strong>${escapeHtml(learningProfile.method || "Gợi ý từng bước")}</strong></div>
            <div><span class="eyebrow">NHỊP HỌC</span><strong>${escapeHtml(learningProfile.pace || "ổn định")}</strong></div>
            ${learningProfile.focus ? `<div><span class="eyebrow">TRỌNG TÂM CẦN ÔN</span><strong>${escapeHtml(learningProfile.focus)}</strong></div>` : ""}
          </div>

          <div class="weekly-summary-panel">
            <div>
              <span class="eyebrow">DÀNH CHO PHỤ HUYNH</span>
              <h4>Tổng kết cuối tuần · Tuần ${currentSelectedWeekObj.number}</h4>
              <p>Gemini đọc tiến độ, ghi chú và hội thoại của tuần đang chọn để chỉ ra tiến bộ, bất cập và việc cần làm tiếp theo.</p>
            </div>
            <button class="small-button" id="weeklySummaryBtn" ${state.tutor.isLoading ? "disabled" : ""}>${state.tutor.isLoading ? "AI đang tổng kết…" : "AI tổng kết tuần"}</button>
          </div>
          ${state.db.weeklySummaries?.[currentSelectedWeekObj.id] ? `<div class="weekly-summary-output"><div class="eyebrow">BÁO CÁO ĐÃ LƯU · TUẦN ${currentSelectedWeekObj.number}</div><div>${escapeHtml(state.db.weeklySummaries[currentSelectedWeekObj.id])}</div></div>` : ""}

          <div class="input-with-voice">
            <textarea id="aiPrompt" class="ai-input" rows="4" placeholder="Ví dụ: Con chưa biết bắt đầu bài toán tìm hai số khi biết tổng và hiệu... hoặc nói ý đoạn văn con định viết..."></textarea>
            <div class="voice-toolbar">
              <button class="voice-button" id="voicePromptBtn" data-voice-for="#aiPrompt" title="Nhập bằng giọng nói (Tiếng Việt)">🎤 Bấm để nói</button>
              <span id="voiceIndicator" class="voice-listening-label" hidden>● Đang nghe Bách nói…</span>
            </div>
          </div>
          <div class="ai-row">
            <button class="primary-button" id="askAi" ${state.tutor.isLoading ? "disabled" : ""}>
              ${state.tutor.isLoading ? "Đang suy nghĩ…" : "Hỏi gợi ý"}
            </button>
            <div id="aiThinkingIndicator" class="ai-thinking-indicator" role="status" aria-live="polite" aria-hidden="${state.tutor.isLoading ? "false" : "true"}" ${state.tutor.isLoading ? "" : "hidden"}>
              <span class="thinking-dots" aria-hidden="true"><i></i><i></i><i></i></span>
              <span id="aiThinkingText">AI đang suy nghĩ…</span>
            </div>
            <span id="aiStatus" class="week-focus">Sẵn sàng trợ giúp học sinh lớp 4.</span>
          </div>
          ${state.drive.idToken ? "" : `<div class="ai-auth-row"><span class="week-focus">Cần đăng nhập Google để xác thực phiên Gemini.</span><button class="small-button" id="loginTutorBtn">Đăng nhập để dùng Gemini</button><div id="googleTutorButton" class="google-tutor-button" hidden></div></div>`}
          <div id="aiAnswer" class="ai-answer" ${state.tutor.lastAnswer ? "" : "hidden"}>${escapeHtml(state.tutor.lastAnswer)}</div>
          ${state.tutor.lastAnswer ? `<div class="speech-output-toolbar" aria-label="Đọc câu trả lời bằng giọng nói">
            <button class="small-button" id="speakTutorBtn" type="button">🔊 Đọc câu trả lời</button>
            <button class="text-button" id="stopTutorBtn" type="button">Dừng đọc</button>
            <span class="speech-output-note">Giọng đọc tiếng Việt trên iPad · Bấm khi muốn nghe</span>
          </div>` : ""}
          ${renderLearningAction(state.tutor.lastAction)}

          <!-- Lịch sử hội thoại đã lưu vào DB -->
          ${historyItems.length > 0 ? `
            <div class="guide-history-wrap">
              <div class="guide-history-head">
                <h4>Lịch sử gợi ý đã lưu (${historyItems.length})</h4>
                <button class="text-button" id="clearChatBtn" style="font-size:.75rem">Xóa lịch sử chat</button>
              </div>
              <div class="guide-history-list" id="chatHistoryList">
                ${historyItems.map(item => `
                  <div class="history-item ${item.role === "user" ? "user" : "model"}">
                    <span class="history-meta">${item.role === "user" ? "Bách" : "Gemini"} · ${item.subject === "math" ? "Toán" : "Văn"}${item.weekId ? ` (${escapeHtml(item.weekId)})` : ""}</span>
                    <div class="history-text">${escapeHtml(item.text)}</div>
                  </div>
                `).join("")}
              </div>
            </div>
          ` : ""}

          <div class="callout" style="margin-top:16px;">
            <strong>Nguyên tắc bảo mật:</strong> Không lưu API key ở trình duyệt. Mọi câu hỏi được bảo vệ bằng Google ID Token và xử lý qua endpoint <code>/api/tutor</code> Google OAuth server-side.
          </div>
        </div>`
      )}`
    )}
  `;

  if (state.tutor.prefillPrompt) {
    const prompt = document.querySelector("#aiPrompt");
    if (prompt) {
      prompt.value = state.tutor.prefillPrompt;
      state.tutor.prefillPrompt = "";
      prompt.focus();
    }
  }
}

function renderLearningAction(action) {
  if (!action || !action.type || action.type === "NONE") return "";
  const titles = {
    REVIEW_WEEK: "AI đề xuất ôn lại một tuần",
    CHANGE_METHOD: "AI đề xuất đổi phương pháp",
    ADVANCE: "AI đề xuất tăng thử thách",
    PAUSE_AND_REBUILD: "AI đề xuất dừng lại để xây lại nền"
  };
  return `<div class="ai-action-card">
    <div class="eyebrow">ĐIỀU CHỈNH HỌC TẬP</div>
    <h4>${escapeHtml(titles[action.type] || "AI đề xuất điều chỉnh")}</h4>
    ${action.reason ? `<p><b>Vì sao:</b> ${escapeHtml(action.reason)}</p>` : ""}
    ${action.nextStep ? `<p><b>Bước tiếp theo:</b> ${escapeHtml(action.nextStep)}</p>` : ""}
    ${action.method ? `<p><b>Phương pháp:</b> ${escapeHtml(action.method)}</p>` : ""}
    <div class="ai-action-buttons"><button class="primary-button" id="applyAiAction">Áp dụng đề xuất</button><button class="text-button" id="dismissAiAction">Để sau</button></div>
  </div>`;
}

export async function applyLearningAction() {
  const action = state.tutor.lastAction;
  if (!action || action.type === "NONE") return;
  const currentProfile = state.db.learningProfile || {};
  const nextProfile = {
    ...currentProfile,
    method: action.method || currentProfile.method || "Gợi ý từng bước",
    pace: action.pace || currentProfile.pace || "ổn định",
    focus: action.focus || currentProfile.focus || "",
    targetWeekId: action.targetWeekId || currentProfile.targetWeekId || null,
    reason: action.reason || currentProfile.reason || "",
    updatedAt: new Date().toISOString()
  };
  if (["REVIEW_WEEK", "PAUSE_AND_REBUILD"].includes(action.type) && action.targetWeekId) {
    const previousReview = Array.isArray(nextProfile.needsReview) ? nextProfile.needsReview : [];
    nextProfile.needsReview = [...new Set([...previousReview, action.targetWeekId])].slice(-6);
    state.db.progress[action.targetWeekId] = {
      ...(state.db.progress[action.targetWeekId] || {}),
      needsReview: true
    };
  }
  state.db.learningProfile = nextProfile;
  if (action.subject) state.tutor.selectedSubject = action.subject;
  if (action.targetWeekId) state.tutor.selectedWeek = action.targetWeekId;

  const actionHasLessonSource = isValidLessonKey(action.sourceLessonKey, action.subject);
  if (action.type === "ADVANCE" && (action.subject === "math" || action.subject === "vietnamese") && actionHasLessonSource) {
    if (!state.db.adaptive) state.db.adaptive = {};
    const previous = adaptivePlan(action.subject);
    const sourceDay = Number(action.sourceLessonKey.split("-").pop()) - 1;
    state.db.adaptive[action.subject] = {
      level: Math.min(3, previous.level + 1),
      extraCount: Math.min(3, Math.max(1, previous.extraCount + 1)),
      reason: "too_easy",
      lastDay: sourceDay,
      sourceLessonKey: action.sourceLessonKey,
      updatedAt: new Date().toISOString()
    };
  }

  state.tutor.lastAction = null;
  await saveLocal(true);
}

export function parseRoute() {
  const rawHash = (typeof location !== "undefined" && location.hash) ? location.hash.replace(/^#/, "") : "";
  const [hashRoute, hashQuery] = rawHash.split("?");
  const route = hashRoute || "home";
  const params = new URLSearchParams(hashQuery || "");
  if (typeof location !== "undefined" && location.search) {
    const searchParams = new URLSearchParams(location.search);
    for (const [k, v] of searchParams.entries()) {
      if (!params.has(k)) params.set(k, v);
    }
  }
  return { route, params };
}

export function render() {
  const { route, params } = parseRoute();
  state.openWeek = state.openWeek || null;
  if (route === "plan") renderPlan();
  else if (route === "math" || route === "vietnamese") renderSubject(route, params);
  else if (route === "guide") renderGuide();
  else renderHome();
  document.querySelectorAll("[data-nav]").forEach(a => a.classList.toggle("active", a.dataset.nav === route));
}

// Global Event Listeners
document.addEventListener("click", async e => {
  // 1. Toggle tuần hoàn thành
  const done = e.target.closest("[data-done]");
  if (done) {
    const id = done.dataset.done;
    state.db.progress[id] = { ...(state.db.progress[id] || {}), week: !state.db.progress[id]?.week };
    await saveLocal(true);
    render();
    return;
  }

  // 2. Đánh dấu môn hoàn thành
  const subjectDone = e.target.closest("[data-done-subject]");
  if (subjectDone) {
    const [id, subject] = subjectDone.dataset.doneSubject.split("|");
    state.db.progress[id] = { ...(state.db.progress[id] || {}), [subject]: !state.db.progress[id]?.[subject] };
    await saveLocal(true);
    render();
    return;
  }

  // 2b. Đánh dấu một tuần nền tính toán nhanh hoàn thành
  const mentalMathDone = e.target.closest("[data-done-mental]");
  if (mentalMathDone) {
    const id = mentalMathDone.dataset.doneMental;
    state.db.progress[id] = { ...(state.db.progress[id] || {}), mentalMath: !state.db.progress[id]?.mentalMath };
    await saveLocal(true);
    render();
    requestAnimationFrame(() => document.querySelector(`[data-done-mental="${id}"]`)?.focus());
    return;
  }

  // 3. Mở chi tiết tuần
  const toggle = e.target.closest("[data-toggle]");
  if (toggle) {
    state.openWeek = state.openWeek === toggle.dataset.toggle ? null : toggle.dataset.toggle;
    render();
    return;
  }

  // 4. Lưu ghi chú tuần
  const saveNoteBtn = e.target.closest("[data-save-note]");
  if (saveNoteBtn) {
    const weekId = saveNoteBtn.dataset.saveNote;
    const noteArea = document.querySelector(`#note_${weekId}`);
    if (noteArea) {
      state.db.notes[weekId] = noteArea.value.trim();
      await saveLocal(true);
      saveNoteBtn.textContent = "Đã lưu ✓";
      setTimeout(() => { if (saveNoteBtn) saveNoteBtn.textContent = "Lưu ghi chú"; }, 1500);
    }
    return;
  }

  // 5. Phase filter
  const phase = e.target.closest("[data-phase]");
  if (phase) {
    state.phase = phase.dataset.phase;
    state.openWeek = null;
    render();
    return;
  }

  // 6. Status filter
  const filter = e.target.closest("[data-filter]");
  if (filter) {
    state.filter = filter.dataset.filter;
    render();
    return;
  }

  // 7. Reset tiến độ
  const reset = e.target.closest("[data-reset]");
  if (reset && confirm("Xóa toàn bộ tiến độ đã lưu trên thiết bị này?")) {
    state.db = createEmptyDatabase();
    await saveLocal(false);
    render();
    return;
  }

  // 8. Navigation
  const go = e.target.closest("[data-go]");
  if (go) {
    location.hash = go.dataset.go;
    return;
  }

  // 8b. Lưu đáp số và cách giải của bài Toán
  const timerActionBtn = e.target.closest("[data-timer-action]");
  if (timerActionBtn) {
    const action = timerActionBtn.dataset.timerAction;
    const key = timerActionBtn.dataset.timerKey;
    const container = timerActionBtn.closest("[data-timer-container]");
    const dayLabel = container?.dataset.dayLabel || "";
    if (action === "start") {
      await lessonTimerManager.start(key, dayLabel);
    } else if (action === "pause") {
      await lessonTimerManager.pause(key);
    } else if (action === "reset") {
      await lessonTimerManager.reset(key, dayLabel);
    }
    return;
  }

  const reviewLessonAi = e.target.closest("[data-review-lesson-ai]");
  if (reviewLessonAi) {
    const key = reviewLessonAi.dataset.reviewLessonAi;
    const wrap = reviewLessonAi.closest("[data-lesson-response]");
    const answer = wrap?.querySelector("[data-lesson-answer]")?.value.trim() || "";
    const explanation = wrap?.querySelector("[data-lesson-explanation]")?.value.trim() || "";
    const quality = wrap?.querySelector("[data-lesson-quality]")?.value || "";
    if (!answer && !explanation) {
      alert("Bách hãy nhập đáp số hoặc đọc cách giải trước nhé.");
      return;
    }
    if (!state.db.lessonResponses) state.db.lessonResponses = {};
    state.db.lessonResponses[key] = { answer, explanation, quality, updatedAt: new Date().toISOString() };
    await saveLocal(true);
    state.tutor.selectedSubject = "math";
    state.tutor.selectedWeek = key.match(/^w(?:[1-9]|[1-2][0-9]|3[0-6])/)?.[0] || "w1";
    state.tutor.pendingSourceLessonKey = key;
    const reviewPrompt = `Hãy đánh giá bài Toán vừa nộp của Bách theo 4 điểm: đúng đáp số, chiến lược, cách trình bày và mức độ so với học sinh giỏi lớp 4. Nếu Bách làm nhanh nhưng bài còn nhẹ, đề xuất ADVANCE với nhiều câu hơn và khó hơn vừa phải cho buổi sau; nếu còn hổng thì đề xuất REVIEW_WEEK hoặc CHANGE_METHOD. Không làm bài hộ.\n\nĐáp số Bách: ${answer || "(chưa có)"}\nCách giải Bách đọc: ${explanation || "(chưa có)"}`;
    state.tutor.reviewPromptExpected = reviewPrompt;
    state.tutor.prefillPrompt = reviewPrompt;
    location.hash = "#guide";
    return;
  }

  const audioReadBtn = e.target.closest(".audio-read-btn");
  if (audioReadBtn) {
    const text = audioReadBtn.dataset.readAloud;
    if (tutorSpeech.speaking) {
      tutorSpeech.stop();
      tutorSpeech.speaking = false;
      audioReadBtn.textContent = "🔊 Nghe đọc bài mẫu";
    } else {
      tutorAudio.init();
      tutorSpeech.speaking = true;
      audioReadBtn.textContent = "⏹ Dừng đọc";
      tutorSpeech.speak(text);
      if (tutorSpeech.synthesis) {
        const checkTimer = setInterval(() => {
          if (!tutorSpeech.synthesis.speaking) {
            clearInterval(checkTimer);
            tutorSpeech.speaking = false;
            if (audioReadBtn.isConnected) audioReadBtn.textContent = "🔊 Nghe đọc bài mẫu";
          }
        }, 300);
      }
    }
    return;
  }

  const saveLesson = e.target.closest("[data-save-lesson]");
  if (saveLesson) {
    const key = saveLesson.dataset.saveLesson;
    const wrap = saveLesson.closest("[data-lesson-response]");
    const answer = wrap?.querySelector("[data-lesson-answer]")?.value.trim() || "";
    const explanation = wrap?.querySelector("[data-lesson-explanation]")?.value.trim() || "";
    const quality = wrap?.querySelector("[data-lesson-quality]")?.value || "";
    if (!state.db.lessonResponses) state.db.lessonResponses = {};
    state.db.lessonResponses[key] = { answer, explanation, quality, updatedAt: new Date().toISOString() };
    if (quality) {
      const subject = key.includes("-vietnamese-") ? "vietnamese" : "math";
      const lastDay = Math.max(0, Number(key.split("-").pop()) - 1);
      if (!state.db.adaptive) state.db.adaptive = {};
      const previous = adaptivePlan(subject);
      state.db.adaptive[subject] = quality === "too_easy"
        ? { level: Math.min(3, previous.level + 1), extraCount: Math.min(3, Math.max(1, previous.extraCount + 1)), reason: quality, lastDay, updatedAt: new Date().toISOString() }
        : quality === "hard"
          ? { level: Math.max(0, previous.level - 1), extraCount: Math.max(0, previous.extraCount - 1), reason: quality, lastDay, updatedAt: new Date().toISOString() }
          : { level: Math.min(3, previous.level + (answer && explanation ? 1 : 0)), extraCount: previous.extraCount, reason: quality, lastDay, updatedAt: new Date().toISOString() };
    }
    tutorAudio.playSuccessChime();
    await saveLocal(true);
    saveLesson.textContent = "Đã lưu ✓";
    setTimeout(() => { if (saveLesson.isConnected) saveLesson.textContent = "Lưu"; }, 1500);
    return;
  }

  // 8b. Mở dần gợi ý bài học (Progressive hint disclosure)
  const revealHintBtn = e.target.closest("[data-reveal-hint]");
  if (revealHintBtn) {
    const hintKey = revealHintBtn.dataset.revealHint;
    const nextIndex = parseInt(revealHintBtn.dataset.hintIndex, 10) || 1;
    if (!state.lessonHints) state.lessonHints = {};
    state.lessonHints[hintKey] = nextIndex;

    const container = revealHintBtn.closest("[data-hints-container]");
    if (container) {
      const rawHint = container.dataset.rawHint ? decodeURIComponent(container.dataset.rawHint) : "";
      const isParent = container.dataset.isParentPreview === "true";
      container.outerHTML = renderProgressiveHints(rawHint, hintKey, isParent);
    }
    return;
  }

  // 8c. Bỏ ảnh bài viết đã chọn
  if (e.target.closest("#removeWritingPhotoBtn")) {
    state.writingImage = null;
    const photoInput = document.querySelector("#writingPhotoInput");
    if (photoInput) photoInput.value = "";
    updatePhotoPreviewUi();
    return;
  }

  // 8d. Chuyển bài Văn (đọc/gõ hoặc ảnh bài viết) sang Gemini để chữa
  if (e.target.closest("#sendWritingToAi")) {
    const writing = document.querySelector("#writingSubmission")?.value.trim() || "";
    const photo = state.writingImage;
    if (!writing && !photo) {
      alert("Bách hoặc phụ huynh hãy đọc bài, gõ văn bản hoặc chụp ảnh bài viết trước nhé.");
      return;
    }
    state.tutor.selectedSubject = "vietnamese";
    state.tutor.selectedWeek = "w1";
    state.tutor.pendingSourceLessonKey = null;
    state.tutor.reviewPromptExpected = null;
    state.tutor.prefillPrompt = "";

    let prompt = "";
    if (writing && photo) {
      prompt = `Bách vừa gửi bài Văn (kèm ảnh chụp bài viết trên giấy). Hãy chữa theo thứ tự: ý và mạch, câu chữ, từ dùng, chính tả; chỉ ra tối đa 3 điểm quan trọng và yêu cầu Bách tự viết lại. Không viết lại toàn bộ bài thay Bách.\n\nBài của Bách:\n${writing}`;
    } else if (photo) {
      prompt = `Bách vừa gửi ảnh chụp bài viết Văn trên giấy. Hãy đọc bài viết trong ảnh và chữa theo thứ tự: ý và mạch, câu chữ, từ dùng, chính tả; chỉ ra tối đa 3 điểm quan trọng và yêu cầu Bách tự viết lại. Không viết lại toàn bộ bài thay Bách.`;
    } else {
      prompt = `Bách vừa đọc xong bài Văn. Hãy chữa theo thứ tự: ý và mạch, câu chữ, từ dùng, chính tả; chỉ ra tối đa 3 điểm quan trọng và yêu cầu Bách tự viết lại. Không viết lại toàn bộ bài thay Bách.\n\nBài của Bách:\n${writing}`;
    }

    const photoToSend = photo ? { mimeType: photo.mimeType, data: photo.data } : null;
    state.writingImage = null;
    const photoInput = document.querySelector("#writingPhotoInput");
    if (photoInput) photoInput.value = "";
    updatePhotoPreviewUi();

    location.hash = "#guide";
    renderGuide();

    askAi({
      mode: "student_tutor",
      userMessage: prompt,
      writingImage: photoToSend
    });
    return;
  }

  // 9. Hỏi AI
  if (e.target.closest("#weeklySummaryBtn")) {
    state.tutor.pendingSourceLessonKey = null;
    state.tutor.reviewPromptExpected = null;
    const week = allWeeks().find(item => item.id === state.tutor.selectedWeek) || allWeeks()[0];
    askAi({ mode: "parent_summary", userMessage: buildWeeklySummaryPrompt(week) });
    return;
  }

  if (e.target.closest("#askAi")) {
    askAi();
    return;
  }

  if (e.target.closest("#applyAiAction")) {
    try {
      await applyLearningAction();
      if (location.hash === "#guide") renderGuide();
    } catch (err) {
      const status = document.querySelector("#aiStatus");
      if (status) status.textContent = `Không lưu được điều chỉnh: ${err.message}`;
    }
    return;
  }

  if (e.target.closest("#dismissAiAction")) {
    state.tutor.lastAction = null;
    renderGuide();
    return;
  }

  if (e.target.closest("#speakTutorBtn")) {
    if (!tutorSpeech.speak(state.tutor.lastAnswer)) {
      alert("Thiết bị này chưa hỗ trợ đọc tiếng Việt. Bách vẫn có thể đọc câu trả lời trên màn hình.");
    }
    return;
  }

  if (e.target.closest("#stopTutorBtn")) {
    tutorSpeech.stop();
    return;
  }

  if (e.target.closest("#loginTutorBtn")) {
    driveSync.requestTutorLogin();
    return;
  }

  // 10. Voice STT Mic trigger
  const voiceBtn = e.target.closest("[data-voice-for]");
  if (voiceBtn) {
    const targetSelector = voiceBtn.dataset.voiceFor;
    const targetEl = document.querySelector(targetSelector);
    if (!targetEl) return;

    if (state.voice.isListening) {
      voiceInput.stop();
      return;
    }

    const initialText = targetEl.value;
    voiceInput.start(targetSelector, (streamTranscript) => {
      targetEl.value = appendVoiceTranscript(initialText, streamTranscript);
      targetEl.dispatchEvent(new Event("input", { bubbles: true }));
      targetEl.focus();
    });
    return;
  }

  // 11. Xóa lịch sử chat
  if (e.target.closest("#clearChatBtn")) {
    if (confirm("Xóa toàn bộ lịch sử hỏi trợ giảng đã lưu?")) {
      state.db.chatHistory = [];
      state.tutor.history = [];
      await saveLocal(true);
      render();
    }
    return;
  }

  // 12. Google Drive Login / Sync / Logout
  if (e.target.closest("#loginDriveBtn")) {
    driveSync.requestLogin();
    return;
  }
  if (e.target.closest("#syncDriveBtn")) {
    driveSync.syncWithDrive();
    return;
  }
  if (e.target.closest("#logoutDriveBtn")) {
    driveSync.logout();
    return;
  }
});

// Cập nhật thanh hiển thị ảnh bài viết đã chọn
export function updatePhotoPreviewUi() {
  const preview = document.querySelector("#writingPhotoPreview");
  const nameSpan = document.querySelector("#writingPhotoName");
  if (!preview || !nameSpan) return;
  if (state.writingImage) {
    nameSpan.textContent = state.writingImage.name || "Ảnh bài viết";
    preview.hidden = false;
  } else {
    nameSpan.textContent = "";
    preview.hidden = true;
  }
}

export function readPhotoAsBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result || "";
      const base64 = typeof result === "string" ? result.split(",")[1] || "" : "";
      resolve({
        name: file.name,
        mimeType: file.type,
        sizeBytes: file.size,
        data: base64
      });
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// Lắng nghe thay đổi bộ chọn môn/tuần trong Guide và chọn ảnh nộp bài Văn
document.addEventListener("change", async e => {
  if (e.target.id === "writingPhotoInput") {
    const file = e.target.files?.[0];
    if (!file) return;
    const validation = validatePhotoFile(file);
    if (!validation.ok) {
      alert(validation.error);
      e.target.value = "";
      state.writingImage = null;
      updatePhotoPreviewUi();
      return;
    }
    try {
      const photoData = await readPhotoAsBase64(file);
      state.writingImage = photoData;
      updatePhotoPreviewUi();
    } catch (err) {
      alert("Không thể đọc file ảnh: " + err.message);
      e.target.value = "";
      state.writingImage = null;
      updatePhotoPreviewUi();
    }
    return;
  }

  if (e.target.id === "guideSubjectSelect") {
    state.tutor.selectedSubject = e.target.value;
    render();
  } else if (e.target.id === "guideWeekSelect") {
    state.tutor.selectedWeek = e.target.value;
    render();
  } else if (e.target.id === "mentalMathContinuationWeekSelect") {
    state.tutor.selectedWeek = e.target.value;
    render();
  }
});

// Khi người dùng nhập câu hỏi tự do trong #aiPrompt, khóa chờ review bài học bị hủy
document.addEventListener("input", e => {
  if (e.target?.id === "aiPrompt") {
    state.tutor.pendingSourceLessonKey = null;
    state.tutor.reviewPromptExpected = null;
  }
});

document.querySelector("#printBtn")?.addEventListener("click", () => window.print());
window.addEventListener("hashchange", render);

// Online/Offline detection để cập nhật sync status
window.addEventListener("online", () => {
  render();
  if (state.drive.token && !state.drive.hasSessionExpired) {
    driveSync.syncWithDrive();
  }
});
window.addEventListener("offline", () => {
  state.drive.syncStatus = "Đang offline · dữ liệu vẫn lưu trên iPad";
  render();
});

// Đăng ký Service Worker (chỉ cache static, tuyệt đối không cache API/token)
function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    const register = () => {
      navigator.serviceWorker.register("./sw.js", { type: "module" })
        .then(() => {})
        .catch(err => console.warn("Không đăng ký được Service Worker:", err));
    };
    if (document.readyState === "complete") register();
    else window.addEventListener("load", register, { once: true });
  }
}

// Khởi tạo ứng dụng
async function init() {
  try {
    const loaded = await storage.loadDatabase();
    if (loaded && validateDatabasePayload(loaded)) {
      state.db = loaded;
      // Khôi phục fileId từ DB đã lưu
      if (loaded.syncMeta?.fileId) {
        state.drive.fileId = loaded.syncMeta.fileId;
      }
      // Nạp history từ DB vào runtime tutor history
      if (Array.isArray(loaded.chatHistory)) {
        state.tutor.history = loaded.chatHistory.slice(-12);
      }
    }
  } catch (err) {
    console.warn("Lỗi khi đọc cơ sở dữ liệu local:", err);
  }

  voiceInput.checkSupport();

  if (document.readyState === "complete") driveSync.initGIS();
  else window.addEventListener("load", () => driveSync.initGIS(), { once: true });

  setTimerCallbacks({ saveLocal, render });
  lessonTimerManager.init();
  if (typeof initTouchNumpadListener === "function") {
    initTouchNumpadListener();
  }

  render();
  registerServiceWorker();
}

init();

// AI クライアントのハンドラー連携
setAiClientHandlers({
  saveLocal: touched => saveLocal(touched),
  renderGuide: () => renderGuide()
});

// Handler gọi /api/tutor (delegated to js/ai-client.js)
export async function askAi({ mode = "student_tutor", userMessage = null, writingImage = null } = {}) {
  return _askAi({ mode, userMessage, writingImage });
}

