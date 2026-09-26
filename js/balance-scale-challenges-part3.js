// js/balance-scale-challenges-part3.js - Thử thách 76 đến 100 (Triệt tiêu 2 vế & Siêu thử thách Olympic CLC)
export const BALANCE_SCALE_CHALLENGES_PART3 = [
  {
    "id": "scale-76",
    "index": 75,
    "level": "Cấp độ 8: Triệt tiêu ẩn số 2 vế nâng cao",
    "difficulty": 4,
    "title": "Thử thách 76: Sáu túi X đối đầu hai túi X",
    "problem": "Đĩa trái có 6 túi X và quả cân 25 kg. Đĩa phải có 2 túi X và quả cân 105 kg. Cân thăng bằng. Mỗi túi X nặng bao nhiêu kg?",
    "unit": "kg",
    "left": {
      "xCount": 6,
      "weights": [
        25
      ]
    },
    "right": {
      "xCount": 2,
      "weights": [
        105
      ]
    },
    "targetX": 20,
    "hint": "Bớt 2 túi X: 4X + 25 = 105. 4X = 105 − 25 = 80. Lấy 80 : 4.",
    "solution": "Bớt 2 túi X ở hai vế: 4X + 25 = 105. 4X = 105 − 25 = 80 (kg). Vậy X = 80 : 4 = 20 (kg)."
  },
  {
    "id": "scale-77",
    "index": 76,
    "level": "Cấp độ 8: Triệt tiêu ẩn số 2 vế nâng cao",
    "difficulty": 4,
    "title": "Thử thách 77: Năm túi X và ba túi X trên cân bập bênh",
    "problem": "Đĩa trái có 5 túi X và quả cân 18 kg. Đĩa phải có 3 túi X và quả cân 54 kg. Cân thăng bằng hoàn toàn. Tìm khối lượng của X?",
    "unit": "kg",
    "left": {
      "xCount": 5,
      "weights": [
        18
      ]
    },
    "right": {
      "xCount": 3,
      "weights": [
        54
      ]
    },
    "targetX": 18,
    "hint": "Bớt 3 túi X: 2X + 18 = 54. 2X = 54 − 18 = 36. Lấy 36 : 2.",
    "solution": "Bớt 3 túi X ở hai bên: 2X + 18 = 54. 2X = 54 − 18 = 36 (kg). Vậy X = 36 : 2 = 18 (kg)."
  },
  {
    "id": "scale-78",
    "index": 77,
    "level": "Cấp độ 8: Triệt tiêu ẩn số 2 vế nâng cao",
    "difficulty": 4,
    "title": "Thử thách 78: Bốn túi X và một túi X đối trọng lớn",
    "problem": "Đĩa trái có 4 túi X và quả cân 35 kg. Đĩa phải có 1 túi X và quả cân 125 kg. Hai bên ngang bằng. Hỏi một túi X nặng bao nhiêu kg?",
    "unit": "kg",
    "left": {
      "xCount": 4,
      "weights": [
        35
      ]
    },
    "right": {
      "xCount": 1,
      "weights": [
        125
      ]
    },
    "targetX": 30,
    "hint": "Bớt 1 túi X: 3X + 35 = 125. 3X = 125 − 35 = 90. Lấy 90 : 3.",
    "solution": "Bớt 1 túi X: 3X + 35 = 125. 3X = 125 − 35 = 90 (kg). Vậy X = 90 : 3 = 30 (kg)."
  },
  {
    "id": "scale-79",
    "index": 78,
    "level": "Cấp độ 8: Triệt tiêu ẩn số 2 vế nâng cao",
    "difficulty": 5,
    "title": "Thử thách 79: Đĩa trái 5X đĩa phải 1X",
    "problem": "Đĩa trái có 5 túi X và quả cân 40 kg. Đĩa phải có 1 túi X và quả cân 160 kg. Chiếc cân đang thăng bằng. Tìm giá trị của X?",
    "unit": "kg",
    "left": {
      "xCount": 5,
      "weights": [
        40
      ]
    },
    "right": {
      "xCount": 1,
      "weights": [
        160
      ]
    },
    "targetX": 30,
    "hint": "Bớt 1 túi X: 4X + 40 = 160. 4X = 160 − 40 = 120. Lấy 120 : 4.",
    "solution": "Bớt 1 túi X ở hai vế: 4X + 40 = 160. 4X = 160 − 40 = 120 (kg). Vậy X = 120 : 4 = 30 (kg)."
  },
  {
    "id": "scale-80",
    "index": 79,
    "level": "Cấp độ 8: Triệt tiêu ẩn số 2 vế nâng cao",
    "difficulty": 5,
    "title": "Thử thách 80: Triệt tiêu nhiều quả cân hai vế",
    "problem": "Đĩa trái có 3 túi X cùng các quả cân 12 kg và 8 kg. Đĩa phải có 1 túi X cùng các quả cân 50 kg và 30 kg. Hai đĩa cân ngang bằng. Tìm X?",
    "unit": "kg",
    "left": {
      "xCount": 3,
      "weights": [
        12,
        8
      ]
    },
    "right": {
      "xCount": 1,
      "weights": [
        50,
        30
      ]
    },
    "targetX": 30,
    "hint": "Tính tổng quả cân: Trái có 12 + 8 = 20 kg. Phải có 50 + 30 = 80 kg. 3X + 20 = X + 80. Bớt 1 túi X và bớt 20 kg: 2X = 60. Lấy 60 : 2.",
    "solution": "Vế trái: 3X + 20 kg. Vế phải: X + 80 kg. Bớt X và 20 kg ở hai bên: 2X = 80 − 20 = 60 (kg). Vậy X = 60 : 2 = 30 (kg)."
  },
  {
    "id": "scale-81",
    "index": 80,
    "level": "Cấp độ 9: Bài toán Thùng hàng & Hòm báu Olympic",
    "difficulty": 4,
    "title": "Thử thách 81: Hòm kho báu vùng biển Caribbean",
    "problem": "Đĩa trái có 2 hòm báu X và quả cân 50 kg. Đĩa phải có 1 hòm báu X và quả cân 120 kg. Cân thăng bằng. Hỏi một hòm kho báu X nặng bao nhiêu kg?",
    "unit": "kg",
    "left": {
      "xCount": 2,
      "weights": [
        50
      ]
    },
    "right": {
      "xCount": 1,
      "weights": [
        120
      ]
    },
    "targetX": 70,
    "hint": "Bớt 1 hòm báu X ở cả hai đĩa: X + 50 = 120. Lấy 120 trừ 50.",
    "solution": "Bớt 1 hòm X ở hai bên ta được ngay: X = 120 − 50 = 70 (kg)."
  },
  {
    "id": "scale-82",
    "index": 81,
    "level": "Cấp độ 9: Bài toán Thùng hàng & Hòm báu Olympic",
    "difficulty": 4,
    "title": "Thử thách 82: Bình pha lê cổ đại Ai Cập",
    "problem": "Đĩa trái có 4 bình pha lê X và quả cân 100 g. Đĩa phải có 1 bình pha lê X và quả cân 1 kg. Chiếc cân đang thăng bằng. Hỏi mỗi bình pha lê X nặng bao nhiêu gam?",
    "unit": "g",
    "left": {
      "xCount": 4,
      "weights": [
        100
      ]
    },
    "right": {
      "xCount": 1,
      "weights": [
        1000
      ]
    },
    "targetX": 300,
    "hint": "Đổi 1 kg = 1000 g. Bớt 1 bình X: 3X + 100 = 1000. 3X = 900 g. Lấy 900 : 3.",
    "solution": "Đổi 1 kg = 1000 g. Bớt 1 bình X ở hai bên: 3X + 100 = 1000. 3X = 900 (g). Mỗi bình pha lê nặng: 900 : 3 = 300 (g)."
  },
  {
    "id": "scale-83",
    "index": 82,
    "level": "Cấp độ 9: Bài toán Thùng hàng & Hòm báu Olympic",
    "difficulty": 4,
    "title": "Thử thách 83: Tảng thiên thạch ngoài không gian",
    "problem": "Đĩa trái đặt 3 tảng thiên thạch X và quả cân 45 kg. Đĩa phải có 1 tảng thiên thạch X và quả cân 115 kg. Hai bên thăng bằng. Tìm khối lượng của tảng thiên thạch X?",
    "unit": "kg",
    "left": {
      "xCount": 3,
      "weights": [
        45
      ]
    },
    "right": {
      "xCount": 1,
      "weights": [
        115
      ]
    },
    "targetX": 35,
    "hint": "Bớt 1 tảng X: 2X + 45 = 115. 2X = 115 − 45 = 70 kg. Lấy 70 : 2.",
    "solution": "Bớt 1 tảng X ở hai bên: 2X + 45 = 115. 2X = 70 (kg). Tảng thiên thạch X nặng: 70 : 2 = 35 (kg)."
  },
  {
    "id": "scale-84",
    "index": 83,
    "level": "Cấp độ 9: Bài toán Thùng hàng & Hòm báu Olympic",
    "difficulty": 5,
    "title": "Thử thách 84: Tượng nhân sư bằng đồng nguyên khối",
    "problem": "Đĩa trái có 3 tượng nhân sư X và quả cân 60 kg. Đĩa phải có 1 tượng nhân sư X và quả cân 150 kg. Kim thăng bằng. Mỗi tượng nhân sư X nặng bao nhiêu kg?",
    "unit": "kg",
    "left": {
      "xCount": 3,
      "weights": [
        60
      ]
    },
    "right": {
      "xCount": 1,
      "weights": [
        150
      ]
    },
    "targetX": 45,
    "hint": "Bớt 1 tượng X: 2X + 60 = 150. 2X = 150 − 60 = 90 kg. Lấy 90 : 2.",
    "solution": "Bớt 1 tượng X: 2X + 60 = 150. 2X = 90 (kg). Mỗi tượng nhân sư nặng: 90 : 2 = 45 (kg)."
  },
  {
    "id": "scale-85",
    "index": 84,
    "level": "Cấp độ 9: Bài toán Thùng hàng & Hòm báu Olympic",
    "difficulty": 5,
    "title": "Thử thách 85: Bộ sưu tập ngọc bích hoàng gia",
    "problem": "Đĩa trái có 5 viên ngọc bích X và quả cân 300 g. Đĩa phải có 2 viên ngọc bích X và quả cân 1 kg 200 g. Cân thăng bằng. Tìm khối lượng của một viên ngọc bích X theo gam?",
    "unit": "g",
    "left": {
      "xCount": 5,
      "weights": [
        300
      ]
    },
    "right": {
      "xCount": 2,
      "weights": [
        1200
      ]
    },
    "targetX": 300,
    "hint": "Đổi 1 kg 200 g = 1200 g. Bớt 2 viên ngọc X: 3X + 300 = 1200. 3X = 900 g. Lấy 900 : 3.",
    "solution": "Đổi 1 kg 200 g = 1200 g. Bớt 2 viên ngọc X ở hai vế: 3X + 300 = 1200. 3X = 900 (g). Mỗi viên ngọc nặng: 900 : 3 = 300 (g)."
  },
  {
    "id": "scale-86",
    "index": 85,
    "level": "Cấp độ 9: Bài toán Thùng hàng & Hòm báu Olympic",
    "difficulty": 5,
    "title": "Thử thách 86: Thùng vũ khí hiệp sĩ thời Trung Cổ",
    "problem": "Đĩa trái có 4 thùng vũ khí X và quả cân 80 kg. Đĩa phải có 2 thùng vũ khí X và quả cân 180 kg. Cân ngang bằng. Mỗi thùng vũ khí X nặng bao nhiêu kg?",
    "unit": "kg",
    "left": {
      "xCount": 4,
      "weights": [
        80
      ]
    },
    "right": {
      "xCount": 2,
      "weights": [
        180
      ]
    },
    "targetX": 50,
    "hint": "Bớt 2 thùng X: 2X + 80 = 180. 2X = 180 − 80 = 100 kg. Lấy 100 : 2.",
    "solution": "Bớt 2 thùng X ở hai bên: 2X + 80 = 180. 2X = 100 (kg). Mỗi thùng vũ khí nặng: 100 : 2 = 50 (kg)."
  },
  {
    "id": "scale-87",
    "index": 86,
    "level": "Cấp độ 9: Bài toán Thùng hàng & Hòm báu Olympic",
    "difficulty": 5,
    "title": "Thử thách 87: Trống đồng Đông Sơn phục chế",
    "problem": "Đĩa trái có 2 trống đồng X và quả cân 40 kg. Đĩa phải có 1 trống đồng X và quả cân 105 kg. Hai bên cân bằng. Khối lượng của một chiếc trống đồng X là bao nhiêu?",
    "unit": "kg",
    "left": {
      "xCount": 2,
      "weights": [
        40
      ]
    },
    "right": {
      "xCount": 1,
      "weights": [
        105
      ]
    },
    "targetX": 65,
    "hint": "Bớt 1 trống đồng X ở hai đĩa cân: X + 40 = 105. Lấy 105 − 40.",
    "solution": "Bớt 1 trống đồng X ở hai bên: X = 105 − 40 = 65 (kg)."
  },
  {
    "id": "scale-88",
    "index": 87,
    "level": "Cấp độ 9: Bài toán Thùng hàng & Hòm báu Olympic",
    "difficulty": 5,
    "title": "Thử thách 88: Hộp cổ vật triều Nguyễn",
    "problem": "Đĩa trái đặt 6 hộp cổ vật X và quả cân 150 g. Đĩa phải có 2 hộp cổ vật X và quả cân 950 g. Cân thăng bằng. Mỗi hộp cổ vật X nặng bao nhiêu gam?",
    "unit": "g",
    "left": {
      "xCount": 6,
      "weights": [
        150
      ]
    },
    "right": {
      "xCount": 2,
      "weights": [
        950
      ]
    },
    "targetX": 200,
    "hint": "Bớt 2 hộp X: 4X + 150 = 950. 4X = 950 − 150 = 800 g. Lấy 800 : 4.",
    "solution": "Bớt 2 hộp X ở hai vế: 4X + 150 = 950. 4X = 800 (g). Mỗi hộp cổ vật nặng: 800 : 4 = 200 (g)."
  },
  {
    "id": "scale-89",
    "index": 88,
    "level": "Cấp độ 9: Bài toán Thùng hàng & Hòm báu Olympic",
    "difficulty": 5,
    "title": "Thử thách 89: Đại hồng chung chùa cổ",
    "problem": "Đĩa trái có 3 quả chuông đồng X và quả cân 70 kg. Đĩa phải có 1 quả chuông đồng X và quả cân 180 kg. Hai bên ngang bằng. Hỏi một quả chuông X nặng bao nhiêu kg?",
    "unit": "kg",
    "left": {
      "xCount": 3,
      "weights": [
        70
      ]
    },
    "right": {
      "xCount": 1,
      "weights": [
        180
      ]
    },
    "targetX": 55,
    "hint": "Bớt 1 chuông X: 2X + 70 = 180. 2X = 180 − 70 = 110 kg. Lấy 110 : 2.",
    "solution": "Bớt 1 chuông X ở hai bên: 2X + 70 = 180. 2X = 110 (kg). Mỗi quả chuông nặng: 110 : 2 = 55 (kg)."
  },
  {
    "id": "scale-90",
    "index": 89,
    "level": "Cấp độ 9: Bài toán Thùng hàng & Hòm báu Olympic",
    "difficulty": 5,
    "title": "Thử thách 90: Két sắt bảo mật ngân khố",
    "problem": "Đĩa trái có 5 két sắt X và quả cân 120 kg. Đĩa phải có 2 két sắt X và quả cân 360 kg. Cân thăng bằng tuyệt đối. Tìm khối lượng của một két sắt X?",
    "unit": "kg",
    "left": {
      "xCount": 5,
      "weights": [
        120
      ]
    },
    "right": {
      "xCount": 2,
      "weights": [
        360
      ]
    },
    "targetX": 80,
    "hint": "Bớt 2 két sắt X: 3X + 120 = 360. 3X = 360 − 120 = 240 kg. Lấy 240 : 3.",
    "solution": "Bớt 2 két sắt X ở hai vế: 3X + 120 = 360. 3X = 240 (kg). Mỗi chiếc két sắt nặng: 240 : 3 = 80 (kg)."
  },
  {
    "id": "scale-91",
    "index": 90,
    "level": "Cấp độ 10: Đỉnh cao Đại số Cân đĩa Tuyển chọn CLC",
    "difficulty": 5,
    "title": "Thử thách 91: Đại số cân đĩa 7X đối trọng 3X",
    "problem": "Đĩa trái có 7 túi X và quả cân 35 kg. Đĩa phải có 3 túi X và quả cân 175 kg. Cân thăng bằng. Hỏi một túi X nặng bao nhiêu kg?",
    "unit": "kg",
    "left": {
      "xCount": 7,
      "weights": [
        35
      ]
    },
    "right": {
      "xCount": 3,
      "weights": [
        175
      ]
    },
    "targetX": 35,
    "hint": "Bớt 3 túi X: 4X + 35 = 175. 4X = 175 − 35 = 140 kg. Lấy 140 : 4.",
    "solution": "Bớt 3 túi X ở hai vế: 4X + 35 = 175. 4X = 140 (kg). Vậy X = 140 : 4 = 35 (kg)."
  },
  {
    "id": "scale-92",
    "index": 91,
    "level": "Cấp độ 10: Đỉnh cao Đại số Cân đĩa Tuyển chọn CLC",
    "difficulty": 5,
    "title": "Thử thách 92: Cân đối trọng siêu nặng 6X và 1X",
    "problem": "Đĩa trái có 6 túi X và quả cân 100 kg. Đĩa phải có 1 túi X và quả cân 450 kg. Hai vế cân bằng. Khối lượng của một túi X là bao nhiêu?",
    "unit": "kg",
    "left": {
      "xCount": 6,
      "weights": [
        100
      ]
    },
    "right": {
      "xCount": 1,
      "weights": [
        450
      ]
    },
    "targetX": 70,
    "hint": "Bớt 1 túi X: 5X + 100 = 450. 5X = 450 − 100 = 350 kg. Lấy 350 : 5.",
    "solution": "Bớt 1 túi X ở hai bên: 5X + 100 = 450. 5X = 350 (kg). Vậy X = 350 : 5 = 70 (kg)."
  },
  {
    "id": "scale-93",
    "index": 92,
    "level": "Cấp độ 10: Đỉnh cao Đại số Cân đĩa Tuyển chọn CLC",
    "difficulty": 5,
    "title": "Thử thách 93: Hai vế phối hợp nhiều quả cân lẻ",
    "problem": "Đĩa trái có 5 túi X cùng các quả cân 15 kg và 25 kg. Đĩa phải có 2 túi X cùng hai quả cân 80 kg. Cân thăng bằng. Tìm giá trị của X?",
    "unit": "kg",
    "left": {
      "xCount": 5,
      "weights": [
        15,
        25
      ]
    },
    "right": {
      "xCount": 2,
      "weights": [
        80,
        80
      ]
    },
    "targetX": 40,
    "hint": "Trái có 15 + 25 = 40 kg. Phải có 80 + 80 = 160 kg. 5X + 40 = 2X + 160. Bớt 2X và 40 kg: 3X = 120. Lấy 120 : 3.",
    "solution": "Vế trái: 5X + 40 kg. Vế phải: 2X + 160 kg. Bớt 2X và 40 kg: 3X = 160 − 40 = 120 (kg). Vậy X = 120 : 3 = 40 (kg)."
  },
  {
    "id": "scale-94",
    "index": 93,
    "level": "Cấp độ 10: Đỉnh cao Đại số Cân đĩa Tuyển chọn CLC",
    "difficulty": 5,
    "title": "Thử thách 94: Thỏi hợp kim bạch kim phòng nano",
    "problem": "Đĩa trái có 8 thỏi hợp kim X và quả cân 250 g. Đĩa phải có 3 thỏi hợp kim X và quả cân 1 kg 500 g. Cân thăng bằng. Tính khối lượng mỗi thỏi X theo gam?",
    "unit": "g",
    "left": {
      "xCount": 8,
      "weights": [
        250
      ]
    },
    "right": {
      "xCount": 3,
      "weights": [
        1500
      ]
    },
    "targetX": 250,
    "hint": "Đổi 1 kg 500 g = 1500 g. Bớt 3 thỏi X: 5X + 250 = 1500. 5X = 1250 g. Lấy 1250 : 5.",
    "solution": "Đổi 1 kg 500 g = 1500 g. Bớt 3 thỏi X ở hai vế: 5X + 250 = 1500. 5X = 1250 (g). Mỗi thỏi X nặng: 1250 : 5 = 250 (g)."
  },
  {
    "id": "scale-95",
    "index": 94,
    "level": "Cấp độ 10: Đỉnh cao Đại số Cân đĩa Tuyển chọn CLC",
    "difficulty": 5,
    "title": "Thử thách 95: Triệt tiêu năm túi X và một túi X với số lớn",
    "problem": "Đĩa trái có 5 túi X và quả cân 60 kg. Đĩa phải có 1 túi X và quả cân 340 kg. Chiếc cân đang thăng bằng tuyệt đối. Tìm khối lượng của túi X?",
    "unit": "kg",
    "left": {
      "xCount": 5,
      "weights": [
        60
      ]
    },
    "right": {
      "xCount": 1,
      "weights": [
        340
      ]
    },
    "targetX": 70,
    "hint": "Bớt 1 túi X: 4X + 60 = 340. 4X = 340 − 60 = 280 kg. Lấy 280 : 4.",
    "solution": "Bớt 1 túi X ở hai vế: 4X + 60 = 340. 4X = 280 (kg). Vậy X = 280 : 4 = 70 (kg)."
  },
  {
    "id": "scale-96",
    "index": 95,
    "level": "Cấp độ 10: Đỉnh cao Đại số Cân đĩa Tuyển chọn CLC",
    "difficulty": 5,
    "title": "Thử thách 96: Cân bập bênh sáu túi X và hai túi X",
    "problem": "Đĩa trái có 6 túi X và quả cân 48 kg. Đĩa phải có 2 túi X và quả cân 208 kg. Cân ngang bằng. Mỗi túi X có khối lượng là bao nhiêu kg?",
    "unit": "kg",
    "left": {
      "xCount": 6,
      "weights": [
        48
      ]
    },
    "right": {
      "xCount": 2,
      "weights": [
        208
      ]
    },
    "targetX": 40,
    "hint": "Bớt 2 túi X: 4X + 48 = 208. 4X = 208 − 48 = 160 kg. Lấy 160 : 4.",
    "solution": "Bớt 2 túi X ở hai vế: 4X + 48 = 208. 4X = 160 (kg). Vậy X = 160 : 4 = 40 (kg)."
  },
  {
    "id": "scale-97",
    "index": 96,
    "level": "Cấp độ 10: Đỉnh cao Đại số Cân đĩa Tuyển chọn CLC",
    "difficulty": 5,
    "title": "Thử thách 97: Olympic Toán Quốc tế IMC - 9X đối trọng 4X",
    "problem": "Đĩa trái có 9 túi X và quả cân 50 kg. Đĩa phải có 4 túi X và quả cân 225 kg. Hai đĩa cân thăng bằng. Hỏi một túi X nặng bao nhiêu kg?",
    "unit": "kg",
    "left": {
      "xCount": 9,
      "weights": [
        50
      ]
    },
    "right": {
      "xCount": 4,
      "weights": [
        225
      ]
    },
    "targetX": 35,
    "hint": "Bớt 4 túi X: 5X + 50 = 225. 5X = 225 − 50 = 175 kg. Lấy 175 : 5.",
    "solution": "Bớt 4 túi X ở hai bên: 5X + 50 = 225. 5X = 175 (kg). Vậy X = 175 : 5 = 35 (kg)."
  },
  {
    "id": "scale-98",
    "index": 97,
    "level": "Cấp độ 10: Đỉnh cao Đại số Cân đĩa Tuyển chọn CLC",
    "difficulty": 5,
    "title": "Thử thách 98: Kim cương giác cắt tròn tinh xảo",
    "problem": "Đĩa trái có 7 túi kim cương X và quả cân 300 g. Đĩa phải có 2 túi kim cương X và quả cân 1 kg 800 g. Cân thăng bằng. Mỗi túi kim cương X nặng bao nhiêu gam?",
    "unit": "g",
    "left": {
      "xCount": 7,
      "weights": [
        300
      ]
    },
    "right": {
      "xCount": 2,
      "weights": [
        1800
      ]
    },
    "targetX": 300,
    "hint": "Đổi 1 kg 800 g = 1800 g. Bớt 2 túi X: 5X + 300 = 1800. 5X = 1500 g. Lấy 1500 : 5.",
    "solution": "Đổi 1 kg 800 g = 1800 g. Bớt 2 túi X ở hai vế: 5X + 300 = 1800. 5X = 1500 (g). Mỗi túi kim cương nặng: 1500 : 5 = 300 (g)."
  },
  {
    "id": "scale-99",
    "index": 98,
    "level": "Cấp độ 10: Đỉnh cao Đại số Cân đĩa Tuyển chọn CLC",
    "difficulty": 5,
    "title": "Thử thách 99: Hệ thống cân đối xứng 8X và 3X",
    "problem": "Đĩa trái có 8 túi bí mật X và quả cân 90 kg. Đĩa phải có 3 túi bí mật X và quả cân 340 kg. Kim cân chỉ thẳng số 0. Tính khối lượng một túi X?",
    "unit": "kg",
    "left": {
      "xCount": 8,
      "weights": [
        90
      ]
    },
    "right": {
      "xCount": 3,
      "weights": [
        340
      ]
    },
    "targetX": 50,
    "hint": "Bớt 3 túi X: 5X + 90 = 340. 5X = 340 − 90 = 250 kg. Lấy 250 : 5.",
    "solution": "Bớt 3 túi X ở hai vế: 5X + 90 = 340. 5X = 250 (kg). Vậy X = 250 : 5 = 50 (kg)."
  },
  {
    "id": "scale-100",
    "index": 99,
    "level": "Cấp độ 10: Đỉnh cao Đại số Cân đĩa Tuyển chọn CLC",
    "difficulty": 5,
    "title": "Thử thách 100: Đại Tướng Quân Cân Đĩa - Siêu Thử Thách Bách Khoa",
    "problem": "Đĩa trái có 10 túi bí mật X và quả cân 150 kg. Đĩa phải có 2 túi bí mật X và khối kim loại 790 kg. Cân thăng bằng tuyệt đối trên đỉnh Everest. Hỏi chiếc túi bí mật vĩ đại X nặng bao nhiêu kg?",
    "unit": "kg",
    "left": {
      "xCount": 10,
      "weights": [
        150
      ]
    },
    "right": {
      "xCount": 2,
      "weights": [
        790
      ]
    },
    "targetX": 80,
    "hint": "Bớt 2 túi X ở cả hai đĩa cân: 8X + 150 = 790. 8X = 790 − 150 = 640 kg. Lấy 640 : 8.",
    "solution": "Bớt 2 túi X ở hai vế ta được: 8X + 150 = 790. 8X = 640 (kg). Vậy túi bí mật vĩ đại X = 640 : 8 = 80 (kg). CHÚC MỪNG BÁCH ĐÃ CHINH PHỤC CỘT MỐC 100 THỬ THÁCH CÂN ĐĨA!"
  }
];
