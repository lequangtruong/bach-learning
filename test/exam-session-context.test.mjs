import test from "node:test";
import assert from "node:assert/strict";
import {
  buildExamRubricMarkdown,
  buildExamGradingPrompt,
  buildExamDisputePrompt,
  buildExamResubmitPrompt
} from "../js/math-weekend-exam.js";
import { WEEKEND_MATH_EXAMS_FULL } from "../js/math-weekend-bank-data.js";

test("exam-session-context: buildExamRubricMarkdown includes all sections, questions, and scoring criteria", () => {
  const exam = WEEKEND_MATH_EXAMS_FULL.w8;
  const markdown = buildExamRubricMarkdown(exam);

  assert.ok(markdown.includes("PHẦN I: TRẮC NGHIỆM KHỞI ĐỘNG"), "Must include Section 1");
  assert.ok(markdown.includes("PHẦN II: TỰ LUẬN TÍNH TOÁN & CHIA HẾT"), "Must include Section 2");
  assert.ok(markdown.includes("PHẦN III: BÀI TOÁN CÓ LỜI VĂN"), "Must include Section 3");
  assert.ok(markdown.includes("PHẦN IV: THỬ THÁCH TƯ DUY ĐIỂM 10"), "Must include Section 4");
  assert.ok(markdown.includes("ĐÁP ÁN VÀ BAREM CHUẨN"), "Must include rubric answer headers");
  assert.ok(markdown.includes("48 chiếc bút màu"), "Must include Problem 3 text");
});

test("exam-session-context: buildExamDisputePrompt retains full exam rubric and previous AI answer", () => {
  const examSession = {
    examObj: WEEKEND_MATH_EXAMS_FULL.w19,
    lastAiAnswer: "AI chấm 8/10. Câu 4: Bách chọn B là sai.",
    originalPhoto: { mimeType: "image/jpeg", data: "fake_photo_base64" }
  };

  const prompt = buildExamDisputePrompt(examSession, "Câu 4 cháu nhóm 8x5=40 là đúng tính chất kết hợp mà!");

  assert.ok(prompt.includes("BÁCH PHẢN HỒI / BẮT LỖI AI"), "Must have dispute header");
  assert.ok(prompt.includes("Câu 4 cháu nhóm 8x5=40"), "Must include student's feedback text");
  assert.ok(prompt.includes("AI chấm 8/10"), "Must include previous AI answer for context");
  assert.ok(prompt.includes("25 × 40"), "Must include full exam rubric for comparison");
  assert.ok(prompt.includes("Bách bắt lỗi mình rất chuẩn xác!"), "Must invite AI to cheerfully accept corrections");
  assert.ok(prompt.includes("không xưng thầy/cô"), "Must follow child-centered address guidelines");
});

test("exam-session-context: buildExamResubmitPrompt embeds full rubric and prior answer to prevent context loss", () => {
  const examSession = {
    examObj: WEEKEND_MATH_EXAMS_FULL.w29,
    lastAiAnswer: "AI chấm: Phần II Bài 1 Bách quy đồng sai mẫu số chung.",
    originalPhoto: { mimeType: "image/jpeg", data: "orig_photo" }
  };

  const prompt = buildExamResubmitPrompt(examSession, "Bách đã làm lại bài 1a và 1b ra vở ô ly rồi.");

  assert.ok(prompt.includes("BÁCH NỘP LẠI BÀI TOÁN ĐÃ SỬA VÀO VỞ Ô LY"), "Must have resubmit header");
  assert.ok(prompt.includes("Bách đã làm lại bài 1a và 1b"), "Must include student explanation");
  assert.ok(prompt.includes("Phần II Bài 1 Bách quy đồng sai"), "Must include prior feedback");
  assert.ok(prompt.includes("3/7 + 4/5 = 15/35 + 28/35 = 43/35"), "Must include ground truth rubric answer");
  assert.ok(prompt.includes("CẤU TRÚC NHẬN XÉT TỪNG CÂU"), "Must demand structured feedback");
});

test("exam-session-context: buildExamGradingPrompt enforces 5-point evaluation structure and markdown score table", () => {
  const exam = WEEKEND_MATH_EXAMS_FULL.w33;
  const prompt = buildExamGradingPrompt(exam, "Bách đã nháp cẩn thận");

  assert.ok(prompt.includes("Tên bài/câu"), "Must include item name instruction");
  assert.ok(prompt.includes("AI đọc được gì"), "Must include transcription instruction");
  assert.ok(prompt.includes("Nhận xét bước làm"), "Must include evaluation instruction");
  assert.ok(prompt.includes("Gợi ý sửa"), "Must include progressive hint instruction");
  assert.ok(prompt.includes("Điểm số của câu đó"), "Must include score instruction");
  assert.ok(prompt.includes("TUYỆT ĐỐI KHÔNG TỰ Ý KẾT LUẬN BÁCH SAI HOẶC TRỪ ĐIỂM"), "Must not penalize blurry photos");
  assert.ok(prompt.includes("BẢNG TỔNG HỢP ĐIỂM SỐ"), "Must mandate summary score table");
});
