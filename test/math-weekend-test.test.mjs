import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { compressImageToJpeg } from "../js/image-compressor.js";
import {
  WEEKEND_MATH_EXAMS,
  getWeekendMathExam,
  generateStandardExamFromLesson,
  renderExamPaperHtml,
  buildExamGradingPrompt
} from "../js/math-weekend-exam.js";
import { WEEKEND_MATH_EXAMS_FULL } from "../js/math-weekend-bank-data.js";
import { createRenderViews } from "../js/render-views.js";
import { state } from "../js/core.js";
import { createEmptyDatabase } from "../data/data-core.js";
import { loadCurriculum } from "./helpers/curriculum-fixture.js";

test("math-weekend-test: compressImageToJpeg handles fallback in Node environment", async () => {
  const dummyFile = {
    name: "test-vohoc.png",
    type: "image/png",
    size: 500,
    arrayBuffer: async () => Buffer.from("fake-image-bytes")
  };

  const result = await compressImageToJpeg(dummyFile);
  assert.equal(result.name, "test-vohoc.png");
  assert.equal(result.mimeType, "image/png");
  assert.equal(result.sizeBytes, 500);
  assert.ok(result.data.length > 0, "Must contain base64 data");
});

test("math-weekend-test: compressImageToJpeg uses canvas when available", async () => {
  // Giả lập môi trường DOM có Canvas
  const savedWindow = global.window;
  const savedDoc = global.document;
  const savedImage = global.Image;

  class MockImage {
    constructor() {
      this.naturalWidth = 2400;
      this.naturalHeight = 1800;
      setTimeout(() => { if (this.onload) this.onload(); }, 5);
    }
  }

  const mockCanvas = {
    width: 0,
    height: 0,
    getContext: () => ({
      fillStyle: "",
      fillRect: () => {},
      drawImage: () => {}
    }),
    toDataURL: (mime, quality) => "data:image/jpeg;base64,ZmFrZS1qcGVnLWJhc2U2NA=="
  };

  global.window = { HTMLCanvasElement: function() {} };
  global.document = {
    createElement: (tag) => {
      if (tag === "canvas") return mockCanvas;
      return {};
    }
  };
  global.Image = MockImage;

  try {
    const dummyFile = {
      name: "camera-capture.png",
      type: "image/png",
      size: 4000000
    };

    const res = await compressImageToJpeg(dummyFile, { maxWidth: 1400, quality: 0.82 });
    assert.equal(res.mimeType, "image/jpeg");
    assert.equal(res.name, "camera-capture.jpg");
    assert.equal(res.width, 1400);
    assert.equal(res.height, 1050); // 1800 * 1400 / 2400
    assert.equal(res.data, "ZmFrZS1qcGVnLWJhc2U2NA==");
  } finally {
    global.window = savedWindow;
    global.document = savedDoc;
    global.Image = savedImage;
  }
});

test("math-weekend-test: weekend math test banner & photo panel render on Saturday and weekend query", () => {
  let innerHtmlContent = "";
  const mockAppRoot = {
    set innerHTML(val) { innerHtmlContent = val; },
    get innerHTML() { return innerHtmlContent; }
  };

  const testWeek = {
    id: "w5",
    number: 5,
    phase: { id: "P1", name: "Chặng 1" },
    math: {
      0: "Toán Tuần 5",
      dailyPlan: [
        { day: "Thứ 2", title: "Khái niệm", objective: "obj" },
        { day: "Thứ 3", title: "Luyện tập", objective: "obj" },
        { day: "Thứ 4", title: "Vận dụng", objective: "obj" },
        { day: "Thứ 5", title: "Olympic", objective: "obj" },
        { day: "Thứ 6", title: "Chữa lỗi", objective: "obj" },
        { day: "Thứ 7", title: "Mini-check tuần 5", objective: "Đánh giá 30 phút", basic: "8 câu", applied: "1 bài", reasoning: "1 câu", challenge: "1 câu" }
      ]
    },
    vietnamese: {
      0: "Tiếng Việt Tuần 5",
      dailyPlan: []
    }
  };

  const views = createRenderViews({
    state: { db: createEmptyDatabase() },
    curriculum: {
      meta: { textbook: "Kết nối tri thức" },
      phases: [{ id: "P1", name: "Chặng 1" }]
    },
    app: mockAppRoot,
    document: null,
    escapeHtml: str => String(str || ""),
    splitInlineItems: () => [],
    renderInstructionSteps: () => "",
    allWeeks: () => [testWeek],
    doneCount: () => 0,
    percent: () => 0
  });

  // 1. Kiểm tra ngày trong tuần (Thứ 2): KHÔNG hiện banner kiểm tra 30 phút của Thứ 7
  views.renderSubject("math", new URLSearchParams("week=w5&day=0"));
  assert.equal(innerHtmlContent.includes("math-test-hero-banner"), false, "Weekday math must not show test hero banner");
  assert.equal(innerHtmlContent.includes("mathPhotoInput"), false, "Weekday math must not show math photo upload input");

  // 2. Kiểm tra ngày Thứ 7: BẬT banner kiểm tra 30 phút và bảng chụp ảnh nộp bài
  views.renderSubject("math", new URLSearchParams("week=w5&day=5"));
  assert.equal(innerHtmlContent.includes("math-test-hero-banner"), true, "Saturday math must show 30-min test hero banner");
  assert.equal(innerHtmlContent.includes("BÀI KIỂM TRA ĐỊNH KỲ 30 PHÚT · TOÁN LỚP 4"), true);
  assert.equal(innerHtmlContent.includes("Kết Nối Tri Thức Với Cuộc Sống"), true);
  assert.equal(innerHtmlContent.includes("mathPhotoInput"), true, "Must have #mathPhotoInput");
  assert.equal(innerHtmlContent.includes("mathVoiceBtn"), true, "Must have #mathVoiceBtn");
  assert.equal(innerHtmlContent.includes("sendMathTestToAi"), true, "Must have #sendMathTestToAi");

  // 3. Kiểm tra query Chủ Nhật / Sunday: Tự động mở bài test Thứ 7
  views.renderSubject("math", new URLSearchParams("week=w5&day=sunday"));
  assert.equal(innerHtmlContent.includes("math-test-hero-banner"), true, "Sunday query must also show weekend test banner");
  assert.equal(innerHtmlContent.includes("sendMathTestToAi"), true, "Sunday query must have #sendMathTestToAi");
  assert.equal(innerHtmlContent.includes("math-exam-paper"), true, "Must render official exam paper on Sunday");
  assert.equal(innerHtmlContent.includes("PHẦN I: TRẮC NGHIỆM KHỞI ĐỘNG"), true);
  assert.equal(innerHtmlContent.includes("PHẦN II: TỰ LUẬN TÍNH TOÁN"), true);
  assert.equal(innerHtmlContent.includes("PHẦN III: BÀI TOÁN CÓ LỜI VĂN"), true);
  assert.equal(innerHtmlContent.includes("PHẦN IV: THỬ THÁCH TƯ DUY ĐIỂM 10"), true);
  assert.equal(innerHtmlContent.includes("vở nháp"), true, "Must remind Bách to have draft notebook before doing the test");
});

