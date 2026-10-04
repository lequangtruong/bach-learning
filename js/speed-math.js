// js/speed-math.js - Mini-game "Đấu tính nhẩm 90 giây" (Speed Math Sprint)
// Điều phối phiên đấu nhẩm, tính toán tốc độ phản xạ & tự động tăng độ khó

import {
  generateMultiAdd3,
  generateMultiAdd4,
  generateMultiSub,
  generateMultiMul3,
  generateMultiMulGolden,
  generateMultiMul4Golden,
  generateDistributive3Term,
  generateMultiDivComposite,
  generateMassProblem,
  generateAreaProblem,
  generateTimeProblem,
  generateLengthProblem,
  generateOlympic5Operands,
  generateOlympicDistributive,
  generateOlympicBracket,
  generateOlympicUnitProblem
} from "./speed-math-generators.js";

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const SPEED_MATH_GROUPS = {
  // Nhóm A: Cộng / Trừ bù tròn & nhiều số hạng
  add_round: "A",
  sub_round: "A",
  multi_add_3: "A",
  multi_sub_sum: "A",
  multi_add_4: "A",
  multi_sub_mixed: "A",

  // Nhóm B: Nhân / Chia chiến thuật & Cặp số vàng
  basic_mul: "B",
  basic_div: "B",
  round_ten_mul: "B",
  round_ten_div: "B",
  mul_11: "B",
  mul_5: "B",
  div_by_5: "B",
  div_by_25: "B",
  mul_double: "B",
  mul_round_hundred: "B",
  div_round_hundred: "B",
  multi_mul_3: "B",
  multi_mul_3_golden: "B",
  gold_pair_25: "B",
  gold_pair_125: "B",
  mul_near_hundred: "B",
  multi_mul_4_golden: "B",
  multi_div_composite: "B",

  // Nhóm C: Biểu thức / Phân phối / Ngoặc
  bracket_add_mul: "C",
  bracket_sub_div: "C",
  bracket_mul_level2: "C",
  bracket_div_level2: "C",
  distributive_property: "C",
  bracket_complex_div: "C",
  bracket_composite: "C",
  distributive_3term: "C",
  master_curated: "C",
  olympic_5_operands: "C",
  olympic_distributive: "C",
  olympic_bracket: "C",

  // Nhóm D: Đại lượng đo lường
  unit_mass_l1: "D",
  unit_time_l1: "D",
  unit_length_l1: "D",
  unit_mass_l2: "D",
  unit_area_l2: "D",
  unit_time_l2: "D",
  unit_compound_l3: "D",
  unit_area_l3: "D",
  olympic_units: "D"
};

export function pickDiverseType(types, recentTypes = [], recentGroups = []) {
  if (!types || types.length === 0) return null;
  const lastTypes = recentTypes.slice(-5);
  const lastGroups = recentGroups.slice(-6);

  // Đếm tần suất xuất hiện của nhóm trong 6 câu gần nhất
  const groupCount = {};
  for (const g of lastGroups) {
    groupCount[g] = (groupCount[g] || 0) + 1;
  }

  // Lọc dạng bài:
  // 1. Không trùng dạng bài cụ thể trong 5 câu gần nhất
  // 2. Nhóm lớn không xuất hiện quá 2 lần trong 6 câu gần nhất
  let candidates = types.filter(t => {
    if (lastTypes.includes(t)) return false;
    const grp = SPEED_MATH_GROUPS[t] || "B";
    if ((groupCount[grp] || 0) >= 2) return false;
    return true;
  });

  // Nới lỏng ràng buộc nếu danh sách ứng viên bị lọc hết
  if (candidates.length === 0) {
    candidates = types.filter(t => !lastTypes.slice(-2).includes(t));
  }
  if (candidates.length === 0) {
    candidates = types;
  }

  return candidates[rand(0, candidates.length - 1)];
}

