import test from "node:test";
import assert from "node:assert/strict";
import {
  loadCurriculumSource,
  extractCurriculumDays,
  auditCurriculum,
  findRepeatedTasks,
  checkVagueReference
} from "../scripts/audit-curriculum-quality.mjs";

test("curriculum coherence: zero adult jargon or banned vague phrases across all 432 lessons", async () => {
  const curriculum = await loadCurriculumSource();
  const daysList = extractCurriculumDays(curriculum);

  assert.equal(daysList.length, 432, "Curriculum must have exactly 432 lessons (36 weeks × 6 days × 2 subjects)");

  const BANNED_PATTERNS = [
    { pattern: /\bheuristic\b/i, name: "heuristic" },
    { pattern: /\btrường hợp đặc biệt\b/i, name: "trường hợp đặc biệt" },
    { pattern: /\bví dụ của ngày\b/i, name: "ví dụ của ngày" },
    { pattern: /\bnhư ví dụ trên\b/i, name: "như ví dụ trên" },
    { pattern: /\bhai số đã cho\b/i, name: "hai số đã cho" }
  ];

  const violations = [];

  for (const day of daysList) {
    for (const field of ["title", "objective", "example", "basic", "applied", "challenge", "reasoning", "selfCheck"]) {
      const text = day[field] || "";
      for (const { pattern, name } of BANNED_PATTERNS) {
        if (pattern.test(text)) {
          violations.push({
            subject: day.subject,
            week: day.week,
            day: day.day,
            field,
            bannedPattern: name,
            snippet: text.slice(0, 100)
          });
        }
      }
    }
  }

  assert.deepEqual(violations, [], `All lessons must have 0 banned patterns, but found: ${JSON.stringify(violations, null, 2)}`);
});

test("curriculum coherence: Vietnamese Saturday mini-tests have zero mentions of Olympic", async () => {
  const curriculum = await loadCurriculumSource();
  const daysList = extractCurriculumDays(curriculum);

  const vnSaturdays = daysList.filter(d => d.subject === "vietnamese" && d.day === "Thứ 7");
  assert.equal(vnSaturdays.length, 36, "Must check 36 Vietnamese Saturday mini-tests");

  const olympicMentions = [];
  for (const day of vnSaturdays) {
    for (const field of ["title", "objective", "example", "basic", "applied", "challenge", "reasoning", "selfCheck"]) {
      const text = day[field] || "";
      if (/olympic/i.test(text)) {
        olympicMentions.push({
          week: day.week,
          day: day.day,
          field,
          snippet: text.slice(0, 80)
        });
      }
    }
  }

  assert.deepEqual(olympicMentions, [], `Vietnamese Saturdays must have 0 Olympic mentions, but found: ${JSON.stringify(olympicMentions, null, 2)}`);
});

test("curriculum coherence: no intra-day duplicate tasks between example, basic, applied, and challenge", async () => {
  const curriculum = await loadCurriculumSource();
  const daysList = extractCurriculumDays(curriculum);

  const duplicates = [];

  for (const day of daysList) {
    const ex = (day.example || "").trim().toLowerCase();
    const bs = (day.basic || "").trim().toLowerCase();
    const ap = (day.applied || "").trim().toLowerCase();
    const ch = (day.challenge || "").trim().toLowerCase();

    // Check if tasks are identical strings of non-trivial length
    if (ex.length > 20 && bs.length > 20 && ex === bs) {
      duplicates.push({ subject: day.subject, week: day.week, day: day.day, pair: "example === basic" });
    }
    if (bs.length > 20 && ap.length > 20 && bs === ap) {
      duplicates.push({ subject: day.subject, week: day.week, day: day.day, pair: "basic === applied" });
    }
    if (bs.length > 20 && ch.length > 20 && bs === ch) {
      duplicates.push({ subject: day.subject, week: day.week, day: day.day, pair: "basic === challenge" });
    }
  }

  assert.deepEqual(duplicates, [], `No day should have identical tasks across practice fields, but found: ${JSON.stringify(duplicates, null, 2)}`);
});

test("curriculum coherence: Math applied tasks always contain numeric data or quantifiable entities", async () => {
  const curriculum = await loadCurriculumSource();
  const daysList = extractCurriculumDays(curriculum);

  const mathDays = daysList.filter(d => d.subject === "math");
  assert.equal(mathDays.length, 36 * 6, "Must test 216 Math days");

  const missingNumbers = [];

  for (const day of mathDays) {
    const ap = day.applied || "";
    const hasNumber = /\d+/.test(ap);
    const hasWordNumber = /\b(?:một|hai|ba|bốn|năm|sáu|bảy|tám|chín|mười)\s+(?:bạn|người|hộp|quả|chiếc|cái|thùng|bao|con|đội|nhóm|lớp|viên|que|áo|quần)\b/i.test(ap);

    if (!hasNumber && !hasWordNumber) {
      missingNumbers.push({
        week: day.week,
        day: day.day,
        applied: ap.slice(0, 100)
      });
    }
  }

  assert.deepEqual(missingNumbers, [], `All Math applied tasks must have numeric data or quantifiable entities, but found: ${JSON.stringify(missingNumbers, null, 2)}`);
});

test("curriculum coherence: auditCurriculum reports 0 findings and 0 cross-week repetitions", async () => {
  const curriculum = await loadCurriculumSource();
  const audit = auditCurriculum(curriculum);

  assert.equal(audit.findings.length, 0, `Audit findings must be 0, but found ${audit.findings.length}: ${JSON.stringify(audit.findings.slice(0, 5), null, 2)}`);

  const daysList = extractCurriculumDays(curriculum);
  for (const subject of ["math", "vietnamese"]) {
    const authored = daysList.filter(d => d.subject === subject && d.week >= 7 && d.week <= 36);
    const repeated = findRepeatedTasks(authored, ["example", "basic", "applied", "reasoning"]);
    assert.equal(repeated.length, 0, `Repeated tasks for ${subject} must be 0, but found ${repeated.length}`);
  }
});
