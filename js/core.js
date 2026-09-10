// js/core.js - Shared constants, state, escaping/task-list utilities, learning context/progress helpers
import { createEmptyDatabase } from "../data/data-core.js";

export const storageKey = "bach-learning-progress-v2";
export const DB_NAME = "BachLearningDB";
export const DB_VERSION = 2;
export const DB_STORE = "userLearningStore";
export const DEFAULT_GOOGLE_CLIENT_ID = "PLACEHOLDER_GOOGLE_CLIENT_ID.apps.googleusercontent.com";

export const PHOTO_BOUNDS = {
  MAX_SIZE_BYTES: 1024 * 1024,
  ALLOWED_MIMES: ["image/jpeg", "image/png", "image/webp"]
};

export function validatePhotoFile(file) {
  if (!file) return { ok: false, error: "Chưa chọn file ảnh." };
  if (!PHOTO_BOUNDS.ALLOWED_MIMES.includes(file.type)) {
    return { ok: false, error: "Định dạng ảnh không được hỗ trợ. Vui lòng chọn ảnh JPEG, PNG hoặc WebP." };
  }
  if (file.size > PHOTO_BOUNDS.MAX_SIZE_BYTES) {
    return { ok: false, error: "Ảnh quá lớn (tối đa 1 MiB). Bách hoặc phụ huynh hãy chụp gần hơn hoặc chọn ảnh nhẹ hơn nhé." };
  }
  return { ok: true };
}

export function getGoogleClientId() {
  try {
    return localStorage.getItem("bach_google_client_id") ||
      (typeof window !== "undefined" && window.BACH_GOOGLE_CLIENT_ID ? window.BACH_GOOGLE_CLIENT_ID : DEFAULT_GOOGLE_CLIENT_ID);
  } catch {
    return DEFAULT_GOOGLE_CLIENT_ID;
  }
}

// State quản lý runtime của app
export const state = {
  db: createEmptyDatabase(),
  filter: "all",
  phase: "P1",
  openWeek: null,
  lessonHints: {},
  storageDriver: "memory",
  // Google Auth & Drive state
  drive: {
    token: null,          // OAuth Access Token (drive.file scope)
    idToken: null,        // Google Sign-In ID Token cho /api/tutor
    fileId: null,         // Drive JSON file id
    userEmail: null,
    syncStatus: "Chưa kết nối Google Drive",
    lastSyncedAt: null,
    isSyncing: false,
    syncRevision: 0,
    pendingRevision: 0,
    retryAttempt: 0,
    retryTimer: null,
    hasSessionExpired: false
  },
  // Voice STT state (Safari iPad optimized)
  voice: {
    isListening: false,
    activeTargetId: null,
    recognition: null,
    supported: false,
    finalTranscript: "",
    statusText: ""
  },
  // AI Tutor chat & guide selection state
  tutor: {
    isLoading: false,
    thinkingTimer: null,
    selectedSubject: "math",
    selectedWeek: "w1",
    prefillPrompt: "",
    history: [],
    lastAnswer: "",
    lastAction: null,
    pendingSourceLessonKey: null,
    reviewPromptExpected: null
  },
  // Ảnh bài viết tạm thời cho nộp bài Văn (không persist vào DB/Drive/history)
  writingImage: null
};

export function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

export function splitInlineItems(value = "") {
  return String(value)
    .split(/;\s*|\n+/)
    .map(item => item.trim())
    .filter(Boolean);
}

export function renderInstructionSteps(value = "") {
  const steps = String(value).split(/\n+/).map(item => item.trim()).filter(Boolean);
  if (steps.length <= 1) return `<p>${escapeHtml(value)}</p>`;
  const stripPrefix = (step = "") => {
    let text = String(step).trim();
    const prefixRegex = /^(?:(?:gợi\s*ý|bước)\s*\d+(?:\s*[:.-]\s*|\s+)|\(?\d+\)(?:\s*[:.-]\s*|\s*)|\d+\.(?:\s+|$))/i;
    while (prefixRegex.test(text)) {
      const next = text.replace(prefixRegex, "").trim();
      if (!next || next === text) break;
      text = next;
    }
    return text;
  };
  return `<ol class="lesson-instruction-list">${steps.map(step => `<li>${escapeHtml(stripPrefix(step))}</li>`).join("")}</ol>`;
}

