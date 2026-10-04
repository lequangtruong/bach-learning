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

import {
  initKeyboardAdaptation
} from "./js/keyboard-adapt.js";

import { compressImageToJpeg } from "./js/image-compressor.js";
import { getWeekendMathExam, buildExamGradingPrompt } from "./js/math-weekend-exam.js";
import { storage } from "./js/storage.js";
import { driveSync, renderGoogleTutorButton } from "./js/drive-sync.js";
import { lessonTimerManager, setTimerCallbacks } from "./js/study-timer.js";
import { createRenderViews } from "./js/render-views.js";
import { askAi as _askAi, setAiClientHandlers } from "./js/ai-client.js";
import {
  renderGamesHub,
  renderSpeedMathArena,
  renderBarModelStudioView,
  renderSpotTheBugView,
  renderBalanceScaleView,
  renderMake24View,
  renderSpatial3DView,
  renderLogicGridView,
  renderRushHourView,
  renderChimpMemoryView,
  renderTangramView,
  renderTaskMasterView,
  cleanupActiveGames
} from "./js/render-games.js";

const curriculum = typeof window !== "undefined" && window.BACH_CURRICULUM ? window.BACH_CURRICULUM : { meta: {}, phases: [] };
const app = typeof document !== "undefined" ? document.querySelector("#app") : null;

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


let lanSyncTimer = null;
export function scheduleLanSync(delayMs = 800) {
  clearTimeout(lanSyncTimer);
  lanSyncTimer = setTimeout(async () => {
    try {
      await fetch("/api/db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state.db)
      });
    } catch {
      // Offline / LAN server unreachable: fail silently, iPad retains local data
    }
  }, delayMs);
}

