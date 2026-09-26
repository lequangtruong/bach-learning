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
import { LogicGridSession, CELL_STATE } from "../js/logic-grid.js";

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

test("pedagogy-fixes: Bar Model strictly rejects superfluous diff or total labels when problem lacks them", () => {
  // Challenge 16: Một bài Tổng - Tỉ không có hiệu (ví dụ challenge-16)
  const ch16 = BAR_MODEL_CHALLENGES[15];
  const studio16 = new BarModelStudioState(15);
  studio16.setParts("bar1", ch16.target.bar1Parts);
  studio16.setParts("bar2", ch16.target.bar2Parts);
  if (ch16.target.hasBar3) studio16.setParts("bar3", ch16.target.bar3Parts);
  studio16.totalLabel = ch16.target.totalValue;

  // Khi chưa thêm nhãn hiệu thừa -> Giải đúng
  assert.equal(studio16.checkSolution().isSolved, true);

  // Người học nhập nhãn hiệu thừa hoặc bật đoạn chênh lệch thừa -> BẮT BUỘC TỪ CHỐI
  studio16.diffLabel = "+999";
  assert.equal(studio16.checkSolution().isSolved, false, "Must reject superfluous diffLabel when problem has no diff");

  studio16.diffLabel = "";
  studio16.toggleDiff(true); // Bật khối thừa extraDiff
  assert.equal(studio16.checkSolution().isSolved, false, "Must reject extraDiff block when problem has no diff");

  // Challenge 31: Bài Hiệu - Tỉ KHÔNG CÓ TỔNG
  const studio31 = new BarModelStudioState(30);
  studio31.setParts("bar1", 2);
  studio31.setParts("bar2", 1);
  studio31.diffLabel = "18";
  assert.equal(studio31.checkSolution().isSolved, true);

  // Người học nhập nhãn tổng thừa -> BẮT BUỘC TỪ CHỐI
  studio31.totalLabel = "999";
  assert.equal(studio31.checkSolution().isSolved, false, "Must reject superfluous totalLabel when problem has no total");

  // SVG không được vẽ ngoặc tổng khi bài không có tổng
  const svg31 = studio31.renderSvgMarkup();
  assert.ok(!svg31.includes("999"), "SVG must not render superfluous total bracket");
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
        const spoilerRegex = new RegExp(`=\\s*${p.answer}(?!\\d)`);
        assert.ok(
          !spoilerRegex.test(p.strategy),
          `Strategy spoiler found: "${p.strategy}" leaks answer "${p.answer}" for prompt "${p.prompt}"`
        );
      }
    }
  }
});

// --- 3. KIỂM THỬ SPOT THE BUG (PHÂN BIỆT ROOT BUG VS SAI KÉO THEO VS BƯỚC ĐÚNG ĐỘC LẬP) ---
test("pedagogy-fixes: Spot The Bug distinguishes valid step, root bug, and consequential errors", () => {
  const session = new SpotTheBugSession(0);

  // Vụ án 1: Tính 4 500 + 1 500 × 4 − 3 200 : 8
  const c1 = session.getCurrentCase();
  assert.equal(c1.id, "bug-1");

  // Bước 1: 4 500 + 1 500 = 6 000 (LỖI GỐC / BƯỚC SAI ĐẦU TIÊN)
  const fbRoot = session.selectStep(1);
  assert.equal(fbRoot.isCorrect, true);
  assert.equal(fbRoot.isRootBug, true);
  assert.equal(fbRoot.isConsequential, false);
  assert.ok(fbRoot.message.includes("BƯỚC SAI ĐẦU TIÊN"));

  // Bước 2: Nhân tiếp với 4: 6 000 × 4 = 24 000 (SAI KÉO THEO từ Bước 1)
  const fbSeq = session.selectStep(2);
  assert.equal(fbSeq.isCorrect, false);
  assert.equal(fbSeq.isRootBug, false);
  assert.equal(fbSeq.isConsequential, true);
  assert.equal(fbSeq.isValidStep, false);
  assert.ok(fbSeq.message.includes("HỆ QUẢ"));

  // Bước 3: Thực hiện phép chia: 3 200 : 8 = 400 (BƯỚC ĐÚNG ĐỘC LẬP!)
  const fbValid3 = session.selectStep(3);
  assert.equal(fbValid3.isCorrect, false);
  assert.equal(fbValid3.isValidStep, true, "Step 3 (3 200 : 8 = 400) is independent and mathematically valid");
  assert.equal(fbValid3.isConsequential, false, "Step 3 is NOT consequential because it does not use corrupted data");
  assert.ok(fbValid3.message.includes("hoàn toàn chính xác theo đề bài"));

  // Bước 4: Lấy 24 000 − 400 = 23 600 (SAI KÉO THEO từ Bước 2)
  const fbSeq4 = session.selectStep(4);
  assert.equal(fbSeq4.isCorrect, false);
  assert.equal(fbSeq4.isConsequential, true);

  // Vụ án 74: Toán tuổi tác Hiệu - Tỉ lớp 4
  session.currentIndex = 73;
  const c74 = session.getCurrentCase();
  assert.equal(c74.id, "bug-74");

  // Bước 1: Mẹ hơn con 24 + 3 = 27 tuổi (LỖI GỐC: hiệu số tuổi không đổi)
  const fb74_1 = session.selectStep(1);
  assert.equal(fb74_1.isCorrect, true);
  assert.equal(fb74_1.isRootBug, true);

  // Bước 2: Hiệu số phần: 3 − 1 = 2 (phần) (BƯỚC ĐÚNG ĐỘC LẬP)
  const fb74_2 = session.selectStep(2);
  assert.equal(fb74_2.isValidStep, true, "Step 2 ratio parts difference (3 - 1 = 2) is mathematically valid");
  assert.equal(fb74_2.isConsequential, false);

  // Bước 3: Tuổi con sau 3 năm: 27 : 2 (SAI KÉO THEO từ Bước 1)
  const fb74_3 = session.selectStep(3);
  assert.equal(fb74_3.isConsequential, true);
});

