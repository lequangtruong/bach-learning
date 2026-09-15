// Pure logic helper functions cho Bach Learning Lab
// Thiết kế độc lập với DOM và Network để kiểm thử tự động đạt 100% độ tin cậy

export const STORAGE_SCHEMA_VERSION = 2;
export const DRIVE_DB_FILENAME = "Bach Learning DB.json";
export const LESSON_KEY_PATTERN = /^w([1-9]|[12][0-9]|3[0-6])-(math|vietnamese)-([1-6])$/;

export function isValidLessonKey(value, subject = null) {
  const match = typeof value === "string" ? value.match(LESSON_KEY_PATTERN) : null;
  return Boolean(match && (!subject || match[2] === subject));
}

export function lessonOrdinalFromKey(value) {
  const match = typeof value === "string" ? value.match(LESSON_KEY_PATTERN) : null;
  if (!match) return null;
  return (Number(match[1]) - 1) * 6 + (Number(match[3]) - 1);
}

// Khởi tạo state dữ liệu chuẩn
export function createEmptyDatabase() {
  return {
    version: STORAGE_SCHEMA_VERSION,
    updatedAt: "1970-01-01T00:00:00.000Z", // Mặc định epoch để không coi việc tạo local là edit mới
    hasLocalEdits: false, // Đánh dấu dữ liệu local vừa khởi tạo, chưa có chỉnh sửa thực tế của user
    progress: {}, // { [weekId]: { week?: boolean, math?: boolean, vietnamese?: boolean, mentalMath?: boolean } }
    notes: {},    // { [weekId]: string }
    lessonResponses: {}, // { [weekId-subject-day]: { answer, explanation, updatedAt } }
    lessonTimers: {}, // { [weekId-subject-day]: { status, remainingSeconds, durationSeconds, lastStartedAt, updatedAt } }
    adaptive: { math: { level: 0, extraCount: 0, reason: "", lastDay: 0 }, vietnamese: { level: 0, extraCount: 0, reason: "", lastDay: 0 } },
    weeklySummaries: {}, // { [weekId]: string } · báo cáo AI dành cho phụ huynh
    chatHistory: [], // [{ id, role, text, subject, weekId, timestamp }]
    learningProfile: {
      method: "Gợi ý từng bước",
      pace: "ổn định",
      focus: "",
      targetWeekId: null,
      reason: "",
      needsReview: [],
      updatedAt: null
    },
    syncMeta: {
      fileId: null,
      lastSyncedAt: null,
      driver: "indexeddb"
    },
    gameRecords: {
      speedMath: { highScore: 0, lastScore: 0, gamesPlayed: 0, bestStreak: 0 },
      barModel: { stars: 0, completedChallenges: [] },
      spotTheBug: { stars: 0, solvedCount: 0, solvedBugs: [] }
    }
  };
}

