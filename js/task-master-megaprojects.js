// js/task-master-megaprojects.js - Khung Đại Dự Án (Megaproject Framework) & Đồ Họa Tiến Hóa Trực Quan

export const MEGAPROJECTS = [
  {
    id: "emergency-hospital",
    title: "Bệnh Viện Cứu Trợ Dã Chiến",
    shortTitle: "Bệnh Viện Dã Chiến",
    theme: "medical",
    badge: "🏥 TỔNG CHỈ HUY Y TẾ",
    icon: "🏥",
    color: "#e11d48",
    bg: "#ffe4e6",
    levelStart: 81,
    levelEnd: 100,
    description: "Xây dựng và vận hành trung tâm y tế cứu nạn khẩn cấp, từ lều phân loại thương binh, phòng mổ vô trùng đến trực thăng cứu thương.",
    stages: [
      { id: "s1", title: "Tiếp Nhận & Phân Tuyến Cấp Cứu", levels: [81, 82, 83, 84, 85], icon: "🚑" },
      { id: "s2", title: "Phòng Mổ Vô Trùng Dã Chiến", levels: [86, 87, 88, 89, 90], icon: "🩺" },
      { id: "s3", title: "Kho Dược Phẩm & Trạm Oxy", levels: [91, 92, 93, 94, 95], icon: "💊" },
      { id: "s4", title: "Sân Bay Trực Thăng & Hồi Sức Tích Cực", levels: [96, 97, 98, 99, 100], icon: "🚁" }
    ]
  },
  {
    id: "giga-factory",
    title: "Siêu Nhà Máy Robot Tự Động",
    shortTitle: "Siêu Nhà Máy Robot",
    theme: "computing",
    badge: "🤖 KỸ SƯ TRƯỞNG ROBOT",
    icon: "🤖",
    color: "#2563eb",
    bg: "#dbeafe",
    levelStart: 101,
    levelEnd: 120,
    description: "Thiết lập dây chuyền sản xuất tự động hóa thông minh: từ cánh tay robot hàn laser, mắt thần AI kiểm tra lỗi đến lắp ráp xe tự lái.",
    stages: [
      { id: "s1", title: "Hạ Tầng Điện & Băng Chuyền", levels: [101, 102, 103, 104, 105], icon: "⚡" },
      { id: "s2", title: "Cánh Tay Robot Cơ Khí & Hàn", levels: [106, 107, 108, 109, 110], icon: "🦾" },
      { id: "s3", title: "Cảm Biến AI & Mắt Thần Kiểm Định", levels: [111, 112, 113, 114, 115], icon: "👁️" },
      { id: "s4", title: "Dây Chuyền Lắp Ráp Xe Tự Lái", levels: [116, 117, 118, 119, 120], icon: "🚗" }
    ]
  },
  {
    id: "eco-biosphere",
    title: "Khu Bảo Tồn Rừng & San Hô",
    shortTitle: "Khu Bảo Tồn Sinh Thái",
    theme: "ecology",
    badge: "🌿 THẦN BẢO HỘ RỪNG XANH",
    icon: "🌿",
    color: "#059669",
    bg: "#d1fae5",
    levelStart: 121,
    levelEnd: 140,
    description: "Hồi sinh một hòn đảo khô cằn và vùng rạn san hô bạc màu thành thiên đường sinh thái tràn ngập sự sống và công nghệ IoT bảo vệ động vật.",
    stages: [
      { id: "s1", title: "Làm Sạch Nguồn Nước & Cải Tạo Đất", levels: [121, 122, 123, 124, 125], icon: "💧" },
      { id: "s2", title: "Vườn Ươm Cây Bản Địa & Thủy Canh", levels: [126, 127, 128, 129, 130], icon: "🌱" },
      { id: "s3", title: "Rạn San Hô & Lọc Rác Đại Dương", levels: [131, 132, 133, 134, 135], icon: "🪸" },
      { id: "s4", title: "Trạm Cảm Biến IoT & Thả Thú Quý", levels: [136, 137, 138, 139, 140], icon: "🦅" }
    ]
  },
  {
    id: "smart-city",
    title: "Đại Đô Thị Thông Minh",
    shortTitle: "Đại Đô Thị Tương Lai",
    theme: "architecture",
    badge: "🏙️ TỔNG KIẾN TRÚC SƯ ĐÔ THỊ",
    icon: "🏙️",
    color: "#7c3aed",
    bg: "#ede9fe",
    levelStart: 141,
    levelEnd: 160,
    description: "Quy hoạch và xây dựng một siêu đô thị trung hòa carbon: mạng lưới tàu điện ngầm ngầm, tháp lọc không khí, điện gió ngoài khơi.",
    stages: [
      { id: "s1", title: "Khảo Sát Địa Chất & Nền Móng", levels: [141, 142, 143, 144, 145], icon: "🏗️" },
      { id: "s2", title: "Mạng Lưới Tàu Điện Ngầm & Nước Thải", levels: [146, 147, 148, 149, 150], icon: "🚇" },
      { id: "s3", title: "Lưới Điện Tái Tạo & Tháp Gió", levels: [151, 152, 153, 154, 155], icon: "🌬️" },
      { id: "s4", title: "Tòa Tháp Xanh & Trung Tâm Điều Hành", levels: [156, 157, 158, 159, 160], icon: "🏢" }
    ]
  },
  {
    id: "moon-base",
    title: "Trạm Căn Cứ Không Gian Mặt Trăng",
    shortTitle: "Căn Cứ Mặt Trăng",
    theme: "megaproject",
    badge: "🌕 TỔNG CHỈ HUY TRẠM MẶT TRĂNG",
    icon: "🚀",
    color: "#d97706",
    bg: "#fef3c7",
    levelStart: 181,
    levelEnd: 200,
    description: "Công trình vĩ đại nhất của nhân loại: xây dựng căn cứ tự cung tự cấp tại Cực Nam Mặt Trăng, mở đường cho kỷ nguyên thám hiểm Sao Hỏa.",
    stages: [
      { id: "s1", title: "Tên Lửa Đẩy Siêu Nặng & Đổ Bộ", levels: [181, 182, 183, 184, 185], icon: "🚀" },
      { id: "s2", title: "Robot Đào Hầm & Trạm Điện Mặt Trời", levels: [186, 187, 188, 189, 190], icon: "⚡" },
      { id: "s3", title: "Khai Thác Băng Ngầm & Luyện Oxy", levels: [191, 192, 193, 194, 195], icon: "🧊" },
      { id: "s4", title: "Vòm Sinh Quyển Biosphere & Đón Người", levels: [196, 197, 198, 199, 200], icon: "👨‍🚀" }
    ]
  }
];

