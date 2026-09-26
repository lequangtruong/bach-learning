// js/adaptive-engine.js - Động cơ độ khó tương thích & Phân tích 5 Trụ cột Trí tuệ CHC cho Bách
// Dựa trên lý thuyết Vygotsky (Zone of Proximal Development) và mô hình Cattell-Horn-Carroll (CHC)

export const CHC_PILLARS = {
  fluid: {
    id: "fluid",
    name: "Tư Duy Logic & Loại Trừ",
    code: "Logic",
    icon: "🧩",
    color: "#8b5cf6",
    bg: "#ede9fe",
    border: "#c4b5fd",
    description: "Khả năng phân tích bài toán, tìm quy luật và suy luận loại trừ.",
    games: ["logicGrid", "balanceScale", "rushHour"]
  },
  spatial: {
    id: "spatial",
    name: "Tư Duy Không Gian & Hình Học",
    code: "Không gian",
    icon: "🧊",
    color: "#3b82f6",
    bg: "#eff6ff",
    border: "#93c5fd",
    description: "Khả năng tưởng tượng hình chiếu, xoay vật thể 3D và ghép hình học.",
    games: ["spatial3D", "rushHour", "tangram"]
  },
  speed: {
    id: "speed",
    name: "Tốc Độ Tính Nhẩm & Phản Xạ",
    code: "Tính nhẩm",
    icon: "⚡",
    color: "#ef4444",
    bg: "#fef2f2",
    border: "#fca5a5",
    description: "Khả năng tính toán nhanh nhẹn và áp dụng mẹo tính linh hoạt.",
    games: ["speedMath", "chimpMemory"]
  },
  memory: {
    id: "memory",
    name: "Ghi Nhớ & Tập Trung Chú Ý",
    code: "Tập trung",
    icon: "🎯",
    color: "#06b6d4",
    bg: "#ecfeff",
    border: "#a5f3fc",
    description: "Khả năng ghi nhớ chuỗi thông tin và duy trì sự tập trung bền bỉ.",
    games: ["chimpMemory", "speedMath"]
  },
  math: {
    id: "math",
    name: "Mô Hình Hóa & Giải Toán Lớp 4",
    code: "Toán học",
    icon: "📐",
    color: "#10b981",
    bg: "#ecfdf5",
    border: "#6ee7b7",
    description: "Chuyển đổi bài toán lời văn thành sơ đồ đoạn thẳng, cân bằng và biểu thức.",
    games: ["barModel", "spotTheBug", "balanceScale", "make24"]
  }
};
export const SKILL_PILLARS = CHC_PILLARS;

/**
 * Lấy hoặc khởi tạo hồ sơ tương thích của Bách
 */
export function getAdaptiveProfile(records = {}) {
  const profile = records.adaptiveProfile || {};
  return {
    levels: {
      speedMath: profile.levels?.speedMath || 2,
      barModel: profile.levels?.barModel || 2,
      spotTheBug: profile.levels?.spotTheBug || 2,
      balanceScale: profile.levels?.balanceScale || 2,
      make24: profile.levels?.make24 || 2,
      spatial3D: profile.levels?.spatial3D || 2,
      logicGrid: profile.levels?.logicGrid || 2,
      rushHour: profile.levels?.rushHour || 2,
      chimpMemory: profile.levels?.chimpMemory || 2,
      tangram: profile.levels?.tangram || 2
    },
    streaks: {
      speedMath: profile.streaks?.speedMath || 0,
      barModel: profile.streaks?.barModel || 0,
      spotTheBug: profile.streaks?.spotTheBug || 0,
      balanceScale: profile.streaks?.balanceScale || 0,
      make24: profile.streaks?.make24 || 0,
      spatial3D: profile.streaks?.spatial3D || 0,
      logicGrid: profile.streaks?.logicGrid || 0,
      rushHour: profile.streaks?.rushHour || 0,
      chimpMemory: profile.streaks?.chimpMemory || 0,
      tangram: profile.streaks?.tangram || 0
    },
    history: Array.isArray(profile.history) ? profile.history.slice(-50) : [],
    unlockedBadges: Array.isArray(profile.unlockedBadges) ? profile.unlockedBadges : [],
    lastPromotedGame: profile.lastPromotedGame || null,
    updatedAt: profile.updatedAt || new Date().toISOString()
  };
}

/**
 * Ghi nhận kết quả của một ván chơi / câu đố và tự động điều chỉnh độ khó ZPD
 * @param {Object} state - app state
 * @param {string} gameKey - mã game (barModel, spatial3D, rushHour,...)
 * @param {Object} outcome - { success: boolean, difficulty: number, score?: number }
 */
