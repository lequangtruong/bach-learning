import test from "node:test";
import assert from "node:assert/strict";
import { generateSpeedMathProblem, SpeedMathSession } from "../js/speed-math.js";
import { BarModelStudioState, BAR_MODEL_CHALLENGES, BAR_MODEL_LEVELS } from "../js/bar-model-studio.js";
import { SpotTheBugSession, BUG_CASES, BUG_TOPICS } from "../js/spot-the-bug.js";
import { 
  BalanceScaleSession, 
  BALANCE_SCALE_CHALLENGES, 
  BALANCE_SCALE_LEVELS,
  DualScaleSession,
  DUAL_SCALE_CHALLENGES,
  DetectiveScaleSession,
  DETECTIVE_PUZZLES
} from "../js/balance-scale.js";
import { Make24Session, MAKE_24_BANK, evaluateArithmeticTokens } from "../js/make-24.js";
import { renderGamesHub, renderBalanceScaleView, renderMake24View } from "../js/render-games.js";
import { createEmptyDatabase, validateDatabasePayload } from "../data/data-core.js";

test("games: generateSpeedMathProblem produces valid problems across levels", () => {
  let hasMul = false;
  let hasDiv = false;
  let hasBracket = false;

  // Test Level 1 (Streak 0-2)
  for (let i = 0; i < 25; i++) {
    const p1 = generateSpeedMathProblem(0);
    assert.equal(typeof p1.prompt, "string");
    assert.equal(typeof p1.answer, "number");
    assert.equal(Number.isInteger(p1.answer), true);
    assert.ok(p1.answer > 0, "Level 1 answer must be positive");
    assert.equal(p1.level, 1);
    if (p1.prompt.includes("×")) hasMul = true;
    if (p1.prompt.includes(":")) hasDiv = true;
    if (p1.prompt.includes("(")) hasBracket = true;
  }

  // Test Level 2 (Streak 3-5)
  for (let i = 0; i < 25; i++) {
    const p2 = generateSpeedMathProblem(4);
    assert.equal(typeof p2.prompt, "string");
    assert.equal(typeof p2.answer, "number");
    assert.equal(Number.isInteger(p2.answer), true);
    assert.ok(p2.answer > 0, "Level 2 answer must be positive");
    assert.equal(p2.level, 2);
    if (p2.prompt.includes("×")) hasMul = true;
    if (p2.prompt.includes(":")) hasDiv = true;
    if (p2.prompt.includes("(")) hasBracket = true;
  }

  // Test Level 3 (Streak 6-9)
  for (let i = 0; i < 25; i++) {
    const p3 = generateSpeedMathProblem(8);
    assert.equal(typeof p3.prompt, "string");
    assert.equal(typeof p3.answer, "number");
    assert.equal(Number.isInteger(p3.answer), true);
    assert.ok(p3.answer > 0, "Level 3 answer must be positive");
    assert.equal(p3.level, 3);
    if (p3.prompt.includes("×")) hasMul = true;
    if (p3.prompt.includes(":")) hasDiv = true;
    if (p3.prompt.includes("(")) hasBracket = true;
  }

  // Test Level 4 (Streak 10+)
  for (let i = 0; i < 25; i++) {
    const p4 = generateSpeedMathProblem(12);
    assert.equal(typeof p4.prompt, "string");
    assert.equal(typeof p4.answer, "number");
    assert.equal(Number.isInteger(p4.answer), true);
    assert.ok(p4.answer > 0, "Level 4 answer must be positive");
    assert.equal(p4.level, 4);
    if (p4.prompt.includes("×")) hasMul = true;
    if (p4.prompt.includes(":")) hasDiv = true;
    if (p4.prompt.includes("(")) hasBracket = true;
  }

  // Must have generated problems with mul, div, and brackets
  assert.equal(hasMul, true, "Should generate multiplication problems");
  assert.equal(hasDiv, true, "Should generate division problems");
  assert.equal(hasBracket, true, "Should generate problems with brackets");
});

test("games: SpeedMathSession manages 90s score, combo multiplier and answers correctly", () => {
  let finished = false;
  const session = new SpeedMathSession({
    onEnd: () => { finished = true; }
  });

  session.start();
  assert.equal(session.isRunning, true);
  assert.equal(session.score, 0);
  assert.equal(session.streak, 0);

  // Submit correct answer
  const cur1 = session.currentProblem;
  const res1 = session.submitAnswer(cur1.answer);
  assert.equal(res1.isCorrect, true);
  assert.equal(session.score, 100);
  assert.equal(session.streak, 1);
  assert.equal(session.correctCount, 1);

  // Submit wrong answer
  const cur2 = session.currentProblem;
  const res2 = session.submitAnswer(cur2.answer + 9999);
  assert.equal(res2.isCorrect, false);
  assert.equal(session.streak, 0); // streak reset
  assert.equal(session.wrongCount, 1);
  assert.equal(session.score, 100); // score not decreased

  session.stop();
  assert.equal(session.isRunning, false);
  assert.equal(finished, true);
});

test("games: BarModelStudioState enforces parts bounds and validates solutions", () => {
  const studio = new BarModelStudioState(0);
  assert.ok(BAR_MODEL_CHALLENGES.length >= 120, "Should have at least 120 bar model challenges");

  // Parts bounds check (min 1, max 8)
  studio.setParts("bar1", 0);
  assert.equal(studio.bar1.parts, 1);
  studio.setParts("bar1", 10);
  assert.equal(studio.bar1.parts, 8);
  studio.setParts("bar1", 2);
  assert.equal(studio.bar1.parts, 2);

  // Challenge 1 solution verification: Thùng 1 = 1 part + diff 150, Thùng 2 = 1 part, total = 850
  studio.loadChallenge(0);
  studio.setParts("bar1", 1);
  studio.setParts("bar2", 1);
  studio.toggleDiff(true);
  studio.diffLabel = "150";
  studio.totalLabel = "850";
  const sol1 = studio.checkSolution();
  assert.equal(sol1.isSolved, true);

  // Wrong diff label
  studio.diffLabel = "99";
  const solWrong = studio.checkSolution();
  assert.equal(solWrong.isSolved, false);

  // Challenge 16 (Cấp độ 2: Tổng - Tỉ): Mẹ 3 phần, Bách 1 phần, Tổng 48
  studio.loadChallenge(15);
  studio.setParts("bar1", 3);
  studio.setParts("bar2", 1);
  studio.totalLabel = "48";
  const sol2 = studio.checkSolution();
  assert.equal(sol2.isSolved, true);

  // Challenge 32 (Cấp độ 3: Hiệu - Tỉ): Bố 4 phần, Bách 1 phần, Hiệu 30
  studio.loadChallenge(31);
  studio.setParts("bar1", 4);
  studio.setParts("bar2", 1);
  studio.toggleDiff(true);
  studio.diffLabel = "30";
  const sol5 = studio.checkSolution();
  assert.equal(sol5.isSolved, true);

  // Challenge 9 (Cấp độ 1: Tổng – Hiệu 3 đối tượng): Thùng 1, Thùng 2, Thùng 3
  studio.loadChallenge(8);
  assert.equal(Boolean(studio.bar3), true, "Challenge 9 should initialize bar3");
  assert.equal(studio.bar1.name, "Thùng 1");
  assert.equal(studio.bar2.name, "Thùng 2");
  assert.equal(studio.bar3.name, "Thùng 3");
  studio.setParts("bar1", 1);
  studio.setParts("bar2", 1);
  studio.setParts("bar3", 1);
  studio.toggleDiff(true);
  studio.diffLabel = "150";
  studio.totalLabel = "1350";
  const sol9 = studio.checkSolution();
  assert.equal(sol9.isSolved, true, "Challenge 9 should be solved with correct inputs");
  const svg9 = studio.renderSvgMarkup();
  assert.ok(svg9.includes("Thùng 3"), "SVG 9 must include Thùng 3 text");

  // Challenge 23 (Cấp độ 2: Tổng – Tỉ 3 đối tượng): Tổ 2 (2p), Tổ 1 (1p), Tổ 3 (3p), Tổng 180
  studio.loadChallenge(22);
  assert.equal(Boolean(studio.bar3), true, "Challenge 23 should initialize bar3");
  assert.equal(studio.bar1.name, "Tổ 2");
  assert.equal(studio.bar2.name, "Tổ 1");
  assert.equal(studio.bar3.name, "Tổ 3");
  studio.setParts("bar1", 2);
  studio.setParts("bar2", 1);
  studio.setParts("bar3", 3);
  studio.totalLabel = "180";
  const sol23 = studio.checkSolution();
  assert.equal(sol23.isSolved, true, "Challenge 23 should be solved with correct parts and total");
  const svg23 = studio.renderSvgMarkup();
  assert.ok(svg23.includes("Tổ 3"), "SVG 23 must include Tổ 3 text");

  // SVG rendering check with up to 8 parts
  studio.setParts("bar1", 8);
  studio.setParts("bar2", 5);
  const svgMarkup = studio.renderSvgMarkup();
  assert.ok(svgMarkup.includes("<svg"), "renderSvgMarkup should return SVG markup");
  assert.ok(svgMarkup.includes("bar-model-svg"));
});

