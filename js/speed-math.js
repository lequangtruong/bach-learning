// js/speed-math.js - Mini-game "Đấu tính nhẩm 90 giây" (Speed Math Sprint)
// Rèn luyện phản xạ tính nhẩm có chiến lược cho Bách trên iPad

// --- Helper hàm random số nguyên trong đoạn [min, max] ---
const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// --- 1. NHIỀU SỐ: CỘNG NHẨM THUẬN TIỆN (3 - 4 SỐ HẠNG) ---
function generateMultiAdd3(rand) {
  const pairSums = [100, 200, 300, 400, 500];
  const pairSum = pairSums[rand(0, pairSums.length - 1)];
  const lastDigit = rand(1, 9);
  const a = rand(1, Math.floor(pairSum / 10) - 2) * 10 + lastDigit;
  const c = pairSum - a;
  const b = rand(15, 250);
  const order = rand(1, 3);
  let prompt, answer, strategy;
  if (order === 1) {
    prompt = `${a} + ${b} + ${c}`;
    answer = pairSum + b;
    strategy = `Nhóm thuận tiện: (${a} + ${c}) + ${b} = ${pairSum} + ${b} = ${answer}`;
  } else if (order === 2) {
    prompt = `${b} + ${a} + ${c}`;
    answer = pairSum + b;
    strategy = `Nhóm thuận tiện: ${b} + (${a} + ${c}) = ${b} + ${pairSum} = ${answer}`;
  } else {
    prompt = `${a} + ${c} + ${b}`;
    answer = pairSum + b;
    strategy = `Cộng số tròn trước: (${a} + ${c}) + ${b} = ${pairSum} + ${b} = ${answer}`;
  }
  return { prompt, answer, strategy };
}

function generateMultiAdd4(rand) {
  const s1 = rand(1, 4) * 100;
  const s2 = rand(1, 4) * 100;
  const a = rand(12, s1 - 12);
  const c = s1 - a;
  const b = rand(12, s2 - 12);
  const d = s2 - b;
  const prompt = `${a} + ${b} + ${c} + ${d}`;
  const answer = s1 + s2;
  const strategy = `Nhóm 2 cặp tròn: (${a} + ${c}) + (${b} + ${d}) = ${s1} + ${s2} = ${answer}`;
  return { prompt, answer, strategy };
}

function generateMultiSub(rand) {
  const sumBC = rand(2, 6) * 100;
  const b = rand(25, sumBC - 25);
  const c = sumBC - b;
  const a = rand(sumBC + 50, sumBC + 500);
  const mode = rand(1, 2);
  if (mode === 1) {
    const prompt = `${a} − ${b} − ${c}`;
    const answer = a - sumBC;
    const strategy = `Trừ một tổng: ${a} − (${b} + ${c}) = ${a} − ${sumBC} = ${answer}`;
    return { prompt, answer, strategy };
  } else {
    const prompt = `${a} − (${b} + ${c})`;
    const answer = a - sumBC;
    const strategy = `Tính ngoặc trước: ${a} − ${sumBC} = ${answer}`;
    return { prompt, answer, strategy };
  }
}

// --- 2. NHIỀU SỐ: NHÂN NHIỀU THỪA SỐ (CẶP SỐ VÀNG 3 - 4 THỪA SỐ) ---
function generateMultiMul3(rand, maxA = 9) {
  const a = rand(3, maxA);
  const prompt = `2 × ${a} × 5`;
  const answer = 10 * a;
  const strategy = `Nhóm cặp số vàng: (2 × 5) × ${a} = 10 × ${a} = ${answer}`;
  return { prompt, answer, strategy };
}

function generateMultiMulGolden(rand) {
  const mode = rand(1, 3);
  if (mode === 1) {
    const a = rand(11, 48);
    return {
      prompt: `4 × ${a} × 25`,
      answer: 100 * a,
      strategy: `Nhóm cặp số vàng: (4 × 25) × ${a} = 100 × ${a} = ${100 * a}`
    };
  }
  if (mode === 2) {
    const a = rand(12, 48);
    return {
      prompt: `5 × ${a} × 20`,
      answer: 100 * a,
      strategy: `Nhóm (5 × 20) × ${a} = 100 × ${a} = ${100 * a}`
    };
  }
  const a = rand(14, 48);
  return {
    prompt: `2 × ${a} × 50`,
    answer: 100 * a,
    strategy: `Nhóm (2 × 50) × ${a} = 100 × ${a} = ${100 * a}`
  };
}

function generateMultiMul4Golden(rand) {
  const mode = rand(1, 3);
  if (mode === 1) {
    const a = rand(6, 24);
    return {
      prompt: `4 × ${a} × 25 × 2`,
      answer: 100 * (a * 2),
      strategy: `Nhóm (4 × 25) × (${a} × 2) = 100 × ${a * 2} = ${100 * (a * 2)}`
    };
  }
  if (mode === 2) {
    const a = rand(3, 14);
    return {
      prompt: `8 × ${a} × 125 × 2`,
      answer: 1000 * (a * 2),
      strategy: `Nhóm (8 × 125) × (${a} × 2) = 1.000 × ${a * 2} = ${1000 * (a * 2)}`
    };
  }
  const a = rand(3, 16);
  return {
    prompt: `25 × ${a} × 4 × 5`,
    answer: 100 * (a * 5),
    strategy: `Nhóm (25 × 4) × (${a} × 5) = 100 × ${a * 5} = ${100 * (a * 5)}`
  };
}

// --- 3. NHIỀU SỐ: PHÂN PHỐI VÀ CHIA PHỨC HỢP (3 - 4 SỐ HẠNG) ---
function generateDistributive3Term(rand) {
  const a = rand(12, 85);
  const b = rand(15, 75);
  const c = 99 - b;
  const prompt = `${a} × ${b} + ${a} × ${c} + ${a}`;
  const answer = a * 100;
  const strategy = `Rút ${a} chung: ${a} × (${b} + ${c} + 1) = ${a} × 100 = ${answer}`;
  return { prompt, answer, strategy };
}