// Kiểm tra tính hợp lệ nghiêm ngặt của payload database (Strict schema validation)
export function validateDatabasePayload(data) {
  if (!data || typeof data !== "object" || Array.isArray(data)) return false;

  // Version kiểm tra
  if (data.version !== STORAGE_SCHEMA_VERSION) return false;

  // updatedAt phải là string ISO hợp lệ hoặc null/epoch
  if (typeof data.updatedAt !== "string" || Number.isNaN(Date.parse(data.updatedAt))) {
    return false;
  }

  // progress phải là plain object
  if (!data.progress || typeof data.progress !== "object" || Array.isArray(data.progress)) {
    return false;
  }
  for (const [key, val] of Object.entries(data.progress)) {
    if (typeof key !== "string" || !val || typeof val !== "object" || Array.isArray(val)) {
      return false;
    }
    if (val.week !== undefined && typeof val.week !== "boolean") return false;
    if (val.math !== undefined && typeof val.math !== "boolean") return false;
    if (val.vietnamese !== undefined && typeof val.vietnamese !== "boolean") return false;
    if (val.mentalMath !== undefined && typeof val.mentalMath !== "boolean") return false;
    if (val.needsReview !== undefined && typeof val.needsReview !== "boolean") return false;
  }

  if (data.learningProfile !== undefined) {
    const profile = data.learningProfile;
    if (!profile || typeof profile !== "object" || Array.isArray(profile)) return false;
    for (const key of ["method", "pace", "focus", "reason"]) {
      if (profile[key] !== undefined && typeof profile[key] !== "string") return false;
    }
    if (profile.targetWeekId !== undefined && profile.targetWeekId !== null && (typeof profile.targetWeekId !== "string" || !/^w([1-9]|[1-2][0-9]|3[0-6])$/.test(profile.targetWeekId))) return false;
    if (profile.needsReview !== undefined && (!Array.isArray(profile.needsReview) || profile.needsReview.some(id => typeof id !== "string" || !/^w([1-9]|[1-2][0-9]|3[0-6])$/.test(id)))) return false;
    if (profile.updatedAt !== undefined && profile.updatedAt !== null && typeof profile.updatedAt !== "string") return false;
  }

  // notes phải là plain object
  if (!data.notes || typeof data.notes !== "object" || Array.isArray(data.notes)) {
    return false;
  }
  for (const [key, val] of Object.entries(data.notes)) {
    if (typeof key !== "string" || typeof val !== "string") {
      return false;
    }
  }

  if (data.lessonResponses !== undefined) {
    if (!data.lessonResponses || typeof data.lessonResponses !== "object" || Array.isArray(data.lessonResponses)) return false;
    for (const [key, val] of Object.entries(data.lessonResponses)) {
      if (typeof key !== "string" || !val || typeof val !== "object" || Array.isArray(val)) return false;
      if (val.answer !== undefined && typeof val.answer !== "string") return false;
      if (val.explanation !== undefined && typeof val.explanation !== "string") return false;
      if (val.quality !== undefined && !["", "too_easy", "right", "hard"].includes(val.quality)) return false;
      if (val.updatedAt !== undefined && typeof val.updatedAt !== "string") return false;
    }
  }

  if (data.lessonTimers !== undefined) {
    if (!data.lessonTimers || typeof data.lessonTimers !== "object" || Array.isArray(data.lessonTimers)) return false;
    for (const [key, val] of Object.entries(data.lessonTimers)) {
      if (typeof key !== "string" || !/^w([1-9]|[12][0-9]|3[0-6])-(math|vietnamese)-[1-6]$/.test(key)) return false;
      if (!val || typeof val !== "object" || Array.isArray(val)) return false;
      if (typeof val.status !== "string" || !["idle", "running", "paused", "completed"].includes(val.status)) return false;
      if (!Number.isInteger(val.durationSeconds) || (val.durationSeconds !== 1500 && val.durationSeconds !== 3000)) return false;
      if (!Number.isInteger(val.remainingSeconds) || val.remainingSeconds < 0 || val.remainingSeconds > val.durationSeconds) return false;
      if (typeof val.updatedAt !== "string" || Number.isNaN(Date.parse(val.updatedAt))) return false;
      if (val.status === "completed") {
        if (val.remainingSeconds !== 0) return false;
        if (val.lastStartedAt !== undefined && val.lastStartedAt !== null && (typeof val.lastStartedAt !== "string" || Number.isNaN(Date.parse(val.lastStartedAt)))) return false;
      } else if (val.status === "idle" || val.status === "paused") {
        if (val.remainingSeconds <= 0) return false;
        if (val.lastStartedAt !== undefined && val.lastStartedAt !== null && (typeof val.lastStartedAt !== "string" || Number.isNaN(Date.parse(val.lastStartedAt)))) return false;
      } else if (val.status === "running") {
        if (val.remainingSeconds <= 0) return false;
        if (typeof val.lastStartedAt !== "string" || Number.isNaN(Date.parse(val.lastStartedAt))) return false;
      }
    }
  }

  if (data.adaptive !== undefined) {
    if (!data.adaptive || typeof data.adaptive !== "object" || Array.isArray(data.adaptive)) return false;
    for (const subject of ["math", "vietnamese"]) {
      if (data.adaptive[subject] === undefined) continue;
      const plan = data.adaptive[subject];
      if (!plan || typeof plan !== "object" || Array.isArray(plan)) return false;
      if (plan.level !== undefined && (!Number.isInteger(plan.level) || plan.level < 0 || plan.level > 3)) return false;
      if (plan.extraCount !== undefined && (!Number.isInteger(plan.extraCount) || plan.extraCount < 0 || plan.extraCount > 3)) return false;
      if (plan.reason !== undefined && !["", "too_easy", "right", "hard"].includes(plan.reason)) return false;
      if (plan.lastDay !== undefined && (!Number.isInteger(plan.lastDay) || plan.lastDay < 0 || plan.lastDay > 6)) return false;
      if (plan.updatedAt !== undefined && typeof plan.updatedAt !== "string") return false;
      if (plan.sourceLessonKey !== undefined && !isValidLessonKey(plan.sourceLessonKey, subject)) return false;
    }
  }

  if (data.weeklySummaries !== undefined) {
    if (!data.weeklySummaries || typeof data.weeklySummaries !== "object" || Array.isArray(data.weeklySummaries)) return false;
    for (const [key, val] of Object.entries(data.weeklySummaries)) {
      if (typeof key !== "string" || typeof val !== "string") return false;
    }
  }

  // chatHistory nếu có phải là array các message hợp lệ
  if (data.chatHistory !== undefined) {
    if (!Array.isArray(data.chatHistory)) return false;
    for (const item of data.chatHistory) {
      if (!item || typeof item !== "object" || Array.isArray(item)) return false;
      if (!(item.role === "user" || item.role === "model") || typeof item.text !== "string") return false;
      if (item.subject !== undefined && !(item.subject === "math" || item.subject === "vietnamese")) return false;
      if (item.weekId !== undefined && (typeof item.weekId !== "string" || !/^w[1-9][0-9]*$/.test(item.weekId))) return false;
    }
  }

  // gameRecords nếu có phải là plain object hợp lệ
  if (data.gameRecords !== undefined) {
    if (!data.gameRecords || typeof data.gameRecords !== "object" || Array.isArray(data.gameRecords)) return false;
    const { speedMath, barModel, spotTheBug } = data.gameRecords;
    if (speedMath !== undefined && (!speedMath || typeof speedMath !== "object" || Array.isArray(speedMath))) return false;
    if (barModel !== undefined && (!barModel || typeof barModel !== "object" || Array.isArray(barModel))) return false;
    if (spotTheBug !== undefined && (!spotTheBug || typeof spotTheBug !== "object" || Array.isArray(spotTheBug))) return false;
  }

  return true;
}