test("games: SpotTheBugSession identifies bug steps across all cases", () => {
  const session = new SpotTheBugSession(0);
  assert.ok(BUG_CASES.length >= 120, "Must have at least 120 bug cases");

  // Check invariant: each of the 120 cases must have exactly 1 bug step and proper explanations
  for (const c of BUG_CASES) {
    const bugs = c.steps.filter(s => s.isBug);
    assert.equal(bugs.length, 1, `Case ${c.id} must have exactly 1 bug step`);
    assert.ok(c.bugExplanation.length > 10, `Case ${c.id} must have detailed bug explanation`);
    assert.ok(c.correctSolution.length > 5, `Case ${c.id} must have correct solution`);
  }

  // Case 1: Thứ tự phép tính - Step 1 is Bug (40 + 60 = 100)
  const c1 = session.getCurrentCase();
  assert.equal(c1.id, "bug-1");

  // Select wrong step (step 2 is not bug)
  const fbWrong = session.selectStep(2);
  assert.equal(fbWrong.isCorrect, false);

  // Select actual bug step (step 1)
  const fbCorrect = session.selectStep(1);
  assert.equal(fbCorrect.isCorrect, true);
  assert.ok(fbCorrect.message.includes("CHÍNH XÁC"));
  assert.ok(session.solvedIds.has(c1.id));

  // Cycle to next case
  const c2 = session.nextCase();
  assert.equal(c2.id, "bug-2");
});

test("games: all 120 bug cases can be solved, contain no dummy placeholders, and have authentic Grade 4 pedagogical steps", () => {
  const session = new SpotTheBugSession(0);
  assert.equal(BUG_CASES.length, 120, "Must have exactly 120 bug cases");

  for (let i = 0; i < BUG_CASES.length; i++) {
    session.currentIndex = i;
    const currentCase = session.getCurrentCase();
    assert.equal(currentCase.id, `bug-${i + 1}`);

    // Verify all steps are substantial and have no placeholder strings
    for (const step of currentCase.steps) {
      assert.ok(step.text.length >= 8, `Step text must be substantive in case ${currentCase.id}`);
      assert.ok(!step.text.toLowerCase().includes("something"), `No informal placeholders in ${currentCase.id}`);
      assert.ok(!step.text.toLowerCase().includes("tính tiếp"), `No vague steps in ${currentCase.id}`);
      assert.ok(!step.text.toLowerCase().includes("kết luận sai"), `No empty conclusions in ${currentCase.id}`);
      assert.ok(!step.text.toLowerCase().includes("đáp số sai"), `No dummy answer placeholders in ${currentCase.id}`);
    }

    const bugStep = currentCase.steps.find(s => s.isBug);
    assert.ok(bugStep, `Case ${currentCase.id} must have a bug step`);

    // Solve by selecting the bug step
    const fb = session.selectStep(bugStep.num);
    assert.equal(fb.isCorrect, true, `Selecting bug step in case ${currentCase.id} must be correct`);
    assert.ok(fb.message.includes("CHÍNH XÁC"));
    assert.ok(session.solvedIds.has(currentCase.id));

    // Verify non-bug step returns isCorrect = false
    const validStep = currentCase.steps.find(s => !s.isBug);
    assert.ok(validStep, `Case ${currentCase.id} must have at least one non-bug step`);
    const fbNonBug = session.selectStep(validStep.num);
    assert.equal(fbNonBug.isCorrect, false);
  }
});

test("games: all 120 bar challenges and 120 bug cases satisfy data integrity contracts", () => {
  assert.ok(BAR_MODEL_CHALLENGES.length >= 120, "Should have at least 120 bar challenges");
  assert.equal(BAR_MODEL_LEVELS.length, 9, "Should have 9 progressive difficulty levels");
  for (const ch of BAR_MODEL_CHALLENGES) {
    assert.ok(ch.id && typeof ch.id === "string");
    assert.ok(ch.level && typeof ch.level === "string");
    assert.ok(ch.title && typeof ch.title === "string");
    assert.ok(ch.problem && typeof ch.problem === "string");
    assert.ok(ch.hint && typeof ch.hint === "string");
    assert.ok(ch.solution && typeof ch.solution === "string");
    assert.ok(ch.target && typeof ch.target === "object");
    assert.ok(ch.target.bar1Parts >= 1 && ch.target.bar1Parts <= 8);
    assert.ok(ch.target.bar2Parts >= 1 && ch.target.bar2Parts <= 8);
    assert.ok(ch.target.bar1Name && typeof ch.target.bar1Name === "string");
    assert.ok(ch.target.bar2Name && typeof ch.target.bar2Name === "string");
    if (ch.target.hasBar3) {
      assert.ok(ch.target.bar3Parts >= 1 && ch.target.bar3Parts <= 8);
      assert.ok(ch.target.bar3Name && typeof ch.target.bar3Name === "string");
    }
  }

  assert.ok(BUG_CASES.length >= 120, "Must have at least 120 bug cases");
  assert.equal(BUG_TOPICS.length, 12, "Should have 12 topics");
  for (const b of BUG_CASES) {
    assert.ok(b.id && typeof b.id === "string");
    assert.ok(b.title && typeof b.title === "string");
    assert.ok(b.problem && typeof b.problem === "string");
    assert.ok(b.bugExplanation && typeof b.bugExplanation === "string");
    assert.ok(b.correctSolution && typeof b.correctSolution === "string");
    assert.ok(Array.isArray(b.steps) && b.steps.length >= 3);
  }
});

test("games: all 120 bar challenges can be verified and solved by target values", () => {
  const studio = new BarModelStudioState(0);
  for (let i = 0; i < BAR_MODEL_CHALLENGES.length; i++) {
    studio.loadChallenge(i);
    const t = BAR_MODEL_CHALLENGES[i].target;
    studio.setParts("bar1", t.bar1Parts);
    studio.setParts("bar2", t.bar2Parts);
    if (t.hasBar3) {
      assert.ok(studio.bar3, `Challenge ${i + 1} must initialize bar3`);
      studio.setParts("bar3", t.bar3Parts);
    }
    if (t.hasDiff) {
      studio.toggleDiff(true);
      studio.diffLabel = t.diffValue;
    }
    if (t.totalValue) {
      studio.totalLabel = t.totalValue;
    }
    const sol = studio.checkSolution();
    assert.equal(sol.isSolved, true, `Challenge ${i + 1} (${BAR_MODEL_CHALLENGES[i].title}) must be solvable`);
  }
});

test("games: renderStudyGamesTrilogy produces rich 3-game workout panel for study sessions", async () => {
  const { createRenderViews } = await import("../js/render-views.js");
  const views = createRenderViews({
    state: { db: createEmptyDatabase() },
    curriculum: {},
    escapeHtml: str => String(str),
    splitInlineItems: () => [],
    renderInstructionSteps: () => "",
    allWeeks: () => [],
    doneCount: () => 0,
    percent: () => 0
  });

  assert.equal(typeof views.renderStudyGamesTrilogy, "function");
  const html = views.renderStudyGamesTrilogy(1, 0, false);
  assert.ok(html.includes("study-games-trilogy-panel"));
  assert.ok(html.includes("Đấu tính nhẩm 90s"));
  assert.ok(html.includes("Mini Bar Model Studio"));
  assert.ok(html.includes("Thám Tử Bắt Lỗi Sai"));
  assert.ok(html.includes('href="#games/speed-math"'));
  assert.ok(html.includes('href="#games/bar-model"'));
  assert.ok(html.includes('href="#games/spot-the-bug"'));
});

test("games: database payload validates gameRecords correctly", () => {
  const db = createEmptyDatabase();
  assert.ok(db.gameRecords, "createEmptyDatabase must initialize gameRecords");
  assert.equal(validateDatabasePayload(db), true);

  // Update records with game session output
  db.gameRecords.speedMath.highScore = 1500;
  db.gameRecords.speedMath.bestStreak = 12;
  db.gameRecords.barModel.stars = 3;
  db.gameRecords.spotTheBug.solvedCount = 5;
  assert.equal(validateDatabasePayload(db), true);

  // Corrupt gameRecords type
  const corruptDb = { ...db, gameRecords: "invalid-string" };
  assert.equal(validateDatabasePayload(corruptDb), false);
});