export function parseLevelNumber(val) {
  if (typeof val === "number" && !Number.isNaN(val)) return val;
  if (typeof val === "string") {
    const match = val.match(/\d+/);
    return match ? parseInt(match[0], 10) : NaN;
  }
  return NaN;
}

export function getMegaprojectByLevel(levelInput) {
  const levelNumber = parseLevelNumber(levelInput);
  if (Number.isNaN(levelNumber)) return null;
  return MEGAPROJECTS.find(p => levelNumber >= p.levelStart && levelNumber <= p.levelEnd) || null;
}

export const getMegaprojectForLevel = getMegaprojectByLevel;

export function getCategoryStageStatus(category, completedLevels = []) {
  const completedNumSet = new Set(
    (completedLevels || [])
      .map(parseLevelNumber)
      .filter(n => !Number.isNaN(n))
  );

  const rangeMap = {
    routine: [1, 20],
    cooking: [21, 40],
    engineering: [41, 60],
    mission: [61, 80],
    medical: [81, 100],
    computing: [101, 120],
    ecology: [121, 140],
    architecture: [141, 160],
    detective: [161, 180],
    megaproject: [181, 200]
  };

  const [start, end] = rangeMap[category] || [1, 20];
  const step = Math.round((end - start + 1) / 4);

  const stages = [
    { start: start, end: start + step - 1 },
    { start: start + step, end: start + 2 * step - 1 },
    { start: start + 2 * step, end: start + 3 * step - 1 },
    { start: start + 3 * step, end: end }
  ];

  const checkStage = ({ start: s, end: e }) => {
    let count = 0;
    const total = e - s + 1;
    for (let l = s; l <= e; l++) {
      if (completedNumSet.has(l)) count++;
    }
    return {
      completed: count,
      total,
      isDone: count === total,
      hasStarted: count > 0
    };
  };

  return {
    s1: checkStage(stages[0]),
    s2: checkStage(stages[1]),
    s3: checkStage(stages[2]),
    s4: checkStage(stages[3])
  };
}

export function getMegaprojectProgress(projectId, completedLevels = []) {
  const project = MEGAPROJECTS.find(p => p.id === projectId);
  if (!project) return { completedCount: 0, totalCount: 0, percent: 0, stageProgress: [], stageStatus: null };

  const totalCount = project.levelEnd - project.levelStart + 1;
  const completedNumSet = new Set(
    (completedLevels || [])
      .map(parseLevelNumber)
      .filter(n => !Number.isNaN(n))
  );

  let completedCount = 0;
  for (let l = project.levelStart; l <= project.levelEnd; l++) {
    if (completedNumSet.has(l)) completedCount++;
  }

  const percent = Math.round((completedCount / totalCount) * 100);

  const stageProgress = project.stages.map(st => {
    const stCompleted = st.levels.filter(lvl => completedNumSet.has(lvl)).length;
    return {
      ...st,
      completed: stCompleted,
      total: st.levels.length,
      isFullyComplete: stCompleted === st.levels.length,
      hasStarted: stCompleted > 0
    };
  });

  const stageStatus = {
    s1: { isDone: stageProgress[0]?.isFullyComplete ?? false, hasStarted: stageProgress[0]?.hasStarted ?? false, completed: stageProgress[0]?.completed ?? 0, total: stageProgress[0]?.total ?? 5 },
    s2: { isDone: stageProgress[1]?.isFullyComplete ?? false, hasStarted: stageProgress[1]?.hasStarted ?? false, completed: stageProgress[1]?.completed ?? 0, total: stageProgress[1]?.total ?? 5 },
    s3: { isDone: stageProgress[2]?.isFullyComplete ?? false, hasStarted: stageProgress[2]?.hasStarted ?? false, completed: stageProgress[2]?.completed ?? 0, total: stageProgress[2]?.total ?? 5 },
    s4: { isDone: stageProgress[3]?.isFullyComplete ?? false, hasStarted: stageProgress[3]?.hasStarted ?? false, completed: stageProgress[3]?.completed ?? 0, total: stageProgress[3]?.total ?? 5 }
  };

  return {
    project,
    completedCount,
    totalCount,
    percent,
    stageProgress,
    stageStatus
  };
}

export {
  renderMoonBaseVisual,
  renderHospitalVisual,
  renderFactoryVisual,
  renderBiosphereVisual,
  renderSmartCityVisual,
  renderDetectiveVisual,
  renderRoutineVisual,
  renderCookingVisual,
  renderEngineeringVisual,
  renderMissionVisual,
  renderCategoryVisual
} from "./task-master-visuals.js";

