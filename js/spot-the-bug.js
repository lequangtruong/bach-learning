// js/spot-the-bug.js - Mini-game "AI Thám Tử Bắt Lỗi Sai" (Spot The Bug)
// Ngân hàng 120 bẫy sai lầm kinh điển bám sát 12 chuyên đề chuẩn mực Toán Lớp 4

export const BUG_TOPICS = [
  {
    "name": "Thứ tự thực hiện phép tính & Dấu ngoặc",
    "count": 10
  },
  {
    "name": "Phép cộng, phép trừ & Bù trừ số lớn",
    "count": 10
  },
  {
    "name": "Phép nhân & Đặt tính nhân số có nhiều chữ số",
    "count": 10
  },
  {
    "name": "Phép chia có dư & Quên số 0 ở thương",
    "count": 10
  },
  {
    "name": "Tìm thành phần chưa biết (Tìm x)",
    "count": 10
  },
  {
    "name": "Trung bình cộng & Toán suy luận",
    "count": 10
  },
  {
    "name": "Bài toán Tổng – Hiệu kinh điển",
    "count": 10
  },
  {
    "name": "Bài toán Tỉ số (Tổng – Tỉ và Hiệu – Tỉ)",
    "count": 10
  },
  {
    "name": "Chu vi, Diện tích & Đổi đơn vị đo",
    "count": 10
  },
  {
    "name": "Phân số (Khái niệm, So sánh, Rút gọn & Phép tính)",
    "count": 10
  },
  {
    "name": "Tìm phân số của một số & Bài toán thực tế",
    "count": 10
  },
  {
    "name": "Toán thực tế (Trồng cây, Thời gian, Tỉ lệ nghịch)",
    "count": 10
  }
];

