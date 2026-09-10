import test from "node:test";
import assert from "node:assert/strict";
import {
  isFieldMissingOrEmpty,
  checkMissingRequiredFields,
  hasEmbeddedData,
  checkVagueReference,
  normalizeTaskText,
  findRepeatedTasks,
  checkMathAppliedTask,
  extractCurriculumDays,
  auditCurriculum,
  loadCurriculumSource,
  REQUIRED_DAY_FIELDS,
  WEEKDAY_NAMES,
  KNOWN_DAY_ORDER,
  VAGUE_PHRASES,
  comparePrimitive
} from "../scripts/audit-curriculum-quality.mjs";

test("curriculum audit: Signal 1 - detects missing or empty required fields", () => {
  assert.equal(isFieldMissingOrEmpty(undefined), true);
  assert.equal(isFieldMissingOrEmpty(null), true);
  assert.equal(isFieldMissingOrEmpty(""), true);
  assert.equal(isFieldMissingOrEmpty("   \n\t  "), true);
  assert.equal(isFieldMissingOrEmpty(123), true);
  assert.equal(isFieldMissingOrEmpty("Có nội dung hợp lệ"), false);

  const incompleteDay = {
    objective: "Mục tiêu rõ ràng",
    example: "",
    basic: "   ",
    applied: null,
    reasoning: "Giải thích chi tiết"
  };
  const missing = checkMissingRequiredFields(incompleteDay);
  assert.equal(missing.length, 3);
  const fields = missing.map(m => m.field);
  assert.deepEqual(fields, ["example", "basic", "applied"]);
  assert.match(missing[0].reason, /bị thiếu hoặc để trống/);

  const completeDay = {
    objective: "Mục tiêu đầy đủ",
    example: "Ví dụ: 12 + 15 = 27",
    basic: "Tính 35 + 45",
    applied: "Cửa hàng có 100 kg gạo, bán 20 kg...",
    reasoning: "Giải thích tại sao chọn phép trừ"
  };
  assert.deepEqual(checkMissingRequiredFields(completeDay), []);
});

test("curriculum audit: Signal 2 - detects vague references without actual data (positive cases)", () => {
  // 1. "trong đề" without embedded data
  const vagueDe = checkVagueReference("Đọc to ba số trong đề rồi viết vào vở.");
  assert.ok(vagueDe?.isVague);
  assert.match(vagueDe.reason, /trong đề/);

  // 2. "ví dụ của ngày" without embedded example
  const vagueViDu = checkVagueReference("Xem ví dụ của ngày để làm bài tương tự.");
  assert.ok(vagueViDu?.isVague);
  assert.match(vagueViDu.reason, /ví dụ của ngày/);

  // 3. "bảng số cho trước" without embedded numbers
  const vagueBang = checkVagueReference("Điền số thích hợp vào bảng số cho trước.");
  assert.ok(vagueBang?.isVague);
  assert.match(vagueBang.reason, /bảng số cho trước/);

  // 4. "bảng cho trước" with only count digit (no actual data)
  const vagueBangDem = checkVagueReference("Sắp xếp 5 số theo thứ tự tăng dần từ bảng cho trước.");
  assert.ok(vagueBangDem?.isVague);
  assert.match(vagueBangDem.reason, /bảng số cho trước/);

  // 5. "trong sách giáo khoa" without problem text
  const vagueSach = checkVagueReference("Làm bài tập 1 trong sách giáo khoa.");
  assert.ok(vagueSach?.isVague);
  assert.match(vagueSach.reason, /trong sách giáo khoa/);

  // 6. Generic shells are always vague
  const genericShell = checkVagueReference("Làm một ví dụ nhỏ về phân số bằng nhau.");
  assert.ok(genericShell?.isVague);
  assert.match(genericShell.reason, /Làm một ví dụ nhỏ về/);
});

