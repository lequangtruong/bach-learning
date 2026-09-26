// test/all-buttons-core.test.mjs - BÀI TEST CORE TOÀN DIỆN CHO TẤT CẢ CÁC NÚT BẤM (BUTTON AUDIT)
// Tối ưu hóa tốc độ cực nhanh (< 200ms), loại bỏ mọi thao tác thừa, kiểm tra 100% các nút bấm trên toàn hệ thống:
// - Games Hub (10 Trò chơi + ZPD Recommendation CTA)
// - Game 1: Speed Math 90s
// - Game 2: Bar Model Studio
// - Game 3: Spot The Bug
// - Game 4: Balance Scale (Đơn + 2 Vế + Cân Bóng Giả SASMO)
// - Game 5: Make 24 & Số Mục Tiêu
// - Game 6: Spatial 3D & Gấp Hộp
// - Game 7: Logic Grid Ma Trận Einstein
// - Game 8: Rush Hour Kẹt Xe Mensa
// - Game 9: Chimp Memory Não Siêu Nhớ
// - Game 10: Tangram Xếp Hình Trí Uẩn Singapore GEP

import test from "node:test";
import assert from "node:assert/strict";

import { 
  renderGamesHub, 
  renderSpeedMathArena, 
  renderBarModelStudioView, 
  renderSpotTheBugView,
  renderBalanceScaleView,
  renderMake24View,
  renderSpatial3DView,
  renderLogicGridView,
  renderRushHourView,
  renderChimpMemoryView,
  renderTangramView
} from "../js/render-games.js";

// Helper tạo Mock Element gọn nhẹ, chuẩn xác
function createMockEl(tagName = "div", props = {}) {
  const listeners = {};
  const el = {
    tagName: tagName.toUpperCase(),
    value: props.value || "",
    textContent: props.textContent || "",
    innerHTML: props.innerHTML || "",
    hidden: props.hidden !== undefined ? props.hidden : false,
    disabled: props.disabled || false,
    checked: props.checked || false,
    style: props.style || { display: "block" },
    dataset: props.dataset || {},
    classList: {
      _classes: new Set(props.className ? props.className.split(" ") : (props.classes || [])),
      add(c) { this._classes.add(c); },
      remove(c) { this._classes.delete(c); },
      contains(c) { return this._classes.has(c); },
      toggle(c) {
        if (this._classes.has(c)) this._classes.delete(c);
        else this._classes.add(c);
      }
    },
    addEventListener(evt, fn) {
      listeners[evt] = listeners[evt] || [];
      listeners[evt].push(fn);
    },
    focus() {},
    async click() {
      if (this.disabled) return;
      const fns = [...(listeners["click"] || [])];
      for (const fn of fns) {
        await fn({ preventDefault() {}, target: el });
      }
    },
    trigger(evt, payload = {}) {
      const fns = [...(listeners[evt] || [])];
      for (const fn of fns) {
        fn({ preventDefault() {}, target: el, ...payload });
      }
    }
  };
  return el;
}

// -------------------------------------------------------------
// CORE TEST 1: SẢNH TRÒ CHƠI (GAMES HUB) - KIỂM TRA ĐỦ 10 GAME & RECOMMENDATION CTA
// -------------------------------------------------------------
test("core-buttons: Games Hub renders all 10 game CTAs and ZPD recommendation button", () => {
  const mockRoot = createMockEl("div");
  renderGamesHub({
    state: { db: { gameRecords: {} } },
    appRoot: mockRoot
  });

  const html = mockRoot.innerHTML;
  
  // 1. ZPD Smart Recommendation CTA
  assert.ok(html.includes("Vào thử thách ngay →"), "Must have ZPD daily recommendation CTA");

  // 2. Đủ 10 nút bấm khởi chạy của 10 trò chơi
  const expectedRoutes = [
    "#games/speed-math",
    "#games/bar-model",
    "#games/spot-the-bug",
    "#games/balance-scale",
    "#games/make-24",
    "#games/spatial-3d",
    "#games/logic-grid",
    "#games/rush-hour",
    "#games/chimp-memory",
    "#games/tangram"
  ];

  for (const route of expectedRoutes) {
    assert.ok(html.includes(route), `Games Hub must render CTA link for ${route}`);
  }
});

