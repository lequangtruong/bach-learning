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

export function getMegaprojectByLevel(levelNumber) {
  return MEGAPROJECTS.find(p => levelNumber >= p.levelStart && levelNumber <= p.levelEnd) || null;
}

export const getMegaprojectForLevel = getMegaprojectByLevel;

export function getMegaprojectProgress(projectId, completedLevels = []) {
  const project = MEGAPROJECTS.find(p => p.id === projectId);
  if (!project) return { completedCount: 0, totalCount: 0, percent: 0, stageProgress: [] };

  const totalCount = project.levelEnd - project.levelStart + 1;
  const completedSet = new Set(completedLevels.map(Number));

  let completedCount = 0;
  for (let l = project.levelStart; l <= project.levelEnd; l++) {
    if (completedSet.has(l)) completedCount++;
  }

  const percent = Math.round((completedCount / totalCount) * 100);

  const stageProgress = project.stages.map(st => {
    const stCompleted = st.levels.filter(lvl => completedSet.has(lvl)).length;
    return {
      ...st,
      completed: stCompleted,
      total: st.levels.length,
      isFullyComplete: stCompleted === st.levels.length
    };
  });

  return {
    project,
    completedCount,
    totalCount,
    percent,
    stageProgress
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