// Đánh dấu người dùng đã thực hiện thao tác sửa đổi thực tế (touch)
export function touchUserEdit(db) {
  if (!db || typeof db !== "object") return db;
  return {
    ...db,
    hasLocalEdits: true,
    updatedAt: new Date().toISOString()
  };
}

// Chiến lược gộp dữ liệu: Bảo vệ remote hợp lệ khi local là fresh DB chưa có edit
export function mergeDatabases(localDb, remoteDb) {
  const isRemoteValid = validateDatabasePayload(remoteDb);
  const isLocalValid = validateDatabasePayload(localDb);

  if (!isRemoteValid && isLocalValid) return localDb;
  if (!isLocalValid && isRemoteValid) return remoteDb;
  if (!isRemoteValid && !isLocalValid) return createEmptyDatabase();

  // BẢO VỆ DỮ LIỆU DRIVE KHI FIRST LOGIN THIẾT BỊ MỚI:
  // Nếu local DB là fresh (chưa có local edits thực tế) và remoteDb hợp lệ,
  // remoteDb PHẢI luôn được ưu tiên hydrate, tránh tình trạng thiết bị mới vừa mở ghi đè DB rỗng lên Drive.
  const localHasEdits = Boolean(localDb.hasLocalEdits);
  if (!localHasEdits && isRemoteValid) {
    return {
      ...remoteDb,
      version: Math.max(localDb.version || 1, remoteDb.version || 1),
      hasLocalEdits: false,
      syncMeta: {
        ...(remoteDb.syncMeta || {}),
        fileId: localDb.syncMeta?.fileId || remoteDb.syncMeta?.fileId || null,
        lastSyncedAt: new Date().toISOString()
      }
    };
  }

  const localTime = new Date(localDb.updatedAt || 0).getTime();
  const remoteTime = new Date(remoteDb.updatedAt || 0).getTime();

  // Nếu remote mới hơn hẳn thời điểm local edit
  if (remoteTime > localTime) {
    return {
      ...remoteDb,
      version: Math.max(localDb.version || 1, remoteDb.version || 1),
      hasLocalEdits: false,
      syncMeta: {
        ...(remoteDb.syncMeta || {}),
        fileId: localDb.syncMeta?.fileId || remoteDb.syncMeta?.fileId || null,
        lastSyncedAt: new Date().toISOString()
      }
    };
  }

  // Mặc định giữ local (nếu local mới hơn và có edits), giữ nguyên fileId và cập nhật lastSyncedAt
  return {
    ...localDb,
    version: Math.max(localDb.version || 1, remoteDb.version || 1),
    syncMeta: {
      ...(localDb.syncMeta || {}),
      fileId: localDb.syncMeta?.fileId || remoteDb.syncMeta?.fileId || null,
      lastSyncedAt: new Date().toISOString()
    }
  };
}

// Xử lý nối chuỗi văn bản nhận dạng giọng nói (Voice transcript combiner)
export function appendVoiceTranscript(existingText = "", newTranscript = "") {
  const cleanExisting = (existingText || "").trim();
  const cleanNew = (newTranscript || "").trim();
  if (!cleanNew) return cleanExisting;
  if (!cleanExisting) return cleanNew;

  return `${cleanExisting} ${cleanNew}`;
}

