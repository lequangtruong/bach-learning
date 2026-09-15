---
name: bach-learning-quality
description: Quality gate cục bộ cho trải nghiệm học lớp 4, tutor AI, riêng tư trẻ em và tiến trình học của Bách Learning.
---

# Bách Learning Quality Gate

## Source of truth bắt buộc

Đọc `content/requirements.md`, `content/system-map.md` và `content/state-machine.md` trước khi thay đổi flow học, tutor, tiến trình hay đồng bộ.

## Acceptance theo loại thay đổi

- `CURRICULUM`: mỗi bài có dữ liệu tự đủ, đáp ứng lộ trình tuần/ngày và không tái dùng bài mơ hồ.
- `TUTOR_API` hoặc `ADAPTATION`: kiểm tra câu trả lời gắn đúng bài đang học; không để free-form prompt sửa tiến trình; lỗi auth/rate-limit phải fail closed.
- `EDUCATIONAL_UX`: kiểm tra một luồng trẻ thực tế ở màn hình hẹp; nút chạm rõ ràng, không tự phát âm thanh, hint mở dần.
- `CHILD_PRIVACY`: chỉ dùng dữ liệu mẫu vô danh; không đẩy ảnh, token, thông tin phụ huynh hay transcript vào evidence public.

## Cách xác minh

1. Chạy `npm test` trước và sau phần thay đổi trong scope.
2. Với luồng có state hoặc API, dùng assertion runtime thay vì chỉ kiểm tra chuỗi mã nguồn.
3. Ghi rõ kết quả non-pass là `PRODUCT_BUG`, `TEST_ISSUE`, `EVIDENCE_ISSUE` hoặc `BLOCKED_ENV`.
4. Không sửa hay commit các thay đổi staged có sẵn ngoài scope đã duyệt.
