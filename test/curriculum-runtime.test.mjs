import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";
import { curriculumSource } from "./helpers/curriculum-fixture.js";

// カリキュラムランタイム、暗算バンク、教材品質検証テストスイート

test("curriculum materializes 36 Math and 36 Vietnamese lesson plans with 8 steps", () => {
  const sandbox = { window: {} };
  vm.runInNewContext(curriculumSource, sandbox);
  const curriculum = sandbox.window.BACH_CURRICULUM;
  const expectedFields = ["objective", "keyKnowledge", "sampleExample", "practiceBasic", "practiceApplied", "challengeOlympic", "selfCheck", "completionCriteria"];
  const weeks = curriculum.phases.flatMap(phase => phase.math.map((math, index) => ({ math, vietnamese: phase.vietnamese[index] })));
  assert.equal(weeks.length, 36);
  for (const week of weeks) {
    for (const lesson of [week.math.lesson, week.vietnamese.lesson]) {
      assert.deepEqual(Object.keys(lesson), expectedFields);
      for (const field of expectedFields) assert.ok(typeof lesson[field] === "string" && lesson[field].length > 20);
    }
  }
  assert.match(weeks[0].math.lesson.challengeOlympic, /Thử thách nhẹ/);
  assert.doesNotMatch(weeks[0].math.lesson.challengeOlympic, /Thử thách Olympic/);
  assert.notEqual(weeks[0].math.lesson.sampleExample, weeks[1].math.lesson.sampleExample);
  assert.notEqual(weeks[0].vietnamese.lesson.sampleExample, weeks[1].vietnamese.lesson.sampleExample);
});

test("curriculum includes a grade 3 to grade 4 bridge", () => {
  assert.match(curriculumSource, /bridge:/);
  assert.match(curriculumSource, /Số đến 100\.000/);
  assert.match(curriculumSource, /Câu và đoạn/);
});

test("curriculum includes a six-week accuracy-first mental calculation foundation", async () => {
  const sandbox = { window: {} };
  vm.runInNewContext(curriculumSource, sandbox);
  const track = sandbox.window.BACH_CURRICULUM.mentalMathFoundation;
  assert.equal(track.weeks.length, 6);
  assert.equal(track.title, "Nền tính toán nhanh");
  assert.equal(track.weeks[0].week, 1);
  assert.equal(track.weeks[5].week, 6);
  assert.match(track.intro, /đúng/i);
  assert.match(track.dailyRoutine.map(item => item.join(" ")).join(" "), /Ước lượng/);
  assert.match(track.dailyRoutine.map(item => item.join(" ")).join(" "), /tùy chọn/i);
  assert.notEqual(track.weeks[0].strategies, track.weeks[1].strategies);
  const appSource = await readFile(new URL("../app.js", import.meta.url), "utf8");
  assert.match(appSource, /renderMentalMathFoundation/);
  assert.match(appSource, /aria-pressed/);
  assert.match(await readFile(new URL("../styles.css", import.meta.url), "utf8"), /\.mental-math-check \{ width: 44px; height: 44px; \}/);
});

test("mental math bank has at least 5 groups per week, >= 3 distinct questions per group and reasoning question", async () => {
  const sandbox = { window: {} };
  vm.runInNewContext(curriculumSource, sandbox);
  const track = sandbox.window.BACH_CURRICULUM.mentalMathFoundation;
  assert.equal(track.weeks.length, 6);

  const allQuestions = new Set();
  let totalGroups = 0;
  let totalQuestions = 0;

  for (let w = 0; w < track.weeks.length; w++) {
    const week = track.weeks[w];
    assert.ok(Array.isArray(week.groups), `Week ${week.week} must have groups array`);
    assert.ok(week.groups.length >= 5, `Week ${week.week} must have >= 5 groups (has ${week.groups.length})`);

    let weekHasReasoning = false;

    for (let g = 0; g < week.groups.length; g++) {
      const group = week.groups[g];
      totalGroups++;
      assert.ok(typeof group.title === "string" && group.title.length > 5, `Group title in week ${week.week} is valid`);
      assert.ok(typeof group.hint === "string" && group.hint.length > 10, `Group hint in week ${week.week} is valid`);
      assert.ok(Array.isArray(group.questions), `Group questions in week ${week.week} is array`);
      assert.ok(group.questions.length >= 3 && group.questions.length <= 5, `Group in week ${week.week} must have 3-5 questions (has ${group.questions.length})`);

      for (const q of group.questions) {
        totalQuestions++;
        assert.ok(typeof q === "string" && q.trim().length > 3, "Question is non-empty string");
        // Check for reasoning / comparison question
        if (/suy luận|so sánh|giải thích|vì sao|tại sao|ý nghĩa/i.test(q)) {
          weekHasReasoning = true;
        }
        // Vietnam number formatting check (no comma used as thousands separator)
        assert.doesNotMatch(q, /\d+,\d{3}/, `Question '${q}' must not use comma as thousands separator`);
        // No Singapore or China references
        assert.doesNotMatch(q, /singapore|trung quốc/i, `Question '${q}' must not cite Singapore/Trung Quốc`);

        const normalized = q.trim().toLowerCase();
        assert.ok(!allQuestions.has(normalized), `Duplicate question across mental math bank: '${q}'`);
        allQuestions.add(normalized);
      }
    }

    assert.ok(weekHasReasoning, `Week ${week.week} must include at least one reasoning or comparison question`);
  }

  assert.ok(totalGroups >= 30, `Must have at least 30 groups total (got ${totalGroups})`);
  assert.ok(totalQuestions >= 90, `Must have at least 90 questions total (got ${totalQuestions})`);

  // Renderer verification: app.js contains Kho luyện 8–10 phút and collapsible details
  const appSource = await readFile(new URL("../app.js", import.meta.url), "utf8");
  assert.match(appSource, /Kho luyện 8–10 phút/);
  assert.match(appSource, /mental-math-group-details/);
  assert.match(appSource, /mental-math-question-list/);

  // CSS verification
  const stylesSource = await readFile(new URL("../styles.css", import.meta.url), "utf8");
  assert.match(stylesSource, /\.mental-math-bank/);
  assert.match(stylesSource, /\.mental-math-group-details/);
  assert.match(stylesSource, /\.mental-math-question-list/);
});