test("parent: direct viewing of all lessons across 36 weeks and 6 days", async () => {
  const { createRenderViews } = await import("../js/render-views.js");
  const { allWeeks } = await import("../js/core.js");
  const { readFile } = await import("node:fs/promises");
  const vm = await import("node:vm");

  // Load curriculum fixture
  const factorySrc = await readFile(new URL("../data/curriculum-factory.js", import.meta.url), "utf8");
  const dataSrc = await readFile(new URL("../data/curriculum.js", import.meta.url), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(factorySrc + "\n" + dataSrc, ctx);
  const curriculum = ctx.window.BACH_CURRICULUM;
  const weeksList = allWeeks(curriculum);

  let mockAppHtml = "";
  const mockApp = {
    set innerHTML(val) { mockAppHtml = val; },
    get innerHTML() { return mockAppHtml; }
  };

  const views = createRenderViews({
    state: { db: createEmptyDatabase(), openWeek: null, tutor: {} },
    curriculum,
    escapeHtml: str => String(str),
    splitInlineItems: str => String(str).split(";"),
    renderInstructionSteps: () => "",
    allWeeks: () => weeksList,
    doneCount: () => 0,
    percent: () => 0,
    getLessonDefaultSeconds: () => 1500,
    formatTimerSeconds: s => `${s}s`,
    computeCurrentTimerState: s => s,
    lessonOrdinalFromKey: () => 1,
    app: mockApp,
    document: { querySelectorAll: () => [] }
  });

  // 1. Parent launcher contains link to view all 6 days of the week
  const week1 = weeksList[0];
  const launcherHtml = views.renderParentLessonLauncher(week1.math, "math", "w1", 1);
  assert.ok(launcherHtml.includes("day=all&amp;preview=parent") || launcherHtml.includes("day=all&preview=parent"));
  assert.ok(launcherHtml.includes("Xem tất cả 6 buổi"));

  // 2. resolveStudyDayIndex with "all" returns null
  const allIdx = views.resolveStudyDayIndex(week1.math, "all");
  assert.equal(allIdx, null);

  // 3. renderSubject with day=all renders all 6 days in parent preview
  const paramsAll = new URLSearchParams("week=w1&day=all&preview=parent");
  views.renderSubject("math", paramsAll);
  assert.ok(mockAppHtml.includes("lesson-quick-nav"));
  assert.ok(mockAppHtml.includes("PHỤ HUYNH XEM TRỰC TIẾP TẤT CẢ BÀI HỌC"));
  for (const day of ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"]) {
    assert.ok(mockAppHtml.includes(day), `All-days view must include ${day}`);
  }
  // Must render quick nav chips for 36 weeks
  for (let w = 1; w <= 36; w++) {
    assert.ok(mockAppHtml.includes(`T.${w}`), `Quick nav must include Week ${w} chip`);
  }
});

test("bar-model: setParts strictly enforces integer rounding and bounds [1, 8]", async () => {
  const { BarModelStudioState } = await import("../js/bar-model-studio.js");
  const state = new BarModelStudioState();

  // Test decimal inputs are rounded to integers
  state.setParts("bar1", 2.5);
  assert.equal(Number.isInteger(state.bar1.parts), true);
  assert.equal(state.bar1.parts, 3);

  state.setParts("bar2", 4.2);
  assert.equal(Number.isInteger(state.bar2.parts), true);
  assert.equal(state.bar2.parts, 4);

  // Test lower clamp (<= 0 clamped to 1)
  state.setParts("bar1", 0.4);
  assert.equal(state.bar1.parts, 1);

  // Test upper clamp (> 8 clamped to 8)
  state.setParts("bar2", 12.7);
  assert.equal(state.bar2.parts, 8);
});

test("speed-math: division strictly integer with remainder 0 and diverse problem bank", async () => {
  const { generateSpeedMathProblem } = await import("../js/speed-math.js");
  const uniquePrompts = new Set();

  for (let streak of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
    for (let i = 0; i < 300; i++) {
      const p = generateSpeedMathProblem(streak);
      uniquePrompts.add(p.prompt);

      assert.ok(Number.isInteger(p.answer), `Answer must be integer: ${p.prompt} = ${p.answer}`);
      assert.ok(p.answer > 0, `Answer must be positive: ${p.prompt} = ${p.answer}`);
    }
  }

  // Verify diversity of sampled problems
  assert.ok(uniquePrompts.size >= 1200, `Sample of 3300 runs must yield >= 1200 unique problems, got ${uniquePrompts.size}`);
});

test("speed-math: multi-operand expressions (3-5 numbers) and measurement quantities (tạ, tấn, yến, kg, m², dm², cm², phút, giờ, thế kỷ) generated and verified", async () => {
  const { generateSpeedMathProblem } = await import("../js/speed-math.js");

  let foundMultiOperand = 0;
  let foundMass = 0;
  let foundArea = 0;
  let foundTime = 0;
  let foundLength = 0;

  for (let streak of [0, 4, 8, 12]) {
    for (let i = 0; i < 200; i++) {
      const p = generateSpeedMathProblem(streak);
      assert.ok(Number.isInteger(p.answer), `Answer must be integer: ${p.prompt} = ${p.answer}`);
      assert.ok(p.answer > 0, `Answer must be positive: ${p.prompt} = ${p.answer}`);
      assert.ok(typeof p.strategy === "string" && p.strategy.length > 5, "Strategy must explain calculation shortcut");

      // Check for multi-operand expressions (expressions having 2 or more operators or multi-number chains)
      const opCount = (p.prompt.match(/[+−×:]/g) || []).length;
      if (opCount >= 2) {
        foundMultiOperand++;
      }

      // Check for measurement quantities
      if (/tạ|tấn|yến|kg/.test(p.prompt)) foundMass++;
      if (/m²|dm²|cm²/.test(p.prompt)) foundArea++;
      if (/thế kỷ|năm|ngày|giờ|phút|giây/.test(p.prompt)) foundTime++;
      if (/km\b|\bdm\b|\bcm\b|\bm\b/.test(p.prompt)) foundLength++;
    }
  }

  assert.ok(foundMultiOperand >= 50, `Must generate multi-operand problems (found ${foundMultiOperand})`);
  assert.ok(foundMass >= 20, `Must generate mass unit problems (found ${foundMass})`);
  assert.ok(foundArea >= 20, `Must generate area unit problems (found ${foundArea})`);
  assert.ok(foundTime >= 20, `Must generate time unit problems (found ${foundTime})`);
});

test("games: each lesson stage embeds exactly 1 matching game instead of lumping all at the bottom", async () => {
  const { createRenderViews } = await import("../js/render-views.js");
  const { allWeeks } = await import("../js/core.js");
  const { readFile } = await import("node:fs/promises");
  const vm = await import("node:vm");

  const factorySrc = await readFile(new URL("../data/curriculum-factory.js", import.meta.url), "utf8");
  const dataSrc = await readFile(new URL("../data/curriculum.js", import.meta.url), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(factorySrc + "\n" + dataSrc, ctx);
  const curriculum = ctx.window.BACH_CURRICULUM;
  const weeksList = allWeeks(curriculum);

  let mockAppHtml = "";
  const mockApp = {
    set innerHTML(val) { mockAppHtml = val; },
    get innerHTML() { return mockAppHtml; }
  };

  const views = createRenderViews({
    state: { db: createEmptyDatabase(), openWeek: null, tutor: {} },
    curriculum,
    escapeHtml: str => String(str),
    splitInlineItems: str => String(str).split(";"),
    renderInstructionSteps: () => "",
    allWeeks: () => weeksList,
    doneCount: () => 0,
    percent: () => 0,
    getLessonDefaultSeconds: () => 1500,
    formatTimerSeconds: s => `${s}s`,
    computeCurrentTimerState: s => s,
    lessonOrdinalFromKey: () => 1,
    app: mockApp,
    document: { querySelectorAll: () => [] }
  });

  const params = new URLSearchParams("week=w1&day=0");
  views.renderSubject("math", params);

  // 1. Not clumped at bottom
  assert.equal(mockAppHtml.includes('class="study-games-trilogy-panel"'), false, "Must not dump all 3 games at bottom");

  // 2. Chặng 1 contains Speed Math
  const warmupStage = mockAppHtml.split('class="stage-pill">Chặng 1</span>')[1]?.split('class="stage-pill">Chặng 2</span>')[0];
  assert.ok(warmupStage, "Must have Chặng 1 section");
  assert.ok(warmupStage.includes("Đấu tính nhẩm 90s"));
  assert.ok(warmupStage.includes('href="#games/speed-math"'));

  // 3. Chặng 2 contains Bar Model Studio
  const coreStage = mockAppHtml.split('class="stage-pill">Chặng 2</span>')[1]?.split('class="stage-pill">Chặng 3</span>')[0];
  assert.ok(coreStage, "Must have Chặng 2 section");
  assert.ok(coreStage.includes("Mini Bar Model Studio"));
  assert.ok(coreStage.includes('href="#games/bar-model"'));

  // 4. Chặng 3 contains Spot The Bug
  const challengeStage = mockAppHtml.split('class="stage-pill">Chặng 3</span>')[1];
  assert.ok(challengeStage, "Must have Chặng 3 section");
  assert.ok(challengeStage.includes("Thám Tử Bắt Lỗi Sai"));
  assert.ok(challengeStage.includes('href="#games/spot-the-bug"'));

  // 5. Must NOT show /120 or /total quota in stage mini-games
  assert.ok(!mockAppHtml.includes("/120"), "Must not display /120 quota to avoid stress for 4th grader");
  assert.ok(mockAppHtml.includes("0 vụ"));
});

test("bar-model: challenge 1 (Hai thùng dầu 850 lít) renders pure Sum-Difference UI without confusing ratio steppers", async () => {
  const { renderBarModelStudioView } = await import("../js/render-games.js");

  let appHtml = "";
  const mockAppRoot = {
    set innerHTML(val) { appHtml = val; },
    get innerHTML() { return appHtml; }
  };

  renderBarModelStudioView({
    state: {},
    appRoot: mockAppRoot,
    challengeIndex: 0
  });

  assert.ok(appHtml.includes("Dạng toán: TỔNG – HIỆU (So sánh hai đoạn thẳng)"));
  assert.ok(appHtml.includes("KHÔNG chia theo tỉ số phần"));
  assert.ok(appHtml.includes("Đoạn cơ sở"));
  assert.ok(!appHtml.includes("Số phần bằng nhau (1–8)"));
  assert.ok(appHtml.includes("id=\"diffInput\""));
  assert.ok(!appHtml.includes("/120"), "Bar model header must not show /120 quota");
  assert.ok(appHtml.includes("Bài 1"));
  assert.ok(!appHtml.includes("Hiệu = 150"), "Must not leak Hiệu = 150");
  assert.ok(!appHtml.includes("gõ số hiệu"), "Must not leak gõ số hiệu");
  assert.ok(!appHtml.includes("gõ tổng"), "Must not leak gõ tổng");
  assert.ok(!appHtml.includes("(Số bé)"), "Must not tell child which one is Số bé");
  assert.ok(appHtml.includes("placeholder=\"Số hiệu...\""), "Must use compact placeholder");
  assert.ok(appHtml.includes("placeholder=\"Tổng số...\""), "Must use compact placeholder");
});

test("games: SpotTheBug view and Hub do not show /120 or /total quota", async () => {
  const { renderSpotTheBugView, renderGamesHub } = await import("../js/render-games.js");

  let appHtml = "";
  const mockAppRoot = {
    set innerHTML(val) { appHtml = val; },
    get innerHTML() { return appHtml; }
  };

  renderSpotTheBugView({
    state: {},
    appRoot: mockAppRoot
  });

  assert.ok(!appHtml.includes("/120"), "Spot the bug view must not show /120 quota");
  assert.ok(appHtml.includes("Vụ án 1"), "Header should say Vụ án 1 instead of Vụ án 1/120");

  renderGamesHub({
    state: {},
    appRoot: mockAppRoot
  });

  assert.ok(!appHtml.includes("/120"), "Games hub must not show /120 quota");
  assert.ok(appHtml.includes("Đã phá: <strong>0</strong> vụ"));
  assert.ok(appHtml.includes("Đã giải: <strong>0</strong> thử thách"));
});

test("games: difficulty quantification: all 120 bar challenges and 120 bug cases have calibrated difficulty 1..5", () => {
  assert.equal(BAR_MODEL_CHALLENGES.length, 120, "Must have exactly 120 Bar Model challenges");
  assert.equal(BUG_CASES.length, 120, "Must have exactly 120 Spot The Bug cases");

  const barDiffCount = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  for (const ch of BAR_MODEL_CHALLENGES) {
    assert.ok(ch.difficulty >= 1 && ch.difficulty <= 5, `Bar challenge ${ch.id} difficulty must be between 1 and 5`);
    barDiffCount[ch.difficulty]++;
  }
  // Verify all 5 difficulty levels are well represented
  assert.ok(barDiffCount[1] > 0, "Must have Level 1 (Cơ bản)");
  assert.ok(barDiffCount[2] > 0, "Must have Level 2 (Vừa sức)");
  assert.ok(barDiffCount[3] > 0, "Must have Level 3 (Khá)");
  assert.ok(barDiffCount[4] > 0, "Must have Level 4 (Nâng cao)");
  assert.ok(barDiffCount[5] > 0, "Must have Level 5 (Olympic)");

  const bugDiffCount = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  for (const b of BUG_CASES) {
    assert.ok(b.difficulty >= 1 && b.difficulty <= 5, `Bug case ${b.id} difficulty must be between 1 and 5`);
    bugDiffCount[b.difficulty]++;
  }
  assert.ok(bugDiffCount[1] > 0, "Must have Level 1 (Cơ bản)");
  assert.ok(bugDiffCount[2] > 0, "Must have Level 2 (Vừa sức)");
  assert.ok(bugDiffCount[3] > 0, "Must have Level 3 (Khá)");
  assert.ok(bugDiffCount[4] > 0, "Must have Level 4 (Nâng cao)");
  assert.ok(bugDiffCount[5] > 0, "Must have Level 5 (Olympic)");
});

test("games: getDifficultyMeta returns pedagogical labels, stars, and color coding for ratings 1..5", async () => {
  const { getDifficultyMeta } = await import("../js/render-games.js");

  const meta1 = getDifficultyMeta(1);
  assert.equal(meta1.rating, 1);
  assert.equal(meta1.label, "Cơ bản");
  assert.equal(meta1.stars, "⭐");
  assert.ok(meta1.text.includes("Cơ bản"));

  const meta2 = getDifficultyMeta(2);
  assert.equal(meta2.rating, 2);
  assert.equal(meta2.label, "Vừa sức");
  assert.equal(meta2.stars, "⭐⭐");

  const meta3 = getDifficultyMeta(3);
  assert.equal(meta3.rating, 3);
  assert.equal(meta3.label, "Khá");
  assert.equal(meta3.stars, "⭐⭐⭐");

  const meta4 = getDifficultyMeta(4);
  assert.equal(meta4.rating, 4);
  assert.equal(meta4.label, "Nâng cao");
  assert.equal(meta4.stars, "⭐⭐⭐⭐");

  const meta5 = getDifficultyMeta(5);
  assert.equal(meta5.rating, 5);
  assert.equal(meta5.label, "Olympic");
  assert.equal(meta5.stars, "⭐⭐⭐⭐⭐");
});

test("games: getDailyGameChallenges enforces 2 tasks on weekdays (Mon-Fri) and 3 on Saturday with strict difficulty monotonicity", async () => {
  const { getDailyGameChallenges } = await import("../js/render-games.js");

  for (let w = 1; w <= 24; w++) {
    for (let d = 0; d < 6; d++) {
      for (const gameType of ["bar-model", "spot-the-bug"]) {
        const tasks = getDailyGameChallenges({ gameType, weekNumber: w, dayIndex: d });

        if (d < 5) {
          // Thứ 2 đến Thứ 6: ĐÚNG 2 bài
          assert.equal(tasks.length, 2, `Week ${w} Day ${d} ${gameType} must have exactly 2 tasks`);
          assert.equal(tasks[0].order, 1);
          assert.equal(tasks[1].order, 2);
          assert.equal(tasks[0].total, 2);
          assert.equal(tasks[1].total, 2);
          assert.ok(tasks[0].roleLabel.includes("Bài 1") || tasks[0].roleLabel.includes("Vụ 1"));
          assert.ok(tasks[1].roleLabel.includes("Bài 2") || tasks[1].roleLabel.includes("Vụ 2"));

          // Bài 1 dễ, Bài 2 khó: diff(bài 1) <= diff(bài 2)
          assert.ok(
            tasks[0].challenge.difficulty <= tasks[1].challenge.difficulty,
            `Week ${w} Day ${d} ${gameType}: Bài 1 (diff ${tasks[0].challenge.difficulty}) must be <= Bài 2 (diff ${tasks[1].challenge.difficulty})`
          );

          // Không trùng bài
          assert.notEqual(tasks[0].challenge.id, tasks[1].challenge.id);
        } else {
          // Thứ 7: ĐÚNG 3 bài
          assert.equal(tasks.length, 3, `Week ${w} Saturday ${gameType} must have exactly 3 tasks`);
          assert.equal(tasks[0].order, 1);
          assert.equal(tasks[1].order, 2);
          assert.equal(tasks[2].order, 3);
          assert.equal(tasks[0].total, 3);

          // diff(bài 1) <= diff(bài 2) <= diff(bài 3)
          assert.ok(
            tasks[0].challenge.difficulty <= tasks[1].challenge.difficulty,
            `Week ${w} Saturday ${gameType}: Bài 1 <= Bài 2`
          );
          assert.ok(
            tasks[1].challenge.difficulty <= tasks[2].challenge.difficulty,
            `Week ${w} Saturday ${gameType}: Bài 2 <= Bài 3`
          );

          // Không trùng bài
          assert.notEqual(tasks[0].challenge.id, tasks[1].challenge.id);
          assert.notEqual(tasks[1].challenge.id, tasks[2].challenge.id);
          assert.notEqual(tasks[0].challenge.id, tasks[2].challenge.id);
        }
      }
    }
  }
});

test("games: progression: later weeks have significantly harder problems for task 2 and 3", async () => {
  const { getDailyGameChallenges } = await import("../js/render-games.js");

  // Tuần 1: Khởi đầu dễ (Bài 1 là 1 sao, Bài 2 là 2 sao)
  const w1d0 = getDailyGameChallenges({ gameType: "bar-model", weekNumber: 1, dayIndex: 0 });
  assert.equal(w1d0[0].challenge.difficulty, 1, "Week 1 task 1 must be difficulty 1");
  assert.equal(w1d0[1].challenge.difficulty, 2, "Week 1 task 2 must be difficulty 2");

  // Tuần 24: Càng về sau bài 2 và bài 3 càng khó hơn rõ rệt (lên mức 4, 5 sao Olympic)
  const w24Sat = getDailyGameChallenges({ gameType: "bar-model", weekNumber: 24, dayIndex: 5 });
  assert.ok(w24Sat[1].challenge.difficulty >= 4, "Week 24 task 2 must be advanced (>= 4)");
  assert.equal(w24Sat[2].challenge.difficulty, 5, "Week 24 task 3 on Saturday must be Olympic (5)");

  const w24BugSat = getDailyGameChallenges({ gameType: "spot-the-bug", weekNumber: 24, dayIndex: 5 });
  assert.ok(w24BugSat[1].challenge.difficulty >= 4, "Week 24 bug task 2 must be >= 4");
  assert.equal(w24BugSat[2].challenge.difficulty, 5, "Week 24 bug task 3 on Saturday must be Olympic (5)");
});

test("games: daily UI integration: Chặng 2 and Chặng 3 render daily tasks, difficulty badges, and studio displays daily banner", async () => {
  const { renderBarModelStudioView, renderSpotTheBugView } = await import("../js/render-games.js");

  let appHtml = "";
  const mockAppRoot = {
    set innerHTML(val) { appHtml = val; },
    get innerHTML() { return appHtml; }
  };

  // 1. Studio in daily mode
  renderBarModelStudioView({
    state: {},
    appRoot: mockAppRoot,
    challengeIndex: 0,
    params: new URLSearchParams("challenge=0&week=2&day=1&step=1&total=2")
  });
  assert.ok(appHtml.includes("NHIỆM VỤ NGÀY"));
  assert.ok(appHtml.includes("Bài 1 / 2"));
  assert.ok(appHtml.includes("Bài 1 (Khởi động)"));
  assert.ok(appHtml.includes("1/5 · Cơ bản"));

  // 2. Spot The Bug in daily mode
  renderSpotTheBugView({
    state: {},
    appRoot: mockAppRoot,
    caseIndex: 0,
    params: new URLSearchParams("case=0&week=2&day=1&step=2&total=2")
  });
  assert.ok(appHtml.includes("NHIỆM VỤ THÁM TỬ"));
  assert.ok(appHtml.includes("Vụ án 2 / 2"));
  assert.ok(appHtml.includes("Vụ 2 (Thử thách)"));
});

test("games: modular file separation works cleanly and preserves all exports", async () => {
  const barChallengesMod = await import("../js/bar-model-challenges.js");
  const barStudioMod = await import("../js/bar-model-studio.js");
  assert.equal(barChallengesMod.BAR_MODEL_CHALLENGES.length, 120);
  assert.equal(barChallengesMod.BAR_MODEL_LEVELS.length, 9);
  assert.equal(barStudioMod.BAR_MODEL_CHALLENGES, barChallengesMod.BAR_MODEL_CHALLENGES);
  assert.equal(barStudioMod.BAR_MODEL_LEVELS, barChallengesMod.BAR_MODEL_LEVELS);
  assert.equal(typeof barStudioMod.BarModelStudioState, "function");
  assert.equal(typeof barStudioMod.getNextSmartChallengeIndex, "function");

  const bugCasesMod = await import("../js/spot-the-bug-cases.js");
  const bugMod = await import("../js/spot-the-bug.js");
  assert.equal(bugCasesMod.BUG_CASES.length, 120);
  assert.equal(bugCasesMod.BUG_TOPICS.length, 12);
  assert.equal(bugMod.BUG_CASES, bugCasesMod.BUG_CASES);
  assert.equal(bugMod.BUG_TOPICS, bugCasesMod.BUG_TOPICS);
  assert.equal(typeof bugMod.SpotTheBugSession, "function");

  const mathGenMod = await import("../js/speed-math-generators.js");
  const speedMathMod = await import("../js/speed-math.js");
  assert.equal(typeof mathGenMod.generateOlympicUnitProblem, "function");
  assert.equal(typeof mathGenMod.generateMultiDivComposite, "function");
  assert.equal(typeof speedMathMod.generateSpeedMathProblem, "function");
  assert.equal(typeof speedMathMod.SpeedMathSession, "function");
  assert.ok(speedMathMod.SPEED_MATH_GROUPS);
});

test("games: speed-math tracks response time, grants velocity bonus, and computes adaptive difficulty boost", async () => {
  const { SpeedMathSession } = await import("../js/speed-math.js");

  let lastEndResult = null;
  const session = new SpeedMathSession({
    onEnd: (stats) => {
      lastEndResult = stats;
    }
  });

  session.start();
  assert.equal(session.isRunning, true);
  assert.equal(session.streak, 0);

  // Giả lập câu 1: giải trong 1.5s (Thần tốc <= 2.5s)
  session.problemStartTime = Date.now() - 1500;
  const ans1 = session.currentProblem.answer;
  const r1 = session.submitAnswer(String(ans1));
  assert.equal(r1.isCorrect, true);
  assert.equal(r1.wasFast, true);
  assert.equal(session.correctCount, 1);
  assert.equal(session.fastSolveCount, 1);
  assert.equal(session.streak, 1); // Streak đầu tiên tăng 1

  // Giả lập câu 2: giải trong 1.2s (Thần tốc <= 2.5s, streak >= 1 -> tăng +2)
  session.problemStartTime = Date.now() - 1200;
  const ans2 = session.currentProblem.answer;
  const r2 = session.submitAnswer(String(ans2));
  assert.equal(r2.isCorrect, true);
  assert.equal(r2.wasFast, true);
  assert.equal(session.streak, 3); // 1 + 2 = 3

  // Thêm các câu thần tốc để đạt velocity tier
  for (let i = 0; i < 4; i++) {
    session.problemStartTime = Date.now() - 1800;
    session.submitAnswer(String(session.currentProblem.answer));
  }
  assert.equal(session.correctCount, 6);
  assert.equal(session.fastSolveCount, 6);

  session.stop();
  assert.ok(lastEndResult);
  assert.equal(lastEndResult.velocityTier, "lightning");
  assert.equal(lastEndResult.difficultyBoost, 6);
  assert.ok(lastEndResult.avgResponseTime <= 2.8);

  // Ván tiếp theo: khởi động với initialStreak từ difficultyBoost
  const nextSession = new SpeedMathSession({ initialStreak: lastEndResult.difficultyBoost });
  assert.equal(nextSession.initialStreak, 6);
  nextSession.start();
  assert.equal(nextSession.streak, 6);
  // Khi streak >= 6, các dạng bài được sinh ra thuộc nhóm nâng cao / Olympic
  assert.ok(nextSession.currentProblem);
  nextSession.stop();
});

test("games: anti-repetition prevents rapid topic and group reuse across games", async () => {
  const { pickDiverseType, SPEED_MATH_GROUPS } = await import("../js/speed-math.js");
  const types = Object.keys(SPEED_MATH_GROUPS);

  // 1. Kiểm tra pickDiverseType loại bỏ dạng đã xuất hiện trong 5 câu gần nhất
  const recentTypes = ["basic_add", "basic_sub", "basic_mul", "basic_div", "mul_11"];
  const picked = pickDiverseType(types, recentTypes, ["A", "A", "B", "B", "B"]);
  assert.ok(!recentTypes.includes(picked));

  // 2. Bar Model Studio: getNextSmartChallengeIndex nhảy sang cấp độ khác
  const { getNextSmartChallengeIndex, BAR_MODEL_CHALLENGES } = await import("../js/bar-model-studio.js");
  const currentIdx = 0; // Cấp độ 1: Tổng - Hiệu
  const currentLevel = BAR_MODEL_CHALLENGES[currentIdx].level;
  const smartIdx = getNextSmartChallengeIndex(currentIdx, [0]);
  const smartLevel = BAR_MODEL_CHALLENGES[smartIdx].level;
  assert.notEqual(smartLevel, currentLevel);

  // 3. Spot The Bug: nextInterleavedCase đổi sang chuyên đề khác
  const { SpotTheBugSession } = await import("../js/spot-the-bug.js");
  const bugSession = new SpotTheBugSession(0, { interleaved: true });
  const c1 = bugSession.getCurrentCase();
  const c2 = bugSession.nextInterleavedCase();
  assert.notEqual(c1.topic, c2.topic);
});

test("games: speed-math strategy hints do not reveal the final answer directly", async () => {
  const { generateSpeedMathProblem } = await import("../js/speed-math.js");

  // Kiểm tra 150 câu bài ngẫu nhiên từ streak 0 đến 15
  for (let s = 0; s <= 15; s++) {
    for (let sample = 0; sample < 10; sample++) {
      const p = generateSpeedMathProblem(s);
      if (p.strategy) {
        // Gợi ý không được kết thúc bằng "= <answer>" hoặc chứa "= <answer>"
        const forbiddenDirectAnswer = `= ${p.answer}`;
        assert.ok(
          !p.strategy.endsWith(forbiddenDirectAnswer),
          `Spoiler found in strategy: "${p.strategy}" contains direct answer "= ${p.answer}" for problem "${p.prompt}"`
        );
      }
    }
  }
});

test("games: comprehensive UI button interaction audit across all three games", async () => {
  const { renderSpeedMathArena, renderBarModelStudioView, renderSpotTheBugView } = await import("../js/render-games.js");
  const { BAR_MODEL_CHALLENGES } = await import("../js/bar-model-challenges.js");
  const { BUG_CASES } = await import("../js/spot-the-bug-cases.js");

  // Factory tạo mock DOM Element hỗ trợ gắn listener và trigger click/change/input
  function createMockEl(tagName = "div", props = {}) {
    const listeners = {};
    const el = {
      tagName,
      value: props.value || "",
      textContent: props.textContent || "",
      innerHTML: "",
      hidden: props.hidden !== undefined ? props.hidden : false,
      style: { display: props.display || "block" },
      dataset: props.dataset || {},
      classList: {
        classes: new Set(props.classes || []),
        add(c) { this.classes.add(c); },
        remove(c) { this.classes.delete(c); },
        contains(c) { return this.classes.has(c); }
      },
      addEventListener(evt, fn) {
        listeners[evt] = listeners[evt] || [];
        listeners[evt].push(fn);
      },
      focus() {},
      click() {
        if (listeners["click"]) {
          listeners["click"].forEach(fn => fn({ preventDefault() {}, target: el }));
        }
      },
      trigger(evt, payload = {}) {
        if (listeners[evt]) {
          listeners[evt].forEach(fn => fn({ preventDefault() {}, target: el, ...payload }));
        }
      }
    };
    return el;
  }

  // --- 1. TEST TẤT CẢ CÁC NÚT TRÒ SPEED MATH ---
  {
    const elements = {
      "#speedMathTimer": createMockEl("span", { textContent: "90s" }),
      "#speedMathTimerFill": createMockEl("div"),
      "#speedMathScore": createMockEl("span", { textContent: "0 đ" }),
      "#speedMathStreak": createMockEl("span", { textContent: "Streak: 0" }),
      "#speedMathQuitBtn": createMockEl("button"),
      "#mathProblemText": createMockEl("div", { textContent: "" }),
      "#mathFeedbackBadge": createMockEl("div", { display: "none" }),
      "#mathStrategyHint": createMockEl("div", { display: "none" }),
      "#speedMathInput": createMockEl("input", { value: "" }),
      "#speedMathSubmitBtn": createMockEl("button"),
      "#speedMathToggleHintBtn": createMockEl("button", { textContent: "💡 Cần gợi ý mẹo?" }),
      "#gameEndArea": createMockEl("div", { hidden: true }),
      "#gamePlayArea": createMockEl("div", { hidden: false })
    };

    const savedDoc = global.document;
    global.document = {
      querySelector: (sel) => elements[sel] || null,
      querySelectorAll: (sel) => []
    };

    let appHtml = "";
    const mockAppRoot = {
      set innerHTML(val) { appHtml = val; },
      get innerHTML() { return appHtml; }
    };

    renderSpeedMathArena({ state: { db: { gameRecords: {} } }, appRoot: mockAppRoot });

    // a. Test nút Gợi ý mẹo (#speedMathToggleHintBtn)
    assert.equal(elements["#mathStrategyHint"].style.display, "none");
    elements["#speedMathToggleHintBtn"].click();
    assert.equal(elements["#mathStrategyHint"].style.display, "block");
    assert.ok(elements["#mathStrategyHint"].textContent.includes("💡 Mẹo tính"));
    assert.equal(elements["#speedMathToggleHintBtn"].textContent, "🙈 Ẩn gợi ý");
    // Click lần 2 để ẩn lại
    elements["#speedMathToggleHintBtn"].click();
    assert.equal(elements["#mathStrategyHint"].style.display, "none");
    assert.equal(elements["#speedMathToggleHintBtn"].textContent, "💡 Cần gợi ý mẹo?");

    // b. Test nút Gửi đáp án (#speedMathSubmitBtn)
    const initialProb = elements["#mathProblemText"].textContent;
    assert.ok(initialProb.length > 0);
    elements["#speedMathInput"].value = "999999"; // Nhập sai để test
    elements["#speedMathSubmitBtn"].click();
    assert.equal(elements["#mathFeedbackBadge"].style.display, "inline-block");
    assert.ok(elements["#mathFeedbackBadge"].innerHTML.includes("Chưa chính xác"));

    // c. Test nút Dừng chơi (#speedMathQuitBtn)
    elements["#speedMathQuitBtn"].click();
    assert.equal(elements["#gamePlayArea"].hidden, true);
    assert.equal(elements["#gameEndArea"].hidden, false);

    // d. Test nút Chơi lại (#replayBtn) xuất hiện ở màn hình kết thúc
    const replayBtn = createMockEl("button");
    elements["#replayBtn"] = replayBtn;
    let replayed = false;
    replayBtn.addEventListener("click", () => { replayed = true; });
    replayBtn.click();
    assert.equal(replayed, true);

    global.document = savedDoc;
  }

  // --- 2. TEST TẤT CẢ CÁC NÚT TRÒ BAR MODEL STUDIO ---
  {
    let renderedIndex = null;
    let appHtml = "";
    const mockAppRoot = {
      set innerHTML(val) { appHtml = val; },
      get innerHTML() { return appHtml; }
    };

    const elements = {
      "#barChallengeSelect": createMockEl("select", { value: "0" }),
      "#prevBarBtn": createMockEl("button"),
      "#nextBarBtn": createMockEl("button"),
      "#resetBarBtn": createMockEl("button"),
      "#nextSmartBarBtn": createMockEl("button"),
      "#barSvgStage": createMockEl("div"),
      "#b1Minus": createMockEl("button"),
      "#b1Plus": createMockEl("button"),
      "#b2Minus": createMockEl("button"),
      "#b2Plus": createMockEl("button"),
      "#diffToggle": createMockEl("input"),
      "#diffInput": createMockEl("input", { value: "" }),
      "#totalInput": createMockEl("input", { value: "" }),
      "#barFeedbackBox": createMockEl("div", { hidden: true }),
      "#barHintBtn": createMockEl("button"),
      "#barCheckBtn": createMockEl("button")
    };

    const savedDoc = global.document;
    global.document = {
      querySelector: (sel) => elements[sel] || null,
      querySelectorAll: (sel) => []
    };

    renderBarModelStudioView({
      state: { db: { gameRecords: { barModel: { completedChallenges: [] } } } },
      appRoot: mockAppRoot,
      challengeIndex: 1
    });

    // a. Test nút Xem gợi ý (#barHintBtn)
    elements["#barHintBtn"].click();
    assert.equal(elements["#barFeedbackBox"].hidden, false);
    assert.ok(elements["#barFeedbackBox"].innerHTML.includes("💡 Gợi ý dựng hình"));

    // b. Test nút Đổi số phần (#b1Plus, #b1Minus, #b2Plus, #b2Minus)
    elements["#b1Plus"].click();
    elements["#b2Plus"].click();

    // c. Test nút Toggle Hiệu (#diffToggle)
    elements["#diffToggle"].trigger("change", { target: { checked: true } });

    // d. Test nút Kiểm tra mô hình (#barCheckBtn)
    elements["#barCheckBtn"].click();
    assert.equal(elements["#barFeedbackBox"].hidden, false);

    // e. Test nút Làm lại (#resetBarBtn)
    assert.ok(elements["#resetBarBtn"]);
    elements["#resetBarBtn"].click();

    // f. Test nút Bài khác dạng (#nextSmartBarBtn)
    assert.ok(elements["#nextSmartBarBtn"]);
    elements["#nextSmartBarBtn"].click();

    // g. Test nút Bài trước & Bài sau (#prevBarBtn, #nextBarBtn)
    assert.ok(elements["#prevBarBtn"]);
    assert.ok(elements["#nextBarBtn"]);
    elements["#prevBarBtn"].click();
    elements["#nextBarBtn"].click();

    global.document = savedDoc;
  }

  // --- 3. TEST TẤT CẢ CÁC NÚT TRÒ SPOT THE BUG ---
  {
    let appHtml = "";
    const mockAppRoot = {
      set innerHTML(val) { appHtml = val; },
      get innerHTML() { return appHtml; }
    };

    const stepElements = [
      createMockEl("div", { dataset: { step: 1 } }),
      createMockEl("div", { dataset: { step: 2 } }),
      createMockEl("div", { dataset: { step: 3 } })
    ];

    const elements = {
      "#bugCaseSelect": createMockEl("select", { value: "0" }),
      "#prevBugBtn": createMockEl("button"),
      "#nextBugBtn": createMockEl("button"),
      "#nextInterleavedBugBtn": createMockEl("button"),
      "#bugFeedbackArea": createMockEl("div", { hidden: true })
    };

    const savedDoc = global.document;
    global.document = {
      querySelector: (sel) => elements[sel] || null,
      querySelectorAll: (sel) => {
        if (sel === "[data-step]") return stepElements;
        return [];
      }
    };

    renderSpotTheBugView({
      state: { db: { gameRecords: { spotTheBug: { solvedCases: [] } } } },
      appRoot: mockAppRoot,
      caseIndex: 0
    });

    // a. Test nút Bài trước / Bài sau (#prevBugBtn, #nextBugBtn)
    assert.ok(elements["#prevBugBtn"]);
    assert.ok(elements["#nextBugBtn"]);
    elements["#nextBugBtn"].click();
    elements["#prevBugBtn"].click();

    // b. Test nút Đổi chuyên đề (#nextInterleavedBugBtn)
    assert.ok(elements["#nextInterleavedBugBtn"]);
    elements["#nextInterleavedBugBtn"].click();

    // c. Test các bước chọn lỗi ([data-step])
    elements["#bugCaseSelect"].trigger("change", { target: { value: "0" } });
    const activeCase = BUG_CASES[0];
    const bugStepNum = activeCase.steps.find(s => s.isBug)?.num || 1;
    const bugEl = stepElements.find(el => Number(el.dataset.step) === bugStepNum);
    bugEl.click();
    assert.equal(elements["#bugFeedbackArea"].hidden, false);
    assert.ok(elements["#bugFeedbackArea"].innerHTML.includes("Cách giải chuẩn xác"));

    global.document = savedDoc;
  }
});

test("games: BALANCE_SCALE_CHALLENGES 100 challenges satisfy data integrity and mathematical balance", () => {
  assert.equal(BALANCE_SCALE_CHALLENGES.length, 100, "Must have exactly 100 balance scale challenges");
  assert.equal(BALANCE_SCALE_LEVELS.length, 10, "Must have 10 levels");

  const sumWeights = arr => (arr || []).reduce((acc, w) => acc + w, 0);

  BALANCE_SCALE_CHALLENGES.forEach((ch, idx) => {
    assert.equal(ch.index, idx, `Challenge index mismatch for ${ch.id}`);
    assert.ok(ch.id && typeof ch.id === "string");
    assert.ok(ch.title && typeof ch.title === "string");
    assert.ok(ch.problem && typeof ch.problem === "string");
    assert.ok(ch.hint && typeof ch.hint === "string");
    assert.ok(ch.solution && typeof ch.solution === "string");
    assert.ok([1, 2, 3, 4, 5].includes(ch.difficulty), `Difficulty must be 1..5 for ${ch.id}`);
    assert.ok(Number.isInteger(ch.targetX) && ch.targetX > 0, `targetX must be positive integer for ${ch.id}`);

    // Verify mathematical equation: Left Pan weight == Right Pan weight when X = targetX
    const leftWeight = ch.left.xCount * ch.targetX + sumWeights(ch.left.weights);
    const rightWeight = ch.right.xCount * ch.targetX + sumWeights(ch.right.weights);
    assert.equal(
      leftWeight,
      rightWeight,
      `Scale must be perfectly balanced when X=${ch.targetX} for challenge ${ch.id} (${leftWeight} vs ${rightWeight})`
    );
  });
});

test("games: BalanceScaleSession handles answer validation, tilt angle and SVG rendering", () => {
  const session = new BalanceScaleSession(0);
  const ch = session.getCurrentChallenge();
  assert.equal(session.currentIndex, 0);

  // 1. Empty / non-numeric input
  const resEmpty = session.checkAnswer("");
  assert.equal(resEmpty.isCorrect, false);

  // 2. Wrong answer (too small -> left lighter, right heavier -> tilt > 0)
  const resSmall = session.checkAnswer(ch.targetX - 5);
  assert.equal(resSmall.isCorrect, false);
  assert.notEqual(resSmall.tiltAngle, 0);

  // 3. Correct answer
  const resCorrect = session.checkAnswer(ch.targetX);
  assert.equal(resCorrect.isCorrect, true);
  assert.equal(resCorrect.tiltAngle, 0);
  assert.ok(session.solvedIds.has(ch.id));

  // 4. SVG markup generation
  const svg = session.renderSvgMarkup();
  assert.ok(typeof svg === "string" && svg.includes("<svg") && svg.includes("</svg>"));
  assert.ok(svg.includes("balance-scale-svg"));

  // 5. Navigation
  session.nextChallenge();
  assert.equal(session.currentIndex, 1);
  session.prevChallenge();
  assert.equal(session.currentIndex, 0);
});

test("games: MAKE_24_BANK 120 challenges and evaluateArithmeticTokens parser", () => {
  assert.equal(MAKE_24_BANK.length, 80, "Must have exactly 80 Make 24 challenges");

  MAKE_24_BANK.forEach((item, idx) => {
    assert.equal(item.index, idx);
    assert.ok(item.id && typeof item.id === "string");
    assert.equal(item.cards.length, 4, "Must have exactly 4 cards");
    item.cards.forEach(c => assert.ok(Number.isInteger(c) && c > 0, "Cards must be positive integers"));
    assert.ok(item.sampleSolution && typeof item.sampleSolution === "string");
    assert.ok(item.hint && typeof item.hint === "string");
    assert.ok([1, 2, 3, 4, 5].includes(item.difficulty));
    if (item.target !== undefined) {
      assert.ok(Number.isInteger(item.target) && item.target > 0, `Target must be positive integer for ${item.id}`);
    }
  });

  // Test arithmetic expression parser (RPN / Shunting-Yard)
  // Standard arithmetic
  const r1 = evaluateArithmeticTokens(["(", "3", "×", "8", ")", "×", "(", "1", ":", "1", ")"]);
  assert.equal(r1.ok, true);
  assert.equal(r1.value, 24);

  // Operator precedence: 4 + 5 * 4 = 24
  const r2 = evaluateArithmeticTokens(["4", "+", "5", "×", "4"]);
  assert.equal(r2.ok, true);
  assert.equal(r2.value, 24);

  // Division by zero
  const rDivZero = evaluateArithmeticTokens(["24", ":", "0"]);
  assert.equal(rDivZero.ok, false);
  assert.ok(rDivZero.error.includes("chia cho số 0"));

  // Mismatched parentheses
  const rBadParen = evaluateArithmeticTokens(["(", "3", "×", "8"]);
  assert.equal(rBadParen.ok, false);
});

test("games: Make24Session enforces 4-card rule and tracks state", () => {
  const session = new Make24Session(0); // cards: [3, 8, 1, 1]
  assert.equal(session.currentIndex, 0);

  // Try checking solution without 4 cards
  session.pushCard(0); // 3
  session.pushOperator("×");
  session.pushCard(1); // 8
  const resIncomplete = session.checkSolution();
  assert.equal(resIncomplete.isSuccess, false);
  assert.ok(resIncomplete.message.includes("cả 4 thẻ số"));

  // Clear expression
  session.clearExpression();
  assert.equal(session.usedCardIndices.size, 0);
  assert.equal(session.tokens.length, 0);

  // Build full valid 24 expression: ( 3 × 8 ) × ( 1 : 1 )
  session.pushOperator("(");
  session.pushCard(0); // 3
  session.pushOperator("×");
  session.pushCard(1); // 8
  session.pushOperator(")");
  session.pushOperator("×");
  session.pushOperator("(");
  session.pushCard(2); // 1
  session.pushOperator(":");
  session.pushCard(3); // 1
  session.pushOperator(")");

  const resSolved = session.checkSolution();
  assert.equal(resSolved.isSuccess, true);
  assert.equal(session.isSolved, true);
  assert.ok(session.solvedIds.has(session.getCurrentChallenge().id));
});

test("games: renderGamesHub renders all 5 games with respective routes and badges", () => {
  const mockRoot = { innerHTML: "" };
  renderGamesHub({
    state: {
      db: {
        gameRecords: {
          speedMath: { highScore: 120, bestStreak: 5 },
          barModel: { stars: 3, completedChallenges: ["bar-1"] },
          spotTheBug: { stars: 2, solvedCount: 2 },
          balanceScale: { stars: 4, completedChallenges: ["scale-1"] },
          make24: { stars: 5, solvedCount: 5, completedChallenges: ["make24-1"] }
        }
      }
    },
    appRoot: mockRoot
  });

  const html = mockRoot.innerHTML;
  // Verify hero mentions all 5 games
  assert.ok(html.includes("5 thử thách toán học"));
  assert.ok(html.includes("Đấu tính nhẩm 90 giây"));
  assert.ok(html.includes("Mini Bar Model Studio"));
  assert.ok(html.includes("Thám Tử Bắt Lỗi Sai"));
  assert.ok(html.includes("Cân Bằng Bí Mật"));
  assert.ok(html.includes("Đấu Trường 24"));

  // Verify routes for all 5 games
  assert.ok(html.includes('href="#games/speed-math"'));
  assert.ok(html.includes('href="#games/bar-model"'));
  assert.ok(html.includes('href="#games/spot-the-bug"'));
  assert.ok(html.includes('href="#games/balance-scale"'));
  assert.ok(html.includes('href="#games/make-24"'));

  // Verify badges
  assert.ok(html.includes("badge-speed"));
  assert.ok(html.includes("badge-bar"));
  assert.ok(html.includes("badge-bug"));
  assert.ok(html.includes("badge-balance"));
  assert.ok(html.includes("badge-24"));
});

test("games: renderBalanceScaleView and renderMake24View UI button interaction audit", async () => {
  const createMockEl = (tag, props = {}) => ({
    tagName: tag.toUpperCase(),
    dataset: {},
    style: {},
    classList: {
      _classes: new Set(),
      add(c) { this._classes.add(c); },
      remove(c) { this._classes.delete(c); },
      toggle(c, force) { if (force !== undefined) { force ? this.add(c) : this.remove(c); } else { this._classes.has(c) ? this.remove(c) : this.add(c); } },
      contains(c) { return this._classes.has(c); }
    },
    innerHTML: "",
    value: "",
    _listeners: {},
    addEventListener(ev, fn) {
      if (!this._listeners[ev]) this._listeners[ev] = [];
      this._listeners[ev].push(fn);
    },
    click() {
      (this._listeners["click"] || []).forEach(fn => fn({ preventDefault: () => {} }));
    },
    trigger(ev, data = {}) {
      (this._listeners[ev] || []).forEach(fn => fn({ preventDefault: () => {}, ...data }));
    },
    ...props
  });

  const savedDoc = global.document;

  // 1. Audit Balance Scale UI
  {
    const elements = {
      "#scaleChallengeSelect": createMockEl("select", { value: "0" }),
      "#scaleInput": createMockEl("input", { value: "35" }),
      "#scaleSubmitBtn": createMockEl("button"),
      "#scaleToggleHintBtn": createMockEl("button"),
      "#scaleHintArea": createMockEl("div", { style: { display: "none" } }),
      "#scaleFeedbackArea": createMockEl("div", { style: { display: "none" } }),
      "#balanceSvgStage": createMockEl("div"),
      "#prevScaleBtn": createMockEl("button"),
      "#nextScaleBtn": createMockEl("button"),
      "#randomScaleBtn": createMockEl("button")
    };

    global.document = {
      querySelector: (sel) => elements[sel] || null,
      querySelectorAll: () => []
    };

    const mockRoot = createMockEl("div");
    let saved = false;
    renderBalanceScaleView({
      state: { db: { gameRecords: { balanceScale: { stars: 0, completedChallenges: [] } } } },
      appRoot: mockRoot,
      saveLocal: async () => { saved = true; },
      challengeIndex: 0,
      params: new URLSearchParams("mode=single")
    });

    // Check hint toggle
    elements["#scaleToggleHintBtn"].click();
    assert.equal(elements["#scaleHintArea"].style.display, "block");

    // Check submit
    await elements["#scaleSubmitBtn"].click();
    assert.equal(elements["#scaleFeedbackArea"].style.display, "block");
    assert.ok(elements["#scaleFeedbackArea"].innerHTML.includes("CHÍNH XÁC"));

    // Check nav buttons
    elements["#nextScaleBtn"].click();
    elements["#prevScaleBtn"].click();
    elements["#randomScaleBtn"].click();
  }

  // 2. Audit Make 24 UI
  {
    const cardElements = [
      createMockEl("button", { dataset: { cardIdx: 0 } }),
      createMockEl("button", { dataset: { cardIdx: 1 } }),
      createMockEl("button", { dataset: { cardIdx: 2 } }),
      createMockEl("button", { dataset: { cardIdx: 3 } })
    ];
    const opElements = [
      createMockEl("button", { dataset: { op: "+" } }),
      createMockEl("button", { dataset: { op: "×" } })
    ];

    const elements = {
      "#make24Select": createMockEl("select", { value: "0" }),
      "#make24ExprDisplay": createMockEl("div"),
      "#make24SubmitBtn": createMockEl("button"),
      "#make24ToggleHintBtn": createMockEl("button"),
      "#make24HintArea": createMockEl("div", { style: { display: "none" } }),
      "#make24FeedbackArea": createMockEl("div", { style: { display: "none" } }),
      '[data-action="backspace"]': createMockEl("button"),
      '[data-action="clear"]': createMockEl("button"),
      "#prev24Btn": createMockEl("button"),
      "#next24Btn": createMockEl("button"),
      "#random24Btn": createMockEl("button")
    };

    global.document = {
      querySelector: (sel) => elements[sel] || null,
      querySelectorAll: (sel) => {
        if (sel === "[data-card-idx]") return cardElements;
        if (sel === "[data-op]") return opElements;
        return [];
      }
    };

    const mockRoot = createMockEl("div");
    let saved = false;
    renderMake24View({
      state: { db: { gameRecords: { make24: { stars: 0, solvedCount: 0, completedChallenges: [] } } } },
      appRoot: mockRoot,
      saveLocal: async () => { saved = true; },
      challengeIndex: 0
    });

    // Toggle hint
    elements["#make24ToggleHintBtn"].click();
    assert.equal(elements["#make24HintArea"].style.display, "block");

    // Click card and operator
    cardElements[0].click();
    opElements[1].click(); // ×
    elements['[data-action="backspace"]'].click();
    elements['[data-action="clear"]'].click();

    // Nav
    elements["#next24Btn"].click();
    elements["#prev24Btn"].click();
    elements["#random24Btn"].click();
  }

  global.document = savedDoc;
});

test("games: DUAL_SCALE_CHALLENGES 32 challenges satisfy balance on both Scale A and Scale B", () => {
  assert.equal(DUAL_SCALE_CHALLENGES.length, 32, "Must have exactly 32 dual scale challenges");

  const sumW = arr => (arr || []).reduce((a, b) => a + b, 0);

  DUAL_SCALE_CHALLENGES.forEach((ch, idx) => {
    assert.equal(ch.index, idx, `Index mismatch for ${ch.id}`);
    assert.ok(ch.title && typeof ch.title === "string");
    assert.ok(ch.problem && typeof ch.problem === "string");
    assert.ok(ch.hint && typeof ch.hint === "string");
    assert.ok(ch.solution && typeof ch.solution === "string");
    assert.ok(Number.isInteger(ch.targetX) && ch.targetX > 0, `targetX must be positive integer for ${ch.id}`);
    assert.ok(Number.isInteger(ch.targetY) && ch.targetY > 0, `targetY must be positive integer for ${ch.id}`);

    // Verify Scale A balances with targetX, targetY
    const leftA = (ch.scaleA.left.xCount || 0) * ch.targetX + (ch.scaleA.left.yCount || 0) * ch.targetY + sumW(ch.scaleA.left.weights);
    const rightA = (ch.scaleA.right.xCount || 0) * ch.targetX + (ch.scaleA.right.yCount || 0) * ch.targetY + sumW(ch.scaleA.right.weights);
    assert.equal(leftA, rightA, `Scale A must balance for ${ch.id} (${leftA} vs ${rightA})`);

    // Verify Scale B balances with targetX, targetY
    const leftB = (ch.scaleB.left.xCount || 0) * ch.targetX + (ch.scaleB.left.yCount || 0) * ch.targetY + sumW(ch.scaleB.left.weights);
    const rightB = (ch.scaleB.right.xCount || 0) * ch.targetX + (ch.scaleB.right.yCount || 0) * ch.targetY + sumW(ch.scaleB.right.weights);
    assert.equal(leftB, rightB, `Scale B must balance for ${ch.id} (${leftB} vs ${rightB})`);

    // Verify Scale C if provided
    if (ch.scaleC && ch.scaleC.targetWeight) {
      const targetC = (ch.scaleC.left.xCount || 0) * ch.targetX + (ch.scaleC.left.yCount || 0) * ch.targetY + sumW(ch.scaleC.left.weights);
      assert.equal(targetC, ch.scaleC.targetWeight, `Scale C targetWeight mismatch for ${ch.id}`);
    }
  });
});

test("games: DualScaleSession validates dual answers and generates dual SVG markup", () => {
  const session = new DualScaleSession(0);
  const ch = session.getCurrentChallenge();
  assert.equal(session.currentIndex, 0);

  // 1. Missing input
  const resEmpty = session.checkDualAnswer("", "");
  assert.equal(resEmpty.isCorrect, false);

  // 2. Wrong answer (wrong X, correct Y)
  const resWrongX = session.checkDualAnswer(ch.targetX + 5, ch.targetY);
  assert.equal(resWrongX.isCorrect, false);

  // 3. Correct answer for both X and Y
  const resCorrect = session.checkDualAnswer(ch.targetX, ch.targetY);
  assert.equal(resCorrect.isCorrect, true);
  assert.equal(resCorrect.tiltA, 0);
  assert.equal(resCorrect.tiltB, 0);
  assert.ok(session.solvedIds.has(ch.id));

  // 4. SVG markup
  const svg = session.renderDualSvgMarkup();
  assert.ok(typeof svg === "string" && svg.includes("<svg") && svg.includes("CÂN A") && svg.includes("CÂN B"));

  // 5. Navigation
  session.nextChallenge();
  assert.equal(session.currentIndex, 1);
  session.prevChallenge();
  assert.equal(session.currentIndex, 0);
});

test("games: DETECTIVE_PUZZLES and DetectiveScaleSession logic and weighing", () => {
  assert.equal(DETECTIVE_PUZZLES.length, 24, "Must have 24 detective puzzles across 4 levels");

  DETECTIVE_PUZZLES.forEach((p, idx) => {
    assert.equal(p.index, idx);
    assert.ok(p.ballCount >= 8);
    assert.ok(p.fakeBallIndex >= 1 && p.fakeBallIndex <= p.ballCount);
    assert.ok(["lighter", "heavier"].includes(p.fakeType));
    assert.ok(p.maxWeighsAllowed >= 2);
  });

  const session = new DetectiveScaleSession(0); // 9 balls, fakeBallIndex: 5, lighter
  assert.equal(session.currentIndex, 0);

  // 1. Placing balls: (1, 2, 3) on left, (4, 5, 6) on right
  session.toggleBallOnLeft(1);
  session.toggleBallOnLeft(2);
  session.toggleBallOnLeft(3);

  session.toggleBallOnRight(4);
  session.toggleBallOnRight(5);
  session.toggleBallOnRight(6);

  assert.equal(session.leftPan.length, 3);
  assert.equal(session.rightPan.length, 3);

  // 2. Weigh: ball 5 is on the right and is lighter -> left should be heavier (tilt < 0)
  const resWeigh1 = session.weigh();
  assert.equal(resWeigh1.ok, true);
  assert.equal(resWeigh1.logEntry.outcome, "left_heavier");
  assert.equal(session.weighCount, 1);

  // 3. Clear pans and weigh next group: ball 4 vs ball 5
  session.clearPans();
  assert.equal(session.leftPan.length, 0);
  assert.equal(session.rightPan.length, 0);

  session.toggleBallOnLeft(4);
  session.toggleBallOnRight(5);

  const resWeigh2 = session.weigh();
  assert.equal(resWeigh2.ok, true);
  assert.equal(resWeigh2.logEntry.outcome, "left_heavier"); // 4 is standard (10), 5 is lighter (7) -> left heavier
  assert.equal(session.weighCount, 2);

  // 4. Submit guess: wrong guess first (e.g. ball 4)
  const resGuessWrong = session.submitGuess(4);
  assert.equal(resGuessWrong.isCorrect, false);

  // 5. Submit correct guess (ball 5)
  const resGuessCorrect = session.submitGuess(5);
  assert.equal(resGuessCorrect.isCorrect, true);
  assert.equal(resGuessCorrect.isWithinQuota, true);
  assert.equal(session.isSolved, true);

  // 6. SVG markup
  const svg = session.renderSvgMarkup();
  assert.ok(typeof svg === "string" && svg.includes("<svg") && svg.includes("circle"));
});

test("games: MAKE_24_BANK 80 challenges including fraction division Master and dynamic target puzzles", () => {
  assert.equal(MAKE_24_BANK.length, 80, "Must have exactly 80 Make 24 challenges");

  // Check legend master puzzle: [3, 3, 8, 8] at index 31
  const p32 = MAKE_24_BANK[31];
  assert.deepEqual(p32.cards, [3, 3, 8, 8]);
  const res83 = evaluateArithmeticTokens(["8", ":", "(", "3", "−", "8", ":", "3", ")"]);
  assert.equal(res83.ok, true);
  assert.ok(Math.abs(res83.value - 24) < 1e-6);

  // Check fraction puzzle: [1, 5, 5, 5] -> (5 - 1/5) * 5 = 24 at index 32
  const p33 = MAKE_24_BANK[32];
  assert.deepEqual(p33.cards, [1, 5, 5, 5]);
  const res51 = evaluateArithmeticTokens(["(", "5", "−", "1", ":", "5", ")", "×", "5"]);
  assert.equal(res51.ok, true);
  assert.ok(Math.abs(res51.value - 24) < 1e-6);

  // Check fraction puzzle: [3, 3, 7, 7] -> (3 + 3/7) * 7 = 24
  const res37 = evaluateArithmeticTokens(["(", "3", "+", "3", ":", "7", ")", "×", "7"]);
  assert.equal(res37.ok, true);
  assert.ok(Math.abs(res37.value - 24) < 1e-6);

  // Check dynamic target 36 puzzle: [4, 9, 2, 2] -> target 36 at index 40
  const p41 = MAKE_24_BANK[40];
  assert.equal(p41.target, 36);
  const session36 = new Make24Session(40);
  assert.equal(session36.getTarget(), 36);
  session36.pushCard(0); // 4
  session36.pushOperator("×");
  session36.pushCard(1); // 9
  session36.pushOperator("+");
  session36.pushOperator("(");
  session36.pushCard(2); // 2
  session36.pushOperator("−");
  session36.pushCard(3); // 2
  session36.pushOperator(")");
  const res36 = session36.checkSolution();
  assert.equal(res36.isSuccess, true);
  assert.equal(res36.result, 36);

  // Check dynamic target 100 puzzle: [3, 3, 10, 1] -> ((3*3)+1)*10 = 100 at index 79
  const p80 = MAKE_24_BANK[79];
  assert.equal(p80.target, 100);
  const session100 = new Make24Session(79);
  assert.equal(session100.getTarget(), 100);
});











