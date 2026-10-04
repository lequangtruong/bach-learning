// js/tangram.js - Logic và Mô hình Toán học cho Trò Chơi Xếp Hình Trí Uẩn Tangram
import { TANGRAM_PUZZLES, TANGRAM_PIECES_CONFIG } from "./tangram-puzzles.js";

export { TANGRAM_PUZZLES, TANGRAM_PIECES_CONFIG };

/**
 * Trả về tọa độ đa giác SVG gốc của từng loại mảnh ghép quanh tâm (0,0)
 */
export function getPiecePolygonPoints(type) {
  switch (type) {
    case "large-triangle":
      // Đáy = 160, chiều cao = 80 (Diện tích = 6400)
      return "-80,40 80,40 0,-40";
    case "med-triangle":
      // Cạnh góc vuông = 80, cạnh huyền = 113.14 (Diện tích = 3200)
      return "-40,40 40,40 -40,-40";
    case "small-triangle":
      // Đáy = 80, chiều cao = 40 (Diện tích = 1600)
      return "-40,20 40,20 0,-20";
    case "square":
      // Cạnh = 40*sqrt(2) ≈ 56.57, đường chéo = 80 (Diện tích = 3200)
      return "0,-40 40,0 0,40 -40,0";
    case "parallelogram":
      // Đáy = 80, cao = 40 (Diện tích = 3200)
      return "-60,20 20,20 60,-20 -20,-20";
    default:
      return "0,0";
  }
}

/**
 * Tạo chuỗi đường bao SVG Silhouette compound path (M ... Z M ... Z)
 * chính xác từ vị trí mục tiêu của các mảnh ghép chuẩn toán học.
 */
export function generateSilhouettePath(targetLayout) {
  if (!targetLayout) return "";
  const pieceTypes = {
    t1: "large-triangle", t2: "large-triangle", tm: "med-triangle",
    ts1: "small-triangle", ts2: "small-triangle", sq: "square", para: "parallelogram"
  };
  const piecePolys = {
    "large-triangle": [[-80, 40], [80, 40], [0, -40]],
    "med-triangle": [[-40, 40], [40, 40], [-40, -40]],
    "small-triangle": [[-40, 20], [40, 20], [0, -20]],
    "square": [[0, -40], [40, 0], [0, 40], [-40, 0]],
    "parallelogram": [[-60, 20], [20, 20], [60, -20], [-20, -20]]
  };
  const subpaths = [];
  for (const [key, target] of Object.entries(targetLayout)) {
    const type = pieceTypes[key];
    const poly = piecePolys[type];
    if (!poly || !target) continue;
    const rad = ((target.rot || 0) * Math.PI) / 180;
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);
    const sx = target.flipped ? -1 : 1;
    const pts = poly.map(([px, py]) => {
      const fx = px * sx;
      const rx = fx * cos - py * sin;
      const ry = fx * sin + py * cos;
      return [Math.round(target.x + rx), Math.round(target.y + ry)];
    });
    if (pts.length > 0) {
      const d = "M " + pts.map(p => `${p[0]} ${p[1]}`).join(" L ") + " Z";
      subpaths.push(d);
    }
  }
  return subpaths.join(" ");
}

export class TangramSession {
  constructor({ puzzleIndex = 0, onWin = null, onStateChange = null } = {}) {
    this.puzzleIndex = Math.max(0, Math.min(TANGRAM_PUZZLES.length - 1, Number(puzzleIndex) || 0));
    this.onWin = onWin;
    this.onStateChange = onStateChange;
    this.selectedPieceId = "t1";
    this.guideMode = "silhouette"; // "silhouette" | "assisted" | "outline"
    this.isSolved = false;
    this.moveCount = 0;
    this.startTime = Date.now();
    this.initPuzzle();
  }

  get currentPuzzle() {
    return TANGRAM_PUZZLES[this.puzzleIndex] || TANGRAM_PUZZLES[0];
  }

  initPuzzle() {
    this.isSolved = false;
    this.moveCount = 0;
    this.startTime = Date.now();
    
    // Khởi tạo vị trí 7 mảnh ở khay xếp chờ (khay dưới/bên cạnh sân chơi)
    // Tọa độ canvas tiêu chuẩn: 360 x 360
    this.pieces = {
      t1: { id: "t1", type: "large-triangle", x: 60, y: 310, rot: 0, flipped: false },
      t2: { id: "t2", type: "large-triangle", x: 150, y: 310, rot: 90, flipped: false },
      tm: { id: "tm", type: "med-triangle", x: 235, y: 310, rot: 45, flipped: false },
      ts1: { id: "ts1", type: "small-triangle", x: 305, y: 310, rot: 0, flipped: false },
      ts2: { id: "ts2", type: "small-triangle", x: 60, y: 250, rot: 180, flipped: false },
      sq: { id: "sq", type: "square", x: 130, y: 250, rot: 0, flipped: false },
      para: { id: "para", type: "parallelogram", x: 220, y: 250, rot: 0, flipped: false }
    };
  }

  selectPiece(pieceId) {
    if (this.pieces[pieceId]) {
      this.selectedPieceId = pieceId;
      this.notifyChange();
    }
  }