// Lưu tiến độ cả 2 nơi: trên iPad (localStorage/IndexedDB) và máy chủ LAN
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

  // Đồng bộ ngầm lên máy chủ LAN ở nhà
  scheduleLanSync(800);

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
  document: typeof document !== "undefined" ? document : null
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
            <div class="learning-profile-item">
              <span class="learning-profile-label eyebrow">PHƯƠNG PHÁP HIỆN TẠI</span>
              <strong class="learning-profile-value">${escapeHtml(learningProfile.method || "Gợi ý từng bước")}</strong>
            </div>
            <div class="learning-profile-item">
              <span class="learning-profile-label eyebrow">NHỊP HỌC</span>
              <strong class="learning-profile-value">${escapeHtml(learningProfile.pace || "ổn định")}</strong>
            </div>
            ${learningProfile.focus ? `
            <div class="learning-profile-item">
              <span class="learning-profile-label eyebrow">TRỌNG TÂM CẦN ÔN</span>
              <strong class="learning-profile-value">${escapeHtml(learningProfile.focus)}</strong>
            </div>` : ""}
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

          <div class="ai-input-wrap">
            <textarea id="aiPrompt" class="ai-input" rows="4" placeholder="Nhập bài toán hoặc câu hỏi Bách chưa hiểu (Ví dụ: Bách chưa biết bắt đầu bài toán tìm hai số khi biết tổng và hiệu... hoặc đoạn văn cần gợi ý ý tưởng)..."></textarea>
          </div>
          <div class="ai-row">
            <button class="primary-button" id="askAi" ${state.tutor.isLoading ? "disabled" : ""}>
              ${state.tutor.isLoading ? "Đang suy nghĩ…" : "💡 Nhận hướng dẫn giải"}
            </button>
            <div id="aiThinkingIndicator" class="ai-thinking-indicator" role="status" aria-live="polite" aria-hidden="${state.tutor.isLoading ? "false" : "true"}" ${state.tutor.isLoading ? "" : "hidden"}>
              <span class="thinking-dots" aria-hidden="true"><i></i><i></i><i></i></span>
              <span id="aiThinkingText">AI đang suy nghĩ…</span>
            </div>
            <span id="aiStatus" class="week-focus">Sẵn sàng trợ giúp học sinh lớp 4 tự suy nghĩ lời giải.</span>
          </div>
          <div id="aiAnswer" class="ai-answer" ${state.tutor.lastAnswer ? "" : "hidden"}>${escapeHtml(state.tutor.lastAnswer)}</div>

          <!-- Thanh công cụ tương tác hai chiều & phản hồi của Bách (Kể cả khi AI tính sai hoặc đọc nhầm nét chữ) -->
          <div id="aiFeedbackToolbar" class="ai-feedback-toolbar" ${state.tutor.lastAnswer ? "" : "hidden"} style="margin-top:14px">
            <div class="ai-feedback-actions-row" style="display:flex; flex-wrap:wrap; gap:8px; align-items:center">
              <button type="button" class="small-button" id="speakTutorBtn" title="Nghe AI đọc phản hồi">
                🔊 Nghe trợ giảng đọc góp ý
              </button>
              <button type="button" class="small-button text-button" id="stopTutorBtn" title="Dừng đọc">
                ⏹️ Dừng đọc
              </button>
              <button type="button" class="small-button ai-dispute-btn" id="toggleExplainBackBtn" style="background:#f59e0b; color:#fff; font-weight:700" title="Bách nói giải thích cách tính hoặc bắt lỗi AI nếu AI tính sai">
                🎤 Phản hồi / Bắt lỗi AI
              </button>
              <button type="button" class="small-button text-button" id="toggleResubmitBtn" title="Chụp lại vở sau khi sửa bài">
                📷 Nộp lại bài đã sửa
              </button>
            </div>

            <!-- Khung phản hồi / phản biện / bắt lỗi AI -->
            <div id="studentFeedbackSection" class="student-feedback-section" hidden style="margin-top:12px; padding:14px; background:#fffbeb; border:2px solid #fde68a; border-radius:10px">
              <div style="font-weight:700; color:#b45309; margin-bottom:6px; display:flex; align-items:center; gap:6px">
                <span>🎯 Bách phản hồi / Bắt lỗi AI (Spot The Bug):</span>
              </div>
              <p style="font-size:0.88rem; color:#78350f; margin:0 0 8px; line-height:1.4">
                Ngay cả khi AI tính sai, đọc nhầm nét chữ của Bách, hoặc Bách có cách giải khác hay hơn — Bách hãy bấm mic nói hoặc gõ vào đây để bắt bẻ và phản hồi cho AI xem lại nhé!
              </p>
              <div style="display:flex; gap:8px; margin-bottom:8px">
                <textarea id="studentFeedbackInput" class="ai-input" rows="2" placeholder="Ví dụ: AI tính sai ở bài 3 rồi, 1500 x 4 phải bằng 6000 chứ... hoặc nét số 7 Bách viết rõ mà AI đọc nhầm thành 1..."></textarea>
                <button type="button" class="voice-button" id="feedbackVoiceBtn" data-voice-for="#studentFeedbackInput" title="Bấm mic để nói phản hồi">
                  🎤 Nói
                </button>
              </div>
              <div style="display:flex; justify-content:flex-end; gap:8px">
                <button type="button" class="small-button" id="sendExplainBackBtn" style="background:#d97706; color:#fff; font-weight:700">
                  🚀 Gửi phản hồi cho AI đối chiếu lại
                </button>
              </div>
            </div>

            <!-- Khung nộp lại bài đã sửa -->
            <div id="resubmitSection" class="resubmit-section" hidden style="margin-top:12px; padding:14px; background:#f0fdf4; border:2px solid #bbf7d0; border-radius:10px">
              <div style="font-weight:700; color:#15803d; margin-bottom:6px">
                📷 Nộp lại bài đã sửa vào vở ô ly:
              </div>
              <p style="font-size:0.88rem; color:#166534; margin:0 0 8px; line-height:1.4">
                Bách đã sửa lại phép tính vào vở ô ly chưa? Hãy chụp lại trang vở để AI kiểm tra lại và ghi nhận tiến bộ của Bách nhé!
              </p>
              <div style="display:flex; flex-wrap:wrap; gap:8px; align-items:center; margin-bottom:8px">
                <label for="resubmitPhotoInput" class="photo-button" role="button" tabindex="0" style="background:#16a34a; color:#fff">
                  📷 Chụp ảnh bài đã sửa
                </label>
                <input type="file" id="resubmitPhotoInput" class="visually-hidden" accept="image/jpeg,image/png,image/webp" capture="environment">
                <span id="resubmitPhotoName" style="font-size:0.85rem; color:#15803d; font-weight:600"></span>
              </div>
              <textarea id="resubmitExplanation" class="ai-input" rows="2" placeholder="Ghi chú thêm của Bách (ví dụ: Bách đã đặt tính lại hàng chục nhớ 1 ở bài 2...)..." style="margin-bottom:8px"></textarea>
              <div style="display:flex; justify-content:flex-end">
                <button type="button" class="small-button" id="sendResubmittedPhotoBtn" style="background:#16a34a; color:#fff; font-weight:700">
                  🚀 Nộp bài sửa cho AI đối chiếu
                </button>
              </div>
            </div>
          </div>

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
            <strong>Nguyên tắc bảo mật:</strong> Không lưu API key ở trình duyệt. Mọi câu hỏi được xử lý bảo mật trực tiếp qua máy chủ của gia đình.
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
      askAi({ mode: "student_tutor" });
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