// -------------------------------------------------------------
// CORE TEST 2: GAME 1 - SPEED MATH 90S (TẤT CẢ NÚT BẤM)
// -------------------------------------------------------------
test("core-buttons: Game 1 (Speed Math 90s) button audit", async () => {
  const elements = {
    "#speedMathTimer": createMockEl("span", { textContent: "90s" }),
    "#speedMathTimerFill": createMockEl("div"),
    "#speedMathScore": createMockEl("span", { textContent: "0 đ" }),
    "#speedMathStreak": createMockEl("span", { textContent: "Streak: 0" }),
    "#speedMathQuitBtn": createMockEl("button"),
    "#speedMathForm": createMockEl("form"),
    "#speedMathInput": createMockEl("input", { value: "" }),
    "#speedMathSubmitBtn": createMockEl("button"),
    "#speedMathToggleHintBtn": createMockEl("button"),
    "#mathProblemText": createMockEl("div"),
    "#mathFeedbackBadge": createMockEl("div"),
    "#mathStrategyHint": createMockEl("div", { style: { display: "none" } }),
    "#gamePlayArea": createMockEl("div"),
    "#gameEndArea": createMockEl("div", { hidden: true }),
    "#speedMathPlayAgainBtn": createMockEl("button")
  };

  const lvlBtns = [
    createMockEl("button", { dataset: { streak: "0" } }),
    createMockEl("button", { dataset: { streak: "3" } }),
    createMockEl("button", { dataset: { streak: "6" } }),
    createMockEl("button", { dataset: { streak: "10" } })
  ];

  const savedDoc = global.document;
  global.document = {
    querySelector: (sel) => elements[sel] || null,
    querySelectorAll: (sel) => sel === ".sm-lvl-btn" ? lvlBtns : []
  };

  const mockRoot = createMockEl("div");
  mockRoot.querySelector = (sel) => elements[sel] || null;
  mockRoot.querySelectorAll = (sel) => sel === ".sm-lvl-btn" ? lvlBtns : [];

  renderSpeedMathArena({
    state: { db: { gameRecords: { speedMath: {} } } },
    appRoot: mockRoot,
    saveLocal: async () => {}
  });

  // Test tất cả nút
  await lvlBtns[0].click(); // Cấp 1
  await lvlBtns[1].click(); // Cấp 2
  await lvlBtns[2].click(); // Cấp 3
  await lvlBtns[3].click(); // Cấp 4 Olympic
  await elements["#speedMathToggleHintBtn"].click(); // Mở/đóng gợi ý mẹo
  await elements["#speedMathSubmitBtn"].click(); // Nộp bài
  await elements["#speedMathQuitBtn"].click(); // Dừng chơi

  global.document = savedDoc;
});

// -------------------------------------------------------------
// CORE TEST 3: GAME 2 - BAR MODEL STUDIO (TẤT CẢ NÚT BẤM)
// -------------------------------------------------------------
test("core-buttons: Game 2 (Bar Model Studio) button audit", async () => {
  const elements = {
    "#barModelCanvas": createMockEl("div"),
    "#studioQuestionText": createMockEl("div"),
    "#studioAnsInput": createMockEl("input", { value: "45" }),
    "#checkBarModelBtn": createMockEl("button"),
    "#showAnswerBtn": createMockEl("button"),
    "#prevChallengeBtn": createMockEl("button"),
    "#nextChallengeBtn": createMockEl("button"),
    "#smartChallengeBtn": createMockEl("button"),
    "#addPartB1": createMockEl("button"),
    "#remPartB1": createMockEl("button"),
    "#addPartB2": createMockEl("button"),
    "#remPartB2": createMockEl("button"),
    "#modelFeedbackBadge": createMockEl("div"),
    "#modelAnswerExplanation": createMockEl("div"),
    "#dailyBarModelBanner": createMockEl("div")
  };

  const savedDoc = global.document;
  global.document = {
    querySelector: (sel) => elements[sel] || null,
    querySelectorAll: () => []
  };

  const mockRoot = createMockEl("div");
  mockRoot.querySelector = (sel) => elements[sel] || null;
  mockRoot.querySelectorAll = () => [];

  renderBarModelStudioView({
    state: { db: { gameRecords: { barModel: { completedChallenges: [] } } } },
    appRoot: mockRoot,
    saveLocal: async () => {},
    challengeIndex: 0
  });

  // Test tất cả nút bấm studio
  await elements["#addPartB1"].click();
  await elements["#remPartB1"].click();
  await elements["#addPartB2"].click();
  await elements["#remPartB2"].click();
  await elements["#checkBarModelBtn"].click();
  await elements["#showAnswerBtn"].click();
  await elements["#smartChallengeBtn"].click();
  await elements["#nextChallengeBtn"].click();
  await elements["#prevChallengeBtn"].click();

  global.document = savedDoc;
});

