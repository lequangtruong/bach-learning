# Bách Learning Lab

Ứng dụng web học tập cá nhân hóa nhẹ nhưng thực chất cho Bách (chuẩn bị vào lớp 4), kết nối vững chắc kiến thức lớp 3 và mở rộng tới tư duy giải toán Olympic cùng năng lực diễn đạt tiếng Việt mạch lạc đúng tuổi. Ứng dụng tối ưu hóa cho Safari trên iPad và sẵn sàng triển khai trên Vercel.

---

## 1. Điểm nổi bật & Kiến trúc

- **Frontend siêu nhẹ (Zero heavy framework):** HTML5, CSS hiện đại, Vanilla JavaScript (ES Module), giao diện Paper/Notebook dịu mắt, mobile/iPad-first.
- **Tiến độ Local-First (IndexedDB schema v2):** Lưu trữ tuần hoàn thành, từng môn Toán/Văn, ghi chú riêng và thời gian cập nhật `updatedAt`. Hoạt động offline mượt mà.
- **Cơ sở dữ liệu Online qua Google Drive (visible file):** Sử dụng Google Identity Services (GIS) Token Model với phạm vi quyền `https://www.googleapis.com/auth/drive.file`. Lưu thành file JSON `Bach Learning DB.json` nhìn thấy trực tiếp trên Google Drive của người dùng (không giấu trong `appDataFolder`). Cơ chế đồng bộ Last-write-wins an toàn, hiển thị rõ thời điểm sync. Không chứa Client Secret trong frontend.
- **Trợ giảng AI trực tuyến (Gemini REST qua OAuth):** Endpoint `api/tutor.js` chạy dưới dạng Vercel Serverless Function, sử dụng server-side OAuth refresh flow qua các biến môi trường bảo mật (`GEMINI_CLIENT_ID`, `GEMINI_CLIENT_SECRET`, `GEMINI_REFRESH_TOKEN`, `GEMINI_PROJECT_ID`). Endpoint yêu cầu Google ID Token và khóa theo `BACH_ALLOWED_EMAIL`; không để lộ token hay API key ở client.
- **Local Dev Fallback:** Khi chạy máy tính cục bộ, `/api/tutor` chỉ fallback gọi `agy` CLI khi đặt `BACH_ENABLE_AGY_FALLBACK=1`. Trên Vercel production hoàn toàn không phụ thuộc vào `agy` binary.
- **Hội thoại bằng giọng nói nhẹ:** Nhập tiếng Việt bằng Web Speech API và đọc câu trả lời bằng `SpeechSynthesis` khi iPad có voice `vi-VN`; ưu tiên voice nữ nhẹ nhàng, luôn có nút bấm rõ ràng và fallback văn bản. Không tự bật micro, không tự phát âm thanh và không gửi file audio tới backend.
- **PWA an toàn:** Service Worker (`sw.js`) chỉ cache tài nguyên tĩnh, tuyệt đối không cache API, OAuth token hoặc DB riêng tư.
- **36 tuần đầy đủ:** Giữ nguyên 36 tuần Toán + Văn, giai đoạn ôn nền 6 tuần đầu, 5 nấc thang thử thách và rubric 0–3.

---

## 2. Chạy trên máy tính (Local Development)

```bash
# Kiểm tra cú pháp toàn bộ file JS
npm run check

# Chạy test suite
npm test

# Khởi động máy chủ cục bộ
BACH_ENABLE_AGY_FALLBACK=1 npm start
```

Mở trình duyệt tại `http://localhost:4173`.

### Mở trên iPad qua mạng Wi-Fi nội bộ (LAN):
```bash
BACH_HOST=0.0.0.0 npm start
```
Xem địa chỉ IP mạng nội bộ của máy Mac (ví dụ `192.168.1.15`) rồi mở `http://192.168.1.15:4173` bằng Safari trên iPad.

---

## 3. Triển khai lên Vercel & Cấu hình OAuth

### Bước 1: Deploy lên Vercel
Kết nối repository GitHub với Vercel. Vercel sẽ tự động phục vụ static frontend và hàm serverless tại `api/tutor.js`.

### Bước 2: Cấu hình biến môi trường Gemini Server-side OAuth trên Vercel
Vào **Project Settings -> Environment Variables** trên Vercel Dashboard và thêm:

| Tên biến | Bắt buộc | Mô tả |
| :--- | :--- | :--- |
| `GEMINI_CLIENT_ID` | Có | Google Cloud OAuth 2.0 Web Client ID |
| `GEMINI_CLIENT_SECRET` | Có | Google Cloud OAuth 2.0 Web Client Secret |
| `GEMINI_REFRESH_TOKEN` | Có | Refresh token đã cấp quyền cho Generative Language API |
| `GEMINI_PROJECT_ID` | Có | Google Cloud project dùng làm quota project |
| `GOOGLE_TUTOR_CLIENT_ID` | Có | OAuth Web Client ID dùng để kiểm tra Google Sign-In của người dùng; nên trùng Client ID public của Drive |
| `BACH_ALLOWED_EMAIL` | Có | Email Google duy nhất được phép dùng quota Gemini |
| `GEMINI_MODEL` | Không | Model Gemini sử dụng (mặc định: `gemini-2.5-flash`) |

> **Lưu ý:** Nếu chưa cấu hình các biến môi trường trên, `/api/tutor` sẽ trả về lỗi HTTP 503 với thông báo rõ ràng mà không làm hỏng app hay lộ credential. `BACH_ALLOWED_EMAIL` là bắt buộc trên production để người lạ không thể dùng quota của tài khoản.

### Bước 3: Cấu hình Google Drive Sync ở Frontend
Để bật tính năng đồng bộ Google Drive:
1. Tạo một OAuth 2.0 Web Client ID trên Google Cloud Console dùng cho Google Sign-In và Drive:
   - Thêm Authorized JavaScript Origins: `https://<ten-du-an>.vercel.app` (và `http://localhost:4173` cho local).
   - Chỉ cần Client ID, **tuyệt đối không dùng Client Secret ở frontend**.
2. Đặt Client ID public này vào `public-config.js` ở biến `window.BACH_GOOGLE_CLIENT_ID` (file này không chứa secret), và đặt cùng giá trị vào `GOOGLE_TUTOR_CLIENT_ID` trên Vercel. Người dùng không phải nhập Client ID trong ứng dụng; nút **"Kết nối Google Drive"** sẽ mở luồng đăng nhập/cấp quyền Google sau khi deployment đã được cấu hình.
3. Cấp quyền `drive.file` trong cửa sổ Google Identity Services. File `Bach Learning DB.json` sẽ tự động được tạo và đồng bộ mỗi khi có thay đổi.

---

## 4. Kiểm thử & Đảm bảo chất lượng

Dự án có sẵn kiểm thử tự động không phụ thuộc browser nặng:
```bash
npm test
```
Bao gồm:
- `node --check` cho toàn bộ mã nguồn (`app.js`, `server.mjs`, `api/tutor.js`, `data/data-core.js`, `sw.js`).
- Smoke test chương trình học 36 tuần & rubric.
- Test pedagogical system prompt của trợ giảng lớp 4.
- Test xử lý lỗi 503 cấu hình OAuth.
- Test pure functions của data model IndexedDB schema v2, last-write-wins merge, và voice transcript helper.
