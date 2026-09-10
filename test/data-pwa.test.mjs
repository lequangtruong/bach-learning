import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  createEmptyDatabase,
  validateDatabasePayload,
  touchUserEdit,
  mergeDatabases,
  appendVoiceTranscript,
  formatConversationForTutor,
  getLessonDefaultSeconds,
  formatTimerSeconds,
  computeCurrentTimerState,
  isValidLessonKey,
  lessonOrdinalFromKey,
  WEEKDAY_LESSON_SECONDS,
  SATURDAY_LESSON_SECONDS,
  STORAGE_SCHEMA_VERSION,
  DRIVE_DB_FILENAME
} from "../data/data-core.js";
import { isStaticAllowed } from "../server.mjs";
import { shouldCacheRequest } from "../sw.js";

// データ永続化、タイマー、Google Drive同期、PWA/ServiceWorkerテストスイート

test("server.mjs routes both /api/tutor and /api/gemini", async () => {
  const server = await readFile(new URL("../server.mjs", import.meta.url), "utf8");
  assert.match(server, /\/api\/tutor/);
  assert.match(server, /\/api\/gemini/);
});

test("data-core: strict validateDatabasePayload rejects corrupted or malformed payloads", () => {
  assert.equal(validateDatabasePayload(null), false);
  assert.equal(validateDatabasePayload("string"), false);
  assert.equal(validateDatabasePayload({}), false); // Thiếu version & progress
  assert.equal(validateDatabasePayload({ version: 2, updatedAt: "invalid-date", progress: {}, notes: {} }), false);
  assert.equal(validateDatabasePayload({ version: 2, updatedAt: "2026-09-08T00:00:00.000Z", progress: "not-object", notes: {} }), false);
  assert.equal(validateDatabasePayload({ version: 2, updatedAt: "2026-09-08T00:00:00.000Z", progress: { w1: { week: "yes" } }, notes: {} }), false); // week phải boolean
  assert.equal(validateDatabasePayload({ version: 2, updatedAt: "2026-09-08T00:00:00.000Z", progress: {}, notes: { w1: 123 } }), false); // note phải string
  assert.equal(validateDatabasePayload({ version: 2, updatedAt: "2026-09-08T00:00:00.000Z", progress: {}, notes: {}, chatHistory: "not-array" }), false);

  // Hợp lệ chuẩn
  const valid = {
    version: 2,
    updatedAt: "2026-09-08T10:00:00.000Z",
    hasLocalEdits: false,
    progress: { w1: { week: true, math: true, vietnamese: false } },
    notes: { w1: "Note tốt" },
    chatHistory: [{ role: "user", text: "Câu hỏi" }]
  };
  assert.equal(validateDatabasePayload(valid), true);
});

test("data-core: fresh local DB does not overwrite remote Drive database (first-login protection)", () => {
  const freshLocal = createEmptyDatabase(); // hasLocalEdits: false, updatedAt: 1970

  const validRemoteFromDrive = {
    version: 2,
    updatedAt: "2026-09-01T08:00:00.000Z",
    hasLocalEdits: false,
    progress: { w1: { week: true, math: true }, w2: { week: true } },
    notes: { w1: "Bài trên thiết bị khác" },
    chatHistory: [{ role: "user", text: "Hỏi tuần trước" }],
    syncMeta: { fileId: "drive-file-abc-123", lastSyncedAt: "2026-09-01T08:00:00.000Z" }
  };

  const merged = mergeDatabases(freshLocal, validRemoteFromDrive);
  // Remote phải được bảo toàn 100%, không bị local rỗng đè mất
  assert.equal(merged.progress.w1.week, true);
  assert.equal(merged.progress.w2.week, true);
  assert.equal(merged.notes.w1, "Bài trên thiết bị khác");
  assert.equal(merged.chatHistory.length, 1);
  assert.equal(merged.syncMeta.fileId, "drive-file-abc-123");
});

