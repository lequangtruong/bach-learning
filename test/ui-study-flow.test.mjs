import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";
import * as core from "../js/core.js";
import {
  createEmptyDatabase,
  validateDatabasePayload,
  getLessonDefaultSeconds,
  formatTimerSeconds,
  computeCurrentTimerState,
  isValidLessonKey,
  lessonOrdinalFromKey
} from "../data/data-core.js";
import {
  coreBindings,
  curriculumSource,
  registerCurriculumFixtureLifecycle
} from "./helpers/curriculum-fixture.js";
import { createRenderViews } from "../js/render-views.js";

const renderViewsSource = await readFile(new URL("../js/render-views.js", import.meta.url), "utf8");
const voiceInputSource = await readFile(new URL("../js/voice-input.js", import.meta.url), "utf8");
const aiClientSource = await readFile(new URL("../js/ai-client.js", import.meta.url), "utf8");

function getCombinedSource(appSource) {
  return appSource + "\n" + renderViewsSource + "\n" + voiceInputSource + "\n" + aiClientSource;
}

function bindViewsToSandbox(sandbox) {
  const views = createRenderViews({
    ...sandbox,
    state: sandbox.state,
    curriculum: sandbox.curriculum,
    escapeHtml: sandbox.escapeHtml || core.escapeHtml,
    splitInlineItems: sandbox.splitInlineItems || core.splitInlineItems,
    renderInstructionSteps: sandbox.renderInstructionSteps || core.renderInstructionSteps,
    allWeeks: sandbox.allWeeks || core.allWeeks,
    doneCount: sandbox.doneCount || core.doneCount,
    percent: sandbox.percent || core.percent,
    adaptiveNextStep: sandbox.adaptiveNextStep,
    lessonDifficulty: sandbox.lessonDifficulty,
    renderDriveBar: sandbox.renderDriveBar
  });
  Object.assign(sandbox, views);
  return views;
}

// UI学習フロー、VMレンダリング、保護者プレビュー、段階的ヒント、レスポンシブ検証テストスイート
registerCurriculumFixtureLifecycle(test);


test("tutor answer has explicit Vietnamese speech output controls without auto-play", async () => {
  const appSource = await readFile(new URL("../app.js", import.meta.url), "utf8");
  const combinedSource = getCombinedSource(appSource);
  assert.match(combinedSource, /export const tutorSpeech/);
  assert.match(combinedSource, /speechSynthesis/);
  assert.match(combinedSource, /vi-VN/);
  assert.match(combinedSource, /speakTutorBtn/);
  assert.match(combinedSource, /stopTutorBtn/);
  assert.doesNotMatch(combinedSource, /speechSynthesis\.speak\([^)]*render/);
});

test("lesson response UI supports numeric answers and voice explanations", async () => {
  const appSource = await readFile(new URL("../app.js", import.meta.url), "utf8");
  const combinedSource = getCombinedSource(appSource);
  const dataCoreSource = await readFile(new URL("../data/data-core.js", import.meta.url), "utf8");
  assert.match(combinedSource, /data-lesson-answer/);
  assert.match(combinedSource, /data-lesson-explanation/);
  assert.match(combinedSource, /data-review-lesson-ai/);
  assert.match(combinedSource, /ADVANCE/);
  assert.match(combinedSource, /Đọc bài để nhập/);
  assert.match(combinedSource, /sendWritingToAi/);
  assert.match(dataCoreSource, /lessonResponses/);
});

test("tutor loading state visibly communicates that AI is thinking", async () => {
  const appSource = await readFile(new URL("../app.js", import.meta.url), "utf8");
  const combinedSource = getCombinedSource(appSource);
  const stylesSource = await readFile(new URL("../styles.css", import.meta.url), "utf8");
  assert.match(combinedSource, /aiThinkingIndicator/);
  assert.match(combinedSource, /AI đang suy nghĩ/);
  assert.match(combinedSource, /thinkingMessages/);
  assert.match(stylesSource, /thinking-bounce/);
});

