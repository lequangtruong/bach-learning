// js/badge-system.js - Hệ thống Huy Chương & Cột Mốc Vinh Quang cho Bách
// Tôn vinh các bước tiến nhận thức xuất sắc, tạo động lực nội tại vững chắc.

export const BADGES_DEFINITION = [
  {
    id: "speed_demon",
    title: "Tia Chớp Phản Xạ",
    pillar: "speed",
    icon: "⚡",
    rank: "Silver",
    description: "Đạt từ 300 điểm trở lên trong Đấu tính nhẩm 90 giây.",
    check: (records) => (records.speedMath?.highScore || 0) >= 300,
    progress: (records) => Math.min(100, Math.round(((records.speedMath?.highScore || 0) / 300) * 100))
  },
  {
    id: "streak_master",
    title: "Kỷ Lục Gia Chuỗi",
    pillar: "speed",
    icon: "🔥",
    rank: "Gold",
    description: "Đạt chuỗi trả lời đúng (Streak) liên tiếp từ 8 câu trong Đấu tính nhẩm.",
    check: (records) => (records.speedMath?.bestStreak || 0) >= 8,
    progress: (records) => Math.min(100, Math.round(((records.speedMath?.bestStreak || 0) / 8) * 100))
  },
  {
    id: "bar_architect",
    title: "Kỹ Sư Sơ Đồ Singapore",
    pillar: "math",
    icon: "🧱",
    rank: "Gold",
    description: "Tự tay dựng đúng và hoàn thành 10 thử thách trong Mini Bar Model Studio.",
    check: (records) => (records.barModel?.completedChallenges?.length || 0) >= 10,
    progress: (records) => Math.min(100, Math.round(((records.barModel?.completedChallenges?.length || 0) / 10) * 100))
  },
  {
    id: "eagle_sleuth",
    title: "Thám Tử Tinh Tường",
    pillar: "math",
    icon: "🕵️",
    rank: "Silver",
    description: "Phản biện và bắt đúng lỗi sai trong 10 vụ án Toán học lớp 4.",
    check: (records) => (records.spotTheBug?.solvedCount || 0) >= 10,
    progress: (records) => Math.min(100, Math.round(((records.spotTheBug?.solvedCount || 0) / 10) * 100))
  },
  {
    id: "balance_wizard",
    title: "Phù Thủy Thăng Bằng",
    pillar: "math",
    icon: "⚖️",
    rank: "Gold",
    description: "Chinh phục 10 bài toán Cân Bằng (bao gồm giải mã cân 2 vế hoặc cân bóng giả SASMO).",
    check: (records) => (records.balanceScale?.completedChallenges?.length || 0) >= 10,
    progress: (records) => Math.min(100, Math.round(((records.balanceScale?.completedChallenges?.length || 0) / 10) * 100))
  },
  {
    id: "make24_sniper",
    title: "Xạ Thủ Biểu Thức 24",
    pillar: "math",
    icon: "🎯",
    rank: "Gold",
    description: "Kết hợp thành công 10 bộ số Make 24 với các số mục tiêu phong phú.",
    check: (records) => ((records.make24?.solvedCount || records.make24?.completedChallenges?.length || 0) >= 10),
    progress: (records) => Math.min(100, Math.round(((records.make24?.solvedCount || records.make24?.completedChallenges?.length || 0) / 10) * 100))
  },
  {
    id: "spatial_master",
    title: "Kiến Trúc Sư 3 Chiều",
    pillar: "spatial",
    icon: "🧊",
    rank: "Olympic",
    description: "Đạt ít nhất 10 sao trong Thám Tử Khối 3D & Gấp Hộp chuẩn GEP Singapore.",
    check: (records) => (records.spatial3D?.stars || records.spatial3D?.completedChallenges?.length || 0) >= 10,
    progress: (records) => Math.min(100, Math.round(((records.spatial3D?.stars || records.spatial3D?.completedChallenges?.length || 0) / 10) * 100))
  },
  {
    id: "einstein_logic",
    title: "Bộ Óc Suy Luận Einstein",
    pillar: "fluid",
    icon: "🧩",
    rank: "Olympic",
    description: "Phá giải thành công 5 vụ án trong Bảng Lưới Thám Tử (Logic Grid).",
    check: (records) => (records.logicGrid?.completedCases?.length || 0) >= 5,
    progress: (records) => Math.min(100, Math.round(((records.logicGrid?.completedCases?.length || 0) / 5) * 100))
  },
  {
    id: "traffic_grandmaster",
    title: "Bậc Thầy Thoát Hiểm Mensa",
    pillar: "fluid",
    icon: "🚗",
    rank: "Olympic",
    description: "Giải cứu Xe Đỏ thành công trong 10 thế cờ Kẹt Xe Thông Minh (Rush Hour).",
    check: (records) => (records.rushHour?.completedBoards?.length || 0) >= 10,
    progress: (records) => Math.min(100, Math.round(((records.rushHour?.completedBoards?.length || 0) / 10) * 100))
  },
  {
    id: "kyoto_prodigy",
    title: "Kỳ Tài Trí Nhớ Kyoto",
    pillar: "memory",
    icon: "🧠",
    rank: "Gold",
    description: "Vượt qua thử thách Não Siêu Nhớ đến Cấp 6 trở lên.",
    check: (records) => (records.chimpMemory?.maxLevel || 1) >= 6,
    progress: (records) => Math.min(100, Math.round((Math.max(0, (records.chimpMemory?.maxLevel || 1) - 1) / 5) * 100))
  },
  {
    id: "tangram_artisan",
    title: "Nghệ Nhân Tangram Trí Uẩn",
    pillar: "spatial",
    icon: "📐",
    rank: "Gold",
    description: "Ghép thành công 5 hình bóng Tangram kinh điển theo chuẩn GEP Singapore.",
    check: (records) => (records.tangram?.completedPuzzles?.length || 0) >= 5,
    progress: (records) => Math.min(100, Math.round(((records.tangram?.completedPuzzles?.length || 0) / 5) * 100))
  },
  {
    id: "olympic_allrounder",
    title: "Đại Sứ Toàn Năng Olympic",
    pillar: "fluid",
    icon: "👑",
    rank: "Legendary",
    description: "Chinh phục ít nhất 1 thử thách ở tất cả các trò chơi trong Cửu Cung Trí Tuệ.",
    check: (records) => {
      const g1 = (records.speedMath?.gamesPlayed || 0) > 0;
      const g2 = (records.barModel?.completedChallenges?.length || 0) > 0;
      const g3 = (records.spotTheBug?.solvedCount || 0) > 0;
      const g4 = (records.balanceScale?.completedChallenges?.length || 0) > 0;
      const g5 = ((records.make24?.solvedCount || records.make24?.completedChallenges?.length || 0) > 0);
      const g6 = (records.spatial3D?.completedChallenges?.length || 0) > 0;
      const g7 = (records.logicGrid?.completedCases?.length || 0) > 0;
      const g8 = (records.rushHour?.completedBoards?.length || 0) > 0;
      const g9 = (records.chimpMemory?.highScore || 0) > 0;
      return g1 && g2 && g3 && g4 && g5 && g6 && g7 && g8 && g9;
    },
    progress: (records) => {
      let count = 0;
      if ((records.speedMath?.gamesPlayed || 0) > 0) count++;
      if ((records.barModel?.completedChallenges?.length || 0) > 0) count++;
      if ((records.spotTheBug?.solvedCount || 0) > 0) count++;
      if ((records.balanceScale?.completedChallenges?.length || 0) > 0) count++;
      if ((records.make24?.solvedCount || records.make24?.completedChallenges?.length || 0) > 0) count++;
      if ((records.spatial3D?.completedChallenges?.length || 0) > 0) count++;
      if ((records.logicGrid?.completedCases?.length || 0) > 0) count++;
      if ((records.rushHour?.completedBoards?.length || 0) > 0) count++;
      if ((records.chimpMemory?.highScore || 0) > 0) count++;
      return Math.min(100, Math.round((count / 9) * 100));
    }
  }
];

