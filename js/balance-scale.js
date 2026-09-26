// js/balance-scale.js - Mini-game "Cân Bằng Bí Mật" (Math Balance Scale Engine)
// Giúp Bách rèn luyện tư duy tiền đại số và nguyên lý bớt đều 2 vế qua cân đĩa SVG

import { BALANCE_SCALE_LEVELS, BALANCE_SCALE_CHALLENGES } from "./balance-scale-challenges.js";
export { BALANCE_SCALE_LEVELS, BALANCE_SCALE_CHALLENGES };

export class BalanceScaleSession {
  constructor(initialIndex = 0) {
    this.currentIndex = initialIndex;
    this.solvedIds = new Set();
    this.userInput = null;
    this.isSolved = false;
    this.tiltAngle = 0; // -15 (nghiêng trái/trái nặng hơn) đến +15 (nghiêng phải/phải nặng hơn)
    this.loadChallenge(this.currentIndex);
  }

  loadChallenge(index) {
    this.currentIndex = Math.max(0, Math.min(BALANCE_SCALE_CHALLENGES.length - 1, index));
    this.userInput = null;
    this.isSolved = false;
    this.tiltAngle = 0;
  }

  getCurrentChallenge() {
    return BALANCE_SCALE_CHALLENGES[this.currentIndex];
  }

  checkAnswer(inputVal) {
    const ch = this.getCurrentChallenge();
    const raw = String(inputVal || "").trim().replace(/\./g, "").replace(/,/g, "");
    const num = Number(raw);

    if (Number.isNaN(num) || raw === "") {
      return { isCorrect: false, message: "Bách hãy nhập một số nhé!", tiltAngle: 0 };
    }

    this.userInput = num;
    const sumWeights = (arr) => (arr || []).reduce((acc, w) => acc + w, 0);

    const leftTotal = ch.left.xCount * num + sumWeights(ch.left.weights);
    const rightTotal = ch.right.xCount * num + sumWeights(ch.right.weights);
    const diff = leftTotal - rightTotal;

    if (diff === 0 && num === ch.targetX) {
      this.isSolved = true;
      this.tiltAngle = 0;
      this.solvedIds.add(ch.id);
      return {
        isCorrect: true,
        leftTotal,
        rightTotal,
        tiltAngle: 0,
        message: `🎉 CHÍNH XÁC! Túi X = ${ch.targetX} ${ch.unit} làm cân thăng bằng hoàn hảo!`,
        solution: ch.solution
      };
    }

    // Nếu lệch, tính góc nghiêng trực quan (giới hạn trong [-14, 14] độ)
    // diff > 0 nghĩa là bên trái nặng hơn -> kim nghiêng sang trái (góc âm)
    this.tiltAngle = Math.max(-14, Math.min(14, diff > 0 ? -10 : 10));
    return {
      isCorrect: false,
      leftTotal,
      rightTotal,
      tiltAngle: this.tiltAngle,
      message: diff > 0 
        ? `Đĩa bên trái đang NẶNG HƠN bên phải (${leftTotal} > ${rightTotal})! Cân chưa thăng bằng.`
        : `Đĩa bên phải đang NẶNG HƠN bên trái (${rightTotal} > ${leftTotal})! Cân chưa thăng bằng.`,
      hint: ch.hint
    };
  }

  nextChallenge() {
    if (this.currentIndex < BALANCE_SCALE_CHALLENGES.length - 1) {
      this.loadChallenge(this.currentIndex + 1);
    }
    return this.getCurrentChallenge();
  }

  prevChallenge() {
    if (this.currentIndex > 0) {
      this.loadChallenge(this.currentIndex - 1);
    }
    return this.getCurrentChallenge();
  }

  nextSmartChallenge() {
    const cur = this.getCurrentChallenge();
    const otherLevels = BALANCE_SCALE_CHALLENGES.filter(c => c.level !== cur.level);
    const unsolved = otherLevels.filter(c => !this.solvedIds.has(c.id));
    const pool = unsolved.length > 0 ? unsolved : (otherLevels.length > 0 ? otherLevels : BALANCE_SCALE_CHALLENGES);
    const picked = pool[Math.floor(Math.random() * pool.length)];
    if (picked) {
      this.loadChallenge(picked.index);
    }
    return this.getCurrentChallenge();
  }

