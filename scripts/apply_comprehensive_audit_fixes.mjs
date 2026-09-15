import fs from "fs";

console.log("=== BẮT ĐẦU CẬP NHẬT TOÀN DIỆN 72 BÀI HỌC THEO THẨM ĐỊNH DEEPSEEK FLASH ===");

const curriculumFile = "./data/curriculum.js";
let content = fs.readFileSync(curriculumFile, "utf8");

// Load object bridgeDailyLessons vào Node
global.window = {};
new Function("window", content)(global.window);
const bridge = global.window.BACH_CURRICULUM.bridgeDailyLessons;

if (!bridge || !bridge.math || !bridge.vietnamese) {
  throw new Error("Không thể load bridgeDailyLessons từ data/curriculum.js");
}

// ==========================================
// 1. MÔN TOÁN: SỬA TẤT CẢ CÁC BÀI CẦN CẢI THIỆN
// ==========================================

// Tuần 1 - Thứ 2
const m_w1_d2 = bridge.math[0].days[0];
m_w1_d2.title = "Đọc, viết số và giá trị các hàng";
m_w1_d2.objective = "Đọc, viết số đến 100.000 và tính nhẩm nhanh với số tròn.";
m_w1_d2.basic = "Câu 1: Tính nhẩm 3.998 + 2.007 và giải thích cách nhẩm gọn.\nCâu 2: Tính nhẩm 7.250 − 1.999 và giải thích cách nhẩm gọn.";

// Tuần 1 - Thứ 4
const m_w1_d4 = bridge.math[0].days[2];
m_w1_d4.basic = "Sắp xếp 5 số theo thứ tự tăng dần: 45.200; 52.080; 49.999; 52.800; 45.020.";
m_w1_d4.selfCheck = "Khoanh chữ số ở hàng đầu tiên khác nhau từ trái sang phải khi so sánh hai số và giải thích lý do chữ số hàng cao nhất quyết định thứ tự.";

// Tuần 1 - Thứ 5
const m_w1_d5 = bridge.math[0].days[3];
m_w1_d5.example = "3.648 làm tròn đến hàng trăm được 3.600 vì chữ số hàng chục là 4 < 5.";
m_w1_d5.basic = "Làm tròn 5 số sau đến hàng chục, hàng trăm và hàng nghìn: 3.648; 15.274; 48.910; 72.045; 89.960.";

// Tuần 1 - Thứ 6
const m_w1_d6 = bridge.math[0].days[4];
m_w1_d6.title = "Luyện tập tổng hợp: Đọc, so sánh và làm tròn số";
m_w1_d6.objective = "Kết hợp đọc, tách, so sánh và làm tròn trong một tình huống thực tế.";
m_w1_d6.example = "Đọc bảng thống kê dân số, chọn số lớn nhất rồi làm tròn.";
m_w1_d6.applied = "Bảng thống kê dân số 3 xã: Xã A có 24.500 người, Xã B có 31.200 người, Xã C có 19.800 người. Làm tròn mỗi số đến hàng nghìn rồi tính tổng để ước lượng dân số cả 3 xã.";

// Tuần 1 - Thứ 7
const m_w1_d7 = bridge.math[0].days[5];
m_w1_d7.example = "Giải thích vì sao số 70.050 có chữ số hàng trăm bằng 0 (70.050 = 7 chục nghìn + 0 nghìn + 0 trăm + 5 chục + 0 đơn vị).";
m_w1_d7.basic = "Làm 6 câu: (1) Đọc số 85.040; (2) Viết số gồm 7 chục nghìn, 3 trăm và 5 đơn vị; (3) So sánh 48.500 và 48.099; (4) Sắp xếp 5 số: 12.000, 9.800, 15.400, 11.500, 9.080; (5) Làm tròn 27.650 đến hàng nghìn; (6) Tính nhẩm 40.000 + 30.000.";

// Tuần 2 - Thứ 3
const m_w2_d3 = bridge.math[1].days[1];
m_w2_d3.hint = "Gợi ý 1: Trừ 500 rồi cộng 2; trừ tiếp 300 rồi cộng 2.\nGợi ý 2: Biểu thức chuyển thành: 1.500 − 500 − 300 + 4, hãy nhẩm từng bước.\nGợi ý 3: Thử lại bằng phép cộng ngược để kiểm tra kết quả.";

// Tuần 2 - Thứ 4
const m_w2_d4 = bridge.math[1].days[2];
m_w2_d4.challenge = "Tính nhẩm nhanh tổng: 125 + 236 + 75 + 64 bằng cách tách số và nhóm thành các cặp số tròn trăm.";
m_w2_d4.hint = "Gợi ý 1: Tách và ghép cặp số có hàng đơn vị bù nhau: (125 + 75) và (236 + 64).\nGợi ý 2: Tính tổng từng cặp tròn trăm: 125 + 75 = ? và 236 + 64 = ? rồi cộng hai tổng đó.\nGợi ý 3: Kiểm tra không bỏ sót số hạng nào.";

// Tuần 2 - Thứ 5
const m_w2_d5 = bridge.math[1].days[3];
m_w2_d5.title = "Trừ bằng cách thuận tiện (đưa về số tròn)";
m_w2_d5.objective = "Chọn tách số hoặc đưa về số tròn chục, tròn trăm khi trừ.";
m_w2_d5.basic = "Tính nhẩm bằng cách thuận tiện: (1) 450 − 180; (2) 863 − 397; (3) 1.520 − 690.";
m_w2_d5.hint = "Gợi ý 1: x = 754 − 298.\nGợi ý 2: Đưa 298 về số tròn: trừ 300 rồi cộng bù lại 2.\nGợi ý 3: Thay x vào lại để kiểm tra.";

