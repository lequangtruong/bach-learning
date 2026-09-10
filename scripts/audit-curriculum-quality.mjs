/**
 * scripts/audit-curriculum-quality.mjs
 *
 * Deterministic quality audit for Bach Learning Lab curriculum.
 * Inspects 36 weeks × 6 days × 2 subjects (Math and Vietnamese)
 * for four conservative, explainable quality signals:
 *  1. Missing or empty required lesson fields
 *  2. Vague references that make a task non-self-contained (with embedded data exemption)
 *  3. Repeated child-facing task text across distinct days
 *  4. Math applied tasks lacking numerical or contextual data
 */

import { fileURLToPath } from "node:url";
import path from "node:path";

export const REQUIRED_DAY_FIELDS = ["objective", "example", "basic", "applied", "reasoning"];

export const WEEKDAY_NAMES = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];

export const KNOWN_DAY_ORDER = {
  "Thứ 2": 1,
  "Thứ 3": 2,
  "Thứ 4": 3,
  "Thứ 5": 4,
  "Thứ 6": 5,
  "Thứ 7": 6
};

export function comparePrimitive(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

export const VAGUE_PHRASES = [
  { pattern: /(?:^|[^\p{L}\p{N}])trong đề(?![\p{L}\p{N}])/iu, label: "trong đề" },
  { pattern: /(?:^|[^\p{L}\p{N}])ví dụ của ngày(?![\p{L}\p{N}])/iu, label: "ví dụ của ngày" },
  { pattern: /(?:^|[^\p{L}\p{N}])bảng (?:số |giá )?cho trước(?![\p{L}\p{N}])/iu, label: "bảng số cho trước" },
  { pattern: /(?:^|[^\p{L}\p{N}])dãy số cho trước(?![\p{L}\p{N}])/iu, label: "dãy số cho trước" },
  { pattern: /(?:^|[^\p{L}\p{N}])hai số đã cho(?![\p{L}\p{N}])/iu, label: "hai số đã cho" },
  { pattern: /(?:^|[^\p{L}\p{N}])các số đã cho(?![\p{L}\p{N}])/iu, label: "các số đã cho" },
  { pattern: /(?:^|[^\p{L}\p{N}])trong sách(?: giáo khoa)?(?![\p{L}\p{N}])/iu, label: "trong sách giáo khoa" },
  { pattern: /(?:^|[^\p{L}\p{N}])trong phiếu(?![\p{L}\p{N}])/iu, label: "trong phiếu" }
];

export const GENERIC_SHELLS = [
  { pattern: /Làm một ví dụ nhỏ về/i, label: "Làm một ví dụ nhỏ về" },
  { pattern: /Làm \d+ câu khởi động từ kiến thức đã biết/i, label: "Làm câu khởi động từ kiến thức đã biết" },
  { pattern: /Đưa “.+” vào một tình huống đời sống/i, label: "Đưa vào tình huống đời sống" },
  { pattern: /Đọc một văn bản\/đoạn mẫu ngắn/i, label: "Đọc một văn bản/đoạn mẫu ngắn" }
];

export const GENERIC_MATH_META_ADVICE = [
  /^viết lại lời giải đúng/i,
  /^từ ví dụ,? tìm điểm then chốt/i,
  /^vẽ sơ đồ,? bảng hoặc hình trước khi ghi phép tính/i,
  /^viết ít nhất một bước kiểm tra độc lập/i,
  /^chữa (?:sâu |một )?câu sai/i,
  /^chọn một câu sai/i,
  /^nhìn \w+ đề không giải/i,
  /^làm lại duy nhất hai câu sai/i
];

/**
 * Checks if a string value is missing, null, undefined, or empty after trimming.
 */
export function isFieldMissingOrEmpty(value) {
  if (value === undefined || value === null) return true;
  if (typeof value !== "string") return true;
  return value.trim().length === 0;
}

/**
 * Checks if a day plan has missing or empty required fields.
 */
export function checkMissingRequiredFields(day, fields = REQUIRED_DAY_FIELDS) {
  const missing = [];
  for (const field of fields) {
    if (isFieldMissingOrEmpty(day[field])) {
      missing.push({
        field,
        reason: `Trường bắt buộc '${field}' bị thiếu hoặc để trống.`
      });
    }
  }
  return missing;
}

/**
 * Determines whether a text snippet contains embedded data (numbers, quoted text, equations, tables).
 * Used to avoid false positives when a task merely uses a demonstrative phrase but embeds the actual data.
 */
export function hasEmbeddedData(text) {
  if (!text || typeof text !== "string") return false;

  // 1. Quoted problem or text sample (at least 5 chars inside quotes)
  if (/[“"'][^”"']{5,}[”"']/.test(text)) return true;

  // 2. Mathematical expression or equation with digits (e.g. 12 + 15 =, 3/5, 48.305)
  if (/\d+\s*[+\-*/=:<>]\s*\d+/.test(text)) return true;

  // 3. Multi-digit numbers, dotted/decimal numbers, or fractions (e.g. 48.305, 120, 3/5)
  if (/\b\d{2,}\b|\b\d+[.,]\d+\b|\b\d+\/\d+\b/.test(text)) return true;

  // 4. Multiple numbers present in text (e.g. "số 5 và 7")
  const numbers = text.match(/\b\d+\b/g) || [];
  if (numbers.length >= 2) return true;

  // 5. Explicit structured data with colon followed by values
  if (/:\s*(?:\[|\(|\d+|["'“])/.test(text)) return true;

  return false;
}

/**
 * Checks for vague or placeholder references that make a task non-self-contained.
 * If demonstrative phrases are used alongside embedded data, it is NOT marked vague.
 */
export function checkVagueReference(text) {
  if (!text || typeof text !== "string") return null;

  // Generic shells are always vague
  for (const shell of GENERIC_SHELLS) {
    if (shell.pattern.test(text)) {
      return {
        isVague: true,
        pattern: shell.label,
        reason: `Chứa mẫu khung bài học chung chung chưa có nội dung cụ thể: '${shell.label}'.`
      };
    }
  }

  // Placeholder demonstrative phrases without embedded data
  for (const item of VAGUE_PHRASES) {
    if (item.pattern.test(text)) {
      if (!hasEmbeddedData(text)) {
        return {
          isVague: true,
          pattern: item.label,
          reason: `Chứa tham chiếu mơ hồ '${item.label}' nhưng không có dữ liệu hoặc đề bài cụ thể đi kèm.`
        };
      }
    }
  }

  return null;
}

/**
 * Normalizes task text for comparison across distinct days.
 */
export function normalizeTaskText(text) {
  if (!text || typeof text !== "string") return "";
  return text.trim().toLowerCase().replace(/\s+/g, " ");
}

/**
 * Identifies repeated child-facing task text across distinct days.
 */
export function findRepeatedTasks(daysList, fields = ["example", "basic", "applied", "reasoning"]) {
  const findings = [];
  const seenMap = new Map(); // key: `${subject}:${field}:${normalizedText}` -> original location

  for (const item of daysList) {
    for (const field of fields) {
      const text = item[field];
      if (!text || typeof text !== "string") continue;
      const normalized = normalizeTaskText(text);
      if (normalized.length < 25) continue; // Ignore trivial phrases

      const key = `${item.subject}:${field}:${normalized}`;
      if (seenMap.has(key)) {
        const original = seenMap.get(key);
        findings.push({
          subject: item.subject,
          week: item.week,
          day: item.day,
          title: item.title,
          field,
          reason: `Nội dung bài '${field}' bị lặp lại nguyên văn từ Tuần ${original.week} (${original.day}) bài '${original.title}'.`
        });
      } else {
        seenMap.set(key, { week: item.week, day: item.day, title: item.title });
      }
    }
  }
  return findings;
}

/**
 * Checks if a Math applied task contains numerical or contextual data.
 */
export function checkMathAppliedTask(text) {
  if (!text || typeof text !== "string" || text.trim() === "") {
    return {
      isValid: false,
      reason: "Bài vận dụng môn Toán bị thiếu hoặc để trống."
    };
  }

  const trimmed = text.trim();

  // Flag generic metacognitive advice that lacks problem data
  for (const pattern of GENERIC_MATH_META_ADVICE) {
    if (pattern.test(trimmed) && !/\d{2,}|\d+[.,]\d+/.test(trimmed)) {
      return {
        isValid: false,
        reason: `Bài vận dụng môn Toán mang tính hướng dẫn chung ('${trimmed.slice(0, 45)}...') thay vì bài toán vận dụng có dữ liệu cụ thể.`
      };
    }
  }

  const hasDigits = /\d+/.test(trimmed);
  const hasWordQuantities = /\b(?:một|hai|ba|bốn|năm|sáu|bảy|tám|chín|mười)\s+(?:bạn|người|hộp|quả|chiếc|cái|thùng|bao|con|đội|nhóm|lớp|viên)\b/i.test(trimmed);

  if (!hasDigits && !hasWordQuantities) {
    return {
      isValid: false,
      reason: "Bài vận dụng môn Toán thiếu dữ liệu số hoặc tình huống tính toán có số liệu."
    };
  }

  return { isValid: true };
}

/**
 * Flattens curriculum into a list of normalized daily records for both subjects.
 */
export function extractCurriculumDays(curriculum) {
  const daysList = [];
  const subjects = ["math", "vietnamese"];

  for (const subject of subjects) {
    const weeks = curriculum.phases.flatMap(phase => phase[subject]);
    weeks.forEach((weekItem, wIdx) => {
      const weekNumber = wIdx + 1;
      (weekItem.dailyPlan || []).forEach((dayItem, dIdx) => {
        const fallbackDay = WEEKDAY_NAMES[dIdx] || `Thứ ${dIdx + 2}`;
        daysList.push({
          subject,
          week: weekNumber,
          day: dayItem.day || fallbackDay,
          title: dayItem.title || "",
          objective: dayItem.objective || "",
          example: dayItem.example || "",
          basic: dayItem.basic || "",
          applied: dayItem.applied || "",
          reasoning: dayItem.reasoning || "",
          challenge: dayItem.challenge || "",
          hint: dayItem.hint || ""
        });
      });
    });
  }

  return daysList;
}

/**
 * Audits curriculum and returns a deterministic report.
 */
export function auditCurriculum(curriculum) {
  const daysList = extractCurriculumDays(curriculum);

  const mathDays = daysList.filter(d => d.subject === "math");
  const vietnameseDays = daysList.filter(d => d.subject === "vietnamese");

  const findings = [];

  // 1. Missing required fields check
  for (const day of daysList) {
    const missing = checkMissingRequiredFields(day, REQUIRED_DAY_FIELDS);
    for (const m of missing) {
      findings.push({
        subject: day.subject,
        week: day.week,
        day: day.day,
        title: day.title,
        field: m.field,
        reason: m.reason
      });
    }
  }

  // 2. Vague reference check on child-facing task fields
  const taskFields = ["example", "basic", "applied", "reasoning", "challenge"];
  for (const day of daysList) {
    for (const field of taskFields) {
      const text = day[field];
      const vagueCheck = checkVagueReference(text);
      if (vagueCheck?.isVague) {
        findings.push({
          subject: day.subject,
          week: day.week,
          day: day.day,
          title: day.title,
          field,
          reason: vagueCheck.reason
        });
      }
    }
  }

  // 3. Repeated child-facing task text across distinct days
  const repeated = findRepeatedTasks(daysList, ["example", "basic", "applied", "reasoning"]);
  for (const rep of repeated) {
    findings.push({
      subject: rep.subject,
      week: rep.week,
      day: rep.day,
      title: rep.title,
      field: rep.field,
      reason: rep.reason
    });
  }

  // 4. Math applied tasks without numerical/contextual data
  for (const day of mathDays) {
    const mathCheck = checkMathAppliedTask(day.applied);
    if (!mathCheck.isValid) {
      findings.push({
        subject: "math",
        week: day.week,
        day: day.day,
        title: day.title,
        field: "applied",
        reason: mathCheck.reason
      });
    }
  }

  // Sort findings deterministically without localeCompare (ICU/locale-independent)
  findings.sort((a, b) => {
    const cmpSubject = comparePrimitive(a.subject, b.subject);
    if (cmpSubject !== 0) return cmpSubject;

    if (a.week !== b.week) return a.week - b.week;

    const orderA = KNOWN_DAY_ORDER[a.day] ?? 999;
    const orderB = KNOWN_DAY_ORDER[b.day] ?? 999;
    if (orderA !== orderB) return orderA - orderB;
    const cmpDay = comparePrimitive(a.day, b.day);
    if (cmpDay !== 0) return cmpDay;

    const cmpTitle = comparePrimitive(a.title, b.title);
    if (cmpTitle !== 0) return cmpTitle;

    const cmpField = comparePrimitive(a.field, b.field);
    if (cmpField !== 0) return cmpField;

    return comparePrimitive(a.reason, b.reason);
  });

  return {
    totalDays: {
      math: mathDays.length,
      vietnamese: vietnameseDays.length
    },
    findings
  };
}

/**
 * Loads curriculum through standard ESM dynamic import with safe window setup.
 * Only creates window in Node when absent; never overwrites an existing window.
 */
export async function loadCurriculumSource() {
  if (typeof globalThis.window === "undefined") {
    globalThis.window = globalThis;
  }
  await import("../data/curriculum.js");
  return globalThis.window.BACH_CURRICULUM;
}

// CLI execution entry point
const isDirectCli = Boolean(
  process.argv[1] &&
  fileURLToPath(import.meta.url) === path.resolve(process.argv[1])
);

if (isDirectCli) {
  try {
    const curriculum = await loadCurriculumSource();
    const report = auditCurriculum(curriculum);
    process.stdout.write(JSON.stringify(report, null, 2) + "\n");
    process.exit(0);
  } catch (err) {
    process.stderr.write(`Audit execution error: ${err.message}\n`);
    process.exit(1);
  }
}