  renderSvgMarkup() {
    const ch = this.getCurrentChallenge();
    const svgWidth = 560;
    const svgHeight = 270;

    const angle = this.tiltAngle || 0;
    const rad = (angle * Math.PI) / 180;

    // Chiều dài đòn cân
    const beamHalf = 170;
    const pivotX = svgWidth / 2;
    const pivotY = 110;

    // Tọa độ 2 đầu đòn cân khi nghiêng
    const leftX = pivotX - beamHalf * Math.cos(rad);
    const leftY = pivotY + beamHalf * Math.sin(rad);
    const rightX = pivotX + beamHalf * Math.cos(rad);
    const rightY = pivotY - beamHalf * Math.sin(rad);

    // Chiều dài dây treo đĩa
    const ropeLen = 70;
    const leftPanY = leftY + ropeLen;
    const rightPanY = rightY + ropeLen;

    // Render vật phẩm trên đĩa trái
    const leftItems = [];
    for (let i = 0; i < ch.left.xCount; i++) {
      leftItems.push({ type: "bag", label: "X" });
    }
    for (const w of ch.left.weights) {
      leftItems.push({ type: "weight", label: `${w}${ch.unit}` });
    }

    // Render vật phẩm trên đĩa phải
    const rightItems = [];
    for (let i = 0; i < ch.right.xCount; i++) {
      rightItems.push({ type: "bag", label: "X" });
    }
    for (const w of ch.right.weights) {
      rightItems.push({ type: "weight", label: `${w}${ch.unit}` });
    }

    const renderPanItems = (items, panCenterX, panBaseY) => {
      let markup = "";
      const count = items.length;
      const startX = panCenterX - (count * 34) / 2;
      items.forEach((it, idx) => {
        const x = startX + idx * 36 + 2;
        const y = panBaseY - 32;
        if (it.type === "bag") {
          // Túi bí mật X màu tím thắt nơ vàng
          markup += `
            <g transform="translate(${x}, ${y})">
              <path d="M 6 32 C 2 32, 0 16, 8 10 C 12 4, 18 4, 22 10 C 30 16, 28 32, 24 32 Z" fill="#8b5cf6" stroke="#6d28d9" stroke-width="2" />
              <circle cx="15" cy="8" r="4" fill="#fbbf24" stroke="#d97706" stroke-width="1.5" />
              <text x="15" y="24" text-anchor="middle" font-size="13" font-weight="900" fill="#ffffff">${it.label}</text>
            </g>
          `;
        } else {
          // Quả cân bằng đồng/thép hình trụ có chóp
          markup += `
            <g transform="translate(${x}, ${y})">
              <rect x="2" y="8" width="26" height="24" rx="3" fill="#cbd5e1" stroke="#64748b" stroke-width="2" />
              <rect x="9" y="3" width="12" height="5" rx="2" fill="#94a3b8" stroke="#475569" stroke-width="1.5" />
              <text x="15" y="24" text-anchor="middle" font-size="10" font-weight="800" fill="#1e293b">${it.label}</text>
            </g>
          `;
        }
      });
      return markup;
    };

    return `
      <svg viewBox="0 0 ${svgWidth} ${svgHeight}" class="balance-scale-svg" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mô hình cân đĩa thăng bằng">
        <rect width="100%" height="100%" fill="#f8fafc" rx="12" />

        <!-- Đế cân và trụ đứng -->
        <path d="M ${pivotX - 60} 245 L ${pivotX + 60} 245 L ${pivotX + 40} 225 L ${pivotX - 40} 225 Z" fill="#475569" stroke="#334155" stroke-width="2" />
        <rect x="${pivotX - 7}" y="95" width="14" height="135" rx="3" fill="#64748b" stroke="#334155" stroke-width="2" />

        <!-- Mặt chia độ và kim cân chỉ thăng bằng -->
        <path d="M ${pivotX - 25} 70 A 25 25 0 0 1 ${pivotX + 25} 70 Z" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5" />
        <!-- Kim cân (xoay theo đòn cân) -->
        <line x1="${pivotX}" y1="95" x2="${pivotX - 22 * Math.sin(rad)}" y2="${95 - 22 * Math.cos(rad)}" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" />
        <circle cx="${pivotX}" cy="95" r="5" fill="#ef4444" />

        <!-- Đòn cân xoay -->
        <g>
          <line x1="${leftX}" y1="${leftY}" x2="${rightX}" y2="${rightY}" stroke="#1e293b" stroke-width="6" stroke-linecap="round" />
          <circle cx="${pivotX}" cy="${pivotY}" r="7" fill="#fbbf24" stroke="#d97706" stroke-width="2" />
          <circle cx="${leftX}" cy="${leftY}" r="4" fill="#64748b" />
          <circle cx="${rightX}" cy="${rightY}" r="4" fill="#64748b" />
        </g>

        <!-- Dây treo và Đĩa cân trái -->
        <g>
          <line x1="${leftX}" y1="${leftY}" x2="${leftX - 35}" y2="${leftPanY}" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="2,2" />
          <line x1="${leftX}" y1="${leftY}" x2="${leftX + 35}" y2="${leftPanY}" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="2,2" />
          <!-- Đĩa trái -->
          <ellipse cx="${leftX}" cy="${leftPanY}" rx="48" ry="12" fill="#e2e8f0" stroke="#64748b" stroke-width="2.5" />
          <!-- Vật phẩm đĩa trái -->
          ${renderPanItems(leftItems, leftX, leftPanY)}
        </g>

        <!-- Dây treo và Đĩa cân phải -->
        <g>
          <line x1="${rightX}" y1="${rightY}" x2="${rightX - 35}" y2="${rightPanY}" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="2,2" />
          <line x1="${rightX}" y1="${rightY}" x2="${rightX + 35}" y2="${rightPanY}" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="2,2" />
          <!-- Đĩa phải -->
          <ellipse cx="${rightX}" cy="${rightPanY}" rx="48" ry="12" fill="#e2e8f0" stroke="#64748b" stroke-width="2.5" />
          <!-- Vật phẩm đĩa phải -->
          ${renderPanItems(rightItems, rightX, rightPanY)}
        </g>

        <!-- Nhãn phụ chú thích đĩa -->
        <text x="${leftX}" y="${leftPanY + 24}" text-anchor="middle" font-size="11" font-weight="700" fill="#64748b">VẾ TRÁI</text>
        <text x="${rightX}" y="${rightPanY + 24}" text-anchor="middle" font-size="11" font-weight="700" fill="#64748b">VẾ PHẢI</text>
      </svg>
    `;
  }
}

