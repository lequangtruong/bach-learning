// js/spatial-3d-challenges-part1.js - Thử thách Không gian 3D & Gấp hộp (Phần 1: Bài 1 - 30)
// Chuẩn bài thi Năng khiếu GEP Singapore & Mensa dành cho học sinh Lớp 4

export const SPATIAL_3D_CHALLENGES_PART1 = [
  {
    "id": "sp3d-hb-01",
    "mode": "hidden-blocks",
    "difficulty": 1,
    "title": "Tháp Khối Bậc Thang Cơ Bản",
    "prompt": "Quan sát mô hình khối lập phương 3D dưới đây. Có tất cả bao nhiêu khối lập phương đơn vị để tạo nên hình này (kể cả những khối bị che khuất ở bên dưới và phía sau)?",
    "cubes": [
      [
        0,
        0,
        0
      ],
      [
        1,
        0,
        0
      ],
      [
        0,
        1,
        0
      ],
      [
        1,
        1,
        0
      ],
      [
        0,
        0,
        1
      ],
      [
        1,
        0,
        1
      ]
    ],
    "correctAnswer": 6,
    "options": [
      5,
      6,
      7,
      8
    ],
    "explanation": "Tầng 1 (đáy) có 4 khối tạo thành hình chữ nhật 2x2. Tầng 2 có 2 khối xếp chồng lên hàng trước. Tổng cộng: 4 + 2 = 6 khối."
  },
  {
    "id": "sp3d-hb-02",
    "mode": "hidden-blocks",
    "difficulty": 2,
    "title": "Kim Tự Tháp Bậc Thang 3 Tầng",
    "prompt": "Hình khối dưới đây gồm các tầng xếp chồng lên nhau không có khoảng trống rỗng bên dưới. Hỏi có bao nhiêu khối lập phương tất cả?",
    "cubes": [
      [
        0,
        0,
        0
      ],
      [
        1,
        0,
        0
      ],
      [
        2,
        0,
        0
      ],
      [
        0,
        1,
        0
      ],
      [
        1,
        1,
        0
      ],
      [
        2,
        1,
        0
      ],
      [
        0,
        2,
        0
      ],
      [
        1,
        2,
        0
      ],
      [
        2,
        2,
        0
      ],
      [
        0,
        0,
        1
      ],
      [
        1,
        0,
        1
      ],
      [
        0,
        1,
        1
      ],
      [
        1,
        1,
        1
      ],
      [
        0,
        0,
        2
      ]
    ],
    "correctAnswer": 14,
    "options": [
      12,
      13,
      14,
      15
    ],
    "explanation": "Đếm theo từng tầng từ dưới lên: Tầng đáy có 3 × 3 = 9 khối. Tầng giữa có 2 × 2 = 4 khối. Tầng đỉnh có 1 khối. Tổng: 9 + 4 + 1 = 14 khối."
  },
  {
    "id": "sp3d-hb-03",
    "mode": "hidden-blocks",
    "difficulty": 2,
    "title": "Khối Chữ L Vươn Cao",
    "prompt": "Đếm tổng số khối lập phương tạo nên mô hình hình chữ L 3 chiều này:",
    "cubes": [
      [
        0,
        0,
        0
      ],
      [
        1,
        0,
        0
      ],
      [
        2,
        0,
        0
      ],
      [
        3,
        0,
        0
      ],
      [
        0,
        1,
        0
      ],
      [
        0,
        2,
        0
      ],
      [
        0,
        0,
        1
      ],
      [
        0,
        0,
        2
      ],
      [
        0,
        0,
        3
      ]
    ],
    "correctAnswer": 9,
    "options": [
      8,
      9,
      10,
      11
    ],
    "explanation": "Đáy gồm 6 khối xếp thành chữ L trên mặt sàn. Cột góc trái có thêm 3 khối dựng đứng lên cao. Tổng số khối: 6 + 3 = 9 khối."
  },
  {
    "id": "sp3d-hb-04",
    "mode": "hidden-blocks",
    "difficulty": 3,
    "title": "Khối Hộp Bị Khuyết Góc",
    "prompt": "Một khối lập phương lớn 3x3x3 bị gỡ mất một số khối ở góc. Hãy đếm xem còn lại bao nhiêu khối lập phương đơn vị?",
    "cubes": [
      [
        0,
        0,
        0
      ],
      [
        1,
        0,
        0
      ],
      [
        2,
        0,
        0
      ],
      [
        0,
        1,
        0
      ],
      [
        1,
        1,
        0
      ],
      [
        2,
        1,
        0
      ],
      [
        0,
        2,
        0
      ],
      [
        1,
        2,
        0
      ],
      [
        2,
        2,
        0
      ],
      [
        0,
        0,
        1
      ],
      [
        1,
        0,
        1
      ],
      [
        2,
        0,
        1
      ],
      [
        0,
        1,
        1
      ],
      [
        1,
        1,
        1
      ],
      [
        2,
        1,
        1
      ],
      [
        0,
        2,
        1
      ],
      [
        1,
        2,
        1
      ],
      [
        2,
        2,
        1
      ],
      [
        1,
        0,
        2
      ],
      [
        2,
        0,
        2
      ],
      [
        1,
        1,
        2
      ],
      [
        2,
        1,
        2
      ]
    ],
    "correctAnswer": 22,
    "options": [
      20,
      21,
      22,
      23
    ],
    "explanation": "Tầng 1 đủ 9 khối. Tầng 2 đủ 9 khối. Tầng 3 còn lại 4 khối. Tổng cộng: 9 + 9 + 4 = 22 khối (đã gỡ bớt 5 khối trên đỉnh)."
  },
  {
    "id": "sp3d-hb-05",
    "mode": "hidden-blocks",
    "difficulty": 3,
    "title": "Đường Hầm Xuyên Khối",
    "prompt": "Mô hình khối hộp dưới đây có một lối đi xuyên qua tâm. Có bao nhiêu khối lập phương đơn vị được dùng để lắp ghép?",
    "cubes": [
      [
        0,
        0,
        0
      ],
      [
        1,
        0,
        0
      ],
      [
        2,
        0,
        0
      ],
      [
        0,
        2,
        0
      ],
      [
        1,
        2,
        0
      ],
      [
        2,
        2,
        0
      ],
      [
        0,
        0,
        1
      ],
      [
        1,
        0,
        1
      ],
      [
        2,
        0,
        1
      ],
      [
        0,
        2,
        1
      ],
      [
        1,
        2,
        1
      ],
      [
        2,
        2,
        1
      ],
      [
        0,
        0,
        2
      ],
      [
        1,
        0,
        2
      ],
      [
        2,
        0,
        2
      ],
      [
        0,
        1,
        2
      ],
      [
        1,
        1,
        2
      ],
      [
        2,
        1,
        2
      ],
      [
        0,
        2,
        2
      ],
      [
        1,
        2,
        2
      ],
      [
        2,
        2,
        2
      ]
    ],
    "correctAnswer": 21,
    "options": [
      19,
      20,
      21,
      22
    ],
    "explanation": "Hai chân cầu ở tầng 1 và 2 mỗi bên có 3x2 = 6 khối. Tầng mái trên cùng phủ kín 3x3 = 9 khối. Tổng cộng: 6 + 6 + 9 = 21 khối."
  },
  {
    "id": "sp3d-hb-06",
    "mode": "hidden-blocks",
    "difficulty": 4,
    "title": "Cầu Thang Xoắn Góc Olympic",
    "prompt": "Cầu thang khối 4 tầng xếp góc. Mỗi tầng được nâng đỡ bởi các khối ẩn phía dưới. Tổng số khối lập phương là bao nhiêu?",
    "cubes": [
      [
        0,
        0,
        0
      ],
      [
        1,
        0,
        0
      ],
      [
        2,
        0,
        0
      ],
      [
        3,
        0,
        0
      ],
      [
        0,
        0,
        1
      ],
      [
        1,
        0,
        1
      ],
      [
        2,
        0,
        1
      ],
      [
        0,
        0,
        2
      ],
      [
        1,
        0,
        2
      ],
      [
        0,
        0,
        3
      ]
    ],
    "correctAnswer": 10,
    "options": [
      9,
      10,
      11,
      12
    ],
    "explanation": "Cột 1 có 4 khối cao. Cột 2 có 3 khối. Cột 3 có 2 khối. Cột 4 có 1 khối. Tổng: 4 + 3 + 2 + 1 = 10 khối."
  },
  {
    "id": "sp3d-hb-07",
    "mode": "hidden-blocks",
    "difficulty": 4,
    "title": "Khung Chữ U Không Gian 3D",
    "prompt": "Một cấu trúc không gian hình chữ U đối xứng. Hãy đếm chính xác số khối lập phương đơn vị cấu thành:",
    "cubes": [
      [
        0,
        0,
        0
      ],
      [
        1,
        0,
        0
      ],
      [
        2,
        0,
        0
      ],
      [
        3,
        0,
        0
      ],
      [
        0,
        1,
        0
      ],
      [
        3,
        1,
        0
      ],
      [
        0,
        2,
        0
      ],
      [
        3,
        2,
        0
      ],
      [
        0,
        0,
        1
      ],
      [
        3,
        0,
        1
      ],
      [
        0,
        0,
        2
      ],
      [
        3,
        0,
        2
      ]
    ],
    "correctAnswer": 12,
    "options": [
      10,
      12,
      14,
      16
    ],
    "explanation": "Phần đáy chữ U gồm 4 + 2 + 2 = 8 khối ở tầng 0. Hai trụ góc trước dựng thêm mỗi trụ 2 khối lên cao (+4 khối). Tổng: 8 + 4 = 12 khối."
  },
  {
    "id": "sp3d-hb-08",
    "mode": "hidden-blocks",
    "difficulty": 3,
    "title": "Tháp Chữ Thập Đối Xứng 3 Tầng",
    "prompt": "Một đài quan sát hình chữ thập gồm 2 tầng chữ thập dày dặn và 1 khối chóp trên đỉnh. Đếm tổng số khối lập phương đơn vị:",
    "cubes": [
      [
        1,
        0,
        0
      ],
      [
        0,
        1,
        0
      ],
      [
        1,
        1,
        0
      ],
      [
        2,
        1,
        0
      ],
      [
        1,
        2,
        0
      ],
      [
        1,
        0,
        1
      ],
      [
        0,
        1,
        1
      ],
      [
        1,
        1,
        1
      ],
      [
        2,
        1,
        1
      ],
      [
        1,
        2,
        1
      ],
      [
        1,
        1,
        2
      ]
    ],
    "correctAnswer": 11,
    "options": [
      9,
      10,
      11,
      12
    ],
    "explanation": "Tầng 1 có 5 khối chữ thập. Tầng 2 có 5 khối chữ thập xếp chồng lên. Tầng 3 có 1 khối đặt ở đúng tâm. Tổng: 5 + 5 + 1 = 11 khối."
  },
  {
    "id": "sp3d-hb-09",
    "mode": "hidden-blocks",
    "difficulty": 3,
    "title": "Khối Lập Phương Bị Rút Lõi Tâm",
    "prompt": "Một khối lập phương đặc 3x3x3 bị thợ đục rỗng cột tâm thẳng đứng từ trên xuống dưới đáy. Còn lại bao nhiêu khối lập phương?",
    "cubes": [
      [
        0,
        0,
        0
      ],
      [
        1,
        0,
        0
      ],
      [
        2,
        0,
        0
      ],
      [
        0,
        1,
        0
      ],
      [
        2,
        1,
        0
      ],
      [
        0,
        2,
        0
      ],
      [
        1,
        2,
        0
      ],
      [
        2,
        2,
        0
      ],
      [
        0,
        0,
        1
      ],
      [
        1,
        0,
        1
      ],
      [
        2,
        0,
        1
      ],
      [
        0,
        1,
        1
      ],
      [
        2,
        1,
        1
      ],
      [
        0,
        2,
        1
      ],
      [
        1,
        2,
        1
      ],
      [
        2,
        2,
        1
      ],
      [
        0,
        0,
        2
      ],
      [
        1,
        0,
        2
      ],
      [
        2,
        0,
        2
      ],
      [
        0,
        1,
        2
      ],
      [
        2,
        1,
        2
      ],
      [
        0,
        2,
        2
      ],
      [
        1,
        2,
        2
      ],
      [
        2,
        2,
        2
      ]
    ],
    "correctAnswer": 24,
    "options": [
      21,
      23,
      24,
      25
    ],
    "explanation": "Khối 3x3x3 nguyên bản có 3 × 3 × 3 = 27 khối. Cột tâm rỗng gồm 3 khối chạy từ tầng 1 đến tầng 3. Số khối còn lại: 27 − 3 = 24 khối."
  },
  {
    "id": "sp3d-hb-10",
    "mode": "hidden-blocks",
    "difficulty": 2,
    "title": "Bậc Thang Chữ Z Zig-Zag",
    "prompt": "Cấu trúc hình bậc thang uốn lượn hình chữ Z trong không gian. Hỏi có bao nhiêu khối đơn vị tất cả?",
    "cubes": [
      [
        0,
        0,
        0
      ],
      [
        1,
        0,
        0
      ],
      [
        1,
        1,
        0
      ],
      [
        2,
        1,
        0
      ],
      [
        1,
        1,
        1
      ],
      [
        2,
        1,
        1
      ],
      [
        2,
        1,
        2
      ]
    ],
    "correctAnswer": 7,
    "options": [
      6,
      7,
      8,
      9
    ],
    "explanation": "Tầng đáy gồm 4 khối hình chữ Z. Tầng hai có 2 khối xếp lên nhánh phải. Tầng ba có 1 khối trên cùng. Tổng: 4 + 2 + 1 = 7 khối."
  },
  {
    "id": "sp3d-hb-11",
    "mode": "hidden-blocks",
    "difficulty": 3,
    "title": "Tháp Đôi Nối Nhịp Cầu Treo",
    "prompt": "Hai trụ tháp cao 3 tầng đứng song song, được liên kết bởi một nhịp cầu ở tầng cao nhất. Có bao nhiêu khối lập phương cấu thành?",
    "cubes": [
      [
        0,
        0,
        0
      ],
      [
        0,
        0,
        1
      ],
      [
        0,
        0,
        2
      ],
      [
        2,
        0,
        0
      ],
      [
        2,
        0,
        1
      ],
      [
        2,
        0,
        2
      ],
      [
        1,
        0,
        2
      ]
    ],
    "correctAnswer": 7,
    "options": [
      6,
      7,
      8,
      9
    ],
    "explanation": "Mỗi trụ tháp gồm 3 khối xếp chồng lên nhau (2 trụ = 6 khối). Một khối cầu bắc ngang nối hai trụ ở tầng 3. Tổng cộng: 3 + 3 + 1 = 7 khối."
  },
  {
    "id": "sp3d-hb-12",
    "mode": "hidden-blocks",
    "difficulty": 3,
    "title": "Lâu Đài Thành Lũy Bốn Góc",
    "prompt": "Một sàn lâu đài kích thước 3x3, tại 4 góc nhô lên các tháp canh cao thêm 1 tầng. Tổng số khối lập phương là bao nhiêu?",
    "cubes": [
      [
        0,
        0,
        0
      ],
      [
        1,
        0,
        0
      ],
      [
        2,
        0,
        0
      ],
      [
        0,
        1,
        0
      ],
      [
        1,
        1,
        0
      ],
      [
        2,
        1,
        0
      ],
      [
        0,
        2,
        0
      ],
      [
        1,
        2,
        0
      ],
      [
        2,
        2,
        0
      ],
      [
        0,
        0,
        1
      ],
      [
        2,
        0,
        1
      ],
      [
        0,
        2,
        1
      ],
      [
        2,
        2,
        1
      ]
    ],
    "correctAnswer": 13,
    "options": [
      11,
      12,
      13,
      14
    ],
    "explanation": "Tầng nền 3x3 đặc gồm 9 khối. Tầng trên có 4 chòi canh đặt ở 4 góc. Tổng: 9 + 4 = 13 khối."
  },
  {
    "id": "sp3d-hb-13",
    "mode": "hidden-blocks",
    "difficulty": 4,
    "title": "Kim Tự Tháp Bậc Thang Cổ Đại",
    "prompt": "Kim tự tháp bậc thang gồm tầng đáy 4x4, tầng hai 3x3, tầng ba 2x2 và đỉnh 1 khối. Hỏi có tất cả bao nhiêu khối?",
    "cubes": [
      [
        0,
        0,
        0
      ],
      [
        1,
        0,
        0
      ],
      [
        2,
        0,
        0
      ],
      [
        3,
        0,
        0
      ],
      [
        0,
        1,
        0
      ],
      [
        1,
        1,
        0
      ],
      [
        2,
        1,
        0
      ],
      [
        3,
        1,
        0
      ],
      [
        0,
        2,
        0
      ],
      [
        1,
        2,
        0
      ],
      [
        2,
        2,
        0
      ],
      [
        3,
        2,
        0
      ],
      [
        0,
        3,
        0
      ],
      [
        1,
        3,
        0
      ],
      [
        2,
        3,
        0
      ],
      [
        3,
        3,
        0
      ],
      [
        0,
        0,
        1
      ],
      [
        1,
        0,
        1
      ],
      [
        2,
        0,
        1
      ],
      [
        0,
        1,
        1
      ],
      [
        1,
        1,
        1
      ],
      [
        2,
        1,
        1
      ],
      [
        0,
        2,
        1
      ],
      [
        1,
        2,
        1
      ],
      [
        2,
        2,
        1
      ],
      [
        0,
        0,
        2
      ],
      [
        1,
        0,
        2
      ],
      [
        0,
        1,
        2
      ],
      [
        1,
        1,
        2
      ],
      [
        0,
        0,
        3
      ]
    ],
    "correctAnswer": 30,
    "options": [
      28,
      29,
      30,
      31
    ],
    "explanation": "Đếm theo tổng bình phương các tầng: 4² + 3² + 2² + 1² = 16 + 9 + 4 + 1 = 30 khối lập phương."
  },
  {
    "id": "sp3d-hb-14",
    "mode": "hidden-blocks",
    "difficulty": 4,
    "title": "Cầu Thang Xoắn Trôn Ốc 4 Tầng",
    "prompt": "Cầu thang cuốn quanh một trục góc 2x2, mỗi tầng xoay một vị trí và leo cao thêm 1 khối. Có bao nhiêu khối tất cả?",
    "cubes": [
      [
        0,
        0,
        0
      ],
      [
        1,
        0,
        0
      ],
      [
        1,
        1,
        0
      ],
      [
        0,
        1,
        0
      ],
      [
        1,
        0,
        1
      ],
      [
        1,
        1,
        1
      ],
      [
        0,
        1,
        1
      ],
      [
        1,
        1,
        2
      ],
      [
        0,
        1,
        2
      ],
      [
        0,
        1,
        3
      ]
    ],
    "correctAnswer": 10,
    "options": [
      9,
      10,
      11,
      12
    ],
    "explanation": "Tầng 1 có 4 khối, tầng 2 có 3 khối, tầng 3 có 2 khối, tầng 4 có 1 khối. Tổng số khối: 4 + 3 + 2 + 1 = 10 khối."
  },
  {
    "id": "sp3d-hb-15",
    "mode": "hidden-blocks",
    "difficulty": 3,
    "title": "Chiếc Ghế Bành Thư Giãn 3D",
    "prompt": "Mô hình chiếc ghế bành khối lập phương gồm đệm ngồi, lưng tựa 2 tầng và hai tay vịn. Có tất cả bao nhiêu khối?",
    "cubes": [
      [
        0,
        0,
        0
      ],
      [
        1,
        0,
        0
      ],
      [
        0,
        1,
        0
      ],
      [
        1,
        1,
        0
      ],
      [
        0,
        1,
        1
      ],
      [
        1,
        1,
        1
      ],
      [
        0,
        1,
        2
      ],
      [
        1,
        1,
        2
      ],
      [
        0,
        0,
        1
      ],
      [
        1,
        0,
        1
      ]
    ],
    "correctAnswer": 10,
    "options": [
      8,
      9,
      10,
      11
    ],
    "explanation": "Phần đệm đáy có 4 khối. Lưng tựa gồm 4 khối dựng đứng phía sau. Hai tay vịn phía trước thêm 2 khối. Tổng cộng: 4 + 4 + 2 = 10 khối."
  },
  {
    "id": "sp3d-hb-16",
    "mode": "hidden-blocks",
    "difficulty": 4,
    "title": "Cây Nấm Đài Tưởng Niệm Mâm Xòe",
    "prompt": "Một cột trụ đứng gồm chân và thân cột, phía trên xòe ra một mái che hình vuông 3x3 phẳng đặc. Có bao nhiêu khối lập phương?",
    "cubes": [
      [
        1,
        1,
        0
      ],
      [
        1,
        1,
        1
      ],
      [
        0,
        0,
        2
      ],
      [
        1,
        0,
        2
      ],
      [
        2,
        0,
        2
      ],
      [
        0,
        1,
        2
      ],
      [
        1,
        1,
        2
      ],
      [
        2,
        1,
        2
      ],
      [
        0,
        2,
        2
      ],
      [
        1,
        2,
        2
      ],
      [
        2,
        2,
        2
      ]
    ],
    "correctAnswer": 11,
    "options": [
      9,
      10,
      11,
      12
    ],
    "explanation": "Chân cột có 1 khối, thân cột có 1 khối, mâm xòe tầng trên cùng có 3x3 = 9 khối. Tổng cộng: 1 + 1 + 9 = 11 khối."
  },
  {
    "id": "sp3d-hb-17",
    "mode": "hidden-blocks",
    "difficulty": 4,
    "title": "Khối Hộp Bàn Cờ Ca-rô Lồi Lõm",
    "prompt": "Mô hình hoa văn ca-rô 2 tầng: Tầng 1 gồm 5 khối ở các ô màu đen bàn cờ 3x3, tầng 2 gồm 4 khối đặt vào các ô màu trắng. Tổng số khối là:",
    "cubes": [
      [
        0,
        0,
        0
      ],
      [
        2,
        0,
        0
      ],
      [
        1,
        1,
        0
      ],
      [
        0,
        2,
        0
      ],
      [
        2,
        2,
        0
      ],
      [
        1,
        0,
        1
      ],
      [
        0,
        1,
        1
      ],
      [
        2,
        1,
        1
      ],
      [
        1,
        2,
        1
      ]
    ],
    "correctAnswer": 9,
    "options": [
      8,
      9,
      10,
      11
    ],
    "explanation": "Tầng đáy có 5 khối (4 góc và 1 tâm). Tầng trên có 4 khối đặt ở các vị trí cạnh. Tổng: 5 + 4 = 9 khối."
  },
  {
    "id": "sp3d-hb-18",
    "mode": "hidden-blocks",
    "difficulty": 4,
    "title": "Ngôi Sao Chữ Thập 6 Hướng Không Gian",
    "prompt": "Một khối lập phương tâm ở giữa và 6 khối khác gắn vào đúng 6 mặt của nó (trên, dưới, trái, phải, trước, sau). Có bao nhiêu khối tất cả?",
    "cubes": [
      [
        1,
        1,
        1
      ],
      [
        1,
        1,
        0
      ],
      [
        1,
        1,
        2
      ],
      [
        0,
        1,
        1
      ],
      [
        2,
        1,
        1
      ],
      [
        1,
        0,
        1
      ],
      [
        1,
        2,
        1
      ]
    ],
    "correctAnswer": 7,
    "options": [
      6,
      7,
      8,
      9
    ],
    "explanation": "1 khối ở tâm ở giữa + 6 khối gắn liền vào 6 mặt đối diện của nó trong không gian 3 chiều. Tổng: 1 + 6 = 7 khối."
  },
  {
    "id": "sp3d-pr-01",
    "mode": "projections",
    "difficulty": 1,
    "title": "Hình Chiếu Từ Trên Xuống (Top View)",
    "prompt": "Nếu nhìn thẳng từ TRÊN TRỜI XUỐNG (Top View) vuông góc với mặt đất, em sẽ nhìn thấy hình dạng nào?",
    "viewType": "top",
    "cubes": [
      [
        0,
        0,
        0
      ],
      [
        1,
        0,
        0
      ],
      [
        2,
        0,
        0
      ],
      [
        0,
        1,
        0
      ],
      [
        0,
        0,
        1
      ]
    ],
    "correctAnswer": "Chữ L gồm 4 ô vuông",
    "options": [
      "Chữ L gồm 4 ô vuông",
      "Hình vuông 2x2 gồm 4 ô",
      "Hàng ngang gồm 3 ô",
      "Chữ T gồm 4 ô"
    ],
    "explanation": "Khi nhìn từ trên cao xuống, chiều cao Z bị triệt tiêu, chỉ còn lại tọa độ mặt sàn (X, Y): 3 ô hàng ngang (0,0), (1,0), (2,0) và 1 ô nhô ra ở (0,1), tạo thành chữ L."
  },
  {
    "id": "sp3d-pr-02",
    "mode": "projections",
    "difficulty": 2,
    "title": "Hình Chiếu Mặt Trước (Front View)",
    "prompt": "Đứng đối diện nhìn thẳng vào MẶT TRƯỚC (Front View) của khối hình, bóng của hình gồm bao nhiêu ô vuông?",
    "viewType": "front",
    "cubes": [
      [
        0,
        0,
        0
      ],
      [
        1,
        0,
        0
      ],
      [
        2,
        0,
        0
      ],
      [
        1,
        0,
        1
      ],
      [
        2,
        0,
        1
      ],
      [
        2,
        0,
        2
      ]
    ],
    "correctAnswer": "Hình bậc thang 3 bậc (6 ô vuông)",
    "options": [
      "Hình chữ nhật 3x2 (6 ô)",
      "Hình bậc thang 3 bậc (6 ô vuông)",
      "Một cột đứng 3 ô",
      "Hình chữ L 5 ô"
    ],
    "explanation": "Nhìn từ mặt trước: Cột trái cao 1 khối, cột giữa cao 2 khối, cột phải cao 3 khối. Hình chiếu là bậc thang tăng dần gồm 1 + 2 + 3 = 6 ô vuông."
  },
  {
    "id": "sp3d-pr-03",
    "mode": "projections",
    "difficulty": 3,
    "title": "Hình Chiếu Cạnh Bên (Side View)",
    "prompt": "Nếu nhìn từ BÊN HÔNG PHẢI (Side View) sang, hình chiếu phẳng có hình dáng gì?",
    "viewType": "side",
    "cubes": [
      [
        0,
        0,
        0
      ],
      [
        0,
        1,
        0
      ],
      [
        0,
        2,
        0
      ],
      [
        0,
        0,
        1
      ],
      [
        0,
        2,
        1
      ],
      [
        0,
        1,
        2
      ]
    ],
    "correctAnswer": "Chữ V ngược / Mái nhà (5 ô vuông)",
    "options": [
      "Khung chữ U (5 ô)",
      "Chữ V ngược / Mái nhà (5 ô vuông)",
      "Hình vuông 3x3 (9 ô)",
      "Hàng ngang 3 ô"
    ],
    "explanation": "Nhìn từ cạnh bên: Cột trước cao 2 khối, cột sau cao 2 khối, cột giữa cao 3 khối. Đỉnh cao nhất ở giữa tạo thành hình mái nhà đối xứng."
  },
  {
    "id": "sp3d-pr-04",
    "mode": "projections",
    "difficulty": 3,
    "title": "Nhận Diện Khối Qua 2 Hình Chiếu",
    "prompt": "Một khối hình có hình chiếu Trên xuống là hình chữ L (3 ô) và hình chiếu Trước là hình vuông 2x2. Số khối tối thiểu để tạo hình này là bao nhiêu?",
    "viewType": "deduce",
    "cubes": [
      [
        0,
        0,
        0
      ],
      [
        1,
        0,
        0
      ],
      [
        0,
        1,
        0
      ],
      [
        0,
        0,
        1
      ],
      [
        1,
        0,
        1
      ]
    ],
    "correctAnswer": 5,
    "options": [
      4,
      5,
      6,
      7
    ],
    "explanation": "Mặt sàn chiếm 3 vị trí (0,0), (1,0), (0,1). Để hình chiếu trước có 2x2, cần ít nhất 2 cột cao 2 tầng ở hàng trước (cột 0 và cột 1). Do đó cần 2 + 2 + 1 = 5 khối."
  },
  {
    "id": "sp3d-pr-05",
    "mode": "projections",
    "difficulty": 4,
    "title": "Hình Chiếu Cột Ẩn Phía Sau",
    "prompt": "Quan sát mô hình 3D. Cột nào bị che khuất hoàn toàn khi nhìn từ Mặt Trước (Front View)?",
    "viewType": "front",
    "cubes": [
      [
        0,
        0,
        0
      ],
      [
        0,
        0,
        1
      ],
      [
        0,
        0,
        2
      ],
      [
        0,
        1,
        0
      ],
      [
        0,
        1,
        1
      ]
    ],
    "correctAnswer": "Cột sau tại (0,1) cao 2 tầng bị che hoàn toàn",
    "options": [
      "Cột sau tại (0,1) cao 2 tầng bị che hoàn toàn",
      "Cột trước tại (0,0) bị che",
      "Không có cột nào bị che khuất",
      "Cả hai cột đều nhìn thấy đầy đủ"
    ],
    "explanation": "Cột trước cao 3 tầng, nằm ngay phía trước cột sau cao 2 tầng. Do đó nhìn thẳng mặt trước thì cột sau 2 tầng bị che khuất 100%."
  },
  {
    "id": "sp3d-pr-06",
    "mode": "projections",
    "difficulty": 4,
    "title": "Đối Xứng Qua Gương Chiếu 3D",
    "prompt": "Khi phản chiếu khối hình qua một mặt phẳng gương đứng song song mặt trước, hình chiếu bên hông (Side View) thay đổi thế nào?",
    "viewType": "side",
    "cubes": [
      [
        0,
        0,
        0
      ],
      [
        0,
        1,
        0
      ],
      [
        0,
        0,
        1
      ]
    ],
    "correctAnswer": "Lật ngược chiều Trái ↔ Phải",
    "options": [
      "Lật ngược chiều Trái ↔ Phải",
      "Lật ngược chiều Trên ↕ Dưới",
      "Giữ nguyên không thay đổi",
      "Xoay một góc 90 độ"
    ],
    "explanation": "Phản chiếu qua gương song song mặt trước bảo toàn chiều cao (trên-dưới) nhưng đảo ngược chiều sâu trước-sau, dẫn đến hình chiếu bên hông bị lật ngang Trái ↔ Phải."
  },
  {
    "id": "sp3d-pr-07",
    "mode": "projections",
    "difficulty": 3,
    "title": "Hình Chiếu Trên Xuống Của Cầu Nối",
    "prompt": "Mô hình gồm 2 trụ tháp và cầu nối trên không tại tầng 3. Nhìn từ trên xuống (Top View), hình chiếu phẳng trông như thế nào?",
    "viewType": "top",
    "cubes": [
      [
        0,
        0,
        0
      ],
      [
        0,
        0,
        1
      ],
      [
        0,
        0,
        2
      ],
      [
        2,
        0,
        0
      ],
      [
        2,
        0,
        1
      ],
      [
        2,
        0,
        2
      ],
      [
        1,
        0,
        2
      ]
    ],
    "correctAnswer": "Một hàng ngang liền mạch gồm 3 ô vuông",
    "options": [
      "Một hàng ngang liền mạch gồm 3 ô vuông",
      "Hai ô vuông rời nhau có khoảng trống ở giữa",
      "Hình chữ L gồm 3 ô",
      "Hình chữ T gồm 4 ô"
    ],
    "explanation": "Khi nhìn từ trên cao xuống, nhịp cầu ở tọa độ (1,0) đã che phủ khoảng trống giữa 2 trụ (0,0) và (2,0), tạo thành 1 hàng ngang liền khối gồm đúng 3 ô vuông."
  },
  {
    "id": "sp3d-hb-19",
    "mode": "hidden-blocks",
    "difficulty": 5,
    "title": "Olympic SASMO: Rubik 4x4x4 Đục Thủng 3 Trục",
    "prompt": "Một khối lập phương lớn 4x4x4 gồm 64 khối nhỏ. Người ta đục xuyên thủng 4 khối ở tâm dọc theo cả 3 trục tọa độ X, Y, Z (mỗi trục đục một cột rỗng 2x2 xuyên qua). Hỏi còn lại bao nhiêu khối lập phương đơn vị?",
    "correctAnswer": 32,
    "options": [
      28,
      30,
      32,
      36
    ],
    "explanation": "Khối lớn có 4 × 4 × 4 = 64 khối. Mỗi trục xuyên có cột 2 × 2 × 4 = 16 khối. Có 3 trục xuyên => tổng trước khi trừ giao: 3 × 16 = 48 khối. Vùng tâm 2 × 2 × 2 = 8 khối là giao điểm chung của cả 3 trục (được tính 3 lần). Số khối bị đục thực tế: 3 × 16 - 2 × 8 = 32 khối. Số khối còn lại: 64 - 32 = 32 khối."
  },
  {
    "id": "sp3d-hb-20",
    "mode": "hidden-blocks",
    "difficulty": 5,
    "title": "Kangaroo Math: Khối 3x3x3 Sơn Toàn Bộ Mặt Ngoài",
    "prompt": "Sơn màu đỏ toàn bộ 6 mặt ngoài của khối lập phương 3x3x3 (gồm 27 khối con), sau đó rã ra thành 27 khối đơn vị. Hỏi có bao nhiêu khối con được sơn ĐÚNG 2 MẶT?",
    "correctAnswer": 12,
    "options": [
      8,
      12,
      16,
      18
    ],
    "explanation": "Khối có đúng 2 mặt sơn đỏ là các khối nằm ở trung điểm các cạnh (không phải ở đỉnh góc). Một khối lập phương có 12 cạnh, mỗi cạnh có 1 khối con ở giữa được sơn đúng 2 mặt. Vậy có đúng 12 khối."
  },
  {
    "id": "sp3d-hb-21",
    "mode": "hidden-blocks",
    "difficulty": 5,
    "title": "Mensa: Số Khối Hoàn Toàn Ẩn Kín Bên Trong",
    "prompt": "Một khối lập phương lớn kích thước 4x4x4 được ghép từ 64 khối đơn vị. Hỏi có bao nhiêu khối con hoàn toàn ẨN KÍN bên trong (không chạm vào bất kỳ mặt ngoài nào)?",
    "correctAnswer": 8,
    "options": [
      1,
      4,
      8,
      12
    ],
    "explanation": "Khối ẩn kín bên trong tạo thành một khối lập phương con sau khi bóc đi lớp vỏ dày 1 đơn vị ở cả 6 mặt. Kích thước phần lõi bên trong: (4 - 2) × (4 - 2) × (4 - 2) = 2 × 2 × 2 = 8 khối."
  },
  {
    "id": "sp3d-hb-22",
    "mode": "hidden-blocks",
    "difficulty": 5,
    "title": "Singapore GEP: Khối Chữ Thập 3D Cần Bổ Sung",
    "prompt": "Một khối chữ thập 3 chiều gồm 1 khối tâm và 6 khối vươn ra theo 6 hướng (+X, -X, +Y, -Y, +Z, -Z). Cần bổ sung ít nhất bao nhiêu khối đơn vị nữa để tạo thành một khối lập phương đặc 3x3x3?",
    "correctAnswer": 20,
    "options": [
      18,
      19,
      20,
      21
    ],
    "explanation": "Khối chữ thập 3D hiện tại có: 1 (tâm) + 6 (nhánh) = 7 khối. Một khối lập phương đặc 3x3x3 có: 3 × 3 × 3 = 27 khối. Số khối cần bổ sung thêm là: 27 - 7 = 20 khối."
  },
  {
    "id": "sp3d-pr-08b",
    "mode": "projections",
    "difficulty": 4,
    "title": "Dự Đoán Số Cột Cao Nhất Từ Hai Hình Chiếu",
    "prompt": "Hình chiếu từ Trên (Top) là hình vuông 2x2. Hình chiếu từ Trước (Front) có cột trái cao 3, cột phải cao 2. Số khối lập phương TỐI ĐA có thể tạo nên hình này là:",
    "correctAnswer": 10,
    "options": [
      8,
      9,
      10,
      12
    ],
    "explanation": "Top view 2x2 có 4 vị trí: (0,0), (0,1), (1,0), (1,1). Để số khối tối đa, cả hai vị trí ở cột X=0 đều cao 3 (tối đa theo Front View cột trái: 3 + 3 = 6 khối). Cả hai vị trí ở cột X=1 đều cao 2 (tối đa theo Front View cột phải: 2 + 2 = 4 khối). Tổng số khối tối đa là 6 + 4 = 10 khối."
  }
];