// Chuẩn hóa định dạng hội thoại cho prompt AI
export function formatConversationForTutor({ subject, weekId, weekFocus, userMessage, history = [], learningContext = {}, mode = "student_tutor" }) {
  const boundedMsg = (userMessage || "").trim().slice(0, 2400);
  const cleanHistory = Array.isArray(history)
    ? history.slice(-6).map(h => ({
        role: h.role === "model" || h.role === "assistant" ? "model" : "user",
        text: (h.text || "").trim().slice(0, 1000)
      })).filter(h => Boolean(h.text))
    : [];

  return {
    subject: subject || "",
    weekId: weekId || "",
    weekFocus: weekFocus || "",
    mode: mode === "parent_summary" ? "parent_summary" : "student_tutor",
    userMessage: boundedMsg,
    history: cleanHistory,
    learningContext: {
      completedMathWeeks: Number.isInteger(learningContext.completedMathWeeks) ? Math.max(0, Math.min(36, learningContext.completedMathWeeks)) : 0,
      completedVietnameseWeeks: Number.isInteger(learningContext.completedVietnameseWeeks) ? Math.max(0, Math.min(36, learningContext.completedVietnameseWeeks)) : 0,
      completedMentalMathWeeks: Number.isInteger(learningContext.completedMentalMathWeeks) ? Math.max(0, Math.min(6, learningContext.completedMentalMathWeeks)) : 0,
      learnerProfile: typeof learningContext.learnerProfile === "string" ? learningContext.learnerProfile.trim().slice(0, 500) : "",
      reviewWeekIds: Array.isArray(learningContext.reviewWeekIds) ? learningContext.reviewWeekIds.filter(id => typeof id === "string" && /^w([1-9]|[1-2][0-9]|3[0-6])$/.test(id)).slice(0, 6) : [],
      method: typeof learningContext.method === "string" ? learningContext.method.trim().slice(0, 160) : "",
      pace: typeof learningContext.pace === "string" ? learningContext.pace.trim().slice(0, 80) : "",
      adaptivePlan: learningContext.adaptivePlan && typeof learningContext.adaptivePlan === "object" ? learningContext.adaptivePlan : {},
      recentNotes: Array.isArray(learningContext.recentNotes) ? learningContext.recentNotes.filter(note => typeof note === "string").map(note => note.trim().slice(0, 300)).filter(Boolean).slice(-3) : []
    }
  };
}

// Định cấu hình thời lượng mặc định (giây) cho bài học: Ngày thường 25p, Thứ 7 50p
export const WEEKDAY_LESSON_SECONDS = 25 * 60; // 1500s
export const SATURDAY_LESSON_SECONDS = 50 * 60; // 3000s

export function getLessonDefaultSeconds(dayLabelOrIndex) {
  if (dayLabelOrIndex === "Thứ 7" || dayLabelOrIndex === 5 || dayLabelOrIndex === 6) {
    return SATURDAY_LESSON_SECONDS;
  }
  return WEEKDAY_LESSON_SECONDS;
}

// Định dạng giây thành mm:ss hiển thị
export function formatTimerSeconds(totalSeconds) {
  const safe = Math.max(0, Number.isFinite(totalSeconds) ? Math.floor(totalSeconds) : 0);
  const minutes = Math.floor(safe / 60);
  const seconds = safe % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

// Tính toán lại trạng thái timer dựa trên Wall Clock (Date.now())
export function computeCurrentTimerState(timer, nowMs = Date.now()) {
  if (!timer || typeof timer !== "object") return null;
  const duration = Number.isInteger(timer.durationSeconds) && timer.durationSeconds > 0
    ? timer.durationSeconds
    : WEEKDAY_LESSON_SECONDS;

  let remaining = Number.isInteger(timer.remainingSeconds) ? timer.remainingSeconds : duration;
  let status = timer.status || "idle";

  if (status === "running") {
    if (timer.lastStartedAt) {
      const startedTime = Date.parse(timer.lastStartedAt);
      if (!Number.isNaN(startedTime) && nowMs >= startedTime) {
        const elapsedSinceStart = Math.floor((nowMs - startedTime) / 1000);
        remaining = Math.max(0, remaining - elapsedSinceStart);
      }
    }
    if (remaining <= 0) {
      remaining = 0;
      status = "completed";
    }
  } else if (remaining <= 0) {
    status = "completed";
  }

  return {
    status,
    remainingSeconds: remaining,
    durationSeconds: duration,
    lastStartedAt: status === "running" ? new Date(nowMs).toISOString() : null,
    updatedAt: timer.updatedAt || new Date(nowMs).toISOString()
  };
}