import { DUAL_SCALE_CHALLENGES } from "./balance-scale-dual-challenges.js";
import { DETECTIVE_PUZZLES, DetectiveScaleSession } from "./balance-scale-detective.js";
export { DUAL_SCALE_CHALLENGES, DETECTIVE_PUZZLES, DetectiveScaleSession };

export class DualScaleSession {
  constructor(initialIndex = 0) {
    this.currentIndex = initialIndex;
    this.solvedIds = new Set();
    this.userX = null;
    this.userY = null;
    this.isSolved = false;
    this.tiltA = 0;
    this.tiltB = 0;
    this.loadChallenge(this.currentIndex);
  }

  loadChallenge(index) {
    this.currentIndex = Math.max(0, Math.min(DUAL_SCALE_CHALLENGES.length - 1, index));
    this.userX = null;
    this.userY = null;
    this.isSolved = false;
    this.tiltA = 0;
    this.tiltB = 0;
  }

  getCurrentChallenge() {
    return DUAL_SCALE_CHALLENGES[this.currentIndex];
  }

  checkDualAnswer(inputX, inputY) {
    const ch = this.getCurrentChallenge();
    const rawX = String(inputX || "").trim().replace(/\./g, "").replace(/,/g, "");
    const rawY = String(inputY || "").trim().replace(/\./g, "").replace(/,/g, "");
    const numX = Number(rawX);
    const numY = Number(rawY);

    if (Number.isNaN(numX) || Number.isNaN(numY) || rawX === "" || rawY === "") {
      return { isCorrect: false, message: "Bách hãy nhập đủ cả giá trị Túi Vàng (X) và Túi Xanh (Y) nhé!", tiltA: 0, tiltB: 0 };
    }

    this.userX = numX;
    this.userY = numY;
    const sumW = arr => (arr || []).reduce((a, b) => a + b, 0);

    const leftA = (ch.scaleA.left.xCount || 0) * numX + (ch.scaleA.left.yCount || 0) * numY + sumW(ch.scaleA.left.weights);
    const rightA = (ch.scaleA.right.xCount || 0) * numX + (ch.scaleA.right.yCount || 0) * numY + sumW(ch.scaleA.right.weights);
    const diffA = leftA - rightA;

    const leftB = (ch.scaleB.left.xCount || 0) * numX + (ch.scaleB.left.yCount || 0) * numY + sumW(ch.scaleB.left.weights);
    const rightB = (ch.scaleB.right.xCount || 0) * numX + (ch.scaleB.right.yCount || 0) * numY + sumW(ch.scaleB.right.weights);
    const diffB = leftB - rightB;

    this.tiltA = Math.max(-12, Math.min(12, diffA > 0 ? -9 : (diffA < 0 ? 9 : 0)));
    this.tiltB = Math.max(-12, Math.min(12, diffB > 0 ? -9 : (diffB < 0 ? 9 : 0)));

    if (diffA === 0 && diffB === 0 && numX === ch.targetX && numY === ch.targetY) {
      this.isSolved = true;
      this.solvedIds.add(ch.id);
      return {
        isCorrect: true,
        tiltA: 0,
        tiltB: 0,
        message: `🎉 XUẤT SẮC! Túi Vàng X = ${ch.targetX} ${ch.unit} và Túi Xanh Y = ${ch.targetY} ${ch.unit} làm CẢ HAI CÂN cùng thăng bằng!`,
        solution: ch.solution,
        scaleC: ch.scaleC
      };
    }

    let detail = "";
    if (diffA !== 0 && diffB === 0) detail = "Cân B đã thăng bằng nhưng Cân A bị lệch!";
    else if (diffA === 0 && diffB !== 0) detail = "Cân A đã thăng bằng nhưng Cân B bị lệch!";
    else detail = "Cả hai cân A và B đều chưa thăng bằng!";

    return {
      isCorrect: false,
      tiltA: this.tiltA,
      tiltB: this.tiltB,
      message: `${detail} Bách hãy thử dùng phương pháp cộng/trừ 2 cân hoặc thế X theo Y nhé!`,
      hint: ch.hint
    };
  }

