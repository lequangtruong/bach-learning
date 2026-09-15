import fs from "fs";

const curriculumPath = "./data/curriculum.js";
let content = fs.readFileSync(curriculumPath, "utf8");

console.log("Bắt đầu chuẩn hóa toàn diện 72 bài học theo thẩm định DeepSeek Flash...");

// 1. TOÁN HỌC - TUẦN 1
// W1 D2: Sửa bài cơ bản từ cộng trừ sang đọc viết số và phân tích hàng
content = content.replace(
  `basic: "Câu 1: Tính nhẩm 3.998 + 2.007 và giải thích cách nhẩm gọn.\\nCâu 2: Tính nhẩm 7.250 − 1.999 và giải thích cách nhẩm gọn.",`,
  `basic: "Câu 1: Đọc số và viết số gồm: 4 chục nghìn, 8 nghìn, 3 trăm và 5 đơn vị.\\nCâu 2: Viết các số sau thành tổng theo từng hàng: 48.305; 27.046; 70.305.",`
);

// W1 D4: Thêm yêu cầu giải thích vào bài cơ bản so sánh
content = content.replace(
  `basic: "Sắp xếp 5 số theo thứ tự tăng dần: 45.200; 52.080; 49.999; 52.800; 45.020.",`,
  `basic: "Sắp xếp 5 số sau theo thứ tự tăng dần và giải thích chữ số ở hàng cao nhất quyết định thứ tự: 45.020; 45.200; 49.999; 52.080; 52.800.",`
);

// W1 D5: Sửa ví dụ mẫu và bài cơ bản làm tròn
content = content.replace(
  `example: "3.648 làm tròn đến trăm là 3.600 vì 48 < 50.",`,
  `example: "3.648 làm tròn đến hàng trăm là 3.600 vì chữ số hàng chục là 4 < 5.",`
);
content = content.replace(
  `basic: "Làm tròn 5 số sau đến hàng trăm và hàng nghìn: 3.648; 15.274; 48.910; 72.045; 89.960.",`,
  `basic: "Làm tròn 5 số sau đến hàng chục, hàng trăm và hàng nghìn: 3.648; 15.274; 48.910; 72.045; 89.960.",`
);

// W1 D6: Đổi tiêu đề và chuẩn hóa thuật ngữ bảng thống kê dân số
content = content.replace(
  `{ day: "Thứ 6", title: "Nói lại bằng lời của mình", objective: "Kết hợp đọc, tách, so sánh và làm tròn trong một tình huống.", example: "Đọc bảng điểm dân số nhỏ, chọn số lớn nhất rồi làm tròn.",`,
  `{ day: "Thứ 6", title: "Luyện tập tổng hợp: Đọc, so sánh và làm tròn số", objective: "Kết hợp đọc, tách, so sánh và làm tròn trong một tình huống thực tế.", example: "Đọc bảng thống kê dân số nhỏ, chọn số lớn nhất rồi làm tròn.",`
);

// W1 D7: Sửa ví dụ mẫu Mini-check 1
content = content.replace(
  `example: "Giải thích vì sao 70.050 không có chữ số hàng trăm.",`,
  `example: "Giải thích vì sao chữ số hàng trăm của số 70.050 bằng 0.",`
);

// 2. TOÁN HỌC - TUẦN 2
// W2 D3: Sửa gợi ý thử thách không lộ đáp án
content = content.replace(
  `hint: "Gợi ý 1: Trừ 500 rồi cộng 2; trừ tiếp 300 rồi cộng 2.\\nGợi ý 2: Ta có 1.500 − 500 − 300 + 4 = 704.\\nGợi ý 3: Thử lại bằng phép cộng ngược."`,
  `hint: "Gợi ý 1: Trừ 500 rồi cộng 2; trừ tiếp 300 rồi cộng 2.\\nGợi ý 2: Biểu thức chuyển thành 1.500 − 500 − 300 + 4, hãy nhẩm từng bước.\\nGợi ý 3: Thử lại bằng phép cộng ngược để kiểm tra kết quả."`
);

