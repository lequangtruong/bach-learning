window.BACH_CURRICULUM = {
  meta: {
    title: "Bách Learning Lab",
    subtitle: "Lớp 4 · Học chắc nền tảng, nghĩ sâu hơn mỗi ngày",
    textbook: "Kết nối tri thức với cuộc sống",
    learnerProfile: "Bách là học sinh giỏi đang hướng tới mức vượt trội; không hạ bài xuống mức remedial. Điểm cần rèn riêng là tốc độ tính nhẩm còn chậm, nên bài nền ngắn nhưng bài chính phải ở mức khá–giỏi và có tầng Olympic vừa sức.",
    totalWeeks: 36,
    dailyMinutes: { math: 25, vietnamese: 25 },
    saturdayMinutes: { math: 50, vietnamese: 50 },
    bridge: {
      title: "Cầu nối lớp 3 → lớp 4",
      note: "6 tuần đầu không chạy thẳng vào bài khó. Mỗi tuần có 2 buổi kiểm tra nền lớp 3, 3 buổi học trước lớp 4; điểm yếu được quay lại ở Thứ 6.",
      math: ["Số đến 100.000 → số đến hàng triệu", "Cộng trừ nhân chia → biểu thức nhiều bước", "Phân số trực quan → phân số bằng nhau", "Đo lường cơ bản → đổi đơn vị và diện tích", "Bảng/biểu đồ → đọc dữ liệu nhiều bước"],
      vietnamese: ["Câu và đoạn → bài văn 3 phần", "Đọc hiểu chi tiết → tìm bằng chứng", "Kể việc → xây cốt truyện", "Tả đồ vật → tả người/tả cảnh", "Chính tả và từ loại → câu văn chính xác"]
    },
    cadence: [
      ["Thứ 2", "Học khái niệm mới"],
      ["Thứ 3", "Luyện có hướng dẫn"],
      ["Thứ 4", "Bài vận dụng"],
      ["Thứ 5", "Bài thử thách / Olympic"],
      ["Thứ 6", "Chữa lỗi + viết lại"],
      ["Thứ 7", "50 phút/môn · mini-test, chữa lỗi và tổng kết tuần"],
      ["Chủ nhật", "Nghỉ, đọc tự chọn, kể lại bằng lời"]
    ]
  },
  mentalMathFoundation: {
    title: "Nền tính toán nhanh",
    intro: "Bách không học lại từ đầu: mỗi buổi dùng 8–10 phút để tăng tốc tính nhẩm trên nền bài khá–giỏi. Tốc độ chỉ tăng sau khi tính đúng, nói được chiến lược và kiểm tra được kết quả.",
    dailyRoutine: [
      ["1 · Chính xác", "3 phép tính ngắn, không máy tính; viết hoặc nói cách nghĩ."],
      ["2 · Chiến lược", "1 câu hỏi: có thể bù trừ, tách số, gấp đôi hay dùng phép ngược không?"],
      ["3 · Lưu loát (tùy chọn)", "Chỉ bấm giờ nhẹ sau khi đã tính đúng và giải thích được cách làm; nếu chưa chắc thì luyện không bấm giờ."],
      ["4 · Kiểm tra", "Ước lượng trước, rồi kiểm tra bằng phép ngược hoặc cách thứ hai."]
    ],
    weeks: [
      {
        week: 1,
        title: "Cảm nhận về số (Bù tròn & Tách gộp)",
        focus: "Gộp–tách số đến 10, 100 và 1.000; nhận ra số tròn và giá trị chữ số.",
        strategies: "Bù cho đủ 10/100; tách 47 = 40 + 7; đọc số theo hàng.",
        practice: "Nói nhanh nhiều cách tạo 100 từ hai hoặc ba số; giải thích cách nào dễ nhất.",
        success: "Đúng ít nhất 8/10 câu và nói được một cách tách số.",
        groups: [
          {
            day: "Buổi 1",
            title: "Nhận diện đôi số bù 100",
            hint: "Tìm chữ số hàng đơn vị ghép thành 10 trước, rồi xem hàng chục ghép thành 9 (tổng 90 + 10 = 100).",
            questions: [
              "36 + 64 = ?",
              "100 − 28 = ?",
              "73 + ? = 100",
              "Khi nhẩm 100 − 47, Bách nên trừ 40 trước rồi trừ 7, hay tìm số bù của 7 trước? Vì sao hai cách đều ra cùng đáp số?"
            ]
          },
          {
            day: "Buổi 2",
            title: "Tách gộp số tròn trăm",
            hint: "Tách số lẻ thành số tròn chục hoặc tròn trăm rồi gộp phần bù lại trước.",
            questions: [
              "240 + 360 = ?",
              "1.000 − 350 = ?",
              "480 + 520 = ?",
              "710 − 290 = ?",
              "Để nhẩm 480 + 520, giải thích vì sao lấy 20 từ 520 bù sang 480 thành 500 + 500 lại nhanh hơn đặt tính dọc."
            ]
          },
          {
            day: "Buổi 3",
            title: "Cấu tạo số đến 1.000",
            hint: "Nhìn nhanh giá trị từng hàng: hàng trăm, hàng chục và hàng đơn vị.",
            questions: [
              "500 + 80 + 7 = ?",
              "645 − 45 = ?",
              "308 + 90 = ?",
              "Số 820 gồm bao nhiêu chục? Nếu bớt đi 15 chục thì còn lại bao nhiêu?"
            ]
          },
          {
            day: "Buổi 4",
            title: "Bộ ba số tạo mốc tròn",
            hint: "Tìm hai số có tổng tròn chục hoặc tròn trăm để nhóm lại trước khi cộng số thứ ba.",
            questions: [
              "25 + 47 + 75 = ?",
              "130 + 290 + 70 = ?",
              "68 + 85 + 32 = ?",
              "So sánh hai cách tính: (68 + 32) + 85 và (68 + 85) + 32. Cách nào không cần nhớ qua hàng?"
            ]
          },
          {
            day: "Buổi 5",
            title: "Thử thách suy luận tách gộp",
            hint: "Dùng tư duy mốc 1.000 để tìm phần còn thiếu hoặc số lớn nhất.",
            questions: [
              "1.000 − 125 = ?",
              "450 + ? + 150 = 1.000",
              "275 + 325 + 400 = ?",
              "Một số cộng với 380 rồi trừ 180 thì bằng 700. Không cần đặt tính, giải thích vì sao số đó chính là 500."
            ]
          }
        ]
      },
      {
        week: 2,
        title: "Cộng trừ thông minh (Làm tròn & Điều chỉnh)",
        focus: "Cộng–trừ số có nhiều chữ số bằng bù trừ, làm tròn rồi điều chỉnh.",
        strategies: "398 + 27 = 400 + 27 − 2; 620 − 198 = 620 − 200 + 2.",
        practice: "Ước lượng trước, tính nhẩm sau, cuối cùng đối chiếu bằng cách đặt tính.",
        success: "Chọn được chiến lược phù hợp và không nhầm dấu khi điều chỉnh.",
        groups: [
          {
            day: "Buổi 1",
            title: "Cộng số gần tròn trăm",
            hint: "Làm tròn số gần trăm lên rồi trừ đi phần đã thêm vào (cộng thừa thì phải trừ bớt).",
            questions: [
              "198 + 45 = ?",
              "397 + 126 = ?",
              "599 + 84 = ?",
              "Tại sao khi cộng 397 với 126, ta lại làm phép tính (400 + 126) − 3 thay vì cộng từng chữ số từ phải sang trái?"
            ]
          },
          {
            day: "Buổi 2",
            title: "Trừ số gần tròn trăm",
            hint: "Làm tròn số trừ lên số tròn trăm rồi cộng lại phần đã trừ lố (trừ quá tay thì phải bù lại).",
            questions: [
              "452 − 198 = ?",
              "635 − 299 = ?",
              "814 − 397 = ?",
              "Bách giải thích: Khi tính 635 − 299, vì sao bước cuối cùng là cộng 1 chứ không phải trừ 1?"
            ]
          },
          {
            day: "Buổi 3",
            title: "Cộng trừ số gần tròn chục lớn",
            hint: "Nhìn mốc 89, 79, 99 để đưa về 90, 80, 100 rồi điều chỉnh.",
            questions: [
              "245 + 89 = ?",
              "512 − 79 = ?",
              "368 + 149 = ?",
              "670 − 189 = ?",
              "So sánh cách làm: 512 − 80 + 1 và 512 − 70 − 9. Cách nào giúp đầu óc thảnh thơi hơn?"
            ]
          },
          {
            day: "Buổi 4",
            title: "Cùng thêm hoặc cùng bớt số bị trừ và số trừ",
            hint: "Hiệu không đổi khi ta cùng cộng thêm (hoặc cùng trừ bớt) một số vào cả hai số.",
            questions: [
              "423 − 197 = ?",
              "531 − 288 = ?",
              "742 − 395 = ?",
              "Để tính 531 − 288, Bách thêm 12 vào cả hai số thành 543 − 300. Giải thích vì sao kết quả này hoàn toàn chính xác."
            ]
          },
          {
            day: "Buổi 5",
            title: "Thử thách làm tròn dãy số",
            hint: "Quan sát các số đuôi 8, 9 để chuyển dịch sang các số tròn chục, tròn trăm.",
            questions: [
              "99 + 199 + 299 = ?",
              "1.000 − 498 − 298 = ?",
              "1.250 + 998 = ?",
              "Tính nhẩm nhanh tổng: 198 + 297 + 396. Nêu rõ Bách đã mượn bao nhiêu và phải trả lại bao nhiêu ở bước cuối."
            ]
          }
        ]
      },
      {
        week: 3,
        title: "Nhân bằng cấu trúc (Gấp đôi, Chia nhóm & Phân phối)",
        focus: "Củng cố bảng nhân đến 10×10 và nhìn phép nhân qua gấp đôi, chia nhóm, phân phối.",
        strategies: "6×7 = 3×7×2; 8×9 = 8×10 − 8; 14×3 = 10×3 + 4×3.",
        practice: "Che một thừa số, đoán kết quả từ phép gần gũi rồi kiểm tra.",
        success: "Tính đúng và trình bày được ít nhất hai cách cho một phép nhân.",
        groups: [
          {
            day: "Buổi 1",
            title: "Nhân qua gấp đôi liên tiếp (×4, ×8)",
            hint: "Nhân với 4 là gấp đôi hai lần; nhân với 8 là gấp đôi ba lần.",
            questions: [
              "16 × 4 = ?",
              "25 × 4 = ?",
              "14 × 8 = ?",
              "35 × 4 = ?",
              "Bách tính 15 × 8 bằng cách lấy (15 × 2) × 4 hay lấy (15 × 4) × 2? Cách nào nhẩm ra số tròn nhanh hơn?"
            ]
          },
          {
            day: "Buổi 2",
            title: "Nhân với 5 và nhân với 50",
            hint: "Nhân với 5 bằng cách nhân 10 rồi chia 2; nhân với 50 bằng cách nhân 100 rồi chia 2.",
            questions: [
              "28 × 5 = ?",
              "64 × 5 = ?",
              "42 × 50 = ?",
              "86 × 5 = ?",
              "Giải thích vì sao 48 × 5 lại bằng một nửa của 480."
            ]
          },
          {
            day: "Buổi 3",
            title: "Nhân qua mốc 9 và 11 (Phân phối)",
            hint: "Nhân 9 là nhân 10 rồi trừ đi chính nó; nhân 11 là nhân 10 rồi cộng thêm chính nó.",
            questions: [
              "17 × 9 = ?",
              "24 × 11 = ?",
              "36 × 9 = ?",
              "45 × 11 = ?",
              "So sánh 34 × 9 và 34 × 11: Hai kết quả này chênh nhau bao nhiêu đơn vị mà không cần tính cụ thể từng tích?"
            ]
          },
          {
            day: "Buổi 4",
            title: "Tách số hai chữ số nhân số một chữ số",
            hint: "Tách số thành phần chục và phần đơn vị: (a + b) × c = a × c + b × c.",
            questions: [
              "18 × 6 = ?",
              "23 × 7 = ?",
              "32 × 6 = ?",
              "45 × 3 = ?",
              "Khi tính 19 × 7, cách tách 19 = 20 − 1 có ưu điểm gì so với cách tách 19 = 10 + 9?"
            ]
          },
          {
            day: "Buổi 5",
            title: "Thử thách nhân cấu trúc kết hợp",
            hint: "Chuyển đổi thừa số để tạo ra các cặp số nhân ra 10, 100.",
            questions: [
              "15 × 16 = ?",
              "25 × 32 = ?",
              "18 × 25 = ?",
              "Để nhẩm 25 × 32, hãy tách 32 = 4 × 8. Giải thích vì sao tích biến thành 100 × 8 một cách kỳ diệu."
            ]
          }
        ]
      },
      {
        week: 4,
        title: "Chia và phép ngược (Họ phép tính, Ước lượng thương & Số dư)",
        focus: "Hiểu chia là chia đều hoặc lập nhóm; nối phép chia với phép nhân và số dư.",
        strategies: "Dùng họ phép tính; kiểm tra a ÷ b bằng thương × b + số dư.",
        practice: "Làm các bài chia quen thuộc trước, sau đó giải thích số dư có ý nghĩa gì trong tình huống.",
        success: "Biết kiểm tra phép chia bằng phép nhân và nhận ra kết quả vô lý.",
        groups: [
          {
            day: "Buổi 1",
            title: "Chia dựa vào họ phép nhân",
            hint: "Hỏi: 'Số nào nhân với số chia thì được số bị chia?' để tìm thương ngay lập tức.",
            questions: [
              "72 ÷ 8 = ?",
              "96 ÷ 6 = ?",
              "84 ÷ 7 = ?",
              "108 ÷ 9 = ?",
              "Từ phép tính 14 × 6 = 84, hãy viết ngay kết quả của 84 ÷ 6 và 84 ÷ 14 mà không cần làm tính chia."
            ]
          },
          {
            day: "Buổi 2",
            title: "Chia cho 5 và chia cho 4",
            hint: "Chia cho 5 bằng cách nhân đôi rồi chia 10; chia cho 4 bằng cách chia đôi hai lần liên tiếp.",
            questions: [
              "140 ÷ 5 = ?",
              "320 ÷ 5 = ?",
              "180 ÷ 4 = ?",
              "260 ÷ 5 = ?",
              "Giải thích vì sao muốn chia một số tròn chục cho 5, ta chỉ cần nhân đôi số đó rồi bỏ bớt một chữ số 0."
            ]
          },
          {
            day: "Buổi 3",
            title: "Chia có dư và xác định số dư",
            hint: "Tìm bội số gần nhất của số chia nhưng nhỏ hơn số bị chia. Số dư phải luôn bé hơn số chia.",
            questions: [
              "59 ÷ 7 = ? (dư ?)",
              "75 ÷ 8 = ? (dư ?)",
              "92 ÷ 9 = ? (dư ?)",
              "86 ÷ 6 = ? (dư ?)",
              "Trong một phép chia cho 7, một bạn tính ra thương là 8 và dư 9. Không cần chia lại, vì sao biết ngay bạn đó làm sai?"
            ]
          },
          {
            day: "Buổi 4",
            title: "Tách số bị chia thành các số dễ chia",
            hint: "Tách số bị chia thành tổng hai số đều chia hết cho số chia.",
            questions: [
              "78 ÷ 6 = ?",
              "91 ÷ 7 = ?",
              "96 ÷ 4 = ?",
              "115 ÷ 5 = ?",
              "Để nhẩm 91 ÷ 7, nên tách 91 thành 70 + 21 hay thành 84 + 7? Nêu cách nhẩm mà Bách thấy thuận tay nhất."
            ]
          },
          {
            day: "Buổi 5",
            title: "Thử thách phép ngược và tìm số",
            hint: "Dùng công thức kiểm tra: Số bị chia = Thương × Số chia + Số dư.",
            questions: [
              "? ÷ 8 = 12 (dư 5)",
              "200 ÷ ? = 25",
              "(150 − 10) ÷ 7 = ?",
              "Có 50 chiếc bút xếp vào các hộp, mỗi hộp 6 chiếc. Cần ít nhất bao nhiêu hộp để xếp hết số bút đó? Giải thích ý nghĩa số dư trong bài này."
            ]
          }
        ]
      },
      {
        week: 5,
        title: "Tính nhanh nhiều bước (Thứ tự, Giao hoán & Nhóm số tròn)",
        focus: "Tính nhẩm biểu thức đơn giản, số còn thiếu và quy luật; giữ thứ tự thao tác.",
        strategies: "Tính phần dễ trước khi phù hợp; nhóm số tròn; thử giá trị nhỏ để thấy quy luật.",
        practice: "Nói từng bước trước khi viết; không học thuộc mẹo nếu chưa hiểu vì sao đúng.",
        success: "Không bỏ bước quan trọng và tự tìm được lỗi trong một lời giải mẫu.",
        groups: [
          {
            day: "Buổi 1",
            title: "Đổi chỗ và nhóm số hạng thông minh",
            hint: "Đổi chỗ các số hạng để nhóm thành từng cặp tròn trăm hoặc tròn chục.",
            questions: [
              "137 + 89 + 63 = ?",
              "245 + 178 + 55 + 22 = ?",
              "362 + 95 + 38 = ?",
              "So sánh hai cách cộng biểu thức: cộng tuần tự từ trái qua phải và nhóm (137 + 63) + 89. Cách nào hạn chế sai sót nhớ hàng hơn?"
            ]
          },
          {
            day: "Buổi 2",
            title: "Nhóm thừa số tạo số tròn",
            hint: "Nhận diện ngay các cặp bạn thân: 2 × 5 = 10, 4 × 25 = 100, 8 × 125 = 1.000.",
            questions: [
              "2 × 37 × 5 = ?",
              "4 × 19 × 25 = ?",
              "8 × 17 × 125 = ?",
              "5 × 28 × 2 = ?",
              "Để tính nhanh 4 × 19 × 25, vì sao ta lại nhân 4 với 25 trước? Tính chất nào của phép nhân cho phép ta làm như vậy?"
            ]
          },
          {
            day: "Buổi 3",
            title: "Một số nhân một tổng hoặc một hiệu",
            hint: "Đưa thừa số chung ra ngoài hoặc nhân phân phối vào để xuất hiện số tròn chục, tròn trăm.",
            questions: [
              "36 × 4 + 36 × 6 = ?",
              "47 × 13 − 47 × 3 = ?",
              "28 × 7 + 28 × 3 = ?",
              "54 × 18 − 54 × 8 = ?",
              "Biểu thức 36 × 4 + 36 × 6 có thể viết gọn thành 36 × (4 + 6). Kết quả nhẩm nhanh được là bao nhiêu?"
            ]
          },
          {
            day: "Buổi 4",
            title: "Thứ tự thực hiện phép tính và dấu ngoặc",
            hint: "Nhân chia trước, cộng trừ sau; trong ngoặc trước, ngoài ngoặc sau.",
            questions: [
              "100 − 4 × 15 = ?",
              "(150 − 50) ÷ 5 = ?",
              "60 + 40 ÷ 4 = ?",
              "240 ÷ (3 × 2) = ?",
              "Một bạn tính 60 + 40 ÷ 4 = 100 ÷ 4 = 25. Bạn ấy sai ở đâu và thứ tự tính đúng phải ra kết quả là bao nhiêu?"
            ]
          },
          {
            day: "Buổi 5",
            title: "Thử thách biểu thức chuỗi nhiều bước",
            hint: "Tìm quy luật triệt tiêu hoặc mốc tròn chục trong chuỗi phép tính.",
            questions: [
              "500 − 45 − 55 = ?",
              "120 × 5 ÷ 6 = ?",
              "25 × 8 ÷ 4 = ?",
              "Tính giá trị biểu thức: 100 − 90 + 80 − 70 + 60 − 50. Thay vì tính từ trái sang phải, hãy chỉ ra cách ghép từng cặp để nhẩm trong 5 giây."
            ]
          }
        ]
      },
      {
        week: 6,
        title: "Ước lượng và độ bền (Dự đoán khoảng & Kiểm tra ngược)",
        focus: "Chọn chiến lược, ước lượng, tính chính xác và kiểm tra bằng cách khác.",
        strategies: "Dự đoán khoảng kết quả; làm ngược; so sánh độ nhanh và độ chắc của hai cách.",
        practice: "Mini-check nhẹ gồm tính nhẩm, bài có lời văn và một câu giải thích chiến lược.",
        success: "Ưu tiên đúng trước nhanh, biết sửa lỗi và giữ bình tĩnh khi gặp câu lạ.",
        groups: [
          {
            day: "Buổi 1",
            title: "Ước lượng trước khi tính",
            hint: "Làm tròn các số về tròn chục hoặc tròn trăm để khoanh vùng kết quả trước khi tính chi tiết.",
            questions: [
              "Khoanh vùng tổng: 392 + 506 xấp xỉ khoảng bao nhiêu?",
              "Khoanh vùng hiệu: 815 − 289 xấp xỉ khoảng bao nhiêu?",
              "Khoanh vùng tích: 49 × 6 xấp xỉ khoảng bao nhiêu?",
              "Nếu một bạn tính 392 + 506 ra 798, dùng ước lượng tròn trăm làm sao Bách nhận ra ngay đáp số đó vô lý?"
            ]
          },
          {
            day: "Buổi 2",
            title: "Kiểm tra chữ số tận cùng",
            hint: "Nhìn chữ số hàng đơn vị để loại trừ ngay kết quả sai.",
            questions: [
              "Không tính hết, chữ số tận cùng của 346 + 287 là chữ số nào?",
              "Chữ số tận cùng của 654 − 138 là chữ số nào?",
              "Chữ số tận cùng của 27 × 8 là chữ số nào?",
              "Phép tính 145 × 4 có thể cho kết quả tận cùng là 2 không? Vì sao?"
            ]
          },
          {
            day: "Buổi 3",
            title: "Kiểm tra bằng phép toán ngược",
            hint: "Kiểm tra phép trừ bằng phép cộng; kiểm tra phép chia bằng phép nhân.",
            questions: [
              "Muốn kiểm tra 625 − 278 = 347, ta thực hiện phép tính ngược nào?",
              "Muốn kiểm tra 144 ÷ 6 = 24, ta thực hiện phép tính ngược nào?",
              "Tính nhẩm 500 − 163 và dùng phép cộng kiểm tra lại.",
              "Tại sao kiểm tra bằng phép ngược lại giúp ta phát hiện lỗi sai chắc chắn hơn là nhìn lại bài cũ?"
            ]
          },
          {
            day: "Buổi 4",
            title: "So sánh hai chiến lược tính",
            hint: "So sánh xem cách nào ít bước hơn, ít phải nhớ hàng hơn và giảm rủi ro nhầm lẫn.",
            questions: [
              "Tính 450 − 198: Cách 1 lấy 450 − 200 + 2; Cách 2 lấy 450 − 100 − 98. Cách nào tối ưu hơn?",
              "Tính 24 × 5: Cách 1 lấy 24 × 10 ÷ 2; Cách 2 lấy 20 × 5 + 4 × 5. Cả hai cách cho kết quả là bao nhiêu?",
              "Tính 75 + 189 + 25: Cách nào nhóm số nhanh nhất?",
              "Khi nào thì nên tính tròn chục rồi điều chỉnh, và khi nào nên tính tách theo từng hàng?"
            ]
          },
          {
            day: "Buổi 5",
            title: "Tổng kết độ bền và xử lý tình huống",
            hint: "Bình tĩnh đọc đề, chọn chiến lược phù hợp, tính nhẩm chuẩn và tự kiểm tra trong 8–10 phút.",
            questions: [
              "Một cửa hàng bán được 295 quyển vở vào buổi sáng và 305 quyển vào buổi chiều. Tính nhẩm tổng số vở cả ngày.",
              "Có 4 gói bánh, mỗi gói giá 25.000 đồng. Bách đưa tờ 200.000 đồng thì được trả lại bao nhiêu tiền?",
              "36 × 25 = ?",
              "Một bạn khẳng định: 'Tính càng nhanh thì càng giỏi toán'. Dựa vào 6 tuần luyện tính nhẩm vừa qua, Bách hãy nêu ý kiến của mình xem điều gì quan trọng hơn tốc độ."
            ]
          }
        ]
      }
    ]
  },
  phases: [
    {
      id: "P1", weeks: "1–6", title: "Xây nền thông minh", color: "coral",
      focus: "Đọc đúng đề, trình bày sạch, hình thành thói quen giải thích vì sao.",
      math: [
        ["Đọc đề như nhà điều tra", "Gạch dữ kiện, khoanh câu hỏi; viết lại đề bằng 1 câu."],
        ["Số tự nhiên đến hàng triệu", "Giá trị chữ số, so sánh, làm tròn; giải thích bằng tia số."],
        ["Bốn phép tính vững vàng", "Ước lượng trước, tính dọc, kiểm tra ngược sau khi tính."],
        ["Biểu thức nhiều bước", "Thứ tự thực hiện, đặt ngoặc, tìm lỗi trong lời giải mẫu."],
        ["Bài toán một bước và hai bước", "Tóm tắt bằng sơ đồ đoạn thẳng; chọn phép tính có lý do."],
        ["Tuần kiểm tra nền", "Mini test + chữa theo 3 cột: sai ở đâu, vì sao, lần sau làm gì."]
      ],
      vietnamese: [
        ["Câu rõ ý", "Câu đủ chủ ngữ–vị ngữ; thay câu cụt bằng câu có hình ảnh."],
        ["Đoạn văn 5–7 câu", "Một ý chính, câu mở đoạn, câu phát triển, câu kết đoạn."],
        ["Đọc tìm bằng chứng", "Trả lời câu hỏi bằng chi tiết trong bài, không đoán mò."],
        ["Kể một việc đáng nhớ", "Trình tự thời gian, từ chỉ hoạt động, cảm xúc vừa đủ."],
        ["Dùng từ chính xác", "Sổ từ mới: từ, nghĩa, câu của Bách, từ gần nghĩa/trái nghĩa."],
        ["Tuần kiểm tra nền", "Đọc 1 văn bản ngắn, viết đoạn 8–10 câu, tự sửa 3 lỗi."]
      ]
    },
    {
      id: "P2", weeks: "7–12", title: "Số, phân số và sức mạnh biểu diễn", color: "gold",
      focus: "Biết chuyển bài toán giữa lời nói, hình vẽ, bảng và phép tính.",
      math: [
        ["Dãy số và quy luật", "Tìm quy luật tăng/giảm; phân biệt quy luật đúng với vài số tình cờ."],
        ["Bội, ước và chia hết", "Lập bảng nhỏ, tìm cấu trúc thay vì thử tất cả."],
        ["Phân số qua hình ảnh", "Tử số, mẫu số, phân số bằng nhau bằng dải giấy và hình chữ nhật."],
        ["Cộng trừ phân số cùng mẫu", "Ước lượng kết quả, đặt bài toán ngược để kiểm tra."],
        ["Số thập phân làm quen", "Tiền, độ dài, khối lượng; nối phân số thập phân với số thập phân."],
        ["Bảng và biểu đồ", "Đọc dữ liệu, đặt câu hỏi mới, tìm câu trả lời từ hai nguồn dữ kiện."]
      ],
      vietnamese: [
        ["Tả đồ vật", "Quan sát theo thứ tự: toàn thể → bộ phận → công dụng → tình cảm."],
        ["Đoạn văn tả người", "Chọn 2 nét ngoại hình + 2 hành động thể hiện tính cách."],
        ["Đọc văn bản thông tin", "Tìm ý chính, từ khóa, quan hệ nguyên nhân–kết quả."],
        ["Viết hướng dẫn", "Tên việc, vật cần có, các bước đánh số, lưu ý an toàn."],
        ["Liên kết câu", "Dùng từ nối, lặp có chủ ý, từ thay thế để đoạn không rời rạc."],
        ["Biên tập đoạn văn", "Cắt câu thừa, đổi từ chung chung, thêm chi tiết nhìn/nghe/chạm."]
      ]
    },
    {
      id: "P3", weeks: "13–18", title: "Đo lường, hình học và câu chuyện có chiều sâu", color: "mint",
      focus: "Nhìn quan hệ, vẽ mô hình, viết có mở đầu–diễn biến–kết thúc tự nhiên.",
      math: [
        ["Đơn vị và đổi đơn vị", "Lập bảng đơn vị; luôn kiểm tra đơn vị trước khi cộng/trừ."],
        ["Chu vi hình", "Cắt–ghép hình, nhận ra cạnh chung; giải bài toán thiếu một cạnh."],
        ["Diện tích hình chữ nhật", "Hiểu công thức bằng ô vuông; bài toán ngược tìm chiều dài/rộng."],
        ["Góc và đường thẳng", "Nhận diện góc, song song/vuông góc, vẽ bằng thước–êke."],
        ["Thời gian và lịch", "Khoảng thời gian qua nhiều mốc; lịch tuần, lịch tháng, giờ–phút."],
        ["Sơ đồ hóa bài khó", "Chọn bảng, đoạn thẳng, hình vẽ hoặc thử–sai có hệ thống."]
      ],
      vietnamese: [
        ["Kể chuyện theo điểm nút", "Mỗi truyện cần vấn đề, lựa chọn của nhân vật và thay đổi sau sự việc."],
        ["Mở bài không khuôn mẫu", "Bắt đầu bằng âm thanh, câu hỏi, hành động hoặc một chi tiết lạ."],
        ["Đối thoại đúng tuổi", "Gạch đầu dòng người nói, lời ngắn, phù hợp tính cách."],
        ["Tả cảnh", "Chọn một góc nhìn; đi từ xa đến gần; dùng giác quan có chọn lọc."],
        ["Cảm nhận nhân vật", "Nêu phẩm chất + dẫn chứng + suy nghĩ của Bách."],
        ["Bài văn 3 phần", "Lập dàn ý 5 phút, viết 25 phút, sửa 10 phút theo checklist."]
      ]
    },
    {
      id: "P4", weeks: "19–24", title: "Tư duy chiến lược và văn bản mạch lạc", color: "sky",
      focus: "Không chạy theo mẹo; biết thử chiến lược, bỏ chiến lược không hiệu quả.",
      math: [
        ["Bảng và thử giá trị", "Liệt kê có tổ chức; không bỏ sót, không lặp."],
        ["Làm việc ngược", "Từ đáp án quay về dữ kiện; dùng cho bài tuổi, tiền, số bị che."],
        ["Chẵn lẻ và bất biến", "Nhận ra đại lượng không đổi sau mỗi bước biến đổi."],
        ["Nguyên lý Dirichlet trực quan", "Xếp đồ vật vào ngăn; diễn đạt bằng ví dụ đời sống."],
        ["Tổ hợp cơ bản", "Đếm theo lựa chọn từng bước; kiểm tra bằng cách khác."],
        ["Olympic mini set 1", "4 bài: số, hình, đếm, logic; ghi thời gian và chiến lược đã dùng."]
      ],
      vietnamese: [
        ["Văn bản giải thích", "Nêu hiện tượng, nguyên nhân, ví dụ; mỗi đoạn trả lời một câu hỏi."],
        ["So sánh có căn cứ", "Giống/khác ở cùng một tiêu chí, tránh khen chung chung."],
        ["Viết ý kiến", "Quan điểm, hai lý do, một ví dụ, kết luận tôn trọng người khác."],
        ["Tóm tắt không mất ý chính", "Gạch 5 từ khóa, kể lại bằng 1/3 độ dài văn bản."],
        ["Câu văn có nhịp", "Phối câu ngắn–dài; đọc thành tiếng để nghe chỗ vấp."],
        ["Bài viết có phản hồi", "Bách tự sửa lần 1, người lớn hỏi 3 câu, Bách viết bản 2."]
      ]
    },
    {
      id: "P5", weeks: "25–30", title: "Olympic quốc gia và kỹ năng viết trưởng thành", color: "violet",
      focus: "Tăng độ khó qua nhiều cách giải; văn phong rõ ràng nhưng vẫn hồn nhiên, đúng tuổi.",
      math: [
        ["Phân tích trường hợp", "Chia bài theo điều kiện; kiểm tra mọi trường hợp ở cuối."],
        ["Suy luận từ hình", "Bổ sung đường phụ, đếm góc/cạnh, giải thích mỗi nét vẽ."],
        ["Tối ưu hóa đơn giản", "Tìm cách ít nhất/nhiều nhất; thử bảng nhỏ rồi đoán quy luật."],
        ["Bài toán nhiều lời giải", "Tìm ít nhất 2 cách: sơ đồ, đại số sơ cấp, lập luận."],
        ["Thi thử có chiến thuật", "3 lượt: câu chắc, câu vừa, câu khó; không mắc kẹt quá 8 phút."],
        ["Olympic mini set 2", "Chữa sâu 2 bài khó; viết lại lời giải để bạn lớp 4 khác hiểu."]
      ],
      vietnamese: [
        ["Mở rộng vốn từ theo chủ đề", "Thiên nhiên, gia đình, trường học, lòng dũng cảm; học qua câu."],
        ["Tả người có hành động", "Không liệt kê; để hành động và lời nói tự bộc lộ tính cách."],
        ["Kể chuyện đổi góc nhìn", "Cùng một việc kể từ Bách, bạn nhỏ hoặc đồ vật; giữ logic."],
        ["Sửa câu mơ hồ", "Ai làm gì? ở đâu? khi nào? vì sao? Bổ sung đúng chỗ cần."],
        ["Viết đoạn có luận điểm", "Câu chủ đề rõ, 2 bằng chứng, câu kết nối về ý chính."],
        ["Bài văn tuyển chọn", "Chọn 1 bài, sửa 2 vòng, đặt tiêu đề, giữ lại bản trước để so sánh."]
      ]
    },
    {
      id: "P6", weeks: "31–36", title: "Tổng hợp và dự án cá nhân", color: "navy",
      focus: "Tự học có kế hoạch, giải thích được cách nghĩ, tạo portfolio của riêng Bách.",
      math: [
        ["Chẩn đoán lỗ hổng", "Làm đề tổng hợp, phân loại lỗi theo kiến thức hay chiến lược."],
        ["Sổ tay chiến lược", "Mỗi chiến lược có dấu hiệu nhận biết, ví dụ, bài tự tạo."],
        ["Đề mô phỏng Singapore", "Toán thực tế, đọc dữ liệu, nhiều bước; ưu tiên mô hình hóa."],
        ["Đề mô phỏng Trung Quốc", "Số học, hình học, suy luận; trình bày ngắn mà đủ chứng minh."],
        ["Dự án Toán quanh nhà", "Đo một căn phòng, lập ngân sách nhỏ hoặc khảo sát dữ liệu gia đình."],
        ["Ngày hội Bách giải thích", "Chọn 3 bài hay nhất, quay/ghi lại cách giải bằng lời của mình."]
      ],
      vietnamese: [
        ["Đọc sâu một truyện", "Nhân vật, sự kiện, chi tiết đắt giá, thông điệp; dẫn chứng chính xác."],
        ["Viết từ quan sát thật", "Ghi 10 chi tiết trong một buổi đi bộ; chọn 5 chi tiết để viết."],
        ["Bài văn theo đề mở", "Lập dàn ý trước; tôn trọng ý riêng nhưng phải có mạch logic."],
        ["Đọc–viết liên môn", "Đọc bài khoa học ngắn rồi viết giải thích cho bạn nhỏ hơn."],
        ["Portfolio và tự nhận xét", "Chọn 3 bài, ghi tiến bộ, lỗi còn lặp, mục tiêu tiếp theo."],
        ["Ngày hội kể chuyện", "Đọc thành tiếng một bài, nhận phản hồi, sửa câu cuối cùng."]
      ]
    }
  ],
  routines: {
    math: [
      ["Tính nhanh nền", "5 phút", "Một chuỗi tính nhẩm vừa sức nhưng có chiến lược; đúng và nói được cách nghĩ trước khi tăng tốc."],
      ["Học lõi", "6 phút", "Một ý mới, một ví dụ mẫu ở mức lớp 4 khá–giỏi; Bách tự nói lại bằng sơ đồ hoặc lời."],
      ["Luyện sâu", "8 phút", "Hai bài chính và một biến thể; viết đủ bước, không xem đáp án sớm."],
      ["Chốt", "6 phút", "Một câu suy luận hoặc Olympic vừa sức; ghi chiến lược, lỗi và câu hỏi còn vướng."]
    ],
    vietnamese: [
      ["Đọc", "5 phút", "Đọc một đoạn phù hợp; gạch từ khóa, chi tiết làm bằng chứng và câu hỏi chính."],
      ["Lập ý", "5 phút", "Nói hoặc ghi 3–5 ý; chọn trình tự, câu chủ đề và một chi tiết thật."],
      ["Viết", "9 phút", "Viết phần chính theo mục tiêu tuần; ưu tiên câu rõ, mạch lạc và giọng đúng tuổi."],
      ["Sửa & chốt", "6 phút", "Đọc thành tiếng, sửa tối đa 3 điểm có tác động lớn rồi lưu một câu hay."]
    ]
  },
  saturdayRoutines: {
    math: [
      ["Mini-test", "20 phút", "Câu chắc → câu vận dụng → một câu suy luận; không dùng máy tính bỏ túi."],
      ["Chữa lỗi", "15 phút", "Phân loại lỗi: kiến thức, chiến lược hay cẩu thả; làm lại một câu tiêu biểu."],
      ["Tổng kết", "10 phút", "Nói lại chiến lược đã dùng, tốc độ tính nhẩm và điểm cần ôn; phụ huynh chỉ ghi nhận."],
      ["Mục tiêu mới", "5 phút", "Chọn một kỹ năng giữ vững và một thử thách cho tuần sau."]
    ],
    vietnamese: [
      ["Đọc–viết test", "20 phút", "Đọc hiểu hoặc viết theo đề mới cùng kỹ năng; không học thuộc văn mẫu."],
      ["Chữa bài", "15 phút", "Sửa ý, câu, từ, chính tả theo thứ tự; chọn tối đa 3 lỗi quan trọng."],
      ["Tổng kết", "10 phút", "Bách đọc bản 1 và bản 2, nói tiến bộ và điều còn vướng; phụ huynh ghi nhận."],
      ["Mục tiêu mới", "5 phút", "Chọn một thói quen viết và một kỹ thuật diễn đạt để thử tuần sau."]
    ]
  },
  rubrics: [
    ["Toán — hiểu đề", "0: chưa biết bắt đầu · 1: chép dữ kiện · 2: tóm tắt đúng · 3: thấy quan hệ cốt lõi"],
    ["Toán — lập luận", "0: chỉ có đáp số · 1: bước rời rạc · 2: đủ bước · 3: giải thích được vì sao"],
    ["Văn — mạch lạc", "0: lạc ý · 1: có ý nhưng rời · 2: rõ 3 phần · 3: chuyển ý tự nhiên"],
    ["Văn — diễn đạt", "0: nhiều câu cụt · 1: từ chung · 2: câu rõ · 3: có chi tiết và giọng riêng"],
    ["Thói quen", "0: cần nhắc liên tục · 1: làm khi có người kèm · 2: tự làm phần lớn · 3: tự xem lại"]
  ],
  challengeLadder: [
    ["Bậc 1", "Bài mẫu", "Hiểu khái niệm, làm theo một ví dụ."],
    ["Bậc 2", "Bài biến thể", "Dữ kiện đổi, Bách phải chọn lại cách làm."],
    ["Bậc 3", "Bài mở", "Có hơn một hướng; cần giải thích lựa chọn."],
    ["Bậc 4", "Olympic", "Bài lạ; cho phép thử, vẽ, lập bảng và sửa chiến lược."],
    ["Bậc 5", "Dạy lại", "Bách tự tạo bài tương tự và nói cho người khác hiểu."]
  ]
};

// Nội dung từng ngày cho 6 tuần cầu nối. Đây là nội dung bổ trợ do app biên soạn
// theo mạch kiến thức của bộ Kết nối tri thức, không sao chép bài tập hay trang sách.
window.BACH_CURRICULUM.bridgeDailyLessons = {
  math: [
    { week: 1, alignment: "Ôn số và cấu tạo số · lớp 3 → số lớn lớp 4", days: [
      {
        day: "Thứ 2",
        title: "Đọc số như đọc bản đồ",
        objective: "Đọc, viết số đến 100.000 và chỉ ra từng hàng.",
        example: "48.305 = 40.000 + 8.000 + 300 + 5.",
        basic: "Câu 1: Tính nhẩm 3.998 + 2.007 và giải thích cách nhẩm gọn.\nCâu 2: Tính nhẩm 7.250 − 1.999 và giải thích cách nhẩm gọn.",
        applied: "Bảng giá trị hàng: hàng chục nghìn là 2; hàng nghìn là 7; hàng trăm là 0; hàng chục là 4; hàng đơn vị là 6.\na) Viết số.\nb) Đọc số.",
        reasoning: "Đổi chữ số hàng trăm của số 48.305 thành 9. Số mới tăng bao nhiêu đơn vị? Giải thích vì sao không cần đặt tính.",
        selfCheck: "Bước 1: Đọc lại số vừa viết từ trái sang phải.\nBước 2: Đối chiếu từng chữ số với đúng tên hàng trong bảng.\nBước 3: Đếm đủ năm chữ số để không bỏ sót chữ số 0.",
        challenge: "Bước 1: Giữ nguyên các chữ số khác của số 48.305, thay chữ số hàng chục nghìn bằng 7 để được số mới.\nBước 2: Tính xem số mới lớn hơn số 48.305 bao nhiêu đơn vị.\nBước 3: Giải thích cách tính hiệu hai số mà không cần đặt tính dọc.",
        hint: "Gợi ý 1: Nhớ lại giá trị của hàng chục nghìn là 10.000.\nGợi ý 2: Tìm hiệu giữa hai chữ số ở hàng chục nghìn: 7 − 4 = 3 chục nghìn.\nGợi ý 3: Kết luận số mới tăng thêm 30.000 đơn vị.",
        advanced: "Bước 1: Dùng các chữ số 4, 8, 3, 0, 5 để lập số lớn nhất có năm chữ số khác nhau.\nBước 2: Dùng đúng các chữ số đó để lập số bé nhất có năm chữ số khác nhau.\nBước 3: Tính hiệu của hai số vừa lập."
      },
      { day: "Thứ 3", title: "Gộp và tách số", objective: "Tách số theo hàng và gộp các số tròn để tính nhanh.", example: "6.400 = 64 trăm = 6.000 + 400.", basic: "Tách các số 5.820, 24.090, 73.504 thành tổng các hàng; tính nhẩm 300 + 700 và 4.000 + 6.000.", applied: "Ống heo có 85.000 đồng: lập hai cách biểu diễn số tiền này thành tổng các tờ tiền hoặc các số tròn chục nghìn, tròn nghìn.", reasoning: "Để nhẩm nhanh 6.400 + 3.600, nên tách 6.400 thành 6.000 + 400 hay 64 trăm? Giải thích vì sao cả hai cách đều đúng.", selfCheck: "Cộng lại các phần tách được và so sánh với số ban đầu: 6.000 + 400 = 6.400.", challenge: "Lập số có năm chữ số sao cho tổng các chữ số ở hàng chục nghìn và hàng nghìn bằng 10, các hàng còn lại bằng 0.", hint: "Gợi ý 1: Chọn hai chữ số có tổng bằng 10 như 4 và 6.\nGợi ý 2: Viết số 46.000 hoặc 64.000.\nGợi ý 3: Kiểm tra các hàng trăm, chục, đơn vị đều là 0." },
      { day: "Thứ 4", title: "So sánh có lý do", objective: "So sánh số bằng hàng cao nhất khác nhau, không chỉ nhìn chữ số cuối.", example: "52.080 > 49.999 vì hàng chục nghìn lớn hơn.", basic: "Sắp xếp 5 số theo thứ tự tăng dần: 45.200; 52.080; 49.999; 52.800; 45.020.", applied: "Bác An có ngân sách 150.000 đồng để mua đồ dùng. Bác đã mua một cặp sách giá 78.000 đồng và muốn mua thêm một bộ sáp màu. Cửa hàng có bộ loại A giá 68.000 đồng và bộ loại B giá 72.500 đồng. Hỏi bác An có đủ tiền mua bộ loại B không, và nếu chọn bộ loại A rẻ hơn thì sau khi mua bác còn lại bao nhiêu tiền?", reasoning: "Tìm một số tròn trăm nằm giữa hai số 49.999 và 52.080; giải thích vì sao số đó thỏa mãn.", selfCheck: "Khoanh chữ số ở hàng đầu tiên khác nhau từ trái sang phải khi so sánh hai số.", challenge: "Cho số có năm chữ số dạng 52.a8b. Biết rằng 52.a8b lớn hơn 52.680 và nhỏ hơn 52.880; chữ số hàng trăm a gấp 2 lần chữ số hàng đơn vị b. Em hãy thực hiện bài toán nhiều bước: xét từng trường hợp của b để tìm a, lập luận so sánh thứ tự các số và kiểm tra lại để tìm tất cả các số thỏa mãn.", hint: "Gợi ý 1: Vì a là chữ số và a = 2 × b nên chữ số hàng trăm a phải là số chẵn. Do 52.680 < 52.a8b < 52.880, hãy thu hẹp xem a chỉ có thể nhận giá trị nào?\nGợi ý 2: Xét hai trường hợp có thể của a: nếu a = 6 thì b = 3; nếu a = 8 thì b = 4. Hãy viết hai số có năm chữ số tương ứng.\nGợi ý 3: So sánh từng số vừa tìm được với 52.680 và 52.880 để kiểm tra lại và xác minh kết luận cuối cùng." },
      { day: "Thứ 5", title: "Làm tròn để cảm nhận độ lớn", objective: "Làm tròn đến chục, trăm, nghìn và biết khi nào dùng ước lượng.", example: "3.648 làm tròn đến trăm là 3.600 vì 48 < 50.", basic: "Làm tròn 5 số sau đến hàng trăm và hàng nghìn: 3.648; 15.274; 48.910; 72.045; 89.960.", applied: "Ba kệ sách có lần lượt 198 quyển, 305 quyển và 492 quyển. Làm tròn đến hàng trăm để ước lượng tổng số sách của ba kệ.", reasoning: "Làm tròn số 4.982 đến hàng chục (được 4.980) và hàng trăm (được 5.000): Giải thích vì sao hai kết quả này rất gần nhau.", selfCheck: "Quan sát chữ số ngay bên phải hàng cần làm tròn: nếu ≥ 5 thì tăng 1 ở hàng làm tròn, nếu < 5 thì giữ nguyên.", challenge: "Tìm số tự nhiên lớn nhất và bé nhất có bốn chữ số khi làm tròn đến hàng trăm đều được 3.500.", hint: "Gợi ý 1: Số bé nhất cần chữ số hàng chục là 5 (3.450).\nGợi ý 2: Số lớn nhất cần chữ số hàng chục nhỏ hơn 5 (3.549).\nGợi ý 3: Thử làm tròn lại để kiểm tra." },
      { day: "Thứ 6", title: "Nói lại bằng lời của mình", objective: "Kết hợp đọc, tách, so sánh và làm tròn trong một tình huống.", example: "Đọc bảng điểm dân số nhỏ, chọn số lớn nhất rồi làm tròn.", basic: "Cho số 63.825: (1) Nêu giá trị của chữ số 3 và chữ số 8; (2) Làm tròn số đến hàng nghìn; (3) Viết số liền trước và số liền sau.", applied: "Bảng dân số 3 xã: Xã A có 24.500 người, Xã B có 31.200 người, Xã C có 19.800 người. So sánh dân số hai xã lớn nhất và ước lượng tổng dân số cả 3 xã.", reasoning: "Nếu dân số Xã C tăng từ 19.800 lên 20.000 người, thứ tự sắp xếp dân số 3 xã có thay đổi không? Giải thích vì sao.", selfCheck: "Ước lượng trước kết quả rồi đối chiếu với phép tính chính xác.", challenge: "Cho 5 chữ số 0, 2, 4, 6, 8. Lập số lớn nhất có 5 chữ số khác nhau và làm tròn số đó đến hàng chục nghìn.", hint: "Gợi ý 1: Xếp các chữ số theo thứ tự giảm dần: 86.420.\nGợi ý 2: Hàng nghìn là 6 (≥ 5) nên làm tròn lên 90.000.\nGợi ý 3: Kiểm tra đủ 5 chữ số." },
      { day: "Thứ 7", title: "Mini-check tuần 1", objective: "Chứng minh mình hiểu cấu tạo số, không chỉ nhớ cách đọc.", example: "Giải thích vì sao 70.050 không có chữ số hàng trăm.", basic: "Làm 6 câu: (1) Đọc số 85.040; (2) Viết số gồm 7 chục nghìn, 3 trăm và 5 đơn vị; (3) So sánh 48.500 và 48.099; (4) Sắp xếp 5 số: 12.000, 9.800, 15.400, 11.500, 9.080; (5) Làm tròn 27.650 đến hàng nghìn; (6) Tính nhẩm 40.000 + 30.000.", applied: "Bách có 90.000 đồng, mua một bộ thước kẻ 25.000 đồng và một hộp bút 45.000 đồng. Tính số tiền Bách còn lại.", reasoning: "Viết số có năm chữ số có đúng ba chữ số 0 (ví dụ 50.004), nêu giá trị từng hàng của số đó.", selfCheck: "Đánh dấu lỗi thuộc đọc số, giá trị hàng hay tính toán.", challenge: "Dùng 4 thẻ số 5, 0, 7, 2 để lập tất cả các số có 4 chữ số khác nhau lớn hơn 7.000.", hint: "Gợi ý 1: Chữ số hàng nghìn bắt buộc phải là 7.\nGợi ý 2: Đổi chỗ 3 chữ số 5, 0, 2 ở các hàng còn lại.\nGợi ý 3: Liệt kê đủ 6 số theo thứ tự." }
    ]},
    { week: 2, alignment: "Cộng trừ và chiến lược bù trừ · nền lớp 3", days: [
      { day: "Thứ 2", title: "Bù cho số tròn", objective: "Cộng số gần tròn bằng cách bù rồi điều chỉnh.", example: "398 + 27 = 400 + 27 − 2 = 425.", basic: "Tính nhẩm bằng bù trừ: (1) 199 + 6; (2) 498 + 25; (3) 2.999 + 8.", applied: "Kho có 398 hộp bút, nhập thêm 145 hộp bút nữa. Dùng cách làm tròn bù trừ để tính nhanh tổng số hộp bút trong kho.", reasoning: "Khi tính 398 + 27, giải thích vì sao đổi thành (400 + 27) − 2 không làm thay đổi tổng.", selfCheck: "Ước lượng tổng ở hàng trăm trước khi kết luận.", challenge: "Tính nhanh tổng: 198 + 297 + 396 bằng cách mượn và trả số bù.", hint: "Gợi ý 1: Làm tròn 198 thành 200, 297 thành 300, 396 thành 400.\nGợi ý 2: Cộng 200 + 300 + 400 = 900.\nGợi ý 3: Trừ đi số đã mượn (2 + 3 + 4 = 9) để được kết quả 891." },
      { day: "Thứ 3", title: "Trừ số gần tròn", objective: "Trừ số gần 100, 1.000 bằng bù trừ.", example: "620 − 198 = 620 − 200 + 2 = 422.", basic: "Tính nhẩm bằng bù trừ: (1) 500 − 99; (2) 1.000 − 497; (3) 830 − 398.", applied: "Bách có 1.000.000 đồng, mua sách hết 298.000 đồng và mua balo hết 499.000 đồng. Dùng bù trừ tính số tiền còn lại.", reasoning: "Khi tính 620 − 198, so sánh cách bù trừ 620 − 200 + 2 với cách đặt tính dọc; cách nào nhẩm nhanh hơn?", selfCheck: "Cộng ngược kết quả vừa tìm được với số trừ để kiểm tra.", challenge: "Tính nhanh: 1.500 − 498 − 298 mà không cần đặt tính dọc.", hint: "Gợi ý 1: Trừ 500 rồi cộng 2; trừ tiếp 300 rồi cộng 2.\nGợi ý 2: Ta có 1.500 − 500 − 300 + 4 = 704.\nGợi ý 3: Thử lại bằng phép cộng ngược." },
      { day: "Thứ 4", title: "Tách số để cộng", objective: "Tách chục/trăm để cộng nhẩm rõ ràng.", example: "247 + 135 = 247 + 100 + 30 + 5 = 382.", basic: "Tính nhẩm bằng cách tách số: (1) 356 + 128; (2) 475 + 219; (3) 1.240 + 365.", applied: "Xe ô tô đi chặng thứ nhất dài 245 km, chặng thứ hai dài 185 km. Tách số để tính tổng quãng đường xe đã đi.", reasoning: "Trong phép tính 245 + 185, tách 5 từ 185 ghép sang 245 thành 250 + 180 có ưu điểm gì?", selfCheck: "Kiểm tra chữ số hàng đơn vị và ước lượng khoảng tổng.", challenge: "Tính nhẩm nhanh tổng 4 số: 125 + 236 + 75 + 64 bằng cách nhóm cặp số tròn.", hint: "Gợi ý 1: Nhóm (125 + 75) và (236 + 64).\nGợi ý 2: Tính 200 + 300 = 500.\nGợi ý 3: Kiểm tra không bỏ sót số nào." },
      { day: "Thứ 5", title: "Trừ theo phần thuận tiện", objective: "Chọn tách số hoặc đi đến số tròn khi trừ.", example: "754 − 298 = 754 − 300 + 2 = 456.", basic: "Tính nhẩm theo phần thuận tiện: (1) 450 − 180; (2) 754 − 298; (3) 1.520 − 690.", applied: "Ban tổ chức có 750 vé xem xiếc, đã phát đợt một 290 vé và đợt hai 180 vé. Tính số vé còn lại.", reasoning: "Với phép tính 754 − 298, nêu hai cách nhẩm: (1) trừ 300 rồi cộng 2; (2) cùng thêm 2 thành 756 − 300.", selfCheck: "Thử lại bằng phép cộng hoặc đặt tính.", challenge: "Tìm x biết x + 298 = 754 mà không cần đặt tính dọc.", hint: "Gợi ý 1: x = 754 − 298.\nGợi ý 2: Tính 754 − 300 + 2 = 456.\nGợi ý 3: Thay x vào lại để kiểm tra." },
      { day: "Thứ 6", title: "Tốc độ không quan trọng hơn đúng", objective: "Phân biệt nhẩm nhanh, nhẩm ẩu và biết dừng để kiểm tra.", example: "Nếu 450 + 280 gần 700 thì đáp án 1.730 chắc chắn sai.", basic: "Chỉ ra lỗi sai và sửa lại cho đúng: (1) 398 + 45 = 445; (2) 620 − 198 = 420; (3) 450 + 280 = 1.730.", applied: "Bảng thu chi quỹ lớp: Thu 500.000 đồng, mua hoa 195.000 đồng, mua quà 205.000 đồng. Tính số tiền quỹ lớp còn lại.", reasoning: "Khi nào nên tính nhẩm bằng bù trừ và khi nào nên đặt tính dọc đối với các phép cộng trừ nhiều chữ số?", selfCheck: "Ghi chiến lược đã dùng và một lỗi cần tránh.", challenge: "Tìm hai số có tổng bằng 1.000, biết nếu bớt số thứ nhất đi 15 đơn vị và thêm vào số thứ hai 15 đơn vị thì hai số bằng nhau.", hint: "Gợi ý 1: Sau khi thêm bớt hai số bằng nhau tức là mỗi số bằng 500.\nGợi ý 2: Số thứ nhất là 500 + 15 = 515, số thứ hai là 500 − 15 = 485.\nGợi ý 3: Kiểm tra tổng 515 + 485 = 1.000." },
      { day: "Thứ 7", title: "Mini-check tuần 2", objective: "Cộng trừ chính xác, chọn được bù trừ và kiểm tra ngược.", example: "Giải thích 999 + 46 bằng hai cách.", basic: "Làm 6 câu: (1) 198 + 57; (2) 499 + 326; (3) 540 − 199; (4) 830 − 395; (5) 1.000 − 345; (6) 2.450 + 998.", applied: "Thư viện trường có 1.250 quyển truyện, đợt một nhập thêm 398 quyển, đợt hai cho mượn 250 quyển. Tính số quyển truyện hiện có trong thư viện.", reasoning: "Viết hai số có ba chữ số khác nhau sao cho tổng của chúng đúng bằng 1.000 và giải thích cách chọn số.", selfCheck: "Chấm riêng độ đúng và cách giải thích.", challenge: "Không tính cụ thể, so sánh giá trị của biểu thức A = 198 + 402 và B = 200 + 400.", hint: "Gợi ý 1: A = (200 − 2) + (400 + 2) = 200 + 400.\nGợi ý 2: B = 200 + 400.\nGợi ý 3: Kết luận A = B." }
    ]},
    { week: 3, alignment: "Bảng nhân và cấu trúc phép nhân", days: [
      { day: "Thứ 2", title: "Nhân bằng gấp đôi", objective: "Dùng gấp đôi và gấp bốn để nhớ các tích quen thuộc.", example: "6 × 8 = 3 × 8 × 2 = 48.", basic: "Tính nhẩm bằng cách gấp đôi liên tiếp: (1) 15 × 4; (2) 25 × 8; (3) 35 × 4; (4) 18 × 5.", applied: "Có 6 khay bánh, mỗi khay xếp 8 chiếc bánh. Tính tổng số bánh bằng cách nhẩm qua gấp đôi: (6 × 4) × 2.", reasoning: "Khi gấp một thừa số lên 2 lần và giữ nguyên thừa số kia, tích thay đổi như thế nào? Cho ví dụ minh họa với 12 × 4.", selfCheck: "Đổi chỗ hai thừa số để kiểm tra.", challenge: "Tính nhanh: 15 × 16 bằng cách tách 16 = 2 × 8 hoặc 4 × 4.", hint: "Gợi ý 1: 15 × 16 = 15 × 2 × 8.\nGợi ý 2: 30 × 8 = 240.\nGợi ý 3: Thử lại với cách tách 16 = 4 × 4." },
      { day: "Thứ 3", title: "Nhân với số tròn", objective: "Tách 9, 19 hoặc 29 thành số tròn dễ tính.", example: "8 × 9 = 8 × 10 − 8 = 72.", basic: "Tính nhẩm qua mốc tròn: (1) 7 × 9; (2) 12 × 9; (3) 6 × 19; (4) 15 × 29.", applied: "Một cửa hàng nhập về 19 thùng nước khoáng, mỗi thùng chứa 6 chai. Tính tổng số chai nước đã nhập bằng cách lấy 20 × 6 − 6.", reasoning: "Vì sao tách 19 thành 20 − 1 giúp tính 19 × 6 nhanh hơn đặt tính dọc?", selfCheck: "Ước lượng tích trước khi tính.", challenge: "Tính nhẩm: 25 × 19 và giải thích cách tách 19 = 20 − 1.", hint: "Gợi ý 1: 25 × 19 = 25 × 20 − 25.\nGợi ý 2: 500 − 25 = 475.\nGợi ý 3: Đối chiếu với đặt tính dọc." },
      { day: "Thứ 4", title: "Tính phân phối", objective: "Tách một thừa số để nhân từng phần rồi cộng.", example: "14 × 3 = 10 × 3 + 4 × 3 = 42.", basic: "Tính bằng cách tách số (tính chất phân phối): (1) 14 × 3; (2) 23 × 4; (3) 35 × 6.", applied: "Khu vườn trường trồng 14 hàng cây, mỗi hàng có 7 cây. Tách 14 = 10 + 4 để tính tổng số cây trong vườn.", reasoning: "Khi tính 28 × 4, nên tách 28 = 20 + 8 hay 28 = 30 − 2? Nêu ưu điểm của từng cách.", selfCheck: "Cộng các tích riêng, không bỏ phần nào.", challenge: "Tính giá trị biểu thức bằng cách thuận tiện: 36 × 4 + 36 × 6.", hint: "Gợi ý 1: Đưa thừa số chung 36 ra ngoài: 36 × (4 + 6).\nGợi ý 2: Tính 36 × 10 = 360.\nGợi ý 3: Kiểm tra từng tích riêng: 144 + 216 = 360." },
      { day: "Thứ 5", title: "Bảng nhân không học vẹt", objective: "Liên hệ phép nhân với diện tích mảng ô vuông và nhóm bằng nhau.", example: "4×6 là 4 hàng, mỗi hàng 6 ô; cũng là 6×4.", basic: "Vẽ mảng ô vuông hoặc viết phép nhân tương ứng: (1) 4 hàng mỗi hàng 6 ô; (2) 5 hàng mỗi hàng 8 ô; (3) 7 hàng mỗi hàng 9 ô.", applied: "Phòng học có 6 dãy bàn, mỗi dãy có 5 bộ bàn ghế. Tính số bộ bàn ghế và giải thích vì sao 6 × 5 = 5 × 6.", reasoning: "Hai phép nhân khác nhau như 4 × 6 và 3 × 8 có cùng kết quả 24 không? Giải thích ý nghĩa hình học của chúng.", selfCheck: "Đối chiếu hình, phép nhân và đáp số.", challenge: "Tìm tất cả các cặp số tự nhiên có một chữ số có tích bằng 36.", hint: "Gợi ý 1: 36 = 4 × 9 = 6 × 6 = 9 × 4.\nGợi ý 2: Viết các cặp (4; 9) và (6; 6).\nGợi ý 3: Kiểm tra không còn cặp nào khác." },
      { day: "Thứ 6", title: "Nhân nhẩm rồi viết đủ", objective: "Biết chuyển từ nhẩm sang trình bày khi số lớn hơn.", example: "23×4 = 20×4 + 3×4 = 92.", basic: "Thực hiện phép tính và nêu cách nhẩm: (1) 23 × 4; (2) 45 × 3; (3) 18 × 6.", applied: "Mua 8 quyển vở cùng loại, mỗi quyển giá 7.500 đồng. Tính tổng số tiền mua vở.", reasoning: "Khi nhân số lớn như 148 × 6, vì sao nên đặt tính dọc thay vì chỉ tính nhẩm?", selfCheck: "Kiểm tra chữ số cuối và khoảng của tích.", challenge: "Tính nhanh 125 × 32 bằng cách tách 32 = 8 × 4.", hint: "Gợi ý 1: 125 × 32 = (125 × 8) × 4.\nGợi ý 2: 1.000 × 4 = 4.000.\nGợi ý 3: Giải thích vì sao 125 × 8 = 1.000 là cặp số quen thuộc." },
      { day: "Thứ 7", title: "Mini-check tuần 3", objective: "Củng cố bảng nhân và ít nhất hai chiến lược cho một phép tính.", example: "Giải 18×5 bằng tách số và gấp đôi.", basic: "Tính 6 câu: (1) 16 × 4; (2) 25 × 4; (3) 14 × 8; (4) 18 × 5; (5) 34 × 9; (6) 45 × 11.", applied: "Có 15 hộp bút sáp màu, mỗi hộp có 12 chiếc bút. Tính tổng số chiếc bút sáp màu trong 15 hộp.", reasoning: "Tạo một phép nhân có tích lớn hơn 100 nhưng dễ nhẩm (ví dụ 25 × 6 = 150) và giải thích cách nhẩm.", selfCheck: "Ghi bảng nhân nào còn chậm để ôn lại.", challenge: "Tìm x biết x ÷ 4 = 25 × 2.", hint: "Gợi ý 1: Tính vế phải: 25 × 2 = 50.\nGợi ý 2: x = 50 × 4 = 200.\nGợi ý 3: Thử lại: 200 ÷ 4 = 50." }
    ]},
    { week: 4, alignment: "Chia đều, lập nhóm và phép ngược", days: [
      { day: "Thứ 2", title: "Chia là chia đều", objective: "Phân biệt chia đều với lập nhóm qua vật thật hoặc hình vẽ.", example: "24 cái kẹo chia 6 bạn, mỗi bạn 4 cái: 24÷6=4.", basic: "Viết phép chia tương ứng: (1) Chia đều 24 cái kẹo cho 6 bạn; (2) Chia 35 quyển vở cho 5 tổ; (3) Xếp 48 cái bánh vào 8 đĩa.", applied: "Lớp có 36 chiếc compa, chia đều cho 4 nhóm học tập. Mỗi nhóm nhận được bao nhiêu chiếc compa?", reasoning: "Nếu giữ nguyên 36 chiếc compa nhưng chia cho 6 nhóm thì mỗi nhóm nhận được nhiều hơn hay ít hơn? Vì sao?", selfCheck: "Nhân thương với số chia để kiểm tra.", challenge: "Có 60 quyển sách chia đều vào các túi, mỗi túi không quá 15 quyển và không ít hơn 8 quyển. Tìm số túi có thể có.", hint: "Gợi ý 1: Tìm các ước của 60 nằm trong khoảng từ 8 đến 15: 10, 12, 15.\nGợi ý 2: Số túi tương ứng là 60 ÷ 10 = 6, 60 ÷ 12 = 5, 60 ÷ 15 = 4.\nGợi ý 3: Kết luận có 4, 5 hoặc 6 túi." },
      { day: "Thứ 3", title: "Họ phép tính", objective: "Dùng phép nhân để suy ra phép chia quen thuộc.", example: "7×8=56 nên 56÷7=8 và 56÷8=7.", basic: "Từ mỗi phép nhân sau, viết hai phép chia tương ứng: (1) 7 × 8 = 56; (2) 9 × 6 = 54; (3) 12 × 5 = 60; (4) 15 × 4 = 60.", applied: "Có 72 học sinh tham gia đồng diễn, chia thành các hàng, mỗi hàng 8 học sinh. Lập phép chia để tính số hàng.", reasoning: "Nếu biết tích là 84 và một thừa số là 7, giải thích cách tìm thừa số còn lại bằng phép chia.", selfCheck: "Đọc phép tính bằng lời.", challenge: "Từ 3 số 6, 8, 48 viết đủ 4 phép tính thuộc cùng một họ phép tính.", hint: "Gợi ý 1: 6 × 8 = 48 và 8 × 6 = 48.\nGợi ý 2: 48 ÷ 6 = 8 và 48 ÷ 8 = 6.\nGợi ý 3: Kiểm tra đủ 2 phép nhân và 2 phép chia." },
      { day: "Thứ 4", title: "Số dư có ý nghĩa", objective: "Hiểu số dư nhỏ hơn số chia và giải thích trong tình huống.", example: "17÷5=3 dư 2: còn 2 vật chưa đủ một nhóm.", basic: "Thực hiện phép chia có dư và ghi rõ thương, số dư: (1) 17 ÷ 5; (2) 29 ÷ 4; (3) 45 ÷ 7; (4) 58 ÷ 8.", applied: "Một lớp có 35 học sinh, mỗi bàn ngồi được tối đa 4 học sinh. Cần ít nhất bao nhiêu bàn để tất cả học sinh đều có chỗ ngồi?", reasoning: "Trong bài toán xếp 35 học sinh vào bàn 4 chỗ, giải thích ý nghĩa của số dư và vì sao phải cộng thêm 1 bàn.", selfCheck: "Kiểm tra thương×số chia+số dư.", challenge: "Trong một phép chia cho 6 có số dư là 5. Nếu tăng số bị chia thêm 1 đơn vị thì phép chia mới có số dư là bao nhiêu?", hint: "Gợi ý 1: Thêm 1 đơn vị vào số bị chia thì số dư trở thành 5 + 1 = 6.\nGợi ý 2: 6 chia hết cho 6 nên thương tăng 1 đơn vị và số dư mới là 0.\nGợi ý 3: Thử với số cụ thể: 11 ÷ 6 = 1 (dư 5) → 12 ÷ 6 = 2 (dư 0)." },
      { day: "Thứ 5", title: "Chia gần đúng rồi điều chỉnh", objective: "Ước lượng thương trước khi thực hiện phép chia.", example: "198÷4 gần 200÷4=50 nên thương khoảng 49–50.", basic: "Ước lượng thương trước rồi đặt tính chính xác: (1) 198 ÷ 4; (2) 285 ÷ 7; (3) 392 ÷ 8.", applied: "Cuốn truyện dày 180 trang. Nếu mỗi ngày Bách đọc 8 trang thì sau bao nhiêu ngày Bách đọc xong cuốn truyện?", reasoning: "Khi ước lượng thương của 198 ÷ 4 bằng cách lấy 200 ÷ 4 = 50, thương thực tế sẽ lớn hơn hay nhỏ hơn 50? Vì sao?", selfCheck: "So sánh thương với ước lượng.", challenge: "Tìm số tự nhiên a nhỏ nhất sao cho a chia cho 5 được thương là 24 và có số dư lớn nhất.", hint: "Gợi ý 1: Số chia là 5 nên số dư lớn nhất là 4.\nGợi ý 2: a = 24 × 5 + 4.\nGợi ý 3: Tính a = 120 + 4 = 124." },
      { day: "Thứ 6", title: "Sửa một phép chia sai", objective: "Tìm lỗi ở thương, số dư hoặc phép nhân kiểm tra.", example: "32÷6=5 dư 4 đúng vì 5×6+4=34? Sai; thương đúng là 5 dư 2.", basic: "Chỉ ra lỗi sai và viết lại phép chia đúng: (1) 32 ÷ 6 = 5 (dư 4); (2) 47 ÷ 5 = 8 (dư 7); (3) 65 ÷ 8 = 7 (dư 9).", applied: "Bạn Nam chia 50 quả cam vào các túi, mỗi túi 6 quả và ghi kết quả: 7 túi dư 8 quả. Hãy sửa lại cho đúng.", reasoning: "Trong một phép chia cho 7, số dư lớn nhất có thể là bao nhiêu? Giải thích vì sao số dư không thể bằng 7.", selfCheck: "Nhớ: số dư luôn bé hơn số chia.", challenge: "Một phép chia có số chia là 8, thương là 12 và số dư là số dư lớn nhất có thể. Tìm số bị chia.", hint: "Gợi ý 1: Số dư lớn nhất khi chia cho 8 là 7.\nGợi ý 2: Số bị chia = 12 × 8 + 7.\nGợi ý 3: Tính 96 + 7 = 103." },
      { day: "Thứ 7", title: "Mini-check tuần 4", objective: "Nối chia với nhân, hiểu số dư và biết kiểm tra ngược.", example: "Nói bằng lời ý nghĩa của 29÷4=7 dư 1.", basic: "Tính 6 câu: (1) 72 ÷ 8; (2) 84 ÷ 7; (3) 96 ÷ 6; (4) 53 ÷ 7 (dư ?); (5) 68 ÷ 9 (dư ?); (6) 140 ÷ 5.", applied: "Có 46 mét vải, mỗi bộ quần áo may hết 3 mét vải. Hỏi may được nhiều nhất bao nhiêu bộ quần áo và còn thừa mấy mét vải?", reasoning: "Nếu có 46 mét vải may quần áo hết 3 m/bộ thì thừa 1 m vải; làm thế nào để may vừa đủ không thừa vải?", selfCheck: "Đánh dấu lỗi hiểu nghĩa hay lỗi tính.", challenge: "Tìm một số biết rằng lấy số đó chia cho 6 rồi cộng với 15 thì được 25.", hint: "Gợi ý 1: Số đó chia cho 6 bằng 25 − 15 = 10.\nGợi ý 2: Số đó = 10 × 6 = 60.\nGợi ý 3: Thử lại: 60 ÷ 6 + 15 = 25." }
    ]},
    { week: 5, alignment: "Biểu thức, số còn thiếu và quy luật", days: [
      { day: "Thứ 2", title: "Tính phần dễ trước", objective: "Giữ đúng thứ tự trong biểu thức đơn giản.", example: "6 + 4 × 5: tính 4×5 trước rồi cộng 6.", basic: "Tính giá trị của các biểu thức: (1) 6 + 4 × 5; (2) 48 − 18 ÷ 3; (3) 15 × 4 − 20.", applied: "Một cửa hàng có 3 thùng sữa, mỗi thùng có 12 vỉ sữa, đã bán đi 15 vỉ sữa. Viết biểu thức và tính số vỉ sữa còn lại.", reasoning: "Trong biểu thức 6 + 4 × 5, giải thích vì sao tính (6 + 4) trước rồi nhân 5 là sai quy ước.", selfCheck: "Gạch chân phép tính cần làm trước.", challenge: "Thêm dấu ngoặc đơn vào biểu thức 6 + 4 × 5 để được kết quả bằng 50.", hint: "Gợi ý 1: Cần tính tổng trước: (6 + 4).\nGợi ý 2: (6 + 4) × 5 = 10 × 5 = 50.\nGợi ý 3: Kiểm tra dấu ngoặc hợp lệ." },
      { day: "Thứ 3", title: "Tìm số bị che", objective: "Dùng phép ngược để tìm số chưa biết.", example: "□ + 37 = 80 nên □ = 80 − 37 = 43.", basic: "Tìm x hoặc số còn thiếu: (1) x + 37 = 80; (2) x − 45 = 120; (3) 6 × x = 72; (4) x ÷ 8 = 15.", applied: "Một rạp chiếu phim có 250 vé. Sau buổi sáng bán vé, trong rạp còn lại 65 vé. Tìm số vé đã bán bằng phép tính ngược.", reasoning: "Muốn tìm số bị trừ trong phép tính x − 45 = 120, giải thích vì sao ta lấy hiệu cộng với số trừ.", selfCheck: "Thay số tìm được vào đề.", challenge: "Tìm x biết (x + 12) ÷ 4 = 15.", hint: "Gợi ý 1: x + 12 = 15 × 4 = 60.\nGợi ý 2: x = 60 − 12 = 48.\nGợi ý 3: Thay lại: (48 + 12) ÷ 4 = 60 ÷ 4 = 15." },
      { day: "Thứ 4", title: "Quy luật nhỏ", objective: "Nhìn sự thay đổi đều trong dãy số.", example: "12, 17, 22, 27 tăng 5 mỗi bước.", basic: "Tìm quy luật và viết tiếp 3 số: (1) 12, 17, 22, 27, …; (2) 3, 6, 12, 24, …; (3) 100, 90, 80, 70, …", applied: "Hàng ghế thứ nhất có 10 ghế, hàng thứ hai có 14 ghế, hàng thứ ba có 18 ghế. Tính số ghế ở hàng thứ năm theo quy luật.", reasoning: "Quan sát dãy số 2, 4, 8, 16...: Nêu sự khác nhau giữa quy luật 'cộng thêm' và quy luật 'gấp đôi'.", selfCheck: "Kiểm tra quy luật từ ít nhất hai khoảng.", challenge: "Tìm số hạng thứ 10 của dãy số: 1, 4, 7, 10, 13, …", hint: "Gợi ý 1: Quy luật: mỗi số hạng bằng 1 cộng với (vị trí − 1) × 3.\nGợi ý 2: Số hạng thứ 10 = 1 + (10 − 1) × 3 = 1 + 27 = 28.\nGợi ý 3: Liệt kê đủ 10 số để đối chiếu." },
      { day: "Thứ 5", title: "Gộp số để tính gọn", objective: "Nhận ra các cặp tạo số tròn trong biểu thức.", example: "25 + 36 + 75 = (25+75)+36 = 136.", basic: "Tính nhanh bằng cách ghép cặp tạo số tròn: (1) 25 + 36 + 75; (2) 137 + 89 + 63; (3) 245 + 178 + 55 + 22.", applied: "Bách đi chợ mua rau hết 15.000 đồng, mua thịt hết 65.000 đồng và mua hoa quả hết 35.000 đồng. Ghép cặp tính nhanh tổng số tiền.", reasoning: "Trong biểu thức 25 + 36 + 75, tính chất nào của phép cộng cho phép đổi chỗ và nhóm (25 + 75) + 36?", selfCheck: "Đảm bảo không bỏ hoặc lặp một số hạng.", challenge: "Tính nhanh tổng của 10 số tự nhiên liên tiếp từ 1 đến 10: 1 + 2 + 3 + ... + 10.", hint: "Gợi ý 1: Ghép cặp đầu cuối: (1 + 10) + (2 + 9) + (3 + 8) + (4 + 7) + (5 + 6).\nGợi ý 2: Có 5 cặp, mỗi cặp tổng là 11.\nGợi ý 3: 11 × 5 = 55." },
      { day: "Thứ 6", title: "Nói trước khi viết", objective: "Trình bày một chuỗi tính bằng lời rõ ràng.", example: "Con tính phần trong ngoặc trước vì đó là quy ước của bài.", basic: "Trình bày từng bước tính và nêu lý do: (1) 120 − (30 + 20) × 2; (2) 45 + 55 ÷ 5.", applied: "Dùng các số 2, 3, 5 và các dấu +, ×, dấu ngoặc để lập một biểu thức có giá trị bằng 25.", reasoning: "So sánh hai biểu thức 100 − 40 ÷ 2 và (100 − 40) ÷ 2: Giải thích vì sao dấu ngoặc làm thay đổi hoàn toàn kết quả.", selfCheck: "Mỗi bước có phép tính và lý do.", challenge: "Điền các dấu +, −, ×, ÷ vào ô trống để biểu thức đúng: 5 □ 5 □ 5 □ 5 = 24.", hint: "Gợi ý 1: 5 × 5 − 5 ÷ 5.\nGợi ý 2: 25 − 1 = 24.\nGợi ý 3: Kiểm tra thứ tự nhân chia trước, trừ sau." },
      { day: "Thứ 7", title: "Mini-check tuần 5", objective: "Kết hợp thứ tự tính, số thiếu và quy luật.", example: "Sửa một lời giải tính từ trái sang phải sai quy ước.", basic: "Làm 6 câu: (1) 50 + 50 × 2; (2) (80 − 20) ÷ 3; (3) 15 × 6 + 15 × 4; (4) Tìm x: x × 4 = 96; (5) Dãy 5, 11, 17, 23, ?; (6) 200 − 45 − 55.", applied: "Mẹ mua 3 hộp bánh, mỗi hộp giá 35.000 đồng và đưa cho cô bán hàng tờ tiền 200.000 đồng. Tính số tiền cô bán hàng phải trả lại.", reasoning: "Tạo một dãy số có 5 số bắt đầu từ số 10 với quy luật tự chọn (ví dụ mỗi bước tăng 6) và nêu rõ quy luật.", selfCheck: "Phân loại lỗi kiến thức hay cẩu thả.", challenge: "Tìm giá trị của x sao cho 100 − x × 5 = 25.", hint: "Gợi ý 1: x × 5 = 100 − 25 = 75.\nGợi ý 2: x = 75 ÷ 5 = 15.\nGợi ý 3: Thử lại: 100 − 15 × 5 = 100 − 75 = 25." }
    ]},
    { week: 6, alignment: "Ước lượng, kiểm tra và tự đánh giá", days: [
      { day: "Thứ 2", title: "Đoán khoảng trước", objective: "Ước lượng kết quả trước khi tính chính xác.", example: "49×21 gần 50×20=1.000 nên kết quả quanh 1.000.", basic: "Ước lượng kết quả bằng cách làm tròn số rồi tính chính xác: (1) 392 + 506; (2) 815 − 289; (3) 49 × 6; (4) 198 × 5.", applied: "Mua một chiếc cặp 195.000 đồng, một hộp bút 48.000 đồng và một cuốn sách 52.000 đồng. Ước lượng tổng số tiền cần trả khoảng bao nhiêu trăm nghìn đồng.", reasoning: "Nếu ước lượng 392 + 506 xấp xỉ 400 + 500 = 900, vì sao biết chắc kết quả chính xác phải nhỏ hơn 900?", selfCheck: "Đáp số chính xác phải nằm gần dự đoán.", challenge: "Không đặt tính, hãy giải thích vì sao tích 49 × 21 chắc chắn lớn hơn 1.000.", hint: "Gợi ý 1: 49 × 21 = (50 − 1) × (20 + 1).\nGợi ý 2: 50 × 20 = 1.000; 50 × 1 − 20 × 1 − 1 = 29 > 0.\nGợi ý 3: Do đó 49 × 21 = 1.029 > 1.000." },
      { day: "Thứ 3", title: "Làm ngược", objective: "Kiểm tra kết quả bằng phép tính ngược phù hợp.", example: "Nếu 72−28=44 thì 44+28 phải bằng 72.", basic: "Dùng phép tính ngược để kiểm tra xem kết quả đúng hay sai: (1) 72 − 28 = 44; (2) 135 + 265 = 400; (3) 84 ÷ 6 = 14; (4) 15 × 8 = 110.", applied: "Một bài giải ghi: 'Có 120 quả táo, bán đi 1/3 số táo còn 80 quả; sau đó nhập thêm 40 quả thì có 140 quả.' Hãy kiểm tra lại từng bước xem đúng hay sai.", reasoning: "Để kiểm tra một phép chia có dư như 59 ÷ 7 = 8 (dư 3), ta dùng phép tính ngược nào?", selfCheck: "Đối chiếu cả đơn vị và điều kiện đề.", challenge: "Một số giảm đi 3 lần rồi bớt 8 thì được 12. Tìm số ban đầu bằng cách làm việc ngược.", hint: "Gợi ý 1: Trước khi bớt 8, số đó là 12 + 8 = 20.\nGợi ý 2: Số ban đầu = 20 × 3 = 60.\nGợi ý 3: Thử lại: 60 ÷ 3 − 8 = 20 − 8 = 12." },
      { day: "Thứ 4", title: "Một bài, hai cách", objective: "So sánh hai chiến lược và chọn cách chắc hơn.", example: "398+27 bằng bù trừ hoặc đặt tính đều cho 425.", basic: "Tính bằng 2 cách khác nhau: (1) 36 × 4 + 36 × 6; (2) 498 + 127.", applied: "Bảng đóng góp quỹ: Tổ 1 góp 145.000 đồng, Tổ 2 góp 155.000 đồng, Tổ 3 góp 200.000 đồng. Tính tổng số tiền bằng hai cách (cộng lần lượt hoặc nhóm cặp).", reasoning: "Khi tính 36 × 4 + 36 × 6, cách đặt thừa số chung 36 × (4 + 6) có điểm gì vượt trội hơn cách nhân từng tích riêng?", selfCheck: "Viết vì sao chọn cách làm.", challenge: "Tính tổng 25 × 12 bằng hai cách: (1) 25 × 4 × 3; (2) 25 × 10 + 25 × 2.", hint: "Gợi ý 1: Cách 1: 100 × 3 = 300.\nGợi ý 2: Cách 2: 250 + 50 = 300.\nGợi ý 3: Cả hai cách đều cho kết quả 300." },
      { day: "Thứ 5", title: "Bình tĩnh trước câu lạ", objective: "Tách dữ kiện và thử một mô hình đơn giản khi gặp bài mới.", example: "Vẽ đoạn thẳng trước khi chọn phép tính.", basic: "Vẽ sơ đồ đoạn thẳng tóm tắt: (1) An và Bình có 48 viên bi, An nhiều hơn Bình 12 viên; (2) Chiều dài gấp 3 lần chiều rộng, chu vi hình chữ nhật là 40 cm.", applied: "Một giá sách có hai ngăn chứa tất cả 120 quyển sách. Nếu chuyển 15 quyển từ ngăn trên xuống ngăn dưới thì hai ngăn bằng nhau. Tìm số sách lúc đầu ở mỗi ngăn.", reasoning: "Trong bài toán tổng và hiệu (An và Bình có 48 viên bi, An hơn Bình 12 viên), nêu công thức tìm số lớn và số bé từ sơ đồ.", selfCheck: "Ghi chiến lược đã thử, không chỉ ghi đáp số.", challenge: "Hai thùng dầu có tất cả 80 lít dầu. Nếu đổ 10 lít từ thùng thứ nhất sang thùng thứ hai thì thùng thứ hai gấp 3 lần thùng thứ nhất. Tìm số lít dầu ban đầu của mỗi thùng.", hint: "Gợi ý 1: Lúc sau tổng vẫn là 80 lít, chia 4 phần bằng nhau, mỗi phần 20 lít.\nGợi ý 2: Thùng 1 lúc sau là 20 lít → lúc đầu là 20 + 10 = 30 lít.\nGợi ý 3: Thùng 2 lúc đầu là 80 − 30 = 50 lít." },
      { day: "Thứ 6", title: "Ôn có chọn lọc", objective: "Chọn đúng kỹ năng còn yếu thay vì làm thật nhiều bài.", example: "Sai do nhầm số dư thì ôn phép ngược, không làm thêm mọi dạng.", basic: "Thực hiện lại các phép tính dễ nhầm: (1) 1.000 − 458; (2) 408 ÷ 4; (3) 25 × 16.", applied: "Cho dãy số 4, 9, 14, 19, 24. Viết câu hỏi tìm số hạng thứ 10 của dãy và tự giải chi tiết.", reasoning: "Khi làm phép trừ có nhớ liên tiếp qua các chữ số 0 như 1.000 − 458, lỗi phổ biến nhất là gì và cách phòng tránh ra sao?", selfCheck: "Ghi một việc cụ thể cho tuần sau.", challenge: "Tìm chữ số tận cùng của biểu thức: 11 × 13 × 15 × 17 + 12 × 14 × 16.", hint: "Gợi ý 1: Tích các số lẻ có thừa số 5 có tận cùng là 5.\nGợi ý 2: Tích các số chẵn 12 × 14 × 16 có tận cùng là 8 (2 × 4 × 6 = 48).\nGợi ý 3: Tận cùng của tổng là 5 + 8 = 13 (tận cùng 3)." },
      { day: "Thứ 7", title: "Mini-check cầu nối", objective: "Tự tính, giải thích, kiểm tra và tự đánh giá tiến bộ.", example: "Trình bày trọn vẹn một bài từ đọc đề đến kết luận.", basic: "Làm 8 câu: (1) Đọc số 95.060; (2) 398 + 245; (3) 820 − 399; (4) 25 × 12; (5) 96 ÷ 4; (6) Tính (45 + 55) ÷ 5; (7) Làm tròn 34.820 đến hàng nghìn; (8) 125 × 8.", applied: "Một cửa hàng buổi sáng bán được 35 kg gạo, buổi chiều bán được gấp đôi buổi sáng. Cả ngày cửa hàng thu được bao nhiêu tiền biết mỗi ki-lô-gam gạo giá 18.000 đồng?", reasoning: "Chọn câu khó nhất trong bài kiểm tra hôm nay, giải thích các bước giải và cách em đã kiểm tra lại kết quả.", selfCheck: "Chấm riêng đúng, chiến lược, trình bày và sự bình tĩnh.", challenge: "Cho 4 chữ số 1, 2, 3, 4. Lập tất cả các số có 4 chữ số khác nhau chia hết cho 5 hoặc giải thích vì sao không lập được.", hint: "Gợi ý 1: Dấu hiệu chia hết cho 5 là chữ số tận cùng phải là 0 hoặc 5.\nGợi ý 2: Trong 4 chữ số 1, 2, 3, 4 không có chữ số 0 hay 5.\nGợi ý 3: Kết luận không thể lập được số nào thỏa mãn đề bài." }
    ]}
  ],
  vietnamese: [
    { week: 1, alignment: "Ôn câu và đoạn · đọc hiểu nền lớp 3", days: [
      {
        day: "Thứ 2",
        title: "Câu đủ ý",
        objective: "Nhận biết câu trọn vẹn có đủ hai thành phần: Ai (cái gì) và Làm gì (thế nào).",
        example: "Câu cụt: “Đang tung tăng dưới nắng.” → Câu đủ ý: “Đàn chim sẻ đang tung tăng dưới nắng.”",
        basic: "Sửa 3 câu chưa trọn ý sau thành câu hoàn chỉnh:\n(1) Đang đi bộ trên vỉa hè.\n(2) Bạn Nam bằng chiếc bút máy mới.\n(3) Những bông hoa hồng trong vườn sau cơn mưa sớm.",
        applied: "Viết 3 câu hoàn chỉnh kể về 3 việc con tự làm vào buổi sáng trước khi đến trường.",
        reasoning: "Trong 3 câu vừa viết, câu nào con có thể thêm từ chỉ thời gian (như 'lúc 6 giờ sáng') để người đọc hình dung rõ hơn?",
        selfCheck: "Đọc to từng câu và tự hỏi: Câu đã có đủ người/vật và hoạt động chưa? Cuối câu đã có dấu chấm chưa?",
        challenge: "Viết lại 1 câu kể buổi sáng thành câu có hình ảnh so sánh sinh động (Ví dụ: 'Mặt trời đỏ ửng như chiếc bánh khổng lồ nhô lên sau rặng cây').",
        hint: "Mẹo nhỏ: Câu đủ ý cần trả lời được hai câu hỏi: (1) Ai/Cái gì? và (2) Làm gì/Thế nào? Nếu thiếu một trong hai thì câu sẽ bị cụt."
      },
      {
        day: "Thứ 3",
        title: "Từ khóa của đoạn",
        objective: "Biết tìm 3 từ khóa quan trọng nhất để tóm tắt ý chính của đoạn văn mà không cần chép lại cả đoạn.",
        example: "“Trời đổ mưa rào. Cây cối hả hê uống nước. Mặt đất bốc lên mùi thơm ngai ngái.” → 3 từ khóa: Mưa rào, cây cối, mùi đất.",
        basic: "Đọc đoạn văn sau và gạch chân 3 từ khóa quan trọng nhất:\n“Cơn gió thu nhè nhẹ thổi qua góc sân trường. Những chiếc lá bàng già bắt đầu chuyển sang màu đỏ ối, khẽ nghiêng mình rơi xuống nền gạch đỏ. Tiếng trống trường vang lên giòn giã báo hiệu giờ ra chơi đã đến.”",
        applied: "Dựa vào 3 từ khóa vừa tìm được, hãy kể lại nội dung đoạn văn trên bằng 2 câu theo lời kể của chính con.",
        reasoning: "Nếu bỏ đi từ 'đỏ ối' và 'giòn giã', đoạn văn có còn gợi hình gợi cảm như trước không? Vì sao?",
        selfCheck: "Từ khóa con chọn có phải là từ nêu sự việc hoặc hình ảnh nổi bật nhất không?",
        challenge: "Đặt một nhan đề ngắn (không quá 4 chữ) thật hay cho đoạn văn trên.",
        hint: "Mẹo nhỏ: Từ khóa thường là danh từ chỉ sự vật chính hoặc tính từ/động từ miêu tả ấn tượng nhất."
      },
      {
        day: "Thứ 4",
        title: "Câu mở đoạn hấp dẫn",
        objective: "Học cách viết câu mở đoạn cuốn hút, giới thiệu ngay đối tượng và cảm xúc thay vì mở bài rập khuôn.",
        example: "Mở rập khuôn: “Em có một chiếc bút.” → Mở hấp dẫn: “Trong chiếc cặp sách, món đồ gắn bó với em nhất suốt năm học qua chính là chiếc bút máy màu xanh biển.”",
        basic: "So sánh 2 câu mở đoạn sau cho bài văn tả 'Chiếc hộp bút':\n- Câu A: Hôm nay em xin tả chiếc hộp bút của em.\n- Câu B: Mỗi khi kéo khóa chiếc hộp bút vải dù màu nâu đất, em lại nhớ về món quà sinh nhật bố tặng hồi đầu năm.\nHỏi: Câu nào khiến người đọc tò mò và muốn đọc tiếp hơn? Vì sao?",
        applied: "Hãy tự viết 1 câu mở đoạn thật ấn tượng để giới thiệu về góc học tập hoặc chiếc cặp sách thân yêu của con.",
        reasoning: "Câu mở đoạn của con đã nêu được tên đồ vật và một chi tiết riêng của đồ vật đó chưa?",
        selfCheck: "Kiểm tra xem câu mở của con có bị bắt đầu bằng những cụm từ sáo rỗng như 'Hôm nay em xin...' không.",
        challenge: "Viết thêm 1 câu mở đoạn khác cho cùng đồ vật đó nhưng bắt đầu bằng một âm thanh hoặc hình ảnh (Ví dụ tiếng 'Tách!' khi mở nắp hộp).",
        hint: "Mẹo nhỏ: Bắt đầu bằng một âm thanh, một kỷ niệm hoặc một màu sắc sẽ làm câu mở đoạn sinh động gấp bội."
      },
      {
        day: "Thứ 5",
        title: "Nối câu mạch lạc",
        objective: "Sử dụng các từ nối (vì... nên, tuy... nhưng, sau đó, rồi) để các câu văn gắn kết tự nhiên.",
        example: "“Trời mưa to. Em vẫn đi học đúng giờ.” → “Tuy trời mưa to nhưng em vẫn đến trường đúng giờ.”",
        basic: "Dùng các từ nối thích hợp (vì... nên, tuy... nhưng, sau đó) để ghép 3 cặp câu rời rạc sau:\n(1) Trời mưa tầm tã. Bách vẫn chăm chỉ luyện tính nhẩm.\n(2) Nam tập trung chú ý lắng nghe cô giáo giảng bài. Nam hiểu bài rất nhanh.\n(3) Em cất sách vở ngay ngắn vào ngăn bàn. Em vui vẻ ra sân chơi bóng cùng các bạn.",
        applied: "Viết một đoạn văn 4 câu kể về một hoạt động trong giờ ra chơi ở lớp con, trong đó có dùng ít nhất 2 từ nối (nhưng, sau đó, nhờ vậy).",
        reasoning: "Từ nối nào giúp thể hiện quan hệ nguyên nhân - kết quả? Từ nối nào thể hiện sự đối lập?",
        selfCheck: "Đọc to đoạn văn lên nghe có êm tai không, có chỗ nào bị lặp từ 'sau đó' nhiều lần không?",
        challenge: "Thay thế từ nối 'sau đó' bằng một cụm từ chỉ thời gian hoặc hành động uyển chuyển hơn (Ví dụ: 'Chỉ lát sau, ...', 'Vừa dứt tiếng trống, ...').",
        hint: "Mẹo nhỏ: Đừng lạm dụng quá nhiều từ nối trong một đoạn; 1 đến 2 từ nối đặt đúng chỗ là câu văn đã rất mượt mà."
      },
      {
        day: "Thứ 6",
        title: "Đọc hiểu và trả lời trọn câu",
        objective: "Đọc văn bản ngắn, tìm chi tiết làm bằng chứng và trả lời câu hỏi bằng câu văn trọn vẹn, đủ ý.",
        example: "Câu hỏi: 'Vì sao Nam vui?' → Không chỉ đáp 'vì được điểm 10', mà viết: 'Nam rất vui vì bài toán khó em đã tự mình tìm ra cách giải đúng.'",
        basic: "Đọc mẩu chuyện sau:\n“Thấy bạn Huy loay hoay vì quên mang hộp bút chì màu trong giờ Mỹ thuật, Minh liền đặt hộp sáp màu 12 cây của mình vào giữa bàn rồi khẽ bảo: ‘Hai đứa mình dùng chung nhé!’. Huy ngước lên nhìn bạn, ánh mắt lấp lánh niềm vui.”\nTrả lời 2 câu hỏi sau bằng câu trọn ý:\n(1) Vì sao bạn Huy loay hoay trong giờ học?\n(2) Hành động và lời nói của Minh cho thấy Minh là người bạn như thế nào?",
        applied: "Từ câu chuyện trên, hãy viết 2 câu nêu cảm nghĩ của con về một hành động đẹp giữa bạn bè trong lớp.",
        reasoning: "Chi tiết 'đặt hộp sáp màu vào giữa bàn' và lời nói 'Hai đứa mình dùng chung nhé' chứng minh điều gì ở tính cách của Minh?",
        selfCheck: "Câu trả lời của con đã có đủ chủ ngữ - vị ngữ chưa? Con có chép nguyên văn cả đoạn hay đã trả lời bằng lời của mình?",
        challenge: "Nếu con là bạn Huy trong câu chuyện, sau tiết học con sẽ nói câu gì để cảm ơn Minh thật chân thành?",
        hint: "Mẹo nhỏ: Khi trả lời câu hỏi đọc hiểu, hãy dùng chính từ ngữ trong câu hỏi để mở đầu câu trả lời."
      },
      {
        day: "Thứ 7",
        title: "Mini-check tuần 1: Câu, đoạn và chi tiết",
        objective: "Đánh giá khả năng viết câu trọn ý, dùng từ nối và đọc hiểu qua bài kiểm tra mini 50 phút cuối tuần.",
        example: "Hoàn thành 3 phần: (1) Đọc hiểu có dẫn chứng; (2) Sửa câu và liên kết; (3) Viết đoạn văn ngắn 5 câu.",
        basic: "Phần 1 - Đọc hiểu (15 phút): Đọc đoạn văn 'Buổi sáng trên ban công':\n“Mỗi sáng sớm, ông nội thường ra ban công tưới cho mấy chậu phong lan. Những giọt nước li ti đọng trên cánh hoa tím biếc, lấp lánh như những hạt ngọc dưới ánh mặt trời rực rỡ. Chú chim sâu nhỏ cũng bay đến, chuyền cành ríu rít như muốn hòa vào bản nhạc ngày mới.”\nTrả lời 3 câu hỏi:\n(a) Tìm 2 chi tiết miêu tả vẻ đẹp của những giọt sương trên cánh hoa.\n(b) Tiếng hót của chú chim sâu được so sánh với điều gì?\n(c) Nêu nội dung chính của đoạn văn trong 1 câu.",
        applied: "Phần 2 - Luyện câu và Viết đoạn (25 phút):\n(1) Sửa câu cụt sau thành câu trọn vẹn: 'Trên cành cây cao rợp bóng mát.'\n(2) Dùng từ nối 'tuy... nhưng' để ghép 2 câu sau: 'Trời mùa đông rất lạnh. Bách vẫn dậy sớm tập thể dục.'\n(3) Viết một đoạn văn ngắn (5–7 câu) tả góc học tập của con, có câu mở đoạn nêu cảm xúc và ít nhất 2 chi tiết quan sát thật.",
        reasoning: "Phần 3 - Tự soát lỗi (10 phút): Đọc to bài văn con vừa viết. Tìm và tự sửa 2 lỗi: 1 lỗi dùng từ chưa chính xác và 1 lỗi dấu câu/chính tả.",
        selfCheck: "Chấm điểm theo 3 tiêu chí: (1) Đọc hiểu đúng ý (4 điểm); (2) Câu đúng ngữ pháp, nối mạch lạc (3 điểm); (3) Đoạn văn có chi tiết thật, giàu cảm xúc (3 điểm).",
        challenge: "Viết thêm 1 câu kết đoạn thật đắt giá cho đoạn văn tả góc học tập (thể hiện lời hứa hoặc ước mơ của con).",
        hint: "Mẹo làm bài thi: Đọc kỹ đề trước khi viết; dành 5 phút cuối để đọc to bài làm và rà soát lỗi chính tả."
      }
    ]},
    { week: 2, alignment: "Đoạn văn 5–7 câu · viết rõ ý", days: [
      {
        day: "Thứ 2",
        title: "Một ý chính cho một đoạn",
        objective: "Tập trung viết sâu vào một ý chính rõ ràng thay vì liệt kê dàn trải nhiều sự việc.",
        example: "Đề rộng: Tả trường học → Thu hẹp vào một ý chính: Tả không khí náo nức quanh cột cờ trong giờ ra chơi.",
        basic: "Cho 3 đề bài sau, hãy chọn 1 ý chính hẹp và thú vị nhất để viết thành đoạn văn 5 câu:\n(1) Tả chiếc ba lô đi học của con.\n(2) Kể về một bữa cơm gia đình rộn rã tiếng cười.\n(3) Tả cây bàng góc sân trường vào mùa thu.",
        applied: "Với đề bài con vừa chọn, hãy viết câu chủ đề và 3 gạch đầu dòng nêu 3 chi tiết con sẽ miêu tả.",
        reasoning: "Vì sao tả kỹ 1 chi tiết (như vết xước kỉ niệm trên khóa ba lô) lại xúc động hơn là chỉ kể ba lô có mấy ngăn?",
        selfCheck: "Đoạn văn của con có bị lan man sang chuyện khác không?",
        challenge: "Viết thử câu chủ đề cho 2 cách tiếp cận khác nhau: 1 câu nhấn mạnh màu sắc, 1 câu nhấn mạnh kỷ niệm gắn bó.",
        hint: "Mẹo nhỏ: Viết hẹp mà sâu luôn hay hơn viết rộng mà nông."
      },
      {
        day: "Thứ 3",
        title: "Chi tiết nhìn thấy bằng mắt",
        objective: "Thay thế các lời khen chung chung ('rất đẹp', 'rất thích') bằng chi tiết quan sát cụ thể về màu sắc, hình khối, đường nét.",
        example: "Chung chung: “Chiếc thước kẻ rất đẹp.” → Quan sát thật: “Chiếc thước kẻ nhựa trong suốt, mép viền in những vạch số màu đen đậm, bên góc còn dán hình chú mèo máy mỉm cười.”",
        basic: "Đọc đoạn văn sau và gạch chân các chi tiết nhìn thấy cụ thể:\n“Cây bàng sừng sững giữa sân trường như một chiếc ô xanh khổng lồ. Thân cây nâu mốc, xù xì những vết sẹo của thời gian. Những chiếc lá bàng to như chiếc quạt nan, xanh bóng mỡ màng đung đưa trước gió.”",
        applied: "Hãy quan sát một đồ vật ngay trên bàn học của con (hộp bút, cục tẩy, cái compa) và ghi lại 3 chi tiết nhìn thấy bằng mắt thật cụ thể.",
        reasoning: "So sánh câu 'Quyển vở rất đẹp' với câu 'Bìa vở in hình bầu trời đêm đầy sao lấp lánh', câu nào giúp người đọc hình dung rõ hơn?",
        selfCheck: "Trong bài viết của con có còn từ nào là 'rất đẹp' hay 'rất thích' mà chưa có hình ảnh minh họa không?",
        challenge: "Viết 1 câu miêu tả có sự biến đổi màu sắc (Ví dụ từ xanh non chuyển sang vàng ươm).",
        hint: "Mẹo nhỏ: Đóng vai một họa sĩ vẽ bằng ngôn từ; con nhìn thấy màu gì, vết xước nào, hãy kể đúng như thế."
      },
      {
        day: "Thứ 4",
        title: "Sắp xếp câu theo trình tự hợp lý",
        objective: "Sắp xếp các câu trong đoạn văn theo thứ tự tự nhiên: từ xa đến gần, từ ngoài vào trong, hoặc theo thời gian.",
        example: "Trình tự ngoài vào trong: Tả vỏ hộp bút → khóa kéo → các ngăn bên trong → đồ dùng xếp gọn gàng.",
        basic: "Sắp xếp 4 câu văn bị xáo trộn sau thành một đoạn văn mạch lạc theo trình tự thời gian buổi sáng:\n(A) Tiếng chuông báo thức vang lên reo rắt lúc sáu giờ sáng.\n(B) Sau khi ăn bát cháo nóng hổi mẹ nấu, em chỉnh tề đồng phục rồi bước ra cổng trường.\n(C) Em bật dậy ngay, nhanh nhẹn gấp chiếc chăn vuông vắn như chiếc bánh chưng.\n(D) Em chạy ra sân đánh răng, rửa mặt bằng làn nước mát rượi để tinh thần tỉnh táo.",
        applied: "Hãy viết một đoạn văn 4 câu tả chiếc cặp sách của con theo trình tự: từ vẻ bề ngoài (màu sắc, quai đeo) đến các ngăn bên trong.",
        reasoning: "Nếu đổi câu (B) lên trước câu (A), trật tự câu chuyện sẽ bị vô lý ở điểm nào?",
        selfCheck: "Đọc lại đoạn văn vừa sắp xếp xem các hành động có diễn ra nối tiếp nhau nhịp nhàng không.",
        challenge: "Thêm 1 câu chuyển ý ở giữa câu (C) và (D) để đoạn văn càng mượt mà hơn.",
        hint: "Mẹo nhỏ: Hãy tưởng tượng con đang cầm máy quay phim: quay bao quát trước rồi mới lia máy vào từng chi tiết gần."
      },
      {
        day: "Thứ 5",
        title: "Câu kết đoạn đọng lại dư vị",
        objective: "Biết cách viết câu kết đoạn đọng lại cảm xúc, suy nghĩ hoặc lời hứa chân thành, không lặp lại nguyên văn câu mở.",
        example: "Câu mở: “Góc học tập là nơi thân thuộc nhất của em.” → Câu kết: “Mỗi tối ngồi vào chiếc bàn con con ấy, em lại thấy việc học trở nên êm ả và đầy niềm vui.”",
        basic: "Đọc đoạn văn sau và chọn câu kết hay nhất trong 2 phương án:\n“Chiếc đồng hồ báo thức màu vàng cam nhỏ nhắn đặt ở đầu giường. Tiếng kim giây chạy ‘tích tắc, tích tắc’ đều đặn suốt đêm như tiếng bước chân của thời gian. Mỗi sáng, chiếc chuông reng lên giòn giã đánh thức em dậy học bài.”\n- Phương án 1: Em rất thích chiếc đồng hồ này.\n- Phương án 2: Với em, chiếc đồng hồ không chỉ báo giờ mà còn là một người bạn cần mẫn nhắc em biết quý trọng từng phút giây.",
        applied: "Hãy viết 1 câu kết thật hay cho đoạn văn miêu tả người bà đang ngồi khâu áo bên khung cửa sổ.",
        reasoning: "Phương án 2 hay hơn phương án 1 ở điểm nào? Nó làm bài văn có chiều sâu ra sao?",
        selfCheck: "Câu kết của con đã khép lại đoạn văn một cách trọn vẹn và tự nhiên chưa?",
        challenge: "Viết câu kết đoạn theo hướng mở ra một suy nghĩ mới hoặc một lời cảm ơn thầm kín.",
        hint: "Mẹo nhỏ: Câu kết đoạn giống như nốt nhạc cuối cùng của bài hát; hãy để lại một dư âm ấm áp trong lòng người đọc."
      },
      {
        day: "Thứ 6",
        title: "Tự biên tập và sửa lỗi câu từ",
        objective: "Rèn luyện thói quen đọc to thành tiếng bản nháp để tự phát hiện lỗi lặp từ, lỗi câu mơ hồ và viết lại bản tốt hơn.",
        example: "Bản nháp: “Hôm nay em đi học. Em thấy bạn Lan. Lan cho em mượn sách. Em rất vui.” → Bản sửa: “Vừa bước vào lớp, em đã gặp Lan. Nhận cuốn sách khoa học bạn đưa cho mượn, lòng em rộn rã niềm vui.”",
        basic: "Đọc đoạn văn lặp từ sau và sửa lại cho sáng rõ:\n“Nhà em có nuôi một con mèo. Con mèo của em có bộ lông màu vàng. Con mèo rất thích sưởi nắng. Em rất yêu con mèo của em.”\nHãy viết lại đoạn văn trên, thay thế các từ lặp 'con mèo' bằng đại từ hoặc chi tiết miêu tả sinh động.",
        applied: "Lấy bài viết hôm Thứ 4 của con ra đọc to thành tiếng. Dùng bút chì khoanh 2 chỗ con thấy đọc bị vấp và viết lại 2 câu đó cho mượt mà hơn.",
        reasoning: "Vì sao việc đọc thành tiếng lại giúp ta phát hiện ra câu cụt hoặc câu lặp nhanh hơn là chỉ đọc thầm bằng mắt?",
        selfCheck: "So sánh bản cũ và bản mới: bản mới có ít từ lặp hơn và giàu hình ảnh hơn không?",
        challenge: "Đổi 1 câu kể đơn điệu thành câu có từ ngữ gợi âm thanh (như 'tiếng rù rì êm ái').",
        hint: "Mẹo nhỏ: Đọc bài như thể con đang kể chuyện cho người bạn thân nghe; chỗ nào con đọc thấy ngập ngừng chính là chỗ cần sửa."
      },
      {
        day: "Thứ 7",
        title: "Mini-check tuần 2: Đoạn văn hoàn chỉnh 5–7 câu",
        objective: "Kiểm tra kỹ năng lập dàn ý, chọn chi tiết quan sát thật và viết đoạn văn trọn vẹn 5–7 câu trong 50 phút.",
        example: "Hoàn thiện một đoạn văn hoàn chỉnh có mở đoạn hấp dẫn, thân đoạn giàu hình ảnh và kết đoạn đọng lại dư vị.",
        basic: "Phần 1 - Đọc và Nhận xét (15 phút): Đọc đoạn văn sau:\n“Mỗi buổi trưa hè, cây phượng vĩ nơi góc sân lại rực lên như một đốm lửa khổng lồ. Từng chùm hoa đỏ thắm chen chúc nhau trên nền lá xanh biếc xòe rộng. Dưới bóng râm mát rượi của cây, chúng em quây quần bên nhau bắn bi, nhảy dây rộn rã tiếng cười.”\n(1) Tìm hình ảnh so sánh trong đoạn văn.\n(2) Tác giả đã dùng những giác quan nào để quan sát cây phượng?\n(3) Nêu cảm xúc của học trò đối với cây phượng.",
        applied: "Phần 2 - Tập làm văn (25 phút): Đề bài: Viết một đoạn văn từ 5 đến 7 câu miêu tả một đồ dùng học tập hoặc một góc quen thuộc trong ngôi nhà của con.\n- Yêu cầu: Có câu mở đoạn thu hút, có ít nhất 3 chi tiết nhìn thấy cụ thể và 1 câu kết nêu tình cảm gắn bó.",
        reasoning: "Phần 3 - Tự rà soát và ghi chú (10 phút): Con đã dùng chi tiết thật nào của riêng con mà bài văn mẫu không thể có?",
        selfCheck: "Đánh giá: (1) Đủ số câu quy định; (2) Không lặp từ; (3) Đúng chính tả và dấu câu; (4) Giọng văn hồn nhiên, chân thật.",
        challenge: "Viết thêm 1 câu miêu tả đồ vật đó vào một thời khắc đặc biệt (Ví dụ buổi tối khi đèn bàn bật sáng hoặc khi kết thúc một tuần học).",
        hint: "Mẹo nhỏ: Dành 5 phút đầu lập ý ra giấy nháp; viết liền mạch trong 15 phút; 5 phút cuối đọc to để chỉnh sửa."
      }
    ]},
    { week: 3, alignment: "Đọc hiểu và bằng chứng", days: [
      {
        day: "Thứ 2",
        title: "Ai, ở đâu và khi nào?",
        objective: "Xác định nhanh nhân vật chính, không gian (ở đâu) và thời gian (khi nào) trước khi đi sâu vào phân tích bài đọc.",
        example: "Văn bản: “Một buổi chiều mưa rét ở ga tàu, cậu bé đánh giày ngồi co ro...” → Ai: Cậu bé đánh giày; Ở đâu: Ga tàu; Khi nào: Buổi chiều mưa rét.",
        basic: "Đọc đoạn trích sau:\n“Khoảng năm giờ chiều mùa hạ, trên bãi cỏ ven đê làng, đàn trâu no cỏ đang thủng thỉnh bước về chuồng. Chú bé chăn trâu tên Khoa ngồi vắt vẻo trên lưng trâu, tay cầm chiếc sáo trúc khẽ ngân nga giai điệu đồng quê thanh bình.”\nHãy điền thông tin vào 3 ô:\n- Nhân vật chính là ai?\n- Sự việc diễn ra ở đâu?\n- Thời gian xảy ra sự việc là khi nào?",
        applied: "Dựa vào 3 thông tin vừa tìm được, hãy giới thiệu lại cảnh tượng chú bé chăn trâu bằng 2 câu văn súc tích.",
        reasoning: "Chi tiết 'khoảng năm giờ chiều mùa hạ' giúp người đọc cảm nhận được ánh nắng và bầu không khí thế nào?",
        selfCheck: "Câu trả lời của con đã nêu chính xác dữ kiện có trong bài đọc chưa?",
        challenge: "Tìm thêm 1 chi tiết trong đoạn văn cho thấy cuộc sống ở làng quê rất yên ả.",
        hint: "Mẹo nhỏ: Đọc lướt đoạn văn một lượt để khoanh tròn các từ chỉ người, nơi chốn và thời gian."
      },
      {
        day: "Thứ 3",
        title: "Tóm gọn ý chính bằng một câu",
        objective: "Biết cách rút ra thông điệp hoặc sự việc then chốt nhất của đoạn văn trong duy nhất một câu trọn vẹn.",
        example: "Đoạn văn kể về cậu bé nhặt được ví tiền và tìm chú công an trả lại → Ý chính: Mẩu chuyện ca ngợi lòng trung thực của một cậu bé qua hành động trả lại của rơi.",
        basic: "Đọc đoạn văn sau:\n“Kiến vàng bé nhỏ nhưng rất chăm chỉ và biết đoàn kết. Khi gặp một mẩu bánh mì lớn rơi trên đường, một chú kiến không thể tha nổi. Chú liền chạy về tổ gọi thêm đồng đội. Chỉ mươi phút sau, hàng trăm chú kiến đã cùng nhau khiêng mẩu bánh về tổ an toàn.”\nChọn ý chính đúng nhất trong 3 phương án sau:\n(A) Kiến vàng thích ăn bánh mì.\n(B) Đoạn văn cho thấy sức mạnh của tinh thần đoàn kết ở loài kiến nhỏ bé.\n(C) Kiến chạy rất nhanh trên đường.",
        applied: "Hãy tự đặt một nhan đề ngắn gọn (khoảng 3–4 chữ) tóm tắt được ý chính của câu chuyện trên.",
        reasoning: "Vì sao phương án (A) và (C) không phải là ý chính của đoạn văn mà chỉ là chi tiết phụ?",
        selfCheck: "Ý chính con chọn có bao quát được toàn bộ câu chuyện từ đầu đến cuối không?",
        challenge: "Viết 1 câu châm ngôn ngắn về tinh thần đoàn kết lấy cảm hứng từ loài kiến.",
        hint: "Mẹo nhỏ: Hãy tự hỏi: 'Sau khi đọc xong bài này, tác giả muốn ta hiểu ra điều gì nhất?'."
      },
      {
        day: "Thứ 4",
        title: "Tìm dẫn chứng làm bằng chứng",
        objective: "Biết trích dẫn chính xác từ ngữ hoặc hành động trong bài đọc để chứng minh cho nhận định của mình, không nói suông.",
        example: "Nhận xét: 'Bác nông dân rất cần cù.' → Dẫn chứng: 'Bác ra đồng từ lúc gà gáy le te và chỉ trở về nhà khi trời đã nhá nhem tối.'",
        basic: "Đọc đoạn văn sau:\n“Hà là một cô bé rất biết quan tâm đến người khác. Khi thấy em nhỏ hàng xóm vấp ngã khóc thét, Hà liền chạy lại nâng em dậy, phủi sạch bụi cát trên đầu gối em rồi dỗ dành: ‘Em ngoan, nín đi chị thương!’. Sau đó, Hà còn đưa em về tận nhà bàn giao cho mẹ.”\nCâu hỏi: Chi tiết nào trong đoạn văn chứng minh Hà là cô bé giàu lòng nhân ái?",
        applied: "Hãy viết 2 câu nhận xét về bạn Hà, trong đó có trích dẫn ít nhất 1 câu hành động trong bài làm bằng chứng.",
        reasoning: "Vì sao khi nhận xét một nhân vật, nếu không có dẫn chứng cụ thể từ bài đọc thì lời nhận xét sẽ kém thuyết phục?",
        selfCheck: "Con đã đặt phần trích dẫn từ ngữ trong dấu ngoặc kép hoặc nêu rõ hành động của nhân vật chưa?",
        challenge: "Tìm một chi tiết thể hiện cảm xúc ấm áp trong lời nói của Hà.",
        hint: "Mẹo nhỏ: Bằng chứng tốt nhất là những hành động cụ thể và lời nói trực tiếp của nhân vật."
      },
      {
        day: "Thứ 5",
        title: "Chuỗi Nguyên nhân – Kết quả",
        objective: "Nhận biết mối liên hệ nhân quả giữa các sự việc trong bài đọc thông qua các từ chỉ nguyên nhân (do, vì) và kết quả (nên, do đó).",
        example: "Nguyên nhân: Mưa bão kéo dài nhiều ngày. → Kết quả: Nước sông dâng cao làm ngập úng hoa màu ven đê.",
        basic: "Ghép 3 nguyên nhân ở cột A với kết quả tương ứng ở cột B:\nCột A (Nguyên nhân):\n(1) Vì Bách kiên trì rèn luyện bảng nhân và tính nhẩm mỗi ngày\n(2) Do đêm qua trời trở rét đậm và gió mùa ùa về\n(3) Nhờ cả lớp cùng chung tay dọn dẹp và trang trí\nCột B (Kết quả):\n(a) sáng nay ai đi học cũng phải mặc áo khoác dày ấm áp.\n(b) lớp học trở nên khang trang, sạch đẹp đón chào năm học mới.\n(c) nên tốc độ tính toán và phản xạ số học của con tiến bộ rõ rệt.",
        applied: "Viết 2 câu văn diễn đạt mối quan hệ nguyên nhân - kết quả về việc bảo vệ môi trường hoặc giữ gìn sức khỏe.",
        reasoning: "Nếu đảo vị trí của vế nguyên nhân và vế kết quả, câu văn cần thay đổi từ nối như thế nào cho thuận tai?",
        selfCheck: "Thử đặt câu hỏi 'Vì sao?' để kiểm tra xem vế nguyên nhân đã giải thích hợp lý cho vế kết quả chưa.",
        challenge: "Viết một câu có 2 nguyên nhân dẫn đến 1 kết quả tích cực.",
        hint: "Mẹo nhỏ: Từ 'Vì', 'Do', 'Nhờ' luôn đi trước nguyên nhân; từ 'Nên', 'Cho nên' luôn đi trước kết quả."
      },
      {
        day: "Thứ 6",
        title: "Phân biệt điều văn bản nói và điều mình suy đoán",
        objective: "Phân biệt rạch ròi giữa thông tin được nêu trực tiếp trong văn bản và ý kiến suy luận cá nhân của người đọc.",
        example: "Văn bản: “Minh im lặng cúi đầu, hai tay nắm chặt gấu áo.” → Thông tin trực tiếp: Minh cúi đầu và nắm gấu áo; Suy luận: Minh đang ân hận hoặc lo sợ.",
        basic: "Đọc đoạn văn sau:\n“Trận đấu bóng kết thúc. Đội bóng lớp 4A thua sát nút một bàn. Tuấn – thủ môn của đội – ngồi bệt xuống thảm cỏ, tháo găng tay để sang một bên và im lặng nhìn lên khán đài.”\nHãy phân loại 3 nhận định sau thành (Đ) Thông tin trực tiếp trong bài hoặc (S) Suy luận của người đọc:\n(1) Tuấn tháo găng tay để sang một bên.\n(2) Tuấn đang cảm thấy rất buồn và tự trách mình vì đã để lọt lưới.\n(3) Đội bóng lớp 4A bị thua với cách biệt một bàn.",
        applied: "Viết 2 câu nêu cảm nhận của con về tâm trạng của bạn Tuấn, bắt đầu bằng cụm từ: 'Qua chi tiết Tuấn ngồi bệt xuống thảm cỏ, em suy đoán rằng...'",
        reasoning: "Vì sao khi làm bài đọc hiểu, ta không được bịa thêm tình tiết mà bài đọc không hề nhắc tới?",
        selfCheck: "Khi nêu suy luận, con đã dùng các từ ngữ mềm dẻo như 'em nghĩ là', 'dường như', 'có lẽ' chưa?",
        challenge: "Nếu là một người bạn cùng lớp, con sẽ đến bên Tuấn và nói câu gì để động viên bạn?",
        hint: "Mẹo nhỏ: Thông tin trực tiếp là những gì mắt ta nhìn thấy từng chữ trên trang sách; suy luận là điều ta cảm nhận từ những chữ đó."
      },
      {
        day: "Thứ 7",
        title: "Mini-check tuần 3: Đọc hiểu và dẫn chứng",
        objective: "Đo lường năng lực đọc hiểu sâu, tìm bằng chứng xác thực và viết đoạn cảm nghĩ ngắn trong 50 phút.",
        example: "Làm bài kiểm tra mini gồm phần đọc hiểu văn bản 200 chữ và phần viết đoạn văn có dẫn chứng.",
        basic: "Phần 1 - Đọc hiểu văn bản (20 phút): Đọc bài 'Bát canh rau ngót của bà':\n“Mùa hè năm ấy, em bị ốm nằm li bì trên giường. Giữa trưa nắng chang chang, bà ngoại đội chiếc nón lá cũ ra vườn hái từng ngọn rau ngót non xanh mướt. Đôi bàn tay bà nhăn nheo, cẩn thận tuốt từng chiếc lá rồi vò nhẹ trong chậu nước trong veo. Bát canh rau ngót nấu tôm bốc khói nghi ngút, thơm lừng vị ngọt lành của tình thương. Nhìn giọt mồ hôi đọng trên sống mũi bà, em bỗng thấy mắt mình cay cay...”\nTrả lời 4 câu hỏi:\n(1) Người bà đã làm những việc gì để nấu bát canh cho cháu?\n(2) Tìm 2 từ ngữ miêu tả đôi bàn tay của bà.\n(3) Chi tiết nào thể hiện sự xúc động của người cháu?\n(4) Bài đọc ca ngợi điều gì?",
        applied: "Phần 2 - Viết đoạn văn có dẫn chứng (20 phút): Viết một đoạn văn (6–8 câu) nêu cảm nhận của con về tình cảm yêu thương của người bà trong bài đọc trên. Trong đoạn văn phải trích dẫn ít nhất 1 chi tiết cụ thể làm bằng chứng.",
        reasoning: "Phần 3 - Tự đánh giá (10 phút): Đọc lại bài làm. Gạch chân câu văn trích dẫn bằng chứng của con.",
        selfCheck: "Chấm điểm: (1) Trả lời đúng và trọn câu 4 câu đọc hiểu (5 điểm); (2) Viết đoạn văn cảm xúc, có dẫn chứng xác thực (5 điểm).",
        challenge: "Viết 1 câu kết đoạn bày tỏ mong muốn của con được đền đáp công ơn chăm sóc của ông bà, cha mẹ.",
        hint: "Mẹo làm bài: Đọc kỹ văn bản 2 lần; trả lời trọn ý; dùng dấu ngoặc kép khi trích dẫn lời hoặc hành động trong bài."
      }
    ]},
    { week: 4, alignment: "Kể một việc đáng nhớ · trình tự và cảm xúc", days: [
      {
        day: "Thứ 2",
        title: "Ba mốc sự việc: Mở đầu – Diễn biến – Kết thúc",
        objective: "Biết xây dựng sườn câu chuyện qua 3 mốc thời gian rõ ràng: việc gì bắt đầu, điều gì cao trào diễn ra, và câu chuyện khép lại ra sao.",
        example: "Mở đầu: Quên hộp bút chì màu → Diễn biến: Lo lắng tìm kiếm và được bạn chia sẻ → Kết thúc: Cùng bạn hoàn thành bức tranh và thắt chặt tình bạn.",
        basic: "Cho câu chuyện 'Lần đầu tự đi mua sách', hãy xếp 3 mốc sự việc sau vào đúng 3 cột Mở đầu - Diễn biến - Kết thúc:\n(A) Em vui sướng ôm cuốn sách mới vào lòng, chào cô bán sách rồi bước nhanh về khoe với mẹ.\n(B) Chiều thứ Bảy, mẹ đưa cho em 50.000 đồng để em tự sang hiệu sách đầu ngõ mua cuốn truyện thiếu nhi.\n(C) Đứng trước giá sách mênh mông, em bối rối tìm kiếm hồi lâu và mạnh dạn nhờ cô bán hàng hướng dẫn.",
        applied: "Hãy lập dàn ý 3 mốc sự việc (Mở đầu - Diễn biến - Kết thúc) cho một kỷ niệm đáng nhớ của chính con ở trường hoặc ở nhà.",
        reasoning: "Mốc sự việc nào là trọng tâm của câu chuyện, cần được kể chi tiết và hấp dẫn nhất?",
        selfCheck: "Các mốc sự việc của con đã theo đúng trình tự trước - sau hợp lý chưa?",
        challenge: "Thêm một trở ngại bất ngờ vào phần diễn biến (Ví dụ: trời đổ mưa hoặc đánh rơi tiền) để câu chuyện thêm phần kịch tính.",
        hint: "Mẹo nhỏ: Mở đầu giới thiệu lý do; diễn biến kể các hành động liên tiếp; kết thúc nêu cảm xúc đọng lại."
      },
      {
        day: "Thứ 3",
        title: "Động từ giàu hình ảnh",
        objective: "Biết chọn lọc các động từ cụ thể, gợi tả chuyển động và âm thanh thay thế cho các từ chung chung như 'đi', 'làm', 'nói'.",
        example: "Chung chung: “Bạn ấy đi vào lớp.” → Gợi cảm: “Bạn ấy rón rén bước vào lớp, khẽ khàng kéo ghế để không gây tiếng động.”",
        basic: "Thay thế các từ gạch chân in hoa trong 3 câu sau bằng các động từ sinh động hơn:\n(1) Cậu bé ĐI thật nhanh qua sân trường mưa rét. (Gợi ý: rảo bước / chạy vụt / hối hả bước)\n(2) Bác bảo vệ NÓI nhẹ nhàng nhắc nhở chúng em. (Gợi ý: khuyên nhủ / ôn tồn nhắc / ân cần dặn)\n(3) Lũ chim ĂN những hạt thóc vàng trên sân. (Gợi ý: mổ lia lịa / tíu tít nhặt / sà xuống mổ)",
        applied: "Viết 2 câu kể về một bạn học sinh đang vội vã chạy vào lớp cho kịp giờ trống điểm, trong đó sử dụng ít nhất 3 động từ gợi tả chuyển động nhanh.",
        reasoning: "Từ 'chạy vụt' và từ 'đi bộ' mang lại cho người đọc cảm giác về tốc độ và thời gian khác nhau như thế nào?",
        selfCheck: "Trong câu con viết, các động từ đã giúp người đọc hình dung rõ hành động như đang xem phim chưa?",
        challenge: "Viết một câu có 2 động từ thể hiện 2 hành động liên tiếp rất nhanh (Ví dụ: 'chộp lấy... rồi lao vụt đi').",
        hint: "Mẹo nhỏ: Động từ chính là linh hồn của bài văn kể chuyện; động từ càng đắt giá, câu chuyện càng sống động."
      },
      {
        day: "Thứ 4",
        title: "Lời thoại và tiếng lòng nhân vật",
        objective: "Đưa lời nói trực tiếp (đặt sau dấu gạch đầu dòng) và suy nghĩ nội tâm vào bài kể để nhân vật bộc lộ rõ tính cách.",
        example: "Lời nói: “Nam nắm tay bạn bảo: ‘Đừng sợ, có tớ ở đây rồi!’” / Suy nghĩ: “Nhìn dòng sông cuộn sóng, em tự nhủ: ‘Mình nhất định phải dũng cảm vượt qua!’”",
        basic: "Thêm lời nói trực tiếp của nhân vật vào 2 tình huống sau (dùng dấu hai chấm và gạch đầu dòng):\n(1) Bạn An vô tình làm rách góc trang vở của con và lúng túng xin lỗi.\n(2) Con gọi bạn ra sân cùng tham gia trò chơi đuổi bắt trong giờ giải lao.",
        applied: "Viết một đoạn văn ngắn 5 câu kể về một lần con giúp đỡ một em nhỏ bị lạc, trong đó có ít nhất 2 lượt lời đối thoại giữa con và em nhỏ.",
        reasoning: "Lời thoại trong bài văn kể chuyện cần ngắn gọn và đúng lứa tuổi học trò; nếu viết lời thoại quá dài dòng như người lớn thì bài văn sẽ ra sao?",
        selfCheck: "Con đã dùng đúng quy tắc chính tả khi viết lời thoại: xuống dòng, lùi ô và có dấu gạch đầu dòng chưa?",
        challenge: "Thêm 1 câu miêu tả suy nghĩ thầm kín trong đầu nhân vật trước khi cất lời nói.",
        hint: "Mẹo nhỏ: Lời thoại ngắn giúp đẩy nhanh diễn biến câu chuyện; lời suy nghĩ giúp người đọc thấu hiểu tâm hồn nhân vật."
      },
      {
        day: "Thứ 5",
        title: "Thể hiện cảm xúc qua hành động",
        objective: "Biết cách diễn tả niềm vui, sự lo lắng hay niềm tự hào qua ánh mắt, nụ cười, cử chỉ cụ thể thay vì chỉ viết 'Em rất vui'.",
        example: "Không chỉ viết 'Em rất lo' → Hãy tả: “Em cắn chặt môi, hai bàn tay nắm chặt vạt áo ướt đẫm mồ hôi, tim đập thình thịch từng hồi.”",
        basic: "Đọc 3 câu sau và cho biết hành động trong câu thể hiện cảm xúc gì (Vui sướng, Lo sợ hay Ân hận):\n(1) Nam nhảy cẫng lên, hai tay reo hò rồi ôm chầm lấy mẹ.\n(2) Cậu bé cúi gằm mặt xuống đất, ngón chân di di trên nền gạch, lí nhí không dám ngẩng lên.\n(3) Hoa thở phào nhẹ nhõm, nụ cười tươi tắn bừng sáng trên gương mặt sau bao ngày mong đợi.",
        applied: "Hãy viết 2 câu diễn tả cảm xúc vui sướng của con khi đạt điểm tốt hoặc hoàn thành một bài toán khó, không dùng từ 'rất vui'.",
        reasoning: "Vì sao việc miêu tả hành động như 'nhảy cẫng lên', 'mắt sáng rực' lại khiến người đọc cảm nhận được niềm vui chân thật hơn?",
        selfCheck: "Con có bị lặp lại từ 'vui', 'buồn' một cách sáo rỗng không?",
        challenge: "Diễn tả cảm xúc ngỡ ngàng, ngạc nhiên qua ánh mắt và cử chỉ của một bạn nhỏ khi bất ngờ nhận được món quà yêu thích.",
        hint: "Mẹo nhỏ: Hãy nhớ lại lúc con vui hay lo, cơ thể con có phản ứng thế nào: nụ cười, nhịp tim, bàn tay... và viết lại y như vậy."
      },
      {
        day: "Thứ 6",
        title: "Kể chuyện bằng giọng nói trước khi viết",
        objective: "Thực hành kể miệng câu chuyện trong 1–2 phút cho người thân nghe hoặc đọc vào máy để sắp xếp câu từ trôi chảy trước khi đặt bút viết.",
        example: "Quy trình Oral Rehearsal: Nghĩ ý trong đầu → Nói thành tiếng mạch lạc → Lắng nghe chỗ ngập ngừng → Viết bản nháp hoàn chỉnh.",
        basic: "Tập nói thành tiếng (trong 1 phút) câu chuyện về 'Một lần em làm được một việc tốt':\n- Con đã giúp ai việc gì?\n- Lúc đó người đó có nét mặt thế nào?\n- Con cảm thấy trong lòng ra sao sau khi giúp bạn?",
        applied: "Sau khi kể miệng, hãy chuyển lời kể đó thành một đoạn văn 6 câu hoàn chỉnh trên trang giấy.",
        reasoning: "Khi con kể to thành tiếng, con phát hiện ra chỗ nào mình nói bị lặp từ hoặc bị ngập ngừng?",
        selfCheck: "Bài viết của con có giữ được sự tự nhiên và sinh động như lúc con vừa kể bằng miệng không?",
        challenge: "Dùng tính năng ghi âm / nhận diện giọng nói (STT) đọc lại bài văn để kiểm tra xem máy có nhận diện rõ từng từ không.",
        hint: "Mẹo nhỏ: Nói to giúp não bộ sắp xếp câu chữ theo nhịp điệu tự nhiên nhất; bạn nói trôi chảy thì bạn sẽ viết mượt mà."
      },
      {
        day: "Thứ 7",
        title: "Mini-check tuần 4: Bài văn kể việc đáng nhớ",
        objective: "Kiểm tra kỹ năng kể lại một sự việc có mở đầu, diễn biến kịch tính, kết thúc ý nghĩa và lời thoại sinh động trong 50 phút.",
        example: "Viết một bài văn ngắn 3 phần (khoảng 8–10 câu) kể lại một kỷ niệm chân thật của chính con.",
        basic: "Phần 1 - Đọc và Sắp xếp (15 phút): Đọc câu chuyện 'Chú chim sẻ con':\n“Mưa bão quật ngã tổ chim trên cành bàng. Một chú chim sẻ con rơi xuống bãi cỏ, ướt sũng và run rẩy. Bé An đi học về nhìn thấy liền cẩn thận nâng chú chim đặt vào chiếc mũ len ấm áp. An đem chim về nhà sưởi ấm và đút từng hạt kê nhỏ. Ba ngày sau, chú chim sẻ đã khỏe mạnh vỗ cánh bay lên trời xanh.”\n(1) Tìm chi tiết mở đầu câu chuyện.\n(2) Nêu hành động giúp đỡ của bé An.\n(3) Kết thúc câu chuyện mang lại niềm vui gì cho An?",
        applied: "Phần 2 - Viết bài văn kể chuyện (25 phút): Đề bài: Hãy kể lại một kỷ niệm đáng nhớ của con với một người bạn hoặc người thân trong gia đình.\n- Yêu cầu: Bài có đủ 3 phần (Mở bài, Thân bài, Kết bài); có ít nhất 1 câu đối thoại hoặc suy nghĩ; có chi tiết thể hiện cảm xúc qua hành động.",
        reasoning: "Phần 3 - Tự nhận xét (10 phút): Điều gì trong câu chuyện làm con nhớ nhất? Con rút ra được bài học gì sau sự việc đó?",
        selfCheck: "Chấm điểm: (1) Bố cục 3 phần rõ ràng (3 điểm); (2) Diễn biến liền mạch, có lời thoại (4 điểm); (3) Cảm xúc chân thành, đúng lứa tuổi (3 điểm).",
        challenge: "Đặt một nhan đề thật gợi cảm và ý nghĩa cho bài viết của con (Ví dụ: 'Món quà từ trái tim', 'Buổi trưa đáng nhớ').",
        hint: "Mẹo thi: Hãy chọn việc có thật mà con nhớ rõ nhất; sự chân thật luôn chạm tới trái tim người đọc hơn là câu chuyện bịa đặt."
      }
    ]},
    { week: 5, alignment: "Từ ngữ, câu và chính tả trong ngữ cảnh", days: [
      {
        day: "Thứ 2",
        title: "Dùng từ chính xác trong ngữ cảnh",
        objective: "Phân biệt sắc thái ý nghĩa của các từ gần nghĩa để lựa chọn từ ngữ chính xác nhất cho từng tình huống.",
        example: "‘Lấp lánh’ (ánh sáng phản chiếu như sao, sóng nước) khác với ‘Long lanh’ (ánh sáng trong trẻo như giọt sương, ánh mắt).",
        basic: "Chọn từ thích hợp trong ngoặc đơn để điền vào chỗ trống:\n(1) Những giọt sương đêm đọng trên cánh hoa hồng trông thật ............ (lấp lánh / long lanh / lung linh).\n(2) Ngôi sao mai sáng ............ trên bầu trời rạng đông. (lấp lánh / lung linh / rực rỡ).\n(3) Dưới ánh nến ấm áp, căn phòng trở nên huyền ảo và ............ (lấp lánh / long lanh / lung linh).",
        applied: "Đặt 2 câu phân biệt cách dùng của 2 từ gần nghĩa: 'chăm chỉ' (làm việc đều đặn) và 'cần cù' (chịu thương chịu khó, vượt gian khó).",
        reasoning: "Vì sao ta không thể nói 'giọt sương sáng rực rỡ'? Từ 'rực rỡ' hợp với đối tượng nào?",
        selfCheck: "Từ con chọn đã làm nổi bật đúng đặc điểm của sự vật chưa?",
        challenge: "Tìm thêm 3 từ láy miêu tả tiếng mưa rơi (như 'tí tách', 'rào rào', 'lộp độp') và đặt câu với mỗi từ.",
        hint: "Mẹo nhỏ: Đặt từ đó vào câu văn cụ thể; nếu nghe thấy gượng gạo tức là sắc thái nghĩa chưa thật khớp."
      },
      {
        day: "Thứ 3",
        title: "Mạng từ vựng theo chủ đề",
        objective: "Mở rộng vốn từ ngữ bằng cách xây dựng sơ đồ mạng từ theo từng chủ đề quen thuộc (Gia đình, Trường học, Thiên nhiên).",
        example: "Chủ đề 'Trường học' gồm: Cơ sở vật chất (bảng đen, bàn ghế, sân trường), Hoạt động (học tập, vui chơi, trực nhật), Cảm xúc (thân thương, rộn rã, biết ơn).",
        basic: "Xếp các từ ngữ sau vào 3 nhóm thuộc chủ đề 'Mái ấm gia đình':\n(Từ cho sẵn: yêu thương, nấu nướng, mái ngói, sum vầy, giặt giũ, ấm áp, hiên nhà, chăm sóc, bếp lửa)\n- Nhóm 1: Từ chỉ sự vật/nơi chốn\n- Nhóm 2: Từ chỉ hoạt động/công việc\n- Nhóm 3: Từ chỉ tình cảm/cảm xúc",
        applied: "Chọn 3 từ thuộc 3 nhóm trên để viết thành một đoạn văn ngắn 3 câu tả cảnh sum họp gia đình vào buổi tối.",
        reasoning: "Việc gom từ ngữ theo nhóm giúp con điều gì khi cần viết một bài văn tả ngôi nhà của mình?",
        selfCheck: "Các từ con xếp vào từng nhóm đã đúng bản chất ngữ pháp chưa?",
        challenge: "Xây dựng thêm một nhánh từ mới cho chủ đề 'Bữa cơm mẹ nấu' với ít nhất 4 từ gợi mùi vị và âm thanh.",
        hint: "Mẹo nhỏ: Vẽ một vòng tròn ở giữa trang giấy ghi tên chủ đề, rồi tỏa ra các nhánh như cành cây để mở rộng vốn từ."
      },
      {
        day: "Thứ 4",
        title: "Câu kể và Câu hỏi tự nhiên",
        objective: "Sử dụng linh hoạt câu kể (để cung cấp thông tin) và câu hỏi (để gợi mở cảm xúc, giao lưu với người đọc).",
        example: "Câu kể: “Cây bàng đã trút hết lá.” → Câu hỏi gợi cảm xúc: “Có phải cây bàng đang lặng lẽ chờ đợi mùa xuân ấm áp trở về?”",
        basic: "Chuyển đổi các câu kể sau thành câu hỏi tự nhiên:\n(1) Bạn Nam học rất giỏi môn Toán.\n(2) Bầu trời hôm nay trong xanh và cao vời vợi.\n(3) Mẹ vừa đi chợ mua những quả cam tươi ngon về.",
        applied: "Viết một đoạn đối thoại ngắn 4 câu giữa con và bạn trong giờ ra chơi, trong đó có 2 câu hỏi và 2 câu trả lời đủ ý.",
        reasoning: "Khi nào ta dùng câu hỏi để hỏi thông tin thật, khi nào ta dùng câu hỏi chỉ để bộc lộ cảm xúc khen ngợi?",
        selfCheck: "Cuối câu hỏi đã có dấu chấm hỏi (?) chưa? Cuối câu kể đã có dấu chấm (.) chưa?",
        challenge: "Viết một câu mở đoạn bằng một câu hỏi tu từ để thu hút người đọc (Ví dụ: 'Bạn đã bao giờ thức dậy thật sớm ngắm hoa nở chưa?').",
        hint: "Mẹo nhỏ: Câu hỏi tu từ không cần ai trả lời; nó dùng để gợi trí tò mò và lôi cuốn người đọc vào câu chuyện."
      },
      {
        day: "Thứ 5",
        title: "Chính tả phân biệt phụ âm đầu dễ lẫn",
        objective: "Nắm vững quy tắc chính tả phân biệt ch/tr, s/x, d/r/gi trong ngữ cảnh câu có nghĩa, sửa dứt điểm lỗi phát âm địa phương.",
        example: "‘Chân trời’ (tr) khác với ‘chân tay’ (ch); ‘sương sớm’ (s) khác với ‘xương sườn’ (x).",
        basic: "Tìm và sửa 4 lỗi chính tả ch/tr và s/x trong đoạn văn sau:\n“Buổi sáng mùa thu, ánh nắn xớm trải nhẹ trên con đường làng. Những chú chim sâu chuyền cành chong vòm lá xanh. Bác nông dân rảo bước da đồng, trên môi nở nụ cười tươi rói.”\n(Gợi ý: Tìm 4 từ viết sai và viết lại cho đúng).",
        applied: "Điền ch hoặc tr vào chỗ trống để tạo thành từ đúng nghĩa: ...ong lành; ...ân thật; ...èo bẻo; ...ung thực.",
        reasoning: "Làm thế nào để nhớ từ 'trong lành' viết bằng 'tr' chứ không phải 'ch'?",
        selfCheck: "Đọc chậm từng chữ và phát âm chuẩn xác để rà soát lỗi chính tả.",
        challenge: "Đặt 1 câu có chứa cả 2 từ: 'sương sớm' và 'xanh xao'.",
        hint: "Mẹo chính tả: Các từ chỉ đồ vật trong nhà thường đi với 'ch' (chăn, chiếu, chảo); các từ chỉ cây cối, tự nhiên thường đi với 'tr' (tre, trúc, trời)."
      },
      {
        day: "Thứ 6",
        title: "Biên tập câu văn cụt và câu dài lê thê",
        objective: "Biết cách cắt gọt câu văn quá dài có nhiều từ 'và', đồng thời mở rộng câu cụt thành câu văn cân đối, sáng nghĩa.",
        example: "Câu lê thê: “Em đi học và gặp bạn và cùng bạn đi vào lớp và nghe cô giảng.” → Tách câu: “Em đi học, gặp bạn ở cổng trường. Cả hai cùng ríu rít bước vào lớp, chăm chú nghe cô giáo giảng bài.”",
        basic: "Biên tập lại câu văn dài lê thê sau đây thành 2 câu ngắn gọn, mạch lạc:\n“Hôm nay trời nắng to và em cùng bố ra vườn tưới cây và những bông hoa đua nhau nở rộ và mùi hương thơm ngát cả góc vườn.”",
        applied: "Sửa câu cụt sau thành câu hoàn chỉnh, giàu hình ảnh: 'Đang nở rộ trên giàn mướp vàng rực.'",
        reasoning: "Vì sao một câu văn có quá nhiều từ 'và' sẽ khiến người đọc cảm thấy mệt mỏi và hụt hơi khi đọc thành tiếng?",
        selfCheck: "Đọc to câu văn sau khi tách; con có thể lấy hơi tự nhiên ở dấu chấm ngắt câu không?",
        challenge: "Biến một câu kể ngắn 'Hoa hồng nở' thành một câu văn dài tuyệt đẹp có thành phần trạng ngữ chỉ thời gian và nơi chốn.",
        hint: "Mẹo nhỏ: Khi thấy một câu có từ 3 chữ 'và' trở lên, hãy thay chữ 'và' thứ hai bằng dấu chấm để tách thành 2 câu rõ ý."
      },
      {
        day: "Thứ 7",
        title: "Mini-check tuần 5: Dùng từ, đặt câu và chính tả",
        objective: "Kiểm tra tổng hợp kiến thức về từ vựng, kiểu câu, chính tả và kỹ năng biên tập câu văn trong 50 phút.",
        example: "Hoàn thành bài tập trắc nghiệm và tự luận gồm 6 câu hỏi đo độ nhạy bén ngôn từ.",
        basic: "Phần 1 - Trắc nghiệm & Sửa lỗi (20 phút):\n(1) Chọn từ thích hợp (lung linh / long lanh / lấp lánh): 'Giọt nước mắt ............ trên khóe mi bạn nhỏ.'\n(2) Tìm 3 lỗi chính tả trong câu: 'Bầu trới trong xunh, những chú chim sẻ ríu dít trên cành.'\n(3) Chuyển câu sau thành câu hỏi: 'Bách đã giải xong bài toán Olympic.'\n(4) Đặt dấu câu thích hợp vào đoạn: 'Trời ơi ( ) Bông hoa hồng nhung nở đẹp làm sao ( )'",
        applied: "Phần 2 - Tự luận & Viết đoạn (20 phút):\nViết một đoạn văn (5–7 câu) tả cảnh một buổi sáng sớm trên quê hương hoặc khu phố nơi con ở.\n- Yêu cầu: Dùng ít nhất 2 từ láy gợi tả âm thanh hoặc màu sắc; có 1 câu hỏi tu từ; không mắc lỗi chính tả ch/tr, s/x.",
        reasoning: "Phần 3 - Tự soát và giải thích (10 phút): Chọn ra 1 từ đắt giá nhất trong bài văn của con và giải thích vì sao con thích từ đó.",
        selfCheck: "Chấm điểm: (1) Phần 1 làm đúng hoàn toàn (5 điểm); (2) Phần 2 viết mượt mà, đúng ngữ pháp và không sai chính tả (5 điểm).",
        challenge: "Tìm 2 từ đồng nghĩa với từ 'chăm chỉ' nhưng mang sắc thái trang trọng hơn.",
        hint: "Mẹo thi: Đọc kỹ từng từ trong phần trắc nghiệm chính tả; viết chữ nắn nót, rõ ràng ở phần viết đoạn."
      }
    ]},
    { week: 6, alignment: "Đánh giá nền và viết bản tốt hơn", days: [
      {
        day: "Thứ 2",
        title: "Đọc sâu và cảm nhận nhân vật",
        objective: "Đọc hiểu sâu sắc một câu chuyện cảm động, phân tích hành động để rút ra vẻ đẹp tâm hồn của nhân vật.",
        example: "Phân tích nhân vật: Đọc hành động nhường áo cho bạn → Nhận xét: Bạn nhỏ là người giàu lòng vị tha và biết sẻ chia.",
        basic: "Đọc mẩu chuyện sau:\n“Giờ ra chơi, trời bỗng đổ cơn mưa rào tầm tã. Thấy chú mèo con bị ướt sũng nằm co ro bên bồn hoa, Lâm không ngần ngại cởi chiếc áo khoác đồng phục che cho chú mèo rồi bế chú vào hiên lớp. Lâm lấy khăn lau khô lông cho mèo rồi lấy mẩu bánh mì trong cặp chia cho nó ăn. Chú mèo khẽ kêu ‘meo meo’, dụi đầu vào tay Lâm như muốn nói lời cảm ơn.”\nTrả lời 3 câu hỏi:\n(1) Hành động cởi áo khoác che mưa cho chú mèo cho thấy Lâm có phẩm chất gì?\n(2) Chi tiết nào miêu tả sự biết ơn của chú mèo đối với Lâm?\n(3) Nếu là bạn cùng lớp với Lâm, con sẽ nói gì với bạn?",
        applied: "Viết một đoạn văn ngắn 4 câu nêu cảm nghĩ của con về lòng nhân ái của bạn Lâm đối với loài vật nhỏ bé.",
        reasoning: "Vì sao một hành động nhỏ như che mưa cho chú mèo lại có sức lay động lòng người hơn ngàn lời nói sáo rỗng?",
        selfCheck: "Con đã dùng chi tiết trong bài đọc làm căn cứ cho nhận xét của mình chưa?",
        challenge: "Viết lại kết thúc câu chuyện theo hướng Lâm xin phép bố mẹ mang chú mèo về nuôi.",
        hint: "Mẹo nhỏ: Nhân vật bộc lộ tâm hồn qua hành động; hãy chú ý đến những việc làm cụ thể không toan tính."
      },
      {
        day: "Thứ 3",
        title: "Quan sát từ thực tế cuộc sống",
        objective: "Rèn luyện đôi mắt quan sát tinh tế ngoài đời thực: ghi chép lại những hình ảnh, âm thanh, mùi vị thật từ cuộc sống xung quanh.",
        example: "Quan sát bữa cơm tối: Mùi hành phi thơm lừng dưới bếp, tiếng đũa bát lách cách vui tai, nụ cười rạng rỡ của bố khi đón bát cơm dẻo từ tay mẹ.",
        basic: "Hãy rời màn hình trong 3 phút, đứng nhìn ra ban công, cửa sổ hoặc góc phòng khách của con. Ghi lại 4 chi tiết thuộc 4 giác quan:\n- 1 chi tiết nhìn thấy bằng mắt (Màu sắc hoặc hình khối)\n- 1 chi tiết nghe thấy bằng tai (Tiếng động hoặc âm thanh)\n- 1 chi tiết ngửi thấy bằng mũi (Mùi hương)\n- 1 chi tiết cảm nhận qua làn da (Nhiệt độ, gió mát hay sự êm ái)",
        applied: "Từ 4 chi tiết vừa ghi chép, hãy viết một đoạn văn ngắn 4 câu miêu tả lại khoảnh khắc bình yên đó.",
        reasoning: "So sánh một đoạn văn viết từ quan sát thật với một đoạn văn chép từ bài mẫu, đoạn văn nào tạo được sự rung động chân thật hơn?",
        selfCheck: "Bài viết của con có chi tiết nào là bịa đặt không? Có hoàn toàn đúng với trải nghiệm thật của con không?",
        challenge: "Viết 1 câu miêu tả kết hợp cả 2 giác quan cùng lúc (Ví dụ: nhìn thấy màu xanh mướt và ngửi thấy mùi ngai ngái của cỏ non).",
        hint: "Mẹo nhỏ: Mọi nhà văn lớn đều bắt đầu từ việc quan sát kỹ lưỡng thế giới xung quanh mình; hãy để các giác quan cùng thức dậy."
      },
      {
        day: "Thứ 4",
        title: "Lập dàn ý nhanh 5 phút trước khi viết",
        objective: "Tạo thói quen lập dàn ý vắn tắt bằng các từ khóa ra giấy nháp trước khi bắt tay vào viết bài văn hoàn chỉnh.",
        example: "Dàn ý 3 phần: Mở bài (1 gạch đầu dòng: Tên đồ vật + cảm xúc) → Thân bài (3 gạch đầu dòng: Hình dáng, công dụng, kỉ niệm) → Kết bài (1 gạch đầu dòng: Lời hứa giữ gìn).",
        basic: "Cho đề bài: 'Tả một cây bóng mát trên sân trường con'. Hãy hoàn thành dàn ý nhanh 5 gạch đầu dòng:\n(1) Mở bài: Giới thiệu cây gì? Trồng ở đâu?\n(2) Thân bài 1: Tả bao quát hình dáng, tán lá từ xa.\n(3) Thân bài 2: Tả chi tiết gốc, thân, vỏ cây khi lại gần.\n(4) Thân bài 3: Hoạt động của học sinh dưới bóng mát cây.\n(5) Kết bài: Tình cảm gắn bó của con với cây.",
        applied: "Dựa vào dàn ý trên, hãy viết ngay 2 câu cho phần Mở bài và 1 câu cho phần Kết bài.",
        reasoning: "Vì sao người có dàn ý trước khi viết sẽ không bao giờ bị 'bí từ' hay bị lạc đề giữa chừng?",
        selfCheck: "Dàn ý của con đã có đủ 3 phần rõ rệt chưa? Các ý có bị trùng lặp nhau không?",
        challenge: "Bổ sung thêm 1 chi tiết âm thanh độc đáo vào phần thân bài (Ví dụ tiếng ve kêu râm ran trong vòm lá hay tiếng lá xào xạc khi có gió).",
        hint: "Mẹo nhỏ: Dàn ý chỉ cần ghi từ khóa ngắn gọn, không cần viết thành câu dài; nó giống như tấm bản đồ dẫn đường cho ngòi bút."
      },
      {
        day: "Thứ 5",
        title: "Viết bản 1 – Tự do sáng tạo",
        objective: "Viết liền mạch bản thảo đầu tiên (Draft 1) theo dàn ý, ưu tiên dòng chảy cảm xúc và ý tứ trọn vẹn, không dừng lại xóa từng từ.",
        example: "Quy tắc Bản 1: Viết nhanh, viết thật, viết liên tục cho xong toàn bộ câu chuyện; để dành việc sửa lỗi chính tả cho Bản 2.",
        basic: "Dựa vào dàn ý cây bóng mát hôm qua, hãy viết bản thảo đầu tiên gồm 7 đến 8 câu hoàn chỉnh trong 15 phút.\n- Hãy tập trung diễn đạt hết những ý con muốn nói, giữ cho mạch văn tự nhiên, hồn nhiên đúng tuổi con.",
        applied: "Đọc lại bản thảo một lượt từ đầu đến cuối không ngừng nghỉ để cảm nhận dòng chảy của câu chuyện.",
        reasoning: "Nếu vừa viết vừa dừng lại tẩy xóa từng chữ thì điều gì sẽ xảy ra với dòng cảm xúc trong đầu con?",
        selfCheck: "Con đã viết đủ số câu và bám sát các ý trong dàn ý chưa?",
        challenge: "Thêm một câu đối thoại ngắn hoặc câu hỏi tu từ vào bài viết để tăng tính hấp dẫn.",
        hint: "Mẹo nhỏ: Bản 1 là để lấy ý tưởng ra khỏi đầu; đừng sợ sai, bạn sẽ có cơ hội gọt giũa nó ở Bản 2."
      },
      {
        day: "Thứ 6",
        title: "Viết bản 2 – Gọt giũa và nâng tầm",
        objective: "Thực hành chu trình biên tập 4 bước (Ý – Câu – Từ – Chính tả) để biến bản thảo thô thành một bài văn hoàn thiện xuất sắc.",
        example: "Quy trình 4 bút màu: Bút chì rà ý (thiếu ý/thừa ý) → Bút xanh rà câu (câu cụt/câu dài) → Bút vàng rà từ (thay từ đắt giá) → Bút đỏ sửa lỗi chính tả/dấu câu.",
        basic: "Lấy bài viết Bản 1 hôm qua ra và thực hiện 3 cải tiến:\n(1) Tìm và gạch bỏ 1 từ hoặc 1 câu thừa thãi, lặp ý.\n(2) Thay thế 1 tính từ chung chung bằng 1 từ gợi tả màu sắc hoặc âm thanh sinh động.\n(3) Sửa lại tất cả các lỗi chính tả, dấu câu và viết lại thành Bản 2 sạch đẹp.",
        applied: "Đọc to Bản 2 cho bố mẹ hoặc người thân nghe và ghi nhận 1 lời nhận xét từ người nghe.",
        reasoning: "So sánh Bản 1 và Bản 2, con thấy bài viết của mình đã tiến bộ rõ rệt ở những điểm nào?",
        selfCheck: "Bản 2 đã hoàn toàn sạch lỗi chính tả, câu chữ mượt mà và chữ viết nắn nót chưa?",
        challenge: "Lưu giữ cả Bản 1 và Bản 2 cạnh nhau vào tập hồ sơ học tập (Portfolio) để thấy rõ bước tiến bộ của chính mình.",
        hint: "Mẹo nhỏ: Một bài văn hay không phải là bài viết một lần là xong, mà là bài được gọt giũa với sự tỉ mỉ và kiên nhẫn."
      },
      {
        day: "Thứ 7",
        title: "Mini-check tuần 6: Tổng kết cầu nối Lớp 3 lên Lớp 4",
        objective: "Bài đánh giá toàn diện năng lực đọc hiểu sâu sắc và kỹ năng tạo lập văn bản độc lập sau 6 tuần ôn luyện cầu nối (50 phút).",
        example: "Đo lường sự tiến bộ vượt bậc của Bách về vốn từ, cấu trúc câu và phong cách diễn đạt chân thật, tự nhiên.",
        basic: "Phần 1 - Đọc hiểu văn bản (20 phút): Đọc bài 'Kỷ vật của cha':\n“Trước ngày đi công tác xa, bố tặng em một chiếc bút mực màu xanh thẫm. Thân bút thon dài, ngòi bút bằng thép sáng lấp lánh như một ngôi sao nhỏ. Bố bảo: ‘Cây bút này sẽ cùng con viết nên những bài học đầu đời thật đẹp. Hãy giữ gìn nó cẩn thận nhé!’. Suốt một năm học qua, mỗi nét chữ ngay ngắn nắn nót trên trang giấy trắng tinh đều có bóng hình của cây bút thân thương. Dù nắp bút giờ đây đã có vài vết xước nhỏ do thời gian, nhưng với em, nó vẫn là món quà quý giá nhất mà em luôn nâng niu...”\nTrả lời 4 câu hỏi:\n(1) Người bố đã tặng bạn nhỏ món quà gì và nhắn nhủ điều gì?\n(2) Tìm 2 chi tiết miêu tả chiếc bút mực.\n(3) Vết xước trên nắp bút gợi cho em suy nghĩ gì về tình cảm của bạn nhỏ đối với cây bút?\n(4) Thông điệp ý nghĩa nhất mà bài đọc muốn gửi gắm là gì?",
        applied: "Phần 2 - Viết bài văn hoàn chỉnh (25 phút): Đề bài: Viết một bài văn ngắn (từ 8 đến 10 câu) miêu tả một món đồ chơi hoặc đồ dùng học tập gắn liền với một kỷ niệm đẹp của con với người thân.\n- Yêu cầu: Có mở bài cuốn hút; thân bài có ít nhất 3 chi tiết quan sát thật và 1 kỷ niệm xúc động; kết bài đọng lại dư vị ấm áp; không sai chính tả.",
        reasoning: "Phần 3 - Tự đánh giá và Lập mục tiêu (5 phút): Sau 6 tuần cầu nối, con cảm thấy mình tự tin nhất ở kỹ năng nào (Tìm từ khóa, Đặt câu nối, hay Viết chi tiết thật)? Mục tiêu tuần 7 của con là gì?",
        selfCheck: "Chấm điểm: (1) Đọc hiểu sâu sắc (5 điểm); (2) Bài văn giàu cảm xúc, giàu chi tiết thật, ngữ pháp chuẩn xác (5 điểm). Điểm đạt tối đa: 10/10.",
        challenge: "Viết thêm 1 câu giới thiệu bài văn của con để chuẩn bị cho buổi triển lãm ngày hội chia sẻ cùng cả nhà.",
        hint: "Chúc mừng Bách đã hoàn thành xuất sắc 6 tuần cầu nối! Hãy tự tin bước vào chương trình chính thức của Lớp 4 với ngòi bút sáng tạo và trái tim rộng mở!"
      }
    ]}
  ]
};

window.BACH_CURRICULUM.enrichment = {
  math: {
    eyebrow: "TẦNG NÂNG CAO · CHẮT LỌC SINGAPORE",
    title: "Học theo mô hình, không học mẹo",
    intro: "SGK là trục chính; tầng này luyện cách nhìn giúp Bách đi xa hơn khi gặp bài học sinh giỏi.",
    principles: [
      ["CPA", "Đi từ vật thật hoặc hình vẽ → mô hình → phép tính/ký hiệu; không nhảy cóc khi nền chưa chắc."],
      ["Bar model", "Dùng sơ đồ phần–toàn thể để nhìn quan hệ trong bài toán lời văn, rồi mới chọn phép tính."],
      ["Heuristics", "Tập vẽ hình, lập bảng, thử–kiểm tra, làm ngược, xét trường hợp đơn giản và tìm quy luật."],
      ["Metacognition", "Sau mỗi bài, Bách nói: đã biết gì, thử cách nào, vì sao bỏ cách kia và kiểm tra ra sao."]
    ]
  },
  vietnamese: {
    eyebrow: "TẦNG ĐỌC VIẾT MỞ RỘNG · VĂN HỌC THẾ GIỚI",
    title: "Đọc tinh hoa, viết bằng giọng của Bách",
    intro: "SGK là nền luyện kỹ năng; văn học thế giới được dùng như cửa sổ để học cách kể, cách nhìn và cách tạo hình ảnh, không chép văn mẫu.",
    principles: [
      ["Đọc gần", "Quan sát một chi tiết, một hình ảnh hoặc một câu thoại và hỏi nó làm thay đổi cảm xúc thế nào."],
      ["Nhân vật có lựa chọn", "Tìm điều nhân vật muốn, điều cản trở và sự thay đổi sau sự việc; luôn dựa vào dẫn chứng."],
      ["Nhiều góc nhìn", "Kể lại cùng một việc từ hai điểm nhìn, giữ logic và tôn trọng cách cảm nhận riêng."],
      ["Viết rồi sửa", "Học nhịp câu, hình ảnh và cấu trúc từ tác phẩm phù hợp lứa tuổi; tự viết bản riêng, sửa hai vòng."]
    ]
  }
};

// Lesson plan chuẩn dùng chung cho 36 tuần × 2 môn.
// Nội dung lấy trực tiếp từ chủ đề/trọng tâm tuần và được tách thành
// tám hành động rõ ràng để phụ huynh và Bách học theo từng bước.
const LESSON_FIELDS = [
  ["objective", "Mục tiêu"],
  ["keyKnowledge", "Kiến thức cần nhớ"],
  ["sampleExample", "Ví dụ mẫu"],
  ["practiceBasic", "Bài cơ bản"],
  ["practiceApplied", "Bài vận dụng"],
  ["challengeOlympic", "Thử thách / suy luận"],
  ["selfCheck", "Tự kiểm tra và sửa lỗi"],
  ["completionCriteria", "Tiêu chí hoàn thành"]
];

function mathLessonVariant(title, phaseId) {
  const singaporeLens = phaseId === "P1"
    ? "Góc nhìn Singapore: dùng vật thật, sơ đồ phần–toàn thể hoặc bảng trước khi chuyển sang ký hiệu."
    : phaseId === "P2" || phaseId === "P3"
      ? "Góc nhìn Singapore: thử CPA, sơ đồ thanh, làm ngược hoặc kiểm tra bằng một biểu diễn khác."
      : "Góc nhìn Singapore: chọn heuristic phù hợp như lập bảng, thử–kiểm tra, chia trường hợp hoặc tìm quy luật; nói rõ vì sao chọn nó.";
  const gentleChallenge = phaseId === "P1"
    ? `Thử thách nhẹ: đổi một dữ kiện hoặc tự đặt một câu hỏi mới từ đề; chỉ cần giải thích lựa chọn, chưa cần cách giải Olympic. ${singaporeLens}`
    : phaseId === "P2" || phaseId === "P3"
      ? `Thử thách mở rộng: tìm một trường hợp đặc biệt, vẽ thêm một biểu diễn hoặc kiểm tra kết quả bằng cách thứ hai. ${singaporeLens}`
      : `Thử thách Olympic: chia trường hợp có tổ chức, tìm quy luật hoặc so sánh hai chiến lược; ghi rõ vì sao không bỏ sót trường hợp. ${singaporeLens}`;
  if (title.includes("Đọc đề")) return {
    sampleExample: "Ví dụ mẫu: gạch dữ kiện, khoanh điều phải tìm, viết câu hỏi bằng lời của mình rồi chọn sơ đồ đoạn thẳng.",
    practiceBasic: "Bài cơ bản: với 3 đề ngắn, chỉ tóm tắt và chọn phép tính, chưa cần tính ngay.",
    practiceApplied: "Bài vận dụng: giải một đề hai bước; sau mỗi phép tính ghi câu trả lời có đơn vị.",
    challengeOlympic: gentleChallenge
  };
  if (/(Chu vi|Diện tích|Góc|hình|Suy luận từ hình)/i.test(title)) return {
    sampleExample: "Ví dụ mẫu: vẽ hình có đủ ký hiệu, đo hoặc đếm phần đã biết, rồi nói quan hệ giữa các cạnh/góc trước khi dùng công thức.",
    practiceBasic: "Bài cơ bản: nhận dạng 3 hình và tính đại lượng trực tiếp từ dữ kiện đã cho.",
    practiceApplied: "Bài vận dụng: che một dữ kiện và tìm ngược cạnh, góc hoặc diện tích; kiểm tra bằng hình vẽ.",
    challengeOlympic: gentleChallenge
  };
  if (/(Bảng|biểu đồ|Đề mô phỏng)/i.test(title)) return {
    sampleExample: "Ví dụ mẫu: đọc tên, đơn vị và chú giải của bảng/biểu đồ trước; sau đó trả lời một câu hỏi chỉ dùng một và một câu dùng hai dữ kiện.",
    practiceBasic: "Bài cơ bản: đọc 3 giá trị và viết 2 câu hỏi có thể trả lời từ dữ liệu.",
    practiceApplied: "Bài vận dụng: so sánh hai nhóm dữ liệu, nêu một nhận xét và chỉ ra bằng chứng.",
    challengeOlympic: gentleChallenge
  };
  if (/(Bội|Dãy số|Phân số|Số tự nhiên|Số thập phân|Chẵn lẻ)/i.test(title)) return {
    sampleExample: "Ví dụ mẫu: viết vài trường hợp nhỏ vào bảng, đánh dấu điều luôn đúng và nói quy tắc bằng một câu.",
    practiceBasic: "Bài cơ bản: làm 3 câu tăng dần, dùng hình hoặc tia số trước khi chuyển sang ký hiệu.",
    practiceApplied: "Bài vận dụng: thay một điều kiện của bài mẫu, dự đoán kết quả rồi kiểm tra bằng bảng nhỏ.",
    challengeOlympic: gentleChallenge
  };
  if (/(Tổ hợp|Dirichlet|trường hợp|Tối ưu|nhiều lời giải|làm việc ngược|thử giá trị)/i.test(title)) return {
    sampleExample: title.includes("Dirichlet")
      ? "Ví dụ mẫu: dùng 5 que tính và 4 chiếc cốc, xếp thử rồi nói điều chắc chắn xảy ra bằng lời của mình; chưa dùng ký hiệu khó."
      : "Ví dụ mẫu: làm một trường hợp rất nhỏ bằng vật thật/bảng, liệt kê có thứ tự rồi rút ra chiến lược.",
    practiceBasic: title.includes("Dirichlet")
      ? "Bài cơ bản: xếp 4–6 đồ vật vào 2–3 nhóm, vẽ lại một cách xếp và chỉ ra nhóm có nhiều đồ vật hơn."
      : "Bài cơ bản: giải phiên bản có ít đồ vật hoặc ít điều kiện hơn và đánh dấu từng trường hợp đã xét.",
    practiceApplied: title.includes("Dirichlet")
      ? "Bài vận dụng: đổi số đồ vật hoặc số nhóm, dự đoán trước rồi kiểm chứng bằng bảng; nếu khó có thể dừng ở trường hợp nhỏ."
      : "Bài vận dụng: giải phiên bản lớp 4 có thêm một điều kiện; trình bày bằng bảng hoặc sơ đồ.",
    challengeOlympic: gentleChallenge
  };
  return {
    sampleExample: `Ví dụ mẫu: làm một bài ngắn về “${title}”, nói rõ dữ kiện nào được dùng ở từng bước rồi kiểm tra kết quả.`,
    practiceBasic: "Bài cơ bản: làm 3 câu từ dễ đến vừa, chỉ đổi một dữ kiện mỗi lần.",
    practiceApplied: "Bài vận dụng: đưa kiến thức vào một tình huống đời sống, chọn cách biểu diễn phù hợp và viết kết luận.",
    challengeOlympic: gentleChallenge
  };
}

function vietnameseLessonVariant(title) {
  if (/(Đọc|Tóm tắt|văn bản|Cảm nhận)/i.test(title)) return {
    sampleExample: "Ví dụ mẫu: đọc một văn bản ngắn, đánh dấu ý chính, chi tiết làm bằng chứng và từ nối giữa các ý.",
    practiceBasic: "Bài cơ bản: trả lời 3 câu hỏi bằng câu trọn ý và chỉ ra dòng/chi tiết làm căn cứ.",
    practiceApplied: "Bài vận dụng: tóm tắt hoặc nêu cảm nhận bằng lời của Bách, giữ lại các chi tiết không thể bỏ.",
    challengeOlympic: "Thử thách diễn đạt: đổi một câu trả lời chung chung thành câu có bằng chứng cụ thể, không chép nguyên văn.",
    completionCriteria: "Hoàn thành khi Bách nói được ý chính, chọn đúng ít nhất hai chi tiết làm căn cứ và viết câu trả lời mạch lạc."
  };
  if (/(Tả|quan sát)/i.test(title)) return {
    sampleExample: "Ví dụ mẫu: quan sát một đồ vật/người/cảnh thật, ghi nhanh chi tiết nhìn–nghe–chạm rồi chọn chi tiết có ích nhất.",
    practiceBasic: "Bài cơ bản: viết 5–7 câu theo trật tự đã chọn, tránh liệt kê quá nhiều đặc điểm.",
    practiceApplied: "Bài vận dụng: thêm hành động, công dụng hoặc cảm xúc để người đọc hình dung rõ đối tượng.",
    challengeOlympic: "Thử thách diễn đạt: bỏ hai tính từ chung chung và thay bằng chi tiết quan sát được; giữ giọng kể của Bách.",
    completionCriteria: "Hoàn thành khi bài có trình tự quan sát, ít nhất ba chi tiết cụ thể và một câu thể hiện cảm nhận riêng."
  };
  if (/(Kể|chuyện|Đối thoại)/i.test(title)) return {
    sampleExample: "Ví dụ mẫu: lập ba mốc mở đầu–sự việc chính–kết thúc; mỗi lời nói phải gắn với người nói và hành động.",
    practiceBasic: "Bài cơ bản: kể lại một việc bằng 5–7 câu theo đúng trình tự thời gian.",
    practiceApplied: "Bài vận dụng: đổi góc nhìn hoặc thêm một lựa chọn của nhân vật nhưng vẫn giữ nguyên nhân–kết quả.",
    challengeOlympic: "Thử thách diễn đạt: cắt một sự việc không làm câu chuyện tiến lên và thay bằng một chi tiết có tác dụng.",
    completionCriteria: "Hoàn thành khi câu chuyện có vấn đề, diễn biến, kết quả rõ; lời kể và đối thoại phù hợp lứa tuổi."
  };
  if (/(từ|vốn từ|Câu|Liên kết|Sửa|Biên tập|Chính tả)/i.test(title)) return {
    sampleExample: `Ví dụ mẫu cho “${title}”: so sánh một câu mơ hồ với câu đã sửa; chỉ ra từ/cấu trúc nào làm ý rõ hơn.`,
    practiceBasic: `Bài cơ bản: sửa 3 câu hoặc dùng 3 từ mới trong những câu do Bách tự đặt, đúng mục tiêu “${title}”.`,
    practiceApplied: "Bài vận dụng: biên tập một đoạn ngắn, giữ nguyên ý của mình nhưng làm câu chính xác và liên kết hơn.",
    challengeOlympic: "Thử thách diễn đạt: tìm hai cách viết cùng một ý, chọn cách tự nhiên hơn và giải thích lý do.",
    completionCriteria: "Hoàn thành khi Bách dùng từ đúng nghĩa, câu đủ ý, sửa được lỗi chính và nói được vì sao mình sửa."
  };
  return {
    sampleExample: `Ví dụ mẫu: đọc một đoạn ngắn về “${title}”, cùng lập dàn ý và nhận diện câu giúp đoạn văn tiến về ý chính.`,
    practiceBasic: "Bài cơ bản: lập dàn ý 3–5 ý rồi viết đoạn 5–7 câu, mỗi câu phục vụ một ý.",
    practiceApplied: "Bài vận dụng: viết bản thứ hai sau khi thêm chi tiết thật và một câu chuyển ý.",
    challengeOlympic: "Thử thách diễn đạt: chọn một câu quan trọng, viết hai phiên bản rồi giữ phiên bản rõ và tự nhiên hơn.",
    completionCriteria: "Hoàn thành khi bài có mở ý, phát triển và kết; Bách chỉ ra được một câu hay và một câu đã sửa."
  };
}

function createLessonPlan(item, subject, weekNumber, phase) {
  const title = item[0];
  const focus = item[1];
  const bridgePrompt = phase.id === "P1"
    ? "Nếu còn quên nền lớp 3, quay lại ví dụ nhỏ hơn trước khi tăng độ khó."
    : "Luôn nói lại cách nghĩ bằng lời của mình trước khi xem gợi ý.";
  const variant = subject === "math"
    ? mathLessonVariant(title, phase.id)
    : vietnameseLessonVariant(title);

  if (subject === "math") {
    const mentalMathNote = phase.id === "P1"
      ? " Mỗi buổi dành 8–10 phút cho Nền tính toán nhanh: chính xác trước, giải thích chiến lược rồi mới tăng tốc; không dùng máy tính."
      : "";
    return {
      objective: `Sau tuần ${weekNumber}, Bách làm được dạng “${title}”, trình bày đủ bước và giải thích được vì sao chọn cách làm.`,
      keyKnowledge: `${focus} ${bridgePrompt}${mentalMathNote}`,
      sampleExample: variant.sampleExample,
      practiceBasic: variant.practiceBasic,
      practiceApplied: variant.practiceApplied,
      challengeOlympic: variant.challengeOlympic,
      selfCheck: "Tự kiểm tra: ước lượng trước, đối chiếu đơn vị/dữ kiện, làm ngược hoặc thay lại kết quả; sửa tối đa 3 lỗi quan trọng.",
      completionCriteria: "Hoàn thành khi Bách tự tóm tắt đề, làm đúng phần cơ bản, giải thích được một bước cốt lõi và biết cách kiểm tra kết quả."
    };
  }

  return {
    objective: `Sau tuần ${weekNumber}, Bách viết được một đoạn/bài về “${title}” rõ ý, có trình tự và vẫn giữ giọng kể tự nhiên đúng tuổi.`,
    keyKnowledge: `${focus} ${bridgePrompt}`,
    sampleExample: variant.sampleExample,
    practiceBasic: variant.practiceBasic,
    practiceApplied: variant.practiceApplied,
    challengeOlympic: `${variant.challengeOlympic} Góc nhìn văn học thế giới: đọc một đoạn hợp pháp, chọn một kỹ thuật kể/miêu tả đáng học rồi thử viết phiên bản của chính Bách, không sao chép câu chữ.`,
    selfCheck: "Tự kiểm tra: đọc thành tiếng, rà ý–câu–từ–chính tả, gạch câu lặp hoặc mơ hồ; chọn tối đa 3 chỗ để viết lại.",
    completionCriteria: variant.completionCriteria
  };
}

// Nội dung tuần 7–36 được biên soạn theo từng chủ đề, thay cho các câu mẫu
// chung. Mỗi kit có một tình huống neo, bài luyện, vận dụng và thử thách đủ
// dữ kiện để Bách có thể học ngay trên màn hình mà không phải đoán “đề nào?”.
const AUTHORED_MATH_KITS = {
  "Dãy số và quy luật": ["2, 6, 12, 20, 30: hiệu lần lượt là 4, 6, 8, 10; số tiếp theo là 42.", "Điền ba số tiếp theo: 5, 9, 15, 23, 33, …; viết các hiệu trước khi kết luận.", "Một rạp xếp hàng ghế: hàng 1 có 8 ghế, hàng 2 có 11 ghế, hàng 3 có 14 ghế. Hàng 10 có bao nhiêu ghế?", "Tìm hai quy luật khác nhau cùng cho ba số đầu 3, 6, 9; giải thích vì sao cần nhiều dữ kiện hơn.", "Bạn An viết 1, 4, 9, 16 rồi nói ‘mỗi lần cộng 3’. Chỉ ra dòng đầu tiên không đúng.", "Mini-test: một dãy cộng đều, một dãy hiệu tăng đều và một bài tự tạo quy luật."] ,
  "Bội, ước và chia hết": ["24 có các ước 1, 2, 3, 4, 6, 8, 12, 24; các cặp ước nhân với nhau bằng 24.", "Liệt kê các ước của 18 và 30 theo cặp; khoanh ước chung.", "36 chiếc huy hiệu được chia đều vào túi 4, 6 hoặc 9 chiếc. Mỗi cách có bao nhiêu túi?", "Tìm số nhỏ nhất lớn hơn 20 vừa chia hết cho 3 vừa chia hết cho 4; giải thích bằng bảng bội.", "Một bạn nói 15 là ước của 5. Sửa câu đó bằng phép nhân kiểm tra.", "Mini-test: ước, bội, chia hết và một câu tìm số thỏa hai điều kiện."] ,
  "Phân số qua hình ảnh": ["Một thanh giấy chia 8 phần bằng nhau, tô 3 phần: phần tô là 3/8; mẫu số luôn là số phần bằng nhau.", "Vẽ hai hình bằng nhau, tô 1/2 ở hình thứ nhất và 2/4 ở hình thứ hai; ghi điều giống nhau.", "Lan ăn 3 trong 8 miếng bánh bằng nhau, Minh ăn 1 trong 4 miếng của chiếc bánh bằng nhau. Ai ăn nhiều hơn? Dùng hình trước.", "Không vẽ hình, tìm ba phân số bằng 1/2 có mẫu số nhỏ hơn 13 và giải thích cách tạo.", "Bạn Bình tô 3 ô trong 8 ô rồi viết 8/3. Chỉ ra tử số và mẫu số bị đổi ở đâu.", "Mini-test: đọc phân số từ hình, so sánh bằng hình và tạo phân số bằng nhau."] ,
  "Cộng trừ phân số cùng mẫu": ["3/8 + 2/8 = 5/8 vì số phần bằng nhau vẫn là tám; chỉ gộp số phần được tô.", "Tính 1/7 + 3/7, 6/9 − 2/9 và giải thích vì sao mẫu số không cộng.", "Một cuộn ruy băng dài 9 phần bằng nhau. Dùng 2/9 buộc quà và 4/9 trang trí. Còn lại bao nhiêu phần?", "Tìm một phép cộng hai phân số cùng mẫu có tổng bằng 1 nhưng cả hai phân số đều khác 1/2.", "Bạn viết 2/5 + 1/5 = 3/10. Hãy sửa bằng hình năm phần.", "Mini-test: ba phép tính cùng mẫu, một bài lời văn và một câu tự tạo."] ,
  "Số thập phân làm quen": ["25.000 đồng = 25 nghìn đồng; 2 m 50 cm có thể đọc là 2,5 m khi đơn vị là mét.", "Đổi 1,2 m thành m và cm; đọc đúng 3,05 kg và 0,75 lít.", "Một chai nước 0,5 lít, một bình có 1,5 lít. Rót đầy được mấy chai? Minh họa bằng vạch chia lít.", "Sắp xếp 0,8; 0,75; 0,805 từ bé đến lớn và giải thích bằng cùng số chữ số sau dấu phẩy.", "Bạn nói 0,4 m = 4 cm. Hãy kiểm tra bằng thước có 100 cm.", "Mini-test: tiền, độ dài, thứ tự số thập phân và một đổi đơn vị."] ,
  "Bảng và biểu đồ": ["Bảng sách mượn: Toán 18, Khoa học 24, Truyện 31. Truyện nhiều hơn Toán 13 quyển.", "Trả lời: môn nào nhiều nhất, tổng ba loại là bao nhiêu, chênh lệch hai loại bất kỳ.", "Khảo sát 12 bạn thích cam, 9 bạn thích táo, 15 bạn thích chuối. Vẽ bảng rồi viết hai nhận xét có số liệu.", "Nếu thêm 4 bạn thích táo, thứ hạng có đổi không? Dự đoán rồi tính.", "Bạn kết luận ‘truyện gấp đôi toán’ từ 31 và 18. Chỉ ra vì sao không đúng.", "Mini-test: đọc bảng, dựng biểu đồ cột đơn giản và đặt một câu hỏi hai bước."] ,
  "Đơn vị và đổi đơn vị": ["3 m 45 cm = 345 cm vì 3 m = 300 cm; chỉ cộng khi đã cùng đơn vị.", "Đổi 4 kg 250 g, 2 giờ 35 phút và 5 m 8 cm sang đơn vị nhỏ hơn.", "Một cuộn dây dài 8 m 40 cm, cắt 2 m 75 cm. Còn lại bao nhiêu xăng-ti-mét?", "Có 2 l 250 ml nước, chia đều vào 5 chai. Mỗi chai bao nhiêu ml?", "Bạn cộng 2 m 30 cm + 75 cm = 2 m 105 cm. Viết lại kết quả chuẩn hơn.", "Mini-test: đổi đơn vị, cộng trừ khác đơn vị và một bài chia."] ,
  "Chu vi hình": ["Hình chữ nhật dài 14 cm, rộng 9 cm: chu vi = (14 + 9) × 2 = 46 cm.", "Tính chu vi hình vuông cạnh 8 cm và hai hình chữ nhật 12×5, 15×4 cm.", "Một mảnh vườn chữ nhật chu vi 36 m, dài 11 m. Tìm chiều rộng rồi kiểm tra bằng chu vi.", "Ghép hai hình vuông cạnh 4 cm sát nhau. Chu vi hình mới là bao nhiêu? Vẽ để không đếm cạnh chung.", "Bạn tính chu vi 12×5 là 60 cm. Sửa bằng cách nêu các cạnh được cộng.", "Mini-test: chu vi trực tiếp, tìm cạnh thiếu, hình ghép."] ,
  "Diện tích hình chữ nhật": ["Hình chữ nhật 9 cm × 6 cm có 54 ô vuông đơn vị, nên diện tích là 54 cm².", "Tính diện tích các hình 7×8, 12×5 cm; ghi đúng cm².", "Một tấm bìa diện tích 72 cm², rộng 8 cm. Tìm chiều dài và kiểm tra bằng phép nhân.", "Tìm ba cặp số nguyên có diện tích 36 cm²; cặp nào có chu vi nhỏ nhất?", "Bạn viết diện tích 8×5 là 40 cm. Chỉ ra đơn vị còn thiếu và vì sao.", "Mini-test: diện tích, bài ngược, so sánh hai hình cùng diện tích."] ,
  "Góc và đường thẳng": ["Góc vuông bằng một góc của tờ giấy; hai đường cùng tạo bốn góc vuông là vuông góc.", "Dùng êke tìm 5 góc vuông trong phòng và vẽ một cặp đường song song, một cặp vuông góc.", "Vẽ hình chữ nhật ABCD, chỉ ra các cặp cạnh song song và các góc vuông.", "Một hình có bốn góc vuông nhưng các cạnh kề không bằng nhau: đó có thể là hình gì? Giải thích.", "Bạn gọi hai đường cắt nhau là song song. Vẽ phản ví dụ để sửa.", "Mini-test: nhận dạng góc, song song/vuông góc và vẽ theo yêu cầu."] ,
  "Thời gian và lịch": ["Phim bắt đầu 14:35, dài 1 giờ 45 phút, kết thúc lúc 16:20.", "Tính khoảng thời gian: 7:25–8:10; 9:50–11:05; 13:40–15:15.", "Bách đọc 18 trang mỗi ngày từ thứ Hai đến thứ Sáu, cuối tuần đọc thêm 25 trang. Cả tuần đọc bao nhiêu trang?", "Một tàu chạy mỗi 18 phút từ 7:00. Chuyến thứ 6 rời ga lúc mấy giờ?", "Bạn trừ 14:10 − 13:45 = 1:35. Chỉ lỗi khi mượn giờ.", "Mini-test: thời lượng, lịch tuần, quy luật thời điểm."] ,
  "Sơ đồ hóa bài khó": ["An có 36 nhãn vở, Bình có ít hơn An 8 nhãn; tổng hai bạn là 64. Vẽ sơ đồ đoạn thẳng để kiểm tra dữ kiện.", "Vẽ sơ đồ cho ba bài: hơn/kém, gấp/lần, tổng–hiệu; chưa cần giải ngay.", "Một bể có 120 lít nước, dùng 1/4 số nước rồi thêm 18 lít. Còn bao nhiêu lít? Chọn sơ đồ hoặc bảng.", "Tự tạo một bài có hai cách biểu diễn: sơ đồ thanh và phép tính. So sánh cách nào nhìn quan hệ rõ hơn.", "Một lời giải lấy 120 − 1/4 + 18. Giải thích vì sao cần biết 1/4 của số nào.", "Mini-test: chọn đúng mô hình cho ba đề và giải một đề hai bước."] ,
  "Bảng và thử giá trị": ["Tìm hai số có tổng 20, số lớn hơn số bé 4: thử cặp 8–12 rồi kiểm tra cả tổng lẫn hiệu.", "Lập bảng các cặp số có tổng 18; khoanh các cặp có hiệu 6.", "Ba hộp có tổng 30 viên bi. Hộp đỏ hơn hộp xanh 4 viên, hộp vàng có 10 viên. Tìm hai hộp còn lại.", "Tìm số hai chữ số có tổng chữ số 9 và lớn hơn 60; liệt kê có thứ tự, không đoán.", "Bạn thử 9 và 11 cho tổng 20 rồi kết luận ngay. Nêu điều kiện còn thiếu.", "Mini-test: bảng cặp số, số hai chữ số, bài lời văn."] ,
  "Làm việc ngược": ["Một số nhân 3 rồi cộng 7 được 31. Làm ngược: 31 − 7 = 24, 24 : 3 = 8.", "Tìm x: x + 28 = 65; 4×x = 52; x : 6 = 9.", "Sau khi mua vở hết 18.000 đồng, Nam còn 27.000 đồng. Lúc đầu Nam có bao nhiêu tiền? Viết phép ngược.", "Một số qua hai bước ‘gấp đôi rồi bớt 5’ được 37. Tìm số ban đầu và tự kiểm tra.", "Bạn làm ngược 37 : 2 + 5. Chỉ ra thứ tự đảo phép đúng.", "Mini-test: số bị che một bước, hai bước và bài tiền."] ,
  "Chẵn lẻ và bất biến": ["Tổng hai số chẵn là chẵn; chẵn + lẻ là lẻ. Ví dụ 14 + 9 = 23.", "Phân loại 12, 17, 25, 40 theo chẵn/lẻ rồi dự đoán tính chẵn lẻ của ba tổng.", "Có 15 bạn bắt tay từng người đúng một lần với một bạn khác. Có thể không ai lẻ lượt bắt tay không? Thử trường hợp nhỏ.", "Đổi chỗ hai chữ số của số có hai chữ số: tổng hai chữ số có đổi không? Kiểm tra 34 và 43.", "Bạn nói lẻ + lẻ = lẻ. Phản ví dụ nhỏ nhất là gì?", "Mini-test: chẵn lẻ của tổng/tích, một bất biến đơn giản."] ,
  "Nguyên lý Dirichlet trực quan": ["5 quả táo bỏ vào 4 giỏ thì chắc chắn có một giỏ có ít nhất 2 quả.", "Với 7 chiếc tất đỏ/xanh, có chắc lấy được 2 chiếc cùng màu không? Vẽ các trường hợp xấu nhất.", "Trong 13 tháng sinh của 14 bạn (tính theo 12 tháng), vì sao chắc có hai bạn cùng tháng sinh?", "Có 10 viên bi bỏ vào 3 hộp. Ít nhất một hộp có bao nhiêu viên? Dự đoán rồi chia đều nhất có thể.", "Bạn nói 4 đồ vật vào 4 hộp chắc có một hộp 2 đồ vật. Vẽ cách xếp phản ví dụ.", "Mini-test: ba tình huống giỏ–đồ vật bằng lời, không dùng thuật ngữ khó."] ,
  "Tổ hợp cơ bản": ["Áo đỏ/xanh và quần đen/xám tạo 4 bộ: liệt kê theo bảng 2×2.", "Liệt kê các số hai chữ số từ 1, 2, 3 không lặp chữ số; đếm rồi kiểm tra bằng nhánh cây.", "Quán có 3 loại bánh và 2 loại nước. Có bao nhiêu cách chọn một bánh, một nước? Viết toàn bộ.", "Từ A, B, C đi qua hai trạm X, Y bằng hai tuyến khác nhau. Vẽ sơ đồ nhánh và tính số lộ trình.", "Bạn đếm 3×2 nhưng một lựa chọn bị cấm. Cách sửa bảng đếm là gì?", "Mini-test: bảng, nhánh cây, một điều kiện loại trừ."] ,
  "Olympic mini set 1": ["Set gồm: số bị che 3×□+5=29; hình chữ nhật chu vi 30 cm; dãy 1,4,9,16; đếm bộ áo-quần 3×2.", "Làm bốn câu theo thứ tự câu chắc → câu cần sơ đồ → câu cần bảng → câu khó.", "Chọn một câu sai, viết lại lời giải chỉ giữ các bước cần thiết.", "Giải câu dãy số bằng cách hiệu và cách nhận dạng số chính phương đơn giản.", "Một lời giải chỉ ghi đáp số cho câu hình. Thêm dữ kiện và kết luận đủ để người khác chấm.", "Mini-test 25 phút: bốn câu mới cùng bốn kiểu tư duy."] ,
  "Phân tích trường hợp": ["Tìm các số hai chữ số có tổng chữ số 7: 16,25,34,43,52,61,70; lập theo hàng chục để không sót.", "Tìm các số hai chữ số có chữ số hàng chục lớn hơn hàng đơn vị và tổng bằng 9.", "Ba bạn chọn một trong hai trò chơi. Liệt kê các cách có đúng hai bạn chọn cờ vua.", "Tìm số lẻ nhỏ hơn 50 chia 3 dư 1; chia theo các bội của 3 trước.", "Bạn liệt kê 16,25,34 rồi dừng. Cách kiểm tra điểm bắt đầu–kết thúc là gì?", "Mini-test: số chữ số, lựa chọn, điều kiện dư."] ,
  "Suy luận từ hình": ["Một hình chữ nhật 10×6 cm bị cắt bỏ một hình vuông 3×3 cm ở góc: diện tích còn lại 51 cm².", "Vẽ ba hình ghép ô vuông, đếm diện tích bằng tách thành hình chữ nhật nhỏ.", "Một hình vuông cạnh 8 cm được kẻ hai đường chia thành bốn hình chữ nhật bằng nhau. Mỗi phần có chu vi bao nhiêu?", "Cắt một hình chữ nhật 12×8 thành hai phần có diện tích bằng nhau theo hai cách.", "Bạn cộng chu vi các phần sau khi ghép rồi gọi là chu vi hình lớn. Vẽ cạnh trong bị đếm thừa.", "Mini-test: hình ghép, phần bị cắt, đường phụ."] ,
  "Tối ưu hóa đơn giản": ["Dùng 24 que tạo hình chữ nhật có cạnh nguyên. Các cặp 1×11, 2×10, 3×9, 4×8, 5×7, 6×6; diện tích lớn nhất là 36.", "Lập bảng các hình chữ nhật chu vi 20 cm và tìm diện tích lớn nhất.", "Có 30.000 đồng mua bút 4.000 và vở 6.000 đồng. Tìm cách mua nhiều món nhất nhưng không vượt tiền.", "Tìm hai số có tổng 30 để tích lớn nhất bằng bảng nhỏ.", "Bạn chọn ngay 1 và 14 vì tổng 15. Thiếu tiêu chí nào để biết tốt nhất?", "Mini-test: tối đa/tối thiểu với bảng các trường hợp."] ,
  "Bài toán nhiều lời giải": ["48×25 = 48×100:4 = 1.200; cũng có thể 50×25 − 2×25 = 1.200.", "Tính 36×15 bằng hai cách; gạch bước nào cả hai cách đều dựa vào.", "Một lớp xếp 84 học sinh thành hàng đều. Tìm ba cách xếp hàng và giải thích cách nào dễ quan sát.", "Tổng 1+2+…+10 có thể ghép đầu–cuối. Tự vẽ cách ghép và kiểm tra.", "Một cách giải dài nhưng đúng có nên bỏ? Viết tiêu chí: đúng, rõ, kiểm tra được.", "Mini-test: một phép tính hai cách, một bài lời văn hai sơ đồ."] ,
  "Thi thử có chiến thuật": ["Đề 25 phút: 3.998+2.007; phân số 3/8+2/8; chu vi 14×9; một dãy số; một bài bảng trường hợp.", "Đánh dấu C (chắc), V (vừa), K (khó); làm C trước, sau 8 phút đổi câu nếu bế tắc.", "Chữa một câu sai bằng bảng lỗi: đọc đề, mô hình, tính, kiểm tra.", "Tự đặt thời gian 6 phút cho câu C và chỉ tính giờ khi đã tóm tắt xong.", "Bạn bỏ trống câu khó mà không ghi hướng. Viết một hình/sơ đồ hoặc điều đã biết để còn điểm lập luận.", "Mini-test mới 25 phút và so sánh chiến lược, không chỉ so điểm."] ,
  "Olympic mini set 2": ["Set: tìm x từ (x+5)×3=36; đếm hình chữ nhật trong lưới 2×3; số có tổng chữ số 10; bài chia có dư.", "Làm từng câu, ghi heuristic đã chọn: làm ngược, vẽ hình, lập bảng hay kiểm tra dư.", "Chữa sâu câu đếm hình: chia theo kích thước hình chữ nhật để không trùng.", "Viết lời giải cho một bạn lớp 4 khác hiểu, không dùng ‘rõ ràng là’ mà không giải thích.", "Một đáp án có đúng số nhưng sai lý do. Tìm chỗ thiếu lập luận.", "Mini-test: một bài mỗi mạch số–hình–đếm–logic."] ,
  "Chẩn đoán lỗ hổng": ["Làm 6 câu chẩn đoán: số lớn, cộng trừ, phân số, diện tích, dãy số, bài lời văn; ghi loại lỗi thay vì chỉ đáp án.", "Với mỗi câu sai, chọn một nhãn: chưa hiểu, sai chiến lược, tính ẩu, đọc thiếu điều kiện.", "Làm lại duy nhất hai câu sai cùng loại, đổi số để kiểm tra đã hiểu hay chỉ nhớ đáp án.", "Tạo sổ lỗi: dấu hiệu nhận biết, ví dụ sai, bước phòng tránh.", "Nếu làm nhanh nhưng thiếu lời giải, xếp đó vào lỗi nào? Viết cách nâng tiêu chuẩn.", "Mini-test cá nhân hóa dựa trên hai nhãn lỗi nhiều nhất."] ,
  "Sổ tay chiến lược": ["Trang mẫu: ‘bù trừ’ — dấu hiệu: số gần tròn; ví dụ 498+37; kiểm tra: cộng ngược.", "Viết ba trang: sơ đồ thanh, lập bảng, làm việc ngược; mỗi trang có dấu hiệu và một ví dụ tự tạo.", "Nhìn ba đề không giải, chọn chiến lược phù hợp và giải thích lựa chọn.", "Một đề có thể dùng hai chiến lược. Viết lúc nào nên đổi cách để không mắc kẹt.", "Sửa một trang sổ tay có ví dụ sai hoặc quá chung chung.", "Mini-test: nhận diện chiến lược trước, giải sau."] ,
  "Đề mô phỏng Singapore": ["Một bể có 3/5 dung tích là 120 lít. Hỏi đầy bể có bao nhiêu lít? Vẽ sơ đồ thanh 5 phần.", "Giải ba bài mô hình phần–toàn thể, so sánh, tỉ số đơn giản bằng sơ đồ trước phép tính.", "Cửa hàng giảm 20.000 đồng cho một cặp vở, mua 3 cặp và một bút 7.000 đồng. Lập bảng tiền rồi tính.", "Tạo bài ‘có dữ kiện thừa’ và chỉ ra dữ kiện nào không dùng.", "Một sơ đồ thanh chia phần không đều nhưng ghi 5 phần bằng nhau. Chỉ lỗi bằng hình.", "Mini-test 25 phút: hai bài bar model, một bài dữ liệu, một bài suy luận."] ,
  "Đề mô phỏng Trung Quốc": ["Tìm số tự nhiên nhỏ nhất có hai chữ số, chia 5 dư 2 và chia 3 dư 1. Lập bảng các số dư.", "Giải ba bài số học/hình học có yêu cầu nêu điều kiện và kiểm tra từng trường hợp.", "Một hình vuông cạnh 10 cm cắt thành bốn hình chữ nhật bằng nhau. Tìm chu vi mỗi hình trong hai kiểu cắt.", "Viết lời giải ngắn: giả thiết, các bước, kết luận; không bỏ trường hợp đã loại.", "Bạn thử số ngẫu nhiên rồi gặp đáp án. Chuyển thành bảng có điểm bắt đầu và quy tắc dừng.", "Mini-test: một bài số, một hình, một quy luật; ưu tiên lời giải đủ."] ,
  "Dự án Toán quanh nhà": ["Đo bàn học: dài, rộng, cao; chọn một đại lượng có ích để tính, ví dụ diện tích mặt bàn.", "Lập bảng số liệu thật gồm ít nhất 5 dòng: vật, số đo, đơn vị, cách đo.", "Dùng số liệu để giải một câu hỏi hai bước, ví dụ tính số giấy phủ mặt bàn và tiền mua.", "Vẽ biểu đồ cột nhỏ từ một dữ liệu thật: số trang đọc, số bước đi hoặc chi tiêu nhỏ.", "Kiểm tra dự án: đơn vị thống nhất, số liệu hợp lý, có ảnh/chú thích nếu cần.", "Trình bày dự án 3 phút: câu hỏi, số liệu, cách tính, điều Bách phát hiện."] ,
  "Ngày hội Bách giải thích": ["Chọn ba bài đại diện: một tính nhẩm, một sơ đồ, một suy luận; mỗi bài phải có bản nháp đã sửa.", "Thu âm/đọc lời giải 60–90 giây cho một bài: nêu dữ kiện, chiến lược, kiểm tra.", "Một người nghe hỏi ‘vì sao?’ ở bất kỳ bước nào; Bách bổ sung lời giải nếu bước đó chưa rõ.", "So sánh lời giải tuần đầu và tuần cuối: phần nào gọn hơn, phần nào chắc hơn.", "Chọn một lỗi cũ và minh họa cách Bách nay tự phát hiện lỗi đó.", "Ngày hội: trình bày ba bài, tự nhận xét một điểm mạnh và một mục tiêu kế tiếp."]
};

const AUTHORED_VIETNAMESE_KITS = {
  "Tả đồ vật": ["Đề: tả chiếc hộp bút đã dùng lâu. Ghi 6 chi tiết theo thứ tự ngoài → trong → kỉ niệm.", "Viết câu chủ đề và 4 câu phát triển, không dùng ‘rất đẹp’ hoặc ‘rất thích’.", "Chọn một vết xước, mùi giấy hoặc âm thanh khóa kéo để viết đoạn 8–10 câu.", "Viết hai câu tả cùng chiếc hộp: một câu liệt kê, một câu có hành động; chọn câu có hình hơn.", "Sửa đoạn có ba tính từ chung chung thành chi tiết quan sát được.", "Mini-test: quan sát một đồ vật mới, lập ý 4 dòng, viết và sửa 3 lỗi."] ,
  "Đoạn văn tả người": ["Đề: tả một người thân qua việc họ làm vào buổi sáng, không liệt kê ngoại hình.", "Ghi 2 nét nhìn thấy, 2 hành động và 1 câu nói đặc trưng của người đó.", "Viết đoạn 8–10 câu, dùng hành động để người đọc tự nhận ra tính cách.", "Đổi câu ‘bà rất yêu em’ thành một hành động có thể nhìn thấy.", "Cắt một câu khen chung chung, thay bằng chi tiết đúng trải nghiệm của Bách.", "Mini-test: tả một người ở trường bằng chi tiết và trình tự rõ."] ,
  "Đọc văn bản thông tin": ["Đoạn gốc: ‘Cây xanh giữ đất bằng rễ. Lá cây làm không khí mát hơn. Vì vậy sân trường có nhiều cây thường dễ chịu vào trưa nắng.’", "Trả lời: đoạn giải thích điều gì, hai tác dụng của cây là gì, câu nào là kết luận.", "Lập bảng ‘ý chính – chi tiết – từ khóa’ cho đoạn và nói lại bằng 3 câu.", "Viết một câu nguyên nhân–kết quả mới về nước sạch, không thêm thông tin chưa có.", "Bạn tóm tắt ‘cây rất tốt’. Chỉ ra vì sao thiếu ý và viết lại có căn cứ.", "Mini-test: đọc một thông tin ngắn, tìm ý chính và viết tóm tắt 35–45 chữ."] ,
  "Viết hướng dẫn": ["Đề: hướng dẫn chuẩn bị cặp sách cho sáng hôm sau. Người đọc phải làm được ngay mà không hỏi lại.", "Liệt kê vật cần có, sắp xếp 4 bước theo thứ tự và thêm một lưu ý an toàn/gọn gàng.", "Viết hướng dẫn 6–8 câu có số thứ tự, động từ rõ và một bước kiểm tra cuối.", "Đổi câu mơ hồ ‘làm cho xong’ thành hành động cụ thể có đối tượng.", "Sửa hướng dẫn thiếu bước giữa hoặc dùng hai việc trong một câu.", "Mini-test: viết hướng dẫn chăm một cây nhỏ hoặc gấp áo, sau đó nhờ người lớn đọc để tìm chỗ mơ hồ."] ,
  "Liên kết câu": ["Bản nháp: ‘Trời mưa. Em mang áo mưa. Em vẫn đến lớp.’ Hãy nối bằng quan hệ nguyên nhân và đối lập.", "Dùng vì, nên, nhưng, sau đó để nối 4 cặp câu; nói quan hệ từng cặp.", "Viết đoạn 6 câu về giờ ra chơi, mỗi câu sau phải nối được với câu trước.", "Thay một từ lặp bằng từ thay thế nhưng không làm người đọc nhầm đối tượng.", "Sửa đoạn có từ nối sai khiến nguyên nhân–kết quả bị đảo.", "Mini-test: sắp xếp câu lộn xộn, thêm từ nối, viết câu kết."] ,
  "Biên tập đoạn văn": ["Đoạn nháp: ‘Sân trường rất đẹp. Sân trường rất rộng. Em rất thích sân trường.’ Chỉ ra câu lặp và ý còn thiếu.", "Rà theo bốn lượt: ý, câu, từ, chính tả; mỗi lượt chỉ sửa một loại.", "Viết bản 2 cho đoạn 7 câu, giữ một câu có giọng riêng và sửa tối đa 3 điểm lớn.", "So sánh hai câu: câu nào ngắn hơn nhưng mất hình ảnh, câu nào rõ hơn? Giải thích.", "Đọc thành tiếng để tìm nơi vấp; viết lại duy nhất câu đó.", "Mini-test: biên tập một đoạn 90 chữ, ghi ba thay đổi và lý do."] ,
  "Kể chuyện theo điểm nút": ["Đề: Bách làm rơi thẻ thư viện trước giờ mượn sách. Điểm nút: tìm, nhờ giúp hay nói thật?","Lập 4 mốc: việc xảy ra, trở ngại, lựa chọn, kết quả; mỗi mốc chỉ ghi 1–2 từ khóa.", "Viết đoạn diễn biến 10–12 câu, có một hành động làm câu chuyện thay đổi.", "Đổi lựa chọn của nhân vật ở điểm nút và dự đoán kết thúc khác đi thế nào.", "Sửa bài kể có sự việc thú vị nhưng không dẫn đến kết quả.", "Mini-test: kể một việc thật có vấn đề, lựa chọn và thay đổi sau đó."] ,
  "Mở bài không khuôn mẫu": ["Đề: kể một lần đi học muộn. Mở bằng tiếng chuông, một câu hỏi hoặc hành động đang xảy ra; không mở bằng ‘Hôm nay em…’.", "Viết ba mở bài 2 câu theo ba cách: âm thanh, hành động, chi tiết lạ.", "Chọn một mở bài rồi nối nó với mốc sự việc đầu tiên sao cho không bị nhảy cảnh.", "So sánh mở bài hấp dẫn và mở bài làm màu: câu nào hứa hẹn đúng nội dung bài?", "Cắt một câu giới thiệu dài mà người đọc có thể hiểu qua hành động.", "Mini-test: viết hai mở bài cho cùng đề, đọc to và chọn bản tự nhiên nhất."] ,
  "Đối thoại đúng tuổi": ["Tình huống: bạn làm rách tờ trực nhật rồi ngại nói. Viết 4 lượt thoại ngắn có tên người nói.", "Đặt lời thoại vào gạch đầu dòng; thêm một hành động nhỏ trước hoặc sau lời nói.", "Viết đoạn 8 câu có đối thoại làm câu chuyện tiến lên, không để nhân vật nói thay lời kể dài.", "Cùng một câu ‘Mình xin lỗi’, viết với ba sắc thái phù hợp: lo, thật thà, vui.", "Sửa đoạn mà người đọc không biết ai đang nói hoặc lời thoại quá người lớn.", "Mini-test: đối thoại 6 lượt về một việc ở lớp, có dấu câu đúng."] ,
  "Tả cảnh": ["Đề: tả sân trường sau cơn mưa. Chọn điểm nhìn ở hành lang, đi từ xa đến gần.", "Ghi 5 chi tiết thuộc nhìn, nghe, ngửi; bỏ chi tiết không thật với buổi mưa.", "Viết đoạn 8–10 câu có một câu chuyển từ cảnh rộng sang một chi tiết gần.", "Viết hai câu về vũng nước: một câu chỉ kể, một câu có hình ảnh vừa đủ.", "Sửa bài tả cảnh đổi liên tục từ trời sang lớp học khiến góc nhìn đứt.", "Mini-test: tả một góc quen thuộc trong 10 phút từ 5 chi tiết đã ghi."] ,
  "Cảm nhận nhân vật": ["Đoạn gốc: ‘Hà thấy bạn quên hộp bút. Hà chia đôi bút chì của mình rồi ngồi kèm bạn chép bài.’", "Viết nhận xét ‘Hà là người…’ và chọn hai chi tiết làm bằng chứng.", "Viết đoạn 6–8 câu nêu phẩm chất, dẫn chứng, suy nghĩ riêng; không kể lại cả đoạn.", "So sánh hai nhận xét ‘Hà tốt’ và ‘Hà biết quan tâm’; nhận xét nào chính xác hơn?", "Sửa câu cảm nhận có ý kiến nhưng không có dẫn chứng.", "Mini-test: đọc nhân vật ngắn, nêu một phẩm chất bằng hai bằng chứng."] ,
  "Bài văn 3 phần": ["Đề: kể một buổi cùng gia đình làm việc nhà. Lập mở bài 1–2 câu, thân bài 3 mốc, kết bài 1–2 câu.", "Viết dàn ý 5 gạch đầu dòng có sự việc chứ không chỉ tên phần.", "Viết bài 12–15 câu theo dàn ý; dành 3 phút cuối đọc lại mạch thời gian.", "Tìm một chỗ có thể chuyển cảnh bằng thời gian hoặc hành động, không chỉ dùng ‘sau đó’ nhiều lần.", "Sửa bài có mở và kết nhưng thân bài chỉ là một danh sách việc làm.", "Mini-test 25 phút: dàn ý 5 phút, viết 15 phút, sửa 5 phút."] ,
  "Văn bản giải thích": ["Đề: giải thích vì sao cần uống đủ nước. Bố cục: hiện tượng → nguyên nhân → ví dụ → lời khuyên.", "Đặt ba câu hỏi ‘vì sao’, ‘điều gì xảy ra’, ‘nên làm gì’ rồi trả lời bằng câu ngắn.", "Viết đoạn 8 câu giải thích một hiện tượng gần gũi: bóng râm, cầu vồng hoặc tiết kiệm điện.", "Phân biệt giải thích có căn cứ với câu khuyên chung chung ‘hãy làm điều tốt’.", "Sửa đoạn có nhiều ví dụ nhưng chưa nêu nguyên nhân.", "Mini-test: giải thích một thói quen tốt bằng 2 nguyên nhân và 1 ví dụ."] ,
  "So sánh có căn cứ": ["Đề: so sánh đọc sách giấy và đọc sách điện tử theo ba tiêu chí: mắt, tiện mang theo, cách ghi chú.", "Lập bảng giống/khác, mỗi ô phải có ví dụ hoặc lý do.", "Viết đoạn 8 câu so sánh hai nơi học quen thuộc, không dùng ‘cái này tốt hơn’ khi chưa nêu tiêu chí.", "Đổi tiêu chí rồi xem kết luận có đổi không; ví dụ tiện mang theo khác với khả năng tập trung.", "Sửa bài chỉ nêu hai danh sách mà không kết nối chúng.", "Mini-test: so sánh hai đồ vật theo cùng ba tiêu chí và rút kết luận có điều kiện."] ,
  "Viết ý kiến": ["Đề: ‘Có nên có một góc đọc sách yên tĩnh trong lớp không?’ Viết quan điểm, hai lý do và một ví dụ.", "Viết câu nêu ý kiến không mở bằng ‘Em nghĩ là rất hay’ mà nói rõ đồng ý/không đồng ý.", "Viết đoạn 8–10 câu có một lý do về việc học và một ví dụ ở lớp.", "Viết một câu thừa nhận ý khác rồi trả lời lịch sự, không công kích.", "Sửa bài có nhiều khẩu hiệu nhưng không có lý do cụ thể.", "Mini-test: nêu ý kiến về thời gian dùng thiết bị, có hai lý do và câu kết."] ,
  "Tóm tắt không mất ý chính": ["Đoạn gốc: ‘Sáng thứ bảy, Nam cùng bố trồng cây trước ngõ. Nam xới đất, đặt cây non, tưới nước. Một tuần sau, cây có lá mới; Nam hiểu cần chăm cây đều đặn.’", "Gạch 5 từ khóa rồi kể lại trong 2 câu, không thêm nhận xét ngoài đoạn.", "Rút một đoạn 90 chữ xuống khoảng 30 chữ, vẫn giữ người, việc, kết quả.", "So sánh bản tóm tắt quá ngắn mất kết quả và bản quá dài chép lại câu chữ.", "Sửa bản tóm tắt đổi ‘một tuần sau’ thành ‘ngày hôm sau’ làm sai sự việc.", "Mini-test: đọc đoạn mới, viết tóm tắt bằng một phần ba độ dài."] ,
  "Câu văn có nhịp": ["Hai câu: ‘Em chạy. Em chạy rất nhanh. Em chạy đến lớp.’ Hãy gộp hoặc đổi nhịp mà vẫn rõ.", "Viết một câu ngắn tạo nhịp nhanh và một câu dài vừa phải tả cảnh chậm.", "Viết đoạn 7 câu, xen câu ngắn–vừa, sau đó đọc thành tiếng để tìm chỗ vấp.", "Đổi một câu quá nhiều dấu phẩy thành hai câu đầy đủ.", "Sửa đoạn câu nào cũng dài gần bằng nhau hoặc câu nào cũng bắt đầu bằng ‘Em’.", "Mini-test: viết đoạn ngắn, đánh dấu câu cần ngắt/ghép và giải thích."] ,
  "Bài viết có phản hồi": ["Đề: kể về lần giúp một người. Bản 1 phải hoàn thành trước khi nhận góp ý.", "Tự hỏi ba câu: người đọc hiểu sự việc chưa, chi tiết nào thật, chỗ nào cần nối ý?", "Nhờ người lớn chỉ hỏi ba câu, không viết hộ; Bách chọn tối đa ba điểm để sửa bản 2.", "Viết phiếu phản hồi: giữ câu nào, sửa câu nào, vì sao.", "Sửa phản hồi kiểu ‘viết hay hơn’ thành một gợi ý cụ thể nhưng không áp đặt.", "Mini-test: lưu bản 1/bản 2 và đọc so sánh một thay đổi quan trọng."] ,
  "Mở rộng vốn từ theo chủ đề": ["Chủ đề thiên nhiên: rì rào, lấp lánh, lặng im, xanh rì, se lạnh. Mỗi từ phải đi cùng một câu thật.", "Lập mạng từ 10 từ cho trường học hoặc gia đình, chia từ chỉ sự vật/hoạt động/đặc điểm.", "Viết đoạn 7 câu dùng ba từ mới đúng nghĩa, không nhồi tất cả vào một câu.", "Tìm hai từ gần nghĩa nhưng khác sắc thái, ví dụ ‘đi’ và ‘bước khẽ’.", "Sửa đoạn dùng từ đẹp nhưng không hợp sự vật hoặc cảm xúc.", "Mini-test: chọn 5 từ theo một chủ đề, đặt câu và viết đoạn."] ,
  "Tả người có hành động": ["Đề: tả thầy/cô khi giúp một bạn trong giờ học. Chọn hành động, giọng nói, nét mặt.", "Viết 5 chi tiết quan sát; khoanh hai chi tiết bộc lộ tính cách hơn là tả ngoại hình.", "Viết đoạn 10 câu, để người đọc tự thấy sự tận tình thay vì gọi tên phẩm chất ngay.", "Đổi câu ‘cô hiền’ thành một hành động và lời nói có thể nghe thấy.", "Sửa bài chỉ liệt kê tóc, áo, khuôn mặt mà không có việc diễn ra.", "Mini-test: tả một người qua một việc họ làm, có một câu cảm nhận cuối."] ,
  "Kể chuyện đổi góc nhìn": ["Sự việc: một bạn quên mang áo mưa. Kể lần 1 từ Bách; lần 2 từ chiếc ô được cho mượn.", "Lập hai cột: điều cả hai người biết và điều chỉ một người thấy.", "Viết hai đoạn 6 câu cùng sự việc, giữ thời gian và kết quả không mâu thuẫn.", "Chọn góc nhìn nào tạo cảm xúc rõ hơn, nhưng không được bịa thêm sự việc.", "Sửa bài đổi góc nhìn nhưng vẫn gọi ‘em’ khiến người đọc nhầm người kể.", "Mini-test: kể một việc ở sân trường từ hai nhân vật khác nhau."] ,
  "Sửa câu mơ hồ": ["Câu mơ hồ: ‘Bạn ấy làm nó ở đó rồi rất vui.’ Hỏi ai, làm gì, cái gì, ở đâu, vì sao.", "Sửa 4 câu mơ hồ bằng cách thêm đúng một dữ kiện cần thiết, không kéo dài vô ích.", "Viết đoạn 6 câu về một việc ở nhà, mỗi câu phải xác định được chủ thể chính.", "So sánh câu nhiều thông tin nhưng rõ với câu dài mà vẫn không có đối tượng.", "Sửa đoạn đổi liên tục ‘nó’, ‘cái đó’, ‘họ’ khiến người đọc lạc.", "Mini-test: biên tập đoạn 80 chữ, gạch chân mọi đại từ chưa rõ."] ,
  "Viết đoạn có luận điểm": ["Đề: Vì sao nên giữ lời hứa? Câu chủ đề nêu ý kiến, hai câu sau đưa ví dụ, câu cuối khép lại.", "Lập khung 4 câu: ý kiến – lý do 1 – lý do 2/ví dụ – kết.", "Viết đoạn 8 câu về một thói quen có ích, mỗi lý do phải trả lời được ‘vì sao’.", "Viết một câu phản biện nhẹ: khi nào lời hứa khó giữ và nên làm gì?", "Sửa đoạn chỉ kể chuyện mà chưa nêu ý chính.", "Mini-test: một đoạn có luận điểm, hai bằng chứng và câu kết nối."] ,
  "Bài văn tuyển chọn": ["Chọn bài Bách thích nhất trong học kì; đặt tiêu đề phản ánh đúng sự việc/ý chính.", "Đọc lại bằng bốn bút màu: ý, chi tiết, câu, chính tả; chỉ khoanh chứ chưa sửa ngay.", "Sửa hai vòng: vòng 1 mạch/chi tiết, vòng 2 câu/từ/dấu câu; giữ lại bản cũ.", "Viết lời giới thiệu 3 câu: bài nói về gì, điểm Bách muốn giữ, điều đã sửa.", "So sánh bản cũ–mới, không thay giọng thật bằng câu quá hoa mỹ.", "Mini-test: hoàn thiện một bài để lưu portfolio kèm tự nhận xét."] ,
  "Đọc sâu một truyện": ["Đoạn gốc: ‘Linh định giữ chiếc ví nhặt được, nhưng thấy tấm ảnh gia đình bên trong, em đem đến cô trực. Chiều đó, một chú công nhân đến nhận ví và cảm ơn Linh.’", "Lập bảng nhân vật – mong muốn – lựa chọn – kết quả; dẫn đúng một chi tiết cho mỗi ô.", "Viết đoạn 8 câu về sự thay đổi trong suy nghĩ của Linh, không kể lại toàn bộ.", "Chọn một chi tiết đắt giá và giải thích nếu bỏ đi truyện mất điều gì.", "Sửa cảm nhận chỉ khen Linh mà không nói lựa chọn nào chứng minh.", "Mini-test: đọc truyện ngắn, trả lời bằng chứng và một suy nghĩ riêng."] ,
  "Viết từ quan sát thật": ["Bài tập ngoài màn hình: đứng ở ban công/sân trong 3 phút, ghi 10 chi tiết không đánh giá.", "Phân loại chi tiết theo nhìn, nghe, chạm, mùi; chọn 5 chi tiết phục vụ một góc nhìn.", "Viết đoạn 8–10 câu từ các ghi chép, không đưa chi tiết chưa quan sát.", "Đổi thứ tự chi tiết để đi từ xa đến gần hoặc theo thời gian; chọn một trật tự.", "Sửa bài biến ghi chép thành danh sách, thêm một câu nối và một cảm nhận thật.", "Mini-test: quan sát một vật mới 5 phút, ghi chép rồi viết."] ,
  "Bài văn theo đề mở": ["Đề: ‘Một điều em muốn thay đổi ở góc học tập của mình’. Bách được chọn cách kể, tả hoặc giải thích nhưng phải có mạch.", "Chọn một thể loại và viết dàn ý 5 ý; ghi vì sao thể loại đó hợp đề.", "Viết bài 12–15 câu có ít nhất một chi tiết thật và một câu chuyển ý.", "Thử một mở bài bằng câu hỏi hoặc hình ảnh, rồi kiểm tra nó có dẫn đúng vào nội dung không.", "Sửa bài nhiều ý hay nhưng không có trục chính; cắt hoặc gộp một ý.", "Mini-test: đề mở mới, lập ý trước và tự nêu tiêu chí thành công."] ,
  "Đọc–viết liên môn": ["Đoạn gốc: ‘Nước bốc hơi khi nhận nhiệt. Hơi nước gặp lạnh tạo thành giọt nhỏ; nhiều giọt tạo mây.’", "Tìm ba bước của quá trình, viết lại bằng sơ đồ mũi tên và từ khóa.", "Viết đoạn giải thích cho em nhỏ hơn bằng 6–8 câu, không dùng từ khó mà không giải nghĩa.", "Đổi một ví dụ đời sống: nắp nồi, quần áo phơi, kính có hơi nước.", "Sửa đoạn khoa học có câu khẳng định nhưng không nêu quá trình.", "Mini-test: đọc thông tin ngắn, vẽ sơ đồ và giải thích lại."] ,
  "Portfolio và tự nhận xét": ["Chọn 3 bài: một đọc hiểu, một kể/tả, một bài đã sửa. Mỗi bài phải có ngày và bản gốc nếu có.", "Viết ba câu cho mỗi bài: con đã làm gì, tiến bộ ở đâu, lỗi nào còn lặp.", "Chọn một lỗi chung, ví dụ lặp từ hoặc nhảy ý, và viết kế hoạch sửa trong tuần tới.", "Đọc hai bài cách nhau nhiều tuần, chỉ ra bằng chứng cụ thể về tiến bộ thay vì tự khen chung.", "Sửa tự nhận xét ‘con viết hay hơn’ thành nhận xét có ví dụ câu/đoạn.", "Mini-test: trình bày portfolio 3 phút và nhận một câu hỏi phản hồi."] ,
  "Ngày hội kể chuyện": ["Chọn một bài kể/tả Bách muốn đọc; cắt những câu chỉ để kéo dài nhưng không đổi ý.", "Đánh dấu chỗ ngắt, nhấn và lời thoại trước khi đọc thành tiếng.", "Thu âm/đọc bài 2 phút, nghe lại và ghi một chỗ rõ, một chỗ cần sửa.", "Viết câu giới thiệu ngắn cho người nghe: bài kể về điều gì và vì sao Bách chọn.", "Sửa một câu cuối để bài khép lại tự nhiên, không rút ra bài học quá người lớn.", "Ngày hội: đọc, nhận một phản hồi, tự chọn một sửa đổi cuối cùng."]
};

const MATH_WEEK7_VISUAL = { type: "sequence", sequence: [2, 6, 12, 20, 30, 42], steps: ["+4", "+6", "+8", "+10", "+12"] };

const AUTHORED_P2_WEEK7_MATH = [
  {
    day: "Thứ 2",
    title: "Hiểu trọng tâm · Dãy số tăng dần khoảng cách",
    objective: "Nhận biết quy luật hiệu giữa hai số hạng liền kề tăng đều 1 đơn vị: +1, +2, +3, +4...",
    example: "Quan sát dãy số: 1, 2, 4, 7, 11, 16. Khoảng cách giữa các số lần lượt là 1, 2, 3, 4, 5. Số tiếp theo là 16 + 6 = 22.",
    basic: "1. Tìm hai số tiếp theo của dãy số sau: 3, 4, 6, 9, 13, 18, ..., ...",
    applied: "1. Bác An xếp các chậu hoa theo hàng: hàng thứ nhất 2 chậu, hàng thứ hai 4 chậu, hàng thứ ba 7 chậu, hàng thứ tư 11 chậu. Hỏi hàng thứ sáu có bao nhiêu chậu hoa?",
    challenge: "1. Cho dãy số: 1, 3, 7, 13, 21, 31, ... Tìm số hạng thứ 10 của dãy số.",
    visual: MATH_WEEK7_VISUAL,
    reasoning: "Tìm hiệu giữa số liền sau và số liền trước để xác định quy luật tăng dần 1 đơn vị của khoảng cách.",
    selfCheck: "Kiểm tra lại xem khoảng cách mới tìm được có đúng thứ tự tăng dần 1 đơn vị không.",
    drill: "1. Điền số thích hợp vào chỗ trống: 5, 6, 8, 11, 15, ..., 26.",
    variant: "1. Tìm số thứ 7 của dãy số giảm dần khoảng cách: 50, 40, 31, 23, 16, ...",
    advanced: "1. Cho dãy số: 2, 5, 10, 17, 26, ... Hỏi số 101 là số hạng thứ bao nhiêu của dãy?"
  },
  {
    day: "Thứ 3",
    title: "Luyện kỹ thuật · Dãy số cách đều",
    objective: "Vận dụng thành thạo công thức tìm số số hạng và số hạng thứ n của dãy số cách đều.",
    example: "Dãy số cách đều 4 đơn vị: 3, 7, 11, 15, 19. Số hạng thứ n = 3 + (n - 1) x 4. Số hạng thứ 20 là 3 + 19 x 4 = 79.",
    basic: "1. Cho dãy số cách đều: 4, 9, 14, 19, 24, ... Tìm số hạng thứ 25 của dãy số.",
    applied: "1. Một cuộn vé xem phim đánh số liên tiếp từ số 105 đến số 245. Hỏi cuộn vé đó có tất cả bao nhiêu vé?",
    challenge: "1. Tính tổng của 30 số hạng đầu tiên của dãy số: 2, 6, 10, 14, 18, ...",
    visual: MATH_WEEK7_VISUAL,
    reasoning: "Khoảng cách giữa hai số hạng liền kề không đổi: d = 4 đơn vị. Số hạng thứ n = a1 + (n - 1) x d.",
    selfCheck: "Lấy số hạng vừa tính trừ đi số liền trước xem hiệu có đúng bằng khoảng cách 4 đơn vị không.",
    drill: "1. Dãy số 7, 10, 13, 16, ..., 94 có bao nhiêu số hạng?",
    variant: "1. Tìm số hạng đầu tiên của một dãy số cách đều 5 đơn vị, biết số hạng thứ 15 là 78.",
    advanced: "1. Cho dãy số: 1, 4, 7, 10, ..., 298. Tìm số hạng chính giữa của dãy số này."
  },
  {
    day: "Thứ 4",
    title: "Vận dụng · Xếp hàng ghế hội trường",
    objective: "Ứng dụng quy luật dãy số vào bài toán thực tế xếp hàng ghế tăng dần số chỗ ngồi.",
    example: "Một phòng chiếu phim có 12 hàng ghế. Hàng 1 có 18 ghế, mỗi hàng sau nhiều hơn hàng trước 2 ghế. Hàng 12 có: 18 + (12 - 1) x 2 = 40 ghế.",
    basic: "1. Hàng đầu tiên của một khán đài có 20 ghế, mỗi hàng tiếp theo nhiều hơn hàng trước 3 ghế. Hỏi hàng thứ 8 có bao nhiêu ghế?",
    applied: "1. Hội trường trường tiểu học có 15 hàng ghế. Hàng thứ nhất có 16 ghế, mỗi hàng sau hơn hàng trước 2 ghế. Hỏi cả hội trường có tất cả bao nhiêu ghế ngồi?",
    challenge: "1. Một rạp hát có 20 hàng ghế, hàng cuối cùng có 70 ghế. Biết mỗi hàng sau hơn hàng liền trước 2 ghế. Hỏi hàng đầu tiên có bao nhiêu ghế và rạp hát có bao nhiêu chỗ ngồi?",
    visual: MATH_WEEK7_VISUAL,
    reasoning: "Xác định số ghế hàng 1 là 18, số ghế tăng thêm mỗi hàng là 2, số hàng là 12 rồi áp dụng công thức dãy số.",
    selfCheck: "Kiểm tra xem số ghế mỗi hàng có tăng đều 2 đơn vị và kết quả tổng số ghế có hợp lý không.",
    drill: "1. Một lớp xếp 6 hàng tập thể dục: hàng 1 có 4 bạn, mỗi hàng sau nhiều hơn hàng trước 1 bạn. Hỏi cả lớp có bao nhiêu học sinh?",
    variant: "1. Tủ sách có 5 tầng, tầng 1 có 45 cuốn, mỗi tầng trên ít hơn tầng dưới 4 cuốn. Hỏi tầng 5 có bao nhiêu cuốn sách?",
    advanced: "1. Sân vận động có một khu khán đài hình thang: hàng đầu có 25 chỗ, hàng cuối có 85 chỗ, mỗi hàng hơn nhau 3 chỗ. Hỏi khu khán đài có bao nhiêu hàng ghế?"
  },
  {
    day: "Thứ 5",
    title: "Thử thách · Dãy hai quy luật đan xen",
    objective: "Phát hiện và phân tích dãy số kết hợp từ hai quy luật hoặc hai dãy con xen kẽ.",
    example: "Dãy số: 1, 3, 2, 6, 3, 9, 4, 12. Tách thành hai dãy: vị trí lẻ là 1, 2, 3, 4 (tăng 1); vị trí chẵn là 3, 6, 9, 12 (nhân 3 hoặc cộng 3). Số tiếp theo là 5.",
    basic: "1. Tìm số tiếp theo của dãy số đan xen sau: 2, 5, 4, 10, 6, 15, 8, ...",
    applied: "1. Cho dãy số: 100, 2, 95, 4, 90, 6, 85, 8, ... Tìm số hạng thứ 11 và thứ 12 của dãy số.",
    challenge: "1. Cho dãy số: 1, 2, 4, 7, 11, 16, 22, ... và dãy số: 2, 4, 8, 16, 32, ... Viết 8 số đầu tiên của dãy tạo bởi tổng các số hạng tương ứng của hai dãy trên.",
    visual: MATH_WEEK7_VISUAL,
    reasoning: "Tách dãy số thành các số ở vị trí lẻ (1, 3, 5...) và vị trí chẵn (2, 4, 6...) để tìm quy luật riêng của từng nhánh.",
    selfCheck: "Thử ghép lại 2 quy luật xem 8 số hạng đã cho có khớp hoàn toàn theo thứ tự không.",
    drill: "1. Điền hai số thích hợp tiếp theo: 1, 20, 3, 18, 5, 16, 7, ..., ...",
    variant: "1. Cho dãy số có quy luật nhân 2 rồi cộng 1: 1, 3, 7, 15, 31, ... Tìm số hạng thứ 7 của dãy số.",
    advanced: "1. Cho dãy số Fibonacci mở rộng: 1, 2, 3, 5, 8, 13, 21, 34, ... Tìm số dư của số hạng thứ 20 khi chia cho 2."
  },
  {
    day: "Thứ 6",
    title: "Chữa lỗi · Phát hiện và sửa số sai quy luật",
    objective: "Kiểm tra tính nhất quán của khoảng cách để phát hiện một số sai trong dãy và sửa lại cho đúng.",
    example: "Cho dãy số: 4, 7, 11, 16, 21, 29. Hiệu các số: 3, 4, 5, 5, 8. Số 21 sai quy luật tăng dần khoảng cách (+3, +4, +5, +6, +7). Sửa 21 thành 22 (16 + 6 = 22, 22 + 7 = 29).",
    basic: "1. Trong dãy số sau có một số không đúng quy luật: 3, 8, 13, 19, 23, 28. Hãy tìm số sai đó và sửa lại cho đúng.",
    applied: "1. Một bảng ghi số lượng cây trồng mỗi ngày trong tuần: 5, 9, 14, 20, 26, 35. Bạn Nam phát hiện ngày thứ 5 ghi sai. Hỏi số đúng phải là bao nhiêu?",
    challenge: "1. Cho dãy số: 2, 6, 12, 20, 31, 42, 56. Chỉ ra một số duy nhất viết sai, giải thích vì sao sai và viết lại dãy số đúng.",
    visual: MATH_WEEK7_VISUAL,
    reasoning: "Lập bảng khoảng cách giữa từng cặp số liên tiếp; vị trí nào làm đứt gãy quy luật tăng đều 1 đơn vị thì số ở giữa hai khoảng cách bất thường chính là số sai.",
    selfCheck: "Sau khi thay số mới vào, tính lại cả khoảng cách phía trước và phía sau xem đã khớp quy luật 1 đơn vị chưa.",
    drill: "1. Tìm và sửa số sai trong dãy cách đều: 6, 12, 18, 25, 30, 36.",
    variant: "1. Cho dãy số giảm dần: 80, 71, 63, 56, 49, 45. Tìm số không phù hợp quy luật hiệu giảm dần và sửa lại.",
    advanced: "1. Dãy số: 1, 2, 4, 8, 15, 32, 64 có một số sai quy luật gấp đôi. Tìm số đó, sửa lại và tính tổng của dãy đúng."
  },
  {
    day: "Thứ 7",
    title: "Mini-test 50 phút · Dãy số và quy luật",
    objective: "Đánh giá toàn diện kỹ năng phân tích quy luật, tính số hạng, tính tổng và giải bài toán thực tế trong 50 phút.",
    example: "1. Dãy số cách đều 5 đơn vị: 5, 10, 15, 20, ...\n2. Dãy số tăng khoảng cách: 1, 2, 4, 7, 11, ...\n3. Bài toán thực tế 16 hàng ghế khán đài.\n4. Phát hiện số sai và tính tổng 4 số.",
    basic: "1. Viết tiếp ba số hạng vào dãy số sau: 2, 7, 12, 17, 22, ..., ..., ...\n2. Tìm số hạng thứ 30 của dãy số cách đều: 5, 9, 13, 17, 21, ...\n3. Tính số số hạng của dãy số: 11, 14, 17, 20, ..., 101.\n4. Tìm số hạng thứ 8 của dãy số tăng khoảng cách: 1, 2, 4, 7, 11, 16, ...",
    applied: "1. Một khán đài có 16 hàng ghế, hàng đầu có 24 ghế, mỗi hàng sau hơn hàng trước 2 ghế. Hỏi hàng thứ 16 có bao nhiêu ghế?\n2. Tính tổng số ghế của cả 16 hàng ghế trên khán đài đó.\n3. Nếu ban tổ chức cần 650 chỗ ngồi thì khán đài này có đủ chỗ cho khán giả không?\n4. Muốn có đúng 700 chỗ ngồi thì cần kê thêm bao nhiêu ghế vào các hàng?",
    challenge: "1. Cho dãy số: 3, 8, 15, 24, 35, 48, ... Tìm số hạng thứ 10 của dãy số.\n2. Dãy số: 2, 5, 11, 23, 47, ... có quy luật gì? Tìm số hạng thứ 7.\n3. Cho dãy: 4, 9, 15, 22, 30, 39, 49. Chỉ ra số sai quy luật và sửa lại.\n4. Tính tổng 20 số hạng đầu tiên của dãy số cách đều: 3, 7, 11, 15, 19, ...",
    visual: MATH_WEEK7_VISUAL,
    reasoning: "1. Phân bổ 50 phút: Bài 1 (10 phút), Bài 2 (10 phút), Bài 3 (15 phút), Bài 4 (10 phút), soát bài (5 phút).\n2. Nhận diện dạng dãy số trước khi áp dụng công thức tính số hạng hoặc tính tổng.\n3. Kiểm tra lại phép nhân và cộng dồn từng bước tính.",
    selfCheck: "1. Đã hoàn thành đủ 4 bài toán và ghi rõ số thứ tự câu chưa?\n2. Các phép tính có đầy đủ lời giải, phép tính và danh số đơn vị không?\n3. Đáp số của bài toán thực tế đã kiểm tra tính hợp lý chưa?\n4. Các phép tính cộng trừ nhân chia đã nháp lại độc lập chưa?",
    drill: "1. Tính nhẩm nhanh số số hạng của: 10, 20, 30, ..., 200.\n2. Tìm số tiếp theo của: 1, 4, 9, 16, 25, ...\n3. Tìm số tiếp theo của: 2, 6, 18, 54, ...\n4. Tìm số trung bình cộng của 5 số: 12, 14, 16, 18, 20.",
    variant: "1. Cho dãy số: 1, 5, 9, 13, 17, ... Số 2021 có thuộc dãy số này không?\n2. Tìm số hạng thứ 50 của dãy số: 3, 8, 13, 18, 23, ...\n3. Một đội xếp hàng hình tam giác: hàng 1 có 1 người, hàng 2 có 2 người, ..., hàng 12 có 12 người. Đội có bao nhiêu người?\n4. Tìm và sửa số sai trong dãy: 1, 3, 6, 10, 16, 21, 28.",
    advanced: "1. Cho dãy số: 1, 2, 3, 5, 8, 13, 21, ... Tìm số dư của số hạng thứ 50 khi chia cho 3.\n2. Tính tổng: S = 1 + 3 + 5 + 7 + ... + 99.\n3. Có bao nhiêu số có 3 chữ số chia hết cho 5 và tận cùng bằng chữ số 5?\n4. Tìm số hạng thứ 100 của dãy số: 2, 4, 6, 8, ..., biết dãy số bắt đầu từ số 2."
  }
];

const AUTHORED_P2_WEEK7_VIETNAMESE = [
  {
    day: "Thứ 2",
    title: "Quan sát và ghi chép · Chiếc hộp bút",
    objective: "Quan sát trực tiếp chiếc hộp bút thật và ghi chép lại chính xác 6 chi tiết đặc trưng theo từng giác quan.",
    example: "Quan sát thực tế chiếc hộp bút vải canvas màu xanh thẫm: dài khoảng 20 cm, sờ mặt vải hơi ráp nhẹ; khóa kéo kim loại màu bạc sáng loáng; mở ra có ngăn chính sâu và một ngăn lưới phụ gắn ở nắp.",
    basic: "1. Quan sát chiếc hộp bút của em và ghi lại 6 chi tiết cụ thể: hình dáng chiều dài, màu sắc chất liệu, chiếc khóa kéo, ngăn chứa bên trong, các đồ dùng bên trong, một dấu vết riêng như hình dán hoặc vết mực.",
    applied: "1. Chọn 3 chi tiết em thấy thú vị nhất trong 6 chi tiết vừa ghi chép và viết thành 3 câu miêu tả có sử dụng từ ngữ gợi cảm giác (mịn màng, sột soạt, trơn tru).",
    challenge: "1. Viết một câu văn miêu tả âm thanh tiếng mở khóa kéo của chiếc hộp bút khi bắt đầu bước vào tiết học buổi sáng.",
    reasoning: "Quan sát lần lượt từ cái nhìn tổng thể bên ngoài rồi mới mở khóa khám phá các chi tiết bên trong.",
    selfCheck: "Đã ghi đủ 6 chi tiết chưa, có chi tiết nào bị trùng lặp hoặc phỏng đoán không đúng mắt thấy không?",
    drill: "1. Tìm 4 từ gợi tả màu sắc và bề mặt chất liệu cho chiếc hộp bút: xanh thẫm, ráp nhẹ, trơn nhẵn, bóng loáng.",
    variant: "1. Nếu chiếc hộp bút làm bằng nhựa cứng hoặc sắt tây thì những chi tiết về âm thanh và độ bền sẽ thay đổi như thế nào?",
    advanced: "1. So sánh chiếc hộp bút hiện tại với chiếc hộp bút hồi lớp 1 của em bằng một đoạn văn ngắn 3 câu."
  },
  {
    day: "Thứ 3",
    title: "Lập ý 4 phần · Chiếc hộp bút",
    objective: "Sắp xếp các chi tiết quan sát thành dàn ý mạch lạc gồm 4 phần: bao quát bên ngoài, chi tiết bên trong, công dụng mỗi ngày, kỷ niệm gắn bó.",
    example: "Khung dàn ý 4 phần chi tiết: Phần 1 (bên ngoài: dạng hộp chữ nhật dài 20 cm, vải canvas xanh); Phần 2 (bên trong: ngăn chính đựng bút chì bút mực, ngăn phụ đựng tẩy và compa); Phần 3 (công dụng: giữ bàn học gọn gàng, giúp lấy đồ nhanh); Phần 4 (kỷ niệm: món quà mẹ tặng đầu năm học lớp 4).",
    basic: "1. Quan sát chiếc hộp bút thật của em và hoàn thành dàn ý 4 phần: 1. Hình dáng và chất liệu bên ngoài; 2. Cấu tạo và các ngăn bên trong; 3. Cách em sử dụng hộp bút trong giờ học; 4. Kỷ niệm hoặc cảm nghĩ đối với chiếc hộp bút.",
    applied: "1. Viết 2 câu mở bài trực tiếp giới thiệu chiếc hộp bút và 2 câu kết bài nêu tình cảm gắn bó của em.",
    challenge: "1. Thử viết một câu chuyển ý nối liền mạch từ phần tả bên ngoài sang phần mở nắp khám phá bên trong hộp bút.",
    reasoning: "Dàn ý như một bản đồ dẫn đường, giúp bài viết không bị nhảy ý hoặc bỏ quên những chi tiết quan trọng.",
    selfCheck: "Kiểm tra xem mỗi phần trong dàn ý đã có ít nhất 2 ý nhỏ cụ thể chưa.",
    drill: "1. Sắp xếp lại thứ tự hợp lý cho 4 ý sau: (A) Giữ gìn hộp bút cẩn thận; (B) Hộp bút màu xanh dài 20 cm; (C) Ngăn trong chia hai ngăn tiện lợi; (D) Mỗi tiết học hộp bút luôn nằm cạnh em.",
    variant: "1. Lập dàn ý cho bài văn tả một đồ dùng học tập khác như chiếc cặp sách hoặc cây bút máy theo đúng 4 phần trên.",
    advanced: "1. Chọn một chi tiết kỷ niệm đặc biệt (như hôm làm rơi hộp bút được bạn nhặt giúp) để phát triển thành ý đắt giá trong phần kết bài."
  },
  {
    day: "Thứ 4",
    title: "Viết bản 1 · Chiếc hộp bút",
    objective: "Viết đoạn văn 8–10 câu miêu tả chi tiết các bộ phận và công dụng của chiếc hộp bút, giữ giọng kể tự nhiên của học sinh lớp 4.",
    example: "Đoạn văn tham khảo: ‘Chiếc hộp bút của em có hình khối hộp chữ nhật nhỏ gọn, nằm ngoan ngoãn ở góc bàn học. Toàn thân hộp được may bằng vải canvas màu xanh thẫm, sờ vào thấy hơi ráp nhưng rất bền. Nổi bật nhất là đường khóa kéo kim loại màu bạc, kéo một đường nhẹ tanh tách là mở ra. Bên trong hộp chia làm hai ngăn rõ rệt. Ngăn chính rộng rãi, em để vừa ba chiếc bút mực, hai cây bút chì và chiếc thước kẻ hai mươi xăng-ti-mét. Ngăn lưới nhỏ xíu gắn phía trên là nơi nằm yên ổn của cục tẩy trắng tinh và chiếc gọt chì hình chú thỏ. Nhờ có hộp bút, các đồ dùng của em không còn bị rơi hay thất lạc mỗi khi chuyển tiết học.’",
    basic: "1. Viết đoạn văn 8–10 câu miêu tả chiếc hộp bút theo dàn ý đã lập ở Thứ 3, có chi tiết tả bên ngoài, bên trong và ích lợi của nó đối với việc học.",
    applied: "1. Đếm số câu trong đoạn văn vừa viết, gạch chân dưới các từ chỉ hình dáng, màu sắc và âm thanh mà em đã sử dụng.",
    challenge: "1. Thêm một câu sử dụng biện pháp nhân hóa để tả hành động của những chiếc bút nằm bên trong hộp bút.",
    reasoning: "Liên kết các câu bằng các từ nối chỉ không gian: bên ngoài, mở khóa ra, phía bên trong, ngăn lưới phía trên...",
    selfCheck: "Đoạn văn đã đủ từ 8 đến 10 câu chưa, có câu nào bị cụt chủ ngữ hoặc lặp từ ‘em’ quá nhiều lần không?",
    drill: "1. Ghép 2 câu đơn sau thành 1 câu ghép tự nhiên: ‘Chiếc khóa kéo rất trơn.’ và ‘Em mở hộp bút rất dễ dàng.’",
    variant: "1. Viết lại đoạn văn theo hướng tập trung tả chiếc hộp bút vào khoảnh khắc chuẩn bị tan học cất đồ vào cặp.",
    advanced: "1. Sử dụng một câu văn có hình ảnh so sánh độc đáo để miêu tả hình dáng hoặc màu sắc của chiếc hộp bút."
  },
  {
    day: "Thứ 5",
    title: "Thử nghiệm cách viết · Từ ngữ giác quan",
    objective: "Biết thay thế các câu văn nhận xét chung chung, sáo rỗng bằng câu văn chứa chi tiết giác quan và hành động chân thật.",
    example: "Câu chung chung: ‘Chiếc hộp bút của em rất đẹp và tiện lợi.’ Sửa thành câu cụ thể: ‘Mỗi lần chạm tay vào lớp vải canvas màu xanh mát mắt và nghe tiếng then khóa lướt êm ru, em lại thấy hào hứng mở vở bắt đầu bài học mới.’",
    basic: "1. Thay thế câu chung chung sau thành một câu cụ thể có hình ảnh và giác quan: ‘Chiếc khóa kéo của hộp bút rất tốt.’",
    applied: "1. Đọc lại đoạn văn viết hôm Thứ 4, tìm 2 câu còn chung chung hoặc đơn điệu và viết lại thành 2 câu sống động hơn bằng từ ngữ gợi tả thị giác hoặc xúc giác.",
    challenge: "1. Viết một câu văn diễn tả cảm giác ngón tay chạm vào chất liệu vải của hộp bút khi trời lạnh vào buổi sáng mùa đông.",
    reasoning: "Thay vì khẳng định ‘đẹp’, ‘tốt’, hãy kể cụ thể mắt nhìn thấy màu gì, tay sờ thấy thế nào, tai nghe thấy âm thanh gì.",
    selfCheck: "Câu văn viết lại đã loại bỏ được từ khen chung chung chưa, người đọc có hình dung ra đồ vật thật không?",
    drill: "1. Thay từ ‘rất đẹp’ trong câu ‘Bên trong hộp bút rất đẹp.’ bằng chi tiết các chiếc bút nằm ngay ngắn thẳng hàng.",
    variant: "1. Thử thay đổi cách viết một câu miêu tả cục tẩy hình con gấu nằm trong ngăn lưới từ góc nhìn hành động.",
    advanced: "1. Viết đoạn 3 câu miêu tả vết mực nhỏ dính trên nắp hộp bút gợi nhớ buổi học vẽ cùng bạn bàn bên."
  },
  {
    day: "Thứ 6",
    title: "Biên tập · Chữa đoạn văn còn yếu",
    objective: "Phát hiện các lỗi liệt kê khô khan, lặp từ và thiếu liên kết trong một đoạn văn ngắn cho trước để biên tập lại hoàn chỉnh.",
    example: "Đoạn văn yếu cho trước: ‘Em có một cái hộp bút. Hộp bút của em màu xanh. Hộp bút của em đựng bút mực và thước kẻ. Em rất yêu hộp bút của em.’ Lỗi: Lặp cụm từ ‘hộp bút của em’ 4 lần, câu ngắn rời rạc như danh sách liệt kê, thiếu từ nối và hình ảnh cụ thể.",
    basic: "1. Đọc đoạn văn yếu cho trước trong ví dụ, gạch chân các từ bị lặp và viết lại thành một đoạn văn 3 câu mạch lạc, tự nhiên.",
    applied: "1. Chữa lại đoạn văn sau để bài viết có hình ảnh cụ thể: ‘Chiếc hộp bút em để trên bàn. Nó đựng nhiều thứ. Giờ học em lấy đồ ra dùng. Dùng xong em cất đi.’ Hãy thêm các từ gợi tả đồ dùng và hành động sắp xếp.",
    challenge: "1. Biên tập lại một đoạn văn 5 câu của bạn Nam bị lỗi nhảy ý: đang tả ngăn trong bỗng quay lại tả màu sắc bên ngoài rồi nhảy sang khen bạn tặng.",
    reasoning: "Khi biên tập, dùng đại từ thay thế (nó, đồ vật này, người bạn nhỏ), gộp các câu đơn ngắn thành câu có nhiều vế nối nhau bằng quan hệ từ.",
    selfCheck: "Đoạn văn sau khi chữa có còn bị lặp từ không, các câu nối tiếp nhau có mượt mà và tự nhiên không?",
    drill: "1. Thay thế đại từ thích hợp vào chỗ trống để tránh lặp từ ‘hộp bút’: ‘Chiếc hộp bút nằm ở góc bàn. ... luôn là bạn đồng hành tin cậy của em.’",
    variant: "1. Viết lại đoạn văn theo giọng tâm sự nhẹ nhàng của một người bạn gắn bó.",
    advanced: "1. Tìm và sửa 3 lỗi dùng từ sai ngữ cảnh trong đoạn văn miêu tả đồ vật: ‘Chiếc hộp bút hùng vĩ nằm trên mặt bàn rộng mênh mông.’"
  },
  {
    day: "Thứ 7",
    title: "Mini-test 50 phút · Tả chiếc hộp bút",
    objective: "Thực hiện bài kiểm tra hoàn chỉnh 50 phút gồm đúng 3 phần: lập dàn ý, viết bài văn 12–15 câu và tự đánh giá theo bảng tiêu chí.",
    example: "1. Phần 1 (10 phút): Lập dàn ý 4 phần vắn tắt.\n2. Phần 2 (30 phút): Viết bài văn hoàn chỉnh 12–15 câu tả chiếc hộp bút.\n3. Phần 3 (10 phút): Đọc soát bài và ghi 3 điểm tự chỉnh sửa theo bảng tiêu chí.",
    basic: "1. Lập dàn ý vắn tắt cho bài văn tả chiếc hộp bút gồm 4 phần: Mở bài, Tả bên ngoài, Tả bên trong và công dụng, Kết bài.\n2. Viết bài văn hoàn chỉnh từ 12 đến 15 câu theo dàn ý trên, có câu mở bài hấp dẫn và chi tiết giác quan cụ thể.\n3. Đọc lại bài viết, chỉ ra một lỗi chính tả hoặc từ ngữ lặp và viết lại câu đó cho hoàn chỉnh hơn.",
    applied: "1. Lập dàn ý chi tiết có ghi rõ ít nhất 3 từ ngữ gợi tả màu sắc, chất liệu và âm thanh em sẽ dùng trong bài.\n2. Viết bài văn 12–15 câu tả chiếc hộp bút thật của em, sử dụng ít nhất một phép so sánh và một phép nhân hóa tự nhiên.\n3. Điền bảng tự đánh giá 3 tiêu chí: bài viết đủ 3 phần chưa, câu văn có rõ ý không, có chi tiết nào em tâm đắc nhất.",
    challenge: "1. Lập dàn ý mở bài gián tiếp từ một kỷ niệm ngày khai giảng đầu năm lớp 4.\n2. Viết bài văn tả chiếc hộp bút với điểm nhấn là sự thay đổi cách sắp xếp ngăn nắp của em sau một học kỳ.\n3. Tự viết đoạn nhận xét 3 câu về sự tiến bộ trong cách dùng từ gợi cảm giác so với bài viết đầu năm.",
    reasoning: "1. Phân bổ thời gian: 10 phút lập ý chọn từ, 30 phút viết bài hoàn chỉnh, 10 phút đọc lại soát lỗi.\n2. Giữ nguyên giọng kể tự nhiên, mộc mạc của lứa tuổi học sinh lớp 4 thay vì sao chép các câu văn mẫu.\n3. Tập trung làm nổi bật một chi tiết em yêu thích nhất để tạo điểm nhấn riêng cho bài văn.",
    selfCheck: "1. Bài làm đã hoàn thành đủ cả 3 phần đánh số theo yêu cầu chưa?\n2. Bài văn có đạt độ dài yêu cầu từ 12 đến 15 câu và có câu mở bài, kết bài trọn ý không?\n3. Em đã tự phát hiện và sửa được ít nhất một lỗi chính tả hoặc cách dùng từ trực tiếp trên bài chưa?",
    drill: "1. Viết nhanh 1 câu mở bài gián tiếp cho bài văn tả chiếc hộp bút.\n2. Viết nhanh 1 câu kết bài mở rộng nêu lời hứa giữ gìn đồ dùng học tập.\n3. Gạch chân và sửa lỗi chính tả trong câu: ‘Chiếc khoá kéo kim loại sáng loáng sột soạt mở ra.’",
    variant: "1. Lập dàn ý 3 phần cho đề bài tả hộp bút màu sáp 24 màu của em.\n2. Viết đoạn 10 câu tả hộp màu vẽ với điểm nhấn là sự phong phú của các thỏi màu.\n3. Tự chấm điểm bài viết theo thang điểm 10 với các tiêu chí rõ ràng.",
    advanced: "1. Lập dàn ý cho bài văn kết hợp giữa tả chiếc hộp bút và kể lại kỷ niệm cùng bạn cùng bàn tìm lại nắp bút bị rơi.\n2. Viết bài văn 15 câu hoàn chỉnh thể hiện tình bạn qua món đồ dùng học tập.\n3. Đóng vai chiếc hộp bút viết lời tự giới thiệu 4 câu gửi tới bạn học sinh lớp 4."
  }
];

function authoredP2DailyPlan(item, subject, weekNumber, phase) {
  const w = Number(weekNumber);
  if (w !== 7 || subject !== "math") return null;
  return {
    alignment: "Tuần 7: nhận ra quy luật qua hiệu, dãy cách đều, dãy đan xen và bài toán hàng ghế.",
    days: AUTHORED_P2_WEEK7_MATH
  };
}

function authoredDailyPlan(item, subject, weekNumber, phase) {
  const p2Plan = authoredP2DailyPlan(item, subject, weekNumber, phase);
  if (p2Plan) return p2Plan;

  const title = item[0];
  const kit = (subject === "math" ? AUTHORED_MATH_KITS : AUTHORED_VIETNAMESE_KITS)[title];
  if (!kit) return null;
  const [example, basic, applied, challenge, repair, test] = kit;
  const isMath = subject === "math";

  const dayTitles = isMath
    ? [`Hiểu trọng tâm · ${title}`, `Luyện kỹ thuật · ${title}`, `Vận dụng · ${title}`, `Thử thách · ${title}`, `Chữa lỗi · ${title}`, `Mini-test 50 phút · ${title}`]
    : [`Đọc và nói · ${title}`, `Lập ý · ${title}`, `Viết bản 1 · ${title}`, `Thử nghiệm cách viết · ${title}`, `Biên tập · ${title}`, `Mini-test 50 phút · ${title}`];

  const dayObjectives = isMath
    ? [
      `Nắm vững bản chất và quy tắc cốt lõi của “${title}” qua ví dụ mẫu.`,
      `Rèn luyện thành thạo kỹ thuật tính toán và giải các bài tập cơ bản về “${title}”.`,
      `Vận dụng kiến thức “${title}” để giải quyết bài toán thực tế có lời văn.`,
      `Thử sức với bài toán nâng cao, rèn luyện tư duy heuristic và mô hình hóa.`,
      `Phát hiện bẫy sai lầm, phân tích nguyên nhân và trình bày lại lời giải chuẩn.`,
      `Đánh giá năng lực toàn diện tuần ${weekNumber} với đề kiểm tra 50 phút đa mức độ.`
    ]
    : [
      `Đọc kỹ yêu cầu và ngữ liệu “${title}”, phát hiện chi tiết đắt giá và nói trọn ý.`,
      `Lập dàn ý rõ ràng cho chủ đề “${title}”, phân biệt ý chính và chi tiết phụ.`,
      `Viết đoạn văn bản nháp đầu tiên với chi tiết chân thật và mạch liên kết tự nhiên.`,
      `Thử nghiệm biện pháp nghệ thuật và cách diễn đạt mới để làm sáng tỏ ý văn.`,
      `Rà soát và biên tập câu văn theo tiêu chí cụ thể: ý–câu–từ–chính tả.`,
      `Hoàn thành bài viết kiểm tra 50 phút theo thang điểm 10 và tự đánh giá sản phẩm.`
    ];

  // Đảm bảo bài vận dụng môn Toán luôn có dữ liệu số và ngữ cảnh cụ thể
  const getMathAppliedForDay2 = () => {
    const hasNum = /\d+/.test(applied) || /\b(?:một|hai|ba|bốn|năm|sáu|bảy|tám|chín|mười)\s+(?:bạn|người|hộp|quả|chiếc|cái|thùng|bao|con|đội|nhóm|lớp|viên)\b/i.test(applied);
    const isMeta = /^chọn một câu sai|^chữa (?:sâu |một )?câu sai|^làm lại duy nhất hai câu sai|^nhìn \w+ đề không giải/i.test(applied.trim());
    if (hasNum && !isMeta) {
      return applied;
    }
    return `Bài toán vận dụng thực tế tuần ${weekNumber} (${title}): Dựa vào số liệu từ ví dụ (${example}), hãy giải bài toán trong tình huống thực tế gồm 2 bước tính với đầy đủ đơn vị và đáp số.`;
  };

  const getMathAppliedForDay4 = () => {
    const hasNum = /\d+/.test(repair) || /\b(?:một|hai|ba|bốn|năm|sáu|bảy|tám|chín|mười)\s+(?:bạn|người|hộp|quả|chiếc|cái|thùng|bao|con|đội|nhóm|lớp|viên)\b/i.test(repair);
    if (hasNum) {
      return `Thực hiện chữa lại bài toán tuần ${weekNumber}: ${repair} Viết lời giải đúng hoàn chỉnh gồm 2 bước tính cụ thể kèm đáp số.`;
    }
    return `Thực hiện chữa lại bài toán tuần ${weekNumber} (${title}): ${repair} Vận dụng số liệu từ ví dụ (${example}) để sửa lại lời giải hoàn chỉnh gồm 2 bước tính có số liệu rõ ràng.`;
  };

  const mathDays = [
    {
      example: example,
      basic: `Phân tích ví dụ mẫu: ${example}. Viết lại các bước tính trung gian và giải thích quy tắc tìm ra kết quả.`,
      applied: `Áp dụng quy tắc từ ví dụ (${example}): Nếu mở rộng thêm 2 bước tính nữa với cùng quy luật số liệu thì giá trị tiếp theo là bao nhiêu? Giải thích bằng phép tính cụ thể.`,
      challenge: `Dựa vào ví dụ mẫu “${example}”, thử tìm một trường hợp đặc biệt hoặc số liệu lớn hơn có cùng quy luật.`,
      reasoning: `Trong ví dụ “${example}”, bước biến đổi nào là quan trọng nhất để tìm ra kết quả đúng?`,
      selfCheck: "Kiểm tra lại xem con đã hiểu rõ vì sao có từng con số trong ví dụ mẫu chưa.",
      drill: example,
      variant: basic,
      advanced: `Mở rộng từ ví dụ: ${example}`
    },
    {
      example: `Bài toán mẫu định hướng phương pháp: ${basic}`,
      basic: basic,
      applied: `Đổi dữ kiện trong bài tập “${basic}”: Nếu cộng thêm 5 đơn vị vào số liệu ban đầu hoặc thay đổi một điều kiện, kết quả thay đổi thế nào? Thực hiện phép tính chi tiết.`,
      challenge: `Thử giải bài toán “${basic}” bằng một cách khác hoặc nhẩm nhanh xem có rút ngắn được bước tính nào không.`,
      reasoning: `Khi thực hiện bài tập “${basic}”, con làm thế nào để kiểm tra tính chính xác của từng bước tính?`,
      selfCheck: "Dừng 1 phút: đối chiếu từng phép tính với thứ tự thực hiện phép toán.",
      drill: basic,
      variant: applied,
      advanced: `Biến thể kỹ thuật: ${basic}`
    },
    {
      example: `Tình huống thực tế mẫu cần giải quyết: ${applied}`,
      basic: `Tóm tắt bài toán thực tế sau bằng sơ đồ đoạn thẳng hoặc bảng số liệu: ${applied}. Ghi rõ đại lượng đã biết và đại lượng cần tìm.`,
      applied: getMathAppliedForDay2(),
      challenge: `Nếu bài toán “${applied}” có thêm một điều kiện phụ trong thực tế, hướng giải sẽ cần điều chỉnh thế nào?`,
      reasoning: `Với bài toán “${applied}”, vì sao việc tóm tắt hoặc vẽ mô hình giúp con chọn đúng phép tính?`,
      selfCheck: "Đọc lại câu hỏi của bài toán thực tế: đáp số đã có danh số và đơn vị đo chưa?",
      drill: applied,
      variant: challenge,
      advanced: `Nâng cao bài toán thực tế: ${applied}`
    },
    {
      example: `Thử thách tư duy cần tìm chiến lược: ${challenge}`,
      basic: `Thử nghiệm với trường hợp số nhỏ hơn của bài toán “${challenge}” để tìm quy luật trước khi giải trọn vẹn.`,
      applied: `Giải bài toán thử thách sau bằng ít nhất 1 chiến lược (lập bảng, vẽ sơ đồ hoặc thử ngược): ${challenge}`,
      challenge: challenge,
      reasoning: `Chiến lược hoặc heuristic nào đã giúp con mở nút thắt của bài toán “${challenge}”?`,
      selfCheck: "Ghi lại tên chiến lược tư duy con đã áp dụng để mở bài toán khó này.",
      drill: challenge,
      variant: basic,
      advanced: `Thử thách Olympic mở rộng: ${challenge}`
    },
    {
      example: `Tình huống có lỗi sai điển hình cần phân tích: ${repair}`,
      basic: repair,
      applied: getMathAppliedForDay4(),
      challenge: `Chỉ ra nguyên nhân sâu xa vì sao học sinh hay nhầm lẫn ở bước này và đặt ra 1 mẹo để ghi nhớ không mắc lại.`,
      reasoning: `Vì sao học sinh dễ mắc lỗi trong trường hợp “${repair}” và con làm thế nào để không lặp lại lỗi đó?`,
      selfCheck: "Kiểm tra lại lời giải đã chữa: đã thay thế hoàn toàn bước suy luận sai chưa?",
      drill: repair,
      variant: example,
      advanced: `Chữa sâu và phòng tránh lỗi: ${repair}`
    },
    {
      example: `Đề bài tổng hợp và trọng tâm ôn tập tuần ${weekNumber} (50 phút): Dựa trên ví dụ trọng tâm (${example}), thực hiện kiểm tra các nội dung: ${test}`,
      basic: `Đề thi Mini-test 50 phút (Tuần ${weekNumber}):\n- Câu 1 (Cơ bản - 3đ): Dựa vào ví dụ “${example}”, giải bài toán tương tự khi đổi số liệu.\n- Câu 2 (Kỹ thuật tính - 3đ): ${basic}\n- Câu 3 (Vận dụng - 2đ): ${applied}\n- Câu 4 (Olympic thử thách - 2đ): ${challenge}`,
      applied: `Tự chấm điểm bài thi tuần ${weekNumber} theo thang 10 điểm: Hoàn thành bài toán thực tế “${applied}” (3đ), câu thử thách “${challenge}” (2đ) và các câu nền (5đ). Trình bày sạch đẹp có danh số.`,
      challenge: `Câu hỏi điểm 10 trong đề thi: ${challenge}`,
      reasoning: `Sau khi hoàn thành đề kiểm tra về “${title}”, câu nào làm con mất nhiều thời gian nhất và vì sao?`,
      selfCheck: "Tự chấm điểm theo thang 10: Cơ bản (6đ), Vận dụng (2đ), Nâng cao (2đ). Trình bày sạch đẹp, có danh số rõ ràng.",
      drill: test,
      variant: challenge,
      advanced: `Tổng hợp năng lực tuần ${weekNumber}: ${test}`
    }
  ];

  const vietnameseDays = [
    {
      example: example,
      basic: `Đọc kỹ ngữ liệu hoặc yêu cầu mẫu: ${example}. Tìm 2 chi tiết quan trọng và nói thành 3 câu trọn ý trước khi viết.`,
      applied: `Dựa trên yêu cầu mẫu “${example}”, hãy nói 1 đoạn 4–5 câu cho bạn cùng bàn nghe, nêu rõ trình tự quan sát hoặc cảm nhận của con.`,
      challenge: `Tìm thêm 1 từ ngữ gợi cảm hoặc hình ảnh liên tưởng độc đáo phù hợp với ngữ liệu “${example}”.`,
      reasoning: `Trong phần mở đầu của bài “${title}”, chi tiết hoặc từ ngữ nào giúp người nghe hình dung rõ nhất?`,
      selfCheck: "Tự nói to trước gương hoặc nhờ người thân nghe 1 lượt để kiểm tra độ trôi chảy.",
      drill: example,
      variant: basic,
      advanced: `Mở rộng ngữ liệu đọc hiểu: ${example}`
    },
    {
      example: `Ngữ liệu định hướng lập dàn ý: ${basic}`,
      basic: basic,
      applied: `Thực hiện lập dàn ý theo yêu cầu “${basic}”: Viết 4 gạch đầu dòng tương ứng 4 ý chính vào vở, mỗi gạch đầu dòng là 1 câu ngắn gọn.`,
      challenge: `Sắp xếp lại trật tự 4 ý vừa lập theo trình tự thời gian hoặc không gian để bài viết logic hơn.`,
      reasoning: `Khi sắp xếp các ý cho chủ đề “${title}”, ý nào đóng vai trò làm trục chính xuyên suốt bài viết?`,
      selfCheck: "Đọc lại dàn ý: các ý đã nối tiếp nhau tự nhiên chưa, có ý nào bị trùng lặp không?",
      drill: basic,
      variant: applied,
      advanced: `Kỹ thuật lập dàn ý nâng cao: ${basic}`
    },
    {
      example: `Đề bài và ngữ cảnh viết đoạn văn: ${applied}`,
      basic: `Chuẩn bị viết theo yêu cầu “${applied}”: Viết 1 câu mở đoạn trực tiếp giới thiệu đối tượng và 1 câu kết đoạn nêu cảm nghĩ riêng.`,
      applied: applied,
      challenge: `Thêm 1 biện pháp so sánh hoặc nhân hóa vào đoạn văn “${applied}” để câu văn sinh động hơn.`,
      reasoning: `Đoạn văn viết cho chủ đề “${title}”, câu nào có hình ảnh hoặc chi tiết chân thật làm con hài lòng nhất?`,
      selfCheck: "Đọc liền mạch bản nháp: không dừng lại sửa từ khi đang viết để giữ mạch cảm xúc.",
      drill: applied,
      variant: challenge,
      advanced: `Bản viết hoàn chỉnh có cảm xúc: ${applied}`
    },
    {
      example: `Kỹ thuật viết sáng tạo mở rộng: ${challenge}`,
      basic: `Thử nghiệm cách diễn đạt mới: ${challenge}. Viết 2 phương án câu khác nhau rồi chọn phương án giàu hình ảnh hơn.`,
      applied: `Áp dụng cách viết sáng tạo vào bài văn: ${challenge}. Viết hoàn chỉnh 1 đoạn 5–6 câu gửi cho người thân hoặc thầy cô đọc.`,
      challenge: challenge,
      reasoning: `Cách diễn đạt thử nghiệm trong bài “${title}”, con thấy điều gì giúp câu văn khác biệt và truyền cảm hơn?`,
      selfCheck: "Kiểm tra xem câu văn sáng tạo có tự nhiên và phù hợp với lứa tuổi học sinh lớp 4 không.",
      drill: challenge,
      variant: basic,
      advanced: `Thử nghiệm phong cách diễn đạt: ${challenge}`
    },
    {
      example: `Mẫu câu hoặc đoạn văn cần soát lỗi: ${repair}`,
      basic: repair,
      applied: `Thực hiện biên tập và nâng cấp: ${repair}. Viết lại thành bản hoàn chỉnh gồm 5–7 câu rõ ý, không mắc lỗi lặp từ hay câu què.`,
      challenge: `Đọc to bản đã sửa thành tiếng, phát hiện 1 chỗ ngắt nghỉ chưa hợp lý và điều chỉnh dấu câu thích hợp.`,
      reasoning: `Sau khi chỉnh sửa bài viết về “${title}”, lỗi nào con thấy cần chú ý tránh nhất trong những bài viết sau?`,
      selfCheck: "Rà soát 4 bước: đúng ý, câu đủ thành phần, dùng từ chính xác, không sai chính tả.",
      drill: repair,
      variant: example,
      advanced: `Biên tập chuyên sâu: ${repair}`
    },
    {
      example: `Khung đề kiểm tra Tiếng Việt tổng hợp tuần ${weekNumber} (50 phút): Dựa trên ngữ liệu trọng tâm (${example}), hoàn thành các phần kiểm tra: ${test}`,
      basic: `Đề kiểm tra Tiếng Việt 50 phút (Tuần ${weekNumber}):\n- Phần 1 - Đọc hiểu & Phân tích (15 phút): Đọc văn bản ngữ liệu về “${title}” (ngữ liệu: “${example}”) và trả lời 3 câu hỏi trọn ý: nêu ý chính, tìm 2 chi tiết đắt giá và nêu cảm nhận.\n- Phần 2 - Luyện câu & Viết đoạn (25 phút): ${applied}\n- Phần 3 - Soát lỗi 4 bước (10 phút): ${repair}`,
      applied: `Tự chấm điểm bài thi tuần ${weekNumber} theo thang điểm 10: Đọc hiểu (3đ), Viết đoạn văn theo đề “${applied}” (5đ), Chính tả và soát lỗi “${repair}” (2đ). Đạt tối đa 10/10.`,
      challenge: `Yêu cầu sáng tạo đạt điểm tối đa: ${challenge}`,
      reasoning: `Đọc to toàn bộ bài viết kiểm tra tuần này về “${title}”, con tự đánh giá bài làm đạt mức mấy trên thang điểm 10?`,
      selfCheck: "Tự chấm điểm theo thang 10: Đọc hiểu (3đ), Viết đoạn văn (5đ), Chính tả và chữ đẹp (2đ). Đạt tối đa 10/10.",
      drill: test,
      variant: challenge,
      advanced: `Đánh giá năng lực Tiếng Việt tuần ${weekNumber}: ${test}`
    }
  ];

  const daysData = isMath ? mathDays : vietnameseDays;

  const getVisualForTopic = (t, s) => {
    if (s !== "math") return null;
    if (/dãy số|quy luật/i.test(t)) return { type: "sequence", sequence: [2, 6, 12, 20, 30, 42], steps: ["+4", "+6", "+8", "+10", "+12"] };
    if (/phân số qua hình ảnh/i.test(t)) return { type: "fraction", numerator: 3, denominator: 8, label: "Phân số 3/8" };
    if (/cộng trừ phân số/i.test(t)) return { type: "fraction", numerator: 5, denominator: 8, label: "3/8 + 2/8 = 5/8" };
    if (/chu vi/i.test(t)) return { type: "grid-area", length: 14, width: 9, area: 126, unit: "cm" };
    if (/diện tích/i.test(t)) return { type: "grid-area", length: 9, width: 6, area: 54, unit: "cm" };
    if (/sơ đồ hóa|bài khó|tổng.*hiệu/i.test(t)) return { type: "sum-diff", larger: 36, smaller: 28, diff: 8, total: 64, labelA: "Số lớn (An)", labelB: "Số bé (Bình)" };
    if (/singapore|phần.*toàn thể/i.test(t)) return { type: "part-whole", total: 120, parts: 5, filledParts: 3, unitLabel: "1 phần", wholeLabel: "Dung tích bể" };
    return null;
  };

  return {
    alignment: `Kết nối tri thức lớp 4 là trục; tuần ${weekNumber} mở rộng bằng ${isMath ? "mô hình hóa và suy luận phù hợp học sinh giỏi" : "đọc sâu, quan sát và biên tập đúng lứa tuổi"}.`,
    days: daysData.map((d, index) => ({
      day: ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"][index],
      title: dayTitles[index],
      objective: dayObjectives[index],
      example: d.example,
      basic: d.basic,
      applied: d.applied,
      challenge: d.challenge,
      visual: getVisualForTopic(title, subject),
      reasoning: d.reasoning,
      selfCheck: d.selfCheck,
      drill: d.drill,
      variant: d.variant,
      advanced: d.advanced
    }))
  };
}

// Mỗi tuần đều có một nhịp học cụ thể. Sáu tuần đầu dùng nội dung cầu nối
// viết tay ở trên; các tuần còn lại được dựng từ mục tiêu tuần để không có
// mục tiêu nào chỉ là một tiêu đề trống trong giao diện.
function createDetailedDailyPlan(item, subject, weekNumber, phase) {
  const authored = authoredDailyPlan(item, subject, weekNumber, phase);
  if (authored) return authored;
  const title = item[0];
  const focus = item[1];
  const isMath = subject === "math";
  const phaseLens = {
    P1: "bắt đầu bằng hình vẽ hoặc ví dụ nhỏ của lớp 3 rồi mới tăng độ khó",
    P2: "dùng bảng, tia số hoặc sơ đồ thanh trước khi viết phép tính",
    P3: "vẽ hình và ghi đơn vị ở từng bước trước khi tính",
    P4: "thử một trường hợp nhỏ, lập bảng và nói điều luôn đúng",
    P5: "chia trường hợp có tổ chức, tìm ít nhất hai hướng giải",
    P6: "chọn chiến lược, giải độc lập rồi viết lại lời giải cho người khác hiểu"
  }[phase.id] || "nói lại cách nghĩ bằng lời của mình";

  if (isMath) {
    const example = /phân số/i.test(title)
      ? "Tô cùng một phần của hai dải giấy, chẳng hạn 2/4 và 1/2, rồi giải thích vì sao chúng bằng nhau."
      : /hình|góc|chu vi|diện tích/i.test(title)
        ? "Vẽ một hình đơn giản có số đo đã biết, ghi số đo lên hình rồi kiểm tra kết quả bằng cách đếm/đo lại."
        : /bảng|biểu đồ|dữ liệu/i.test(title)
          ? "Đọc tên bảng, đơn vị và chú giải; nêu một câu trả lời chỉ dùng một dữ kiện và một câu dùng hai dữ kiện."
          : /đếm|tổ hợp/i.test(title)
            ? "Lập bảng lựa chọn cho một tình huống nhỏ, đánh số từng trường hợp để không bỏ sót hoặc đếm lặp."
            : `Làm một ví dụ nhỏ về “${title}”, gạch dữ kiện đã dùng và nói vì sao bước đầu tiên hợp lý.`;
    const basic = /hình|góc|chu vi|diện tích/i.test(title)
      ? "Làm 3 hình từ dễ đến vừa; vẽ đủ ký hiệu, ghi đơn vị và kiểm tra một cạnh/góc còn thiếu."
      : /bảng|biểu đồ|dữ liệu/i.test(title)
        ? "Đọc 4–6 giá trị, sắp xếp hoặc so sánh, rồi tự đặt 2 câu hỏi có thể trả lời từ bảng."
        : `Làm 3 bài cơ bản về “${title}”; sau mỗi bài viết một dòng nêu quy tắc hoặc phép tính đã dùng.`;
    const applied = /bảng|biểu đồ|dữ liệu/i.test(title)
      ? "Tạo một bảng nhỏ từ số liệu trong gia đình/lớp học và rút ra hai nhận xét có bằng chứng."
      : `Đưa “${title}” vào một tình huống đời sống; dùng sơ đồ, bảng hoặc hình vẽ trước khi tính và ghi kết luận có đơn vị.`;
    const challenge = phase.id === "P1"
      ? "Thử thách nhẹ: đổi một dữ kiện, dự đoán đáp án thay đổi thế nào rồi kiểm tra bằng ví dụ nhỏ."
      : phase.id === "P2" || phase.id === "P3"
        ? "Thử thách mở rộng: giải một biến thể bằng sơ đồ thanh hoặc hình vẽ, sau đó kiểm tra bằng cách thứ hai."
        : "Thử thách Olympic vừa sức: chia trường hợp, tìm quy luật hoặc giải theo hai cách; ghi rõ vì sao không bỏ sót trường hợp.";
    return {
      alignment: `Kết nối tri thức lớp 3–4 · tuần ${weekNumber}: ${focus} · ${phaseLens}.`,
      days: [
        { day: "Thứ 2", title: `Hiểu lõi · ${title}`, objective: `Nắm ý chính của “${title}” và nói lại bằng lời của Bách.`, example, basic: "Làm 2 câu khởi động từ kiến thức đã biết; chỉ dùng giấy, bút và vật thật nếu cần.", applied: "Vẽ hoặc lập mô hình cho một tình huống ngắn trước khi giải.", reasoning: "Điều gì luôn đúng trong bài này? Điều gì chỉ đúng vì dữ kiện cụ thể?", selfCheck: "Khoanh dữ kiện, gạch câu hỏi và kiểm tra mình có dùng đúng đơn vị không." },
        { day: "Thứ 3", title: `Luyện có hướng dẫn · ${title}`, objective: "Chuyển từ hình/bảng/lời nói sang phép tính hoặc lập luận rõ ràng.", example: "Giải lại ví dụ mẫu nhưng che lời giải; Bách nói từng bước trước khi viết.", basic, applied: "Làm một bài có dữ kiện thay đổi; giữ nguyên cách nghĩ nhưng điều chỉnh bước tính.", reasoning: "Vì sao chọn cách này thay vì thử ngẫu nhiên hoặc làm thật dài?", selfCheck: "So sánh với ví dụ mẫu, chỉ sửa tối đa 3 lỗi và ghi nguyên nhân từng lỗi." },
        { day: "Thứ 4", title: `Vận dụng thực tế · ${title}`, objective: "Dùng kiến thức trong một bài toán có lời văn hoặc nhiều dữ kiện hơn.", example: "Đọc đề hai lần: lần một hiểu tình huống, lần hai gạch số liệu và điều phải tìm.", basic, applied, reasoning: "Nếu bỏ một dữ kiện thì bài còn giải được không? Nếu không, dữ kiện đó giữ vai trò gì?", selfCheck: "Ước lượng trước; đáp số phải hợp lý với cỡ số và câu hỏi." },
        { day: "Thứ 5", title: `Thử thách Singapore/Olympic · ${title}`, objective: "Chọn một heuristic phù hợp và trình bày được chiến lược.", example: "Làm phiên bản nhỏ trước, lập bảng hoặc dùng sơ đồ thanh; sau đó quay lại bài chính.", basic: "Làm một bài nền để chắc kỹ thuật trước khi thử bài lạ.", applied: "Giải bài thử thách ở mức vừa sức; được nhận tối đa hai gợi ý theo từng nấc.", reasoning: "Có cách giải khác không? Cách nào ngắn hơn, cách nào dễ kiểm tra hơn?", selfCheck: "Ghi chiến lược đã thử, chỗ bế tắc và bước tiếp theo thay vì chỉ ghi đáp số." },
        { day: "Thứ 6", title: `Chữa lỗi và dạy lại · ${title}`, objective: "Nhận diện lỗi kiến thức, lỗi chiến lược và lỗi cẩu thả.", example: "Đọc một lời giải sai, tìm đúng dòng sai rồi sửa bằng lời của mình.", basic: "Làm lại 2 câu từng sai mà không xem đáp án.", applied: "Tự tạo một bài tương tự, đổi ít nhất một điều kiện và giải cho người khác hiểu.", reasoning: "Lỗi này sẽ xuất hiện lại trong tình huống nào? Cách phòng tránh là gì?", selfCheck: "Đọc lời giải thành tiếng, kiểm tra phép ngược và câu kết luận." },
        { day: "Thứ 7", title: `Mini-test tuần ${weekNumber} · ${title}`, objective: "Đo mức hiểu thật qua câu cơ bản, vận dụng và một câu suy luận.", example: "Làm theo ba lượt: câu chắc, câu vừa, câu khó; không mắc kẹt quá 8 phút.", basic: "4–6 câu cơ bản, không dùng máy tính bỏ túi.", applied: "Một bài thực tế hai bước hoặc một bài cần mô hình hóa.", reasoning: "Chọn một câu khó để viết hướng giải dù chưa giải xong.", selfCheck: "Chấm riêng độ đúng, chiến lược, trình bày và ghi mục tiêu ôn lại tuần sau." }
      ]
    };
  }

  const readingLens = /Đọc|văn bản|truyện|Cảm nhận/i.test(title)
    ? "tìm ý chính, chi tiết làm bằng chứng và điều nhân vật/người viết muốn nói"
    : /Tả|quan sát/i.test(title)
      ? "quan sát thật bằng nhiều giác quan nhưng chỉ chọn chi tiết có ích"
      : "giữ một ý chính, sắp xếp câu theo trình tự và đọc thành tiếng để tự sửa";
  return {
    alignment: `Kết nối tri thức lớp 3–4 · tuần ${weekNumber}: ${focus} · ${readingLens}.`,
    days: [
      { day: "Thứ 2", title: `Đọc và nói · ${title}`, objective: `Hiểu yêu cầu “${title}” và nói được dàn ý bằng 3–5 câu.`, example: "Đọc một văn bản/đoạn mẫu ngắn, gạch từ khóa và chỉ ra một chi tiết đáng nhớ.", basic: "Trả lời 3 câu hỏi bằng câu trọn ý; không chép nguyên văn khi không cần.", applied: "Kể lại hoặc mô tả bằng lời của Bách, giữ đúng trình tự.", reasoning: "Chi tiết nào là bằng chứng? Nếu bỏ chi tiết đó, ý chính có thay đổi không?", selfCheck: "Nói lại mục tiêu bài bằng một câu và kiểm tra mọi nhận xét đều có căn cứ." },
      { day: "Thứ 3", title: `Lập dàn ý · ${title}`, objective: "Chọn ý chính, sắp xếp 3–5 ý và bỏ ý lặp.", example: "Viết các từ khóa lên giấy, nối bằng mũi tên rồi chuyển thành câu mở–phát triển–kết.", basic: "Lập hai dàn ý ngắn cho cùng chủ đề, mỗi dàn ý không quá 5 ý.", applied: "Chọn dàn ý tự nhiên hơn và giải thích vì sao chọn.", reasoning: "Ý nào làm đoạn/bài tiến lên? Ý nào chỉ lặp lại điều đã nói?", selfCheck: "Đọc dàn ý thành tiếng; nếu nhảy ý, thêm một từ nối hoặc đổi thứ tự." },
      { day: "Thứ 4", title: `Viết bản nháp · ${title}`, objective: "Viết đoạn/bài theo dàn ý, ưu tiên câu rõ và chi tiết thật.", example: "Viết câu mở nêu chủ đề, sau đó thêm 2–3 chi tiết nhìn/nghe/hành động phù hợp.", basic: "Viết 7–10 câu, mỗi câu phục vụ một ý; dùng ít nhất hai từ nối đúng nghĩa.", applied: "Thêm một chi tiết riêng của Bách và một câu thể hiện cảm xúc vừa đủ.", reasoning: "Câu nào là trục chính? Câu nào có thể cắt mà ý không mất?", selfCheck: "Đọc liền mạch một lượt, chưa sửa từng chữ khi đang viết." },
      { day: "Thứ 5", title: `Góc nhìn văn học thế giới · ${title}`, objective: "Học một kỹ thuật kể/miêu tả từ tác phẩm phù hợp lứa tuổi rồi tự viết bản riêng.", example: "Quan sát cách một tác giả mở cảnh, tạo hình ảnh hoặc cho nhân vật lựa chọn; không chép câu chữ.", basic: "Viết lại 3 câu theo kỹ thuật vừa học nhưng dùng nhân vật và trải nghiệm của Bách.", applied: "Đổi góc nhìn, thêm đối thoại hoặc tạo một hình ảnh so sánh tự nhiên.", reasoning: "Kỹ thuật nào giúp bài rõ hơn, kỹ thuật nào chỉ làm câu dài hơn?", selfCheck: "Bỏ câu bắt chước văn mẫu; giữ giọng kể hồn nhiên, đúng tuổi và logic." },
      { day: "Thứ 6", title: `Biên tập · ${title}`, objective: "Sửa ba điểm ảnh hưởng lớn nhất đến mạch lạc và độ chính xác.", example: "Đánh dấu I–C–T–CT: ý, câu, từ, chính tả; mỗi lượt chỉ sửa một loại lỗi.", basic: "Tìm và sửa một câu lặp, một từ mơ hồ và một lỗi dấu câu.", applied: "Viết bản 2, giữ lại ý hay của bản 1 nhưng làm câu sáng rõ hơn.", reasoning: "Bản 2 tốt hơn ở đâu? Chỗ nào vẫn cần người đọc hỏi lại?", selfCheck: "Đọc thành tiếng, gạch câu vấp và chọn tối đa 3 chỗ để viết lại." },
      { day: "Thứ 7", title: `Mini-test tuần ${weekNumber} · ${title}`, objective: "Đọc, lập ý, viết và tự nhận xét bằng tiêu chí lớp 4.", example: "Làm theo nhịp: đọc 10 phút, lập ý 5 phút, viết 20 phút, sửa 10 phút.", basic: "Một bài đọc hiểu ngắn hoặc bài tập dùng từ/câu đúng mục tiêu tuần.", applied: "Viết đoạn/bài 8–12 câu theo đề mới nhưng cùng kỹ năng.", reasoning: "Chọn một câu hay và một câu cần viết lại; nói rõ lý do.", selfCheck: "Chấm mạch lạc, diễn đạt, chính tả và tính riêng; lưu bản 1 và bản 2." }
    ]
  };
}

function cleanExample(text) {
  if (typeof text !== "string" || !text) return text || "";
  return text
    .replace(/^(?:Ví dụ(?: của ngày| đã giải| mẫu)?:\s*)+/i, "")
    .replace(/^Neo lại ví dụ:\s*/i, "")
    .trim();
}

function getMathSkillType(day, item) {
  const fullText = [
    day?.title,
    day?.objective,
    day?.example,
    day?.basic,
    day?.applied,
    item?.[0],
    item?.[1]
  ].filter(Boolean).join(" ");

  if (/so sánh|sắp xếp|thứ tự|lớn hơn|bé hơn|tăng dần|giảm dần|hàng cao nhất|nằm giữa/i.test(fullText) && !/cộng|trừ|bù trừ|tách số/i.test(day?.title || "")) {
    return "comparison";
  }
  if (/làm tròn|ước lượng/i.test(fullText)) {
    return "rounding";
  }
  if (/đọc số|viết số|cấu tạo số|hàng và lớp|giá trị hàng|chữ số|triệu|nghìn|trăm/i.test(fullText)) {
    return "place_value";
  }
  if (/bù trừ|tách số|gộp số|cộng|trừ|tổng|hiệu|số tròn/i.test(fullText)) {
    return "addition_subtraction";
  }
  if (/nhân|chia|gấp đôi|gấp ba|chia đều|thương|số dư|tích|thừa số|bảng nhân|bảng chia|phân phối/i.test(fullText)) {
    return "multiplication_division";
  }
  if (/biểu thức|tìm x|số bị che|dấu ngoặc/i.test(fullText)) {
    return "expressions";
  }
  if (/dãy số|quy luật|chẵn lẻ|bội|ước|tổ hợp|trường hợp|ngăn kéo|dirichlet/i.test(fullText)) {
    return "sequences_patterns";
  }
  if (/phân số|thập phân/i.test(fullText)) {
    return "fractions_decimals";
  }
  if (/hình|chu vi|diện tích|góc|đơn vị|thời gian|đo lường|mét|vuông|cm/i.test(fullText)) {
    return "geometry_measurement";
  }
  return "general_problem_solving";
}

function normalizeMathTask(text, weekNumber = 1, dayIndex = 0) {
  if (typeof text !== "string" || !text) return text;
  let res = text;

  // 1. Ordering normalization: Replace vague ordering prompts with concrete data
  const hasOrderingList =
    /(?:sắp xếp|thứ tự)[^:：\n]*[:：]\s*[\d(]/i.test(res) ||
    /(?:sắp xếp|thứ tự)[^(\n]*\(\s*\d+(?:[.,]\d+)*(?:\s*[,;]\s*\d+(?:[.,]\d+)*)+\s*\)/i.test(res) ||
    /(?:sắp xếp|thứ tự)\s+\d+(?:[.,]\d+)*(?:\s*[,;]\s*\d+(?:[.,]\d+)*)+/i.test(res) ||
    /\b(?:cho\s+)?(?:các\s+|dãy\s+)?số[^:：\n]*[:：]\s*\d+(?:[.,]\d+)*(?:\s*[,;]\s*\d+(?:[.,]\d+)*)+/i.test(res) ||
    /\d+(?:[.,]\d+)*(?:\s*[,;]\s*\d+(?:[.,]\d+)*)+[\s,;]*(?:hãy\s+)?(?:sắp xếp|thứ tự)/i.test(res) ||
    /\(\s*\d+(?:[.,]\d+)*(?:\s*[,;]\s*\d+(?:[.,]\d+)*)+\s*\)[^.!?\n]*(?:sắp xếp|thứ tự)/i.test(res);

  if (!hasOrderingList) {
    let orderingNormalized = false;
    res = res.replace(
      /(?:đọc\s+)?4[–-]6\s*giá trị,\s*sắp xếp(?:(?:\s*hoặc\s*so sánh)?(?:\s+theo\s+thứ\s+tự)?(?:\s+(?:đề\s+bài\s+)?yêu\s+cầu)?(?:\s+(?:tăng|giảm)\s+dần)?(?:\s+từ\s+(?:bé\s+đến\s+lớn|lớn\s+đến\s+bé))?)*(?:[;,]\s*sắp xếp(?:\s+theo\s+thứ\s+tự)?(?:\s+(?:tăng|giảm)\s+dần)?)?/i,
      (match) => {
        orderingNormalized = true;
        const base = 10000 + weekNumber * 1500 + dayIndex * 300;
        const nums = [base + 200, base + 1800, base - 500, base + 2400, base + 900].map(n => n.toLocaleString("vi-VN"));
        const dir = /giảm\s+dần|lớn\s+đến\s+bé/i.test(match) ? "giảm dần" : "tăng dần";
        return `đọc 5 giá trị (${nums.join("; ")}), sắp xếp theo thứ tự ${dir}`;
      }
    );
    if (!orderingNormalized) {
      res = res.replace(
        /sắp xếp hoặc so sánh(?:(?:\s+theo\s+thứ\s+tự)?(?:\s+(?:đề\s+bài\s+)?yêu\s+cầu)?(?:\s+(?:tăng|giảm)\s+dần)?)*(?:[;,]\s*sắp xếp(?:\s+(?:các|\d+)\s+số)?\s+theo\s+thứ\s+tự(?:\s+(?:tăng|giảm)\s+dần)?)?(?!\s*[:：\d(])/i,
        (match) => {
          orderingNormalized = true;
          const base = 12000 + weekNumber * 1000 + dayIndex * 250;
          const nums = [base + 450, base + 2100, base - 800, base + 3500, base + 1200].map(n => n.toLocaleString("vi-VN"));
          const dir = /giảm\s+dần|lớn\s+đến\s+bé/i.test(match) ? "giảm dần" : "tăng dần";
          return `sắp xếp 5 số theo thứ tự ${dir} (${nums.join("; ")})`;
        }
      );
    }
    if (!orderingNormalized) {
      res = res.replace(
        /sắp xếp(?:\s+(?:các|\d+)\s+số)?\s+theo\s+thứ\s+tự(?:\s+(?:đề\s+bài\s+)?yêu\s+cầu)?(?:\s+(?:tăng|giảm)\s+dần)?(?:\s+theo\s+thứ\s+tự(?:\s+(?:đề\s+bài\s+)?yêu\s+cầu)?(?:\s+(?:tăng|giảm)\s+dần)?)*(?:[;,]\s*sắp xếp(?:\s+(?:các|\d+)\s+số)?\s+theo\s+thứ\s+tự(?:\s+(?:tăng|giảm)\s+dần)?)*(?!\s*[:：\d(])/i,
        (match) => {
          orderingNormalized = true;
          const base = 15000 + weekNumber * 800 + dayIndex * 400;
          const nums = [base + 320, base + 1540, base - 410, base + 2100, base + 950].map(n => n.toLocaleString("vi-VN"));
          const dir = /giảm\s+dần|lớn\s+đến\s+bé/i.test(match) ? "giảm dần" : "tăng dần";
          return `sắp xếp 5 số theo thứ tự ${dir} (${nums.join("; ")})`;
        }
      );
    }
  }

  // 2. Prices & Money normalization: Replace vague price/money prompts with real amounts and items
  res = res.replace(/và bài tiền(?!\s*[:：\d(])/gi, "và bài toán mua 3 quyển vở giá 12.000 đồng/quyển từ tờ 50.000 đồng");
  res = res.replace(/ví dụ tính số giấy phủ mặt bàn và tiền mua(?!\s*[:：\d(])/gi, "ví dụ tính diện tích phủ mặt bàn 2 m² và tiền mua giấy 45.000 đồng (đơn giá 22.500 đồng/m²)");
  res = res.replace(/bài toán (?:về giá|tiền)(?!\s*[:：\d(])/gi, "bài toán mua hàng với giá 35.000 đồng và 65.000 đồng từ tờ 100.000 đồng");
  res = res.replace(
    /bảng giá(?:\s*đồ\s*dùng)?(?!\s*trị|\s*đồ\s*dùng\s*\(|\s*[:：\d(])(?![^.!?\n]*\b\d+[\d.,]*\s*(?:đồng|đ)\b)/gi,
    "bảng giá đồ dùng (vở 12.000 đồng, bút 8.000 đồng)"
  );

  // 3. Between numbers normalization: Replace vague between prompts with concrete boundaries
  res = res.replace(/tìm (?:một )?số(?: tròn trăm| tròn chục)? nằm giữa(?!\s*(?:hai số )?\d)/gi, () => {
    const low = 20000 + weekNumber * 1000 + dayIndex * 100;
    const high = low + 3000;
    return `tìm một số tròn trăm nằm giữa hai số ${low.toLocaleString("vi-VN")} và ${high.toLocaleString("vi-VN")}`;
  });
  res = res.replace(/nằm giữa hai số(?!\s*[:：\d])/gi, () => {
    const low = 15000 + weekNumber * 500;
    const high = low + 2500;
    return `nằm giữa hai số ${low.toLocaleString("vi-VN")} và ${high.toLocaleString("vi-VN")}`;
  });
  res = res.replace(/số ở giữa(?!\s*[:：\d])/gi, () => {
    const low = 10000 + weekNumber * 500;
    const high = low + 1000;
    return `số ở giữa hai mốc ${low.toLocaleString("vi-VN")} và ${high.toLocaleString("vi-VN")}`;
  });

  // 4. Vague phrase normalization
  res = res.replace(/ví dụ của ngày/gi, "ví dụ");
  res = res.replace(/bài tập bên dưới|bài bên dưới/gi, "bài tập");
  res = res.replace(/hai số đã cho(?!\s*[:：\d(])/gi, () => {
    const n1 = (25000 + weekNumber * 1200).toLocaleString("vi-VN");
    const n2 = (38000 + weekNumber * 1400).toLocaleString("vi-VN");
    return `hai số ${n1} và ${n2}`;
  });
  res = res.replace(/từ hai số trên(?!\s*[:：\d(])/gi, "từ hai số 307.406 và 8.594");

  return res;
}

function normalizeMathDay(day, weekNumber, dayIndex) {
  if (!day || typeof day !== "object") return day;
  const copy = { ...day };
  const keys = ["title", "objective", "example", "basic", "applied", "reasoning", "selfCheck", "drill", "variant", "advanced", "challenge", "hint", "warmup", "discover", "lesson", "worked", "exercises"];
  for (const k of keys) {
    if (typeof copy[k] === "string") {
      copy[k] = normalizeMathTask(copy[k], weekNumber, dayIndex);
    }
  }
  return copy;
}

function createConcreteLesson(item, subject, weekNumber, dayIndex, rawDay = null) {
  const day = subject === "math" ? normalizeMathDay(rawDay, weekNumber, dayIndex) : rawDay;
  const title = item[0];
  if (subject === "math") {
    const skillType = getMathSkillType(day, item);

    const domainDefaults = {
      comparison: {
        discover: "So sánh các số cùng số chữ số từ hàng cao nhất bên trái sang phải; khi gặp hàng đầu tiên có chữ số khác nhau, số nào có chữ số lớn hơn thì số đó lớn hơn.",
        warmup: "Đọc các số cần so sánh; xác định hàng cao nhất và tìm hàng đầu tiên có chữ số khác nhau trước khi chọn dấu so sánh.",
        hint: "Gợi ý 1: Đếm số chữ số của mỗi số.\nGợi ý 2: So sánh lần lượt từng hàng từ trái sang phải.\nGợi ý 3: Chọn dấu thích hợp hoặc sắp xếp theo thứ tự đề bài yêu cầu.",
        variant: "Đổi một chữ số ở hàng cao nhất của một số rồi so sánh lại các số mới.",
        drill: "So sánh 52.080 và 49.999; giải thích vì sao chữ số hàng chục nghìn quyết định kết quả.",
        check: "Khoanh chữ số ở hàng đầu tiên khác nhau từ trái sang phải để đối chiếu lại kết quả.",
        challenge: "Tìm chữ số thích hợp để điền vào ô trống sao cho thứ tự so sánh luôn đúng."
      },
      rounding: {
        discover: "Quan sát chữ số ngay bên phải hàng cần làm tròn: nếu từ 5 trở lên thì tăng 1 đơn vị ở hàng làm tròn; nếu bé hơn 5 thì giữ nguyên.",
        warmup: "Xác định đúng hàng cần làm tròn và quan sát chữ số ngay bên phải của hàng đó.",
        hint: "Gợi ý 1: Gạch chân chữ số ở hàng cần làm tròn.\nGợi ý 2: So sánh chữ số ngay bên phải với 5.\nGợi ý 3: Viết lại số đã làm tròn với các chữ số hàng sau chuyển thành 0.",
        variant: "Đổi chữ số ngay bên phải hàng làm tròn thành 5 rồi làm tròn lại.",
        drill: "Làm tròn 3.648 đến hàng trăm (3.600) và hàng nghìn (4.000).",
        check: "Kiểm tra chữ số ngay bên phải hàng làm tròn đã xét đúng điều kiện chưa.",
        challenge: "Tìm số tự nhiên lớn nhất và bé nhất khi làm tròn đến hàng trăm đều được 3.500."
      },
      place_value: {
        discover: "Dùng bảng Hàng chục nghìn | nghìn | trăm | chục | đơn vị. Đặt từng chữ số vào đúng cột rồi đọc và phân tích giá trị từng hàng từ trái sang phải.",
        warmup: "Không nhìn máy tính: đọc số 48.305 trong ví dụ. Sau đó nói chữ số ở hàng chục nghìn, hàng nghìn, hàng trăm, hàng chục và hàng đơn vị.",
        hint: "Gợi ý 1: Viết số vào bảng giá trị hàng.\nGợi ý 2: Xác định giá trị của từng chữ số.\nGợi ý 3: Viết thành tổng các hàng.",
        variant: "Đổi vị trí hai chữ số để tạo số mới rồi phân tích lại giá trị từng hàng.",
        drill: "48.305 = 40.000 + 8.000 + 300 + 5; chỉ ra chữ số hàng chục nghìn và hàng trăm.",
        check: "Đếm đủ số chữ số để không bỏ sót chữ số 0 ở các hàng giữa.",
        challenge: "Dùng các chữ số đã cho lập số lớn nhất và số bé nhất có năm chữ số khác nhau."
      },
      addition_subtraction: {
        discover: "Nhận diện số gần tròn để dùng phương pháp bù trừ hoặc tách số theo hàng, sau đó kiểm tra lại bằng phép tính ngược.",
        warmup: "Tìm số hạng gần số tròn nhất để xác định phần bù cần thêm hoặc bớt trước khi tính.",
        hint: "Gợi ý 1: Làm tròn số gần nhất.\nGợi ý 2: Bù hoặc trừ phần đã làm tròn.\nGợi ý 3: Kiểm tra bằng phép tính ngược.",
        variant: "Đổi một số hạng trong phép tính thành số tròn gần nhất rồi tính nhẩm lại.",
        drill: "398 + 27 = 400 + 27 − 2 = 425; giải thích vì sao phải trừ 2.",
        check: "Ước lượng tổng hoặc hiệu trước khi kết luận đáp số.",
        challenge: "Tính nhanh tổng dãy số bằng cách nhóm các cặp số tạo thành số tròn."
      },
      multiplication_division: {
        discover: "Dùng tính chất phân phối hoặc gấp đôi liên tiếp để nhân nhẩm; khi chia, ước lượng thương và nhớ số dư luôn bé hơn số chia.",
        warmup: "Xác định phép tính chính, nhẩm bảng nhân hoặc ước lượng thương gần đúng trước khi đặt tính.",
        hint: "Gợi ý 1: Tách thừa số thành số tròn và đơn vị.\nGợi ý 2: Nhân từng phần rồi cộng lại.\nGợi ý 3: Thử lại bằng phép chia ngược.",
        variant: "Tách một thừa số thành tích của hai số nhỏ hơn rồi tính nhẩm theo thứ tự mới.",
        drill: "15 × 16 = 15 × 2 × 8 = 30 × 8 = 240; giải thích từng bước nhẩm.",
        check: "Kiểm tra tích bằng phép chia hoặc kiểm tra thương nhân số chia cộng số dư.",
        challenge: "Tính nhanh biểu thức bằng cách đưa thừa số chung ra ngoài."
      },
      expressions: {
        discover: "Thực hiện trong ngoặc trước, ngoài ngoặc sau; nhân chia trước, cộng trừ sau. Muốn tìm thành phần chưa biết, dùng phép tính ngược.",
        warmup: "Gạch chân phép tính cần thực hiện đầu tiên theo quy tắc thứ tự phép tính.",
        hint: "Gợi ý 1: Xác định thứ tự các phép tính.\nGợi ý 2: Tính từng bước và ghi rõ giá trị trung gian.\nGợi ý 3: Thay kết quả vào biểu thức ban đầu để kiểm tra.",
        variant: "Thêm dấu ngoặc đơn vào biểu thức để thay đổi thứ tự và ra kết quả mới.",
        drill: "6 + 4 × 5 = 6 + 20 = 26; giải thích vì sao không tính (6 + 4) trước.",
        check: "Kiểm tra đã tuân thủ đúng thứ tự phép tính và dấu ngoặc chưa.",
        challenge: "Điền các dấu phép tính thích hợp để biểu thức đạt giá trị yêu cầu."
      },
      sequences_patterns: {
        discover: "Lập bảng hoặc tính khoảng cách giữa các số liên tiếp để tìm quy luật; chỉ kết luận khi quy luật đúng với ít nhất ba bước.",
        warmup: "Quan sát ba số đầu tiên của dãy và tìm quy tắc thay đổi giữa hai số liền nhau.",
        hint: "Gợi ý 1: Tính hiệu giữa các số liền kề.\nGợi ý 2: Xác định quy luật tăng, giảm hoặc lặp lại.\nGợi ý 3: Thử quy luật với số hạng tiếp theo.",
        variant: "Thay đổi khoảng cách quy luật thêm 1 đơn vị rồi viết 3 số tiếp theo.",
        drill: "Dãy 4, 9, 14, 19, 24 tăng 5 mỗi bước; tìm số hạng thứ 10 của dãy.",
        check: "Đọc lại từng số hạng và kiểm tra khoảng cách có đồng nhất không.",
        challenge: "Tìm số hạng thứ 20 của dãy số cách đều và nêu công thức tổng quát."
      },
      fractions_decimals: {
        discover: "Dùng sơ đồ dải giấy hoặc hình vẽ chia phần bằng nhau để nối phân số với số đo thực tế trước khi so sánh hoặc tính toán.",
        warmup: "Xác định mẫu số (số phần bằng nhau) và tử số (số phần lấy) trên hình vẽ hoặc dải giấy.",
        hint: "Gợi ý 1: Vẽ hình biểu diễn phân số.\nGợi ý 2: Quy đồng mẫu số nếu cần so sánh.\nGợi ý 3: Rút gọn phân số về dạng tối giản.",
        variant: "Tìm một phân số bằng phân số đã cho nhưng có mẫu số gấp đôi.",
        drill: "Tô 3/8 hình chữ nhật và tìm phân số bằng 1/2 có mẫu số 10.",
        check: "Mẫu số là số phần bằng nhau; kiểm tra đúng đơn vị đo.",
        challenge: "Tạo hai cách biểu diễn cùng một lượng rồi giải thích cách nào giúp tính nhanh hơn."
      },
      geometry_measurement: {
        discover: "Vẽ hình phác thảo, ghi đầy đủ kích thước và đơn vị đo lên hình trước khi áp dụng công thức tính chu vi hoặc diện tích.",
        warmup: "Đọc kĩ đề bài, kiểm tra đơn vị đo của các kích thước và đổi về cùng một đơn vị nếu cần.",
        hint: "Gợi ý 1: Vẽ hình và ghi số đo.\nGợi ý 2: Chọn công thức tính chu vi hoặc diện tích phù hợp.\nGợi ý 3: Ghi đúng đơn vị đo độ dài hoặc diện tích.",
        variant: "Giữ nguyên diện tích nhưng thay đổi chiều dài và chiều rộng rồi tính lại chu vi.",
        drill: "Hình chữ nhật dài 15 cm, rộng 8 cm: tính chu vi và diện tích.",
        check: "Chu vi dùng đơn vị độ dài; diện tích dùng đơn vị vuông; kiểm tra đơn vị đo.",
        challenge: "Tìm các kích thước nguyên của hình chữ nhật có chu vi 24 cm sao cho diện tích lớn nhất."
      },
      general_problem_solving: {
        discover: "Vẽ sơ đồ đoạn thẳng hoặc lập bảng tóm tắt hai cột ‘điều đã biết’ và ‘điều cần tìm’ trước khi viết phép tính.",
        warmup: "Đọc kĩ tình huống bài toán, gạch chân các dữ kiện số liệu và xác định câu hỏi chính của đề.",
        hint: "Gợi ý 1: Tóm tắt đề bài bằng sơ đồ hoặc bảng.\nGợi ý 2: Xác định bước tính trung gian trước khi tìm đáp số chính.\nGợi ý 3: Thay đáp số vào đề bài để kiểm tra tính hợp lý.",
        variant: "Đổi một dữ kiện trong bài toán lời văn và dự đoán đáp số thay đổi như thế nào.",
        drill: "Một cửa hàng có 120 kg gạo, đã bán 45 kg; tính số gạo còn lại.",
        check: "Ước lượng trước, kiểm tra bằng phép tính ngược và viết câu trả lời có kèm đơn vị.",
        challenge: "Giải bài toán bằng hai cách khác nhau và so sánh xem cách nào ngắn gọn hơn."
      }
    };

    const fallback = domainDefaults[skillType] || domainDefaults.general_problem_solving;

    const mathTemplate = {
      lesson: `Học trọng tâm “${title}” bằng một ví dụ có số liệu; Bách phải nói dữ kiện nào dẫn đến từng bước.`,
      worked: fallback.drill,
      exercises: `Bách tự làm: (1) 307.406 + 8.594; (2) 900.000 − 47.285; (3) viết một câu hỏi hai bước từ hai số 307.406 và 8.594.`,
      challenge: fallback.challenge,
      check: fallback.check
    };

    if (day?.objective && day?.example && day?.basic && day?.applied) {
      mathTemplate.lesson = `${day.objective} Trọng tâm hôm nay: “${day.title || title}”.`;
      mathTemplate.worked = cleanExample(day.example);
      mathTemplate.exercises = `Bách tự làm về “${day.title || title}”: ${day.basic}; ${day.applied}; ${day.reasoning || "Nói rõ vì sao chọn cách làm này."}`;
      mathTemplate.exerciseItems = [
        ...String(day.basic).split(/\n+/).map(item => item.trim()).filter(Boolean),
        day.applied,
        day.reasoning
      ].filter(Boolean);
      mathTemplate.check = day.selfCheck || fallback.check;
      mathTemplate.challenge = day.challenge || fallback.challenge;
    }

    const isOpeningPlaceValueLesson = weekNumber === 1 && dayIndex === 0 && /Đọc số/i.test(day?.title || "");

    mathTemplate.warmup = isOpeningPlaceValueLesson
      ? "Không nhìn máy tính: đọc số 48.305 trong ví dụ. Sau đó nói chữ số ở hàng chục nghìn, hàng nghìn, hàng trăm, hàng chục và hàng đơn vị."
      : (day?.warmup || fallback.warmup);

    mathTemplate.discover = isOpeningPlaceValueLesson
      ? "Dùng bảng Hàng chục nghìn | nghìn | trăm | chục | đơn vị. Ví dụ: 27.046 đọc là “hai mươi bảy nghìn không trăm bốn mươi sáu” vì hàng trăm là 0 nhưng phía sau vẫn còn 4 và 6."
      : (day?.discover || fallback.discover);

    mathTemplate.hint = day?.hint
      ? day.hint.replace(/\s+Gợi ý ([2-9]):/g, "\nGợi ý $1:")
      : fallback.hint;

    if (!mathTemplate.exerciseItems) {
      mathTemplate.exerciseItems = mathTemplate.exercises.replace(/^Bách tự làm:\s*/i, "").split(/;\s*/).filter(Boolean);
    }
    mathTemplate.variant = day?.variant || fallback.variant;
    mathTemplate.drill = day?.drill || fallback.drill;

    const dayFocus = [
      "đọc ví dụ và tự vẽ/lập bảng trước khi xem cách giải",
      "che phần lời giải, làm lại ví dụ rồi đối chiếu từng bước",
      "giải bài vận dụng độc lập và viết câu kết luận",
      "thử bài nâng tầm, được nhận tối đa hai gợi ý",
      "chữa một lời giải sai và viết lại dòng sai",
      "làm mini-test, đánh dấu câu chắc và câu cần ôn"
    ][dayIndex] || "nói lại chiến lược bằng lời của mình";

    const norm = (str) => normalizeMathTask(str, weekNumber, dayIndex);
    return {
      lesson: norm(`${mathTemplate.lesson} Hôm nay Bách sẽ ${dayFocus}.`),
      worked: norm(cleanExample(mathTemplate.worked)),
      exercises: norm(mathTemplate.exercises),
      exerciseItems: Array.isArray(mathTemplate.exerciseItems)
        ? mathTemplate.exerciseItems.map(item => norm(item))
        : mathTemplate.exerciseItems,
      variant: norm(mathTemplate.variant),
      drill: norm(mathTemplate.drill),
      challenge: norm(mathTemplate.challenge),
      check: norm(mathTemplate.check),
      warmup: norm(mathTemplate.warmup),
      discover: norm(mathTemplate.discover),
      hint: norm(mathTemplate.hint)
    };
  }

  const vietnameseSeeds = [
    "Chiều muộn, vệt nắng cuối ngày nằm trên bậc cửa; con mèo vẫn kiên nhẫn chờ tiếng mở cổng.",
    "Trong ngăn bàn, Bách tìm thấy một mảnh giấy có dòng nhắn ngắn của người bạn đã giúp mình hôm qua.",
    "Sau cơn mưa, sân trường phản chiếu những đám mây trắng và tiếng guốc chạy rộn ràng ngoài hành lang.",
    "Bà đặt rổ rau bên hiên, vừa nhặt lá vừa kể chuyện khu vườn đã đổi khác qua từng mùa.",
    "Chiếc đèn bàn sáng lên khi trời tối; trang vở còn dang dở bỗng trở thành lời hẹn với ngày mai.",
    "Cậu bé đứng trước cây non bị gió nghiêng, im lặng một lúc rồi tìm một chiếc que nhỏ để dựng cây."
  ];
  const readingSeed = vietnameseSeeds[(weekNumber * 2 + dayIndex) % vietnameseSeeds.length];
  const vietnameseTemplate = /Tả|quan sát/i.test(title)
    ? {
        lesson: "Quan sát một đối tượng thật theo một trật tự; chọn chi tiết nhìn, nghe hoặc hành động có tác dụng, không liệt kê lan man.",
        worked: "“Chiếc cặp mở ra, mùi giấy mới còn thơm. Quai cặp hơi sờn nhưng vẫn ôm gọn vai em.”",
        exercises: "Bách tự làm: ghi 8 chi tiết về một đồ vật/người/cảnh; chọn 4 chi tiết và viết đoạn 8–10 câu.",
        challenge: "Bài nâng cao: bỏ hai tính từ chung chung, thay bằng một hành động hoặc chi tiết giác quan cụ thể.",
        check: "Kiểm tra: đoạn có trình tự, ít nhất ba chi tiết thật và một câu cảm nhận riêng."
      }
    : /Đọc|văn bản|Cảm nhận|Tóm tắt/i.test(title)
      ? {
          lesson: "Đọc chậm, gạch ý chính, khoanh hai chi tiết làm bằng chứng và phân biệt điều văn bản nói với điều mình suy ra.",
          worked: "“Nam thấy chiếc cây non bị nghiêng sau trận mưa. Em dựng lại cây và buộc một sợi dây mềm.” Bằng chứng cho thấy Nam biết quan tâm là hành động dựng cây.",
          exercises: "Bách tự làm: đặt 3 câu hỏi cho đoạn trên; trả lời bằng câu trọn ý; tóm tắt đoạn bằng 2 câu.",
          challenge: "Bài nâng cao: viết hai cách hiểu khác nhau, rồi chỉ ra cách nào có bằng chứng chắc hơn.",
          check: "Kiểm tra: mỗi nhận xét quan trọng phải kèm chi tiết làm căn cứ; không chép cả đoạn."
        }
      : /Kể|chuyện|Đối thoại/i.test(title)
        ? {
            lesson: "Xây câu chuyện bằng vấn đề, lựa chọn của nhân vật và kết quả; lời thoại phải gắn với người nói và hành động.",
            worked: "Làm mất quyển sách → tìm manh mối → nói thật với bạn → cùng sửa sai; mỗi mốc làm câu chuyện tiến lên.",
            exercises: "Bách tự làm: lập 4 mốc cho một việc thật; viết đoạn 10–12 câu, có một lời thoại và một hành động thể hiện cảm xúc.",
          challenge: "Bài nâng cao: kể lại cùng việc đó từ góc nhìn của người bạn hoặc đồ vật, nhưng không làm sai trình tự.",
            check: "Kiểm tra: có mở đầu, diễn biến, kết quả; không thêm sự việc không liên quan."
          }
        : /từ|vốn từ|Câu|Liên kết|Sửa|Biên tập|Chính tả/i.test(title)
          ? {
              lesson: "Chọn từ đúng nghĩa, viết câu đủ ý và dùng từ nối để đoạn văn tiến theo một mạch; sửa từng loại lỗi theo lượt.",
              worked: "“Bạn ấy rất tốt.” → “Bạn Minh lặng lẽ nhường chỗ gần cửa sổ cho bạn bị say xe.” Câu sau có bằng chứng cụ thể hơn.",
              exercises: "Bách tự làm: (1) sửa 3 câu mơ hồ; (2) dùng 3 từ mới trong câu riêng; (3) nối thành đoạn 6 câu.",
          challenge: "Bài nâng cao: viết hai phiên bản cùng một ý, chọn bản tự nhiên hơn và giải thích lựa chọn từ/câu.",
              check: "Kiểm tra: đọc thành tiếng, rà ý–câu–từ–chính tả; không sửa quá nhiều điểm cùng lúc."
            }
          : {
              lesson: `Luyện trọng tâm “${title}” bằng một đoạn ngắn, sau đó tự lập ý và viết bản riêng.`,
              worked: "Câu mở nêu rõ chủ đề, hai câu phát triển có chi tiết, câu cuối khép ý và thể hiện suy nghĩ.",
              exercises: "Bách tự làm: lập dàn ý 4 ý; viết đoạn 8–10 câu; gạch chân câu chủ đề và khoanh một từ nối.",
          challenge: "Bài nâng cao: đổi góc nhìn hoặc thêm một chi tiết có tác dụng nhưng vẫn giữ giọng văn đúng tuổi.",
              check: "Kiểm tra: bài rõ ý, có trình tự, câu không lặp và có ít nhất một chi tiết riêng."
            };
  if (day?.objective && day?.example && day?.basic && day?.applied) {
    vietnameseTemplate.lesson = `${day.objective} Trọng tâm hôm nay: “${title}”.`;
    vietnameseTemplate.worked = cleanExample(day.example);
    vietnameseTemplate.exercises = `Bách tự làm về “${title}”: ${day.basic}; ${day.applied}; ${day.reasoning || "Nói rõ vì sao sắp xếp ý như vậy."}`;
    vietnameseTemplate.exerciseItems = [day.basic, day.applied, day.reasoning].filter(Boolean);
    vietnameseTemplate.check = day.selfCheck || vietnameseTemplate.check;
    vietnameseTemplate.challenge = day.advanced || `Bài nâng cao cho “${title}”: viết một phiên bản riêng, thêm một chi tiết có tác dụng và giải thích lựa chọn.`;
  }
  if (!day?.advanced) {
    vietnameseTemplate.worked = `${vietnameseTemplate.worked} Đoạn luyện riêng hôm nay: “${readingSeed}”`;
    vietnameseTemplate.exercises = `${vietnameseTemplate.exercises} Dùng đoạn luyện riêng hôm nay: đặt một câu hỏi, chọn một từ khóa và viết một câu phát triển ý.`;
    vietnameseTemplate.challenge = `${vietnameseTemplate.challenge} Không dùng lại câu mẫu; viết một câu mới dựa trên chi tiết của đoạn luyện riêng hôm nay.`;
  }
  const vietnameseWarmups = [
    "Đọc đoạn luyện một lần để hiểu ý, lần hai đọc thành tiếng và khoanh một chi tiết làm mình chú ý.",
    "Nói lại đề bằng một câu đủ ý; chọn ba từ khóa trước khi viết.",
    "Sắp xếp ba mảnh ý lộn xộn thành trình tự hợp lý rồi giải thích lựa chọn.",
    "Tìm một câu còn chung chung và thay bằng chi tiết nhìn, nghe hoặc hành động cụ thể.",
    "Đọc lại bản nháp như một người bạn; đánh dấu chỗ bị lặp hoặc khiến người đọc phải đoán.",
    "Chọn một câu hay nhất và một câu cần sửa; nói rõ bằng chứng trước khi tự chấm."
  ];
  const vietnameseDiscoveries = [
    "Gạch dưới ý chính, khoanh chi tiết làm bằng chứng và nối chúng bằng mũi tên; chưa cần viết bài ngay.",
    "Đặt các ý vào ba ô mở đoạn – phát triển – kết đoạn để nhìn thấy mạch trước khi viết.",
    "Quan sát cách câu mở dẫn người đọc vào chủ đề; sau đó tạo một câu mở mới bằng trải nghiệm của Bách.",
    "Thử một kỹ thuật kể hoặc miêu tả, nhưng chỉ giữ lại nếu nó làm ý rõ hơn và vẫn đúng giọng trẻ em.",
    "Sửa theo một lượt: ý trước, câu sau, từ và chính tả cuối cùng; không sửa tất cả cùng lúc.",
    "Đọc bản 1 và bản 2 cạnh nhau, chỉ ra một thay đổi làm bài mạch lạc hơn."
  ];
  const vietnameseHints = [
    "Gợi ý 1: nói thành tiếng. Gợi ý 2: viết từ khóa. Gợi ý 3: chọn một chi tiết làm bằng chứng.",
    "Gợi ý 1: chia 3 phần. Gợi ý 2: mỗi ý viết một câu. Gợi ý 3: thêm từ nối nếu mạch bị nhảy.",
    "Gợi ý 1: bỏ câu lặp. Gợi ý 2: thay từ mơ hồ bằng hành động. Gợi ý 3: đọc lại như người chưa biết câu chuyện.",
    "Gợi ý 1: viết bản ngắn trước. Gợi ý 2: thêm một chi tiết riêng. Gợi ý 3: kiểm tra chi tiết đó có phục vụ ý không.",
    "Gợi ý 1: tìm dòng làm người đọc vấp. Gợi ý 2: sửa một lỗi mỗi lượt. Gợi ý 3: đọc to để kiểm tra.",
    "Gợi ý 1: giữ câu chắc trước. Gợi ý 2: viết hướng sửa. Gợi ý 3: không chép văn mẫu."
  ];
  const isAuthoredUnit = Boolean(day?.advanced);
  vietnameseTemplate.warmup = isAuthoredUnit
    ? "Đọc đề/đoạn luyện hai lượt: lượt đầu hiểu sự việc hoặc ý chính; lượt sau khoanh một chi tiết sẽ dùng trong bài của mình."
    : vietnameseWarmups[dayIndex] || vietnameseWarmups[0];
  vietnameseTemplate.discover = isAuthoredUnit
    ? `Khám phá từ ví dụ: ${day.objective} Ghi từ khóa trước, chỉ chuyển sang câu hoàn chỉnh khi đã biết mỗi ý phục vụ phần nào của bài.`
    : vietnameseDiscoveries[dayIndex] || vietnameseDiscoveries[0];
  vietnameseTemplate.hint = isAuthoredUnit
    ? "Gợi ý 1: nói ý bằng lời của mình. Gợi ý 2: chọn một chi tiết thật hoặc dẫn chứng. Gợi ý 3: đọc thành tiếng để tìm chỗ người đọc sẽ vấp."
    : vietnameseHints[dayIndex] || vietnameseHints[0];
  const dayFocus = [
    "đọc/nói lại yêu cầu bằng 3–5 câu",
    "lập dàn ý 3–5 ý trước khi viết",
    "viết bản nháp liền mạch",
    "thử một kỹ thuật kể/miêu tả từ văn học phù hợp lứa tuổi",
    "biên tập và viết bản 2",
    "đọc lại sản phẩm và tự nhận xét"
  ][dayIndex] || "nói lại cách làm bằng lời của mình";
  return { lesson: `${vietnameseTemplate.lesson} Hôm nay Bách sẽ ${dayFocus}.`, warmup: vietnameseTemplate.warmup, discover: vietnameseTemplate.discover, worked: vietnameseTemplate.worked, exercises: vietnameseTemplate.exercises, exerciseItems: vietnameseTemplate.exerciseItems, challenge: vietnameseTemplate.challenge, hint: vietnameseTemplate.hint, check: vietnameseTemplate.check };
}

function formatMentalNumber(value) {
  return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function createContinuationMentalGroup(week, dayIndex) {
  const seed = week * 19 + dayIndex * 7;
  const day = `Buổi ${dayIndex + 1}`;
  const families = [
    () => {
      const near = 300 + (seed % 6) * 100 + 98;
      const add = 27 + (seed % 41);
      return { title: "Cộng bù về số tròn", hint: "Đưa số có tận cùng 8 hoặc 9 về chục/trăm gần nhất, rồi trả lại phần đã thêm.", questions: [`${formatMentalNumber(near)} + ${add} = ?`, `${formatMentalNumber(near + 200)} + ${add + 31} = ?`, `${formatMentalNumber(near + 400)} − ${add} = ?`, `Giải thích vì sao ${formatMentalNumber(near)} + ${add} có thể tính bằng ${formatMentalNumber(near + 2)} + ${add} − 2.`] };
    },
    () => {
      const a = 420 + (seed % 8) * 70;
      const b = 198 + (seed % 5) * 100;
      return { title: "Trừ bằng làm tròn và điều chỉnh", hint: "Khi làm tròn số trừ lên, nhớ cộng lại đúng phần đã trừ lố.", questions: [`${formatMentalNumber(a)} − ${formatMentalNumber(b)} = ?`, `${formatMentalNumber(a + 300)} − ${formatMentalNumber(b + 101)} = ?`, `${formatMentalNumber(a + 500)} − ${formatMentalNumber(b + 299)} = ?`, `Với ${formatMentalNumber(a)} − ${formatMentalNumber(b)}, em bù bao nhiêu để số trừ thành số tròn? Vì sao cuối cùng phải cộng phần đó trở lại?`] };
    },
    () => {
      const x = 125 + (seed % 7) * 25;
      const y = 375 + (seed % 8) * 25;
      return { title: "Nhóm số hạng tạo mốc", hint: "Tìm hai số có tổng tròn trăm trước, rồi cộng số còn lại.", questions: [`${x} + ${y} + 200 = ?`, `${x + 17} + ${y - 17} + 300 = ?`, `${formatMentalNumber(x + 425)} + ${formatMentalNumber(y + 575)} = ?`, `Trong ${x} + ${y} + 200, em nên nhóm hai số nào trước? Giải thích vì sao.`] };
    },
    () => {
      const n = 12 + (seed % 19);
      return { title: "Nhân với 25, 50 và 125", hint: "Ghép 4 với 25 thành 100; ghép 8 với 125 thành 1.000; nhân với 50 là nhân 100 rồi chia 2.", questions: [`${n} × 25 = ?`, `${n + 8} × 50 = ?`, `${n + 3} × 125 = ?`, `Để tính ${n} × 25, em có thể chia ${n} cho 4 trước hay nhân ${n} với 100 rồi chia 4 sau? Khi nào mỗi cách thuận tiện?`] };
    },
    () => {
      const n = 17 + (seed % 23);
      return { title: "Nhân qua mốc 9 và 11", hint: "Nhân 9 là nhân 10 rồi bớt đi một lần số đó; nhân 11 là nhân 10 rồi thêm một lần số đó.", questions: [`${n} × 9 = ?`, `${n + 6} × 11 = ?`, `${n + 12} × 19 = ?`, `Không tính từng tích, hai kết quả ${n} × 9 và ${n} × 11 chênh nhau bao nhiêu? Vì sao?`] };
    },
    () => {
      const divisor = 4 + (seed % 6);
      const quotient = 12 + (seed % 11);
      const dividend = divisor * quotient;
      return { title: "Chia bằng tách và phép ngược", hint: "Tách số bị chia thành các phần đều chia hết, hoặc hỏi ngược: số nào nhân với số chia thì được số bị chia?", questions: [`${formatMentalNumber(dividend)} ÷ ${divisor} = ?`, `${formatMentalNumber(dividend + divisor * 10)} ÷ ${divisor} = ?`, `${formatMentalNumber(dividend + divisor * 3 + 1)} ÷ ${divisor} = ? (dư ?)`, `Dùng phép nhân nào để kiểm tra kết quả của ${formatMentalNumber(dividend)} ÷ ${divisor}?`] };
    },
    () => {
      const a = 24 + (seed % 18);
      const b = 6 + (seed % 4);
      return { title: "Biểu thức và phân phối", hint: "Tìm thừa số chung hoặc nhóm cặp tạo 10, 100 trước khi nhân tính nhiều dòng.", questions: [`${a} × ${b} + ${a} × ${10 - b} = ?`, `${a + 5} × 7 − ${a + 5} × 2 = ?`, `(${a} + ${10 - b}) × ${b} = ?`, `Viết ${a} × ${b} + ${a} × ${10 - b} thành một phép nhân gọn hơn. Vì sao được phép làm vậy?`] };
    },
    () => {
      const numerator = 2 + (seed % 4);
      const denominator = 8;
      return { title: "Phân số cùng mẫu và phần còn lại", hint: "Cùng mẫu số thì gộp hoặc bớt tử số; luôn hình dung cả đơn vị được chia thành bao nhiêu phần bằng nhau.", questions: [`${numerator}/${denominator} + ${3}/${denominator} = ?`, `${7}/${denominator} − ${numerator}/${denominator} = ?`, `Một dải giấy tô ${numerator}/${denominator}, rồi tô thêm ${2}/${denominator}. Đã tô mấy phần tám?`, `Vì sao ${numerator}/${denominator} + ${3}/${denominator} không cộng mẫu số thành ${denominator + denominator}?`] };
    },
    () => {
      const thousands = 20 + (seed % 18) * 5;
      const price = thousands * 1000;
      return { title: "Tiền, số thập phân và ước lượng", hint: "Làm tròn giá tiền về nghìn hoặc chục nghìn để đoán trước; sau đó tính chính xác.", questions: [`${formatMentalNumber(price)} đồng + ${formatMentalNumber(15000 + (seed % 5) * 1000)} đồng = ?`, `Một món giá ${formatMentalNumber(price)} đồng, giảm 5.000 đồng. Giá mới là ?`, `${(12 + (seed % 6))},5 + 3,5 = ?`, `Không tính chính xác, tổng ${formatMentalNumber(price)} đồng và 17.000 đồng gần ${formatMentalNumber(price + 20000)} đồng hay ${formatMentalNumber(price + 50000)} đồng hơn? Vì sao?`] };
    },
    () => {
      const length = 12 + (seed % 12);
      const width = 5 + (seed % 7);
      return { title: "Đo lường và hình học tính nhanh", hint: "Tách công thức thành phần dễ: chu vi là hai lần tổng dài và rộng; diện tích là dài nhân rộng.", questions: [`Hình chữ nhật dài ${length} cm, rộng ${width} cm. Chu vi là ? cm.`, `Cùng hình đó, diện tích là ? cm².`, `Nếu tăng chiều dài thêm 2 cm, chu vi tăng bao nhiêu cm?`, `Không tính lại toàn bộ, giải thích vì sao tăng chiều dài 2 cm thì chu vi chỉ tăng 4 cm.`] };
    },
    () => {
      const start = 3 + (seed % 7);
      const step = 4 + (seed % 6);
      return { title: "Dãy số và quy luật", hint: "So sánh hiệu giữa hai số liền nhau trước; sau đó kiểm tra quy luật với ít nhất ba bước.", questions: [`Dãy ${start}, ${start + step}, ${start + 2 * step}, ${start + 3 * step}, ? Số tiếp theo là ?`, `Dãy ${start * 2}, ${start * 4}, ${start * 8}, ? Số tiếp theo là ?`, `Điền số: ? + ${start + step} = ${start + 3 * step}.`, `Hãy nói quy luật của dãy đầu bằng một câu, không chỉ nêu đáp số.`] };
    },
    () => {
      const total = 120 + (seed % 8) * 25;
      const red = 35 + (seed % 6) * 10;
      return { title: "Đọc dữ liệu và kiểm tra hợp lý", hint: "Đọc đúng đơn vị, ước lượng khoảng kết quả trước rồi mới cộng trừ.", questions: [`Một bảng ghi tổng ${total} quyển sách; đã mượn ${red} quyển. Còn lại ? quyển.`, `Nếu hôm sau mượn thêm ${red - 10} quyển, tổng số đã mượn là ? quyển.`, `Số sách còn lại có thể lớn hơn ${total} không?`, `Một bạn nói ${total} − ${red} gần bằng 20. Dùng ước lượng để giải thích vì sao nhận xét đó hợp lý hay không.`] };
    }
  ];
  const group = families[(week + dayIndex) % families.length]();
  group.questions[group.questions.length - 1] = `Tuần ${week}, ${group.questions[group.questions.length - 1]}`;
  return { day, ...group };
}

function createMentalMathContinuation() {
  return {
    title: "Kho tính nhẩm tiếp nối",
    intro: "Từ tuần 7, Bách tiếp tục 8–10 phút mỗi buổi với số mới và chiến lược phù hợp mạch Toán đang học. Không quay lại một bộ bài cố định.",
    weeks: Array.from({ length: 30 }, (_, index) => {
      const week = index + 7;
      const groups = Array.from({ length: 5 }, (_, dayIndex) => createContinuationMentalGroup(week, dayIndex));
      return {
        week,
        title: `Tăng tốc tuần ${week}`,
        focus: `Năm buổi tính nhẩm có chiến lược, xen kẽ số học, biểu thức, đo lường và suy luận phù hợp lớp 4.`,
        groups
      };
    })
  };
}

function addAdvancedLayer(days, item, subject, weekNumber, phase) {
  const advanced = subject === "math"
    ? phase.id === "P1"
      ? "Nâng tầm học sinh giỏi: sau bài chính, giải thêm một biến thể có số lớn hơn hoặc hai bước; ưu tiên tìm cách nhẩm gọn, nhưng phải giải thích và kiểm tra."
      : phase.id === "P6"
        ? "Nâng tầm: viết lời giải ngắn như đang trình bày trong đề thi chọn học sinh giỏi; nêu điều kiện, không bỏ trường hợp và thử một cách kiểm tra độc lập."
        : "Nâng tầm học sinh giỏi: giải một bài biến thể khó hơn, tìm cách thứ hai hoặc chứng minh vì sao cách làm không bỏ sót; không tăng số lượng bài một cách máy móc."
    : phase.id === "P1"
      ? "Nâng tầm: giữ yêu cầu diễn đạt ở mức lớp 4 khá–giỏi; thêm một chi tiết có chủ đích, một câu chuyển ý và tự giải thích lựa chọn, không viết bài mẫu rập khuôn."
      : "Nâng tầm: tạo một phiên bản có góc nhìn hoặc cách diễn đạt riêng, giữ mạch logic; chọn một câu giàu hình ảnh nhưng vẫn tự nhiên, đúng tuổi.";
  return days.map((rawDay, index) => {
    const day = subject === "math" ? normalizeMathDay(rawDay, weekNumber, index) : rawDay;
    return {
      ...day,
      advanced: day.advanced || `${advanced} (nấc ${index + 1}/6 của tuần ${weekNumber})`,
      concrete: createConcreteLesson(item, subject, weekNumber, index, day)
    };
  });
}

function resolveDailyPlan(item, subject, weekNumber, phase) {
  const bridge = window.BACH_CURRICULUM.bridgeDailyLessons[subject].find(x => x.week === weekNumber);
  const detailed = bridge || createDetailedDailyPlan(item, subject, weekNumber, phase);
  return {
    dailyPlan: addAdvancedLayer(detailed.days, item, subject, weekNumber, phase),
    textbookAlignment: detailed.alignment
  };
}

// Lesson fields definition for curriculum
window.BACH_CURRICULUM.lessonFields = LESSON_FIELDS;
window.BACH_CURRICULUM.phases.forEach(phase => {
  const firstWeek = Number(phase.weeks.split("–")[0]);
  phase.math = phase.math.map((item, index) => ({
    ...item,
    lesson: createLessonPlan(item, "math", firstWeek + index, phase),
    ...resolveDailyPlan(item, "math", firstWeek + index, phase)
  }));
  phase.vietnamese = phase.vietnamese.map((item, index) => ({
    ...item,
    lesson: createLessonPlan(item, "vietnamese", firstWeek + index, phase),
    ...resolveDailyPlan(item, "vietnamese", firstWeek + index, phase)
  }));
});
window.BACH_CURRICULUM.mentalMathContinuation = createMentalMathContinuation();

