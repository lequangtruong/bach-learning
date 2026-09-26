// js/spatial-3d.js - Engine tính toán và render mô hình không gian 3D & Net gấp hộp
import { SPATIAL_3D_CHALLENGES } from "./spatial-3d-challenges.js";
export { SPATIAL_3D_CHALLENGES };

/**
 * Render mô hình khối lập phương 3D theo phép chiếu trục đo Isometric (SVG)
 * Sử dụng thuật toán Painter (sắp xếp độ sâu X + Y + Z) để hiển thị mặt trước đè mặt sau chính xác.
 */
export function renderIsometricCubesSvg(cubes = [], { width = 400, height = 300, size = 32 } = {}) {
  if (!cubes || cubes.length === 0) {
    return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><text x="50%" y="50%" text-anchor="middle" fill="#666">Chưa có dữ liệu khối 3D</text></svg>`;
  }

  // Tọa độ tâm chiếu
  const originX = width / 2;
  const originY = height / 2 + 50;

  // Góc nghiêng trục đo (30 độ)
  const cos30 = Math.cos(Math.PI / 6);
  const sin30 = Math.sin(Math.PI / 6);

  // Sắp xếp các khối theo thứ tự vẽ từ sau ra trước: ưu tiên Z thấp, rồi X+Y thấp vẽ trước
  const sorted = [...cubes].sort((a, b) => {
    const depthA = (a[0] + a[1]) + a[2] * 0.1;
    const depthB = (b[0] + b[1]) + b[2] * 0.1;
    return depthA - depthB;
  });

  // Chuyển đổi tọa độ 3D (x, y, z) sang 2D màn hình
  function toScreen(x, y, z) {
    const sx = originX + (x - y) * size * cos30;
    const sy = originY + (x + y) * size * sin30 - z * size;
    return [Math.round(sx * 10) / 10, Math.round(sy * 10) / 10];
  }

  let pathsHtml = "";

  for (let i = 0; i < sorted.length; i++) {
    const [x, y, z] = sorted[i];

    // 8 đỉnh của khối lập phương đơn vị
    const p000 = toScreen(x, y, z);
    const p100 = toScreen(x + 1, y, z);
    const p110 = toScreen(x + 1, y + 1, z);
    const p010 = toScreen(x, y + 1, z);

    const p001 = toScreen(x, y, z + 1);
    const p101 = toScreen(x + 1, y, z + 1);
    const p111 = toScreen(x + 1, y + 1, z + 1);
    const p011 = toScreen(x, y + 1, z + 1);

    // Mặt TRÊN (Top Face): [p001, p101, p111, p011] - Sáng nhất
    const topPts = `${p001.join(",")} ${p101.join(",")} ${p111.join(",")} ${p011.join(",")}`;
    // Mặt TRÁI (Left/Front Face): [p010, p110, p111, p011]
    const leftPts = `${p010.join(",")} ${p110.join(",")} ${p111.join(",")} ${p011.join(",")}`;
    // Mặt PHẢI (Right/Front Face): [p100, p110, p111, p101]
    const rightPts = `${p100.join(",")} ${p110.join(",")} ${p111.join(",")} ${p101.join(",")}`;

    pathsHtml += `
      <g class="cube-unit" data-cube="${x},${y},${z}">
        <!-- Mặt trái (ánh sáng vừa) -->
        <polygon points="${leftPts}" fill="#6366f1" stroke="#312e81" stroke-width="1.5" stroke-linejoin="round" opacity="0.95" />
        <!-- Mặt phải (bóng tối hơn) -->
        <polygon points="${rightPts}" fill="#4338ca" stroke="#312e81" stroke-width="1.5" stroke-linejoin="round" opacity="0.95" />
        <!-- Mặt trên (sáng nhất) -->
        <polygon points="${topPts}" fill="#a5b4fc" stroke="#312e81" stroke-width="1.5" stroke-linejoin="round" />
        <circle cx="${(p001[0]+p111[0])/2}" cy="${(p001[1]+p111[1])/2}" r="3" fill="#ffffff" opacity="0.6" />
      </g>
    `;
  }

  return `
    <svg width="100%" height="${height}" viewBox="0 0 ${width} ${height}" style="background:linear-gradient(180deg, rgba(30,27,75,0.05) 0%, rgba(30,27,75,0.12) 100%); border-radius:12px; display:block">
      <defs>
        <filter id="cubeDropShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" flood-opacity="0.15" />
        </filter>
      </defs>
      <!-- Lưới trục tọa độ nhẹ -->
      <line x1="${originX - 160}" y1="${originY + 160*sin30/cos30}" x2="${originX}" y2="${originY}" stroke="rgba(99,102,241,0.2)" stroke-dasharray="4,4" />
      <line x1="${originX + 160}" y1="${originY + 160*sin30/cos30}" x2="${originX}" y2="${originY}" stroke="rgba(99,102,241,0.2)" stroke-dasharray="4,4" />
      <!-- Các khối lập phương -->
      ${pathsHtml}
    </svg>
  `;
}

/**
 * Render tấm trải phẳng 2D (Net) của khối lập phương
 */
export function renderCubeNetSvg(challenge, { width = 400, height = 260 } = {}) {
  const cellSize = 42;
  const startX = width / 2 - cellSize / 2;
  const startY = 30;

  // Dạng chữ thập chuẩn 1-4-1
  // Hàng 0: Top (2) tại x=0, y=0
  // Hàng 1: Left (3) tại x=-1, Center (1) tại x=0, Right (5) tại x=1, FarBottom (6) tại x=2
  // Hàng 2: Bottom (4) tại x=0
  const layoutFaces = [
    { label: "2", x: 0, y: 0, bg: "#c7d2fe" },
    { label: "3", x: -1, y: 1, bg: "#e0e7ff" },
    { label: "1", x: 0, y: 1, bg: "#818cf8", isCenter: true },
    { label: "5", x: 1, y: 1, bg: "#e0e7ff" },
    { label: "6", x: 2, y: 1, bg: "#e0e7ff" },
    { label: "4", x: 0, y: 2, bg: "#c7d2fe" }
  ];

  let rectsHtml = "";
  for (const f of layoutFaces) {
    const rx = startX + f.x * cellSize;
    const ry = startY + f.y * cellSize;
    rectsHtml += `
      <g>
        <rect x="${rx}" y="${ry}" width="${cellSize}" height="${cellSize}" fill="${f.bg}" stroke="#3730a3" stroke-width="2" rx="4" />
        <text x="${rx + cellSize/2}" y="${ry + cellSize/2 + 6}" font-size="18" font-weight="700" text-anchor="middle" fill="#1e1b4b">${f.label}</text>
      </g>
    `;
  }

  return `
    <svg width="100%" height="${height}" viewBox="0 0 ${width} ${height}" style="background:rgba(99,102,241,0.04); border-radius:12px; display:block">
      <g transform="translate(0, 10)">
        ${rectsHtml}
      </g>
      <text x="50%" y="${height - 20}" font-size="13" font-weight="600" text-anchor="middle" fill="var(--muted, #64748b)">
        Tấm bìa trải phẳng 6 mặt hình lập phương (Gấp theo các đường viền)
      </text>
    </svg>
  `;
}

/**
 * Phiên tương tác Game 6: Spatial3DSession
 */
export class Spatial3DSession {
  constructor(initialIndex = 0) {
    this.currentIndex = Math.max(0, Math.min(initialIndex, SPATIAL_3D_CHALLENGES.length - 1));
    this.selectedOption = null;
    this.isAnswerChecked = false;
    this.isCorrect = false;
  }

  getCurrentChallenge() {
    return SPATIAL_3D_CHALLENGES[this.currentIndex];
  }

  selectOption(opt) {
    this.selectedOption = opt;
    this.isAnswerChecked = false;
  }

  checkAnswer() {
    const ch = this.getCurrentChallenge();
    if (this.selectedOption === null || this.selectedOption === undefined) {
      return { ok: false, error: "Em chưa chọn đáp án nào!" };
    }

    const matches = String(this.selectedOption).trim() === String(ch.correctAnswer).trim();
    this.isAnswerChecked = true;
    this.isCorrect = matches;

    return {
      ok: true,
      isCorrect: matches,
      correctAnswer: ch.correctAnswer,
      explanation: ch.explanation
    };
  }

  nextChallenge() {
    if (this.currentIndex < SPATIAL_3D_CHALLENGES.length - 1) {
      this.currentIndex++;
      this.selectedOption = null;
      this.isAnswerChecked = false;
      this.isCorrect = false;
    }
  }

  prevChallenge() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.selectedOption = null;
      this.isAnswerChecked = false;
      this.isCorrect = false;
    }
  }

  setChallengeIndex(idx) {
    if (idx >= 0 && idx < SPATIAL_3D_CHALLENGES.length) {
      this.currentIndex = idx;
      this.selectedOption = null;
      this.isAnswerChecked = false;
      this.isCorrect = false;
    }
  }

  renderSvgMarkup() {
    const ch = this.getCurrentChallenge();
    if (ch.mode === "cube-nets") {
      return renderCubeNetSvg(ch);
    }
    return renderIsometricCubesSvg(ch.cubes);
  }
}
