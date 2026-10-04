import test from "node:test";
import assert from "node:assert/strict";
import {
  renderExamPaperHtml,
  renderExamSummaryHtml,
  buildExamGradingPrompt,
  getWeekendMathExam
} from "../js/math-weekend-exam.js";
import { state } from "../js/core.js";
import { createEmptyDatabase } from "../data/data-core.js";
import { handleGlobalClick, saveLocal } from "../app.js";

test("exam-interactive-choices-mock: renderExamPaperHtml renders accessible buttons with choice badges", () => {
  const exam = getWeekendMathExam(1);
  const studentAnswers = { s0_q0: "B", s0_q1: "A" };
  const html = renderExamPaperHtml(exam, studentAnswers);

  // Phải có class exam-choice-btn và data attributes chuẩn cho iPad touch
  assert.ok(html.includes("exam-choice-btn"), "Must render buttons with class exam-choice-btn");
  assert.ok(html.includes('data-choice-letter="A"'), "Must have data-choice-letter");
  assert.ok(html.includes('data-choice-letter="B"'), "Must have data-choice-letter B");
  assert.ok(html.includes('data-exam-week="1"'), "Must have data-exam-week");
  assert.ok(html.includes('class="exam-choice-badge">A<'), "Must render badge for option A");

  // Kiểm tra trạng thái is-selected theo studentAnswers
  assert.match(html, /class="[^"]*is-selected[^"]*"[^>]*data-choice-letter="B"[^>]*aria-pressed="true"/s,
    "Choice B for question 1 must have is-selected and aria-pressed=true");
  assert.match(html, /class="[^"]*is-selected[^"]*"[^>]*data-choice-letter="A"[^>]*aria-pressed="true"/s,
    "Choice A for question 2 must have is-selected and aria-pressed=true");
});

test("exam-interactive-choices-mock: clicking choice button updates state.db.examAnswers and toggles DOM selection", async () => {
  // Chuẩn bị state và DOM giả lập
  state.db = createEmptyDatabase();
  state.db.examAnswers = {};

  // Mock DOM structure cho Question 1
  const choiceBtnA = {
    dataset: { examWeek: "1", secIdx: "0", qIdx: "0", choiceLetter: "A" },
    classList: {
      classes: new Set(),
      toggle(cls, val) { if (val) this.classes.add(cls); else this.classes.delete(cls); },
      contains(cls) { return this.classes.has(cls); }
    },
    setAttribute(name, val) { this[name] = String(val); },
    querySelector(sel) { return this._checkEl || null; },
    appendChild(el) { this._checkEl = el; },
    closest(sel) {
      if (sel === ".exam-choice-btn") return choiceBtnA;
      if (sel === ".exam-question-item") return questionItem;
      return null;
    }
  };

  const choiceBtnB = {
    dataset: { examWeek: "1", secIdx: "0", qIdx: "0", choiceLetter: "B" },
    classList: {
      classes: new Set(),
      toggle(cls, val) { if (val) this.classes.add(cls); else this.classes.delete(cls); },
      contains(cls) { return this.classes.has(cls); }
    },
    setAttribute(name, val) { this[name] = String(val); },
    querySelector(sel) { return this._checkEl || null; },
    appendChild(el) { this._checkEl = el; },
    closest(sel) {
      if (sel === ".exam-choice-btn") return choiceBtnB;
      if (sel === ".exam-question-item") return questionItem;
      return null;
    }
  };

  const questionItem = {
    querySelectorAll(sel) {
      if (sel === ".exam-choice-btn") return [choiceBtnA, choiceBtnB];
      return [];
    }
  };

  // 1. Bách bấm chọn đáp án A
  await handleGlobalClick({ target: choiceBtnA });

  assert.equal(state.db.examAnswers[1]?.s0_q0, "A", "state.db.examAnswers[1].s0_q0 must be A");
  assert.equal(choiceBtnA.classList.contains("is-selected"), true, "Choice A must have is-selected");
  assert.equal(choiceBtnA["aria-pressed"], "true", "Choice A must have aria-pressed=true");
  assert.equal(choiceBtnB.classList.contains("is-selected"), false, "Choice B must not be selected");
  assert.equal(choiceBtnB["aria-pressed"], "false", "Choice B must have aria-pressed=false");

  // 2. Bách đổi ý bấm chọn đáp án B
  await handleGlobalClick({ target: choiceBtnB });

  assert.equal(state.db.examAnswers[1]?.s0_q0, "B", "state.db.examAnswers[1].s0_q0 must switch to B");
  assert.equal(choiceBtnB.classList.contains("is-selected"), true, "Choice B must now have is-selected");
  assert.equal(choiceBtnB["aria-pressed"], "true", "Choice B must now have aria-pressed=true");
  assert.equal(choiceBtnA.classList.contains("is-selected"), false, "Choice A must no longer have is-selected");
  assert.equal(choiceBtnA["aria-pressed"], "false", "Choice A must have aria-pressed=false");
});

