// js/speed-math-generators.js - Bộ sinh bài toán tính nhẩm & mẹo giải thuận tiện
// Bao gồm: Cộng/Trừ nhiều số hạng, Nhân/Chia số vàng (25x4, 125x8), Biểu thức phân phối, Đơn vị đo

// --- Helper hàm random số nguyên trong đoạn [min, max] ---
const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// --- 1. NHIỀU SỐ: CỘNG NHẨM THUẬN TIỆN (3 - 4 SỐ HẠNG) ---
export function generateMultiAdd3(rand) {
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
    strategy = `Nhóm thuận tiện: (${a} + ${c}) + ${b} = ${pairSum} + ${b}`;
  } else if (order === 2) {
    prompt = `${b} + ${a} + ${c}`;
    answer = pairSum + b;
    strategy = `Nhóm thuận tiện: ${b} + (${a} + ${c}) = ${b} + ${pairSum}`;
  } else {
    prompt = `${a} + ${c} + ${b}`;
    answer = pairSum + b;
    strategy = `Cộng số tròn trước: (${a} + ${c}) + ${b} = ${pairSum} + ${b}`;
  }
  return { prompt, answer, strategy };
}

export function generateMultiAdd4(rand) {
  const s1 = rand(1, 4) * 100;
  const s2 = rand(1, 4) * 100;
  const a = rand(12, s1 - 12);
  const c = s1 - a;
  const b = rand(12, s2 - 12);
  const d = s2 - b;
  const prompt = `${a} + ${b} + ${c} + ${d}`;
  const answer = s1 + s2;
  const strategy = `Nhóm 2 cặp tròn: (${a} + ${c}) + (${b} + ${d}) = ${s1} + ${s2}`;
  return { prompt, answer, strategy };
}

export function generateMultiSub(rand) {
  const sumBC = rand(2, 6) * 100;
  const b = rand(25, sumBC - 25);
  const c = sumBC - b;
  const a = rand(sumBC + 50, sumBC + 500);
  const mode = rand(1, 2);
  if (mode === 1) {
    const prompt = `${a} − ${b} − ${c}`;
    const answer = a - sumBC;
    const strategy = `Trừ một tổng: ${a} − (${b} + ${c}) = ${a} − ${sumBC}`;
    return { prompt, answer, strategy };
  } else {
    const prompt = `${a} − (${b} + ${c})`;
    const answer = a - sumBC;
    const strategy = `Tính tổng trong ngoặc trước: ${a} − (${b} + ${c}) = ${a} − ${sumBC}`;
    return { prompt, answer, strategy };
  }
}

// --- 2. NHIỀU SỐ: NHÂN NHIỀU THỪA SỐ (CẶP SỐ VÀNG 3 - 4 THỪA SỐ) ---
export function generateMultiMul3(rand, maxA = 9) {
  const a = rand(3, maxA);
  const prompt = `2 × ${a} × 5`;
  const answer = 10 * a;
  const strategy = `Nhóm cặp số vàng: (2 × 5) × ${a} = 10 × ${a}`;
  return { prompt, answer, strategy };
}

export function generateMultiMulGolden(rand) {
  const mode = rand(1, 3);
  if (mode === 1) {
    const a = rand(11, 48);
    return {
      prompt: `4 × ${a} × 25`,
      answer: 100 * a,
      strategy: "Nhóm cặp số vàng: (4 × 25 = 100) rồi nhân với số còn lại"
    };
  }
  if (mode === 2) {
    const a = rand(12, 48);
    return {
      prompt: `5 × ${a} × 20`,
      answer: 100 * a,
      strategy: "Nhóm cặp số tròn trăm: (5 × 20 = 100) rồi nhân với số còn lại"
    };
  }
  const a = rand(14, 48);
  return {
    prompt: `2 × ${a} × 50`,
    answer: 100 * a,
    strategy: "Nhóm cặp số tròn trăm: (2 × 50 = 100) rồi nhân với số còn lại"
  };
}

