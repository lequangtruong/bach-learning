import fs from "fs";
import https from "https";
import path from "path";

const API_KEY = process.env.DEEPSEEK_API_KEY?.trim();

if (!API_KEY) {
  console.error("Thiếu biến môi trường DEEPSEEK_API_KEY. Vui lòng thiết lập DEEPSEEK_API_KEY trước khi chạy script thẩm định bài học.");
  process.exit(1);
}

// Nạp curriculum
globalThis.window = globalThis;
const curriculumCode = fs.readFileSync("./data/curriculum.js", "utf8");
const factoryCode = fs.readFileSync("./data/curriculum-factory.js", "utf8");

eval(curriculumCode);
eval(factoryCode);

const curriculum = globalThis.BACH_CURRICULUM;

function callDeepSeekFlash(prompt) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      model: "deepseek-flash",
      messages: [
        {
          role: "system",
          content: `Bạn là Chuyên gia Thẩm định Sư phạm Tiểu học & Toán/Tiếng Việt Lớp 4 (bộ Kết nối tri thức).
Nhiệm vụ: Thẩm định khắt khe từng bài học theo 3 tiêu chí:
1. Khớp mục tiêu: Các bài tập (cơ bản, vận dụng, thử thách) có phục vụ đúng mục tiêu bài học không?
2. Chuẩn mực nội dung: Đúng kiến thức lớp 4, số nguyên dương (Toán), không sáo rỗng, thuật ngữ chuẩn (Tiếng Việt).
3. Tính sư phạm: Có tiến trình rõ ràng từ dễ đến khó không?
* Lưu ý quan trọng: Môn Toán có Thử thách Olympic, nhưng môn Tiếng Việt tuyệt đối KHÔNG có khái niệm Olympic; phần thử thách cuối của môn Văn là "Thử thách diễn đạt & sáng tạo" (mở rộng cảm xúc, quan sát giác quan chân thực).

Định dạng phản hồi BẮT BUỘC:
ĐÁNH GIÁ: [ĐẠT hoặc CẦN SỬA]
ĐIỂM: [X/10]
NHẬN XÉT: [Nêu rõ ưu điểm và lỗi sai cụ thể nếu có trong 2-3 câu ngắn]
ĐỀ XUẤT SỬA: [Nếu CẦN SỬA, đưa ra cách sửa chính xác; nếu ĐẠT thì ghi "Không"]`
        },
        { role: "user", content: prompt }
      ],
      temperature: 0.3
    });

    const req = https.request({
      hostname: "api.deepseek.com",
      path: "/chat/completions",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Length": Buffer.byteLength(payload)
      }
    }, (res) => {
      let d = "";
      res.on("data", c => d += c);
      res.on("end", () => {
        try {
          const json = JSON.parse(d);
          if (json.choices && json.choices[0]) {
            resolve(json.choices[0].message.content.trim());
          } else {
            reject(new Error(`Invalid API response: ${d.slice(0, 200)}`));
          }
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on("error", reject);
    req.write(payload);
    req.end();
  });
}

// Thu thập danh sách bài học cần review
const lessonsToAudit = [];

// 1. Core Bridge Lessons (Tuần 1 đến Tuần 6)
["math", "vietnamese"].forEach(subject => {
  const bridgeWeeks = curriculum.bridgeDailyLessons[subject] || [];
  bridgeWeeks.forEach(w => {
    (w.days || []).forEach(d => {
      lessonsToAudit.push({
        scope: "bridge",
        subject,
        subjectLabel: subject === "math" ? "Toán" : "Tiếng Việt",
        week: w.week,
        day: d.day,
        title: d.title,
        objective: d.objective,
        example: d.example || "",
        basic: d.basic || "",
        applied: d.applied || "",
        reasoning: d.reasoning || "",
        challenge: d.challenge || "",
        hint: d.hint || ""
      });
    });
  });
});

console.log(`Đã thu thập tổng cộng ${lessonsToAudit.length} bài học Cầu nối (Tuần 1–6) để review từng bài.`);

// Chạy review có kiểm soát tải (concurrency = 3)
async function auditAll(limit = lessonsToAudit.length) {
  const results = [];
  const concurrency = 3;
  let index = 0;
  const targetLessons = lessonsToAudit.slice(0, limit);

  async function worker(workerId) {
    while (index < targetLessons.length) {
      const curIdx = index++;
      const lesson = targetLessons[curIdx];
      console.log(`[Worker ${workerId}] (${curIdx + 1}/${targetLessons.length}) Đang gửi bài: ${lesson.subjectLabel} Tuần ${lesson.week} ${lesson.day} - "${lesson.title}"...`);
      
      const challengeLabel = lesson.subject === "math" ? "THỬ THÁCH OLYMPIC" : "THỬ THÁCH DIỄN ĐẠT & SÁNG TẠO";
      const prompt = `MÔN: ${lesson.subjectLabel} Lớp 4 (Tuần ${lesson.week} - ${lesson.day})
TIÊU ĐỀ: ${lesson.title}
MỤC TIÊU: ${lesson.objective}
VÍ DỤ MẪU: ${lesson.example}
BÀI CƠ BẢN: ${lesson.basic}
BÀI VẬN DỤNG: ${lesson.applied}
CÂU HỎI SUY LUẬN: ${lesson.reasoning}
${challengeLabel}: ${lesson.challenge}
GỢI Ý: ${lesson.hint}`;

      let retry = 0;
      let done = false;
      while (!done && retry < 3) {
        try {
          const reviewText = await callDeepSeekFlash(prompt);
          
          // Phân tích kết quả
          const isPass = /ĐÁNH GIÁ:\s*ĐẠT/i.test(reviewText);
          const scoreMatch = reviewText.match(/ĐIỂM:\s*(\d+(?:\.\d+)?)\s*\/\s*10/i);
          const score = scoreMatch ? parseFloat(scoreMatch[1]) : (isPass ? 8 : 6);
          
          results.push({
            ...lesson,
            status: isPass ? "PASS" : "NEED_FIX",
            score,
            rawReview: reviewText
          });
          console.log(` -> [${isPass ? "✓ ĐẠT" : "⚠ CẦN SỬA"}] (${score}/10)`);
          done = true;
        } catch (err) {
          retry++;
          console.error(` -> Lỗi ở bài ${lesson.subjectLabel} W${lesson.week} ${lesson.day} (thử lại lần ${retry}):`, err.message);
          await new Promise(r => setTimeout(r, 2000));
        }
      }
    }
  }

  const workers = Array.from({ length: concurrency }, (_, i) => worker(i + 1));
  await Promise.all(workers);

  // Sắp xếp lại theo thứ tự ban đầu
  results.sort((a, b) => {
    if (a.subject !== b.subject) return a.subject.localeCompare(b.subject);
    if (a.week !== b.week) return a.week - b.week;
    const dayOrder = { "Thứ 2": 1, "Thứ 3": 2, "Thứ 4": 3, "Thứ 5": 4, "Thứ 6": 5, "Thứ 7": 6 };
    return (dayOrder[a.day] || 0) - (dayOrder[b.day] || 0);
  });

  // Lưu JSON
  if (!fs.existsSync("./evidence")) fs.mkdirSync("./evidence", { recursive: true });
  fs.writeFileSync("./evidence/audit_lessons_ds_flash.json", JSON.stringify(results, null, 2), "utf8");

  // Tạo báo cáo Markdown
  let md = `# BÁO CÁO TOÀN DIỆN: DEEPSEEK FLASH THẨM ĐỊNH TỪNG BÀI HỌC (TUẦN 1–6)\n\n`;
  md += `**Thời điểm kiểm tra:** ${new Date().toISOString()}\n`;
  md += `**Mô hình thẩm định:** DeepSeek Flash (api.deepseek.com)\n`;
  md += `**Số lượng bài đã review chi tiết:** ${results.length} bài (${results.filter(r => r.subject === "math").length} bài Toán, ${results.filter(r => r.subject === "vietnamese").length} bài Tiếng Việt)\n\n`;

  const passCount = results.filter(r => r.status === "PASS").length;
  const fixCount = results.filter(r => r.status === "NEED_FIX").length;
  const avgScore = (results.reduce((acc, r) => acc + r.score, 0) / (results.length || 1)).toFixed(1);

  md += `### 📊 TỔNG HỢP KẾT QUẢ:\n`;
  md += `- **ĐẠT (PASS):** ${passCount}/${results.length} bài (${((passCount/results.length)*100).toFixed(1)}%)\n`;
  md += `- **CẦN SỬA (NEED FIX):** ${fixCount}/${results.length} bài\n`;
  md += `- **ĐIỂM TRUNG BÌNH:** ${avgScore}/10\n\n`;
  md += `---\n\n`;

  md += `## I. BẢNG CHI TIẾT TỪNG BÀI HỌC\n\n`;
  md += `| Môn | Tuần | Thứ | Tiêu đề bài học | Đánh giá | Điểm | Nhận xét của DeepSeek Flash | Đề xuất sửa |\n`;
  md += `|:---:|:---:|:---:|:---|:---:|:---:|:---|:---|\n`;

  results.forEach(r => {
    // Trích xuất nhận xét và đề xuất
    let nx = "";
    let dx = "";
    const nxMatch = r.rawReview.match(/NHẬN XÉT:\s*([\s\S]*?)(?=ĐỀ XUẤT SỬA:|$)/i);
    const dxMatch = r.rawReview.match(/ĐỀ XUẤT SỬA:\s*([\s\S]*?)$/i);
    if (nxMatch) nx = nxMatch[1].trim().replace(/\n/g, " ");
    if (dxMatch) dx = dxMatch[1].trim().replace(/\n/g, " ");

    const badge = r.status === "PASS" ? "✅ ĐẠT" : "❌ CẦN SỬA";
    md += `| ${r.subjectLabel} | W${r.week} | ${r.day} | ${r.title} | ${badge} | ${r.score}/10 | ${nx} | ${dx} |\n`;
  });

  fs.writeFileSync("./AI_LESSON_AUDIT_REPORT.md", md, "utf8");
  console.log(`\n🎉 ĐÃ HOÀN TẤT REVIEW CHI TIẾT CẢ ${results.length} BÀI!`);
  console.log(`Báo cáo đầy đủ đã được ghi vào: ./AI_LESSON_AUDIT_REPORT.md và ./evidence/audit_lessons_ds_flash.json`);
}

auditAll();
