// js/task-master-levels-part5.js - Ngân hàng 40 Màn chơi Part 5: Thám Tử & Đại Dự Án Căn Cứ Mặt Trăng (Màn 161 -> 200)

export const TASK_MASTER_LEVELS_PART5 = [
  {
    "id": "tm-161",
    "level": 161,
    "title": "Phong Tỏa Và Bảo Vệ Hiện Trường Vụ Án",
    "category": "detective",
    "categoryName": "Thám Tử Nhí",
    "icon": "🚧",
    "difficulty": 3,
    "description": "Nguyên tắc vàng của cảnh sát hình sự: Không được làm xáo trộn bất kỳ vật chứng nào.",
    "tasks": [
      {
        "id": "t1",
        "text": "Căng dây phản quang màu vàng POLICE LINE DO NOT CROSS phong tỏa khu vực",
        "icon": "🚧",
        "hint": "Cách ly hiện trường khỏi sự tò mò của đám đông."
      },
      {
        "id": "t2",
        "text": "Đeo găng tay cao su, bao bọc giày y tế và khẩu trang trước khi bước vào",
        "icon": "🧤",
        "requires": [
          "t1"
        ],
        "hint": "Ngăn mồ hôi, tóc và dấu giày của điều tra viên làm nhiễm bẩn hiện trường."
      },
      {
        "id": "t3",
        "text": "Chụp ảnh toàn cảnh hiện trường ở 4 góc phòng với thước dây đo khoảng cách",
        "icon": "📸",
        "requires": [
          "t2"
        ],
        "hint": "Ghi nhận hiện trạng ban đầu bằng hình ảnh trước khi chạm vào đồ vật."
      },
      {
        "id": "t4",
        "text": "Đặt các biển số tam giác màu vàng đánh dấu vị trí từng dấu vết khả nghi",
        "icon": "🏷️",
        "requires": [
          "t3"
        ],
        "hint": "Đánh số thứ tự vị trí vỏ đạn, vết máu và cốc nước."
      },
      {
        "id": "t5",
        "text": "Vẽ sơ đồ mặt bằng hiện trường ghi rõ khoảng cách chính xác từng vật chứng",
        "icon": "📐",
        "requires": [
          "t4"
        ],
        "hint": "Sơ đồ đo đạc tỷ lệ chuẩn xác phục vụ hồ sơ pháp lý."
      },
      {
        "id": "t6",
        "text": "Lập biên bản khám nghiệm hiện trường có chữ ký xác nhận của đại diện nhân chứng",
        "icon": "📝",
        "requires": [
          "t5"
        ],
        "hint": "Bảo đảm quy trình điều tra khách quan và hợp pháp."
      }
    ],
    "distractors": [
      {
        "id": "d1",
        "text": "Dọn dẹp mảnh vỡ thủy tinh và lau sạch vết bẩn trên sàn nhà",
        "icon": "🧹",
        "failReason": "Lau dọn hiện trường sẽ phá hủy toàn bộ dấu vết ADN và dấu vân tay của thủ phạm!"
      }
    ],
    "lesson": "Căng dây phong tỏa -> Đeo bao giày găng tay -> Chụp ảnh 4 góc -> Đặt biển số vàng -> Vẽ sơ đồ -> Lập biên bản."
  },
  {
    "id": "tm-162",
    "level": 162,
    "title": "Lấy Dấu Vân Tay Tiềm Ẩn Bằng Bột Từ Tính",
    "category": "detective",
    "categoryName": "Thám Tử Nhí",
    "icon": "🖐️",
    "difficulty": 3,
    "description": "Hiện hình đường vân tay mắt thường không nhìn thấy trên chiếc cốc thủy tinh.",
    "tasks": [
      {
        "id": "t1",
        "text": "Dùng kẹp gắp nhẹ nhàng chiếc cốc thủy tinh đặt lên bàn kỹ thuật",
        "icon": "🥛",
        "hint": "Chỉ chạm vào miệng cốc nơi không có dấu vân tay bám."
      },
      {
        "id": "t2",
        "text": "Chiếu đèn pin xiên góc 45 độ tìm vệt dầu mồ hôi mờ mờ trên thân cốc",
        "icon": "🔦",
        "requires": [
          "t1"
        ],
        "hint": "Ánh sáng xiên làm nổi bật lớp dầu mỡ từ đầu ngón tay lưu lại."
      },
      {
        "id": "t3",
        "text": "Nhúng chổi cọ lông đuôi sóc mềm vào hũ bột từ tính màu đen",
        "icon": "🖌️",
        "requires": [
          "t2"
        ],
        "hint": "Bột oxit sắt từ tính siêu mịn bám hút vào lớp mồ hôi."
      },
      {
        "id": "t4",
        "text": "Quét xoay tròn cực kỳ nhẹ nhàng qua vị trí có vệt mồ hôi",
        "icon": "🌀",
        "requires": [
          "t3"
        ],
        "hint": "Hạt bột đen bám vào các rãnh vân tạo thành hình dấu vân tay rõ mồn một."
      },
      {
        "id": "t5",
        "text": "Dán băng dính chuyên dụng trong suốt miết chặt lên dấu vân tay vừa hiện",
        "icon": "🩹",
        "requires": [
          "t4"
        ],
        "hint": "Lớp keo dính nhấc toàn bộ hoa văn dấu vân tay lên màng dính."
      },
      {
        "id": "t6",
        "text": "Bóc băng dính dán lên tấm bìa trắng đối chiếu vân xoắn vào cơ sở dữ liệu AFIS",
        "icon": "📋",
        "requires": [
          "t5"
        ],
        "hint": "Hệ thống máy tính tìm kiếm đối chiếu 10 triệu dấu vân tay tìm ra danh tính thủ phạm."
      }
    ],
    "lesson": "Kẹp mép cốc -> Đèn chiếu xiên 45 độ -> Chổi bột từ tính -> Quét nhẹ hiện vân -> Băng dính nhấc mẫu -> Dán thẻ đối chiếu AFIS."
  },
  {
    "id": "tm-163",
    "level": 163,
    "title": "Thu Thập Mẫu Vết Máu Khô Trích Xuất ADN",
    "category": "detective",
    "categoryName": "Thám Tử Nhí",
    "icon": "🩸",
    "difficulty": 4,
    "description": "Lấy mẫu giọt máu khô trên tay nắm cửa gửi phòng giám định di truyền sinh học.",
    "tasks": [
      {
        "id": "t1",
        "text": "Xịt dung dịch hóa chất phát quang Luminol trong bóng tối kiểm tra vết máu ẩn",
        "icon": "✨",
        "hint": "Luminol phản ứng với chất sắt trong hồng cầu phát ra ánh sáng xanh lam huyền ảo."
      },
      {
        "id": "t2",
        "text": "Đeo găng tay mới và dùng tăm bông vô trùng thấm 1 giọt nước cất tinh khiết",
        "icon": "💧",
        "requires": [
          "t1"
        ],
        "hint": "Nước cất làm mềm vết máu khô bám chặt trên kim loại."
      },
      {
        "id": "t3",
        "text": "Lăn đầu tăm bông xoay tròn trên giọt máu khô cho tới khi đầu bông ngả màu nâu đỏ",
        "icon": "🥢",
        "requires": [
          "t2"
        ],
        "hint": "Hút trọn vẹn tế bào bạch cầu chứa nhân tế bào mang mã ADN."
      },
      {
        "id": "t4",
        "text": "Để đầu tăm bông khô tự nhiên trong không khí 30 phút trong giá đỡ sạch",
        "icon": "💨",
        "requires": [
          "t3"
        ],
        "hint": "Tuyệt đối không đậy kín khi tăm bông còn ẩm ướt để tránh nấm mốc phá hủy ADN."
      },
      {
        "id": "t5",
        "text": "Cho tăm bông khô vào phong bì giấy ghi rõ ngày giờ và vị trí thu thập",
        "icon": "✉️",
        "requires": [
          "t4"
        ],
        "hint": "Dùng phong bì giấy thoáng khí, không dùng túi ni-lông kín khí."
      },
      {
        "id": "t6",
        "text": "Dán tem niêm phong có chữ ký kiểm định viên gửi phòng xét nghiệm giải trình tự gen",
        "icon": "🔒",
        "requires": [
          "t5"
        ],
        "hint": "Bảo đảm chuỗi hành trình bảo quản mẫu vật chứng (Chain of Custody) không bị tráo đổi."
      }
    ],
    "lesson": "Xịt Luminol phát quang -> Tăm bông thấm nước cất -> Lăn thấm máu -> Phơi khô tự nhiên -> Cho vào phong bì giấy -> Niêm phong gửi xét nghiệm."
  },
  {
    "id": "tm-164",
    "level": 164,
    "title": "Đổ Khuôn Thạch Cao Vết Lốp Xe Trên Bùn Đất",
    "category": "detective",
    "categoryName": "Thám Tử Nhí",
    "icon": "🛞",
    "difficulty": 3,
    "description": "Lưu giữ mẫu gai lốp xe tẩu thoát của nghi phạm từ rãnh bùn ngoài vườn.",
    "tasks": [
      {
        "id": "t1",
        "text": "Đặt khung gỗ bao quanh dấu lốp xe trên bãi bùn để ngăn nước tràn vào",
        "icon": "🪵",
        "hint": "Khung gỗ tạo thành bờ ngăn giữ dung dịch thạch cao không bị chảy loang."
      },
      {
        "id": "t2",
        "text": "Dùng ống bóp nhẹ nhàng hút hết nước đọng trong các rãnh hoa lốp",
        "icon": "🧪",
        "requires": [
          "t1"
        ],
        "hint": "Hút sạch nước giúp thạch cao điền đầy mọi chi tiết gờ rãnh nhỏ."
      },
      {
        "id": "t3",
        "text": "Xịt một lớp keo xịt tóc mỏng cố định các hạt cát bùn không bị xô lệch",
        "icon": "🧴",
        "requires": [
          "t2"
        ],
        "hint": "Tạo lớp màng bảo vệ bề mặt bùn cát mềm trước khi đổ thạch cao nặng."
      },
      {
        "id": "t4",
        "text": "Pha bột thạch cao nha khoa Dental Stone với nước theo tỷ lệ sền sệt như kem sữa",
        "icon": "🥣",
        "requires": [
          "t3"
        ],
        "hint": "Thạch cao nha khoa siêu mịn tái hiện vết xước nhỏ đến từng milimet."
      },
      {
        "id": "t5",
        "text": "Rót nhẹ nhàng dòng thạch cao từ góc khung gỗ cho chảy tràn đều mặt dấu lốp",
        "icon": "🫗",
        "requires": [
          "t4"
        ],
        "hint": "Rót từ từ để bọt khí thoát ra ngoài, không rót ụp thẳng vào giữa dấu."
      },
      {
        "id": "t6",
        "text": "Chờ 45 phút cho thạch cao đông cứng hoàn toàn rồi nhấc khối khuôn 3D lên rửa sạch",
        "icon": "🧱",
        "requires": [
          "t5"
        ],
        "hint": "Khối thạch cao sao chép trọn vẹn hoa lốp và các vết mòn đặc trưng của chiếc xe."
      }
    ],
    "lesson": "Đặt khung gỗ -> Hút nước đọng -> Xịt keo cố định cát -> Pha thạch cao sệt -> Rót tràn từ góc -> Nhấc khuôn 3D."
  },
  {
    "id": "tm-165",
    "level": 165,
    "title": "Sắc Ký Giấy Tách Phổ Màu Mực Bức Thư Tống Tiền",
    "category": "detective",
    "categoryName": "Thám Tử Nhí",
    "icon": "🖋️",
    "difficulty": 3,
    "description": "Phân tích xem bức thư nặc danh được viết bằng cây bút bi nào của 4 nghi phạm.",
    "tasks": [
      {
        "id": "t1",
        "text": "Cắt dải giấy sắc ký chuyên dụng hình chữ nhật dài 15cm",
        "icon": "📏",
        "hint": "Giấy lọc mao dẫn tinh khiết không chứa tạp chất."
      },
      {
        "id": "t2",
        "text": "Dùng kim chích một chấm mực cực nhỏ từ nét chữ trên bức thư lên vạch xuất phát",
        "icon": "📍",
        "requires": [
          "t1"
        ],
        "hint": "Chấm mực nhỏ như đầu kim trên đường kẻ bút chì cách đáy 2cm."
      },
      {
        "id": "t3",
        "text": "Chấm cạnh bên các mẫu mực thử từ 4 cây bút bi thu giữ của 4 nghi phạm",
        "icon": "🖊️",
        "requires": [
          "t2"
        ],
        "hint": "Đặt cùng trên một vạch ngang để so sánh độ di chuyển tương đối Rf."
      },
      {
        "id": "t4",
        "text": "Treo dải giấy vào ống nghiệm có đáy chứa dung môi cồn ethanol và nước",
        "icon": "🧪",
        "requires": [
          "t3"
        ],
        "hint": "Đáy giấy chạm dung môi nhưng vệt mực phải nằm trên mặt chất lỏng 1cm."
      },
      {
        "id": "t5",
        "text": "Dung môi thấm ngược lên trên tách vết mực đen thành các dải màu xanh, tím, vàng",
        "icon": "🌈",
        "requires": [
          "t4"
        ],
        "hint": "Các chất màu khác nhau di chuyển với tốc độ khác nhau tạo thành dải phổ màu độc nhất."
      },
      {
        "id": "t6",
        "text": "So sánh dải màu: Mẫu mực trên bức thư trùng khớp 100% với cây bút của Nghi phạm B",
        "icon": "🔍",
        "requires": [
          "t5"
        ],
        "hint": "Bằng chứng khoa học không thể chối cãi lật tẩy kẻ chủ mưu."
      }
    ],
    "lesson": "Cắt dải giấy sắc ký -> Chấm mực bức thư -> Chấm 4 bút nghi phạm -> Treo vào dung môi cồn -> Phân tách dải màu -> So khớp Nghi phạm B."
  },
  {
    "id": "tm-166",
    "level": 166,
    "title": "Khử Nhiễu Phục Hồi Biển Số Xe Trên Video Ban Đêm",
    "category": "detective",
    "categoryName": "Thám Tử Nhí",
    "icon": "📹",
    "difficulty": 4,
    "description": "Dùng thuật toán xếp chồng khung hình (Frame Stacking) làm rõ biển số xe gây tai nạn.",
    "tasks": [
      {
        "id": "t1",
        "text": "Trích xuất đoạn video 3 giây quay cảnh chiếc xe vượt đèn đỏ từ camera an ninh",
        "icon": "💾",
        "hint": "Lưu file video định dạng thô RAW để không bị nén mất chi tiết."
      },
      {
        "id": "t2",
        "text": "Cắt đoạn video thành 90 khung hình tĩnh riêng biệt có độ mờ nhòe chuyển động",
        "icon": "🎞️",
        "requires": [
          "t1"
        ],
        "hint": "Mỗi khung hình chứa một phần thông tin bị nhiễu hạt ánh sáng yếu."
      },
      {
        "id": "t3",
        "text": "Chạy thuật toán bám chuyển động Optical Flow căn chỉnh biển số xe về cùng một tọa độ",
        "icon": "🎯",
        "requires": [
          "t2"
        ],
        "hint": "Định vị biển số khớp nhau từng pixel giữa 90 khung hình."
      },
      {
        "id": "t4",
        "text": "Thuật toán xếp chồng trung bình (Averaging Stacking) triệt tiêu các hạt nhiễu ngẫu nhiên",
        "icon": "🧱",
        "requires": [
          "t3"
        ],
        "hint": "Hạt nhiễu ngẫu nhiên biến mất, chỉ các nét chữ biển số cố định được cộng dồn sáng rõ."
      },
      {
        "id": "t5",
        "text": "Áp dụng bộ lọc khử mờ chuyển động Wiener Deconvolution tái lập độ sắc nét nét chữ",
        "icon": "📐",
        "requires": [
          "t4"
        ],
        "hint": "Phép toán nghịch đảo quang học khôi phục lại các cạnh viền bị mờ."
      },
      {
        "id": "t6",
        "text": "Biển số xe 29A-888.66 hiện rõ mồn một trên màn hình phục vụ truy bắt",
        "icon": "🚗",
        "requires": [
          "t5"
        ],
        "hint": "Cảnh sát giao thông phát lệnh truy tìm bắt giữ chiếc xe gây tai nạn bỏ chạy."
      }
    ],
    "lesson": "Trích video thô -> Tách 90 khung hình -> Căn chỉnh tọa độ biển số -> Xếp chồng triệt nhiễu -> Khử mờ Wiener -> Biển số xe hiện rõ."
  },
  {
    "id": "tm-167",
    "level": 167,
    "title": "Khôi Phục Tin Nhắn Đã Xóa Bằng Giám Định Số",
    "category": "detective",
    "categoryName": "Thám Tử Nhí",
    "icon": "📱",
    "difficulty": 4,
    "description": "Trích xuất dữ liệu từ các khối nhớ NAND flash của chiếc điện thoại bị ném xuống hồ.",
    "tasks": [
      {
        "id": "t1",
        "text": "Vớt điện thoại lên và ngâm ngay vào hạt hút ẩm silica gel, tuyệt đối không bật nguồn",
        "icon": "📵",
        "hint": "Bật nguồn khi mạch còn ướt sẽ làm chập cháy chip nhớ vĩnh viễn."
      },
      {
        "id": "t2",
        "text": "Tháo rời bo mạch chủ và sấy khô bằng buồng chân không nhiệt độ thấp 40°C",
        "icon": "💨",
        "requires": [
          "t1"
        ],
        "hint": "Hút cạn từng giọt nước đọng dưới các chân chip BGA."
      },
      {
        "id": "t3",
        "text": "Đặt điện thoại vào túi chắn sóng Faraday chống lệnh xóa dữ liệu từ xa",
        "icon": "💼",
        "requires": [
          "t2"
        ],
        "hint": "Túi Faraday ngăn chặn hoàn toàn sóng điện thoại, Wifi và Bluetooth."
      },
      {
        "id": "t4",
        "text": "Kết nối cổng giao tiếp phần cứng EDL trích xuất toàn bộ ảnh nhị phân Bit-by-bit",
        "icon": "💾",
        "requires": [
          "t3"
        ],
        "hint": "Tạo bản sao lưu sao chép từng bit dữ liệu thô sang máy tính điều tra."
      },
      {
        "id": "t5",
        "text": "Phần mềm pháp y số quét các ô nhớ chưa bị ghi đè (Unallocated Space)",
        "icon": "🔍",
        "requires": [
          "t4"
        ],
        "hint": "Tin nhắn bị xóa chỉ bị hủy con trỏ thư mục, nội dung văn bản vẫn nằm im trong chip nhớ."
      },
      {
        "id": "t6",
        "text": "Phục hồi thành công đoạn hội thoại thỏa thuận mua bán đồ cổ trái phép lúc nửa đêm",
        "icon": "💬",
        "requires": [
          "t5"
        ],
        "hint": "Vật chứng số học hoàn hảo đưa vụ án ra ánh sáng công lý."
      }
    ],
    "lesson": "Hút ẩm cấm bật nguồn -> Sấy khô chân không -> Túi Faraday chắn sóng -> Trích xuất Bit-by-bit -> Quét vùng Unallocated -> Khôi phục tin nhắn."
  },
  {
    "id": "tm-168",
    "level": 168,
    "title": "Đo Quỹ Đạo Đường Đạn Bằng Bút Chiếu Laser",
    "category": "detective",
    "categoryName": "Thám Tử Nhí",
    "icon": "🎯",
    "difficulty": 3,
    "description": "Xác định vị trí kẻ bắn tỉa nấp sau cửa sổ căn nhà hoang đối diện.",
    "tasks": [
      {
        "id": "t1",
        "text": "Xác định lỗ thủng viên đạn xuyên qua kính cửa sổ và vết đạn găm trên tường phòng",
        "icon": "🪟",
        "hint": "Hai điểm xuyên qua xác định một đường thẳng hình học duy nhất trong không gian."
      },
      {
        "id": "t2",
        "text": "Luồn que định hướng đạo đạn bằng kim loại nhẹ xuyên qua hai điểm thủng",
        "icon": "🥢",
        "requires": [
          "t1"
        ],
        "hint": "Que kim loại tái hiện lại đường bay thẳng tắp của đầu đạn chì."
      },
      {
        "id": "t3",
        "text": "Gắn bút phát tia laser màu đỏ lên đầu que định hướng và bật công tắc",
        "icon": "🔴",
        "requires": [
          "t2"
        ],
        "hint": "Tia laser màu đỏ phóng vút ra ngoài không gian theo đường bay ngược lại."
      },
      {
        "id": "t4",
        "text": "Dùng thước đo góc kỹ thuật số đo góc tà (độ cao) và góc phương vị của tia laser",
        "icon": "📐",
        "requires": [
          "t3"
        ],
        "hint": "Đo chính xác góc bắn nghiêng 23 độ so với mặt đất."
      },
      {
        "id": "t5",
        "text": "Quan sát điểm sáng laser chiếu thẳng vào bệ cửa sổ tầng 3 của tòa nhà đối diện",
        "icon": "🏢",
        "requires": [
          "t3",
          "t4"
        ],
        "hint": "Tia laser vạch trần vị trí chính xác kẻ bắn tỉa từng đứng phục kích."
      },
      {
        "id": "t6",
        "text": "Đội cơ động tiếp cận tầng 3 thu giữ được vỏ đạn rơi vương vãi trên sàn nhà",
        "icon": "👮",
        "requires": [
          "t5"
        ],
        "hint": "Xác nhận hiện trường nổ súng chính xác tuyệt đối bằng hình học không gian."
      }
    ],
    "lesson": "Xác định 2 lỗ đạn -> Luồn que định hướng -> Bật bút laser đỏ -> Đo góc tà nghiêng -> Điểm sáng chỉ cửa sổ -> Thu giữ vỏ đạn."
  },
  {
    "id": "tm-169",
    "level": 169,
    "title": "Giám Định Tuổi Tranh Cổ Bằng Đồng Vị Carbon 14",
    "category": "detective",
    "categoryName": "Thám Tử Nhí",
    "icon": "🖼️",
    "difficulty": 4,
    "description": "Khoa học hạt nhân vạch trần bức tranh sơn dầu giả mạo cổ vật thế kỷ 17.",
    "tasks": [
      {
        "id": "t1",
        "text": "Dùng kính lúp soi góc mép vải bố khung tranh nơi sợi vải bị sờn rách",
        "icon": "🔍",
        "hint": "Chọn vị trí kín đáo lấy mẫu không làm ảnh hưởng tác phẩm nghệ thuật."
      },
      {
        "id": "t2",
        "text": "Dùng nhíp phẫu thuật gắp một mẩu sợi vải lanh dài 5mm nặng 2 miligam",
        "icon": "🤏",
        "requires": [
          "t1"
        ],
        "hint": "Sợi vải lanh có nguồn gốc từ thực vật lưu giữ nồng độ carbon khí quyển."
      },
      {
        "id": "t3",
        "text": "Rửa sạch mẫu sợi qua dung dịch Axit - Kiềm - Axit loại bỏ bụi bẩn và dầu mỡ",
        "icon": "🧪",
        "requires": [
          "t2"
        ],
        "hint": "Tẩy rửa tạp chất carbon hiện đại bám trên bề mặt sợi vải."
      },
      {
        "id": "t4",
        "text": "Đốt mẫu sợi trong ống thạch anh chân không biến thành khí CO2 tinh khiết",
        "icon": "🔥",
        "requires": [
          "t3"
        ],
        "hint": "Chuyển hóa carbon hữu cơ thành thể khí để đo đạc hạt nhân."
      },
      {
        "id": "t5",
        "text": "Đưa khí vào máy gia tốc khối phổ AMS đếm số lượng nguyên tử Carbon-14 còn lại",
        "icon": "⚛️",
        "requires": [
          "t4"
        ],
        "hint": "Đồng vị C-14 phân rã phóng xạ với chu kỳ bán rã 5730 năm."
      },
      {
        "id": "t6",
        "text": "Kết quả nồng độ C-14 cao đột biến vạch trần bức tranh được vẽ vào năm 1960 bằng vải bố hiện đại",
        "icon": "⚠️",
        "requires": [
          "t5"
        ],
        "hint": "Hạt nhân chứng minh bức tranh là đồ giả mạo tinh vi, không phải thế kỷ 17."
      }
    ],
    "lesson": "Soi mép vải lanh -> Gắp 2mg sợi -> Rửa sạch Axit Kiềm -> Đốt thành khí CO2 -> Máy gia tốc AMS đếm C-14 -> Vạch trần tranh giả."
  },
  {
    "id": "tm-170",
    "level": 170,
    "title": "Kiểm Tra Tiền Polymer Giả Bằng Đèn Tia Cực Tím",
    "category": "detective",
    "categoryName": "Thám Tử Nhí",
    "icon": "💵",
    "difficulty": 3,
    "description": "Phát hiện các yếu tố bảo an quang học của tờ tiền thật 500.000 đồng.",
    "tasks": [
      {
        "id": "t1",
        "text": "Sờ vuốt nhẹ lên vùng chân dung Bác Hồ cảm nhận nét in nổi ráp ráp ráp ở đầu ngón tay",
        "icon": "👆",
        "hint": "Tiền thật in công nghệ lõm Intaglio tạo độ nhám rõ rệt, tiền giả trơn nhẵn."
      },
      {
        "id": "t2",
        "text": "Soi tờ tiền trước ánh sáng trắng kiểm tra hình bóng chìm chân dung rõ nét",
        "icon": "💡",
        "requires": [
          "t1"
        ],
        "hint": "Hình bóng chìm tiền thật nhìn thấy rõ từ cả 2 mặt với các đường nét tinh tế."
      },
      {
        "id": "t3",
        "text": "Kiểm tra cửa sổ lớn trong suốt có dập nổi hình số 500.000 tinh xảo",
        "icon": "🪟",
        "requires": [
          "t2"
        ],
        "hint": "Cửa sổ nhựa trong suốt nguyên khối của màng polymer."
      },
      {
        "id": "t4",
        "text": "Nghiêng tờ tiền nhìn dải mực đổi màu OVI chuyển từ màu vàng sang màu xanh lá",
        "icon": "🌈",
        "requires": [
          "t3"
        ],
        "hint": "Mực quang học đổi màu theo góc nhìn độc quyền không thể photo màu."
      },
      {
        "id": "t5",
        "text": "Đặt tờ tiền dưới đèn tia cực tím UV bước sóng 365nm soi vùng mực tàng hình",
        "icon": "🟣",
        "requires": [
          "t4"
        ],
        "hint": "Mực huỳnh quang phát sáng rực rỡ mệnh giá tiền dưới ánh đèn tia cực tím."
      },
      {
        "id": "t6",
        "text": "Cụm số 500.000 phát sáng màu vàng cam rực rỡ khẳng định tờ tiền thật 100%",
        "icon": "✨",
        "requires": [
          "t5"
        ],
        "hint": "Toàn bộ 5 yếu tố bảo an trùng khớp xác nhận tờ tiền hợp pháp."
      }
    ],
    "lesson": "Sờ nét in nổi -> Soi hình bóng chìm -> Cửa sổ trong suốt -> Nghiêng mực đổi màu OVI -> Đèn UV soi huỳnh quang -> Tiền thật 100%."
  },
  {
    "id": "tm-171",
    "level": 171,
    "title": "Thu Thập Vi Sợi Vải Bằng Con Lăn Băng Keo",
    "category": "detective",
    "categoryName": "Thám Tử Nhí",
    "icon": "🧵",
    "difficulty": 3,
    "description": "Gom từng sợi chỉ áo len của kẻ trộm lưu lại trên ghế sofa da.",
    "tasks": [
      {
        "id": "t1",
        "text": "Bóc lớp giấy bảo vệ của con lăn băng keo dính chuyên dụng pháp y",
        "icon": "🩹",
        "hint": "Bề mặt keo dính đặc biệt không để lại vệt keo thừa trên vật chứng."
      },
      {
        "id": "t2",
        "text": "Lăn đều con lăn trên bề mặt đệm ghế sofa theo các đường zíc zắc vuông góc",
        "icon": "🛋️",
        "requires": [
          "t1"
        ],
        "hint": "Thu gom toàn bộ hạt bụi và sợi vải bám dính trên da ghế."
      },
      {
        "id": "t3",
        "text": "Dán màng nhựa trong suốt bảo vệ lên cuộn băng keo giữ nguyên vị trí sợi vải",
        "icon": "📜",
        "requires": [
          "t2"
        ],
        "hint": "Ngăn sợi vải rơi rụng hoặc nhiễm sợi lạ từ quần áo nhân viên."
      },
      {
        "id": "t4",
        "text": "Đưa màng dính lên kính hiển vi so sánh mẫu sợi với áo len màu đỏ của nghi phạm",
        "icon": "🔬",
        "requires": [
          "t3"
        ],
        "hint": "Kính hiển vi so sánh 2 thị trường quan sát hai sợi chỉ cùng lúc."
      },
      {
        "id": "t5",
        "text": "Đo đường kính sợi, kiểu dệt xoắn và phân tích quang phổ huỳnh quang màu nhuộm",
        "icon": "📐",
        "requires": [
          "t4"
        ],
        "hint": "Sợi len có tiết diện hình vảy cá và sắc tố đỏ hoàn toàn trùng khớp."
      },
      {
        "id": "t6",
        "text": "Khẳng định nghi phạm từng ngồi trên chiếc ghế sofa tại hiện trường lúc gây án",
        "icon": "🎯",
        "requires": [
          "t5"
        ],
        "hint": "Bằng chứng vật chất vi mô liên kết nghi phạm với hiện trường vụ án."
      }
    ],
    "lesson": "Bóc con lăn keo -> Lăn zíc zắc trên sofa -> Dán màng bảo vệ -> Soi kính hiển vi so sánh -> Phân tích kiểu dệt vảy cá -> Trùng khớp áo len."
  },
  {
    "id": "tm-172",
    "level": 172,
    "title": "Giám Định Vết Răng Cắn Trên Quả Táo Đối Chiếu Mẫu Nha Khoa",
    "category": "detective",
    "categoryName": "Thám Tử Nhí",
    "icon": "🍎",
    "difficulty": 3,
    "description": "Khoa học nha khoa pháp y: Vết răng cắn độc nhất vô nhị như dấu vân tay.",
    "tasks": [
      {
        "id": "t1",
        "text": "Chụp ảnh cận cảnh vết răng cắn trên quả táo dở kèm thước đo ABFO chữ L",
        "icon": "📸",
        "hint": "Thước chữ L kiểm soát độ biến dạng góc chụp ảnh."
      },
      {
        "id": "t2",
        "text": "Bảo quản quả táo trong dung dịch formalin 10% giữ nguyên kích thước không teo tóp",
        "icon": "🧪",
        "requires": [
          "t1"
        ],
        "hint": "Chống thối rữa và co ngót làm méo mó dấu răng cắn."
      },
      {
        "id": "t3",
        "text": "Đổ silicon nha khoa siêu mịn lên vết cắn tạo bản sao khuôn âm bản",
        "icon": "🦷",
        "requires": [
          "t2"
        ],
        "hint": "Silicon nha khoa sao chép từng vết mẻ và khoảng cách giữa các răng."
      },
      {
        "id": "t4",
        "text": "Lấy mẫu dấu răng hàm trên và hàm dưới của nghi phạm bằng thạch cao nha khoa",
        "icon": "😁",
        "requires": [
          "t1"
        ],
        "hint": "Tạo mô hình hàm răng 3D của người bị tình nghi."
      },
      {
        "id": "t5",
        "text": "Phần mềm 3D xếp chồng mô hình hàm răng nghi phạm lên vết cắn trên quả táo",
        "icon": "💻",
        "requires": [
          "t3",
          "t4"
        ],
        "hint": "Đối chiếu vết sứt của răng cửa số 21 và góc nghiêng của răng nanh."
      },
      {
        "id": "t6",
        "text": "Trùng khớp hoàn hảo 14 đặc điểm nha khoa: Nghi phạm chính là người cắn dở quả táo",
        "icon": "🍏",
        "requires": [
          "t5"
        ],
        "hint": "Vết răng cắn trở thành bằng chứng thép trước tòa án."
      }
    ],
    "lesson": "Chụp ảnh thước ABFO -> Ngâm formalin bảo quản -> Đúc silicon vết cắn -> Lấy dấu hàm nghi phạm -> Xếp chồng 3D -> Trùng 14 đặc điểm."
  },
  {
    "id": "tm-173",
    "level": 173,
    "title": "Phân Tích Độc Chất Bằng Máy Sắc Ký Khối Phổ GC-MS",
    "category": "detective",
    "categoryName": "Thám Tử Nhí",
    "icon": "🧪",
    "difficulty": 4,
    "description": "Truy tìm phân tử chất độc Cyanua ẩn giấu trong tách trà bằng cỗ máy hiện đại nhất.",
    "tasks": [
      {
        "id": "t1",
        "text": "Hút 1ml nước trà trong tách bằng pipet chính xác cho vào ống ly tâm",
        "icon": "🧪",
        "hint": "Ống nghiệm thủy tinh trơ không phản ứng với hóa chất."
      },
      {
        "id": "t2",
        "text": "Chiết tách độc chất bằng dung môi hữu cơ Diclorometan lắc đều trong 5 phút",
        "icon": "🔄",
        "requires": [
          "t1"
        ],
        "hint": "Độc chất hữu cơ hòa tan vào pha dung môi tách khỏi nước trà."
      },
      {
        "id": "t3",
        "text": "Quay ly tâm tốc độ 10.000 vòng/phút tách thành hai lớp chất lỏng phân tầng rõ rệt",
        "icon": "🌀",
        "requires": [
          "t2"
        ],
        "hint": "Thu lấy lớp dung môi trong suốt chứa độc chất ở đáy ống."
      },
      {
        "id": "t4",
        "text": "Tiêm 1 microlit mẫu vào buồng bay hơi của máy sắc ký khí GC ở nhiệt độ 280°C",
        "icon": "💉",
        "requires": [
          "t3"
        ],
        "hint": "Khí Heli đẩy các chất bay hơi chạy dọc theo cột sắc ký dài 30m."
      },
      {
        "id": "t5",
        "text": "Đầu dò khối phổ MS bắn phá phân tử thành các mảnh ion mang điện tích",
        "icon": "⚡",
        "requires": [
          "t4"
        ],
        "hint": "Phổ khối lượng phân mảnh ion như một chứng minh thư nhận dạng chất độc."
      },
      {
        "id": "t6",
        "text": "Màn hình hiện đỉnh pic khối lượng m/z = 65 khẳng định có độc chất Kali Xyanua",
        "icon": "☠️",
        "requires": [
          "t5"
        ],
        "hint": "Phát hiện độc chất cực mạnh ở nồng độ cực thấp một phần triệu (ppm)."
      }
    ],
    "lesson": "Lấy mẫu nước trà -> Chiết dung môi hữu cơ -> Quay ly tâm -> Tiêm vào máy sắc ký khí -> Bắn phá ion khối phổ -> Hiện đỉnh pic Cyanua."
  },
  {
    "id": "tm-174",
    "level": 174,
    "title": "Đối Chiếu Âm Phổ Giọng Nói Nhận Diện Kẻ Tống Tiền",
    "category": "detective",
    "categoryName": "Thám Tử Nhí",
    "icon": "🎙️",
    "difficulty": 4,
    "description": "Phân tích vân giọng nói (Voiceprint) vạch trần kẻ gọi điện thoại giả giọng.",
    "tasks": [
      {
        "id": "t1",
        "text": "Ghi âm cuộc gọi tống tiền và lọc sạch tiếng ồn nền tiếng gió và còi xe",
        "icon": "🎧",
        "hint": "Thuật toán lọc nhiễu âm thanh giữ lại giọng nói trong trẻo."
      },
      {
        "id": "t2",
        "text": "Thu thập mẫu ghi âm giọng nói chuẩn của nghi phạm khi thẩm vấn tại đồn",
        "icon": "🗣️",
        "requires": [
          "t1"
        ],
        "hint": "Nghi phạm đọc lại đúng các câu chữ xuất hiện trong cuộc gọi tống tiền."
      },
      {
        "id": "t3",
        "text": "Chuyển đổi file âm thanh thành biểu đồ âm phổ Spectrogram theo thời gian và tần số",
        "icon": "📊",
        "requires": [
          "t2"
        ],
        "hint": "Biểu đồ âm phổ trực quan hóa cao độ, âm sắc và cường độ âm thanh."
      },
      {
        "id": "t4",
        "text": "Đo đạc tần số cơ bản F0 và các dải cộng hưởng Formant (F1, F2, F3) của thanh quản",
        "icon": "📐",
        "requires": [
          "t3"
        ],
        "hint": "Kích thước vòm họng và dây thanh quản của mỗi người tạo nên dải Formant bất biến."
      },
      {
        "id": "t5",
        "text": "Kẻ tống tiền dùng khăn bịt mũi giả giọng nhưng dải tần số Formant không thể thay đổi",
        "icon": "🎭",
        "requires": [
          "t4"
        ],
        "hint": "Cấu trúc xương sọ tự nhiên quyết định âm sắc độc nhất vô nhị."
      },
      {
        "id": "t6",
        "text": "Biểu đồ âm phổ trùng khớp 98%: Xác định chính xác giọng nói của Nghi phạm C",
        "icon": "✅",
        "requires": [
          "t5"
        ],
        "hint": "Bằng chứng âm thanh sinh trắc học bác bỏ mọi lời chối cãi."
      }
    ],
    "lesson": "Lọc sạch âm cuộc gọi -> Thu mẫu giọng thẩm vấn -> Biểu đồ âm phổ Spectrogram -> Đo dải Formant F1-F3 -> Vạch trần giả giọng -> Trùng khớp 98%."
  },
  {
    "id": "tm-175",
    "level": 175,
    "title": "Giải Mã Bức Thư Viết Bằng Mực Vô Hình Nước Chanh",
    "category": "detective",
    "categoryName": "Thám Tử Nhí",
    "icon": "🍋",
    "difficulty": 3,
    "description": "Khoa học hóa học: Làm hiện hình dòng chữ bí mật viết bằng axit hữu cơ.",
    "tasks": [
      {
        "id": "t1",
        "text": "Quan sát tờ giấy trắng tinh dưới ánh đèn xiên thấy các vết lõm cào nhẹ của ngòi bút",
        "icon": "📄",
        "hint": "Áp lực ngòi bút để lại các rãnh lún mờ nhạt trên sợi xenlulozo."
      },
      {
        "id": "t2",
        "text": "Dùng bút chì 2B chà nhẹ nhàng nghiêng mặt ngòi lên tờ giấy để đọc dấu vết hằn",
        "icon": "✏️",
        "requires": [
          "t1"
        ],
        "hint": "Vết hằn cơ học lộ ra các nét chữ mờ ban đầu."
      },
      {
        "id": "t3",
        "text": "Bật bàn ủi nhiệt độ thấp hoặc máy sấy tóc thổi luồng khí nóng 80°C vào tờ giấy",
        "icon": "💨",
        "requires": [
          "t1"
        ],
        "hint": "Nhiệt độ kích hoạt phản ứng oxy hóa axit hữu cơ trong nước chanh."
      },
      {
        "id": "t4",
        "text": "Axit citric trong nước chanh làm phân hủy sợi giấy ở nhiệt độ thấp hơn giấy thường",
        "icon": "🧪",
        "requires": [
          "t3"
        ],
        "hint": "Phản ứng cacbon hóa biến vết nước chanh thành các hợp chất màu nâu sẫm."
      },
      {
        "id": "t5",
        "text": "Các dòng chữ màu nâu cánh gián hiện hình rõ nét từng chữ một trên trang giấy",
        "icon": "📜",
        "requires": [
          "t4"
        ],
        "hint": "Bức thư tuyệt mật hiện nguyên hình không sót một chữ nào."
      },
      {
        "id": "t6",
        "text": "Đọc được nội dung: Kho báu giấu dưới gốc cây đa cổ thụ lúc nửa đêm rằm",
        "icon": "🗝️",
        "requires": [
          "t5"
        ],
        "hint": "Thám tử nhí phá giải thành công bức thư mật mã kỳ thú."
      }
    ],
    "lesson": "Soi vết lún ngòi bút -> Chà chì 2B đọc vết hằn -> Sấy nhiệt độ ấm -> Axit chanh cacbon hóa -> Chữ hiện màu nâu -> Đọc thông điệp mật."
  },
  {
    "id": "tm-176",
    "level": 176,
    "title": "Dựng Chân Dung 3D Nghi Phạm Từ Lời Khai Nhân Chứng",
    "category": "detective",
    "categoryName": "Thám Tử Nhí",
    "icon": "👤",
    "difficulty": 3,
    "description": "Phần mềm đồ họa pháp y biến trí nhớ của nhân chứng thành khuôn mặt 3D chân thực.",
    "tasks": [
      {
        "id": "t1",
        "text": "Trò chuyện thân mật trấn an nhân chứng nhớ lại đặc điểm nổi bật nhất của kẻ lạ mặt",
        "icon": "🗣️",
        "hint": "Tạo tâm lý thoải mái giúp não bộ truy xuất ký ức hình ảnh tốt nhất."
      },
      {
        "id": "t2",
        "text": "Chọn khung hình dạng khuôn mặt: Mặt chữ điền góc cạnh có cằm vuông",
        "icon": "🖼️",
        "requires": [
          "t1"
        ],
        "hint": "Định hình cấu trúc xương hàm tổng thể làm nền tảng."
      },
      {
        "id": "t3",
        "text": "Lựa chọn đôi mắt một mí hơi xếch và lông mày rậm rạp hình lưỡi mác",
        "icon": "👁️",
        "requires": [
          "t2"
        ],
        "hint": "Đôi mắt là linh hồn của bức chân dung nhận diện."
      },
      {
        "id": "t4",
        "text": "Thêm đặc điểm nhận dạng đặc biệt: Vết sẹo dài 2cm ở đuôi lông mày bên trái",
        "icon": "⚡",
        "requires": [
          "t3"
        ],
        "hint": "Dấu vết cá biệt giúp thu hẹp 99% phạm vi tìm kiếm."
      },
      {
        "id": "t5",
        "text": "Hiệu chỉnh độ tuổi, nếp nhăn đuôi mắt và màu da ngăm đen rám nắng",
        "icon": "👴",
        "requires": [
          "t4"
        ],
        "hint": "Tái hiện chính xác thần thái và độ tuổi sinh học khoảng 35 tuổi."
      },
      {
        "id": "t6",
        "text": "Nhân chứng thốt lên: Đúng là hắn rồi! và xuất file ảnh lệnh truy nã toàn quốc",
        "icon": "📢",
        "requires": [
          "t5"
        ],
        "hint": "Bức ảnh chân dung được gửi tới hàng ngàn trạm kiểm soát giao thông."
      }
    ],
    "lesson": "Trấn an nhân chứng -> Chọn khung mặt chữ điền -> Ghép mắt mũi lông mày -> Thêm vết sẹo đặc biệt -> Chỉnh nếp nhăn màu da -> Xuất ảnh truy nã."
  },
  {
    "id": "tm-177",
    "level": 177,
    "title": "Đối Soát Dữ Liệu Thu Phí Không Dừng ETC Vạch Trần Ngoại Phạm",
    "category": "detective",
    "categoryName": "Thám Tử Nhí",
    "icon": "🚗",
    "difficulty": 4,
    "description": "Chứng cứ số học bác bỏ lời khai gian dối của nghi phạm tuyên bố đang ở nhà ngủ.",
    "tasks": [
      {
        "id": "t1",
        "text": "Nghi phạm khai: Tối qua tôi ở nhà tại Hà Nội xem tivi từ 20h đến 24h",
        "icon": "📺",
        "hint": "Lời khai ngoại phạm cần được đối chiếu kiểm tra thực tế."
      },
      {
        "id": "t2",
        "text": "Truy xuất cơ sở dữ liệu hệ thống thu phí không dừng ETC trên cao tốc Hà Nội - Hải Phòng",
        "icon": "💾",
        "requires": [
          "t1"
        ],
        "hint": "Hệ thống thẻ RFID ghi nhận chính xác từng giây xe qua trạm."
      },
      {
        "id": "t3",
        "text": "Tìm kiếm biển số xe của nghi phạm phát hiện xe qua trạm thu phí Văn Giang lúc 21h15",
        "icon": "🔍",
        "requires": [
          "t2"
        ],
        "hint": "Thẻ ePass trên kính lái tự động kích hoạt trừ tiền tài khoản."
      },
      {
        "id": "t4",
        "text": "Trích xuất ảnh chụp camera hồng ngoại chụp rõ mặt nghi phạm đang cầm vô-lăng lái xe",
        "icon": "📸",
        "requires": [
          "t3"
        ],
        "hint": "Camera độ phân giải cao chụp xuyên qua kính lái ban đêm."
      },
      {
        "id": "t5",
        "text": "Xe ra khỏi trạm thu phí Hải Phòng lúc 22h05 đúng 15 phút trước khi vụ án xảy ra",
        "icon": "🏁",
        "requires": [
          "t4"
        ],
        "hint": "Khoảng cách và thời gian hoàn toàn khớp với hiện trường gây án."
      },
      {
        "id": "t6",
        "text": "Đưa bức ảnh camera ETC ra bàn thẩm vấn: Nghi phạm cúi đầu nhận tội trước chứng cứ thép",
        "icon": "⚖️",
        "requires": [
          "t5"
        ],
        "hint": "Dữ liệu công nghệ số vạch trần hoàn toàn lời khai ngoại phạm giả tạo."
      }
    ],
    "lesson": "Ghi nhận lời khai -> Truy xuất dữ liệu ETC -> Tìm vết xe qua trạm -> Trích ảnh camera hồng ngoại -> Tính thời gian di chuyển -> Đập tan chứng cứ ngoại phạm."
  },
  {
    "id": "tm-178",
    "level": 178,
    "title": "Phân Tích Hạt Phấn Hoa Xác Định Vị Trí Hiện Trường Gốc",
    "category": "detective",
    "categoryName": "Thám Tử Nhí",
    "icon": "🌸",
    "difficulty": 4,
    "description": "Khoa học phấn hoa pháp y (Forensic Palynology) tìm ra cánh đồng hoa nơi nạn nhân bị bắt cóc.",
    "tasks": [
      {
        "id": "t1",
        "text": "Dùng bàn chải sạch chải nhẹ lấy lớp đất bùn khô bám ở rãnh đế giày nghi phạm",
        "icon": "👞",
        "hint": "Đất bùn lưu giữ hàng ngàn hạt phấn hoa của thảm thực vật từng đi qua."
      },
      {
        "id": "t2",
        "text": "Ngâm mẫu đất trong axit flohydric HF để hòa tan hết các hạt cát silicat khoáng chất",
        "icon": "🧪",
        "requires": [
          "t1"
        ],
        "hint": "Vỏ hạt phấn hoa bằng chất Sporopollenin siêu bền không bị axit ăn mòn."
      },
      {
        "id": "t3",
        "text": "Quay ly tâm thu lấy lớp cặn hữu cơ tập trung chứa toàn bộ hạt phấn hoa",
        "icon": "🌀",
        "requires": [
          "t2"
        ],
        "hint": "Tách hạt phấn hoa tinh khiết ra khỏi đất đá."
      },
      {
        "id": "t4",
        "text": "Nhỏ giọt phẩm màu Fuchsin nhuộm hồng mẫu hạt phấn và đặt lên lam kính hiển vi",
        "icon": "🔬",
        "requires": [
          "t3"
        ],
        "hint": "Nhuộm màu làm nổi bật các gai nhọn và lỗ khí khổng trên vỏ phấn hoa."
      },
      {
        "id": "t5",
        "text": "Chuyên gia thực vật học nhận diện hạt phấn hoa có gai hình cầu của loài hoa Tam Giác Mạch",
        "icon": "🌸",
        "requires": [
          "t4"
        ],
        "hint": "Hoa Tam Giác Mạch chỉ nở rộ vào tháng 11 tại cao nguyên đá Đồng Văn."
      },
      {
        "id": "t6",
        "text": "Khoanh vùng tìm kiếm và cảnh sát giải cứu nạn nhân thành công tại thung lũng hoa Tam Giác Mạch",
        "icon": "🏔️",
        "requires": [
          "t5"
        ],
        "hint": "Hạt phấn hoa siêu nhỏ trở thành kim chỉ nam phá giải vụ án ly kỳ."
      }
    ],
    "lesson": "Cạo bùn đế giày -> Axit HF hòa tan cát -> Quay ly tâm tách cặn -> Nhuộm màu Fuchsin -> Soi kính hiển vi nhận dạng hoa -> Khoanh vùng giải cứu."
  },
  {
    "id": "tm-179",
    "level": 179,
    "title": "Giám Định Vết Nứt Kính Vỡ Xác Định Hướng Bắn",
    "category": "detective",
    "categoryName": "Thám Tử Nhí",
    "icon": "🪟",
    "difficulty": 3,
    "description": "Khoa học vết nứt xuyên tâm (Radial) và đồng tâm (Concentric) giải mã viên đạn bắn từ trong hay ngoài.",
    "tasks": [
      {
        "id": "t1",
        "text": "Thu thập cẩn thận các mảnh kính vỡ quanh cửa sổ và dán ghép lại như tranh ghép hình",
        "icon": "🧩",
        "hint": "Tái dựng lại hình dáng ban đầu của tấm kính cửa sổ."
      },
      {
        "id": "t2",
        "text": "Quan sát miệng lỗ thủng: Miệng lỗ ở mặt thoát ra luôn loe rộng hơn mặt đi vào",
        "icon": "🕳️",
        "requires": [
          "t1"
        ],
        "hint": "Viên đạn đẩy phôi kính văng ra tạo hình miệng nón cụt mở rộng về hướng bay."
      },
      {
        "id": "t3",
        "text": "Quan sát hệ thống vết nứt hình nan hoa (Radial Cracks) tỏa ra từ tâm lỗ thủng",
        "icon": "☀️",
        "requires": [
          "t2"
        ],
        "hint": "Vết nứt xuyên tâm xuất hiện đầu tiên ở mặt đối diện với lực va đập."
      },
      {
        "id": "t4",
        "text": "Quan sát các vết nứt vòng tròn đồng tâm (Concentric Cracks) nối giữa các nan hoa",
        "icon": "⭕",
        "requires": [
          "t3"
        ],
        "hint": "Vết nứt đồng tâm xuất hiện sau do tấm kính bị uốn cong."
      },
      {
        "id": "t5",
        "text": "Soi kính lúp kiểm tra đường gờ gãy vỏ sò (Conchoidal Marks) trên cạnh mảnh kính vỡ",
        "icon": "🐚",
        "requires": [
          "t4"
        ],
        "hint": "Quy tắc 4R: Đường gờ gãy tạo góc vuông ở mặt đối diện mặt chịu lực bắn."
      },
      {
        "id": "t6",
        "text": "Kết luận chắc chắn: Viên đạn được bắn từ phía ngoài đường xuyên vào trong phòng",
        "icon": "🎯",
        "requires": [
          "t5"
        ],
        "hint": "Bác bỏ lời khai ngụy biện của kẻ tình nghi cho rằng súng cướp cò trong nhà."
      }
    ],
    "lesson": "Ghép mảnh kính vỡ -> Miệng loe mặt thoát -> Nứt xuyên tâm nan hoa -> Nứt vòng đồng tâm -> Soi gờ vỏ sò 4R -> Xác định hướng bắn ngoài vào."
  },
  {
    "id": "tm-180",
    "level": 180,
    "title": "Màn Trùm: Phá Án Bí Ẩn Căn Phòng Khóa Kín",
    "category": "detective",
    "categoryName": "Thám Tử Nhí",
    "icon": "🕵️",
    "difficulty": 5,
    "description": "Vụ án hóc búa nhất: Căn phòng khóa trái cửa từ bên trong và bức thư tuyệt mệnh giả mạo!",
    "distractors": [
      {
        "id": "d1",
        "text": "Kết luận ngay nạn nhân tự sát và đóng hồ sơ vụ án vì cửa khóa trong",
        "icon": "⚠️",
        "failReason": "Kết luận vội vã bỏ qua cơ chế gài bẫy chốt cửa tinh vi của kẻ giết người!"
      }
    ],
    "tasks": [
      {
        "id": "t1",
        "text": "Quan sát chốt cửa bên trong phòng đang cài chặt nhưng dưới khe cửa có sợi cước nhỏ",
        "icon": "🧵",
        "hint": "Sợi dây cước câu cá mảnh mai là đầu mối của cơ chế khóa cửa từ xa."
      },
      {
        "id": "t2",
        "text": "Kiểm tra tay nắm chốt cửa phát hiện dấu ma sát của sợi cước luồn qua thanh chốt",
        "icon": "🔍",
        "requires": [
          "t1"
        ],
        "hint": "Thủ phạm đứng ngoài hành lang kéo dây cước làm sập chốt cửa bên trong."
      },
      {
        "id": "t3",
        "text": "Soi tia cực tím UV phát hiện vết ngón tay đeo găng cao su dính dầu mỡ trên sợi cước",
        "icon": "🟣",
        "requires": [
          "t2"
        ],
        "hint": "Thủ phạm đã chuẩn bị găng tay kỹ lưỡng nhưng sơ suất để lại vi sợi vải."
      },
      {
        "id": "t4",
        "text": "Giám định bức thư tuyệt mệnh: Nét chữ bị ép buộc viết run rẩy dưới sự đe dọa",
        "icon": "📝",
        "requires": [
          "t2"
        ],
        "hint": "Áp lực tâm lý làm nét chữ ngắt quãng không tự nhiên."
      },
      {
        "id": "t5",
        "text": "Trích xuất camera hành lang: Phát hiện bóng dáng gã quản gia lén lút rút sợi cước lúc 23h",
        "icon": "📹",
        "requires": [
          "t3",
          "t4"
        ],
        "hint": "Khoảnh khắc thủ phạm hoàn tất màn dàn dựng căn phòng khóa kín bị camera ghi lại."
      },
      {
        "id": "t6",
        "text": "Bắt giữ gã quản gia tham lam thu hồi toàn bộ viên kim cương bị cất giấu dưới đáy vali",
        "icon": "💎",
        "requires": [
          "t5"
        ],
        "hint": "Thám tử Bách phá giải vụ án căn phòng khóa kín kinh điển vang danh lừng lẫy!"
      }
    ],
    "lesson": "Phát hiện sợi cước khe cửa -> Tìm vết ma sát chốt -> Soi UV vết găng tay -> Giám định chữ viết run -> Camera lật tẩy quản gia -> Phá án bắt giữ."
  },
  {
    "id": "tm-181",
    "level": 181,
    "title": "Lắp Ráp Tên Lửa Đẩy Siêu Nặng Artemis Tại Bệ Phóng",
    "category": "megaproject",
    "categoryName": "Căn Cứ Mặt Trăng",
    "icon": "🚀",
    "difficulty": 4,
    "description": "Giai đoạn 1: Lắp ghép cỗ máy tên lửa cao 100 mét với lực đẩy 4.000 tấn sẵn sàng rời Trái Đất.",
    "anchors": [
      {
        "position": 0,
        "taskId": "t1",
        "locked": true
      }
    ],
    "tasks": [
      {
        "id": "t1",
        "text": "Mốc Neo: Dựng thẳng đứng tầng lõi trung tâm Core Stage màu cam trên bệ phóng di động",
        "icon": "🗼",
        "hint": "Tầng lõi chứa 2.7 triệu lít nhiên liệu Hydro lỏng và Oxy lỏng."
      },
      {
        "id": "t2",
        "text": "Cẩu tháp lắp 2 tên lửa đẩy nhiên liệu rắn khổng lồ (SRB) gắn chặt vào hai bên hông",
        "icon": "🧨",
        "requires": [
          "t1"
        ],
        "hint": "Hai tên lửa đẩy phụ cung cấp 75% lực đẩy ban đầu để thắng trọng lực Trái Đất."
      },
      {
        "id": "t3",
        "text": "Lắp ráp cụm 4 động cơ tên lửa RS-25 dưới đáy tầng lõi trung tâm",
        "icon": "🔥",
        "requires": [
          "t1"
        ],
        "hint": "Bốn động cơ đốt Hydro lỏng tạo ngọn lửa xanh nhiệt độ 3300°C."
      },
      {
        "id": "t4",
        "text": "Đặt tầng đẩy quỹ đạo thứ hai ICPS lên đỉnh tầng lõi trung tâm",
        "icon": "🛰️",
        "requires": [
          "t2",
          "t3"
        ],
        "hint": "Tầng đẩy phụ trách việc đẩy tàu thoát ly lực hút Trái Đất tới Mặt Trăng."
      },
      {
        "id": "t5",
        "text": "Gắn tàu vũ trụ Orion chở các thiết bị khoa học và module đổ bộ lên chóp tên lửa",
        "icon": "🛸",
        "requires": [
          "t4"
        ],
        "hint": "Khoang tàu bảo vệ tải trọng với khiên nhiệt gốm chịu nhiệt 2800°C."
      },
      {
        "id": "t6",
        "text": "Lắp tháp thoát hiểm khẩn cấp LAS trên đỉnh cùng và kéo bệ phóng ra vị trí xuất phát 39B",
        "icon": "🚀",
        "requires": [
          "t5"
        ],
        "hint": "Toàn bộ tên lửa siêu nặng sừng sững sẵn sàng cho khoảnh khắc lịch sử."
      }
    ],
    "lesson": "Dựng tầng lõi cam -> Gắn 2 tên lửa đẩy phụ SRB -> Lắp 4 động cơ RS-25 -> Lắp tầng đẩy quỹ đạo -> Gắn tàu Orion -> Tháp thoát hiểm LAS."
  },
  {
    "id": "tm-182",
    "level": 182,
    "title": "Khai Hỏa Phóng Tàu Và Tách Tầng Đẩy Quỹ Đạo Trái Đất",
    "category": "megaproject",
    "categoryName": "Căn Cứ Mặt Trăng",
    "icon": "🔥",
    "difficulty": 4,
    "description": "Khoảnh khắc đếm ngược: Tên lửa xé toạc bầu khí quyển đưa khoang hàng vào quỹ đạo đệm.",
    "tasks": [
      {
        "id": "t1",
        "text": "Đồng hồ đếm ngược T-minus 10 giây: Bật hệ thống xả 1 triệu lít nước giảm thanh chấn động",
        "icon": "🌊",
        "hint": "Màn nước hấp thụ sóng âm bảo vệ thân tên lửa khỏi bị sóng xung kích phá hủy."
      },
      {
        "id": "t2",
        "text": "Khai hỏa 4 động cơ RS-25 và điểm hỏa đồng thời 2 tên lửa phụ SRB phóng vút lên trời",
        "icon": "🔥",
        "requires": [
          "t1"
        ],
        "hint": "Lực đẩy 39 triệu Newton nâng cỗ máy nặng 2600 tấn bay lên trời cao."
      },
      {
        "id": "t3",
        "text": "Sau 2 phút ở độ cao 45km, tách bỏ hai vỏ tên lửa phụ SRB rơi xuống biển Đại Tây Dương",
        "icon": "🧨",
        "requires": [
          "t2"
        ],
        "hint": "Nhiên liệu rắn cháy hết, tách bỏ để giảm tải trọng cho tầng lõi tiếp tục tăng tốc."
      },
      {
        "id": "t4",
        "text": "Động cơ tầng lõi đốt hết nhiên liệu Hydro lỏng và tách rơi về bầu khí quyển",
        "icon": "🚀",
        "requires": [
          "t3"
        ],
        "hint": "Tên lửa đạt tốc độ 28.000 km/h bay vòng quanh Trái Đất."
      },
      {
        "id": "t5",
        "text": "Động cơ tầng hai ICPS khai hỏa trong 30 giây đưa tàu vào quỹ đạo đệm hình tròn cách mặt đất 180km",
        "icon": "🌍",
        "requires": [
          "t4"
        ],
        "hint": "Tàu bay ổn định quanh Trái Đất để kiểm tra toàn bộ các cảm biến hệ thống."
      },
      {
        "id": "t6",
        "text": "Mở các cánh pin mặt trời hình cánh quạt của tàu Orion đón ánh sáng nạp điện",
        "icon": "✨",
        "requires": [
          "t5"
        ],
        "hint": "Hệ thống điện sẵn sàng cho hành trình bay xa 384.400 km tới Mặt Trăng."
      }
    ],
    "lesson": "Xả nước giảm âm -> Khai hỏa phóng -> Tách 2 tên lửa phụ -> Tách tầng lõi -> Động cơ tầng 2 vào quỹ đạo -> Bung pin mặt trời."
  },
  {
    "id": "tm-183",
    "level": 183,
    "title": "Đốt Động Cơ TLI Đưa Tàu Thoát Ly Hướng Tới Mặt Trăng",
    "category": "megaproject",
    "categoryName": "Căn Cứ Mặt Trăng",
    "icon": "🌌",
    "difficulty": 4,
    "description": "Cú hích động lực học TLI (Trans-Lunar Injection) đạt vận tốc vũ trụ cấp hai 40.000 km/h.",
    "tasks": [
      {
        "id": "t1",
        "text": "Máy tính dẫn đường tính toán cửa sổ phóng và căn chỉnh góc nghiêng 28.5 độ",
        "icon": "💻",
        "hint": "Điểm đốt động cơ chuẩn xác để quỹ đạo cắt ngang đường đi của Mặt Trăng."
      },
      {
        "id": "t2",
        "text": "Khai hỏa động cơ RL-10 của tầng đẩy thứ hai đốt liên tục trong 18 phút",
        "icon": "🔥",
        "requires": [
          "t1"
        ],
        "hint": "Cú đốt động cơ TLI gia tốc con tàu từ 28.000 km/h lên 39.500 km/h."
      },
      {
        "id": "t3",
        "text": "Vượt qua vận tốc vũ trụ cấp hai thoát ly hoàn toàn khỏi giếng trọng lực của Trái Đất",
        "icon": "🚀",
        "requires": [
          "t2"
        ],
        "hint": "Con tàu bay theo quỹ đạo elip vươn thẳng tới vùng không gian sâu."
      },
      {
        "id": "t4",
        "text": "Tách bỏ tầng đẩy thứ hai ICPS sau khi hoàn thành nhiệm vụ đẩy tàu",
        "icon": "🛰️",
        "requires": [
          "t3"
        ],
        "hint": "Tầng đẩy tách ra trôi dạt vào quỹ đạo nhật tâm quanh Mặt Trời."
      },
      {
        "id": "t5",
        "text": "Tàu Orion kích hoạt hệ thống đẩy phụ điều chỉnh quỹ đạo giữa hành trình (TCM-1)",
        "icon": "🎯",
        "requires": [
          "t4"
        ],
        "hint": "Hiệu chỉnh sai số đường bay nhỏ bằng các động cơ đẩy phản lực RCS."
      },
      {
        "id": "t6",
        "text": "Bật ăng-ten chảo cao tần bắt sóng liên lạc với Mạng lưới Không gian Sâu DSN của Trái Đất",
        "icon": "📡",
        "requires": [
          "t5"
        ],
        "hint": "Duy trì kênh truyền dữ liệu video 4K và lệnh điều khiển từ mặt đất."
      }
    ],
    "lesson": "Tính toán cửa sổ TLI -> Đốt động cơ RL-10 18 phút -> Vượt vận tốc 40.000km/h -> Tách tầng đẩy -> Hiệu chỉnh quỹ đạo TCM-1 -> Bắt sóng mạng DSN."
  },
  {
    "id": "tm-184",
    "level": 184,
    "title": "Phanh Giảm Tốc Đi Vào Quỹ Đạo Cực Mặt Trăng",
    "category": "megaproject",
    "categoryName": "Căn Cứ Mặt Trăng",
    "icon": "🌕",
    "difficulty": 4,
    "description": "Khai hỏa ngược chiều giảm tốc để trọng lực Mặt Trăng bắt giữ con tàu an toàn.",
    "tasks": [
      {
        "id": "t1",
        "text": "Sau 3 ngày bay qua không gian, con tàu tiến vào vùng ảnh hưởng trọng lực Mặt Trăng",
        "icon": "🌑",
        "hint": "Lực hút của Mặt Trăng bắt đầu kéo mạnh con tàu về phía mình."
      },
      {
        "id": "t2",
        "text": "Hệ thống phản lực xoay thân tàu 180 độ quay vòi phun động cơ chính về phía trước",
        "icon": "🔄",
        "requires": [
          "t1"
        ],
        "hint": "Chuẩn bị khai hỏa ngược chiều chuyển động để hãm phanh."
      },
      {
        "id": "t3",
        "text": "Khai hỏa động cơ chính của module dịch vụ bay ngược hướng trong 12 phút (LOI)",
        "icon": "🔥",
        "requires": [
          "t2"
        ],
        "hint": "Cú đốt hãm phanh Lunar Orbit Insertion giảm vận tốc con tàu xuống 1.6 km/s."
      },
      {
        "id": "t4",
        "text": "Trọng lực Mặt Trăng bắt giữ con tàu đi vào quỹ đạo cực cách bề mặt 100km",
        "icon": "🛰️",
        "requires": [
          "t3"
        ],
        "hint": "Quỹ đạo cực bay qua hai cực Bắc - Nam cho phép quét toàn bộ bề mặt thiên thể."
      },
      {
        "id": "t5",
        "text": "Bật radar quét cao độ Altimeter quét địa hình miệng núi lửa Shackleton ở Cực Nam",
        "icon": "📡",
        "requires": [
          "t4"
        ],
        "hint": "Vùng Cực Nam Mặt Trăng có trữ lượng băng ngầm khổng lồ và đỉnh núi luôn ngập nắng."
      },
      {
        "id": "t6",
        "text": "Xác định tọa độ bãi đáp phẳng phiu an toàn không có tảng đá lớn chắn đường",
        "icon": "🎯",
        "requires": [
          "t5"
        ],
        "hint": "Bãi đáp được chọn sẵn sàng cho module hạ cánh đổ bộ lịch sử."
      }
    ],
    "lesson": "Vào vùng trọng lực -> Xoay ngược vòi phun 180 độ -> Khai hỏa hãm phanh LOI -> Quỹ đạo cực 100km -> Quét radar địa hình Cực Nam -> Chọn bãi đáp Shackleton."
  },
  {
    "id": "tm-185",
    "level": 185,
    "title": "Tàu Đổ Bộ Đáp Xuống Miệng Núi Lửa Shackleton",
    "category": "megaproject",
    "categoryName": "Căn Cứ Mặt Trăng",
    "icon": "🛸",
    "difficulty": 5,
    "description": "7 phút nghẹt thở: Tàu đổ bộ tự động điều hướng hạ cánh êm ái trên bụi đá Cực Nam.",
    "tasks": [
      {
        "id": "t1",
        "text": "Tách module tàu đổ bộ Lander rời khỏi tàu mẹ bay lượn trên quỹ đạo",
        "icon": "🛸",
        "hint": "Tàu đổ bộ mang theo toàn bộ thiết bị xây dựng căn cứ tiền trạm."
      },
      {
        "id": "t2",
        "text": "Khai hỏa động cơ hạ cánh giảm dần độ cao từ 100km xuống 15km",
        "icon": "🔥",
        "requires": [
          "t1"
        ],
        "hint": "Động cơ biến đổi lực đẩy bóp nghẹt gia tốc rơi tự do."
      },
      {
        "id": "t3",
        "text": "Cảm biến LiDAR quét bề mặt địa hình 3D nhận diện hố sâu và tảng đá nhọn",
        "icon": "👁️",
        "requires": [
          "t2"
        ],
        "hint": "Hệ thống AI tự động né tránh chướng ngại vật tìm điểm tiếp đất êm ái."
      },
      {
        "id": "t4",
        "text": "Bung 4 chân hạ cánh hợp kim titan có đệm nhôm tổ ong giảm chấn",
        "icon": "🦵",
        "requires": [
          "t3"
        ],
        "hint": "Chân đáp xòe rộng hấp thụ xung lực khi chạm vào nền đá mặt trăng."
      },
      {
        "id": "t5",
        "text": "Động cơ hạ công suất xuống 30% giữ tàu lơ lửng và từ từ hạ xuống vận tốc 1m/s",
        "icon": "💨",
        "requires": [
          "t4"
        ],
        "hint": "Luồng khí thổi bay lớp bụi mặt trăng mù mịt dưới gầm tàu."
      },
      {
        "id": "t6",
        "text": "Bốn chân đáp cắm chặt xuống nền đá: Tàu đổ bộ hạ cánh thành công an toàn!",
        "icon": "🌕",
        "requires": [
          "t5"
        ],
        "hint": "Tiếng reo hò vang dội trung tâm điều hành mặt đất: Nhân loại đã trở lại Mặt Trăng!"
      }
    ],
    "lesson": "Tách tàu đổ bộ -> Khai hỏa giảm độ cao -> LiDAR quét né đá hố -> Bung 4 chân titan -> Hạ êm 1m/s -> Chạm đất thành công an toàn."
  },
  {
    "id": "tm-186",
    "level": 186,
    "title": "Hạ Xe Tự Hành Robot Rover Khám Phá Địa Hình",
    "category": "megaproject",
    "categoryName": "Căn Cứ Mặt Trăng",
    "icon": "🚜",
    "difficulty": 4,
    "description": "Giai đoạn 2: Xe robot bánh xích kim loại lăn bánh thăm dò khoáng sản quanh bãi đáp.",
    "tasks": [
      {
        "id": "t1",
        "text": "Mở cánh cửa khoang hàng bên hông tàu đổ bộ Lander",
        "icon": "🚪",
        "hint": "Khoang hàng bảo vệ xe tự hành trong suốt chuyến bay dài."
      },
      {
        "id": "t2",
        "text": "Bật tời cáp điện từ từ thả xe tự hành Rover xuống bề mặt đá mặt trăng",
        "icon": "🏗️",
        "requires": [
          "t1"
        ],
        "hint": "Hạ xe nhẹ nhàng với trọng lực chỉ bằng 1/6 Trái Đất."
      },
      {
        "id": "t3",
        "text": "Mở rộng 6 bánh xe kim loại lưới thép đàn hồi không bao giờ bị xẹp lốp",
        "icon": "🛞",
        "requires": [
          "t2"
        ],
        "hint": "Lốp kim loại lưới titan bám tốt trên cát mịn và đá dăm sắc nhọn."
      },
      {
        "id": "t4",
        "text": "Nâng cột buồm camera xoay 360 độ và bắt đầu truyền hình ảnh toàn cảnh về trạm",
        "icon": "📷",
        "requires": [
          "t3"
        ],
        "hint": "Hình ảnh hoang sơ tráng lệ của miệng núi lửa Shackleton hiện rõ."
      },
      {
        "id": "t5",
        "text": "Cánh tay robot trước đầu xe cắm lá cờ công trình đánh dấu vị trí Căn Cứ Tương Lai",
        "icon": "🚩",
        "requires": [
          "t4"
        ],
        "hint": "Mốc son lịch sử khởi công xây dựng ngôi nhà ngoài vũ trụ đầu tiên."
      },
      {
        "id": "t6",
        "text": "Xe Rover lăn bánh chạy thử 100 mét kiểm tra động cơ trục quay độc lập",
        "icon": "🚜",
        "requires": [
          "t5"
        ],
        "hint": "Robot sẵn sàng thực hiện nhiệm vụ khảo sát và đào xúc đá regolith."
      }
    ],
    "lesson": "Mở cửa khoang -> Thả tời cáp hạ xe -> Bung 6 bánh lưới titan -> Nâng camera 360 độ -> Cắm cờ căn cứ -> Lăn bánh thử nghiệm."
  },
  {
    "id": "tm-187",
    "level": 187,
    "title": "Dựng Trạm Pin Mặt Trời Thẳng Đứng Đón Nắng Vĩnh Cửu",
    "category": "megaproject",
    "categoryName": "Căn Cứ Mặt Trăng",
    "icon": "⚡",
    "difficulty": 4,
    "description": "Tận dụng đỉnh núi vĩnh cửu ngập nắng để sản xuất điện liên tục quanh năm.",
    "tasks": [
      {
        "id": "t1",
        "text": "Xe robot chở các khối module pin mặt trời lên đỉnh gờ miệng núi lửa Shackleton",
        "icon": "⛰️",
        "hint": "Đỉnh núi cao luôn đón ánh nắng chiếu xiên không bao giờ lặn (Peaks of Eternal Light)."
      },
      {
        "id": "t2",
        "text": "Khoan sâu 3 mét vào nền đá cắm bu-lông neo móng chân trụ vững chắc",
        "icon": "🔩",
        "requires": [
          "t1"
        ],
        "hint": "Móng neo giữ trụ tháp không bị lật đổ dù chênh lệch nhiệt độ lớn."
      },
      {
        "id": "t3",
        "text": "Dựng trụ tháp thẳng đứng cao 10 mét có khớp quay theo dõi hướng mặt trời",
        "icon": "🗼",
        "requires": [
          "t2"
        ],
        "hint": "Trụ tháp tự động xoay tròn chậm chạp bám sát mặt trời nằm ngang đường chân trời."
      },
      {
        "id": "t4",
        "text": "Bung các dải pin màng mỏng hiệu suất cao Gallium Arsenide hai mặt thẳng đứng",
        "icon": "📐",
        "requires": [
          "t3"
        ],
        "hint": "Tấm pin dựng đứng hứng trọn vẹn tia nắng chiếu là là từ đường chân trời."
      },
      {
        "id": "t5",
        "text": "Kéo đường dây cáp siêu dẫn cao áp từ đỉnh núi dẫn điện xuống lòng thung lũng căn cứ",
        "icon": "🔌",
        "requires": [
          "t4"
        ],
        "hint": "Cáp siêu dẫn truyền tải điện năng mà không bị tiêu hao điện trở."
      },
      {
        "id": "t6",
        "text": "Bật công tắc hòa mạng: Trạm phát điện liên tục 100 kW thắp sáng toàn bộ căn cứ",
        "icon": "💡",
        "requires": [
          "t5"
        ],
        "hint": "Nguồn năng lượng sạch dồi dào giải quyết bài toán sống còn trên Mặt Trăng."
      }
    ],
    "lesson": "Chở lên đỉnh vĩnh cửu -> Khoan neo móng đá -> Dựng tháp xoay theo nắng -> Bung pin màng mỏng dựng đứng -> Kéo cáp siêu dẫn -> Bật điện 100kW."
  },
  {
    "id": "tm-188",
    "level": 188,
    "title": "Khoan Lấy Mẫu Băng Ngầm Trong Vùng Tối Vĩnh Cửu",
    "category": "megaproject",
    "categoryName": "Căn Cứ Mặt Trăng",
    "icon": "🧊",
    "difficulty": 4,
    "description": "Thám hiểm vùng đáy vực nhiệt độ -230°C nơi lưu giữ hàng tỷ tấn băng nước cổ đại.",
    "tasks": [
      {
        "id": "t1",
        "text": "Bật đèn pha LED công suất lớn rọi sáng đường đi xuống đáy vực sâu tối đen",
        "icon": "🔦",
        "hint": "Vùng tối vĩnh cửu (Permanently Shadowed Regions) chưa từng thấy ánh mặt trời suốt 2 tỷ năm."
      },
      {
        "id": "t2",
        "text": "Bật lò sưởi nhiệt điện đồng vị phóng xạ bảo vệ dầu bôi trơn robot khỏi đông cứng",
        "icon": "🔥",
        "requires": [
          "t1"
        ],
        "hint": "Nhiệt độ âm 230 độ C lạnh gần bằng độ không tuyệt đối làm gãy giòn kim loại thường."
      },
      {
        "id": "t3",
        "text": "Cụm mũi khoan xoay đập percussive cắm sâu 2 mét vào lớp đất đá đóng băng",
        "icon": "⛏️",
        "requires": [
          "t2"
        ],
        "hint": "Băng trộn lẫn bụi đá cứng như bê tông đòi hỏi lực đập búa cực mạnh."
      },
      {
        "id": "t4",
        "text": "Trích xuất thỏi lõi mẫu băng màu xám đục chứa 15% hàm lượng nước đá tinh khiết",
        "icon": "🧪",
        "requires": [
          "t3"
        ],
        "hint": "Phát hiện vô giá khẳng định kho báu vàng xanh của nhân loại trên Mặt Trăng."
      },
      {
        "id": "t5",
        "text": "Đưa mẫu băng vào hộp cách nhiệt kín chân không tránh để băng thăng hoa bốc hơi",
        "icon": "📦",
        "requires": [
          "t4"
        ],
        "hint": "Áp suất chân không ngoài vũ trụ làm băng đá bốc hơi tức thì nếu không đậy kín."
      },
      {
        "id": "t6",
        "text": "Vận chuyển các thùng mẫu băng về trạm chế biến tài nguyên tại chỗ ISRU",
        "icon": "🚜",
        "requires": [
          "t5"
        ],
        "hint": "Nguồn nguyên liệu vàng cho nhà máy sản xuất oxy và nước uống."
      }
    ],
    "lesson": "Rọi đèn pha đáy tối -> Bật sưởi ấm robot -> Mũi khoan xoay đập 2m -> Rút lõi băng ngầm 15% -> Đóng hộp chân không -> Vận chuyển về trạm ISRU."
  },
  {
    "id": "tm-189",
    "level": 189,
    "title": "Lò Nhiệt Phân Tan Chảy Băng Và Lọc Sạch Bụi Khoáng",
    "category": "megaproject",
    "categoryName": "Căn Cứ Mặt Trăng",
    "icon": "☕",
    "difficulty": 4,
    "description": "Giai đoạn 3: Nung chảy băng ngầm và chưng cất thành từng giọt nước ngọt tinh khiết đầu tiên.",
    "tasks": [
      {
        "id": "t1",
        "text": "Nạp đất đá chứa băng vụn vào phễu buồng kín của lò nhiệt phân áp suất cao",
        "icon": "📥",
        "hint": "Buồng kín duy trì áp suất khí quyển 1 atm để nước có thể tồn tại ở thể lỏng."
      },
      {
        "id": "t2",
        "text": "Gương parabol hội tụ ánh sáng mặt trời nung nóng buồng lò lên nhiệt độ 150°C",
        "icon": "☀️",
        "requires": [
          "t1"
        ],
        "hint": "Nhiệt năng mặt trời làm bốc hơi toàn bộ hơi nước tách khỏi đất cát khô."
      },
      {
        "id": "t3",
        "text": "Dẫn luồng hơi nước qua giàn ống sinh hàn làm ngưng tụ thành dòng nước lỏng ấm",
        "icon": "💧",
        "requires": [
          "t2"
        ],
        "hint": "Hơi nước ngưng tụ thành giọt tách rời khỏi đất đá xỉ thải."
      },
      {
        "id": "t4",
        "text": "Đất cát xỉ khô không còn nước được vít tải xả ra ngoài làm vật liệu xây dựng",
        "icon": "🏜️",
        "requires": [
          "t3"
        ],
        "hint": "Tận dụng triệt để đất cát khô để phục vụ việc in 3D tường chắn bức xạ."
      },
      {
        "id": "t5",
        "text": "Dẫn dòng nước qua cột lọc than hoạt tính và màng lọc thẩm thấu ngược RO",
        "icon": "🔬",
        "requires": [
          "t3"
        ],
        "hint": "Loại bỏ hoàn toàn bụi thủy tinh núi lửa sắc nhọn và khoáng chất độc hại."
      },
      {
        "id": "t6",
        "text": "Bơm nước ngọt tinh khiết vào bồn chứa áp lực dung tích 10.000 lít",
        "icon": "🛢️",
        "requires": [
          "t4",
          "t5"
        ],
        "hint": "Trữ lượng nước ngọt đầu tiên đảm bảo sự sống bền vững cho các phi hành gia."
      }
    ],
    "lesson": "Nạp băng vào buồng kín -> Nung gương hội tụ 150°C -> Ngưng tụ hơi nước lỏng -> Xả đất khô in 3D -> Lọc thẩm thấu RO -> Bồn chứa 10.000L nước."
  },
  {
    "id": "tm-190",
    "level": 190,
    "title": "Điện Phân Nước Tạo Khí Oxy Và Nhiên Liệu Tên Lửa",
    "category": "megaproject",
    "categoryName": "Căn Cứ Mặt Trăng",
    "icon": "🌬️",
    "difficulty": 4,
    "description": "Tách phân tử nước H₂O thành khí Oxy (để thở) và khí Hydro lỏng (làm nhiên liệu về Trái Đất).",
    "tasks": [
      {
        "id": "t1",
        "text": "Bơm nước tinh khiết vào bình điện phân màng trao đổi proton (PEM)",
        "icon": "🧪",
        "hint": "Công nghệ màng PEM phân tách khí Oxy và Hydro riêng biệt không bị trộn lẫn."
      },
      {
        "id": "t2",
        "text": "Cấp dòng điện một chiều DC mạnh mẽ từ trạm pin mặt trời vào hai cực điện phân",
        "icon": "⚡",
        "requires": [
          "t1"
        ],
        "hint": "Dòng điện bẻ gãy liên kết hóa học giữa nguyên tử hydro và oxy: 2H2O -> 2H2 + O2."
      },
      {
        "id": "t3",
        "text": "Cực dương giải phóng khí Oxy (O2) dẫn qua máy nén khí áp suất cao",
        "icon": "🔵",
        "requires": [
          "t2"
        ],
        "hint": "Khí Oxy được nén ở áp suất 300 bar nạp vào bình dưỡng khí của căn cứ."
      },
      {
        "id": "t4",
        "text": "Cực âm giải phóng khí Hydro (H2) dẫn vào hệ thống làm lạnh sâu hóa lỏng",
        "icon": "🔴",
        "requires": [
          "t2"
        ],
        "hint": "Hydro là nhiên liệu tên lửa có mật độ năng lượng cháy cao nhất."
      },
      {
        "id": "t5",
        "text": "Máy nén lạnh Cryocooler hạ nhiệt độ hydro xuống -253°C biến thành Hydro lỏng",
        "icon": "❄️",
        "requires": [
          "t4"
        ],
        "hint": "Nhiệt độ cực thấp hóa lỏng khí Hydro lưu trữ trong bồn bảo ôn chân không."
      },
      {
        "id": "t6",
        "text": "Căn cứ tự chủ hoàn toàn: Đủ Oxy cho 10 người thở trong 1 năm và đầy bình nhiên liệu tên lửa",
        "icon": "⛽",
        "requires": [
          "t3",
          "t5"
        ],
        "hint": "Cột mốc vĩ đại biến Mặt Trăng thành trạm tiếp nhiên liệu cho tàu vũ trụ bay lên Sao Hỏa."
      }
    ],
    "lesson": "Bơm nước vào màng PEM -> Cấp dòng điện điện phân -> Cực dương nén khí Oxy thở -> Cực âm gom khí Hydro -> Làm lạnh -253°C hóa lỏng -> Đầy bồn nhiên liệu."
  },
  {
    "id": "tm-191",
    "level": 191,
    "title": "Robot In 3D Đắp Tường Khiên Chắn Bão Bức Xạ",
    "category": "megaproject",
    "categoryName": "Căn Cứ Mặt Trăng",
    "icon": "🛡️",
    "difficulty": 4,
    "description": "Dùng cánh tay robot phun đất đá Regolith xây lớp áo giáp dày 2 mét bảo vệ căn cứ khỏi tia vũ trụ.",
    "tasks": [
      {
        "id": "t1",
        "text": "Robot gầu xúc xúc đất cát Regolith khô đưa vào cối trộn phụ gia kết dính",
        "icon": "🚜",
        "hint": "Tận dụng vật liệu sẵn có tại chỗ (ISRU) không cần mang xi măng từ Trái Đất."
      },
      {
        "id": "t2",
        "text": "Bộ vi sóng cao tần Microwave thiêu kết cát mặt trăng thành vữa gốm lỏng dẻo",
        "icon": "🔥",
        "requires": [
          "t1"
        ],
        "hint": "Sóng vi ba nung chảy hạt bụi silica kết dính thành chất liệu siêu cứng như đá bazan."
      },
      {
        "id": "t3",
        "text": "Cánh tay robot in 3D khổng lồ di chuyển theo bản vẽ thiết kế vòm tổ ong",
        "icon": "🦾",
        "requires": [
          "t2"
        ],
        "hint": "Cấu trúc vòm tổ ong phân tán lực va đập của thiên thạch tí hon."
      },
      {
        "id": "t4",
        "text": "Đầu phun đùn từng lớp vữa gốm dày 5cm xếp chồng lên nhau đông cứng tức thì",
        "icon": "🧱",
        "requires": [
          "t3"
        ],
        "hint": "Trong môi trường chân không, vữa gốm đông cứng tạo thành khối đá liền mạch."
      },
      {
        "id": "t5",
        "text": "Xây dựng bức tường vòm dày 2 mét bao bọc kín mít xung quanh khoang sinh hoạt",
        "icon": "🛡️",
        "requires": [
          "t4"
        ],
        "hint": "Độ dày 2 mét đá regolith cản 99.9% tia bức xạ vũ trụ có hại và bão mặt trời."
      },
      {
        "id": "t6",
        "text": "Kiểm tra cảm biến đo liều phóng xạ bên trong vòm: Đạt mức an toàn tương đương mặt đất",
        "icon": "✅",
        "requires": [
          "t5"
        ],
        "hint": "Khoang sinh hoạt được che chắn an toàn tuyệt đối cho con người vào cư ngụ."
      }
    ],
    "lesson": "Xúc cát Regolith -> Sóng vi ba thiêu kết gốm -> Robot in 3D theo bản vẽ -> Đùn lớp vữa dày 5cm -> Đắp tường dày 2m -> Đạt chuẩn chống bức xạ."
  },
  {
    "id": "tm-192",
    "level": 192,
    "title": "Đặt Lò Phản Ứng Hạt Nhân Mini Kilopower",
    "category": "megaproject",
    "categoryName": "Căn Cứ Mặt Trăng",
    "icon": "⚛️",
    "difficulty": 4,
    "description": "Nguồn năng lượng bền bỉ phát điện liên tục suốt đêm trăng dài 14 ngày không có ánh nắng.",
    "tasks": [
      {
        "id": "t1",
        "text": "Xe robot kéo lò phản ứng Kilopower nặng 1.5 tấn ra vị trí hố sâu cách căn cứ 1km",
        "icon": "🚜",
        "hint": "Khoảng cách 1km và vách núi đá tự nhiên che chắn bức xạ an toàn cho khu sinh hoạt."
      },
      {
        "id": "t2",
        "text": "Hạ lò phản ứng xuống hố sâu 5 mét và đắp bờ đá bao quanh cách ly",
        "icon": "🕳️",
        "requires": [
          "t1"
        ],
        "hint": "Địa hình hố sâu đóng vai trò khiên chắn bức xạ tự nhiên."
      },
      {
        "id": "t3",
        "text": "Rút chốt thanh điều khiển Beryllium kích hoạt phản ứng phân hạch hạt nhân chậm",
        "icon": "🔑",
        "requires": [
          "t2"
        ],
        "hint": "Lõi hợp kim Uranium-235 bắt đầu phản ứng sinh ra nhiệt lượng ổn định 800°C."
      },
      {
        "id": "t4",
        "text": "Ống dẫn nhiệt bằng kim loại Natri lỏng truyền nhiệt lượng từ lõi lên động cơ Stirling",
        "icon": "🌡️",
        "requires": [
          "t3"
        ],
        "hint": "Natri lỏng dẫn nhiệt cực nhanh làm việc bền bỉ trong môi trường vũ trụ."
      },
      {
        "id": "t5",
        "text": "Động cơ Stirling chuyển đổi nhiệt năng thành cơ năng và kéo máy phát điện 40 kW",
        "icon": "⚙️",
        "requires": [
          "t4"
        ],
        "hint": "Cơ chế pit-tông kín chuyển động tịnh tiến không cần nước làm mát."
      },
      {
        "id": "t6",
        "text": "Hòa dòng điện hạt nhân vào lưới điện: Căn cứ yên tâm vượt qua đêm đông lạnh giá -150°C",
        "icon": "💡",
        "requires": [
          "t5"
        ],
        "hint": "Lò phản ứng hoạt động liên tục suốt 10 năm không cần thay thanh nhiên liệu."
      }
    ],
    "lesson": "Kéo lò ra xa 1km -> Hạ hố sâu 5m đắp bờ -> Rút thanh điều khiển phân hạch -> Ống Natri lỏng truyền nhiệt -> Động cơ Stirling phát điện -> Cấp điện đêm 14 ngày."
  },
  {
    "id": "tm-193",
    "level": 193,
    "title": "Thổi Phồng Khoang Sinh Hoạt Inflatable Habitat",
    "category": "megaproject",
    "categoryName": "Căn Cứ Mặt Trăng",
    "icon": "🎈",
    "difficulty": 4,
    "description": "Biến module kim loại nhỏ gọn thành tòa nhà 3 tầng rộng 300 m² chỉ bằng khí nén.",
    "tasks": [
      {
        "id": "t1",
        "text": "Đặt khối module lõi kim loại cứng cáp vào vị trí trung tâm dưới vòm đá 3D",
        "icon": "📦",
        "hint": "Lõi cứng chứa khung sườn thang máy, dây cáp điện và ống thông khí."
      },
      {
        "id": "t2",
        "text": "Mở các chốt khóa đai cố định lớp màng vải chịu lực gấp gọn bên ngoài",
        "icon": "🔓",
        "requires": [
          "t1"
        ],
        "hint": "Vỏ màng gồm 20 lớp sợi Kevlar và Vectran chống xé rách bền hơn thép 5 lần."
      },
      {
        "id": "t3",
        "text": "Bơm hỗn hợp khí Nitơ và Oxy nén từ từ vào khoang với áp lực tăng dần",
        "icon": "💨",
        "requires": [
          "t2"
        ],
        "hint": "Khí nén đẩy các lớp màng vải căng phồng nở rộng đều về bốn phía."
      },
      {
        "id": "t4",
        "text": "Lớp màng phồng căng hoàn toàn thành tòa nhà vòm tròn đường kính 8 mét cao 3 tầng",
        "icon": "🏛️",
        "requires": [
          "t3"
        ],
        "hint": "Áp suất khí quyển bên trong đạt mức chuẩn 101.3 kPa như mặt đất."
      },
      {
        "id": "t5",
        "text": "Hạ sàn nhà tự mở bằng hợp kim nhôm định hình tạo thành phòng ngủ, bếp và phòng làm việc",
        "icon": "🛏️",
        "requires": [
          "t4"
        ],
        "hint": "Không gian sinh hoạt rộng rãi đầy đủ tiện nghi cho 6 phi hành gia."
      },
      {
        "id": "t6",
        "text": "Kiểm tra độ kín khí: Áp suất không đổi sau 24h, khoang sinh hoạt sẵn sàng đón người",
        "icon": "✅",
        "requires": [
          "t5"
        ],
        "hint": "Ngôi nhà ấm cúng ngoài hành tinh chính thức hoàn thành xây dựng."
      }
    ],
    "lesson": "Đặt lõi kim loại -> Mở chốt màng Kevlar -> Bơm khí Nitơ Oxy -> Căng phồng nhà 3 tầng -> Hạ sàn phòng ngủ bếp -> Thử kín khí an toàn."
  },
  {
    "id": "tm-194",
    "level": 194,
    "title": "Lắp Cửa Khóa Khí Áp Lực 2 Lớp (Airlock)",
    "category": "megaproject",
    "categoryName": "Căn Cứ Mặt Trăng",
    "icon": "🚪",
    "difficulty": 4,
    "description": "Cửa ngõ ra vào sống còn: Ngăn không khí thoát ra vũ trụ và quét sạch bụi bẩn độc hại.",
    "tasks": [
      {
        "id": "t1",
        "text": "Lắp đặt khung cửa kép kín khí kết nối khoang sinh hoạt với bên ngoài",
        "icon": "🚪",
        "hint": "Nguyên tắc: Cửa trong và cửa ngoài không bao giờ được mở cùng một lúc."
      },
      {
        "id": "t2",
        "text": "Lắp hệ thống bơm thu hồi không khí nhanh hút 95% không khí vào bình tích áp",
        "icon": "🔄",
        "requires": [
          "t1"
        ],
        "hint": "Mỗi lần mở cửa ra ngoài, không khí được bơm thu hồi cất đi tránh lãng phí."
      },
      {
        "id": "t3",
        "text": "Lắp vòi sen khí nén cao áp và từ trường quét bụi mặt trăng tĩnh điện",
        "icon": "🚿",
        "requires": [
          "t1"
        ],
        "hint": "Bụi mặt trăng sắc nhọn như mảnh kính li ti cực kỳ nguy hại cho phổi người."
      },
      {
        "id": "t4",
        "text": "Cài đặt khóa liên động điện tử Interlock điều khiển đóng mở cửa tự động",
        "icon": "🔒",
        "requires": [
          "t2",
          "t3"
        ],
        "hint": "Cảm biến an toàn tự động khóa cửa ngoài khi cửa trong đang hé mở."
      },
      {
        "id": "t5",
        "text": "Treo các bộ đồ phi hành gia EVA Suits vào các giá treo sạc điện tự động trong buồng đệm",
        "icon": "👨‍🚀",
        "requires": [
          "t4"
        ],
        "hint": "Trang phục vũ trụ nạp đầy pin và oxy sẵn sàng cho chuyến đi bộ tiếp theo."
      },
      {
        "id": "t6",
        "text": "Thử nghiệm chu trình xả áp và cân bằng áp suất: Cửa Airlock hoạt động hoàn hảo 100%",
        "icon": "✅",
        "requires": [
          "t5"
        ],
        "hint": "Bảo đảm an toàn tuyệt đối cho các nhà khoa học bước ra khám phá vũ trụ."
      }
    ],
    "lesson": "Khung cửa kép 2 lớp -> Bơm thu hồi khí -> Vòi sen quét bụi kính -> Khóa liên động Interlock -> Giá treo đồ EVA -> Thử cân bằng áp suất."
  },
  {
    "id": "tm-195",
    "level": 195,
    "title": "Hệ Thống Tuần Hoàn Nước Uống Tinh Khiết 100%",
    "category": "megaproject",
    "categoryName": "Căn Cứ Mặt Trăng",
    "icon": "💧",
    "difficulty": 4,
    "description": "Tái chế từng giọt nước: Biến nước tiểu, mồ hôi và nước tắm thành dòng nước uống ngọt lịm.",
    "tasks": [
      {
        "id": "t1",
        "text": "Hệ thống điều hòa ngưng tụ thu gom từng giọt nước mồ hôi và hơi thở trong không khí",
        "icon": "🌬️",
        "hint": "Hơi thở của 6 phi hành gia thải ra khoảng 10 lít nước tinh khiết mỗi ngày."
      },
      {
        "id": "t2",
        "text": "Đường ống thu gom nước tiểu dẫn vào bình phản ứng chưng cất quay chân không",
        "icon": "🧪",
        "requires": [
          "t1"
        ],
        "hint": "Áp suất chân không giúp nước sôi và bốc hơi ở nhiệt độ mát 35°C."
      },
      {
        "id": "t3",
        "text": "Lực quay ly tâm tách các tinh thể muối khoáng urê đọng lại ở đáy buồng xả cặn",
        "icon": "🌀",
        "requires": [
          "t2"
        ],
        "hint": "Tách 98% lượng nước ngọt bay hơi khỏi dung dịch nước tiểu cô đặc."
      },
      {
        "id": "t4",
        "text": "Hơi nước ngưng tụ chảy qua màng lọc xúc tác oxy hóa tiêu diệt vi khuẩn và tạp chất hữu cơ",
        "icon": "🔬",
        "requires": [
          "t3"
        ],
        "hint": "Quá trình oxy hóa nhiệt quang phân giải hoàn toàn các phân tử mùi."
      },
      {
        "id": "t5",
        "text": "Dẫn dòng nước qua cột khoáng hóa bổ sung ion Magie và Canxi tự nhiên",
        "icon": "🧂",
        "requires": [
          "t4"
        ],
        "hint": "Bổ sung khoáng chất vi lượng giúp nước có vị ngọt thanh tự nhiên tốt cho tim mạch."
      },
      {
        "id": "t6",
        "text": "Cảm biến dẫn điện đo độ tinh khiết đạt chuẩn: Nước ngọt thơm mát rót đầy ly uống",
        "icon": "🥛",
        "requires": [
          "t5"
        ],
        "hint": "Nước tái chế sạch hơn cả nước khoáng đóng chai trên Trái Đất."
      }
    ],
    "lesson": "Thu gom hơi thở mồ hôi -> Chưng cất chân không nước tiểu -> Tách muối cặn ly tâm -> Xúc tác màng lọc -> Bổ sung khoáng Canxi -> Rót ly nước mát lành."
  },
  {
    "id": "tm-196",
    "level": 196,
    "title": "Nhà Kính Vòm Trồng Khoai Tây Và Tảo Thủy Canh",
    "category": "megaproject",
    "categoryName": "Căn Cứ Mặt Trăng",
    "icon": "🥔",
    "difficulty": 4,
    "description": "Nông nghiệp vũ trụ: Cung cấp rau xanh tươi ngon và hấp thu khí CO₂ thải ra.",
    "tasks": [
      {
        "id": "t1",
        "text": "Lắp ráp các khay trồng khí canh (Aeroponics) thẳng đứng 4 tầng tiết kiệm diện tích",
        "icon": "📐",
        "hint": "Hệ thống khí canh treo rễ cây lơ lửng trong không khí không cần đất."
      },
      {
        "id": "t2",
        "text": "Cấy giống củ khoai tây và hạt đậu nành đột biến gen chịu bức xạ tốt",
        "icon": "🥔",
        "requires": [
          "t1"
        ],
        "hint": "Khoai tây giàu tinh bột và calo cung cấp năng lượng chính cho phi hành đoàn."
      },
      {
        "id": "t3",
        "text": "Lắp giàn đèn LED quang phổ chuyên dụng phát ánh sáng đỏ 660nm và xanh dương 450nm",
        "icon": "💡",
        "requires": [
          "t2"
        ],
        "hint": "Bước sóng tối ưu cho chất diệp lục quang hợp tạo sinh khối tối đa."
      },
      {
        "id": "t4",
        "text": "Béc phun sương tự động phun dung dịch dinh dưỡng giàu khoáng thẳng vào chùm rễ",
        "icon": "🚿",
        "requires": [
          "t3"
        ],
        "hint": "Rễ cây hấp thụ nước và oxy tối đa giúp củ khoai lớn nhanh gấp 3 lần."
      },
      {
        "id": "t5",
        "text": "Nuôi cấy bể tảo xoắn Spirulina quang hợp hấp thu khí CO2 và thải ra lượng lớn Oxy sạch",
        "icon": "🟢",
        "requires": [
          "t3"
        ],
        "hint": "Tảo xoắn siêu thực phẩm chứa 70% protein và nhiều vitamin tăng cường miễn dịch."
      },
      {
        "id": "t6",
        "text": "Thu hoạch giỏ khoai tây củ tròn mẩy đầu tiên trên Mặt Trăng: Bữa ăn thịnh soạn bắt đầu!",
        "icon": "🥗",
        "requires": [
          "t4",
          "t5"
        ],
        "hint": "Căn cứ tự chủ hoàn toàn lương thực tươi sống không phụ thuộc hàng tiếp tế Trái Đất."
      }
    ],
    "lesson": "Giàn khí canh 4 tầng -> Cấy giống khoai tây -> Đèn LED đỏ xanh quang hợp -> Phun sương dinh dưỡng vào rễ -> Bể tảo xoắn lọc CO2 -> Thu hoạch khoai tây."
  },
  {
    "id": "tm-197",
    "level": 197,
    "title": "Bố Trí Phòng Thể Thao Máy Chạy Bộ Trọng Lực Thấp",
    "category": "megaproject",
    "categoryName": "Căn Cứ Mặt Trăng",
    "icon": "🏃",
    "difficulty": 3,
    "description": "Bảo vệ xương và cơ bắp phi hành gia không bị thoái hóa trong môi trường 1/6 trọng lực.",
    "tasks": [
      {
        "id": "t1",
        "text": "Lắp sàn cao su chống rung cách âm độc lập với khung cấu trúc căn cứ",
        "icon": "⬛",
        "hint": "Ngăn chặn rung động bước chân chạy bộ làm ảnh hưởng các thí nghiệm kính hiển vi."
      },
      {
        "id": "t2",
        "text": "Lắp đặt máy chạy bộ T2 có đai kéo chịu lực bungee ghì chặt người tập xuống băng chuyền",
        "icon": "🏃",
        "requires": [
          "t1"
        ],
        "hint": "Đai kéo bungee tạo lực nén tương đương 1G chống hiện tượng nổi bồng bềnh."
      },
      {
        "id": "t3",
        "text": "Lắp máy tập kháng lực ARED dùng piston chân không mô phỏng động tác cử tạ 200kg",
        "icon": "🏋️",
        "requires": [
          "t1"
        ],
        "hint": "Tập tạ bằng piston chân không kích thích xương đùi và cột sống tái tạo canxi."
      },
      {
        "id": "t4",
        "text": "Lắp xe đạp lực kế theo dõi nhịp tim và dung tích oxy hấp thụ VO2 Max",
        "icon": "🚴",
        "requires": [
          "t2"
        ],
        "hint": "Rèn luyện hệ thống tim mạch bơm máu khỏe mạnh đều đặn."
      },
      {
        "id": "t5",
        "text": "Kính thực tế ảo VR kết nối máy chạy bộ chiếu khung cảnh đường phố Trái Đất quen thuộc",
        "icon": "🥽",
        "requires": [
          "t3",
          "t4"
        ],
        "hint": "Vừa chạy bộ vừa ngắm cảnh công viên Hà Nội giúp giải tỏa tâm lý nhớ nhà."
      },
      {
        "id": "t6",
        "text": "Mỗi ngày 2 tiếng tập luyện nghiêm ngặt: Các phi hành gia duy trì cơ bắp săn chắc khỏe mạnh",
        "icon": "💪",
        "requires": [
          "t5"
        ],
        "hint": "Sẵn sàng thể lực bền bỉ thực hiện các chuyến khảo sát ngoài thực địa."
      }
    ],
    "lesson": "Sàn cao su chống rung -> Máy chạy bộ đai bungee ghì lực -> Máy tạ piston ARED -> Xe đạp tim mạch -> Kính VR ngắm cảnh -> Tập luyện 2h mỗi ngày."
  },
  {
    "id": "tm-198",
    "level": 198,
    "title": "Lắp Kính Viễn Vọng Vô Tuyến Mặt Sau Mặt Trăng",
    "category": "megaproject",
    "categoryName": "Căn Cứ Mặt Trăng",
    "icon": "🔭",
    "difficulty": 4,
    "description": "Vùng đất tĩnh lặng nhất hệ mặt trời: Lắng nghe tín hiệu từ thời kỳ bình minh vũ trụ.",
    "tasks": [
      {
        "id": "t1",
        "text": "Xe robot vượt qua ranh giới tiến sang vùng mặt sau vĩnh viễn không nhìn thấy Trái Đất",
        "icon": "🌑",
        "hint": "Mặt trăng đóng vai trò lá chắn khổng lồ chặn sạch mọi sóng vô tuyến nhân tạo từ Trái Đất."
      },
      {
        "id": "t2",
        "text": "Chọn miệng núi lửa Daedalus có lòng chảo tròn hoàn hảo đường kính 1km",
        "icon": "🥣",
        "requires": [
          "t1"
        ],
        "hint": "Lòng chảo tự nhiên đóng vai trò khung đỡ cho chảo viễn vọng khổng lồ."
      },
      {
        "id": "t3",
        "text": "Robot nhện thả các sợi dây cáp thép bện lưới phản xạ vô tuyến phủ kín lòng chảo",
        "icon": "🕸️",
        "requires": [
          "t2"
        ],
        "hint": "Lưới phản xạ thu gom sóng vô tuyến bước sóng dài cực nhạy."
      },
      {
        "id": "t4",
        "text": "Treo máy thu tín hiệu siêu nhạy ở tâm điểm hội tụ phía trên bằng các sợi cáp néo",
        "icon": "📡",
        "requires": [
          "t3"
        ],
        "hint": "Bộ thu làm lạnh bằng heli lỏng triệt tiêu mọi tạp âm nhiệt."
      },
      {
        "id": "t5",
        "text": "Thiết lập trạm chuyển tiếp vệ tinh bay quanh điểm Lagrange L2 để truyền dữ liệu về căn cứ",
        "icon": "🛰️",
        "requires": [
          "t4"
        ],
        "hint": "Cầu nối liên lạc vệ tinh xuyên qua mặt sau Mặt Trăng."
      },
      {
        "id": "t6",
        "text": "Kính viễn vọng bắt đầu thu những tín hiệu vô tuyến đầu tiên sinh ra từ vụ nổ Big Bang",
        "icon": "✨",
        "requires": [
          "t5"
        ],
        "hint": "Cửa sổ mới mở ra mở rộng tầm nhìn của nhân loại vào quá khứ 13.8 tỷ năm trước."
      }
    ],
    "lesson": "Sang mặt sau Mặt Trăng -> Lòng chảo Daedalus -> Lưới cáp phản xạ -> Máy thu tâm điểm -> Vệ tinh chuyển tiếp L2 -> Lắng nghe Big Bang."
  },
  {
    "id": "tm-199",
    "level": 199,
    "title": "Tàu Chở Phi Hành Đoàn Người Thật Hạ Cánh Căn Cứ",
    "category": "megaproject",
    "categoryName": "Căn Cứ Mặt Trăng",
    "icon": "👨‍🚀",
    "difficulty": 5,
    "description": "Khoảnh khắc lịch sử: 4 nhà du hành vũ trụ đầu tiên đặt chân vào Căn Cứ Hoàn Chỉnh!",
    "tasks": [
      {
        "id": "t1",
        "text": "Trạm điều khiển căn cứ bật đèn tín hiệu dẫn đường và radar dẫn hạ cánh tự động",
        "icon": "💡",
        "hint": "Hệ thống đèn laser bệ đáp dẫn đường cho tàu chở người tiếp cận."
      },
      {
        "id": "t2",
        "text": "Tàu chở phi hành đoàn Starship HLS hạ cánh êm ái xuống bệ đáp bê tông regolith",
        "icon": "🚀",
        "requires": [
          "t1"
        ],
        "hint": "Bệ đáp kiên cố ngăn luồng lửa động cơ làm thổi bay bụi đá gây hại căn cứ."
      },
      {
        "id": "t3",
        "text": "Xe thang đón tự hành kết nối kín khí với cửa khoang tàu của các phi hành gia",
        "icon": "🚐",
        "requires": [
          "t2"
        ],
        "hint": "Ống lồng kín khí giúp phi hành gia bước sang xe mà không cần mặc đồ cồng kềnh."
      },
      {
        "id": "t4",
        "text": "Xe đón chở 4 phi hành gia tiến vào cửa khóa khí Airlock của khoang sinh hoạt căn cứ",
        "icon": "🚪",
        "requires": [
          "t3"
        ],
        "hint": "Buồng khóa khí cân bằng áp suất mở toang đón đoàn thám hiểm."
      },
      {
        "id": "t5",
        "text": "Các phi hành gia tháo bỏ mũ bảo hiểm, hít căng lồng ngực bầu không khí thơm mát tự tạo",
        "icon": "😊",
        "requires": [
          "t4"
        ],
        "hint": "Cảm giác kỳ diệu được hít thở bầu không khí do chính nhà máy căn cứ sản xuất."
      },
      {
        "id": "t6",
        "text": "Đoàn phi hành gia ngồi vào bàn ăn thưởng thức đĩa salad khoai tây tươi ngon vừa thu hoạch",
        "icon": "🥗",
        "requires": [
          "t5"
        ],
        "hint": "Một kỷ nguyên mới rực rỡ bắt đầu: Con người chính thức định cư trên Mặt Trăng!"
      }
    ],
    "lesson": "Bật đèn dẫn đường -> Tàu chở người hạ cánh -> Ống lồng kín đón -> Vào cửa Airlock -> Tháo mũ hít khí tươi -> Thưởng thức bữa ăn đầu tiên."
  },
  {
    "id": "tm-200",
    "level": 200,
    "title": "Màn 200: Khởi Động Vận Hành Căn Cứ Mặt Trăng Tự Chủ Vĩnh Viễn",
    "category": "megaproject",
    "categoryName": "Căn Cứ Mặt Trăng",
    "icon": "🌕",
    "difficulty": 5,
    "description": "Màn 200 ĐỈNH CAO: Bật công tắc tổng hợp nhất toàn bộ hệ thống Căn Cứ Mặt Trăng tự cấp tự túc!",
    "anchors": [
      {
        "position": 0,
        "taskId": "t1",
        "locked": true
      }
    ],
    "tasks": [
      {
        "id": "t1",
        "text": "Mốc Neo: Chỉ huy Bách nhấn nút kiểm tra toàn diện 10 phân hệ kỹ thuật của căn cứ",
        "icon": "👑",
        "hint": "Tổng chỉ huy Bách bắt đầu quy trình vận hành tự chủ vĩnh viễn."
      },
      {
        "id": "t2",
        "text": "Hòa lưới đồng bộ hai nguồn điện: Điện mặt trời đỉnh núi và Lò phản ứng hạt nhân Kilopower",
        "icon": "⚡",
        "requires": [
          "t1"
        ],
        "hint": "Hệ thống điện kép thông minh bảo đảm công suất 150 kW liên tục không ngắt quãng."
      },
      {
        "id": "t3",
        "text": "Bật trạm bơm oxy và tuần hoàn nước ngầm cung cấp vào toàn bộ các khoang sinh quyển",
        "icon": "🫁",
        "requires": [
          "t2"
        ],
        "hint": "Dòng máu xanh của sự sống luân chuyển nhịp nhàng khắp căn cứ."
      },
      {
        "id": "t4",
        "text": "Kích hoạt mạng lưới robot tự hành AI tuần tra an ninh và kiểm tra bảo dưỡng vòm chắn",
        "icon": "🤖",
        "requires": [
          "t2"
        ],
        "hint": "Đội quân robot tự động hóa bảo vệ căn cứ 24/7."
      },
      {
        "id": "t5",
        "text": "Bật trạm viễn thông laser truyền thông điệp hòa bình từ Cực Nam Mặt Trăng về Trái Đất",
        "icon": "📡",
        "requires": [
          "t3",
          "t4"
        ],
        "hint": "Tia laser truyền thông điệp hình ảnh 4K gửi lời chào tới 8 tỷ người trên địa cầu."
      },
      {
        "id": "t6",
        "text": "CĂN CỨ MẶT TRĂNG CHÍNH THỨC VẬN HÀNH ĐỘC LẬP TỰ CHỦ VĨNH CỬU THÀNH CÔNG RỰC RỠ!",
        "icon": "🎉",
        "requires": [
          "t5"
        ],
        "hint": "Chiến thắng vang dội! Bách trở thành Tổng Công Trình Sư Vĩ Đại của Bậc Thầy Kế Hoạch 200 Màn!"
      }
    ],
    "lesson": "Mốc Bách kiểm tra -> Hòa điện kép Mặt trời & Hạt nhân -> Bơm tuần hoàn Oxy nước -> Robot AI tuần tra -> Laser gửi lời chào Trái Đất -> Vận hành vĩnh viễn thành công rực rỡ!"
  }
];
