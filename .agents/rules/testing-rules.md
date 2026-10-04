# Quy tắc Kiểm thử & Tài nguyên Hệ thống (Testing & Resource Safeguard)

## Tôn chỉ: "Test đủ, nếu nhiều quá thì chia nhỏ ra mà test — Chống crash app"
- **Kiểm thử đầy đủ (Test đủ & Chặt chẽ)**: Đảm bảo độ phủ đầy đủ cho các tính năng quan trọng: barem điểm, ngân hàng câu hỏi, luồng nộp ảnh, chấm điểm, nộp lại, đồng bộ dữ liệu và tương tác giao diện. Không được bỏ qua các ca kiểm thử cốt lõi.
- **Chia nhỏ bộ test (Modularized Test Suites)**:
  - Khi số lượng test case nhiều, **BẮT BUỘC CHIA NHỎ** thành các file test độc lập theo từng module (ví dụ: `test/math-exam-rubric.test.mjs`, `test/math-exam-resubmit.test.mjs`, `test/tutor-stream.test.mjs`, `test/games.test.mjs`,...).
  - Tuyệt đối không dồn hàng trăm test nặng vào một file đơn lẻ gây nghẽn RAM, treo process hoặc crash môi trường.
  - Cho phép chạy từng suite riêng biệt hoặc chạy phân mảnh theo nhóm tính năng.
- **Bảo vệ tài nguyên & chống crash app**:
  - Dọn dẹp bộ nhớ (clean up event listener, timers, mock DOM node, base64 cache) sau mỗi suite.
  - Bộ nhớ trên thiết bị thật (iPad Safari) và môi trường phát triển luôn được giữ nhẹ, không rò rỉ.
