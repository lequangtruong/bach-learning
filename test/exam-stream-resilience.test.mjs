import test from "node:test";
import assert from "node:assert/strict";
import { askAi } from "../js/ai-client.js";
import { state, handleGlobalClick } from "../app.js";

test("exam-stream-resilience: sets lastError and preserves lastFailedSubmission when SSE stream terminates prematurely without done event", async () => {
  const origFetch = globalThis.fetch;
  try {
    state.tutor.lastError = null;
    state.tutor.lastFailedSubmission = null;
    state.tutor.lastAnswer = "old_answer";

    // Giả lập SSE stream bị ngắt kết nối giữa chừng (không có event: done)
    const stream = new ReadableStream({
      start(controller) {
        controller.enqueue(new TextEncoder().encode("data: {\"text\": \"Chào Bách, mình đang đọc dở câu 1...\"}\n\n"));
        // Đóng đột ngột không emit done
        controller.close();
      }
    });

    globalThis.fetch = async () => ({
      ok: true,
      headers: {
        get: (h) => h.toLowerCase() === "content-type" ? "text/event-stream" : ""
      },
      body: stream
    });

    await askAi({
      mode: "student_tutor",
      userMessage: "Chấm bài tuần 8",
      writingImage: { mimeType: "image/jpeg", data: "test_base64" }
    });

    // Bắt buộc phải báo lỗi ngắt quãng và không lưu kết quả dở vào lastAnswer
    assert.match(state.tutor.lastError, /bị ngắt quãng giữa chừng/i);
    assert.notEqual(state.tutor.lastAnswer, "Chào Bách, mình đang đọc dở câu 1...", "Must not save truncated answer as final");

    // Kiểm tra cấu hình yêu cầu lỗi vẫn được lưu để phục vụ Thử lại
    assert.ok(state.tutor.lastFailedSubmission, "state.tutor.lastFailedSubmission must be preserved");
    assert.equal(state.tutor.lastFailedSubmission.mode, "student_tutor");
    assert.equal(state.tutor.lastFailedSubmission.writingImage.data, "test_base64");
  } finally {
    globalThis.fetch = origFetch;
  }
});

test("exam-stream-resilience: successful stream with done event clears lastFailedSubmission and records lastAnswer", async () => {
  const origFetch = globalThis.fetch;
  try {
    state.tutor.lastError = "previous error";
    const stream = new ReadableStream({
      start(controller) {
        controller.enqueue(new TextEncoder().encode("data: {\"text\": \"Chào Bách, mình chấm xong rồi: 10/10!\"}\n\n"));
        controller.enqueue(new TextEncoder().encode("event: done\ndata: {\"done\": true}\n\n"));
        controller.close();
      }
    });

    globalThis.fetch = async () => ({
      ok: true,
      headers: {
        get: (h) => h.toLowerCase() === "content-type" ? "text/event-stream" : ""
      },
      body: stream
    });

    await askAi({
      mode: "student_tutor",
      userMessage: "Chấm bài tuần 8",
      writingImage: { mimeType: "image/jpeg", data: "test_base64" }
    });

    assert.equal(state.tutor.lastError, null, "lastError must be reset on success");
    assert.equal(state.tutor.lastFailedSubmission, null, "lastFailedSubmission must be cleared on success");
    assert.ok(state.tutor.lastAnswer.includes("10/10"), "lastAnswer must contain the complete evaluation text");
  } finally {
    globalThis.fetch = origFetch;
  }
});

test("exam-stream-resilience: #retryAiRequestBtn triggers askAi with lastFailedSubmission payload", async () => {
  let askedWith = null;
  const origFetch = globalThis.fetch;

  try {
    state.tutor.lastFailedSubmission = {
      mode: "student_tutor",
      userMessage: "Chấm lại bài tuần 8 sau khi mất mạng",
      writingImage: { mimeType: "image/jpeg", data: "retry_photo" }
    };
    state.tutor.lastError = "Quá trình nhận phản hồi bị ngắt quãng";

    globalThis.fetch = async (url, opts) => {
      const parsedBody = JSON.parse(opts.body);
      askedWith = parsedBody;
      const stream = new ReadableStream({
        start(controller) {
          controller.enqueue(new TextEncoder().encode("data: {\"text\": \"Đã kết nối lại thành công!\"}\n\n"));
          controller.enqueue(new TextEncoder().encode("event: done\ndata: {\"done\": true}\n\n"));
          controller.close();
        }
      });
      return {
        ok: true,
        headers: {
          get: (h) => h.toLowerCase() === "content-type" ? "text/event-stream" : ""
        },
        body: stream
      };
    };

    // Giả lập bấm nút Thử lại
    await handleGlobalClick({
      target: {
        closest: (sel) => sel === "#retryAiRequestBtn" ? {} : null
      }
    });

    assert.ok(askedWith, "askAi must have been called");
    assert.equal(askedWith.writingImage.data, "retry_photo");
    assert.equal(state.tutor.lastError, null, "lastError must be reset upon retry");
  } finally {
    globalThis.fetch = origFetch;
  }
});
