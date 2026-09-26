// test/task-master.test.mjs - Kiểm thử toàn diện Trò Chơi Bậc Thầy Kế Hoạch (Task Master) 200 Màn Chơi
import test from "node:test";
import assert from "node:assert/strict";

import { 
  TASK_MASTER_LEVELS, 
  TASK_CATEGORIES, 
  getLevelById, 
  getLevelByIndex 
} from "../js/task-master-levels.js";

import { 
  TaskMasterSession 
} from "../js/task-master.js";

import { 
  MEGAPROJECTS, 
  renderMoonBaseVisual, 
  getMegaprojectForLevel,
  getMegaprojectProgress,
  getCategoryStageStatus,
  renderEngineeringVisual,
  renderCategoryVisual
} from "../js/task-master-megaprojects.js";

import { renderTaskMasterView } from "../js/render-task-master.js";
import { renderGamesHub } from "../js/render-games.js";

// Helper tạo Mock Element gọn nhẹ cho UI Audit
function createMockEl(tag = "div", props = {}) {
  const listeners = {};
  const children = [];
  const el = {
    tagName: tag.toUpperCase(),
    style: props.style || {},
    dataset: props.dataset || {},
    classList: {
      _classes: new Set(props.className ? props.className.split(" ") : []),
      add(c) { this._classes.add(c); },
      remove(c) { this._classes.delete(c); },
      contains(c) { return this._classes.has(c); },
      toggle(c) {
        if (this._classes.has(c)) this._classes.delete(c);
        else this._classes.add(c);
      }
    },
    innerHTML: props.innerHTML || "",
    value: props.value || "",
    disabled: props.disabled || false,
    textContent: props.textContent || "",
    addEventListener(evt, fn) {
      listeners[evt] = listeners[evt] || [];
      listeners[evt].push(fn);
    },
    appendChild(child) {
      children.push(child);
      return child;
    },
    async click() {
      if (this.disabled) return;
      if (typeof this.onclick === "function") {
        await this.onclick({ target: el, preventDefault: () => {}, stopPropagation: () => {} });
      }
      const fns = [...(listeners["click"] || [])];
      for (const fn of fns) {
        await fn({ target: el, preventDefault: () => {}, stopPropagation: () => {} });
      }
    }
  };
  return el;
}

// -------------------------------------------------------------
// 1. KIỂM THỬ TÍNH TOÀN VẸN CỦA DỮ LIỆU NGÂN HÀNG (200 MÀN CHƠI)
// -------------------------------------------------------------
test("task-master: TASK_MASTER_LEVELS data integrity and complete 200 levels", () => {
  assert.equal(TASK_MASTER_LEVELS.length, 200, "Game must contain exactly 200 authored levels");

  const categoriesCount = {
    routine: 0,
    cooking: 0,
    engineering: 0,
    mission: 0,
    medical: 0,
    computing: 0,
    ecology: 0,
    architecture: 0,
    detective: 0,
    megaproject: 0
  };

  const idSet = new Set();

  for (let i = 0; i < TASK_MASTER_LEVELS.length; i++) {
    const lvl = TASK_MASTER_LEVELS[i];
    assert.ok(typeof lvl.id === "string" && lvl.id.startsWith("tm-"), `Level ${i} must have valid id tm-X`);
    assert.ok(!idSet.has(lvl.id), `Duplicate level id found: ${lvl.id}`);
    idSet.add(lvl.id);

    assert.equal(lvl.level, i + 1, `Level numbering must match index + 1 (expected ${i + 1}, got ${lvl.level})`);
    assert.ok(typeof lvl.title === "string" && lvl.title.trim().length > 0, `Level ${lvl.id} must have title`);
    assert.ok(typeof lvl.description === "string" && lvl.description.trim().length > 0, `Level ${lvl.id} must have description`);
    assert.ok(lvl.difficulty >= 1 && lvl.difficulty <= 5, `Level ${lvl.id} difficulty must be between 1 and 5`);
    assert.ok(typeof lvl.lesson === "string" && lvl.lesson.trim().length > 0, `Level ${lvl.id} must have pedagogical lesson`);
    assert.ok(TASK_CATEGORIES[lvl.category], `Level ${lvl.id} has invalid category: ${lvl.category}`);

    categoriesCount[lvl.category] = (categoriesCount[lvl.category] || 0) + 1;

    // Kiểm tra các task bắt buộc
    assert.ok(Array.isArray(lvl.tasks) && lvl.tasks.length >= 3, `Level ${lvl.id} must have at least 3 tasks`);
    const taskIdSet = new Set();

    for (const t of lvl.tasks) {
      assert.ok(typeof t.id === "string" && t.id.length > 0, `Task in ${lvl.id} missing id`);
      assert.ok(!taskIdSet.has(t.id), `Duplicate task id ${t.id} in ${lvl.id}`);
      taskIdSet.add(t.id);
      assert.ok(typeof t.text === "string" && t.text.trim().length > 0, `Task ${t.id} in ${lvl.id} missing text`);
      assert.ok(typeof t.icon === "string" && t.icon.length > 0, `Task ${t.id} in ${lvl.id} missing icon`);

      // Kiểm tra requires
      if (t.requires) {
        assert.ok(Array.isArray(t.requires), `Task ${t.id} requires must be an array`);
        for (const req of t.requires) {
          assert.notEqual(req, t.id, `Task ${t.id} cannot require itself in ${lvl.id}`);
        }
      }
    }

    // Mọi prerequisite phải tồn tại trong level.tasks
    for (const t of lvl.tasks) {
      if (t.requires) {
        for (const req of t.requires) {
          assert.ok(taskIdSet.has(req), `Level ${lvl.id} task ${t.id} requires missing task id: ${req}`);
        }
      }
    }

    // Kiểm tra distractors nếu có
    if (lvl.distractors) {
      assert.ok(Array.isArray(lvl.distractors), `Distractors in ${lvl.id} must be an array`);
      for (const d of lvl.distractors) {
        assert.ok(!taskIdSet.has(d.id), `Distractor id ${d.id} conflicts with task id in ${lvl.id}`);
        assert.ok(typeof d.failReason === "string" && d.failReason.length > 0, `Distractor ${d.id} missing failReason in ${lvl.id}`);
      }
    }
  }

  // Phân bố đều 10 chặng: mỗi chặng đúng 20 màn
  assert.equal(categoriesCount.routine, 20, "Category routine must have 20 levels");
  assert.equal(categoriesCount.cooking, 20, "Category cooking must have 20 levels");
  assert.equal(categoriesCount.engineering, 20, "Category engineering must have 20 levels");
  assert.equal(categoriesCount.mission, 20, "Category mission must have 20 levels");
  assert.equal(categoriesCount.medical, 20, "Category medical must have 20 levels");
  assert.equal(categoriesCount.computing, 20, "Category computing must have 20 levels");
  assert.equal(categoriesCount.ecology, 20, "Category ecology must have 20 levels");
  assert.equal(categoriesCount.architecture, 20, "Category architecture must have 20 levels");
  assert.equal(categoriesCount.detective, 20, "Category detective must have 20 levels");
  assert.equal(categoriesCount.megaproject, 20, "Category megaproject must have 20 levels");
});