function generateMultiDivComposite(rand) {
  const mode = rand(1, 3);
  if (mode === 1) {
    const c = [4, 6, 8, 9, 12][rand(0, 4)];
    const q = rand(2, 6);
    const a = c * q;
    const b = [25, 50, 125, 20][rand(0, 3)];
    return {
      prompt: `(${a} × ${b}) : ${c}`,
      answer: q * b,
      strategy: `Chia trước nhân sau: (${a} : ${c}) × ${b} = ${q} × ${b} = ${q * b}`
    };
  }
  if (mode === 2) {
    const b = [25, 20, 10, 5][rand(0, 3)];
    const c = b === 25 ? 4 : (b === 20 ? 5 : (b === 10 ? 10 : 10));
    const inner = b * c;
    const q = rand(12, 85);
    const a = q * inner;
    return {
      prompt: `${a} : (${b} × ${c})`,
      answer: q,
      strategy: `Tính trong ngoặc trước: ${a} : ${inner} = ${q}`
    };
  }
  const a = rand(2, 8) * 10;
  return {
    prompt: `(${a} × 25) : (5 × 5)`,
    answer: a,
    strategy: `(5 × 5) = 25: (${a} × 25) : 25 = ${a}`
  };
}

// --- 4. NHIỀU ĐẠI LƯỢNG: ĐỔI VÀ TÍNH TOÁN ĐƠN VỊ ĐO LƯỜNG LỚP 4 ---
function generateMassProblem(rand, level = 1) {
  if (level === 1) {
    const mode = rand(1, 4);
    if (mode === 1) {
      const a = rand(1, 6);
      const b = rand(1, 8) * 10;
      const c = 100 - b;
      return {
        prompt: `${a} tạ ${b} kg + ${c} kg = ? kg`,
        answer: a * 100 + 100,
        strategy: `Đổi ${a} tạ = ${a * 100} kg. Ta có: ${a * 100} + ${b} + ${c} = ${a * 100 + 100} kg`
      };
    }
    if (mode === 2) {
      const sub = rand(1, 8) * 100;
      return {
        prompt: `1 tấn − ${sub} kg = ? kg`,
        answer: 1000 - sub,
        strategy: `1 tấn = 1.000 kg. Lấy 1.000 − ${sub} = ${1000 - sub} kg`
      };
    }
    if (mode === 3) {
      const a = rand(2, 8);
      const b = rand(1, 9);
      return {
        prompt: `${a} yến ${b} kg = ? kg`,
        answer: a * 10 + b,
        strategy: `1 yến = 10 kg. Ta có: ${a * 10} + ${b} = ${a * 10 + b} kg`
      };
    }
    const a = rand(2, 8);
    return {
      prompt: `${a} tạ = ? yến`,
      answer: a * 10,
      strategy: `1 tạ = 10 yến. Ta có: ${a} × 10 = ${a * 10} yến`
    };
  }

  // Level 2+
  const mode = rand(1, 4);
  if (mode === 1) {
    const a = rand(2, 8);
    const b = rand(1, 9);
    return {
      prompt: `${a} tấn ${b} tạ = ? tạ`,
      answer: a * 10 + b,
      strategy: `1 tấn = 10 tạ. Ta có: ${a * 10} + ${b} = ${a * 10 + b} tạ`
    };
  }
  if (mode === 2) {
    const a = rand(1, 4);
    const sub = [150, 250, 350, 450, 550, 750][rand(0, 5)];
    return {
      prompt: `${a} tấn − ${sub} kg = ? kg`,
      answer: a * 1000 - sub,
      strategy: `${a} tấn = ${a * 1000} kg. Ta có: ${a * 1000} − ${sub} = ${a * 1000 - sub} kg`
    };
  }
  if (mode === 3) {
    const halfs = [{ p: "1/2 tạ", kg: 50 }, { p: "1/4 tạ", kg: 25 }, { p: "1/2 tấn", kg: 500 }, { p: "1/4 tấn", kg: 250 }];
    const h = halfs[rand(0, halfs.length - 1)];
    const extra = rand(1, 9) * 10;
    return {
      prompt: `${h.p} + ${extra} kg = ? kg`,
      answer: h.kg + extra,
      strategy: `${h.p} = ${h.kg} kg. Lấy ${h.kg} + ${extra} = ${h.kg + extra} kg`
    };
  }
  const q = rand(1, 4) * 100 + rand(1, 9) * 10;
  const d = [2, 5][rand(0, 1)];
  const total = q * d;
  const ta = Math.floor(total / 100);
  const kg = total % 100;
  const promptStr = kg === 0 ? `${ta} tạ : ${d} = ? kg` : `(${ta} tạ ${kg} kg) : ${d} = ? kg`;
  return {
    prompt: promptStr,
    answer: q,
    strategy: `Đổi về kg: ${total} kg : ${d} = ${q} kg`
  };
}

