// js/task-master-visuals.js - Hệ Thống Đồ Họa 2.5D Isometric Trực Quan Cho Toàn Bộ Chủ Đề & Đại Dự Án
// Nâng cấp sư phạm: Cặp bánh răng ăn khớp, mạch điện kín có dây hồi, tiến độ chuẩn xác theo từng giai đoạn, dải tiến trình kế hoạch thời gian thực (Live Blueprint Step Tracker).

function esc(str) {
  return String(str ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/**
 * Helper phân giải trạng thái 4 giai đoạn chuẩn xác:
 * Ưu tiên dùng stageStatus (dựa trên từng bài cụ thể đã hoàn thành),
 * fallback mượt mà về completedCount nếu không có stageStatus.
 */
export function resolveStages(completedCount = 0, stageStatus = null) {
  const s1 = stageStatus?.s1?.isDone ?? (completedCount >= 5);
  const s1Started = stageStatus?.s1?.hasStarted ?? (completedCount > 0);
  const s2 = stageStatus?.s2?.isDone ?? (completedCount >= 10);
  const s2Started = stageStatus?.s2?.hasStarted ?? (completedCount >= 6);
  const s3 = stageStatus?.s3?.isDone ?? (completedCount >= 15);
  const s3Started = stageStatus?.s3?.hasStarted ?? (completedCount >= 11);
  const s4 = stageStatus?.s4?.isDone ?? (completedCount >= 20);
  const s4Started = stageStatus?.s4?.hasStarted ?? (completedCount >= 16);

  return { s1, s1Started, s2, s2Started, s3, s3Started, s4, s4Started };
}

/**
 * Dải Tiến Trình Kế Hoạch Trực Tiếp (Live Blueprint Step Tracker)
 * Phản ánh từng bước Bách xếp trong timeline thời gian thực lên bản đồ đồ họa.
 */
export function renderLiveBlueprintRibbon(timelineState, themeColor = "#38bdf8") {
  if (!timelineState || !timelineState.currentLevel) return "";
  const { currentLevel, timeline = [], isSimulating = false, simulationStep = -1, simulationResult = null } = timelineState;
  const tasks = currentLevel.tasks || [];
  const distractors = currentLevel.distractors || [];
  const totalTasks = tasks.length;
  if (totalTasks === 0) return "";

  const taskMap = new Map();
  tasks.forEach(t => taskMap.set(t.id, { ...t, isDistractor: false }));
  distractors.forEach(d => taskMap.set(d.id, { ...d, isDistractor: true }));

  const ribbonY = 246;
  const ribbonW = 664;
  const ribbonH = 82;
  const slotW = Math.min(100, Math.floor((ribbonW - 40) / totalTasks));
  const startX = Math.round((700 - (totalTasks * slotW)) / 2);

  let slotsHtml = "";
  for (let i = 0; i < totalTasks; i++) {
    const placedId = timeline[i];
    const placedItem = placedId ? taskMap.get(placedId) : null;
    const isSimCurrent = isSimulating && simulationStep === i;
    const isSuccess = simulationResult?.success;
    const isFailedStep = simulationResult && !simulationResult.success && simulationResult.failedTaskId === placedId;

    const cx = startX + i * slotW + slotW / 2;
    const cy = ribbonY + 48;

    if (i < totalTasks - 1) {
      const nextPlaced = !!timeline[i + 1];
      const beamColor = (placedId && nextPlaced) ? (isSuccess ? "#22c55e" : themeColor) : "#334155";
      const beamOpacity = (placedId && nextPlaced) ? "0.9" : "0.35";
      slotsHtml += `
        <line x1="${cx + 18}" y1="${cy}" x2="${cx + slotW - 18}" y2="${cy}" stroke="${beamColor}" stroke-width="2.5" stroke-dasharray="${placedId && nextPlaced ? 'none' : '3,3'}" opacity="${beamOpacity}"/>
      `;
    }

    if (placedItem) {
      let nodeFill = "#1e293b";
      let nodeStroke = themeColor;
      let badge = "";

      if (isFailedStep || placedItem.isDistractor) {
        nodeFill = "#7f1d1d";
        nodeStroke = "#ef4444";
        badge = "⚠️";
      } else if (isSuccess) {
        nodeFill = "#064e3b";
        nodeStroke = "#22c55e";
        badge = "✓";
      } else if (isSimCurrent) {
        nodeFill = "#0c4a6e";
        nodeStroke = "#38bdf8";
      }

      slotsHtml += `
        <g transform="translate(${cx}, ${cy})">
          ${isSimCurrent ? `<circle cx="0" cy="0" r="22" fill="none" stroke="${themeColor}" stroke-width="2.5" opacity="0.8"><animate attributeName="r" values="18;24;18" dur="1s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.9;0.2;0.9" dur="1s" repeatCount="indefinite"/></circle>` : ""}
          <circle cx="0" cy="0" r="16" fill="${nodeFill}" stroke="${nodeStroke}" stroke-width="2"/>
          <text x="0" y="4" text-anchor="middle" font-size="13">${esc(placedItem.icon || "📋")}</text>
          <text x="0" y="-20" text-anchor="middle" fill="${isFailedStep ? '#f87171' : '#cbd5e1'}" font-size="9" font-weight="700">Bước ${i + 1}</text>
          ${badge ? `<text x="12" y="-8" text-anchor="middle" font-size="10">${badge}</text>` : ""}
        </g>
      `;
    } else {
      slotsHtml += `
        <g transform="translate(${cx}, ${cy})">
          <circle cx="0" cy="0" r="15" fill="#0f172a" fill-opacity="0.6" stroke="#475569" stroke-width="1.5" stroke-dasharray="3,3"/>
          <text x="0" y="4" text-anchor="middle" fill="#64748b" font-size="11" font-weight="800">${i + 1}</text>
          <text x="0" y="-20" text-anchor="middle" fill="#475569" font-size="8.5">Chờ xếp</text>
        </g>
      `;
    }
  }

  const statusLabel = timeline.length === totalTasks
    ? (isSimulating ? "⚡ ĐANG MÔ PHỎNG KẾ HOẠCH THỬ NGHIỆM..." : (simulationResult?.success ? "🎉 KẾ HOẠCH HOÀN HẢO! CÁC BƯỚC ĐÃ THÀNH CÔNG!" : "🚀 ĐÃ XẾP ĐỦ CÁC BƯỚC • BẤM CHẠY THỬ NGHIỆM!"))
    : `📋 KẾ HOẠCH BÁCH ĐANG THIẾT KẾ: ${timeline.length}/${totalTasks} BƯỚC`;

  return `
    <g class="tm-live-blueprint-ribbon" transform="translate(18, 0)">
      <rect x="0" y="${ribbonY - 10}" width="${ribbonW}" height="${ribbonH}" rx="10" fill="#090d16" fill-opacity="0.9" stroke="${themeColor}" stroke-opacity="0.45" stroke-width="1.5"/>
      <text x="16" y="${ribbonY + 8}" fill="${themeColor}" font-size="9.5" font-weight="800" letter-spacing="0.04em">${statusLabel}</text>
      ${slotsHtml}
    </g>
  `;
}

/**
 * 1. 🌕 CĂN CỨ MẶT TRĂNG ARTEMIS (Moon Base Artemis) - Màn 181-200
 */
export function renderMoonBaseVisual(completedCount = 0, totalCount = 20, stageStatus = null, timelineState = null) {
  const pct = Math.min(100, Math.round((completedCount / totalCount) * 100));
  const { s1, s1Started, s2, s2Started, s3, s3Started, s4, s4Started } = resolveStages(completedCount, stageStatus);
  const svgH = timelineState ? 340 : 300;

  return `
    <svg viewBox="0 0 700 ${svgH}" width="100%" height="auto" class="tm-megaproject-svg" style="border-radius:14px; background:radial-gradient(ellipse at bottom, #1e1b4b 0%, #09090b 100%); box-shadow:0 10px 25px rgba(0,0,0,0.3)">
      <defs>
        <linearGradient id="mbDomeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
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
      <circle cx="600" cy="65" r="20" fill="#0284c7" opacity="0.85"/>
      <path d="M592,60 Q600,55 608,60 Q604,70 596,70 Z" fill="#22c55e" opacity="0.8"/>

      <!-- Bề mặt địa hình Mặt Trăng 2.5D Isometric -->
      <path d="M0,220 Q200,195 400,215 T700,210 L700,300 L0,300 Z" fill="#27272a"/>
      <path d="M0,240 Q250,225 500,245 T700,235 L700,300 L0,300 Z" fill="#18181b"/>
      <ellipse cx="140" cy="260" rx="45" ry="14" fill="#09090b" stroke="#3f3f46" stroke-width="2"/>
      <ellipse cx="540" cy="270" rx="35" ry="10" fill="#09090b" stroke="#3f3f46" stroke-width="2"/>

      <!-- Giai đoạn 1: Tàu đổ bộ Lander & Bệ hạ cánh (Levels 181-185) -->
      <g opacity="${s1 ? '1' : (s1Started ? '0.55' : '0.15')}" style="transition:all 0.5s">
        <ellipse cx="230" cy="235" rx="38" ry="12" fill="#3f3f46" stroke="#fbbf24" stroke-dasharray="4,2"/>
        <polygon points="215,230 245,230 238,200 222,200" fill="#e4e4e7"/>
        <line x1="218" y1="230" x2="208" y2="240" stroke="#71717a" stroke-width="3"/>
        <line x1="242" y1="230" x2="252" y2="240" stroke="#71717a" stroke-width="3"/>
        <line x1="175" y1="245" x2="175" y2="220" stroke="#fbbf24" stroke-width="2"/>
        <polygon points="175,220 192,226 175,232" fill="#ef4444"/>
        <text x="230" y="254" text-anchor="middle" fill="#fef08a" font-size="10" font-weight="bold">Bệ Hạ Cánh</text>
      </g>

      <!-- Giai đoạn 2: Cánh đồng pin mặt trời & Robot tự hành (Levels 186-190) -->
      <g opacity="${s2 ? '1' : (s2Started ? '0.55' : '0.15')}" style="transition:all 0.5s">
        <polygon points="300,205 330,200 340,215 310,220" fill="#1d4ed8" stroke="#60a5fa" stroke-width="1.5"/>
        <line x1="320" y1="215" x2="320" y2="228" stroke="#94a3b8" stroke-width="2"/>
        <polygon points="335,205 365,200 375,215 345,220" fill="#1d4ed8" stroke="#60a5fa" stroke-width="1.5"/>
        <line x1="355" y1="215" x2="355" y2="228" stroke="#94a3b8" stroke-width="2"/>
        <rect x="270" y="245" width="22" height="12" rx="3" fill="#e2e8f0"/>
        <circle cx="273" cy="259" r="4" fill="#334155"/>
        <circle cx="289" cy="259" r="4" fill="#334155"/>
        <text x="335" y="240" text-anchor="middle" fill="#93c5fd" font-size="10" font-weight="bold">Trạm Năng Lượng</text>
      </g>

      <!-- Giai đoạn 3: Nhà máy băng ngầm & Trạm điện phân tạo Oxy (Levels 191-195) -->
      <g opacity="${s3 ? '1' : (s3Started ? '0.55' : '0.15')}" style="transition:all 0.5s">
        <circle cx="430" cy="215" r="16" fill="#f8fafc" stroke="#38bdf8" stroke-width="2"/>
        <text x="430" y="220" text-anchor="middle" fill="#0284c7" font-size="10" font-weight="bold">O₂</text>
        <path d="M446,218 Q460,225 480,220" fill="none" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
        <line x1="140" y1="255" x2="140" y2="235" stroke="#f59e0b" stroke-width="3"/>
        <text x="430" y="245" text-anchor="middle" fill="#67e8f9" font-size="10" font-weight="bold">Lọc Oxy & Nước</text>
      </g>

      <!-- Giai đoạn 4: Vòm sinh quyển Biosphere cây xanh (Levels 196-200) -->
      <g opacity="${s4 ? '1' : (s4Started ? '0.55' : '0.15')}" style="transition:all 0.5s">
        <ellipse cx="500" cy="210" rx="36" ry="28" fill="url(#mbDomeGrad)" stroke="#7dd3fc" stroke-width="2.5"/>
        <circle cx="490" cy="215" r="6" fill="#22c55e"/>
        <circle cx="510" cy="213" r="7" fill="#16a34a"/>
        <circle cx="500" cy="207" r="5" fill="#4ade80"/>
        <circle cx="460" cy="240" r="4" fill="#fff"/>
        <rect x="458" y="244" width="4" height="6" fill="#fff"/>
        <text x="500" y="255" text-anchor="middle" fill="#86efac" font-size="10" font-weight="bold">Vòm Sinh Quyển</text>
      </g>

      <!-- Badge tiến độ tổng quan trên hình -->
      <g transform="translate(18, 18)">
        <rect width="186" height="32" rx="8" fill="#000000" fill-opacity="0.65" stroke="#3f3f46" stroke-width="1"/>
        <text x="12" y="21" fill="#fff" font-size="11" font-weight="800">Căn Cứ Mặt Trăng: ${pct}%</text>
      </g>

      ${renderLiveBlueprintRibbon(timelineState, "#38bdf8")}
    </svg>
  `;
}

/**
 * 2. 🏥 BỆNH VIỆN CỨU TRỢ DÃ CHIẾN (Emergency Field Hospital) - Màn 81-100
 */
export function renderHospitalVisual(completedCount = 0, totalCount = 20, stageStatus = null, timelineState = null) {
  const pct = Math.min(100, Math.round((completedCount / totalCount) * 100));
  const { s1, s1Started, s2, s2Started, s3, s3Started, s4, s4Started } = resolveStages(completedCount, stageStatus);
  const svgH = timelineState ? 340 : 300;

  return `
    <svg viewBox="0 0 700 ${svgH}" width="100%" height="auto" class="tm-megaproject-svg" style="border-radius:14px; background:linear-gradient(180deg, #ffe4e6 0%, #fecdd3 35%, #cbd5e1 100%); box-shadow:0 10px 25px rgba(225,29,72,0.15)">
      <!-- Mặt đất dã chiến -->
      <rect x="0" y="190" width="700" height="110" fill="#94a3b8"/>
      <path d="M0,210 Q350,195 700,215 L700,300 L0,300 Z" fill="#64748b"/>

      <!-- Giai đoạn 1: Xe cấp cứu & Lều Phân Loại Triage Đỏ (Levels 81-85) -->
      <g opacity="${s1 ? '1' : (s1Started ? '0.55' : '0.15')}" style="transition:all 0.5s">
        <!-- Xe cấp cứu -->
        <rect x="50" y="195" width="55" height="26" rx="4" fill="#ffffff" stroke="#e11d48" stroke-width="2"/>
        <rect x="90" y="200" width="12" height="10" fill="#38bdf8"/>
        <circle cx="65" cy="223" r="6" fill="#334155"/>
        <circle cx="92" cy="223" r="6" fill="#334155"/>
        <circle cx="75" cy="190" r="3" fill="#ef4444"/>
        <text x="68" y="213" fill="#e11d48" font-size="12" font-weight="900">✚</text>
        <!-- Lều Triage -->
        <polygon points="130,225 180,165 230,225" fill="#f43f5e" stroke="#be123c" stroke-width="2"/>
        <polygon points="180,165 230,225 210,225 180,185" fill="#e11d48"/>
        <circle cx="180" cy="195" r="9" fill="#ffffff"/>
        <text x="180" y="199" text-anchor="middle" fill="#e11d48" font-size="11" font-weight="900">✚</text>
        <text x="180" y="242" text-anchor="middle" fill="#881337" font-size="10" font-weight="bold">Lều Phân Tuyến</text>
      </g>

      <!-- Giai đoạn 2: Container Phòng Mổ Vô Trùng Dã Chiến (Levels 86-90) -->
      <g opacity="${s2 ? '1' : (s2Started ? '0.55' : '0.15')}" style="transition:all 0.5s">
        <rect x="250" y="170" width="110" height="55" rx="5" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
        <rect x="260" y="180" width="25" height="18" fill="#bae6fd" stroke="#0284c7"/>
        <rect x="295" y="180" width="25" height="18" fill="#bae6fd" stroke="#0284c7"/>
        <ellipse cx="305" cy="165" rx="14" ry="4" fill="#38bdf8" opacity="0.7"/>
        <path d="M260,210 Q270,205 275,215 T290,210" fill="none" stroke="#22c55e" stroke-width="2"/>
        <text x="305" y="242" text-anchor="middle" fill="#0369a1" font-size="10" font-weight="bold">Phòng Mổ Vô Trùng</text>
      </g>

      <!-- Giai đoạn 3: Bồn Oxy Lỏng & Kho Dược Phẩm (Levels 91-95) -->
      <g opacity="${s3 ? '1' : (s3Started ? '0.55' : '0.15')}" style="transition:all 0.5s">
        <circle cx="410" cy="180" r="18" fill="#e0f2fe" stroke="#0284c7" stroke-width="2.5"/>
        <text x="410" y="185" text-anchor="middle" fill="#0369a1" font-size="11" font-weight="900">O₂</text>
        <rect x="445" y="175" width="45" height="50" rx="4" fill="#f8fafc" stroke="#10b981" stroke-width="2"/>
        <text x="467" y="205" text-anchor="middle" fill="#059669" font-size="13">💊</text>
        <path d="M428,185 L445,185" stroke="#38bdf8" stroke-width="3"/>
        <text x="440" y="242" text-anchor="middle" fill="#047857" font-size="10" font-weight="bold">Trạm Oxy & Dược</text>
      </g>

      <!-- Giai đoạn 4: Sân Bay Trực Thăng Cứu Hộ H-Pad (Levels 96-100) -->
      <g opacity="${s4 ? '1' : (s4Started ? '0.55' : '0.15')}" style="transition:all 0.5s">
        <ellipse cx="580" cy="225" rx="55" ry="18" fill="#334155" stroke="#f59e0b" stroke-width="3" stroke-dasharray="6,3"/>
        <text x="580" y="231" text-anchor="middle" fill="#fef08a" font-size="16" font-weight="900">H</text>
        <!-- Trực thăng -->
        <rect x="560" y="160" width="40" height="20" rx="8" fill="#e11d48"/>
        <line x1="535" y1="168" x2="560" y2="168" stroke="#be123c" stroke-width="3"/>
        <line x1="535" y1="162" x2="535" y2="174" stroke="#be123c" stroke-width="2.5"/>
        <line x1="580" y1="160" x2="580" y2="150" stroke="#334155" stroke-width="3"/>
        <ellipse cx="580" cy="150" rx="35" ry="3" fill="#94a3b8" opacity="0.8"/>
        <text x="580" y="258" text-anchor="middle" fill="#881337" font-size="10" font-weight="bold">Trực Thăng Cấp Cứu</text>
      </g>

      <!-- Badge tiến độ -->
      <g transform="translate(18, 18)">
        <rect width="210" height="32" rx="8" fill="#881337" fill-opacity="0.85" stroke="#fda4af" stroke-width="1"/>
        <text x="12" y="21" fill="#fff" font-size="11" font-weight="800">Bệnh Viện Cứu Trợ: ${pct}%</text>
      </g>

      ${renderLiveBlueprintRibbon(timelineState, "#fb7185")}
    </svg>
  `;
}

/**
 * 3. 🤖 SIÊU NHÀ MÁY ROBOT TỰ ĐỘNG (Giga Robotics Factory) - Màn 101-120
 */
export function renderFactoryVisual(completedCount = 0, totalCount = 20, stageStatus = null, timelineState = null) {
  const pct = Math.min(100, Math.round((completedCount / totalCount) * 100));
  const { s1, s1Started, s2, s2Started, s3, s3Started, s4, s4Started } = resolveStages(completedCount, stageStatus);
  const svgH = timelineState ? 340 : 300;

  return `
    <svg viewBox="0 0 700 ${svgH}" width="100%" height="auto" class="tm-megaproject-svg" style="border-radius:14px; background:linear-gradient(180deg, #090d16 0%, #172554 40%, #1e293b 100%); box-shadow:0 10px 25px rgba(37,99,235,0.2)">
      <!-- Hạ tầng nhà xưởng & Lưới sàn công nghiệp -->
      <path d="M0,200 L700,200 L700,300 L0,300 Z" fill="#0f172a"/>
      <line x1="0" y1="230" x2="700" y2="230" stroke="#334155" stroke-dasharray="8,6"/>
      <line x1="0" y1="260" x2="700" y2="260" stroke="#334155" stroke-dasharray="8,6"/>

      <!-- Giai đoạn 1: Trạm Điện Biến Áp & Băng Tải Cơ Khí (Levels 101-105) -->
      <g opacity="${s1 ? '1' : (s1Started ? '0.55' : '0.15')}" style="transition:all 0.5s">
        <rect x="50" y="165" width="45" height="60" rx="3" fill="#1e3a8a" stroke="#60a5fa" stroke-width="2"/>
        <polygon points="72,180 65,195 73,195 68,210 80,192 73,192" fill="#fbbf24"/>
        <!-- Băng tải -->
        <rect x="110" y="215" width="480" height="15" rx="4" fill="#334155" stroke="#64748b" stroke-width="2"/>
        <circle cx="130" cy="222" r="4" fill="#94a3b8"/>
        <circle cx="210" cy="222" r="4" fill="#94a3b8"/>
        <circle cx="310" cy="222" r="4" fill="#94a3b8"/>
        <circle cx="410" cy="222" r="4" fill="#94a3b8"/>
        <circle cx="510" cy="222" r="4" fill="#94a3b8"/>
        <text x="72" y="242" text-anchor="middle" fill="#93c5fd" font-size="10" font-weight="bold">Điện Cao Áp</text>
      </g>

      <!-- Giai đoạn 2: Cánh Tay Robot Hàn Laser (Levels 106-110) -->
      <g opacity="${s2 ? '1' : (s2Started ? '0.55' : '0.15')}" style="transition:all 0.5s">
        <rect x="190" y="185" width="16" height="35" rx="3" fill="#f59e0b"/>
        <line x1="198" y1="185" x2="225" y2="155" stroke="#f59e0b" stroke-width="6" stroke-linecap="round"/>
        <circle cx="225" cy="155" r="5" fill="#334155"/>
        <line x1="225" y1="155" x2="235" y2="195" stroke="#d97706" stroke-width="5" stroke-linecap="round"/>
        <polygon points="235,195 240,210 230,210" fill="#ef4444"/>
        <circle cx="235" cy="212" r="4" fill="#fef08a"/>
        <path d="M235,212 L245,205 M235,212 L225,207 M235,212 L240,220" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="210" y="248" text-anchor="middle" fill="#fcd34d" font-size="10" font-weight="bold">Robot Hàn Laser</text>
      </g>

      <!-- Giai đoạn 3: Cảm Biến AI Mắt Thần Quét Lỗi (Levels 111-115) -->
      <g opacity="${s3 ? '1' : (s3Started ? '0.55' : '0.15')}" style="transition:all 0.5s">
        <rect x="340" y="130" width="20" height="20" rx="4" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
        <circle cx="350" cy="140" r="5" fill="#38bdf8"/>
        <polygon points="345,150 355,150 380,215 320,215" fill="#38bdf8" opacity="0.35"/>
        <text x="350" y="248" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="bold">AI Mắt Thần Lidar</text>
      </g>

      <!-- Giai đoạn 4: Dây Chuyền Lắp Ráp Xe Điện Tự Lái (Levels 116-120) -->
      <g opacity="${s4 ? '1' : (s4Started ? '0.55' : '0.15')}" style="transition:all 0.5s">
        <path d="M470,212 L485,185 L540,185 L565,212 Z" fill="#f8fafc" stroke="#3b82f6" stroke-width="2"/>
        <rect x="495" y="190" width="18" height="12" fill="#93c5fd"/>
        <rect x="520" y="190" width="18" height="12" fill="#93c5fd"/>
        <circle cx="490" cy="216" r="7" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
        <circle cx="545" cy="216" r="7" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
        <text x="520" y="248" text-anchor="middle" fill="#60a5fa" font-size="10" font-weight="bold">Xe Điện Hoàn Tất</text>
      </g>

      <!-- Badge tiến độ -->
      <g transform="translate(18, 18)">
        <rect width="210" height="32" rx="8" fill="#1e3a8a" fill-opacity="0.85" stroke="#60a5fa" stroke-width="1"/>
        <text x="12" y="21" fill="#fff" font-size="11" font-weight="800">Nhà Máy Robot: ${pct}%</text>
      </g>

      ${renderLiveBlueprintRibbon(timelineState, "#60a5fa")}
    </svg>
  `;
}

/**
 * 4. 🌿 KHU BẢO TỒN RỪNG & SAN HÔ (Eco Biosphere) - Màn 121-140
 */
export function renderBiosphereVisual(completedCount = 0, totalCount = 20, stageStatus = null, timelineState = null) {
  const pct = Math.min(100, Math.round((completedCount / totalCount) * 100));
  const { s1, s1Started, s2, s2Started, s3, s3Started, s4, s4Started } = resolveStages(completedCount, stageStatus);
  const svgH = timelineState ? 340 : 300;

  return `
    <svg viewBox="0 0 700 ${svgH}" width="100%" height="auto" class="tm-megaproject-svg" style="border-radius:14px; background:linear-gradient(180deg, #bae6fd 0%, #a7f3d0 35%, #0d9488 65%, #0f172a 100%); box-shadow:0 10px 25px rgba(5,150,105,0.2)">
      <!-- Bầu trời & Đảo Xanh -->
      <path d="M0,170 Q180,120 360,165 T700,160 L700,300 L0,300 Z" fill="#047857"/>
      <path d="M0,200 Q200,190 400,210 T700,205 L700,300 L0,300 Z" fill="#0f766e"/>
      <path d="M0,240 Q300,230 700,245 L700,300 L0,300 Z" fill="#115e59"/>

      <!-- Giai đoạn 1: Trạm Lọc Rác Đại Dương & Cải Tạo Đất (Levels 121-125) -->
      <g opacity="${s1 ? '1' : (s1Started ? '0.55' : '0.15')}" style="transition:all 0.5s">
        <ellipse cx="120" cy="195" rx="30" ry="10" fill="#f59e0b" stroke="#b45309" stroke-width="2"/>
        <line x1="120" y1="195" x2="120" y2="230" stroke="#fef08a" stroke-width="2.5" stroke-dasharray="3,2"/>
        <text x="120" y="248" text-anchor="middle" fill="#fef08a" font-size="10" font-weight="bold">Lọc Rác Đại Dương</text>
      </g>

      <!-- Giai đoạn 2: Vườn Ươm Cây Bản Địa Thủy Canh (Levels 126-130) -->
      <g opacity="${s2 ? '1' : (s2Started ? '0.55' : '0.15')}" style="transition:all 0.5s">
        <circle cx="240" cy="145" r="14" fill="#16a34a"/>
        <circle cx="260" cy="140" r="18" fill="#22c55e"/>
        <circle cx="280" cy="148" r="15" fill="#15803d"/>
        <rect x="257" y="155" width="6" height="20" fill="#78350f"/>
        <text x="260" y="190" text-anchor="middle" fill="#ecfdf5" font-size="10" font-weight="bold">Rừng Tái Sinh</text>
      </g>

      <!-- Giai đoạn 3: Rạn San Hô Sừng Hươu & Đàn Cá Biển (Levels 131-135) -->
      <g opacity="${s3 ? '1' : (s3Started ? '0.55' : '0.15')}" style="transition:all 0.5s">
        <path d="M400,260 L400,235 M400,245 L415,230 M400,240 L385,225" stroke="#f43f5e" stroke-width="4" stroke-linecap="round"/>
        <path d="M440,265 L440,230 M440,242 L455,225 M440,248 L428,235" stroke="#fb923c" stroke-width="4" stroke-linecap="round"/>
        <circle cx="400" cy="232" r="3" fill="#fda4af"/>
        <circle cx="440" cy="226" r="3" fill="#fed7aa"/>
        <polygon points="370,220 380,216 380,224" fill="#38bdf8"/>
        <polygon points="460,215 470,211 470,219" fill="#fef08a"/>
        <text x="420" y="278" text-anchor="middle" fill="#99f6e4" font-size="10" font-weight="bold">Rạn San Hô Rực Rỡ</text>
      </g>

      <!-- Giai đoạn 4: Trạm Cảm Biến IoT & Đón Chim Quý (Levels 136-140) -->
      <g opacity="${s4 ? '1' : (s4Started ? '0.55' : '0.15')}" style="transition:all 0.5s">
        <polygon points="560,110 550,165 570,165" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
        <circle cx="560" cy="108" r="4" fill="#10b981"/>
        <circle cx="560" cy="108" r="10" fill="none" stroke="#6ee7b7" stroke-dasharray="2,2"/>
        <path d="M510,80 Q520,70 530,80 Q540,70 550,80" fill="none" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
        <text x="560" y="185" text-anchor="middle" fill="#ecfdf5" font-size="10" font-weight="bold">Trạm IoT Hoang Dã</text>
      </g>

      <!-- Badge tiến độ -->
      <g transform="translate(18, 18)">
        <rect width="210" height="32" rx="8" fill="#065f46" fill-opacity="0.85" stroke="#34d399" stroke-width="1"/>
        <text x="12" y="21" fill="#fff" font-size="11" font-weight="800">Khu Sinh Thái: ${pct}%</text>
      </g>

      ${renderLiveBlueprintRibbon(timelineState, "#34d399")}
    </svg>
  `;
}

/**
 * 5. 🏙️ ĐẠI ĐÔ THỊ THÔNG MINH (Smart Megacity) - Màn 141-160
 */
export function renderSmartCityVisual(completedCount = 0, totalCount = 20, stageStatus = null, timelineState = null) {
  const pct = Math.min(100, Math.round((completedCount / totalCount) * 100));
  const { s1, s1Started, s2, s2Started, s3, s3Started, s4, s4Started } = resolveStages(completedCount, stageStatus);
  const svgH = timelineState ? 340 : 300;

  return `
    <svg viewBox="0 0 700 ${svgH}" width="100%" height="auto" class="tm-megaproject-svg" style="border-radius:14px; background:linear-gradient(180deg, #1e1b4b 0%, #4338ca 45%, #6366f1 70%, #0f172a 100%); box-shadow:0 10px 25px rgba(124,58,237,0.2)">
      <!-- Hoàng hôn đô thị & Mặt biển bờ vịnh -->
      <circle cx="350" cy="180" r="50" fill="#f43f5e" opacity="0.6"/>
      <path d="M0,190 L700,190 L700,300 L0,300 Z" fill="#0f172a"/>

      <!-- Giai đoạn 1: Nền Móng Công Trình & Khảo Sát (Levels 141-145) -->
      <g opacity="${s1 ? '1' : (s1Started ? '0.55' : '0.15')}" style="transition:all 0.5s">
        <rect x="60" y="180" width="60" height="30" fill="#334155" stroke="#94a3b8" stroke-dasharray="4,2"/>
        <line x1="80" y1="180" x2="80" y2="240" stroke="#f59e0b" stroke-width="3"/>
        <line x1="100" y1="180" x2="100" y2="240" stroke="#f59e0b" stroke-width="3"/>
        <text x="90" y="255" text-anchor="middle" fill="#fcd34d" font-size="10" font-weight="bold">Nền Móng Cọc Sâu</text>
      </g>

      <!-- Giai đoạn 2: Tàu Điện Ngầm Ngầm Metro Cao Tốc (Levels 146-150) -->
      <g opacity="${s2 ? '1' : (s2Started ? '0.55' : '0.15')}" style="transition:all 0.5s">
        <rect x="0" y="240" width="700" height="35" fill="#020617"/>
        <line x1="0" y1="258" x2="700" y2="258" stroke="#38bdf8" stroke-dasharray="6,4"/>
        <rect x="180" y="246" width="90" height="22" rx="6" fill="#f8fafc" stroke="#38bdf8" stroke-width="2"/>
        <rect x="195" y="250" width="15" height="10" fill="#0284c7"/>
        <rect x="220" y="250" width="15" height="10" fill="#0284c7"/>
        <rect x="245" y="250" width="15" height="10" fill="#0284c7"/>
        <text x="225" y="290" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="bold">Metro Ngầm Cao Tốc</text>
      </g>

      <!-- Giai đoạn 3: Turbine Gió Ngoài Khơi & Năng Lượng Tái Tạo (Levels 151-155) -->
      <g opacity="${s3 ? '1' : (s3Started ? '0.55' : '0.15')}" style="transition:all 0.5s">
        <line x1="580" y1="130" x2="580" y2="200" stroke="#f8fafc" stroke-width="3"/>
        <circle cx="580" cy="130" r="4" fill="#38bdf8"/>
        <line x1="580" y1="130" x2="560" y2="105" stroke="#f8fafc" stroke-width="2.5"/>
        <line x1="580" y1="130" x2="600" y2="115" stroke="#f8fafc" stroke-width="2.5"/>
        <line x1="580" y1="130" x2="578" y2="155" stroke="#f8fafc" stroke-width="2.5"/>
        <text x="580" y="225" text-anchor="middle" fill="#93c5fd" font-size="10" font-weight="bold">Điện Gió Vịnh Biển</text>
      </g>

      <!-- Giai đoạn 4: Siêu Tháp Xanh Chọc Trời & Drone Giao Hàng (Levels 156-160) -->
      <g opacity="${s4 ? '1' : (s4Started ? '0.55' : '0.15')}" style="transition:all 0.5s">
        <rect x="360" y="80" width="70" height="120" rx="4" fill="#1e293b" stroke="#7dd3fc" stroke-width="2"/>
        <circle cx="395" cy="100" r="6" fill="#22c55e"/>
        <circle cx="380" cy="130" r="5" fill="#22c55e"/>
        <circle cx="410" cy="150" r="6" fill="#22c55e"/>
        <line x1="395" y1="80" x2="395" y2="60" stroke="#38bdf8" stroke-width="2"/>
        <rect x="300" y="90" width="16" height="6" fill="#f8fafc"/>
        <circle cx="295" cy="88" r="3" fill="#38bdf8"/>
        <circle cx="320" cy="88" r="3" fill="#38bdf8"/>
        <text x="395" y="220" text-anchor="middle" fill="#86efac" font-size="10" font-weight="bold">Tòa Tháp Xanh AI</text>
      </g>

      <!-- Badge tiến độ -->
      <g transform="translate(18, 18)">
        <rect width="210" height="32" rx="8" fill="#312e81" fill-opacity="0.85" stroke="#818cf8" stroke-width="1"/>
        <text x="12" y="21" fill="#fff" font-size="11" font-weight="800">Đại Đô Thị Xanh: ${pct}%</text>
      </g>

      ${renderLiveBlueprintRibbon(timelineState, "#a78bfa")}
    </svg>
  `;
}

/**
 * 6. 🕵️ THÁM TỬ KHOA HỌC HÌNH SỰ CSI (Forensic Lab) - Màn 161-180
 */
export function renderDetectiveVisual(completedCount = 0, totalCount = 20, stageStatus = null, timelineState = null) {
  const pct = Math.min(100, Math.round((completedCount / totalCount) * 100));
  const { s1, s1Started, s2, s2Started, s3, s3Started, s4, s4Started } = resolveStages(completedCount, stageStatus);
  const svgH = timelineState ? 340 : 300;

  return `
    <svg viewBox="0 0 700 ${svgH}" width="100%" height="auto" class="tm-megaproject-svg" style="border-radius:14px; background:linear-gradient(180deg, #020617 0%, #0f172a 40%, #1e1b4b 100%); box-shadow:0 10px 25px rgba(2,132,199,0.2)">
      <!-- Lưới toạ độ phòng điều tra -->
      <line x1="0" y1="210" x2="700" y2="210" stroke="#1e293b" stroke-width="2"/>

      <!-- Giai đoạn 1: Hiện Trường & Dây Phong Tỏa (Levels 161-165) -->
      <g opacity="${s1 ? '1' : (s1Started ? '0.55' : '0.15')}" style="transition:all 0.5s">
        <polygon points="50,195 200,165 200,175 50,205" fill="#facc15"/>
        <text x="125" y="188" fill="#000" font-size="8" font-weight="900" transform="rotate(-11 125 188)">POLICE LINE</text>
        <polygon points="120,225 135,205 150,225" fill="#facc15" stroke="#000"/>
        <text x="135" y="222" text-anchor="middle" font-size="10" font-weight="900">1</text>
        <text x="135" y="245" text-anchor="middle" fill="#fde047" font-size="10" font-weight="bold">Bảo Vệ Hiện Trường</text>
      </g>

      <!-- Giai đoạn 2: Kính Lúp & Dấu Vân Tay Huỳnh Quang (Levels 166-170) -->
      <g opacity="${s2 ? '1' : (s2Started ? '0.55' : '0.15')}" style="transition:all 0.5s">
        <circle cx="270" cy="180" r="28" fill="#0f172a" stroke="#38bdf8" stroke-width="3"/>
        <line x1="290" y1="200" x2="315" y2="225" stroke="#71717a" stroke-width="6" stroke-linecap="round"/>
        <path d="M260,180 A10,10 0 0,1 280,180 A14,14 0 0,1 256,180 A18,18 0 0,1 284,180" fill="none" stroke="#22c55e" stroke-width="2"/>
        <text x="270" y="245" text-anchor="middle" fill="#86efac" font-size="10" font-weight="bold">Phân Tích Vân Tay</text>
      </g>

      <!-- Giai đoạn 3: Kính Hiển Vi & Chuỗi Xoắn ADN (Levels 171-175) -->
      <g opacity="${s3 ? '1' : (s3Started ? '0.55' : '0.15')}" style="transition:all 0.5s">
        <path d="M410,210 L430,210 L425,160 L415,160 Z" fill="#94a3b8"/>
        <ellipse cx="420" cy="155" rx="12" ry="5" fill="#38bdf8"/>
        <path d="M450,150 Q465,165 480,150 T510,150" fill="none" stroke="#c084fc" stroke-width="3"/>
        <path d="M450,165 Q465,150 480,165 T510,165" fill="none" stroke="#f472b6" stroke-width="3"/>
        <line x1="465" y1="154" x2="465" y2="161" stroke="#fff" stroke-width="2"/>
        <line x1="495" y1="154" x2="495" y2="161" stroke="#fff" stroke-width="2"/>
        <text x="470" y="245" text-anchor="middle" fill="#e879f9" font-size="10" font-weight="bold">Giám Định ADN</text>
      </g>

      <!-- Giai đoạn 4: Phá Án Thành Công - Còng Số 8 & Huy Hiệu (Levels 176-180) -->
      <g opacity="${s4 ? '1' : (s4Started ? '0.55' : '0.15')}" style="transition:all 0.5s">
        <polygon points="600,140 625,160 615,190 585,190 575,160" fill="#facc15" stroke="#ca8a04" stroke-width="2"/>
        <text x="600" y="172" text-anchor="middle" font-size="12">⭐</text>
        <text x="600" y="245" text-anchor="middle" fill="#fef08a" font-size="10" font-weight="bold">VỤ ÁN ĐÃ PHÁ</text>
      </g>

      <!-- Badge tiến độ -->
      <g transform="translate(18, 18)">
        <rect width="210" height="32" rx="8" fill="#0f172a" fill-opacity="0.85" stroke="#38bdf8" stroke-width="1"/>
        <text x="12" y="21" fill="#fff" font-size="11" font-weight="800">Hồ Sơ Vụ Án: ${pct}%</text>
      </g>

      ${renderLiveBlueprintRibbon(timelineState, "#38bdf8")}
    </svg>
  `;
}

/**
 * 7. 🏠 NẾP SỐNG ĐỘC LẬP (Routine Master) - Màn 1-20
 */
export function renderRoutineVisual(completedCount = 0, totalCount = 20, stageStatus = null, timelineState = null) {
  const pct = Math.min(100, Math.round((completedCount / totalCount) * 100));
  const { s1, s1Started, s2, s2Started, s3, s3Started, s4, s4Started } = resolveStages(completedCount, stageStatus);
  const svgH = timelineState ? 340 : 300;

  return `
    <svg viewBox="0 0 700 ${svgH}" width="100%" height="auto" class="tm-megaproject-svg" style="border-radius:14px; background:linear-gradient(180deg, #fef3c7 0%, #fffbeb 50%, #f1f5f9 100%); box-shadow:0 10px 25px rgba(217,119,6,0.15)">
      <!-- Phòng ngủ & Nền nhà -->
      <rect x="0" y="200" width="700" height="100" fill="#e2e8f0"/>

      <!-- Giai đoạn 1: Nắng ban mai & Khung cửa sổ (Levels 1-5) -->
      <g opacity="${s1 ? '1' : (s1Started ? '0.55' : '0.15')}" style="transition:all 0.5s">
        <rect x="60" y="50" width="110" height="110" rx="6" fill="#bae6fd" stroke="#0284c7" stroke-width="4"/>
        <line x1="115" y1="50" x2="115" y2="160" stroke="#0284c7" stroke-width="3"/>
        <line x1="60" y1="105" x2="170" y2="105" stroke="#0284c7" stroke-width="3"/>
        <circle cx="140" cy="75" r="18" fill="#fbbf24"/>
        <text x="115" y="180" text-anchor="middle" fill="#0284c7" font-size="10" font-weight="bold">Đón Bình Mai</text>
      </g>

      <!-- Giai đoạn 2: Giường ngủ gấp chăn gối phẳng phiu (Levels 6-10) -->
      <g opacity="${s2 ? '1' : (s2Started ? '0.55' : '0.15')}" style="transition:all 0.5s">
        <rect x="220" y="150" width="140" height="60" rx="8" fill="#93c5fd" stroke="#2563eb" stroke-width="2"/>
        <rect x="225" y="155" width="40" height="25" rx="5" fill="#ffffff" stroke="#93c5fd"/>
        <rect x="260" y="160" width="95" height="45" rx="6" fill="#3b82f6"/>
        <text x="290" y="235" text-anchor="middle" fill="#1e40af" font-size="10" font-weight="bold">Giường Ngăn Nắp</text>
      </g>

      <!-- Giai đoạn 3: Bàn học & Giá sách & Đồng hồ (Levels 11-15) -->
      <g opacity="${s3 ? '1' : (s3Started ? '0.55' : '0.15')}" style="transition:all 0.5s">
        <rect x="420" y="140" width="150" height="70" rx="4" fill="#b45309" stroke="#78350f" stroke-width="2"/>
        <line x1="435" y1="210" x2="435" y2="240" stroke="#78350f" stroke-width="4"/>
        <line x1="555" y1="210" x2="555" y2="240" stroke="#78350f" stroke-width="4"/>
        <path d="M440,140 L445,100 L465,105" fill="none" stroke="#dc2626" stroke-width="3"/>
        <polygon points="460,100 475,105 465,115" fill="#fef08a"/>
        <circle cx="500" cy="128" r="10" fill="#f43f5e"/>
        <circle cx="493" cy="120" r="3" fill="#be123c"/>
        <circle cx="507" cy="120" r="3" fill="#be123c"/>
        <text x="495" y="235" text-anchor="middle" fill="#78350f" font-size="10" font-weight="bold">Bàn Học Gọn Gàng</text>
      </g>

      <!-- Giai đoạn 4: Ba lô đi học ngăn nắp (Levels 16-20) -->
      <g opacity="${s4 ? '1' : (s4Started ? '0.55' : '0.15')}" style="transition:all 0.5s">
        <rect x="600" y="165" width="45" height="50" rx="8" fill="#10b981" stroke="#047857" stroke-width="2"/>
        <circle cx="622" cy="175" r="4" fill="#fef08a"/>
        <text x="622" y="235" text-anchor="middle" fill="#047857" font-size="10" font-weight="bold">Ba Lô Sẵn Sàng</text>
      </g>

      <!-- Badge tiến độ -->
      <g transform="translate(18, 18)">
        <rect width="210" height="32" rx="8" fill="#d97706" fill-opacity="0.9" stroke="#fde68a" stroke-width="1"/>
        <text x="12" y="21" fill="#fff" font-size="11" font-weight="800">Nếp Sống Tự Lập: ${pct}%</text>
      </g>

      ${renderLiveBlueprintRibbon(timelineState, "#d97706")}
    </svg>
  `;
}

/**
 * 8. 🍳 BẾP TRƯỞNG NHÍ (Junior Chef) - Màn 21-40
 */
export function renderCookingVisual(completedCount = 0, totalCount = 20, stageStatus = null, timelineState = null) {
  const pct = Math.min(100, Math.round((completedCount / totalCount) * 100));
  const { s1, s1Started, s2, s2Started, s3, s3Started, s4, s4Started } = resolveStages(completedCount, stageStatus);
  const svgH = timelineState ? 340 : 300;

  return `
    <svg viewBox="0 0 700 ${svgH}" width="100%" height="auto" class="tm-megaproject-svg" style="border-radius:14px; background:linear-gradient(180deg, #ffedd5 0%, #fed7aa 45%, #f1f5f9 100%); box-shadow:0 10px 25px rgba(234,88,12,0.15)">
      <!-- Gạch men ốp bếp & Mặt bàn đá granite -->
      <rect x="0" y="180" width="700" height="120" fill="#cbd5e1"/>
      <rect x="0" y="180" width="700" height="15" fill="#475569"/>

      <!-- Giai đoạn 1: Bếp từ nấu an toàn (Levels 21-25) -->
      <g opacity="${s1 ? '1' : (s1Started ? '0.55' : '0.15')}" style="transition:all 0.5s">
        <rect x="70" y="165" width="140" height="25" rx="4" fill="#0f172a" stroke="#ea580c" stroke-width="2"/>
        <circle cx="110" cy="177" r="8" fill="#dc2626"/>
        <circle cx="170" cy="177" r="8" fill="#dc2626"/>
        <text x="140" y="225" text-anchor="middle" fill="#9a3412" font-size="10" font-weight="bold">Bếp Nấu An Toàn</text>
      </g>

      <!-- Giai đoạn 2: Thớt gỗ & Sơ chế rau củ dinh dưỡng (Levels 26-30) -->
      <g opacity="${s2 ? '1' : (s2Started ? '0.55' : '0.15')}" style="transition:all 0.5s">
        <rect x="260" y="172" width="110" height="18" rx="4" fill="#d97706" stroke="#b45309" stroke-width="2"/>
        <circle cx="285" cy="165" r="7" fill="#ef4444"/>
        <circle cx="305" cy="166" r="6" fill="#ef4444"/>
        <rect x="325" y="162" width="28" height="8" rx="3" fill="#22c55e"/>
        <text x="315" y="225" text-anchor="middle" fill="#9a3412" font-size="10" font-weight="bold">Sơ Chế Dinh Dưỡng</text>
      </g>

      <!-- Giai đoạn 3: Nồi súp bốc khói thơm lừng (Levels 31-35) -->
      <g opacity="${s3 ? '1' : (s3Started ? '0.55' : '0.15')}" style="transition:all 0.5s">
        <rect x="90" y="130" width="40" height="35" rx="3" fill="#94a3b8" stroke="#475569" stroke-width="2"/>
        <path d="M100,120 Q105,105 110,120 T120,105" fill="none" stroke="#cbd5e1" stroke-width="2" opacity="0.8"/>
        <text x="110" y="115" text-anchor="middle" fill="#ea580c" font-size="9" font-weight="bold">♨️ Súp Nóng</text>
      </g>

      <!-- Giai đoạn 4: Dĩa thức ăn MasterChef & Nắp đậy Cloche bạc (Levels 36-40) -->
      <g opacity="${s4 ? '1' : (s4Started ? '0.55' : '0.15')}" style="transition:all 0.5s">
        <ellipse cx="480" cy="180" rx="55" ry="12" fill="#ffffff" stroke="#94a3b8" stroke-width="2"/>
        <ellipse cx="480" cy="165" rx="35" ry="25" fill="#e2e8f0" stroke="#64748b" stroke-width="2"/>
        <circle cx="480" cy="138" r="4" fill="#64748b"/>
        <line x1="560" y1="150" x2="560" y2="190" stroke="#71717a" stroke-width="3"/>
        <line x1="575" y1="150" x2="575" y2="190" stroke="#71717a" stroke-width="3"/>
        <text x="480" y="225" text-anchor="middle" fill="#9a3412" font-size="10" font-weight="bold">Món Ngon Hoàn Tất</text>
      </g>

      <!-- Badge tiến độ -->
      <g transform="translate(18, 18)">
        <rect width="210" height="32" rx="8" fill="#c2410c" fill-opacity="0.9" stroke="#fed7aa" stroke-width="1"/>
        <text x="12" y="21" fill="#fff" font-size="11" font-weight="800">Bếp Trưởng Nhí: ${pct}%</text>
      </g>

      ${renderLiveBlueprintRibbon(timelineState, "#ea580c")}
    </svg>
  `;
}

/**
 * 9. ⚙️ KỸ SƯ CƠ KHÍ & SÁNG CHẾ (Engineering Hub) - Màn 41-60
 * NÂNG CẤP SƯ PHẠM ĐỈNH CAO:
 * 1. Cặp Bánh Răng Ăn Khớp: 2 bánh răng tiếp xúc pitch point, mũi tên chỉ chiều quay thuận & ngược.
 * 2. Mạch Điện Kín Hoàn Chỉnh: Nguồn pin (+) & (-), công tắc đóng, bóng đèn phát sáng, dây cấp & dây hồi tiếp tuần hoàn kín.
 */
export function renderEngineeringVisual(completedCount = 0, totalCount = 20, stageStatus = null, timelineState = null) {
  const pct = Math.min(100, Math.round((completedCount / totalCount) * 100));
  const { s1, s1Started, s2, s2Started, s3, s3Started, s4, s4Started } = resolveStages(completedCount, stageStatus);
  const svgH = timelineState ? 340 : 300;

  return `
    <svg viewBox="0 0 700 ${svgH}" width="100%" height="auto" class="tm-megaproject-svg" style="border-radius:14px; background:linear-gradient(180deg, #0284c7 0%, #0369a1 40%, #0f172a 100%); box-shadow:0 10px 25px rgba(2,132,199,0.25)">
      <!-- Lưới bản vẽ Blueprint kỹ thuật -->
      <line x1="0" y1="50" x2="700" y2="50" stroke="#0ea5e9" stroke-opacity="0.25"/>
      <line x1="0" y1="100" x2="700" y2="100" stroke="#0ea5e9" stroke-opacity="0.25"/>
      <line x1="0" y1="150" x2="700" y2="150" stroke="#0ea5e9" stroke-opacity="0.25"/>
      <line x1="0" y1="200" x2="700" y2="200" stroke="#0ea5e9" stroke-opacity="0.25"/>

      <!-- Giai đoạn 1: Cặp Bánh Răng Ăn Khớp Truyền Chuyển Động (Levels 41-45) -->
      <g opacity="${s1 ? '1' : (s1Started ? '0.55' : '0.15')}" style="transition:all 0.5s">
        <g transform="translate(130, 145)">
          <!-- Bánh răng chủ động 1 (Driver Gear lớn, quay thuận kim đồng hồ) -->
          <g transform="translate(-24, 0)">
            <rect x="-4" y="-36" width="8" height="72" rx="2" fill="#f59e0b"/>
            <rect x="-4" y="-36" width="8" height="72" rx="2" fill="#f59e0b" transform="rotate(45)"/>
            <rect x="-4" y="-36" width="8" height="72" rx="2" fill="#f59e0b" transform="rotate(90)"/>
            <rect x="-4" y="-36" width="8" height="72" rx="2" fill="#f59e0b" transform="rotate(135)"/>
            <circle cx="0" cy="0" r="28" fill="#f59e0b" stroke="#b45309" stroke-width="2"/>
            <circle cx="0" cy="0" r="10" fill="#0284c7" stroke="#0369a1" stroke-width="2"/>
            <!-- Mũi tên quay thuận -->
            <path d="M-14,-14 A20,20 0 0,1 14,-14" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
            <polygon points="12,-18 18,-13 11,-10" fill="#ffffff"/>
          </g>

          <!-- Bánh răng bị động 2 (Driven Gear nhỏ, quay ngược kim đồng hồ, ăn khớp tại điểm giữa) -->
          <g transform="translate(24, 0)">
            <rect x="-3" y="-27" width="6" height="54" rx="2" fill="#38bdf8"/>
            <rect x="-3" y="-27" width="6" height="54" rx="2" fill="#38bdf8" transform="rotate(60)"/>
            <rect x="-3" y="-27" width="6" height="54" rx="2" fill="#38bdf8" transform="rotate(120)"/>
            <circle cx="0" cy="0" r="20" fill="#0284c7" stroke="#0369a1" stroke-width="2"/>
            <circle cx="0" cy="0" r="7" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
            <!-- Mũi tên quay ngược -->
            <path d="M10,-10 A14,14 0 0,0 -10,-10" fill="none" stroke="#fef08a" stroke-width="2" stroke-linecap="round"/>
            <polygon points="-8,-14 -14,-9 -7,-7" fill="#fef08a"/>
          </g>

          <!-- Điểm tiếp xúc ăn khớp (Pitch Point) -->
          <circle cx="0" cy="0" r="3.5" fill="#fef08a"/>
          <text x="0" y="52" text-anchor="middle" fill="#fde68a" font-size="10" font-weight="bold">Cặp Bánh Răng Ăn Khớp</text>
          <text x="0" y="66" text-anchor="middle" fill="#93c5fd" font-size="8.5">Quay Thuận ➔ Truyền Quay Ngược</text>
        </g>
      </g>

      <!-- Giai đoạn 2: Ròng rọc cơ học nâng vật nặng (Levels 46-50) -->
      <g opacity="${s2 ? '1' : (s2Started ? '0.55' : '0.15')}" style="transition:all 0.5s">
        <g transform="translate(290, 140)">
          <line x1="0" y1="-50" x2="0" y2="0" stroke="#cbd5e1" stroke-width="3"/>
          <circle cx="0" cy="0" r="16" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
          <path d="M-14,0 L-14,60 M14,0 L14,40" stroke="#fef08a" stroke-width="2.5"/>
          <rect x="-24" y="60" width="20" height="20" rx="3" fill="#e11d48"/>
          <text x="-14" y="74" text-anchor="middle" fill="#fff" font-size="9" font-weight="900">kg</text>
          <text x="0" y="105" text-anchor="middle" fill="#93c5fd" font-size="10" font-weight="bold">Ròng Rọc Cơ Lực</text>
        </g>
      </g>

      <!-- Giai đoạn 3: Mạch Điện Kín Hoàn Chỉnh & Bóng Đèn Phát Sáng (Levels 51-55) -->
      <g opacity="${s3 ? '1' : (s3Started ? '0.55' : '0.15')}" style="transition:all 0.5s">
        <g transform="translate(460, 142)">
          <!-- Cục pin điện (+) và (-) -->
          <g transform="translate(-40, 20)">
            <rect x="-24" y="-12" width="48" height="24" rx="4" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>
            <rect x="-20" y="-9" width="18" height="18" fill="#3b82f6" rx="2"/>
            <rect x="24" y="-6" width="5" height="12" rx="2" fill="#ef4444"/>
            <text x="14" y="4" fill="#ef4444" font-size="11" font-weight="900">+</text>
            <rect x="-27" y="-5" width="3" height="10" rx="1" fill="#94a3b8"/>
            <text x="-12" y="3" fill="#94a3b8" font-size="12" font-weight="900">-</text>
          </g>

          <!-- Bóng đèn tròn thắp sáng -->
          <g transform="translate(10, -22)">
            <rect x="-7" y="10" width="14" height="10" rx="2" fill="#94a3b8" stroke="#475569"/>
            <line x1="-7" y1="13" x2="7" y2="13" stroke="#cbd5e1" stroke-width="1.5"/>
            <line x1="-7" y1="16" x2="7" y2="16" stroke="#cbd5e1" stroke-width="1.5"/>
            <ellipse cx="0" cy="20" rx="4" ry="2" fill="#334155"/>
            <circle cx="0" cy="-2" r="18" fill="#fef08a" stroke="#eab308" stroke-width="2"/>
            <path d="M-5,10 L-4,0 L0,-6 L4,0 L5,10" fill="none" stroke="#ea580c" stroke-width="2"/>
            <!-- Tia sáng tỏa ra -->
            <line x1="0" y1="-24" x2="0" y2="-32" stroke="#fde047" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="-16" y1="-18" x2="-22" y2="-24" stroke="#fde047" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="16" y1="-18" x2="22" y2="-24" stroke="#fde047" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="-22" y1="-2" x2="-29" y2="-2" stroke="#fde047" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="22" y1="-2" x2="29" y2="-2" stroke="#fde047" stroke-width="2.5" stroke-linecap="round"/>
          </g>

          <!-- Công tắc đóng (Closed Switch) trên dây dương -->
          <g transform="translate(45, 12)">
            <circle cx="-12" cy="0" r="3" fill="#22c55e"/>
            <circle cx="12" cy="0" r="3" fill="#22c55e"/>
            <line x1="-12" y1="0" x2="12" y2="0" stroke="#22c55e" stroke-width="3" stroke-linecap="round"/>
            <text x="0" y="-8" text-anchor="middle" fill="#86efac" font-size="7.5" font-weight="700">Công tắc ĐÓNG</text>
          </g>

          <!-- Dây cấp điện từ cực dương (+) qua công tắc đến chân đèn (Đỏ) -->
          <path d="M-11,20 L33,20 L33,12 M57,12 L70,12 L70,-12 L17,-12" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round"/>
          <polygon points="12,18 20,20 12,22" fill="#f87171"/>

          <!-- Dây mass hồi tiếp từ chân đèn về cực âm (-) TẠO MẠCH KÍN (Xanh) -->
          <path d="M3,-12 L-65,-12 L-65,20 L-67,20" fill="none" stroke="#3b82f6" stroke-width="2.5" stroke-linecap="round"/>
          <polygon points="-67,5 -65,13 -63,5" fill="#60a5fa"/>

          <!-- Chú thích khoa học sư phạm chuẩn xác -->
          <text x="0" y="52" text-anchor="middle" fill="#86efac" font-size="10" font-weight="bold">Mạch Điện Kín (Đèn Sáng)</text>
          <text x="0" y="66" text-anchor="middle" fill="#93c5fd" font-size="8.5">Cực (+) ➔ Công Tắc Đóng ➔ Đèn ➔ Cực (-)</text>
        </g>
      </g>

      <!-- Giai đoạn 4: Kính 3D Anaglyph đỏ xanh (Levels 56-60) -->
      <g opacity="${s4 ? '1' : (s4Started ? '0.55' : '0.15')}" style="transition:all 0.5s">
        <g transform="translate(605, 150)">
          <rect x="-35" y="-12" width="30" height="24" rx="4" fill="#ef4444" stroke="#ffffff" stroke-width="2"/>
          <rect x="5" y="-12" width="30" height="24" rx="4" fill="#06b6d4" stroke="#ffffff" stroke-width="2"/>
          <line x1="-5" y1="0" x2="5" y2="0" stroke="#ffffff" stroke-width="3"/>
          <text x="0" y="45" text-anchor="middle" fill="#67e8f9" font-size="10" font-weight="bold">Kính 3D Anaglyph</text>
        </g>
      </g>

      <!-- Badge tiến độ -->
      <g transform="translate(18, 18)">
        <rect width="210" height="32" rx="8" fill="#0369a1" fill-opacity="0.9" stroke="#7dd3fc" stroke-width="1"/>
        <text x="12" y="21" fill="#fff" font-size="11" font-weight="800">Kỹ Sư Cơ Khí: ${pct}%</text>
      </g>

      ${renderLiveBlueprintRibbon(timelineState, "#38bdf8")}
    </svg>
  `;
}

/**
 * 10. 🏕️ ĐẶC VỤ & SINH TỒN (Survival Camp) - Màn 61-80
 */
export function renderMissionVisual(completedCount = 0, totalCount = 20, stageStatus = null, timelineState = null) {
  const pct = Math.min(100, Math.round((completedCount / totalCount) * 100));
  const { s1, s1Started, s2, s2Started, s3, s3Started, s4, s4Started } = resolveStages(completedCount, stageStatus);
  const svgH = timelineState ? 340 : 300;

  return `
    <svg viewBox="0 0 700 ${svgH}" width="100%" height="auto" class="tm-megaproject-svg" style="border-radius:14px; background:linear-gradient(180deg, #091e14 0%, #14532d 45%, #1c1917 100%); box-shadow:0 10px 25px rgba(22,101,52,0.25)">
      <!-- Bầu trời đêm rừng thông & Ánh sao -->
      <circle cx="100" cy="40" r="1.5" fill="#fff"/>
      <circle cx="250" cy="30" r="1.5" fill="#fff"/>
      <circle cx="450" cy="50" r="2" fill="#fff"/>
      <circle cx="620" cy="35" r="1.5" fill="#fff"/>
      <path d="M560,40 A15,15 0 0,0 575,65 A20,20 0 1,1 560,40" fill="#fef08a"/>

      <!-- Hàng thông hùng vĩ -->
      <polygon points="60,190 85,120 110,190" fill="#064e3b"/>
      <polygon points="90,200 120,130 150,200" fill="#047857"/>
      <polygon points="550,200 580,125 610,200" fill="#064e3b"/>

      <!-- Giai đoạn 1: Lều chỉ huy dã ngoại (Levels 61-65) -->
      <g opacity="${s1 ? '1' : (s1Started ? '0.55' : '0.15')}" style="transition:all 0.5s">
        <g transform="translate(240, 190)">
          <polygon points="-50,20 0,-45 50,20" fill="#15803d" stroke="#166534" stroke-width="2"/>
          <polygon points="0,-45 50,20 30,20 0,-15" fill="#14532d"/>
          <circle cx="0" cy="0" r="4" fill="#fef08a"/>
          <text x="0" y="45" text-anchor="middle" fill="#86efac" font-size="10" font-weight="bold">Lều Chỉ Huy</text>
        </g>
      </g>

      <!-- Giai đoạn 2: Lửa trại an toàn (Levels 66-70) -->
      <g opacity="${s2 ? '1' : (s2Started ? '0.55' : '0.15')}" style="transition:all 0.5s">
        <g transform="translate(380, 205)">
          <circle cx="-16" cy="10" r="6" fill="#78716c"/>
          <circle cx="0" cy="12" r="6" fill="#78716c"/>
          <circle cx="16" cy="10" r="6" fill="#78716c"/>
          <polygon points="-10,5 0,-25 10,5" fill="#ea580c"/>
          <polygon points="-6,5 0,-18 6,5" fill="#facc15"/>
          <text x="0" y="35" text-anchor="middle" fill="#fed7aa" font-size="10" font-weight="bold">Lửa Trại An Toàn</text>
        </g>
      </g>

      <!-- Giai đoạn 3: La bàn dã ngoại & Bình lọc nước (Levels 71-75) -->
      <g opacity="${s3 ? '1' : (s3Started ? '0.55' : '0.15')}" style="transition:all 0.5s">
        <g transform="translate(500, 195)">
          <circle cx="0" cy="0" r="16" fill="#ffffff" stroke="#059669" stroke-width="2.5"/>
          <polygon points="0,-12 4,0 0,2 -4,0" fill="#ef4444"/>
          <polygon points="0,12 4,0 0,-2 -4,0" fill="#3b82f6"/>
          <rect x="35" y="-12" width="16" height="28" rx="4" fill="#0284c7"/>
          <text x="25" y="40" text-anchor="middle" fill="#67e8f9" font-size="10" font-weight="bold">La Bàn Dã Ngoại</text>
        </g>
      </g>

      <!-- Giai đoạn 4: Bầu trời đêm trăng sao & Bản đồ (Levels 76-80) -->
      <g opacity="${s4 ? '1' : (s4Started ? '0.55' : '0.15')}" style="transition:all 0.5s">
        <g transform="translate(620, 195)">
          <rect x="-20" y="-12" width="40" height="26" rx="4" fill="#fef08a" stroke="#d97706" stroke-width="1.5"/>
          <text x="0" y="5" text-anchor="middle" font-size="12">🗺️</text>
          <text x="0" y="40" text-anchor="middle" fill="#fef08a" font-size="10" font-weight="bold">Bản Đồ Sao</text>
        </g>
      </g>

      <!-- Badge tiến độ -->
      <g transform="translate(18, 18)">
        <rect width="210" height="32" rx="8" fill="#14532d" fill-opacity="0.9" stroke="#86efac" stroke-width="1"/>
        <text x="12" y="21" fill="#fff" font-size="11" font-weight="800">Đặc Vụ Sinh Tồn: ${pct}%</text>
      </g>

      ${renderLiveBlueprintRibbon(timelineState, "#4ade80")}
    </svg>
  `;
}

/**
 * BỘ ĐIỀU PHỐI MINH HỌA TRỰC QUAN (Central Visual Dispatcher)
 * Tự động chọn đúng hình minh họa theo danh mục / đại dự án
 * Truyền stageStatus để minh họa phản ánh chính xác từng giai đoạn
 * Truyền timelineState để dải tiến trình kế hoạch phản ánh từng bước Bách đang xếp trong timeline!
 */
export function renderCategoryVisual(category, completedCount = 0, totalCount = 20, stageStatus = null, timelineState = null) {
  switch (category) {
    case "routine":
      return renderRoutineVisual(completedCount, totalCount, stageStatus, timelineState);
    case "cooking":
      return renderCookingVisual(completedCount, totalCount, stageStatus, timelineState);
    case "engineering":
      return renderEngineeringVisual(completedCount, totalCount, stageStatus, timelineState);
    case "mission":
      return renderMissionVisual(completedCount, totalCount, stageStatus, timelineState);
    case "medical":
      return renderHospitalVisual(completedCount, totalCount, stageStatus, timelineState);
    case "computing":
      return renderFactoryVisual(completedCount, totalCount, stageStatus, timelineState);
    case "ecology":
      return renderBiosphereVisual(completedCount, totalCount, stageStatus, timelineState);
    case "architecture":
      return renderSmartCityVisual(completedCount, totalCount, stageStatus, timelineState);
    case "detective":
      return renderDetectiveVisual(completedCount, totalCount, stageStatus, timelineState);
    case "megaproject":
    default:
      return renderMoonBaseVisual(completedCount, totalCount, stageStatus, timelineState);
  }
}
