import test from "node:test";
import assert from "node:assert/strict";
import { state } from "../js/core.js";
import { createEmptyDatabase } from "../data/data-core.js";
import {
  handleGlobalClick,
  handleGlobalChange,
  clearTransientAiPhotos,
  saveLocal
} from "../app.js";
import { askAi } from "../js/ai-client.js";
import { getWeekendMathExam } from "../js/math-weekend-exam.js";

test("exam-photo-submission-mock: handleGlobalChange handles JPEG, PNG, WebP, and HEIC photos safely", async () => {
  state.mathExamPhoto = null;
  state.writingImage = null;

  // 1. Giả lập chọn ảnh JPEG bài làm vở ô ly
  const fakeJpeg = {
    name: "bai_lam_bach.jpg",
    type: "image/jpeg",
    size: 250000,
    arrayBuffer: async () => Buffer.from("mock_jpeg_bytes")
  };

  await handleGlobalChange({
    target: {
      id: "mathPhotoInput",
      files: [fakeJpeg]
    }
  });

  assert.ok(state.mathExamPhoto, "state.mathExamPhoto must be populated");
  assert.equal(state.mathExamPhoto.name, "bai_lam_bach.jpg");
  assert.equal(state.mathExamPhoto.mimeType, "image/jpeg");
  assert.equal(state.writingImage.data, Buffer.from("mock_jpeg_bytes").toString("base64"));

  // 2. Giả lập chọn ảnh HEIC chụp trực tiếp từ camera iPad Pro (có Canvas nén ảnh)
  const origWindow = globalThis.window;
  const origDoc = globalThis.document;
  globalThis.window = { HTMLCanvasElement: function() {} };
  globalThis.document = { createElement: () => ({ getContext: () => null }), querySelector: () => null };

  const fakeHeic = {
    name: "IMG_0042.HEIC",
    type: "image/heic",
    size: 4500000,
    arrayBuffer: async () => Buffer.from("mock_heic_camera_bytes")
  };

  try {
    await handleGlobalChange({
      target: {
        id: "mathPhotoInput",
        files: [fakeHeic]
      }
    });

    assert.ok(state.mathExamPhoto, "HEIC camera photo must be accepted");
    assert.equal(state.mathExamPhoto.name, "IMG_0042.HEIC");
  } finally {
    globalThis.window = origWindow;
    globalThis.document = origDoc;
  }

  // 3. Bấm nút bỏ ảnh #removeMathPhotoBtn
  await handleGlobalClick({
    target: {
      closest: sel => sel === "#removeMathPhotoBtn" ? {} : null
    }
  });

  assert.equal(state.mathExamPhoto, null, "mathExamPhoto must be cleared");
  assert.equal(state.writingImage, null, "writingImage must be cleared");
});

test("exam-photo-submission-mock: sendMathTestToAi validation allows choices-only, photo-only, or full submission", async () => {
  state.db = createEmptyDatabase();
  state.db.examAnswers = {};
  state.mathExamPhoto = null;
  state.writingImage = null;
  state.examSession = null;

  let alertMessage = "";
  const origAlert = globalThis.alert;
  globalThis.alert = msg => { alertMessage = msg; };

  try {
    // 1. Không chọn trắc nghiệm, không có ảnh, không có giải thích -> Bị chặn
    await handleGlobalClick({
      target: {
        closest: sel => sel === "#sendMathTestToAi" ? {} : null
      }
    });

    assert.ok(alertMessage.includes("chọn đáp án trắc nghiệm, chụp ảnh bài làm"), "Must alert student to provide choices or photo");
    assert.equal(state.examSession, null, "examSession must not be initialized when validation fails");

    // 2. Bách đã chọn trắc nghiệm trên màn hình (chưa kịp chụp vở) -> Cho phép nộp!
    state.db.examAnswers[1] = { s0_q0: "A", s0_q1: "C" };
    alertMessage = "";

    // Mock fetch cho /api/tutor
    const origFetch = globalThis.fetch;
    let sentPayload = null;
    globalThis.fetch = async (url, opts) => {
      sentPayload = JSON.parse(opts.body);
      return {
        ok: true,
        headers: { get: () => "application/json" },
        json: async () => ({
          answer: "AI chấm: Phần I Trắc nghiệm Bách làm đúng 2/2 câu!",
          learningAction: null
        })
      };
    };

    try {
      await handleGlobalClick({
        target: {
          closest: sel => sel === "#sendMathTestToAi" ? {} : null
        }
      });

      assert.equal(alertMessage, "", "Must not alert when multiple choices are selected");
      assert.ok(state.examSession, "state.examSession must be initialized");
      assert.equal(state.examSession.examWeek, 1);
      assert.deepEqual(state.examSession.studentAnswers, { s0_q0: "A", s0_q1: "C" });
      assert.ok(sentPayload.userMessage.includes("ĐÁP ÁN TRẮC NGHIỆM BÁCH ĐÃ CHỌN TRỰC TIẾP TRÊN MÀN HÌNH"), "Payload must embed student choices");
      assert.ok(sentPayload.userMessage.includes('Câu 1: Bách đã chọn "A"'));
    } finally {
      globalThis.fetch = origFetch;
    }
  } finally {
    globalThis.alert = origAlert;
  }
});

