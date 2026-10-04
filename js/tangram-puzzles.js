// js/tangram-puzzles.js - Ngân hàng 19 Thử Thách Tangram Trí Uẩn Chuẩn Singapore GEP
// Mỗi bài gồm: ID, tên, độ khó (★1-★5), chủ đề, hình bóng Silhouette SVG, và vị trí mục tiêu 7 mảnh ghép

export const TANGRAM_PIECES_CONFIG = {
  "t1": {
    "id": "t1",
    "name": "Tam giác lớn 1",
    "type": "large-triangle",
    "color": "#3b82f6",
    "stroke": "#1d4ed8"
  },
  "t2": {
    "id": "t2",
    "name": "Tam giác lớn 2",
    "type": "large-triangle",
    "color": "#60a5fa",
    "stroke": "#2563eb"
  },
  "tm": {
    "id": "tm",
    "name": "Tam giác vừa",
    "type": "med-triangle",
    "color": "#10b981",
    "stroke": "#059669"
  },
  "ts1": {
    "id": "ts1",
    "name": "Tam giác nhỏ 1",
    "type": "small-triangle",
    "color": "#f59e0b",
    "stroke": "#d97706"
  },
  "ts2": {
    "id": "ts2",
    "name": "Tam giác nhỏ 2",
    "type": "small-triangle",
    "color": "#fbbf24",
    "stroke": "#b45309"
  },
  "sq": {
    "id": "sq",
    "name": "Hình vuông",
    "type": "square",
    "color": "#ef4444",
    "stroke": "#dc2626"
  },
  "para": {
    "id": "para",
    "name": "Hình bình hành",
    "type": "parallelogram",
    "color": "#8b5cf6",
    "stroke": "#7c3aed"
  }
};