// Tuần 2 - Thứ 6
const m_w2_d6 = bridge.math[1].days[4];
m_w2_d6.example = "Vì 450 + 280 = 730 nên ước lượng quanh 700, đáp án 1.730 chắc chắn sai.";
m_w2_d6.basic = "Chỉ ra lỗi sai và sửa lại cho đúng (sau mỗi phép tính, ước lượng kết quả để kiểm tra): (1) 398 + 45 = 445; (2) 620 − 198 = 420; (3) 450 + 280 = 1.730.";

// Tuần 2 - Thứ 7
const m_w2_d7 = bridge.math[1].days[5];
m_w2_d7.basic = "Làm 6 câu (chọn cách tính thuận tiện và thử lại): (1) 198 + 57; (2) 499 + 326; (3) 540 − 199; (4) 830 − 395; (5) 1.000 − 345; (6) 2.450 + 998.";

// Tuần 3 - Thứ 2
const m_w3_d2 = bridge.math[2].days[0];
m_w3_d2.example = "3 × 8 = 24; gấp đôi 24 được 48, vậy 6 × 8 = (3 × 8) × 2 = 48.";
m_w3_d2.basic = "Tính nhẩm bằng cách gấp đôi liên tiếp: (1) 15 × 4; (2) 25 × 8; (3) 35 × 4; (4) 18 × 4.";

// Tuần 3 - Thứ 3
const m_w3_d3 = bridge.math[2].days[1];
m_w3_d3.title = "Nhân nhẩm với 9, 19, 29";
m_w3_d3.objective = "Tách 9 = 10 − 1, 19 = 20 − 1 hoặc 29 = 30 − 1 để nhân nhẩm nhanh.";
m_w3_d3.applied = "Một cửa hàng nhập về 19 thùng nước khoáng, mỗi thùng 6 chai. Em hãy chọn cách tính nhẩm nhanh nhất để tính tổng số chai nước đã nhập.";

// Tuần 3 - Thứ 5
const m_w3_d5 = bridge.math[2].days[3];
m_w3_d5.title = "Bảng nhân và mô hình mảng ô vuông";
m_w3_d5.objective = "Liên hệ phép nhân với số ô vuông trong mảng chữ nhật và các nhóm bằng nhau.";
m_w3_d5.basic = "Nêu mảng ô vuông và viết phép nhân tương ứng: (1) 4 hàng, mỗi hàng 6 ô; (2) 5 hàng, mỗi hàng 8 ô; (3) 7 hàng, mỗi hàng 9 ô.";
m_w3_d5.challenge = "Tìm tất cả các cặp số tự nhiên có một chữ số (kể cả trường hợp đổi chỗ) có tích bằng 36.";
m_w3_d5.hint = "Gợi ý 1: 36 = 4 × 9 = 6 × 6 = 9 × 4.\nGợi ý 2: Viết đủ các cặp (4; 9), (9; 4) và (6; 6).\nGợi ý 3: Kiểm tra không còn cặp nào khác có một chữ số.";

// Tuần 3 - Thứ 6
const m_w3_d6 = bridge.math[2].days[4];
m_w3_d6.title = "Nhân nhẩm và đặt tính";
m_w3_d6.objective = "Biết khi nào nhân nhẩm và khi nào cần đặt tính dọc với số nhiều chữ số.";
m_w3_d6.basic = "Thực hiện phép tính (ghi rõ câu nào nhẩm, câu nào đặt tính): (1) 34 × 5; (2) 45 × 3; (3) 18 × 6; (4) Đặt tính: 148 × 6.";
m_w3_d6.reasoning = "Khi nhân số lớn như 148 × 6, vì sao nên đặt tính dọc thay vì chỉ tính nhẩm?";

// Tuần 3 - Thứ 7
const m_w3_d7 = bridge.math[2].days[5];
m_w3_d7.basic = "Tính 6 câu (với câu 2 và 4, hãy nêu ít nhất hai cách nhẩm khác nhau): (1) 16 × 4; (2) 25 × 4; (3) 14 × 8; (4) 18 × 5; (5) 34 × 9; (6) 45 × 11.";

// Tuần 4 - Thứ 2: Sửa bài cơ bản chia đều và theo nhóm
const m_w4_d2 = bridge.math[3].days[0];
m_w4_d2.title = "Chia đều và chia theo nhóm";
m_w4_d2.objective = "Phân biệt chia đều (tìm số phần) và chia theo nhóm (tìm số lượng nhóm).";
m_w4_d2.basic = "Viết phép chia tương ứng và chỉ rõ là chia đều hay chia theo nhóm:\n(1) Có 24 cái kẹo, chia đều cho 6 bạn: 24 ÷ 6 = 4 (cái kẹo/bạn) [chia đều];\n(2) Có 24 cái kẹo, chia mỗi túi 4 cái: 24 ÷ 4 = 6 (túi) [chia theo nhóm];\n(3) Xếp đều 48 cái bánh vào 8 đĩa: 48 ÷ 8 = 6 (cái bánh/đĩa) [chia đều].";

// Tuần 4 - Thứ 3
const m_w4_d3 = bridge.math[3].days[1];
m_w4_d3.hint = "Gợi ý 1: Tìm phép nhân từ ba số 6, 8, 48 trước.\nGợi ý 2: Từ phép nhân đó, viết phép nhân giao hoán và hai phép chia tương ứng.\nGợi ý 3: Kiểm tra đủ 2 phép nhân và 2 phép chia.";

// Tuần 4 - Thứ 4
const m_w4_d4 = bridge.math[3].days[2];
m_w4_d4.hint = "Gợi ý 1: Thêm 1 đơn vị vào số bị chia thì phần dư tăng lên 6; vì 6 chia hết cho 6 nên số dư mới là 0 và thương tăng 1 đơn vị.\nGợi ý 2: Do đó phép chia mới trở thành phép chia hết, số dư bằng 0.\nGợi ý 3: Thử với số cụ thể: 11 ÷ 6 = 1 (dư 5) → 12 ÷ 6 = 2 (dư 0).";

