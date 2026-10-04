// js/logic-grid-cases-part2.js - Ngân hàng Vụ Án Suy Luận Logic Trinh Thám (Phần 2: Vụ án 26 - 50)
// Chuẩn bài toán suy luận Einstein & Olympic Quốc tế dành cho học sinh Lớp 4

export const LOGIC_GRID_CASES_PART2 = [
  {
    id: "lg-26",
    title: "Vụ Án Chiếc Đồng Hồ Cát Thời Gian",
    difficulty: 3,
    story: "Bốn pháp sư nhí Huy, Harry, Ron, Hermione bảo vệ 4 phép thuật cổ xưa của học viện: Phép Gió, Phép Băng, Phép Lửa và Phép Ánh Sáng.",
    rows: { name: "Pháp sư", items: ["Huy", "Harry", "Ron", "Hermione"] },
    cols: { name: "Phép thuật", items: ["Phép Gió", "Phép Băng", "Phép Lửa", "Ánh Sáng"] },
    clues: [
      "1. Hermione nắm giữ câu thần chú phát ra Ánh Sáng chói lọi xua tan bóng đêm.",
      "2. Huy luyện tập phép điều khiển những ngọn Lửa thiêng bừng cháy rực rỡ.",
      "3. Ron vung đũa phép tạo ra những bông tuyết Phép Băng mát lạnh lấp lánh.",
      "4. Harry cưỡi chổi bay lượn cùng những cơn Gió lốc trên bầu trời cao."
    ],
    solution: {
      "Huy": "Phép Lửa",
      "Harry": "Phép Gió",
      "Ron": "Phép Băng",
      "Hermione": "Ánh Sáng"
    },
    explanation: "Hermione giữ Ánh Sáng. Huy luyện Phép Lửa. Ron tạo Phép Băng. Harry cưỡi Phép Gió."
  },
  {
    id: "lg-27",
    title: "Bí Mật Tàu Ngầm Thám Hiểm Rãnh Mariana",
    difficulty: 3,
    story: "Bốn nhà hải dương học Triết, Jacques, James, Sylvia lặn xuống rãnh biển sâu nhất thế giới và chụp ảnh 4 sinh vật kỳ thú: Mực Khổng Lồ, Cá Phát Quang, San Hô Đen và Cua Nhện.",
    rows: { name: "Chuyên gia", items: ["Triết", "Jacques", "James", "Sylvia"] },
    cols: { name: "Sinh vật biển", items: ["Mực Khổng Lồ", "Cá Phát Quang", "San Hô Đen", "Cua Nhện"] },
    clues: [
      "1. Triết chụp được bức ảnh chú Mực Khổng Lồ dài 10 mét với những xúc tu vĩ đại.",
      "2. Jacques khám phá bầy Cá Phát Quang nhấp nháy ánh sáng xanh lam trong bóng tối mịt mùng.",
      "3. James thu thập mẫu vật cành San Hô Đen nghìn năm tuổi dưới đáy biển.",
      "4. Sylvia kiên nhẫn ghi hình chú Cua Nhện khổng lồ có sải chân dài 3 mét."
    ],
    solution: {
      "Triết": "Mực Khổng Lồ",
      "Jacques": "Cá Phát Quang",
      "James": "San Hô Đen",
      "Sylvia": "Cua Nhện"
    },
    explanation: "Triết chụp Mực Khổng Lồ. Jacques chụp Cá Phát Quang. James lấy mẫu San Hô Đen. Sylvia ghi hình Cua Nhện."
  },
  {
    id: "lg-28",
    title: "Cuộc Đua Xe Công Thức 1 Mini Tốc Độ",
    difficulty: 3,
    story: "Bốn tay đua nhí Huy, Lewis, Max, Charles điều khiển 4 chiếc xe đua tốc độ cao mang màu sắc huyền thoại: Đỏ Ferrari, Xanh Mercedes, Trắng RedBull và Vàng McLaren.",
    rows: { name: "Tay đua", items: ["Huy", "Lewis", "Max", "Charles"] },
    cols: { name: "Màu xe đua", items: ["Đỏ Ferrari", "Xanh Mercedes", "Trắng RedBull", "Vàng McLaren"] },
    clues: [
      "1. Huy lái chiếc xe mang sắc Đỏ rực cháy như tia chớp trên đường pit.",
      "2. Lewis giành vị trí xuất phát đầu tiên cùng chiếc xe màu Xanh bạc uy lực.",
      "3. Max tăng tốc bứt phá ngoạn mục trên chiếc xe màu Trắng tinh khôi.",
      "4. Charles chinh phục những khúc cua gắt với màu xe Vàng rực rỡ còn lại."
    ],
    solution: {
      "Huy": "Đỏ Ferrari",
      "Lewis": "Xanh Mercedes",
      "Max": "Trắng RedBull",
      "Charles": "Vàng McLaren"
    },
    explanation: "Huy lái Đỏ Ferrari. Lewis lái Xanh Mercedes. Max lái Trắng RedBull. Charles lái Vàng McLaren."
  },
  {
    id: "lg-29",
    title: "Vụ Án Giọt Mực Bí Ẩn Trên Bài Thi Olympic",
    difficulty: 4,
    story: "Bốn thí sinh xuất sắc Triết, Thảo, Quang, Vi mang 4 chiếc bút may mắn đi thi: Bút Máy mực tím, Bút Dạ Quang, Bút Chì 2B và Bút Bi Kim.",
    rows: { name: "Thí sinh", items: ["Triết", "Thảo", "Quang", "Vi"] },
    cols: { name: "Loại bút", items: ["Bút Máy", "Bút Dạ Quang", "Bút Chì 2B", "Bút Bi Kim"] },
    clues: [
      "1. Triết viết bài tự luận nắn nót từng nét chữ thanh đậm bằng chiếc Bút Máy kim tinh.",
      "2. Thảo dùng Bút Dạ Quang vàng chanh để gạch chân các dữ kiện quan trọng của đề bài.",
      "3. Quang vẽ hình học không gian và đồ thị bằng chiếc Bút Chì 2B sắc nét.",
      "4. Vi ghi nhanh các bước tính toán nháp bằng chiếc Bút Bi Kim đầu nhỏ."
    ],
    solution: {
      "Triết": "Bút Máy",
      "Thảo": "Bút Dạ Quang",
      "Quang": "Bút Chì 2B",
      "Vi": "Bút Bi Kim"
    },
    explanation: "Triết dùng Bút Máy. Thảo dùng Bút Dạ Quang. Quang dùng Bút Chì 2B. Vi dùng Bút Bi Kim."
  },
  {
    id: "lg-30",
    title: "Bí Mật Đảo Khủng Long Kỷ Jura",
    difficulty: 4,
    story: "Bốn nhà cổ sinh vật học Huy, Alan, Ellie, Ian phát hiện 4 bộ xương hóa thạch hoàn chỉnh: Khủng Long T-Rex, Khủng Long Cổ Dài, Thằn Lằn Bay và Khủng Long Ba Sừng.",
    rows: { name: "Nhà khoa học", items: ["Huy", "Alan", "Ellie", "Ian"] },
    cols: { name: "Hóa thạch", items: ["T-Rex", "Cổ Dài", "Thằn Lằn Bay", "Ba Sừng"] },
    clues: [
      "1. Huy ghép hoàn chỉnh bộ hàm sắc nhọn của chúa tể săn mồi Khủng Long T-Rex.",
      "2. Ellie tìm thấy các đốt sống khổng lồ của loài Khủng Long Cổ Dài ăn lá cây cao nhất.",
      "3. Ian lần theo dấu vết màng cánh hóa thạch trên vách đá của loài Thằn Lằn Bay.",
      "4. Alan khai quật được chiếc khiên sọ kiên cố của loài Khủng Long Ba Sừng."
    ],
    solution: {
      "Huy": "T-Rex",
      "Alan": "Ba Sừng",
      "Ellie": "Cổ Dài",
      "Ian": "Thằn Lằn Bay"
    },
    explanation: "Huy ghép T-Rex. Ellie tìm Cổ Dài. Ian tìm Thằn Lằn Bay. Alan khai quật Ba Sừng."
  },
  {
    id: "lg-31",
    title: "Hội Thao Cầu Vồng Lớp 4A",
    difficulty: 4,
    story: "Bốn vận động viên nhí Triết, Tuấn, Lan, Huy tranh tài ở 4 môn thể thao: Bắn Cung, Điền Kinh, Nhảy Xa và Ném Bóng.",
    rows: { name: "Vận động viên", items: ["Triết", "Tuấn", "Lan", "Huy"] },
    cols: { name: "Môn thi", items: ["Bắn Cung", "Điền Kinh", "Nhảy Xa", "Ném Bóng"] },
    clues: [
      "1. Triết tập trung cao độ, kéo căng dây cung và bắn trúng hồng tâm 10 điểm (Bắn Cung).",
      "2. Tuấn sở hữu đôi chân thần tốc và về đích đầu tiên ở đường chạy Điền Kinh 100 mét.",
      "3. Lan có sức bật ấn tượng và tiếp đất xa nhất ở hố cát môn Nhảy Xa.",
      "4. Huy ném quả bóng bay vút qua vạch kỷ lục môn Ném Bóng."
    ],
    solution: {
      "Triết": "Bắn Cung",
      "Tuấn": "Điền Kinh",
      "Lan": "Nhảy Xa",
      "Huy": "Ném Bóng"
    },
    explanation: "Triết thi Bắn Cung. Tuấn thi Điền Kinh. Lan thi Nhảy Xa. Huy thi Ném Bóng."
  },
  {
    id: "lg-32",
    title: "Vụ Án Chiếc Kính Viễn Vọng Không Gian",
    difficulty: 4,
    story: "Bốn nhà thiên văn Huy, Carl, Galileo, Kepler hướng kính thiên văn chụp ảnh 4 chòm sao rực rỡ: Gấu Lớn, Lạp Hộ, Thiên Nga và Bọ Cạp.",
    rows: { name: "Nhà thiên văn", items: ["Huy", "Carl", "Galileo", "Kepler"] },
    cols: { name: "Chòm sao", items: ["Gấu Lớn", "Lạp Hộ", "Thiên Nga", "Bọ Cạp"] },
    clues: [
      "1. Huy quan sát chiếc gàu sòng 7 ngôi sao sáng rực của chòm Gấu Lớn để định hướng sao Bắc Cực.",
      "2. Carl ghi hình thắt lưng 3 ngôi sao ngọc bích của người thợ săn dũng mãnh Lạp Hộ.",
      "3. Galileo chụp được ngôi sao đỏ Antares nằm ngay tim của chòm Bọ Cạp mùa hạ.",
      "4. Kepler theo dõi đôi cánh sải rộng của chòm Thiên Nga bay dọc dải Ngân Hà."
    ],
    solution: {
      "Huy": "Gấu Lớn",
      "Carl": "Lạp Hộ",
      "Galileo": "Bọ Cạp",
      "Kepler": "Thiên Nga"
    },
    explanation: "Huy chụp Gấu Lớn. Carl chụp Lạp Hộ. Galileo chụp Bọ Cạp. Kepler chụp Thiên Nga."
  },
  {
    id: "lg-33",
    title: "Bí Mật Phòng Thí Nghiệm Hóa Học Vui",
    difficulty: 4,
    story: "Bốn nhà khoa học nhí Triết, Marie, Newton, Mendeleev thực hiện 4 phản ứng đổi màu kỳ diệu: Quỳ Tím Hóa Đỏ, Chỉ Thị Hồng, Dung Dịch Lam và Kết Tủa Vàng.",
    rows: { name: "Nhà thực nghiệm", items: ["Triết", "Marie", "Newton", "Mendeleev"] },
    cols: { name: "Hiện tượng", items: ["Quỳ Tím Đỏ", "Chỉ Thị Hồng", "Dung Dịch Lam", "Kết Tủa Vàng"] },
    clues: [
      "1. Triết nhỏ nước chanh tươi làm mẩu giấy Quỳ Tím hóa thành màu đỏ cam rực rỡ.",
      "2. Marie thêm vài giọt phenol làm dung dịch trong suốt bừng sáng sắc hồng cánh sen.",
      "3. Newton hòa tan tinh thể đồng sunfat tạo nên một ống nghiệm Dung Dịch Lam biếc tuyệt đẹp.",
      "4. Mendeleev hòa trộn hai dung dịch trong suốt để tạo ra một cơn mưa Kết Tủa Vàng lấp lánh."
    ],
    solution: {
      "Triết": "Quỳ Tím Đỏ",
      "Marie": "Chỉ Thị Hồng",
      "Newton": "Dung Dịch Lam",
      "Mendeleev": "Kết Tủa Vàng"
    },
    explanation: "Triết làm Quỳ Tím Đỏ. Marie tạo Chỉ Thị Hồng. Newton tạo Dung Dịch Lam. Mendeleev tạo Kết Tủa Vàng."
  },
  {
    id: "lg-34",
    title: "Chuyến Bay Thử Nghiệm Máy Bay Drone",
    difficulty: 4,
    story: "Bốn phi công điều khiển drone Huy, Wright, Amelia, Lindbergh nhận 4 nhiệm vụ bay quan trọng: Cứu Hộ Rừng, Chụp Ảnh Bản Đồ, Đo Không Khí và Giao Bưu Kiện.",
    rows: { name: "Phi công drone", items: ["Huy", "Wright", "Amelia", "Lindbergh"] },
    cols: { name: "Nhiệm vụ", items: ["Cứu Hộ Rừng", "Chụp Bản Đồ", "Đo Không Khí", "Giao Bưu Kiện"] },
    clues: [
      "1. Huy mang theo camera tầm nhiệt bay tuần tra để phát hiện và Cứu Hộ Rừng kịp thời.",
      "2. Wright lập trình drone bay theo quỹ đạo lưới để Chụp Ảnh Bản Đồ 3D toàn thành phố.",
      "3. Amelia lắp cảm biến bay lên tầng mây để Đo Không Khí và mật độ bụi mịn.",
      "4. Lindbergh điều khiển drone hạ cánh an toàn Giao Bưu Kiện quà tặng tới ngọn hải đăng."
    ],
    solution: {
      "Huy": "Cứu Hộ Rừng",
      "Wright": "Chụp Bản Đồ",
      "Amelia": "Đo Không Khí",
      "Lindbergh": "Giao Bưu Kiện"
    },
    explanation: "Huy Cứu Hộ Rừng. Wright Chụp Bản Đồ. Amelia Đo Không Khí. Lindbergh Giao Bưu Kiện."
  },
  {
    id: "lg-35",
    title: "Vụ Án Mất Tích Quả Cầu Pha Lê Thư Viện",
    difficulty: 4,
    story: "Bốn thủ thư học sinh Triết, Trinh, Sơn, Ngân phụ trách 4 khu vực sách chuyên đề: Sách Lịch Sử, Văn Học Cổ Điển, Khoa Học Tự Nhiên và Truyện Tranh.",
    rows: { name: "Thủ thư nhí", items: ["Triết", "Trinh", "Sơn", "Ngân"] },
    cols: { name: "Phòng đọc", items: ["Lịch Sử", "Văn Học", "Khoa Học", "Truyện Tranh"] },
    clues: [
      "1. Triết yêu thích các triều đại lịch sử và làm việc tại phòng Sách Lịch Sử hào hùng.",
      "2. Sơn mê mẩn vật lý và robot nên phụ trách phòng Khoa Học Tự Nhiên.",
      "3. Trinh yêu thích thơ ca và tiểu thuyết nên chăm sóc phòng Văn Học Cổ Điển.",
      "4. Ngân phụ trách khu vực Truyện Tranh màu sắc rực rỡ được các bạn nhỏ yêu thích nhất."
    ],
    solution: {
      "Triết": "Lịch Sử",
      "Trinh": "Văn Học",
      "Sơn": "Khoa Học",
      "Ngân": "Truyện Tranh"
    },
    explanation: "Triết quản lý Lịch Sử. Sơn quản lý Khoa Học. Trinh quản lý Văn Học. Ngân quản lý Truyện Tranh."
  },
  {
    id: "lg-36",
    title: "Khu Bảo Tồn Vườn Bách Thảo Nhiệt Đới",
    difficulty: 4,
    story: "Bốn bạn trẻ yêu thiên nhiên Huy, Thư, Hoàng, Đạt chăm sóc 4 loài thực vật quý hiếm: Cây Baobab, Hoa Sen Vua, Cây Nắp Ấm và Phong Lan Rừng.",
    rows: { name: "Người làm vườn", items: ["Huy", "Thư", "Hoàng", "Đạt"] },
    cols: { name: "Cây quý hiếm", items: ["Cây Baobab", "Sen Vua", "Nắp Ấm", "Phong Lan"] },
    clues: [
      "1. Huy chăm sóc cây Baobab khổng lồ có thân tròn phình to trữ nước di chuyển từ châu Phi.",
      "2. Thư tưới nước cho hồ Sen Vua có những chiếc lá khổng lồ nổi trên mặt nước.",
      "3. Hoàng nghiên cứu Cây Nắp Ấm chuyên bẫy sâu bọ bằng chất dịch ngọt ngào.",
      "4. Đạt treo và chăm sóc những chậu Phong Lan Rừng ngát hương trên thân cây cổ thụ."
    ],
    solution: {
      "Huy": "Cây Baobab",
      "Thư": "Sen Vua",
      "Hoàng": "Nắp Ấm",
      "Đạt": "Phong Lan"
    },
    explanation: "Huy chăm Baobab. Thư chăm Sen Vua. Hoàng nghiên cứu Nắp Ấm. Đạt chăm Phong Lan."
  },
  {
    id: "lg-37",
    title: "Cuộc Thi Xây Cầu Gỗ Chịu Lực Kỹ Sư Nhí",
    difficulty: 4,
    story: "Bốn đội kỹ sư Đội Sắt, Đội Thép, Đội Đồng, Đội Titan thiết kế 4 mô hình cầu vượt sông: Cầu Dây Văng, Cầu Giàn Thép, Cầu Vòm Đá và Cầu Dầm Chữ I.",
    rows: { name: "Đội kỹ sư", items: ["Đội Sắt", "Đội Thép", "Đội Đồng", "Đội Titan"] },
    cols: { name: "Mô hình cầu", items: ["Dây Văng", "Giàn Thép", "Vòm Đá", "Dầm Chữ I"] },
    clues: [
      "1. Đội Sắt dùng các sợi dây cước căng chịu lực tạo nên mô hình Cầu Dây Văng uyển chuyển.",
      "2. Đội Thép ghép các thanh gỗ thành mạng lưới tam giác chịu lực siêu khỏe của Cầu Giàn Thép.",
      "3. Đội Đồng mô phỏng cây cầu uốn cong hoàn hảo của kiến trúc Cầu Vòm Đá La Mã.",
      "4. Đội Titan hoàn thành mô hình Cầu Dầm Chữ I kiên cố thanh thoát."
    ],
    solution: {
      "Đội Sắt": "Dây Văng",
      "Đội Thép": "Giàn Thép",
      "Đội Đồng": "Vòm Đá",
      "Đội Titan": "Dầm Chữ I"
    },
    explanation: "Đội Sắt làm Dây Văng. Đội Thép làm Giàn Thép. Đội Đồng làm Vòm Đá. Đội Titan làm Dầm Chữ I."
  },
  {
    id: "lg-38",
    title: "Vụ Án Đôi Giày Thần Kỳ Điểm Tuyệt Đối",
    difficulty: 4,
    story: "Bốn chân sút bóng đá nhí Triết, Messi, Ronaldo, Mbappe thi đấu ở 4 vị trí chủ chốt trên sân cỏ: Tiền Đạo, Tiền Vệ, Hậu Vệ và Thủ Môn.",
    rows: { name: "Cầu thủ", items: ["Triết", "Messi", "Ronaldo", "Mbappe"] },
    cols: { name: "Vị trí", items: ["Tiền Đạo", "Tiền Vệ", "Hậu Vệ", "Thủ Môn"] },
    clues: [
      "1. Triết đeo găng tay nhựa dẻo bảo vệ khung thành và bắt gọn mọi quả bóng (Thủ Môn).",
      "2. Mbappe dùng tốc độ xé gió ở vị trí Tiền Đạo mũi nhọn để ghi bàn thắng vàng.",
      "3. Messi điều phối nhịp độ trận đấu và kiến tạo xuất sắc từ khu trung tuyến (Tiền Vệ).",
      "4. Ronaldo thi đấu lăn xả chặn đứng mọi đợt tấn công ở hàng Hậu Vệ thép."
    ],
    solution: {
      "Triết": "Thủ Môn",
      "Messi": "Tiền Vệ",
      "Ronaldo": "Hậu Vệ",
      "Mbappe": "Tiền Đạo"
    },
    explanation: "Triết là Thủ Môn. Mbappe là Tiền Đạo. Messi là Tiền Vệ. Ronaldo là Hậu Vệ."
  },
  {
    id: "lg-39",
    title: "Bí Mật Chiếc Hòm Kho Báu Đảo Cướp Biển",
    difficulty: 4,
    story: "Bốn thủy thủ dũng cảm Huy, Jack, Will, Gibbs tìm được 4 chiếc chìa khóa cổ: Chìa Vàng, Chìa Bạc, Chìa Đồng và Chìa Sắt để mở kho báu.",
    rows: { name: "Thủy thủ", items: ["Huy", "Jack", "Will", "Gibbs"] },
    cols: { name: "Chìa khóa", items: ["Chìa Vàng", "Chìa Bạc", "Chìa Đồng", "Chìa Sắt"] },
    clues: [
      "1. Huy cầm chiếc Chìa Vàng nạm ngọc mở được ổ khóa chính giữa hòm báu.",
      "2. Jack sở hữu chiếc Chìa Bạc khắc hình đầu lâu đặc trưng của cướp biển.",
      "3. Will giữ chiếc Chìa Sắt đúc nguyên khối nặng trĩu mở ngăn bí mật.",
      "4. Gibbs dùng chiếc Chìa Đồng cổ xưa phủ rêu xanh mở ngăn bản đồ đảo giấu vàng."
    ],
    solution: {
      "Huy": "Chìa Vàng",
      "Jack": "Chìa Bạc",
      "Will": "Chìa Sắt",
      "Gibbs": "Chìa Đồng"
    },
    explanation: "Huy giữ Chìa Vàng. Jack giữ Chìa Bạc. Will giữ Chìa Sắt. Gibbs giữ Chìa Đồng."
  },
  {
    id: "lg-40",
    title: "Lễ Hội Thả Diều Nghệ Thuật Ven Biển",
    difficulty: 4,
    story: "Bốn nghệ nhân nhí Triết, Vân, Phong, Nguyệt thả 4 cánh diều nghệ thuật lộng lẫy lên bầu trời biển: Diều Rồng, Diều Phượng Hoàng, Diều Đại Bàng và Diều Bướm.",
    rows: { name: "Nghệ nhân", items: ["Triết", "Vân", "Phong", "Nguyệt"] },
    cols: { name: "Cánh diều", items: ["Diều Rồng", "Phượng Hoàng", "Đại Bàng", "Diều Bướm"] },
    clues: [
      "1. Triết điều khiển cánh Diều Rồng uốn lượn dài 20 mét bay vút trên nền trời xanh.",
      "2. Vân thả cánh diều hình chim Phượng Hoàng với chiếc đuôi rực rỡ bảy sắc cầu vồng.",
      "3. Phong cầm dây diều hình Đại Bàng sải cánh dũng mãnh đón gió biển lồng lộng.",
      "4. Nguyệt nhẹ nhàng nâng cánh Diều Bướm rực rỡ hoa văn bay lơ lửng trong gió nhẹ."
    ],
    solution: {
      "Triết": "Diều Rồng",
      "Vân": "Phượng Hoàng",
      "Phong": "Đại Bàng",
      "Nguyệt": "Diều Bướm"
    },
    explanation: "Triết thả Diều Rồng. Vân thả Phượng Hoàng. Phong thả Đại Bàng. Nguyệt thả Diều Bướm."
  },
  {
    id: "lg-41",
    title: "Cuộc Đua Tên Lửa Nước Vươn Tới Tầng Mây",
    difficulty: 5,
    story: "Bốn nhà vật lý nhí Huy, Einstein, Bohr, Tesla phóng tên lửa nước ở 4 góc nghiêng khí động học: Góc 30 Độ, Góc 45 Độ, Góc 60 Độ và Góc 75 Độ.",
    rows: { name: "Nhà vật lý nhí", items: ["Huy", "Einstein", "Bohr", "Tesla"] },
    cols: { name: "Góc phóng", items: ["Góc 30 Độ", "Góc 45 Độ", "Góc 60 Độ", "Góc 75 Độ"] },
    clues: [
      "1. Huy áp dụng định luật vật lý chọn Góc 45 Độ để tên lửa bay được khoảng cách xa nhất.",
      "2. Einstein muốn tên lửa bay bổng vút lên không trung thật cao nên chọn Góc 60 Độ.",
      "3. Bohr chọn Góc 30 Độ để tên lửa bay là là mặt đất với vận tốc ban đầu cực lớn.",
      "4. Tesla thử nghiệm phóng thẳng đứng gần như vuông góc ở Góc 75 Độ để đo độ cao tối đa."
    ],
    solution: {
      "Huy": "Góc 45 Độ",
      "Einstein": "Góc 60 Độ",
      "Bohr": "Góc 30 Độ",
      "Tesla": "Góc 75 Độ"
    },
    explanation: "Huy phóng Góc 45 Độ. Einstein phóng Góc 60 Độ. Bohr phóng Góc 30 Độ. Tesla phóng Góc 75 Độ."
  },
  {
    id: "lg-42",
    title: "Vụ Án Dấu Chân Lạ Trong Tuyết Trắng Bắc Cực",
    difficulty: 5,
    story: "Bốn nhà thám hiểm địa cực Triết, Roald, Robert, Fridtjof sử dụng 4 phương tiện đặc chủng: Xe Chó Kéo, Xe Mô Tô Tuyết, Ván Trượt Tuyết và Trực Thăng Cứu Hộ.",
    rows: { name: "Nhà thám hiểm", items: ["Triết", "Roald", "Robert", "Fridtjof"] },
    cols: { name: "Phương tiện", items: ["Xe Chó Kéo", "Mô Tô Tuyết", "Ván Trượt", "Trực Thăng"] },
    clues: [
      "1. Triết gắn bó thân thiết với bầy chó tuyết Husky dũng cảm trên chiếc Xe Chó Kéo truyền thống.",
      "2. Roald lướt nhanh trên những dải băng nứt bằng chiếc Xe Mô Tô Tuyết động cơ mạnh mẽ.",
      "3. Robert rèn luyện thể lực trượt băng băng trên đôi Ván Trượt Tuyết gỗ thông dẻo dai.",
      "4. Fridtjof quan sát và bảo vệ cả đoàn từ trên cao bằng chiếc Trực Thăng Cứu Hộ sơn đỏ."
    ],
    solution: {
      "Triết": "Xe Chó Kéo",
      "Roald": "Mô Tô Tuyết",
      "Robert": "Ván Trượt",
      "Fridtjof": "Trực Thăng"
    },
    explanation: "Triết đi Xe Chó Kéo. Roald đi Mô Tô Tuyết. Robert đi Ván Trượt. Fridtjof lái Trực Thăng."
  },
  {
    id: "lg-43",
    title: "Khu Rừng Phép Thuật Của Bốn Tộc Tiên",
    difficulty: 5,
    story: "Bốn nàng tiên bảo hộ rừng xanh: Tiên Ánh Sáng, Tiên Gió, Tiên Suối, Tiên Cây chưởng quản 4 mùa trong năm: Mùa Xuân, Mùa Hạ, Mùa Thu, Mùa Đông.",
    rows: { name: "Tiên bảo hộ", items: ["Ánh Sáng", "Tiên Gió", "Tiên Suối", "Tiên Cây"] },
    cols: { name: "Mùa trong năm", items: ["Mùa Xuân", "Mùa Hạ", "Mùa Thu", "Mùa Đông"] },
    clues: [
      "1. Tiên Cây đánh thức những mầm non đâm chồi nảy lộc vào Mùa Xuân ấm áp.",
      "2. Tiên Ánh Sáng ban phát nắng vàng rực rỡ và những tiếng ve reo vào Mùa Hạ sôi động.",
      "3. Tiên Gió thổi bay những chiếc lá vàng xào xạc báo hiệu Mùa Thu lãng mạn.",
      "4. Tiên Suối đông kết dòng nước thành những tấm gương băng trong veo của Mùa Đông tuyết trắng."
    ],
    solution: {
      "Ánh Sáng": "Mùa Hạ",
      "Tiên Gió": "Mùa Thu",
      "Tiên Suối": "Mùa Đông",
      "Tiên Cây": "Mùa Xuân"
    },
    explanation: "Tiên Cây là Mùa Xuân. Ánh Sáng là Mùa Hạ. Tiên Gió là Mùa Thu. Tiên Suối là Mùa Đông."
  },
  {
    id: "lg-44",
    title: "Vụ Án Trộm Hạt Giống Cây Thần Trên Đỉnh Núi",
    difficulty: 5,
    story: "Bốn nhà nông học nhí Huy, Lương, Nghĩa, Trí gieo hạt giống cây thần vào 4 loại đất thử nghiệm: Đất Phù Sa, Đất Đỏ Bazan, Đất Mùn Rừng và Đất Cát Pha.",
    rows: { name: "Nhà nông học", items: ["Huy", "Lương", "Nghĩa", "Trí"] },
    cols: { name: "Loại đất", items: ["Đất Phù Sa", "Đất Bazan", "Đất Mùn", "Đất Cát Pha"] },
    clues: [
      "1. Huy lấy Đất Phù Sa màu mỡ ven bờ sông Hồng bồi đắp cho cây lớn nhanh như thổi.",
      "2. Lương thử nghiệm vùng Đất Đỏ Bazan giàu khoáng chất của núi rừng Tây Nguyên hùng vĩ.",
      "3. Nghĩa gom lớp Đất Mùn màu đen xốp giàu dinh dưỡng dưới tán rừng nguyên sinh già cỗi.",
      "4. Trí gieo mầm trên Đất Cát Pha ven biển để kiểm tra sức chịu hạn kiên cường của cây."
    ],
    solution: {
      "Huy": "Đất Phù Sa",
      "Lương": "Đất Bazan",
      "Nghĩa": "Đất Mùn",
      "Trí": "Đất Cát Pha"
    },
    explanation: "Huy thử Đất Phù Sa. Lương thử Đất Bazan. Nghĩa thử Đất Mùn. Trí thử Đất Cát Pha."
  },
  {
    id: "lg-45",
    title: "Hội Thi Lắp Ráp Xe Năng Lượng Gió",
    difficulty: 5,
    story: "Bốn kỹ sư cơ khí nhí Triết, Khôi, Nguyên, Hưng chế tạo 4 cánh quạt tua-bin gió độc đáo: Cánh 2 Lá, Cánh 3 Lá, Cánh 4 Lá và Cánh Xoắn Ốc.",
    rows: { name: "Kỹ sư nhí", items: ["Triết", "Khôi", "Nguyên", "Hưng"] },
    cols: { name: "Loại cánh quạt", items: ["Cánh 2 Lá", "Cánh 3 Lá", "Cánh 4 Lá", "Cánh Xoắn"] },
    clues: [
      "1. Triết áp dụng chuẩn khí động học công nghiệp lắp Cánh 3 Lá để xe đạt hiệu suất quay cao nhất.",
      "2. Khôi thiết kế Cánh 4 Lá bản to giúp xe khởi động cực êm ngay cả khi gió thổi rất nhẹ.",
      "3. Nguyên phát minh Cánh Xoắn Ốc mô phỏng chuyển động xoáy trôn ốc của loài ốc biển.",
      "4. Hưng tối giản trọng lượng xe đua với Cánh 2 Lá thanh mảnh lướt gió siêu tốc độ."
    ],
    solution: {
      "Triết": "Cánh 3 Lá",
      "Khôi": "Cánh 4 Lá",
      "Nguyên": "Cánh Xoắn",
      "Hưng": "Cánh 2 Lá"
    },
    explanation: "Triết lắp Cánh 3 Lá. Khôi lắp Cánh 4 Lá. Nguyên lắp Cánh Xoắn. Hưng lắp Cánh 2 Lá."
  },
  {
    id: "lg-46",
    title: "Bí Mật Bốn Ngọn Hải Đăng Cổ Ven Biển",
    difficulty: 5,
    story: "Bốn người gác đèn biển dũng cảm Huy, Hùng, Dũng, Cường canh giữ 4 ngọn hải đăng phát tín hiệu ánh sáng: Ánh Vàng Ấm, Ánh Xanh Lam, Ánh Đỏ Cảnh Báo và Ánh Trắng Sáng.",
    rows: { name: "Người gác đèn", items: ["Huy", "Hùng", "Dũng", "Cường"] },
    cols: { name: "Tín hiệu đèn", items: ["Ánh Vàng", "Ánh Xanh", "Ánh Đỏ", "Ánh Trắng"] },
    clues: [
      "1. Huy thắp sáng ngọn hải đăng phát Ánh Vàng Ấm áp dẫn lối cho tàu thuyền cập cảng bình an.",
      "2. Hùng canh giữ ngọn hải đăng trên bãi đá ngầm phát Ánh Đỏ Cảnh Báo nguy hiểm từ xa.",
      "3. Dũng điều khiển luồng Ánh Xanh Lam êm dịu định hướng luồng lạch nước sâu cho tàu cá.",
      "4. Cường phát luồng Ánh Trắng Sáng quét xa 30 hải lý giữa trời đêm dông bão."
    ],
    solution: {
      "Huy": "Ánh Vàng",
      "Hùng": "Ánh Đỏ",
      "Dũng": "Ánh Xanh",
      "Cường": "Ánh Trắng"
    },
    explanation: "Huy thắp Ánh Vàng. Hùng thắp Ánh Đỏ. Dũng thắp Ánh Xanh. Cường phát Ánh Trắng."
  },
  {
    id: "lg-47",
    title: "Cuộc Thi Sáng Tác Nhạc Cụ Tái Chế",
    difficulty: 5,
    story: "Bốn nhạc sĩ nhí Triết, Mozart, Beethoven, Bach sáng chế 4 nhạc cụ độc đáo từ vật liệu tái chế: Đàn Guitar Hộp Bánh, Trống Thùng Sơn, Sáo Trúc Tự Chế và Chuông Gió Vỏ Ốc.",
    rows: { name: "Nhạc sĩ nhí", items: ["Triết", "Mozart", "Beethoven", "Bach"] },
    cols: { name: "Nhạc cụ tái chế", items: ["Guitar Hộp", "Trống Sơn", "Sáo Trúc", "Chuông Vỏ Ốc"] },
    clues: [
      "1. Triết căng các sợi dây cước lên hộp bánh thiếc rỗng tạo nên cây Đàn Guitar Hộp gảy vang lảnh lót.",
      "2. Beethoven bịt kín màng cao su lên thùng sơn cũ làm thành bộ Trống Sơn gõ nhịp điệu rộn ràng.",
      "3. Mozart khoét các lỗ nốt nhạc trên cành tre khô tạo thành chiếc Sáo Trúc du dương say đắm.",
      "4. Bach xâu những chiếc vỏ ốc biển thu nhặt bên bờ cát tạo nên dải Chuông Vỏ Ốc ngân vang trong gió."
    ],
    solution: {
      "Triết": "Guitar Hộp",
      "Mozart": "Sáo Trúc",
      "Beethoven": "Trống Sơn",
      "Bach": "Chuông Vỏ Ốc"
    },
    explanation: "Triết làm Guitar Hộp. Beethoven làm Trống Sơn. Mozart làm Sáo Trúc. Bach làm Chuông Vỏ Ốc."
  },
  {
    id: "lg-48",
    title: "Vụ Án Dấu Vân Tay Trên Kính Hiển Vi",
    difficulty: 5,
    story: "Bốn giám định viên nhí Huy, Lan, Ngọc, Trâm soi 4 mẫu vật sinh học kỳ diệu dưới kính hiển vi quang học: Biểu Bì Hành Tây, Giọt Nước Ao, Phấn Hoa Hồng và Cánh Bướm.",
    rows: { name: "Giám định viên", items: ["Huy", "Lan", "Ngọc", "Trâm"] },
    cols: { name: "Mẫu vật soi", items: ["Biểu Bì Hành", "Giọt Nước Ao", "Phấn Hoa", "Cánh Bướm"] },
    clues: [
      "1. Huy bóc tách màng mỏng Biểu Bì Hành Tây nhuộm iot nhìn thấy rõ các vách tế bào hình chữ nhật.",
      "2. Lan vô cùng ngạc nhiên khi thấy các chú trùng đế giày bơi lội tung tăng trong Giọt Nước Ao.",
      "3. Ngọc quan sát những hạt Phấn Hoa tròn xoe có gai nhọn lấp lánh như những quả cầu vàng nhỏ.",
      "4. Trâm phóng đại hàng nghìn chiếc vảy li ti lóng lánh sắc màu trên mảnh Cánh Bướm ngũ sắc."
    ],
    solution: {
      "Huy": "Biểu Bì Hành",
      "Lan": "Giọt Nước Ao",
      "Ngọc": "Phấn Hoa",
      "Trâm": "Cánh Bướm"
    },
    explanation: "Huy soi Biểu Bì Hành. Lan soi Giọt Nước Ao. Ngọc soi Phấn Hoa. Trâm soi Cánh Bướm."
  },
  {
    id: "lg-49",
    title: "Bí Ẩn Mê Cung Đá Của Vua Minos",
    difficulty: 5,
    story: "Bốn dũng sĩ giải đố Triết, Theseus, Perseus, Hercules mang 4 cuộn chỉ thần kỳ để không bị lạc trong mê cung: Chỉ Tơ Vàng, Chỉ Bạc Ánh Trăng, Chỉ Tím Hoàng Gia và Chỉ Lam Biển Khơi.",
    rows: { name: "Dũng sĩ", items: ["Triết", "Theseus", "Perseus", "Hercules"] },
    cols: { name: "Cuộn chỉ thần", items: ["Chỉ Tơ Vàng", "Chỉ Bạc", "Chỉ Tím", "Chỉ Lam"] },
    clues: [
      "1. Triết lần theo lối vào mê cung rải cuộn Chỉ Tơ Vàng phát sáng rực rỡ soi rõ từng bước chân.",
      "2. Theseus cầm cuộn Chỉ Lam Biển Khơi do công chúa Ariadne trao tặng để tìm đường tới tâm mê cung.",
      "3. Perseus buộc đầu sợi Chỉ Bạc Ánh Trăng vào chiếc cột đá hoa cương ở cửa hang tối.",
      "4. Hercules mang cuộn Chỉ Tím Hoàng Gia dẻo dai không bao giờ đứt để vượt qua các cạm bẫy."
    ],
    solution: {
      "Triết": "Chỉ Tơ Vàng",
      "Theseus": "Chỉ Lam",
      "Perseus": "Chỉ Bạc",
      "Hercules": "Chỉ Tím"
    },
    explanation: "Triết mang Chỉ Tơ Vàng. Theseus mang Chỉ Lam. Perseus mang Chỉ Bạc. Hercules mang Chỉ Tím."
  },
  {
    id: "lg-50",
    title: "Đại Hội Thám Tử Siêu Trí Tuệ Quốc Tế",
    difficulty: 5,
    story: "Bốn đại thám tử huyền thoại Huy, Conan, Sherlock, Poirot được vinh danh với 4 danh hiệu cao quý: Bậc Thầy Suy Luận, Thần Nhãn Tinh Tường, Trí Tuệ Vô Song và Khắc Tinh Tội Phạm.",
    rows: { name: "Đại thám tử", items: ["Huy", "Conan", "Sherlock", "Poirot"] },
    cols: { name: "Danh hiệu", items: ["Thầy Suy Luận", "Thần Nhãn", "Trí Tuệ", "Khắc Tinh"] },
    clues: [
      "1. Huy giải mã toàn bộ 50 vụ án logic hóc búa nhất và được trao vinh danh Bậc Thầy Suy Luận.",
      "2. Conan với chiếc kính lúp soi thấu mọi dấu vết hiện trường được trao danh hiệu Thần Nhãn Tinh Tường.",
      "3. Sherlock Holmes làm kinh ngạc thế giới với bộ óc siêu phàm được trao danh hiệu Trí Tuệ Vô Song.",
      "4. Hercule Poirot dùng những 'tế bào xám' phá án chuẩn xác nhận danh hiệu Khắc Tinh Tội Phạm."
    ],
    solution: {
      "Huy": "Thầy Suy Luận",
      "Conan": "Thần Nhãn",
      "Sherlock": "Trí Tuệ",
      "Poirot": "Khắc Tinh"
    },
    explanation: "Huy là Bậc Thầy Suy Luận. Conan là Thần Nhãn Tinh Tường. Sherlock là Trí Tuệ Vô Song. Poirot là Khắc Tinh Tội Phạm."
  }
];