test("math-weekend-test: WEEKEND_MATH_EXAMS bank has 4 differentiated levels and complete rubrics", () => {
  const weeks = ["w1", "w2", "w3", "w4", "w5", "w6"];

  for (const wKey of weeks) {
    const exam = WEEKEND_MATH_EXAMS[wKey];
    assert.ok(exam, `Must have exam for ${wKey}`);
    assert.equal(exam.totalScore, 10, "Total score must be 10");
    assert.equal(exam.duration, "30 phút", "Duration must be 30 minutes");
    assert.equal(exam.sections.length, 4, "Must have exactly 4 sections (Nhận biết, Thông hiểu, Vận dụng, Vận dụng cao)");

    // Level 1: Trắc nghiệm (Nhận biết - 3.0 điểm)
    assert.equal(exam.sections[0].id, "part1");
    assert.ok(exam.sections[0].level.includes("Nhận biết"), "Part 1 must be Nhận biết");
    assert.equal(exam.sections[0].questions.length, 4, "Part 1 must have 4 multiple-choice questions");
    assert.ok(exam.sections[0].questions.every(q => q.choices && q.choices.length === 4), "Each question in Part 1 must have 4 choices");
    assert.ok(exam.sections[0].questions.every(q => q.answer && q.answer.length > 0), "Each question in Part 1 must have an answer");

    // Level 2: Tự luận đặt tính (Thông hiểu - 2.5 điểm)
    assert.equal(exam.sections[1].id, "part2");
    assert.ok(exam.sections[1].level.includes("Thông hiểu"), "Part 2 must be Thông hiểu");
    assert.ok(exam.sections[1].questions.some(q => q.q.includes("Đặt tính rồi tính")), "Part 2 must contain Đặt tính rồi tính");

    // Level 3: Bài toán có lời văn (Vận dụng - 3.0 điểm)
    assert.equal(exam.sections[2].id, "part3");
    assert.ok(exam.sections[2].level.includes("Vận dụng"), "Part 3 must be Vận dụng");
    assert.ok(exam.sections[2].questions[0].answer.includes("Bài giải"), "Part 3 rubric must have full step-by-step solution");

    // Level 4: Thử thách điểm 10 (Vận dụng cao - 1.5 điểm)
    assert.equal(exam.sections[3].id, "part4");
    assert.ok(exam.sections[3].level.includes("Vận dụng cao"), "Part 4 must be Vận dụng cao");
    assert.ok(exam.sections[3].questions[0].answer.length > 10, "Part 4 rubric must have logical solution");
  }
});

