# Yêu cầu sản phẩm

- Bách mới lên lớp 4; chương trình phải ôn và chẩn đoán nền lớp 3 trong 6 tuần đầu.
- Lộ trình 36 tuần gồm Toán và Tiếng Việt, tăng dần tới bài suy luận/Olympic và bài văn mạch lạc đúng tuổi.
- Mỗi tuần có mục tiêu, cách học, đầu ra và cơ chế tự chữa.
- Chạy được trên web và Safari iPad, không cần cài app native.
- Gemini là AI trợ giảng bắt buộc, gọi online qua Vercel Serverless Function bằng OAuth server-side; không dùng API key trong browser.
- AGY chỉ là công cụ viết code và fallback local dev khi bật rõ ràng; không chạy trong production Vercel.
- Google Drive là DB online visible file `Bach Learning DB.json`, dùng `drive.file`; IndexedDB là cache local-first/offline.
- Có nhập tiếng Việt bằng giọng nói, transcript đưa vào ô text để kiểm tra/sửa trước khi gửi; luôn có bàn phím fallback. Bách viết Văn trên giấy rồi đọc trọn bài vào khung, không phải gõ từng chữ. Với Toán, có ô nhập đáp số và nút đọc cách giải; không bắt chụp/scan ở giai đoạn đầu. Câu trả lời của trợ giảng có thể được đọc bằng SpeechSynthesis tiếng Việt khi người dùng bấm nút, không tự phát âm thanh.
- Gemini không chỉ trả lời: được cung cấp bối cảnh tiến trình để đề xuất ôn lại, đổi phương pháp hoặc tăng/giảm thử thách; mọi thay đổi dữ liệu đều cần nút xác nhận rõ ràng.
- Bách học theo bộ **Kết nối tri thức với cuộc sống**, có tầng nâng cao chắt lọc từ phương pháp Singapore và văn học thế giới, không sao chép nguyên văn sách/bài mẫu.
- Nhịp học cố định: Thứ 2–6 là 25 phút cho mỗi môn, hết giờ thì dừng; Thứ 7 là 50 phút cho mỗi môn gồm mini-test, chữa lỗi, tổng kết và mục tiêu tuần sau.
- Mỗi ngày phải có phiếu bài học đầy đủ, trình bày thành một mạch dễ theo dõi; các bài tập hiển thị thành từng dòng riêng để Bách dễ đọc, không chỉ hiển thị tên mục tiêu.
- Cuối tuần Gemini có chế độ báo cáo cho phụ huynh, tổng hợp tiến bộ, điểm vướng/bất cập và việc cần làm tiếp theo; báo cáo lưu local-first và đồng bộ Drive khi có kết nối.
