// scripts/generate-review-digest.mjs
import vm from "node:vm";
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const factoryPath = path.resolve(__dirname, "../data/curriculum-factory.js");
const factorySource = await readFile(factoryPath, "utf8");
const curriculumPath = path.resolve(__dirname, "../data/curriculum.js");
const curriculumSource = await readFile(curriculumPath, "utf8");

const sandbox = { window: {} };
vm.runInNewContext(factorySource, sandbox);
vm.runInNewContext(curriculumSource, sandbox);
const c = sandbox.window.BACH_CURRICULUM;

let digest = `# BẢN TỔNG HỢP NỘI DUNG 432 BÀI HỌC BÁCH LEARNING LAB (LỚP 4 KẾT NỐI TRI THỨC)
## THÔNG TIN TỔNG QUAN
- Đối tượng: Bách (học sinh 9 tuổi, học lực khá-giỏi, cần rèn tính nhẩm và lập luận logic, tư duy viết mạch lạc)
- Bộ sách chuẩn: Kết nối tri thức với cuộc sống (Lớp 4)
- Quy mô: 36 tuần x 2 môn (Toán & Tiếng Việt) x 6 ngày = 432 bài học hằng ngày + 72 khung chương trình tuần
- Nhịp học: 25 phút/ngày thường (T2-T6), 50 phút/Thứ Bảy (Mini-test + chữa bài)

---
## CÁC PHA ĐÀO TẠO (6 PHASES):
`;

for (const p of c.phases) {
  digest += `\n### Giai đoạn ${p.id}: ${p.title} (${p.weeks})\n- Trọng tâm: ${p.focus}\n`;
  digest += `- Toán (${p.math.length} tuần):\n`;
  p.math.forEach((item, i) => {
    digest += `  ${i + 1}. **${item[0]}**: ${item[1]}\n`;
  });
  digest += `- Tiếng Việt (${p.vietnamese.length} tuần):\n`;
  p.vietnamese.forEach((item, i) => {
    digest += `  ${i + 1}. **${item[0]}**: ${item[1]}\n`;
  });
}

digest += `\n---\n## MẪU BÀI HỌC ĐẠI DIỆN TỪNG GIAI ĐOẠN:\n`;

const sampleWeeks = [
  { p: "P1", w: 1, sub: "math", d: 1, label: "Toán W1 T3 (Số lớn & Bù tròn)" },
  { p: "P1", w: 2, sub: "vietnamese", d: 0, label: "Tiếng Việt W2 T2 (Đoạn văn 5-7 câu)" },
  { p: "P2", w: 9, sub: "math", d: 2, label: "Toán W9 T4 (Phân số & dải giấy)" },
  { p: "P2", w: 8, sub: "vietnamese", d: 1, label: "Tiếng Việt W8 T3 (Đoạn văn tả người)" },
  { p: "P3", w: 15, sub: "math", d: 3, label: "Toán W15 T5 (Diện tích hình chữ nhật)" },
  { p: "P3", w: 13, sub: "vietnamese", d: 0, label: "Tiếng Việt W13 T2 (Kể chuyện điểm nút)" },
  { p: "P4", w: 20, sub: "math", d: 2, label: "Toán W20 T4 (Tổng - Tỉ với Bar Model)" },
  { p: "P5", w: 26, sub: "math", d: 4, label: "Toán W26 T6 (Suy luận từ hình & Olympic)" },
  { p: "P6", w: 33, sub: "math", d: 5, label: "Toán W33 T7 (Mini-test Đề mô phỏng Singapore)" },
  { p: "P6", w: 34, sub: "vietnamese", d: 2, label: "Tiếng Việt W34 T4 (Đọc-viết liên môn)" }
];

for (const s of sampleWeeks) {
  const phase = c.phases.find(x => x.id === s.p);
  const weekItem = phase[s.sub].find((item, idx) => {
    const firstWeek = Number(phase.weeks.split("–")[0]);
    return (firstWeek + idx) === s.w;
  });
  if (weekItem && weekItem.dailyPlan && weekItem.dailyPlan[s.d]) {
    const day = weekItem.dailyPlan[s.d];
    digest += `\n### [${s.label}] ${day.day} - ${day.title || weekItem[0]}\n`;
    digest += `- **Mục tiêu**: ${day.objective}\n`;
    digest += `- **Ví dụ mẫu**: ${day.example}\n`;
    digest += `- **Bài cơ bản**: ${day.basic}\n`;
    digest += `- **Bài vận dụng**: ${day.applied}\n`;
    digest += `- **Câu hỏi tư duy (Reasoning)**: ${day.reasoning}\n`;
    if (day.hint) digest += `- **Gợi ý**: ${day.hint}\n`;
  }
}

await writeFile(path.resolve(__dirname, "../scratch/curriculum-digest.md"), digest, "utf8");
console.log("Generated scratch/curriculum-digest.md, length:", digest.length);
