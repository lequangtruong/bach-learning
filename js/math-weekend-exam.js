// Ngân hàng Đề thi Định kỳ 30 phút Môn Toán Lớp 4 (Bộ sách Kết nối tri thức với cuộc sống)
// Tối ưu hiển thị cho iPad Pro 11 inch & Cung cấp Barem chuẩn cho Gemini đọc ảnh vở ô ly

export const WEEKEND_MATH_EXAMS = {
  w1: {
    week: 1,
    title: "Đề kiểm tra 30 phút · Tuần 1: Ôn tập các số đến 100.000",
    textbook: "Kết nối tri thức với cuộc sống",
    duration: "30 phút",
    totalScore: 10,
    sections: [
      {
        id: "part1",
        name: "PHẦN I: TRẮC NGHIỆM KHỞI ĐỘNG",
        level: "Mức 1: Nhận biết (Dễ)",
        scoreText: "3.0 điểm (4 câu × 0.75đ)",
        questions: [
          { q: "1. Số 'Tám mươi lăm nghìn không trăm bốn mươi' được viết là:", choices: ["A. 85.400", "B. 85.040", "C. 85.004", "D. 85.440"], answer: "B. 85.040" },
          { q: "2. Số gồm 7 chục nghìn, 3 trăm và 5 đơn vị viết là:", choices: ["A. 70.305", "B. 73.050", "C. 7.305", "D. 70.350"], answer: "A. 70.305" },
          { q: "3. Điền dấu thích hợp: 48.500 ... 48.099", choices: ["A. <", "B. >", "C. =", "D. Không so sánh được"], answer: "B. >" },
          { q: "4. Làm tròn số 27.650 đến hàng nghìn ta được số:", choices: ["A. 27.000", "B. 27.600", "C. 28.000", "D. 30.000"], answer: "C. 28.000" }
        ]
      },
      {
        id: "part2",
        name: "PHẦN II: TỰ LUẬN TÍNH TOÁN & ĐẶT TÍNH",
        level: "Mức 2: Thông hiểu (Vừa sức)",
        scoreText: "2.5 điểm",
        questions: [
          { q: "Bài 1 (1.5 điểm): Đặt tính rồi tính ra vở ô ly (yêu cầu viết chữ số thẳng hàng thẳng cột):\n  a) 46.218 + 27.534\n  b) 83.560 − 39.245", answer: "a) 46.218 + 27.534 = 73.752 (đặt tính thẳng cột, nhớ 1 sang hàng chục và hàng chục nghìn)\nb) 83.560 − 39.245 = 44.315 (đặt tính thẳng cột, mượn 1 ở hàng chục và hàng chục nghìn)" },
          { q: "Bài 2 (1.0 điểm): Tính nhẩm nhanh:\n  a) 40.000 + 30.000 = ?\n  b) 100.000 − 45.000 = ?", answer: "a) 70.000\nb) 55.000" }
        ]
      },
      {
        id: "part3",
        name: "PHẦN III: BÀI TOÁN CÓ LỜI VĂN",
        level: "Mức 3: Vận dụng (Khá)",
        scoreText: "3.0 điểm",
        questions: [
          {
            q: "Bài 3 (3.0 điểm): Bách có 90.000 đồng tiền tiết kiệm. Bách mua một bộ thước kẻ hết 25.000 đồng và một hộp bút sáp màu hết 45.000 đồng. Hỏi sau khi mua hai món đồ trên, Bách còn lại bao nhiêu tiền?",
            answer: "Bài giải mẫu:\nCách 1:\nSố tiền Bách đã mua thước kẻ và hộp bút là:\n  25.000 + 45.000 = 70.000 (đồng) [1.0đ]\nSố tiền Bách còn lại là:\n  90.000 − 70.000 = 20.000 (đồng) [1.5đ]\n  Đáp số: 20.000 đồng [0.5đ]\n(Chấp nhận cách giải gộp: 90.000 − 25.000 − 45.000 = 20.000 đồng đầy đủ câu lời giải)"
          }
        ]
      },
      {
        id: "part4",
        name: "PHẦN IV: THỬ THÁCH TƯ DUY ĐIỂM 10",
        level: "Mức 4: Vận dụng cao / Olympic (Thử thách)",
        scoreText: "1.5 điểm",
        questions: [
          {
            q: "Bài 4 (1.5 điểm): Cho 4 thẻ số: 5, 0, 7, 2. Hãy lập tất cả các số có 4 chữ số khác nhau lớn hơn 7.000 từ 4 thẻ số đã cho.",
            answer: "Lời giải:\nVì số cần tìm lớn hơn 7.000 và có 4 chữ số khác nhau từ 4 thẻ (5, 0, 7, 2) nên chữ số hàng nghìn bắt buộc phải là 7.\nCác chữ số còn lại ở hàng trăm, chục, đơn vị là hoán vị của {0, 2, 5}:\n  7.025 ; 7.052 ; 7.205 ; 7.250 ; 7.502 ; 7.520.\nKết luận: Lập được đúng 6 số."
          }
        ]
      }
    ]
  },

  w2: {
    week: 2,
    title: "Đề kiểm tra 30 phút · Tuần 2: Cộng, trừ và biểu thức có chữ",
    textbook: "Kết nối tri thức với cuộc sống",
    duration: "30 phút",
    totalScore: 10,
    sections: [
      {
        id: "part1",
        name: "PHẦN I: TRẮC NGHIỆM KHỞI ĐỘNG",
        level: "Mức 1: Nhận biết (Dễ)",
        scoreText: "3.0 điểm (4 câu × 0.75đ)",
        questions: [
          { q: "1. Giá trị của biểu thức 45 + a với a = 15 là:", choices: ["A. 50", "B. 60", "C. 55", "D. 70"], answer: "B. 60" },
          { q: "2. Phép tính nào có kết quả bằng 1.000?", choices: ["A. 650 + 340", "B. 720 + 280", "C. 810 + 200", "D. 450 + 450"], answer: "B. 720 + 280" },
          { q: "3. Hiệu của 540 và 199 nhẩm nhanh bằng cách bù tròn là:", choices: ["A. 540 − 200 + 1 = 341", "B. 540 − 200 − 1 = 339", "C. 340", "D. 351"], answer: "A. 540 − 200 + 1 = 341" },
          { q: "4. Với m = 8 thì giá trị của biểu thức 120 − m × 5 là:", choices: ["A. 560", "B. 80", "C. 160", "D. 40"], answer: "B. 80 (thực hiện phép nhân m × 5 = 40 trước, rồi 120 − 40 = 80)" }
        ]
      },
      {
        id: "part2",
        name: "PHẦN II: TỰ LUẬN TÍNH TOÁN & ĐẶT TÍNH",
        level: "Mức 2: Thông hiểu (Vừa sức)",
        scoreText: "2.5 điểm",
        questions: [
          { q: "Bài 1 (1.5 điểm): Đặt tính rồi tính thẳng hàng ra vở ô ly:\n  a) 52.839 + 38.476\n  b) 71.405 − 28.638", answer: "a) 52.839 + 38.476 = 91.315\nb) 71.405 − 28.638 = 42.767" },
          { q: "Bài 2 (1.0 điểm): Tính bằng cách thuận tiện nhất:\n  198 + 326 + 402", answer: "= (198 + 402) + 326 = 600 + 326 = 926" }
        ]
      },
      {
        id: "part3",
        name: "PHẦN III: BÀI TOÁN CÓ LỜI VĂN",
        level: "Mức 3: Vận dụng (Khá)",
        scoreText: "3.0 điểm",
        questions: [
          {
            q: "Bài 3 (3.0 điểm): Thư viện trường tiểu học có 1.250 quyển sách. Đợt một thư viện nhập thêm 380 quyển sách, đợt hai nhập thêm 620 quyển sách nữa. Hỏi sau hai đợt nhập, thư viện có tất cả bao nhiêu quyển sách? (Hãy chọn cách tính thuận tiện nhất)",
            answer: "Bài giải mẫu:\nSau hai đợt thư viện nhập thêm số quyển sách là:\n  380 + 620 = 1.000 (quyển) [1.25đ]\nSố quyển sách thư viện có tất cả là:\n  1.250 + 1.000 = 2.250 (quyển) [1.25đ]\n  Đáp số: 2.250 quyển sách. [0.5đ]"
          }
        ]
      },
      {
        id: "part4",
        name: "PHẦN IV: THỬ THÁCH TƯ DUY ĐIỂM 10",
        level: "Mức 4: Vận dụng cao / Olympic (Thử thách)",
        scoreText: "1.5 điểm",
        questions: [
          {
            q: "Bài 4 (1.5 điểm): Không thực hiện đặt tính, hãy so sánh giá trị của hai biểu thức sau và giải thích vì sao:\n  A = 198 + 402\n  B = 200 + 400",
            answer: "Lời giải:\nTa có: A = 198 + 402 = (200 − 2) + (400 + 2) = 200 + 400 = B.\nVậy A = B."
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
        level: "Mức 1: Nhận biết (Dễ)",
        scoreText: "3.0 điểm (4 câu × 0.75đ)",
        questions: [
          { q: "1. Tích của 25 × 4 là:", choices: ["A. 50", "B. 75", "C. 100", "D. 125"], answer: "C. 100" },
          { q: "2. Trong dãy số tự nhiên 1, 2, 3, 4, 5, ..., hai số tự nhiên liên tiếp hơn kém nhau:", choices: ["A. 1 đơn vị", "B. 2 đơn vị", "C. 10 đơn vị", "D. 0 đơn vị"], answer: "A. 1 đơn vị" },
          { q: "3. Số tự nhiên bé nhất là:", choices: ["A. 1", "B. 0", "C. 10", "D. Không có"], answer: "B. 0" },
          { q: "4. Nhẩm nhanh 45 × 11 bằng cách lấy 45 × 10 + 45 được kết quả là:", choices: ["A. 455", "B. 495", "C. 545", "D. 505"], answer: "B. 495" }
        ]
      },
      {
        id: "part2",
        name: "PHẦN II: TỰ LUẬN TÍNH TOÁN & ĐẶT TÍNH",
        level: "Mức 2: Thông hiểu (Vừa sức)",
        scoreText: "2.5 điểm",
        questions: [
          { q: "Bài 1 (1.5 điểm): Đặt tính rồi tính ra vở ô ly:\n  a) 1.428 × 6\n  b) 2.054 × 4", answer: "a) 1.428 × 6 = 8.568\nb) 2.054 × 4 = 8.216" },
          { q: "Bài 2 (1.0 điểm): Tính bằng cách thuận tiện nhất:\n  15 × 6 + 15 × 4", answer: "= 15 × (6 + 4) = 15 × 10 = 150" }
        ]
      },
      {
        id: "part3",
        name: "PHẦN III: BÀI TOÁN CÓ LỜI VĂN",
        level: "Mức 3: Vận dụng (Khá)",
        scoreText: "3.0 điểm",
        questions: [
          {
            q: "Bài 3 (3.0 điểm): Một cửa hàng văn phòng phẩm có 15 hộp bút sáp màu, mỗi hộp có 12 chiếc bút. Cửa hàng đã bán được 80 chiếc bút. Hỏi cửa hàng còn lại bao nhiêu chiếc bút sáp màu?",
            answer: "Bài giải mẫu:\nTổng số chiếc bút sáp màu trong 15 hộp là:\n  15 × 12 = 180 (chiếc) [1.5đ]\nSố chiếc bút sáp màu cửa hàng còn lại là:\n  180 − 80 = 100 (chiếc) [1.0đ]\n  Đáp số: 100 chiếc bút. [0.5đ]"
          }
        ]
      },
      {
        id: "part4",
        name: "PHẦN IV: THỬ THÁCH TƯ DUY ĐIỂM 10",
        level: "Mức 4: Vận dụng cao / Olympic (Thử thách)",
        scoreText: "1.5 điểm",
        questions: [
          {
            q: "Bài 4 (1.5 điểm): Tìm số tự nhiên x biết: x ÷ 4 = 25 × 2.",
            answer: "Lời giải:\n  x ÷ 4 = 50\n  x = 50 × 4\n  x = 200.\nThử lại: 200 ÷ 4 = 50 (đúng)."
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
        level: "Mức 1: Nhận biết (Dễ)",
        scoreText: "3.0 điểm (4 câu × 0.75đ)",
        questions: [
          { q: "1. Thương và số dư của phép chia 53 ÷ 7 là:", choices: ["A. 7 dư 4", "B. 7 dư 3", "C. 8 dư 1", "D. 7 dư 5"], answer: "A. 7 dư 4 (vì 7 × 7 + 4 = 53)" },
          { q: "2. Trong phép chia có dư với số chia là 6, số dư lớn nhất có thể là:", choices: ["A. 6", "B. 5", "C. 4", "D. 7"], answer: "B. 5 (số dư luôn nhỏ hơn số chia)" },
          { q: "3. Làm tròn số 648.200 đến hàng trăm nghìn ta được số:", choices: ["A. 640.000", "B. 650.000", "C. 600.000", "D. 700.000"], answer: "C. 600.000" },
          { q: "4. Kết quả của phép chia nhẩm 140 ÷ 5 là:", choices: ["A. 24", "B. 28", "C. 35", "D. 25"], answer: "B. 28" }
        ]
      },
      {
        id: "part2",
        name: "PHẦN II: TỰ LUẬN TÍNH TOÁN & ĐẶT TÍNH",
        level: "Mức 2: Thông hiểu (Vừa sức)",
        scoreText: "2.5 điểm",
        questions: [
          { q: "Bài 1 (1.5 điểm): Đặt tính rồi tính ra vở ô ly:\n  a) 4.356 ÷ 3\n  b) 7.528 ÷ 5 (nêu rõ thương và số dư)", answer: "a) 4.356 ÷ 3 = 1.452 (chia hết)\nb) 7.528 ÷ 5 = 1.505 dư 3 (thử lại: 1.505 × 5 + 3 = 7.528)" },
          { q: "Bài 2 (1.0 điểm): Tìm y biết:\n  y × 6 = 72 + 24", answer: "y × 6 = 96\ny = 96 ÷ 6\ny = 16" }
        ]
      },
      {
        id: "part3",
        name: "PHẦN III: BÀI TOÁN CÓ LỜI VĂN",
        level: "Mức 3: Vận dụng (Khá)",
        scoreText: "3.0 điểm",
        questions: [
          {
            q: "Bài 3 (3.0 điểm): Bác thợ may có một cuộn vải dài 46 m. Mỗi bộ quần áo may hết 3 m vải.\n  a) Hỏi bác may được nhiều nhất bao nhiêu bộ quần áo và còn thừa mấy mét vải?\n  b) Bác cần thêm ít nhất bao nhiêu mét vải nữa để may thêm được đúng 1 bộ quần áo nữa?",
            answer: "Bài giải mẫu:\na) Thực hiện phép chia: 46 ÷ 3 = 15 (dư 1) [1.5đ]\nVậy bác may được nhiều nhất 15 bộ quần áo và còn thừa 1 m vải. [0.5đ]\nb) Để may thêm 1 bộ quần áo hết 3 m vải, số mét vải cần thêm là:\n  3 − 1 = 2 (m) [0.5đ]\n  Đáp số: a) 15 bộ, thừa 1 m vải; b) 2 m vải. [0.5đ]"
          }
        ]
      },
      {
        id: "part4",
        name: "PHẦN IV: THỬ THÁCH TƯ DUY ĐIỂM 10",
        level: "Mức 4: Vận dụng cao / Olympic (Thử thách)",
        scoreText: "1.5 điểm",
        questions: [
          {
            q: "Bài 4 (1.5 điểm): Tìm một số tự nhiên biết rằng nếu lấy số đó chia cho 6 rồi cộng với 15 thì được kết quả đúng bằng 25.",
            answer: "Lời giải (Phương pháp tính ngược từ cuối):\nSố đó chia cho 6 được kết quả là:\n  25 − 15 = 10\nSố cần tìm là:\n  10 × 6 = 60.\nThử lại: 60 ÷ 6 + 15 = 10 + 15 = 25 (đúng)."
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
        level: "Mức 1: Nhận biết (Dễ)",
        scoreText: "3.0 điểm (4 câu × 0.75đ)",
        questions: [
          { q: "1. Chữ số 7 trong số 574.820 thuộc hàng nào, lớp nào?", choices: ["A. Hàng chục nghìn, lớp nghìn", "B. Hàng nghìn, lớp nghìn", "C. Hàng trăm nghìn, lớp nghìn", "D. Hàng chục, lớp đơn vị"], answer: "A. Hàng chục nghìn, lớp nghìn" },
          { q: "2. Lớp nghìn của số 603.549 gồm các chữ số:", choices: ["A. 5, 4, 9", "B. 6, 0, 3", "C. 6, 3, 5", "D. 0, 3, 5"], answer: "B. 6, 0, 3 (hàng trăm nghìn: 6, hàng chục nghìn: 0, hàng nghìn: 3)" },
          { q: "3. Số liền trước của số 1.000.000 là:", choices: ["A. 99.999", "B. 999.990", "C. 999.999", "D. 1.000.001"], answer: "C. 999.999" },
          { q: "4. Giá trị của biểu thức 50 + 50 × 2 là:", choices: ["A. 200", "B. 150", "C. 100", "D. 120"], answer: "B. 150 (thực hiện nhân trước: 50 × 2 = 100, rồi cộng: 50 + 100 = 150)" }
        ]
      },
      {
        id: "part2",
        name: "PHẦN II: TỰ LUẬN TÍNH TOÁN & ĐẶT TÍNH",
        level: "Mức 2: Thông hiểu (Vừa sức)",
        scoreText: "2.5 điểm",
        questions: [
          { q: "Bài 1 (1.5 điểm): Viết số rồi đặt tính và tính ra vở ô ly:\n  a) Số gồm 4 trăm nghìn, 5 chục nghìn, 2 trăm và 6 đơn vị là số nào?\n  b) Đặt tính rồi tính: 358.420 + 246.735", answer: "a) Số đó là: 450.206 [0.5đ]\nb) Đặt tính thẳng hàng: 358.420 + 246.735 = 605.155 [1.0đ]" },
          { q: "Bài 2 (1.0 điểm): Tính giá trị biểu thức:\n  (80 − 20) ÷ 3 + 15 × 4", answer: "= 60 ÷ 3 + 60 = 20 + 60 = 80" }
        ]
      },
      {
        id: "part3",
        name: "PHẦN III: BÀI TOÁN CÓ LỜI VĂN",
        level: "Mức 3: Vận dụng (Khá)",
        scoreText: "3.0 điểm",
        questions: [
          {
            q: "Bài 3 (3.0 điểm): Mẹ mua 3 hộp bánh cùng loại, mỗi hộp giá 35.000 đồng và đưa cho cô bán hàng một tờ tiền mệnh giá 200.000 đồng. Hỏi cô bán hàng phải trả lại mẹ bao nhiêu tiền?",
            answer: "Bài giải mẫu:\nSố tiền mẹ mua 3 hộp bánh là:\n  35.000 × 3 = 105.000 (đồng) [1.25đ]\nSố tiền cô bán hàng phải trả lại mẹ là:\n  200.000 − 105.000 = 95.000 (đồng) [1.25đ]\n  Đáp số: 95.000 đồng. [0.5đ]"
          }
        ]
      },
      {
        id: "part4",
        name: "PHẦN IV: THỬ THÁCH TƯ DUY ĐIỂM 10",
        level: "Mức 4: Vận dụng cao / Olympic (Thử thách)",
        scoreText: "1.5 điểm",
        questions: [
          {
            q: "Bài 4 (1.5 điểm): Tìm giá trị của x sao cho:\n  100 − x × 5 = 25",
            answer: "Lời giải:\n  x × 5 = 100 − 25\n  x × 5 = 75\n  x = 75 ÷ 5\n  x = 15.\nThử lại: 100 − 15 × 5 = 100 − 75 = 25 (đúng)."
          }
        ]
      }
    ]
  },

  w6: {
    week: 6,
    title: "Đề kiểm tra 30 phút · Tuần 6: Lớp triệu, làm tròn số và đại lượng",
    textbook: "Kết nối tri thức với cuộc sống",
    duration: "30 phút",
    totalScore: 10,
    sections: [
      {
        id: "part1",
        name: "PHẦN I: TRẮC NGHIỆM KHỞI ĐỘNG",
        level: "Mức 1: Nhận biết (Dễ)",
        scoreText: "3.0 điểm (4 câu × 0.75đ)",
        questions: [
          { q: "1. Số 35.000.000 đọc là:", choices: ["A. Ba mươi lăm nghìn", "B. Ba trăm năm mươi triệu", "C. Ba mươi lăm triệu", "D. Ba triệu năm trăm nghìn"], answer: "C. Ba mươi lăm triệu" },
          { q: "2. Chữ số 8 trong số 184.250.000 có giá trị là:", choices: ["A. 80.000.000", "B. 8.000.000", "C. 800.000", "D. 80.000"], answer: "A. 80.000.000 (hàng chục triệu)" },
          { q: "3. 3 tấn 50 kg đổi ra ki-lô-gam bằng:", choices: ["A. 350 kg", "B. 3.050 kg", "C. 3.500 kg", "D. 35.000 kg"], answer: "B. 3.050 kg (1 tấn = 1.000 kg; 3.000 + 50 = 3.050 kg)" },
          { q: "4. Năm 2026 thuộc thế kỉ nào?", choices: ["A. Thế kỉ XIX", "B. Thế kỉ XX", "C. Thế kỉ XXI", "D. Thế kỉ XXII"], answer: "C. Thế kỉ XXI" }
        ]
      },
      {
        id: "part2",
        name: "PHẦN II: TỰ LUẬN TÍNH TOÁN & ĐẶT TÍNH",
        level: "Mức 2: Thông hiểu (Vừa sức)",
        scoreText: "2.5 điểm",
        questions: [
          { q: "Bài 1 (1.5 điểm): Đặt tính rồi tính thẳng hàng ra vở ô ly:\n  a) 482.915 + 239.540\n  b) 800.000 − 345.620", answer: "a) 482.915 + 239.540 = 722.455\nb) 800.000 − 345.620 = 454.380" },
          { q: "Bài 2 (1.0 điểm): Tính bằng cách thuận tiện nhất:\n  125 × 32 (gợi ý tách 32 = 8 × 4)", answer: "= 125 × 8 × 4 = 1.000 × 4 = 4.000" }
        ]
      },
      {
        id: "part3",
        name: "PHẦN III: BÀI TOÁN CÓ LỜI VĂN",
        level: "Mức 3: Vận dụng (Khá)",
        scoreText: "3.0 điểm",
        questions: [
          {
            q: "Bài 3 (3.0 điểm): Một cửa hàng buổi sáng bán được 35 kg gạo, buổi chiều bán được số gạo gấp đôi buổi sáng. Hỏi cả ngày cửa hàng thu được bao nhiêu tiền, biết mỗi ki-lô-gam gạo có giá 18.000 đồng?",
            answer: "Bài giải mẫu:\nBuổi chiều cửa hàng bán được số ki-lô-gam gạo là:\n  35 × 2 = 70 (kg) [1.0đ]\nCả ngày cửa hàng bán được tất cả số ki-lô-gam gạo là:\n  35 + 70 = 105 (kg) [0.75đ]\nSố tiền cửa hàng thu được trong cả ngày là:\n  18.000 × 105 = 1.890.000 (đồng) [1.0đ]\n  Đáp số: 1.890.000 đồng. [0.25đ]"
          }
        ]
      },
      {
        id: "part4",
        name: "PHẦN IV: THỬ THÁCH TƯ DUY ĐIỂM 10",
        level: "Mức 4: Vận dụng cao / Olympic (Thử thách)",
        scoreText: "1.5 điểm",
        questions: [
          {
            q: "Bài 4 (1.5 điểm): Cho 4 chữ số 1, 2, 3, 4. Hỏi có thể lập được bao nhiêu số có 4 chữ số khác nhau từ 4 chữ số trên chia hết cho 5? Giải thích vì sao.",
            answer: "Lời giải:\nDấu hiệu chia hết cho 5 là chữ số tận cùng (hàng đơn vị) phải là 0 hoặc 5.\nTrong 4 chữ số đã cho (1, 2, 3, 4) không có chữ số 0 cũng không có chữ số 5.\nDo đó không thể lập được bất kỳ số nào có 4 chữ số chia hết cho 5 từ 4 chữ số đã cho.\nKết luận: Có 0 số thỏa mãn đề bài."
          }
        ]
      }
    ]
  }
};

/**
 * Tạo đề thi tự động chuẩn hóa từ dữ liệu bài học khi tuần học chưa có trong kho cứng
 * @param {number} weekNumber
 * @param {object} lesson
 * @returns {object}
 */
export function generateStandardExamFromLesson(weekNumber, lesson = {}) {
  const title = lesson.title || `Bài kiểm tra định kỳ Tuần ${weekNumber}`;
  const basic = lesson.basic || "Làm các phép tính đặt tính và tính giá trị biểu thức.";
  const applied = lesson.applied || "Giải bài toán có lời văn theo 2 bước tính.";
  const challenge = lesson.challenge || "Bài toán tư duy nâng cao.";
  const hint = lesson.hint || "";

  return {
    week: weekNumber,
    title: `Đề kiểm tra 30 phút · Tuần ${weekNumber} (${title})`,
    textbook: "Kết nối tri thức với cuộc sống",
    duration: "30 phút",
    totalScore: 10,
    sections: [
      {
        id: "part1",
        name: "PHẦN I: TRẮC NGHIỆM KHỞI ĐỘNG",
        level: "Mức 1: Nhận biết (Dễ)",
        scoreText: "3.0 điểm (4 câu × 0.75đ)",
        questions: [
          { q: "1. Đọc và nhận biết nhanh khái niệm trọng tâm tuần " + weekNumber + ":", choices: ["A. Đáp án đúng", "B. Phương án nhiễu 1", "C. Phương án nhiễu 2", "D. Phương án nhiễu 3"], answer: "A" },
          { q: "2. Khẳng định nào sau đây là đúng về kiến thức tuần " + weekNumber + "?", choices: ["A. Đúng", "B. Sai", "C. Chưa đủ dữ kiện", "D. Không xác định"], answer: "A" },
          { q: "3. Ước lượng và tính nhẩm nhanh giá trị biểu thức trọng tâm.", choices: ["A. Giá trị chuẩn", "B. Giá trị lệch 10", "C. Giá trị lệch 100", "D. Giá trị gấp đôi"], answer: "A" },
          { q: "4. Đổi đơn vị hoặc so sánh số có nhiều chữ số phù hợp với tuần " + weekNumber + ".", choices: ["A. Đúng quy tắc", "B. Nhầm đơn vị", "C. Nhầm hàng", "D. Quên số 0"], answer: "A" }
        ]
      },
      {
        id: "part2",
        name: "PHẦN II: TỰ LUẬN TÍNH TOÁN & ĐẶT TÍNH",
        level: "Mức 2: Thông hiểu (Vừa sức)",
        scoreText: "2.5 điểm",
        questions: [
          { q: `Bài 1 (1.5 điểm): Đặt tính rồi tính cẩn thận ra vở ô ly:\n${basic}`, answer: "Học sinh đặt tính thẳng hàng, tính đúng kết quả và nhớ số chính xác." },
          { q: "Bài 2 (1.0 điểm): Tính bằng cách thuận tiện nhất hoặc nêu chiến lược tính hợp lý.", answer: "Áp dụng tính chất giao hoán, kết hợp hoặc tách số tròn chục/trăm." }
        ]
      },
      {
        id: "part3",
        name: "PHẦN III: BÀI TOÁN CÓ LỜI VĂN",
        level: "Mức 3: Vận dụng (Khá)",
        scoreText: "3.0 điểm",
        questions: [
          { q: `Bài 3 (3.0 điểm): ${applied}`, answer: "Bài giải: Có câu lời giải đúng (0.5đ), phép tính và đơn vị đúng (2.0đ), đáp số đúng (0.5đ)." }
        ]
      },
      {
        id: "part4",
        name: "PHẦN IV: THỬ THÁCH TƯ DUY ĐIỂM 10",
        level: "Mức 4: Vận dụng cao / Olympic (Thử thách)",
        scoreText: "1.5 điểm",
        questions: [
          { q: `Bài 4 (1.5 điểm): ${challenge}`, answer: hint ? `Gợi ý và đáp án:\n${hint}` : "Học sinh nêu được hướng lập luận logic và tìm ra kết quả đúng." }
        ]
      }
    ]
  };
}

/**
 * Lấy đề thi tuần tương ứng
 * @param {number} weekNumber
 * @param {object} [fallbackLesson]
 * @returns {object}
 */
export function getWeekendMathExam(weekNumber, fallbackLesson = {}) {
  const key = `w${weekNumber}`;
  if (WEEKEND_MATH_EXAMS[key]) {
    return WEEKEND_MATH_EXAMS[key];
  }
  return generateStandardExamFromLesson(weekNumber, fallbackLesson);
}

/**
 * Render HTML Tờ đề thi chính thức chuẩn iPad Pro 11 inch
 * @param {object} exam
 * @returns {string}
 */
export function renderExamPaperHtml(exam) {
  if (!exam || !Array.isArray(exam.sections)) return "";

  return `
  <article class="math-exam-paper" aria-label="Tờ đề thi chính thức môn Toán lớp 4">
    <header class="exam-paper-header">
      <div class="exam-badge-row">
        <span class="exam-badge-kntt">📚 BỘ SÁCH: KẾT NỐI TRI THỨC VỚI CUỘC SỐNG</span>
        <span class="exam-badge-time">⏱️ THỜI GIAN: ${exam.duration || "30 phút"}</span>
        <span class="exam-badge-score">🎯 THANG ĐIỂM: ${exam.totalScore || 10} ĐIỂM</span>
      </div>
      <h2 class="exam-paper-title">${exam.title}</h2>
      <p class="exam-paper-instruction">
        📝 <b>Hướng dẫn cho Bách:</b> Bách cần có <b>vở nháp</b> trước khi làm bài để nháp các phép tính và thử lại kết quả cẩn thận nhé! Sau đó Bách mở <b>vở ô ly</b> ghi rõ <i>"Bài kiểm tra tuần ${exam.week}"</i>, viết chữ số nắn nót, đặt tính thẳng hàng. Làm xong Bách bấm nút <b>Chụp ảnh bài làm trên vở</b> phía dưới để cùng AI chấm điểm nhé!
      </p>
    </header>

    <div class="exam-sections-grid">
      ${exam.sections.map((sec, idx) => `
        <section class="exam-section-card exam-level-${idx + 1}" id="${sec.id}">
          <div class="exam-section-head">
            <div class="exam-section-title-wrap">
              <span class="exam-section-tag">${sec.name}</span>
              <span class="exam-level-pill">${sec.level}</span>
            </div>
            <span class="exam-section-score">${sec.scoreText}</span>
          </div>

          <div class="exam-questions-list">
            ${sec.questions.map(qObj => `
              <div class="exam-question-item">
                <div class="exam-q-text">${String(qObj.q || "").replace(/\n/g, "<br>")}</div>
                ${Array.isArray(qObj.choices) && qObj.choices.length ? `
                  <div class="exam-choices-grid">
                    ${qObj.choices.map(c => `<span class="exam-choice-chip">${c}</span>`).join("")}
                  </div>
                ` : ""}
              </div>
            `).join("")}
          </div>
        </section>
      `).join("")}
    </div>
  </article>
  `;
}

/**
 * Xây dựng prompt chấm điểm nạp đầy đủ Đề bài + Đáp án chuẩn + Barem chi tiết cho Gemini
 * @param {object} exam
 * @param {string} [studentExplanation]
 * @returns {string}
 */
export function buildExamGradingPrompt(exam, studentExplanation = "") {
  let rubricText = "";
  exam.sections.forEach(sec => {
    rubricText += `\n### ${sec.name} (${sec.level} - ${sec.scoreText}):\n`;
    sec.questions.forEach((qObj, i) => {
      rubricText += `* Câu ${i + 1}: ${qObj.q.replace(/\n/g, " ")}\n  -> ĐÁP ÁN VÀ BAREM CHUẨN: ${qObj.answer}\n`;
    });
  });

  return [
    `Bách vừa hoàn thành BÀI KIỂM TRA ĐỊNH KỲ 30 PHÚT - MÔN TOÁN LỚP 4 (${exam.title}).`,
    `Bộ sách: ${exam.textbook || "Kết nối tri thức với cuộc sống"}. Thang điểm: 10 điểm.`,
    `Bách đã có vở nháp để tính toán cẩn thận trước khi viết bài giải vào vở ô ly. Ảnh chụp trang vở ô ly bài làm của Bách được đính kèm.`,
    studentExplanation ? `Lời giải thích / ghi âm của Bách: "${studentExplanation}"` : "",
    "",
    "--- DƯỚI ĐÂY LÀ ĐỀ BÀI GỐC VÀ ĐÁP ÁN - BAREM CHUẨN ĐỂ ĐỐI CHIẾU ---",
    rubricText,
    "----------------------------------------------------------------",
    "",
    "QUY TẮC SƯ PHẠM VÀ HƯỚNG DẪN ĐỌC ẢNH VỞ Ô LY:",
    "1. ĐỌC NÉT CHỮ VIẾT TAY TRÊN VỞ Ô LY: Đọc từng bài Bách đã viết ra vở. So sánh kết quả của Bách với ĐÁP ÁN VÀ BAREM CHUẨN ở trên.",
    "2. PHÂN TÍCH KỸ PHẦN TỰ LUẬN ĐẶT TÍNH: Xem Bách đặt tính có thẳng hàng đơn vị dưới hàng đơn vị, chục dưới chục không; có cộng/trừ số nhớ chính xác không.",
    "3. PHÂN TÍCH BÀI TOÁN CÓ LỜI VĂN: Xem câu lời giải có đủ ý không, phép tính và đơn vị có đặt trong ngoặc đơn không, đáp số có đúng không.",
    "4. TỔNG KẾT ĐIỂM SỐ RÕ RÀNG:",
    "   - Điểm Phần I (Trắc nghiệm): .../3.0 điểm",
    "   - Điểm Phần II (Tính toán & Đặt tính): .../2.5 điểm",
    "   - Điểm Phần III (Bài toán có lời văn): .../3.0 điểm",
    "   - Điểm Phần IV (Thử thách điểm 10): .../1.5 điểm",
    "   => TỔNG ĐIỂM BÀI THI: .../10 ĐIỂM",
    "5. PHONG CÁCH GIAO TIẾP VỚI BÁCH:",
    "   - Tự xưng là 'mình', gọi bạn học là 'Bách' (tuyệt đối KHÔNG xưng thầy/cô, KHÔNG gọi Bách là 'con').",
    "   - Khen ngợi nét chữ cẩn thận, thẳng hàng và những câu Bách làm xuất sắc.",
    "   - Nếu có câu chưa đúng: Chỉ rõ chỗ vướng một cách ân cần, mềm mại (ví dụ: 'Ở bài 2, Bách tính nhẩm hàng chục rất tốt nhưng hình như quên cộng 1 nhớ từ hàng đơn vị sang nè! Bách thử cộng lại xem sao nhé!') để Bách tự hiểu và khắc phục."
  ].filter(Boolean).join("\n");
}