export function generateSpeedMathProblem(streak = 0, options = {}) {
  const recentTypes = Array.isArray(options?.recentTypes) ? options.recentTypes : [];
  const recentGroups = Array.isArray(options?.recentGroups) ? options.recentGroups : [];

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
    const type = pickDiverseType(types, recentTypes, recentGroups) || types[rand(0, types.length - 1)];
    const group = SPEED_MATH_GROUPS[type] || "B";

    if (type === "multi_add_3") {
      return { ...generateMultiAdd3(rand), level: 1, type, group };
    }
    if (type === "multi_sub_sum") {
      return { ...generateMultiSub(rand), level: 1, type, group };
    }
    if (type === "multi_mul_3") {
      return { ...generateMultiMul3(rand, 9), level: 1, type, group };
    }
    if (type === "unit_mass_l1") {
      return { ...generateMassProblem(rand, 1), level: 1, type, group };
    }
    if (type === "unit_time_l1") {
      return { ...generateTimeProblem(rand, 1), level: 1, type, group };
    }
    if (type === "unit_length_l1") {
      return { ...generateLengthProblem(rand, 1), level: 1, type, group };
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
        strategy: `Làm tròn ${base} lên số tròn trăm (${rounded}) rồi trừ phần bù (${comp})`,
        level: 1,
        type,
        group
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
        strategy: `Trừ số tròn trăm (${rounded}) trước rồi cộng bù lại (${comp})`,
        level: 1,
        type,
        group
      };
    }
    if (type === "basic_mul") {
      const a = rand(3, 9);
      const b = rand(3, 9);
      return {
        prompt: `${a} × ${b}`,
        answer: a * b,
        strategy: "Vận dụng bảng nhân cửu chương cơ bản",
        level: 1,
        type,
        group
      };
    }
    if (type === "basic_div") {
      const divisor = rand(3, 9);
      const quotient = rand(3, 9);
      const dividend = divisor * quotient;
      return {
        prompt: `${dividend} : ${divisor}`,
        answer: quotient,
        strategy: "Vận dụng bảng chia cửu chương cơ bản",
        level: 1,
        type,
        group
      };
    }
    if (type === "round_ten_mul") {
      const a = rand(2, 9) * 10;
      const b = rand(2, 9);
      return {
        prompt: `${a} × ${b}`,
        answer: a * b,
        strategy: `Nhân nhẩm số tròn chục: Lấy ${a / 10} × ${b} rồi viết thêm chữ số 0`,
        level: 1,
        type,
        group
      };
    }
    if (type === "round_ten_div") {
      const divisor = rand(2, 9);
      const quotient = rand(2, 9) * 10;
      const dividend = divisor * quotient;
      return {
        prompt: `${dividend} : ${divisor}`,
        answer: quotient,
        strategy: `Chia nhẩm số tròn chục: Lấy ${dividend / 10} : ${divisor} rồi viết thêm chữ số 0`,
        level: 1,
        type,
        group
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
        strategy: "Thứ tự phép tính: Tính tổng trong ngoặc tròn trước rồi mới nhân",
        level: 1,
        type,
        group
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
      strategy: "Thứ tự phép tính: Tính hiệu trong ngoặc tròn trước rồi mới chia",
      level: 1,
      type,
      group
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
    const type = pickDiverseType(types, recentTypes, recentGroups) || types[rand(0, types.length - 1)];
    const group = SPEED_MATH_GROUPS[type] || "B";

    if (type === "multi_add_4") {
      return { ...generateMultiAdd4(rand), level: 2, type, group };
    }
    if (type === "multi_mul_3_golden") {
      return { ...generateMultiMulGolden(rand), level: 2, type, group };
    }
    if (type === "multi_sub_mixed") {
      return { ...generateMultiSub(rand), level: 2, type, group };
    }
    if (type === "unit_mass_l2") {
      return { ...generateMassProblem(rand, 2), level: 2, type, group };
    }
    if (type === "unit_area_l2") {
      return { ...generateAreaProblem(rand, 2), level: 2, type, group };
    }
    if (type === "unit_time_l2") {
      return { ...generateTimeProblem(rand, 2), level: 2, type, group };
    }

    if (type === "mul_11") {
      const num = rand(12, 89);
      return {
        prompt: `${num} × 11`,
        answer: num * 11,
        strategy: `Mẹo nhân 11: Tách hai chữ số của ${num} rồi chèn tổng của chúng vào giữa`,
        level: 2,
        type,
        group
      };
    }
    if (type === "mul_5") {
      const half = rand(6, 49);
      const num = half * 2;
      return {
        prompt: `${num} × 5`,
        answer: num * 5,
        strategy: "Mẹo nhân 5: Chia đôi số chẵn rồi nhân với 10 (thêm chữ số 0)",
        level: 2,
        type,
        group
      };
    }
    if (type === "div_by_5") {
      const quotient = rand(14, 88);
      const dividend = quotient * 5;
      return {
        prompt: `${dividend} : 5`,
        answer: quotient,
        strategy: "Mẹo chia 5: Nhân đôi số bị chia rồi chia cho 10 (bớt 1 chữ số 0)",
        level: 2,
        type,
        group
      };
    }
    if (type === "div_by_25") {
      const hundreds = rand(2, 24);
      const dividend = hundreds * 100;
      return {
        prompt: `${dividend} : 25`,
        answer: hundreds * 4,
        strategy: "Mẹo chia 25: Mỗi 100 có 4 lần 25, lấy số trăm nhân với 4",
        level: 2,
        type,
        group
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
        level: 2,
        type,
        group
      };
    }
    if (type === "mul_round_hundred") {
      const a = rand(2, 9) * 10;
      const b = rand(2, 9) * 10;
      return {
        prompt: `${a} × ${b}`,
        answer: a * b,
        strategy: `Nhân hai số tròn chục: Lấy ${a / 10} × ${b / 10} rồi thêm hai chữ số 0 vào sau`,
        level: 2,
        type,
        group
      };
    }
    if (type === "div_round_hundred") {
      const divisor = rand(2, 8) * 10;
      const quotient = rand(2, 9) * 10;
      const dividend = divisor * quotient;
      return {
        prompt: `${dividend} : ${divisor}`,
        answer: quotient,
        strategy: "Chia hai số tròn chục: Cùng bớt một chữ số 0 ở cả hai vế rồi chia nhẩm",
        level: 2,
        type,
        group
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
        strategy: "Tính trong ngoặc trước: Cộng ra số tròn chục hoặc tròn trăm rồi nhân",
        level: 2,
        type,
        group
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
      strategy: "Tính trong ngoặc trước: Cộng ra số tròn chục rồi chia",
      level: 2,
      type,
      group
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
    const type = pickDiverseType(types, recentTypes, recentGroups) || types[rand(0, types.length - 1)];
    const group = SPEED_MATH_GROUPS[type] || "B";

    if (type === "distributive_3term") {
      return { ...generateDistributive3Term(rand), level: 3, type, group };
    }
    if (type === "multi_mul_4_golden") {
      return { ...generateMultiMul4Golden(rand), level: 3, type, group };
    }
    if (type === "multi_div_composite") {
      return { ...generateMultiDivComposite(rand), level: 3, type, group };
    }
    if (type === "unit_compound_l3") {
      return { ...generateMassProblem(rand, 3), level: 3, type, group };
    }
    if (type === "unit_area_l3") {
      return { ...generateAreaProblem(rand, 3), level: 3, type, group };
    }

    if (type === "gold_pair_25") {
      const multK = rand(2, 22);
      const m = multK * 4;
      return {
        prompt: `25 × ${m}`,
        answer: 25 * m,
        strategy: "Cặp số vàng: Ghép (25 × 4 = 100) rồi nhân tiếp với thừa số còn lại",
        level: 3,
        type,
        group
      };
    }
    if (type === "gold_pair_125") {
      const multK = rand(2, 12);
      const m = multK * 8;
      return {
        prompt: `125 × ${m}`,
        answer: 125 * m,
        strategy: "Cặp số vàng: Ghép (125 × 8 = 1.000) rồi nhân tiếp với thừa số còn lại",
        level: 3,
        type,
        group
      };
    }
    if (type === "mul_near_hundred") {
      const mode = rand(1, 4);
      if (mode === 1) {
        const a = rand(12, 49);
        return {
          prompt: `${a} × 9`,
          answer: a * 9,
          strategy: "Quy tắc nhân 9: Lấy số đó nhân 10 rồi trừ đi chính nó",
          level: 3,
          type,
          group
        };
      }
      if (mode === 2) {
        const a = rand(12, 35);
        return {
          prompt: `${a} × 19`,
          answer: a * 19,
          strategy: "Quy tắc nhân 19: Lấy số đó nhân 20 rồi trừ đi chính nó",
          level: 3,
          type,
          group
        };
      }
      if (mode === 3) {
        const a = rand(12, 45);
        return {
          prompt: `${a} × 99`,
          answer: a * 99,
          strategy: "Quy tắc nhân 99: Lấy số đó nhân 100 rồi trừ đi chính nó",
          level: 3,
          type,
          group
        };
      }
      const a = rand(12, 45);
      return {
        prompt: `${a} × 101`,
        answer: a * 101,
        strategy: "Tính chất phân phối: Lấy số đó nhân 100 rồi cộng thêm chính nó",
        level: 3,
        type,
        group
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
          strategy: `Tính chất một số nhân một tổng: Đặt ${a} làm thừa số chung để trong ngoặc tròn chục`,
          level: 3,
          type,
          group
        };
      } else {
        const c = rand(2, 9);
        const b = c + 10;
        return {
          prompt: `(${a} × ${b}) − (${a} × ${c})`,
          answer: a * 10,
          strategy: `Tính chất một số nhân một hiệu: Đặt ${a} làm thừa số chung để trong ngoặc tròn chục`,
          level: 3,
          type,
          group
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
        strategy: "Chia một số cho một tích: Tính tích trong ngoặc trước rồi thực hiện phép chia",
        level: 3,
        type,
        group
      };
    }
    // bracket_composite: biểu thức kết hợp
    const compositeList = [
      { prompt: "(125 + 75) × (12 : 3)", answer: 800, strategy: "Tính từng ngoặc trước: ngoặc thứ nhất ra tròn trăm, ngoặc thứ hai chia nhẩm" },
      { prompt: "(800 − 300) : (25 × 2)", answer: 10, strategy: "Tính từng ngoặc trước để được phép chia hai số tròn chục" },
      { prompt: "(99 + 1) × (45 − 25)", answer: 2000, strategy: "Tính từng ngoặc trước: tạo tích của hai số tròn chục" },
      { prompt: "(140 + 260) : (20 × 2)", answer: 10, strategy: "Tính từng ngoặc trước: cộng tròn trăm rồi chia cho tích trong ngoặc sau" },
      { prompt: "6 × (120 − 70)", answer: 300, strategy: "Tính hiệu trong ngoặc tròn trước để được số tròn chục rồi nhân" },
      { prompt: "(250 + 150) × (30 : 6)", answer: 2000, strategy: "Tính từng ngoặc trước: cộng tròn trăm rồi nhân với thương của ngoặc sau" },
      { prompt: "(900 − 400) : (10 × 5)", answer: 10, strategy: "Tính từng ngoặc trước: trừ tròn trăm rồi chia cho tích của ngoặc sau" },
      { prompt: "(15 × 4) × (120 : 60)", answer: 120, strategy: "Tính từng ngoặc trước: 15 × 4 ra tròn chục, rồi nhân với thương của ngoặc sau" }
    ];
    const item = compositeList[rand(0, compositeList.length - 1)];
    return { ...item, level: 3, type, group };
  }

  // Level 4: streak 10+ (Siêu Thần Tốc Olympic)
  const masterList = [
    { prompt: "(125 × 8) × (25 × 4)", answer: 100000, strategy: "Nhóm hai cặp số vàng: (125 × 8 = 1.000) và (25 × 4 = 100)" },
    { prompt: "(1200 − 400) : (15 + 25)", answer: 20, strategy: "Tính từng ngoặc trước: trừ tròn trăm rồi chia cho tổng tròn chục" },
    { prompt: "(88 + 12) × (75 − 25)", answer: 5000, strategy: "Tính từng ngoặc trước: tạo tích của hai số tròn chục/trăm" },
    { prompt: "(2500 − 500) : (100 : 2)", answer: 40, strategy: "Tính từng ngoặc trước: trừ tròn nghìn rồi chia cho thương" },
    { prompt: "(640 : 8) × (150 : 30)", answer: 400, strategy: "Chia nhẩm trong từng ngoặc trước rồi nhân hai kết quả" },
    { prompt: "(36 × 25) : 9", answer: 100, strategy: "Chia trước nhân sau: Lấy (36 : 9) trước rồi mới nhân 25" },
    { prompt: "(450 × 4) : 90", answer: 20, strategy: "Chia trước nhân sau: Lấy (450 : 90) trước rồi mới nhân 4" },
    { prompt: "(250 + 750) : (125 : 5)", answer: 40, strategy: "Tính từng ngoặc: Cộng tròn nghìn rồi chia cho thương" },
    { prompt: "(16 × 25) × (15 − 10)", answer: 2000, strategy: "Tách 16 = 4 × 4 để ghép với 25 tạo tròn trăm rồi nhân với hiệu" },
    { prompt: "(125 × 4) × (25 × 2)", answer: 25000, strategy: "Nhân đôi chia đôi hoặc tính từng ngoặc trước" },
    { prompt: "(4800 : 60) × (35 − 15)", answer: 1600, strategy: "Tính từng ngoặc trước: chia nhẩm tròn chục rồi nhân với hiệu" },
    { prompt: "(75 × 12) − (75 × 2)", answer: 750, strategy: "Đặt 75 làm thừa số chung: 75 × (12 − 2)" },
    { prompt: "(18 × 25) : 2", answer: 225, strategy: "Chia trước nhân sau: Lấy (18 : 2) trước rồi mới nhân 25" },
    { prompt: "(3600 : 40) × (25 × 4)", answer: 9000, strategy: "Tính từng ngoặc trước: chia nhẩm tròn chục rồi nhân với tích 25 × 4" },
    { prompt: "(150 + 350) × (48 : 12)", answer: 2000, strategy: "Tính từng ngoặc trước: cộng tròn trăm rồi nhân với thương" },
    { prompt: "(24 × 50) : 12", answer: 100, strategy: "Chia trước nhân sau: Lấy (24 : 12) trước rồi mới nhân 50" },
    { prompt: "45 × 68 + 45 × 31 + 45", answer: 4500, strategy: "Đặt 45 làm thừa số chung: 45 × (68 + 31 + 1) để tạo số tròn trăm" },
    { prompt: "38 × 125 − 38 × 24 − 38", answer: 3800, strategy: "Đặt 38 làm thừa số chung: 38 × (125 − 24 − 1) để tạo số tròn trăm" },
    { prompt: "(125 × 72) : 9", answer: 1000, strategy: "Nhóm chia trước nhân sau: 125 × (72 : 9) để tạo cặp số vàng" },
    { prompt: "1/4 thế kỷ + 1/2 thế kỷ = ? năm", answer: 75, strategy: "Quy đổi các phân số của thế kỷ về số năm rồi cộng lại" },
    { prompt: "3 tấn 5 tạ + 2 tấn 5 tạ = ? tấn", answer: 6, strategy: "Cộng các đơn vị cùng loại: 5 tạ + 5 tạ = 10 tạ = 1 tấn" }
  ];

  const level4Types = [
    "master_curated", "olympic_5_operands", "olympic_distributive",
    "olympic_bracket", "olympic_units"
  ];
  const l4Type = pickDiverseType(level4Types, recentTypes, recentGroups) || level4Types[rand(0, level4Types.length - 1)];
  const l4Group = SPEED_MATH_GROUPS[l4Type] || "C";

  if (l4Type === "olympic_5_operands") return { ...generateOlympic5Operands(rand), level: 4, type: l4Type, group: l4Group };
  if (l4Type === "olympic_distributive") return { ...generateOlympicDistributive(rand), level: 4, type: l4Type, group: l4Group };
  if (l4Type === "olympic_bracket") return { ...generateOlympicBracket(rand), level: 4, type: l4Type, group: l4Group };
  if (l4Type === "olympic_units") return { ...generateOlympicUnitProblem(rand), level: 4, type: l4Type, group: l4Group };

  const item = masterList[rand(0, masterList.length - 1)];
  return { ...item, level: 4, type: "master_curated", group: "C" };
}

/**
 * Tính điểm thưởng tốc độ cho từng câu (Speed-based Scoring)
 * Dành cho Bách khi giải nhẩm nhanh và độc lập:
 * - Giải siêu tốc <= 1.5s: +50 điểm (Phản xạ đỉnh cao ⚡⚡)
 * - Giải thần tốc <= 2.5s: +30 điểm (Thần tốc ⚡)
 * - Giải nhanh <= 3.5s: +20 điểm (Nhanh nhạy 🚀)
 * - Giải chuẩn xác <= 5.0s: +10 điểm (Ổn định 🎯)
 * - Trên 5.0s hoặc có dùng gợi ý trợ giúp: 0 điểm thưởng tốc độ
 *
 * @param {number} responseTime Thời gian trả lời tính bằng giây
 * @param {boolean} usedHint Có xem gợi ý mẹo không
 * @returns {number} Điểm thưởng tốc độ (0, 10, 20, 30, hoặc 50)
 */
export function calculateSpeedBonus(responseTime, usedHint = false) {
  if (usedHint || typeof responseTime !== "number" || responseTime <= 0) return 0;
  if (responseTime <= 1.5) return 50;
  if (responseTime <= 2.5) return 30;
  if (responseTime <= 3.5) return 20;
  if (responseTime <= 5.0) return 10;
  return 0;
}

export class SpeedMathSession {
  constructor({ onTick, onEnd, onScoreChange, initialStreak = 0 } = {}) {
    this.duration = 90;
    this.remaining = 90;
    this.timer = null;
    this.isRunning = false;
    this.score = 0;
    this.totalSpeedBonus = 0;
    this.initialStreak = Math.max(0, Number(initialStreak) || 0);
    this.streak = this.initialStreak;
    this.bestStreak = this.streak;
    this.correctCount = 0;
    this.wrongCount = 0;
    this.currentProblem = null;
    this.recentTypes = [];
    this.recentGroups = [];
    this.responseTimes = [];
    this.fastSolveCount = 0;
    this.problemStartTime = null;
    this.usedHintInCurrentProblem = false;
    this.onTick = onTick || (() => {});
    this.onEnd = onEnd || (() => {});
    this.onScoreChange = onScoreChange || (() => {});
  }

  start() {
    this.reset();
    this.isRunning = true;
    this.streak = this.initialStreak;
    this.bestStreak = this.streak;
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
    if (typeof this.timer?.unref === "function") {
      this.timer.unref();
    }
    this.onTick({ remaining: this.remaining, duration: this.duration });
  }

  stop() {
    if (!this.isRunning && !this.timer) return;
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.isRunning = false;

    // Tính toán tốc độ làm bài của Bách
    const avgResponseTime = this.responseTimes.length > 0
      ? Number((this.responseTimes.reduce((acc, t) => acc + t, 0) / this.responseTimes.length).toFixed(1))
      : 0;

    let velocityTier = "normal";
    let difficultyBoost = 0;

    // Phân cấp tốc độ:
    // Thần tốc: trung bình <= 2.8s/câu & làm đúng từ 6 câu trở lên -> Tăng độ khó lên Cấp 3 (streak boost +6)
    // Nhanh: trung bình <= 4.2s/câu & làm đúng từ 4 câu trở lên -> Tăng độ khó lên Cấp 2 (streak boost +3)
    if (this.correctCount >= 6 && avgResponseTime > 0 && avgResponseTime <= 2.8) {
      velocityTier = "lightning";
      difficultyBoost = 6;
    } else if (this.correctCount >= 4 && avgResponseTime > 0 && avgResponseTime <= 4.2) {
      velocityTier = "fast";
      difficultyBoost = 3;
    }

    this.onEnd({
      score: this.score,
      correctCount: this.correctCount,
      wrongCount: this.wrongCount,
      bestStreak: this.bestStreak,
      avgResponseTime,
      fastSolveCount: this.fastSolveCount,
      totalSpeedBonus: this.totalSpeedBonus || 0,
      velocityTier,
      difficultyBoost
    });
  }

  reset() {
    if (this.timer) clearInterval(this.timer);
    this.timer = null;
    this.remaining = this.duration;
    this.score = 0;
    this.totalSpeedBonus = 0;
    this.streak = 0;
    this.bestStreak = 0;
    this.correctCount = 0;
    this.wrongCount = 0;
    this.currentProblem = null;
    this.recentTypes = [];
    this.recentGroups = [];
    this.responseTimes = [];
    this.fastSolveCount = 0;
    this.problemStartTime = null;
    this.usedHintInCurrentProblem = false;
    this.isRunning = false;
  }

  useHint() {
    this.usedHintInCurrentProblem = true;
  }

  nextProblem() {
    this.usedHintInCurrentProblem = false;
    this.currentProblem = generateSpeedMathProblem(this.streak, {
      recentTypes: this.recentTypes,
      recentGroups: this.recentGroups
    });

    if (this.currentProblem) {
      if (this.currentProblem.type) this.recentTypes.push(this.currentProblem.type);
      if (this.currentProblem.group) this.recentGroups.push(this.currentProblem.group);
      if (this.recentTypes.length > 10) this.recentTypes.shift();
      if (this.recentGroups.length > 10) this.recentGroups.shift();
    }

    this.problemStartTime = Date.now();
    return this.currentProblem;
  }

  submitAnswer(inputVal) {
    if (!this.isRunning || !this.currentProblem) return null;

    const now = Date.now();
    const responseTime = this.problemStartTime ? Math.max(0.1, Number(((now - this.problemStartTime) / 1000).toFixed(1))) : 3.0;

    let raw = String(inputVal).trim().replace(/\s+/g, "");
    // Xử lý dấu chấm hoặc phẩy ngăn cách hàng nghìn (ví dụ 1.200 hay 1,200)
    if (/^\d{1,3}(\.\d{3})+$/.test(raw)) {
      raw = raw.replace(/\./g, "");
    } else if (/^\d{1,3}(,\d{3})+$/.test(raw)) {
      raw = raw.replace(/,/g, "");
    }
    const num = Number(raw);
    const isCorrect = !Number.isNaN(num) && num === this.currentProblem.answer;

    const usedHint = Boolean(this.usedHintInCurrentProblem);
    const wasFast = isCorrect && responseTime <= 2.5 && !usedHint;

    let points = 0;
    let basePoints = 0;
    let speedBonus = 0;

    if (isCorrect) {
      this.responseTimes.push(responseTime);
      if (wasFast) this.fastSolveCount += 1;

      // Cơ chế tự động đẩy độ khó theo tốc độ (Velocity-Adaptive):
      // Nếu Bách tự giải không cần gợi ý -> cộng chuỗi streak bình thường
      // Nếu có dùng gợi ý mẹo -> streak không tăng, điểm là điểm hỗ trợ 30 đ để điểm phản ánh năng lực độc lập
      const streakIncrement = usedHint ? 0 : ((wasFast && this.streak >= 1) ? 2 : 1);
      this.streak += streakIncrement;
      if (this.streak > this.bestStreak) this.bestStreak = this.streak;
      this.correctCount += 1;

      // Hệ số điểm combo
      let multiplier = 1.0;
      if (this.streak >= 10) multiplier = 2.0;
      else if (this.streak >= 5) multiplier = 1.5;
      else if (this.streak >= 3) multiplier = 1.2;

      // Tính điểm cơ bản và điểm thưởng tốc độ (Speed-based Scoring)
      basePoints = usedHint ? 30 : Math.round(100 * multiplier);
      speedBonus = calculateSpeedBonus(responseTime, usedHint);
      points = basePoints + speedBonus;
      this.score += points;
      this.totalSpeedBonus = (this.totalSpeedBonus || 0) + speedBonus;

      this.onScoreChange({
        isCorrect: true,
        points,
        basePoints,
        speedBonus,
        score: this.score,
        streak: this.streak,
        problem: this.currentProblem,
        responseTime,
        wasFast,
        usedHint
      });
    } else {
      // Soft streak reset: chỉ lùi 3 streak thay vì về 0 hẳn
      this.streak = Math.max(0, this.streak - 3);
      this.wrongCount += 1;
      this.onScoreChange({
        isCorrect: false,
        points: 0,
        basePoints: 0,
        speedBonus: 0,
        score: this.score,
        streak: this.streak,
        problem: this.currentProblem,
        expected: this.currentProblem.answer,
        responseTime,
        wasFast: false
      });
    }

    const next = this.nextProblem();
    return { isCorrect, nextProblem: next, responseTime, wasFast, points, speedBonus };
  }
}