  nextChallenge() {
    if (this.currentIndex < DUAL_SCALE_CHALLENGES.length - 1) {
      this.loadChallenge(this.currentIndex + 1);
    }
    return this.getCurrentChallenge();
  }

  prevChallenge() {
    if (this.currentIndex > 0) {
      this.loadChallenge(this.currentIndex - 1);
    }
    return this.getCurrentChallenge();
  }

  nextSmartChallenge() {
    const cur = this.getCurrentChallenge();
    const unsolved = DUAL_SCALE_CHALLENGES.filter(c => !this.solvedIds.has(c.id) && c.id !== cur.id);
    const pool = unsolved.length > 0 ? unsolved : DUAL_SCALE_CHALLENGES;
    const picked = pool[Math.floor(Math.random() * pool.length)];
    if (picked) this.loadChallenge(picked.index);
    return this.getCurrentChallenge();
  }

  renderDualSvgMarkup() {
    const ch = this.getCurrentChallenge();
    const svgWidth = 620;
    const svgHeight = 230;

    const renderSingleSubScale = (scaleData, tilt, originX, label) => {
      const rad = (tilt * Math.PI) / 180;
      const pivotX = originX;
      const pivotY = 95;
      const beamHalf = 110;

      const leftX = pivotX - beamHalf * Math.cos(rad);
      const leftY = pivotY + beamHalf * Math.sin(rad);
      const rightX = pivotX + beamHalf * Math.cos(rad);
      const rightY = pivotY - beamHalf * Math.sin(rad);

      const rope = 55;
      const leftPanY = leftY + rope;
      const rightPanY = rightY + rope;

      const renderItems = (conf) => {
        let items = [];
        for (let i = 0; i < (conf.xCount || 0); i++) items.push({ type: "x" });
        for (let i = 0; i < (conf.yCount || 0); i++) items.push({ type: "y" });
        for (const w of (conf.weights || [])) items.push({ type: "w", val: w });

        return items.map((it, idx) => {
          const off = (idx - (items.length - 1) / 2) * 22;
          if (it.type === "x") {
            return `
              <g transform="translate(${off}, -16)">
                <path d="M 4 20 C 1 20, 0 10, 5 6 C 8 2, 12 2, 15 6 C 20 10, 19 20, 16 20 Z" fill="#f59e0b" stroke="#d97706" stroke-width="1.5" />
                <circle cx="10" cy="5" r="2.5" fill="#fef08a" />
                <text x="10" y="15" text-anchor="middle" font-size="9" font-weight="900" fill="#ffffff">X</text>
              </g>
            `;
          } else if (it.type === "y") {
            return `
              <g transform="translate(${off}, -16)">
                <path d="M 4 20 C 1 20, 0 10, 5 6 C 8 2, 12 2, 15 6 C 20 10, 19 20, 16 20 Z" fill="#06b6d4" stroke="#0891b2" stroke-width="1.5" />
                <circle cx="10" cy="5" r="2.5" fill="#cffafe" />
                <text x="10" y="15" text-anchor="middle" font-size="9" font-weight="900" fill="#ffffff">Y</text>
              </g>
            `;
          } else {
            return `
              <g transform="translate(${off}, -14)">
                <rect x="0" y="4" width="20" height="15" rx="2" fill="#cbd5e1" stroke="#64748b" stroke-width="1.2" />
                <text x="10" y="15" text-anchor="middle" font-size="8" font-weight="800" fill="#0f172a">${it.val}</text>
              </g>
            `;
          }
        }).join("");
      };

      return `
        <!-- Trụ cân ${label} -->
        <rect x="${pivotX - 35}" y="200" width="70" height="10" rx="3" fill="#475569" />
        <rect x="${pivotX - 5}" y="95" width="10" height="110" rx="2" fill="#64748b" />
        <circle cx="${pivotX}" cy="${pivotY}" r="7" fill="#0284c7" />

        <!-- Đòn cân ${label} -->
        <line x1="${leftX}" y1="${leftY}" x2="${rightX}" y2="${rightY}" stroke="#1e293b" stroke-width="4.5" stroke-linecap="round" />

        <!-- Đĩa trái -->
        <line x1="${leftX}" y1="${leftY}" x2="${leftX - 25}" y2="${leftPanY}" stroke="#94a3b8" stroke-width="1.2" />
        <line x1="${leftX}" y1="${leftY}" x2="${leftX + 25}" y2="${leftPanY}" stroke="#94a3b8" stroke-width="1.2" />
        <ellipse cx="${leftX}" cy="${leftPanY}" rx="34" ry="8" fill="#e2e8f0" stroke="#475569" stroke-width="1.8" />
        <g transform="translate(${leftX}, ${leftPanY})">${renderItems(scaleData.left)}</g>

        <!-- Đĩa phải -->
        <line x1="${rightX}" y1="${rightY}" x2="${rightX - 25}" y2="${rightPanY}" stroke="#94a3b8" stroke-width="1.2" />
        <line x1="${rightX}" y1="${rightY}" x2="${rightX + 25}" y2="${rightPanY}" stroke="#94a3b8" stroke-width="1.2" />
        <ellipse cx="${rightX}" cy="${rightPanY}" rx="34" ry="8" fill="#e2e8f0" stroke="#475569" stroke-width="1.8" />
        <g transform="translate(${rightX}, ${rightPanY})">${renderItems(scaleData.right)}</g>

        <!-- Nhãn cân -->
        <rect x="${pivotX - 35}" y="22" width="70" height="20" rx="6" fill="#1e293b" />
        <text x="${pivotX}" y="36" text-anchor="middle" font-size="11" font-weight="800" fill="#f8fafc">${label}</text>
      `;
    };

    return `
      <svg viewBox="0 0 ${svgWidth} ${svgHeight}" class="balance-scale-svg" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mô hình 2 cân đĩa liên hoàn">
        <rect width="100%" height="100%" fill="#f8fafc" rx="14" />
        <line x1="310" y1="20" x2="310" y2="210" stroke="#e2e8f0" stroke-width="1.5" stroke-dasharray="4,4" />
        ${renderSingleSubScale(ch.scaleA, this.tiltA, 155, "CÂN A")}
        ${renderSingleSubScale(ch.scaleB, this.tiltB, 465, "CÂN B")}
      </svg>
    `;
  }
}

