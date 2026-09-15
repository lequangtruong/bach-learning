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
    `Bạn là bạn đồng hành AI học tập cùng Bách, học sinh lớp 4 môn ${subjectName}.`,
    "NGUYÊN TẮC SƯ PHẠM VÀ GIAO TIẾP:",
    "1. Bạn là BẠN ĐỒNG HÀNH (người bạn học cùng) của Bách, KHÔNG PHẢI THẦY CÔ GIÁO và KHÔNG PHẢI công cụ lập trình hay trợ lý viết code. Tuyệt đối từ chối các yêu cầu viết mã nguồn hoặc giải bài toán lập trình.",
    "2. TUYỆT ĐỐI KHÔNG làm bài hộ, không đưa ra đáp án trực tiếp cho học sinh.",
    "3. Hãy gợi ý từng nấc (scaffolding), đặt câu hỏi dẫn dắt để Bách tự suy nghĩ và từng bước tìm ra lời giải.",
    "4. NGỮ ĐIỆU VÀ PHONG CÁCH (RẤT QUAN TRỌNG): Giọng văn thật ấm áp, mềm mại, vui tươi, ân cần và dịu dàng như một người bạn thân thiết ngồi học cạnh Bách. Tuyệt đối KHÔNG dùng giọng điệu chát chúa, cộc lốc, khô khan, máy móc hay giáo điều phán xét.",
    "5. QUY CHUẨN XƯNG HÔ (BẮT BUỘC): Bạn tự xưng là 'mình' hoặc 'tôi', luôn gọi bạn học là 'Bách' hoặc 'bạn' (ví dụ: 'mình và Bách', 'chúng mình cùng xem', 'bạn thử nghĩ xem').",
    "6. CẤM TUYỆT ĐỐI: TUYỆT ĐỐI KHÔNG xưng là 'thầy' hoặc 'cô', và TUYỆT ĐỐI KHÔNG ĐƯỢC GỌI Bách là 'con'. Cấm dùng từ 'con' khi trò chuyện với Bách.",
    weekId ? `- Tuần học hiện tại: ${weekId}` : "",
    weekFocus ? `- Trọng tâm tuần học: ${weekFocus}` : ""
  ].filter(Boolean).join("\n");
}

/**
 * Loại bỏ các dòng thông báo kỹ thuật môi trường (như Active Workspace / Working Folder)
 * @param {string} str
 * @returns {string}
 */
export function cleanTechnicalHeaders(str) {
  if (typeof str !== "string") return "";
  let cleaned = str.trim();
  // Xóa các cụm header [Active Workspace: ...] và [Working Folder: ...] ở đầu phản hồi
  cleaned = cleaned.replace(/^(\[(?:Active Workspace|Working Folder):[^\]]*\]\s*)+/gi, "");
  // Xóa khối reasoning nội bộ nếu có: ### 🧠 Suy nghĩ ... --- hoặc 1. **Hiểu yêu cầu**... ---
  cleaned = cleaned.replace(/^(?:###\s*🧠\s*Suy nghĩ[\s\S]*?---|1\.\s*\*\*Hiểu yêu cầu\*\*[\s\S]*?---)\s*/i, "");
  return cleaned.trim();
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

  const cleanedRaw = cleanTechnicalHeaders(rawAnswer);
  const text = cleanedRaw.trim();

  // Thử parse JSON trực tiếp nếu toàn bộ chuỗi là JSON
  if (text.startsWith("{") && text.endsWith("}")) {
    try {
      const parsed = JSON.parse(text);
      if (parsed && typeof parsed === "object") {
        const answer = typeof parsed.answer === "string" ? parsed.answer : (parsed.response || text);
        const learningAction = parsed.learningAction || parsed.action || null;
        return { answer: cleanTechnicalHeaders(answer), learningAction };
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
      return { answer: cleanTechnicalHeaders(cleanAnswer), learningAction };
    } catch {
      // Bỏ qua nếu parse JSON block thất bại
    }
  }

  return {
    answer: cleanTechnicalHeaders(text),
    learningAction: null
  };
}
