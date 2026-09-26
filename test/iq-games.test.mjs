// test/iq-games.test.mjs - Bộ kiểm thử tự động toàn diện cho 4 trò chơi tăng IQ mới
import test from "node:test";
import assert from "node:assert/strict";

import { SPATIAL_3D_CHALLENGES, Spatial3DSession, renderIsometricCubesSvg, renderCubeNetSvg } from "../js/spatial-3d.js";
import { renderSpatial3DView } from "../js/render-spatial-3d.js";

import { LOGIC_GRID_CASES, LogicGridSession, CELL_STATE } from "../js/logic-grid.js";
import { renderLogicGridView } from "../js/render-logic-grid.js";

import { RUSH_HOUR_BOARDS, RushHourSession, GRID_SIZE, EXIT_ROW, EXIT_COL } from "../js/rush-hour.js";
import { renderRushHourView } from "../js/render-rush-hour.js";

import { CHIMP_LEVELS, ChimpMemorySession, GAME_STATE } from "../js/chimp-memory.js";
import { renderChimpMemoryView, clearChimpTimer } from "../js/render-chimp-memory.js";

import { renderGamesHub } from "../js/render-games.js";

// Helper tạo Mock Element gọn nhẹ cho UI Audit
function createMockEl(tag = "div", props = {}) {
  const listeners = {};
  const el = {
    tagName: tag.toUpperCase(),
    style: props.style || {},
    dataset: props.dataset || {},
    classList: {
      _classes: new Set(props.className ? props.className.split(" ") : []),
      add(c) { this._classes.add(c); },
      remove(c) { this._classes.delete(c); },
      contains(c) { return this._classes.has(c); },
      toggle(c, force) {
        if (force === undefined) {
          if (this._classes.has(c)) this._classes.delete(c);
          else this._classes.add(c);
        } else if (force) {
          this._classes.add(c);
        } else {
          this._classes.delete(c);
        }
      }
    },
    innerHTML: props.innerHTML || "",
    value: props.value || "",
    checked: props.checked || false,
    disabled: props.disabled || false,
    addEventListener(evt, fn) {
      listeners[evt] = [fn];
    },
    async click() {
      if (this.disabled) return;
      const fns = [...(listeners["click"] || [])];
      for (const fn of fns) {
        await fn({ target: el, preventDefault: () => {} });
      }
    },
    trigger(evt, eventObj = {}) {
      const fns = [...(listeners[evt] || [])];
      for (const fn of fns) {
        fn({ target: el, ...eventObj });
      }
    },
    querySelector: () => null,
    querySelectorAll: () => [],
    closest: () => null
  };
  return el;
}

// -------------------------------------------------------------
// 1. KIỂM THỬ GAME 6: THÁM TỬ KHỐI 3D (SPATIAL 3D)
// -------------------------------------------------------------
test("iq-games: Game 6 (Spatial 3D) data integrity and SVG rendering", () => {
  assert.equal(SPATIAL_3D_CHALLENGES.length, 60, "Phải có đúng 60 thử thách không gian 3D");

  SPATIAL_3D_CHALLENGES.forEach(c => {
    assert.ok(c.id && typeof c.id === "string");
    assert.ok(["hidden-blocks", "projections", "cube-nets"].includes(c.mode));
    assert.ok(c.title && typeof c.title === "string");
    assert.ok(c.prompt && typeof c.prompt === "string");
    assert.ok(Array.isArray(c.options) && c.options.length >= 4);
    assert.ok(c.correctAnswer !== undefined);
    assert.ok(c.options.includes(c.correctAnswer), "Đáp án đúng phải nằm trong danh sách lựa chọn");
    assert.ok(c.explanation && typeof c.explanation === "string");
  });

  // Kiểm tra render SVG Isometric
  const sampleCubes = [[0, 0, 0], [1, 0, 0], [0, 0, 1]];
  const svg = renderIsometricCubesSvg(sampleCubes);
  assert.ok(typeof svg === "string" && svg.includes("<svg") && svg.includes("<polygon"));

  // Kiểm tra render SVG Net
  const cnChallenge = SPATIAL_3D_CHALLENGES.find(c => c.mode === "cube-nets");
  const netSvg = renderCubeNetSvg(cnChallenge);
  assert.ok(typeof netSvg === "string" && netSvg.includes("<svg") && netSvg.includes("<rect"));
});

