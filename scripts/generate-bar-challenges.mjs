// scripts/generate-bar-challenges.mjs
// Generator tạo 120 bài toán Singapore Bar Model Studio có độ khó tăng dần qua 9 cấp độ
import { writeFileSync } from "node:fs";

export const BAR_MODEL_LEVELS = [
  { name: "Cấp độ 1: Tổng – Hiệu Khởi động", count: 15 },
  { name: "Cấp độ 2: Tổng – Tỉ Đơn giản (Gấp mấy lần)", count: 15 },
  { name: "Cấp độ 3: Hiệu – Tỉ Đơn giản (Gấp mấy lần)", count: 15 },
  { name: "Cấp độ 4: Tổng – Tỉ Phân số (Tỉ lệ m:n)", count: 15 },
  { name: "Cấp độ 5: Hiệu – Tỉ Phân số (Tỉ lệ m:n)", count: 15 },
  { name: "Cấp độ 6: Bài toán Tuổi tác Singapore", count: 12 },
  { name: "Cấp độ 7: Hình học & Nửa Chu vi", count: 12 },
  { name: "Cấp độ 8: Chuyển dịch & Bù trừ thực tế", count: 11 },
  { name: "Cấp độ 9: Chuyên sâu & Olympic Bar Model", count: 10 }
];