export function recordGameOutcome(state, gameKey, outcome = {}) {
  if (!state.db) state.db = {};
  if (!state.db.gameRecords) state.db.gameRecords = {};
  
  const profile = getAdaptiveProfile(state.db.gameRecords);
  const currentLvl = profile.levels[gameKey] || 2;
  const currentStreak = profile.streaks[gameKey] || 0;
  const isSuccess = !!outcome.success;
  
  let newStreak = isSuccess ? Math.max(1, currentStreak + 1) : Math.min(-1, currentStreak - 1);
  let newLvl = currentLvl;
  let status = "steady"; // "promoted" | "demoted" | "steady"
  let message = "";

  // Thuật toán Zone of Proximal Development (ZPD):
  // - Đúng 2 bài liên tiếp ở độ khó hiện tại (hoặc 3 bài bất kỳ) -> Nâng bậc thử thách (tối đa ★5)
  // - Sai 2 bài liên tiếp -> Giảm bậc để củng cố nền tảng tự tin (tối thiểu ★1)
  if (isSuccess && newStreak >= 2 && currentLvl < 5) {
    newLvl = currentLvl + 1;
    newStreak = 0; // Reset streak sau khi thăng hạng
    status = "promoted";
    profile.lastPromotedGame = gameKey;
    message = `🚀 Phong độ tuyệt vời! Độ khó đề xuất tự động nâng lên ★${newLvl}.`;
  } else if (!isSuccess && newStreak <= -2 && currentLvl > 1) {
    newLvl = currentLvl - 1;
    newStreak = 0; // Reset streak sau khi điều chỉnh
    status = "demoted";
    message = `💡 Hãy thử sức với bài ★${newLvl} vừa sức hơn để củng cố tự tin nhé!`;
  }

  profile.levels[gameKey] = newLvl;
  profile.streaks[gameKey] = newStreak;
  profile.history.push({
    gameKey,
    success: isSuccess,
    difficulty: outcome.difficulty || currentLvl,
    timestamp: new Date().toISOString(),
    status
  });
  if (profile.history.length > 50) profile.history.shift();
  profile.updatedAt = new Date().toISOString();

  state.db.gameRecords.adaptiveProfile = profile;
  return { newLvl, newStreak, status, message };
}

/**
 * Tính toán điểm năng lực cho 5 trụ cột trí tuệ CHC (thang điểm 0 - 100)
 */
export function calculateChcPillars(records = {}) {
  const speed = records.speedMath || { highScore: 0, bestStreak: 0 };
  const bar = records.barModel || { stars: 0, completedChallenges: [] };
  const bug = records.spotTheBug || { solvedCount: 0 };
  const balance = records.balanceScale || { completedChallenges: [] };
  const make24 = records.make24 || { solvedCount: 0 };
  const spatial = records.spatial3D || { stars: 0, completedChallenges: [] };
  const logic = records.logicGrid || { completedCases: [] };
  const rush = records.rushHour || { stars: 0, completedBoards: [] };
  const chimp = records.chimpMemory || { highScore: 0, maxLevel: 1 };
  const tangram = records.tangram || { completedPuzzles: [], stars: 0 };

  const barCount = bar.completedChallenges?.length || 0;
  const bugCount = bug.solvedCount || 0;
  const balanceCount = balance.completedChallenges?.length || 0;
  const make24Count = make24.solvedCount || make24.completedChallenges?.length || 0;
  const spatialCount = spatial.completedChallenges?.length || 0;
  const logicCount = logic.completedCases?.length || 0;
  const rushCount = rush.completedBoards?.length || 0;
  const tangramCount = tangram.completedPuzzles?.length || 0;

  // 1. Fluid Intelligence (Gf)
  // Đóng góp: Logic Grid (max 20 bài), Detective Scale (max 24 bài), Rush Hour (max 50 boards)
  const gfRaw = (logicCount * 4) + (balanceCount * 1.5) + (rushCount * 1.2);
  const fluidScore = Math.min(100, Math.round(gfRaw));

  // 2. Visual-Spatial (Gv)
  // Đóng góp: Spatial 3D (max 60 bài), Tangram (max 25 bài), Rush Hour
  const gvRaw = (spatialCount * 2) + (tangramCount * 4) + (rushCount * 1.5);
  const spatialScore = Math.min(100, Math.round(gvRaw));

  // 3. Processing Speed (Gs)
  // Đóng góp: Speed Math (highScore / 5, streak * 5), Chimp Memory
  const speedPoints = Math.min(60, (speed.highScore || 0) / 6);
  const chimpPoints = Math.min(40, ((chimp.maxLevel || 1) - 1) * 8);
  const speedScore = Math.min(100, Math.round(speedPoints + chimpPoints));

  // 4. Working Memory (Gwm)
  // Đóng góp: Chimp Memory (level 1-9 -> up to 70 pts), Speed Math streak
  const wmChimp = Math.min(70, ((chimp.maxLevel || 1) - 1) * 10);
  const wmSpeed = Math.min(30, (speed.bestStreak || 0) * 4);
  const memoryScore = Math.min(100, Math.round(wmChimp + wmSpeed));

  // 5. Crystallized Math (Gc)
  // Đóng góp: Bar Model, Spot The Bug, Balance Scale, Make 24
  const gcRaw = (barCount * 1.5) + (bugCount * 1.2) + (balanceCount * 1.2) + (make24Count * 1.5);
  const mathScore = Math.min(100, Math.round(gcRaw));

  // Điểm tiến bộ kỹ năng trung bình (Thang điểm 100)
  const averagePillar = (fluidScore + spatialScore + speedScore + memoryScore + mathScore) / 5;
  const masteryScore = Math.round(averagePillar);

  return {
    pillars: {
      fluid: { score: fluidScore, level: getPillarLevel(fluidScore) },
      spatial: { score: spatialScore, level: getPillarLevel(spatialScore) },
      speed: { score: speedScore, level: getPillarLevel(speedScore) },
      memory: { score: memoryScore, level: getPillarLevel(memoryScore) },
      math: { score: mathScore, level: getPillarLevel(mathScore) }
    },
    averageScore: masteryScore,
    masteryScore,
    level: getPillarLevel(masteryScore)
  };
}

