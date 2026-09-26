// js/balance-scale-dual-challenges.js - Ngân hàng thử thách Hệ 2-3 Cân liên hoàn (2 ẩn Túi Vàng X & Túi Xanh Y)
// Rèn luyện phương pháp Thế & Khử đại số trực quan Singapore cho học sinh giỏi lớp 4

export const DUAL_SCALE_CHALLENGES = [
  {
    "id": "dual-1",
    "index": 0,
    "difficulty": 2,
    "title": "Thử thách 1: Túi Vàng đơn độc",
    "problem": "Cân A: 1 Túi Vàng (X) = quả cân 12 kg.\nCân B: 1 Túi Vàng (X) + 1 Túi Xanh (Y) = quả cân 20 kg.\nHỏi Túi Vàng (X) và Túi Xanh (Y) mỗi túi nặng bao nhiêu kg?",
    "unit": "kg",
    "scaleA": {
      "left": {
        "xCount": 1,
        "yCount": 0,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          12
        ]
      }
    },
    "scaleB": {
      "left": {
        "xCount": 1,
        "yCount": 1,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          20
        ]
      }
    },
    "scaleC": {
      "title": "Cân C: 2 Túi Xanh cần quả cân bao nhiêu kg?",
      "left": {
        "xCount": 0,
        "yCount": 2,
        "weights": []
      },
      "targetWeight": 16
    },
    "targetX": 12,
    "targetY": 8,
    "hint": "Quan sát Cân A: 1 Túi Vàng đúng bằng 12 kg! Lấy số 12 kg này thay vào Túi Vàng ở Cân B để tìm Túi Xanh.",
    "solution": "Từ Cân A ta thấy ngay: X = 12 kg. Thay X = 12 kg vào Cân B: 12 + Y = 20 => Y = 20 - 12 = 8 kg."
  },
  {
    "id": "dual-2",
    "index": 1,
    "difficulty": 2,
    "title": "Thử thách 2: Đôi Túi Xanh đồng cân",
    "problem": "Cân A: 2 Túi Xanh (Y) = quả cân 18 kg.\nCân B: 1 Túi Vàng (X) + 1 Túi Xanh (Y) = quả cân 15 kg.\nHỏi Túi Vàng (X) và Túi Xanh (Y) mỗi túi nặng bao nhiêu kg?",
    "unit": "kg",
    "scaleA": {
      "left": {
        "xCount": 0,
        "yCount": 2,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          18
        ]
      }
    },
    "scaleB": {
      "left": {
        "xCount": 1,
        "yCount": 1,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          15
        ]
      }
    },
    "scaleC": {
      "title": "Cân C: 2 Túi Vàng cần quả cân bao nhiêu kg?",
      "left": {
        "xCount": 2,
        "yCount": 0,
        "weights": []
      },
      "targetWeight": 12
    },
    "targetX": 6,
    "targetY": 9,
    "hint": "Cân A có 2 Túi Xanh nặng 18 kg, vậy 1 Túi Xanh nặng 18 : 2 = 9 kg. Thay vào Cân B để tìm Túi Vàng!",
    "solution": "Cân A: 2Y = 18 => Y = 9 kg. Cân B: X + Y = 15 => X = 15 - 9 = 6 kg."
  },
  {
    "id": "dual-3",
    "index": 2,
    "difficulty": 2,
    "title": "Thử thách 3: Quy đổi Túi Vàng sang Túi Xanh",
    "problem": "Cân A: 1 Túi Vàng (X) = 2 Túi Xanh (Y).\nCân B: 3 Túi Xanh (Y) = quả cân 15 kg.\nHãy tìm khối lượng của Túi Vàng (X) và Túi Xanh (Y)!",
    "unit": "kg",
    "scaleA": {
      "left": {
        "xCount": 1,
        "yCount": 0,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 2,
        "weights": []
      }
    },
    "scaleB": {
      "left": {
        "xCount": 0,
        "yCount": 3,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          15
        ]
      }
    },
    "scaleC": {
      "title": "Cân C: 1 Túi Vàng + 1 Túi Xanh cần bao nhiêu kg?",
      "left": {
        "xCount": 1,
        "yCount": 1,
        "weights": []
      },
      "targetWeight": 15
    },
    "targetX": 10,
    "targetY": 5,
    "hint": "Từ Cân B: 3 Túi Xanh = 15 kg => 1 Túi Xanh = 5 kg. Cân A cho biết Túi Vàng gấp đôi Túi Xanh!",
    "solution": "Từ Cân B: Y = 15 : 3 = 5 kg. Cân A: X = 2Y = 2 × 5 = 10 kg."
  },
  {
    "id": "dual-4",
    "index": 3,
    "difficulty": 2,
    "title": "Thử thách 4: Thay thế cặp Túi Vàng",
    "problem": "Cân A: 2 Túi Vàng (X) = quả cân 14 kg.\nCân B: 2 Túi Vàng (X) + 1 Túi Xanh (Y) = quả cân 22 kg.\nTìm khối lượng mỗi túi X và Y.",
    "unit": "kg",
    "scaleA": {
      "left": {
        "xCount": 2,
        "yCount": 0,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          14
        ]
      }
    },
    "scaleB": {
      "left": {
        "xCount": 2,
        "yCount": 1,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          22
        ]
      }
    },
    "scaleC": {
      "title": "Cân C: 2 Túi Xanh cần quả cân bao nhiêu kg?",
      "left": {
        "xCount": 0,
        "yCount": 2,
        "weights": []
      },
      "targetWeight": 16
    },
    "targetX": 7,
    "targetY": 8,
    "hint": "Cân B có sẵn '2 Túi Vàng'. Mà Cân A cho biết 2 Túi Vàng = 14 kg. Vậy Túi Xanh bằng bao nhiêu?",
    "solution": "Cân A: 2X = 14 => X = 7 kg. Cân B: (2X) + Y = 22 => 14 + Y = 22 => Y = 8 kg."
  },
  {
    "id": "dual-5",
    "index": 4,
    "difficulty": 2,
    "title": "Thử thách 5: Túi Xanh đơn vị",
    "problem": "Cân A: 1 Túi Xanh (Y) = quả cân 6 kg.\nCân B: 2 Túi Vàng (X) + 2 Túi Xanh (Y) = quả cân 26 kg.\nTìm khối lượng của mỗi túi.",
    "unit": "kg",
    "scaleA": {
      "left": {
        "xCount": 0,
        "yCount": 1,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          6
        ]
      }
    },
    "scaleB": {
      "left": {
        "xCount": 2,
        "yCount": 2,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          26
        ]
      }
    },
    "scaleC": {
      "title": "Cân C: 1 Túi Vàng cần quả cân bao nhiêu kg?",
      "left": {
        "xCount": 1,
        "yCount": 0,
        "weights": []
      },
      "targetWeight": 7
    },
    "targetX": 7,
    "targetY": 6,
    "hint": "Cân A: Y = 6 kg. Khi đó 2 Túi Xanh ở Cân B là 2 × 6 = 12 kg. Lấy 26 kg trừ đi 12 kg ra 2 Túi Vàng!",
    "solution": "Cân A: Y = 6 kg. Cân B: 2X + 2(6) = 26 => 2X + 12 = 26 => 2X = 14 => X = 7 kg."
  },
  {
    "id": "dual-6",
    "index": 5,
    "difficulty": 2,
    "title": "Thử thách 6: Tỉ lệ 1 Vàng bằng 3 Xanh",
    "problem": "Cân A: 1 Túi Vàng (X) = 3 Túi Xanh (Y).\nCân B: 1 Túi Vàng (X) + 2 Túi Xanh (Y) = quả cân 25 kg.\nTính khối lượng mỗi túi.",
    "unit": "kg",
    "scaleA": {
      "left": {
        "xCount": 1,
        "yCount": 0,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 3,
        "weights": []
      }
    },
    "scaleB": {
      "left": {
        "xCount": 1,
        "yCount": 2,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          25
        ]
      }
    },
    "scaleC": {
      "title": "Cân C: 1 Túi Xanh cần quả cân bao nhiêu kg?",
      "left": {
        "xCount": 0,
        "yCount": 1,
        "weights": []
      },
      "targetWeight": 5
    },
    "targetX": 15,
    "targetY": 5,
    "hint": "Phương pháp thế: Thay 1 Túi Vàng ở Cân B bằng 3 Túi Xanh. Khi đó Cân B có 3 + 2 = 5 Túi Xanh = 25 kg!",
    "solution": "Thế X = 3Y vào Cân B: 3Y + 2Y = 25 => 5Y = 25 => Y = 5 kg. Suy ra X = 3 × 5 = 15 kg."
  },
  {
    "id": "dual-7",
    "index": 6,
    "difficulty": 3,
    "title": "Thử thách 7: Khử Túi Vàng tìm Túi Xanh",
    "problem": "Cân A: 1 Túi Vàng (X) + 1 Túi Xanh (Y) = 16 kg.\nCân B: 1 Túi Vàng (X) + 2 Túi Xanh (Y) = 22 kg.\nHỏi mỗi túi X và Y nặng bao nhiêu kg?",
    "unit": "kg",
    "scaleA": {
      "left": {
        "xCount": 1,
        "yCount": 1,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          16
        ]
      }
    },
    "scaleB": {
      "left": {
        "xCount": 1,
        "yCount": 2,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          22
        ]
      }
    },
    "scaleC": {
      "title": "Cân C: 2 Túi Vàng cần quả cân bao nhiêu kg?",
      "left": {
        "xCount": 2,
        "yCount": 0,
        "weights": []
      },
      "targetWeight": 20
    },
    "targetX": 10,
    "targetY": 6,
    "hint": "So sánh 2 cân: Cân B có thêm đúng 1 Túi Xanh so với Cân A! Phần chênh lệch 22 - 16 = 6 kg chính là khối lượng của 1 Túi Xanh.",
    "solution": "Lấy Cân B trừ Cân A: (X + 2Y) - (X + Y) = 22 - 16 => Y = 6 kg. Thay vào Cân A: X + 6 = 16 => X = 10 kg."
  },
  {
    "id": "dual-8",
    "index": 7,
    "difficulty": 3,
    "title": "Thử thách 8: Khử Túi Xanh tìm Túi Vàng",
    "problem": "Cân A: 2 Túi Vàng (X) + 1 Túi Xanh (Y) = 25 kg.\nCân B: 1 Túi Vàng (X) + 1 Túi Xanh (Y) = 17 kg.\nHỏi mỗi túi X và Y nặng bao nhiêu kg?",
    "unit": "kg",
    "scaleA": {
      "left": {
        "xCount": 2,
        "yCount": 1,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          25
        ]
      }
    },
    "scaleB": {
      "left": {
        "xCount": 1,
        "yCount": 1,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          17
        ]
      }
    },
    "scaleC": {
      "title": "Cân C: 2 Túi Xanh cần quả cân bao nhiêu kg?",
      "left": {
        "xCount": 0,
        "yCount": 2,
        "weights": []
      },
      "targetWeight": 18
    },
    "targetX": 8,
    "targetY": 9,
    "hint": "Cân A nhiều hơn Cân B đúng 1 Túi Vàng! Hãy lấy khối lượng Cân A trừ Cân B.",
    "solution": "Lấy Cân A trừ Cân B: (2X + Y) - (X + Y) = 25 - 17 => X = 8 kg. Thay vào Cân B: 8 + Y = 17 => Y = 9 kg."
  },
  {
    "id": "dual-9",
    "index": 8,
    "difficulty": 3,
    "title": "Thử thách 9: Chênh lệch hai Túi Vàng",
    "problem": "Cân A: 3 Túi Vàng (X) + 1 Túi Xanh (Y) = 31 kg.\nCân B: 1 Túi Vàng (X) + 1 Túi Xanh (Y) = 15 kg.\nTìm khối lượng của X và Y.",
    "unit": "kg",
    "scaleA": {
      "left": {
        "xCount": 3,
        "yCount": 1,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          31
        ]
      }
    },
    "scaleB": {
      "left": {
        "xCount": 1,
        "yCount": 1,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          15
        ]
      }
    },
    "scaleC": {
      "title": "Cân C: 1 Túi Vàng + 2 Túi Xanh cần bao nhiêu kg?",
      "left": {
        "xCount": 1,
        "yCount": 2,
        "weights": []
      },
      "targetWeight": 22
    },
    "targetX": 8,
    "targetY": 7,
    "hint": "Cân A hơn Cân B là 2 Túi Vàng: 31 - 15 = 16 kg. Vậy 1 Túi Vàng nặng 16 : 2 = 8 kg.",
    "solution": "Cân A - Cân B: 2X = 31 - 15 = 16 => X = 8 kg. Thay vào Cân B: 8 + Y = 15 => Y = 7 kg."
  },
  {
    "id": "dual-10",
    "index": 9,
    "difficulty": 3,
    "title": "Thử thách 10: Chênh lệch hai Túi Xanh",
    "problem": "Cân A: 1 Túi Vàng (X) + 3 Túi Xanh (Y) = 29 kg.\nCân B: 1 Túi Vàng (X) + 1 Túi Xanh (Y) = 15 kg.\nTìm khối lượng mỗi túi.",
    "unit": "kg",
    "scaleA": {
      "left": {
        "xCount": 1,
        "yCount": 3,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          29
        ]
      }
    },
    "scaleB": {
      "left": {
        "xCount": 1,
        "yCount": 1,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          15
        ]
      }
    },
    "scaleC": {
      "title": "Cân C: 2 Túi Vàng + 1 Túi Xanh cần bao nhiêu kg?",
      "left": {
        "xCount": 2,
        "yCount": 1,
        "weights": []
      },
      "targetWeight": 23
    },
    "targetX": 8,
    "targetY": 7,
    "hint": "Cân A hơn Cân B đúng 2 Túi Xanh: 29 - 15 = 14 kg. Vậy 1 Túi Xanh là 14 : 2 = 7 kg.",
    "solution": "Cân A - Cân B: 2Y = 29 - 15 = 14 => Y = 7 kg. Thay vào Cân B: X + 7 = 15 => X = 8 kg."
  },
  {
    "id": "dual-11",
    "index": 10,
    "difficulty": 3,
    "title": "Thử thách 11: Rút gọn nửa tổng",
    "problem": "Cân A: 2 Túi Vàng (X) + 2 Túi Xanh (Y) = 30 kg.\nCân B: 2 Túi Vàng (X) + 1 Túi Xanh (Y) = 22 kg.\nTìm khối lượng mỗi túi.",
    "unit": "kg",
    "scaleA": {
      "left": {
        "xCount": 2,
        "yCount": 2,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          30
        ]
      }
    },
    "scaleB": {
      "left": {
        "xCount": 2,
        "yCount": 1,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          22
        ]
      }
    },
    "scaleC": {
      "title": "Cân C: 1 Túi Vàng cần quả cân bao nhiêu kg?",
      "left": {
        "xCount": 1,
        "yCount": 0,
        "weights": []
      },
      "targetWeight": 7
    },
    "targetX": 7,
    "targetY": 8,
    "hint": "Cân A hơn Cân B đúng 1 Túi Xanh: 30 - 22 = 8 kg. Biết Túi Xanh = 8 kg, tính Túi Vàng từ Cân B.",
    "solution": "Cân A - Cân B: Y = 30 - 22 = 8 kg. Thay vào Cân B: 2X + 8 = 22 => 2X = 14 => X = 7 kg."
  },
  {
    "id": "dual-12",
    "index": 11,
    "difficulty": 3,
    "title": "Thử thách 12: Quả cân hai vế đối xứng",
    "problem": "Cân A: 1 Túi Vàng (X) + quả cân 10 kg = 2 Túi Xanh (Y) + quả cân 5 kg.\nCân B: 1 Túi Vàng (X) + 1 Túi Xanh (Y) = quả cân 19 kg.\nTìm khối lượng của X và Y.",
    "unit": "kg",
    "scaleA": {
      "left": {
        "xCount": 1,
        "yCount": 0,
        "weights": [
          10
        ]
      },
      "right": {
        "xCount": 0,
        "yCount": 2,
        "weights": [
          5
        ]
      }
    },
    "scaleB": {
      "left": {
        "xCount": 1,
        "yCount": 1,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          19
        ]
      }
    },
    "scaleC": {
      "title": "Cân C: 2 Túi Vàng + 1 Túi Xanh cần bao nhiêu kg?",
      "left": {
        "xCount": 2,
        "yCount": 1,
        "weights": []
      },
      "targetWeight": 30
    },
    "targetX": 11,
    "targetY": 8,
    "hint": "Rút gọn Cân A: Bỏ bớt 5 kg ở cả hai đĩa, ta có 1 Túi Vàng + 5 kg = 2 Túi Xanh. Kết hợp Cân B X + Y = 19!",
    "solution": "Cân A: X + 10 = 2Y + 5 => X = 2Y - 5. Thay vào Cân B: (2Y - 5) + Y = 19 => 3Y = 24 => Y = 8 kg. Suy ra X = 19 - 8 = 11 kg."
  },
  {
    "id": "dual-13",
    "index": 12,
    "difficulty": 4,
    "title": "Thử thách 1: Túi Vàng và Túi Xanh cơ bản",
    "problem": "Cân A: 2 Túi Vàng (X) + 1 Túi Xanh (Y) = 28 kg.\nCân B: 1 Túi Vàng (X) + 2 Túi Xanh (Y) = 26 kg.\nHãy tìm khối lượng của Túi Vàng (X) và Túi Xanh (Y) để cả hai cân cùng thăng bằng.",
    "unit": "kg",
    "scaleA": {
      "left": {
        "xCount": 2,
        "yCount": 1,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          28
        ]
      }
    },
    "scaleB": {
      "left": {
        "xCount": 1,
        "yCount": 2,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          26
        ]
      }
    },
    "scaleC": {
      "title": "Cân C (Đố vui): 1 Túi Vàng + 1 Túi Xanh cần bao nhiêu kg?",
      "left": {
        "xCount": 1,
        "yCount": 1,
        "weights": []
      },
      "targetWeight": 18
    },
    "targetX": 10,
    "targetY": 8,
    "hint": "Mẹo cộng hai vế: Đổ cả 2 cân lại ta có 3 Túi Vàng + 3 Túi Xanh = 28 + 26 = 54 kg. Vậy 1 Túi Vàng + 1 Túi Xanh = 54 : 3 = 18 kg!",
    "solution": "Cộng 2 cân: 3X + 3Y = 54 kg => X + Y = 18 kg. Lấy Cân A trừ đi (X + Y): X = 28 − 18 = 10 (kg). Suy ra Y = 18 − 10 = 8 (kg)."
  },
  {
    "id": "dual-14",
    "index": 13,
    "difficulty": 4,
    "title": "Thử thách 2: Quả dưa hấu và chùm nho",
    "problem": "Cân A: 3 quả dưa (X) + 2 chùm nho (Y) = 32 kg.\nCân B: 1 quả dưa (X) + 2 chùm nho (Y) = 16 kg.\nHỏi mỗi quả dưa (X) và mỗi chùm nho (Y) nặng bao nhiêu kg?",
    "unit": "kg",
    "scaleA": {
      "left": {
        "xCount": 3,
        "yCount": 2,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          32
        ]
      }
    },
    "scaleB": {
      "left": {
        "xCount": 1,
        "yCount": 2,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          16
        ]
      }
    },
    "scaleC": {
      "title": "Cân C: 2 quả dưa + 1 chùm nho cần quả cân bao nhiêu kg?",
      "left": {
        "xCount": 2,
        "yCount": 1,
        "weights": []
      },
      "targetWeight": 20
    },
    "targetX": 8,
    "targetY": 4,
    "hint": "Phương pháp triệt tiêu: Cả hai cân đều có 2 chùm nho (2Y). Trừ Cân A cho Cân B để khử 2Y: 2 quả dưa = 32 − 16 = 16 kg!",
    "solution": "Lấy Cân A trừ Cân B: 2X = 32 − 16 = 16 kg => X = 8 kg. Thay X = 8 vào Cân B: 8 + 2Y = 16 => 2Y = 8 => Y = 4 kg."
  },
  {
    "id": "dual-15",
    "index": 14,
    "difficulty": 4,
    "title": "Thử thách 3: Bình mật ong và hộp mứt",
    "problem": "Cân A: 2 bình mật ong (X) + 3 hộp mứt (Y) = 36 kg.\nCân B: 2 bình mật ong (X) + 1 hộp mứt (Y) = 20 kg.\nHỏi 1 bình mật ong (X) và 1 hộp mứt (Y) nặng bao nhiêu kg?",
    "unit": "kg",
    "scaleA": {
      "left": {
        "xCount": 2,
        "yCount": 3,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          36
        ]
      }
    },
    "scaleB": {
      "left": {
        "xCount": 2,
        "yCount": 1,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          20
        ]
      }
    },
    "scaleC": {
      "title": "Cân C: 1 bình mật ong + 2 hộp mứt = ?",
      "left": {
        "xCount": 1,
        "yCount": 2,
        "weights": []
      },
      "targetWeight": 22
    },
    "targetX": 6,
    "targetY": 8,
    "hint": "Khử 2 bình mật ong (2X): Lấy Cân A trừ Cân B: 2 hộp mứt (2Y) = 36 − 20 = 16 kg.",
    "solution": "Lấy Cân A trừ Cân B: 2Y = 36 − 20 = 16 => Y = 8 (kg). Thay Y = 8 vào Cân B: 2X + 8 = 20 => 2X = 12 => X = 6 (kg)."
  },
  {
    "id": "dual-16",
    "index": 15,
    "difficulty": 4,
    "title": "Thử thách 4: Phương pháp Thế Singapore",
    "problem": "Cân A: 1 Túi Vàng (X) = 2 Túi Xanh (Y) + 3 kg.\nCân B: 1 Túi Vàng (X) + 1 Túi Xanh (Y) = 18 kg.\nHỏi Túi Vàng (X) và Túi Xanh (Y) nặng bao nhiêu kg?",
    "unit": "kg",
    "scaleA": {
      "left": {
        "xCount": 1,
        "yCount": 0,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 2,
        "weights": [
          3
        ]
      }
    },
    "scaleB": {
      "left": {
        "xCount": 1,
        "yCount": 1,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          18
        ]
      }
    },
    "scaleC": {
      "title": "Cân C: 2 Túi Vàng + 3 Túi Xanh = ?",
      "left": {
        "xCount": 2,
        "yCount": 3,
        "weights": []
      },
      "targetWeight": 41
    },
    "targetX": 13,
    "targetY": 5,
    "hint": "Phương pháp thế: Ở Cân B, thay Túi Vàng bằng (2 Túi Xanh + 3 kg). Khi đó: 3 Túi Xanh + 3 kg = 18 kg!",
    "solution": "Thế Cân A vào Cân B: (2Y + 3) + Y = 18 => 3Y + 3 = 18 => 3Y = 15 => Y = 5 (kg). X = 2 × 5 + 3 = 13 (kg)."
  },
  {
    "id": "dual-17",
    "index": 16,
    "difficulty": 5,
    "title": "Thử thách 5: Cân đối xứng Singapore (Olympic)",
    "problem": "Cân A: 4 Túi Vàng (X) + 3 Túi Xanh (Y) = 54 kg.\nCân B: 3 Túi Vàng (X) + 4 Túi Xanh (Y) = 51 kg.\nHỏi mỗi Túi Vàng (X) và Túi Xanh (Y) nặng bao nhiêu kg?",
    "unit": "kg",
    "scaleA": {
      "left": {
        "xCount": 4,
        "yCount": 3,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          54
        ]
      }
    },
    "scaleB": {
      "left": {
        "xCount": 3,
        "yCount": 4,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          51
        ]
      }
    },
    "scaleC": {
      "title": "Cân C: 1 Túi Vàng + 1 Túi Xanh = ?",
      "left": {
        "xCount": 1,
        "yCount": 1,
        "weights": []
      },
      "targetWeight": 15
    },
    "targetX": 9,
    "targetY": 6,
    "hint": "Mẹo Olympic đỉnh cao: Cộng 2 cân lại được 7X + 7Y = 105 => X + Y = 15. Trừ 2 cân cho nhau được X − Y = 3! Bài toán trở về Tổng–Hiệu!",
    "solution": "Cộng 2 vế: 7X + 7Y = 105 => X + Y = 15. Trừ 2 vế: X − Y = 3. Đây là bài toán Tổng–Hiệu lớp 4: X = (15 + 3) : 2 = 9 (kg), Y = 15 − 9 = 6 (kg)."
  },
  {
    "id": "dual-18",
    "index": 17,
    "difficulty": 5,
    "title": "Thử thách 6: Cân gam trong phòng thí nghiệm",
    "problem": "Cân A: 5 ống nghiệm X + 2 lọ dung dịch Y = 820 gam.\nCân B: 2 ống nghiệm X + 2 lọ dung dịch Y = 520 gam.\nHỏi mỗi ống nghiệm X và lọ dung dịch Y nặng bao nhiêu gam?",
    "unit": "g",
    "scaleA": {
      "left": {
        "xCount": 5,
        "yCount": 2,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          820
        ]
      }
    },
    "scaleB": {
      "left": {
        "xCount": 2,
        "yCount": 2,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          520
        ]
      }
    },
    "scaleC": {
      "title": "Cân C: 3 ống nghiệm X + 1 lọ Y = ?",
      "left": {
        "xCount": 3,
        "yCount": 1,
        "weights": []
      },
      "targetWeight": 460
    },
    "targetX": 100,
    "targetY": 160,
    "hint": "Khử 2 lọ dung dịch Y: Lấy Cân A trừ Cân B: 3 ống nghiệm X = 820 − 520 = 300 g.",
    "solution": "Trừ Cân A cho Cân B: 3X = 820 − 520 = 300 g => X = 100 g. Thay vào Cân B: 200 + 2Y = 520 => 2Y = 320 => Y = 160 g."
  },
  {
    "id": "dual-19",
    "index": 18,
    "difficulty": 5,
    "title": "Thử thách 7: Hai vế đều có vật nặng",
    "problem": "Cân A: 3 Túi X + 2 Túi Y + 5 kg = 1 Túi X + 45 kg.\nCân B: 2 Túi X + 1 Túi Y = 29 kg.\nHỏi Túi X và Túi Y nặng bao nhiêu kg?",
    "unit": "kg",
    "scaleA": {
      "left": {
        "xCount": 3,
        "yCount": 2,
        "weights": [
          5
        ]
      },
      "right": {
        "xCount": 1,
        "yCount": 0,
        "weights": [
          45
        ]
      }
    },
    "scaleB": {
      "left": {
        "xCount": 2,
        "yCount": 1,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          29
        ]
      }
    },
    "scaleC": {
      "title": "Cân C: 1 Túi X + 3 Túi Y = ?",
      "left": {
        "xCount": 1,
        "yCount": 3,
        "weights": []
      },
      "targetWeight": 42
    },
    "targetX": 9,
    "targetY": 11,
    "hint": "Rút gọn Cân A trước: bớt 1 Túi X và 5 kg ở cả 2 vế => 2 Túi X + 2 Túi Y = 40 kg => Túi X + Túi Y = 20 kg. Kết hợp với Cân B!",
    "solution": "Rút gọn Cân A: 2X + 2Y = 40 => X + Y = 20. Cân B có 2X + Y = 29 => X = 29 − 20 = 9 (kg). Suy ra Y = 20 − 9 = 11 (kg)."
  },
  {
    "id": "dual-20",
    "index": 19,
    "difficulty": 5,
    "title": "Thử thách 8: Gấp đôi một vế (Nhân hệ số)",
    "problem": "Cân A: 2 Túi Vàng (X) + 1 Túi Xanh (Y) = 25 kg.\nCân B: 3 Túi Vàng (X) + 2 Túi Xanh (Y) = 42 kg.\nHỏi mỗi Túi Vàng (X) và Túi Xanh (Y) nặng bao nhiêu kg?",
    "unit": "kg",
    "scaleA": {
      "left": {
        "xCount": 2,
        "yCount": 1,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          25
        ]
      }
    },
    "scaleB": {
      "left": {
        "xCount": 3,
        "yCount": 2,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          42
        ]
      }
    },
    "scaleC": {
      "title": "Cân C: 4 Túi Vàng + 1 Túi Xanh = ?",
      "left": {
        "xCount": 4,
        "yCount": 1,
        "weights": []
      },
      "targetWeight": 41
    },
    "targetX": 8,
    "targetY": 9,
    "hint": "Mẹo nhân hệ số: Gấp đôi Cân A lên! 2 Cân A sẽ có: 4 Túi Vàng + 2 Túi Xanh = 50 kg. Sau đó trừ cho Cân B!",
    "solution": "Gấp đôi Cân A: 4X + 2Y = 50 kg. Trừ cho Cân B (3X + 2Y = 42 kg) để khử 2Y: X = 50 − 42 = 8 (kg). Thay X = 8 vào Cân A: 2 × 8 + Y = 25 => Y = 9 (kg)."
  },
  {
    "id": "dual-21",
    "index": 20,
    "difficulty": 5,
    "title": "Thử thách 9: Đổi đơn vị Tạ và Yến",
    "problem": "Cân A: 3 bao ngô (X) + 1 bao gạo (Y) = 1 tạ 1 yến (11 yến).\nCân B: 1 bao ngô (X) + 1 bao gạo (Y) = 5 yến.\nHỏi mỗi bao ngô (X) và bao gạo (Y) nặng bao nhiêu yến?",
    "unit": "yến",
    "scaleA": {
      "left": {
        "xCount": 3,
        "yCount": 1,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          11
        ]
      }
    },
    "scaleB": {
      "left": {
        "xCount": 1,
        "yCount": 1,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          5
        ]
      }
    },
    "scaleC": {
      "title": "Cân C: 2 bao ngô + 3 bao gạo = ? yến",
      "left": {
        "xCount": 2,
        "yCount": 3,
        "weights": []
      },
      "targetWeight": 12
    },
    "targetX": 3,
    "targetY": 2,
    "hint": "1 tạ = 10 yến => 1 tạ 1 yến = 11 yến. Trừ Cân A cho Cân B để khử bao gạo (Y): 2 bao ngô = 11 − 5 = 6 yến.",
    "solution": "1 tạ 1 yến = 11 yến. Lấy Cân A trừ Cân B: 2X = 11 − 5 = 6 yến => X = 3 (yến). Thay X = 3 vào Cân B: 3 + Y = 5 => Y = 2 (yến)."
  },
  {
    "id": "dual-22",
    "index": 21,
    "difficulty": 5,
    "title": "Thử thách 10: Đỉnh cao Đại số liên hoàn",
    "problem": "Cân A: 5 Túi Vàng (X) + 3 Túi Xanh (Y) = 69 kg.\nCân B: 2 Túi Vàng (X) + 3 Túi Xanh (Y) = 42 kg.\nHỏi Túi Vàng (X) và Túi Xanh (Y) nặng bao nhiêu kg?",
    "unit": "kg",
    "scaleA": {
      "left": {
        "xCount": 5,
        "yCount": 3,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          69
        ]
      }
    },
    "scaleB": {
      "left": {
        "xCount": 2,
        "yCount": 3,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          42
        ]
      }
    },
    "scaleC": {
      "title": "Cân C: 1 Túi Vàng + 4 Túi Xanh = ?",
      "left": {
        "xCount": 1,
        "yCount": 4,
        "weights": []
      },
      "targetWeight": 41
    },
    "targetX": 9,
    "targetY": 8,
    "hint": "Trừ Cân A cho Cân B để khử 3 Túi Xanh: 3 Túi Vàng = 69 − 42 = 27 kg.",
    "solution": "Trừ Cân A cho Cân B: 3X = 69 − 42 = 27 => X = 9 (kg). Thay X = 9 vào Cân B: 2 × 9 + 3Y = 42 => 3Y = 24 => Y = 8 (kg)."
  },
  {
    "id": "dual-23",
    "index": 22,
    "difficulty": 4,
    "title": "Thử thách 11: Khử 3 Túi Xanh",
    "problem": "Cân A: 2 Túi Vàng (X) + 3 Túi Xanh (Y) = 39 kg.\nCân B: 1 Túi Vàng (X) + 3 Túi Xanh (Y) = 27 kg.\nHỏi mỗi Túi Vàng (X) và Túi Xanh (Y) nặng bao nhiêu kg?",
    "unit": "kg",
    "scaleA": {
      "left": {
        "xCount": 2,
        "yCount": 3,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          39
        ]
      }
    },
    "scaleB": {
      "left": {
        "xCount": 1,
        "yCount": 3,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          27
        ]
      }
    },
    "scaleC": {
      "title": "Cân C: 3 Túi Vàng + 1 Túi Xanh = ?",
      "left": {
        "xCount": 3,
        "yCount": 1,
        "weights": []
      },
      "targetWeight": 41
    },
    "targetX": 12,
    "targetY": 5,
    "hint": "Lấy Cân A trừ Cân B: 1 Túi Vàng = 39 − 27 = 12 kg.",
    "solution": "Trừ Cân A cho Cân B: X = 39 − 27 = 12 (kg). Thay X = 12 vào Cân B: 12 + 3Y = 27 => 3Y = 15 => Y = 5 (kg)."
  },
  {
    "id": "dual-24",
    "index": 23,
    "difficulty": 5,
    "title": "Thử thách 12: Đấu trí Tổng–Hiệu Singapore",
    "problem": "Cân A: 1 Túi Vàng (X) + 2 Túi Xanh (Y) = 55 kg.\nCân B: 2 Túi Vàng (X) + 1 Túi Xanh (Y) = 50 kg.\nHỏi mỗi Túi Vàng (X) và Túi Xanh (Y) nặng bao nhiêu kg?",
    "unit": "kg",
    "scaleA": {
      "left": {
        "xCount": 1,
        "yCount": 2,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          55
        ]
      }
    },
    "scaleB": {
      "left": {
        "xCount": 2,
        "yCount": 1,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          50
        ]
      }
    },
    "scaleC": {
      "title": "Cân C: 2 Túi Vàng + 2 Túi Xanh = ?",
      "left": {
        "xCount": 2,
        "yCount": 2,
        "weights": []
      },
      "targetWeight": 70
    },
    "targetX": 15,
    "targetY": 20,
    "hint": "Cộng 2 cân: 3X + 3Y = 105 => X + Y = 35 kg. Trừ Cân A cho Cân B: Y − X = 5 kg!",
    "solution": "Cộng 2 vế: 3X + 3Y = 105 => X + Y = 35. Trừ Cân A cho Cân B: Y − X = 5. Bài toán Tổng–Hiệu: Y = (35 + 5) : 2 = 20 (kg), X = 35 − 20 = 15 (kg)."
  },
  {
    "id": "dual-25",
    "index": 24,
    "difficulty": 5,
    "title": "Thử thách 13: Bó hoa hồng và giỏ trái cây",
    "problem": "Cân A: 2 giỏ trái cây (X) + 1 bó hoa (Y) = 64 kg.\nCân B: 2 giỏ trái cây (X) + 3 bó hoa (Y) = 92 kg.\nHỏi mỗi giỏ trái cây (X) và bó hoa (Y) nặng bao nhiêu kg?",
    "unit": "kg",
    "scaleA": {
      "left": {
        "xCount": 2,
        "yCount": 1,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          64
        ]
      }
    },
    "scaleB": {
      "left": {
        "xCount": 2,
        "yCount": 3,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          92
        ]
      }
    },
    "scaleC": {
      "title": "Cân C: 1 giỏ trái cây + 1 bó hoa = ?",
      "left": {
        "xCount": 1,
        "yCount": 1,
        "weights": []
      },
      "targetWeight": 39
    },
    "targetX": 25,
    "targetY": 14,
    "hint": "Trừ Cân B cho Cân A để khử 2 giỏ trái cây: 2 bó hoa = 92 − 64 = 28 kg.",
    "solution": "Trừ Cân B cho Cân A: 2Y = 92 − 64 = 28 kg => Y = 14 (kg). Thay Y = 14 vào Cân A: 2X + 14 = 64 => 2X = 50 => X = 25 (kg)."
  },
  {
    "id": "dual-26",
    "index": 25,
    "difficulty": 5,
    "title": "Thử thách 14: Phương pháp thế một vế",
    "problem": "Cân A: 1 Túi Vàng (X) = 2 Túi Xanh (Y) + 4 kg.\nCân B: 1 Túi Vàng (X) + 2 Túi Xanh (Y) = 32 kg.\nHỏi Túi Vàng (X) và Túi Xanh (Y) nặng bao nhiêu kg?",
    "unit": "kg",
    "scaleA": {
      "left": {
        "xCount": 1,
        "yCount": 0,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 2,
        "weights": [
          4
        ]
      }
    },
    "scaleB": {
      "left": {
        "xCount": 1,
        "yCount": 2,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          32
        ]
      }
    },
    "scaleC": {
      "title": "Cân C: 2 Túi Vàng + 1 Túi Xanh = ?",
      "left": {
        "xCount": 2,
        "yCount": 1,
        "weights": []
      },
      "targetWeight": 43
    },
    "targetX": 18,
    "targetY": 7,
    "hint": "Thay Túi Vàng (X) ở Cân B bằng (2 Túi Xanh + 4 kg): (2Y + 4) + 2Y = 32 kg.",
    "solution": "Thế Cân A vào Cân B: 4Y + 4 = 32 => 4Y = 28 => Y = 7 (kg). Túi Vàng X = 2 × 7 + 4 = 18 (kg)."
  },
  {
    "id": "dual-27",
    "index": 26,
    "difficulty": 5,
    "title": "Thử thách 15: Thùng dầu và can xăng",
    "problem": "Cân A: 3 thùng dầu (X) + 2 can xăng (Y) = 114 kg.\nCân B: 1 thùng dầu (X) + 2 can xăng (Y) = 54 kg.\nHỏi mỗi thùng dầu (X) và can xăng (Y) nặng bao nhiêu kg?",
    "unit": "kg",
    "scaleA": {
      "left": {
        "xCount": 3,
        "yCount": 2,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          114
        ]
      }
    },
    "scaleB": {
      "left": {
        "xCount": 1,
        "yCount": 2,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          54
        ]
      }
    },
    "scaleC": {
      "title": "Cân C: 2 thùng dầu + 3 can xăng = ?",
      "left": {
        "xCount": 2,
        "yCount": 3,
        "weights": []
      },
      "targetWeight": 96
    },
    "targetX": 30,
    "targetY": 12,
    "hint": "Trừ Cân A cho Cân B: 2 thùng dầu (2X) = 114 − 54 = 60 kg.",
    "solution": "Lấy Cân A trừ Cân B: 2X = 114 − 54 = 60 kg => X = 30 (kg). Thay X = 30 vào Cân B: 30 + 2Y = 54 => 2Y = 24 => Y = 12 (kg)."
  },
  {
    "id": "dual-28",
    "index": 27,
    "difficulty": 5,
    "title": "Thử thách 16: Cân đối xứng 3X+2Y và 2X+3Y",
    "problem": "Cân A: 3 Túi Vàng (X) + 2 Túi Xanh (Y) = 74 kg.\nCân B: 2 Túi Vàng (X) + 3 Túi Xanh (Y) = 76 kg.\nHỏi Túi Vàng (X) và Túi Xanh (Y) nặng bao nhiêu kg?",
    "unit": "kg",
    "scaleA": {
      "left": {
        "xCount": 3,
        "yCount": 2,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          74
        ]
      }
    },
    "scaleB": {
      "left": {
        "xCount": 2,
        "yCount": 3,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          76
        ]
      }
    },
    "scaleC": {
      "title": "Cân C: 1 Túi Vàng + 2 Túi Xanh = ?",
      "left": {
        "xCount": 1,
        "yCount": 2,
        "weights": []
      },
      "targetWeight": 46
    },
    "targetX": 14,
    "targetY": 16,
    "hint": "Cộng 2 cân: 5X + 5Y = 150 => X + Y = 30 kg. Trừ Cân B cho Cân A: Y − X = 2 kg. Giải Tổng–Hiệu!",
    "solution": "Cộng 2 vế: 5X + 5Y = 150 => X + Y = 30. Trừ Cân B cho Cân A: Y − X = 2. Vậy Y = (30 + 2) : 2 = 16 (kg), X = 30 − 16 = 14 (kg)."
  },
  {
    "id": "dual-29",
    "index": 28,
    "difficulty": 5,
    "title": "Thử thách 17: Cân hóa chất gam chuẩn",
    "problem": "Cân A: 2 lọ hóa chất X + 1 hộp bột Y = 550 gam.\nCân B: 2 lọ hóa chất X + 3 hộp bột Y = 1050 gam.\nHỏi mỗi lọ hóa chất X và hộp bột Y nặng bao nhiêu gam?",
    "unit": "g",
    "scaleA": {
      "left": {
        "xCount": 2,
        "yCount": 1,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          550
        ]
      }
    },
    "scaleB": {
      "left": {
        "xCount": 2,
        "yCount": 3,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          1050
        ]
      }
    },
    "scaleC": {
      "title": "Cân C: 3 lọ hóa chất X + 2 hộp bột Y = ?",
      "left": {
        "xCount": 3,
        "yCount": 2,
        "weights": []
      },
      "targetWeight": 950
    },
    "targetX": 150,
    "targetY": 250,
    "hint": "Khử 2 lọ hóa chất X: Lấy Cân B trừ Cân A: 2 hộp bột Y = 1050 − 550 = 500 gam.",
    "solution": "Trừ Cân B cho Cân A: 2Y = 1050 − 550 = 500 g => Y = 250 (g). Thay Y = 250 vào Cân A: 2X + 250 = 550 => 2X = 300 => X = 150 (g)."
  },
  {
    "id": "dual-30",
    "index": 29,
    "difficulty": 5,
    "title": "Thử thách 18: Hai túi hàng số lớn",
    "problem": "Cân A: 2 Túi X + 3 Túi Y = 89 kg.\nCân B: 4 Túi X + 3 Túi Y = 133 kg.\nHỏi mỗi Túi X và Túi Y nặng bao nhiêu kg?",
    "unit": "kg",
    "scaleA": {
      "left": {
        "xCount": 2,
        "yCount": 3,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          89
        ]
      }
    },
    "scaleB": {
      "left": {
        "xCount": 4,
        "yCount": 3,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          133
        ]
      }
    },
    "scaleC": {
      "title": "Cân C: 3 Túi X + 2 Túi Y = ?",
      "left": {
        "xCount": 3,
        "yCount": 2,
        "weights": []
      },
      "targetWeight": 96
    },
    "targetX": 22,
    "targetY": 15,
    "hint": "Trừ Cân B cho Cân A: 2 Túi X = 133 − 89 = 44 kg.",
    "solution": "Trừ Cân B cho Cân A: 2X = 133 − 89 = 44 => X = 22 (kg). Thay X = 22 vào Cân A: 2 × 22 + 3Y = 89 => 3Y = 45 => Y = 15 (kg)."
  },
  {
    "id": "dual-31",
    "index": 30,
    "difficulty": 5,
    "title": "Thử thách 19: Nhân đôi một phương trình",
    "problem": "Cân A: 1 Túi Vàng (X) + 3 Túi Xanh (Y) = 95 kg.\nCân B: 2 Túi Vàng (X) + 1 Túi Xanh (Y) = 90 kg.\nHỏi mỗi Túi Vàng (X) và Túi Xanh (Y) nặng bao nhiêu kg?",
    "unit": "kg",
    "scaleA": {
      "left": {
        "xCount": 1,
        "yCount": 3,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          95
        ]
      }
    },
    "scaleB": {
      "left": {
        "xCount": 2,
        "yCount": 1,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          90
        ]
      }
    },
    "scaleC": {
      "title": "Cân C: 1 Túi Vàng + 1 Túi Xanh = ?",
      "left": {
        "xCount": 1,
        "yCount": 1,
        "weights": []
      },
      "targetWeight": 55
    },
    "targetX": 35,
    "targetY": 20,
    "hint": "Gấp đôi Cân A lên: 2 Túi Vàng + 6 Túi Xanh = 190 kg. Sau đó trừ cho Cân B để khử 2 Túi Vàng!",
    "solution": "Gấp đôi Cân A: 2X + 6Y = 190. Trừ cho Cân B (2X + Y = 90): 5Y = 100 => Y = 20 (kg). Thay Y = 20 vào Cân A: X + 60 = 95 => X = 35 (kg)."
  },
  {
    "id": "dual-32",
    "index": 31,
    "difficulty": 5,
    "title": "Thử thách 20: Đỉnh cao Olympic 4X+3Y và 3X+4Y",
    "problem": "Cân A: 4 Túi Vàng (X) + 3 Túi Xanh (Y) = 290 kg.\nCân B: 3 Túi Vàng (X) + 4 Túi Xanh (Y) = 270 kg.\nHỏi mỗi Túi Vàng (X) và Túi Xanh (Y) nặng bao nhiêu kg?",
    "unit": "kg",
    "scaleA": {
      "left": {
        "xCount": 4,
        "yCount": 3,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          290
        ]
      }
    },
    "scaleB": {
      "left": {
        "xCount": 3,
        "yCount": 4,
        "weights": []
      },
      "right": {
        "xCount": 0,
        "yCount": 0,
        "weights": [
          270
        ]
      }
    },
    "scaleC": {
      "title": "Cân C: 2 Túi Vàng + 1 Túi Xanh = ?",
      "left": {
        "xCount": 2,
        "yCount": 1,
        "weights": []
      },
      "targetWeight": 130
    },
    "targetX": 50,
    "targetY": 30,
    "hint": "Cộng 2 cân: 7X + 7Y = 560 => X + Y = 80 kg. Trừ Cân A cho Cân B: X − Y = 20 kg. Giải bài toán Tổng–Hiệu!",
    "solution": "Cộng 2 vế: 7X + 7Y = 560 => X + Y = 80. Trừ 2 vế: X − Y = 20. Vậy X = (80 + 20) : 2 = 50 (kg), Y = 80 − 50 = 30 (kg)."
  }
];
