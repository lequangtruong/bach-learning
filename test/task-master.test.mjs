// test/task-master.test.mjs - Kiểm thử toàn diện Trò Chơi Bậc Thầy Kế Hoạch (Task Master) 80 Màn Chơi
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
// 1. KIỂM THỬ TÍNH TOÀN VẸN CỦA DỮ LIỆU NGÂN HÀNG (80 MÀN CHƠI)
// -------------------------------------------------------------
test("task-master: TASK_MASTER_LEVELS data integrity and complete 80 levels", () => {
  assert.equal(TASK_MASTER_LEVELS.length, 80, "Game must contain exactly 80 authored levels");

  const categoriesCount = {
    routine: 0,
    cooking: 0,
    engineering: 0,
    mission: 0
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
    assert.ok(lvl.difficulty >= 1 && lvl.difficulty <= 4, `Level ${lvl.id} difficulty must be between 1 and 4`);
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

  // Phân bố đều 4 chặng: mỗi chặng đúng 20 màn
  assert.equal(categoriesCount.routine, 20, "Category routine must have 20 levels");
  assert.equal(categoriesCount.cooking, 20, "Category cooking must have 20 levels");
  assert.equal(categoriesCount.engineering, 20, "Category engineering must have 20 levels");
  assert.equal(categoriesCount.mission, 20, "Category mission must have 20 levels");
});

// -------------------------------------------------------------
// 2. KIỂM THỬ TÍNH GIẢI ĐƯỢC CỦA TOÀN BỘ 80 MÀN (TOPOLOGICAL SORT / SOLVABILITY)
// -------------------------------------------------------------
test("task-master: all 80 levels have a solvable sequence with no circular prerequisites", () => {
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

  // 5. Giải đúng và tính sao theo số lần thử (Star Rating)
  session.clearTimeline();
  session.addTaskToTimeline("t1");
  session.addTaskToTimeline("t2");
  session.addTaskToTimeline("t3");
  session.addTaskToTimeline("t4");

  // Lần thử đầu tiên: 3 sao
  session.attemptsCount = 0;
  const win1 = session.validateTimeline();
  assert.equal(win1.success, true);
  assert.equal(win1.stars, 3, "First try gives 3 stars");

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
  assert.ok(mockRoot.innerHTML.includes("4</strong>/80 màn"), "Hub should show 4/80 completed levels");
  assert.ok(mockRoot.innerHTML.includes("12 sao"), "Hub should show 12 earned stars");
});