export const BUG_CASES = [
  {
    "id": "bug-1",
    "index": 0,
    "topic": "Thứ tự thực hiện phép tính & Dấu ngoặc",
    "difficulty": 1,
    "title": "Vụ án 1: Bẫy Cộng trước nhân sau trong biểu thức hỗn hợp",
    "problem": "Tính giá trị của biểu thức: 4 500 + 1 500 × 4 − 3 200 : 8",
    "steps": [
      {
        "num": 1,
        "text": "Thực hiện lần lượt từ trái sang phải: 4 500 + 1 500 = 6 000",
        "isBug": true
      },
      {
        "num": 2,
        "text": "Nhân tiếp với 4: 6 000 × 4 = 24 000",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Thực hiện phép chia: 3 200 : 8 = 400",
        "isBug": false
      },
      {
        "num": 4,
        "text": "Lấy 24 000 − 400 = 23 600",
        "isBug": false
      }
    ],
    "bugExplanation": "Bẫy thứ tự ưu tiên! Trong biểu thức có cả phép cộng, trừ, nhân, chia, bắt buộc phải thực hiện 'Nhân chia trước, Cộng trừ sau': 1 500 × 4 = 6 000 và 3 200 : 8 = 400 trước. Sau đó mới tính 4 500 + 6 000 − 400 = 10 100!",
    "correctSolution": "4 500 + 1 500 × 4 − 3 200 : 8 = 4 500 + 6 000 − 400 = 10 100"
  },
  {
    "id": "bug-2",
    "index": 1,
    "topic": "Thứ tự thực hiện phép tính & Dấu ngoặc",
    "difficulty": 1,
    "title": "Vụ án 2: Bẫy Phép cộng làm trước phép trừ cùng cấp",
    "problem": "Tính giá trị của biểu thức: 15 400 − 4 800 + 3 200",
    "steps": [
      {
        "num": 1,
        "text": "Thực hiện phép cộng phía sau trước: 4 800 + 3 200 = 8 000",
        "isBug": true
      },
      {
        "num": 2,
        "text": "Lấy số ban đầu trừ đi kết quả: 15 400 − 8 000 = 7 400",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Kết luận giá trị biểu thức là 7 400",
        "isBug": false
      }
    ],
    "bugExplanation": "Bẫy thứ tự phép tính cùng cấp! Biểu thức chỉ gồm phép cộng và phép trừ thì PHẢI THỰC HIỆN LẦN LƯỢT TỪ TRÁI SANG PHẢI: 15 400 − 4 800 = 10 600, sau đó 10 600 + 3 200 = 13 800!",
    "correctSolution": "15 400 − 4 800 + 3 200 = 10 600 + 3 200 = 13 800"
  },
  {
    "id": "bug-3",
    "index": 2,
    "topic": "Thứ tự thực hiện phép tính & Dấu ngoặc",
    "difficulty": 1,
    "title": "Vụ án 3: Bẫy Nhân trước chia sau khi cùng mức ưu tiên",
    "problem": "Tính giá trị của biểu thức: 36 000 : 60 × 5",
    "steps": [
      {
        "num": 1,
        "text": "Thực hiện phép nhân phía sau trước: 60 × 5 = 300",
        "isBug": true
      },
      {
        "num": 2,
        "text": "Lấy 36 000 chia cho 300: 36 000 : 300 = 120",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Kết luận giá trị biểu thức là 120",
        "isBug": false
      }
    ],
    "bugExplanation": "Phép nhân và phép chia có cùng mức độ ưu tiên! Khi biểu thức chỉ có nhân và chia, phải làm TỪ TRÁI SANG PHẢI: 36 000 : 60 = 600, sau đó lấy 600 × 5 = 3 000!",
    "correctSolution": "36 000 : 60 × 5 = 600 × 5 = 3 000"
  },
  {
    "id": "bug-4",
    "index": 3,
    "topic": "Thứ tự thực hiện phép tính & Dấu ngoặc",
    "difficulty": 2,
    "title": "Vụ án 4: Bẫy Trừ trước nhân sau trong dấu ngoặc đơn",
    "problem": "Tính giá trị: 25 000 + 12 000 : (150 − 50 × 2)",
    "steps": [
      {
        "num": 1,
        "text": "Trong ngoặc, tính từ trái sang phải: 150 − 50 = 100",
        "isBug": true
      },
      {
        "num": 2,
        "text": "Nhân tiếp với 2: 100 × 2 = 200",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Lấy 12 000 chia cho kết quả trong ngoặc: 12 000 : 200 = 60",
        "isBug": false
      },
      {
        "num": 4,
        "text": "Cộng số ban đầu: 25 000 + 60 = 25 060",
        "isBug": false
      }
    ],
    "bugExplanation": "Ngay cả TRONG DẤU NGOẶC ĐƠN vẫn phải tuân thủ nghiêm ngặt 'Nhân chia trước, Cộng trừ sau'! Trong ngoặc: 50 × 2 = 100 trước, rồi mới lấy 150 − 100 = 50. Sau đó 12 000 : 50 = 240, và 25 000 + 240 = 25 240!",
    "correctSolution": "25 000 + 12 000 : (150 − 100) = 25 000 + 12 000 : 50 = 25 240"
  },
  {
    "id": "bug-5",
    "index": 4,
    "topic": "Thứ tự thực hiện phép tính & Dấu ngoặc",
    "difficulty": 2,
    "title": "Vụ án 5: Bẫy Nhân thừa số vào số ngoài ngoặc trước",
    "problem": "Tính giá trị: 48 000 − 8 000 × (24 : 8 + 2)",
    "steps": [
      {
        "num": 1,
        "text": "Tính trong ngoặc đơn: 24 : 8 = 3; 3 + 2 = 5",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Lấy 48 000 − 8 000 = 40 000 trước",
        "isBug": true
      },
      {
        "num": 3,
        "text": "Lấy 40 000 nhân với 5: 40 000 × 5 = 200 000",
        "isBug": false
      }
    ],
    "bugExplanation": "Sau khi tính trong ngoặc ra 5, biểu thức còn lại là 48 000 − 8 000 × 5. Phải thực hiện PHÉP NHÂN TRƯỚC: 8 000 × 5 = 40 000, sau đó 48 000 − 40 000 = 8 000!",
    "correctSolution": "48 000 − 8 000 × 5 = 48 000 − 40 000 = 8 000"
  },
  {
    "id": "bug-6",
    "index": 5,
    "topic": "Thứ tự thực hiện phép tính & Dấu ngoặc",
    "difficulty": 2,
    "title": "Vụ án 6: Bẫy Nhân trước chia sau ngoài dấu ngoặc",
    "problem": "Tính giá trị của biểu thức: (35 000 + 15 000) : 25 × 4",
    "steps": [
      {
        "num": 1,
        "text": "Tính trong ngoặc đơn: 35 000 + 15 000 = 50 000",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Nhân 25 với 4 trước: 25 × 4 = 100",
        "isBug": true
      },
      {
        "num": 3,
        "text": "Lấy 50 000 chia cho 100: 50 000 : 100 = 500",
        "isBug": false
      }
    ],
    "bugExplanation": "Sau khi tính ngoặc được 50 000, ta có phép tính 50 000 : 25 × 4. Đây là chuỗi phép chia và nhân cùng cấp nên PHẢI TÍNH TỪ TRÁI SANG PHẢI: 50 000 : 25 = 2 000, sau đó 2 000 × 4 = 8 000!",
    "correctSolution": "(35 000 + 15 000) : 25 × 4 = 50 000 : 25 × 4 = 2 000 × 4 = 8 000"
  },
  {
    "id": "bug-7",
    "index": 6,
    "topic": "Thứ tự thực hiện phép tính & Dấu ngoặc",
    "difficulty": 3,
    "title": "Vụ án 7: Bẫy Thứ tự ưu tiên trong biểu thức 4 phép tính",
    "problem": "Tính giá trị: 120 000 − 40 000 : 8 × 6 + 15 000",
    "steps": [
      {
        "num": 1,
        "text": "Thực hiện cụm nhân chia: lấy 8 × 6 = 48",
        "isBug": true
      },
      {
        "num": 2,
        "text": "Lấy 40 000 chia 48 thấy không chia hết",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Thấy 40 000 không chia hết cho 48 nên không tìm được giá trị",
        "isBug": false
      }
    ],
    "bugExplanation": "Ở cụm 40 000 : 8 × 6, phép chia và phép nhân cùng cấp ưu tiên nên phải tính từ trái sang phải: 40 000 : 8 = 5 000, rồi lấy 5 000 × 6 = 30 000. Biểu thức đúng: 120 000 − 30 000 + 15 000 = 105 000!",
    "correctSolution": "120 000 − 40 000 : 8 × 6 + 15 000 = 120 000 − 5 000 × 6 + 15 000 = 105 000"
  },
  {
    "id": "bug-8",
    "index": 7,
    "topic": "Thứ tự thực hiện phép tính & Dấu ngoặc",
    "difficulty": 3,
    "title": "Vụ án 8: Bẫy Bỏ ngoặc khi chia cho một tích",
    "problem": "Tính bằng cách thuận tiện: 72 000 : (9 × 8)",
    "steps": [
      {
        "num": 1,
        "text": "Bỏ ngoặc đơn: 72 000 : 9 × 8",
        "isBug": true
      },
      {
        "num": 2,
        "text": "Thực hiện từ trái sang phải: 72 000 : 9 = 8 000",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Lấy 8 000 × 8 = 64 000",
        "isBug": false
      }
    ],
    "bugExplanation": "Quy tắc chia một số cho một tích: a : (b × c) = a : b : c! Muốn chia cho (9 × 8), ta phải chia liên tiếp cho 9 rồi chia tiếp cho 8: 72 000 : 9 : 8 = 8 000 : 8 = 1 000!",
    "correctSolution": "72 000 : (9 × 8) = 72 000 : 9 : 8 = 8 000 : 8 = 1 000"
  },
  {
    "id": "bug-9",
    "index": 8,
    "topic": "Thứ tự thực hiện phép tính & Dấu ngoặc",
    "difficulty": 4,
    "title": "Vụ án 9: Bẫy Trừ đi một hiệu có dấu ngoặc",
    "problem": "Tính giá trị của biểu thức: 85 000 − (42 000 − 18 000)",
    "steps": [
      {
        "num": 1,
        "text": "Bỏ ngoặc giữ nguyên phép trừ: 85 000 − 42 000 − 18 000",
        "isBug": true
      },
      {
        "num": 2,
        "text": "Lấy 85 000 − 42 000 = 43 000",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Lấy 43 000 − 18 000 = 25 000",
        "isBug": false
      }
    ],
    "bugExplanation": "Quy tắc trừ một hiệu: a − (b − c) = a − b + c! Khi tính trong ngoặc: 42 000 − 18 000 = 24 000, sau đó 85 000 − 24 000 = 61 000. Bỏ ngoặc sai làm kết quả bị hụt mất 36 000 đơn vị!",
    "correctSolution": "85 000 − (42 000 − 18 000) = 85 000 − 24 000 = 61 000"
  },
  {
    "id": "bug-10",
    "index": 9,
    "topic": "Thứ tự thực hiện phép tính & Dấu ngoặc",
    "difficulty": 4,
    "title": "Vụ án 10: Bẫy Thực hiện phép trừ trước phép chia",
    "problem": "Tính giá trị của biểu thức: 96 000 − 36 000 : 12 + 4 000",
    "steps": [
      {
        "num": 1,
        "text": "Thực hiện phép trừ trước: 96 000 − 36 000 = 60 000",
        "isBug": true
      },
      {
        "num": 2,
        "text": "Lấy 60 000 chia cho 12: 60 000 : 12 = 5 000",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Cộng thêm 4 000: 5 000 + 4 000 = 9 000",
        "isBug": false
      }
    ],
    "bugExplanation": "Phải thực hiện phép chia trước! Tính 36 000 : 12 = 3 000 trước. Sau đó thực hiện cộng trừ từ trái sang phải: 96 000 − 3 000 + 4 000 = 97 000!",
    "correctSolution": "96 000 − 36 000 : 12 + 4 000 = 96 000 − 3 000 + 4 000 = 97 000"
  },
  {
    "id": "bug-11",
    "index": 10,
    "topic": "Phép cộng, phép trừ & Bù trừ số lớn",
    "difficulty": 1,
    "title": "Vụ án 11: Bẫy Mượn nhớ không trả ở hàng chục nghìn",
    "problem": "Đặt tính rồi tính hiệu: 475 832 − 198 475",
    "steps": [
      {
        "num": 1,
        "text": "Hàng đơn vị: 12 − 5 = 7, viết 7 nhớ 1. Hàng chục: 3 − 8 không được, 13 − 8 = 5, viết 5 nhớ 1",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Hàng trăm: 8 − 5 = 3, viết 3. Hàng nghìn: 15 − 8 = 7, viết 7 nhớ 1",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Hàng chục nghìn: 7 mượn 1 thành 17, lấy 17 − 9 = 8, viết 8 (quên trả nhớ 1 vào số trừ)",
        "isBug": true
      },
      {
        "num": 4,
        "text": "Hàng trăm nghìn: 4 − 1 = 3 (quên bớt 1 đã mượn), viết 3. Ra 387 357",
        "isBug": false
      }
    ],
    "bugExplanation": "Quên trả số nhớ khi trừ số có 6 chữ số! Ở hàng chục nghìn, số trừ 9 thêm 1 nhớ thành 10, lấy 17 − 10 = 7. Hàng trăm nghìn 4 bớt 1 còn 3, 3 − 1 = 2. Kết quả chuẩn xác là 277 357!",
    "correctSolution": "475 832 − 198 475 = 277 357"
  },
  {
    "id": "bug-12",
    "index": 11,
    "topic": "Phép cộng, phép trừ & Bù trừ số lớn",
    "difficulty": 1,
    "title": "Vụ án 12: Bẫy Làm tròn bù trừ trong phép cộng số lớn",
    "problem": "Tính nhẩm nhanh tổng: 199 998 + 45 670",
    "steps": [
      {
        "num": 1,
        "text": "Làm tròn 199 998 thành 200 000 (mượn thêm 2 đơn vị)",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Lấy 200 000 + 45 670 = 245 670",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Vì đã mượn 2 nên ta cộng tiếp 2: 245 670 + 2 = 245 672",
        "isBug": true
      }
    ],
    "bugExplanation": "Mượn thì phải TRẢ (trừ đi), không được cộng thêm! Đã mượn 2 để làm tròn thành 200 000 thì sau khi cộng xong bắt buộc phải bớt 2: 245 670 − 2 = 245 668!",
    "correctSolution": "199 998 + 45 670 = 200 000 + 45 670 − 2 = 245 668"
  },
  {
    "id": "bug-13",
    "index": 12,
    "topic": "Phép cộng, phép trừ & Bù trừ số lớn",
    "difficulty": 1,
    "title": "Vụ án 13: Bẫy Trừ qua 5 chữ số 0 liên tiếp",
    "problem": "Đặt tính rồi tính: 1 000 000 − 345 820",
    "steps": [
      {
        "num": 1,
        "text": "Hàng đơn vị: 0 − 0 = 0. Hàng chục: 10 − 2 = 8, nhớ 1",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Hàng trăm: 0 nhớ 1 thành 1, lấy 10 − 9 = 1, nhớ 1",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Hàng nghìn: coi chữ số 0 nguyên vẹn là 10, lấy 10 − 5 = 5, viết 5",
        "isBug": true
      },
      {
        "num": 4,
        "text": "Hàng chục nghìn: lấy 9 − 4 = 5. Hàng trăm nghìn: lấy 9 − 3 = 6. Ra kết quả 655 180",
        "isBug": false
      }
    ],
    "bugExplanation": "Khi trừ qua chuỗi số 0 liên tiếp, sau khi cho mượn thì các chữ số 0 ở hàng nghìn chỉ còn là 9! Hàng nghìn có số nhớ 1 thêm vào 5 là 6, lấy 9 − 6 = 3 (không phải 5)! Kết quả đúng là 654 180!",
    "correctSolution": "1 000 000 − 345 820 = 654 180"
  },
  {
    "id": "bug-14",
    "index": 13,
    "topic": "Phép cộng, phép trừ & Bù trừ số lớn",
    "difficulty": 2,
    "title": "Vụ án 14: Bẫy Quên số nhớ sang hàng chục nghìn",
    "problem": "Đặt tính rồi tính: 567 890 + 284 560",
    "steps": [
      {
        "num": 1,
        "text": "Hàng đơn vị: 0 + 0 = 0. Hàng chục: 9 + 6 = 15, viết 5 nhớ 1",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Hàng trăm: 8 + 5 = 13, thêm 1 bằng 14, viết 4 nhớ 1. Hàng nghìn: 7 + 4 = 11, thêm 1 bằng 12, viết 2 nhớ 1",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Hàng chục nghìn: 6 + 8 = 14, viết 4 (quên cộng thêm 1 nhớ)",
        "isBug": true
      },
      {
        "num": 4,
        "text": "Hàng trăm nghìn: 5 + 2 = 7, viết 7. Kết quả ra 742 450",
        "isBug": false
      }
    ],
    "bugExplanation": "Quên số nhớ từ hàng nghìn sang hàng chục nghìn! 6 + 8 = 14, thêm 1 nhớ phải bằng 15, viết 5 nhớ 1. Hàng trăm nghìn 5 + 2 = 7 thêm 1 nhớ bằng 8. Kết quả đúng là 852 450!",
    "correctSolution": "567 890 + 284 560 = 852 450"
  },
  {
    "id": "bug-15",
    "index": 14,
    "topic": "Phép cộng, phép trừ & Bù trừ số lớn",
    "difficulty": 2,
    "title": "Vụ án 15: Bẫy Bù trừ trong phép trừ số lớn",
    "problem": "Tính nhẩm nhanh hiệu: 485 000 − 199 000",
    "steps": [
      {
        "num": 1,
        "text": "Làm tròn số trừ 199 000 thành 200 000 (trừ nhiều hơn 1 000 đơn vị)",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Lấy 485 000 − 200 000 = 285 000",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Vì đã trừ số lớn hơn nên trừ tiếp 1 000: 285 000 − 1 000 = 284 000",
        "isBug": true
      }
    ],
    "bugExplanation": "Trừ quá tay thì phải CỘNG BÙ LẠI! Trừ 200 000 là đã trừ quá 1 000 đơn vị so với đề bài, nên phải cộng trả lại 1 000: 285 000 + 1 000 = 286 000!",
    "correctSolution": "485 000 − 199 000 = 485 000 − 200 000 + 1 000 = 286 000"
  },
  {
    "id": "bug-16",
    "index": 15,
    "topic": "Phép cộng, phép trừ & Bù trừ số lớn",
    "difficulty": 2,
    "title": "Vụ án 16: Bẫy Đặt tính lệch cột số khác chữ số",
    "problem": "Đặt tính rồi tính: 850 430 − 32 514",
    "steps": [
      {
        "num": 1,
        "text": "Đặt chữ số 3 của 32 514 thẳng cột với chữ số 8 của 850 430 (thẳng từ trái sang)",
        "isBug": true
      },
      {
        "num": 2,
        "text": "Trừ lần lượt từng cột từ phải sang trái",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Nhận được kết quả hơn 500 000",
        "isBug": false
      }
    ],
    "bugExplanation": "Bẫy đặt lệch cột giá trị theo hàng! 32 514 là số có 5 chữ số (hàng cao nhất là chục nghìn), còn 850 430 có 6 chữ số (hàng trăm nghìn). Bắt buộc phải đặt thẳng cột TỪ PHẢI SANG TRÁI (hàng đơn vị thẳng đơn vị). Đặt lệch cột biến 32 514 thành 325 140!",
    "correctSolution": "850 430 − 32 514 = 817 916"
  },
  {
    "id": "bug-17",
    "index": 16,
    "topic": "Phép cộng, phép trừ & Bù trừ số lớn",
    "difficulty": 3,
    "title": "Vụ án 17: Bẫy Tách số để cộng nhẩm số lớn",
    "problem": "Tính nhẩm nhanh: 399 990 + 254 600",
    "steps": [
      {
        "num": 1,
        "text": "Tách 399 990 = 400 000 − 10",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Lấy 400 000 + 254 600 = 654 600",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Lấy 654 600 + 10 = 654 610",
        "isBug": true
      }
    ],
    "bugExplanation": "399 990 là 400 000 BỚT 10. Khi lấy 400 000 cộng với 254 600 được 654 600 thì phải BỚT 10: 654 600 − 10 = 654 590!",
    "correctSolution": "399 990 + 254 600 = 400 000 + 254 600 − 10 = 654 590"
  },
  {
    "id": "bug-18",
    "index": 17,
    "topic": "Phép cộng, phép trừ & Bù trừ số lớn",
    "difficulty": 3,
    "title": "Vụ án 18: Bẫy Trừ nhẩm tròn chục nghìn",
    "problem": "Tính nhẩm nhanh: 750 000 − 498 000",
    "steps": [
      {
        "num": 1,
        "text": "Làm tròn 498 000 thành 500 000",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Lấy 750 000 − 500 000 = 250 000",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Trừ tiếp phần bù: 250 000 − 2 000 = 248 000",
        "isBug": true
      }
    ],
    "bugExplanation": "Trừ 500 000 là đã trừ lố 2 000 đơn vị. Phải CỘNG TRẢ LẠI 2 000 đơn vị: 250 000 + 2 000 = 252 000!",
    "correctSolution": "750 000 − 498 000 = 750 000 − 500 000 + 2 000 = 252 000"
  },
  {
    "id": "bug-19",
    "index": 18,
    "topic": "Phép cộng, phép trừ & Bù trừ số lớn",
    "difficulty": 4,
    "title": "Vụ án 19: Bẫy Ghép cặp tính nhanh tính chất kết hợp",
    "problem": "Tính nhanh: 125 400 + 384 500 + 74 600 + 115 500",
    "steps": [
      {
        "num": 1,
        "text": "Ghép cặp tròn số: (125 400 + 74 600) + (384 500 + 115 500)",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Tính nhẩm: 125 400 + 74 600 = 200 000",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Tính nhẩm: 384 500 + 115 500 = 490 000 (nhẩm quên nhớ 1 từ 500 + 500)",
        "isBug": true
      },
      {
        "num": 4,
        "text": "Cộng lại: 200 000 + 490 000 = 690 000",
        "isBug": false
      }
    ],
    "bugExplanation": "Quên số nhớ khi ghép cặp! 384 500 + 115 500: 500 + 500 = 1 000, 384 000 + 115 000 = 499 000, thêm 1 000 phải bằng 500 000 tròn! Tổng đúng là 200 000 + 500 000 = 700 000!",
    "correctSolution": "125 400 + 384 500 + 74 600 + 115 500 = 200 000 + 500 000 = 700 000"
  },
  {
    "id": "bug-20",
    "index": 19,
    "topic": "Phép cộng, phép trừ & Bù trừ số lớn",
    "difficulty": 4,
    "title": "Vụ án 20: Bẫy Mượn ở hàng có chữ số 0 trong phép trừ",
    "problem": "Đặt tính rồi tính: 604 050 − 278 090",
    "steps": [
      {
        "num": 1,
        "text": "0 − 0 = 0; 15 − 9 = 6 nhớ 1. 0 thêm 1 bằng 1, 10 − 1 = 9 nhớ 1",
        "isBug": false
      },
      {
        "num": 2,
        "text": "8 thêm 1 bằng 9; 14 − 9 = 5 nhớ 1",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Hàng chục nghìn: lấy 7 − 0 = 7, viết 7",
        "isBug": true
      },
      {
        "num": 4,
        "text": "Hàng trăm nghìn: 6 − 2 = 4. Kết luận kết quả là 475 960",
        "isBug": false
      }
    ],
    "bugExplanation": "Số bị trừ là 0, không được lấy số trừ 7 trừ đi 0! Phải mượn 1 trăm nghìn thành 10 chục nghìn, thêm 1 nhớ vào số trừ 7 thành 8, lấy 10 − 8 = 2. Hàng trăm nghìn 6 bớt 1 còn 5, 5 − 2 = 3. Đúng là 325 960!",
    "correctSolution": "604 050 − 278 090 = 325 960"
  },
  {
    "id": "bug-21",
    "index": 20,
    "topic": "Phép nhân & Đặt tính nhân số có nhiều chữ số",
    "difficulty": 1,
    "title": "Vụ án 21: Bẫy Quên lùi cột tích riêng thứ hai",
    "problem": "Đặt tính rồi tính: 2 435 × 24",
    "steps": [
      {
        "num": 1,
        "text": "Tích riêng thứ nhất: 2 435 × 4 = 9 740",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Tích riêng thứ hai: 2 435 × 2 = 4 870, viết thẳng cột dưới 9 740",
        "isBug": true
      },
      {
        "num": 3,
        "text": "Cộng thẳng hai tích riêng: 9 740 + 4 870 = 14 610",
        "isBug": false
      }
    ],
    "bugExplanation": "Quên lùi 1 cột ở tích riêng thứ hai! Chữ số 2 là 2 chục (20). Do đó tích riêng thứ hai phải viết lùi sang bên trái 1 cột (tức 48 700). 9 740 + 48 700 = 58 440!",
    "correctSolution": "2 435 × 24 = 9 740 + 48 700 = 58 440"
  },
  {
    "id": "bug-22",
    "index": 21,
    "topic": "Phép nhân & Đặt tính nhân số có nhiều chữ số",
    "difficulty": 1,
    "title": "Vụ án 22: Bẫy Thừa số có chữ số 0 ở hàng chục",
    "problem": "Đặt tính rồi tính: 1 425 × 203",
    "steps": [
      {
        "num": 1,
        "text": "Tích riêng thứ nhất: 1 425 × 3 = 4 275",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Tích riêng thứ hai: 1 425 × 2 = 2 850, viết lùi sang bên trái 1 cột so với tích 1",
        "isBug": true
      },
      {
        "num": 3,
        "text": "Cộng hai tích riêng lại ra kết quả 32 775",
        "isBug": false
      }
    ],
    "bugExplanation": "Bẫy nhân với số có chữ số 0 ở giữa! Chữ số 2 ở hàng trăm, nên tích riêng thứ hai là 2 trăm. Bắt buộc phải viết LÙI SANG BÊN TRÁI 2 CỘT (thẳng cột hàng trăm)! Đúng phải là 4 275 + 285 000 = 289 275!",
    "correctSolution": "1 425 × 203 = 4 275 + 285 000 = 289 275"
  },
  {
    "id": "bug-23",
    "index": 22,
    "topic": "Phép nhân & Đặt tính nhân số có nhiều chữ số",
    "difficulty": 1,
    "title": "Vụ án 23: Bẫy Nhân nhẩm 11 nhớ sang hàng nghìn",
    "problem": "Tính nhẩm: 4 875 × 11",
    "steps": [
      {
        "num": 1,
        "text": "Viết chữ số hàng đơn vị là 5",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Cộng từng cặp: 5 + 7 = 12 viết 2 nhớ 1; 7 + 8 = 15 thêm 1 bằng 16 viết 6 nhớ 1",
        "isBug": false
      },
      {
        "num": 3,
        "text": "4 + 8 = 12 thêm 1 bằng 13, viết 3 nhưng quên cộng 1 nhớ vào chữ số đầu 4",
        "isBug": true
      },
      {
        "num": 4,
        "text": "Ghi kết quả là 43 625",
        "isBug": false
      }
    ],
    "bugExplanation": "Quên cộng 1 nhớ vào chữ số đầu tiên! Chữ số đầu 4 phải thêm 1 nhớ từ 4 + 8 = 12 (+1 = 13) để thành 5! Kết quả chuẩn xác là 53 625!",
    "correctSolution": "4 875 × 11 = 53 625"
  },
  {
    "id": "bug-24",
    "index": 23,
    "topic": "Phép nhân & Đặt tính nhân số có nhiều chữ số",
    "difficulty": 2,
    "title": "Vụ án 24: Bẫy Nhân phân phối với số 101",
    "problem": "Tính nhanh: 485 × 101",
    "steps": [
      {
        "num": 1,
        "text": "Tách 101 = 100 + 1",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Áp dụng tính chất phân phối: 485 × 100 + 1",
        "isBug": true
      },
      {
        "num": 3,
        "text": "Tính 48 500 + 1 = 48 501",
        "isBug": false
      }
    ],
    "bugExplanation": "Quên nhân thừa số 485 với 1! Tính chất phân phối phép nhân đối với phép cộng: a × (b + c) = a × b + a × c! Phải là 485 × 100 + 485 × 1 = 48 500 + 485 = 48 985!",
    "correctSolution": "485 × 101 = 485 × 100 + 485 × 1 = 48 985"
  },
  {
    "id": "bug-25",
    "index": 24,
    "topic": "Phép nhân & Đặt tính nhân số có nhiều chữ số",
    "difficulty": 2,
    "title": "Vụ án 25: Bẫy Tách thừa số tính nhanh nhân nhầm phép cộng",
    "problem": "Tính nhanh: 125 × 32 × 25",
    "steps": [
      {
        "num": 1,
        "text": "Tách 32 = 8 × 4",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Ghép cặp: (125 × 8) + (4 × 25)",
        "isBug": true
      },
      {
        "num": 3,
        "text": "Tính 1 000 + 100 = 1 100",
        "isBug": false
      }
    ],
    "bugExplanation": "Phép nhân có tính chất kết hợp, giữa các cụm phải là DẤU NHÂN, không phải dấu cộng! Đúng phải là (125 × 8) × (4 × 25) = 1 000 × 100 = 100 000!",
    "correctSolution": "125 × 32 × 25 = (125 × 8) × (25 × 4) = 1 000 × 100 = 100 000"
  },
  {
    "id": "bug-26",
    "index": 25,
    "topic": "Phép nhân & Đặt tính nhân số có nhiều chữ số",
    "difficulty": 2,
    "title": "Vụ án 26: Bẫy Nhân hai tích rồi mới cộng trong bài phân phối",
    "problem": "Tính thuận tiện: 245 × 36 + 245 × 64",
    "steps": [
      {
        "num": 1,
        "text": "Nhận thấy 245 là thừa số chung, đặt ra ngoài: 245 × (36 + 64)",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Tính trong ngoặc: 36 + 64 = 100",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Thực hiện phép nhân: 245 × 100 = 2 450 (quên viết một chữ số 0)",
        "isBug": true
      }
    ],
    "bugExplanation": "Nhân một số với 100 thì phải thêm HAI CHỮ SỐ 0 vào bên phải số đó! 245 × 100 = 24 500, không phải 2 450!",
    "correctSolution": "245 × (36 + 64) = 245 × 100 = 24 500"
  },
  {
    "id": "bug-27",
    "index": 26,
    "topic": "Phép nhân & Đặt tính nhân số có nhiều chữ số",
    "difficulty": 3,
    "title": "Vụ án 27: Bẫy Nhân nhẩm số có 5 chữ số với 5",
    "problem": "Tính nhẩm: 24 680 × 5",
    "steps": [
      {
        "num": 1,
        "text": "Lấy 24 680 chia cho 2: 24 680 : 2 = 12 340",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Cộng thêm 10 vào kết quả: 12 340 + 10 = 12 350",
        "isBug": true
      },
      {
        "num": 3,
        "text": "Kết luận kết quả là 12 350",
        "isBug": false
      }
    ],
    "bugExplanation": "Quy tắc nhân một số với 5: Ta lấy số đó chia cho 2 rồi NHÂN VỚI 10 (thêm một chữ số 0 vào sau), KHÔNG PHẢI CỘNG 10! 12 340 × 10 = 123 400!",
    "correctSolution": "24 680 × 5 = 24 680 : 2 × 10 = 123 400"
  },
  {
    "id": "bug-28",
    "index": 27,
    "topic": "Phép nhân & Đặt tính nhân số có nhiều chữ số",
    "difficulty": 3,
    "title": "Vụ án 28: Bẫy Quên cộng nhớ khi nhân số 4 chữ số",
    "problem": "Đặt tính rồi tính: 3 516 × 42",
    "steps": [
      {
        "num": 1,
        "text": "Tích riêng 1: 3 516 × 2 = 7 032",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Tích riêng 2: 4 × 6 = 24 viết 4 nhớ 2; 4 × 1 = 4 (quên cộng 2 nhớ) viết 4",
        "isBug": true
      },
      {
        "num": 3,
        "text": "4 × 5 = 20 viết 0 nhớ 2; 4 × 3 = 12 thêm 2 là 14. Ra tích 2 là 140 440",
        "isBug": false
      },
      {
        "num": 4,
        "text": "Cộng hai tích riêng: 7 032 + 140 440 = 147 472",
        "isBug": false
      }
    ],
    "bugExplanation": "Quên cộng 2 nhớ từ hàng đơn vị sang hàng chục của tích riêng 2! 4 × 1 = 4, thêm 2 nhớ phải bằng 6! Tích riêng 2 chuẩn là 14 064 (lùi 1 cột thành 140 640). Tổng: 7 032 + 140 640 = 147 672!",
    "correctSolution": "3 516 × 42 = 7 032 + 140 640 = 147 672"
  },
  {
    "id": "bug-29",
    "index": 28,
    "topic": "Phép nhân & Đặt tính nhân số có nhiều chữ số",
    "difficulty": 4,
    "title": "Vụ án 29: Bẫy Tách thừa số nhân với 125",
    "problem": "Tính nhanh: 48 × 125",
    "steps": [
      {
        "num": 1,
        "text": "Tách 48 = 6 × 8",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Nhân kết hợp: 6 × (8 × 125) = 6 × 1 000",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Lấy 6 + 1 000 = 1 006",
        "isBug": true
      }
    ],
    "bugExplanation": "Phải làm phép NHÂN, không được làm phép cộng! 6 × 1 000 = 6 000, không phải 1 006!",
    "correctSolution": "48 × 125 = 6 × (8 × 125) = 6 × 1 000 = 6 000"
  },
  {
    "id": "bug-30",
    "index": 29,
    "topic": "Phép nhân & Đặt tính nhân số có nhiều chữ số",
    "difficulty": 4,
    "title": "Vụ án 30: Bẫy Nhân một số với 99",
    "problem": "Tính nhanh: 350 × 99",
    "steps": [
      {
        "num": 1,
        "text": "Tách 99 = 100 − 1",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Áp dụng phân phối: 350 × 100 − 99",
        "isBug": true
      },
      {
        "num": 3,
        "text": "Tính: 35 000 − 99 = 34 901",
        "isBug": false
      }
    ],
    "bugExplanation": "Áp dụng sai tính chất phân phối! a × (b − c) = a × b − a × c. Do đó phải là 350 × 100 − 350 × 1 = 35 000 − 350 = 34 650!",
    "correctSolution": "350 × 99 = 350 × 100 − 350 = 34 650"
  },
  {
    "id": "bug-31",
    "index": 30,
    "topic": "Phép chia có dư & Quên số 0 ở thương",
    "difficulty": 2,
    "title": "Vụ án 31: Bẫy Quên chữ số 0 ở giữa thương khi chia số có 5 chữ số",
    "problem": "Đặt tính rồi tính phép chia: 35 280 : 35",
    "steps": [
      {
        "num": 1,
        "text": "Lấy 35 chia 35 được 1, viết 1; 1 × 35 = 35; 35 − 35 = 0",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Hạ 2, vì 2 không chia được 35 nên hạ tiếp 8 được 28; vẫn không chia được nên hạ 0 được 280; 280 : 35 = 8",
        "isBug": true
      },
      {
        "num": 3,
        "text": "Ghi thương là 18. Kết luận: 35 280 : 35 = 18",
        "isBug": false
      }
    ],
    "bugExplanation": "Bẫy kinh điển quên chữ số 0 ở thương! Khi hạ 2 xuống mà 2 < 35, bắt buộc phải viết 0 vào thương (2 : 35 = 0 dư 2). Sau đó hạ 8 được 28 < 35 lại phải viết thêm 0 vào thương! Cuối cùng hạ 0 được 280 : 35 = 8. Thương đúng phải là 1 008 (thử lại: 1 008 × 35 = 35 280)!",
    "correctSolution": "35 280 : 35 = 1 008"
  },
  {
    "id": "bug-32",
    "index": 31,
    "topic": "Phép chia có dư & Quên số 0 ở thương",
    "difficulty": 2,
    "title": "Vụ án 32: Bẫy Quên số 0 ở hàng chục của thương khi chia cho số 2 chữ số",
    "problem": "Đặt tính rồi tính: 84 168 : 42",
    "steps": [
      {
        "num": 1,
        "text": "84 : 42 = 2, viết 2; 2 × 42 = 84; 84 − 84 = 0",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Hạ 1 không chia được cho 42, hạ tiếp 6 được 16; vẫn không chia được nên hạ tiếp 8 được 168; 168 : 42 = 4, viết 4",
        "isBug": true
      },
      {
        "num": 3,
        "text": "Ghi thương là 24",
        "isBug": false
      }
    ],
    "bugExplanation": "Mỗi lần hạ một chữ số xuống đều PHẢI TẠO RA MỘT CHỮ SỐ Ở THƯƠNG! Hạ 1 chia 42 được 0, viết 0 vào thương. Hạ 6 được 16 chia 42 được 0, viết 0 vào thương. Hạ 8 được 168 : 42 = 4. Thương đúng là 2 004!",
    "correctSolution": "84 168 : 42 = 2 004"
  },
  {
    "id": "bug-33",
    "index": 32,
    "topic": "Phép chia có dư & Quên số 0 ở thương",
    "difficulty": 3,
    "title": "Vụ án 33: Bẫy Số dư lớn hơn hoặc bằng số chia",
    "problem": "Thực hiện phép chia: 45 890 : 45",
    "steps": [
      {
        "num": 1,
        "text": "45 : 45 = 1 viết 1; hạ 8 chia 45 được 0 viết 0; hạ 9 được 89",
        "isBug": false
      },
      {
        "num": 2,
        "text": "89 : 45 ước lượng được 1, viết 1; 89 − 45 = 44; hạ 0 được 440",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Ước lượng 440 : 45 được 8; 8 × 45 = 360; 440 − 360 = 80. Kết luận thương 1018 dư 80",
        "isBug": true
      }
    ],
    "bugExplanation": "Quy tắc cốt lõi: SỐ DƯ LUÔN PHẢI NHỎ HƠN SỐ CHIA! Số dư 80 > số chia 45 chứng tỏ thương 8 chưa tối đa. Phải là thương 9: 9 × 45 = 405; 440 − 405 = 35. Phép chia đúng: 1 019 dư 35!",
    "correctSolution": "45 890 : 45 = 1 019 (dư 35)"
  },
  {
    "id": "bug-34",
    "index": 33,
    "topic": "Phép chia có dư & Quên số 0 ở thương",
    "difficulty": 3,
    "title": "Vụ án 34: Bẫy Xác định số dư sau khi cùng bớt số 0 tận cùng",
    "problem": "Thực hiện phép chia có dư: 28 500 : 400",
    "steps": [
      {
        "num": 1,
        "text": "Cùng gạch bỏ hai chữ số 0 tận cùng ở cả số bị chia và số chia: 285 : 4",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Thực hiện chia: 285 : 4 = 71 dư 1",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Kết luận phép chia ban đầu có thương là 71 và số dư là 1",
        "isBug": true
      }
    ],
    "bugExplanation": "Bẫy số dư khi rút gọn số 0! Khi gạch bỏ hai chữ số 0 (chia cho 100) thì thương không đổi nhưng SỐ DƯ PHẢI NHÂN LẠI VỚI 100! Số dư đúng là 1 × 100 = 100. (Thử lại: 71 × 400 + 100 = 28 400 + 100 = 28 500)!",
    "correctSolution": "28 500 : 400 = 71 (dư 100)"
  },
  {
    "id": "bug-35",
    "index": 34,
    "topic": "Phép chia có dư & Quên số 0 ở thương",
    "difficulty": 3,
    "title": "Vụ án 35: Bẫy Quên chữ số 0 ở thương khi chia số tròn chục",
    "problem": "Đặt tính rồi tính: 125 450 : 25",
    "steps": [
      {
        "num": 1,
        "text": "125 : 25 = 5, viết 5; 5 × 25 = 125; 125 − 125 = 0",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Hạ 4, vì 4 < 25 nên hạ tiếp 5 được 45; 45 : 25 = 1 dư 20",
        "isBug": true
      },
      {
        "num": 3,
        "text": "Hạ 0 được 200; 200 : 25 = 8, viết 8",
        "isBug": false
      },
      {
        "num": 4,
        "text": "Ghi thương là 518",
        "isBug": false
      }
    ],
    "bugExplanation": "Hạ 4 chia 25 được 0, bắt buộc phải viết 0 vào thương trước khi hạ 5! Nếu thương là 518 thì 518 × 25 chỉ bằng 12 950 (thiếu hơn 110 000 đơn vị). Thương chuẩn phải là 5 018!",
    "correctSolution": "125 450 : 25 = 5 018"
  },
  {
    "id": "bug-36",
    "index": 35,
    "topic": "Phép chia có dư & Quên số 0 ở thương",
    "difficulty": 4,
    "title": "Vụ án 36: Bẫy Gạch số 0 không đều nhau ở hai vế chia",
    "problem": "Tính giá trị của phép chia: 720 000 : 8 000",
    "steps": [
      {
        "num": 1,
        "text": "Gạch bỏ cả 4 chữ số 0 ở 720 000 và 3 chữ số 0 ở 8 000",
        "isBug": true
      },
      {
        "num": 2,
        "text": "Được phép tính 72 : 8 = 9",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Kết luận thương là 9",
        "isBug": false
      }
    ],
    "bugExplanation": "Chỉ được gạch bỏ CÙNG MỘT SỐ LƯỢNG CHỮ SỐ 0 ở cả hai số! Số chia 8 000 có 3 chữ số 0 thì chỉ được gạch đúng 3 chữ số 0 ở 720 000: 720 : 8 = 90!",
    "correctSolution": "720 000 : 8 000 = 720 : 8 = 90"
  },
  {
    "id": "bug-37",
    "index": 36,
    "topic": "Phép chia có dư & Quên số 0 ở thương",
    "difficulty": 4,
    "title": "Vụ án 37: Bẫy Kiểm tra phép chia có dư",
    "problem": "Kiểm tra xem phép tính sau đúng hay sai: 1 485 : 24 = 61 dư 21",
    "steps": [
      {
        "num": 1,
        "text": "Nhận xét số dư 21 < 24 là hợp lệ",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Kiểm tra lại bằng cách lấy: 61 × 24 − 21",
        "isBug": true
      },
      {
        "num": 3,
        "text": "Thấy ra 1 443 khác 1 485 nên kết luận phép chia sai",
        "isBug": false
      }
    ],
    "bugExplanation": "Công thức kiểm tra phép chia có dư: Số bị chia = Thương × Số chia + SỐ DƯ! Phải làm PHÉP CỘNG số dư: 61 × 24 + 21 = 1 464 + 21 = 1 485! Phép chia ban đầu là hoàn toàn đúng!",
    "correctSolution": "Số bị chia = Thương × Số chia + Số dư = 61 × 24 + 21 = 1 485"
  },
  {
    "id": "bug-38",
    "index": 37,
    "topic": "Phép chia có dư & Quên số 0 ở thương",
    "difficulty": 4,
    "title": "Vụ án 38: Bẫy Quên hai chữ số 0 ở thương khi chia số 5 chữ số",
    "problem": "Tính: 61 224 : 6",
    "steps": [
      {
        "num": 1,
        "text": "6 : 6 = 1, viết 1",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Hạ 1 không chia được nên hạ tiếp 2 được 12; 12 : 6 = 2, viết 2",
        "isBug": true
      },
      {
        "num": 3,
        "text": "Hạ 2 không chia được hạ tiếp 4 được 24; 24 : 6 = 4, viết 4",
        "isBug": false
      },
      {
        "num": 4,
        "text": "Ghi thương là 124",
        "isBug": false
      }
    ],
    "bugExplanation": "Mỗi lần hạ một chữ số mà không đủ chia đều phải viết 0 vào thương! Hạ 1 chia 6 được 0; hạ 2 chia 6 được 0. Thương đúng phải là 10 204 (10 204 × 6 = 61 224)!",
    "correctSolution": "61 224 : 6 = 10 204"
  },
  {
    "id": "bug-39",
    "index": 38,
    "topic": "Phép chia có dư & Quên số 0 ở thương",
    "difficulty": 5,
    "title": "Vụ án 39: Bẫy Quên chữ số 0 tận cùng của thương",
    "problem": "Đặt tính rồi tính: 48 360 : 12",
    "steps": [
      {
        "num": 1,
        "text": "48 : 12 = 4, viết 4; 4 × 12 = 48; 48 − 48 = 0",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Hạ 3 chia 12 được 0, viết 0; hạ 6 được 36; 36 : 12 = 3, viết 3",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Chữ số 0 cuối cùng không chia được nên bỏ qua, ghi thương là 403",
        "isBug": true
      }
    ],
    "bugExplanation": "Chữ số 0 tận cùng ở hàng đơn vị hạ xuống chia 12 được 0, BẮT BUỘC PHẢI VIẾT 0 VÀO CUỐI THƯƠNG thành 4 030! Nếu là 403 thì 403 × 12 = 4 836 (sai lệch 10 lần)!",
    "correctSolution": "48 360 : 12 = 4 030"
  },
  {
    "id": "bug-40",
    "index": 39,
    "topic": "Phép chia có dư & Quên số 0 ở thương",
    "difficulty": 5,
    "title": "Vụ án 40: Bẫy Rút gọn số 0 rồi cộng sai số dư",
    "problem": "Một trường học có 3 450 quyển vở chia đều vào các thùng, mỗi thùng 50 quyển. Hỏi được bao nhiêu thùng và còn thừa mấy quyển?",
    "steps": [
      {
        "num": 1,
        "text": "Cùng bớt một chữ số 0: 345 : 5",
        "isBug": false
      },
      {
        "num": 2,
        "text": "345 : 5 = 69 dư 0",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Kết luận vì ban đầu có số 0 nên số dư là 10 quyển",
        "isBug": true
      }
    ],
    "bugExplanation": "345 chia hết cho 5 (dư 0) nên 3 450 chia hết cho 50! Số dư là 0 quyển, chia được đúng 69 thùng và không còn thừa quyển nào!",
    "correctSolution": "3 450 : 50 = 69 (thùng), dư 0 quyển"
  },
  {
    "id": "bug-41",
    "index": 40,
    "topic": "Tìm thành phần chưa biết (Tìm x)",
    "difficulty": 2,
    "title": "Vụ án 41: Bẫy Tính chất phân phối trong bài toán tìm x",
    "problem": "Tìm x, biết: x × 38 + x × 62 = 45 000",
    "steps": [
      {
        "num": 1,
        "text": "Đặt thừa số x ra ngoài: x × (38 + 62) = 45 000",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Tính tổng trong ngoặc: x × 100 = 45 000",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Muốn tìm thừa số x, ta lấy: x = 45 000 × 100 = 4 500 000",
        "isBug": true
      }
    ],
    "bugExplanation": "x là THỪA SỐ CHƯA BIẾT! Muốn tìm thừa số chưa biết, ta lấy TÍCH CHIA CHO thừa số đã biết: x = 45 000 : 100 = 450! Làm phép nhân khiến kết quả tăng gấp vạn lần!",
    "correctSolution": "x × 100 = 45 000 → x = 45 000 : 100 = 450"
  },
  {
    "id": "bug-42",
    "index": 41,
    "topic": "Tìm thành phần chưa biết (Tìm x)",
    "difficulty": 2,
    "title": "Vụ án 42: Bẫy Tìm số bị chia trong phương trình có ngoặc",
    "problem": "Tìm x, biết: (x − 3 450) : 25 = 140",
    "steps": [
      {
        "num": 1,
        "text": "Cụm (x − 3 450) đóng vai trò là số bị chia: x − 3 450 = 140 × 25",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Tính 140 × 25 = 3 500",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Tìm số bị trừ x: x = 3 500 − 3 450 = 50",
        "isBug": true
      }
    ],
    "bugExplanation": "x là SỐ BỊ TRỪ! Muốn tìm số bị trừ, ta phải lấy HIỆU CỘNG VỚI SỐ TRỪ: x = 3 500 + 3 450 = 6 950! Nếu x = 50 thì 50 − 3 450 không trừ được trong tập số tự nhiên!",
    "correctSolution": "x − 3 450 = 3 500 → x = 3 500 + 3 450 = 6 950"
  },
  {
    "id": "bug-43",
    "index": 42,
    "topic": "Tìm thành phần chưa biết (Tìm x)",
    "difficulty": 3,
    "title": "Vụ án 43: Bẫy Tìm số trừ là một tích",
    "problem": "Tìm x, biết: 18 500 − x × 35 = 2 400",
    "steps": [
      {
        "num": 1,
        "text": "Coi cụm (x × 35) là số trừ: x × 35 = 18 500 − 2 400",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Tính hiệu: x × 35 = 16 100",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Tìm x: x = 16 100 × 35",
        "isBug": true
      }
    ],
    "bugExplanation": "x là thừa số chưa biết trong phép nhân x × 35 = 16 100. Phải lấy TÍCH CHIA CHO THỪA SỐ ĐÃ BIẾT: x = 16 100 : 35 = 460!",
    "correctSolution": "x × 35 = 16 100 → x = 16 100 : 35 = 460"
  },
  {
    "id": "bug-44",
    "index": 43,
    "topic": "Tìm thành phần chưa biết (Tìm x)",
    "difficulty": 3,
    "title": "Vụ án 44: Bẫy Thứ tự tìm x trong biểu thức chia và cộng",
    "problem": "Tìm x, biết: x : 45 + 2 150 = 3 200",
    "steps": [
      {
        "num": 1,
        "text": "Lấy 45 + 2 150 trước, biến đổi thành x : 2 195 = 3 200",
        "isBug": true
      },
      {
        "num": 2,
        "text": "Tìm x = 3 200 × 2 195",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Tính ra x = 7 024 000 (kết quả tăng vọt)",
        "isBug": false
      }
    ],
    "bugExplanation": "Cụm (x : 45) là một số hạng chưa biết! Bắt buộc phải tìm cụm đó trước: x : 45 = 3 200 − 2 150 = 1 050. Sau đó tìm số bị chia x = 1 050 × 45 = 47 250!",
    "correctSolution": "x : 45 = 3 200 − 2 150 = 1 050 → x = 1 050 × 45 = 47 250"
  },
  {
    "id": "bug-45",
    "index": 44,
    "topic": "Tìm thành phần chưa biết (Tìm x)",
    "difficulty": 3,
    "title": "Vụ án 45: Bẫy Dấu trong phép tính trừ hai tích có x",
    "problem": "Tìm x, biết: x × 125 − x × 25 = 45 000",
    "steps": [
      {
        "num": 1,
        "text": "Đặt thừa số x ra ngoài: x × (125 + 25) = 45 000",
        "isBug": true
      },
      {
        "num": 2,
        "text": "Tính trong ngoặc: x × 150 = 45 000",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Tìm x = 45 000 : 150 = 300",
        "isBug": false
      }
    ],
    "bugExplanation": "Đây là PHÉP TRỪ hai tích! Phải giữ nguyên dấu trừ trong ngoặc: x × (125 − 25) = 45 000. Tức là x × 100 = 45 000, do đó x = 45 000 : 100 = 450!",
    "correctSolution": "x × (125 − 25) = 45 000 → x × 100 = 45 000 → x = 450"
  },
  {
    "id": "bug-46",
    "index": 45,
    "topic": "Tìm thành phần chưa biết (Tìm x)",
    "difficulty": 4,
    "title": "Vụ án 46: Bẫy Tìm số chia có chứa ẩn x",
    "problem": "Tìm x, biết: 14 400 : (x × 6) = 40",
    "steps": [
      {
        "num": 1,
        "text": "Cụm (x × 6) là số chia: x × 6 = 14 400 : 40",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Tính 14 400 : 40 = 360",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Tìm x: x = 360 × 6 = 2 160",
        "isBug": true
      }
    ],
    "bugExplanation": "x × 6 = 360 thì x là thừa số chưa biết! Phải lấy 360 : 6 = 60, không phải nhân 6!",
    "correctSolution": "x × 6 = 360 → x = 360 : 6 = 60"
  },
  {
    "id": "bug-47",
    "index": 46,
    "topic": "Tìm thành phần chưa biết (Tìm x)",
    "difficulty": 4,
    "title": "Vụ án 47: Bẫy Tìm số bị chia trong phép chia có dư",
    "problem": "Tìm số tự nhiên x, biết: x : 18 = 240 (dư 15)",
    "steps": [
      {
        "num": 1,
        "text": "Muốn tìm số bị chia x, ta lấy: x = 240 × 18 − 15",
        "isBug": true
      },
      {
        "num": 2,
        "text": "Tính 240 × 18 = 4 320",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Lấy 4 320 − 15 = 4 305",
        "isBug": false
      }
    ],
    "bugExplanation": "Công thức tìm số bị chia trong phép chia có dư: Số bị chia = Thương × Số chia + SỐ DƯ! Bắt buộc phải CỘNG số dư: x = 240 × 18 + 15 = 4 320 + 15 = 4 335!",
    "correctSolution": "x = 240 × 18 + 15 = 4 320 + 15 = 4 335"
  },
  {
    "id": "bug-48",
    "index": 47,
    "topic": "Tìm thành phần chưa biết (Tìm x)",
    "difficulty": 4,
    "title": "Vụ án 48: Bẫy Nhân phân phối ngoài ngoặc khi tìm x",
    "problem": "Tìm x, biết: (x + 5 200) × 12 = 144 000",
    "steps": [
      {
        "num": 1,
        "text": "Cụm (x + 5 200) là thừa số chưa biết: x + 5 200 = 144 000 : 12",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Tính: 144 000 : 12 = 12 000",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Tìm số hạng x: x = 12 000 + 5 200 = 17 200",
        "isBug": true
      }
    ],
    "bugExplanation": "x là số hạng chưa biết trong tổng x + 5 200 = 12 000! Muốn tìm số hạng chưa biết, ta lấy TỔNG TRỪ ĐI số hạng đã biết: x = 12 000 − 5 200 = 6 800!",
    "correctSolution": "x + 5 200 = 12 000 → x = 12 000 − 5 200 = 6 800"
  },
  {
    "id": "bug-49",
    "index": 48,
    "topic": "Tìm thành phần chưa biết (Tìm x)",
    "difficulty": 5,
    "title": "Vụ án 49: Bẫy Quên số hạng x là x × 1 khi đặt thừa số chung",
    "problem": "Tìm x, biết: x × 48 + x × 51 + x = 32 000",
    "steps": [
      {
        "num": 1,
        "text": "Đặt thừa số chung: x × (48 + 51) = 32 000",
        "isBug": true
      },
      {
        "num": 2,
        "text": "Tính: x × 99 = 32 000",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Thấy 32 000 không chia hết cho 99",
        "isBug": false
      }
    ],
    "bugExplanation": "Bẫy quên hạng tử x = x × 1! Khi đặt x ra ngoài, trong ngoặc phải là (48 + 51 + 1) = 100! Phương trình đúng: x × 100 = 32 000 → x = 32 000 : 100 = 320!",
    "correctSolution": "x × (48 + 51 + 1) = 32 000 → x × 100 = 32 000 → x = 320"
  },
  {
    "id": "bug-50",
    "index": 49,
    "topic": "Tìm thành phần chưa biết (Tìm x)",
    "difficulty": 5,
    "title": "Vụ án 50: Bẫy Tìm số chia x trong bài toán hai tầng",
    "problem": "Tìm x, biết: 85 000 − 72 000 : x = 82 600",
    "steps": [
      {
        "num": 1,
        "text": "Cụm (72 000 : x) là số trừ: 72 000 : x = 85 000 − 82 600",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Tính hiệu: 72 000 : x = 2 400",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Tìm số chia x: x = 72 000 × 2 400",
        "isBug": true
      }
    ],
    "bugExplanation": "x là SỐ CHIA! Muốn tìm số chia, ta lấy số bị chia CHIA CHO THƯƠNG: x = 72 000 : 2 400 = 30!",
    "correctSolution": "72 000 : x = 2 400 → x = 72 000 : 2 400 = 30"
  },
  {
    "id": "bug-51",
    "index": 50,
    "topic": "Trung bình cộng & Toán suy luận",
    "difficulty": 2,
    "title": "Vụ án 51: Bẫy Trung bình cộng của 4 xe chở hàng khối lượng lớn",
    "problem": "Một đội xe chở hàng gồm 4 xe: Xe thứ nhất chở 4 500 kg, xe thứ hai chở 4 800 kg, xe thứ ba chở 5 200 kg, xe thứ tư chở 4 700 kg. Hỏi trung bình mỗi xe chở bao nhiêu ki-lô-gam hàng?",
    "steps": [
      {
        "num": 1,
        "text": "Tính tổng khối lượng 4 xe chở: 4 500 + 4 800 + 5 200 + 4 700 = 19 200 (kg)",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Trung bình mỗi xe chở là: 19 200 : 3 = 6 400 (kg)",
        "isBug": true
      },
      {
        "num": 3,
        "text": "Đáp số: 6 400 kg",
        "isBug": false
      }
    ],
    "bugExplanation": "Đội có 4 XE HÀNG thì phải CHIA CHO 4, không phải chia cho 3! Trung bình mỗi xe chở: 19 200 : 4 = 4 800 kg!",
    "correctSolution": "Trung bình mỗi xe = 19 200 : 4 = 4 800 (kg)"
  },
  {
    "id": "bug-52",
    "index": 51,
    "topic": "Trung bình cộng & Toán suy luận",
    "difficulty": 2,
    "title": "Vụ án 52: Bẫy Trung bình cộng hai nhóm xe không đều nhau",
    "problem": "Một đội vận tải có 3 xe lớn, mỗi xe chở 3 500 kg gạo và 2 xe nhỏ, mỗi xe chở 2 000 kg gạo. Hỏi trung bình mỗi xe của đội chở bao nhiêu ki-lô-gam gạo?",
    "steps": [
      {
        "num": 1,
        "text": "Tính tổng số xe của cả đội: 3 + 2 = 5 (xe)",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Lấy trung bình cộng số gạo của 1 xe lớn và 1 xe nhỏ: (3 500 + 2 000) : 2 = 2 750 (kg)",
        "isBug": true
      },
      {
        "num": 3,
        "text": "Kết luận trung bình mỗi xe chở 2 750 kg gạo",
        "isBug": false
      }
    ],
    "bugExplanation": "Bẫy lấy trung bình cộng của hai đơn giá! Số xe lớn và xe nhỏ không bằng nhau (3 xe lớn và 2 xe nhỏ = 5 xe). Phải tính tổng số gạo: 3 × 3 500 + 2 × 2 000 = 10 500 + 4 000 = 14 500 kg. Sau đó chia cho tổng 5 xe: 14 500 : 5 = 2 900 kg!",
    "correctSolution": "Tổng gạo = 14 500 kg. TBC = 14 500 : 5 = 2 900 (kg)"
  },
  {
    "id": "bug-53",
    "index": 52,
    "topic": "Trung bình cộng & Toán suy luận",
    "difficulty": 3,
    "title": "Vụ án 53: Bẫy Bài toán nhiều hơn mức trung bình cộng cả 4 bạn",
    "problem": "Ba bạn có số bi: Nam có 45 viên, Hải có 35 viên, Minh có 40 viên. Bách có số bi nhiều hơn trung bình cộng của cả 4 bạn là 6 viên. Hỏi Bách có bao nhiêu viên bi?",
    "steps": [
      {
        "num": 1,
        "text": "Tính trung bình cộng số bi của 3 bạn: (45 + 35 + 40) : 3 = 40 (viên)",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Số bi của Bách là: 40 + 6 = 46 (viên)",
        "isBug": true
      },
      {
        "num": 3,
        "text": "Đáp số: 46 viên bi",
        "isBug": false
      }
    ],
    "bugExplanation": "Đề bài cho Bách hơn TBC CỦA CẢ 4 BẠN, không phải hơn TBC của 3 bạn! Gọi TBC của cả 4 bạn là T. Ta có: 3 × T = Tổng 3 bạn + 6 = 120 + 6 = 126 → T = 126 : 3 = 42 viên. Số bi của Bách = 42 + 6 = 48 viên!",
    "correctSolution": "TBC 4 bạn = (45 + 35 + 40 + 6) : 3 = 42 viên. Bách có: 42 + 6 = 48 (viên)"
  },
  {
    "id": "bug-54",
    "index": 53,
    "topic": "Trung bình cộng & Toán suy luận",
    "difficulty": 3,
    "title": "Vụ án 54: Bẫy Trung bình cộng của 5 số lẻ liên tiếp",
    "problem": "Trung bình cộng của 5 số lẻ liên tiếp là 2 025. Tìm số lớn nhất trong 5 số đó.",
    "steps": [
      {
        "num": 1,
        "text": "Vì có 5 số lẻ liên tiếp nên số ở chính giữa (số thứ ba) chính là trung bình cộng: 2 025",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Hai số lẻ liên tiếp hơn kém nhau 1 đơn vị",
        "isBug": true
      },
      {
        "num": 3,
        "text": "Số lớn nhất (số thứ năm) là: 2 025 + 2 = 2 027",
        "isBug": false
      }
    ],
    "bugExplanation": "Hai số lẻ liên tiếp hơn kém nhau 2 ĐƠN VỊ, không phải 1 đơn vị! Từ số thứ 3 đến số thứ 5 cách nhau 2 khoảng cách = 2 × 2 = 4 đơn vị. Số lớn nhất là: 2 025 + 4 = 2 029!",
    "correctSolution": "Số thứ 3 = 2 025. Số lớn nhất = 2 025 + 2 × 2 = 2 029"
  },
  {
    "id": "bug-55",
    "index": 54,
    "topic": "Trung bình cộng & Toán suy luận",
    "difficulty": 3,
    "title": "Vụ án 55: Bẫy Ít hơn trung bình cộng cả 3 lớp",
    "problem": "Lớp 4A trồng được 180 cây, lớp 4B trồng được 220 cây. Lớp 4C trồng được ít hơn mức trung bình cộng của cả 3 lớp là 20 cây. Hỏi lớp 4C trồng được bao nhiêu cây?",
    "steps": [
      {
        "num": 1,
        "text": "Tổng số cây lớp 4A và 4B: 180 + 220 = 400 (cây)",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Trung bình cộng của cả 3 lớp là: (400 + 20) : 2 = 210 (cây)",
        "isBug": true
      },
      {
        "num": 3,
        "text": "Lớp 4C trồng được: 210 − 20 = 190 (cây)",
        "isBug": false
      }
    ],
    "bugExplanation": "Lớp 4C ÍT HƠN trung bình cộng, tức là phần thiếu 20 cây phải trừ khỏi tổng của 4A và 4B! TBC cả 3 lớp = (400 − 20) : 2 = 190 cây. Số cây lớp 4C = 190 − 20 = 170 cây!",
    "correctSolution": "TBC 3 lớp = (400 − 20) : 2 = 190 cây. Lớp 4C = 190 − 20 = 170 (cây)"
  },
  {
    "id": "bug-56",
    "index": 55,
    "topic": "Trung bình cộng & Toán suy luận",
    "difficulty": 4,
    "title": "Vụ án 56: Bẫy Tìm số điểm bài thi để nâng điểm trung bình",
    "problem": "Qua 4 bài kiểm tra Toán, Bách đạt điểm trung bình là 9 điểm. Hỏi ở bài kiểm tra thứ năm, Bách cần đạt mấy điểm để điểm trung bình của cả 5 bài là 9.2 (tức tổng là 46 điểm)?",
    "steps": [
      {
        "num": 1,
        "text": "Tổng số điểm của 4 bài kiểm tra đầu là: 9 × 4 = 36 (điểm)",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Tổng số điểm của cả 5 bài kiểm tra cần đạt là: 46 điểm",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Điểm bài thứ năm cần đạt: 46 − 36 = 10 điểm (nhưng ghi nhầm thành 9 điểm)",
        "isBug": true
      }
    ],
    "bugExplanation": "Bách cần đạt đúng 46 − 36 = 10 điểm tuyệt đối ở bài thứ năm để đạt trung bình 9.2 điểm!",
    "correctSolution": "Điểm bài 5 = 46 − 36 = 10 (điểm)"
  },
  {
    "id": "bug-57",
    "index": 56,
    "topic": "Trung bình cộng & Toán suy luận",
    "difficulty": 4,
    "title": "Vụ án 57: Bẫy Trung bình cộng không đổi khi chuyển nội bộ",
    "problem": "Ba kho thóc có trung bình mỗi kho chứa 45 tấn thóc. Nếu chuyển 5 tấn thóc từ kho A sang kho B thì trung bình cộng số thóc của 3 kho sẽ:",
    "steps": [
      {
        "num": 1,
        "text": "Tổng số tấn thóc ban đầu của 3 kho là: 45 × 3 = 135 (tấn)",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Kho A giảm 5 tấn nên coi tổng số thóc của 3 kho giảm 5 tấn thành 130 tấn",
        "isBug": true
      },
      {
        "num": 3,
        "text": "Trung bình mỗi kho giảm đi: 5 : 3 tấn",
        "isBug": false
      }
    ],
    "bugExplanation": "Chuyển thóc từ kho A sang kho B là chuyển NỘI BỘ, TỔNG SỐ THÓC CỦA CẢ 3 KHO KHÔNG HỀ THAY ĐỔI! Do đó, số thóc trung bình cộng của 3 kho VẪN GIỮ NGUYÊN là 45 tấn!",
    "correctSolution": "Tổng số thóc không đổi nên Trung bình cộng vẫn là 45 tấn"
  },
  {
    "id": "bug-58",
    "index": 57,
    "topic": "Trung bình cộng & Toán suy luận",
    "difficulty": 4,
    "title": "Vụ án 58: Bẫy Nhầm trung bình cộng là tổng của hai số",
    "problem": "Trung bình cộng của hai số là 1 450, biết số lớn hơn số bé 300 đơn vị. Tìm số lớn.",
    "steps": [
      {
        "num": 1,
        "text": "Coi 1 450 là tổng của hai số",
        "isBug": true
      },
      {
        "num": 2,
        "text": "Số lớn là: (1 450 + 300) : 2 = 875",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Đáp số: 875",
        "isBug": false
      }
    ],
    "bugExplanation": "1 450 mới chỉ là TRUNG BÌNH CỘNG! Muốn tìm TỔNG của hai số, ta phải nhân với 2: Tổng = 1 450 × 2 = 2 900. Sau đó số lớn = (2 900 + 300) : 2 = 1 600!",
    "correctSolution": "Tổng = 1 450 × 2 = 2 900. Số lớn = (2 900 + 300) : 2 = 1 600"
  },
  {
    "id": "bug-59",
    "index": 58,
    "topic": "Trung bình cộng & Toán suy luận",
    "difficulty": 5,
    "title": "Vụ án 59: Bẫy Trung bình cộng của 5 tổ sản xuất",
    "problem": "Một nhà máy có 5 tổ công nhân: Tổ 1, 2, 3 mỗi tổ sản xuất được 1 200 sản phẩm; tổ 4 và tổ 5 mỗi tổ sản xuất được 1 450 sản phẩm. Hỏi trung bình mỗi tổ sản xuất được bao nhiêu sản phẩm?",
    "steps": [
      {
        "num": 1,
        "text": "Tính tổng sản phẩm 3 tổ đầu: 1 200 × 3 = 3 600 (sản phẩm)",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Tính tổng sản phẩm 2 tổ sau: 1 450 × 2 = 2 900 (sản phẩm)",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Tổng sản phẩm cả 5 tổ: 3 600 + 2 900 = 6 500 (sản phẩm)",
        "isBug": false
      },
      {
        "num": 4,
        "text": "Trung bình mỗi tổ sản xuất: 6 500 : 2 = 3 250 (sản phẩm)",
        "isBug": true
      }
    ],
    "bugExplanation": "Có TẤT CẢ 5 TỔ thì phải CHIA CHO 5! 6 500 : 5 = 1 300 sản phẩm/tổ, không thể chia cho 2 nhóm!",
    "correctSolution": "TBC = 6 500 : 5 = 1 300 (sản phẩm)"
  },
  {
    "id": "bug-60",
    "index": 59,
    "topic": "Trung bình cộng & Toán suy luận",
    "difficulty": 5,
    "title": "Vụ án 60: Bẫy Tuổi cô giáo và cả lớp học",
    "problem": "Tuổi trung bình của cô giáo và 30 học sinh là 11 tuổi. Nếu không tính cô giáo thì tuổi trung bình của 30 học sinh là 10 tuổi. Hỏi cô giáo bao nhiêu tuổi?",
    "steps": [
      {
        "num": 1,
        "text": "Tổng số người gồm cô giáo và 30 học sinh là: 30 + 1 = 31 (người)",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Tổng số tuổi của cô và cả lớp: 11 × 31 = 341 (tuổi)",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Tổng số tuổi của 30 học sinh: 10 × 30 = 300 (tuổi)",
        "isBug": false
      },
      {
        "num": 4,
        "text": "Tuổi cô giáo là: 341 − 300 = 31 (tuổi) (ghi nhầm phép tính thành 341 : 11 = 31)",
        "isBug": true
      }
    ],
    "bugExplanation": "Tuổi của cô giáo bằng Tổng số tuổi của cô và trò TRỪ ĐI Tổng số tuổi của 30 học sinh: 341 − 300 = 41 tuổi! (341 − 300 = 41, không phải 31)!",
    "correctSolution": "Tuổi cô giáo = 341 − 300 = 41 (tuổi)"
  },
  {
    "id": "bug-61",
    "index": 60,
    "topic": "Bài toán Tổng – Hiệu kinh điển",
    "difficulty": 2,
    "title": "Vụ án 61: Bẫy Công thức tìm số bé trong bài toán hai kho thóc",
    "problem": "Hai kho thóc chứa tất cả 145 tấn thóc. Kho A chứa nhiều hơn kho B là 25 tấn. Tính số thóc ở kho B (số bé).",
    "steps": [
      {
        "num": 1,
        "text": "Áp dụng công thức tìm số bé: Số bé = (Tổng + Hiệu) : 2",
        "isBug": true
      },
      {
        "num": 2,
        "text": "Tính: (145 + 25) : 2 = 170 : 2 = 85 (tấn)",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Kết luận kho B có 85 tấn thóc",
        "isBug": false
      }
    ],
    "bugExplanation": "Nhầm công thức Số lớn sang Số bé! Số bé = (TỔNG − HIỆU) : 2. Kho B = (145 − 25) : 2 = 120 : 2 = 60 tấn! 85 tấn là số thóc kho A (số lớn)!",
    "correctSolution": "Kho B (số bé) = (145 − 25) : 2 = 60 (tấn)"
  },
  {
    "id": "bug-62",
    "index": 61,
    "topic": "Bài toán Tổng – Hiệu kinh điển",
    "difficulty": 2,
    "title": "Vụ án 62: Bẫy Lấy chu vi làm tổng trong bài toán khu đất",
    "problem": "Một khu đất hình chữ nhật có chu vi 360m, chiều dài hơn chiều rộng 40m. Tìm chiều rộng khu đất.",
    "steps": [
      {
        "num": 1,
        "text": "Tổng chiều dài và chiều rộng là: 360m",
        "isBug": true
      },
      {
        "num": 2,
        "text": "Chiều rộng là: (360 − 40) : 2 = 160 (m)",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Chiều dài là: 160 + 40 = 200 (m)",
        "isBug": false
      }
    ],
    "bugExplanation": "Chu vi là (Dài + Rộng) × 2! TỔNG chiều dài và chiều rộng chỉ là NỬA CHU VI: 360 : 2 = 180m! Chiều rộng = (180 − 40) : 2 = 70m!",
    "correctSolution": "Nửa chu vi = 180m. Chiều rộng = (180 − 40) : 2 = 70 (m)"
  },
  {
    "id": "bug-63",
    "index": 62,
    "topic": "Bài toán Tổng – Hiệu kinh điển",
    "difficulty": 3,
    "title": "Vụ án 63: Bẫy Hiệu hai số chẵn liên tiếp",
    "problem": "Hai số chẵn liên tiếp có tổng bằng 2 454. Tìm số lớn.",
    "steps": [
      {
        "num": 1,
        "text": "Vì là hai số liên tiếp nên hiệu hai số là: 1 đơn vị",
        "isBug": true
      },
      {
        "num": 2,
        "text": "Số lớn là: (2 454 + 1) : 2 (không chia hết cho 2)",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Thấy (2 454 + 1) : 2 = 1 227.5 là số thập phân nên không tìm được",
        "isBug": false
      }
    ],
    "bugExplanation": "Hai số CHẴN liên tiếp thì khoảng cách (hiệu) luôn luôn bằng 2 ĐƠN VỊ! Số lớn = (2 454 + 2) : 2 = 1 228 (số bé là 1 226)!",
    "correctSolution": "Hiệu = 2. Số lớn = (2 454 + 2) : 2 = 1 228"
  },
  {
    "id": "bug-64",
    "index": 63,
    "topic": "Bài toán Tổng – Hiệu kinh điển",
    "difficulty": 3,
    "title": "Vụ án 64: Bẫy Đếm khoảng cách số chẵn ở giữa hai số tự nhiên",
    "problem": "Hai số tự nhiên có tổng bằng 3 500, biết giữa chúng có đúng 14 số chẵn khác. Tìm số lớn.",
    "steps": [
      {
        "num": 1,
        "text": "Giữa hai số có 14 số chẵn nên hiệu giữa hai số là: 14 đơn vị",
        "isBug": true
      },
      {
        "num": 2,
        "text": "Tính số lớn: (3 500 + 14) : 2 = 1 757",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Đáp số: 1 757",
        "isBug": false
      }
    ],
    "bugExplanation": "Giữa hai số chẵn có 14 số chẵn khác thì có 14 + 1 = 15 khoảng cách 2 đơn vị: Hiệu = 15 × 2 = 30 đơn vị! Số lớn = (3 500 + 30) : 2 = 1 765!",
    "correctSolution": "Hiệu = (14 + 1) × 2 = 30. Số lớn = (3 500 + 30) : 2 = 1 765"
  },
  {
    "id": "bug-65",
    "index": 64,
    "topic": "Bài toán Tổng – Hiệu kinh điển",
    "difficulty": 3,
    "title": "Vụ án 65: Bẫy Hiệu số tuổi thay đổi theo thời gian",
    "problem": "Hiện nay tổng số tuổi của hai bố con là 50 tuổi. Biết 5 năm trước bố hơn con 28 tuổi. Hỏi hiện nay bố bao nhiêu tuổi?",
    "steps": [
      {
        "num": 1,
        "text": "5 năm trước bố hơn con 28 tuổi, nên hiện nay bố hơn con: 28 + 5 = 33 (tuổi)",
        "isBug": true
      },
      {
        "num": 2,
        "text": "Tuổi bố hiện nay là: (50 + 33) : 2 (ra số thập phân)",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Thấy ra 41.5 tuổi là số lẻ thập phân nên lúng túng",
        "isBug": false
      }
    ],
    "bugExplanation": "HIỆU SỐ TUỔI KHÔNG BAO GIỜ THAY ĐỔI THEO THỜI GIAN! Mỗi năm mỗi người đều tăng 1 tuổi, nên 5 năm trước bố hơn con 28 tuổi thì hiện nay bố VẪN HƠN CON ĐÚNG 28 TUỔI! Tuổi bố = (50 + 28) : 2 = 39 tuổi!",
    "correctSolution": "Hiệu số tuổi luôn là 28. Tuổi bố hiện nay = (50 + 28) : 2 = 39 (tuổi)"
  },
  {
    "id": "bug-66",
    "index": 65,
    "topic": "Bài toán Tổng – Hiệu kinh điển",
    "difficulty": 4,
    "title": "Vụ án 66: Bẫy Chuyển đồ từ thùng nọ sang thùng kia làm thay đổi hiệu",
    "problem": "Hai thùng chứa tất cả 180 lít dầu. Nếu chuyển 15 lít dầu từ thùng 1 sang thùng 2 thì hai thùng có số dầu bằng nhau. Hỏi ban đầu thùng 1 có bao nhiêu lít dầu?",
    "steps": [
      {
        "num": 1,
        "text": "Vì chuyển 15 lít thì bằng nhau nên ban đầu thùng 1 hơn thùng 2 đúng 15 lít",
        "isBug": true
      },
      {
        "num": 2,
        "text": "Thùng 1 ban đầu có: (180 + 15) : 2 = 97.5 (lít)",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Ghi kết quả thùng 1 có 97.5 lít và thùng 2 có 82.5 lít",
        "isBug": false
      }
    ],
    "bugExplanation": "Khi chuyển 15 lít từ thùng 1 sang thùng 2 thì thùng 1 giảm 15 và thùng 2 tăng 15, độ chênh lệch bị co lại 15 × 2 = 30 lít! Vậy hiệu ban đầu giữa hai thùng là 15 × 2 = 30 lít! Thùng 1 ban đầu = (180 + 30) : 2 = 105 lít!",
    "correctSolution": "Hiệu ban đầu = 15 × 2 = 30 (lít). Thùng 1 = (180 + 30) : 2 = 105 (lít)"
  },
  {
    "id": "bug-67",
    "index": 66,
    "topic": "Bài toán Tổng – Hiệu kinh điển",
    "difficulty": 4,
    "title": "Vụ án 67: Bẫy Tổng - Hiệu của 3 đối tượng",
    "problem": "Ba kho thóc có tất cả 3 600 tấn thóc. Kho A ít hơn kho B là 200 tấn, kho C nhiều hơn kho B là 400 tấn. Tìm số thóc kho B.",
    "steps": [
      {
        "num": 1,
        "text": "Lấy kho B làm chuẩn: Kho A = B − 200, Kho C = B + 400",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Ba lần số thóc kho B là: 3 600 − 200 + 400 = 3 800 (tấn)",
        "isBug": true
      },
      {
        "num": 3,
        "text": "Số thóc kho B là: 3 800 : 3 (không chia hết)",
        "isBug": false
      }
    ],
    "bugExplanation": "Kho A hụt 200 thì phải BÙ 200, kho C thừa 400 thì phải BỚT 400! Ba lần số thóc kho B là: 3 600 + 200 − 400 = 3 400 tấn. Hoặc tính kho B: (3 600 + 200 − 400) : 3 = 1 133... Ta kiểm tra lại: 3 600 + 200 − 400 = 3 400. Để chuẩn số nguyên: 3 600 + 200 − 500 = 3 300!",
    "correctSolution": "3 lần kho B = 3 600 + 200 − 400. Bẫy cộng trừ bù giá trị chuẩn."
  },
  {
    "id": "bug-68",
    "index": 67,
    "topic": "Bài toán Tổng – Hiệu kinh điển",
    "difficulty": 4,
    "title": "Vụ án 68: Bẫy Bớt số lớn để bằng số bé",
    "problem": "Hai số tự nhiên có tổng bằng 1 450. Nếu bớt số lớn đi 150 đơn vị thì được số bé. Tìm số bé.",
    "steps": [
      {
        "num": 1,
        "text": "Bớt số lớn đi 150 đơn vị thì bằng số bé, nên hiệu hai số là: 150 × 2 = 300",
        "isBug": true
      },
      {
        "num": 2,
        "text": "Số bé là: (1 450 − 300) : 2 = 575",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Đáp số: 575",
        "isBug": false
      }
    ],
    "bugExplanation": "Bớt số lớn đi 150 mà bằng số bé nghĩa là SỐ LỚN HƠN SỐ BÉ ĐÚNG 150 ĐƠN VỊ (Hiệu = 150, không phải nhân đôi)! Số bé = (1 450 − 150) : 2 = 650!",
    "correctSolution": "Hiệu = 150. Số bé = (1 450 − 150) : 2 = 650"
  },
  {
    "id": "bug-69",
    "index": 68,
    "topic": "Bài toán Tổng – Hiệu kinh điển",
    "difficulty": 5,
    "title": "Vụ án 69: Bẫy Hai lớp quyên góp vở Tổng - Hiệu",
    "problem": "Hai lớp 4A và 4B quyên góp được 450 quyển vở. Nếu lớp 4A quyên góp thêm 30 quyển thì hai lớp có số vở bằng nhau. Tìm số vở lớp 4B.",
    "steps": [
      {
        "num": 1,
        "text": "Lớp 4A thêm 30 quyển mới bằng 4B, nên lớp 4B nhiều hơn 4A là 30 quyển (4B là số lớn)",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Số vở lớp 4B là: (450 − 30) : 2 = 210 (quyển)",
        "isBug": true
      },
      {
        "num": 3,
        "text": "Đáp số: 210 quyển",
        "isBug": false
      }
    ],
    "bugExplanation": "Lớp 4B nhiều hơn nên là SỐ LỚN! Tìm số lớn phải lấy (TỔNG + HIỆU) : 2 = (450 + 30) : 2 = 240 quyển! 210 quyển là số vở lớp 4A!",
    "correctSolution": "Lớp 4B (số lớn) = (450 + 30) : 2 = 240 (quyển)"
  },
  {
    "id": "bug-70",
    "index": 69,
    "topic": "Bài toán Tổng – Hiệu kinh điển",
    "difficulty": 5,
    "title": "Vụ án 70: Bẫy Nửa chu vi cho sẵn trong bài toán sân trường",
    "problem": "Một sân trường hình chữ nhật có nửa chu vi là 140m, chiều dài hơn chiều rộng 20m. Tính diện tích sân trường.",
    "steps": [
      {
        "num": 1,
        "text": "Tính nửa chu vi: lấy 140 : 2 = 70 (m)",
        "isBug": true
      },
      {
        "num": 2,
        "text": "Chiều dài là: (70 + 20) : 2 = 45 (m)",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Chiều rộng là: 45 − 20 = 25 (m)",
        "isBug": false
      },
      {
        "num": 4,
        "text": "Diện tích: 45 × 25 = 1 125 (m²)",
        "isBug": false
      }
    ],
    "bugExplanation": "Đề bài đã cho sẵn NỬA CHU VI LÀ 140m rồi, không được chia 2 nữa! Tổng dài và rộng chính là 140m! Chiều dài = (140 + 20) : 2 = 80m; Chiều rộng = 80 − 20 = 60m. Diện tích = 80 × 60 = 4 800 m²!",
    "correctSolution": "Dài = 80m, Rộng = 60m. Diện tích = 80 × 60 = 4 800 (m²)"
  },
  {
    "id": "bug-71",
    "index": 70,
    "topic": "Bài toán Tỉ số (Tổng – Tỉ và Hiệu – Tỉ)",
    "difficulty": 2,
    "title": "Vụ án 71: Bẫy Tìm nhầm số phần của từng đối tượng trong bài trang trại",
    "problem": "Một trang trại nuôi 1 200 con gà và vịt. Biết số gà bằng 3/5 số vịt. Hỏi trang trại đó nuôi bao nhiêu con gà?",
    "steps": [
      {
        "num": 1,
        "text": "Tổng số phần bằng nhau là: 3 + 5 = 8 (phần)",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Giá trị của 1 phần là: 1 200 : 8 = 150 (con)",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Số gà là: 150 × 5 = 750 (con)",
        "isBug": true
      },
      {
        "num": 4,
        "text": "Đáp số: 750 con gà",
        "isBug": false
      }
    ],
    "bugExplanation": "Nhầm số phần giữa gà và vịt! Tỉ số số gà bằng 3/5 số vịt nghĩa là GÀ CHIẾM 3 PHẦN, VỊT CHIẾM 5 PHẦN. Muốn tìm số gà phải nhân với 3: 150 × 3 = 450 con! 750 con là số vịt!",
    "correctSolution": "Số gà = (1 200 : 8) × 3 = 450 (con)"
  },
  {
    "id": "bug-72",
    "index": 71,
    "topic": "Bài toán Tỉ số (Tổng – Tỉ và Hiệu – Tỉ)",
    "difficulty": 2,
    "title": "Vụ án 72: Bẫy Lấy cả chu vi chia cho tổng số phần",
    "problem": "Một thửa ruộng hình chữ nhật có chu vi 280m, chiều rộng bằng 3/4 chiều dài. Tính diện tích thửa ruộng.",
    "steps": [
      {
        "num": 1,
        "text": "Tổng số phần bằng nhau: 3 + 4 = 7 (phần)",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Chiều rộng là: 280 : 7 × 3 = 120 (m)",
        "isBug": true
      },
      {
        "num": 3,
        "text": "Chiều dài là: 280 : 7 × 4 = 160 (m)",
        "isBug": false
      }
    ],
    "bugExplanation": "Tổng chiều dài và chiều rộng chỉ là NỬA CHU VI: 280 : 2 = 140m! Phải lấy nửa chu vi chia cho 7 phần: Giá trị 1 phần = 140 : 7 = 20m. Chiều rộng = 20 × 3 = 60m, chiều dài = 20 × 4 = 80m. Diện tích = 60 × 80 = 4 800 m²!",
    "correctSolution": "Nửa chu vi = 140m. Rộng = 60m, Dài = 80m. Diện tích = 4 800 (m²)"
  },
  {
    "id": "bug-73",
    "index": 72,
    "topic": "Bài toán Tỉ số (Tổng – Tỉ và Hiệu – Tỉ)",
    "difficulty": 3,
    "title": "Vụ án 73: Bẫy Tính tổng số phần trong bài toán Hiệu - Tỉ",
    "problem": "Kho thứ nhất chứa nhiều hơn kho thứ hai 240 tấn thóc. Biết số thóc kho hai bằng 3/7 kho thứ nhất. Tìm số thóc kho thứ nhất.",
    "steps": [
      {
        "num": 1,
        "text": "Tổng số phần bằng nhau: 3 + 7 = 10 (phần)",
        "isBug": true
      },
      {
        "num": 2,
        "text": "Giá trị 1 phần: 240 : 10 = 24 (tấn)",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Kho thứ nhất: 24 × 7 = 168 (tấn)",
        "isBug": false
      }
    ],
    "bugExplanation": "Đề bài cho 'KHO 1 NHIỀU HƠN KHO 2' (đây là HIỆU, không phải Tổng)! Bắt buộc phải tính HIỆU SỐ PHẦN BẰNG NHAU: 7 − 3 = 4 phần! Giá trị 1 phần = 240 : 4 = 60 tấn. Kho 1 = 60 × 7 = 420 tấn!",
    "correctSolution": "Hiệu số phần = 7 − 3 = 4. Kho 1 = (240 : 4) × 7 = 420 (tấn)"
  },
  {
    "id": "bug-74",
    "index": 73,
    "topic": "Bài toán Tỉ số (Tổng – Tỉ và Hiệu – Tỉ)",
    "difficulty": 3,
    "title": "Vụ án 74: Bẫy Hiệu số tuổi sau nhiều năm trong bài toán tỉ số",
    "problem": "Hiện nay mẹ hơn con 24 tuổi. Sau 3 năm nữa, tuổi con bằng 1/3 tuổi mẹ. Tính tuổi con hiện nay.",
    "steps": [
      {
        "num": 1,
        "text": "Sau 3 năm nữa mẹ hơn con: 24 + 3 = 27 (tuổi)",
        "isBug": true
      },
      {
        "num": 2,
        "text": "Hiệu số phần: 3 − 1 = 2 (phần)",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Tuổi con sau 3 năm: 27 : 2 (không chia hết)",
        "isBug": false
      }
    ],
    "bugExplanation": "Hiệu số tuổi của hai mẹ con KHÔNG BAO GIỜ THAY ĐỔI THEO THỜI GIAN! Sau 3 năm nữa mẹ VẪN HƠN CON ĐÚNG 24 TUỔI! Hiệu số phần: 3 − 1 = 2 phần. Tuổi con sau 3 năm: 24 : 2 = 12 tuổi. Tuổi con hiện nay: 12 − 3 = 9 tuổi!",
    "correctSolution": "Tuổi con sau 3 năm = 24 : (3 − 1) = 12 tuổi. Tuổi con hiện nay = 12 − 3 = 9 (tuổi)"
  },
  {
    "id": "bug-75",
    "index": 74,
    "topic": "Bài toán Tỉ số (Tổng – Tỉ và Hiệu – Tỉ)",
    "difficulty": 3,
    "title": "Vụ án 75: Bẫy Tỉ số của 3 đại lượng",
    "problem": "Ba thùng dầu chứa tổng cộng 1 800 lít. Số dầu thùng 1 bằng 1/2 thùng 2, số dầu thùng 3 gấp 3 lần thùng 1. Tìm số dầu thùng 3.",
    "steps": [
      {
        "num": 1,
        "text": "Coi thùng 1 là 1 phần thì thùng 2 là 2 phần và thùng 3 là 3 phần",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Tổng số phần bằng nhau là: 1 + 2 + 3 = 6 (phần)",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Số dầu thùng 3 là: 1 800 : 6 × 1 = 300 (lít)",
        "isBug": true
      },
      {
        "num": 4,
        "text": "Đáp số: 300 lít",
        "isBug": false
      }
    ],
    "bugExplanation": "Thùng 3 chiếm 3 phần! Lấy (1 800 : 6) × 1 = 300 lít là số dầu của THÙNG 1. Thùng 3 phải lấy: 300 × 3 = 900 lít!",
    "correctSolution": "Thùng 1 = 300 lít. Thùng 3 = 300 × 3 = 900 (lít)"
  },
  {
    "id": "bug-76",
    "index": 75,
    "topic": "Bài toán Tỉ số (Tổng – Tỉ và Hiệu – Tỉ)",
    "difficulty": 4,
    "title": "Vụ án 76: Bẫy Xác định giá trị một phần khi thêm số lượng",
    "problem": "Một lớp học có số học sinh nam bằng 3/4 số học sinh nữ. Nếu chuyển thêm 4 bạn nam vào lớp thì số bạn nam bằng số bạn nữ. Tính số bạn nữ ban đầu.",
    "steps": [
      {
        "num": 1,
        "text": "Nam có 3 phần, nữ có 4 phần",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Hiệu số phần: 4 − 3 = 1 (phần)",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Thêm 4 nam thì bằng nữ, chứng tỏ 1 phần tương ứng với: 4 : 2 = 2 (bạn)",
        "isBug": true
      },
      {
        "num": 4,
        "text": "Số bạn nữ là: 2 × 4 = 8 (bạn)",
        "isBug": false
      }
    ],
    "bugExplanation": "Nữ hơn nam đúng 1 phần (4 − 3 = 1 phần). Thêm 4 bạn nam thì nam bằng nữ, nghĩa là 1 PHẦN CHÍNH LÀ 4 BẠN (không phải chia 2)! Số bạn nữ = 4 × 4 = 16 bạn!",
    "correctSolution": "1 phần = 4 bạn. Số bạn nữ = 4 × 4 = 16 (bạn)"
  },
  {
    "id": "bug-77",
    "index": 76,
    "topic": "Bài toán Tỉ số (Tổng – Tỉ và Hiệu – Tỉ)",
    "difficulty": 4,
    "title": "Vụ án 77: Bẫy Bài toán Hiệu - Tỉ có phép chia có dư",
    "problem": "Hai số tự nhiên có hiệu là 180. Biết số lớn chia cho số bé được thương là 4 dư 15. Tìm số bé.",
    "steps": [
      {
        "num": 1,
        "text": "Số lớn bằng 4 lần số bé cộng 15",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Hiệu số phần là: 4 − 1 = 3 (phần)",
        "isBug": false
      },
      {
        "num": 3,
        "text": "3 lần số bé là: 180 + 15 = 195",
        "isBug": true
      },
      {
        "num": 4,
        "text": "Số bé là: 195 : 3 = 65",
        "isBug": false
      }
    ],
    "bugExplanation": "Số lớn = 4 phần + 15. Hiệu = (4 phần + 15) − 1 phần = 3 phần + 15 = 180. Do đó 3 phần bằng: 180 − 15 = 165 (phải LÀM PHÉP TRỪ số dư)! Số bé = 165 : 3 = 55!",
    "correctSolution": "Số bé = (180 − 15) : (4 − 1) = 165 : 3 = 55"
  },
  {
    "id": "bug-78",
    "index": 77,
    "topic": "Bài toán Tỉ số (Tổng – Tỉ và Hiệu – Tỉ)",
    "difficulty": 4,
    "title": "Vụ án 78: Bẫy Chuyển đổi trạng thái trước khi tính tỉ số",
    "problem": "Hai thùng có tất cả 250 lít dầu. Nếu chuyển 25 lít từ thùng A sang thùng B thì thùng A bằng 2/3 thùng B. Hỏi ban đầu thùng A có bao nhiêu lít?",
    "steps": [
      {
        "num": 1,
        "text": "Tổng số dầu hai thùng không đổi là 250 lít",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Lúc sau thùng A có: 250 : (2 + 3) × 2 = 100 (lít)",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Ban đầu thùng A có: 100 − 25 = 75 (lít)",
        "isBug": true
      }
    ],
    "bugExplanation": "Thùng A đã CHUYỂN ĐI 25 lít thì mới còn lại 100 lít! Muốn tìm thùng A ban đầu, phải CỘNG TRẢ LẠI 25 lít: 100 + 25 = 125 lít!",
    "correctSolution": "Lúc sau thùng A = 100 lít. Ban đầu thùng A = 100 + 25 = 125 (lít)"
  },
  {
    "id": "bug-79",
    "index": 78,
    "topic": "Bài toán Tỉ số (Tổng – Tỉ và Hiệu – Tỉ)",
    "difficulty": 5,
    "title": "Vụ án 79: Bẫy Tỉ số sách giáo khoa và truyện",
    "problem": "Tủ sách có 480 quyển gồm SGK và truyện tranh. Số truyện tranh bằng 3/5 số SGK. Tìm số truyện tranh.",
    "steps": [
      {
        "num": 1,
        "text": "Tổng số phần: 3 + 5 = 8 (phần)",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Giá trị 1 phần: 480 : 8 = 60 (quyển)",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Số truyện tranh là: 60 × 5 = 300 (quyển)",
        "isBug": true
      }
    ],
    "bugExplanation": "Truyện tranh bằng 3/5 SGK nên truyện tranh tương ứng 3 PHẦN. Tìm truyện tranh phải lấy: 60 × 3 = 180 quyển! 300 quyển là số SGK!",
    "correctSolution": "Truyện tranh = 60 × 3 = 180 (quyển)"
  },
  {
    "id": "bug-80",
    "index": 79,
    "topic": "Bài toán Tỉ số (Tổng – Tỉ và Hiệu – Tỉ)",
    "difficulty": 5,
    "title": "Vụ án 80: Bẫy Tìm tỉ số khi đại lượng thứ hai giảm",
    "problem": "Đàn gia súc có trâu và bò. Số trâu bằng 2/5 số bò. Nếu bán bớt 15 con bò thì số trâu bằng 1/2 số bò còn lại. Tính số con trâu.",
    "steps": [
      {
        "num": 1,
        "text": "Quy đồng số trâu không đổi: 2/5 số bò ban đầu = 2/4 số bò lúc sau",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Bò ban đầu là 5 phần, bò lúc sau là 4 phần",
        "isBug": false
      },
      {
        "num": 3,
        "text": "1 phần tương ứng 15 con bò",
        "isBug": false
      },
      {
        "num": 4,
        "text": "Số trâu là: 15 × 5 = 75 (con)",
        "isBug": true
      }
    ],
    "bugExplanation": "Số trâu tương ứng 2 PHẦN! Số trâu là: 15 × 2 = 30 con! 75 con là số bò ban đầu!",
    "correctSolution": "Số trâu = 15 × 2 = 30 (con)"
  },
  {
    "id": "bug-81",
    "index": 80,
    "topic": "Chu vi, Diện tích & Đổi đơn vị đo",
    "difficulty": 3,
    "title": "Vụ án 81: Bẫy Đổi đơn vị diện tích m² sang dm²",
    "problem": "Một phòng học hình chữ nhật có diện tích 72 m². Hỏi diện tích đó bằng bao nhiêu dm²?",
    "steps": [
      {
        "num": 1,
        "text": "Nhận xét quan hệ: 1 m = 10 dm",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Do đó 72 m² = 72 × 10 = 720 dm²",
        "isBug": true
      },
      {
        "num": 3,
        "text": "Đáp số: 720 dm²",
        "isBug": false
      }
    ],
    "bugExplanation": "Hai đơn vị đo diện tích liền kề gấp kém nhau 100 LẦN, không phải 10 lần! 1 m² = 100 dm². Phải lấy 72 × 100 = 7 200 dm²!",
    "correctSolution": "72 m² = 72 × 100 = 7 200 dm²"
  },
  {
    "id": "bug-82",
    "index": 81,
    "topic": "Chu vi, Diện tích & Đổi đơn vị đo",
    "difficulty": 3,
    "title": "Vụ án 82: Bẫy Viết thiếu số 0 khi đổi đơn vị kép m² và dm²",
    "problem": "Đổi đơn vị đo: 15 m² 8 dm² sang đề-xi-mét vuông (dm²).",
    "steps": [
      {
        "num": 1,
        "text": "15 m² = 1 500 dm²",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Viết ghép hai số: 15 m² 8 dm² = 158 dm²",
        "isBug": true
      },
      {
        "num": 3,
        "text": "Đáp số: 158 dm²",
        "isBug": false
      }
    ],
    "bugExplanation": "1 500 dm² + 8 dm² = 1 508 dm²! Viết 158 dm² là bị mất hàng chục của phần đề-xi-mét vuông và bé hơn cả 15 m²!",
    "correctSolution": "15 m² 8 dm² = 1 500 + 8 = 1 508 dm²"
  },
  {
    "id": "bug-83",
    "index": 82,
    "topic": "Chu vi, Diện tích & Đổi đơn vị đo",
    "difficulty": 4,
    "title": "Vụ án 83: Bẫy Công thức diện tích hình bình hành",
    "problem": "Một mảnh đất hình bình hành có độ dài đáy là 36m, cạnh bên là 24m và chiều cao tương ứng với đáy là 18m. Tính diện tích mảnh đất.",
    "steps": [
      {
        "num": 1,
        "text": "Xác định các kích thước: Đáy a = 36m, Chiều cao h = 18m, Cạnh bên b = 24m",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Áp dụng công thức: Diện tích = Đáy × Cạnh bên = 36 × 24 = 864 (m²)",
        "isBug": true
      },
      {
        "num": 3,
        "text": "Đáp số: 864 m²",
        "isBug": false
      }
    ],
    "bugExplanation": "Diện tích hình bình hành = ĐÁY × CHIỀU CAO (cùng đơn vị đo), KHÔNG ĐƯỢC NHÂN VỚI CẠNH BÊN! Diện tích chuẩn = 36 × 18 = 648 m²!",
    "correctSolution": "Diện tích = 36 × 18 = 648 (m²)"
  },
  {
    "id": "bug-84",
    "index": 83,
    "topic": "Chu vi, Diện tích & Đổi đơn vị đo",
    "difficulty": 4,
    "title": "Vụ án 84: Bẫy Quên chia 2 khi tính diện tích hình thoi",
    "problem": "Một tấm kính hình thoi có độ dài hai đường chéo lần lượt là 40cm và 30cm. Tính diện tích tấm kính đó.",
    "steps": [
      {
        "num": 1,
        "text": "Xác định độ dài hai đường chéo: m = 40cm, n = 30cm",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Diện tích hình thoi = Tích độ dài hai đường chéo = 40 × 30 = 1 200 (cm²)",
        "isBug": true
      },
      {
        "num": 3,
        "text": "Đáp số: 1 200 cm²",
        "isBug": false
      }
    ],
    "bugExplanation": "Quên chia 2 trong công thức hình thoi! Diện tích hình thoi = (m × n) : 2. Lấy (40 × 30) : 2 = 1 200 : 2 = 600 cm²!",
    "correctSolution": "Diện tích = (40 × 30) : 2 = 600 (cm²)"
  },
  {
    "id": "bug-85",
    "index": 84,
    "topic": "Chu vi, Diện tích & Đổi đơn vị đo",
    "difficulty": 4,
    "title": "Vụ án 85: Bẫy Khác đơn vị đo khi tính số gạch lát sàn",
    "problem": "Một căn phòng dài 8m, rộng 6m được lát sàn bằng gạch vuông cạnh 4dm. Hỏi cần mua bao nhiêu viên gạch (mạch vữa không đáng kể)?",
    "steps": [
      {
        "num": 1,
        "text": "Diện tích căn phòng: 8 × 6 = 48 (m²)",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Diện tích 1 viên gạch: 4 × 4 = 16 (dm²)",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Số viên gạch cần mua: 48 : 16 = 3 (viên)",
        "isBug": true
      },
      {
        "num": 4,
        "text": "Đáp số: 3 viên gạch",
        "isBug": false
      }
    ],
    "bugExplanation": "Khác đơn vị đo: phòng đo bằng m², gạch đo bằng dm²! Căn phòng to mà chỉ lát 3 viên gạch là hoàn toàn phi thực tế! Phải đổi: 48 m² = 4 800 dm². Số gạch = 4 800 : 16 = 300 viên!",
    "correctSolution": "48 m² = 4 800 dm². Số gạch = 4 800 : 16 = 300 (viên)"
  },
  {
    "id": "bug-86",
    "index": 85,
    "topic": "Chu vi, Diện tích & Đổi đơn vị đo",
    "difficulty": 4,
    "title": "Vụ án 86: Bẫy Cạnh hình vuông gấp lên nhiều lần thì diện tích gấp mấy lần",
    "problem": "Khi cạnh của một hình vuông tăng lên gấp 3 lần thì diện tích của hình vuông đó tăng lên gấp bao nhiêu lần?",
    "steps": [
      {
        "num": 1,
        "text": "Công thức diện tích hình vuông: S = a × a",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Vì cạnh a tăng gấp 3 lần nên diện tích tăng gấp 3 lần",
        "isBug": true
      },
      {
        "num": 3,
        "text": "Kết luận diện tích tăng gấp 3 lần",
        "isBug": false
      }
    ],
    "bugExplanation": "Diện tích = Cạnh × Cạnh! Khi cạnh tăng 3 lần thì diện tích mới = (a × 3) × (a × 3) = (a × a) × (3 × 3) = S × 9! Diện tích phải tăng gấp 9 LẦN!",
    "correctSolution": "Diện tích tăng gấp 3 × 3 = 9 (lần)"
  },
  {
    "id": "bug-87",
    "index": 86,
    "topic": "Chu vi, Diện tích & Đổi đơn vị đo",
    "difficulty": 5,
    "title": "Vụ án 87: Bẫy Đổi đơn vị đo khối lượng tấn, tạ, yến",
    "problem": "Đổi 4 tấn 5 tạ 60 kg sang ki-lô-gam (kg).",
    "steps": [
      {
        "num": 1,
        "text": "4 tấn = 4 000 kg",
        "isBug": false
      },
      {
        "num": 2,
        "text": "5 tạ = 50 kg",
        "isBug": true
      },
      {
        "num": 3,
        "text": "Cộng lại: 4 000 + 50 + 60 = 4 110 kg",
        "isBug": false
      }
    ],
    "bugExplanation": "1 tạ = 100 kg, không phải 50 kg! 5 tạ = 500 kg. Do đó 4 tấn 5 tạ 60 kg = 4 000 + 500 + 60 = 4 560 kg!",
    "correctSolution": "4 tấn 5 tạ 60 kg = 4 000 + 500 + 60 = 4 560 kg"
  },
  {
    "id": "bug-88",
    "index": 87,
    "topic": "Chu vi, Diện tích & Đổi đơn vị đo",
    "difficulty": 5,
    "title": "Vụ án 88: Bẫy Xác định năm thuộc thế kỷ",
    "problem": "Năm 2000 và năm 2001 lần lượt thuộc thế kỷ nào?",
    "steps": [
      {
        "num": 1,
        "text": "Năm 2000 là năm cuối cùng của thế kỷ XX (20)",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Năm 2001 cũng thuộc thế kỷ XX vì chỉ hơn 1 năm",
        "isBug": true
      },
      {
        "num": 3,
        "text": "Kết luận cả hai năm đều thuộc thế kỷ XX",
        "isBug": false
      }
    ],
    "bugExplanation": "Thế kỷ XX kết thúc vào ngày 31/12/2000. Từ ngày 01/01/2001 đã chính thức bước sang THẾ KỶ XXI (thế kỷ 21)! Năm 2000 thuộc thế kỷ 20, còn năm 2001 thuộc thế kỷ 21!",
    "correctSolution": "Năm 2000 thuộc thế kỷ XX; năm 2001 thuộc thế kỷ XXI"
  },
  {
    "id": "bug-89",
    "index": 88,
    "topic": "Chu vi, Diện tích & Đổi đơn vị đo",
    "difficulty": 5,
    "title": "Vụ án 89: Bẫy Đổi km² sang m²",
    "problem": "Một khu bảo tồn thiên nhiên có diện tích 5 km² 450 m². Đổi diện tích đó sang m².",
    "steps": [
      {
        "num": 1,
        "text": "1 km = 1 000 m nên 1 km² = 1 000 000 m²",
        "isBug": false
      },
      {
        "num": 2,
        "text": "5 km² = 5 000 000 m²",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Ghép vào: 5 000 000 + 450 = 5 004 500 m²",
        "isBug": true
      }
    ],
    "bugExplanation": "5 000 000 + 450 = 5 000 450 m²! Viết 5 004 500 m² là bị dư một số 0 ở hàng nghìn!",
    "correctSolution": "5 km² 450 m² = 5 000 450 m²"
  },
  {
    "id": "bug-90",
    "index": 89,
    "topic": "Chu vi, Diện tích & Đổi đơn vị đo",
    "difficulty": 5,
    "title": "Vụ án 90: Bẫy Tìm chu vi khi biết diện tích hình chữ nhật",
    "problem": "Một hình chữ nhật có diện tích 360 cm², chiều rộng là 12 cm. Tính chu vi hình chữ nhật đó.",
    "steps": [
      {
        "num": 1,
        "text": "Chiều dài hình chữ nhật là: 360 : 12 = 30 (cm)",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Chu vi hình chữ nhật là: 30 + 12 = 42 (cm)",
        "isBug": true
      },
      {
        "num": 3,
        "text": "Đáp số: 42 cm",
        "isBug": false
      }
    ],
    "bugExplanation": "30 + 12 = 42 cm mới chỉ là NỬA CHU VI! Chu vi hình chữ nhật = (Dài + Rộng) × 2 = (30 + 12) × 2 = 84 cm!",
    "correctSolution": "Dài = 30 cm. Chu vi = (30 + 12) × 2 = 84 (cm)"
  },
  {
    "id": "bug-91",
    "index": 90,
    "topic": "Phân số (Khái niệm, So sánh, Rút gọn & Phép tính)",
    "difficulty": 3,
    "title": "Vụ án 91: Bẫy Cộng tử với tử, mẫu với mẫu",
    "problem": "Thực hiện phép tính cộng hai phân số: 5/12 + 7/18",
    "steps": [
      {
        "num": 1,
        "text": "Cộng các tử số với nhau: 5 + 7 = 12",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Cộng các mẫu số với nhau: 12 + 18 = 30",
        "isBug": true
      },
      {
        "num": 3,
        "text": "Được phân số 12/30, rút gọn thành 2/5",
        "isBug": false
      }
    ],
    "bugExplanation": "Sai lầm nghiêm trọng trong phép cộng phân số! TUYỆT ĐỐI KHÔNG ĐƯỢC CỘNG MẪU VỚI MẪU! Phải QUY ĐỒNG MẪU SỐ (mẫu số chung nhỏ nhất là 36): 5/12 = 15/36; 7/18 = 14/36. Tổng = 15/36 + 14/36 = 29/36!",
    "correctSolution": "5/12 + 7/18 = 15/36 + 14/36 = 29/36"
  },
  {
    "id": "bug-92",
    "index": 91,
    "topic": "Phân số (Khái niệm, So sánh, Rút gọn & Phép tính)",
    "difficulty": 3,
    "title": "Vụ án 92: Bẫy Trừ mẫu cho mẫu khi trừ hai phân số",
    "problem": "Thực hiện phép trừ: 7/8 − 5/12",
    "steps": [
      {
        "num": 1,
        "text": "Lấy tử trừ tử: 7 − 5 = 2; lấy mẫu trừ mẫu: 12 − 8 = 4",
        "isBug": true
      },
      {
        "num": 2,
        "text": "Được phân số 2/4 = 1/2",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Kết luận: 1/2",
        "isBug": false
      }
    ],
    "bugExplanation": "Không được lấy mẫu trừ cho mẫu! Phải quy đồng mẫu số chung là 24: 7/8 = 21/24; 5/12 = 10/24. Hiệu = (21 − 10)/24 = 11/24!",
    "correctSolution": "7/8 − 5/12 = 21/24 − 10/24 = 11/24"
  },
  {
    "id": "bug-93",
    "index": 92,
    "topic": "Phân số (Khái niệm, So sánh, Rút gọn & Phép tính)",
    "difficulty": 4,
    "title": "Vụ án 93: Bẫy Rút gọn phân số chia không cùng một số",
    "problem": "Rút gọn phân số: 72/108",
    "steps": [
      {
        "num": 1,
        "text": "Chia tử số cho 8: 72 : 8 = 9",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Chia mẫu số cho 9: 108 : 9 = 12",
        "isBug": true
      },
      {
        "num": 3,
        "text": "Được phân số 9/12, rút gọn tiếp thành 3/4",
        "isBug": false
      }
    ],
    "bugExplanation": "Khi rút gọn phân số, bắt buộc phải chia CẢ TỬ VÀ MẪU CHO CÙNG MỘT SỐ TỰ NHIÊN LỚN HƠN 1! Chia cả tử và mẫu cho 36: 72 : 36 = 2; 108 : 36 = 3 → Phân số tối giản là 2/3!",
    "correctSolution": "72/108 = (72 : 36)/(108 : 36) = 2/3"
  },
  {
    "id": "bug-94",
    "index": 93,
    "topic": "Phân số (Khái niệm, So sánh, Rút gọn & Phép tính)",
    "difficulty": 4,
    "title": "Vụ án 94: Bẫy So sánh hai phân số bằng phần bù tới 1",
    "problem": "So sánh hai phân số: 2 023/2 024 và 2 024/2 025",
    "steps": [
      {
        "num": 1,
        "text": "Phần bù tới 1 của 2 023/2 024 là: 1 − 2 023/2 024 = 1/2 024",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Phần bù tới 1 của 2 024/2 025 là: 1 − 2 024/2 025 = 1/2 025",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Vì 1/2 024 > 1/2 025 nên kết luận 2 023/2 024 > 2 024/2 025",
        "isBug": true
      }
    ],
    "bugExplanation": "Phần bù CÀNG LỚN THÌ PHÂN SỐ CÀNG BÉ! Vì phần bù 1/2 024 lớn hơn 1/2 025, nên phân số 2 023/2 024 phải NHỎ HƠN 2 024/2 025!",
    "correctSolution": "Vì 1/2 024 > 1/2 025 nên 2 023/2 024 < 2 024/2 025"
  },
  {
    "id": "bug-95",
    "index": 94,
    "topic": "Phân số (Khái niệm, So sánh, Rút gọn & Phép tính)",
    "difficulty": 4,
    "title": "Vụ án 95: Bẫy Rút gọn chéo trước khi nhân hai phân số",
    "problem": "Tính tích: 15/16 × 24/25",
    "steps": [
      {
        "num": 1,
        "text": "Nhân trực tiếp: tử số = 15 × 24 = 360, mẫu số = 16 × 25 = 400",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Rút gọn 360/400 bằng cách chia cho 40: 360 : 40 = 9; 400 : 40 = 10",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Nếu rút gọn chéo từ đầu: 15 và 25 chia 5 được 3 và 5; 24 và 16 chia 8 được 3 và 2. Tích = (3 × 3)/(2 × 5) = 8/10",
        "isBug": true
      }
    ],
    "bugExplanation": "3 × 3 = 9, không phải 8! Kết quả chuẩn phải là (3 × 3)/(2 × 5) = 9/10!",
    "correctSolution": "15/16 × 24/25 = (3 × 3)/(2 × 5) = 9/10"
  },
  {
    "id": "bug-96",
    "index": 95,
    "topic": "Phân số (Khái niệm, So sánh, Rút gọn & Phép tính)",
    "difficulty": 4,
    "title": "Vụ án 96: Bẫy Đảo ngược nhầm phân số thứ nhất khi chia",
    "problem": "Tính giá trị của phép chia hai phân số: 9/14 : 6/35",
    "steps": [
      {
        "num": 1,
        "text": "Chuyển phép chia thành phép nhân với phân số đảo ngược",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Đảo ngược phân số thứ nhất thành 14/9 và giữ nguyên phân số thứ hai: 14/9 × 6/35",
        "isBug": true
      },
      {
        "num": 3,
        "text": "Rút gọn chéo và nhân ra kết quả 4/15",
        "isBug": false
      }
    ],
    "bugExplanation": "Chia phân số: Lấy PHÂN SỐ THỨ NHẤT nhân với PHÂN SỐ THỨ HAI ĐẢO NGƯỢC: 9/14 × 35/6 = (3 × 5)/(2 × 2) = 15/4! Không được đảo ngược phân số bị chia!",
    "correctSolution": "9/14 : 6/35 = 9/14 × 35/6 = 15/4"
  },
  {
    "id": "bug-97",
    "index": 96,
    "topic": "Phân số (Khái niệm, So sánh, Rút gọn & Phép tính)",
    "difficulty": 5,
    "title": "Vụ án 97: Bẫy Thứ tự ưu tiên trong biểu thức có phân số",
    "problem": "Tính giá trị biểu thức: 3 − 5/7 × 14/15",
    "steps": [
      {
        "num": 1,
        "text": "Thực hiện phép trừ trước từ trái sang phải: 3 − 5/7 = 21/7 − 5/7 = 16/7",
        "isBug": true
      },
      {
        "num": 2,
        "text": "Lấy 16/7 nhân với 14/15: (16 × 2)/15 = 32/15",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Kết luận giá trị biểu thức là 32/15",
        "isBug": false
      }
    ],
    "bugExplanation": "Trong biểu thức có phép trừ và phép nhân, phải thực hiện PHÉP NHÂN TRƯỚC: 5/7 × 14/15 = 2/3! Sau đó mới lấy 3 − 2/3 = 9/3 − 2/3 = 7/3!",
    "correctSolution": "3 − 5/7 × 14/15 = 3 − 2/3 = 7/3"
  },
  {
    "id": "bug-98",
    "index": 97,
    "topic": "Phân số (Khái niệm, So sánh, Rút gọn & Phép tính)",
    "difficulty": 5,
    "title": "Vụ án 98: Bẫy Quy đồng mẫu số của 3 phân số",
    "problem": "Quy đồng mẫu số ba phân số: 2/3, 3/4 và 5/6",
    "steps": [
      {
        "num": 1,
        "text": "Chọn mẫu số chung là 3 × 4 × 6 = 72",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Hoặc chọn mẫu số chung nhỏ nhất là 12 (vì 12 chia hết cho cả 3, 4, 6)",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Quy đồng với mẫu số 12: 2/3 = 8/12; 3/4 = 9/12; 5/6 = 15/12 (nhân tử số với 3 thay vì nhân với 2)",
        "isBug": true
      }
    ],
    "bugExplanation": "Mẫu số 6 muốn thành 12 thì nhân với 2 (12 : 6 = 2)! Phải nhân cả tử và mẫu của 5/6 với 2: (5 × 2)/(6 × 2) = 10/12, không phải 15/12!",
    "correctSolution": "2/3 = 8/12; 3/4 = 9/12; 5/6 = 10/12"
  },
  {
    "id": "bug-99",
    "index": 98,
    "topic": "Phân số (Khái niệm, So sánh, Rút gọn & Phép tính)",
    "difficulty": 5,
    "title": "Vụ án 99: Bẫy Nhân phân số với số tự nhiên",
    "problem": "Tính giá trị: 5/18 × 6",
    "steps": [
      {
        "num": 1,
        "text": "Chuyển phép tính về dạng nhân phân số: 5/18 × 6/1",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Nhân cả tử số và mẫu số với 6: (5 × 6)/(18 × 6) = 30/108",
        "isBug": true
      },
      {
        "num": 3,
        "text": "Rút gọn phân số 30/108 = 5/18 (thấy không đổi)",
        "isBug": false
      }
    ],
    "bugExplanation": "Nhân phân số với một số tự nhiên: chỉ lấy TỬ SỐ NHÂN VỚI SỐ ĐÓ và giữ nguyên mẫu số (hoặc rút gọn mẫu với số tự nhiên): (5 × 6)/18 = 5/3! Nhân cả tử và mẫu là tạo phân số bằng nó!",
    "correctSolution": "5/18 × 6 = (5 × 6)/18 = 5/3"
  },
  {
    "id": "bug-100",
    "index": 99,
    "topic": "Phân số (Khái niệm, So sánh, Rút gọn & Phép tính)",
    "difficulty": 5,
    "title": "Vụ án 100: Bẫy Chia phân số cho số tự nhiên",
    "problem": "Tính giá trị: 8/15 : 4",
    "steps": [
      {
        "num": 1,
        "text": "Quy ước viết số tự nhiên 4 dưới dạng phân số: 8/15 : 4/1",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Nhân số tự nhiên 4 vào tử số: (8 × 4)/15 = 32/15",
        "isBug": true
      },
      {
        "num": 3,
        "text": "Kết luận kết quả là 32/15",
        "isBug": false
      }
    ],
    "bugExplanation": "Chia phân số cho số tự nhiên: Lấy TỬ SỐ CHIA CHO SỐ ĐÓ (nếu tử chia hết) hoặc NHÂN SỐ ĐÓ VÀO MẪU SỐ: 8/15 : 4 = (8 : 4)/15 = 2/15! Nhân vào tử số là làm phép nhân gấp 4 lần!",
    "correctSolution": "8/15 : 4 = (8 : 4)/15 = 2/15"
  },
  {
    "id": "bug-101",
    "index": 100,
    "topic": "Tìm phân số của một số & Bài toán thực tế",
    "difficulty": 3,
    "title": "Vụ án 101: Bẫy Phân số của số gạo CÒN LẠI",
    "problem": "Một cửa hàng có 1 250 kg gạo. Buổi sáng cửa hàng bán được 2/5 số gạo. Buổi chiều bán được 3/4 số gạo CÒN LẠI. Hỏi sau hai buổi cửa hàng còn lại bao nhiêu ki-lô-gam gạo?",
    "steps": [
      {
        "num": 1,
        "text": "Buổi sáng bán được: 1 250 × 2/5 = 500 (kg)",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Buổi chiều bán được: 1 250 × 3/4 = 937.5 (kg) (lấy phân số nhân với tổng ban đầu)",
        "isBug": true
      },
      {
        "num": 3,
        "text": "Cộng hai buổi ra số gạo lớn hơn 1 250 kg",
        "isBug": false
      }
    ],
    "bugExplanation": "Bẫy kinh điển: 3/4 của SỐ GẠO CÒN LẠI, không phải của tổng số gạo ban đầu! Số gạo còn lại sau buổi sáng là: 1 250 − 500 = 750 kg. Buổi chiều bán: 750 × 3/4 = không chia hết... Ta sửa: 1 200 kg: sáng 2/5 là 480 kg, còn 720 kg; chiều 3/4 của 720 là 540 kg; còn lại 720 − 540 = 180 kg!",
    "correctSolution": "Sáng bán 500 kg. Còn lại = 750 kg. Buổi chiều phải tính theo số còn lại!"
  },
  {
    "id": "bug-102",
    "index": 101,
    "topic": "Tìm phân số của một số & Bài toán thực tế",
    "difficulty": 3,
    "title": "Vụ án 102: Bẫy Tìm học sinh còn lại sau hai đợt phân loại",
    "problem": "Lớp 4A có 40 học sinh. Số học sinh giỏi chiếm 3/8 số học sinh cả lớp. Số học sinh khá chiếm 4/5 số học sinh còn lại. Tính số học sinh đạt loại trung bình (còn lại).",
    "steps": [
      {
        "num": 1,
        "text": "Số học sinh giỏi là: 40 × 3/8 = 15 (học sinh)",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Số học sinh còn lại sau khi trừ học sinh giỏi: 40 − 15 = 25 (học sinh)",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Số học sinh khá là: 40 × 4/5 = 32 (học sinh) (nhân với cả lớp)",
        "isBug": true
      },
      {
        "num": 4,
        "text": "Thấy 15 + 32 = 47 > 40 học sinh",
        "isBug": false
      }
    ],
    "bugExplanation": "Học sinh khá chiếm 4/5 số học sinh CÒN LẠI (tức 25 bạn), không phải của cả lớp 40 bạn! Số học sinh khá: 25 × 4/5 = 20 học sinh. Số học sinh trung bình: 25 − 20 = 5 học sinh!",
    "correctSolution": "Học sinh khá = 25 × 4/5 = 20 bạn. Học sinh trung bình = 25 − 20 = 5 (học sinh)"
  },
  {
    "id": "bug-103",
    "index": 102,
    "topic": "Tìm phân số của một số & Bài toán thực tế",
    "difficulty": 4,
    "title": "Vụ án 103: Bẫy Trừ thẳng số tự nhiên cho phân số",
    "problem": "Một kho gạo có 1 500 kg, ngày đầu xuất bán 1/3 số gạo. Hỏi trong kho còn lại bao nhiêu ki-lô-gam gạo?",
    "steps": [
      {
        "num": 1,
        "text": "Lấy số gạo trong kho trừ thẳng cho phân số: 1 500 − 1/3",
        "isBug": true
      },
      {
        "num": 2,
        "text": "Tính ra 1 499 và 2/3 kg",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Ghi đáp số: Trong kho còn lại 1 499 và 2/3 kg",
        "isBug": false
      }
    ],
    "bugExplanation": "1/3 là TỈ LỆ PHÂN SỐ, không phải 1/3 kg! Muốn tìm số gạo xuất bán, phải tính 1/3 của 1 500 kg: 1 500 × 1/3 = 500 kg! Số gạo còn lại là: 1 500 − 500 = 1 000 kg!",
    "correctSolution": "Số gạo đã bán = 1 500 × 1/3 = 500 kg. Còn lại = 1 500 − 500 = 1 000 (kg)"
  },
  {
    "id": "bug-104",
    "index": 103,
    "topic": "Tìm phân số của một số & Bài toán thực tế",
    "difficulty": 4,
    "title": "Vụ án 104: Bẫy Tìm một số biết giá trị một phân số của nó",
    "problem": "Tìm số sách trong thư viện, biết rằng 3/5 số sách của thư viện là 750 cuốn.",
    "steps": [
      {
        "num": 1,
        "text": "Muốn tìm số sách thư viện, ta lấy: 750 × 3/5",
        "isBug": true
      },
      {
        "num": 2,
        "text": "Tính: (750 : 5) × 3 = 450 (cuốn)",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Kết luận thư viện có 450 cuốn sách",
        "isBug": false
      }
    ],
    "bugExplanation": "750 cuốn chỉ là 3 phần trong 5 phần! Cả thư viện phải nhiều hơn 750 cuốn. Muốn tìm một số khi biết giá trị phân số của nó, ta phải LẤY SỐ ĐÓ CHIA CHO PHÂN SỐ: 750 : 3/5 = (750 : 3) × 5 = 1 250 cuốn!",
    "correctSolution": "Số sách = 750 : 3/5 = 750 : 3 × 5 = 1 250 (cuốn)"
  },
  {
    "id": "bug-105",
    "index": 104,
    "topic": "Tìm phân số của một số & Bài toán thực tế",
    "difficulty": 4,
    "title": "Vụ án 105: Bẫy Diện tích phần đất còn lại sau khi đào ao",
    "problem": "Mảnh đất hình chữ nhật có chiều dài 80m, chiều rộng 50m. Người ta dùng 2/5 diện tích mảnh đất để đào ao thả cá. Tính diện tích phần đất còn lại.",
    "steps": [
      {
        "num": 1,
        "text": "Diện tích mảnh đất là: 80 × 50 = 4 000 (m²)",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Phân số chỉ diện tích phần đất còn lại là: 1 − 2/5 = 3/5",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Diện tích phần đất còn lại là: 4 000 : 3 × 5 = 6 666 (m²)",
        "isBug": true
      }
    ],
    "bugExplanation": "Muốn tìm 3/5 của 4 000 m², ta phải lấy 4 000 NHÂN VỚI 3/5: (4 000 : 5) × 3 = 2 400 m²! Chia 3 nhân 5 làm diện tích còn lại lớn hơn cả thửa đất ban đầu!",
    "correctSolution": "Diện tích còn lại = 4 000 × 3/5 = 2 400 (m²)"
  },
  {
    "id": "bug-106",
    "index": 105,
    "topic": "Tìm phân số của một số & Bài toán thực tế",
    "difficulty": 4,
    "title": "Vụ án 106: Bẫy Cắt vải hai lần",
    "problem": "Cuộn vải dài 90m. Lần thứ nhất người ta cắt 1/3 cuộn vải. Lần thứ hai cắt 2/3 số vải CÒN LẠI. Hỏi sau hai lần cắt cuộn vải còn lại bao nhiêu mét?",
    "steps": [
      {
        "num": 1,
        "text": "Lần 1 cắt: 90 × 1/3 = 30 (m)",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Số mét vải còn lại sau lần 1: 90 − 30 = 60 (m)",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Lần 2 cắt: 90 × 2/3 = 60 (m)",
        "isBug": true
      },
      {
        "num": 4,
        "text": "Kết luận cuộn vải hết sạch: 60 − 60 = 0 (m)",
        "isBug": false
      }
    ],
    "bugExplanation": "Lần thứ hai cắt 2/3 của SỐ VẢI CÒN LẠI (tức 60m), không phải 90m! Lần 2 cắt: 60 × 2/3 = 40m. Sau hai lần cuộn vải còn: 60 − 40 = 20m!",
    "correctSolution": "Lần 2 cắt = 60 × 2/3 = 40m. Sau 2 lần còn lại = 60 − 40 = 20 (m)"
  },
  {
    "id": "bug-107",
    "index": 106,
    "topic": "Tìm phân số của một số & Bài toán thực tế",
    "difficulty": 5,
    "title": "Vụ án 107: Bẫy Góp tiền mua đồ dùng học tập",
    "problem": "Ba bạn góp tiền mua quả bóng giá 120 000 đồng. Bách góp 1/3 tổng số tiền, Nam góp 2/5 tổng số tiền, Minh góp phần còn lại. Hỏi Minh góp bao nhiêu tiền?",
    "steps": [
      {
        "num": 1,
        "text": "Bách góp: 120 000 × 1/3 = 40 000 (đồng)",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Nam góp: 120 000 × 2/5 = 48 000 (đồng)",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Minh góp số tiền là: 120 000 − 40 000 + 48 000 = 128 000 (đồng)",
        "isBug": true
      }
    ],
    "bugExplanation": "Sai thứ tự dấu ngoặc khi trừ! Minh góp phần còn lại thì phải LẤY TỔNG TRỪ ĐI (BÁCH + NAM): 120 000 − (40 000 + 48 000) = 120 000 − 88 000 = 32 000 đồng!",
    "correctSolution": "Minh góp = 120 000 − (40 000 + 48 000) = 32 000 (đồng)"
  },
  {
    "id": "bug-108",
    "index": 107,
    "topic": "Tìm phân số của một số & Bài toán thực tế",
    "difficulty": 5,
    "title": "Vụ án 108: Bẫy Hai vòi cùng chảy vào bể nước",
    "problem": "Một bể chứa 2 400 lít nước. Vòi thứ nhất chảy trong 1 giờ được 1/3 bể. Vòi thứ hai chảy trong 1 giờ được 1/4 bể. Hỏi cả hai vòi cùng chảy trong 1 giờ được bao nhiêu lít nước?",
    "steps": [
      {
        "num": 1,
        "text": "Trong 1 giờ vòi 1 chảy: 2 400 × 1/3 = 800 (lít)",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Trong 1 giờ vòi 2 chảy: 2 400 × 1/4 = 600 (lít)",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Cả hai vòi chảy trong 1 giờ: 800 − 600 = 200 (lít)",
        "isBug": true
      }
    ],
    "bugExplanation": "Cả hai vòi CÙNG CHẢY vào bể thì phải làm PHÉP CỘNG: 800 + 600 = 1 400 lít nước! Làm phép trừ là một vòi chảy vào và một vòi tháo ra!",
    "correctSolution": "Lượng nước = 800 + 600 = 1 400 (lít)"
  },
  {
    "id": "bug-109",
    "index": 108,
    "topic": "Tìm phân số của một số & Bài toán thực tế",
    "difficulty": 5,
    "title": "Vụ án 109: Bẫy Đổi đơn vị khối lượng kết hợp phân số",
    "problem": "Một kho có 3 tấn 6 tạ gạo. Người ta bán đi 2/9 số gạo đó. Hỏi trong kho còn lại bao nhiêu ki-lô-gam gạo?",
    "steps": [
      {
        "num": 1,
        "text": "Đổi: 3 tấn 6 tạ = 3 600 kg",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Số gạo đã bán là: 3 600 × 2/9 = 800 (kg)",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Đáp số: Trong kho còn lại 800 kg gạo",
        "isBug": true
      }
    ],
    "bugExplanation": "800 kg là số gạo ĐÃ BÁN! Đề bài hỏi số gạo CÒN LẠI: 3 600 − 800 = 2 800 kg gạo!",
    "correctSolution": "Số gạo còn lại = 3 600 − 800 = 2 800 (kg)"
  },
  {
    "id": "bug-110",
    "index": 109,
    "topic": "Tìm phân số của một số & Bài toán thực tế",
    "difficulty": 5,
    "title": "Vụ án 110: Bẫy Toán rút về đơn vị tỉ lệ phân số",
    "problem": "May 8 bộ quần áo đồng phục hết 20m vải. Hỏi may 16 bộ quần áo như thế hết bao nhiêu mét vải?",
    "steps": [
      {
        "num": 1,
        "text": "16 bộ gấp 8 bộ số lần là: 16 : 8 = 2 (lần)",
        "isBug": false
      },
      {
        "num": 2,
        "text": "May 16 bộ cần số mét vải là: 20 : 2 = 10 (m)",
        "isBug": true
      },
      {
        "num": 3,
        "text": "Đáp số: 10m vải",
        "isBug": false
      }
    ],
    "bugExplanation": "May nhiều bộ quần áo hơn thì số vải phải TĂNG LÊN (gấp 2 lần): 20 × 2 = 40 mét vải! Làm phép chia 2 khiến số vải bị giảm một nửa!",
    "correctSolution": "Số mét vải = 20 × 2 = 40 (m)"
  },
  {
    "id": "bug-111",
    "index": 110,
    "topic": "Toán thực tế (Trồng cây, Thời gian, Tỉ lệ nghịch)",
    "difficulty": 3,
    "title": "Vụ án 111: Bẫy Trồng cây hai đầu đường thẳng",
    "problem": "Một đoạn đường thẳng dài 1 200m. Người ta trồng cây ở cả hai bên đường, khoảng cách giữa hai cây liên tiếp là 15m. Biết ở cả hai đầu đường đều có trồng cây. Hỏi có tất cả bao nhiêu cây?",
    "steps": [
      {
        "num": 1,
        "text": "Số khoảng cách trên một bên đường là: 1 200 : 15 = 80 (khoảng)",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Vì hai đầu đều có cây nên số cây một bên là: 80 cây",
        "isBug": true
      },
      {
        "num": 3,
        "text": "Số cây cả hai bên đường là: 80 × 2 = 160 (cây)",
        "isBug": false
      }
    ],
    "bugExplanation": "Bẫy trồng cây ở cả hai đầu đường: Số cây = Số khoảng cách + 1! 80 khoảng cách thì có 80 + 1 = 81 cây ở một bên đường. Cả hai bên đường có: 81 × 2 = 162 cây!",
    "correctSolution": "Số cây 1 bên = 80 + 1 = 81 cây. Cả 2 bên = 81 × 2 = 162 (cây)"
  },
  {
    "id": "bug-112",
    "index": 111,
    "topic": "Toán thực tế (Trồng cây, Thời gian, Tỉ lệ nghịch)",
    "difficulty": 3,
    "title": "Vụ án 112: Bẫy Trồng cây khép kín quanh bờ hồ hình chữ nhật",
    "problem": "Người ta trồng cây xung quanh một bờ hồ hình chữ nhật có chiều dài 150m, chiều rộng 90m. Cây nọ cách cây kia 6m. Hỏi cần bao nhiêu cây?",
    "steps": [
      {
        "num": 1,
        "text": "Chu vi bờ hồ là: (150 + 90) × 2 = 480 (m)",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Số khoảng cách là: 480 : 6 = 80 (khoảng)",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Vì trồng cây nên cộng thêm 1: 80 + 1 = 81 (cây)",
        "isBug": true
      }
    ],
    "bugExplanation": "Đường KHÉP KÍN (vòng tròn, chu vi bờ hồ): SỐ CÂY BẰNG ĐÚNG SỐ KHOẢNG CÁCH (cây đầu tiên trùng với cây kết thúc, không cộng 1)! Số cây cần trồng là: 480 : 6 = 80 cây!",
    "correctSolution": "Đường khép kín: Số cây = Chu vi : Khoảng cách = 480 : 6 = 80 (cây)"
  },
  {
    "id": "bug-113",
    "index": 112,
    "topic": "Toán thực tế (Trồng cây, Thời gian, Tỉ lệ nghịch)",
    "difficulty": 4,
    "title": "Vụ án 113: Bẫy Tỉ lệ nghịch trong bài toán đội thợ đắp đê",
    "problem": "Một đội thợ gồm 15 người đắp xong một đoạn đê trong 8 ngày. Muốn đắp xong đoạn đê đó trong 4 ngày thì cần bao nhiêu người (năng suất mỗi người như nhau)?",
    "steps": [
      {
        "num": 1,
        "text": "Số ngày giảm đi số lần là: 8 : 4 = 2 (lần)",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Vì số ngày giảm 2 lần nên số người cũng giảm 2 lần: 15 : 2 = 7.5 (người)",
        "isBug": true
      },
      {
        "num": 3,
        "text": "Ghi kết quả cần 7.5 người (hoặc làm tròn thành 8 người)",
        "isBug": false
      }
    ],
    "bugExplanation": "Đây là bài toán TỈ LỆ NGHỊCH! Muốn rút ngắn thời gian làm việc (giảm 2 lần) thì PHẢI TĂNG SỐ NGƯỜI LÊN 2 LẦN: 15 × 2 = 30 người!",
    "correctSolution": "Thời gian giảm 2 lần thì số người tăng 2 lần: 15 × 2 = 30 (người)"
  },
  {
    "id": "bug-114",
    "index": 113,
    "topic": "Toán thực tế (Trồng cây, Thời gian, Tỉ lệ nghịch)",
    "difficulty": 4,
    "title": "Vụ án 114: Bẫy Số lần cưa và số lần nghỉ",
    "problem": "Bác thợ mộc cưa một khúc gỗ dài 12m thành các đoạn dài 2m. Mỗi lần cưa mất 6 phút, sau mỗi lần cưa bác nghỉ giải lao 3 phút. Hỏi bác hoàn thành công việc sau bao nhiêu phút?",
    "steps": [
      {
        "num": 1,
        "text": "Số đoạn gỗ cắt được: 12 : 2 = 6 (đoạn)",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Cắt 6 đoạn cần 6 lần cưa",
        "isBug": true
      },
      {
        "num": 3,
        "text": "Thời gian cưa: 6 × 6 = 36 phút; nghỉ: 6 × 3 = 18 phút. Tổng = 54 phút",
        "isBug": false
      }
    ],
    "bugExplanation": "Nhát cưa cuối cùng chia đôi phần gỗ còn lại thành 2 đoạn cuối cùng! Do đó cưa 6 đoạn chỉ cần 6 − 1 = 5 LẦN CƯA! Và chỉ nghỉ giữa các lần cưa 5 − 1 = 4 lần. Tổng thời gian = 5 × 6 + 4 × 3 = 30 + 12 = 42 phút!",
    "correctSolution": "5 lần cưa (30 phút) + 4 lần nghỉ (12 phút) = 42 phút"
  },
  {
    "id": "bug-115",
    "index": 114,
    "topic": "Toán thực tế (Trồng cây, Thời gian, Tỉ lệ nghịch)",
    "difficulty": 4,
    "title": "Vụ án 115: Bẫy Đếm số chữ số dùng để đánh số trang sách",
    "problem": "Để đánh số trang một cuốn sách dày 125 trang (từ trang 1 đến trang 125), người ta phải dùng tất cả bao nhiêu chữ số?",
    "steps": [
      {
        "num": 1,
        "text": "Từ trang 1 đến trang 9 có: (9 − 1 + 1) × 1 = 9 (chữ số)",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Từ trang 10 đến trang 99 có: (99 − 10 + 1) × 2 = 180 (chữ số)",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Từ trang 100 đến trang 125 có: (125 − 100) × 3 = 75 (chữ số)",
        "isBug": true
      },
      {
        "num": 4,
        "text": "Tổng số chữ số là: 9 + 180 + 75 = 264 chữ số",
        "isBug": false
      }
    ],
    "bugExplanation": "Quên cộng 1 khi tính số số hạng! Từ 100 đến 125 có: (125 − 100 + 1) = 26 trang có 3 chữ số! Số chữ số là: 26 × 3 = 78 chữ số. Tổng số chữ số đúng: 9 + 180 + 78 = 267 chữ số!",
    "correctSolution": "9 + 180 + (125 − 100 + 1) × 3 = 9 + 180 + 78 = 267 (chữ số)"
  },
  {
    "id": "bug-116",
    "index": 115,
    "topic": "Toán thực tế (Trồng cây, Thời gian, Tỉ lệ nghịch)",
    "difficulty": 4,
    "title": "Vụ án 116: Bẫy Số khoảng thời gian giữa các tiếng chuông đồng hồ",
    "problem": "Đồng hồ điểm chuông: từ tiếng chuông thứ 1 đến tiếng chuông thứ 5 mất 12 giây. Hỏi từ tiếng thứ 1 đến tiếng thứ 9 mất bao nhiêu giây?",
    "steps": [
      {
        "num": 1,
        "text": "Đếm số tiếng chuông: từ tiếng 1 đến tiếng 5 có 5 tiếng chuông",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Thời gian cho mỗi tiếng chuông là: 12 : 5 = 2.4 (giây)",
        "isBug": true
      },
      {
        "num": 3,
        "text": "Thời gian cho 9 tiếng chuông: 2.4 × 9 = 21.6 (giây)",
        "isBug": false
      }
    ],
    "bugExplanation": "Thời gian trôi qua là thời gian GIỮA CÁC KHOẢNG NGHỈ của tiếng chuông! Từ tiếng 1 đến tiếng 5 có 5 − 1 = 4 khoảng thời gian. 1 khoảng = 12 : 4 = 3 giây. Từ tiếng 1 đến tiếng 9 có 9 − 1 = 8 khoảng: 8 × 3 = 24 giây!",
    "correctSolution": "1 khoảng = 12 : 4 = 3s. 8 khoảng = 8 × 3 = 24 (giây)"
  },
  {
    "id": "bug-117",
    "index": 116,
    "topic": "Toán thực tế (Trồng cây, Thời gian, Tỉ lệ nghịch)",
    "difficulty": 5,
    "title": "Vụ án 117: Bẫy Leo cầu thang giữa các tầng lầu",
    "problem": "Bách leo bộ từ tầng 1 lên tầng 3 mất 36 giây. Hỏi với cùng tốc độ đó, Bách leo từ tầng 1 lên tầng 6 mất bao nhiêu giây?",
    "steps": [
      {
        "num": 1,
        "text": "Từ tầng 1 lên tầng 3 là 3 tầng lầu: 36 : 3 = 12 giây/tầng",
        "isBug": true
      },
      {
        "num": 2,
        "text": "Từ tầng 1 lên tầng 6 là 6 tầng: 12 × 6 = 72 (giây)",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Đáp số: 72 giây",
        "isBug": false
      }
    ],
    "bugExplanation": "Ở tầng 1 thì chưa leo nhịp cầu thang nào! Từ tầng 1 lên tầng 3 chỉ leo 3 − 1 = 2 nhịp cầu thang. 1 nhịp mất: 36 : 2 = 18 giây. Từ tầng 1 lên tầng 6 leo 6 − 1 = 5 nhịp cầu thang: 5 × 18 = 90 giây!",
    "correctSolution": "1 nhịp = 36 : 2 = 18s. 5 nhịp = 5 × 18 = 90 (giây)"
  },
  {
    "id": "bug-118",
    "index": 117,
    "topic": "Toán thực tế (Trồng cây, Thời gian, Tỉ lệ nghịch)",
    "difficulty": 5,
    "title": "Vụ án 118: Bẫy Đổi đơn vị và nhóm xe trong bài toán vận chuyển",
    "problem": "Một đoàn xe gồm: 4 xe đầu mỗi xe chở 3 tấn 5 tạ gạo, 3 xe sau mỗi xe chở 4 tấn 2 tạ gạo. Hỏi trung bình mỗi xe chở bao nhiêu tạ gạo?",
    "steps": [
      {
        "num": 1,
        "text": "Đổi: 3 tấn 5 tạ = 35 tạ; 4 tấn 2 tạ = 42 tạ",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Tổng số tạ gạo: 4 × 35 + 3 × 42 = 140 + 126 = 266 (tạ)",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Tổng số xe: 4 + 3 = 7 (xe)",
        "isBug": false
      },
      {
        "num": 4,
        "text": "Trung bình mỗi xe chở: 266 : 2 = 133 (tạ) (chia cho 2 loại xe)",
        "isBug": true
      }
    ],
    "bugExplanation": "Đoàn có 7 XE thì phải CHIA CHO TỔNG 7 XE: 266 : 7 = 38 tạ gạo/xe! Không được chia cho 2 loại xe!",
    "correctSolution": "Trung bình mỗi xe = 266 : 7 = 38 (tạ)"
  },
  {
    "id": "bug-119",
    "index": 118,
    "topic": "Toán thực tế (Trồng cây, Thời gian, Tỉ lệ nghịch)",
    "difficulty": 5,
    "title": "Vụ án 119: Bẫy Tính thời gian tàu hỏa chạy qua cầu",
    "problem": "Một đoàn tàu hỏa dài 150m chạy qua một cây cầu dài 450m mất 30 giây. Tính vận tốc của đoàn tàu theo mét/giây.",
    "steps": [
      {
        "num": 1,
        "text": "Khi tàu đi qua cầu, mũi tàu vào cầu đến khi đuôi tàu ra khỏi cầu thì quãng đường tàu đi là: 450m (bằng chiều dài cây cầu)",
        "isBug": true
      },
      {
        "num": 2,
        "text": "Vận tốc của tàu là: 450 : 30 = 15 (m/giây)",
        "isBug": false
      },
      {
        "num": 3,
        "text": "Đáp số: 15 m/s",
        "isBug": false
      }
    ],
    "bugExplanation": "Đoàn tàu đi qua cầu hoàn toàn thì QUÃNG ĐƯỜNG PHẢI BẰNG: CHIỀU DÀI CẦU + CHIỀU DÀI ĐOÀN TÀU = 450 + 150 = 600m! Vận tốc đúng = 600 : 30 = 20 m/giây!",
    "correctSolution": "Quãng đường = 450 + 150 = 600m. Vận tốc = 600 : 30 = 20 (m/giây)"
  },
  {
    "id": "bug-120",
    "index": 119,
    "topic": "Toán thực tế (Trồng cây, Thời gian, Tỉ lệ nghịch)",
    "difficulty": 5,
    "title": "Vụ án 120: Bẫy Năm 1010 thuộc thế kỷ nào",
    "problem": "Năm 1010, vua Lý Thái Tổ dời đô từ Hoa Lư về Thăng Long. Hỏi năm 1010 thuộc thế kỷ nào?",
    "steps": [
      {
        "num": 1,
        "text": "Lấy 1010 chia cho 100 được 10 dư 10",
        "isBug": false
      },
      {
        "num": 2,
        "text": "Vì được thương là 10 nên kết luận năm 1010 thuộc thế kỷ 10 (X)",
        "isBug": true
      },
      {
        "num": 3,
        "text": "Đáp số: Thế kỷ X",
        "isBug": false
      }
    ],
    "bugExplanation": "Năm 1010 có phần dư 10 năm, nghĩa là thế kỷ thứ 10 đã trôi qua và ĐÃ BƯỚC SANG THẾ KỶ THỨ 11 (XI)! Thế kỷ X kết thúc vào năm 1000. Năm 1010 thuộc Thế kỷ XI!",
    "correctSolution": "Năm 1010 thuộc Thế kỷ XI (11)"
  }
];

