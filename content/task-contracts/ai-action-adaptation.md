# Hợp đồng nhiệm vụ: áp dụng đề xuất AI vào buổi học kế tiếp

## Phạm vi

Khi phụ huynh bấm `Áp dụng đề xuất` trên thẻ hành động Gemini, đề xuất `ADVANCE` phải cập nhật dữ liệu thích ứng của đúng môn để các buổi sau hiện bài tăng vừa phải. Các hành động ôn lại/đổi phương pháp không được vô tình tăng độ khó.

`ADVANCE` phải được gắn với buổi đã tạo ra đánh giá, không dùng ngày hệ thống. Dùng trường optional `sourceLessonKey` có dạng `w{1..36}-{math|vietnamese}-{1..6}`. Chỉ một yêu cầu AI bắt đầu từ nút `AI xem bài` mới có khóa này; hỏi tự do trên Hướng dẫn không được tăng độ khó.

## Tiêu chí chấp nhận

- `ADVANCE` tạo/cập nhật `db.adaptive[subject]` bằng nấc tăng bị giới hạn: tăng tối đa một cấp và thêm 1 câu biến thể; lý do là `too_easy`.
- Điều chỉnh chỉ áp dụng từ buổi kế tiếp theo thứ tự tuyến tính `(tuần - 1) × 6 + (ngày - 1)`, không làm biến dạng bài đang mở; Thứ 7 tuần N phải dẫn tới Thứ 2 tuần N+1.
- `sourceLessonKey` là trường thêm, optional; dữ liệu cũ không có trường này vẫn hoạt động theo cơ chế cũ.
- `REVIEW_WEEK`, `PAUSE_AND_REBUILD`, `CHANGE_METHOD` vẫn giữ đúng luồng hồ sơ/tuần ôn, không bị gắn `too_easy`.
- Dữ liệu được lưu local-first/Drive bằng `saveLocal`; hành động không có `subject` hợp lệ không được sửa `adaptive`.
- Có regression test kiểm tra nguồn buổi học, rollover Thứ 7 → Thứ 2, giới hạn tăng và không tăng ở nhánh ôn lại/hỏi tự do.

## Giới hạn thay đổi

Chỉ sửa `app.js`, `data/data-core.js` và `test/smoke.test.mjs`. Không sửa curriculum, OAuth, Drive, Gemini server, CSS, dependencies hay nội dung bài học.

## Kiểm chứng

`npm test && git diff --check`
