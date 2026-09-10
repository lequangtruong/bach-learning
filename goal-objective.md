# Mục tiêu: Hoàn thiện Bách Learning Lab

Hoàn thành ứng dụng web/PWA cho iPad Safari giúp Bách (chuẩn bị vào lớp 4) học Toán và Tiếng Việt hằng ngày. Sản phẩm phải dùng được thật, nội dung học có chất lượng, AI can thiệp vào tiến trình học và dữ liệu được lưu an toàn theo mô hình local-first + Google Drive.

## 1. Đối tượng và nhịp học

- Bách là học sinh giỏi, không học lại theo kiểu mất gốc; điểm cần nâng rõ nhất là tốc độ tính nhẩm, chiến lược giải và chất lượng trình bày.
- Bám chương trình lớp 3–4, bộ Kết nối tri thức với cuộc sống; 6 tuần đầu vừa chẩn đoán vừa bù nền lớp 3 có chọn lọc.
- Mỗi tuần có Toán và Tiếng Việt:
  - Thứ 2–6: 25 phút/môn/ngày; hết giờ thì dừng, không ép học bù.
  - Thứ 7: 50 phút/môn gồm mini-test, chữa lỗi, tổng kết và mục tiêu tuần sau.
- Có lộ trình 36 tuần; mỗi tuần có 6 buổi học thật, không chỉ tiêu đề hoặc câu mẫu chung.

## 2. Chất lượng chương trình Toán

- SGK Kết nối tri thức là trục tiến độ bắt buộc.
- Chắt lọc phương pháp từ Singapore: CPA, bar model, biểu diễn trực quan, Polya, vẽ hình, lập bảng, thử–kiểm tra, làm việc ngược, xét trường hợp, kiểm tra bằng cách khác.
- Có tầng suy luận/Olympic tăng dần, gồm bài mô phỏng theo tinh thần Singapore/Trung Quốc; mọi bài phải là bài gốc do app biên soạn, không tự nhận là đề thi thật hay sao chép đề/sách.
- Mỗi buổi Toán phải có đề tự chứa, dữ kiện rõ, ví dụ, bài lõi, bài vận dụng, thử thách, tự kiểm tra và cách nhập đáp số/cách giải.
- Nền tính nhẩm 8–10 phút: chính xác → nói chiến lược → mới tính thời gian; không dùng máy tính bỏ túi.
- Nếu Bách làm nhanh nhưng chất lượng/lập luận thấp, AI tăng số bài hoặc độ khó có kiểm soát ở buổi sau; nếu Bách còn vướng, AI quay lại đúng kỹ năng thiếu thay vì hạ cả chương trình xuống mức dễ.

## 3. Chất lượng chương trình Tiếng Việt

- Bách viết rõ ý, có mạch, giàu chi tiết thật nhưng vẫn đúng độ tuổi; không biến bài văn thành văn mẫu người lớn.
- Trục kỹ năng: đọc hiểu có bằng chứng → nói/lập ý → viết bản 1 → đọc thành tiếng → sửa ý/câu/từ/chính tả → lưu bản tốt hơn.
- Chắt lọc kỹ thuật từ chương trình literacy và văn học thế giới: điểm nhìn, nhân vật có lựa chọn, chi tiết quan sát, nhịp câu, đối thoại, biên tập. Không sao chép tác phẩm, đoạn mẫu hay áp đặt văn phong.
- Bách viết trên giấy trước; sau đó đọc bài vào ô nhập bằng giọng nói để AI nhận xét. Luôn có bàn phím làm phương án dự phòng.

## 4. AI trợ giảng và giọng nói

- Gemini là AI trợ giảng online chính, không phải AGY.
- Gemini dùng Google OAuth qua Vercel Serverless Function; không đặt Gemini API key hay Client Secret trong trình duyệt.
- AI biết môn, tuần, bài hiện tại, kết quả, cách giải, phản hồi độ khó và lịch sử gần đây.
- AI chỉ gợi ý theo từng nấc, không làm hộ bài; phản hồi Toán phải xem cả đáp số, chiến lược và lập luận; phản hồi Văn phải xem ý, mạch, chi tiết, câu và chính tả.
- Khi AI xử lý, giao diện phải hiện rõ “AI đang suy nghĩ…”.
- Có nhập giọng nói tiếng Việt và đọc phản hồi bằng giọng nữ nhẹ nhàng khi người dùng bấm; không tự bật micro hoặc tự phát âm thanh.

