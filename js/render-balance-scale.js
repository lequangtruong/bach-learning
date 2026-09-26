// js/render-balance-scale.js - Giao diện Game 4: Cân Bằng Bí Mật (Math Balance Scale)
// Hỗ trợ 3 Chế độ: Cân Đơn (1 ẩn X), Hệ 2 Cân Liên Hoàn (2 ẩn X, Y) và Thám Tử Cân Bóng Giả Logic
import { 
  BalanceScaleSession, 
  BALANCE_SCALE_CHALLENGES, 
  BALANCE_SCALE_LEVELS,
  DualScaleSession,
  DUAL_SCALE_CHALLENGES,
  DetectiveScaleSession,
  DETECTIVE_PUZZLES
} from "./balance-scale.js";
import { getDifficultyMeta } from "./render-games.js";
import { recordGameOutcome } from "./adaptive-engine.js";
import { checkAndAwardBadges, showBadgeCelebration } from "./badge-system.js";

let activeBalanceScaleSession = null;
let activeDualScaleSession = null;
let activeDetectiveSession = null;
let currentScaleMode = "dual"; // Mặc định mở Hệ 2 Cân để tạo độ khó thách thức cao ngay từ đầu!

const esc = str => String(str ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function renderBalanceScaleView({ state, appRoot, saveLocal, challengeIndex, params } = {}) {
  const urlParams = params || (typeof window !== "undefined" && window.location?.hash?.includes("?")
    ? new URLSearchParams(window.location.hash.split("?")[1])
    : null);

  if (urlParams && urlParams.has("mode")) {
    const m = urlParams.get("mode");
    if (["single", "dual", "detective"].includes(m)) {
      currentScaleMode = m;
    }
  }

  function renderView() {
    if (currentScaleMode === "dual") {
      renderDualScaleMode();
    } else if (currentScaleMode === "detective") {
      renderDetectiveMode();
    } else {
      renderSingleScaleMode();
    }
  }

  // 1. Chế độ Hệ 2 Cân Liên Hoàn (2 ẩn X & Y)
  function renderDualScaleMode() {
    if (!activeDualScaleSession) {
      activeDualScaleSession = new DualScaleSession(0);
    }
    const session = activeDualScaleSession;
    const ch = session.getCurrentChallenge();
    const diffMeta = getDifficultyMeta(ch.difficulty || 5);
    const records = state?.db?.gameRecords?.dualBalanceScale || { stars: 0, completedChallenges: [] };
    const isCompleted = Array.isArray(records.completedChallenges) && records.completedChallenges.includes(ch.id);

    appRoot.innerHTML = `
      <div style="margin-bottom:16px; display:flex; gap:12px; align-items:center; flex-wrap:wrap">
        <a href="#math" class="text-button" style="display:inline-flex; align-items:center; gap:6px; font-weight:700">← Quay lại Buổi học Toán</a>
        <span style="color:var(--line)">•</span>
        <a href="#games" class="text-button" style="display:inline-flex; align-items:center; gap:6px; font-weight:600; color:var(--muted)">Sảnh Trò Chơi</a>
      </div>

      <!-- Mode Selector Tabs -->
      <div style="display:flex; gap:8px; margin-bottom:18px; flex-wrap:wrap">
        <button type="button" class="small-button mode-tab" data-target-mode="dual" style="background:#7c3aed; color:#fff; font-weight:800; border-radius:10px; padding:8px 16px">
          ⚖️⚖️ Hệ 2 Cân (Túi Vàng X &amp; Xanh Y)
        </button>
        <button type="button" class="small-button mode-tab" data-target-mode="detective" style="background:#fff; color:var(--ink); font-weight:700; border-radius:10px; padding:8px 16px; border:1px solid var(--line)">
          🕵️⚖️ Cân Bóng Giả (Olympic)
        </button>
        <button type="button" class="small-button mode-tab" data-target-mode="single" style="background:#fff; color:var(--ink); font-weight:700; border-radius:10px; padding:8px 16px; border:1px solid var(--line)">
          ⚖️ Cân Đơn 1 Ẩn (Số Lớn)
        </button>
      </div>

      <div class="bug-stage" style="max-width:820px">
        <div class="bug-problem-card">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; flex-wrap:wrap; gap:10px">
            <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap">
              <span class="game-card-badge badge-balance">⚖️ ĐẠI SỐ 2 ẨN</span>
              <span class="stage-game-task-diff" style="background:${diffMeta.bg}; color:${diffMeta.color}; border:1px solid ${diffMeta.border}">
                ${diffMeta.stars} ${diffMeta.label}
              </span>
              <span class="streak-badge" style="background:#ede9fe; color:#6d28d9">
                ${isCompleted ? "✅ Đã giải xong" : `Đã giải: ${records.completedChallenges?.length || 0}/${DUAL_SCALE_CHALLENGES.length}`}
              </span>
            </div>

            <div style="display:flex; align-items:center; gap:8px">
              <label for="dualSelect" style="font-size:0.88rem; font-weight:600; color:var(--muted)">Chọn bài:</label>
              <select id="dualSelect" style="padding:6px 12px; border-radius:10px; border:1px solid var(--line); font-weight:600; font-size:0.88rem; max-width:280px">
                ${DUAL_SCALE_CHALLENGES.map((c, i) => `
                  <option value="${i}" ${i === session.currentIndex ? "selected" : ""}>
                    #${i + 1}: ${esc(c.title.replace(/^Thử thách \d+:\s*/, ""))}
                  </option>
                `).join("")}
              </select>
            </div>
          </div>

          <h3 style="font-size:1.25rem; margin:0 0 10px; color:var(--ink)">${esc(ch.title)}</h3>
          <p style="color:var(--muted); font-size:0.95rem; margin:0 0 16px; white-space:pre-line; line-height:1.5">${esc(ch.problem)}</p>

          <!-- Dual Scale Split for iPad Landscape -->
          <div class="balance-landscape-split">
            <!-- Dual Scale SVG View -->
            <div id="dualSvgContainer" style="background:#f8fafc; border-radius:16px; padding:12px 6px; border:1px solid var(--line)">
              ${session.renderDualSvgMarkup()}
            </div>

            <!-- Dual Input Form -->
            <div style="background:#ffffff; border:1.5px solid var(--line); border-radius:18px; padding:18px; box-shadow:0 2px 6px rgba(0,0,0,0.02)">
              <form id="dualForm" onsubmit="return false;" style="display:flex; gap:14px; align-items:center; justify-content:center; flex-wrap:wrap">
                <div style="display:flex; align-items:center; gap:6px">
                  <span style="display:inline-block; width:16px; height:16px; border-radius:50%; background:#f59e0b"></span>
                  <label for="dualInputX" style="font-weight:800; font-size:1.05rem; color:#b45309">Túi Vàng X =</label>
                  <input type="text" inputmode="numeric" id="dualInputX" placeholder="?" autocomplete="off" style="width:75px; height:44px; font-size:1.3rem; font-weight:800; text-align:center; border:2px solid #f59e0b; border-radius:10px" />
                  <span style="font-weight:700; color:var(--muted)">${esc(ch.unit)}</span>
                </div>

                <div style="display:flex; align-items:center; gap:6px">
                  <span style="display:inline-block; width:16px; height:16px; border-radius:50%; background:#06b6d4"></span>
                  <label for="dualInputY" style="font-weight:800; font-size:1.05rem; color:#0e7490">Túi Xanh Y =</label>
                  <input type="text" inputmode="numeric" id="dualInputY" placeholder="?" autocomplete="off" style="width:75px; height:44px; font-size:1.3rem; font-weight:800; text-align:center; border:2px solid #06b6d4; border-radius:10px" />
                  <span style="font-weight:700; color:var(--muted)">${esc(ch.unit)}</span>
                </div>

                <div style="display:flex; gap:10px; width:100%; justify-content:center; margin-top:4px">
                  <button type="button" class="primary-button" id="dualSubmitBtn" style="padding:0 20px; height:44px; font-size:1rem; font-weight:800; background:#7c3aed; flex:1; max-width:220px">
                    Thử cân ⚖️⚖️
                  </button>
                  <button type="button" class="small-button" id="dualToggleHintBtn" style="height:44px; font-size:0.9rem; color:var(--muted)">
                    💡 Mẹo giải
                  </button>
                </div>
              </form>

              <div id="dualHintArea" style="display:none; margin-top:14px; padding:12px 16px; border-radius:12px; background:#fffbeb; border:1px solid #fde68a; color:#92400e; font-size:0.92rem; line-height:1.45">
                <strong>💡 Gợi ý tư duy Singapore:</strong> ${esc(ch.hint)}
              </div>

              <div id="dualFeedbackArea" style="display:none; margin-top:16px; padding:16px; border-radius:14px; font-size:0.95rem; line-height:1.5">
              </div>
            </div>
          </div>

          <!-- Bottom Navigation Controls -->
          <div style="display:flex; justify-content:space-between; margin-top:22px; border-top:1px solid var(--line); padding-top:16px; flex-wrap:wrap; gap:8px">
            <div style="display:flex; gap:8px">
              <button type="button" class="small-button" id="prevDualBtn">← Bài trước</button>
              <button type="button" class="small-button" id="nextDualBtn">Bài tiếp theo →</button>
            </div>
            <button type="button" class="small-button" id="randomDualBtn" style="color:#7c3aed; font-weight:700">Đổi bài ngẫu nhiên 🔀</button>
          </div>
        </div>
      </div>
    `;

    bindModeTabs();

    const selectEl = document.querySelector("#dualSelect");
    const inputX = document.querySelector("#dualInputX");
    const inputY = document.querySelector("#dualInputY");
    const submitBtn = document.querySelector("#dualSubmitBtn");
    const hintBtn = document.querySelector("#dualToggleHintBtn");
    const hintArea = document.querySelector("#dualHintArea");
    const fbArea = document.querySelector("#dualFeedbackArea");
    const svgContainer = document.querySelector("#dualSvgContainer");

    selectEl?.addEventListener("change", e => {
      session.loadChallenge(Number(e.target.value));
      renderDualScaleMode();
    });

    document.querySelector("#prevDualBtn")?.addEventListener("click", () => {
      session.prevChallenge();
      renderDualScaleMode();
    });

    document.querySelector("#nextDualBtn")?.addEventListener("click", () => {
      session.nextChallenge();
      renderDualScaleMode();
    });

    document.querySelector("#randomDualBtn")?.addEventListener("click", () => {
      session.nextSmartChallenge();
      renderDualScaleMode();
    });

    hintBtn?.addEventListener("click", () => {
      if (hintArea) hintArea.style.display = hintArea.style.display === "none" ? "block" : "none";
    });

    const handleDualSubmit = async () => {
      const res = session.checkDualAnswer(inputX?.value, inputY?.value);
      if (svgContainer) svgContainer.innerHTML = session.renderDualSvgMarkup();

      if (fbArea) {
        fbArea.style.display = "block";
        if (res.isCorrect) {
          fbArea.style.background = "#ecfdf5";
          fbArea.style.border = "1px solid #a7f3d0";
          fbArea.style.color = "#065f46";
          fbArea.innerHTML = `
            <strong>${esc(res.message)}</strong>
            <div style="margin-top:8px; font-weight:600">★ Cách giải chi tiết: ${esc(res.solution)}</div>
            ${res.scaleC ? `
              <div style="margin-top:10px; padding:10px 14px; background:#ffffff; border-radius:10px; border:1px dashed #10b981">
                <strong>🎯 ${esc(res.scaleC.title)}</strong> → Đáp số cần đặt là <strong>${res.scaleC.targetWeight} ${esc(ch.unit)}</strong>!
              </div>
            ` : ""}
            <div style="margin-top:14px; display:flex; gap:10px; align-items:center; flex-wrap:wrap">
              <button type="button" class="primary-button" id="solveNextDualBtn" style="padding:8px 18px; font-size:0.92rem; background:#16a34a">
                Bài tiếp theo →
              </button>
              <button type="button" class="small-button" id="solveRandomDualBtn" style="color:#7c3aed; font-weight:700">
                Đổi bài khác 🔀
              </button>
            </div>
          `;

          document.querySelector("#solveNextDualBtn")?.addEventListener("click", () => {
            session.nextChallenge();
            renderDualScaleMode();
          });
          document.querySelector("#solveRandomDualBtn")?.addEventListener("click", () => {
            session.nextSmartChallenge();
            renderDualScaleMode();
          });

          // Lưu tiến độ Dual Scale
          if (!state.db.gameRecords) state.db.gameRecords = {};
          if (!state.db.gameRecords.dualBalanceScale) {
            state.db.gameRecords.dualBalanceScale = { stars: 0, completedChallenges: [] };
          }
          const rec = state.db.gameRecords.dualBalanceScale;
          if (!Array.isArray(rec.completedChallenges)) rec.completedChallenges = [];
          if (!rec.completedChallenges.includes(ch.id)) {
            rec.completedChallenges.push(ch.id);
            rec.stars = (rec.stars || 0) + 1;
            // Adaptive Engine: ghi nhận kết quả Dual Balance Scale
            recordGameOutcome(state, "balanceScale", { success: true, difficulty: ch.difficulty || 3 });
            const newBadges = checkAndAwardBadges(state);
            for (const b of newBadges) showBadgeCelebration(b);
            if (typeof saveLocal === "function") await saveLocal(true);
          }
        } else {
          fbArea.style.background = "#fffbeb";
          fbArea.style.border = "1px solid #fde68a";
          fbArea.style.color = "#92400e";
          fbArea.innerHTML = `
            <strong>${esc(res.message)}</strong>
            ${res.hint ? `<div style="margin-top:6px; font-size:0.9rem">${esc(res.hint)}</div>` : ""}
          `;
        }
      }
    };

    submitBtn?.addEventListener("click", handleDualSubmit);
    [inputX, inputY].forEach(inp => {
      inp?.addEventListener("keydown", e => {
        if (e.key === "Enter") {
          e.preventDefault();
          handleDualSubmit();
        }
      });
    });
  }

  // 2. Chế độ Thám Tử Cân Bóng Giả (Detective Ball Weighing Puzzle)
  function renderDetectiveMode() {
    if (!activeDetectiveSession) {
      activeDetectiveSession = new DetectiveScaleSession(0);
    }
    const session = activeDetectiveSession;
    const p = session.getCurrentPuzzle();
    const records = state?.db?.gameRecords?.detectiveScale || { stars: 0, completedPuzzles: [] };
    const isCompleted = Array.isArray(records.completedPuzzles) && records.completedPuzzles.includes(p.id);

    // Danh sách tất cả các quả bóng
    const allBalls = Array.from({ length: p.ballCount }, (_, i) => i + 1);

    appRoot.innerHTML = `
      <div style="margin-bottom:16px; display:flex; gap:12px; align-items:center; flex-wrap:wrap">
        <a href="#math" class="text-button" style="display:inline-flex; align-items:center; gap:6px; font-weight:700">← Quay lại Buổi học Toán</a>
        <span style="color:var(--line)">•</span>
        <a href="#games" class="text-button" style="display:inline-flex; align-items:center; gap:6px; font-weight:600; color:var(--muted)">Sảnh Trò Chơi</a>
      </div>

      <!-- Mode Selector Tabs -->
      <div style="display:flex; gap:8px; margin-bottom:18px; flex-wrap:wrap">
        <button type="button" class="small-button mode-tab" data-target-mode="dual" style="background:#fff; color:var(--ink); font-weight:700; border-radius:10px; padding:8px 16px; border:1px solid var(--line)">
          ⚖️⚖️ Hệ 2 Cân (Túi Vàng X &amp; Xanh Y)
        </button>
        <button type="button" class="small-button mode-tab" data-target-mode="detective" style="background:#0284c7; color:#fff; font-weight:800; border-radius:10px; padding:8px 16px">
          🕵️⚖️ Cân Bóng Giả (Olympic)
        </button>
        <button type="button" class="small-button mode-tab" data-target-mode="single" style="background:#fff; color:var(--ink); font-weight:700; border-radius:10px; padding:8px 16px; border:1px solid var(--line)">
          ⚖️ Cân Đơn 1 Ẩn (Số Lớn)
        </button>
      </div>

      <div class="bug-stage" style="max-width:820px">
        <div class="bug-problem-card">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; flex-wrap:wrap; gap:10px">
            <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap">
              <span class="game-card-badge" style="background:#e0f2fe; color:#0369a1">🕵️ LOGIC OLYMPIC</span>
              <span class="difficulty-badge" style="background:#fef3c7; color:#b45309; font-weight:700; font-size:0.8rem; padding:4px 8px; border-radius:8px">
                ${"★".repeat(p.difficulty || 1)} ${esc(p.level || ("Cấp " + (p.difficulty || 1)))}
              </span>
              <span class="streak-badge" style="background:#fef08a; color:#854d0e">
                Tối đa: ${p.maxWeighsAllowed} lần cân (Đã cân: ${session.weighCount}/${p.maxWeighsAllowed})
              </span>
              <span class="streak-badge" style="background:#ede9fe; color:#6d28d9">
                ${isCompleted ? "✅ Đã phá án" : `Đã giải: ${records.completedPuzzles?.length || 0}/${DETECTIVE_PUZZLES.length}`}
              </span>
            </div>

            <div style="display:flex; align-items:center; gap:8px">
              <label for="detectiveSelect" style="font-size:0.88rem; font-weight:600; color:var(--muted)">Chọn vụ án:</label>
              <select id="detectiveSelect" style="padding:6px 12px; border-radius:10px; border:1px solid var(--line); font-weight:600; font-size:0.88rem; max-width:260px">
                ${DETECTIVE_PUZZLES.map((item, idx) => `
                  <option value="${idx}" ${idx === session.currentIndex ? "selected" : ""}>
                    #${idx + 1}: ${esc(item.title.replace(/^Vụ án \d+:\s*/, ""))}
                  </option>
                `).join("")}
              </select>
            </div>
          </div>

          <h3 style="font-size:1.25rem; margin:0 0 10px; color:var(--ink)">${esc(p.title)}</h3>
          <p style="color:var(--muted); font-size:0.95rem; margin:0 0 16px; line-height:1.5">${esc(p.problem)}</p>

          <!-- SVG Interactive Scale -->
          <div id="detectiveSvgContainer" style="background:#f8fafc; border-radius:16px; padding:12px 6px; border:1px solid var(--line); margin-bottom:16px">
            ${session.renderSvgMarkup()}
          </div>

          <!-- Ball Selector Controls -->
          <div style="background:#ffffff; border:1.5px solid var(--line); border-radius:18px; padding:18px; margin-bottom:16px">
            <div style="font-weight:700; margin-bottom:10px; color:var(--ink)">1. Chạm số bóng để xếp lên Đĩa Trái hoặc Đĩa Phải:</div>
            <div style="display:flex; gap:10px; flex-wrap:wrap; justify-content:center; margin-bottom:16px">
              ${allBalls.map(num => {
                const inLeft = session.leftPan.includes(num);
                const inRight = session.rightPan.includes(num);
                let badge = "";
                let style = "background:#f1f5f9; border:2px solid #cbd5e1; color:#0f172a";
                if (inLeft) {
                  badge = " (Trái)";
                  style = "background:#e0f2fe; border:2px solid #0284c7; color:#0369a1; font-weight:900";
                } else if (inRight) {
                  badge = " (Phải)";
                  style = "background:#fef3c7; border:2px solid #d97706; color:#b45309; font-weight:900";
                }
                return `
                  <div style="display:flex; flex-direction:column; gap:4px; align-items:center">
                    <button type="button" class="ball-pick-btn" data-ball="${num}" style="width:44px; height:44px; border-radius:50%; font-size:1.15rem; cursor:pointer; ${style}">
                      ${num}
                    </button>
                    <div style="display:flex; gap:2px">
                      <button type="button" class="pan-btn left" data-pan="left" data-ball="${num}" style="font-size:0.72rem; padding:2px 4px; border-radius:4px; border:1px solid var(--line); cursor:pointer">L</button>
                      <button type="button" class="pan-btn right" data-pan="right" data-ball="${num}" style="font-size:0.72rem; padding:2px 4px; border-radius:4px; border:1px solid var(--line); cursor:pointer">R</button>
                    </div>
                  </div>
                `;
              }).join("")}
            </div>

            <div style="display:flex; justify-content:center; gap:12px; flex-wrap:wrap">
              <button type="button" class="primary-button" id="weighBtn" style="padding:10px 24px; font-weight:800; background:#0284c7">
                ⚖️ Bấm Cân thử!
              </button>
              <button type="button" class="small-button" id="clearPanBtn" style="padding:10px 16px">
                🔄 Thu bóng về khay
              </button>
              <button type="button" class="small-button" id="detectiveHintBtn" style="color:var(--muted)">
                💡 Gợi ý chiến thuật chia 3
              </button>
            </div>

            <!-- Weighing History Log -->
            <div id="weighLogArea" style="margin-top:14px; padding:12px; background:#f8fafc; border-radius:12px; border:1px dashed #cbd5e1; font-size:0.9rem">
              <strong>Nhật ký các lần cân:</strong>
              ${session.weighedHistory.length === 0 ? '<div style="color:var(--muted); margin-top:4px">Chưa có lần cân nào. Xếp các quả bóng đều 2 đĩa rồi bấm "Bấm Cân thử!".</div>' : `
                <ul style="margin:6px 0 0; padding-left:20px">
                  ${session.weighedHistory.map(h => `<li style="margin-bottom:4px"><strong>${esc(h.summary)}</strong></li>`).join("")}
                </ul>
              `}
            </div>

            <div id="detectiveHintBox" style="display:none; margin-top:12px; padding:12px 16px; border-radius:12px; background:#fffbeb; border:1px solid #fde68a; color:#92400e; font-size:0.92rem; line-height:1.45">
              <strong>💡 Chiến thuật Olympic:</strong> ${esc(p.hint)}
            </div>
          </div>

          <!-- Final Accusation / Guess Box -->
          <div style="background:#f0fdf4; border:1.5px solid #86efac; border-radius:18px; padding:18px">
            <div style="font-weight:800; color:#166534; font-size:1.05rem; margin-bottom:10px">
              2. Kết luận thám tử: Quả bóng số mấy là bóng giả?
            </div>
            <div style="display:flex; gap:12px; align-items:center; flex-wrap:wrap">
              <label for="fakeGuessSelect" style="font-weight:700">Chọn quả bóng giả:</label>
              <select id="fakeGuessSelect" style="padding:8px 16px; font-size:1.1rem; font-weight:800; border-radius:10px; border:2px solid #16a34a">
                ${allBalls.map(num => `<option value="${num}">Quả số ${num}</option>`).join("")}
              </select>
              <button type="button" class="primary-button" id="submitGuessBtn" style="padding:10px 24px; font-weight:800; background:#16a34a">
                Xác nhận phá án! 🕵️
              </button>
            </div>
            <div id="guessFeedbackArea" style="display:none; margin-top:14px; padding:14px; border-radius:12px; line-height:1.5"></div>
          </div>

          <!-- Bottom Navigation Controls -->
          <div style="display:flex; justify-content:space-between; margin-top:22px; border-top:1px solid var(--line); padding-top:16px; flex-wrap:wrap; gap:8px">
            <div style="display:flex; gap:8px">
              <button type="button" class="small-button" id="prevDetectiveBtn">← Vụ án trước</button>
              <button type="button" class="small-button" id="nextDetectiveBtn">Vụ án tiếp theo →</button>
            </div>
            <button type="button" class="small-button" id="resetDetectiveBtn" style="color:#0284c7; font-weight:700">Chơi lại vụ này 🔄</button>
          </div>
        </div>
      </div>
    `;

    bindModeTabs();

    const selectEl = document.querySelector("#detectiveSelect");
    const svgCont = document.querySelector("#detectiveSvgContainer");
    const weighBtn = document.querySelector("#weighBtn");
    const clearBtn = document.querySelector("#clearPanBtn");
    const hintBtn = document.querySelector("#detectiveHintBtn");
    const hintBox = document.querySelector("#detectiveHintBox");
    const guessBtn = document.querySelector("#submitGuessBtn");
    const guessSelect = document.querySelector("#fakeGuessSelect");
    const guessFbArea = document.querySelector("#guessFeedbackArea");

    selectEl?.addEventListener("change", e => {
      session.loadPuzzle(Number(e.target.value));
      renderDetectiveMode();
    });

    document.querySelector("#prevDetectiveBtn")?.addEventListener("click", () => {
      if (session.currentIndex > 0) session.loadPuzzle(session.currentIndex - 1);
      renderDetectiveMode();
    });

    document.querySelector("#nextDetectiveBtn")?.addEventListener("click", () => {
      if (session.currentIndex < DETECTIVE_PUZZLES.length - 1) session.loadPuzzle(session.currentIndex + 1);
      renderDetectiveMode();
    });

    document.querySelector("#resetDetectiveBtn")?.addEventListener("click", () => {
      session.loadPuzzle(session.currentIndex);
      renderDetectiveMode();
    });

    hintBtn?.addEventListener("click", () => {
      if (hintBox) hintBox.style.display = hintBox.style.display === "none" ? "block" : "none";
    });

    // Toggle ball on pans via L / R buttons
    document.querySelectorAll(".pan-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const pan = btn.dataset.pan;
        const bNum = Number(btn.dataset.ball);
        if (pan === "left") session.toggleBallOnLeft(bNum);
        else session.toggleBallOnRight(bNum);
        renderDetectiveMode();
      });
    });

    // Clicking ball cycles: tray -> left -> right -> tray
    document.querySelectorAll(".ball-pick-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const bNum = Number(btn.dataset.ball);
        if (!session.leftPan.includes(bNum) && !session.rightPan.includes(bNum)) {
          session.toggleBallOnLeft(bNum);
        } else if (session.leftPan.includes(bNum)) {
          session.toggleBallOnRight(bNum);
        } else {
          session.rightPan = session.rightPan.filter(x => x !== bNum);
        }
        renderDetectiveMode();
      });
    });

    clearBtn?.addEventListener("click", () => {
      session.clearPans();
      renderDetectiveMode();
    });

    weighBtn?.addEventListener("click", () => {
      const res = session.weigh();
      if (!res.ok) {
        alert(res.message);
        return;
      }
      renderDetectiveMode();
    });

    guessBtn?.addEventListener("click", async () => {
      const ballId = Number(guessSelect?.value);
      const res = session.submitGuess(ballId);

      if (guessFbArea) {
        guessFbArea.style.display = "block";
        if (res.isCorrect) {
          guessFbArea.style.background = "#ecfdf5";
          guessFbArea.style.border = "1px solid #a7f3d0";
          guessFbArea.style.color = "#065f46";
          guessFbArea.innerHTML = `
            <strong>${esc(res.message)}</strong>
            <div style="margin-top:8px; font-weight:600">★ Lời giải thuật toán chia ba: ${esc(res.solution)}</div>
          `;

          // Lưu tiến độ Detective
          if (!state.db.gameRecords) state.db.gameRecords = {};
          if (!state.db.gameRecords.detectiveScale) {
            state.db.gameRecords.detectiveScale = { stars: 0, completedPuzzles: [] };
          }
          const rec = state.db.gameRecords.detectiveScale;
          if (!Array.isArray(rec.completedPuzzles)) rec.completedPuzzles = [];
          if (!rec.completedPuzzles.includes(p.id)) {
            rec.completedPuzzles.push(p.id);
            rec.stars = (rec.stars || 0) + 1;
            // Adaptive Engine: ghi nhận kết quả Detective Scale
            recordGameOutcome(state, "balanceScale", { success: true, difficulty: p.difficulty || 3 });
            const newBadges = checkAndAwardBadges(state);
            for (const b of newBadges) showBadgeCelebration(b);
            if (typeof saveLocal === "function") await saveLocal(true);
          }
        } else {
          guessFbArea.style.background = "#fffbeb";
          guessFbArea.style.border = "1px solid #fde68a";
          guessFbArea.style.color = "#92400e";
          guessFbArea.innerHTML = `
            <strong>${esc(res.message)}</strong>
            ${res.hint ? `<div style="margin-top:6px; font-size:0.9rem">${esc(res.hint)}</div>` : ""}
          `;
        }
      }
    });
  }

  // 3. Chế độ Cân Đơn (1 ẩn X số lớn)
  function renderSingleScaleMode() {
    if (!activeBalanceScaleSession) {
      activeBalanceScaleSession = new BalanceScaleSession(0);
    }
    const session = activeBalanceScaleSession;
    const ch = session.getCurrentChallenge();
    const diffMeta = getDifficultyMeta(ch.difficulty || 2);
    const bRec = state?.db?.gameRecords?.balanceScale || { stars: 0, completedChallenges: [] };
    const isCompleted = Array.isArray(bRec.completedChallenges) && bRec.completedChallenges.includes(ch.id);

    appRoot.innerHTML = `
      <div style="margin-bottom:16px; display:flex; gap:12px; align-items:center; flex-wrap:wrap">
        <a href="#math" class="text-button" style="display:inline-flex; align-items:center; gap:6px; font-weight:700">← Quay lại Buổi học Toán</a>
        <span style="color:var(--line)">•</span>
        <a href="#games" class="text-button" style="display:inline-flex; align-items:center; gap:6px; font-weight:600; color:var(--muted)">Sảnh Trò Chơi</a>
      </div>

      <!-- Mode Selector Tabs -->
      <div style="display:flex; gap:8px; margin-bottom:18px; flex-wrap:wrap">
        <button type="button" class="small-button mode-tab" data-target-mode="dual" style="background:#fff; color:var(--ink); font-weight:700; border-radius:10px; padding:8px 16px; border:1px solid var(--line)">
          ⚖️⚖️ Hệ 2 Cân (Túi Vàng X &amp; Xanh Y)
        </button>
        <button type="button" class="small-button mode-tab" data-target-mode="detective" style="background:#fff; color:var(--ink); font-weight:700; border-radius:10px; padding:8px 16px; border:1px solid var(--line)">
          🕵️⚖️ Cân Bóng Giả (Olympic)
        </button>
        <button type="button" class="small-button mode-tab" data-target-mode="single" style="background:#7c3aed; color:#fff; font-weight:800; border-radius:10px; padding:8px 16px">
          ⚖️ Cân Đơn 1 Ẩn (Số Lớn)
        </button>
      </div>

      <div class="bug-stage" style="max-width:760px">
        <div class="bug-problem-card">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; flex-wrap:wrap; gap:10px">
            <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap">
              <span class="game-card-badge badge-balance">⚖️ TƯ DUY ĐẠI SỐ</span>
              <span class="stage-game-task-diff" style="background:${diffMeta.bg}; color:${diffMeta.color}; border:1px solid ${diffMeta.border}">
                ${diffMeta.stars} ${diffMeta.label}
              </span>
              <span class="streak-badge" style="background:#ede9fe; color:#6d28d9">
                ${isCompleted ? "✅ Đã giải xong" : `Đã giải: ${bRec.completedChallenges?.length || 0}/${BALANCE_SCALE_CHALLENGES.length}`}
              </span>
            </div>

            <div style="display:flex; align-items:center; gap:8px">
              <label for="scaleChallengeSelect" style="font-size:0.88rem; font-weight:600; color:var(--muted)">Chọn bài:</label>
              <select id="scaleChallengeSelect" style="padding:6px 12px; border-radius:10px; border:1px solid var(--line); font-weight:600; font-size:0.88rem; max-width:280px">
                ${BALANCE_SCALE_LEVELS.map(lvl => {
                  const challengesInLvl = BALANCE_SCALE_CHALLENGES.filter(c => c.level === lvl.name);
                  return `
                    <optgroup label="${lvl.name}">
                      ${challengesInLvl.map(c => `
                        <option value="${c.index}" ${c.index === session.currentIndex ? "selected" : ""}>
                          #${c.index + 1}: ${esc(c.title.replace(/^Thử thách \d+:\s*/, ""))}
                        </option>
                      `).join("")}
                    </optgroup>
                  `;
                }).join("")}
              </select>
            </div>
          </div>

          <h3 style="font-size:1.3rem; margin:0 0 12px; color:var(--ink)">${esc(ch.title)}</h3>
          <p style="color:var(--muted); font-size:1rem; margin:0 0 16px; line-height:1.5">${esc(ch.problem)}</p>

          <!-- Single Scale Split for iPad Landscape -->
          <div class="balance-landscape-split">
            <!-- SVG Visual Balance Scale Canvas -->
            <div id="balanceSvgStage" class="balance-scale-stage" style="background:#f8fafc; border-radius:16px; padding:16px 8px; border:1px solid var(--line)">
              ${session.renderSvgMarkup()}
            </div>

            <!-- Input Row for X value -->
            <div style="background:#ffffff; border:1.5px solid var(--line); border-radius:18px; padding:18px; box-shadow:0 2px 6px rgba(0,0,0,0.02)">
              <form id="scaleForm" onsubmit="return false;" style="display:flex; gap:12px; align-items:center; justify-content:center; flex-wrap:wrap">
                <div style="display:flex; align-items:center; gap:8px">
                  <label for="scaleInput" style="font-weight:700; font-size:1.05rem; color:var(--ink)">
                    Túi X = 
                  </label>
                  <input type="text" inputmode="numeric" pattern="[0-9]*" id="scaleInput" placeholder="?" autocomplete="off" style="width:110px; height:46px; font-size:1.35rem; font-weight:800; text-align:center; border:2px solid var(--line); border-radius:12px; padding:0 8px" />
                  <span style="font-weight:700; font-size:1.05rem; color:var(--muted)">${esc(ch.unit)}</span>
                </div>
                <div style="display:flex; gap:10px; width:100%; justify-content:center; margin-top:4px">
                  <button type="button" class="primary-button" id="scaleSubmitBtn" style="padding:0 22px; height:46px; font-size:1rem; font-weight:800; background:#7c3aed; flex:1; max-width:200px">
                    Thử cân ⚖️
                  </button>
                  <button type="button" class="small-button" id="scaleToggleHintBtn" style="height:46px; font-size:0.9rem; color:var(--muted)">
                    💡 Gợi ý
                  </button>
                </div>
              </form>

              <div id="scaleHintArea" style="display:none; margin-top:14px; padding:12px 16px; border-radius:12px; background:#fffbeb; border:1px solid #fde68a; color:#92400e; font-size:0.92rem; line-height:1.45">
                <strong>💡 Gợi ý tư duy:</strong> ${esc(ch.hint)}
              </div>

              <div id="scaleFeedbackArea" style="display:none; margin-top:16px; padding:16px; border-radius:14px; font-size:0.95rem; line-height:1.5">
              </div>
            </div>
          </div>

          <!-- Bottom Navigation Controls -->
          <div style="display:flex; justify-content:space-between; margin-top:24px; border-top:1px solid var(--line); padding-top:18px; flex-wrap:wrap; gap:8px">
            <div style="display:flex; gap:8px">
              <button type="button" class="small-button" id="prevScaleBtn">← Bài trước</button>
              <button type="button" class="small-button" id="nextScaleBtn">Bài tiếp theo →</button>
            </div>
            <button type="button" class="small-button" id="randomScaleBtn" style="color:#7c3aed; font-weight:700">Đổi cấp độ 🔀</button>
          </div>
        </div>
      </div>
    `;

    bindModeTabs();

    const selectEl = document.querySelector("#scaleChallengeSelect");
    const inputEl = document.querySelector("#scaleInput");
    const submitBtn = document.querySelector("#scaleSubmitBtn");
    const toggleHintBtn = document.querySelector("#scaleToggleHintBtn");
    const hintArea = document.querySelector("#scaleHintArea");
    const fbArea = document.querySelector("#scaleFeedbackArea");
    const svgStage = document.querySelector("#balanceSvgStage");

    selectEl?.addEventListener("change", e => {
      session.loadChallenge(Number(e.target.value));
      renderSingleScaleMode();
    });

    document.querySelector("#prevScaleBtn")?.addEventListener("click", () => {
      session.prevChallenge();
      renderSingleScaleMode();
    });

    document.querySelector("#nextScaleBtn")?.addEventListener("click", () => {
      session.nextChallenge();
      renderSingleScaleMode();
    });

    document.querySelector("#randomScaleBtn")?.addEventListener("click", () => {
      session.nextSmartChallenge();
      renderSingleScaleMode();
    });

    toggleHintBtn?.addEventListener("click", () => {
      if (hintArea) hintArea.style.display = hintArea.style.display === "none" ? "block" : "none";
    });

    const handleSubmit = async () => {
      const val = inputEl?.value;
      const res = session.checkAnswer(val);

      if (svgStage) svgStage.innerHTML = session.renderSvgMarkup();

      if (fbArea) {
        fbArea.style.display = "block";
        if (res.isCorrect) {
          fbArea.style.background = "#ecfdf5";
          fbArea.style.border = "1px solid #a7f3d0";
          fbArea.style.color = "#065f46";
          fbArea.innerHTML = `
            <strong>${esc(res.message)}</strong>
            <div style="margin-top:8px; font-weight:600">★ Cách giải: ${esc(res.solution)}</div>
            <div style="margin-top:14px; display:flex; gap:10px; align-items:center; flex-wrap:wrap">
              <button type="button" class="primary-button" id="solveNextScaleBtn" style="padding:8px 18px; font-size:0.92rem; background:#16a34a">
                Thử thách tiếp theo →
              </button>
              <button type="button" class="small-button" id="solveRandomScaleBtn" style="color:#7c3aed; font-weight:700">
                Đổi cấp độ khác 🔀
              </button>
            </div>
          `;

          document.querySelector("#solveNextScaleBtn")?.addEventListener("click", () => {
            session.nextChallenge();
            renderSingleScaleMode();
          });
          document.querySelector("#solveRandomScaleBtn")?.addEventListener("click", () => {
            session.nextSmartChallenge();
            renderSingleScaleMode();
          });

          if (!state.db.gameRecords) state.db.gameRecords = {};
          if (!state.db.gameRecords.balanceScale) {
            state.db.gameRecords.balanceScale = { stars: 0, completedChallenges: [] };
          }
          const rec = state.db.gameRecords.balanceScale;
          if (!Array.isArray(rec.completedChallenges)) rec.completedChallenges = [];
          if (!rec.completedChallenges.includes(ch.id)) {
            rec.completedChallenges.push(ch.id);
            rec.stars = (rec.stars || 0) + 1;
            // Adaptive Engine: ghi nhận kết quả Single Balance Scale
            recordGameOutcome(state, "balanceScale", { success: true, difficulty: ch.difficulty || 2 });
            const newBadges = checkAndAwardBadges(state);
            for (const b of newBadges) showBadgeCelebration(b);
            if (typeof saveLocal === "function") await saveLocal(true);
          }
        } else {
          fbArea.style.background = "#fffbeb";
          fbArea.style.border = "1px solid #fde68a";
          fbArea.style.color = "#92400e";
          fbArea.innerHTML = `
            <strong>${esc(res.message)}</strong>
            ${res.hint ? `<div style="margin-top:6px; font-size:0.9rem">${esc(res.hint)}</div>` : ""}
          `;
        }
      }
    };

    submitBtn?.addEventListener("click", handleSubmit);
    inputEl?.addEventListener("keydown", e => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleSubmit();
      }
    });
  }

  function bindModeTabs() {
    document.querySelectorAll(".mode-tab").forEach(tab => {
      tab.addEventListener("click", () => {
        const targetMode = tab.dataset.targetMode;
        if (targetMode && targetMode !== currentScaleMode) {
          currentScaleMode = targetMode;
          renderView();
        }
      });
    });
  }

  renderView();
}