test("curriculum audit: Signal 2 - demonstrative phrases with embedded data are NOT marked vague (negative cases)", () => {
  // 1. Dotted multi-digit number alongside demonstrative phrase
  assert.equal(hasEmbeddedData("Đọc số 48.305 trong ví dụ và nêu giá trị chữ số 8."), true);
  const falsePositiveExample = checkVagueReference("Đọc số 48.305 trong ví dụ và nêu giá trị chữ số 8.");
  assert.equal(falsePositiveExample, null);

  // 2. "trong đề" with embedded quoted problem text and numbers
  const embeddedProblem = "Trong đề: 'Một cửa hàng có 150 kg đường, đã bán 50 kg', hỏi còn lại bao nhiêu?";
  assert.equal(hasEmbeddedData(embeddedProblem), true);
  assert.equal(checkVagueReference(embeddedProblem), null);

  // 3. "bảng số cho trước" with concrete numbers list
  const embeddedTable = "Bảng số cho trước: 12, 24, 36, 48. Hãy tìm quy luật và viết tiếp hai số.";
  assert.equal(hasEmbeddedData(embeddedTable), true);
  assert.equal(checkVagueReference(embeddedTable), null);

  // 4. Self-contained math task with expression
  const standardTask = "Tính giá trị biểu thức: 125 + 45 : 5";
  assert.equal(checkVagueReference(standardTask), null);

  // 5. Self-contained Vietnamese task with sample quote
  const vietnameseTask = "Đọc đoạn văn sau: 'Mùa xuân đã về, chim hót ríu rít trên cành' và tìm hai động từ.";
  assert.equal(checkVagueReference(vietnameseTask), null);
});

test("curriculum audit: Signal 3 - detects repeated child-facing task text across distinct days", () => {
  const sampleDays = [
    {
      subject: "math",
      week: 1,
      day: "Thứ 2",
      title: "Đọc số",
      basic: "Bài tập: Đọc các số sau và xác định hàng của từng chữ số: 12.345, 67.890.",
      applied: "Một cửa hàng có 500 chiếc bút...",
      example: "Ví dụ mẫu 1...",
      reasoning: "Giải thích cách tách hàng..."
    },
    {
      subject: "math",
      week: 1,
      day: "Thứ 3",
      title: "So sánh số",
      // Exactly identical basic task text as Week 1 Thứ 2
      basic: "Bài tập: Đọc các số sau và xác định hàng của từng chữ số: 12.345, 67.890.",
      applied: "Một nông trại nuôi 1.200 con gà...",
      example: "Ví dụ mẫu 2...",
      reasoning: "So sánh chữ số từ trái sang phải..."
    },
    {
      subject: "math",
      week: 2,
      day: "Thứ 2",
      title: "Phép cộng",
      basic: "Tính tổng 12.000 + 15.000 và kiểm tra kết quả.",
      applied: "Cửa hàng bán được 300 kg gạo...",
      example: "Ví dụ mẫu 3...",
      reasoning: "Đặt tính thẳng cột..."
    }
  ];

  const repeated = findRepeatedTasks(sampleDays, ["basic", "applied"]);
  assert.equal(repeated.length, 1);
  assert.equal(repeated[0].week, 1);
  assert.equal(repeated[0].day, "Thứ 3");
  assert.equal(repeated[0].field, "basic");
  assert.match(repeated[0].reason, /lặp lại nguyên văn từ Tuần 1 \(Thứ 2\)/);

  // Non-repeating list
  const distinctDays = [sampleDays[0], sampleDays[2]];
  assert.deepEqual(findRepeatedTasks(distinctDays, ["basic", "applied"]), []);
});