test("iq-games: Game 6 (Spatial 3D) session state and navigation", () => {
  const session = new Spatial3DSession(0);
  assert.equal(session.currentIndex, 0);

  // Thử chọn đáp án sai
  session.selectOption(999);
  const res1 = session.checkAnswer();
  assert.equal(res1.ok, true);
  assert.equal(res1.isCorrect, false);

  // Thử chọn đáp án đúng
  const correctVal = session.getCurrentChallenge().correctAnswer;
  session.selectOption(correctVal);
  const res2 = session.checkAnswer();
  assert.equal(res2.ok, true);
  assert.equal(res2.isCorrect, true);

  // Điều hướng
  session.nextChallenge();
  assert.equal(session.currentIndex, 1);
  session.prevChallenge();
  assert.equal(session.currentIndex, 0);
  session.setChallengeIndex(10);
  assert.equal(session.currentIndex, 10);
});

test("iq-games: Game 6 (Spatial 3D) UI buttons interaction audit", async () => {
  const elements = {
    "#spatialChallengeSelect": createMockEl("select", { value: "sp3d-hb-01" }),
    "#spatialSubmitBtn": createMockEl("button"),
    "#spatialToggleHintBtn": createMockEl("button"),
    "#spatialHintArea": createMockEl("div", { style: { display: "none" } }),
    "#spatialFeedbackArea": createMockEl("div", { style: { display: "none" } }),
    "#spatial3DSvgStage": createMockEl("div"),
    "#prevSpatialBtn": createMockEl("button"),
    "#nextSpatialBtn": createMockEl("button"),
    "#randomSpatialBtn": createMockEl("button")
  };

  const optionBtns = [
    createMockEl("button", { dataset: { val: "5" } }),
    createMockEl("button", { dataset: { val: "6" } }),
    createMockEl("button", { dataset: { val: "7" } }),
    createMockEl("button", { dataset: { val: "8" } })
  ];

  const levelPills = [
    createMockEl("button", { dataset: { filter: "all" } }),
    createMockEl("button", { dataset: { filter: "hidden-blocks" } }),
    createMockEl("button", { dataset: { filter: "projections" } }),
    createMockEl("button", { dataset: { filter: "cube-nets" } })
  ];

  const savedDoc = global.document;
  global.document = {
    querySelector: (sel) => elements[sel] || null,
    querySelectorAll: (sel) => {
      if (sel === ".spatial-option-btn") return optionBtns;
      if (sel === ".level-pill") return levelPills;
      return [];
    }
  };

  const mockRoot = createMockEl("div");
  mockRoot.querySelector = (sel) => elements[sel] || null;
  mockRoot.querySelectorAll = (sel) => {
    if (sel === ".spatial-option-btn") return optionBtns;
    if (sel === ".level-pill") return levelPills;
    return [];
  };
  let saved = false;

  renderSpatial3DView({
    state: { db: { gameRecords: { spatial3D: { stars: 0, completedChallenges: [] } } } },
    appRoot: mockRoot,
    saveLocal: async () => { saved = true; },
    challengeIndex: 0
  });

  // 1. Test click toggle hint
  elements["#spatialToggleHintBtn"].click();
  assert.equal(elements["#spatialHintArea"].style.display, "block");

  // 2. Test click chọn option
  await optionBtns[1].click(); // val: "6" (đúng câu 1)

  // 3. Test click nộp bài
  await elements["#spatialSubmitBtn"].click();
  assert.equal(elements["#spatialFeedbackArea"].style.display, "block");
  assert.ok(elements["#spatialFeedbackArea"].innerHTML.includes("XUẤT SẮC"));
  assert.equal(saved, true);

  // 4. Test click nav buttons
  elements["#nextSpatialBtn"].click();
  elements["#prevSpatialBtn"].click();
  elements["#randomSpatialBtn"].click();

  // 5. Test click level pills
  levelPills[1].click();

  global.document = savedDoc;
});