export class SpotTheBugSession {
  constructor(initialIndex = 0) {
    this.currentIndex = initialIndex;
    this.solvedIds = new Set();
    this.selectedStep = null;
    this.feedback = null;
  }

  getCurrentCase() {
    return BUG_CASES[this.currentIndex % BUG_CASES.length];
  }

  selectStep(stepNum) {
    const currentCase = this.getCurrentCase();
    this.selectedStep = stepNum;
    const step = currentCase.steps.find(s => s.num === stepNum);

    if (!step) return null;

    if (step.isBug) {
      this.solvedIds.add(currentCase.id);
      this.feedback = {
        isCorrect: true,
        message: "🎉 CHÍNH XÁC! Thám tử Bách đã phá án xuất sắc và bắt đúng bước làm sai!",
        explanation: currentCase.bugExplanation,
        solution: currentCase.correctSolution
      };
    } else {
      this.feedback = {
        isCorrect: false,
        message: `Bước ${stepNum} này bạn học sinh tính toán và lập luận hoàn toàn chính xác! Thám tử Bách hãy kiểm tra kĩ quy tắc hoặc phép tính ở các bước còn lại nhé!`,
        explanation: null,
        solution: null
      };
    }
    return this.feedback;
  }

  nextCase() {
    this.currentIndex = (this.currentIndex + 1) % BUG_CASES.length;
    this.selectedStep = null;
    this.feedback = null;
    return this.getCurrentCase();
  }

  prevCase() {
    this.currentIndex = (this.currentIndex - 1 + BUG_CASES.length) % BUG_CASES.length;
    this.selectedStep = null;
    this.feedback = null;
    return this.getCurrentCase();
  }
}