// -------------------------------------------------------------
// 2. KIỂM THỬ TÍNH GIẢI ĐƯỢC CỦA TOÀN BỘ 200 MÀN (TOPOLOGICAL SORT / SOLVABILITY)
// -------------------------------------------------------------
test("task-master: all 200 levels have a solvable sequence with no circular prerequisites", () => {
  for (const lvl of TASK_MASTER_LEVELS) {
    const tasks = lvl.tasks;
    const taskMap = new Map(tasks.map(t => [t.id, t]));
    const inDegree = new Map(tasks.map(t => [t.id, 0]));
    const adj = new Map(tasks.map(t => [t.id, []]));

    for (const t of tasks) {
      const reqs = t.requires || [];
      inDegree.set(t.id, reqs.length);
      for (const r of reqs) {
        adj.get(r).push(t.id);
      }
    }

    // Kahn's algorithm for topological sorting
    const queue = [];
    for (const [id, deg] of inDegree.entries()) {
      if (deg === 0) queue.push(id);
    }

    const order = [];
    while (queue.length > 0) {
      const u = queue.shift();
      order.push(u);
      for (const v of adj.get(u)) {
        inDegree.set(v, inDegree.get(v) - 1);
        if (inDegree.get(v) === 0) {
          queue.push(v);
        }
      }
    }

    assert.equal(
      order.length, 
      tasks.length, 
      `Level ${lvl.id} (${lvl.title}) has circular prerequisite dependency or unreachable tasks! Only resolved ${order.length}/${tasks.length}`
    );

    // Thử xác thực chuỗi giải hợp lệ này bằng TaskMasterSession
    const session = new TaskMasterSession({ levelIndex: lvl.level - 1 });
    for (const taskId of order) {
      session.addTaskToTimeline(taskId);
    }
    const val = session.validateTimeline();
    assert.ok(val.success, `Level ${lvl.id} topological sort order failed session validation: ${val.reason || val.message}`);
  }
});

