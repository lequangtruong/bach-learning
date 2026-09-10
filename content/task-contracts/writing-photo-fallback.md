# Hợp đồng tác vụ: ảnh bài viết làm phương án dự phòng cho giọng nói

## Mục tiêu

Trong luồng nộp bài Văn, cho phép phụ huynh/Bách chụp hoặc chọn **một** ảnh bài viết
trên giấy. Gemini nhận ảnh cùng yêu cầu chữa bài qua `/api/tutor` server-side.

## Phạm vi file

Chỉ `app.js`, `api/tutor.js`, `styles.css`, `test/smoke.test.mjs`.

## UX và riêng tư

- Giọng nói vẫn là luồng chính; bàn phím vẫn dùng được.
- Có input file `accept="image/jpeg,image/png,image/webp"` và `capture="environment"`.
- Ảnh chỉ được chọn do thao tác rõ ràng; hiển thị tên file/khả năng bỏ ảnh, không tự upload,
  không lưu vào IndexedDB/Drive/chat history, không phát mic/camera tự động.
- Nút gửi bài cho phép chỉ có văn bản, chỉ có ảnh, hoặc cả hai. Khi không có cả hai, hiện thông
  báo rõ.
- Sau khi chuyển sang Guide, yêu cầu chữa bài Văn phải tự gửi ngay qua luồng `askAi`, để ảnh
  không bị bỏ rơi; không dùng `prefillPrompt` cho ảnh.

## Bảo mật và API

- Client chỉ gửi `writingImage` trong request `/api/tutor`: `{ mimeType, data }`, trong đó data
  là base64 không data URL. Bounded kích thước file gốc <= 1 MiB trước khi encode.
- Server chỉ nhận JPEG/PNG/WebP, base64 hợp lệ, decoded bytes <= 1 MiB; body raw tối đa 1.5 MiB.
  Mọi dạng khác trả 400/413 trước khi gọi Gemini.
- `callGeminiRest` thêm ảnh duy nhất vào `contents` user cuối dưới `inlineData`; không đưa ảnh
  vào history, learningContext, log, Drive hay local database.
- `parent_summary` không nhận ảnh.
- Không đổi OAuth, secrets, scope, model, hay fallback AGY.

## Kiểm chứng

- Tests kiểm tra UI capture + giới hạn client, API reject MIME/base64/size sai, và payload Gemini
  có `inlineData` đúng khi ảnh hợp lệ.
- `npm test`, `git diff --check`, syntax check thành công.
