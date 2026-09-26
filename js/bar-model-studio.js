// js/bar-model-studio.js - Mini Bar Model Studio Engine (< 15KB Pure SVG)
// Giúp Bách trực quan hóa bài toán Tổng–Hiệu, Tỉ số theo phương pháp Singapore

import { BAR_MODEL_LEVELS, BAR_MODEL_CHALLENGES } from "./bar-model-challenges.js";
export { BAR_MODEL_LEVELS, BAR_MODEL_CHALLENGES };

export class BarModelStudioState {
  constructor(initialChallengeIndex = 0) {
    this.challengeIndex = initialChallengeIndex;
    this.bar1 = { name: "Thanh A", parts: 1, extraDiff: 0 };
    this.bar2 = { name: "Thanh B", parts: 1, extraDiff: 0 };
    this.bar3 = null;
    this.totalLabel = "";
    this.diffLabel = "";
    this.isSolved = false;
    this.loadChallenge(this.challengeIndex);
  }

  loadChallenge(index) {
    this.challengeIndex = Math.max(0, Math.min(BAR_MODEL_CHALLENGES.length - 1, index));
    const ch = BAR_MODEL_CHALLENGES[this.challengeIndex];
    this.bar1 = { name: ch.target.bar1Name, parts: 1, extraDiff: 0 };
    this.bar2 = { name: ch.target.bar2Name, parts: 1, extraDiff: 0 };
    if (ch.target.hasBar3) {
      this.bar3 = { name: ch.target.bar3Name, parts: 1, extraDiff: 0 };
    } else {
      this.bar3 = null;
    }
    this.totalLabel = "";
    this.diffLabel = "";
    this.isSolved = false;
  }

  resetCurrentChallenge() {
    this.loadChallenge(this.challengeIndex);
  }

  setParts(barKey, parts) {
    const validParts = Math.max(1, Math.min(8, Math.round(Number(parts)) || 1));
    if (barKey === "bar1") this.bar1.parts = validParts;
    if (barKey === "bar2") this.bar2.parts = validParts;
    if (barKey === "bar3" && this.bar3) this.bar3.parts = validParts;
  }

  toggleDiff(hasDiff) {
    this.bar1.extraDiff = hasDiff ? 1 : 0;
  }

  checkSolution() {
    const ch = BAR_MODEL_CHALLENGES[this.challengeIndex];
    const t = ch.target;

    const partsMatch = (this.bar1.parts === t.bar1Parts && this.bar2.parts === t.bar2Parts) &&
      (!t.hasBar3 || (this.bar3 && this.bar3.parts === t.bar3Parts));
    const diffMatch = t.hasDiff ? (this.bar1.extraDiff > 0 && String(this.diffLabel).trim() === t.diffValue) : true;
    const totalMatch = t.totalValue ? (String(this.totalLabel).trim() === t.totalValue) : true;

    this.isSolved = Boolean(partsMatch && diffMatch && totalMatch);
    return {
      isSolved: this.isSolved,
      hint: ch.hint,
      solution: ch.solution
    };
  }

