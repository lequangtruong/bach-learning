// js/logic-grid.js - Engine Bảng Lưới Thám Tử (Logic Grid Detective Engine)
import { LOGIC_GRID_CASES } from "./logic-grid-cases.js";
export { LOGIC_GRID_CASES };

export const CELL_STATE = {
  EMPTY: 0,
  CROSS: 1, // ❌ Loại trừ
  CHECK: 2  // ✅ Khẳng định
};

export class LogicGridSession {
  constructor(initialIndex = 0) {
    this.currentIndex = Math.max(0, Math.min(initialIndex, LOGIC_GRID_CASES.length - 1));
    this.gridState = {}; // { [rowItem]: { [colItem]: state } }
    this.initGridForCase();
  }

  getCurrentCase() {
    return LOGIC_GRID_CASES[this.currentIndex];
  }

  initGridForCase() {
    const c = this.getCurrentCase();
    this.gridState = {};
    for (const r of c.rows.items) {
      this.gridState[r] = {};
      for (const col of c.cols.items) {
        this.gridState[r][col] = CELL_STATE.EMPTY;
      }
    }
  }

  getCellState(rowItem, colItem) {
    return this.gridState[rowItem]?.[colItem] ?? CELL_STATE.EMPTY;
  }

  /**
   * Chạm vào ô: Chuyển đổi trạng thái Trống (0) -> ❌ (1) -> ✅ (2) -> Trống (0)
   * Khi đánh dấu ✅ (2), tự động điền ❌ vào các ô còn lại trên cùng hàng và cùng cột.
   */
  toggleCell(rowItem, colItem) {
    if (!this.gridState[rowItem] || this.gridState[rowItem][colItem] === undefined) {
      return CELL_STATE.EMPTY;
    }

    const cur = this.gridState[rowItem][colItem];
    let nextState = CELL_STATE.EMPTY;

    if (cur === CELL_STATE.EMPTY) {
      nextState = CELL_STATE.CROSS; // Bấm 1 lần: Gạch chéo loại trừ
    } else if (cur === CELL_STATE.CROSS) {
      nextState = CELL_STATE.CHECK; // Bấm lần 2: Đánh dấu đúng
    } else {
      nextState = CELL_STATE.EMPTY; // Bấm lần 3: Xóa trắng
    }

    this.gridState[rowItem][colItem] = nextState;

    // Tiện ích thông minh: Nếu đánh dấu ✅, tự động điền ❌ cho các ô khác cùng hàng và cùng cột
    if (nextState === CELL_STATE.CHECK) {
      const c = this.getCurrentCase();
      // Các ô khác cùng hàng
      for (const otherCol of c.cols.items) {
        if (otherCol !== colItem && this.gridState[rowItem][otherCol] === CELL_STATE.EMPTY) {
          this.gridState[rowItem][otherCol] = CELL_STATE.CROSS;
        }
      }
      // Các ô khác cùng cột
      for (const otherRow of c.rows.items) {
        if (otherRow !== rowItem && this.gridState[otherRow][colItem] === CELL_STATE.EMPTY) {
          this.gridState[otherRow][colItem] = CELL_STATE.CROSS;
        }
      }
    }

    return nextState;
  }

  resetGrid() {
    this.initGridForCase();
  }

  checkSolution() {
    const c = this.getCurrentCase();
    const sol = c.solution;
    let matched = 0;
    const total = Object.keys(sol).length;
    let hasMistake = false;
    let extraChecks = 0;

    // Kiểm tra toàn bộ các ô trong lưới để bảo đảm tính duy nhất (1-1 matching)
    for (const r of c.rows.items) {
      for (const col of c.cols.items) {
        const st = this.gridState[r]?.[col];
        const isTarget = sol[r] === col;
        if (isTarget) {
          if (st === CELL_STATE.CHECK) {
            matched++;
          } else if (st === CELL_STATE.CROSS) {
            hasMistake = true;
          }
        } else {
          // Ô không phải đáp án: TUYỆT ĐỐI KHÔNG ĐƯỢC đánh dấu CHECK (vi phạm loại trừ)
          if (st === CELL_STATE.CHECK) {
            hasMistake = true;
            extraChecks++;
          }
        }
      }
    }

    const isFullyCorrect = matched === total && !hasMistake && extraChecks === 0;

    return {
      ok: true,
      isCorrect: isFullyCorrect,
      matchedCount: matched,
      totalCount: total,
      explanation: c.explanation,
      hasMistake: hasMistake || extraChecks > 0,
      extraChecks
    };
  }

  nextCase() {
    if (this.currentIndex < LOGIC_GRID_CASES.length - 1) {
      this.currentIndex++;
      this.initGridForCase();
    }
  }

  prevCase() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.initGridForCase();
    }
  }

  setCaseIndex(idx) {
    if (idx >= 0 && idx < LOGIC_GRID_CASES.length) {
      this.currentIndex = idx;
      this.initGridForCase();
    }
  }
}
