import test from "node:test";
import assert from "node:assert/strict";
import { compressImageToJpeg } from "../js/image-compressor.js";
import {
  WEEKEND_MATH_EXAMS,
  getWeekendMathExam,
  generateStandardExamFromLesson,
  renderExamPaperHtml,
  buildExamGradingPrompt
} from "../js/math-weekend-exam.js";
import { createRenderViews } from "../js/render-views.js";
import { state } from "../js/core.js";
import { createEmptyDatabase } from "../data/data-core.js";

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
  assert.equal(innerHtmlContent.includes("PHẦN II: TỰ LUẬN TÍNH TOÁN & ĐẶT TÍNH"), true);
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
  assert.ok(fallback.sections[2].questions[0].q.includes("Một mảnh đất chia làm 6 phần"));
  assert.ok(fallback.sections[3].questions[0].answer.includes("x = 3"));
});