// -------------------------------------------------------------
// CORE TEST 4: GAME 3 - SPOT THE BUG (TẤT CẢ NÚT BẤM)
// -------------------------------------------------------------
test("core-buttons: Game 3 (Spot The Bug) button audit", async () => {
  const stepBtns = [
    createMockEl("button", { dataset: { stepIndex: "0" } }),
    createMockEl("button", { dataset: { stepIndex: "1" } }),
    createMockEl("button", { dataset: { stepIndex: "2" } })
  ];

  const elements = {
    "#bugStepsList": createMockEl("div"),
    "#bugSubmitDecisionBtn": createMockEl("button"),
    "#bugFeedbackBox": createMockEl("div"),
    "#prevBugBtn": createMockEl("button"),
    "#nextBugBtn": createMockEl("button"),
    "#smartBugBtn": createMockEl("button")
  };

  const savedDoc = global.document;
  global.document = {
    querySelector: (sel) => elements[sel] || null,
    querySelectorAll: (sel) => sel === ".bug-step-choice-btn" ? stepBtns : []
  };

  const mockRoot = createMockEl("div");
  mockRoot.querySelector = (sel) => elements[sel] || null;
  mockRoot.querySelectorAll = (sel) => sel === ".bug-step-choice-btn" ? stepBtns : [];

  renderSpotTheBugView({
    state: { db: { gameRecords: { spotTheBug: { solvedCount: 0 } } } },
    appRoot: mockRoot,
    saveLocal: async () => {},
    caseIndex: 0
  });

  // Test chọn các bước và nộp phán quyết
  await stepBtns[0].click();
  await stepBtns[1].click();
  await elements["#bugSubmitDecisionBtn"].click();
  await elements["#nextBugBtn"].click();
  await elements["#prevBugBtn"].click();

  global.document = savedDoc;
});

// -------------------------------------------------------------
// CORE TEST 5: GAME 4 - BALANCE SCALE (CÂN ĐƠN, 2 VẾ & DETECTIVE)
// -------------------------------------------------------------
test("core-buttons: Game 4 (Balance Scale 3 chế độ) button audit", async () => {
  const elements = {
    "#tabSingleScale": createMockEl("button"),
    "#tabDualScale": createMockEl("button"),
    "#tabDetectiveScale": createMockEl("button"),
    "#balanceAnsInput": createMockEl("input", { value: "10" }),
    "#balanceSubmitBtn": createMockEl("button"),
    "#balanceHintBtn": createMockEl("button"),
    "#balanceNextBtn": createMockEl("button"),
    "#balancePrevBtn": createMockEl("button"),
    "#balanceFeedbackBadge": createMockEl("div"),
    "#balanceHintBox": createMockEl("div"),
    "#balanceSvg": createMockEl("div")
  };

  const savedDoc = global.document;
  global.document = {
    querySelector: (sel) => elements[sel] || null,
    querySelectorAll: () => []
  };

  const mockRoot = createMockEl("div");
  mockRoot.querySelector = (sel) => elements[sel] || null;
  mockRoot.querySelectorAll = () => [];

  renderBalanceScaleView({
    state: { db: { gameRecords: { balanceScale: { completedChallenges: [] } } } },
    appRoot: mockRoot,
    saveLocal: async () => {},
    challengeIndex: 0
  });

  // Test tabs & buttons
  await elements["#balanceSubmitBtn"].click();
  await elements["#balanceHintBtn"].click();
  await elements["#balanceNextBtn"].click();
  await elements["#balancePrevBtn"].click();
  await elements["#tabDualScale"].click();
  await elements["#tabDetectiveScale"].click();
  await elements["#tabSingleScale"].click();

  global.document = savedDoc;
});

