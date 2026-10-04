// js/logic-grid-cases-part1.js - Ngân hàng Vụ Án Suy Luận Logic Trinh Thám (Phần 1: Vụ án 1 - 25)
// Chuẩn bài toán suy luận Einstein & Olympic Quốc tế dành cho học sinh Lớp 4

export const LOGIC_GRID_CASES_PART1 = [
  {
    id: "lg-01",
    title: "Vụ Án Ba Bạn Nhỏ Và Môn Thi Tài",
    difficulty: 1,
    story: "Trong hội thi sáng tạo trường tiểu học, ba bạn Huy, Nam và An tham gia 3 môn khác nhau: Cờ Vua, Bơi Lội và Chế Tạo Robot.",
    rows: { name: "Học sinh", items: ["Huy", "Nam", "An"] },
    cols: { name: "Môn thi", items: ["Cờ Vua", "Bơi Lội", "Robot"] },
    clues: [
      "1. Nam rất mê thi đấu trên bàn cờ 64 ô vuông và luôn mang theo quân Hậu may mắn.",
      "2. Huy không biết bơi và rất sợ nước sâu.",
      "3. Người thi Robot thích lập trình điều khiển cánh tay cơ khí."
    ],
    solution: {
      "Huy": "Robot",
      "Nam": "Cờ Vua",
      "An": "Bơi Lội"
    },
    explanation: "Từ manh mối 1, Nam thi Cờ Vua. Từ manh mối 2, Huy sợ nước nên không thi Bơi, vậy Huy thi Robot. Còn lại An thi Bơi Lội."
  },
  {
    id: "lg-02",
    title: "Ngôi Nhà Của Ba Chú Thú Cưng",
    difficulty: 1,
    story: "Ba bạn Cún, Mèo và Vẹt sống ở 3 ngôi nhà có màu sắc khác nhau: Nhà Đỏ, Nhà Xanh Lá và Nhà Vàng.",
    rows: { name: "Thú cưng", items: ["Cún", "Mèo", "Vẹt"] },
    cols: { name: "Màu nhà", items: ["Nhà Đỏ", "Nhà Xanh", "Nhà Vàng"] },
    clues: [
      "1. Vẹt thích bay lượn giữa các tán lá cây râm mát và sống trong ngôi nhà cùng màu với lá cây.",
      "2. Chú Mèo sợ lửa và ghét màu Đỏ sặc sỡ.",
      "3. Chú Cún thích ngôi nhà có màu sắc rực rỡ như ánh mặt trời buổi sớm."
    ],
    solution: {
      "Cún": "Nhà Đỏ",
      "Mèo": "Nhà Vàng",
      "Vẹt": "Nhà Xanh"
    },
    explanation: "Vẹt ở Nhà Xanh Lá (màu lá cây). Mèo ghét màu đỏ nên không thể ở Nhà Đỏ, do đó Mèo ở Nhà Vàng. Còn lại Cún ở Nhà Đỏ."
  },
  {
    id: "lg-03",
    title: "Huy Hiệu Bốn Đội Trưởng Tài Ba",
    difficulty: 2,
    story: "Bốn bạn Triết, Khoa, Minh và Tùng là đội trưởng của 4 câu lạc bộ: Toán Học, Thiên Văn, Lịch Sử và Mỹ Thuật. Mỗi bạn mang một huy hiệu: Vàng, Bạc, Đồng và Lam ngọc.",
    rows: { name: "Đội trưởng", items: ["Triết", "Khoa", "Minh", "Tùng"] },
    cols: { name: "Huy hiệu", items: ["Vàng", "Bạc", "Đồng", "Lam ngọc"] },
    clues: [
      "1. Triết đeo huy hiệu bằng kim loại quý nhất trong bảng giải thưởng (Huy hiệu Vàng).",
      "2. Khoa và bạn đeo huy hiệu Đồng thường xuyên cùng nhau quan sát kính thiên văn.",
      "3. Tùng không đeo huy hiệu Lam ngọc.",
      "4. Minh rất tự hào về chiếc huy hiệu màu Bạc lấp lánh trên ngực áo."
    ],
    solution: {
      "Triết": "Vàng",
      "Khoa": "Lam ngọc",
      "Minh": "Bạc",
      "Tùng": "Đồng"
    },
    explanation: "Triết đeo Vàng. Minh đeo Bạc. Khoa cùng bạn đeo Đồng nên Khoa không đeo Đồng, do đó Khoa đeo Lam ngọc. Còn lại Tùng đeo Đồng."
  },
  {
    id: "lg-04",
    title: "Bữa Trưa Yêu Thích Của Bốn Nhà Du Hành",
    difficulty: 2,
    story: "Trên trạm vũ trụ, 4 phi hành gia Huy, Neil, Yuri và John chọn 4 món ăn đóng gói không gian: Táo sấy, Bánh mì ống, Súp gà và Cơm nắm Rong biển.",
    rows: { name: "Phi hành gia", items: ["Huy", "Neil", "Yuri", "John"] },
    cols: { name: "Món ăn", items: ["Táo sấy", "Bánh mì", "Súp gà", "Cơm nắm"] },
    clues: [
      "1. Huy thích ăn món cơm dẻo truyền thống cuộn rong biển giòn tan.",
      "2. Yuri là người gốc Âu và rất thích món tráng miệng từ trái cây giòn ngọt.",
      "3. Neil không thích ăn các món dạng lỏng nóng như súp.",
      "4. John thích húp súp ấm nóng bồi bổ sức khỏe trong môi trường không trọng lực."
    ],
    solution: {
      "Huy": "Cơm nắm",
      "Neil": "Bánh mì",
      "Yuri": "Táo sấy",
      "John": "Súp gà"
    },
    explanation: "Huy ăn Cơm nắm. Yuri ăn Táo sấy. John ăn Súp gà. Còn lại Neil ăn Bánh mì ống."
  },
  {
    id: "lg-05",
    title: "Vụ Án Chiếc Cúp Vô Địch Toán",
    difficulty: 3,
    story: "Bốn lớp 4A, 4B, 4C, 4D đạt các thứ hạng Nhất, Nhì, Ba, Tư trong kỳ thi Rung Chuông Vàng.",
    rows: { name: "Lớp", items: ["Lớp 4A", "Lớp 4B", "Lớp 4C", "Lớp 4D"] },
    cols: { name: "Thứ hạng", items: ["Hạng Nhất", "Hạng Nhì", "Hạng Ba", "Hạng Tư"] },
    clues: [
      "1. Lớp 4A không đạt giải Ba và có thứ hạng cao hơn lớp 4C.",
      "2. Lớp 4D xuất sắc trả lời đúng câu hỏi cuối cùng và giành cúp Vô Địch (Hạng Nhất).",
      "3. Lớp 4B đạt thứ hạng ngay sau lớp 4A.",
      "4. Lớp 4C xếp cuối cùng trong bảng tổng sắp."
    ],
    solution: {
      "Lớp 4A": "Hạng Nhì",
      "Lớp 4B": "Hạng Ba",
      "Lớp 4C": "Hạng Tư",
      "Lớp 4D": "Hạng Nhất"
    },
    explanation: "Lớp 4D Hạng Nhất. Lớp 4C Hạng Tư (cuối bảng). Lớp 4B đứng ngay sau 4A nên 4A phải là Hạng Nhì, và 4B là Hạng Ba."
  },
  {
    id: "lg-06",
    title: "Bốn Bạn Và Bốn Cung Hoàng Đạo",
    difficulty: 3,
    story: "Triết, Chi, Dũng, Hà sinh vào 4 tháng thuộc 4 chòm sao: Bạch Dương (Lửa), Kim Ngưu (Đất), Song Tử (Khí), Cự Giải (Nước).",
    rows: { name: "Bạn nhỏ", items: ["Triết", "Chi", "Dũng", "Hà"] },
    cols: { name: "Chòm sao", items: ["Bạch Dương", "Kim Ngưu", "Song Tử", "Cự Giải"] },
    clues: [
      "1. Triết có tính cách sôi nổi, nhiệt huyết như ngọn lửa và thuộc cung Lửa (Bạch Dương).",
      "2. Chi rất thích bơi lội dưới làn nước mát và thuộc cung Nước.",
      "3. Dũng kiên định, vững chãi như mặt đất và không phải cung Song Tử.",
      "4. Hà yêu tự do như những cơn gió bay bổng trên bầu trời."
    ],
    solution: {
      "Triết": "Bạch Dương",
      "Chi": "Cự Giải",
      "Dũng": "Kim Ngưu",
      "Hà": "Song Tử"
    },
    explanation: "Triết thuộc cung Bạch Dương (Lửa). Chi thuộc cung Cự Giải (Nước). Dũng thuộc cung Đất (Kim Ngưu). Hà thuộc cung Khí (Song Tử)."
  },
  {
    id: "lg-07",
    title: "Thám Tử Điều Tra Bốn Món Đồ Bị Lẫn",
    difficulty: 3,
    story: "Trong phòng thí nghiệm, 4 dụng cụ: Kính lúp, Thước cuộn, La bàn và Cân tiểu ly bị cất nhầm vào 4 ngăn kéo có dán nhãn màu: Xanh Dương, Đỏ, Vàng, Trắng.",
    rows: { name: "Dụng cụ", items: ["Kính lúp", "Thước cuộn", "La bàn", "Cân tiểu ly"] },
    cols: { name: "Ngăn kéo", items: ["Ngăn Xanh", "Ngăn Đỏ", "Ngăn Vàng", "Ngăn Trắng"] },
    clues: [
      "1. Dụng cụ dùng để định hướng phương hướng (La bàn) nằm trong ngăn kéo màu Vàng.",
      "2. Kính lúp không nằm trong ngăn màu Đỏ cũng không ở ngăn màu Trắng.",
      "3. Cân tiểu ly đo khối lượng nằm trong ngăn màu Trắng tinh khôi.",
      "4. Thước cuộn dùng để đo chiều dài nằm trong ngăn kéo còn lại."
    ],
    solution: {
      "Kính lúp": "Ngăn Xanh",
      "Thước cuộn": "Ngăn Đỏ",
      "La bàn": "Ngăn Vàng",
      "Cân tiểu ly": "Ngăn Trắng"
    },
    explanation: "La bàn ở Ngăn Vàng. Cân tiểu ly ở Ngăn Trắng. Kính lúp không ở Đỏ hay Trắng nên phải ở Ngăn Xanh. Thước cuộn ở Ngăn Đỏ."
  },
  {
    id: "lg-08",
    title: "Bốn Cuốn Sách Khoa Học Yêu Thích",
    difficulty: 4,
    story: "Bốn bạn An, Bình, Cường, Dũng mượn 4 cuốn sách: Vũ Trụ Bí Ẩn, Đại Dương Sâu Thẳm, Khủng Long Tiền Sử và Vương Quốc Côn Trùng.",
    rows: { name: "Bạn nhỏ", items: ["An", "Bình", "Cường", "Dũng"] },
    cols: { name: "Cuốn sách", items: ["Vũ Trụ", "Đại Dương", "Khủng Long", "Côn Trùng"] },
    clues: [
      "1. An say mê ngắm các hành tinh và các vì sao qua kính thiên văn mỗi đêm.",
      "2. Cường rất say mê các loài khủng long bạo chúa T-Rex thời cổ đại.",
      "3. Dũng đang làm bộ sưu tập tiêu bản về các loài bướm và kiến.",
      "4. Bình thích tìm hiểu về các loài cá voi khổng lồ và rạn san hô dưới đáy biển sâu."
    ],
    solution: {
      "An": "Vũ Trụ",
      "Bình": "Đại Dương",
      "Cường": "Khủng Long",
      "Dũng": "Côn Trùng"
    },
    explanation: "An đọc Vũ Trụ. Bình đọc Đại Dương. Cường đọc Khủng Long. Dũng đọc Côn Trùng."
  },
  {
    id: "lg-09",
    title: "Olympic Hack Não: Bốn Xe Cứu Hộ Lên Đường",
    difficulty: 4,
    story: "Bốn chiếc xe đặc chủng: Xe Cứu Hỏa, Xe Cứu Thương, Xe Cảnh Sát và Xe Cứu Hộ Công Trình xuất phát từ 4 trạm: Trạm Đông, Trạm Tây, Trạm Nam, Trạm Bắc.",
    rows: { name: "Xe đặc chủng", items: ["Cứu Hỏa", "Cứu Thương", "Cảnh Sát", "Cứu Hộ"] },
    cols: { name: "Trạm xuất phát", items: ["Trạm Đông", "Trạm Tây", "Trạm Nam", "Trạm Bắc"] },
    clues: [
      "1. Xe Cứu Hỏa có vòi rồng lớn đỗ tại Trạm phía Đông để gần hồ nước lớn.",
      "2. Xe Cứu Thương chở bác sĩ túc trực tại trạm đối diện với Trạm Đông (tức Trạm Tây).",
      "3. Xe Cảnh Sát tuần tra không xuất phát từ Trạm Nam.",
      "4. Xe Cứu Hộ cẩu kéo các phương tiện gặp sự cố xuất phát từ trạm còn lại."
    ],
    solution: {
      "Cứu Hỏa": "Trạm Đông",
      "Cứu Thương": "Trạm Tây",
      "Cảnh Sát": "Trạm Bắc",
      "Cứu Hộ": "Trạm Nam"
    },
    explanation: "Cứu Hỏa ở Trạm Đông. Cứu Thương ở Trạm Tây. Xe Cảnh Sát không ở Trạm Nam nên ở Trạm Bắc. Còn lại Xe Cứu Hộ ở Trạm Nam."
  },
  {
    id: "lg-10",
    title: "Vụ Án Trộm Bánh Quy Trong Bếp",
    difficulty: 4,
    story: "Hộp bánh quy trong bếp bị ăn mất một nửa vào các khung giờ: 8h sáng, 10h trưa, 2h chiều và 4h chiều. Bốn bạn mèo Miu, Mun, Mướp, Vàng bị nghi vấn.",
    rows: { name: "Mèo", items: ["Miu", "Mun", "Mướp", "Vàng"] },
    cols: { name: "Khung giờ", items: ["8h sáng", "10h trưa", "2h chiều", "4h chiều"] },
    clues: [
      "1. Mèo Miu ngủ nướng đến tận trưa mới dậy nên không thể ăn bánh lúc 8h sáng hay 10h trưa.",
      "2. Mèo Mun dậy sớm nhất nhà cùng lúc bình minh và lén vào bếp lúc 8h sáng.",
      "3. Mèo Mướp vào bếp lúc chiều muộn khi trời chuẩn bị chập tối (4h chiều).",
      "4. Mèo Vàng ăn bánh vào khung giờ còn lại giữa buổi sáng."
    ],
    solution: {
      "Miu": "2h chiều",
      "Mun": "8h sáng",
      "Mướp": "4h chiều",
      "Vàng": "10h trưa"
    },
    explanation: "Mun vào lúc 8h sáng. Mướp vào lúc 4h chiều. Miu dậy sau trưa nên vào lúc 2h chiều. Vàng vào lúc 10h trưa."
  },
  {
    id: "lg-11",
    title: "Bốn Món Quà Sinh Nhật Bí Mật",
    difficulty: 5,
    story: "Trong tiệc sinh nhật Huy, 4 hộp quà được gói bằng 4 dải nơ màu: Đỏ, Xanh, Tím, Vàng. Bên trong là 4 món quà: Kính Thiên Văn, Xe Đua Điều Khiển, Bộ Lego Lâu Đài và Bàn Cờ Vua Nam Châm.",
    rows: { name: "Món quà", items: ["Kính Thiên Văn", "Xe Đua", "Lego Lâu Đài", "Cờ Vua"] },
    cols: { name: "Nơ gói quà", items: ["Nơ Đỏ", "Nơ Xanh", "Nơ Tím", "Nơ Vàng"] },
    clues: [
      "1. Kính Thiên Văn được cất trong chiếc hộp lớn nhất thắt chiếc Nơ Tím kỳ ảo của bầu trời đêm.",
      "2. Chiếc Xe Đua tốc độ cao mang phong cách mạnh mẽ gắn chiếc Nơ Đỏ rực rỡ.",
      "3. Bàn Cờ Vua bằng gỗ không gắn nơ Vàng.",
      "4. Bộ Lego Lâu Đài hoàng gia gắn dải nơ quý phái còn lại."
    ],
    solution: {
      "Kính Thiên Văn": "Nơ Tím",
      "Xe Đua": "Nơ Đỏ",
      "Lego Lâu Đài": "Nơ Vàng",
      "Cờ Vua": "Nơ Xanh"
    },
    explanation: "Kính Thiên Văn mang Nơ Tím. Xe Đua mang Nơ Đỏ. Cờ Vua không mang Nơ Vàng nên mang Nơ Xanh. Còn lại Lego mang Nơ Vàng."
  },
  {
    id: "lg-12",
    title: "Thám Tử Lớp 4: Ai Giữ Chìa Khóa Kho Báu?",
    difficulty: 5,
    story: "Bốn chìa khóa bằng 4 chất liệu: Đồng, Bạc, Vàng và Kim Cương mở 4 căn phòng bí mật: Phòng Sách Cổ, Phòng Thiên Văn, Phòng Báu Vật và Phòng Thực Nghiệm.",
    rows: { name: "Căn phòng", items: ["Sách Cổ", "Thiên Văn", "Báu Vật", "Thực Nghiệm"] },
    cols: { name: "Chìa khóa", items: ["Chìa Đồng", "Chìa Bạc", "Chìa Vàng", "Chìa Kim Cương"] },
    clues: [
      "1. Phòng Báu Vật chứa những viên ngọc quý nhất được bảo vệ bởi chiếc Chìa Kim Cương sắc bén.",
      "2. Phòng Sách Cổ nghìn năm tuổi dùng chiếc chìa khóa cổ xưa nhất bằng Đồng.",
      "3. Phòng Thực Nghiệm hóa học hiện đại không dùng Chìa Bạc.",
      "4. Phòng Thiên Văn dùng chiếc chìa khóa lấp lánh như ánh trăng (Chìa Bạc)."
    ],
    solution: {
      "Sách Cổ": "Chìa Đồng",
      "Thiên Văn": "Chìa Bạc",
      "Báu Vật": "Chìa Kim Cương",
      "Thực Nghiệm": "Chìa Vàng"
    },
    explanation: "Phòng Báu Vật dùng Chìa Kim Cương. Phòng Sách Cổ dùng Chìa Đồng. Phòng Thiên Văn dùng Chìa Bạc. Phòng Thực Nghiệm dùng Chìa Vàng."
  },
  {
    id: "lg-13",
    title: "Bốn Bạn Và Bốn Loài Hoa Biểu Tượng",
    difficulty: 5,
    story: "Huy, Mai, Lan, Cúc trồng 4 loài hoa biểu tượng cho 4 đức tính: Hoa Hướng Dương (Lạc quan), Hoa Sen (Thanh khiết), Hoa Hồng (Dũng cảm), Hoa Phong Lan (Tinh tế).",
    rows: { name: "Bạn nhỏ", items: ["Huy", "Mai", "Lan", "Cúc"] },
    cols: { name: "Loài hoa", items: ["Hướng Dương", "Hoa Sen", "Hoa Hồng", "Phong Lan"] },
    clues: [
      "1. Bạn Lan có tên trùng hoa nhưng tuyệt đối không trồng hoa Lan mà trồng loài hoa luôn hướng về ánh mặt trời (Hướng Dương).",
      "2. Bạn Mai thích vẻ đẹp thanh tao của loài hoa mọc giữa hồ nước (Hoa Sen).",
      "3. Bạn Huy có tính cách dũng cảm, kiên cường và trồng Hoa Hồng có gai nhọn bảo vệ.",
      "4. Bạn Cúc chăm sóc loài hoa còn lại nở rực rỡ trong vườn."
    ],
    solution: {
      "Huy": "Hoa Hồng",
      "Mai": "Hoa Sen",
      "Lan": "Hướng Dương",
      "Cúc": "Phong Lan"
    },
    explanation: "Lan trồng Hướng Dương. Mai trồng Hoa Sen. Huy trồng Hoa Hồng dũng cảm. Cúc trồng Phong Lan."
  },
  {
    id: "lg-14",
    title: "Cuộc Đua Ca Nô Trên Sông Lam",
    difficulty: 5,
    story: "Bốn chiếc ca nô mang số 1, 2, 3, 4 được sơn 4 màu: Đỏ, Xanh Biển, Trắng và Cam tham gia giải vô địch thiếu nhi.",
    rows: { name: "Ca nô", items: ["Ca nô 1", "Ca nô 2", "Ca nô 3", "Ca nô 4"] },
    cols: { name: "Màu sơn", items: ["Sơn Đỏ", "Sơn Xanh", "Sơn Trắng", "Sơn Cam"] },
    clues: [
      "1. Ca nô số 1 mang màu sơn của ngọn lửa (Sơn Đỏ).",
      "2. Ca nô số chẵn lớn nhất (Ca nô 4) được sơn màu trắng như tuyết.",
      "3. Ca nô số 2 không được sơn màu Cam tươi sáng.",
      "4. Ca nô số 3 rẽ sóng với màu sắc rực rỡ còn lại."
    ],
    solution: {
      "Ca nô 1": "Sơn Đỏ",
      "Ca nô 2": "Sơn Xanh",
      "Ca nô 3": "Sơn Cam",
      "Ca nô 4": "Sơn Trắng"
    },
    explanation: "Ca nô 1 Sơn Đỏ. Ca nô 4 Sơn Trắng. Ca nô 2 không sơn Cam nên phải sơn Xanh. Ca nô 3 sơn Cam."
  },
  {
    id: "lg-15",
    title: "Bốn Nhà Khoa Học Nhí Và Bốn Giải Thưởng",
    difficulty: 5,
    story: "Triết, Khoa, Hoàng, Long nhận 4 giải thưởng đặc biệt: Sáng Tạo Nhất, Kỹ Thuật Tối Ưu, Trình Bày Ấn Tượng và Thân Thiện Môi Trường.",
    rows: { name: "Nhà khoa học", items: ["Triết", "Khoa", "Hoàng", "Long"] },
    cols: { name: "Giải thưởng", items: ["Sáng Tạo", "Kỹ Thuật", "Trình Bày", "Môi Trường"] },
    clues: [
      "1. Triết thiết kế dự án lọc nước tự nhiên bằng vỏ trấu và nhận giải Thân Thiện Môi Trường.",
      "2. Khoa lập trình robot né tránh vật cản tự động và nhận giải Kỹ Thuật Tối Ưu.",
      "3. Hoàng có bài thuyết trình lưu loát, tự tin trước hội đồng giám khảo và nhận giải Trình Bày Ấn Tượng.",
      "4. Long có ý tưởng độc đáo phá cách và nhận giải thưởng danh giá còn lại."
    ],
    solution: {
      "Triết": "Môi Trường",
      "Khoa": "Kỹ Thuật",
      "Hoàng": "Trình Bày",
      "Long": "Sáng Tạo"
    },
    explanation: "Triết nhận giải Môi Trường. Khoa nhận giải Kỹ Thuật. Hoàng nhận giải Trình Bày. Long nhận giải Sáng Tạo."
  },

  // --- CÁC VỤ ÁN MỚI BỔ SUNG (BÀI 16 ĐẾN 25) ---
  {
    id: "lg-16",
    title: "Vụ Án Mật Mã Trong Kim Tự Tháp",
    difficulty: 3,
    story: "Bốn nhà khảo cổ nhí Huy, Emma, Lucas và Maya khai quật được 4 cổ vật Ai Cập quý giá: Bọ Hung Vàng, Mặt Nạ Pharaoh, Phiến Đá Rosetta và Chiếc Trượng Bạc.",
    rows: { name: "Nhà khảo cổ", items: ["Huy", "Emma", "Lucas", "Maya"] },
    cols: { name: "Cổ vật", items: ["Bọ Hung Vàng", "Mặt Nạ", "Phiến Đá", "Trượng Bạc"] },
    clues: [
      "1. Huy tìm thấy phiến đá ghi các ký tự tượng hình cổ đại nghìn năm (Phiến Đá Rosetta).",
      "2. Lucas phát hiện biểu tượng con bọ hung bằng vàng nguyên khối lấp lánh dưới cát.",
      "3. Maya không cầm chiếc trượng bạc quyền lực của vị đại tế tư.",
      "4. Emma vô cùng kinh ngạc khi mở nắp quan tài và nhìn thấy chiếc Mặt Nạ bằng vàng rực rỡ."
    ],
    solution: {
      "Huy": "Phiến Đá",
      "Emma": "Mặt Nạ",
      "Lucas": "Bọ Hung Vàng",
      "Maya": "Trượng Bạc"
    },
    explanation: "Huy tìm Phiến Đá. Lucas tìm Bọ Hung Vàng. Emma tìm Mặt Nạ. Maya tìm Trượng Bạc."
  },
  {
    id: "lg-17",
    title: "Giải Vô Địch Cờ Vua Thiếu Nhi",
    difficulty: 3,
    story: "Bốn đại kiện tướng nhí Triết, Tuấn, Đức, Long đại diện cho 4 câu lạc bộ mang 4 màu quân cờ may mắn: Quân Trắng, Quân Đen, Quân Đỏ và Quân Lam.",
    rows: { name: "Kỳ thủ", items: ["Triết", "Tuấn", "Đức", "Long"] },
    cols: { name: "Màu quân cờ", items: ["Quân Trắng", "Quân Đen", "Quân Đỏ", "Quân Lam"] },
    clues: [
      "1. Triết luôn giành quyền đi tiên trong ván đấu khai mạc nhờ cầm bộ Quân Trắng tinh khôi.",
      "2. Tuấn là bậc thầy phòng ngự phản công với bộ Quân Đen huyền bí.",
      "3. Long rất thích màu của biển khơi và chọn bộ Quân Lam.",
      "4. Đức mang tinh thần thi đấu bốc lửa cùng bộ quân còn lại."
    ],
    solution: {
      "Triết": "Quân Trắng",
      "Tuấn": "Quân Đen",
      "Đức": "Quân Đỏ",
      "Long": "Quân Lam"
    },
    explanation: "Triết cầm Quân Trắng. Tuấn cầm Quân Đen. Long cầm Quân Lam. Đức cầm Quân Đỏ."
  },
  {
    id: "lg-18",
    title: "Trạm Cứu Hộ Động Vật Hoang Dã",
    difficulty: 3,
    story: "Bốn bác sĩ thú y nhí Huy, Hà, Nam, Linh chăm sóc 4 bạn động vật đang hồi phục sức khỏe: Hổ Con, Gấu Trúc, Đại Bàng và Rùa Biển.",
    rows: { name: "Bác sĩ nhí", items: ["Huy", "Hà", "Nam", "Linh"] },
    cols: { name: "Động vật", items: ["Hổ Con", "Gấu Trúc", "Đại Bàng", "Rùa Biển"] },
    clues: [
      "1. Huy băng bó vết thương ở cánh cho chú Đại Bàng chúa tể bầu trời.",
      "2. Linh cho chú Gấu Trúc đáng yêu ăn những ngọn trúc xanh non mỗi ngày.",
      "3. Hà chăm sóc bể nước biển ấm áp cho chú Rùa Biển khổng lồ.",
      "4. Nam can đảm và nhẹ nhàng vuốt ve bạn động vật dũng mãnh còn lại."
    ],
    solution: {
      "Huy": "Đại Bàng",
      "Hà": "Rùa Biển",
      "Nam": "Hổ Con",
      "Linh": "Gấu Trúc"
    },
    explanation: "Huy chăm Đại Bàng. Linh chăm Gấu Trúc. Hà chăm Rùa Biển. Nam chăm Hổ Con."
  },
  {
    id: "lg-19",
    title: "Vụ Án Chiếc Bánh Sinh Nhật Bị Ăn Vụng",
    difficulty: 4,
    story: "Một chiếc bánh kem 4 tầng có 4 vị: Dâu Tây, Sô-cô-la, Vani, Trà Xanh bị 4 bạn nhỏ nếm thử trước bữa tiệc: Triết, Cún Bông, Mèo Mướp, Chú Vẹt.",
    rows: { name: "Nhân vật", items: ["Triết", "Cún Bông", "Mèo Mướp", "Chú Vẹt"] },
    cols: { name: "Vị bánh", items: ["Dâu Tây", "Sô-cô-la", "Vani", "Trà Xanh"] },
    clues: [
      "1. Cún Bông tuyệt đối không ăn món có chứa cacao (Sô-cô-la) vì rất nguy hiểm cho loài cún, bạn ấy chọn tầng bánh màu trắng kem Vani ngọt dịu.",
      "2. Chú Vẹt thích mổ những quả mọng màu đỏ tươi (vị Dâu Tây).",
      "3. Mèo Mướp không thích vị trà đắng chát của lá Trà Xanh.",
      "4. Triết rất mê vị thanh mát của bột Trà Xanh Nhật Bản."
    ],
    solution: {
      "Triết": "Trà Xanh",
      "Cún Bông": "Vani",
      "Mèo Mướp": "Sô-cô-la",
      "Chú Vẹt": "Dâu Tây"
    },
    explanation: "Cún Bông ăn Vani. Vẹt ăn Dâu Tây. Triết mê Trà Xanh. Còn lại Mèo Mướp ăn Sô-cô-la."
  },
  {
    id: "lg-20",
    title: "Hội Thi Sáng Chế Robot Tương Lai",
    difficulty: 4,
    story: "Bốn đội nghiên cứu chế tạo robot chạy bằng 4 nguồn năng lượng sạch: Pin Mặt Trời, Tua-bin Gió, Thủy Lực Nước và Địa Nhiệt.",
    rows: { name: "Đội sáng chế", items: ["Đội Alpha", "Đội Beta", "Đội Gamma", "Đội Delta"] },
    cols: { name: "Năng lượng", items: ["Mặt Trời", "Gió", "Thủy Lực", "Địa Nhiệt"] },
    clues: [
      "1. Đội Alpha gắn những tấm pin quang điện màu xanh thẫm trên lưng robot để hứng ánh sáng Mặt Trời.",
      "2. Đội Beta thiết kế cánh quạt quay tít để thu nhận động lực từ Gió biển.",
      "3. Đội Delta không dùng năng lượng Thủy Lực từ dòng nước chảy.",
      "4. Đội Gamma dùng áp lực dòng nước ngầm (Thủy Lực) để đẩy các pít-tông nâng vật nặng."
    ],
    solution: {
      "Đội Alpha": "Mặt Trời",
      "Đội Beta": "Gió",
      "Đội Gamma": "Thủy Lực",
      "Đội Delta": "Địa Nhiệt"
    },
    explanation: "Alpha dùng Mặt Trời. Beta dùng Gió. Gamma dùng Thủy Lực. Delta dùng Địa Nhiệt."
  },
  {
    id: "lg-21",
    title: "Bí Mật Bốn Phi Thuyền Thám Hiểm Vũ Trụ",
    difficulty: 4,
    story: "Bốn con tàu thám hiểm không gian: Huy-1, Apollo, Vostok và Pioneer bay tới 4 hành tinh: Sao Hỏa, Sao Mộc, Sao Thổ và Sao Kim.",
    rows: { name: "Phi thuyền", items: ["Huy-1", "Apollo", "Vostok", "Pioneer"] },
    cols: { name: "Hành tinh", items: ["Sao Hỏa", "Sao Mộc", "Sao Thổ", "Sao Kim"] },
    clues: [
      "1. Tàu Huy-1 đáp xuống bề mặt hành tinh Đỏ phủ đầy cát bụi oxit sắt (Sao Hỏa).",
      "2. Tàu Pioneer bay xuyên qua chiếc vành đai băng lộng lẫy nhất hệ mặt trời của Sao Thổ.",
      "3. Tàu Apollo không bay tới hành tinh khí khổng lồ có Vết Đỏ Lớn (Sao Mộc).",
      "4. Tàu Vostok nghiên cứu hành tinh lớn nhất hệ mặt trời là Sao Mộc."
    ],
    solution: {
      "Huy-1": "Sao Hỏa",
      "Apollo": "Sao Kim",
      "Vostok": "Sao Mộc",
      "Pioneer": "Sao Thổ"
    },
    explanation: "Huy-1 đến Sao Hỏa. Pioneer đến Sao Thổ. Vostok nghiên cứu Sao Mộc. Apollo đến Sao Kim."
  },
  {
    id: "lg-22",
    title: "Cuộc Thi Siêu Đầu Bếp Nhí MasterChef",
    difficulty: 4,
    story: "Bốn bạn Triết, Liam, Sofia và Ken trổ tài nấu 4 món đặc sản nổi tiếng thế giới: Phở Bò Việt Nam, Pizza Ý, Sushi Nhật Bản và Bánh Tacos Mexico.",
    rows: { name: "Đầu bếp nhí", items: ["Triết", "Liam", "Sofia", "Ken"] },
    cols: { name: "Món ăn", items: ["Phở Bò", "Pizza", "Sushi", "Bánh Tacos"] },
    clues: [
      "1. Triết tự hào nấu nồi nước dùng thơm lừng hương hồi quế của món Phở Bò truyền thống quê hương.",
      "2. Ken là bạn nhỏ đến từ xứ sở hoa anh đào và khéo léo cuộn những miếng cơm Sushi cá hồi tươi rói.",
      "3. Sofia thích nướng bánh bột mì với phô mai mozzarella kéo sợi (Pizza Ý).",
      "4. Liam trổ tài chế biến món bánh kẹp giòn rụm của vùng Trung Mỹ còn lại."
    ],
    solution: {
      "Triết": "Phở Bò",
      "Liam": "Bánh Tacos",
      "Sofia": "Pizza",
      "Ken": "Sushi"
    },
    explanation: "Triết nấu Phở Bò. Ken làm Sushi. Sofia làm Pizza. Liam làm Bánh Tacos."
  },
  {
    id: "lg-23",
    title: "Vụ Án Bức Tranh Nghệ Thuật Giấu Kín",
    difficulty: 5,
    story: "Bốn bức tranh đạt giải đặc biệt được vẽ trên 4 chất liệu nghệ thuật: Tranh Lụa, Tranh Sơn Dầu, Tranh Thủy Mặc và Tranh Khắc Gỗ bởi 4 họa sĩ nhí: Huy, Quỳnh, Khang, Trâm.",
    rows: { name: "Họa sĩ nhí", items: ["Huy", "Quỳnh", "Khang", "Trâm"] },
    cols: { name: "Chất liệu tranh", items: ["Tranh Lụa", "Sơn Dầu", "Thủy Mặc", "Khắc Gỗ"] },
    clues: [
      "1. Khang dùng mực tàu đen tuyền và bút lông để vẽ dãy núi mờ sương (Tranh Thủy Mặc).",
      "2. Huy vẽ phong cảnh mùa thu rực rỡ bằng các vệt màu dày dặn của chất liệu Sơn Dầu.",
      "3. Trâm không dùng dao điêu khắc trên các bản gỗ lim.",
      "4. Quỳnh khéo léo dệt và vẽ những nét cọ mềm mại trên dải lụa tơ tằm óng ả."
    ],
    solution: {
      "Huy": "Sơn Dầu",
      "Quỳnh": "Tranh Lụa",
      "Khang": "Thủy Mặc",
      "Trâm": "Khắc Gỗ"
    },
    explanation: "Khang vẽ Thủy Mặc. Huy vẽ Sơn Dầu. Quỳnh vẽ Tranh Lụa. Trâm vẽ Khắc Gỗ."
  },
  {
    id: "lg-24",
    title: "Chuyến Thám Hiểm Rừng Nguyên Sinh Amazon",
    difficulty: 5,
    story: "Bốn nhà thám hiểm Triết, David, Elena, Tom mang theo 4 trang bị sinh tồn quan trọng: La Bàn Laze, Dây Leo Dù, Bình Lọc Nước Nano và Bộ Đàm Vệ Tinh.",
    rows: { name: "Nhà thám hiểm", items: ["Triết", "David", "Elena", "Tom"] },
    cols: { name: "Trang bị", items: ["La Bàn", "Dây Leo", "Bình Lọc Nước", "Bộ Đàm"] },
    clues: [
      "1. Elena chịu trách nhiệm liên lạc khẩn cấp với trực thăng cứu hộ bằng Bộ Đàm Vệ Tinh.",
      "2. Triết dẫn đường băng qua rừng rậm bằng chiếc La Bàn Laze siêu chuẩn xác.",
      "3. Tom phụ trách nguồn nước uống tinh khiết cho cả đoàn bằng Bình Lọc Nước Nano.",
      "4. David phụ trách việc vượt thác ghềnh hiểm trở với trang bị leo núi còn lại."
    ],
    solution: {
      "Triết": "La Bàn",
      "David": "Dây Leo",
      "Elena": "Bộ Đàm",
      "Tom": "Bình Lọc Nước"
    },
    explanation: "Elena mang Bộ Đàm. Triết mang La Bàn. Tom mang Bình Lọc Nước. David mang Dây Leo."
  },
  {
    id: "lg-25",
    title: "Bí Ẩn Mật Thư Của Điệp Viên Nhí 007",
    difficulty: 5,
    story: "Bốn điệp viên nhí mang mật danh: Rồng Lửa, Sói Băng, Chim Ưng, Cá Mập nhận lệnh gặp giao mật thư tại 4 địa điểm bí mật: Tháp Đồng Hồ, Bến Cảng, Nhà Ga, Công Viên.",
    rows: { name: "Mật danh", items: ["Rồng Lửa", "Sói Băng", "Chim Ưng", "Cá Mập"] },
    cols: { name: "Địa điểm", items: ["Tháp Đồng Hồ", "Bến Cảng", "Nhà Ga", "Công Viên"] },
    clues: [
      "1. Điệp viên Cá Mập thích môi trường sông nước và nhận mật thư tại Bến Cảng tấp nập tàu thuyền.",
      "2. Điệp viên Chim Ưng có tầm nhìn từ trên cao và đứng đợi tại đỉnh Tháp Đồng Hồ trung tâm thành phố.",
      "3. Điệp viên Sói Băng không đến khu vực có đường ray xe lửa (Nhà Ga).",
      "4. Điệp viên Rồng Lửa bí mật lên chuyến tàu tốc hành lúc nửa đêm tại Nhà Ga ngầm."
    ],
    solution: {
      "Rồng Lửa": "Nhà Ga",
      "Sói Băng": "Công Viên",
      "Chim Ưng": "Tháp Đồng Hồ",
      "Cá Mập": "Bến Cảng"
    },
    explanation: "Cá Mập ở Bến Cảng. Chim Ưng ở Tháp Đồng Hồ. Rồng Lửa ở Nhà Ga. Sói Băng ở Công Viên."
  }
];