// Tuần 4 - Thứ 5
const m_w4_d5 = bridge.math[3].days[3];
m_w4_d5.title = "Ước lượng thương trong phép chia";
m_w4_d5.objective = "Ước lượng thương trước khi thực hiện phép chia có dư.";
m_w4_d5.example = "198 ÷ 4. Ước lượng: 200 ÷ 4 = 50. Vì 198 < 200 nên thương nhỏ hơn 50 (kết quả: 49 dư 2).";
m_w4_d5.applied = "Cuốn truyện dày 180 trang. Ước lượng khoảng bao nhiêu ngày nếu mỗi ngày đọc 8 trang, rồi tính chính xác số ngày cần đọc xong cuốn truyện.";

// Tuần 4 - Thứ 6
const m_w4_d6 = bridge.math[3].days[4];
m_w4_d6.example = "32 ÷ 6 = 5 (dư 4) là SAI vì 5 × 6 + 4 = 34 ≠ 32. Phép chia đúng là 32 ÷ 6 = 5 (dư 2).";
m_w4_d6.basic = "Chỉ ra lỗi sai và viết lại phép chia đúng: (1) 32 ÷ 6 = 5 (dư 4) [sai số dư]; (2) 47 ÷ 5 = 8 (dư 7) [số dư > số chia]; (3) 84 ÷ 4 = 22 [sai ở thương].";

// Tuần 4 - Thứ 7
const m_w4_d7 = bridge.math[3].days[5];
m_w4_d7.reasoning = "Có 46 m vải may quần áo hết 3 m/bộ thì may được 15 bộ thừa 1 m. Cần thêm ít nhất bao nhiêu mét vải nữa để may được thêm 1 bộ mà không thừa vải?";
m_w4_d7.basic = "Tính 6 câu và thử lại câu (4) bằng phép nhân: (1) 72 ÷ 8; (2) 84 ÷ 7; (3) 96 ÷ 6; (4) 53 ÷ 7 (thương và dư? thử lại 7 × thương + dư); (5) 68 ÷ 9; (6) 140 ÷ 5.";

// Tuần 5 - Thứ 2
const m_w5_d2 = bridge.math[4].days[0];
m_w5_d2.title = "Thứ tự thực hiện phép tính";
m_w5_d2.objective = "Tuân thủ quy tắc nhân chia trước, cộng trừ sau trong biểu thức.";
m_w5_d2.example = "6 + 4 × 5 = 6 + 20 = 26: tính phép nhân trước rồi mới cộng.";
m_w5_d2.reasoning = "Bạn An tính 6 + 4 × 5 = 10 × 5 = 50. Bạn An sai ở bước nào? Vì sao?";
m_w5_d2.hint = "Gợi ý 1: Muốn kết quả lớn hơn, cần nhân cả tổng (6 + 4) với 5.\nGợi ý 2: Dùng ngoặc đơn để chỉ phép tính cần ưu tiên làm trước.\nGợi ý 3: Kiểm tra: (6 + 4) × 5 = 10 × 5 = 50.";

// Tuần 5 - Thứ 3
const m_w5_d3 = bridge.math[4].days[1];
m_w5_d3.title = "Tìm số chưa biết (Tìm x)";
m_w5_d3.applied = "Một rạp chiếu phim có 250 vé. Sau buổi sáng bán vé, trong rạp còn lại 65 vé. Viết biểu thức tìm số vé đã bán và tính kết quả.";

// Tuần 5 - Thứ 4
const m_w5_d4 = bridge.math[4].days[2];
m_w5_d4.title = "Quy luật dãy số";
m_w5_d4.objective = "Nhận biết quy luật cộng/trừ đều và quy luật nhân trong dãy số.";
m_w5_d4.hint = "Gợi ý 1: Mỗi số hạng liên tiếp hơn kém nhau 3 đơn vị.\nGợi ý 2: Từ số thứ nhất đến số thứ 10 có (10 − 1) = 9 khoảng cách.\nGợi ý 3: Lấy 1 + 9 × 3 = 28; liệt kê 10 số để kiểm tra lại.";

// Tuần 5 - Thứ 6
const m_w5_d6 = bridge.math[4].days[4];
m_w5_d6.example = "Con tính phần trong ngoặc trước, rồi nhân chia, cuối cùng cộng trừ theo thứ tự thực hiện phép tính.";
m_w5_d6.applied = "Dùng các số 2, 3, 5 (mỗi số dùng đúng 1 lần) và các dấu +, ×, dấu ngoặc để lập một biểu thức có giá trị bằng 25.";
m_w5_d6.hint = "Gợi ý 1: Tìm hai số trung gian có tích hoặc hiệu bằng 24.\nGợi ý 2: Ta có 25 − 1 = 24, tức là (5 × 5) − (5 ÷ 5).\nGợi ý 3: Kiểm tra thứ tự: nhân và chia trước, rồi thực hiện phép trừ.";

// Tuần 6 - Thứ 2
const m_w6_d2 = bridge.math[5].days[0];
m_w6_d2.basic = "Làm tròn các số đến hàng chục (hoặc hàng trăm) rồi ước lượng kết quả: (1) 392 + 506; (2) 815 − 289; (3) 48 × 6.";

// Tuần 6 - Thứ 4
const m_w6_d4 = bridge.math[5].days[2];
m_w6_d4.objective = "So sánh hai chiến lược tính và chọn cách thuận tiện, ít nhầm lẫn hơn.";
m_w6_d4.basic = "Tính bằng 2 cách và nêu rõ cách nào giúp em nhẩm nhanh, ít nhầm lẫn hơn: (1) 25 × 12; (2) 136 + 299; (3) 450 − 198.";
m_w6_d4.hint = "Gợi ý 1: Cách 1: Tách 12 = 4 × 3 rồi tính 25 × 4 × 3.\nGợi ý 2: Cách 2: Tách 12 = 10 + 2 rồi tính 25 × 10 + 25 × 2.\nGợi ý 3: So sánh xem cách nào ra số tròn trăm nhanh hơn.";