test("mental math continuation provides a distinct 8–10 minute bank for every week 7–36", async () => {
  const sandbox = { window: {} };
  vm.runInNewContext(curriculumSource, sandbox);
  const track = sandbox.window.BACH_CURRICULUM.mentalMathContinuation;
  assert.equal(track.weeks.length, 30);
  assert.equal(track.weeks[0].week, 7);
  assert.equal(track.weeks.at(-1).week, 36);

  const groupSignatures = new Set();
  let totalQuestions = 0;
  for (const week of track.weeks) {
    assert.equal(week.groups.length, 5, `week ${week.week} has five daily groups`);
    const types = new Set();
    for (const group of week.groups) {
      assert.ok(group.title.length > 5 && group.hint.length > 10);
      assert.ok(group.questions.length >= 4, `week ${week.week} group has at least four questions`);
      assert.match(group.questions.at(-1), /giải thích|vì sao|khi nào|hãy nói|dùng phép nhân|không tính/i);
      const signature = group.questions.join("|");
      assert.ok(!groupSignatures.has(signature), `group questions must not repeat: week ${week.week}`);
      groupSignatures.add(signature);
      types.add(group.title);
      totalQuestions += group.questions.length;
    }
    assert.ok(types.size >= 2, `week ${week.week} has multiple strategy types`);
  }
  assert.ok(totalQuestions >= 600);

  const appSource = await readFile(new URL("../app.js", import.meta.url), "utf8");
  const stylesSource = await readFile(new URL("../styles.css", import.meta.url), "utf8");
  assert.match(appSource, /renderMentalMathContinuation/);
  assert.match(appSource, /mentalMathContinuationWeekSelect/);
  assert.match(appSource, /mentalMathContinuation/);
  assert.match(stylesSource, /mental-math-continuation-panel/);
});


test("weekly rhythm is 25 minutes on weekdays and 50 minutes on Saturday", () => {
  const sandbox = { window: {} };
  vm.runInNewContext(curriculumSource, sandbox);
  const curriculum = sandbox.window.BACH_CURRICULUM;
  assert.equal(curriculum.meta.dailyMinutes.math, 25);
  assert.equal(curriculum.meta.dailyMinutes.vietnamese, 25);
  assert.equal(curriculum.meta.saturdayMinutes.math, 50);
  assert.equal(curriculum.meta.saturdayMinutes.vietnamese, 50);
  for (const subject of ["math", "vietnamese"]) {
    assert.equal(curriculum.routines[subject].reduce((sum, row) => sum + Number.parseInt(row[1], 10), 0), 25);
    assert.equal(curriculum.saturdayRoutines[subject].reduce((sum, row) => sum + Number.parseInt(row[1], 10), 0), 50);
  }
});

test("curriculum keeps 36 weeks and both subjects without reduction", () => {
  assert.match(curriculumSource, /totalWeeks: 36/);
  assert.match(curriculumSource, /math:/);
  assert.match(curriculumSource, /vietnamese:/);
  assert.match(curriculumSource, /P1/);
  assert.match(curriculumSource, /P6/);
});

test("curriculum gives every subject week a six-day detailed plan and an advanced layer", () => {
  const sandbox = { window: {} };
  vm.runInNewContext(curriculumSource, sandbox);
  const curriculum = sandbox.window.BACH_CURRICULUM;
  for (const phase of curriculum.phases) {
    for (const item of [...phase.math, ...phase.vietnamese]) {
      assert.equal(item.dailyPlan.length, 6);
      assert.ok(item.dailyPlan.every(day => day.objective && day.basic && day.applied && day.reasoning && day.advanced));
      assert.ok(item.dailyPlan.every(day => day.concrete?.lesson && day.concrete?.warmup && day.concrete?.discover && day.concrete?.worked && day.concrete?.exercises && day.concrete?.challenge && day.concrete?.hint && day.concrete?.check));
      if (item === phase.math[phase.math.indexOf(item)]) assert.ok(item.dailyPlan.every(day => day.concrete?.exerciseItems?.length >= 2));
    }
  }
  const math = curriculum.phases.flatMap(phase => phase.math);
  const vietnamese = curriculum.phases.flatMap(phase => phase.vietnamese);
  const weeks = math.map((mathLesson, index) => ({ math: mathLesson, vietnamese: vietnamese[index] }));
  assert.notEqual(math[0].dailyPlan[0].concrete.variant, math[1].dailyPlan[0].concrete.variant);
  assert.notEqual(vietnamese[0].dailyPlan[0].concrete.worked, vietnamese[1].dailyPlan[0].concrete.worked);
  for (const subject of ["math", "vietnamese"]) {
    const concreteLessons = weeks.flatMap(week => week[subject].dailyPlan.map(day => day.concrete.lesson));
    const concreteExercises = weeks.flatMap(week => week[subject].dailyPlan.map(day => day.concrete.exerciseItems.join(" | ")));
    assert.equal(new Set(concreteLessons).size, concreteLessons.length, `${subject} không được lặp bài học chi tiết`);
    // Một vài kỹ năng nền được phép quay lại theo chu kỳ; điều cần tránh là
    // phủ cùng một bộ bài lên toàn bộ lộ trình.
    assert.ok(new Set(concreteExercises).size >= concreteExercises.length / 6, `${subject} không được lặp bộ bài tập quá dày`);
  }
  assert.match(curriculum.meta.learnerProfile, /học sinh giỏi/);
  assert.match(curriculum.mentalMathFoundation.intro, /không học lại từ đầu/);
});

