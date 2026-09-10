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

// Tự động chuẩn hóa và khởi tạo qua CurriculumFactory
const factory = (typeof window !== "undefined" && window.BACH_CURRICULUM_FACTORY) ||
  (typeof globalThis !== "undefined" && globalThis.BACH_CURRICULUM_FACTORY);
if (factory && typeof factory.materializeCurriculum === "function") {
  factory.materializeCurriculum(window.BACH_CURRICULUM);
}