// Tuần 6 - Thứ 5
const m_w6_d5 = bridge.math[5].days[3];
m_w6_d5.title = "Bình tĩnh trước bài toán lạ";
m_w6_d5.example = "Vẽ sơ đồ đoạn thẳng trước khi chọn phép tính.";
m_w6_d5.basic = "Vẽ sơ đồ đoạn thẳng rồi giải: (1) Tìm hai số biết tổng là 120 và hiệu là 20; (2) Nửa chu vi hình chữ nhật là 20 cm, chiều dài gấp 3 lần chiều rộng, tìm hai kích thước.";

// Tuần 6 - Thứ 6
const m_w6_d6 = bridge.math[5].days[4];
m_w6_d6.basic = "Chọn 3 dạng bài Bách thấy cần luyện thêm nhất từ tuần 1 đến tuần 5, mỗi dạng giải 1 bài và tự kiểm tra lại bằng phép tính ngược.";


// ==========================================
// 2. MÔN TIẾNG VIỆT: SỬA TOÀN DIỆN VÀ KHỬ HOÀN TOÀN "OLYMPIC"
// ==========================================

// Tuần 1 - Thứ 2
const v_w1_d2 = bridge.vietnamese[0].days[0];
v_w1_d2.reasoning = "Vì sao câu 'Mặt trời chiếu những tia nắng ấm áp xuống vườn cây' lại hay và rõ ý hơn câu 'Trời nắng'?";
v_w1_d2.applied = "Viết 3 câu hoàn chỉnh có đủ Chủ ngữ và Vị ngữ kể về hoạt động của Bách trong buổi sáng.";

// Tuần 1 - Thứ 3
const v_w1_d3 = bridge.vietnamese[0].days[1];
v_w1_d3.title = "Từ khóa và ý chính của đoạn";
v_w1_d3.objective = "Biết tìm từ khóa lặp lại hoặc từ mang nghĩa then chốt để xác định chủ đề đoạn văn.";
v_w1_d3.basic = "Đọc đoạn văn ngắn sau, gạch chân 2–3 từ khóa quan trọng nhất và nêu chủ đề của đoạn:\n'Mùa thu về, bầu trời trong xanh cao vời vợi. Gió heo may se lạnh thổi qua từng con ngõ nhỏ. Những quả hồng chín đỏ ối trong vườn, tiếng cười ríu rít của các bạn nhỏ giòn giã vang lên.'";
v_w1_d3.reasoning = "Trong đoạn văn trên, hai từ ngữ 'đỏ ối' và 'giòn giã' gợi cho em cảm xúc và hình ảnh gì về mùa thu?";
v_w1_d3.applied = "Chọn 2–3 từ khóa vừa tìm được để viết 2 câu cảm nghĩ của em về mùa thu quê hương.";

// Tuần 1 - Thứ 4
const v_w1_d4 = bridge.vietnamese[0].days[2];
v_w1_d4.title = "Mở đoạn hấp dẫn và tự nhiên";
v_w1_d4.objective = "Viết câu mở đoạn nêu rõ chủ đề một cách tự nhiên, tránh công thức máy móc.";
v_w1_d4.challenge = "Viết câu mở đoạn giới thiệu về người bạn thân nhất của em theo cách tự nhiên, chân thật nhất (không dùng mẫu rập khuôn 'Trong tất cả các bạn...').";

// Tuần 1 - Thứ 7
const v_w1_d7 = bridge.vietnamese[0].days[5];
v_w1_d7.title = "Mini-check tuần 1: Câu, đoạn và chi tiết";
v_w1_d7.basic = "Làm 3 bài tập: (1) Thêm bộ phận vị ngữ để hoàn thành câu: 'Trên cành cây cao, những chú chim non...'; (2) Tìm từ khóa của đoạn văn tả cơn mưa rào; (3) Sắp xếp 4 câu thành đoạn văn hoàn chỉnh theo trình tự thời gian.";

// Tuần 2 - Thứ 2
const v_w2_d2 = bridge.vietnamese[1].days[0];
v_w2_d2.title = "Mỗi đoạn văn một ý trọn vẹn";
v_w2_d2.objective = "Xây dựng đoạn văn xoay quanh một ý chính rõ ràng, các câu phụ làm sáng tỏ ý chính.";
v_w2_d2.basic = "Đọc đoạn văn và chỉ ra câu nêu ý chính: 'Cây bàng đầu ngõ gắn bó thân thiết với tuổi thơ em. Mùa xuân, bàng đâm chồi nảy lộc xanh biếc. Mùa hè, tán bàng tỏa bóng râm mát rượi cho chúng em vui chơi. Mùa đông, cây bàng đứng trầm ngâm chịu rét.'";

// Tuần 2 - Thứ 3
const v_w2_d3 = bridge.vietnamese[1].days[1];
v_w2_d3.title = "Quan sát chi tiết bằng mắt nhìn";
v_w2_d3.objective = "Quan sát và lựa chọn 2–3 chi tiết trực quan (hình dáng, màu sắc, cử chỉ) để đưa vào câu văn.";
v_w2_d3.basic = "Quan sát chiếc cặp sách của em và ghi lại 3 chi tiết nhìn thấy rõ: (1) Màu sắc chủ đạo; (2) Hình dáng chiếc khóa kéo; (3) Một đặc điểm riêng chỉ cặp của em mới có.";

// Tuần 2 - Thứ 4
const v_w2_d4 = bridge.vietnamese[1].days[2];
v_w2_d4.title = "Sắp xếp câu theo trình tự hợp lý";
v_w2_d4.objective = "Sắp xếp các câu trong đoạn theo trình tự thời gian hoặc không gian, tránh lộn xộn ý.";
v_w2_d4.basic = "Sắp xếp 4 câu sau thành đoạn văn mạch lạc: (a) Buổi sáng sớm, cả lớp háo hức tập trung ở cổng trường; (b) Xe bắt đầu lăn bánh chở chúng em đến khu trải nghiệm; (c) Đến trưa, mọi người cùng nhau quây quần ăn trưa dưới bóng cây râm mát; (d) Cuối cùng, chúng em thu dọn đồ đạc ra về khi trời nhá nhem tối.";

