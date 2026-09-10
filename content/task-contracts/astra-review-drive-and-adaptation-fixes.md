# Hợp đồng tác vụ: sửa các phát hiện Astra về Drive và điều chỉnh AI

## Nguồn và phạm vi

Sửa ba phát hiện từ Astra low. Chỉ được sửa `app.js` và `test/smoke.test.mjs`.
Không đổi OAuth scope, API Gemini, schema DB, nội dung bài học hay giao diện.

## Bất biến Drive

1. Sau khi `findDatabaseFile()` không tìm thấy file hợp lệ, không được PATCH bằng
   `fileId` cũ. Xóa `state.drive.fileId`; lần sync đó được phép tạo đúng một file mới
   tên `Bach Learning DB.json` qua luồng create.
2. Ngay trước `uploadDatabaseFile()`, `mergedDb` phải qua `validateDatabasePayload()`.
   Dữ liệu không hợp lệ phải dừng đồng bộ, không ghi local/remote.

## Bất biến nguồn đánh giá AI

1. `sourceLessonKey` chỉ được gắn khi yêu cầu được khởi động từ nút
   `data-review-lesson-ai`.
2. Khi người dùng nhập hoặc gửi câu hỏi tự do trong `#aiPrompt`, khóa chờ phải bị hủy.
   Một câu hỏi tự do không thể làm `ADVANCE` ảnh hưởng độ khó.
3. Giữ nguyên luật source key hợp lệ, đúng môn và bắt đầu nghiêm ngặt sau buổi đã review.

## Kiểm chứng

- Bổ sung các assertion cấu trúc có mục đích cho cả ba bất biến.
- `npm test` và `git diff --check` thành công.