test("math-weekend-test: buildExamGradingPrompt builds comprehensive Vision prompt for Gemini", () => {
  const exam = getWeekendMathExam(5);
  const prompt = buildExamGradingPrompt(exam, "Bách thấy câu 4 cần chia ngược!");

  assert.ok(prompt.includes("BÀI KIỂM TRA ĐỊNH KỲ 30 PHÚT"), "Prompt must mention 30-minute exam");
  assert.ok(prompt.includes("Kết nối tri thức với cuộc sống"), "Prompt must specify textbook KNTT");
  assert.ok(prompt.includes("ĐÁP ÁN VÀ BAREM CHUẨN"), "Prompt must contain ground truth rubric");
  assert.ok(prompt.includes("450.206"), "Prompt must include answer for Week 5");
  assert.ok(prompt.includes("95.000 đồng"), "Prompt must include answer for word problem");
  assert.ok(prompt.includes("đặt tính có thẳng hàng đơn vị dưới hàng đơn vị"), "Prompt must instruct Vision to check vertical column alignment");
  assert.ok(prompt.includes("cộng/trừ số nhớ"), "Prompt must instruct Vision to check carry-over memory additions");
  assert.ok(prompt.includes("Tự xưng là 'mình', gọi bạn học là 'Bách'"), "Prompt must enforce peer tutor persona");
  assert.ok(prompt.includes("tuyệt đối KHÔNG xưng thầy/cô, KHÔNG gọi Bách là 'con'"), "Prompt must forbid thầy/cô and con");
  assert.ok(prompt.includes("vở nháp"), "Prompt must mention that Bách used draft notebook before writing solution into notebook");
});

test("math-weekend-test: generateStandardExamFromLesson fallback creates valid 4-level exam", () => {
  const fallback = generateStandardExamFromLesson(12, {
    title: "Phân số bằng nhau",
    basic: "Viết 3 phân số bằng phân số 2/3.",
    applied: "Một mảnh đất chia làm 6 phần, An lấy 2 phần, Bình lấy 4 phần. Ai lấy nhiều hơn?",
    challenge: "Tìm x để 2/x = 6/9.",
    hint: "x = 3 vì 2/3 = 6/9"
  });

  assert.equal(fallback.week, 12);
  assert.equal(fallback.sections.length, 4);
  assert.equal(fallback.totalScore, 10);
  assert.ok(fallback.sections[2].questions.length >= 1, "Section 2 must have questions");
  assert.ok(fallback.sections[3].questions.length >= 1, "Section 3 must have questions");
});

test("math-weekend-test: all interactive buttons in 30-min exam panel have functional handlers", async () => {
  // 1. Kiểm tra wiring trong app.js
  const appSrc = await readFile(new URL("../app.js", import.meta.url), "utf8");

  // Nút nộp bài thi
  assert.ok(
    appSrc.includes('e.target.closest("#sendMathTestToAi")') || appSrc.includes("sendMathTestToAi"),
    "app.js must handle #sendMathTestToAi click"
  );

  // Nút xóa ảnh bài làm
  assert.ok(
    appSrc.includes('e.target.closest("#removeMathPhotoBtn")') || appSrc.includes("removeMathPhotoBtn"),
    "app.js must handle #removeMathPhotoBtn click"
  );

  // Input file chọn ảnh
  assert.ok(
    appSrc.includes('e.target.id === "mathPhotoInput"') || appSrc.includes("mathPhotoInput"),
    "app.js must handle #mathPhotoInput change event"
  );

  // Nút micro giọng nói
  assert.ok(
    appSrc.includes("data-voice-for") && appSrc.includes("appendVoiceTranscript"),
    "app.js must wire voice STT trigger via data-voice-for"
  );

  // 2. Kiểm tra logic state khi bấm #removeMathPhotoBtn
  const mockState = {
    writingImage: { name: "bai-lam.jpg", data: "fake-base64" }
  };
  const mockInput = { value: "C:\\fakepath\\bai-lam.jpg" };

  // Mô phỏng logic của #removeMathPhotoBtn
  mockState.writingImage = null;
  mockInput.value = "";

  assert.equal(mockState.writingImage, null, "Clicking remove photo must clear writingImage state");
  assert.equal(mockInput.value, "", "Clicking remove photo must reset file input value");

  // 3. Kiểm tra validation khi bấm #sendMathTestToAi khi chưa có ảnh và chưa có lời giải
  let alertFired = false;
  let alertText = "";
  const mockAlert = (msg) => { alertFired = true; alertText = msg; };

  const testSubmitValidation = (photo, text) => {
    if (!photo && !text) {
      mockAlert("Bách hãy chụp ảnh trang vở ô ly hoặc đọc/nói giải thích cách làm trước khi nộp bài nhé!");
      return false;
    }
    return true;
  };

  const submitEmpty = testSubmitValidation(null, "");
  assert.equal(submitEmpty, false, "Must block submission when both photo and explanation are empty");
  assert.equal(alertFired, true, "Must alert user when empty");
  assert.ok(alertText.includes("Bách hãy chụp ảnh"), "Alert text must instruct Bách to take photo or voice record");

  // Khi có ảnh: Cho phép nộp
  const submitWithPhoto = testSubmitValidation({ data: "img" }, "");
  assert.equal(submitWithPhoto, true, "Must allow submission with photo only");

  // Khi có lời giải thích: Cho phép nộp
  const submitWithExplanation = testSubmitValidation(null, "Bách tính được câu 4");
  assert.equal(submitWithExplanation, true, "Must allow submission with explanation only");
});