test("data-core: touchUserEdit marks hasLocalEdits and updates timestamp", () => {
  const fresh = createEmptyDatabase();
  assert.equal(fresh.hasLocalEdits, false);

  const edited = touchUserEdit(fresh);
  assert.equal(edited.hasLocalEdits, true);
  assert.notEqual(edited.updatedAt, "1970-01-01T00:00:00.000Z");
});

test("server.mjs: strict static asset allowlist blocks dotfiles and internal repo source", () => {
  assert.equal(isStaticAllowed("index.html"), true);
  assert.equal(isStaticAllowed("styles.css"), true);
  assert.equal(isStaticAllowed("app.js"), true);
  assert.equal(isStaticAllowed("data/curriculum.js"), true);
  assert.equal(isStaticAllowed("data/data-core.js"), true);
  assert.equal(isStaticAllowed("manifest.webmanifest"), true);
  assert.equal(isStaticAllowed("sw.js"), true);
  assert.equal(isStaticAllowed("apple-touch-icon.png"), true);

  // Chặn tuyệt đối
  assert.equal(isStaticAllowed("server.mjs"), false);
  assert.equal(isStaticAllowed("api/tutor.js"), false);
  assert.equal(isStaticAllowed("package.json"), false);
  assert.equal(isStaticAllowed("spec.json"), false);
  assert.equal(isStaticAllowed("README.md"), false);
  assert.equal(isStaticAllowed(".git/config"), false);
  assert.equal(isStaticAllowed("test/smoke.test.mjs"), false);
});

test("sw.js: shouldCacheRequest excludes APIs, Authorization headers, and query tokens", () => {
  const getStatic = { method: "GET", url: "http://localhost/styles.css", headers: new Headers() };
  assert.equal(shouldCacheRequest(getStatic), true);

  const postRequest = { method: "POST", url: "http://localhost/styles.css", headers: new Headers() };
  assert.equal(shouldCacheRequest(postRequest), false);

  const apiRequest = { method: "GET", url: "http://localhost/api/tutor", headers: new Headers() };
  assert.equal(shouldCacheRequest(apiRequest), false);

  const authHeaderRequest = {
    method: "GET",
    url: "http://localhost/styles.css",
    headers: new Headers({ authorization: "Bearer token" })
  };
  assert.equal(shouldCacheRequest(authHeaderRequest), false);

  const tokenParamRequest = { method: "GET", url: "http://localhost/app.js?token=secret", headers: new Headers() };
  assert.equal(shouldCacheRequest(tokenParamRequest), false);
});

test("lesson timer: default seconds and formatting match weekday=25:00 and Saturday=50:00", () => {
  assert.equal(WEEKDAY_LESSON_SECONDS, 1500);
  assert.equal(SATURDAY_LESSON_SECONDS, 3000);

  // Day indices: 0..4 weekdays, 5 Saturday
  for (let dayIndex = 0; dayIndex < 5; dayIndex++) {
    const secs = getLessonDefaultSeconds(dayIndex);
    assert.equal(secs, 1500);
    assert.equal(formatTimerSeconds(secs), "25:00");
  }

  // Saturday (day index 5 or label "Thứ 7")
  assert.equal(getLessonDefaultSeconds(5), 3000);
  assert.equal(formatTimerSeconds(getLessonDefaultSeconds(5)), "50:00");
  assert.equal(getLessonDefaultSeconds("Thứ 7"), 3000);
  assert.equal(formatTimerSeconds(getLessonDefaultSeconds("Thứ 7")), "50:00");

  // Weekday labels (e.g. Thứ 2)
  assert.equal(getLessonDefaultSeconds("Thứ 2"), 1500);
  assert.equal(formatTimerSeconds(getLessonDefaultSeconds("Thứ 2")), "25:00");
});

