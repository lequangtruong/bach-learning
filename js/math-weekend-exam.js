// js/math-weekend-exam.js
// Ngân hàng Đề thi Định kỳ 30 phút Môn Toán Lớp 4 (Bộ sách Kết nối tri thức với cuộc sống)
// Tối ưu hiển thị cho iPad Pro 11 inch & Barem chuẩn phân tích Vision hai chiều cho Gemini

import { WEEKEND_MATH_EXAMS_FULL, getStandardExamWeek } from "./math-weekend-bank-data.js";

export const WEEKEND_MATH_EXAMS = WEEKEND_MATH_EXAMS_FULL;

/**
 * Tạo đề thi chuẩn hóa từ ngân hàng đề Toán 4 KNTT thực tế, không dùng câu hỏi mẫu
 * @param {number} weekNumber
 * @param {object} [lesson]
 * @returns {object}
 */
export function generateStandardExamFromLesson(weekNumber, lesson = {}) {
  return getStandardExamWeek(weekNumber);
}

/**
 * Lấy đề thi tuần tương ứng
 * @param {number} weekNumber
 * @param {object} [fallbackLesson]
 * @returns {object}
 */
export function getWeekendMathExam(weekNumber, fallbackLesson = {}) {
  const key = `w${weekNumber}`;
  if (WEEKEND_MATH_EXAMS[key]) {
    return WEEKEND_MATH_EXAMS[key];
  }
  return getStandardExamWeek(weekNumber);
}

/**
 * Render HTML Tờ đề thi chính thức chuẩn iPad Pro 11 inch
 * @param {object} exam
 * @returns {string}
 */