test("weeks 7–36 use authored, self-contained learning material rather than generic shells", () => {
  const sandbox = { window: {} };
  vm.runInNewContext(curriculumSource, sandbox);
  const curriculum = sandbox.window.BACH_CURRICULUM;
  const genericShell = /Làm một ví dụ nhỏ về|Làm 2 câu khởi động từ kiến thức đã biết|Đưa “.+” vào một tình huống đời sống|Đọc một văn bản\/đoạn mẫu ngắn/;

  for (const subject of ["math", "vietnamese"]) {
    const authoredWeeks = curriculum.phases
      .flatMap(phase => phase[subject])
      .slice(6);
    assert.equal(authoredWeeks.length, 30);
    const anchors = new Set();
    for (const week of authoredWeeks) {
      assert.equal(week.dailyPlan.length, 6);
      for (const day of week.dailyPlan) {
        assert.ok(day.example.length > 35, `${subject} ${week[0]} needs a concrete example`);
        assert.ok(day.basic.length > 30, `${subject} ${week[0]} needs a concrete task`);
        assert.doesNotMatch(`${day.example}\n${day.basic}\n${day.applied}`, genericShell);
      }
      anchors.add(week.dailyPlan[0].example);
    }
    assert.equal(anchors.size, 30, `${subject} needs a distinct anchor for every authored week`);
  }

  const allMath = curriculum.phases.flatMap(phase => phase.math);
  assert.match(allMath[6].dailyPlan[0].example, /1, 2, 4, 7, 11, 16/);
  assert.match(allMath[32].dailyPlan[0].example, /3\/5/);
  assert.match(allMath[33].dailyPlan[0].example, /chia 5 dư 2/);
});

test("opening place-value lesson gives Bách a concrete, self-contained warm-up", () => {
  assert.match(curriculumSource, /đọc số 48\.305 trong ví dụ/);
  assert.doesNotMatch(curriculumSource, /đọc to ba số trong đề/);
});

test("first math lesson is self-contained and not remedial for Bách", () => {
  const sandbox = { window: {} };
  vm.runInNewContext(curriculumSource, sandbox);
  const firstDay = sandbox.window.BACH_CURRICULUM.bridgeDailyLessons.math[0].days[0];
  assert.match(firstDay.basic, /3\.998 \+ 2\.007/);
  assert.match(firstDay.applied, /hàng chục nghìn là 2; hàng nghìn là 7/);
  assert.match(firstDay.basic, /\nCâu 2:/);
  assert.match(firstDay.applied, /\na\) Viết số\.\nb\) Đọc số\./);
  assert.match(firstDay.challenge, /Bước 1:/);
  assert.match(firstDay.hint, /\nGợi ý 2:/);
  assert.match(firstDay.advanced, /Bước 1:/);
  assert.doesNotMatch(firstDay.advanced, /Mở rộng học sinh giỏi:/);

  const week = sandbox.window.BACH_CURRICULUM.phases[0].math[0];
  const concrete = week.dailyPlan[0].concrete;
  assert.equal(concrete.exerciseItems.length, 4);
  assert.match(concrete.exerciseItems[2], /\na\) Viết số\./);
  assert.match(concrete.challenge, /thay chữ số hàng chục nghìn bằng 7/);
  assert.doesNotMatch(concrete.challenge, /Dùng các chữ số 4, 8, 3, 0, 5/);
  assert.match(firstDay.reasoning, /số 48\.305/);
});