// -------------------------------------------------------------
// 2. KIỂM THỬ GAME 7: BẢNG LƯỚI THÁM TỬ (LOGIC GRID)
// -------------------------------------------------------------
test("iq-games: Game 7 (Logic Grid) data integrity and case validation", () => {
  assert.equal(LOGIC_GRID_CASES.length, 50, "Phải có đúng 50 vụ án logic trinh thám");

  LOGIC_GRID_CASES.forEach(c => {
    assert.ok(c.id && typeof c.id === "string");
    assert.ok(c.title && typeof c.title === "string");
    assert.ok(c.story && typeof c.story === "string");
    assert.ok(Array.isArray(c.rows?.items) && c.rows.items.length >= 3);
    assert.ok(Array.isArray(c.cols?.items) && c.cols.items.length >= 3);
    assert.ok(Array.isArray(c.clues) && c.clues.length >= 3);
    assert.ok(typeof c.solution === "object" && Object.keys(c.solution).length === c.rows.items.length);
    assert.ok(c.explanation && typeof c.explanation === "string");
  });
});

test("iq-games: Game 7 (Logic Grid) session toggle and solution checking", () => {
  const session = new LogicGridSession(0);
  const c = session.getCurrentCase();
  const row0 = c.rows.items[0];
  const col0 = c.cols.items[0];

  // Trạng thái ban đầu: EMPTY (0)
  assert.equal(session.getCellState(row0, col0), CELL_STATE.EMPTY);

  // Bấm lần 1: Chuyển sang CROSS (1)
  session.toggleCell(row0, col0);
  assert.equal(session.getCellState(row0, col0), CELL_STATE.CROSS);

  // Bấm lần 2: Chuyển sang CHECK (2)
  session.toggleCell(row0, col0);
  assert.equal(session.getCellState(row0, col0), CELL_STATE.CHECK);

  // Kiểm tra tính năng tiện ích tự động điền CROSS cho các ô cùng hàng
  const col1 = c.cols.items[1];
  assert.equal(session.getCellState(row0, col1), CELL_STATE.CROSS);

  // Bấm lần 3: Trở lại EMPTY (0)
  session.toggleCell(row0, col0);
  assert.equal(session.getCellState(row0, col0), CELL_STATE.EMPTY);

  // Reset bảng
  session.resetGrid();
  assert.equal(session.getCellState(row0, col1), CELL_STATE.EMPTY);

  // Điền đúng toàn bộ solution
  for (const [r, targetCol] of Object.entries(c.solution)) {
    session.gridState[r][targetCol] = CELL_STATE.CHECK;
  }
  const res = session.checkSolution();
  assert.equal(res.ok, true);
  assert.equal(res.isCorrect, true);
  assert.equal(res.matchedCount, Object.keys(c.solution).length);
});