// Tuần 2 - Thứ 5
const v_w2_d5 = bridge.vietnamese[1].days[3];
v_w2_d5.title = "Kết đoạn tự nhiên, đọng lại dư vị";
v_w2_d5.objective = "Viết câu kết đoạn bộc lộ cảm xúc chân thật, khép lại ý trọn vẹn mà không sáo rỗng.";
v_w2_d5.challenge = "Viết câu kết đoạn cho bài văn tả góc học tập, bộc lộ tình cảm gắn bó với góc nhỏ này mà không dùng từ sáo rỗng.";

// Tuần 2 - Thứ 6
const v_w2_d6 = bridge.vietnamese[1].days[4];
v_w2_d6.title = "Tự biên tập: Đọc lại và trau chuốt";
v_w2_d6.objective = "Tự phát hiện câu lặp từ, câu cụt ý và thay thế bằng từ ngữ sinh động hơn.";
v_w2_d6.basic = "Đọc đoạn văn sau và thực hiện 2 chỉnh sửa: gạch bỏ từ lặp thừa và thay 1 từ bình thường bằng từ ngữ gợi hình: 'Bầu trời hôm nay rất xanh. Gió thổi làm lá cây lung lay nhè nhẹ. Cảnh vật trông rất đẹp.'";

// Tuần 2 - Thứ 7
const v_w2_d7 = bridge.vietnamese[1].days[5];
v_w2_d7.title = "Mini-check tuần 2: Đoạn văn hoàn chỉnh 5–7 câu";
v_w2_d7.applied = "Viết một đoạn văn từ 5 đến 7 câu tả một góc quen thuộc trong ngôi nhà của em, có chi tiết hình ảnh cụ thể và câu kết tự nhiên.";

// Tuần 3 - Thứ 3
const v_w3_d3 = bridge.vietnamese[2].days[1];
v_w3_d3.title = "Tóm gọn ý chính của bài đọc";
v_w3_d3.objective = "Nắm được nội dung cốt lõi của bài đọc và diễn đạt lại thành một câu văn gọn ghẽ.";
v_w3_d3.basic = "Đọc câu chuyện ngắn 'Cậu bé trung thực' và tóm tắt bài học của câu chuyện chỉ bằng một câu văn.";
v_w3_d3.reasoning = "Cho 3 ý kiến về câu chuyện 'Cậu bé trung thực': (A) Cậu bé nhặt được ví tiền; (B) Câu chuyện ca ngợi lòng trung thực; (C) Cậu bé gặp chú công an. Vì sao (A) và (C) chỉ là chi tiết phụ, còn (B) mới là ý chính của toàn câu chuyện?";
v_w3_d3.applied = "Đặt một nhan đề mới (3–4 chữ) thể hiện bài học về lòng trung thực mà câu chuyện muốn gửi gắm.";
v_w3_d3.challenge = "Thử thách diễn đạt & sáng tạo: Từ câu chuyện, em hãy viết một câu châm ngôn ngắn về lòng trung thực, dùng một hình ảnh so sánh gần gũi trong đời sống.";

// Tuần 3 - Thứ 4
const v_w3_d4 = bridge.vietnamese[2].days[2];
v_w3_d4.title = "Tìm dẫn chứng trong văn bản";
v_w3_d4.objective = "Biết dùng chi tiết cụ thể trong bài đọc để chứng minh cho câu trả lời của mình.";
v_w3_d4.basic = "Dựa vào bài đọc, trích dẫn đúng 2 chi tiết chứng minh nhân vật là người dũng cảm.";

// Tuần 3 - Thứ 5
const v_w3_d5 = bridge.vietnamese[2].days[3];
v_w3_d5.title = "Chuỗi Nguyên nhân – Kết quả";
v_w3_d5.objective = "Nhận biết mối liên hệ vì sao việc này xảy ra dẫn đến việc kia trong mạch truyện.";
v_w3_d5.basic = "Xác định nguyên nhân và kết quả trong câu: 'Vì mải mê đuổi theo cánh bướm sặc sỡ, chú sóc nhỏ đã lạc vào sâu trong rừng.'";

// Tuần 3 - Thứ 6
const v_w3_d6 = bridge.vietnamese[2].days[4];
v_w3_d6.title = "Phân biệt điều văn bản nói và điều em suy đoán";
v_w3_d6.objective = "Phân biệt rõ dữ kiện có sẵn trong bài đọc với ý kiến phỏng đoán cá nhân.";
v_w3_d6.basic = "Đọc câu: 'Bé Na ôm chặt chú gấu bông cũ, mắt đỏ hoe nhìn ra cửa sổ mưa rơi.' Chi tiết nào là văn bản kể thật? Chi tiết nào là em suy đoán về tâm trạng bé Na?";

// Tuần 3 - Thứ 7
const v_w3_d7 = bridge.vietnamese[2].days[5];
v_w3_d7.title = "Mini-check tuần 3: Đọc hiểu và dẫn chứng";
v_w3_d7.basic = "Đọc văn bản ngắn và trả lời 4 câu hỏi đọc hiểu: (1) Nhận biết nhân vật và sự việc; (2) Tìm 2 chi tiết then chốt; (3) Giải thích nguyên nhân hành động; (4) Nêu bài học rút ra.";