function generateAreaProblem(rand, level = 2) {
  if (level <= 2) {
    const mode = rand(1, 5);
    if (mode === 1) {
      const a = rand(2, 8);
      const b = rand(11, 89);
      return {
        prompt: `${a} m² ${b} dm² = ? dm²`,
        answer: a * 100 + b,
        strategy: `1 m² = 100 dm². Lấy ${a} × 100 + ${b} = ${a * 100 + b} dm²`
      };
    }
    if (mode === 2) {
      const a = rand(3, 8);
      const sub = rand(1, 4) * 50;
      return {
        prompt: `${a} m² − ${sub} dm² = ? dm²`,
        answer: a * 100 - sub,
        strategy: `${a} m² = ${a * 100} dm². Lấy ${a * 100} − ${sub} = ${a * 100 - sub} dm²`
      };
    }
    if (mode === 3) {
      const a = rand(2, 9);
      const b = rand(5, 85);
      return {
        prompt: `${a} dm² ${b} cm² = ? cm²`,
        answer: a * 100 + b,
        strategy: `1 dm² = 100 cm². Lấy ${a} × 100 + ${b} = ${a * 100 + b} cm²`
      };
    }
    if (mode === 4) {
      const fractions = [
        { p: "1/2 m²", val: 50, u: "dm²", exp: "100 : 2 = 50" },
        { p: "1/4 m²", val: 25, u: "dm²", exp: "100 : 4 = 25" },
        { p: "1/2 dm²", val: 50, u: "cm²", exp: "100 : 2 = 50" },
        { p: "1/4 dm²", val: 25, u: "cm²", exp: "100 : 4 = 25" }
      ];
      const f = fractions[rand(0, fractions.length - 1)];
      return {
        prompt: `${f.p} = ? ${f.u}`,
        answer: f.val,
        strategy: `${f.p} = ${f.exp} ${f.u}`
      };
    }
    const a = rand(2, 6);
    const bHundreds = rand(2, 5);
    return {
      prompt: `${a} m² + ${bHundreds * 100} dm² = ? m²`,
      answer: a + bHundreds,
      strategy: `${bHundreds * 100} dm² = ${bHundreds} m². Lấy ${a} + ${bHundreds} = ${a + bHundreds} m²`
    };
  }

  // Level 3+
  const mode = rand(1, 4);
  if (mode === 1) {
    const a = rand(1, 5);
    const c = rand(1, 4);
    const b = rand(15, 85);
    const d = 100 - b;
    return {
      prompt: `${a} m² ${b} dm² + ${c} m² ${d} dm² = ? m²`,
      answer: a + c + 1,
      strategy: `Nhóm dm²: ${b} + ${d} = 100 dm² = 1 m². Tổng = ${a} + ${c} + 1 = ${a + c + 1} m²`
    };
  }
  if (mode === 2) {
    const a = rand(2, 7);
    const b = rand(15, 85);
    const c = 100 - b;
    return {
      prompt: `${a} dm² ${b} cm² + ${c} cm² = ? dm²`,
      answer: a + 1,
      strategy: `${b} + ${c} = 100 cm² = 1 dm². Lấy ${a} + 1 = ${a + 1} dm²`
    };
  }
  if (mode === 3) {
    const b1 = rand(15, 45);
    const b2 = rand(15, 45);
    const sumB = b1 + b2;
    return {
      prompt: `1 m² − (${b1} dm² + ${b2} dm²) = ? dm²`,
      answer: 100 - sumB,
      strategy: `1 m² = 100 dm². Lấy 100 − ${sumB} = ${100 - sumB} dm²`
    };
  }
  const factor = rand(4, 9);
  const q = rand(4, 9) * 10;
  const totalDm2 = factor * q;
  const m2 = Math.floor(totalDm2 / 100);
  const dm2 = totalDm2 % 100;
  const promptStr = dm2 === 0 ? `${m2} m² : ${factor} = ? dm²` : `(${m2} m² ${dm2} dm²) : ${factor} = ? dm²`;
  return {
    prompt: promptStr,
    answer: q,
    strategy: `Đổi về dm²: ${totalDm2} dm² : ${factor} = ${q} dm²`
  };
}

function generateTimeProblem(rand, level = 1) {
  if (level === 1) {
    const mode = rand(1, 4);
    if (mode === 1) {
      const h = rand(1, 3);
      const m = rand(1, 5) * 10;
      return {
        prompt: `${h} giờ ${m} phút = ? phút`,
        answer: h * 60 + m,
        strategy: `${h} giờ = ${h * 60} phút. Lấy ${h * 60} + ${m} = ${h * 60 + m} phút`
      };
    }
    if (mode === 2) {
      const m = rand(1, 3);
      const s = rand(1, 5) * 10;
      return {
        prompt: `${m} phút ${s} giây = ? giây`,
        answer: m * 60 + s,
        strategy: `${m} phút = ${m * 60} giây. Lấy ${m * 60} + ${s} = ${m * 60 + s} giây`
      };
    }
    if (mode === 3) {
      const fractions = [
        { p: "1/2 ngày", val: 12, u: "giờ", exp: "24 : 2 = 12" },
        { p: "1/3 ngày", val: 8, u: "giờ", exp: "24 : 3 = 8" },
        { p: "1/4 ngày", val: 6, u: "giờ", exp: "24 : 4 = 6" },
        { p: "1/2 giờ", val: 30, u: "phút", exp: "60 : 2 = 30" },
        { p: "1/4 giờ", val: 15, u: "phút", exp: "60 : 4 = 15" }
      ];
      const f = fractions[rand(0, fractions.length - 1)];
      return {
        prompt: `${f.p} = ? ${f.u}`,
        answer: f.val,
        strategy: `${f.p} = ${f.exp} ${f.u}`
      };
    }
    const c = rand(2, 5);
    return {
      prompt: `${c} thế kỷ = ? năm`,
      answer: c * 100,
      strategy: `1 thế kỷ = 100 năm. Lấy ${c} × 100 = ${c * 100} năm`
    };
  }

  // Level 2+
  const mode = rand(1, 4);
  if (mode === 1) {
    const fractions = [
      { p: "1/4 thế kỷ", val: 25, exp: "100 : 4 = 25" },
      { p: "1/5 thế kỷ", val: 20, exp: "100 : 5 = 20" },
      { p: "1/2 thế kỷ", val: 50, exp: "100 : 2 = 50" }
    ];
    const f = fractions[rand(0, fractions.length - 1)];
    const extraYears = rand(1, 9);
    return {
      prompt: `${f.p} + ${extraYears} năm = ? năm`,
      answer: f.val + extraYears,
      strategy: `${f.p} = ${f.val} năm. Lấy ${f.val} + ${extraYears} = ${f.val + extraYears} năm`
    };
  }
  if (mode === 2) {
    const h = rand(1, 4);
    const m1 = rand(2, 5) * 10;
    const m2 = 60 - m1;
    return {
      prompt: `${h} giờ ${m1} phút + ${m2} phút = ? giờ`,
      answer: h + 1,
      strategy: `${m1} + ${m2} = 60 phút = 1 giờ. Lấy ${h} + 1 = ${h + 1} giờ`
    };
  }
  if (mode === 3) {
    const m = rand(2, 6);
    const totalSec = m * 60;
    return {
      prompt: `${totalSec} giây = ? phút`,
      answer: m,
      strategy: `Lấy ${totalSec} : 60 = ${m} phút`
    };
  }
  const h = rand(4, 16);
  return {
    prompt: `1 ngày − ${h} giờ = ? giờ`,
    answer: 24 - h,
    strategy: `1 ngày = 24 giờ. Lấy 24 − ${h} = ${24 - h} giờ`
  };
}

