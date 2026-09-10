# Kế Hoạch Kiến Trúc Kết Nối Trợ Lý AI (Đã Tinh Chỉnh Qua Review DeepSeek V4 Pro)

Tài liệu thiết kế chi tiết quy chuẩn kết nối trợ lý AI thông minh cho **Bách Learning Lab** trên iPad Safari PWA, đã được rà soát và khắc phục triệt để các hạn chế kỹ thuật của WebKit iOS Safari.

---

## 1. Nguyên Tắc Cốt Lõi (Đã Chốt & Chuẩn Hóa)

### 1.1. Khóa Chặt 1 Origin PWA Duy Nhất (Chống Phân Mảnh Dữ Liệu)
> [!IMPORTANT]
> **Khắc phục bẫy phân mảnh Origin của DeepSeek**: Nếu cài PWA từ 2 URL khác nhau (`http://mac-ip` và `https://vercel`), iOS Safari sẽ coi là 2 ứng dụng xa lạ và tách IndexedDB làm đôi.
* **Quy chuẩn**: Bách **CHỈ CÀI ĐÚNG 1 PWA DUY NHẤT** từ một URL HTTPS chuẩn mực (`https://bach-learning.vercel.app` hoặc domain riêng).
* **Một kho dữ liệu thống nhất**: 100% bài học, điểm số, lịch sử chat chỉ lưu tại **1 kho IndexedDB duy nhất** trên iPad và đồng bộ 2 chiều với Google Drive gia đình.
* **Kết nối Mac LAN siêu tốc khi ở nhà**:
  * PWA thăm dò (ping 1.2s) tới endpoint HTTPS của Mac (qua Cloudflare Tunnel / Tailscale Funnel / proxy an toàn).
  * Nếu Mac online $\rightarrow$ Bật 🟢 **AI tại nhà · Đang sẵn sàng** (dùng `gemini-3.8-flash` qua Mac LAN).
  * Nếu Mac tắt / ra ngoài $\rightarrow$ Bật 🔵 **Gemini online · Mạng ổn** (gọi Vercel Gemini REST).
  * Nếu mất mạng $\rightarrow$ Bật ⚪ **Học offline · AI tạm nghỉ** (học 100% offline từ IndexedDB).

### 1.2. Nhập Liệu Tối Ưu iPad: Bàn Phím Số Cảm Ứng Lớn (Big Touch Numpad)
> [!IMPORTANT]
> **Khắc phục bẫy Safari WebKit**: Apple **chặn hoàn toàn `SpeechRecognition` (Micro nhận diện giọng nói)** trên iOS Safari PWA (kể cả iOS 18).
* **Giải pháp**:
  * Trợ lý AI vẫn **phát âm thanh đọc bài và đố vui cực mượt bằng giọng đọc (SpeechSynthesis TTS)** song song với chữ chạy.
  * Phía Bách nhập liệu: Trang bị **Bàn phím số cảm ứng lớn (Big Touch Numpad)** ngay trên màn hình iPad cho các bài toán và mini-game "Đấu tính nhẩm 90 giây":
    + Nút bấm to, bo tròn, khoảng cách ngón tay thoải mái, phản hồi xúc giác/âm thanh lách cách vui tai (haptics/click chime).
    + Tốc độ phản xạ tức thì 0ms, chính xác tuyệt đối, không bị nhận diện sai số do ngọng hay tiếng ồn môi trường.

### 1.3. Quy Chuẩn Xưng Hô Bắt Buộc
* Trợ lý AI tự xưng là **"tôi"** hoặc **"mình"**, gọi học sinh là **"Bách"**.
* **Tuyệt đối không xưng "thầy" hay "cô"**.

---

## 2. Quy Chuẩn Kỹ Thuật SSE & Streaming

### 2.1 Cấu trúc gói tin SSE (Server-Sent Events)
* **Text chunk thông thường** (chữ tuôn ra tức thì và đưa vào hàng đợi đọc TTS):
  ```http
  data: {"text": "Chào Bách, "}
  
  data: {"text": "mình cùng xem bài này nhé!"}
  ```
* **Frame hành động học tập cuối luồng** (Metadata Only):
  ```http
  event: action
  data: {"type":"NONE","subject":"math","targetWeekId":"w1","method":"...","pace":"...","focus":"...","reason":"...","nextStep":"..."}
  ```
  * *Nguyên tắc bất di bất dịch*: Frame `event: action` được bóc tách ngầm để cập nhật `state.db`. **Tuyệt đối không in ra chat và không đưa vào hàng đợi phát âm thanh TTS**.
* **Frame hoàn thành**:
  ```http
  event: done
  data: {}
  ```

### 2.2 Quản trị vòng đời Stream (AbortController & Speech Cancel)
* **Hủy luồng tức thì**: Khi Bách gửi câu hỏi mới, ấn "Dừng", hoặc chuyển bài/tuần khác:
  - Gọi ngay `abortController.abort()`.
  - Hủy ngay hàng đợi âm thanh: `window.speechSynthesis.cancel()`.
  - Dọn sạch hàng đợi câu `sentenceQueue` và bộ đệm `sentenceBuffer`.
* **Timeout & Fallback**: Sau **10 giây** không nhận được bất kỳ token nào $\rightarrow$ tự động hủy luồng và kích hoạt fallback gọi endpoint JSON tĩnh (Unary).

