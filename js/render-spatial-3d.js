// js/render-spatial-3d.js - Giao diện Game 6: Thám Tử Khối 3D & Gấp Hộp (Spatial 3D)
import { Spatial3DSession, SPATIAL_3D_CHALLENGES } from "./spatial-3d.js";
import { getDifficultyMeta } from "./render-games.js";
import { recordGameOutcome } from "./adaptive-engine.js";
import { checkAndAwardBadges, showBadgeCelebration } from "./badge-system.js";

let activeSession = null;
let currentFilterMode = "all";

const esc = str => String(str ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function renderSpatial3DView({ state, appRoot, saveLocal, challengeIndex } = {}) {
  if (!activeSession) {
    activeSession = new Spatial3DSession(Number.isInteger(challengeIndex) ? challengeIndex : 0);
  } else if (Number.isInteger(challengeIndex) && activeSession.currentIndex !== challengeIndex) {
    activeSession.setChallengeIndex(challengeIndex);
  }

  const session = activeSession;
  const ch = session.getCurrentChallenge();
  const diffMeta = getDifficultyMeta(ch.difficulty || 3);
  const records = state?.db?.gameRecords?.spatial3D || { stars: 0, completedChallenges: [] };
  const isCompleted = Array.isArray(records.completedChallenges) && records.completedChallenges.includes(ch.id);

  // Lọc danh sách theo chế độ nếu người dùng chọn pill
  const filteredList = SPATIAL_3D_CHALLENGES.filter(c => currentFilterMode === "all" || c.mode === currentFilterMode);

  appRoot.innerHTML = `
    <div style="margin-bottom:16px; display:flex; gap:12px; align-items:center; flex-wrap:wrap">
      <a href="#games" class="text-button" style="display:inline-flex; align-items:center; gap:6px; font-weight:700">← Sảnh Trò Chơi</a>
      <span style="color:var(--line)">•</span>
      <span style="font-weight:600; color:var(--muted)">Game 6: Não Bộ Không Gian</span>
      <span class="game-badge" style="background:#e0e7ff; color:#3730a3">🧊 SPATIAL 3D</span>
    </div>

    <div class="card" style="margin-bottom:20px; border-left:4px solid #6366f1">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:12px; margin-bottom:12px">
        <div>
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px">
            <span style="font-size:24px">🧊</span>
            <h2 style="margin:0; font-size:20px; font-weight:800; color:var(--text)">Thám Tử Khối 3D &amp; Gấp Hộp</h2>
          </div>
          <p style="margin:0; font-size:14px; color:var(--muted)">Rèn luyện trí tưởng tượng không gian 3 chiều, hình chiếu và gấp hộp theo chuẩn Năng khiếu Singapore GEP.</p>
        </div>
        <div style="display:flex; align-items:center; gap:10px">
          <span style="font-size:14px; font-weight:700; color:#4f46e5">⭐ ${records.stars || 0} Sao</span>
          <span class="difficulty-badge" style="background:${diffMeta.bg}; color:${diffMeta.color}">${diffMeta.stars} ${diffMeta.label}</span>
        </div>
      </div>

      <!-- Bộ lọc chế độ -->
      <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:16px; padding:8px 0; border-top:1px dashed var(--line); border-bottom:1px dashed var(--line)">
        <button class="level-pill ${currentFilterMode === 'all' ? 'active' : ''}" data-filter="all" style="padding:6px 14px; border-radius:20px; border:1px solid #c7d2fe; cursor:pointer; background:${currentFilterMode === 'all' ? '#4f46e5' : 'transparent'}; color:${currentFilterMode === 'all' ? '#fff' : 'inherit'}; font-weight:600; font-size:13px">Tất cả (${SPATIAL_3D_CHALLENGES.length})</button>
        <button class="level-pill ${currentFilterMode === 'hidden-blocks' ? 'active' : ''}" data-filter="hidden-blocks" style="padding:6px 14px; border-radius:20px; border:1px solid #c7d2fe; cursor:pointer; background:${currentFilterMode === 'hidden-blocks' ? '#4f46e5' : 'transparent'}; color:${currentFilterMode === 'hidden-blocks' ? '#fff' : 'inherit'}; font-weight:600; font-size:13px">🧱 Đếm khối ẩn</button>
        <button class="level-pill ${currentFilterMode === 'projections' ? 'active' : ''}" data-filter="projections" style="padding:6px 14px; border-radius:20px; border:1px solid #c7d2fe; cursor:pointer; background:${currentFilterMode === 'projections' ? '#4f46e5' : 'transparent'}; color:${currentFilterMode === 'projections' ? '#fff' : 'inherit'}; font-weight:600; font-size:13px">📐 Hình chiếu 3 hướng</button>
        <button class="level-pill ${currentFilterMode === 'cube-nets' ? 'active' : ''}" data-filter="cube-nets" style="padding:6px 14px; border-radius:20px; border:1px solid #c7d2fe; cursor:pointer; background:${currentFilterMode === 'cube-nets' ? '#4f46e5' : 'transparent'}; color:${currentFilterMode === 'cube-nets' ? '#fff' : 'inherit'}; font-weight:600; font-size:13px">📦 Gấp hộp lập phương</button>
      </div>

      <!-- Bộ chọn thử thách -->
      <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; margin-bottom:16px; flex-wrap:wrap">
        <label for="spatialChallengeSelect" style="font-weight:700; font-size:14px">Thử thách:</label>
        <select id="spatialChallengeSelect" class="form-select" style="max-width:380px; padding:6px 10px; border-radius:8px; border:1px solid var(--line); font-size:14px">
          ${filteredList.map(item => `
            <option value="${item.id}" ${item.id === ch.id ? "selected" : ""}>
              #${item.id.replace('sp3d-', '')} - ${esc(item.title)} (${item.mode})
            </option>
          `).join("")}
        </select>
        ${isCompleted ? `<span style="color:#059669; font-weight:700; font-size:13px">✓ Đã vượt qua</span>` : ""}
      </div>

      <!-- Spatial 3D Split for iPad Landscape -->
      <div class="spatial-split">
        <!-- Khung hiển thị mô hình SVG 3D -->
        <div id="spatial3DSvgStage" style="border-radius:12px; overflow:hidden; border:1px solid var(--line); background:#f8fafc">
          ${session.renderSvgMarkup()}
        </div>

        <div class="spatial-controls-side">
          <!-- Đề bài câu hỏi -->
          <div style="background:rgba(99,102,241,0.06); padding:14px 18px; border-radius:10px; margin-bottom:14px; border:1px solid rgba(99,102,241,0.15)">
            <div style="font-weight:700; color:#3730a3; margin-bottom:4px; font-size:15px">${esc(ch.title)}</div>
            <div style="font-size:15px; line-height:1.55; color:var(--text)">${esc(ch.prompt)}</div>
          </div>

          <!-- Lựa chọn đáp án trắc nghiệm -->
          <div style="margin-bottom:14px">
            <div style="font-size:14px; font-weight:700; margin-bottom:8px; color:var(--text)">Chọn đáp án của Bách:</div>
            <div id="spatialOptionsContainer" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(140px, 1fr)); gap:10px">
              ${ch.options.map(opt => `
                <button class="spatial-option-btn button" data-val="${esc(opt)}" style="padding:12px 14px; text-align:center; border:2px solid ${session.selectedOption === opt ? '#4f46e5' : 'var(--line)'}; background:${session.selectedOption === opt ? '#e0e7ff' : 'var(--card)'}; font-weight:${session.selectedOption === opt ? '700' : '600'}; border-radius:10px; cursor:pointer; color:var(--text); transition:all 0.15s ease">
                  ${esc(opt)}
                </button>
              `).join("")}
            </div>
          </div>

          <!-- Nút hành động -->
          <div style="display:flex; gap:10px; align-items:center; flex-wrap:wrap; margin-bottom:14px">
            <button id="spatialSubmitBtn" class="button" style="background:#4f46e5; color:#fff; font-weight:700; padding:10px 22px; border-radius:8px; flex:1">Kiểm tra kết quả 🎯</button>
            <button id="spatialToggleHintBtn" class="button" style="background:var(--card); border:1px solid var(--line); font-weight:600; padding:10px 16px; border-radius:8px">💡 Gợi ý tư duy</button>
          </div>

          <!-- Vùng hiển thị Gợi ý -->
          <div id="spatialHintArea" style="display:none; margin-bottom:14px; padding:12px 16px; background:#fffbeb; border-radius:8px; border:1px solid #fde68a; font-size:14px; color:#92400e">
            <strong>💡 Gợi ý tư duy không gian:</strong> ${esc(ch.explanation.split('.')[0])}. Hãy tưởng tượng bóc từng lớp hoặc chiếu bóng vuông góc nhé!
          </div>

          <!-- Vùng hiển thị Phản hồi kết quả -->
          <div id="spatialFeedbackArea" style="display:none; margin-bottom:14px; padding:14px 18px; border-radius:10px"></div>
        </div>
      </div>

      <!-- Điều hướng Thử thách Trước / Sau / Ngẫu nhiên -->
      <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--line); padding-top:16px; flex-wrap:wrap; gap:10px">
        <div style="display:flex; gap:8px">
          <button id="prevSpatialBtn" class="button" style="background:var(--card); border:1px solid var(--line); font-weight:600; padding:8px 16px; border-radius:8px" ${session.currentIndex === 0 ? "disabled" : ""}>← Câu trước</button>
          <button id="nextSpatialBtn" class="button" style="background:var(--card); border:1px solid var(--line); font-weight:600; padding:8px 16px; border-radius:8px" ${session.currentIndex >= SPATIAL_3D_CHALLENGES.length - 1 ? "disabled" : ""}>Câu sau →</button>
        </div>
        <button id="randomSpatialBtn" class="button" style="background:var(--card); border:1px solid var(--line); font-weight:600; padding:8px 16px; border-radius:8px">🎲 Câu ngẫu nhiên</button>
      </div>
    </div>
  `;

  // Gắn sự kiện các nút
  wireEvents();

  function wireEvents() {
    // 1. Lọc cấp độ / chế độ
    appRoot.querySelectorAll(".level-pill").forEach(pill => {
      pill.addEventListener("click", () => {
        currentFilterMode = pill.dataset.filter;
        const matching = SPATIAL_3D_CHALLENGES.find(c => currentFilterMode === "all" || c.mode === currentFilterMode);
        if (matching) {
          const idx = SPATIAL_3D_CHALLENGES.indexOf(matching);
          session.setChallengeIndex(idx);
        }
        renderSpatial3DView({ state, appRoot, saveLocal });
      });
    });

    // 2. Thay đổi dropdown chọn câu
    const sel = appRoot.querySelector("#spatialChallengeSelect");
    sel?.addEventListener("change", e => {
      const found = SPATIAL_3D_CHALLENGES.find(c => c.id === e.target.value);
      if (found) {
        const idx = SPATIAL_3D_CHALLENGES.indexOf(found);
        session.setChallengeIndex(idx);
        renderSpatial3DView({ state, appRoot, saveLocal });
      }
    });

    // 3. Chọn đáp án
    appRoot.querySelectorAll(".spatial-option-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const val = btn.dataset.val;
        session.selectOption(val);
        appRoot.querySelectorAll(".spatial-option-btn").forEach(b => {
          const isSel = b.dataset.val === val;
          b.style.borderColor = isSel ? "#4f46e5" : "var(--line)";
          b.style.background = isSel ? "#e0e7ff" : "var(--card)";
          b.style.fontWeight = isSel ? "700" : "600";
        });
      });
    });

    // 4. Bật tắt gợi ý
    const hintBtn = appRoot.querySelector("#spatialToggleHintBtn");
    const hintArea = appRoot.querySelector("#spatialHintArea");
    hintBtn?.addEventListener("click", () => {
      if (hintArea) {
        hintArea.style.display = hintArea.style.display === "none" ? "block" : "none";
      }
    });

    // 5. Nộp bài
    const submitBtn = appRoot.querySelector("#spatialSubmitBtn");
    const feedbackArea = appRoot.querySelector("#spatialFeedbackArea");
    submitBtn?.addEventListener("click", async () => {
      const res = session.checkAnswer();
      if (!feedbackArea) return;

      feedbackArea.style.display = "block";
      if (!res.ok) {
        feedbackArea.style.background = "#fee2e2";
        feedbackArea.style.color = "#991b1b";
        feedbackArea.innerHTML = `⚠️ ${res.error}`;
        return;
      }

      if (res.isCorrect) {
        feedbackArea.style.background = "#dcfce7";
        feedbackArea.style.color = "#166534";
        feedbackArea.innerHTML = `
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px">
            <span style="font-size:20px">🎉</span>
            <strong>XUẤT SẮC! BÁCH ĐÃ TRẢ LỜI HOÀN TOÀN CHÍNH XÁC!</strong>
          </div>
          <div style="font-size:14px; margin-top:6px">${esc(res.explanation)}</div>
        `;

        // Ghi nhận sao
        if (state?.db) {
          if (!state.db.gameRecords) state.db.gameRecords = {};
          if (!state.db.gameRecords.spatial3D) state.db.gameRecords.spatial3D = { stars: 0, completedChallenges: [] };
          const rec = state.db.gameRecords.spatial3D;
          if (!rec.completedChallenges.includes(ch.id)) {
            rec.completedChallenges.push(ch.id);
            rec.stars = (rec.stars || 0) + (ch.difficulty || 3);
            // Adaptive Engine: ghi nhận kết quả Spatial 3D
            recordGameOutcome(state, "spatial3D", { success: true, difficulty: ch.difficulty || 3 });
            const newBadges = checkAndAwardBadges(state);
            for (const b of newBadges) showBadgeCelebration(b);
            if (typeof saveLocal === "function") await saveLocal();
          }
        }
      } else {
        feedbackArea.style.background = "#fff1f2";
        feedbackArea.style.color = "#9f1239";
        feedbackArea.innerHTML = `
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px">
            <span style="font-size:20px">🤔</span>
            <strong>CHƯA CHÍNH XÁC RỒI!</strong>
          </div>
          <div style="font-size:14px; margin-top:4px">Đáp án đúng là: <strong>${esc(res.correctAnswer)}</strong>.</div>
          <div style="font-size:13px; margin-top:4px; opacity:0.9">${esc(res.explanation)}</div>
        `;
      }
    });

    // 6. Điều hướng
    appRoot.querySelector("#prevSpatialBtn")?.addEventListener("click", () => {
      session.prevChallenge();
      renderSpatial3DView({ state, appRoot, saveLocal });
    });
    appRoot.querySelector("#nextSpatialBtn")?.addEventListener("click", () => {
      session.nextChallenge();
      renderSpatial3DView({ state, appRoot, saveLocal });
    });
    appRoot.querySelector("#randomSpatialBtn")?.addEventListener("click", () => {
      const randIdx = Math.floor(Math.random() * SPATIAL_3D_CHALLENGES.length);
      session.setChallengeIndex(randIdx);
      renderSpatial3DView({ state, appRoot, saveLocal });
    });
  }
}
