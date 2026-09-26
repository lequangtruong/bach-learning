// js/spatial-3d-challenges-part2.js - Thử thách Không gian 3D & Gấp hộp (Phần 2: Bài 31 - 60)
// Chuẩn bài thi Năng khiếu GEP Singapore & Mensa dành cho học sinh Lớp 4

export const SPATIAL_3D_CHALLENGES_PART2 = [
  {
    "id": "sp3d-pr-08",
    "mode": "projections",
    "difficulty": 3,
    "title": "Hình Chiếu Trước Của Kim Tự Tháp",
    "prompt": "Quan sát kim tự tháp 3 tầng (đáy 3x3, tầng hai 2x2, đỉnh 1x1). Khi chiếu thẳng vuông góc lên MẶT TRƯỚC (Front View), hình chiếu gồm bao nhiêu ô vuông?",
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
    "correctAnswer": "Hình bậc thang 3 cột (6 ô vuông)",
    "options": [
      "Hình bậc thang 3 cột (6 ô vuông)",
      "Hình chữ nhật 3x3 (9 ô)",
      "Hàng ngang 3 ô",
      "Chữ thập 5 ô"
    ],
    "explanation": "Khi nhìn từ mặt trước, độ sâu Y bị nén lại. Các cột X lần lượt có chiều cao tối đa là: Cột 0 cao 3 tầng, Cột 1 cao 2 tầng, Cột 2 cao 1 tầng. Tổng số ô của hình chiếu là 3 + 2 + 1 = 6 ô vuông bậc thang."
  },
  {
    "id": "sp3d-pr-09",
    "mode": "projections",
    "difficulty": 3,
    "title": "Hình Chiếu Cạnh Bên Khối Chữ T Nằm Ngang",
    "prompt": "Một khối hình chữ T nằm ngang trên mặt sàn. Khi nhìn từ BÊN CẠNH (Side View), hình chiếu phẳng có dạng gì?",
    "viewType": "side",
    "cubes": [
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
        0,
        0
      ]
    ],
    "correctAnswer": "Hình chữ L gồm 2 ô vuông nằm ngang",
    "options": [
      "Hình chữ L gồm 2 ô vuông nằm ngang",
      "Hình chữ T gồm 4 ô",
      "Hàng dọc gồm 3 ô",
      "Hình vuông 2x2"
    ],
    "explanation": "Nhìn từ cạnh bên (chiều Y và Z), thanh ngang tại Y=1 chiếu thành 1 ô, thân chữ T vươn ra tại Y=0 chiếu thành 1 ô kề trước. Cả hai đều ở tầng Z=0, tạo thành 1 đoạn thẳng 2 ô."
  },
  {
    "id": "sp3d-pr-10",
    "mode": "projections",
    "difficulty": 4,
    "title": "Số Khối Tối Thiểu Thỏa Mãn Hai Hình Chiếu",
    "prompt": "Một mô hình có hình chiếu Trên (Top) là hàng ngang 3 ô, hình chiếu Trước (Front) là cột đứng 3 ô. Hỏi cần TỐI THIỂU bao nhiêu khối lập phương đơn vị?",
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
        2,
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
      ]
    ],
    "correctAnswer": 5,
    "options": [
      3,
      4,
      5,
      6
    ],
    "explanation": "Top View có 3 ô ngang nghĩa là có 3 cột ở X=0, 1, 2. Front View cao 3 ô nghĩa là có ít nhất 1 cột cao 3 tầng. Để tối thiểu hóa, ta đặt cột cao 3 ở X=0 (3 khối), và 2 cột còn lại ở X=1 và X=2 mỗi cột cao 1 tầng. Tổng số khối tối thiểu: 3 + 1 + 1 = 5 khối."
  },
  {
    "id": "sp3d-pr-11",
    "mode": "projections",
    "difficulty": 4,
    "title": "Nhận Diện Hình Chiếu Cổng Chào Chữ U Ngược",
    "prompt": "Một chiếc cổng vòm chào mừng được ghép từ các khối lập phương thành hình chữ U ngược. Nhìn từ Mặt Trước, hình chiếu phẳng có dạng gì?",
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
    "correctAnswer": "Chữ U lộn ngược gồm 7 ô vuông",
    "options": [
      "Chữ U lộn ngược gồm 7 ô vuông",
      "Hình chữ nhật đặc 3x3",
      "Chữ H gồm 7 ô vuông",
      "Hình bậc thang 2 bên"
    ],
    "explanation": "Hai cột trụ mỗi bên cao 3 ô, xà ngang trên cùng nối liền ở tầng 3, ở giữa tầng 1 và tầng 2 là khoảng trống rỗng. Hình chiếu chính xác là hình chữ U lộn ngược gồm 3 + 3 + 1 = 7 ô vuông."
  },
  {
    "id": "sp3d-pr-12",
    "mode": "projections",
    "difficulty": 3,
    "title": "Hình Chiếu Trên Xuống Cầu Thang Xoắn",
    "prompt": "Một cầu thang xoắn quanh góc vuông gồm 4 tầng, mỗi tầng xoay sang 1 ô trong lưới 2x2. Nhìn từ Trên Trời Xuống (Top View), hình ảnh thu được là gì?",
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
        3
      ]
    ],
    "correctAnswer": "Hình vuông 2x2 gồm 4 ô kín",
    "options": [
      "Hình vuông 2x2 gồm 4 ô kín",
      "Chữ L gồm 3 ô vuông",
      "Hàng chéo gồm 2 ô",
      "Một vòng tròn hở"
    ],
    "explanation": "Vì mỗi bậc thang nằm ở một góc tọa độ (X,Y) khác nhau trong lưới 2x2: (0,0), (1,0), (1,1), (0,1), nên nhìn từ trên cao xuống sẽ phủ kín cả 4 ô tạo thành một hình vuông 2x2 hoàn chỉnh."
  },
  {
    "id": "sp3d-pr-13",
    "mode": "projections",
    "difficulty": 4,
    "title": "Nhận Diện Khối Có 3 Hình Chiếu Giống Hệt Nhau",
    "prompt": "Khối hình nào dưới đây có cả ba hình chiếu Top View, Front View và Side View hoàn toàn GIỐNG HỆT NHAU?",
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
      ]
    ],
    "correctAnswer": "Khối chữ L không gian 3 nhánh từ 1 góc chung",
    "options": [
      "Khối chữ L không gian 3 nhánh từ 1 góc chung",
      "Khối cột đứng thẳng 3 tầng",
      "Khối thanh ngang 3 ô",
      "Khối bậc thang chữ Z"
    ],
    "explanation": "Gốc tại (0,0,0) vươn ra 3 nhánh: (1,0,0), (0,1,0), (0,0,1). Khi chiếu từ trên xuống, mặt trước, hay cạnh bên đều cho ra cùng một hình chữ L gồm 3 ô vuông đối xứng hoàn hảo."
  },
  {
    "id": "sp3d-pr-14",
    "mode": "projections",
    "difficulty": 3,
    "title": "So Sánh Hình Chiếu Trái Và Phải",
    "prompt": "Với một khối hình bất đối xứng, hình chiếu nhìn từ bên Trái (Left View) và nhìn từ bên Phải (Right View) có mối quan hệ gì?",
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
    "correctAnswer": "Đối xứng gương qua trục đứng (ngược chiều trái phải)",
    "options": [
      "Đối xứng gương qua trục đứng (ngược chiều trái phải)",
      "Giống hệt nhau không khác tí nào",
      "Bị lộn ngược đầu đuôi trên dưới",
      "Lệch nhau một góc 45 độ"
    ],
    "explanation": "Nhìn từ bên trái và bên phải là hai góc nhìn ngược chiều nhau 180 độ qua trục đứng, do đó các chi tiết phía trước/sau sẽ bị đổi vị trí trái/phải thành ảnh đối xứng qua gương."
  },
  {
    "id": "sp3d-pr-15",
    "mode": "projections",
    "difficulty": 5,
    "title": "Olympic Mensa: Số Ô Nhìn Thấy Đồng Thời",
    "prompt": "Ở góc nhìn phối cảnh trục đo chuẩn (Isometric View), có thể nhìn thấy tối đa bao nhiêu mặt của một khối lập phương đơn lẻ nằm ở góc?",
    "viewType": "isometric",
    "cubes": [
      [
        0,
        0,
        0
      ]
    ],
    "correctAnswer": "Tối đa 3 mặt (Mặt Trên, Mặt Trước, Mặt Bên)",
    "options": [
      "Tối đa 2 mặt",
      "Tối đa 3 mặt (Mặt Trên, Mặt Trước, Mặt Bên)",
      "Tối đa 4 mặt",
      "Tất cả 6 mặt"
    ],
    "explanation": "Từ bất kỳ một góc nhìn mắt người hoặc máy ảnh không gian trong thực tế, một vật thể lập phương lồi chỉ có thể để lộ tối đa 3 mặt vuông góc cùng một lúc (Top, Front, Side)."
  },
  {
    "id": "sp3d-pr-16",
    "mode": "projections",
    "difficulty": 5,
    "title": "Olympic GEP: Số Khối Thêm Vào Không Đổi Hình Chiếu",
    "prompt": "Một khung hình chữ U có 3 hình chiếu đã cố định. Số khối lập phương tối đa có thể giấu thêm vào bên trong mà KHÔNG làm thay đổi bất kỳ hình chiếu nào là bao nhiêu?",
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
        2,
        0,
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
      ]
    ],
    "correctAnswer": "Tối đa 0 khối (mọi khối thêm vào đều làm thay đổi bóng chiếu)",
    "options": [
      "Tối đa 0 khối (mọi khối thêm vào đều làm thay đổi bóng chiếu)",
      "Thêm được 1 khối",
      "Thêm được 2 khối",
      "Thêm được vô số khối"
    ],
    "explanation": "Khoảng trống ở giữa tầng 1 (1,0,1) nếu thêm khối sẽ làm Front View bị lấp kín, còn nếu lùi về sau (Y>0) sẽ làm Top View bị phình to ra. Do đó không thể thêm bất kỳ khối nào mà không làm đổi bóng chiếu."
  },
  {
    "id": "sp3d-cn-01",
    "mode": "cube-nets",
    "difficulty": 1,
    "title": "Mặt Đối Diện Khối Xúc Xắc",
    "prompt": "Khi gấp tấm bìa chữ thập 6 ô vuông dưới đây thành khối lập phương, mặt đối diện với mặt số 1 là mặt số mấy?",
    "netLayout": "cross",
    "faces": {
      "top": 2,
      "center": 1,
      "bottom": 4,
      "left": 3,
      "right": 5,
      "farBottom": 6
    },
    "correctAnswer": 6,
    "options": [
      3,
      4,
      5,
      6
    ],
    "explanation": "Trong dạng trải phẳng chữ thập chuẩn: Mặt trên (2) đối diện mặt dưới (4). Mặt trái (3) đối diện mặt phải (5). Mặt trung tâm (1) đối diện mặt đuôi xa nhất (6)."
  },
  {
    "id": "sp3d-cn-02",
    "mode": "cube-nets",
    "difficulty": 2,
    "title": "Quy Tắc Tổng Hai Mặt Xúc Xắc Bằng 7",
    "prompt": "Một khối xúc xắc chuẩn luôn có tổng hai mặt đối diện bằng 7. Nếu mặt số 3 ở bên hông, mặt đối diện của nó phải là số mấy?",
    "netLayout": "dice-standard",
    "correctAnswer": 4,
    "options": [
      2,
      4,
      5,
      6
    ],
    "explanation": "Theo quy luật xúc xắc quốc tế: 1 đối diện 6, 2 đối diện 5, 3 đối diện 4 (tổng luôn là 7). Vậy đối diện mặt 3 là mặt 4."
  },
  {
    "id": "sp3d-cn-03",
    "mode": "cube-nets",
    "difficulty": 2,
    "title": "Tìm Tấm Bìa KHÔNG Thể Gấp Thành Hộp",
    "prompt": "Trong 4 tấm bìa gồm 6 ô vuông dưới đây, tấm bìa nào KHÔNG THỂ gấp lại thành một khối lập phương kín?",
    "netLayout": "test-validity",
    "correctAnswer": "Tấm bìa có 4 ô tạo thành hình vuông 2x2",
    "options": [
      "Tấm bìa hình chữ thập (1-4-1)",
      "Tấm bìa bậc thang ziczac (2-3-1)",
      "Tấm bìa có 4 ô tạo thành hình vuông 2x2",
      "Tấm bìa dạng chữ T (1-3-2)"
    ],
    "explanation": "Nếu trong tấm trải có chứa một cụm 4 ô vuông tạo thành hình vuông 2x2, khi gấp các mặt sẽ bị chồng đè lên nhau, không thể tạo thành khối lập phương khép kín."
  },
  {
    "id": "sp3d-cn-04",
    "mode": "cube-nets",
    "difficulty": 3,
    "title": "Đoán Màu Của Đáy Hộp",
    "prompt": "Gấp tấm bìa có các màu: Đỏ (mặt trên), Vàng (mặt trước), Xanh lá (mặt trái). Nếu Vàng đối diện Tím, Xanh lá đối diện Cam, Đỏ đối diện Trắng. Hỏi mặt ĐÁY của hộp có màu gì?",
    "netLayout": "colored-faces",
    "correctAnswer": "Màu Trắng",
    "options": [
      "Màu Tím",
      "Màu Cam",
      "Màu Trắng",
      "Màu Xanh lá"
    ],
    "explanation": "Mặt trên (Đỏ) đối diện với mặt đáy. Vì đề bài cho biết Đỏ đối diện với Trắng, nên mặt đáy hộp là Màu Trắng."
  },
  {
    "id": "sp3d-cn-05",
    "mode": "cube-nets",
    "difficulty": 3,
    "title": "Đỉnh Chung Của Ba Mặt Hộp",
    "prompt": "Khi gấp tấm bìa chữ thập, các đỉnh của mặt Trái, mặt Trên và mặt Tâm sẽ chụm lại tại một điểm. Điểm đó gọi là gì của khối lập phương?",
    "netLayout": "vertex-check",
    "correctAnswer": "Một Đỉnh (Vertex) của khối lập phương",
    "options": [
      "Một Cạnh (Edge) của khối",
      "Một Đỉnh (Vertex) của khối lập phương",
      "Tâm của khối lập phương",
      "Đường chéo đáy"
    ],
    "explanation": "Mỗi đỉnh của khối lập phương là điểm giao nhau của đúng 3 mặt phẳng vuông góc với nhau."
  },
  {
    "id": "sp3d-cn-06",
    "mode": "cube-nets",
    "difficulty": 4,
    "title": "Quy Luật Ký Hiệu Mũi Tên Gấp Hộp",
    "prompt": "Trên tấm bìa phẳng, mặt số 1 có mũi tên chỉ lên trên. Khi gấp thành hộp lập phương, mặt đối diện với mặt 1 có mũi tên quay sang phải. Hai mũi tên trong không gian có quan hệ gì?",
    "netLayout": "arrow-orientation",
    "correctAnswer": "Vuông góc với nhau",
    "options": [
      "Song song cùng chiều",
      "Song song ngược chiều",
      "Vuông góc với nhau",
      "Trùng nhau"
    ],
    "explanation": "Hai mặt đối diện nằm trên hai mặt phẳng song song, một hướng lên trên và một hướng sang ngang, tạo thành hai vectơ vuông góc 90 độ trong không gian."
  },
  {
    "id": "sp3d-cn-07",
    "mode": "cube-nets",
    "difficulty": 5,
    "title": "Olympic GEP: Đếm Số Cạnh Cần Cắt Rời",
    "prompt": "Một khối lập phương đặc có 12 cạnh. Muốn trải phẳng hoàn toàn khối lập phương ra thành 1 tấm bìa 6 ô liền mạch, em phải rạch cắt bao nhiêu cạnh?",
    "netLayout": "edge-cuts",
    "correctAnswer": "7 cạnh",
    "options": [
      "5 cạnh",
      "6 cạnh",
      "7 cạnh",
      "8 cạnh"
    ],
    "explanation": "Để giữ 6 mặt liên kết với nhau thành một đồ thị cây, cần giữ lại 5 cạnh chung (vì cây 6 đỉnh có 5 cạnh). Do khối có 12 cạnh nên số cạnh cần cắt là: 12 - 5 = 7 cạnh."
  },
  {
    "id": "sp3d-cn-08",
    "mode": "cube-nets",
    "difficulty": 3,
    "title": "Tấm Bìa Trải Dạng Chữ T (1-3-2)",
    "prompt": "Trong một tấm bìa trải dạng chữ T gồm hàng trên 1 ô, hàng giữa 3 ô, hàng dưới 2 ô. Hai ô cách nhau đúng 1 ô trên cùng một hàng hoặc một cột có tính chất gì khi gấp?",
    "netLayout": "net-t-shape",
    "correctAnswer": "Luôn trở thành hai mặt đối diện nhau",
    "options": [
      "Luôn trở thành hai mặt đối diện nhau",
      "Trở thành hai mặt kề vuông góc",
      "Chồng khít lên nhau",
      "Giao nhau tại một cạnh"
    ],
    "explanation": "Quy tắc vàng trải hộp lập phương: Trong cùng một dải thẳng hàng, hai ô cách nhau đúng một ô trung gian sẽ gập vuông góc 90 độ hai lần và trở thành hai mặt đối diện song song."
  },
  {
    "id": "sp3d-cn-09",
    "mode": "cube-nets",
    "difficulty": 3,
    "title": "Số Cạnh Gặp Nhau Tại Một Đỉnh",
    "prompt": "Khi gấp một tấm bìa phẳng thành khối lập phương hoàn chỉnh, tại mỗi góc đỉnh nhọn có bao nhiêu mép cạnh chụm lại?",
    "netLayout": "vertex-edges",
    "correctAnswer": "Đúng 3 cạnh",
    "options": [
      "2 cạnh",
      "Đúng 3 cạnh",
      "4 cạnh",
      "6 cạnh"
    ],
    "explanation": "Mỗi đỉnh của khối lập phương trong không gian 3 chiều là giao điểm của đúng 3 cạnh vuông góc đôi một."
  },
  {
    "id": "sp3d-cn-10",
    "mode": "cube-nets",
    "difficulty": 3,
    "title": "Tấm Bìa Bậc Thang Zic-zac (2-3-1)",
    "prompt": "Tấm bìa trải phẳng dạng zic-zac gồm hàng 1 có 2 ô, hàng 2 có 3 ô, hàng 3 có 1 ô. Khi gấp lại thành hộp, mặt ngoài cùng bên trái hàng 1 đối diện với ô nào?",
    "netLayout": "zigzag-net",
    "correctAnswer": "Ô ngoài cùng bên phải của hàng 2",
    "options": [
      "Ô ngoài cùng bên phải của hàng 2",
      "Ô duy nhất của hàng 3",
      "Ô chính giữa hàng 2",
      "Ô bên cạnh nó"
    ],
    "explanation": "Khi gấp theo nếp của dạng bậc thang zic-zac 2-3-1, ô góc trái hàng 1 và ô góc phải hàng 2 sẽ gập khép kín thành cặp mặt đối diện nhau."
  },
  {
    "id": "sp3d-cn-11",
    "mode": "cube-nets",
    "difficulty": 4,
    "title": "Tổng Chấm Xúc Xắc Lớn Nhất Tại Một Góc",
    "prompt": "Một khối xúc xắc chuẩn (1 đối diện 6, 2 đối diện 5, 3 đối diện 4). Tại một góc đỉnh bất kỳ có 3 mặt cùng gặp nhau. Tổng số chấm lớn nhất của 3 mặt này là:",
    "netLayout": "dice-vertex-sum",
    "correctAnswer": "15 chấm (gồm 4 + 5 + 6)",
    "options": [
      "14 chấm",
      "15 chấm (gồm 4 + 5 + 6)",
      "16 chấm",
      "18 chấm"
    ],
    "explanation": "Vì hai mặt đối diện không bao giờ có thể gặp nhau tại một đỉnh, nên đỉnh có tổng lớn nhất phải chọn 3 số lớn nhất mà không có cặp đối diện nào: đó là 6, 5 và 4 (6 đối 1, 5 đối 2, 4 đối 3 - không có cặp nào trùng). Tổng: 6 + 5 + 4 = 15 chấm."
  },
  {
    "id": "sp3d-cn-12",
    "mode": "cube-nets",
    "difficulty": 4,
    "title": "Mensa: Có Bao Nhiêu Dạng Trải Phẳng Lập Phương?",
    "prompt": "Trong hình học không gian, có tất cả bao nhiêu dạng trải phẳng (nets) khác nhau (không tính phép xoay và lật gương) có thể gấp thành khối lập phương kín?",
    "netLayout": "all-nets-count",
    "correctAnswer": "Đúng 11 dạng",
    "options": [
      "8 dạng",
      "9 dạng",
      "Đúng 11 dạng",
      "14 dạng"
    ],
    "explanation": "Định lý toán học hình học tổ hợp đã chứng minh: Có chính xác 11 dạng lưới trải phẳng khác nhau của khối lập phương (gồm sáu dạng 1-4-1, ba dạng 1-3-2, một dạng 2-2-2 và một dạng 3-3)."
  },
  {
    "id": "sp3d-cn-13",
    "mode": "cube-nets",
    "difficulty": 3,
    "title": "Đoán Vị Trí Mặt Biểu Tượng Ngôi Sao",
    "prompt": "Gấp một chiếc hộp quà có in biểu tượng: Mặt in hình Mặt Trăng đối diện mặt in hình Ngôi Sao. Nếu khi đặt hộp lên bàn, Mặt Trăng áp sát mặt bàn (ở đáy), thì Ngôi Sao ở đâu?",
    "netLayout": "symbol-faces",
    "correctAnswer": "Mặt nắp trên cùng (hướng lên trần nhà)",
    "options": [
      "Mặt nắp trên cùng (hướng lên trần nhà)",
      "Mặt trước quay vào người nhìn",
      "Mặt bên hông trái",
      "Mặt bên hông phải"
    ],
    "explanation": "Vì Mặt Trăng và Ngôi Sao là hai mặt đối diện song song trong không gian, khi Mặt Trăng nằm ở đáy bàn thì Ngôi Sao bắt buộc phải là mặt trên cùng đối diện với nó."
  },
  {
    "id": "sp3d-cn-14",
    "mode": "cube-nets",
    "difficulty": 3,
    "title": "Số Cạnh Chung Của Hai Mặt Đối Diện",
    "prompt": "Trong một khối lập phương hoàn chỉnh, hai mặt đối diện song song với nhau có tất cả bao nhiêu cạnh chung?",
    "netLayout": "opposite-edges",
    "correctAnswer": "0 cạnh chung",
    "options": [
      "0 cạnh chung",
      "1 cạnh chung",
      "2 cạnh chung",
      "4 cạnh chung"
    ],
    "explanation": "Hai mặt đối diện nằm trên hai mặt phẳng song song cách nhau một khoảng bằng độ dài cạnh khối lập phương, chúng không bao giờ cắt nhau nên có đúng 0 cạnh chung."
  },
  {
    "id": "sp3d-cn-15",
    "mode": "cube-nets",
    "difficulty": 4,
    "title": "Thao Tác Xoay Khối Xúc Xắc Không Gian",
    "prompt": "Đặt xúc xắc có mặt 1 ở trên đỉnh, mặt 2 ở phía trước. Xoay xúc xắc 90 độ lăn về phía trước (mặt trên đổ ra trước), sau đó xoay 90 độ sang phải. Mặt nào đang ở trên cùng?",
    "netLayout": "rotation-3d",
    "correctAnswer": "Mặt bên trái ban đầu",
    "options": [
      "Mặt bên trái ban đầu",
      "Mặt số 2",
      "Mặt đáy ban đầu",
      "Mặt số 1"
    ],
    "explanation": "Lăn về phía trước: mặt 1 (trên) -> chuyển thành mặt trước. Mặt sau -> chuyển lên mặt trên. Tiếp tục xoay 90 độ sang phải: mặt bên trái ban đầu sẽ xoay lật lên thành mặt trên cùng mới."
  },
  {
    "id": "sp3d-cn-16",
    "mode": "cube-nets",
    "difficulty": 5,
    "title": "Olympic Singapore GEP: Vòng Dây Khép Kín",
    "prompt": "Một sợi ruy băng màu đỏ được quấn tròn khép kín quanh 4 mặt xung quanh của khối lập phương theo phương ngang. Khi rạch các cạnh trải phẳng thành dạng chữ thập (1-4-1), sợi ruy băng sẽ trông như thế nào?",
    "netLayout": "ribbon-cross",
    "correctAnswer": "Một đường thẳng liền mạch nằm ngang vắt qua 4 ô liên tiếp",
    "options": [
      "Một đường thẳng liền mạch nằm ngang vắt qua 4 ô liên tiếp",
      "Bốn đoạn thẳng rời rạc không nối nhau",
      "Một hình tròn khép kín trên tấm phẳng",
      "Đường zic-zac gãy khúc hình chữ V"
    ],
    "explanation": "Bốn mặt xung quanh của khối lập phương khi trải phẳng dạng 1-4-1 sẽ nằm thẳng hàng liên tiếp nhau thành dải 4 ô. Sợi dây quấn ngang phẳng theo chu vi sẽ trải ra thành đúng một đường thẳng liên tục cắt qua 4 ô này."
  },
  {
    "id": "sp3d-pr-17",
    "mode": "projections",
    "difficulty": 5,
    "title": "Kỳ Thi Olympic Quốc Tế: 3 Hình Chiếu Dấu Cộng",
    "prompt": "Một vật thể có cả 3 hình chiếu (Top, Front, Side) đều là hình chữ thập dấu cộng gồm 5 ô vuông (trong lưới 3x3). Hỏi vật thể đó có thể có TỐI THIỂU bao nhiêu khối lập phương đơn vị?",
    "correctAnswer": "5 khối",
    "options": [
      "5 khối",
      "6 khối",
      "7 khối",
      "9 khối"
    ],
    "explanation": "Chỉ cần 5 khối đặt tại vị trí trung tâm (1,1,1) và 4 khối tiếp giáp hoặc trải theo đường chéo bậc thang, ta có thể đồng thời phủ kín 5 ô của cả 3 hình chiếu mà chỉ cần tối thiểu đúng 5 khối!"
  },
  {
    "id": "sp3d-pr-18",
    "mode": "projections",
    "difficulty": 5,
    "title": "Kangaroo Math: Xúc Xắc Lăn 4 Bước Trên Mặt Bàn",
    "prompt": "Xúc xắc chuẩn (1 đối 6, 2 đối 5, 3 đối 4) ban đầu đặt có mặt 1 ở trên đỉnh, mặt 2 ở trước mặt. Lăn về phía trước 1 bước, sau đó lăn sang phải 1 bước. Mặt nào đang ở trên đỉnh?",
    "correctAnswer": "Mặt số 4",
    "options": [
      "Mặt số 3",
      "Mặt số 4",
      "Mặt số 5",
      "Mặt số 6"
    ],
    "explanation": "Ban đầu: Trên=1, Trước=2 => Đáy=6, Sau=5, Trái=4, Phải=3. Lăn tới trước 1 bước: Mặt sau (5) lật lên thành Mặt Trên; Mặt 1 chuyển thành Mặt Trước. Lăn sang phải 1 bước: Mặt bên trái ban đầu (mặt 4) lật lên thành Mặt Trên cùng. Vậy mặt trên đỉnh là mặt số 4!"
  },
  {
    "id": "sp3d-cn-17",
    "mode": "cube-nets",
    "difficulty": 5,
    "title": "Mensa: Mặt Cắt Lục Giác Đều Của Khối Lập Phương",
    "prompt": "Dùng một mặt phẳng cắt xuyên qua khối lập phương đi qua trung điểm của 6 cạnh liên tiếp. Thiết diện (hình thu được trên mặt phẳng cắt) là hình gì?",
    "netLayout": "cube-slice-hexagon",
    "correctAnswer": "Hình lục giác đều",
    "options": [
      "Hình lục giác đều",
      "Hình ngũ giác",
      "Hình tam giác đều",
      "Hình bát giác"
    ],
    "explanation": "Mặt phẳng đi qua trung điểm của 6 cạnh lần lượt cắt 6 mặt của khối lập phương, tạo thành 6 đoạn thẳng nối các trung điểm cạnh có độ dài bằng nhau và các góc bằng nhau (120 độ). Đó là một hình lục giác đều hoàn hảo!"
  },
  {
    "id": "sp3d-cn-18",
    "mode": "cube-nets",
    "difficulty": 5,
    "title": "Olympic SASMO: Đường Bò Ngắn Nhất Của Con Kiến",
    "prompt": "Con kiến ở góc dưới A của khối lập phương cạnh 10 cm muốn bò trên bề mặt ngoài đến góc đối diện xa nhất B trên đỉnh. Bằng cách trải phẳng 2 mặt vuông góc thành một hình chữ nhật 10x20 cm, đường đi ngắn nhất là đường nào?",
    "netLayout": "ant-geodesic",
    "correctAnswer": "Đường thẳng nối A và B trên tấm bìa trải phẳng",
    "options": [
      "Đường thẳng nối A và B trên tấm bìa trải phẳng",
      "Đi men theo 3 cạnh của khối lập phương (30 cm)",
      "Đi theo đường chéo của 1 mặt rồi đi tiếp theo cạnh (24.1 cm)",
      "Đường tròn xoắn ốc quanh thân hộp"
    ],
    "explanation": "Định lý hình học phẳng: Đoạn thẳng nối hai điểm trên mặt phẳng trải ra luôn là khoảng cách ngắn nhất giữa hai điểm. Độ dài đường đi là căn bậc hai của (10² + 20²) = căn(500) ≈ 22.36 cm, ngắn hơn nhiều so với đi men theo cạnh (30 cm)."
  },
  {
    "id": "sp3d-cn-19",
    "mode": "cube-nets",
    "difficulty": 5,
    "title": "GEP Singapore: Ghép Khối Lập Phương Từ Mảnh Chữ L",
    "prompt": "Một khối chữ L 3D gồm 4 khối lập phương đơn vị. Có thể dùng các khối chữ L này để ghép kín hoàn toàn thành một khối lập phương lớn 3x3x3 (gồm 27 khối đơn vị) được không?",
    "netLayout": "tetracube-impossibility",
    "correctAnswer": "Không thể, vì 27 không chia hết cho 4",
    "options": [
      "Không thể, vì 27 không chia hết cho 4",
      "Có thể, dùng đúng 6 khối và bỏ 3 khối",
      "Có thể, chỉ cần xoay khéo léo",
      "Không thể, vì hình chữ L không có tính đối xứng"
    ],
    "explanation": "Một khối lập phương lớn 3x3x3 có tổng thể tích là 3 × 3 × 3 = 27 khối lập phương đơn vị. Mỗi khối chữ L gồm 4 khối đơn vị. Vì 27 không chia hết cho 4 (27 : 4 = 6 dư 3), nên về mặt toán học tuyệt đối không thể lấp đầy kín khối lập phương này."
  }
];