export const RAW_CHALLENGES = [
  // ==========================================
  // CẤP ĐỘ 1: TỔNG – HIỆU KHỞI ĐỘNG (15 BÀI)
  // ==========================================
  {
    level: "Cấp độ 1: Tổng – Hiệu Khởi động",
    title: "Hai thùng dầu (Tổng – Hiệu kinh điển)",
    problem: "Hai thùng dầu có tổng cộng 850 lít dầu. Thùng thứ nhất nhiều hơn thùng thứ hai 150 lít dầu. Hãy dựng mô hình thể hiện đúng số lượng hai thùng.",
    target: { bar1Parts: 1, bar2Parts: 1, hasDiff: true, diffValue: "150", totalValue: "850", bar1Name: "Thùng 1", bar2Name: "Thùng 2" },
    hint: "Thùng 1 nhiều hơn Thùng 2 nên Thùng 1 có thêm đoạn chênh lệch. Ngoặc ôm cả hai thanh đại diện cho tổng số dầu.",
    solution: "Thùng thứ hai: (850 − 150) : 2 = 350 (lít). Thùng thứ nhất: 350 + 150 = 500 (lít)."
  },
  {
    level: "Cấp độ 1: Tổng – Hiệu Khởi động",
    title: "Hai bao gạo tẻ và nếp",
    problem: "Hai bao gạo nặng tất cả 480 kg. Bao thứ nhất nặng hơn bao thứ hai 60 kg. Hãy dựng sơ đồ đoạn thẳng thể hiện cân nặng hai bao gạo.",
    target: { bar1Parts: 1, bar2Parts: 1, hasDiff: true, diffValue: "60", totalValue: "480", bar1Name: "Bao 1", bar2Name: "Bao 2" },
    hint: "Bao 1 nặng hơn Bao 2 một đoạn chênh lệch. Ngoặc tổng biểu thị cân nặng của cả hai bao.",
    solution: "Bao thứ hai: (480 − 60) : 2 = 210 (kg). Bao thứ nhất: 210 + 60 = 270 (kg)."
  },
  {
    level: "Cấp độ 1: Tổng – Hiệu Khởi động",
    title: "Học sinh Nam và Nữ khối 4",
    problem: "Khối lớp 4 có tất cả 360 học sinh. Số học sinh nữ nhiều hơn số học sinh nam là 40 bạn. Dựng mô hình số học sinh nam và nữ.",
    target: { bar1Parts: 1, bar2Parts: 1, hasDiff: true, diffValue: "40", totalValue: "360", bar1Name: "Học sinh Nữ", bar2Name: "Học sinh Nam" },
    hint: "Số học sinh Nữ nhiều hơn nên thanh HS Nữ dài hơn đoạn hiệu. Ngoặc tổng biểu thị toàn bộ học sinh khối 4.",
    solution: "Số HS Nam: (360 − 40) : 2 = 160 (bạn). Số HS Nữ: 160 + 40 = 200 (bạn)."
  },
  {
    level: "Cấp độ 1: Tổng – Hiệu Khởi động",
    title: "Hai giá sách thư viện",
    problem: "Hai giá sách có tất cả 1250 quyển sách. Giá thứ nhất có nhiều hơn giá thứ hai 150 quyển. Dựng mô hình số sách ở hai giá.",
    target: { bar1Parts: 1, bar2Parts: 1, hasDiff: true, diffValue: "150", totalValue: "1250", bar1Name: "Giá 1", bar2Name: "Giá 2" },
    hint: "Giá 1 có nhiều sách hơn Giá 2 một đoạn chênh lệch. Ngoặc tổng bao quanh cả hai giá sách.",
    solution: "Giá thứ hai: (1250 − 150) : 2 = 550 (quyển). Giá thứ nhất: 550 + 150 = 700 (quyển)."
  },
  {
    level: "Cấp độ 1: Tổng – Hiệu Khởi động",
    title: "Thu hoạch cam và quýt",
    problem: "Bác An thu hoạch được 3500 kg cam và quýt. Số cam nhiều hơn số quýt là 500 kg. Hãy dựng sơ đồ số lượng hai loại quả.",
    target: { bar1Parts: 1, bar2Parts: 1, hasDiff: true, diffValue: "500", totalValue: "3500", bar1Name: "Cam", bar2Name: "Quýt" },
    hint: "Thanh biểu thị số Cam dài hơn thanh số Quýt đoạn chênh lệch. Ngoặc tổng cả hai loại quả.",
    solution: "Số quýt: (3500 − 500) : 2 = 1500 (kg). Số cam: 1500 + 500 = 2000 (kg)."
  },
  {
    level: "Cấp độ 1: Tổng – Hiệu Khởi động",
    title: "Thu hoạch thóc hai thửa ruộng",
    problem: "Hai thửa ruộng thu hoạch được tất cả 4800 kg thóc. Thửa thứ nhất thu hoạch nhiều hơn thửa thứ hai 600 kg. Hãy dựng mô hình đoạn thẳng hai thửa.",
    target: { bar1Parts: 1, bar2Parts: 1, hasDiff: true, diffValue: "600", totalValue: "4800", bar1Name: "Thửa 1", bar2Name: "Thửa 2" },
    hint: "Thửa 1 thu hoạch nhiều hơn Thửa 2 nên có thêm đoạn chênh lệch. Ngoặc ôm biểu thị tổng sản lượng hai thửa.",
    solution: "Thửa 2: (4800 − 600) : 2 = 2100 (kg). Thửa 1: 2100 + 600 = 2700 (kg)."
  },
  {
    level: "Cấp độ 1: Tổng – Hiệu Khởi động",
    title: "Hai cuộn dây điện",
    problem: "Tổng chiều dài của hai cuộn dây là 1450 m. Cuộn thứ nhất dài hơn cuộn thứ hai 250 m. Dựng sơ đồ chiều dài hai cuộn dây.",
    target: { bar1Parts: 1, bar2Parts: 1, hasDiff: true, diffValue: "250", totalValue: "1450", bar1Name: "Cuộn 1", bar2Name: "Cuộn 2" },
    hint: "Cuộn 1 dài hơn Cuộn 2 đoạn chênh lệch. Ngoặc tổng biểu thị chiều dài cả hai cuộn.",
    solution: "Cuộn thứ hai: (1450 − 250) : 2 = 600 (m). Cuộn thứ nhất: 600 + 250 = 850 (m)."
  },
  {
    level: "Cấp độ 1: Tổng – Hiệu Khởi động",
    title: "Hai xe tải chở hàng",
    problem: "Hai xe tải chở tất cả 8600 kg hàng hóa. Xe thứ nhất chở nhiều hơn xe thứ hai 1200 kg. Hãy dựng mô hình chở hàng của hai xe.",
    target: { bar1Parts: 1, bar2Parts: 1, hasDiff: true, diffValue: "1200", totalValue: "8600", bar1Name: "Xe 1", bar2Name: "Xe 2" },
    hint: "Xe 1 chở nhiều hơn nên thanh Xe 1 dài hơn đoạn hiệu. Ngoặc tổng cả hai xe.",
    solution: "Xe 2 chở: (8600 − 1200) : 2 = 3700 (kg). Xe 1 chở: 3700 + 1200 = 4900 (kg)."
  },
  {
    level: "Cấp độ 1: Tổng – Hiệu Khởi động",
    title: "Ba thùng dầu dự trữ (3 đối tượng)",
    problem: "Ba thùng dầu có tổng cộng 1350 lít dầu. Thùng thứ hai và thùng thứ ba chứa số lít dầu bằng nhau. Thùng thứ nhất chứa nhiều hơn mỗi thùng còn lại 150 lít dầu. Hãy dựng mô hình thể hiện lượng dầu cả ba thùng.",
    target: { bar1Parts: 1, bar2Parts: 1, bar3Parts: 1, hasBar3: true, hasDiff: true, diffValue: "150", totalValue: "1350", bar1Name: "Thùng 1", bar2Name: "Thùng 2", bar3Name: "Thùng 3" },
    hint: "Thùng 2 và Thùng 3 là hai đoạn cơ sở bằng nhau. Thùng 1 gồm 1 đoạn cơ sở cộng thêm đoạn chênh lệch 150 lít. Ngoặc tổng ôm cả ba thanh là 1350 lít.",
    solution: "Ba lần số dầu thùng 2 là: 1350 − 150 = 1200 (lít). Thùng 2 và Thùng 3 mỗi thùng chứa: 1200 : 3 = 400 (lít). Thùng 1 chứa: 400 + 150 = 550 (lít)."
  },
  {
    level: "Cấp độ 1: Tổng – Hiệu Khởi động",
    title: "Ba lớp thu gom giấy vụn (3 đối tượng)",
    problem: "Ba lớp 4A, 4B và 4C thu gom được tất cả 850 kg giấy vụn. Lớp 4B và 4C thu gom được số giấy bằng nhau. Lớp 4A thu gom nhiều hơn mỗi lớp 4B, 4C là 100 kg. Hãy dựng sơ đồ đoạn thẳng thể hiện số giấy của ba lớp.",
    target: { bar1Parts: 1, bar2Parts: 1, bar3Parts: 1, hasBar3: true, hasDiff: true, diffValue: "100", totalValue: "850", bar1Name: "Lớp 4A", bar2Name: "Lớp 4B", bar3Name: "Lớp 4C" },
    hint: "Lớp 4B và 4C có đoạn cơ sở bằng nhau. Lớp 4A dài hơn đoạn hiệu 100 kg. Ngoặc tổng ôm cả 3 lớp là 850 kg.",
    solution: "Ba lần số giấy lớp 4B là: 850 − 100 = 750 (kg). Lớp 4B và 4C mỗi lớp có: 750 : 3 = 250 (kg). Lớp 4A có: 250 + 100 = 350 (kg)."
  },
  {
    level: "Cấp độ 1: Tổng – Hiệu Khởi động",
    title: "Ba kho thóc dự trữ (3 đối tượng)",
    problem: "Ba kho thóc dự trữ có tất cả 2600 tấn thóc. Kho 2 và Kho 3 chứa số thóc bằng nhau. Kho 1 chứa nhiều hơn mỗi kho còn lại 200 tấn thóc. Hãy dựng mô hình số thóc ở cả ba kho.",
    target: { bar1Parts: 1, bar2Parts: 1, bar3Parts: 1, hasBar3: true, hasDiff: true, diffValue: "200", totalValue: "2600", bar1Name: "Kho 1", bar2Name: "Kho 2", bar3Name: "Kho 3" },
    hint: "Kho 2 và Kho 3 là hai đoạn bằng nhau. Kho 1 có thêm đoạn chênh lệch 200 tấn. Ngoặc tổng cả 3 kho là 2600 tấn.",
    solution: "Ba lần số thóc kho 2 là: 2600 − 200 = 2400 (tấn). Kho 2 và Kho 3 mỗi kho có: 2400 : 3 = 800 (tấn). Kho 1 có: 800 + 200 = 1000 (tấn)."
  },
  {
    level: "Cấp độ 1: Tổng – Hiệu Khởi động",
    title: "Ba tổ công nhân trồng cây xanh (3 đối tượng)",
    problem: "Ba tổ công nhân trồng được tất cả 1560 cây xanh. Tổ 2 và Tổ 3 trồng được số cây bằng nhau. Tổ 1 trồng nhiều hơn mỗi tổ còn lại 120 cây. Dựng mô hình số cây của ba tổ.",
    target: { bar1Parts: 1, bar2Parts: 1, bar3Parts: 1, hasBar3: true, hasDiff: true, diffValue: "120", totalValue: "1560", bar1Name: "Tổ 1", bar2Name: "Tổ 2", bar3Name: "Tổ 3" },
    hint: "Tổ 2 và Tổ 3 có số cây bằng nhau (mỗi tổ 1 đoạn cơ sở). Tổ 1 có thêm đoạn chênh lệch 120 cây. Ngoặc tổng cả 3 tổ là 1560 cây.",
    solution: "Ba lần số cây của Tổ 2 là: 1560 − 120 = 1440 (cây). Tổ 2 và Tổ 3 mỗi tổ trồng: 1440 : 3 = 480 (cây). Tổ 1 trồng: 480 + 120 = 600 (cây)."
  },
  {
    level: "Cấp độ 1: Tổng – Hiệu Khởi động",
    title: "Ba ngày bán gạo tại siêu thị (3 đối tượng)",
    problem: "Một siêu thị bán được tất cả 3240 kg gạo trong ba ngày. Ngày thứ hai và ngày thứ ba bán được số lượng bằng nhau. Ngày thứ nhất bán được nhiều hơn mỗi ngày còn lại 240 kg. Dựng sơ đồ lượng gạo bán trong ba ngày.",
    target: { bar1Parts: 1, bar2Parts: 1, bar3Parts: 1, hasBar3: true, hasDiff: true, diffValue: "240", totalValue: "3240", bar1Name: "Ngày 1", bar2Name: "Ngày 2", bar3Name: "Ngày 3" },
    hint: "Ngày 2 và Ngày 3 mỗi ngày là 1 đoạn cơ sở. Ngày 1 dài hơn đoạn hiệu 240 kg. Ngoặc tổng cả 3 ngày là 3240 kg.",
    solution: "Ba lần số gạo ngày thứ hai là: 3240 − 240 = 3000 (kg). Ngày thứ hai và thứ ba mỗi ngày bán: 3000 : 3 = 1000 (kg). Ngày thứ nhất bán: 1000 + 240 = 1240 (kg)."
  },
  {
    level: "Cấp độ 1: Tổng – Hiệu Khởi động",
    title: "Ba cuộn cáp quang viễn thông (3 đối tượng)",
    problem: "Tổng chiều dài của ba cuộn cáp quang là 4700 m. Cuộn 2 và Cuộn 3 dài bằng nhau. Cuộn 1 dài hơn mỗi cuộn còn lại 500 m. Hãy dựng mô hình chiều dài của ba cuộn cáp.",
    target: { bar1Parts: 1, bar2Parts: 1, bar3Parts: 1, hasBar3: true, hasDiff: true, diffValue: "500", totalValue: "4700", bar1Name: "Cuộn 1", bar2Name: "Cuộn 2", bar3Name: "Cuộn 3" },
    hint: "Cuộn 2 và Cuộn 3 mỗi cuộn là 1 đoạn bằng nhau. Cuộn 1 dài hơn đoạn hiệu 500 m. Ngoặc tổng cả 3 cuộn là 4700 m.",
    solution: "Ba lần chiều dài cuộn 2 là: 4700 − 500 = 4200 (m). Cuộn 2 và Cuộn 3 mỗi cuộn dài: 4200 : 3 = 1400 (m). Cuộn 1 dài: 1400 + 500 = 1900 (m)."
  },
  {
    level: "Cấp độ 1: Tổng – Hiệu Khởi động",
    title: "Ba xe tải chở nông sản (3 đối tượng)",
    problem: "Ba xe tải chở tất cả 9800 kg nông sản. Xe thứ hai và xe thứ ba chở khối lượng bằng nhau. Xe thứ nhất chở nhiều hơn mỗi xe còn lại 800 kg. Hãy dựng sơ đồ khối lượng hàng của ba xe.",
    target: { bar1Parts: 1, bar2Parts: 1, bar3Parts: 1, hasBar3: true, hasDiff: true, diffValue: "800", totalValue: "9800", bar1Name: "Xe 1", bar2Name: "Xe 2", bar3Name: "Xe 3" },
    hint: "Xe 2 và Xe 3 mỗi xe là 1 đoạn cơ sở. Xe 1 chở nhiều hơn đoạn hiệu 800 kg. Ngoặc tổng cả 3 xe là 9800 kg.",
    solution: "Ba lần khối lượng xe 2 chở là: 9800 − 800 = 9000 (kg). Xe 2 và Xe 3 mỗi xe chở: 9000 : 3 = 3000 (kg). Xe 1 chở: 3000 + 800 = 3800 (kg)."
  },

  // ==========================================================
  // CẤP ĐỘ 2: TỔNG – TỈ ĐƠN GIẢN (GẤP MẤY LẦN) (15 BÀI)
  // ==========================================================
  {
    level: "Cấp độ 2: Tổng – Tỉ Đơn giản (Gấp mấy lần)",
    title: "Tuổi Mẹ và Bách (Gấp 3 lần)",
    problem: "Năm nay mẹ gấp 3 lần tuổi Bách. Tổng số tuổi của mẹ và Bách là 48 tuổi. Hãy dựng mô hình biểu diễn số tuổi của mẹ và Bách.",
    target: { bar1Parts: 3, bar2Parts: 1, hasDiff: false, diffValue: "", totalValue: "48", bar1Name: "Tuổi Mẹ", bar2Name: "Tuổi Bách" },
    hint: "Tuổi Mẹ là 3 phần bằng nhau, tuổi Bách là 1 phần. Ngoặc tổng 4 phần là 48.",
    solution: "Tuổi Bách: 48 : (3 + 1) = 12 (tuổi). Tuổi Mẹ: 12 × 3 = 36 (tuổi)."
  },
  {
    level: "Cấp độ 2: Tổng – Tỉ Đơn giản (Gấp mấy lần)",
    title: "Hai túi đường cát",
    problem: "Túi thứ nhất nặng gấp 2 lần túi thứ hai. Tổng cân nặng của hai túi là 60 kg. Dựng sơ đồ đoạn thẳng hai túi đường.",
    target: { bar1Parts: 2, bar2Parts: 1, hasDiff: false, diffValue: "", totalValue: "60", bar1Name: "Túi 1", bar2Name: "Túi 2" },
    hint: "Túi 1 có 2 phần, Túi 2 có 1 phần. Ngoặc tổng cả 2 túi là 60 kg.",
    solution: "Túi 2: 60 : (2 + 1) = 20 (kg). Túi 1: 20 × 2 = 40 (kg)."
  },
  {
    level: "Cấp độ 2: Tổng – Tỉ Đơn giản (Gấp mấy lần)",
    title: "Đàn gà Trống và Mái",
    problem: "Một đàn gà có 100 con gồm gà trống và gà mái. Số gà mái gấp 4 lần số gà trống. Hãy dựng mô hình số gà mỗi loại.",
    target: { bar1Parts: 4, bar2Parts: 1, hasDiff: false, diffValue: "", totalValue: "100", bar1Name: "Gà Mái", bar2Name: "Gà Trống" },
    hint: "Gà mái có 4 phần bằng nhau, gà trống có 1 phần. Ngoặc tổng 5 phần là 100 con.",
    solution: "Gà trống: 100 : (4 + 1) = 20 (con). Gà mái: 20 × 4 = 80 (con)."
  },
  {
    level: "Cấp độ 2: Tổng – Tỉ Đơn giản (Gấp mấy lần)",
    title: "Tủ sách thư viện (Gấp 5 lần)",
    problem: "Tủ sách có 120 quyển gồm Truyện tranh và Sách khoa học. Số truyện tranh gấp 5 lần số sách khoa học. Hãy dựng sơ đồ số sách mỗi loại.",
    target: { bar1Parts: 5, bar2Parts: 1, hasDiff: false, diffValue: "", totalValue: "120", bar1Name: "Truyện tranh", bar2Name: "Sách KH" },
    hint: "Truyện tranh gồm 5 phần bằng nhau, Sách khoa học gồm 1 phần. Ngoặc tổng cả tủ sách là 120.",
    solution: "Tổng số phần: 5 + 1 = 6 (phần). Sách khoa học: 120 : 6 = 20 (quyển). Truyện tranh: 20 × 5 = 100 (quyển)."
  },
  {
    level: "Cấp độ 2: Tổng – Tỉ Đơn giản (Gấp mấy lần)",
    title: "Thùng dầu to và thùng nhỏ",
    problem: "Thùng to chứa gấp 3 lần thùng nhỏ. Cả hai thùng chứa tổng cộng 160 lít dầu. Hãy dựng sơ đồ biểu diễn lượng dầu ở hai thùng.",
    target: { bar1Parts: 3, bar2Parts: 1, hasDiff: false, diffValue: "", totalValue: "160", bar1Name: "Thùng to", bar2Name: "Thùng nhỏ" },
    hint: "Thùng to có 3 phần, thùng nhỏ có 1 phần. Ngoặc tổng 4 phần là 160.",
    solution: "Thùng nhỏ: 160 : (3 + 1) = 40 (lít). Thùng to: 40 × 3 = 120 (lít)."
  },
  {
    level: "Cấp độ 2: Tổng – Tỉ Đơn giản (Gấp mấy lần)",
    title: "Dây xanh và dây đỏ",
    problem: "Cuộn dây xanh dài gấp 5 lần cuộn dây đỏ. Tổng chiều dài của hai cuộn là 180 m. Dựng mô hình chiều dài hai cuộn dây.",
    target: { bar1Parts: 5, bar2Parts: 1, hasDiff: false, diffValue: "", totalValue: "180", bar1Name: "Dây xanh", bar2Name: "Dây đỏ" },
    hint: "Dây xanh vẽ 5 phần, dây đỏ vẽ 1 phần. Ngoặc tổng 6 phần là 180 m.",
    solution: "Dây đỏ: 180 : (5 + 1) = 30 (m). Dây xanh: 30 × 5 = 150 (m)."
  },
  {
    level: "Cấp độ 2: Tổng – Tỉ Đơn giản (Gấp mấy lần)",
    title: "Bóng đá và Cờ vua",
    problem: "Lớp học có 42 bạn. Số bạn thích đá bóng gấp 6 lần số bạn thích cờ vua. Hãy dựng sơ đồ biểu diễn số bạn thích mỗi môn.",
    target: { bar1Parts: 6, bar2Parts: 1, hasDiff: false, diffValue: "", totalValue: "42", bar1Name: "Bóng đá", bar2Name: "Cờ vua" },
    hint: "Bóng đá có 6 phần, Cờ vua có 1 phần. Ngoặc tổng 7 phần là 42 bạn.",
    solution: "Cờ vua: 42 : (6 + 1) = 6 (bạn). Bóng đá: 6 × 6 = 36 (bạn)."
  },
  {
    level: "Cấp độ 2: Tổng – Tỉ Đơn giản (Gấp mấy lần)",
    title: "Ba tổ công nhân trồng cây (3 đối tượng)",
    problem: "Ba tổ công nhân nhận nhiệm vụ trồng 180 cây xanh. Biết Tổ 1 trồng 1 phần, Tổ 2 trồng gấp 2 lần Tổ 1, và Tổ 3 trồng gấp 3 lần Tổ 1. Hãy dựng mô hình tỉ số đoạn thẳng của cả ba tổ.",
    target: { bar1Parts: 2, bar2Parts: 1, bar3Parts: 3, hasBar3: true, hasDiff: false, diffValue: "", totalValue: "180", bar1Name: "Tổ 2", bar2Name: "Tổ 1", bar3Name: "Tổ 3" },
    hint: "Tổ 1 có 1 phần, Tổ 2 có 2 phần, Tổ 3 có 3 phần. Tổng số phần của cả ba tổ là 1 + 2 + 3 = 6 phần ứng với 180 cây.",
    solution: "Tổng số phần bằng nhau: 1 + 2 + 3 = 6 (phần). Tổ 1 trồng: 180 : 6 = 30 (cây). Tổ 2 trồng: 30 × 2 = 60 (cây). Tổ 3 trồng: 30 × 3 = 90 (cây)."
  },
  {
    level: "Cấp độ 2: Tổng – Tỉ Đơn giản (Gấp mấy lần)",
    title: "Ba bạn quyên góp sách (3 đối tượng)",
    problem: "Ba bạn An, Bình và Cường quyên góp được tất cả 140 quyển vở cho vùng cao. Biết số vở của Bình gấp 2 lần của An, và số vở của Cường gấp 4 lần của An. Hãy dựng mô hình biểu diễn số vở của ba bạn.",
    target: { bar1Parts: 2, bar2Parts: 1, bar3Parts: 4, hasBar3: true, hasDiff: false, diffValue: "", totalValue: "140", bar1Name: "Bình", bar2Name: "An", bar3Name: "Cường" },
    hint: "An là 1 phần cơ sở, Bình có 2 phần, Cường có 4 phần. Ngoặc tổng cả ba bạn gồm 1 + 2 + 4 = 7 phần là 140 quyển.",
    solution: "Tổng số phần bằng nhau: 1 + 2 + 4 = 7 (phần). An góp: 140 : 7 = 20 (quyển). Bình góp: 20 × 2 = 40 (quyển). Cường góp: 20 × 4 = 80 (quyển)."
  },
  {
    level: "Cấp độ 2: Tổng – Tỉ Đơn giản (Gấp mấy lần)",
    title: "Ba thùng nước khoáng (3 đối tượng)",
    problem: "Ba thùng chứa tổng cộng 200 lít nước khoáng. Số lít nước ở Thùng 1 bằng 2 phần, Thùng 2 bằng 3 phần và Thùng 3 bằng 5 phần như thế. Hãy dựng sơ đồ số phần của cả ba thùng nước.",
    target: { bar1Parts: 2, bar2Parts: 3, bar3Parts: 5, hasBar3: true, hasDiff: false, diffValue: "", totalValue: "200", bar1Name: "Thùng 1", bar2Name: "Thùng 2", bar3Name: "Thùng 3" },
    hint: "Thùng 1 vẽ 2 phần, Thùng 2 vẽ 3 phần, Thùng 3 vẽ 5 phần. Tổng số phần là 2 + 3 + 5 = 10 phần ứng với 200 lít.",
    solution: "Tổng số phần bằng nhau: 2 + 3 + 5 = 10 (phần). Giá trị 1 phần: 200 : 10 = 20 (lít). Thùng 1: 20 × 2 = 40 (lít). Thùng 2: 20 × 3 = 60 (lít). Thùng 3: 20 × 5 = 100 (lít)."
  },
  {
    level: "Cấp độ 2: Tổng – Tỉ Đơn giản (Gấp mấy lần)",
    title: "Ba ngày bán vải lụa (3 đối tượng)",
    problem: "Một cửa hàng bán được 320 m vải lụa trong ba ngày. Ngày thứ nhất bán được 1 phần, ngày thứ hai bán gấp 3 lần ngày thứ nhất, ngày thứ ba bán gấp 4 lần ngày thứ nhất. Dựng mô hình số mét vải bán trong ba ngày.",
    target: { bar1Parts: 3, bar2Parts: 1, bar3Parts: 4, hasBar3: true, hasDiff: false, diffValue: "", totalValue: "320", bar1Name: "Ngày 2", bar2Name: "Ngày 1", bar3Name: "Ngày 3" },
    hint: "Ngày 1 là 1 phần, Ngày 2 là 3 phần, Ngày 3 là 4 phần. Ngoặc tổng 1 + 3 + 4 = 8 phần là 320 m.",
    solution: "Tổng số phần bằng nhau: 1 + 3 + 4 = 8 (phần). Ngày 1 bán: 320 : 8 = 40 (m). Ngày 2 bán: 40 × 3 = 120 (m). Ngày 3 bán: 40 × 4 = 160 (m)."
  },
  {
    level: "Cấp độ 2: Tổng – Tỉ Đơn giản (Gấp mấy lần)",
    title: "Ba cuộn dây điện thi công (3 đối tượng)",
    problem: "Ba cuộn dây điện dài tổng cộng 360 m. Cuộn 1 và Cuộn 2 mỗi cuộn chiếm 2 phần bằng nhau, còn Cuộn 3 chiếm 5 phần như thế. Dựng sơ đồ đoạn thẳng chiều dài ba cuộn dây.",
    target: { bar1Parts: 2, bar2Parts: 2, bar3Parts: 5, hasBar3: true, hasDiff: false, diffValue: "", totalValue: "360", bar1Name: "Cuộn 1", bar2Name: "Cuộn 2", bar3Name: "Cuộn 3" },
    hint: "Cuộn 1 có 2 phần, Cuộn 2 có 2 phần, Cuộn 3 có 5 phần. Tổng số phần là 2 + 2 + 5 = 9 phần tương ứng 360 m.",
    solution: "Tổng số phần bằng nhau: 2 + 2 + 5 = 9 (phần). Giá trị 1 phần: 360 : 9 = 40 (m). Cuộn 1: 40 × 2 = 80 (m). Cuộn 2: 40 × 2 = 80 (m). Cuộn 3: 40 × 5 = 200 (m)."
  },
  {
    level: "Cấp độ 2: Tổng – Tỉ Đơn giản (Gấp mấy lần)",
    title: "Tìm ba số tự nhiên (3 đối tượng)",
    problem: "Tổng của ba số tự nhiên là 300. Số thứ nhất gấp 2 lần số thứ hai, số thứ ba gấp 3 lần số thứ hai. Hãy dựng mô hình tỉ lệ để tìm ba số đó.",
    target: { bar1Parts: 2, bar2Parts: 1, bar3Parts: 3, hasBar3: true, hasDiff: false, diffValue: "", totalValue: "300", bar1Name: "Số thứ 1", bar2Name: "Số thứ 2", bar3Name: "Số thứ 3" },
    hint: "Số thứ hai là 1 phần cơ sở, Số thứ nhất là 2 phần, Số thứ ba là 3 phần. Tổng 1 + 2 + 3 = 6 phần là 300.",
    solution: "Tổng số phần bằng nhau: 2 + 1 + 3 = 6 (phần). Số thứ 2 là: 300 : 6 = 50. Số thứ 1 là: 50 × 2 = 100. Số thứ 3 là: 50 × 3 = 150."
  },
  {
    level: "Cấp độ 2: Tổng – Tỉ Đơn giản (Gấp mấy lần)",
    title: "Ba xe tải chở hàng cứu trợ (3 đối tượng)",
    problem: "Ba xe tải chở được tất cả 180 tạ hàng cứu trợ. Xe thứ nhất chở 1 phần, xe thứ hai chở gấp 3 lần xe thứ nhất, xe thứ ba chở gấp 5 lần xe thứ nhất. Hãy dựng sơ đồ số phần của ba xe.",
    target: { bar1Parts: 3, bar2Parts: 1, bar3Parts: 5, hasBar3: true, hasDiff: false, diffValue: "", totalValue: "180", bar1Name: "Xe 2", bar2Name: "Xe 1", bar3Name: "Xe 3" },
    hint: "Xe 1 là 1 phần, Xe 2 là 3 phần, Xe 3 là 5 phần. Tổng số phần là 1 + 3 + 5 = 9 phần là 180 tạ.",
    solution: "Tổng số phần bằng nhau: 1 + 3 + 5 = 9 (phần). Xe 1 chở: 180 : 9 = 20 (tạ). Xe 2 chở: 20 × 3 = 60 (tạ). Xe 3 chở: 20 × 5 = 100 (tạ)."
  },
  {
    level: "Cấp độ 2: Tổng – Tỉ Đơn giản (Gấp mấy lần)",
    title: "Ba ngăn sách thư viện (3 đối tượng)",
    problem: "Thư viện trường có 270 cuốn truyện cổ tích xếp vào ba ngăn. Ngăn thứ nhất có 2 phần, ngăn thứ hai có 3 phần, ngăn thứ ba có 4 phần như nhau. Hãy dựng mô hình số truyện ở ba ngăn.",
    target: { bar1Parts: 2, bar2Parts: 3, bar3Parts: 4, hasBar3: true, hasDiff: false, diffValue: "", totalValue: "270", bar1Name: "Ngăn 1", bar2Name: "Ngăn 2", bar3Name: "Ngăn 3" },
    hint: "Ngăn 1 có 2 phần, Ngăn 2 có 3 phần, Ngăn 3 có 4 phần. Tổng số phần cả ba ngăn là 2 + 3 + 4 = 9 phần ứng với 270 cuốn.",
    solution: "Tổng số phần bằng nhau: 2 + 3 + 4 = 9 (phần). Giá trị 1 phần: 270 : 9 = 30 (cuốn). Ngăn 1: 30 × 2 = 60 (cuốn). Ngăn 2: 30 × 3 = 90 (cuốn). Ngăn 3: 30 × 4 = 120 (cuốn)."
  },

  // ==========================================================
  // CẤP ĐỘ 3: HIỆU – TỈ ĐƠN GIẢN (GẤP MẤY LẦN) (15 BÀI)
  // ==========================================================
  {
    level: "Cấp độ 3: Hiệu – Tỉ Đơn giản (Gấp mấy lần)",
    title: "Hai túi gạo (Hiệu – Tỉ kinh điển)",
    problem: "Túi gạo thứ nhất nặng gấp 2 lần túi gạo thứ hai. Túi thứ nhất nặng hơn túi thứ hai 18 kg. Hãy dựng mô hình thể hiện hai túi gạo.",
    target: { bar1Parts: 2, bar2Parts: 1, hasDiff: true, diffValue: "18", totalValue: "", bar1Name: "Túi 1", bar2Name: "Túi 2" },
    hint: "Túi 1 gồm 2 phần, Túi 2 gồm 1 phần. Hiệu 1 phần chênh lệch chính là 18 kg.",
    solution: "Túi 2: 18 : (2 − 1) = 18 (kg). Túi 1: 18 × 2 = 36 (kg)."
  },
  {
    level: "Cấp độ 3: Hiệu – Tỉ Đơn giản (Gấp mấy lần)",
    title: "Tuổi Bố và Bách (Hiệu – Tỉ)",
    problem: "Bố hơn Bách 30 tuổi. Hiện nay tuổi bố gấp 4 lần tuổi Bách. Hãy dựng mô hình biểu diễn số tuổi của bố và Bách.",
    target: { bar1Parts: 4, bar2Parts: 1, hasDiff: true, diffValue: "30", totalValue: "", bar1Name: "Tuổi Bố", bar2Name: "Tuổi Bách" },
    hint: "Tuổi Bố vẽ 4 phần, tuổi Bách vẽ 1 phần. Bố hơn Bách 3 phần tương ứng 30 tuổi.",
    solution: "Hiệu số phần: 4 − 1 = 3 (phần). Tuổi Bách: 30 : 3 = 10 (tuổi). Tuổi Bố: 10 × 4 = 40 (tuổi)."
  },
  {
    level: "Cấp độ 3: Hiệu – Tỉ Đơn giản (Gấp mấy lần)",
    title: "Chạy tiếp sức thể thao",
    problem: "Đội Đỏ chạy được quãng đường gấp 3 lần Đội Xanh, và chạy nhiều hơn Đội Xanh 600m. Hãy dựng sơ đồ quãng đường hai đội.",
    target: { bar1Parts: 3, bar2Parts: 1, hasDiff: true, diffValue: "600", totalValue: "", bar1Name: "Đội Đỏ", bar2Name: "Đội Xanh" },
    hint: "Đội Đỏ có 3 phần, Đội Xanh có 1 phần. Đoạn chênh lệch 2 phần là 600m.",
    solution: "Hiệu số phần: 3 − 1 = 2 (phần). Đội Xanh: 600 : 2 = 300 (m). Đội Đỏ: 300 × 3 = 900 (m)."
  },
  {
    level: "Cấp độ 3: Hiệu – Tỉ Đơn giản (Gấp mấy lần)",
    title: "Số bi của Anh và Em",
    problem: "Anh có số bi gấp 2 lần số bi của em. Anh nhiều hơn em 15 viên bi. Dựng mô hình số bi của hai anh em.",
    target: { bar1Parts: 2, bar2Parts: 1, hasDiff: true, diffValue: "15", totalValue: "", bar1Name: "Bi của Anh", bar2Name: "Bi của Em" },
    hint: "Anh có 2 phần, em có 1 phần. Đoạn chênh lệch 1 phần là 15 viên bi.",
    solution: "Số bi của Em: 15 : (2 − 1) = 15 (viên). Số bi của Anh: 15 × 2 = 30 (viên)."
  },
  {
    level: "Cấp độ 3: Hiệu – Tỉ Đơn giản (Gấp mấy lần)",
    title: "Tuổi Mẹ và Con gái",
    problem: "Mẹ hơn con 24 tuổi. Tuổi mẹ gấp 3 lần tuổi con. Hãy dựng sơ đồ đoạn thẳng biểu diễn số tuổi của mẹ và con.",
    target: { bar1Parts: 3, bar2Parts: 1, hasDiff: true, diffValue: "24", totalValue: "", bar1Name: "Tuổi Mẹ", bar2Name: "Tuổi Con" },
    hint: "Mẹ có 3 phần, con có 1 phần. Hiệu 2 phần chênh lệch là 24 tuổi.",
    solution: "Hiệu số phần: 3 − 1 = 2 (phần). Tuổi con: 24 : 2 = 12 (tuổi). Tuổi mẹ: 12 × 3 = 36 (tuổi)."
  },
  {
    level: "Cấp độ 3: Hiệu – Tỉ Đơn giản (Gấp mấy lần)",
    title: "Hai thùng dầu hỏa",
    problem: "Thùng thứ nhất chứa nhiều hơn thùng thứ hai 60 lít dầu. Số dầu thùng 1 gấp 3 lần số dầu thùng 2. Dựng mô hình lượng dầu.",
    target: { bar1Parts: 3, bar2Parts: 1, hasDiff: true, diffValue: "60", totalValue: "", bar1Name: "Thùng 1", bar2Name: "Thùng 2" },
    hint: "Thùng 1 có 3 phần, Thùng 2 có 1 phần. Đoạn chênh lệch 2 phần là 60 lít.",
    solution: "Thùng 2: 60 : (3 − 1) = 30 (lít). Thùng 1: 30 × 3 = 90 (lít)."
  },
  {
    level: "Cấp độ 3: Hiệu – Tỉ Đơn giản (Gấp mấy lần)",
    title: "Hai chặng đường xe chạy",
    problem: "Chặng đường thứ nhất dài hơn chặng thứ hai 45 km. Chặng thứ nhất dài gấp 4 lần chặng thứ hai. Dựng mô hình hai chặng đường.",
    target: { bar1Parts: 4, bar2Parts: 1, hasDiff: true, diffValue: "45", totalValue: "", bar1Name: "Chặng 1", bar2Name: "Chặng 2" },
    hint: "Chặng 1 có 4 phần, Chặng 2 có 1 phần. Hiệu 3 phần tương ứng 45 km.",
    solution: "Chặng 2: 45 : (4 − 1) = 15 (km). Chặng 1: 15 × 4 = 60 (km)."
  },
  {
    level: "Cấp độ 3: Hiệu – Tỉ Đơn giản (Gấp mấy lần)",
    title: "Vườn bưởi và vườn cam",
    problem: "Cây bưởi cho nhiều hơn cây cam 80 quả. Số quả bưởi gấp 5 lần số quả cam. Hãy dựng sơ đồ số quả hai loại cây.",
    target: { bar1Parts: 5, bar2Parts: 1, hasDiff: true, diffValue: "80", totalValue: "", bar1Name: "Quả Bưởi", bar2Name: "Quả Cam" },
    hint: "Bưởi có 5 phần, Cam có 1 phần. Hiệu 4 phần bằng 80 quả.",
    solution: "Số quả cam: 80 : (5 − 1) = 20 (quả). Số quả bưởi: 20 × 5 = 100 (quả)."
  },
  {
    level: "Cấp độ 3: Hiệu – Tỉ Đơn giản (Gấp mấy lần)",
    title: "Học sinh Nam và Nữ câu lạc bộ",
    problem: "Số học sinh nam nhiều hơn học sinh nữ 24 bạn. Số học sinh nam gấp 3 lần số học sinh nữ. Dựng mô hình số bạn mỗi nhóm.",
    target: { bar1Parts: 3, bar2Parts: 1, hasDiff: true, diffValue: "24", totalValue: "", bar1Name: "HS Nam", bar2Name: "HS Nữ" },
    hint: "HS Nam có 3 phần, HS Nữ có 1 phần. Hiệu 2 phần bằng 24 bạn.",
    solution: "HS Nữ: 24 : (3 − 1) = 12 (bạn). HS Nam: 12 × 3 = 36 (bạn)."
  },
  {
    level: "Cấp độ 3: Hiệu – Tỉ Đơn giản (Gấp mấy lần)",
    title: "Hai đàn vịt trên đồng",
    problem: "Đàn vịt thứ nhất nhiều hơn đàn thứ hai 120 con. Số vịt đàn thứ nhất gấp 4 lần đàn thứ hai. Dựng mô hình hai đàn vịt.",
    target: { bar1Parts: 4, bar2Parts: 1, hasDiff: true, diffValue: "120", totalValue: "", bar1Name: "Đàn 1", bar2Name: "Đàn 2" },
    hint: "Đàn 1 có 4 phần, Đàn 2 có 1 phần. Hiệu 3 phần là 120 con.",
    solution: "Đàn 2: 120 : (4 − 1) = 40 (con). Đàn 1: 40 × 4 = 160 (con)."
  },
  {
    level: "Cấp độ 3: Hiệu – Tỉ Đơn giản (Gấp mấy lần)",
    title: "Hai cuộn cáp mạng",
    problem: "Cuộn cáp thứ nhất dài hơn cuộn thứ hai 75 m. Cuộn 1 dài gấp 4 lần cuộn 2. Hãy dựng mô hình chiều dài hai cuộn cáp.",
    target: { bar1Parts: 4, bar2Parts: 1, hasDiff: true, diffValue: "75", totalValue: "", bar1Name: "Cuộn 1", bar2Name: "Cuộn 2" },
    hint: "Cuộn 1 vẽ 4 phần, cuộn 2 vẽ 1 phần. Hiệu 3 phần là 75 m.",
    solution: "Cuộn 2: 75 : (4 − 1) = 25 (m). Cuộn 1: 25 × 4 = 100 (m)."
  },
  {
    level: "Cấp độ 3: Hiệu – Tỉ Đơn giản (Gấp mấy lần)",
    title: "Tuổi Ông và Cháu",
    problem: "Ông hơn cháu 60 tuổi. Hiện nay tuổi ông gấp 6 lần tuổi cháu. Dựng sơ đồ biểu diễn số tuổi của ông và cháu.",
    target: { bar1Parts: 6, bar2Parts: 1, hasDiff: true, diffValue: "60", totalValue: "", bar1Name: "Tuổi Ông", bar2Name: "Tuổi Cháu" },
    hint: "Tuổi Ông vẽ 6 phần, tuổi Cháu vẽ 1 phần. Hiệu 5 phần tương ứng 60 tuổi.",
    solution: "Tuổi cháu: 60 : (6 − 1) = 12 (tuổi). Tuổi ông: 12 × 6 = 72 (tuổi)."
  },
  {
    level: "Cấp độ 3: Hiệu – Tỉ Đơn giản (Gấp mấy lần)",
    title: "Hai ruộng ngô thu hoạch",
    problem: "Thửa ruộng thứ nhất thu hoạch nhiều hơn thửa thứ hai 500 kg ngô và gấp 3 lần thửa thứ hai. Dựng mô hình hai thửa ruộng.",
    target: { bar1Parts: 3, bar2Parts: 1, hasDiff: true, diffValue: "500", totalValue: "", bar1Name: "Thửa 1", bar2Name: "Thửa 2" },
    hint: "Thửa 1 có 3 phần, Thửa 2 có 1 phần. Hiệu 2 phần chênh lệch là 500 kg.",
    solution: "Thửa 2: 500 : (3 − 1) = 250 (kg). Thửa 1: 250 × 3 = 750 (kg)."
  },
  {
    level: "Cấp độ 3: Hiệu – Tỉ Đơn giản (Gấp mấy lần)",
    title: "Số bi của Minh và Hải",
    problem: "Minh có số bi nhiều hơn Hải 36 viên. Số bi của Minh gấp 5 lần số bi của Hải. Dựng sơ đồ số bi hai bạn.",
    target: { bar1Parts: 5, bar2Parts: 1, hasDiff: true, diffValue: "36", totalValue: "", bar1Name: "Bi Minh", bar2Name: "Bi Hải" },
    hint: "Minh có 5 phần, Hải có 1 phần. Hiệu 4 phần là 36 viên bi.",
    solution: "Số bi Hải: 36 : (5 − 1) = 9 (viên). Số bi Minh: 9 × 5 = 45 (viên)."
  },
  {
    level: "Cấp độ 3: Hiệu – Tỉ Đơn giản (Gấp mấy lần)",
    title: "Hai bể chứa nước sạch",
    problem: "Bể thứ nhất chứa nhiều hơn bể thứ hai 420 lít nước. Bể 1 chứa gấp 7 lần bể 2. Dựng mô hình lượng nước hai bể.",
    target: { bar1Parts: 7, bar2Parts: 1, hasDiff: true, diffValue: "420", totalValue: "", bar1Name: "Bể 1", bar2Name: "Bể 2" },
    hint: "Bể 1 có 7 phần, Bể 2 có 1 phần. Hiệu 6 phần là 420 lít.",
    solution: "Bể 2: 420 : (7 − 1) = 70 (lít). Bể 1: 70 × 7 = 490 (lít)."
  },

  // ==========================================================
  // CẤP ĐỘ 4: TỔNG – TỈ PHÂN SỐ (TỈ LỆ m:n) (15 BÀI)
  // ==========================================================
  {
    level: "Cấp độ 4: Tổng – Tỉ Phân số (Tỉ lệ m:n)",
    title: "Học sinh Giỏi và Khá (Tỉ lệ 2/3)",
    problem: "Lớp 4A có 35 học sinh gồm hai loại Giỏi và Khá. Số học sinh Giỏi bằng 2/3 số học sinh Khá. Hãy dựng mô hình thể hiện số học sinh mỗi loại.",
    target: { bar1Parts: 2, bar2Parts: 3, hasDiff: false, diffValue: "", totalValue: "35", bar1Name: "HS Giỏi", bar2Name: "HS Khá" },
    hint: "Học sinh Giỏi có 2 phần, Học sinh Khá có 3 phần. Ngoặc tổng cả hai nhóm là 35 bạn.",
    solution: "Tổng số phần: 2 + 3 = 5 (phần). HS Giỏi: 35 : 5 × 2 = 14 (bạn). HS Khá: 35 − 14 = 21 (bạn)."
  },
  {
    level: "Cấp độ 4: Tổng – Tỉ Phân số (Tỉ lệ m:n)",
    title: "Đàn dê và cừu (Tỉ lệ 3/4)",
    problem: "Một trang trại nuôi 70 con dê và cừu. Số dê bằng 3/4 số cừu. Hãy dựng sơ đồ đoạn thẳng số dê và số cừu.",
    target: { bar1Parts: 3, bar2Parts: 4, hasDiff: false, diffValue: "", totalValue: "70", bar1Name: "Số Dê", bar2Name: "Số Cừu" },
    hint: "Dê có 3 phần, Cừu có 4 phần. Ngoặc tổng 7 phần là 70 con.",
    solution: "Tổng số phần: 3 + 4 = 7. Số dê: 70 : 7 × 3 = 30 (con). Số cừu: 70 − 30 = 40 (con)."
  },
  {
    level: "Cấp độ 4: Tổng – Tỉ Phân số (Tỉ lệ m:n)",
    title: "Hai ngăn sách (Tỉ lệ 2/3)",
    problem: "Hai ngăn sách có tất cả 90 quyển sách. Số sách ngăn trên bằng 2/3 số sách ngăn dưới. Dựng mô hình hai ngăn sách.",
    target: { bar1Parts: 2, bar2Parts: 3, hasDiff: false, diffValue: "", totalValue: "90", bar1Name: "Ngăn trên", bar2Name: "Ngăn dưới" },
    hint: "Ngăn trên 2 phần, ngăn dưới 3 phần. Ngoặc tổng 5 phần là 90 quyển.",
    solution: "Ngăn trên: 90 : (2 + 3) × 2 = 36 (quyển). Ngăn dưới: 90 − 36 = 54 (quyển)."
  },
  {
    level: "Cấp độ 4: Tổng – Tỉ Phân số (Tỉ lệ m:n)",
    title: "Chiều rộng và Chiều dài (Tỉ lệ 3/5)",
    problem: "Chiều dài và chiều rộng của một mảnh vườn có tổng là 80 m. Chiều rộng bằng 3/5 chiều dài. Hãy dựng sơ đồ hai cạnh mảnh vườn.",
    target: { bar1Parts: 5, bar2Parts: 3, hasDiff: false, diffValue: "", totalValue: "80", bar1Name: "Chiều dài", bar2Name: "Chiều rộng" },
    hint: "Chiều dài 5 phần, Chiều rộng 3 phần. Ngoặc tổng 8 phần là 80 m.",
    solution: "Chiều rộng: 80 : (5 + 3) × 3 = 30 (m). Chiều dài: 80 − 30 = 50 (m)."
  },
  {
    level: "Cấp độ 4: Tổng – Tỉ Phân số (Tỉ lệ m:n)",
    title: "Số bi của An và Bình (Tỉ lệ 4/5)",
    problem: "Tổng số bi của hai bạn là 63 viên. Số bi của Bình bằng 4/5 số bi của An. Hãy dựng sơ đồ đoạn thẳng số bi hai bạn.",
    target: { bar1Parts: 5, bar2Parts: 4, hasDiff: false, diffValue: "", totalValue: "63", bar1Name: "Bi của An", bar2Name: "Bi của Bình" },
    hint: "An có 5 phần, Bình có 4 phần. Ngoặc tổng 9 phần là 63 viên bi.",
    solution: "Bi của Bình: 63 : (5 + 4) × 4 = 28 (viên). Bi của An: 63 − 28 = 35 (viên)."
  },
  {
    level: "Cấp độ 4: Tổng – Tỉ Phân số (Tỉ lệ m:n)",
    title: "Gạo tẻ và Gạo nếp (Tỉ lệ 2/3)",
    problem: "Cửa hàng có 100 kg gạo gồm gạo tẻ và gạo nếp. Số gạo nếp bằng 2/3 số gạo tẻ. Dựng mô hình số kg gạo mỗi loại.",
    target: { bar1Parts: 3, bar2Parts: 2, hasDiff: false, diffValue: "", totalValue: "100", bar1Name: "Gạo tẻ", bar2Name: "Gạo nếp" },
    hint: "Gạo tẻ có 3 phần, Gạo nếp có 2 phần. Ngoặc tổng 5 phần là 100 kg.",
    solution: "Gạo nếp: 100 : (3 + 2) × 2 = 40 (kg). Gạo tẻ: 100 − 40 = 60 (kg)."
  },
  {
    level: "Cấp độ 4: Tổng – Tỉ Phân số (Tỉ lệ m:n)",
    title: "Học vẽ và Học đàn piano (Tỉ lệ 3/7)",
    problem: "Khối 4 có 130 bạn học năng khiếu vẽ và piano. Số bạn học vẽ bằng 3/7 số bạn học piano. Dựng sơ đồ số bạn mỗi môn.",
    target: { bar1Parts: 7, bar2Parts: 3, hasDiff: false, diffValue: "", totalValue: "130", bar1Name: "Học Piano", bar2Name: "Học Vẽ" },
    hint: "Piano có 7 phần, Vẽ có 3 phần. Ngoặc tổng 10 phần là 130 bạn.",
    solution: "Học vẽ: 130 : (7 + 3) × 3 = 39 (bạn). Học piano: 130 − 39 = 91 (bạn)."
  },
  {
    level: "Cấp độ 4: Tổng – Tỉ Phân số (Tỉ lệ m:n)",
    title: "Cây trồng hai lớp (Tỉ lệ 5/6)",
    problem: "Tổng số cây hai lớp 4A và 4B trồng được là 88 cây. Lớp 4A trồng được bằng 5/6 số cây lớp 4B. Dựng sơ đồ hai lớp.",
    target: { bar1Parts: 6, bar2Parts: 5, hasDiff: false, diffValue: "", totalValue: "88", bar1Name: "Lớp 4B", bar2Name: "Lớp 4A" },
    hint: "Lớp 4B có 6 phần, Lớp 4A có 5 phần. Ngoặc tổng 11 phần là 88 cây.",
    solution: "Lớp 4A: 88 : (6 + 5) × 5 = 40 (cây). Lớp 4B: 88 − 40 = 48 (cây)."
  },
  {
    level: "Cấp độ 4: Tổng – Tỉ Phân số (Tỉ lệ m:n)",
    title: "Hai chặng đường 120 km (Tỉ lệ 3/5)",
    problem: "Chặng đường dài 120 km được chia làm hai phần. Chặng thứ nhất bằng 3/5 chặng thứ hai. Dựng mô hình hai chặng đường.",
    target: { bar1Parts: 5, bar2Parts: 3, hasDiff: false, diffValue: "", totalValue: "120", bar1Name: "Chặng 2", bar2Name: "Chặng 1" },
    hint: "Chặng 2 có 5 phần, Chặng 1 có 3 phần. Ngoặc tổng 8 phần là 120 km.",
    solution: "Chặng 1: 120 : (5 + 3) × 3 = 45 (km). Chặng 2: 120 − 45 = 75 (km)."
  },
  {
    level: "Cấp độ 4: Tổng – Tỉ Phân số (Tỉ lệ m:n)",
    title: "Hai kho thóc dự trữ (Tỉ lệ 4/5)",
    problem: "Hai kho thóc dự trữ chứa tất cả 180 tấn thóc. Kho A chứa bằng 4/5 kho B. Hãy dựng sơ đồ số thóc ở hai kho.",
    target: { bar1Parts: 5, bar2Parts: 4, hasDiff: false, diffValue: "", totalValue: "180", bar1Name: "Kho B", bar2Name: "Kho A" },
    hint: "Kho B có 5 phần, Kho A có 4 phần. Ngoặc tổng 9 phần là 180 tấn.",
    solution: "Kho A: 180 : (5 + 4) × 4 = 80 (tấn). Kho B: 180 − 80 = 100 (tấn)."
  },
  {
    level: "Cấp độ 4: Tổng – Tỉ Phân số (Tỉ lệ m:n)",
    title: "Nước máy và Nước mưa (Tỉ lệ 2/5)",
    problem: "Một bể có 140 lít gồm nước máy và nước mưa. Lượng nước mưa bằng 2/5 lượng nước máy. Dựng mô hình hai loại nước.",
    target: { bar1Parts: 5, bar2Parts: 2, hasDiff: false, diffValue: "", totalValue: "140", bar1Name: "Nước máy", bar2Name: "Nước mưa" },
    hint: "Nước máy có 5 phần, Nước mưa có 2 phần. Ngoặc tổng 7 phần là 140 lít.",
    solution: "Nước mưa: 140 : (5 + 2) × 2 = 40 (lít). Nước máy: 140 − 40 = 100 (lít)."
  },
  {
    level: "Cấp độ 4: Tổng – Tỉ Phân số (Tỉ lệ m:n)",
    title: "Cây xoài và Cây nhãn (Tỉ lệ 4/5)",
    problem: "Vườn cây có 108 cây ăn quả. Số cây xoài bằng 4/5 số cây nhãn. Hãy dựng sơ đồ số cây xoài và cây nhãn.",
    target: { bar1Parts: 5, bar2Parts: 4, hasDiff: false, diffValue: "", totalValue: "108", bar1Name: "Cây Nhãn", bar2Name: "Cây Xoài" },
    hint: "Cây nhãn 5 phần, Cây xoài 4 phần. Ngoặc tổng 9 phần là 108 cây.",
    solution: "Cây xoài: 108 : (5 + 4) × 4 = 48 (cây). Cây nhãn: 108 − 48 = 60 (cây)."
  },
  {
    level: "Cấp độ 4: Tổng – Tỉ Phân số (Tỉ lệ m:n)",
    title: "Hai bao xi măng (Tỉ lệ 4/5)",
    problem: "Hai bao xi măng nặng tất cả 135 kg. Bao thứ nhất nặng bằng 4/5 bao thứ hai. Dựng mô hình cân nặng hai bao xi măng.",
    target: { bar1Parts: 5, bar2Parts: 4, hasDiff: false, diffValue: "", totalValue: "135", bar1Name: "Bao 2", bar2Name: "Bao 1" },
    hint: "Bao 2 có 5 phần, Bao 1 có 4 phần. Ngoặc tổng 9 phần là 135 kg.",
    solution: "Bao 1: 135 : (5 + 4) × 4 = 60 (kg). Bao 2: 135 − 60 = 75 (kg)."
  },
  {
    level: "Cấp độ 4: Tổng – Tỉ Phân số (Tỉ lệ m:n)",
    title: "Sợi dây dài 99 cm (Tỉ lệ 4/7)",
    problem: "Một sợi dây dài 99 cm được cắt thành hai đoạn. Đoạn thứ nhất dài bằng 4/7 đoạn thứ hai. Dựng sơ đồ chiều dài hai đoạn dây.",
    target: { bar1Parts: 7, bar2Parts: 4, hasDiff: false, diffValue: "", totalValue: "99", bar1Name: "Đoạn 2", bar2Name: "Đoạn 1" },
    hint: "Đoạn 2 có 7 phần, Đoạn 1 có 4 phần. Ngoặc tổng 11 phần là 99 cm.",
    solution: "Đoạn 1: 99 : (7 + 4) × 4 = 36 (cm). Đoạn 2: 99 − 36 = 63 (cm)."
  },
  {
    level: "Cấp độ 4: Tổng – Tỉ Phân số (Tỉ lệ m:n)",
    title: "Tuổi Em và Tuổi Anh (Tỉ lệ 3/4)",
    problem: "Tổng số tuổi của hai anh em là 28 tuổi. Tuổi em bằng 3/4 tuổi anh. Hãy dựng sơ đồ biểu diễn số tuổi của hai anh em.",
    target: { bar1Parts: 4, bar2Parts: 3, hasDiff: false, diffValue: "", totalValue: "28", bar1Name: "Tuổi Anh", bar2Name: "Tuổi Em" },
    hint: "Tuổi Anh là 4 phần, tuổi Em là 3 phần. Ngoặc tổng 7 phần là 28 tuổi.",
    solution: "Tuổi Em: 28 : (4 + 3) × 3 = 12 (tuổi). Tuổi Anh: 28 − 12 = 16 (tuổi)."
  },

  // ==========================================================
  // CẤP ĐỘ 5: HIỆU – TỈ PHÂN SỐ (TỈ LỆ m:n) (15 BÀI)
  // ==========================================================
  {
    level: "Cấp độ 5: Hiệu – Tỉ Phân số (Tỉ lệ m:n)",
    title: "Học sinh Nam và Nữ (Tỉ lệ 3/2)",
    problem: "Số học sinh nam bằng 3/2 số học sinh nữ. Số nam nhiều hơn số nữ là 12 bạn. Dựng mô hình số học sinh nam và nữ.",
    target: { bar1Parts: 3, bar2Parts: 2, hasDiff: true, diffValue: "12", totalValue: "", bar1Name: "HS Nam", bar2Name: "HS Nữ" },
    hint: "HS Nam 3 phần, HS Nữ 2 phần. Hiệu 1 phần chênh lệch là 12 bạn.",
    solution: "HS Nữ: 12 : (3 − 2) × 2 = 24 (bạn). HS Nam: 12 × 3 = 36 (bạn)."
  },
  {
    level: "Cấp độ 5: Hiệu – Tỉ Phân số (Tỉ lệ m:n)",
    title: "Chiều dài và Chiều rộng vườn (Tỉ lệ 4/3)",
    problem: "Chiều dài mảnh vườn bằng 4/3 chiều rộng. Chiều dài hơn chiều rộng 15 m. Hãy dựng sơ đồ hai kích thước của mảnh vườn.",
    target: { bar1Parts: 4, bar2Parts: 3, hasDiff: true, diffValue: "15", totalValue: "", bar1Name: "Chiều dài", bar2Name: "Chiều rộng" },
    hint: "Chiều dài 4 phần, Chiều rộng 3 phần. Hiệu 1 phần chênh lệch là 15 m.",
    solution: "Chiều rộng: 15 : (4 − 3) × 3 = 45 (m). Chiều dài: 15 × 4 = 60 (m)."
  },
  {
    level: "Cấp độ 5: Hiệu – Tỉ Phân số (Tỉ lệ m:n)",
    title: "Kho A và Kho B thóc (Tỉ lệ 5/3)",
    problem: "Kho A chứa lượng thóc bằng 5/3 kho B. Kho A nhiều hơn kho B 40 tấn thóc. Dựng mô hình lượng thóc ở hai kho.",
    target: { bar1Parts: 5, bar2Parts: 3, hasDiff: true, diffValue: "40", totalValue: "", bar1Name: "Kho A", bar2Name: "Kho B" },
    hint: "Kho A có 5 phần, Kho B có 3 phần. Hiệu 2 phần chênh lệch là 40 tấn.",
    solution: "Kho B: 40 : (5 − 3) × 3 = 60 (tấn). Kho A: 60 + 40 = 100 (tấn)."
  },
  {
    level: "Cấp độ 5: Hiệu – Tỉ Phân số (Tỉ lệ m:n)",
    title: "Bi đỏ và Bi xanh (Tỉ lệ 5/2)",
    problem: "Số bi đỏ bằng 5/2 số bi xanh. Số bi đỏ nhiều hơn số bi xanh 18 viên. Dựng sơ đồ số bi mỗi loại.",
    target: { bar1Parts: 5, bar2Parts: 2, hasDiff: true, diffValue: "18", totalValue: "", bar1Name: "Bi Đỏ", bar2Name: "Bi Xanh" },
    hint: "Bi Đỏ có 5 phần, Bi Xanh có 2 phần. Hiệu 3 phần là 18 viên.",
    solution: "Bi Xanh: 18 : (5 − 2) × 2 = 12 (viên). Bi Đỏ: 12 + 18 = 30 (viên)."
  },
  {
    level: "Cấp độ 5: Hiệu – Tỉ Phân số (Tỉ lệ m:n)",
    title: "Hai cuộn dây thép (Tỉ lệ 7/4)",
    problem: "Cuộn thứ nhất dài bằng 7/4 cuộn thứ hai. Cuộn 1 dài hơn cuộn 2 là 45 m. Dựng mô hình chiều dài hai cuộn dây.",
    target: { bar1Parts: 7, bar2Parts: 4, hasDiff: true, diffValue: "45", totalValue: "", bar1Name: "Cuộn 1", bar2Name: "Cuộn 2" },
    hint: "Cuộn 1 có 7 phần, Cuộn 2 có 4 phần. Hiệu 3 phần là 45 m.",
    solution: "Cuộn 2: 45 : (7 − 4) × 4 = 60 (m). Cuộn 1: 60 + 45 = 105 (m)."
  },
  {
    level: "Cấp độ 5: Hiệu – Tỉ Phân số (Tỉ lệ m:n)",
    title: "Lúa thu hoạch hai thửa (Tỉ lệ 4/3)",
    problem: "Thửa ruộng thứ nhất thu hoạch bằng 4/3 thửa ruộng thứ hai. Thửa 1 nhiều hơn thửa 2 là 250 kg thóc. Dựng sơ đồ hai thửa.",
    target: { bar1Parts: 4, bar2Parts: 3, hasDiff: true, diffValue: "250", totalValue: "", bar1Name: "Thửa 1", bar2Name: "Thửa 2" },
    hint: "Thửa 1 có 4 phần, Thửa 2 có 3 phần. Hiệu 1 phần chênh lệch là 250 kg.",
    solution: "Thửa 2: 250 × 3 = 750 (kg). Thửa 1: 250 × 4 = 1000 (kg)."
  },
  {
    level: "Cấp độ 5: Hiệu – Tỉ Phân số (Tỉ lệ m:n)",
    title: "Cam và Táo trong rổ (Tỉ lệ 5/3)",
    problem: "Số quả cam bằng 5/3 số quả táo. Số cam nhiều hơn số táo là 24 quả. Dựng mô hình số quả mỗi loại.",
    target: { bar1Parts: 5, bar2Parts: 3, hasDiff: true, diffValue: "24", totalValue: "", bar1Name: "Quả Cam", bar2Name: "Quả Táo" },
    hint: "Cam có 5 phần, Táo có 3 phần. Hiệu 2 phần là 24 quả.",
    solution: "Số táo: 24 : (5 − 3) × 3 = 36 (quả). Số cam: 36 + 24 = 60 (quả)."
  },
  {
    level: "Cấp độ 5: Hiệu – Tỉ Phân số (Tỉ lệ m:n)",
    title: "Quãng đường Ô tô và Xe máy (Tỉ lệ 5/2)",
    problem: "Quãng đường ô tô đi được bằng 5/2 quãng đường xe máy đi. Ô tô đi xa hơn xe máy 90 km. Dựng mô hình hai quãng đường.",
    target: { bar1Parts: 5, bar2Parts: 2, hasDiff: true, diffValue: "90", totalValue: "", bar1Name: "Ô tô", bar2Name: "Xe máy" },
    hint: "Ô tô có 5 phần, Xe máy có 2 phần. Hiệu 3 phần là 90 km.",
    solution: "Xe máy: 90 : (5 − 2) × 2 = 60 (km). Ô tô: 60 + 90 = 150 (km)."
  },
  {
    level: "Cấp độ 5: Hiệu – Tỉ Phân số (Tỉ lệ m:n)",
    title: "Giá tiền Cặp sách và Hộp bút (Tỉ lệ 7/3)",
    problem: "Giá tiền cặp sách bằng 7/3 giá tiền hộp bút. Cặp sách đắt hơn hộp bút 80 nghìn đồng. Dựng sơ đồ giá tiền hai vật.",
    target: { bar1Parts: 7, bar2Parts: 3, hasDiff: true, diffValue: "80", totalValue: "", bar1Name: "Cặp sách", bar2Name: "Hộp bút" },
    hint: "Cặp sách có 7 phần, Hộp bút có 3 phần. Hiệu 4 phần là 80 nghìn đồng.",
    solution: "Hộp bút: 80 : (7 − 3) × 3 = 60 (nghìn). Cặp sách: 60 + 80 = 140 (nghìn)."
  },
  {
    level: "Cấp độ 5: Hiệu – Tỉ Phân số (Tỉ lệ m:n)",
    title: "Hai thùng dầu hỏa (Tỉ lệ 5/2)",
    problem: "Thùng thứ nhất chứa lượng dầu bằng 5/2 thùng thứ hai. Thùng 1 nhiều hơn thùng 2 là 36 lít dầu. Dựng mô hình lượng dầu.",
    target: { bar1Parts: 5, bar2Parts: 2, hasDiff: true, diffValue: "36", totalValue: "", bar1Name: "Thùng 1", bar2Name: "Thùng 2" },
    hint: "Thùng 1 có 5 phần, Thùng 2 có 2 phần. Hiệu 3 phần là 36 lít.",
    solution: "Thùng 2: 36 : (5 − 2) × 2 = 24 (lít). Thùng 1: 24 + 36 = 60 (lít)."
  },
  {
    level: "Cấp độ 5: Hiệu – Tỉ Phân số (Tỉ lệ m:n)",
    title: "Học sinh Giỏi và Khá (Tỉ lệ 4/3)",
    problem: "Số học sinh giỏi của lớp bằng 4/3 số học sinh khá. Số HS giỏi nhiều hơn số HS khá 5 bạn. Dựng sơ đồ số học sinh hai loại.",
    target: { bar1Parts: 4, bar2Parts: 3, hasDiff: true, diffValue: "5", totalValue: "", bar1Name: "HS Giỏi", bar2Name: "HS Khá" },
    hint: "HS Giỏi có 4 phần, HS Khá có 3 phần. Hiệu 1 phần chênh lệch là 5 bạn.",
    solution: "HS Khá: 5 × 3 = 15 (bạn). HS Giỏi: 5 × 4 = 20 (bạn)."
  },
  {
    level: "Cấp độ 5: Hiệu – Tỉ Phân số (Tỉ lệ m:n)",
    title: "Vải xanh và Vải đỏ (Tỉ lệ 7/5)",
    problem: "Tấm vải xanh dài bằng 7/5 tấm vải đỏ. Vải xanh dài hơn vải đỏ 16 m. Dựng mô hình chiều dài hai tấm vải.",
    target: { bar1Parts: 7, bar2Parts: 5, hasDiff: true, diffValue: "16", totalValue: "", bar1Name: "Vải xanh", bar2Name: "Vải đỏ" },
    hint: "Vải xanh có 7 phần, Vải đỏ có 5 phần. Hiệu 2 phần là 16 m.",
    solution: "Vải đỏ: 16 : (7 − 5) × 5 = 40 (m). Vải xanh: 40 + 16 = 56 (m)."
  },
  {
    level: "Cấp độ 5: Hiệu – Tỉ Phân số (Tỉ lệ m:n)",
    title: "Đàn gà và Đàn vịt (Tỉ lệ 5/2)",
    problem: "Bác Tư nuôi số gà bằng 5/2 số vịt. Số gà nhiều hơn số vịt 45 con. Dựng mô hình số gà và số vịt.",
    target: { bar1Parts: 5, bar2Parts: 2, hasDiff: true, diffValue: "45", totalValue: "", bar1Name: "Số Gà", bar2Name: "Số Vịt" },
    hint: "Gà có 5 phần, Vịt có 2 phần. Hiệu 3 phần là 45 con.",
    solution: "Số vịt: 45 : (5 − 2) × 2 = 30 (con). Số gà: 30 + 45 = 75 (con)."
  },
  {
    level: "Cấp độ 5: Hiệu – Tỉ Phân số (Tỉ lệ m:n)",
    title: "Hai túi gạo (Tỉ lệ 7/3)",
    problem: "Túi gạo to nặng bằng 7/3 túi gạo nhỏ. Túi to nặng hơn túi nhỏ 24 kg. Dựng sơ đồ cân nặng hai túi gạo.",
    target: { bar1Parts: 7, bar2Parts: 3, hasDiff: true, diffValue: "24", totalValue: "", bar1Name: "Túi to", bar2Name: "Túi nhỏ" },
    hint: "Túi to có 7 phần, Túi nhỏ có 3 phần. Hiệu 4 phần là 24 kg.",
    solution: "Túi nhỏ: 24 : (7 − 3) × 3 = 18 (kg). Túi to: 18 + 24 = 42 (kg)."
  },
  {
    level: "Cấp độ 5: Hiệu – Tỉ Phân số (Tỉ lệ m:n)",
    title: "Vận tốc Ô tô và Xe máy (Tỉ lệ 5/3)",
    problem: "Vận tốc ô tô bằng 5/3 vận tốc xe máy. Mỗi giờ ô tô đi nhanh hơn xe máy 20 km. Dựng mô hình vận tốc hai xe.",
    target: { bar1Parts: 5, bar2Parts: 3, hasDiff: true, diffValue: "20", totalValue: "", bar1Name: "Vận tốc Ô tô", bar2Name: "Vận tốc Xe máy" },
    hint: "Ô tô có 5 phần, Xe máy có 3 phần. Hiệu 2 phần là 20 km/h.",
    solution: "Vận tốc xe máy: 20 : (5 − 3) × 3 = 30 (km/h). Vận tốc ô tô: 30 + 20 = 50 (km/h)."
  },

  // ==========================================================
  // CẤP ĐỘ 6: BÀI TOÁN TUỔI TÁC SINGAPORE (12 BÀI)
  // ==========================================================
  {
    level: "Cấp độ 6: Bài toán Tuổi tác Singapore",
    title: "Mẹ hơn con 28 tuổi (Gấp 3 lần)",
    problem: "Hiện nay mẹ hơn con 28 tuổi. Sau 3 năm nữa tuổi mẹ gấp 3 lần tuổi con. Hãy dựng sơ đồ số tuổi của mẹ và con sau 3 năm nữa (hiệu tuổi không đổi).",
    target: { bar1Parts: 3, bar2Parts: 1, hasDiff: true, diffValue: "28", totalValue: "", bar1Name: "Tuổi Mẹ", bar2Name: "Tuổi Con" },
    hint: "Hiệu số tuổi mẹ và con luôn không đổi là 28 tuổi. Sau 3 năm nữa mẹ 3 phần, con 1 phần.",
    solution: "Tuổi con sau 3 năm: 28 : (3 − 1) = 14 (tuổi). Tuổi con hiện nay: 14 − 3 = 11 (tuổi)."
  },
  {
    level: "Cấp độ 6: Bài toán Tuổi tác Singapore",
    title: "Bố hơn Bách 27 tuổi (Gấp 4 lần)",
    problem: "Bố hơn Bách 27 tuổi. Cách đây 5 năm tuổi bố gấp 4 lần tuổi Bách. Dựng mô hình tuổi bố và Bách cách đây 5 năm.",
    target: { bar1Parts: 4, bar2Parts: 1, hasDiff: true, diffValue: "27", totalValue: "", bar1Name: "Tuổi Bố", bar2Name: "Tuổi Bách" },
    hint: "Dù 5 năm trước hay hiện nay thì bố luôn hơn Bách 27 tuổi! Bố vẽ 4 phần, Bách vẽ 1 phần.",
    solution: "Tuổi Bách 5 năm trước: 27 : (4 − 1) = 9 (tuổi). Tuổi Bách hiện nay: 9 + 5 = 14 (tuổi)."
  },
  {
    level: "Cấp độ 6: Bài toán Tuổi tác Singapore",
    title: "Bà hơn Cháu 56 tuổi (Gấp 5 lần)",
    problem: "Bà hơn cháu 56 tuổi. Khi tuổi bà gấp 5 lần tuổi cháu hãy dựng sơ đồ đoạn thẳng thể hiện số tuổi của bà và cháu.",
    target: { bar1Parts: 5, bar2Parts: 1, hasDiff: true, diffValue: "56", totalValue: "", bar1Name: "Tuổi Bà", bar2Name: "Tuổi Cháu" },
    hint: "Tuổi Bà 5 phần, tuổi Cháu 1 phần. Hiệu số phần là 4 phần tương ứng 56 tuổi.",
    solution: "Tuổi cháu: 56 : (5 − 1) = 14 (tuổi). Tuổi bà: 14 × 5 = 70 (tuổi)."
  },
  {
    level: "Cấp độ 6: Bài toán Tuổi tác Singapore",
    title: "Anh hơn em 6 tuổi (Gấp 3 lần)",
    problem: "Anh hơn em 6 tuổi. Cách đây 2 năm tuổi anh gấp 3 lần tuổi em. Dựng mô hình tuổi hai anh em cách đây 2 năm.",
    target: { bar1Parts: 3, bar2Parts: 1, hasDiff: true, diffValue: "6", totalValue: "", bar1Name: "Tuổi Anh", bar2Name: "Tuổi Em" },
    hint: "Hiệu số tuổi luôn là 6 tuổi. Cách đây 2 năm Anh 3 phần, Em 1 phần.",
    solution: "Tuổi em 2 năm trước: 6 : (3 − 1) = 3 (tuổi). Tuổi em hiện nay: 3 + 2 = 5 (tuổi)."
  },
  {
    level: "Cấp độ 6: Bài toán Tuổi tác Singapore",
    title: "Chú hơn Bình 24 tuổi (Gấp 3 lần)",
    problem: "Chú hơn Bình 24 tuổi. Sau 4 năm nữa tuổi chú gấp 3 lần tuổi Bình. Dựng sơ đồ đoạn thẳng tuổi của chú và Bình khi đó.",
    target: { bar1Parts: 3, bar2Parts: 1, hasDiff: true, diffValue: "24", totalValue: "", bar1Name: "Tuổi Chú", bar2Name: "Tuổi Bình" },
    hint: "Sau 4 năm nữa chú vẫn hơn Bình 24 tuổi! Chú 3 phần, Bình 1 phần.",
    solution: "Tuổi Bình sau 4 năm: 24 : (3 − 1) = 12 (tuổi). Tuổi Bình hiện nay: 12 − 4 = 8 (tuổi)."
  },
  {
    level: "Cấp độ 6: Bài toán Tuổi tác Singapore",
    title: "Mẹ hơn Mai 26 tuổi (Gấp 3 lần hiện nay)",
    problem: "Mẹ hơn Mai 26 tuổi. Hiện nay tuổi mẹ gấp 3 lần tuổi Mai. Dựng sơ đồ tuổi mẹ và Mai hiện nay.",
    target: { bar1Parts: 3, bar2Parts: 1, hasDiff: true, diffValue: "26", totalValue: "", bar1Name: "Tuổi Mẹ", bar2Name: "Tuổi Mai" },
    hint: "Tuổi Mẹ vẽ 3 phần, tuổi Mai vẽ 1 phần. Hiệu 2 phần chênh lệch là 26 tuổi.",
    solution: "Tuổi Mai: 26 : (3 − 1) = 13 (tuổi). Tuổi Mẹ: 13 × 3 = 39 (tuổi)."
  },
  {
    level: "Cấp độ 6: Bài toán Tuổi tác Singapore",
    title: "Bố hơn con 32 tuổi (Gấp 5 lần)",
    problem: "Bố hơn con 32 tuổi. Hiện nay tuổi bố gấp 5 lần tuổi con. Hãy dựng sơ đồ số tuổi bố và con hiện nay.",
    target: { bar1Parts: 5, bar2Parts: 1, hasDiff: true, diffValue: "32", totalValue: "", bar1Name: "Tuổi Bố", bar2Name: "Tuổi Con" },
    hint: "Bố 5 phần, con 1 phần. Đoạn chênh lệch 4 phần là 32 tuổi.",
    solution: "Tuổi con: 32 : (5 − 1) = 8 (tuổi). Tuổi bố: 8 × 5 = 40 (tuổi)."
  },
  {
    level: "Cấp độ 6: Bài toán Tuổi tác Singapore",
    title: "Cô giáo hơn Linh 21 tuổi (Gấp 4 lần)",
    problem: "Cô giáo hơn Linh 21 tuổi. Khi tuổi cô gấp 4 lần tuổi Linh, hãy dựng mô hình biểu diễn số tuổi hai cô trò.",
    target: { bar1Parts: 4, bar2Parts: 1, hasDiff: true, diffValue: "21", totalValue: "", bar1Name: "Tuổi Cô", bar2Name: "Tuổi Linh" },
    hint: "Tuổi Cô 4 phần, tuổi Linh 1 phần. Đoạn chênh lệch 3 phần là 21 tuổi.",
    solution: "Tuổi Linh khi đó: 21 : (4 − 1) = 7 (tuổi). Tuổi cô khi đó: 7 × 4 = 28 (tuổi)."
  },
  {
    level: "Cấp độ 6: Bài toán Tuổi tác Singapore",
    title: "Anh 15 tuổi, Em 5 tuổi (Khi anh gấp đôi em)",
    problem: "Hiện nay anh 15 tuổi, em 5 tuổi (anh hơn em 10 tuổi). Khi tuổi anh gấp 2 lần tuổi em, hãy dựng sơ đồ tuổi hai anh em khi đó.",
    target: { bar1Parts: 2, bar2Parts: 1, hasDiff: true, diffValue: "10", totalValue: "", bar1Name: "Tuổi Anh", bar2Name: "Tuổi Em" },
    hint: "Hiệu số tuổi là 15 − 5 = 10 tuổi. Khi anh gấp đôi em: Anh 2 phần, Em 1 phần, hiệu 10.",
    solution: "Tuổi em khi đó: 10 : (2 − 1) = 10 (tuổi). Sau số năm: 10 − 5 = 5 (năm nữa)."
  },
  {
    level: "Cấp độ 6: Bài toán Tuổi tác Singapore",
    title: "Ông hơn cháu 63 tuổi (Gấp 8 lần)",
    problem: "Ông hơn cháu 63 tuổi. Khi tuổi ông gấp 8 lần tuổi cháu, hãy dựng mô hình số tuổi của ông và cháu.",
    target: { bar1Parts: 8, bar2Parts: 1, hasDiff: true, diffValue: "63", totalValue: "", bar1Name: "Tuổi Ông", bar2Name: "Tuổi Cháu" },
    hint: "Tuổi Ông vẽ 8 phần, tuổi Cháu vẽ 1 phần. Hiệu 7 phần tương ứng 63 tuổi.",
    solution: "Tuổi cháu: 63 : (8 − 1) = 9 (tuổi). Tuổi ông: 9 × 8 = 72 (tuổi)."
  },
  {
    level: "Cấp độ 6: Bài toán Tuổi tác Singapore",
    title: "Chị hơn em 8 tuổi (Tỉ lệ 5/3)",
    problem: "Chị hơn em 8 tuổi. Sau 2 năm nữa tuổi chị bằng 5/3 tuổi em. Dựng mô hình số tuổi của chị và em sau 2 năm nữa.",
    target: { bar1Parts: 5, bar2Parts: 3, hasDiff: true, diffValue: "8", totalValue: "", bar1Name: "Tuổi Chị", bar2Name: "Tuổi Em" },
    hint: "Hiệu tuổi luôn là 8 tuổi! Chị 5 phần, Em 3 phần. Hiệu 2 phần là 8.",
    solution: "Tuổi em sau 2 năm: 8 : (5 − 3) × 3 = 12 (tuổi). Tuổi chị sau 2 năm: 12 + 8 = 20 (tuổi)."
  },
  {
    level: "Cấp độ 6: Bài toán Tuổi tác Singapore",
    title: "Mẹ hơn con 25 tuổi (Tỉ lệ 7/2)",
    problem: "Mẹ hơn con 25 tuổi. Khi tuổi mẹ bằng 7/2 tuổi con, hãy dựng mô hình số tuổi của mẹ và con khi đó.",
    target: { bar1Parts: 7, bar2Parts: 2, hasDiff: true, diffValue: "25", totalValue: "", bar1Name: "Tuổi Mẹ", bar2Name: "Tuổi Con" },
    hint: "Mẹ 7 phần, Con 2 phần. Đoạn hiệu 5 phần là 25 tuổi.",
    solution: "Tuổi con khi đó: 25 : (7 − 2) × 2 = 10 (tuổi). Tuổi mẹ: 10 + 25 = 35 (tuổi)."
  },

  // ==========================================================
  // CẤP ĐỘ 7: HÌNH HỌC & NỬA CHU VI (12 BÀI)
  // ==========================================================
  {
    level: "Cấp độ 7: Hình học & Nửa Chu vi",
    title: "Mảnh đất hình chữ nhật (Chu vi 120m)",
    problem: "Một mảnh đất hình chữ nhật có chu vi 120 m (nửa chu vi 60 m). Chiều dài hơn chiều rộng 16 m. Dựng mô hình chiều dài và chiều rộng.",
    target: { bar1Parts: 1, bar2Parts: 1, hasDiff: true, diffValue: "16", totalValue: "60", bar1Name: "Chiều dài", bar2Name: "Chiều rộng" },
    hint: "Nửa chu vi = Tổng Dài + Rộng = 120 : 2 = 60 m. Chiều dài hơn chiều rộng đoạn hiệu là 16 m.",
    solution: "Chiều rộng: (60 − 16) : 2 = 22 (m). Chiều dài: 22 + 16 = 38 (m)."
  },
  {
    level: "Cấp độ 7: Hình học & Nửa Chu vi",
    title: "Sân trường hình chữ nhật (Dài gấp 4 Rộng)",
    problem: "Sân trường hình chữ nhật có chu vi 200 m (nửa chu vi 100 m). Chiều dài gấp 4 lần chiều rộng. Dựng mô hình hai kích thước sân trường.",
    target: { bar1Parts: 4, bar2Parts: 1, hasDiff: false, diffValue: "", totalValue: "100", bar1Name: "Chiều dài", bar2Name: "Chiều rộng" },
    hint: "Nửa chu vi là 100 m. Chiều dài 4 phần, chiều rộng 1 phần. Ngoặc tổng là 100 m.",
    solution: "Chiều rộng: 100 : (4 + 1) = 20 (m). Chiều dài: 20 × 4 = 80 (m)."
  },
  {
    level: "Cấp độ 7: Hình học & Nửa Chu vi",
    title: "Khu vườn hình chữ nhật (Tỉ lệ 4/3)",
    problem: "Khu vườn hình chữ nhật có chu vi 140 m (nửa chu vi 70 m). Chiều dài bằng 4/3 chiều rộng. Dựng mô hình hai kích thước vườn.",
    target: { bar1Parts: 4, bar2Parts: 3, hasDiff: false, diffValue: "", totalValue: "70", bar1Name: "Chiều dài", bar2Name: "Chiều rộng" },
    hint: "Nửa chu vi là 70 m. Dài 4 phần, Rộng 3 phần. Ngoặc tổng 7 phần là 70 m.",
    solution: "Chiều rộng: 70 : (4 + 3) × 3 = 30 (m). Chiều dài: 70 − 30 = 40 (m)."
  },
  {
    level: "Cấp độ 7: Hình học & Nửa Chu vi",
    title: "Tấm bìa chữ nhật (Chu vi 84 cm)",
    problem: "Một tấm bìa hình chữ nhật có chu vi 84 cm (nửa chu vi 42 cm). Chiều rộng kém chiều dài 8 cm. Dựng sơ đồ chiều dài và chiều rộng.",
    target: { bar1Parts: 1, bar2Parts: 1, hasDiff: true, diffValue: "8", totalValue: "42", bar1Name: "Chiều dài", bar2Name: "Chiều rộng" },
    hint: "Tổng hai cạnh là nửa chu vi = 42 cm. Hiệu hai cạnh là 8 cm.",
    solution: "Chiều rộng: (42 − 8) : 2 = 17 (cm). Chiều dài: 17 + 8 = 25 (cm)."
  },
  {
    level: "Cấp độ 7: Hình học & Nửa Chu vi",
    title: "Bể bơi hình chữ nhật (Dài gấp 3 Rộng)",
    problem: "Bể bơi hình chữ nhật có chu vi 160 m (nửa chu vi 80 m). Chiều dài gấp 3 lần chiều rộng. Hãy dựng sơ đồ chiều dài và chiều rộng bể bơi.",
    target: { bar1Parts: 3, bar2Parts: 1, hasDiff: false, diffValue: "", totalValue: "80", bar1Name: "Chiều dài", bar2Name: "Chiều rộng" },
    hint: "Nửa chu vi = 80 m. Dài 3 phần, Rộng 1 phần. Ngoặc tổng 4 phần là 80 m.",
    solution: "Chiều rộng: 80 : (3 + 1) = 20 (m). Chiều dài: 20 × 3 = 60 (m)."
  },
  {
    level: "Cấp độ 7: Hình học & Nửa Chu vi",
    title: "Khung tranh chữ nhật (Tỉ lệ 3/2)",
    problem: "Khung tranh hình chữ nhật có chu vi 110 cm (nửa chu vi 55 cm). Chiều dài bằng 3/2 chiều rộng. Dựng sơ đồ đoạn thẳng khung tranh.",
    target: { bar1Parts: 3, bar2Parts: 2, hasDiff: false, diffValue: "", totalValue: "55", bar1Name: "Chiều dài", bar2Name: "Chiều rộng" },
    hint: "Nửa chu vi là 55 cm. Dài 3 phần, Rộng 2 phần. Ngoặc tổng 5 phần là 55 cm.",
    solution: "Chiều rộng: 55 : (3 + 2) × 2 = 22 (cm). Chiều dài: 55 − 22 = 33 (cm)."
  },
  {
    level: "Cấp độ 7: Hình học & Nửa Chu vi",
    title: "Mảnh vườn chữ nhật (Tỉ lệ 5/4)",
    problem: "Một mảnh vườn hình chữ nhật có chu vi 180 m (nửa chu vi 90 m). Chiều dài bằng 5/4 chiều rộng. Dựng mô hình kích thước mảnh vườn.",
    target: { bar1Parts: 5, bar2Parts: 4, hasDiff: false, diffValue: "", totalValue: "90", bar1Name: "Chiều dài", bar2Name: "Chiều rộng" },
    hint: "Tổng hai cạnh là nửa chu vi = 90 m. Dài 5 phần, Rộng 4 phần. Tổng 9 phần là 90 m.",
    solution: "Chiều rộng: 90 : (5 + 4) × 4 = 40 (m). Chiều dài: 90 − 40 = 50 (m)."
  },
  {
    level: "Cấp độ 7: Hình học & Nửa Chu vi",
    title: "Sân bóng rổ chữ nhật (Chu vi 96 m)",
    problem: "Sân bóng rổ hình chữ nhật có chu vi 96 m (nửa chu vi 48 m). Chiều dài hơn chiều rộng 12 m. Dựng mô hình hai kích thước sân bóng.",
    target: { bar1Parts: 1, bar2Parts: 1, hasDiff: true, diffValue: "12", totalValue: "48", bar1Name: "Chiều dài", bar2Name: "Chiều rộng" },
    hint: "Nửa chu vi = 48 m. Hiệu hai cạnh = 12 m. Mỗi cạnh gồm 1 phần gốc.",
    solution: "Chiều rộng: (48 − 12) : 2 = 18 (m). Chiều dài: 18 + 12 = 30 (m)."
  },
  {
    level: "Cấp độ 7: Hình học & Nửa Chu vi",
    title: "Thửa đất chữ nhật (Dài gấp 5 Rộng)",
    problem: "Một thửa đất hình chữ nhật có chu vi 240 m (nửa chu vi 120 m). Chiều dài gấp 5 lần chiều rộng. Dựng sơ đồ đoạn thẳng của thửa đất.",
    target: { bar1Parts: 5, bar2Parts: 1, hasDiff: false, diffValue: "", totalValue: "120", bar1Name: "Chiều dài", bar2Name: "Chiều rộng" },
    hint: "Nửa chu vi là 120 m. Dài 5 phần, Rộng 1 phần. Ngoặc tổng 6 phần là 120 m.",
    solution: "Chiều rộng: 120 : (5 + 1) = 20 (m). Chiều dài: 20 × 5 = 100 (m)."
  },
  {
    level: "Cấp độ 7: Hình học & Nửa Chu vi",
    title: "Phòng học chữ nhật (Chu vi 36 m)",
    problem: "Một phòng học hình chữ nhật có chu vi 36 m (nửa chu vi 18 m). Chiều dài bằng 5/4 chiều rộng. Dựng mô hình hai kích thước phòng học.",
    target: { bar1Parts: 5, bar2Parts: 4, hasDiff: false, diffValue: "", totalValue: "18", bar1Name: "Chiều dài", bar2Name: "Chiều rộng" },
    hint: "Nửa chu vi là 18 m. Dài 5 phần, Rộng 4 phần. Ngoặc tổng 9 phần là 18 m.",
    solution: "Chiều rộng: 18 : (5 + 4) × 4 = 8 (m). Chiều dài: 18 − 8 = 10 (m)."
  },
  {
    level: "Cấp độ 7: Hình học & Nửa Chu vi",
    title: "Tấm thảm chữ nhật (Tỉ lệ 3/2)",
    problem: "Tấm thảm hình chữ nhật có chu vi 60 dm (nửa chu vi 30 dm). Chiều rộng bằng 2/3 chiều dài. Dựng sơ đồ kích thước tấm thảm.",
    target: { bar1Parts: 3, bar2Parts: 2, hasDiff: false, diffValue: "", totalValue: "30", bar1Name: "Chiều dài", bar2Name: "Chiều rộng" },
    hint: "Nửa chu vi là 30 dm. Chiều dài 3 phần, Chiều rộng 2 phần. Ngoặc tổng là 30 dm.",
    solution: "Chiều rộng: 30 : (3 + 2) × 2 = 12 (dm). Chiều dài: 30 − 12 = 18 (dm)."
  },
  {
    level: "Cấp độ 7: Hình học & Nửa Chu vi",
    title: "Bức tường hoa chữ nhật (Tỉ lệ 7/2)",
    problem: "Một bức tường hoa hình chữ nhật có chu vi 72 m (nửa chu vi 36 m). Chiều dài bằng 7/2 chiều rộng. Dựng mô hình hai cạnh bức tường.",
    target: { bar1Parts: 7, bar2Parts: 2, hasDiff: false, diffValue: "", totalValue: "36", bar1Name: "Chiều dài", bar2Name: "Chiều rộng" },
    hint: "Nửa chu vi là 36 m. Chiều dài 7 phần, Chiều rộng 2 phần. Tổng 9 phần là 36 m.",
    solution: "Chiều rộng: 36 : (7 + 2) × 2 = 8 (m). Chiều dài: 36 − 8 = 28 (m)."
  },

  // ==========================================================
  // CẤP ĐỘ 8: CHUYỂN DỊCH & BÙ TRỪ THỰC TẾ (11 BÀI)
  // ==========================================================
  {
    level: "Cấp độ 8: Chuyển dịch & Bù trừ thực tế",
    title: "Chuyển dầu để hai thùng bằng nhau",
    problem: "Hai thùng dầu có tổng cộng 120 lít dầu. Nếu chuyển 15 lít từ thùng 1 sang thùng 2 thì hai thùng bằng nhau. Hãy dựng mô hình lượng dầu ban đầu (thùng 1 hơn thùng 2 là 30 lít).",
    target: { bar1Parts: 1, bar2Parts: 1, hasDiff: true, diffValue: "30", totalValue: "120", bar1Name: "Thùng 1", bar2Name: "Thùng 2" },
    hint: "Chuyển 15 lít mà bằng nhau nghĩa là lúc đầu thùng 1 hơn thùng 2: 15 × 2 = 30 lít! Ngoặc tổng là 120 lít.",
    solution: "Thùng thứ hai: (120 − 30) : 2 = 45 (lít). Thùng thứ nhất: 45 + 30 = 75 (lít)."
  },
  {
    level: "Cấp độ 8: Chuyển dịch & Bù trừ thực tế",
    title: "An cho Bình kẹo để bằng nhau",
    problem: "Hai bạn có tất cả 80 cái kẹo. Nếu An cho Bình 8 cái kẹo thì số kẹo hai bạn bằng nhau. Hãy dựng sơ đồ số kẹo ban đầu của An và Bình.",
    target: { bar1Parts: 1, bar2Parts: 1, hasDiff: true, diffValue: "16", totalValue: "80", bar1Name: "Kẹo An", bar2Name: "Kẹo Bình" },
    hint: "An cho Bình 8 cái thì bằng nhau nên lúc đầu An hơn Bình: 8 × 2 = 16 cái! Tổng là 80 cái.",
    solution: "Bình có: (80 − 16) : 2 = 32 (cái). An có: 32 + 16 = 48 (cái)."
  },
  {
    level: "Cấp độ 8: Chuyển dịch & Bù trừ thực tế",
    title: "Chuyển sách để gấp đôi (Trạng thái sau)",
    problem: "Hai ngăn sách có 150 quyển. Chuyển 10 quyển từ ngăn trên xuống ngăn dưới thì ngăn dưới gấp đôi ngăn trên. Dựng sơ đồ hai ngăn sách lúc sau.",
    target: { bar1Parts: 2, bar2Parts: 1, hasDiff: false, diffValue: "", totalValue: "150", bar1Name: "Ngăn dưới", bar2Name: "Ngăn trên" },
    hint: "Tổng số sách không đổi là 150 quyển. Lúc sau ngăn dưới 2 phần, ngăn trên 1 phần.",
    solution: "Ngăn trên lúc sau: 150 : (2 + 1) = 50 (quyển). Ngăn trên lúc đầu: 50 + 10 = 60 (quyển)."
  },
  {
    level: "Cấp độ 8: Chuyển dịch & Bù trừ thực tế",
    title: "Hai xe tải chuyển hàng (Trạng thái sau)",
    problem: "Hai xe chở 90 tấn hàng. Xe 1 bớt 5 tấn sang xe 2 thì xe 1 vẫn nhiều hơn xe 2 là 10 tấn. Dựng mô hình lượng hàng hai xe sau khi chuyển.",
    target: { bar1Parts: 1, bar2Parts: 1, hasDiff: true, diffValue: "10", totalValue: "90", bar1Name: "Xe 1 sau", bar2Name: "Xe 2 sau" },
    hint: "Tổng hai xe không đổi là 90 tấn. Sau khi chuyển xe 1 hơn xe 2 đoạn hiệu là 10 tấn.",
    solution: "Xe 2 lúc sau: (90 − 10) : 2 = 40 (tấn). Xe 1 lúc sau: 40 + 10 = 50 (tấn)."
  },
  {
    level: "Cấp độ 8: Chuyển dịch & Bù trừ thực tế",
    title: "Minh cho Dũng bi để gấp đôi",
    problem: "Hai bạn có 72 viên bi. Nếu Minh cho Dũng 6 viên thì số bi của Minh gấp đôi số bi của Dũng. Dựng sơ đồ số bi hai bạn lúc sau.",
    target: { bar1Parts: 2, bar2Parts: 1, hasDiff: false, diffValue: "", totalValue: "72", bar1Name: "Bi Minh sau", bar2Name: "Bi Dũng sau" },
    hint: "Tổng số bi hai bạn vẫn là 72 viên. Lúc sau Minh 2 phần, Dũng 1 phần.",
    solution: "Dũng lúc sau: 72 : (2 + 1) = 24 (viên). Dũng lúc đầu: 24 − 6 = 18 (viên). Minh lúc đầu: 54 viên."
  },
  {
    level: "Cấp độ 8: Chuyển dịch & Bù trừ thực tế",
    title: "Chuyển gạo giữa hai bao",
    problem: "Hai bao gạo nặng 120 kg. Nếu chuyển 15 kg từ bao 1 sang bao 2 thì bao 2 gấp đôi bao 1. Dựng sơ đồ hai bao gạo sau khi chuyển.",
    target: { bar1Parts: 2, bar2Parts: 1, hasDiff: false, diffValue: "", totalValue: "120", bar1Name: "Bao 2 sau", bar2Name: "Bao 1 sau" },
    hint: "Tổng cân nặng không đổi là 120 kg. Bao 2 có 2 phần, Bao 1 có 1 phần.",
    solution: "Bao 1 lúc sau: 120 : (2 + 1) = 40 (kg). Bao 1 lúc đầu: 40 + 15 = 55 (kg). Bao 2 lúc đầu: 65 kg."
  },
  {
    level: "Cấp độ 8: Chuyển dịch & Bù trừ thực tế",
    title: "Đổ thêm dầu vào thùng A",
    problem: "Thùng A nhiều hơn thùng B 20 lít dầu. Nếu đổ thêm vào thùng A 10 lít thì thùng A gấp 3 lần thùng B. Dựng mô hình sau khi đổ thêm (hiệu mới 30 lít).",
    target: { bar1Parts: 3, bar2Parts: 1, hasDiff: true, diffValue: "30", totalValue: "", bar1Name: "Thùng A sau", bar2Name: "Thùng B" },
    hint: "Hiệu mới sau khi đổ thêm 10 lít vào thùng A là: 20 + 10 = 30 lít! Thùng A 3 phần, thùng B 1 phần.",
    solution: "Thùng B: 30 : (3 − 1) = 15 (lít). Thùng A lúc đầu: 15 × 3 − 10 = 35 (lít)."
  },
  {
    level: "Cấp độ 8: Chuyển dịch & Bù trừ thực tế",
    title: "Xuất kho thóc để bằng nhau",
    problem: "Hai kho có 140 tấn thóc. Nếu xuất ở kho 1 đi 20 tấn thì số thóc còn lại ở kho 1 bằng kho 2. Dựng mô hình số thóc ban đầu của hai kho.",
    target: { bar1Parts: 1, bar2Parts: 1, hasDiff: true, diffValue: "20", totalValue: "140", bar1Name: "Kho 1", bar2Name: "Kho 2" },
    hint: "Kho 1 xuất 20 tấn thì bằng kho 2, chứng tỏ ban đầu kho 1 nhiều hơn kho 2 là 20 tấn. Tổng 140 tấn.",
    solution: "Kho 2: (140 − 20) : 2 = 60 (tấn). Kho 1: 60 + 20 = 80 (tấn)."
  },
  {
    level: "Cấp độ 8: Chuyển dịch & Bù trừ thực tế",
    title: "Ăn kẹo để tỉ số gấp 3 lần",
    problem: "Hai bạn có tất cả 45 cái kẹo. Nếu bạn thứ nhất ăn mất 5 cái thì số kẹo còn lại gấp 3 lần bạn thứ hai. Dựng sơ đồ lúc sau (tổng còn lại 40 cái).",
    target: { bar1Parts: 3, bar2Parts: 1, hasDiff: false, diffValue: "", totalValue: "40", bar1Name: "Bạn 1 sau", bar2Name: "Bạn 2" },
    hint: "Tổng số kẹo còn lại là: 45 − 5 = 40 cái. Bạn 1 có 3 phần, bạn 2 có 1 phần.",
    solution: "Bạn 2 có: 40 : (3 + 1) = 10 (cái). Bạn 1 lúc đầu có: 10 × 3 + 5 = 35 (cái)."
  },
  {
    level: "Cấp độ 8: Chuyển dịch & Bù trừ thực tế",
    title: "Chuyển lúa hai thửa ruộng",
    problem: "Thửa ruộng A thu hoạch nhiều hơn thửa B 300 kg. Nếu chuyển 150 kg từ A sang B thì hai thửa bằng nhau. Dựng sơ đồ ban đầu hai thửa ruộng.",
    target: { bar1Parts: 1, bar2Parts: 1, hasDiff: true, diffValue: "300", totalValue: "", bar1Name: "Thửa A", bar2Name: "Thửa B" },
    hint: "Mỗi thửa có 1 phần gốc bằng nhau. Thửa A dài hơn thửa B đoạn hiệu là 300 kg.",
    solution: "Đoạn hiệu là 300 kg vì khi chuyển một nửa hiệu (150 kg) thì hai bên bằng nhau."
  },
  {
    level: "Cấp độ 8: Chuyển dịch & Bù trừ thực tế",
    title: "Tổ 1 nhận thêm cây trồng",
    problem: "Hai tổ trồng cây có tổng cộng 84 cây. Tổ 1 nhận thêm 6 cây thì số cây tổ 1 gấp 5 lần tổ 2. Dựng sơ đồ lúc sau (tổng mới là 90 cây).",
    target: { bar1Parts: 5, bar2Parts: 1, hasDiff: false, diffValue: "", totalValue: "90", bar1Name: "Tổ 1 sau", bar2Name: "Tổ 2" },
    hint: "Tổng mới sau khi nhận thêm: 84 + 6 = 90 cây. Tổ 1 có 5 phần, tổ 2 có 1 phần.",
    solution: "Tổ 2 có: 90 : (5 + 1) = 15 (cây). Tổ 1 ban đầu có: 15 × 5 − 6 = 69 (cây)."
  },

  // ==========================================================
  // CẤP ĐỘ 9: CHUYÊN SÂU & OLYMPIC BAR MODEL (10 BÀI)
  // ==========================================================
  {
    level: "Cấp độ 9: Chuyên sâu & Olympic Bar Model",
    title: "Phân số bằng nhau (1/2 bằng 1/3)",
    problem: "Cho biết 1/2 số thứ nhất bằng 1/3 số thứ hai. Tổng hai số là 100. Hãy dựng sơ đồ thể hiện hai số này (số thứ nhất 2 phần, số thứ hai 3 phần).",
    target: { bar1Parts: 3, bar2Parts: 2, hasDiff: false, diffValue: "", totalValue: "100", bar1Name: "Số thứ hai", bar2Name: "Số thứ nhất" },
    hint: "1/2 số thứ nhất = 1/3 số thứ hai có nghĩa là Số 1 gồm 2 phần, Số 2 gồm 3 phần bằng nhau. Ngoặc tổng là 100.",
    solution: "Số thứ nhất: 100 : (3 + 2) × 2 = 40. Số thứ hai: 100 − 40 = 60."
  },
  {
    level: "Cấp độ 9: Chuyên sâu & Olympic Bar Model",
    title: "Bi của An và Bình (1/3 bằng 1/4)",
    problem: "Biết 1/3 số bi của An bằng 1/4 số bi của Bình. An có ít hơn Bình 12 viên bi. Hãy dựng mô hình số bi của hai bạn (An 3 phần, Bình 4 phần).",
    target: { bar1Parts: 4, bar2Parts: 3, hasDiff: true, diffValue: "12", totalValue: "", bar1Name: "Bi của Bình", bar2Name: "Bi của An" },
    hint: "Bình có 4 phần, An có 3 phần. Hiệu 1 phần chênh lệch là 12 viên bi.",
    solution: "Số bi của An: 12 × 3 = 36 (viên). Số bi của Bình: 12 × 4 = 48 (viên)."
  },
  {
    level: "Cấp độ 9: Chuyên sâu & Olympic Bar Model",
    title: "Nam và Nữ khối 4 (2/3 bằng 2/5)",
    problem: "Cho biết 2/3 số học sinh nam bằng 2/5 số học sinh nữ. Tổng số học sinh cả khối là 112 bạn. Dựng sơ đồ số học sinh nam và nữ.",
    target: { bar1Parts: 5, bar2Parts: 3, hasDiff: false, diffValue: "", totalValue: "112", bar1Name: "HS Nữ", bar2Name: "HS Nam" },
    hint: "Tử số cùng là 2 nên 1/3 số nam = 1/5 số nữ! Suy ra Nam có 3 phần, Nữ có 5 phần. Tổng 8 phần là 112.",
    solution: "HS Nam: 112 : (5 + 3) × 3 = 42 (bạn). HS Nữ: 112 − 42 = 70 (bạn)."
  },
  {
    level: "Cấp độ 9: Chuyên sâu & Olympic Bar Model",
    title: "Kẹo của ba bạn (Chi chiếm 1/3 tổng số)",
    problem: "Ba bạn An, Bình, Chi có tất cả 96 cái kẹo. Chi có số kẹo bằng 1/3 tổng số kẹo cả ba bạn. Dựng mô hình số kẹo của Chi so với (An + Bình).",
    target: { bar1Parts: 2, bar2Parts: 1, hasDiff: false, diffValue: "", totalValue: "96", bar1Name: "An + Bình", bar2Name: "Chi" },
    hint: "Tổng cả 3 bạn là 3 phần thì Chi có 1 phần, hai bạn An + Bình gộp lại là 2 phần. Ngoặc tổng 3 phần là 96.",
    solution: "Chi có: 96 : 3 = 32 (cái). An và Bình có tổng cộng: 96 − 32 = 64 (cái)."
  },
  {
    level: "Cấp độ 9: Chuyên sâu & Olympic Bar Model",
    title: "Bi đỏ và Bi xanh (1/4 bằng 1/3)",
    problem: "Một hộp có 140 viên bi gồm bi đỏ và bi xanh. Biết 1/4 số bi đỏ bằng 1/3 số bi xanh. Hãy dựng sơ đồ số bi mỗi loại.",
    target: { bar1Parts: 4, bar2Parts: 3, hasDiff: false, diffValue: "", totalValue: "140", bar1Name: "Bi Đỏ", bar2Name: "Bi Xanh" },
    hint: "Bi Đỏ có 4 phần bằng nhau, Bi Xanh có 3 phần bằng nhau. Ngoặc tổng 7 phần là 140.",
    solution: "Bi Xanh: 140 : (4 + 3) × 3 = 60 (viên). Bi Đỏ: 140 − 60 = 80 (viên)."
  },
  {
    level: "Cấp độ 9: Chuyên sâu & Olympic Bar Model",
    title: "Gạo tẻ gấp 3 lần gạo nếp",
    problem: "Một cửa hàng có gạo tẻ gấp 3 lần gạo nếp. Nếu bán thêm 30 kg gạo nếp thì gạo tẻ gấp đôi gạo nếp. Hãy dựng sơ đồ số lượng lúc ban đầu.",
    target: { bar1Parts: 3, bar2Parts: 1, hasDiff: false, diffValue: "", totalValue: "", bar1Name: "Gạo tẻ", bar2Name: "Gạo nếp" },
    hint: "Lúc đầu gạo tẻ có 3 phần, gạo nếp có 1 phần.",
    solution: "Gạo nếp lúc đầu: 30 × 2 = 60 (kg). Gạo tẻ lúc đầu: 60 × 3 = 180 (kg)."
  },
  {
    level: "Cấp độ 9: Chuyên sâu & Olympic Bar Model",
    title: "Cùng bớt 10 đơn vị (Hiệu không đổi)",
    problem: "Hai số có tỉ số là 3/5. Nếu cùng bớt ở cả hai số đi 10 đơn vị thì hiệu hai số vẫn là 24. Hãy dựng sơ đồ thể hiện hai số ban đầu.",
    target: { bar1Parts: 5, bar2Parts: 3, hasDiff: true, diffValue: "24", totalValue: "", bar1Name: "Số lớn", bar2Name: "Số bé" },
    hint: "Khi cùng bớt đi cùng một số thì hiệu hai số không bao giờ đổi! Số lớn 5 phần, Số bé 3 phần, hiệu 2 phần là 24.",
    solution: "Số bé: 24 : (5 − 3) × 3 = 36. Số lớn: 36 + 24 = 60."
  },
  {
    level: "Cấp độ 9: Chuyên sâu & Olympic Bar Model",
    title: "Ba lớp trồng cây (Lớp 4A chiếm 1/3)",
    problem: "Ba lớp 4A, 4B, 4C trồng được 180 cây. Lớp 4A trồng được 1/3 tổng số cây. Dựng sơ đồ so sánh số cây của 4A với hai lớp còn lại (4B + 4C).",
    target: { bar1Parts: 2, bar2Parts: 1, hasDiff: false, diffValue: "", totalValue: "180", bar1Name: "Lớp 4B+4C", bar2Name: "Lớp 4A" },
    hint: "Cả 3 lớp là 3 phần thì lớp 4A là 1 phần, hai lớp 4B+4C là 2 phần. Ngoặc tổng 3 phần là 180 cây.",
    solution: "Lớp 4A trồng: 180 : 3 = 60 (cây). Hai lớp 4B+4C trồng: 180 − 60 = 120 (cây)."
  },
  {
    level: "Cấp độ 9: Chuyên sâu & Olympic Bar Model",
    title: "Hiệu hai số với phân số (3/4 bằng 3/7)",
    problem: "Cho biết 3/4 số thứ nhất bằng 3/7 số thứ hai. Hiệu hai số là 48. Hãy dựng sơ đồ đoạn thẳng thể hiện hai số này.",
    target: { bar1Parts: 7, bar2Parts: 4, hasDiff: true, diffValue: "48", totalValue: "", bar1Name: "Số thứ hai", bar2Name: "Số thứ nhất" },
    hint: "Số thứ hai gồm 7 phần, Số thứ nhất gồm 4 phần. Hiệu 3 phần chênh lệch là 48.",
    solution: "Số thứ nhất: 48 : (7 − 4) × 4 = 64. Số thứ hai: 64 + 48 = 112."
  },
  {
    level: "Cấp độ 9: Chuyên sâu & Olympic Bar Model",
    title: "Khu đất hóa hình vuông (Trùm cuối Olympic)",
    problem: "Một khu đất hình chữ nhật có chiều dài gấp 3 lần chiều rộng. Nếu tăng chiều rộng thêm 15 m và giảm chiều dài đi 15 m thì khu đất trở thành hình vuông. Dựng sơ đồ ban đầu để thấy chiều dài hơn chiều rộng 30 m.",
    target: { bar1Parts: 3, bar2Parts: 1, hasDiff: true, diffValue: "30", totalValue: "", bar1Name: "Chiều dài", bar2Name: "Chiều rộng" },
    hint: "Tăng rộng 15 m và giảm dài 15 m mà bằng nhau thì lúc đầu chiều dài hơn chiều rộng là 15 × 2 = 30 m! Chiều dài 3 phần, chiều rộng 1 phần, hiệu 30 m.",
    solution: "Hiệu hai cạnh ban đầu: 15 × 2 = 30 (m). Chiều rộng: 30 : (3 − 1) = 15 (m). Chiều dài: 15 × 3 = 45 (m)."
  }
];