test("iq-games: Game 7 (Logic Grid) UI buttons interaction audit", async () => {
  const elements = {
    "#logicCaseSelect": createMockEl("select", { value: "lg-01" }),
    "#logicCheckBtn": createMockEl("button"),
    "#logicResetGridBtn": createMockEl("button"),
    "#logicToggleHintBtn": createMockEl("button"),
    "#logicHintArea": createMockEl("div", { style: { display: "none" } }),
    "#logicFeedbackArea": createMockEl("div", { style: { display: "none" } }),
    "#prevCaseBtn": createMockEl("button"),
    "#nextCaseBtn": createMockEl("button"),
    "#randomCaseBtn": createMockEl("button")
  };

  const cells = [
    createMockEl("td", { dataset: { row: "Bách", col: "Robot" } }),
    createMockEl("td", { dataset: { row: "Nam", col: "Cờ Vua" } })
  ];

  const clueBoxes = [
    createMockEl("input", { checked: false }),
    createMockEl("input", { checked: false })
  ];

  const savedDoc = global.document;
  global.document = {
    querySelector: (sel) => elements[sel] || null,
    querySelectorAll: (sel) => {
      if (sel === ".logic-grid-cell") return cells;
      if (sel === ".clue-checkbox") return clueBoxes;
      return [];
    }
  };

  const mockRoot = createMockEl("div");
  mockRoot.querySelector = (sel) => elements[sel] || null;
  mockRoot.querySelectorAll = (sel) => {
    if (sel === ".logic-grid-cell") return cells;
    if (sel === ".clue-checkbox") return clueBoxes;
    return [];
  };
  let saved = false;

  renderLogicGridView({
    state: { db: { gameRecords: { logicGrid: { stars: 0, completedCases: [] } } } },
    appRoot: mockRoot,
    saveLocal: async () => { saved = true; },
    caseIndex: 0
  });

  // 1. Test toggle hint
  elements["#logicToggleHintBtn"].click();
  assert.equal(elements["#logicHintArea"].style.display, "block");

  // 2. Test click cells
  await cells[0].click();

  // 3. Test check button
  await elements["#logicCheckBtn"].click();
  assert.equal(elements["#logicFeedbackArea"].style.display, "block");

  // 4. Test reset grid button
  elements["#logicResetGridBtn"].click();

  // 5. Test nav buttons
  elements["#nextCaseBtn"].click();
  elements["#prevCaseBtn"].click();
  elements["#randomCaseBtn"].click();

  global.document = savedDoc;
});

// -------------------------------------------------------------
// 3. KIỂM THỬ GAME 8: KẸT XE THÔNG MINH (RUSH HOUR)
// -------------------------------------------------------------
test("iq-games: Game 8 (Rush Hour) data integrity and grid validation", () => {
  assert.equal(RUSH_HOUR_BOARDS.length, 50, "Phải có đúng 50 thế cờ Rush Hour");

  RUSH_HOUR_BOARDS.forEach(b => {
    assert.ok(b.id && typeof b.id === "string");
    assert.ok(b.title && typeof b.title === "string");
    assert.ok(Number.isInteger(b.minMoves) && b.minMoves >= 6);
    assert.ok(Array.isArray(b.vehicles) && b.vehicles.length >= 4);

    // Kiểm tra xe đỏ
    const red = b.vehicles.find(v => v.id === "R");
    assert.ok(red, "Phải có xe đỏ (R)");
    assert.equal(red.row, EXIT_ROW, "Xe đỏ phải nằm ở hàng số 2");
    assert.equal(red.dir, "H", "Xe đỏ phải nằm ngang");
    assert.equal(red.len, 2, "Xe đỏ dài 2 ô");

    // Kiểm tra các xe không vượt quá biên 6x6
    b.vehicles.forEach(v => {
      assert.ok(v.row >= 0 && v.row < GRID_SIZE);
      assert.ok(v.col >= 0 && v.col < GRID_SIZE);
      if (v.dir === "H") assert.ok(v.col + v.len <= GRID_SIZE);
      if (v.dir === "V") assert.ok(v.row + v.len <= GRID_SIZE);
    });
  });
});

test("iq-games: Game 8 (Rush Hour) session moves, collision, and undo", () => {
  const session = new RushHourSession(0);
  assert.equal(session.moveCount, 0);

  // Kiểm tra không đi xuyên biên
  const red = session.getVehicle("R");
  // Ở thế 1, xe đỏ ở (2, 1), thử lùi sang trái (2, 0)
  assert.equal(session.canMove("R", "left"), true);
  session.moveVehicle("R", "left");
  assert.equal(red.col, 0);
  assert.equal(session.moveCount, 1);

  // Thử lùi tiếp sang trái (bị chặn bởi mép cột 0)
  assert.equal(session.canMove("R", "left"), false);

  // Test Undo
  const undoOk = session.undo();
  assert.equal(undoOk, true);
  assert.equal(session.getVehicle("R").col, 1);
  assert.equal(session.moveCount, 0);

  // Test Reset
  session.moveVehicle("R", "left");
  session.reset();
  assert.equal(session.moveCount, 0);
  assert.equal(session.getVehicle("R").col, 1);
});

