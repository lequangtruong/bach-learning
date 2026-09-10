# Báo Cáo Hoàn Thành Mục Tiêu: Bách Learning Lab (Lớp 4)

Tài liệu nghiệm thu toàn bộ các tính năng cốt lõi theo mục tiêu (`/goal`), tuân thủ nghiêm ngặt **AI Support Kit (`askit`)**, chuẩn **Clean Code / DRY**, và các **Critical Invariants**.

---

## 1. Kết Quả Kiểm Chứng Thực Tế (Evidence-Driven)

| Hạng mục kiểm tra | Công cụ / Lệnh | Kết quả | Trạng thái |
| :--- | :--- | :--- | :--- |
| **Toàn bộ Test Suite** | `npm test` | **86/86 tests PASS** (1.18s) | ✅ **PASS 100%** |
| **Chất lượng Giáo trình 36 tuần** | `node scripts/audit-curriculum-quality.mjs` | 216 ngày Toán + 216 ngày Văn: **0 findings** | ✅ **PASS 100%** |
| **Kiểm tra Cú pháp (Syntax)** | `node --check` trên tất cả file JS/MJS | 0 lỗi parse, 0 warning | ✅ **PASS 100%** |
| **Bảo mật Credentials** | Audit mã nguồn client | Không có API Key/Secret ở client | ✅ **PASS 100%** |

---

## 2. Các Hạng Mục Kỹ Thuật Đã Hoàn Thành

### 2.1. Quy Chuẩn Xưng Hô Trợ Lý AI (`api/lib/tutor-prompt.js`)
* **Quy chuẩn bất biến**: Trợ lý AI tự xưng là **"mình"** hoặc **"tôi"**, luôn gọi học sinh là **"Bách"**.
* **Điều cấm tuyệt đối**: **Cấm xưng "thầy" hoặc "cô"**.
* Đã bổ sung vào `buildTutorSystemPrompt()` và có bài test kiểm chứng trong `test/tutor-contract.test.mjs`.

### 2.2. Backend SSE Token Streaming & 401 Auth Retry (`api/lib/tutor-providers.js` & `api/tutor.js`)
* **`executeWithAuthRetry` (Chuẩn DRY)**: Đóng gói cơ chế tự động bắt HTTP 401 khi Google access token hết hạn; tự động làm mới token qua `refresh_token` và thử lại đúng 1 lần duy nhất, tái sử dụng cho cả Unary REST và Streaming.
* **`callGeminiRestStream`**: Kết nối endpoint `:streamGenerateContent?alt=sse` của Gemini 2.5 Flash, phân tách và `yield` từng text delta dạng SSE chunks.
* **`tutorHandler` (SSE Response Pipeline)**:
  - Header: `Content-Type: text/event-stream; charset=utf-8`, `X-Accel-Buffering: no`.
  - Frame text: `data: {"text": "..."}\n\n`.
  - Frame hành động cuối luồng: `event: action\ndata: {...}\n\n` (bóc tách ngầm, không in vào chat, không đọc TTS).
  - Frame kết thúc: `event: done\ndata: {}\n\n`.

### 2.3. Bàn Phím Số Cảm Ứng Lớn (Big Touch Numpad cho iPad Safari PWA)
* **Giải quyết dứt điểm rào cản WebKit**: Apple chặn `SpeechRecognition` trên Safari PWA $\rightarrow$ Bách nhập số qua Bàn phím số cảm ứng lớn ngay trên màn hình iPad.
* **Module độc lập (`js/touch-numpad.js`)**:
  - Touch target chuẩn Apple HIG: nút bấm $\ge 52\times 52\text{px}$ (vượt chuẩn tối thiểu 48px).
  - Bố cục 3 cột trực quan: các số 0–9, dấu thập phân `.`, phân số `/`, xóa lùi `⌫`, xóa hết `C`, xác nhận `✓`.
  - Phản hồi xúc giác / âm thanh lách cách (click chime) thông qua Web Audio API (không phụ thuộc file âm thanh ngoài).
  - Tự động hiển thị khi Bách chạm vào ô đáp số Toán `[data-lesson-answer]`.
* **Styling Glassmorphism (`styles.css`)**:
  - Hỗ trợ `-webkit-backdrop-filter: blur(16px)`, bo tròn góc 18px, shadow mềm mại, animation trượt êm ái, tương thích hoàn hảo Safari iPad 834px/1024px.
* **Offline-Ready**: Đã đưa `js/touch-numpad.js` vào Service Worker (`sw.js`) và static allowlist (`server.mjs`).

### 2.4. Quản Lý Vòng Đời Luồng AI & TTS Queue (`app.js`)
* **`AbortController`**: Mỗi khi Bách gửi câu hỏi mới hoặc đổi trang, luồng fetch cũ lập tức bị abort (`currentAiAbortController.abort()`).
* **Hủy âm thanh tức thì**: Lập tức gọi `window.speechSynthesis.cancel()` khi có thao tác mới, không để chồng chéo giọng đọc.
* **Stream Reader**: Sử dụng `ReadableStream.getReader()` đọc chunk real-time, text tuôn ra mượt mà trong khi frame `event: action` được lưu ngầm vào `state.tutor.lastAction`.

### 2.5. Thăm Dò Mạng LAN Tức Thì (`server.mjs`)
* Bổ sung endpoint `GET /api/ping` trả về `{ status: "ok", mode: "local-mac" }` phản hồi < 5ms cho phép iPad tự động nhận biết máy Mac ở nhà đang bật hay tắt để chuyển đổi linh hoạt.

---

## 3. Kiến Trúc Clean Code & DRY

```
Bach-learning/
├── api/
│   ├── lib/
│   │   ├── rate-limit.js        # [SRP] Quản lý IP rate limiting
│   │   ├── tutor-prompt.js      # [SRP] Xây dựng prompt sư phạm, parse action JSON
│   │   └── tutor-providers.js   # [SRP/DRY] OAuth token cache, 401 retry, Gemini REST & Stream
│   └── tutor.js                 # API Gateway điều phối Vercel Serverless
├── js/
│   ├── core.js                  # [DRY] Shared state, constants, HTML escape, data bounds
│   └── touch-numpad.js          # [SRP] Big Touch Numpad iPad Safari component
├── data/
│   ├── curriculum.js            # Kho 36 tuần, Singapore Bar Models SVG, Authored Kits
│   └── data-core.js             # [DRY] Timer math, DB validation & merge, schemas
├── server.mjs                   # Local server, allowlist tĩnh nghiêm ngặt, /api/ping
├── sw.js                        # PWA Service Worker offline cache
└── styles.css                   # Master stylesheet tích hợp Touch Numpad & Responsive
```