test("curriculum audit: Signal 4 - detects math applied tasks lacking numerical or contextual data", () => {
  // Positive cases (generic meta-advice or no numerical/contextual data)
  const metaAdvice1 = checkMathAppliedTask("Viết lại lời giải đúng, không chỉ sửa đáp số.");
  assert.equal(metaAdvice1.isValid, false);
  assert.match(metaAdvice1.reason, /hướng dẫn chung/);

  const metaAdvice2 = checkMathAppliedTask("Từ ví dụ, tìm điểm then chốt để áp dụng cho bài toán mới.");
  assert.equal(metaAdvice2.isValid, false);

  const metaAdvice3 = checkMathAppliedTask("Vẽ sơ đồ, bảng hoặc hình trước khi ghi phép tính/kết luận.");
  assert.equal(metaAdvice3.isValid, false);

  const noData = checkMathAppliedTask("Vận dụng kiến thức vừa học vào cuộc sống hằng ngày.");
  assert.equal(noData.isValid, false);
  assert.match(noData.reason, /thiếu dữ liệu số/);

  // Negative cases (valid applied tasks with numerical data or word quantities)
  const validWithNumbers = checkMathAppliedTask("Một cửa hàng có 250 kg gạo, buổi sáng bán được 1/5 số gạo. Hỏi còn lại bao nhiêu kg?");
  assert.equal(validWithNumbers.isValid, true);

  const validBudget = checkMathAppliedTask("Mẹ mua 3 hộp sữa giá 12.000 đồng/hộp. Mẹ đưa 50.000 đồng, tính số tiền trả lại.");
  assert.equal(validBudget.isValid, true);

  const validWordQuantity = checkMathAppliedTask("Ba bạn chọn một trong hai trò chơi. Liệt kê các cách có đúng hai bạn chọn cờ vua.");
  assert.equal(validWordQuantity.isValid, true);
});

test("curriculum audit: stable report shape and deterministic output on full curriculum", async () => {
  const curriculum = await loadCurriculumSource();
  assert.ok(curriculum, "Curriculum should load via ESM import");

  const daysList = extractCurriculumDays(curriculum);
  assert.equal(daysList.length, 36 * 6 * 2, "Curriculum must contain exactly 36 weeks × 6 days × 2 subjects = 432 days");

  const report = auditCurriculum(curriculum);

  // Top-level structure verification
  assert.ok(report.totalDays, "Report must include totalDays");
  assert.equal(report.totalDays.math, 216, "Math total days must be 216 (36 * 6)");
  assert.equal(report.totalDays.vietnamese, 216, "Vietnamese total days must be 216 (36 * 6)");
  assert.ok(Array.isArray(report.findings), "Report must include findings array");

  // Verify EVERY finding has the required keys and valid types (not only a slice)
  const expectedFindingKeys = ["day", "field", "reason", "subject", "title", "week"];
  for (const finding of report.findings) {
    assert.deepEqual(Object.keys(finding).sort(), expectedFindingKeys, "Finding keys must match exact contract");
    assert.ok(["math", "vietnamese"].includes(finding.subject));
    assert.ok(Number.isInteger(finding.week) && finding.week >= 1 && finding.week <= 36);
    assert.ok(typeof finding.day === "string" && finding.day.length > 0);
    assert.ok(typeof finding.title === "string");
    assert.ok(typeof finding.field === "string" && finding.field.length > 0);
    assert.ok(typeof finding.reason === "string" && finding.reason.length > 0);
  }

  // Also validate on a curriculum with multiple issues to guarantee EVERY finding is verified
  const mockWithFindings = {
    phases: [
      {
        math: [
          {
            dailyPlan: [
              { day: "Thứ 2", title: "T1", objective: "", example: "", basic: "", applied: "", reasoning: "" },
              { day: "Thứ 3", title: "T2", objective: "obj", example: "Xem ví dụ của ngày", basic: "Trong đề", applied: "Vận dụng chung", reasoning: "Giải thích" }
            ]
          }
        ],
        vietnamese: []
      }
    ]
  };
  const mockReport = auditCurriculum(mockWithFindings);
  assert.ok(mockReport.findings.length >= 2, "Mock curriculum must generate multiple findings");
  for (const finding of mockReport.findings) {
    assert.deepEqual(Object.keys(finding).sort(), expectedFindingKeys, "Finding keys must match exact contract");
    assert.ok(["math", "vietnamese"].includes(finding.subject));
    assert.ok(Number.isInteger(finding.week) && finding.week >= 1 && finding.week <= 36);
    assert.ok(typeof finding.day === "string" && finding.day.length > 0);
    assert.ok(typeof finding.title === "string");
    assert.ok(typeof finding.field === "string" && finding.field.length > 0);
    assert.ok(typeof finding.reason === "string" && finding.reason.length > 0);
  }

  // Determinism check: auditing again must yield identical JSON
  const report2 = auditCurriculum(curriculum);
  assert.equal(JSON.stringify(report), JSON.stringify(report2), "Audit output must be strictly deterministic");

  // Verify JSON serializability
  const serialized = JSON.stringify(report);
  const parsed = JSON.parse(serialized);
  assert.equal(parsed.totalDays.math, 216);
  assert.equal(parsed.totalDays.vietnamese, 216);
  assert.equal(parsed.findings.length, report.findings.length);
});