test("iq-games: Game 8 (Rush Hour) UI buttons interaction audit", async () => {
  const elements = {
    "#rushBoardSelect": createMockEl("select", { value: "rh-01" }),
    "#moveLeftBtn": createMockEl("button"),
    "#moveRightBtn": createMockEl("button"),
    "#moveUpBtn": createMockEl("button"),
    "#moveDownBtn": createMockEl("button"),
    "#rushUndoBtn": createMockEl("button"),
    "#rushResetBtn": createMockEl("button"),
    "#rushToggleHintBtn": createMockEl("button"),
    "#rushHintArea": createMockEl("div", { style: { display: "none" } }),
    "#rushWinArea": createMockEl("div", { style: { display: "none" } }),
    "#prevRushBtn": createMockEl("button"),
    "#nextRushBtn": createMockEl("button"),
    "#randomRushBtn": createMockEl("button")
  };

  const vehicleEls = [
    createMockEl("g", { dataset: { vid: "R" } }),
    createMockEl("g", { dataset: { vid: "A" } })
  ];

  const savedDoc = global.document;
  global.document = {
    querySelector: (sel) => elements[sel] || null,
    querySelectorAll: (sel) => {
      if (sel === ".rush-vehicle") return vehicleEls;
      return [];
    }
  };

  const mockRoot = createMockEl("div");
  mockRoot.querySelector = (sel) => elements[sel] || null;
  mockRoot.querySelectorAll = (sel) => {
    if (sel === ".rush-vehicle") return vehicleEls;
    return [];
  };
  let saved = false;

  renderRushHourView({
    state: { db: { gameRecords: { rushHour: { stars: 0, completedBoards: [], bestMoves: {} } } } },
    appRoot: mockRoot,
    saveLocal: async () => { saved = true; },
    boardIndex: 0
  });

  // 1. Test chọn xe
  await vehicleEls[0].click(); // Chọn xe R

  // 2. Test nút di chuyển
  if (!elements["#moveLeftBtn"].disabled) {
    await elements["#moveLeftBtn"].click();
  }

  // 3. Test Undo và Reset
  await elements["#rushUndoBtn"].click();
  await elements["#rushResetBtn"].click();

  // 4. Test Hint toggle
  elements["#rushToggleHintBtn"].click();
  assert.equal(elements["#rushHintArea"].style.display, "block");

  // 5. Test Nav buttons
  elements["#nextRushBtn"].click();
  elements["#prevRushBtn"].click();
  elements["#randomRushBtn"].click();

  global.document = savedDoc;
});

// -------------------------------------------------------------
// 4. KIỂM THỬ GAME 9: NÃO SIÊU NHỚ (CHIMP MEMORY TEST)
// -------------------------------------------------------------
test("iq-games: Game 9 (Chimp Memory) levels and session flow", () => {
  assert.equal(CHIMP_LEVELS.length, 8, "Phải có đúng 8 cấp độ");

  const session = new ChimpMemorySession(1);
  assert.equal(session.state, GAME_STATE.IDLE);

  // Khởi động vòng 1 (4 số)
  const round = session.startRound();
  assert.equal(session.state, GAME_STATE.MEMORIZING);
  assert.equal(session.tiles.length, 4);

  // Ẩn số
  session.hideNumbers();
  assert.equal(session.state, GAME_STATE.RECALLING);

  // Sắp xếp các ô theo giá trị từ 1 đến 4 để thử bấm đúng toàn bộ
  const sortedTiles = [...session.tiles].sort((a, b) => a.val - b.val);
  for (let i = 0; i < sortedTiles.length - 1; i++) {
    const res = session.tapTile(sortedTiles[i].r, sortedTiles[i].c);
    assert.equal(res.ok, true);
    assert.equal(res.isCompleted, false);
  }

  // Bấm số cuối cùng -> Thắng vòng
  const lastTile = sortedTiles[sortedTiles.length - 1];
  const lastRes = session.tapTile(lastTile.r, lastTile.c);
  assert.equal(lastRes.ok, true);
  assert.equal(lastRes.isCompleted, true);
  assert.equal(session.state, GAME_STATE.SUCCESS);
  assert.ok(session.score > 0);

  // Thử bấm sai ở một vòng khác
  session.startRound();
  session.hideNumbers();
  const wrongTile = session.tiles.find(t => t.val !== 1);
  if (wrongTile) {
    const wrongRes = session.tapTile(wrongTile.r, wrongTile.c);
    assert.equal(wrongRes.ok, true);
    assert.equal(wrongRes.isCorrect, false);
    assert.equal(session.state, GAME_STATE.FAILED);
  }
});