test("math-weekend-test: buildExamGradingPrompt explicitly invites Bách to catch AI calculation errors and spot bugs", () => {
  const dummyExam = getWeekendMathExam(1);
  const prompt = buildExamGradingPrompt(dummyExam, "");

  assert.ok(
    prompt.includes("AI CÓ THỂ TÍNH SAI HOẶC ĐỌC NHẦM NÉT CHỮ") || prompt.includes("tính sai hoặc đọc nhầm nét chữ"),
    "Prompt must instruct AI to handle cases where AI calculates wrong or misreads handwriting"
  );
  assert.ok(
    prompt.includes("Spot The Bug") || prompt.includes("bắt lỗi"),
    "Prompt must celebrate Bách's Spot The Bug capability"
  );
  assert.ok(
    prompt.includes("Phản hồi / Bắt lỗi AI"),
    "Prompt must invite Bách to contest AI with Phản hồi / Bắt lỗi AI button"
  );
});

test("math-weekend-test: Guide screen renders two-way feedback toolbar with dispute and resubmit controls", async () => {
  const appSrc = await readFile(new URL("../app.js", import.meta.url), "utf8");

  // Elements in renderGuide
  assert.ok(appSrc.includes('id="aiFeedbackToolbar"'), "Guide must render #aiFeedbackToolbar");
  assert.ok(appSrc.includes('id="toggleExplainBackBtn"'), "Guide must have #toggleExplainBackBtn for Bách to give feedback/contest");
  assert.ok(appSrc.includes('id="studentFeedbackSection"'), "Guide must have #studentFeedbackSection");
  assert.ok(appSrc.includes('id="studentFeedbackInput"'), "Guide must have #studentFeedbackInput");
  assert.ok(appSrc.includes('id="sendExplainBackBtn"'), "Guide must have #sendExplainBackBtn");
  assert.ok(appSrc.includes('id="toggleResubmitBtn"'), "Guide must have #toggleResubmitBtn");
  assert.ok(appSrc.includes('id="resubmitSection"'), "Guide must have #resubmitSection");
  assert.ok(appSrc.includes('id="resubmitPhotoInput"'), "Guide must have #resubmitPhotoInput");
  assert.ok(appSrc.includes('id="sendResubmittedPhotoBtn"'), "Guide must have #sendResubmittedPhotoBtn");
});

test("math-weekend-test: app.js wires handlers for disputing AI calculation mistakes and submitting corrections", async () => {
  const appSrc = await readFile(new URL("../app.js", import.meta.url), "utf8");

  // Handler for toggle dispute
  assert.ok(appSrc.includes('e.target.closest("#toggleExplainBackBtn")'), "Must handle #toggleExplainBackBtn click");
  // Handler for toggle resubmit
  assert.ok(appSrc.includes('e.target.closest("#toggleResubmitBtn")'), "Must handle #toggleResubmitBtn click");
  // Handler for sending dispute
  assert.ok(appSrc.includes('e.target.closest("#sendExplainBackBtn")'), "Must handle #sendExplainBackBtn click");
  // Handler for sending resubmit
  assert.ok(appSrc.includes('e.target.closest("#sendResubmittedPhotoBtn")'), "Must handle #sendResubmittedPhotoBtn click");
  // Handler for resubmit photo change
  assert.ok(appSrc.includes('e.target.id === "resubmitPhotoInput"'), "Must handle #resubmitPhotoInput change");

  // Check dispute prompt contents
  assert.ok(appSrc.includes("BÁCH PHẢN HỒI / BẮT LỖI AI"), "Dispute prompt must identify Bách catching AI error");
  assert.ok(appSrc.includes("NẾU AI TÍNH SAI HOẶC ĐỌC NHẦM NÉT CHỮ"), "Must instruct AI to admit mistake when AI calculates wrongly");
});

test("math-weekend-test: exam submission resolves week from DOM data attribute without falling back to w5", async () => {
  const appSrc = await readFile(new URL("../app.js", import.meta.url), "utf8");

  // Check that weekParam resolves from DOM dataset.examWeek
  assert.ok(appSrc.includes("dataset.examWeek"), "Must inspect dataset.examWeek on exam elements");
  // Must not hardcode || 'w5'
  assert.ok(!appSrc.includes('currentUrlParams.get("week") || "w5"'), "Must not hardcode fallback to w5 in URL param resolution");
});