// Tuần 4 - Thứ 3
const v_w4_d3 = bridge.vietnamese[3].days[1];
v_w4_d3.title = "Động từ giàu hình ảnh và sức gợi";
v_w4_d3.objective = "Chọn động từ cụ thể, gợi cảm giác hành động thay cho động từ chung chung.";
v_w4_d3.basic = "Thay thế động từ 'đi' trong các câu sau bằng động từ gợi tả sinh động hơn:\n(1) Chú mèo con đi lại gần đĩa cá;\n(2) Bác nông dân đi trên con đường đê;\n(3) Em bé đi những bước đầu tiên.";

// Tuần 4 - Thứ 4
const v_w4_d4 = bridge.vietnamese[3].days[2];
v_w4_d4.title = "Lời nói và suy nghĩ của nhân vật";
v_w4_d4.objective = "Sử dụng đúng dấu hai chấm, dấu gạch ngang đầu dòng khi dẫn lời thoại trực tiếp và dấu ngoặc kép khi dẫn suy nghĩ thầm của nhân vật.";
v_w4_d4.example = "Lời nói:\nNam nắm tay bạn bảo:\n- Đừng sợ, có tớ ở đây rồi!\nSuy nghĩ: Nhìn dòng sông cuộn sóng, em tự nhủ: “Mình nhất định phải dũng cảm vượt qua!”";
v_w4_d4.basic = "Đặt dấu câu thích hợp (hai chấm, gạch đầu dòng, ngoặc kép) vào đoạn sau:\nHai bạn ngồi trước câu đố, Lan chống tay nghĩ ngợi: 'Câu này khó thật đấy!'. Bình cười nói: - Để tớ thử xem, tớ biết đáp án rồi!";

// Tuần 4 - Thứ 5
const v_w4_d5 = bridge.vietnamese[3].days[3];
v_w4_d5.title = "Thể hiện cảm xúc qua hành động";
v_w4_d5.objective = "Tả hành động, ánh mắt, nụ cười cụ thể để người đọc cảm nhận được cảm xúc thay vì chỉ gọi tên cảm xúc.";
v_w4_d5.basic = "Thay vì viết 'Nam rất vui sướng', hãy viết 2 câu miêu tả nét mặt và hành động của Nam khi nhận được bức tranh tặng từ bạn thân.";

// Tuần 4 - Thứ 6
const v_w4_d6 = bridge.vietnamese[3].days[4];
v_w4_d6.title = "Nói thành lời trước khi viết nháp";
v_w4_d6.objective = "Quy trình diễn đạt bằng lời: Nghĩ ý trong đầu → Nói thành tiếng mạch lạc → Lắng nghe chỗ vấp → Viết bản nháp.";
v_w4_d6.example = "Quy trình diễn đạt bằng lời: Nghĩ ý trong đầu → Nói thành tiếng mạch lạc → Lắng nghe chỗ ngập ngừng → Viết bản nháp.";
v_w4_d6.challenge = "Đọc to bài kể lại việc làm tốt một lần nữa với giọng truyền cảm, nhấn mạnh vào những từ ngữ gợi tả cảm xúc chân thật nhất.";

// Tuần 4 - Thứ 7
const v_w4_d7 = bridge.vietnamese[3].days[5];
v_w4_d7.title = "Mini-check tuần 4: Bài văn kể việc đáng nhớ";
v_w4_d7.basic = "Viết bài văn ngắn (khoảng 8–10 câu) kể lại một việc tốt em đã làm, có chi tiết hành động và lời thoại tự nhiên.";

// Tuần 5 - Thứ 3
const v_w5_d3 = bridge.vietnamese[4].days[1];
v_w5_d3.title = "Mở rộng vốn từ theo chủ điểm";
v_w5_d3.objective = "Phát triển mạng từ vựng về chủ đề Thiên nhiên và Trường học; biết chọn từ chính xác ngữ cảnh.";
v_w5_d3.basic = "Tìm 4 từ chỉ âm thanh của tự nhiên (ví dụ: róc rách, xào xạc) và đặt 2 câu miêu tả cảnh buổi sáng.";
v_w5_d3.applied = "Chọn 3 từ thuộc các nhóm trên để viết một đoạn văn ngắn 3 câu tả cảnh sân trường giờ ra chơi.";

// Tuần 5 - Thứ 4
const v_w5_d4 = bridge.vietnamese[4].days[2];
v_w5_d4.title = "Câu kể và Câu hỏi gợi mở cảm xúc";
v_w5_d4.objective = "Sử dụng linh hoạt câu kể (cung cấp thông tin) và câu hỏi gợi mở (bộc lộ cảm xúc, lôi cuốn người đọc).";
v_w5_d4.basic = "Viết một đoạn văn 3 câu giới thiệu về loài hoa em yêu, trong đó có 2 câu kể và 1 câu hỏi gợi mở cảm xúc.";
v_w5_d4.applied = "Viết đoạn văn 3–4 câu tả cảnh giờ ra chơi ở sân trường, trong đó có 2 câu kể và 1 câu hỏi gợi mở cảm xúc.";

// Tuần 5 - Thứ 5
const v_w5_d5 = bridge.vietnamese[4].days[3];
v_w5_d5.title = "Chính tả phân biệt phụ âm đầu dễ lẫn (ch/tr, s/x, d/r)";
v_w5_d5.objective = "Phân biệt các cặp phụ âm đầu dễ nhầm lẫn trong văn cảnh cụ thể.";
v_w5_d5.basic = "Tìm và sửa 4 lỗi chính tả ch/tr và s/x trong đoạn sau: 'Buổi sáng mùa thu, ánh nắng xớm trải nhẹ trên con đường làng. Những chú chim sâu chuyền cành chong vòm lá xanh. Cây bàng xòe tán rộng, trông thật xinh xắn.' (Sửa 2 lỗi: xớm → sớm; chong → trong).";
v_w5_d5.applied = "Tìm và sửa lỗi chính tả d/r và s/x trong câu sau: 'Bác nông dân rảo bước da đồng, trông thật sung xướng.' (Sửa: da → ra; sung xướng → sung sướng).";
v_w5_d5.hint = "Mẹo chính tả: Phân biệt theo nghĩa từ và phát âm chuẩn; từ ghép thường đi liền cặp thanh điệu và từ láy âm đầu.";

