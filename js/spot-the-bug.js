// js/spot-the-bug.js - Mini-game "AI Thám Tử Bắt Lỗi Sai" Session Engine
// Quản lý phiên phá án, tính điểm phản xạ, chuyển tiếp chuyên đề linh hoạt

import { BUG_TOPICS, BUG_CASES } from "./spot-the-bug-cases.js";
export { BUG_TOPICS, BUG_CASES };

export class SpotTheBugSession {
  constructor(initialIndex = 0, options = {}) {
    this.currentIndex = initialIndex;
    this.solvedIds = new Set();
    this.selectedStep = null;
    this.feedback = null;
    this.interleaved = Boolean(options?.interleaved);
    this.recentTopics = [];
    this.solveStartTime = Date.now();
    const cur = this.getCurrentCase();
    if (cur?.topic) this.recentTopics.push(cur.topic);
  }

  getCurrentCase() {
    return BUG_CASES[this.currentIndex % BUG_CASES.length];
  }

  selectStep(stepNum) {
    const currentCase = this.getCurrentCase();
    this.selectedStep = stepNum;
    const step = currentCase.steps.find(s => s.num === stepNum);

    if (!step) return null;

    const bugStep = currentCase.steps.find(s => s.isBug);
    const bugStepNum = bugStep ? bugStep.num : -1;

    const elapsed = Math.max(0.1, Number(((Date.now() - (this.solveStartTime || Date.now())) / 1000).toFixed(1)));

    // Phân loại chính xác 3 trạng thái của từng bước theo nội dung toán học:
    const isRootBug = Boolean(step.isBug || step.status === "root_bug");
    const isValidStep = Boolean(!isRootBug && (step.isValid === true || step.status === "valid" || (stepNum < bugStepNum && !step.isConsequential)));
    const isConsequential = Boolean(!isRootBug && !isValidStep && (step.isConsequential === true || step.status === "consequential" || (bugStepNum !== -1 && stepNum > bugStepNum)));

    if (isRootBug) {
      this.solvedIds.add(currentCase.id);
      const isFast = elapsed <= 10;
      this.feedback = {
        isCorrect: true,
        isRootBug: true,
        isConsequential: false,
        isValidStep: false,
        bugStepNum,
        message: isFast
          ? `🎉 CHÍNH XÁC! Thám tử Bách đã phá án thần tốc (⚡ ${elapsed}s) và bắt đúng BƯỚC SAI ĐẦU TIÊN!`
          : "🎉 CHÍNH XÁC! Thám tử Bách đã phá án xuất sắc và bắt đúng BƯỚC SAI ĐẦU TIÊN!",
        explanation: currentCase.bugExplanation,
        solution: currentCase.correctSolution,
        solveTime: elapsed,
        isFast
      };
    } else if (isValidStep) {
      this.feedback = {
        isCorrect: false,
        isRootBug: false,
        isConsequential: false,
        isValidStep: true,
        bugStepNum,
        message: `Bước ${stepNum} này bạn học sinh tính toán và lập luận hoàn toàn chính xác theo đề bài! Thám tử Bách hãy kiểm tra kĩ quy tắc hoặc phép tính ở các bước tiếp theo nhé!`,
        explanation: null,
        solution: null,
        solveTime: elapsed,
        isFast: false
      };
    } else {
      // Bước sai hệ quả (consequential)
      this.feedback = {
        isCorrect: false,
        isRootBug: false,
        isConsequential: true,
        isValidStep: false,
        bugStepNum,
        message: `⚠️ Bước ${stepNum} này có kết quả sai, nhưng đây chỉ là HỆ QUẢ kéo theo do dùng số liệu sai từ Bước ${bugStepNum}! Về mặt logic phá án, Thám tử Bách hãy tìm ra BƯỚC ĐẦU TIÊN bắt đầu phạm sai lầm nhé!`,
        explanation: null,
        solution: null,
        solveTime: elapsed,
        isFast: false
      };
    }
    return this.feedback;
  }

  nextInterleavedCase() {
    const currentCase = this.getCurrentCase();
    const currentTopic = currentCase?.topic;
    if (currentTopic && !this.recentTopics.includes(currentTopic)) {
      this.recentTopics.push(currentTopic);
    }
    if (this.recentTopics.length > 5) {
      this.recentTopics.shift();
    }

    // Lọc chuyên đề không nằm trong 3 chuyên đề vừa giải gần nhất
    const recentTopicList = this.recentTopics.slice(-3);
    const availableTopics = BUG_TOPICS
      .map(t => t.name)
      .filter(name => !recentTopicList.includes(name));

    const topicPool = availableTopics.length > 0
      ? availableTopics
      : BUG_TOPICS.map(t => t.name).filter(n => n !== currentTopic);

    const chosenTopic = topicPool[Math.floor(Math.random() * topicPool.length)] || BUG_TOPICS[0].name;

    // Trong chuyên đề đã chọn, ưu tiên vụ án Bách chưa phá
    const casesInTopic = BUG_CASES.filter(c => c.topic === chosenTopic);
    const unsolved = casesInTopic.filter(c => !this.solvedIds.has(c.id));
    const pool = unsolved.length > 0 ? unsolved : casesInTopic;
    const chosenCase = pool[Math.floor(Math.random() * pool.length)] || casesInTopic[0];

    const newIndex = BUG_CASES.findIndex(c => c.id === chosenCase.id);
    this.currentIndex = newIndex !== -1 ? newIndex : (this.currentIndex + 1) % BUG_CASES.length;
    this.selectedStep = null;
    this.feedback = null;
    this.solveStartTime = Date.now();
    if (chosenCase?.topic) {
      this.recentTopics.push(chosenCase.topic);
      if (this.recentTopics.length > 5) this.recentTopics.shift();
    }
    return this.getCurrentCase();
  }

  nextCase(options = {}) {
    const isInterleaved = (typeof options === "object" && options?.interleaved) || (options === true) || this.interleaved;
    if (isInterleaved) {
      return this.nextInterleavedCase();
    }
    this.currentIndex = (this.currentIndex + 1) % BUG_CASES.length;
    this.selectedStep = null;
    this.feedback = null;
    this.solveStartTime = Date.now();
    return this.getCurrentCase();
  }

  prevCase() {
    this.currentIndex = (this.currentIndex - 1 + BUG_CASES.length) % BUG_CASES.length;
    this.selectedStep = null;
    this.feedback = null;
    this.solveStartTime = Date.now();
    return this.getCurrentCase();
  }
}