function generateLengthProblem(rand, level = 1) {
  if (level === 1) {
    const mode = rand(1, 3);
    if (mode === 1) {
      const km = rand(1, 4);
      const m = rand(1, 9) * 100;
      return {
        prompt: `${km} km ${m} m = ? m`,
        answer: km * 1000 + m,
        strategy: `${km} km = ${km * 1000} m. Lấy ${km * 1000} + ${m} = ${km * 1000 + m} m`
      };
    }
    if (mode === 2) {
      const m = rand(2, 8);
      const dm = rand(1, 9);
      return {
        prompt: `${m} m ${dm} dm = ? dm`,
        answer: m * 10 + dm,
        strategy: `1 m = 10 dm. Lấy ${m * 10} + ${dm} = ${m * 10 + dm} dm`
      };
    }
    const f = [{ p: "1/2 km", val: 500 }, { p: "1/4 km", val: 250 }][rand(0, 1)];
    return {
      prompt: `${f.p} = ? m`,
      answer: f.val,
      strategy: `${f.p} = ${f.val} m`
    };
  }

  // Level 2+
  const km = rand(2, 5);
  const m = rand(1, 4) * 200;
  return {
    prompt: `${km} km − ${m} m = ? m`,
    answer: km * 1000 - m,
    strategy: `${km} km = ${km * 1000} m. Lấy ${km * 1000} − ${m} = ${km * 1000 - m} m`
  };
}

// --- 5. SIÊU THẦN TỐC OLYMPIC (LEVEL 4 - 4 ĐẾN 5 SỐ HẠNG & ĐẠI LƯỢNG NÂNG CAO) ---
function generateOlympic5Operands(rand) {
  const a = rand(2, 9);
  return {
    prompt: `8 × ${a} × 125 × 5 × 2`,
    answer: 10000 * a,
    strategy: `Nhóm (8 × 125) × (5 × 2) × ${a} = 1.000 × 10 × ${a} = ${10000 * a}`
  };
}

function generateOlympicDistributive(rand) {
  const a = rand(15, 75);
  const b = rand(12, 45);
  const c = rand(12, 35);
  const d = 99 - b - c;
  return {
    prompt: `${a} × ${b} + ${a} × ${c} + ${a} × ${d} + ${a}`,
    answer: a * 100,
    strategy: `Rút ${a} chung: ${a} × (${b} + ${c} + ${d} + 1) = ${a} × 100 = ${a * 100}`
  };
}

function generateOlympicBracket(rand) {
  const mode = rand(1, 3);
  if (mode === 1) {
    const multK = rand(2, 8);
    return {
      prompt: `(125 × 8) × (25 × ${multK * 4})`,
      answer: 1000 * (100 * multK),
      strategy: `1.000 × (${multK} × 100) = ${1000 * (100 * multK)}`
    };
  }
  if (mode === 2) {
    const a = rand(2, 6);
    return {
      prompt: `(25 × ${a * 36} × 4) : 9`,
      answer: 100 * (a * 4),
      strategy: `Nhóm (25 × 4) × (${a * 36} : 9) = 100 × ${a * 4} = ${100 * (a * 4)}`
    };
  }
  const a = rand(2, 8);
  return {
    prompt: `(125 × ${a * 72}) : 9`,
    answer: 1000 * a,
    strategy: `Nhóm 125 × (${a * 72} : 9) = 125 × (${a} × 8) = 1.000 × ${a} = ${1000 * a}`
  };
}