// -------------------------------------------------------------
// 3. KIỂM THỬ TASK MASTER SESSION (LOGIC, THÊM, BỚT, DI CHUYỂN, BẪY, GỢI Ý, SAO)
// -------------------------------------------------------------
test("task-master: TaskMasterSession timeline manipulation and validation rules", () => {
  const session = new TaskMasterSession({ levelIndex: 0 }); // Level 1
  const level = session.currentLevel;

  assert.equal(session.levelIndex, 0);
  assert.equal(level.id, "tm-1");
  assert.equal(session.timeline.length, 0);

  // 1. Thêm task
  session.addTaskToTimeline("t1");
  assert.equal(session.timeline.length, 1);
  assert.equal(session.timeline[0], "t1");

  // Không cho thêm trùng lặp
  session.addTaskToTimeline("t1");
  assert.equal(session.timeline.length, 1, "Duplicate task must not be added");

  // Thêm tiếp
  session.addTaskToTimeline("t2");
  session.addTaskToTimeline("t3");
  assert.equal(session.timeline.length, 3);

  // Di chuyển thứ tự (moveTask)
  session.moveTask(0, 1); // t1 xuống vị trí 1
  assert.deepEqual(session.timeline, ["t2", "t1", "t3"]);

  session.moveTask(1, 0); // trả lại
  assert.deepEqual(session.timeline, ["t1", "t2", "t3"]);

  // Gỡ bỏ task (removeTaskFromTimeline)
  session.removeTaskFromTimeline(2); // gỡ t3
  assert.deepEqual(session.timeline, ["t1", "t2"]);

  // Clear timeline
  session.clearTimeline();
  assert.equal(session.timeline.length, 0);

  // 2. Thử nghiệm vi phạm điều kiện tiên quyết (Prerequisite violation)
  // t2 yêu cầu t1. Cho t2 vào trước t1:
  session.addTaskToTimeline("t2");
  session.addTaskToTimeline("t1");
  session.addTaskToTimeline("t3");
  session.addTaskToTimeline("t4");
  const failRes = session.validateTimeline();
  assert.equal(failRes.success, false);
  assert.equal(failRes.status, "failed");
  assert.ok(failRes.reason.includes("chưa làm bước"), "Must specify missing prerequisite");

  // 3. Thử nghiệm thẻ bẫy (Distractor)
  session.clearTimeline();
  session.addTaskToTimeline("t1");
  session.addTaskToTimeline("d1"); // thẻ xem TV
  session.addTaskToTimeline("t2");
  session.addTaskToTimeline("t3");
  session.addTaskToTimeline("t4");
  const distractorRes = session.validateTimeline();
  assert.equal(distractorRes.success, false);
  assert.equal(distractorRes.status, "failed");
  assert.ok(distractorRes.reason.includes("muộn học"), "Must show witty distractor failReason");

  // 4. Kiểm tra gợi ý phân tích (Hint engine)
  session.clearTimeline();
  const hint1 = session.getHint();
  assert.ok(hint1, "Hint should be available on empty timeline");
  assert.equal(hint1.taskId, "t1", "First hint should recommend independent initial task");

  session.addTaskToTimeline("t1");
  const hint2 = session.getHint();
  assert.ok(hint2);
  assert.equal(hint2.taskId, "t2", "Next hint should recommend task whose requirement is satisfied");

  // 4b. Kiểm tra sửa lỗi P1: Xem gợi ý -> xoá timeline -> giải đúng vẫn bị trừ sao (không được 3 sao do đã được chỉ điểm)
  session.clearTimeline();
  session.addTaskToTimeline("t1");
  session.addTaskToTimeline("t2");
  session.addTaskToTimeline("t3");
  session.addTaskToTimeline("t4");
  const cheatedRes = session.validateTimeline();
  assert.equal(cheatedRes.success, true);
  assert.equal(cheatedRes.stars, 1, "Hints used before clearTimeline must persist and penalize stars");

  // 5. Giải đúng và tính sao theo số lần thử khi tự lực hoàn toàn (Star Rating)
  session.initLevel(); // Bắt đầu màn mới độc lập
  session.addTaskToTimeline("t1");
  session.addTaskToTimeline("t2");
  session.addTaskToTimeline("t3");
  session.addTaskToTimeline("t4");

  // Lần thử đầu tiên độc lập: 3 sao
  session.attemptsCount = 0;
  const win1 = session.validateTimeline();
  assert.equal(win1.success, true);
  assert.equal(win1.stars, 3, "First try without hints gives 3 stars");

  // Lần thử thứ 2: 2 sao
  session.attemptsCount = 2;
  const win2 = session.validateTimeline();
  assert.equal(win2.stars, 2, "Second attempt gives 2 stars");

  // Lần thử thứ 3+: 1 sao
  session.attemptsCount = 4;
  const win3 = session.validateTimeline();
  assert.equal(win3.stars, 1, "Third or more attempt gives 1 star");
});

// -------------------------------------------------------------
// 4. KIỂM THỬ MÔ PHỎNG VÀ CALLBACK ONWIN
// -------------------------------------------------------------
test("task-master: TaskMasterSession runSimulation triggers onWin and step callbacks", async () => {
  let winData = null;
  const session = new TaskMasterSession({
    levelIndex: 0,
    onWin: (res) => {
      winData = res;
    }
  });

  session.addTaskToTimeline("t1");
  session.addTaskToTimeline("t2");
  session.addTaskToTimeline("t3");
  session.addTaskToTimeline("t4");

  const stepHistory = [];
  const simResult = await session.runSimulation((step) => {
    stepHistory.push(step);
  });

  assert.equal(simResult.success, true);
  assert.equal(session.isSolved, true);
  assert.ok(winData, "onWin callback must be fired");
  assert.equal(winData.levelId, "tm-1");
  assert.equal(winData.stars, 3);
  assert.equal(stepHistory.length, 4);

  // Chuyển sang màn tiếp theo
  session.nextLevel();
  assert.equal(session.levelIndex, 1);
  assert.equal(session.currentLevel.id, "tm-2");
  assert.equal(session.timeline.length, 0);

  // Quay lại màn trước
  session.prevLevel();
  assert.equal(session.levelIndex, 0);
});