function getBarChallengeDifficulty(index) {
  if (index < 8) return 1; // 8 bài khởi động cơ bản (Độ khó 1/5)
  if (index < 15) return 2; // 7 bài cấp 1 nâng dần (Độ khó 2/5)
  if (index < 23) return 2; // Cấp 2 bài đầu (Độ khó 2/5)
  if (index < 30) return 3; // Cấp 2 bài sau (Độ khó 3/5)
  if (index < 37) return 2; // Cấp 3 bài đầu (Độ khó 2/5)
  if (index < 45) return 3; // Cấp 3 bài sau (Độ khó 3/5)
  if (index < 52) return 3; // Cấp 4 bài đầu (Độ khó 3/5)
  if (index < 60) return 4; // Cấp 4 bài sau (Độ khó 4/5)
  if (index < 67) return 3; // Cấp 5 bài đầu (Độ khó 3/5)
  if (index < 75) return 4; // Cấp 5 bài sau (Độ khó 4/5)
  if (index < 81) return 3; // Cấp 6 bài đầu (Độ khó 3/5)
  if (index < 87) return 4; // Cấp 6 bài sau (Độ khó 4/5)
  if (index < 93) return 3; // Cấp 7 bài đầu (Độ khó 3/5)
  if (index < 99) return 4; // Cấp 7 bài sau (Độ khó 4/5)
  if (index < 104) return 4; // Cấp 8 bài đầu (Độ khó 4/5)
  if (index < 110) return 5; // Cấp 8 bài sau (Olympic, Độ khó 5/5)
  if (index < 115) return 4; // Cấp 9 bài đầu (Độ khó 4/5)
  return 5; // Cấp 9 bài sau (Olympic đỉnh cao, Độ khó 5/5)
}