## 5. Dữ liệu, đồng bộ và triển khai

- Web/PWA responsive cho iPad, mobile và desktop; giao diện tiếng Việt có dấu phải có nhịp dòng, cỡ chữ và khoảng cách phù hợp.
- IndexedDB là cache và nguồn hoạt động offline trên iPad.
- Google Drive dùng OAuth `drive.file`, lưu file `Bach Learning DB.json` nhìn thấy được trong Drive.
- Ghi cục bộ trước; đồng bộ Drive khi có mạng; có trạng thái đồng bộ rõ ràng.
- Triển khai trên Vercel; API Gemini chạy server-side.
- Có báo cáo cuối tuần cho phụ huynh: đã học, tiến bộ quan sát được, điểm vướng, điều chỉnh độ khó và việc nên làm tuần sau. Không bịa điểm số khi chưa có dữ liệu.

## 6. Nguồn tham chiếu và tính truy xuất

- Lập ma trận nguồn → kỹ năng → nhóm tuần → dạng bài → tiêu chí đánh giá.
- Nguồn chuẩn:
  1. CTGDPT Việt Nam/Kết nối tri thức: trục kiến thức và tiến độ.
  2. Singapore MOE Primary Mathematics: phương pháp giải quyết vấn đề và heuristic.
  3. Singapore MOE Primary English: tích hợp đọc–nói–viết, luyện nói, viết nháp và biên tập.
  4. Open-source apps: chỉ tham khảo kiến trúc/kỹ thuật, không phải thẩm quyền chương trình học.
- Không gắn nhãn Singapore/Trung Quốc nếu chưa có nguồn và cách áp dụng cụ thể.

## 7. Quy trình triển khai theo AI Support Kit

- Áp dụng AI Support Kit như chuẩn kỹ thuật làm phần mềm: artifact-first, spec rõ, phạm vi task nhỏ, evidence, test, review, không để agent tự suy diễn yêu cầu.
- AGY là worker viết code:
  - Mỗi task phải có phạm vi file, tiêu chí chấp nhận, điều cấm sửa và lệnh kiểm tra.
  - AGY không tự quyết định kiến trúc hay thay đổi yêu cầu sản phẩm.
- Sol low là reviewer độc lập:
  - Review diff, luồng dữ liệu, UX, bảo mật OAuth/Drive, offline, regression và test coverage.
  - Reviewer không tự viết lại cùng diff; lỗi trả về AGY sửa theo vòng giới hạn.
- Astra low chỉ dùng khi cần quyết định kiến trúc/phương hướng quan trọng, với đầu ra ngắn; không dùng để code hàng loạt.
- Mọi thay đổi chỉ được coi là xong khi có kiểm thử, kiểm tra giao diện iPad/web và bằng chứng tương ứng.

## 8. Tiêu chí hoàn thành

Ứng dụng chỉ được coi là hoàn thành khi:

1. Bách có thể học trọn một buổi Toán hoặc Văn trên iPad.
2. Mỗi bài hiện đề và nhiệm vụ cụ thể, không có nội dung mẫu lặp/mơ hồ.
3. AI Gemini, giọng nói, lưu cục bộ và đồng bộ Drive hoạt động theo đúng luồng OAuth.
4. AI có thể cá nhân hóa độ khó và tạo báo cáo cuối tuần dựa trên dữ liệu thật.
5. 36 tuần có nội dung, nguồn tham chiếu và kiểm thử chống hồi quy.
6. Giao diện đạt mức rõ ràng, ít phân tâm, dễ đọc tiếng Việt trên iPad/mobile/web.
7. Toàn bộ implementation được AGY thực hiện theo task contract, qua Sol low review và kiểm tra thực tế.