export const TANGRAM_PUZZLES = [
  {
    "id": "tangram-01",
    "name": "Thiên Nga Soi Bóng",
    "difficulty": 1,
    "topic": "Động vật",
    "description": "Xếp 7 mảnh ghép để tạo thành hình chú thiên nga đang kiêu hãnh bơi trên mặt hồ.",
    "silhouettePath": "M 320 185 L 160 185 L 240 265 Z M 60 245 L 140 245 L 180 205 L 100 205 Z M 80 185 L 160 185 L 120 145 Z M 40 325 L 200 325 L 120 245 Z M 120 145 L 200 145 L 120 65 Z M 160 25 L 200 65 L 160 105 L 120 65 Z M 140 245 L 220 245 L 180 205 Z",
    "targetLayout": {
      "t1": {
        "x": 240,
        "y": 225,
        "rot": 180,
        "flipped": false
      },
      "para": {
        "x": 120,
        "y": 225,
        "rot": 0,
        "flipped": false
      },
      "ts1": {
        "x": 120,
        "y": 165,
        "rot": 0,
        "flipped": false
      },
      "t2": {
        "x": 120,
        "y": 285,
        "rot": 0,
        "flipped": false
      },
      "tm": {
        "x": 160,
        "y": 105,
        "rot": 0,
        "flipped": false
      },
      "sq": {
        "x": 160,
        "y": 65,
        "rot": 0,
        "flipped": false
      },
      "ts2": {
        "x": 180,
        "y": 225,
        "rot": 0,
        "flipped": false
      }
    },
    "hint": "Hình vuông tạo thành đầu thiên nga, tam giác nhỏ tạo mỏ, các tam giác lớn tạo thân và đuôi."
  },
  {
    "id": "tangram-02",
    "name": "Ngôi Nhà Cổ Tích",
    "difficulty": 1,
    "topic": "Kiến trúc",
    "description": "Một mái ấm xinh xắn với mái ngói tam giác và ống khói ấm áp đón mùa đông.",
    "silhouettePath": "M 170 115 L 330 115 L 250 35 Z M 130 75 L 170 115 L 130 155 L 90 115 Z M 30 215 L 190 215 L 110 135 Z M 70 295 L 150 295 L 70 215 Z M 110 255 L 190 255 L 150 215 Z M 130 75 L 210 75 L 170 35 Z M 50 75 L 130 75 L 170 35 L 90 35 Z",
    "targetLayout": {
      "t1": {
        "x": 250,
        "y": 75,
        "rot": 0,
        "flipped": false
      },
      "sq": {
        "x": 130,
        "y": 115,
        "rot": 0,
        "flipped": false
      },
      "t2": {
        "x": 110,
        "y": 175,
        "rot": 0,
        "flipped": false
      },
      "tm": {
        "x": 110,
        "y": 255,
        "rot": 0,
        "flipped": false
      },
      "ts1": {
        "x": 150,
        "y": 235,
        "rot": 0,
        "flipped": false
      },
      "ts2": {
        "x": 170,
        "y": 55,
        "rot": 0,
        "flipped": false
      },
      "para": {
        "x": 110,
        "y": 55,
        "rot": 0,
        "flipped": false
      }
    },
    "hint": "Hai tam giác lớn ghép lại có thể tạo thành một hình vuông lớn cho tường nhà hoặc mái nhà."
  },
  {
    "id": "tangram-03",
    "name": "Cây Thông Noel",
    "difficulty": 1,
    "topic": "Thiên nhiên",
    "description": "Cây thông Noel 3 tầng xanh mướt với thân gỗ vững chãi.",
    "silhouettePath": "M 170 225 L 330 225 L 250 145 Z M 90 225 L 170 225 L 130 185 Z M 30 305 L 190 305 L 110 225 Z M 130 185 L 210 185 L 130 105 Z M 130 105 L 210 105 L 170 65 Z M 110 45 L 150 85 L 110 125 L 70 85 Z M 130 65 L 210 65 L 250 25 L 170 25 Z",
    "targetLayout": {
      "t1": {
        "x": 250,
        "y": 185,
        "rot": 0,
        "flipped": false
      },
      "ts1": {
        "x": 130,
        "y": 205,
        "rot": 0,
        "flipped": false
      },
      "t2": {
        "x": 110,
        "y": 265,
        "rot": 0,
        "flipped": false
      },
      "tm": {
        "x": 170,
        "y": 145,
        "rot": 0,
        "flipped": false
      },
      "ts2": {
        "x": 170,
        "y": 85,
        "rot": 0,
        "flipped": false
      },
      "sq": {
        "x": 110,
        "y": 85,
        "rot": 0,
        "flipped": false
      },
      "para": {
        "x": 190,
        "y": 45,
        "rot": 0,
        "flipped": false
      }
    },
    "hint": "Các tam giác xếp tầng từ nhỏ đến lớn hướng lên trên, hình vuông làm gốc cây."
  },
  {
    "id": "tangram-04",
    "name": "Thuyền Buồm Vượt Sóng",
    "difficulty": 2,
    "topic": "Phương tiện",
    "description": "Cánh buồm no gió đưa con thuyền lướt sóng ra khơi xa.",
    "silhouettePath": "M 180 25 L 180 185 L 260 105 Z M 100 265 L 260 265 L 180 185 Z M 80 205 L 160 205 L 80 125 Z M 120 85 L 160 125 L 120 165 L 80 125 Z M 80 305 L 160 305 L 120 265 Z M 100 65 L 180 65 L 140 25 Z M 160 305 L 240 305 L 280 265 L 200 265 Z",
    "targetLayout": {
      "t1": {
        "x": 220,
        "y": 105,
        "rot": 90,
        "flipped": false
      },
      "t2": {
        "x": 180,
        "y": 225,
        "rot": 0,
        "flipped": false
      },
      "tm": {
        "x": 120,
        "y": 165,
        "rot": 0,
        "flipped": false
      },
      "sq": {
        "x": 120,
        "y": 125,
        "rot": 0,
        "flipped": false
      },
      "ts1": {
        "x": 120,
        "y": 285,
        "rot": 0,
        "flipped": false
      },
      "ts2": {
        "x": 140,
        "y": 45,
        "rot": 0,
        "flipped": false
      },
      "para": {
        "x": 220,
        "y": 285,
        "rot": 0,
        "flipped": false
      }
    },
    "hint": "Thân thuyền ở dưới dạng hình thang, cánh buồm đứng thẳng vuông góc."
  },
  {
    "id": "tangram-05",
    "name": "Chú Mèo Tinh Nghịch",
    "difficulty": 2,
    "topic": "Động vật",
    "description": "Chú mèo đang ngồi chăm chú nhìn ngó với đôi tai vểnh cao.",
    "silhouettePath": "M 220 65 L 260 105 L 220 145 L 180 105 Z M 180 25 L 180 105 L 220 65 Z M 260 105 L 260 25 L 220 65 Z M 300 145 L 140 145 L 220 225 Z M 60 225 L 220 225 L 140 145 Z M 80 315 L 160 315 L 80 235 Z M 180 275 L 260 275 L 300 235 L 220 235 Z",
    "targetLayout": {
      "sq": {
        "x": 220,
        "y": 105,
        "rot": 0,
        "flipped": false
      },
      "ts1": {
        "x": 200,
        "y": 65,
        "rot": 90,
        "flipped": false
      },
      "ts2": {
        "x": 240,
        "y": 65,
        "rot": 270,
        "flipped": false
      },
      "t1": {
        "x": 220,
        "y": 185,
        "rot": 180,
        "flipped": false
      },
      "t2": {
        "x": 140,
        "y": 185,
        "rot": 0,
        "flipped": false
      },
      "tm": {
        "x": 120,
        "y": 275,
        "rot": 0,
        "flipped": false
      },
      "para": {
        "x": 240,
        "y": 255,
        "rot": 0,
        "flipped": false
      }
    },
    "hint": "Hai tam giác nhỏ đóng vai đôi tai xinh xắn, hình bình hành uốn lượn thành chiếc đuôi dài."
  },
  {
    "id": "tangram-06",
    "name": "Tên Lửa Khám Phá Vũ Trụ",
    "difficulty": 2,
    "topic": "Khoa học",
    "description": "Con tàu vũ trụ phóng vút lên không gian đưa ước mơ khám phá các vì sao.",
    "silhouettePath": "M 170 125 L 330 125 L 250 45 Z M 30 105 L 190 105 L 110 25 Z M 110 105 L 150 145 L 110 185 L 70 145 Z M 70 225 L 150 225 L 70 145 Z M 70 265 L 150 265 L 110 225 Z M 70 305 L 150 305 L 110 265 Z M 110 185 L 190 185 L 230 145 L 150 145 Z",
    "targetLayout": {
      "t1": {
        "x": 250,
        "y": 85,
        "rot": 0,
        "flipped": false
      },
      "t2": {
        "x": 110,
        "y": 65,
        "rot": 0,
        "flipped": false
      },
      "sq": {
        "x": 110,
        "y": 145,
        "rot": 0,
        "flipped": false
      },
      "tm": {
        "x": 110,
        "y": 185,
        "rot": 0,
        "flipped": false
      },
      "ts1": {
        "x": 110,
        "y": 245,
        "rot": 0,
        "flipped": false
      },
      "ts2": {
        "x": 110,
        "y": 285,
        "rot": 0,
        "flipped": false
      },
      "para": {
        "x": 170,
        "y": 165,
        "rot": 0,
        "flipped": false
      }
    },
    "hint": "Mũi tên lửa nhọn hướng lên trên, 2 cánh đuôi xòe ra cân đối 2 bên."
  },
  {
    "id": "tangram-07",
    "name": "Chú Thỏ Trắng Vui Vẻ",
    "difficulty": 3,
    "topic": "Động vật",
    "description": "Chú thỏ với đôi tai dài đang ngẩng cao đầu chuẩn bị nhảy tung tăng.",
    "silhouettePath": "M 250 85 L 290 125 L 250 165 L 210 125 Z M 90 165 L 170 165 L 210 125 L 130 125 Z M 70 105 L 230 105 L 150 25 Z M 70 245 L 230 245 L 150 165 Z M 110 325 L 190 325 L 110 245 Z M 150 285 L 230 285 L 190 245 Z M 170 165 L 250 165 L 210 125 Z",
    "targetLayout": {
      "sq": {
        "x": 250,
        "y": 125,
        "rot": 0,
        "flipped": false
      },
      "para": {
        "x": 150,
        "y": 145,
        "rot": 0,
        "flipped": false
      },
      "t1": {
        "x": 150,
        "y": 65,
        "rot": 0,
        "flipped": false
      },
      "t2": {
        "x": 150,
        "y": 205,
        "rot": 0,
        "flipped": false
      },
      "tm": {
        "x": 150,
        "y": 285,
        "rot": 0,
        "flipped": false
      },
      "ts1": {
        "x": 190,
        "y": 265,
        "rot": 0,
        "flipped": false
      },
      "ts2": {
        "x": 210,
        "y": 145,
        "rot": 0,
        "flipped": false
      }
    },
    "hint": "Hai tam giác nhỏ tạo thành đôi tai thỏ dài hướng về bên trái."
  },
  {
    "id": "tangram-08",
    "name": "Chiến Mã Dũng Mãnh",
    "difficulty": 3,
    "topic": "Động vật",
    "description": "Chú ngựa phi nước đại trên thảo nguyên rộng lớn.",
    "silhouettePath": "M 160 205 L 320 205 L 240 125 Z M 60 225 L 140 225 L 180 185 L 100 185 Z M 80 185 L 160 185 L 120 145 Z M 40 305 L 200 305 L 120 225 Z M 120 145 L 200 145 L 120 65 Z M 160 25 L 200 65 L 160 105 L 120 65 Z M 140 245 L 220 245 L 180 205 Z",
    "targetLayout": {
      "t1": {
        "x": 240,
        "y": 165,
        "rot": 0,
        "flipped": false
      },
      "para": {
        "x": 120,
        "y": 205,
        "rot": 0,
        "flipped": false
      },
      "ts1": {
        "x": 120,
        "y": 165,
        "rot": 0,
        "flipped": false
      },
      "t2": {
        "x": 120,
        "y": 265,
        "rot": 0,
        "flipped": false
      },
      "tm": {
        "x": 160,
        "y": 105,
        "rot": 0,
        "flipped": false
      },
      "sq": {
        "x": 160,
        "y": 65,
        "rot": 0,
        "flipped": false
      },
      "ts2": {
        "x": 180,
        "y": 225,
        "rot": 0,
        "flipped": false
      }
    },
    "hint": "Bốn chân ngựa được chống đỡ bởi các tam giác nhỏ và hình bình hành."
  },
  {
    "id": "tangram-09",
    "name": "Ngọn Hải Đăng Dẫn Lối",
    "difficulty": 3,
    "topic": "Kiến trúc",
    "description": "Tháp hải đăng cao vút chiếu rọi ánh sáng dẫn đường cho tàu bè cập bến an toàn.",
    "silhouettePath": "M 330 105 L 170 105 L 250 185 Z M 30 105 L 190 105 L 110 25 Z M 70 185 L 150 185 L 70 105 Z M 110 185 L 150 225 L 110 265 L 70 225 Z M 70 305 L 150 305 L 110 265 Z M 110 145 L 190 145 L 150 105 Z M 110 265 L 190 265 L 230 225 L 150 225 Z",
    "targetLayout": {
      "t1": {
        "x": 250,
        "y": 145,
        "rot": 180,
        "flipped": false
      },
      "t2": {
        "x": 110,
        "y": 65,
        "rot": 0,
        "flipped": false
      },
      "tm": {
        "x": 110,
        "y": 145,
        "rot": 0,
        "flipped": false
      },
      "sq": {
        "x": 110,
        "y": 225,
        "rot": 0,
        "flipped": false
      },
      "ts1": {
        "x": 110,
        "y": 285,
        "rot": 0,
        "flipped": false
      },
      "ts2": {
        "x": 150,
        "y": 125,
        "rot": 0,
        "flipped": false
      },
      "para": {
        "x": 170,
        "y": 245,
        "rot": 0,
        "flipped": false
      }
    },
    "hint": "Hình vuông làm đài hải đăng phía trên cùng, thân tháp phình nhẹ ở chân đế."
  },
  {
    "id": "tangram-10",
    "name": "Người Trượt Tuyết Tốc Độ",
    "difficulty": 3,
    "topic": "Thể thao",
    "description": "Vận động viên đang nghiêng người lướt trên sườn dốc băng tuyết trắng xóa.",
    "silhouettePath": "M 160 185 L 320 185 L 240 105 Z M 40 145 L 200 145 L 120 65 Z M 120 145 L 160 185 L 120 225 L 80 185 Z M 80 265 L 160 265 L 80 185 Z M 80 305 L 160 305 L 120 265 Z M 120 65 L 200 65 L 160 25 Z M 120 225 L 200 225 L 240 185 L 160 185 Z",
    "targetLayout": {
      "t1": {
        "x": 240,
        "y": 145,
        "rot": 0,
        "flipped": false
      },
      "t2": {
        "x": 120,
        "y": 105,
        "rot": 0,
        "flipped": false
      },
      "sq": {
        "x": 120,
        "y": 185,
        "rot": 0,
        "flipped": false
      },
      "tm": {
        "x": 120,
        "y": 225,
        "rot": 0,
        "flipped": false
      },
      "ts1": {
        "x": 120,
        "y": 285,
        "rot": 0,
        "flipped": false
      },
      "ts2": {
        "x": 160,
        "y": 45,
        "rot": 0,
        "flipped": false
      },
      "para": {
        "x": 180,
        "y": 205,
        "rot": 0,
        "flipped": false
      }
    },
    "hint": "Thanh trượt ván tuyết dài nghiêng 15 độ nâng đỡ cả tư thế cơ thể."
  },
  {
    "id": "tangram-11",
    "name": "Cối Xay Gió Hà Lan",
    "difficulty": 4,
    "topic": "Kiến trúc",
    "description": "Bốn cánh cối xay gió khổng lồ quay đều trong làn gió mát của xứ sở hoa tulip.",
    "silhouettePath": "M 170 205 L 330 205 L 250 125 Z M 30 185 L 190 185 L 110 105 Z M 110 25 L 150 65 L 110 105 L 70 65 Z M 70 265 L 150 265 L 70 185 Z M 50 305 L 130 305 L 170 265 L 90 265 Z M 110 105 L 190 105 L 150 65 Z M 110 225 L 190 225 L 150 185 Z",
    "targetLayout": {
      "t1": {
        "x": 250,
        "y": 165,
        "rot": 0,
        "flipped": false
      },
      "t2": {
        "x": 110,
        "y": 145,
        "rot": 0,
        "flipped": false
      },
      "sq": {
        "x": 110,
        "y": 65,
        "rot": 0,
        "flipped": false
      },
      "tm": {
        "x": 110,
        "y": 225,
        "rot": 0,
        "flipped": false
      },
      "para": {
        "x": 110,
        "y": 285,
        "rot": 0,
        "flipped": false
      },
      "ts1": {
        "x": 150,
        "y": 85,
        "rot": 0,
        "flipped": false
      },
      "ts2": {
        "x": 150,
        "y": 205,
        "rot": 0,
        "flipped": false
      }
    },
    "hint": "Các mảnh ghép tỏa đều quanh tâm trục quay của cối xay gió."
  },
  {
    "id": "tangram-12",
    "name": "Vũ Công Ba Lê Uyển Chuyển",
    "difficulty": 4,
    "topic": "Nghệ thuật",
    "description": "Tư thế xoay kiễng chân arabesque tuyệt đẹp trên sân khấu kịch nghệ hoàng gia.",
    "silhouettePath": "M 160 225 L 320 225 L 240 145 Z M 40 185 L 200 185 L 120 105 Z M 80 265 L 160 265 L 80 185 Z M 120 25 L 160 65 L 120 105 L 80 65 Z M 80 305 L 160 305 L 120 265 Z M 120 105 L 200 105 L 160 65 Z M 140 285 L 220 285 L 260 245 L 180 245 Z",
    "targetLayout": {
      "t1": {
        "x": 240,
        "y": 185,
        "rot": 0,
        "flipped": false
      },
      "t2": {
        "x": 120,
        "y": 145,
        "rot": 0,
        "flipped": false
      },
      "tm": {
        "x": 120,
        "y": 225,
        "rot": 0,
        "flipped": false
      },
      "sq": {
        "x": 120,
        "y": 65,
        "rot": 0,
        "flipped": false
      },
      "ts1": {
        "x": 120,
        "y": 285,
        "rot": 0,
        "flipped": false
      },
      "ts2": {
        "x": 160,
        "y": 85,
        "rot": 0,
        "flipped": false
      },
      "para": {
        "x": 200,
        "y": 265,
        "rot": 0,
        "flipped": false
      }
    },
    "hint": "Đầu vũ công là hình vuông, váy xòe ballet tạo bởi 2 tam giác lớn."
  },
  {
    "id": "tangram-13",
    "name": "Cầu Thủ Sút Bóng Vô Lê",
    "difficulty": 4,
    "topic": "Thể thao",
    "description": "Pha bay người bắt vô-lê móc bóng trên không trung điệu nghệ như danh thủ thế giới.",
    "silhouettePath": "M 220 25 L 260 65 L 220 105 L 180 65 Z M 100 65 L 180 65 L 140 25 Z M 60 145 L 220 145 L 140 65 Z M 60 225 L 220 225 L 140 145 Z M 100 305 L 180 305 L 100 225 Z M 140 265 L 220 265 L 180 225 Z M 180 185 L 260 185 L 300 145 L 220 145 Z",
    "targetLayout": {
      "sq": {
        "x": 220,
        "y": 65,
        "rot": 0,
        "flipped": false
      },
      "ts1": {
        "x": 140,
        "y": 45,
        "rot": 0,
        "flipped": false
      },
      "t1": {
        "x": 140,
        "y": 105,
        "rot": 0,
        "flipped": false
      },
      "t2": {
        "x": 140,
        "y": 185,
        "rot": 0,
        "flipped": false
      },
      "tm": {
        "x": 140,
        "y": 265,
        "rot": 0,
        "flipped": false
      },
      "ts2": {
        "x": 180,
        "y": 245,
        "rot": 0,
        "flipped": false
      },
      "para": {
        "x": 240,
        "y": 165,
        "rot": 0,
        "flipped": false
      }
    },
    "hint": "Toàn bộ cơ thể cầu thủ nghiêng chéo để mô phỏng cú bay người trên không."
  },
  {
    "id": "tangram-14",
    "name": "Lâu Đài Cổ Kính",
    "difficulty": 4,
    "topic": "Kiến trúc",
    "description": "Tòa lâu đài nguy nga với các ngọn tháp canh kiên cố bảo vệ vương quốc.",
    "silhouettePath": "M 160 65 L 160 225 L 240 145 Z M 120 25 L 160 65 L 120 105 L 80 65 Z M 80 305 L 240 305 L 160 225 Z M 80 145 L 160 145 L 80 65 Z M 80 185 L 160 185 L 120 145 Z M 80 225 L 160 225 L 120 185 Z M 160 65 L 240 65 L 280 25 L 200 25 Z",
    "targetLayout": {
      "t1": {
        "x": 200,
        "y": 145,
        "rot": 90,
        "flipped": false
      },
      "sq": {
        "x": 120,
        "y": 65,
        "rot": 0,
        "flipped": false
      },
      "t2": {
        "x": 160,
        "y": 265,
        "rot": 0,
        "flipped": false
      },
      "tm": {
        "x": 120,
        "y": 105,
        "rot": 0,
        "flipped": false
      },
      "ts1": {
        "x": 120,
        "y": 165,
        "rot": 0,
        "flipped": false
      },
      "ts2": {
        "x": 120,
        "y": 205,
        "rot": 0,
        "flipped": false
      },
      "para": {
        "x": 220,
        "y": 45,
        "rot": 0,
        "flipped": false
      }
    },
    "hint": "Hai ngọn tháp đối xứng ở 2 bên với chóp nhọn là tam giác nhỏ."
  },
  {
    "id": "tangram-15",
    "name": "Phượng Hoàng Lửa Tái Sinh",
    "difficulty": 5,
    "topic": "Huyền thoại",
    "description": "Thần điểu Phượng Hoàng rực rỡ dang đôi cánh lửa bay vút lên từ tro tàn huyền thoại.",
    "silhouettePath": "M 200 85 L 200 245 L 280 165 Z M 120 325 L 280 325 L 200 245 Z M 140 225 L 180 265 L 140 305 L 100 265 Z M 120 105 L 200 105 L 120 25 Z M 100 145 L 180 145 L 140 105 Z M 100 185 L 180 185 L 140 145 Z M 80 225 L 160 225 L 200 185 L 120 185 Z",
    "targetLayout": {
      "t1": {
        "x": 240,
        "y": 165,
        "rot": 90,
        "flipped": false
      },
      "t2": {
        "x": 200,
        "y": 285,
        "rot": 0,
        "flipped": false
      },
      "sq": {
        "x": 140,
        "y": 265,
        "rot": 0,
        "flipped": false
      },
      "tm": {
        "x": 160,
        "y": 65,
        "rot": 0,
        "flipped": false
      },
      "ts1": {
        "x": 140,
        "y": 125,
        "rot": 0,
        "flipped": false
      },
      "ts2": {
        "x": 140,
        "y": 165,
        "rot": 0,
        "flipped": false
      },
      "para": {
        "x": 140,
        "y": 205,
        "rot": 0,
        "flipped": false
      }
    },
    "hint": "Đôi cánh dang rộng cân xứng, đuôi phượng hoàng chia làm 2 dải lông dài kiêu hãnh."
  },
  {
    "id": "tangram-16",
    "name": "Đại Bàng Tung Cánh",
    "difficulty": 5,
    "topic": "Động vật",
    "description": "Chúa tể bầu trời lao vút xuống như mũi tên với cặp móng vuốt thép săn mồi.",
    "silhouettePath": "M 310 105 L 150 105 L 230 185 Z M 50 105 L 210 105 L 130 25 Z M 130 105 L 170 145 L 130 185 L 90 145 Z M 90 225 L 170 225 L 90 145 Z M 90 265 L 170 265 L 130 225 Z M 90 305 L 170 305 L 130 265 Z M 150 245 L 230 245 L 270 205 L 190 205 Z",
    "targetLayout": {
      "t1": {
        "x": 230,
        "y": 145,
        "rot": 180,
        "flipped": false
      },
      "t2": {
        "x": 130,
        "y": 65,
        "rot": 0,
        "flipped": false
      },
      "sq": {
        "x": 130,
        "y": 145,
        "rot": 0,
        "flipped": false
      },
      "tm": {
        "x": 130,
        "y": 185,
        "rot": 0,
        "flipped": false
      },
      "ts1": {
        "x": 130,
        "y": 245,
        "rot": 0,
        "flipped": false
      },
      "ts2": {
        "x": 130,
        "y": 285,
        "rot": 0,
        "flipped": false
      },
      "para": {
        "x": 210,
        "y": 225,
        "rot": 0,
        "flipped": false
      }
    },
    "hint": "Mỏ đại bàng tạo từ tam giác nhỏ hướng góc nhọn xuống."
  },
  {
    "id": "tangram-17",
    "name": "Thần Kim Quy (Rùa Vàng)",
    "difficulty": 5,
    "topic": "Dân gian",
    "description": "Thần Kim Quy bơi trên sóng nước Hồ Gươm mang gươm báu bảo vệ non sông.",
    "silhouettePath": "M 170 75 L 170 235 L 250 155 Z M 130 45 L 170 85 L 130 125 L 90 85 Z M 90 85 L 90 245 L 170 165 Z M 90 325 L 170 325 L 90 245 Z M 90 245 L 170 245 L 130 205 Z M 130 285 L 210 285 L 170 245 Z M 150 65 L 230 65 L 270 25 L 190 25 Z",
    "targetLayout": {
      "t1": {
        "x": 210,
        "y": 155,
        "rot": 90,
        "flipped": false
      },
      "sq": {
        "x": 130,
        "y": 85,
        "rot": 0,
        "flipped": false
      },
      "t2": {
        "x": 130,
        "y": 165,
        "rot": 90,
        "flipped": false
      },
      "tm": {
        "x": 130,
        "y": 285,
        "rot": 0,
        "flipped": false
      },
      "ts1": {
        "x": 130,
        "y": 225,
        "rot": 0,
        "flipped": false
      },
      "ts2": {
        "x": 170,
        "y": 265,
        "rot": 0,
        "flipped": false
      },
      "para": {
        "x": 210,
        "y": 45,
        "rot": 0,
        "flipped": false
      }
    },
    "hint": "Mai rùa khum tròn vững chắc cấu thành từ 2 tam giác lớn và hình vuông."
  },
  {
    "id": "tangram-18",
    "name": "Nhà Du Hành Không Gian",
    "difficulty": 5,
    "topic": "Khoa học",
    "description": "Phi hành gia lơ lửng ngoài vũ trụ bao la với bộ đồ bảo hộ công nghệ cao.",
    "silhouettePath": "M 330 115 L 170 115 L 250 195 Z M 130 75 L 170 115 L 130 155 L 90 115 Z M 30 215 L 190 215 L 110 135 Z M 70 295 L 150 295 L 70 215 Z M 110 255 L 190 255 L 150 215 Z M 130 75 L 210 75 L 170 35 Z M 50 75 L 130 75 L 170 35 L 90 35 Z",
    "targetLayout": {
      "t1": {
        "x": 250,
        "y": 155,
        "rot": 180,
        "flipped": false
      },
      "sq": {
        "x": 130,
        "y": 115,
        "rot": 0,
        "flipped": false
      },
      "t2": {
        "x": 110,
        "y": 175,
        "rot": 0,
        "flipped": false
      },
      "tm": {
        "x": 110,
        "y": 255,
        "rot": 0,
        "flipped": false
      },
      "ts1": {
        "x": 150,
        "y": 235,
        "rot": 0,
        "flipped": false
      },
      "ts2": {
        "x": 170,
        "y": 55,
        "rot": 0,
        "flipped": false
      },
      "para": {
        "x": 110,
        "y": 55,
        "rot": 0,
        "flipped": false
      }
    },
    "hint": "Chiếc mũ bảo hộ tròn là hình vuông, 2 cánh tay vươn ra trong không gian không trọng lực."
  },
  {
    "id": "tangram-19",
    "name": "Ngọn Đuốc Olympic Rực Sáng",
    "difficulty": 5,
    "topic": "Thể thao",
    "description": "Biểu tượng của tinh thần thể thao cao thượng, ý chí vươn lên đỉnh cao trí tuệ và nghị lực.",
    "silhouettePath": "M 230 175 L 310 175 L 230 95 Z M 150 95 L 230 95 L 190 55 Z M 70 175 L 230 175 L 150 95 Z M 50 255 L 210 255 L 130 175 Z M 130 35 L 170 75 L 130 115 L 90 75 Z M 90 295 L 170 295 L 130 255 Z M 170 215 L 250 215 L 290 175 L 210 175 Z",
    "targetLayout": {
      "tm": {
        "x": 270,
        "y": 135,
        "rot": 0,
        "flipped": false
      },
      "ts1": {
        "x": 190,
        "y": 75,
        "rot": 0,
        "flipped": false
      },
      "t1": {
        "x": 150,
        "y": 135,
        "rot": 0,
        "flipped": false
      },
      "t2": {
        "x": 130,
        "y": 215,
        "rot": 0,
        "flipped": false
      },
      "sq": {
        "x": 130,
        "y": 75,
        "rot": 0,
        "flipped": false
      },
      "ts2": {
        "x": 130,
        "y": 275,
        "rot": 0,
        "flipped": false
      },
      "para": {
        "x": 230,
        "y": 195,
        "rot": 0,
        "flipped": false
      }
    },
    "hint": "Ngọn lửa bốc cháy hướng lên với các tam giác nhọn, tay cầm đuốc thon dài ở phía dưới."
  }
];