// W2 D4: Sửa thử thách tách số
content = content.replace(
  `challenge: "Tính nhẩm nhanh tổng 4 số: 125 + 236 + 75 + 64 bằng cách nhóm cặp số tròn.", hint: "Gợi ý 1: Nhóm (125 + 75) và (236 + 64).\\nGợi ý 2: Tính 200 + 300 = 500.\\nGợi ý 3: Kiểm tra không bỏ sót số nào."`,
  `challenge: "Tính nhẩm nhanh tổng: 125 + 236 + 75 + 64 bằng cách tách số và nhóm thành các cặp số tròn trăm.", hint: "Gợi ý 1: Tách và ghép cặp số có hàng đơn vị bù nhau: (125 + 75) và (236 + 64).\\nGợi ý 2: Tính tổng từng cặp tròn trăm rồi cộng lại.\\nGợi ý 3: Kiểm tra không bỏ sót số hạng nào."`
);

// W2 D5: Đổi tiêu đề và đa dạng số liệu
content = content.replace(
  `{ day: "Thứ 5", title: "Trừ theo phần thuận tiện", objective: "Chọn tách số hoặc đi đến số tròn khi trừ.", example: "754 − 298 = 754 − 300 + 2 = 456.", basic: "Tính nhẩm theo phần thuận tiện: (1) 450 − 180; (2) 754 − 298; (3) 1.520 − 690.",`,
  `{ day: "Thứ 5", title: "Trừ bằng cách thuận tiện (đưa về số tròn)", objective: "Chọn tách số hoặc đưa về số tròn chục, tròn trăm khi trừ.", example: "754 − 298 = 754 − 300 + 2 = 456.", basic: "Tính nhẩm bằng cách thuận tiện: (1) 450 − 180; (2) 863 − 397; (3) 1.520 − 690.",`
);
content = content.replace(
  `Gợi ý 2: Tính 754 − 300 + 2 = 456.`,
  `Gợi ý 2: Đưa 298 về số tròn: trừ 300 rồi cộng bù lại 2.`
);

// W2 D6: Sửa ví dụ mẫu ước lượng
content = content.replace(
  `example: "Nếu 450 + 280 gần 700 thì đáp án 1.730 chắc chắn sai.",`,
  `example: "Vì 450 + 280 = 730 nên ước lượng quanh 700, đáp án 1.730 chắc chắn sai.",`
);

// 3. TOÁN HỌC - TUẦN 3
// W3 D2: Sửa 18 x 5 thành 18 x 4 (gấp đôi liên tiếp)
content = content.replace(
  `basic: "Tính nhẩm bằng cách gấp đôi liên tiếp: (1) 15 × 4; (2) 25 × 8; (3) 35 × 4; (4) 18 × 5.",`,
  `basic: "Tính nhẩm bằng cách gấp đôi liên tiếp: (1) 15 × 4; (2) 25 × 8; (3) 35 × 4; (4) 18 × 4.",`
);
content = content.replace(
  `example: "6 × 8 = 3 × 8 × 2 = 48.",`,
  `example: "6 × 8 = (3 × 8) × 2 = 24 × 2 = 48.",`
);

// W3 D3: Sửa bài vận dụng không lộ đáp án
content = content.replace(
  `title: "Nhân với số tròn", objective: "Tách 9, 19 hoặc 29 thành số tròn dễ tính.",`,
  `title: "Nhân với số gần tròn (9, 19, 29)", objective: "Tách 9, 19 hoặc 29 thành số tròn chục để nhân nhẩm nhanh.",`
);
content = content.replace(
  `Tính tổng số chai nước đã nhập bằng cách lấy 20 × 6 − 6.`,
  `Tính tổng số chai nước đã nhập bằng cách tách 19 = 20 − 1 để nhẩm nhanh.`
);

// W3 D5: Bổ sung cặp đổi chỗ trong gợi ý
content = content.replace(
  `title: "Bảng nhân không học vẹt", objective: "Liên hệ phép nhân với diện tích mảng ô vuông và nhóm bằng nhau.",`,
  `title: "Bảng nhân và mô hình mảng ô vuông", objective: "Liên hệ phép nhân với số ô vuông trong mảng chữ nhật và các nhóm bằng nhau.",`
);
content = content.replace(
  `hint: "Gợi ý 1: 36 = 4 × 9 = 6 × 6 = 9 × 4.\\nGợi ý 2: Viết các cặp (4; 9) và (6; 6).\\nGợi ý 3: Kiểm tra không còn cặp nào khác."`,
  `hint: "Gợi ý 1: 36 = 4 × 9 = 6 × 6 = 9 × 4.\\nGợi ý 2: Viết đủ các cặp (4; 9), (9; 4) và (6; 6).\\nGợi ý 3: Kiểm tra không còn cặp nào khác có một chữ số."`
);

