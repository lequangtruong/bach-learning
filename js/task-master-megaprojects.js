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

/**
 * Tạo đồ họa SVG 2.5D Isometric mô phỏng quá trình tiến hóa của Căn Cứ Mặt Trăng (Moon Base)
 */
export function renderMoonBaseVisual(completedCount = 0, totalCount = 20) {
  const pct = Math.min(100, Math.round((completedCount / totalCount) * 100));
  const stage1Done = completedCount >= 5;
  const stage2Done = completedCount >= 10;
  const stage3Done = completedCount >= 15;
  const stage4Done = completedCount >= 20;

  return `
    <svg viewBox="0 0 700 320" width="100%" height="auto" class="tm-megaproject-svg" style="border-radius:14px; background:radial-gradient(ellipse at bottom, #1e1b4b 0%, #09090b 100%); box-shadow:0 10px 25px rgba(0,0,0,0.3)">
      <defs>
        <radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="100%" stop-color="transparent"/>
        </radialGradient>
        <linearGradient id="domeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#0284c7" stop-opacity="0.2"/>
        </linearGradient>
      </defs>

      <!-- Không gian sao trời -->
      <circle cx="80" cy="50" r="1.5" fill="#fff" opacity="0.6"/>
      <circle cx="160" cy="80" r="2" fill="#fff" opacity="0.8"/>
      <circle cx="280" cy="30" r="1" fill="#fff" opacity="0.5"/>
      <circle cx="450" cy="60" r="1.5" fill="#fff" opacity="0.7"/>
      <circle cx="580" cy="40" r="2" fill="#fff" opacity="0.9"/>
      <circle cx="650" cy="90" r="1" fill="#fff" opacity="0.4"/>
      <!-- Trái Đất nhỏ màu xanh phía xa -->
      <circle cx="600" cy="70" r="22" fill="#0284c7" opacity="0.85"/>
      <path d="M590,65 Q600,60 610,65 Q605,75 595,75 Z" fill="#22c55e" opacity="0.8"/>

      <!-- Bề mặt địa hình Mặt Trăng 2.5D Isometric -->
      <path d="M0,230 Q200,200 400,225 T700,220 L700,320 L0,320 Z" fill="#27272a"/>
      <path d="M0,250 Q250,235 500,255 T700,245 L700,320 L0,320 Z" fill="#18181b"/>

      <!-- Miệng núi lửa Shackleton -->
      <ellipse cx="140" cy="270" rx="45" ry="16" fill="#09090b" stroke="#3f3f46" stroke-width="2"/>
      <ellipse cx="540" cy="280" rx="35" ry="12" fill="#09090b" stroke="#3f3f46" stroke-width="2"/>

      <!-- Giai đoạn 1: Tên lửa Artemis & Module đổ bộ -->
      <g opacity="${stage1Done ? '1' : (completedCount > 0 ? '0.4' : '0.1')}" style="transition:all 0.5s">
        <!-- Bệ hạ cánh -->
        <ellipse cx="230" cy="240" rx="40" ry="14" fill="#3f3f46" stroke="#fbbf24" stroke-dasharray="4,2"/>
        <!-- Tàu đổ bộ Lander -->
        <polygon points="215,235 245,235 238,205 222,205" fill="#e4e4e7"/>
        <line x1="218" y1="235" x2="208" y2="245" stroke="#71717a" stroke-width="3"/>
        <line x1="242" y1="235" x2="252" y2="245" stroke="#71717a" stroke-width="3"/>
        <!-- Cờ cắm trên Mặt Trăng -->
        <line x1="175" y1="250" x2="175" y2="225" stroke="#fbbf24" stroke-width="2"/>
        <polygon points="175,225 192,231 175,237" fill="#ef4444"/>
        <text x="230" y="260" text-anchor="middle" fill="#fef08a" font-size="10" font-weight="bold">Bệ Hạ Cánh</text>
      </g>

      <!-- Giai đoạn 2: Cánh đồng pin mặt trời & Robot tự hành -->
      <g opacity="${stage2Done ? '1' : (stage1Done ? '0.3' : '0.05')}" style="transition:all 0.5s">
        <!-- Tấm pin mặt trời 1 -->
        <polygon points="300,215 330,210 340,225 310,230" fill="#1d4ed8" stroke="#60a5fa" stroke-width="1.5"/>
        <line x1="320" y1="225" x2="320" y2="238" stroke="#94a3b8" stroke-width="2"/>
        <!-- Tấm pin mặt trời 2 -->
        <polygon points="335,215 365,210 375,225 345,230" fill="#1d4ed8" stroke="#60a5fa" stroke-width="1.5"/>
        <line x1="355" y1="225" x2="355" y2="238" stroke="#94a3b8" stroke-width="2"/>
        <!-- Xe tự hành Rover -->
        <rect x="270" y="255" width="22" height="12" rx="3" fill="#e2e8f0"/>
        <circle cx="273" cy="269" r="4" fill="#334155"/>
        <circle cx="289" cy="269" r="4" fill="#334155"/>
        <text x="335" y="250" text-anchor="middle" fill="#93c5fd" font-size="10" font-weight="bold">Trạm Năng Lượng</text>
      </g>

      <!-- Giai đoạn 3: Nhà máy băng ngầm & Trạm điện phân tạo Oxy -->
      <g opacity="${stage3Done ? '1' : (stage2Done ? '0.3' : '0.05')}" style="transition:all 0.5s">
        <!-- Bồn chứa Oxy lỏng hình cầu -->
        <circle cx="430" cy="225" r="16" fill="#f8fafc" stroke="#38bdf8" stroke-width="2"/>
        <text x="430" y="230" text-anchor="middle" fill="#0284c7" font-size="10" font-weight="bold">O₂</text>
        <!-- Đường ống dẫn khí phát sáng -->
        <path d="M446,228 Q460,235 480,230" fill="none" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
        <!-- Máy khoan băng miệng hố -->
        <line x1="140" y1="265" x2="140" y2="245" stroke="#f59e0b" stroke-width="3"/>
        <text x="430" y="255" text-anchor="middle" fill="#67e8f9" font-size="10" font-weight="bold">Lọc Oxy & Nước</text>
      </g>

      <!-- Giai đoạn 4: Vòm sinh quyển Biosphere cây xanh -->
      <g opacity="${stage4Done ? '1' : (stage3Done ? '0.3' : '0.05')}" style="transition:all 0.5s">
        <!-- Vòm kính phát sáng -->
        <ellipse cx="500" cy="220" rx="36" ry="30" fill="url(#domeGrad)" stroke="#7dd3fc" stroke-width="2.5"/>
        <!-- Cây xanh bên trong vòm kính -->
        <circle cx="490" cy="225" r="7" fill="#22c55e"/>
        <circle cx="510" cy="223" r="8" fill="#16a34a"/>
        <circle cx="500" cy="216" r="6" fill="#4ade80"/>
        <!-- Phi hành gia tí hon đứng vẫy tay -->
        <circle cx="460" cy="250" r="4" fill="#fff"/>
        <rect x="458" y="254" width="4" height="7" fill="#fff"/>
        <text x="500" y="265" text-anchor="middle" fill="#86efac" font-size="10" font-weight="bold">Vòm Sinh Quyển</text>
      </g>

      <!-- Badge tiến độ tổng quan trên hình -->
      <g transform="translate(20, 20)">
        <rect width="180" height="34" rx="8" fill="#000000" fill-opacity="0.6" stroke="#3f3f46" stroke-width="1"/>
        <text x="12" y="22" fill="#fff" font-size="12" font-weight="800">Căn Cứ Mặt Trăng: ${pct}%</text>
      </g>
    </svg>
  `;
}