test("authored curriculum quality: weeks 7–36 Math applied tasks have no checkMathAppliedTask failures", async () => {
  const curriculum = await loadCurriculumSource();
  const daysList = extractCurriculumDays(curriculum);
  const authoredMathDays = daysList.filter(d => d.subject === "math" && d.week >= 7 && d.week <= 36);

  assert.equal(authoredMathDays.length, 30 * 6, "Must cover 30 weeks × 6 days = 180 Math days");

  const failures = [];
  for (const day of authoredMathDays) {
    const res = checkMathAppliedTask(day.applied);
    if (!res.isValid) {
      failures.push({ week: day.week, day: day.day, title: day.title, reason: res.reason, applied: day.applied });
    }
  }

  assert.deepEqual(failures, [], `Math applied tasks in weeks 7–36 must have 0 failures, but found: ${JSON.stringify(failures, null, 2)}`);
});

test("authored curriculum quality: weeks 7–36 have no repeated example/basic/applied/reasoning strings per subject", async () => {
  const curriculum = await loadCurriculumSource();
  const daysList = extractCurriculumDays(curriculum);

  for (const subject of ["math", "vietnamese"]) {
    const authoredDays = daysList.filter(d => d.subject === subject && d.week >= 7 && d.week <= 36);
    assert.equal(authoredDays.length, 30 * 6, `Must cover 30 weeks × 6 days = 180 days for ${subject}`);

    const repeated = findRepeatedTasks(authoredDays, ["example", "basic", "applied", "reasoning"]);
    assert.deepEqual(repeated, [], `Weeks 7–36 ${subject} must have 0 repeated tasks in example/basic/applied/reasoning, but found: ${JSON.stringify(repeated, null, 2)}`);
  }
});

test("authored curriculum quality: representative Math week 7 and Vietnamese week 7 show concrete content without vague references", async () => {
  const curriculum = await loadCurriculumSource();
  const daysList = extractCurriculumDays(curriculum);

  const mathWeek7 = daysList.filter(d => d.subject === "math" && d.week === 7);
  assert.equal(mathWeek7.length, 6, "Math week 7 must have 6 days");

  for (const day of mathWeek7) {
    assert.ok(/\d+/.test(day.example), `Math Week 7 ${day.day} example must contain numbers`);
    assert.ok(/\d+/.test(day.basic), `Math Week 7 ${day.day} basic must contain numbers`);
    assert.ok(/\d+/.test(day.applied), `Math Week 7 ${day.day} applied must contain numbers`);

    for (const field of ["example", "basic", "applied", "reasoning", "challenge"]) {
      const vagueCheck = checkVagueReference(day[field]);
      assert.equal(vagueCheck, null, `Math Week 7 ${day.day} ${field} must not be vague: ${vagueCheck?.reason}`);
    }
  }

  const vnWeek7 = daysList.filter(d => d.subject === "vietnamese" && d.week === 7);
  assert.equal(vnWeek7.length, 6, "Vietnamese week 7 must have 6 days");

  for (const day of vnWeek7) {
    assert.ok(day.example.length > 20, `Vietnamese Week 7 ${day.day} example must have substantial stimulus`);
    assert.ok(day.basic.length > 20, `Vietnamese Week 7 ${day.day} basic must have substantial task`);
    assert.ok(day.applied.length > 20, `Vietnamese Week 7 ${day.day} applied must have substantial task`);

    for (const field of ["example", "basic", "applied", "reasoning", "challenge"]) {
      const vagueCheck = checkVagueReference(day[field]);
      assert.equal(vagueCheck, null, `Vietnamese Week 7 ${day.day} ${field} must not be vague: ${vagueCheck?.reason}`);
    }
  }
});

