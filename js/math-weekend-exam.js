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
      <div class="exam-paper-prerequisites" style="margin-top:8px; padding:8px 12px; background:#f0fdf4; border-left:4px solid #16a34a; border-radius:4px; font-size:0.88rem; color:#166534">
        <span>🎯 <b>Trọng tâm kiểm tra:</b> Bám sát chương trình tuần ${escapeHtml(exam.week)} SGK Toán 4 Kết nối tri thức.</span>
        <span style="display:block; margin-top:2px">💡 <b>Kiến thức cần nắm trước:</b> Tính toán cẩn thận ra nháp, đặt tính thẳng hàng các chữ số cùng hàng, đọc kỹ dữ kiện và câu hỏi trước khi viết bài giải vào vở ô ly.</span>
      </div>
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
 * Xuất Barem chấm điểm dạng Markdown đầy đủ của đề thi
 * @param {object} exam
 * @returns {string}
 */
export function buildExamRubricMarkdown(exam) {
  if (!exam || !Array.isArray(exam.sections)) return "";
  let rubricText = "";
  exam.sections.forEach(sec => {
    rubricText += `\n### ${sec.name} (${sec.level} - ${sec.scoreText}):\n`;
    (sec.questions || []).forEach((qObj, i) => {
      rubricText += `* Câu ${i + 1}: ${(qObj.q || "").replace(/\n/g, " ")}\n  -> ĐÁP ÁN VÀ BAREM CHUẨN: ${qObj.answer || ""}\n`;
    });
  });
  return rubricText;
}

/**
 * Xây dựng prompt chấm điểm nạp đầy đủ Đề bài + Đáp án chuẩn + Barem chi tiết cho Gemini
 * Tích hợp cơ chế phản hồi hai chiều (kể cả khi AI tính sai thì Bách cũng có thể phản biện lại)
 * @param {object} exam
 * @param {string} [studentExplanation]
 * @returns {string}
 */
