// js/render-chimp-memory.js - Giao diện Game 9: Não Siêu Nhớ (Chimp Memory Test)
import { ChimpMemorySession, CHIMP_LEVELS, GAME_STATE } from "./chimp-memory.js";
import { recordGameOutcome } from "./adaptive-engine.js";
import { checkAndAwardBadges, showBadgeCelebration } from "./badge-system.js";

let activeSession = null;
let currentTimerId = null;
let roundStartTime = null;

const esc = str => String(str ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function renderChimpMemoryView({ state, appRoot, saveLocal, level } = {}) {
  if (!activeSession) {
    activeSession = new ChimpMemorySession(Number.isInteger(level) ? level : 1);
  } else if (Number.isInteger(level) && activeSession.currentLevel !== level) {
    activeSession.setLevel(level);
  }

  const session = activeSession;
  const cfg = session.getLevelConfig();
  const records = state?.db?.gameRecords?.chimpMemory || { highScore: 0, maxLevel: 1, completedLevels: [] };

  const isCompletedLevel = records.completedLevels?.includes(session.currentLevel);

  // Tạo HTML bảng lưới
  const gridSize = cfg.gridSize;
  let gridCellsHtml = "";

  for (let r = 0; r < gridSize; r++) {
    for (let c = 0; c < gridSize; c++) {
      const tile = session.tiles.find(t => t.r === r && t.c === c);
      let content = "";
      let cellStyle = "background:rgba(255,255,255,0.03); border:1px dashed rgba(255,255,255,0.15)";
      let clickable = false;

      if (tile) {
        if (session.state === GAME_STATE.MEMORIZING) {
          content = `<span style="font-size:26px; font-weight:900; color:#ffffff">${tile.val}</span>`;
          cellStyle = "background:linear-gradient(135deg, #6366f1 0%, #4338ca 100%); border:2px solid #818cf8; box-shadow:0 4px 12px rgba(99,102,241,0.4)";
        } else if (session.state === GAME_STATE.RECALLING) {
          if (tile.revealed) {
            content = `<span style="font-size:26px; font-weight:900; color:#10b981">${tile.val}</span>`;
            cellStyle = "background:#dcfce7; border:2px solid #10b981; box-shadow:0 2px 8px rgba(16,185,129,0.3)";
          } else {
            // Ô trắng ẩn số
            content = "";
            cellStyle = "background:#ffffff; border:2px solid #cbd5e1; cursor:pointer; box-shadow:0 4px 10px rgba(0,0,0,0.15)";
            clickable = true;
          }
        } else if (session.state === GAME_STATE.SUCCESS) {
          content = `<span style="font-size:26px; font-weight:900; color:#10b981">${tile.val}</span>`;
          cellStyle = "background:#dcfce7; border:2px solid #10b981";
        } else if (session.state === GAME_STATE.FAILED) {
          const isMistake = session.mistakeTile?.r === r && session.mistakeTile?.c === c;
          content = `<span style="font-size:24px; font-weight:900; color:${isMistake ? '#ef4444' : '#64748b'}">${tile.val}</span>`;
          cellStyle = isMistake ? "background:#fee2e2; border:2px solid #ef4444" : "background:#f1f5f9; border:1px solid #cbd5e1";
        }
      }

      gridCellsHtml += `
        <div class="chimp-tile" data-r="${r}" data-c="${c}" style="aspect-ratio:1/1; display:flex; align-items:center; justify-content:center; border-radius:12px; transition:transform 0.1s ease, background 0.15s ease; ${cellStyle}; user-select:none; ${clickable ? 'cursor:pointer' : ''}">
          ${content}
        </div>
      `;
    }
  }

  appRoot.innerHTML = `
    <div style="margin-bottom:16px; display:flex; gap:12px; align-items:center; flex-wrap:wrap">
      <a href="#games" class="text-button" style="display:inline-flex; align-items:center; gap:6px; font-weight:700">← Sảnh Trò Chơi</a>
      <span style="color:var(--line)">•</span>
      <span style="font-weight:600; color:var(--muted)">Game 9: Trí Nhớ Không Gian</span>
      <span class="game-badge" style="background:#e0f2fe; color:#0369a1">⚡ CHIMP MEMORY</span>
    </div>

    <div class="card" style="margin-bottom:20px; border-left:4px solid #0284c7">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:12px; margin-bottom:12px">
        <div>
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px">
            <span style="font-size:24px">⚡</span>
            <h2 style="margin:0; font-size:20px; font-weight:800; color:var(--text)">Não Siêu Nhớ (Kyoto Memory Recall)</h2>
          </div>
          <p style="margin:0; font-size:14px; color:var(--muted)">Thí nghiệm trí nhớ ngắn hạn không gian của Viện Đại học Kyoto. Nhớ vị trí các số và bấm theo thứ tự tăng dần!</p>
        </div>
        <div style="display:flex; align-items:center; gap:10px">
          <span style="font-size:14px; font-weight:700; color:#0284c7">🏆 Điểm Kỷ Lục: ${Math.max(session.score, records.highScore || 0)}</span>
          <span style="font-size:14px; font-weight:700; color:#f59e0b">🔥 Chuỗi: ${session.streak}</span>
        </div>
      </div>

      <!-- Bộ chọn Cấp độ -->
      <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:16px; padding:8px 0; border-top:1px dashed var(--line); border-bottom:1px dashed var(--line)">
        ${CHIMP_LEVELS.map(lvl => `
          <button class="chimp-level-pill ${session.currentLevel === lvl.level ? 'active' : ''}" data-lvl="${lvl.level}" style="padding:6px 14px; border-radius:20px; border:1px solid #7dd3fc; cursor:pointer; background:${session.currentLevel === lvl.level ? '#0284c7' : 'transparent'}; color:${session.currentLevel === lvl.level ? '#fff' : 'inherit'}; font-weight:600; font-size:13px">
            Cấp ${lvl.level} (${lvl.count} số) ${records.completedLevels?.includes(lvl.level) ? '✓' : ''}
          </button>
        `).join("")}
      </div>

      <!-- Thanh trạng thái vòng chơi -->
      <div style="display:flex; justify-content:space-between; align-items:center; background:rgba(2,132,199,0.06); padding:10px 16px; border-radius:8px; margin-bottom:16px; border:1px solid rgba(2,132,199,0.15); flex-wrap:wrap; gap:8px">
        <div style="font-weight:700; color:#0369a1; font-size:14px">${esc(cfg.title)}</div>
        <div style="font-size:13px; color:var(--muted)">Thời gian hiện số: <strong>${cfg.flashMs / 1000}s</strong></div>
      </div>

      <!-- Khung bàn cờ lưới đen phong cách phòng thí nghiệm -->
      <div style="display:flex; justify-content:center; align-items:center; margin-bottom:20px">
        <div id="chimpGridStage" style="width:100%; max-width:420px; background:#0f172a; padding:16px; border-radius:16px; box-shadow:0 8px 24px rgba(0,0,0,0.3); border:4px solid #1e293b">
          <div style="display:grid; grid-template-columns:repeat(${gridSize}, 1fr); gap:10px">
            ${gridCellsHtml}
          </div>
        </div>
      </div>

      <!-- Vùng thông báo và nút tương tác -->
      <div style="display:flex; flex-direction:column; align-items:center; gap:12px; margin-bottom:16px">
        ${session.state === GAME_STATE.IDLE ? `
          <button id="chimpStartBtn" class="button" style="background:#0284c7; color:#fff; font-weight:800; padding:12px 32px; border-radius:10px; font-size:16px; box-shadow:0 4px 14px rgba(2,132,199,0.4)">
            🚀 BẮT ĐẦU VÒNG ĐẤU
          </button>
          <div style="font-size:13px; color:var(--muted)">Các con số sẽ xuất hiện chớp nhoáng rồi giấu đi. Hãy sẵn sàng!</div>
        ` : ""}

        ${session.state === GAME_STATE.MEMORIZING ? `
          <div style="font-size:15px; font-weight:700; color:#0284c7; animation:pulse 1s infinite">
            👁️ HÃY GHI NHỚ VỊ TRÍ CÁC SỐ TRÊN LƯỚI...
          </div>
        ` : ""}

        ${session.state === GAME_STATE.RECALLING ? `
          <div style="font-size:15px; font-weight:700; color:#059669">
            👉 Chạm vào các ô theo thứ tự từ nhỏ đến lớn: <strong>Số ${session.nextExpectedVal}</strong>
          </div>
        ` : ""}

        ${session.state === GAME_STATE.SUCCESS ? `
          <div style="background:#dcfce7; color:#166534; padding:12px 24px; border-radius:10px; text-align:center; border:1px solid #86efac; width:100%; max-width:420px">
            <div style="font-size:20px; font-weight:800; margin-bottom:4px">🎉 TUYỆT ĐỈNH SIÊU TRÍ NHỚ!</div>
            <div style="font-size:14px">Bách đã ghi nhớ và bấm chính xác toàn bộ chuỗi số!</div>
            <div style="margin-top:10px; display:flex; gap:10px; justify-content:center">
              <button id="chimpNextLevelBtn" class="button" style="background:#166534; color:#fff; font-weight:700; padding:8px 20px; border-radius:8px">
                Cấp tiếp theo 🚀
              </button>
              <button id="chimpPlayAgainBtn" class="button" style="background:#fff; color:#166534; border:1px solid #166534; font-weight:600; padding:8px 16px; border-radius:8px">
                Chơi lại cấp này 🔄
              </button>
            </div>
          </div>
        ` : ""}

        ${session.state === GAME_STATE.FAILED ? `
          <div style="background:#fee2e2; color:#991b1b; padding:12px 24px; border-radius:10px; text-align:center; border:1px solid #fca5a5; width:100%; max-width:420px">
            <div style="font-size:18px; font-weight:800; margin-bottom:4px">🤔 SUÝT CHÚT NỮA THÔI!</div>
            <div style="font-size:14px">Ô vừa chạm là số <strong>${session.mistakeTile?.val}</strong>, số cần bấm tiếp theo là <strong>${session.mistakeTile?.expected}</strong>.</div>
            <div style="margin-top:10px">
              <button id="chimpRetryBtn" class="button" style="background:#dc2626; color:#fff; font-weight:700; padding:8px 24px; border-radius:8px">
                Thử lại ngay 🔄
              </button>
            </div>
          </div>
        ` : ""}
      </div>
    </div>
  `;

  wireEvents();

  function wireEvents() {
    // 1. Nút Bắt đầu
    appRoot.querySelector("#chimpStartBtn")?.addEventListener("click", () => {
      session.startRound();
      roundStartTime = Date.now();
      renderChimpMemoryView({ state, appRoot, saveLocal });

      if (currentTimerId) clearTimeout(currentTimerId);
      currentTimerId = setTimeout(() => {
        session.hideNumbers();
        renderChimpMemoryView({ state, appRoot, saveLocal });
      }, cfg.flashMs);
      if (currentTimerId && typeof currentTimerId.unref === "function") currentTimerId.unref();
    });

    // 2. Chạm vào ô trắng khi RECALLING
    if (session.state === GAME_STATE.RECALLING) {
      appRoot.querySelectorAll(".chimp-tile").forEach(tileEl => {
        tileEl.addEventListener("click", async () => {
          const r = parseInt(tileEl.dataset.r, 10);
          const c = parseInt(tileEl.dataset.c, 10);
          const res = session.tapTile(r, c);

          if (res.ok) {
            const timeMs = roundStartTime ? Date.now() - roundStartTime : 0;
            if (res.isCompleted) {
              // Lưu sao và kỷ lục
              if (state?.db) {
                if (!state.db.gameRecords) state.db.gameRecords = {};
                if (!state.db.gameRecords.chimpMemory) state.db.gameRecords.chimpMemory = { highScore: 0, maxLevel: 1, completedLevels: [] };
                const rec = state.db.gameRecords.chimpMemory;
                if (!rec.completedLevels.includes(session.currentLevel)) {
                  rec.completedLevels.push(session.currentLevel);
                }
                if (session.score > (rec.highScore || 0)) {
                  rec.highScore = session.score;
                }
                if (session.currentLevel > (rec.maxLevel || 1)) {
                  rec.maxLevel = session.currentLevel;
                }
                // Adaptive Engine: ghi nhận kết quả Chimp Memory
                recordGameOutcome(state, "chimpMemory", { success: true, difficulty: Math.min(5, session.currentLevel), score: session.score, timeMs });
                const newBadges = checkAndAwardBadges(state);
                for (const b of newBadges) showBadgeCelebration(b);
                if (typeof saveLocal === "function") await saveLocal();
              }
            } else if (!res.isCorrect) {
              // Sai số: Thua vòng
              recordGameOutcome(state, "chimpMemory", { success: false, difficulty: Math.min(5, session.currentLevel), score: session.score, timeMs });
            }
            renderChimpMemoryView({ state, appRoot, saveLocal });
          }
        });
      });
    }

    // 3. Nút Cấp tiếp theo / Chơi lại / Thử lại
    appRoot.querySelector("#chimpNextLevelBtn")?.addEventListener("click", () => {
      session.nextLevel();
      session.startRound();
      roundStartTime = Date.now();
      renderChimpMemoryView({ state, appRoot, saveLocal });

      if (currentTimerId) clearTimeout(currentTimerId);
      currentTimerId = setTimeout(() => {
        session.hideNumbers();
        renderChimpMemoryView({ state, appRoot, saveLocal });
      }, session.getLevelConfig().flashMs);
      if (currentTimerId && typeof currentTimerId.unref === "function") currentTimerId.unref();
    });

    appRoot.querySelector("#chimpPlayAgainBtn")?.addEventListener("click", () => {
      session.startRound();
      roundStartTime = Date.now();
      renderChimpMemoryView({ state, appRoot, saveLocal });

      if (currentTimerId) clearTimeout(currentTimerId);
      currentTimerId = setTimeout(() => {
        session.hideNumbers();
        renderChimpMemoryView({ state, appRoot, saveLocal });
      }, cfg.flashMs);
      if (currentTimerId && typeof currentTimerId.unref === "function") currentTimerId.unref();
    });

    appRoot.querySelector("#chimpRetryBtn")?.addEventListener("click", () => {
      session.startRound();
      roundStartTime = Date.now();
      renderChimpMemoryView({ state, appRoot, saveLocal });

      if (currentTimerId) clearTimeout(currentTimerId);
      currentTimerId = setTimeout(() => {
        session.hideNumbers();
        renderChimpMemoryView({ state, appRoot, saveLocal });
      }, cfg.flashMs);
      if (currentTimerId && typeof currentTimerId.unref === "function") currentTimerId.unref();
    });

    // 4. Chọn cấp độ từ pills
    appRoot.querySelectorAll(".chimp-level-pill").forEach(pill => {
      pill.addEventListener("click", () => {
        const lvl = parseInt(pill.dataset.lvl, 10);
        session.setLevel(lvl);
        renderChimpMemoryView({ state, appRoot, saveLocal });
      });
    });
  }
}

export function clearChimpTimer() {
  if (currentTimerId) {
    clearTimeout(currentTimerId);
    currentTimerId = null;
  }
}
