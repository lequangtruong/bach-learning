// js/render-make-24.js - Giao diện Game 5: Đấu Trường 24 (Make 24 Challenge)
import { Make24Session, MAKE_24_BANK } from "./make-24.js";
import { getDifficultyMeta } from "./render-games.js";
import { recordGameOutcome } from "./adaptive-engine.js";
import { checkAndAwardBadges, showBadgeCelebration } from "./badge-system.js";

let activeMake24Session = null;

const esc = str => String(str ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function renderMake24View({ state, appRoot, saveLocal, challengeIndex, params } = {}) {
  let initialIndex = typeof challengeIndex === "number" ? challengeIndex : null;

  const urlParams = params || (typeof window !== "undefined" && window.location?.hash?.includes("?")
    ? new URLSearchParams(window.location.hash.split("?")[1])
    : null);

  if (urlParams && initialIndex === null && urlParams.has("challenge")) {
    initialIndex = Number(urlParams.get("challenge"));
  }

  if (initialIndex === null) {
    initialIndex = activeMake24Session ? activeMake24Session.currentIndex : 0;
  }

  activeMake24Session = new Make24Session(initialIndex);
  const session = activeMake24Session;

  function renderCurrentProblem() {
    const ch = session.getCurrentChallenge();
    const diffMeta = getDifficultyMeta(ch.difficulty || 2);
    const mRec = state?.db?.gameRecords?.make24 || { stars: 0, solvedCount: 0, completedChallenges: [] };
    const isCompleted = Array.isArray(mRec.completedChallenges) && mRec.completedChallenges.includes(ch.id);
    const startTime = Date.now();

    const target = session.getTarget();

    appRoot.innerHTML = `
      <div style="margin-bottom:20px; display:flex; gap:12px; align-items:center; flex-wrap:wrap">
        <a href="#math" class="text-button" style="display:inline-flex; align-items:center; gap:6px; font-weight:700">← Quay lại Buổi học Toán</a>
        <span style="color:var(--line)">•</span>
        <a href="#games" class="text-button" style="display:inline-flex; align-items:center; gap:6px; font-weight:600; color:var(--muted)">Sảnh Trò Chơi</a>
      </div>

      <div class="bug-stage" style="max-width:720px">
        <div class="make24-arena">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; flex-wrap:wrap; gap:10px">
            <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap">
              <span class="game-card-badge badge-24">🎯 CẤU TRÚC BIỂU THỨC</span>
              <span class="stage-game-task-diff" style="background:${diffMeta.bg}; color:${diffMeta.color}; border:1px solid ${diffMeta.border}">
                ${diffMeta.stars} ${diffMeta.label}
              </span>
              <span class="streak-badge" style="background:#fef08a; color:#854d0e">
                ${isCompleted ? "✅ Đã giải xong" : `Đã giải: ${mRec.completedChallenges?.length || 0}/${MAKE_24_BANK.length}`}
              </span>
            </div>

            <div style="display:flex; align-items:center; gap:8px">
              <label for="make24Select" style="font-size:0.88rem; font-weight:600; color:var(--muted)">Bộ thẻ:</label>
              <select id="make24Select" style="padding:6px 12px; border-radius:10px; border:1px solid var(--line); font-weight:600; font-size:0.88rem; max-width:260px">
                ${MAKE_24_BANK.map((item, idx) => {
                  const t = item.target !== undefined ? item.target : 24;
                  return `
                    <option value="${idx}" ${idx === session.currentIndex ? "selected" : ""}>
                      #${idx + 1}${idx >= 30 && idx < 40 ? " 🔥 [Master]" : ""}: [${item.cards.join(", ")}] ➔ Mục tiêu: ${t}
                    </option>
                  `;
                }).join("")}
              </select>
            </div>
          </div>

          <!-- Target & Difficulty Shortcuts -->
          <div style="display:flex; gap:6px; margin-bottom:14px; flex-wrap:wrap; align-items:center">
            <span style="font-size:0.82rem; font-weight:700; color:var(--muted)">Mục tiêu:</span>
            <button type="button" class="small-button m24-lvl-btn" data-start-idx="0" style="font-size:0.78rem; padding:4px 8px">🎯 24 Cơ bản</button>
            <button type="button" class="small-button m24-lvl-btn" data-start-idx="12" style="font-size:0.78rem; padding:4px 8px">🎯 24 Vừa sức</button>
            <button type="button" class="small-button m24-lvl-btn" data-start-idx="20" style="font-size:0.78rem; padding:4px 8px">🎯 24 Nâng cao</button>
            <button type="button" class="small-button m24-lvl-btn" data-start-idx="30" style="font-size:0.78rem; padding:4px 8px; background:#fef2f2; color:#dc2626; border:1px solid #fca5a5; font-weight:700">🔥 24 Phân số</button>
            <button type="button" class="small-button m24-lvl-btn" data-start-idx="40" style="font-size:0.78rem; padding:4px 8px; background:#eff6ff; color:#1d4ed8; border:1px solid #93c5fd; font-weight:700">⚡ Số 36</button>
            <button type="button" class="small-button m24-lvl-btn" data-start-idx="55" style="font-size:0.78rem; padding:4px 8px; background:#f0fdf4; color:#15803d; border:1px solid #86efac; font-weight:700">🌟 Số 48 &amp; 50</button>
            <button type="button" class="small-button m24-lvl-btn" data-start-idx="65" style="font-size:0.78rem; padding:4px 8px; background:#faf5ff; color:#7e22ce; border:1px solid #d8b4fe; font-weight:700">✨ Số 60 &amp; 72</button>
            <button type="button" class="small-button m24-lvl-btn" data-start-idx="74" style="font-size:0.78rem; padding:4px 9px; background:#fff7ed; color:#c2410c; border:1.5px solid #fdba74; font-weight:800">🏆 Tròn Trăm 100</button>
          </div>

          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:10px">
            <div>
              <h3 style="font-size:1.3rem; margin:0 0 4px; color:var(--ink)">
                Đấu Trường Số: Bộ thẻ #${session.currentIndex + 1} ${session.currentIndex >= 30 && session.currentIndex < 40 ? '<span style="color:#dc2626; font-size:0.95rem; font-weight:800">(Olympic Master)</span>' : ""}
              </h3>
              <p style="color:var(--muted); font-size:0.92rem; margin:0; line-height:1.4">
                Chạm vào <strong>cả 4 thẻ số</strong> và các phép tính để lập biểu thức có kết quả đúng bằng <strong>${target}</strong>!
              </p>
            </div>
            <div style="display:inline-flex; align-items:center; gap:8px; padding:6px 16px; border-radius:14px; background:linear-gradient(135deg, #fef3c7, #fed7aa); border:1.5px solid #f59e0b; color:#92400e; font-weight:800; box-shadow:0 3px 10px rgba(245,158,11,0.2)">
              <span style="font-size:0.85rem; text-transform:uppercase; letter-spacing:0.5px">Mục Tiêu:</span>
              <span style="font-size:1.6rem; color:#b45309; font-weight:900; line-height:1">${target}</span>
            </div>
          </div>

          <!-- Make 24 Split for iPad Landscape -->
          <div class="make24-split">
            <div class="make24-board-side">
              <!-- 4 Cards Row -->
              <div class="make24-cards-row" id="make24CardsRow">
                ${ch.cards.map((cardNum, cIdx) => {
                  const isUsed = session.usedCardIndices.has(cIdx);
                  return `
                    <button type="button" class="make24-card-btn ${isUsed ? "used" : ""}" data-card-idx="${cIdx}" ${isUsed ? "disabled" : ""} title="Chạm để thêm số ${cardNum}">
                      ${cardNum}
                    </button>
                  `;
                }).join("")}
              </div>

              <!-- Expression Display Box -->
              <div class="make24-expr-display" id="make24ExprDisplay">
                ${session.getExpressionString() || '<span style="color:var(--muted); font-size:1rem; font-weight:500">(Chạm thẻ số &amp; phép tính để lập biểu thức)</span>'}
              </div>
            </div>

            <div class="make24-controls-side">
              <!-- Keypad for Operators and Actions -->
              <div class="make24-keypad">
                <button type="button" class="make24-op-btn" data-op="+">+</button>
                <button type="button" class="make24-op-btn" data-op="−">−</button>
                <button type="button" class="make24-op-btn" data-op="×">×</button>
                <button type="button" class="make24-op-btn" data-op=":">:</button>
                <button type="button" class="make24-op-btn" data-op="(">(</button>
                <button type="button" class="make24-op-btn" data-op=")">)</button>
                <button type="button" class="make24-op-btn" data-action="backspace" style="font-size:1.1rem; color:#dc2626">⌫ Xóa</button>
                <button type="button" class="make24-op-btn" data-action="clear" style="font-size:1.05rem; color:var(--muted)">🔄 Lại</button>
              </div>

              <!-- Submit Button -->
              <div>
                <button type="button" class="primary-button" id="make24SubmitBtn" style="width:100%; padding:14px; font-size:1.15rem; font-weight:800; background:#d97706">
                  Kiểm tra kết quả = ${target}? 🚀
                </button>
                <div style="display:flex; justify-content:center; margin-top:10px">
                  <button type="button" class="text-button" id="make24ToggleHintBtn" style="font-size:0.9rem; color:var(--muted)">
                    💡 Cần gợi ý bộ số này?
                  </button>
                </div>
              </div>

              <div id="make24HintArea" style="display:none; margin-top:14px; padding:12px 16px; border-radius:12px; background:#fffbeb; border:1px solid #fde68a; color:#92400e; font-size:0.92rem; line-height:1.45">
                <strong>💡 Gợi ý tư duy:</strong> ${esc(ch.hint)}
              </div>

              <div id="make24FeedbackArea" style="display:none; margin-top:16px; padding:16px; border-radius:14px; font-size:0.95rem; line-height:1.5">
              </div>
            </div>
          </div>

          <!-- Bottom Navigation Controls -->
          <div style="display:flex; justify-content:space-between; margin-top:24px; border-top:1px solid var(--line); padding-top:18px; flex-wrap:wrap; gap:8px">
            <div style="display:flex; gap:8px">
              <button type="button" class="small-button" id="prev24Btn">← Bộ trước</button>
              <button type="button" class="small-button" id="next24Btn">Bộ tiếp theo →</button>
            </div>
            <button type="button" class="small-button" id="random24Btn" style="color:#d97706; font-weight:700" title="Chuyển sang bộ thẻ ngẫu nhiên">Đổi bộ thẻ 🔀</button>
          </div>
        </div>
      </div>
    `;

    if (typeof document === "undefined") return;

    const selectEl = document.querySelector("#make24Select");
    const displayEl = document.querySelector("#make24ExprDisplay");
    const submitBtn = document.querySelector("#make24SubmitBtn");
    const toggleHintBtn = document.querySelector("#make24ToggleHintBtn");
    const hintArea = document.querySelector("#make24HintArea");
    const fbArea = document.querySelector("#make24FeedbackArea");

    function updateCardAndDisplayState() {
      if (displayEl) {
        displayEl.innerHTML = session.getExpressionString() || '<span style="color:var(--muted); font-size:1rem; font-weight:500">(Chạm thẻ số &amp; phép tính để lập biểu thức)</span>';
      }
      document.querySelectorAll("[data-card-idx]").forEach(btn => {
        const cIdx = Number(btn.dataset.cardIdx);
        const isUsed = session.usedCardIndices.has(cIdx);
        btn.classList.toggle("used", isUsed);
        btn.disabled = isUsed;
      });
    }

    document.querySelectorAll(".m24-lvl-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const startIdx = Number(btn.dataset.startIdx);
        session.loadChallenge(startIdx);
        renderCurrentProblem();
      });
    });

    selectEl?.addEventListener("change", e => {
      session.loadChallenge(Number(e.target.value));
      renderCurrentProblem();
    });

    document.querySelector("#prev24Btn")?.addEventListener("click", () => {
      session.prevChallenge();
      renderCurrentProblem();
    });

    document.querySelector("#next24Btn")?.addEventListener("click", () => {
      session.nextChallenge();
      renderCurrentProblem();
    });

    document.querySelector("#random24Btn")?.addEventListener("click", () => {
      session.nextSmartChallenge();
      renderCurrentProblem();
    });

    // Event delegation cho 4 card buttons
    document.querySelectorAll("[data-card-idx]").forEach(btn => {
      btn.addEventListener("click", () => {
        const cIdx = Number(btn.dataset.cardIdx);
        session.pushCard(cIdx);
        updateCardAndDisplayState();
      });
    });

    // Event delegation cho operators (+, -, *, /, (, ))
    document.querySelectorAll("[data-op]").forEach(btn => {
      btn.addEventListener("click", () => {
        const op = btn.dataset.op;
        session.pushOperator(op);
        updateCardAndDisplayState();
      });
    });

    // Backspace và Clear
    document.querySelector('[data-action="backspace"]')?.addEventListener("click", () => {
      session.popToken();
      updateCardAndDisplayState();
    });

    document.querySelector('[data-action="clear"]')?.addEventListener("click", () => {
      session.clearExpression();
      updateCardAndDisplayState();
    });

    toggleHintBtn?.addEventListener("click", () => {
      if (hintArea) {
        hintArea.style.display = hintArea.style.display === "none" ? "block" : "none";
      }
    });

    submitBtn?.addEventListener("click", async () => {
      const res = session.checkSolution();

      if (fbArea) {
        fbArea.style.display = "block";
        if (res.isSuccess) {
          fbArea.style.background = "#ecfdf5";
          fbArea.style.border = "1px solid #a7f3d0";
          fbArea.style.color = "#065f46";
          fbArea.innerHTML = `
            <strong>${esc(res.message)}</strong>
            <div style="margin-top:8px; font-weight:600">★ Biểu thức mẫu: ${esc(res.sampleSolution)}</div>
            <div style="margin-top:14px; display:flex; gap:10px; align-items:center; flex-wrap:wrap">
              <button type="button" class="primary-button" id="solveNext24Btn" style="padding:8px 18px; font-size:0.92rem; background:#16a34a">
                Bộ thẻ tiếp theo →
              </button>
              <button type="button" class="small-button" id="solveRandom24Btn" style="color:#d97706; font-weight:700">
                Đổi bộ thẻ khác 🔀
              </button>
            </div>
          `;

          document.querySelector("#solveNext24Btn")?.addEventListener("click", () => {
            session.nextChallenge();
            renderCurrentProblem();
          });

          document.querySelector("#solveRandom24Btn")?.addEventListener("click", () => {
            session.nextSmartChallenge();
            renderCurrentProblem();
          });

          // Lưu thành tích Make 24
          if (!state.db.gameRecords) state.db.gameRecords = {};
          if (!state.db.gameRecords.make24) {
            state.db.gameRecords.make24 = { stars: 0, solvedCount: 0, completedChallenges: [] };
          }
          const rec = state.db.gameRecords.make24;
          if (!Array.isArray(rec.completedChallenges)) rec.completedChallenges = [];
          if (!rec.completedChallenges.includes(ch.id)) {
            rec.completedChallenges.push(ch.id);
            rec.solvedCount = rec.completedChallenges.length;
            rec.stars = (rec.stars || 0) + 1;
            // Adaptive Engine: ghi nhận kết quả Make 24
            const timeMs = Date.now() - startTime;
            recordGameOutcome(state, "make24", { success: true, difficulty: ch.difficulty || 3, timeMs });
            const newBadges = checkAndAwardBadges(state);
            for (const b of newBadges) showBadgeCelebration(b);
            if (typeof saveLocal === "function") await saveLocal(true);
          }
        } else {
          const timeMs = Date.now() - startTime;
          recordGameOutcome(state, "make24", { success: false, difficulty: ch.difficulty || 3, timeMs });
          fbArea.style.background = "#fffbeb";
          fbArea.style.border = "1px solid #fde68a";
          fbArea.style.color = "#92400e";
          fbArea.innerHTML = `
            <strong>${esc(res.message)}</strong>
            ${res.hint ? `<div style="margin-top:6px; font-size:0.9rem">${esc(res.hint)}</div>` : ""}
          `;
        }
      }
    });
  }

  renderCurrentProblem();
}
