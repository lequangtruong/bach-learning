// scripts/test-all-lessons.mjs
import vm from "node:vm";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const curriculumPath = path.resolve(__dirname, "../data/curriculum.js");
const curriculumSource = await readFile(curriculumPath, "utf8");

const sandbox = { window: {} };
vm.runInNewContext(curriculumSource, sandbox);
const curriculum = sandbox.window.BACH_CURRICULUM;

console.log("==================================================");
console.log("TESTING ALL 432 INDIVIDUAL LESSONS (36 WEEKS x 6 DAYS x 2 SUBJECTS)");
console.log("==================================================");

let totalLessons = 0;
let validLessons = 0;
const issues = [];
const lessonStats = {
  math: { count: 0, byPhase: {} },
  vietnamese: { count: 0, byPhase: {} }
};

const phases = curriculum.phases;

for (const phase of phases) {
  const phaseId = phase.id;
  lessonStats.math.byPhase[phaseId] = 0;
  lessonStats.vietnamese.byPhase[phaseId] = 0;

  for (const subject of ["math", "vietnamese"]) {
    const weeks = phase[subject];
    weeks.forEach((weekItem, wIdx) => {
      const weekNumber = Number(phase.weeks.split("–")[0]) + wIdx;
      const dailyPlan = weekItem.dailyPlan || [];

      if (!dailyPlan || dailyPlan.length < 6) {
        issues.push(`[${subject.toUpperCase()} Tuần ${weekNumber}] dailyPlan chỉ có ${dailyPlan.length} ngày (cần 6 ngày)`);
      }

      dailyPlan.forEach((day, dIdx) => {
        totalLessons++;
        lessonStats[subject].count++;
        lessonStats[subject].byPhase[phaseId]++;

        const dayName = day.day || `Thứ ${dIdx + 2}`;
        const loc = `[${subject.toUpperCase()} W${weekNumber} - ${dayName}]`;

        // Check required fields
        const required = ["objective", "example", "basic", "applied", "reasoning"];
        for (const req of required) {
          if (!day[req] || typeof day[req] !== "string" || day[req].trim().length === 0) {
            issues.push(`${loc} Thiếu hoặc rỗng trường '${req}'`);
          }
        }

        // Check length and quality
        if (day.objective && day.objective.length < 10) {
          issues.push(`${loc} Objective quá ngắn (<10 ký tự): "${day.objective}"`);
        }
        if (day.basic && day.basic.length < 15) {
          issues.push(`${loc} Bài tập basic quá ngắn (<15 ký tự): "${day.basic}"`);
        }
        if (day.applied && day.applied.length < 20) {
          issues.push(`${loc} Bài tập applied quá ngắn (<20 ký tự): "${day.applied}"`);
        }
        if (day.reasoning && day.reasoning.length < 15) {
          issues.push(`${loc} Câu hỏi reasoning quá ngắn (<15 ký tự): "${day.reasoning}"`);
        }

        // For Math applied, check for numbers or quantities
        if (subject === "math" && day.applied) {
          const hasNumbers = /\d+/.test(day.applied);
          const hasQuantities = /\b(?:một|hai|ba|bốn|năm|sáu|bảy|tám|chín|mười)\s+(?:bạn|người|hộp|quả|chiếc|cái|thùng|bao|con|đội|nhóm|lớp|viên|quyển|trang)\b/i.test(day.applied);
          if (!hasNumbers && !hasQuantities) {
            issues.push(`${loc} Bài toán applied thiếu số liệu cụ thể: "${day.applied}"`);
          }
        }

        // Check concrete enrichment
        if (!day.concrete) {
          issues.push(`${loc} Thiếu tầng dữ liệu concrete chi tiết`);
        }

        if (issues.length === 0) {
          validLessons++;
        }
      });
    });
  }
}

console.log(`Total Lessons Tested: ${totalLessons}`);
console.log(`Math: ${lessonStats.math.count}, Vietnamese: ${lessonStats.vietnamese.count}`);
console.log(`Phase breakdown:`);
for (const p of phases) {
  console.log(`  - Phase ${p.id} (${p.title}): Math=${lessonStats.math.byPhase[p.id]}, Vietnamese=${lessonStats.vietnamese.byPhase[p.id]}`);
}
console.log(`Issues found: ${issues.length}`);
if (issues.length > 0) {
  console.log("Top 10 issues:");
  issues.slice(0, 10).forEach(iss => console.log("  *", iss));
} else {
  console.log("ALL 432 LESSONS PASSED INDIVIDUAL VALIDATION CHECKS (100% GREEN)!");
}