test("iq-games: Game 9 (Chimp Memory) UI buttons interaction audit", async () => {
  const elements = {
    "#chimpStartBtn": createMockEl("button"),
    "#chimpNextLevelBtn": createMockEl("button"),
    "#chimpPlayAgainBtn": createMockEl("button"),
    "#chimpRetryBtn": createMockEl("button"),
    "#chimpGridStage": createMockEl("div")
  };

  const tiles = [
    createMockEl("div", { dataset: { r: "0", c: "0" } }),
    createMockEl("div", { dataset: { r: "1", c: "1" } })
  ];

  const levelPills = [
    createMockEl("button", { dataset: { lvl: "1" } }),
    createMockEl("button", { dataset: { lvl: "2" } })
  ];

  const savedDoc = global.document;
  global.document = {
    querySelector: (sel) => elements[sel] || null,
    querySelectorAll: (sel) => {
      if (sel === ".chimp-tile") return tiles;
      if (sel === ".chimp-level-pill") return levelPills;
      return [];
    }
  };

  const mockRoot = createMockEl("div");
  mockRoot.querySelector = (sel) => elements[sel] || null;
  mockRoot.querySelectorAll = (sel) => {
    if (sel === ".chimp-tile") return tiles;
    if (sel === ".chimp-level-pill") return levelPills;
    return [];
  };
  let saved = false;

  renderChimpMemoryView({
    state: { db: { gameRecords: { chimpMemory: { highScore: 0, maxLevel: 1, completedLevels: [] } } } },
    appRoot: mockRoot,
    saveLocal: async () => { saved = true; },
    level: 1
  });

  // 1. Test click Start button
  await elements["#chimpStartBtn"].click();

  // 2. Test click Level pill
  await levelPills[1].click();

  clearChimpTimer();
  global.document = savedDoc;
});

// -------------------------------------------------------------
// 5. KIỂM THỬ SẢNH 9 GAME (GAMES HUB)
// -------------------------------------------------------------
test("iq-games: renderGamesHub displays all 9 games across 2 thematic categories", () => {
  const mockRoot = createMockEl("div");
  renderGamesHub({
    state: { db: { gameRecords: {} } },
    appRoot: mockRoot
  });

  const html = mockRoot.innerHTML;
  assert.ok(html.includes("CỬU CUNG TRÍ TUỆ"));
  assert.ok(html.includes("Toán Học &amp; Kỹ Năng Tính Toán (5 Trò)"));
  assert.ok(html.includes("Não Bộ &amp; Phát Triển Trí Tuệ IQ (4 Trò)"));

  // Kiểm tra đủ cả 9 đường dẫn game
  assert.ok(html.includes("#games/speed-math"));
  assert.ok(html.includes("#games/bar-model"));
  assert.ok(html.includes("#games/spot-the-bug"));
  assert.ok(html.includes("#games/balance-scale"));
  assert.ok(html.includes("#games/make-24"));
  assert.ok(html.includes("#games/spatial-3d"));
  assert.ok(html.includes("#games/logic-grid"));
  assert.ok(html.includes("#games/rush-hour"));
  assert.ok(html.includes("#games/chimp-memory"));
});
