# Hợp đồng tác vụ: runtime Vercel cho AI trợ giảng

## Mục tiêu

Khai báo thời gian chạy tối đa 30 giây riêng cho `api/tutor.js` khi triển khai lên
Vercel, để cuộc gọi Gemini có thời gian phản hồi hợp lý.

## Bất biến

- Chỉ thêm cấu hình triển khai tĩnh `vercel.json` ở gốc dự án.
- Chỉ cấu hình `api/tutor.js` với `maxDuration: 30`.
- Không đưa OAuth client secret, refresh token, API key hay dữ liệu học sinh vào file
  cấu hình hoặc bundle trình duyệt.
- Biến môi trường vẫn được cấu hình tại Vercel: `GEMINI_CLIENT_ID`,
  `GEMINI_CLIENT_SECRET`, `GEMINI_REFRESH_TOKEN`, `GEMINI_PROJECT_ID`,
  `BACH_ALLOWED_EMAIL`.

## Kiểm chứng

- JSON hợp lệ.
- Bài kiểm thử tự động khẳng định cấu hình đúng endpoint và thời lượng.
- `npm test` và `git diff --check` đều thành công.
