// js/render-task-master.js - Giao diện Game "Bậc Thầy Kế Hoạch" (Task Master) 200 Màn Chơi & 5 Đại Dự Án
import { TaskMasterSession, TASK_MASTER_LEVELS } from "./task-master.js";
import { TASK_CATEGORIES } from "./task-master-levels.js";
import { getDifficultyMeta } from "./render-games.js";
import { recordGameOutcome } from "./adaptive-engine.js";
import { checkAndAwardBadges, showBadgeCelebration } from "./badge-system.js";
import { getMegaprojectByLevel, getMegaprojectProgress, renderMoonBaseVisual } from "./task-master-megaprojects.js";

let activeTaskMasterSession = null;
const esc = str => String(str ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function renderTaskMasterView({ state, appRoot, saveLocal, levelIndex = 0, params = {} } = {}) {
  const lIdx = params.level !== undefined ? parseInt(params.level, 10) - 1 : (params.puzzle !== undefined ? parseInt(params.puzzle, 10) : levelIndex);
  const safeIdx = Math.max(0, Math.min(TASK_MASTER_LEVELS.length - 1, isNaN(lIdx) ? 0 : lIdx));

  if (!activeTaskMasterSession || activeTaskMasterSession.levelIndex !== safeIdx) {
    activeTaskMasterSession = new TaskMasterSession({
      levelIndex: safeIdx,
      onWin: async (result) => {
        if (!state.db) state.db = {};
        if (!state.db.gameRecords) state.db.gameRecords = {};
        if (!state.db.gameRecords.taskMaster) {
          state.db.gameRecords.taskMaster = { stars: 0, completedLevels: [], levelStars: {} };
        }

        const tm = state.db.gameRecords.taskMaster;
        if (!tm.completedLevels.includes(result.levelId)) {
          tm.completedLevels.push(result.levelId);
        }

        const prevStar = tm.levelStars?.[result.levelId] || 0;
        if (result.stars > prevStar) {
          if (!tm.levelStars) tm.levelStars = {};
          tm.levelStars[result.levelId] = result.stars;
          tm.stars = Object.values(tm.levelStars).reduce((sum, s) => sum + s, 0);
        }

        // Tự động thích ứng ZPD
        recordGameOutcome(state, "taskMaster", {
          success: true,
          difficulty: activeTaskMasterSession.currentLevel.difficulty || 2
        });

        // Kiểm tra mở khóa huy chương
        const newlyUnlocked = checkAndAwardBadges(state);

        if (typeof saveLocal === "function") {
          saveLocal();
        }

        // Kích hoạt pháo hoa chúc mừng
        if (typeof window !== "undefined" && typeof window.confetti === "function") {
          window.confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
        }

        if (newlyUnlocked && newlyUnlocked.length > 0) {
          setTimeout(() => showBadgeCelebration(newlyUnlocked[0]), 600);
        }
      },
      onStateChange: () => {
        renderLevelContent();
      }
    });
  }

  const session = activeTaskMasterSession;
  const level = session.currentLevel;
  const cat = TASK_CATEGORIES[level.category] || TASK_CATEGORIES.routine;
  const diffMeta = getDifficultyMeta(level.difficulty);
  const records = state?.db?.gameRecords?.taskMaster || { stars: 0, completedLevels: [], levelStars: {} };
  const isCompleted = records.completedLevels?.includes(level.id);
  const earnedStars = records.levelStars?.[level.id] || 0;

  // Kiểm tra xem màn này có thuộc Đại Dự Án nào không
  const megaproject = getMegaprojectByLevel(level.level);
  const megaprojectProgress = megaproject ? getMegaprojectProgress(megaproject.id, records.completedLevels || []) : null;

  // Dữ liệu chặng hiện tại phục vụ bộ chọn 2 tầng
  const currentCat = level.category;
  const currentCatLevels = TASK_MASTER_LEVELS
    .map((lvl, idx) => ({ lvl, idx }))
    .filter(({ lvl }) => lvl.category === currentCat);

  appRoot.innerHTML = `
    <div style="margin-bottom:20px; display:flex; gap:12px; align-items:center; flex-wrap:wrap">
      <a href="#games" class="text-button" style="display:inline-flex; align-items:center; gap:6px; font-weight:700">← Sảnh Trò Chơi</a>
      <span style="color:var(--line)">•</span>
      <span style="font-weight:600; color:var(--muted)">Bậc Thầy Kế Hoạch (Task Master) · ${TASK_MASTER_LEVELS.length} Màn Chơi & 5 Đại Dự Án</span>
    </div>

    <div class="task-master-container" id="taskMasterContainer">
      <!-- Topbar thông tin màn -->
      <div class="tm-topbar">
        <div class="tm-info">
          <div class="eyebrow" style="color:${cat.color}; font-weight:800">
            ${cat.badge} · MÀN ${session.levelIndex + 1} / ${TASK_MASTER_LEVELS.length}
          </div>
          <h2 style="margin:4px 0 8px; font-size:1.45rem">${level.icon} ${esc(level.title)}</h2>
          <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap">
            <span class="difficulty-badge" style="background:${diffMeta.bg}; color:${diffMeta.color}; border:1px solid ${diffMeta.border}">
              ${diffMeta.stars} ${diffMeta.label}
            </span>
            <span style="font-size:0.85rem; font-weight:700; color:var(--muted); background:#f1f5f9; padding:4px 10px; border-radius:12px">
              🎯 Mục tiêu: ${level.tasks.length} bước
            </span>
            ${isCompleted ? `
              <span style="background:#ecfdf5; color:#065f46; font-size:0.82rem; font-weight:800; padding:4px 10px; border-radius:12px; border:1px solid #a7f3d0">
                ✅ Đã qua: ${"⭐".repeat(earnedStars || 1)}
              </span>
            ` : ""}
          </div>
        </div>

        <div class="tm-nav-controls">
          <button id="btnPrevLevel" class="ghost-button" style="padding:8px 12px" ${session.levelIndex === 0 ? "disabled" : ""}>
            ← Trước
          </button>

          <!-- Nút mở Bản Đồ Màn Chơi Toàn Cảnh (Grid) -->
          <button id="btnOpenLevelMap" class="primary-button" style="padding:8px 14px; font-size:0.86rem; font-weight:800; display:inline-flex; align-items:center; gap:6px; background:linear-gradient(135deg, #0284c7 0%, #0369a1 100%)">
            🗺️ Bản Đồ ${TASK_MASTER_LEVELS.length} Màn
          </button>

          <!-- Bộ chọn 2 tầng: Tầng 1 - Chọn Chủ Đề / Chặng -->
          <select id="tmCategorySelector" class="form-select" style="padding:8px 10px; font-weight:700; border-radius:10px; border:1px solid var(--line); font-size:0.86rem; max-width:170px" title="Chọn Chủ Đề / Chặng">
            ${Object.values(TASK_CATEGORIES).map(c => `
              <option value="${c.id}" ${c.id === currentCat ? "selected" : ""}>
                ${c.badge} (${c.range})
              </option>
            `).join("")}
          </select>

          <!-- Bộ chọn 2 tầng: Tầng 2 - Chọn Màn trong Chủ Đề này -->
          <select id="tmSubLevelSelector" class="form-select" style="padding:8px 10px; font-weight:700; border-radius:10px; border:1px solid var(--line); font-size:0.86rem; max-width:180px" title="Chọn Màn Trong Chủ Đề Này">
            ${currentCatLevels.map(({ lvl, idx }) => `
              <option value="${idx}" ${idx === session.levelIndex ? "selected" : ""}>
                Màn ${idx + 1}: ${esc(lvl.title)} ${records.completedLevels?.includes(lvl.id) ? "★" : ""}
              </option>
            `).join("")}
          </select>

          <!-- Select ẩn duy trì 100% tương thích kiểm thử và hợp đồng API cũ -->
          <select id="tmLevelSelector" style="display:none">
            ${TASK_MASTER_LEVELS.map((lvl, idx) => `
              <option value="${idx}" ${idx === session.levelIndex ? "selected" : ""}>Màn ${idx + 1}</option>
            `).join("")}
          </select>

          <button id="btnNextLevel" class="ghost-button" style="padding:8px 12px" ${session.levelIndex === TASK_MASTER_LEVELS.length - 1 ? "disabled" : ""}>
            Sau →
          </button>
        </div>
      </div>

      <!-- Banner Đại Dự Án (Nếu thuộc 1 trong 5 Đại Dự Án) -->
      ${megaproject ? `
        <div class="tm-megaproject-banner" style="background:${megaproject.bg}; border:2px solid ${megaproject.color}; border-radius:14px; padding:14px 18px; margin:16px 0">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px">
            <div>
              <span style="font-size:0.85rem; font-weight:800; color:${megaproject.color}">${megaproject.badge}</span>
              <h4 style="margin:2px 0 4px; font-size:1.15rem; color:#1e293b">${megaproject.icon} ${esc(megaproject.title)}</h4>
              <p style="margin:0; font-size:0.86rem; color:#475569">${esc(megaproject.description)}</p>
            </div>
            <div style="text-align:right">
              <span style="font-size:1.2rem; font-weight:800; color:${megaproject.color}">${megaprojectProgress.percent}%</span>
              <div style="font-size:0.78rem; font-weight:700; color:#64748b">Hoàn thành: ${megaprojectProgress.completedCount}/${megaprojectProgress.totalCount} màn</div>
            </div>
          </div>
          <!-- Đồ họa 2.5D của Căn Cứ Mặt Trăng nếu là chặng Mặt Trăng -->
          ${megaproject.id === "moon-base" ? `
            <div style="margin-top:12px">
              ${renderMoonBaseVisual(megaprojectProgress.completedCount, megaprojectProgress.totalCount)}
            </div>
          ` : ""}
        </div>
      ` : ""}

      <!-- Mô tả nhiệm vụ & Lời khuyên tư duy trước khi làm -->
      <div class="tm-mission-card" style="background:${cat.bg}; border-left:4px solid ${cat.color}; padding:14px 18px; border-radius:12px; margin:16px 0">
        <div style="font-size:0.85rem; font-weight:800; color:${cat.color}; text-transform:uppercase; letter-spacing:0.04em">
          📋 NHIỆM VỤ CỦA CHỈ HUY BÁCH:
        </div>
        <p style="margin:4px 0 6px; font-size:0.98rem; font-weight:700; color:#1e293b">
          ${esc(level.description)}
        </p>
        <div style="font-size:0.86rem; color:#475569; display:flex; align-items:center; gap:6px">
          <span>💡 <em>Thần chú: "Dừng lại 15 giây nhìn trước toàn bộ các thẻ, việc gì phải xong trước thì xếp trước!"</em></span>
        </div>
      </div>

      <!-- Khu vực chính: Dòng Kế Hoạch & Kho Thẻ Hành Động -->
      <div id="tmInteractiveArea"></div>
    </div>
  `;

  function renderLevelContent() {
    const area = document.getElementById("tmInteractiveArea");
    if (!area) return;

    const placedTaskIds = new Set(session.timeline);
    const availablePool = session.availableTasks || [];

    // Kết quả mô phỏng
    const simResult = session.simulationResult;

    area.innerHTML = `
      <!-- 1. DÒNG THỜI GIAN KẾ HOẠCH (TIMELINE) -->
      <div class="tm-section-block">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:8px">
          <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap">
            <span style="font-size:1.3rem">⏱️</span>
            <h3 style="margin:0; font-size:1.15rem; font-weight:800">Dòng Kế Hoạch (Thứ tự các bước thực hiện)</h3>
            <span style="font-size:0.82rem; font-weight:800; color:var(--primary); background:#e0f2fe; padding:2px 8px; border-radius:10px">
              ${session.timeline.length} / ${level.tasks.length} bước
            </span>
            <span style="font-size:0.8rem; font-weight:700; color:${session.moveCount > 3 ? '#b91c1c' : '#475569'}; background:${session.moveCount > 3 ? '#fee2e2' : '#f1f5f9'}; padding:2px 8px; border-radius:10px" title="Đổi chỗ quá 3 lần sẽ bị trừ 1 sao để rèn luyện thói quen suy nghĩ trước khi làm">
              🔄 Đổi chỗ: ${session.moveCount}/3
            </span>
            ${session.hintCount > 0 ? `
              <span style="font-size:0.8rem; font-weight:700; color:#b45309; background:#fef3c7; padding:2px 8px; border-radius:10px" title="Mỗi lần xem gợi ý trừ 1 sao">
                💡 Gợi ý: ${session.hintCount} (-${session.hintCount}⭐)
              </span>
            ` : ""}
            ${session.levelIndex >= 40 ? `
              <span style="font-size:0.8rem; font-weight:700; color:#0369a1; background:#e0f2fe; padding:2px 8px; border-radius:10px" title="Thời gian tiêu chuẩn cho nhiệm vụ kỹ thuật">
                ⏳ Chuẩn: ${level.targetTime || (level.difficulty >= 4 ? 120 : 90)}s
              </span>
            ` : ""}
          </div>
          <div style="display:flex; gap:8px">
            <button id="btnClearTimeline" class="ghost-button" style="padding:6px 12px; font-size:0.85rem; color:#dc2626" ${session.timeline.length === 0 || session.isSimulating ? "disabled" : ""}>
              🗑️ Xóa hết
            </button>
            <button id="btnHintTask" class="ghost-button" style="padding:6px 12px; font-size:0.85rem; color:#d97706" ${session.isSolved || session.isSimulating ? "disabled" : ""}>
              💡 Gợi ý (-1⭐)
            </button>
          </div>
        </div>

        <div class="tm-timeline-slots" id="tmTimeline">
          ${session.timeline.length === 0 ? `
            <div class="tm-empty-timeline-hint">
              <span style="font-size:2rem">👆</span>
              <div style="font-weight:700; color:var(--muted); margin-top:6px">Chưa có bước nào trong kế hoạch!</div>
              <div style="font-size:0.85rem; color:var(--muted)">Hãy bấm chọn các thẻ hành động ở bên dưới theo thứ tự việc cần làm trước.</div>
            </div>
          ` : session.timeline.map((taskId, idx) => {
            const task = session.getTaskById(taskId);
            if (!task) return "";
            
            const isAnchor = session.isAnchor(task.id);
            const isStartAnchorLocked = isAnchor && level.anchors?.some(a => a.position === 0 && a.taskId === task.id && idx === 0);

            let slotClass = "tm-timeline-item";
            let statusIcon = `${idx + 1}`;
            
            if (session.isSimulating) {
              if (idx < session.simulationStep) {
                slotClass += " status-success";
                statusIcon = "✅";
              } else if (idx === session.simulationStep) {
                slotClass += " status-running";
                statusIcon = "⚙️";
              }
            } else if (simResult) {
              if (simResult.success) {
                slotClass += " status-success";
                statusIcon = "✅";
              } else if (simResult.failedIndex === idx) {
                slotClass += " status-failed";
                statusIcon = "⚠️";
              }
            }

            return `
              <div class="${slotClass}" data-step-index="${idx}" data-task-id="${task.id}">
                <div class="tm-step-num">${statusIcon}</div>
                <div class="tm-step-icon">${task.icon}</div>
                <div class="tm-step-content">
                  <div class="tm-step-title">
                    ${esc(task.text)}
                    ${isAnchor ? `<span style="display:inline-block; font-size:0.75rem; font-weight:800; color:#d97706; background:#fef3c7; padding:2px 6px; border-radius:6px; margin-left:6px">🔒 Mốc Neo</span>` : ""}
                    ${task.track === "alpha" ? `<span style="display:inline-block; font-size:0.75rem; font-weight:800; color:#0284c7; background:#e0f2fe; padding:2px 6px; border-radius:6px; margin-left:6px">🔵 Alpha</span>` : ""}
                    ${task.track === "beta" ? `<span style="display:inline-block; font-size:0.75rem; font-weight:800; color:#7c3aed; background:#ede9fe; padding:2px 6px; border-radius:6px; margin-left:6px">🟣 Beta</span>` : ""}
                    ${task.track === "merge" ? `<span style="display:inline-block; font-size:0.75rem; font-weight:800; color:#b45309; background:#fef3c7; padding:2px 6px; border-radius:6px; margin-left:6px">🟡 Hợp Nhất</span>` : ""}
                  </div>
                  ${task.requires?.length ? `
                    <div class="tm-step-deps">Cần trước: ${task.requires.map(r => session.getTaskById(r)?.icon || "•").join(" ")}</div>
                  ` : `<div class="tm-step-deps" style="color:#059669">Khởi đầu độc lập</div>`}
                </div>
                <div class="tm-step-actions">
                  <button class="tm-btn-move" data-move-up="${idx}" title="Chuyển lên trước" ${idx === 0 || session.isSimulating || isStartAnchorLocked ? "disabled" : ""}>▲</button>
                  <button class="tm-btn-move" data-move-down="${idx}" title="Chuyển ra sau" ${idx === session.timeline.length - 1 || session.isSimulating || isStartAnchorLocked ? "disabled" : ""}>▼</button>
                  <button class="tm-btn-remove" data-remove-index="${idx}" title="Gỡ bước này" ${session.isSimulating || isStartAnchorLocked ? "disabled" : ""}>✕</button>
                </div>
              </div>
            `;
          }).join("")}
        </div>

        <!-- Thông báo lỗi khi chạy mô phỏng bị sai logic -->
        ${simResult && !simResult.success ? `
          <div class="tm-fail-alert animate-pop-in" style="margin-top:14px; background:#fff1f2; border:2px solid #fecdd3; border-radius:12px; padding:12px 16px; display:flex; gap:12px; align-items:center">
            <span style="font-size:2rem">🚨</span>
            <div>
              <div style="font-weight:800; color:#be123c; font-size:0.95rem">
                ${simResult.isDistractor ? "BẪY KHOA HỌC / HÀNH ĐỘNG SAI LẦM!" : (simResult.isAnchorError ? "SAI VỊ TRÍ MỐC NEO CỐ ĐỊNH!" : "KẾ HOẠCH BỊ LỖI THỨ TỰ!")}
              </div>
              <p style="margin:2px 0 0; color:#9f1239; font-size:0.9rem">${esc(simResult.reason || simResult.message)}</p>
              ${simResult.scientificExplanation ? `
                <div style="margin-top:6px; font-size:0.85rem; color:#881337; background:#ffe4e6; padding:6px 10px; border-radius:8px">
                  💡 <strong>Giải thích khoa học:</strong> ${esc(simResult.scientificExplanation)}
                </div>
              ` : ""}
            </div>
          </div>
        ` : ""}

        <!-- Thông báo chúc mừng khi hoàn thành xuất sắc -->
        ${simResult && simResult.success ? `
          <div class="tm-success-alert animate-pop-in" style="margin-top:14px; background:#ecfdf5; border:2px solid #a7f3d0; border-radius:12px; padding:16px; text-align:center">
            <div style="font-size:2.4rem">${"⭐".repeat(simResult.stars)}</div>
            <h3 style="margin:6px 0 4px; color:#065f46; font-size:1.3rem">KẾ HOẠCH HOÀN TOÀN CHÍNH XÁC!</h3>
            <p style="margin:0 0 8px; color:#047857; font-size:0.92rem">
              ${simResult.stars === 3
                ? "Thần kỳ! Bách đã suy nghĩ thấu đáo và giải đúng chuẩn xác! Đạt trọn vẹn 3 Sao!" 
                : "Rất tốt! Con đã hoàn thành kế hoạch thành công!"}
            </p>
            <div style="display:inline-flex; gap:10px; font-size:0.85rem; font-weight:700; color:#065f46; background:#d1fae5; padding:6px 14px; border-radius:20px; margin-bottom:12px; flex-wrap:wrap; justify-content:center">
              <span>🔄 Đổi chỗ: ${simResult.moveCount || 0} lần</span>
              <span>•</span>
              <span>💡 Gợi ý: ${simResult.hintCount || 0} lần</span>
              <span>•</span>
              <span>⏱️ Thời gian: ${simResult.elapsedSeconds || 0}s</span>
            </div>
            ${simResult.moveCount > 3 ? `<div style="font-size:0.83rem; color:#b45309; margin-bottom:8px">⚠️ Con đổi chỗ ${simResult.moveCount} lần nên bị trừ bớt sao. Lần sau hãy tính toán trước nhé!</div>` : ""}
            ${simResult.hintCount > 0 ? `<div style="font-size:0.83rem; color:#b45309; margin-bottom:8px">⚠️ Đã dùng ${simResult.hintCount} lần gợi ý (-${simResult.hintCount}⭐).</div>` : ""}
            ${simResult.timeExceeded ? `<div style="font-size:0.83rem; color:#b45309; margin-bottom:8px">⚠️ Thời gian hơi lâu so với mức chuẩn (${simResult.targetTime}s).</div>` : ""}
            <div style="display:flex; justify-content:center; gap:12px; margin-top:8px">
              ${session.levelIndex < TASK_MASTER_LEVELS.length - 1 ? `
                <button id="btnNextLevelModal" class="primary-button" style="padding:10px 24px; font-size:1rem; background:#059669">
                  Tiếp tục Màn ${session.levelIndex + 2} →
                </button>
              ` : `
                <div style="font-weight:800; color:#065f46; font-size:1.1rem">🏆 Chúc mừng Tổng Chỉ Huy Bách đã phá đảo toàn bộ 200 Màn Bậc Thầy Kế Hoạch và xây dựng thành công Căn Cứ Mặt Trăng!</div>
              `}
            </div>
          </div>
        ` : ""}

        <!-- Nút Khởi động quy trình mô phỏng -->
        <div style="margin-top:16px; display:flex; justify-content:center; gap:14px">
          <button id="btnRunSimulation" class="primary-button" style="padding:14px 36px; font-size:1.1rem; font-weight:800; background:linear-gradient(135deg, #0284c7 0%, #0369a1 100%); box-shadow:0 4px 14px rgba(2, 132, 199, 0.4)" ${session.timeline.length === 0 || session.isSimulating ? "disabled" : ""}>
            ${session.isSimulating ? "⚙️ ĐANG CHẠY QUY TRÌNH..." : "🚀 KHỞI ĐỘNG KẾ HOẠCH"}
          </button>
        </div>
      </div>

      <!-- 2. KHO THẺ HÀNH ĐỘNG CẦN CHỌN (AVAILABLE CARDS) -->
      <div class="tm-section-block" style="margin-top:24px">
        <div style="margin-bottom:12px">
          <div style="display:flex; align-items:center; gap:8px">
            <span style="font-size:1.3rem">🗂️</span>
            <h3 style="margin:0; font-size:1.15rem; font-weight:800">Kho Thẻ Hành Động (Bấm vào thẻ để thêm vào Dòng Kế Hoạch)</h3>
          </div>
          <p style="margin:4px 0 0; font-size:0.86rem; color:var(--muted)">
            Đọc kỹ điều kiện tiên quyết của từng thẻ trước khi bấm chọn.
          </p>
        </div>

        <div class="tm-available-grid" id="tmAvailableTasks">
          ${availablePool.map(task => {
            const isPlaced = placedTaskIds.has(task.id);
            const isAnchor = session.isAnchor(task.id);

            return `
              <div class="tm-task-card ${isPlaced ? "is-placed" : ""}" data-task-id="${task.id}" tabindex="0">
                <div class="tm-task-card-icon">${task.icon}</div>
                <div class="tm-task-card-info">
                  <div class="tm-task-card-text">
                    ${esc(task.text)}
                    ${isAnchor ? `<span style="display:inline-block; font-size:0.75rem; font-weight:800; color:#d97706; background:#fef3c7; padding:1px 6px; border-radius:6px; margin-left:4px">🔒 Neo</span>` : ""}
                    ${task.track === "alpha" ? `<span style="display:inline-block; font-size:0.75rem; font-weight:800; color:#0284c7; background:#e0f2fe; padding:1px 6px; border-radius:6px; margin-left:4px">🔵 Alpha</span>` : ""}
                    ${task.track === "beta" ? `<span style="display:inline-block; font-size:0.75rem; font-weight:800; color:#7c3aed; background:#ede9fe; padding:1px 6px; border-radius:6px; margin-left:4px">🟣 Beta</span>` : ""}
                    ${task.track === "merge" ? `<span style="display:inline-block; font-size:0.75rem; font-weight:800; color:#b45309; background:#fef3c7; padding:1px 6px; border-radius:6px; margin-left:4px">🟡 Chung</span>` : ""}
                  </div>
                  ${task.requires?.length ? `
                    <div class="tm-task-card-req">
                      🔒 Điều kiện cần: ${task.requires.map(r => session.getTaskById(r)?.text || r).join(", ")}
                    </div>
                  ` : `
                    <div class="tm-task-card-req" style="color:#059669">
                      ✨ Có thể làm bất cứ lúc nào
                    </div>
                  `}
                </div>
                <div class="tm-task-card-action">
                  ${isPlaced ? `<span class="tm-badge-placed">Đã chọn</span>` : `<span class="tm-badge-add">+ Chọn</span>`}
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </div>

      <!-- 3. BÀI HỌC TƯ DUY RÚT RA -->
      <div style="margin-top:24px; padding:14px 18px; background:#f8fafc; border-radius:12px; border:1px solid #e2e8f0; display:flex; align-items:center; gap:12px">
        <span style="font-size:1.6rem">🧠</span>
        <div style="font-size:0.88rem; color:#334155">
          <strong>Góc nhìn Bậc Thầy:</strong> ${esc(level.lesson || "Suy nghĩ trước khi hành động giúp tiết kiệm 80% thời gian sửa sai lầm.")}
        </div>
      </div>

      <!-- 4. MODAL BẢN ĐỒ 200 MÀN CHƠI TOÀN CẢNH (LEVEL MAP MODAL) -->
      <div id="tmLevelMapModal" class="tm-level-map-overlay" style="display:none">
        <div class="tm-level-map-dialog">
          <div class="tm-map-header">
            <div>
              <div style="font-size:0.75rem; font-weight:800; color:var(--primary); text-transform:uppercase; letter-spacing:0.5px">Lựa Chọn Màn Nhanh & Trực Quan</div>
              <h3 style="margin:2px 0; font-size:1.25rem; font-weight:900; color:#0f172a">🗺️ Bản Đồ Bậc Thầy Kế Hoạch</h3>
              <div style="font-size:0.82rem; color:var(--muted); font-weight:600">
                ⭐ ${records.stars || 0} sao · Đã vượt: <strong>${records.completedLevels?.length || 0}</strong> / ${TASK_MASTER_LEVELS.length} màn
              </div>
            </div>
            <button id="btnCloseLevelMap" class="ghost-button" style="font-size:1.3rem; padding:4px 12px; border-radius:10px; line-height:1">✕</button>
          </div>

          <!-- Thanh Tabs 10 Chủ Đề -->
          <div class="tm-cat-tab-bar" id="tmMapCatTabs">
            ${Object.values(TASK_CATEGORIES).map(c => {
              const catLvls = TASK_MASTER_LEVELS.filter(l => l.category === c.id);
              const catDone = catLvls.filter(l => records.completedLevels?.includes(l.id)).length;
              const isActive = c.id === currentCat;
              return `
                <button type="button" class="tm-cat-tab ${isActive ? "is-active" : ""}" data-cat-id="${c.id}">
                  <span>${c.badge}</span>
                  <span style="font-size:0.75rem; opacity:0.85">(${catDone}/${catLvls.length})</span>
                </button>
              `;
            }).join("")}
          </div>

          <!-- Lưới 20 Màn Chơi của Chủ Đề -->
          <div class="tm-grid-container">
            <div class="tm-grid-cards" id="tmMapGridCards"></div>
          </div>
        </div>
      </div>
    `;

    // Gắn sự kiện cho các nút tương tác
    wireEventListeners();
  }

  function wireEventListeners() {
    // 1. Chuyển màn chơi: Các nút điều hướng
    const prevBtn = document.getElementById("btnPrevLevel");
    if (prevBtn) prevBtn.onclick = () => {
      session.prevLevel();
      renderTaskMasterView({ state, appRoot, saveLocal, levelIndex: session.levelIndex });
    };

    const nextBtn = document.getElementById("btnNextLevel");
    if (nextBtn) nextBtn.onclick = () => {
      session.nextLevel();
      renderTaskMasterView({ state, appRoot, saveLocal, levelIndex: session.levelIndex });
    };

    // Bộ chọn 2 tầng: Chọn Chặng (Category)
    const catSelector = document.getElementById("tmCategorySelector");
    if (catSelector) {
      catSelector.onchange = (e) => {
        const targetCatId = e.target.value;
        const firstLvlIdx = TASK_MASTER_LEVELS.findIndex(l => l.category === targetCatId);
        if (firstLvlIdx !== -1) {
          session.setLevel(firstLvlIdx);
          renderTaskMasterView({ state, appRoot, saveLocal, levelIndex: session.levelIndex });
        }
      };
    }

    // Bộ chọn 2 tầng: Chọn Màn trong Chặng hiện tại
    const subSelector = document.getElementById("tmSubLevelSelector");
    if (subSelector) {
      subSelector.onchange = (e) => {
        session.setLevel(parseInt(e.target.value, 10));
        renderTaskMasterView({ state, appRoot, saveLocal, levelIndex: session.levelIndex });
      };
    }

    // Đồng bộ select cũ
    const selector = document.getElementById("tmLevelSelector");
    if (selector) {
      selector.onchange = (e) => {
        session.setLevel(parseInt(e.target.value, 10));
        renderTaskMasterView({ state, appRoot, saveLocal, levelIndex: session.levelIndex });
      };
    }

    // Modal Bản Đồ Màn Chơi Toàn Cảnh
    const mapModal = document.getElementById("tmLevelMapModal");
    const openMapBtn = document.getElementById("btnOpenLevelMap");
    const closeMapBtn = document.getElementById("btnCloseLevelMap");

    function populateMapGrid(targetCatId) {
      const gridContainer = document.getElementById("tmMapGridCards");
      if (!gridContainer) return;
      const catLvls = TASK_MASTER_LEVELS
        .map((lvl, idx) => ({ lvl, idx }))
        .filter(({ lvl }) => lvl.category === targetCatId);

      gridContainer.innerHTML = catLvls.map(({ lvl, idx }) => {
        const isLvlDone = records.completedLevels?.includes(lvl.id);
        const stars = records.levelStars?.[lvl.id] || (isLvlDone ? 1 : 0);
        const isCurrent = idx === session.levelIndex;
        const isAnchor = lvl.anchor != null;
        const isDual = lvl.parallelTracks != null;
        const isBoss = lvl.difficulty >= 4;

        return `
          <div class="tm-tile-card ${isCurrent ? "is-active" : ""} ${isLvlDone ? "is-completed" : ""}" data-map-level-idx="${idx}" tabindex="0">
            <div class="tm-tile-number">
              Màn ${idx + 1}
              ${isAnchor ? "🔒" : ""}
              ${isDual ? "⚡" : ""}
              ${isBoss ? "👑" : ""}
            </div>
            <div class="tm-tile-icon">${lvl.icon || "📋"}</div>
            <div class="tm-tile-title" title="${esc(lvl.title)}">${esc(lvl.title)}</div>
            <div class="tm-tile-stars">
              ${isLvlDone ? "⭐".repeat(stars) : "<span style='color:#94a3b8; font-size:0.7rem'>Chưa chơi</span>"}
            </div>
          </div>
        `;
      }).join("");

      gridContainer.querySelectorAll("[data-map-level-idx]").forEach(tile => {
        tile.onclick = () => {
          const idx = parseInt(tile.dataset.mapLevelIdx, 10);
          if (!isNaN(idx)) {
            session.setLevel(idx);
            renderTaskMasterView({ state, appRoot, saveLocal, levelIndex: session.levelIndex });
          }
        };
      });
    }

    if (openMapBtn && mapModal) {
      openMapBtn.onclick = () => {
        mapModal.style.display = "flex";
        populateMapGrid(currentCat);
      };
    }

    if (closeMapBtn && mapModal) {
      closeMapBtn.onclick = () => {
        mapModal.style.display = "none";
      };
    }

    if (mapModal) {
      mapModal.onclick = (e) => {
        if (e.target === mapModal) {
          mapModal.style.display = "none";
        }
      };

      const catTabs = mapModal.querySelectorAll(".tm-cat-tab");
      catTabs.forEach(tab => {
        tab.onclick = () => {
          catTabs.forEach(t => t.classList.remove("is-active"));
          tab.classList.add("is-active");
          populateMapGrid(tab.dataset.catId);
        };
      });
    }

    const modalNextBtn = document.getElementById("btnNextLevelModal");
    if (modalNextBtn) modalNextBtn.onclick = () => {
      session.nextLevel();
      renderTaskMasterView({ state, appRoot, saveLocal, levelIndex: session.levelIndex });
    };

    // 2. Chạy mô phỏng kế hoạch
    const runBtn = document.getElementById("btnRunSimulation");
    if (runBtn) {
      runBtn.onclick = async () => {
        await session.runSimulation();
      };
    }

    // 3. Xóa kế hoạch làm lại
    const clearBtn = document.getElementById("btnClearTimeline");
    if (clearBtn) {
      clearBtn.onclick = () => session.clearTimeline();
    }

    // 4. Gợi ý bước tiếp theo
    const hintBtn = document.getElementById("btnHintTask");
    if (hintBtn) {
      hintBtn.onclick = () => {
        const hint = session.getHint();
        if (hint) {
          alert(`💡 GỢI Ý CHIẾN THUẬT (Mỗi lần dùng gợi ý sẽ trừ 1 ⭐):\n${hint.indirectClue || hint.hint}\n\n👉 Chú ý: Đừng đoán mò, hãy quan sát kỹ điều kiện tiên quyết của từng thẻ!`);
        } else {
          alert("💡 Con đã xếp đủ hoặc các bước còn lại đang bị xung đột điều kiện, hãy kiểm tra lại nhé!");
        }
      };
    }

    // 5. Click thẻ từ Kho Thẻ Hành Động để thêm vào Timeline
    const availableCards = document.querySelectorAll(".tm-task-card");
    availableCards.forEach(card => {
      card.onclick = () => {
        const taskId = card.dataset.taskId;
        if (card.classList.contains("is-placed")) {
          // Nếu đã chọn thì gỡ khỏi timeline
          const idx = session.timeline.indexOf(taskId);
          if (idx !== -1) session.removeTaskFromTimeline(idx);
        } else {
          // Thêm vào timeline
          session.addTaskToTimeline(taskId);
        }
      };
    });

    // 6. Nút Thao tác trên Timeline: Chuyển lên, Chuyển xuống, Gỡ bỏ
    document.querySelectorAll("[data-move-up]").forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.dataset.moveUp, 10);
        session.moveTask(idx, idx - 1);
      };
    });

    document.querySelectorAll("[data-move-down]").forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.dataset.moveDown, 10);
        session.moveTask(idx, idx + 1);
      };
    });

    document.querySelectorAll("[data-remove-index]").forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.dataset.removeIndex, 10);
        session.removeTaskFromTimeline(idx);
      };
    });
  }

  // Render lần đầu
  renderLevelContent();
}
