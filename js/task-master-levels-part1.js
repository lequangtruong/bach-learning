// js/task-master-levels-part1.js - Ngân hàng 40 Màn chơi Part 1: Sinh Hoạt Tự Lập & Đầu Bếp Nhí

export const TASK_MASTER_LEVELS_PART1 = [
  // ==========================================
  // CHẶNG 1: SINH HOẠT & TỰ LẬP (MÀN 1 -> 20)
  // ==========================================
  {
    id: "tm-1",
    level: 1,
    title: "Buổi Sáng Tự Lập Đi Học",
    category: "routine",
    categoryName: "Sinh Hoạt & Tự Lập",
    icon: "🎒",
    difficulty: 1,
    description: "Thực hiện chuỗi việc buổi sáng nhanh gọn, đúng trình tự để không bị trễ giờ học.",
    tasks: [
      { id: "t1", text: "Thức dậy & gấp chăn gối gọn gàng", icon: "🛏️", hint: "Việc đầu tiên ngay khi thức dậy." },
      { id: "t2", text: "Đánh răng & rửa mặt sạch sẽ", icon: "🪥", requires: ["t1"], hint: "Rời khỏi giường rồi vào nhà vệ sinh." },
      { id: "t3", text: "Mặc đồng phục & đeo khăn quàng đỏ", icon: "👕", requires: ["t2"], hint: "Người tỉnh táo sạch sẽ mới thay đồ đi học." },
      { id: "t4", text: "Đi giày & khoác ba lô đi học", icon: "👟", requires: ["t3"], hint: "Bước cuối cùng khi đã mặc trang phục chỉnh tề." }
    ],
    distractors: [
      { id: "d1", text: "Bật TV xem hoạt hình 30 phút", icon: "📺", failReason: "Xem TV buổi sáng sẽ làm con bị muộn học ngay lập tức!" }
    ],
    lesson: "Lập kế hoạch trước giúp buổi sáng không bị cuống cuồng tìm đồ đạc."
  },
  {
    id: "tm-2",
    level: 2,
    title: "Rửa Tay 6 Bước Diệt Khuẩn",
    category: "routine",
    categoryName: "Sinh Hoạt & Tự Lập",
    icon: "🧼",
    difficulty: 1,
    description: "Quy trình rửa tay chuẩn khoa học của Bộ Y tế để bảo vệ sức khỏe.",
    tasks: [
      { id: "t1", text: "Làm ướt hai bàn tay dưới vòi nước", icon: "🚰", hint: "Cần làm ướt tay trước khi lấy xà phòng." },
      { id: "t2", text: "Lấy xà phòng & xoa đều tạo bọt", icon: "🫧", requires: ["t1"], hint: "Xà phòng cần nước để tạo bọt diệt khuẩn." },
      { id: "t3", text: "Chà sạch kẽ ngón, mu bàn tay & đầu ngón tay", icon: "🖐️", requires: ["t2"], hint: "Xoa kỹ bọt xà phòng khắp bàn tay ít nhất 20 giây." },
      { id: "t4", text: "Xả sạch toàn bộ bọt dưới vòi nước chảy", icon: "🚿", requires: ["t3"], hint: "Rửa trôi hết vi khuẩn và bọt xà phòng." },
      { id: "t5", text: "Lau khô tay bằng khăn sạch hoặc khăn giấy", icon: "🧖", requires: ["t4"], hint: "Lau khô để tay không bị ẩm ướt." }
    ],
    lesson: "Làm đúng từng bước giúp tiêu diệt 99% vi khuẩn gây bệnh đường ruột."
  },
  {
    id: "tm-3",
    level: 3,
    title: "Pha Một Ly Sữa Ngũ Cốc Ấm",
    category: "routine",
    categoryName: "Sinh Hoạt & Tự Lập",
    icon: "🥛",
    difficulty: 1,
    description: "Tự pha một bữa sáng thơm ngon, giàu năng lượng cho ngày học tập hứng khởi.",
    tasks: [
      { id: "t1", text: "Lấy cốc sạch & thìa từ giá bát", icon: "🥛", hint: "Cần có cốc trước khi cho đồ uống vào." },
      { id: "t2", text: "Múc 3 muỗng bột ngũ cốc vào cốc", icon: "🥣", requires: ["t1"], hint: "Cho ngũ cốc vào đáy cốc trước." },
      { id: "t3", text: "Rót nước ấm khoảng 50 độ C vào cốc", icon: "🫖", requires: ["t2"], hint: "Nước ấm giúp ngũ cốc tan đều không vón cục." },
      { id: "t4", text: "Dùng thìa khuấy đều cho tan mịn", icon: "🥄", requires: ["t3"], hint: "Khuấy tan bột rồi mới thưởng thức." },
      { id: "t5", text: "Rót thêm sữa tươi vào thưởng thức", icon: "🍶", requires: ["t4"], hint: "Thêm sữa tươi giúp ly ngũ cốc thơm béo tuyệt vời." }
    ],
    distractors: [
      { id: "d1", text: "Đổ nước sôi sùng sục 100 độ C", icon: "🔥", failReason: "Nước sôi 100 độ C sẽ làm hỏng dưỡng chất và gây bỏng lưỡi!" }
    ],
    lesson: "Tuần tự chuẩn bị nguyên liệu rồi đến dung môi giúp bột tan hoàn toàn."
  },
  {
    id: "tm-4",
    level: 4,
    title: "Soạn Sách Vở Theo Thời Khóa Biểu",
    category: "routine",
    categoryName: "Sinh Hoạt & Tự Lập",
    icon: "📚",
    difficulty: 1,
    description: "Soạn cặp sách buổi tối để sáng mai đến lớp không bị quên vở bài tập.",
    tasks: [
      { id: "t1", text: "Mở thời khóa biểu ngày mai ra xem", icon: "🗓️", hint: "Phải biết ngày mai học môn gì trước khi lấy sách." },
      { id: "t2", text: "Kiểm tra vở bài tập đã làm xong hết chưa", icon: "✍️", requires: ["t1"], hint: "Chắc chắn bài tập đã hoàn thành trước khi cất." },
      { id: "t3", text: "Xếp sách giáo khoa và vở theo từng môn", icon: "📖", requires: ["t2"], hint: "Ghép sách và vở của cùng một môn đi chung với nhau." },
      { id: "t4", text: "Kiểm tra hộp bút: đủ bút mực, bút chì, tẩy, thước", icon: "✏️", requires: ["t1"], hint: "Đồ dùng học tập luôn cần chuẩn bị sẵn sàng." },
      { id: "t5", text: "Đóng khóa ba lô & để ngay ngắn ở góc bàn", icon: "🎒", requires: ["t3", "t4"], hint: "Xong xuôi thì kéo khóa và đặt ở vị trí dễ lấy." }
    ],
    lesson: "Xem thời khóa biểu trước giúp cặp sách nhẹ nhàng, không mang thừa sách."
  },
  {
    id: "tm-5",
    level: 5,
    title: "Gấp Áo Đồng Phục Phẳng Phiu",
    category: "routine",
    categoryName: "Sinh Hoạt & Tự Lập",
    icon: "👕",
    difficulty: 1,
    description: "Tự gấp áo đồng phục ngay ngắn để cất vào ngăn tủ mà không bị nhăn.",
    tasks: [
      { id: "t1", text: "Trải phẳng chiếc áo lên mặt bàn phẳng", icon: "🛏️", hint: "Mặt phẳng giúp gấp các nếp áo thẳng thớm." },
      { id: "t2", text: "Vuốt thẳng hai tay áo và thân áo", icon: "🖐️", requires: ["t1"], hint: "Làm phẳng nếp nhăn trước khi gập." },
      { id: "t3", text: "Gập cạnh bên trái và tay áo trái vào trong", icon: "👈", requires: ["t2"], hint: "Gập 1/3 thân áo phía bên trái vào giữa." },
      { id: "t4", text: "Gập cạnh bên phải và tay áo phải vào trong", icon: "👉", requires: ["t3"], hint: "Gập tiếp 1/3 thân áo phía bên phải cho cân xứng." },
      { id: "t5", text: "Gập gấu áo từ dưới lên mép cổ áo", icon: "⬆️", requires: ["t4"], hint: "Gấp đôi chiều dài lại thành hình chữ nhật gọn gàng." }
    ],
    lesson: "Gấp quần áo có trình tự đối xứng giúp tủ đồ luôn ngăn nắp như khách sạn."
  },
  {
    id: "tm-6",
    level: 6,
    title: "Trồng Chậu Cây Hướng Dương",
    category: "routine",
    categoryName: "Sinh Hoạt & Tự Lập",
    icon: "🌻",
    difficulty: 2,
    description: "Từng bước gieo hạt giống và chăm sóc để mầm hướng dương đâm chồi xanh tốt.",
    tasks: [
      { id: "t1", text: "Chuẩn bị chậu có lỗ thoát nước ở đáy", icon: "🪴", hint: "Chậu cần thoát nước để rễ cây không bị úng." },
      { id: "t2", text: "Cho đất mùn tơi xốp vào 2/3 chậu", icon: "🌱", requires: ["t1"], hint: "Đất là nền móng giữ dinh dưỡng cho rễ." },
      { id: "t3", text: "Gieo 2 hạt giống hướng dương sâu khoảng 2 cm", icon: "🫘", requires: ["t2"], hint: "Đất đã sẵn sàng thì mới đặt hạt giống vào." },
      { id: "t4", text: "Phủ một lớp đất mỏng nhẹ lên trên hạt", icon: "🍂", requires: ["t3"], hint: "Che chở cho hạt khỏi ánh nắng gắt và côn trùng." },
      { id: "t5", text: "Dùng bình xịt tưới ẩm đều mặt đất", icon: "🚿", requires: ["t4"], hint: "Cung cấp độ ẩm để hạt giống nảy mầm." },
      { id: "t6", text: "Đặt chậu cây ở nơi có ánh sáng mặt trời nhẹ", icon: "☀️", requires: ["t5"], hint: "Ánh sáng giúp mầm cây quang hợp phát triển." }
    ],
    distractors: [
      { id: "d1", text: "Tưới ngập chậu bằng nước ấm sôi", icon: "♨️", failReason: "Nước sôi sẽ làm chín luộc hạt giống, cây không thể mọc được!" }
    ],
    lesson: "Mầm sống cần đất, nước, ánh sáng đúng thứ tự để vươn mình khỏe khoắn."
  },
  {
    id: "tm-7",
    level: 7,
    title: "Dọn Bàn Học Gọn Gàng Đón Bạn",
    category: "routine",
    categoryName: "Sinh Hoạt & Tự Lập",
    icon: "🪑",
    difficulty: 2,
    description: "Biến chiếc bàn học lộn xộn thành không gian học tập truyền cảm hứng.",
    tasks: [
      { id: "t1", text: "Thu gom rác, giấy vụn bỏ vào thùng rác", icon: "🗑️", hint: "Dọn dẹp rác trước để lấy chỗ thao tác." },
      { id: "t2", text: "Phân loại sách giáo khoa, vở và tài liệu riêng", icon: "📚", requires: ["t1"], hint: "Phân loại giúp xếp lên giá dễ tìm." },
      { id: "t3", text: "Xếp sách vở ngay ngắn lên giá sách theo chiều cao", icon: "🪜", requires: ["t2"], hint: "Đưa sách lên giá để mặt bàn thông thoáng." },
      { id: "t4", text: "Cắm toàn bộ bút thước vào ống cắm bút", icon: "✏️", requires: ["t1"], hint: "Thu gom các vật nhỏ tránh lăn lung tung." },
      { id: "t5", text: "Dùng khăn ẩm lau sạch bụi trên mặt bàn", icon: "🧽", requires: ["t3", "t4"], hint: "Mặt bàn đã trống trải thì mới lau sạch bụi." },
      { id: "t6", text: "Đặt đèn bàn và hộp bút vào góc gọn gàng", icon: "💡", requires: ["t5"], hint: "Bàn sạch bóng thì đặt đèn học về vị trí chuẩn." }
    ],
    lesson: "Dọn từ rác lớn đến lau bụi mịn: bàn học sạch giúp tập trung gấp đôi."
  },
  {
    id: "tm-8",
    level: 8,
    title: "Rửa Bát Đĩa Giúp Mẹ Sau Bữa Ăn",
    category: "routine",
    categoryName: "Sinh Hoạt & Tự Lập",
    icon: "🥣",
    difficulty: 2,
    description: "Học cách rửa bát đĩa sạch bong kin kít mà không tốn nước.",
    tasks: [
      { id: "t1", text: "Gạt sạch thức ăn thừa trên đĩa vào thùng rác", icon: "🗑️", hint: "Tránh thức ăn làm tắc cống bồn rửa bát." },
      { id: "t2", text: "Xếp bát đĩa vào bồn rửa theo kích thước", icon: "🍽️", requires: ["t1"], hint: "Xếp đồ lớn ở dưới, đồ nhỏ ở trên." },
      { id: "t3", text: "Nhỏ nước rửa bát vào miếng bọt biển tạo bọt", icon: "🧽", hint: "Tạo bọt để tẩy sạch dầu mỡ hiệu quả." },
      { id: "t4", text: "Cọ rửa bát đĩa ít dầu mỡ trước, nhiều dầu mỡ sau", icon: "🫧", requires: ["t2", "t3"], hint: "Rửa cốc chén và bát cơm trước đĩa xào rán." },
      { id: "t5", text: "Tráng lại 2 lần dưới vòi nước sạch kin kít", icon: "🚰", requires: ["t4"], hint: "Xả sạch hết bọt xà phòng bám trên bát." },
      { id: "t6", text: "Úp bát đĩa lên giá thoáng cho ráo nước", icon: "🪜", requires: ["t5"], hint: "Úp nghiêng để bát đĩa khô ráo tự nhiên." }
    ],
    lesson: "Rửa từ đồ ít dầu đến nhiều dầu mỡ giúp miếng bọt biển không bị nhớt."
  },
  {
    id: "tm-9",
    level: 9,
    title: "Đóng Gói Ba Lô Đi Dã Ngoại",
    category: "routine",
    categoryName: "Sinh Hoạt & Tự Lập",
    icon: "⛺",
    difficulty: 2,
    description: "Sắp xếp hành lý thông minh theo nguyên tắc trọng tâm để đeo êm vai.",
    tasks: [
      { id: "t1", text: "Lập danh sách các đồ dùng cần mang theo", icon: "📝", hint: "Lên danh sách trước để không bỏ sót đồ quan trọng." },
      { id: "t2", text: "Gom tất cả đồ vật lên giường để kiểm tra đối chiếu", icon: "🔍", requires: ["t1"], hint: "Kiểm tra xem đã đủ mọi thứ trong danh sách chưa." },
      { id: "t3", text: "Xếp đồ nặng và đồ ít dùng (áo mưa, bạt) xuống đáy ba lô", icon: "📦", requires: ["t2"], hint: "Đồ nặng ở đáy giúp trọng tâm ba lô vững vàng." },
      { id: "t4", text: "Xếp đồ nhẹ hơn (quần áo thay, đồ ăn nhẹ) ở giữa", icon: "🥪", requires: ["t3"], hint: "Lớp giữa bảo vệ đồ ăn không bị dập nát." },
      { id: "t5", text: "Để bình nước và khăn ướt ở hai túi lưới bên hông", icon: "🥤", requires: ["t2"], hint: "Để chỗ dễ rút ra lấy ngay khi đi bộ khát nước." },
      { id: "t6", text: "Để hộp cứu thương và mũ nón ở ngăn trên cùng", icon: "🩹", requires: ["t4"], hint: "Ngăn trên cùng để lấy đồ khẩn cấp trong 3 giây." }
    ],
    lesson: "Nguyên tắc ba lô: Nặng ở dưới, nhẹ ở trên, khẩn cấp ở ngăn ngoài."
  },
  {
    id: "tm-10",
    level: 10,
    title: "Giặt Và Phơi Giày Thể Thao",
    category: "routine",
    categoryName: "Sinh Hoạt & Tự Lập",
    icon: "👟",
    difficulty: 2,
    description: "Tự tay làm sạch đôi giày đá bóng lấm lem bùn đất sau trận đấu.",
    tasks: [
      { id: "t1", text: "Tháo dây giày và miếng lót giày ra riêng", icon: "🪢", hint: "Tách rời các bộ phận để cọ rửa mọi ngóc ngách." },
      { id: "t2", text: "Gõ nhẹ giày xuống đất cho rơi bớt bùn đất khô", icon: "👞", requires: ["t1"], hint: "Bỏ bùn khô trước khi cho vào nước để tránh bùn nhão." },
      { id: "t3", text: "Ngâm dây giày và lót giày vào chậu nước xà phòng", icon: "🧼", requires: ["t1"], hint: "Ngâm giúp vết bẩn mềm ra dễ giặt." },
      { id: "t4", text: "Dùng bàn chải mềm cọ sạch đế và thân giày", icon: "🪥", requires: ["t2"], hint: "Cọ kỹ vết ố bẩn từng đường chỉ." },
      { id: "t5", text: "Xả giày thật sạch với nước cho hết xà phòng", icon: "🚿", requires: ["t4"], hint: "Xà phòng còn sót lại sẽ làm giày bị ố vàng." },
      { id: "t6", text: "Nhét giấy báo vào mũi giày & phơi nơi thoáng gió", icon: "🌬️", requires: ["t5"], hint: "Giấy báo hút ẩm và giữ form giày không bị bẹp." }
    ],
    distractors: [
      { id: "d1", text: "Phơi giày trực tiếp dưới nắng hè gay gắt 40 độ", icon: "☀️", failReason: "Nắng gắt sẽ làm co quắp cao su và nứt hỏng da giày!" }
    ],
    lesson: "Nhét giấy báo hút ẩm giúp giày khô nhanh gấp 2 lần và giữ nguyên dáng."
  },
  {
    id: "tm-11",
    level: 11,
    title: "Tắm Rửa Thư Giãn Trước Giờ Ngủ",
    category: "routine",
    categoryName: "Sinh Hoạt & Tự Lập",
    icon: "🛁",
    difficulty: 2,
    description: "Chuẩn bị chu đáo để có một giấc ngủ sâu tái tạo năng lượng.",
    tasks: [
      { id: "t1", text: "Chuẩn bị sẵn quần áo ngủ sạch và khăn tắm khô", icon: "🩳", hint: "Chuẩn bị đồ khô trước khi vào phòng tắm." },
      { id: "t2", text: "Bật bình nóng lạnh trước 15 phút rồi tắt át-tô-mát", icon: "⚡", hint: "Tắt át-tô-mát trước khi tắm để tuyệt đối an toàn điện." },
      { id: "t3", text: "Thử nhiệt độ nước ấm bằng mu bàn tay", icon: "🌡️", requires: ["t2"], hint: "Kiểm tra nhiệt độ tránh bị bỏng da." },
      { id: "t4", text: "Tắm gội sạch sẽ bằng sữa tắm và xà phòng", icon: "🚿", requires: ["t3"], hint: "Tắm gội sạch bụi bẩn suốt cả ngày dài." },
      { id: "t5", text: "Lau khô toàn thân và mặc quần áo ngủ ấm áp", icon: "🧖", requires: ["t1", "t4"], hint: "Lau thật khô người rồi mới mặc đồ." },
      { id: "t6", text: "Sấy khô tóc hoàn toàn trước khi đi ngủ", icon: "💨", requires: ["t5"], hint: "Để tóc ướt đi ngủ dễ bị cảm lạnh và đau đầu." }
    ],
    lesson: "Luôn tắt bình nóng lạnh trước khi tắm là bài học an toàn số 1."
  },
  {
    id: "tm-12",
    level: 12,
    title: "Sơ Cứu Vết Xước Tay Khi Vấp Ngã",
    category: "routine",
    categoryName: "Sinh Hoạt & Tự Lập",
    icon: "🩹",
    difficulty: 2,
    description: "Kỹ năng sơ cứu vết thương trầy xước đúng cách tránh nhiễm trùng.",
    tasks: [
      { id: "t1", text: "Rửa sạch tay của người sơ cứu bằng xà phòng", icon: "🧼", hint: "Tay sạch thì mới chạm vào vết thương của người khác." },
      { id: "t2", text: "Rửa nhẹ vết thương dưới vòi nước sạch chảy nhẹ", icon: "🚰", requires: ["t1"], hint: "Rửa trôi hết đất cát bám quanh miệng vết thương." },
      { id: "t3", text: "Dùng gạc y tế sạch thấm khô nhẹ nhàng quanh vết thương", icon: "🧻", requires: ["t2"], hint: "Thấm khô chứ không chà xát mạnh gây đau rát." },
      { id: "t4", text: "Sát khuẩn bằng dung dịch nước muối sinh lý hoặc Povidine", icon: "🧪", requires: ["t3"], hint: "Diệt sạch vi trùng bám trong miệng vết rách." },
      { id: "t5", text: "Dán băng gạc cá nhân bảo vệ vết thương khỏi bụi bẩn", icon: "🩹", requires: ["t4"], hint: "Bảo vệ miệng vết thương để da nhanh lành." }
    ],
    distractors: [
      { id: "d1", text: "Rắc thuốc lào hoặc tro bếp lên vết thương", icon: "🚬", failReason: "Tro bếp chứa hàng triệu vi khuẩn uốn ván cực kỳ nguy hiểm!" }
    ],
    lesson: "Nước sạch và sát khuẩn chuẩn y tế là chìa khóa giúp vết thương mau lành."
  },
  {
    id: "tm-13",
    level: 13,
    title: "Pha Nước Chanh Gừng Mật Ong Giải Cảm",
    category: "routine",
    categoryName: "Sinh Hoạt & Tự Lập",
    icon: "🍋",
    difficulty: 2,
    description: "Một ly nước ấm thơm lừng giúp ấm bụng và làm dịu cơn ho rát họng.",
    tasks: [
      { id: "t1", text: "Rửa sạch củ gừng và quả chanh tươi", icon: "🚰", hint: "Rửa sạch bụi bẩn ngoài vỏ trước khi chế biến." },
      { id: "t2", text: "Cắt gừng thành 3 lát mỏng và đập dập nhẹ", icon: "🔪", requires: ["t1"], hint: "Đập dập giúp tinh dầu gừng tiết ra nhanh." },
      { id: "t3", text: "Cho gừng vào cốc và rót 150ml nước sôi để hãm 5 phút", icon: "🫖", requires: ["t2"], hint: "Nước sôi chiết xuất vị cay ấm của gừng." },
      { id: "t4", text: "Chờ nước ấm bớt khoảng 50 độ C rồi thêm 2 thìa mật ong", icon: "🍯", requires: ["t3"], hint: "Mật ong cho vào nước quá sôi sẽ mất vitamin." },
      { id: "t5", text: "Vắt nửa quả chanh và khuấy đều thưởng thức", icon: "🍋", requires: ["t4"], hint: "Chanh cho vào sau cùng để giữ nguyên vitamin C." }
    ],
    lesson: "Mật ong và chanh chỉ cho vào khi nước đã ấm để giữ trọn vẹn dưỡng chất."
  },
  {
    id: "tm-14",
    level: 14,
    title: "Vệ Sinh Lồng Quạt Điện Đón Hè",
    category: "routine",
    categoryName: "Sinh Hoạt & Tự Lập",
    icon: "🪭",
    difficulty: 2,
    description: "Làm sạch cánh quạt bám bụi để luồng gió thổi ra trong lành mát mẻ.",
    tasks: [
      { id: "t1", text: "Rút phích cắm điện của quạt ra khỏi ổ cắm tường", icon: "🔌", hint: "Bước an toàn số 1 trước khi động vào bất kỳ thiết bị điện nào!" },
      { id: "t2", text: "Tháo lồng quạt phía trước và núm vặn cánh quạt", icon: "⚙️", requires: ["t1"], hint: "Tháo các chốt bảo vệ để lấy cánh quạt ra." },
      { id: "t3", text: "Rút cánh quạt và tháo tiếp lồng quạt phía sau", icon: "🌀", requires: ["t2"], hint: "Tách rời các bộ phận bám bụi." },
      { id: "t4", text: "Mang lồng quạt và cánh quạt rửa sạch bằng nước xà phòng", icon: "🧽", requires: ["t3"], hint: "Rửa sạch lớp bụi đen bám lâu ngày." },
      { id: "t5", text: "Lau thật khô ráo toàn bộ cánh và lồng quạt", icon: "🧖", requires: ["t4"], hint: "Phải khô 100% trước khi lắp vào động cơ điện." },
      { id: "t6", text: "Lắp ráp lại đúng thứ tự, siết ốc chặt rồi cắm điện chạy thử", icon: "🔧", requires: ["t5"], hint: "Lắp đúng khớp và kiểm tra quạt quay êm ái." }
    ],
    lesson: "Rút phích điện trước tiên — an toàn lao động là trên hết!"
  },
  {
    id: "tm-15",
    level: 15,
    title: "Tưới Nước Vườn Rau Sân Thượng",
    category: "routine",
    categoryName: "Sinh Hoạt & Tự Lập",
    icon: "🥬",
    difficulty: 2,
    description: "Chăm sóc luống rau xanh mướt vào đúng thời điểm mát mẻ trong ngày.",
    tasks: [
      { id: "t1", text: "Chọn thời điểm thích hợp: sáng sớm hoặc chiều mát", icon: "🌅", hint: "Không bao giờ tưới cây lúc trưa nắng gắt làm cháy lá." },
      { id: "t2", text: "Quan sát độ ẩm của đất trong từng thùng xốp", icon: "👀", requires: ["t1"], hint: "Thùng nào đất còn ẩm nhiều thì tưới ít, đất khô thì tưới đẫm." },
      { id: "t3", text: "Nhổ cỏ dại và bắt sâu bọ trên luống rau", icon: "🐛", requires: ["t2"], hint: "Nhổ cỏ trước để cỏ không tranh nước và phân của rau." },
      { id: "t4", text: "Lấy nước vào bình xịt có vòi hoa sen tưới mịn", icon: "🚿", requires: ["t1"], hint: "Tia nước mịn giúp đất không bị xói lở rễ." },
      { id: "t5", text: "Tưới đều quanh gốc rau từ từ cho nước ngấm sâu", icon: "🌱", requires: ["t3", "t4"], hint: "Tưới vào gốc chứ không xịt mạnh làm dập lá non." }
    ],
    distractors: [
      { id: "d1", text: "Tưới nước lúc 12h trưa nắng gắt 39 độ C", icon: "☀️", failReason: "Nắng trưa làm nước bốc hơi nóng làm luộc chín rễ rau!" }
    ],
    lesson: "Nhổ cỏ trước, tưới sau — cây rau hấp thụ trọn vẹn từng giọt nước mát."
  },
  {
    id: "tm-16",
    level: 16,
    title: "Chăm Sóc & Cho Chú Mèo Cưng Ăn",
    category: "routine",
    categoryName: "Sinh Hoạt & Tự Lập",
    icon: "🐱",
    difficulty: 2,
    description: "Trách nhiệm của một chủ nhân nhí biết yêu thương động vật.",
    tasks: [
      { id: "t1", text: "Dọn sạch khay cát vệ sinh của mèo bằng xẻng lọc", icon: "🧹", hint: "Khu vệ sinh sạch sẽ thì mèo mới cảm thấy thoải mái." },
      { id: "t2", text: "Rửa sạch bát ăn và bát nước cũ của mèo", icon: "🥣", requires: ["t1"], hint: "Bát ăn cũ bám vi khuẩn cần rửa sạch mỗi ngày." },
      { id: "t3", text: "Rót nước lọc sạch vào đầy bát nước", icon: "💧", requires: ["t2"], hint: "Mèo luôn cần nước lọc tươi mới để bảo vệ thận." },
      { id: "t4", text: "Đong đúng khẩu phần hạt thức ăn vào bát", icon: "🥩", requires: ["t2"], hint: "Cho ăn đúng định lượng, không cho ăn quá no." },
      { id: "t5", text: "Gọi bé mèo lại và nhẹ nhàng vuốt ve khen ngợi", icon: "🐾", requires: ["t3", "t4"], hint: "Gắn kết tình cảm và quan sát mèo ăn ngon miệng." }
    ],
    lesson: "Vệ sinh khay trước, đồ ăn sau: môi trường sạch tạo nên thú cưng khỏe mạnh."
  },
  {
    id: "tm-17",
    level: 17,
    title: "Chuẩn Bị Bàn Học Cho Kỳ Thi Học Kỳ",
    category: "routine",
    categoryName: "Sinh Hoạt & Tự Lập",
    icon: "🎯",
    difficulty: 3,
    description: "Thiết lập một góc ôn tập chuẩn phong cách học sinh xuất sắc.",
    tasks: [
      { id: "t1", text: "Cất hết đồ chơi, điện thoại và thiết bị gây xao nhãng ra xa", icon: "📵", hint: "Loại bỏ hoàn toàn cám dỗ để tập trung 100% năng lượng." },
      { id: "t2", text: "In đề cương ôn tập môn Toán và Tiếng Việt", icon: "📑", requires: ["t1"], hint: "Đề cương là bản đồ định hướng nội dung ôn thi." },
      { id: "t3", text: "Chuẩn bị sổ tay ghi chép công thức và giấy nháp trắng", icon: "📓", requires: ["t2"], hint: "Sẵn sàng nháp các phép tính và bài văn mẫu." },
      { id: "t4", text: "Gọt sẵn 2 bút chì, kiểm tra bút mực và thước kẻ", icon: "✏️", requires: ["t1"], hint: "Dụng cụ chuẩn bị sẵn sàng, không mất công tìm khi đang làm bài." },
      { id: "t5", text: "Đặt một chai nước lọc và đồng hồ bấm giờ lên bàn", icon: "⏱️", requires: ["t1"], hint: "Nước uống tiếp nước cho não, đồng hồ đo nhịp làm bài 25 phút." },
      { id: "t6", text: "Ngồi ngay ngắn, bật đèn học đủ sáng và bắt đầu phiên học", icon: "💡", requires: ["t3", "t4", "t5"], hint: "Tư thế ngồi chuẩn lưng thẳng, ánh sáng bảo vệ mắt." }
    ],
    lesson: "Môi trường học tập không xao nhãng giúp ghi nhớ kiến thức sâu gấp 3 lần."
  },
  {
    id: "tm-18",
    level: 18,
    title: "Vệ Sinh & Bảo Dưỡng Bàn Phím Máy Tính",
    category: "routine",
    categoryName: "Sinh Hoạt & Tự Lập",
    icon: "⌨️",
    difficulty: 3,
    description: "Làm sạch bụi bẩn và mồ hôi trên bàn phím phục vụ học tập online.",
    tasks: [
      { id: "t1", text: "Tắt máy tính hoặc rút dây cắm bàn phím ra khỏi cổng USB", icon: "🔌", hint: "Ngắt điện để không bấm nhầm phím lung tung khi lau." },
      { id: "t2", text: "Dốc ngược bàn phím gõ nhẹ để bụi và mảnh vụn rơi ra", icon: "🔄", requires: ["t1"], hint: "Loại bỏ các mẩu vụn kẹt sâu dưới chân phím." },
      { id: "t3", text: "Dùng chổi quét bụi nhỏ quét sạch các khe rãnh phím", icon: "🖌️", requires: ["t2"], hint: "Chổi len lỏi quét sạch bụi bám quanh các phím." },
      { id: "t4", text: "Dùng bình xịt khí nén thổi sạch bụi mịn còn sót lại", icon: "💨", requires: ["t3"], hint: "Khí nén đẩy nốt bụi cứng đầu bay ra ngoài." },
      { id: "t5", text: "Thấm cồn y tế vào khăn sợi mịn vắt thật khô rồi lau bề mặt", icon: "🧽", requires: ["t4"], hint: "Khăn chỉ ẩm nhẹ, tuyệt đối không để nhỏ giọt cồn vào mạch." },
      { id: "t6", text: "Chờ cồn bay hơi khô hoàn toàn rồi mới cắm lại máy tính", icon: "✨", requires: ["t5"], hint: "Bảo đảm bàn phím khô ráo 100% trước khi cấp điện." }
    ],
    distractors: [
      { id: "d1", text: "Đổ nước rửa chén trực tiếp lên mặt bàn phím", icon: "🌊", failReason: "Nước chảy vào bo mạch sẽ làm chập cháy bàn phím vĩnh viễn!" }
    ],
    lesson: "Thiết bị điện tử kỵ nước — luôn ngắt điện và dùng khăn ẩm vắt khô."
  },
  {
    id: "tm-19",
    level: 19,
    title: "Chuẩn Bị Tủ Thuốc Gia Đình",
    category: "routine",
    categoryName: "Sinh Hoạt & Tự Lập",
    icon: "💊",
    difficulty: 3,
    description: "Sắp xếp tủ thuốc an toàn, khoa học để tìm đồ cứu hộ trong tích tắc.",
    tasks: [
      { id: "t1", text: "Lấy tất cả thuốc và dụng cụ trong tủ ra kiểm tra", icon: "📦", hint: "Kiểm tra toàn bộ để phân loại triệt để." },
      { id: "t2", text: "Loại bỏ toàn bộ các vỉ thuốc đã hết hạn sử dụng", icon: "🗑️", requires: ["t1"], hint: "Thuốc hết hạn uống vào cực kỳ nguy hiểm, phải vứt ngay." },
      { id: "t3", text: "Phân loại thành 2 nhóm: Thuốc uống và Thuốc bôi ngoài da", icon: "🏷️", requires: ["t2"], hint: "Tách riêng thuốc bôi tránh trẻ nhỏ uống nhầm." },
      { id: "t4", text: "Xếp bông gòn, băng gạc, cồn đỏ và nhiệt kế vào ngăn trên", icon: "🩹", requires: ["t1"], hint: "Dụng cụ sơ cứu phải ở chỗ dễ thấy nhất." },
      { id: "t5", text: "Dán nhãn tên thuốc và hạn sử dụng rõ ràng bên ngoài hộp", icon: "✍️", requires: ["t3"], hint: "Ghi rõ công dụng: thuốc hạ sốt, thuốc đau bụng..." },
      { id: "t6", text: "Khóa tủ thuốc và treo ở vị trí cao ngoài tầm với trẻ nhỏ", icon: "🔒", requires: ["t4", "t5"], hint: "Treo cao trên 1.5m để các em nhỏ không với tới." }
    ],
    lesson: "Tủ thuốc gia đình luôn phân loại rõ ràng và treo ở nơi an toàn."
  },
  {
    id: "tm-20",
    level: 20,
    title: "Kế Hoạch Thoát Hiểm Khi Có Báo Cháy",
    category: "routine",
    categoryName: "Sinh Hoạt & Tự Lập",
    icon: "🚨",
    difficulty: 3,
    description: "Quy trình sinh tồn phản xạ nhanh bảo vệ tính mạng khi xảy ra hỏa hoạn.",
    tasks: [
      { id: "t1", text: "Giữ bình tĩnh, lắng nghe chuông báo động và định hình lối thoát", icon: "🧠", hint: "Bình tĩnh là yếu tố quan trọng nhất để sống sót." },
      { id: "t2", text: "Thấm ướt khăn mặt hoặc áo bằng nước sạch", icon: "🧖", requires: ["t1"], hint: "Khăn ướt lọc khói độc và khí CO cực kỳ hiệu quả." },
      { id: "t3", text: "Bịt kín mũi miệng bằng khăn ướt và cúi thấp người sát sàn", icon: "🧎", requires: ["t2"], hint: "Khói độc bốc lên cao, tầng không khí dưới sàn sạch nhất." },
      { id: "t4", text: "Dùng mu bàn tay sờ nắm đấm cửa xem có nóng không", icon: "🚪", requires: ["t3"], hint: "Nếu nắm cửa nóng nghĩa là lửa lớn đang cháy ngay sau cửa!" },
      { id: "t5", text: "Men theo chân tường di chuyển nhanh về phía cầu thang bộ thoát hiểm", icon: "🏃", requires: ["t4"], hint: "Tuyệt đối không dùng thang máy khi có cháy." },
      { id: "t6", text: "Thoát ra nơi an toàn và gọi ngay 114 báo địa chỉ chính xác", icon: "📞", requires: ["t5"], hint: "Báo lực lượng cứu hỏa chuyên nghiệp ứng cứu." }
    ],
    distractors: [
      { id: "d1", text: "Chạy vào thang máy bấm nút xuống tầng 1", icon: "🛗", failReason: "Hỏa hoạn làm mất điện, thang máy sẽ biến thành lò bẫy khói chết người!" }
    ],
    lesson: "Cúi thấp người, bịt khăn ướt và đi thang bộ — 3 quy tắc vàng thoát hiểm."
  },

  // ==========================================
  // CHẶNG 2: ĐẦU BẾP NHÍ (MÀN 21 -> 40)
  // ==========================================
  {
    id: "tm-21",
    level: 21,
    title: "Bánh Mì Kẹp Trứng Ốp La Xúc Xích",
    category: "cooking",
    categoryName: "Đầu Bếp Nhí",
    icon: "🍳",
    difficulty: 2,
    description: "Tự tay làm bữa sáng thơm nức mũi nóng giòn tiếp sức học bài.",
    tasks: [
      { id: "t1", text: "Đặt chảo lên bếp và bật lửa vừa làm nóng chảo", icon: "🔥", hint: "Chảo phải nóng thì thức ăn mới không bị dính đáy." },
      { id: "t2", text: "Cho một thìa dầu ăn nhỏ tráng đều mặt chảo", icon: "🫒", requires: ["t1"], hint: "Chảo nóng thì cho dầu vào đợi dầu sôi lăn tăn." },
      { id: "t3", text: "Đập trứng gà và thái xúc xích thả vào chảo chiên", icon: "🥚", requires: ["t2"], hint: "Dầu nóng già thì đập trứng vào sẽ xèo vàng giòn viền." },
      { id: "t4", text: "Rắc một chút tiêu muối và lật nhẹ cho trứng chín tới", icon: "🧂", requires: ["t3"], hint: "Nêm nếm gia vị vừa miệng." },
      { id: "t5", text: "Rạch đôi ổ bánh mì, xếp rau mùi và dưa chuột vào", icon: "🥖", hint: "Chuẩn bị phần vỏ bánh mì và rau tươi giòn." },
      { id: "t6", text: "Gắp trứng, xúc xích kẹp vào bánh mì và rưới tương cà", icon: "🥪", requires: ["t4", "t5"], hint: "Kết hợp toàn bộ nguyên liệu lại thành món bánh mì kẹp hoàn chỉnh." }
    ],
    lesson: "Bật bếp -> Dầu nóng -> Đập trứng: thứ tự vàng của món chiên rán."
  },
  {
    id: "tm-22",
    level: 22,
    title: "Làm Pizza Phô Mai Xúc Xích Mini",
    category: "cooking",
    categoryName: "Đầu Bếp Nhí",
    icon: "🍕",
    difficulty: 2,
    description: "Tự nướng chiếc pizza giòn rụm với lớp phô mai kéo sợi thần thánh.",
    tasks: [
      { id: "t1", text: "Bật lò nướng làm nóng trước ở nhiệt độ 200 độ C", icon: "♨️", hint: "Làm nóng lò trước 10 phút để bánh chín đều vỏ giòn." },
      { id: "t2", text: "Đặt đế bánh pizza lên khay nướng có lót giấy nến", icon: "🫓", hint: "Giấy nến chống dính giúp lấy bánh ra nguyên vẹn." },
      { id: "t3", text: "Dùng thìa phết đều sốt cà chua lên khắp mặt đế bánh", icon: "🥫", requires: ["t2"], hint: "Sốt cà chua là lớp nền tạo độ ẩm và vị chua ngọt." },
      { id: "t4", text: "Rắc một lớp phô mai Mozzarella bào sợi phủ kín sốt", icon: "🧀", requires: ["t3"], hint: "Phô mai ở dưới giúp dính chặt các miếng xúc xích." },
      { id: "t5", text: "Xếp các lát xúc xích và ớt chuông hạt bắp lên trên", icon: "🥓", requires: ["t4"], hint: "Topping xếp đẹp mắt bên trên lớp phô mai." },
      { id: "t6", text: "Đưa khay vào lò nướng 12 phút đến khi phô mai chảy vàng", icon: "🍕", requires: ["t1", "t5"], hint: "Lò đã đủ nóng và bánh đã sẵn sàng để nướng." }
    ],
    distractors: [
      { id: "d1", text: "Rưới tương ớt cay xè lên bánh trước khi nướng", icon: "🌶️", failReason: "Tương ớt nướng nhiệt độ cao sẽ bị khét đắng mất vị phô mai!" }
    ],
    lesson: "Bật nóng lò trước giúp đế pizza giòn rụm chứ không bị ỉu dai."
  },
  {
    id: "tm-23",
    level: 23,
    title: "Pha Ly Trà Đào Cam Sả Đá",
    category: "cooking",
    categoryName: "Đầu Bếp Nhí",
    icon: "🍑",
    difficulty: 2,
    description: "Thức uống giải khát ngày hè thơm lừng mùi sả và đào giòn ngọt mát.",
    tasks: [
      { id: "t1", text: "Đập dập 2 cây sả và đun sôi với 200ml nước", icon: "🌿", hint: "Đun sôi sả để tinh dầu thơm hòa tan vào nước." },
      { id: "t2", text: "Ngâm túi trà túi lọc vào nước sả nóng trong 5 phút", icon: "🫖", requires: ["t1"], hint: "Hãm trà lấy nước cốt trà đậm đà." },
      { id: "t3", text: "Bỏ túi bã trà ra, thêm 2 thìa đường và si-rô đào khuấy tan", icon: "🥄", requires: ["t2"], hint: "Khuấy đường khi nước còn ấm sẽ tan rất nhanh." },
      { id: "t4", text: "Vắt nước cốt nửa quả cam tươi vào ly", icon: "🍊", requires: ["t3"], hint: "Nước cam bổ sung vị chua thanh dịu mát." },
      { id: "t5", text: "Cho đầy đá viên mát lạnh vào ly nước trà", icon: "🧊", requires: ["t4"], hint: "Đá viên làm lạnh sâu thức uống sảng khoái." },
      { id: "t6", text: "Gắp các miếng đào ngâm giòn lên trên miệng ly", icon: "🍑", requires: ["t5"], hint: "Đào nổi trên mặt đá trông bắt mắt và giữ độ giòn." }
    ],
    lesson: "Hòa tan đường khi trà còn ấm, cho đá và hoa quả vào sau cùng."
  },
  {
    id: "tm-24",
    level: 24,
    title: "Sinh Tố Xoài Cốt Dừa Đá Xay",
    category: "cooking",
    categoryName: "Đầu Bếp Nhí",
    icon: "🥭",
    difficulty: 2,
    description: "Món sinh tố vàng ươm sánh mịn ngọt ngào cho ngày cuối tuần.",
    tasks: [
      { id: "t1", text: "Rửa sạch máy xay sinh tố và kiểm tra lắp chặt lưỡi dao", icon: "🔪", hint: "Kiểm tra an toàn cối xay trước khi cắm điện." },
      { id: "t2", text: "Gọt vỏ quả xoài chín ngọt và cắt thành các miếng vuông", icon: "🥭", hint: "Cắt miếng nhỏ giúp máy xay nhuyễn mịn không bị kẹt." },
      { id: "t3", text: "Cho xoài, sữa đặc và 50ml nước cốt dừa vào cối xay", icon: "🥥", requires: ["t1", "t2"], hint: "Cho nguyên liệu mềm và chất lỏng vào trước." },
      { id: "t4", text: "Cho một bát đá bi nhỏ vào cối xay lên trên cùng", icon: "🧊", requires: ["t3"], hint: "Đá ở trên sẽ bị lưỡi dao cuốn xuống xay mịn." },
      { id: "t5", text: "Đậy chặt nắp cối, bật máy xay tốc độ cao trong 45 giây", icon: "🔄", requires: ["t4"], hint: "Đậy nắp an toàn trước khi bấm nút xay." },
      { id: "t6", text: "Rót sinh tố sánh mịn ra ly và cắm ống hút thưởng thức", icon: "🥤", requires: ["t5"], hint: "Thành phẩm vàng ươm, béo ngậy thơm nức mũi." }
    ],
    lesson: "Chất lỏng ở dưới, đá ở trên giúp máy xay không bị nghẽn lưỡi dao."
  },
  {
    id: "tm-25",
    level: 25,
    title: "Luộc Trứng Lòng Đào Chuẩn 6 Phút",
    category: "cooking",
    categoryName: "Đầu Bếp Nhí",
    icon: "🥚",
    difficulty: 2,
    description: "Bí quyết canh thời gian để lòng đỏ dẻo quánh, lòng trắng mềm mịn.",
    tasks: [
      { id: "t1", text: "Lấy trứng ra khỏi tủ lạnh để về nhiệt độ phòng 15 phút", icon: "❄️", hint: "Trứng quá lạnh thả vào nước sôi sẽ bị nứt vỏ ngay." },
      { id: "t2", text: "Đun sôi một nồi nước với một thìa giấm nhỏ", icon: "🫕", hint: "Giấm giúp vỏ trứng dễ bóc và lòng trắng đông nhanh." },
      { id: "t3", text: "Dùng muôi nhẹ nhàng thả từng quả trứng vào nồi nước sôi", icon: "🥄", requires: ["t1", "t2"], hint: "Thả nhẹ tay tránh trứng va đập vào đáy nồi nứt vỡ." },
      { id: "t4", text: "Bật đồng hồ bấm giờ đếm ngược chính xác đúng 6 phút", icon: "⏱️", requires: ["t3"], hint: "Thời gian quyết định độ dẻo của lòng đỏ trứng." },
      { id: "t5", text: "Chuẩn bị sẵn một tô nước đá lạnh ngắt bên cạnh", icon: "🧊", requires: ["t3"], hint: "Tô nước đá sẵn sàng sốc nhiệt ngừng nấu." },
      { id: "t6", text: "Hết 6 phút vớt ngay trứng thả vào tô nước đá 5 phút rồi bóc vỏ", icon: "🥚", requires: ["t4", "t5"], hint: "Sốc nhiệt nước đá làm vỏ róc lột ra cực kỳ dễ dàng." }
    ],
    lesson: "Canh đồng hồ chính xác và sốc nước đá là bí mật của trứng lòng đào."
  },
  {
    id: "tm-26",
    level: 26,
    title: "Nấu Bát Phở Bò Tái Nóng Hổi",
    category: "cooking",
    categoryName: "Đầu Bếp Nhí",
    icon: "🍜",
    difficulty: 3,
    description: "Món ăn tinh hoa quốc hồn quốc túy của Việt Nam với nước dùng thơm lừng quế hồi.",
    tasks: [
      { id: "t1", text: "Đun nồi nước hầm xương bò sôi lăn tăn thơm mùi quế hồi", icon: "🫕", hint: "Nước dùng phở phải luôn sôi sùng sục trên bếp." },
      { id: "t2", text: "Thái thịt bò thành các lát mỏng tang ngang thớ", icon: "🥩", hint: "Thái ngang thớ giúp thịt bò mềm ngọt không bị dai." },
      { id: "t3", text: "Thái nhỏ hành hoa, rau mùi và hành tây thái mỏng", icon: "🌿", hint: "Gia vị thảo mộc tạo hương thơm ngát đặc trưng." },
      { id: "t4", text: "Trần bánh phở qua nồi nước sôi rồi trút vào bát tô", icon: "🍜", hint: "Bánh phở nóng hổi nằm ở đáy bát." },
      { id: "t5", text: "Xếp các lát thịt bò tái và rau thơm phủ lên mặt bánh phở", icon: "🥣", requires: ["t2", "t3", "t4"], hint: "Bày biện đẹp mắt trước khi chan nước dùng." },
      { id: "t6", text: "Múc nước dùng sôi sùng sục chan đều làm chín tái thịt bò", icon: "🍲", requires: ["t1", "t5"], hint: "Nước sôi trực tiếp làm thịt bò chín hồng mềm ngọt lịm." }
    ],
    lesson: "Nước dùng phải sôi 100 độ C chan lên thịt bò tươi mới tái mềm ngọt."
  },
  {
    id: "tm-27",
    level: 27,
    title: "Nướng Mẻ Bánh Quy Bơ Chocolate",
    category: "cooking",
    categoryName: "Đầu Bếp Nhí",
    icon: "🍪",
    difficulty: 3,
    description: "Tự nướng những chiếc bánh quy giòn tan thơm lừng mùi bơ sữa.",
    tasks: [
      { id: "t1", text: "Đánh bông bơ nhạt với đường bột cho chuyển màu vàng nhạt", icon: "🧈", hint: "Đánh bơ đường là cốt lõi tạo độ xốp giòn của bánh." },
      { id: "t2", text: "Đập một quả trứng gà vào trộn đều mịn màng", icon: "🥚", requires: ["t1"], hint: "Trứng hòa quyện tạo liên kết dẻo." },
      { id: "t3", text: "Rây bột mì và bột nở vào âu rồi trộn đều thành khối", icon: "🌾", requires: ["t2"], hint: "Rây bột mịn tránh bánh bị vón cục lợn cợn." },
      { id: "t4", text: "Trộn thêm hạt sô-cô-la chip vào khối bột", icon: "🍫", requires: ["t3"], hint: "Hạt chocolate phân bổ đều trong từng chiếc bánh." },
      { id: "t5", text: "Nặn bột thành từng viên tròn dẹt xếp lên khay nướng", icon: "🍪", requires: ["t4"], hint: "Xếp cách nhau 3 cm để khi nướng bánh nở không dính vào nhau." },
      { id: "t6", text: "Bật lò nướng 175 độ C nướng trong 15 phút đến khi vàng ươm", icon: "♨️", requires: ["t5"], hint: "Nướng chín vàng đều hai mặt thơm ngào ngạt." }
    ],
    lesson: "Rây bột mịn và cách đều khoảng cách trên khay để bánh nở tròn đẹp."
  },
  {
    id: "tm-28",
    level: 28,
    title: "Cuốn Nem Rán (Chả Giò) Giòn Rụm",
    category: "cooking",
    categoryName: "Đầu Bếp Nhí",
    icon: "🥢",
    difficulty: 3,
    description: "Món nem truyền thống vàng ươm giòn tan cho mâm cơm ngày Tết.",
    tasks: [
      { id: "t1", text: "Ngâm miến và mộc nhĩ nấm hương trong nước ấm cho nở", icon: "🍄", hint: "Mộc nhĩ nấm hương cần nở mềm trước khi băm." },
      { id: "t2", text: "Băm nhỏ mộc nhĩ, thịt nạc vai, cà rốt và hành tây", icon: "🔪", requires: ["t1"], hint: "Các nguyên liệu băm nhỏ hạt lựu." },
      { id: "t3", text: "Trộn đều thịt băm, rau củ với 1 quả trứng và chút tiêu", icon: "🥣", requires: ["t2"], hint: "Nhân nem dẻo quánh, không cho quá nhiều trứng tránh nhão." },
      { id: "t4", text: "Trải bánh đa nem ra đĩa, thoa chút nước dấm cho giòn vỏ", icon: "🫓", hint: "Bí quyết phết chút nước giấm loãng giúp vỏ nem giòn lâu." },
      { id: "t5", text: "Múc nhân vào giữa rồi cuốn chặt hai đầu thành chiếc nem tròn", icon: "🌯", requires: ["t3", "t4"], hint: "Cuốn đều tay, không quá chặt kẻo vỡ khi rán." },
      { id: "t6", text: "Rán ngập dầu 2 lần lửa: lửa 1 chín tới, lửa 2 giòn tan", icon: "🔥", requires: ["t5"], hint: "Rán 2 lần lửa là bí quyết gia truyền nem giòn suốt 2 tiếng!" }
    ],
    lesson: "Bí quyết nem giòn: Thoa dấm loãng lên vỏ và rán nem 2 lần lửa."
  },
  {
    id: "tm-29",
    level: 29,
    title: "Làm Kem Que Dưa Hấu Tươi Mát",
    category: "cooking",
    categoryName: "Đầu Bếp Nhí",
    icon: "🍉",
    difficulty: 2,
    description: "Tự làm kem que hoa quả 100% tự nhiên không phẩm màu hóa chất.",
    tasks: [
      { id: "t1", text: "Gọt vỏ dưa hấu và gạt bỏ toàn bộ hạt đen", icon: "🍉", hint: "Bỏ sạch hạt để kem mịn màng không bị sạn lạo xạo." },
      { id: "t2", text: "Cho dưa hấu vào máy xay sinh tố cùng 1 thìa mật ong", icon: "🔄", requires: ["t1"], hint: "Mật ong làm kem ngọt dịu tự nhiên." },
      { id: "t3", text: "Lọc nước ép dưa hấu qua rây để bỏ bớt xơ bã", icon: "🧪", requires: ["t2"], hint: "Nước ép trong veo giúp kem đóng băng mịn không dăm đá." },
      { id: "t4", text: "Rót nước dưa hấu vào 4 khuôn kem que sạch", icon: "🍧", requires: ["t3"], hint: "Rót đầy 90% khuôn chừa chỗ cho nước nở khi đóng băng." },
      { id: "t5", text: "Cắm que kem gỗ vào giữa từng ô khuôn", icon: "🥢", requires: ["t4"], hint: "Cắm thẳng trục để khi rút kem ra dễ dàng." },
      { id: "t6", text: "Để vào ngăn đông tủ lạnh ít nhất 6 tiếng cho đông cứng", icon: "❄️", requires: ["t5"], hint: "Đông cứng hoàn toàn là có que kem mát lạnh ngon tuyệt!" }
    ],
    lesson: "Nước đóng băng sẽ nở thể tích — nhớ chừa 10% miệng khuôn nhé!"
  },
  {
    id: "tm-30",
    level: 30,
    title: "Làm Cơm Cuộn Kimbap Hàn Quốc",
    category: "cooking",
    categoryName: "Đầu Bếp Nhí",
    icon: "🍙",
    difficulty: 3,
    description: "Cuộn cơm rong biển đẹp mắt chuẩn bị cho chuyến dã ngoại cuối tuần.",
    tasks: [
      { id: "t1", text: "Nấu cơm dẻo và trộn với chút dầu mè và muối mè", icon: "🍚", hint: "Cơm thơm mùi dầu mè giúp hạt cơm bóng bẩy." },
      { id: "t2", text: "Thái sợi dài cà rốt, dưa chuột, xúc xích và thanh trứng tráng", icon: "🥒", hint: "Các sợi nhân dài bằng chiều rộng lá rong biển." },
      { id: "t3", text: "Trải mành tre cuốn kimbap ra bàn và đặt lá rong biển lên", icon: "🎋", hint: "Mặt ráp của lá rong biển quay lên trên để dính cơm." },
      { id: "t4", text: "Dàn đều một lớp cơm mỏng phủ 2/3 bề mặt lá rong biển", icon: "🥢", requires: ["t1", "t3"], hint: "Dàn đều tay chừa 1/3 mép trên để dán dính mép cuộn." },
      { id: "t5", text: "Xếp các dải nhân cà rốt, xúc xích, dưa chuột vào giữa", icon: "🥕", requires: ["t2", "t4"], hint: "Nhân nằm gọn gàng ngay chính giữa phần cơm." },
      { id: "t6", text: "Dùng mành tre cuộn chặt tay rồi cắt thành từng khoanh tròn", icon: "🍱", requires: ["t5"], hint: "Thoa dầu ăn vào lưỡi dao cắt ngọt lịm không dính cơm." }
    ],
    lesson: "Mặt nhám rong biển quay lên trong, thoa dầu mè vào dao cắt sắc lẹm."
  },
  {
    id: "tm-31",
    level: 31,
    title: "Pha Trà Sữa Trân Châu Đường Đen",
    category: "cooking",
    categoryName: "Đầu Bếp Nhí",
    icon: "🧋",
    difficulty: 3,
    description: "Học cách nấu trân châu dẻo dai và hãm cốt trà đậm vị thơm ngậy.",
    tasks: [
      { id: "t1", text: "Đun sôi một nồi nước lớn trên bếp", icon: "🫕", hint: "Nước phải thật sôi mới thả hạt trân châu vào." },
      { id: "t2", text: "Thả trân châu vào luộc 20 phút rồi ủ thêm 20 phút", icon: "⚫", requires: ["t1"], hint: "Ủ trân châu giúp nhân hạt nở mềm dẻo từ trong ra ngoài." },
      { id: "t3", text: "Vớt trân châu ngâm vào si-rô đường đen sánh mịn", icon: "🍯", requires: ["t2"], hint: "Đường đen ngấm vào hạt trân châu ngọt lịm đậm đà." },
      { id: "t4", text: "Hãm hồng trà với nước sôi 10 phút rồi lọc bỏ bã", icon: "🫖", hint: "Cốt trà đen đậm đà là linh hồn của ly trà sữa." },
      { id: "t5", text: "Khuấy đều sữa đặc và sữa tươi không đường vào nước cốt trà", icon: "🥛", requires: ["t4"], hint: "Tạo nên vị trà sữa béo ngậy thanh mát." },
      { id: "t6", text: "Múc trân châu đường đen vào đáy ly, thêm đá rồi rót trà sữa", icon: "🧋", requires: ["t3", "t5"], hint: "Tạo vệt đường đen hổ phách chảy quanh thành ly tuyệt đẹp." }
    ],
    lesson: "Ủ trân châu sau khi luộc giúp hạt mềm dẻo không bị cứng nhân giữa."
  },
  {
    id: "tm-32",
    level: 32,
    title: "Nấu Nồi Cháo Thịt Băm Cà Rốt",
    category: "cooking",
    categoryName: "Đầu Bếp Nhí",
    icon: "🍲",
    difficulty: 2,
    description: "Bát cháo nóng hổi ngọt lành bồi bổ sức khỏe cho cả gia đình.",
    tasks: [
      { id: "t1", text: "Vo sạch gạo tẻ cùng một nắm nhỏ gạo nếp", icon: "🌾", hint: "Thêm chút gạo nếp giúp cháo dẻo sánh thơm lừng." },
      { id: "t2", text: "Cho gạo và nước theo tỉ lệ 1:6 vào nồi đun sôi bùng", icon: "🫕", requires: ["t1"], hint: "Canh tỉ lệ nước chuẩn cháo không bị đặc khét." },
      { id: "t3", text: "Hạ nhỏ lửa liu riu và hé vung nồi ninh trong 30 phút", icon: "🔥", requires: ["t2"], hint: "Hé vung tránh cháo sôi trào ra mặt bếp." },
      { id: "t4", text: "Thịt băm ướp chút hạt nêm xào chín thơm với hành củ", icon: "🥩", hint: "Xào thơm thịt trước giúp thịt không bị tanh." },
      { id: "t5", text: "Thái cà rốt thành hạt lựu nhỏ li ti", icon: "🥕", hint: "Hạt lựu nhỏ giúp cà rốt chín mềm hòa vào cháo." },
      { id: "t6", text: "Trút thịt xào và cà rốt vào nồi cháo khuấy đều 10 phút", icon: "🥣", requires: ["t3", "t4", "t5"], hint: "Các nguyên liệu hòa quyện, nêm lại gia vị vừa miệng." }
    ],
    lesson: "Ninh cháo lửa nhỏ hé vung — canh lửa cẩn thận không để trào bếp."
  },
  {
    id: "tm-33",
    level: 33,
    title: "Làm Salad Nga Trộn Mayonnaise",
    category: "cooking",
    categoryName: "Đầu Bếp Nhí",
    icon: "🥗",
    difficulty: 2,
    description: "Món khai vị thanh mát, nhiều màu sắc bắt mắt giàu vitamin.",
    tasks: [
      { id: "t1", text: "Thái hạt lựu khoai tây, cà rốt và xúc xích xông khói", icon: "🥕", hint: "Các miếng hạt lựu kích thước đều nhau 1 cm." },
      { id: "t2", text: "Luộc chín cà rốt, khoai tây và hạt đậu Hà Lan trong nước muối", icon: "🫕", requires: ["t1"], hint: "Luộc vừa chín tới để rau củ giữ độ ngọt giòn." },
      { id: "t3", text: "Vớt rau củ thả ngay vào thau nước đá lạnh ngắt", icon: "🧊", requires: ["t2"], hint: "Sốc nước đá giữ màu cam đỏ và xanh mướt tự nhiên." },
      { id: "t4", text: "Đổ rau củ ra rổ để thật ráo nước", icon: "🧺", requires: ["t3"], hint: "Rau củ phải ráo khô thì trộn sốt mới sánh mịn không nhão." },
      { id: "t5", text: "Cho tất cả vào âu lớn, thêm xúc xích và sốt Mayonnaise", icon: "🥣", requires: ["t1", "t4"], hint: "Sốt Mayonnaise béo ngậy kết dính các hạt salad." },
      { id: "t6", text: "Dùng thìa gỗ trộn thật nhẹ tay rồi để ngăn mát 30 phút", icon: "🥗", requires: ["t5"], hint: "Trộn nhẹ tay tránh làm nát khoai tây chín mềm." }
    ],
    lesson: "Rau củ luộc xong sốc nước đá giữ màu tươi, để ráo trước khi trộn sốt."
  },
  {
    id: "tm-34",
    level: 34,
    title: "Làm Sữa Chua Dầm Hoa Quả Dầm",
    category: "cooking",
    categoryName: "Đầu Bếp Nhí",
    icon: "🍓",
    difficulty: 2,
    description: "Món ăn vặt thơm ngon tốt cho tiêu hóa của trẻ em.",
    tasks: [
      { id: "t1", text: "Rửa sạch các loại trái cây: dâu tây, kiwi, dưa hấu, xoài", icon: "🚰", hint: "Rửa sạch hoa quả dưới vòi nước chảy." },
      { id: "t2", text: "Gọt vỏ và cắt trái cây thành từng miếng vuông vừa ăn", icon: "🔪", requires: ["t1"], hint: "Miếng vừa miệng ăn ngon và đẹp mắt." },
      { id: "t3", text: "Lấy một chiếc ly thủy tinh cao và cho một lớp đá bào ở đáy", icon: "🥛", hint: "Đá bào ở đáy giữ độ mát lạnh cho hoa quả." },
      { id: "t4", text: "Xếp xen kẽ từng lớp hoa quả nhiều màu sắc lên trên đá", icon: "🌈", requires: ["t2", "t3"], hint: "Tạo các dải màu đỏ, vàng, xanh bắt mắt." },
      { id: "t5", text: "Đổ một hộp sữa chua có đường phủ kín mặt hoa quả", icon: "🍶", requires: ["t4"], hint: "Sữa chua sánh ngậy chảy len qua từng miếng quả." },
      { id: "t6", text: "Rưới một thìa sữa đặc và rắc dừa khô giòn rụm lên trên", icon: "🥥", requires: ["t5"], hint: "Dừa khô giòn rụm tạo điểm nhấn hương vị khó quên." }
    ],
    lesson: "Xếp lớp màu sắc xen kẽ tạo nên món ăn hấp dẫn thị giác."
  },
  {
    id: "tm-35",
    level: 35,
    title: "Làm Bắp Rang Bơ Phô Mai Tại Nhà",
    category: "cooking",
    categoryName: "Đầu Bếp Nhí",
    icon: "🍿",
    difficulty: 2,
    description: "Tự nổ bắp ngô thơm lừng mùi rạp chiếu phim để cùng cả nhà xem phim.",
    tasks: [
      { id: "t1", text: "Chuẩn bị một chiếc nồi sâu đáy dày có nắp đậy trong suốt", icon: "🫕", hint: "Nồi đáy dày giúp nhiệt tỏa đều bắp ngô không bị cháy khét." },
      { id: "t2", text: "Cho 2 thìa dầu ăn và 3 hạt ngô thử nghiệm vào đun nóng", icon: "🔥", requires: ["t1"], hint: "Bí quyết thử nhiệt: khi 3 hạt ngô nổ bung là dầu đã đạt chuẩn." },
      { id: "t3", text: "Khi 3 hạt nổ bung, đổ toàn bộ ngô hạt vào và đậy chặt nắp", icon: "🌽", requires: ["t2"], hint: "Đậy nắp ngay kẻo bắp nổ bắn tung tóe ra ngoài." },
      { id: "t4", text: "Cầm hai quai nồi lắc đều tay trên bếp cho ngô nổ liên tục", icon: "🔄", requires: ["t3"], hint: "Lắc đều để hạt ngô đảo vị trí không bị cháy đáy." },
      { id: "t5", text: "Khi tiếng nổ thưa dần (2 giây mới nổ 1 tiếng) thì tắt bếp", icon: "🛑", requires: ["t4"], hint: "Tắt bếp ngay để bắp chín trắng muốt không khét." },
      { id: "t6", text: "Đổ bơ tan chảy và bột phô mai vào xóc đều thưởng thức", icon: "🍿", requires: ["t5"], hint: "Bơ và phô mai bám đều vào từng hạt bắp nổ giòn tan." }
    ],
    distractors: [
      { id: "d1", text: "Mở toang nắp nồi khi bắp đang nổ rào rào", icon: "💥", failReason: "Hạt bắp nóng rực bắn vào mặt và mắt cực kỳ nguy hiểm!" }
    ],
    lesson: "Lắc nồi liên tục và lắng nghe nhịp nổ để tắt bếp đúng thời điểm vàng."
  },
  {
    id: "tm-36",
    level: 36,
    title: "Nấu Nước Canh Rau Ngót Nấu Thịt Nạc",
    category: "cooking",
    categoryName: "Đầu Bếp Nhí",
    icon: "🍲",
    difficulty: 2,
    description: "Bát canh giải nhiệt ngọt mát ruột cho bữa cơm trưa ngày hè.",
    tasks: [
      { id: "t1", text: "Tuốt lá rau ngót, bỏ cọng già và rửa sạch 3 lần nước", icon: "🌿", hint: "Loại bỏ lá sâu và cọng cứng." },
      { id: "t2", text: "Dùng tay vò nhẹ lá rau ngót cho hơi dập", icon: "🖐️", requires: ["t1"], hint: "Vò dập giúp rau ngót nhanh mềm và tiết vị ngọt mát." },
      { id: "t3", text: "Ướp thịt nạc băm với chút muối và hành củ đập dập", icon: "🥩", hint: "Ướp thịt ngấm vị đậm đà trước khi nấu." },
      { id: "t4", text: "Phi thơm hành với xíu dầu ăn rồi đảo săn thịt nạc", icon: "🍳", requires: ["t3"], hint: "Xào săn thịt tạo hương thơm cho nồi canh." },
      { id: "t5", text: "Đổ nước vào nồi đun sôi bùng và hớt sạch bọt", icon: "🫕", requires: ["t4"], hint: "Hớt bọt giúp nước canh trong veo ngọt lành." },
      { id: "t6", text: "Thả rau ngót vào nấu sôi 3 phút rồi tắt bếp nêm gia vị", icon: "🍲", requires: ["t2", "t5"], hint: "Rau ngót vừa chín tới giữ nguyên màu xanh biếc." }
    ],
    lesson: "Vò nhẹ lá rau ngót trước khi nấu giúp canh ngọt đậm và rau mềm ngon."
  },
  {
    id: "tm-37",
    level: 37,
    title: "Làm Món Trứng Cuộn Tamagoyaki Nhật Bản",
    category: "cooking",
    categoryName: "Đầu Bếp Nhí",
    icon: "🍳",
    difficulty: 3,
    description: "Cuộn từng lớp trứng vàng óng ngọt ngào chuẩn phong cách Bento.",
    tasks: [
      { id: "t1", text: "Đập 3 quả trứng gà vào tô, thêm đường, muối và chút nước tương", icon: "🥚", hint: "Nêm gia vị kiểu Nhật ngọt thanh đặc trưng." },
      { id: "t2", text: "Dùng đũa khuấy nhẹ tay cắt lòng trắng không đánh nổi bọt", icon: "🥢", requires: ["t1"], hint: "Tránh nổi bọt khí để mặt trứng cuộn mịn màng không rỗ." },
      { id: "t3", text: "Rây hỗn hợp trứng qua rây lọc cho thật mịn màng", icon: "🧪", requires: ["t2"], hint: "Lọc bỏ lợn cợn để trứng mềm như nhung." },
      { id: "t4", text: "Thoa dầu ăn mỏng lên chảo chữ nhật và làm nóng nhẹ", icon: "🫒", hint: "Chảo chữ nhật giúp định hình cuộn trứng vuông vắn." },
      { id: "t5", text: "Rót một lớp trứng mỏng, khi se mặt thì cuộn tròn về một phía", icon: "🔄", requires: ["t3", "t4"], hint: "Cuộn lớp trứng đầu tiên làm lõi bên trong." },
      { id: "t6", text: "Rót tiếp lớp trứng thứ 2 lách dưới cuộn cũ rồi cuộn tiếp nhiều lớp", icon: "🍱", requires: ["t5"], hint: "Tráng và cuộn 3-4 lớp tạo thành khối trứng vàng óng dày dặn." }
    ],
    lesson: "Lọc trứng qua rây và tráng từng lớp mỏng tạo nên cuộn trứng nhiều tầng."
  },
  {
    id: "tm-38",
    level: 38,
    title: "Nấu Nước Đậu Đen Rang Giải Nhiệt",
    category: "cooking",
    categoryName: "Đầu Bếp Nhí",
    icon: "🫘",
    difficulty: 2,
    description: "Thức uống dân gian thanh lọc cơ thể cực tốt cho những ngày nắng gắt.",
    tasks: [
      { id: "t1", text: "Rửa sạch hạt đậu đen xanh lòng và nhặt bỏ hạt lép nổi", icon: "🥣", hint: "Hạt lép nổi trên mặt nước cần bỏ đi." },
      { id: "t2", text: "Để đậu đen vào rổ cho thật khô ráo nước", icon: "🧺", requires: ["t1"], hint: "Đậu phải ráo khô thì rang mới thơm không bị hấp hơi ướt." },
      { id: "t3", text: "Cho đậu vào chảo rang lửa nhỏ đảo liên tục 15 phút", icon: "🔥", requires: ["t2"], hint: "Rang đến khi vỏ đậu hơi nứt và bốc mùi thơm lừng." },
      { id: "t4", text: "Đun sôi một nồi nước 1.5 lít trên bếp", icon: "🫕", hint: "Chuẩn bị nước sôi để hãm trà đậu rang." },
      { id: "t5", text: "Trút đậu đen đã rang vào nồi nước sôi đun nhỏ lửa 10 phút", icon: "🫖", requires: ["t3", "t4"], hint: "Chất dinh dưỡng trong đậu đen thôi ra nước đỏ thẫm." },
      { id: "t6", text: "Tắt bếp ủ 15 phút rồi chắt nước vào bình uống cả ngày", icon: "🍶", requires: ["t5"], hint: "Nước đậu đen rang thơm ngậy vị thảo mộc thiên nhiên." }
    ],
    lesson: "Rang đậu trước khi nấu giúp nước thơm ngát và không bị đầy bụng."
  },
  {
    id: "tm-39",
    level: 39,
    title: "Làm Kem Xoài Cốt Dừa Bằng Túi Zip Đá Lạnh",
    category: "cooking",
    categoryName: "Đầu Bếp Nhí",
    icon: "🍦",
    difficulty: 3,
    description: "Thí nghiệm khoa học thú vị: Làm kem trong 5 phút chỉ bằng đá và muối hạt!",
    tasks: [
      { id: "t1", text: "Xay nhuyễn xoài chín cùng sữa tươi và một chút sữa đặc", icon: "🥭", hint: "Hỗn hợp kem nền ngọt ngào thơm nức." },
      { id: "t2", text: "Rót hỗn hợp sữa xoài vào túi zip nhỏ và miết khóa thật kín", icon: "🔒", requires: ["t1"], hint: "Khóa kín tuyệt đối để muối không lọt vào làm mặn kem." },
      { id: "t3", text: "Lấy một túi zip lớn hơn cho đầy đá viên và 5 thìa muối hạt", icon: "🧊", hint: "Muối làm hạ nhiệt độ đá xuống âm 10 độ C (hiệu ứng hạ nhiệt)!" },
      { id: "t4", text: "Đặt túi zip nhỏ chứa sữa xoài vào giữa túi đá muối", icon: "📦", requires: ["t2", "t3"], hint: "Túi kem được bao bọc 360 độ bởi lớp đá siêu lạnh." },
      { id: "t5", text: "Đeo găng tay vải và lắc mạnh túi liên tục trong 5 phút", icon: "🧤", requires: ["t4"], hint: "Đeo găng tay kẻo bị bỏng lạnh khi lắc đá âm 10 độ!" },
      { id: "t6", text: "Lấy túi nhỏ ra lau sạch muối bên ngoài và múc kem dẻo thưởng thức", icon: "🍨", requires: ["t5"], hint: "Sữa lỏng đã đông đặc thành kem tươi dẻo mịn kỳ diệu!" }
    ],
    lesson: "Hiện tượng nhiệt động học: Muối làm đá tan ở nhiệt độ âm giúp đông kem thần tốc."
  },
  {
    id: "tm-40",
    level: 40,
    title: "Chuẩn Bị Bữa Tiệc BBQ Nướng Ngoài Trời",
    category: "cooking",
    categoryName: "Đầu Bếp Nhí",
    icon: "🥩",
    difficulty: 3,
    description: "Quy trình tổ chức tiệc nướng gia đình an toàn, thơm ngon và vui vẻ.",
    tasks: [
      { id: "t1", text: "Ướp thịt bò, sườn heo và xúc xích với sốt BBQ trước 2 tiếng", icon: "🍖", hint: "Thịt ngấm gia vị sâu trước khi đem nướng." },
      { id: "t2", text: "Rửa sạch vỉ nướng và kê bếp than ở nơi thoáng gió ngoài sân", icon: "🪵", hint: "Tuyệt đối không đốt than trong phòng kín gây ngạt khí." },
      { id: "t3", text: "Nhóm than hoa bén lửa hồng không còn khói đen", icon: "🔥", requires: ["t2"], hint: "Nướng bằng than hồng đỏ rực, không nướng bằng ngọn lửa bốc." },
      { id: "t4", text: "Xếp ngô ngọt, đậu bắp và ớt chuông nướng trước", icon: "🌽", requires: ["t3"], hint: "Rau củ nướng trước khi vỉ dính mỡ thịt." },
      { id: "t5", text: "Đặt các miếng thịt lên vỉ nướng lật đều hai mặt vàng ươm", icon: "🥩", requires: ["t1", "t3"], hint: "Lật đều tay để thịt chín kỹ bên trong mà vỏ ngoài không cháy." },
      { id: "t6", text: "Dập tắt hoàn toàn than bằng nước và dọn sạch tro tàn sau tiệc", icon: "🧯", requires: ["t5"], hint: "Ngăn ngừa triệt để nguy cơ tàn lửa bùng phát gây hỏa hoạn." }
    ],
    distractors: [
      { id: "d1", text: "Kê bếp than hoa nướng ngay trong phòng ngủ kín", icon: "🚪", failReason: "Đốt than trong phòng kín sinh khí CO cực độc gây tử vong trong 10 phút!" }
    ],
    lesson: "Than hoa phải bén lửa hồng không khói và luôn dập tắt tro tàn sau tiệc."
  }
];
