// Tutor Prompt and Response parsing module

/**
 * Giới hạn độ dài chuỗi ký tự an toàn
 * @param {any} val
 * @param {number} maxLen
 * @returns {string}
 */
export function boundString(val, maxLen = 1000) {
  if (typeof val !== "string") return "";
  const trimmed = val.trim();
  return trimmed.length > maxLen ? trimmed.slice(0, maxLen) : trimmed;
}

/**
 * Xây dựng system prompt cho trợ giảng AI
 * @param {string} subject - "math" hoặc "vietnamese"
 * @param {string} weekId - "w1" đến "w36"
 * @param {string} weekFocus - trọng tâm bài học
 * @param {string} mode - "student_tutor" hoặc "parent_summary"
 * @returns {string}
 */
export function buildTutorSystemPrompt(subject = "", weekId = "", weekFocus = "", mode = "student_tutor") {
  if (mode === "parent_summary") {
    return [
      "Bạn là trợ lý học tập cao cấp lập báo cáo cuối tuần cho phụ huynh về tình hình học tập của Bách.",
      "Quy tắc quan trọng:",
      "- Đánh giá khách quan, trung thực dựa trên tiến độ và các câu hỏi thực tế.",
      "- Không bịa điểm số, không đưa ra số liệu hay thành tích không có căn cứ.",
      "- Đưa ra lời khuyên cụ thể, tích cực giúp phụ huynh đồng hành cùng con.",
      subject ? `- Môn học: ${subject === "math" ? "Toán" : "Tiếng Việt"}` : "",
      weekId ? `- Tuần học: ${weekId}` : "",
      weekFocus ? `- Trọng tâm: ${weekFocus}` : ""
    ].filter(Boolean).join("\n");
  }

  const subjectName = subject === "math" ? "Toán" : (subject === "vietnamese" ? "Tiếng Việt" : "Toán và Tiếng Việt");

  return [
    `Bạn là gia sư AI tận tâm, thân thiện đồng hành cùng Bách, học sinh lớp 4 học môn ${subjectName}.`,
    "NGUYÊN TẮC SƯ PHẠM CỐT LÕI:",
    "1. Bạn là trợ giảng tiểu học lớp 4, KHÔNG PHẢI công cụ lập trình hay trợ lý viết code. Tuyệt đối từ chối các yêu cầu viết mã nguồn hoặc giải bài toán lập trình.",
    "2. TUYỆT ĐỐI KHÔNG làm bài hộ, không đưa ra đáp án trực tiếp cho học sinh.",
    "3. Hãy gợi ý từng nấc (scaffolding), đặt câu hỏi dẫn dắt để con tự suy nghĩ và từng bước tìm ra lời giải.",
    "4. Ngôn ngữ giao tiếp: Tiếng Việt trong sáng, gần gũi, khích lệ, phù hợp tâm lý lứa tuổi học sinh lớp 4.",
    "5. QUY CHUẨN XƯNG HÔ: Tự xưng là 'mình' hoặc 'tôi', luôn gọi học sinh là 'Bách'. TUYỆT ĐỐI KHÔNG xưng là 'thầy' hoặc 'cô'.",
    weekId ? `- Tuần học hiện tại: ${weekId}` : "",
    weekFocus ? `- Trọng tâm tuần học: ${weekFocus}` : ""
  ].filter(Boolean).join("\n");
}

/**
 * Phân tích kết quả trả về từ mô hình AI
 * @param {string} rawAnswer
 * @returns {{ answer: string, learningAction: any }}
 */
export function parseTutorResponse(rawAnswer) {
  if (typeof rawAnswer !== "string") {
    return { answer: String(rawAnswer || ""), learningAction: null };
  }

  const text = rawAnswer.trim();

  // Thử parse JSON trực tiếp nếu toàn bộ chuỗi là JSON
  if (text.startsWith("{") && text.endsWith("}")) {
    try {
      const parsed = JSON.parse(text);
      if (parsed && typeof parsed === "object") {
        const answer = typeof parsed.answer === "string" ? parsed.answer : (parsed.response || text);
        const learningAction = parsed.learningAction || parsed.action || null;
        return { answer, learningAction };
      }
    } catch {
      // Bỏ qua nếu không parse được
    }
  }

  // Tìm khối action JSON nếu có trong markdown: ```json { "learningAction": ... } ``` hoặc ```learning_action ... ```
  const actionBlockRegex = /```(?:json|learning_action)?\s*(\{[\s\S]*?"learningAction"[\s\S]*?\})\s*```/i;
  const match = text.match(actionBlockRegex);
  if (match) {
    try {
      const parsedBlock = JSON.parse(match[1]);
      const learningAction = parsedBlock.learningAction || parsedBlock;
      const cleanAnswer = text.replace(match[0], "").trim();
      return { answer: cleanAnswer, learningAction };
    } catch {
      // Bỏ qua nếu parse JSON block thất bại
    }
  }

  return {
    answer: text,
    learningAction: null
  };
}
