import test from "node:test";
import assert from "node:assert/strict";
import { state, allWeeks, buildWeeklySummaryPrompt } from "../js/core.js";
import { createEmptyDatabase } from "../data/data-core.js";
import { handleGlobalClick } from "../app.js";
import { askAi, setAiClientHandlers } from "../js/ai-client.js";
import { getWeekendMathExam, renderExamSummaryHtml } from "../js/math-weekend-exam.js";

import { loadCurriculum } from "./helpers/curriculum-fixture.js";

const { curriculum } = loadCurriculum();
globalThis.BACH_CURRICULUM = curriculum;

test("exam-weekly-summary-mock: buildWeeklySummaryPrompt handles valid and missing state gracefully", () => {
  state.db = createEmptyDatabase();
  const week1 = allWeeks()[0];

  state.db.progress[week1.id] = { math: true, vietnamese: false, mentalMath: true };
  state.db.notes[week1.id] = "Bách làm tính nhẩm rất nhanh, cần chú ý chữ viết.";
  state.db.chatHistory = [
    { role: "user", text: "Bài toán hiệu và tỉ số giải thế nào?", weekId: "w1" },
    { role: "model", text: "Bách hãy vẽ sơ đồ đoạn thẳng trước nhé.", weekId: "w1" }
  ];

  const prompt = buildWeeklySummaryPrompt(week1);
  assert.ok(prompt.includes("Tuần 1"), "Prompt must mention week 1");
  assert.ok(prompt.includes("Đọc đề như nhà điều tra"), "Prompt must mention math focus");
  assert.ok(prompt.includes("Câu rõ ý"), "Prompt must mention vietnamese focus");
  assert.ok(prompt.includes("Đã đánh dấu Toán: có"), "Prompt must include math progress");
  assert.ok(prompt.includes("Đã đánh dấu Văn: chưa"), "Prompt must include vietnamese progress");
  assert.ok(prompt.includes("Bách làm tính nhẩm rất nhanh"), "Prompt must include family note");
  assert.ok(prompt.includes("Bài toán hiệu và tỉ số giải thế nào?"), "Prompt must include chat history");

  // Kiểm tra trường hợp state.db chưa có ghi chú hoặc chat rỗng
  state.db = createEmptyDatabase();
  const emptyPrompt = buildWeeklySummaryPrompt(week1);
  assert.ok(emptyPrompt.includes("Chưa có ghi chú riêng"), "Prompt must handle missing notes");
  assert.ok(emptyPrompt.includes("Chưa có hội thoại AI"), "Prompt must handle empty chat history");
});

test("exam-weekly-summary-mock: clicking #weeklySummaryBtn triggers parent_summary mode and updates UI state", async () => {
  state.db = createEmptyDatabase();
  state.tutor.selectedWeek = "w2";
  state.openWeek = "w2";

  let capturedAskAiArgs = null;
  const origFetch = globalThis.fetch;

  // Giả lập mock fetch trả về SSE stream cho parent summary
  globalThis.fetch = async (url, opts) => {
    const payload = JSON.parse(opts.body);
    capturedAskAiArgs = payload;

    const sseBody = [
      'data: {"text":"Báo cáo Tuần 2: Bách nắm chắc phép nhân và chia. "}\n\n',
      'data: {"text":"Cần rèn thêm bài toán có lời văn 2 bước tính."}\n\n',
      'event: done\ndata: {"done":true}\n\n'
    ].join("");

    return {
      ok: true,
      headers: {
        get: (h) => h.toLowerCase() === "content-type" ? "text/event-stream" : null
      },
      body: {
        getReader: () => {
          let sent = false;
          return {
            read: async () => {
              if (sent) return { done: true, value: undefined };
              sent = true;
              return { done: false, value: new TextEncoder().encode(sseBody) };
            },
            releaseLock: () => {}
          };
        }
      }
    };
  };

  // Mock DOM elements
  const mockBtn = { disabled: false, textContent: "AI tổng kết tuần" };
  const mockStatus = { textContent: "" };
  const mockAnswer = { textContent: "", hidden: true };
  const mockThinkingIndicator = { hidden: true, setAttribute() {} };

  const origDoc = globalThis.document;
  globalThis.document = {
    querySelector: (sel) => {
      if (sel === "#weeklySummaryBtn") return mockBtn;
      if (sel === "#aiStatus") return mockStatus;
      if (sel === "#aiAnswer") return mockAnswer;
      if (sel === "#aiThinkingIndicator") return mockThinkingIndicator;
      if (sel === "#aiThinkingText") return { textContent: "" };
      return null;
    }
  };

  let renderGuideCalled = false;
  let saveLocalCalled = false;
  setAiClientHandlers({
    saveLocal: async () => { saveLocalCalled = true; },
    renderGuide: () => { renderGuideCalled = true; }
  });

  try {
    const clickEvt = {
      target: {
        closest: (sel) => (sel === "#weeklySummaryBtn" ? mockBtn : null)
      }
    };

    await handleGlobalClick(clickEvt);

    // Chờ luồng async askAi hoàn tất
    await new Promise(r => setTimeout(r, 60));

    assert.equal(capturedAskAiArgs.mode, "parent_summary", "Must send mode parent_summary");
    assert.equal(capturedAskAiArgs.weekId, "w2", "Must summarize selected week w2");
    assert.ok(state.db.weeklySummaries["w2"], "Weekly summary must be saved in state.db.weeklySummaries['w2']");
    assert.ok(state.db.weeklySummaries["w2"].includes("Bách nắm chắc phép nhân"), "Saved content must match AI output");
    assert.equal(saveLocalCalled, true, "saveLocal must be called to persist summary to IndexedDB / Drive");
    assert.equal(renderGuideCalled, true, "renderGuide must be called to re-render DOM with report");
    assert.equal(mockBtn.disabled, false, "Summary button must be re-enabled after completion");
  } finally {
    globalThis.fetch = origFetch;
    globalThis.document = origDoc;
  }
});