function getPillarLevel(score) {
  if (score >= 80) return { title: "Thành Thạo Xuất Sắc", badge: "👑", color: "#16a34a" };
  if (score >= 60) return { title: "Làm Chủ Vững Vàng", badge: "🌟", color: "#0284c7" };
  if (score >= 40) return { title: "Tiến Bộ Rõ Rệt", badge: "⭐", color: "#d97706" };
  if (score >= 20) return { title: "Đang Rèn Luyện", badge: "🔷", color: "#64748b" };
  return { title: "Mới Khởi Động", badge: "🌱", color: "#94a3b8" };
}

/**
 * Gợi ý thử thách thông minh nhất cho Bách dựa trên Pillar yếu nhất cần bồi dưỡng
 */
export function getSmartDailyRecommendation(records = {}) {
  const analysis = calculateChcPillars(records);
  const pillars = analysis.pillars;
  
  // Tìm pillar có điểm thấp nhất để khuyến khích rèn luyện cân bằng não bộ
  let minPillar = "spatial";
  let minScore = 999;
  for (const [key, val] of Object.entries(pillars)) {
    if (val.score < minScore) {
      minScore = val.score;
      minPillar = key;
    }
  }

  const recommendations = {
    fluid: {
      title: "Rèn Luyện Suy Luận Loại Trừ",
      gameName: "Bảng Lưới Thám Tử",
      route: "#games/logic-grid",
      icon: "🕵️",
      reason: "Bồi dưỡng khả năng suy luận phản biện và tư duy đa chiều của Einstein."
    },
    spatial: {
      title: "Rèn Luyện Thị Giác Không Gian 3D",
      gameName: "Thám Tử Khối 3D & Gấp Hộp",
      route: "#games/spatial-3d",
      icon: "🧊",
      reason: "Tăng cường năng lực tưởng tượng đa chiều và xoay vật thể theo chuẩn Singapore GEP."
    },
    speed: {
      title: "Kích Hoạt Phản Xạ Thần Tốc",
      gameName: "Đấu Tính Nhẩm 90 Giây",
      route: "#games/speed-math",
      icon: "⚡",
      reason: "Tăng tốc độ truyền dẫn xung thần kinh và độ tập trung cao độ."
    },
    memory: {
      title: "Mở Rộng Trí Nhớ Ngắn Hạn",
      gameName: "Não Siêu Nhớ Kyoto",
      route: "#games/chimp-memory",
      icon: "💭",
      reason: "Mở rộng dung lượng Working Memory - chìa khóa vàng ghi nhớ thông tin nhanh."
    },
    math: {
      title: "Chinh Phục Mô Hình Hóa Singapore",
      gameName: "Mini Bar Model Studio",
      route: "#games/bar-model",
      icon: "🧱",
      reason: "Chuyển hóa bài toán lời văn phức tạp thành sơ đồ trực quan dễ hiểu."
    }
  };

  return {
    pillarKey: minPillar,
    pillarInfo: CHC_PILLARS[minPillar],
    ...recommendations[minPillar]
  };
}