// W3 D6: Đổi tiêu đề thành Nhân nhẩm và đặt tính
content = content.replace(
  `title: "Nhân nhẩm rồi viết đủ", objective: "Biết chuyển từ nhẩm sang trình bày khi số lớn hơn.",`,
  `title: "Nhân nhẩm và đặt tính", objective: "Biết khi nào nhân nhẩm và khi nào cần đặt tính dọc với số nhiều chữ số.",`
);

// 4. TOÁN HỌC - TUẦN 4
// W4 D2: Tiêu đề chia đều và chia theo nhóm
content = content.replace(
  `title: "Chia là chia đều", objective: "Phân biệt chia đều với lập nhóm qua vật thật hoặc hình vẽ.",`,
  `title: "Chia đều và chia theo nhóm", objective: "Phân biệt chia đều (tìm số phần) và chia theo nhóm (tìm số lượng nhóm).",`
);

// W4 D4: Sửa giải thích số dư
content = content.replace(
  `hint: "Gợi ý 1: Thêm 1 đơn vị vào số bị chia thì số dư trở thành 5 + 1 = 6.\\nGợi ý 2: 6 chia hết cho 6 nên thương tăng 1 đơn vị và số dư mới là 0.`,
  `hint: "Gợi ý 1: Thêm 1 đơn vị vào số bị chia thì phần dư tăng lên 6; vì 6 chia hết cho 6 nên số dư mới là 0 và thương tăng 1 đơn vị.\\nGợi ý 2: Do đó phép chia mới trở thành phép chia hết.`
);

// W4 D5: Chuẩn hóa ví dụ ước lượng
content = content.replace(
  `example: "198÷4 gần 200÷4=50 nên thương khoảng 49–50.",`,
  `example: "198 ÷ 4. Ước lượng: 200 ÷ 4 = 50. Vì 198 < 200 nên thương nhỏ hơn 50 (kết quả: 49 dư 2).",`
);

// W4 D6: Chuẩn hóa sửa phép chia sai
content = content.replace(
  `example: "32÷6=5 dư 4 đúng vì 5×6+4=34? Sai; thương đúng là 5 dư 2.",`,
  `example: "32 ÷ 6 = 5 (dư 4) là SAI vì 5 × 6 + 4 = 34 ≠ 32. Phép chia đúng là 32 ÷ 6 = 5 (dư 2).",`
);

// 5. TOÁN HỌC - TUẦN 5
// W5 D2: Sửa tiêu đề và thứ tự phép tính
content = content.replace(
  `title: "Tính phần dễ trước", objective: "Giữ đúng thứ tự trong biểu thức đơn giản.", example: "6 + 4 × 5: tính 4×5 trước rồi cộng 6.",`,
  `title: "Thứ tự thực hiện phép tính", objective: "Tuân thủ quy tắc nhân chia trước, cộng trừ sau trong biểu thức.", example: "6 + 4 × 5 = 6 + 20 = 26: tính phép nhân trước rồi mới cộng.",`
);

// W5 D3: Đổi tiêu đề Tìm số chưa biết (Tìm x)
content = content.replace(
  `title: "Tìm số bị che", objective: "Dùng phép ngược để tìm số chưa biết.",`,
  `title: "Tìm số chưa biết (Tìm x)", objective: "Dùng phép tính ngược để tìm thành phần chưa biết trong phép tính.",`
);

// W5 D4: Tiêu đề quy luật dãy số
content = content.replace(
  `title: "Quy luật nhỏ", objective: "Nhìn sự thay đổi đều trong dãy số.",`,
  `title: "Quy luật dãy số", objective: "Nhận biết quy luật cộng đều và quy luật nhân trong dãy số.",`
);

// 6. TIẾNG VIỆT - TOÀN DIỆN TUẦN 1 ĐẾN 6
// Chuẩn hóa chính tả SGK Kết nối tri thức: kỉ vật, kỉ niệm (i ngắn)
content = content.replace(/kỷ vật/g, "kỉ vật");
content = content.replace(/Kỷ vật/g, "Kỉ vật");
content = content.replace(/kỷ niệm/g, "kỉ niệm");
content = content.replace(/Kỷ niệm/g, "Kỉ niệm");