export function clearTransientAiPhotos() {
  if (state.lastSubmittedExamPhotoTimeout) {
    clearTimeout(state.lastSubmittedExamPhotoTimeout);
    state.lastSubmittedExamPhotoTimeout = null;
  }
  state.lastSubmittedExamPhoto = null;
  state.resubmitPhoto = null;
  const resubmitInput = typeof document !== "undefined" ? document.querySelector?.("#resubmitPhotoInput") : null;
  if (resubmitInput) resubmitInput.value = "";
  const resubmitName = typeof document !== "undefined" ? document.querySelector?.("#resubmitPhotoName") : null;
  if (resubmitName) resubmitName.textContent = "";
}

export function render() {
  cleanupActiveGames();
  const { route, params } = parseRoute();
  if (route !== "guide") {
    clearTransientAiPhotos();
  }
  state.openWeek = state.openWeek || null;
  if (route === "plan") renderPlan();
  else if (route === "math" || route === "vietnamese") renderSubject(route, params);
  else if (route === "guide") renderGuide();
  else if (route === "games/speed-math") renderSpeedMathArena({ state, appRoot: app, saveLocal });
  else if (route === "games/bar-model") renderBarModelStudioView({ state, appRoot: app, saveLocal, params });
  else if (route === "games/spot-the-bug") renderSpotTheBugView({ state, appRoot: app, saveLocal, params });
  else if (route === "games/balance-scale") renderBalanceScaleView({ state, appRoot: app, saveLocal, params });
  else if (route === "games/make-24") renderMake24View({ state, appRoot: app, saveLocal, params });
  else if (route === "games/spatial-3d") renderSpatial3DView({ state, appRoot: app, saveLocal, params });
  else if (route === "games/logic-grid") renderLogicGridView({ state, appRoot: app, saveLocal, params });
  else if (route === "games/rush-hour") renderRushHourView({ state, appRoot: app, saveLocal, params });
  else if (route === "games/chimp-memory") renderChimpMemoryView({ state, appRoot: app, saveLocal, params });
  else if (route === "games/tangram") renderTangramView({ state, appRoot: app, saveLocal, params });
  else if (route === "games/task-master") renderTaskMasterView({ state, appRoot: app, saveLocal, params });
  else if (route.startsWith("games")) renderGamesHub({ state, appRoot: app });
  else renderHome();
  const activeNav = route.startsWith("games") ? "games" : route;
  document.querySelectorAll("[data-nav]").forEach(a => a.classList.toggle("active", a.dataset.nav === activeNav));
}

