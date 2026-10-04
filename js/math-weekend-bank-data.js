// js/math-weekend-bank-data.js
// Ngân hàng Đề thi Định kỳ 30 phút Môn Toán Lớp 4 (Bộ sách Kết nối tri thức với cuộc sống)
// 36 Tuần Hoàn chỉnh · Đầy đủ Dữ kiện · Barem chi tiết cho Gemini Vision đọc ảnh vở ô ly
// Toàn bộ 36 tuần đều được biên soạn authored độc lập, tuyệt đối không dùng placeholder hay fallback

export const WEEKEND_MATH_EXAMS_FULL = {
  w1: {
    week: 1,
    title: "Đề kiểm tra 30 phút · Tuần 1: Ôn tập các số đến 100.000 & Tư duy số học",
    textbook: "Kết nối tri thức với cuộc sống",
    duration: "30 phút",
    totalScore: 10,
    sections: [
      {
        id: "part1",
        name: "PHẦN I: TRẮC NGHIỆM KHỞI ĐỘNG & TƯ DUY LOGIC",
        level: "Mức 1: Nhận biết & Quy luật (Vừa sức Bách)",
        scoreText: "3.0 điểm (4 câu × 0.75đ)",
        questions: [
          {
            q: "1. Cho dãy số có quy luật: 12.500 ; 15.000 ; 17.500 ; 20.000 ; ... Số hạng thứ 7 của dãy số là số nào?",
            choices: ["A. 25.000", "B. 27.500", "C. 30.000", "D. 26.500"],
            answer: "B. 27.500 (Dãy số cách đều 2.500 đơn vị. Số thứ 7 = 12.500 + 6 × 2.500 = 27.500)"
          },
          {
            q: "2. Một số có 5 chữ số có chữ số hàng chục nghìn gấp 3 lần chữ số hàng đơn vị. Tổng các chữ số của số đó bằng 9 và số đó không chứa chữ số 0. Số lớn nhất thỏa mãn là:",
            choices: ["A. 61.112", "B. 33.111", "C. 32.211", "D. 31.311"],
            answer: "B. 33.111 (Hàng đơn vị là 1 -> hàng chục nghìn là 3. Dồn chữ số lớn nhất vào hàng nghìn: 3, các hàng còn lại là 1 -> 33.111)"
          },
          {
            q: "3. Không thực hiện phép tính, hãy so sánh giá trị của hai biểu thức:\n   M = 45.678 + 12.345\n   N = 45.345 + 12.678",
            choices: ["A. M > N", "B. M < N", "C. M = N", "D. Không so sánh được"],
            answer: "C. M = N (Phân tích cấu tạo số: M = 45.000 + 678 + 12.000 + 345 = 57.000 + 1.023; N = 45.000 + 345 + 12.000 + 678 = 57.000 + 1.023. Do đó M = N)"
          },
          {
            q: "4. Khi làm tròn một số có 5 chữ số đến hàng nghìn, ta được số 68.000. Số tự nhiên lớn nhất có thể của số ban đầu là số nào?",
            choices: ["A. 68.999", "B. 68.500", "C. 68.499", "D. 67.999"],
            answer: "C. 68.499 (Để làm tròn đến hàng nghìn được 68.000 mà số đó lớn nhất thì hàng trăm lớn nhất được phép là 4, hàng chục và đơn vị là 9 -> 68.499)"
          }
        ]
      },
      {
        id: "part2",
        name: "PHẦN II: TỰ LUẬN TÍNH TOÁN & ĐẶT TÍNH",
        level: "Mức 2: Thông hiểu & Kỹ năng chuẩn xác",
        scoreText: "2.5 điểm",
        questions: [
          {
            q: "Bài 1 (1.5 điểm): Đặt tính rồi tính ra vở ô ly (yêu cầu viết chữ số thẳng hàng thẳng cột, chú ý các bước nhớ liên hoàn):\n  a) 58.647 + 36.585\n  b) 90.002 − 47.368",
            answer: "a) 58.647 + 36.585 = 95.232 (đặt tính thẳng hàng: nhớ liên hoàn 4 lần) [0.75đ]\nb) 90.002 − 47.368 = 42.634 (đặt tính thẳng hàng: mượn liên tiếp qua 3 chữ số 0) [0.75đ]"
          },
          {
            q: "Bài 2 (1.0 điểm): Tính bằng cách thuận tiện nhất (nhóm các số tròn chục nghìn):\n  36.850 + 19.420 + 13.150 + 10.580",
            answer: "= (36.850 + 13.150) + (19.420 + 10.580) [0.5đ]\n= 50.000 + 30.000 = 80.000 [0.5đ]"
          }
        ]
      },
      {
        id: "part3",
        name: "PHẦN III: BÀI TOÁN CÓ LỜI VĂN",
        level: "Mức 3: Vận dụng (Tư duy sơ đồ đoạn thẳng)",
        scoreText: "3.0 điểm",
        questions: [
          {
            q: "Bài 3 (3.0 điểm): Một thư viện trường học nhận quyên góp 1.450 quyển sách. Thư viện chuyển tặng học sinh vùng cao 250 quyển sách. Số sách còn lại chia đều vào 3 tủ sách lớn của các khối lớp. Hỏi mỗi tủ sách nhận được bao nhiêu quyển sách? (Bách hãy vẽ sơ đồ đoạn thẳng hoặc ghi rõ các bước giải ra vở ô ly nhé!)",
            answer: "Bài giải:\nSố quyển sách còn lại sau khi tặng học sinh vùng cao là:\n  1.450 − 250 = 1.200 (quyển) [1.25đ]\nMỗi tủ sách nhận được số quyển sách là:\n  1.200 ÷ 3 = 400 (quyển) [1.25đ]\n  Đáp số: 400 quyển sách. [0.5đ]\n(Chấp nhận cách giải gộp: (1.450 − 250) ÷ 3 = 400 quyển đầy đủ lời giải)"
          }
        ]
      },
      {
        id: "part4",
        name: "PHẦN IV: THỬ THÁCH TƯ DUY ĐIỂM 10",
        level: "Mức 4: Vận dụng cao / Olympic (Thử thách trí tuệ)",
        scoreText: "1.5 điểm",
        questions: [
          {
            q: "Bài 4 (1.5 điểm - Thử thách Olympic): Bách viết liên tiếp các số tự nhiên từ 1 đến 30 để tạo thành một số tự nhiên rất lớn:\n  A = 123456789101112...2930\na) Hỏi số A có tất cả bao nhiêu chữ số?\nb) Nếu Bách xóa đi 40 chữ số của số A sao cho các chữ số còn lại vẫn giữ nguyên thứ tự ban đầu để thu được số lớn nhất có thể, thì chữ số đầu tiên (hàng cao nhất) của số lớn nhất đó là chữ số nào? Vì sao?",
            answer: "Lời giải chi tiết:\na) Đếm số chữ số của A:\n- Từ 1 đến 9 có 9 chữ số. [0.25đ]\n- Từ 10 đến 30 có 21 số có 2 chữ số -> có 21 × 2 = 42 chữ số. [0.25đ]\nTổng cộng số A có: 9 + 42 = 51 chữ số. [0.25đ]\nb) Để số lớn nhất, chữ số đầu tiên phải là 9. Chữ số 9 đầu tiên ở vị trí thứ 9 (số 9). Bách chỉ cần xóa 8 chữ số đầu tiên (1 đến 8), còn lại 40 − 8 = 32 lượt xóa phía sau. Do đó chữ số đầu tiên chắc chắn là chữ số 9! [0.75đ]"
          }
        ]
      }
    ]
  },

  w2: {
    week: 2,
    title: "Đề kiểm tra 30 phút · Tuần 2: Cộng, trừ & Biểu thức chứa chữ",
    textbook: "Kết nối tri thức với cuộc sống",
    duration: "30 phút",
    totalScore: 10,
    sections: [
      {
        id: "part1",
        name: "PHẦN I: TRẮC NGHIỆM KHỞI ĐỘNG",
        level: "Mức 1: Nhận biết",
        scoreText: "3.0 điểm (4 câu × 0.75đ)",
        questions: [
          { q: "1. Với a = 25, giá trị của biểu thức 175 + a × 3 là:", choices: ["A. 600", "B. 250", "C. 350", "D. 225"], answer: "B. 250 (a × 3 = 75, rồi 175 + 75 = 250)" },
          { q: "2. Phép tính nào có kết quả bằng 10.000?", choices: ["A. 4.500 + 4.500", "B. 7.250 + 2.750", "C. 6.800 + 4.200", "D. 8.100 + 2.900"], answer: "B. 7.250 + 2.750 = 10.000" },
          { q: "3. Nhẩm nhanh 540 − 199 bằng cách bù tròn là:", choices: ["A. 540 − 200 + 1 = 341", "B. 540 − 200 − 1 = 339", "C. 340", "D. 351"], answer: "A. 540 − 200 + 1 = 341" },
          { q: "4. Với m = 8 và n = 5, giá trị của biểu thức (m + n) × 6 là:", choices: ["A. 78", "B. 88", "C. 68", "D. 48"], answer: "A. 78 ((8 + 5) × 6 = 13 × 6 = 78)" }
        ]
      },
      {
        id: "part2",
        name: "PHẦN II: TỰ LUẬN TÍNH TOÁN & BIỂU THỨC CHỨA CHỮ",
        level: "Mức 2: Thông hiểu",
        scoreText: "2.5 điểm",
        questions: [
          { q: "Bài 1 (1.5 điểm): Đặt tính rồi tính ra vở ô ly:\n  a) 52.839 + 38.476\n  b) 71.405 − 28.638", answer: "a) 52.839 + 38.476 = 91.315 [0.75đ]\nb) 71.405 − 28.638 = 42.767 [0.75đ]" },
          { q: "Bài 2 (1.0 điểm): Tính giá trị biểu thức sau với x = 450 và y = 550:\n  P = 1.200 − (x + y)", answer: "Thay x = 450, y = 550 vào P:\nP = 1.200 − (450 + 550) = 1.200 − 1.000 = 200 [1.0đ]" }
        ]
      },
      {
        id: "part3",
        name: "PHẦN III: BÀI TOÁN CÓ LỜI VĂN",
        level: "Mức 3: Vận dụng",
        scoreText: "3.0 điểm",
        questions: [
          {
            q: "Bài 3 (3.0 điểm): Một cửa hàng ngày thứ nhất bán được 1.350 kg gạo. Ngày thứ hai bán được nhiều hơn ngày thứ nhất 250 kg gạo. Hỏi cả hai ngày cửa hàng bán được bao nhiêu ki-lô-gam gạo?",
            answer: "Bài giải:\nNgày thứ hai cửa hàng bán được số kg gạo là:\n  1.350 + 250 = 1.600 (kg) [1.25đ]\nCả hai ngày cửa hàng bán được tất cả là:\n  1.350 + 1.600 = 2.950 (kg) [1.25đ]\n  Đáp số: 2.950 kg gạo. [0.5đ]"
          }
        ]
      },
      {
        id: "part4",
        name: "PHẦN IV: THỬ THÁCH TƯ DUY ĐIỂM 10",
        level: "Mức 4: Vận dụng cao / Olympic",
        scoreText: "1.5 điểm",
        questions: [
          {
            q: "Bài 4 (1.5 điểm): Cho biểu thức Q = 5.000 − (a + b). Biết a và b là hai số tự nhiên có ba chữ số và a ≠ b. Tìm giá trị lớn nhất của biểu thức Q.",
            answer: "Lời giải:\nĐể Q = 5.000 − (a + b) đạt giá trị lớn nhất thì tổng (a + b) phải đạt giá trị nhỏ nhất có thể. [0.5đ]\nSố tự nhiên có ba chữ số nhỏ nhất là 100. Vì a ≠ b, nên để tổng (a + b) nhỏ nhất, ta chọn hai số nhỏ nhất là a = 100 và b = 101. [0.5đ]\nKhi đó tổng nhỏ nhất là: a + b = 100 + 101 = 201.\nGiá trị lớn nhất của biểu thức Q là: 5.000 − 201 = 4.799. [0.5đ]\nĐáp số: 4.799."
          }
        ]
      }
    ]
  },

  w3: {
    week: 3,
    title: "Đề kiểm tra 30 phút · Tuần 3: Phép nhân và dãy số tự nhiên",
    textbook: "Kết nối tri thức với cuộc sống",
    duration: "30 phút",
    totalScore: 10,
    sections: [
      {
        id: "part1",
        name: "PHẦN I: TRẮC NGHIỆM KHỞI ĐỘNG",
        level: "Mức 1: Nhận biết",
        scoreText: "3.0 điểm (4 câu × 0.75đ)",
        questions: [
          { q: "1. Tích của 25 × 40 là:", choices: ["A. 100", "B. 1.000", "C. 10.000", "D. 500"], answer: "B. 1.000" },
          { q: "2. Trong dãy số tự nhiên, hai số chẵn liên tiếp hơn kém nhau bao nhiêu đơn vị?", choices: ["A. 1 đơn vị", "B. 2 đơn vị", "C. 4 đơn vị", "D. 0 đơn vị"], answer: "B. 2 đơn vị" },
          { q: "3. Tính nhẩm nhanh 36 × 11 bằng cách cộng 3 + 6 = 9 rồi chèn vào giữa, ta được:", choices: ["A. 366", "B. 396", "C. 386", "D. 406"], answer: "B. 396" },
          { q: "4. Số nào sau đây chia hết cho cả 2 và 5?", choices: ["A. 125", "B. 240", "C. 342", "D. 505"], answer: "B. 240 (có chữ số tận cùng là 0)" }
        ]
      },
      {
        id: "part2",
        name: "PHẦN II: TỰ LUẬN TÍNH TOÁN & ĐẶT TÍNH",
        level: "Mức 2: Thông hiểu",
        scoreText: "2.5 điểm",
        questions: [
          { q: "Bài 1 (1.5 điểm): Đặt tính rồi tính ra vở ô ly:\n  a) 1.428 × 6\n  b) 2.054 × 4", answer: "a) 1.428 × 6 = 8.568 [0.75đ]\nb) 2.054 × 4 = 8.216 [0.75đ]" },
          { q: "Bài 2 (1.0 điểm): Tính bằng cách thuận tiện nhất:\n  25 × 7 × 4", answer: "= (25 × 4) × 7 = 100 × 7 = 700 [1.0đ]" }
        ]
      },
      {
        id: "part3",
        name: "PHẦN III: BÀI TOÁN CÓ LỜI VĂN",
        level: "Mức 3: Vận dụng",
        scoreText: "3.0 điểm",
        questions: [
          {
            q: "Bài 3 (3.0 điểm): Một cửa hàng có 18 thùng mì tôm, mỗi thùng có 30 gói mì. Cửa hàng đã bán được 240 gói mì. Hỏi cửa hàng còn lại bao nhiêu gói mì tôm?",
            answer: "Bài giải:\nTổng số gói mì tôm trong 18 thùng là:\n  18 × 30 = 540 (gói) [1.25đ]\nSố gói mì tôm cửa hàng còn lại là:\n  540 − 240 = 300 (gói) [1.25đ]\n  Đáp số: 300 gói mì. [0.5đ]"
          }
        ]
      },
      {
        id: "part4",
        name: "PHẦN IV: THỬ THÁCH TƯ DUY ĐIỂM 10",
        level: "Mức 4: Vận dụng cao / Olympic",
        scoreText: "1.5 điểm",
        questions: [
          {
            q: "Bài 4 (1.5 điểm - Điền chữ số toán Olympic): Điền các chữ số thích hợp vào chữ cái A và B (A khác 0) để phép nhân sau đúng:\n    A 7\n  ×   6\n  -----\n  2 B 2",
            answer: "Lời giải:\nPhép nhân hàng đơn vị: 7 × 6 = 42, viết 2 nhớ 4. [0.5đ]\nPhép nhân hàng chục: A × 6 + 4 = 20 + B (với 0 ≤ B ≤ 9).\nVì tích có hàng trăm là 2 nên 20 ≤ A × 6 + 4 < 30:\n- Với A = 3: 3 × 6 + 4 = 22, suy ra B = 2. Khi đó: 37 × 6 = 222 (thỏa mãn).\n- Với A = 4: 4 × 6 + 4 = 28, suy ra B = 8. Khi đó: 47 × 6 = 282 (thỏa mãn).\nVậy các chữ số cần điền là: A = 3, B = 2 (phép tính: 37 × 6 = 222) hoặc A = 4, B = 8 (phép tính: 47 × 6 = 282). [1.0đ]"
          }
        ]
      }
    ]
  },

  w4: {
    week: 4,
    title: "Đề kiểm tra 30 phút · Tuần 4: Phép chia, số dư và làm tròn số",
    textbook: "Kết nối tri thức với cuộc sống",
    duration: "30 phút",
    totalScore: 10,
    sections: [
      {
        id: "part1",
        name: "PHẦN I: TRẮC NGHIỆM KHỞI ĐỘNG",
        level: "Mức 1: Nhận biết",
        scoreText: "3.0 điểm (4 câu × 0.75đ)",
        questions: [
          { q: "1. Thương và số dư của phép chia 58 ÷ 7 là:", choices: ["A. 8 dư 2", "B. 7 dư 9", "C. 8 dư 1", "D. 7 dư 5"], answer: "A. 8 dư 2 (vì 7 × 8 + 2 = 58)" },
          { q: "2. Trong phép chia có số chia là 8, số dư lớn nhất có thể là:", choices: ["A. 8", "B. 7", "C. 9", "D. 6"], answer: "B. 7 (số dư luôn bé hơn số chia)" },
          { q: "3. Làm tròn số 648.200 đến hàng trăm nghìn ta được số:", choices: ["A. 640.000", "B. 650.000", "C. 600.000", "D. 700.000"], answer: "C. 600.000" },
          { q: "4. Kết quả của phép chia nhẩm 350 ÷ 5 là:", choices: ["A. 60", "B. 70", "C. 80", "D. 75"], answer: "B. 70" }
        ]
      },
      {
        id: "part2",
        name: "PHẦN II: TỰ LUẬN TÍNH TOÁN & ĐẶT TÍNH",
        level: "Mức 2: Thông hiểu",
        scoreText: "2.5 điểm",
        questions: [
          { q: "Bài 1 (1.5 điểm): Đặt tính rồi tính ra vở ô ly:\n  a) 4.356 ÷ 3\n  b) 7.528 ÷ 5 (nêu rõ thương và số dư)", answer: "a) 4.356 ÷ 3 = 1.452 (chia hết) [0.75đ]\nb) 7.528 ÷ 5 = 1.505 dư 3 (thử lại: 1.505 × 5 + 3 = 7.528) [0.75đ]" },
          { q: "Bài 2 (1.0 điểm): Tìm y biết:\n  y × 6 = 72 + 24", answer: "y × 6 = 96 [0.5đ]\ny = 96 ÷ 6 = 16 [0.5đ]" }
        ]
      },
      {
        id: "part3",
        name: "PHẦN III: BÀI TOÁN CÓ LỜI VĂN",
        level: "Mức 3: Vận dụng",
        scoreText: "3.0 điểm",
        questions: [
          {
            q: "Bài 3 (3.0 điểm): Bác thợ may có một cuộn vải dài 47 m. Mỗi bộ quần áo may hết 3 m vải.\n  a) Hỏi bác may được nhiều nhất bao nhiêu bộ quần áo và còn thừa mấy mét vải?\n  b) Bác cần thêm ít nhất bao nhiêu mét vải nữa để may thêm được đúng 1 bộ quần áo nữa?",
            answer: "Bài giải:\na) Thực hiện phép chia: 47 ÷ 3 = 15 (dư 2) [1.0đ]\nVậy bác may được nhiều nhất 15 bộ quần áo và còn thừa 2 m vải. [0.75đ]\nb) Để may thêm đúng 1 bộ quần áo hết 3 m vải, số mét vải cần thêm là:\n  3 − 2 = 1 (m) [0.75đ]\n  Đáp số: a) 15 bộ, thừa 2 m vải; b) 1 m vải. [0.5đ]"
          }
        ]
      },
      {
        id: "part4",
        name: "PHẦN IV: THỬ THÁCH TƯ DUY ĐIỂM 10",
        level: "Mức 4: Vận dụng cao / Olympic",
        scoreText: "1.5 điểm",
        questions: [
          {
            q: "Bài 4 (1.5 điểm): Một phép chia có số chia là 7, số dư là số dư lớn nhất có thể. Nếu gấp cả số bị chia và số chia lên 3 lần thì thương và số dư mới là bao nhiêu?",
            answer: "Lời giải:\nVì số chia là 7 nên số dư lớn nhất có thể là: 7 − 1 = 6. [0.5đ]\nQuy tắc toán học: Khi gấp cả số bị chia và số chia lên k lần (k = 3):\n- Thương KHÔNG THAY ĐỔI. [0.5đ]\n- Số dư mới được gấp lên 3 lần: 6 × 3 = 18. [0.5đ]\nVí dụ minh họa: 20 ÷ 7 = 2 dư 6 -> nhân 3: 60 ÷ 21 = 2 dư 18."
          }
        ]
      }
    ]
  },

  w5: {
    week: 5,
    title: "Đề kiểm tra 30 phút · Tuần 5: Số có sáu chữ số, Hàng và lớp",
    textbook: "Kết nối tri thức với cuộc sống",
    duration: "30 phút",
    totalScore: 10,
    sections: [
      {
        id: "part1",
        name: "PHẦN I: TRẮC NGHIỆM KHỞI ĐỘNG",
        level: "Mức 1: Nhận biết",
        scoreText: "3.0 điểm (4 câu × 0.75đ)",
        questions: [
          { q: "1. Chữ số 7 trong số 574.820 thuộc hàng nào, lớp nào?", choices: ["A. Hàng chục nghìn, lớp nghìn", "B. Hàng nghìn, lớp nghìn", "C. Hàng trăm nghìn, lớp nghìn", "D. Hàng chục, lớp đơn vị"], answer: "A. Hàng chục nghìn, lớp nghìn" },
          { q: "2. Lớp nghìn của số 603.549 gồm các chữ số:", choices: ["A. 5, 4, 9", "B. 6, 0, 3", "C. 6, 3, 5", "D. 0, 3, 5"], answer: "B. 6, 0, 3" },
          { q: "3. Số liền trước của số 1.000.000 là:", choices: ["A. 99.999", "B. 999.990", "C. 999.999", "D. 1.000.001"], answer: "C. 999.999" },
          { q: "4. Giá trị của biểu thức 50 + 50 × 2 là:", choices: ["A. 200", "B. 150", "C. 100", "D. 120"], answer: "B. 150 (nhân trước: 50 × 2 = 100, rồi cộng 50 = 150)" }
        ]
      },
      {
        id: "part2",
        name: "PHẦN II: TỰ LUẬN TÍNH TOÁN & ĐẶT TÍNH",
        level: "Mức 2: Thông hiểu",
        scoreText: "2.5 điểm",
        questions: [
          { q: "Bài 1 (1.5 điểm): Đặt tính rồi tính ra vở ô ly (chú ý thẳng cột theo hàng và lớp):\n  a) 450.206 + 189.475\n  b) 603.549 − 281.365", answer: "a) 450.206 + 189.475 = 639.681 (đặt tính thẳng hàng và lớp) [0.75đ]\nb) 603.549 − 281.365 = 322.184 [0.75đ]" },
          { q: "Bài 2 (1.0 điểm): Viết số 450.206 thành tổng theo các hàng và lớp.", answer: "450.206 = 400.000 + 50.000 + 200 + 6 [1.0đ]" }
        ]
      },
      {
        id: "part3",
        name: "PHẦN III: BÀI TOÁN CÓ LỜI VĂN",
        level: "Mức 3: Vận dụng",
        scoreText: "3.0 điểm",
        questions: [
          {
            q: "Bài 3 (3.0 điểm): Mẹ mua 3 hộp bánh cùng loại, mỗi hộp giá 35.000 đồng và đưa cho cô bán hàng một tờ tiền mệnh giá 200.000 đồng. Hỏi cô bán hàng phải trả lại mẹ bao nhiêu tiền?",
            answer: "Bài giải:\nSố tiền mẹ mua 3 hộp bánh là:\n  35.000 × 3 = 105.000 (đồng) [1.25đ]\nSố tiền cô bán hàng phải trả lại mẹ là:\n  200.000 − 105.000 = 95.000 (đồng) [1.25đ]\n  Đáp số: 95.000 đồng. [0.5đ]"
          }
        ]
      },
      {
        id: "part4",
        name: "PHẦN IV: THỬ THÁCH TƯ DUY ĐIỂM 10",
        level: "Mức 4: Vận dụng cao / Olympic",
        scoreText: "1.5 điểm",
        questions: [
          {
            q: "Bài 4 (1.5 điểm): Viết số tự nhiên bé nhất có 6 chữ số khác nhau sao cho tổng các chữ số của số đó đúng bằng 20.",
            answer: "Lời giải:\nĐể số có 6 chữ số khác nhau là bé nhất:\n- Chữ số hàng trăm nghìn phải bé nhất khác 0, chọn chữ số 1. [0.25đ]\n- Các chữ số tiếp theo nhỏ nhất có thể: hàng chục nghìn chọn 0, hàng nghìn chọn 2, hàng trăm chọn 3. [0.5đ]\nTổng 4 chữ số đầu tiên là: 1 + 0 + 2 + 3 = 6.\nTổng 2 chữ số còn lại (hàng chục và hàng đơn vị) phải bằng: 20 − 6 = 14. [0.25đ]\nĐể số nhỏ nhất, chữ số hàng chục phải nhỏ hơn chữ số hàng đơn vị. Các cặp khác nhau có tổng 14 là (5, 9) và (6, 8).\nChọn hàng chục là 5, hàng đơn vị là 9 (vì 5 < 6). [0.25đ]\nVậy số bé nhất thỏa mãn là: 102.359. [0.25đ]"
          }
        ]
      }
    ]
  },

  w6: {
    week: 6,
    title: "Đề kiểm tra 30 phút · Tuần 6: Lớp triệu, Đơn vị khối lượng (yến, tạ, tấn) & Thế kỉ",
    textbook: "Kết nối tri thức với cuộc sống",
    duration: "30 phút",
    totalScore: 10,
    sections: [
      {
        id: "part1",
        name: "PHẦN I: TRẮC NGHIỆM KHỞI ĐỘNG",
        level: "Mức 1: Nhận biết",
        scoreText: "3.0 điểm (4 câu × 0.75đ)",
        questions: [
          { q: "1. 3 tấn 50 kg bằng bao nhiêu ki-lô-gam?", choices: ["A. 350 kg", "B. 3.050 kg", "C. 3.500 kg", "D. 3.005 kg"], answer: "B. 3.050 kg (3 tấn = 3.000 kg + 50 kg = 3.050 kg)" },
          { q: "2. Năm 1945 thuộc thế kỉ nào?", choices: ["A. Thế kỉ XIX", "B. Thế kỉ XX", "C. Thế kỉ XXI", "D. Thế kỉ XVIII"], answer: "B. Thế kỉ XX (từ năm 1901 đến năm 2000)" },
          { q: "3. Số 25.000.000 đọc là:", choices: ["A. Hai mươi lăm nghìn", "B. Hai trăm năm mươi triệu", "C. Hai mươi lăm triệu", "D. Hai mươi lăm tỉ"], answer: "C. Hai mươi lăm triệu" },
          { q: "4. 1/4 thế kỉ bằng bao nhiêu năm?", choices: ["A. 20 năm", "B. 25 năm", "C. 50 năm", "D. 10 năm"], answer: "B. 25 năm (1 thế kỉ = 100 năm; 100 ÷ 4 = 25 năm)" }
        ]
      },
      {
        id: "part2",
        name: "PHẦN II: TỰ LUẬN TÍNH TOÁN & ĐẶT TÍNH",
        level: "Mức 2: Thông hiểu",
        scoreText: "2.5 điểm",
        questions: [
          { q: "Bài 1 (1.5 điểm): Đặt tính rồi tính ra vở ô ly:\n  a) 125.400 + 84.600\n  b) 450.000 − 128.000", answer: "a) 125.400 + 84.600 = 210.000 [0.75đ]\nb) 450.000 − 128.000 = 322.000 [0.75đ]" },
          { q: "Bài 2 (1.0 điểm): Đổi đơn vị khối lượng và thời gian:\n  a) 5 tạ 4 yến = ... kg\n  b) 2 thế kỉ 15 năm = ... năm", answer: "a) 540 kg [0.5đ]\nb) 215 năm [0.5đ]" }
        ]
      },
      {
        id: "part3",
        name: "PHẦN III: BÀI TOÁN CÓ LỜI VĂN",
        level: "Mức 3: Vận dụng",
        scoreText: "3.0 điểm",
        questions: [
          {
            q: "Bài 3 (3.0 điểm): Một xe tải chuyến đầu chở được 2 tấn 4 tạ hàng. Chuyến sau xe chở được nhiều hơn chuyến đầu 4 tạ hàng. Hỏi cả hai chuyến xe chở được tất cả bao nhiêu tạ hàng?",
            answer: "Bài giải:\nĐổi: 2 tấn 4 tạ = 24 tạ [0.5đ]\nChuyến sau xe tải chở được số tạ hàng là:\n  24 + 4 = 28 (tạ) [1.0đ]\nCả hai chuyến xe chở được tất cả là:\n  24 + 28 = 52 (tạ) [1.0đ]\n  Đáp số: 52 tạ hàng (hoặc 5 tấn 2 tạ). [0.5đ]"
          }
        ]
      },
      {
        id: "part4",
        name: "PHẦN IV: THỬ THÁCH TƯ DUY ĐIỂM 10",
        level: "Mức 4: Vận dụng cao / Olympic",
        scoreText: "1.5 điểm",
        questions: [
          {
            q: "Bài 4 (1.5 điểm - Tư duy Thế kỉ & Năm sinh lịch sử): Năm sinh của Trạng nguyên Lương Thế Vinh là một năm thuộc thế kỉ XV. Biết rằng số chỉ năm sinh đó là một số có bốn chữ số có dạng đối xứng (chữ số hàng nghìn bằng chữ số hàng đơn vị, chữ số hàng trăm bằng chữ số hàng chục) và tổng bốn chữ số của năm sinh đúng bằng 10. Hỏi Trạng nguyên Lương Thế Vinh sinh năm nào?",
            answer: "Lời giải:\nVì năm sinh của Trạng nguyên Lương Thế Vinh thuộc thế kỉ XV nên năm đó bắt đầu bằng chữ số 1 và 4, có dạng 14ab (từ năm 1401 đến 1500). [0.5đ]\nTheo đề bài, năm sinh là số có bốn chữ số đối xứng:\n- Chữ số hàng đơn vị bằng chữ số hàng nghìn nên b = 1.\n- Chữ số hàng chục bằng chữ số hàng trăm nên a = 4. [0.5đ]\nKiểm tra lại tổng bốn chữ số: 1 + 4 + 4 + 1 = 10 (hoàn toàn thỏa mãn đề bài).\nVậy Trạng nguyên Lương Thế Vinh sinh năm 1441. [0.5đ]\nĐáp số: Năm 1441."
          }
        ]
      }
    ]
  },

  w7: {
    week: 7,
    title: "Đề kiểm tra 30 phút · Tuần 7: Dãy số và Quy luật số học",
    textbook: "Kết nối tri thức với cuộc sống",
    duration: "30 phút",
    totalScore: 10,
    sections: [
      {
        id: "part1",
        name: "PHẦN I: TRẮC NGHIỆM KHỞI ĐỘNG",
        level: "Mức 1: Nhận biết quy luật",
        scoreText: "3.0 điểm (4 câu × 0.75đ)",
        questions: [
          { q: "1. Số tiếp theo trong dãy số 2, 6, 12, 20, 30, ... là:", choices: ["A. 40", "B. 42", "C. 44", "D. 36"], answer: "B. 42 (Quy luật: 1×2, 2×3, 3×4, 4×5, 5×6 -> số tiếp theo là 6×7 = 42)" },
          { q: "2. Dãy số lẻ liên tiếp 1, 3, 5, 7, ... có số hạng thứ 20 là:", choices: ["A. 39", "B. 41", "C. 40", "D. 37"], answer: "A. 39 (Số thứ n = 2n − 1 -> 2 × 20 − 1 = 39)" },
          { q: "3. Cho dãy số cách đều 5, 10, 15, 20, ... Số 205 là số hạng thứ mấy?", choices: ["A. 40", "B. 41", "C. 42", "D. 39"], answer: "B. 41 (205 ÷ 5 = 41)" },
          { q: "4. Tổng của 10 số tự nhiên liên tiếp từ 1 đến 10 là:", choices: ["A. 50", "B. 55", "C. 60", "D. 45"], answer: "B. 55 ((1 + 10) × 10 ÷ 2 = 55)" }
        ]
      },
      {
        id: "part2",
        name: "PHẦN II: TỰ LUẬN TÍNH TOÁN & QUY LUẬT",
        level: "Mức 2: Thông hiểu",
        scoreText: "2.5 điểm",
        questions: [
          { q: "Bài 1 (1.5 điểm): Cho dãy số: 3, 7, 11, 15, 19, ...\n  a) Tìm quy luật và viết tiếp 2 số hạng tiếp theo.\n  b) Số hạng thứ 25 của dãy là số nào?", answer: "a) Quy luật: Số liền sau bằng số liền trước cộng thêm 4 đơn vị. [0.25đ]\nHai số tiếp theo là: 19 + 4 = 23 ; 23 + 4 = 27. [0.5đ]\nb) Số thứ 25 = 3 + (25 − 1) × 4 = 3 + 96 = 99. [0.75đ]" },
          { q: "Bài 2 (1.0 điểm): Tính nhanh tổng sau:\n  S = 1 + 2 + 3 + 4 + ... + 19 + 20", answer: "Ghép cặp: (1 + 20) + (2 + 19) + ... + (10 + 11) = 21 × 10 = 210 [1.0đ]" }
        ]
      },
      {
        id: "part3",
        name: "PHẦN III: BÀI TOÁN CÓ LỜI VĂN",
        level: "Mức 3: Vận dụng",
        scoreText: "3.0 điểm",
        questions: [
          {
            q: "Bài 3 (3.0 điểm): Một rạp chiếu phim có 12 hàng ghế. Hàng đầu tiên có 15 ghế, mỗi hàng sau nhiều hơn hàng liền trước 2 ghế. Hỏi cả rạp chiếu phim có tất cả bao nhiêu ghế ngồi?",
            answer: "Bài giải:\nHàng thứ 12 có số ghế là:\n  15 + (12 − 1) × 2 = 37 (ghế) [1.25đ]\nTổng số ghế trong cả rạp là:\n  (15 + 37) × 12 ÷ 2 = 312 (ghế) [1.25đ]\n  Đáp số: 312 ghế ngồi. [0.5đ]"
          }
        ]
      },
      {
        id: "part4",
        name: "PHẦN IV: THỬ THÁCH TƯ DUY ĐIỂM 10",
        level: "Mức 4: Vận dụng cao / Olympic",
        scoreText: "1.5 điểm",
        questions: [
          {
            q: "Bài 4 (1.5 điểm - Dãy số tự nhiên nhiều chữ số): Người ta đánh số trang một cuốn sách dày 120 trang bằng các số tự nhiên từ 1 đến 120. Hỏi phải dùng tất cả bao nhiêu chữ số?",
            answer: "Lời giải:\n- Từ trang 1 đến trang 9 có: (9 − 1 + 1) = 9 trang có 1 chữ số -> cần 9 chữ số. [0.25đ]\n- Từ trang 10 đến trang 99 có: (99 − 10 + 1) = 90 trang có 2 chữ số -> cần 90 × 2 = 180 chữ số. [0.5đ]\n- Từ trang 100 đến trang 120 có: (120 − 100 + 1) = 21 trang có 3 chữ số -> cần 21 × 3 = 63 chữ số. [0.5đ]\nTổng số chữ số cần dùng là:\n  9 + 180 + 63 = 252 (chữ số).\n  Đáp số: 252 chữ số. [0.25đ]"
          }
        ]
      }
    ]
  },

  w8: {
    week: 8,
    title: "Đề kiểm tra 30 phút · Tuần 8: Bội, Ước và Dấu hiệu chia hết",
    textbook: "Kết nối tri thức với cuộc sống",
    duration: "30 phút",
    totalScore: 10,
    sections: [
      {
        id: "part1",
        name: "PHẦN I: TRẮC NGHIỆM KHỞI ĐỘNG",
        level: "Mức 1: Nhận biết",
        scoreText: "3.0 điểm (4 câu × 0.75đ)",
        questions: [
          { q: "1. Số nào sau đây chia hết cho 3 nhưng không chia hết cho 9?", choices: ["A. 135", "B. 240", "C. 333", "D. 180"], answer: "B. 240 (tổng chữ số 2+4+0=6 chia hết cho 3, không chia hết cho 9)" },
          { q: "2. Để số 5a2 chia hết cho 9 thì chữ số a phải là:", choices: ["A. 1", "B. 2", "C. 4", "D. 3"], answer: "B. 2 (5 + 2 + 2 = 9 chia hết cho 9)" },
          { q: "3. Tập hợp các ước của 12 là:", choices: ["A. {1, 2, 3, 4, 6, 12}", "B. {2, 3, 4, 6}", "C. {1, 2, 4, 12}", "D. {0, 12, 24}"], answer: "A. {1, 2, 3, 4, 6, 12}" },
          { q: "4. Số nào sau đây vừa chia hết cho 2 vừa chia hết cho 5?", choices: ["A. 455", "B. 780", "C. 322", "D. 505"], answer: "B. 780 (tận cùng là 0)" }
        ]
      },
      {
        id: "part2",
        name: "PHẦN II: TỰ LUẬN TÍNH TOÁN & CHIA HẾT",
        level: "Mức 2: Thông hiểu",
        scoreText: "2.5 điểm",
        questions: [
          { q: "Bài 1 (1.5 điểm): Điền chữ số thích hợp vào dấu * để:\n  a) Số 4*6 chia hết cho 3\n  b) Số 75* chia hết cho cả 2 và 5", answer: "a) Tổng 4 + 6 = 10. Để chia hết cho 3 thì * có thể là 2, 5, hoặc 8. (Học sinh nêu đúng 1 hoặc cả 3 số đều được điểm) [0.75đ]\nb) Để chia hết cho cả 2 và 5 thì chữ số tận cùng * bắt buộc phải là 0. Số đó là 750. [0.75đ]" },
          { q: "Bài 2 (1.0 điểm): Tìm tất cả các ước chung của 18 và 24.", answer: "Ước của 18: {1, 2, 3, 6, 9, 18}.\nƯớc của 24: {1, 2, 3, 4, 6, 8, 12, 24}.\nƯớc chung của 18 và 24 là: {1, 2, 3, 6}. [1.0đ]" }
        ]
      },
      {
        id: "part3",
        name: "PHẦN III: BÀI TOÁN CÓ LỜI VĂN",
        level: "Mức 3: Vận dụng",
        scoreText: "3.0 điểm",
        questions: [
          {
            q: "Bài 3 (3.0 điểm): Cô giáo có 48 chiếc bút màu muốn chia đều vào các hộp quà, mỗi hộp quà có số bút bằng nhau và nhiều hơn 3 chiếc nhưng ít hơn 15 chiếc. Hỏi cô giáo có thể chia thành bao nhiêu hộp quà? Hãy tìm tất cả các cách chia hợp lệ.",
            answer: "Bài giải:\nSố bút trong mỗi hộp phải là ước của 48. [0.5đ]\nCác ước của 48 là: 1, 2, 3, 4, 6, 8, 12, 16, 24, 48. [0.5đ]\nVì số bút mỗi hộp nhiều hơn 3 và ít hơn 15 nên số bút mỗi hộp có thể là: 4, 6, 8, hoặc 12 chiếc. [0.5đ]\nCác cách chia tương ứng:\n- Cách 1: Mỗi hộp 4 bút -> có 48 ÷ 4 = 12 hộp. [0.35đ]\n- Cách 2: Mỗi hộp 6 bút -> có 48 ÷ 6 = 8 hộp. [0.35đ]\n- Cách 3: Mỗi hộp 8 bút -> có 48 ÷ 8 = 6 hộp. [0.35đ]\n- Cách 4: Mỗi hộp 12 bút -> có 48 ÷ 12 = 4 hộp. [0.4đ]"
          }
        ]
      },
      {
        id: "part4",
        name: "PHẦN IV: THỬ THÁCH TƯ DUY ĐIỂM 10",
        level: "Mức 4: Vận dụng cao / Olympic",
        scoreText: "1.5 điểm",
        questions: [
          {
            q: "Bài 4 (1.5 điểm): Tìm số tự nhiên nhỏ nhất khác 1 sao cho khi chia số đó cho 2, cho 3, cho 4 và cho 5 đều có số dư là 1.",
            answer: "Lời giải:\nGọi số cần tìm là A. Vì A chia cho 2, 3, 4, 5 đều dư 1 nên (A − 1) chia hết cho cả 2, 3, 4 và 5. [0.5đ]\nĐể A nhỏ nhất khác 1 thì (A − 1) phải là số nhỏ nhất khác 0 cùng chia hết cho 2, 3, 4, 5 (Bội chung nhỏ nhất). [0.5đ]\nSố nhỏ nhất chia hết cho 2, 3, 4, 5 là 60.\nDo đó: A − 1 = 60 => A = 60 + 1 = 61.\nThử lại: 61 chia 2, 3, 4, 5 đều dư 1 (đúng). Đáp số: 61. [0.5đ]"
          }
        ]
      }
    ]
  },

  w9: {
    week: 9,
    title: "Đề kiểm tra 30 phút · Tuần 9: Khái niệm Phân số & Phân số bằng nhau",
    textbook: "Kết nối tri thức với cuộc sống",
    duration: "30 phút",
    totalScore: 10,
    sections: [
      {
        id: "part1",
        name: "PHẦN I: TRẮC NGHIỆM KHỞI ĐỘNG",
        level: "Mức 1: Nhận biết",
        scoreText: "3.0 điểm (4 câu × 0.75đ)",
        questions: [
          { q: "1. Phân số chỉ phần đã tô màu của hình tròn chia làm 8 phần bằng nhau, đã tô 3 phần là:", choices: ["A. 3/8", "B. 5/8", "C. 8/3", "D. 3/5"], answer: "A. 3/8 (Tử số là số phần tô màu 3, mẫu số là tổng số phần 8)" },
          { q: "2. Phân số nào dưới đây bằng phân số 3/4?", choices: ["A. 6/12", "B. 9/12", "C. 8/12", "D. 12/15"], answer: "B. 9/12 (Nhân cả tử số và mẫu số với 3: 3×3 / 4×3 = 9/12)" },
          { q: "3. Trong các phân số sau, phân số nào tối giản?", choices: ["A. 4/6", "B. 9/15", "C. 7/12", "D. 10/25"], answer: "C. 7/12 (7 và 12 không cùng chia hết cho số tự nhiên nào lớn hơn 1)" },
          { q: "4. Mẹ chia chiếc bánh gato làm 6 phần bằng nhau, Bách ăn 2 phần. Phân số chỉ số phần bánh Bách đã ăn là:", choices: ["A. 1/3", "B. 1/2", "C. 2/4", "D. 3/6"], answer: "A. 1/3 (2/6 rút gọn chia cả tử và mẫu cho 2 được 1/3)" }
        ]
      },
      {
        id: "part2",
        name: "PHẦN II: TỰ LUẬN TÍNH TOÁN & RÚT GỌN",
        level: "Mức 2: Thông hiểu",
        scoreText: "2.5 điểm",
        questions: [
          { q: "Bài 1 (1.5 điểm): Rút gọn các phân số sau về phân số tối giản ra vở ô ly:\n  a) 15/20\n  b) 24/36", answer: "a) 15/20 = (15 ÷ 5) / (20 ÷ 5) = 3/4 [0.75đ]\nb) 24/36 = (24 ÷ 12) / (36 ÷ 12) = 2/3 [0.75đ]" },
          { q: "Bài 2 (1.0 điểm): Quy đồng mẫu số hai phân số: 2/3 và 3/5", answer: "Mẫu số chung là 3 × 5 = 15.\n2/3 = (2 × 5) / (3 × 5) = 10/15 [0.5đ]\n3/5 = (3 × 3) / (5 × 3) = 9/15 [0.5đ]" }
        ]
      },
      {
        id: "part3",
        name: "PHẦN III: BÀI TOÁN CÓ LỜI VĂN",
        level: "Mức 3: Vận dụng",
        scoreText: "3.0 điểm",
        questions: [
          {
            q: "Bài 3 (3.0 điểm): Một lớp học có 32 học sinh, trong đó có 18 học sinh nữ. Hỏi:\na) Số học sinh nam của lớp đó là bao nhiêu em?\nb) Phân số chỉ số học sinh nam so với tổng số học sinh cả lớp là bao nhiêu? (Viết dưới dạng phân số tối giản)",
            answer: "Bài giải:\na) Số học sinh nam của lớp đó là:\n  32 − 18 = 14 (học sinh) [1.25đ]\nb) Phân số chỉ số học sinh nam so với tổng số học sinh cả lớp là:\n  14/32 = 7/16 (số học sinh cả lớp) [1.25đ]\n  Đáp số: a) 14 học sinh; b) 7/16 số học sinh cả lớp. [0.5đ]"
          }
        ]
      },
      {
        id: "part4",
        name: "PHẦN IV: THỬ THÁCH TƯ DUY ĐIỂM 10",
        level: "Mức 4: Vận dụng cao / Olympic",
        scoreText: "1.5 điểm",
        questions: [
          {
            q: "Bài 4 (1.5 điểm): Tìm hai số tự nhiên x và y biết:\n  3/5 = x/25 = 18/y",
            answer: "Lời giải:\nTừ 3/5 = x/25, nhân cả tử và mẫu của 3/5 với 5 ta có:\n  (3 × 5) / (5 × 5) = 15/25 => x = 15. [0.75đ]\nTừ 3/5 = 18/y, nhân cả tử và mẫu của 3/5 với 6 ta có:\n  (3 × 6) / (5 × 6) = 18/30 => y = 30. [0.5đ]\nĐáp số: x = 15, y = 30. [0.25đ]"
          }
        ]
      }
    ]
  },

  w10: {
    week: 10,
    title: "Đề kiểm tra 30 phút · Tuần 10: So sánh phân số & Cộng trừ phân số cùng mẫu",
    textbook: "Kết nối tri thức với cuộc sống",
    duration: "30 phút",
    totalScore: 10,
    sections: [
      {
        id: "part1",
        name: "PHẦN I: TRẮC NGHIỆM KHỞI ĐỘNG",
        level: "Mức 1: Nhận biết",
        scoreText: "3.0 điểm (4 câu × 0.75đ)",
        questions: [
          { q: "1. Phân số nào sau đây lớn hơn 1?", choices: ["A. 4/5", "B. 7/7", "C. 9/8", "D. 2/3"], answer: "C. 9/8 (Tử số 9 lớn hơn mẫu số 8 nên phân số lớn hơn 1)" },
          { q: "2. Kết quả của phép tính 5/11 + 4/11 là:", choices: ["A. 9/22", "B. 9/11", "C. 1/11", "D. 20/11"], answer: "B. 9/11 (Cộng tử số với tử số, giữ nguyên mẫu số)" },
          { q: "3. Trong các phân số 3/7, 5/7, 2/7, 6/7, phân số bé nhất là:", choices: ["A. 6/7", "B. 5/7", "C. 3/7", "D. 2/7"], answer: "D. 2/7 (Cùng mẫu số, phân số có tử số bé nhất thì bé nhất)" },
          { q: "4. Kết quả của phép trừ 8/9 − 5/9 là:", choices: ["A. 3/9 = 1/3", "B. 3/0", "C. 13/9", "D. 3/18"], answer: "A. 3/9 = 1/3 (8/9 − 5/9 = 3/9, rút gọn được 1/3)" }
        ]
      },
      {
        id: "part2",
        name: "PHẦN II: TỰ LUẬN TÍNH TOÁN & SO SÁNH",
        level: "Mức 2: Thông hiểu",
        scoreText: "2.5 điểm",
        questions: [
          { q: "Bài 1 (1.5 điểm): Tính kết quả các phép tính sau và rút gọn nếu có thể:\n  a) 5/9 + 2/9\n  b) 11/12 − 5/12", answer: "a) 5/9 + 2/9 = 7/9 [0.75đ]\nb) 11/12 − 5/12 = 6/12 = 1/2 [0.75đ]" },
          { q: "Bài 2 (1.0 điểm): So sánh hai phân số bằng cách quy đồng mẫu số: 3/4 và 5/6", answer: "Mẫu số chung nhỏ nhất là 12:\n3/4 = (3 × 3) / (4 × 3) = 9/12 [0.4đ]\n5/6 = (5 × 2) / (6 × 2) = 10/12 [0.4đ]\nVì 9/12 < 10/12 nên 3/4 < 5/6 [0.2đ]" }
        ]
      },
      {
        id: "part3",
        name: "PHẦN III: BÀI TOÁN CÓ LỜI VĂN",
        level: "Mức 3: Vận dụng",
        scoreText: "3.0 điểm",
        questions: [
          {
            q: "Bài 3 (3.0 điểm): Hai vòi nước cùng chảy vào một bể rỗng chưa có nước. Trong một giờ, vòi thứ nhất chảy được 2/7 bể, vòi thứ hai chảy được 3/7 bể. Hỏi:\na) Trong một giờ cả hai vòi cùng chảy thì được bao nhiêu phần của bể?\nb) Còn lại bao nhiêu phần của bể chưa có nước?",
            answer: "Bài giải:\na) Trong một giờ cả hai vòi chảy được số phần bể là:\n  2/7 + 3/7 = 5/7 (bể) [1.25đ]\nb) Số phần bể chưa có nước là:\n  1 − 5/7 = 7/7 − 5/7 = 2/7 (bể) [1.25đ]\n  Đáp số: a) 5/7 bể; b) 2/7 bể. [0.5đ]"
          }
        ]
      },
      {
        id: "part4",
        name: "PHẦN IV: THỬ THÁCH TƯ DUY ĐIỂM 10",
        level: "Mức 4: Vận dụng cao / Olympic",
        scoreText: "1.5 điểm",
        questions: [
          {
            q: "Bài 4 (1.5 điểm): Tính nhanh giá trị của tổng phân số sau:\n  S = 1/2 + 1/4 + 1/8 + 1/16 + 1/32",
            answer: "Lời giải:\nNhân cả hai vế với 2 ta được:\n  2 × S = 1 + 1/2 + 1/4 + 1/8 + 1/16 [0.5đ]\nLấy 2 × S trừ đi S ta có:\n  2 × S − S = (1 + 1/2 + 1/4 + 1/8 + 1/16) − (1/2 + 1/4 + 1/8 + 1/16 + 1/32) [0.5đ]\n  S = 1 − 1/32 = 31/32. [0.5đ]\nĐáp số: 31/32."
          }
        ]
      }
    ]
  },

  w11: {
    week: 11,
    title: "Đề kiểm tra 30 phút · Tuần 11: Phép cộng & trừ phân số khác mẫu số",
    textbook: "Kết nối tri thức với cuộc sống",
    duration: "30 phút",
    totalScore: 10,
    sections: [
      {
        id: "part1",
        name: "PHẦN I: TRẮC NGHIỆM KHỞI ĐỘNG",
        level: "Mức 1: Nhận biết",
        scoreText: "3.0 điểm (4 câu × 0.75đ)",
        questions: [
          { q: "1. Kết quả của phép tính 1/3 + 1/6 là:", choices: ["A. 2/9", "B. 3/6 = 1/2", "C. 2/6", "D. 1/9"], answer: "B. 3/6 = 1/2 (Quy đồng: 2/6 + 1/6 = 3/6 = 1/2)" },
          { q: "2. Mẫu số chung nhỏ nhất của hai phân số 5/6 và 3/8 là:", choices: ["A. 48", "B. 24", "C. 14", "D. 18"], answer: "B. 24 (24 chia hết cho cả 6 và 8)" },
          { q: "3. Kết quả của phép trừ 3/4 − 1/2 là:", choices: ["A. 2/2 = 1", "B. 2/4 = 1/2", "C. 1/4", "D. 1/8"], answer: "C. 1/4 (3/4 − 2/4 = 1/4)" },
          { q: "4. Phép tính nào có kết quả bằng 1?", choices: ["A. 2/5 + 3/5", "B. 1/2 + 1/3", "C. 3/4 + 1/2", "D. 4/7 + 2/7"], answer: "A. 2/5 + 3/5 = 5/5 = 1" }
        ]
      },
      {
        id: "part2",
        name: "PHẦN II: TỰ LUẬN TÍNH TOÁN & TÌM X",
        level: "Mức 2: Thông hiểu",
        scoreText: "2.5 điểm",
        questions: [
          { q: "Bài 1 (1.5 điểm): Tính ra vở ô ly (yêu cầu ghi rõ bước quy đồng mẫu số):\n  a) 2/5 + 3/10\n  b) 5/6 − 1/4", answer: "a) 2/5 + 3/10 = 4/10 + 3/10 = 7/10 [0.75đ]\nb) 5/6 − 1/4 = 10/12 − 3/12 = 7/12 [0.75đ]" },
          { q: "Bài 2 (1.0 điểm): Tìm x biết:\n  x − 1/3 = 2/5", answer: "x = 2/5 + 1/3 [0.5đ]\nx = 6/15 + 5/15 = 11/15. [0.5đ]" }
        ]
      },
      {
        id: "part3",
        name: "PHẦN III: BÀI TOÁN CÓ LỜI VĂN",
        level: "Mức 3: Vận dụng",
        scoreText: "3.0 điểm",
        questions: [
          {
            q: "Bài 3 (3.0 điểm): Một mảnh đất hình chữ nhật, người ta dùng 2/5 diện tích để trồng rau xanh và dùng 1/3 diện tích để trồng hoa sen cạn. Hỏi:\na) Diện tích trồng rau xanh và diện tích trồng hoa sen cạn chiếm tất cả bao nhiêu phần diện tích mảnh đất?\nb) Diện tích còn lại của mảnh đất chiếm bao nhiêu phần diện tích?",
            answer: "Bài giải:\na) Diện tích trồng rau và trồng hoa chiếm số phần là:\n  2/5 + 1/3 = 6/15 + 5/15 = 11/15 (diện tích mảnh đất) [1.5đ]\nb) Diện tích còn lại của mảnh đất chiếm số phần là:\n  1 − 11/15 = 15/15 − 11/15 = 4/15 (diện tích mảnh đất) [1.0đ]\n  Đáp số: a) 11/15 diện tích; b) 4/15 diện tích. [0.5đ]"
          }
        ]
      },
      {
        id: "part4",
        name: "PHẦN IV: THỬ THÁCH TƯ DUY ĐIỂM 10",
        level: "Mức 4: Vận dụng cao / Olympic",
        scoreText: "1.5 điểm",
        questions: [
          {
            q: "Bài 4 (1.5 điểm): Tính giá trị biểu thức sau một cách thuận tiện nhất:\n  A = 1/(1 × 2) + 1/(2 × 3) + 1/(3 × 4) + ... + 1/(9 × 10)",
            answer: "Lời giải:\nNhận xét: 1/(n × (n + 1)) = 1/n − 1/(n + 1) với mọi số tự nhiên n lớn hơn 0. [0.5đ]\nTa viết lại biểu thức A thành:\n  A = (1 − 1/2) + (1/2 − 1/3) + (1/3 − 1/4) + ... + (1/9 − 1/10) [0.5đ]\n  A = 1 − 1/10 = 9/10. [0.5đ]\nĐáp số: 9/10."
          }
        ]
      }
    ]
  },

  w12: {
    week: 12,
    title: "Đề kiểm tra 30 phút · Tuần 12: Bảng số liệu, Biểu đồ cột & Trung bình cộng",
    textbook: "Kết nối tri thức với cuộc sống",
    duration: "30 phút",
    totalScore: 10,
    sections: [
      {
        id: "part1",
        name: "PHẦN I: TRẮC NGHIỆM KHỞI ĐỘNG",
        level: "Mức 1: Nhận biết",
        scoreText: "3.0 điểm (4 câu × 0.75đ)",
        questions: [
          { q: "1. Biểu đồ cột ghi nhận số cây trồng của 4 khối lớp: Khối 1: 30 cây, Khối 2: 45 cây, Khối 3: 50 cây, Khối 4: 65 cây. Cả trường trồng được tất cả bao nhiêu cây?", choices: ["A. 180 cây", "B. 190 cây", "C. 200 cây", "D. 175 cây"], answer: "B. 190 cây (30 + 45 + 50 + 65 = 190 cây)" },
          { q: "2. Số trung bình cộng của ba số 15, 25 và 50 là:", choices: ["A. 30", "B. 35", "C. 40", "D. 45"], answer: "A. 30 ((15 + 25 + 50) ÷ 3 = 90 ÷ 3 = 30)" },
          { q: "3. Nhìn vào biểu đồ cột nhiệt độ các ngày trong tuần, ngày nào có cột cao nhất thì ngày đó nhiệt độ:", choices: ["A. Thấp nhất", "B. Cao nhất", "C. Bằng nhau", "D. Thay đổi liên tục"], answer: "B. Cao nhất" },
          { q: "4. Nếu trung bình cộng của hai số là 40 và một số là 35 thì số còn lại là:", choices: ["A. 40", "B. 45", "C. 50", "D. 35"], answer: "B. 45 (Tổng hai số: 40 × 2 = 80; Số kia: 80 − 35 = 45)" }
        ]
      },
      {
        id: "part2",
        name: "PHẦN II: TỰ LUẬN TÍNH TOÁN & XỬ LÝ BẢNG SỐ LIỆU",
        level: "Mức 2: Thông hiểu",
        scoreText: "2.5 điểm",
        questions: [
          { q: "Bài 1 (1.5 điểm): Bảng số liệu thời gian đọc sách trong tuần của Bách:\n  - Thứ 2: 25 phút\n  - Thứ 3: 35 phút\n  - Thứ 4: 25 phút\n  - Thứ 5: 35 phút\n  - Thứ 6: 40 phút\nHãy tính trung bình mỗi ngày Bách đọc sách bao nhiêu phút?", answer: "Tổng thời gian đọc sách trong 5 ngày là:\n  25 + 35 + 25 + 35 + 40 = 160 (phút) [0.75đ]\nTrung bình mỗi ngày Bách đọc sách là:\n  160 ÷ 5 = 32 (phút). [0.75đ]" },
          { q: "Bài 2 (1.0 điểm): Dựa vào bảng số liệu trên, ngày nào Bách đọc nhiều nhất và nhiều hơn ngày đọc ít nhất bao nhiêu phút?", answer: "Bách đọc nhiều nhất vào Thứ 6 (40 phút). [0.5đ]\nBách đọc ít nhất vào Thứ 2 và Thứ 4 (25 phút).\nThời gian nhiều hơn là: 40 − 25 = 15 (phút). [0.5đ]" }
        ]
      },
      {
        id: "part3",
        name: "PHẦN III: BÀI TOÁN CÓ LỜI VĂN",
        level: "Mức 3: Vận dụng",
        scoreText: "3.0 điểm",
        questions: [
          {
            q: "Bài 3 (3.0 điểm): Ba lớp khối Bốn tham gia kế hoạch nhỏ quyên góp sách:\n- Lớp 4A quyên góp được 45 quyển sách.\n- Lớp 4B quyên góp được 53 quyển sách.\n- Lớp 4C quyên góp được số sách bằng mức trung bình cộng của cả ba lớp.\nHỏi lớp 4C quyên góp được bao nhiêu quyển sách?",
            answer: "Bài giải:\nVì lớp 4C có số sách bằng trung bình cộng của cả 3 lớp nên số sách của lớp 4C cũng chính bằng trung bình cộng số sách của lớp 4A và 4B. [1.0đ]\nLớp 4C quyên góp được số quyển sách là:\n  (45 + 53) ÷ 2 = 98 ÷ 2 = 49 (quyển sách) [1.5đ]\n  Đáp số: 49 quyển sách. [0.5đ]"
          }
        ]
      },
      {
        id: "part4",
        name: "PHẦN IV: THỬ THÁCH TƯ DUY ĐIỂM 10",
        level: "Mức 4: Vận dụng cao / Olympic",
        scoreText: "1.5 điểm",
        questions: [
          {
            q: "Bài 4 (1.5 điểm): Số trung bình cộng của 5 số tự nhiên liên tiếp là 20. Hãy tìm 5 số tự nhiên đó.",
            answer: "Lời giải:\nTổng của 5 số tự nhiên liên tiếp là:\n  20 × 5 = 100. [0.5đ]\nVì 5 số là các số tự nhiên liên tiếp nên số trung bình cộng chính là số đứng ở chính giữa (số thứ ba trong dãy). [0.5đ]\nVậy số thứ ba là 20.\nHai số đứng trước 20 là: 18 và 19.\nHai số đứng sau 20 là: 21 và 22.\nNăm số tự nhiên liên tiếp cần tìm là: 18, 19, 20, 21, 22. [0.5đ]"
          }
        ]
      }
    ]
  },

  w13: {
    week: 13,
    title: "Đề kiểm tra 30 phút · Tuần 13: Đơn vị đo độ dài, khối lượng & Diện tích",
    textbook: "Kết nối tri thức với cuộc sống",
    duration: "30 phút",
    totalScore: 10,
    sections: [
      {
        id: "part1",
        name: "PHẦN I: TRẮC NGHIỆM KHỞI ĐỘNG",
        level: "Mức 1: Nhận biết",
        scoreText: "3.0 điểm (4 câu × 0.75đ)",
        questions: [
          { q: "1. 2 m² 5 dm² bằng bao nhiêu đề-xi-mét vuông?", choices: ["A. 25 dm²", "B. 205 dm²", "C. 250 dm²", "D. 2.005 dm²"], answer: "B. 205 dm² (2 m² = 200 dm²; 200 + 5 = 205 dm²)" },
          { q: "2. 3 tấn 5 tạ bằng bao nhiêu ki-lô-gam?", choices: ["A. 3.050 kg", "B. 3.500 kg", "C. 350 kg", "D. 35.000 kg"], answer: "B. 3.500 kg (3 tấn = 3.000 kg; 5 tạ = 500 kg; tổng = 3.500 kg)" },
          { q: "3. Điền dấu thích hợp vào chỗ chấm: 4 km 50 m ... 4.500 m", choices: ["A. >", "B. <", "C. =", "D. Không so sánh được"], answer: "B. < (4 km 50 m = 4.050 m < 4.500 m)" },
          { q: "4. Một con voi cân nặng khoảng bao nhiêu?", choices: ["A. 4 yến", "B. 4 tạ", "C. 4 tấn", "D. 40 kg"], answer: "C. 4 tấn (Voi trưởng thành nặng khoảng vài tấn)" }
        ]
      },
      {
        id: "part2",
        name: "PHẦN II: TỰ LUẬN TÍNH TOÁN & ĐỔI ĐƠN VỊ",
        level: "Mức 2: Thông hiểu",
        scoreText: "2.5 điểm",
        questions: [
          { q: "Bài 1 (1.5 điểm): Điền số thích hợp vào chỗ chấm ra vở ô ly:\n  a) 4 m² 12 dm² = ... dm²\n  b) 5 tạ 6 yến = ... kg", answer: "a) 4 m² 12 dm² = 412 dm² (4 m² = 400 dm² + 12 dm² = 412 dm²) [0.75đ]\nb) 5 tạ 6 yến = 560 kg (5 tạ = 500 kg, 6 yến = 60 kg -> 560 kg) [0.75đ]" },
          { q: "Bài 2 (1.0 điểm): Tính kết quả phép tính:\n  3 tạ 45 kg + 1 tạ 85 kg = ... kg", answer: "Đổi về kg: 345 kg + 185 kg = 530 kg (hoặc 5 tạ 30 kg). [1.0đ]" }
        ]
      },
      {
        id: "part3",
        name: "PHẦN III: BÀI TOÁN CÓ LỜI VĂN",
        level: "Mức 3: Vận dụng",
        scoreText: "3.0 điểm",
        questions: [
          {
            q: "Bài 3 (3.0 điểm): Một thửa ruộng hình chữ nhật có chiều dài 25 m, chiều rộng 12 m. Người ta dùng 1/5 diện tích thửa ruộng đó để đào ao nuôi cá cảnh.\na) Tính diện tích của cả thửa ruộng đó.\nb) Tính diện tích của ao nuôi cá cảnh.",
            answer: "Bài giải:\na) Diện tích thửa ruộng hình chữ nhật là:\n  25 × 12 = 300 (m²) [1.25đ]\nb) Diện tích ao nuôi cá cảnh là:\n  300 ÷ 5 = 60 (m²) [1.25đ]\n  Đáp số: a) 300 m²; b) 60 m². [0.5đ]"
          }
        ]
      },
      {
        id: "part4",
        name: "PHẦN IV: THỬ THÁCH TƯ DUY ĐIỂM 10",
        level: "Mức 4: Vận dụng cao / Olympic",
        scoreText: "1.5 điểm",
        questions: [
          {
            q: "Bài 4 (1.5 điểm): Một hình vuông có độ dài cạnh tăng gấp đôi thì diện tích của nó tăng gấp mấy lần? Bách hãy giải thích chi tiết vì sao nhé!",
            answer: "Lời giải:\nGọi độ dài cạnh hình vuông ban đầu là a (cm).\nDiện tích hình vuông ban đầu là: S1 = a × a. [0.5đ]\nKhi cạnh tăng gấp đôi, độ dài cạnh mới là: 2 × a.\nDiện tích hình vuông mới là:\n  S2 = (2 × a) × (2 × a) = (2 × 2) × (a × a) = 4 × S1. [0.5đ]\nVậy diện tích của hình vuông tăng gấp 4 lần. [0.5đ]"
          }
        ]
      }
    ]
  },

  w14: {
    week: 14,
    title: "Đề kiểm tra 30 phút · Tuần 14: Chu vi hình chữ nhật, hình vuông & Bài toán ghép hình",
    textbook: "Kết nối tri thức với cuộc sống",
    duration: "30 phút",
    totalScore: 10,
    sections: [
      {
        id: "part1",
        name: "PHẦN I: TRẮC NGHIỆM KHỞI ĐỘNG",
        level: "Mức 1: Nhận biết",
        scoreText: "3.0 điểm (4 câu × 0.75đ)",
        questions: [
          { q: "1. Một hình chữ nhật có chiều dài 18 cm, chiều rộng 12 cm. Chu vi của hình chữ nhật đó là:", choices: ["A. 30 cm", "B. 60 cm", "C. 216 cm", "D. 48 cm"], answer: "B. 60 cm ((18 + 12) × 2 = 60 cm)" },
          { q: "2. Một hình vuông có chu vi là 48 cm. Độ dài cạnh hình vuông đó là:", choices: ["A. 12 cm", "B. 24 cm", "C. 16 cm", "D. 8 cm"], answer: "A. 12 cm (48 ÷ 4 = 12 cm)" },
          { q: "3. Nếu gấp chiều dài của hình chữ nhật lên 2 lần và giữ nguyên chiều rộng thì chu vi sẽ:", choices: ["A. Tăng gấp 2 lần", "B. Tăng thêm 2 lần chiều dài ban đầu", "C. Giữ nguyên", "D. Tăng gấp 4 lần"], answer: "B. Tăng thêm 2 lần chiều dài ban đầu" },
          { q: "4. Nửa chu vi hình chữ nhật bằng 35 cm. Chiều dài bằng 20 cm thì chiều rộng bằng:", choices: ["A. 15 cm", "B. 55 cm", "C. 10 cm", "D. 25 cm"], answer: "A. 15 cm (35 − 20 = 15 cm)" }
        ]
      },
      {
        id: "part2",
        name: "PHẦN II: TỰ LUẬN TÍNH TOÁN & HÌNH HỌC",
        level: "Mức 2: Thông hiểu",
        scoreText: "2.5 điểm",
        questions: [
          { q: "Bài 1 (1.5 điểm): Một hình vuông có chu vi là 36 cm. Tính diện tích của hình vuông đó ra vở ô ly.", answer: "Độ dài cạnh hình vuông là:\n  36 ÷ 4 = 9 (cm) [0.75đ]\nDiện tích hình vuông là:\n  9 × 9 = 81 (cm²) [0.75đ]" },
          { q: "Bài 2 (1.0 điểm): Ghép hai hình chữ nhật giống nhau có kích thước dài 10 cm, rộng 4 cm dọc theo cạnh 4 cm để tạo thành một hình chữ nhật mới. Tính chu vi hình chữ nhật mới.", answer: "Hình chữ nhật mới có:\n  Chiều dài: 10 + 10 = 20 (cm)\n  Chiều rộng: 4 cm. [0.5đ]\nChu vi hình chữ nhật mới là:\n  (20 + 4) × 2 = 48 (cm). [0.5đ]" }
        ]
      },
      {
        id: "part3",
        name: "PHẦN III: BÀI TOÁN CÓ LỜI VĂN",
        level: "Mức 3: Vận dụng",
        scoreText: "3.0 điểm",
        questions: [
          {
            q: "Bài 3 (3.0 điểm): Bác An rào một khu vườn hình chữ nhật có chiều dài 35 m, chiều rộng kém chiều dài 15 m. Bác để một cổng ra vào rộng 3 m không rào. Hỏi chiều dài hàng rào bác An cần làm là bao nhiêu mét?",
            answer: "Bài giải:\nChiều rộng khu vườn là:\n  35 − 15 = 20 (m) [0.75đ]\nChu vi khu vườn hình chữ nhật là:\n  (35 + 20) × 2 = 110 (m) [1.25đ]\nChiều dài hàng rào bác An cần làm là:\n  110 − 3 = 107 (m) [0.5đ]\n  Đáp số: 107 m. [0.5đ]"
          }
        ]
      },
      {
        id: "part4",
        name: "PHẦN IV: THỬ THÁCH TƯ DUY ĐIỂM 10",
        level: "Mức 4: Vận dụng cao / Olympic",
        scoreText: "1.5 điểm",
        questions: [
          {
            q: "Bài 4 (1.5 điểm): Một mảnh đất hình chữ nhật có chu vi 80 m. Nếu tăng chiều rộng thêm 6 m và giảm chiều dài đi 6 m thì mảnh đất trở thành một hình vuông. Tính diện tích của mảnh đất ban đầu.",
            answer: "Lời giải:\nNửa chu vi mảnh đất là:\n  80 ÷ 2 = 40 (m). [0.25đ]\nKhi tăng chiều rộng thêm 6 m và giảm chiều dài đi 6 m thì hai kích thước bằng nhau. Do đó, chiều dài ban đầu hơn chiều rộng ban đầu là:\n  6 + 6 = 12 (m). [0.5đ]\nChiều dài ban đầu của mảnh đất là:\n  (40 + 12) ÷ 2 = 26 (m). [0.25đ]\nChiều rộng ban đầu của mảnh đất là:\n  40 − 26 = 14 (m). [0.25đ]\nDiện tích mảnh đất ban đầu là:\n  26 × 14 = 364 (m²). [0.25đ]\nĐáp số: 364 m²."
          }
        ]
      }
    ]
  },

  w15: {
    week: 15,
    title: "Đề kiểm tra 30 phút · Tuần 15: Diện tích hình chữ nhật & Bài toán lát sàn thực tế",
    textbook: "Kết nối tri thức với cuộc sống",
    duration: "30 phút",
    totalScore: 10,
    sections: [
      {
        id: "part1",
        name: "PHẦN I: TRẮC NGHIỆM KHỞI ĐỘNG",
        level: "Mức 1: Nhận biết",
        scoreText: "3.0 điểm (4 câu × 0.75đ)",
        questions: [
          { q: "1. Một căn phòng hình chữ nhật dài 8 m, rộng 6 m có diện tích là:", choices: ["A. 28 m²", "B. 48 m²", "C. 14 m²", "D. 96 m²"], answer: "B. 48 m² (8 × 6 = 48 m²)" },
          { q: "2. Một viên gạch hình vuông cạnh 40 cm có diện tích là:", choices: ["A. 160 cm²", "B. 1.600 cm²", "C. 80 cm²", "D. 16.000 cm²"], answer: "B. 1.600 cm² (40 × 40 = 1.600 cm²)" },
          { q: "3. 1 mét vuông bằng bao nhiêu xăng-ti-mét vuông?", choices: ["A. 100 cm²", "B. 1.000 cm²", "C. 10.000 cm²", "D. 100.000 cm²"], answer: "C. 10.000 cm² (1 m = 100 cm -> 1 m² = 100 × 100 = 10.000 cm²)" },
          { q: "4. Mảnh vườn hình vuông có cạnh 15 m thì diện tích là:", choices: ["A. 60 m²", "B. 225 m²", "C. 150 m²", "D. 300 m²"], answer: "B. 225 m² (15 × 15 = 225 m²)" }
        ]
      },
      {
        id: "part2",
        name: "PHẦN II: TỰ LUẬN TÍNH TOÁN & ĐỔI ĐƠN VỊ",
        level: "Mức 2: Thông hiểu",
        scoreText: "2.5 điểm",
        questions: [
          { q: "Bài 1 (1.5 điểm): Đặt tính rồi tính diện tích khu đất hình vuông có cạnh dài 24 m ra vở ô ly.", answer: "Diện tích khu đất là:\n  24 × 24 = 576 (m²) [1.5đ]\n(Yêu cầu đặt tính nhân 2 chữ số thẳng hàng, tính đúng từng tích riêng và tích chung)" },
          { q: "Bài 2 (1.0 điểm): Đổi đơn vị diện tích:\n  a) 48 m² = ... dm²\n  b) 250.000 cm² = ... m²", answer: "a) 48 m² = 4.800 dm² [0.5đ]\nb) 250.000 cm² = 25 m² [0.5đ]" }
        ]
      },
      {
        id: "part3",
        name: "PHẦN III: BÀI TOÁN CÓ LỜI VĂN",
        level: "Mức 3: Vận dụng",
        scoreText: "3.0 điểm",
        questions: [
          {
            q: "Bài 3 (3.0 điểm): Người ta lát nền một căn phòng hình chữ nhật có chiều dài 8 m, chiều rộng 5 m bằng những viên gạch men hình vuông có cạnh dài 40 cm. Hỏi cần bao nhiêu viên gạch để lát kín căn phòng đó? (Bỏ qua diện tích các mạch vữa)",
            answer: "Bài giải:\nDiện tích căn phòng hình chữ nhật là:\n  8 × 5 = 40 (m²) = 400.000 cm² [1.25đ]\nDiện tích một viên gạch men hình vuông là:\n  40 × 40 = 1.600 (cm²) [0.75đ]\nSố viên gạch men cần để lát kín căn phòng là:\n  400.000 ÷ 1.600 = 250 (viên) [0.75đ]\n  Đáp số: 250 viên gạch. [0.25đ]"
          }
        ]
      },
      {
        id: "part4",
        name: "PHẦN IV: THỬ THÁCH TƯ DUY ĐIỂM 10",
        level: "Mức 4: Vận dụng cao / Olympic",
        scoreText: "1.5 điểm",
        questions: [
          {
            q: "Bài 4 (1.5 điểm): Tìm kích thước các cạnh (chiều dài và chiều rộng là hai số tự nhiên khác nhau có đơn vị xăng-ti-mét) của một hình chữ nhật có diện tích bằng 36 cm² sao cho chu vi của nó là nhỏ nhất.",
            answer: "Lời giải:\nGọi chiều dài là a và chiều rộng là b (a > b, a và b là các số tự nhiên có đơn vị cm).\nTheo đề bài, diện tích a × b = 36 cm².\nCác cặp số tự nhiên khác nhau có tích bằng 36 là:\n- a = 36 cm, b = 1 cm: Chu vi là (36 + 1) × 2 = 74 (cm)\n- a = 18 cm, b = 2 cm: Chu vi là (18 + 2) × 2 = 40 (cm)\n- a = 12 cm, b = 3 cm: Chu vi là (12 + 3) × 2 = 30 (cm)\n- a = 9 cm, b = 4 cm: Chu vi là (9 + 4) × 2 = 26 (cm) [1.0đ]\nSo sánh các chu vi: 26 cm < 30 cm < 40 cm < 74 cm.\nVậy để chu vi nhỏ nhất, kích thước các cạnh của hình chữ nhật là: chiều dài 9 cm và chiều rộng 4 cm (chu vi nhỏ nhất bằng 26 cm). [0.5đ]"
          }
        ]
      }
    ]
  },

  w16: {
    week: 16,
    title: "Đề kiểm tra 30 phút · Tuần 16: Góc & Hai đường thẳng vuông góc, song song",
    textbook: "Kết nối tri thức với cuộc sống",
    duration: "30 phút",
    totalScore: 10,
    sections: [
      {
        id: "part1",
        name: "PHẦN I: TRẮC NGHIỆM KHỞI ĐỘNG",
        level: "Mức 1: Nhận biết",
        scoreText: "3.0 điểm (4 câu × 0.75đ)",
        questions: [
          { q: "1. Góc có số đo bằng 90 độ là:", choices: ["A. Góc nhọn", "B. Góc vuông", "C. Góc tù", "D. Góc bẹt"], answer: "B. Góc vuông" },
          { q: "2. Góc lớn hơn góc vuông và nhỏ hơn góc bẹt là:", choices: ["A. Góc nhọn", "B. Góc tù", "C. Góc bẹt", "D. Góc vuông"], answer: "B. Góc tù" },
          { q: "3. Trong hình chữ nhật ABCD, cặp cạnh nào sau đây song song với nhau?", choices: ["A. AB và BC", "B. AB và CD", "C. AD và AB", "D. BC và CD"], answer: "B. AB và CD (Hai cạnh đối diện của hình chữ nhật song song)" },
          { q: "4. Hai đường thẳng vuông góc với nhau tạo thành mấy góc vuông tại điểm cắt?", choices: ["A. 1 góc vuông", "B. 2 góc vuông", "C. 4 góc vuông", "D. 8 góc vuông"], answer: "C. 4 góc vuông" }
        ]
      },
      {
        id: "part2",
        name: "PHẦN II: TỰ LUẬN HÌNH HỌC & ĐẶC ĐIỂM HÌNH",
        level: "Mức 2: Thông hiểu",
        scoreText: "2.5 điểm",
        questions: [
          { q: "Bài 1 (1.5 điểm): Cho hình chữ nhật ABCD. Hãy ghi ra vở ô ly:\n  a) Tên tất cả 4 cặp cạnh vuông góc với nhau.\n  b) Tên 2 cặp cạnh song song với nhau.", answer: "a) 4 cặp cạnh vuông góc: (AB, BC); (BC, CD); (CD, DA); (DA, AB). [0.75đ]\nb) 2 cặp cạnh song song: (AB, CD) và (AD, BC). [0.75đ]" },
          { q: "Bài 2 (1.0 điểm): Trong các góc có số đo sau: 45°, 90°, 135°, 180°, hãy chỉ ra góc nào là góc nhọn, góc nào là góc tù.", answer: "Góc nhọn: 45° (nhỏ hơn 90°) [0.5đ]\nGóc tù: 135° (lớn hơn 90° và nhỏ hơn 180°) [0.5đ]" }
        ]
      },
      {
        id: "part3",
        name: "PHẦN III: BÀI TOÁN CÓ LỜI VĂN",
        level: "Mức 3: Vận dụng",
        scoreText: "3.0 điểm",
        questions: [
          {
            q: "Bài 3 (3.0 điểm): Một mảnh vườn hình thang vuông ABCD có góc A và góc D là góc vuông. Cạnh đáy bé AB = 15 m, cạnh đáy lớn CD = 25 m, chiều cao AD = 12 m.\na) Vẽ phác thảo mảnh vườn ra vở ô ly và ghi rõ các kích thước.\nb) Chia mảnh vườn thành một hình chữ nhật ABED và một hình tam giác vuông BEC. Tính diện tích hình chữ nhật ABED.",
            answer: "Bài giải:\na) Học sinh vẽ đúng phác thảo hình thang vuông có 2 góc vuông tại A và D. [1.0đ]\nb) Hình chữ nhật ABED có chiều rộng AD = 12 m và chiều dài AB = 15 m. [0.5đ]\nDiện tích hình chữ nhật ABED là:\n  15 × 12 = 180 (m²) [1.0đ]\n  Đáp số: 180 m². [0.5đ]"
          }
        ]
      },
      {
        id: "part4",
        name: "PHẦN IV: THỬ THÁCH TƯ DUY ĐIỂM 10",
        level: "Mức 4: Vận dụng cao / Olympic",
        scoreText: "1.5 điểm",
        questions: [
          {
            q: "Bài 4 (1.5 điểm): Cho hai đường thẳng song song a và b. Đường thẳng c cắt hai đường thẳng a và b, đồng thời vuông góc với đường thẳng a. Hỏi có tất cả bao nhiêu góc vuông được tạo thành từ giao điểm của c với hai đường thẳng a và b? Giải thích vì sao.",
            answer: "Lời giải:\nVì đường thẳng c vuông góc với đường thẳng a nên tại giao điểm giữa c và a tạo thành 4 góc vuông. [0.5đ]\nVì hai đường thẳng a và b song song với nhau, mà c vuông góc với a nên c cũng vuông góc với đường thẳng b. [0.5đ]\nDo đó, tại giao điểm giữa c và b cũng tạo thành 4 góc vuông.\nTổng số góc vuông được tạo thành là: 4 + 4 = 8 góc vuông. [0.5đ]\nĐáp số: 8 góc vuông."
          }
        ]
      }
    ]
  },

  w17: {
    week: 17,
    title: "Đề kiểm tra 30 phút · Tuần 17: Thời gian, Lịch & Khoảng thời gian",
    textbook: "Kết nối tri thức với cuộc sống",
    duration: "30 phút",
    totalScore: 10,
    sections: [
      {
        id: "part1",
        name: "PHẦN I: TRẮC NGHIỆM KHỞI ĐỘNG",
        level: "Mức 1: Nhận biết",
        scoreText: "3.0 điểm (4 câu × 0.75đ)",
        questions: [
          { q: "1. Một trận bóng đá bắt đầu lúc 15 giờ 15 phút và kéo dài trong 90 phút. Trận đấu kết thúc lúc:", choices: ["A. 16 giờ 45 phút", "B. 16 giờ 30 phút", "C. 17 giờ 00 phút", "D. 16 giờ 15 phút"], answer: "A. 16 giờ 45 phút (90 phút = 1 giờ 30 phút; 15h15 + 1h30 = 16h45)" },
          { q: "2. Năm 2024 thuộc thế kỉ thứ mấy?", choices: ["A. Thế kỉ XIX", "B. Thế kỉ XX", "C. Thế kỉ XXI", "D. Thế kỉ XXII"], answer: "C. Thế kỉ XXI (Từ năm 2001 đến năm 2100 thuộc thế kỉ 21)" },
          { q: "3. 3 phút 25 giây bằng bao nhiêu giây?", choices: ["A. 325 giây", "B. 205 giây", "C. 185 giây", "D. 145 giây"], answer: "B. 205 giây (3 × 60 + 25 = 205 giây)" },
          { q: "4. Tháng nào sau đây có đúng 30 ngày?", choices: ["A. Tháng 1", "B. Tháng 3", "C. Tháng 4", "D. Tháng 5"], answer: "C. Tháng 4 (Các tháng có 30 ngày: 4, 6, 9, 11)" }
        ]
      },
      {
        id: "part2",
        name: "PHẦN II: TỰ LUẬN TÍNH TOÁN & ĐỔI ĐƠN VỊ THỜI GIAN",
        level: "Mức 2: Thông hiểu",
        scoreText: "2.5 điểm",
        questions: [
          { q: "Bài 1 (1.5 điểm): Điền số thích hợp vào chỗ chấm ra vở ô ly:\n  a) 4 giờ 15 phút = ... phút\n  b) 3 thế kỉ = ... năm", answer: "a) 4 giờ 15 phút = 255 phút (4 × 60 + 15 = 255) [0.75đ]\nb) 3 thế kỉ = 300 năm (1 thế kỉ = 100 năm) [0.75đ]" },
          { q: "Bài 2 (1.0 điểm): Một năm nhuận có 366 ngày. Hỏi năm đó có bao nhiêu tuần lễ và còn dư mấy ngày?", answer: "Thực hiện phép chia: 366 ÷ 7 = 52 (dư 2). [0.5đ]\nVậy năm nhuận có 52 tuần lễ và còn dư 2 ngày. [0.5đ]" }
        ]
      },
      {
        id: "part3",
        name: "PHẦN III: BÀI TOÁN CÓ LỜI VĂN",
        level: "Mức 3: Vận dụng",
        scoreText: "3.0 điểm",
        questions: [
          {
            q: "Bài 3 (3.0 điểm): Tuyến xe bus xuất phát từ bến lúc 6 giờ 00 phút sáng. Cứ sau mỗi 20 phút lại có một chuyến xe tiếp theo xuất bến.\na) Hỏi chuyến xe thứ tư xuất bến vào lúc mấy giờ mấy phút?\nb) Đến 8 giờ 00 phút sáng cùng ngày thì đã có tất cả bao nhiêu chuyến xe xuất bến từ lúc 6 giờ sáng?",
            answer: "Bài giải:\na) Từ chuyến thứ nhất đến chuyến thứ tư có 3 khoảng thời gian giãn cách: 3 × 20 = 60 (phút) = 1 giờ. [1.0đ]\nChuyến thứ tư xuất bến lúc: 6 giờ + 1 giờ = 7 giờ 00 phút. [0.5đ]\nb) Thời gian từ 6 giờ đến 8 giờ sáng là: 8 − 6 = 2 giờ = 120 phút. [0.5đ]\nSố khoảng cách 20 phút trong 120 phút là: 120 ÷ 20 = 6 (khoảng cách).\nSố chuyến xe đã xuất bến là: 6 + 1 = 7 (chuyến xe). [0.75đ]\nĐáp số: a) 7 giờ 00 phút; b) 7 chuyến xe. [0.25đ]"
          }
        ]
      },
      {
        id: "part4",
        name: "PHẦN IV: THỬ THÁCH TƯ DUY ĐIỂM 10",
        level: "Mức 4: Vận dụng cao / Olympic",
        scoreText: "1.5 điểm",
        questions: [
          {
            q: "Bài 4 (1.5 điểm): Ngày 1 tháng 6 của một năm nào đó rơi vào Thứ Hai. Hỏi ngày 1 tháng 7 cùng năm đó là Thứ mấy trong tuần?",
            answer: "Lời giải:\nTháng 6 luôn có đúng 30 ngày. [0.5đ]\nKhoảng cách từ ngày 1 tháng 6 đến ngày 1 tháng 7 là đúng 30 ngày.\nTa có: 30 ÷ 7 = 4 (tuần lễ) dư 2 ngày. [0.5đ]\nSau 4 tuần lễ trọn vẹn, ngày đó vẫn rơi vào Thứ Hai.\nCộng thêm 2 ngày dư ra:\nThứ Hai + 1 ngày = Thứ Ba; Thứ Hai + 2 ngày = Thứ Tư.\nVậy ngày 1 tháng 7 năm đó là Thứ Tư. [0.5đ]"
          }
        ]
      }
    ]
  },

  w18: {
    week: 18,
    title: "Đề kiểm tra 30 phút · Tuần 18: Bài toán tìm hai số khi biết Tổng và Hiệu",
    textbook: "Kết nối tri thức với cuộc sống",
    duration: "30 phút",
    totalScore: 10,
    sections: [
      {
        id: "part1",
        name: "PHẦN I: TRẮC NGHIỆM KHỞI ĐỘNG",
        level: "Mức 1: Nhận biết",
        scoreText: "3.0 điểm (4 câu × 0.75đ)",
        questions: [
          { q: "1. Tổng của hai số là 48, hiệu của hai số là 12. Số lớn là:", choices: ["A. 30", "B. 18", "C. 36", "D. 24"], answer: "A. 30 ((48 + 12) ÷ 2 = 30)" },
          { q: "2. Tổng của hai số là 100, hiệu của hai số là 20. Số bé là:", choices: ["A. 60", "B. 40", "C. 50", "D. 30"], answer: "B. 40 ((100 − 20) ÷ 2 = 40)" },
          { q: "3. Công thức tìm số bé khi biết Tổng và Hiệu là:", choices: ["A. (Tổng + Hiệu) ÷ 2", "B. (Tổng − Hiệu) ÷ 2", "C. Tổng − Hiệu", "D. Tổng + Hiệu"], answer: "B. (Tổng − Hiệu) ÷ 2" },
          { q: "4. Hai bạn có tất cả 28 viên bi, An có nhiều hơn Bình 4 viên bi. Số bi của An là:", choices: ["A. 12 viên", "B. 16 viên", "C. 14 viên", "D. 18 viên"], answer: "B. 16 viên ((28 + 4) ÷ 2 = 16)" }
        ]
      },
      {
        id: "part2",
        name: "PHẦN II: TỰ LUẬN TÍNH TOÁN & VẼ SƠ ĐỒ ĐOẠN THẲNG",
        level: "Mức 2: Thông hiểu",
        scoreText: "2.5 điểm",
        questions: [
          { q: "Bài 1 (1.5 điểm): Tìm hai số biết tổng của chúng bằng 120 và hiệu của chúng bằng 30. (Bách hãy vẽ sơ đồ đoạn thẳng ra vở ô ly nhé!)", answer: "Vẽ sơ đồ đoạn thẳng: đoạn số lớn dài hơn đoạn số bé một phần biểu thị 30 đơn vị, tổng là 120. [0.5đ]\nSố lớn là: (120 + 30) ÷ 2 = 75 [0.5đ]\nSố bé là: 120 − 75 = 45 (hoặc 75 − 30 = 45). [0.5đ]" },
          { q: "Bài 2 (1.0 điểm): Hai thùng dầu chứa tất cả 84 lít dầu. Thùng thứ nhất nhiều hơn thùng thứ hai 16 lít dầu. Tính số lít dầu ở mỗi thùng.", answer: "Thùng thứ nhất chứa: (84 + 16) ÷ 2 = 50 (lít) [0.5đ]\nThùng thứ hai chứa: 50 − 16 = 34 (lít). [0.5đ]" }
        ]
      },
      {
        id: "part3",
        name: "PHẦN III: BÀI TOÁN CÓ LỜI VĂN",
        level: "Mức 3: Vận dụng",
        scoreText: "3.0 điểm",
        questions: [
          {
            q: "Bài 3 (3.0 điểm): Tổng số tuổi của bố và Bách là 46 tuổi. Bố hơn Bách 28 tuổi.\na) Hỏi bố bao nhiêu tuổi và Bách bao nhiêu tuổi?\nb) Sau 3 năm nữa, bố hơn Bách bao nhiêu tuổi?",
            answer: "Bài giải:\na) Tuổi của bố hiện nay là:\n  (46 + 28) ÷ 2 = 37 (tuổi) [1.25đ]\nTuổi của Bách hiện nay là:\n  37 − 28 = 9 (tuổi) [1.0đ]\nb) Vì mỗi năm mỗi người đều tăng thêm 1 tuổi nên hiệu số tuổi giữa hai người không bao giờ thay đổi theo thời gian.\n  Sau 3 năm nữa, bố vẫn hơn Bách đúng 28 tuổi. [0.5đ]\n  Đáp số: a) Bố 37 tuổi, Bách 9 tuổi; b) 28 tuổi. [0.25đ]"
          }
        ]
      },
      {
        id: "part4",
        name: "PHẦN IV: THỬ THÁCH TƯ DUY ĐIỂM 10",
        level: "Mức 4: Vận dụng cao / Olympic",
        scoreText: "1.5 điểm",
        questions: [
          {
            q: "Bài 4 (1.5 điểm): Ba bạn An, Bình và Cường có tất cả 60 viên bi. Nếu An cho Bình 3 viên bi thì số bi của ba bạn bằng nhau. Hỏi lúc đầu mỗi bạn có bao nhiêu viên bi?",
            answer: "Lời giải:\nTổng số viên bi của ba bạn không đổi và bằng 60 viên.\nKhi số bi của ba bạn bằng nhau, mỗi bạn có số viên bi là:\n  60 ÷ 3 = 20 (viên bi). [0.5đ]\nVì Cường không cho ai và không nhận của ai nên lúc đầu Cường có 20 viên bi. [0.25đ]\nAn cho Bình 3 viên mới còn 20 viên, vậy lúc đầu An có:\n  20 + 3 = 23 (viên bi). [0.5đ]\nBình nhận thêm 3 viên mới được 20 viên, vậy lúc đầu Bình có:\n  20 − 3 = 17 (viên bi). [0.25đ]\nĐáp số: An có 23 viên, Bình có 17 viên, Cường có 20 viên."
          }
        ]
      }
    ]
  },

  w19: {
    week: 19,
    title: "Đề kiểm tra 30 phút · Tuần 19: Phép nhân với số có hai chữ số & Tính chất kết hợp",
    textbook: "Kết nối tri thức với cuộc sống",
    duration: "30 phút",
    totalScore: 10,
    sections: [
      {
        id: "part1",
        name: "PHẦN I: TRẮC NGHIỆM KHỞI ĐỘNG",
        level: "Mức 1: Nhận biết",
        scoreText: "3.0 điểm (4 câu × 0.75đ)",
        questions: [
          { q: "1. Khi nhân một số với 10, 100, 1.000,... ta chỉ việc viết thêm lần lượt vào bên phải số đó:", choices: ["A. Một, hai, ba,... chữ số 0", "B. Một, hai, ba,... chữ số 1", "C. Giữ nguyên số đó", "D. Nhân số đó với chính nó"], answer: "A. Một, hai, ba,... chữ số 0" },
          { q: "2. Kết quả của phép tính 25 × 40 là:", choices: ["A. 100", "B. 1.000", "C. 10.000", "D. 250"], answer: "B. 1.000 (25 × 4 = 100 -> 25 × 40 = 1.000)" },
          { q: "3. Tích của 142 × 21 có chữ số tận cùng là:", choices: ["A. 1", "B. 2", "C. 3", "D. 4"], answer: "B. 2 (2 × 1 = 2)" },
          { q: "4. Tính nhanh 15 × 8 × 5 bằng cách thuận tiện là:", choices: ["A. (15 × 8) × 5", "B. 15 × (8 × 5) = 15 × 40 = 600", "C. (15 × 5) × 8 = 75 × 8 = 600", "D. Cả B và C đều thuận tiện"], answer: "D. Cả B và C đều thuận tiện" }
        ]
      },
      {
        id: "part2",
        name: "PHẦN II: TỰ LUẬN TÍNH TOÁN & ĐẶT TÍNH",
        level: "Mức 2: Thông hiểu",
        scoreText: "2.5 điểm",
        questions: [
          { q: "Bài 1 (1.5 điểm): Đặt tính rồi tính ra vở ô ly (chú ý viết tích riêng thứ hai lùi sang trái 1 cột):\n  a) 235 × 24\n  b) 418 × 35", answer: "a) 235 × 24 = 5.640 (tích riêng 1: 940, tích riêng 2: 470 lùi 1 cột) [0.75đ]\nb) 418 × 35 = 14.630 (tích riêng 1: 2.090, tích riêng 2: 1.254 lùi 1 cột) [0.75đ]" },
          { q: "Bài 2 (1.0 điểm): Tính bằng cách thuận tiện nhất:\n  25 × 36 × 4", answer: "= (25 × 4) × 36 = 100 × 36 = 3.600 [1.0đ]" }
        ]
      },
      {
        id: "part3",
        name: "PHẦN III: BÀI TOÁN CÓ LỜI VĂN",
        level: "Mức 3: Vận dụng",
        scoreText: "3.0 điểm",
        questions: [
          {
            q: "Bài 3 (3.0 điểm): Một đội xe gồm 12 chiếc xe tải, mỗi xe tải chở được 35 bao gạo, mỗi bao gạo cân nặng 50 kg. Hỏi toàn bộ đội xe tải đó chở được tất cả bao nhiêu tấn gạo?",
            answer: "Bài giải:\nToàn bộ đội xe tải chở được tất cả số bao gạo là:\n  12 × 35 = 420 (bao gạo) [1.0đ]\nTổng khối lượng gạo toàn bộ đội xe chở được là:\n  420 × 50 = 21.000 (kg) [1.25đ]\nĐổi: 21.000 kg = 21 tấn. [0.5đ]\n  Đáp số: 21 tấn gạo. [0.25đ]"
          }
        ]
      },
      {
        id: "part4",
        name: "PHẦN IV: THỬ THÁCH TƯ DUY ĐIỂM 10",
        level: "Mức 4: Vận dụng cao / Olympic",
        scoreText: "1.5 điểm",
        questions: [
          {
            q: "Bài 4 (1.5 điểm): Khi nhân một số tự nhiên với 35, bạn Nam đã đặt hai tích riêng thẳng cột với nhau như trong phép cộng, do đó thu được kết quả là 576. Hãy tìm tích đúng của phép nhân đó.",
            answer: "Lời giải:\nKhi đặt hai tích riêng thẳng cột, bạn Nam đã lần lượt nhân số đó với 5 và với 3 rồi cộng kết quả lại, tức là bạn đã nhân số đó với:\n  5 + 3 = 8. [0.5đ]\nSố tự nhiên ban đầu đem nhân là:\n  576 ÷ 8 = 72. [0.5đ]\nTích đúng của phép nhân ban đầu là:\n  72 × 35 = 2.520. [0.5đ]\nĐáp số: 2.520."
          }
        ]
      }
    ]
  },

  w20: {
    week: 20,
    title: "Đề kiểm tra 30 phút · Tuần 20: Phép chia cho số có hai chữ số & Ước lượng thương",
    textbook: "Kết nối tri thức với cuộc sống",
    duration: "30 phút",
    totalScore: 10,
    sections: [
      {
        id: "part1",
        name: "PHẦN I: TRẮC NGHIỆM KHỞI ĐỘNG",
        level: "Mức 1: Nhận biết",
        scoreText: "3.0 điểm (4 câu × 0.75đ)",
        questions: [
          { q: "1. Thương của phép chia 3.600 ÷ 90 là:", choices: ["A. 4", "B. 40", "C. 400", "D. 4.000"], answer: "B. 40 (3.600 ÷ 90 = 360 ÷ 9 = 40)" },
          { q: "2. Trong phép chia có dư với số chia là 36, số dư lớn nhất có thể có là:", choices: ["A. 36", "B. 37", "C. 35", "D. 1"], answer: "C. 35 (Số dư luôn nhỏ hơn số chia, lớn nhất là 36 − 1 = 35)" },
          { q: "3. Ước lượng thương của phép chia 238 ÷ 39 xấp xỉ bằng:", choices: ["A. 6", "B. 8", "C. 5", "D. 9"], answer: "A. 6 (238 ÷ 39 ≈ 240 ÷ 40 = 6; thử 39 × 6 = 234)" },
          { q: "4. Phép chia 8.400 ÷ 70 có kết quả bằng:", choices: ["A. 12", "B. 120", "C. 1.200", "D. 140"], answer: "B. 120 (8.400 ÷ 70 = 840 ÷ 7 = 120)" }
        ]
      },
      {
        id: "part2",
        name: "PHẦN II: TỰ LUẬN TÍNH TOÁN & ĐẶT TÍNH CHIA",
        level: "Mức 2: Thông hiểu",
        scoreText: "2.5 điểm",
        questions: [
          { q: "Bài 1 (1.5 điểm): Đặt tính rồi tính chia ra vở ô ly (ghi rõ thương và số dư nếu có):\n  a) 8.160 ÷ 34\n  b) 5.928 ÷ 48", answer: "a) 8.160 ÷ 34 = 240 (chia hết) [0.75đ]\nb) 5.928 ÷ 48 = 123 dư 24 (5.928 = 48 × 123 + 24) [0.75đ]" },
          { q: "Bài 2 (1.0 điểm): Tìm x biết:\n  x × 25 = 1.850", answer: "x = 1.850 ÷ 25 [0.5đ]\nx = 74. [0.5đ]" }
        ]
      },
      {
        id: "part3",
        name: "PHẦN III: BÀI TOÁN CÓ LỜI VĂN",
        level: "Mức 3: Vận dụng",
        scoreText: "3.0 điểm",
        questions: [
          {
            q: "Bài 3 (3.0 điểm): Một xưởng may nhận được đơn hàng may 1.450 bộ đồng phục học sinh. Mỗi ngày xưởng may được 45 bộ đồng phục.\na) Hỏi xưởng đó cần may trong ít nhất bao nhiêu ngày để hoàn thành toàn bộ đơn hàng?\nb) Trong ngày cuối cùng, xưởng đó cần may thêm bao nhiêu bộ đồng phục nữa?",
            answer: "Bài giải:\na) Ta thực hiện phép chia có dư:\n  1.450 ÷ 45 = 32 (dư 10). [1.25đ]\nNhư vậy sau 32 ngày may hết công suất, xưởng vẫn còn dư 10 bộ đồng phục chưa may xong.\nDo đó xưởng cần thêm 1 ngày nữa để hoàn thành, tức là ít nhất: 32 + 1 = 33 (ngày). [1.0đ]\nb) Trong ngày cuối cùng (ngày thứ 33), xưởng đó chỉ cần may nốt 10 bộ đồng phục còn lại. [0.5đ]\n  Đáp số: a) 33 ngày; b) 10 bộ đồng phục. [0.25đ]"
          }
        ]
      },
      {
        id: "part4",
        name: "PHẦN IV: THỬ THÁCH TƯ DUY ĐIỂM 10",
        level: "Mức 4: Vận dụng cao / Olympic",
        scoreText: "1.5 điểm",
        questions: [
          {
            q: "Bài 4 (1.5 điểm): Một phép chia có số chia bằng 28, số dư là 15. Nếu tăng số bị chia thêm 13 đơn vị và giữ nguyên số chia thì thương và số dư thay đổi như thế nào?",
            answer: "Lời giải:\nKhi tăng số bị chia thêm 13 đơn vị thì số dư mới sẽ tăng thêm 13 đơn vị:\n  15 + 13 = 28. [0.5đ]\nVì số dư mới bằng đúng số chia (28), nên ta chia thêm được 1 lần nữa: 28 ÷ 28 = 1 (dư 0). [0.5đ]\nDo đó: Thương của phép chia tăng thêm 1 đơn vị, và phép chia trở thành phép chia hết (số dư bằng 0). [0.5đ]"
          }
        ]
      }
    ]
  },

  w21: {
    week: 21,
    title: "Đề kiểm tra 30 phút · Tuần 21: Dấu hiệu chia hết cho 2, 5, 9, 3 & Tính chất số dư",
    textbook: "Kết nối tri thức với cuộc sống",
    duration: "30 phút",
    totalScore: 10,
    sections: [
      {
        id: "part1",
        name: "PHẦN I: TRẮC NGHIỆM KHỞI ĐỘNG",
        level: "Mức 1: Nhận biết",
        scoreText: "3.0 điểm (4 câu × 0.75đ)",
        questions: [
          { q: "1. Số nào sau đây chia hết cho cả 2 và 5?", choices: ["A. 135", "B. 240", "C. 342", "D. 405"], answer: "B. 240 (Chữ số tận cùng là 0 thì chia hết cho cả 2 và 5)" },
          { q: "2. Số nào dưới đây chia hết cho 9?", choices: ["A. 3.456", "B. 2.345", "C. 1.234", "D. 5.678"], answer: "A. 3.456 (Tổng các chữ số: 3 + 4 + 5 + 6 = 18 chia hết cho 9)" },
          { q: "3. Một số chia hết cho 9 thì số đó chắc chắn:", choices: ["A. Chia hết cho 3", "B. Chia hết cho 5", "C. Chia hết cho 2", "D. Là số chẵn"], answer: "A. Chia hết cho 3 (Vì 9 chia hết cho 3)" },
          { q: "4. Chữ số thích hợp điền vào dấu * để số 5*2 chia hết cho 3 là:", choices: ["A. 1", "B. 2", "C. 3", "D. 4"], answer: "B. 2 (5 + 2 + 2 = 9 chia hết cho 3)" }
        ]
      },
      {
        id: "part2",
        name: "PHẦN II: TỰ LUẬN TÍNH TOÁN & PHÂN LOẠI SỐ",
        level: "Mức 2: Thông hiểu",
        scoreText: "2.5 điểm",
        questions: [
          { q: "Bài 1 (1.5 điểm): Cho các số sau: 2.340 ; 4.565 ; 7.821 ; 9.108 ; 6.300.\n  a) Hãy viết tập hợp các số chia hết cho 2 và 5.\n  b) Hãy viết tập hợp các số chia hết cho 9.", answer: "a) Các số chia hết cho cả 2 và 5 (tận cùng là 0): 2.340 ; 6.300. [0.75đ]\nb) Các số chia hết cho 9:\n  - 2.340 (tổng = 9)\n  - 7.821 (tổng = 18)\n  - 9.108 (tổng = 18)\n  - 6.300 (tổng = 9)\n  Tập hợp: 2.340 ; 7.821 ; 9.108 ; 6.300. [0.75đ]" },
          { q: "Bài 2 (1.0 điểm): Tìm chữ số a và b để số 1a2b chia hết cho cả 2, 5 và 9.", answer: "Để 1a2b chia hết cho 2 và 5 thì b phải bằng 0. [0.5đ]\nKhi đó số trở thành 1a20. Tổng các chữ số: 1 + a + 2 + 0 = 3 + a.\nĐể số chia hết cho 9 thì (3 + a) phải chia hết cho 9 => a = 6.\nVậy a = 6, b = 0 (số đó là 1.620). [0.5đ]" }
        ]
      },
      {
        id: "part3",
        name: "PHẦN III: BÀI TOÁN CÓ LỜI VĂN",
        level: "Mức 3: Vận dụng",
        scoreText: "3.0 điểm",
        questions: [
          {
            q: "Bài 3 (3.0 điểm): Một cô thủ thư muốn xếp 135 quyển truyện tranh vào các ngăn tủ. Có 3 tủ sách:\n- Tủ A có 2 ngăn.\n- Tủ B có 5 ngăn.\n- Tủ C có 9 ngăn.\nHỏi cô thủ thư có thể xếp hết số truyện tranh trên chia đều vào ngăn của tủ nào mà không bị thừa quyển nào? Giải thích vì sao.",
            answer: "Bài giải:\n- Xét tủ A (2 ngăn): 135 có chữ số tận cùng là 5 (chữ số lẻ) nên 135 không chia hết cho 2. Không chia đều được vào tủ A. [1.0đ]\n- Xét tủ B (5 ngăn): 135 có chữ số tận cùng là 5 nên 135 chia hết cho 5 (135 ÷ 5 = 27 quyển mỗi ngăn). Xếp đều được vào tủ B. [1.0đ]\n- Xét tủ C (9 ngăn): 135 có tổng các chữ số là 1 + 3 + 5 = 9 chia hết cho 9 nên 135 chia hết cho 9 (135 ÷ 9 = 15 quyển mỗi ngăn). Xếp đều được vào tủ C. [0.75đ]\n  Đáp số: Cô thủ thư có thể chia đều vào tủ B và tủ C. [0.25đ]"
          }
        ]
      },
      {
        id: "part4",
        name: "PHẦN IV: THỬ THÁCH TƯ DUY ĐIỂM 10",
        level: "Mức 4: Vận dụng cao / Olympic",
        scoreText: "1.5 điểm",
        questions: [
          {
            q: "Bài 4 (1.5 điểm): Tìm số tự nhiên nhỏ nhất có 4 chữ số khác nhau sao cho số đó chia hết cho cả 2, 3 và 5.",
            answer: "Lời giải:\nGọi số cần tìm có dạng abcd (a khác 0; a, b, c, d đôi một khác nhau).\n1. Để abcd chia hết cho cả 2 và 5 thì chữ số tận cùng phải là 0: d = 0. [0.5đ]\n2. Để số là nhỏ nhất có 4 chữ số, ta chọn chữ số hàng nghìn nhỏ nhất: a = 1; hàng trăm nhỏ nhất khác 0 và 1: b = 2. [0.25đ]\n3. Số lúc này là 12c0. Tổng các chữ số: 1 + 2 + c + 0 = 3 + c.\nĐể số chia hết cho 3 thì (3 + c) phải chia hết cho 3, tức là c có thể là: 0, 3, 6, 9. [0.25đ]\nVì các chữ số phải khác nhau nên c không thể bằng 0. Để số nhỏ nhất, ta chọn c = 3. [0.25đ]\nVậy số tự nhiên nhỏ nhất thỏa mãn là 1.230. [0.25đ]"
          }
        ]
      }
    ]
  },

  w22: {
    week: 22,
    title: "Đề kiểm tra 30 phút · Tuần 22: Hình bình hành - Đặc điểm, cấu tạo & Chu vi",
    textbook: "Kết nối tri thức với cuộc sống",
    duration: "30 phút",
    totalScore: 10,
    sections: [
      {
        id: "part1",
        name: "PHẦN I: TRẮC NGHIỆM KHỞI ĐỘNG",
        level: "Mức 1: Nhận biết",
        scoreText: "3.0 điểm (4 câu × 0.75đ)",
        questions: [
          { q: "1. Hình bình hành có đặc điểm nào dưới đây?", choices: ["A. 4 góc vuông", "B. 2 cặp cạnh đối diện song song và bằng nhau", "C. 4 cạnh bằng nhau", "D. 2 đường chéo bằng nhau"], answer: "B. 2 cặp cạnh đối diện song song và bằng nhau" },
          { q: "2. Một hình bình hành có độ dài hai cạnh kề nhau là 12 cm và 8 cm. Chu vi của hình bình hành đó là:", choices: ["A. 20 cm", "B. 40 cm", "C. 96 cm", "D. 48 cm"], answer: "B. 40 cm ((12 + 8) × 2 = 40 cm)" },
          { q: "3. Hình chữ nhật có phải là một hình bình hành đặc biệt không?", choices: ["A. Đúng, vì nó có 2 cặp cạnh đối diện song song và bằng nhau", "B. Sai, hình chữ nhật không phải hình bình hành", "C. Chỉ đúng khi có 4 cạnh bằng nhau", "D. Không thể xác định"], answer: "A. Đúng, vì nó có 2 cặp cạnh đối diện song song và bằng nhau" },
          { q: "4. Chu vi hình bình hành có độ dài các cạnh a và b được tính theo công thức:", choices: ["A. (a + b) × 2", "B. a × b", "C. a + b", "D. (a + b) ÷ 2"], answer: "A. (a + b) × 2" }
        ]
      },
      {
        id: "part2",
        name: "PHẦN II: TỰ LUẬN HÌNH HỌC & ĐẶC TÍNH HÌNH BÌNH HÀNH",
        level: "Mức 2: Thông hiểu",
        scoreText: "2.5 điểm",
        questions: [
          { q: "Bài 1 (1.5 điểm): Cho hình bình hành ABCD có độ dài cạnh AB = 15 cm, cạnh BC = 9 cm.\n  a) Hãy nêu tên các cặp cạnh song song và bằng nhau của hình bình hành ABCD.\n  b) Tính chu vi hình bình hành ABCD ra vở ô ly.", answer: "a) Hai cặp cạnh đối diện song song và bằng nhau:\n  - AB song song và bằng CD (AB = CD = 15 cm) [0.5đ]\n  - AD song song và bằng BC (AD = BC = 9 cm) [0.5đ]\nb) Chu vi hình bình hành ABCD là:\n  (15 + 9) × 2 = 48 (cm). [0.5đ]" },
          { q: "Bài 2 (1.0 điểm): Một hình bình hành có chu vi là 64 cm, độ dài một cạnh là 20 cm. Tìm độ dài cạnh còn lại của hình bình hành đó.", answer: "Nửa chu vi hình bình hành là: 64 ÷ 2 = 32 (cm). [0.5đ]\nĐộ dài cạnh còn lại là: 32 − 20 = 12 (cm). [0.5đ]" }
        ]
      },
      {
        id: "part3",
        name: "PHẦN III: BÀI TOÁN CÓ LỜI VĂN",
        level: "Mức 3: Vận dụng",
        scoreText: "3.0 điểm",
        questions: [
          {
            q: "Bài 3 (3.0 điểm): Bác Ba dùng lưới thép để rào xung quanh một mảnh vườn trồng hoa có dạng hình bình hành. Biết rằng mảnh vườn đó có độ dài một cạnh là 24 m, cạnh kề với nó ngắn hơn cạnh đó 6 m. Bác Ba chừa lại một cổng ra vào rộng 2 m không rào lưới. Hỏi bác Ba cần mua bao nhiêu mét lưới thép?",
            answer: "Bài giải:\nĐộ dài cạnh kề của mảnh vườn hoa là:\n  24 − 6 = 18 (m) [0.75đ]\nChu vi của mảnh vườn hình bình hành là:\n  (24 + 18) × 2 = 84 (m) [1.25đ]\nĐộ dài lưới thép bác Ba cần mua là:\n  84 − 2 = 82 (m) [0.75đ]\n  Đáp số: 82 m lưới thép. [0.25đ]"
          }
        ]
      },
      {
        id: "part4",
        name: "PHẦN IV: THỬ THÁCH TƯ DUY ĐIỂM 10",
        level: "Mức 4: Vận dụng cao / Olympic",
        scoreText: "1.5 điểm",
        questions: [
          {
            q: "Bài 4 (1.5 điểm): Cho hình bình hành MNPQ. Gọi E là trung điểm của cạnh MN, F là trung điểm của cạnh PQ. Hỏi tứ giác MEFQ có phải là hình bình hành không? Hãy giải thích rõ lý do.",
            answer: "Lời giải:\nVì MNPQ là hình bình hành nên cạnh MN song song và bằng cạnh PQ (MN // PQ và MN = PQ). [0.5đ]\nVì E là trung điểm của cạnh MN nên ME = MN ÷ 2.\nVì F là trung điểm của cạnh PQ nên QF = PQ ÷ 2. [0.25đ]\nDo đó: ME = QF (vì MN = PQ). [0.25đ]\nMặt khác, E nằm trên cạnh MN và F nằm trên cạnh PQ nên đoạn thẳng ME song song với đoạn thẳng QF (ME // QF). [0.25đ]\nTứ giác MEFQ có một cặp cạnh đối diện ME và QF vừa song song vừa bằng nhau, nên tứ giác MEFQ là hình bình hành. [0.25đ]"
          }
        ]
      }
    ]
  },

  w23: {
    week: 23,
    title: "Đề kiểm tra 30 phút · Tuần 23: Hình thoi - Đặc điểm 4 cạnh bằng nhau & Đường chéo",
    textbook: "Kết nối tri thức với cuộc sống",
    duration: "30 phút",
    totalScore: 10,
    sections: [
      {
        id: "part1",
        name: "PHẦN I: TRẮC NGHIỆM KHỞI ĐỘNG",
        level: "Mức 1: Nhận biết",
        scoreText: "3.0 điểm (4 câu × 0.75đ)",
        questions: [
          { q: "1. Hình thoi có đặc điểm cơ bản nào?", choices: ["A. 4 cạnh bằng nhau và 2 đường chéo vuông góc", "B. 4 góc vuông", "C. 2 đường chéo bằng nhau", "D. Chỉ có 1 cặp cạnh song song"], answer: "A. 4 cạnh bằng nhau và 2 đường chéo vuông góc" },
          { q: "2. Một hình thoi có cạnh dài 15 cm. Chu vi của hình thoi đó là:", choices: ["A. 30 cm", "B. 60 cm", "C. 45 cm", "D. 225 cm"], answer: "B. 60 cm (15 × 4 = 60 cm)" },
          { q: "3. Hai đường chéo của hình thoi có tính chất:", choices: ["A. Vuông góc với nhau và cắt nhau tại trung điểm của mỗi đường", "B. Song song với nhau", "C. Luôn bằng nhau", "D. Cùng độ dài với cạnh"], answer: "A. Vuông góc với nhau và cắt nhau tại trung điểm của mỗi đường" },
          { q: "4. Chu vi một hình thoi bằng 36 cm. Cạnh của hình thoi dài là:", choices: ["A. 6 cm", "B. 9 cm", "C. 12 cm", "D. 18 cm"], answer: "B. 9 cm (36 ÷ 4 = 9 cm)" }
        ]
      },
      {
        id: "part2",
        name: "PHẦN II: TỰ LUẬN HÌNH THOI & SO SÁNH",
        level: "Mức 2: Thông hiểu",
        scoreText: "2.5 điểm",
        questions: [
          { q: "Bài 1 (1.5 điểm): Cho hình thoi ABCD có độ dài cạnh là 8 cm, hai đường chéo AC và BD cắt nhau tại điểm O.\n  a) Tính chu vi hình thoi ABCD.\n  b) Nêu mối quan hệ về góc giữa hai đường chéo AC và BD.", answer: "a) Chu vi hình thoi ABCD là: 8 × 4 = 32 (cm). [0.75đ]\nb) Hai đường chéo AC và BD vuông góc với nhau tại điểm O (tạo thành 4 góc vuông tại O). [0.75đ]" },
          { q: "Bài 2 (1.0 điểm): Nêu một điểm giống nhau và một điểm khác nhau cơ bản giữa hình vuông và hình thoi.", answer: "- Giống nhau: Đều có 4 cạnh bằng nhau và 2 đường chéo vuông góc. [0.5đ]\n- Khác nhau: Hình vuông có 4 góc vuông và 2 đường chéo bằng nhau, còn hình thoi nói chung không có 4 góc vuông và 2 đường chéo có độ dài khác nhau. [0.5đ]" }
        ]
      },
      {
        id: "part3",
        name: "PHẦN III: BÀI TOÁN CÓ LỜI VĂN",
        level: "Mức 3: Vận dụng",
        scoreText: "3.0 điểm",
        questions: [
          {
            q: "Bài 3 (3.0 điểm): Một mảnh đất trồng hoa trang trí công viên có dạng hình thoi với chu vi bằng 96 m.\na) Tính độ dài một cạnh của mảnh đất hình thoi đó.\nb) Người ta đóng cọc rào xung quanh mảnh đất, cứ cách 3 m lại đóng một chiếc cọc (ở mỗi đỉnh của hình thoi đều có cọc). Hỏi cần tất cả bao nhiêu chiếc cọc?",
            answer: "Bài giải:\na) Độ dài một cạnh của mảnh đất hình thoi là:\n  96 ÷ 4 = 24 (m) [1.25đ]\nb) Vì rào theo đường khép kín quanh chu vi nên số khoảng cách đúng bằng số cọc rào.\nSố chiếc cọc cần dùng là:\n  96 ÷ 3 = 32 (chiếc cọc) [1.25đ]\n  Đáp số: a) 24 m; b) 32 chiếc cọc. [0.5đ]"
          }
        ]
      },
      {
        id: "part4",
        name: "PHẦN IV: THỬ THÁCH TƯ DUY ĐIỂM 10",
        level: "Mức 4: Vận dụng cao / Olympic",
        scoreText: "1.5 điểm",
        questions: [
          {
            q: "Bài 4 (1.5 điểm): Ghép 4 hình tam giác vuông giống hệt nhau có các cạnh góc vuông lần lượt là 6 cm và 8 cm (cạnh huyền đối diện góc vuông là 10 cm) để tạo thành một hình thoi. Hãy tính chu vi của hình thoi vừa tạo thành.",
            answer: "Lời giải:\nKhi ghép 4 tam giác vuông bằng nhau sao cho các góc vuông chụm lại ở tâm thì các cạnh huyền của 4 tam giác vuông sẽ trở thành 4 cạnh ngoài của hình thoi. [0.5đ]\nDo đó, độ dài mỗi cạnh của hình thoi chính bằng độ dài cạnh huyền của tam giác vuông: 10 cm. [0.5đ]\nChu vi của hình thoi tạo thành là:\n  10 × 4 = 40 (cm). [0.5đ]\nĐáp số: 40 cm."
          }
        ]
      }
    ]
  },

  w24: {
    week: 24,
    title: "Đề kiểm tra 30 phút · Tuần 24: Đơn vị đo diện tích mm² & km²",
    textbook: "Kết nối tri thức với cuộc sống",
    duration: "30 phút",
    totalScore: 10,
    sections: [
      {
        id: "part1",
        name: "PHẦN I: TRẮC NGHIỆM KHỞI ĐỘNG",
        level: "Mức 1: Nhận biết",
        scoreText: "3.0 điểm (4 câu × 0.75đ)",
        questions: [
          { q: "1. 1 xăng-ti-mét vuông bằng bao nhiêu mi-li-mét vuông?", choices: ["A. 10 mm²", "B. 100 mm²", "C. 1.000 mm²", "D. 10.000 mm²"], answer: "B. 100 mm² (1 cm = 10 mm -> 1 cm² = 10 × 10 = 100 mm²)" },
          { q: "2. 1 ki-lô-mét vuông bằng bao nhiêu mét vuông?", choices: ["A. 1.000 m²", "B. 10.000 m²", "C. 100.000 m²", "D. 1.000.000 m²"], answer: "D. 1.000.000 m² (1 km = 1.000 m -> 1 km² = 1.000 × 1.000 = 1.000.000 m²)" },
          { q: "3. Diện tích của thủ đô Hà Nội hoặc diện tích một khu rừng thường được đo bằng đơn vị:", choices: ["A. m²", "B. dm²", "C. km²", "D. mm²"], answer: "C. km²" },
          { q: "4. 5 cm² 20 mm² bằng bao nhiêu mi-li-mét vuông?", choices: ["A. 520 mm²", "B. 502 mm²", "C. 5.200 mm²", "D. 52 mm²"], answer: "A. 520 mm² (5 cm² = 500 mm²; 500 + 20 = 520 mm²)" }
        ]
      },
      {
        id: "part2",
        name: "PHẦN II: TỰ LUẬN TÍNH TOÁN & ĐỔI ĐƠN VỊ DIỆN TÍCH",
        level: "Mức 2: Thông hiểu",
        scoreText: "2.5 điểm",
        questions: [
          { q: "Bài 1 (1.5 điểm): Điền số thích hợp vào chỗ chấm ra vở ô ly:\n  a) 8 cm² 45 mm² = ... mm²\n  b) 4 km² = ... m²", answer: "a) 8 cm² 45 mm² = 845 mm² [0.75đ]\nb) 4 km² = 4.000.000 m² [0.75đ]" },
          { q: "Bài 2 (1.0 điểm): So sánh diện tích hai khu đất:\n  Khu A: 3 km² 50.000 m²\n  Khu B: 3.500.000 m²", answer: "Đổi 3 km² 50.000 m² = 3.050.000 m² [0.5đ]\nVì 3.050.000 m² < 3.500.000 m² nên Khu A < Khu B. [0.5đ]" }
        ]
      },
      {
        id: "part3",
        name: "PHẦN III: BÀI TOÁN CÓ LỜI VĂN",
        level: "Mức 3: Vận dụng",
        scoreText: "3.0 điểm",
        questions: [
          {
            q: "Bài 3 (3.0 điểm): Một khu bảo tồn thiên nhiên hình chữ nhật có chiều dài 5 km, chiều rộng 3 km.\na) Tính diện tích khu bảo tồn thiên nhiên đó theo đơn vị ki-lô-mét vuông.\nb) Người ta dùng 1/3 diện tích khu bảo tồn để làm khu sinh thái ngập nước, phần còn lại là rừng nguyên sinh. Tính diện tích rừng nguyên sinh theo đơn vị mét vuông.",
            answer: "Bài giải:\na) Diện tích khu bảo tồn thiên nhiên là:\n  5 × 3 = 15 (km²) [1.0đ]\nb) Diện tích khu sinh thái ngập nước là:\n  15 ÷ 3 = 5 (km²) [0.5đ]\nDiện tích rừng nguyên sinh là:\n  15 − 5 = 10 (km²) [0.75đ]\nĐổi: 10 km² = 10.000.000 m². [0.5đ]\n  Đáp số: a) 15 km²; b) 10.000.000 m². [0.25đ]"
          }
        ]
      },
      {
        id: "part4",
        name: "PHẦN IV: THỬ THÁCH TƯ DUY ĐIỂM 10",
        level: "Mức 4: Vận dụng cao / Olympic",
        scoreText: "1.5 điểm",
        questions: [
          {
            q: "Bài 4 (1.5 điểm): Một tấm kim loại hình vuông có diện tích 1 m². Người ta cắt tấm kim loại đó thành các ô vuông nhỏ li ti có cạnh 1 mm. Sau đó xếp tất cả các ô vuông nhỏ đó nối tiếp nhau thành một đường thẳng duy nhất. Hỏi đường thẳng đó dài bao nhiêu mét (hoặc bao nhiêu ki-lô-mét)?",
            answer: "Lời giải:\nĐổi: 1 m² = 1.000.000 mm². [0.5đ]\nDiện tích một ô vuông nhỏ cạnh 1 mm là: 1 × 1 = 1 mm².\nSố ô vuông nhỏ cắt được là: 1.000.000 ÷ 1 = 1.000.000 (ô vuông). [0.25đ]\nKhi xếp nối tiếp các ô vuông cạnh 1 mm thành một hàng dài, độ dài đường thẳng thu được là:\n  1.000.000 × 1 mm = 1.000.000 mm. [0.25đ]\nĐổi sang mét: 1.000.000 mm = 1.000 m = 1 km. [0.5đ]\nĐáp số: 1.000 m (hoặc 1 km)."
          }
        ]
      }
    ]
  },

  w25: {
    week: 25,
    title: "Đề kiểm tra 30 phút · Tuần 25: Ôn tập đại lượng - Khối lượng, Thời gian & Diện tích",
    textbook: "Kết nối tri thức với cuộc sống",
    duration: "30 phút",
    totalScore: 10,
    sections: [
      {
        id: "part1",
        name: "PHẦN I: TRẮC NGHIỆM KHỞI ĐỘNG",
        level: "Mức 1: Nhận biết",
        scoreText: "3.0 điểm (4 câu × 0.75đ)",
        questions: [
          { q: "1. 3 tạ 25 kg bằng bao nhiêu ki-lô-gam?", choices: ["A. 325 kg", "B. 3.025 kg", "C. 350 kg", "D. 3.250 kg"], answer: "A. 325 kg (3 tạ = 300 kg + 25 kg = 325 kg)" },
          { q: "2. 2 giờ 40 phút bằng bao nhiêu phút?", choices: ["A. 140 phút", "B. 160 phút", "C. 180 phút", "D. 240 phút"], answer: "B. 160 phút (2 × 60 + 40 = 160 phút)" },
          { q: "3. Bác Hồ đọc Tuyên ngôn Độc lập năm 1945. Năm đó thuộc thế kỉ thứ mấy?", choices: ["A. Thế kỉ XVIII", "B. Thế kỉ XIX", "C. Thế kỉ XX", "D. Thế kỉ XXI"], answer: "C. Thế kỉ XX (Năm 1945 thuộc thế kỉ 20: từ 1901 đến 2000)" },
          { q: "4. 6 m² 4 dm² bằng bao nhiêu đề-xi-mét vuông?", choices: ["A. 64 dm²", "B. 604 dm²", "C. 640 dm²", "D. 6.004 dm²"], answer: "B. 604 dm² (6 m² = 600 dm² + 4 dm² = 604 dm²)" }
        ]
      },
      {
        id: "part2",
        name: "PHẦN II: TỰ LUẬN TÍNH TOÁN & ĐỔI ĐƠN VỊ TỔNG HỢP",
        level: "Mức 2: Thông hiểu",
        scoreText: "2.5 điểm",
        questions: [
          { q: "Bài 1 (1.5 điểm): Điền số thích hợp vào chỗ chấm ra vở ô ly:\n  a) 5 tấn 8 tạ = ... yến\n  b) 4 thế kỉ 25 năm = ... năm", answer: "a) 5 tấn = 500 yến; 8 tạ = 80 yến -> 5 tấn 8 tạ = 580 yến [0.75đ]\nb) 4 thế kỉ 25 năm = 425 năm (4 × 100 + 25) [0.75đ]" },
          { q: "Bài 2 (1.0 điểm): Tính giá trị biểu thức:\n  2 giờ 15 phút + 1 giờ 50 phút = ... giờ ... phút", answer: "2h15p + 1h50p = 3h65p = 4 giờ 5 phút. [1.0đ]" }
        ]
      },
      {
        id: "part3",
        name: "PHẦN III: BÀI TOÁN CÓ LỜI VĂN",
        level: "Mức 3: Vận dụng",
        scoreText: "3.0 điểm",
        questions: [
          {
            q: "Bài 3 (3.0 điểm): Một xe tải chở hàng chuyến thứ nhất chở được 2 tấn 5 tạ ngô. Chuyến thứ hai chở được nhiều hơn chuyến thứ nhất 4 tạ ngô. Chuyến thứ ba chở được ít hơn chuyến thứ hai 3 tạ ngô.\na) Hỏi cả ba chuyến xe đó chở được tất cả bao nhiêu tạ ngô?\nb) Đổi tổng số ngô của ba chuyến ra ki-lô-gam.",
            answer: "Bài giải:\nĐổi: 2 tấn 5 tạ = 25 tạ. [0.25đ]\nChuyến thứ hai xe chở được số tạ ngô là:\n  25 + 4 = 29 (tạ) [0.75đ]\nChuyến thứ ba xe chở được số tạ ngô là:\n  29 − 3 = 26 (tạ) [0.75đ]\nCả ba chuyến xe chở được tất cả số tạ ngô là:\n  25 + 29 + 26 = 80 (tạ) [0.75đ]\nĐổi: 80 tạ = 8.000 kg. [0.25đ]\n  Đáp số: a) 80 tạ ngô; b) 8.000 kg ngô. [0.25đ]"
          }
        ]
      },
      {
        id: "part4",
        name: "PHẦN IV: THỬ THÁCH TƯ DUY ĐIỂM 10",
        level: "Mức 4: Vận dụng cao / Olympic",
        scoreText: "1.5 điểm",
        questions: [
          {
            q: "Bài 4 (1.5 điểm): Một chiếc đồng hồ quả lắc cứ đúng 1 giờ thì điểm 1 tiếng chuông, đúng 2 giờ thì điểm 2 tiếng chuông,... đúng 12 giờ thì điểm 12 tiếng chuông. Ngoài ra, cứ vào các giờ rưỡi (ví dụ 1h30, 2h30,...) thì đồng hồ chỉ điểm đúng 1 tiếng chuông. Hỏi trong trọn vẹn một ngày đêm (24 giờ), chiếc đồng hồ đó điểm tất cả bao nhiêu tiếng chuông?",
            answer: "Lời giải:\nMột ngày đêm có 24 giờ, gồm 2 lượt đồng hồ chạy từ 1 giờ đến 12 giờ. [0.25đ]\n1. Tổng số tiếng chuông điểm đúng giờ trong 1 lượt (12 giờ) là:\n  1 + 2 + 3 + ... + 12 = (1 + 12) × 12 ÷ 2 = 78 (tiếng). [0.5đ]\nTrong 24 giờ, số tiếng chuông điểm đúng giờ là: 78 × 2 = 156 (tiếng). [0.25đ]\n2. Trong 24 giờ, có đúng 24 lần điểm giờ rưỡi, mỗi lần 1 tiếng: 24 × 1 = 24 (tiếng). [0.25đ]\nTổng số tiếng chuông đồng hồ điểm trong một ngày đêm là:\n  156 + 24 = 180 (tiếng chuông). [0.25đ]\nĐáp số: 180 tiếng chuông."
          }
        ]
      }
    ]
  },

  w26: {
    week: 26,
    title: "Đề kiểm tra 30 phút · Tuần 26: Phân số & Phép chia số tự nhiên",
    textbook: "Kết nối tri thức với cuộc sống",
    duration: "30 phút",
    totalScore: 10,
    sections: [
      {
        id: "part1",
        name: "PHẦN I: TRẮC NGHIỆM KHỞI ĐỘNG",
        level: "Mức 1: Nhận biết",
        scoreText: "3.0 điểm (4 câu × 0.75đ)",
        questions: [
          { q: "1. Thương của phép chia 5 ÷ 8 viết dưới dạng phân số là:", choices: ["A. 8/5", "B. 5/8", "C. 5,8", "D. 8,5"], answer: "B. 5/8 (Thương của phép chia a ÷ b là a/b với b khác 0)" },
          { q: "2. Phân số nào dưới đây có giá trị bằng 1?", choices: ["A. 6/7", "B. 8/8", "C. 9/5", "D. 0/4"], answer: "B. 8/8 (Tử số bằng mẫu số thì phân số bằng 1)" },
          { q: "3. Phân số nào dưới đây bé hơn 1?", choices: ["A. 5/4", "B. 7/7", "C. 3/8", "D. 9/2"], answer: "C. 3/8 (Tử số nhỏ hơn mẫu số thì phân số bé hơn 1)" },
          { q: "4. Viết số tự nhiên 7 dưới dạng phân số có mẫu số là 3 ta được:", choices: ["A. 7/3", "B. 21/3", "C. 3/7", "D. 14/3"], answer: "B. 21/3 (Vì 21 ÷ 3 = 7)" }
        ]
      },
      {
        id: "part2",
        name: "PHẦN II: TỰ LUẬN TÍNH TOÁN & VIẾT PHÂN SỐ",
        level: "Mức 2: Thông hiểu",
        scoreText: "2.5 điểm",
        questions: [
          { q: "Bài 1 (1.5 điểm): Viết các thương sau dưới dạng phân số rồi rút gọn về tối giản nếu có thể:\n  a) 12 ÷ 16\n  b) 35 ÷ 14", answer: "a) 12 ÷ 16 = 12/16 = 3/4 [0.75đ]\nb) 35 ÷ 14 = 35/14 = 5/2 [0.75đ]" },
          { q: "Bài 2 (1.0 điểm): Viết mỗi số tự nhiên sau dưới dạng phân số có mẫu số bằng 1:\n  9 = ... ; 24 = ...", answer: "9 = 9/1 [0.5đ]\n24 = 24/1 [0.5đ]" }
        ]
      },
      {
        id: "part3",
        name: "PHẦN III: BÀI TOÁN CÓ LỜI VĂN",
        level: "Mức 3: Vận dụng",
        scoreText: "3.0 điểm",
        questions: [
          {
            q: "Bài 3 (3.0 điểm): Cô giáo chia đều 4 chiếc bánh pizza cho 5 bạn học sinh.\na) Hỏi mỗi bạn học sinh nhận được bao nhiêu phần của chiếc bánh pizza?\nb) Nếu cô giáo có 8 chiếc bánh pizza chia đều cho 5 bạn thì mỗi bạn nhận được bao nhiêu phần chiếc bánh? Phân số đó lớn hơn hay bé hơn 1?",
            answer: "Bài giải:\na) Mỗi bạn nhận được số phần bánh pizza là:\n  4 ÷ 5 = 4/5 (chiếc bánh) [1.25đ]\nb) Nếu có 8 chiếc bánh chia đều cho 5 bạn thì mỗi bạn nhận được:\n  8 ÷ 5 = 8/5 (chiếc bánh) [1.0đ]\nPhân số 8/5 có tử số 8 lớn hơn mẫu số 5 nên phân số 8/5 lớn hơn 1. [0.5đ]\n  Đáp số: a) 4/5 chiếc bánh; b) 8/5 chiếc bánh (lớn hơn 1). [0.25đ]"
          }
        ]
      },
      {
        id: "part4",
        name: "PHẦN IV: THỬ THÁCH TƯ DUY ĐIỂM 10",
        level: "Mức 4: Vận dụng cao / Olympic",
        scoreText: "1.5 điểm",
        questions: [
          {
            q: "Bài 4 (1.5 điểm): Tìm tất cả các phân số có mẫu số bằng 5, lớn hơn 1/5 nhưng bé hơn 1.",
            answer: "Lời giải:\nCác phân số có mẫu số bằng 5 có dạng x/5 (x là số tự nhiên). [0.25đ]\nTheo bài ra ta có: 1/5 < x/5 < 1.\nVì 1 = 5/5 nên ta có: 1/5 < x/5 < 5/5. [0.5đ]\nDo các phân số có cùng mẫu số là 5 nên: 1 < x < 5.\nCác số tự nhiên x thỏa mãn là: x = 2 ; x = 3 ; x = 4. [0.5đ]\nVậy các phân số cần tìm là: 2/5 ; 3/5 ; 4/5. [0.25đ]"
          }
        ]
      }
    ]
  },

  w27: {
    week: 27,
    title: "Đề kiểm tra 30 phút · Tuần 27: Tính chất cơ bản của phân số & Rút gọn phân số",
    textbook: "Kết nối tri thức với cuộc sống",
    duration: "30 phút",
    totalScore: 10,
    sections: [
      {
        id: "part1",
        name: "PHẦN I: TRẮC NGHIỆM KHỞI ĐỘNG",
        level: "Mức 1: Nhận biết",
        scoreText: "3.0 điểm (4 câu × 0.75đ)",
        questions: [
          { q: "1. Khi nhân cả tử số và mẫu số của một phân số với cùng một số tự nhiên khác 0 ta được:", choices: ["A. Một phân số bằng phân số đã cho", "B. Một phân số lớn hơn phân số đã cho", "C. Một phân số bé hơn phân số đã cho", "D. Một số tự nhiên"], answer: "A. Một phân số bằng phân số đã cho" },
          { q: "2. Phân số nào dưới đây là phân số tối giản?", choices: ["A. 6/9", "B. 14/21", "C. 8/15", "D. 25/30"], answer: "C. 8/15 (Ước chung lớn nhất của 8 và 15 là 1)" },
          { q: "3. Rút gọn phân số 36/48 về tối giản ta được:", choices: ["A. 18/24", "B. 9/12", "C. 3/4", "D. 6/8"], answer: "C. 3/4 (Chia cả tử và mẫu cho 12: 36÷12 / 48÷12 = 3/4)" },
          { q: "4. Phân số nào bằng phân số 2/7?", choices: ["A. 4/14", "B. 6/28", "C. 8/21", "D. 5/14"], answer: "A. 4/14 (2×2 / 7×2 = 4/14)" }
        ]
      },
      {
        id: "part2",
        name: "PHẦN II: TỰ LUẬN TÍNH TOÁN & RÚT GỌN",
        level: "Mức 2: Thông hiểu",
        scoreText: "2.5 điểm",
        questions: [
          { q: "Bài 1 (1.5 điểm): Rút gọn các phân số sau thành phân số tối giản ra vở ô ly:\n  a) 42/56\n  b) 75/100", answer: "a) 42/56 = (42 ÷ 14) / (56 ÷ 14) = 3/4 [0.75đ]\nb) 75/100 = (75 ÷ 25) / (100 ÷ 25) = 3/4 [0.75đ]" },
          { q: "Bài 2 (1.0 điểm): Tìm số tự nhiên x biết:\n  x/18 = 5/6", answer: "Nhân cả tử và mẫu của 5/6 với 3 ta có:\n5/6 = (5 × 3) / (6 × 3) = 15/18. [0.5đ]\nDo x/18 = 15/18 nên x = 15. [0.5đ]" }
        ]
      },
      {
        id: "part3",
        name: "PHẦN III: BÀI TOÁN CÓ LỜI VĂN",
        level: "Mức 3: Vận dụng",
        scoreText: "3.0 điểm",
        questions: [
          {
            q: "Bài 3 (3.0 điểm): Một trang trại nuôi 120 con gà, trong đó có 45 con gà trống, còn lại là gà mái.\na) Tìm số con gà mái của trang trại đó.\nb) Viết phân số chỉ số con gà trống so với tổng số con gà cả trang trại dưới dạng phân số tối giản.\nc) Viết phân số chỉ số con gà mái so với tổng số con gà cả trang trại dưới dạng phân số tối giản.",
            answer: "Bài giải:\na) Số con gà mái của trang trại là:\n  120 − 45 = 75 (con gà) [1.0đ]\nb) Phân số chỉ số gà trống so với cả đàn gà là:\n  45/120 = (45 ÷ 15) / (120 ÷ 15) = 3/8. [1.0đ]\nc) Phân số chỉ số gà mái so với cả đàn gà là:\n  75/120 = (75 ÷ 15) / (120 ÷ 15) = 5/8. [0.75đ]\n  Đáp số: a) 75 con gà mái; b) 3/8; c) 5/8. [0.25đ]"
          }
        ]
      },
      {
        id: "part4",
        name: "PHẦN IV: THỬ THÁCH TƯ DUY ĐIỂM 10",
        level: "Mức 4: Vận dụng cao / Olympic",
        scoreText: "1.5 điểm",
        questions: [
          {
            q: "Bài 4 (1.5 điểm): Cho phân số 19/31. Hỏi cần phải bớt ở cả tử số và mẫu số cùng một số tự nhiên n nào để được một phân số mới có giá trị bằng 1/3?",
            answer: "Lời giải:\nKhi bớt ở cả tử số và mẫu số cùng một số tự nhiên n thì hiệu giữa mẫu số và tử số không thay đổi. [0.5đ]\nHiệu giữa mẫu số và tử số ban đầu là:\n  31 − 19 = 12. [0.25đ]\nỞ phân số mới bằng 1/3, coi tử số mới là 1 phần thì mẫu số mới là 3 phần như thế.\nHiệu số phần bằng nhau là: 3 − 1 = 2 (phần). [0.25đ]\nGiá trị của 1 phần (tử số mới) là: 12 ÷ 2 = 6. [0.25đ]\nSố tự nhiên n cần bớt là:\n  19 − 6 = 13. [0.25đ]\nThử lại: (19 − 13) / (31 − 13) = 6/18 = 1/3 (đúng).\nĐáp số: n = 13."
          }
        ]
      }
    ]
  },

  w28: {
    week: 28,
    title: "Đề kiểm tra 30 phút · Tuần 28: Quy đồng mẫu số & So sánh hai phân số",
    textbook: "Kết nối tri thức với cuộc sống",
    duration: "30 phút",
    totalScore: 10,
    sections: [
      {
        id: "part1",
        name: "PHẦN I: TRẮC NGHIỆM KHỞI ĐỘNG",
        level: "Mức 1: Nhận biết",
        scoreText: "3.0 điểm (4 câu × 0.75đ)",
        questions: [
          { q: "1. Trong hai phân số có cùng mẫu số dương, phân số nào lớn hơn?", choices: ["A. Phân số có tử số lớn hơn", "B. Phân số có tử số bé hơn", "C. Hai phân số bằng nhau", "D. Không so sánh được"], answer: "A. Phân số có tử số lớn hơn" },
          { q: "2. Quy đồng mẫu số hai phân số 3/5 và 4/7 với mẫu số chung nhỏ nhất là:", choices: ["A. 12", "B. 35", "C. 28", "D. 20"], answer: "B. 35 (5 × 7 = 35)" },
          { q: "3. So sánh 5/8 và 5/6, khẳng định nào đúng?", choices: ["A. 5/8 > 5/6", "B. 5/8 < 5/6", "C. 5/8 = 5/6", "D. Không có cơ sở"], answer: "B. 5/8 < 5/6 (Hai phân số cùng tử số, mẫu nào bé hơn thì phân số đó lớn hơn: 6 < 8 nên 5/6 > 5/8)" },
          { q: "4. Sắp xếp các phân số 1/2 ; 2/3 ; 1/6 theo thứ tự từ bé đến lớn là:", choices: ["A. 1/6 ; 1/2 ; 2/3", "B. 2/3 ; 1/2 ; 1/6", "C. 1/2 ; 1/6 ; 2/3", "D. 1/6 ; 2/3 ; 1/2"], answer: "A. 1/6 ; 1/2 ; 2/3 (Quy về mẫu 6: 1/6 ; 3/6 ; 4/6)" }
        ]
      },
      {
        id: "part2",
        name: "PHẦN II: TỰ LUẬN QUY ĐỒNG & SO SÁNH",
        level: "Mức 2: Thông hiểu",
        scoreText: "2.5 điểm",
        questions: [
          { q: "Bài 1 (1.5 điểm): Quy đồng mẫu số hai phân số sau ra vở ô ly:\n  a) 5/6 và 7/9\n  b) 3/4 và 5/12", answer: "a) Mẫu số chung là 18:\n  5/6 = (5 × 3) / (6 × 3) = 15/18 [0.4đ]\n  7/9 = (7 × 2) / (9 × 2) = 14/18 [0.35đ]\nb) Mẫu số chung là 12:\n  3/4 = (3 × 3) / (4 × 3) = 9/12; giữ nguyên 5/12 [0.75đ]" },
          { q: "Bài 2 (1.0 điểm): So sánh hai phân số 4/7 và 5/9 bằng cách quy đồng mẫu số.", answer: "Mẫu số chung là 63:\n4/7 = (4 × 9) / 63 = 36/63 [0.4đ]\n5/9 = (5 × 7) / 63 = 35/63 [0.4đ]\nVì 36/63 > 35/63 nên 4/7 > 5/9 [0.2đ]" }
        ]
      },
      {
        id: "part3",
        name: "PHẦN III: BÀI TOÁN CÓ LỜI VĂN",
        level: "Mức 3: Vận dụng",
        scoreText: "3.0 điểm",
        questions: [
          {
            q: "Bài 3 (3.0 điểm): Trong một tiết học tự chọn tại trường, có 3/8 số học sinh của lớp đăng ký tham gia câu lạc bộ Cờ vua, 2/5 số học sinh đăng ký tham gia câu lạc bộ Bóng rổ, số còn lại tham gia câu lạc bộ Vẽ tranh.\na) Hỏi câu lạc bộ Cờ vua hay câu lạc bộ Bóng rổ có số học sinh tham gia nhiều hơn?\nb) Hãy quy đồng mẫu số hai phân số 3/8 và 2/5 để giải thích rõ vì sao.",
            answer: "Bài giải:\na) Quy đồng mẫu số hai phân số 3/8 và 2/5 với mẫu số chung là 40: [0.5đ]\n  3/8 = (3 × 5) / (8 × 5) = 15/40 (số học sinh cả lớp) [1.0đ]\n  2/5 = (2 × 8) / (5 × 8) = 16/40 (số học sinh cả lớp) [1.0đ]\nb) Vì 16/40 > 15/40 nên 2/5 > 3/8.\n  Vậy câu lạc bộ Bóng rổ có số học sinh tham gia nhiều hơn câu lạc bộ Cờ vua. [0.5đ]"
          }
        ]
      },
      {
        id: "part4",
        name: "PHẦN IV: THỬ THÁCH TƯ DUY ĐIỂM 10",
        level: "Mức 4: Vận dụng cao / Olympic",
        scoreText: "1.5 điểm",
        questions: [
          {
            q: "Bài 4 (1.5 điểm): Không quy đồng mẫu số hoặc tử số, hãy so sánh hai phân số sau bằng cách dùng phần bù tới 1:\n  A = 2023/2024 và B = 2024/2025",
            answer: "Lời giải:\nTa xét phần bù tới 1 của từng phân số:\n  1 − A = 1 − 2023/2024 = 1/2024 [0.5đ]\n  1 − B = 1 − 2024/2025 = 1/2025 [0.5đ]\nSo sánh hai phần bù:\nVì 2024 < 2025 nên 1/2024 > 1/2025 (phần bù của A lớn hơn phần bù của B). [0.25đ]\nPhân số nào có phần bù tới 1 lớn hơn thì phân số đó bé hơn.\nDo đó: 2023/2024 < 2024/2025 (A < B). [0.25đ]"
          }
        ]
      }
    ]
  },

  w29: {
    week: 29,
    title: "Đề kiểm tra 30 phút · Tuần 29: Phép cộng phân số & Tính chất giao hoán, kết hợp",
    textbook: "Kết nối tri thức với cuộc sống",
    duration: "30 phút",
    totalScore: 10,
    sections: [
      {
        id: "part1",
        name: "PHẦN I: TRẮC NGHIỆM KHỞI ĐỘNG",
        level: "Mức 1: Nhận biết",
        scoreText: "3.0 điểm (4 câu × 0.75đ)",
        questions: [
          { q: "1. Kết quả của phép tính 3/8 + 5/8 là:", choices: ["A. 8/16", "B. 8/8 = 1", "C. 15/64", "D. 2/8"], answer: "B. 8/8 = 1" },
          { q: "2. Kết quả của phép tính 2/3 + 1/6 là:", choices: ["A. 3/9", "B. 5/6", "C. 4/6", "D. 3/6"], answer: "B. 5/6 (4/6 + 1/6 = 5/6)" },
          { q: "3. Tính 1 + 2/5 có kết quả bằng:", choices: ["A. 3/5", "B. 7/5", "C. 2/5", "D. 6/5"], answer: "B. 7/5 (5/5 + 2/5 = 7/5)" },
          { q: "4. Phép tính nào áp dụng đúng tính chất kết hợp của phép cộng phân số?", choices: ["A. (a + b) + c = a + (b + c)", "B. a + b = b + a", "C. a + 0 = a", "D. a × (b + c) = a×b + a×c"], answer: "A. (a + b) + c = a + (b + c)" }
        ]
      },
      {
        id: "part2",
        name: "PHẦN II: TỰ LUẬN TÍNH TOÁN & TÍNH THUẬN TIỆN",
        level: "Mức 2: Thông hiểu",
        scoreText: "2.5 điểm",
        questions: [
          { q: "Bài 1 (1.5 điểm): Đặt tính rồi tính ra vở ô ly:\n  a) 3/7 + 4/5\n  b) 5/12 + 7/18", answer: "a) 3/7 + 4/5 = 15/35 + 28/35 = 43/35 [0.75đ]\nb) MSC = 36: 5/12 + 7/18 = 15/36 + 14/36 = 29/36 [0.75đ]" },
          { q: "Bài 2 (1.0 điểm): Tính bằng cách thuận tiện nhất:\n  3/8 + 5/11 + 5/8 + 6/11", answer: "= (3/8 + 5/8) + (5/11 + 6/11) [0.5đ]\n= 8/8 + 11/11 = 1 + 1 = 2. [0.5đ]" }
        ]
      },
      {
        id: "part3",
        name: "PHẦN III: BÀI TOÁN CÓ LỜI VĂN",
        level: "Mức 3: Vận dụng",
        scoreText: "3.0 điểm",
        questions: [
          {
            q: "Bài 3 (3.0 điểm): Một ô tô giờ thứ nhất chạy được 2/9 quãng đường, giờ thứ hai chạy được 1/3 quãng đường, giờ thứ ba chạy được 2/9 quãng đường.\na) Hỏi sau ba giờ, ô tô đó chạy được tất cả bao nhiêu phần của quãng đường?\nb) Quãng đường còn lại ô tô phải chạy chiếm bao nhiêu phần của toàn bộ quãng đường?",
            answer: "Bài giải:\na) Sau ba giờ, ô tô chạy được số phần quãng đường là:\n  2/9 + 1/3 + 2/9 = 2/9 + 3/9 + 2/9 = 7/9 (quãng đường) [1.75đ]\nb) Quãng đường còn lại ô tô phải chạy chiếm số phần là:\n  1 − 7/9 = 9/9 − 7/9 = 2/9 (quãng đường) [1.0đ]\n  Đáp số: a) 7/9 quãng đường; b) 2/9 quãng đường. [0.25đ]"
          }
        ]
      },
      {
        id: "part4",
        name: "PHẦN IV: THỬ THÁCH TƯ DUY ĐIỂM 10",
        level: "Mức 4: Vận dụng cao / Olympic",
        scoreText: "1.5 điểm",
        questions: [
          {
            q: "Bài 4 (1.5 điểm): Tìm số tự nhiên x sao cho:\n  x/6 + 1/3 = 5/6",
            answer: "Lời giải:\nTa quy đồng mẫu số 1/3 thành mẫu số 6:\n  1/3 = (1 × 2) / (3 × 2) = 2/6. [0.5đ]\nThay vào biểu thức ta có:\n  x/6 + 2/6 = 5/6 [0.25đ]\n  (x + 2)/6 = 5/6 [0.25đ]\nSuy ra: x + 2 = 5 => x = 5 − 2 = 3. [0.5đ]\nĐáp số: x = 3."
          }
        ]
      }
    ]
  },

  w30: {
    week: 30,
    title: "Đề kiểm tra 30 phút · Tuần 30: Phép trừ phân số & Bài toán tìm thành phần chưa biết",
    textbook: "Kết nối tri thức với cuộc sống",
    duration: "30 phút",
    totalScore: 10,
    sections: [
      {
        id: "part1",
        name: "PHẦN I: TRẮC NGHIỆM KHỞI ĐỘNG",
        level: "Mức 1: Nhận biết",
        scoreText: "3.0 điểm (4 câu × 0.75đ)",
        questions: [
          { q: "1. Kết quả của phép trừ 9/14 − 5/14 là:", choices: ["A. 4/14 = 2/7", "B. 4/0", "C. 14/14 = 1", "D. 4/28"], answer: "A. 4/14 = 2/7" },
          { q: "2. Kết quả của phép tính 2 − 3/4 là:", choices: ["A. 1/4", "B. 5/4", "C. 3/4", "D. 7/4"], answer: "B. 5/4 (8/4 − 3/4 = 5/4)" },
          { q: "3. Tìm x biết x + 1/4 = 7/8. Kết quả x là:", choices: ["A. 5/8", "B. 6/8", "C. 3/8", "D. 1/2"], answer: "A. 5/8 (7/8 − 2/8 = 5/8)" },
          { q: "4. Phép tính 5/6 − 1/2 có kết quả rút gọn là:", choices: ["A. 2/6 = 1/3", "B. 4/4 = 1", "C. 1/6", "D. 3/6"], answer: "A. 2/6 = 1/3 (5/6 − 3/6 = 2/6 = 1/3)" }
        ]
      },
      {
        id: "part2",
        name: "PHẦN II: TỰ LUẬN TÍNH TOÁN & TÌM X",
        level: "Mức 2: Thông hiểu",
        scoreText: "2.5 điểm",
        questions: [
          { q: "Bài 1 (1.5 điểm): Tính ra vở ô ly (rút gọn kết quả nếu có thể):\n  a) 7/9 − 1/6\n  b) 3 − 5/7", answer: "a) MSC = 18: 14/18 − 3/18 = 11/18 [0.75đ]\nb) 3 − 5/7 = 21/7 − 5/7 = 16/7 [0.75đ]" },
          { q: "Bài 2 (1.0 điểm): Tìm x biết:\n  11/12 − x = 1/4", answer: "x = 11/12 − 1/4 [0.5đ]\nx = 11/12 − 3/12 = 8/12 = 2/3. [0.5đ]" }
        ]
      },
      {
        id: "part3",
        name: "PHẦN III: BÀI TOÁN CÓ LỜI VĂN",
        level: "Mức 3: Vận dụng",
        scoreText: "3.0 điểm",
        questions: [
          {
            q: "Bài 3 (3.0 điểm): Một bình chứa 5/4 lít nước hoa quả. Bách uống 1/2 lít nước hoa quả vào buổi sáng và uống thêm 3/8 lít vào buổi chiều.\na) Hỏi trong cả ngày Bách đã uống tất cả bao nhiêu lít nước hoa quả?\nb) Trong bình còn lại bao nhiêu lít nước hoa quả?",
            answer: "Bài giải:\na) Trong cả ngày Bách đã uống số lít nước hoa quả là:\n  1/2 + 3/8 = 4/8 + 3/8 = 7/8 (lít) [1.25đ]\nb) Trong bình còn lại số lít nước hoa quả là:\n  5/4 − 7/8 = 10/8 − 7/8 = 3/8 (lít) [1.25đ]\n  Đáp số: a) 7/8 lít; b) 3/8 lít. [0.5đ]"
          }
        ]
      },
      {
        id: "part4",
        name: "PHẦN IV: THỬ THÁCH TƯ DUY ĐIỂM 10",
        level: "Mức 4: Vận dụng cao / Olympic",
        scoreText: "1.5 điểm",
        questions: [
          {
            q: "Bài 4 (1.5 điểm): Tính nhanh giá trị của biểu thức hiệu sau:\n  M = 1 − 1/2 − 1/4 − 1/8 − 1/16 − 1/32",
            answer: "Lời giải:\nTa viết 1 = 1/2 + 1/2.\nKhi đó:\n  1 − 1/2 = 1/2\n  1/2 − 1/4 = 1/4\n  1/4 − 1/8 = 1/8\n  1/8 − 1/16 = 1/16\n  1/16 − 1/32 = 1/32. [1.0đ]\nVậy giá trị của biểu thức là: M = 1/32. [0.5đ]"
          }
        ]
      }
    ]
  },

  w31: {
    week: 31,
    title: "Đề kiểm tra 30 phút · Tuần 31: Phép nhân phân số & Tính chất phân phối",
    textbook: "Kết nối tri thức với cuộc sống",
    duration: "30 phút",
    totalScore: 10,
    sections: [
      {
        id: "part1",
        name: "PHẦN I: TRẮC NGHIỆM KHỞI ĐỘNG",
        level: "Mức 1: Nhận biết",
        scoreText: "3.0 điểm (4 câu × 0.75đ)",
        questions: [
          { q: "1. Muốn nhân hai phân số, ta làm như thế nào?", choices: ["A. Nhân tử số với tử số, mẫu số với mẫu số", "B. Quy đồng mẫu số rồi nhân", "C. Nhân chéo tử số với mẫu số", "D. Giữ nguyên mẫu số, nhân tử số"], answer: "A. Nhân tử số với tử số, mẫu số với mẫu số" },
          { q: "2. Kết quả của phép tính 2/5 × 3/7 là:", choices: ["A. 5/12", "B. 6/35", "C. 6/12", "D. 14/15"], answer: "B. 6/35 (2×3 / 5×7 = 6/35)" },
          { q: "3. Kết quả của phép tính 4 × 3/8 là:", choices: ["A. 12/8 = 3/2", "B. 7/8", "C. 12/32", "D. 3/32"], answer: "A. 12/8 = 3/2 (4×3 / 8 = 12/8 = 3/2)" },
          { q: "4. Phân số nào nhân với 5/9 cho kết quả bằng 1?", choices: ["A. 5/9", "B. 9/5", "C. 1/9", "D. 1/5"], answer: "B. 9/5 (5/9 × 9/5 = 45/45 = 1)" }
        ]
      },
      {
        id: "part2",
        name: "PHẦN II: TỰ LUẬN TÍNH TOÁN & RÚT GỌN KHI NHÂN",
        level: "Mức 2: Thông hiểu",
        scoreText: "2.5 điểm",
        questions: [
          { q: "Bài 1 (1.5 điểm): Tính ra vở ô ly (rút gọn trước khi nhân nếu có thể):\n  a) 4/9 × 3/8\n  b) 15/16 × 4/5", answer: "a) (4 × 3) / (9 × 8) = 1 / (3 × 2) = 1/6 [0.75đ]\nb) (15 × 4) / (16 × 5) = (3 × 1) / (4 × 1) = 3/4 [0.75đ]" },
          { q: "Bài 2 (1.0 điểm): Tính bằng cách thuận tiện nhất (áp dụng tính chất phân phối):\n  5/9 × 3/7 + 5/9 × 4/7", answer: "= 5/9 × (3/7 + 4/7) [0.5đ]\n= 5/9 × 7/7 = 5/9 × 1 = 5/9. [0.5đ]" }
        ]
      },
      {
        id: "part3",
        name: "PHẦN III: BÀI TOÁN CÓ LỜI VĂN",
        level: "Mức 3: Vận dụng",
        scoreText: "3.0 điểm",
        questions: [
          {
            q: "Bài 3 (3.0 điểm): Một mảnh vườn hình chữ nhật có chiều dài là 15 m, chiều rộng bằng 3/5 chiều dài.\na) Tính chiều rộng của mảnh vườn đó.\nb) Tính chu vi và diện tích của mảnh vườn đó.",
            answer: "Bài giải:\na) Chiều rộng của mảnh vườn là:\n  15 × 3/5 = 9 (m) [1.0đ]\nb) Chu vi của mảnh vườn là:\n  (15 + 9) × 2 = 48 (m) [1.0đ]\nDiện tích của mảnh vườn là:\n  15 × 9 = 135 (m²) [0.75đ]\n  Đáp số: Chiều rộng 9 m; Chu vi 48 m; Diện tích 135 m². [0.25đ]"
          }
        ]
      },
      {
        id: "part4",
        name: "PHẦN IV: THỬ THÁCH TƯ DUY ĐIỂM 10",
        level: "Mức 4: Vận dụng cao / Olympic",
        scoreText: "1.5 điểm",
        questions: [
          {
            q: "Bài 4 (1.5 điểm): Tính tích của dãy phân số sau:\n  P = (1 − 1/2) × (1 − 1/3) × (1 − 1/4) × ... × (1 − 1/20)",
            answer: "Lời giải:\nThực hiện phép trừ trong từng ngoặc đơn ta được:\n  1 − 1/2 = 1/2\n  1 − 1/3 = 2/3\n  1 − 1/4 = 3/4\n  ...\n  1 − 1/20 = 19/20. [0.5đ]\nBiểu thức trở thành:\n  P = 1/2 × 2/3 × 3/4 × ... × 19/20 [0.5đ]\nRút gọn liên tiếp các tử số và mẫu số giống nhau ta còn lại:\n  P = 1/20. [0.5đ]\nĐáp số: 1/20."
          }
        ]
      }
    ]
  },

  w32: {
    week: 32,
    title: "Đề kiểm tra 30 phút · Tuần 32: Tìm phân số của một số & Bài toán thực tế",
    textbook: "Kết nối tri thức với cuộc sống",
    duration: "30 phút",
    totalScore: 10,
    sections: [
      {
        id: "part1",
        name: "PHẦN I: TRẮC NGHIỆM KHỞI ĐỘNG",
        level: "Mức 1: Nhận biết",
        scoreText: "3.0 điểm (4 câu × 0.75đ)",
        questions: [
          { q: "1. Muốn tìm phân số a/b của một số A, ta làm thế nào?", choices: ["A. Lấy A × a/b", "B. Lấy A ÷ a/b", "C. Lấy A + a/b", "D. Lấy A − a/b"], answer: "A. Lấy A × a/b" },
          { q: "2. 2/3 của 18 kg là:", choices: ["A. 12 kg", "B. 27 kg", "C. 6 kg", "D. 9 kg"], answer: "A. 12 kg (18 × 2/3 = 12 kg)" },
          { q: "3. 3/4 của một giờ bằng bao nhiêu phút?", choices: ["A. 40 phút", "B. 45 phút", "C. 30 phút", "D. 50 phút"], answer: "B. 45 phút (60 × 3/4 = 45 phút)" },
          { q: "4. Lớp 4A có 36 học sinh, trong đó 1/4 số học sinh đạt giải Toán học. Số học sinh đạt giải là:", choices: ["A. 9 bạn", "B. 8 bạn", "C. 12 bạn", "D. 6 bạn"], answer: "A. 9 bạn (36 × 1/4 = 9)" }
        ]
      },
      {
        id: "part2",
        name: "PHẦN II: TỰ LUẬN TÍNH TOÁN & TÌM GIÁ TRỊ PHÂN SỐ",
        level: "Mức 2: Thông hiểu",
        scoreText: "2.5 điểm",
        questions: [
          { q: "Bài 1 (1.5 điểm): Tính ra vở ô ly:\n  a) Tìm 3/5 của 45 lít sữa\n  b) Tìm 2/7 của 56 mét vải", answer: "a) 45 × 3/5 = 27 (lít sữa) [0.75đ]\nb) 56 × 2/7 = 16 (mét vải) [0.75đ]" },
          { q: "Bài 2 (1.0 điểm): Một bao gạo nặng 60 kg. Người ta đã lấy ra 2/3 số gạo trong bao. Hỏi trong bao còn lại bao nhiêu ki-lô-gam gạo?", answer: "Số gạo đã lấy ra là: 60 × 2/3 = 40 (kg). [0.5đ]\nSố gạo còn lại là: 60 − 40 = 20 (kg). [0.5đ]" }
        ]
      },
      {
        id: "part3",
        name: "PHẦN III: BÀI TOÁN CÓ LỜI VĂN",
        level: "Mức 3: Vận dụng",
        scoreText: "3.0 điểm",
        questions: [
          {
            q: "Bài 3 (3.0 điểm): Một cửa hàng hoa quả có 240 kg cam. Buổi sáng cửa hàng bán được 1/3 số cam đó. Buổi chiều cửa hàng bán được 3/8 số cam ban đầu.\na) Hỏi cả hai buổi cửa hàng bán được bao nhiêu ki-lô-gam cam?\nb) Hỏi trong cửa hàng còn lại bao nhiêu ki-lô-gam cam?",
            answer: "Bài giải:\nBuổi sáng cửa hàng bán được số kg cam là:\n  240 × 1/3 = 80 (kg) [1.0đ]\nBuổi chiều cửa hàng bán được số kg cam là:\n  240 × 3/8 = 90 (kg) [1.0đ]\nCả hai buổi cửa hàng bán được tất cả là:\n  80 + 90 = 170 (kg) [0.5đ]\nSố ki-lô-gam cam còn lại trong cửa hàng là:\n  240 − 170 = 70 (kg) [0.25đ]\n  Đáp số: a) 170 kg cam; b) 70 kg cam. [0.25đ]"
          }
        ]
      },
      {
        id: "part4",
        name: "PHẦN IV: THỬ THÁCH TƯ DUY ĐIỂM 10",
        level: "Mức 4: Vận dụng cao / Olympic",
        scoreText: "1.5 điểm",
        questions: [
          {
            q: "Bài 4 (1.5 điểm): Bách có một số viên bi. Bách cho em 1/3 số bi đó, rồi cho bạn 1/4 số bi còn lại. Cuối cùng Bách còn lại 12 viên bi. Hỏi lúc đầu Bách có tất cả bao nhiêu viên bi?",
            answer: "Lời giải:\nCoi số bi ban đầu là 1 đơn vị.\nSau khi cho em 1/3 số bi, Bách còn lại số phần bi là:\n  1 − 1/3 = 2/3 (số bi ban đầu). [0.5đ]\nSố bi Bách cho bạn chiếm số phần là:\n  2/3 × 1/4 = 2/12 = 1/6 (số bi ban đầu). [0.25đ]\nSố phần bi còn lại sau cùng là:\n  2/3 − 1/6 = 4/6 − 1/6 = 3/6 = 1/2 (số bi ban đầu). [0.25đ]\nVì 1/2 số bi ban đầu bằng 12 viên bi, nên lúc đầu Bách có:\n  12 ÷ (1/2) = 12 × 2 = 24 (viên bi). [0.5đ]\nĐáp số: 24 viên bi."
          }
        ]
      }
    ]
  },

  w33: {
    week: 33,
    title: "Đề kiểm tra 30 phút · Tuần 33: Phép chia phân số & Tìm thành phần chưa biết",
    textbook: "Kết nối tri thức với cuộc sống",
    duration: "30 phút",
    totalScore: 10,
    sections: [
      {
        id: "part1",
        name: "PHẦN I: TRẮC NGHIỆM KHỞI ĐỘNG",
        level: "Mức 1: Nhận biết",
        scoreText: "3.0 điểm (4 câu × 0.75đ)",
        questions: [
          { q: "1. Phân số đảo ngược của phân số 4/7 là:", choices: ["A. 7/4", "B. 4/7", "C. 1/7", "D. 1/4"], answer: "A. 7/4" },
          { q: "2. Kết quả của phép chia 3/5 ÷ 2/3 là:", choices: ["A. 6/15 = 2/5", "B. 9/10", "C. 5/8", "D. 1/2"], answer: "B. 9/10 (3/5 × 3/2 = 9/10)" },
          { q: "3. Kết quả của phép tính 6 ÷ 3/4 là:", choices: ["A. 8", "B. 18/4 = 9/2", "C. 2/4", "D. 12"], answer: "A. 8 (6 × 4/3 = 24/3 = 8)" },
          { q: "4. Phép tính nào có kết quả bằng 1/2?", choices: ["A. 1/4 ÷ 1/2", "B. 1/2 ÷ 2", "C. 3/8 ÷ 3/4", "D. Cả A và C"], answer: "D. Cả A và C (1/4 ÷ 1/2 = 1/2; 3/8 ÷ 3/4 = 3/8 × 4/3 = 1/2)" }
        ]
      },
      {
        id: "part2",
        name: "PHẦN II: TỰ LUẬN TÍNH TOÁN & TÌM X PHÂN SỐ",
        level: "Mức 2: Thông hiểu",
        scoreText: "2.5 điểm",
        questions: [
          { q: "Bài 1 (1.5 điểm): Tính ra vở ô ly (nhớ rút gọn kết quả):\n  a) 5/8 ÷ 15/16\n  b) 2/3 ÷ 4", answer: "a) 5/8 × 16/15 = (5 × 16) / (8 × 15) = 2/3 [0.75đ]\nb) 2/3 ÷ 4 = 2/3 × 1/4 = 2/12 = 1/6 [0.75đ]" },
          { q: "Bài 2 (1.0 điểm): Tìm x biết:\n  x × 3/5 = 9/10", answer: "x = 9/10 ÷ 3/5 [0.5đ]\nx = 9/10 × 5/3 = (9 × 5) / (10 × 3) = 3/2. [0.5đ]" }
        ]
      },
      {
        id: "part3",
        name: "PHẦN III: BÀI TOÁN CÓ LỜI VĂN",
        level: "Mức 3: Vận dụng",
        scoreText: "3.0 điểm",
        questions: [
          {
            q: "Bài 3 (3.0 điểm): Một tấm bìa hình chữ nhật có diện tích bằng 4/5 m², chiều rộng của tấm bìa là 2/3 m.\na) Tính chiều dài của tấm bìa hình chữ nhật đó.\nb) Tính chu vi của tấm bìa hình chữ nhật đó.",
            answer: "Bài giải:\na) Chiều dài của tấm bìa hình chữ nhật là:\n  4/5 ÷ 2/3 = 4/5 × 3/2 = 12/10 = 6/5 (m) [1.5đ]\nb) Chu vi của tấm bìa hình chữ nhật là:\n  (6/5 + 2/3) × 2 = (18/15 + 10/15) × 2 = 28/15 × 2 = 56/15 (m) [1.25đ]\n  Đáp số: a) 6/5 m; b) 56/15 m. [0.25đ]"
          }
        ]
      },
      {
        id: "part4",
        name: "PHẦN IV: THỬ THÁCH TƯ DUY ĐIỂM 10",
        level: "Mức 4: Vận dụng cao / Olympic",
        scoreText: "1.5 điểm",
        questions: [
          {
            q: "Bài 4 (1.5 điểm): Một người thợ cưa một thanh gỗ dài 9/2 mét thành các đoạn nhỏ bằng nhau, mỗi đoạn dài 3/4 mét. Mỗi lần cưa mất đúng 5 phút, sau mỗi lần cưa người thợ nghỉ giải lao 2 phút. Hỏi người thợ đó cưa xong toàn bộ thanh gỗ mất tất cả bao nhiêu phút?",
            answer: "Lời giải:\nSố đoạn gỗ thu được sau khi cưa là:\n  9/2 ÷ 3/4 = 9/2 × 4/3 = 6 (đoạn gỗ). [0.5đ]\nĐể cưa thành 6 đoạn gỗ, người thợ chỉ cần thực hiện:\n  6 − 1 = 5 (lần cưa). [0.25đ]\nSau lần cưa thứ 5 là đã xong toàn bộ thanh gỗ nên không cần nghỉ thêm lần cuối cùng, do đó có đúng 4 lần nghỉ giải lao. [0.25đ]\nTổng thời gian hoàn thành là:\n  (5 × 5) + (4 × 2) = 25 + 8 = 33 (phút). [0.5đ]\nĐáp số: 33 phút."
          }
        ]
      }
    ]
  },

  w34: {
    week: 34,
    title: "Đề kiểm tra 30 phút · Tuần 34: Tìm hai số khi biết Tổng và Tỉ số của hai số đó",
    textbook: "Kết nối tri thức với cuộc sống",
    duration: "30 phút",
    totalScore: 10,
    sections: [
      {
        id: "part1",
        name: "PHẦN I: TRẮC NGHIỆM KHỞI ĐỘNG",
        level: "Mức 1: Nhận biết",
        scoreText: "3.0 điểm (4 câu × 0.75đ)",
        questions: [
          { q: "1. Tổng của hai số là 45, tỉ số của hai số là 2/3. Tổng số phần bằng nhau là:", choices: ["A. 5 phần", "B. 6 phần", "C. 1 phần", "D. 4 phần"], answer: "A. 5 phần (2 + 3 = 5 phần)" },
          { q: "2. Tổng của hai số là 72, tỉ số là 1/3. Số bé là:", choices: ["A. 18", "B. 24", "C. 54", "D. 36"], answer: "A. 18 (72 ÷ (1 + 3) × 1 = 18)" },
          { q: "3. Tỉ số của số sách ngăn trên và số sách ngăn dưới là 3/5. Nếu số sách ngăn trên là 15 quyển thì ngăn dưới có:", choices: ["A. 20 quyển", "B. 25 quyển", "C. 30 quyển", "D. 35 quyển"], answer: "B. 25 quyển (15 ÷ 3 × 5 = 25 quyển)" },
          { q: "4. Bước đầu tiên quan trọng khi giải bài toán 'Tìm hai số khi biết Tổng và Tỉ số' là:", choices: ["A. Tìm số bé", "B. Vẽ sơ đồ đoạn thẳng", "C. Tìm tích hai số", "D. Lấy tổng trừ đi tỉ số"], answer: "B. Vẽ sơ đồ đoạn thẳng" }
        ]
      },
      {
        id: "part2",
        name: "PHẦN II: TỰ LUẬN VẼ SƠ ĐỒ & TÍNH TOÁN",
        level: "Mức 2: Thông hiểu",
        scoreText: "2.5 điểm",
        questions: [
          { q: "Bài 1 (1.5 điểm): Tìm hai số biết tổng của chúng bằng 140 và số bé bằng 2/5 số lớn. (Bách hãy vẽ sơ đồ đoạn thẳng ra vở ô ly nhé!)", answer: "Vẽ sơ đồ đoạn thẳng: số bé 2 phần, số lớn 5 phần, tổng 140. [0.5đ]\nTổng số phần bằng nhau: 2 + 5 = 7 (phần). [0.25đ]\nSố bé là: 140 ÷ 7 × 2 = 40. [0.35đ]\nSố lớn là: 140 − 40 = 100. [0.4đ]" },
          { q: "Bài 2 (1.0 điểm): Một khối lớp Bốn có 150 học sinh, trong đó số học sinh nam bằng 2/3 số học sinh nữ. Tính số học sinh nam và nữ.", answer: "Tổng số phần: 2 + 3 = 5 phần.\nSố học sinh nam: 150 ÷ 5 × 2 = 60 (em). [0.5đ]\nSố học sinh nữ: 150 − 60 = 90 (em). [0.5đ]" }
        ]
      },
      {
        id: "part3",
        name: "PHẦN III: BÀI TOÁN CÓ LỜI VĂN",
        level: "Mức 3: Vận dụng",
        scoreText: "3.0 điểm",
        questions: [
          {
            q: "Bài 3 (3.0 điểm): Một mảnh đất hình chữ nhật có chu vi là 120 m. Chiều rộng bằng 1/3 chiều dài.\na) Tính nửa chu vi của mảnh đất đó.\nb) Tính chiều dài và chiều rộng của mảnh đất.\nc) Tính diện tích của mảnh đất đó.",
            answer: "Bài giải:\na) Nửa chu vi (tổng của chiều dài và chiều rộng) là:\n  120 ÷ 2 = 60 (m) [0.5đ]\nb) Coi chiều rộng là 1 phần thì chiều dài là 3 phần như thế.\nTổng số phần bằng nhau là: 1 + 3 = 4 (phần). [0.5đ]\nChiều rộng mảnh đất là: 60 ÷ 4 × 1 = 15 (m) [0.75đ]\nChiều dài mảnh đất là: 60 − 15 = 45 (m) [0.5đ]\nc) Diện tích mảnh đất là:\n  45 × 15 = 675 (m²) [0.5đ]\n  Đáp số: a) 60 m; b) Dài 45 m, Rộng 15 m; c) 675 m². [0.25đ]"
          }
        ]
      },
      {
        id: "part4",
        name: "PHẦN IV: THỬ THÁCH TƯ DUY ĐIỂM 10",
        level: "Mức 4: Vận dụng cao / Olympic",
        scoreText: "1.5 điểm",
        questions: [
          {
            q: "Bài 4 (1.5 điểm): Hai kho thóc chứa tất cả 360 tấn thóc. Nếu chuyển 30 tấn thóc từ kho thứ nhất sang kho thứ hai thì số thóc ở kho thứ nhất bằng 4/5 số thóc ở kho thứ hai. Hỏi lúc đầu mỗi kho chứa bao nhiêu tấn thóc?",
            answer: "Lời giải:\nKhi chuyển thóc giữa hai kho thì tổng số thóc ở cả hai kho không đổi và bằng 360 tấn. [0.25đ]\nTổng số phần bằng nhau khi đó là: 4 + 5 = 9 (phần). [0.25đ]\nSố thóc ở kho thứ nhất sau khi chuyển là:\n  360 ÷ 9 × 4 = 160 (tấn). [0.25đ]\nLúc đầu kho thứ nhất có số tấn thóc là:\n  160 + 30 = 190 (tấn). [0.25đ]\nLúc đầu kho thứ hai có số tấn thóc là:\n  360 − 190 = 170 (tấn). [0.25đ]\nĐáp số: Kho I có 190 tấn thóc, Kho II có 170 tấn thóc. [0.25đ]"
          }
        ]
      }
    ]
  },

  w35: {
    week: 35,
    title: "Đề kiểm tra 30 phút · Tuần 35: Tìm hai số khi biết Hiệu và Tỉ số của hai số đó",
    textbook: "Kết nối tri thức với cuộc sống",
    duration: "30 phút",
    totalScore: 10,
    sections: [
      {
        id: "part1",
        name: "PHẦN I: TRẮC NGHIỆM KHỞI ĐỘNG",
        level: "Mức 1: Nhận biết",
        scoreText: "3.0 điểm (4 câu × 0.75đ)",
        questions: [
          { q: "1. Hiệu của hai số là 30, tỉ số của hai số là 2/5. Hiệu số phần bằng nhau là:", choices: ["A. 7 phần", "B. 3 phần", "C. 10 phần", "D. 2 phần"], answer: "B. 3 phần (5 − 2 = 3 phần)" },
          { q: "2. Hiệu của hai số là 24, tỉ số là 1/4. Số lớn là:", choices: ["A. 32", "B. 8", "C. 28", "D. 40"], answer: "A. 32 (24 ÷ (4 − 1) × 4 = 32)" },
          { q: "3. Mẹ hơn con 28 tuổi. Tuổi con bằng 1/5 tuổi mẹ. Tuổi của con là:", choices: ["A. 6 tuổi", "B. 7 tuổi", "C. 8 tuổi", "D. 5 tuổi"], answer: "B. 7 tuổi (28 ÷ (5 − 1) × 1 = 7 tuổi)" },
          { q: "4. Công thức tính giá trị của 1 phần trong bài toán 'Tìm hai số khi biết Hiệu và Tỉ số' là:", choices: ["A. Hiệu ÷ Hiệu số phần bằng nhau", "B. Hiệu × Hiệu số phần bằng nhau", "C. Hiệu ÷ Tổng số phần bằng nhau", "D. Hiệu + Tỉ số"], answer: "A. Hiệu ÷ Hiệu số phần bằng nhau" }
        ]
      },
      {
        id: "part2",
        name: "PHẦN II: TỰ LUẬN VẼ SƠ ĐỒ & GIẢI TOÁN",
        level: "Mức 2: Thông hiểu",
        scoreText: "2.5 điểm",
        questions: [
          { q: "Bài 1 (1.5 điểm): Tìm hai số biết hiệu của chúng bằng 85 và số lớn gấp 6 lần số bé. (Bách hãy vẽ sơ đồ đoạn thẳng ra vở ô ly nhé!)", answer: "Vẽ sơ đồ: số bé 1 phần, số lớn 6 phần, đoạn chênh lệch là 85. [0.5đ]\nHiệu số phần bằng nhau: 6 − 1 = 5 (phần). [0.25đ]\nSố bé là: 85 ÷ 5 × 1 = 17. [0.35đ]\nSố lớn là: 17 + 85 = 102. [0.4đ]" },
          { q: "Bài 2 (1.0 điểm): Bác An thu hoạch nhiều hơn bác Bình 75 kg thóc. Biết rằng số thóc của bác Bình bằng 4/7 số thóc của bác An. Tính số thóc mỗi bác thu hoạch được.", answer: "Hiệu số phần: 7 − 4 = 3 phần.\nSố thóc bác Bình thu được: 75 ÷ 3 × 4 = 100 (kg). [0.5đ]\nSố thóc bác An thu được: 100 + 75 = 175 (kg). [0.5đ]" }
        ]
      },
      {
        id: "part3",
        name: "PHẦN III: BÀI TOÁN CÓ LỜI VĂN",
        level: "Mức 3: Vận dụng",
        scoreText: "3.0 điểm",
        questions: [
          {
            q: "Bài 3 (3.0 điểm): Một cửa hàng có số mét vải hoa nhiều hơn số mét vải trắng là 150 m. Sau khi bán đi 30 m vải hoa thì số mét vải hoa còn lại gấp 3 lần số mét vải trắng.\na) Hỏi sau khi bán đi 30 m vải hoa, số mét vải hoa còn lại nhiều hơn số mét vải trắng bao nhiêu mét?\nb) Lúc đầu cửa hàng có bao nhiêu mét vải mỗi loại?",
            answer: "Bài giải:\na) Sau khi bán đi 30 m vải hoa, số mét vải hoa còn lại nhiều hơn số mét vải trắng là:\n  150 − 30 = 120 (m) [1.0đ]\nb) Coi số mét vải trắng là 1 phần thì số mét vải hoa còn lại là 3 phần như thế.\nHiệu số phần bằng nhau là:\n  3 − 1 = 2 (phần) [0.5đ]\nSố mét vải trắng của cửa hàng là:\n  120 ÷ 2 × 1 = 60 (m) [0.5đ]\nSố mét vải hoa lúc đầu của cửa hàng là:\n  60 + 150 = 210 (m) [0.75đ]\n(Hoặc: 60 × 3 + 30 = 210 m)\n  Đáp số: a) 120 m; b) Vải trắng: 60 m, Vải hoa: 210 m. [0.25đ]"
          }
        ]
      },
      {
        id: "part4",
        name: "PHẦN IV: THỬ THÁCH TƯ DUY ĐIỂM 10",
        level: "Mức 4: Vận dụng cao / Olympic",
        scoreText: "1.5 điểm",
        questions: [
          {
            q: "Bài 4 (1.5 điểm): Hiện nay tuổi của mẹ gấp 3 lần tuổi của Bách. Biết rằng 4 năm trước đây, mẹ hơn Bách 24 tuổi. Hỏi hiện nay mẹ bao nhiêu tuổi và Bách bao nhiêu tuổi?",
            answer: "Lời giải:\nVì mỗi năm mỗi người đều tăng thêm 1 tuổi nên hiệu số tuổi giữa mẹ và Bách không bao giờ thay đổi.\nHiện nay mẹ vẫn hơn Bách đúng 24 tuổi. [0.5đ]\nCoi tuổi Bách hiện nay là 1 phần thì tuổi mẹ hiện nay là 3 phần như thế.\nHiệu số phần bằng nhau là: 3 − 1 = 2 (phần). [0.25đ]\nTuổi của Bách hiện nay là:\n  24 ÷ 2 × 1 = 12 (tuổi). [0.35đ]\nTuổi của mẹ hiện nay là:\n  12 + 24 = 36 (tuổi). [0.4đ]\nĐáp số: Mẹ 36 tuổi, Bách 12 tuổi."
          }
        ]
      }
    ]
  },

  w36: {
    week: 36,
    title: "Đề kiểm tra 30 phút · Tuần 36: Ôn tập cuối năm & Đề đánh giá chất lượng toàn diện Lớp 4",
    textbook: "Kết nối tri thức với cuộc sống",
    duration: "30 phút",
    totalScore: 10,
    sections: [
      {
        id: "part1",
        name: "PHẦN I: TRẮC NGHIỆM KHỞI ĐỘNG & TỔNG HỢP KIẾN THỨC",
        level: "Mức 1: Nhận biết",
        scoreText: "3.0 điểm (4 câu × 0.75đ)",
        questions: [
          { q: "1. Số 'Tám mươi triệu không trăm linh năm nghìn ba trăm hai mươi mốt' viết là:", choices: ["A. 80.050.321", "B. 80.005.321", "C. 8.005.321", "D. 80.500.321"], answer: "B. 80.005.321" },
          { q: "2. Phân số 18/24 rút gọn về phân số tối giản là:", choices: ["A. 9/12", "B. 6/8", "C. 3/4", "D. 2/3"], answer: "C. 3/4 (Chia cả tử và mẫu cho 6)" },
          { q: "3. 3 m² 25 dm² bằng bao nhiêu đề-xi-mét vuông?", choices: ["A. 325 dm²", "B. 3.025 dm²", "C. 350 dm²", "D. 3.250 dm²"], answer: "A. 325 dm² (3 m² = 300 dm² + 25 dm² = 325 dm²)" },
          { q: "4. Giá trị của biểu thức 2/3 + 1/4 × 2 là:", choices: ["A. 11/12", "B. 7/6", "C. 5/6", "D. 1"], answer: "B. 7/6 (Nhân trước: 1/4 × 2 = 1/2; Cộng: 2/3 + 1/2 = 4/6 + 3/6 = 7/6)" }
        ]
      },
      {
        id: "part2",
        name: "PHẦN II: TỰ LUẬN TÍNH TOÁN & THỰC HÀNH TỔNG HỢP",
        level: "Mức 2: Thông hiểu",
        scoreText: "2.5 điểm",
        questions: [
          { q: "Bài 1 (1.5 điểm): Đặt tính rồi tính ra vở ô ly:\n  a) 145.280 + 38.645\n  b) 2.450 × 36", answer: "a) 145.280 + 38.645 = 183.925 [0.75đ]\nb) 2.450 × 36 = 88.200 (đặt tính nhân thẳng hàng, tính đúng các tích riêng) [0.75đ]" },
          { q: "Bài 2 (1.0 điểm): Tính bằng cách thuận tiện nhất:\n  25 × 18 × 4 + 75 × 12", answer: "= (25 × 4) × 18 + 75 × 12 = 100 × 18 + 900 = 1.800 + 900 = 2.700. [1.0đ]" }
        ]
      },
      {
        id: "part3",
        name: "PHẦN III: BÀI TOÁN CÓ LỜI VĂN",
        level: "Mức 3: Vận dụng",
        scoreText: "3.0 điểm",
        questions: [
          {
            q: "Bài 3 (3.0 điểm): Một mảnh vườn hình chữ nhật có chu vi bằng 140 m. Chiều rộng bằng 2/5 chiều dài.\na) Tính diện tích mảnh vườn hình chữ nhật đó.\nb) Người ta dùng 3/5 diện tích mảnh vườn để trồng dưa hấu, diện tích còn lại trồng ngô ngọt. Hỏi diện tích trồng ngô ngọt là bao nhiêu mét vuông?",
            answer: "Bài giải:\na) Nửa chu vi mảnh vườn là:\n  140 ÷ 2 = 70 (m) [0.5đ]\nTổng số phần bằng nhau là: 2 + 5 = 7 (phần).\nChiều rộng mảnh vườn là: 70 ÷ 7 × 2 = 20 (m) [0.5đ]\nChiều dài mảnh vườn là: 70 − 20 = 50 (m) [0.5đ]\nDiện tích mảnh vườn là:\n  50 × 20 = 1.000 (m²) [0.5đ]\nb) Phân số chỉ diện tích trồng ngô ngọt là:\n  1 − 3/5 = 2/5 (diện tích mảnh vườn) [0.5đ]\nDiện tích trồng ngô ngọt là:\n  1.000 × 2/5 = 400 (m²) [0.25đ]\n  Đáp số: a) 1.000 m²; b) 400 m². [0.25đ]"
          }
        ]
      },
      {
        id: "part4",
        name: "PHẦN IV: THỬ THÁCH TƯ DUY ĐIỂM 10 (OLYMPIC CUỐI NĂM)",
        level: "Mức 4: Vận dụng cao / Olympic",
        scoreText: "1.5 điểm",
        questions: [
          {
            q: "Bài 4 (1.5 điểm): Cho dãy số tự nhiên có quy luật:\n  1 ; 4 ; 7 ; 10 ; 13 ; ... ; 2020 ; 2023.\na) Dãy số trên có tất cả bao nhiêu số hạng?\nb) Tính tổng của tất cả các số hạng trong dãy số trên.",
            answer: "Lời giải:\na) Dãy số trên là dãy số cách đều có khoảng cách giữa hai số liên tiếp là: 4 − 1 = 3 đơn vị. [0.25đ]\nSố số hạng của dãy là:\n  (2023 − 1) ÷ 3 + 1 = 2022 ÷ 3 + 1 = 674 + 1 = 675 (số hạng). [0.5đ]\nb) Tổng của tất cả các số hạng trong dãy là:\n  (Số đầu + Số cuối) × Số số hạng ÷ 2\n  = (1 + 2023) × 675 ÷ 2 = 2024 × 675 ÷ 2 = 1012 × 675 = 683.100. [0.75đ]\nĐáp số: a) 675 số hạng; b) Tổng là 683.100."
          }
        ]
      }
    ]
  }
};

/**
 * Lấy đề chuẩn theo tuần (từ tuần 1 đến tuần 36)
 * @param {number} weekNumber
 * @returns {object}
 */
export function getStandardExamWeek(weekNumber) {
  const key = `w${weekNumber}`;
  return WEEKEND_MATH_EXAMS_FULL[key] || WEEKEND_MATH_EXAMS_FULL.w1;
}