### 2.3 Token Cache Best-Effort & 401 Retry
* Cache Google OAuth `accessToken` trong memory (TTL 55 phút).
* **401 Refresh Retry**: Nếu Google API trả về HTTP 401 $\rightarrow$ xóa cache, tự động lấy token mới và retry đúng 1 lần duy nhất trước khi báo lỗi.

---

## 3. Mini-Game Sư Phạm: "Vừa Học Vừa Chơi Với AI"

1. ⚡ **Đấu tính nhẩm 90 giây (Speed Math Sprint)**:
   - Vòng đấu 90 giây tập trung cao độ (Flow state), giải chuỗi liên hoàn.
   - Nhập số siêu tốc bằng **Bàn phím số ảo lớn (Big Touch Numpad)** ngay trên iPad.
   - AI tăng độ khó theo combo đúng (cộng trừ có nhớ $\rightarrow$ nhân nhẩm với 11 $\rightarrow$ gộp tròn chục/tròn trăm).
2. 🧱 **Mini Bar Model Studio (Tự build ~15KB SVG thuần)**:
   - Thay thế toàn bộ thư viện Polypad 5MB cồng kềnh bằng canvas SVG nội bộ siêu nhẹ.
   - Hỗ trợ cảm ứng iPad 60 FPS: kéo dài thanh đoạn thẳng, gắn ngoặc ôm Tổng/Hiệu, đặt nhãn số và dấu hỏi chấm `?`.
   - **Hoạt động 100% Offline**, dữ liệu cấu trúc rõ ràng để AI có thể "nhìn thấy và chấm đúng sai" sơ đồ của Bách.
3. 🕵️ **AI "Thám tử bắt lỗi sai" (Spot The Bug)**:
   - Trợ lý AI đóng vai bạn học sinh giả vờ giải sai 1 bước nhỏ (quên nửa chu vi, nhầm thứ tự nhân chia trước cộng trừ sau). Bách bấm chọn bước sai để nhận Huy Hiệu Sao Vàng.

---

## 4. Kế Hoạch Thay Đổi Mã Nguồn (Proposed Changes)

### Component 1: Core PWA Client (`app.js`)
* **[MODIFY] `app.js`**:
  - Tích hợp `AiConnectionManager`: thăm dò 1.2s cập nhật 3 trạng thái (🟢 AI tại nhà / 🔵 Gemini online / ⚪ Học offline).
  - Tích hợp **Big Touch Numpad** phục vụ nhập số nhanh trên iPad.
  - Nâng cấp `askAi` sang `ReadableStream` với `AbortController`, xử lý frame `event: action` ngầm.
  - Tích hợp Sentence Queue cho `tutorSpeech` với cơ chế cancel lập tức khi chuyển cảnh hoặc hỏi câu mới.
  - Tích hợp component **Mini Bar Model Studio (~15KB SVG)** cho các bài toán lời văn Singapore.

### Component 2: Backend Streaming & API Gateway (`api/tutor.js`)
* **[MODIFY] `api/tutor.js`**:
  - Cập nhật prompt sư phạm: Trợ lý AI xưng "mình/tôi", gọi "Bách", cấm "thầy/cô".
  - Thêm `callLocalAgyCliStream`: spawn `agy` với `--output-format stream-json`, pipe `text_delta` thành SSE chunks.
  - Thêm `callGeminiRestStream`: gọi `:streamGenerateContent?alt=sse`, pipe SSE về client.
  - Token caching best-effort kèm cơ chế 401 refresh retry.
  - Tách frame cuối thành `event: action`.

### Component 3: Local Server (`server.mjs`)
* **[MODIFY] `server.mjs`**:
  - Đảm bảo header CORS và endpoint `/api/ping` phản hồi < 50ms phục vụ việc thăm dò trạng thái mạng LAN của iPad.

### Component 4: Test Suite (`test/smoke.test.mjs`)
* **[MODIFY] `test/smoke.test.mjs`**:
  - Unit test SSE chunk parser và bóc tách `event: action`.
  - Test `AbortController` và hủy hàng đợi phát âm thanh TTS.
  - Test 401 retry của Token Cache.
  - Bảo đảm toàn bộ 58 bài kiểm thử hiện tại tiếp tục PASS 100%.

---

## 5. Verification Plan

### Automated Tests
```bash
npm test
```
Xác nhận tất cả unit test cho SSE parser, abort controller, token cache 401 retry và prompt xưng hô đều pass.

### Manual Verification on iPad Safari
1. **1 Origin & IndexedDB**: Mở app trên iPad qua Safari standalone PWA, học offline 1 ngày $\rightarrow$ kiểm tra bài học lưu nguyên vẹn trong IndexedDB $\rightarrow$ bật mạng kiểm tra tự động sync lên Google Drive trong 1 giây.
2. **Streaming & Voice**: Bấm "Nhờ AI chấm & góp ý" $\rightarrow$ Chữ tuôn ra trong < 400ms, giọng đọc cất lên từ câu đầu tiên, xưng "mình/tôi", không lộ chuỗi action JSON.
3. **Đấu tính nhẩm 90s**: Chơi thử vòng đấu 90 giây với Bàn phím số cảm ứng lớn $\rightarrow$ chạm số mượt mà, phản hồi âm thanh tức thì.
4. **Mini Bar Model Studio**: Kéo thả thanh đoạn thẳng bằng ngón tay trên iPad $\rightarrow$ mượt mà 60 FPS, không bị giật trang.