export function generateMultiMul4Golden(rand) {
  const mode = rand(1, 3);
  if (mode === 1) {
    const a = rand(6, 24);
    return {
      prompt: `4 × ${a} × 25 × 2`,
      answer: 100 * (a * 2),
      strategy: "Ghép cặp số vàng: (4 × 25 = 100) rồi nhân với tích các số còn lại"
    };
  }
  if (mode === 2) {
    const a = rand(3, 14);
    return {
      prompt: `8 × ${a} × 125 × 2`,
      answer: 1000 * (a * 2),
      strategy: "Ghép cặp số vàng: (8 × 125 = 1.000) rồi nhân với tích các số còn lại"
    };
  }
  const a = rand(3, 16);
  return {
    prompt: `25 × ${a} × 4 × 5`,
    answer: 100 * (a * 5),
    strategy: "Ghép cặp số tròn trăm: (25 × 4 = 100) rồi nhân với tích các số còn lại"
  };
}

// --- 3. NHIỀU SỐ: PHÂN PHỐI VÀ CHIA PHỨC HỢP (3 - 4 SỐ HẠNG) ---
export function generateDistributive3Term(rand) {
  const a = rand(12, 85);
  const b = rand(15, 75);
  const c = 99 - b;
  const prompt = `${a} × ${b} + ${a} × ${c} + ${a}`;
  const answer = a * 100;
  const strategy = `Đặt thừa số chung: ${a} × (${b} + ${c} + 1) để trong ngoặc tròn trăm`;
  return { prompt, answer, strategy };
}

export function generateMultiDivComposite(rand) {
  const mode = rand(1, 3);
  if (mode === 1) {
    const c = [4, 6, 8, 9, 12][rand(0, 4)];
    const q = rand(2, 6);
    const a = c * q;
    const b = [25, 50, 125, 20][rand(0, 3)];
    return {
      prompt: `(${a} × ${b}) : ${c}`,
      answer: q * b,
      strategy: "Đổi thứ tự phép tính: Thực hiện phép chia trước rồi mới nhân"
    };
  }
  if (mode === 2) {
    // Luôn chọn cặp (b, c) có tích tròn 100 để Bách dễ nhẩm triệt tiêu số 0
    const pairs = [[25, 4], [20, 5], [50, 2], [10, 10]];
    const p = pairs[rand(0, pairs.length - 1)];
    const b = p[0];
    const c = p[1];
    const inner = 100;
    const q = rand(12, 45);
    const a = q * inner;
    return {
      prompt: `${a} : (${b} × ${c})`,
      answer: q,
      strategy: "Chia một số cho một tích: Tính tích trong ngoặc trước rồi thực hiện phép chia"
    };
  }
  const a = rand(2, 8) * 10;
  return {
    prompt: `(${a} × 25) : (5 × 5)`,
    answer: a,
    strategy: "Tính từng ngoặc trước: Nhận diện 5 × 5 = 25 rồi chia nhẩm"
  };
}

