// 学習および計画ビューレンダリングモジュール（DI対応）
import {
  escapeHtml as defaultEscapeHtml,
  splitInlineItems as defaultSplitInlineItems,
  renderInstructionSteps as defaultRenderInstructionSteps,
  allWeeks as defaultAllWeeks,
  doneCount as defaultDoneCount,
  percent as defaultPercent
} from "./core.js";

import {
  getLessonDefaultSeconds as defaultGetLessonDefaultSeconds,
  formatTimerSeconds as defaultFormatTimerSeconds,
  computeCurrentTimerState as defaultComputeCurrentTimerState,
  lessonOrdinalFromKey as defaultLessonOrdinalFromKey
} from "../data/data-core.js";

// SVG視覚モデルのレンダリング関数
export function renderSvgVisual(visual) {
  if (!visual || !visual.type) return "";
  switch (visual.type) {
    case "sum-diff": {
      const { larger = 36, smaller = 28, diff = 8, total = 64, labelA = "Số lớn", labelB = "Số bé" } = visual;
      return `<div class="lesson-visual-card" role="img" aria-label="Mô hình Bar Model Tổng - Hiệu">
        <div class="lesson-visual-header"><span class="visual-badge">Mô hình Bar Model Singapore</span><b>Toán Tổng – Hiệu</b></div>
        <svg viewBox="0 0 440 135" class="lesson-svg-model" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="barGradA" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#60a5fa"/>
            </linearGradient>
            <linearGradient id="barGradB" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#10b981"/><stop offset="100%" stop-color="#34d399"/>
            </linearGradient>
          </defs>
          <text x="15" y="42" font-size="13" font-weight="600" fill="#334155">${defaultEscapeHtml(labelA)}</text>
          <rect x="85" y="24" width="220" height="28" rx="6" fill="url(#barGradA)"/>
          <text x="195" y="42" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">${larger}</text>
          <text x="15" y="92" font-size="13" font-weight="600" fill="#334155">${defaultEscapeHtml(labelB)}</text>
          <rect x="85" y="74" width="160" height="28" rx="6" fill="url(#barGradB)"/>
          <text x="165" y="92" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">${smaller}</text>
          <line x1="245" y1="20" x2="245" y2="106" stroke="#94a3b8" stroke-dasharray="4" stroke-width="1.5"/>
          <rect x="245" y="74" width="60" height="28" rx="4" fill="none" stroke="#f59e0b" stroke-dasharray="3" stroke-width="1.5"/>
          <text x="275" y="92" font-size="11" font-weight="700" fill="#d97706" text-anchor="middle">Hiệu: ${diff}</text>
          <path d="M 315 24 Q 330 24 330 63 Q 330 65 340 65 Q 330 65 330 67 Q 330 102 315 102" fill="none" stroke="#6366f1" stroke-width="2"/>
          <text x="350" y="69" font-size="13" font-weight="800" fill="#4f46e5">Tổng: ${total}</text>
        </svg>
      </div>`;
    }
    case "part-whole": {
      const { total = 120, parts = 5, filledParts = 3, unitLabel = "1 phần", wholeLabel = "Dung tích" } = visual;
      const barWidth = 260;
      const cellWidth = barWidth / parts;
      let cells = "";
      for (let i = 0; i < parts; i++) {
        const isFilled = i < filledParts;
        cells += `<rect x="${85 + i * cellWidth}" y="35" width="${cellWidth - 3}" height="32" rx="4" fill="${isFilled ? '#3b82f6' : '#e2e8f0'}" stroke="#94a3b8" stroke-width="1"/>`;
        if (isFilled) {
          cells += `<text x="${85 + i * cellWidth + cellWidth / 2}" y="55" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">1P</text>`;
        }
      }
      return `<div class="lesson-visual-card" role="img" aria-label="Mô hình Bar Model Phần - Toàn thể">
        <div class="lesson-visual-header"><span class="visual-badge">Mô hình Bar Model Singapore</span><b>Phần – Toàn thể (Tỉ số)</b></div>
        <svg viewBox="0 0 440 120" class="lesson-svg-model" xmlns="http://www.w3.org/2000/svg">
          <text x="15" y="55" font-size="13" font-weight="600" fill="#334155">${defaultEscapeHtml(wholeLabel)}</text>
          ${cells}
          <path d="M 85 75 Q 85 85 ${85 + (filledParts * cellWidth) / 2} 85 Q ${85 + filledParts * cellWidth} 85 ${85 + filledParts * cellWidth} 75" fill="none" stroke="#2563eb" stroke-width="2"/>
          <text x="${85 + (filledParts * cellWidth) / 2}" y="102" font-size="12" font-weight="700" fill="#2563eb" text-anchor="middle">${filledParts}/${parts} = ${total * (filledParts / parts)}</text>
          <text x="360" y="55" font-size="13" font-weight="800" fill="#059669">Tổng = ${total}</text>
        </svg>
      </div>`;
    }
    case "fraction": {
      const { numerator = 3, denominator = 8, label = "Phân số" } = visual;
      const barWidth = 280;
      const cellWidth = barWidth / denominator;
      let cells = "";
      for (let i = 0; i < denominator; i++) {
        const isFilled = i < numerator;
        cells += `<rect x="${70 + i * cellWidth}" y="25" width="${cellWidth - 2}" height="36" rx="4" fill="${isFilled ? '#3b82f6' : '#f8fafc'}" stroke="#3b82f6" stroke-width="1.5"/>`;
      }
      return `<div class="lesson-visual-card" role="img" aria-label="Hình ảnh phân số trực quan">
        <div class="lesson-visual-header"><span class="visual-badge">Phân số trực quan</span><b>${defaultEscapeHtml(label)}</b></div>
        <svg viewBox="0 0 440 90" class="lesson-svg-model" xmlns="http://www.w3.org/2000/svg">
          <text x="15" y="48" font-size="13" font-weight="600" fill="#334155">${defaultEscapeHtml(label)}</text>
          ${cells}
          <text x="365" y="48" font-size="16" font-weight="800" fill="#1d4ed8">${numerator}/${denominator}</text>
        </svg>
      </div>`;
    }
    case "grid-area": {
      const { length = 9, width = 6, area = 54, unit = "cm" } = visual;
      return `<div class="lesson-visual-card" role="img" aria-label="Mô hình lưới diện tích">
        <div class="lesson-visual-header"><span class="visual-badge">Hình học trực quan</span><b>Lưới diện tích và chu vi</b></div>
        <svg viewBox="0 0 440 135" class="lesson-svg-model" xmlns="http://www.w3.org/2000/svg">
          <rect x="90" y="25" width="220" height="75" rx="4" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
          <line x1="163" y1="25" x2="163" y2="100" stroke="#93c5fd" stroke-dasharray="3" stroke-width="1"/>
          <line x1="236" y1="25" x2="236" y2="100" stroke="#93c5fd" stroke-dasharray="3" stroke-width="1"/>
          <line x1="90" y1="62" x2="310" y2="62" stroke="#93c5fd" stroke-dasharray="3" stroke-width="1"/>
          <text x="200" y="18" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">Chiều dài: ${length} ${unit}</text>
          <text x="75" y="66" font-size="12" font-weight="700" fill="#1e40af" text-anchor="end">Rộng: ${width} ${unit}</text>
          <text x="200" y="67" font-size="14" font-weight="800" fill="#1d4ed8" text-anchor="middle">S = ${area} ${unit}²</text>
        </svg>
      </div>`;
    }
    case "sequence": {
      const { sequence = [2, 6, 12, 20, 30, 42], steps = ["+4", "+6", "+8", "+10", "+12"] } = visual;
      let nodes = "";
      const count = sequence.length;
      const startX = 40;
      const gap = 340 / (count - 1);
      for (let i = 0; i < count; i++) {
        const x = startX + i * gap;
        nodes += `<circle cx="${x}" cy="50" r="18" fill="#3b82f6"/>`;
        nodes += `<text x="${x}" y="55" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">${sequence[i]}</text>`;
        if (i < count - 1 && steps[i]) {
          const nextX = startX + (i + 1) * gap;
          const midX = (x + nextX) / 2;
          nodes += `<path d="M ${x + 12} 35 Q ${midX} 15 ${nextX - 12} 35" fill="none" stroke="#f59e0b" stroke-width="2"/>`;
          nodes += `<text x="${midX}" y="18" font-size="11" font-weight="800" fill="#d97706" text-anchor="middle">${steps[i]}</text>`;
        }
      }
      return `<div class="lesson-visual-card" role="img" aria-label="Mô hình bước nhảy quy luật dãy số">
        <div class="lesson-visual-header"><span class="visual-badge">Quy luật số học</span><b>Trục bước nhảy dãy số</b></div>
        <svg viewBox="0 0 440 90" class="lesson-svg-model" xmlns="http://www.w3.org/2000/svg">
          ${nodes}
        </svg>
      </div>`;
    }
    default:
      return "";
  }
}

