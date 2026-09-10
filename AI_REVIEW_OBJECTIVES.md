# BẢN ĐÁNH GIÁ VÀ CHỈ DẪN KỸ THUẬT CUỐI CÙNG
## DỰ ÁN: BÁCH LEARNING LAB (LỚP 4)
**Tài liệu tham chiếu gốc (Source of Truth):** `/Users/macbook/.codex/attachments/92545d58-d1f2-450f-a47b-4367ffc5d506/goal-objective.md`  
**Quy chuẩn kỹ thuật:** AI Support Kit (Task Contracts, Invariants, Flow Evidence, Five-point Closure)  
**Hội đồng Thẩm định:** Phụ huynh · DeepSeek V4 Pro (7.5/10) · Antigravity Lead  
**Thời điểm phê duyệt:** 2026-09-08  
**Trạng thái:** **READY FOR PRODUCTION & CODEGEN AGENTS**

---

## I. ĐẶT HÀNG & BỐI CẢNH SỬ DỤNG (BẮT BUỘC AI CODE PHẢI NẮM RÕ)

1. **Bản chất phiên học (Deliberate Micro-learning):**
   - Ban ngày Bách đã học chính khóa ở trường. Buổi tối tại nhà là phiên **rèn luyện có chủ đích 25 phút/môn/ngày (Thứ 2–6)** và **50 phút/môn (Thứ 7)**.
   - Mục tiêu: Kích hoạt tư duy bậc cao, bứt phá năng lực cho học sinh giỏi vì bài tập đại trà ở lớp không đủ độ sâu. Tuyệt đối không dạy lại từ số 0 theo kiểu mất gốc.
2. **Nguyên tắc môn Toán:**
   - SGK Kết nối tri thức là trục tiến độ; phương pháp Singapore (CPA, Bar Model, Heuristics, Polya) là công cụ tư duy.
   - Làm thật chặt chẽ, chú trọng lập luận và bản chất; tuyệt đối không dạy mẹo vặt cơ học.
   - 6 tuần đầu là cầu nối (Bridge) và chẩn đoán nền tính toán nhanh (8–10 phút: Chính xác $\rightarrow$ Chiến lược $\rightarrow$ Lưu loát $\rightarrow$ Kiểm tra).
3. **Nguyên tắc môn Tiếng Việt:**
   - Xóa bỏ văn mẫu sáo rỗng; tập trung vào chi tiết quan sát thật (vết xước hộp bút, hành động người thân buổi sáng) và cốt truyện có điểm nút.
   - **Kỹ thuật Đọc to (Oral Rehearsal)**: Là kỹ thuật tư duy ngôn ngữ bắt buộc (giúp con cảm nhận nhịp điệu và phát hiện câu cụt). Quy trình: Viết nháp trên giấy $\rightarrow$ Đọc to vào máy (STT) $\rightarrow$ Tự rà soát sửa lỗi $\rightarrow$ Lưu bản hoàn thiện. Bàn phím/chụp ảnh là phương án dự phòng.
4. **Quy tắc dừng an toàn (Stop Rule):**
   - Hết đúng thời gian (25 phút ngày thường, 50 phút Thứ 7) thì dừng ngay, không ép học bù.
5. **Chính sách nghỉ học linh hoạt (Nghỉ học là bình thường — No Streak Pressure):**
   - Trẻ có những buổi mệt, bận việc gia đình hoặc nghỉ ngơi $\rightarrow$ việc nghỉ là hoàn toàn bình thường, những ngày nghỉ sẽ **không tính vào tiến độ và không bị phạt**.
   - Tuyệt đối không tạo áp lực chuỗi ngày liên tục (No streak shaming/guilt), không gán nhãn bỏ lỡ hay thất bại.
   - Khi quay lại học, hệ thống tiếp tục bài học kế tiếp đúng nhịp tự nhiên, **tuyệt đối không dồn bài của ngày nghỉ vào buổi sau** để bảo toàn giới hạn 25 phút.

---

## II. ĐỐI SOÁT HIỆN TRẠNG KỸ THUẬT (BASELINE STATE)

Hệ thống đã triển khai đầy đủ và vượt qua **35/35 automated unit & integration tests** (`npm test` exit 0):

| Thành phần | Tệp tin đảm nhiệm | Hiện trạng kiểm chứng |
| :--- | :--- | :--- |
| **Curriculum 36 tuần** | `data/curriculum.js` | 36 tuần $\times$ 6 ngày độc lập, bài tập tự chứa (`AUTHORED_MATH_KITS`, `AUTHORED_VIETNAMESE_KITS`), không dùng shell rỗng. Pass test #1–#7. |
| **Local-First DB** | `data/data-core.js` | Schema v2, `validateDatabasePayload()` nghiêm ngặt, `mergeDatabases()` bảo vệ dữ liệu Drive khi thiết bị mới đăng nhập. Pass test #24–#26. |
| **Durable Timer** | `data/data-core.js`, `app.js` | 25 phút ngày thường, 50 phút Thứ 7; tính theo wall-clock, phục hồi sau sleep/reload không double count, không spam Drive. Pass test #29–#33. |
| **Gemini OAuth REST** | `api/tutor.js` | Serverless function dùng refresh token server-side, xác thực Google ID Token của phụ huynh, rate limit 25 req/phút, prompt lớp 4 chặn giải hộ/viết code. Pass test #18–#23. |
| **Client UI & PWA** | `app.js`, `index.html`, `styles.css` | Tối ưu Safari iPad (touch target $\ge$ 44x44px), Web Speech API tiếng Việt, SpeechSynthesis giọng nữ nhẹ nhàng khi bấm (không auto-play), Service Worker cache offline an toàn. Pass test #8–#14, #27–#28. |