// --- 4. KIỂM THỬ LOGIC GRID (BẢO ĐẢM TÍNH DUY NHẤT 1-1, CHỐNG GIAN LẬN CHECK TẤT CẢ) ---
test("pedagogy-fixes: Logic Grid strictly enforces 1-to-1 uniqueness and rejects all-check cheat", () => {
  const session = new LogicGridSession(0);
  const c = session.getCurrentCase();
  assert.equal(c.id, "lg-01");

  // Gian lận: Tích chọn CHECK cho tất cả các ô trong bảng 3x3
  for (const r of c.rows.items) {
    for (const col of c.cols.items) {
      session.gridState[r][col] = CELL_STATE.CHECK;
    }
  }

  const resAllCheck = session.checkSolution();
  assert.equal(resAllCheck.isCorrect, false, "Must reject when all cells are checked");
  assert.equal(resAllCheck.hasMistake, true);
  assert.ok(resAllCheck.extraChecks > 0, "Extra checks must be flagged");

  // Điền đúng chuẩn mực: Đúng 1 CHECK cho mỗi hàng trùng với solution
  session.resetGrid();
  for (const [r, targetCol] of Object.entries(c.solution)) {
    session.gridState[r][targetCol] = CELL_STATE.CHECK;
    for (const otherCol of c.cols.items) {
      if (otherCol !== targetCol) {
        session.gridState[r][otherCol] = CELL_STATE.CROSS;
      }
    }
  }

  const resCorrect = session.checkSolution();
  assert.equal(resCorrect.isCorrect, true, "Must accept unique correct matching");
  assert.equal(resCorrect.extraChecks, 0);
  assert.equal(resCorrect.hasMistake, false);
});

// --- 5. AUDIT TOÀN DIỆN: 100% CÁC BƯỚC TRONG 120 VỤ ÁN SPOT THE BUG ĐƯỢC GẮN NHÃN TƯỜNG MINH ---
test("pedagogy-fixes: 100% of steps across all 120 cases in Spot The Bug are explicitly annotated without guessing", () => {
  assert.equal(BUG_CASES.length, 120, "Must have exactly 120 bug cases");

  let totalSteps = 0;
  let rootBugCount = 0;
  let validCount = 0;
  let consequentialCount = 0;

  BUG_CASES.forEach((c, cIdx) => {
    let caseBugs = 0;
    c.steps.forEach(s => {
      totalSteps++;
      assert.equal(typeof s.num, "number", `Case ${c.id} step num must be a number`);
      assert.equal(typeof s.isBug, "boolean", `Case ${c.id} step ${s.num} isBug must be boolean`);
      assert.equal(typeof s.isValid, "boolean", `Case ${c.id} step ${s.num} isValid must be boolean`);
      assert.equal(typeof s.isConsequential, "boolean", `Case ${c.id} step ${s.num} isConsequential must be boolean`);

      if (s.isBug) {
        caseBugs++;
        rootBugCount++;
        assert.equal(s.isValid, false, `Root bug in ${c.id} step ${s.num} cannot be marked valid`);
        assert.equal(s.isConsequential, false, `Root bug in ${c.id} step ${s.num} cannot be marked consequential`);
      } else if (s.isValid) {
        validCount++;
        assert.equal(s.isConsequential, false, `Valid step in ${c.id} step ${s.num} cannot be marked consequential`);
      } else if (s.isConsequential) {
        consequentialCount++;
        assert.equal(s.isValid, false, `Consequential step in ${c.id} step ${s.num} cannot be marked valid`);
      } else {
        assert.fail(`Case ${c.id} step ${s.num} is missing valid/consequential classification!`);
      }
    });

    assert.equal(caseBugs, 1, `Case ${c.id} must have exactly 1 root bug`);
  });

  assert.equal(totalSteps, 384, "Total steps across all 120 cases must be 384");
  assert.equal(rootBugCount, 120, "Exactly 120 root bug steps");
  assert.equal(validCount + consequentialCount + rootBugCount, 384, "All 384 steps must be accounted for");
});
