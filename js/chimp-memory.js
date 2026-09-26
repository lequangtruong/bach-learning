// js/chimp-memory.js - Engine Não Siêu Nhớ (Chimp Memory Test Engine)
// Thí nghiệm trí nhớ ngắn hạn không gian của Viện Nghiên cứu Linh trưởng Đại học Kyoto (Giáo sư Matsuzawa & Ayumu)

export const CHIMP_LEVELS = [
  { level: 1, count: 4, gridSize: 4, flashMs: 2000, title: "Cấp 1: Khởi Động (4 số - Lưới 4x4)" },
  { level: 2, count: 5, gridSize: 4, flashMs: 1800, title: "Cấp 2: Vừa Sức (5 số - Lưới 4x4)" },
  { level: 3, count: 6, gridSize: 4, flashMs: 1600, title: "Cấp 3: Nhanh Mắt (6 số - Lưới 4x4)" },
  { level: 4, count: 6, gridSize: 5, flashMs: 1500, title: "Cấp 4: Mở Rộng Không Gian (6 số - Lưới 5x5)" },
  { level: 5, count: 7, gridSize: 5, flashMs: 1500, title: "Cấp 5: Thách Thức Não Bộ (7 số - Lưới 5x5)" },
  { level: 6, count: 8, gridSize: 5, flashMs: 1400, title: "Cấp 6: Siêu Trí Nhớ (8 số - Lưới 5x5)" },
  { level: 7, count: 9, gridSize: 5, flashMs: 1300, title: "Cấp 7: Ngang Ngửa Ayumu (9 số - Lưới 5x5)" },
  { level: 8, count: 9, gridSize: 6, flashMs: 1200, title: "Cấp 8: Bậc Thầy Kyoto (9 số - Lưới 6x6)" }
];

export const GAME_STATE = {
  IDLE: "IDLE",
  MEMORIZING: "MEMORIZING",
  RECALLING: "RECALLING",
  SUCCESS: "SUCCESS",
  FAILED: "FAILED"
};

export class ChimpMemorySession {
  constructor(initialLevel = 1) {
    this.currentLevel = Math.max(1, Math.min(initialLevel, CHIMP_LEVELS.length));
    this.state = GAME_STATE.IDLE;
    this.tiles = []; // Danh sách các ô có số [{ r, c, val, revealed }]
    this.nextExpectedVal = 1;
    this.mistakeTile = null;
    this.score = 0;
    this.streak = 0;
    this.timerId = null;
  }

  getLevelConfig() {
    return CHIMP_LEVELS[this.currentLevel - 1];
  }

  /**
   * Bắt đầu một vòng đấu mới: Sinh vị trí ngẫu nhiên không trùng nhau
   */
  startRound() {
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }

    const cfg = this.getLevelConfig();
    const totalCells = cfg.gridSize * cfg.gridSize;
    const indices = [];
    for (let i = 0; i < totalCells; i++) indices.push(i);

    // Xáo trộn mảng Fisher-Yates
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    const chosen = indices.slice(0, cfg.count);
    this.tiles = chosen.map((cellIdx, numIdx) => {
      const r = Math.floor(cellIdx / cfg.gridSize);
      const c = cellIdx % cfg.gridSize;
      return {
        r,
        c,
        val: numIdx + 1, // Số từ 1 đến N
        revealed: false
      };
    });

    this.state = GAME_STATE.MEMORIZING;
    this.nextExpectedVal = 1;
    this.mistakeTile = null;

    return {
      state: this.state,
      flashMs: cfg.flashMs,
      count: cfg.count,
      gridSize: cfg.gridSize
    };
  }

  /**
   * Chuyển sang trạng thái RECALLING: Các số ẩn đi thành ô trắng
   */
  hideNumbers() {
    if (this.state === GAME_STATE.MEMORIZING) {
      this.state = GAME_STATE.RECALLING;
    }
  }

  /**
   * Chạm vào một ô trên lưới tại tọa độ (r, c)
   */
  tapTile(r, c) {
    if (this.state !== GAME_STATE.RECALLING) {
      return { ok: false, state: this.state };
    }

    const tile = this.tiles.find(t => t.r === r && t.c === c);
    // Nếu chạm vào ô trống không có số
    if (!tile) {
      return { ok: false, error: "Ô trống!", state: this.state };
    }

    // Nếu ô đã được bấm rồi
    if (tile.revealed) {
      return { ok: true, alreadyRevealed: true, state: this.state };
    }

    // Kiểm tra có đúng số tiếp theo hay không
    if (tile.val === this.nextExpectedVal) {
      tile.revealed = true;
      this.nextExpectedVal++;

      const cfg = this.getLevelConfig();
      if (this.nextExpectedVal > cfg.count) {
        // Hoàn thành xuất sắc vòng đấu!
        this.state = GAME_STATE.SUCCESS;
        this.score += cfg.count * 10;
        this.streak++;
        return {
          ok: true,
          isCorrect: true,
          isCompleted: true,
          state: this.state,
          score: this.score,
          streak: this.streak
        };
      }

      return {
        ok: true,
        isCorrect: true,
        isCompleted: false,
        nextExpected: this.nextExpectedVal,
        state: this.state
      };
    } else {
      // Bấm sai số! Thua vòng này
      this.state = GAME_STATE.FAILED;
      this.mistakeTile = { r, c, val: tile.val, expected: this.nextExpectedVal };
      this.streak = 0;

      // Tiết lộ toàn bộ các số để người chơi quan sát lại
      this.tiles.forEach(t => t.revealed = true);

      return {
        ok: true,
        isCorrect: false,
        mistake: this.mistakeTile,
        state: this.state
      };
    }
  }

  setLevel(lvl) {
    if (lvl >= 1 && lvl <= CHIMP_LEVELS.length) {
      this.currentLevel = lvl;
      this.state = GAME_STATE.IDLE;
      this.tiles = [];
    }
  }

  nextLevel() {
    if (this.currentLevel < CHIMP_LEVELS.length) {
      this.currentLevel++;
      this.state = GAME_STATE.IDLE;
      this.tiles = [];
    }
  }

  prevLevel() {
    if (this.currentLevel > 1) {
      this.currentLevel--;
      this.state = GAME_STATE.IDLE;
      this.tiles = [];
    }
  }
}
