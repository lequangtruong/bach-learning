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
 * @param {object} [studentAnswers]
 * @returns {string}
 */
export function renderExamPaperHtml(exam, studentAnswers = {}) {
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
        📝 <b>Hướng dẫn cho Bách:</b> Bách cần có <b>vở nháp</b> trước khi làm bài để nháp các phép tính và thử lại kết quả cẩn thận nhé! Với các câu <b>Trắc nghiệm</b>, Bách có thể bấm chọn trực tiếp đáp án A, B, C, D trên màn hình. Với các bài <b>Tự luận</b>, Bách mở <b>vở ô ly</b> ghi rõ <i>"Bài kiểm tra tuần ${escapeHtml(exam.week)}"</i>, viết chữ số nắn nót, đặt tính thẳng hàng. Làm xong Bách bấm nút <b>Chụp ảnh bài làm trên vở</b> phía dưới để cùng AI chấm điểm nhé!
      </p>
      <div class="exam-paper-prerequisites" style="margin-top:8px; padding:8px 12px; background:#f0fdf4; border-left:4px solid #16a34a; border-radius:4px; font-size:0.88rem; color:#166534">
        <span>🎯 <b>Trọng tâm kiểm tra:</b> Bám sát chương trình tuần ${escapeHtml(exam.week)} SGK Toán 4 Kết nối tri thức.</span>
        <span style="display:block; margin-top:2px">💡 <b>Kiến thức cần nắm trước:</b> Tính toán cẩn thận ra nháp, đặt tính thẳng hàng các chữ số cùng hàng, đọc kỹ dữ kiện và câu hỏi trước khi viết bài giải vào vở ô ly.</span>
      </div>
    </header>

    <div class="exam-sections-grid">
      ${exam.sections.map((sec, sIdx) => `
        <section class="exam-section-card exam-level-${sIdx + 1}" id="${escapeHtml(sec.id)}">
          <div class="exam-section-head">
            <div class="exam-section-title-wrap">
              <span class="exam-section-tag">${escapeHtml(sec.name)}</span>
              <span class="exam-level-pill">${escapeHtml(sec.level)}</span>
            </div>
            <span class="exam-section-score">${escapeHtml(sec.scoreText)}</span>
          </div>

          <div class="exam-questions-list">
            ${sec.questions.map((qObj, qIdx) => {
              const qKey = `s${sIdx}_q${qIdx}`;
              const selectedAnswer = studentAnswers[qKey] || studentAnswers[`q_${sIdx}_${qIdx}`] || "";
              return `
              <div class="exam-question-item" data-q-key="${qKey}">
                <div class="exam-q-text">${escapeHtml(qObj.q || "").replace(/\n/g, "<br>")}</div>
                ${Array.isArray(qObj.choices) && qObj.choices.length ? `
                  <div class="exam-choices-grid" role="group" aria-label="Các lựa chọn câu trả lời">
                    ${qObj.choices.map((c, cIdx) => {
                      const letterMatch = c.match(/^([A-D])\./i);
                      const letter = letterMatch ? letterMatch[1].toUpperCase() : String.fromCharCode(65 + cIdx);
                      const isSelected = selectedAnswer === letter || selectedAnswer === c;
                      const choiceLabel = c.replace(/^[A-D]\.\s*/i, "");
                      return `
                        <button type="button"
                          class="exam-choice-btn exam-choice-chip ${isSelected ? "is-selected" : ""}"
                          data-exam-week="${exam.week}"
                          data-sec-idx="${sIdx}"
                          data-q-idx="${qIdx}"
                          data-choice-letter="${letter}"
                          data-choice-text="${escapeHtml(c)}"
                          aria-pressed="${isSelected ? "true" : "false"}"
                          title="Chọn đáp án ${letter}">
                          <span class="exam-choice-badge">${letter}</span>
                          <span class="exam-choice-text">${escapeHtml(choiceLabel)}</span>
                          ${isSelected ? `<span class="exam-choice-check" aria-hidden="true">✓</span>` : ""}
                        </button>
                      `;
                    }).join("")}
                  </div>
                ` : ""}
              </div>
            `;
            }).join("")}
          </div>
        </section>
      `).join("")}
    </div>
  </article>
  `;
}

/**
 * Render thẻ Tóm tắt & Tiến trình làm bài kiểm tra cho Bách và phụ huynh
 * @param {object} exam
 * @param {object} [studentAnswers]
 * @param {object} [appState]
 * @returns {string}
 */
export function renderExamSummaryHtml(exam, studentAnswers = {}, appState = {}) {
  if (!exam || !Array.isArray(exam.sections)) return "";

  const escapeHtml = (value = "") => String(value).replace(/[&<>"']/g, c => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[c]);

  let totalChoiceQuestions = 0;
  let answeredChoiceCount = 0;
  const choiceDetails = [];

  exam.sections.forEach((sec, sIdx) => {
    (sec.questions || []).forEach((qObj, qIdx) => {
      if (Array.isArray(qObj.choices) && qObj.choices.length > 0) {
        totalChoiceQuestions++;
        const qKey = `s${sIdx}_q${qIdx}`;
        const chosen = studentAnswers[qKey] || studentAnswers[`q_${sIdx}_${qIdx}`] || "";
        if (chosen) {
          answeredChoiceCount++;
        }
        choiceDetails.push({
          num: qIdx + 1,
          secName: sec.name,
          chosen,
          text: qObj.q ? qObj.q.split("\n")[0] : ""
        });
      }
    });
  });

  const hasPhoto = Boolean(appState.mathExamPhoto || appState.writingImage || appState.examSession?.originalPhoto);
  const photoName = appState.mathExamPhoto?.name || appState.writingImage?.name || appState.examSession?.originalPhoto?.name || "Ảnh vở ô ly";
  const lastAiAnswer = appState.examSession?.lastAiAnswer || 
                       appState.db?.examGrades?.[exam.week]?.lastAiAnswer ||
                       (appState.tutor?.lastAnswer && appState.examSession ? appState.tutor.lastAnswer : null);

  return `
  <section class="exam-summary-card" id="examSummarySection" aria-label="Tổng kết bài kiểm tra Toán 30 phút">
    <div class="exam-summary-header">
      <div style="display:flex; align-items:center; gap:8px">
        <span style="font-size:1.3rem">📊</span>
        <h3 style="margin:0; font-size:1.1rem; font-weight:800; color:#0f172a">
          Tổng kết tiến trình bài kiểm tra · Tuần ${escapeHtml(exam.week)}
        </h3>
      </div>
      <div class="exam-summary-badges">
        <span class="exam-summary-badge ${answeredChoiceCount === totalChoiceQuestions && totalChoiceQuestions > 0 ? "is-complete" : ""}">
          ${totalChoiceQuestions > 0 ? `🔘 Trắc nghiệm: Đã chọn ${answeredChoiceCount}/${totalChoiceQuestions} câu` : "📝 Tự luận"}
        </span>
        <span class="exam-summary-badge ${hasPhoto ? "is-complete" : ""}">
          ${hasPhoto ? `📷 Vở ô ly: ${escapeHtml(photoName)}` : "📷 Vở ô ly: Chưa chụp"}
        </span>
        ${lastAiAnswer ? `<span class="exam-summary-badge is-graded">✓ AI đã chấm điểm</span>` : ""}
      </div>
    </div>

    ${totalChoiceQuestions > 0 ? `
      <div class="exam-summary-choices-list">
        <span class="eyebrow" style="color:#475569; display:block; margin-bottom:6px">CÁC CÂU TRẮC NGHIỆM ĐÃ CHỌN TRÊN MÀN HÌNH:</span>
        <div style="display:flex; flex-wrap:wrap; gap:8px">
          ${choiceDetails.map(c => `
            <div class="exam-summary-choice-item ${c.chosen ? "has-choice" : "missing-choice"}">
              <span class="choice-num">Câu ${c.num}:</span>
              ${c.chosen ? `<strong class="choice-val">${escapeHtml(c.chosen)}</strong>` : `<span class="choice-empty">(chưa chọn)</span>`}
            </div>
          `).join("")}
        </div>
      </div>
    ` : ""}

    ${lastAiAnswer ? `
      <div class="exam-ai-summary-result" style="margin-top:14px; padding:12px; background:#f0fdf4; border:1.5px solid #86efac; border-radius:8px">
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:6px">
          <strong style="color:#166534">🏆 Kết quả chấm từ Trợ giảng AI:</strong>
          <a href="#guide" style="font-size:0.85rem; font-weight:700; color:#15803d; text-decoration:underline">Xem chi tiết &amp; phản hồi tại Guide →</a>
        </div>
        <div style="font-size:0.92rem; color:#1e293b; max-height:160px; overflow-y:auto; line-height:1.5; white-space:pre-wrap">${escapeHtml(lastAiAnswer.slice(0, 500))}${lastAiAnswer.length > 500 ? "..." : ""}</div>
      </div>
    ` : ""}
  </section>
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
 * @param {object} [studentAnswers]
 * @returns {string}
 */
export function buildExamGradingPrompt(exam, studentExplanation = "", studentAnswers = {}) {
  const rubricText = buildExamRubricMarkdown(exam);

  let answersSummary = "";
  if (studentAnswers && typeof studentAnswers === "object" && Object.keys(studentAnswers).length > 0) {
    const lines = [];
    (exam.sections || []).forEach((sec, sIdx) => {
      (sec.questions || []).forEach((qObj, qIdx) => {
        const key = `s${sIdx}_q${qIdx}`;
        const keyAlt = `q_${sIdx}_${qIdx}`;
        const chosen = studentAnswers[key] || studentAnswers[keyAlt];
        if (chosen) {
          lines.push(`- ${sec.name} - Câu ${qIdx + 1}: Bách đã chọn "${chosen}" (Đáp án & barem chuẩn: "${qObj.answer || ""}")`);
        }
      });
    });
    if (lines.length > 0) {
      answersSummary = [
        "",
        "--- ĐÁP ÁN TRẮC NGHIỆM BÁCH ĐÃ CHỌN TRỰC TIẾP TRÊN MÀN HÌNH ---",
        ...lines,
        "----------------------------------------------------------------",
        ""
      ].join("\n");
    }
  }

  return [
    `Bách vừa hoàn thành BÀI KIỂM TRA ĐỊNH KỲ 30 PHÚT - MÔN TOÁN LỚP 4 (${exam.title}).`,
    `Bộ sách: ${exam.textbook || "Kết nối tri thức với cuộc sống"}. Thang điểm: 10 điểm.`,
    `Bách đã có vở nháp để tính toán cẩn thận trước khi viết bài giải vào vở ô ly. Ảnh chụp trang vở ô ly bài làm của Bách được đính kèm.`,
    studentExplanation ? `Lời giải thích / ghi âm của Bách: "${studentExplanation}"` : "",
    answersSummary,
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

