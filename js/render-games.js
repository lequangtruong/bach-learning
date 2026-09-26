// js/render-games.js - Giao diện và điều khiển Bộ Trò Chơi Sư Phạm cho Bách
import { SpeedMathSession } from "./speed-math.js";
import { BarModelStudioState, BAR_MODEL_CHALLENGES, BAR_MODEL_LEVELS, getNextSmartChallengeIndex } from "./bar-model-studio.js";
import { SpotTheBugSession, BUG_CASES, BUG_TOPICS } from "./spot-the-bug.js";
import { renderBalanceScaleView } from "./render-balance-scale.js";
import { renderMake24View } from "./render-make-24.js";
import { renderSpatial3DView } from "./render-spatial-3d.js";
import { renderLogicGridView } from "./render-logic-grid.js";
import { renderRushHourView } from "./render-rush-hour.js";
import { renderChimpMemoryView } from "./render-chimp-memory.js";
import { renderTangramView } from "./render-tangram.js";
import { CHC_PILLARS, calculateChcPillars, getSmartDailyRecommendation, getAdaptiveProfile, recordGameOutcome } from "./adaptive-engine.js";
import { getBadgesStatus, checkAndAwardBadges, showBadgeCelebration } from "./badge-system.js";

export { 
  renderBalanceScaleView, 
  renderMake24View,
  renderSpatial3DView,
  renderLogicGridView,
  renderRushHourView,
  renderChimpMemoryView,
  renderTangramView,
  calculateChcPillars,
  getSmartDailyRecommendation,
  getAdaptiveProfile,
  recordGameOutcome,
  getBadgesStatus,
  checkAndAwardBadges,
  showBadgeCelebration
};