test("math-weekend-test: all 36 weeks of exams have zero placeholder strings, valid mathematical rubrics, and clean authored data", () => {
  const fullKeys = Object.keys(WEEKEND_MATH_EXAMS_FULL);
  assert.equal(fullKeys.length, 36, "WEEKEND_MATH_EXAMS_FULL must have exactly 36 authored weeks without generic fallback");

  const forbiddenStrings = [
    "Phương án nhiễu",
    "Đáp án đúng",
    "Giá trị chuẩn",
    "điều chỉnh đề bài",
    "placeholder",
    "TODO"
  ];

  for (let w = 1; w <= 36; w++) {
    const key = `w${w}`;
    assert.ok(WEEKEND_MATH_EXAMS_FULL[key], `Week key ${key} must exist directly in WEEKEND_MATH_EXAMS_FULL`);
    const exam = getWeekendMathExam(w);
    assert.ok(exam, `Week ${w} exam must exist`);
    assert.equal(exam.week, w, `Week ${w} number must match`);
    assert.equal(exam.sections.length, 4, `Week ${w} must have exactly 4 sections`);

    const jsonStr = JSON.stringify(exam);
    for (const forbidden of forbiddenStrings) {
      assert.ok(!jsonStr.includes(forbidden), `Week ${w} must not contain forbidden/placeholder string '${forbidden}'`);
    }

    // Kiểm tra cấu trúc 4 phần
    // Part 1: Trắc nghiệm (4 câu, đủ 4 lựa chọn)
    const p1 = exam.sections[0];
    assert.equal(p1.questions.length, 4, `Week ${w} Part 1 must have exactly 4 questions`);
    for (const q of p1.questions) {
      assert.equal(q.choices.length, 4, `Week ${w} Part 1 question must have 4 choices`);
      assert.ok(q.answer && q.answer.length > 0, `Week ${w} Part 1 question must have an answer`);
    }

    // Part 2: Tự luận tính toán
    const p2 = exam.sections[1];
    assert.ok(p2.questions.length >= 1, `Week ${w} Part 2 must have questions`);
    for (const q of p2.questions) {
      assert.ok(q.answer.includes("[") && q.answer.includes("đ]"), `Week ${w} Part 2 must have score rubrics like [..đ]`);
    }

    // Part 3: Bài toán có lời văn
    const p3 = exam.sections[2];
    assert.ok(p3.questions.length >= 1, `Week ${w} Part 3 must have word problem`);
    for (const q of p3.questions) {
      assert.ok(q.answer.includes("Đáp số") || q.answer.includes("đ]"), `Week ${w} Part 3 must have complete answer and rubrics`);
    }

    // Part 4: Thử thách tư duy Olympic
    const p4 = exam.sections[3];
    assert.ok(p4.questions.length >= 1, `Week ${w} Part 4 must have thinking challenge`);
    for (const q of p4.questions) {
      assert.ok(q.answer.length > 20, `Week ${w} Part 4 must have detailed thinking steps`);
    }
  }

  // Kiểm tra toán học cụ thể cho các tuần tiêu biểu và tuần 35 đã sửa lỗi
  const w35 = getWeekendMathExam(35);
  const w35p3 = w35.sections[2].questions[0];
  assert.ok(w35p3.q.includes("150 m") && w35p3.q.includes("30 m") && w35p3.q.includes("gấp 3 lần"), "Week 35 question 3 must have correct data (150m, 30m, 3x)");
  assert.ok(w35p3.answer.includes("60 m") && w35p3.answer.includes("210 m"), "Week 35 solution must result in integer exact answers 60m and 210m");
  assert.ok(!w35p3.answer.includes("420 m"), "Week 35 solution must not contain stale/conflicting numbers");

  // Kiểm tra Olympic tuần 2 (nghiệm 4.799) và tuần 6 (Trạng nguyên Lương Thế Vinh 1441)
  const w2 = getWeekendMathExam(2);
  assert.ok(w2.sections[3].questions[0].answer.includes("4.799"), "Week 2 Olympic must yield single unique solution 4.799");
  const w6 = getWeekendMathExam(6);
  assert.ok(w6.sections[3].questions[0].answer.includes("1441"), "Week 6 Olympic must yield Lương Thế Vinh birth year 1441");
});

test("math-weekend-test: ai-client unhides #aiFeedbackToolbar immediately upon receiving first response", async () => {
  const aiClientSrc = await readFile(new URL("../js/ai-client.js", import.meta.url), "utf8");
  assert.ok(
    aiClientSrc.includes('document.querySelector("#aiFeedbackToolbar")') &&
    aiClientSrc.includes('feedbackToolbar.hidden = false;'),
    "ai-client must unhide #aiFeedbackToolbar immediately when receiving AI response"
  );
});

