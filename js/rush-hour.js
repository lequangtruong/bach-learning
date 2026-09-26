// js/rush-hour.js - Engine Kẹt Xe Thông Minh (Rush Hour Traffic Jam Engine)
import { RUSH_HOUR_BOARDS } from "./rush-hour-boards.js";
export { RUSH_HOUR_BOARDS };

export const GRID_SIZE = 6;
export const EXIT_ROW = 2;
export const EXIT_COL = 5;

export class RushHourSession {
  constructor(initialIndex = 0) {
    this.currentIndex = Math.max(0, Math.min(initialIndex, RUSH_HOUR_BOARDS.length - 1));
    this.vehicles = [];
    this.moveCount = 0;
    this.history = [];
    this.selectedVehicleId = "R";
    this.initBoard();
  }

  getCurrentBoard() {
    return RUSH_HOUR_BOARDS[this.currentIndex];
  }

  initBoard() {
    const b = this.getCurrentBoard();
    // Deep clone vehicles
    this.vehicles = b.vehicles.map(v => ({ ...v }));
    this.moveCount = 0;
    this.history = [];
    this.selectedVehicleId = "R";
  }

  getVehicle(id) {
    return this.vehicles.find(v => v.id === id);
  }

  /**
   * Tạo ma trận 6x6 chứa ID xe đang chiếm giữ từng ô
   */
  getGrid() {
    const grid = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(null));
    for (const v of this.vehicles) {
      for (let i = 0; i < v.len; i++) {
        const r = v.dir === "V" ? v.row + i : v.row;
        const c = v.dir === "H" ? v.col + i : v.col;
        if (r >= 0 && r < GRID_SIZE && c >= 0 && c < GRID_SIZE) {
          grid[r][c] = v.id;
        }
      }
    }
    return grid;
  }

  canMove(vehicleId, dir) {
    const v = this.getVehicle(vehicleId);
    if (!v) return false;
    const grid = this.getGrid();

    if (v.dir === "H") {
      if (dir === "left") {
        const targetCol = v.col - 1;
        return targetCol >= 0 && grid[v.row][targetCol] === null;
      }
      if (dir === "right") {
        const targetCol = v.col + v.len;
        return targetCol < GRID_SIZE && grid[v.row][targetCol] === null;
      }
      return false;
    } else { // "V"
      if (dir === "up") {
        const targetRow = v.row - 1;
        return targetRow >= 0 && grid[targetRow][v.col] === null;
      }
      if (dir === "down") {
        const targetRow = v.row + v.len;
        return targetRow < GRID_SIZE && grid[targetRow][v.col] === null;
      }
      return false;
    }
  }

  moveVehicle(vehicleId, dir) {
    if (!this.canMove(vehicleId, dir)) {
      return { ok: false, error: "Đường bị chặn hoặc chạm mép bãi xe!" };
    }

    const v = this.getVehicle(vehicleId);
    // Lưu lịch sử để Undo
    this.history.push(this.vehicles.map(item => ({ ...item })));

    if (dir === "left") v.col--;
    else if (dir === "right") v.col++;
    else if (dir === "up") v.row--;
    else if (dir === "down") v.row++;

    this.moveCount++;
    this.selectedVehicleId = vehicleId;

    return {
      ok: true,
      moveCount: this.moveCount,
      isSolved: this.isSolved()
    };
  }

  undo() {
    if (this.history.length === 0) return false;
    const prev = this.history.pop();
    this.vehicles = prev;
    if (this.moveCount > 0) this.moveCount--;
    return true;
  }

  reset() {
    this.initBoard();
  }

  isSolved() {
    const redCar = this.getVehicle("R");
    if (!redCar) return false;
    // Xe đỏ dài 2 ô, nằm ở hàng 2, đến cửa thoát khi đuôi ở cột 4 (đầu ở cột 5)
    return redCar.row === EXIT_ROW && redCar.col + redCar.len - 1 === EXIT_COL;
  }

  nextBoard() {
    if (this.currentIndex < RUSH_HOUR_BOARDS.length - 1) {
      this.currentIndex++;
      this.initBoard();
    }
  }

  prevBoard() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.initBoard();
    }
  }

  setBoardIndex(idx) {
    if (idx >= 0 && idx < RUSH_HOUR_BOARDS.length) {
      this.currentIndex = idx;
      this.initBoard();
    }
  }
}