// -------------------------------------------------------------
// 5. KIỂM THỬ GIAO DIỆN VÀ NÚT BẤM (UI AUDIT)
// -------------------------------------------------------------
test("task-master: renderTaskMasterView UI buttons interaction audit", async () => {
  const elements = {
    btnPrevLevel: createMockEl("button"),
    btnNextLevel: createMockEl("button"),
    tmLevelSelector: createMockEl("select", { value: "0" }),
    btnClearTimeline: createMockEl("button"),
    btnHintTask: createMockEl("button"),
    btnRunSimulation: createMockEl("button"),
    btnNextLevelModal: createMockEl("button"),
    tmInteractiveArea: createMockEl("div")
  };

  const savedDoc = global.document;
  const savedAlert = global.alert;
  let alertMsg = "";
  global.alert = (msg) => { alertMsg = msg; };

  global.document = {
    getElementById: (id) => elements[id] || null,
    querySelector: (sel) => elements[sel.replace("#", "")] || null,
    querySelectorAll: (sel) => {
      if (sel === ".tm-task-card") {
        return [
          createMockEl("div", { dataset: { taskId: "t1" }, className: "tm-task-card" }),
          createMockEl("div", { dataset: { taskId: "t2" }, className: "tm-task-card" })
        ];
      }
      if (sel === "[data-move-up]") {
        return [createMockEl("button", { dataset: { moveUp: "1" } })];
      }
      if (sel === "[data-move-down]") {
        return [createMockEl("button", { dataset: { moveDown: "0" } })];
      }
      if (sel === "[data-remove-index]") {
        return [createMockEl("button", { dataset: { removeIndex: "0" } })];
      }
      return [];
    }
  };

  const mockRoot = createMockEl("div");
  let savedLocal = false;

  renderTaskMasterView({
    state: { db: { gameRecords: { taskMaster: { stars: 0, completedLevels: [] } } } },
    appRoot: mockRoot,
    saveLocal: async () => { savedLocal = true; },
    levelIndex: 0
  });

  assert.ok(mockRoot.innerHTML.includes("Bậc Thầy Kế Hoạch"), "Should render Task Master heading");
  assert.ok(mockRoot.innerHTML.includes("Dòng Kế Hoạch"), "Should render Timeline section");
  assert.ok(mockRoot.innerHTML.includes("Kho Thẻ Hành Động"), "Should render Available tasks section");

  // Test các nút tương tác
  if (elements.btnHintTask.onclick) elements.btnHintTask.onclick();
  assert.ok(alertMsg.includes("GỢI Ý"), "Hint button should show helpful hint dialog");

  if (elements.btnClearTimeline.onclick) elements.btnClearTimeline.onclick();
  if (elements.btnRunSimulation.onclick) await elements.btnRunSimulation.onclick();
  if (elements.btnNextLevel.onclick) elements.btnNextLevel.onclick();
  if (elements.btnPrevLevel.onclick) elements.btnPrevLevel.onclick();
  if (elements.tmLevelSelector.onchange) elements.tmLevelSelector.onchange({ target: { value: "3" } });

  global.document = savedDoc;
  global.alert = savedAlert;
});

// -------------------------------------------------------------
// 6. KIỂM THỬ TÍCH HỢP HUB VÀ BẢNG THÀNH TÍCH (GAMES HUB INTEGRATION)
// -------------------------------------------------------------
test("task-master: renderGamesHub renders Task Master card and statistics", () => {
  const mockRoot = createMockEl("div");
  const state = {
    db: {
      gameRecords: {
        taskMaster: {
          stars: 12,
          completedLevels: ["tm-1", "tm-2", "tm-3", "tm-4"]
        }
      }
    }
  };

  renderGamesHub({ state, appRoot: mockRoot });

  assert.ok(mockRoot.innerHTML.includes("Bậc Thầy Kế Hoạch"), "Hub should display Task Master card");
  assert.ok(mockRoot.innerHTML.includes("#games/task-master"), "Hub card should link to #games/task-master");
  assert.ok(mockRoot.innerHTML.includes("4</strong>/200 màn"), "Hub should show 4/200 completed levels");
  assert.ok(mockRoot.innerHTML.includes("12 sao"), "Hub should show 12 earned stars");
});

