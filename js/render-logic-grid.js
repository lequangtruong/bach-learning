// js/render-logic-grid.js - Giao diện Game 7: Bảng Lưới Thám Tử (Logic Grid Detective)
import { LogicGridSession, LOGIC_GRID_CASES, CELL_STATE } from "./logic-grid.js";
import { getDifficultyMeta } from "./render-games.js";
import { recordGameOutcome } from "./adaptive-engine.js";
import { checkAndAwardBadges, showBadgeCelebration } from "./badge-system.js";

let activeSession = null;
const esc = str => String(str ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function renderLogicGridView({ state, appRoot, saveLocal, caseIndex } = {}) {
  if (!activeSession) {
    activeSession = new LogicGridSession(Number.isInteger(caseIndex) ? caseIndex : 0);
  } else if (Number.isInteger(caseIndex) && activeSession.currentIndex !== caseIndex) {
    activeSession.setCaseIndex(caseIndex);
  }

  const session = activeSession;
  const c = session.getCurrentCase();
  const diffMeta = getDifficultyMeta(c.difficulty || 2);
  const records = state?.db?.gameRecords?.logicGrid || { stars: 0, completedCases: [] };
  const isCompleted = Array.isArray(records.completedCases) && records.completedCases.includes(c.id);
  const startTime = Date.now();

  appRoot.innerHTML = `
    <div style="margin-bottom:16px; display:flex; gap:12px; align-items:center; flex-wrap:wrap">
      <a href="#games" class="text-button" style="display:inline-flex; align-items:center; gap:6px; font-weight:700">← Sảnh Trò Chơi</a>
      <span style="color:var(--line)">•</span>
      <span style="font-weight:600; color:var(--muted)">Game 7: Suy Luận Trinh Thám</span>
      <span class="game-badge" style="background:#fef3c7; color:#92400e">🕵️ LOGIC GRID</span>
    </div>

    <div class="card" style="margin-bottom:20px; border-left:4px solid #f59e0b">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:12px; margin-bottom:12px">
        <div>
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px">
            <span style="font-size:24px">🕵️</span>
            <h2 style="margin:0; font-size:20px; font-weight:800; color:var(--text)">Bảng Lưới Thám Tử</h2>
          </div>
          <p style="margin:0; font-size:14px; color:var(--muted)">Phương pháp suy luận loại trừ đa chiều kinh điển của Einstein. Đọc kỹ manh mối và loại trừ từng bước!</p>
        </div>
        <div style="display:flex; align-items:center; gap:10px">
          <span style="font-size:14px; font-weight:700; color:#d97706">⭐ ${records.stars || 0} Sao</span>
          <span class="difficulty-badge" style="background:${diffMeta.bg}; color:${diffMeta.color}">${diffMeta.stars} ${diffMeta.label}</span>
        </div>
      </div>

      <!-- Bộ chọn vụ án -->
      <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; margin-bottom:16px; flex-wrap:wrap; padding-bottom:12px; border-bottom:1px solid var(--line)">
        <label for="logicCaseSelect" style="font-weight:700; font-size:14px">Vụ án trinh thám:</label>
        <select id="logicCaseSelect" class="form-select" style="max-width:380px; padding:6px 10px; border-radius:8px; border:1px solid var(--line); font-size:14px">
          ${LOGIC_GRID_CASES.map((item, idx) => `
            <option value="${item.id}" ${item.id === c.id ? "selected" : ""}>
              #${idx + 1} - ${esc(item.title)} (${item.rows.items.length}x${item.cols.items.length})
            </option>
          `).join("")}
        </select>
        ${isCompleted ? `<span style="color:#059669; font-weight:700; font-size:13px">✓ Đã phá án thành công</span>` : ""}
      </div>

      <!-- Logic Grid Split for iPad Landscape -->
      <div class="logic-grid-split">
        <div class="logic-grid-story-side">
          <!-- Cốt truyện vụ án -->
          <div style="background:rgba(245,158,11,0.08); padding:14px 18px; border-radius:10px; margin-bottom:14px; border:1px solid rgba(245,158,11,0.2)">
            <div style="font-weight:700; color:#b45309; margin-bottom:4px; font-size:15px">📜 Tình huống vụ án:</div>
            <div style="font-size:15px; line-height:1.6; color:var(--text)">${esc(c.story)}</div>
          </div>

          <!-- Danh sách Manh mối -->
          <div style="margin-bottom:16px; background:var(--card); border:1px solid var(--line); border-radius:10px; padding:14px 18px">
            <div style="font-weight:700; color:var(--text); margin-bottom:8px; font-size:15px">🔍 Các Manh Mối Được Cung Cấp:</div>
            <div style="display:flex; flex-direction:column; gap:8px">
              ${c.clues.map((clue, i) => `
                <label class="clue-item" style="display:flex; align-items:flex-start; gap:8px; cursor:pointer; font-size:14px; line-height:1.5">
                  <input type="checkbox" class="clue-checkbox" style="margin-top:4px; cursor:pointer" />
                  <span class="clue-text" style="color:var(--text)">${esc(clue)}</span>
                </label>
              `).join("")}
            </div>
          </div>
        </div>

        <div class="logic-grid-board-side">
          <!-- Hướng dẫn cách bấm -->
          <div style="margin-bottom:12px; font-size:13px; color:var(--muted); display:flex; gap:12px; flex-wrap:wrap">
            <span>💡 <strong>Quy tắc:</strong> Chạm 1 = <span style="color:#ef4444; font-weight:700">❌</span></span>
            <span>• Chạm 2 = <span style="color:#10b981; font-weight:700">✅</span></span>
            <span>• Chạm 3 = Xóa</span>
          </div>

          <!-- Bảng Lưới Ma Trận Logic Tương Tác -->
          <div class="logic-grid-container" style="overflow-x:auto; margin-bottom:16px">
            <table style="border-collapse:collapse; margin:0 auto; background:var(--card); box-shadow:0 2px 8px rgba(0,0,0,0.05); border-radius:8px; overflow:hidden; width:100%">
              <thead>
                <tr>
                  <th style="padding:10px; background:#f8fafc; border:1px solid var(--line); font-size:12px; color:var(--muted)">
                    ${esc(c.rows.name)} \\ ${esc(c.cols.name)}
                  </th>
                  ${c.cols.items.map(col => `
                    <th style="padding:10px 12px; background:#f1f5f9; border:1px solid var(--line); font-size:13px; font-weight:700; color:var(--text); text-align:center">
                      ${esc(col)}
                    </th>
                  `).join("")}
                </tr>
              </thead>
              <tbody>
                ${c.rows.items.map(row => `
                  <tr>
                    <td style="padding:10px 12px; background:#f8fafc; border:1px solid var(--line); font-size:13px; font-weight:700; color:var(--text)">
                      ${esc(row)}
                    </td>
                    ${c.cols.items.map(col => {
                      const st = session.getCellState(row, col);
                      let icon = "";
                      let bg = "transparent";
                      if (st === CELL_STATE.CROSS) {
                        icon = `<span style="color:#ef4444; font-size:20px; font-weight:900">✕</span>`;
                        bg = "rgba(239,68,68,0.06)";
                      } else if (st === CELL_STATE.CHECK) {
                        icon = `<span style="color:#10b981; font-size:22px; font-weight:900">✓</span>`;
                        bg = "rgba(16,185,129,0.15)";
                      }
                      return `
                        <td class="logic-grid-cell" data-row="${esc(row)}" data-col="${esc(col)}" style="width:64px; height:54px; border:1px solid var(--line); text-align:center; vertical-align:middle; cursor:pointer; background:${bg}; transition:all 0.15s ease">
                          ${icon}
                        </td>
                      `;
                    }).join("")}
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>

          <!-- Nút hành động -->
          <div style="display:flex; gap:10px; align-items:center; flex-wrap:wrap; margin-bottom:14px">
            <button id="logicCheckBtn" class="button" style="background:#f59e0b; color:#fff; font-weight:700; padding:10px 20px; border-radius:8px; flex:1">Kiểm tra suy luận 🕵️</button>
            <button id="logicResetGridBtn" class="button" style="background:var(--card); border:1px solid var(--line); font-weight:600; padding:10px 14px; border-radius:8px">🔄 Xóa bảng</button>
            <button id="logicToggleHintBtn" class="button" style="background:var(--card); border:1px solid var(--line); font-weight:600; padding:10px 14px; border-radius:8px">💡 Gợi ý</button>
          </div>

          <!-- Vùng hiển thị Gợi ý -->
          <div id="logicHintArea" style="display:none; margin-bottom:14px; padding:12px 16px; background:#fffbeb; border-radius:8px; border:1px solid #fde68a; font-size:14px; color:#92400e">
            <strong>💡 Gợi ý thám tử:</strong> Tìm manh mối trực tiếp nhất khẳng định một cặp ghép để gạch dấu ✓ trước, sau đó loại trừ các ô cùng hàng và cùng cột.
          </div>

          <!-- Vùng hiển thị Phản hồi kết quả -->
          <div id="logicFeedbackArea" style="display:none; margin-bottom:14px; padding:14px 18px; border-radius:10px"></div>
        </div>
      </div>

      <!-- Điều hướng Vụ án Trước / Sau / Ngẫu nhiên -->
      <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--line); padding-top:16px; flex-wrap:wrap; gap:10px">
        <div style="display:flex; gap:8px">
          <button id="prevCaseBtn" class="button" style="background:var(--card); border:1px solid var(--line); font-weight:600; padding:8px 16px; border-radius:8px" ${session.currentIndex === 0 ? "disabled" : ""}>← Vụ án trước</button>
          <button id="nextCaseBtn" class="button" style="background:var(--card); border:1px solid var(--line); font-weight:600; padding:8px 16px; border-radius:8px" ${session.currentIndex >= LOGIC_GRID_CASES.length - 1 ? "disabled" : ""}>Vụ án sau →</button>
        </div>
        <button id="randomCaseBtn" class="button" style="background:var(--card); border:1px solid var(--line); font-weight:600; padding:8px 16px; border-radius:8px">🎲 Vụ án ngẫu nhiên</button>
      </div>
    </div>
  `;

  wireEvents();

  function wireEvents() {
    // 1. Gạch ngang manh mối khi tick checkbox
    appRoot.querySelectorAll(".clue-checkbox").forEach(cb => {
      cb.addEventListener("change", () => {
        const textSpan = cb.closest("label")?.querySelector(".clue-text");
        if (textSpan) {
          textSpan.style.textDecoration = cb.checked ? "line-through" : "none";
          textSpan.style.opacity = cb.checked ? "0.5" : "1";
        }
      });
    });

    // 2. Chạm vào ô ma trận
    appRoot.querySelectorAll(".logic-grid-cell").forEach(cell => {
      cell.addEventListener("click", () => {
        const row = cell.dataset.row;
        const col = cell.dataset.col;
        session.toggleCell(row, col);
        renderLogicGridView({ state, appRoot, saveLocal });
      });
    });

    // 3. Dropdown đổi vụ án
    appRoot.querySelector("#logicCaseSelect")?.addEventListener("change", e => {
      const found = LOGIC_GRID_CASES.find(item => item.id === e.target.value);
      if (found) {
        const idx = LOGIC_GRID_CASES.indexOf(found);
        session.setCaseIndex(idx);
        renderLogicGridView({ state, appRoot, saveLocal });
      }
    });

    // 4. Bật tắt gợi ý
    const hintBtn = appRoot.querySelector("#logicToggleHintBtn");
    const hintArea = appRoot.querySelector("#logicHintArea");
    hintBtn?.addEventListener("click", () => {
      if (hintArea) {
        hintArea.style.display = hintArea.style.display === "none" ? "block" : "none";
      }
    });

    // 5. Nút Reset bảng
    appRoot.querySelector("#logicResetGridBtn")?.addEventListener("click", () => {
      session.resetGrid();
      renderLogicGridView({ state, appRoot, saveLocal });
    });

    // 6. Kiểm tra suy luận
    const checkBtn = appRoot.querySelector("#logicCheckBtn");
    const feedbackArea = appRoot.querySelector("#logicFeedbackArea");
    checkBtn?.addEventListener("click", async () => {
      const res = session.checkSolution();
      if (!feedbackArea) return;

      feedbackArea.style.display = "block";
      if (res.isCorrect) {
        feedbackArea.style.background = "#dcfce7";
        feedbackArea.style.color = "#166534";
        feedbackArea.innerHTML = `
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px">
            <span style="font-size:22px">🏆</span>
            <strong>CHÚC MỪNG THÁM TỬ BÁCH! VỤ ÁN ĐÃ ĐƯỢC PHÁ HOÀN TOÀN CHÍNH XÁC!</strong>
          </div>
          <div style="font-size:14px; margin-top:6px">${esc(res.explanation)}</div>
        `;

        if (state?.db) {
          if (!state.db.gameRecords) state.db.gameRecords = {};
          if (!state.db.gameRecords.logicGrid) state.db.gameRecords.logicGrid = { stars: 0, completedCases: [] };
          const rec = state.db.gameRecords.logicGrid;
          if (!rec.completedCases.includes(c.id)) {
            rec.completedCases.push(c.id);
            rec.stars = (rec.stars || 0) + (c.difficulty || 2);
            // Adaptive Engine: ghi nhận kết quả Logic Grid
            const timeMs = Date.now() - startTime;
            recordGameOutcome(state, "logicGrid", { success: true, difficulty: c.difficulty || 3, timeMs });
            const newBadges = checkAndAwardBadges(state);
            for (const b of newBadges) showBadgeCelebration(b);
            if (typeof saveLocal === "function") await saveLocal();
          }
        }
      } else {
        const timeMs = Date.now() - startTime;
        recordGameOutcome(state, "logicGrid", { success: false, difficulty: c.difficulty || 3, timeMs });
        feedbackArea.style.background = "#fff1f2";
        feedbackArea.style.color = "#9f1239";
        feedbackArea.innerHTML = `
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px">
            <span style="font-size:20px">🔍</span>
            <strong>CHƯA KHỚP HOÀN TOÀN CÁC MANH MỐI!</strong>
          </div>
          <div style="font-size:14px; margin-top:4px">Bách đã ghép đúng <strong>${res.matchedCount}/${res.totalCount}</strong> cặp. Hãy kiểm tra lại các ô ❌ và ✅ dựa trên từng manh mối nhé!</div>
        `;
      }
    });

    // 7. Điều hướng
    appRoot.querySelector("#prevCaseBtn")?.addEventListener("click", () => {
      session.prevCase();
      renderLogicGridView({ state, appRoot, saveLocal });
    });
    appRoot.querySelector("#nextCaseBtn")?.addEventListener("click", () => {
      session.nextCase();
      renderLogicGridView({ state, appRoot, saveLocal });
    });
    appRoot.querySelector("#randomCaseBtn")?.addEventListener("click", () => {
      const randIdx = Math.floor(Math.random() * LOGIC_GRID_CASES.length);
      session.setCaseIndex(randIdx);
      renderLogicGridView({ state, appRoot, saveLocal });
    });
  }
}
