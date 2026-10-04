# Quy tắc Dự án Bách Learning Lab (Workspace Rules)

## 1. Tôn chỉ Kiểm thử & Tài nguyên: "Test đủ, nếu nhiều quá thì chia nhỏ ra mà test"
- **Test đủ & bảo đảm chất lượng**: Mọi tính năng cốt lõi (ngân hàng đề 36 tuần, barem điểm, xử lý stream, luồng chấm bài/phản hồi/nộp lại, bảo mật API) đều phải được kiểm thử đầy đủ và chặt chẽ.
- **Chia nhỏ bộ test khi quy mô lớn**:
  - Không gom dồn thành một file test khổng lồ gây ngốn RAM hoặc crash ứng dụng/test runner.
  - Phân rã test suite thành các module độc lập, chuyên biệt (`test/*.test.mjs`), giải phóng bộ nhớ (cleanup) sau mỗi suite.
- **Bảo vệ tài nguyên & chống crash iPad Safari**:
  - Giải phóng chuỗi base64 ảnh ngay khi kết thúc phiên hoặc xử lý xong; không để rò rỉ RAM trên trình duyệt di động.
  - Xử lý ngắt kết nối stream (SSE) an toàn, hiển thị rõ trạng thái và cho phép học sinh thử lại mà không mất dữ liệu.

## 2. Trải nghiệm Học tập của Bách
- Thời lượng học Thứ 7: 40 phút/môn (chuẩn 1 tiết học), các ngày trong tuần 25 phút/môn.
- Xưng hô trợ giảng AI: xưng "mình", gọi "Bách" (không xưng thầy/cô, không gọi "con").