let activeSpeedMathSession = null;
let activeBarModelState = null;
let activeSpotTheBugSession = null;
const esc = str => String(str ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function getDifficultyMeta(diff) {
  const d = Math.max(1, Math.min(5, Math.round(Number(diff)) || 2));
  const table = {
    1: { rating: 1, label: "Cơ bản", stars: "⭐", text: "1/5 · Cơ bản", color: "#16a34a", bg: "#f0fdf4", border: "#bbf7d0" },
    2: { rating: 2, label: "Vừa sức", stars: "⭐⭐", text: "2/5 · Vừa sức", color: "#0284c7", bg: "#f0f9ff", border: "#bae6fd" },
    3: { rating: 3, label: "Khá", stars: "⭐⭐⭐", text: "3/5 · Khá", color: "#d97706", bg: "#fffbeb", border: "#fde68a" },
    4: { rating: 4, label: "Nâng cao", stars: "⭐⭐⭐⭐", text: "4/5 · Nâng cao", color: "#ea580c", bg: "#fff7ed", border: "#fed7aa" },
    5: { rating: 5, label: "Olympic", stars: "⭐⭐⭐⭐⭐", text: "5/5 · Olympic", color: "#dc2626", bg: "#fef2f2", border: "#fecaca" }
  };
  return table[d];
}

export function getDailyGameChallenges({ gameType = "bar-model", weekNumber = 1, dayIndex = 0 } = {}) {
  const w = Math.max(1, Math.min(36, Number(weekNumber) || 1));
  const d = Math.max(0, Math.min(5, Number(dayIndex) || 0));
  const isSat = d === 5;
  const items = gameType === "bar-model" ? BAR_MODEL_CHALLENGES : BUG_CASES;

  const poolByDiff = { 1: [], 2: [], 3: [], 4: [], 5: [] };
  for (let idx = 0; idx < items.length; idx++) {
    const diff = items[idx].difficulty || 2;
    poolByDiff[diff].push(items[idx]);
  }

  // Mục tiêu độ khó: Bài 1 dễ, Bài 2 khó, Bài 3 (Thứ 7) rất khó. Càng về sau càng khó.
  let targetD1, targetD2, targetD3;
  if (w <= 4) {
    targetD1 = 1;
    targetD2 = 2;
    targetD3 = 3;
  } else if (w <= 8) {
    targetD1 = (d % 2 === 0) ? 1 : 2;
    targetD2 = 3;
    targetD3 = 4;
  } else if (w <= 14) {
    targetD1 = 2;
    targetD2 = (d % 2 === 0) ? 3 : 4;
    targetD3 = (w <= 11) ? 4 : 5;
  } else if (w <= 20) {
    targetD1 = (d % 2 === 0) ? 2 : 3;
    targetD2 = 4;
    targetD3 = 5;
  } else {
    targetD1 = 3;
    targetD2 = (d % 2 === 0) ? 4 : 5;
    targetD3 = 5;
  }

  const pickFromPool = (targetDiff, seedOffset) => {
    let pool = poolByDiff[targetDiff];
    if (!pool || pool.length === 0) {
      pool = poolByDiff[Math.min(5, targetDiff + 1)] || poolByDiff[Math.max(1, targetDiff - 1)] || items;
    }
    const idxInPool = (w * 7 + d * 3 + seedOffset) % pool.length;
    return pool[idxInPool];
  };

  let item1 = pickFromPool(targetD1, 0);
  let item2 = pickFromPool(targetD2, 1);
  if (item2.id === item1.id) {
    item2 = items[(item1.index + 1) % items.length];
  }

  // Đảm bảo Bài 1 dễ hơn hoặc bằng Bài 2
  if (item1.difficulty > item2.difficulty) {
    const temp = item1;
    item1 = item2;
    item2 = temp;
  }

  let selected = [item1, item2];
  if (isSat) {
    let item3 = pickFromPool(targetD3, 2);
    if (item3.id === item1.id || item3.id === item2.id) {
      item3 = items[(item2.index + 2) % items.length];
    }
    selected.push(item3);
    selected.sort((a, b) => a.difficulty - b.difficulty);
  }

  return selected.map((item, idx) => ({
    order: idx + 1,
    total: selected.length,
    roleLabel: idx === 0 
      ? "Bài 1 (Khởi động)" 
      : (idx === 1 ? "Bài 2 (Thử thách)" : "Bài 3 (Chinh phục Thứ 7)"),
    challenge: item,
    diffMeta: getDifficultyMeta(item.difficulty)
  }));
}

export function cleanupActiveGames() {
  if (activeSpeedMathSession) {
    activeSpeedMathSession.stop();
    activeSpeedMathSession = null;
  }
}

export function renderGamesHub({ state, appRoot } = {}) {
  const records = state?.db?.gameRecords || {};
  const speed = records.speedMath || { highScore: 0, gamesPlayed: 0, bestStreak: 0 };
  const bar = records.barModel || { stars: 0, completedChallenges: [] };
  const bug = records.spotTheBug || { stars: 0, solvedCount: 0, solvedBugs: [] };
  const balance = records.balanceScale || { stars: 0, completedChallenges: [] };
  const make24 = records.make24 || { stars: 0, solvedCount: 0, completedChallenges: [] };
  const spatial3D = records.spatial3D || { stars: 0, completedChallenges: [] };
  const logicGrid = records.logicGrid || { stars: 0, completedCases: [] };
  const rushHour = records.rushHour || { stars: 0, completedBoards: [] };
  const chimp = records.chimpMemory || { highScore: 0, maxLevel: 1 };
  const tangram = records.tangram || { stars: 0, completedPuzzles: [] };

  // 1. Phân tích 5 Trụ cột Trí tuệ CHC và Năng lực IQ
  const chcAnalysis = calculateChcPillars(records);
  const smartRec = getSmartDailyRecommendation(records);
  const badgesList = getBadgesStatus(records);
  const unlockedBadgesCount = badgesList.filter(b => b.isUnlocked).length;

  // Render các trụ cột CHC
  let pillarsHtml = "";
  const pillarOrder = ["fluid", "spatial", "speed", "memory", "math"];
  for (const pKey of pillarOrder) {
    const meta = CHC_PILLARS[pKey];
    const data = chcAnalysis.pillars[pKey];
    pillarsHtml += `
      <div class="chc-pillar-card" style="background:${meta.bg}; border-color:${meta.border}">
        <div class="chc-pillar-top">
          <span style="font-size:1.4rem">${meta.icon}</span>
          <span style="font-size:0.75rem; font-weight:800; color:${meta.color}">${meta.code}</span>
        </div>
        <div>
          <div style="font-size:0.88rem; font-weight:800; color:#1e293b">${meta.name}</div>
          <div class="chc-pillar-bar-bg">
            <div class="chc-pillar-bar-fill" style="width:${data.score}%; background:${meta.color}"></div>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.78rem">
            <span style="font-weight:700; color:${data.level.color}">${data.level.badge} ${data.level.title}</span>
            <strong style="color:#1e293b">${data.score}/100</strong>
          </div>
        </div>
      </div>
    `;
  }

  // Render danh sách huy chương
  let badgesHtml = "";
  for (const b of badgesList) {
    const lockClass = b.isUnlocked ? "unlocked" : "locked";
    badgesHtml += `
      <div class="badge-cabinet-item ${lockClass}" title="${esc(b.description)}">
        <div class="badge-icon-wrap">${b.icon}</div>
        <div class="badge-item-title">${esc(b.title)}</div>
        <span class="badge-item-rank rank-${b.rank.toLowerCase()}">${b.rank}</span>
        <div style="font-size:0.7rem; color:var(--muted); font-weight:600">
          ${b.isUnlocked ? "✅ Đã đạt" : `${b.currentProgress}%`}
        </div>
      </div>
    `;
  }

  appRoot.innerHTML = `
    <section class="hero" id="games">
      <div>
        <div class="eyebrow">CỬU CUNG TRÍ TUỆ &amp; THẬP TOÀN OLYMPIC · BÁCH LEARNING LAB</div>
        <h1>Vừa chơi, vừa nghĩ,<br><em>vững vàng phản xạ &amp; IQ.</em></h1>
        <p>5 thử thách toán học được thiết kế riêng (đấu nhẩm 90s, Bar Model, bắt lỗi sai, cân bằng và Make 24) cùng 5 trò khai phóng Não bộ IQ (Không gian 3D, Lưới Logic, Kẹt xe chiến thuật, Trí nhớ siêu phàm &amp; Tangram Singapore GEP).</p>
      </div>
      <div class="hero-note">
        <div class="eyebrow">BẢNG VÀNG THÀNH TÍCH</div>
        <h3 style="margin-top:6px">⚡ 90s: ${speed.highScore} đ · 🧠 Chimp: ${chimp.highScore} đ</h3>
        <p>★ ${bar.stars || (bar.completedChallenges?.length || 0)} sao Bar Model · 🕵️ ${bug.solvedCount || 0} vụ án lỗi sai</p>
        <p style="margin-top:2px">⚖️ ${balance.completedChallenges?.length || 0} bài Cân Bằng · 🎯 ${make24.solvedCount || make24.completedChallenges?.length || 0} bài Make 24</p>
        <p style="margin-top:2px; font-weight:700; color:#c7d2fe">🧊 ${spatial3D.stars || 0} sao Khối 3D · 📐 ${tangram.stars || 0} sao Tangram · 🚗 ${rushHour.stars || 0} sao Kẹt Xe</p>
      </div>
    </section>

    <!-- BẢNG PHÂN TÍCH TĂNG TRƯỞNG TRÍ TUỆ (CHC COGNITIVE PILLARS DASHBOARD) -->
    <div class="chc-dashboard">
      <div class="chc-header-row">
        <div>
          <div class="eyebrow" style="color:var(--primary); font-weight:800">MÔ HÌNH NHẬN THỨC CATTELL-HORN-CARROLL (CHC)</div>
          <h2 style="margin:4px 0; font-size:1.35rem; font-weight:900">5 Trụ Cột Trí Tuệ &amp; Chỉ Số Năng Lực Của Bách</h2>
          <p style="margin:0; font-size:0.88rem; color:var(--muted)">Đánh giá toàn diện dựa trên thành tích 10 bộ trò chơi tư duy.</p>
        </div>
        <div class="chc-iq-badge">
          <span>🧠</span>
          <div>
            <div style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.05em; opacity:0.85">Năng lực tổng hợp</div>
            <div class="chc-iq-number">Chỉ số ${chcAnalysis.estimatedIqIndex} <span style="font-size:0.85rem; font-weight:600; color:#ffffff">(Điểm: ${chcAnalysis.averageScore}/100)</span></div>
          </div>
        </div>
      </div>

      <div class="chc-pillars-grid">
        ${pillarsHtml}
      </div>

      <!-- Banner Gợi ý Thông Minh theo Vygotsky ZPD -->
      <div class="smart-rec-banner">
        <div class="smart-rec-content">
          <span class="smart-rec-icon">${smartRec.icon}</span>
          <div>
            <div class="eyebrow" style="color:#166534; font-weight:800">🎯 GỢI Ý THỬ THÁCH HÔM NAY CHO BÁCH (ZONE OF PROXIMAL DEVELOPMENT)</div>
            <h4 style="margin:2px 0 4px; font-size:1.1rem; color:#14532d">${smartRec.title} · ${smartRec.gameName}</h4>
            <p style="margin:0; font-size:0.86rem; color:#166534">${smartRec.reason}</p>
          </div>
        </div>
        <a href="${smartRec.route}" class="primary-button" style="padding:12px 24px; font-size:0.95rem; background:#16a34a; white-space:nowrap">
          Vào thử thách ngay →
        </a>
      </div>

      <!-- Tủ Huy Chương Vinh Quang -->
      <div style="margin-top:24px; border-top:1px solid #e2e8f0; pt:16px">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px">
          <h3 style="margin:0; font-size:1.05rem; font-weight:800; color:var(--text)">
            🏆 Tủ Huy Chương &amp; Cột Mốc Vinh Quang (${unlockedBadgesCount} / ${badgesList.length} Đã Mở Khóa)
          </h3>
          <span style="font-size:0.82rem; font-weight:700; color:var(--primary)">Chuẩn Olympic &amp; Mensa</span>
        </div>
        <div class="badge-cabinet-grid">
          ${badgesHtml}
        </div>
      </div>
    </div>

    <!-- PHẦN 1: TOÁN HỌC & KỸ NĂNG TÍNH TOÁN -->
    <div style="margin:28px 0 12px; display:flex; align-items:center; gap:8px">
      <span style="font-size:22px">📐</span>
      <h2 style="margin:0; font-size:18px; font-weight:800; color:var(--text)">I. Toán Học &amp; Kỹ Năng Tính Toán (5 Trò)</h2>
    </div>

    <div class="games-hub-grid">
      <!-- Game 1: Đấu tính nhẩm 90s -->
      <div class="game-card">
        <div>
          <span class="game-card-badge badge-speed">⚡ TỐC ĐỘ &amp; PHẢN XẠ</span>
          <h3>Đấu tính nhẩm 90 giây</h3>
          <p>90 giây tập trung cao độ giải chuỗi liên hoàn các phép tính bù số tròn, nhân 11, gấp đôi thừa số. Hỗ trợ bàn phím số lớn iPad và âm thanh phản xạ 0ms.</p>
        </div>
        <div>
          <div class="game-card-footer">
            <div class="game-stat">Kỷ lục: <strong>${speed.highScore} đ</strong> (Streak: ${speed.bestStreak || 0})</div>
            <a href="#games/speed-math" class="primary-button" style="padding:10px 20px; font-size:0.95rem">Bắt đầu →</a>
          </div>
        </div>
      </div>

      <!-- Game 2: Mini Bar Model Studio -->
      <div class="game-card">
        <div>
          <span class="game-card-badge badge-bar">🧱 TỰ DỰNG SƠ ĐỒ</span>
          <h3>Mini Bar Model Studio</h3>
          <p>Tự tay dựng sơ đồ đoạn thẳng Singapore cho bài toán Tổng–Hiệu, Tổng–Tỉ. Kéo thả các thanh, gắn nhãn số và dấu hỏi chấm trên canvas SVG siêu nhẹ.</p>
        </div>
        <div>
          <div class="game-card-footer">
            <div class="game-stat">Đã giải: <strong>${bar.completedChallenges?.length || 0}</strong> thử thách</div>
            <a href="#games/bar-model" class="primary-button" style="padding:10px 20px; font-size:0.95rem">Mở Studio →</a>
          </div>
        </div>
      </div>

      <!-- Game 3: AI Thám Tử Bắt Lỗi Sai -->
      <div class="game-card">
        <div>
          <span class="game-card-badge badge-bug">🕵️ PHẢN BIỆN LOGIC</span>
          <h3>Thám Tử Bắt Lỗi Sai</h3>
          <p>Bạn học sinh AI giả vờ giải sai một bước nhỏ trong bài toán lớp 4 (quên nửa chu vi, nhầm thứ tự phép tính). Bách hãy chỉ ra bước sai để nhận huy hiệu!</p>
        </div>
        <div>
          <div class="game-card-footer">
            <div class="game-stat">Đã phá: <strong>${bug.solvedCount || 0}</strong> vụ</div>
            <a href="#games/spot-the-bug" class="primary-button" style="padding:10px 20px; font-size:0.95rem">Phá án ngay →</a>
          </div>
        </div>
      </div>

      <!-- Game 4: Cân Bằng Bí Mật -->
      <div class="game-card">
        <div>
          <span class="game-card-badge badge-balance">⚖️ TƯ DUY ĐẠI SỐ</span>
          <h3>Cân Bằng Bí Mật (Hệ 2 Cân)</h3>
          <p>Tìm giá trị túi bí mật X và Y để đĩa cân thăng bằng hoàn hảo. Tích hợp chế độ Cân bóng giả Olympic và triệt tiêu 2 vế cân Singapore.</p>
        </div>
        <div>
          <div class="game-card-footer">
            <div class="game-stat">Đã giải: <strong>${balance.completedChallenges?.length || 0}</strong> thử thách</div>
            <a href="#games/balance-scale" class="primary-button" style="padding:10px 20px; font-size:0.95rem; background:#7c3aed">Lên cân ngay →</a>
          </div>
        </div>
      </div>

      <!-- Game 5: Đấu Trường 24 & Số Mục Tiêu -->
      <div class="game-card">
        <div>
          <span class="game-card-badge badge-24">🎯 CẤU TRÚC BIỂU THỨC</span>
          <h3>Đấu Trường 24 &amp; Số Mục Tiêu</h3>
          <p>Thử thách kết hợp 4 thẻ số bằng các phép tính +, −, ×, : và dấu ngoặc ( ) để tạo ra các số mục tiêu phong phú: 24, 36, 40, 48, 50, 60, 72, 100.</p>
        </div>
        <div>
          <div class="game-card-footer">
            <div class="game-stat">Đã giải: <strong>${make24.solvedCount || make24.completedChallenges?.length || 0}</strong> bộ số</div>
            <a href="#games/make-24" class="primary-button" style="padding:10px 20px; font-size:0.95rem; background:#d97706">Vào đấu trường →</a>
          </div>
        </div>
      </div>
    </div>

    <!-- PHẦN 2: NÃO BỘ & PHÁT TRIỂN TRÍ TUỆ IQ (5 TRÒ) -->
    <div style="margin:36px 0 12px; display:flex; align-items:center; gap:8px">
      <span style="font-size:22px">🧠</span>
      <h2 style="margin:0; font-size:18px; font-weight:800; color:var(--text)">II. Não Bộ &amp; Phát Triển Trí Tuệ IQ (4 Trò)</h2>
    </div>

    <div class="games-hub-grid">
      <!-- Game 6: Thám Tử Khối 3D -->
      <div class="game-card">
        <div>
          <span class="game-card-badge" style="background:#e0e7ff; color:#3730a3">🧊 TƯ DUY KHÔNG GIAN 3D</span>
          <h3>Thám Tử Khối 3D &amp; Gấp Hộp</h3>
          <p>Tưởng tượng mô hình không gian 3 chiều, đếm các khối lập phương bị che khuất ở mặt sau, nhận diện hình chiếu Top/Front/Side và gấp hộp giấy chuẩn Singapore GEP.</p>
        </div>
        <div>
          <div class="game-card-footer">
            <div class="game-stat">Đã đạt: <strong>${spatial3D.stars || 0}</strong> sao</div>
            <a href="#games/spatial-3d" class="primary-button" style="padding:10px 20px; font-size:0.95rem; background:#4f46e5">Xoay khối 3D →</a>
          </div>
        </div>
      </div>

      <!-- Game 7: Bảng Lưới Thám Tử -->
      <div class="game-card">
        <div>
          <span class="game-card-badge" style="background:#fef3c7; color:#92400e">🕵️ SUY LUẬN LOẠI TRỪ</span>
          <h3>Bảng Lưới Thám Tử (Logic Grid)</h3>
          <p>Phương pháp suy luận đa chiều kinh điển của Einstein. Đọc kỹ manh mối, tích chọn ✅ và loại trừ ❌ trên bảng ma trận để tìm ra sự thật vụ án.</p>
        </div>
        <div>
          <div class="game-card-footer">
            <div class="game-stat">Đã phá: <strong>${logicGrid.completedCases?.length || 0}</strong> vụ án</div>
            <a href="#games/logic-grid" class="primary-button" style="padding:10px 20px; font-size:0.95rem; background:#f59e0b">Phá án ngay →</a>
          </div>
        </div>
      </div>

      <!-- Game 8: Kẹt Xe Thông Minh -->
      <div class="game-card">
        <div>
          <span class="game-card-badge" style="background:#fee2e2; color:#991b1b">🚗 LẬP KẾ HOẠCH CHIẾN LƯỢC</span>
          <h3>Kẹt Xe Thông Minh (Rush Hour)</h3>
          <p>Trò chơi nổi tiếng Mensa Select Mỹ. Rèn luyện tư duy thuật toán và lập kế hoạch nhìn trước 3–5 bước bằng cách trượt các xe để dọn đường cho Xe Đỏ thoát ra.</p>
        </div>
        <div>
          <div class="game-card-footer">
            <div class="game-stat">Đã vượt: <strong>${rushHour.completedBoards?.length || 0}</strong> thế cờ</div>
            <a href="#games/rush-hour" class="primary-button" style="padding:10px 20px; font-size:0.95rem; background:#ef4444">Giải cứu xe đỏ →</a>
          </div>
        </div>
      </div>

      <!-- Game 9: Não Siêu Nhớ -->
      <div class="game-card">
        <div>
          <span class="game-card-badge" style="background:#e0f2fe; color:#0369a1">⚡ WORKING MEMORY</span>
          <h3>Não Siêu Nhớ (Kyoto Recall)</h3>
          <p>Thí nghiệm trí nhớ ngắn hạn đỉnh cao của Viện Đại học Kyoto. Nhớ vị trí các bong bóng số trong 1.5 giây chớp nhoáng rồi chạm lại theo thứ tự từ nhỏ đến lớn!</p>
        </div>
        <div>
          <div class="game-card-footer">
            <div class="game-stat">Điểm cao: <strong>${chimp.highScore || 0}</strong> đ (Cấp ${chimp.maxLevel || 1})</div>
            <a href="#games/chimp-memory" class="primary-button" style="padding:10px 20px; font-size:0.95rem; background:#0284c7">Thử thách trí nhớ →</a>
          </div>
        </div>
      </div>

      <!-- Game 10: Xếp Hình Trí Uẩn Tangram -->
      <div class="game-card">
        <div>
          <span class="game-card-badge" style="background:#ecfdf5; color:#065f46">📐 TƯ DUY HÌNH HỌC GEP</span>
          <h3>Xếp Hình Trí Uẩn Tangram</h3>
          <p>Bộ 7 mảnh ghép trí tuệ kinh điển chuẩn Singapore GEP. Xoay và ghép 7 hình khối thành các hình bóng silhouette sống động rèn luyện tư duy phân rã hình học.</p>
        </div>
        <div>
          <div class="game-card-footer">
            <div class="game-stat">Đã ghép: <strong>${tangram.completedPuzzles?.length || 0}</strong> hình (${tangram.stars || 0} sao)</div>
            <a href="#games/tangram" class="primary-button" style="padding:10px 20px; font-size:0.95rem; background:#059669">Ghép hình ngay →</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

// 1. Màn chơi Đấu tính nhẩm 90 giây
export function renderSpeedMathArena({ state, appRoot, saveLocal } = {}) {
  if (activeSpeedMathSession) {
    activeSpeedMathSession.stop();
  }

  const savedSpeedMath = state?.db?.gameRecords?.speedMath || {};
  const initialStreak = Number(savedSpeedMath.difficultyBoost) || 0;

  appRoot.innerHTML = `
    <div style="margin-bottom:20px; display:flex; gap:12px; align-items:center">
      <a href="#math" class="text-button" style="display:inline-flex; align-items:center; gap:6px; font-weight:700">← Quay lại Buổi học Toán</a>
      <span style="color:var(--line)">•</span>
      <a href="#games" class="text-button" style="display:inline-flex; align-items:center; gap:6px; font-weight:600; color:var(--muted)">Sảnh Trò Chơi</a>
    </div>

    <div class="speed-math-arena" id="speedMathContainer">
      <div class="arena-topbar">
        <div class="timer-pill">
          <span>⏱️</span>
          <span id="speedMathTimer">90s</span>
        </div>
        <div class="score-display">
          <span class="score-number" id="speedMathScore">0 đ</span>
          <span class="streak-badge" id="speedMathStreak">Streak: ${initialStreak}</span>
          ${initialStreak >= 3 ? `<span class="streak-badge" style="background:#fef08a; color:#854d0e; border:1px solid #facc15">⚡ Tốc độ: Cấp ${initialStreak >= 6 ? "3 (Olympic)" : "2"}</span>` : ""}
        </div>
        <button type="button" class="text-button" id="speedMathQuitBtn" style="font-size:0.85rem; color:var(--muted); padding:4px 8px" title="Dừng chơi giữa chừng">✕ Dừng chơi</button>
      </div>

      <div class="timer-progress-bar">
        <div class="timer-progress-fill" id="speedMathTimerFill" style="width: 100%"></div>
      </div>

      <!-- Starting Level Selector -->
      <div style="display:flex; justify-content:center; align-items:center; gap:6px; margin:10px 0 14px; flex-wrap:wrap">
        <span style="font-size:0.8rem; font-weight:700; color:var(--muted)">Chọn cấp độ xuất phát:</span>
        <button type="button" class="small-button sm-lvl-btn" data-streak="0" style="font-size:0.78rem; padding:3px 8px">Cấp 1</button>
        <button type="button" class="small-button sm-lvl-btn" data-streak="3" style="font-size:0.78rem; padding:3px 8px">Cấp 2</button>
        <button type="button" class="small-button sm-lvl-btn" data-streak="6" style="font-size:0.78rem; padding:3px 8px">Cấp 3</button>
        <button type="button" class="small-button sm-lvl-btn" data-streak="10" style="font-size:0.82rem; padding:4px 12px; background:#fef2f2; color:#dc2626; border:1.5px solid #f87171; font-weight:800">
          🔥 Cấp 4: Olympic Hack Não
        </button>
      </div>

      <div id="gamePlayArea">
        <div class="math-problem-box">
          <div class="math-problem-text" id="mathProblemText">---</div>
          <div id="mathFeedbackBadge" class="math-feedback-badge" style="display:none"></div>
          <div class="math-strategy-hint" id="mathStrategyHint" style="display:none"></div>
        </div>

        <form id="speedMathForm" onsubmit="return false;" class="answer-input-row">
          <input type="text" inputmode="numeric" pattern="[0-9]*" id="speedMathInput" placeholder="?" autocomplete="off" autofocus />
          <button type="button" class="primary-button" id="speedMathSubmitBtn" style="padding:0 24px; font-size:1.2rem; font-weight:800">Gửi</button>
        </form>

        <div style="display:flex; justify-content:center; align-items:center; gap:16px; margin-top:8px">
          <button type="button" class="text-button" id="speedMathToggleHintBtn" style="font-size:0.86rem; color:var(--muted)">💡 Cần gợi ý mẹo?</button>
        </div>

        <div style="margin-top:12px; font-size:0.88rem; color:var(--muted)">
          💡 Nhập số qua bàn phím hoặc chạm ô để mở <strong>Bàn phím số lớn iPad</strong>.
        </div>
      </div>

      <div id="gameEndArea" hidden>
        <!-- Rendered upon 90s completion -->
      </div>
    </div>
  `;

  const timerEl = document.querySelector("#speedMathTimer");
  const fillEl = document.querySelector("#speedMathTimerFill");
  const scoreEl = document.querySelector("#speedMathScore");
  const streakEl = document.querySelector("#speedMathStreak");
  const problemEl = document.querySelector("#mathProblemText");
  const hintEl = document.querySelector("#mathStrategyHint");
  const feedbackEl = document.querySelector("#mathFeedbackBadge");
  const toggleHintBtn = document.querySelector("#speedMathToggleHintBtn");
  const inputEl = document.querySelector("#speedMathInput");
  const submitBtn = document.querySelector("#speedMathSubmitBtn");
  const playArea = document.querySelector("#gamePlayArea");
  const endArea = document.querySelector("#gameEndArea");

  const session = new SpeedMathSession({
    initialStreak,
    onTick: ({ remaining, duration }) => {
      if (timerEl) timerEl.textContent = `${remaining}s`;
      if (fillEl) fillEl.style.width = `${(remaining / duration) * 100}%`;
    },
    onScoreChange: ({ isCorrect, points, score, streak, problem, expected, responseTime, wasFast, usedHint }) => {
      if (scoreEl) scoreEl.textContent = `${score} đ`;
      if (streakEl) streakEl.textContent = `Streak: ${streak} ${streak >= 3 ? "🔥" : ""}`;
      
      if (feedbackEl) {
        feedbackEl.style.display = "inline-block";
        if (isCorrect) {
          feedbackEl.className = "math-feedback-badge correct" + (wasFast ? " fast" : "");
          feedbackEl.innerHTML = usedHint
            ? `✓ Đúng (Có trợ giúp mẹo: không tăng Streak) +${points} đ`
            : (wasFast 
                ? `⚡ ${responseTime}s (Thần tốc!) +${points} đ` 
                : `✓ Đúng rồi! (${responseTime}s) +${points} đ`);
          if (hintEl) {
            hintEl.style.display = "none";
            hintEl.textContent = "";
          }
        } else {
          feedbackEl.className = "math-feedback-badge wrong";
          feedbackEl.innerHTML = `✗ Chưa chính xác (Đáp án: <strong>${expected}</strong>)`;
          if (hintEl && problem?.strategy) {
            hintEl.style.display = "block";
            hintEl.innerHTML = `💡 <b>Chiến lược giải:</b> ${problem.strategy}`;
          }
        }
      }

      if (inputEl) {
        inputEl.value = "";
        inputEl.focus();
      }
    },
    onEnd: async ({ score, correctCount, wrongCount, bestStreak, avgResponseTime, fastSolveCount, velocityTier, difficultyBoost: nextBoost }) => {
      if (playArea) playArea.hidden = true;
      if (endArea) {
        endArea.hidden = false;
        const prevHighScore = state?.db?.gameRecords?.speedMath?.highScore || 0;
        const isNewRecord = score > prevHighScore;

        // Lưu dữ liệu tốc độ và thành tích vào state
        if (!state.db.gameRecords) state.db.gameRecords = {};
        if (!state.db.gameRecords.speedMath) state.db.gameRecords.speedMath = {};
        const sm = state.db.gameRecords.speedMath;
        sm.lastScore = score;
        sm.gamesPlayed = (sm.gamesPlayed || 0) + 1;
        sm.bestStreak = Math.max(sm.bestStreak || 0, bestStreak);
        if (isNewRecord) sm.highScore = score;
        sm.avgResponseTime = avgResponseTime;
        sm.fastSolveCount = (sm.fastSolveCount || 0) + (fastSolveCount || 0);
        sm.velocityTier = velocityTier;
        sm.difficultyBoost = nextBoost; // Lưu để tự động tăng độ khó cho các ván tiếp theo!

        // Adaptive Engine: ghi nhận kết quả và tự điều chỉnh ZPD
        recordGameOutcome(state, "speedMath", { success: score > 0, difficulty: nextBoost >= 10 ? 5 : (nextBoost >= 6 ? 4 : (nextBoost >= 3 ? 3 : 2)), score });
        const newBadges = checkAndAwardBadges(state);
        for (const b of newBadges) showBadgeCelebration(b);

        if (typeof saveLocal === "function") {
          await saveLocal(true);
        }

        const tierLabels = {
          lightning: "⚡ Siêu thần tốc (< 2.8s) · Tự động tăng độ khó lên Cấp 3!",
          fast: "🚀 Nhanh và bén (< 4.2s) · Tự động tăng độ khó lên Cấp 2!",
          normal: "🎯 Đang rèn luyện phản xạ tính nhẩm"
        };

        endArea.innerHTML = `
          <div class="game-results-card">
            <div style="font-size:3.5rem; margin-bottom:12px">${isNewRecord ? "🏆" : "🎉"}</div>
            <h2 class="game-results-title">${isNewRecord ? "KỶ LỤC MỚI CỦA BÁCH!" : "HOÀN THÀNH VÒNG ĐẤU 90S!"}</h2>
            <p style="color:var(--muted)">Bách đã duy trì sự tập trung rất tốt trong suốt 90 giây.</p>

            <div class="results-stats-grid" style="grid-template-columns:repeat(4, 1fr); margin-top:20px">
              <div class="results-stat-box">
                <small>TỔNG ĐIỂM</small>
                <span style="color:var(--coral)">${score}</span>
              </div>
              <div class="results-stat-box">
                <small>ĐÚNG / SAI</small>
                <span>${correctCount} / ${wrongCount}</span>
              </div>
              <div class="results-stat-box">
                <small>TỐC ĐỘ TB</small>
                <span style="color:#0284c7">${avgResponseTime > 0 ? avgResponseTime + "s/câu" : "—"}</span>
              </div>
              <div class="results-stat-box">
                <small>CÂU THẦN TỐC ⚡</small>
                <span style="color:#ea580c">${fastSolveCount || 0}</span>
              </div>
            </div>

            <div style="margin-top:16px; padding:10px 16px; background:#f0f9ff; border:1px solid #bae6fd; border-radius:12px; font-size:0.92rem; color:#0369a1; font-weight:700">
              ${tierLabels[velocityTier] || tierLabels.normal}
            </div>

            <div style="display:flex; gap:12px; justify-content:center; margin-top:28px">
              <button type="button" class="primary-button" id="replayBtn" style="padding:14px 28px; font-weight:800">Chơi lại vòng mới ↻</button>
              <a href="#games" class="small-button" style="padding:14px 24px; font-size:1rem">Về Sảnh Game</a>
            </div>
          </div>
        `;

        document.querySelector("#replayBtn")?.addEventListener("click", () => {
          renderSpeedMathArena({ state, appRoot, saveLocal });
        });
      }
    }
  });

  activeSpeedMathSession = session;
  session.start();

  // Hiển thị đề bài đầu tiên - KHÔNG lộ gợi ý trước khi làm
  if (session.currentProblem) {
    problemEl.textContent = session.currentProblem.prompt;
    if (hintEl) {
      hintEl.textContent = "";
      hintEl.style.display = "none";
    }
  }

  toggleHintBtn?.addEventListener("click", () => {
    if (!hintEl || !session.currentProblem) return;
    if (hintEl.style.display === "none") {
      session.useHint();
      hintEl.style.display = "block";
      hintEl.textContent = `💡 Mẹo tính (Chiến lược): ${session.currentProblem.strategy} (⚠️ Đã xem gợi ý: câu này không tăng chuỗi Streak và chỉ nhận 30đ trợ giúp)`;
      toggleHintBtn.textContent = "🙈 Ẩn gợi ý";
    } else {
      hintEl.style.display = "none";
      toggleHintBtn.textContent = "💡 Cần gợi ý mẹo?";
    }
  });

  const handleAnswerSubmit = () => {
    const val = inputEl?.value.trim();
    if (!val) return;
    const res = session.submitAnswer(val);
    if (res && res.nextProblem) {
      problemEl.textContent = res.nextProblem.prompt;
      if (res.isCorrect && hintEl) {
        hintEl.style.display = "none";
        hintEl.textContent = "";
      }
      if (toggleHintBtn) toggleHintBtn.textContent = "💡 Cần gợi ý mẹo?";
    }
  };

  document.querySelectorAll(".sm-lvl-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const s = Number(btn.dataset.streak);
      session.streak = s;
      if (streakEl) streakEl.textContent = `Streak: ${s} ${s >= 3 ? "🔥" : ""}`;
      const nextP = session.nextProblem();
      if (problemEl && nextP) {
        problemEl.textContent = nextP.prompt;
      }
      if (inputEl) {
        inputEl.value = "";
        inputEl.focus();
      }
    });
  });

  submitBtn?.addEventListener("click", handleAnswerSubmit);
  document.querySelector("#speedMathQuitBtn")?.addEventListener("click", () => {
    session.stop();
  });
  inputEl?.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAnswerSubmit();
    }
  });
  inputEl?.focus?.();
}

// 2. Màn chơi Mini Bar Model Studio (< 15KB Pure SVG)
export function renderBarModelStudioView({ state, appRoot, saveLocal, challengeIndex, params } = {}) {
  let initialIndex = typeof challengeIndex === "number" ? challengeIndex : null;
  let dailyInfo = null;

  const urlParams = params || (typeof window !== "undefined" && window.location?.hash?.includes("?")
    ? new URLSearchParams(window.location.hash.split("?")[1])
    : null);

  if (urlParams) {
    if (initialIndex === null && urlParams.has("challenge")) {
      initialIndex = Number(urlParams.get("challenge"));
    }
    if (urlParams.has("week") || urlParams.has("step")) {
      dailyInfo = {
        week: Number(urlParams.get("week")) || 1,
        day: Number(urlParams.get("day")) || 0,
        step: Number(urlParams.get("step")) || 1,
        total: Number(urlParams.get("total")) || 2
      };
    }
  }

  if (initialIndex === null) {
    initialIndex = activeBarModelState ? activeBarModelState.challengeIndex : 0;
  }
  activeBarModelState = new BarModelStudioState(initialIndex);
  const studio = activeBarModelState;

  function updateStudioUI() {
    const stageEl = document.querySelector("#barSvgStage");
    if (stageEl) {
      stageEl.innerHTML = studio.renderSvgMarkup();
    }
    const inp1 = document.querySelector("#bar1PartsInput");
    const inp2 = document.querySelector("#bar2PartsInput");
    const inp3 = document.querySelector("#bar3PartsInput");
    if (inp1 && document.activeElement !== inp1) inp1.value = studio.bar1.parts;
    if (inp2 && document.activeElement !== inp2) inp2.value = studio.bar2.parts;
    if (inp3 && studio.bar3 && document.activeElement !== inp3) inp3.value = studio.bar3.parts;
  }

  const ch = BAR_MODEL_CHALLENGES[studio.challengeIndex];
  const diffMeta = getDifficultyMeta(ch.difficulty || 2);
  const hasBar3 = Boolean(ch.target.hasBar3 && studio.bar3);
  const isPureSumDiff = Boolean(ch.target.bar1Parts === 1 && ch.target.bar2Parts === 1 && (!hasBar3 || ch.target.bar3Parts === 1) && ch.target.hasDiff);

  appRoot.innerHTML = `
    <div style="margin-bottom:20px; display:flex; gap:12px; align-items:center">
      <a href="#math" class="text-button" style="display:inline-flex; align-items:center; gap:6px; font-weight:700">← Quay lại Buổi học Toán</a>
      <span style="color:var(--line)">•</span>
      <a href="#games" class="text-button" style="display:inline-flex; align-items:center; gap:6px; font-weight:600; color:var(--muted)">Sảnh Trò Chơi</a>
    </div>

    ${dailyInfo ? `
      <div style="background:#f0f9ff; border:1.5px solid #bae6fd; border-radius:12px; padding:10px 16px; margin-bottom:16px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px">
        <div style="display:flex; align-items:center; gap:8px">
          <span style="background:#0284c7; color:#ffffff; font-weight:800; font-size:0.8rem; padding:3px 8px; border-radius:6px">NHIỆM VỤ NGÀY</span>
          <span style="font-weight:700; color:#0369a1; font-size:0.95rem">
            Bài ${dailyInfo.step} / ${dailyInfo.total} · ${dailyInfo.step === 1 ? "Bài 1 (Khởi động)" : (dailyInfo.step === 2 ? "Bài 2 (Thử thách)" : "Bài 3 (Chinh phục Thứ 7)")}
          </span>
        </div>
        <span style="font-size:0.85rem; color:#0284c7; font-weight:600">Thứ ${dailyInfo.day === 5 ? "7" : (dailyInfo.day + 2)} (Tuần ${dailyInfo.week})</span>
      </div>
    ` : ""}

    <div class="bar-studio-container">
      <div class="bar-challenge-card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:8px">
          <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap">
            <span class="game-card-badge badge-bar">${ch.title}</span>
            <span style="display:inline-flex; align-items:center; gap:4px; padding:3px 10px; border-radius:8px; background:${diffMeta.bg}; color:${diffMeta.color}; border:1px solid ${diffMeta.border}; font-weight:700; font-size:0.84rem">
              ${diffMeta.stars} ${diffMeta.text}
            </span>
          </div>
          <div style="display:flex; align-items:center; gap:8px">
            <span style="font-weight:700; color:var(--muted); font-size:0.9rem">Bài ${studio.challengeIndex + 1}</span>
            <select id="barChallengeSelect" style="padding:6px 12px; border-radius:10px; border:1px solid var(--line); font-weight:600; max-width:340px">
              ${(BAR_MODEL_LEVELS && BAR_MODEL_LEVELS.length > 0)
                ? BAR_MODEL_LEVELS.map(lvl => {
                    const challengesInLvl = BAR_MODEL_CHALLENGES.map((c, idx) => ({ ...c, originalIndex: idx })).filter(c => c.level === lvl.name);
                    return `
                      <optgroup label="${lvl.name}">
                        ${challengesInLvl.map(c => `
                          <option value="${c.originalIndex}" ${c.originalIndex === studio.challengeIndex ? "selected" : ""}>
                            #${c.originalIndex + 1}: ${c.title.replace(/^Thử thách \d+:\s*/, "")}
                          </option>
                        `).join("")}
                      </optgroup>
                    `;
                  }).join("")
                : BAR_MODEL_CHALLENGES.map((c, i) => `<option value="${i}" ${i === studio.challengeIndex ? "selected" : ""}>Thử thách ${i + 1}: ${c.title}</option>`).join("")}
            </select>
          </div>
        </div>
        <p style="font-size:1.1rem; font-weight:600; color:var(--ink); line-height:1.6; margin:0 0 12px" id="barProblemDesc">
          ${ch.problem}
        </p>

        ${isPureSumDiff ? `
          <div style="background:#eff6ff; border:1.5px solid #93c5fd; border-radius:14px; padding:12px 16px; margin-bottom:16px; font-size:0.92rem; color:#1e40af; line-height:1.55">
            📘 <b>Dạng toán: TỔNG – HIỆU (${hasBar3 ? "So sánh ba đoạn thẳng" : "So sánh hai đoạn thẳng"})</b><br>
            • Bài này <b>KHÔNG chia theo tỉ số phần</b>! ${hasBar3 ? "Các đối tượng có" : "Hai đối tượng có"} <b>đoạn cơ sở</b> bằng nhau.<br>
            👉 <b>Nhiệm vụ của Bách:</b> Đọc kĩ đề bài để tìm <b>đoạn chênh lệch (Hiệu)</b> và <b>Tổng</b> của ${hasBar3 ? "các đại lượng" : "cả hai"}, rồi điền các số liệu vào sơ đồ bên dưới nhé.
          </div>
        ` : `
          <div style="background:#f0fdf4; border:1px solid #bbf7d0; border-radius:12px; padding:10px 14px; margin-bottom:16px; font-size:0.9rem; color:#166534; line-height:1.5">
            💡 <b>Dạng toán: TỔNG – TỈ & HIỆU – TỈ (Bài toán Tỉ số)</b><br>
            • Đọc kĩ đề bài để xác định tỉ số và chọn số phần tương ứng cho mỗi thanh.<br>
            • Điền giá trị Tổng hoặc Hiệu vào ô tương ứng để hoàn thiện sơ đồ.
          </div>
        `}

        <div class="bar-svg-stage" id="barSvgStage">
          ${studio.renderSvgMarkup()}
        </div>

        <div class="bar-controls-panel" style="margin-top:20px">
          ${isPureSumDiff ? `
            <div class="bar-control-group" style="background:#f8fafc; border:1px dashed #cbd5e1; border-radius:12px; padding:12px">
              <label style="font-weight:700; color:#334155; margin-bottom:4px">Mô hình so sánh đoạn thẳng:</label>
              <div style="font-size:0.88rem; color:#475569; line-height:1.4">
                ${hasBar3 ? "Các đối tượng có đoạn cơ sở bằng nhau; đối tượng lớn hơn có thêm đoạn chênh lệch." : "Hai đối tượng có đoạn cơ sở bằng nhau; đối tượng lớn hơn có thêm đoạn chênh lệch."}
              </div>
            </div>

            <div class="bar-control-group" style="background:#fffbeb; border:1.5px solid #fde68a; border-radius:12px; padding:12px">
              <label style="font-weight:800; color:#b45309">1. Đoạn chênh lệch (Hiệu):</label>
              <div style="display:flex; gap:8px; align-items:center; margin-top:6px">
                <input type="checkbox" id="diffToggle" ${studio.bar1.extraDiff > 0 ? "checked" : ""} style="width:22px; height:22px; accent-color:#f59e0b" />
                <span style="font-size:0.9rem; font-weight:600; color:#78350f">Nhiều hơn:</span>
                <input type="text" id="diffInput" class="bar-studio-input" value="${esc(studio.diffLabel || "")}" placeholder="Số hiệu..." style="padding:6px 10px; border:1.5px solid #f59e0b; border-radius:10px; width:120px; font-weight:600" />
              </div>
            </div>

            <div class="bar-control-group" style="background:#f0fdf4; border:1.5px solid #bbf7d0; border-radius:12px; padding:12px">
              <label style="font-weight:800; color:#15803d">2. Ngoặc tổng cả ${hasBar3 ? "3" : "2"} thanh:</label>
              <div style="margin-top:6px">
                <input type="text" id="totalInput" class="bar-studio-input" value="${esc(studio.totalLabel || "")}" placeholder="Tổng số..." style="padding:6px 10px; border:1.5px solid #22c55e; border-radius:10px; width:130px; font-weight:600" />
              </div>
            </div>
          ` : `
            <div class="bar-control-group">
              <label>${esc(studio.bar1.name)}: Số phần tỉ lệ <small style="font-weight:normal; color:var(--muted)">(1–8)</small></label>
              <div class="stepper-row">
                <button type="button" class="stepper-btn" id="b1Minus" aria-label="Giảm 1 phần">−</button>
                <input type="number" min="1" max="8" class="stepper-input" id="bar1PartsInput" value="${studio.bar1.parts}" aria-label="Nhập số phần của ${esc(studio.bar1.name)}" />
                <button type="button" class="stepper-btn" id="b1Plus" aria-label="Tăng 1 phần">+</button>
              </div>
            </div>

            <div class="bar-control-group">
              <label>${esc(studio.bar2.name)}: Số phần tỉ lệ <small style="font-weight:normal; color:var(--muted)">(1–8)</small></label>
              <div class="stepper-row">
                <button type="button" class="stepper-btn" id="b2Minus" aria-label="Giảm 1 phần">−</button>
                <input type="number" min="1" max="8" class="stepper-input" id="bar2PartsInput" value="${studio.bar2.parts}" aria-label="Nhập số phần của ${esc(studio.bar2.name)}" />
                <button type="button" class="stepper-btn" id="b2Plus" aria-label="Tăng 1 phần">+</button>
              </div>
            </div>

            ${hasBar3 ? `
              <div class="bar-control-group">
                <label>${esc(studio.bar3.name)}: Số phần tỉ lệ <small style="font-weight:normal; color:var(--muted)">(1–8)</small></label>
                <div class="stepper-row">
                  <button type="button" class="stepper-btn" id="b3Minus" aria-label="Giảm 1 phần">−</button>
                  <input type="number" min="1" max="8" class="stepper-input" id="bar3PartsInput" value="${studio.bar3.parts}" aria-label="Nhập số phần của ${esc(studio.bar3.name)}" />
                  <button type="button" class="stepper-btn" id="b3Plus" aria-label="Tăng 1 phần">+</button>
                </div>
              </div>
            ` : ""}

            ${ch.target.hasDiff ? `
              <div class="bar-control-group" style="background:#fffbeb; border:1px solid #fde68a; border-radius:12px; padding:10px 14px">
                <label style="font-weight:700; color:#b45309">Đoạn chênh lệch (Hiệu hai đại lượng):</label>
                <div style="display:flex; gap:8px; align-items:center; margin-top:4px">
                  <input type="checkbox" id="diffToggle" ${studio.bar1.extraDiff > 0 || studio.diffLabel ? "checked" : ""} style="width:20px; height:20px; accent-color:#f59e0b" />
                  <span style="font-size:0.88rem; font-weight:600; color:#78350f">Giá trị hiệu:</span>
                  <input type="text" id="diffInput" class="bar-studio-input" value="${esc(studio.diffLabel || "")}" placeholder="Số hiệu..." style="padding:6px 10px; border:1.5px solid #f59e0b; border-radius:10px; width:110px; font-weight:700" />
                </div>
                <div style="font-size:0.82rem; color:#92400e; margin-top:4px">
                  💡 Chênh lệch ứng với <strong>${Math.abs(studio.bar1.parts - studio.bar2.parts)} phần</strong> trên sơ đồ.
                </div>
              </div>
            ` : `
              <div class="bar-control-group" style="opacity:0.6">
                <label>Đoạn chênh lệch (Hiệu)</label>
                <div style="display:flex; gap:8px; align-items:center">
                  <input type="checkbox" id="diffToggle" disabled style="width:20px; height:20px" />
                  <input type="text" id="diffInput" class="bar-studio-input" disabled placeholder="Không có hiệu" style="padding:6px 10px; border:1px solid var(--line); border-radius:10px; width:110px" />
                </div>
              </div>
            `}

            ${ch.target.totalValue ? `
              <div class="bar-control-group" style="background:#f0fdf4; border:1px solid #bbf7d0; border-radius:12px; padding:10px 14px">
                <label style="font-weight:700; color:#15803d">Ngoặc tổng cả ${hasBar3 ? "3" : "2"} thanh:</label>
                <div style="margin-top:4px">
                  <input type="text" id="totalInput" class="bar-studio-input" value="${esc(studio.totalLabel || "")}" placeholder="Tổng số..." style="padding:6px 10px; border:1.5px solid #22c55e; border-radius:10px; width:130px; font-weight:700" />
                </div>
              </div>
            ` : `
              <div class="bar-control-group" style="opacity:0.6">
                <label>Ngoặc tổng cả ${hasBar3 ? "3" : "2"} thanh</label>
                <input type="text" id="totalInput" class="bar-studio-input" value="${esc(studio.totalLabel || "")}" placeholder="Tổng số (nếu có)..." style="padding:6px 10px; border:1px solid var(--line); border-radius:10px; width:130px" />
              </div>
            `}
          `}
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:24px; flex-wrap:wrap; gap:10px">
          <div style="display:flex; gap:8px; flex-wrap:wrap">
            <button type="button" class="small-button" id="prevBarBtn" ${studio.challengeIndex === 0 ? "disabled" : ""}>← Bài trước</button>
            <button type="button" class="small-button" id="nextBarBtn" ${studio.challengeIndex === BAR_MODEL_CHALLENGES.length - 1 ? "disabled" : ""}>Bài sau →</button>
            <button type="button" class="small-button" id="resetBarBtn" title="Đặt lại mô hình về trạng thái ban đầu">🔄 Làm lại</button>
            <button type="button" class="small-button" id="nextSmartBarBtn" style="color:#0284c7; font-weight:700" title="Chuyển sang dạng toán khác để không bị lặp">Bài khác dạng 🔀</button>
          </div>
          <div style="display:flex; gap:12px; align-items:center">
            <button type="button" class="text-button" id="barHintBtn" style="color:#0369a1">💡 Xem gợi ý</button>
            <button type="button" class="primary-button" id="barCheckBtn" style="padding:12px 28px; font-weight:800">Kiểm tra mô hình ✓</button>
          </div>
        </div>

        <div id="barFeedbackBox" style="margin-top:20px" hidden></div>
      </div>
    </div>
  `;

  // Gắn event listeners
  if (typeof document === "undefined") return;
  document.querySelector("#barChallengeSelect")?.addEventListener("change", e => {
    const nextIdx = Number(e.target.value);
    renderBarModelStudioView({ state, appRoot, saveLocal, challengeIndex: nextIdx, params });
  });

  document.querySelector("#prevBarBtn")?.addEventListener("click", () => {
    if (studio.challengeIndex > 0) {
      renderBarModelStudioView({ state, appRoot, saveLocal, challengeIndex: studio.challengeIndex - 1, params });
    }
  });

  document.querySelector("#nextBarBtn")?.addEventListener("click", () => {
    if (studio.challengeIndex < BAR_MODEL_CHALLENGES.length - 1) {
      renderBarModelStudioView({ state, appRoot, saveLocal, challengeIndex: studio.challengeIndex + 1, params });
    }
  });

  document.querySelector("#resetBarBtn")?.addEventListener("click", () => {
    studio.resetCurrentChallenge();
    renderBarModelStudioView({ state, appRoot, saveLocal, challengeIndex: studio.challengeIndex, params });
  });

  document.querySelector("#nextSmartBarBtn")?.addEventListener("click", () => {
    const solved = state?.db?.gameRecords?.barModel?.completedChallenges?.map(id => {
      const idx = BAR_MODEL_CHALLENGES.findIndex(c => c.id === id);
      return idx;
    }).filter(i => i >= 0) || [];
    const smartIdx = getNextSmartChallengeIndex(studio.challengeIndex, solved);
    renderBarModelStudioView({ state, appRoot, saveLocal, challengeIndex: smartIdx, params });
  });

  const bindPartInput = (inputEl, barKey) => {
    if (!inputEl) return;
    const updateFromInput = () => {
      let val = parseInt(inputEl.value, 10);
      if (Number.isNaN(val)) return;
      val = Math.max(1, Math.min(8, val));
      studio.setParts(barKey, val);
      const stageEl = document.querySelector("#barSvgStage");
      if (stageEl) stageEl.innerHTML = studio.renderSvgMarkup();
    };
    inputEl.addEventListener("input", updateFromInput);
    inputEl.addEventListener("change", () => {
      let val = parseInt(inputEl.value, 10);
      if (Number.isNaN(val) || val < 1) val = 1;
      if (val > 8) val = 8;
      inputEl.value = val;
      studio.setParts(barKey, val);
      updateStudioUI();
    });
  };

  bindPartInput(document.querySelector("#bar1PartsInput"), "bar1");
  bindPartInput(document.querySelector("#bar2PartsInput"), "bar2");
  if (hasBar3) {
    bindPartInput(document.querySelector("#bar3PartsInput"), "bar3");
  }

  document.querySelector("#b1Minus")?.addEventListener("click", () => {
    studio.setParts("bar1", studio.bar1.parts - 1);
    updateStudioUI();
  });
  document.querySelector("#b1Plus")?.addEventListener("click", () => {
    studio.setParts("bar1", studio.bar1.parts + 1);
    updateStudioUI();
  });
  document.querySelector("#b2Minus")?.addEventListener("click", () => {
    studio.setParts("bar2", studio.bar2.parts - 1);
    updateStudioUI();
  });
  document.querySelector("#b2Plus")?.addEventListener("click", () => {
    studio.setParts("bar2", studio.bar2.parts + 1);
    updateStudioUI();
  });
  if (hasBar3) {
    document.querySelector("#b3Minus")?.addEventListener("click", () => {
      studio.setParts("bar3", studio.bar3.parts - 1);
      updateStudioUI();
    });
    document.querySelector("#b3Plus")?.addEventListener("click", () => {
      studio.setParts("bar3", studio.bar3.parts + 1);
      updateStudioUI();
    });
  }

  document.querySelector("#diffToggle")?.addEventListener("change", e => {
    studio.toggleDiff(e.target.checked);
    updateStudioUI();
  });
  document.querySelector("#diffInput")?.addEventListener("input", e => {
    studio.diffLabel = e.target.value;
    updateStudioUI();
  });
  document.querySelector("#totalInput")?.addEventListener("input", e => {
    studio.totalLabel = e.target.value;
    updateStudioUI();
  });

  const fbBox = document.querySelector("#barFeedbackBox");
  document.querySelector("#barHintBtn")?.addEventListener("click", () => {
    if (fbBox) {
      fbBox.hidden = false;
      fbBox.className = "bug-feedback-box try-again";
      fbBox.innerHTML = `<strong>💡 Gợi ý dựng hình:</strong> ${ch.hint}`;
    }
  });

  document.querySelector("#barCheckBtn")?.addEventListener("click", async () => {
    const res = studio.checkSolution();
    if (fbBox) {
      fbBox.hidden = false;
      if (res.isSolved) {
        fbBox.className = "bug-feedback-box success";
        let nextActionHtml = "";
        if (dailyInfo && dailyInfo.step < dailyInfo.total) {
          const dailyList = getDailyGameChallenges({ gameType: "bar-model", weekNumber: dailyInfo.week, dayIndex: dailyInfo.day });
          const nextItem = dailyList[dailyInfo.step];
          nextActionHtml = `
            <div style="margin-top:14px; display:flex; gap:10px; align-items:center; flex-wrap:wrap">
              <a href="#games/bar-model?challenge=${nextItem.challenge.index}&week=${dailyInfo.week}&day=${dailyInfo.day}&step=${dailyInfo.step + 1}&total=${dailyInfo.total}" class="primary-button" style="padding:9px 20px; font-weight:800; font-size:0.92rem; background:#0284c7">
                Làm tiếp Bài ${dailyInfo.step + 1}/${dailyInfo.total} hôm nay →
              </a>
              <a href="#math" class="text-button" style="font-weight:600; color:var(--muted)">Quay lại bài học</a>
            </div>
          `;
        } else if (dailyInfo && dailyInfo.step >= dailyInfo.total) {
          nextActionHtml = `
            <div style="margin-top:14px; display:flex; gap:12px; align-items:center; flex-wrap:wrap">
              <span style="font-weight:800; color:#15803d; font-size:0.95rem">🎉 Xuất sắc! Bách đã hoàn thành toàn bộ ${dailyInfo.total} bài Bar Model hôm nay!</span>
              <a href="#math" class="primary-button" style="padding:9px 20px; font-weight:800; font-size:0.92rem; background:#16a34a">
                ← Quay lại Buổi học Toán
              </a>
            </div>
          `;
        } else if (studio.challengeIndex < BAR_MODEL_CHALLENGES.length - 1) {
          nextActionHtml = `
            <div style="margin-top:12px; display:flex; gap:10px; flex-wrap:wrap">
              <button type="button" class="primary-button" id="solveNextBarBtn" style="padding:8px 18px; font-size:0.9rem">Thử thách tiếp theo →</button>
              <button type="button" class="small-button" id="solveSmartBarBtn" style="padding:8px 16px; font-size:0.9rem; color:#0284c7; font-weight:700">Thử thách khác dạng 🔀</button>
            </div>
          `;
        }
        fbBox.innerHTML = `
          <strong>🎉 XUẤT SẮC! Bách đã dựng chính xác mô hình Bar Model!</strong>
          <p style="margin:8px 0 0"><strong>Lời giải toán tương ứng:</strong> ${res.solution}</p>
          ${nextActionHtml}
        `;
        document.querySelector("#solveNextBarBtn")?.addEventListener("click", () => {
          renderBarModelStudioView({ state, appRoot, saveLocal, challengeIndex: studio.challengeIndex + 1, params });
        });
        document.querySelector("#solveSmartBarBtn")?.addEventListener("click", () => {
          const solved = state?.db?.gameRecords?.barModel?.completedChallenges?.map(id => {
            const idx = BAR_MODEL_CHALLENGES.findIndex(c => c.id === id);
            return idx;
          }).filter(i => i >= 0) || [];
          const smartIdx = getNextSmartChallengeIndex(studio.challengeIndex, solved);
          renderBarModelStudioView({ state, appRoot, saveLocal, challengeIndex: smartIdx, params });
        });
        // Cập nhật kỷ lục
        if (!state.db.gameRecords) state.db.gameRecords = {};
        if (!state.db.gameRecords.barModel) state.db.gameRecords.barModel = { stars: 0, completedChallenges: [] };
        const bm = state.db.gameRecords.barModel;
        if (!Array.isArray(bm.completedChallenges)) bm.completedChallenges = [];
        if (!bm.completedChallenges.includes(ch.id)) {
          bm.completedChallenges.push(ch.id);
          bm.stars = (bm.stars || 0) + 1;
          // Adaptive Engine: ghi nhận kết quả Bar Model
          recordGameOutcome(state, "barModel", { success: true, difficulty: ch.difficulty || 2 });
          const newBadges = checkAndAwardBadges(state);
          for (const b of newBadges) showBadgeCelebration(b);
          if (typeof saveLocal === "function") await saveLocal(true);
        }
      } else {
        fbBox.className = "bug-feedback-box try-again";
        fbBox.innerHTML = `
          <strong>Chưa hoàn toàn chính xác!</strong> Hãy so sánh lại số phần và giá trị tổng/hiệu của hai thanh xem đã đúng với đề bài chưa nhé.
        `;
      }
    }
  });
}

// 3. Màn chơi AI Thám Tử Bắt Lỗi Sai (Spot The Bug)
export function renderSpotTheBugView({ state, appRoot, saveLocal, caseIndex, params } = {}) {
  let initialIndex = typeof caseIndex === "number" ? caseIndex : null;
  let dailyInfo = null;

  const urlParams = params || (typeof window !== "undefined" && window.location?.hash?.includes("?")
    ? new URLSearchParams(window.location.hash.split("?")[1])
    : null);

  if (urlParams) {
    if (initialIndex === null && urlParams.has("case")) {
      initialIndex = Number(urlParams.get("case"));
    }
    if (urlParams.has("week") || urlParams.has("step")) {
      dailyInfo = {
        week: Number(urlParams.get("week")) || 1,
        day: Number(urlParams.get("day")) || 0,
        step: Number(urlParams.get("step")) || 1,
        total: Number(urlParams.get("total")) || 2
      };
    }
  }

  if (initialIndex === null) {
    initialIndex = activeSpotTheBugSession ? activeSpotTheBugSession.currentIndex : 0;
  }
  activeSpotTheBugSession = new SpotTheBugSession(initialIndex);
  const session = activeSpotTheBugSession;

  function renderCurrentProblem() {
    const c = session.getCurrentCase();
    const diffMeta = getDifficultyMeta(c.difficulty || 2);
    appRoot.innerHTML = `
      <div style="margin-bottom:20px; display:flex; gap:12px; align-items:center">
        <a href="#math" class="text-button" style="display:inline-flex; align-items:center; gap:6px; font-weight:700">← Quay lại Buổi học Toán</a>
        <span style="color:var(--line)">•</span>
        <a href="#games" class="text-button" style="display:inline-flex; align-items:center; gap:6px; font-weight:600; color:var(--muted)">Sảnh Trò Chơi</a>
      </div>

      ${dailyInfo ? `
        <div style="background:#fdf2f8; border:1.5px solid #fbcfe8; border-radius:12px; padding:10px 16px; margin-bottom:16px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px">
          <div style="display:flex; align-items:center; gap:8px">
            <span style="background:#db2777; color:#ffffff; font-weight:800; font-size:0.8rem; padding:3px 8px; border-radius:6px">NHIỆM VỤ THÁM TỬ</span>
            <span style="font-weight:700; color:#9d174d; font-size:0.95rem">
              Vụ án ${dailyInfo.step} / ${dailyInfo.total} · ${dailyInfo.step === 1 ? "Vụ 1 (Khởi động)" : (dailyInfo.step === 2 ? "Vụ 2 (Thử thách)" : "Vụ 3 (Chinh phục Thứ 7)")}
            </span>
          </div>
          <span style="font-size:0.85rem; color:#db2777; font-weight:600">Thứ ${dailyInfo.day === 5 ? "7" : (dailyInfo.day + 2)} (Tuần ${dailyInfo.week})</span>
        </div>
      ` : ""}

      <div class="bug-stage">
        <div class="bug-problem-card">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:8px">
            <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap">
              <span class="game-card-badge badge-bug">${c.title}</span>
              <span style="display:inline-flex; align-items:center; gap:4px; padding:3px 10px; border-radius:8px; background:${diffMeta.bg}; color:${diffMeta.color}; border:1px solid ${diffMeta.border}; font-weight:700; font-size:0.84rem">
                ${diffMeta.stars} ${diffMeta.text}
              </span>
              <span style="display:inline-flex; align-items:center; gap:4px; padding:3px 10px; border-radius:8px; background:rgba(219,39,119,0.1); color:#db2777; font-weight:700; font-size:0.82rem">📁 ${c.topic}</span>
            </div>
            <div style="display:flex; align-items:center; gap:8px">
              <span style="font-weight:700; color:var(--muted); font-size:0.9rem">Vụ án ${session.currentIndex + 1}</span>
              <select id="bugCaseSelect" style="padding:6px 12px; border-radius:10px; border:1px solid var(--line); font-weight:600; font-size:0.88rem; max-width:340px">
                ${(BUG_TOPICS && BUG_TOPICS.length > 0)
                  ? BUG_TOPICS.map(t => {
                      const casesInTopic = BUG_CASES.map((b, idx) => ({ ...b, originalIndex: idx })).filter(b => b.topic === t.name);
                      return `
                        <optgroup label="${t.name}">
                          ${casesInTopic.map(b => `
                            <option value="${b.originalIndex}" ${b.originalIndex === session.currentIndex ? "selected" : ""}>
                              #${b.originalIndex + 1}: ${b.title.replace(/^Vụ án \d+:\s*/, "")}
                            </option>
                          `).join("")}
                        </optgroup>
                      `;
                    }).join("")
                  : BUG_CASES.map((b, i) => `<option value="${i}" ${i === session.currentIndex ? "selected" : ""}>Vụ án ${i + 1}: ${b.title.replace(/^Vụ án \d+:\s*/, "")}</option>`).join("")}
              </select>
            </div>
          </div>

          <!-- Subtle Traps Topic Shortcuts -->
          <div style="display:flex; gap:6px; margin:10px 0 14px; flex-wrap:wrap">
            <span style="font-size:0.82rem; font-weight:700; color:var(--muted); align-self:center">Chọn bẫy tinh vi:</span>
            <button type="button" class="small-button bug-filter-btn" data-case-idx="80" style="font-size:0.78rem; padding:3px 8px">📐 Chu vi &amp; Diện tích</button>
            <button type="button" class="small-button bug-filter-btn" data-case-idx="60" style="font-size:0.78rem; padding:3px 8px">⚖️ Tổng–Hiệu kinh điển</button>
            <button type="button" class="small-button bug-filter-btn" data-case-idx="70" style="font-size:0.78rem; padding:3px 8px">📊 Tổng–Tỉ &amp; Hiệu–Tỉ</button>
            <button type="button" class="small-button bug-filter-btn" data-case-idx="110" style="font-size:0.8rem; padding:3px 10px; background:#fdf2f8; color:#db2777; border:1.5px solid #f472b6; font-weight:800">🔥 Trồng cây &amp; Thời gian</button>
          </div>

          <h3 style="font-size:1.3rem; margin:0 0 16px; color:var(--ink)">${c.problem}</h3>
          <p style="color:var(--muted); font-size:0.95rem; margin:0">
            Dưới đây là lời giải chi tiết của một bạn học sinh lớp 4. Trong các bước lập luận này có <strong>1 bước bị cài bẫy sai</strong>. Thám tử Bách hãy quan sát kỹ và chạm vào đúng bước sai nhé:
          </p>

          <div class="bug-steps-list">
            ${c.steps.map(s => `
              <div class="bug-step-item" data-step="${s.num}">
                <div class="step-badge">${s.num}</div>
                <div class="step-text">${s.text}</div>
              </div>
            `).join("")}
          </div>

          <div id="bugFeedbackArea" hidden></div>

          <div style="display:flex; justify-content:space-between; margin-top:24px; border-top:1px solid var(--line); padding-top:18px; flex-wrap:wrap; gap:8px">
            <div style="display:flex; gap:8px">
              <button type="button" class="small-button" id="prevBugBtn">← Bài trước</button>
              <button type="button" class="small-button" id="nextBugBtn">Bài tiếp theo →</button>
            </div>
            <button type="button" class="small-button" id="nextInterleavedBugBtn" style="color:#db2777; font-weight:700" title="Chuyển sang chuyên đề toán khác để chống lặp lại">Đổi chuyên đề 🔀</button>
          </div>
        </div>
      </div>
    `;

    if (typeof document === "undefined") {
      return;
    }

    document.querySelectorAll(".bug-filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        session.currentIndex = Number(btn.dataset.caseIdx);
        renderCurrentProblem();
      });
    });

    document.querySelector("#bugCaseSelect")?.addEventListener("change", e => {
      session.currentIndex = Number(e.target.value);
      renderCurrentProblem();
    });

    document.querySelector("#prevBugBtn")?.addEventListener("click", () => {
      session.prevCase();
      renderCurrentProblem();
    });

    document.querySelector("#nextBugBtn")?.addEventListener("click", () => {
      session.nextCase();
      renderCurrentProblem();
    });

    document.querySelector("#nextInterleavedBugBtn")?.addEventListener("click", () => {
      session.nextInterleavedCase();
      renderCurrentProblem();
    });

    document.querySelectorAll("[data-step]").forEach(item => {
      item.addEventListener("click", async () => {
        const stepNum = Number(item.dataset.step);
        const fb = session.selectStep(stepNum);
        const fbArea = document.querySelector("#bugFeedbackArea");

        document.querySelectorAll("[data-step]").forEach(el => {
          el.classList.remove("selected-wrong", "selected-correct", "selected-consequential");
        });

        if (fbArea && fb) {
          fbArea.hidden = false;
          if (fb.isCorrect) {
            item.classList.add("selected-correct");
            fbArea.className = "bug-feedback-box success";
            let nextActionHtml = "";
            if (dailyInfo && dailyInfo.step < dailyInfo.total) {
              const dailyList = getDailyGameChallenges({ gameType: "spot-the-bug", weekNumber: dailyInfo.week, dayIndex: dailyInfo.day });
              const nextItem = dailyList[dailyInfo.step];
              nextActionHtml = `
                <div style="margin-top:14px; display:flex; gap:10px; align-items:center; flex-wrap:wrap">
                  <a href="#games/spot-the-bug?case=${nextItem.challenge.index}&week=${dailyInfo.week}&day=${dailyInfo.day}&step=${dailyInfo.step + 1}&total=${dailyInfo.total}" class="primary-button" style="padding:9px 20px; font-weight:800; font-size:0.92rem; background:#db2777">
                    Phá tiếp Vụ án ${dailyInfo.step + 1}/${dailyInfo.total} hôm nay →
                  </a>
                  <a href="#math" class="text-button" style="font-weight:600; color:var(--muted)">Quay lại bài học</a>
                </div>
              `;
            } else if (dailyInfo && dailyInfo.step >= dailyInfo.total) {
              nextActionHtml = `
                <div style="margin-top:14px; display:flex; gap:12px; align-items:center; flex-wrap:wrap">
                  <span style="font-weight:800; color:#15803d; font-size:0.95rem">🎉 Xuất sắc! Bách đã phá xong toàn bộ ${dailyInfo.total} vụ án hôm nay!</span>
                  <a href="#math" class="primary-button" style="padding:9px 20px; font-weight:800; font-size:0.92rem; background:#16a34a">
                    ← Quay lại Buổi học Toán
                  </a>
                </div>
              `;
            } else {
              nextActionHtml = `
                <div style="margin-top:12px; display:flex; gap:10px; flex-wrap:wrap">
                  <button type="button" class="primary-button" id="solveNextBugBtn" style="padding:8px 18px; font-size:0.9rem">Vụ án tiếp theo →</button>
                  <button type="button" class="small-button" id="solveInterleavedBugBtn" style="padding:8px 16px; font-size:0.9rem; color:#db2777; font-weight:700">Đổi chuyên đề khác 🔀</button>
                </div>
              `;
            }

            fbArea.innerHTML = `
              <strong>${fb.message}</strong>
              <p style="margin:10px 0 0">${fb.explanation}</p>
              <div style="margin-top:10px; font-weight:700">★ Cách giải chuẩn xác: ${fb.solution}</div>
              ${nextActionHtml}
            `;
            document.querySelector("#solveNextBugBtn")?.addEventListener("click", () => {
              session.nextCase();
              renderCurrentProblem();
            });
            document.querySelector("#solveInterleavedBugBtn")?.addEventListener("click", () => {
              session.nextInterleavedCase();
              renderCurrentProblem();
            });

            // Lưu tiến độ thám tử
            if (!state.db.gameRecords) state.db.gameRecords = {};
            if (!state.db.gameRecords.spotTheBug) state.db.gameRecords.spotTheBug = { stars: 0, solvedCount: 0, solvedBugs: [] };
            const stb = state.db.gameRecords.spotTheBug;
            if (!Array.isArray(stb.solvedBugs)) stb.solvedBugs = [];
            if (!stb.solvedBugs.includes(c.id)) {
              stb.solvedBugs.push(c.id);
              stb.solvedCount = stb.solvedBugs.length;
              stb.stars = (stb.stars || 0) + 1;
              // Adaptive Engine: ghi nhận kết quả Spot The Bug
              recordGameOutcome(state, "spotTheBug", { success: true, difficulty: c.difficulty || 2 });
              const newBadges = checkAndAwardBadges(state);
              for (const b of newBadges) showBadgeCelebration(b);
              if (typeof saveLocal === "function") await saveLocal(true);
            }
          } else {
            item.classList.add(fb.isConsequential ? "selected-consequential" : "selected-wrong");
            fbArea.className = fb.isConsequential ? "bug-feedback-box warning-consequential" : "bug-feedback-box try-again";
            fbArea.innerHTML = `<strong>${fb.message}</strong>`;
          }
        }
      });
    });
  }

  renderCurrentProblem();
}