/**
 * Kiểm tra các huy chương và mở khóa huy chương mới nếu Bách đủ điều kiện
 * @returns {Array} Danh sách các huy chương vừa mới mở khóa trong lần gọi này
 */
export function checkAndAwardBadges(state) {
  if (!state.db) state.db = {};
  if (!state.db.gameRecords) state.db.gameRecords = {};
  
  const records = state.db.gameRecords;
  if (!Array.isArray(records.unlockedBadges)) {
    records.unlockedBadges = [];
  }

  const newlyUnlocked = [];
  for (const badge of BADGES_DEFINITION) {
    const isAlreadyUnlocked = records.unlockedBadges.includes(badge.id);
    if (!isAlreadyUnlocked && badge.check(records)) {
      records.unlockedBadges.push(badge.id);
      newlyUnlocked.push(badge);
    }
  }

  return newlyUnlocked;
}

/**
 * Lấy danh sách toàn bộ huy chương kèm trạng thái hiện tại của Bách
 */
export function getBadgesStatus(records = {}) {
  const unlocked = new Set(Array.isArray(records.unlockedBadges) ? records.unlockedBadges : []);
  return BADGES_DEFINITION.map(badge => {
    const isUnlocked = unlocked.has(badge.id);
    const prog = isUnlocked ? 100 : badge.progress(records);
    return {
      ...badge,
      isUnlocked,
      currentProgress: prog
    };
  });
}

/**
 * Hiển thị Banner chúc mừng Huy chương mới mở khóa trên giao diện iPad
 */
export function showBadgeCelebration(badge) {
  if (typeof document === "undefined" || !badge) return;

  const existing = document.querySelector("#badgeCelebrationModal");
  if (existing) existing.remove();

  const modal = document.createElement("div");
  modal.id = "badgeCelebrationModal";
  modal.className = "badge-celebration-backdrop";
  modal.innerHTML = `
    <div class="badge-celebration-card animate-pop-in">
      <div class="celebration-confetti">✨ 🏆 ✨</div>
      <div class="celebration-badge-icon">${badge.icon}</div>
      <div class="celebration-eyebrow">HUY CHƯƠNG MỚI MỞ KHÓA!</div>
      <h2 class="celebration-title">${badge.title}</h2>
      <p class="celebration-desc">${badge.description}</p>
      <div class="celebration-rank-pill rank-${badge.rank.toLowerCase()}">Hạng: ${badge.rank}</div>
      <button type="button" class="primary-button celebration-close-btn" id="closeCelebrationBtn">
        Tuyệt vời, tiếp tục thôi! 🚀
      </button>
    </div>
  `;

  document.body.appendChild(modal);

  modal.querySelector("#closeCelebrationBtn")?.addEventListener("click", () => {
    modal.classList.add("fade-out");
    setTimeout(() => modal.remove(), 250);
  });
}