function generateOlympicUnitProblem(rand) {
  const mode = rand(1, 4);
  if (mode === 1) {
    const t1 = rand(2, 5);
    const ta1 = rand(1, 9);
    const t2 = rand(1, 4);
    const ta2 = 10 - ta1;
    return {
      prompt: `${t1} tấn ${ta1} tạ + ${t2} tấn ${ta2} tạ = ? tấn`,
      answer: t1 + t2 + 1,
      strategy: `${ta1} tạ + ${ta2} tạ = 10 tạ = 1 tấn. Tổng = ${t1} + ${t2} + 1 = ${t1 + t2 + 1} tấn`
    };
  }
  if (mode === 2) {
    const m2 = rand(8, 15);
    const sub1 = rand(15, 35) * 10;
    const sub2 = rand(15, 25) * 10;
    const totalSub = sub1 + sub2;
    return {
      prompt: `${m2} m² − ${sub1} dm² − ${sub2} dm² = ? dm²`,
      answer: m2 * 100 - totalSub,
      strategy: `${m2} m² = ${m2 * 100} dm². Trừ tổng: ${m2 * 100} − (${sub1} + ${sub2}) = ${m2 * 100 - totalSub} dm²`
    };
  }
  if (mode === 3) {
    const h1 = rand(5, 8);
    const h2 = rand(1, 3);
    const m = [20, 30, 40][rand(0, 2)];
    return {
      prompt: `${h1} giờ − (${h2} giờ ${m} phút) = ? phút`,
      answer: (h1 - h2) * 60 - m,
      strategy: `Đổi: ${h1 * 60} phút − (${h2 * 60 + m} phút) = ${(h1 - h2) * 60 - m} phút`
    };
  }
  const tan = rand(1, 4);
  const kg = [0, 200, 400, 500, 600, 800][rand(0, 5)];
  const totalKg = tan * 1000 + kg;
  const validDivisors = [2, 4, 5, 8, 10].filter(d => totalKg % d === 0);
  const d = validDivisors[rand(0, validDivisors.length - 1)];
  const q = totalKg / d;
  const promptStr = kg === 0 ? `${tan} tấn : ${d} = ? kg` : `(${tan} tấn ${kg} kg) : ${d} = ? kg`;
  return {
    prompt: promptStr,
    answer: q,
    strategy: `Đổi về kg: ${totalKg} kg : ${d} = ${q} kg`
  };
}

