// test/tangram.test.mjs - Bộ kiểm thử tự động cho Trò Chơi Xếp Hình Trí Uẩn Tangram
import test from "node:test";
import assert from "node:assert/strict";

import { 
  TANGRAM_PUZZLES, 
  TANGRAM_PIECES_CONFIG, 
  TangramSession, 
  getPiecePolygonPoints,
  generateSilhouettePath
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

test("tangram: standard mathematical proportions, areas, and generateSilhouettePath", () => {
  function polygonArea(pts) {
    let area = 0;
    for (let i = 0; i < pts.length; i++) {
      const j = (i + 1) % pts.length;
      area += pts[i][0] * pts[j][1] - pts[j][0] * pts[i][1];
    }
    return Math.abs(area) / 2;
  }
  function parsePolyString(str) {
    return str.trim().split(/\s+/).map(pair => pair.split(",").map(Number));
  }

  const largeArea = polygonArea(parsePolyString(getPiecePolygonPoints("large-triangle")));
  const medArea = polygonArea(parsePolyString(getPiecePolygonPoints("med-triangle")));
  const smallArea = polygonArea(parsePolyString(getPiecePolygonPoints("small-triangle")));
  const squareArea = polygonArea(parsePolyString(getPiecePolygonPoints("square")));
  const paraArea = polygonArea(parsePolyString(getPiecePolygonPoints("parallelogram")));

  assert.equal(largeArea, 6400, "Large triangle area must be 6400");
  assert.equal(medArea, 3200, "Medium triangle area must be 3200");
  assert.equal(smallArea, 1600, "Small triangle area must be 1600");
  assert.equal(squareArea, 3200, "Square area must be 3200");
  assert.equal(paraArea, 3200, "Parallelogram area must be 3200");

  const totalArea = largeArea * 2 + medArea + smallArea * 2 + squareArea + paraArea;
  assert.equal(totalArea, 25600, "Total Tangram area must sum exactly to 25600 (160^2)");

  const sil = generateSilhouettePath(TANGRAM_PUZZLES[0].targetLayout);
  assert.ok(typeof sil === "string" && sil.startsWith("M "), "generateSilhouettePath must return SVG path starting with M");
});

test("tangram: all 19 puzzles have zero interior overlap (SAT) and fit within standard canvas", () => {
  function parsePolyString(str) {
    return str.trim().split(/\s+/).map(pair => pair.split(",").map(Number));
  }
  function transformPolygon(localPts, target) {
    const rad = ((target.rot || 0) * Math.PI) / 180;
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);
    const sx = target.flipped ? -1 : 1;
    return localPts.map(([px, py]) => {
      const fx = px * sx;
      const rx = fx * cos - py * sin;
      const ry = fx * sin + py * cos;
      return [Math.round(target.x + rx), Math.round(target.y + ry)];
    });
  }
  function satOverlap(poly1, poly2, eps = 0.5) {
    for (const poly of [poly1, poly2]) {
      for (let i = 0; i < poly.length; i++) {
        const j = (i + 1) % poly.length;
        const edge = [poly[j][0] - poly[i][0], poly[j][1] - poly[i][1]];
        const normal = [-edge[1], edge[0]];
        const len = Math.hypot(normal[0], normal[1]);
        if (len === 0) continue;
        const nx = normal[0] / len;
        const ny = normal[1] / len;
        const dots1 = poly1.map(p => p[0] * nx + p[1] * ny);
        const dots2 = poly2.map(p => p[0] * nx + p[1] * ny);
        if (Math.max(...dots1) <= Math.min(...dots2) + eps || Math.max(...dots2) <= Math.min(...dots1) + eps) {
          return false;
        }
      }
    }
    return true;
  }

  const pieceTypes = {
    t1: "large-triangle", t2: "large-triangle", tm: "med-triangle",
    ts1: "small-triangle", ts2: "small-triangle", sq: "square", para: "parallelogram"
  };

  for (const puzzle of TANGRAM_PUZZLES) {
    const polys = {};
    for (const [key, tgt] of Object.entries(puzzle.targetLayout)) {
      const localPts = parsePolyString(getPiecePolygonPoints(pieceTypes[key]));
      const worldPts = transformPolygon(localPts, tgt);
      polys[key] = worldPts;

      // Giới hạn trong vùng canvas 360x360 với viền đệm 20px
      for (const [x, y] of worldPts) {
        assert.ok(x >= 20 && x <= 340, `Puzzle ${puzzle.id} piece ${key} vertex X ${x} out of bounds`);
        assert.ok(y >= 20 && y <= 340, `Puzzle ${puzzle.id} piece ${key} vertex Y ${y} out of bounds`);
      }
    }

    const keys = Object.keys(polys);
    for (let i = 0; i < keys.length; i++) {
      for (let j = i + 1; j < keys.length; j++) {
        const k1 = keys[i];
        const k2 = keys[j];
        const overlaps = satOverlap(polys[k1], polys[k2]);
        assert.equal(overlaps, false, `Puzzle ${puzzle.id} pieces ${k1} and ${k2} must not overlap`);
      }
    }
  }
});

test("tangram: all 19 puzzles win successfully when snapped to targets", () => {
  for (let i = 0; i < TANGRAM_PUZZLES.length; i++) {
    const p = TANGRAM_PUZZLES[i];
    let winEvent = null;
    const session = new TangramSession({
      puzzleIndex: i,
      onWin: (res) => { winEvent = res; }
    });
    for (const pieceKey of ["t1", "t2", "tm", "ts1", "ts2", "sq", "para"]) {
      session.hintSnapPiece(pieceKey);
    }
    assert.equal(session.isSolved, true, `Puzzle ${p.id} must be marked solved`);
    assert.ok(winEvent, `Puzzle ${p.id} must trigger win event`);
    assert.equal(winEvent.puzzleId, p.id);
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