test("mobile layout stacks section headers so Vietnamese labels do not collapse", async () => {
  const stylesSource = await readFile(new URL("../styles.css", import.meta.url), "utf8");
  assert.match(stylesSource, /\.section-head \{ display: block; \}/);
  assert.match(stylesSource, /\.section-head h2 \{ font-size: 1\.7rem/);
});

test("daily lesson UX can focus the child on one current day", async () => {
  const appSource = await readFile(new URL("../app.js", import.meta.url), "utf8");
  const combinedSource = getCombinedSource(appSource);
  const stylesSource = await readFile(new URL("../styles.css", import.meta.url), "utf8");
  assert.match(combinedSource, /<details class="daily-plan-day"/);
  assert.match(combinedSource, /<summary class="daily-plan-day-head"/);
  assert.match(combinedSource, /focusedDayIndex = null/);
  assert.match(combinedSource, /visibleDays = item\.dailyPlan/);
  assert.match(combinedSource, /summaryLabel = focusedDayIndex !== null \? "Bài học hôm nay"/);
  assert.match(combinedSource, /<b>Khởi động<\/b>/);
  assert.match(combinedSource, /<b>Gợi ý<\/b>/);
  assert.match(stylesSource, /\.daily-plan-day-head::-webkit-details-marker/);
});

test("today's lesson entry appears before the long subject material", async () => {
  const stylesSource = await readFile(new URL("../styles.css", import.meta.url), "utf8");
  const entryIndex = renderViewsSource.indexOf('class="today-lesson-entry"');
  const mentalMathIndex = renderViewsSource.indexOf('${isMath ? renderMentalMathFoundation() : ""}');
  assert.ok(entryIndex >= 0 && entryIndex < mentalMathIndex);
  assert.match(stylesSource, /\.today-lesson-entry-button/);
});

test("each daily lesson explains its difficulty for Bách and adapts after feedback", async () => {
  const appSource = await readFile(new URL("../app.js", import.meta.url), "utf8");
  const combinedSource = getCombinedSource(appSource);
  const stylesSource = await readFile(new URL("../styles.css", import.meta.url), "utf8");
  assert.match(combinedSource, /function lessonDifficulty/);
  assert.match(combinedSource, /Độ khó cho Bách/);
  assert.match(combinedSource, /Củng cố có chọn lọc/);
  assert.match(combinedSource, /Thử thách cao/);
  assert.match(combinedSource, /plan\.reason === "too_easy"/);
  assert.match(stylesSource, /\.lesson-difficulty/);
});


test("UI uses the curriculum 25 weekday / 50 Saturday study rhythm and home displays 25′", async () => {
  const appSource = await readFile(new URL("../app.js", import.meta.url), "utf8");
  const combinedSource = getCombinedSource(appSource);

  // Tiêu chí chấp nhận: Không còn chuỗi "45′" hoặc "45 phút" dùng để mô tả thời lượng học của một môn
  assert.doesNotMatch(combinedSource, /45′/);
  assert.doesNotMatch(combinedSource, /45\s*phút/i);

  // Trang chủ hiển thị 25′ cùng nhãn Mỗi môn / ngày
  assert.match(
    combinedSource,
    /<div class="stat-card"><span class="eyebrow">NHỊP HỌC<\/span><span class="number">25′<\/span><small>Mỗi môn \/ ngày<\/small><\/div>/
  );

  // UI môn học phản ánh nhịp weekday 25 phút và Saturday 50 phút từ curriculum
  assert.match(combinedSource, /\$\{curriculum\??\.meta\??\.dailyMinutes\??\.?\[subject\](?: \|\| 25)?\}\s*phút/);
  assert.match(combinedSource, /NHỊP MỘT BUỔI · \$\{curriculum\??\.meta\??\.dailyMinutes\??\.?\[subject\](?: \|\| 25)?\}\s*PHÚT/);
  assert.match(combinedSource, /NHỊP THỨ 7 · \$\{curriculum\??\.meta\??\.saturdayMinutes\??\.?\[subject\](?: \|\| 50)?\}\s*PHÚT/);
  assert.match(combinedSource, /PHIÊN DÀI · 50 PHÚT/);
});

test("AI ADVANCE is tied to the reviewed lesson and rolls over Saturday to Monday", async () => {
  const appSource = await readFile(new URL("../app.js", import.meta.url), "utf8");
  const combinedSource = getCombinedSource(appSource);
  assert.match(combinedSource, /action\.type === "ADVANCE"/);
  assert.match(combinedSource, /pendingSourceLessonKey/);
  assert.match(combinedSource, /sourceLessonKey: isValidLessonKey/);
  assert.match(combinedSource, /isAfterAdaptiveSource/);
  assert.match(combinedSource, /reason:\s*"too_easy"/);
  assert.match(combinedSource, /Math\.min\(3,\s*previous\.level \+ 1\)/);
  assert.match(combinedSource, /Math\.min\(3,\s*Math\.max\(1,\s*previous\.extraCount \+ 1\)\)/);
  assert.doesNotMatch(combinedSource, /new Date\(\)\.getDay\(\)/);
  assert.equal(lessonOrdinalFromKey("w1-math-6"), 5);
  assert.equal(lessonOrdinalFromKey("w2-math-1"), 6);
  assert.ok(lessonOrdinalFromKey("w2-math-1") > lessonOrdinalFromKey("w1-math-6"));
  assert.equal(isValidLessonKey("w3-math-4", "math"), true);
  assert.equal(isValidLessonKey("w3-vietnamese-4", "math"), false);

  const valid = createEmptyDatabase();
  valid.adaptive.math = { level: 1, extraCount: 1, reason: "too_easy", lastDay: 5, sourceLessonKey: "w1-math-6", updatedAt: "2026-09-08T10:00:00.000Z" };
  assert.equal(validateDatabasePayload(valid), true);
  valid.adaptive.math.sourceLessonKey = "w1-vietnamese-6";
  assert.equal(validateDatabasePayload(valid), false, "source must belong to the adjusted subject");
});


test("AI review adaptation invariants: sourceLessonKey strictly tied to review button, cleared on input and free-form prompts", async () => {
  const appSource = await readFile(new URL("../app.js", import.meta.url), "utf8");
  const combinedSource = getCombinedSource(appSource);

  // Bất biến 1: sourceLessonKey chỉ được gắn khi yêu cầu được khởi động từ nút data-review-lesson-ai
  assert.match(appSource, /reviewLessonAi\.dataset\.reviewLessonAi/);
  assert.match(appSource, /state\.tutor\.reviewPromptExpected = reviewPrompt;/);
  assert.match(appSource, /state\.tutor\.pendingSourceLessonKey = key;/);

  // Bất biến 2: Khi người dùng nhập hoặc gửi câu hỏi tự do trong #aiPrompt, khóa chờ phải bị hủy
  assert.match(appSource, /document\.addEventListener\("input",\s*e\s*=>\s*\{\s*if\s*\(e\.target\?\.id === "aiPrompt"\)\s*\{\s*state\.tutor\.pendingSourceLessonKey = null;\s*state\.tutor\.reviewPromptExpected = null;\s*\}\s*\}\);/);

  // askAi hủy khóa chờ và chỉ gắn sourceLessonKey khi khớp prompt review bài học
  assert.match(combinedSource, /const isReviewRequest = mode === "student_tutor"\s*&& Boolean\(state\.tutor\.pendingSourceLessonKey\)\s*&& Boolean\(state\.tutor\.reviewPromptExpected\)\s*&& promptText === state\.tutor\.reviewPromptExpected;/);
  assert.match(combinedSource, /const sourceLessonKey = isReviewRequest && isValidLessonKey\(state\.tutor\.pendingSourceLessonKey\)\s*\?\s*state\.tutor\.pendingSourceLessonKey\s*:\s*null;/);
  assert.match(combinedSource, /state\.tutor\.pendingSourceLessonKey = null;\s*state\.tutor\.reviewPromptExpected = null;/);

  // Một câu hỏi tự do không thể làm ADVANCE ảnh hưởng độ khó
  assert.match(appSource, /const actionHasLessonSource = isValidLessonKey\(action\.sourceLessonKey, action\.subject\);/);
  assert.match(appSource, /if\s*\(action\.type === "ADVANCE" && \(action\.subject === "math" \|\| action\.subject === "vietnamese"\) && actionHasLessonSource\)/);
});

test("writing photo fallback: UI capture and client bound (validatePhotoFile, accept, capture)", async () => {
  const appSource = await readFile(new URL("../app.js", import.meta.url), "utf8");
  const combinedSource = getCombinedSource(appSource);

  // Contract UX & input requirements
  assert.match(combinedSource, /accept="image\/jpeg,image\/png,image\/webp"/);
  assert.match(combinedSource, /capture="environment"/);
  assert.match(combinedSource, /id="writingPhotoInput"/);
  assert.match(combinedSource, /id="writingPhotoPreview"/);
  assert.match(combinedSource, /id="removeWritingPhotoBtn"/);

  // Client bound: <= 1 MiB and allowed MIME
  const sandbox = { ...coreBindings, window: {} };
  vm.runInNewContext(
    `
    const PHOTO_BOUNDS = {
      MAX_SIZE_BYTES: 1024 * 1024,
      ALLOWED_MIMES: ["image/jpeg", "image/png", "image/webp"]
    };
    function validatePhotoFile(file) {
      if (!file) return { ok: false, error: "Chưa chọn file ảnh." };
      if (!PHOTO_BOUNDS.ALLOWED_MIMES.includes(file.type)) {
        return { ok: false, error: "Định dạng ảnh không được hỗ trợ. Vui lòng chọn ảnh JPEG, PNG hoặc WebP." };
      }
      if (file.size > PHOTO_BOUNDS.MAX_SIZE_BYTES) {
        return { ok: false, error: "Ảnh quá lớn (tối đa 1 MiB). Bách hoặc phụ huynh hãy chụp gần hơn hoặc chọn ảnh nhẹ hơn nhé." };
      }
      return { ok: true };
    }
    sandbox.PHOTO_BOUNDS = PHOTO_BOUNDS;
    sandbox.validatePhotoFile = validatePhotoFile;
    `,
    { sandbox }
  );

  // Match implementation from true module (js/core.js)
  const coreSource = await readFile(new URL("../js/core.js", import.meta.url), "utf8");
  assert.match(coreSource, /export const PHOTO_BOUNDS = \{\s*MAX_SIZE_BYTES: 1024 \* 1024,(?:\s*\/\/[^\n]*)?\s*ALLOWED_MIMES: \["image\/jpeg", "image\/png", "image\/webp"\]\s*\};/);
  assert.match(coreSource, /export function validatePhotoFile\(file\)/);

  // Test validatePhotoFile logic directly from true module
  assert.equal(core.PHOTO_BOUNDS.MAX_SIZE_BYTES, 1024 * 1024);
  assert.deepEqual(Array.from(core.PHOTO_BOUNDS.ALLOWED_MIMES), ["image/jpeg", "image/png", "image/webp"]);

  assert.equal(core.validatePhotoFile(null).ok, false);
  assert.equal(core.validatePhotoFile({ type: "image/gif", size: 1000 }).ok, false);
  assert.equal(core.validatePhotoFile({ type: "image/jpeg", size: 1024 * 1024 + 1 }).ok, false);
  assert.equal(core.validatePhotoFile({ type: "image/jpeg", size: 1024 * 1024 }).ok, true);
  assert.equal(core.validatePhotoFile({ type: "image/png", size: 500 }).ok, true);
  assert.equal(core.validatePhotoFile({ type: "image/webp", size: 500 }).ok, true);

  // Plumbing check: askAi destructures writingImage and includes it in request payload
  assert.match(appSource, /export async function askAi\(\{[\s\S]*?writingImage[\s\S]*?\} = \{\}\)/);
  assert.match(combinedSource, /payload\.writingImage\s*=\s*\{/);
});


test("SVG visual models render valid vector markup for Singapore Bar Models and geometry", async () => {
  const combinedSource = renderViewsSource;
  assert.match(combinedSource, /export function renderSvgVisual/);
  assert.match(combinedSource, /Mô hình Bar Model Singapore/);
  assert.match(combinedSource, /Phần – Toàn thể/);
  assert.match(combinedSource, /Trục bước nhảy dãy số/);
  assert.match(combinedSource, /Lưới diện tích và chu vi/);
});

test("audio and dynamic adaptive systems are integrated into lesson workflow", async () => {
  const appSource = await readFile(new URL("../app.js", import.meta.url), "utf8");
  const combinedSource = getCombinedSource(appSource);
  assert.match(appSource, /export const tutorAudio/);
  assert.match(appSource, /playSuccessChime/);
  assert.match(combinedSource, /audio-read-btn/);
  assert.match(combinedSource, /Nhịp học 3 chặng của Bách/);
  assert.match(combinedSource, /Chặng 1/);
  assert.match(combinedSource, /Chặng 2/);
  assert.match(combinedSource, /Chặng 3/);
  assert.match(combinedSource, /level-up-badge/);
});

test("renderInstructionSteps removes redundant leading item labels on multi-line ordered lists while preserving math and single-line content", () => {

  // 1. Acceptance example: Gợi ý N: with math content preserved
  const hintInput = "Gợi ý 1: So sánh hàng trăm của 3 số.\nGợi ý 2: Ta có 6 < x < 8.\nGợi ý 3: Chữ số x là 7.";
  const renderedHint = core.renderInstructionSteps(hintInput);
  assert.equal(
    renderedHint,
    '<ol class="lesson-instruction-list"><li>So sánh hàng trăm của 3 số.</li><li>Ta có 6 &lt; x &lt; 8.</li><li>Chữ số x là 7.</li></ol>'
  );
  assert.doesNotMatch(renderedHint, /Gợi ý \d/);
  assert.match(renderedHint, /6 &lt; x &lt; 8/);

  // 2. Acceptance example: Bước 1:, 2), (3)
  const stepsInput = "Bước 1: Chuẩn bị nháp\n2) Đặt tính cẩn thận\n(3) Kiểm tra lại kết quả";
  const renderedSteps = core.renderInstructionSteps(stepsInput);
  assert.equal(
    renderedSteps,
    '<ol class="lesson-instruction-list"><li>Chuẩn bị nháp</li><li>Đặt tính cẩn thận</li><li>Kiểm tra lại kết quả</li></ol>'
  );
  assert.doesNotMatch(renderedSteps, /Bước 1|2\)|3\)/);

  // 3. Accidental numbers (e.g. 5)) and standard N.
  const accidentalInput = "1. Đọc kĩ đề bài\n5) Tóm tắt số liệu\n(4) Tính kết quả";
  const renderedAccidental = core.renderInstructionSteps(accidentalInput);
  assert.equal(
    renderedAccidental,
    '<ol class="lesson-instruction-list"><li>Đọc kĩ đề bài</li><li>Tóm tắt số liệu</li><li>Tính kết quả</li></ol>'
  );

  // 4. Meaningful math content at start of line (e.g. 6 < x < 8., fractions, decimals)
  const mathInput = "1. 6 < x < 8.\n2) 2.5 lít nước\n(3) 1/2 số học sinh";
  const renderedMath = core.renderInstructionSteps(mathInput);
  assert.equal(
    renderedMath,
    '<ol class="lesson-instruction-list"><li>6 &lt; x &lt; 8.</li><li>2.5 lít nước</li><li>1/2 số học sinh</li></ol>'
  );

  // 5. Single-line content retains existing <p> behavior
  const singleHint = "Gợi ý 1: So sánh hàng trăm của 3 số.";
  assert.equal(core.renderInstructionSteps(singleHint), '<p>Gợi ý 1: So sánh hàng trăm của 3 số.</p>');
  const singleMath = "Ta có 6 < x < 8.";
  assert.equal(core.renderInstructionSteps(singleMath), '<p>Ta có 6 &lt; x &lt; 8.</p>');
});