// -------------------------------------------------------------
// 7. KIỂM THỬ 5 CẢI TIẾN SƯ PHẠM (PEDAGOGY IMPROVEMENTS AUDIT)
// -------------------------------------------------------------
test("task-master: 5 pedagogy improvements (branching, distractors, move penalties, hint penalties, timer)", () => {
  // 1. Phân nhánh song song (Parallel Branching) ở Màn 3 & Màn 5
  // Màn 3: t2 (bột ngũ cốc) và t3 (nước ấm) đều chỉ yêu cầu t1.
  // Cả hai thứ tự [t1, t2, t3, t4, t5] và [t1, t3, t2, t4, t5] đều phải hợp lệ!
  const s3_a = new TaskMasterSession({ levelIndex: 2 }); // Level 3
  ["t1", "t2", "t3", "t4", "t5"].forEach(id => s3_a.addTaskToTimeline(id));
  assert.equal(s3_a.validateTimeline().success, true, "Level 3 branch A (powder first) must succeed");

  const s3_b = new TaskMasterSession({ levelIndex: 2 });
  ["t1", "t3", "t2", "t4", "t5"].forEach(id => s3_b.addTaskToTimeline(id));
  assert.equal(s3_b.validateTimeline().success, true, "Level 3 branch B (water first) must succeed");

  // Màn 5: t3 (gập tay áo trái) và t4 (gập tay áo phải) đều chỉ yêu cầu t2.
  // Cả hai thứ tự [t1, t2, t3, t4, t5] và [t1, t2, t4, t3, t5] đều phải hợp lệ!
  const s5_a = new TaskMasterSession({ levelIndex: 4 }); // Level 5
  ["t1", "t2", "t3", "t4", "t5"].forEach(id => s5_a.addTaskToTimeline(id));
  assert.equal(s5_a.validateTimeline().success, true, "Level 5 branch A (left first) must succeed");

  const s5_b = new TaskMasterSession({ levelIndex: 4 });
  ["t1", "t2", "t4", "t3", "t5"].forEach(id => s5_b.addTaskToTimeline(id));
  assert.equal(s5_b.validateTimeline().success, true, "Level 5 branch B (right first) must succeed");

  // 2. Toàn bộ 80 màn chơi đầu tiên đều có đúng 2 distractors với thông điệp failReason sâu sắc
  for (const lvl of TASK_MASTER_LEVELS.slice(0, 80)) {
    assert.ok(Array.isArray(lvl.distractors), `Level ${lvl.id} must have distractors array`);
    assert.equal(lvl.distractors.length, 2, `Level ${lvl.id} must have exactly 2 distractors`);
    for (const d of lvl.distractors) {
      assert.ok(d.id === "d1" || d.id === "d2", `Distractor id should be d1 or d2, got ${d.id} in ${lvl.id}`);
      assert.ok(d.failReason.length >= 10, `Distractor in ${lvl.id} missing detailed failReason`);
    }
  }

  // Các màn chơi từ 81 đến 200 có thẻ bẫy phải đảm bảo chất lượng sư phạm và giải thích khoa học
  for (const lvl of TASK_MASTER_LEVELS.slice(80)) {
    if (lvl.distractors) {
      assert.ok(lvl.distractors.length >= 1 && lvl.distractors.length <= 2);
      for (const d of lvl.distractors) {
        assert.ok(d.id.startsWith("d"), `Distractor id should start with d in ${lvl.id}`);
        assert.ok(d.failReason.length >= 10, `Distractor in ${lvl.id} missing detailed failReason`);
      }
    }
  }

  // 3. Phạt đổi chỗ quá nhiều lần (Move rearrangement penalty)
  const sessionMoves = new TaskMasterSession({ levelIndex: 0 });
  ["t1", "t2", "t3", "t4"].forEach(id => sessionMoves.addTaskToTimeline(id));
  assert.equal(sessionMoves.moveCount, 0);

  // Thực hiện 4 lần đổi chỗ (>3 lần đổi -> tối đa 2 sao)
  sessionMoves.moveTask(0, 1);
  sessionMoves.moveTask(1, 0);
  sessionMoves.moveTask(2, 3);
  sessionMoves.moveTask(3, 2);
  assert.equal(sessionMoves.moveCount, 4);

  const resMovePenalty = sessionMoves.validateTimeline();
  assert.equal(resMovePenalty.success, true);
  assert.equal(resMovePenalty.stars, 2, "More than 3 moves should reduce stars to 2");

  // Đổi thêm 3 lần nữa (tổng 7 lần > 6 -> tối đa 1 sao)
  sessionMoves.moveTask(0, 1);
  sessionMoves.moveTask(1, 0);
  sessionMoves.moveTask(2, 3);
  sessionMoves.moveTask(3, 2);
  assert.equal(sessionMoves.moveCount, 8);
  const resHeavyMove = sessionMoves.validateTimeline();
  assert.equal(resHeavyMove.stars, 1, "More than 6 moves should reduce stars to 1");

  // 4. Dùng gợi ý bị trừ sao (Hint penalty)
  const sessionHint = new TaskMasterSession({ levelIndex: 0 });
  assert.equal(sessionHint.hintCount, 0);

  // Gọi gợi ý 1 lần khi bắt đầu màn chơi
  const hintRes = sessionHint.getHint();
  assert.ok(hintRes, "Hint should be available on unplaced tasks");
  assert.ok(hintRes.indirectClue, "Hint should provide indirect reasoning clue");
  assert.equal(sessionHint.hintCount, 1);

  // Xếp đủ các bước hoàn chỉnh
  ["t1", "t2", "t3", "t4"].forEach(id => sessionHint.addTaskToTimeline(id));

  const resHintPenalty = sessionHint.validateTimeline();
  assert.equal(resHintPenalty.success, true);
  assert.equal(resHintPenalty.stars, 2, "Using 1 hint should reduce stars by 1");

  // Dùng thêm 3 gợi ý nữa -> min 1 sao
  sessionHint.getHint();
  sessionHint.getHint();
  sessionHint.getHint();
  assert.equal(sessionHint.hintCount, 4);
  const resManyHints = sessionHint.validateTimeline();
  assert.equal(resManyHints.stars, 1, "Multiple hints should not reduce stars below 1");

  // 5. Soft timer cho các màn độ khó cao / Chặng kỹ thuật
  const sessionTimer = new TaskMasterSession({ levelIndex: 40 }); // Level 41 (Chương 3 Engineering)
  const l41 = sessionTimer.currentLevel;
  l41.tasks.forEach(t => sessionTimer.addTaskToTimeline(t.id));
  
  // Giả lập thời gian chạy vượt quá chuẩn (>90s)
  sessionTimer.startTime = Date.now() - 150000; // 150 giây trước
  const resTimer = sessionTimer.validateTimeline();
  assert.equal(resTimer.success, true);
  assert.equal(resTimer.timeExceeded, true, "Should flag time exceeded for long duration");
  assert.ok(resTimer.stars <= 2, "Time exceeded should reduce 1 star");

  // 6. Kiểm tra sửa lỗi P2 Màn 46: Bơm nước không được phép bật trước khi nối xong đường ống (t4)
  const lvl46 = getLevelById("tm-46");
  const task6_46 = lvl46.tasks.find(t => t.id === "t6");
  assert.ok(task6_46.requires.includes("t4"), "Level 46 task t6 must require t4 (pipe network completed)");
  assert.ok(task6_46.requires.includes("t5"), "Level 46 task t6 must require t5 (solar power)");

  const session46Invalid = new TaskMasterSession({ levelIndex: 45 }); // Level 46
  // Cố tình bật bơm t6 trước khi nối ống t3, t4:
  ["t1", "t2", "t5", "t6", "t3", "t4"].forEach(id => session46Invalid.addTaskToTimeline(id));
  const res46Invalid = session46Invalid.validateTimeline();
  assert.equal(res46Invalid.success, false, "Turning on pump before piping completed must fail");
  assert.ok(res46Invalid.reason.includes("chưa làm bước"), "Must report missing pipe prerequisite");

  // Thứ tự hợp lệ cho Màn 46
  const session46Valid = new TaskMasterSession({ levelIndex: 45 });
  ["t1", "t2", "t3", "t4", "t5", "t6"].forEach(id => session46Valid.addTaskToTimeline(id));
  assert.equal(session46Valid.validateTimeline().success, true, "Piping then pump must succeed");

  // 7. Kiểm tra sửa lỗi P1 Màn 50: Thuật ngữ khoa học chuẩn xác Anaglyph (lọc màu đỏ - xanh)
  const lvl50 = getLevelById("tm-50");
  assert.ok(lvl50.title.includes("Anaglyph"), "Level 50 title must use Anaglyph, not polarized");
  assert.ok(!lvl50.title.toLowerCase().includes("phân cực"), "Level 50 title must not say polarized");
  assert.ok(lvl50.lesson.includes("Anaglyph"), "Level 50 lesson must explain Anaglyph color filtering");
});