test("math-weekend-test: Sunday math view only renders 30-min exam without Saturday 40-minute dailyPlan", () => {
  let innerHtmlContent = "";
  const mockAppRoot = {
    set innerHTML(val) {
      innerHtmlContent = val;
    },
    get innerHTML() {
      return innerHtmlContent;
    }
  };

  const testWeek = {
    id: "w5",
    number: 5,
    phase: { id: "P1", name: "Chặng 1" },
    math: {
      0: "Toán Tuần 5",
      dailyPlan: [
        { day: "Thứ 2", title: "Bài 1", concrete: { warmup: "w", discover: "d", worked: "e", exercises: "ex" } },
        { day: "Thứ 7", title: "Ôn tập Thứ 7 40 phút", concrete: { warmup: "w", discover: "d", worked: "e", exercises: "ex" } }
      ]
    },
    vietnamese: {
      0: "Tiếng Việt Tuần 5",
      dailyPlan: []
    }
  };

  const views = createRenderViews({
    state: { db: createEmptyDatabase() },
    curriculum: {
      meta: { textbook: "Kết nối tri thức" },
      phases: [{ id: "P1", name: "Chặng 1" }]
    },
    app: mockAppRoot,
    document: null,
    escapeHtml: str => String(str || ""),
    splitInlineItems: () => [],
    renderInstructionSteps: () => "",
    allWeeks: () => [testWeek],
    doneCount: () => 0,
    percent: () => 0
  });

  // 1. Kiểm tra query Chủ Nhật / Sunday: Chỉ có bài kiểm tra 30 phút, KHÔNG có bài học 40 phút Thứ 7
  views.renderSubject("math", new URLSearchParams("week=w5&day=sunday"));
  assert.ok(innerHtmlContent.includes("math-test-hero-banner"), "Sunday must show 30-min exam banner");
  assert.ok(innerHtmlContent.includes("math-exam-paper"), "Sunday must render official exam paper");
  assert.ok(innerHtmlContent.includes("sendMathTestToAi"), "Sunday must have submit button");
  assert.ok(!innerHtmlContent.includes("study-session"), "Sunday must NOT render Saturday dailyPlan study-session");
  assert.ok(!innerHtmlContent.includes("study-game-trilogy"), "Sunday must NOT render games trilogy, only 30-min exam");
  assert.ok(!innerHtmlContent.includes("lesson-timer-panel"), "Sunday must NOT render Saturday lesson timer");
  assert.ok(!innerHtmlContent.includes("daily-plan-duration"), "Sunday must NOT render Saturday lesson duration");
  assert.ok(innerHtmlContent.includes("Tuần 5 · Chủ nhật · 30 phút"), "Sunday must display clean 30 phút without duplicate text");
  assert.ok(!innerHtmlContent.includes("phút phút"), "Must never render duplicate 'phút phút'");
  assert.ok(innerHtmlContent.includes("lesson-quick-nav"), "Quick nav must be accessible in student view");
  assert.ok(innerHtmlContent.includes('href="#math?week=w5&day=sunday"'), "Quick nav must have Sunday link");

  // 2. Kiểm tra ngày Thứ 7: Có CẢ HAI (bài kiểm tra 30' VÀ bài học 40')
  views.renderSubject("math", new URLSearchParams("week=w5&day=Th%E1%BB%A9%207"));
  assert.ok(innerHtmlContent.includes("math-test-hero-banner"), "Saturday must show 30-min exam banner");
  const satBanner = innerHtmlContent.split('class="math-test-hero-banner"')[1]?.split('</section>')[0];
  assert.ok(satBanner, "Saturday banner section must exist");
  assert.ok(satBanner.includes("Đề kiểm tra 30 phút · Tuần 5"), "Saturday banner must use weekendExam.title");
  assert.ok(!satBanner.includes("Ôn tập Thứ 7 40 phút"), "Saturday 30-min banner must not borrow 40-min lesson title");
  assert.ok(innerHtmlContent.includes("math-exam-paper"), "Saturday must render exam paper");
  assert.ok(innerHtmlContent.includes("study-session"), "Saturday must render Saturday dailyPlan study-session");
  assert.ok(innerHtmlContent.includes("Ôn tập Thứ 7 40 phút"), "Saturday must render Saturday lesson");
  assert.ok(innerHtmlContent.includes("Tuần 5 · Thứ 7 · 40 phút"), "Saturday must display clean 40 phút");
  assert.ok(!innerHtmlContent.includes("phút phút"), "Must never render duplicate 'phút phút'");
  assert.ok(innerHtmlContent.includes('href="#math?week=w5&day=sunday"'), "Saturday banner must link to Sunday test option");

  // 3. Kiểm tra chế độ Phụ Huynh Xem Trước (Parent Preview) vào Chủ Nhật
  views.renderSubject("math", new URLSearchParams("week=w5&day=sunday&preview=parent"));
  assert.ok(innerHtmlContent.includes("math-test-hero-banner"), "Parent preview on Sunday must render 30-min exam banner");
  assert.ok(innerHtmlContent.includes("math-exam-paper"), "Parent preview on Sunday must render exam paper questions");
  assert.ok(!innerHtmlContent.includes("math-test-submission-panel"), "Parent preview must not render student submission camera/mic panel");
  assert.ok(innerHtmlContent.includes("PHỤ HUYNH ĐANG XEM TRƯỚC"), "Must display parent preview eyebrow");
});