test("Math submission UI provides clear question target, optional voice/text guidance, child-friendly explanation, and preserves review handler and prompt invariants", async () => {
  const appSource = await readFile(new URL("../app.js", import.meta.url), "utf8");
  const combinedSource = getCombinedSource(appSource);

  // A. Renamed button and child-friendly explanation
  assert.match(combinedSource, /Nhờ AI chấm (&amp;|&) góp ý/);
  assert.match(combinedSource, /Thầy cô Gia sư AI/);
  assert.match(combinedSource, /chiến lược/);
  assert.match(combinedSource, /cách trình bày/);

  // B. Answer field clearly identifies WHICH question it is for
  assert.match(combinedSource, /Nộp bài Câu 1 - Nhờ AI chấm &amp; góp ý/);
  assert.match(combinedSource, /Đáp số Câu 1 \(phần Thực hành cốt lõi - Bách tự làm\)/);
  assert.match(combinedSource, /Nhập đáp số Câu 1 \(phần Bách tự làm\)/);

  // C. Optional explanation field clearly states Bách can write or press mic to speak and is optional
  assert.match(combinedSource, /Cách giải \/ suy nghĩ của Bách \(không bắt buộc\)/);
  assert.match(combinedSource, /Bách có thể tự gõ vào ô hoặc bấm nút micro 🎤 để nói cách làm \(tùy chọn\)\. AI sẽ xem xét cả đáp án và cách làm để chấm &amp; góp ý cho con\./);
  assert.match(combinedSource, /Gõ cách giải hoặc bấm nút mic để đọc suy nghĩ \(không bắt buộc\)/);

  // D. Preserved review handler and prompt invariants
  assert.match(appSource, /const reviewLessonAi = e\.target\.closest\("\[data-review-lesson-ai\]"\);/);
  assert.match(appSource, /wrap\?\.querySelector\("\[data-lesson-answer\]"\)\?\.value\.trim\(\)/);
  assert.match(appSource, /wrap\?\.querySelector\("\[data-lesson-explanation\]"\)\?\.value\.trim\(\)/);
  assert.match(appSource, /wrap\?\.querySelector\("\[data-lesson-quality\]"\)\?\.value/);
  assert.match(appSource, /const reviewPrompt = `Hãy đánh giá bài Toán vừa nộp của Bách theo 4 điểm: đúng đáp số, chiến lược, cách trình bày và mức độ so với học sinh giỏi lớp 4/);
  assert.match(appSource, /state\.tutor\.reviewPromptExpected = reviewPrompt;/);
  assert.match(appSource, /state\.tutor\.prefillPrompt = reviewPrompt;/);
});

test("Parent plan area provides compact lesson launcher and canonical lesson preview mode without timers or edits", async () => {
  const appSource = await readFile(new URL("../app.js", import.meta.url), "utf8");
  const cleanAppSource = appSource.replace(/export\s+/g, "");
  const sandbox = {
    ...coreBindings,
    window: {},
    curriculum: null,
    state: {
      db: {
        progress: {},
        lessonTimers: {},
        lessonResponses: {},
        adaptive: {},
        notes: {}
      },
      tutor: { selectedWeek: "w1" },
      openWeek: "w1"
    },
    app: { innerHTML: "" },
    document: {
      querySelectorAll: () => [],
      querySelector: () => null
    },
    lessonTimerManager: {
      updateActiveElements: () => {}
    },
    renderDriveBar: () => "",
    adaptiveNextStep: () => "",
    lessonDifficulty: () => ({ level: 3, label: "Vừa sức", note: "Bám sát tiến độ" }),
    getLessonDefaultSeconds,
    computeCurrentTimerState,
    formatTimerSeconds
  };
  vm.runInNewContext(curriculumSource, sandbox);
  sandbox.curriculum = sandbox.window.BACH_CURRICULUM;

  bindViewsToSandbox(sandbox);

  const phase0 = sandbox.curriculum.phases[0];
  const week1 = {
    id: "w1",
    number: 1,
    phase: phase0,
    math: phase0.math[0],
    vietnamese: phase0.vietnamese[0]
  };

  const cardHtml = sandbox.weekCard(week1);

  // 1. Compact parent lesson launcher for each subject (Toán & Tiếng Việt)
  assert.match(cardHtml, /data-parent-launcher="math-w1"/);
  assert.match(cardHtml, /data-parent-launcher="vietnamese-w1"/);
  assert.match(cardHtml, /Phụ huynh xem trước bài học Toán/);
  assert.match(cardHtml, /Phụ huynh xem trước bài học Tiếng Việt/);

  // No long duplicate accordion/copy below weekly goals
  assert.doesNotMatch(cardHtml, /parent-all-detail-block/);
  assert.doesNotMatch(cardHtml, /parent-lesson-detail-viewer/);

  // 6 links per subject identifying day and title
  for (const day of ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"]) {
    assert.match(cardHtml, new RegExp(`<span class="parent-launcher-day">${day}</span>`));
  }
  assert.match(cardHtml, /href="#math\?week=w1&(?:amp;)?day=Th%E1%BB%A9%204&(?:amp;)?preview=parent"/);
  assert.match(cardHtml, /href="#vietnamese\?week=w1&(?:amp;)?day=Th%E1%BB%A9%204&(?:amp;)?preview=parent"/);

  // 2. Canonical Math lesson reuse in parent preview mode
  const mathParams = new URLSearchParams("week=w1&day=Th%E1%BB%A9%204&preview=parent");
  sandbox.renderSubject("math", mathParams);
  const mathPreviewHtml = sandbox.app.innerHTML;

  // Actual Bách lesson content rendered
  assert.match(mathPreviewHtml, /Tuần 1 · Thứ 4 · 25 phút/);
  assert.match(mathPreviewHtml, /So sánh có lý do/);
  assert.match(mathPreviewHtml, /Khởi động (&amp;|&) Khám phá/);
  assert.match(mathPreviewHtml, /Thực hành cốt lõi/);
  assert.match(mathPreviewHtml, /Thử thách mở rộng/);

  // Clear preview indicator and back control (not called generic "chỉ đọc")
  assert.match(mathPreviewHtml, /Phụ huynh đang xem trước/);
  assert.match(mathPreviewHtml, /Quay lại lộ trình/);
  assert.match(mathPreviewHtml, /href="#plan"/);
  assert.doesNotMatch(mathPreviewHtml, /chỉ đọc/i);

  // Timer, submissions, AI review, mic, self-rating, and editable fields suppressed
  assert.doesNotMatch(mathPreviewHtml, /lesson-timer-panel/);
  assert.doesNotMatch(mathPreviewHtml, /data-timer-action/);
  assert.doesNotMatch(mathPreviewHtml, /data-lesson-answer/);
  assert.doesNotMatch(mathPreviewHtml, /data-lesson-explanation/);
  assert.doesNotMatch(mathPreviewHtml, /data-review-lesson-ai/);
  assert.doesNotMatch(mathPreviewHtml, /data-lesson-quality/);
  assert.doesNotMatch(mathPreviewHtml, /data-voice-for/);
  assert.doesNotMatch(mathPreviewHtml, /data-done-mental/);
  assert.doesNotMatch(mathPreviewHtml, /<input\b/i);
  assert.doesNotMatch(mathPreviewHtml, /<textarea\b/i);
  assert.doesNotMatch(mathPreviewHtml, /<select\b/i);
  assert.doesNotMatch(mathPreviewHtml, /contenteditable/i);

  // 3. Canonical Vietnamese lesson reuse in parent preview mode
  const vietParams = new URLSearchParams("week=w1&day=Th%E1%BB%A9%204&preview=parent");
  sandbox.renderSubject("vietnamese", vietParams);
  const vietPreviewHtml = sandbox.app.innerHTML;

  assert.match(vietPreviewHtml, /Tuần 1 · Thứ 4 · 25 phút/);
  assert.match(vietPreviewHtml, /Phụ huynh đang xem trước/);
  assert.match(vietPreviewHtml, /Quay lại lộ trình/);
  assert.doesNotMatch(vietPreviewHtml, /chỉ đọc/i);
  assert.doesNotMatch(vietPreviewHtml, /writing-submission-panel/);
  assert.doesNotMatch(vietPreviewHtml, /writingSubmission/);
  assert.doesNotMatch(vietPreviewHtml, /lesson-timer-panel/);
  assert.doesNotMatch(vietPreviewHtml, /data-timer-action/);
  assert.doesNotMatch(vietPreviewHtml, /<input\b/i);
  assert.doesNotMatch(vietPreviewHtml, /<textarea\b/i);

  // 4. Normal Bách study mode remains interactive
  sandbox.renderSubject("math", null);
  const normalMathHtml = sandbox.app.innerHTML;

  assert.match(normalMathHtml, /VÀO HỌC NGAY/);
  assert.match(normalMathHtml, /lesson-timer-panel/);
  assert.match(normalMathHtml, /data-timer-action="start"/);
  assert.match(normalMathHtml, /data-lesson-answer=/);
  assert.match(normalMathHtml, /data-review-lesson-ai=/);
  assert.match(normalMathHtml, /data-lesson-quality=/);
  assert.match(normalMathHtml, /data-voice-for=/);
  assert.match(normalMathHtml, /data-done-mental=/);

  sandbox.renderSubject("vietnamese", null);
  const normalVietHtml = sandbox.app.innerHTML;
  assert.match(normalVietHtml, /VÀO HỌC NGAY/);
  assert.match(normalVietHtml, /writing-submission-panel/);
  assert.match(normalVietHtml, /writingSubmission/);
  assert.match(normalVietHtml, /lesson-timer-panel/);

  // 5. Verify parent note control exists in week card
  assert.match(cardHtml, /<textarea id="note_w1"/);
  assert.match(cardHtml, /data-save-note="w1"/);
});


test("representative coverage audit: interactive controls in study view have wired handlers or inert type=button semantics", async () => {
  const appSource = await readFile(new URL("../app.js", import.meta.url), "utf8");
  const cleanAppSource = appSource.replace(/export\s+/g, "");
  const sandbox = {
    ...coreBindings,
    window: {},
    curriculum: null,
    state: {
      db: {
        progress: {},
        lessonTimers: {},
        lessonResponses: {},
        adaptive: {},
        notes: {}
      },
      openWeek: "w1"
    },
    getLessonDefaultSeconds,
    computeCurrentTimerState,
    formatTimerSeconds
  };
  vm.runInNewContext(curriculumSource, sandbox);
  sandbox.curriculum = sandbox.window.BACH_CURRICULUM;

  bindViewsToSandbox(sandbox);

  const phase0 = sandbox.curriculum.phases[0];
  const mathStudyHtml = sandbox.renderDailyPlan(phase0.math[0], "math", true, "w1", "P1");
  const vietStudyHtml = sandbox.renderDailyPlan(phase0.vietnamese[0], "vietnamese", true, "w1", "P1");

  for (const [subj, html] of [["math", mathStudyHtml], ["vietnamese", vietStudyHtml]]) {
    // Audit buttons: Every button MUST have type="button" and a recognizable action route
    const buttonRegex = /<button\b([^>]*)>(.*?)<\/button>/gis;
    let btnMatch;
    let buttonCount = 0;
    while ((btnMatch = buttonRegex.exec(html)) !== null) {
      buttonCount++;
      const attrs = btnMatch[1];
      assert.match(attrs, /type="button"/, `Every button in study view must have type="button" attribute: ${btnMatch[0]}`);

      const hasAction = /data-timer-action/.test(attrs) ||
        /data-save-lesson/.test(attrs) ||
        /data-review-lesson-ai/.test(attrs) ||
        /data-voice-for/.test(attrs) ||
        /audio-read-btn/.test(attrs) ||
        /data-reveal-hint/.test(attrs);
      assert.ok(hasAction, `Study view button in ${subj} must have a click route: ${btnMatch[0]}`);
    }
    assert.ok(buttonCount > 0, `At least one button must be audited in ${subj} study view`);

    // Audit input elements
    const inputRegex = /<input\b([^>]*)>/gis;
    let inMatch;
    while ((inMatch = inputRegex.exec(html)) !== null) {
      const attrs = inMatch[1];
      assert.match(attrs, /data-lesson-answer/, `Inputs in study view must route to data-lesson-answer: ${inMatch[0]}`);
    }

    // Audit textarea elements
    const textareaRegex = /<textarea\b([^>]*)>/gis;
    let taMatch;
    while ((taMatch = textareaRegex.exec(html)) !== null) {
      const attrs = taMatch[1];
      assert.match(attrs, /data-lesson-explanation/, `Textareas in study view must route to data-lesson-explanation: ${taMatch[0]}`);
    }

    // Audit select elements
    const selectRegex = /<select\b([^>]*)>/gis;
    let selMatch;
    while ((selMatch = selectRegex.exec(html)) !== null) {
      const attrs = selMatch[1];
      assert.match(attrs, /data-lesson-quality/, `Selects in study view must route to data-lesson-quality: ${selMatch[0]}`);
    }
  }

  // Audit that app.js / render-views wire listeners for each of these routes
  assert.match(appSource, /e\.target\.closest\("\[data-timer-action\]"\)/);
  assert.match(appSource, /e\.target\.closest\("\[data-save-lesson\]"\)/);
  assert.match(appSource, /e\.target\.closest\("\[data-review-lesson-ai\]"\)/);
  assert.match(appSource, /e\.target\.closest\("\[data-voice-for\]"\)/);
  assert.match(appSource, /e\.target\.closest\("\.audio-read-btn"\)/);
  assert.match(appSource, /e\.target\.closest\("\[data-reveal-hint\]"\)/);
  const combinedSource = getCombinedSource(appSource);
  assert.match(combinedSource, /document(Obj)?\.querySelectorAll\("\[data-lesson-answer\]"\)/);
  assert.match(combinedSource, /document(Obj)?\.querySelectorAll\("\[data-lesson-explanation\]"\)/);
  assert.match(combinedSource, /document(Obj)?\.querySelectorAll\("\[data-lesson-quality\]"\)/);
});

test("Math lesson response UI child-clarity and Parent plan 6-day detailed read-only contract", async () => {
  const appSource = await readFile(new URL("../app.js", import.meta.url), "utf8");
  const cleanAppSource = appSource.replace(/export\s+/g, "");
  const combinedSource = getCombinedSource(appSource);

  // 1. Math lesson response UI contract
  // - Heading plainly says the answer is for "Câu 1"
  assert.match(combinedSource, /<div class="daily-plan-label">Nộp bài Câu 1 - Nhờ AI chấm &amp; góp ý<\/div>/);
  assert.match(combinedSource, /<label class="lesson-field-label">Đáp số Câu 1 \(phần Thực hành cốt lõi - Bách tự làm\):<\/label>/);
  assert.match(combinedSource, /placeholder="Nhập đáp số Câu 1 \(phần Bách tự làm\)"/);

  // - Explain that Bách may optionally write or press microphone to speak method, and AI considers both answer and method
  assert.match(combinedSource, /Bách có thể tự gõ vào ô hoặc bấm nút micro 🎤 để nói cách làm \(tùy chọn\)\. AI sẽ xem xét cả đáp án và cách làm để chấm &amp; góp ý cho con\./);
  assert.match(combinedSource, /Thầy cô Gia sư AI sẽ xem xét cả đáp số và cách làm/);

  // - Action label changed to unambiguous "Nhờ AI chấm & góp ý"
  assert.match(combinedSource, />Nhờ AI chấm &amp; góp ý<\/button>/);

  // - Keep existing data attributes and exact review flow
  assert.match(combinedSource, /data-lesson-response="\$\{responseKey\}"/);
  assert.match(combinedSource, /data-lesson-answer="\$\{responseKey\}"/);
  assert.match(combinedSource, /data-save-lesson="\$\{responseKey\}"/);
  assert.match(combinedSource, /data-review-lesson-ai="\$\{responseKey\}"/);
  assert.match(combinedSource, /data-lesson-quality="\$\{responseKey\}"/);
  assert.match(combinedSource, /data-lesson-explanation="\$\{responseKey\}"/);
  assert.match(combinedSource, /data-voice-for="\[data-lesson-explanation='\$\{responseKey\}'\]"/);

  // Review handler wiring and prompt invariant
  assert.match(appSource, /const reviewLessonAi = e\.target\.closest\("\[data-review-lesson-ai\]"\);/);
  assert.match(appSource, /const answer = wrap\?\.querySelector\("\[data-lesson-answer\]"\)\?\.value\.trim\(\) \|\| "";/);
  assert.match(appSource, /const explanation = wrap\?\.querySelector\("\[data-lesson-explanation\]"\)\?\.value\.trim\(\) \|\| "";/);
  assert.match(appSource, /state\.tutor\.selectedSubject = "math";/);
  assert.match(appSource, /location\.hash = "#guide";/);
  assert.match(appSource, /state\.tutor\.prefillPrompt = reviewPrompt;/);

  // 2. Compact parent launcher -> canonical preview contract
  const sandbox = {
    ...coreBindings,
    window: {},
    curriculum: null,
    app: { innerHTML: "" },
    state: {
      db: { progress: {}, lessonTimers: {}, lessonResponses: {}, adaptive: {}, notes: {} },
      openWeek: "w1",
      lessonHints: {}
    },
    renderDriveBar: () => "",
    adaptiveNextStep: () => "",
    lessonDifficulty: () => ({ level: 3, label: "Vừa sức", note: "Bám sát tiến độ" }),
    getLessonDefaultSeconds,
    computeCurrentTimerState,
    formatTimerSeconds
  };
  vm.runInNewContext(curriculumSource, sandbox);
  sandbox.curriculum = sandbox.window.BACH_CURRICULUM;

  bindViewsToSandbox(sandbox);

  const phase0 = sandbox.curriculum.phases[0];
  const week1 = {
    id: "w1",
    number: 1,
    phase: phase0,
    math: phase0.math[0],
    vietnamese: phase0.vietnamese[0]
  };

  const cardHtml = sandbox.weekCard(week1);

  // Compact parent launchers for Math & Vietnamese
  assert.match(cardHtml, /data-parent-launcher="math-w1"/);
  assert.match(cardHtml, /data-parent-launcher="vietnamese-w1"/);
  assert.match(cardHtml, /Phụ huynh xem trước bài học Toán/);
  assert.match(cardHtml, /Phụ huynh xem trước bài học Tiếng Việt/);

  // Deleted duplicate detailed plans / accordions are gone
  assert.doesNotMatch(cardHtml, /parent-all-detail-block/);
  assert.doesNotMatch(cardHtml, /parent-lesson-detail-viewer/);
  assert.doesNotMatch(cardHtml, /Xem 6 bài học chi tiết/);

  // 6 links per subject identifying day and title
  for (const day of ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"]) {
    assert.match(cardHtml, new RegExp(`<span class="parent-launcher-day">${day}</span>`));
  }
  assert.match(cardHtml, /href="#math\?week=w1&(?:amp;)?day=Th%E1%BB%A9%204&(?:amp;)?preview=parent"/);
  assert.match(cardHtml, /href="#vietnamese\?week=w1&(?:amp;)?day=Th%E1%BB%A9%204&(?:amp;)?preview=parent"/);

  // Canonical preview reuse for both subjects
  for (const [subj, previewQuery] of [["math", "week=w1&day=Th%E1%BB%A9%204&preview=parent"], ["vietnamese", "week=w1&day=Th%E1%BB%A9%204&preview=parent"]]) {
    const params = new URLSearchParams(previewQuery);
    sandbox.renderSubject(subj, params);
    const previewHtml = sandbox.app.innerHTML;

    assert.match(previewHtml, /Tuần 1 · Thứ 4 · 25 phút/);
    assert.match(previewHtml, /Phụ huynh đang xem trước/);
    assert.match(previewHtml, /Quay lại lộ trình/);
    assert.match(previewHtml, /Khởi động (&amp;|&) Khám phá/);
    assert.match(previewHtml, /Thực hành cốt lõi/);
    assert.match(previewHtml, /<b>Gợi ý<\/b>/);

    // Parent preview displays hints without interactive reveal button
    assert.doesNotMatch(previewHtml, /data-reveal-hint/, `Parent preview for ${subj} must not include hint reveal button`);

    // Strictly suppress child controls
    assert.doesNotMatch(previewHtml, /<input\b/i, `Parent ${subj} preview must not include <input>`);
    assert.doesNotMatch(previewHtml, /<textarea\b/i, `Parent ${subj} preview must not include <textarea>`);
    assert.doesNotMatch(previewHtml, /<select\b/i, `Parent ${subj} preview must not include <select>`);
    assert.doesNotMatch(previewHtml, /lesson-timer-panel/, `Parent ${subj} preview must not include timer panel`);
    assert.doesNotMatch(previewHtml, /data-timer-action/, `Parent ${subj} preview must not include timer controls`);
    assert.doesNotMatch(previewHtml, /data-review-lesson-ai/, `Parent ${subj} preview must not include AI review button`);
    assert.doesNotMatch(previewHtml, /data-voice-for/, `Parent ${subj} preview must not include voice mic button`);
    assert.doesNotMatch(previewHtml, /contenteditable/i, `Parent ${subj} preview must not include editable elements`);
  }

  // Parent notes control remains accessible outside the launcher
  assert.match(cardHtml, /<div class="detail-block week-note-block"/);
  assert.match(cardHtml, /<textarea id="note_w1"/);
  assert.match(cardHtml, /data-save-note="w1"/);
});

test("Progressive hint disclosure for Bách normal study mode vs parent preview mode", async () => {
  const appSource = await readFile(new URL("../app.js", import.meta.url), "utf8");
  const cleanAppSource = appSource.replace(/export\s+/g, "");

  const sandbox = {
    ...coreBindings,
    window: {},
    curriculum: null,
    app: { innerHTML: "" },
    state: {
      db: { progress: {}, lessonTimers: {}, lessonResponses: {}, adaptive: {}, notes: {} },
      openWeek: "w1",
      lessonHints: {}
    },
    renderDriveBar: () => "",
    adaptiveNextStep: () => "",
    lessonDifficulty: () => ({ level: 3, label: "Vừa sức", note: "Bám sát tiến độ" }),
    getLessonDefaultSeconds,
    computeCurrentTimerState,
    formatTimerSeconds
  };
  vm.runInNewContext(curriculumSource, sandbox);
  sandbox.curriculum = sandbox.window.BACH_CURRICULUM;

  bindViewsToSandbox(sandbox);

  const phase0 = sandbox.curriculum.phases[0];
  const mathWeek1 = phase0.math[0];
  const wednesday = mathWeek1.dailyPlan.find(d => d.day === "Thứ 4");
  assert.ok(wednesday && wednesday.hint, "Wednesday math hint must exist");

  const hintKey = "w1-math-3";
  const rawHint = wednesday.hint;
  const parsedSteps = sandbox.parseHintSteps(rawHint);
  assert.equal(parsedSteps.length, 3, "Wednesday math hint must have 3 steps");

  // Step 1: Normal study mode initially (0 hints revealed)
  sandbox.state.lessonHints = {};
  const initialHtml = sandbox.renderProgressiveHints(rawHint, hintKey, false);

  assert.match(initialHtml, /data-hints-container/);
  assert.match(initialHtml, /data-revealed="0"/);
  assert.match(initialHtml, /<b>Gợi ý<\/b>/);
  // Do NOT show any hint text initially
  assert.doesNotMatch(initialHtml, /Vì a là chữ số/);
  assert.doesNotMatch(initialHtml, /Xét hai trường hợp/);
  assert.doesNotMatch(initialHtml, /So sánh từng số/);
  // Shows one clear button for hint 1
  assert.match(initialHtml, /data-reveal-hint="w1-math-3"/);
  assert.match(initialHtml, /data-hint-index="1"/);
  assert.match(initialHtml, /💡 Xem gợi ý 1/);
  assert.doesNotMatch(initialHtml, /data-hint-index="2"/);
  assert.doesNotMatch(initialHtml, /data-hint-index="3"/);

  // Step 2: Reveal hint 1
  sandbox.state.lessonHints[hintKey] = 1;
  const hint1Html = sandbox.renderProgressiveHints(rawHint, hintKey, false);

  assert.match(hint1Html, /data-revealed="1"/);
  // Reveals only hint 1
  assert.match(hint1Html, /Vì a là chữ số và a = 2 × b nên chữ số hàng trăm a phải là số chẵn/);
  // Must NOT repeat "Gợi ý 1:" inside the numbered list
  assert.doesNotMatch(hint1Html, /<li>\s*Gợi ý 1:/i);
  // Later hints NOT revealed early
  assert.doesNotMatch(hint1Html, /Xét hai trường hợp có thể của a/);
  assert.doesNotMatch(hint1Html, /So sánh từng số vừa tìm được/);
  // Offers button for hint 2
  assert.match(hint1Html, /data-reveal-hint="w1-math-3"/);
  assert.match(hint1Html, /data-hint-index="2"/);
  assert.match(hint1Html, /💡 Xem gợi ý 2/);
  assert.doesNotMatch(hint1Html, /data-hint-index="3"/);

  // Step 3: Reveal hint 2
  sandbox.state.lessonHints[hintKey] = 2;
  const hint2Html = sandbox.renderProgressiveHints(rawHint, hintKey, false);

  assert.match(hint2Html, /data-revealed="2"/);
  assert.match(hint2Html, /Vì a là chữ số/);
  assert.match(hint2Html, /Xét hai trường hợp có thể của a/);
  assert.doesNotMatch(hint2Html, /<li>\s*Gợi ý 2:/i);
  // Hint 3 NOT revealed early
  assert.doesNotMatch(hint2Html, /So sánh từng số vừa tìm được/);
  // Offers button for hint 3
  assert.match(hint2Html, /data-reveal-hint="w1-math-3"/);
  assert.match(hint2Html, /data-hint-index="3"/);
  assert.match(hint2Html, /💡 Xem gợi ý 3/);

  // Step 4: Reveal hint 3 (all revealed)
  sandbox.state.lessonHints[hintKey] = 3;
  const hint3Html = sandbox.renderProgressiveHints(rawHint, hintKey, false);

  assert.match(hint3Html, /data-revealed="3"/);
  assert.match(hint3Html, /Vì a là chữ số/);
  assert.match(hint3Html, /Xét hai trường hợp/);
  assert.match(hint3Html, /So sánh từng số/);
  assert.doesNotMatch(hint3Html, /<li>\s*Gợi ý 3:/i);
  // No more hint buttons
  assert.doesNotMatch(hint3Html, /data-reveal-hint/);

  // Step 5: Parent preview mode: shows all hints directly, no buttons
  const parentPreviewHtml = sandbox.renderProgressiveHints(rawHint, hintKey, true);
  assert.match(parentPreviewHtml, /Vì a là chữ số/);
  assert.match(parentPreviewHtml, /Xét hai trường hợp/);
  assert.match(parentPreviewHtml, /So sánh từng số/);
  assert.doesNotMatch(parentPreviewHtml, /<button\b/i);
  assert.doesNotMatch(parentPreviewHtml, /data-reveal-hint/);

  // Step 6: Verify handler wiring in app.js
  assert.match(appSource, /const revealHintBtn = e\.target\.closest\("\[data-reveal-hint\]"\);/);
  assert.match(appSource, /state\.lessonHints\[hintKey\] = nextIndex;/);
  assert.match(appSource, /renderProgressiveHints\(/);

  // Step 7: Regression assertion: sandboxed render uses real escapeHtml and renderInstructionSteps instead of undefined
  assert.equal(typeof sandbox.escapeHtml, "function", "sandbox must have escapeHtml from coreBindings");
  assert.equal(typeof sandbox.renderInstructionSteps, "function", "sandbox must have renderInstructionSteps from coreBindings");
  assert.equal(sandbox.escapeHtml, core.escapeHtml);
  assert.equal(sandbox.renderInstructionSteps, core.renderInstructionSteps);
  const mathStudyHtml = sandbox.renderDailyPlan(mathWeek1, "math", true, "w1", "P1");
  assert.match(mathStudyHtml, /class="lesson-instruction-list"/, "sandboxed renderDailyPlan must format lists with renderInstructionSteps");
  assert.doesNotMatch(mathStudyHtml, /undefined/, "sandboxed renderDailyPlan must not produce undefined bindings");
  assert.doesNotMatch(initialHtml, /undefined/, "initialHtml must not produce undefined bindings");
  assert.doesNotMatch(parentPreviewHtml, /undefined/, "parentPreviewHtml must not produce undefined bindings");
});

test("Math lesson response area stacks vertically with full-width textarea and 44px+ touch target on narrow screens and iPad portrait", async () => {
  const stylesSource = await readFile(new URL("../styles.css", import.meta.url), "utf8");
  assert.match(stylesSource, /@media\s*\([^)]*max-width:\s*834px[^)]*\)/);
  assert.match(stylesSource, /\.lesson-response-explanation\s*\{[^}]*display:\s*flex;[^}]*flex-direction:\s*column;/);
  assert.match(stylesSource, /\.lesson-response-explanation\s+textarea\s*\{[^}]*width:\s*100%;[^}]*box-sizing:\s*border-box;/);
  assert.match(stylesSource, /\.lesson-response-explanation\s+\.voice-button\s*\{[^}]*min-height:\s*44px;/);
  assert.match(stylesSource, /\.lesson-response-explanation\s+\.voice-button\s*\{[^}]*white-space:\s*normal;/);
  assert.match(stylesSource, /\.lesson-response-explanation\s+\.voice-button\s*\{[^}]*width:\s*100%;/);
  assert.match(stylesSource, /\.lesson-response-explanation\s*\{\s*display:\s*flex;\s*gap:\s*8px;\s*align-items:\s*flex-end;/);
});

test("regression: sandboxed render in VM uses real escapeHtml and renderInstructionSteps instead of undefined", () => {
  const sandbox = {
    ...coreBindings,
    window: {}
  };
  assert.equal(typeof sandbox.escapeHtml, "function");
  assert.equal(typeof sandbox.renderInstructionSteps, "function");
  assert.equal(sandbox.escapeHtml, core.escapeHtml);
  assert.equal(sandbox.renderInstructionSteps, core.renderInstructionSteps);

  const rendered = vm.runInNewContext(
    `
    ({
      escaped: escapeHtml("<bách> & 'toán'"),
      steps: renderInstructionSteps("Bước 1: Khởi động\\nBước 2: Luyện tập")
    })
    `,
    sandbox
  );
  assert.equal(rendered.escaped, "&lt;bách&gt; &amp; &#39;toán&#39;");
  assert.equal(
    rendered.steps,
    '<ol class="lesson-instruction-list"><li>Khởi động</li><li>Luyện tập</li></ol>'
  );
  assert.doesNotMatch(rendered.escaped, /undefined/);
  assert.doesNotMatch(rendered.steps, /undefined/);
});