test("lesson timer: wall-clock reload/sleep calculation with no double count", () => {
  const baseTime = 1725800000000;
  const startedIso = new Date(baseTime).toISOString();

  // Timer running from 25:00 (1500s)
  const initialTimer = {
    status: "running",
    durationSeconds: 1500,
    remainingSeconds: 1500,
    lastStartedAt: startedIso,
    updatedAt: startedIso
  };

  // 1. Simulating 120 seconds elapsed (reload / sleep)
  const after120s = computeCurrentTimerState(initialTimer, baseTime + 120 * 1000);
  assert.equal(after120s.status, "running");
  assert.equal(after120s.remainingSeconds, 1380);
  assert.equal(formatTimerSeconds(after120s.remainingSeconds), "23:00");

  // 2. Repeated calculation on same or reloaded timer at same instant must not double-count
  const repeatCalc = computeCurrentTimerState(initialTimer, baseTime + 120 * 1000);
  assert.equal(repeatCalc.remainingSeconds, 1380);

  const reloadedTimer = {
    ...after120s,
    lastStartedAt: new Date(baseTime + 120 * 1000).toISOString()
  };
  const afterReload = computeCurrentTimerState(reloadedTimer, baseTime + 120 * 1000);
  assert.equal(afterReload.remainingSeconds, 1380, "same wall-clock instant must not double-count");

  // 3. Simulating state update with new remainingSeconds and refreshed lastStartedAt, followed by another 30 seconds
  const after150s = computeCurrentTimerState(reloadedTimer, baseTime + 150 * 1000);
  assert.equal(after150s.remainingSeconds, 1350);
  assert.equal(formatTimerSeconds(after150s.remainingSeconds), "22:30");
});

test("lesson timer: expiry transitions to completed and 00:00", () => {
  const baseTime = 1725800000000;
  const startedIso = new Date(baseTime).toISOString();

  // Timer running with 50 seconds remaining
  const timer = {
    status: "running",
    durationSeconds: 1500,
    remainingSeconds: 50,
    lastStartedAt: startedIso,
    updatedAt: startedIso
  };

  // Exact expiry (50 seconds elapsed)
  const atExpiry = computeCurrentTimerState(timer, baseTime + 50 * 1000);
  assert.equal(atExpiry.status, "completed");
  assert.equal(atExpiry.remainingSeconds, 0);
  assert.equal(formatTimerSeconds(atExpiry.remainingSeconds), "00:00");
  assert.equal(atExpiry.lastStartedAt, null);

  // Past expiry (100 seconds elapsed)
  const pastExpiry = computeCurrentTimerState(timer, baseTime + 100 * 1000);
  assert.equal(pastExpiry.status, "completed");
  assert.equal(pastExpiry.remainingSeconds, 0);
  assert.equal(formatTimerSeconds(pastExpiry.remainingSeconds), "00:00");
  assert.equal(pastExpiry.lastStartedAt, null);

  // Idle timer with 0 remaining seconds also transitions to completed
  const zeroIdle = computeCurrentTimerState({
    status: "idle",
    durationSeconds: 1500,
    remainingSeconds: 0
  }, baseTime);
  assert.equal(zeroIdle.status, "completed");
  assert.equal(zeroIdle.remainingSeconds, 0);
  assert.equal(formatTimerSeconds(zeroIdle.remainingSeconds), "00:00");
});

test("lesson timer: paused state remains stable regardless of elapsed wall-clock time", () => {
  const pausedTimer = {
    status: "paused",
    durationSeconds: 1500,
    remainingSeconds: 1200,
    lastStartedAt: null,
    updatedAt: "2026-09-08T10:00:00.000Z"
  };

  // Checking at nowMs, nowMs + 1 hour, nowMs + 1 day
  const now = Date.now();
  for (const offset of [0, 3600 * 1000, 86400 * 1000]) {
    const computed = computeCurrentTimerState(pausedTimer, now + offset);
    assert.equal(computed.status, "paused");
    assert.equal(computed.remainingSeconds, 1200);
    assert.equal(formatTimerSeconds(computed.remainingSeconds), "20:00");
    assert.equal(computed.lastStartedAt, null);
  }
});