test("exam-weekly-summary-mock: exam AI grading persists in db.examGrades and displays in renderExamSummaryHtml", async () => {
  state.db = createEmptyDatabase();
  state.db.examAnswers = {
    1: { s0_q0: "B", s0_q1: "C", s0_q2: "A", s0_q3: "D" }
  };

  const exam = getWeekendMathExam(1);

  // Trước khi AI chấm: Thẻ tổng kết chưa có AI kết quả
  const initialHtml = renderExamSummaryHtml(exam, state.db.examAnswers[1], state);
  assert.ok(initialHtml.includes("Đã chọn 4/4 câu"), "Must show answered count");
  assert.ok(!initialHtml.includes("🏆 Kết quả chấm từ Trợ giảng AI:"), "Must not show AI grade yet");

  // Giả lập AI chấm xong bài kiểm tra tuần 1
  const aiEvaluationText = "Bách đạt 9/10 điểm! Rất xuất sắc phần trắc nghiệm (4/4 đúng). Bài tự luận 1 trình bày sạch đẹp.";
  state.examSession = {
    examWeek: 1,
    examTitle: exam.title,
    examObj: exam,
    studentAnswers: state.db.examAnswers[1],
    lastAiAnswer: aiEvaluationText,
    submittedAt: Date.now()
  };

  // Giả lập luồng askAi lưu bền vững vào db.examGrades
  state.db.examGrades = {
    1: {
      examWeek: 1,
      lastAiAnswer: aiEvaluationText,
      gradedAt: new Date().toISOString()
    }
  };

  // Thẻ tổng kết khi có kết quả
  const gradedHtml = renderExamSummaryHtml(exam, state.db.examAnswers[1], state);
  assert.ok(gradedHtml.includes("✓ AI đã chấm điểm"), "Must display is-graded badge");
  assert.ok(gradedHtml.includes("🏆 Kết quả chấm từ Trợ giảng AI:"), "Must display AI grade header");
  assert.ok(gradedHtml.includes("Bách đạt 9/10 điểm!"), "Must display AI feedback snippet");

  // Giả lập chuyển tab / refresh trang làm mất tạm thời state.examSession, db.examGrades vẫn hiển thị kết quả
  const stateWithoutSession = {
    db: state.db,
    mathExamPhoto: null,
    writingImage: null,
    examSession: null
  };
  const persistedHtml = renderExamSummaryHtml(exam, state.db.examAnswers[1], stateWithoutSession);
  assert.ok(persistedHtml.includes("🏆 Kết quả chấm từ Trợ giảng AI:"), "Must persist AI evaluation from db.examGrades even after session reset");
});