  renderSvgMarkup() {
    const hasB3 = Boolean(this.bar3);
    const svgWidth = 520;
    const svgHeight = hasB3 ? 270 : 220;
    const maxParts = Math.max(this.bar1.parts, this.bar2.parts, hasB3 ? this.bar3.parts : 1);
    const availableWidth = this.totalLabel ? 260 : 340;
    const ch = BAR_MODEL_CHALLENGES[this.challengeIndex];
    const isComparison = Boolean(this.bar1.parts === 1 && this.bar2.parts === 1 && (!hasB3 || this.bar3.parts === 1) && ch?.target?.hasDiff);
    const maxUnit = isComparison ? 140 : 55;
    const unitWidth = Math.max(34, Math.min(maxUnit, Math.floor(availableWidth / Math.max(maxParts, 1))));
    const barHeight = 28;
    const startX = 110;
    const bar1Y = hasB3 ? 35 : 45;
    const bar2Y = hasB3 ? 95 : 115;
    const bar3Y = 155;
    const diffWidth = isComparison ? 60 : 44;

    // Tính toán độ dài thanh
    const len1 = this.bar1.parts * unitWidth + (this.bar1.extraDiff > 0 ? diffWidth : 0);
    const len2 = this.bar2.parts * unitWidth;
    const len3 = hasB3 ? (this.bar3.parts * unitWidth) : 0;
    const maxLen = Math.max(len1, len2, len3);

    const baseLabel = isComparison ? "Đoạn cơ sở" : "1 phần";

    let partsRects1 = "";
    for (let i = 0; i < this.bar1.parts; i++) {
      const x = startX + i * unitWidth;
      partsRects1 += `<rect x="${x}" y="${bar1Y}" width="${unitWidth}" height="${barHeight}" fill="#3b82f6" fill-opacity="0.2" stroke="#2563eb" stroke-width="2" rx="4" />
      <text x="${x + unitWidth / 2}" y="${bar1Y + 18}" text-anchor="middle" font-size="${unitWidth < 42 ? 10 : 11}" font-weight="600" fill="#1e40af">${baseLabel}</text>`;
    }
    if (this.bar1.extraDiff > 0) {
      const diffX = startX + this.bar1.parts * unitWidth;
      partsRects1 += `<rect x="${diffX}" y="${bar1Y}" width="${diffWidth}" height="${barHeight}" fill="#f59e0b" fill-opacity="0.25" stroke="#d97706" stroke-dasharray="3,3" stroke-width="2" rx="4" />
      <text x="${diffX + diffWidth / 2}" y="${bar1Y + 18}" text-anchor="middle" font-size="11" font-weight="700" fill="#b45309">${this.diffLabel ? `+${this.diffLabel}` : "?"}</text>`;
    }

    let partsRects2 = "";
    for (let i = 0; i < this.bar2.parts; i++) {
      const x = startX + i * unitWidth;
      partsRects2 += `<rect x="${x}" y="${bar2Y}" width="${unitWidth}" height="${barHeight}" fill="#10b981" fill-opacity="0.2" stroke="#059669" stroke-width="2" rx="4" />
      <text x="${x + unitWidth / 2}" y="${bar2Y + 18}" text-anchor="middle" font-size="${unitWidth < 42 ? 10 : 11}" font-weight="600" fill="#065f46">${baseLabel}</text>`;
    }

    let partsRects3 = "";
    if (hasB3) {
      for (let i = 0; i < this.bar3.parts; i++) {
        const x = startX + i * unitWidth;
        partsRects3 += `<rect x="${x}" y="${bar3Y}" width="${unitWidth}" height="${barHeight}" fill="#8b5cf6" fill-opacity="0.2" stroke="#7c3aed" stroke-width="2" rx="4" />
        <text x="${x + unitWidth / 2}" y="${bar3Y + 18}" text-anchor="middle" font-size="${unitWidth < 42 ? 10 : 11}" font-weight="600" fill="#5b21b6">${baseLabel}</text>`;
      }
    }

    // Ngoặc ôm tổng
    const bracketX = startX + maxLen + 12;
    const bottomY = hasB3 ? (bar3Y + barHeight) : (bar2Y + barHeight);
    const midY = (bar1Y + bottomY) / 2;
    const totalSvg = this.totalLabel
      ? `<path d="M ${bracketX} ${bar1Y} C ${bracketX + 15} ${bar1Y + 20}, ${bracketX + 15} ${midY}, ${bracketX + 25} ${midY} C ${bracketX + 15} ${midY}, ${bracketX + 15} ${bottomY - 20}, ${bracketX} ${bottomY}" fill="none" stroke="#64748b" stroke-width="2" />
         <text x="${bracketX + 32}" y="${midY + 4}" font-size="13" font-weight="700" fill="#334155">${this.totalLabel}</text>`
      : "";

    return `
      <svg viewBox="0 0 ${svgWidth} ${svgHeight}" class="bar-model-svg" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mô hình sơ đồ đoạn thẳng Singapore">
        <rect width="100%" height="100%" fill="#f8fafc" rx="8" />
        <!-- Nhãn tên thanh -->
        <text x="96" y="${bar1Y + 18}" text-anchor="end" font-size="13" font-weight="700" fill="#1e293b">${this.bar1.name}</text>
        <text x="96" y="${bar2Y + 18}" text-anchor="end" font-size="13" font-weight="700" fill="#1e293b">${this.bar2.name}</text>
        ${hasB3 ? `<text x="96" y="${bar3Y + 18}" text-anchor="end" font-size="13" font-weight="700" fill="#1e293b">${this.bar3.name}</text>` : ""}
        <!-- Các thanh đoạn thẳng -->
        ${partsRects1}
        ${partsRects2}
        ${partsRects3}
        <!-- Ngoặc tổng nếu có -->
        ${totalSvg}
      </svg>
    `;
  }
}

export function getNextSmartChallengeIndex(currentIndex, solvedIndices = [], recentIndices = []) {
  if (!BAR_MODEL_CHALLENGES || BAR_MODEL_CHALLENGES.length === 0) return 0;
  const currentCh = BAR_MODEL_CHALLENGES[currentIndex] || BAR_MODEL_CHALLENGES[0];
  const currentLevel = currentCh.level;

  const recentSet = new Set(recentIndices.slice(-4));
  const solvedSet = new Set(solvedIndices);

  // Lọc các thử thách thuộc cấp độ khác và không nằm trong bài vừa giải
  let candidates = BAR_MODEL_CHALLENGES.filter(ch => ch.level !== currentLevel && !recentSet.has(ch.index));

  // Ưu tiên các bài Bách chưa giải
  const unsolvedCandidates = candidates.filter(ch => !solvedSet.has(ch.index));
  const pool = unsolvedCandidates.length > 0 ? unsolvedCandidates : (candidates.length > 0 ? candidates : BAR_MODEL_CHALLENGES);

  const picked = pool[Math.floor(Math.random() * pool.length)];
  return picked ? picked.index : (currentIndex + 1) % BAR_MODEL_CHALLENGES.length;
}