test("lesson timer: validateDatabasePayload enforces strict timer keys, durations, bounds and legacy validity", () => {
  const baseValidPayload = () => ({
    version: 2,
    updatedAt: "2026-09-08T10:00:00.000Z",
    hasLocalEdits: false,
    progress: {},
    notes: {}
  });

  // 1. Legacy DB without lessonTimers remains valid
  const legacyDb = baseValidPayload();
  assert.equal(validateDatabasePayload(legacyDb), true);

  // 2. Valid lessonTimers across weekday (1500s) and Saturday (3000s)
  const validDbWithTimers = {
    ...baseValidPayload(),
    lessonTimers: {
      "w1-math-1": {
        status: "idle",
        durationSeconds: 1500,
        remainingSeconds: 1500,
        lastStartedAt: null,
        updatedAt: "2026-09-08T10:00:00.000Z"
      },
      "w36-vietnamese-6": {
        status: "running",
        durationSeconds: 3000,
        remainingSeconds: 2500,
        lastStartedAt: "2026-09-08T10:05:00.000Z",
        updatedAt: "2026-09-08T10:05:00.000Z"
      },
      "w20-math-5": {
        status: "paused",
        durationSeconds: 1500,
        remainingSeconds: 800,
        lastStartedAt: null,
        updatedAt: "2026-09-08T10:00:00.000Z"
      },
      "w12-vietnamese-2": {
        status: "completed",
        durationSeconds: 1500,
        remainingSeconds: 0,
        lastStartedAt: null,
        updatedAt: "2026-09-08T10:00:00.000Z"
      }
    }
  };
  assert.equal(validateDatabasePayload(validDbWithTimers), true);

  // 3. Malformed keys rejection
  const invalidKeys = [
    "w0-math-1",        // week 0 out of bounds (1..36)
    "w37-math-1",       // week 37 out of bounds (1..36)
    "w1-science-1",     // subject not math or vietnamese
    "w1-math-0",        // day 0 out of bounds (1..6)
    "w1-math-7",        // day 7 out of bounds (1..6)
    "w1-math-1-extra",  // invalid format
    "random-key"        // invalid format
  ];
  for (const badKey of invalidKeys) {
    const invalidKeyDb = {
      ...baseValidPayload(),
      lessonTimers: {
        [badKey]: {
          status: "idle",
          durationSeconds: 1500,
          remainingSeconds: 1500,
          updatedAt: "2026-09-08T10:00:00.000Z"
        }
      }
    };
    assert.equal(validateDatabasePayload(invalidKeyDb), false, `Should reject key: ${badKey}`);
  }

  // 4. Over-duration and negative remainingSeconds rejection
  const overDurationDb = {
    ...baseValidPayload(),
    lessonTimers: {
      "w1-math-1": {
        status: "idle",
        durationSeconds: 1500,
        remainingSeconds: 1501, // exceeds durationSeconds
        updatedAt: "2026-09-08T10:00:00.000Z"
      }
    }
  };
  assert.equal(validateDatabasePayload(overDurationDb), false);

  const negativeRemainingDb = {
    ...baseValidPayload(),
    lessonTimers: {
      "w1-math-1": {
        status: "idle",
        durationSeconds: 1500,
        remainingSeconds: -1,
        updatedAt: "2026-09-08T10:00:00.000Z"
      }
    }
  };
  assert.equal(validateDatabasePayload(negativeRemainingDb), false);

  const invalidDurationDb = {
    ...baseValidPayload(),
    lessonTimers: {
      "w1-math-1": {
        status: "idle",
        durationSeconds: 2000, // not 1500 or 3000
        remainingSeconds: 1000,
        updatedAt: "2026-09-08T10:00:00.000Z"
      }
    }
  };
  assert.equal(validateDatabasePayload(invalidDurationDb), false);

  // 5. Running timer missing timestamp or having invalid timestamp rejection
  const runningMissingTimestampDb = {
    ...baseValidPayload(),
    lessonTimers: {
      "w1-math-1": {
        status: "running",
        durationSeconds: 1500,
        remainingSeconds: 1500,
        lastStartedAt: null, // running MUST have valid ISO string
        updatedAt: "2026-09-08T10:00:00.000Z"
      }
    }
  };
  assert.equal(validateDatabasePayload(runningMissingTimestampDb), false);

  const runningInvalidTimestampDb = {
    ...baseValidPayload(),
    lessonTimers: {
      "w1-math-1": {
        status: "running",
        durationSeconds: 1500,
        remainingSeconds: 1500,
        lastStartedAt: "invalid-date",
        updatedAt: "2026-09-08T10:00:00.000Z"
      }
    }
  };
  assert.equal(validateDatabasePayload(runningInvalidTimestampDb), false);

  // 6. Invalid status rejection
  const invalidStatusDb = {
    ...baseValidPayload(),
    lessonTimers: {
      "w1-math-1": {
        status: "stopped", // not idle, running, paused, completed
        durationSeconds: 1500,
        remainingSeconds: 1500,
        updatedAt: "2026-09-08T10:00:00.000Z"
      }
    }
  };
  assert.equal(validateDatabasePayload(invalidStatusDb), false);

  // 7. Rule: updatedAt is mandatory and must be a valid ISO string
  const missingUpdatedAtDb = {
    ...baseValidPayload(),
    lessonTimers: {
      "w1-math-1": {
        status: "idle",
        durationSeconds: 1500,
        remainingSeconds: 1500
        // missing updatedAt
      }
    }
  };
  assert.equal(validateDatabasePayload(missingUpdatedAtDb), false, "Should reject timer without updatedAt");

  const invalidUpdatedAtDb = {
    ...baseValidPayload(),
    lessonTimers: {
      "w1-math-1": {
        status: "idle",
        durationSeconds: 1500,
        remainingSeconds: 1500,
        updatedAt: "not-an-iso-date"
      }
    }
  };
  assert.equal(validateDatabasePayload(invalidUpdatedAtDb), false, "Should reject timer with invalid updatedAt");

  // 8. Rule: completed requires remainingSeconds === 0
  const validCompletedDb = {
    ...baseValidPayload(),
    lessonTimers: {
      "w1-math-1": {
        status: "completed",
        durationSeconds: 1500,
        remainingSeconds: 0,
        lastStartedAt: null,
        updatedAt: "2026-09-08T10:00:00.000Z"
      }
    }
  };
  assert.equal(validateDatabasePayload(validCompletedDb), true, "Should accept completed timer with remainingSeconds === 0");

  const invalidCompletedNonZeroDb = {
    ...baseValidPayload(),
    lessonTimers: {
      "w1-math-1": {
        status: "completed",
        durationSeconds: 1500,
        remainingSeconds: 10,
        lastStartedAt: null,
        updatedAt: "2026-09-08T10:00:00.000Z"
      }
    }
  };
  assert.equal(validateDatabasePayload(invalidCompletedNonZeroDb), false, "Should reject completed timer with remainingSeconds > 0");

  // 9. Rule: idle or paused requires remainingSeconds > 0
  const validIdleDb = {
    ...baseValidPayload(),
    lessonTimers: {
      "w1-math-1": {
        status: "idle",
        durationSeconds: 1500,
        remainingSeconds: 1500,
        updatedAt: "2026-09-08T10:00:00.000Z"
      }
    }
  };
  assert.equal(validateDatabasePayload(validIdleDb), true, "Should accept idle timer with remainingSeconds > 0");

  const invalidIdleZeroDb = {
    ...baseValidPayload(),
    lessonTimers: {
      "w1-math-1": {
        status: "idle",
        durationSeconds: 1500,
        remainingSeconds: 0,
        updatedAt: "2026-09-08T10:00:00.000Z"
      }
    }
  };
  assert.equal(validateDatabasePayload(invalidIdleZeroDb), false, "Should reject idle timer with remainingSeconds === 0");

  const validPausedDb = {
    ...baseValidPayload(),
    lessonTimers: {
      "w1-math-1": {
        status: "paused",
        durationSeconds: 1500,
        remainingSeconds: 500,
        updatedAt: "2026-09-08T10:00:00.000Z"
      }
    }
  };
  assert.equal(validateDatabasePayload(validPausedDb), true, "Should accept paused timer with remainingSeconds > 0");

  const invalidPausedZeroDb = {
    ...baseValidPayload(),
    lessonTimers: {
      "w1-math-1": {
        status: "paused",
        durationSeconds: 1500,
        remainingSeconds: 0,
        updatedAt: "2026-09-08T10:00:00.000Z"
      }
    }
  };
  assert.equal(validateDatabasePayload(invalidPausedZeroDb), false, "Should reject paused timer with remainingSeconds === 0");

  // 10. Rule: running requires remainingSeconds > 0 and valid lastStartedAt
  const validRunningDb = {
    ...baseValidPayload(),
    lessonTimers: {
      "w1-math-1": {
        status: "running",
        durationSeconds: 1500,
        remainingSeconds: 1200,
        lastStartedAt: "2026-09-08T10:00:00.000Z",
        updatedAt: "2026-09-08T10:00:00.000Z"
      }
    }
  };
  assert.equal(validateDatabasePayload(validRunningDb), true, "Should accept running timer with remainingSeconds > 0 and valid lastStartedAt");

  const invalidRunningZeroRemainingDb = {
    ...baseValidPayload(),
    lessonTimers: {
      "w1-math-1": {
        status: "running",
        durationSeconds: 1500,
        remainingSeconds: 0,
        lastStartedAt: "2026-09-08T10:00:00.000Z",
        updatedAt: "2026-09-08T10:00:00.000Z"
      }
    }
  };
  assert.equal(validateDatabasePayload(invalidRunningZeroRemainingDb), false, "Should reject running timer with remainingSeconds === 0");
});