// Global Event Listeners
export async function handleGlobalClick(e) {
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

  // 2c. Bách tự tick "đã hiểu bài" cho từng buổi học
  const bachUnderstood = e.target.closest("[data-bach-understood]");
  if (bachUnderstood) {
    const key = bachUnderstood.dataset.bachUnderstood;
    if (!isValidLessonKey(key)) return;
    if (!state.db.lessonChecks) state.db.lessonChecks = {};
    const prev = state.db.lessonChecks[key] || {};
    state.db.lessonChecks[key] = { ...prev, bach: !prev.bach, bachAt: new Date().toISOString() };
    if (state.db.lessonChecks[key].bach) tutorAudio.playSuccessChime();
    await saveLocal(true);
    render();
    requestAnimationFrame(() => document.querySelector(`[data-bach-understood="${key}"]`)?.focus());
    return;
  }

  // 2d. Phụ huynh xác nhận Bách đã ổn cho từng buổi học
  const parentOk = e.target.closest("[data-parent-ok]");
  if (parentOk) {
    const key = parentOk.dataset.parentOk;
    if (!isValidLessonKey(key)) return;
    if (!state.db.lessonChecks) state.db.lessonChecks = {};
    const prev = state.db.lessonChecks[key] || {};
    state.db.lessonChecks[key] = { ...prev, parent: !prev.parent, parentAt: new Date().toISOString() };
    await saveLocal(true);
    render();
    requestAnimationFrame(() => document.querySelector(`[data-parent-ok="${key}"]`)?.focus());
    return;
  }

  // 2e. Phụ huynh chốt hoàn thành cả tuần: xác nhận 12 buổi + tick tuần hoàn thành
  const parentWeekOk = e.target.closest("[data-parent-week-ok]");
  if (parentWeekOk) {
    const weekId = parentWeekOk.dataset.parentWeekOk;
    if (!/^w([1-9]|[12][0-9]|3[0-6])$/.test(weekId)) return;
    const confirmed = !state.db.progress[weekId]?.parentOk;
    const now = new Date().toISOString();
    if (!state.db.lessonChecks) state.db.lessonChecks = {};
    for (const subject of ["math", "vietnamese"]) {
      for (let day = 1; day <= 6; day += 1) {
        const key = `${weekId}-${subject}-${day}`;
        state.db.lessonChecks[key] = { ...(state.db.lessonChecks[key] || {}), parent: confirmed, parentAt: now };
      }
    }
    state.db.progress[weekId] = {
      ...(state.db.progress[weekId] || {}),
      parentOk: confirmed,
      ...(confirmed ? { week: true } : {})
    };
    if (confirmed) tutorAudio.playSuccessChime();
    await saveLocal(true);
    render();
    requestAnimationFrame(() => document.querySelector(`[data-parent-week-ok="${weekId}"]`)?.focus());
    return;
  }

  // 3. Mở chi tiết tuần
  const toggle = e.target.closest("[data-toggle]");
  if (toggle) {
    state.openWeek = state.openWeek === toggle.dataset.toggle ? null : toggle.dataset.toggle;
    render();
    return;
  }

  // 3b. Mở / Thu gọn tất cả 36 tuần cho phụ huynh
  const toggleAll = e.target.closest("[data-toggle-all-weeks]");
  if (toggleAll) {
    state.openWeek = state.openWeek === "all" ? null : "all";
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
      tutorSpeech.speak(text, () => {
        tutorSpeech.speaking = false;
        if (audioReadBtn.isConnected) audioReadBtn.textContent = "🔊 Nghe đọc bài mẫu";
      });
      const checkTimer = setInterval(() => {
        if (!tutorSpeech.speaking) {
          clearInterval(checkTimer);
          if (audioReadBtn.isConnected) audioReadBtn.textContent = "🔊 Nghe đọc bài mẫu";
        }
      }, 300);
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

  const confirmAdaptiveBtn = e.target.closest("[data-confirm-adaptive]");
  if (confirmAdaptiveBtn) {
    const key = confirmAdaptiveBtn.dataset.confirmAdaptive;
    const wrap = confirmAdaptiveBtn.closest("[data-lesson-response]");
    const quality = wrap?.querySelector("[data-lesson-quality]")?.value || "";
    if (!state.db.lessonResponses) state.db.lessonResponses = {};
    if (!state.db.lessonResponses[key]) state.db.lessonResponses[key] = {};
    state.db.lessonResponses[key].quality = quality;
    state.db.lessonResponses[key].updatedAt = new Date().toISOString();
    if (quality) {
      const subject = key.includes("-vietnamese-") ? "vietnamese" : "math";
      const lastDay = Math.max(0, Number(key.split("-").pop()) - 1);
      if (!state.db.adaptive) state.db.adaptive = {};
      const previous = adaptivePlan(subject);
      state.db.adaptive[subject] = quality === "too_easy"
        ? { level: Math.min(3, previous.level + 1), extraCount: Math.min(3, Math.max(1, previous.extraCount + 1)), reason: quality, lastDay, updatedAt: new Date().toISOString() }
        : quality === "hard"
          ? { level: Math.max(0, previous.level - 1), extraCount: Math.max(0, previous.extraCount - 1), reason: quality, lastDay, updatedAt: new Date().toISOString() }
          : { level: previous.level, extraCount: previous.extraCount, reason: quality, lastDay, updatedAt: new Date().toISOString() };
      tutorAudio.playSuccessChime();
    }
    await saveLocal(true);
    confirmAdaptiveBtn.textContent = "Đã cập nhật ✓";
    setTimeout(() => {
      if (confirmAdaptiveBtn.isConnected) confirmAdaptiveBtn.textContent = "Xác nhận điều chỉnh";
    }, 1800);
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

  // 8c-bis. Xóa ảnh bài Kiểm Tra Toán
  if (e.target.closest("#removeMathPhotoBtn")) {
    state.writingImage = null;
    const mathPhotoInput = document.querySelector("#mathPhotoInput");
    if (mathPhotoInput) mathPhotoInput.value = "";
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

  // 8e. Chuyển Bài Kiểm Tra Toán Thứ 7 / Chủ Nhật sang Gemini để chấm theo Barem Toán 4 KNTT
  if (e.target.closest("#sendMathTestToAi")) {
    const explanation = document.querySelector("#mathTestExplanation")?.value.trim() || "";
    const photo = state.writingImage;
    if (!explanation && !photo) {
      alert("Bách hoặc phụ huynh hãy chụp ảnh bài làm trên vở hoặc ghi âm giải thích trước khi nộp nhé!");
      return;
    }

    const examPaperEl = document.querySelector(".math-exam-paper, .math-test-submission-panel");
    const domWeek = examPaperEl?.dataset.examWeek;
    const currentUrlParams = new URLSearchParams(location.hash.split("?")[1] || "");
    const urlWeek = currentUrlParams.get("week");
    const weekParam = domWeek ? `w${domWeek}` : (urlWeek || state.tutor.selectedWeek || "w1");
    const weekNumber = Number(weekParam.replace(/\D/g, "")) || 1;

    state.tutor.selectedSubject = "math";
    state.tutor.selectedWeek = weekParam.startsWith("w") ? weekParam : `w${weekNumber}`;
    state.tutor.pendingSourceLessonKey = null;
    state.tutor.reviewPromptExpected = null;
    state.tutor.prefillPrompt = "";

    const weekObj = allWeeks().find(w => w.id === (weekParam.startsWith("w") ? weekParam : `w${weekNumber}`)) || allWeeks()[0];
    const saturdayLesson = weekObj?.math?.dailyPlan?.[5] || {};
    const exam = getWeekendMathExam(weekNumber, saturdayLesson);
    const prompt = buildExamGradingPrompt(exam, explanation);

    const photoToSend = photo ? { mimeType: photo.mimeType, data: photo.data } : null;
    const submittedAt = Date.now();
    state.lastSubmittedExamPhoto = photo ? {
      mimeType: photo.mimeType,
      data: photo.data,
      examWeek: weekNumber,
      submittedAt
    } : null;
    if (state.lastSubmittedExamPhotoTimeout) {
      clearTimeout(state.lastSubmittedExamPhotoTimeout);
    }
    state.lastSubmittedExamPhotoTimeout = setTimeout(() => {
      if (state.lastSubmittedExamPhoto?.submittedAt === submittedAt) {
        state.lastSubmittedExamPhoto = null;
        state.lastSubmittedExamPhotoTimeout = null;
      }
    }, 180000);
    state.writingImage = null;
    const mathPhotoInput = document.querySelector("#mathPhotoInput");
    if (mathPhotoInput) mathPhotoInput.value = "";
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
    clearTransientAiPhotos();
    const week = allWeeks().find(item => item.id === state.tutor.selectedWeek) || allWeeks()[0];
    if (week) {
      askAi({ mode: "parent_summary", userMessage: buildWeeklySummaryPrompt(week) });
    }
    return;
  }

  if (e.target.closest("#askAi")) {
    clearTransientAiPhotos();
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

  // 9b. Điều khiển phản hồi, bắt lỗi AI và nộp bài sửa của Bách (Tương tác hai chiều / Spot The Bug)
  if (e.target.closest("#toggleExplainBackBtn")) {
    const section = document.querySelector("#studentFeedbackSection");
    if (section) {
      section.hidden = !section.hidden;
      if (section.hidden) {
        state.lastSubmittedExamPhoto = null;
      } else {
        const input = section.querySelector("#studentFeedbackInput");
        if (input) input.focus();
      }
    }
    return;
  }

  if (e.target.closest("#toggleResubmitBtn")) {
    const section = document.querySelector("#resubmitSection");
    if (section) {
      section.hidden = !section.hidden;
      if (section.hidden) {
        clearTransientAiPhotos();
      }
    }
    return;
  }

  if (e.target.closest("#sendExplainBackBtn")) {
    const feedbackInput = document.querySelector("#studentFeedbackInput");
    const feedbackText = feedbackInput?.value.trim() || "";
    if (!feedbackText) {
      alert("Bách hãy nói hoặc nhập phản hồi/bắt lỗi của mình trước khi gửi nhé!");
      return;
    }
    const weeks = allWeeks();
    const currentSelectedWeekObj = weeks.find(w => w.id === state.tutor.selectedWeek) || weeks[0];

    const disputePrompt = [
      `BÁCH PHẢN HỒI / BẮT LỖI AI (BÀI HỌC / BÀI KIỂM TRA TOÁN LỚP 4 - ${currentSelectedWeekObj.id.toUpperCase()}):`,
      `Nội dung phản hồi của Bách: "${feedbackText}"`,
      "",
      "NHIỆM VỤ CỦA TRỢ GIẢNG AI:",
      "1. ĐỐI CHIẾU VÀ TỰ KIỂM TRA LẠI (NGAY CẢ KHI AI TÍNH SAI HOẶC ĐỌC NHẦM NÉT CHỮ):",
      "   - Kiểm tra kỹ xem trước đó AI có tính sai không, có đọc nhầm chữ số nào của Bách không, hoặc cách giải của Bách có hợp lý không.",
      "   - NẾU AI TÍNH SAI HOẶC ĐỌC NHẦM NÉT CHỮ: Hãy thành thật nhận lỗi vui vẻ, nhiệt liệt khen ngợi Bách ('Bách bắt lỗi mình rất chuẩn xác! Tinh thần phát hiện lỗi của Bách thật tuyệt vời!'), sau đó giải thích lại phép tính đúng và cập nhật lại điểm số chính xác cho Bách.",
      "   - NẾU AI ĐÃ TÍNH ĐÚNG: Hãy ân cần, giải thích từng bước nhẹ nhàng để Bách hiểu vì sao kết quả lại như vậy.",
      "2. PHONG CÁCH: Tự xưng là 'mình', gọi bạn học là 'Bách' (không xưng thầy/cô, không gọi 'con')."
    ].join("\n");

    if (feedbackInput) feedbackInput.value = "";
    const feedbackSection = document.querySelector("#studentFeedbackSection");
    if (feedbackSection) feedbackSection.hidden = true;

    // Gắn ảnh đúng kỳ thi và giải phóng bộ nhớ ngay sau khi gửi phản hồi
    const photoToAttach = (state.lastSubmittedExamPhoto && state.lastSubmittedExamPhoto.examWeek === currentSelectedWeekObj.number)
      ? { mimeType: state.lastSubmittedExamPhoto.mimeType, data: state.lastSubmittedExamPhoto.data }
      : null;
    clearTransientAiPhotos();

    askAi({
      mode: "student_tutor",
      userMessage: disputePrompt,
      writingImage: photoToAttach
    });
    return;
  }

  if (e.target.closest("#sendResubmittedPhotoBtn")) {
    const explanation = document.querySelector("#resubmitExplanation")?.value.trim() || "";
    const photo = state.resubmitPhoto;
    if (!photo && !explanation) {
      alert("Bách hãy chụp ảnh bài đã sửa hoặc ghi chú cách sửa trước khi nộp nhé!");
      return;
    }
    const resubmitPrompt = [
      "BÁCH NỘP LẠI BÀI TOÁN ĐÃ SỬA VÀO VỞ Ô LY:",
      explanation ? `Lời giải thích của Bách: "${explanation}"` : "",
      "",
      "NHIỆM VỤ CỦA TRỢ GIẢNG AI:",
      "1. Đọc lại bài làm mới của Bách trên ảnh trang vở vừa chụp.",
      "2. Đối chiếu với bài trước, ghi nhận rõ ràng từng điểm tiến bộ (đặt tính thẳng hàng hơn, cộng/trừ đúng số nhớ, hoặc tự sửa được bài khó).",
      "3. Chúc mừng sự kiên trì của Bách và cập nhật lại điểm số mới chính xác.",
      "4. Xưng 'mình', gọi 'Bách' (không xưng thầy/cô, không gọi 'con')."
    ].join("\n");

    const photoToSend = photo ? { mimeType: photo.mimeType, data: photo.data } : null;
    clearTransientAiPhotos();
    const resubmitSection = document.querySelector("#resubmitSection");
    if (resubmitSection) resubmitSection.hidden = true;

    askAi({
      mode: "student_tutor",
      userMessage: resubmitPrompt,
      writingImage: photoToSend
    });
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
      clearTransientAiPhotos();
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
}

if (typeof document !== "undefined") {
  document.addEventListener("click", handleGlobalClick);
}

// Cập nhật thanh hiển thị ảnh bài viết hoặc bài kiểm tra đã chọn
export function updatePhotoPreviewUi() {
  const writingPreview = document.querySelector("#writingPhotoPreview");
  const writingName = document.querySelector("#writingPhotoName");
  const mathPreview = document.querySelector("#mathPhotoPreview");
  const mathName = document.querySelector("#mathPhotoName");

  const name = state.writingImage?.name || "Ảnh bài làm";
  const hasImage = Boolean(state.writingImage);

  if (writingPreview) {
    if (writingName) writingName.textContent = hasImage ? name : "";
    writingPreview.hidden = !hasImage;
  }
  if (mathPreview) {
    if (mathName) mathName.textContent = hasImage ? name : "";
    mathPreview.hidden = !hasImage;
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

// Lắng nghe thay đổi bộ chọn môn/tuần trong Guide và chọn ảnh nộp bài (Văn hoặc Toán)
export async function handleGlobalChange(e) {
  if (e.target.id === "writingPhotoInput" || e.target.id === "mathPhotoInput") {
    const file = e.target.files?.[0];
    if (!file) return;

    const isAllowedMime = PHOTO_BOUNDS.ALLOWED_MIMES.includes(file.type);
    if (!isAllowedMime) {
      alert("Định dạng ảnh không được hỗ trợ. Vui lòng chọn ảnh JPEG, PNG hoặc WebP.");
      e.target.value = "";
      state.writingImage = null;
      updatePhotoPreviewUi();
      return;
    }

    // Nếu môi trường không có Canvas (ví dụ chạy trong unit test Node.js), dùng validatePhotoFile
    if (typeof window === "undefined" || typeof document === "undefined" || !window.HTMLCanvasElement) {
      const validation = validatePhotoFile(file);
      if (!validation.ok) {
        alert(validation.error);
        e.target.value = "";
        state.writingImage = null;
        updatePhotoPreviewUi();
        return;
      }
    }

    try {
      let photoData;
      if (typeof window !== "undefined" && typeof document !== "undefined" && window.HTMLCanvasElement) {
        // Tự động nén qua Canvas phần cứng (1400px JPEG quality 0.82)
        photoData = await compressImageToJpeg(file, { maxWidth: 1400, quality: 0.82 });
      } else {
        photoData = await readPhotoAsBase64(file);
      }
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

  if (e.target.id === "resubmitPhotoInput") {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      let photoData;
      if (typeof window !== "undefined" && typeof document !== "undefined" && window.HTMLCanvasElement) {
        photoData = await compressImageToJpeg(file, { maxWidth: 1400, quality: 0.82 });
      } else {
        photoData = await readPhotoAsBase64(file);
      }
      state.resubmitPhoto = photoData;
      const nameEl = document.querySelector("#resubmitPhotoName");
      if (nameEl) nameEl.textContent = `✓ Đã chọn ảnh: ${file.name} (~${Math.round((photoData.sizeBytes || photoData.data?.length || 0) / 1024)} KB)`;
    } catch (err) {
      alert("Không thể đọc ảnh: " + err.message);
      e.target.value = "";
      state.resubmitPhoto = null;
    }
    return;
  }

  if (e.target.id === "tutorVoiceSelect") {
    tutorSpeech.setVoice(e.target.value);
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

  const qualitySelect = e.target.closest("[data-lesson-quality]");
  if (qualitySelect) {
    const key = qualitySelect.dataset.lessonQuality;
    const quality = qualitySelect.value || "";
    if (!state.db.lessonResponses) state.db.lessonResponses = {};
    if (!state.db.lessonResponses[key]) state.db.lessonResponses[key] = {};
    state.db.lessonResponses[key].quality = quality;
    state.db.lessonResponses[key].updatedAt = new Date().toISOString();
    if (quality) {
      const subject = key.includes("-vietnamese-") ? "vietnamese" : "math";
      const lastDay = Math.max(0, Number(key.split("-").pop()) - 1);
      if (!state.db.adaptive) state.db.adaptive = {};
      const previous = adaptivePlan(subject);
      state.db.adaptive[subject] = quality === "too_easy"
        ? { level: Math.min(3, previous.level + 1), extraCount: Math.min(3, Math.max(1, previous.extraCount + 1)), reason: quality, lastDay, updatedAt: new Date().toISOString() }
        : quality === "hard"
          ? { level: Math.max(0, previous.level - 1), extraCount: Math.max(0, previous.extraCount - 1), reason: quality, lastDay, updatedAt: new Date().toISOString() }
          : { level: previous.level, extraCount: previous.extraCount, reason: quality, lastDay, updatedAt: new Date().toISOString() };
      tutorAudio.playSuccessChime();
    }
    await saveLocal(true);
    return;
  }
}

if (typeof document !== "undefined") {
  document.addEventListener("change", handleGlobalChange);
}

// Khi người dùng nhập câu hỏi tự do trong #aiPrompt, khóa chờ review bài học bị hủy
if (typeof document !== "undefined") {
  document.addEventListener("input", e => {
    if (e.target?.id === "aiPrompt") {
      state.tutor.pendingSourceLessonKey = null;
      state.tutor.reviewPromptExpected = null;
    }
  });
}

if (typeof window !== "undefined" && typeof document !== "undefined") {
  document.querySelector("#printBtn")?.addEventListener("click", () => window.print());

  document.querySelector("#refreshAppBtn")?.addEventListener("click", async () => {
    const btn = document.querySelector("#refreshAppBtn");
    if (btn) {
      btn.style.transition = "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
      btn.style.transform = "rotate(360deg)";
    }
    // Nếu có Service Worker, chủ động kích hoạt cập nhật ngay
    if ("serviceWorker" in navigator) {
      try {
        const reg = await navigator.serviceWorker.getRegistration();
        if (reg) await reg.update();
      } catch {
        // Bỏ qua lỗi nếu offline
      }
    }
    setTimeout(() => {
      window.location.reload();
    }, 250);
  });
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
}

// Lắng nghe tín hiệu Live-Reload từ server (khi dev hoặc chạy LAN/ngrok)
function initLiveReload() {
  if (typeof EventSource === "undefined") return;
  try {
    const es = new EventSource("/api/live-reload");
    es.onmessage = (event) => {
      if (event.data === "reload") {
        console.log("⚡ [LiveReload] Phát hiện mã nguồn máy chủ thay đổi. Đang tự động làm mới...");
        window.location.reload();
      }
    };
  } catch {
    // Bỏ qua nếu môi trường hoặc proxy không hỗ trợ SSE
  }
}

// Đăng ký Service Worker và tự động refresh khi có bản cập nhật mới (PWA/WebApp)
function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    let refreshing = false;

    // Khi Service Worker mới kích hoạt và tiếp quản client (clients.claim())
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (!refreshing) {
        refreshing = true;
        console.log("⚡ [ServiceWorker] Phiên bản mới đã kích hoạt. Đang tự động tải lại WebApp...");
        window.location.reload();
      }
    });

    const register = async () => {
      try {
        const reg = await navigator.serviceWorker.register("./sw.js", { type: "module" });

        // Tự động kiểm tra bản cập nhật mới ngay khi mở trang
        reg.update().catch(() => {});

        // Định kỳ kiểm tra cập nhật mỗi 60 giây khi đang có mạng
        setInterval(() => {
          if (navigator.onLine) {
            reg.update().catch(() => {});
          }
        }, 60000);

        // Kiểm tra cập nhật khi người dùng quay lại tab hoặc mở lại PWA từ Home Screen
        document.addEventListener("visibilitychange", () => {
          if (document.visibilityState === "visible" && navigator.onLine) {
            reg.update().catch(() => {});
          }
        });

        // Nếu có bản cập nhật đang chờ kích hoạt
        if (reg.waiting) {
          reg.waiting.postMessage({ type: "SKIP_WAITING" });
        }

        reg.addEventListener("updatefound", () => {
          const newWorker = reg.installing;
          if (newWorker) {
            newWorker.addEventListener("statechange", () => {
              if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
                newWorker.postMessage({ type: "SKIP_WAITING" });
              }
            });
          }
        });
      } catch (err) {
        console.warn("Không đăng ký được Service Worker:", err);
      }
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
  if (typeof initKeyboardAdaptation === "function") {
    initKeyboardAdaptation();
  }

  render();
  registerServiceWorker();
  initLiveReload();
  syncWithLanServer().catch(() => {});
}

// Đồng bộ ngầm hai chiều giữa iPad (local) và máy chủ LAN
export async function syncWithLanServer() {
  try {
    const res = await fetch("/api/db");
    if (!res.ok) return;
    const remoteDb = await res.json();
    if (remoteDb && validateDatabasePayload(remoteDb)) {
      const merged = mergeDatabases(state.db, remoteDb);
      if (JSON.stringify(merged) !== JSON.stringify(state.db)) {
        state.db = merged;
        await storage.saveDatabase(state.db);
        render();
      }
    } else if (!remoteDb && state.db && state.db.hasLocalEdits) {
      scheduleLanSync(100);
    }
  } catch {
    // Offline / Không có mạng LAN: chạy 100% bằng local DB trên iPad
  }
}

if (typeof window !== "undefined") {
  init();
}

// AI クライアントのハンドラー連携
setAiClientHandlers({
  saveLocal: touched => saveLocal(touched),
  renderGuide: () => renderGuide()
});

// Handler gọi /api/tutor (delegated to js/ai-client.js)
export async function askAi({ mode = "student_tutor", userMessage = null, writingImage = null } = {}) {
  return _askAi({ mode, userMessage, writingImage });
}