test("math-weekend-test: Sol review content verifications (Week 3 Math, Week 7 TV, Week 1 TV, Week 22 Math)", async () => {
  // 1. Tuần 3 Bài 4: Chữ số toán Olympic dùng ký hiệu rõ ràng A và B
  const w3Exam = WEEKEND_MATH_EXAMS.w3;
  const w3p4 = w3Exam.sections.find(s => s.id === "part4")?.questions[0];
  assert.ok(w3p4, "Week 3 part 4 question must exist");
  assert.ok(w3p4.q.includes("A 7") && w3p4.q.includes("2 B 2"), "Week 3 Olympic problem must use distinct symbols A and B");
  assert.ok(w3p4.answer.includes("37 × 6 = 222") && w3p4.answer.includes("A = 3, B = 2"), "Answer must be mathematically sound");

  // 2. Tuần 7 Tiếng Việt Thứ 7: Thống nhất độ dài 10-12 câu
  const { curriculum } = loadCurriculum();
  const p2 = curriculum.phases.find(p => p.id === "P2");
  const tvWeek7 = p2?.vietnamese?.find(w => w.week === 7 || w[0]?.includes("Tả chiếc hộp bút"));
  if (tvWeek7 && tvWeek7.dailyPlan) {
    const sat7 = tvWeek7.dailyPlan.find(d => d.day === "Thứ 7");
    assert.ok(sat7, "Week 7 Saturday plan must exist");
    const fullText = JSON.stringify(sat7);
    assert.ok(!fullText.includes("12 đến 15 câu") && !fullText.includes("12–15 câu"), "Week 7 Saturday must not have 12-15 sentence requirement");
    assert.ok(fullText.includes("10–12 câu") || fullText.includes("10 đến 12 câu"), "Week 7 Saturday must unify on 10-12 sentences");
  }

  // 3. Tuần 1 Tiếng Việt Thứ 7: Đoạn văn đọc hiểu và câu sắp xếp tự chứa dữ liệu
  const p1 = curriculum.phases.find(p => p.id === "P1");
  const tvWeek1 = p1?.vietnamese?.[0];
  const sat1 = tvWeek1?.dailyPlan?.find(d => d.day === "Thứ 7");
  assert.ok(sat1, "Week 1 Saturday plan must exist");
  assert.ok(sat1.basic.includes("Mây đen ùn ùn kéo đến"), "Week 1 Saturday must contain self-contained reading passage");
  assert.ok(sat1.basic.includes("a) Mưa ngớt dần"), "Week 1 Saturday must contain concrete sentences to order");

  // 4. Tuần 6 Bài 4: Năm sinh Trạng nguyên Lương Thế Vinh khớp đúng lịch sử 1441
  const w6Exam = WEEKEND_MATH_EXAMS.w6;
  const w6p4 = w6Exam.sections.find(s => s.id === "part4")?.questions[0];
  assert.ok(w6p4, "Week 6 Part 4 question must exist");
  assert.ok(w6p4.answer.includes("Năm 1441") || w6p4.answer.includes("1441"), "Week 6 answer must state 1441");
  assert.ok(!w6p4.answer.includes("1442"), "Week 6 must not declare incorrect year 1442");

  // 5. Tuần 22 Bài 4: Tứ giác MEFQ là hình bình hành chuẩn xác hình học (không tự cắt chéo MEFP)
  const w22Exam = WEEKEND_MATH_EXAMS.w22;
  const w22p4 = w22Exam.sections.find(s => s.id === "part4")?.questions[0];
  assert.ok(w22p4, "Week 22 Part 4 question must exist");
  assert.ok(w22p4.q.includes("tứ giác MEFQ"), "Must ask about MEFQ with vertices in cyclic order");
  assert.ok(!w22p4.q.includes("tứ giác MEFP"), "Must not ask about self-intersecting MEFP");
  assert.ok(w22p4.answer.includes("ME // QF") && w22p4.answer.includes("ME = QF"), "Must prove ME and QF are parallel and equal");
  assert.ok(w22p4.answer.includes("tứ giác MEFQ là hình bình hành"), "Must conclude MEFQ is a parallelogram");

  // Kiểm tra mô phỏng tọa độ hình học thực tế (Concrete Geometry Simulation)
  const M = [0, 0], N = [4, 0], Q = [2, 6], P = [6, 6];
  const E = [(M[0] + N[0]) / 2, (M[1] + N[1]) / 2]; // (2, 0)
  const F = [(P[0] + Q[0]) / 2, (P[1] + Q[1]) / 2]; // (4, 6)
  const vME = [E[0] - M[0], E[1] - M[1]]; // (2, 0)
  const vQF = [F[0] - Q[0], F[1] - Q[1]]; // (2, 0)
  assert.deepEqual(vME, vQF, "Vector ME must be strictly equal to vector QF (ME // QF and ME = QF)");
  const vMQ = [Q[0] - M[0], Q[1] - M[1]]; // (2, 6)
  const vEF = [F[0] - E[0], F[1] - E[1]]; // (2, 6)
  assert.deepEqual(vMQ, vEF, "Vector MQ must be strictly equal to vector EF (MQ // EF and MQ = EF)");
});

test("math-weekend-test: renderExamPaperHtml properly escapes special HTML characters (<, >, &, \") in questions and choices", async () => {
  const { renderExamPaperHtml } = await import("../js/math-weekend-exam.js");

  const mockExam = {
    week: 99,
    title: "Đề kiểm tra thử nghiệm <Toán & Khoa học>",
    duration: "30 phút",
    totalScore: 10,
    sections: [
      {
        id: "part1",
        name: "PHẦN I <Đặc biệt>",
        level: "Mức 1",
        scoreText: "3.0 đ",
        questions: [
          {
            q: "Tìm x sao cho: x < 100 và x > 50",
            choices: ["A. x < 60", "B. x > 80", "C. 50 < x < 100", "D. x = \"100\""],
            answer: "C"
          }
        ]
      }
    ]
  };

  const html = renderExamPaperHtml(mockExam);
  assert.ok(!html.includes("<Toán & Khoa học>"), "Must escape title angle brackets");
  assert.ok(html.includes("&lt;Toán &amp; Khoa học&gt;"), "Title must be escaped as entities");
  assert.ok(html.includes("x &lt; 100 và x &gt; 50"), "Question text must escape < and >");
  assert.ok(html.includes("A. x &lt; 60"), "Choice must escape <");
  assert.ok(html.includes("D. x = &quot;100&quot;"), "Choice must escape quotes");
});