// Chuẩn hóa tên gọi thử thách trong môn Tiếng Việt: Bỏ "Olympic"
content = content.replace(/bài toán Olympic/g, "bài toán thử thách");

// W4 D4: Chuẩn hóa đối thoại gạch đầu dòng
content = content.replace(
  `example: "Lời nói: “Nam nắm tay bạn bảo: ‘Đừng sợ, có tớ ở đây rồi!’”`,
  `example: "Lời nói:\\nNam nắm tay bạn bảo:\\n- Đừng sợ, có tớ ở đây rồi!"`
);

// W4 D6: Bỏ Oral Rehearsal
content = content.replace(
  `example: "Quy trình Oral Rehearsal: Nghĩ ý trong đầu → Nói thành tiếng mạch lạc → Lắng nghe chỗ ngập ngừng → Viết bản nháp hoàn chỉnh.",`,
  `example: "Quy trình diễn đạt bằng lời: Nghĩ ý trong đầu → Nói thành tiếng mạch lạc → Lắng nghe chỗ ngập ngừng → Viết bản nháp.",`
);
content = content.replace(
  `challenge: "Dùng tính năng ghi âm / nhận diện giọng nói (STT) đọc lại bài văn để kiểm tra xem máy có nhận diện rõ từng từ không.",`,
  `challenge: "Đọc to bài văn lại một lần nữa với giọng truyền cảm, nhấn mạnh vào những từ ngữ gợi tả cảm xúc chân thật nhất.",`
);

// W5 D4: Câu hỏi gợi mở cảm xúc thay vì câu hỏi tự nhiên
content = content.replace(
  `title: "Câu kể và Câu hỏi tự nhiên", objective: "Sử dụng linh hoạt câu kể (để cung cấp thông tin) và câu hỏi (để gợi mở cảm xúc, giao lưu với người đọc).",`,
  `title: "Câu kể và Câu hỏi gợi mở cảm xúc", objective: "Sử dụng linh hoạt câu kể (cung cấp thông tin) và câu hỏi gợi mở (bộc lộ cảm xúc, lôi cuốn người đọc).",`
);

// W5 D5: Ngữ liệu chính tả khớp các cặp phụ âm
content = content.replace(
  `“Buổi sáng mùa thu, ánh nắn xớm trải nhẹ trên con đường làng. Những chú chim sâu chuyền cành chong vòm lá xanh. Bác nông dân rảo bước da đồng, trên môi nở nụ cười tươi rói.”\\n(Gợi ý: Tìm 4 từ viết sai và viết lại cho đúng).`,
  `“Buổi sáng mùa thu, ánh nắng xớm trải nhẹ trên con đường làng. Những chú chim sâu chuyền cành chong vòm lá xanh. Bác nông dân rảo bước da đồng, trông thật sung xướng.”\\n(Gợi ý: Tìm 4 lỗi chính tả s/x, ch/tr, d/r: xớm → sớm; chong → trong; da → ra; sung xướng → sung sướng).`
);
content = content.replace(
  `hint: "Mẹo chính tả: Các từ chỉ đồ vật trong nhà thường đi với 'ch' (chăn, chiếu, chảo); các từ chỉ cây cối, tự nhiên thường đi với 'tr' (tre, trúc, trời)."`,
  `hint: "Mẹo chính tả: Phân biệt theo nghĩa và phát âm chuẩn; từ ghép thường đi liền cặp thanh điệu và từ láy âm đầu."`
);

// W5 D6: Hoa mướp vàng rực
content = content.replace(
  `applied: "Sửa câu cụt sau thành câu hoàn chỉnh, giàu hình ảnh: 'Đang nở rộ trên giàn mướp vàng rực.'",`,
  `applied: "Sửa câu cụt sau thành câu hoàn chỉnh, giàu hình ảnh: 'Đang nở rộ trên giàn, những bông hoa mướp vàng rực.'",`
);
content = content.replace(
  `hint: "Mẹo nhỏ: Khi thấy một câu có từ 3 chữ 'và' trở lên, hãy thay chữ 'và' thứ hai bằng dấu chấm để tách thành 2 câu rõ ý."`,
  `hint: "Mẹo nhỏ: Khi tách câu dài, hãy thay từ nối bằng dấu chấm và kiểm tra lại xem câu mới đã có đủ Chủ ngữ và Vị ngữ chưa."`
);

