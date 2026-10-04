// js/render-rush-hour.js - Giao diện Game 8: Kẹt Xe Thông Minh (Rush Hour / Traffic Jam)
import { RushHourSession, RUSH_HOUR_BOARDS, GRID_SIZE, EXIT_ROW, EXIT_COL } from "./rush-hour.js";
import { getDifficultyMeta } from "./render-games.js";
import { recordGameOutcome } from "./adaptive-engine.js";
import { checkAndAwardBadges, showBadgeCelebration } from "./badge-system.js";

let activeSession = null;
const esc = str => String(str ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function renderRushHourView({ state, appRoot, saveLocal, boardIndex } = {}) {
  if (!activeSession) {
    activeSession = new RushHourSession(Number.isInteger(boardIndex) ? boardIndex : 0);
  } else if (Number.isInteger(boardIndex) && activeSession.currentIndex !== boardIndex) {
    activeSession.setBoardIndex(boardIndex);
  }

  const session = activeSession;
  const b = session.getCurrentBoard();
  const diffMeta = getDifficultyMeta(b.difficulty || 2);
  const records = state?.db?.gameRecords?.rushHour || { stars: 0, completedBoards: [], bestMoves: {} };
  const isCompleted = Array.isArray(records.completedBoards) && records.completedBoards.includes(b.id);
  const bestForBoard = records.bestMoves?.[b.id] ?? null;
  if (!session.startTime) session.startTime = Date.now();

  const isSolved = session.isSolved();

  // Tạo SVG cho bàn cờ 6x6
  const cellSize = 56;
  const boardPx = cellSize * GRID_SIZE; // 336px
  const selectedVehicle = session.getVehicle(session.selectedVehicleId);

  let vehiclesSvg = "";
  for (const v of session.vehicles) {
    const isSelected = v.id === session.selectedVehicleId;
    const x = v.col * cellSize + 4;
    const y = v.row * cellSize + 4;
    const w = v.dir === "H" ? v.len * cellSize - 8 : cellSize - 8;
    const h = v.dir === "V" ? v.len * cellSize - 8 : cellSize - 8;

    vehiclesSvg += `
      <g class="rush-vehicle" data-vid="${v.id}" style="cursor:pointer; transition:transform 0.15s ease">
        <!-- Bóng đổ xe -->
        <rect x="${x + 2}" y="${y + 3}" width="${w}" height="${h}" rx="10" fill="rgba(0,0,0,0.25)" />
        <!-- Thân xe -->
        <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${v.color}" stroke="${isSelected ? '#ffffff' : 'rgba(0,0,0,0.3)'}" stroke-width="${isSelected ? '3.5' : '1.5'}" filter="${isSelected ? 'drop-shadow(0 0 8px rgba(255,255,255,0.8))' : 'none'}" />
        <!-- Kính xe -->
        <rect x="${x + 6}" y="${y + 6}" width="${w - 12}" height="${h - 12}" rx="6" fill="rgba(255,255,255,0.25)" />
        <!-- Nhãn chữ xe -->
        <text x="${x + w/2}" y="${y + h/2 + 5}" font-size="${v.id === 'R' ? '15' : '12'}" font-weight="800" text-anchor="middle" fill="#ffffff" style="pointer-events:none">
          ${v.id === 'R' ? 'XE ĐỎ 🚗' : (v.len === 3 ? '🚛 TẢI' : '🚙')}
        </text>
      </g>
    `;
  }

  appRoot.innerHTML = `
    <div style="margin-bottom:16px; display:flex; gap:12px; align-items:center; flex-wrap:wrap">
      <a href="#games" class="text-button" style="display:inline-flex; align-items:center; gap:6px; font-weight:700">← Sảnh Trò Chơi</a>
      <span style="color:var(--line)">•</span>
      <span style="font-weight:600; color:var(--muted)">Game 8: Lập Kế Hoạch Chiến Lược</span>
      <span class="game-badge" style="background:#fee2e2; color:#991b1b">🚗 RUSH HOUR</span>
    </div>

    <div class="card" style="margin-bottom:20px; border-left:4px solid #ef4444">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:12px; margin-bottom:12px">
        <div>
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px">
            <span style="font-size:24px">🚗</span>
            <h2 style="margin:0; font-size:20px; font-weight:800; color:var(--text)">Kẹt Xe Thông Minh (Rush Hour)</h2>
          </div>
          <p style="margin:0; font-size:14px; color:var(--muted)">Trò chơi đoạt giải Mensa Select Mỹ. Trượt các xe cản trở để mở đường cho Xe Đỏ thoát ra cửa!</p>
        </div>
        <div style="display:flex; align-items:center; gap:10px">
          <span style="font-size:14px; font-weight:700; color:#dc2626">⭐ ${records.stars || 0} Sao</span>
          <span class="difficulty-badge" style="background:${diffMeta.bg}; color:${diffMeta.color}">${diffMeta.stars} ${diffMeta.label}</span>
        </div>
      </div>

      <!-- Bộ chọn thế cờ -->
      <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; margin-bottom:16px; flex-wrap:wrap; padding-bottom:12px; border-bottom:1px solid var(--line)">
        <label for="rushBoardSelect" style="font-weight:700; font-size:14px">Thế cờ bãi đỗ:</label>
        <select id="rushBoardSelect" class="form-select" style="max-width:380px; padding:6px 10px; border-radius:8px; border:1px solid var(--line); font-size:14px">
          ${RUSH_HOUR_BOARDS.map((item, idx) => `
            <option value="${item.id}" ${item.id === b.id ? "selected" : ""}>
              #${idx + 1} - ${esc(item.title)} (Mục tiêu: ${item.minMoves} bước)
            </option>
          `).join("")}
        </select>
        ${isCompleted ? `<span style="color:#059669; font-weight:700; font-size:13px">✓ Đã vượt qua (Tốt nhất: ${bestForBoard} bước)</span>` : ""}
      </div>

      <!-- Thống kê bước đi -->
      <div style="display:flex; justify-content:space-around; align-items:center; background:rgba(239,68,68,0.06); padding:12px 16px; border-radius:10px; margin-bottom:16px; border:1px solid rgba(239,68,68,0.15); flex-wrap:wrap; gap:10px">
        <div style="text-align:center">
          <div style="font-size:12px; color:var(--muted); font-weight:600">SỐ BƯỚC ĐÃ ĐI</div>
          <div style="font-size:24px; font-weight:900; color:#dc2626">${session.moveCount}</div>
        </div>
        <div style="text-align:center">
          <div style="font-size:12px; color:var(--muted); font-weight:600">MỤC TIÊU 3 SAO</div>
          <div style="font-size:24px; font-weight:800; color:#059669">≤ ${b.minMoves} bước</div>
        </div>
        <div style="text-align:center">
          <div style="font-size:12px; color:var(--muted); font-weight:600">XE ĐANG CHỌN</div>
          <div style="font-size:16px; font-weight:700; color:var(--text); margin-top:4px">
            <span style="display:inline-block; width:12px; height:12px; border-radius:3px; background:${selectedVehicle?.color || '#ccc'}; margin-right:4px"></span>
            ${esc(selectedVehicle?.name || "Chưa chọn")}
          </div>
        </div>
      </div>

      <!-- Rush Hour Split for iPad Landscape -->
      <div class="rush-hour-split">
        <!-- Bàn cờ SVG 6x6 & Cửa thoát hiểm -->
        <div style="display:flex; justify-content:center; align-items:center; position:relative">
          <div style="position:relative; background:#1e293b; padding:12px; border-radius:16px; box-shadow:0 8px 24px rgba(0,0,0,0.2); border:4px solid #334155">
            <!-- Cửa thoát hiểm bên phải hàng 2 -->
            <div style="position:absolute; right:-28px; top:${12 + EXIT_ROW * cellSize}px; height:${cellSize}px; width:28px; background:#10b981; border-radius:0 8px 8px 0; display:flex; align-items:center; justify-content:center; color:#fff; font-size:16px; font-weight:900; box-shadow:2px 0 8px rgba(16,185,129,0.5)">
              🏁
            </div>

            <svg width="${boardPx}" height="${boardPx}" viewBox="0 0 ${boardPx} ${boardPx}" style="display:block; border-radius:8px">
              <!-- Lưới ô sàn bãi xe -->
              <defs>
                <pattern id="rushGridPattern" width="${cellSize}" height="${cellSize}" patternUnits="userSpaceOnUse">
                  <rect width="${cellSize}" height="${cellSize}" fill="#0f172a" stroke="#334155" stroke-width="1" />
                  <circle cx="${cellSize/2}" cy="${cellSize/2}" r="1.5" fill="#475569" />
                </pattern>
              </defs>
              <rect width="${boardPx}" height="${boardPx}" fill="url(#rushGridPattern)" />

              <!-- Vạch dẫn đường xe đỏ thoát ra ở hàng 2 -->
              <line x1="0" y1="${EXIT_ROW * cellSize + cellSize/2}" x2="${boardPx}" y2="${EXIT_ROW * cellSize + cellSize/2}" stroke="rgba(239,68,68,0.25)" stroke-width="2" stroke-dasharray="6,4" />

              <!-- Các xe -->
              ${vehiclesSvg}
            </svg>
          </div>
        </div>

        <div class="rush-hour-controls-side">
          <!-- Thống kê bước đi -->
          <div style="display:flex; justify-content:space-around; align-items:center; background:rgba(239,68,68,0.06); padding:10px 14px; border-radius:10px; margin-bottom:14px; border:1px solid rgba(239,68,68,0.15); flex-wrap:wrap; gap:8px">
            <div style="text-align:center">
              <div style="font-size:11px; color:var(--muted); font-weight:600">SỐ BƯỚC ĐÃ ĐI</div>
              <div style="font-size:22px; font-weight:900; color:#dc2626">${session.moveCount}</div>
            </div>
            <div style="text-align:center">
              <div style="font-size:11px; color:var(--muted); font-weight:600">MỤC TIÊU 3 SAO</div>
              <div style="font-size:22px; font-weight:800; color:#059669">≤ ${b.minMoves} bước</div>
            </div>
            <div style="text-align:center">
              <div style="font-size:11px; color:var(--muted); font-weight:600">XE ĐANG CHỌN</div>
              <div style="font-size:15px; font-weight:700; color:var(--text); margin-top:2px">
                <span style="display:inline-block; width:10px; height:10px; border-radius:3px; background:${selectedVehicle?.color || '#ccc'}; margin-right:4px"></span>
                ${esc(selectedVehicle?.name || "Chưa chọn")}
              </div>
            </div>
          </div>

          <!-- Bàn phím điều hướng Trượt Xe -->
          <div style="display:flex; flex-direction:column; align-items:center; gap:6px; margin-bottom:14px">
            <div style="font-size:13px; font-weight:600; color:var(--muted)">Chạm xe trên bàn cờ rồi bấm phím di chuyển:</div>
            ${selectedVehicle?.dir === "H" ? `
              <div style="display:flex; gap:10px">
                <button id="moveLeftBtn" class="button" style="padding:10px 20px; font-size:15px; font-weight:700; background:#3b82f6; color:#fff; border-radius:8px" ${!session.canMove(session.selectedVehicleId, "left") ? "disabled" : ""}>
                  ⬅️ Trượt Trái
                </button>
                <button id="moveRightBtn" class="button" style="padding:10px 20px; font-size:15px; font-weight:700; background:#3b82f6; color:#fff; border-radius:8px" ${!session.canMove(session.selectedVehicleId, "right") ? "disabled" : ""}>
                  Trượt Phải ➡️
                </button>
              </div>
            ` : `
              <div style="display:flex; gap:10px">
                <button id="moveUpBtn" class="button" style="padding:10px 20px; font-size:15px; font-weight:700; background:#3b82f6; color:#fff; border-radius:8px" ${!session.canMove(session.selectedVehicleId, "up") ? "disabled" : ""}>
                  ⬆️ Đẩy Lên
                </button>
                <button id="moveDownBtn" class="button" style="padding:10px 20px; font-size:15px; font-weight:700; background:#3b82f6; color:#fff; border-radius:8px" ${!session.canMove(session.selectedVehicleId, "down") ? "disabled" : ""}>
                  Kéo Xuống ⬇️
                </button>
              </div>
            `}
          </div>

          <!-- Nút chức năng -->
          <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap; margin-bottom:12px; justify-content:center">
            <button id="rushUndoBtn" class="button" style="background:var(--card); border:1px solid var(--line); font-weight:600; padding:8px 14px; border-radius:8px" ${session.history.length === 0 ? "disabled" : ""}>↩️ Đi lại</button>
            <button id="rushResetBtn" class="button" style="background:var(--card); border:1px solid var(--line); font-weight:600; padding:8px 14px; border-radius:8px">🔄 Xếp lại</button>
            <button id="rushToggleHintBtn" class="button" style="background:var(--card); border:1px solid var(--line); font-weight:600; padding:8px 14px; border-radius:8px">💡 Gợi ý</button>
          </div>

          <!-- Vùng Gợi ý -->
          <div id="rushHintArea" style="display:none; margin-bottom:12px; padding:10px 14px; background:#fffbeb; border-radius:8px; border:1px solid #fde68a; font-size:13px; color:#92400e">
            <strong>💡 Gợi ý tư duy thuật toán:</strong> ${esc(b.hint)}
          </div>

          <!-- Thông báo Thắng Cuộc -->
          <div id="rushWinArea" style="${isSolved ? 'display:block' : 'display:none'}; margin-bottom:14px; padding:14px 18px; background:#dcfce7; border-radius:10px; border:1px solid #86efac; color:#166534">
            <div style="display:flex; align-items:center; gap:8px">
              <span style="font-size:24px">🎉🚗💨</span>
              <div>
                <strong style="font-size:16px">XE ĐỎ ĐÃ THOÁT KHỎI BÃI XE!</strong>
                <div style="font-size:13px; margin-top:2px">Hoàn thành trong <strong>${session.moveCount} bước</strong> (Mục tiêu: ${b.minMoves} bước).</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Điều hướng Thế cờ Trước / Sau / Ngẫu nhiên -->
      <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--line); padding-top:16px; flex-wrap:wrap; gap:10px">
        <div style="display:flex; gap:8px">
          <button id="prevRushBtn" class="button" style="background:var(--card); border:1px solid var(--line); font-weight:600; padding:8px 16px; border-radius:8px" ${session.currentIndex === 0 ? "disabled" : ""}>← Thế cờ trước</button>
          <button id="nextRushBtn" class="button" style="background:var(--card); border:1px solid var(--line); font-weight:600; padding:8px 16px; border-radius:8px" ${session.currentIndex >= RUSH_HOUR_BOARDS.length - 1 ? "disabled" : ""}>Thế cờ sau →</button>
        </div>
        <button id="randomRushBtn" class="button" style="background:var(--card); border:1px solid var(--line); font-weight:600; padding:8px 16px; border-radius:8px">🎲 Thế cờ ngẫu nhiên</button>
      </div>
    </div>
  `;

  wireEvents();

  function wireEvents() {
    // 1. Chạm vào xe trên SVG để chọn
    appRoot.querySelectorAll(".rush-vehicle").forEach(g => {
      g.addEventListener("click", () => {
        session.selectedVehicleId = g.dataset.vid;
        renderRushHourView({ state, appRoot, saveLocal });
      });
    });

    // 2. Các nút di chuyển
    async function handleMove(dir) {
      const res = session.moveVehicle(session.selectedVehicleId, dir);
      if (res.ok) {
        if (res.isSolved) {
          // Lưu kỷ lục và sao
          if (state?.db) {
            if (!state.db.gameRecords) state.db.gameRecords = {};
            if (!state.db.gameRecords.rushHour) state.db.gameRecords.rushHour = { stars: 0, completedBoards: [], bestMoves: {} };
            const rec = state.db.gameRecords.rushHour;
            if (!rec.completedBoards.includes(b.id)) {
              rec.completedBoards.push(b.id);
            }
            const oldBest = rec.bestMoves[b.id] ?? 999;
            if (res.moveCount < oldBest) {
              rec.bestMoves[b.id] = res.moveCount;
            }
            // Tính sao: <= minMoves + 2 -> 3 sao; <= minMoves + 6 -> 2 sao; khác -> 1 sao
            const earnedStars = res.moveCount <= b.minMoves + 2 ? 3 : (res.moveCount <= b.minMoves + 6 ? 2 : 1);
            rec.stars = (rec.stars || 0) + earnedStars;
            // Adaptive Engine: ghi nhận kết quả Rush Hour
            const timeMs = Date.now() - (session.startTime || Date.now());
            recordGameOutcome(state, "rushHour", { success: true, difficulty: b.difficulty || 3, timeMs });
            const newBadges = checkAndAwardBadges(state);
            for (const b2 of newBadges) showBadgeCelebration(b2);
            if (typeof saveLocal === "function") await saveLocal();
          }
        }
        renderRushHourView({ state, appRoot, saveLocal });
      }
    }

    appRoot.querySelector("#moveLeftBtn")?.addEventListener("click", () => handleMove("left"));
    appRoot.querySelector("#moveRightBtn")?.addEventListener("click", () => handleMove("right"));
    appRoot.querySelector("#moveUpBtn")?.addEventListener("click", () => handleMove("up"));
    appRoot.querySelector("#moveDownBtn")?.addEventListener("click", () => handleMove("down"));

    // 3. Undo và Reset
    appRoot.querySelector("#rushUndoBtn")?.addEventListener("click", () => {
      session.undo();
      renderRushHourView({ state, appRoot, saveLocal });
    });
    appRoot.querySelector("#rushResetBtn")?.addEventListener("click", () => {
      if (session.moveCount >= 5 && !session.isSolved()) {
        const timeMs = Date.now() - (session.startTime || Date.now());
        recordGameOutcome(state, "rushHour", { success: false, difficulty: b.difficulty || 3, timeMs });
      }
      session.reset();
      session.startTime = Date.now();
      renderRushHourView({ state, appRoot, saveLocal });
    });

    // 4. Bật tắt gợi ý
    const hintBtn = appRoot.querySelector("#rushToggleHintBtn");
    const hintArea = appRoot.querySelector("#rushHintArea");
    hintBtn?.addEventListener("click", () => {
      if (hintArea) {
        hintArea.style.display = hintArea.style.display === "none" ? "block" : "none";
      }
    });

    // 5. Đổi bàn cờ
    appRoot.querySelector("#rushBoardSelect")?.addEventListener("change", e => {
      const found = RUSH_HOUR_BOARDS.find(item => item.id === e.target.value);
      if (found) {
        const idx = RUSH_HOUR_BOARDS.indexOf(found);
        session.setBoardIndex(idx);
        renderRushHourView({ state, appRoot, saveLocal });
      }
    });

    // 6. Điều hướng
    appRoot.querySelector("#prevRushBtn")?.addEventListener("click", () => {
      session.prevBoard();
      renderRushHourView({ state, appRoot, saveLocal });
    });
    appRoot.querySelector("#nextRushBtn")?.addEventListener("click", () => {
      session.nextBoard();
      renderRushHourView({ state, appRoot, saveLocal });
    });
    appRoot.querySelector("#randomRushBtn")?.addEventListener("click", () => {
      const randIdx = Math.floor(Math.random() * RUSH_HOUR_BOARDS.length);
      session.setBoardIndex(randIdx);
      renderRushHourView({ state, appRoot, saveLocal });
    });
  }
}