// Helpers nghiệp vụ dữ liệu 36 tuần
export function allWeeks(curriculumSource = null) {
  const curriculum = curriculumSource ||
    (typeof window !== "undefined" && window?.BACH_CURRICULUM ? window.BACH_CURRICULUM : null) ||
    (typeof globalThis !== "undefined" && globalThis.window?.BACH_CURRICULUM ? globalThis.window.BACH_CURRICULUM : null) ||
    (typeof globalThis !== "undefined" && globalThis.BACH_CURRICULUM ? globalThis.BACH_CURRICULUM : null);
  if (!curriculum || !curriculum.phases) return [];
  return curriculum.phases.flatMap((phase, phaseIndex) => phase.math.map((math, weekIndex) => ({
    id: `w${phaseIndex * 6 + weekIndex + 1}`,
    number: phaseIndex * 6 + weekIndex + 1,
    phase,
    math,
    vietnamese: phase.vietnamese[weekIndex]
  })));
}

export function doneCount(subject = "all") {
  return allWeeks().filter(w => state.db.progress[w.id]?.[subject === "all" ? "week" : subject]).length;
}

export function percent(subject = "all") {
  return Math.round((doneCount(subject) / 36) * 100);
}

export function buildLearningContext() {
  const curriculum = typeof window !== "undefined" ? window.BACH_CURRICULUM : null;
  const reviewWeekIds = Object.entries(state.db.progress || {})
    .filter(([, value]) => value?.needsReview)
    .map(([id]) => id)
    .filter(id => /^w([1-9]|[1-2][0-9]|3[0-6])$/.test(id))
    .slice(0, 6);
  const recentNotes = Object.entries(state.db.notes || {})
    .slice(-3)
    .map(([weekId, note]) => `Tuần ${weekId.replace("w", "")}: ${note}`)
    .filter(Boolean);
  const profile = state.db.learningProfile || {};
  return {
    completedMathWeeks: doneCount("math"),
    completedVietnameseWeeks: doneCount("vietnamese"),
    completedMentalMathWeeks: allWeeks().filter(w => state.db.progress[w.id]?.mentalMath).length,
    learnerProfile: curriculum?.meta?.learnerProfile || "",
    reviewWeekIds,
    method: profile.method || "Gợi ý từng bước",
    pace: profile.pace || "ổn định",
    adaptivePlan: state.db.adaptive || {},
    recentNotes
  };
}

export function buildWeeklySummaryPrompt(week) {
  const progress = state.db.progress[week.id] || {};
  const note = state.db.notes[week.id] || "Chưa có ghi chú riêng cho tuần này.";
  const weekChats = (state.db.chatHistory || [])
    .filter(item => item.weekId === week.id)
    .slice(-4)
    .map(item => `${item.role === "user" ? "Bách/phụ huynh" : "Gemini"}: ${item.text}`)
    .join("\n") || "Chưa có hội thoại AI được lưu cho tuần này.";
  return `Lập báo cáo cuối tuần cho phụ huynh về Tuần ${week.number}. Hãy tách rõ các mục: Đã học; Tiến bộ quan sát được; Điểm còn vướng/bất cập; Việc nên làm tuần sau. Không chấm điểm nếu không có dữ liệu.\n\nDữ liệu tuần ${week.number}:\n- Toán: ${week.math[0]} — ${week.math[1]}\n- Tiếng Việt: ${week.vietnamese[0]} — ${week.vietnamese[1]}\n- Đã đánh dấu Toán: ${progress.math ? "có" : "chưa"}; Đã đánh dấu Văn: ${progress.vietnamese ? "có" : "chưa"}; Nền tính nhẩm: ${progress.mentalMath ? "có" : "chưa"}\n- Ghi chú của gia đình: ${note}\n- Hội thoại liên quan:\n${weekChats}`;
}
