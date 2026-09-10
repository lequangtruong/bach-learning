# AGY task: Kho tính nhẩm tiếp nối tuần 7–36

## Bối cảnh

`mentalMathFoundation` hiện có 6 tuần đầu, 30 nhóm và 133 câu. Bách cần dùng
8–10 phút tính nhẩm mỗi buổi Toán trong cả lộ trình 36 tuần, không lặp lại nguyên
bộ bài nền sau tuần 6. Đây là phần tăng tốc chiến lược cho học sinh khá–giỏi,
không phải bài ôn mất gốc.

## Mục tiêu

Thêm một kho **tiếp nối tuần 7–36** vào trang Toán, liên kết theo số tuần đang
chọn. Mỗi tuần cần có 5 nhóm buổi (Thứ 2–Thứ 6), mỗi nhóm tối thiểu 4 câu: ít
nhất 3 phép/bài tính và 1 câu hỏi chiến lược hoặc kiểm tra. Câu hỏi phải có dữ
kiện tự chứa, tiếng Việt ngắn, dùng dấu chấm ngăn hàng nghìn theo chuẩn Việt Nam.

Các dạng cần luân phiên thực sự: bù tròn, tách–gộp, ước lượng, nhân/chia cấu
trúc, nhóm số hạng/thừa số, biểu thức, số còn thiếu, phép ngược, quy luật số,
đổi đơn vị, chu vi/diện tích tính nhanh, phân số–số thập phân phù hợp lớp 4,
đọc dữ liệu. Không gọi đây là đề thi Singapore/Trung Quốc và không sao chép đề.

## Phạm vi được sửa

- `data/curriculum.js`
- `app.js`
- `styles.css`
- `test/smoke.test.mjs`
- `REQUIREMENTS.md` nếu cần diễn giải ngắn.

Không sửa OAuth, API Gemini, Drive, IndexedDB schema, service worker, package,
server, hoặc cấu trúc nội dung Toán/Văn 36 tuần hiện tại.

## Hành vi UI

1. Giữ panel 6 tuần nền hiện có nguyên vẹn.
2. Sau panel đó, thêm “Kho tính nhẩm tiếp nối · Tuần 7–36”. Chỉ mở kho của tuần
   đang chọn hoặc tuần 7 mặc định; các tuần khác phải thu gọn để không tạo trang
   quá dài trên iPad.
3. Hiển thị rõ `Tuần N`, chủ đề kỹ năng, 5 buổi và số câu. Mở một buổi sẽ thấy
   gợi ý chiến lược và danh sách câu xuống dòng, không nối bằng dấu chấm phẩy.
4. Không thêm đồng hồ mới, không tự chấm, không tự gọi AI.
5. Mọi thẻ vẫn chạm được, đọc tốt tiếng Việt trên viewport iPad 628px.

## Dữ liệu và tiêu chí

- Có 30 tuần (7 đến 36), 150 nhóm, ít nhất 600 câu tổng cộng.
- Không có cùng một chuỗi câu hỏi được dùng lại giữa hai tuần.
- Mỗi tuần chứa ít nhất hai dạng tư duy khác nhau.
- Dữ liệu có thể sinh bằng hàm quyết định trong `data/curriculum.js`, nhưng kết
  quả phải ổn định theo tuần và có bài cụ thể, không dùng placeholder như “tự tạo
  một bài”.
- Viết test kiểm tra: phạm vi tuần, 5 nhóm/tuần, >=4 câu/nhóm, >=600 câu, mỗi
  nhóm có câu chiến lược, và UI renderer có panel mới.

## Kiểm tra bắt buộc

Chạy:

```sh
npm test
git diff --check
```

Trả về: các file đã đổi, mô tả ngắn về chiến lược sinh bài và kết quả hai lệnh.