test("exam-interactive-choices-mock: renderExamSummaryHtml tracks progress and shows answered count", () => {
  const exam = getWeekendMathExam(1);

  // Trường hợp 1: Chưa chọn câu nào
  const emptySummary = renderExamSummaryHtml(exam, {}, {});
  assert.ok(emptySummary.includes("Đã chọn 0/4 câu"), "Must indicate 0/4 choices answered initially");
  assert.ok(emptySummary.includes("Vở ô ly: Chưa chụp"), "Must indicate notebook photo not attached");

  // Trường hợp 2: Đã chọn 2 câu
  const partialAnswers = { s0_q0: "A", s0_q1: "C" };
  const partialSummary = renderExamSummaryHtml(exam, partialAnswers, {
    mathExamPhoto: { name: "vo_toan_t1.jpg" }
  });
  assert.ok(partialSummary.includes("Đã chọn 2/4 câu"), "Must indicate 2/4 choices answered");
  assert.ok(partialSummary.includes("Vở ô ly: vo_toan_t1.jpg"), "Must display attached photo filename");
  assert.ok(partialSummary.includes("Câu 1:"), "Must list question 1");
  assert.ok(partialSummary.includes("A"), "Must show choice A for question 1");
  assert.ok(partialSummary.includes("C"), "Must show choice C for question 2");

  // Trường hợp 3: Đã chọn đủ 4/4 câu
  const fullAnswers = { s0_q0: "A", s0_q1: "C", s0_q2: "B", s0_q3: "D" };
  const fullSummary = renderExamSummaryHtml(exam, fullAnswers, {
    examSession: {
      originalPhoto: { name: "vo_oly_full.jpg" },
      lastAiAnswer: "AI đã chấm 9.5/10 điểm"
    }
  });
  assert.ok(fullSummary.includes("is-complete"), "Complete badge must have is-complete class");
  assert.ok(fullSummary.includes("Đã chọn 4/4 câu"), "Must show 4/4 choices selected");
  assert.ok(fullSummary.includes("AI đã chấm 9.5/10 điểm"), "Must render AI score feedback in summary card");
});

test("exam-interactive-choices-mock: buildExamGradingPrompt embeds Bách's selected choices into prompt", () => {
  const exam = getWeekendMathExam(1);
  const studentAnswers = {
    s0_q0: "A",
    s0_q1: "B",
    s0_q2: "C",
    s0_q3: "D"
  };

  const prompt = buildExamGradingPrompt(exam, "Bách đã tính cẩn thận", studentAnswers);

  assert.ok(prompt.includes("ĐÁP ÁN TRẮC NGHIỆM BÁCH ĐÃ CHỌN TRỰC TIẾP TRÊN MÀN HÌNH"), "Prompt must have student choices section");
  assert.ok(prompt.includes('Câu 1: Bách đã chọn "A"'), "Must include Question 1 choice A");
  assert.ok(prompt.includes('Câu 2: Bách đã chọn "B"'), "Must include Question 2 choice B");
  assert.ok(prompt.includes('Câu 3: Bách đã chọn "C"'), "Must include Question 3 choice C");
  assert.ok(prompt.includes('Câu 4: Bách đã chọn "D"'), "Must include Question 4 choice D");
  assert.ok(prompt.includes("ĐÁP ÁN VÀ BAREM CHUẨN"), "Must retain full rubric for comparison");
});