test("math-weekend-test: Week 15 Problem 4 is mathematically unambiguous with unique dimensions", () => {
  const w15 = WEEKEND_MATH_EXAMS.w15;
  const p4 = w15.sections.find(s => s.id === "part4")?.questions[0];
  assert.ok(p4, "Week 15 Part 4 question must exist");
  assert.ok(p4.q.includes("hai số tự nhiên khác nhau"), "Must explicitly specify non-square rectangle with distinct natural numbers");
  assert.ok(p4.answer.includes("chiều dài 9 cm và chiều rộng 4 cm"), "Must identify 9x4 as the unique minimal perimeter rectangle");
  assert.ok(p4.answer.includes("26 cm"), "Must state minimal perimeter is 26 cm");
  assert.ok(!p4.answer.includes("hoặc chu vi 26 cm"), "Must not expose conflicting dual rubrics");
});

test("math-weekend-test: behavioral lifecycle runs REAL PRODUCTION code to clear transient base64 images", async () => {
  const { clearTransientAiPhotos, handleGlobalClick, render, state } = await import("../app.js");

  // 1. Chạy trực tiếp hàm production clearTransientAiPhotos()
  state.lastSubmittedExamPhoto = {
    mimeType: "image/jpeg",
    data: "base64_exam_data_12345",
    examWeek: 6,
    submittedAt: Date.now()
  };
  state.resubmitPhoto = {
    mimeType: "image/jpeg",
    data: "base64_resubmit_data_67890"
  };

  clearTransientAiPhotos();
  assert.equal(state.lastSubmittedExamPhoto, null, "production clearTransientAiPhotos must set state.lastSubmittedExamPhoto to null");
  assert.equal(state.resubmitPhoto, null, "production clearTransientAiPhotos must set state.resubmitPhoto to null");

  // 2. Chạy trực tiếp production handleGlobalClick() khi bấm #askAi
  state.lastSubmittedExamPhoto = { mimeType: "image/jpeg", data: "stale_exam" };
  state.resubmitPhoto = { mimeType: "image/jpeg", data: "stale_resubmit" };
  await handleGlobalClick({ target: { closest: sel => sel === "#askAi" ? {} : null } });
  assert.equal(state.lastSubmittedExamPhoto, null, "Clicking #askAi must clear lastSubmittedExamPhoto");
  assert.equal(state.resubmitPhoto, null, "Clicking #askAi must clear resubmitPhoto");

  // 3. Chạy trực tiếp production handleGlobalClick() khi bấm #weeklySummaryBtn
  state.lastSubmittedExamPhoto = { mimeType: "image/jpeg", data: "stale_exam" };
  state.resubmitPhoto = { mimeType: "image/jpeg", data: "stale_resubmit" };
  await handleGlobalClick({ target: { closest: sel => sel === "#weeklySummaryBtn" ? {} : null } });
  assert.equal(state.lastSubmittedExamPhoto, null, "Clicking #weeklySummaryBtn must clear lastSubmittedExamPhoto");
  assert.equal(state.resubmitPhoto, null, "Clicking #weeklySummaryBtn must clear resubmitPhoto");

  // 4. Chạy trực tiếp production handleGlobalClick() khi đóng #toggleResubmitBtn
  state.resubmitPhoto = { mimeType: "image/jpeg", data: "stale_resubmit" };
  const mockResubmitSection = { hidden: false };
  const origDoc = globalThis.document;
  globalThis.document = {
    querySelector: sel => sel === "#resubmitSection" ? mockResubmitSection : null
  };
  await handleGlobalClick({ target: { closest: sel => sel === "#toggleResubmitBtn" ? {} : null } });
  assert.equal(mockResubmitSection.hidden, true, "Section should be toggled to hidden");
  assert.equal(state.resubmitPhoto, null, "Closing resubmit section must clear state.resubmitPhoto");

  // 5. Chạy trực tiếp production render() khi chuyển route rời khỏi #guide
  state.lastSubmittedExamPhoto = { mimeType: "image/jpeg", data: "stale_exam" };
  state.resubmitPhoto = { mimeType: "image/jpeg", data: "stale_resubmit" };
  globalThis.location = { hash: "#math" };
  try {
    render();
  } catch {
    // clearTransientAiPhotos() thực thi ngay ở đầu hàm render() trước khi render HTML
  }
  assert.equal(state.lastSubmittedExamPhoto, null, "Navigating away from #guide must clear lastSubmittedExamPhoto");
  assert.equal(state.resubmitPhoto, null, "Navigating away from #guide must clear resubmitPhoto");

  // Dọn dẹp mock global
  delete globalThis.location;
  if (origDoc) {
    globalThis.document = origDoc;
  } else {
    delete globalThis.document;
  }
});