export function generateSpeedMathProblem(streak = 0) {
  // Tăng dần độ khó theo streak:
  // Streak 0-2: Cấp 1 (Cộng trừ bù tròn, Bảng cửu chương, Nhóm 3 số tròn chục/trăm, Đại lượng đo cơ bản)
  // Streak 3-5: Cấp 2 (Nhân nhẩm 11/5/25, Cặp số vàng, Nhóm 4 số, Đại lượng diện tích m²/dm² và khối lượng tấn/tạ)
  // Streak 6-9: Cấp 3 (Cặp số vàng 125x8, Phân phối 3 số hạng a*b+a*c+a, Cụm 4 thừa số, Đại lượng hợp nhất)
  // Streak 10+: Cấp 4 (Siêu Thần Tốc Olympic: 5 thừa số, phân phối 4 số hạng, ngoặc kép, đại lượng Olympic)

  // Level 1: streak < 3
  if (streak < 3) {
    const types = [
      "add_round", "sub_round", "basic_mul", "basic_div", 
      "round_ten_mul", "round_ten_div", "bracket_add_mul", "bracket_sub_div",
      "multi_add_3", "multi_sub_sum", "multi_mul_3",
      "unit_mass_l1", "unit_time_l1", "unit_length_l1"
    ];
    const type = types[rand(0, types.length - 1)];

    if (type === "multi_add_3") {
      return { ...generateMultiAdd3(rand), level: 1 };
    }
    if (type === "multi_sub_sum") {
      return { ...generateMultiSub(rand), level: 1 };
    }
    if (type === "multi_mul_3") {
      return { ...generateMultiMul3(rand, 9), level: 1 };
    }
    if (type === "unit_mass_l1") {
      return { ...generateMassProblem(rand, 1), level: 1 };
    }
    if (type === "unit_time_l1") {
      return { ...generateTimeProblem(rand, 1), level: 1 };
    }
    if (type === "unit_length_l1") {
      return { ...generateLengthProblem(rand, 1), level: 1 };
    }

    if (type === "add_round") {
      const bases = [99, 199, 299, 399, 499, 599, 198, 298, 398, 498, 598];
      const base = bases[rand(0, bases.length - 1)];
      const add = rand(11, 95);
      const rounded = base % 100 === 99 ? base + 1 : base + 2;
      const comp = rounded - base;
      return {
        prompt: `${base} + ${add}`,
        answer: base + add,
        strategy: `Lấy ${rounded} + ${add} − ${comp}`,
        level: 1
      };
    }
    if (type === "sub_round") {
      const subs = [99, 198, 199, 298, 299, 398, 399, 498];
      const sub = subs[rand(0, subs.length - 1)];
      const rounded = sub % 100 === 99 ? sub + 1 : sub + 2;
      const comp = rounded - sub;
      const base = rand(rounded + 20, rounded + 350);
      return {
        prompt: `${base} − ${sub}`,
        answer: base - sub,
        strategy: `Lấy ${base} − ${rounded} + ${comp}`,
        level: 1
      };
    }
    if (type === "basic_mul") {
      const a = rand(3, 9);
      const b = rand(3, 9);
      return {
        prompt: `${a} × ${b}`,
        answer: a * b,
        strategy: "Bảng nhân cửu chương",
        level: 1
      };
    }
    if (type === "basic_div") {
      const divisor = rand(3, 9);
      const quotient = rand(3, 9);
      const dividend = divisor * quotient;
      return {
        prompt: `${dividend} : ${divisor}`,
        answer: quotient,
        strategy: "Bảng chia cửu chương",
        level: 1
      };
    }
    if (type === "round_ten_mul") {
      const a = rand(2, 9) * 10;
      const b = rand(2, 9);
      return {
        prompt: `${a} × ${b}`,
        answer: a * b,
        strategy: `Nhân ${a / 10} × ${b} rồi thêm chữ số 0`,
        level: 1
      };
    }
    if (type === "round_ten_div") {
      const divisor = rand(2, 9);
      const quotient = rand(2, 9) * 10;
      const dividend = divisor * quotient;
      return {
        prompt: `${dividend} : ${divisor}`,
        answer: quotient,
        strategy: `Lấy ${dividend / 10} : ${divisor} rồi thêm số 0`,
        level: 1
      };
    }
    if (type === "bracket_add_mul") {
      const targetSums = [20, 30, 40, 50, 60, 70, 80, 100];
      const sum = targetSums[rand(0, targetSums.length - 1)];
      const a = rand(Math.floor(sum * 0.2) + 1, Math.floor(sum * 0.5));
      const b = sum - a;
      const c = rand(2, 5);
      return {
        prompt: `(${a} + ${b}) × ${c}`,
        answer: sum * c,
        strategy: `Tính trong ngoặc trước: ${sum} × ${c}`,
        level: 1
      };
    }
    // bracket_sub_div: (a - b) : c
    const diffList = [20, 30, 40, 50, 60, 80, 90];
    const diff = diffList[rand(0, diffList.length - 1)];
    const validDivisors = [2, 3, 4, 5, 6, 10].filter(d => diff % d === 0);
    const c = validDivisors[rand(0, validDivisors.length - 1)];
    const b = rand(10, 50);
    const a = b + diff;
    return {
      prompt: `(${a} − ${b}) : ${c}`,
      answer: diff / c,
      strategy: `Tính trong ngoặc trước: ${diff} : ${c}`,
      level: 1
    };
  }

  // Level 2: streak 3 - 5
  if (streak < 6) {
    const types = [
      "mul_11", "mul_5", "div_by_5", "div_by_25", "mul_double", 
      "mul_round_hundred", "div_round_hundred", "bracket_mul_level2", "bracket_div_level2",
      "multi_add_4", "multi_mul_3_golden", "multi_sub_mixed",
      "unit_mass_l2", "unit_area_l2", "unit_time_l2"
    ];
    const type = types[rand(0, types.length - 1)];

    if (type === "multi_add_4") {
      return { ...generateMultiAdd4(rand), level: 2 };
    }
    if (type === "multi_mul_3_golden") {
      return { ...generateMultiMulGolden(rand), level: 2 };
    }
    if (type === "multi_sub_mixed") {
      return { ...generateMultiSub(rand), level: 2 };
    }
    if (type === "unit_mass_l2") {
      return { ...generateMassProblem(rand, 2), level: 2 };
    }
    if (type === "unit_area_l2") {
      return { ...generateAreaProblem(rand, 2), level: 2 };
    }
    if (type === "unit_time_l2") {
      return { ...generateTimeProblem(rand, 2), level: 2 };
    }

    if (type === "mul_11") {
      const num = rand(12, 89);
      return {
        prompt: `${num} × 11`,
        answer: num * 11,
        strategy: `Tách ${num}: chèn tổng 2 chữ số vào giữa`,
        level: 2
      };
    }
    if (type === "mul_5") {
      const half = rand(6, 49);
      const num = half * 2;
      return {
        prompt: `${num} × 5`,
        answer: num * 5,
        strategy: `Nhân đôi chia đôi: (${num} : 2) × 10 = ${half} × 10`,
        level: 2
      };
    }
    if (type === "div_by_5") {
      const quotient = rand(14, 88);
      const dividend = quotient * 5;
      return {
        prompt: `${dividend} : 5`,
        answer: quotient,
        strategy: `Nhân đôi rồi chia 10: (${dividend} × 2) : 10`,
        level: 2
      };
    }
    if (type === "div_by_25") {
      const hundreds = rand(2, 24);
      const dividend = hundreds * 100;
      return {
        prompt: `${dividend} : 25`,
        answer: hundreds * 4,
        strategy: `Mỗi 100 có bốn số 25: ${hundreds} × 4 = ${hundreds * 4}`,
        level: 2
      };
    }
    if (type === "mul_double") {
      const pairs = [
        [15, 4], [15, 6], [15, 8], [25, 4], [25, 6], [25, 8], [35, 4], [35, 6],
        [45, 4], [45, 2], [18, 5], [16, 5], [24, 5], [32, 5], [28, 5], [36, 5], [44, 5]
      ];
      const p = pairs[rand(0, pairs.length - 1)];
      return {
        prompt: `${p[0]} × ${p[1]}`,
        answer: p[0] * p[1],
        strategy: "Gấp đôi thừa số này và chia đôi thừa số kia",
        level: 2
      };
    }
    if (type === "mul_round_hundred") {
      const a = rand(2, 9) * 10;
      const b = rand(2, 9) * 10;
      return {
        prompt: `${a} × ${b}`,
        answer: a * b,
        strategy: `Lấy ${a / 10} × ${b / 10} rồi thêm 2 số 0`,
        level: 2
      };
    }
    if (type === "div_round_hundred") {
      const divisor = rand(2, 8) * 10;
      const quotient = rand(2, 9) * 10;
      const dividend = divisor * quotient;
      return {
        prompt: `${dividend} : ${divisor}`,
        answer: quotient,
        strategy: `Cùng bớt một chữ số 0: ${dividend / 10} : ${divisor / 10}`,
        level: 2
      };
    }
    if (type === "bracket_mul_level2") {
      const targetSums = [50, 100, 150, 200];
      const sum = targetSums[rand(0, targetSums.length - 1)];
      const a = rand(Math.floor(sum * 0.2), Math.floor(sum * 0.5));
      const b = sum - a;
      const c = rand(3, 8);
      return {
        prompt: `(${a} + ${b}) × ${c}`,
        answer: sum * c,
        strategy: `Cộng trong ngoặc: ${sum} × ${c}`,
        level: 2
      };
    }
    // bracket_div_level2: (a + b) : c
    const sumList = [120, 180, 240, 300, 360, 400, 450, 500, 600];
    const sumVal = sumList[rand(0, sumList.length - 1)];
    const divisors = [2, 3, 4, 5, 6, 8, 10].filter(d => sumVal % d === 0);
    const c = divisors[rand(0, divisors.length - 1)];
    const a = rand(Math.floor(sumVal * 0.25), Math.floor(sumVal * 0.5));
    const b = sumVal - a;
    return {
      prompt: `(${a} + ${b}) : ${c}`,
      answer: sumVal / c,
      strategy: `Cộng trong ngoặc: ${sumVal} : ${c}`,
      level: 2
    };
  }

  // Level 3: streak 6 - 9
  if (streak < 10) {
    const types = [
      "gold_pair_25", "gold_pair_125", "mul_near_hundred", 
      "distributive_property", "bracket_complex_div", "bracket_composite",
      "distributive_3term", "multi_mul_4_golden", "multi_div_composite",
      "unit_compound_l3", "unit_area_l3"
    ];
    const type = types[rand(0, types.length - 1)];

    if (type === "distributive_3term") {
      return { ...generateDistributive3Term(rand), level: 3 };
    }
    if (type === "multi_mul_4_golden") {
      return { ...generateMultiMul4Golden(rand), level: 3 };
    }
    if (type === "multi_div_composite") {
      return { ...generateMultiDivComposite(rand), level: 3 };
    }
    if (type === "unit_compound_l3") {
      return { ...generateMassProblem(rand, 3), level: 3 };
    }
    if (type === "unit_area_l3") {
      return { ...generateAreaProblem(rand, 3), level: 3 };
    }

    if (type === "gold_pair_25") {
      const multK = rand(2, 22);
      const m = multK * 4;
      return {
        prompt: `25 × ${m}`,
        answer: 25 * m,
        strategy: `Cặp số vàng: 25 × 4 × ${multK} = 100 × ${multK}`,
        level: 3
      };
    }
    if (type === "gold_pair_125") {
      const multK = rand(2, 12);
      const m = multK * 8;
      return {
        prompt: `125 × ${m}`,
        answer: 125 * m,
        strategy: `Cặp số vàng: 125 × 8 × ${multK} = 1.000 × ${multK}`,
        level: 3
      };
    }
    if (type === "mul_near_hundred") {
      const mode = rand(1, 4);
      if (mode === 1) {
        const a = rand(12, 49);
        return {
          prompt: `${a} × 9`,
          answer: a * 9,
          strategy: `Bù trừ: ${a} × 10 − ${a}`,
          level: 3
        };
      }
      if (mode === 2) {
        const a = rand(12, 35);
        return {
          prompt: `${a} × 19`,
          answer: a * 19,
          strategy: `Bù trừ: ${a} × 20 − ${a}`,
          level: 3
        };
      }
      if (mode === 3) {
        const a = rand(12, 45);
        return {
          prompt: `${a} × 99`,
          answer: a * 99,
          strategy: `Bù trừ: ${a} × 100 − ${a}`,
          level: 3
        };
      }
      const a = rand(12, 45);
      return {
        prompt: `${a} × 101`,
        answer: a * 101,
        strategy: `Phân phối: ${a} × 100 + ${a}`,
        level: 3
      };
    }
    if (type === "distributive_property") {
      const a = rand(12, 68);
      const pairType = rand(1, 2);
      if (pairType === 1) {
        const b = rand(2, 8);
        const c = 10 - b;
        return {
          prompt: `(${a} × ${b}) + (${a} × ${c})`,
          answer: a * 10,
          strategy: `Đặt ${a} làm thừa số chung: ${a} × (${b} + ${c}) = ${a} × 10`,
          level: 3
        };
      } else {
        const c = rand(2, 9);
        const b = c + 10;
        return {
          prompt: `(${a} × ${b}) − (${a} × ${c})`,
          answer: a * 10,
          strategy: `Đặt ${a} làm thừa số chung: ${a} × (${b} − ${c}) = ${a} × 10`,
          level: 3
        };
      }
    }
    if (type === "bracket_complex_div") {
      const b = rand(2, 8);
      const c = rand(2, 6);
      const inner = b * c;
      const quotient = rand(5, 40);
      const dividend = inner * quotient;
      return {
        prompt: `${dividend} : (${b} × ${c})`,
        answer: quotient,
        strategy: `Lấy ${dividend} : ${inner} = ${quotient}`,
        level: 3
      };
    }
    // bracket_composite: biểu thức kết hợp
    const compositeList = [
      { prompt: "(125 + 75) × (12 : 3)", answer: 800, strategy: "200 × 4 = 800" },
      { prompt: "(800 − 300) : (25 × 2)", answer: 10, strategy: "500 : 50 = 10" },
      { prompt: "(99 + 1) × (45 − 25)", answer: 2000, strategy: "100 × 20 = 2.000" },
      { prompt: "(140 + 260) : (20 × 2)", answer: 10, strategy: "400 : 40 = 10" },
      { prompt: "6 × (120 − 70)", answer: 300, strategy: "6 × 50 = 300" },
      { prompt: "(250 + 150) × (30 : 6)", answer: 2000, strategy: "400 × 5 = 2.000" },
      { prompt: "(900 − 400) : (10 × 5)", answer: 10, strategy: "500 : 50 = 10" },
      { prompt: "(15 × 4) × (120 : 60)", answer: 120, strategy: "60 × 2 = 120" }
    ];
    const item = compositeList[rand(0, compositeList.length - 1)];
    return { ...item, level: 3 };
  }

  // Level 4: streak 10+ (Siêu Thần Tốc Olympic)
  const masterList = [
    { prompt: "(125 × 8) × (25 × 4)", answer: 100000, strategy: "1.000 × 100 = 100.000" },
    { prompt: "(1.200 − 400) : (15 + 25)", answer: 20, strategy: "800 : 40 = 20" },
    { prompt: "(88 + 12) × (75 − 25)", answer: 5000, strategy: "100 × 50 = 5.000" },
    { prompt: "(2.500 − 500) : (100 : 2)", answer: 40, strategy: "2.000 : 50 = 40" },
    { prompt: "(640 : 8) × (150 : 30)", answer: 400, strategy: "80 × 5 = 400" },
    { prompt: "(36 × 25) : 9", answer: 100, strategy: "(36 : 9) × 25 = 4 × 25 = 100" },
    { prompt: "(450 × 4) : 90", answer: 20, strategy: "(450 : 90) × 4 = 5 × 4 = 20" },
    { prompt: "(250 + 750) : (125 : 5)", answer: 40, strategy: "1.000 : 25 = 40" },
    { prompt: "(16 × 25) × (15 − 10)", answer: 2000, strategy: "400 × 5 = 2.000" },
    { prompt: "(125 × 4) × (25 × 2)", answer: 25000, strategy: "500 × 50 = 25.000" },
    { prompt: "(4.800 : 60) × (35 − 15)", answer: 1600, strategy: "80 × 20 = 1.600" },
    { prompt: "(75 × 12) − (75 × 2)", answer: 750, strategy: "75 × (12 − 2) = 75 × 10 = 750" },
    { prompt: "(18 × 25) : 2", answer: 225, strategy: "(18 : 2) × 25 = 9 × 25 = 225" },
    { prompt: "(3.600 : 40) × (25 × 4)", answer: 9000, strategy: "90 × 100 = 9.000" },
    { prompt: "(150 + 350) × (48 : 12)", answer: 2000, strategy: "500 × 4 = 2.000" },
    { prompt: "(24 × 50) : 12", answer: 100, strategy: "(24 : 12) × 50 = 2 × 50 = 100" },
    { prompt: "45 × 68 + 45 × 31 + 45", answer: 4500, strategy: "45 × (68 + 31 + 1) = 45 × 100 = 4.500" },
    { prompt: "38 × 125 − 38 × 24 − 38", answer: 3800, strategy: "38 × (125 − 24 − 1) = 38 × 100 = 3.800" },
    { prompt: "(125 × 72) : 9", answer: 1000, strategy: "125 × (72 : 9) = 125 × 8 = 1.000" },
    { prompt: "1/4 thế kỷ + 1/2 thế kỷ = ? năm", answer: 75, strategy: "25 + 50 = 75 năm" },
    { prompt: "3 tấn 5 tạ + 2 tấn 5 tạ = ? tấn", answer: 6, strategy: "3 tấn + 2 tấn + 10 tạ = 6 tấn" }
  ];

  const level4Types = [
    "master_curated", "olympic_5_operands", "olympic_distributive",
    "olympic_bracket", "olympic_units"
  ];
  const l4Type = level4Types[rand(0, level4Types.length - 1)];
  if (l4Type === "olympic_5_operands") return { ...generateOlympic5Operands(rand), level: 4 };
  if (l4Type === "olympic_distributive") return { ...generateOlympicDistributive(rand), level: 4 };
  if (l4Type === "olympic_bracket") return { ...generateOlympicBracket(rand), level: 4 };
  if (l4Type === "olympic_units") return { ...generateOlympicUnitProblem(rand), level: 4 };

  const item = masterList[rand(0, masterList.length - 1)];
  return { ...item, level: 4 };
}