// -------------------------------------------------------------
// 8. KIỂM THỬ ĐẠI DỰ ÁN (MEGAPROJECTS & MOON BASE 2.5D SVG)
// -------------------------------------------------------------
test("task-master: megaprojects configuration and Moon Base Artemis 2.5D SVG visual", () => {
  assert.equal(MEGAPROJECTS.length, 5, "Must define 5 major megaprojects");
  const artemis = MEGAPROJECTS.find(p => p.id === "moon-base");
  assert.ok(artemis, "Moon Base project must exist");
  assert.equal(artemis.levelStart, 181);
  assert.equal(artemis.levelEnd, 200);

  // SVG Visual tests across milestones
  const svg0 = renderMoonBaseVisual(0);
  assert.ok(svg0.includes("<svg"), "Must render SVG element");
  assert.ok(svg0.includes("Bệ Hạ Cánh"), "Must render landing pad");
  assert.ok(svg0.includes("Căn Cứ Mặt Trăng: 0%"), "Must show 0% progress");

  const svg6 = renderMoonBaseVisual(6);
  assert.ok(svg6.includes("Trạm Năng Lượng"), "Energy station should be present");
  assert.ok(svg6.includes("Căn Cứ Mặt Trăng: 30%"), "Must show 30% progress");

  const svg14 = renderMoonBaseVisual(14);
  assert.ok(svg14.includes("Vòm Sinh Quyển"), "Dome should appear around 14 completed levels");
  assert.ok(svg14.includes("Căn Cứ Mặt Trăng: 70%"), "Must show 70% progress");

  const svg20 = renderMoonBaseVisual(20);
  assert.ok(svg20.includes("Căn Cứ Mặt Trăng: 100%"), "100% progress for 20 completed levels");

  // Helper getMegaprojectForLevel
  const mp185 = getMegaprojectForLevel(185);
  assert.ok(mp185);
  assert.equal(mp185.id, "moon-base");

  const mp50 = getMegaprojectForLevel(50);
  assert.equal(mp50, null, "Level 50 is not in a megaproject");
});