export function renderExamPaperHtml(exam) {
  if (!exam || !Array.isArray(exam.sections)) return "";

  const escapeHtml = (value = "") => String(value).replace(/[&<>"']/g, c => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[c]);

  return `
  <article class="math-exam-paper" data-exam-week="${exam.week}" aria-label="Tờ đề thi chính thức môn Toán lớp 4">
    <header class="exam-paper-header">
      <div class="exam-badge-row">
        <span class="exam-badge-kntt">📚 BỘ SÁCH: KẾT NỐI TRI THỨC VỚI CUỘC SỐNG</span>
        <span class="exam-badge-time">⏱️ THỜI GIAN: ${escapeHtml(exam.duration || "30 phút")}</span>
        <span class="exam-badge-score">🎯 THANG ĐIỂM: ${escapeHtml(exam.totalScore || 10)} ĐIỂM</span>
      </div>
      <h2 class="exam-paper-title">${escapeHtml(exam.title)}</h2>
      <p class="exam-paper-instruction">
        📝 <b>Hướng dẫn cho Bách:</b> Bách cần có <b>vở nháp</b> trước khi làm bài để nháp các phép tính và thử lại kết quả cẩn thận nhé! Sau đó Bách mở <b>vở ô ly</b> ghi rõ <i>"Bài kiểm tra tuần ${escapeHtml(exam.week)}"</i>, viết chữ số nắn nót, đặt tính thẳng hàng. Làm xong Bách bấm nút <b>Chụp ảnh bài làm trên vở</b> phía dưới để cùng AI chấm điểm nhé!
      </p>
    </header>

    <div class="exam-sections-grid">
      ${exam.sections.map((sec, idx) => `
        <section class="exam-section-card exam-level-${idx + 1}" id="${escapeHtml(sec.id)}">
          <div class="exam-section-head">
            <div class="exam-section-title-wrap">
              <span class="exam-section-tag">${escapeHtml(sec.name)}</span>
              <span class="exam-level-pill">${escapeHtml(sec.level)}</span>
            </div>
            <span class="exam-section-score">${escapeHtml(sec.scoreText)}</span>
          </div>

          <div class="exam-questions-list">
            ${sec.questions.map(qObj => `
              <div class="exam-question-item">
                <div class="exam-q-text">${escapeHtml(qObj.q || "").replace(/\n/g, "<br>")}</div>
                ${Array.isArray(qObj.choices) && qObj.choices.length ? `
                  <div class="exam-choices-grid">
                    ${qObj.choices.map(c => `<span class="exam-choice-chip">${escapeHtml(c)}</span>`).join("")}
                  </div>
                ` : ""}
              </div>
            `).join("")}
          </div>
        </section>
      `).join("")}
    </div>
  </article>
  `;
}

/**
 * Xây dựng prompt chấm điểm nạp đầy đủ Đề bài + Đáp án chuẩn + Barem chi tiết cho Gemini
 * Tích hợp cơ chế phản hồi hai chiều (kể cả khi AI tính sai thì Bách cũng có thể phản biện lại)
 * @param {object} exam
 * @param {string} [studentExplanation]
 * @returns {string}
 */
export function buildExamGradingPrompt(exam, studentExplanation = "") {
  let rubricText = "";
  exam.sections.forEach(sec => {
    rubricText += `\n### ${sec.name} (${sec.level} - ${sec.scoreText}):\n`;
    sec.questions.forEach((qObj, i) => {
      rubricText += `* Câu ${i + 1}: ${qObj.q.replace(/\n/g, " ")}\n  -> ĐÁP ÁN VÀ BAREM CHUẨN: ${qObj.answer}\n`;
    });
  });

  return [
    `Bách vừa hoàn thành BÀI KIỂM TRA ĐỊNH KỲ 30 PHÚT - MÔN TOÁN LỚP 4 (${exam.title}).`,
    `Bộ sách: ${exam.textbook || "Kết nối tri thức với cuộc sống"}. Thang điểm: 10 điểm.`,
    `Bách đã có vở nháp để tính toán cẩn thận trước khi viết bài giải vào vở ô ly. Ảnh chụp trang vở ô ly bài làm của Bách được đính kèm.`,
    studentExplanation ? `Lời giải thích / ghi âm của Bách: "${studentExplanation}"` : "",
    "",
    "--- DƯỚI ĐÂY LÀ ĐỀ BÀI GỐC VÀ ĐÁP ÁN - BAREM CHUẨN ĐỂ ĐỐI CHIẾU ---",
    rubricText,
    "----------------------------------------------------------------",
    "",
    "QUY TẮC SƯ PHẠM VÀ HƯỚNG DẪN ĐỌC ẢNH VỞ Ô LY:",
    "1. ĐỌC NÉT CHỮ VIẾT TAY TRÊN VỞ Ô LY: Đọc từng bài Bách đã viết ra vở. Xem Bách đặt tính có thẳng hàng đơn vị dưới hàng đơn vị, chục dưới chục không; có cộng/trừ số nhớ chính xác không. So sánh kết quả của Bách với ĐÁP ÁN VÀ BAREM CHUẨN ở trên.",
    "2. PHÂN BIỆT RÕ 4 TRƯỜNG HỢP (RẤT QUAN TRỌNG):",
    "   - Trường hợp A - ĐÚNG HOẶC CÁCH GIẢI TƯƠNG ĐƯƠNG: Chấp nhận mọi cách giải gộp, cách giải dùng sơ đồ đoạn thẳng hoặc hoán đổi thứ tự phép tính mà đúng bản chất toán học. Không trừ điểm nếu thiếu dấu ngoặc đơn quanh tên đơn vị khi lời văn đã rõ ràng.",
    "   - Trường hợp B - SAI TÍNH TOÁN: Bách hiểu đúng cách làm nhưng nhầm nhớ số hoặc phép tính. Hãy chỉ rõ vị trí hàng số bị nhầm một cách ân cần để Bách tự tính lại (Ví dụ mẫu: 'Bách đặt tính thẳng hàng rồi. Mình thấy ở hàng đơn vị: 8 + 4 = 12, viết 2 và nhớ 1. Bách kiểm tra xem hàng chục đã cộng thêm 1 nhớ chưa nhé!').",
    "   - Trường hợp C - SAI PHƯƠNG PHÁP: Nhầm dạng toán hoặc chọn sai phép tính. Hãy gợi mở hướng tư duy mà không làm hộ.",
    "   - Trường hợp D - ẢNH MỜ / NÉT MỰC KHÔNG ĐỌC RÕ: TUYỆT ĐỐI KHÔNG TỰ Ý KẾT LUẬN BÁCH SAI HOẶC TRỪ ĐIỂM! Hãy hỏi lại nhẹ nhàng: 'Ở bài 2, nét mực chỗ hàng chục hơi mờ/lóa nên mình chưa đọc rõ là số mấy. Bách bấm nút micro nói cho mình nghe hoặc chụp lại gần hơn nhé!'.",
    "3. SẴN SÀNG LẮNG NGHE PHẢN BIỆN TỪ BÁCH (TƯƠNG TÁC HAI CHIỀU - NGAY CẢ KHI AI TÍNH SAI HOẶC ĐỌC NHẦM NÉT CHỮ):",
    "   - Bách có khả năng bắt lỗi tư duy rất tốt (đạt 62 sao Spot The Bug).",
    "   - AI CÓ THỂ TÍNH SAI HOẶC ĐỌC NHẦM NÉT CHỮ: AI hoàn toàn có thể tính nhầm phép tính hoặc nhìn nhầm chữ số của Bách. Nếu Bách phản hồi rằng AI đã tính sai hoặc đọc nhầm nét chữ (ví dụ: nét số 7 nhìn thành 1, tính nhầm hàng chục, hoặc Bách dùng cách giải gộp đúng), AI phải trân trọng tinh thần phát hiện lỗi của Bách, đối chiếu lại ảnh gốc và phép tính. Nếu AI thực sự sai: hãy vui vẻ, chân thành nhận lỗi, nhiệt liệt khen ngợi Bách ('Bách bắt lỗi mình rất chuẩn xác! Tinh thần phát hiện lỗi của Bách thật tuyệt vời!'), sau đó đính chính lại phép tính và cập nhật lại điểm số chính xác!",
    "4. TỔNG KẾT ĐIỂM SỐ RÕ RÀNG:",
    "   - Điểm Phần I (Trắc nghiệm): .../3.0 điểm",
    "   - Điểm Phần II (Tính toán & Đặt tính): .../2.5 điểm",
    "   - Điểm Phần III (Bài toán có lời văn): .../3.0 điểm",
    "   - Điểm Phần IV (Thử thách điểm 10): .../1.5 điểm",
    "   => TỔNG ĐIỂM BÀI THI: .../10 ĐIỂM",
    "5. PHONG CÁCH GIAO TIẾP VỚI BÁCH:",
    "   - Tự xưng là 'mình', gọi bạn học là 'Bách' (tuyệt đối KHÔNG xưng thầy/cô, KHÔNG gọi Bách là 'con').",
    "   - Khen ngợi nét chữ cẩn thận, thẳng hàng và những câu Bách làm xuất sắc.",
    "   - Luôn mời Bách kiểm tra lại phép tính của AI: 'Bách hãy kiểm tra xem mình có tính sai chỗ nào hoặc đọc nhầm nét chữ nào của Bách không nhé! Nếu thấy mình tính sai, Bách bấm nút [🎤 Phản hồi / Bắt lỗi AI] để bắt bẻ mình ngay nha!'.",
    "   - Nhắc Bách 3 thao tác tiếp theo: [🔊 Nghe góp ý] để nghe AI đọc phản hồi; [🎤 Phản hồi / Bắt lỗi AI] để giải thích hoặc bắt bẻ khi AI tính sai; [📷 Nộp lại bài đã sửa] sau khi sửa lại bài vào vở để cùng ghi nhận tiến bộ!"
  ].filter(Boolean).join("\n");
}