test("exam-photo-submission-mock: full submission preserves photo, session context, and handles SSE stream response", async () => {
  state.db = createEmptyDatabase();
  state.db.examAnswers = {};
  state.db.examAnswers[2] = { s0_q0: "B", s0_q1: "A", s0_q2: "C", s0_q3: "D" };
  const mockPhoto = {
    name: "vo_toan_t2.jpg",
    mimeType: "image/jpeg",
    sizeBytes: 150000,
    data: "base64_photo_t2_mock_data"
  };
  state.mathExamPhoto = mockPhoto;
  state.writingImage = mockPhoto;

  const streamChunks = [
    'event: message\ndata: {"text":"Chào Bách! Mình vừa chấm xong bài kiểm tra Tuần 2 của Bách.\\n\\n"}\n\n',
    'event: message\ndata: {"text":"### PHẦN I: TRẮC NGHIỆM (3.0/3.0đ)\\n- Câu 1: Bách chọn B. 4.799 -> Đúng hoàn toàn!\\n\\n"}\n\n',
    'event: message\ndata: {"text":"### PHẦN II: TỰ LUẬN TRÊN VỞ Ô LY\\n- Đặt tính thẳng hàng rất sạch đẹp!\\n\\n"}\n\n',
    'event: message\ndata: {"text":"=> TỔNG ĐIỂM: 9.5 / 10 ĐIỂM"}\n\n',
    'event: done\ndata: {"done":true}\n\n'
  ];

  let chunkIdx = 0;
  const mockReader = {
    read: async () => {
      if (chunkIdx < streamChunks.length) {
        const val = Buffer.from(streamChunks[chunkIdx++]);
        return { done: false, value: val };
      }
      return { done: true, value: undefined };
    },
    releaseLock: () => {}
  };

  const origFetch = globalThis.fetch;
  let sentPayload = null;
  globalThis.fetch = async (url, opts) => {
    sentPayload = JSON.parse(opts.body);
    return {
      ok: true,
      headers: { get: () => "text/event-stream" },
      body: { getReader: () => mockReader }
    };
  };

  try {
    await askAi({
      mode: "student_tutor",
      userMessage: "Chấm bài kiểm tra tuần 2",
      writingImage: mockPhoto
    });

    assert.ok(state.tutor.lastAnswer.includes("Chào Bách!"), "Must record completed stream answer");
    assert.ok(state.tutor.lastAnswer.includes("TỔNG ĐIỂM: 9.5 / 10 ĐIỂM"), "Must record full score summary");
    assert.equal(state.tutor.isLoading, false, "isLoading must be reset to false");
    assert.equal(sentPayload.writingImage.data, "base64_photo_t2_mock_data", "Payload must include image inlineData");
    assert.equal(sentPayload.stream, true, "Payload must request stream mode");
  } finally {
    globalThis.fetch = origFetch;
  }
});