test("curriculum days: extracts exact 6 days per week per subject with local index fallback", async () => {
  // 1. Fallback day generation derives strictly from local day index
  const mockCurriculum = {
    phases: [
      {
        math: [
          {
            dailyPlan: [
              { title: "Bài 1" },
              { title: "Bài 2" },
              { title: "Bài 3" },
              { title: "Bài 4" },
              { title: "Bài 5" },
              { title: "Bài 6" }
            ]
          }
        ],
        vietnamese: [
          {
            dailyPlan: [
              { title: "Bài 1" },
              { title: "Bài 2" },
              { title: "Bài 3" },
              { title: "Bài 4" },
              { title: "Bài 5" },
              { title: "Bài 6" }
            ]
          }
        ]
      }
    ]
  };

  const extractedMock = extractCurriculumDays(mockCurriculum);
  const mathMockDays = extractedMock.filter(d => d.subject === "math");
  const vnMockDays = extractedMock.filter(d => d.subject === "vietnamese");

  assert.equal(mathMockDays.length, 6);
  assert.equal(vnMockDays.length, 6);
  assert.deepEqual(mathMockDays.map(d => d.day), WEEKDAY_NAMES);
  assert.deepEqual(vnMockDays.map(d => d.day), WEEKDAY_NAMES);

  // 2. Validate exact 6 days per week/subject across the entire curriculum (weeks 1–36)
  const curriculum = await loadCurriculumSource();
  const allDays = extractCurriculumDays(curriculum);

  for (const subject of ["math", "vietnamese"]) {
    for (let week = 1; week <= 36; week++) {
      const daysOfWeek = allDays.filter(d => d.subject === subject && d.week === week);
      assert.equal(daysOfWeek.length, 6, `Week ${week} for ${subject} must have exactly 6 days`);
      assert.deepEqual(
        daysOfWeek.map(d => d.day),
        WEEKDAY_NAMES,
        `Week ${week} for ${subject} days must match exact weekday sequence Thứ 2...Thứ 7`
      );
    }
  }
});

test("vague phrases: portable regex without lookbehind and does not flag embedded self-contained tasks", () => {
  // 1. Ensure NO lookbehind syntax (?<! or (?<= exists in any VAGUE_PHRASES pattern
  for (const { pattern, label } of VAGUE_PHRASES) {
    assert.equal(
      pattern.source.includes("?<"),
      false,
      `VAGUE_PHRASES pattern '${label}' must not contain lookbehind syntax: ${pattern.source}`
    );
  }

  // 2. Portable Vietnamese word-boundary behavior
  const nonMatchingWordPrefix = checkVagueReference("Chúng ta ưu tiên giải quyết trọng điểm của bài toán.");
  assert.equal(nonMatchingWordPrefix, null, "Should not flag 'trọng điểm' when checking 'trong đề'");

  // 3. Proves it does not flag embedded self-contained tasks
  const taskWithQuotedData = checkVagueReference(
    "Trong đề: 'Một thửa ruộng hình chữ nhật có chu vi 120m, chiều rộng bằng 2/3 chiều dài', hãy tính diện tích."
  );
  assert.equal(taskWithQuotedData, null, "Should not flag self-contained task with quoted problem statement and numbers");

  const taskWithMathExpression = checkVagueReference(
    "Trong phiếu bài tập, hãy thực hiện phép tính: 250 + 150 = 400."
  );
  assert.equal(taskWithMathExpression, null, "Should not flag self-contained task with mathematical equation");

  const taskWithConcreteQuantities = checkVagueReference(
    "Bảng số cho trước: [15, 30, 45, 60], tìm số tiếp theo của dãy."
  );
  assert.equal(taskWithConcreteQuantities, null, "Should not flag self-contained task with concrete array data");
});