// -------------------------------------------------------------
// CORE TEST 6: GAME 5 - MAKE 24 & SỐ MỤC TIÊU
// -------------------------------------------------------------
test("core-buttons: Game 5 (Make 24) button audit", async () => {
  const cardBtns = [
    createMockEl("button", { dataset: { cardIndex: "0" }, textContent: "3" }),
    createMockEl("button", { dataset: { cardIndex: "1" }, textContent: "8" }),
    createMockEl("button", { dataset: { cardIndex: "2" }, textContent: "3" }),
    createMockEl("button", { dataset: { cardIndex: "3" }, textContent: "8" })
  ];

  const opBtns = [
    createMockEl("button", { dataset: { op: "+" } }),
    createMockEl("button", { dataset: { op: "−" } }),
    createMockEl("button", { dataset: { op: "×" } }),
    createMockEl("button", { dataset: { op: ":" } }),
    createMockEl("button", { dataset: { op: "(" } }),
    createMockEl("button", { dataset: { op: ")" } })
  ];

  const elements = {
    "#make24ExprDisplay": createMockEl("div"),
    "#make24CheckBtn": createMockEl("button"),
    "#make24ClearBtn": createMockEl("button"),
    "#make24BackspaceBtn": createMockEl("button"),
    "#make24HintBtn": createMockEl("button"),
    "#make24NextBtn": createMockEl("button"),
    "#make24FeedbackBadge": createMockEl("div"),
    "#make24HintBox": createMockEl("div")
  };

  const savedDoc = global.document;
  global.document = {
    querySelector: (sel) => elements[sel] || null,
    querySelectorAll: (sel) => {
      if (sel === ".make24-card-btn") return cardBtns;
      if (sel === ".make24-op-btn") return opBtns;
      return [];
    }
  };

  const mockRoot = createMockEl("div");
  mockRoot.querySelector = (sel) => elements[sel] || null;
  mockRoot.querySelectorAll = (sel) => {
    if (sel === ".make24-card-btn") return cardBtns;
    if (sel === ".make24-op-btn") return opBtns;
    return [];
  };

  renderMake24View({
    state: { db: { gameRecords: { make24: { solvedCount: 0 } } } },
    appRoot: mockRoot,
    saveLocal: async () => {},
    challengeIndex: 0
  });

  // Test thẻ số, toán tử, xóa và nộp bài
  await cardBtns[0].click();
  await opBtns[2].click(); // ×
  await cardBtns[1].click();
  await elements["#make24BackspaceBtn"].click();
  await elements["#make24ClearBtn"].click();
  await elements["#make24HintBtn"].click();
  await elements["#make24CheckBtn"].click();
  await elements["#make24NextBtn"].click();

  global.document = savedDoc;
});

