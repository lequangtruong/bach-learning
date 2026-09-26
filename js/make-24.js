// js/make-24.js - Mini-game "Đấu Trường 24" (Make 24 Challenge Engine)
// Giúp Bách làm chủ cấu trúc biểu thức số học và quy tắc ngoặc toán lớp 4

import { MAKE_24_BANK } from "./make-24-bank.js";
export { MAKE_24_BANK };

/**
 * Bộ phân tích biểu thức số học an toàn (Safe Arithmetic Expression Evaluator)
 * Không dùng eval(), hỗ trợ đầy đủ +, -, × (*), : (/) và dấu ngoặc ( ) theo thứ tự chuẩn.
 */
export function evaluateArithmeticTokens(tokens) {
  if (!tokens || tokens.length === 0) {
    return { ok: false, error: "Chưa có biểu thức nào được nhập!" };
  }

  // Chuyển ký hiệu × thành * và : thành / và các loại dấu trừ unicode
  const sanitized = tokens.map(t => {
    if (t === "×") return "*";
    if (t === ":") return "/";
    if (t === "−" || t === "–" || t === "—") return "-";
    return t;
  });

  // Shunting-Yard Algorithm chuyển Trung tố (Infix) sang Hậu tố (RPN)
  const prec = { "+": 1, "-": 1, "*": 2, "/": 2 };
  const out = [];
  const ops = [];

  for (let i = 0; i < sanitized.length; i++) {
    const t = sanitized[i];
    if (/^\d+$/.test(t)) {
      out.push(Number(t));
    } else if (t === "(") {
      ops.push(t);
    } else if (t === ")") {
      while (ops.length > 0 && ops[ops.length - 1] !== "(") {
        out.push(ops.pop());
      }
      if (ops.length === 0) {
        return { ok: false, error: "Dấu đóng ngoặc ')' không khớp!" };
      }
      ops.pop(); // Bỏ '('
    } else if (t in prec) {
      while (
        ops.length > 0 &&
        ops[ops.length - 1] in prec &&
        prec[ops[ops.length - 1]] >= prec[t]
      ) {
        out.push(ops.pop());
      }
      ops.push(t);
    } else {
      return { ok: false, error: `Ký tự không hợp lệ: ${t}` };
    }
  }

  while (ops.length > 0) {
    const top = ops.pop();
    if (top === "(" || top === ")") {
      return { ok: false, error: "Dấu mở ngoặc '(' chưa được đóng!" };
    }
    out.push(top);
  }

  // Tính toán biểu thức RPN
  const stack = [];
  for (const item of out) {
    if (typeof item === "number") {
      stack.push(item);
    } else {
      if (stack.length < 2) {
        return { ok: false, error: "Biểu thức thiếu số hạng!" };
      }
      const b = stack.pop();
      const a = stack.pop();
      let res = 0;
      if (item === "+") res = a + b;
      else if (item === "-") res = a - b;
      else if (item === "*") res = a * b;
      else if (item === "/") {
        if (b === 0) return { ok: false, error: "Lỗi toán học: Không thể chia cho số 0!" };
        res = a / b;
      }
      stack.push(res);
    }
  }

  if (stack.length !== 1) {
    return { ok: false, error: "Biểu thức chưa hoàn chỉnh!" };
  }

  return { ok: true, value: stack[0] };
}

export class Make24Session {
  constructor(initialIndex = 0) {
    this.currentIndex = initialIndex;
    this.solvedIds = new Set();
    this.usedCardIndices = new Set();
    this.tokens = [];
    this.isSolved = false;
    this.loadChallenge(this.currentIndex);
  }

  loadChallenge(index) {
    this.currentIndex = Math.max(0, Math.min(MAKE_24_BANK.length - 1, index));
    this.usedCardIndices = new Set();
    this.tokens = [];
    this.isSolved = false;
  }

  getCurrentChallenge() {
    return MAKE_24_BANK[this.currentIndex];
  }

  pushCard(cardIndex) {
    const ch = this.getCurrentChallenge();
    if (this.usedCardIndices.has(cardIndex)) return false;
    const cardVal = ch.cards[cardIndex];
    if (cardVal === undefined) return false;

    this.usedCardIndices.add(cardIndex);
    this.tokens.push(String(cardVal));
    return true;
  }

  pushOperator(op) {
    if (!["+", "−", "×", ":", "(", ")"].includes(op)) return false;
    // Chuẩn hóa dấu trừ toán học
    const cleanOp = op === "−" ? "-" : op;
    this.tokens.push(cleanOp);
    return true;
  }

  popToken() {
    if (this.tokens.length === 0) return null;
    const removed = this.tokens.pop();
    const ch = this.getCurrentChallenge();

    // Nếu token bị xóa là một thẻ số, tìm thẻ tương ứng gần nhất để hoàn lại
    if (/^\d+$/.test(removed)) {
      const num = Number(removed);
      // Tìm cardIndex đang được dùng có giá trị bằng num
      for (const idx of Array.from(this.usedCardIndices).reverse()) {
        if (ch.cards[idx] === num) {
          this.usedCardIndices.delete(idx);
          break;
        }
      }
    }
    return removed;
  }

  clearExpression() {
    this.tokens = [];
    this.usedCardIndices.clear();
  }

  getExpressionString() {
    return this.tokens.map(t => {
      if (t === "*") return "×";
      if (t === "/") return ":";
      if (t === "-") return "−";
      return t;
    }).join(" ");
  }

  getTarget() {
    const ch = this.getCurrentChallenge();
    return ch && ch.target !== undefined ? ch.target : 24;
  }

  checkSolution() {
    const ch = this.getCurrentChallenge();
    const target = this.getTarget();

    // 1. Phải dùng đủ cả 4 thẻ số
    if (this.usedCardIndices.size !== 4) {
      return {
        isSuccess: false,
        message: `Bách cần dùng đủ cả 4 thẻ số! (Hiện mới dùng ${this.usedCardIndices.size}/4 thẻ).`
      };
    }

    // 2. Tính toán biểu thức
    const evalRes = evaluateArithmeticTokens(this.tokens);
    if (!evalRes.ok) {
      return {
        isSuccess: false,
        message: evalRes.error
      };
    }

    const val = evalRes.value;
    if (Math.abs(val - target) < 1e-6) {
      this.isSolved = true;
      this.solvedIds.add(ch.id);
      return {
        isSuccess: true,
        result: target,
        message: `🎉 XUẤT SẮC! Biểu thức của Bách cho kết quả đúng bằng ${target}!`,
        sampleSolution: ch.sampleSolution
      };
    }

    return {
      isSuccess: false,
      result: Number(val.toFixed(2)),
      message: `Biểu thức có kết quả là ${Number(val.toFixed(2))} (chưa bằng ${target}). Hãy thử đổi vị trí hoặc phép tính nhé!`,
      hint: ch.hint
    };
  }

  nextChallenge() {
    if (this.currentIndex < MAKE_24_BANK.length - 1) {
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
    const otherLevels = MAKE_24_BANK.filter(c => c.difficulty !== cur.difficulty);
    const unsolved = otherLevels.filter(c => !this.solvedIds.has(c.id));
    const pool = unsolved.length > 0 ? unsolved : (otherLevels.length > 0 ? otherLevels : MAKE_24_BANK);
    const picked = pool[Math.floor(Math.random() * pool.length)];
    if (picked) {
      this.loadChallenge(picked.index);
    }
    return this.getCurrentChallenge();
  }
}