export function buildExamGradingPrompt(exam, studentExplanation = "") {
  const rubricText = buildExamRubricMarkdown(exam);

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
    "2. CẤU TRÚC PHẢN HỒI CHO TỪNG BÀI LÀM (BẮT BUỘC RÕ RÀNG THEO 5 Ý):",
    "   Với mỗi bài/câu Bách làm, trình bày đủ 5 ý:",
    "   - Tên bài/câu: Ví dụ 'Phần II - Bài 1a'",
    "   - AI đọc được gì: Trích xuất đúng số/phép tính/lời giải AI nhìn thấy trên ảnh vở của Bách",
    "   - Nhận xét bước làm: Đúng hoàn toàn / hoặc chỉ rõ lỗi ở bước nào (cộng nhớ nhầm, đặt tính lệch cột...)",
    "   - Gợi ý sửa: Lời gợi ý nhẹ nhàng để Bách tự tìm ra cách sửa (nếu có lỗi)",
    "   - Điểm số của câu đó: Ghi rõ số điểm đạt được / số điểm tối đa (ví dụ: '0.75/0.75 điểm')",
    "   * LƯU Ý ẢNH MỜ / NÉT MỰC KHÔNG ĐỌC RÕ: TUYỆT ĐỐI KHÔNG TỰ Ý KẾT LUẬN BÁCH SAI HOẶC TRỪ ĐIỂM! Hãy ghi rõ 'Chưa đọc rõ nét mực' và đề nghị Bách bấm nút mic nói cho mình nghe hoặc chụp lại gần hơn nhé!",
    "3. PHÂN BIỆT RÕ CÁC TRƯỜNG HỢP SƯ PHẠM:",
    "   - Đúng hoặc cách giải tương đương: Chấp nhận mọi cách giải gộp, cách giải dùng sơ đồ đoạn thẳng hoặc hoán đổi thứ tự phép tính mà đúng bản chất toán học. Không trừ điểm nếu thiếu dấu ngoặc đơn quanh tên đơn vị khi lời văn đã rõ ràng.",
    "   - Sai tính toán: Chỉ rõ vị trí hàng số bị nhầm một cách ân cần để Bách tự tính lại.",
    "   - Sai phương pháp: Nhầm dạng toán. Gợi mở hướng tư duy mà không làm hộ.",
    "4. SẴN SÀNG LẮNG NGHE PHẢN BIỆN TỪ BÁCH (TƯƠNG TÁC HAI CHIỀU - NGAY CẢ KHI AI TÍNH SAI HOẶC ĐỌC NHẦM NÉT CHỮ):",
    "   - Bách có khả năng bắt lỗi tư duy rất tốt (đạt 62 sao Spot The Bug).",
    "   - AI CÓ THỂ TÍNH SAI HOẶC ĐỌC NHẦM NÉT CHỮ: AI hoàn toàn có thể tính nhầm phép tính hoặc nhìn nhầm chữ số của Bách. Nếu Bách phản hồi rằng AI đã tính sai hoặc đọc nhầm nét chữ (ví dụ: nét số 7 nhìn thành 1, tính nhầm hàng chục, hoặc Bách dùng cách giải gộp đúng), AI phải trân trọng tinh thần phát hiện lỗi của Bách, đối chiếu lại ảnh gốc và phép tính. Nếu AI thực sự sai: hãy vui vẻ, chân thành nhận lỗi, nhiệt liệt khen ngợi Bách ('Bách bắt lỗi mình rất chuẩn xác! Tinh thần phát hiện lỗi của Bách thật tuyệt vời!'), sau đó đính chính lại phép tính và cập nhật lại điểm số chính xác!",
    "5. BẢNG TỔNG HỢP ĐIỂM SỐ & TIẾN TRÌNH BÀI THI:",
    "   Trình bày bảng Markdown tổng kết điểm từng phần:",
    "   | Phần thi | Điểm đạt / Tối đa | Nhận xét nhanh |",
    "   | Phần I: Trắc nghiệm | ... / 3.0đ | ... |",
    "   | Phần II: Tính toán & Đặt tính | ... / 2.5đ | ... |",
    "   | Phần III: Bài toán có lời văn | ... / 3.0đ | ... |",
    "   | Phần IV: Thử thách điểm 10 | ... / 1.5đ | ... |",
    "   => TỔNG ĐIỂM BÀI THI: ... / 10 ĐIỂM",
    "6. PHONG CÁCH GIAO TIẾP VỚI BÁCH:",
    "   - Tự xưng là 'mình', gọi bạn học là 'Bách' (tuyệt đối KHÔNG xưng thầy/cô, KHÔNG gọi Bách là 'con').",
    "   - Khen ngợi nét chữ cẩn thận, thẳng hàng và những câu Bách làm xuất sắc.",
    "   - Luôn mời Bách kiểm tra lại phép tính của AI: 'Bách hãy kiểm tra xem mình có tính sai chỗ nào hoặc đọc nhầm nét chữ nào của Bách không nhé! Nếu thấy mình tính sai, Bách bấm nút [🎤 Phản hồi / Bắt lỗi AI] để bắt bẻ mình ngay nha!'.",
    "   - Nhắc Bách 3 thao tác tiếp theo: [🔊 Nghe góp ý] để nghe AI đọc phản hồi; [🎤 Phản hồi / Bắt lỗi AI] để giải thích hoặc bắt bẻ khi AI tính sai; [📷 Nộp lại bài đã sửa] sau khi sửa lại bài vào vở để cùng ghi nhận tiến bộ!"
  ].filter(Boolean).join("\n");
}

/**
 * Xây dựng prompt khi Bách phản hồi / bắt lỗi AI
 * Nạp kèm đầy đủ Đề bài gốc + Barem chuẩn + Lời chấm lượt trước để AI không mất ngữ cảnh
 * @param {object} examSession
 * @param {string} feedbackText
 * @returns {string}
 */