// -------------------------------------------------------------
// 9. KIỂM THỬ SỬA LỖI P1 SƠ CỨU Y TẾ CHUẨN QUỐC TẾ (MÀN 81, 82, 87, 93)
// -------------------------------------------------------------
test("task-master: 4 medical first-aid P1 fixes adhere to Red Cross, AHA, and NHS protocols", () => {
  // Màn 81: Bỏng nhiệt (Chuẩn Hội Chữ Thập Đỏ / Red Cross)
  const lvl81 = getLevelById("tm-81");
  assert.ok(lvl81, "Level 81 must exist");
  const lvl81ValidTexts = lvl81.tasks.map(t => t.text.toLowerCase()).join(" ");
  assert.ok(!lvl81ValidTexts.includes("sulfadiazine"), "Level 81 valid steps must NOT instruct applying silver sulfadiazine");
  assert.ok(!lvl81.tasks.some(t => t.text.toLowerCase().startsWith("bôi kem") || t.text.toLowerCase().startsWith("bôi thuốc")), "Level 81 valid steps must NOT instruct self-applying burn creams");
  assert.ok(lvl81ValidTexts.includes("15-20 phút"), "Level 81 must instruct cooling with clean water for 15-20 minutes");
  assert.ok(lvl81ValidTexts.includes("che phủ"), "Level 81 must instruct covering loosely with clean film or sterile dressing");
  const lvl81Distractor = lvl81.distractors.find(d => d.id === "d2");
  assert.ok(lvl81Distractor, "Level 81 must have distractor d2 warning against applying silver sulfadiazine");
  assert.ok(lvl81Distractor.text.includes("sulfadiazine"), "Distractor d2 text must mention sulfadiazine");

  // Màn 82: Điện giật (Chuẩn AHA)
  const lvl82 = getLevelById("tm-82");
  assert.ok(lvl82, "Level 82 must exist");
  const cprTask = lvl82.tasks.find(t => t.id === "t5");
  assert.ok(cprTask, "Level 82 must have CPR task");
  assert.ok(cprTask.text.includes("Chỉ khi nạn nhân bất tỉnh và không thở bình thường"), "CPR must be conditional on unresponsiveness and abnormal breathing");
  const lvl82Distractor = lvl82.distractors.find(d => d.id === "d2");
  assert.ok(lvl82Distractor, "Level 82 must have distractor d2 warning against performing CPR on breathing victim");
  assert.ok(lvl82Distractor.failReason.includes("AHA cảnh báo"), "Must explain AHA guidelines in failReason");

  // Màn 87: Say nắng, sốc nhiệt (Chuẩn CDC & Red Cross)
  const lvl87 = getLevelById("tm-87");
  assert.ok(lvl87, "Level 87 must exist");
  const call115Task = lvl87.tasks.find(t => t.id === "t2");
  assert.ok(call115Task, "Level 87 must have early emergency call task");
  assert.ok(call115Task.text.includes("115"), "Emergency call step must call 115 immediately");
  const lvl87ValidTexts = lvl87.tasks.map(t => t.text).join(" ");
  assert.ok(!lvl87ValidTexts.includes("Đo nhiệt độ hạ dưới 38.5°C rồi"), "Must NOT wait for temperature to drop below 38.5°C before calling");
  const lvl87Distractor = lvl87.distractors.find(d => d.id === "d1");
  assert.ok(lvl87Distractor, "Level 87 must have distractor d1 warning against waiting for temperature drop");
  assert.ok(lvl87Distractor.failReason.includes("Sốc nhiệt (Heat stroke) là tình trạng cấp cứu khẩn cấp"), "Must explain urgency of heat stroke");

  // Màn 93: Ngộ độc thực phẩm (Chuẩn NHS & AAP)
  const lvl93 = getLevelById("tm-93");
  assert.ok(lvl93, "Level 93 must exist");
  assert.ok(!lvl93.tasks.some(t => t.text.toLowerCase().includes("kích thích") || t.text.toLowerCase().includes("gây nôn") || t.text.toLowerCase().includes("than hoạt tính")), "Level 93 valid steps must NOT teach inducing vomiting or giving charcoal");
  const lvl93ValidTexts = lvl93.tasks.map(t => t.text.toLowerCase()).join(" ");
  assert.ok(lvl93ValidTexts.includes("tuyệt đối không tự ý móc họng"), "Level 93 must instruct not to induce vomiting");
  assert.ok(lvl93ValidTexts.includes("dừng ăn") && lvl93ValidTexts.includes("mẫu"), "Level 93 must preserve sample");
  assert.ok(lvl93ValidTexts.includes("115") || lvl93ValidTexts.includes("chống độc"), "Level 93 must call 115 / poison center");
  assert.ok(lvl93ValidTexts.includes("nằm nghiêng an toàn"), "Level 93 must place victim in recovery position");
  const lvl93Distractor = lvl93.distractors.find(d => d.id === "d1");
  assert.ok(lvl93Distractor, "Level 93 must have distractor d1 warning against inducing vomiting or taking charcoal");
  assert.ok(lvl93Distractor.failReason.includes("NHS"), "Distractor failReason must cite NHS warning against self-induced vomiting");
});