export class SpeedMathSession {
  constructor({ onTick, onEnd, onScoreChange } = {}) {
    this.duration = 90;
    this.remaining = 90;
    this.timer = null;
    this.isRunning = false;
    this.score = 0;
    this.streak = 0;
    this.bestStreak = 0;
    this.correctCount = 0;
    this.wrongCount = 0;
    this.currentProblem = null;
    this.onTick = onTick || (() => {});
    this.onEnd = onEnd || (() => {});
    this.onScoreChange = onScoreChange || (() => {});
  }

  start() {
    this.reset();
    this.isRunning = true;
    this.endTime = Date.now() + this.duration * 1000;
    this.nextProblem();
    this.timer = setInterval(() => {
      const now = Date.now();
      const left = Math.max(0, Math.ceil((this.endTime - now) / 1000));
      if (left !== this.remaining) {
        this.remaining = left;
        this.onTick({ remaining: this.remaining, duration: this.duration });
      }
      if (this.remaining <= 0) {
        this.stop();
      }
    }, 200);
    this.onTick({ remaining: this.remaining, duration: this.duration });
  }

  stop() {
    if (!this.isRunning && !this.timer) return;
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.isRunning = false;
    this.onEnd({
      score: this.score,
      correctCount: this.correctCount,
      wrongCount: this.wrongCount,
      bestStreak: this.bestStreak
    });
  }

