// js/render-tangram.js - Giao diện Xếp Hình Trí Uẩn Tangram Singapore GEP cho Bách
import { TangramSession, TANGRAM_PUZZLES, TANGRAM_PIECES_CONFIG, getPiecePolygonPoints, generateSilhouettePath } from "./tangram.js";
import { getDifficultyMeta } from "./render-games.js";
import { recordGameOutcome } from "./adaptive-engine.js";
import { checkAndAwardBadges, showBadgeCelebration } from "./badge-system.js";

let activeTangramSession = null;
const esc = str => String(str ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function renderTangramView({ state, appRoot, saveLocal, puzzleIndex = 0, params = {} } = {}) {
  const pIdx = params.puzzle ? parseInt(params.puzzle, 10) : puzzleIndex;
  
  if (!activeTangramSession || activeTangramSession.puzzleIndex !== pIdx) {
    activeTangramSession = new TangramSession({
      puzzleIndex: pIdx,
      onWin: async (result) => {
        if (!state.db) state.db = {};
        if (!state.db.gameRecords) state.db.gameRecords = {};
        if (!state.db.gameRecords.tangram) {
          state.db.gameRecords.tangram = { stars: 0, completedPuzzles: [] };
        }
        
        const tangram = state.db.gameRecords.tangram;
        if (!tangram.completedPuzzles.includes(result.puzzleId)) {
          tangram.completedPuzzles.push(result.puzzleId);
          tangram.stars = (tangram.stars || 0) + (activeTangramSession.currentPuzzle.difficulty || 2);
        }

        // Tự động thích ứng ZPD
        recordGameOutcome(state, "tangram", {
          success: true,
          difficulty: activeTangramSession.currentPuzzle.difficulty || 2
        });

        // Kiểm tra mở khóa huy chương
        const newlyUnlocked = checkAndAwardBadges(state);

        if (typeof saveLocal === "function") {
          await saveLocal(true);
        }

        // Render lại với trạng thái chiến thắng
        renderTangramView({ state, appRoot, saveLocal, puzzleIndex: activeTangramSession.puzzleIndex });

        // Nếu có huy chương mới, hiển thị popup vinh danh
        if (newlyUnlocked.length > 0) {
          setTimeout(() => showBadgeCelebration(newlyUnlocked[0]), 400);
        }
      },
      onStateChange: () => {
        updateSvgCanvas();
      }
    });
  }

  const session = activeTangramSession;
  const puzzle = session.currentPuzzle;
  const diffMeta = getDifficultyMeta(puzzle.difficulty);
  const tangramRecords = state?.db?.gameRecords?.tangram || { stars: 0, completedPuzzles: [] };
  const isCompleted = tangramRecords.completedPuzzles?.includes(puzzle.id);

  appRoot.innerHTML = `
    <div style="margin-bottom:20px; display:flex; gap:12px; align-items:center; flex-wrap:wrap">
      <a href="#games" class="text-button" style="display:inline-flex; align-items:center; gap:6px; font-weight:700">← Sảnh Trò Chơi</a>
      <span style="color:var(--line)">•</span>
      <span style="font-weight:600; color:var(--muted)">Xếp Hình Trí Uẩn Tangram · Singapore GEP</span>
    </div>

    <div class="tangram-container" id="tangramContainer">
      <!-- Topbar thông tin bài -->
      <div class="tangram-topbar">
        <div class="tangram-info">
          <div class="eyebrow" style="color:var(--primary); font-weight:800">
            BÀI ${session.puzzleIndex + 1} / ${TANGRAM_PUZZLES.length} · ${esc(puzzle.topic)}
          </div>
          <h2 style="margin:4px 0 8px; font-size:1.45rem">${esc(puzzle.name)}</h2>
          <div style="display:flex; align-items:center; gap:8px">
            <span class="difficulty-badge" style="background:${diffMeta.bg}; color:${diffMeta.color}; border:1px solid ${diffMeta.border}">
              ${diffMeta.stars} ${diffMeta.label}
            </span>
            ${isCompleted ? `<span style="font-size:0.85rem; font-weight:700; color:#16a34a">✅ Đã hoàn thành</span>` : ""}
          </div>
        </div>

        <div class="tangram-stats-box">
          <div class="stat-pill">
            <span>🎯 Nước đi:</span>
            <strong id="tangramMoves">${session.moveCount}</strong>
          </div>
          <div class="guide-mode-selector">
            <button type="button" class="small-button ${session.guideMode === "silhouette" ? "active" : ""}" id="modeSilhouetteBtn" title="Hình bóng chuẩn thi Olympic">
              🌑 Hình bóng
            </button>
            <button type="button" class="small-button ${session.guideMode === "outline" ? "active" : ""}" id="modeOutlineBtn" title="Hiển thị viền trợ giúp">
              🔍 Viền gợi ý
            </button>
          </div>
        </div>
      </div>

      <div class="tangram-desc-box">
        <p style="margin:0; font-size:0.95rem; color:var(--text)">${esc(puzzle.description)}</p>
      </div>

      <!-- Vùng chơi tương tác chính: Canvas SVG -->
      <div class="tangram-stage-wrapper">
        <div class="tangram-canvas-card">
          <svg viewBox="0 0 360 360" id="tangramSvg" class="tangram-svg-canvas" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="pieceShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#0f172a" flood-opacity="0.18" />
              </filter>
              <filter id="activeGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#f59e0b" flood-opacity="0.8" />
              </filter>
            </defs>

            <!-- Nền sàn gỗ/sân chơi -->
            <rect width="100%" height="100%" fill="#f8fafc" rx="16" />
            <rect x="20" y="20" width="320" height="320" fill="#f1f5f9" rx="12" stroke="#e2e8f0" stroke-width="1.5" />
            
            <!-- Hình bóng mục tiêu Silhouette -->
            <g id="tangramSilhouetteGroup">
              <path d="${puzzle.silhouettePath || generateSilhouettePath(puzzle.targetLayout)}" fill="${session.guideMode === 'outline' ? '#e2e8f0' : '#1e293b'}" stroke="${session.guideMode === 'outline' ? '#94a3b8' : 'none'}" stroke-width="2" stroke-dasharray="${session.guideMode === 'outline' ? '4,4' : 'none'}" />
            </g>

            <!-- Các mảnh ghép Tangram -->
            <g id="tangramPiecesGroup"></g>
          </svg>
        </div>

        <!-- Bảng điều khiển mảnh ghép iPad -->
        <div class="tangram-controls-card">
          <div class="selected-piece-header">
            <span style="font-size:0.85rem; font-weight:700; color:var(--muted)">Mảnh đang chọn:</span>
            <strong id="selectedPieceName" style="color:var(--primary); font-size:1.05rem">
              ${TANGRAM_PIECES_CONFIG[session.selectedPieceId]?.name || "Chưa chọn"}
            </strong>
          </div>

          <div class="tangram-action-grid">
            <button type="button" class="primary-button tg-btn" id="rotateLeftBtn" title="Xoay trái 45 độ">
              ↺ Xoay Trái (45°)
            </button>
            <button type="button" class="primary-button tg-btn" id="rotateRightBtn" title="Xoay phải 45 độ">
              ↻ Xoay Phải (45°)
            </button>
            <button type="button" class="secondary-button tg-btn" id="flipPieceBtn" title="Lật hình bình hành" ${session.pieces[session.selectedPieceId]?.type !== "parallelogram" ? "disabled style='opacity:0.5; cursor:not-allowed'" : ""}>
              ⇄ Lật Mặt (Mirror)
            </button>
            <button type="button" class="secondary-button tg-btn" id="hintSnapBtn" style="background:#fffbeb; color:#b45309; border-color:#fde68a" title="Gợi ý ghép đúng mảnh này">
              💡 Gợi Ý Mảnh Này
            </button>
          </div>

          <div style="margin-top:16px; display:flex; gap:10px; justify-content:space-between">
            <button type="button" class="small-button" id="prevPuzzleBtn">← Bài trước</button>
            <button type="button" class="small-button" id="resetTangramBtn" style="color:#dc2626">🔄 Xếp lại</button>
            <button type="button" class="small-button" id="nextPuzzleBtn">Bài sau →</button>
          </div>

          <div class="tangram-tip-box">
            💡 <strong>Mẹo iPad:</strong> Chạm trực tiếp vào mảnh ghép trên sân để chọn hoặc kéo di chuyển. Dùng nút xoay để điều chỉnh góc 45°!
          </div>
        </div>
      </div>

      <!-- Màn hình chiến thắng khi ghép khớp hoàn hảo -->
      ${session.isSolved ? `
        <div class="tangram-win-banner animate-pop-in">
          <div style="font-size:2.4rem; margin-bottom:8px">🎉 🏆 🌟</div>
          <h3 style="margin:0 0 6px; font-size:1.5rem; color:#15803d">Xuất Sắc! Bách Đã Ghép Hoàn Hảo!</h3>
          <p style="margin:0 0 16px; color:#166534">
            Chúc mừng Bách đã chinh phục thành công <strong>${esc(puzzle.name)}</strong> (${diffMeta.stars}). Khả năng thị giác và xoay vật thể không gian đạt chuẩn GEP Singapore!
          </p>
          <div style="display:flex; justify-content:center; gap:12px; flex-wrap:wrap">
            <button type="button" class="primary-button" id="winNextBtn" style="padding:12px 24px; font-size:1.05rem; background:#16a34a">
              Thử thách tiếp theo →
            </button>
            <a href="#games" class="secondary-button" style="padding:12px 20px; font-size:1rem">
              Về Sảnh Trò Chơi
            </a>
          </div>
        </div>
      ` : ""}
    </div>
  `;

  // Render các mảnh ghép ban đầu
  updateSvgCanvas();

  // Đăng ký sự kiện nút bấm
  setupEventHandlers(session, appRoot, state, saveLocal);
}

function updateSvgCanvas() {
  const session = activeTangramSession;
  if (!session) return;

  const piecesGroup = document.querySelector("#tangramPiecesGroup");
  const movesEl = document.querySelector("#tangramMoves");
  const selectedNameEl = document.querySelector("#selectedPieceName");
  const flipBtn = document.querySelector("#flipPieceBtn");

  if (movesEl) movesEl.textContent = session.moveCount;
  if (selectedNameEl) {
    selectedNameEl.textContent = TANGRAM_PIECES_CONFIG[session.selectedPieceId]?.name || "Chưa chọn";
  }
  if (flipBtn) {
    const isPara = session.pieces[session.selectedPieceId]?.type === "parallelogram";
    flipBtn.disabled = !isPara;
    flipBtn.style.opacity = isPara ? "1" : "0.5";
    flipBtn.style.cursor = isPara ? "pointer" : "not-allowed";
  }

  if (!piecesGroup) return;

  let piecesHtml = "";
  for (const [id, piece] of Object.entries(session.pieces)) {
    const isSelected = id === session.selectedPieceId;
    const cfg = TANGRAM_PIECES_CONFIG[id] || {};
    const pts = getPiecePolygonPoints(piece.type);
    const flipScale = piece.flipped ? "scale(-1, 1)" : "scale(1, 1)";
    const transform = `translate(${piece.x}, ${piece.y}) rotate(${piece.rot}) ${flipScale}`;

    piecesHtml += `
      <g class="tangram-piece-g" data-piece-id="${id}" transform="${transform}" style="cursor:grab; transition:stroke 0.15s ease">
        <polygon 
          points="${pts}" 
          fill="${cfg.color || '#3b82f6'}" 
          stroke="${isSelected ? '#ffffff' : (cfg.stroke || '#1d4ed8')}" 
          stroke-width="${isSelected ? 3.5 : 1.5}" 
          stroke-linejoin="round"
          filter="${isSelected ? 'url(#activeGlow)' : 'url(#pieceShadow)'}"
        />
        <!-- Vòng chấm tròn tâm xoay hỗ trợ chạm -->
        <circle cx="0" cy="0" r="${isSelected ? 5 : 3}" fill="${isSelected ? '#ffffff' : 'rgba(255,255,255,0.6)'}" />
      </g>
    `;
  }

  piecesGroup.innerHTML = piecesHtml;
}

function setupEventHandlers(session, appRoot, state, saveLocal) {
  // 1. Chuyển chế độ hình bóng
  document.querySelector("#modeSilhouetteBtn")?.addEventListener("click", () => {
    session.setGuideMode("silhouette");
    renderTangramView({ state, appRoot, saveLocal, puzzleIndex: session.puzzleIndex });
  });

  document.querySelector("#modeOutlineBtn")?.addEventListener("click", () => {
    session.setGuideMode("outline");
    renderTangramView({ state, appRoot, saveLocal, puzzleIndex: session.puzzleIndex });
  });

  // 2. Xoay và lật mảnh
  document.querySelector("#rotateLeftBtn")?.addEventListener("click", () => {
    session.rotateSelected(-45);
  });

  document.querySelector("#rotateRightBtn")?.addEventListener("click", () => {
    session.rotateSelected(45);
  });

  document.querySelector("#flipPieceBtn")?.addEventListener("click", () => {
    session.flipSelected();
  });

  document.querySelector("#hintSnapBtn")?.addEventListener("click", () => {
    session.hintSnapPiece(session.selectedPieceId);
  });

  // 3. Điều hướng bài
  document.querySelector("#prevPuzzleBtn")?.addEventListener("click", () => {
    session.prevPuzzle();
    renderTangramView({ state, appRoot, saveLocal, puzzleIndex: session.puzzleIndex });
  });

  document.querySelector("#nextPuzzleBtn")?.addEventListener("click", () => {
    session.nextPuzzle();
    renderTangramView({ state, appRoot, saveLocal, puzzleIndex: session.puzzleIndex });
  });

  document.querySelector("#resetTangramBtn")?.addEventListener("click", () => {
    session.reset();
  });

  document.querySelector("#winNextBtn")?.addEventListener("click", () => {
    session.nextPuzzle();
    renderTangramView({ state, appRoot, saveLocal, puzzleIndex: session.puzzleIndex });
  });

  // 4. Tương tác Kéo Thả (Pointer Drag) trên SVG Canvas
  const svg = document.querySelector("#tangramSvg");
  if (!svg) return;

  let activeDragPiece = null;
  let dragStartPt = { x: 0, y: 0 };
  let pieceInitialPos = { x: 0, y: 0 };

  const getSvgCoordinates = (e) => {
    const pt = svg.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    const transformed = pt.matrixTransform(svg.getScreenCTM().inverse());
    return { x: transformed.x, y: transformed.y };
  };

  svg.addEventListener("pointerdown", (e) => {
    const pieceG = e.target.closest(".tangram-piece-g");
    if (!pieceG) return;

    const pieceId = pieceG.dataset.pieceId;
    if (pieceId && session.pieces[pieceId]) {
      session.selectPiece(pieceId);
      activeDragPiece = pieceId;
      const svgPt = getSvgCoordinates(e);
      dragStartPt = svgPt;
      pieceInitialPos = { x: session.pieces[pieceId].x, y: session.pieces[pieceId].y };
      pieceG.setPointerCapture?.(e.pointerId);
    }
  });

  svg.addEventListener("pointermove", (e) => {
    if (!activeDragPiece || session.isSolved) return;
    const curPt = getSvgCoordinates(e);
    const dx = curPt.x - dragStartPt.x;
    const dy = curPt.y - dragStartPt.y;
    session.movePiece(activeDragPiece, pieceInitialPos.x + dx, pieceInitialPos.y + dy);
  });

  const endDrag = (e) => {
    if (activeDragPiece) {
      activeDragPiece = null;
    }
  };

  svg.addEventListener("pointerup", endDrag);
  svg.addEventListener("pointercancel", endDrag);
}