// W6 D3: Khớp 4 giác quan
content = content.replace(
  `objective: "Rèn luyện đôi mắt quan sát tinh tế ngoài đời thực: ghi chép lại những hình ảnh, âm thanh, mùi vị thật từ cuộc sống xung quanh.",`,
  `objective: "Rèn luyện đôi mắt quan sát tinh tế ngoài đời thực: ghi chép lại những hình ảnh, âm thanh, mùi hương và cảm giác xúc giác từ cuộc sống xung quanh.",`
);

// W6 D4: Khung dàn ý tả cây bóng mát
content = content.replace(
  `example: "Dàn ý 3 phần: Mở bài (1 gạch đầu dòng: Tên đồ vật + cảm xúc) → Thân bài (3 gạch đầu dòng: Hình dáng, công dụng, kỉ niệm) → Kết bài (1 gạch đầu dòng: Lời hứa giữ gìn).",`,
  `example: "Dàn ý 3 phần tả cây: Mở bài (Tên cây + vị trí trồng) → Thân bài (Bao quát tán lá, chi tiết thân/gốc, hoạt động dưới bóng cây) → Kết bài (Tình cảm gắn bó với cây).",`
);

// W6 D5: Sửa thể loại từ "câu chuyện" thành "bài văn tả cây"
content = content.replace(
  `example: "Quy tắc Bản 1: Viết nhanh, viết thật, viết liên tục cho xong toàn bộ câu chuyện; để dành việc sửa lỗi chính tả cho Bản 2.",`,
  `example: "Quy tắc Bản 1: Viết nhanh, viết thật, viết liên tục cho xong toàn bộ bài văn tả cây; để dành việc sửa lỗi chính tả cho Bản 2.",`
);
content = content.replace(
  `challenge: "Thêm một câu đối thoại ngắn hoặc câu hỏi tu từ vào bài viết để tăng tính hấp dẫn.",`,
  `challenge: "Thêm một câu so sánh hoặc nhân hóa thật sinh động (Ví dụ: 'Tán cây xòe rộng như chiếc ô xanh khổng lồ') vào bài văn.",`
);

// W6 D6: Đầy đủ 4 bước biên tập (Ý - Câu - Từ - Chính tả)
content = content.replace(
  `basic: "Lấy bài viết Bản 1 hôm qua ra và thực hiện 3 cải tiến:\\n(1) Tìm và gạch bỏ 1 từ hoặc 1 câu thừa thãi, lặp ý.\\n(2) Thay thế 1 tính từ chung chung bằng 1 từ gợi tả màu sắc hoặc âm thanh sinh động.\\n(3) Sửa lại tất cả các lỗi chính tả, dấu câu và viết lại thành Bản 2 sạch đẹp.",`,
  `basic: "Lấy bài viết Bản 1 hôm qua ra và thực hiện đủ 4 bước biên tập:\\n(1) Rà Ý: Gạch bỏ 1 ý thừa thãi, lặp ý.\\n(2) Rà Câu: Sửa 1 câu cụt hoặc tách 1 câu quá dài cho rõ ý.\\n(3) Rà Từ: Thay 1 từ chung chung bằng từ gợi hình ảnh, âm thanh sống động.\\n(4) Rà Chính tả: Sửa lỗi chính tả, dấu câu và chép lại Bản 2 sạch đẹp.",`
);

// W6 D7: Chuẩn hóa bài Mini-check 6 "Món quà của bố"
content = content.replace(
  `Phần 1 - Đọc hiểu văn bản (20 phút): Đọc bài 'Kỉ vật của cha':\\n“Trước ngày đi công tác xa, bố tặng em một chiếc bút mực màu xanh thẫm.`,
  `Phần 1 - Đọc hiểu văn bản (20 phút): Đọc bài 'Món quà của bố':\\n“Trước ngày đi công tác xa, bố tặng em một chiếc bút mực màu xanh thẫm.`
);

fs.writeFileSync(curriculumPath, content, "utf8");
console.log("✓ Đã cập nhật xong data/curriculum.js với đầy đủ các chuẩn mực sư phạm!");
