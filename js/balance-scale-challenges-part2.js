// js/balance-scale-challenges-part2.js - Thử thách 51 đến 75 (Đổi đơn vị Yến/Tạ/Tấn & Đa túi X)
export const BALANCE_SCALE_CHALLENGES_PART2 = [
  {
    "id": "scale-51",
    "index": 50,
    "level": "Cấp độ 6: Đổi đơn vị Yến, Tạ, Tấn, Gam",
    "difficulty": 3,
    "title": "Thử thách 51: Một yến gạo và quả cân bí mật",
    "problem": "Đĩa cân bên trái có 1 túi bí mật X và 3 quả cân (2 kg, 3 kg, 5 kg). Đĩa cân bên phải đặt một bao gạo nặng đúng 2 yến. Chiếc cân đang thăng bằng tuyệt đối. Hỏi túi bí mật X nặng bao nhiêu kg? (Biết 1 yến = 10 kg)",
    "unit": "kg",
    "left": {
      "xCount": 1,
      "weights": [
        2,
        3,
        5
      ]
    },
    "right": {
      "xCount": 0,
      "weights": [
        20
      ]
    },
    "targetX": 10,
    "hint": "Đổi 2 yến = 20 kg. Tổng quả cân bên trái là 2 + 3 + 5 = 10 kg. Cân thăng bằng: X + 10 = 20. Bách hãy bớt 10 kg ở cả hai vế nhé!",
    "solution": "Đổi 2 yến = 20 kg. Vế trái có: X + 10 kg. Vế phải có 20 kg. Túi X nặng: 20 − 10 = 10 (kg)."
  },
  {
    "id": "scale-52",
    "index": 51,
    "level": "Cấp độ 6: Đổi đơn vị Yến, Tạ, Tấn, Gam",
    "difficulty": 3,
    "title": "Thử thách 52: Bao xi măng một tạ",
    "problem": "Đĩa trái có 2 túi cát X và quả cân 20 kg. Đĩa phải có 1 bao xi măng nặng đúng 1 tạ. Hai đĩa cân thăng bằng. Hỏi mỗi túi cát X nặng bao nhiêu kg? (Biết 1 tạ = 100 kg)",
    "unit": "kg",
    "left": {
      "xCount": 2,
      "weights": [
        20
      ]
    },
    "right": {
      "xCount": 0,
      "weights": [
        100
      ]
    },
    "targetX": 40,
    "hint": "Đổi 1 tạ = 100 kg. Hai vế cân: 2X + 20 = 100. Bớt 20 kg ở hai bên: 2X = 80. Lấy 80 chia 2.",
    "solution": "Đổi 1 tạ = 100 kg. Bớt 20 kg ở cả hai đĩa cân: 2X = 100 − 20 = 80 kg. Vậy X = 80 : 2 = 40 (kg)."
  },
  {
    "id": "scale-53",
    "index": 52,
    "level": "Cấp độ 6: Đổi đơn vị Yến, Tạ, Tấn, Gam",
    "difficulty": 4,
    "title": "Thử thách 53: Kiện hàng thép một tấn",
    "problem": "Đĩa trái đặt 3 kiện hàng bí mật X và 1 quả cân 100 kg. Đĩa phải đặt một khối kim loại nặng đúng 1 tấn. Hai đĩa cân ngang bằng. Tìm khối lượng của mỗi kiện hàng X? (Biết 1 tấn = 1000 kg)",
    "unit": "kg",
    "left": {
      "xCount": 3,
      "weights": [
        100
      ]
    },
    "right": {
      "xCount": 0,
      "weights": [
        1000
      ]
    },
    "targetX": 300,
    "hint": "Đổi 1 tấn = 1000 kg. Ta có 3X + 100 = 1000. 3X = 1000 − 100 = 900 kg. Lấy 900 chia 3.",
    "solution": "Đổi 1 tấn = 1000 kg. 3 kiện hàng nặng: 1000 − 100 = 900 (kg). Mỗi kiện hàng X nặng: 900 : 3 = 300 (kg)."
  },
  {
    "id": "scale-54",
    "index": 53,
    "level": "Cấp độ 6: Đổi đơn vị Yến, Tạ, Tấn, Gam",
    "difficulty": 3,
    "title": "Thử thách 54: Cân tiểu ly phòng thí nghiệm",
    "problem": "Đĩa trái có 1 túi hóa chất X cùng quả cân 250 g. Đĩa phải đặt 1 quả cân chuẩn 1 kg. Kim cân chỉ chính giữa vạch 0. Hỏi túi hóa chất X nặng bao nhiêu gam? (Biết 1 kg = 1000 g)",
    "unit": "g",
    "left": {
      "xCount": 1,
      "weights": [
        250
      ]
    },
    "right": {
      "xCount": 0,
      "weights": [
        1000
      ]
    },
    "targetX": 750,
    "hint": "Đổi 1 kg = 1000 g. Cân thăng bằng: X + 250 = 1000. Lấy 1000 trừ 250.",
    "solution": "Đổi 1 kg = 1000 g. Khối lượng túi hóa chất X là: 1000 − 250 = 750 (g)."
  },
  {
    "id": "scale-55",
    "index": 54,
    "level": "Cấp độ 6: Đổi đơn vị Yến, Tạ, Tấn, Gam",
    "difficulty": 3,
    "title": "Thử thách 55: Hai túi đường và nửa yến",
    "problem": "Đĩa trái đặt 2 túi đường X và quả cân 1 kg. Đĩa phải đặt nửa yến đường (5 kg). Hai vế cân thăng bằng. Hỏi mỗi túi đường X nặng bao nhiêu kg?",
    "unit": "kg",
    "left": {
      "xCount": 2,
      "weights": [
        1
      ]
    },
    "right": {
      "xCount": 0,
      "weights": [
        5
      ]
    },
    "targetX": 2,
    "hint": "Nửa yến = 5 kg. 2X + 1 = 5. Bớt 1 kg ở hai bên ta được 2X = 4 kg. Lấy 4 chia 2.",
    "solution": "2 túi đường X nặng: 5 − 1 = 4 (kg). Mỗi túi đường X nặng: 4 : 2 = 2 (kg)."
  },
  {
    "id": "scale-56",
    "index": 55,
    "level": "Cấp độ 6: Đổi đơn vị Yến, Tạ, Tấn, Gam",
    "difficulty": 3,
    "title": "Thử thách 56: Bốn bao đậu tương và ba tạ",
    "problem": "Đĩa trái có 4 bao đậu tương X và quả cân 60 kg. Đĩa phải có quả cân 3 tạ. Cân thăng bằng. Tính khối lượng một bao đậu tương X theo kg?",
    "unit": "kg",
    "left": {
      "xCount": 4,
      "weights": [
        60
      ]
    },
    "right": {
      "xCount": 0,
      "weights": [
        300
      ]
    },
    "targetX": 60,
    "hint": "Đổi 3 tạ = 300 kg. 4X + 60 = 300. 4X = 300 − 60 = 240 kg. Lấy 240 chia 4.",
    "solution": "Đổi 3 tạ = 300 kg. 4 bao đậu tương nặng: 300 − 60 = 240 (kg). Mỗi bao nặng: 240 : 4 = 60 (kg)."
  },
  {
    "id": "scale-57",
    "index": 56,
    "level": "Cấp độ 6: Đổi đơn vị Yến, Tạ, Tấn, Gam",
    "difficulty": 4,
    "title": "Thử thách 57: Hai thỏi bạc và 1kg 250g",
    "problem": "Đĩa trái có 2 thỏi bạc nguyên chất X và quả cân 450 g. Đĩa phải đặt quả cân 1 kg 250 g. Cân thăng bằng. Hỏi mỗi thỏi bạc X nặng bao nhiêu gam?",
    "unit": "g",
    "left": {
      "xCount": 2,
      "weights": [
        450
      ]
    },
    "right": {
      "xCount": 0,
      "weights": [
        1250
      ]
    },
    "targetX": 400,
    "hint": "Đổi 1 kg 250 g = 1250 g. 2X + 450 = 1250. 2X = 1250 − 450 = 800 g. Lấy 800 chia 2.",
    "solution": "Đổi 1 kg 250 g = 1250 g. 2 thỏi bạc nặng: 1250 − 450 = 800 (g). Mỗi thỏi bạc nặng: 800 : 2 = 400 (g)."
  },
  {
    "id": "scale-58",
    "index": 57,
    "level": "Cấp độ 6: Đổi đơn vị Yến, Tạ, Tấn, Gam",
    "difficulty": 3,
    "title": "Thử thách 58: Gói chè đặc sản Thái Nguyên",
    "problem": "Đĩa trái có 3 gói chè X và quả cân 100 g. Đĩa phải đặt quả cân 1 kg. Hai bên thăng bằng. Mỗi gói chè X nặng bao nhiêu gam?",
    "unit": "g",
    "left": {
      "xCount": 3,
      "weights": [
        100
      ]
    },
    "right": {
      "xCount": 0,
      "weights": [
        1000
      ]
    },
    "targetX": 300,
    "hint": "Đổi 1 kg = 1000 g. 3X + 100 = 1000. 3X = 1000 − 100 = 900 g. Lấy 900 chia 3.",
    "solution": "Đổi 1 kg = 1000 g. 3 gói chè nặng: 1000 − 100 = 900 (g). Mỗi gói chè nặng: 900 : 3 = 300 (g)."
  },
  {
    "id": "scale-59",
    "index": 58,
    "level": "Cấp độ 6: Đổi đơn vị Yến, Tạ, Tấn, Gam",
    "difficulty": 4,
    "title": "Thử thách 59: Năm xô cát xây dựng và hai tạ",
    "problem": "Đĩa trái đặt 5 xô cát X và quả cân 50 kg. Đĩa phải đặt khối kim loại 2 tạ. Hai đĩa cân ngang bằng. Tìm khối lượng của 1 xô cát X theo kg?",
    "unit": "kg",
    "left": {
      "xCount": 5,
      "weights": [
        50
      ]
    },
    "right": {
      "xCount": 0,
      "weights": [
        200
      ]
    },
    "targetX": 30,
    "hint": "Đổi 2 tạ = 200 kg. 5X + 50 = 200. 5X = 200 − 50 = 150 kg. Lấy 150 chia 5.",
    "solution": "Đổi 2 tạ = 200 kg. 5 xô cát nặng: 200 − 50 = 150 (kg). Mỗi xô cát nặng: 150 : 5 = 30 (kg)."
  },
  {
    "id": "scale-60",
    "index": 59,
    "level": "Cấp độ 6: Đổi đơn vị Yến, Tạ, Tấn, Gam",
    "difficulty": 4,
    "title": "Thử thách 60: Bốn viên đá quý và quả cân hai kilôgam",
    "problem": "Đĩa trái có 4 viên đá ngọc bích X và quả cân 800 g. Đĩa phải đặt quả cân 2 kg. Cân thăng bằng. Hỏi mỗi viên đá quý X nặng bao nhiêu gam?",
    "unit": "g",
    "left": {
      "xCount": 4,
      "weights": [
        800
      ]
    },
    "right": {
      "xCount": 0,
      "weights": [
        2000
      ]
    },
    "targetX": 300,
    "hint": "Đổi 2 kg = 2000 g. 4X + 800 = 2000. 4X = 2000 − 800 = 1200 g. Lấy 1200 chia 4.",
    "solution": "Đổi 2 kg = 2000 g. 4 viên đá quý nặng: 2000 − 800 = 1200 (g). Mỗi viên nặng: 1200 : 4 = 300 (g)."
  },
  {
    "id": "scale-61",
    "index": 60,
    "level": "Cấp độ 7: Cân đối xứng đa túi (3X, 4X, 5X)",
    "difficulty": 3,
    "title": "Thử thách 61: Ba túi bí mật và quả cân 120kg",
    "problem": "Đĩa trái đặt 3 túi bí mật X và quả cân 15 kg. Đĩa phải đặt quả cân 120 kg. Cân thăng bằng. Tính khối lượng một túi X?",
    "unit": "kg",
    "left": {
      "xCount": 3,
      "weights": [
        15
      ]
    },
    "right": {
      "xCount": 0,
      "weights": [
        120
      ]
    },
    "targetX": 35,
    "hint": "3X + 15 = 120. 3X = 120 − 15 = 105. Lấy 105 : 3.",
    "solution": "3 túi X nặng: 120 − 15 = 105 (kg). Mỗi túi X nặng: 105 : 3 = 35 (kg)."
  },
  {
    "id": "scale-62",
    "index": 61,
    "level": "Cấp độ 7: Cân đối xứng đa túi (3X, 4X, 5X)",
    "difficulty": 3,
    "title": "Thử thách 62: Bốn hộp linh kiện điện tử",
    "problem": "Đĩa trái có 4 hộp linh kiện X và quả cân 28 kg. Đĩa phải có quả cân tròn 100 kg. Kim cân chỉ vạch số 0. Tìm khối lượng của một hộp linh kiện X?",
    "unit": "kg",
    "left": {
      "xCount": 4,
      "weights": [
        28
      ]
    },
    "right": {
      "xCount": 0,
      "weights": [
        100
      ]
    },
    "targetX": 18,
    "hint": "4X + 28 = 100. 4X = 100 − 28 = 72 kg. Lấy 72 : 4.",
    "solution": "4 hộp linh kiện nặng: 100 − 28 = 72 (kg). Mỗi hộp nặng: 72 : 4 = 18 (kg)."
  },
  {
    "id": "scale-63",
    "index": 62,
    "level": "Cấp độ 7: Cân đối xứng đa túi (3X, 4X, 5X)",
    "difficulty": 4,
    "title": "Thử thách 63: Năm bao phân bón hữu cơ",
    "problem": "Đĩa trái có 5 bao phân bón X và quả cân 35 kg. Đĩa phải đặt quả cân 160 kg. Cân thăng bằng tuyệt đối. Hỏi một bao phân bón X nặng bao nhiêu kg?",
    "unit": "kg",
    "left": {
      "xCount": 5,
      "weights": [
        35
      ]
    },
    "right": {
      "xCount": 0,
      "weights": [
        160
      ]
    },
    "targetX": 25,
    "hint": "5X + 35 = 160. 5X = 160 − 35 = 125 kg. Lấy 125 : 5.",
    "solution": "5 bao phân bón nặng: 160 − 35 = 125 (kg). Mỗi bao nặng: 125 : 5 = 25 (kg)."
  },
  {
    "id": "scale-64",
    "index": 63,
    "level": "Cấp độ 7: Cân đối xứng đa túi (3X, 4X, 5X)",
    "difficulty": 4,
    "title": "Thử thách 64: Ba bình mật ong rừng hoa nhãn",
    "problem": "Đĩa trái có 3 bình mật ong X và quả cân 500 g. Đĩa phải đặt quả cân 2 kg 600 g. Cân thăng bằng. Tính khối lượng mỗi bình mật ong theo gam?",
    "unit": "g",
    "left": {
      "xCount": 3,
      "weights": [
        500
      ]
    },
    "right": {
      "xCount": 0,
      "weights": [
        2600
      ]
    },
    "targetX": 700,
    "hint": "Đổi 2 kg 600 g = 2600 g. 3X + 500 = 2600. 3X = 2600 − 500 = 2100 g. Lấy 2100 : 3.",
    "solution": "Đổi 2 kg 600 g = 2600 g. 3 bình mật ong nặng: 2600 − 500 = 2100 (g). Mỗi bình nặng: 2100 : 3 = 700 (g)."
  },
  {
    "id": "scale-65",
    "index": 64,
    "level": "Cấp độ 7: Cân đối xứng đa túi (3X, 4X, 5X)",
    "difficulty": 3,
    "title": "Thử thách 65: Bốn túi hạt giống hướng dương",
    "problem": "Đĩa trái có 4 túi hạt giống X và quả cân 12 kg. Đĩa phải đặt quả cân 80 kg. Hai bên cân bằng. Mỗi túi hạt giống X nặng bao nhiêu kg?",
    "unit": "kg",
    "left": {
      "xCount": 4,
      "weights": [
        12
      ]
    },
    "right": {
      "xCount": 0,
      "weights": [
        80
      ]
    },
    "targetX": 17,
    "hint": "4X + 12 = 80. 4X = 80 − 12 = 68 kg. Lấy 68 : 4.",
    "solution": "4 túi hạt giống nặng: 80 − 12 = 68 (kg). Mỗi túi nặng: 68 : 4 = 17 (kg)."
  },
  {
    "id": "scale-66",
    "index": 65,
    "level": "Cấp độ 7: Cân đối xứng đa túi (3X, 4X, 5X)",
    "difficulty": 4,
    "title": "Thử thách 66: Sáu hộp quà lưu niệm",
    "problem": "Đĩa trái có 6 hộp quà X và quả cân 18 kg. Đĩa phải đặt quả cân 90 kg. Hai đĩa cân ngang bằng. Tìm khối lượng của một hộp quà X?",
    "unit": "kg",
    "left": {
      "xCount": 6,
      "weights": [
        18
      ]
    },
    "right": {
      "xCount": 0,
      "weights": [
        90
      ]
    },
    "targetX": 12,
    "hint": "6X + 18 = 90. 6X = 90 − 18 = 72 kg. Lấy 72 : 6.",
    "solution": "6 hộp quà nặng: 90 − 18 = 72 (kg). Mỗi hộp quà X nặng: 72 : 6 = 12 (kg)."
  },
  {
    "id": "scale-67",
    "index": 66,
    "level": "Cấp độ 7: Cân đối xứng đa túi (3X, 4X, 5X)",
    "difficulty": 3,
    "title": "Thử thách 67: Ba thùng sữa tươi học đường",
    "problem": "Đĩa trái có 3 thùng sữa X và quả cân 25 kg. Đĩa phải đặt quả cân 100 kg. Cân thăng bằng. Hỏi một thùng sữa X nặng bao nhiêu kg?",
    "unit": "kg",
    "left": {
      "xCount": 3,
      "weights": [
        25
      ]
    },
    "right": {
      "xCount": 0,
      "weights": [
        100
      ]
    },
    "targetX": 25,
    "hint": "3X + 25 = 100. 3X = 100 − 25 = 75 kg. Lấy 75 : 3.",
    "solution": "3 thùng sữa nặng: 100 − 25 = 75 (kg). Mỗi thùng sữa nặng: 75 : 3 = 25 (kg)."
  },
  {
    "id": "scale-68",
    "index": 67,
    "level": "Cấp độ 7: Cân đối xứng đa túi (3X, 4X, 5X)",
    "difficulty": 4,
    "title": "Thử thách 68: Năm gói bột mì làm bánh",
    "problem": "Đĩa trái có 5 gói bột mì X và quả cân 400 g. Đĩa phải có quả cân 3 kg 400 g. Cân thăng bằng. Tính khối lượng một gói bột mì X theo gam?",
    "unit": "g",
    "left": {
      "xCount": 5,
      "weights": [
        400
      ]
    },
    "right": {
      "xCount": 0,
      "weights": [
        3400
      ]
    },
    "targetX": 600,
    "hint": "Đổi 3 kg 400 g = 3400 g. 5X + 400 = 3400. 5X = 3400 − 400 = 3000 g. Lấy 3000 : 5.",
    "solution": "Đổi 3 kg 400 g = 3400 g. 5 gói bột mì nặng: 3400 − 400 = 3000 (g). Mỗi gói nặng: 3000 : 5 = 600 (g)."
  },
  {
    "id": "scale-69",
    "index": 68,
    "level": "Cấp độ 7: Cân đối xứng đa túi (3X, 4X, 5X)",
    "difficulty": 3,
    "title": "Thử thách 69: Bốn bình nước khoáng thiên nhiên",
    "problem": "Đĩa trái đặt 4 bình nước X và quả cân 16 kg. Đĩa phải đặt quả cân 96 kg. Chiếc cân đang thăng bằng. Tìm giá trị của X?",
    "unit": "kg",
    "left": {
      "xCount": 4,
      "weights": [
        16
      ]
    },
    "right": {
      "xCount": 0,
      "weights": [
        96
      ]
    },
    "targetX": 20,
    "hint": "4X + 16 = 96. 4X = 96 − 16 = 80 kg. Lấy 80 : 4.",
    "solution": "4 bình nước nặng: 96 − 16 = 80 (kg). Mỗi bình nước X nặng: 80 : 4 = 20 (kg)."
  },
  {
    "id": "scale-70",
    "index": 69,
    "level": "Cấp độ 7: Cân đối xứng đa túi (3X, 4X, 5X)",
    "difficulty": 4,
    "title": "Thử thách 70: Bảy cuộn dây cáp mạng",
    "problem": "Đĩa trái có 7 cuộn dây cáp X và quả cân 21 kg. Đĩa phải đặt quả cân 105 kg. Hai bên ngang bằng. Hỏi một cuộn dây cáp X nặng bao nhiêu kg?",
    "unit": "kg",
    "left": {
      "xCount": 7,
      "weights": [
        21
      ]
    },
    "right": {
      "xCount": 0,
      "weights": [
        105
      ]
    },
    "targetX": 12,
    "hint": "7X + 21 = 105. 7X = 105 − 21 = 84 kg. Lấy 84 : 7.",
    "solution": "7 cuộn dây cáp nặng: 105 − 21 = 84 (kg). Mỗi cuộn nặng: 84 : 7 = 12 (kg)."
  },
  {
    "id": "scale-71",
    "index": 70,
    "level": "Cấp độ 8: Triệt tiêu ẩn số 2 vế nâng cao",
    "difficulty": 4,
    "title": "Thử thách 71: Triệt tiêu một túi X ở cả hai vế",
    "problem": "Đĩa trái có 3 túi bí mật X và quả cân 10 kg. Đĩa phải có 1 túi bí mật X và quả cân 50 kg. Hai đĩa cân thăng bằng. Hỏi túi X nặng bao nhiêu kg?",
    "unit": "kg",
    "left": {
      "xCount": 3,
      "weights": [
        10
      ]
    },
    "right": {
      "xCount": 1,
      "weights": [
        50
      ]
    },
    "targetX": 20,
    "hint": "Bớt 1 túi X ở cả 2 vế: 2X + 10 = 50. Tiếp tục bớt 10 kg: 2X = 40. Lấy 40 : 2.",
    "solution": "Bớt 1 túi X ở hai vế ta có: 2X + 10 = 50. Suy ra 2X = 50 − 10 = 40 kg. Vậy X = 40 : 2 = 20 (kg)."
  },
  {
    "id": "scale-72",
    "index": 71,
    "level": "Cấp độ 8: Triệt tiêu ẩn số 2 vế nâng cao",
    "difficulty": 4,
    "title": "Thử thách 72: Triệt tiêu hai túi X ở cả hai vế",
    "problem": "Đĩa trái có 4 túi X và quả cân 15 kg. Đĩa phải có 2 túi X và quả cân 65 kg. Cân thăng bằng tuyệt đối. Tìm khối lượng của một túi X?",
    "unit": "kg",
    "left": {
      "xCount": 4,
      "weights": [
        15
      ]
    },
    "right": {
      "xCount": 2,
      "weights": [
        65
      ]
    },
    "targetX": 25,
    "hint": "Bớt 2 túi X ở cả 2 đĩa: 2X + 15 = 65. 2X = 65 − 15 = 50. Lấy 50 : 2.",
    "solution": "Bớt 2 túi X ở hai bên: 2X + 15 = 65. Ta được 2X = 65 − 15 = 50 (kg). Túi X nặng: 50 : 2 = 25 (kg)."
  },
  {
    "id": "scale-73",
    "index": 72,
    "level": "Cấp độ 8: Triệt tiêu ẩn số 2 vế nâng cao",
    "difficulty": 4,
    "title": "Thử thách 73: Năm túi X đối trọng hai túi X",
    "problem": "Đĩa trái có 5 túi X và quả cân 20 kg. Đĩa phải có 2 túi X và quả cân 86 kg. Hai bên ngang bằng. Hỏi túi X nặng bao nhiêu kg?",
    "unit": "kg",
    "left": {
      "xCount": 5,
      "weights": [
        20
      ]
    },
    "right": {
      "xCount": 2,
      "weights": [
        86
      ]
    },
    "targetX": 22,
    "hint": "Bớt 2 túi X: 3X + 20 = 86. Bớt 20 kg: 3X = 86 − 20 = 66. Lấy 66 : 3.",
    "solution": "Bớt 2 túi X ở hai vế: 3X + 20 = 86. 3X = 86 − 20 = 66 (kg). Vậy X = 66 : 3 = 22 (kg)."
  },
  {
    "id": "scale-74",
    "index": 73,
    "level": "Cấp độ 8: Triệt tiêu ẩn số 2 vế nâng cao",
    "difficulty": 4,
    "title": "Thử thách 74: Triệt tiêu quả cân phối hợp",
    "problem": "Đĩa trái có 4 túi X và quả cân 30 kg. Đĩa phải có 1 túi X và quả cân 75 kg. Chiếc cân đang thăng bằng. Giá trị của X là bao nhiêu?",
    "unit": "kg",
    "left": {
      "xCount": 4,
      "weights": [
        30
      ]
    },
    "right": {
      "xCount": 1,
      "weights": [
        75
      ]
    },
    "targetX": 15,
    "hint": "Bớt 1 túi X: 3X + 30 = 75. 3X = 75 − 30 = 45. Lấy 45 : 3.",
    "solution": "Bớt 1 túi X ở hai bên: 3X + 30 = 75. 3X = 75 − 30 = 45 (kg). Vậy X = 45 : 3 = 15 (kg)."
  },
  {
    "id": "scale-75",
    "index": 74,
    "level": "Cấp độ 8: Triệt tiêu ẩn số 2 vế nâng cao",
    "difficulty": 5,
    "title": "Thử thách 75: Thỏi vàng quý và quả cân một kilôgam",
    "problem": "Đĩa trái có 3 thỏi vàng X và quả cân 200 g. Đĩa phải có 1 thỏi vàng X và quả cân 1 kg. Kim cân chỉ vạch số 0. Hỏi một thỏi vàng X nặng bao nhiêu gam?",
    "unit": "g",
    "left": {
      "xCount": 3,
      "weights": [
        200
      ]
    },
    "right": {
      "xCount": 1,
      "weights": [
        1000
      ]
    },
    "targetX": 400,
    "hint": "Đổi 1 kg = 1000 g. Bớt 1 thỏi vàng X ở hai bên: 2X + 200 = 1000. 2X = 800 g. Lấy 800 : 2.",
    "solution": "Đổi 1 kg = 1000 g. Bớt 1 thỏi X: 2X + 200 = 1000. 2X = 1000 − 200 = 800 (g). Mỗi thỏi X nặng: 800 : 2 = 400 (g)."
  }
];