  reset() {
    if (this.timer) clearInterval(this.timer);
    this.timer = null;
    this.remaining = this.duration;
    this.score = 0;
    this.streak = 0;
    this.bestStreak = 0;
    this.correctCount = 0;
    this.wrongCount = 0;
    this.currentProblem = null;
    this.isRunning = false;
  }

  nextProblem() {
    this.currentProblem = generateSpeedMathProblem(this.streak);
    return this.currentProblem;
  }

  submitAnswer(inputVal) {
    if (!this.isRunning || !this.currentProblem) return null;
    const num = Number(String(inputVal).trim());
    const isCorrect = !Number.isNaN(num) && num === this.currentProblem.answer;

    if (isCorrect) {
      this.streak += 1;
      if (this.streak > this.bestStreak) this.bestStreak = this.streak;
      this.correctCount += 1;

      // Hệ số điểm combo
      let multiplier = 1.0;
      if (this.streak >= 10) multiplier = 2.0;
      else if (this.streak >= 5) multiplier = 1.5;
      else if (this.streak >= 3) multiplier = 1.2;

      const points = Math.round(100 * multiplier);
      this.score += points;

      this.onScoreChange({
        isCorrect: true,
        points,
        score: this.score,
        streak: this.streak,
        problem: this.currentProblem
      });
    } else {
      this.streak = 0;
      this.wrongCount += 1;
      this.onScoreChange({
        isCorrect: false,
        points: 0,
        score: this.score,
        streak: 0,
        problem: this.currentProblem,
        expected: this.currentProblem.answer
      });
    }

    const next = this.nextProblem();
    return { isCorrect, nextProblem: next };
  }
}
