# Hợp đồng tác vụ: câu chữ tiểu học và bài tập tự đủ

## Mục tiêu

Sửa cách diễn đạt của bài học Toán/Văn để Bách lớp 4 đọc một lần là hiểu việc cần làm.
Không chỉ sửa tuần 1: áp dụng cơ chế hiển thị nhất quán cho toàn bộ 36 tuần.

## Quy tắc nội dung bắt buộc

1. Một câu hỏi hoặc một thao tác trên một dòng. Không ghép hai phép tính hoặc nhiều yêu cầu
   bằng dấu `;` trong “Bách tự làm”, “Đề riêng” hay “Gợi ý”.
2. Mỗi đề tự chứa dữ kiện. Không nói “trong đề”, “ở trên”, “đề riêng hôm nay” nếu chưa chỉ rõ
   số liệu/câu đang nhắc đến.
3. Lời văn ngắn, động từ rõ: “Viết”, “Đọc”, “Tính”, “Vẽ”, “Giải thích”. Không dùng các cụm
   trừu tượng như “điều vẫn giữ nguyên”, “nâng tầm”, “biến thể” khi không giải thích ngay.
4. Với bảng giá trị hàng, dùng mẫu Việt chuẩn: “Hàng chục nghìn là …; hàng nghìn là …” và yêu
   cầu tách rõ “a) Viết số. b) Đọc số.” Không đưa đáp án vào đề luyện.
5. Tại tuần 1 ngày 1, tách `3.998 + 2.007` và `7.250 − 1.999` thành hai câu riêng; viết lại
   bài nâng cao, ba gợi ý và tự kiểm tra thành các bước ngắn, cụ thể.
6. “Mở rộng học sinh giỏi” phải nói rõ bài nào làm thêm và việc cụ thể, không dùng khẩu hiệu.

## Quy tắc hiển thị

- `Gợi ý`, `Bài nâng cao`, `Tự kiểm tra`, `Biến thể`/bài làm thêm phải hiển thị từng bước/bullet
  nếu chứa nhiều ý, không nối chuỗi bằng paragraph.
- Khối nộp Toán ghi rõ: “Nộp đáp án câu 1 để AI xem”; nhắc Bách có thể chọn một câu khác và nói
  rõ số câu trong ô cách giải. Không được ám chỉ AI chấm toàn bộ khi app chỉ có một ô đáp số.

## Phạm vi

Chỉ `data/curriculum.js`, `app.js`, `styles.css`, `test/smoke.test.mjs`.
Không đổi OAuth, Drive, API, timer, cấu trúc 36 tuần hay độ khó khá–giỏi.

## Kiểm chứng

- Test dữ liệu tuần 1 ngày 1 có các câu tách riêng và không chứa những cụm mơ hồ bị nêu.
- Test renderer dùng danh sách bước cho gợi ý/nâng cao và nhãn nộp câu rõ ràng.
- `npm test`, syntax check, `git diff --check` thành công.