---

## III. ĐIỀU CẤM & RANH GIỚI BẢO VỆ (CRITICAL INVARIANTS CHO AI CODE)

Bất kỳ AI nào khi chỉnh sửa hoặc mở rộng mã nguồn **TUYỆT ĐỐI KHÔNG ĐƯỢC VI PHẠM** các điều sau:

1. **BẢO MẬT CREDENTIALS:**
   - Tuyệt đối KHÔNG đặt Gemini API Key, OAuth Client Secret hoặc Refresh Token ở client-side (`app.js`, `index.html`, `public-config.js`).
   - Mọi tương tác Gemini AI phải đi qua server-side endpoint `/api/tutor`.
2. **TÍNH TOÀN VẸN DỮ LIỆU DRIVE:**
   - Google Drive sync chỉ được dùng phạm vi tối thiểu `https://www.googleapis.com/auth/drive.file` và chỉ tương tác đúng file `Bach Learning DB.json`.
   - Phải luôn chạy qua `validateDatabasePayload()` trước khi nạp vào state hoặc ghi vào Drive.
   - Không được ghi đè (overwrite) dữ liệu Drive nếu local database là bản rỗng mới khởi tạo (First-login protection).
3. **TÍNH SƯ PHẠM TRỢ GIẢNG:**
   - System prompt của AI Tutor phải luôn giữ nguyên tắc: **Gợi ý từng nấc nhỏ (scaffolding), tuyệt đối không làm bài hộ, không đưa ngay đáp số**.
   - Tuyệt đối từ chối các yêu cầu viết code, lập trình hoặc giải đáp ngoài phạm vi Toán & Tiếng Việt lớp 4.
4. **THỜI GIAN & TỰ ĐỘNG HÓA ÂM THANH:**
   - Tuyệt đối không tự động bật micro khi chưa có thao tác bấm của học sinh.
   - Tuyệt đối không tự động phát âm thanh (auto-play speech); chỉ đọc khi người dùng chủ động bấm nút nghe.
   - Đồng hồ đếm ngược không được tự động đếm khi chưa bấm Start; không được spam ghi dữ liệu lên Drive mỗi giây.
5. **KHÔNG DỒN BÀI BÙ & KHÔNG PHẠT CHUỖI (NO STREAK PRESSURE):**
   - Tuyệt đối không tự động dồn bài của những ngày nghỉ vào buổi sau (mỗi buổi vẫn giữ nguyên vẹn trần 25 phút).
   - Không thiết kế giao diện cảnh báo đứt chuỗi (streak loss) hay áp lực học liên tục gây tâm lý căng thẳng cho học sinh.

---

## IV. HƯỚNG DẪN HÀNH ĐỘNG DÀNH CHO AI CODE (IMPLEMENTATION DIRECTIVES)

Khi được giao nhiệm vụ bổ sung hoặc hoàn thiện code, AI Code thực hiện theo các chỉ dẫn sau:

### Nhiệm vụ 1: Triển khai Vercel Production
- Thêm file `vercel.json` ở root để cấu hình timeout cho Serverless Function:
  ```json
  {
    "functions": {
      "api/tutor.js": {
        "maxDuration": 30
      }
    }
  }
  ```
- Đảm bảo 5 biến môi trường trên Vercel: `GEMINI_CLIENT_ID`, `GEMINI_CLIENT_SECRET`, `GEMINI_REFRESH_TOKEN`, `GEMINI_PROJECT_ID`, `BACH_ALLOWED_EMAIL`.

### Nhiệm vụ 2: Tinh chỉnh nhịp học 3 chặng trong UI (`app.js`)
- Đảm bảo giao diện bài học hiển thị rõ ràng nhịp 3 chặng cho phiên 25 phút:
  1. *Chặng 1 (5 phút):* Khởi động tính nhẩm nhanh / đọc cảm nhận ngắn.
  2. *Chặng 2 (15 phút):* Trọng tâm bài học có lời văn / viết nháp và đọc to.
  3. *Chặng 3 (5 phút):* Tự kiểm tra và chốt bài học.

### Nhiệm vụ 3: Bổ sung tính năng chụp ảnh bài làm làm phương án dự phòng
- Tại khung nộp bài Tiếng Việt, bên cạnh nút "Đọc bài để nhập" (STT), bổ sung nút chọn ảnh chụp bài viết trên giấy (`<input type="file" accept="image/*" capture="environment">`) để gửi kèm vào prompt cho Gemini khi STT gặp trở ngại tiếng ồn hoặc phát âm.

### Nhiệm vụ 4: Quy trình kiểm tra bắt buộc trước khi bàn giao
Mọi thay đổi code bắt buộc phải chạy lệnh xác thực không lỗi:
```bash
npm test
```
Tất cả 35 bài kiểm thử hiện có phải tiếp tục PASS 100%, không phát sinh lỗi cú pháp hay hồi quy logic.

---

## V. KẾT LUẬN

Bản đánh giá và chỉ dẫn kỹ thuật này là căn cứ tối cao (Single Source of Truth) kết hợp giữa yêu cầu của phụ huynh và thẩm định của DeepSeek V4 Pro. Các AI kỹ thuật (AGY, Codex, Claude, Gemini...) khi nhận task phải tuân thủ nghiêm ngặt các điều cấm và chỉ dẫn trên.