// ヒント解析関数
export function parseHintSteps(rawHint = "") {
  if (!rawHint) return [];
  return String(rawHint)
    .split(/\r?\n+/)
    .map(line => line.trim())
    .filter(Boolean);
}

// ヒントプレフィックス除去関数
export function stripHintPrefix(step = "") {
  let text = String(step).trim();
  const prefixRegex = /^(?:(?:gợi\s*ý|bước|mẹo\s*nhỏ)\s*\d*(?:\s*[:.-]\s*|\s+)|\(?\d+\)(?:\s*[:.-]\s*|\s*)|\d+\.(?:\s+|$))/i;
  while (prefixRegex.test(text)) {
    const next = text.replace(prefixRegex, "").trim();
    if (!next || next === text) break;
    text = next;
  }
  return text;
}

// 依存関係を明示的に注入してレンダラー関数群を生成するファクトリ
export function createRenderViews(dependencies = {}) {
  if (!dependencies || !dependencies.state) {
    throw new Error("createRenderViews requires 'state' dependency");
  }
  if (!dependencies.curriculum) {
    throw new Error("createRenderViews requires 'curriculum' dependency");
  }
  const state = dependencies.state;
  const curriculum = dependencies.curriculum;
  const escapeHtml = dependencies.escapeHtml || defaultEscapeHtml;
  const splitInlineItems = dependencies.splitInlineItems || defaultSplitInlineItems;
  const renderInstructionSteps = dependencies.renderInstructionSteps || defaultRenderInstructionSteps;
  const allWeeks = dependencies.allWeeks || defaultAllWeeks;
  const doneCount = dependencies.doneCount || defaultDoneCount;
  const percent = dependencies.percent || defaultPercent;
  const lessonOrdinalFromKey = dependencies.lessonOrdinalFromKey || defaultLessonOrdinalFromKey;
  const getLessonDefaultSeconds = dependencies.getLessonDefaultSeconds || defaultGetLessonDefaultSeconds;
  const formatTimerSeconds = dependencies.formatTimerSeconds || defaultFormatTimerSeconds;
  const computeCurrentTimerState = dependencies.computeCurrentTimerState || defaultComputeCurrentTimerState;
  const lessonTimerManager = dependencies.lessonTimerManager || null;
  const renderMentalMathFoundation = dependencies.renderMentalMathFoundation || (() => "");

  function getAppRoot() {
    if (dependencies.app) return dependencies.app;
    if (typeof document !== "undefined") return document.querySelector("#app");
    return null;
  }

  function getDocumentObj() {
    if (dependencies.document) return dependencies.document;
    if (typeof document !== "undefined") return document;
    return null;
  }

  function progressBar(value) {
    return `<div class="progress-track"><div class="progress-fill" style="width:${value}%"></div></div>`;
  }

  function phaseChips() {
    const phases = curriculum?.phases || [];
    return phases.map(p => `
    <button class="phase-chip ${state?.phase === p.id ? "active" : ""}" data-phase="${p.id}">
      <b><i class="chip-dot" style="background:var(--${p.color})"></i>${p.id} · ${p.title}</b>
      <small>Tuần ${p.weeks}</small>
    </button>
  `).join("");
  }

  function pageFrame(title, eyebrow, intro, content) {
    return `
    <div class="section-head">
      <div>
        <div class="eyebrow">${eyebrow}</div>
        <h2>${title}</h2>
      </div>
      ${intro ? `<div class="week-focus">${intro}</div>` : ""}
    </div>
    ${content}
  `;
  }

  function adaptivePlan(subject) {
    if (typeof dependencies.adaptivePlan === "function") {
      return dependencies.adaptivePlan(subject);
    }
    const fallback = { level: 0, extraCount: 0, reason: "", lastDay: 0 };
    const plan = state?.db?.adaptive?.[subject];
    return plan && typeof plan === "object" ? { ...fallback, ...plan } : fallback;
  }

  function isAfterAdaptiveSource(plan, subject, weekId, dayIndex) {
    if (typeof dependencies.isAfterAdaptiveSource === "function") {
      return dependencies.isAfterAdaptiveSource(plan, subject, weekId, dayIndex);
    }
    if (!plan.sourceLessonKey) return dayIndex > Number(plan.lastDay || 0);
    const sourceOrdinal = lessonOrdinalFromKey(plan.sourceLessonKey);
    const candidateOrdinal = lessonOrdinalFromKey(`${weekId}-${subject}-${dayIndex + 1}`);
    return sourceOrdinal !== null && candidateOrdinal !== null && candidateOrdinal > sourceOrdinal;
  }

  function adaptiveNextStep(subject, weekId, dayIndex) {
    if (typeof dependencies.adaptiveNextStep === "function") {
      return dependencies.adaptiveNextStep(subject, weekId, dayIndex);
    }
    const plan = adaptivePlan(subject);
    if (!plan.level || !isAfterAdaptiveSource(plan, subject, weekId, dayIndex)) return "";
    const extraCount = Math.max(1, Math.min(3, Number(plan.extraCount) || 1));
    return plan.reason === "too_easy"
      ? `Thêm ${extraCount} câu biến thể và 1 câu khó hơn vì Bách hoàn thành nhanh/đề còn nhẹ.`
      : `Thêm ${extraCount} câu luyện có biến thể để kiểm tra độ chắc trước khi tăng tiếp.`;
  }

  function lessonDifficulty(subject, phaseId, weekId, dayIndex) {
    if (typeof dependencies.lessonDifficulty === "function") {
      return dependencies.lessonDifficulty(subject, phaseId, weekId, dayIndex);
    }
    const baseLevel = {
      math: { P1: 3, P2: 3, P3: 3, P4: 4, P5: 4, P6: 5 },
      vietnamese: { P1: 2, P2: 3, P3: 3, P4: 3, P5: 4, P6: 4 }
    }[subject]?.[phaseId] || 3;
    const dayBoost = [0, 0, 0, 1, 0, 1][dayIndex] || 0;
    const plan = adaptivePlan(subject);
    const learnerAdjustment = plan.reason === "too_easy" && isAfterAdaptiveSource(plan, subject, weekId, dayIndex)
      ? Math.min(1, plan.level)
      : plan.reason === "hard" ? -1 : 0;
    const level = Math.max(1, Math.min(5, baseLevel + dayBoost + learnerAdjustment));
    const labels = ["", "Củng cố có chọn lọc", "Nền vững", "Vừa sức", "Khó vừa", "Thử thách cao"];
    const note = subject === "math"
      ? level <= 2
        ? "Buổi này không hề là học lại từ đầu: mục tiêu là làm gọn, đúng và nhanh hơn ở kỹ năng nền trước khi sang bài chính."
        : level === 3
          ? "Phù hợp với Bách hiện tại: có bài lõi và một biến thể, cần nói được chiến lược chứ không chỉ ra đáp số."
          : level === 4
            ? "Khó vừa cho học sinh giỏi lớp 4: cần chọn mô hình hoặc chiến lược; không cần hoàn thành mọi câu nếu đã hết 25 phút."
            : "Mức thử thách cao: ưu tiên một lời giải chắc và một cách kiểm tra độc lập hơn là làm thật nhiều."
      : level <= 2
        ? "Mục tiêu là làm chắc câu, ý và mạch trước; không phải viết nhiều cho đủ số câu."
        : level === 3
          ? "Phù hợp với Bách: có yêu cầu riêng về ý, chi tiết và cách diễn đạt nhưng vẫn giữ đúng độ tuổi."
          : level === 4
            ? "Khó vừa: Bách cần tự chọn chi tiết, tổ chức ý và tự biên tập; Gemini chỉ gợi ý từng nấc."
            : "Mức thử thách cao: ưu tiên một đoạn có giọng riêng, mạch rõ và tự sửa được hơn là dùng từ hoa mỹ.";
    return { level, label: labels[level], note };
  }

  function renderDriveBar() {
    if (typeof dependencies.renderDriveBar === "function") {
      return dependencies.renderDriveBar();
    }
    const isConnected = Boolean(state?.drive?.token);
    const isExpired = Boolean(state?.drive?.hasSessionExpired);
    return `
    <div class="drive-sync-bar">
      <div class="drive-status">
        <span class="sync-dot ${isConnected ? "online" : isExpired ? "expired" : ""}"></span>
        <span class="sync-text">${escapeHtml(state?.drive?.syncStatus || "")}</span>
        ${state?.drive?.userEmail ? `<span class="auth-status-pill signed-in">${escapeHtml(state.drive.userEmail)}</span>` : ""}
        ${state?.drive?.lastSyncedAt ? `<small>(${state.drive.lastSyncedAt})</small>` : ""}
      </div>
      <div class="drive-actions">
        ${isConnected ? `
          <button class="small-button sync-now-btn" id="syncDriveBtn" ${state?.drive?.isSyncing ? "disabled" : ""}>
            ${state?.drive?.isSyncing ? "Đang đồng bộ…" : "Đồng bộ ngay"}
          </button>
          <button class="text-button" id="logoutDriveBtn">Đăng xuất Drive</button>
        ` : `
          <button class="small-button connect-drive-btn" id="loginDriveBtn">
            ${isExpired ? "Kết nối lại Google Drive" : "Kết nối Google Drive"}
          </button>
        `}
      </div>
    </div>
  `;
  }

  function renderHome() {
    const weeks = allWeeks();
    const current = weeks.find(w => !state?.db?.progress?.[w.id]?.week) || weeks[0];
    const app = getAppRoot();
    if (!app) return "";
    app.innerHTML = `
    ${renderDriveBar()}
    <section class="hero" id="home">
      <div>
        <div class="eyebrow">CHƯƠNG TRÌNH CÁ NHÂN HÓA · 2026–2027</div>
        <h1>Học để <em>nghĩ rõ</em>,<br>viết để <em>nói mình.</em></h1>
        <p>Một lộ trình 36 tuần cho Bách: chắc nền lớp 4, tiến dần tới bài toán Olympic và những bài văn rõ ràng, có giọng riêng — vẫn hồn nhiên đúng tuổi.</p>
      </div>
      <div class="hero-note">
        <div class="eyebrow">TUẦN ĐANG HỌC · ${String(current.number).padStart(2, "0")}</div>
        <h3>${current.phase.title}</h3>
        <p>${current.phase.focus}</p>
        <button class="text-button" style="color:#ffb09f" data-go="plan">Mở lộ trình →</button>
      </div>
    </section>
    <div class="stats-grid">
      <div class="stat-card"><span class="eyebrow">TIẾN ĐỘ CHUNG</span><span class="number">${percent()}%</span>${progressBar(percent())}</div>
      <div class="stat-card"><span class="eyebrow">TOÁN</span><span class="number">${doneCount("math")}<small>/36 tuần</small></span>${progressBar(percent("math"))}</div>
      <div class="stat-card"><span class="eyebrow">VĂN</span><span class="number">${doneCount("vietnamese")}<small>/36 tuần</small></span>${progressBar(percent("vietnamese"))}</div>
      <div class="stat-card"><span class="eyebrow">NHỊP HỌC</span><span class="number">25′</span><small>Mỗi môn / ngày</small></div>
    </div>
    ${pageFrame(
      "Hai đường ray, một người học",
      "BẢN ĐỒ HỌC TẬP",
      "Mỗi tuần chỉ cần tiến một bước có ý thức.",
      `<div class="subject-grid">
        <a href="#math" class="subject-card math">
          <div class="eyebrow">01 · TOÁN</div>
          <h3>Từ phép tính<br>đến chiến lược.</h3>
          <p>Số học, hình học, mô hình hóa và tư duy Olympic qua 5 bậc thử thách.</p>
          <div class="subject-meta"><span>${percent("math")}% đã hoàn thành</span>${progressBar(percent("math"))}</div>
        </a>
        <a href="#vietnamese" class="subject-card lang">
          <div class="eyebrow">02 · TIẾNG VIỆT</div>
          <h3>Viết rõ ràng,<br>kể chuyện có hồn.</h3>
          <p>Đọc sâu, nói mạch lạc, viết nhiều bản nháp và giữ giọng văn đúng tuổi.</p>
          <div class="subject-meta"><span>${percent("vietnamese")}% đã hoàn thành</span>${progressBar(percent("vietnamese"))}</div>
        </a>
      </div>`
    )}
    ${pageFrame(
      "Nếp học mỗi tuần",
      "NHỊP 6 + 1",
      "Không học dồn; học đều và có ngày nghỉ.",
      `<div class="panel"><div class="phase-strip">${curriculum?.meta?.cadence?.map(([day, task]) => `<div class="phase-chip" style="min-width:130px"><b>${day}</b><small>${task}</small></div>`).join("") || ""}</div></div>`
    )}
    ${pageFrame(
      curriculum?.meta?.bridge?.title || "",
      "ĐIỂM XUẤT PHÁT",
      "Ôn nền có chủ đích, không gắn nhãn ‘mất gốc’.",
      `<div class="panel bridge-panel"><p class="week-focus">${curriculum?.meta?.bridge?.note || ""}</p><div class="guide-grid"><div><div class="eyebrow">TOÁN</div><ul class="bridge-list">${curriculum?.meta?.bridge?.math?.map(x => `<li>${x}</li>`).join("") || ""}</ul></div><div><div class="eyebrow">TIẾNG VIỆT</div><ul class="bridge-list">${curriculum?.meta?.bridge?.vietnamese?.map(x => `<li>${x}</li>`).join("") || ""}</ul></div></div></div>`
    )}
  `;
    return app.innerHTML;
  }

  function renderPlan() {
    let weeks = allWeeks().filter(w => state?.phase === "all" || w.phase.id === state?.phase);
    if (state?.filter === "open") weeks = weeks.filter(w => !state?.db?.progress?.[w.id]?.week);
    const app = getAppRoot();
    const documentObj = getDocumentObj();
    if (!app) return "";
    app.innerHTML = `
    ${renderDriveBar()}
    ${pageFrame(
      "Khu vực phụ huynh",
      "LỘ TRÌNH · TIẾN ĐỘ · GHI CHÚ",
      "Bách chỉ cần vào Toán hoặc Văn để học. Phần này dành cho người lớn xem tiến độ, mục tiêu tuần và ghi chú.",
      `<div class="phase-strip">${phaseChips()}<button class="phase-chip ${state?.phase === "all" ? "active" : ""}" data-phase="all"><b>Tất cả</b><small>36 tuần</small></button></div>
      <div class="plan-toolbar">
        <button class="filter-button ${state?.filter === "all" ? "active" : ""}" data-filter="all">Tất cả tuần</button>
        <button class="filter-button ${state?.filter === "open" ? "active" : ""}" data-filter="open">Chưa hoàn thành</button>
        <button class="text-button" data-reset>Đặt lại tiến độ</button>
      </div>
      <div class="week-list">${weeks.map(weekCard).join("") || `<div class="empty">Không còn tuần nào trong bộ lọc này.</div>`}</div>`
    )}
  `;

    // XSS SAFE NOTE POPULATION: Gán giá trị note bằng thuộc tính DOM textarea.value
    if (documentObj) {
      weeks.forEach(w => {
        if (state?.openWeek === w.id) {
          const ta = documentObj.querySelector(`#note_${w.id}`);
          if (ta) {
            ta.value = state?.db?.notes?.[w.id] || "";
          }
        }
      });
    }
    return app.innerHTML;
  }

  function weekCard(w) {
    const status = state?.db?.progress?.[w.id] || {};
    const open = state?.openWeek === w.id;
    return `
    <article class="week-card">
      <div class="week-main">
        <div class="week-no">TUẦN<br><strong>${String(w.number).padStart(2, "0")}</strong></div>
        <button class="text-button" data-toggle="${w.id}" style="text-align:left">
          <div class="week-title">${w.phase.title}</div>
          <div class="week-focus">${w.phase.focus}</div>
        </button>
        <button class="check-button ${status.week ? "done" : ""}" data-done="${w.id}" title="Đánh dấu tuần hoàn thành">${status.week ? "✓" : ""}</button>
      </div>
      ${open ? `
        <div class="week-details">
          <div class="detail-block math-detail">
            <h4>Toán · mục tiêu tuần</h4>
            ${renderLessonPlan(w.math.lesson, "math")}
            ${renderParentLessonLauncher(w.math, "math", w.id, w.number)}
          </div>
          <div class="detail-block lang-detail">
            <h4>Văn · mục tiêu tuần</h4>
            ${renderLessonPlan(w.vietnamese.lesson, "vietnamese")}
            ${renderParentLessonLauncher(w.vietnamese, "vietnamese", w.id, w.number)}
          </div>
          <div class="detail-block week-note-block" style="grid-column: 1 / -1;">
            <div class="note-head">
              <h4>Ghi chú của Bách & Phụ huynh tuần ${w.number}</h4>
              <button class="voice-button" data-voice-for="#note_${w.id}" title="Nói để ghi chú">🎤 Nói</button>
            </div>
            <!-- Textarea rỗng để gán an toàn bằng DOM, chống XSS triệt để -->
            <textarea id="note_${w.id}" class="note-input" rows="2" placeholder="Ghi lại bài đã làm tốt, lỗi cần nhớ hoặc bài tập dở dang…"></textarea>
            <div style="display:flex; justify-content:flex-end; margin-top:6px;">
              <button class="small-button" data-save-note="${w.id}">Lưu ghi chú</button>
            </div>
          </div>
        </div>
      ` : ""}
    </article>
  `;
  }

  function renderLessonPlan(lesson, subject) {
    if (!lesson) return "<p>Chưa có lesson plan cho tuần này.</p>";
    const fields = curriculum?.lessonFields || [];
    return `<div class="lesson-steps ${subject === "math" ? "lesson-math" : "lesson-vietnamese"}">
    ${fields.map(([key, label]) => `
      <div class="lesson-step">
        <span class="lesson-step-label">${escapeHtml(label)}</span>
        <p>${escapeHtml(lesson[key] || "")}</p>
      </div>
    `).join("")}
  </div>`;
  }

  function renderParentLessonLauncher(item, subject, weekId, weekNumber) {
    if (!item?.dailyPlan?.length) return "";
    const isMath = subject === "math";
    const subjectName = isMath ? "Toán" : "Tiếng Việt";
    return `<div class="parent-lesson-launcher ${subject}-parent-launcher" data-parent-launcher="${subject}-${weekId}">
    <div class="parent-launcher-label">👁️ Phụ huynh xem trước bài học ${subjectName} (Tuần ${weekNumber}):</div>
    <div class="parent-launcher-items">
      ${item.dailyPlan.map((day, dayIndex) => {
        const encodedDay = encodeURIComponent(day.day);
        return `<a class="parent-launcher-btn" href="#${subject}?week=${weekId}&day=${encodedDay}&preview=parent" data-parent-link="${subject}-${weekId}-${dayIndex}" data-subject="${subject}" data-day="${escapeHtml(day.day)}"><span class="parent-launcher-day">${escapeHtml(day.day)}</span>: <span class="parent-launcher-title">${escapeHtml(day.title)}</span></a>`;
      }).join("")}
    </div>
  </div>`;
  }

  function getStudyWeek(subject, weekParam = null) {
    const weeks = allWeeks();
    if (weekParam) {
      const raw = String(weekParam).trim();
      const num = Number(raw.replace(/^w/i, ""));
      const found = weeks.find(w => w.id.toLowerCase() === raw.toLowerCase() || (Number.isFinite(num) && w.number === num));
      if (found) return found;
    }
    const selected = weeks.find(week => week.id === state?.tutor?.selectedWeek);
    return selected || weeks.find(week => !state?.db?.progress?.[week.id]?.[subject]) || weeks[0];
  }

  function resolveStudyDayIndex(item, dayParam = null) {
    if (dayParam !== null && dayParam !== undefined && item?.dailyPlan?.length) {
      const raw = String(dayParam).trim();
      let decoded = raw;
      try {
        decoded = decodeURIComponent(raw);
      } catch {
        decoded = raw;
      }
      const target = decoded.trim();
      const byName = item.dailyPlan.findIndex(d => d.day.toLowerCase() === target.toLowerCase());
      if (byName !== -1) return byName;

      const norm = target.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[\s\-_]/g, "");
      const byNorm = item.dailyPlan.findIndex(d => d.day.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[\s\-_]/g, "") === norm);
      if (byNorm !== -1) return byNorm;

      const num = parseInt(target, 10);
      if (Number.isFinite(num)) {
        if (num >= 0 && num < item.dailyPlan.length) return num;
      }
    }
    return getStudyDayIndex();
  }

  function getStudyDayIndex() {
    const weekday = new Date(Date.now()).getDay();
    return weekday === 0 ? 0 : Math.min(weekday - 1, 5);
  }

  function renderMentalMathForToday(weekNumber, dayIndex, isParentPreview = false) {
    const isFoundation = weekNumber <= 6;
    const track = isFoundation ? curriculum?.mentalMathFoundation : curriculum?.mentalMathContinuation;
    const week = track?.weeks?.find(item => item.week === weekNumber);
    const group = week?.groups?.[Math.min(dayIndex, (week?.groups?.length || 1) - 1)];
    if (!group) return "";
    const id = `w${weekNumber}`;
    const done = Boolean(state?.db?.progress?.[id]?.mentalMath);
    return `<section class="today-mental-math" aria-labelledby="todayMentalMathTitle">
    <div class="today-mental-math-head">
      <div><span class="eyebrow">KHỞI ĐỘNG · 8–10 PHÚT</span><h3 id="todayMentalMathTitle">${escapeHtml(group.title)}</h3></div>
      ${isParentPreview ? "" : `<button class="check-button mental-math-check ${done ? "done" : ""}" data-done-mental="${id}" aria-pressed="${done}" aria-label="${done ? "Bỏ đánh dấu" : "Đánh dấu"} phần tính nhẩm tuần ${weekNumber} hoàn thành">${done ? "✓" : ""}</button>`}
    </div>
    <p class="today-mental-math-note">Không dùng máy tính. Tính đúng trước, nói được cách nghĩ rồi mới bấm giờ.</p>
    <div class="mental-math-group-hint">💡 <b>Gợi ý:</b> ${escapeHtml(group.hint)}</div>
    <ol class="mental-math-question-list">${group.questions.map(question => `<li class="mental-math-question-item">${escapeHtml(question)}</li>`).join("")}</ol>
  </section>`;
  }

  function renderSubject(subject, params = null) {
    const isMath = subject === "math";
    const name = isMath ? "Toán" : "Tiếng Việt";
    const weekParam = params?.get("week");
    const dayParam = params?.get("day");
    const isParentPreview = params ? (params.get("preview") === "parent" || params.get("mode") === "parent_preview" || params.get("parent") === "1") : false;

    const week = getStudyWeek(subject, weekParam);
    const item = isMath ? week.math : week.vietnamese;
    const dayIndex = resolveStudyDayIndex(item, dayParam);
    const day = item.dailyPlan?.[dayIndex];
    const dayLabel = day?.day || "Buổi hôm nay";
    const app = getAppRoot();
    const documentObj = getDocumentObj();

    if (!app) return "";
    app.innerHTML = `
    ${renderDriveBar()}
    <section class="study-now-hero ${isParentPreview ? "parent-preview-hero" : ""}" aria-label="${isParentPreview ? "Xem trước bài học của Bách" : "Buổi học của Bách"}">
      <div>
        <div class="eyebrow">${name.toUpperCase()} · ${isParentPreview ? "PHỤ HUYNH ĐANG XEM TRƯỚC" : "VÀO HỌC NGAY"}</div>
        <h2>${escapeHtml(day?.title || item[0])}</h2>
        <p>Tuần ${week.number} · ${escapeHtml(dayLabel)} · ${dayLabel === "Thứ 7" ? "50" : "25"} phút</p>
      </div>
      <div class="study-hero-actions">
        ${isParentPreview ? `
          <span class="parent-preview-indicator">👁️ Phụ huynh đang xem trước</span>
          <a class="text-button parent-back-link study-parent-link" href="#plan">Quay lại lộ trình</a>
        ` : `
          <a class="text-button study-parent-link" href="#plan">Phụ huynh xem lộ trình →</a>
        `}
      </div>
    </section>
    ${isMath ? renderMentalMathForToday(week.number, dayIndex, isParentPreview) : ""}
    ${!isMath && !isParentPreview ? `<section class="writing-submission-panel study-writing-shortcut">
      <div class="eyebrow">VIẾT TRÊN GIẤY · RỒI ĐỌC VÀO ĐÂY</div>
      <p>Bách viết xong thì đọc bài vào ô dưới đây. Bàn phím và ảnh chụp là phương án dự phòng.</p>
      <textarea id="writingSubmission" class="ai-input writing-submission-input" rows="5" placeholder="Bấm “Đọc bài để nhập”, rồi đọc chậm và rõ từng câu…"></textarea>
      <div class="voice-toolbar"><button class="voice-button" data-voice-for="#writingSubmission" type="button">🎤 Đọc bài để nhập</button><span id="voiceIndicator" class="voice-listening-label" hidden>● Đang nghe Bách đọc bài…</span></div>
      <div class="writing-photo-actions"><label for="writingPhotoInput" class="photo-button" role="button" tabindex="0">📷 Chụp hoặc chọn ảnh bài viết</label><input type="file" id="writingPhotoInput" class="visually-hidden" accept="image/jpeg,image/png,image/webp" capture="environment"></div>
      <div id="writingPhotoPreview" class="photo-preview-bar" ${state?.writingImage ? "" : "hidden"}><span id="writingPhotoName" class="photo-name">${state?.writingImage ? escapeHtml(state.writingImage.name) : ""}</span><button type="button" id="removeWritingPhotoBtn" class="text-button remove-photo-btn">✕ Bỏ ảnh</button></div>
      <button class="small-button" id="sendWritingToAi" type="button">Chuyển bài sang AI chữa</button>
    </section>` : ""}
    <main class="study-session">${renderDailyPlan(item, subject, true, week.id, week.phase.id, dayIndex, isParentPreview)}</main>
  `;
    if (!isParentPreview && documentObj) {
      documentObj.querySelectorAll("[data-lesson-answer]").forEach(input => {
        const response = state?.db?.lessonResponses?.[input.dataset.lessonAnswer] || {};
        input.value = response.answer || "";
      });
      documentObj.querySelectorAll("[data-lesson-explanation]").forEach(input => {
        const response = state?.db?.lessonResponses?.[input.dataset.lessonExplanation] || {};
        input.value = response.explanation || "";
      });
      documentObj.querySelectorAll("[data-lesson-quality]").forEach(select => {
        const response = state?.db?.lessonResponses?.[select.dataset.lessonQuality] || {};
        select.value = response.quality || "";
      });
      if (lessonTimerManager && typeof lessonTimerManager.updateActiveElements === "function") {
        lessonTimerManager.updateActiveElements();
      }
    }
    return app.innerHTML;
  }

  function renderSubjectLegacyPlan(subject) {
    const isMath = subject === "math";
    const name = isMath ? "Toán" : "Tiếng Việt";
    const routines = curriculum?.routines?.[subject] || [];
    const saturdayRoutines = curriculum?.saturdayRoutines?.[subject] || [];
    const app = getAppRoot();
    const documentObj = getDocumentObj();

    if (!app) return "";
    app.innerHTML = `
    ${renderDriveBar()}
    <section class="today-lesson-entry" aria-label="Bắt đầu bài học hôm nay">
      <div><div class="eyebrow">BUỔI HỌC HÔM NAY</div><strong>${name} · ${curriculum?.meta?.dailyMinutes?.[subject] || 25} phút</strong><span>${isMath ? "Học lõi, luyện sâu và một câu suy luận." : "Đọc, lập ý, viết và sửa một điểm quan trọng."}</span></div>
      <a class="today-lesson-entry-button" href="#today-lesson">Bắt đầu <span aria-hidden="true">↓</span></a>
    </section>
    ${isMath ? renderMentalMathFoundation() : ""}
    ${pageFrame(
      `${name}: ${isMath ? "tư duy có cấu trúc" : "diễn đạt có chiều sâu"}`,
      `${isMath ? "∑ TOÁN" : "文 TIẾNG VIỆT"} · 36 TUẦN`,
      `${isMath ? "Từ hiểu đề → mô hình hóa → nhiều cách giải." : "Từ đọc → nói → viết → sửa, để câu chữ lớn lên cùng Bách."}`,
      `<div class="panel">
        <div class="eyebrow">NHỊP MỘT BUỔI · ${curriculum?.meta?.dailyMinutes?.[subject] || 25} PHÚT</div>
        <div class="routine-row" style="border-top:0;padding-top:13px"><b>Bước</b><span class="time">Thời lượng</span><span><b>Việc cần làm</b></span></div>
        ${routines.map(r => `<div class="routine-row"><b>${r[0]}</b><span class="time">${r[1]}</span><span>${r[2]}</span></div>`).join("")}
      </div>
      ${!isMath ? `<div class="panel writing-submission-panel">
        <div class="eyebrow">NỘP BÀI VĂN BẰNG GIỌNG NÓI HOẶC ẢNH CHỤP</div>
        <h3>Bách viết xong rồi đọc bài hoặc chụp ảnh</h3>
        <p class="week-focus">Bách viết bài ra giấy trước. Sau đó đọc trọn bài thành tiếng để nhập vào khung, hoặc chụp ảnh bài viết trên giấy để chuyển cho Gemini chữa. Bàn phím vẫn dùng được bình thường.</p>
        <div class="input-with-voice">
          <textarea id="writingSubmission" class="ai-input writing-submission-input" rows="7" placeholder="Bấm “Đọc bài để nhập” rồi đọc chậm, rõ từng câu, hoặc chụp ảnh bài viết bên dưới…"></textarea>
          <div class="voice-toolbar">
            <button class="voice-button" data-voice-for="#writingSubmission" type="button" title="Đọc bài để nhập bằng giọng nói">🎤 Đọc bài để nhập</button>
            <span id="voiceIndicator" class="voice-listening-label" hidden>● Đang nghe Bách đọc bài…</span>
          </div>
        </div>
        <div class="writing-photo-container">
          <div class="writing-photo-actions">
            <label for="writingPhotoInput" class="photo-button" role="button" tabindex="0" title="Chụp ảnh hoặc chọn ảnh bài viết trên giấy (JPEG, PNG, WebP tối đa 1 MiB)">📷 Chụp hoặc chọn ảnh bài viết</label>
            <input type="file" id="writingPhotoInput" class="visually-hidden" accept="image/jpeg,image/png,image/webp" capture="environment">
          </div>
          <div id="writingPhotoPreview" class="photo-preview-bar" ${state?.writingImage ? "" : "hidden"}>
            <span id="writingPhotoName" class="photo-name">${state?.writingImage ? escapeHtml(state.writingImage.name) : ""}</span>
            <button type="button" id="removeWritingPhotoBtn" class="text-button remove-photo-btn" title="Bỏ ảnh này">✕ Bỏ ảnh</button>
          </div>
        </div>
        <button class="small-button" id="sendWritingToAi" type="button">Chuyển bài sang AI chữa</button>
      </div>` : ""}
      ${pageFrame(
        "Thứ 7 · Tổng kết tuần",
        "PHIÊN DÀI · 50 PHÚT",
        "Hết 50 phút thì dừng; phần chưa xong chuyển sang mục tiêu tuần sau, không học bù quá sức.",
        `<div class="panel saturday-panel">
          <div class="eyebrow">NHỊP THỨ 7 · ${curriculum?.meta?.saturdayMinutes?.[subject] || 50} PHÚT · ${name.toUpperCase()}</div>
          ${saturdayRoutines.map(r => `<div class="routine-row"><b>${r[0]}</b><span class="time">${r[1]}</span><span>${r[2]}</span></div>`).join("")}
        </div>`
      )}
      ${pageFrame(
        "36 mục tiêu nhỏ",
        "ĐI TỪNG BẬC",
        "Đánh dấu theo tuần; không cần hoàn hảo mới được đi tiếp.",
        `<div class="week-list">${allWeeks().map(w => {
          const item = isMath ? w.math : w.vietnamese;
          const done = state?.db?.progress?.[w.id]?.[subject];
          return `
            <article class="week-card">
              <div class="week-main">
                <div class="week-no">${String(w.number).padStart(2, "0")} · ${w.phase.id}</div>
                <div><div class="week-title">${item[0]} ${state?.db?.progress?.[w.id]?.needsReview ? `<span class="review-badge">AI đề xuất ôn lại</span>` : ""}</div><div class="week-focus">${item[1]}</div></div>
                <button class="check-button ${done ? "done" : ""}" data-done-subject="${w.id}|${subject}">${done ? "✓" : ""}</button>
              </div>
              ${item.dailyPlan ? renderDailyPlan(item, subject, w.number === 1, w.id, w.phase.id) : ""}
            </article>
          `;
        }).join("")}</div>`
      )}`
    )}
  `;
    if (documentObj) {
      documentObj.querySelectorAll("[data-lesson-answer]").forEach(input => {
        const response = state?.db?.lessonResponses?.[input.dataset.lessonAnswer] || {};
        input.value = response.answer || "";
      });
      documentObj.querySelectorAll("[data-lesson-explanation]").forEach(input => {
        const response = state?.db?.lessonResponses?.[input.dataset.lessonExplanation] || {};
        input.value = response.explanation || "";
      });
      documentObj.querySelectorAll("[data-lesson-quality]").forEach(select => {
        const response = state?.db?.lessonResponses?.[select.dataset.lessonQuality] || {};
        select.value = response.quality || "";
      });
      if (lessonTimerManager && typeof lessonTimerManager.updateActiveElements === "function") {
        lessonTimerManager.updateActiveElements();
      }
    }
    return app.innerHTML;
  }

  function renderProgressiveHints(rawHint = "", hintKey = "", isParentPreview = false) {
    const steps = parseHintSteps(rawHint);
    if (!steps.length) return "";

    if (isParentPreview) {
      const cleanedSteps = steps.map(s => stripHintPrefix(s));
      const content = cleanedSteps.length > 1
        ? `<ol class="lesson-instruction-list">${cleanedSteps.map(s => `<li>${escapeHtml(s)}</li>`).join("")}</ol>`
        : `<p>${escapeHtml(cleanedSteps[0])}</p>`;
      return `<div class="lesson-task-group progressive-hints" data-hints-container data-hint-key="${escapeHtml(hintKey)}" data-is-parent-preview="true">
      <b>Gợi ý</b>
      ${content}
    </div>`;
    }

    const revealedCount = Math.min(steps.length, Math.max(0, parseInt(state?.lessonHints?.[hintKey], 10) || 0));
    const revealedSteps = steps.slice(0, revealedCount).map(s => stripHintPrefix(s));

    let hintsHtml = "";
    if (revealedCount > 0) {
      hintsHtml = revealedSteps.length > 1 || steps.length > 1
        ? `<ol class="lesson-instruction-list">${revealedSteps.map(s => `<li>${escapeHtml(s)}</li>`).join("")}</ol>`
        : `<p>${escapeHtml(revealedSteps[0])}</p>`;
    }

    let buttonHtml = "";
    if (revealedCount < steps.length) {
      const nextHintNum = revealedCount + 1;
      const btnLabel = `💡 Xem gợi ý ${nextHintNum}`;
      buttonHtml = `<button class="small-button hint-reveal-btn" data-reveal-hint="${escapeHtml(hintKey)}" data-hint-index="${nextHintNum}" type="button">${btnLabel}</button>`;
    }

    return `<div class="lesson-task-group progressive-hints" data-hints-container data-hint-key="${escapeHtml(hintKey)}" data-raw-hint="${escapeHtml(encodeURIComponent(rawHint))}" data-revealed="${revealedCount}" data-total-hints="${steps.length}">
      <b>Gợi ý</b>
      ${hintsHtml}
      ${buttonHtml}
    </div>`;
  }

  function renderDailyPlan(item, subject, open = false, weekId = "w1", phaseId = "P1", focusedDayIndex = null, isParentPreview = false) {
    const label = subject === "math" ? "Toán" : "Tiếng Việt";
    const anchor = open || focusedDayIndex !== null ? ' id="today-lesson"' : "";
    const summaryLabel = focusedDayIndex !== null ? "Bài học hôm nay" : open ? "Mở bài học hôm nay" : "Mở chi tiết các buổi học";
    const visibleDays = item.dailyPlan
      .map((day, dayIndex) => ({ day, dayIndex }))
      .filter(({ dayIndex }) => focusedDayIndex === null || dayIndex === focusedDayIndex);
    return `<details class="daily-plan"${anchor} ${open ? "open" : ""}>
    <summary>${summaryLabel} · ${label} · bám mạch ${escapeHtml(curriculum?.meta?.textbook || "chương trình lớp 4")}</summary>
    <div class="daily-plan-alignment">${escapeHtml(item.textbookAlignment || "Củng cố nền lớp 3 và chuẩn bị lớp 4")}</div>
    <div class="daily-plan-grid">
      ${visibleDays.map(({ day, dayIndex }) => {
        const responseKey = `${weekId}-${subject}-${dayIndex + 1}`;
        const adaptiveNote = adaptiveNextStep(subject, weekId, dayIndex);
        const difficulty = lessonDifficulty(subject, phaseId, weekId, dayIndex);
        const timerKey = responseKey;
        const defaultSecs = getLessonDefaultSeconds(day.day);
        const savedTimer = state?.db?.lessonTimers?.[timerKey] || {
          status: "idle",
          remainingSeconds: defaultSecs,
          durationSeconds: defaultSecs
        };
        const currentTimer = computeCurrentTimerState(savedTimer);
        const isRunning = currentTimer.status === "running";
        const isPaused = currentTimer.status === "paused";
        const isCompleted = currentTimer.status === "completed";
        const timeDisplay = formatTimerSeconds(currentTimer.remainingSeconds);

        const visualSvg = renderSvgVisual(day.visual || day.concrete?.visual);
        const readingPassage = day.concrete?.worked || day.example || "";
        const hasTextToRead = subject === "vietnamese" && readingPassage.length > 20;

        const savedQuality = state?.db?.lessonResponses?.[responseKey]?.quality || "";
        const isTooEasy = savedQuality === "too_easy";
        const isHard = savedQuality === "hard";

        return `<details class="daily-plan-day" ${focusedDayIndex !== null || dayIndex === 0 ? "open" : ""}>
        <summary class="daily-plan-day-head"><span class="daily-plan-day-label">${escapeHtml(day.day)}</span><b>${escapeHtml(day.title)}</b><span class="daily-plan-duration">${day.day === "Thứ 7" ? "50 phút" : "25 phút"}</span></summary>
        <div class="daily-plan-sections">
          ${isParentPreview ? "" : `<div class="lesson-timer-panel" data-timer-container="${timerKey}" data-day-label="${escapeHtml(day.day)}">
            <div class="lesson-timer-head">
              <span class="lesson-timer-title">⏱️ Đồng hồ bài học</span>
              <span class="lesson-timer-badge ${isCompleted ? "completed" : isRunning ? "running" : ""}">${isCompleted ? "Hết giờ học bài này!" : isRunning ? "Đang bấm giờ" : isPaused ? "Tạm dừng" : "Chưa bấm giờ"}</span>
            </div>
            <div class="lesson-timer-body">
              <div class="lesson-timer-clock ${isCompleted ? "time-up" : ""}" data-timer-display="${timerKey}" aria-live="polite" aria-label="Thời gian còn lại ${timeDisplay}">
                ${timeDisplay}
              </div>
              <div class="lesson-timer-controls">
                ${!isRunning ? `<button class="timer-btn timer-btn-primary" data-timer-action="start" data-timer-key="${timerKey}" type="button">${isPaused ? "Tiếp tục" : isCompleted ? "Làm lại từ đầu" : "Bắt đầu"}</button>` : `<button class="timer-btn timer-btn-pause" data-timer-action="pause" data-timer-key="${timerKey}" type="button">Tạm dừng</button>`}
                <button class="timer-btn timer-btn-reset" data-timer-action="reset" data-timer-key="${timerKey}" type="button" ${currentTimer.status === "idle" ? "disabled" : ""}>Đặt lại</button>
              </div>
            </div>
            ${isCompleted ? `<div class="lesson-timer-notice" role="status">Hết giờ học bài này! Bách có thể thư thả xem lại, hoàn thành phần đang làm hoặc nộp bài; không bị ép nộp ngay.</div>` : ""}
          </div>`}
          <div class="lesson-difficulty difficulty-${difficulty.level}"><div><span>Độ khó cho Bách</span><strong>${escapeHtml(difficulty.label)} · ${difficulty.level}/5</strong></div><p>${escapeHtml(difficulty.note)}</p></div>
          <div class="daily-plan-section"><span class="daily-plan-label">Mục tiêu bài học</span><p>${escapeHtml(day.objective)}</p></div>
          ${day.concrete ? `<div class="daily-plan-concrete">
            <div class="daily-plan-concrete-title">Nhịp học 3 chặng của Bách</div>

            <!-- CHẶNG 1: KHỞI ĐỘNG & MÔ HÌNH TRỰC QUAN (3–4 phút) -->
            <div class="daily-stage daily-stage-warmup">
              <div class="stage-header">
                <span class="stage-pill">Chặng 1</span>
                <span class="stage-title">Khởi động & Khám phá (3–4 phút)</span>
                ${hasTextToRead && !isParentPreview ? `<button class="audio-read-btn" data-read-aloud="${escapeHtml(readingPassage)}" type="button">🔊 Nghe đọc bài mẫu</button>` : ""}
              </div>
              <div class="stage-body">
                <div class="stage-item"><b>Khởi động</b>: ${escapeHtml(day.concrete.warmup)}</div>
                <div class="stage-item"><b>Khám phá</b>: ${escapeHtml(day.concrete.discover)}</div>
                <div class="stage-item"><b>Ví dụ</b>: ${escapeHtml(day.concrete.worked)}</div>
                ${visualSvg ? `<div class="stage-visual">${visualSvg}</div>` : ""}
              </div>
            </div>

            <!-- CHẶNG 2: THỰC HÀNH CỐT LÕI (12–14 phút) -->
            <div class="daily-stage daily-stage-core daily-plan-exercises">
              <div class="stage-header">
                <span class="stage-pill">Chặng 2</span>
                <span class="stage-title">Thực hành cốt lõi (12–14 phút)</span>
              </div>
              <div class="stage-body">
                <div class="lesson-task-group">
                  <b>Bách tự làm:</b>
                  ${day.concrete.exerciseItems ? `<ol class="lesson-exercise-list">${day.concrete.exerciseItems.map(task => `<li>${escapeHtml(task).replace(/\n/g, "<br>")}</li>`).join("")}</ol>` : `<p>${escapeHtml(day.concrete.exercises)}</p>`}
                </div>
                ${day.concrete.variant ? `<div class="lesson-task-group"><b>Bài làm thêm:</b>${renderInstructionSteps(day.concrete.variant)}</div>` : ""}
                ${day.concrete.drill ? `<div class="lesson-task-group"><b>Đề riêng hôm nay:</b><ul class="lesson-inline-list">${splitInlineItems(day.concrete.drill).map(task => `<li>${escapeHtml(task)}</li>`).join("")}</ul></div>` : ""}
              </div>
            </div>

            <!-- CHẶNG 3: THỬ THÁCH MỞ RỘNG & TỰ ĐÁNH GIÁ (5–7 phút) -->
            <div class="daily-stage daily-stage-challenge daily-plan-advanced">
              <div class="stage-header">
                <span class="stage-pill">Chặng 3</span>
                <span class="stage-title">Thử thách mở rộng & Tự đánh giá (5–7 phút)</span>
              </div>
              <div class="stage-body">
                ${isTooEasy ? `<div class="level-up-badge">🚀 <b>Bách làm rất nhanh!</b> Hệ thống đã mở khóa Thử thách Olympic nâng cao và tăng độ khó cho buổi tiếp theo.</div>` : ""}
                ${isHard ? `<div class="adaptive-support-badge">🌱 <b>Cố lên Bách!</b> Buổi tiếp theo hệ thống sẽ củng cố nền tảng để con làm bài chắc tay hơn nhé.</div>` : ""}
                <div class="lesson-task-group"><b>Thử thách Olympic / Nâng cao:</b>${renderInstructionSteps(day.concrete.challenge)}</div>
                ${renderProgressiveHints(day.concrete?.hint || day.hint || "", responseKey, isParentPreview)}
                ${day.advanced ? `<div class="lesson-task-group"><b>Luyện thêm nếu còn thời gian:</b>${renderInstructionSteps(day.advanced)}</div>` : ""}
                <div class="daily-plan-check"><span class="daily-plan-label">Tự kiểm tra</span>${renderInstructionSteps(day.concrete.check || day.selfCheck)}</div>
                ${adaptiveNote ? `<p class="adaptive-next-step"><b>Điều chỉnh cho buổi sau:</b> ${escapeHtml(adaptiveNote)}</p>` : ""}

                ${subject === "math" && !isParentPreview ? `<div class="lesson-response" data-lesson-response="${responseKey}">
                  <div class="daily-plan-label">Nộp bài Câu 1 - Nhờ AI chấm &amp; góp ý</div>
                  <p class="lesson-response-note">Thầy cô Gia sư AI sẽ xem xét cả đáp số và cách làm để nhận xét đúng sai, chiến lược giải đã thông minh chưa và cách trình bày có rõ ràng không nhé.</p>
                  <label class="lesson-field-label">Đáp số Câu 1 (phần Thực hành cốt lõi - Bách tự làm):</label>
                  <div class="lesson-response-row"><input data-lesson-answer="${responseKey}" inputmode="decimal" autocomplete="off" placeholder="Nhập đáp số Câu 1 (phần Bách tự làm)" aria-label="Đáp số Câu 1 phần Thực hành cốt lõi" /><button class="small-button" data-save-lesson="${responseKey}" type="button">Lưu</button><button class="text-button" data-review-lesson-ai="${responseKey}" type="button" title="Mở gia sư AI để nhận xét độ đúng sai, chiến lược và cách trình bày">Nhờ AI chấm &amp; góp ý</button></div>
                  <p class="lesson-response-note">Nếu muốn AI xem câu khác hoặc bài thử thách, Bách chỉ cần ghi rõ tên câu và cách làm ở ô bên dưới nhé.</p>
                  <label class="lesson-quality"><span>Buổi sau nên điều chỉnh?</span><select data-lesson-quality="${responseKey}" aria-label="Tự đánh giá độ vừa sức"><option value="">Chọn nếu cần</option><option value="too_easy">Bách làm nhanh, bài còn nhẹ</option><option value="right">Vừa sức</option><option value="hard">Còn vướng, cần củng cố</option></select></label>
                  <div class="lesson-explanation-guide">
                    <label class="lesson-field-label">Cách giải / suy nghĩ của Bách (không bắt buộc):</label>
                    <p class="lesson-field-subnote">Bách có thể tự gõ vào ô hoặc bấm nút micro 🎤 để nói cách làm (tùy chọn). AI sẽ xem xét cả đáp án và cách làm để chấm &amp; góp ý cho con.</p>
                  </div>
                  <div class="lesson-response-explanation"><textarea data-lesson-explanation="${responseKey}" rows="2" placeholder="Gõ cách giải hoặc bấm nút mic để đọc suy nghĩ (không bắt buộc)…" aria-label="Cách giải hoặc suy nghĩ của Bách (không bắt buộc)"></textarea><button class="voice-button" data-voice-for="[data-lesson-explanation='${responseKey}']" type="button">🎤 Bấm để nói cách giải</button></div>
                </div>` : ""}
              </div>
            </div>
          </div>` : ""}
        </div>
      </details>`;
      }).join("")}
    </div>
  </details>`;
  }

  return {
    renderSvgVisual,
    progressBar,
    phaseChips,
    pageFrame,
    adaptivePlan,
    isAfterAdaptiveSource,
    adaptiveNextStep,
    lessonDifficulty,
    renderDriveBar,
    renderHome,
    renderPlan,
    weekCard,
    renderLessonPlan,
    renderParentLessonLauncher,
    getStudyWeek,
    resolveStudyDayIndex,
    getStudyDayIndex,
    renderMentalMathForToday,
    renderSubject,
    renderSubjectLegacyPlan,
    parseHintSteps,
    stripHintPrefix,
    renderProgressiveHints,
    renderDailyPlan
  };
}
