// js/task-master-levels-part2.js - Ngân hàng 40 Màn chơi Part 2: Xưởng Kỹ Sư & Sứ Mệnh Thám Hiểm

export const TASK_MASTER_LEVELS_PART2 = [
  // ==========================================
  // CHẶNG 3: XƯỞNG SÁNG CHẾ & KỸ SƯ (MÀN 41 -> 60)
  // ==========================================
  {
    id: "tm-41",
    level: 41,
    title: "Lắp Ráp Xe Đua F1 Điều Khiển Từ Xa",
    category: "engineering",
    categoryName: "Xưởng Sáng Chế",
    icon: "🏎️",
    difficulty: 3,
    description: "Từng bước chế tạo cỗ xe đua tí hon đạt tốc độ 30 km/h trên đường piste.",
    tasks: [
      { id: "t1", text: "Kiểm tra khung xe gầm hợp kim nhôm định hình", icon: "📐", hint: "Khung xe là xương sống chịu lực của toàn bộ xe đua." },
      { id: "t2", text: "Lắp trục bánh xe và 4 bánh cao su có vân bám đường", icon: "🛞", requires: ["t1"], hint: "Hệ thống truyền động gắn liền với khung gầm." },
      { id: "t3", text: "Gắn động cơ điện và bộ vi sai truyền lực bánh sau", icon: "⚙️", requires: ["t2"], hint: "Động cơ truyền động năng tới các trục bánh." },
      { id: "t4", text: "Gắn bảng mạch thu sóng vô tuyến và servo bẻ lái", icon: "📡", requires: ["t1"], hint: "Mạch điều khiển nhận tín hiệu rẽ trái phải." },
      { id: "t5", text: "Kết nối pin sạc Li-po với mạch điều khiển và động cơ", icon: "🔋", requires: ["t3", "t4"], hint: "Cung cấp nguồn điện cho mạch và động cơ hoạt động." },
      { id: "t6", text: "Đậy vỏ khí động học xe đua và bật tay cầm điều khiển chạy thử", icon: "🏎️", requires: ["t5"], hint: "Bọc vỏ bảo vệ và kiểm tra khả năng bẻ lái mượt mà." }
    ],
    distractors: [
      { id: "d1", text: "Gắn pin ngược cực dương âm làm cháy nổ vi mạch điều khiển", icon: "🔋", failReason: "Đấu ngược cực pin làm chập IC điều khiển từ xa của xe đua!" },
      { id: "d2", text: "Lắp bánh xe méo mó không siết ốc chặt", icon: "⚙️", failReason: "Bánh xe lỏng lẻo sẽ văng ra ngoài ngay khi xe tăng tốc độ cao!" }
    ],
    lesson: "Lắp khung gầm -> Cơ khí truyền động -> Bo mạch điện tử -> Nguồn pin: quy tắc lắp ráp robot."
  },
  {
    id: "tm-42",
    level: 42,
    title: "Dây Chuyền Vá Săm Xe Đạp Bị Thủng",
    category: "engineering",
    categoryName: "Xưởng Sáng Chế",
    icon: "🚲",
    difficulty: 3,
    description: "Kỹ năng cứu hộ xe đạp thực tế khi chẳng may cán phải đinh nhọn.",
    tasks: [
      { id: "t1", text: "Dùng móc lốp bẩy lốp ngoài và rút săm xe ra", icon: "🔧", hint: "Lấy săm bị xẹp ra khỏi vành bánh xe." },
      { id: "t2", text: "Bơm hơi căng săm và dìm vào chậu nước tìm bọt khí nổi", icon: "🫧", requires: ["t1"], hint: "Nơi nào sủi bọt khí chính là vị trí lỗ thủng." },
      { id: "t3", text: "Dùng bút xóa đánh dấu vị trí lỗ thủng và xì hết hơi", icon: "🖊️", requires: ["t2"], hint: "Đánh dấu chính xác để không bị lạc mất vết thủng khi xì hơi." },
      { id: "t4", text: "Dùng giấy ráp chà nhám nhẹ quanh lỗ thủng", icon: "🧽", requires: ["t3"], hint: "Chà nhám giúp cao su tăng ma sát để keo bám dính chắc." },
      { id: "t5", text: "Bôi keo vá, chờ 1 phút cho keo se mặt rồi dán miếng vá miết chặt", icon: "🩹", requires: ["t4"], hint: "Miết chặt từ trong ra ngoài để loại bỏ bọt khí kẹt dưới miếng vá." },
      { id: "t6", text: "Lắp săm lại vào lốp, nhét mép lốp vào vành rồi bơm căng bánh", icon: "🚲", requires: ["t5"], hint: "Kiểm tra lốp căng tròn, xe bon bon lăn bánh trở lại." }
    ],
    distractors: [
      { id: "d1", text: "Dán miếng vá khi mặt săm còn ướt sũng nước", icon: "🌊", failReason: "Nước ngăn keo bám dính, miếng vá sẽ bong ra ngay khi bơm hơi!" },
      { id: "d2", text: "Bơm căng săm xe đạp đến 100 psi khi chưa lắp vào lốp", icon: "💨", failReason: "Săm xe không có lốp bảo vệ sẽ bị phồng to như quả bóng và nổ tung!" }
    ],
    lesson: "Chà nhám và lau khô là 2 bước quyết định miếng vá dính vĩnh viễn."
  },
  {
    id: "tm-43",
    level: 43,
    title: "Lắp Ráp Máy Tính Để Bàn (PC)",
    category: "engineering",
    categoryName: "Xưởng Sáng Chế",
    icon: "🖥️",
    difficulty: 3,
    description: "Trở thành kỹ sư IT nhí tự tay lắp ráp cỗ máy vi tính thông minh.",
    tasks: [
      { id: "t1", text: "Đặt bo mạch chủ (Mainboard) lên tấm lót chống tĩnh điện", icon: "🟩", hint: "Bo mạch chủ là trung tâm kết nối mọi linh kiện." },
      { id: "t2", text: "Cẩn thận lắp chip xử lý CPU vào socket và khóa lẫy", icon: "🔲", requires: ["t1"], hint: "Bộ não CPU cần lắp đúng chiều góc tam giác vàng." },
      { id: "t3", text: "Bôi keo tản nhiệt và gắn quạt làm mát lên trên CPU", icon: "🌀", requires: ["t2"], hint: "Quạt làm mát giúp CPU không bị cháy do nhiệt độ cao." },
      { id: "t4", text: "Cắm thanh RAM và ổ cứng SSD tốc độ cao vào khe cắm", icon: "💾", requires: ["t1"], hint: "RAM và SSD lưu trữ bộ nhớ và hệ điều hành." },
      { id: "t5", text: "Cố định bo mạch vào thùng máy và cắm dây nguồn điện PSU", icon: "🔌", requires: ["t3", "t4"], hint: "Cấp nguồn điện sạch cho toàn bộ linh kiện máy." },
      { id: "t6", text: "Cắm màn hình, bàn phím và bấm nút nguồn khởi động BIOS", icon: "🖥️", requires: ["t5"], hint: "Màn hình sáng bừng dòng chữ khởi động thành công!" }
    ],
    distractors: [
      { id: "d1", text: "Lắp quạt tản nhiệt CPU mà quên không bôi keo tản nhiệt", icon: "🔥", failReason: "Không có keo tản nhiệt, CPU sẽ nhanh chóng bị quá nhiệt 100 độ C và tự ngắt!" },
      { id: "d2", text: "Dùng búa gõ mạnh thanh RAM vào khe cắm ngược chiều", icon: "🔨", failReason: "Cắm ngược RAM làm gãy các chân tiếp xúc vàng và nứt bo mạch chủ!" }
    ],
    lesson: "Bôi keo tản nhiệt trước khi gắn quạt bảo vệ chip CPU sống còn."
  },
  {
    id: "tm-44",
    level: 44,
    title: "Chế Tạo Kính Thiên Văn Khúc Xạ",
    category: "engineering",
    categoryName: "Xưởng Sáng Chế",
    icon: "🔭",
    difficulty: 3,
    description: "Tự chế ống ngắm quang học để ngắm nhìn miệng núi lửa trên Mặt Trăng.",
    tasks: [
      { id: "t1", text: "Chuẩn bị một ống kính dài và sơn đen mờ toàn bộ lòng trong ống", icon: "⬛", hint: "Sơn đen lòng ống ngăn phản xạ ánh sáng nhiễu từ bên ngoài." },
      { id: "t2", text: "Gắn thấu kính hội tụ tiêu cự dài (Vật kính) ở đầu trước ống", icon: "🔍", requires: ["t1"], hint: "Vật kính thu gom ánh sáng từ các vì sao xa xôi." },
      { id: "t3", text: "Gắn ống trượt nhỏ chứa thấu kính thị kính ở đuôi sau", icon: "👁️", requires: ["t1"], hint: "Ống trượt cho phép thụt thò điều chỉnh tiêu cự lấy nét." },
      { id: "t4", text: "Lắp ráp chân đế 3 chân vững chãi chống rung lắc", icon: "📐", hint: "Kính thiên văn phóng đại lớn rất nhạy cảm với rung động." },
      { id: "t5", text: "Gắn thân ống kính thiên văn lên chân đế cân bằng", icon: "🔭", requires: ["t2", "t3", "t4"], hint: "Cố định thân ống kính lên trục xoay 360 độ." },
      { id: "t6", text: "Hướng lên Mặt Trăng và xoay ống trượt điều chỉnh độ nét", icon: "🌕", requires: ["t5"], hint: "Miệng núi lửa và biển dung nham Mặt Trăng hiện rõ mồn một!" }
    ],
    distractors: [
      { id: "d1", text: "Dùng giấy ráp thô chà xát làm sạch thấu kính quang học", icon: "🧻", failReason: "Giấy ráp sẽ làm xước mờ thấu kính, hình ảnh nhìn qua kính sẽ bị nhòe nhoẹt!" },
      { id: "d2", text: "Nhìn thẳng trực tiếp vào Mặt Trời qua kính thiên văn", icon: "☀️", failReason: "Ánh sáng hội tụ sẽ đốt cháy võng mạc mắt và gây mù lòa vĩnh viễn!" }
    ],
    lesson: "Sơn đen lòng ống kính và chân đế chống rung là chìa khóa quang học thiên văn."
  },
  {
    id: "tm-45",
    level: 45,
    title: "Chế Tạo Robot Lau Nhà Tự Động",
    category: "engineering",
    categoryName: "Xưởng Sáng Chế",
    icon: "🤖",
    difficulty: 3,
    description: "Lắp ráp robot thông minh tự đổi hướng khi va chạm chướng ngại vật.",
    tasks: [
      { id: "t1", text: "Cắt tấm đế nhựa tròn đường kính 25cm làm khung gầm", icon: "⚪", hint: "Khung tròn giúp robot không bị mắc kẹt vào các góc tường." },
      { id: "t2", text: "Gắn 2 động cơ giảm tốc bánh xe ở hai bên hông đế", icon: "⚙️", requires: ["t1"], hint: "Động cơ độc lập cho phép robot xoay tròn tại chỗ." },
      { id: "t3", text: "Lắp cảm biến va chạm công tắc hành trình ở vành cản trước", icon: "🔘", requires: ["t1"], hint: "Khi chạm vào tường hoặc chân bàn, cảm biến kích hoạt." },
      { id: "t4", text: "Gắn đĩa xoay gắn khăn lau sợi Microfiber thấm nước dưới đáy", icon: "🧽", requires: ["t1"], hint: "Khăn lau sợi mịn đánh bay bụi bẩn trên sàn gỗ." },
      { id: "t5", text: "Kết nối vi điều khiển Arduino xử lý lệnh: va chạm -> lùi lại -> rẽ 90 độ", icon: "🧠", requires: ["t2", "t3"], hint: "Bộ não thuật toán điều hướng thông minh cho robot." },
      { id: "t6", text: "Lắp hộp pin sạc, bật công tắc thả robot chạy lau sàn sạch bóng", icon: "🤖", requires: ["t4", "t5"], hint: "Robot cần mẫn tự động làm việc khắp các ngóc ngách." }
    ],
    distractors: [
      { id: "d1", text: "Đổ đầy nước vào hộp chứa pin và động cơ điện", icon: "⚡", failReason: "Nước tràn vào bo mạch điện sẽ làm đoản mạch chập cháy linh kiện robot!" },
      { id: "d2", text: "Tháo bỏ toàn bộ cảm biến khoảng cách chống va chạm", icon: "🚫", failReason: "Mất cảm biến, robot sẽ lao thẳng xuống bậc cầu thang và vỡ vụn!" }
    ],
    lesson: "Cảm biến truyền tín hiệu -> Vi điều khiển xử lý -> Động cơ hành động: chu trình robot."
  },
  {
    id: "tm-46",
    level: 46,
    title: "Hệ Thống Tưới Cây Năng Lượng Mặt Trời",
    category: "engineering",
    categoryName: "Xưởng Sáng Chế",
    icon: "☀️",
    difficulty: 3,
    description: "Tự động bơm nước tưới rau khi trời có ánh nắng mặt trời.",
    tasks: [
      { id: "t1", text: "Đặt bể chứa nước ngọt có màng lọc ở chân giàn rau", icon: "💧", hint: "Nguồn cấp nước sạch không cặn bẩn làm nghẹt máy bơm." },
      { id: "t2", text: "Thả máy bơm chìm 12V ngập trong đáy bể chứa nước", icon: "🌊", requires: ["t1"], hint: "Máy bơm chìm phải ngập nước để tự mồi và làm mát động cơ." },
      { id: "t3", text: "Đi dây ống dẫn nước mềm phân nhánh đến từng chậu cây", icon: "🪢", requires: ["t2"], hint: "Dẫn nước phân bổ đều khắp khu vườn." },
      { id: "t4", text: "Gắn các đầu vòi nhỏ giọt có van chỉnh lưu lượng vào từng gốc cây", icon: "🌱", requires: ["t3"], hint: "Tưới nhỏ giọt tiết kiệm 70% lượng nước ngọt." },
      { id: "t5", text: "Lắp tấm pin mặt trời trên mái hướng về phía Nam nhận nắng nhiều nhất", icon: "☀️", hint: "Góc nghiêng hứng trọn vẹn quang năng mặt trời." },
      { id: "t6", text: "Nối dây điện từ tấm pin mặt trời qua bộ rơ-le hẹn giờ vào máy bơm", icon: "⚡", requires: ["t2", "t5"], hint: "Trời nắng -> Pin phát điện -> Bơm tự chạy tưới mát rượi." }
    ],
    distractors: [
      { id: "d1", text: "Lắp tấm pin mặt trời úp mặt xuống nền đất tối om", icon: "🌑", failReason: "Tấm pin bị che khuất trong bóng tối sẽ không thể tạo ra dòng điện để bơm nước!" },
      { id: "d2", text: "Cắm trực tiếp máy bơm công suất lớn vào pin không qua bộ điều áp", icon: "🔌", failReason: "Điện áp không ổn định sẽ làm cháy động cơ máy bơm nước!" }
    ],
    lesson: "Năng lượng tái tạo xanh: Dùng ánh nắng nuôi cây, tuần hoàn tự nhiên bền vững."
  },
  {
    id: "tm-47",
    level: 47,
    title: "Đóng Thuyền Buồm Gỗ Chạy Trên Nước",
    category: "engineering",
    categoryName: "Xưởng Sáng Chế",
    icon: "⛵",
    difficulty: 3,
    description: "Ứng dụng định luật Archimedes và khí động học cánh buồm đón gió.",
    tasks: [
      { id: "t1", text: "Đẽo gọt thanh gỗ xốp nhẹ thành thân thuyền hình thoi rẽ sóng", icon: "🪵", hint: "Mũi nhọn giảm ma sát rẽ nước lướt nhanh." },
      { id: "t2", text: "Khoét một rãnh dọc sống lưng và gắn tấm vây chì đối trọng dưới đáy", icon: "⚖️", requires: ["t1"], hint: "Vây chì nặng ở đáy giữ thuyền không bao giờ bị lật úp khi gió to." },
      { id: "t3", text: "Sơn 2 lớp sơn bóng chống thấm nước bảo vệ thân gỗ", icon: "🎨", requires: ["t1"], hint: "Chống nước ngấm vào làm nặng và mục nát gỗ." },
      { id: "t4", text: "Dựng cột buồm gỗ thẳng đứng vuông góc với thân thuyền", icon: "🎋", requires: ["t1"], hint: "Cột buồm chịu lực gió đẩy toàn bộ con thuyền." },
      { id: "t5", text: "Cắt vải dù chống thấm hình tam giác căng vào cột buồm và dây néo", icon: "⛵", requires: ["t4"], hint: "Cánh buồm cong đón gió tạo lực nâng đẩy thuyền tiến tới." },
      { id: "t6", text: "Gắn bánh lái điều hướng ở đuôi thuyền và thả xuống hồ lướt sóng", icon: "🌊", requires: ["t2", "t3", "t5"], hint: "Con thuyền kiêu hãnh giương buồm rẽ sóng nước long lanh." }
    ],
    distractors: [
      { id: "d1", text: "Đục 5 lỗ to dưới đáy thuyền để nước chảy qua cho mát", icon: "🕳️", failReason: "Đáy thuyền thủng lỗ sẽ làm nước tràn vào và chìm nghỉm ngay lập tức!" },
      { id: "d2", text: "Lắp cánh buồm bằng tôn sắt nặng trịch 10kg", icon: "⚓", failReason: "Buồm quá nặng làm lật úp thuyền và thuyền không thể đón gió di chuyển!" }
    ],
    lesson: "Quả nặng đối trọng dưới đáy là bí quyết tàu thuyền không bao giờ chìm lật."
  },
  {
    id: "tm-48",
    level: 48,
    title: "Xây Dựng Ngôi Nhà Gỗ Trên Cây",
    category: "engineering",
    categoryName: "Xưởng Sáng Chế",
    icon: "🏡",
    difficulty: 4,
    description: "Căn cứ bí mật tuyệt vời trên ngọn cây sồi cổ thụ giữa thiên nhiên.",
    tasks: [
      { id: "t1", text: "Chọn cây cổ thụ có 3 cành chạc ba vững chắc và thân to", icon: "🌳", hint: "Cây khỏe mạnh không có cành mục là nền tảng an toàn số 1." },
      { id: "t2", text: "Bắt bu lông giằng các thanh dầm thép chịu lực đỡ sàn nhà", icon: "🔩", requires: ["t1"], hint: "Khung dầm tam giác chịu toàn bộ trọng lượng ngôi nhà." },
      { id: "t3", text: "Lát các tấm ván sàn gỗ thông dày dặn và bắt vít chặt chẽ", icon: "🪵", requires: ["t2"], hint: "Tạo mặt sàn phẳng phiu bước đi an toàn không kẽ hở." },
      { id: "t4", text: "Dựng 4 khung vách gỗ và lắp lan can bảo vệ cao 1 mét", icon: "🧱", requires: ["t3"], hint: "Lan can cao ngang ngực bảo vệ tuyệt đối không ngã." },
      { id: "t5", text: "Lợp mái tôn dốc thoát nước mưa có lót lớp cách nhiệt", icon: "🏠", requires: ["t4"], hint: "Mái dốc che mưa nắng, mùa hè mát mẻ mùa đông ấm áp." },
      { id: "t6", text: "Lắp cầu thang gỗ cố định có tay vịn chắc chắn dẫn lên nhà", icon: "🪜", requires: ["t3"], hint: "Lối đi an toàn lên xuống ngôi nhà trên mây kỳ diệu." }
    ],
    distractors: [
      { id: "d1", text: "Đóng đinh sắt bừa bãi vào cành cây mục gãy", icon: "🪓", failReason: "Cành mục sẽ gãy sập ngay khi có người bước lên, cực kỳ nguy hiểm!" },
      { id: "d2", text: "Đóng đinh khung nhà vào một cành cây khô mục ruỗng", icon: "🍂", failReason: "Cành cây mục không thể chịu lực và sẽ gãy đổ làm sập toàn bộ ngôi nhà gỗ!" }
    ],
    lesson: "An toàn kết cấu: Khung dầm chịu lực và lan can bảo vệ là ưu tiên hàng đầu."
  },
  {
    id: "tm-49",
    level: 49,
    title: "Chế Tạo Máy Lọc Nước Sinh Tồn",
    category: "engineering",
    categoryName: "Xưởng Sáng Chế",
    icon: "🧪",
    difficulty: 3,
    description: "Học cách lọc nước đục thành nước trong veo bằng các vật liệu tự nhiên.",
    tasks: [
      { id: "t1", text: "Cắt đáy chai nhựa trong suốt và đục lỗ nhỏ ở nắp chai", icon: "🍾", hint: "Vỏ chai dốc ngược làm phễu lọc nhiều tầng." },
      { id: "t2", text: "Nhét một nắm bông gòn sạch xuống sát nút chai", icon: "☁️", requires: ["t1"], hint: "Lớp bông giữ lại các hạt cặn siêu nhỏ ở cửa thoát cuối cùng." },
      { id: "t3", text: "Đổ một lớp than hoạt tính xay nhỏ dày 5 cm lên trên bông", icon: "⬛", requires: ["t2"], hint: "Than hoạt tính hấp thụ mùi hôi, kim loại nặng và độc tố." },
      { id: "t4", text: "Đổ một lớp cát thạch anh mịn dày 5 cm lên trên than", icon: "🏖️", requires: ["t3"], hint: "Cát mịn lọc giữ lại các hạt bụi bẩn li ti." },
      { id: "t5", text: "Đổ một lớp sỏi nhỏ và đá cuội lên lớp trên cùng", icon: "🪨", requires: ["t4"], hint: "Lớp sỏi thô chặn rác lớn, lá cây và cặn thô đầu tiên." },
      { id: "t6", text: "Đổ nước đục vào phễu và hứng những giọt nước trong vắt ở đáy chai", icon: "💧", requires: ["t5"], hint: "Nước qua 4 tầng lọc trở nên trong veo không một hạt cặn!" }
    ],
    distractors: [
      { id: "d1", text: "Uống trực tiếp nước đục ngầu chưa qua đun sôi khử khuẩn", icon: "🦠", failReason: "Nước lọc thô mới chỉ giữ lại cặn bẩn, vẫn còn đầy vi khuẩn amip ăn não!" },
      { id: "d2", text: "Đổ xà phòng thơm vào các tầng lọc cát sỏi", icon: "🫧", failReason: "Hóa chất xà phòng ngấm vào nước lọc sẽ làm nước bị độc hại không thể uống!" }
    ],
    lesson: "Quy tắc lọc tự nhiên: Từ thô đến tinh (Sỏi -> Cát -> Than -> Bông)."
  },
  {
    id: "tm-50",
    level: 50,
    title: "Chế Tạo Kính Xem Phim 3D Phân Cực",
    category: "engineering",
    categoryName: "Xưởng Sáng Chế",
    icon: "👓",
    difficulty: 3,
    description: "Tự làm chiếc kính ma thuật để xem phim nổi 3 chiều sống động như ngoài rạp.",
    tasks: [
      { id: "t1", text: "In bản vẽ mẫu gọng kính lên tấm bìa các-tông cứng", icon: "🖨️", hint: "Bìa các-tông giúp gọng kính cứng cáp ôm vừa khuôn mặt." },
      { id: "t2", text: "Dùng kéo cắt tỉa cẩn thận khung gọng và khoét 2 lỗ mắt kính", icon: "✂️", requires: ["t1"], hint: "Cắt đúng đường viền để gọng kính cân xứng." },
      { id: "t3", text: "Cắt tấm kính lọc màu Đỏ trong suốt gắn vào mắt kính bên TRÁI", icon: "🔴", requires: ["t2"], hint: "Mắt trái chuẩn quốc tế luôn dùng màng lọc màu Đỏ (Cyan/Red)." },
      { id: "t4", text: "Cắt tấm kính lọc màu Xanh Lam trong suốt gắn vào mắt kính bên PHẢI", icon: "🔵", requires: ["t2"], hint: "Mắt phải luôn dùng màng lọc màu Xanh Lam để lọc hình ảnh riêng." },
      { id: "t5", text: "Dán cố định 2 tròng kính bằng băng keo hai mặt trong suốt", icon: "🩹", requires: ["t3", "t4"], hint: "Gắn phẳng phiu không để vết keo bẩn che tầm nhìn." },
      { id: "t6", text: "Đeo kính lên và mở video 3D Anaglyph chiêm ngưỡng hình ảnh bay ra khỏi màn hình", icon: "👓", requires: ["t5"], hint: "Bộ não kết hợp 2 ảnh màu đỏ-xanh thành không gian 3D nổi kỳ thú!" }
    ],
    distractors: [
      { id: "d1", text: "Lắp cả hai mắt kính đều bằng giấy bóng kính màu đỏ giống nhau", icon: "🔴", failReason: "Cả hai mắt cùng màu thì não không thể phân tách hình ảnh tạo hiệu ứng 3D nổi!" },
      { id: "d2", text: "Dùng băng dính đen bịt kín mít cả hai mắt kính", icon: "🕶️", failReason: "Bịt kín kính thì con chỉ thấy bóng tối đen kịt chứ không thấy phim đâu!" }
    ],
    lesson: "Mắt trái đỏ, mắt phải xanh — não bộ tự gộp 2 luồng ảnh thành chiều sâu 3D."
  },
  {
    id: "tm-51",
    level: 51,
    title: "Lắp Cầu Gỗ Mô Hình Chịu Tải Trọng 50kg",
    category: "engineering",
    categoryName: "Xưởng Sáng Chế",
    icon: "🌉",
    difficulty: 4,
    description: "Ứng dụng kết cấu dàn giàn tam giác (Truss Bridge) của các kỹ sư cầu đường.",
    tasks: [
      { id: "t1", text: "Vẽ bản thiết kế giàn tam giác Warren lên giấy kẻ ô tỉ lệ 1:1", icon: "📐", hint: "Hình tam giác là hình học duy nhất không bao giờ bị biến dạng." },
      { id: "t2", text: "Dùng dao cắt các que gỗ balsa theo đúng chiều dài thiết kế", icon: "🔪", requires: ["t1"], hint: "Cắt chuẩn xác từng milimet để các điểm giao nhau vừa khít." },
      { id: "t3", text: "Ghép các que gỗ thành các tam giác liên hoàn bằng keo dán gỗ chuyên dụng", icon: "🔺", requires: ["t2"], hint: "Tam giác liên kết phân tán tải trọng đều khắp thân cầu." },
      { id: "t4", text: "Tạo 2 giàn tam giác giống hệt nhau làm hai thành cầu hai bên", icon: "⏸️", requires: ["t3"], hint: "Hai thành cầu đối xứng cân bằng tải trọng hai bên." },
      { id: "t5", text: "Nối 2 thành cầu bằng các thanh dầm ngang đáy và giằng chéo đỉnh", icon: "🌉", requires: ["t4"], hint: "Khóa chặt thành khối hộp không gian 3 chiều vững như bàn thạch." },
      { id: "t6", text: "Chờ keo khô hoàn toàn 24 giờ rồi đặt quả tạ 50kg lên thử tải", icon: "🏋️", requires: ["t5"], hint: "Cây cầu gỗ chỉ nặng 200g nâng bổng quả tạ 50kg không hề cong vênh!" }
    ],
    distractors: [
      { id: "d1", text: "Gắn các thanh giàn cầu bằng đất nặn dẻo thay vì keo chuyên dụng", icon: "🧱", failReason: "Đất nặn mềm nhũn không thể chịu tải, cầu sẽ sập gãy ngay khi đặt tạ lên!" },
      { id: "d2", text: "Bỏ qua cấu trúc tam giác, chỉ ghép các thanh vuông góc lỏng lẻo", icon: "📐", failReason: "Khung hình vuông không có thanh chéo chịu lực sẽ bị vặn xoắn và gãy sập!" }
    ],
    lesson: "Kết cấu tam giác (Truss) phân tán lực nén và lực kéo — bí mật của mọi cây cầu lớn."
  },
  {
    id: "tm-52",
    level: 52,
    title: "Chế Tạo Máy Bắn Đá Trebuchet Cổ Đại",
    category: "engineering",
    categoryName: "Xưởng Sáng Chế",
    icon: "🎯",
    difficulty: 4,
    description: "Ứng dụng định luật đòn bẩy và thế năng trọng trường để phóng mục tiêu xa 20m.",
    tasks: [
      { id: "t1", text: "Đóng khung đế hình chữ A vững chãi chống lật khi phóng", icon: "📐", hint: "Khung chữ A chịu phản lực giật ngược cực mạnh." },
      { id: "t2", text: "Gắn trục xoay kim loại nằm ngang giữa hai đỉnh chữ A", icon: "⚙️", requires: ["t1"], hint: "Trục quay trơn tru giảm ma sát quay tối đa." },
      { id: "t3", text: "Lắp cần phóng bằng gỗ dài: đầu ngắn 1 phần, đầu dài 4 phần", icon: "🪵", requires: ["t2"], hint: "Đòn bẩy không đều: đầu dài vung với vận tốc gấp 4 lần đầu ngắn!" },
      { id: "t4", text: "Treo giỏ chứa quả đối trọng nặng 5kg vào đầu ngắn của cần", icon: "🪨", requires: ["t3"], hint: "Quả nặng rơi xuống chuyển hóa thế năng thành động năng cực đại." },
      { id: "t5", text: "Gắn túi da đựng đạn và dây móc phóng ở đầu dài của cần", icon: "🪢", requires: ["t3"], hint: "Dây quăng tạo thêm một khớp vung phụ tăng gấp đôi tốc độ đạn." },
      { id: "t6", text: "Kéo cần phóng xuống gài chốt, đặt viên bóng tennis rồi giật chốt phóng", icon: "🚀", requires: ["t4", "t5"], hint: "Quả đối trọng rơi rầm xuống, bóng vút bay xa tít tắp 20 mét!" }
    ],
    distractors: [
      { id: "d1", text: "Đứng ngay trước tầm vung của cần phóng khi bấm cò nhả", icon: "💥", failReason: "Cần văng lực cực mạnh đập trúng người sẽ gây chấn thương rất nặng!" },
      { id: "d2", text: "Đặt đối trọng nhẹ hơn tảng đá cần phóng", icon: "🪨", failReason: "Đối trọng quá nhẹ thì đòn bẩy không thể nhấc nổi viên đá để phóng đi xa!" }
    ],
    lesson: "Đòn bẩy tỉ lệ 1:4 nhân vận tốc vung gậy lên 4 lần — cơ học đòn bẩy đỉnh cao."
  },
  {
    id: "tm-53",
    level: 53,
    title: "Chế Tạo Pin Điện Hóa Bằng Trái Chanh",
    category: "engineering",
    categoryName: "Xưởng Sáng Chế",
    icon: "🍋",
    difficulty: 3,
    description: "Khám phá phản ứng oxy hóa khử tạo dòng điện thắp sáng đèn LED.",
    tasks: [
      { id: "t1", text: "Lấy 4 quả chanh tươi mọng nước và lăn nhẹ trên bàn cho dập tép", icon: "🍋", hint: "Lăn nhẹ để giải phóng axit citric dạng lỏng làm chất điện phân." },
      { id: "t2", text: "Cắm một thanh đồng (cực dương +) vào một bên quả chanh", icon: "🥉", requires: ["t1"], hint: "Đồng là kim loại hút điện tử trong dung dịch axit." },
      { id: "t3", text: "Cắm một chiếc đinh kẽm mạ (cực âm -) vào bên đối diện quả chanh", icon: "🔩", requires: ["t1"], hint: "Kẽm phản ứng với axit nhả ra các hạt electron tự do." },
      { id: "t4", text: "Dùng dây kẹp cá sấu nối cực đồng quả này sang cực kẽm quả kia", icon: "🪢", requires: ["t2", "t3"], hint: "Nối tiếp 4 quả chanh để tăng điện áp từ 0.9V lên 3.6V." },
      { id: "t5", text: "Nối hai đầu dây tự do cuối cùng vào đồng hồ đo vôn kế", icon: "📟", requires: ["t4"], hint: "Kim vôn kế nhảy vọt lên 3.5 Vôn chứng tỏ pin đã sẵn sàng." },
      { id: "t6", text: "Kẹp hai cực vào bóng đèn LED nhỏ ngắm nhìn đèn phát sáng rực rỡ", icon: "💡", requires: ["t5"], hint: "Dòng điện hóa học từ 4 quả chanh thắp sáng bóng đèn kỳ diệu!" }
    ],
    distractors: [
      { id: "d1", text: "Cắm 2 điện cực bằng cùng một chất liệu đồng vào quả chanh", icon: "🍋", failReason: "Hai cực cùng chất liệu sẽ không tạo ra hiệu điện thế để phát ra dòng điện!" },
      { id: "d2", text: "Vắt kiệt nước quả chanh phơi khô ráo trước khi cắm điện cực", icon: "🏜️", failReason: "Chanh khô không còn dung dịch axit điện phân thì không thể sinh ra điện!" }
    ],
    lesson: "Nối tiếp cực âm sang cực dương giúp nhân điện áp lên thắp sáng đèn LED."
  },
  {
    id: "tm-54",
    level: 54,
    title: "Chế Tạo Chuông Báo Động Chống Trộm Cửa Sổ",
    category: "engineering",
    categoryName: "Xưởng Sáng Chế",
    icon: "🚨",
    difficulty: 3,
    description: "Lắp mạch điện tử cảnh báo kêu to khi cửa sổ bị kẻ trộm hé mở.",
    tasks: [
      { id: "t1", text: "Chuẩn bị một chiếc kẹp quần áo bằng gỗ và một còi buzzer kêu to", icon: "📢", hint: "Kẹp gỗ làm cơ cấu ngắt mạch cơ học đơn giản." },
      { id: "t2", text: "Dán hai miếng giấy bạc dẫn điện vào hai má trong của kẹp gỗ", icon: "🥈", requires: ["t1"], hint: "Khi kẹp đóng, hai miếng giấy bạc chạm nhau tạo thành mạch kín." },
      { id: "t3", text: "Nối một dây từ giấy bạc qua pin 9V và nối vào còi buzzer", icon: "🔋", requires: ["t2"], hint: "Khi hai miếng bạc chạm nhau còi sẽ hú inh ỏi." },
      { id: "t4", text: "Cắt một miếng nhựa cách điện mỏng kẹp vào giữa hai má kẹp", icon: "💳", requires: ["t3"], hint: "Miếng nhựa ngăn hai má bạc chạm nhau: còi lập tức im lặng." },
      { id: "t5", text: "Buộc một sợi chỉ mỏng nối miếng nhựa với cánh cửa sổ", icon: "🧵", requires: ["t4"], hint: "Khi cửa sổ mở ra, sợi chỉ sẽ giật phăng miếng nhựa ra ngoài!" },
      { id: "t6", text: "Dán kẹp gỗ cố định vào mép khung cửa và đóng thử cửa sổ", icon: "🚨", requires: ["t5"], hint: "Cửa vừa hé mở 2cm -> Chỉ giật miếng nhựa -> Còi hú còi báo động vang dội!" }
    ],
    distractors: [
      { id: "d1", text: "Ngắt bỏ nguồn pin cấp cho chuông báo động để tiết kiệm điện", icon: "🔋", failReason: "Không có nguồn điện thì chuông không thể kêu khi cửa sổ bị mở!" },
      { id: "d2", text: "Dán băng dính cố định công tắc từ luôn ở trạng thái đóng", icon: "🩹", failReason: "Công tắc bị dính chặt thì trộm mở cửa chuông cũng không hề reo!" }
    ],
    lesson: "Nguyên lý thường đóng / thường mở: Rút vật cách điện tạo thành mạch kín báo động."
  },
  {
    id: "tm-55",
    level: 55,
    title: "Chế Tạo Máy Phát Điện Gió Thắp Sáng Đèn",
    category: "engineering",
    categoryName: "Xưởng Sáng Chế",
    icon: "💨",
    difficulty: 3,
    description: "Biến sức gió thành năng lượng điện thắp sáng ngọn hải đăng tí hon.",
    tasks: [
      { id: "t1", text: "Cắt vỏ chai nhựa thành 4 cánh quạt cong đón gió", icon: "🌀", hint: "Độ cong khí động học tạo lực xoay mạnh khi có luồng gió thổi qua." },
      { id: "t2", text: "Gắn 4 cánh quạt vào trục của một mô-tơ điện một chiều DC", icon: "⚙️", requires: ["t1"], hint: "Khi cánh quạt quay sẽ làm quay rotor nam châm bên trong mô-tơ." },
      { id: "t3", text: "Hàn hai dây điện đầu ra của mô-tơ vào một đi-ốt nắn dòng", icon: "⚡", requires: ["t2"], hint: "Đi-ốt nắn điện đảm bảo dòng điện chạy một chiều ổn định." },
      { id: "t4", text: "Nối tiếp mạch điện vào một tụ điện tích trữ năng lượng", icon: "🔋", requires: ["t3"], hint: "Tụ điện nạp năng lượng giúp ánh sáng đèn không bị chớp giật khi gió đổi hướng." },
      { id: "t5", text: "Gắn ngọn đèn LED siêu sáng lên đỉnh mô hình ngọn hải đăng", icon: "💡", requires: ["t4"], hint: "Ngọn đèn nhận điện năng chiếu sáng dẫn đường." },
      { id: "t6", text: "Bật quạt gió thổi vào cánh quạt và quan sát ngọn hải đăng bừng sáng", icon: "🌟", requires: ["t5"], hint: "Gió quay tít mù -> Động năng biến thành điện năng thắp sáng rực rỡ!" }
    ],
    distractors: [
      { id: "d1", text: "Cố định cứng ngắc trục quay của cánh quạt gió không cho xoay", icon: "🔒", failReason: "Cánh quạt không quay được thì máy phát không thể tạo ra dòng điện thắp sáng!" },
      { id: "d2", text: "Nối dây điện ra bóng đèn trực tiếp vào vỏ nhựa của cột quạt", icon: "🔌", failReason: "Vỏ nhựa là chất cách điện hoàn toàn, dòng điện không thể truyền tới bóng đèn!" }
    ],
    lesson: "Hiện tượng cảm ứng điện từ: Quay nam châm trong cuộn dây tạo ra dòng điện sạch."
  },
  {
    id: "tm-56",
    level: 56,
    title: "Lắp Ráp Kính Tiềm Vọng Tàu Ngầm",
    category: "engineering",
    categoryName: "Xưởng Sáng Chế",
    icon: "🚢",
    difficulty: 3,
    description: "Nhìn thấy mọi vật trên mặt nước trong khi cơ thể đang nấp dưới gầm bàn.",
    tasks: [
      { id: "t1", text: "Cắt gấp bìa các-tông thành một ống hộp chữ nhật dài hình chữ Z", icon: "📦", hint: "Thân kính hình chữ Z có hai góc gập 90 độ ở hai đầu." },
      { id: "t2", text: "Khoét một ô cửa sổ ngắm ở đầu trên và một ô ở đầu dưới", icon: "🪟", requires: ["t1"], hint: "Cửa sổ trên thu ánh sáng, cửa sổ dưới cho mắt nhìn vào." },
      { id: "t3", text: "Lắp chiếc gương phẳng thứ nhất ở góc trên nghiêng đúng 45 độ", icon: "🪞", requires: ["t2"], hint: "Góc 45 độ bẻ gãy tia sáng từ ngang phản xạ thẳng đứng xuống đáy ống." },
      { id: "t4", text: "Lắp chiếc gương phẳng thứ hai ở góc dưới nghiêng đối xứng 45 độ", icon: "🪞", requires: ["t3"], hint: "Góc 45 độ thứ hai bẻ tia sáng từ thẳng đứng thành ngang truyền vào mắt." },
      { id: "t5", text: "Dán kín mép ống bằng băng dính đen ngăn ánh sáng rò rỉ", icon: "⬛", requires: ["t4"], hint: "Hộp kín hoàn toàn cho hình ảnh phản chiếu trong vắt không bị mờ." },
      { id: "t6", text: "Nấp dưới mép bàn, giơ đầu kính lên cao và quan sát toàn cảnh căn phòng", icon: "👀", requires: ["t5"], hint: "Quan sát đối phương từ góc khuất bí mật như chỉ huy tàu ngầm!" }
    ],
    distractors: [
      { id: "d1", text: "Lắp hai gương phẳng song song cùng hướng mặt phản chiếu về sau", icon: "🪞", failReason: "Gương lắp sai góc sẽ chỉ phản chiếu lòng ống tối om chứ không nhìn thấy bên ngoài!" },
      { id: "d2", text: "Dán giấy decal mờ đục lên bề mặt của cả hai tấm gương", icon: "🌫️", failReason: "Gương bị mờ đục sẽ cản trở ánh sáng truyền qua, không quan sát được gì!" }
    ],
    lesson: "Định luật phản xạ ánh sáng: Hai gương phẳng nghiêng 45 độ bẻ cong đường truyền tia sáng."
  },
  {
    id: "tm-57",
    level: 57,
    title: "Dây Chuyền Đóng Tập Sách Truyện Tranh",
    category: "engineering",
    categoryName: "Xưởng Sáng Chế",
    icon: "📚",
    difficulty: 3,
    description: "Tự tay in ấn, gấp nếp và may chỉ đóng thành cuốn truyện tranh yêu thích.",
    tasks: [
      { id: "t1", text: "In các trang truyện hai mặt theo thứ tự đánh số trang chuẩn", icon: "🖨️", hint: "In đúng thứ tự số trang chẵn lẻ đối ứng." },
      { id: "t2", text: "Gấp đôi từng tờ giấy và lồng các tờ thành từng thếp sách 4 tờ", icon: "📖", requires: ["t1"], hint: "Gấp theo nếp xương sống để ruột sách phẳng phiu." },
      { id: "t3", text: "Dùng dùi nhọn đục 4 lỗ cách đều nhau trên đường gáy sách", icon: "📌", requires: ["t2"], hint: "Đục lỗ xuyên qua các thếp giấy để luồn kim khâu chỉ." },
      { id: "t4", text: "Dùng kim và chỉ dù khâu liên kết các thếp sách zíc-zắc chắc chắn", icon: "🪡", requires: ["t3"], hint: "Khâu gáy kiểu Nhật Bản bền bỉ không bao giờ bị bung trang." },
      { id: "t5", text: "Quét một lớp keo dán gáy sách chuyên dụng và kẹp chặt 2 tiếng", icon: "🧴", requires: ["t4"], hint: "Keo dẻo giữ xương sống sách linh hoạt khi mở lật." },
      { id: "t6", text: "Dán bìa cứng bọc vải màu rực rỡ và dùng dao xén 3 cạnh thẳng tắp", icon: "📘", requires: ["t5"], hint: "Cuốn sách truyện tranh đẹp long lanh như vừa xuất xưởng nhà in!" }
    ],
    distractors: [
      { id: "d1", text: "Bôi keo dính vào mép ngoài của các trang sách thay vì gáy sách", icon: "📖", failReason: "Dán mép ngoài sẽ dính chặt các trang lại và không thể mở sách ra đọc!" },
      { id: "d2", text: "Dập ghim lệch chéo đâm thủng phần chữ chính giữa trang truyện", icon: "📌", failReason: "Bấm ghim xuyên qua chữ làm rách nát trang giấy và che mất nội dung truyện!" }
    ],
    lesson: "Khâu chỉ gáy sách trước khi dán keo — kỹ thuật đóng sách thủ công trường tồn trăm năm."
  },
  {
    id: "tm-58",
    level: 58,
    title: "Lắp Ráp Đồng Hồ Mặt Trời Đo Giờ Cổ Đại",
    category: "engineering",
    categoryName: "Xưởng Sáng Chế",
    icon: "🕰️",
    difficulty: 3,
    description: "Đọc giờ chuẩn xác từng phút chỉ nhờ vào bóng đổ của ánh nắng mặt trời.",
    tasks: [
      { id: "t1", text: "Cắt tấm đế mặt đồng hồ hình tròn chia 24 múi giờ khắc số La Mã", icon: "⚪", hint: "Mặt đĩa ghi các mốc giờ từ 6h sáng đến 6h tối." },
      { id: "t2", text: "Cắt kim gnomon hình tam giác có góc nghiêng bằng đúng vĩ độ Hà Nội (21 độ)", icon: "📐", requires: ["t1"], hint: "Góc nghiêng phải trùng với vĩ độ địa phương thì bóng đổ mới chỉ đúng giờ quanh năm!" },
      { id: "t3", text: "Gắn cố định kim gnomon vuông góc ngay tâm mặt đồng hồ", icon: "🔺", requires: ["t2"], hint: "Cạnh huyền của kim chỉ thẳng lên cực bắc bầu trời." },
      { id: "t4", text: "Dùng la bàn định hướng và xoay kim gnomon chỉ chính xác về hướng BẮC", icon: "🧭", requires: ["t3"], hint: "Hướng bắc từ trường quyết định đường đi chuẩn xác của bóng mặt trời." },
      { id: "t5", text: "Đặt đồng hồ lên bệ phẳng ngoài sân đón nắng suốt cả ngày", icon: "☀️", requires: ["t4"], hint: "Vị trí không bị bóng cây hay mái nhà che khuất." },
      { id: "t6", text: "Quan sát vệt bóng đổ của kim chạm vào số La Mã nào để đọc giờ hiện tại", icon: "⌚", requires: ["t5"], hint: "Bóng đổ chỉ đúng số XII lúc giữa trưa — kiệt tác thiên văn cổ đại!" }
    ],
    distractors: [
      { id: "d1", text: "Đặt đồng hồ mặt trời trong phòng kín tối om dưới tầng hầm", icon: "🔦", failReason: "Không có ánh sáng mặt trời thì kim đồng hồ không thể tạo bóng để xem giờ!" },
      { id: "d2", text: "Cắm kim chỉ giờ nghiêng ngả tự do thay đổi góc liên tục", icon: "📍", failReason: "Góc nghiêng gnomon không chuẩn theo vĩ độ sẽ khiến đồng hồ chỉ giờ sai bét!" }
    ],
    lesson: "Kim gnomon nghiêng bằng vĩ độ và chỉ hướng Bắc: Thiên văn học ứng dụng tuyệt mỹ."
  },
  {
    id: "tm-59",
    level: 59,
    title: "Chế Tạo Hệ Thống Báo Mực Nước Bồn Tự Ngắt",
    category: "engineering",
    categoryName: "Xưởng Sáng Chế",
    icon: "🚰",
    difficulty: 4,
    description: "Chống tràn nước lãng phí bằng cảm biến điện cực thông minh.",
    tasks: [
      { id: "t1", text: "Đặt bể nước có máy bơm nước mini bơm nước vào bể", icon: "🫕", hint: "Mô hình bể nước trên mái nhà cần quản lý chống tràn." },
      { id: "t2", text: "Cắt 2 que inox không gỉ cắm vào thành bể: que ngắn ở đỉnh, que dài ở đáy", icon: "🥢", requires: ["t1"], hint: "Nước sinh hoạt có khoáng chất dẫn điện giữa hai que inox." },
      { id: "t3", text: "Nối 2 que inox vào chân kích hoạt của mạch tranzito điện tử", icon: "🔌", requires: ["t2"], hint: "Khi nước dâng ngập que ngắn, dòng điện nhỏ chạy qua nước kích hoạt tranzito." },
      { id: "t4", text: "Nối đầu ra của tranzito vào một rơ-le ngắt mạch tự động", icon: "⚡", requires: ["t3"], hint: "Rơ-le hoạt động như một công tắc điện điều khiển bằng tín hiệu." },
      { id: "t5", text: "Mắc rơ-le nối tiếp với dây nguồn của máy bơm nước", icon: "🔄", requires: ["t4"], hint: "Khi có tín hiệu kích hoạt, rơ-le tự động ngắt điện máy bơm." },
      { id: "t6", text: "Bật máy bơm và quan sát: khi nước đầy chạm mép, bơm tự ngắt tức thì!", icon: "🛑", requires: ["t5"], hint: "Nước dừng ngay trước khi tràn mép bể 1 cm — tuyệt đối an toàn!" }
    ],
    distractors: [
      { id: "d1", text: "Nối dây cảm biến vào phao kim loại nặng chìm nghỉm đáy bồn", icon: "⚓", failReason: "Phao chìm không nổi lên theo mực nước thì công tắc không bao giờ ngắt điện!" },
      { id: "d2", text: "Đấu nối trực tiếp 220V vào que đo ngâm trong nước bồn tắm", icon: "⚡", failReason: "Đưa điện cao thế vào nước sinh hoạt cực kỳ nguy hiểm, gây điện giật chết người!" }
    ],
    lesson: "Cảm biến que đo mực nước kích hoạt rơ-le ngắt mạch: Tự động hóa công nghiệp cơ bản."
  },
  {
    id: "tm-60",
    level: 60,
    title: "Chế Tạo Kính Hiển Vi Tự Chế Bằng Giọt Nước",
    category: "engineering",
    categoryName: "Xưởng Sáng Chế",
    icon: "🔬",
    difficulty: 4,
    description: "Phóng to tế bào củ hành tây lên 100 lần chỉ bằng một giọt nước tí hon!",
    tasks: [
      { id: "t1", text: "Đục một lỗ tròn nhỏ đường kính 3mm trên tấm nhôm mỏng phẳng", icon: "🔘", hint: "Lỗ nhỏ tròn xoe làm giá đỡ giọt nước căng mặt." },
      { id: "t2", text: "Dùng tăm chấm một giọt nước sạch đặt vừa khít vào lỗ tròn", icon: "💧", requires: ["t1"], hint: "Sức căng bề mặt biến giọt nước thành một thấu kính cầu lồi phóng đại cực mạnh!" },
      { id: "t3", text: "Bóc một lớp màng biểu bì trong suốt mỏng tang của củ hành tây", icon: "🧅", hint: "Màng thật mỏng để ánh sáng xuyên thấu qua được tế bào." },
      { id: "t4", text: "Đặt màng hành lên lam kính thủy tinh và nhỏ 1 giọt cồn đỏ nhuộm màu", icon: "🧪", requires: ["t3"], hint: "Nhuộm màu giúp nhân tế bào hiện lên rõ ràng dưới ánh sáng." },
      { id: "t5", text: "Gắn tấm nhôm giọt nước lên giá đỡ sát phía trên màng tế bào", icon: "🔬", requires: ["t2", "t4"], hint: "Khoảng cách tiêu cự cực ngắn khoảng 2-3 milimet." },
      { id: "t6", text: "Bật đèn pin rọi từ dưới lên và ghé sát mắt ngắm nhìn các tế bào thực vật", icon: "👀", requires: ["t5"], hint: "Từng vách tế bào hình tổ ong hiện ra sống động như kính hiển vi phòng thí nghiệm!" }
    ],
    distractors: [
      { id: "d1", text: "Dùng giọt bùn đục ngầu làm thấu kính phóng đại", icon: "💧", failReason: "Nước bùn đục ngầu cản trở ánh sáng, không thể nhìn thấy tiêu bản mẫu vật!" },
      { id: "d2", text: "Bật đèn flash cực mạnh chiếu thẳng vào mắt người quan sát", icon: "💡", failReason: "Ánh sáng chói lóa chiếu trực diện làm chói mắt và tổn thương thị lực!" }
    ],
    lesson: "Sức căng bề mặt của giọt nước uốn cong ánh sáng — nguyên lý kính hiển vi của Leeuwenhoek."
  },

  // ==============================================================
  // CHẶNG 4: CHỈ HUY SỨ MỆNH & THÁM HIỂM KHÔNG GIAN (MÀN 61 -> 80)
  // ==============================================================
  {
    id: "tm-61",
    level: 61,
    title: "Phóng Tên Lửa Mang Vệ Tinh Lên Quỹ Đạo",
    category: "mission",
    categoryName: "Sứ Mệnh Đặc Biệt",
    icon: "🚀",
    difficulty: 4,
    description: "Chỉ huy đài điều khiển kiểm tra các hệ thống an toàn và điểm hỏa tên lửa.",
    tasks: [
      { id: "t1", text: "Kiểm tra thời tiết bệ phóng: sức gió dưới cấp 3, bầu trời không giông sét", icon: "🌦️", hint: "Thời tiết giông bão có thể làm lệch quỹ đạo tên lửa." },
      { id: "t2", text: "Lắp ráp vệ tinh viễn thông vào khoang chụp bảo vệ trên đỉnh tên lửa", icon: "🛰️", requires: ["t1"], hint: "Hàng hóa quý giá đặt ở tầng trên cùng." },
      { id: "t3", text: "Bơm nhiên liệu Oxy lỏng và Hydro lỏng ở nhiệt độ âm 250 độ C", icon: "⛽", requires: ["t2"], hint: "Nhiên liệu cực lạnh chỉ bơm sát giờ phóng tránh bay hơi." },
      { id: "t4", text: "Thiết lập hệ thống dẫn đường con quay hồi chuyển quán tính", icon: "🧭", requires: ["t2"], hint: "Bộ não dẫn đường tự động giữ tên lửa bay đúng góc nghiêng." },
      { id: "t5", text: "Bắt đầu đếm ngược 10 giây cuối cùng và thu hồi các cầu nối tháp phóng", icon: "⏱️", requires: ["t3", "t4"], hint: "Mọi kết nối cơ học rút lui nhường đường cho tên lửa cất cánh." },
      { id: "t6", text: "Điểm hỏa động cơ chính, gầm vang sấm sét vút bay xé rách bầu khí quyển", icon: "🚀", requires: ["t5"], hint: "Cỗ tên lửa khổng lồ cưỡi trên cột lửa cam rực rỡ bay vào vũ trụ!" }
    ],
    distractors: [
      { id: "d1", text: "Điểm hỏa động cơ khi tháp nạp nhiên liệu chưa rút ra", icon: "💥", failReason: "Tên lửa va chạm tháp phóng gây nổ tung toàn bộ bệ phóng!" },
      { id: "d2", text: "Khai hỏa động cơ khi giàn phóng còn chưa mở khóa kẹp giữ", icon: "🚀", failReason: "Tên lửa bị kẹp chặt khai hỏa sẽ nổ tung ngay trên bệ phóng!" }
    ],
    lesson: "Quy trình kiểm soát an toàn hàng không vũ trụ: Zero lỗi sai, kiểm tra chéo 100%."
  },
  {
    id: "tm-62",
    level: 62,
    title: "Dựng Lều Trại Sinh Tồn Trong Rừng Thông",
    category: "mission",
    categoryName: "Sứ Mệnh Đặc Biệt",
    icon: "⛺",
    difficulty: 3,
    description: "Thiết lập căn cứ trú ẩn an toàn trước khi màn đêm buông xuống.",
    tasks: [
      { id: "t1", text: "Tìm bãi đất bằng phẳng, cao ráo, cách xa lòng suối và không có cành cây khô bên trên", icon: "🏞️", hint: "Tránh lũ quét bất ngờ từ suối và cành mục gãy rơi trong đêm." },
      { id: "t2", text: "Dọn sạch đá nhọn, cành cây gồ ghề trên mặt đất", icon: "🧹", requires: ["t1"], hint: "Đá nhọn có thể đâm rách đáy lều và làm đau lưng khi nằm ngủ." },
      { id: "t3", text: "Trải bạt lót chống thấm nước xuống mặt đất", icon: "🟩", requires: ["t2"], hint: "Bạt lót ngăn hơi ẩm đất ngấm lên lều." },
      { id: "t4", text: "Dựng khung xương sợi thủy tinh và móc thân lều lên khung", icon: "⛺", requires: ["t3"], hint: "Khung uốn cong định hình không gian lều đứng vững." },
      { id: "t5", text: "Đóng cọc ghim 4 góc lều xuống đất theo góc nghiêng 45 độ", icon: "🔨", requires: ["t4"], hint: "Ghim cọc nghiêng 45 độ ngược hướng kéo để giữ chắc lều trước gió bão." },
      { id: "t6", text: "Phủ bạt chống mưa bên ngoài và kéo căng dây néo lều", icon: "🌧️", requires: ["t5"], hint: "Bạt che mưa không dính sát vào thân lều để hơi thở không đọng sương." }
    ],
    distractors: [
      { id: "d1", text: "Dựng lều ngay dưới lòng suối cạn khô vào mùa mưa lũ", icon: "🌊", failReason: "Lũ quét trên núi đổ về trong đêm sẽ cuốn phăng toàn bộ người và lều trại!" },
      { id: "d2", text: "Đốt lửa trại to đùng sát vách bạt lều nilon", icon: "🔥", failReason: "Tàn lửa bén vào bạt lều nilon sẽ gây cháy lều nhanh như chớp!" }
    ],
    lesson: "Chọn vị trí an toàn trước tiên, cắm cọc xiên 45 độ khóa chặt lều trước gió rừng."
  },
  {
    id: "tm-63",
    level: 63,
    title: "Tổ Chức Bữa Tiệc Sinh Nhật Bất Ngờ",
    category: "mission",
    categoryName: "Sứ Mệnh Đặc Biệt",
    icon: "🎉",
    difficulty: 3,
    description: "Kế hoạch phối hợp nhịp nhàng mang lại nụ cười vỡ òa cho người bạn thân.",
    tasks: [
      { id: "t1", text: "Lập nhóm chat bí mật với các bạn trong lớp và phân công nhiệm vụ", icon: "📱", hint: "Kế hoạch bí mật tuyệt đối không để nhân vật chính biết." },
      { id: "t2", text: "Nhờ một bạn rủ nhân vật chính đi thư viện mượn sách để giữ chân", icon: "📚", requires: ["t1"], hint: "Chiến thuật đánh lạc hướng để có 2 tiếng chuẩn bị phòng tiệc." },
      { id: "t3", text: "Trang trí phòng tiệc: treo ruy băng, thổi bóng bay và bảng chữ chúc mừng", icon: "🎈", requires: ["t1"], hint: "Biến căn phòng thành không gian lễ hội rực rỡ sắc màu." },
      { id: "t4", text: "Đặt bánh kem sinh nhật cắm sẵn nến và bày hoa quả lên bàn tiệc", icon: "🎂", requires: ["t3"], hint: "Chiếc bánh kem lung linh đặt ngay vị trí trang trọng giữa bàn." },
      { id: "t5", text: "Tắt hết đèn trong phòng, tất cả các bạn nấp sau bàn và giữ im lặng", icon: "🤫", requires: ["t4"], hint: "Chuẩn bị khoảnh khắc bất ngờ khi tiếng bước chân tới cửa." },
      { id: "t6", text: "Bạn mở cửa bước vào -> Bật đèn bừng sáng, nổ pháo giấy hát vang bài ca sinh nhật", icon: "🎊", requires: ["t2", "t5"], hint: "Tiếng cười reo hò vỡ òa trong niềm xúc động nghẹn ngào!" }
    ],
    distractors: [
      { id: "d1", text: "Gọi điện thoại báo trước toàn bộ kịch bản bí mật cho nhân vật chính", icon: "📞", failReason: "Bật mí trước kịch bản làm mất hoàn toàn yếu tố bất ngờ của bữa tiệc!" },
      { id: "d2", text: "Thắp 100 cây nến sát chùm bóng bay bơm khí hydro dễ cháy", icon: "🎈", failReason: "Khí hydro gặp lửa sẽ nổ bùng như bom khí cực kỳ nguy hiểm!" }
    ],
    lesson: "Lập kế hoạch đồng đội: Đánh lạc hướng, chuẩn bị chu đáo và bùng nổ đúng thời điểm."
  },
  {
    id: "tm-64",
    level: 64,
    title: "Lặn Biển Thám Hiểm Xác Tàu Cổ Đắm",
    category: "mission",
    categoryName: "Sứ Mệnh Đặc Biệt",
    icon: "🤿",
    difficulty: 4,
    description: "Chuyến lặn thám hiểm đại dương sâu 30 mét tuân thủ quy tắc áp suất.",
    tasks: [
      { id: "t1", text: "Kiểm tra áp suất bình khí dưỡng khí nén đầy 200 bar và van thở phụ", icon: "🤿", hint: "Nguồn dưỡng khí duy nhất quyết định sự sống dưới đáy biển sâu." },
      { id: "t2", text: "Mặc bộ đồ lặn cao su giữ nhiệt và đeo đai chì cân bằng độ nổi", icon: "🩱", requires: ["t1"], hint: "Đai chì giúp thợ lặn chìm êm ái xuống nước mà không tốn sức." },
      { id: "t3", text: "Đeo kính lặn, chân vịt và kiểm tra tín hiệu tay với người bạn đồng hành (Buddy)", icon: "🤝", requires: ["t2"], hint: "Tuyệt đối không lặn biển một mình — luôn có bạn lặn đi kèm." },
      { id: "t4", text: "Thả mình xuống nước, lặn xuống từ từ và nuốt nước bọt cân bằng áp suất màng nhĩ", icon: "🌊", requires: ["t3"], hint: "Mỗi mét sâu áp suất nước tăng lên, phải cân bằng tai liên tục." },
      { id: "t5", text: "Tiếp cận xác tàu đắm, bật đèn pin công suất lớn quét tìm hòm kho báu", icon: "🚢", requires: ["t4"], hint: "Ánh sáng vàng xuyên qua màn sương biển mờ ảo rọi vào khoang lái cổ." },
      { id: "t6", text: "Bơi ngược lên mặt nước từ từ và dừng lại 3 phút ở độ sâu 5m xả khí nitơ", icon: "⬆️", requires: ["t5"], hint: "Điểm dừng an toàn giải áp bắt buộc ngăn ngừa bệnh bóng khí trong máu." }
    ],
    distractors: [
      { id: "d1", text: "Bơi ngoi thẳng từ đáy sâu 30m lên mặt nước thật nhanh", icon: "🚀", failReason: "Ngoi lên quá nhanh làm khí nitơ sôi bọt trong máu gây liệt tủy tử vong!" },
      { id: "d2", text: "Một mình tự ý lặn xuống sâu không có thợ lặn bạn đồng hành", icon: "🦈", failReason: "Vi phạm nguyên tắc an toàn lặn: khi gặp sự cố dưới nước sâu sẽ không có ai cứu viện!" }
    ],
    lesson: "Quy tắc lặn biển sống còn: Cân bằng áp suất tai khi xuống, dừng xả khí khi lên."
  },
  {
    id: "tm-65",
    level: 65,
    title: "Chiến Dịch Cứu Hộ Động Vật Trong Vùng Lũ",
    category: "mission",
    categoryName: "Sứ Mệnh Đặc Biệt",
    icon: "🛶",
    difficulty: 3,
    description: "Giải cứu chú cún con và đàn gà bị mắc kẹt trên nóc nhà giữa dòng nước xiết.",
    tasks: [
      { id: "t1", text: "Mặc áo phao cứu sinh cài chặt các khóa chốt ngang ngực", icon: "🦺", hint: "Bảo đảm an toàn cho chính người cứu hộ trước khi cứu người khác." },
      { id: "t2", text: "Kiểm tra xuồng cao su động cơ và chuẩn bị lồng nhốt động vật", icon: "🚤", requires: ["t1"], hint: "Lồng giúp động vật hoảng loạn không cắn phá nhảy xuống nước." },
      { id: "t3", text: "Lái xuồng ngược dòng nước xiết tiếp cận ngôi nhà ngập đến mái", icon: "🌊", requires: ["t2"], hint: "Tiếp cận từ phía sau mạn chắn sóng để xuồng không bị lật." },
      { id: "t4", text: "Ném dây thừng cố định mũi xuồng vào cột xà gồ mái nhà", icon: "🪢", requires: ["t3"], hint: "Buộc xuồng đứng yên, không bị dòng nước cuốn trôi đi." },
      { id: "t5", text: "Nhẹ nhàng ôm chú cún run rẩy cho vào lồng và khoác chăn ấm", icon: "🐶", requires: ["t4"], hint: "Vuốt ve trấn an để con vật bớt hoảng sợ." },
      { id: "t6", text: "Đưa các con vật an toàn về trạm thú y dã chiến sấy ấm và cho ăn", icon: "🏥", requires: ["t5"], hint: "Ánh mắt biết ơn long lanh của chú cún sưởi ấm trái tim người cứu hộ." }
    ],
    distractors: [
      { id: "d1", text: "Lái ca-nô cứu hộ tốc độ tối đa đâm thẳng vào bãi cọc nhọn", icon: "🚤", failReason: "Cọc ngầm đâm thủng đáy ca-nô làm chìm phương tiện cứu hộ của đội!" },
      { id: "d2", text: "Chạm tay trần vào cột điện đang ngập nước lũ", icon: "⚡", failReason: "Điện lưới bị rò rỉ trong nước lũ sẽ giật chết người ngay tức khắc!" }
    ],
    lesson: "Mặc áo phao trước tiên, neo thuyền cố định rồi mới bế động vật lên xuồng."
  },
  {
    id: "tm-66",
    level: 66,
    title: "Chỉ Huy Dập Tắt Đám Cháy Rừng",
    category: "mission",
    categoryName: "Sứ Mệnh Đặc Biệt",
    icon: "🚒",
    difficulty: 4,
    description: "Chặn đứng bức tường lửa rừng bốc cao bằng chiến thuật tạo đường băng cản lửa.",
    tasks: [
      { id: "t1", text: "Dùng flycam bay lên cao trinh sát hướng gió và tốc độ lan của đám cháy", icon: "🛰️", hint: "Biết hướng gió thổi để đón đầu ngọn lửa chứ không chạy theo sau đuôi." },
      { id: "t2", text: "Xác định tuyến phòng thủ đón đầu hướng gió cách đám cháy 500 mét", icon: "🗺️", requires: ["t1"], hint: "Khoảng cách đủ an toàn để đội cứu hỏa kịp đào đường băng cản lửa." },
      { id: "t3", text: "Dùng máy ủi cào sạch toàn bộ cây cỏ, lá khô tạo dải đất trống rộng 30m", icon: "🚜", requires: ["t2"], hint: "Đường băng cản lửa triệt tiêu hoàn toàn chất cháy: lửa đến đây sẽ tự tắt vì hết nhiên liệu!" },
      { id: "t4", text: "Trực thăng múc nước từ hồ xả bom nước dập các tàn than bay qua đường băng", icon: "🚁", requires: ["t3"], hint: "Dập tắt các tàn tro bay theo gió vượt tuyến phòng thủ." },
      { id: "t5", text: "Đội lính cứu hỏa đeo bình dưỡng khí dùng vòi áp lực phun làm ướt sũng mép rừng", icon: "🚒", requires: ["t3"], hint: "Làm ướt đẫm thảm thực vật ngăn lửa bén." },
      { id: "t6", text: "Kiểm tra nhiệt kế hồng ngoại xác nhận nhiệt độ giảm dưới 40 độ C, khống chế hoàn toàn giặc lửa", icon: "✅", requires: ["t4", "t5"], hint: "Cứu sống hàng nghìn héc-ta rừng nguyên sinh xanh thắm!" }
    ],
    distractors: [
      { id: "d1", text: "Chạy thẳng vào đầu ngọn lửa xuôi theo chiều gió bão", icon: "🔥", failReason: "Gió thổi ngọn lửa di chuyển nhanh hơn người chạy, con sẽ bị lửa bao vây nguy hiểm!" },
      { id: "d2", text: "Dập đám cháy xăng dầu bằng cách dội nước lạnh vào", icon: "🛢️", failReason: "Dầu nhẹ hơn nước nổi lên trên bề mặt làm ngọn lửa lan rộng dữ dội hơn!" }
    ],
    lesson: "Chiến thuật dập lửa kinh điển: Tạo đường băng cản lửa triệt tiêu nguồn nhiên liệu."
  },
  {
    id: "tm-67",
    level: 67,
    title: "Giải Mã Mê Cung Lăng Mộ Kim Tự Tháp",
    category: "mission",
    categoryName: "Sứ Mệnh Đặc Biệt",
    icon: "🏺",
    difficulty: 4,
    description: "Thám hiểm lăng mộ Pharaoh cổ đại bằng suy luận logic và kiến thức hình học.",
    tasks: [
      { id: "t1", text: "Buộc đầu cuộn dây chỉ phát quang vào cửa lăng mộ làm dấu đường về", icon: "🧵", hint: "Sợi chỉ Ariadne dẫn đường giúp không bao giờ bị lạc trong mê cung tối tăm." },
      { id: "t2", text: "Thắp đuốc và quan sát hướng gió lùa từ các khe nứt thông gió", icon: "🔥", requires: ["t1"], hint: "Ngọn lửa nghiêng về phía nào chứng tỏ phía đó thông ra hầm mộ trung tâm." },
      { id: "t3", text: "Phát hiện bẫy sập sàn đá: chỉ bước chân lên các phiến đá có khắc biểu tượng Mặt Trời", icon: "☀️", requires: ["t2"], hint: "Các phiến đá hình bọ hung và rắn độc đều có lò xo sụt hố chông!" },
      { id: "t4", text: "Dùng gương đồng xoay góc hứng tia sáng mặt trời chiếu vào mắt tượng Nhân Sư", icon: "🪞", requires: ["t3"], hint: "Cơ cấu quang học cổ đại kích hoạt cánh cửa đá ngầm mở ra." },
      { id: "t5", text: "Giải câu đố toán học khắc trên phiến đá: điền số tiếp theo của chuỗi số Fibonacci", icon: "📜", requires: ["t4"], hint: "Mật mã 1, 1, 2, 3, 5, 8... Số tiếp theo 13 mở khóa hòm vàng!" },
      { id: "t6", text: "Ghi chép hoa văn cổ vào sổ tay và theo đường chỉ phát quang rút lui an toàn", icon: "💎", requires: ["t5"], hint: "Trở về với bản đồ khảo cổ học quý giá làm rạng danh lịch sử!" }
    ],
    distractors: [
      { id: "d1", text: "Chạy nhảy bừa bãi giẫm lên các phiến đá hình rắn độc", icon: "🐍", failReason: "Bẫy ngầm sụp xuống rơi vào hầm chông cổ đại!" },
      { id: "d2", text: "Giật đứt sợi dây cước căng ngang cửa hầm mộ cổ", icon: "🕸️", failReason: "Bẫy cơ học kích hoạt làm sập tảng đá ngàn cân bịt kín lối thoát duy nhất!" }
    ],
    lesson: "Luôn chừa đường lui (cuộn dây chỉ) và đọc kỹ manh mối trước khi đặt bước chân."
  },
  {
    id: "tm-68",
    level: 68,
    title: "Tổ Chức Ngày Hội Thể Thao Olympic Trường Học",
    category: "mission",
    categoryName: "Sứ Mệnh Đặc Biệt",
    icon: "🏅",
    difficulty: 4,
    description: "Điều phối 500 vận động viên nhí thi đấu tranh tài đoàn kết, an toàn.",
    tasks: [
      { id: "t1", text: "Lập lịch trình thi đấu chi tiết và sơ đồ phân chia các khu vực sân", icon: "📋", hint: "Sân bóng đá, đường chạy điền kinh, hố nhảy xa không bị chồng lấn giờ." },
      { id: "t2", text: "Kiểm tra độ an toàn của dụng cụ thi đấu: xà đơn, đệm nhảy cao, vạch vôi", icon: "📐", requires: ["t1"], hint: "Đệm nhảy dày và xà chắc chắn bảo vệ xương khớp học sinh." },
      { id: "t3", text: "Thiết lập trạm y tế dã chiến với bác sĩ, bình xịt lạnh giảm đau và cáng cứu thương", icon: "🏥", requires: ["t1"], hint: "Luôn có y tế sẵn sàng trước khi tiếng còi khai cuộc vang lên." },
      { id: "t4", text: "Tổ chức lễ diễu hành khai mạc và thắp sáng ngọn đuốc thể thao đoàn kết", icon: "🔥", requires: ["t2", "t3"], hint: "Tạo khí thế hào hùng, tinh thần fair-play trung thực." },
      { id: "t5", text: "Phát loa điều phối các đoàn vận động viên vào sân thi đấu theo đúng khung giờ", icon: "📢", requires: ["t4"], hint: "Các trận đấu diễn ra nhịp nhàng, đúng tiến độ không ai phải chờ lâu." },
      { id: "t6", text: "Trao huy chương vàng, bạc, đồng trên bục vinh quang và bế mạc ngày hội", icon: "🥇", requires: ["t5"], hint: "Niềm hân hoan rạng rỡ trên từng gương mặt các bạn nhỏ!" }
    ],
    distractors: [
      { id: "d1", text: "Tổ chức chạy việt dã giữa trưa hè nắng nóng 42 độ C", icon: "☀️", failReason: "Vận động viên thi đấu dưới nắng gắt sẽ bị sốc nhiệt và ngất xỉu hàng loạt!" },
      { id: "d2", text: "Không chuẩn bị trạm y tế và bình nước tiếp sức cho vận động viên", icon: "🏥", failReason: "Thiếu sơ cứu và nước uống khiến các vận động viên bị kiệt sức nguy kịch!" }
    ],
    lesson: "Trạm y tế và an toàn sân bãi phải sẵn sàng 100% trước khi mở màn thi đấu."
  },
  {
    id: "tm-69",
    level: 69,
    title: "Thám Hiểm Trạm Nghiên Cứu Bắc Cực Băng Giá",
    category: "mission",
    categoryName: "Sứ Mệnh Đặc Biệt",
    icon: "❄️",
    difficulty: 4,
    description: "Thu thập mẫu lõi băng ngàn năm ở nhiệt độ âm 45 độ C giữa bão tuyết gầm thét.",
    tasks: [
      { id: "t1", text: "Mặc 4 lớp áo chuyên dụng chống rét âm 50 độ và ủng giữ nhiệt lông cừu", icon: "🧥", hint: "Bộ đồ sinh tồn ngăn ngừa tê cóng hoại tử ngón tay ngón chân." },
      { id: "t2", text: "Kiểm tra máy định vị vệ tinh GPS và máy phát tín hiệu cấp cứu khẩn cấp", icon: "📡", requires: ["t1"], hint: "Bão tuyết trắng xóa làm mất hoàn toàn phương hướng, GPS là đôi mắt duy nhất." },
      { id: "t3", text: "Khởi động xe trượt tuyết bánh xích và buộc chặt thùng mẫu vật", icon: "🚜", requires: ["t2"], hint: "Động cơ sấy ấm dầu bôi trơn trước khi lăn bánh trên băng tuyết." },
      { id: "t4", text: "Di chuyển đến tọa độ sông băng cổ đại khoan lấy mẫu lõi băng sâu 20 mét", icon: "🧊", requires: ["t3"], hint: "Lõi băng chứa bọt khí nguyên thủy từ thời tiền sử." },
      { id: "t5", text: "Bảo quản mẫu lõi băng vào thùng giữ nhiệt nitơ lỏng", icon: "🧪", requires: ["t4"], hint: "Giữ mẫu băng không bị tan chảy trước khi đưa về phòng thí nghiệm." },
      { id: "t6", text: "Trở về trạm nghiên cứu trước khi bão tuyết mù trời ập đến lúc hoàng hôn", icon: "🏠", requires: ["t5"], hint: "Bàn giao mẫu băng vô giá mở ra bí mật biến đổi khí hậu Trái Đất!" }
    ],
    distractors: [
      { id: "d1", text: "Cởi bỏ găng tay ấm sờ tay trần vào thanh kim loại âm 40 độ C", icon: "❄️", failReason: "Nhiệt độ âm sâu làm da tay bị dính chặt vào kim loại và hoại tử bỏng lạnh!" },
      { id: "d2", text: "Tiến lại gần trêu chọc một chú gấu Bắc Cực mẹ đang dẫn con", icon: "🐻", failReason: "Gấu Bắc Cực là loài săn mồi đỉnh cao hung dữ, con sẽ bị tấn công tử vong!" }
    ],
    lesson: "Chống rét nhiều lớp và luôn tôn trọng lịch trình thời tiết vùng cực khắc nghiệt."
  },
  {
    id: "tm-70",
    level: 70,
    title: "Hạ Cánh Robot Tự Hành Lên Sao Hỏa",
    category: "mission",
    categoryName: "Sứ Mệnh Đặc Biệt",
    icon: "🔴",
    difficulty: 4,
    description: "Vượt qua '7 phút kinh hoàng' để đặt chân robot thám hiểm lên Hành tinh Đỏ.",
    tasks: [
      { id: "t1", text: "Tàu vũ trụ tách khỏi tầng đẩy và tiếp cận khí quyển Sao Hỏa với tốc độ 20.000 km/h", icon: "🛰️", hint: "Vận tốc siêu thanh đòi hỏi góc đi vào khí quyển cực kỳ chuẩn xác." },
      { id: "t2", text: "Tấm khiên gốm chịu nhiệt bốc cháy ma sát làm chậm tốc độ xuống 1.500 km/h", icon: "🛡️", requires: ["t1"], hint: "Khiên nhiệt chịu sức nóng 2.000 độ C bảo vệ robot bên trong." },
      { id: "t3", text: "Bung chiếc dù siêu thanh lớn nhất lịch sử hãm tốc độ rơi", icon: "🪂", requires: ["t2"], hint: "Chiếc dù khổng lồ bung ra xé rách bầu không khí mỏng manh của Sao Hỏa." },
      { id: "t4", text: "Tách bỏ dù, giàn phản lực Sky Crane kích hoạt 8 động cơ tên lửa hãm phanh", icon: "🔥", requires: ["t3"], hint: "Giàn phản lực lơ lửng cách mặt đất 20 mét như một chiếc cần cẩu bay." },
      { id: "t5", text: "Thả dây cáp nylon nhẹ nhàng hạ 6 bánh xe robot chạm đất mềm mại", icon: "🤖", requires: ["t4"], hint: "Cơ cấu thả cáp tránh bụi đất thổi ngược làm kẹt camera robot." },
      { id: "t6", text: "Cắt đứt dây cáp, giàn tên lửa bay ra xa và robot gửi bức ảnh màu đầu tiên về Trái Đất", icon: "📸", requires: ["t5"], hint: "Cả trung tâm điều khiển NASA nhảy cẫng lên reo hò trong nước mắt vui sướng!" }
    ],
    distractors: [
      { id: "d1", text: "Mở dù hãm tốc độ khi tàu vũ trụ chưa đi vào tầng khí quyển", icon: "🪂", failReason: "Ngoài chân không không có không khí, bung dù không có tác dụng hãm tốc!" },
      { id: "d2", text: "Ngắt liên lạc anten với Trái Đất trước khi tiếp đất", icon: "📡", failReason: "Mất tín hiệu điều khiển, robot sẽ lao tự do đâm nát mặt đất Sao Hỏa!" }
    ],
    lesson: "Khiên nhiệt -> Dù siêu thanh -> Cần cẩu tên lửa -> Thả cáp: Tuyệt tác kỹ thuật hàng không."
  },
  {
    id: "tm-71",
    level: 71,
    title: "Sửa Chữa Trạm Vũ Trụ Quốc Tế ISS",
    category: "mission",
    categoryName: "Sứ Mệnh Đặc Biệt",
    icon: "🛰️",
    difficulty: 4,
    description: "Bước ra ngoài khoảng không vũ trụ thay thế tấm pin năng lượng mặt trời bị hỏng.",
    tasks: [
      { id: "t1", text: "Thở oxy tinh khiết trong 2 tiếng xả hết khí nitơ ra khỏi máu", icon: "🫁", hint: "Trang phục vũ trụ áp suất thấp, nếu còn nitơ trong máu sẽ bị tắc mạch nguy hiểm." },
      { id: "t2", text: "Mặc bộ đồ phi hành gia EMU nặng 130kg và gắn dây neo an toàn vào thắt lưng", icon: "🧑‍🚀", requires: ["t1"], hint: "Dây neo là sợi dây sinh mệnh không để phi hành gia trôi dạt vào vũ trụ đen ngòm." },
      { id: "t3", text: "Bước vào khoang trung gian (Airlock) và xả toàn bộ không khí ra ngoài", icon: "🚪", requires: ["t2"], hint: "Cân bằng áp suất với chân không vũ trụ trước khi mở cửa ngoài." },
      { id: "t4", text: "Mở cửa khoang bước ra ngoài không gian, men theo tay vịn trạm ISS", icon: "🌌", requires: ["t3"], hint: "Trái Đất xanh ngắt khổng lồ lững lờ trôi dưới đôi chân phi hành gia!" },
      { id: "t5", text: "Dùng súng bắn vít không giật tháo tấm pin mặt trời cũ và lắp tấm pin mới", icon: "🔧", requires: ["t4"], hint: "Công cụ không giật giúp phi hành gia không bị lực đẩy quay tít trong không trọng lượng." },
      { id: "t6", text: "Cắm giắc truyền tải điện, báo về trung tâm trạm ISS đã nhận đủ 100% năng lượng", icon: "⚡", requires: ["t5"], hint: "Tấm pin mới mở bung như cánh bướm vàng thu nạp ánh sáng mặt trời." }
    ],
    distractors: [
      { id: "d1", text: "Tháo dây an toàn bảo hiểm khi đang bước ra ngoài không gian", icon: "🧑‍🚀", failReason: "Mất dây neo, nhà du hành sẽ trôi dạt vô định vào không gian sâu thẳm!" },
      { id: "d2", text: "Mở cửa khoang điều áp khi áp suất bên trong chưa cân bằng", icon: "🚪", failReason: "Chênh lệch áp suất làm nổ tung cửa khoang và hút toàn bộ đồ đạc ra ngoài!" }
    ],
    lesson: "Luôn khóa móc dây neo an toàn — không bao giờ thả tay trong môi trường không trọng lực."
  },
  {
    id: "tm-72",
    level: 72,
    title: "Kế Hoạch Chủ Động Đón Siêu Bão Đổ Bộ",
    category: "mission",
    categoryName: "Sứ Mệnh Đặc Biệt",
    icon: "🌀",
    difficulty: 3,
    description: "Gia cố nhà cửa và chuẩn bị phương án 4 tại chỗ bảo vệ gia đình an toàn.",
    tasks: [
      { id: "t1", text: "Theo dõi bản tin dự báo khí tượng cập nhật đường đi và thời gian bão đổ bộ", icon: "📺", hint: "Nắm rõ giờ bão đổ bộ để hoàn thành mọi công việc trước 12 tiếng." },
      { id: "t2", text: "Chằng chống mái tôn bằng các bao cát và vít néo dây thép", icon: "🧱", requires: ["t1"], hint: "Bao cát giữ mái tôn không bị gió lốc cuốn bay." },
      { id: "t3", text: "Cắt tỉa các cành cây lớn quanh nhà có nguy cơ gãy đổ vào dây điện", icon: "🪓", requires: ["t1"], hint: "Phòng ngừa cành cây đè sập mái nhà hoặc chập cháy nổ điện." },
      { id: "t4", text: "Dán băng dính chữ X lên các cửa kính lớn chống nứt vỡ do áp suất gió", icon: "❌", requires: ["t1"], hint: "Băng keo giữ mảnh kính không văng tung tóe nếu bị vỡ." },
      { id: "t5", text: "Tích trữ nước sạch, lương khô, sạc đầy pin sạc dự phòng và đèn pin", icon: "🔦", requires: ["t1"], hint: "Chuẩn bị cho tình huống mất điện và mất nước kéo dài 3 ngày." },
      { id: "t6", text: "Khóa chặt mọi cửa sổ, đưa gia đình vào phòng kiên cố nhất tránh bão", icon: "🛡️", requires: ["t2", "t3", "t4", "t5"], hint: "Yên tâm trong ngôi nhà đã được gia cố kiên cố đón bão đi qua." }
    ],
    distractors: [
      { id: "d1", text: "Ra bãi biển ngắm sóng thần khổng lồ khi bão đang đổ bộ", icon: "🌊", failReason: "Sóng bão và gió giật cấp 15 sẽ cuốn phăng người ra biển khơi mất tích!" },
      { id: "d2", text: "Đứng trú mưa bão ngay dưới gốc cây cổ thụ to và cột điện cao thế", icon: "⚡", failReason: "Cây to dễ gãy đè và sét đánh trúng cột điện gây tử vong!" }
    ],
    lesson: "Phương châm 4 tại chỗ: Chỉ huy, lực lượng, phương tiện, hậu cần tại chỗ."
  },
  {
    id: "tm-73",
    level: 73,
    title: "Vận Hành Nhà Máy Bánh Kẹo Tự Động",
    category: "mission",
    categoryName: "Sứ Mệnh Đặc Biệt",
    icon: "🏭",
    difficulty: 4,
    description: "Điều phối dây chuyền robot sản xuất 10.000 hộp sô-cô-la mỗi giờ.",
    tasks: [
      { id: "t1", text: "Nấu chảy hạt ca-cao và bơ sữa trong bồn gia nhiệt 45 độ C", icon: "🍫", hint: "Làm lỏng sô-cô-la để bơm qua đường ống." },
      { id: "t2", text: "Bơm sô-cô-la lỏng rót đầy vào các khuôn đúc hình trái tim", icon: "❤️", requires: ["t1"], hint: "Robot định lượng rót chính xác từng miligram." },
      { id: "t3", text: "Băng chuyền đưa khuôn qua hầm làm lạnh âm 5 độ C để sô-cô-la đông đặc", icon: "❄️", requires: ["t2"], hint: "Làm lạnh nhanh giúp sô-cô-la bóng bẩy giòn rụm." },
      { id: "t4", text: "Cánh tay robot gõ nhẹ đáy khuôn tách kẹo ra băng tải bọc giấy bạc", icon: "🤖", requires: ["t3"], hint: "Giấy bạc bảo vệ viên kẹo khỏi không khí và độ ẩm." },
      { id: "t5", text: "Cảm biến quang học quét kiểm tra trọng lượng và loại bỏ viên móp méo", icon: "🔍", requires: ["t4"], hint: "Hệ thống kiểm soát chất lượng tự động loại sản phẩm lỗi." },
      { id: "t6", text: "Đóng hộp thiếc, in hạn sử dụng bằng tia laser và xếp vào thùng các-tông", icon: "📦", requires: ["t5"], hint: "Hàng nghìn hộp bánh kẹo thơm ngon sẵn sàng xuất khẩu toàn cầu!" }
    ],
    distractors: [
      { id: "d1", text: "Thò tay trần vào băng chuyền bánh răng đang vận hành quay tít", icon: "⚙️", failReason: "Bánh răng cuốn tay vào máy gây tai nạn lao động đặc biệt nghiêm trọng!" },
      { id: "d2", text: "Đổ nước tẩy rửa sàn nhà vào bồn nấu kẹo mạch nha", icon: "🧪", failReason: "Hóa chất độc hại làm nhiễm độc toàn bộ mẻ kẹo của nhà máy!" }
    ],
    lesson: "Dây chuyền tự động liên tục: Mỗi khâu hoàn hảo tạo nên sản phẩm hoàn hảo."
  },
  {
    id: "tm-74",
    level: 74,
    title: "Chinh Phục Nóc Nhà Đông Dương Fansipan",
    category: "mission",
    categoryName: "Sứ Mệnh Đặc Biệt",
    icon: "🏔️",
    difficulty: 4,
    description: "Kế hoạch leo núi vượt rừng trúc ngàn năm chạm tay vào cột mốc 3.143m.",
    tasks: [
      { id: "t1", text: "Tập luyện thể lực đi bộ leo dốc mỗi ngày trước chuyến đi 1 tháng", icon: "🏃", hint: "Cơ đùi và tim mạch bền bỉ là điều kiện tiên quyết vượt núi cao." },
      { id: "t2", text: "Chuẩn bị giày leo núi chuyên dụng có gai bám đá và gậy leo núi trợ lực", icon: "🥾", requires: ["t1"], hint: "Gậy leo núi giảm 30% áp lực trọng lượng lên khớp đầu gối." },
      { id: "t3", text: "Thuê người dẫn đường (Porter) bản địa am hiểu từng lối mòn trong rừng", icon: "🧭", requires: ["t1"], hint: "Người dẫn đường đảm bảo đoàn không bao giờ bị lạc vào vực thẳm." },
      { id: "t4", text: "Xuất phát từ sáng sớm, duy trì nhịp thở sâu đều đặn và uống từng ngụm nước nhỏ", icon: "💧", requires: ["t2", "t3"], hint: "Không uống ừng ực làm xóc bụng, uống ngụm nhỏ giữ ẩm cổ họng." },
      { id: "t5", text: "Dừng chân nghỉ ngơi ở lán 2.800m ăn bữa tối nóng và ngủ đủ giấc", icon: "🏕️", requires: ["t4"], hint: "Nạp năng lượng và giữ ấm cơ thể chuẩn bị cho chặng bứt phá đỉnh." },
      { id: "t6", text: "Bứt phá lên đỉnh lúc bình minh, chạm tay vào cột mốc chóp inox 3.143m ngắm biển mây", icon: "🚩", requires: ["t5"], hint: "Cảm xúc tự hào tột cùng khi vượt qua giới hạn của chính bản thân mình!" }
    ],
    distractors: [
      { id: "d1", text: "Tách đoàn đi một mình vào rừng trúc rậm rạp không la bàn", icon: "🌲", failReason: "Đi lạc trong rừng núi Hoàng Liên Sơn ban đêm rất dễ bị hạ thân nhiệt và tử vong!" },
      { id: "d2", text: "Uống nước suối đục ngầu chưa đun sôi có bọ gậy sinh sống", icon: "💧", failReason: "Nước suối rừng chứa nhiều ký sinh trùng và đỉa vắt gây bệnh hiểm nghèo!" }
    ],
    lesson: "Rèn luyện thể lực từ sớm và đi từng bước bền bỉ: Không có ngọn núi nào không thể vượt qua."
  },
  {
    id: "tm-75",
    level: 75,
    title: "Vận Hành Nhà Máy Điện Hạt Nhân An Toàn",
    category: "mission",
    categoryName: "Sứ Mệnh Đặc Biệt",
    icon: "☢️",
    difficulty: 4,
    description: "Điều khiển phản ứng phân hạch uranium thắp sáng thành phố 10 triệu dân.",
    tasks: [
      { id: "t1", text: "Khởi động hệ thống bơm nước làm mát vòng 1 chảy qua lõi lò phản ứng", icon: "💧", hint: "Nước làm mát phải tuần hoàn liên tục không ngừng một giây nào." },
      { id: "t2", text: "Rút các thanh điều khiển hấp thụ neutron bằng bo lên từ từ", icon: "⬆️", requires: ["t1"], hint: "Rút thanh điều khiển để kích hoạt phản ứng phân hạch dây chuyền sinh nhiệt." },
      { id: "t3", text: "Nhiệt lượng làm sôi nước vòng 2 sinh ra luồng hơi nước áp suất cực cao", icon: "♨️", requires: ["t2"], hint: "Hơi nước siêu nóng mang năng lượng động năng khổng lồ." },
      { id: "t4", text: "Hơi nước phun với tốc độ âm thanh làm quay tuabin máy phát điện", icon: "🌀", requires: ["t3"], hint: "Tuabin quay 3.000 vòng/phút chuyển cơ năng thành điện năng." },
      { id: "t5", text: "Đưa hơi nước qua tháp ngưng tụ làm mát quay trở lại thành nước lỏng tuần hoàn", icon: "🔄", requires: ["t4"], hint: "Hệ thống tuần hoàn khép kín tuyệt đối không rò rỉ phóng xạ." },
      { id: "t6", text: "Hòa lưới điện quốc gia truyền tải hàng tỷ kilowatt giờ điện thắp sáng muôn nhà", icon: "💡", requires: ["t4", "t5"], hint: "Nguồn năng lượng khổng lồ không phát thải khí nhà kính bảo vệ Trái Đất!" }
    ],
    distractors: [
      { id: "d1", text: "Rút thanh điều khiển khi bơm làm mát chưa hoạt động", icon: "💥", failReason: "Lõi lò phản ứng tan chảy vì nhiệt độ vượt 3.000 độ C gây thảm họa nổ!" },
      { id: "d2", text: "Vô hiệu hóa hệ thống làm mát khẩn cấp lõi lò phản ứng", icon: "☢️", failReason: "Mất hệ thống làm mát, nhiệt độ lõi tăng vọt làm nóng chảy lò phản ứng thảm họa!" }
    ],
    lesson: "Bơm làm mát chạy trước tiên — an toàn là tôn chỉ tối thượng của ngành năng lượng."
  },
  {
    id: "tm-76",
    level: 76,
    title: "Khai Quật Bộ Xương Khủng Long T-Rex",
    category: "mission",
    categoryName: "Sứ Mệnh Đặc Biệt",
    icon: "🦖",
    difficulty: 4,
    description: "Cẩn thận bóc tách từng lớp đá trầm tích đưa chúa tể kỷ Jura về bảo tàng.",
    tasks: [
      { id: "t1", text: "Dùng máy quét radar xuyên đất phát hiện hóa thạch nằm sâu dưới lớp đá", icon: "📡", hint: "Xác định chính xác vị trí và tư thế của bộ xương trước khi đào." },
      { id: "t2", text: "Dùng máy xúc bóc lớp đất đá bề mặt dày 2 mét dừng lại cách hóa thạch 30cm", icon: "🚜", requires: ["t1"], hint: "Dừng máy cơ giới lớn để không làm nứt vỡ xương hóa thạch giòn." },
      { id: "t3", text: "Dùng đục nhỏ, búa địa chất và chổi lông cọ tỉ mẩn bóc từng hạt cát", icon: "🖌️", requires: ["t2"], hint: "Công việc kiên nhẫn từng milimet của các nhà cổ sinh vật học." },
      { id: "t4", text: "Quét một lớp keo củng cố polymer làm cứng bề mặt xương hóa thạch", icon: "🧪", requires: ["t3"], hint: "Xương triệu năm tuổi tiếp xúc với không khí rất dễ mủn nát." },
      { id: "t5", text: "Bọc thạch cao và vải bố tạo thành lớp áo giáp bảo vệ từng khúc xương", icon: "🩹", requires: ["t4"], hint: "Đóng kén thạch cao chịu va đập khi vận chuyển đường dài." },
      { id: "t6", text: "Cẩu cẩn thận lên xe tải chuyên dụng đưa về viện bảo tàng phục dựng hoàn chỉnh", icon: "🏛️", requires: ["t5"], hint: "Bộ xương khủng long bạo chúa khổng lồ sừng sững tái hiện trước công chúng!" }
    ],
    distractors: [
      { id: "d1", text: "Dùng búa tạ đập vỡ vụn tảng đá chứa hóa thạch 65 triệu năm", icon: "🔨", failReason: "Đập búa tạ làm nát vụn xương hóa thạch quý hiếm không thể phục dựng!" },
      { id: "d2", text: "Quét sơn dầu màu đỏ lòe loẹt lên bề mặt xương hóa thạch", icon: "🎨", failReason: "Hóa chất sơn làm phá hủy cấu trúc mẫu vật khảo cổ học vô giá!" }
    ],
    lesson: "Từ công cụ lớn chuyển sang chổi lông tỉ mỉ: Sự kiên trì nâng niu di sản triệu năm."
  },
  {
    id: "tm-77",
    level: 77,
    title: "Mạng Lưới Radar Cảnh Báo Sóng Thần",
    category: "mission",
    categoryName: "Sứ Mệnh Đặc Biệt",
    icon: "🌊",
    difficulty: 4,
    description: "Hệ thống cảnh báo sớm giúp hàng triệu người ven biển kịp sơ tán lên núi.",
    tasks: [
      { id: "t1", text: "Thả các phao cảm biến áp suất biển sâu DART neo chặt dưới đáy đại dương", icon: "⚓", hint: "Cảm biến đáy biển phát hiện sự thay đổi áp suất nước cực nhỏ của sóng thần." },
      { id: "t2", text: "Phao nổi trên mặt biển thu tín hiệu từ đáy biển và truyền qua vệ tinh", icon: "🛰️", requires: ["t1"], hint: "Cầu nối vô tuyến truyền dữ liệu với tốc độ ánh sáng." },
      { id: "t3", text: "Trung tâm địa chấn ghi nhận trận động đất 8.5 độ Richter ngoài khơi", icon: "📈", hint: "Máy đo địa chấn phát hiện rung chấn đứt gãy đáy biển." },
      { id: "t4", text: "Siêu máy tính phân tích dữ liệu áp suất phao và mô phỏng hướng sóng thần", icon: "💻", requires: ["t2", "t3"], hint: "Tính toán chính xác: Sóng thần cao 10m sẽ ập vào bờ sau 25 phút!" },
      { id: "t5", text: "Kích hoạt còi báo động toàn thành phố ven biển và gửi tin nhắn khẩn cấp tới mọi điện thoại", icon: "🚨", requires: ["t4"], hint: "Hàng triệu người lập tức di tản lên vùng đất cao an toàn." },
      { id: "t6", text: "Khi đợt sóng thần ập vào bờ, toàn bộ người dân đã an toàn trên đỉnh đồi", icon: "🏔️", requires: ["t5"], hint: "Khoa học công nghệ và sự chuẩn bị kịp thời đã cứu sống hàng triệu sinh mạng!" }
    ],
    distractors: [
      { id: "d1", text: "Tắt nguồn trạm cảm biến địa chấn ngầm dưới đáy đại dương", icon: "🔌", failReason: "Tắt cảm biến khiến hệ thống mù thông tin, không kịp phát báo động di tản!" },
      { id: "d2", text: "Bỏ qua cảnh báo sóng cao 20 mét để tiếp tục tắm biển", icon: "🏊", failReason: "Sóng thần di chuyển với tốc độ máy bay sẽ san phẳng bờ biển trong vài phút!" }
    ],
    lesson: "Cảnh báo sớm từng giây là ranh giới giữa thảm họa và sự sống an toàn."
  },
  {
    id: "tm-78",
    level: 78,
    title: "Xây Dựng Căn Cứ Mặt Trăng Artemis",
    category: "mission",
    categoryName: "Sứ Mệnh Đặc Biệt",
    icon: "🌕",
    difficulty: 4,
    description: "Xây ngôi nhà vĩnh cửu đầu tiên của loài người trên miệng núi lửa Shackleton.",
    tasks: [
      { id: "t1", text: "Tàu tự hành hạ cánh thăm dò mỏ băng nước vĩnh cửu trong bóng tối miệng núi lửa", icon: "🧊", hint: "Nước là nguồn sống tạo dưỡng khí thở và nhiên liệu tên lửa Hydro." },
      { id: "t2", text: "Triển khai trạm phát điện hạt nhân mini cung cấp năng lượng suốt đêm trăng 14 ngày", icon: "⚡", requires: ["t1"], hint: "Đêm Mặt Trăng kéo dài 350 giờ liền, pin mặt trời không thể hoạt động." },
      { id: "t3", text: "Thổi phồng các mô-đun sinh hoạt bơm hơi bằng sợi Kevlar siêu bền", icon: "🎈", requires: ["t2"], hint: "Nhẹ khi vận chuyển nhưng khi bơm căng tạo không gian sống rộng lớn." },
      { id: "t4", text: "Máy in 3D robot gom bụi đá Mặt Trăng in lớp vỏ vòm bảo vệ dày 1 mét bên ngoài", icon: "🧱", requires: ["t3"], hint: "Lớp vỏ đá che chắn bức xạ vũ trụ chết người và thiên thạch tí hon." },
      { id: "t5", text: "Thiết lập hệ thống nhà kính thủy canh tuần hoàn tạo oxy và trồng trọt rau quả", icon: "🌱", requires: ["t2", "t4"], hint: "Tự cung tự cấp thực phẩm tươi ngon cho các nhà du hành." },
      { id: "t6", text: "Đón đoàn phi hành gia đầu tiên bước vào sinh sống và cắm cờ Trái Đất", icon: "👩‍🚀", requires: ["t5"], hint: "Loài người chính thức trở thành giống loài đa hành tinh vươn ra vũ trụ bao la!" }
    ],
    distractors: [
      { id: "d1", text: "Cởi bỏ mũ phi hành gia hít thở không khí tự do trên Mặt Trăng", icon: "🌑", failReason: "Mặt Trăng là môi trường chân không không có oxy, con sẽ ngất xỉu sau 10 giây!" },
      { id: "d2", text: "Đục thủng màng chắn bức xạ mặt trời của khu nhà kính sinh thái", icon: "☀️", failReason: "Bức xạ vũ trụ và bão mặt trời sẽ hủy diệt toàn bộ cây trồng trong nhà kính!" }
    ],
    lesson: "Nước -> Năng lượng -> Vỏ che bức xạ -> Lương thực: 4 trụ cột định cư vũ trụ."
  },
  {
    id: "tm-79",
    level: 79,
    title: "Bay Khinh Khí Cầu Vượt Đại Tây Dương",
    category: "mission",
    categoryName: "Sứ Mệnh Đặc Biệt",
    icon: "🎈",
    difficulty: 4,
    description: "Chuyến bay kỳ tích 5.000 km cưỡi trên dòng gió xoáy Jet Stream tầng bình lưu.",
    tasks: [
      { id: "t1", text: "Bơm 10.000 mét khối khí Heli nhẹ vào quả cầu lụa khổng lồ", icon: "🎈", hint: "Khí Heli trơ an toàn không gây cháy nổ như khí Hydro." },
      { id: "t2", text: "Kiểm tra khoang lái điều áp có sưởi ấm và dự trữ oxy nén", icon: "🛩️", requires: ["t1"], hint: "Ở độ cao 11.000 mét không khí loãng và nhiệt độ âm 55 độ C." },
      { id: "t3", text: "Cắt dây neo cất cánh và dùng vòi đốt khí gas bay thẳng lên tầng bình lưu", icon: "🔥", requires: ["t2"], hint: "Vượt qua tầng mây giông bão để vào tầng không khí êm ả." },
      { id: "t4", text: "Bắt đúng dòng gió xiết Jet Stream thổi từ Tây sang Đông với tốc độ 200 km/h", icon: "🌬️", requires: ["t3"], hint: "Cưỡi trên dòng sông gió tự nhiên di chuyển với tốc độ máy bay phản lực!" },
      { id: "t5", text: "Điều chỉnh độ cao bằng van xả khí Heli và thả bao cát dằn tải", icon: "⚖️", requires: ["t4"], hint: "Xả bớt khí để hạ độ cao, thả bớt cát để bay vọt lên đón luồng gió thuận." },
      { id: "t6", text: "Hạ cánh an toàn xuống đồng cỏ nước Pháp sau 48 giờ bay không ngừng nghỉ", icon: "🇫🇷", requires: ["t5"], hint: "Kỷ lục thế giới thám hiểm khí quyển được thiết lập vang dội!" }
    ],
    distractors: [
      { id: "d1", text: "Cắt đứt toàn bộ túi cát dằn trọng tải khi đang bay trong bão", icon: "🎈", failReason: "Khinh khí cầu vọt lên quá cao vào tầng không khí loãng làm nổ tung quả cầu khí!" },
      { id: "d2", text: "Bật quẹt lửa châm gần van xả khí heli và hydro", icon: "🔥", failReason: "Tia lửa bén vào luồng khí dễ gây nổ lớn thiêu rụi toàn bộ giỏ bay trên không!" }
    ],
    lesson: "Lợi dụng sức mạnh vĩ đại của tự nhiên (dòng gió Jet Stream) để đi xa vạn dặm."
  },
  {
    id: "tm-80",
    level: 80,
    title: "Kế Hoạch Đại Chiến Lược Gia Toàn Diện",
    category: "mission",
    categoryName: "Sứ Mệnh Đặc Biệt",
    icon: "👑",
    difficulty: 4,
    description: "Bài toán tổng hợp đỉnh cao: Lập kế hoạch 6 bước chiến lược để Bách trở thành học sinh xuất sắc toàn diện.",
    tasks: [
      { id: "t1", text: "Tự soi xét bản thân: nhận diện rõ điểm mạnh và điểm cần cải thiện (không làm qua loa)", icon: "🪞", hint: "Biết mình biết người: Dũng cảm nhìn thẳng vào thói quen làm ẩu để quyết tâm thay đổi." },
      { id: "t2", text: "Xây dựng mục tiêu rõ ràng SMART và bản kế hoạch hành động từng ngày", icon: "🎯", requires: ["t1"], hint: "Mục tiêu cụ thể: 25 phút tập trung cao độ mỗi ngày, không bị xao nhãng." },
      { id: "t3", text: "Thiết lập thói quen: 'Dừng lại 15 giây suy nghĩ trước khi bắt tay vào làm'", icon: "🧠", requires: ["t2"], hint: "Thần chú thành công: Không bao giờ bấm bừa, luôn nhìn thấy bước kết thúc trước khi đi bước 1." },
      { id: "t4", text: "Rèn luyện kiên trì qua các bài toán tư duy, cuốn sách văn học và trò chơi logic", icon: "📚", requires: ["t3"], hint: "Mỗi ngày giải 1 bài khó, tập trung cao độ vượt qua thử thách." },
      { id: "t5", text: "Chữa sâu từng lỗi sai: ghi vào sổ tay bí kíp để không bao giờ mắc lại lần 2", icon: "📓", requires: ["t4"], hint: "Người thông minh học từ sai lầm của chính mình và biến nó thành bậc thang đi lên." },
      { id: "t6", text: "Tự tin bước vào năm học lớp 4 với tư duy chiến lược gia nhí xuất sắc toàn diện!", icon: "👑", requires: ["t5"], hint: "Bách đã làm chủ năng lực suy nghĩ trước khi hành động — trở thành phiên bản vượt trội nhất!" }
    ],
    distractors: [
      { id: "d1", text: "Làm qua loa đối phó cho xong việc để đi chơi điện tử", icon: "🎮", failReason: "Làm qua loa sẽ làm con mãi dậm chân tại chỗ và đánh mất tương lai tươi sáng!" },
      { id: "d2", text: "Hành động theo cảm tính bộc phát không cần tính toán bước tiếp theo", icon: "🌪️", failReason: "Chỉ huy bốc đồng không có chiến lược sẽ đẩy toàn bộ đội hình vào thảm bại!" }
    ],
    lesson: "Chiến lược gia xuất sắc: Luôn dừng lại suy nghĩ thấu đáo trước khi hành động!"
  }
];