test("Drive sync invariants: missing file resets fileId to create single DB file, and pre-upload validates payload", async () => {
  const driveSource = await readFile(new URL("../js/drive-sync.js", import.meta.url), "utf8").catch(() => "");
  const appSource = await readFile(new URL("../app.js", import.meta.url), "utf8");
  const source = driveSource || appSource;

  // Bất biến 1: Sau khi findDatabaseFile() không tìm thấy file hợp lệ, không được PATCH bằng fileId cũ.
  // Xóa state.drive.fileId; lần sync đó được phép tạo đúng một file mới tên Bach Learning DB.json qua luồng create.
  assert.match(source, /const fileInfo = await this\.findDatabaseFile\(state\.drive\.token,\s*savedFileId\);/);
  assert.match(source, /state\.drive\.fileId = null;\s*if\s*\(mergedDb\.syncMeta\?\.fileId\)\s*\{\s*delete mergedDb\.syncMeta\.fileId;\s*\}/);
  assert.match(source, /uploadDatabaseFile\(state\.drive\.token,\s*mergedDb,\s*state\.drive\.fileId\)/);

  // Bất biến 2: Ngay trước uploadDatabaseFile(), mergedDb phải qua validateDatabasePayload().
  // Dữ liệu không hợp lệ phải dừng đồng bộ, không ghi local/remote.
  const syncFuncMatch = source.match(/async syncWithDrive\(\)\s*\{([\s\S]*?)\n  \}/);
  assert.ok(syncFuncMatch, "syncWithDrive must be defined");
  const syncFuncBody = syncFuncMatch[1];
  const validateIdx = syncFuncBody.indexOf("validateDatabasePayload(mergedDb)");
  const saveLocalIdx = syncFuncBody.indexOf("await storage.saveDatabase(mergedDb)");
  const uploadIdx = syncFuncBody.indexOf("await this.uploadDatabaseFile(state.drive.token, mergedDb, state.drive.fileId)");

  assert.ok(validateIdx !== -1, "validateDatabasePayload(mergedDb) must be executed");
  assert.ok(saveLocalIdx !== -1, "saveDatabase(mergedDb) must be executed");
  assert.ok(uploadIdx !== -1, "uploadDatabaseFile must be executed");
  assert.ok(validateIdx < saveLocalIdx, "Validation must precede local database save");
  assert.ok(saveLocalIdx < uploadIdx, "Local save must precede remote upload");
  assert.match(syncFuncBody, /if\s*\(!validateDatabasePayload\(mergedDb\)\)\s*\{\s*const invalidPayloadErr = new Error\("DRIVE_INVALID_PAYLOAD"\);/);
});