test("all 36x6 math daily lessons contain concrete data for ordering, price, and between-number prompts", () => {
  const sandbox = { window: {} };
  vm.runInNewContext(curriculumSource, sandbox);
  const curriculum = sandbox.window.BACH_CURRICULUM;
  const mathWeeks = curriculum.phases.flatMap(phase => phase.math);
  assert.equal(mathWeeks.length, 36);

  const vagueOrdering = /sắp xếp hoặc so sánh(?!\s*[:：\d(])|sắp xếp(?:\s+(?:các|\d+)\s+số)?\s+theo\s+thứ\s+tự(?:\s+(?:tăng|giảm)\s+dần)?(?!\s*(?:(?:tăng|giảm)\s+dần\s*)?[:：\d(])|4[–-]6 giá trị,\s*sắp xếp/i;
  const vaguePrice = /và bài tiền(?!\s*[:：\d(])|ví dụ tính số giấy phủ mặt bàn và tiền mua(?!\s*[:：\d(])|bài toán (?:về giá|tiền)(?!\s*[:：\d(])/i;
  const vagueBetween = /tìm (?:một )?số(?: tròn trăm| tròn chục)? nằm giữa(?!\s*(?:hai (?:mốc|số)\s+)?\d)|nằm giữa hai số(?!\s*[:：\d])|số ở giữa(?!\s*(?:hai (?:mốc|số)\s+)?[:：\d])/i;

  let totalLessonsChecked = 0;

  for (let w = 0; w < mathWeeks.length; w++) {
    const week = mathWeeks[w];
    assert.equal(week.dailyPlan.length, 6, `Week ${w + 1} must have 6 days`);
    for (let d = 0; d < week.dailyPlan.length; d++) {
      totalLessonsChecked++;
      const day = week.dailyPlan[d];
      const concrete = day.concrete;
      assert.ok(concrete, `Week ${w + 1} Day ${d + 1} must have concrete lesson`);

      const textPool = [
        day.title,
        day.objective,
        day.example,
        day.basic,
        day.applied,
        day.reasoning,
        day.selfCheck,
        day.drill,
        day.variant,
        day.advanced,
        concrete.lesson,
        concrete.worked,
        concrete.exercises,
        ...(Array.isArray(concrete.exerciseItems) ? concrete.exerciseItems : []),
        concrete.variant,
        concrete.drill,
        concrete.challenge,
        concrete.check,
        concrete.warmup,
        concrete.discover,
        concrete.hint
      ].filter(Boolean);

      for (const text of textPool) {
        assert.doesNotMatch(text, vagueOrdering, `Vague ordering prompt found in W${w + 1} D${d + 1}: "${text}"`);
        assert.doesNotMatch(text, vaguePrice, `Vague price prompt found in W${w + 1} D${d + 1}: "${text}"`);
        assert.doesNotMatch(text, vagueBetween, `Vague between prompt found in W${w + 1} D${d + 1}: "${text}"`);

        if (/sắp xếp|thứ tự tăng dần|thứ tự giảm dần/i.test(text) && /các số|giá trị/i.test(text)) {
          assert.match(text, /\d+[\.,]?\d*/, `Ordering task must include concrete numbers in W${w + 1} D${d + 1}: "${text}"`);
        }
        if (/mua|bán|giá|tiền thối/i.test(text) && /đồng/i.test(text)) {
          assert.match(text, /\d+[\.,]?\d*\s*đồng/, `Price task must include concrete monetary amounts in W${w + 1} D${d + 1}: "${text}"`);
        }
        if (/nằm giữa|ở giữa/i.test(text)) {
          assert.match(text, /\d+/, `Between task must include concrete numbers in W${w + 1} D${d + 1}: "${text}"`);
        }
      }
    }
  }

  assert.equal(totalLessonsChecked, 36 * 6, "Must check all 36x6 = 216 math daily lessons");
});

test("ordering normalization is idempotent and preserves authored numbers in materialized curriculum", () => {
  const sandbox = { window: {} };
  vm.runInNewContext(curriculumSource, sandbox);
  const curriculum = sandbox.window.BACH_CURRICULUM;
  const mathWeeks = curriculum.phases.flatMap(phase => phase.math);
  const week1 = mathWeeks[0];
  const wednesday = week1.dailyPlan.find(d => d.day === "Thứ 4" || d.title.includes("So sánh có lý do"));
  assert.ok(wednesday, "Week 1 Wednesday must exist in materialized curriculum");

  const authoredNumbers = "45.200; 52.080; 49.999; 52.800; 45.020";

  // 1. Week 1 Wednesday keeps authored numbers exactly once
  assert.ok(wednesday.basic.includes(authoredNumbers), "basic must include authored numbers");
  assert.ok(wednesday.concrete.exercises.includes(authoredNumbers), "concrete.exercises must include authored numbers");
  assert.ok(wednesday.concrete.exerciseItems[0].includes(authoredNumbers), "concrete.exerciseItems[0] must include authored numbers");

  const countOccurrences = (str, pattern) => (str.match(pattern) || []).length;
  assert.equal(countOccurrences(wednesday.basic, /45\.200/g), 1, "45.200 should appear exactly once in basic");
  assert.equal(countOccurrences(wednesday.concrete.exerciseItems[0], /45\.200/g), 1, "45.200 should appear exactly once in exerciseItems[0]");
  assert.equal(countOccurrences(wednesday.concrete.exercises, /45\.200/g), 1, "45.200 should appear exactly once in exercises");

  // Must not repeat 'tăng dần' or append synthetic list to Week 1 Wednesday
  assert.doesNotMatch(wednesday.basic, /tăng dần[\s\S]*tăng dần/i, "basic must not repeat 'tăng dần'");
  assert.doesNotMatch(wednesday.concrete.exerciseItems[0], /tăng dần[\s\S]*tăng dần/i, "exerciseItems[0] must not repeat 'tăng dần'");
  assert.doesNotMatch(wednesday.concrete.exercises, /tăng dần[\s\S]*tăng dần/i, "exercises must not repeat 'tăng dần'");
  assert.doesNotMatch(wednesday.basic, /\(\d+[\d.,]*\s*;\s*\d+[\d.,]*\)/, "basic must not contain synthetic number list");
  assert.doesNotMatch(wednesday.concrete.exerciseItems[0], /\(\d+[\d.,]*\s*;\s*\d+[\d.,]*\)/, "exerciseItems[0] must not contain synthetic number list");

  // 2. A genuinely vague ordering task gains exactly one self-contained number list
  const vagueSandbox = { window: {} };
  const injectedCurriculum = curriculumSource.replace(
    'basic: "Sắp xếp 5 số theo thứ tự tăng dần: 45.200; 52.080; 49.999; 52.800; 45.020."',
    'basic: "Sắp xếp các số theo thứ tự tăng dần."'
  );
  vm.runInNewContext(injectedCurriculum, vagueSandbox);
  const vagueWed = vagueSandbox.window.BACH_CURRICULUM.phases[0].math[0].dailyPlan[2];

  const listMatches = vagueWed.concrete.exerciseItems[0].match(/\([\d.]+(?:\s*;\s*[\d.]+)+\)/g);
  assert.ok(listMatches && listMatches.length === 1, "Genuinely vague ordering task must gain exactly one number list");
  assert.doesNotMatch(vagueWed.concrete.exerciseItems[0], /tăng dần[\s\S]*tăng dần/i, "Must not repeat 'tăng dần'");
  assert.doesNotMatch(vagueWed.concrete.exercises, /tăng dần[\s\S]*tăng dần/i, "Must not repeat 'tăng dần'");

  // 3. Repeated ordering normalization is idempotent
  const repeatCode = `
    const initialExercise = window.BACH_CURRICULUM.phases[0].math[0].dailyPlan[2].concrete.exercises;
    const initialItem = window.BACH_CURRICULUM.phases[0].math[0].dailyPlan[2].concrete.exerciseItems[0];
    window.BACH_CURRICULUM.phases.forEach(phase => {
      const firstWeek = Number(phase.weeks.split("–")[0]);
      phase.math = phase.math.map((item, index) => ({
        ...item,
        lesson: createLessonPlan(item, "math", firstWeek + index, phase),
        ...resolveDailyPlan(item, "math", firstWeek + index, phase)
      }));
    });
    const repeatedExercise = window.BACH_CURRICULUM.phases[0].math[0].dailyPlan[2].concrete.exercises;
    const repeatedItem = window.BACH_CURRICULUM.phases[0].math[0].dailyPlan[2].concrete.exerciseItems[0];
    ({ initialExercise, repeatedExercise, initialItem, repeatedItem })
  `;
  const repeatResult = vm.runInNewContext(injectedCurriculum + "\n" + repeatCode, { window: {} });
  assert.equal(repeatResult.repeatedItem, repeatResult.initialItem, "Repeated normalization must be idempotent on exercise items");
  assert.equal(repeatResult.repeatedExercise, repeatResult.initialExercise, "Repeated normalization must be idempotent on exercises");
  assert.equal(countOccurrences(repeatResult.repeatedItem, /\([\d.]+(?:\s*;\s*[\d.]+)+\)/g), 1, "Must not append additional lists");
  assert.doesNotMatch(repeatResult.repeatedItem, /tăng dần[\s\S]*tăng dần/i, "Must not repeat 'tăng dần' on repeated pass");
});

test("AGY correction round 2: ordering prompt normalization edge cases (acceptance tests A-E)", () => {
  const sandbox = { window: {} };
  vm.runInNewContext(curriculumSource, sandbox);
  const curriculum = sandbox.window.BACH_CURRICULUM;
  assert.equal(curriculum._normalizeMathTask, undefined, "_normalizeMathTask must not be exposed on BACH_CURRICULUM");
  assert.ok(!("_normalizeMathTask" in curriculum), "_normalizeMathTask must be absent from BACH_CURRICULUM");

  // Helper: materialize curriculum in a VM with an injected authored basic string into a bridge daily lesson
  const materializeWithInjectedBasic = (authoredBasic, weekNumber = 1, dayIndex = 0) => {
    const injection = `
      if (window.BACH_CURRICULUM && window.BACH_CURRICULUM.bridgeDailyLessons) {
        const targetWeek = window.BACH_CURRICULUM.bridgeDailyLessons.math.find(w => w.week === ${weekNumber});
        if (targetWeek && targetWeek.days[${dayIndex}]) {
          targetWeek.days[${dayIndex}].basic = ${JSON.stringify(authoredBasic)};
        }
      }
    `;
    const injectedSource = curriculumSource.replace(
      "window.BACH_CURRICULUM.phases.forEach(phase => {",
      `${injection}\nwindow.BACH_CURRICULUM.phases.forEach(phase => {`
    );
    const box = { window: {} };
    vm.runInNewContext(injectedSource, box);
    const mathWeeks = box.window.BACH_CURRICULUM.phases.flatMap(p => p.math);
    return mathWeeks[weekNumber - 1].dailyPlan[dayIndex];
  };

  // Acceptance Test A: Week 1 Wednesday still preserves authored list exactly once
  const week1 = curriculum.phases.flatMap(p => p.math)[0];
  const wednesday = week1.dailyPlan.find(d => d.day === "Thứ 4" || d.title.includes("So sánh có lý do"));
  assert.ok(wednesday, "Week 1 Wednesday must exist in materialized curriculum");
  const authoredNumbers = "45.200; 52.080; 49.999; 52.800; 45.020";
  assert.ok(wednesday.basic.includes(authoredNumbers), "basic must include authored numbers");
  assert.ok(wednesday.concrete.exercises.includes(authoredNumbers), "concrete.exercises must include authored numbers");
  assert.ok(wednesday.concrete.exerciseItems[0].includes(authoredNumbers), "concrete.exerciseItems[0] must include authored numbers");
  const countOccurrences = (str, pattern) => (str.match(pattern) || []).length;
  assert.equal(countOccurrences(wednesday.basic, /45\.200/g), 1, "45.200 appears exactly once in basic");
  assert.equal(countOccurrences(wednesday.concrete.exerciseItems[0], /45\.200/g), 1, "45.200 appears exactly once in exerciseItems[0]");
  assert.doesNotMatch(wednesday.basic, /tăng dần[\s\S]*tăng dần/i, "basic must not duplicate 'tăng dần'");
  assert.doesNotMatch(wednesday.concrete.exerciseItems[0], /\(\d+[\d.,]*\s*;\s*\d+[\d.,]*\)/, "no synthetic list attached to authored list");

  // Acceptance Test B: `4-6 giá trị, sắp xếp theo thứ tự tăng dần` becomes one grammatical task
  const rawB = "4-6 giá trị, sắp xếp theo thứ tự tăng dần";
  const dayB = materializeWithInjectedBasic(rawB, 1, 0);
  const normalizedB = dayB.basic;
  assert.doesNotMatch(normalizedB, /theo thứ tự tăng dần[\s\S]*theo thứ tự tăng dần/i, "Must not repeat 'theo thứ tự tăng dần'");
  assert.doesNotMatch(normalizedB, /tăng dần[\s\S]*tăng dần/i, "Must not repeat 'tăng dần'");
  const listMatchesB = normalizedB.match(/\([\d.]+(?:\s*;\s*[\d.]+)+\)/g);
  assert.ok(listMatchesB && listMatchesB.length === 1, `Must have exactly one generated numeric list, got ${listMatchesB?.length}`);
  assert.match(normalizedB, /^đọc 5 giá trị \([\d.;\s]+\), sắp xếp theo thứ tự tăng dần$/, "Must be a clean grammatical sentence");

  // Acceptance Test C: A text with unrelated numeric semicolon data + vague ordering instruction still receives exactly one ordering list
  const rawC1 = "Bảng dữ liệu đo: 12.500; 18.200. Hãy sắp xếp các số theo thứ tự tăng dần.";
  const dayC1 = materializeWithInjectedBasic(rawC1, 2, 1);
  const normalizedC1 = dayC1.basic;
  assert.ok(normalizedC1.includes("12.500; 18.200"), "Unrelated numeric semicolon data must be preserved");
  const listMatchesC1 = normalizedC1.match(/\([\d.]+(?:\s*;\s*[\d.]+)+\)/g);
  assert.ok(listMatchesC1 && listMatchesC1.length === 1, `Must receive exactly one generated ordering list, got ${listMatchesC1?.length}`);
  assert.match(normalizedC1, /sắp xếp 5 số theo thứ tự tăng dần \([\d.;\s]+\)/, "Ordering prompt must be normalized");

  const rawC2 = "Tọa độ A và B: 10; 20; 4-6 giá trị, sắp xếp theo thứ tự tăng dần";
  const dayC2 = materializeWithInjectedBasic(rawC2, 1, 0);
  const normalizedC2 = dayC2.basic;
  assert.ok(normalizedC2.includes("10; 20;"), "Unrelated semicolon data preserved");
  const listMatchesC2 = normalizedC2.match(/\([\d.]+(?:\s*;\s*[\d.]+)+\)/g);
  assert.ok(listMatchesC2 && listMatchesC2.length === 1, `Must receive exactly one generated list, got ${listMatchesC2?.length}`);

  // Acceptance Test D: Invariant: A string with repeated/compound ordering wording cannot cause duplicate generated list per ordering prompt
  const compoundTestCases = [
    "4-6 giá trị, sắp xếp theo thứ tự tăng dần, sắp xếp theo thứ tự tăng dần",
    "4-6 giá trị, sắp xếp theo thứ tự tăng dần; sắp xếp theo thứ tự đề bài yêu cầu",
    "Sắp xếp hoặc so sánh, sắp xếp theo thứ tự tăng dần",
    "Sắp xếp hoặc so sánh theo thứ tự đề bài yêu cầu theo thứ tự tăng dần",
    "Sắp xếp các số theo thứ tự đề bài yêu cầu, sắp xếp các số theo thứ tự tăng dần",
    "Sắp xếp theo thứ tự tăng dần; sắp xếp theo thứ tự tăng dần"
  ];
  for (const rawD of compoundTestCases) {
    const dayD = materializeWithInjectedBasic(rawD, 3, 2);
    const normalizedD = dayD.basic;
    const listsD = normalizedD.match(/\([\d.]+(?:\s*;\s*[\d.]+)+\)/g) || [];
    assert.equal(
      listsD.length,
      1,
      `Invariant violated: prompt '${rawD}' produced ${listsD.length} lists instead of exactly 1: '${normalizedD}'`
    );
    assert.doesNotMatch(
      normalizedD,
      /theo thứ tự tăng dần[\s\S]*theo thứ tự tăng dần/i,
      `Invariant violated: repeated 'theo thứ tự tăng dần' in '${normalizedD}'`
    );
  }

  // Acceptance Test E: Materializing curriculum repeatedly remains identical (idempotency)
  const initialSnap = JSON.stringify(curriculum.phases.flatMap(p => p.math.map(m => m.dailyPlan.map(d => ({
    exercises: d.concrete?.exercises,
    exerciseItems: d.concrete?.exerciseItems
  })))));
  const repeatCode = `
    window.BACH_CURRICULUM.phases.forEach(phase => {
      const firstWeek = Number(phase.weeks.split("–")[0]);
      phase.math = phase.math.map((item, index) => ({
        ...item,
        lesson: createLessonPlan(item, "math", firstWeek + index, phase),
        ...resolveDailyPlan(item, "math", firstWeek + index, phase)
      }));
    });
    JSON.stringify(window.BACH_CURRICULUM.phases.flatMap(p => p.math.map(m => m.dailyPlan.map(d => ({
      exercises: d.concrete?.exercises,
      exerciseItems: d.concrete?.exerciseItems
    })))))
  `;
  const repeatedSnap = vm.runInNewContext(repeatCode, sandbox);
  assert.equal(repeatedSnap, initialSnap, "Materializing curriculum repeatedly must remain identical");
});

test("AGY correction round 4: authored list recognition and idempotent bảng giá normalization (acceptance tests B, C, D)", () => {
  const countOccurrences = (str, pattern) => (str.match(pattern) || []).length;

  // Helper: materialize curriculum with injected fields without direct helper export
  const materializeWithInjected = (injections = []) => {
    const injectionStatements = injections.map(({ field = "basic", value, week = 1, day = 0 }) => `
      if (window.BACH_CURRICULUM && window.BACH_CURRICULUM.bridgeDailyLessons) {
        const targetWeek = window.BACH_CURRICULUM.bridgeDailyLessons.math.find(w => w.week === ${week});
        if (targetWeek && targetWeek.days[${day}]) {
          targetWeek.days[${day}][${JSON.stringify(field)}] = ${JSON.stringify(value)};
        }
      }
    `).join("\n");
    const injectedSource = curriculumSource.replace(
      "window.BACH_CURRICULUM.phases.forEach(phase => {",
      `${injectionStatements}\nwindow.BACH_CURRICULUM.phases.forEach(phase => {`
    );
    const box = { window: {} };
    vm.runInNewContext(injectedSource, box);
    return box;
  };

  // Acceptance Test B: Authored string with concrete list before ordering phrase is preserved exactly once with no synthetic list
  const authoredB = "Cho các số: 12.000; 15.000; sắp xếp theo thứ tự tăng dần";
  const boxB = materializeWithInjected([{ field: "basic", value: authoredB, week: 1, day: 0 }]);
  const mathWeeksB = boxB.window.BACH_CURRICULUM.phases.flatMap(p => p.math);
  const dayB = mathWeeksB[0].dailyPlan[0];

  assert.equal(dayB.basic, authoredB, "Authored ordering prompt must be preserved exactly");
  assert.equal(countOccurrences(dayB.basic, /12\.000/g), 1, "12.000 appears exactly once in basic");
  assert.equal(countOccurrences(dayB.basic, /15\.000/g), 1, "15.000 appears exactly once in basic");
  assert.doesNotMatch(dayB.basic, /\([\d.]+(?:\s*;\s*[\d.]+)+\)/, "Must not append synthetic parenthesized list");

  // Repeat materialization check for B
  const repeatCodeB = `
    window.BACH_CURRICULUM.phases.forEach(phase => {
      const firstWeek = Number(phase.weeks.split("–")[0]);
      phase.math = phase.math.map((item, index) => ({
        ...item,
        lesson: createLessonPlan(item, "math", firstWeek + index, phase),
        ...resolveDailyPlan(item, "math", firstWeek + index, phase)
      }));
    });
    window.BACH_CURRICULUM.phases[0].math[0].dailyPlan[0].basic
  `;
  const repeatedBasicB = vm.runInNewContext(repeatCodeB, boxB);
  assert.equal(repeatedBasicB, authoredB, "Repeated materialization of authored ordering string must remain byte-for-byte identical");

  // Acceptance Test C1: Vague 'bảng giá' becomes concrete exactly once
  const vagueC = "Quan sát bảng giá và tính tổng số tiền mua hàng.";
  const alreadyConcreteC = "bảng giá đồ dùng (vở 12.000 đồng, bút 8.000 đồng)";
  const boxC = materializeWithInjected([
    { field: "basic", value: vagueC, week: 1, day: 1 },
    { field: "basic", value: alreadyConcreteC, week: 1, day: 2 }
  ]);
  const mathWeeksC = boxC.window.BACH_CURRICULUM.phases.flatMap(p => p.math);
  const dayC1 = mathWeeksC[0].dailyPlan[1];
  assert.ok(dayC1.basic.includes("bảng giá đồ dùng (vở 12.000 đồng, bút 8.000 đồng)"), "Vague bảng giá must become concrete");
  assert.equal(countOccurrences(dayC1.basic, /bảng giá/g), 1, "bảng giá must appear exactly once");
  assert.equal(countOccurrences(dayC1.basic, /đồ dùng/g), 1, "đồ dùng must appear exactly once");
  assert.equal(countOccurrences(dayC1.basic, /12\.000 đồng/g), 1, "12.000 đồng must appear exactly once");
  assert.equal(countOccurrences(dayC1.basic, /8\.000 đồng/g), 1, "8.000 đồng must appear exactly once");

  // Acceptance Test C2: Already-concrete 'bảng giá đồ dùng (vở 12.000 đồng, bút 8.000 đồng)' stays byte-for-byte stable
  const dayC2 = mathWeeksC[0].dailyPlan[2];
  assert.equal(dayC2.basic, alreadyConcreteC, "Already concrete bảng giá must stay byte-for-byte stable");

  // Acceptance Test D: Repeat materialization preserves idempotency without duplicating parenthetical
  const reNormalizedC1 = vm.runInNewContext(`
    window.BACH_CURRICULUM.bridgeDailyLessons.math[0].days[1].basic = ${JSON.stringify(dayC1.basic)};
    window.BACH_CURRICULUM.phases.forEach(phase => {
      const firstWeek = Number(phase.weeks.split("–")[0]);
      phase.math = phase.math.map((item, index) => ({
        ...item,
        lesson: createLessonPlan(item, "math", firstWeek + index, phase),
        ...resolveDailyPlan(item, "math", firstWeek + index, phase)
      }));
    });
    window.BACH_CURRICULUM.phases[0].math[0].dailyPlan[1].basic
  `, boxC);
  assert.equal(reNormalizedC1, dayC1.basic, "Repeated materialization of normalized bảng giá must not duplicate parenthetical");
  assert.doesNotMatch(reNormalizedC1, /đồ dùng[\s\S]*đồ dùng/i, "Must not duplicate 'đồ dùng'");
  assert.equal(countOccurrences(reNormalizedC1, /12\.000 đồng/g), 1, "Must not duplicate price 12.000 đồng");

  const reNormalizedC2 = vm.runInNewContext(`
    window.BACH_CURRICULUM.phases.forEach(phase => {
      const firstWeek = Number(phase.weeks.split("–")[0]);
      phase.math = phase.math.map((item, index) => ({
        ...item,
        lesson: createLessonPlan(item, "math", firstWeek + index, phase),
        ...resolveDailyPlan(item, "math", firstWeek + index, phase)
      }));
    });
    window.BACH_CURRICULUM.phases[0].math[0].dailyPlan[2].basic
  `, boxC);
  assert.equal(reNormalizedC2, alreadyConcreteC, "Repeated materialization of already concrete bảng giá must remain byte-for-byte stable");
});

test("Vietnamese bridge weeks 1–6 have 100% concrete, self-contained stimuli with zero empty prompts", () => {
  const sandbox = { window: {} };
  vm.runInNewContext(curriculumSource, sandbox);
  const vWeeks = sandbox.window.BACH_CURRICULUM.phases[0].vietnamese;
  assert.equal(vWeeks.length, 6, "Phase 1 must have 6 Vietnamese bridge weeks");

  for (let w = 0; w < 6; w++) {
    const week = vWeeks[w];
    assert.equal(week.dailyPlan.length, 6, `Week ${w + 1} must have 6 days`);
    for (let d = 0; d < 6; d++) {
      const day = week.dailyPlan[d];
      // Assert that basic is not a hollow shell command
      assert.doesNotMatch(day.basic, /^Sửa 3 câu cụt thành câu đủ ý\.$/);
      assert.doesNotMatch(day.basic, /^Gạch 3 từ khóa trong một đoạn ngắn\.$/);
      assert.doesNotMatch(day.basic, /^Nối 3 cặp câu bằng vì, nên, nhưng\.$/);
      assert.doesNotMatch(day.basic, /^Sắp xếp 4 câu thành đoạn có trình tự\.$/);
      assert.ok(day.basic.length > 50, `Week ${w + 1} Day ${d + 1} basic must be rich (> 50 chars), got ${day.basic.length}`);
      assert.ok(day.applied.length > 40, `Week ${w + 1} Day ${d + 1} applied must be concrete (> 40 chars)`);
      assert.ok(day.selfCheck.length > 30, `Week ${w + 1} Day ${d + 1} selfCheck must be informative`);
    }
  }
});

test("Saturday Mini-tests across weeks 7–36 are fully authored 50-minute tests with structured questions", () => {
  const sandbox = { window: {} };
  vm.runInNewContext(curriculumSource, sandbox);
  const mathPhases = sandbox.window.BACH_CURRICULUM.phases.slice(1);
  const allSaturdayMath = mathPhases.flatMap(p => p.math.map(m => m.dailyPlan[5]));
  assert.equal(allSaturdayMath.length, 30, "Must have 30 authored Saturday math tests in weeks 7-36");

  for (let i = 0; i < allSaturdayMath.length; i++) {
    const sat = allSaturdayMath[i];
    assert.match(sat.title, /Mini-test 50 phút/);
    if (i === 0) {
      assert.match(sat.basic, /1\. Viết tiếp ba số hạng vào dãy số sau/);
      assert.match(sat.basic, /2\. Tìm số hạng thứ 30/);
      assert.match(sat.applied, /1\. Một khán đài có 16 hàng ghế/);
      assert.match(sat.challenge, /1\. Cho dãy số/);
    } else {
      assert.match(sat.basic, /Đề thi Mini-test 50 phút/);
      assert.match(sat.basic, /Câu 1/);
      assert.match(sat.basic, /Câu 2/);
      assert.match(sat.basic, /Olympic thử thách/);
      assert.match(sat.applied, /Tự chấm điểm/);
    }
  }

  const allSaturdayVietnamese = mathPhases.flatMap(p => p.vietnamese.map(v => v.dailyPlan[5]));
  assert.equal(allSaturdayVietnamese.length, 30, "Must have 30 authored Saturday Vietnamese tests in weeks 7-36");
  for (let i = 0; i < allSaturdayVietnamese.length; i++) {
    const satV = allSaturdayVietnamese[i];
    assert.match(satV.title, /Mini-test 50 phút/);
    assert.match(satV.basic, /Đề kiểm tra Tiếng Việt 50 phút/);
    assert.match(satV.basic, /Phần 1 - Đọc hiểu/);
    assert.match(satV.applied, /Tự chấm điểm/);
  }
});

test("Week 1 Wednesday math curriculum has concrete two-step applied budget problem and multi-step Olympic challenge with progressive hints", () => {
  const sandbox = { window: {} };
  vm.runInNewContext(curriculumSource, sandbox);
  const wednesday = sandbox.window.BACH_CURRICULUM.phases[0].math[0].dailyPlan.find(d => d.day === "Thứ 4");
  assert.ok(wednesday, "Week 1 Wednesday math daily plan must exist");

  // 1. Applied item: self-contained two-step price/comparison prompt with concrete budget and meaningful conclusion, not called Olympic
  const applied = wednesday.applied;
  assert.ok(typeof applied === "string" && applied.length > 50);
  assert.match(applied, /150\.000\s*đồng/i, "Applied item must have a concrete budget");
  assert.match(applied, /78\.000\s*đồng/i, "Applied item must specify item price");
  assert.match(applied, /68\.000\s*đồng/i, "Applied item must specify option A price");
  assert.match(applied, /72\.500\s*đồng/i, "Applied item must specify option B price");
  assert.match(applied, /đủ tiền/i, "Applied item must compare budget / feasibility");
  assert.match(applied, /còn lại bao nhiêu tiền/i, "Applied item must compute remaining budget");
  assert.doesNotMatch(applied, /Olympic/i, "Applied item must not be called Olympic");

  // 2. Challenge item: self-contained genuinely multi-step Grade-4 problem requiring organized cases, reasoning, and check
  const challenge = wednesday.challenge;
  assert.ok(typeof challenge === "string" && challenge.length > 50);
  assert.doesNotMatch(challenge, /52\.x80/, "Old trivial one-digit comparison must be replaced");
  assert.match(challenge, /nhiều bước/i, "Challenge must include multi-step wording");
  assert.match(challenge, /trường hợp/i, "Challenge must include case wording");
  assert.match(challenge, /kiểm tra lại|xác minh/i, "Challenge must include verification wording");

  // 3. Hints: progressive hints that do not reveal the answer immediately
  const hint = wednesday.hint;
  assert.match(hint, /Gợi ý 1:/);
  assert.match(hint, /Gợi ý 2:/);
  assert.match(hint, /Gợi ý 3:/);
  assert.doesNotMatch(hint, /đáp số là/i);
  assert.doesNotMatch(hint, /chữ số x duy nhất/i);
});