// -------------------------------------------------------------
// 10. KIỂM THỬ NÂNG CẤP SƯ PHẠM ĐỒ HỌA & ĐẠI DỰ ÁN (P1 & P2 FIXES)
// -------------------------------------------------------------
test("task-master: pedagogical fixes for visual diagrams, stage-specific tracking, and live blueprint ribbon", () => {
  // P1: Đại dự án nhận diện chính xác ID dạng chuỗi 'tm-81' và tăng tiến độ
  const resEmergency = getMegaprojectProgress("emergency-hospital", ["tm-81", "tm-82", "tm-83"]);
  assert.equal(resEmergency.completedCount, 3, "Megaproject must count completed levels from string IDs like 'tm-81'");
  assert.equal(resEmergency.percent, 15, "3 out of 20 levels must equal 15%");
  assert.equal(resEmergency.stageStatus.s1.completed, 3);
  assert.equal(resEmergency.stageStatus.s1.isDone, false);
  assert.equal(resEmergency.stageStatus.s1.hasStarted, true);

  // P2: Tiến độ đồ họa chuẩn xác theo từng giai đoạn (hoàn thành giai đoạn 4 trước không làm sáng giai đoạn 1)
  const resMoonStage4 = getMegaprojectProgress("moon-base", ["tm-196", "tm-197", "tm-198", "tm-199", "tm-200"]);
  assert.equal(resMoonStage4.stageStatus.s4.isDone, true, "Stage 4 (196-200) must be marked done");
  assert.equal(resMoonStage4.stageStatus.s1.isDone, false, "Stage 1 (181-185) must NOT be marked done");
  assert.equal(resMoonStage4.stageStatus.s1.hasStarted, false, "Stage 1 has not started");

  const svgStage4Only = renderMoonBaseVisual(5, 20, resMoonStage4.stageStatus);
  // Khi Giai đoạn 4 xong thì phần Vòm Sinh Quyển phải sáng (opacity 1)
  assert.ok(svgStage4Only.includes('opacity="1"'), "Completed stage must be fully visible (opacity 1)");
  // Giai đoạn 1 chưa làm thì phải ở trạng thái chờ mờ (opacity 0.15)
  assert.ok(svgStage4Only.includes('opacity="0.15"'), "Unstarted stage must remain dim (opacity 0.15)");

  // P2: Hình Cặp Bánh Răng Ăn Khớp (Gear Meshing with 2 gears & motion transmission)
  const svgEng = renderEngineeringVisual(0, 20);
  assert.ok(svgEng.includes("Cặp Bánh Răng Ăn Khớp"), "Must render interlocking gear pair with 2 gears");
  assert.ok(svgEng.includes("Quay Thuận ➔ Truyền Quay Ngược"), "Must explain motion transmission direction");

  // P2: Hình Mạch Điện Kín (Closed Circuit Loop with positive, negative, switch, lamp, and return wire)
  assert.ok(svgEng.includes("Mạch Điện Kín (Đèn Sáng)"), "Must depict closed electric circuit");
  assert.ok(svgEng.includes("Công tắc ĐÓNG"), "Must include closed switch");
  assert.ok(svgEng.includes("+"), "Must label positive terminal");
  assert.ok(svgEng.includes("-"), "Must label negative terminal");
  assert.ok(svgEng.includes("Cực (-)"), "Must explain circuit return to negative terminal");

  // Pedagogy: Dải tiến trình kế hoạch thời gian thực (Live Blueprint Step Tracker)
  const mockLevel = getLevelById("tm-81");
  const timelineState = {
    currentLevel: mockLevel,
    timeline: [mockLevel.tasks[0].id, mockLevel.tasks[1].id],
    isSimulating: false,
    simulationStep: -1,
    simulationResult: null
  };
  const svgLive = renderCategoryVisual(mockLevel.category, 0, 20, null, timelineState);
  assert.ok(svgLive.includes("tm-live-blueprint-ribbon"), "Must render live blueprint ribbon inside SVG");
  assert.ok(svgLive.includes("Bước 1"), "Must display Step 1 in live tracker");
  assert.ok(svgLive.includes("Bước 2"), "Must display Step 2 in live tracker");
  assert.ok(svgLive.includes("Chờ xếp"), "Unplaced slots must be marked as waiting");
});
