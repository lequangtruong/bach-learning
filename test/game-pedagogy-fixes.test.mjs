// test/game-pedagogy-fixes.test.mjs
// Kiểm thử chuyên biệt cho 3 lỗi nội dung sư phạm đã được khắc phục:
// 1. Bar Model Hiệu – Tỉ (47 bài toán không bị cộng dán khối đuôi sai tỉ lệ, có thước đo so sánh Singapore)
// 2. Speed Math (Chiến lược tư duy giàn giáo, không lộ đáp án, điểm số phản ánh năng lực độc lập)
// 3. Spot The Bug (Phân biệt rõ: Bước đúng, Căn nguyên lỗi sai đầu tiên, và Sai kéo theo do hệ quả)

import test from "node:test";
import assert from "node:assert/strict";

import { BarModelStudioState, BAR_MODEL_CHALLENGES } from "../js/bar-model-studio.js";
import { SpeedMathSession, generateSpeedMathProblem } from "../js/speed-math.js";
import { SpotTheBugSession, BUG_CASES } from "../js/spot-the-bug.js";

// --- 1. KIỂM THỬ BAR MODEL HIỆU - TỈ (SINGAPORE COMPARISON MODEL) ---
test("pedagogy-fixes: Bar Model Hiệu–Tỉ displays comparison brace and does NOT append extra tail block", () => {
  // Challenge 31: Túi 1 (2 phần) hơn Túi 2 (1 phần) là 18 kg
  const studio31 = new BarModelStudioState(30);
  assert.equal(studio31.challengeIndex, 30);
  const ch31 = BAR_MODEL_CHALLENGES[30];
  assert.equal(ch31.id, "challenge-31");

  studio31.setParts("bar1", 2);
  studio31.setParts("bar2", 1);
  studio31.diffLabel = "18";

  const sol31 = studio31.checkSolution();
  assert.equal(sol31.isSolved, true, "Challenge 31 must be solved with 2 parts, 1 part and diffLabel 18");

  const svg31 = studio31.renderSvgMarkup();
  // 1. Không được dán thêm khối màu cam ở đuôi thanh 1
  assert.ok(!svg31.includes("+18"), "Bar 1 must NOT have '+18' extra diff tail block");
  // 2. Phải có đường gióng đứt nét giữa đuôi thanh ngắn và thanh dài
  assert.ok(svg31.includes("stroke-dasharray=\"3,3\""), "Must have dashed alignment line");
  // 3. Phải có ngoặc so sánh và nhãn hiệu
  assert.ok(svg31.includes("Hiệu: 18"), "Must render Singapore comparison brace with 'Hiệu: 18'");

  // Challenge 61: HS Nam (3 phần) hơn HS Nữ (2 phần) là 12 bạn
  const studio61 = new BarModelStudioState(60);
  assert.equal(studio61.challengeIndex, 60);
  studio61.setParts("bar1", 3);
  studio61.setParts("bar2", 2);
  studio61.diffLabel = "12";

  const sol61 = studio61.checkSolution();
  assert.equal(sol61.isSolved, true, "Challenge 61 must be solved with 3 parts, 2 parts and diffLabel 12");

  const svg61 = studio61.renderSvgMarkup();
  assert.ok(!svg61.includes("+12"), "Bar 1 in Challenge 61 must NOT have '+12' tail block");
  assert.ok(svg61.includes("Hiệu: 12"), "Must render comparison brace with 'Hiệu: 12'");
});

test("pedagogy-fixes: Bar Model Tổng–Hiệu cấp 1 retains base-part comparison block", () => {
  // Challenge 1: Thùng 1 = 1 phần + 150 lít, Thùng 2 = 1 phần, Tổng = 850
  const studio1 = new BarModelStudioState(0);
  studio1.setParts("bar1", 1);
  studio1.setParts("bar2", 1);
  studio1.toggleDiff(true);
  studio1.diffLabel = "150";
  studio1.totalLabel = "850";

  const sol1 = studio1.checkSolution();
  assert.equal(sol1.isSolved, true);

  const svg1 = studio1.renderSvgMarkup();
  // Với bài Tổng - Hiệu cấp 1 thuần túy, khối đuôi dôi ra +150 được hiển thị hợp lệ
  assert.ok(svg1.includes("+150"), "Pure Sum-Diff level 1 retains +150 extra diff block");
});