export function buildExamDisputePrompt(examSession, feedbackText = "") {
  const exam = examSession?.examObj;
  const rubricText = exam ? buildExamRubricMarkdown(exam) : "";
  const lastAiAnswer = examSession?.lastAiAnswer || "";

  return [
    `BÁCH PHẢN HỒI / BẮT LỖI AI (BÀI KIỂM TRA ĐỊNH KỲ 30 PHÚT - ${exam?.title || "MÔN TOÁN LỚP 4"}):`,
    `Nội dung phản hồi / bắt lỗi của Bách: "${feedbackText}"`,
    "",
    "--- DƯỚI ĐÂY LÀ ĐỀ BÀI GỐC VÀ ĐÁP ÁN - BAREM CHUẨN ĐỂ ĐỐI CHIẾU ---",
    rubricText,
    "----------------------------------------------------------------",
    lastAiAnswer ? `\n--- KẾT QUẢ CHẤM CỦA AI TRONG LƯỢT TRƯỚC ---\n${lastAiAnswer}\n--------------------------------------------` : "",
    "",
    "NHIỆM VỤ CỦA TRỢ GIẢNG AI:",
    "1. ĐỐI CHIẾU VÀ TỰ KIỂM TRA LẠI (NGAY CẢ KHI AI TÍNH SAI HOẶC ĐỌC NHẦM NÉT CHỮ):",
    "   - Đọc kỹ phản hồi của Bách và đối chiếu lại với đề bài gốc, barem và ảnh bài làm gốc của Bách.",
    "   - NẾU AI TÍNH SAI HOẶC ĐỌC NHẦM NÉT CHỮ: Hãy thành thật nhận lỗi vui vẻ, nhiệt liệt khen ngợi Bách ('Bách bắt lỗi mình rất chuẩn xác! Tinh thần phát hiện lỗi của Bách thật tuyệt vời!'), sau đó giải thích lại phép tính đúng và cập nhật lại điểm số chính xác cho Bách.",
    "   - NẾU AI ĐÃ TÍNH ĐÚNG: Hãy ân cần, giải thích từng bước nhẹ nhàng để Bách hiểu vì sao kết quả lại như vậy.",
    "2. PHONG CÁCH: Tự xưng là 'mình', gọi bạn học là 'Bách' (không xưng thầy/cô, không gọi 'con')."
  ].filter(Boolean).join("\n");
}

/**
 * Xây dựng prompt khi Bách nộp lại bài toán đã sửa vào vở ô ly
 * Nạp kèm đầy đủ Đề bài gốc + Barem chuẩn + Lời chấm lượt trước để AI chấm lại chính xác
 * @param {object} examSession
 * @param {string} explanation
 * @returns {string}
 */
export function buildExamResubmitPrompt(examSession, explanation = "") {
  const exam = examSession?.examObj;
  const rubricText = exam ? buildExamRubricMarkdown(exam) : "";
  const lastAiAnswer = examSession?.lastAiAnswer || "";

  return [
    `BÁCH NỘP LẠI BÀI TOÁN ĐÃ SỬA VÀO VỞ Ô LY (${exam?.title || "BÀI KIỂM TRA ĐỊNH KỲ TOÁN 4"}):`,
    explanation ? `Lời giải thích của Bách: "${explanation}"` : "",
    "",
    "--- DƯỚI ĐÂY LÀ ĐỀ BÀI GỐC VÀ ĐÁP ÁN - BAREM CHUẨN ĐỂ ĐỐI CHIẾU ---",
    rubricText,
    "----------------------------------------------------------------",
    lastAiAnswer ? `\n--- KẾT QUẢ CHẤM TRƯỚC ĐÓ CỦA AI ---\n${lastAiAnswer}\n-----------------------------------` : "",
    "",
    "NHIỆM VỤ CỦA TRỢ GIẢNG AI:",
    "1. ĐỌC LẠI BÀI LÀM MỚI TRÊN ẢNH VỞ Ô LY VỪA CHỤP (ĐƯỢC ĐÍNH KÈM):",
    "   - Đọc từng bài làm mới của Bách, đối chiếu với bài trước và BAREM CHUẨN ở trên.",
    "   - Ghi nhận rõ ràng từng điểm tiến bộ (đặt tính thẳng hàng hơn, cộng/trừ đúng số nhớ, hoặc tự sửa được bài khó).",
    "   - Chúc mừng sự kiên trì của Bách và cập nhật lại điểm số mới chính xác.",
    "2. CẤU TRÚC NHẬN XÉT TỪNG CÂU:",
    "   - [Câu X / Bài X]: AI đọc được gì trên ảnh mới -> Đánh giá bước làm -> Điểm số mới.",
    "   - Nếu ảnh mờ hoặc không đọc rõ: ghi rõ 'chưa đọc rõ nét chữ', yêu cầu Bách chụp lại góc sáng/rõ hơn, không tự đoán để trừ điểm.",
    "3. TỔNG KẾT ĐIỂM SỐ MỚI ĐẦY ĐỦ (theo thang 10 điểm).",
    "4. PHONG CÁCH: Xưng 'mình', gọi 'Bách' (không xưng thầy/cô, không gọi 'con')."
  ].filter(Boolean).join("\n");
}