// Tuần 5 - Thứ 6
const v_w5_d6 = bridge.vietnamese[4].days[4];
v_w5_d6.title = "Biên tập câu văn: Sửa câu cụt và tách câu dài";
v_w5_d6.objective = "Nhận biết câu thiếu thành phần (câu cụt) và câu quá nhiều vế nối dài dòng để biên tập lại rõ ý.";
v_w5_d6.applied = "Sửa câu cụt sau thành câu hoàn chỉnh, giàu hình ảnh: 'Đang nở rộ trên giàn.' (thiếu Chủ ngữ) → Thêm Chủ ngữ và mở rộng câu sinh động.";
v_w5_d6.hint = "Mẹo nhỏ: Khi tách câu dài, hãy thay từ nối bằng dấu chấm và kiểm tra lại xem câu mới đã có đủ Chủ ngữ và Vị ngữ chưa.";

// Tuần 6 - Thứ 2
const v_w6_d2 = bridge.vietnamese[5].days[0];
v_w6_d2.title = "Đọc sâu và cảm nhận chi tiết nghệ thuật";
v_w6_d2.objective = "Phát hiện hình ảnh so sánh, nhân hóa đắt giá trong bài thơ, bài văn và nêu cảm nghĩ.";
v_w6_d2.basic = "Chỉ ra hình ảnh nghệ thuật trong hai câu sau và nêu cảm nhận:\n(1) So sánh: 'Từng giọt sương mai đọng trên phiến lá long lanh như những hạt ngọc biếc.'\n(2) Nhân hóa: 'Chị gió nhón chân đi qua vườn, đánh thức những nụ hoa còn ngái ngủ.'";

// Tuần 6 - Thứ 3
const v_w6_d3 = bridge.vietnamese[5].days[1];
v_w6_d3.title = "Quan sát cuộc sống bằng đa giác quan";
v_w6_d3.objective = "Rèn luyện khả năng quan sát ngoài đời thực: ghi chép hình ảnh, âm thanh, mùi hương và cảm giác xúc giác.";
v_w6_d3.basic = "Ghi lại cảm nhận của em về một buổi chiều mùa hè bằng 4 giác quan:\n(1) Mắt thấy gì?\n(2) Tai nghe thấy gì?\n(3) Mũi ngửi thấy mùi hương gì?\n(4) Da cảm nhận làn gió như thế nào?";
v_w6_d3.applied = "Từ 4 chi tiết giác quan vừa ghi chép, em hãy viết một đoạn văn 4 câu miêu tả buổi chiều thật sinh động.";

// Tuần 6 - Thứ 4
const v_w6_d4 = bridge.vietnamese[5].days[2];
v_w6_d4.title = "Lập dàn ý nhanh 5 phút trước khi viết";
v_w6_d4.objective = "Lập dàn ý 3 phần (Mở bài – Thân bài – Kết bài) với các từ khóa cô đọng, không viết thành câu dài.";
v_w6_d4.example = "Dàn ý 3 phần tả cây bóng mát: Mở bài (Tên cây + vị trí trồng) → Thân bài (Bao quát tán lá, chi tiết thân/gốc, hoạt động dưới bóng cây) → Kết bài (Tình cảm gắn bó với cây).";
v_w6_d4.basic = "Lập dàn ý cho bài văn tả một cây bóng mát quen thuộc ở sân trường hoặc gần nhà em theo 3 phần rõ ràng.";
v_w6_d4.reasoning = "Dàn ý giúp người viết hạn chế bị bí từ và lạc đề như thế nào? Nếu không có dàn ý thì dễ mắc lỗi gì?";

// Tuần 6 - Thứ 5
const v_w6_d5 = bridge.vietnamese[5].days[3];
v_w6_d5.title = "Viết bản 1 – Tự do sáng tạo dòng chảy ý";
v_w6_d5.objective = "Viết liền mạch bản thảo theo dàn ý, tập trung dòng chảy cảm xúc và ý tưởng; để việc sửa lỗi chính tả cho Bản 2.";
v_w6_d5.example = "Quy tắc Bản 1: Viết nhanh, viết liền tay cho hết bài văn tả cây; để việc sửa lỗi chính tả và dùng từ cho Bản 2.";
v_w6_d5.applied = "Đọc lại bản thảo vừa viết, gạch chân 1 câu văn mà em thích nhất và giải thích vì sao câu văn đó gợi nhiều cảm xúc.";
v_w6_d5.challenge = "Thêm một câu so sánh hoặc nhân hóa thật sinh động (Ví dụ: 'Tán cây xòe rộng như chiếc ô xanh khổng lồ che mát cho đàn em thơ') vào bài văn.";
v_w6_d5.hint = "Gợi ý: Tìm đặc điểm nổi bật của cây (tán lá, gốc cây, hoa) và so sánh với hình ảnh gần gũi trong đời sống.";

// Tuần 6 - Thứ 6
const v_w6_d6 = bridge.vietnamese[5].days[4];
v_w6_d6.title = "Viết bản 2 – Biên tập 4 bước nâng tầm bài viết";
v_w6_d6.objective = "Rèn luyện quy trình biên tập 4 bước: (1) Rà Ý, (2) Rà Câu, (3) Rà Từ, (4) Rà Chính tả và hình thức.";
v_w6_d6.basic = "Lấy bài viết Bản 1 ra và thực hiện đủ 4 bước biên tập:\n(1) Rà Ý: Gạch bỏ 1 ý thừa thãi, lặp ý.\n(2) Rà Câu: Sửa 1 câu cụt thành câu đủ ý hoặc tách 1 câu quá dài cho rõ mạch.\n(3) Rà Từ: Thay 1 tính từ chung chung bằng từ ngữ gợi tả âm thanh, hình ảnh sống động.\n(4) Rà Chính tả: Sửa lỗi chính tả, dấu câu và chép lại Bản 2 sạch đẹp.";
v_w6_d6.challenge = "Viết lại đoạn mở bài hoặc đoạn kết bài của Bản 2 theo cách độc đáo, giàu cảm xúc hơn rồi lưu cả hai bản vào Portfolio.";
v_w6_d6.hint = "Gợi ý: So sánh bản thảo trước và sau khi biên tập để tự thấy sự tiến bộ rõ rệt trong từng câu chữ.";