// --- 2. KIỂM THỬ SPEED MATH (BẢO VỆ TÍNH ĐỘC LẬP & CHIẾN LƯỢC GIÀN GIÁO) ---
test("pedagogy-fixes: SpeedMathSession penalizes hint usage and protects independent streak scoring", () => {
  const session = new SpeedMathSession();
  session.start();

  // Câu 1: Làm độc lập không dùng gợi ý
  const cur1 = session.currentProblem;
  const res1 = session.submitAnswer(cur1.answer);
  assert.equal(res1.isCorrect, true);
  assert.equal(session.streak, 1);
  assert.equal(session.score >= 100, true);

  // Câu 2: Xem gợi ý mẹo (useHint)
  session.useHint();
  const cur2 = session.currentProblem;
  const prevStreak = session.streak;
  const prevScore = session.score;
  const res2 = session.submitAnswer(cur2.answer);
  assert.equal(res2.isCorrect, true);
  // Khi dùng gợi ý: streak không tăng, chỉ được 30 điểm trợ giúp
  assert.equal(session.streak, prevStreak, "Streak must NOT increment when hint is used");
  assert.equal(session.score, prevScore + 30, "Score must only award 30 assisted points when hint is used");

  // Câu 3: Câu tiếp theo tự làm không dùng gợi ý -> streak tiếp tục tăng bình thường (tối thiểu +1 hoặc +2 nếu siêu tốc)
  const cur3 = session.currentProblem;
  session.submitAnswer(cur3.answer);
  assert.ok(session.streak > prevStreak, "Next unassisted problem resumes streak normally");

  session.stop();
});

test("pedagogy-fixes: Speed Math strategy strings do not leak direct calculation spoilers", () => {
  // Kiểm tra 80 bài toán ngẫu nhiên across various streak levels
  for (let s = 0; s <= 12; s += 2) {
    for (let sample = 0; sample < 10; sample++) {
      const p = generateSpeedMathProblem(s);
      if (p.strategy) {
        // Không được chứa phép tính lộ liễu dẫn thẳng đến đáp án dạng "= <answer>"
        assert.ok(
          !p.strategy.includes(`= ${p.answer}`),
          `Strategy spoiler found: "${p.strategy}" leaks answer "${p.answer}" for prompt "${p.prompt}"`
        );
      }
    }
  }
});

// --- 3. KIỂM THỬ SPOT THE BUG (PHÂN BIỆT ROOT BUG VS SAI KÉO THEO) ---
test("pedagogy-fixes: Spot The Bug distinguishes valid step, root bug, and consequential errors", () => {
  const session = new SpotTheBugSession(0);

  // Vụ án 1: Bước 1 là bước sai (4500 + 1500 = 6000 trước nhân chia)
  const c1 = session.getCurrentCase();
  assert.equal(c1.id, "bug-1");

  // Chọn Bước 1 (Root Bug)
  const fbRoot = session.selectStep(1);
  assert.equal(fbRoot.isCorrect, true);
  assert.equal(fbRoot.isRootBug, true);
  assert.equal(fbRoot.isConsequential, false);
  assert.ok(fbRoot.message.includes("BƯỚC SAI ĐẦU TIÊN"));

  // Chọn Bước 2 (Sai kéo theo từ Bước 1)
  const fbSeq = session.selectStep(2);
  assert.equal(fbSeq.isCorrect, false);
  assert.equal(fbSeq.isRootBug, false);
  assert.equal(fbSeq.isConsequential, true);
  assert.equal(fbSeq.isValidStep, false);
  assert.ok(fbSeq.message.includes("HỆ QUẢ"));
  assert.ok(fbSeq.message.includes("Bước 1"));

  // Vụ án 120: Năm 1010 thuộc thế kỷ mấy?
  // Bước 1: 1010 : 100 = 10 (dư 10) (Bước ĐÚNG)
  // Bước 2: Kết luận thế kỷ X (Bước SAI ĐẦU TIÊN)
  // Bước 3: Đáp số: Thế kỷ X (Bước SAI KÉO THEO)
  session.currentIndex = 119;
  const c120 = session.getCurrentCase();
  assert.equal(c120.id, "bug-120");

  // Chọn Bước 1 (Bước Đúng trước lỗi)
  const fbValid = session.selectStep(1);
  assert.equal(fbValid.isCorrect, false);
  assert.equal(fbValid.isValidStep, true);
  assert.equal(fbValid.isConsequential, false);
  assert.ok(fbValid.message.includes("hoàn toàn chính xác theo đề bài"));

  // Chọn Bước 2 (Root Bug)
  const fbBug = session.selectStep(2);
  assert.equal(fbBug.isCorrect, true);
  assert.equal(fbBug.isRootBug, true);

  // Chọn Bước 3 (Sai kéo theo - Đáp số sai vì Bước 2)
  const fbConseq = session.selectStep(3);
  assert.equal(fbConseq.isCorrect, false);
  assert.equal(fbConseq.isConsequential, true);
  assert.ok(fbConseq.message.includes("HỆ QUẢ kéo theo do dùng số liệu sai từ Bước 2"));
});