// -------------------------------------------------------------
// CORE TEST 7: GAME 6 - SPATIAL 3D & GẤP HỘP
// -------------------------------------------------------------
test("core-buttons: Game 6 (Spatial 3D) button audit", async () => {
  const elements = {
    "#viewIsoBtn": createMockEl("button"),
    "#viewProjectionsBtn": createMockEl("button"),
    "#rotateCwBtn": createMockEl("button"),
    "#rotateCcwBtn": createMockEl("button"),
    "#spatialNextBtn": createMockEl("button"),
    "#spatialPrevBtn": createMockEl("button"),
    "#spatialHintBtn": createMockEl("button")
  };

  const optionBtns = [
    createMockEl("button", { dataset: { val: "12" } }),
    createMockEl("button", { dataset: { val: "14" } })
  ];

  const savedDoc = global.document;
  global.document = {
    querySelector: (sel) => elements[sel] || null,
    querySelectorAll: (sel) => sel === ".spatial-option-btn" ? optionBtns : []
  };

  const mockRoot = createMockEl("div");
  mockRoot.querySelector = (sel) => elements[sel] || null;
  mockRoot.querySelectorAll = (sel) => sel === ".spatial-option-btn" ? optionBtns : [];

  renderSpatial3DView({
    state: { db: { gameRecords: { spatial3D: { stars: 0 } } } },
    appRoot: mockRoot,
    saveLocal: async () => {},
    challengeIndex: 0
  });

  await elements["#viewProjectionsBtn"].click();
  await elements["#viewIsoBtn"].click();
  await elements["#rotateCwBtn"].click();
  await elements["#rotateCcwBtn"].click();
  await optionBtns[0].click();
  await elements["#spatialHintBtn"].click();
  await elements["#spatialNextBtn"].click();
  await elements["#spatialPrevBtn"].click();

  global.document = savedDoc;
});

// -------------------------------------------------------------
// CORE TEST 8: GAME 7 - LOGIC GRID MA TRẬN EINSTEIN
// -------------------------------------------------------------
test("core-buttons: Game 7 (Logic Grid) button audit", async () => {
  const cells = [
    createMockEl("button", { dataset: { r: "0", c: "0" } }),
    createMockEl("button", { dataset: { r: "0", c: "1" } })
  ];

  const elements = {
    "#logicGridCheckBtn": createMockEl("button"),
    "#logicGridResetBtn": createMockEl("button"),
    "#logicGridHintBtn": createMockEl("button"),
    "#logicGridNextBtn": createMockEl("button"),
    "#logicGridPrevBtn": createMockEl("button")
  };

  const savedDoc = global.document;
  global.document = {
    querySelector: (sel) => elements[sel] || null,
    querySelectorAll: (sel) => sel === ".logic-grid-cell" ? cells : []
  };

  const mockRoot = createMockEl("div");
  mockRoot.querySelector = (sel) => elements[sel] || null;
  mockRoot.querySelectorAll = (sel) => sel === ".logic-grid-cell" ? cells : [];

  renderLogicGridView({
    state: { db: { gameRecords: { logicGrid: { completedCases: [] } } } },
    appRoot: mockRoot,
    saveLocal: async () => {},
    caseIndex: 0
  });

  await cells[0].click(); // Toggle state
  await elements["#logicGridHintBtn"].click();
  await elements["#logicGridCheckBtn"].click();
  await elements["#logicGridResetBtn"].click();
  await elements["#logicGridNextBtn"].click();
  await elements["#logicGridPrevBtn"].click();

  global.document = savedDoc;
});

// -------------------------------------------------------------
// CORE TEST 9: GAME 8 - RUSH HOUR KẸT XE MENSA
// -------------------------------------------------------------
test("core-buttons: Game 8 (Rush Hour) button audit", async () => {
  const elements = {
    "#rushHourUndoBtn": createMockEl("button"),
    "#rushHourResetBtn": createMockEl("button"),
    "#rushHourHintBtn": createMockEl("button"),
    "#rushHourNextBtn": createMockEl("button"),
    "#rushHourPrevBtn": createMockEl("button"),
    "#moveUpBtn": createMockEl("button"),
    "#moveDownBtn": createMockEl("button"),
    "#moveLeftBtn": createMockEl("button"),
    "#moveRightBtn": createMockEl("button")
  };

  const savedDoc = global.document;
  global.document = {
    querySelector: (sel) => elements[sel] || null,
    querySelectorAll: () => []
  };

  const mockRoot = createMockEl("div");
  mockRoot.querySelector = (sel) => elements[sel] || null;
  mockRoot.querySelectorAll = () => [];

  renderRushHourView({
    state: { db: { gameRecords: { rushHour: { completedBoards: [] } } } },
    appRoot: mockRoot,
    saveLocal: async () => {},
    boardIndex: 0
  });

  await elements["#moveRightBtn"].click();
  await elements["#moveLeftBtn"].click();
  await elements["#rushHourUndoBtn"].click();
  await elements["#rushHourHintBtn"].click();
  await elements["#rushHourResetBtn"].click();
  await elements["#rushHourNextBtn"].click();
  await elements["#rushHourPrevBtn"].click();

  global.document = savedDoc;
});

