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
    const hasB3 = Boolean(t.hasBar3 && this.bar3);
    const isPureSumDiff = Boolean(t.bar1Parts === 1 && t.bar2Parts === 1 && (!hasB3 || t.bar3Parts === 1) && t.hasDiff);

    const partsMatch = (this.bar1.parts === t.bar1Parts && this.bar2.parts === t.bar2Parts) &&
      (!t.hasBar3 || (this.bar3 && this.bar3.parts === t.bar3Parts));
    
    let diffMatch = true;
    if (t.hasDiff) {
      if (isPureSumDiff) {
        diffMatch = Boolean(this.bar1.extraDiff > 0 && String(this.diffLabel).trim() === t.diffValue);
      } else {
        // Trong bài toán Hiệu – Tỉ: số phần đã phản ánh tỉ lệ chính xác giữa hai đại lượng.
        // Học sinh nhập đúng giá trị hiệu vào diffLabel (SVG hiển thị ngoặc so sánh và không vẽ khối đuôi thừa).
        diffMatch = Boolean(String(this.diffLabel).trim() === t.diffValue);
      }
    } else {
      // Khi đề bài KHÔNG CÓ HIỆU:
      // Nghiêm cấm thêm đoạn hiệu thừa (extraDiff === 0) VÀ nghiêm cấm nhập nhãn hiệu thừa (diffLabel phải rỗng).
      const hasNoExtraDiff = !this.bar1.extraDiff || this.bar1.extraDiff === 0;
      const hasNoDiffLabel = !this.diffLabel || String(this.diffLabel).trim() === "";
      diffMatch = Boolean(hasNoExtraDiff && hasNoDiffLabel);
    }

    let totalMatch = true;
    if (t.totalValue) {
      totalMatch = Boolean(String(this.totalLabel).trim() === t.totalValue);
    } else {
      // Khi đề bài KHÔNG CÓ TỔNG:
      // Nghiêm cấm nhập nhãn tổng thừa (totalLabel phải rỗng).
      totalMatch = Boolean(!this.totalLabel || String(this.totalLabel).trim() === "");
    }

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
    const svgHeight = hasB3 ? 270 : 230;
    const maxParts = Math.max(this.bar1.parts, this.bar2.parts, hasB3 ? this.bar3.parts : 1);
    const availableWidth = this.totalLabel ? 260 : 340;
    const ch = BAR_MODEL_CHALLENGES[this.challengeIndex];
    const isComparison = Boolean(this.bar1.parts === 1 && this.bar2.parts === 1 && (!hasB3 || this.bar3.parts === 1) && ch?.target?.hasDiff);
    const isRatioDiff = Boolean(ch?.target?.hasDiff && !isComparison);
    const maxUnit = isComparison ? 140 : 55;
    const unitWidth = Math.max(34, Math.min(maxUnit, Math.floor(availableWidth / Math.max(maxParts, 1))));
    const barHeight = 28;
    const startX = 110;
    const bar1Y = hasB3 ? 38 : (isRatioDiff ? 52 : 45);
    const bar2Y = hasB3 ? 98 : (isRatioDiff ? 122 : 115);
    const bar3Y = 158;
    const diffWidth = isComparison ? 60 : 44;

    // Tính toán độ dài thanh
    // CHÚ Ý: CHỈ cộng diffWidth nếu là isComparison (Tổng – Hiệu dạng 1 đoạn cơ sở + phần hơn)!
    // Đối với Hiệu – Tỉ (isRatioDiff), TUYỆT ĐỐI KHÔNG cộng thêm khối vào đuôi thanh 1 vì làm sai tỉ lệ!
    const len1 = this.bar1.parts * unitWidth + (isComparison && this.bar1.extraDiff > 0 ? diffWidth : 0);
    const len2 = this.bar2.parts * unitWidth;
    const len3 = hasB3 ? (this.bar3.parts * unitWidth) : 0;
    const maxLen = Math.max(len1, len2, len3);

    const baseLabel = isComparison ? "Đoạn cơ sở" : "1 phần";

    let partsRects1 = "";
    const p1 = this.bar1.parts;
    const p2 = this.bar2.parts;
    const minParts12 = Math.min(p1, p2);

    for (let i = 0; i < this.bar1.parts; i++) {
      const x = startX + i * unitWidth;
      const isDiffPart = isRatioDiff && p1 > p2 && i >= minParts12;
      const fill = isDiffPart ? "#fef3c7" : "#3b82f6";
      const fillOpacity = isDiffPart ? "0.45" : "0.2";
      const stroke = isDiffPart ? "#d97706" : "#2563eb";
      const textFill = isDiffPart ? "#92400e" : "#1e40af";
      partsRects1 += `<rect x="${x}" y="${bar1Y}" width="${unitWidth}" height="${barHeight}" fill="${fill}" fill-opacity="${fillOpacity}" stroke="${stroke}" stroke-width="2" rx="4" />
      <text x="${x + unitWidth / 2}" y="${bar1Y + 18}" text-anchor="middle" font-size="${unitWidth < 42 ? 10 : 11}" font-weight="600" fill="${textFill}">${baseLabel}</text>`;
    }
    // Chỉ vẽ khối đuôi dán thêm nếu là bài Tổng – Hiệu so sánh tự do (isComparison)
    if (isComparison && this.bar1.extraDiff > 0) {
      const diffX = startX + this.bar1.parts * unitWidth;
      partsRects1 += `<rect x="${diffX}" y="${bar1Y}" width="${diffWidth}" height="${barHeight}" fill="#f59e0b" fill-opacity="0.25" stroke="#d97706" stroke-dasharray="3,3" stroke-width="2" rx="4" />
      <text x="${diffX + diffWidth / 2}" y="${bar1Y + 18}" text-anchor="middle" font-size="11" font-weight="700" fill="#b45309">${this.diffLabel ? `+${this.diffLabel}` : "?"}</text>`;
    }

    let partsRects2 = "";
    for (let i = 0; i < this.bar2.parts; i++) {
      const x = startX + i * unitWidth;
      const isDiffPart = isRatioDiff && p2 > p1 && i >= minParts12;
      const fill = isDiffPart ? "#fef3c7" : "#10b981";
      const fillOpacity = isDiffPart ? "0.45" : "0.2";
      const stroke = isDiffPart ? "#d97706" : "#059669";
      const textFill = isDiffPart ? "#92400e" : "#065f46";
      partsRects2 += `<rect x="${x}" y="${bar2Y}" width="${unitWidth}" height="${barHeight}" fill="${fill}" fill-opacity="${fillOpacity}" stroke="${stroke}" stroke-width="2" rx="4" />
      <text x="${x + unitWidth / 2}" y="${bar2Y + 18}" text-anchor="middle" font-size="${unitWidth < 42 ? 10 : 11}" font-weight="600" fill="${textFill}">${baseLabel}</text>`;
    }

    let partsRects3 = "";
    if (hasB3) {
      for (let i = 0; i < this.bar3.parts; i++) {
        const x = startX + i * unitWidth;
        partsRects3 += `<rect x="${x}" y="${bar3Y}" width="${unitWidth}" height="${barHeight}" fill="#8b5cf6" fill-opacity="0.2" stroke="#7c3aed" stroke-width="2" rx="4" />
        <text x="${x + unitWidth / 2}" y="${bar3Y + 18}" text-anchor="middle" font-size="${unitWidth < 42 ? 10 : 11}" font-weight="600" fill="#5b21b6">${baseLabel}</text>`;
      }
    }

    // Biểu diễn Hiệu số Singapore (đường gióng đứt nét và ngoặc so sánh phần dôi ra) cho bài toán Hiệu – Tỉ
    let diffMarkup = "";
    if (isRatioDiff && p1 !== p2) {
      const alignX = startX + minParts12 * unitWidth;
      const maxP = Math.max(p1, p2);
      const endX = startX + maxP * unitWidth;
      const midDiffX = (alignX + endX) / 2;
      const minY = bar1Y - 4;
      const maxY = bar2Y + barHeight + 4;
      const alignLine = `<line x1="${alignX}" y1="${minY}" x2="${alignX}" y2="${maxY}" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3" />`;

      const diffValText = this.diffLabel ? `${this.diffLabel}` : (ch?.target?.diffValue || "?");
      let bracketSvg = "";
      if (p1 > p2) {
        const bracketY = bar1Y - 6;
        bracketSvg = `
          <path d="M ${alignX} ${bracketY} L ${alignX} ${bracketY - 5} L ${midDiffX} ${bracketY - 5} L ${midDiffX} ${bracketY - 9} L ${midDiffX} ${bracketY - 5} L ${endX} ${bracketY - 5} L ${endX} ${bracketY}" fill="none" stroke="#d97706" stroke-width="1.8" />
          <text x="${midDiffX}" y="${bracketY - 12}" text-anchor="middle" font-size="11" font-weight="700" fill="#b45309">Hiệu: ${diffValText}</text>
        `;
      } else {
        const bracketY = bar2Y + barHeight + 6;
        bracketSvg = `
          <path d="M ${alignX} ${bracketY} L ${alignX} ${bracketY + 5} L ${midDiffX} ${bracketY + 5} L ${midDiffX} ${bracketY + 9} L ${midDiffX} ${bracketY + 5} L ${endX} ${bracketY + 5} L ${endX} ${bracketY}" fill="none" stroke="#d97706" stroke-width="1.8" />
          <text x="${midDiffX}" y="${bracketY + 18}" text-anchor="middle" font-size="11" font-weight="700" fill="#b45309">Hiệu: ${diffValText}</text>
        `;
      }
      diffMarkup = `${alignLine}${bracketSvg}`;
    }

    // Ngoặc ôm tổng (chỉ hiển thị khi bài toán có tổng và người học đã nhập nhãn tổng)
    const bracketX = startX + maxLen + 12;
    const bottomY = hasB3 ? (bar3Y + barHeight) : (bar2Y + barHeight);
    const midY = (bar1Y + bottomY) / 2;
    const showTotalBracket = Boolean(ch?.target?.totalValue && this.totalLabel);
    const totalSvg = showTotalBracket
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
        <!-- Đường gióng và ngoặc so sánh Hiệu (Singapore Bar Model) -->
        ${diffMarkup}
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
