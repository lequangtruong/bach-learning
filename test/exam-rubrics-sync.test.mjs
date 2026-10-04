import test from "node:test";
import assert from "node:assert/strict";
import { WEEKEND_MATH_EXAMS_FULL } from "../js/math-weekend-bank-data.js";
import { readFile } from "node:fs/promises";
import vm from "node:vm";

test("exam-rubrics-sync: Week 8 Problem 3 rubric sub-parts sum exactly to 3.0 without odd decimal points", () => {
  const w8 = WEEKEND_MATH_EXAMS_FULL.w8;
  const p3 = w8.sections[2].questions[0];

  assert.ok(p3.q.includes("Bài 3 (3.0 điểm)"), "Question title must declare 3.0 points");
  assert.ok(p3.q.includes("48 chiếc bút màu"), "Question text must match Problem 3");

  // Đếm các mốc điểm trong lời giải: phải gồm 6 bước [0.5đ] = 3.0đ
  const points = (p3.answer.match(/\[(\d+(?:\.\d+)?)đ\]/g) || []).map(m => parseFloat(m.replace(/[\[\]đ]/g, "")));
  const sum = points.reduce((acc, p) => acc + p, 0);

  assert.equal(points.length, 6, "Must have exactly 6 distinct 0.5đ scoring steps");
  assert.ok(points.every(p => p === 0.5), "All scoring sub-parts must be 0.5đ, avoiding 0.35đ or 0.4đ");
  assert.equal(sum, 3.0, "Sum of sub-parts must equal exactly 3.0 points");
});

test("exam-rubrics-sync: Week 19 Question 4 specifies exact grouping criterion for convenient multiplication", () => {
  const w19 = WEEKEND_MATH_EXAMS_FULL.w19;
  const q4 = w19.sections[0].questions[3];

  assert.ok(q4.q.includes("nhóm hai thừa số để tạo ra số tròn chục"), "Must explicitly specify grouping for round tens");
  assert.ok(q4.choices.includes("B. 15 × (8 × 5) = 15 × 40 = 600"), "Must have unique correct choice B");
  assert.equal(q4.choices.length, 4, "Must have standard 4 choices");
  assert.ok(q4.answer.startsWith("B. 15 × (8 × 5) = 15 × 40 = 600"), "Answer key must be B");
});

test("exam-rubrics-sync: Week 29 Problem 1 asks for fractions common denominator steps, not vertical columns", () => {
  const w29 = WEEKEND_MATH_EXAMS_FULL.w29;
  const p1 = w29.sections[1].questions[0];

  assert.ok(p1.q.includes("Tính và trình bày các bước quy đồng mẫu số ra vở ô ly"), "Must instruct common denominator steps");
  assert.doesNotMatch(p1.q, /Đặt tính rồi tính/, "Must not confuse child with vertical natural-number columns");
});

test("exam-rubrics-sync: Week 33 Question 4 has unique correct choice for 1/2", () => {
  const w33 = WEEKEND_MATH_EXAMS_FULL.w33;
  const q4 = w33.sections[0].questions[3];

  assert.ok(q4.choices.includes("A. 1/4 ÷ 2"), "Choice A: 1/4 ÷ 2 = 1/8");
  assert.ok(q4.choices.includes("B. 1/2 ÷ 2"), "Choice B: 1/2 ÷ 2 = 1/4");
  assert.ok(q4.choices.includes("C. 3/8 ÷ 3/4"), "Choice C: 3/8 ÷ 3/4 = 1/2");
  assert.ok(q4.choices.includes("D. 5/6 ÷ 1/3"), "Choice D: 5/6 ÷ 1/3 = 5/2");

  assert.ok(q4.answer.startsWith("C. 3/8 ÷ 3/4"), "Answer key must uniquely be C");
});

test("exam-rubrics-sync: all 36 weeks have exactly 4 sections summing to 10 points", () => {
  for (let i = 1; i <= 36; i++) {
    const key = `w${i}`;
    const exam = WEEKEND_MATH_EXAMS_FULL[key];
    assert.ok(exam, `Exam ${key} must exist`);
    assert.equal(exam.sections.length, 4, `${key} must have exactly 4 sections`);

    const s1 = parseFloat(exam.sections[0].scoreText);
    const s2 = parseFloat(exam.sections[1].scoreText);
    const s3 = parseFloat(exam.sections[2].scoreText);
    const s4 = parseFloat(exam.sections[3].scoreText);

    assert.equal(s1, 3.0, `${key} section 1 must be 3.0đ`);
    assert.equal(s2, 2.5, `${key} section 2 must be 2.5đ`);
    assert.equal(s3, 3.0, `${key} section 3 must be 3.0đ`);
    assert.equal(s4, 1.5, `${key} section 4 must be 1.5đ`);
    assert.equal(s1 + s2 + s3 + s4, 10.0, `${key} sum of sections must equal 10.0đ`);
  }
});

test("exam-rubrics-sync: Curriculum topics for weeks 11, 19, 26, 34 are synchronized with weekend exam bank", async () => {
  const curriculumSrc = await readFile("./data/curriculum.js", "utf8");
  const sandbox = { window: {} };
  vm.runInNewContext(curriculumSrc, sandbox);
  const phases = sandbox.window.BACH_CURRICULUM.phases;
  const allMath = phases.flatMap(p => p.math);

  // Week 11 (index 10)
  assert.equal(allMath[10][0], "Cộng trừ phân số khác mẫu");
  assert.ok(WEEKEND_MATH_EXAMS_FULL.w11.title.includes("phân số khác mẫu"));

  // Week 19 (index 18)
  assert.equal(allMath[18][0], "Nhân số có hai chữ số");
  assert.ok(WEEKEND_MATH_EXAMS_FULL.w19.title.includes("Phép nhân với số có hai chữ số"));

  // Week 26 (index 25)
  assert.equal(allMath[25][0], "Phân số và phép chia số tự nhiên");
  assert.ok(WEEKEND_MATH_EXAMS_FULL.w26.title.includes("Phân số & Phép chia số tự nhiên"));

  // Week 34 (index 33)
  assert.equal(allMath[33][0], "Tổng và tỉ số của hai số");
  assert.ok(WEEKEND_MATH_EXAMS_FULL.w34.title.includes("Tìm hai số khi biết Tổng và Tỉ số"));
});
