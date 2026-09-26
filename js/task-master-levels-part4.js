// js/task-master-levels-part4.js - Ngân hàng 40 Màn chơi Part 4: Sinh Thái & Đại Đô Thị Thông Minh (Màn 121 -> 160)

export const TASK_MASTER_LEVELS_PART4 = [
  {
    "id": "tm-121",
    "level": 121,
    "title": "Khảo Sát Chất Lượng Nước Bằng Vi Sinh Vật Chỉ Thị",
    "category": "ecology",
    "categoryName": "Nhà Sinh Thái",
    "icon": "💧",
    "difficulty": 3,
    "description": "Dùng các loài bọ nước chỉ thị sinh học để đánh giá độ sạch của dòng suối rừng.",
    "tasks": [
      {
        "id": "t1",
        "text": "Dùng vợt lưới mịn xúc mẫu bùn cát dưới đáy dòng suối chảy xiết",
        "icon": "🥅",
        "hint": "Lưới mắt nhỏ giữ lại các ấu trùng côn trùng đáy nước."
      },
      {
        "id": "t2",
        "text": "Đổ mẫu bùn vào khay nhựa trắng và dùng nhíp gắp từng con bọ nước",
        "icon": "🧫",
        "requires": [
          "t1"
        ],
        "hint": "Khay màu trắng làm nổi bật các sinh vật nhỏ bé đang bơi."
      },
      {
        "id": "t3",
        "text": "Dùng kính lúp soi đếm số lượng ấu trùng chuồn chuồn kim và phù du",
        "icon": "🔍",
        "requires": [
          "t2"
        ],
        "hint": "Ấu trùng phù du rất nhạy cảm ô nhiễm, chỉ sống ở nước siêu sạch."
      },
      {
        "id": "t4",
        "text": "Đo độ pH nước suối bằng bút đo điện tử kiểm tra tính axit kiềm",
        "icon": "🧪",
        "requires": [
          "t1"
        ],
        "hint": "Độ pH chuẩn 6.5 - 7.5 thích hợp cho thủy sinh."
      },
      {
        "id": "t5",
        "text": "Tổng hợp bảng chỉ số đa dạng sinh học BMWP tính điểm nguồn nước",
        "icon": "📊",
        "requires": [
          "t3",
          "t4"
        ],
        "hint": "Điểm BMWP trên 100 khẳng định nguồn nước tinh khiết loại A."
      },
      {
        "id": "t6",
        "text": "Thả lại toàn bộ các sinh vật về dòng suối sau khi hoàn thành khảo sát",
        "icon": "🐟",
        "requires": [
          "t5"
        ],
        "hint": "Bảo vệ nguyên vẹn sự sống tự nhiên của hệ sinh thái suối."
      }
    ],
    "lesson": "Xúc mẫu suối -> Gắp bọ nước vào khay -> Soi kính lúp nhận dạng -> Đo pH -> Tính điểm BMWP -> Thả bọ về suối."
  },
  {
    "id": "tm-122",
    "level": 122,
    "title": "Cải Tạo Đất Chua Phèn Bằng Vôi Nông Nghiệp",
    "category": "ecology",
    "categoryName": "Nhà Sinh Thái",
    "icon": "🌾",
    "difficulty": 3,
    "description": "Hạ độ chua và khử độc nhôm sắt giúp cánh đồng lúa xanh tốt trở lại.",
    "tasks": [
      {
        "id": "t1",
        "text": "Đào rãnh thoát nước phèn quanh bờ ruộng dẫn nước chua ra ngoài",
        "icon": "⛏️",
        "hint": "Rãnh thoát phèn xả bớt lượng ion sắt nhôm độc hại ứ đọng."
      },
      {
        "id": "t2",
        "text": "Lấy mẫu đất ở 5 điểm hình chữ X trên ruộng và đo độ pH ban đầu",
        "icon": "🧪",
        "requires": [
          "t1"
        ],
        "hint": "Độ pH đo được 4.0 chứng tỏ đất bị nhiễm phèn chua nặng."
      },
      {
        "id": "t3",
        "text": "Rải đều bột vôi nông nghiệp (CaCO3) với liều lượng 500kg trên một hecta",
        "icon": "⚪",
        "requires": [
          "t2"
        ],
        "hint": "Canxi cacbonat trung hòa axit sunfuric và kết tủa nhôm độc hại."
      },
      {
        "id": "t4",
        "text": "Bơm nước ngọt phù sa vào ngâm ruộng trong 3 ngày để hòa tan chất chua",
        "icon": "🌊",
        "requires": [
          "t3"
        ],
        "hint": "Ngâm nước giúp vôi phản ứng đều khắp các tầng đất."
      },
      {
        "id": "t5",
        "text": "Xả bỏ nước ngâm chua và cày xới đất phơi ải dưới ánh nắng 1 tuần",
        "icon": "🚜",
        "requires": [
          "t4"
        ],
        "hint": "Phơi ải làm tơi xốp đất và tiêu diệt mầm bệnh nấm mốc."
      },
      {
        "id": "t6",
        "text": "Bón phân hữu cơ vi sinh Trichoderma và đo lại độ pH đạt 6.5 an toàn",
        "icon": "🌱",
        "requires": [
          "t5"
        ],
        "hint": "Bổ sung vi sinh vật có lợi sẵn sàng gieo cấy vụ mùa mới."
      }
    ],
    "lesson": "Đào rãnh xả phèn -> Đo pH đất -> Rải vôi nông nghiệp -> Ngâm nước ngọt -> Xả chua phơi ải -> Bón vi sinh."
  },
  {
    "id": "tm-123",
    "level": 123,
    "title": "Hệ Thống Thủy Canh Hồi Lưu Tuần Hoàn Khép Kín",
    "category": "ecology",
    "categoryName": "Nhà Sinh Thái",
    "icon": "🥬",
    "difficulty": 3,
    "description": "Trồng rau xà lách sạch không cần đất, tiết kiệm 90% nước tưới tiêu.",
    "tasks": [
      {
        "id": "t1",
        "text": "Lắp ráp giàn ống nhựa PVC trắng đục có khoét lỗ cách đều 15cm",
        "icon": "📐",
        "hint": "Ống nhựa nghiêng dốc 2% để dòng nước chảy tuần hoàn tự nhiên."
      },
      {
        "id": "t2",
        "text": "Gieo hạt xà lách mầm vào các viên giá thể xơ dừa ẩm trong khay ươm",
        "icon": "🌰",
        "hint": "Xơ dừa xốp giữ ẩm giúp rễ con phát triển mạnh."
      },
      {
        "id": "t3",
        "text": "Pha dung dịch dinh dưỡng đa lượng N-P-K và vi lượng vào bồn chứa nước",
        "icon": "🧪",
        "requires": [
          "t1"
        ],
        "hint": "Cung cấp đầy đủ khoáng chất hòa tan cho cây quang hợp."
      },
      {
        "id": "t4",
        "text": "Bút đo EC kiểm tra độ dẫn điện đạt 1.4 mS/cm và độ pH ổn định ở 6.0",
        "icon": "📟",
        "requires": [
          "t3"
        ],
        "hint": "Nồng độ dinh dưỡng vừa vặn không làm cháy rễ non."
      },
      {
        "id": "t5",
        "text": "Chuyển các rọ rau mầm đặt vào các lỗ khoét trên giàn ống thủy canh",
        "icon": "🥬",
        "requires": [
          "t2",
          "t4"
        ],
        "hint": "Đáy rọ rau chạm nhẹ vào dòng nước dinh dưỡng bên trong ống."
      },
      {
        "id": "t6",
        "text": "Bật máy bơm hẹn giờ bơm dòng nước dinh dưỡng chảy tuần hoàn qua rễ cây",
        "icon": "🔄",
        "requires": [
          "t5"
        ],
        "hint": "Rau lớn nhanh gấp đôi so với trồng đất và tuyệt đối an toàn."
      }
    ],
    "lesson": "Lắp giàn ống dốc -> Ươm cây rọ xơ dừa -> Pha dinh dưỡng NPK -> Đo nồng độ EC -> Đặt rọ rau -> Bật bơm tuần hoàn."
  },
  {
    "id": "tm-124",
    "level": 124,
    "title": "Ủ Phân Hữu Cơ Compost Từ Rác Nhà Bếp",
    "category": "ecology",
    "categoryName": "Nhà Sinh Thái",
    "icon": "🍂",
    "difficulty": 3,
    "description": "Biến vỏ hoa quả và lá khô thành phân đen mùn dinh dưỡng nuôi cây.",
    "tasks": [
      {
        "id": "t1",
        "text": "Chuẩn bị thùng ủ rác có lỗ thoát khí xung quanh và khay hứng nước rỉ rác",
        "icon": "🛢️",
        "hint": "Vi sinh vật hiếu khí cần oxy để phân hủy rác không sinh mùi hôi."
      },
      {
        "id": "t2",
        "text": "Rải lớp rác Nâu dày 10cm gồm lá cây khô và mùn cưa làm lớp đáy",
        "icon": "🍂",
        "requires": [
          "t1"
        ],
        "hint": "Rác Nâu giàu Carbon (C) tạo độ tơi xốp cho khối ủ."
      },
      {
        "id": "t3",
        "text": "Rải lớp rác Xanh gồm vỏ trái cây, cọng rau thừa và bã cà phê",
        "icon": "🍎",
        "requires": [
          "t2"
        ],
        "hint": "Rác Xanh giàu Đạm Nitơ (N) cung cấp thức ăn cho vi khuẩn."
      },
      {
        "id": "t4",
        "text": "Rắc men vi sinh phân giải xenlulozo và tưới nước giữ ẩm như miếng bọt biển",
        "icon": "💧",
        "requires": [
          "t3"
        ],
        "hint": "Độ ẩm 50-60% là môi trường vàng cho vi sinh vật sinh sôi."
      },
      {
        "id": "t5",
        "text": "Dùng cào đảo đều đống ủ mỗi tuần một lần để cấp khí oxy vào giữa",
        "icon": "🔄",
        "requires": [
          "t4"
        ],
        "hint": "Nhiệt độ đống ủ tự nóng lên 55-60°C tiêu diệt hạt cỏ dại và mầm bệnh."
      },
      {
        "id": "t6",
        "text": "Sau 6 tuần, thu hoạch lớp phân mùn đen thơm mùi đất rừng đem bón hoa",
        "icon": "🌻",
        "requires": [
          "t5"
        ],
        "hint": "Phân hữu cơ mùn đen giàu dinh dưỡng cải tạo đất bạc màu."
      }
    ],
    "lesson": "Thùng thoáng khí -> Lớp rác Nâu (lá khô) -> Lớp rác Xanh (rau quả) -> Rắc men tưới ẩm -> Đảo khí mỗi tuần -> Thu hoạch phân mùn."
  },
  {
    "id": "tm-125",
    "level": 125,
    "title": "Lắp Mạng Lưới Bẫy Ảnh Theo Dõi Động Vật Quý",
    "category": "ecology",
    "categoryName": "Nhà Sinh Thái",
    "icon": "📷",
    "difficulty": 3,
    "description": "Gắn camera cảm biến hồng ngoại trên thân cây rừng săn ảnh Sao La quý hiếm.",
    "tasks": [
      {
        "id": "t1",
        "text": "Khảo sát dọc suối nước tìm dấu chân thú và vết cào trên vỏ cây",
        "icon": "🐾",
        "hint": "Động vật hoang dã thường đi theo đường mòn dẫn ra nguồn nước uống."
      },
      {
        "id": "t2",
        "text": "Chọn thân cây gỗ thẳng chắc chắn cách mặt đất 40-50 cm",
        "icon": "🌳",
        "requires": [
          "t1"
        ],
        "hint": "Độ cao ngang tầm ngực thú giúp ống kính ghi trọn vẹn toàn thân."
      },
      {
        "id": "t3",
        "text": "Dùng dây cáp bọc thép khóa chặt hộp bẫy ảnh vào thân cây chống trộm",
        "icon": "🔒",
        "requires": [
          "t2"
        ],
        "hint": "Khóa an toàn chống khỉ tò mò hoặc kẻ xấu phá hoại."
      },
      {
        "id": "t4",
        "text": "Lắp 8 viên pin sạc dung lượng cao và thẻ nhớ tốc độ cao 128GB",
        "icon": "🔋",
        "requires": [
          "t3"
        ],
        "hint": "Pin đảm bảo máy ảnh trực chiến liên tục 6 tháng trong rừng sâu."
      },
      {
        "id": "t5",
        "text": "Bật cảm biến nhiệt PIR và đèn hồng ngoại tàng hình Black LED ban đêm",
        "icon": "🔴",
        "requires": [
          "t4"
        ],
        "hint": "Đèn hồng ngoại chụp ảnh đêm mà không phát sáng làm thú rừng hoảng sợ."
      },
      {
        "id": "t6",
        "text": "Ngụy trang vỏ máy ảnh bằng cành lá khô hòa lẫn vào thảm thực vật",
        "icon": "🌿",
        "requires": [
          "t5"
        ],
        "hint": "Bẫy ảnh hoàn tất sẵn sàng ghi lại những khoảnh khắc vô giá."
      }
    ],
    "lesson": "Tìm dấu chân thú -> Chọn cây gỗ vững -> Khóa cáp chống trộm -> Lắp pin thẻ nhớ -> Bật hồng ngoại đêm -> Ngụy trang lá khô."
  },
  {
    "id": "tm-126",
    "level": 126,
    "title": "Nhân Giống Lan Kim Tuyến Bằng Nuôi Cấy Mô",
    "category": "ecology",
    "categoryName": "Nhà Sinh Thái",
    "icon": "🧫",
    "difficulty": 4,
    "description": "Nhân bản vô tính thảo dược quý trong bình thủy tinh vô trùng phòng thí nghiệm.",
    "tasks": [
      {
        "id": "t1",
        "text": "Chọn chồi đỉnh khỏe mạnh từ cây lan kim tuyến mẹ trong rừng nguyên sinh",
        "icon": "🌱",
        "hint": "Đỉnh sinh trưởng chứa các tế bào phân chia tích cực không nhiễm virus."
      },
      {
        "id": "t2",
        "text": "Khử trùng bề mặt chồi bằng cồn 70 độ và dung dịch Clo-clorox trong 10 phút",
        "icon": "🧴",
        "requires": [
          "t1"
        ],
        "hint": "Tiêu diệt toàn bộ bào tử nấm mốc bám ngoài vỏ chồi."
      },
      {
        "id": "t3",
        "text": "Trong tủ cấy vô trùng Clean Bench, dùng dao mổ tách lấy cụm mô phân sinh",
        "icon": "🔪",
        "requires": [
          "t2"
        ],
        "hint": "Tủ thổi khí màng HEPA ngăn bụi không khí rơi vào mẫu cấy."
      },
      {
        "id": "t4",
        "text": "Cấy cụm mô vào thạch dinh dưỡng Murashige-Skoog chứa hormone kích chồi",
        "icon": "🧫",
        "requires": [
          "t3"
        ],
        "hint": "Môi trường giàu khoáng vi lượng, đường sucrose và vitamin."
      },
      {
        "id": "t5",
        "text": "Đặt các lọ thủy tinh trong phòng nuôi có đèn LED xanh đỏ và nhiệt độ 24°C",
        "icon": "💡",
        "requires": [
          "t4"
        ],
        "hint": "Quang chu kỳ 16 giờ sáng 8 giờ tối kích thích mô sinh trưởng thành cây con."
      },
      {
        "id": "t6",
        "text": "Sau 8 tuần, mở nắp cho cây con thích nghi khí hậu rồi đưa ra vườn ươm",
        "icon": "🪴",
        "requires": [
          "t5"
        ],
        "hint": "Huấn luyện cây con cứng cáp trước khi đem trồng lại vào rừng tự nhiên."
      }
    ],
    "lesson": "Chọn chồi đỉnh -> Khử trùng bề mặt -> Tách mô trong tủ cấy -> Cấy thạch hormone -> Phòng nuôi đèn LED -> Rèn luyện cây con."
  },
  {
    "id": "tm-127",
    "level": 127,
    "title": "Cứu Hộ Rùa Biển Mắc Lưới Đánh Cá",
    "category": "ecology",
    "categoryName": "Nhà Sinh Thái",
    "icon": "🐢",
    "difficulty": 3,
    "description": "Giải cứu chú đồi mồi bị dây cước siết chặt vây bơi trôi dạt vào bãi cát.",
    "tasks": [
      {
        "id": "t1",
        "text": "Che khăn ẩm ướt lên mắt chú rùa để giữ bình tĩnh và hạ thân nhiệt",
        "icon": "🧣",
        "hint": "Che mắt giúp rùa biển không bị hoảng loạn và giảm nhịp tim."
      },
      {
        "id": "t2",
        "text": "Dùng kéo chuyên dụng mũi tù cẩn thận cắt từng sợi cước bó quanh vây bơi",
        "icon": "✂️",
        "requires": [
          "t1"
        ],
        "hint": "Kéo đầu tù an toàn không làm rách da rùa khi cắt cước."
      },
      {
        "id": "t3",
        "text": "Rửa sạch vết cứa bằng nước muối sinh lý và bôi thuốc mỡ kháng sinh",
        "icon": "🧴",
        "requires": [
          "t2"
        ],
        "hint": "Làm sạch cát biển và chống nhiễm trùng hoại tử vây."
      },
      {
        "id": "t4",
        "text": "Đưa rùa vào bể dưỡng có mực nước nông ngập mai và sục khí oxy liên tục",
        "icon": "🏊",
        "requires": [
          "t3"
        ],
        "hint": "Mực nước nông giúp rùa yếu sức vẫn dễ dàng ngóc đầu lên thở."
      },
      {
        "id": "t5",
        "text": "Cho ăn mực tươi bổ sung vitamin và theo dõi rùa bơi lặn linh hoạt",
        "icon": "🦑",
        "requires": [
          "t4"
        ],
        "hint": "Rùa hồi phục sức khỏe ăn uống bình thường sau 2 tuần điều trị."
      },
      {
        "id": "t6",
        "text": "Bấm thẻ định danh kim loại lên vây trước và thả rùa về với đại dương bao la",
        "icon": "🌊",
        "requires": [
          "t5"
        ],
        "hint": "Thẻ kim loại khắc mã số giúp theo dõi hành trình di cư của rùa biển."
      }
    ],
    "lesson": "Khăn ẩm che mắt -> Cắt dây cước mũi tù -> Sát trùng bôi thuốc -> Bể dưỡng nước nông -> Bồi dưỡng mực tươi -> Bấm thẻ thả biển."
  },
  {
    "id": "tm-128",
    "level": 128,
    "title": "Cấy Ghép Phục Hồi Rạn San Hô Dưới Đáy Biển",
    "category": "ecology",
    "categoryName": "Nhà Sinh Thái",
    "icon": "🪸",
    "difficulty": 4,
    "description": "Ươm mầm và gắn những nhánh san hô cành lên giá thể đá ngầm nhân tạo.",
    "tasks": [
      {
        "id": "t1",
        "text": "Thợ lặn thu gom các nhánh san hô cành bị gãy sóng đánh trôi dạt",
        "icon": "🤿",
        "hint": "Tận dụng các nhánh san hô còn sống sót tự nhiên dưới đáy biển."
      },
      {
        "id": "t2",
        "text": "Đưa về vườn ươm nước nông cắt thành các nhánh nhỏ dài 5cm khỏe mạnh",
        "icon": "✂️",
        "requires": [
          "t1"
        ],
        "hint": "Mỗi nhánh nhỏ có hàng trăm polyp san hô sẵn sàng phân chia nảy chồi."
      },
      {
        "id": "t3",
        "text": "Đúc các đế giá thể bằng bê tông sinh học từ vỏ hàu nghiền mịn",
        "icon": "🪨",
        "requires": [
          "t1"
        ],
        "hint": "Vỏ hàu cung cấp canxi tự nhiên kích thích san hô bám rễ vôi hóa."
      },
      {
        "id": "t4",
        "text": "Dùng keo sinh học dán gốc nhánh san hô cắm thẳng đứng vào đế bê tông",
        "icon": "🩹",
        "requires": [
          "t2",
          "t3"
        ],
        "hint": "Keo đông cứng dưới nước giữ san hô không bị sóng cuốn trôi."
      },
      {
        "id": "t5",
        "text": "Thợ lặn lặn xuống độ sâu 8m xếp các đế san hô lên khung giàn thép ngầm",
        "icon": "⚓",
        "requires": [
          "t4"
        ],
        "hint": "Độ sâu đủ ánh sáng mặt trời cho tảo cộng sinh zooxanthellae quang hợp."
      },
      {
        "id": "t6",
        "text": "Định kỳ cọ rửa rong rêu bám quanh để bảo vệ san hô phát triển thành rạn lớn",
        "icon": "🪥",
        "requires": [
          "t5"
        ],
        "hint": "Sau 1 năm, rạn san hô xanh mướt thu hút hàng ngàn chú cá hề về làm tổ."
      }
    ],
    "lesson": "Nhặt nhánh san hô gãy -> Cắt tỉa 5cm -> Đúc đế vỏ hàu -> Dán keo sinh học -> Đặt giàn thép ngầm -> Cọ rong định kỳ."
  },
  {
    "id": "tm-129",
    "level": 129,
    "title": "Lắp Trạm Pin Mặt Trời Cấp Điện Tháp Kiểm Lâm",
    "category": "ecology",
    "categoryName": "Nhà Sinh Thái",
    "icon": "☀️",
    "difficulty": 3,
    "description": "Hệ thống điện xanh độc lập Off-Grid thắp sáng đài quan sát lửa rừng trên đỉnh núi.",
    "tasks": [
      {
        "id": "t1",
        "text": "Dựng khung giá đỡ bằng thép mạ kẽm nghiêng 15 độ hướng thẳng về phía Nam",
        "icon": "📐",
        "hint": "Góc nghiêng hướng Nam đón bức xạ mặt trời tối đa trong suốt cả năm."
      },
      {
        "id": "t2",
        "text": "Bắt bu-lông cố định 4 tấm pin quang điện Silicon đơn tinh thể 450W lên khung",
        "icon": "🪛",
        "requires": [
          "t1"
        ],
        "hint": "Tấm pin quang điện Mono đạt hiệu suất chuyển đổi quang năng 21%."
      },
      {
        "id": "t3",
        "text": "Đấu nối dây cáp chuyên dụng chống tia UV vào bộ điều khiển sạc thông minh MPPT",
        "icon": "🔌",
        "requires": [
          "t2"
        ],
        "hint": "Bộ sạc MPPT dò điểm công suất cực đại tối ưu năng lượng nạp vào bình."
      },
      {
        "id": "t4",
        "text": "Nối dây nạp từ bộ điều khiển vào cụm ắc quy lưu trữ Lithium LiFePO4 48V",
        "icon": "🔋",
        "requires": [
          "t3"
        ],
        "hint": "Ắc quy LiFePO4 bền bỉ chu kỳ 4000 lần sạc xả an toàn chống cháy nổ."
      },
      {
        "id": "t5",
        "text": "Đấu nối bộ kích điện biến tần Inverter đổi dòng 48V một chiều sang 220V xoay chiều",
        "icon": "⚡",
        "requires": [
          "t4"
        ],
        "hint": "Cung cấp nguồn điện sin chuẩn cho bộ đàm, máy tính và đèn chiếu sáng."
      },
      {
        "id": "t6",
        "text": "Bật cầu dao tổng: Toàn bộ hệ thống camera phát hiện khói rừng sáng đèn hoạt động",
        "icon": "💡",
        "requires": [
          "t5"
        ],
        "hint": "Tháp kiểm lâm hoàn toàn tự chủ năng lượng xanh giữa rừng già."
      }
    ],
    "lesson": "Khung nghiêng hướng Nam -> Bắt tấm pin Mono -> Bộ sạc MPPT -> Ắc quy Lithium 48V -> Biến tần Inverter 220V -> Bật cầu dao."
  },
  {
    "id": "tm-130",
    "level": 130,
    "title": "Xây Dựng Cầu Vượt Xanh Cho Động Vật Rừng (Eco-Bridge)",
    "category": "ecology",
    "categoryName": "Nhà Sinh Thái",
    "icon": "🌉",
    "difficulty": 4,
    "description": "Cầu vượt phủ đầy cây xanh bắc qua đường cao tốc nối liền sinh cảnh cho thú rừng.",
    "tasks": [
      {
        "id": "t1",
        "text": "Khảo sát dữ liệu GPS xác định lối mòn di cư truyền thống của đàn voi và hươu",
        "icon": "🛰️",
        "hint": "Cầu phải xây đúng vị trí đường mòn di cư quen thuộc của thú rừng."
      },
      {
        "id": "t2",
        "text": "Đúc vòm cầu bê tông chịu lực rộng 50 mét vắt ngang qua 6 làn xe cao tốc",
        "icon": "🏗️",
        "requires": [
          "t1"
        ],
        "hint": "Cầu vòm siêu rộng đủ không gian cho cả đàn thú lớn bước qua an tâm."
      },
      {
        "id": "t3",
        "text": "Lắp các vách tường rào cách âm cao 3 mét hai bên thành cầu",
        "icon": "🛡️",
        "requires": [
          "t2"
        ],
        "hint": "Tường cách âm ngăn ánh đèn pha và tiếng ồn xe cộ làm hoảng sợ thú."
      },
      {
        "id": "t4",
        "text": "Trải lớp chống thấm và đổ lớp đất đồi dày 1.5 mét lên mặt cầu",
        "icon": "⛰️",
        "requires": [
          "t3"
        ],
        "hint": "Độ dày đất đủ sâu cho rễ cây bụi và cây bóng mát phát triển."
      },
      {
        "id": "t5",
        "text": "Trồng cỏ tự nhiên và các bụi cây dại bản địa ngụy trang mặt cầu thành cánh rừng",
        "icon": "🌳",
        "requires": [
          "t4"
        ],
        "hint": "Tạo cảm giác thân thuộc như đang đi trên mặt đất tự nhiên của rừng."
      },
      {
        "id": "t6",
        "text": "Căng hàng rào dẫn hướng hai bên đường cao tốc hướng thú đi lên cầu an toàn",
        "icon": "🦌",
        "requires": [
          "t5"
        ],
        "hint": "Ngăn thú rừng băng cắt qua lòng đường cao tốc gây tai nạn nguy hiểm."
      }
    ],
    "lesson": "Định vị đường di cư -> Đúc vòm cầu rộng 50m -> Tường cách âm -> Đổ đất dày 1.5m -> Trồng cây rừng -> Rào dẫn hướng."
  },
  {
    "id": "tm-131",
    "level": 131,
    "title": "Dập Lửa Rừng Bằng Đường Băng Cản Lửa (Firebreak)",
    "category": "ecology",
    "categoryName": "Nhà Sinh Thái",
    "icon": "🔥",
    "difficulty": 4,
    "description": "Chặn đứng ngọn lửa hung tàn bằng cách triệt tiêu nhiên liệu cháy trước đầu gió.",
    "tasks": [
      {
        "id": "t1",
        "text": "Dùng flycam gắn camera tầm nhiệt xác định hướng gió và tốc độ lan của đám cháy",
        "icon": "🚁",
        "hint": "Gió mùa Tây Nam đang đẩy vệt lửa tiến nhanh về hướng thung lũng thông."
      },
      {
        "id": "t2",
        "text": "Đội hình máy ủi và cưa máy tiến vào dải đất trước đầu ngọn lửa 500 mét",
        "icon": "🚜",
        "requires": [
          "t1"
        ],
        "hint": "Khoảng cách an toàn để công binh kịp thi công trước khi lửa ập tới."
      },
      {
        "id": "t3",
        "text": "Cưa đổ toàn bộ cây bụi và ủi sạch thảm thực bì tạo dải đất trống rộng 20 mét",
        "icon": "🪓",
        "requires": [
          "t2"
        ],
        "hint": "Cắt đứt chuỗi cung cấp vật liệu cháy: củi khô và lá rụng."
      },
      {
        "id": "t4",
        "text": "Dùng máy ủi cào sâu bộc lộ tầng đất đỏ ẩm ướt không thể bắt lửa",
        "icon": "🟫",
        "requires": [
          "t3"
        ],
        "hint": "Đất đỏ khoáng chất đóng vai trò bức tường ngăn cách lửa cháy ngầm dưới rễ."
      },
      {
        "id": "t5",
        "text": "Xe cứu hỏa phun nước hòa bọt chống cháy ướt đẫm mép rừng đối diện",
        "icon": "🚒",
        "requires": [
          "t4"
        ],
        "hint": "Ngăn chặn tàn lửa bay theo gió bốc cháy nhảy cóc qua đường cản."
      },
      {
        "id": "t6",
        "text": "Ngọn lửa bốc cao ập tới đường băng cản lửa thì hết nhiên liệu và tự lụi tàn",
        "icon": "💨",
        "requires": [
          "t5"
        ],
        "hint": "Chiến thuật cô lập khống chế thành công cứu nguy cánh rừng thông ngàn tuổi."
      }
    ],
    "lesson": "Quét camera nhiệt đo gió -> Đón đầu 500m -> Phát sạch cây bụi rộng 20m -> Cào trơ đất ẩm -> Phun bọt làm ướt -> Lửa tự tắt."
  },
  {
    "id": "tm-132",
    "level": 132,
    "title": "Bẫy Thu Gom Rác Nhựa Tự Nổi Cửa Sông (The Ocean Cleanup)",
    "category": "ecology",
    "categoryName": "Nhà Sinh Thái",
    "icon": "🌊",
    "difficulty": 3,
    "description": "Hệ thống phao chắn nổi hình chữ U gom hàng tấn rác nhựa trước khi trôi ra biển.",
    "tasks": [
      {
        "id": "t1",
        "text": "Thả cụm phao nổi HDPE hình vòng cung dài 300 mét chắn ngang dòng chảy cửa sông",
        "icon": "🟡",
        "hint": "Phao nhựa siêu bền trôi dạt tự nhiên nương theo dòng thủy triều."
      },
      {
        "id": "t2",
        "text": "Thả tấm màn chắn lưới sâu 3 mét dưới đáy phao giữ lại túi ni-lông chìm",
        "icon": "🕸️",
        "requires": [
          "t1"
        ],
        "hint": "Màn chắn lưới giữ rác nhưng cá tôm vẫn dễ dàng bơi luồn xuống dưới thoát đi."
      },
      {
        "id": "t3",
        "text": "Dòng nước sông đẩy các mảnh rác chai nhựa dồn về đáy túi chữ U trung tâm",
        "icon": "🧴",
        "requires": [
          "t2"
        ],
        "hint": "Lực đẩy tự nhiên của dòng nước gom rác tự động không tốn nhiên liệu."
      },
      {
        "id": "t4",
        "text": "Tàu thu gom rác chạy bằng điện mặt trời cập vào khoang chứa của bẫy phao",
        "icon": "🚢",
        "requires": [
          "t3"
        ],
        "hint": "Tàu rác định kỳ đến hút và gắp rác khỏi túi gom."
      },
      {
        "id": "t5",
        "text": "Cần cẩu gắp rác đưa lên máy ép thủy lực nén thành các khối vuông kiện nhựa",
        "icon": "📦",
        "requires": [
          "t4"
        ],
        "hint": "Ép kiện tiết kiệm không gian khoang chứa của tàu chở."
      },
      {
        "id": "t6",
        "text": "Vận chuyển các kiện rác nhựa về nhà máy tái chế thành hạt nhựa công nghiệp",
        "icon": "♻️",
        "requires": [
          "t5"
        ],
        "hint": "Ngăn chặn hàng triệu tấn rác nhựa không xâm hại đại dương."
      }
    ],
    "lesson": "Thả phao HDPE vòng cung -> Màn lưới chìm 3m -> Rác dồn đáy túi chữ U -> Tàu rác cập mạn -> Ép kiện -> Đưa về nhà máy tái chế."
  },
  {
    "id": "tm-133",
    "level": 133,
    "title": "Tổ Ong Thông Minh Gắn Cảm Biến Giám Sát Sức Khỏe",
    "category": "ecology",
    "categoryName": "Nhà Sinh Thái",
    "icon": "🐝",
    "difficulty": 3,
    "description": "Lắng nghe tần số âm thanh của đàn ong để phát hiện ong chúa già hoặc thiếu thức ăn.",
    "tasks": [
      {
        "id": "t1",
        "text": "Lắp cảm biến nhiệt độ và độ ẩm kỹ thuật số vào giữa các cầu ong",
        "icon": "🌡️",
        "hint": "Nhiệt độ tổ ong luôn được bầy ong duy trì chuẩn xác 34.5°C để ấp trứng."
      },
      {
        "id": "t2",
        "text": "Gắn micro siêu nhỏ chống ẩm ghi lại âm thanh vo ve tần số âm học của bầy ong",
        "icon": "🎙️",
        "requires": [
          "t1"
        ],
        "hint": "Âm thanh đập cánh của ong mang thông điệp về trạng thái đàn."
      },
      {
        "id": "t3",
        "text": "Đặt cảm biến cân nặng Loadcell dưới đáy tổ ong theo dõi trọng lượng mật",
        "icon": "⚖️",
        "requires": [
          "t1"
        ],
        "hint": "Khối lượng tổ tăng lên mỗi chiều thể hiện lượng mật hoa thu gom trong ngày."
      },
      {
        "id": "t4",
        "text": "Bộ vi xử lý nhúng thu thập dữ liệu và truyền qua sóng LoRa về máy tính trang trại",
        "icon": "📡",
        "requires": [
          "t2",
          "t3"
        ],
        "hint": "Sóng LoRa truyền xa 5km trong rừng mà tốn cực ít pin."
      },
      {
        "id": "t5",
        "text": "Phần mềm AI phân tích âm thanh phát hiện tần số 250Hz cảnh báo ong chuẩn bị chia đàn",
        "icon": "🧠",
        "requires": [
          "t4"
        ],
        "hint": "Nhận biết bầy ong chuẩn bị bay đi trước 2 ngày để người nuôi kịp can thiệp."
      },
      {
        "id": "t6",
        "text": "Người nuôi bổ sung thêm tầng sáp mới giúp đàn ong tiếp tục mở rộng quy mô",
        "icon": "🍯",
        "requires": [
          "t5"
        ],
        "hint": "Bảo vệ an toàn cho đàn ong thụ phấn cho cây rừng."
      }
    ],
    "lesson": "Cảm biến nhiệt ẩm -> Micro thu âm vo ve -> Cảm biến cân nặng đáy -> Truyền sóng LoRa -> AI phân tích tần số -> Thêm tầng sáp mới."
  },
  {
    "id": "tm-134",
    "level": 134,
    "title": "Trồng Rừng Ngập Mặn Chắn Sóng Bão Ven Biển",
    "category": "ecology",
    "categoryName": "Nhà Sinh Thái",
    "icon": "🦀",
    "difficulty": 4,
    "description": "Rừng cây đước đâm rễ kiềng cắm sâu xuống bùn ngăn xói lở đê biển.",
    "tasks": [
      {
        "id": "t1",
        "text": "Khảo sát bãi bồi ven biển lúc thủy triều rút tìm vùng bùn lắng phù sa",
        "icon": "🌊",
        "hint": "Bãi bồi phù sa giàu dưỡng chất thích hợp cho cây ngập mặn sinh trưởng."
      },
      {
        "id": "t2",
        "text": "Đóng các cọc tre đan phên chắn sóng biển giảm lực đánh trực tiếp vào bãi ươm",
        "icon": "🎋",
        "requires": [
          "t1"
        ],
        "hint": "Hàng rào tre tiêu tán năng lượng sóng biển bảo vệ cây con không bị bật gốc."
      },
      {
        "id": "t3",
        "text": "Chọn các trái đước giống dài như chiếc đũa đã chín có mầm nhú xanh",
        "icon": "🌱",
        "requires": [
          "t1"
        ],
        "hint": "Trái đước chín rụng cắm thẳng xuống bùn sẽ ra rễ trong 24 giờ."
      },
      {
        "id": "t4",
        "text": "Cắm thẳng trái đước sâu 1/3 thân quả vào lớp bùn bão hòa nước theo hàng",
        "icon": "🪵",
        "requires": [
          "t2",
          "t3"
        ],
        "hint": "Mật độ trồng 1 mét 1 cây tạo khoảng trống cho rễ xòe rộng."
      },
      {
        "id": "t5",
        "text": "Buộc néo que tre giữ thân cây đước đứng vững trước dòng chảy thủy triều",
        "icon": "🥢",
        "requires": [
          "t4"
        ],
        "hint": "Que néo giúp cây con không bị ngã khi nước lớn dâng cao ngập ngọn."
      },
      {
        "id": "t6",
        "text": "Sau 3 năm, bộ rễ chân nôm chằng chịt tạo thành bức tường xanh chắn sóng bảo vệ làng chài",
        "icon": "🛡️",
        "requires": [
          "t5"
        ],
        "hint": "Rừng đước trở thành ngôi nhà trú ngụ của hàng triệu chú cua và chim nước."
      }
    ],
    "lesson": "Tìm bãi phù sa -> Rào tre chắn sóng -> Chọn quả đước chín -> Cắm sâu 1/3 quả -> Néo cọc tre -> Thành rừng chân nôm."
  },
  {
    "id": "tm-135",
    "level": 135,
    "title": "Nhân Giống Cá Ngựa Và Tái Thả Vào Khu Bảo Tồn",
    "category": "ecology",
    "categoryName": "Nhà Sinh Thái",
    "icon": "🌊",
    "difficulty": 4,
    "description": "Khoa học kỳ thú: Chăm sóc cá ngựa bố mang thai và sinh sản bầy con.",
    "tasks": [
      {
        "id": "t1",
        "text": "Bố trí bể ươm nước biển nhân tạo có độ mặn 32 phần nghìn và nhiệt độ 26°C",
        "icon": "🧪",
        "hint": "Môi trường nước chuẩn xác sao chép môi trường rạn san hô tự nhiên."
      },
      {
        "id": "t2",
        "text": "Nuôi cấy sinh khối phù du giáp xác Artemia giàu dinh dưỡng làm mồi sống",
        "icon": "🦐",
        "requires": [
          "t1"
        ],
        "hint": "Cá ngựa có thị giác tinh tường chỉ thích săn đuổi thức ăn còn bơi sống."
      },
      {
        "id": "t3",
        "text": "Thả đôi cá ngựa bố mẹ vào bể có các nhánh cỏ biển giả để chúng quấn đuôi",
        "icon": "🌿",
        "requires": [
          "t1",
          "t2"
        ],
        "hint": "Đuôi cá ngựa có khả năng bám quấn chặt vào thân cỏ biển chống trôi."
      },
      {
        "id": "t4",
        "text": "Cá ngựa mẹ chuyển trứng vào túi ấp trước bụng cá ngựa bố để thụ tinh",
        "icon": "🥚",
        "requires": [
          "t3"
        ],
        "hint": "Đặc điểm sinh học độc nhất vô nhị: Cá ngựa bố mang thai và sinh con."
      },
      {
        "id": "t5",
        "text": "Sau 21 ngày ấp trứng, cá ngựa bố co bóp túi sinh nở ra 500 cá ngựa con li ti",
        "icon": "✨",
        "requires": [
          "t4"
        ],
        "hint": "Cá ngựa con bơi ngửa đáng yêu lập tức săn mồi ấu trùng Artemia."
      },
      {
        "id": "t6",
        "text": "Đưa bầy cá ngựa thiếu niên lặn thả về thảm cỏ biển trong khu bảo tồn quốc gia",
        "icon": "🏝️",
        "requires": [
          "t5"
        ],
        "hint": "Góp phần khôi phục quần thể sinh vật biển quý hiếm đang bị đe dọa tuyệt chủng."
      }
    ],
    "lesson": "Nước biển 32 phần nghìn -> Nuôi mồi Artemia -> Thả đôi cá quấn đuôi -> Cá bố nhận trứng -> Sinh 500 con -> Thả về rạn cỏ biển."
  },
  {
    "id": "tm-136",
    "level": 136,
    "title": "Xử Lý Nước Rác Bằng Bãi Lọc Sinh Học Thực Vật Lau Sậy",
    "category": "ecology",
    "categoryName": "Nhà Sinh Thái",
    "icon": "🌾",
    "difficulty": 4,
    "description": "Hệ thống đất ngập nước kiến tạo (Constructed Wetland) dùng rễ cây lau lọc nước thải ô nhiễm nặng.",
    "tasks": [
      {
        "id": "t1",
        "text": "Đào hồ lọc đáy nghiêng và lót màng chống thấm HDPE dày 2mm chống ngấm nước ngầm",
        "icon": "📐",
        "hint": "Màng HDPE ngăn tuyệt đối nước rỉ rác thẩm thấu làm ô nhiễm nguồn nước ngầm."
      },
      {
        "id": "t2",
        "text": "Đổ lần lượt các lớp sỏi cuội to dưới đáy, sỏi trung gian và cát vàng mịn lên trên",
        "icon": "🪨",
        "requires": [
          "t1"
        ],
        "hint": "Tạo hệ tầng lọc thẩm thấu vật lý giữ lại các cặn bẩn lơ lửng."
      },
      {
        "id": "t3",
        "text": "Trồng dày đặc cây lau sậy và bèo lục bình trên bề mặt lớp cát lọc",
        "icon": "🌾",
        "requires": [
          "t2"
        ],
        "hint": "Bộ rễ lau sậy giải phóng oxy nuôi dưỡng vi sinh vật hiếu khí dưới đáy rễ."
      },
      {
        "id": "t4",
        "text": "Bơm nước rỉ rác đã qua lắng thô cho chảy ngầm chậm chạp xuyên qua tầng rễ lau",
        "icon": "💧",
        "requires": [
          "t3"
        ],
        "hint": "Dòng chảy ngầm ngang ngăn ruồi muỗi và khử sạch mùi hôi phát tán."
      },
      {
        "id": "t5",
        "text": "Vi khuẩn bám trên rễ cây lau phân hủy chất hữu cơ ô nhiễm và hấp thu kim loại nặng",
        "icon": "🦠",
        "requires": [
          "t4"
        ],
        "hint": "Cơ chế sinh học tự nhiên xử lý 95% nồng độ COD và Amoni độc hại."
      },
      {
        "id": "t6",
        "text": "Nước trong veo thoát ra hồ nuôi cá đạt tiêu chuẩn xả thải môi trường cột A",
        "icon": "🐟",
        "requires": [
          "t5"
        ],
        "hint": "Nước sạch tái sử dụng tưới cây xanh công viên mà không tốn hóa chất xử lý."
      }
    ],
    "lesson": "Lót màng HDPE -> Đổ sỏi cát tầng lọc -> Trồng lau sậy -> Bơm nước chảy ngầm -> Rễ vi sinh phân hủy -> Nước trong nuôi cá."
  },
  {
    "id": "tm-137",
    "level": 137,
    "title": "Thụ Phấn Bằng Ong Thợ Cho Dưa Lưới Nhà Kính",
    "category": "ecology",
    "categoryName": "Nhà Sinh Thái",
    "icon": "🍈",
    "difficulty": 3,
    "description": "Dùng bầy ong mật thay thế sức người chấm hoa thụ phấn từng trái dưa lưới ngọt lịm.",
    "tasks": [
      {
        "id": "t1",
        "text": "Kiểm tra toàn bộ lưới chắn côn trùng quanh nhà kính kín khít không rách thủng",
        "icon": "🥅",
        "hint": "Ngăn ong bay lạc ra ngoài và ngăn sâu bướm hại chui vào bên trong."
      },
      {
        "id": "t2",
        "text": "Khi 70% hoa dưa lưới nở rộ màu vàng tươi thì mang tổ ong mật vào đặt giữa nhà kính",
        "icon": "🐝",
        "requires": [
          "t1"
        ],
        "hint": "Thời điểm vàng hoa đực có nhiều phấn và hoa cái tiết mật thơm ngọt."
      },
      {
        "id": "t3",
        "text": "Mở cửa tổ ong lúc 7 giờ sáng khi ánh nắng ấm áp chiếu rọi vào luống cây",
        "icon": "☀️",
        "requires": [
          "t2"
        ],
        "hint": "Ong mật hoạt động mạnh nhất từ 8h đến 10h sáng khi nhiệt độ 25-28°C."
      },
      {
        "id": "t4",
        "text": "Hàng ngàn chú ong thợ cần mẫn bay vo ve đậu từ hoa đực sang hoa cái hút mật",
        "icon": "🌸",
        "requires": [
          "t3"
        ],
        "hint": "Hạt phấn hoa bám vào lông chân ong truyền đều lên đầu nhụy hoa cái."
      },
      {
        "id": "t5",
        "text": "Sau 3 ngày thụ phấn xong, cánh hoa héo rụng và cuống hoa phình to thành trái non tròn xoe",
        "icon": "🍈",
        "requires": [
          "t4"
        ],
        "hint": "Thụ phấn tự nhiên bằng ong giúp quả dưa tròn đều, không bị méo mó vẹo vọ."
      },
      {
        "id": "t6",
        "text": "Đóng cửa tổ và chuyển bầy ong ra vườn hoa tự nhiên để dưỡng đàn hồi phục sức",
        "icon": "🍯",
        "requires": [
          "t5"
        ],
        "hint": "Bảo vệ sức khỏe cho bầy ong tiếp tục thụ phấn cho các mùa vụ sau."
      }
    ],
    "lesson": "Kín lưới nhà kính -> Đặt tổ ong khi hoa nở rộ -> Mở tổ lúc 7h sáng -> Ong truyền hạt phấn -> Trái non tròn xoe -> Đưa ong về dưỡng."
  },
  {
    "id": "tm-138",
    "level": 138,
    "title": "Đeo Vòng Định Vị Vệ Tinh GPS Cho Đại Bàng Đen",
    "category": "ecology",
    "categoryName": "Nhà Sinh Thái",
    "icon": "🦅",
    "difficulty": 4,
    "description": "Nghiên cứu đường bay di cư hàng ngàn cây số của chúa tể bầu trời rừng già.",
    "tasks": [
      {
        "id": "t1",
        "text": "Bẫy nhẹ nhàng chú đại bàng bằng lưới vòm bật tự động và trùm mũ da che mắt",
        "icon": "🧢",
        "hint": "Mũ da che mắt giúp chim săn mồi bình tâm không vùng vẫy sợ hãi."
      },
      {
        "id": "t2",
        "text": "Đeo găng tay da dày kiểm tra thể trọng, sải cánh và tình trạng lông đuôi",
        "icon": "🧤",
        "requires": [
          "t1"
        ],
        "hint": "Đại bàng khỏe mạnh nặng 3.5kg có móng vuốt sắc nhọn."
      },
      {
        "id": "t3",
        "text": "Chuẩn bị ba lô máy phát tín hiệu vệ tinh năng lượng mặt trời nặng dưới 30g",
        "icon": "🎒",
        "requires": [
          "t2"
        ],
        "hint": "Trọng lượng máy phát chỉ bằng 1% cơ thể để không ảnh hưởng lực nâng khi bay."
      },
      {
        "id": "t4",
        "text": "Dùng dây đai ruy băng Teflon luồn chữ X qua ức và cánh chim cố định máy phát",
        "icon": "🎗️",
        "requires": [
          "t3"
        ],
        "hint": "Dây đai mềm mại không làm gãy rụng lông vũ khi chim liệng cánh."
      },
      {
        "id": "t5",
        "text": "Mở mũ che mắt và đưa đại bàng lên gờ đá cao đỉnh núi bung cánh vút bay lên không trung",
        "icon": "🦅",
        "requires": [
          "t4"
        ],
        "hint": "Chú đại bàng cất cánh kiêu hãnh lượn vòng trên bầu trời xanh thẳm."
      },
      {
        "id": "t6",
        "text": "Mở máy tính thu nhận tọa độ GPS truyền từ vệ tinh Argus vẽ nên đường bay di cư vĩ đại",
        "icon": "🗺️",
        "requires": [
          "t5"
        ],
        "hint": "Dữ liệu bản đồ hỗ trợ thiết lập khu bảo tồn chim di cư xuyên quốc gia."
      }
    ],
    "lesson": "Trùm mũ da che mắt -> Đo thể trọng sải cánh -> Ba lô GPS siêu nhẹ 30g -> Đai Teflon chữ X -> Tung cánh đỉnh núi -> Vẽ bản đồ vệ tinh."
  },
  {
    "id": "tm-139",
    "level": 139,
    "title": "Thu Hoạch Mật Ong Rừng Bền Vững Không Hại Đàn",
    "category": "ecology",
    "categoryName": "Nhà Sinh Thái",
    "icon": "🍯",
    "difficulty": 3,
    "description": "Nghệ thuật gác kèo lấy mật ong hoa tràm U Minh không phá tổ giết ong.",
    "tasks": [
      {
        "id": "t1",
        "text": "Lên thuyền ba lá chèo sâu vào rừng tràm tìm thân kèo có tổ ong mật lớn",
        "icon": "🚣",
        "hint": "Tổ ong bám trên thân gỗ tràm gác nghiêng đón nắng ban mai."
      },
      {
        "id": "t2",
        "text": "Bó đuốc từ mùn xơ dừa ẩm tạo luồng khói trắng mù mịt thoang thoảng",
        "icon": "💨",
        "requires": [
          "t1"
        ],
        "hint": "Khói nguội báo hiệu cháy giả khiến bầy ong hút no mật và hiền lành lại."
      },
      {
        "id": "t3",
        "text": "Mặc áo lưới trùm đầu kín mít nhẹ nhàng đưa luồng khói xua ong dạt lên phía trên",
        "icon": "🥷",
        "requires": [
          "t2"
        ],
        "hint": "Khói xua đàn ong rời khỏi bánh mật mà không đốt chết con ong nào."
      },
      {
        "id": "t4",
        "text": "Dùng dao cau bằng cật tre bén ngọt cắt riêng phần chứa mật ong vàng óng",
        "icon": "🔪",
        "requires": [
          "t3"
        ],
        "hint": "Chỉ cắt 2/3 phần bọng mật, tuyệt đối để lại tầng sáp ấu trùng trứng non."
      },
      {
        "id": "t5",
        "text": "Để lại tầng ấu trùng nguyên vẹn trên cành cây để đàn ong tiếp tục sinh sôi phát triển",
        "icon": "🐝",
        "requires": [
          "t4"
        ],
        "hint": "Bảo tồn đàn ong thợ, đàn ong sẽ tiếp tục xây lại bọng mật mới sau 20 ngày."
      },
      {
        "id": "t6",
        "text": "Vắt mật ong hoa tràm qua vải lọc gạc thu được dòng mật sóng sánh thơm lừng",
        "icon": "🍯",
        "requires": [
          "t5"
        ],
        "hint": "Mật ong rừng nguyên chất thu hoạch nhân đạo bảo vệ thiên nhiên."
      }
    ],
    "lesson": "Chèo thuyền tìm kèo -> Khói xơ dừa nguội -> Xua ong dạt nhẹ -> Cắt phần bọng mật -> Giữ nguyên tầng ấu trùng -> Lọc mật vàng óng."
  },
  {
    "id": "tm-140",
    "level": 140,
    "title": "Màn Trùm: Tái Thả Đàn Hươu Sao Về Khu Rừng Nguyên Sinh",
    "category": "ecology",
    "categoryName": "Nhà Sinh Thái",
    "icon": "🦌",
    "difficulty": 5,
    "description": "Sứ mệnh đưa đàn hươu sao nhân giống thành công trở về với ngôi nhà thiên nhiên hoang dã.",
    "tasks": [
      {
        "id": "t1",
        "text": "Khảo sát vành đai vùng lõi vườn quốc gia: Đảm bảo có suối nước và nguồn lá cây phong phú",
        "icon": "🗺️",
        "hint": "Vùng thả tự do phải có đủ thức ăn và nước uống quanh năm."
      },
      {
        "id": "t2",
        "text": "Dựng chuồng thích nghi bán tự nhiên (Soft-release Pen) rộng 2 hecta giữa lòng rừng",
        "icon": "🏡",
        "requires": [
          "t1"
        ],
        "hint": "Chuồng bán hoang dã giúp thú làm quen với khí hậu và mùi rừng 1 tháng."
      },
      {
        "id": "t3",
        "text": "Kiểm tra thú y: Bấm mã số tai và tiêm vaccine phòng dịch cho từng cá thể hươu",
        "icon": "💉",
        "requires": [
          "t2"
        ],
        "hint": "Đảm bảo đàn hươu hoàn toàn khỏe mạnh không mang mầm bệnh vào rừng."
      },
      {
        "id": "t4",
        "text": "Gắn vòng cổ phát tín hiệu định vị vệ tinh GPS cho chú hươu đực đầu đàn",
        "icon": "📡",
        "requires": [
          "t3"
        ],
        "hint": "Vòng cổ định vị theo dõi bước chân di chuyển của cả đàn hươu sau khi thả."
      },
      {
        "id": "t5",
        "text": "Vận chuyển đàn hươu vào chuồng thích nghi tập ăn cỏ rừng và cảnh giác với thú dữ",
        "icon": "🚚",
        "requires": [
          "t4"
        ],
        "hint": "Rèn luyện bản năng sinh tồn tự nhiên trước khi mở cửa chuồng hoàn toàn."
      },
      {
        "id": "t6",
        "text": "Mở toang cánh cổng chuồng: Đàn hươu sao kiêu hãnh tung vó phi vào rừng đại ngàn",
        "icon": "🦌",
        "requires": [
          "t5"
        ],
        "hint": "Khoảnh khắc xúc động khi thiên nhiên hoang dã đón những đứa con trở về nhà."
      }
    ],
    "lesson": "Khảo sát vùng lõi -> Chuồng bán hoang dã 2ha -> Khám thú y bấm thẻ -> Vòng cổ GPS đầu đàn -> Tập ăn cỏ rừng -> Mở cổng tái thả."
  },
  {
    "id": "tm-141",
    "level": 141,
    "title": "Khảo Sát Địa Chất Khoan Thăm Dò Móng Tháp",
    "category": "architecture",
    "categoryName": "Kiến Trúc Đô Thị",
    "icon": "🏗️",
    "difficulty": 4,
    "description": "Khoan lấy mẫu lõi đá sâu 80 mét dưới lòng đất xác định tầng địa chất chịu tải trọng.",
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
        "text": "Mốc Neo: Khảo sát địa hình và lập lưới tọa độ các điểm tim cọc móng",
        "icon": "📍",
        "hint": "Điểm mốc trắc địa tuyệt đối định vị toàn bộ công trình."
      },
      {
        "id": "t2",
        "text": "Đưa dàn khoan thủy lực bánh xích vào đúng tọa độ tim hố khoan",
        "icon": "🚜",
        "requires": [
          "t1"
        ],
        "hint": "Cân bằng thủy lực giữ cần khoan thẳng đứng tuyệt đối."
      },
      {
        "id": "t3",
        "text": "Mũi khoan kim cương quay tốc độ cao cắt xuyên qua các tầng đất sét",
        "icon": "💎",
        "requires": [
          "t2"
        ],
        "hint": "Đầu khoan gắn hạt kim cương nhân tạo khoan sâu vào lòng đất."
      },
      {
        "id": "t4",
        "text": "Bơm dung dịch bentonite giữ vách hố khoan không bị sạt lở sập thành",
        "icon": "🧪",
        "requires": [
          "t3"
        ],
        "hint": "Dung dịch bùn khoáng tạo màng áp lực cân bằng áp suất ngầm."
      },
      {
        "id": "t5",
        "text": "Kéo ống nòng đôi rút mẫu lõi đá hoa cương nguyên vẹn dài 2 mét lên mặt đất",
        "icon": "🪨",
        "requires": [
          "t4"
        ],
        "hint": "Lõi đá thể hiện cấu trúc địa tầng còn nguyên vẹn."
      },
      {
        "id": "t6",
        "text": "Đưa mẫu đá vào phòng thí nghiệm nén thủy lực xác định cường độ chịu lực RQD",
        "icon": "🔬",
        "requires": [
          "t5"
        ],
        "hint": "Xác nhận tầng đá gốc đủ sức chịu tải cho tòa tháp 80 tầng vững chãi."
      }
    ],
    "lesson": "Lập mốc tọa độ -> Dàn khoan định vị -> Khoan kim cương -> Bơm bentonite giữ vách -> Rút lõi đá -> Thí nghiệm nén."
  },
  {
    "id": "tm-142",
    "level": 142,
    "title": "Đổ Bê Tông Khối Lớn Móng Tháp Tản Nhiệt Ống Nước",
    "category": "architecture",
    "categoryName": "Kiến Trúc Đô Thị",
    "icon": "🧱",
    "difficulty": 4,
    "description": "Đổ liên tục 10.000 m³ bê tông và luồn ống làm mát chống nứt do nhiệt thủy hóa.",
    "tasks": [
      {
        "id": "t1",
        "text": "Đan lưới thép chịu lực 4 lớp dày đặc đường kính thanh thép 32mm",
        "icon": "🕸️",
        "hint": "Khung xương thép khổng lồ tạo độ bền uốn cho đài móng."
      },
      {
        "id": "t2",
        "text": "Lắp đặt mạng lưới ống kim loại zíc zắc để dẫn nước làm mát tản nhiệt",
        "icon": "🧊",
        "requires": [
          "t1"
        ],
        "hint": "Bê tông khối lớn khi đông kết tỏa nhiệt tới 70°C dễ bị nứt toác."
      },
      {
        "id": "t3",
        "text": "Gắn cảm biến nhiệt độ đo nhiệt độ tâm khối và mặt ngoài bê tông",
        "icon": "🌡️",
        "requires": [
          "t2"
        ],
        "hint": "Chênh lệch nhiệt độ trong và ngoài không được vượt quá 20°C."
      },
      {
        "id": "t4",
        "text": "Điều phối 8 xe bơm cần bơm bê tông tươi liên tục không ngừng suốt 48 giờ",
        "icon": "🚛",
        "requires": [
          "t2"
        ],
        "hint": "Đổ liền khối không tạo mạch ngừng nguội gây yếu móng."
      },
      {
        "id": "t5",
        "text": "Bơm tuần hoàn dòng nước lạnh liên tục qua hệ thống ống làm mát ngầm",
        "icon": "🔄",
        "requires": [
          "t3",
          "t4"
        ],
        "hint": "Lấy bớt nhiệt lượng tỏa ra khi xi măng thủy hóa đóng rắn."
      },
      {
        "id": "t6",
        "text": "Phủ bạt bảo dưỡng ẩm và tưới nước giữ ẩm mặt móng trong 14 ngày",
        "icon": "💦",
        "requires": [
          "t5"
        ],
        "hint": "Đài móng đạt mác chịu lực 600 an toàn tuyệt đối chống động đất."
      }
    ],
    "lesson": "Đan thép 4 lớp -> Lắp ống tản nhiệt -> Gắn cảm biến nhiệt -> Đổ bê tông liên tục 48h -> Bơm nước lạnh -> Bảo dưỡng bạt ẩm."
  },
  {
    "id": "tm-143",
    "level": 143,
    "title": "Lắp Cẩu Tháp Tự Leo Và Dầm Thép Siêu Cường",
    "category": "architecture",
    "categoryName": "Kiến Trúc Đô Thị",
    "icon": "🏗️",
    "difficulty": 4,
    "description": "Cỗ máy khổng lồ tự leo lên độ cao 300 mét theo từng tầng nhà mọc lên.",
    "tasks": [
      {
        "id": "t1",
        "text": "Cố định đế cẩu tháp vào lõi bê tông thang máy bằng hệ giằng thép",
        "icon": "⚓",
        "hint": "Lõi thang máy là vị trí vững chắc nhất của tòa nhà cao tầng."
      },
      {
        "id": "t2",
        "text": "Kích thủy lực nâng buồng đốt và thân tháp lên cao 3 mét tạo khoảng trống",
        "icon": "🪜",
        "requires": [
          "t1"
        ],
        "hint": "Cơ chế kích nâng tự leo kỳ diệu của cẩu tháp xây dựng."
      },
      {
        "id": "t3",
        "text": "Cần cẩu móc đoạn thân tháp mới đưa vào khe hở vừa được kích nâng",
        "icon": "🧩",
        "requires": [
          "t2"
        ],
        "hint": "Lắp ghép thêm từng khoang đốt thép giúp cẩu tự cao lên."
      },
      {
        "id": "t4",
        "text": "Siết chặt bu-lông cường độ cao nối liền đoạn đốt thân tháp mới",
        "icon": "🔧",
        "requires": [
          "t3"
        ],
        "hint": "Súng siết bu-lông đo lực siết đảm bảo không lỏng lẻo."
      },
      {
        "id": "t5",
        "text": "Cẩu tháp vươn tay đòn dài 60m cẩu thanh dầm thép hộp nặng 20 tấn lên đỉnh",
        "icon": "🦾",
        "requires": [
          "t4"
        ],
        "hint": "Dầm thép hộp làm từ thép hợp kim chịu lực kéo phi thường."
      },
      {
        "id": "t6",
        "text": "Thợ hàn gắn kết dầm thép vào cột trụ bằng đường hàn chịu lực kiểm tra siêu âm",
        "icon": "🔥",
        "requires": [
          "t5"
        ],
        "hint": "Bộ khung xương thép vươn cao kiêu hãnh giữa tầng mây."
      }
    ],
    "lesson": "Giằng chân cẩu tháp -> Kích thủy lực nâng -> Đưa khoang đốt mới -> Siết bu-lông đo lực -> Cẩu dầm thép 20 tấn -> Hàn khung siêu cường."
  },
  {
    "id": "tm-144",
    "level": 144,
    "title": "Đào Hầm Metro Bằng Khiên Đào Khổng Lồ TBM",
    "category": "architecture",
    "categoryName": "Kiến Trúc Đô Thị",
    "icon": "🚇",
    "difficulty": 4,
    "description": "Cỗ máy quái vật TBM dài 100 mét đào xuyên lòng đất sâu 30 mét xây đường tàu điện ngầm.",
    "tasks": [
      {
        "id": "t1",
        "text": "Hạ cỗ máy TBM nặng 800 tấn xuống giếng khoan xuất phát sâu 25 mét",
        "icon": "🕳️",
        "hint": "Cần cẩu 1000 tấn hạ từng bộ phận của robot khoan ngầm."
      },
      {
        "id": "t2",
        "text": "Bật đĩa cắt phía trước quay tròn nghiền nát đất đá thành bùn lỏng",
        "icon": "⚙️",
        "requires": [
          "t1"
        ],
        "hint": "Hàng trăm răng cắt vonfram nghiền vụn sỏi đá cứng."
      },
      {
        "id": "t3",
        "text": "Bơm vữa áp lực cân bằng áp lực đất tránh sụt lún nhà cửa bên trên",
        "icon": "🧪",
        "requires": [
          "t2"
        ],
        "hint": "Công nghệ cân bằng áp lực đất EPB chống sụt lún đường phố."
      },
      {
        "id": "t4",
        "text": "Băng tải trục vít vận chuyển đất đá đã nghiền ra xe gòng chở lên mặt đất",
        "icon": "🚜",
        "requires": [
          "t3"
        ],
        "hint": "Hàng ngàn mét khối đất được đưa ra ngoài mỗi ngày."
      },
      {
        "id": "t5",
        "text": "Cánh tay robot lắp ghép 6 tấm vỏ hầm bê tông đúc sẵn ghép thành vòng cung tròn",
        "icon": "⭕",
        "requires": [
          "t4"
        ],
        "hint": "Vỏ hầm Segment bê tông cốt thép chịu áp lực nước ngầm vĩnh cửu."
      },
      {
        "id": "t6",
        "text": "Xi lanh thủy lực đẩy tì vào vỏ hầm vừa lắp để đẩy máy TBM tiến về phía trước",
        "icon": "➡️",
        "requires": [
          "t5"
        ],
        "hint": "Hầm tàu điện ngầm hình thành ngay sau lưng máy khoan từng mét một."
      }
    ],
    "lesson": "Hạ TBM xuống giếng -> Đĩa cắt nghiền đất -> Cân bằng áp lực EPB -> Tải đất ra ngoài -> Lắp vỏ hầm bê tông -> Xi lanh tì vỏ đẩy tiến."
  },
  {
    "id": "tm-145",
    "level": 145,
    "title": "Lắp Ray Giảm Chấn Và Cấp Điện Ray Thứ Ba Metro",
    "category": "architecture",
    "categoryName": "Kiến Trúc Đô Thị",
    "icon": "🛤️",
    "difficulty": 3,
    "description": "Lắp đường ray chạy tàu êm ái cách âm dưới lòng đất không gây rung lắc cho nhà dân.",
    "tasks": [
      {
        "id": "t1",
        "text": "Làm sạch bề mặt lòng hầm và đo trắc địa laser độ cao cốt đường ray",
        "icon": "📏",
        "hint": "Độ chính xác milimet đảm bảo tàu chạy tốc độ 80km/h êm như bay."
      },
      {
        "id": "t2",
        "text": "Đặt các tấm đệm cao su giảm chấn đàn hồi chuyên dụng xuống đáy hầm",
        "icon": "⬛",
        "requires": [
          "t1"
        ],
        "hint": "Đệm đàn hồi hấp thụ toàn bộ xung lực và sóng rung động."
      },
      {
        "id": "t3",
        "text": "Đặt hai thanh ray thép UIC60 lên gối đệm và siết cóc kẹp đàn hồi",
        "icon": "🛤️",
        "requires": [
          "t2"
        ],
        "hint": "Khóa cóc kẹp giữ ray chắc chắn chống biến dạng nhiệt mùa hè."
      },
      {
        "id": "t4",
        "text": "Hàn nhiệt nhôm (Thermite) liền mạch các mối nối thanh ray thành ray dài vô tận",
        "icon": "🔥",
        "requires": [
          "t3"
        ],
        "hint": "Ray liền mạch triệt tiêu tiếng kêu cạch cạch khi bánh sắt lăn qua."
      },
      {
        "id": "t5",
        "text": "Lắp đặt thanh ray thứ ba dẫn điện một chiều 750V DC có máng nhựa cách điện che trên",
        "icon": "⚡",
        "requires": [
          "t4"
        ],
        "hint": "Thanh ray thứ 3 cấp điện cho chân tiếp xúc của đoàn tàu."
      },
      {
        "id": "t6",
        "text": "Cho đoàn tàu thử tải chạy thử với cảm biến đo độ êm ái đạt chuẩn quốc tế",
        "icon": "🚇",
        "requires": [
          "t5"
        ],
        "hint": "Tuyến metro sẵn sàng vận chuyển 500.000 lượt khách mỗi ngày."
      }
    ],
    "lesson": "Đo trắc địa laser -> Đệm cao su giảm chấn -> Đặt ray siết cóc kẹp -> Hàn nhiệt nhôm liền ray -> Lắp ray thứ 3 dẫn điện -> Tàu thử tải."
  },
  {
    "id": "tm-146",
    "level": 146,
    "title": "Nhà Máy Xử Lý Nước Thải Đô Thị Thành Nước Trong",
    "category": "architecture",
    "categoryName": "Kiến Trúc Đô Thị",
    "icon": "🌊",
    "difficulty": 4,
    "description": "Công nghệ màng vi sinh lọc sạch 100.000 m³ nước thải sinh hoạt mỗi ngày.",
    "tasks": [
      {
        "id": "t1",
        "text": "Song chắn rác thô và mịn giữ lại túi ni-lông, rác rưởi trôi theo cống",
        "icon": "🗑️",
        "hint": "Bảo vệ máy bơm và đường ống khỏi bị kẹt rác cơ học."
      },
      {
        "id": "t2",
        "text": "Bể lắng cát tách toàn bộ cát sạn nặng rơi lắng xuống đáy phễu",
        "icon": "⏳",
        "requires": [
          "t1"
        ],
        "hint": "Cát sạn mài mòn cánh bơm cần được loại bỏ ngay từ đầu."
      },
      {
        "id": "t3",
        "text": "Bơm nước vào bể hiếu khí Aerotank sục bọt khí oxy liên tục 24/7",
        "icon": "🫧",
        "requires": [
          "t2"
        ],
        "hint": "Hàng tỷ vi sinh vật ăn chất hữu cơ trong nước thải để phát triển."
      },
      {
        "id": "t4",
        "text": "Bể lắng bùn thứ cấp tách bông bùn vi sinh lắng xuống đáy thu hồi",
        "icon": "🥣",
        "requires": [
          "t3"
        ],
        "hint": "Một phần bùn hoạt tính được bơm tuần hoàn lại bể Aerotank."
      },
      {
        "id": "t5",
        "text": "Nước trong chảy qua dàn màng siêu lọc MBR lọc sạch vi khuẩn nhỏ 0.1 micron",
        "icon": "🧫",
        "requires": [
          "t4"
        ],
        "hint": "Màng MBR giữ lại toàn bộ vi khuẩn và hạt bụi lơ lửng."
      },
      {
        "id": "t6",
        "text": "Khử trùng bằng tia cực tím UV và bơm nước sạch ra kênh tưới cây công viên",
        "icon": "🌱",
        "requires": [
          "t5"
        ],
        "hint": "Nước đầu ra trong veo không mùi đạt chuẩn sinh thái tuần hoàn."
      }
    ],
    "lesson": "Song chắn rác -> Bể lắng cát -> Sục khí Aerotank -> Lắng bùn vi sinh -> Màng lọc MBR -> Khử trùng UV tưới cây."
  },
  {
    "id": "tm-147",
    "level": 147,
    "title": "Dựng Trụ Tuabin Gió Ngoài Khơi Chịu Bão Cấp 15",
    "category": "architecture",
    "categoryName": "Kiến Trúc Đô Thị",
    "icon": "🌬️",
    "difficulty": 4,
    "description": "Lắp đặt cỗ máy điện gió 12 Megawatt ngoài biển khơi đón luồng gió đại dương dồi dào.",
    "tasks": [
      {
        "id": "t1",
        "text": "Tàu đóng cọc chuyên dụng đóng trụ móng đơn (Monopile) bằng thép sâu 40m vào đáy biển",
        "icon": "⚓",
        "hint": "Cột thép đường kính 10 mét cắm sâu vào tầng đá đáy đại dương."
      },
      {
        "id": "t2",
        "text": "Đổ vữa liên kết cường độ cao khóa chặt trụ tháp với cọc móng ngầm",
        "icon": "🧱",
        "requires": [
          "t1"
        ],
        "hint": "Vữa chuyên dụng không co ngót đông cứng trong môi trường nước biển mặn."
      },
      {
        "id": "t3",
        "text": "Cẩu lắp từng đoạn ống tháp hình nón vươn cao 120 mét trên mặt nước biển",
        "icon": "🗼",
        "requires": [
          "t2"
        ],
        "hint": "Thân tháp sơn phủ lớp epoxy chống ăn mòn muối biển."
      },
      {
        "id": "t4",
        "text": "Cẩu gian máy phát điện Nacelle nặng 400 tấn đặt lên đỉnh cột tháp",
        "icon": "⚙️",
        "requires": [
          "t3"
        ],
        "hint": "Gian máy chứa máy phát nam châm vĩnh cửu và hộp số điều tốc."
      },
      {
        "id": "t5",
        "text": "Lắp lần lượt 3 cánh quạt sợi carbon dài 107 mét vào trục quay của tuabin",
        "icon": "🪶",
        "requires": [
          "t4"
        ],
        "hint": "Cánh quạt khí động học khổng lồ quét vùng trời rộng bằng 4 sân bóng đá."
      },
      {
        "id": "t6",
        "text": "Nối cáp ngầm dưới biển 66kV hòa dòng điện xanh vào lưới điện quốc gia",
        "icon": "⚡",
        "requires": [
          "t5"
        ],
        "hint": "Một vòng quay của tuabin cấp đủ điện cho một hộ gia đình dùng trong 2 ngày."
      }
    ],
    "lesson": "Đóng cọc thép đáy biển -> Đổ vữa chịu mặn -> Dựng tháp 120m -> Cẩu gian máy 400 tấn -> Lắp 3 cánh quạt carbon -> Hòa lưới điện cáp ngầm."
  },
  {
    "id": "tm-148",
    "level": 148,
    "title": "Kéo Tuyến Cáp Quang Ngầm Đô Thị Xuyên Thành Phố",
    "category": "architecture",
    "categoryName": "Kiến Trúc Đô Thị",
    "icon": "🌐",
    "difficulty": 3,
    "description": "Xương sống truyền tải Internet băng thông rộng 100 Gbps kết nối các quận đô thị.",
    "tasks": [
      {
        "id": "t1",
        "text": "Mở nắp hố ga kỹ thuật đô thị và bật máy quạt thông gió đẩy khí độc tích tụ",
        "icon": "🌀",
        "hint": "Đảm bảo an toàn không có khí metan trước khi công nhân xuống hầm."
      },
      {
        "id": "t2",
        "text": "Dùng dây mồi sợi thủy tinh bắn xuyên qua ống ghen ngầm giữa hai hố ga cách nhau 500m",
        "icon": "🎯",
        "requires": [
          "t1"
        ],
        "hint": "Dây mồi dẫn đường kéo cáp qua đường ống ngoằn ngoèo."
      },
      {
        "id": "t3",
        "text": "Buộc đầu cáp quang 144 sợi vào dây mồi và máy tời cơ giới kéo cáp luồn qua ống",
        "icon": "🚜",
        "requires": [
          "t2"
        ],
        "hint": "Lực kéo được kiểm soát không vượt quá giới hạn làm đứt sợi thủy tinh."
      },
      {
        "id": "t4",
        "text": "Tách lớp vỏ bảo vệ cáp để lộ những sợi thủy tinh mảnh như sợi tóc trong suốt",
        "icon": "✂️",
        "requires": [
          "t3"
        ],
        "hint": "Lõi sợi thủy tinh tinh khiết truyền tín hiệu ánh sáng phản xạ toàn phần."
      },
      {
        "id": "t5",
        "text": "Dùng máy hàn nhiệt phóng hồ quang điện hàn nóng chảy ghép từng sợi quang",
        "icon": "⚡",
        "requires": [
          "t4"
        ],
        "hint": "Mối hàn căn chỉnh laser đạt suy hao quang học cực thấp dưới 0.02 dB."
      },
      {
        "id": "t6",
        "text": "Bọc ống co nhiệt bảo vệ mối hàn, đặt vào hộp nối ODF và bật máy phát laser thử tín hiệu",
        "icon": "💡",
        "requires": [
          "t5"
        ],
        "hint": "Hệ thống truyền tải trơn tru hàng triệu video 4K đồng thời trên mạng Internet."
      }
    ],
    "lesson": "Thông khí hố ga -> Bắn dây mồi ống ngầm -> Máy tời kéo cáp -> Tách lõi sợi quang -> Hàn hồ quang laser -> Hộp nối ODF thử tín hiệu."
  },
  {
    "id": "tm-149",
    "level": 149,
    "title": "Xây Hồ Điều Hòa Ngầm Chống Ngập Mùa Mưa Bão",
    "category": "architecture",
    "categoryName": "Kiến Trúc Đô Thị",
    "icon": "🌧️",
    "difficulty": 4,
    "description": "Bể chứa nước ngầm dung tích 200.000 m³ đặt dưới lòng công viên bảo vệ phố xá khỏi ngập lụt.",
    "tasks": [
      {
        "id": "t1",
        "text": "Thi công hàng cọc cừ bê tông tường vây sâu 30m chống sạt lở và chặn nước ngầm",
        "icon": "🧱",
        "hint": "Tường vây giữ ổn định hố đào khổng lồ giữa lòng đô thị đông đúc."
      },
      {
        "id": "t2",
        "text": "Máy đào múc 300.000 m³ đất tạo hố móng sâu 20m dưới lòng công viên",
        "icon": "🚜",
        "requires": [
          "t1"
        ],
        "hint": "Lắp hệ khung giằng thép chống sập vách hố đào."
      },
      {
        "id": "t3",
        "text": "Đổ bê tông cốt thép đáy hồ dày 1.5 mét chịu áp lực nước ngầm đẩy nổi",
        "icon": "⬛",
        "requires": [
          "t2"
        ],
        "hint": "Lực đẩy Archimedes của nước ngầm có thể đẩy nổi cả bể chứa nếu đáy mỏng."
      },
      {
        "id": "t4",
        "text": "Dựng 500 cột trụ bê tông khổng lồ đỡ trần hồ tạo không gian như ngôi đền ngầm",
        "icon": "🏛️",
        "requires": [
          "t3"
        ],
        "hint": "Kiến trúc đền ngầm chịu tải trọng cho công viên cây xanh bên trên."
      },
      {
        "id": "t5",
        "text": "Lắp 4 cụm máy bơm turbine công suất lớn 50 m³/giây dẫn ra sông chính",
        "icon": "🌀",
        "requires": [
          "t4"
        ],
        "hint": "Máy bơm hút cạn hồ sau bão để chuẩn bị đón đợt mưa ngập tiếp theo."
      },
      {
        "id": "t6",
        "text": "Đổ đất hoàn trả mặt bằng trên nóc hồ trồng cây công viên và mở cửa đón dân dạo chơi",
        "icon": "🌳",
        "requires": [
          "t5"
        ],
        "hint": "Công trình ngầm bí mật bảo vệ thành phố bình yên trước mọi cơn bão lớn."
      }
    ],
    "lesson": "Tường vây cọc cừ -> Đào hố sâu 20m -> Đổ đáy chống đẩy nổi -> Dựng cột đền ngầm -> Lắp bơm turbine lớn -> Hoàn trả công viên trên nóc."
  },
  {
    "id": "tm-150",
    "level": 150,
    "title": "Căng Cáp Dây Văng Cầu Vượt Biển Nhịp Lớn",
    "category": "architecture",
    "categoryName": "Kiến Trúc Đô Thị",
    "icon": "🌉",
    "difficulty": 4,
    "description": "Căng những sợi cáp thép cường độ cao nâng đỡ nhịp cầu văng lơ lửng giữa trời.",
    "tasks": [
      {
        "id": "t1",
        "text": "Đúc hai tháp cầu hình chữ H vươn cao 180 mét sừng sững giữa dòng biển",
        "icon": "🗼",
        "hint": "Tháp cầu là điểm tựa chịu lực neo của toàn bộ các bó cáp dây văng."
      },
      {
        "id": "t2",
        "text": "Lắp đặt ống neo cáp chôn sẵn góc nghiêng chính xác trong thân tháp cầu",
        "icon": "📐",
        "requires": [
          "t1"
        ],
        "hint": "Ống neo định vị phương chịu lực kéo căng của từng sợi dây văng."
      },
      {
        "id": "t3",
        "text": "Dùng tời kéo từng tao cáp thép cường độ cao luồn qua ống bảo vệ HDPE màu trắng",
        "icon": "🥢",
        "requires": [
          "t2"
        ],
        "hint": "Ống HDPE chống tia UV và có gân xoắn xua tan dao động do gió mưa."
      },
      {
        "id": "t4",
        "text": "Kích thủy lực đồng bộ kéo căng bó cáp với lực căng 800 tấn vào dầm cầu",
        "icon": "💪",
        "requires": [
          "t3"
        ],
        "hint": "Kéo căng cáp nâng đỡ từng đốt dầm cầu thép vươn dần ra giữa sông."
      },
      {
        "id": "t5",
        "text": "Dùng cảm biến đo tần số rung động của dây cáp hiệu chỉnh lực căng chuẩn xác",
        "icon": "🎸",
        "requires": [
          "t4"
        ],
        "hint": "Dây cáp như dây đàn, tần số âm thanh thể hiện chính xác độ căng."
      },
      {
        "id": "t6",
        "text": "Hợp long mối nối dầm cầu cuối cùng giữa hai bờ thông xe toàn tuyến",
        "icon": "🚗",
        "requires": [
          "t5"
        ],
        "hint": "Cây cầu dây văng mỹ thuật tuyệt đẹp kết nối hai bờ phồn vinh."
      }
    ],
    "lesson": "Đúc tháp chữ H -> Đặt ống neo chuẩn góc -> Luồn tao cáp qua ống HDPE -> Kích kéo căng 800 tấn -> Đo tần số rung -> Hợp long thông xe."
  },
  {
    "id": "tm-151",
    "level": 151,
    "title": "Lắp Hệ Thống Kính Hộp Low-E Tiết Kiệm Năng Lượng",
    "category": "architecture",
    "categoryName": "Kiến Trúc Đô Thị",
    "icon": "🪟",
    "difficulty": 3,
    "description": "Mặt dựng kính thông minh phản xạ nhiệt bức xạ mặt trời giúp tòa nhà luôn mát mẻ.",
    "tasks": [
      {
        "id": "t1",
        "text": "Lắp đặt hệ thống khung nhôm định hình Unitized liên kết vào sàn bê tông",
        "icon": "📐",
        "hint": "Khung nhôm chống rung lắc động đất và co giãn nhiệt."
      },
      {
        "id": "t2",
        "text": "Chế tạo tấm kính hộp 2 lớp có phủ lớp oxit kim loại bạc siêu mỏng Low-E",
        "icon": "🪞",
        "requires": [
          "t1"
        ],
        "hint": "Lớp phủ Low-E cho ánh sáng đi qua nhưng chặn 90% tia nhiệt hồng ngoại."
      },
      {
        "id": "t3",
        "text": "Bơm khí trơ Argon vào khoang rỗng 12mm giữa 2 lớp kính cách nhiệt",
        "icon": "💨",
        "requires": [
          "t2"
        ],
        "hint": "Khí Argon dẫn nhiệt cực kém ngăn nhiệt nóng bên ngoài truyền vào phòng."
      },
      {
        "id": "t4",
        "text": "Bắn keo silicone kết cấu chuyên dụng dán kín khít 4 mép kính chống thấm nước",
        "icon": "🧴",
        "requires": [
          "t3"
        ],
        "hint": "Keo silicone chịu bão gió cấp 17 và tia cực tím suốt 30 năm."
      },
      {
        "id": "t5",
        "text": "Robot cẩu hút chân không nhấc tấm kính nặng 250kg lắp vào khung nhôm mặt tiền",
        "icon": "🦾",
        "requires": [
          "t4"
        ],
        "hint": "Tay hút chân không giữ tấm kính an toàn tuyệt đối ở độ cao 200m."
      },
      {
        "id": "t6",
        "text": "Tòa nhà phủ lớp áo kính xanh ngọc long lanh giảm 40% chi phí điện điều hòa",
        "icon": "🏢",
        "requires": [
          "t5"
        ],
        "hint": "Công trình đạt chứng chỉ xanh LEED Platinum danh giá toàn cầu."
      }
    ],
    "lesson": "Lắp khung nhôm -> Kính phủ Low-E -> Bơm khí Argon cách nhiệt -> Bắn keo silicone -> Robot hút lắp kính -> Giảm 40% điện điều hòa."
  },
  {
    "id": "tm-152",
    "level": 152,
    "title": "Thi Công Vườn Treo Sinh Thái Và Thu Gom Nước Mưa",
    "category": "architecture",
    "categoryName": "Kiến Trúc Đô Thị",
    "icon": "🌿",
    "difficulty": 3,
    "description": "Biến nóc tòa nhà bê tông thành ốc đảo xanh giảm hiệu ứng đảo nhiệt đô thị.",
    "tasks": [
      {
        "id": "t1",
        "text": "Sơn 3 lớp màng chống thấm polyurethane đàn hồi cao lên sàn mái bê tông",
        "icon": "🖌️",
        "hint": "Ngăn tuyệt đối rễ cây và nước ngấm dột xuống các tầng dưới."
      },
      {
        "id": "t2",
        "text": "Trải lớp màng chống rễ đâm bằng đồng ngăn rễ cây chọc thủng sàn",
        "icon": "🛡️",
        "requires": [
          "t1"
        ],
        "hint": "Ion đồng tự nhiên ngăn rễ cây không phát triển xuyên qua."
      },
      {
        "id": "t3",
        "text": "Lắp vỉ thoát nước ngầm VersiCell có các cốc trữ nước mưa thông minh",
        "icon": "🕳️",
        "requires": [
          "t2"
        ],
        "hint": "Vỉ nhựa rỗng thoát nước thừa khi mưa lớn và giữ lại nước cho rễ cây lúc nắng."
      },
      {
        "id": "t4",
        "text": "Trải lớp vải địa kỹ thuật ngăn đất cát trôi xuống làm tắc ống thoát",
        "icon": "🧵",
        "requires": [
          "t3"
        ],
        "hint": "Vải địa cho nước thấm qua nhưng giữ toàn bộ hạt đất trồng lại."
      },
      {
        "id": "t5",
        "text": "Đổ lớp đất khoáng siêu nhẹ chuyên dụng cho mái nhà trộn đá bọt pumice",
        "icon": "🪨",
        "requires": [
          "t4"
        ],
        "hint": "Đất siêu nhẹ giảm tải trọng đè lên kết cấu chịu lực của tòa nhà."
      },
      {
        "id": "t6",
        "text": "Trồng thảm hoa cúc dại, cây bụi bản địa và hệ thống tưới nhỏ giọt tự động",
        "icon": "🌸",
        "requires": [
          "t5"
        ],
        "hint": "Mái nhà mát lạnh thu hút chim chóc và bướm về sinh sống giữa lòng thành phố."
      }
    ],
    "lesson": "Chống thấm PU -> Màng chống rễ đồng -> Vỉ thoát VersiCell -> Vải địa kỹ thuật -> Đất nhẹ đá bọt -> Trồng hoa tưới nhỏ giọt."
  },
  {
    "id": "tm-153",
    "level": 153,
    "title": "Trung Tâm Điều Hành Đô Thị Thông Minh (IOC)",
    "category": "architecture",
    "categoryName": "Kiến Trúc Đô Thị",
    "icon": "🖥️",
    "difficulty": 4,
    "description": "Bộ não số hóa thu thập dữ liệu giao thông, năng lượng và cứu hỏa toàn thành phố.",
    "tasks": [
      {
        "id": "t1",
        "text": "Lắp dựng màn hình ghép Micro-LED khổng lồ 200 inch tại phòng điều hành",
        "icon": "📺",
        "hint": "Màn hình cong độ phân giải 8K hiển thị bản đồ số hóa toàn cảnh đô thị."
      },
      {
        "id": "t2",
        "text": "Kết nối mạng truyền dữ liệu từ 10.000 camera AI giám sát giao thông trên đường",
        "icon": "📷",
        "requires": [
          "t1"
        ],
        "hint": "Luồng hình ảnh trực tiếp nhận diện tự động xe vi phạm và ùn tắc."
      },
      {
        "id": "t3",
        "text": "Tích hợp cảm biến áp lực mạng lưới cấp nước sạch phát hiện rò rỉ đường ống",
        "icon": "💧",
        "requires": [
          "t2"
        ],
        "hint": "Phát hiện vị trí bục vỡ đường ống ngầm trong 30 giây để van tự đóng."
      },
      {
        "id": "t4",
        "text": "Phần mềm bản đồ số 3D Digital Twin mô phỏng luồng di chuyển của người dân",
        "icon": "🏙️",
        "requires": [
          "t2"
        ],
        "hint": "Bản sao kỹ thuật số 3D của thành phố hỗ trợ dự báo quy hoạch."
      },
      {
        "id": "t5",
        "text": "Hệ thống AI tự động cảnh báo điểm nóng tắc đường và tự điều chỉnh đèn tín hiệu",
        "icon": "🚦",
        "requires": [
          "t3",
          "t4"
        ],
        "hint": "Tự động phân luồng xe cứu thương qua ngã tư ưu tiên làn sóng xanh."
      },
      {
        "id": "t6",
        "text": "Tổng chỉ huy điều phối các lực lượng cứu hỏa, y tế và công an trên một nền tảng",
        "icon": "🚨",
        "requires": [
          "t5"
        ],
        "hint": "Thời gian phản ứng cứu nạn cứu hộ giảm từ 15 phút xuống còn 4 phút."
      }
    ],
    "lesson": "Màn hình cong Micro-LED -> Kết nối 10.000 camera AI -> Cảm biến rò rỉ nước -> Bản sao số Digital Twin -> AI cảnh báo ùn tắc -> Chỉ huy phản ứng nhanh."
  },
  {
    "id": "tm-154",
    "level": 154,
    "title": "Hệ Thống Thu Gom Rác Bằng Khí Nén Hút Chân Không Ngầm",
    "category": "architecture",
    "categoryName": "Kiến Trúc Đô Thị",
    "icon": "📦",
    "difficulty": 4,
    "description": "Đô thị không bóng dáng xe rác: Rác bay dưới lòng đất với vận tốc 70 km/h.",
    "tasks": [
      {
        "id": "t1",
        "text": "Đặt các họng nhận rác thông minh phân loại 3 màu: Hữu cơ, Tái chế và Khác",
        "icon": "📮",
        "hint": "Cư dân quẹt thẻ mở họng bỏ rác sạch sẽ không mùi hôi."
      },
      {
        "id": "t2",
        "text": "Túi rác rơi xuống khoang chứa tạm nằm dưới hố ga ngầm của từng tòa nhà",
        "icon": "🕳️",
        "requires": [
          "t1"
        ],
        "hint": "Khoang van xả rác kín khí ngăn côn trùng và mùi rác phát tán."
      },
      {
        "id": "t3",
        "text": "Khi cảm biến quang báo rác đầy khoang, gửi tín hiệu về trạm hút trung tâm",
        "icon": "📡",
        "requires": [
          "t2"
        ],
        "hint": "Thu gom tự động theo nhu cầu thực tế."
      },
      {
        "id": "t4",
        "text": "Trạm trung tâm khởi động máy quạt hút chân không tạo áp suất âm cực lớn",
        "icon": "🌀",
        "requires": [
          "t3"
        ],
        "hint": "Chênh lệch áp suất tạo luồng gió bão hút rác trong đường ống thép ngầm."
      },
      {
        "id": "t5",
        "text": "Van xả mở toang: Túi rác bị hút bay vù vù trong ống thép ngầm với tốc độ 70 km/h",
        "icon": "💨",
        "requires": [
          "t4"
        ],
        "hint": "Hành trình ngầm 2km đưa rác về thẳng nhà máy xử lý chỉ trong 90 giây."
      },
      {
        "id": "t6",
        "text": "Rác rơi vào cyclone tách khí xả vào thùng ép kín chở đi nhà máy đốt rác phát điện",
        "icon": "⚡",
        "requires": [
          "t5"
        ],
        "hint": "Thành phố sạch bóng rác rưởi không còn cảnh xe rác bốc mùi trên phố."
      }
    ],
    "lesson": "Họng rác phân loại 3 màu -> Khoang chứa tạm kín -> Cảm biến báo đầy -> Bật quạt hút chân không -> Rác bay 70km/h trong ống -> Cyclone ép rác phát điện."
  },
  {
    "id": "tm-155",
    "level": 155,
    "title": "Trạm Biến Áp Ngầm 220kV Cách Điện Khí SF6 (GIS)",
    "category": "architecture",
    "categoryName": "Kiến Trúc Đô Thị",
    "icon": "⚡",
    "difficulty": 4,
    "description": "Trái tim truyền tải điện cao thế đặt an toàn dưới tầng hầm trung tâm thương mại.",
    "tasks": [
      {
        "id": "t1",
        "text": "Xây dựng buồng ngầm chống cháy cấp đặc biệt với tường bê tông dày 60cm",
        "icon": "🧱",
        "hint": "Tường ngăn cháy chịu nhiệt 4 giờ ngăn ngừa sự cố chập điện."
      },
      {
        "id": "t2",
        "text": "Lắp đặt hệ thống máy cắt và thanh cái cách điện bằng khí trơ SF6 (GIS)",
        "icon": "📦",
        "requires": [
          "t1"
        ],
        "hint": "Khí Sulfur Hexafluoride SF6 có độ cách điện gấp 3 lần không khí giúp thiết bị cực nhỏ gọn."
      },
      {
        "id": "t3",
        "text": "Hút chân không buồng chứa và nạp khí SF6 tinh khiết đạt áp suất chuẩn 0.6 MPa",
        "icon": "💨",
        "requires": [
          "t2"
        ],
        "hint": "Khí SF6 dập tắt hồ quang điện tức thì khi ngắt mạch."
      },
      {
        "id": "t4",
        "text": "Kéo cáp ngầm điện áp siêu cao 220kV vào đầu nối cáp bọc kín",
        "icon": "🔌",
        "requires": [
          "t3"
        ],
        "hint": "Cáp ngầm bọc lớp chì và màng bán dẫn chống phóng điện cục bộ."
      },
      {
        "id": "t5",
        "text": "Thử nghiệm đóng điện áp chịu đựng AC 460kV kiểm tra độ bền điện môi",
        "icon": "⚡",
        "requires": [
          "t4"
        ],
        "hint": "Thử tải với điện áp gấp đôi điện áp danh định để đảm bảo an toàn tuyệt đối."
      },
      {
        "id": "t6",
        "text": "Đóng cầu dao hòa lưới: Trạm cấp điện an toàn liên tục cho nửa triệu dân cư",
        "icon": "💡",
        "requires": [
          "t5"
        ],
        "hint": "Trạm biến áp ngầm không chiếm diện tích đất vàng và không gây từ trường độc hại."
      }
    ],
    "lesson": "Buồng ngầm chống cháy -> Lắp thiết bị GIS -> Hút chân không nạp SF6 -> Kéo cáp 220kV -> Thử điện áp 460kV -> Đóng điện hòa lưới."
  },
  {
    "id": "tm-156",
    "level": 156,
    "title": "Lắp Đặt Thang Máy Tốc Độ Cao 20m/s Phanh Từ Trường",
    "category": "architecture",
    "categoryName": "Kiến Trúc Đô Thị",
    "icon": "🛗",
    "difficulty": 4,
    "description": "Vút bay lên tầng 100 trong 45 giây với cabin điều áp chống ù tai.",
    "tasks": [
      {
        "id": "t1",
        "text": "Thả dây dọi laser căn chỉnh độ thẳng đứng của hai thanh ray dẫn hướng cabin",
        "icon": "📏",
        "hint": "Sai số độ thẳng đứng dưới 0.5mm suốt chiều cao 400m của giếng thang."
      },
      {
        "id": "t2",
        "text": "Bắt bu-lông cố định thanh ray thép đặc T-rail vào vách giếng thang",
        "icon": "🔧",
        "requires": [
          "t1"
        ],
        "hint": "Ray dẫn hướng dẫn hướng con lăn cabin chạy êm như tàu cao tốc."
      },
      {
        "id": "t3",
        "text": "Lắp đặt động cơ kéo đồng bộ nam châm vĩnh cửu không hộp số trên phòng máy đỉnh",
        "icon": "⚙️",
        "requires": [
          "t2"
        ],
        "hint": "Động cơ đĩa từ siêu mạnh quay êm ru không tiếng ồn."
      },
      {
        "id": "t4",
        "text": "Luồn 8 sợi cáp thép bọc carbon siêu bền treo cabin và đối trọng cân bằng",
        "icon": "🪢",
        "requires": [
          "t3"
        ],
        "hint": "Cáp sợi carbon siêu nhẹ giảm 50% tải trọng kéo cho động cơ."
      },
      {
        "id": "t5",
        "text": "Lắp hệ thống quạt hút điều áp tự động và phanh hãm an toàn nam châm vĩnh cửu",
        "icon": "🧲",
        "requires": [
          "t4"
        ],
        "hint": "Hệ thống điều áp thay đổi áp suất cabin êm dịu chống ù tai cho hành khách."
      },
      {
        "id": "t6",
        "text": "Chạy thử nghiệm tốc độ tối đa 20m/s: Đặt đồng xu dựng đứng trên sàn cabin không bị đổ",
        "icon": "🪙",
        "requires": [
          "t5"
        ],
        "hint": "Độ êm ái hoàn hảo đưa hành khách lên đỉnh ngắm toàn cảnh thành phố."
      }
    ],
    "lesson": "Dọi laser ray dẫn hướng -> Bắt ray thép T-rail -> Động cơ nam châm vĩnh cửu -> Cáp carbon siêu bền -> Hệ thống điều áp phanh từ -> Thử nghiệm đồng xu đứng."
  },
  {
    "id": "tm-157",
    "level": 157,
    "title": "Mạng Lưới Cảm Biến Bụi Mịn PM2.5 Toàn Thành Phố",
    "category": "architecture",
    "categoryName": "Kiến Trúc Đô Thị",
    "icon": "🌫️",
    "difficulty": 3,
    "description": "Quan trắc ô nhiễm không khí theo thời gian thực bằng cảm biến tán xạ laser quang học.",
    "tasks": [
      {
        "id": "t1",
        "text": "Chọn vị trí lắp trạm quan trắc trên các nóc trường học và nút giao thông đông đúc",
        "icon": "🏫",
        "hint": "Vị trí thoáng gió không bị chắn bởi tán cây rậm rạp."
      },
      {
        "id": "t2",
        "text": "Cố định hộp thiết bị quan trắc thời tiết chống nước bụi chuẩn IP67 lên cột thép",
        "icon": "📦",
        "requires": [
          "t1"
        ],
        "hint": "Hộp bảo vệ che chắn mạch điện trước mưa bão và nắng gắt."
      },
      {
        "id": "t3",
        "text": "Quạt hút siêu nhỏ hút liên tục luồng không khí ngoài trời vào buồng đo laser",
        "icon": "💨",
        "requires": [
          "t2"
        ],
        "hint": "Luồng khí ổn định 1 lít/phút đưa các hạt bụi bay ngang chùm tia laser."
      },
      {
        "id": "t4",
        "text": "Chùm tia laser chiếu qua luồng khí: Hạt bụi PM2.5 làm tán xạ tia sáng",
        "icon": "🔴",
        "requires": [
          "t3"
        ],
        "hint": "Cảm biến quang đếm cường độ ánh sáng tán xạ tính ra kích thước hạt bụi."
      },
      {
        "id": "t5",
        "text": "Vi xử lý tính toán mật độ bụi mịn microgam/m³ và chỉ số chất lượng không khí AQI",
        "icon": "🧮",
        "requires": [
          "t4"
        ],
        "hint": "Phân loại mức độ ô nhiễm: Xanh (Tốt), Vàng (Trung bình), Đỏ (Nguy hại)."
      },
      {
        "id": "t6",
        "text": "Truyền dữ liệu 4G lên bản đồ không khí công cộng gửi cảnh báo nhắc dân đeo khẩu trang",
        "icon": "📱",
        "requires": [
          "t5"
        ],
        "hint": "Bảo vệ lá phổi cộng đồng bằng dữ liệu minh bạch thời gian thực."
      }
    ],
    "lesson": "Chọn nóc trường học -> Hộp chống nước IP67 -> Hút khí vào buồng đo -> Tán xạ laser đếm hạt bụi -> Tính chỉ số AQI -> Báo động qua điện thoại."
  },
  {
    "id": "tm-158",
    "level": 158,
    "title": "Hệ Thống Chữa Cháy Phun Sương Áp Lực Cao Tầng Hầm",
    "category": "architecture",
    "categoryName": "Kiến Trúc Đô Thị",
    "icon": "🚒",
    "difficulty": 4,
    "description": "Dập tắt đám cháy xăng dầu bằng sương mù nước áp lực 140 bar mà không gây ngập nước.",
    "tasks": [
      {
        "id": "t1",
        "text": "Lắp đặt đường ống thép không gỉ inox 316 chịu áp lực cực cao dọc trần tầng hầm",
        "icon": "🔧",
        "hint": "Ống inox chịu áp lực thử nghiệm lên đến 200 bar không biến dạng."
      },
      {
        "id": "t2",
        "text": "Lắp các đầu phun sương vi mô Water Mist gắn bóng thủy tinh cảm biến nhiệt 68°C",
        "icon": "🚿",
        "requires": [
          "t1"
        ],
        "hint": "Đầu phun có các lỗ siêu nhỏ kích thước micron tạo màn sương mịn."
      },
      {
        "id": "t3",
        "text": "Cụm máy bơm piston áp lực cao kết nối với bồn nước sạch khử khoáng",
        "icon": "🌀",
        "requires": [
          "t1"
        ],
        "hint": "Nước sạch không cặn bẩn để tránh tắc nghẽn các lỗ phun sương vi mô."
      },
      {
        "id": "t4",
        "text": "Khi nhiệt độ hầm tăng cao, bóng thủy tinh nổ kích hoạt bơm đẩy áp lực lên 140 bar",
        "icon": "💥",
        "requires": [
          "t2",
          "t3"
        ],
        "hint": "Áp lực cực lớn xé rách dòng nước thành hàng tỷ hạt sương siêu nhỏ 50 micron."
      },
      {
        "id": "t5",
        "text": "Hạt sương siêu nhỏ bốc hơi tức thì hấp thụ nhiệt lượng cực nhanh làm lạnh đám cháy",
        "icon": "❄️",
        "requires": [
          "t4"
        ],
        "hint": "Sương bốc hơi giãn nở 1700 lần thể tích đẩy oxy ra ngoài làm lửa ngạt thở."
      },
      {
        "id": "t6",
        "text": "Đám cháy xe hơi dập tắt hoàn toàn trong 60 giây và sàn tầng hầm chỉ ẩm nhẹ",
        "icon": "✅",
        "requires": [
          "t5"
        ],
        "hint": "Tiết kiệm 80% lượng nước so với vòi cứu hỏa truyền thống, bảo vệ tài sản xe cộ."
      }
    ],
    "lesson": "Ống inox 316 chịu áp -> Đầu phun sương vi mô 68°C -> Bơm piston nước sạch -> Nổ cảm ứng đẩy áp 140 bar -> Bốc hơi hạ nhiệt đẩy oxy -> Dập tắt 60 giây."
  },
  {
    "id": "tm-159",
    "level": 159,
    "title": "Lắp Cột Đèn Đường Thông Minh Tích Hợp Sạc Xe Điện",
    "category": "architecture",
    "categoryName": "Kiến Trúc Đô Thị",
    "icon": "💡",
    "difficulty": 3,
    "description": "Cột đèn đa năng tích hợp đèn LED đổi màu, cổng sạc ô tô điện và trạm phát Wifi 5G.",
    "tasks": [
      {
        "id": "t1",
        "text": "Chôn bu-lông móng cột đèn trên vỉa hè và luồn cáp điện nguồn 3 pha",
        "icon": "⚓",
        "hint": "Nguồn điện 3 pha công suất lớn đủ cấp điện cho sạc ô tô 22kW."
      },
      {
        "id": "t2",
        "text": "Dựng cột thép bát giác cao 8 mét và siết chặt ê-cu chân cột",
        "icon": "🗼",
        "requires": [
          "t1"
        ],
        "hint": "Cột thép mạ kẽm nhúng nóng chống gỉ sét suốt 20 năm."
      },
      {
        "id": "t3",
        "text": "Lắp bộ đèn LED công nghệ Dimming tiết kiệm điện trên cần vươn cột đèn",
        "icon": "💡",
        "requires": [
          "t2"
        ],
        "hint": "Đèn tự động giảm độ sáng xuống 50% sau nửa đêm khi đường vắng người."
      },
      {
        "id": "t4",
        "text": "Gắn trạm phát sóng di động 5G Micro-cell và camera an ninh 360 độ trên thân cột",
        "icon": "📡",
        "requires": [
          "t2"
        ],
        "hint": "Cung cấp mạng Internet di động tốc độ cao cho toàn bộ tuyến phố."
      },
      {
        "id": "t5",
        "text": "Lắp cổng cắm sạc xe điện Type 2 kèm màn hình thanh toán quẹt thẻ dưới chân cột",
        "icon": "🚗",
        "requires": [
          "t1",
          "t3"
        ],
        "hint": "Cư dân đỗ xe ven đường có thể cắm sạc qua đêm tiện lợi."
      },
      {
        "id": "t6",
        "text": "Bật công tắc điều khiển: Cột đèn sáng bừng và sẵn sàng phục vụ đô thị tương lai",
        "icon": "✨",
        "requires": [
          "t4",
          "t5"
        ],
        "hint": "Mô hình hạ tầng đa năng tiết kiệm không gian vỉa hè đô thị."
      }
    ],
    "lesson": "Chôn móng cáp 3 pha -> Dựng cột thép 8m -> Lắp đèn LED Dimming -> Gắn trạm phát 5G -> Lắp cổng sạc xe điện -> Bật vận hành đô thị."
  },
  {
    "id": "tm-160",
    "level": 160,
    "title": "Màn Trùm: Khánh Thành Tòa Tháp Sinh Thái Biểu Tượng",
    "category": "architecture",
    "categoryName": "Kiến Trúc Đô Thị",
    "icon": "🏢",
    "difficulty": 5,
    "description": "Màn trùm kiến trúc: Bật hệ thống vận hành tòa tháp chọc trời xanh 108 tầng với Mốc Neo Cố Định!",
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
        "text": "Mốc Neo: Kiểm tra toàn diện kết cấu chịu lực và chứng chỉ an toàn phòng cháy",
        "icon": "📜",
        "hint": "Mốc khởi đầu bắt buộc: Giấy phép nghiệm thu công trình cấp 1."
      },
      {
        "id": "t2",
        "text": "Đóng cầu dao trạm biến áp ngầm cấp điện cho toàn bộ hệ thống cơ điện MEP",
        "icon": "⚡",
        "requires": [
          "t1"
        ],
        "hint": "Bơm dòng điện năng lượng xanh thắp sáng toàn tòa nhà."
      },
      {
        "id": "t3",
        "text": "Khởi động hệ thống điều hòa trung tâm Chiller giải nhiệt nước chạy êm ru",
        "icon": "❄️",
        "requires": [
          "t2"
        ],
        "hint": "Cung cấp khí tươi lọc bụi mịn vào 108 tầng tháp."
      },
      {
        "id": "t4",
        "text": "Bật máy chủ AI quản lý tòa nhà BMS điều khiển ánh sáng và thang máy thông minh",
        "icon": "🧠",
        "requires": [
          "t2"
        ],
        "hint": "Tự động tối ưu hóa điện năng theo mật độ người làm việc."
      },
      {
        "id": "t5",
        "text": "Thử nghiệm hệ thống chuông báo cháy và vòi phun sương tự động toàn tòa nhà",
        "icon": "🔔",
        "requires": [
          "t3",
          "t4"
        ],
        "hint": "Kiểm tra bước an toàn cuối cùng trước khi đón người vào sinh sống."
      },
      {
        "id": "t6",
        "text": "Cắt băng khánh thành: Đèn LED nghệ thuật trên đỉnh tháp rực sáng vút lên bầu trời",
        "icon": "🎆",
        "requires": [
          "t5"
        ],
        "hint": "Tòa tháp sinh thái biểu tượng kiêu hãnh khánh thành thành công rực rỡ!"
      }
    ],
    "lesson": "Mốc Nghiệm thu -> Đóng điện MEP -> Bật điều hòa Chiller -> Kích hoạt AI BMS -> Thử chuông báo cháy -> Cắt băng khánh thành rực sáng."
  }
];
