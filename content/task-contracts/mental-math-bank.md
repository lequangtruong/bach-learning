# Hợp đồng tác vụ: kho luyện tính nhẩm phong phú

## Mục tiêu

Biến “Nền tính toán nhanh” từ mô tả 6 tuần thành kho luyện có thể dùng thật 8–10 phút
mỗi buổi, phù hợp Bách học khá–giỏi: không quá dễ, nhưng ưu tiên đúng và chiến lược.

## Nội dung bắt buộc

- Mỗi tuần có ít nhất 5 nhóm bài; mỗi nhóm 3–5 câu **tách từng dòng** và một gợi ý chiến lược.
- Sáu mạch: (1) bù tròn/tách gộp; (2) cộng trừ làm tròn–điều chỉnh; (3) nhân cấu trúc;
  (4) chia–phép ngược; (5) biểu thức, đổi chỗ, nhóm số; (6) ước lượng–kiểm tra.
- Có độ khó tăng dần và ít nhất một câu suy luận/so sánh cách tính mỗi tuần.
- Dữ kiện tự chứa, số dùng dấu chấm theo quy ước Việt Nam; không gọi là đề Singapore/Trung Quốc.
- Không lặp y nguyên phép tính giữa các nhóm; không dùng máy tính bỏ túi.

## UX

- Khu vực Toán hiển thị “Kho luyện 8–10 phút”, chọn một nhóm/ngày, với danh sách câu rõ ràng;
  không làm trang quá dài bằng cách mở sẵn toàn bộ 30 nhóm.
- Không thay timer, tiến độ, OAuth, Drive, hoặc nội dung bài Toán chính.

## Phạm vi

Chỉ `data/curriculum.js`, `app.js`, `styles.css`, `test/smoke.test.mjs`.

## Kiểm chứng

- Data test xác nhận 6 tuần × >=5 nhóm, từng nhóm >=3 câu, không có câu trùng toàn kho.
- Renderer test xác nhận nội dung được hiển thị theo danh sách/collapsible.
- `npm test` và `git diff --check` thành công.