// --- 4. NHIỀU ĐẠI LƯỢNG: ĐỔI VÀ TÍNH TOÁN ĐƠN VỊ ĐO LƯỜNG LỚP 4 ---
export function generateMassProblem(rand, level = 1) {
  if (level === 1) {
    const mode = rand(1, 4);
    if (mode === 1) {
      const a = rand(1, 6);
      const b = rand(1, 8) * 10;
      const c = 100 - b;
      return {
        prompt: `${a} tạ ${b} kg + ${c} kg = ? kg`,
        answer: a * 100 + 100,
        strategy: `Đổi ${a} tạ = ${a * 100} kg rồi tính: ${a * 100} + (${b} + ${c})`
      };
    }
    if (mode === 2) {
      const sub = rand(1, 8) * 100;
      return {
        prompt: `1 tấn − ${sub} kg = ? kg`,
        answer: 1000 - sub,
        strategy: `Đổi 1 tấn = 1.000 kg rồi lấy 1.000 − ${sub}`
      };
    }
    if (mode === 3) {
      const a = rand(2, 8);
      const b = rand(1, 9);
      return {
        prompt: `${a} yến ${b} kg = ? kg`,
        answer: a * 10 + b,
        strategy: `Đổi 1 yến = 10 kg rồi lấy ${a * 10} + ${b}`
      };
    }
    const a = rand(2, 8);
    return {
      prompt: `${a} tạ = ? yến`,
      answer: a * 10,
      strategy: `Đổi 1 tạ = 10 yến rồi lấy ${a} × 10`
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
      strategy: `Đổi 1 tấn = 10 tạ rồi lấy ${a * 10} + ${b}`
    };
  }
  if (mode === 2) {
    const a = rand(1, 4);
    const sub = [150, 250, 350, 450, 550, 750][rand(0, 5)];
    return {
      prompt: `${a} tấn − ${sub} kg = ? kg`,
      answer: a * 1000 - sub,
      strategy: `Đổi ${a} tấn = ${a * 1000} kg rồi lấy ${a * 1000} − ${sub}`
    };
  }
  if (mode === 3) {
    const halfs = [{ p: "1/2 tạ", kg: 50 }, { p: "1/4 tạ", kg: 25 }, { p: "1/2 tấn", kg: 500 }, { p: "1/4 tấn", kg: 250 }];
    const h = halfs[rand(0, halfs.length - 1)];
    const extra = rand(1, 9) * 10;
    return {
      prompt: `${h.p} + ${extra} kg = ? kg`,
      answer: h.kg + extra,
      strategy: `Đổi ${h.p} = ${h.kg} kg rồi cộng thêm ${extra} kg`
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
    strategy: `Đổi về kg rồi chia: ${total} kg : ${d}`
  };
}

export function generateAreaProblem(rand, level = 2) {
  if (level <= 2) {
    const mode = rand(1, 5);
    if (mode === 1) {
      const a = rand(2, 8);
      const b = rand(11, 89);
      return {
        prompt: `${a} m² ${b} dm² = ? dm²`,
        answer: a * 100 + b,
        strategy: `Đổi 1 m² = 100 dm² rồi tính: ${a} × 100 + ${b}`
      };
    }
    if (mode === 2) {
      const a = rand(3, 8);
      const sub = rand(1, 4) * 50;
      return {
        prompt: `${a} m² − ${sub} dm² = ? dm²`,
        answer: a * 100 - sub,
        strategy: `Đổi ${a} m² = ${a * 100} dm² rồi lấy ${a * 100} − ${sub}`
      };
    }
    if (mode === 3) {
      const a = rand(2, 9);
      const b = rand(5, 85);
      return {
        prompt: `${a} dm² ${b} cm² = ? cm²`,
        answer: a * 100 + b,
        strategy: `Đổi 1 dm² = 100 cm² rồi tính: ${a} × 100 + ${b}`
      };
    }
    if (mode === 4) {
      const fractions = [
        { p: "1/2 m²", val: 50, u: "dm²", exp: "1 m² = 100 dm², lấy 100 : 2" },
        { p: "1/4 m²", val: 25, u: "dm²", exp: "1 m² = 100 dm², lấy 100 : 4" },
        { p: "1/2 dm²", val: 50, u: "cm²", exp: "1 dm² = 100 cm², lấy 100 : 2" },
        { p: "1/4 dm²", val: 25, u: "cm²", exp: "1 dm² = 100 cm², lấy 100 : 4" }
      ];
      const f = fractions[rand(0, fractions.length - 1)];
      return {
        prompt: `${f.p} = ? ${f.u}`,
        answer: f.val,
        strategy: `Đổi ${f.p} sang ${f.u}: ${f.exp}`
      };
    }
    const a = rand(2, 6);
    const bHundreds = rand(2, 5);
    return {
      prompt: `${a} m² + ${bHundreds * 100} dm² = ? m²`,
      answer: a + bHundreds,
      strategy: `Đổi ${bHundreds * 100} dm² = ${bHundreds} m² rồi lấy ${a} + ${bHundreds}`
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
      strategy: `Nhóm dm²: ${b} + ${d} = 100 dm² = 1 m², rồi lấy ${a} + ${c} + 1`
    };
  }
  if (mode === 2) {
    const a = rand(2, 7);
    const b = rand(15, 85);
    const c = 100 - b;
    return {
      prompt: `${a} dm² ${b} cm² + ${c} cm² = ? dm²`,
      answer: a + 1,
      strategy: `Nhóm cm²: ${b} + ${c} = 100 cm² = 1 dm², rồi lấy ${a} + 1`
    };
  }
  if (mode === 3) {
    const b1 = rand(15, 45);
    const b2 = rand(15, 45);
    const sumB = b1 + b2;
    return {
      prompt: `1 m² − (${b1} dm² + ${b2} dm²) = ? dm²`,
      answer: 100 - sumB,
      strategy: `Đổi 1 m² = 100 dm² rồi trừ tổng (${b1} + ${b2})`
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
    strategy: `Đổi về dm² rồi chia: ${totalDm2} dm² : ${factor}`
  };
}

export function generateTimeProblem(rand, level = 1) {
  if (level === 1) {
    const mode = rand(1, 4);
    if (mode === 1) {
      const h = rand(1, 3);
      const m = rand(1, 5) * 10;
      return {
        prompt: `${h} giờ ${m} phút = ? phút`,
        answer: h * 60 + m,
        strategy: `Đổi ${h} giờ = ${h * 60} phút rồi tính: ${h * 60} + ${m}`
      };
    }
    if (mode === 2) {
      const m = rand(1, 3);
      const s = rand(1, 5) * 10;
      return {
        prompt: `${m} phút ${s} giây = ? giây`,
        answer: m * 60 + s,
        strategy: `Đổi ${m} phút = ${m * 60} giây rồi tính: ${m * 60} + ${s}`
      };
    }
    if (mode === 3) {
      const fractions = [
        { p: "1/2 ngày", val: 12, u: "giờ", exp: "1 ngày = 24 giờ, lấy 24 : 2" },
        { p: "1/3 ngày", val: 8, u: "giờ", exp: "1 ngày = 24 giờ, lấy 24 : 3" },
        { p: "1/4 ngày", val: 6, u: "giờ", exp: "1 ngày = 24 giờ, lấy 24 : 4" },
        { p: "1/2 giờ", val: 30, u: "phút", exp: "1 giờ = 60 phút, lấy 60 : 2" },
        { p: "1/4 giờ", val: 15, u: "phút", exp: "1 giờ = 60 phút, lấy 60 : 4" }
      ];
      const f = fractions[rand(0, fractions.length - 1)];
      return {
        prompt: `${f.p} = ? ${f.u}`,
        answer: f.val,
        strategy: `Đổi ${f.p} sang ${f.u}: ${f.exp}`
      };
    }
    const c = rand(2, 5);
    return {
      prompt: `${c} thế kỷ = ? năm`,
      answer: c * 100,
      strategy: `Đổi 1 thế kỷ = 100 năm rồi lấy ${c} × 100`
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
      strategy: `Đổi ${f.p} = ${f.val} năm rồi cộng thêm ${extraYears} năm`
    };
  }
  if (mode === 2) {
    const h = rand(1, 4);
    const m1 = rand(2, 5) * 10;
    const m2 = 60 - m1;
    return {
      prompt: `${h} giờ ${m1} phút + ${m2} phút = ? giờ`,
      answer: h + 1,
      strategy: `Nhóm: ${m1} + ${m2} = 60 phút = 1 giờ, rồi lấy ${h} + 1`
    };
  }
  if (mode === 3) {
    const m = rand(2, 6);
    const totalSec = m * 60;
    return {
      prompt: `${totalSec} giây = ? phút`,
      answer: m,
      strategy: `Đổi sang phút: lấy ${totalSec} : 60`
    };
  }
  const h = rand(4, 16);
  return {
    prompt: `1 ngày − ${h} giờ = ? giờ`,
    answer: 24 - h,
    strategy: `Đổi 1 ngày = 24 giờ rồi lấy 24 − ${h}`
  };
}

export function generateLengthProblem(rand, level = 1) {
  if (level === 1) {
    const mode = rand(1, 3);
    if (mode === 1) {
      const km = rand(1, 4);
      const m = rand(1, 9) * 100;
      return {
        prompt: `${km} km ${m} m = ? m`,
        answer: km * 1000 + m,
        strategy: `Đổi ${km} km = ${km * 1000} m rồi tính: ${km * 1000} + ${m}`
      };
    }
    if (mode === 2) {
      const m = rand(2, 8);
      const dm = rand(1, 9);
      return {
        prompt: `${m} m ${dm} dm = ? dm`,
        answer: m * 10 + dm,
        strategy: `Đổi 1 m = 10 dm rồi tính: ${m * 10} + ${dm}`
      };
    }
    const f = [{ p: "1/2 km", val: 500 }, { p: "1/4 km", val: 250 }][rand(0, 1)];
    return {
      prompt: `${f.p} = ? m`,
      answer: f.val,
      strategy: `Đổi ${f.p} sang m: 1 km = 1.000 m`
    };
  }

  // Level 2+
  const km = rand(2, 5);
  const m = rand(1, 4) * 200;
  return {
    prompt: `${km} km − ${m} m = ? m`,
    answer: km * 1000 - m,
    strategy: `Đổi ${km} km = ${km * 1000} m rồi lấy ${km * 1000} − ${m}`
  };
}

// --- 5. SIÊU THẦN TỐC OLYMPIC (LEVEL 4 - 4 ĐẾN 5 SỐ HẠNG & ĐẠI LƯỢNG NÂNG CAO) ---
export function generateOlympic5Operands(rand) {
  const a = rand(2, 9);
  return {
    prompt: `8 × ${a} × 125 × 5 × 2`,
    answer: 10000 * a,
    strategy: "Nhóm hai cặp số vàng: (8 × 125 = 1.000) và (5 × 2 = 10) rồi nhân tiếp"
  };
}

export function generateOlympicDistributive(rand) {
  const a = rand(15, 75);
  const b = rand(12, 45);
  const c = rand(12, 35);
  const d = 99 - b - c;
  return {
    prompt: `${a} × ${b} + ${a} × ${c} + ${a} × ${d} + ${a}`,
    answer: a * 100,
    strategy: `Đặt thừa số chung: Đưa ${a} ra ngoài để trong ngoặc tạo thành số tròn trăm`
  };
}

export function generateOlympicBracket(rand) {
  const mode = rand(1, 3);
  if (mode === 1) {
    const multK = rand(2, 8);
    return {
      prompt: `(125 × 8) × (25 × ${multK * 4})`,
      answer: 1000 * (100 * multK),
      strategy: "Nhóm hai cặp số vàng: (125 × 8 = 1.000) và (25 × 4 = 100) rồi nhân tiếp"
    };
  }
  if (mode === 2) {
    const a = rand(2, 6);
    return {
      prompt: `(25 × ${a * 36} × 4) : 9`,
      answer: 100 * (a * 4),
      strategy: "Nhóm cặp số vàng (25 × 4) rồi chia nhẩm số trong ngoặc trước khi nhân"
    };
  }
  const a = rand(2, 8);
  return {
    prompt: `(125 × ${a * 72}) : 9`,
    answer: 1000 * a,
    strategy: "Đổi thứ tự phép tính: Lấy số chia hết cho 9 trước rồi nhân với 125"
  };
}

export function generateOlympicUnitProblem(rand) {
  const mode = rand(1, 4);
  if (mode === 1) {
    const t1 = rand(2, 5);
    const ta1 = rand(1, 9);
    const t2 = rand(1, 4);
    const ta2 = 10 - ta1;
    return {
      prompt: `${t1} tấn ${ta1} tạ + ${t2} tấn ${ta2} tạ = ? tấn`,
      answer: t1 + t2 + 1,
      strategy: `Nhóm: ${ta1} tạ + ${ta2} tạ = 10 tạ = 1 tấn, rồi tính ${t1} + ${t2} + 1`
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
      strategy: `Đổi ${m2} m² = ${m2 * 100} dm² rồi trừ tổng (${sub1} + ${sub2})`
    };
  }
  if (mode === 3) {
    const h1 = rand(5, 8);
    const h2 = rand(1, 3);
    const m = [20, 30, 40][rand(0, 2)];
    return {
      prompt: `${h1} giờ − (${h2} giờ ${m} phút) = ? phút`,
      answer: (h1 - h2) * 60 - m,
      strategy: `Đổi ra phút: ${h1 * 60} − (${h2 * 60 + m})`
    };
  }
  const tan = rand(1, 4);
  const kg = [0, 200, 400, 500, 600, 800][rand(0, 5)];
  const totalKg = tan * 1000 + kg;
  const validDivisors = [2, 4, 5, 8, 10].filter(d => totalKg % d === 0);
  if (validDivisors.length === 0) {
    validDivisors.push(2, 5);
  }
  const d = validDivisors[rand(0, validDivisors.length - 1)];
  const q = totalKg / d;
  const promptStr = kg === 0 ? `${tan} tấn : ${d} = ? kg` : `(${tan} tấn ${kg} kg) : ${d} = ? kg`;
  return {
    prompt: promptStr,
    answer: q,
    strategy: `Đổi về kg rồi chia: ${totalKg} kg : ${d}`
  };
}

// --- 6. PHÂN LOẠI NHÓM LỚN (ANTI-REPETITION GROUPS) ---
