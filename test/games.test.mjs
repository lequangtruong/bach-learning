import test from "node:test";
import assert from "node:assert/strict";
import { generateSpeedMathProblem, SpeedMathSession } from "../js/speed-math.js";
import { BarModelStudioState, BAR_MODEL_CHALLENGES, BAR_MODEL_LEVELS } from "../js/bar-model-studio.js";
import { SpotTheBugSession, BUG_CASES, BUG_TOPICS } from "../js/spot-the-bug.js";
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