// Tuần 6 - Thứ 7
const v_w6_d7 = bridge.vietnamese[5].days[5];
v_w6_d7.title = "Mini-check tuần 6: Tổng kết cầu nối Lớp 3 lên Lớp 4";
v_w6_d7.objective = "Đánh giá toàn diện năng lực đọc hiểu văn bản và tạo lập đoạn văn miêu tả chân thật, giàu cảm xúc.";
v_w6_d7.example = "Định hướng chung: Bài kiểm tra đo mức độ tiến bộ của học sinh về vốn từ, cấu trúc câu và phong cách diễn đạt chân thật, tự nhiên.";
v_w6_d7.applied = "Phần 1 - Đọc hiểu văn bản (15 phút): Đọc bài 'Món quà của bố':\n“Trước ngày đi công tác xa, bố tặng em một chiếc bút mực màu xanh thẫm. Thân bút thon dài, ngòi thép sáng lấp lánh. Dù sau này nắp bút có một vết xước nhỏ do em sơ ý làm rơi, nhưng với em, đó vẫn là món quà quý giá nhất vì nó mang theo sự chăm sóc yêu thương của bố.”\nTrả lời 4 câu hỏi:\n(1) Chiếc bút là món quà của ai tặng bạn nhỏ và vào dịp nào?\n(2) Tìm 2 chi tiết miêu tả chiếc bút mực.\n(3) Chi tiết 'vết xước nhỏ trên nắp bút' và câu 'vẫn là món quà quý giá nhất' cho thấy tình cảm của bạn nhỏ với chiếc bút như thế nào?\n(4) Bài đọc gửi gắm thông điệp gì về cách nâng niu những món quà kỉ niệm từ người thân?";
v_w6_d7.basic = "Phần 2 - Viết đoạn văn (30 phút): Viết một đoạn văn từ 8 đến 10 câu tả một đồ vật hoặc kỉ vật thân thiết của em (chiếc cặp sách, hộp bút, chiếc đồng hồ báo thức...).\nYêu cầu: Có câu mở đoạn tự nhiên, miêu tả ít nhất 2 đặc điểm nổi bật, kể một kỉ niệm gắn với đồ vật và bộc lộ cảm xúc chân thật; bài viết sạch đẹp, đúng chính tả.";
v_w6_d7.reasoning = "Phần 3 - Tự đánh giá và Lập mục tiêu (5 phút, không tính điểm): Nêu 1 điểm em đã tiến bộ nhất trong 6 tuần qua và 1 mục tiêu con muốn rèn luyện thêm khi bước vào năm học Lớp 4.";
v_w6_d7.challenge = "Thử thách diễn đạt & sáng tạo: Hãy chọn 1 câu văn bất kì trong bài viết của em và viết lại theo 2 cách khác nhau (1 cách dùng từ ngữ giàu hình ảnh hơn, 1 cách đảo trật tự các vế câu) mà vẫn giữ nguyên ý nghĩa.";
v_w6_d7.hint = "Gợi ý: Em có thể thêm từ ngữ so sánh hoặc đưa bộ phận chỉ thời gian/nơi chốn lên đầu câu để câu văn có nhịp điệu mới mẻ.";


// ==========================================
// 3. TOÀN DIỆN: KHỬ HOÀN TOÀN TỪ "OLYMPIC" TRONG TẤT CẢ CÁC BÀI VĂN
// VÀ CHUẨN HÓA CHÍNH TẢ SGK KẾT NỐI TRI THỨC (kỉ vật, kỉ niệm)
// ==========================================
for (const week of bridge.vietnamese) {
  for (const day of week.days) {
    for (const key of Object.keys(day)) {
      if (typeof day[key] === "string") {
        day[key] = day[key]
          .replace(/Olympic/gi, "thử thách sáng tạo")
          .replace(/kỷ vật/g, "kỉ vật")
          .replace(/Kỷ vật/g, "Kỉ vật")
          .replace(/kỷ niệm/g, "kỉ niệm")
          .replace(/Kỷ niệm/g, "Kỉ niệm");
      }
    }
  }
}

// Chuyển toàn bộ bridgeDailyLessons thành chuỗi JS sạch với unquoted keys chuẩn JavaScript
let jsonStr = JSON.stringify(bridge, null, 2);
const standardKeys = [
  "math", "vietnamese", "week", "alignment", "days", "day",
  "title", "objective", "example", "basic", "applied",
  "reasoning", "selfCheck", "challenge", "hint", "advanced"
];
for (const key of standardKeys) {
  const regex = new RegExp(`^(\\s*)"${key}":`, "gm");
  jsonStr = jsonStr.replace(regex, `$1${key}:`);
}

const newBridgeCode = "window.BACH_CURRICULUM.bridgeDailyLessons = " + jsonStr + ";\n\n";

// Thay thế đoạn bridgeDailyLessons cũ trong content
const startMarker = "window.BACH_CURRICULUM.bridgeDailyLessons = {";
const endMarker = "window.BACH_CURRICULUM.enrichment = {";

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  throw new Error("Không tìm thấy vị trí đánh dấu bridgeDailyLessons trong data/curriculum.js");
}

const updatedContent = content.substring(0, startIndex) + newBridgeCode + content.substring(endIndex);

fs.writeFileSync(curriculumFile, updatedContent, "utf8");
console.log("✓ Đã cập nhật thành công 100% 72 bài học vào data/curriculum.js!");
