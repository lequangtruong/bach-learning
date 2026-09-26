// test/tangram.test.mjs - Bộ kiểm thử tự động cho Trò Chơi Xếp Hình Trí Uẩn Tangram
import test from "node:test";
import assert from "node:assert/strict";

import { 
  TANGRAM_PUZZLES, 
  TANGRAM_PIECES_CONFIG, 
  TangramSession, 
  getPiecePolygonPoints 
} from "../js/tangram.js";

import { renderTangramView } from "../js/render-tangram.js";

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
    async click() {
      if (this.disabled) return;
      const fns = [...(listeners["click"] || [])];
      for (const fn of fns) {
        await fn({ target: el, preventDefault: () => {} });
      }
    }
  };
  return el;
}

test("tangram: TANGRAM_PUZZLES bank data integrity and piece configurations", () => {
  assert.ok(TANGRAM_PUZZLES.length >= 19, "Bank should contain at least 19 puzzles");
  const requiredPieces = ["t1", "t2", "tm", "ts1", "ts2", "sq", "para"];

  for (let i = 0; i < TANGRAM_PUZZLES.length; i++) {
    const p = TANGRAM_PUZZLES[i];
    assert.ok(typeof p.id === "string" && p.id.startsWith("tangram-"), `Puzzle ${i} must have valid id`);
    assert.ok(typeof p.name === "string" && p.name.length > 0, `Puzzle ${i} must have name`);
    assert.ok(p.difficulty >= 1 && p.difficulty <= 5, `Puzzle ${i} difficulty must be 1-5`);
    assert.ok(typeof p.silhouettePath === "string" && p.silhouettePath.startsWith("M "), `Puzzle ${i} must have SVG path`);
    assert.ok(typeof p.targetLayout === "object", `Puzzle ${i} must have targetLayout`);

    for (const pieceKey of requiredPieces) {
      const tgt = p.targetLayout[pieceKey];
      assert.ok(tgt, `Puzzle ${p.id} must define target for ${pieceKey}`);
      assert.equal(typeof tgt.x, "number");
      assert.equal(typeof tgt.y, "number");
      assert.equal(typeof tgt.rot, "number");
      assert.equal(typeof tgt.flipped, "boolean");
    }
  }

  // Kiểm tra 7 cấu hình mảnh
  for (const pieceKey of requiredPieces) {
    const cfg = TANGRAM_PIECES_CONFIG[pieceKey];
    assert.ok(cfg, `Piece ${pieceKey} config must exist`);
    assert.ok(typeof cfg.color === "string");
    const pts = getPiecePolygonPoints(cfg.type);
    assert.ok(typeof pts === "string" && pts.length > 0);
  }
});

test("tangram: TangramSession manages rotation, flip, moves and win detection", () => {
  let winEvent = null;
  const session = new TangramSession({
    puzzleIndex: 0,
    onWin: (res) => { winEvent = res; }
  });

  assert.equal(session.puzzleIndex, 0);
  assert.equal(session.isSolved, false);
  assert.equal(session.moveCount, 0);

  // 1. Chọn mảnh và xoay
  session.selectPiece("t1");
  assert.equal(session.selectedPieceId, "t1");
  const initRot = session.pieces.t1.rot;
  session.rotateSelected(45);
  assert.equal(session.pieces.t1.rot, (initRot + 45) % 360);
  assert.equal(session.moveCount, 1);

  // 2. Lật mảnh (chỉ hình bình hành para lật được)
  session.selectPiece("para");
  const initFlip = session.pieces.para.flipped;
  session.flipSelected();
  assert.equal(session.pieces.para.flipped, !initFlip);

  // Thử lật hình vuông (không được)
  session.selectPiece("sq");
  session.flipSelected();
  assert.equal(session.pieces.sq.flipped, false);

  // 3. Di chuyển mảnh
  session.movePiece("t1", 120, 160);
  assert.equal(session.pieces.t1.x, 120);
  assert.equal(session.pieces.t1.y, 160);

  // 4. Giải bài toán bằng cách snap toàn bộ 7 mảnh theo target
  const p = session.currentPuzzle;
  for (const pieceKey of ["t1", "t2", "tm", "ts1", "ts2", "sq", "para"]) {
    session.hintSnapPiece(pieceKey);
  }

  assert.equal(session.isSolved, true);
  assert.ok(winEvent, "onWin callback must be triggered");
  assert.equal(winEvent.puzzleId, p.id);
});

test("tangram: renderTangramView UI buttons interaction audit", async () => {
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

  let saved = false;
  renderTangramView({
    state: { db: { gameRecords: { tangram: { stars: 0, completedPuzzles: [] } } } },
    appRoot: mockRoot,
    saveLocal: async () => { saved = true; },
    puzzleIndex: 0
  });

  // Test tất cả các nút bấm
  await elements["#rotateLeftBtn"].click();
  await elements["#rotateRightBtn"].click();
  await elements["#hintSnapBtn"].click();
  await elements["#resetTangramBtn"].click();
  await elements["#modeOutlineBtn"].click();
  await elements["#modeSilhouetteBtn"].click();
  await elements["#nextPuzzleBtn"].click();
  await elements["#prevPuzzleBtn"].click();

  global.document = savedDoc;
});