  rotateSelected(angleDelta = 45) {
    if (!this.selectedPieceId || !this.pieces[this.selectedPieceId] || this.isSolved) return;
    const p = this.pieces[this.selectedPieceId];
    p.rot = (p.rot + angleDelta + 360) % 360;
    this.moveCount++;
    this.checkWinCondition();
    this.notifyChange();
  }

  flipSelected() {
    if (!this.selectedPieceId || !this.pieces[this.selectedPieceId] || this.isSolved) return;
    const p = this.pieces[this.selectedPieceId];
    if (p.type === "parallelogram") {
      p.flipped = !p.flipped;
      this.moveCount++;
      this.checkWinCondition();
      this.notifyChange();
    }
  }

  movePiece(pieceId, x, y) {
    if (!this.pieces[pieceId] || this.isSolved) return;
    // Giới hạn trong vùng canvas 360 x 360
    this.pieces[pieceId].x = Math.max(30, Math.min(330, Math.round(x)));
    this.pieces[pieceId].y = Math.max(30, Math.min(330, Math.round(y)));
    this.moveCount++;
    this.checkWinCondition();
    this.notifyChange();
  }

  /**
   * Tự động snap mảnh được chọn vào vị trí mục tiêu (Gợi ý 1 bước)
   */
  hintSnapPiece(pieceId) {
    const target = this.currentPuzzle.targetLayout[pieceId];
    if (!target || !this.pieces[pieceId]) return;
    this.pieces[pieceId].x = target.x;
    this.pieces[pieceId].y = target.y;
    this.pieces[pieceId].rot = target.rot;
    this.pieces[pieceId].flipped = !!target.flipped;
    this.checkWinCondition();
    this.notifyChange();
  }

  /**
   * Kiểm tra điều kiện hoàn thành ghép hình
   */
  checkWinCondition() {
    const targets = this.currentPuzzle.targetLayout;
    if (!targets) return false;

    // Dung sai khoảng cách và góc quay
    const DIST_TOLERANCE = 28;

    const checkMatch = (p, t) => {
      if (!p || !t) return false;
      const dx = Math.abs(p.x - t.x);
      const dy = Math.abs(p.y - t.y);
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > DIST_TOLERANCE) return false;

      // Kiểm tra góc quay theo tính chất đối xứng của từng hình
      const dRot = Math.abs((p.rot - t.rot + 360) % 360);
      if (p.type === "square") {
        // Hình vuông đối xứng 90 độ
        return dRot % 90 === 0;
      } else if (p.type === "parallelogram") {
        // Hình bình hành đối xứng 180 độ và cần đúng chiều lật
        return (dRot % 180 === 0) && (!!p.flipped === !!t.flipped);
      } else {
        // Tam giác cần đúng góc quay (sai số 0 hoặc 360)
        return dRot === 0;
      }
    };

    // Kiểm tra từng mảnh, có cho phép tráo đổi giữa t1 & t2, và giữa ts1 & ts2
    const matchT1 = checkMatch(this.pieces.t1, targets.t1) || checkMatch(this.pieces.t1, targets.t2);
    const matchT2 = checkMatch(this.pieces.t2, targets.t2) || checkMatch(this.pieces.t2, targets.t1);
    const matchTm = checkMatch(this.pieces.tm, targets.tm);
    const matchTs1 = checkMatch(this.pieces.ts1, targets.ts1) || checkMatch(this.pieces.ts1, targets.ts2);
    const matchTs2 = checkMatch(this.pieces.ts2, targets.ts2) || checkMatch(this.pieces.ts2, targets.ts1);
    const matchSq = checkMatch(this.pieces.sq, targets.sq);
    const matchPara = checkMatch(this.pieces.para, targets.para);

    const allMatched = matchT1 && matchT2 && matchTm && matchTs1 && matchTs2 && matchSq && matchPara;

    if (allMatched && !this.isSolved) {
      this.isSolved = true;
      if (typeof this.onWin === "function") {
        this.onWin({
          puzzleId: this.currentPuzzle.id,
          puzzleIndex: this.puzzleIndex,
          moves: this.moveCount,
          timeSpent: Math.round((Date.now() - this.startTime) / 1000)
        });
      }
      return true;
    }
    return this.isSolved;
  }

  setGuideMode(mode) {
    if (["silhouette", "assisted", "outline"].includes(mode)) {
      this.guideMode = mode;
      this.notifyChange();
    }
  }

  reset() {
    this.initPuzzle();
    this.notifyChange();
  }

  nextPuzzle() {
    this.puzzleIndex = (this.puzzleIndex + 1) % TANGRAM_PUZZLES.length;
    this.initPuzzle();
    this.notifyChange();
  }

  prevPuzzle() {
    this.puzzleIndex = (this.puzzleIndex - 1 + TANGRAM_PUZZLES.length) % TANGRAM_PUZZLES.length;
    this.initPuzzle();
    this.notifyChange();
  }

  notifyChange() {
    if (typeof this.onStateChange === "function") {
      this.onStateChange(this);
    }
  }
}
