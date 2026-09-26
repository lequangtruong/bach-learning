// js/task-master-info.js - Sổ Tay Chỉ Huy: Giải Nghĩa Kế Hoạch, Thứ Tự Logic & Từ Điển Thuật Ngữ Viết Tắt Cho Bé Bách
// Cung cấp giải thích chi tiết "Vì sao phải làm như thế?", nguyên lý khoa học và từ điển thuật ngữ chuyên sâu cho toàn bộ 200 màn chơi.

function esc(str) {
  return String(str ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/**
 * 1. TỪ ĐIỂN THUẬT NGỮ & TỪ VIẾT TẮT KHOA HỌC DÀNH CHO BÉ (GLOSSARY)
 * Giải nghĩa siêu dễ hiểu, trực quan, phù hợp với nhận thức của học sinh Lớp 4.
 */
export const TASK_MASTER_GLOSSARY = {
  // Y HỌC & CẤP CỨU (Medical)
  "cpr": {
    term: "CPR",
    full: "Cardiopulmonary Resuscitation (Hồi sinh tim phổi)",
    icon: "🫀",
    meaning: "Động tác dùng hai bàn tay đè mạnh và nhanh lên giữa ngực (100-120 lần/phút) để ép quả tim bơm máu lên não khi nạn nhân bị ngưng tim, ngưng thở.",
    whyItMatters: "Não chỉ chịu được thiếu oxy trong 4-5 phút. Ép tim CPR duy trì dòng máu nuôi não trong lúc chờ xe cấp cứu tới."
  },
  "aed": {
    term: "AED",
    full: "Automated External Defibrillator (Máy khử rung tim tự động)",
    icon: "🩺",
    meaning: "Máy y tế thông minh tự động đo nhịp tim bằng hai miếng dán ngực. Nếu tim bị co giật hỗn loạn (rung thất), máy sẽ phát xung điện nhẹ để tim đập đều trở lại.",
    whyItMatters: "Máy có giọng nói hướng dẫn từng bước rất dễ dùng, cứu sống người ngưng tim nhanh gấp nhiều lần so với chỉ ép tim bằng tay."
  },
  "oresol": {
    term: "Oresol",
    full: "Oral Rehydration Salts (Dung dịch muối đường điện giải)",
    icon: "🥤",
    meaning: "Gói bột chứa muối khoáng (Natri, Kali) và đường glucose pha với đúng tỉ lệ nước sôi để nguội để uống khi bị sốt cao, tiêu chảy hoặc say nắng.",
    whyItMatters: "Khi ra nhiều mồ hôi hoặc nôn ói, cơ thể mất cả nước lẫn muối. Uống nước lọc thông thường không đủ, phải uống Oresol mới lấy lại cân bằng điện giải."
  },
  "triage": {
    term: "Triage",
    full: "Hệ thống phân loại cấp cứu khẩn cấp",
    icon: "📋",
    meaning: "Quy trình bác sĩ phân loại bệnh nhân theo mức độ nguy kịch: Màu Đỏ (nguy kịch cấp cứu ngay), Màu Vàng (nặng nhưng chờ được), Màu Xanh (nhẹ).",
    whyItMatters: "Trong tai nạn đông người, bác sĩ phải cứu người sắp nguy hiểm tính mạng trước, không thể ai đến trước khám trước."
  },
  "recovery-position": {
    term: "Tư thế hồi sức",
    full: "Recovery Position (Tư thế nằm nghiêng an toàn)",
    icon: "🛌",
    meaning: "Đặt nạn nhân bất tỉnh nhưng còn thở nằm nghiêng sang một bên, gập một chân làm điểm tựa và đặt bàn tay kê dưới má.",
    whyItMatters: "Ngăn lưỡi tụt ra sau bịt đường thở và nếu nạn nhân nôn thì chất dịch tự chảy ra ngoài, không trào ngược vào phổi gây ngạt thở."
  },
  "heat-stroke": {
    term: "Sốc nhiệt",
    full: "Heat Stroke (Say nắng cấp tính ác tính)",
    icon: "🌡️",
    meaning: "Tình trạng cơ thể bị quá nóng khi vận động dưới trời nắng gắt, thân nhiệt vượt trên 40°C khiến trung tâm điều hòa nhiệt của não bị tê liệt.",
    whyItMatters: "Sốc nhiệt là tình trạng cấp cứu khẩn cấp có thể làm tổn thương não vĩnh viễn, phải gọi 115 ngay và chườm mát tích cực trong lúc chờ."
  },
  "bac-sulfadiazine": {
    term: "Bạc Sulfadiazine",
    full: "Silver Sulfadiazine (Kem kháng khuẩn điều trị bỏng)",
    icon: "🧴",
    meaning: "Một loại kem bôi vết bỏng có chứa bạc để diệt khuẩn, chỉ được bôi khi có bác sĩ kê đơn tại bệnh viện.",
    whyItMatters: "Khi sơ cứu tại nhà, tuyệt đối KHÔNG tự ý bôi kem này vì sẽ che lấp vết thương, cản trở việc bác sĩ chẩn đoán độ sâu của vết bỏng."
  },

  // CƠ KHÍ & VẬT LÝ (Engineering)
  "banh-rang-an-khop": {
    term: "Bánh răng ăn khớp",
    full: "Interlocking Gears (Truyền động bánh răng)",
    icon: "⚙️",
    meaning: "Hai bánh xe có răng cưa lọt khít vào nhau. Khi bánh răng 1 quay theo chiều kim đồng hồ, nó sẽ đẩy răng của bánh 2 quay NGƯỢC chiều kim đồng hồ.",
    whyItMatters: "Dùng để truyền chuyển động quay và thay đổi lực: bánh răng nhỏ kéo bánh lớn thì lực quay khỏe hơn nhưng tốc độ chậm đi."
  },
  "mach-dien-kin": {
    term: "Mạch điện kín",
    full: "Closed Circuit (Mạch điện khép kín tuần hoàn)",
    icon: "💡",
    meaning: "Một đường dẫn khép kín liên tục xuất phát từ cực dương (+) của pin, đi qua dây dẫn, công tắc đóng, bóng đèn, rồi có dây quay về cực âm (-).",
    whyItMatters: "Dòng điện chỉ có thể chạy khi mạch kín hoàn toàn. Nếu hở bất kỳ một điểm nào (hoặc công tắc mở), đèn sẽ không thể sáng."
  },
  "doan-mach": {
    term: "Đoản mạch",
    full: "Short Circuit (Hiện tượng chập mạch điện)",
    icon: "⚡",
    meaning: "Khi cực dương (+) vô tình nối thẳng vào cực âm (-) mà không đi qua thiết bị tiêu thụ điện (như bóng đèn hay quạt).",
    whyItMatters: "Dòng điện sẽ tăng lên cực đại trong tích tắc, làm dây dẫn bốc khói, nổ pin hoặc gây hỏa hoạn nghiêm trọng."
  },
  "anaglyph": {
    term: "Kính 3D Anaglyph",
    full: "Kính lọc sắc 3D Đỏ - Xanh Lam (Red-Cyan)",
    icon: "👓",
    meaning: "Kính xem phim 3D có mắt trái màu Đỏ và mắt phải màu Xanh Cyan. Mỗi mắt lọc bỏ màu của chính nó và thu nhận một góc nhìn khác nhau.",
    whyItMatters: "Não bộ ghép hai góc nhìn này lại tạo ra ảo giác vật thể đang nổi hẳn ra khỏi màn hình như chạm tay vào được."
  },
  "rong-roc": {
    term: "Ròng rọc",
    full: "Pulley (Máy cơ đơn giản đĩa quay)",
    icon: "🏗️",
    meaning: "Một bánh xe có rãnh để luồn dây kéo. Ròng rọc cố định giúp đổi hướng lực kéo (kéo xuống để vật nâng lên); ròng rọc động giúp giảm một nửa lực kéo.",
    whyItMatters: "Nhờ ròng rọc, các kỹ sư xây dựng có thể nâng những khối thép nặng hàng tấn lên đỉnh tòa nhà chọc trời dễ dàng."
  },

  // ROBOT & CÔNG NGHỆ (Robotics & Computing)
  "lidar": {
    term: "Lidar",
    full: "Light Detection and Ranging (Mắt thần quét laser)",
    icon: "👁️",
    meaning: "Cảm biến bắn ra hàng triệu chùm tia laser mỗi giây và tính thời gian tia phản xạ trở lại để vẽ ra bản đồ 3D không gian xung quanh.",
    whyItMatters: "Là đôi mắt giúp xe tự lái và robot tự hành nhìn thấy chướng ngại vật trong bóng tối chuẩn xác đến từng milimet."
  },
  "iot": {
    term: "IoT",
    full: "Internet of Things (Vạn vật kết nối Internet)",
    icon: "📡",
    meaning: "Các thiết bị đồ vật (cảm biến nhiệt độ, camera, bóng đèn, đồng hồ) được gắn chip mạng để tự động gửi thông tin và nhận lệnh từ xa.",
    whyItMatters: "Cho phép bác sĩ theo dõi nhịp tim bệnh nhân từ xa, hoặc giúp nông dân tự động tưới nước khi đất khô mà không cần ra vườn."
  },
  "robot-laser": {
    term: "Robot hàn laser",
    full: "Laser Welding Industrial Robot",
    icon: "🦾",
    meaning: "Cánh tay robot cơ khí điều khiển tia laser nhiệt độ cao để nung chảy kim loại và ghép các tấm thép xe hơi lại với nhau.",
    whyItMatters: "Mối hàn laser chính xác gấp 10 lần con người, không để lại vết xước và giúp khung xe vững chắc an toàn tuyệt đối."
  },

  // ĐẠI DỰ ÁN VŨ TRỤ (Space Megaproject)
  "retro-burn": {
    term: "Đốt phanh ngược",
    full: "Retrograde Burn (Đốt động cơ ngược hướng bay)",
    icon: "🚀",
    meaning: "Xoay ngược đầu động cơ tên lửa về hướng tàu đang bay và phụt lửa để hãm bớt tốc độ trước khi đáp xuống bề mặt hành tinh.",
    whyItMatters: "Trong không gian không có không khí để phanh bằng dù, bắt buộc phải dùng động cơ tên lửa ngược hướng để khử vận tốc tránh rơi tự do đâm nát tàu."
  },
  "cold-trap": {
    term: "Bẫy băng ngầm",
    full: "Permanently Shadowed Regions (Vùng tối vĩnh cửu)",
    icon: "🧊",
    meaning: "Các miệng hố sâu hàng trăm mét tại Cực Nam Mặt Trăng, nơi ánh sáng Mặt Trời không bao giờ chiếu tới, nhiệt độ âm 200°C giữ nước đá không bị bốc hơi.",
    whyItMatters: "Là kho báu vô giá trên Mặt Trăng: các phi hành gia khai thác băng này để lọc nước uống và điện phân lấy oxy thở."
  },
  "biosphere": {
    term: "Vòm sinh quyển",
    full: "Biosphere Dome (Hệ sinh thái tuần hoàn khép kín)",
    icon: "🌱",
    meaning: "Mái vòm kính khổng lồ giữ không khí nhân tạo bên trong, trồng cây xanh nhả oxy, nuôi vi khuẩn xử lý rác và lọc nước mưa tuần hoàn.",
    whyItMatters: "Giúp con người có thể sống tự cung tự cấp nhiều năm trên Mặt Trăng hay Sao Hỏa mà không cần Trái Đất tiếp tế lương thực."
  },

  // THÁM TỬ HÌNH SỰ (CSI & Forensic)
  "dna": {
    term: "ADN (DNA)",
    full: "Deoxyribonucleic Acid (Mã gen di truyền)",
    icon: "🧬",
    meaning: "Chuỗi phân tử xoắn ốc nằm trong nhân tế bào, chứa thông tin quy định đặc điểm cơ thể (màu mắt, nhóm máu, hình dáng).",
    whyItMatters: "Mỗi người trên Trái Đất (trừ sinh đôi cùng trứng) có một mã ADN riêng biệt, giúp cảnh sát tìm ra thủ phạm chỉ từ một sợi tóc hay giọt máu nhỏ."
  },
  "luminol": {
    term: "Luminol",
    full: "Hóa chất phát quang hiện vết máu",
    icon: "🧪",
    meaning: "Dung dịch hóa học phản ứng với chất sắt (Fe) có trong hồng cầu máu để phát ra ánh sáng màu xanh lam rực rỡ trong bóng tối.",
    whyItMatters: "Dù hiện trường đã bị hung thủ lau chùi tẩy rửa kỹ lưỡng, chất sắt siêu nhỏ vẫn còn sót lại và bị Luminol làm lộ diện ngay lập tức."
  }
};

/**
 * 2. CƠ SỞ DỮ LIỆU PHÂN TÍCH CHIỀU SÂU CHO CÁC MÀN CHƠI KHÓ (DEEP-DIVES)
 * Giải thích tường tận: Vì sao phải làm như thế? Hậu quả nếu làm ngược là gì?
 */
export const LEVEL_DEEP_DIVES = {
  // Màn 81: Bỏng nước sôi
  "tm-81": {
    whySequence: [
      {
        step: "1. Xả nước mát 15-20 phút đầu tiên",
        why: "Nhiệt lượng từ nước sôi vẫn đang ngấm sâu vào các mô da bên dưới. Xả nước mát sạch ngay lập tức là cách DUY NHẤT để hạ nhiệt, chặn đứng tổn thương mô sâu và giảm đau tức thì."
      },
      {
        step: "2. Tháo đồng hồ, vòng tay quanh vết bỏng",
        why: "Chỉ sau vài phút, vùng da bị bỏng sẽ sưng phù to gấp đôi. Nếu không tháo trang sức sớm, vòng tay sẽ thắt nghẽn mạch máu khiến ngón tay bị hoại tử!"
      },
      {
        step: "3. Dùng kéo cắt nhẹ vạt áo, không lột mạnh",
        why: "Vải áo bị nhiệt nóng có thể đã dính chặt vào da non. Lột mạnh sẽ giật phăng cả mảng da non của nạn nhân, gây đau đớn khủng khiếp và nhiễm trùng máu."
      },
      {
        step: "4. Che phủ màng bọc thực phẩm sạch hoặc gạc vô trùng",
        why: "Màng bọc sạch không có sợi xơ, không bám dính vào vết bỏng, giúp ngăn vi khuẩn trong không khí xâm nhập mà không làm đau khi bóc ra."
      },
      {
        step: "5. Tuyệt đối không tự bôi kem hay thuốc mỡ",
        why: "Hội Chữ Thập Đỏ cảnh báo: Tự ý bôi kem mỡ, mỡ trăn hay kem đánh răng sẽ giữ nhiệt nóng lại dưới da làm bỏng nặng thêm và làm bác sĩ khó chẩn đoán."
      }
    ],
    goldenRule: "Bỏng nhiệt: Chỉ dùng nước sạch mát 20 phút và che màng sạch. Không bôi bất kỳ thứ gì khi chưa có bác sĩ!",
    termKeys: ["bac-sulfadiazine", "triage"]
  },

  // Màn 82: Điện giật
  "tm-82": {
    whySequence: [
      {
        step: "1. Ngắt cầu dao điện trước khi chạm vào nạn nhân",
        why: "Cơ thể con người chứa 70% là nước nên dẫn điện cực tốt. Nếu lao vào ôm kéo nạn nhân khi chưa ngắt điện, bạn sẽ bị dòng điện hút dính và giật theo ngay lập tức!"
      },
      {
        step: "2. Tách dây điện bằng vật cách điện (gậy gỗ khô, nhựa)",
        why: "Nếu không tìm thấy cầu dao, chỉ được dùng gậy gỗ thật khô hoặc cán chổi nhựa để gạt dây điện ra xa."
      },
      {
        step: "3. Gọi to nhờ người hỗ trợ gọi 115 và lấy máy AED",
        why: "Kích hoạt chuỗi cấp cứu sớm giúp đội ngũ chuyên nghiệp có mặt nhanh nhất."
      },
      {
        step: "4. Kiểm tra tri giác và nhịp thở trong 10 giây",
        why: "AHA quy định: Phải kiểm tra xem nạn nhân có thở bình thường hay không trước khi quyết định ép tim."
      },
      {
        step: "5. Chỉ ép tim CPR & dùng máy AED khi bất tỉnh và ngừng thở",
        why: "Nghiêm cấm ép tim khi tim nạn nhân vẫn đang đập bình thường vì lực đè mạnh có thể làm gãy xương ức hoặc làm tim bị loạn nhịp nguy hiểm!"
      }
    ],
    goldenRule: "Điện giật: Ngắt điện an toàn số 1. Chỉ ép tim CPR khi nạn nhân bất tỉnh và ngừng thở bình thường!",
    termKeys: ["cpr", "aed"]
  },

  // Màn 87: Say nắng / Sốc nhiệt
  "tm-87": {
    whySequence: [
      {
        step: "1. Đưa ngay vào bóng râm mát",
        why: "Ngắt ngay nguồn nhiệt bức xạ mặt trời trực tiếp đang chiếu vào cơ thể."
      },
      {
        step: "2. Gọi ngay 115 không được trì hoãn",
        why: "Sốc nhiệt là tình trạng khẩn cấp đe dọa tế bào não. Tuyệt đối không được chờ thân nhiệt tự hạ rồi mới gọi xe cứu thương!"
      },
      {
        step: "3. Nới lỏng quần áo",
        why: "Tăng diện tích tiếp xúc của da với không khí để cơ thể thoát nhiệt đối lưu."
      },
      {
        step: "4. Chườm khăn ướt mát vào 3 điểm mạch lớn: Cổ, Nách, Bẹn",
        why: "Tại 3 vị trí này, các động mạch lớn chạy rất sát bề mặt da. Chườm mát ở đây giúp làm lạnh dòng máu đang chảy về tim và não nhanh nhất."
      },
      {
        step: "5. Quạt gió kết hợp phun sương làm mát",
        why: "Hiệu ứng bay hơi nước liên tục sẽ hút nhiệt lượng từ cơ thể ra ngoài cực nhanh."
      }
    ],
    goldenRule: "Sốc nhiệt: Gọi 115 ngay lập tức và hạ nhiệt tích cực (chườm nách, bẹn, cổ) trong khi chờ xe cứu thương!",
    termKeys: ["heat-stroke", "oresol"]
  },

  // Màn 93: Ngộ độc thực phẩm
  "tm-93": {
    whySequence: [
      {
        step: "1. Dừng ăn ngay và giữ lại mẫu thức ăn thừa/nấm độc",
        why: "Không để độc tố tiếp tục nạp vào cơ thể; giữ lại mẫu vật phẩm để phòng xét nghiệm của bệnh viện tìm chính xác loại độc chất và dùng thuốc giải độc đặc hiệu."
      },
      {
        step: "2. Gọi 115 hoặc Trung tâm Chống Độc",
        why: "NHS Anh Quốc nhấn mạnh: Luôn tìm kiếm chỉ dẫn của chuyên viên y tế đầu tiên khi nghi ngờ ngộ độc."
      },
      {
        step: "3. Cung cấp rõ thời gian phơi nhiễm và triệu chứng",
        why: "Bác sĩ cần biết nạn nhân đã ăn lúc mấy giờ để chỉ định phương pháp rửa dạ dày hay truyền dịch."
      },
      {
        step: "4. Đặt nằm nghiêng an toàn (Recovery position)",
        why: "Nếu nạn nhân bị nôn tự nhiên, dịch nôn sẽ thoát ra ngoài miệng, không bị hít sặc ngược vào khí quản gây ngạt thở."
      },
      {
        step: "5. Tuyệt đối không tự ý móc họng gây nôn",
        why: "Y khoa cấm tự móc họng vì axit dạ dày và chất độc trào ngược có thể gây bỏng thực quản và làm nạn nhân sặc vào phổi dẫn đến tử vong nhanh hơn."
      }
    ],
    goldenRule: "Nghi ngộ độc: Dừng ăn & giữ mẫu vật -> Gọi 115 -> Nằm nghiêng an toàn -> Làm theo hướng dẫn của bác sĩ!",
    termKeys: ["recovery-position", "triage", "oresol"]
  },

  // Màn 43: Lắp ráp mạch điện thắp sáng bóng đèn
  "tm-43": {
    whySequence: [
      {
        step: "1. Đặt nguồn pin điện đúng cực (+) và (-)",
        why: "Pin là nguồn tạo ra hiệu điện thế. Phải định vị đúng cực dương và cực âm để dòng electron có hướng di chuyển tuần hoàn."
      },
      {
        step: "2. Nối dây dẫn lửa từ cực (+) qua công tắc mở",
        why: "Công tắc đóng vai trò kiểm soát an toàn; đặt công tắc ở trạng thái MỞ khi lắp đặt để tránh chập mạch ngoài ý muốn."
      },
      {
        step: "3. Nối tiếp dây vào một chân của bóng đèn",
        why: "Dòng điện cần chạy qua dây tóc vonfram bên trong bầu thủy tinh để nung nóng dây tóc phát quang."
      },
      {
        step: "4. Nối dây mass từ chân thứ hai của đèn về cực (-)",
        why: "Đây là bước tạo MẠCH KÍN (Closed Loop). Nếu không có dây hồi tiếp này về cực âm, dòng điện không thể tuần hoàn và bóng đèn không bao giờ sáng."
      },
      {
        step: "5. Đóng công tắc điện để kiểm tra đèn sáng",
        why: "Khi cần gạt công tắc chạm vào tiếp điểm, mạch điện trở nên khép kín hoàn toàn và bóng đèn bừng sáng."
      }
    ],
    goldenRule: "Mạch điện: Phải tạo thành một vòng tuần hoàn khép kín từ cực (+) qua tải rồi quay về cực (-). Hở mạch là mất điện!",
    termKeys: ["mach-dien-kin", "doan-mach"]
  },

  // Màn 41: Bánh răng cơ học
  "tm-41": {
    whySequence: [
      {
        step: "1. Cố định trục của bánh răng chủ động (Driver Gear)",
        why: "Trục quay phải chắc chắn để bánh răng không bị lắc hay trượt khỏi vị trí khi chịu lực mô-men xoắn."
      },
      {
        step: "2. Căn chỉnh khoảng cách tâm trục bằng đúng bán kính hai bánh",
        why: "Nếu hai trục quá xa, răng không chạm nhau; nếu quá gần, răng bị kẹt cứng làm gãy trục."
      },
      {
        step: "3. Khớp các răng của bánh 1 vào rãnh của bánh 2 tại điểm tiếp xúc (Pitch Point)",
        why: "Điểm tiếp xúc ăn khớp chuẩn giúp truyền 100% lực quay mà không làm mòn hay mẻ răng cưa."
      },
      {
        step: "4. Tra dầu bôi trơn chuyên dụng vào các mặt răng",
        why: "Giảm lực ma sát trượt và giảm tiếng ồn cơ khí khi bánh răng quay ở tốc độ cao."
      },
      {
        step: "5. Quay thử bánh chủ động và quan sát bánh bị động quay ngược chiều",
        why: "Quy luật cơ học: Hai bánh răng ăn khớp ngoài luôn quay ngược chiều nhau (Bánh 1 quay thuận ➔ Bánh 2 quay ngược)."
      }
    ],
    goldenRule: "Cơ khí bánh răng: Răng lọt khít rãnh truyền lực quay. Bánh răng này quay thuận chiều kim đồng hồ thì bánh kia sẽ quay ngược chiều!",
    termKeys: ["banh-rang-an-khop"]
  },

  // Màn 50: Kính 3D Anaglyph
  "tm-50": {
    whySequence: [
      {
        step: "1. Chuẩn bị gọng kính và hai màng lọc màu quang học",
        why: "Cần một màng lọc màu Đỏ (Red) và một màng lọc màu Xanh Lam (Cyan)."
      },
      {
        step: "2. Lắp màng lọc Đỏ vào mắt trái và màng Cyan vào mắt phải",
        why: "Quy chuẩn quốc tế của phim Anaglyph: Mắt trái nhìn kênh ảnh đỏ, mắt phải nhìn kênh ảnh cyan."
      },
      {
        step: "3. Chiếu hình ảnh đã ghép hai góc chụp tách sắc lên màn hình",
        why: "Hình ảnh được chụp từ hai ống kính cách nhau bằng khoảng cách hai mắt người (khoảng 6.5 cm)."
      },
      {
        step: "4. Mắt trái chặn màu đỏ chỉ thấy ảnh xanh; mắt phải chặn màu xanh chỉ thấy ảnh đỏ",
        why: "Hiện tượng lọc màu quang học tách riêng biệt hai hình ảnh cho hai mắt."
      },
      {
        step: "5. Não bộ tổng hợp hai góc nhìn thành ảo giác chiều sâu không gian 3D",
        why: "Thị giác hai mắt (Stereoscopic Vision) của con người tự động dịch hai bức ảnh phẳng thành một vật thể nổi 3 chiều sống động."
      }
    ],
    goldenRule: "Kính 3D Anaglyph: Mỗi mắt nhìn một màu lọc khác nhau, não bộ tự động ghép hai góc nhìn thành hình ảnh nổi 3D!",
    termKeys: ["anaglyph"]
  },

  // Màn 181: Đổ bộ Mặt Trăng Artemis
  "tm-181": {
    whySequence: [
      {
        step: "1. Đưa tàu vào quỹ đạo tròn quanh Cực Nam Mặt Trăng",
        why: "Ổn định độ cao 100km để tính toán chính xác tọa độ bãi đáp trước khi bắt đầu hạ độ cao."
      },
      {
        step: "2. Kích hoạt động cơ đốt phanh ngược hướng bay (Retro-burn)",
        why: "Mặt Trăng không có khí quyển để bung dù. Cách duy nhất để rơi xuống bãi đáp là phụt lửa ngược hướng để giảm vận tốc quỹ đạo 1.6 km/s."
      },
      {
        step: "3. Bật mắt thần Lidar và radar đo độ cao địa hình",
        why: "Quét 3D mặt đất liên tục để phát hiện sớm các tảng đá lớn hoặc miệng hố dốc nguy hiểm."
      },
      {
        step: "4. Xoay thẳng đứng và phụt phản lực hãm tốc độ rơi còn dưới 1m/s",
        why: "Hạ cánh êm ái với vận tốc nhẹ như bước chân người để chân bệ hạ cánh hấp thụ xung lực không bị lật."
      },
      {
        step: "5. Tắt động cơ ngay khi cảm biến chân chạm đất",
        why: "Tắt động cơ đúng tích tắc chạm đất để luồng lửa không thổi ngược đá vụn làm vỡ tấm pin năng lượng và vỏ tàu."
      }
    ],
    goldenRule: "Hạ cánh vũ trụ: Phanh bằng tên lửa ngược hướng -> Quét Lidar dò đá -> Đáp nhẹ dưới 1m/s -> Tắt máy ngay khi chạm đất!",
    termKeys: ["retro-burn", "lidar", "cold-trap", "biosphere"]
  }
};

/**
 * 3. HÀM TỔNG HỢP THÔNG TIN CHO BẤT KỲ MÀN NÀO (GET LEVEL INFO)
 * Tự động tìm kiếm trong cơ sở dữ liệu chuyên sâu, hoặc tự động phân tích logic
 * dựa trên DAG, tasks, distractors và từ điển thuật ngữ.
 */
export function getLevelInfo(level) {
  if (!level) return null;

  const deepDive = LEVEL_DEEP_DIVES[level.id];
  const allText = [
    level.title,
    level.description,
    level.lesson,
    ...(level.tasks || []).map(t => t.text + " " + (t.hint || "")),
    ...(level.distractors || []).map(d => d.text + " " + (d.failReason || ""))
  ].join(" ").toLowerCase();

  // Tự động tìm các thuật ngữ khớp với nội dung bài học
  const matchedTermKeys = new Set(deepDive?.termKeys || []);
  if (allText.includes("cpr") || allText.includes("ép tim")) matchedTermKeys.add("cpr");
  if (allText.includes("aed") || allText.includes("khử rung")) matchedTermKeys.add("aed");
  if (allText.includes("oresol") || allText.includes("điện giải")) matchedTermKeys.add("oresol");
  if (allText.includes("phân loại") || allText.includes("triage")) matchedTermKeys.add("triage");
  if (allText.includes("bỏng") || allText.includes("sulfadiazine")) matchedTermKeys.add("bac-sulfadiazine");
  if (allText.includes("sốc nhiệt") || allText.includes("say nắng")) matchedTermKeys.add("heat-stroke");
  if (allText.includes("nghiêng an toàn") || allText.includes("nôn")) matchedTermKeys.add("recovery-position");
  if (allText.includes("bánh răng")) matchedTermKeys.add("banh-rang-an-khop");
  if (allText.includes("mạch điện") || allText.includes("pin") || allText.includes("công tắc")) matchedTermKeys.add("mach-dien-kin");
  if (allText.includes("chập điện") || allText.includes("đoản mạch")) matchedTermKeys.add("doan-mach");
  if (allText.includes("anaglyph") || allText.includes("3d")) matchedTermKeys.add("anaglyph");
  if (allText.includes("ròng rọc") || allText.includes("đòn bẩy")) matchedTermKeys.add("rong-roc");
  if (allText.includes("lidar") || allText.includes("laser")) matchedTermKeys.add("lidar");
  if (allText.includes("iot") || allText.includes("cảm biến")) matchedTermKeys.add("iot");
  if (allText.includes("robot") || allText.includes("hàn")) matchedTermKeys.add("robot-laser");
  if (allText.includes("mặt trăng") || allText.includes("phanh") || allText.includes("đổ bộ")) matchedTermKeys.add("retro-burn");
  if (allText.includes("băng") || allText.includes("cực nam")) matchedTermKeys.add("cold-trap");
  if (allText.includes("vòm") || allText.includes("sinh quyển")) matchedTermKeys.add("biosphere");
  if (allText.includes("adn") || allText.includes("dna") || allText.includes("gen")) matchedTermKeys.add("dna");
  if (allText.includes("luminol") || allText.includes("vết máu")) matchedTermKeys.add("luminol");

  const termsList = Array.from(matchedTermKeys)
    .map(k => TASK_MASTER_GLOSSARY[k])
    .filter(Boolean);

  // Nếu bài chưa có deepDive riêng, tạo phân tích logic tự động dựa trên requirements và tasks
  const whySequence = deepDive?.whySequence || (level.tasks || []).map((t, idx) => {
    let reqText = "";
    if (t.requires && t.requires.length > 0) {
      const reqTasks = t.requires.map(rid => level.tasks.find(tk => tk.id === rid)?.text || rid);
      reqText = `Vì bước này phụ thuộc trực tiếp vào việc hoàn tất: "${reqTasks[0]}" trước đó. `;
    } else {
      reqText = "Đây là bước nền tảng khởi đầu bắt buộc phải làm trước để đảm bảo an toàn và điều kiện tiên quyết. ";
    }
    return {
      step: `Bước ${idx + 1}: ${t.text}`,
      why: reqText + (t.hint ? `💡 Ghi chú khoa học: ${t.hint}` : "")
    };
  });

  const goldenRule = deepDive?.goldenRule || level.lesson || "Luôn đọc kỹ điều kiện tiên quyết trước khi bắt tay vào làm!";

  return {
    level,
    whySequence,
    goldenRule,
    termsList
  };
}

/**
 * 4. RENDER GIAO DIỆN MODAL SỔ TAY CHỈ HUY (RENDER INFO MODAL HTML)
 */
export function renderPlanInfoModalContent(level) {
  const info = getLevelInfo(level);
  if (!info) return `<div style="padding:20px">Không tìm thấy thông tin màn chơi.</div>`;

  const { whySequence, goldenRule, termsList } = info;

  return `
    <div class="tm-plan-info-dialog-inner" style="padding:20px 24px; max-height:85vh; overflow-y:auto">
      <!-- Header -->
      <div style="display:flex; justify-content:space-between; align-items:flex-start; border-bottom:1px solid #e2e8f0; padding-bottom:14px; margin-bottom:18px">
        <div>
          <div style="font-size:0.75rem; font-weight:800; color:#0284c7; text-transform:uppercase; letter-spacing:0.5px">
            ℹ️ SỔ TAY CHỈ HUY · GIẢI MÃ KẾ HOẠCH & THUẬT NGỮ
          </div>
          <h2 style="margin:4px 0 6px; font-size:1.35rem; color:#0f172a; font-weight:900">
            ${level.icon} Màn ${level.level || level.id}: ${esc(level.title)}
          </h2>
          <p style="margin:0; font-size:0.88rem; color:#475569">
            ${esc(level.description)}
          </p>
        </div>
        <button id="btnClosePlanInfo" class="ghost-button" style="font-size:1.3rem; padding:4px 12px; border-radius:10px; line-height:1; cursor:pointer" title="Đóng sổ tay">✕</button>
      </div>

      <!-- 1. VÌ SAO PHẢI LÀM THEO THỨ TỰ NÀY? -->
      <div style="margin-bottom:24px">
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:12px">
          <span style="font-size:1.2rem">🧠</span>
          <h3 style="margin:0; font-size:1.05rem; font-weight:800; color:#1e293b">
            Vì Sao Phải Làm Theo Trình Tự Này?
          </h3>
        </div>
        
        <div style="display:flex; flex-direction:column; gap:10px">
          ${whySequence.map((item, idx) => `
            <div style="background:#f8fafc; border-left:3px solid #0284c7; padding:10px 14px; border-radius:0 8px 8px 0">
              <div style="font-weight:800; font-size:0.88rem; color:#0369a1; margin-bottom:3px">
                ${esc(item.step)}
              </div>
              <div style="font-size:0.84rem; color:#334155; line-height:1.5">
                ${esc(item.why)}
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- 2. NẾU CÓ THẺ BẪY (DISTRACTOR): CẢNH BÁO NGUY HIỂM -->
      ${level.distractors && level.distractors.length > 0 ? `
        <div style="margin-bottom:24px; background:#fef2f2; border:1px solid #fecaca; border-radius:12px; padding:14px 16px">
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px">
            <span style="font-size:1.15rem">⚠️</span>
            <h4 style="margin:0; font-size:0.95rem; font-weight:800; color:#991b1b">
              Cảnh Báo: Các Hành Động Sai Lầm Tuyệt Đối Phải Tránh!
            </h4>
          </div>
          <div style="display:flex; flex-direction:column; gap:8px">
            ${level.distractors.map(d => `
              <div style="font-size:0.84rem; color:#7f1d1d; line-height:1.45">
                <strong>❌ Không được: "${esc(d.text)}"</strong>
                <div style="margin-top:2px; color:#b91c1c">${esc(d.failReason)}</div>
                ${d.scientificExplanation ? `<div style="font-size:0.8rem; color:#991b1b; margin-top:2px; font-style:italic">🔬 Khoa học: ${esc(d.scientificExplanation)}</div>` : ""}
              </div>
            `).join("")}
          </div>
        </div>
      ` : ""}

      <!-- 3. TỪ ĐIỂN THUẬT NGỮ & TỪ VIẾT TẮT -->
      <div style="margin-bottom:24px">
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:12px">
          <span style="font-size:1.2rem">📖</span>
          <h3 style="margin:0; font-size:1.05rem; font-weight:800; color:#1e293b">
            Thuật Ngữ & Từ Viết Tắt Cần Nhớ (${termsList.length} thuật ngữ)
          </h3>
        </div>

        ${termsList.length > 0 ? `
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:12px">
            ${termsList.map(t => `
              <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:10px; padding:12px 14px; box-shadow:0 2px 6px rgba(0,0,0,0.03)">
                <div style="display:flex; align-items:center; gap:6px; margin-bottom:4px">
                  <span style="font-size:1.1rem">${t.icon}</span>
                  <span style="font-size:0.92rem; font-weight:900; color:#0f172a">${esc(t.term)}</span>
                </div>
                <div style="font-size:0.75rem; font-weight:700; color:#64748b; margin-bottom:6px">
                  ${esc(t.full)}
                </div>
                <p style="margin:0 0 6px; font-size:0.82rem; color:#334155; line-height:1.45">
                  ${esc(t.meaning)}
                </p>
                <div style="font-size:0.78rem; color:#0284c7; background:#f0f9ff; padding:4px 8px; border-radius:6px; font-weight:600">
                  🎯 <strong>Ứng dụng:</strong> ${esc(t.whyItMatters)}
                </div>
              </div>
            `).join("")}
          </div>
        ` : `
          <div style="font-size:0.85rem; color:#64748b; background:#f8fafc; padding:12px; border-radius:8px">
            Màn chơi này sử dụng các khái niệm đời sống gần gũi. Bách chỉ cần tập trung vào tư duy thứ tự trước sau!
          </div>
        `}
      </div>

      <!-- 4. BÀI HỌC VÀNG CỦA BÁCH -->
      <div style="background:linear-gradient(135deg, #fef3c7 0%, #fffbeb 100%); border:1px solid #fde68a; border-radius:12px; padding:14px 18px; margin-bottom:18px">
        <div style="font-size:0.8rem; font-weight:800; color:#b45309; text-transform:uppercase; margin-bottom:4px">
          💡 BÀI HỌC VÀNG CỦA CHỈ HUY BÁCH:
        </div>
        <div style="font-size:0.92rem; font-weight:800; color:#78350f">
          ${esc(goldenRule)}
        </div>
      </div>

      <!-- Footer CTA -->
      <div style="display:flex; justify-content:flex-end; gap:10px">
        <button id="btnGotItPlanInfo" class="primary-button" style="padding:10px 24px; font-size:0.92rem; background:linear-gradient(135deg, #0284c7 0%, #0369a1 100%); border:none; display:flex; align-items:center; gap:6px">
          🚀 Bách Đã Hiểu • Bắt Đầu Xếp Kế Hoạch!
        </button>
      </div>
    </div>
  `;
}