// Flat list of 120 challenges with generated IDs
export const ALL_120_BAR_CHALLENGES = RAW_CHALLENGES.map((ch, idx) => ({
  id: `challenge-${idx + 1}`,
  index: idx,
  level: ch.level,
  difficulty: getBarChallengeDifficulty(idx),
  title: `Thử thách ${idx + 1}: ${ch.title}`,
  problem: ch.problem,
  target: ch.target,
  hint: ch.hint,
  solution: ch.solution
}));

// Generate target file js/bar-model-studio.js
const targetFile = new URL("../js/bar-model-studio.js", import.meta.url).pathname;
const fileContent = `// js/bar-model-studio.js - Mini Bar Model Studio (< 15KB Pure SVG)
// Giúp Bách trực quan hóa bài toán Tổng–Hiệu, Tỉ số theo phương pháp Singapore
// Ngân hàng 120 thử thách phân bổ qua 9 cấp độ khó tăng dần

export const BAR_MODEL_LEVELS = ${JSON.stringify(BAR_MODEL_LEVELS, null, 2)};

export const BAR_MODEL_CHALLENGES = ${JSON.stringify(ALL_120_BAR_CHALLENGES, null, 2)};

export class BarModelStudioState {
  constructor(initialChallengeIndex = 0) {
    this.challengeIndex = initialChallengeIndex;
    this.bar1 = { name: "Thanh A", parts: 1, extraDiff: 0 };
    this.bar2 = { name: "Thanh B", parts: 1, extraDiff: 0 };
    this.bar3 = null;
    this.totalLabel = "";
    this.diffLabel = "";
    this.isSolved = false;
    this.loadChallenge(this.challengeIndex);
  }

  loadChallenge(index) {
    this.challengeIndex = Math.max(0, Math.min(BAR_MODEL_CHALLENGES.length - 1, index));
    const ch = BAR_MODEL_CHALLENGES[this.challengeIndex];
    this.bar1 = { name: ch.target.bar1Name, parts: 1, extraDiff: 0 };
    this.bar2 = { name: ch.target.bar2Name, parts: 1, extraDiff: 0 };
    if (ch.target.hasBar3) {
      this.bar3 = { name: ch.target.bar3Name, parts: 1, extraDiff: 0 };
    } else {
      this.bar3 = null;
    }
    this.totalLabel = "";
    this.diffLabel = "";
    this.isSolved = false;
  }

  setParts(barKey, parts) {
    const validParts = Math.max(1, Math.min(8, Math.round(Number(parts)) || 1));
    if (barKey === "bar1") this.bar1.parts = validParts;
    if (barKey === "bar2") this.bar2.parts = validParts;
    if (barKey === "bar3" && this.bar3) this.bar3.parts = validParts;
  }

  toggleDiff(hasDiff) {
    this.bar1.extraDiff = hasDiff ? 1 : 0;
  }

  checkSolution() {
    const ch = BAR_MODEL_CHALLENGES[this.challengeIndex];
    const t = ch.target;

    const partsMatch = (this.bar1.parts === t.bar1Parts && this.bar2.parts === t.bar2Parts) &&
      (!t.hasBar3 || (this.bar3 && this.bar3.parts === t.bar3Parts));
    const diffMatch = t.hasDiff ? (this.bar1.extraDiff > 0 && String(this.diffLabel).trim() === t.diffValue) : true;
    const totalMatch = t.totalValue ? (String(this.totalLabel).trim() === t.totalValue) : true;

    this.isSolved = Boolean(partsMatch && diffMatch && totalMatch);
    return {
      isSolved: this.isSolved,
      hint: ch.hint,
      solution: ch.solution
    };
  }

  renderSvgMarkup() {
    const hasB3 = Boolean(this.bar3);
    const svgWidth = 520;
    const svgHeight = hasB3 ? 270 : 220;
    const maxParts = Math.max(this.bar1.parts, this.bar2.parts, hasB3 ? this.bar3.parts : 1);
    const availableWidth = this.totalLabel ? 260 : 340;
    const ch = BAR_MODEL_CHALLENGES[this.challengeIndex];
    const isComparison = Boolean(this.bar1.parts === 1 && this.bar2.parts === 1 && (!hasB3 || this.bar3.parts === 1) && ch?.target?.hasDiff);
    const maxUnit = isComparison ? 140 : 55;
    const unitWidth = Math.max(34, Math.min(maxUnit, Math.floor(availableWidth / Math.max(maxParts, 1))));
    const barHeight = 28;
    const startX = 110;
    const bar1Y = hasB3 ? 35 : 45;
    const bar2Y = hasB3 ? 95 : 115;
    const bar3Y = 155;
    const diffWidth = isComparison ? 60 : 44;

    // Tính toán độ dài thanh
    const len1 = this.bar1.parts * unitWidth + (this.bar1.extraDiff > 0 ? diffWidth : 0);
    const len2 = this.bar2.parts * unitWidth;
    const len3 = hasB3 ? (this.bar3.parts * unitWidth) : 0;
    const maxLen = Math.max(len1, len2, len3);

    const baseLabel = isComparison ? "Đoạn cơ sở" : "1 phần";

    let partsRects1 = "";
    for (let i = 0; i < this.bar1.parts; i++) {
      const x = startX + i * unitWidth;
      partsRects1 += \`<rect x="\${x}" y="\${bar1Y}" width="\${unitWidth}" height="\${barHeight}" fill="#3b82f6" fill-opacity="0.2" stroke="#2563eb" stroke-width="2" rx="4" />
      <text x="\${x + unitWidth / 2}" y="\${bar1Y + 18}" text-anchor="middle" font-size="\${unitWidth < 42 ? 10 : 11}" font-weight="600" fill="#1e40af">\${baseLabel}</text>\`;
    }
    if (this.bar1.extraDiff > 0) {
      const diffX = startX + this.bar1.parts * unitWidth;
      partsRects1 += \`<rect x="\${diffX}" y="\${bar1Y}" width="\${diffWidth}" height="\${barHeight}" fill="#f59e0b" fill-opacity="0.25" stroke="#d97706" stroke-dasharray="3,3" stroke-width="2" rx="4" />
      <text x="\${diffX + diffWidth / 2}" y="\${bar1Y + 18}" text-anchor="middle" font-size="11" font-weight="700" fill="#b45309">\${this.diffLabel ? \`+\${this.diffLabel}\` : "?"}</text>\`;
    }

    let partsRects2 = "";
    for (let i = 0; i < this.bar2.parts; i++) {
      const x = startX + i * unitWidth;
      partsRects2 += \`<rect x="\${x}" y="\${bar2Y}" width="\${unitWidth}" height="\${barHeight}" fill="#10b981" fill-opacity="0.2" stroke="#059669" stroke-width="2" rx="4" />
      <text x="\${x + unitWidth / 2}" y="\${bar2Y + 18}" text-anchor="middle" font-size="\${unitWidth < 42 ? 10 : 11}" font-weight="600" fill="#065f46">\${baseLabel}</text>\`;
    }

    let partsRects3 = "";
    if (hasB3) {
      for (let i = 0; i < this.bar3.parts; i++) {
        const x = startX + i * unitWidth;
        partsRects3 += \`<rect x="\${x}" y="\${bar3Y}" width="\${unitWidth}" height="\${barHeight}" fill="#8b5cf6" fill-opacity="0.2" stroke="#7c3aed" stroke-width="2" rx="4" />
        <text x="\${x + unitWidth / 2}" y="\${bar3Y + 18}" text-anchor="middle" font-size="\${unitWidth < 42 ? 10 : 11}" font-weight="600" fill="#5b21b6">\${baseLabel}</text>\`;
      }
    }

    // Ngoặc ôm tổng
    const bracketX = startX + maxLen + 12;
    const bottomY = hasB3 ? (bar3Y + barHeight) : (bar2Y + barHeight);
    const midY = (bar1Y + bottomY) / 2;
    const totalSvg = this.totalLabel
      ? \`<path d="M \${bracketX} \${bar1Y} C \${bracketX + 15} \${bar1Y + 20}, \${bracketX + 15} \${midY}, \${bracketX + 25} \${midY} C \${bracketX + 15} \${midY}, \${bracketX + 15} \${bottomY - 20}, \${bracketX} \${bottomY}" fill="none" stroke="#64748b" stroke-width="2" />
         <text x="\${bracketX + 32}" y="\${midY + 4}" font-size="13" font-weight="700" fill="#334155">\${this.totalLabel}</text>\`
      : "";

    return \`
      <svg viewBox="0 0 \${svgWidth} \${svgHeight}" class="bar-model-svg" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mô hình sơ đồ đoạn thẳng Singapore">
        <rect width="100%" height="100%" fill="#f8fafc" rx="8" />
        <!-- Nhãn tên thanh -->
        <text x="96" y="\${bar1Y + 18}" text-anchor="end" font-size="13" font-weight="700" fill="#1e293b">\${this.bar1.name}</text>
        <text x="96" y="\${bar2Y + 18}" text-anchor="end" font-size="13" font-weight="700" fill="#1e293b">\${this.bar2.name}</text>
        \${hasB3 ? \`<text x="96" y="\${bar3Y + 18}" text-anchor="end" font-size="13" font-weight="700" fill="#1e293b">\${this.bar3.name}</text>\` : ""}
        <!-- Các thanh đoạn thẳng -->
        \${partsRects1}
        \${partsRects2}
        \${partsRects3}
        <!-- Ngoặc tổng nếu có -->
        \${totalSvg}
      </svg>
    \`;
  }
}
`;

writeFileSync(targetFile, fileContent, "utf8");
console.log(`Successfully generated and written ${ALL_120_BAR_CHALLENGES.length} bar model challenges to ${targetFile}!`);