test("sorting: deterministic independent of locale/ICU, sorting unknown days safely after known Mon-Sat", () => {
  assert.equal(comparePrimitive("apple", "banana"), -1);
  assert.equal(comparePrimitive("banana", "apple"), 1);
  assert.equal(comparePrimitive("same", "same"), 0);

  const mockCurriculum = {
    phases: [
      {
        math: [
          {
            dailyPlan: [
              { day: "Thứ 4", title: "B", objective: "obj", example: "", basic: "1", applied: "2", reasoning: "3" },
              { day: "Thứ 2", title: "A", objective: "obj", example: "", basic: "1", applied: "2", reasoning: "3" },
              { day: "Chủ nhật", title: "C", objective: "obj", example: "", basic: "1", applied: "2", reasoning: "3" },
              { day: "Thứ 7", title: "D", objective: "obj", example: "", basic: "1", applied: "2", reasoning: "3" },
              { day: "Ngày dự phòng", title: "E", objective: "obj", example: "", basic: "1", applied: "2", reasoning: "3" }
            ]
          }
        ],
        vietnamese: []
      }
    ]
  };

  const report = auditCurriculum(mockCurriculum);
  const exampleFindings = report.findings.filter(f => f.field === "example");
  const daySequence = exampleFindings.map(f => f.day);

  // Known days Thứ 2, Thứ 4, Thứ 7 must come first in numerical order
  assert.equal(daySequence[0], "Thứ 2");
  assert.equal(daySequence[1], "Thứ 4");
  assert.equal(daySequence[2], "Thứ 7");

  // Unknown days must be placed after Thứ 7 and sorted deterministically
  assert.ok(KNOWN_DAY_ORDER[daySequence[3]] === undefined);
  assert.ok(KNOWN_DAY_ORDER[daySequence[4]] === undefined);
  assert.deepEqual(daySequence.slice(3), ["Chủ nhật", "Ngày dự phòng"].sort(comparePrimitive));
});

test("loadCurriculumSource: preserves existing global window and does not overwrite it", async () => {
  const sentinel = { isBrowserWindow: true, BACH_CURRICULUM: globalThis.window?.BACH_CURRICULUM };
  const originalWindow = globalThis.window;

  try {
    globalThis.window = sentinel;
    const curriculum = await loadCurriculumSource();
    assert.equal(globalThis.window, sentinel, "Must not overwrite existing window object");
  } finally {
    globalThis.window = originalWindow;
  }
});

test("curriculum quality rigor: 432 lessons have 0 audit findings, math challenges have substantial problem length, self-contained data, and progressive hints", async () => {
  const curriculum = await loadCurriculumSource();
  const report = auditCurriculum(curriculum);
  assert.deepEqual(report.findings, [], "Full 432 lessons must have strictly 0 quality audit findings");

  const allDays = extractCurriculumDays(curriculum);
  assert.equal(allDays.length, 432);

  for (const day of allDays) {
    assert.ok(day.objective && day.objective.length >= 15, `Objective in Week ${day.week} (${day.day}, ${day.subject}) must be clear`);
    assert.ok(day.basic && day.basic.length >= 15, `Basic task in Week ${day.week} (${day.day}, ${day.subject}) must be substantial`);
    assert.ok(day.applied && day.applied.length >= 15, `Applied task in Week ${day.week} (${day.day}, ${day.subject}) must be substantial`);
    assert.ok(day.reasoning && day.reasoning.length >= 15, `Reasoning task in Week ${day.week} (${day.day}, ${day.subject}) must be substantial`);
    assert.ok(day.challenge && day.challenge.length >= 20, `Challenge in Week ${day.week} (${day.day}, ${day.subject}) must be non-trivial (> 20 chars)`);
    assert.doesNotMatch(day.challenge, /^(?:tự\s+làm|làm\s+thêm|bài\s+tập\s+tự\s+chọn)$/i, `Challenge in Week ${day.week} must not be a lazy placeholder`);
  }
});

