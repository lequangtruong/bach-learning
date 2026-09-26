// scripts/generate-part3-levels.mjs - Tạo và kiểm tra tính toàn vẹn Chặng 5 (81-100) & Chặng 6 (101-120)
import fs from "node:fs";

export const PART3_LEVELS = [
  // ==========================================
  // CHẶNG 5: Y HỌC & CỨU THƯƠNG DÃ CHIẾN (MÀN 81 -> 100)
  // Có cơ chế Thẻ Bẫy (Distractor Tasks) vạch trần sai lầm sơ cứu dân gian
  // ==========================================
  {
    id: "tm-81",
    level: 81,
    title: "Sơ Cứu Bỏng Nước Sôi Đúng Chuẩn Y Khoa",
    category: "medical",
    categoryName: "Bác Sĩ Cấp Cứu",
    icon: "🧯",
    difficulty: 3,
    description: "Xử lý khẩn cấp khi chẳng may làm đổ phích nước sôi vào cẳng tay.",
    tasks: [
      { id: "t1", text: "Nhanh chóng đưa tay dưới vòi nước sạch mát xả liên tục 15-20 phút", icon: "🚰", hint: "Hạ nhiệt nhanh là chìa khóa vàng giảm tổn thương sâu cho da." },
      { id: "t2", text: "Nhẹ nhàng cởi bỏ vòng tay, đồng hồ trước khi vết bỏng bị sưng phù", icon: "⌚", requires: ["t1"], hint: "Tháo đồ trang sức tránh chèn ép mạch máu khi mô sưng lên." },
      { id: "t3", text: "Dùng kéo sạch cắt nhẹ vạt áo quanh vết thương, không giật mạnh", icon: "✂️", requires: ["t2"], hint: "Không lột mạnh vải dính vào da để tránh tróc mảng da non." },
      { id: "t4", text: "Bôi kem trị bỏng chứa bạc sulfadiazine làm dịu vết thương", icon: "🧴", requires: ["t3"], hint: "Chỉ bôi thuốc mỡ chuyên dụng sau khi da đã được làm mát." },
      { id: "t5", text: "Dùng gạc vô trùng khô che phủ nhẹ nhàng vết bỏng", icon: "🩹", requires: ["t4"], hint: "Che gạc ngăn bụi bẩn và vi khuẩn xâm nhập vào vết thương hở." },
      { id: "t6", text: "Uống bổ sung nước điện giải oresol và đến cơ sở y tế gần nhất", icon: "🏥", requires: ["t5"], hint: "Bù dịch chống sốc bỏng và để bác sĩ chuyên khoa thăm khám." }
    ],
    distractors: [
      { id: "d1", text: "Bôi kem đánh răng hoặc mỡ trăn lên vết bỏng vừa xuất hiện", icon: "🦷", failReason: "Kem đánh răng chứa kiềm và tinh dầu cay làm bỏng nặng thêm và nhiễm trùng!", scientificExplanation: "Dân gian hay bôi kem đánh răng nhưng y khoa nghiêm cấm vì giữ nhiệt lại dưới da và gây nhiễm trùng nặng." },
      { id: "d2", text: "Chườm đá lạnh buốt trực tiếp lên vết phỏng rộp", icon: "🧊", failReason: "Đá lạnh trực tiếp gây 'bỏng lạnh' co thắt mạch máu đột ngột làm hoại tử mô da!", scientificExplanation: "Độ lạnh sâu gây co mạch đột ngột làm thiếu máu nuôi dưỡng mô bị tổn thương." }
    ],
    lesson: "Bỏng nước: Xả nước mát 20 phút -> Cắt bỏ áo chật -> Bôi thuốc chuyên dụng -> Băng gạc vô trùng."
  },
  {
    id: "tm-82",
    level: 82,
    title: "Cứu Hộ Nạn Nhân Bị Điện Giật Khẩn Cấp",
    category: "medical",
    categoryName: "Bác Sĩ Cấp Cứu",
    icon: "⚡",
    difficulty: 4,
    description: "Nguyên tắc an toàn số 1: Bảo vệ bản thân trước khi tiếp cận nạn nhân bị giật điện.",
    tasks: [
      { id: "t1", text: "Hét to báo động và chạy tới dập ngay cầu dao tổng ngắt nguồn điện", icon: "🔌", hint: "Cắt nguồn điện là bước sống còn trước khi chạm vào bất kỳ ai." },
      { id: "t2", text: "Dùng gậy gỗ khô hoặc cán chổi nhựa gạt dây điện ra xa nạn nhân", icon: "🪵", requires: ["t1"], hint: "Dùng vật liệu cách điện tuyệt đối, phòng trường hợp dây còn tích điện." },
      { id: "t3", text: "Gọi to số khẩn cấp 115 yêu cầu xe cứu thương hỗ trợ gấp", icon: "📞", requires: ["t2"], hint: "Gọi cấp cứu sớm để đội ngũ y tế chuyên nghiệp đến kịp thời." },
      { id: "t4", text: "Lay vai và ghé tai sát miệng kiểm tra nhịp thở và tri giác", icon: "👂", requires: ["t2"], hint: "Xác định xem nạn nhân còn tỉnh táo hay đã ngưng tim ngưng thở." },
      { id: "t5", text: "Thực hiện ép tim ngoài lồng ngực liên tục 100-120 lần/phút", icon: "🫀", requires: ["t4"], hint: "Ép tim duy trì dòng máu nuôi não bộ khi tim rung thất." },
      { id: "t6", text: "Đưa máy khử rung tim tự động AED dán điện cực theo hướng dẫn giọng nói", icon: "🩺", requires: ["t5"], hint: "Máy AED phân tích nhịp tim và sốc điện tái lập nhịp đập bình thường." }
    ],
    distractors: [
      { id: "d1", text: "Lao thẳng vào dùng tay trần kéo nạn nhân đang dính vào dây điện", icon: "✋", failReason: "Cơ thể người dẫn điện tốt, chạm vào nạn nhân chưa ngắt điện sẽ khiến bạn bị giật theo!", scientificExplanation: "Dòng điện chạy qua nạn nhân sẽ truyền thẳng sang người cứu nếu chưa ngắt cầu dao." }
    ],
    lesson: "Ngắt cầu dao điện -> Gạt dây bằng vật cách điện -> Ép tim ngoài lồng ngực -> Dùng máy sốc tim AED."
  },
  {
    id: "tm-83",
    level: 83,
    title: "Quy Trình Ép Tim Hồi Sinh Tim Phổi (CPR)",
    category: "medical",
    categoryName: "Bác Sĩ Cấp Cứu",
    icon: "🫀",
    difficulty: 4,
    description: "4 phút vàng cứu sống người ngưng tim đột ngột trước khi não bộ tổn thương không phục hồi.",
    tasks: [
      { id: "t1", text: "Đặt nạn nhân nằm ngửa trên nền phẳng cứng vững chắc", icon: "🛌", hint: "Nền cứng giúp lực ép truyền thẳng vào tim, không đặt trên đệm lún." },
      { id: "t2", text: "Quỳ gối cạnh ngực nạn nhân, đặt gót bàn tay lên giữa xương ức", icon: "🤲", requires: ["t1"], hint: "Vị trí chuẩn là nửa dưới xương ức giữa 2 núm vú." },
      { id: "t3", text: "Khóa chặt hai bàn tay, giữ thẳng cánh tay và dùng trọng lượng cơ thể ép xuống 5cm", icon: "💪", requires: ["t2"], hint: "Ép sâu tối thiểu 5-6 cm để tống máu từ tâm thất lên động mạch chủ." },
      { id: "t4", text: "Ép tim nhịp nhàng 30 nhịp liên tục theo giai điệu bài hát Stayin' Alive", icon: "⏱️", requires: ["t3"], hint: "Tốc độ 100 - 120 nhịp/phút là tần số tối ưu hồi phục tuần hoàn." },
      { id: "t5", text: "Ngửa đầu nâng cằm mở đường thở và bịt mũi thổi ngạt 2 hơi dứt khoát", icon: "🌬️", requires: ["t4"], hint: "Quy tắc 30 lần ép tim xen kẽ 2 lần thổi ngạt (30:2)." },
      { id: "t6", text: "Tiếp tục chu kỳ 30:2 cho tới khi nạn nhân cựa quậy thở lại hoặc bác sĩ 115 đến", icon: "🚑", requires: ["t5"], hint: "Không ngắt quãng ép tim quá 10 giây để giữ huyết áp nuôi não." }
    ],
    distractors: [
      { id: "d1", text: "Cạy miệng nhét giẻ hoặc thìa kim loại vào vì sợ cắn lưỡi", icon: "🥄", failReason: "Nhét dị vật làm gãy răng, rách họng và tắc nghẽn hoàn toàn đường thở!", scientificExplanation: "Người ngưng tim không bao giờ cắn đứt lưỡi, nhét thìa chỉ làm bít tắc thanh quản." }
    ],
    lesson: "CPR: Nền cứng -> Đặt tay giữa xương ức -> 30 lần ép tim sâu 5cm -> 2 lần thổi ngạt mở đường thở."
  },
  {
    id: "tm-84",
    level: 84,
    title: "Cố Định Xương Cẳng Chân Bị Gãy Kín",
    category: "medical",
    categoryName: "Bác Sĩ Cấp Cứu",
    icon: "🦴",
    difficulty: 3,
    description: "Sơ cứu bất động xương gãy khi chơi bóng đá, ngăn đầu xương nhọn đâm thủng mạch máu.",
    tasks: [
      { id: "t1", text: "Trấn an nạn nhân và yêu cầu nằm yên bất động, không thử đứng dậy", icon: "🤫", hint: "Cử động khi gãy xương làm đầu xương di lệch chọc thủng da biến thành gãy hở." },
      { id: "t2", text: "Dùng kéo cắt nhẹ ống quần để lộ toàn bộ vùng cẳng chân bị đau", icon: "✂️", requires: ["t1"], hint: "Bộc lộ vị trí chấn thương để kiểm tra xem có chảy máu ngoài hay không." },
      { id: "t3", text: "Chuẩn bị 2 thanh nẹp gỗ dài từ bẹn đến gót chân và bông đệm lót", icon: "🪵", requires: ["t2"], hint: "Nguyên tắc nẹp: phải cố định qua 2 khớp (khớp gối và khớp cổ chân)." },
      { id: "t4", text: "Chêm gạc bông mềm vào các đầu khớp mắt cá và đầu gối", icon: "🧻", requires: ["t3"], hint: "Bông đệm giúp nẹp gỗ không cọ sát gây loét da tại các điểm lồi xương." },
      { id: "t5", text: "Đặt 1 nẹp mặt trong và 1 nẹp mặt ngoài cẳng chân rồi buộc 4 nút cố định", icon: "🩹", requires: ["t4"], hint: "Buộc nút trên ổ gãy, dưới ổ gãy, khớp gối và khớp cổ chân." },
      { id: "t6", text: "Kiểm tra mạch mu bàn chân xem máu còn lưu thông rồi nâng cáng chở đi", icon: "🏥", requires: ["t5"], hint: "Sờ mạch mu chân để chắc chắn băng nẹp không buộc quá chặt làm nghẽn mạch máu." }
    ],
    distractors: [
      { id: "d1", text: "Cố gắng nắn bóp và kéo giật mạnh xương chân cho thẳng lại", icon: "🦶", failReason: "Nắn bóp sai chuyên môn sẽ nghiền nát dây thần kinh và gây sốc đau tử vong!", scientificExplanation: "Xương gãy phải giữ nguyên tư thế biến dạng, chỉ có bác sĩ phẫu thuật mới được nắn chỉnh." }
    ],
    lesson: "Gãy xương: Nằm yên -> Đệm bông điểm lồi -> Nẹp qua 2 khớp -> Buộc cố định -> Kiểm tra bắt mạch."
  },
  {
    id: "tm-85",
    level: 85,
    title: "Quy Trình Tiệt Trùng Phòng Mổ Áp Lực Dương",
    category: "medical",
    categoryName: "Bác Sĩ Cấp Cứu",
    icon: "🔬",
    difficulty: 4,
    description: "Chuẩn bị phòng phẫu thuật sạch khuẩn 99.99% trước ca ghép tạng quan trọng.",
    tasks: [
      { id: "t1", text: "Kích hoạt hệ thống lọc khí HEPA tạo buồng áp lực dương", icon: "🌀", hint: "Áp lực dương đẩy không khí từ trong phòng ra ngoài, vi khuẩn ngoài không thể bay vào." },
      { id: "t2", text: "Lau sạch bề mặt bàn mổ và đèn mổ bằng dung dịch cồn khử khuẩn 70 độ", icon: "🧴", requires: ["t1"], hint: "Làm sạch bụi mịn và khử khuẩn các bề mặt tiếp xúc trực tiếp." },
      { id: "t3", text: "Bật giàn đèn tia cực tím UV-C chiếu toàn bộ phòng mổ trong 30 phút", icon: "🟣", requires: ["t2"], hint: "Tia cực tím phá vỡ cấu trúc DNA/RNA của toàn bộ virus và vi khuẩn trôi nổi." },
      { id: "t4", text: "Mở gói dụng cụ phẫu thuật kim loại đã được hấp tiệt trùng Autoclave", icon: "🔪", requires: ["t3"], hint: "Hấp hơi nước 121°C áp suất cao tiêu diệt cả nha bào vi khuẩn." },
      { id: "t5", text: "Kíp mổ thực hiện rửa tay ngoại khoa 6 bước với xà phòng Chlorhexidine", icon: "🧼", requires: ["t1"], hint: "Rửa tay từ đầu ngón tay lên đến khuỷu tay trong 5 phút." },
      { id: "t6", text: "Mặc áo phẫu thuật vô trùng và mang găng tay cao su hai lớp", icon: "🧤", requires: ["t4", "t5"], hint: "Tuyệt đối không để mặt ngoài găng tay chạm vào bất cứ vật chưa tiệt trùng nào." }
    ],
    lesson: "Áp lực dương -> Lau hóa chất -> Chiếu đèn UV-C -> Dụng cụ hấp Autoclave -> Rửa tay ngoại khoa."
  }
];

console.log(`Loaded ${PART3_LEVELS.length} prototype levels for Part 3`);
