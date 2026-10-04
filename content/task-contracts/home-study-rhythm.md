# Hợp đồng nhiệm vụ: nhịp học hiển thị đúng

## Phạm vi

Sửa duy nhất số liệu “Nhịp học” trên trang chủ để khớp lộ trình: Thứ 2–6 là 25 phút cho mỗi môn mỗi ngày; Thứ 7 là 40 phút cho mỗi môn (chuẩn 1 tiết học).

## Tiêu chí chấp nhận

- Không còn chuỗi “45′” hoặc “45 phút” dùng để mô tả thời lượng học của một môn.
- Trang chủ hiển thị `25′` cùng nhãn `Mỗi môn / ngày`.
- Một test chống hồi quy xác nhận giao diện lấy/hiển thị đúng nhịp 25/40 phút.

## Điều cấm

- Không thay đổi curriculum, OAuth, Drive, Gemini, UI khác, phụ thuộc hoặc triển khai.
- Chỉ được sửa `app.js` và `test/smoke.test.mjs`.

## Kiểm chứng

`npm test && git diff --check`
