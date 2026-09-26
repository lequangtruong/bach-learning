// js/rush-hour-boards-part1.js - Thế cờ Rush Hour (Phần 1: Bài 1 - 25)
// Chuẩn Mensa Select Mỹ rèn luyện tư duy thuật toán và lập kế hoạch đa bước

export const RUSH_HOUR_BOARDS_PART1 = [
  {
    "vehicles": [
      {
        "id": "R",
        "row": 2,
        "col": 1,
        "len": 2,
        "dir": "H",
        "color": "#ef4444",
        "name": "Xe Đỏ"
      },
      {
        "id": "A",
        "row": 0,
        "col": 3,
        "len": 3,
        "dir": "V",
        "color": "#10b981",
        "name": "Xe Tải Xanh Lá"
      },
      {
        "id": "B",
        "row": 3,
        "col": 1,
        "len": 2,
        "dir": "H",
        "color": "#f59e0b",
        "name": "Xe Con Vàng"
      },
      {
        "id": "C",
        "row": 4,
        "col": 4,
        "len": 2,
        "dir": "V",
        "color": "#3b82f6",
        "name": "Xe Con Lam"
      }
    ],
    "title": "Khởi Đầu Dễ Dàng",
    "difficulty": 1,
    "hint": "Đẩy xe con cản phía trước để xe đỏ phóng thẳng ra cửa.",
    "id": "rh-01",
    "minMoves": 6
  },
  {
    "vehicles": [
      {
        "id": "R",
        "row": 2,
        "col": 0,
        "len": 2,
        "dir": "H",
        "color": "#ef4444",
        "name": "Xe Đỏ"
      },
      {
        "id": "A",
        "row": 1,
        "col": 3,
        "len": 2,
        "dir": "V",
        "color": "#10b981",
        "name": "Xe Con Xanh Lá"
      },
      {
        "id": "B",
        "row": 4,
        "col": 1,
        "len": 3,
        "dir": "H",
        "color": "#f59e0b",
        "name": "Xe Tải Vàng"
      },
      {
        "id": "C",
        "row": 3,
        "col": 0,
        "len": 2,
        "dir": "V",
        "color": "#3b82f6",
        "name": "Xe Con Lam"
      },
      {
        "id": "D",
        "row": 3,
        "col": 4,
        "len": 2,
        "dir": "H",
        "color": "#8b5cf6",
        "name": "Xe Con Tím"
      },
      {
        "id": "E",
        "row": 5,
        "col": 2,
        "len": 2,
        "dir": "H",
        "color": "#ec4899",
        "name": "Xe Con Hồng"
      },
      {
        "id": "F",
        "row": 0,
        "col": 2,
        "len": 2,
        "dir": "H",
        "color": "#06b6d4",
        "name": "Xe Con Ngọc"
      }
    ],
    "title": "Mở Lối Thoát Xe Con",
    "difficulty": 1,
    "hint": "Di chuyển xe ngang ở hàng dưới sang phải để xe dọc có chỗ lùi.",
    "id": "rh-02",
    "minMoves": 6
  },
  {
    "vehicles": [
      {
        "id": "R",
        "row": 2,
        "col": 0,
        "len": 2,
        "dir": "H",
        "color": "#ef4444",
        "name": "Xe Đỏ"
      },
      {
        "id": "A",
        "row": 2,
        "col": 5,
        "len": 3,
        "dir": "V",
        "color": "#10b981",
        "name": "Xe Tải Xanh Lá"
      },
      {
        "id": "B",
        "row": 4,
        "col": 4,
        "len": 2,
        "dir": "V",
        "color": "#f59e0b",
        "name": "Xe Con Vàng"
      },
      {
        "id": "C",
        "row": 2,
        "col": 2,
        "len": 2,
        "dir": "V",
        "color": "#3b82f6",
        "name": "Xe Con Lam"
      },
      {
        "id": "D",
        "row": 3,
        "col": 1,
        "len": 3,
        "dir": "V",
        "color": "#8b5cf6",
        "name": "Xe Tải Tím"
      },
      {
        "id": "E",
        "row": 0,
        "col": 0,
        "len": 2,
        "dir": "V",
        "color": "#ec4899",
        "name": "Xe Con Hồng"
      },
      {
        "id": "F",
        "row": 0,
        "col": 3,
        "len": 2,
        "dir": "H",
        "color": "#06b6d4",
        "name": "Xe Con Ngọc"
      },
      {
        "id": "G",
        "row": 1,
        "col": 2,
        "len": 2,
        "dir": "H",
        "color": "#f97316",
        "name": "Xe Con Cam"
      },
      {
        "id": "H",
        "row": 3,
        "col": 0,
        "len": 2,
        "dir": "V",
        "color": "#64748b",
        "name": "Xe Con Xám"
      },
      {
        "id": "I",
        "row": 0,
        "col": 1,
        "len": 2,
        "dir": "H",
        "color": "#84cc16",
        "name": "Xe Con Cốm"
      }
    ],
    "title": "Gạt Nhanh Chướng Ngại",
    "difficulty": 1,
    "hint": "Dời xe tải lên trên cùng để xe đỏ không bị vướng đầu.",
    "id": "rh-03",
    "minMoves": 6
  },
  {
    "vehicles": [
      {
        "id": "R",
        "row": 2,
        "col": 1,
        "len": 2,
        "dir": "H",
        "color": "#ef4444",
        "name": "Xe Đỏ"
      },
      {
        "id": "A",
        "row": 2,
        "col": 4,
        "len": 3,
        "dir": "V",
        "color": "#10b981",
        "name": "Xe Tải Xanh Lá"
      },
      {
        "id": "B",
        "row": 2,
        "col": 3,
        "len": 2,
        "dir": "V",
        "color": "#f59e0b",
        "name": "Xe Con Vàng"
      },
      {
        "id": "C",
        "row": 5,
        "col": 3,
        "len": 3,
        "dir": "H",
        "color": "#3b82f6",
        "name": "Xe Tải Lam"
      },
      {
        "id": "D",
        "row": 4,
        "col": 0,
        "len": 2,
        "dir": "H",
        "color": "#8b5cf6",
        "name": "Xe Con Tím"
      },
      {
        "id": "E",
        "row": 0,
        "col": 5,
        "len": 2,
        "dir": "V",
        "color": "#ec4899",
        "name": "Xe Con Hồng"
      }
    ],
    "title": "Đổi Làn Nhanh Trí",
    "difficulty": 1,
    "hint": "Lùi xe đỏ một nhịp tạo chỗ trống cho xe dọc đi xuống.",
    "id": "rh-04",
    "minMoves": 7
  },
  {
    "vehicles": [
      {
        "id": "R",
        "row": 2,
        "col": 0,
        "len": 2,
        "dir": "H",
        "color": "#ef4444",
        "name": "Xe Đỏ"
      },
      {
        "id": "A",
        "row": 1,
        "col": 4,
        "len": 2,
        "dir": "V",
        "color": "#10b981",
        "name": "Xe Con Xanh Lá"
      },
      {
        "id": "B",
        "row": 0,
        "col": 4,
        "len": 2,
        "dir": "H",
        "color": "#f59e0b",
        "name": "Xe Con Vàng"
      },
      {
        "id": "C",
        "row": 3,
        "col": 3,
        "len": 2,
        "dir": "V",
        "color": "#3b82f6",
        "name": "Xe Con Lam"
      },
      {
        "id": "D",
        "row": 3,
        "col": 4,
        "len": 2,
        "dir": "V",
        "color": "#8b5cf6",
        "name": "Xe Con Tím"
      }
    ],
    "title": "Xe Tải Chắn Cửa",
    "difficulty": 1,
    "hint": "Trượt xe tải cam sang trái để xe tím có thể tiến lên.",
    "id": "rh-05",
    "minMoves": 7
  },
  {
    "vehicles": [
      {
        "id": "R",
        "row": 2,
        "col": 0,
        "len": 2,
        "dir": "H",
        "color": "#ef4444",
        "name": "Xe Đỏ"
      },
      {
        "id": "A",
        "row": 2,
        "col": 5,
        "len": 2,
        "dir": "V",
        "color": "#10b981",
        "name": "Xe Con Xanh Lá"
      },
      {
        "id": "B",
        "row": 3,
        "col": 2,
        "len": 2,
        "dir": "H",
        "color": "#f59e0b",
        "name": "Xe Con Vàng"
      },
      {
        "id": "C",
        "row": 4,
        "col": 1,
        "len": 2,
        "dir": "H",
        "color": "#3b82f6",
        "name": "Xe Con Lam"
      },
      {
        "id": "D",
        "row": 2,
        "col": 4,
        "len": 2,
        "dir": "V",
        "color": "#8b5cf6",
        "name": "Xe Con Tím"
      },
      {
        "id": "E",
        "row": 4,
        "col": 3,
        "len": 2,
        "dir": "V",
        "color": "#ec4899",
        "name": "Xe Con Hồng"
      },
      {
        "id": "F",
        "row": 4,
        "col": 5,
        "len": 2,
        "dir": "V",
        "color": "#06b6d4",
        "name": "Xe Con Ngọc"
      }
    ],
    "title": "Ngã Ba Giờ Tan Tầm",
    "difficulty": 1,
    "hint": "Kéo xe xanh lá xuống dưới cùng mở đường ngang số 2.",
    "id": "rh-06",
    "minMoves": 7
  },
  {
    "vehicles": [
      {
        "id": "R",
        "row": 2,
        "col": 0,
        "len": 2,
        "dir": "H",
        "color": "#ef4444",
        "name": "Xe Đỏ"
      },
      {
        "id": "A",
        "row": 1,
        "col": 4,
        "len": 3,
        "dir": "V",
        "color": "#10b981",
        "name": "Xe Tải Xanh Lá"
      },
      {
        "id": "B",
        "row": 3,
        "col": 1,
        "len": 2,
        "dir": "V",
        "color": "#f59e0b",
        "name": "Xe Con Vàng"
      },
      {
        "id": "C",
        "row": 3,
        "col": 2,
        "len": 3,
        "dir": "V",
        "color": "#3b82f6",
        "name": "Xe Tải Lam"
      },
      {
        "id": "D",
        "row": 0,
        "col": 1,
        "len": 2,
        "dir": "H",
        "color": "#8b5cf6",
        "name": "Xe Con Tím"
      },
      {
        "id": "E",
        "row": 4,
        "col": 5,
        "len": 2,
        "dir": "V",
        "color": "#ec4899",
        "name": "Xe Con Hồng"
      },
      {
        "id": "F",
        "row": 4,
        "col": 3,
        "len": 2,
        "dir": "V",
        "color": "#06b6d4",
        "name": "Xe Con Ngọc"
      },
      {
        "id": "G",
        "row": 3,
        "col": 0,
        "len": 2,
        "dir": "V",
        "color": "#f97316",
        "name": "Xe Con Cam"
      },
      {
        "id": "H",
        "row": 1,
        "col": 5,
        "len": 2,
        "dir": "V",
        "color": "#64748b",
        "name": "Xe Con Xám"
      },
      {
        "id": "I",
        "row": 1,
        "col": 3,
        "len": 2,
        "dir": "V",
        "color": "#84cc16",
        "name": "Xe Con Cốm"
      }
    ],
    "title": "Lùi Xe Chuẩn Xác",
    "difficulty": 1,
    "hint": "Đẩy xe vàng ở góc trên sang phải, lùi xe lam lên trên.",
    "id": "rh-07",
    "minMoves": 8
  },
  {
    "vehicles": [
      {
        "id": "R",
        "row": 2,
        "col": 0,
        "len": 2,
        "dir": "H",
        "color": "#ef4444",
        "name": "Xe Đỏ"
      },
      {
        "id": "A",
        "row": 0,
        "col": 3,
        "len": 3,
        "dir": "V",
        "color": "#10b981",
        "name": "Xe Tải Xanh Lá"
      },
      {
        "id": "B",
        "row": 1,
        "col": 4,
        "len": 2,
        "dir": "V",
        "color": "#f59e0b",
        "name": "Xe Con Vàng"
      },
      {
        "id": "C",
        "row": 4,
        "col": 1,
        "len": 2,
        "dir": "V",
        "color": "#3b82f6",
        "name": "Xe Con Lam"
      },
      {
        "id": "D",
        "row": 0,
        "col": 1,
        "len": 2,
        "dir": "V",
        "color": "#8b5cf6",
        "name": "Xe Con Tím"
      },
      {
        "id": "E",
        "row": 3,
        "col": 2,
        "len": 2,
        "dir": "V",
        "color": "#ec4899",
        "name": "Xe Con Hồng"
      },
      {
        "id": "F",
        "row": 0,
        "col": 5,
        "len": 2,
        "dir": "V",
        "color": "#06b6d4",
        "name": "Xe Con Ngọc"
      }
    ],
    "title": "Phối Hợp Nhịp Nhàng",
    "difficulty": 1,
    "hint": "Đưa các xe nhỏ dạt về hai mép bãi đỗ.",
    "id": "rh-08",
    "minMoves": 8
  },
  {
    "vehicles": [
      {
        "id": "R",
        "row": 2,
        "col": 0,
        "len": 2,
        "dir": "H",
        "color": "#ef4444",
        "name": "Xe Đỏ"
      },
      {
        "id": "A",
        "row": 0,
        "col": 4,
        "len": 3,
        "dir": "V",
        "color": "#10b981",
        "name": "Xe Tải Xanh Lá"
      },
      {
        "id": "B",
        "row": 0,
        "col": 0,
        "len": 2,
        "dir": "V",
        "color": "#f59e0b",
        "name": "Xe Con Vàng"
      },
      {
        "id": "C",
        "row": 4,
        "col": 4,
        "len": 2,
        "dir": "H",
        "color": "#3b82f6",
        "name": "Xe Con Lam"
      },
      {
        "id": "D",
        "row": 0,
        "col": 1,
        "len": 2,
        "dir": "V",
        "color": "#8b5cf6",
        "name": "Xe Con Tím"
      }
    ],
    "title": "Vượt Qua Vòng Xuyến",
    "difficulty": 2,
    "hint": "Đẩy xe tím sang phải hết cỡ rồi kéo xe tải vàng xuống.",
    "id": "rh-09",
    "minMoves": 9
  },
  {
    "vehicles": [
      {
        "id": "R",
        "row": 2,
        "col": 0,
        "len": 2,
        "dir": "H",
        "color": "#ef4444",
        "name": "Xe Đỏ"
      },
      {
        "id": "A",
        "row": 2,
        "col": 4,
        "len": 2,
        "dir": "V",
        "color": "#10b981",
        "name": "Xe Con Xanh Lá"
      },
      {
        "id": "B",
        "row": 5,
        "col": 0,
        "len": 2,
        "dir": "H",
        "color": "#f59e0b",
        "name": "Xe Con Vàng"
      },
      {
        "id": "C",
        "row": 4,
        "col": 4,
        "len": 2,
        "dir": "V",
        "color": "#3b82f6",
        "name": "Xe Con Lam"
      },
      {
        "id": "D",
        "row": 0,
        "col": 3,
        "len": 3,
        "dir": "V",
        "color": "#8b5cf6",
        "name": "Xe Tải Tím"
      }
    ],
    "title": "Khéo Léo Đổi Chỗ",
    "difficulty": 2,
    "hint": "Hoán đổi vị trí giữa xe xanh và xe cam ở hàng giữa.",
    "id": "rh-10",
    "minMoves": 9
  },
  {
    "vehicles": [
      {
        "id": "R",
        "row": 2,
        "col": 0,
        "len": 2,
        "dir": "H",
        "color": "#ef4444",
        "name": "Xe Đỏ"
      },
      {
        "id": "A",
        "row": 2,
        "col": 4,
        "len": 2,
        "dir": "V",
        "color": "#10b981",
        "name": "Xe Con Xanh Lá"
      },
      {
        "id": "B",
        "row": 1,
        "col": 3,
        "len": 2,
        "dir": "H",
        "color": "#f59e0b",
        "name": "Xe Con Vàng"
      },
      {
        "id": "C",
        "row": 4,
        "col": 5,
        "len": 2,
        "dir": "V",
        "color": "#3b82f6",
        "name": "Xe Con Lam"
      },
      {
        "id": "D",
        "row": 5,
        "col": 1,
        "len": 2,
        "dir": "H",
        "color": "#8b5cf6",
        "name": "Xe Con Tím"
      },
      {
        "id": "E",
        "row": 1,
        "col": 5,
        "len": 2,
        "dir": "V",
        "color": "#ec4899",
        "name": "Xe Con Hồng"
      },
      {
        "id": "F",
        "row": 0,
        "col": 2,
        "len": 3,
        "dir": "V",
        "color": "#06b6d4",
        "name": "Xe Tải Ngọc"
      }
    ],
    "title": "Thao Tác Nhị Thập",
    "difficulty": 2,
    "hint": "Dời xe tải 3 ô trước khi chạm vào xe đỏ.",
    "id": "rh-11",
    "minMoves": 10
  },
  {
    "vehicles": [
      {
        "id": "R",
        "row": 2,
        "col": 0,
        "len": 2,
        "dir": "H",
        "color": "#ef4444",
        "name": "Xe Đỏ"
      },
      {
        "id": "A",
        "row": 2,
        "col": 2,
        "len": 2,
        "dir": "V",
        "color": "#10b981",
        "name": "Xe Con Xanh Lá"
      },
      {
        "id": "B",
        "row": 1,
        "col": 1,
        "len": 3,
        "dir": "H",
        "color": "#f59e0b",
        "name": "Xe Tải Vàng"
      },
      {
        "id": "C",
        "row": 2,
        "col": 3,
        "len": 3,
        "dir": "V",
        "color": "#3b82f6",
        "name": "Xe Tải Lam"
      },
      {
        "id": "D",
        "row": 2,
        "col": 5,
        "len": 2,
        "dir": "V",
        "color": "#8b5cf6",
        "name": "Xe Con Tím"
      },
      {
        "id": "E",
        "row": 5,
        "col": 1,
        "len": 2,
        "dir": "H",
        "color": "#ec4899",
        "name": "Xe Con Hồng"
      },
      {
        "id": "F",
        "row": 1,
        "col": 4,
        "len": 2,
        "dir": "H",
        "color": "#06b6d4",
        "name": "Xe Con Ngọc"
      },
      {
        "id": "G",
        "row": 4,
        "col": 4,
        "len": 2,
        "dir": "H",
        "color": "#f97316",
        "name": "Xe Con Cam"
      }
    ],
    "title": "Tránh Đầu Đụng Đuôi",
    "difficulty": 2,
    "hint": "Cẩn thận không đẩy xe vào góc chết không thể lùi.",
    "id": "rh-12",
    "minMoves": 10
  },
  {
    "vehicles": [
      {
        "id": "R",
        "row": 2,
        "col": 0,
        "len": 2,
        "dir": "H",
        "color": "#ef4444",
        "name": "Xe Đỏ"
      },
      {
        "id": "A",
        "row": 1,
        "col": 3,
        "len": 3,
        "dir": "V",
        "color": "#10b981",
        "name": "Xe Tải Xanh Lá"
      },
      {
        "id": "B",
        "row": 0,
        "col": 5,
        "len": 3,
        "dir": "V",
        "color": "#f59e0b",
        "name": "Xe Tải Vàng"
      },
      {
        "id": "C",
        "row": 4,
        "col": 3,
        "len": 2,
        "dir": "H",
        "color": "#3b82f6",
        "name": "Xe Con Lam"
      },
      {
        "id": "D",
        "row": 3,
        "col": 0,
        "len": 2,
        "dir": "V",
        "color": "#8b5cf6",
        "name": "Xe Con Tím"
      }
    ],
    "title": "Chắn Đường Đôi",
    "difficulty": 2,
    "hint": "Hai xe tải chặn hàng dọc, cần đẩy xe con bên cạnh để phá thế cờ.",
    "id": "rh-13",
    "minMoves": 11
  },
  {
    "vehicles": [
      {
        "id": "R",
        "row": 2,
        "col": 0,
        "len": 2,
        "dir": "H",
        "color": "#ef4444",
        "name": "Xe Đỏ"
      },
      {
        "id": "A",
        "row": 1,
        "col": 3,
        "len": 3,
        "dir": "V",
        "color": "#10b981",
        "name": "Xe Tải Xanh Lá"
      },
      {
        "id": "B",
        "row": 4,
        "col": 0,
        "len": 2,
        "dir": "H",
        "color": "#f59e0b",
        "name": "Xe Con Vàng"
      },
      {
        "id": "C",
        "row": 3,
        "col": 1,
        "len": 2,
        "dir": "H",
        "color": "#3b82f6",
        "name": "Xe Con Lam"
      },
      {
        "id": "D",
        "row": 2,
        "col": 5,
        "len": 2,
        "dir": "V",
        "color": "#8b5cf6",
        "name": "Xe Con Tím"
      },
      {
        "id": "E",
        "row": 5,
        "col": 2,
        "len": 2,
        "dir": "H",
        "color": "#ec4899",
        "name": "Xe Con Hồng"
      },
      {
        "id": "F",
        "row": 1,
        "col": 4,
        "len": 3,
        "dir": "V",
        "color": "#06b6d4",
        "name": "Xe Tải Ngọc"
      },
      {
        "id": "G",
        "row": 4,
        "col": 5,
        "len": 2,
        "dir": "V",
        "color": "#f97316",
        "name": "Xe Con Cam"
      }
    ],
    "title": "Điều Phối Ngã Tư",
    "difficulty": 2,
    "hint": "Lùi xe đỏ để nhường đường cho xe xanh lá vượt lên.",
    "id": "rh-14",
    "minMoves": 11
  },
  {
    "vehicles": [
      {
        "id": "G",
        "row": 3,
        "col": 0,
        "len": 3,
        "dir": "V",
        "color": "#f59e0b",
        "name": "Xe Tải G"
      },
      {
        "id": "B",
        "row": 0,
        "col": 0,
        "len": 2,
        "dir": "H",
        "color": "#10b981",
        "name": "Xe Con B"
      },
      {
        "id": "L",
        "row": 0,
        "col": 4,
        "len": 2,
        "dir": "V",
        "color": "#3b82f6",
        "name": "Xe Con L"
      },
      {
        "id": "H",
        "row": 3,
        "col": 1,
        "len": 2,
        "dir": "V",
        "color": "#8b5cf6",
        "name": "Xe Con H"
      },
      {
        "id": "I",
        "row": 0,
        "col": 2,
        "len": 2,
        "dir": "V",
        "color": "#ec4899",
        "name": "Xe Con I"
      },
      {
        "id": "M",
        "row": 0,
        "col": 5,
        "len": 3,
        "dir": "V",
        "color": "#06b6d4",
        "name": "Xe Tải M"
      },
      {
        "id": "R",
        "row": 2,
        "col": 1,
        "len": 2,
        "dir": "H",
        "color": "#ef4444",
        "name": "Xe Đỏ"
      },
      {
        "id": "C",
        "row": 3,
        "col": 3,
        "len": 3,
        "dir": "H",
        "color": "#f97316",
        "name": "Xe Tải C"
      },
      {
        "id": "K",
        "row": 1,
        "col": 3,
        "len": 2,
        "dir": "V",
        "color": "#64748b",
        "name": "Xe Con K"
      },
      {
        "id": "J",
        "row": 3,
        "col": 2,
        "len": 2,
        "dir": "V",
        "color": "#84cc16",
        "name": "Xe Con J"
      },
      {
        "id": "D",
        "row": 4,
        "col": 3,
        "len": 2,
        "dir": "H",
        "color": "#eab308",
        "name": "Xe Con D"
      },
      {
        "id": "E",
        "row": 5,
        "col": 1,
        "len": 2,
        "dir": "H",
        "color": "#14b8a6",
        "name": "Xe Con E"
      },
      {
        "id": "F",
        "row": 5,
        "col": 4,
        "len": 2,
        "dir": "H",
        "color": "#a855f7",
        "name": "Xe Con F"
      }
    ],
    "title": "Kẹt Xe Trước Cổng Trường",
    "difficulty": 2,
    "hint": "Quan sát xe tải dọc ở bên phải và trượt xe nhỏ bên dưới trước.",
    "id": "rh-15",
    "minMoves": 12
  },
  {
    "vehicles": [
      {
        "id": "I",
        "row": 1,
        "col": 2,
        "len": 2,
        "dir": "V",
        "color": "#f59e0b",
        "name": "Xe Con I"
      },
      {
        "id": "B",
        "row": 0,
        "col": 2,
        "len": 3,
        "dir": "H",
        "color": "#10b981",
        "name": "Xe Tải B"
      },
      {
        "id": "K",
        "row": 3,
        "col": 3,
        "len": 2,
        "dir": "V",
        "color": "#3b82f6",
        "name": "Xe Con K"
      },
      {
        "id": "R",
        "row": 2,
        "col": 0,
        "len": 2,
        "dir": "H",
        "color": "#ef4444",
        "name": "Xe Đỏ"
      },
      {
        "id": "J",
        "row": 3,
        "col": 2,
        "len": 2,
        "dir": "V",
        "color": "#8b5cf6",
        "name": "Xe Con J"
      },
      {
        "id": "L",
        "row": 0,
        "col": 5,
        "len": 3,
        "dir": "V",
        "color": "#ec4899",
        "name": "Xe Tải L"
      },
      {
        "id": "C",
        "row": 3,
        "col": 0,
        "len": 2,
        "dir": "H",
        "color": "#06b6d4",
        "name": "Xe Con C"
      },
      {
        "id": "D",
        "row": 3,
        "col": 4,
        "len": 2,
        "dir": "H",
        "color": "#f97316",
        "name": "Xe Con D"
      },
      {
        "id": "G",
        "row": 0,
        "col": 0,
        "len": 2,
        "dir": "V",
        "color": "#64748b",
        "name": "Xe Con G"
      },
      {
        "id": "H",
        "row": 0,
        "col": 1,
        "len": 2,
        "dir": "V",
        "color": "#84cc16",
        "name": "Xe Con H"
      },
      {
        "id": "E",
        "row": 4,
        "col": 0,
        "len": 2,
        "dir": "H",
        "color": "#eab308",
        "name": "Xe Con E"
      },
      {
        "id": "F",
        "row": 5,
        "col": 2,
        "len": 2,
        "dir": "H",
        "color": "#14b8a6",
        "name": "Xe Con F"
      }
    ],
    "title": "Khúc Cua Nguy Hiểm",
    "difficulty": 2,
    "hint": "Dời hàng xe ngang ở đáy lên hoặc xuống để tạo khoảng trống.",
    "id": "rh-16",
    "minMoves": 12
  },
  {
    "vehicles": [
      {
        "id": "R",
        "row": 2,
        "col": 1,
        "len": 2,
        "dir": "H",
        "color": "#ef4444",
        "name": "Xe Đỏ"
      },
      {
        "id": "A",
        "row": 1,
        "col": 3,
        "len": 3,
        "dir": "V",
        "color": "#10b981",
        "name": "Xe Tải Xanh Lá"
      },
      {
        "id": "B",
        "row": 0,
        "col": 4,
        "len": 3,
        "dir": "V",
        "color": "#f59e0b",
        "name": "Xe Tải Vàng"
      },
      {
        "id": "C",
        "row": 4,
        "col": 2,
        "len": 3,
        "dir": "H",
        "color": "#3b82f6",
        "name": "Xe Tải Lam"
      },
      {
        "id": "D",
        "row": 1,
        "col": 5,
        "len": 3,
        "dir": "V",
        "color": "#8b5cf6",
        "name": "Xe Tải Tím"
      },
      {
        "id": "E",
        "row": 3,
        "col": 0,
        "len": 2,
        "dir": "V",
        "color": "#ec4899",
        "name": "Xe Con Hồng"
      }
    ],
    "title": "Bãi Xe Siêu Thị",
    "difficulty": 2,
    "hint": "Kéo xe tải sang trái 2 nhịp rồi đẩy xe tím lên trên.",
    "id": "rh-17",
    "minMoves": 13
  },
  {
    "vehicles": [
      {
        "id": "G",
        "row": 3,
        "col": 0,
        "len": 3,
        "dir": "V",
        "color": "#f59e0b",
        "name": "Xe Tải G"
      },
      {
        "id": "B",
        "row": 0,
        "col": 0,
        "len": 2,
        "dir": "H",
        "color": "#10b981",
        "name": "Xe Con B"
      },
      {
        "id": "L",
        "row": 0,
        "col": 4,
        "len": 2,
        "dir": "V",
        "color": "#3b82f6",
        "name": "Xe Con L"
      },
      {
        "id": "H",
        "row": 3,
        "col": 1,
        "len": 2,
        "dir": "V",
        "color": "#8b5cf6",
        "name": "Xe Con H"
      },
      {
        "id": "I",
        "row": 0,
        "col": 2,
        "len": 2,
        "dir": "V",
        "color": "#ec4899",
        "name": "Xe Con I"
      },
      {
        "id": "M",
        "row": 0,
        "col": 5,
        "len": 3,
        "dir": "V",
        "color": "#06b6d4",
        "name": "Xe Tải M"
      },
      {
        "id": "R",
        "row": 2,
        "col": 0,
        "len": 2,
        "dir": "H",
        "color": "#ef4444",
        "name": "Xe Đỏ"
      },
      {
        "id": "C",
        "row": 3,
        "col": 3,
        "len": 3,
        "dir": "H",
        "color": "#f97316",
        "name": "Xe Tải C"
      },
      {
        "id": "K",
        "row": 1,
        "col": 3,
        "len": 2,
        "dir": "V",
        "color": "#64748b",
        "name": "Xe Con K"
      },
      {
        "id": "J",
        "row": 3,
        "col": 2,
        "len": 2,
        "dir": "V",
        "color": "#84cc16",
        "name": "Xe Con J"
      },
      {
        "id": "D",
        "row": 4,
        "col": 3,
        "len": 2,
        "dir": "H",
        "color": "#eab308",
        "name": "Xe Con D"
      },
      {
        "id": "E",
        "row": 5,
        "col": 1,
        "len": 2,
        "dir": "H",
        "color": "#14b8a6",
        "name": "Xe Con E"
      },
      {
        "id": "F",
        "row": 5,
        "col": 4,
        "len": 2,
        "dir": "H",
        "color": "#a855f7",
        "name": "Xe Con F"
      }
    ],
    "title": "Mê Cung Bãi Đỗ Phố Cổ",
    "difficulty": 2,
    "hint": "Tìm chiếc xe duy nhất có thể trượt tự do để bắt đầu chuỗi phản ứng dây chuyền.",
    "id": "rh-18",
    "minMoves": 13
  },
  {
    "vehicles": [
      {
        "id": "G",
        "row": 3,
        "col": 0,
        "len": 3,
        "dir": "V",
        "color": "#f59e0b",
        "name": "Xe Tải G"
      },
      {
        "id": "B",
        "row": 0,
        "col": 0,
        "len": 2,
        "dir": "H",
        "color": "#10b981",
        "name": "Xe Con B"
      },
      {
        "id": "L",
        "row": 0,
        "col": 4,
        "len": 2,
        "dir": "V",
        "color": "#3b82f6",
        "name": "Xe Con L"
      },
      {
        "id": "H",
        "row": 3,
        "col": 1,
        "len": 2,
        "dir": "V",
        "color": "#8b5cf6",
        "name": "Xe Con H"
      },
      {
        "id": "I",
        "row": 1,
        "col": 2,
        "len": 2,
        "dir": "V",
        "color": "#ec4899",
        "name": "Xe Con I"
      },
      {
        "id": "M",
        "row": 0,
        "col": 5,
        "len": 3,
        "dir": "V",
        "color": "#06b6d4",
        "name": "Xe Tải M"
      },
      {
        "id": "R",
        "row": 2,
        "col": 0,
        "len": 2,
        "dir": "H",
        "color": "#ef4444",
        "name": "Xe Đỏ"
      },
      {
        "id": "C",
        "row": 3,
        "col": 3,
        "len": 3,
        "dir": "H",
        "color": "#f97316",
        "name": "Xe Tải C"
      },
      {
        "id": "K",
        "row": 1,
        "col": 3,
        "len": 2,
        "dir": "V",
        "color": "#64748b",
        "name": "Xe Con K"
      },
      {
        "id": "J",
        "row": 3,
        "col": 2,
        "len": 2,
        "dir": "V",
        "color": "#84cc16",
        "name": "Xe Con J"
      },
      {
        "id": "D",
        "row": 4,
        "col": 3,
        "len": 2,
        "dir": "H",
        "color": "#eab308",
        "name": "Xe Con D"
      },
      {
        "id": "E",
        "row": 5,
        "col": 1,
        "len": 2,
        "dir": "H",
        "color": "#14b8a6",
        "name": "Xe Con E"
      },
      {
        "id": "F",
        "row": 5,
        "col": 4,
        "len": 2,
        "dir": "H",
        "color": "#a855f7",
        "name": "Xe Con F"
      }
    ],
    "title": "Hỗn Loạn Cầu Vượt (14 bước)",
    "difficulty": 3,
    "hint": "Lập kế hoạch di chuyển ít nhất 3 bước trước. Đừng vội đẩy Xe Đỏ khi chưa dọn sạch cột thoát.",
    "id": "rh-19",
    "minMoves": 14
  },
  {
    "vehicles": [
      {
        "id": "I",
        "row": 1,
        "col": 2,
        "len": 2,
        "dir": "V",
        "color": "#f59e0b",
        "name": "Xe Con I"
      },
      {
        "id": "B",
        "row": 0,
        "col": 2,
        "len": 3,
        "dir": "H",
        "color": "#10b981",
        "name": "Xe Tải B"
      },
      {
        "id": "K",
        "row": 3,
        "col": 3,
        "len": 2,
        "dir": "V",
        "color": "#3b82f6",
        "name": "Xe Con K"
      },
      {
        "id": "R",
        "row": 2,
        "col": 0,
        "len": 2,
        "dir": "H",
        "color": "#ef4444",
        "name": "Xe Đỏ"
      },
      {
        "id": "J",
        "row": 3,
        "col": 2,
        "len": 2,
        "dir": "V",
        "color": "#8b5cf6",
        "name": "Xe Con J"
      },
      {
        "id": "L",
        "row": 0,
        "col": 5,
        "len": 3,
        "dir": "V",
        "color": "#ec4899",
        "name": "Xe Tải L"
      },
      {
        "id": "C",
        "row": 3,
        "col": 0,
        "len": 2,
        "dir": "H",
        "color": "#06b6d4",
        "name": "Xe Con C"
      },
      {
        "id": "D",
        "row": 3,
        "col": 4,
        "len": 2,
        "dir": "H",
        "color": "#f97316",
        "name": "Xe Con D"
      },
      {
        "id": "G",
        "row": 0,
        "col": 0,
        "len": 2,
        "dir": "V",
        "color": "#64748b",
        "name": "Xe Con G"
      },
      {
        "id": "H",
        "row": 0,
        "col": 1,
        "len": 2,
        "dir": "V",
        "color": "#84cc16",
        "name": "Xe Con H"
      },
      {
        "id": "E",
        "row": 4,
        "col": 0,
        "len": 2,
        "dir": "H",
        "color": "#eab308",
        "name": "Xe Con E"
      },
      {
        "id": "F",
        "row": 5,
        "col": 4,
        "len": 2,
        "dir": "H",
        "color": "#14b8a6",
        "name": "Xe Con F"
      }
    ],
    "title": "Gỡ Nút Thắt Ngã Tư (14 bước)",
    "difficulty": 3,
    "hint": "Lập kế hoạch di chuyển ít nhất 3 bước trước. Đừng vội đẩy Xe Đỏ khi chưa dọn sạch cột thoát.",
    "id": "rh-20",
    "minMoves": 14
  },
  {
    "vehicles": [
      {
        "id": "B",
        "row": 0,
        "col": 2,
        "len": 3,
        "dir": "H",
        "color": "#f59e0b",
        "name": "Xe Tải B"
      },
      {
        "id": "K",
        "row": 2,
        "col": 3,
        "len": 2,
        "dir": "V",
        "color": "#10b981",
        "name": "Xe Con K"
      },
      {
        "id": "L",
        "row": 1,
        "col": 4,
        "len": 3,
        "dir": "V",
        "color": "#3b82f6",
        "name": "Xe Tải L"
      },
      {
        "id": "M",
        "row": 1,
        "col": 5,
        "len": 3,
        "dir": "V",
        "color": "#8b5cf6",
        "name": "Xe Tải M"
      },
      {
        "id": "H",
        "row": 0,
        "col": 0,
        "len": 2,
        "dir": "V",
        "color": "#ec4899",
        "name": "Xe Con H"
      },
      {
        "id": "C",
        "row": 1,
        "col": 2,
        "len": 2,
        "dir": "H",
        "color": "#06b6d4",
        "name": "Xe Con C"
      },
      {
        "id": "R",
        "row": 2,
        "col": 0,
        "len": 2,
        "dir": "H",
        "color": "#ef4444",
        "name": "Xe Đỏ"
      },
      {
        "id": "D",
        "row": 3,
        "col": 0,
        "len": 2,
        "dir": "H",
        "color": "#f97316",
        "name": "Xe Con D"
      },
      {
        "id": "J",
        "row": 2,
        "col": 2,
        "len": 2,
        "dir": "V",
        "color": "#64748b",
        "name": "Xe Con J"
      },
      {
        "id": "I",
        "row": 0,
        "col": 1,
        "len": 2,
        "dir": "V",
        "color": "#84cc16",
        "name": "Xe Con I"
      },
      {
        "id": "E",
        "row": 4,
        "col": 3,
        "len": 2,
        "dir": "H",
        "color": "#eab308",
        "name": "Xe Con E"
      },
      {
        "id": "F",
        "row": 5,
        "col": 0,
        "len": 2,
        "dir": "H",
        "color": "#14b8a6",
        "name": "Xe Con F"
      },
      {
        "id": "G",
        "row": 5,
        "col": 4,
        "len": 2,
        "dir": "H",
        "color": "#a855f7",
        "name": "Xe Con G"
      }
    ],
    "title": "Cơn Ác Mộng Giờ Cao Điểm (15 bước)",
    "difficulty": 3,
    "hint": "Lập kế hoạch di chuyển ít nhất 3 bước trước. Đừng vội đẩy Xe Đỏ khi chưa dọn sạch cột thoát.",
    "id": "rh-21",
    "minMoves": 15
  },
  {
    "vehicles": [
      {
        "id": "J",
        "row": 0,
        "col": 3,
        "len": 2,
        "dir": "V",
        "color": "#f59e0b",
        "name": "Xe Con J"
      },
      {
        "id": "B",
        "row": 0,
        "col": 0,
        "len": 2,
        "dir": "H",
        "color": "#10b981",
        "name": "Xe Con B"
      },
      {
        "id": "C",
        "row": 1,
        "col": 0,
        "len": 2,
        "dir": "H",
        "color": "#3b82f6",
        "name": "Xe Con C"
      },
      {
        "id": "L",
        "row": 0,
        "col": 4,
        "len": 2,
        "dir": "V",
        "color": "#8b5cf6",
        "name": "Xe Con L"
      },
      {
        "id": "R",
        "row": 2,
        "col": 0,
        "len": 2,
        "dir": "H",
        "color": "#ef4444",
        "name": "Xe Đỏ"
      },
      {
        "id": "I",
        "row": 3,
        "col": 2,
        "len": 2,
        "dir": "V",
        "color": "#ec4899",
        "name": "Xe Con I"
      },
      {
        "id": "K",
        "row": 2,
        "col": 3,
        "len": 2,
        "dir": "V",
        "color": "#06b6d4",
        "name": "Xe Con K"
      },
      {
        "id": "D",
        "row": 3,
        "col": 0,
        "len": 2,
        "dir": "H",
        "color": "#f97316",
        "name": "Xe Con D"
      },
      {
        "id": "E",
        "row": 3,
        "col": 4,
        "len": 2,
        "dir": "H",
        "color": "#64748b",
        "name": "Xe Con E"
      },
      {
        "id": "H",
        "row": 4,
        "col": 0,
        "len": 2,
        "dir": "V",
        "color": "#84cc16",
        "name": "Xe Con H"
      },
      {
        "id": "F",
        "row": 4,
        "col": 3,
        "len": 3,
        "dir": "H",
        "color": "#eab308",
        "name": "Xe Tải F"
      },
      {
        "id": "M",
        "row": 1,
        "col": 5,
        "len": 2,
        "dir": "V",
        "color": "#14b8a6",
        "name": "Xe Con M"
      },
      {
        "id": "G",
        "row": 5,
        "col": 3,
        "len": 2,
        "dir": "H",
        "color": "#a855f7",
        "name": "Xe Con G"
      }
    ],
    "title": "Dòng Xe Đan Xen (15 bước)",
    "difficulty": 3,
    "hint": "Lập kế hoạch di chuyển ít nhất 3 bước trước. Đừng vội đẩy Xe Đỏ khi chưa dọn sạch cột thoát.",
    "id": "rh-22",
    "minMoves": 15
  },
  {
    "vehicles": [
      {
        "id": "J",
        "row": 0,
        "col": 3,
        "len": 2,
        "dir": "V",
        "color": "#f59e0b",
        "name": "Xe Con J"
      },
      {
        "id": "B",
        "row": 0,
        "col": 0,
        "len": 2,
        "dir": "H",
        "color": "#10b981",
        "name": "Xe Con B"
      },
      {
        "id": "C",
        "row": 1,
        "col": 0,
        "len": 2,
        "dir": "H",
        "color": "#3b82f6",
        "name": "Xe Con C"
      },
      {
        "id": "L",
        "row": 0,
        "col": 4,
        "len": 2,
        "dir": "V",
        "color": "#8b5cf6",
        "name": "Xe Con L"
      },
      {
        "id": "R",
        "row": 2,
        "col": 0,
        "len": 2,
        "dir": "H",
        "color": "#ef4444",
        "name": "Xe Đỏ"
      },
      {
        "id": "I",
        "row": 4,
        "col": 2,
        "len": 2,
        "dir": "V",
        "color": "#ec4899",
        "name": "Xe Con I"
      },
      {
        "id": "K",
        "row": 2,
        "col": 3,
        "len": 2,
        "dir": "V",
        "color": "#06b6d4",
        "name": "Xe Con K"
      },
      {
        "id": "D",
        "row": 3,
        "col": 0,
        "len": 2,
        "dir": "H",
        "color": "#f97316",
        "name": "Xe Con D"
      },
      {
        "id": "E",
        "row": 3,
        "col": 4,
        "len": 2,
        "dir": "H",
        "color": "#64748b",
        "name": "Xe Con E"
      },
      {
        "id": "H",
        "row": 4,
        "col": 0,
        "len": 2,
        "dir": "V",
        "color": "#84cc16",
        "name": "Xe Con H"
      },
      {
        "id": "F",
        "row": 4,
        "col": 3,
        "len": 3,
        "dir": "H",
        "color": "#eab308",
        "name": "Xe Tải F"
      },
      {
        "id": "M",
        "row": 1,
        "col": 5,
        "len": 2,
        "dir": "V",
        "color": "#14b8a6",
        "name": "Xe Con M"
      },
      {
        "id": "G",
        "row": 5,
        "col": 3,
        "len": 3,
        "dir": "H",
        "color": "#a855f7",
        "name": "Xe Tải G"
      }
    ],
    "title": "Chiến Thuật Lùi Một Tiến Hai (16 bước)",
    "difficulty": 3,
    "hint": "Lập kế hoạch di chuyển ít nhất 3 bước trước. Đừng vội đẩy Xe Đỏ khi chưa dọn sạch cột thoát.",
    "id": "rh-23",
    "minMoves": 16
  },
  {
    "vehicles": [
      {
        "id": "H",
        "row": 1,
        "col": 2,
        "len": 2,
        "dir": "V",
        "color": "#f59e0b",
        "name": "Xe Con H"
      },
      {
        "id": "B",
        "row": 0,
        "col": 2,
        "len": 3,
        "dir": "H",
        "color": "#10b981",
        "name": "Xe Tải B"
      },
      {
        "id": "J",
        "row": 1,
        "col": 3,
        "len": 2,
        "dir": "V",
        "color": "#3b82f6",
        "name": "Xe Con J"
      },
      {
        "id": "R",
        "row": 2,
        "col": 0,
        "len": 2,
        "dir": "H",
        "color": "#ef4444",
        "name": "Xe Đỏ"
      },
      {
        "id": "I",
        "row": 3,
        "col": 2,
        "len": 2,
        "dir": "V",
        "color": "#8b5cf6",
        "name": "Xe Con I"
      },
      {
        "id": "K",
        "row": 0,
        "col": 5,
        "len": 3,
        "dir": "V",
        "color": "#ec4899",
        "name": "Xe Tải K"
      },
      {
        "id": "C",
        "row": 3,
        "col": 0,
        "len": 2,
        "dir": "H",
        "color": "#06b6d4",
        "name": "Xe Con C"
      },
      {
        "id": "D",
        "row": 3,
        "col": 4,
        "len": 2,
        "dir": "H",
        "color": "#f97316",
        "name": "Xe Con D"
      },
      {
        "id": "G",
        "row": 0,
        "col": 1,
        "len": 2,
        "dir": "V",
        "color": "#64748b",
        "name": "Xe Con G"
      },
      {
        "id": "E",
        "row": 4,
        "col": 0,
        "len": 2,
        "dir": "H",
        "color": "#84cc16",
        "name": "Xe Con E"
      },
      {
        "id": "F",
        "row": 5,
        "col": 4,
        "len": 2,
        "dir": "H",
        "color": "#eab308",
        "name": "Xe Con F"
      }
    ],
    "title": "Khóa Đuôi Ba Xe Tải (16 bước)",
    "difficulty": 3,
    "hint": "Lập kế hoạch di chuyển ít nhất 3 bước trước. Đừng vội đẩy Xe Đỏ khi chưa dọn sạch cột thoát.",
    "id": "rh-24",
    "minMoves": 16
  },
  {
    "vehicles": [
      {
        "id": "B",
        "row": 0,
        "col": 2,
        "len": 3,
        "dir": "H",
        "color": "#f59e0b",
        "name": "Xe Tải B"
      },
      {
        "id": "K",
        "row": 3,
        "col": 3,
        "len": 2,
        "dir": "V",
        "color": "#10b981",
        "name": "Xe Con K"
      },
      {
        "id": "L",
        "row": 1,
        "col": 4,
        "len": 3,
        "dir": "V",
        "color": "#3b82f6",
        "name": "Xe Tải L"
      },
      {
        "id": "M",
        "row": 0,
        "col": 5,
        "len": 2,
        "dir": "V",
        "color": "#8b5cf6",
        "name": "Xe Con M"
      },
      {
        "id": "H",
        "row": 0,
        "col": 0,
        "len": 2,
        "dir": "V",
        "color": "#ec4899",
        "name": "Xe Con H"
      },
      {
        "id": "C",
        "row": 1,
        "col": 2,
        "len": 2,
        "dir": "H",
        "color": "#06b6d4",
        "name": "Xe Con C"
      },
      {
        "id": "R",
        "row": 2,
        "col": 1,
        "len": 2,
        "dir": "H",
        "color": "#ef4444",
        "name": "Xe Đỏ"
      },
      {
        "id": "D",
        "row": 3,
        "col": 0,
        "len": 2,
        "dir": "H",
        "color": "#f97316",
        "name": "Xe Con D"
      },
      {
        "id": "J",
        "row": 3,
        "col": 2,
        "len": 2,
        "dir": "V",
        "color": "#64748b",
        "name": "Xe Con J"
      },
      {
        "id": "I",
        "row": 0,
        "col": 1,
        "len": 2,
        "dir": "V",
        "color": "#84cc16",
        "name": "Xe Con I"
      },
      {
        "id": "E",
        "row": 4,
        "col": 4,
        "len": 2,
        "dir": "H",
        "color": "#eab308",
        "name": "Xe Con E"
      },
      {
        "id": "F",
        "row": 5,
        "col": 0,
        "len": 2,
        "dir": "H",
        "color": "#14b8a6",
        "name": "Xe Con F"
      },
      {
        "id": "G",
        "row": 5,
        "col": 4,
        "len": 2,
        "dir": "H",
        "color": "#a855f7",
        "name": "Xe Con G"
      }
    ],
    "title": "Bãi Đỗ Cao Tầng (17 bước)",
    "difficulty": 3,
    "hint": "Lập kế hoạch di chuyển ít nhất 3 bước trước. Đừng vội đẩy Xe Đỏ khi chưa dọn sạch cột thoát.",
    "id": "rh-25",
    "minMoves": 17
  }
];