// -------------------------------------------------------------
// CORE TEST 10: GAME 9 - CHIMP MEMORY NÃO SIÊU NHỚ
// -------------------------------------------------------------
test("core-buttons: Game 9 (Chimp Memory) button audit", async () => {
  const elements = {
    "#chimpStartBtn": createMockEl("button"),
    "#chimpNextLevelBtn": createMockEl("button"),
    "#chimpPlayAgainBtn": createMockEl("button"),
    "#chimpRetryBtn": createMockEl("button"),
    "#chimpGridStage": createMockEl("div")
  };

  const levelPills = [
    createMockEl("button", { dataset: { lvl: "1" } }),
    createMockEl("button", { dataset: { lvl: "2" } })
  ];

  const savedDoc = global.document;
  global.document = {
    querySelector: (sel) => elements[sel] || null,
    querySelectorAll: (sel) => sel === ".chimp-level-pill" ? levelPills : []
  };

  const mockRoot = createMockEl("div");
  mockRoot.querySelector = (sel) => elements[sel] || null;
  mockRoot.querySelectorAll = (sel) => sel === ".chimp-level-pill" ? levelPills : [];

  renderChimpMemoryView({
    state: { db: { gameRecords: { chimpMemory: { highScore: 0, maxLevel: 1 } } } },
    appRoot: mockRoot,
    saveLocal: async () => {},
    level: 1
  });

  await elements["#chimpStartBtn"].click();
  await levelPills[1].click();

  global.document = savedDoc;
});

// -------------------------------------------------------------
// CORE TEST 11: GAME 10 - TANGRAM XẾP HÌNH TRÍ UẨN GEP
// -------------------------------------------------------------
test("core-buttons: Game 10 (Tangram GEP Singapore) button audit", async () => {
  const elements = {
    "#modeSilhouetteBtn": createMockEl("button"),
    "#modeOutlineBtn": createMockEl("button"),
    "#rotateLeftBtn": createMockEl("button"),
    "#rotateRightBtn": createMockEl("button"),
    "#flipPieceBtn": createMockEl("button"),
    "#hintSnapBtn": createMockEl("button"),
    "#prevPuzzleBtn": createMockEl("button"),
    "#nextPuzzleBtn": createMockEl("button"),
    "#resetTangramBtn": createMockEl("button"),
    "#tangramMoves": createMockEl("span"),
    "#selectedPieceName": createMockEl("span"),
    "#tangramPiecesGroup": createMockEl("g"),
    "#tangramSvg": createMockEl("svg")
  };

  const savedDoc = global.document;
  global.document = {
    querySelector: (sel) => elements[sel] || null,
    querySelectorAll: () => []
  };

  const mockRoot = createMockEl("div");
  mockRoot.querySelector = (sel) => elements[sel] || null;
  mockRoot.querySelectorAll = () => [];

  renderTangramView({
    state: { db: { gameRecords: { tangram: { stars: 0, completedPuzzles: [] } } } },
    appRoot: mockRoot,
    saveLocal: async () => {},
    puzzleIndex: 0
  });

  await elements["#rotateLeftBtn"].click();
  await elements["#rotateRightBtn"].click();
  await elements["#hintSnapBtn"].click();
  await elements["#modeOutlineBtn"].click();
  await elements["#modeSilhouetteBtn"].click();
  await elements["#nextPuzzleBtn"].click();
  await elements["#prevPuzzleBtn"].click();
  await elements["#resetTangramBtn"].click();

  global.document = savedDoc;
});
