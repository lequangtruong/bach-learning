// js/task-master-levels-part3.js - Ngân hàng 40 Màn chơi Part 3: Y Học & Siêu Nhà Máy Robot (Màn 81 -> 120)

export const TASK_MASTER_LEVELS_PART3 = [
  {
    "id": "tm-81",
    "level": 81,
    "title": "Sơ Cứu Bỏng Nước Sôi Đúng Chuẩn Y Khoa",
    "category": "medical",
    "categoryName": "Bác Sĩ Cấp Cứu",
    "icon": "🧯",
    "difficulty": 3,
    "description": "Sơ cứu bỏng chuẩn Hội Chữ Thập Đỏ: Làm mát bằng nước sạch và che phủ nhẹ, không tự ý bôi kem thuốc.",
    "tasks": [
      {
        "id": "t1",
        "text": "Đưa cẳng tay dưới vòi nước sạch mát chảy nhẹ liên tục 15-20 phút",
        "icon": "🚰",
        "hint": "Hội Chữ Thập Đỏ nhấn mạnh: Làm mát bằng nước sạch mát 20 phút là bước quan trọng nhất để ngăn tổn thương sâu."
      },
      {
        "id": "t2",
        "text": "Nhẹ nhàng cởi bỏ vòng tay, đồng hồ quanh vùng bỏng trước khi da sưng phù",
        "icon": "⌚",
        "requires": [
          "t1"
        ],
        "hint": "Tháo đồ trang sức sớm để tránh chèn ép mạch máu khi vùng mô bị sưng."
      },
      {
        "id": "t3",
        "text": "Dùng kéo sạch cắt nhẹ vạt áo quanh vết bỏng, tuyệt đối không lột mạnh phần vải dính vào da",
        "icon": "✂️",
        "requires": [
          "t2"
        ],
        "hint": "Cắt vải xung quanh, giữ nguyên phần dính để không làm lột da non gây nhiễm trùng."
      },
      {
        "id": "t4",
        "text": "Che phủ nhẹ nhàng vết bỏng bằng màng bọc thực phẩm sạch hoặc gạc vô trùng, không quấn chặt",
        "icon": "🩹",
        "requires": [
          "t3"
        ],
        "hint": "Màng bọc thực phẩm sạch hoặc gạc không dính giúp che bụi bẩn mà không bám vào vết bỏng."
      },
      {
        "id": "t5",
        "text": "Giữ ấm cơ thể bằng chăn mỏng, tuyệt đối không tự ý bôi kem, thuốc mỡ hay hóa chất khi chưa có chỉ định",
        "icon": "🧥",
        "requires": [
          "t4"
        ],
        "hint": "Red Cross khuyến cáo không tự ý bôi bất kỳ loại kem, mỡ hay thuốc nào vì cản trở thoát nhiệt."
      },
      {
        "id": "t6",
        "text": "Uống từng ngụm nước lọc nhỏ bù dịch và đưa ngay đến cơ sở y tế để bác sĩ thăm khám",
        "icon": "🏥",
        "requires": [
          "t5"
        ],
        "hint": "Bác sĩ chuyên khoa bỏng sẽ đánh giá độ sâu và kê đơn thuốc điều trị phù hợp."
      }
    ],
    "distractors": [
      {
        "id": "d1",
        "text": "Bôi kem đánh răng hoặc mỡ trăn lên vết bỏng vừa xuất hiện",
        "icon": "🦷",
        "failReason": "Kem đánh răng chứa kiềm và tinh dầu cay làm bỏng nặng thêm; mỡ trăn giữ nhiệt lại dưới da gây nhiễm trùng nghiêm trọng!",
        "scientificExplanation": "Dân gian hay bôi kem đánh răng nhưng y khoa cấm vì giữ nhiệt lại dưới da."
      },
      {
        "id": "d2",
        "text": "Tự ý bôi kem chứa bạc sulfadiazine hoặc thuốc mỡ kháng sinh lên vết bỏng tại nhà",
        "icon": "🧴",
        "failReason": "Hội Chữ Thập Đỏ và các chuyên gia bỏng khuyến cáo không tự bôi kem hay thuốc khi sơ cứu vì che lấp tổn thương và gây cản trở bác sĩ chẩn đoán độ bỏng!",
        "scientificExplanation": "Sơ cứu chuẩn quốc tế chỉ làm mát bằng nước sạch và che phủ nhẹ bằng màng bọc sạch; thuốc đặc trị chỉ dùng theo chỉ định bác sĩ."
      }
    ],
    "lesson": "Bỏng nhiệt: Xả nước mát 20 phút -> Tháo đồ chật -> Che phủ màng sạch/gạc vô trùng -> Không tự bôi kem thuốc -> Đến cơ sở y tế."
  },
  {
    "id": "tm-82",
    "level": 82,
    "title": "Cứu Hộ Nạn Nhân Bị Điện Giật Khẩn Cấp",
    "category": "medical",
    "categoryName": "Bác Sĩ Cấp Cứu",
    "icon": "⚡",
    "difficulty": 4,
    "description": "Nguyên tắc an toàn số 1: Ngắt điện trước khi tiếp cận. Chỉ ép tim CPR/AED khi nạn nhân bất tỉnh và ngừng thở bình thường.",
    "tasks": [
      {
        "id": "t1",
        "text": "Hét to báo động và chạy tới dập ngay cầu dao tổng ngắt nguồn điện",
        "icon": "🔌",
        "hint": "Cắt nguồn điện là bước sống còn trước khi chạm vào nạn nhân."
      },
      {
        "id": "t2",
        "text": "Dùng gậy gỗ khô hoặc cán chổi nhựa gạt dây điện ra xa nạn nhân",
        "icon": "🪵",
        "requires": [
          "t1"
        ],
        "hint": "Dùng vật liệu cách điện tuyệt đối, không dùng kim loại hay vật ẩm ướt."
      },
      {
        "id": "t3",
        "text": "Gọi to nhờ người xung quanh gọi ngay 115 và lấy máy khử rung tim tự động AED",
        "icon": "📞",
        "requires": [
          "t2"
        ],
        "hint": "Kích hoạt hệ thống cấp cứu sớm nhất có thể."
      },
      {
        "id": "t4",
        "text": "Lay vai và quan sát lồng ngực trong 10 giây để kiểm tra tri giác và nhịp thở",
        "icon": "👂",
        "requires": [
          "t3"
        ],
        "hint": "AHA nhấn mạnh: Đánh giá xem nạn nhân còn thở bình thường hay đã ngưng tim ngưng thở."
      },
      {
        "id": "t5",
        "text": "Chỉ khi nạn nhân bất tỉnh và không thở bình thường: Tiến hành ép tim ngoài lồng ngực 100-120 lần/phút",
        "icon": "🫀",
        "requires": [
          "t4"
        ],
        "hint": "AHA quy định: Tuyệt đối không ép tim nếu nạn nhân còn thở bình thường; chỉ CPR khi bất tỉnh và ngừng thở."
      },
      {
        "id": "t6",
        "text": "Mở máy AED dán điện cực lên ngực trần và thực hiện sốc điện theo chỉ dẫn giọng nói",
        "icon": "🩺",
        "requires": [
          "t5"
        ],
        "hint": "Máy AED sẽ tự phân tích nhịp tim và chỉ phát xung điện nếu phát hiện rung thất."
      }
    ],
    "distractors": [
      {
        "id": "d1",
        "text": "Lao thẳng vào dùng tay trần kéo nạn nhân đang dính vào dây điện",
        "icon": "✋",
        "failReason": "Cơ thể người dẫn điện tốt, chạm vào nạn nhân chưa ngắt điện sẽ khiến bạn bị giật theo!"
      },
      {
        "id": "d2",
        "text": "Vội vã ép tim ngay lập tức khi nạn nhân vẫn còn tỉnh táo và thở đều",
        "icon": "⚠️",
        "failReason": "AHA cảnh báo: Tuyệt đối không ép tim khi nạn nhân còn thở và tim đang đập bình thường vì có thể gây loạn nhịp tim nguy hiểm! Chỉ CPR khi không đáp ứng và không thở bình thường.",
        "scientificExplanation": "CPR dùng để thay thế chức năng tim khi ngưng tuần hoàn. Ép tim trên người tim đang đập có thể gây chấn thương xương ức và rối loạn nhịp tim."
      }
    ],
    "lesson": "Sơ cứu điện giật: Ngắt điện an toàn -> Gọi 115 -> Kiểm tra tri giác & nhịp thở -> Chỉ ép tim CPR & dùng AED khi bất tỉnh và ngừng thở."
  },
  {
    "id": "tm-83",
    "level": 83,
    "title": "Quy Trình Ép Tim Hồi Sinh Tim Phổi (CPR)",
    "category": "medical",
    "categoryName": "Bác Sĩ Cấp Cứu",
    "icon": "🫀",
    "difficulty": 4,
    "description": "4 phút vàng cứu sống người ngưng tim đột ngột trước khi não bộ tổn thương không phục hồi.",
    "tasks": [
      {
        "id": "t1",
        "text": "Đặt nạn nhân nằm ngửa trên nền phẳng cứng vững chắc",
        "icon": "🛌",
        "hint": "Nền cứng giúp lực ép truyền thẳng vào tim."
      },
      {
        "id": "t2",
        "text": "Quỳ gối cạnh ngực nạn nhân, đặt gót bàn tay lên giữa xương ức",
        "icon": "🤲",
        "requires": [
          "t1"
        ],
        "hint": "Vị trí chuẩn là nửa dưới xương ức."
      },
      {
        "id": "t3",
        "text": "Khóa chặt hai bàn tay, giữ thẳng cánh tay và ép sâu 5cm",
        "icon": "💪",
        "requires": [
          "t2"
        ],
        "hint": "Ép sâu 5-6 cm để tống máu từ tâm thất lên não."
      },
      {
        "id": "t4",
        "text": "Ép tim nhịp nhàng 30 nhịp liên tục với tốc độ 100-120 nhịp/phút",
        "icon": "⏱️",
        "requires": [
          "t3"
        ],
        "hint": "Duy trì tần số ép chuẩn theo nhịp điệu."
      },
      {
        "id": "t5",
        "text": "Ngửa đầu nâng cằm mở đường thở và bịt mũi thổi ngạt 2 hơi dứt khoát",
        "icon": "🌬️",
        "requires": [
          "t4"
        ],
        "hint": "Quy tắc 30 lần ép tim xen kẽ 2 lần thổi ngạt."
      },
      {
        "id": "t6",
        "text": "Tiếp tục chu kỳ 30:2 cho tới khi nạn nhân thở lại hoặc bác sĩ 115 đến",
        "icon": "🚑",
        "requires": [
          "t5"
        ],
        "hint": "Không ngắt quãng ép tim quá 10 giây."
      }
    ],
    "distractors": [
      {
        "id": "d1",
        "text": "Cạy miệng nhét giẻ hoặc thìa kim loại vào vì sợ cắn lưỡi",
        "icon": "🥄",
        "failReason": "Nhét thìa làm gãy răng và tắc nghẽn đường thở hoàn toàn!"
      }
    ],
    "lesson": "CPR: Nền cứng -> Đặt tay giữa xương ức -> 30 lần ép tim sâu 5cm -> 2 lần thổi ngạt."
  },
  {
    "id": "tm-84",
    "level": 84,
    "title": "Cố Định Xương Cẳng Chân Bị Gãy Kín",
    "category": "medical",
    "categoryName": "Bác Sĩ Cấp Cứu",
    "icon": "🦴",
    "difficulty": 3,
    "description": "Sơ cứu bất động xương gãy khi chơi bóng đá, ngăn đầu xương nhọn đâm thủng mạch máu.",
    "tasks": [
      {
        "id": "t1",
        "text": "Trấn an nạn nhân và yêu cầu nằm yên bất động, không thử đứng dậy",
        "icon": "🤫",
        "hint": "Cử động làm đầu xương gãy di lệch chọc thủng da."
      },
      {
        "id": "t2",
        "text": "Dùng kéo cắt nhẹ ống quần để lộ toàn bộ vùng cẳng chân bị đau",
        "icon": "✂️",
        "requires": [
          "t1"
        ],
        "hint": "Bộc lộ vị trí chấn thương kiểm tra vết thương hở."
      },
      {
        "id": "t3",
        "text": "Chuẩn bị 2 thanh nẹp gỗ dài từ bẹn đến gót chân và bông đệm",
        "icon": "🪵",
        "requires": [
          "t2"
        ],
        "hint": "Nẹp phải đủ dài cố định qua 2 khớp: gối và cổ chân."
      },
      {
        "id": "t4",
        "text": "Chêm gạc bông mềm vào các đầu khớp mắt cá và đầu gối",
        "icon": "🧻",
        "requires": [
          "t3"
        ],
        "hint": "Bông đệm giúp nẹp gỗ không cọ sát gây tổn thương điểm lồi xương."
      },
      {
        "id": "t5",
        "text": "Đặt nẹp mặt trong và mặt ngoài rồi buộc 4 nút cố định chắc chắn",
        "icon": "🩹",
        "requires": [
          "t4"
        ],
        "hint": "Buộc nút trên ổ gãy, dưới ổ gãy và hai khớp."
      },
      {
        "id": "t6",
        "text": "Kiểm tra mạch mu bàn chân còn lưu thông rồi nâng cáng chở đi",
        "icon": "🏥",
        "requires": [
          "t5"
        ],
        "hint": "Bắt mạch chắc chắn nẹp không buộc quá chặt làm nghẽn máu."
      }
    ],
    "lesson": "Gãy xương: Nằm yên -> Đệm bông điểm lồi -> Nẹp qua 2 khớp -> Buộc cố định -> Bắt mạch mu chân."
  },
  {
    "id": "tm-85",
    "level": 85,
    "title": "Quy Trình Tiệt Trùng Phòng Mổ Áp Lực Dương",
    "category": "medical",
    "categoryName": "Bác Sĩ Cấp Cứu",
    "icon": "🔬",
    "difficulty": 4,
    "description": "Chuẩn bị phòng phẫu thuật sạch khuẩn 99.99% trước ca ghép tạng quan trọng.",
    "tasks": [
      {
        "id": "t1",
        "text": "Kích hoạt hệ thống lọc khí HEPA tạo buồng áp lực dương",
        "icon": "🌀",
        "hint": "Áp lực dương đẩy không khí ra ngoài, vi khuẩn không thể bay vào."
      },
      {
        "id": "t2",
        "text": "Lau sạch bề mặt bàn mổ và đèn mổ bằng cồn khử khuẩn 70 độ",
        "icon": "🧴",
        "requires": [
          "t1"
        ],
        "hint": "Làm sạch bụi mịn và khử khuẩn các bề mặt tiếp xúc."
      },
      {
        "id": "t3",
        "text": "Bật giàn đèn tia cực tím UV-C chiếu toàn bộ phòng mổ 30 phút",
        "icon": "🟣",
        "requires": [
          "t2"
        ],
        "hint": "Tia UV-C phá vỡ cấu trúc vi khuẩn trôi nổi."
      },
      {
        "id": "t4",
        "text": "Mở gói dụng cụ phẫu thuật kim loại đã hấp tiệt trùng Autoclave",
        "icon": "🔪",
        "requires": [
          "t3"
        ],
        "hint": "Hấp hơi nước 121°C áp suất cao tiêu diệt nha bào."
      },
      {
        "id": "t5",
        "text": "Kíp mổ thực hiện rửa tay ngoại khoa 6 bước với xà phòng Chlorhexidine",
        "icon": "🧼",
        "requires": [
          "t1"
        ],
        "hint": "Rửa tay từ ngón tay lên đến khuỷu tay trong 5 phút."
      },
      {
        "id": "t6",
        "text": "Mặc áo phẫu thuật vô trùng và mang găng tay cao su hai lớp",
        "icon": "🧤",
        "requires": [
          "t4",
          "t5"
        ],
        "hint": "Không để mặt ngoài găng tay chạm vào vật chưa tiệt trùng."
      }
    ],
    "lesson": "Áp lực dương -> Lau hóa chất -> Chiếu đèn UV-C -> Dụng cụ hấp Autoclave -> Mặc đồ vô trùng."
  },
  {
    "id": "tm-86",
    "level": 86,
    "title": "Cứu Nghẹn Dị Vật Đường Thở Thủ Thuật Heimlich",
    "category": "medical",
    "categoryName": "Bác Sĩ Cấp Cứu",
    "icon": "🍇",
    "difficulty": 3,
    "description": "Cấp cứu hóc thạch làm bít khí quản, nạn nhân ôm cổ tím tái.",
    "tasks": [
      {
        "id": "t1",
        "text": "Hỏi to Bạn có nói được không và quan sát dấu hiệu hai tay ôm cổ",
        "icon": "🗣️",
        "hint": "Không nói được nghĩa là dị vật bít kín đường thở."
      },
      {
        "id": "t2",
        "text": "Đứng ngay phía sau nạn nhân, vòng hai tay ôm quanh eo",
        "icon": "🫂",
        "requires": [
          "t1"
        ],
        "hint": "Tạo điểm tựa vững vàng truyền lực ép vào cơ hoành."
      },
      {
        "id": "t3",
        "text": "Nắm chặt một bàn tay, đặt ngón cái lên vùng thượng vị trên rốn 2 ngón tay",
        "icon": "✊",
        "requires": [
          "t2"
        ],
        "hint": "Vị trí giữa rốn và xương ức."
      },
      {
        "id": "t4",
        "text": "Bàn tay kia ôm lấy nắm đấm giật mạnh theo hướng vào trong và lên trên",
        "icon": "⤴️",
        "requires": [
          "t3"
        ],
        "hint": "Lực ép cơ hoành tạo luồng khí tống dị vật ra ngoài."
      },
      {
        "id": "t5",
        "text": "Lặp lại động tác giật 5 lần dứt khoát cho tới khi dị vật bắn ra",
        "icon": "💥",
        "requires": [
          "t4"
        ],
        "hint": "Kiểm tra miệng nạn nhân xem dị vật đã trồi ra chưa."
      },
      {
        "id": "t6",
        "text": "Để nạn nhân ngồi nghỉ thở đều và uống nước ấm kiểm tra niêm mạc",
        "icon": "🍵",
        "requires": [
          "t5"
        ],
        "hint": "Quan sát nhịp thở hồi phục hồng hào trở lại."
      }
    ],
    "lesson": "Xác nhận nghẹn thở -> Đứng sau ôm eo -> Nắm đấm trên rốn -> Giật mạnh vào trong lên trên."
  },
  {
    "id": "tm-87",
    "level": 87,
    "title": "Sơ Cứu Say Nắng Và Sốc Nhiệt Mùa Hè",
    "category": "medical",
    "categoryName": "Bác Sĩ Cấp Cứu",
    "icon": "☀️",
    "difficulty": 3,
    "description": "Sốc nhiệt là tình trạng khẩn cấp: Phải gọi 115 sớm và tích cực làm mát cơ thể trong khi chờ y tế đến.",
    "tasks": [
      {
        "id": "t1",
        "text": "Dìu ngay nạn nhân vào nơi râm mát hoặc phòng có điều hòa thoáng khí",
        "icon": "🌳",
        "hint": "Cắt đứt ngay nguồn nhiệt bức xạ mặt trời là bước ưu tiên hàng đầu."
      },
      {
        "id": "t2",
        "text": "Gọi ngay cấp cứu 115 hoặc nhờ người lớn hỗ trợ y tế khẩn cấp",
        "icon": "📞",
        "requires": [
          "t1"
        ],
        "hint": "CDC & Hội Chữ Thập Đỏ khuyến cáo: Sốc nhiệt là tình huống đe dọa tính mạng, phải gọi 115 ngay từ đầu."
      },
      {
        "id": "t3",
        "text": "Nới lỏng cúc áo, thắt lưng và cởi bỏ lớp quần áo dày bên ngoài để tản nhiệt",
        "icon": "👕",
        "requires": [
          "t1"
        ],
        "hint": "Để bề mặt da thông thoáng, tiếp xúc không khí giúp tản nhiệt nhanh."
      },
      {
        "id": "t4",
        "text": "Chườm khăn ướt mát vào 3 vị trí mạch máu lớn: nách, bẹn và hai bên cổ trong lúc chờ 115",
        "icon": "🧊",
        "requires": [
          "t3"
        ],
        "hint": "Làm mát các dòng máu lớn chảy về tim và não nhanh nhất trong thời gian chờ xe cứu thương."
      },
      {
        "id": "t5",
        "text": "Bật quạt thổi gió mát kết hợp phun sương nước mát lên cơ thể để tăng bay hơi nhiệt",
        "icon": "💨",
        "requires": [
          "t4"
        ],
        "hint": "Hiệu ứng bay hơi nước liên tục giúp kéo hạ nhiệt độ lõi cơ thể."
      },
      {
        "id": "t6",
        "text": "Theo dõi liên tục tri giác và nhịp thở, chỉ cho uống nước nếu nạn nhân hoàn toàn tỉnh táo",
        "icon": "🥤",
        "requires": [
          "t5",
          "t2"
        ],
        "hint": "Nếu nạn nhân lơ mơ hoặc hôn mê, tuyệt đối không ép uống nước vì sẽ gây sặc vào đường thở."
      }
    ],
    "distractors": [
      {
        "id": "d1",
        "text": "Chờ nhiệt độ tự hạ xuống dưới 38.5°C rồi mới gọi cấp cứu 115",
        "icon": "⏳",
        "failReason": "Sốc nhiệt (Heat stroke) là tình trạng cấp cứu khẩn cấp, trì hoãn gọi 115 có thể gây tổn thương não vĩnh viễn hoặc tử vong! Phải gọi 115 ngay và hạ nhiệt tích cực trong lúc chờ.",
        "scientificExplanation": "Khi thân nhiệt vượt quá 40°C, các enzyme và protein trong tế bào não bắt đầu bị biến tính, mỗi phút chậm trễ cấp cứu đều tăng nguy cơ biến chứng."
      }
    ],
    "lesson": "Sốc nhiệt: Vào bóng râm -> Gọi 115 ngay lập tức -> Nới áo -> Chườm mát nách bẹn cổ & quạt mát trong khi chờ cấp cứu."
  },
  {
    "id": "tm-88",
    "level": 88,
    "title": "Băng Ga-rô Cầm Máu Động Mạch Phun Tia",
    "category": "medical",
    "categoryName": "Bác Sĩ Cấp Cứu",
    "icon": "🩸",
    "difficulty": 4,
    "description": "Kỹ thuật ga-rô chặn dòng máu đỏ tươi phun thành tia từ vết thương đứt động mạch.",
    "tasks": [
      {
        "id": "t1",
        "text": "Dùng ngón tay ấn chặt vào điểm ép động mạch phía trên vết thương",
        "icon": "👆",
        "hint": "Chặn tạm thời dòng máu từ tim xuống chi bị thương."
      },
      {
        "id": "t2",
        "text": "Đặt cuộn băng gạc hoặc miếng lót vải êm quấn quanh bắp tay",
        "icon": "🧻",
        "requires": [
          "t1"
        ],
        "hint": "Lớp lót bảo vệ da và dây thần kinh không bị dập nát."
      },
      {
        "id": "t3",
        "text": "Đặt dây garô cao su cách vết thương 3-5cm về phía tim",
        "icon": "🎗️",
        "requires": [
          "t2"
        ],
        "hint": "Động mạch đi từ tim ra, ga-rô đặt phía gần tim hơn."
      },
      {
        "id": "t4",
        "text": "Xoắn thanh que siết chặt dây ga-rô cho tới khi máu ngừng phun",
        "icon": "🥢",
        "requires": [
          "t3"
        ],
        "hint": "Siết vừa đủ để cầm máu, không siết quá mức."
      },
      {
        "id": "t5",
        "text": "Viết phiếu ga-rô ghi rõ giờ và phút bắt đầu siết nẹp ghim lên ngực áo",
        "icon": "📝",
        "requires": [
          "t4"
        ],
        "hint": "Thông tin sống còn để bác sĩ phẫu thuật biết giờ nới ga-rô."
      },
      {
        "id": "t6",
        "text": "Băng vô trùng che kín vết thương và vận chuyển khẩn cấp lên bàn mổ",
        "icon": "🚑",
        "requires": [
          "t5"
        ],
        "hint": "Chuyển gấp đến phòng mổ vi phẫu nối mạch máu."
      }
    ],
    "lesson": "Ấn điểm ép -> Đặt vải đệm -> Buộc ga-rô phía trên vết thương -> Xoắn vừa đủ cầm máu -> Ghi giờ phút."
  },
  {
    "id": "tm-89",
    "level": 89,
    "title": "Xét Nghiệm Xác Định Nhóm Máu ABO Khẩn Cấp",
    "category": "medical",
    "categoryName": "Bác Sĩ Cấp Cứu",
    "icon": "🧪",
    "difficulty": 4,
    "description": "Thực hiện xét nghiệm ngưng kết kháng nguyên để chọn đúng bịch máu truyền cho bệnh nhân.",
    "tasks": [
      {
        "id": "t1",
        "text": "Sát trùng đầu ngón tay bằng cồn và dùng kim chích lấy 3 giọt máu",
        "icon": "🩸",
        "hint": "Lấy giọt máu tươi đặt lên phiến sứ sạch."
      },
      {
        "id": "t2",
        "text": "Nhỏ 3 giọt máu riêng biệt vào 3 giếng trên phiến sứ xét nghiệm",
        "icon": "⚪",
        "requires": [
          "t1"
        ],
        "hint": "Ba vị trí độc lập để thử với 3 kháng thể chuẩn."
      },
      {
        "id": "t3",
        "text": "Nhỏ lần lượt kháng thể Anti-A, Anti-B và Anti-AB vào từng giọt máu",
        "icon": "💧",
        "requires": [
          "t2"
        ],
        "hint": "Kháng thể mẫu phản ứng đặc hiệu với kháng nguyên."
      },
      {
        "id": "t4",
        "text": "Dùng 3 que khuấy riêng biệt trộn đều máu với từng loại huyết thanh",
        "icon": "🥢",
        "requires": [
          "t3"
        ],
        "hint": "Không dùng chung que để tránh dây chéo kháng thể."
      },
      {
        "id": "t5",
        "text": "Quan sát hiện tượng ngưng kết hồng cầu vón cục kết tủa dưới ánh đèn",
        "icon": "🔬",
        "requires": [
          "t4"
        ],
        "hint": "Vón ở giếng nào tương ứng có kháng nguyên đó."
      },
      {
        "id": "t6",
        "text": "Ghi nhận kết quả nhóm máu và dán nhãn định danh lên hồ sơ truyền máu",
        "icon": "📋",
        "requires": [
          "t5"
        ],
        "hint": "Đảm bảo nguyên tắc truyền máu an toàn cùng nhóm."
      }
    ],
    "lesson": "Chích máu 3 giọt -> Nhỏ kháng thể mẫu -> 3 que khuấy riêng -> Đọc hiện tượng ngưng kết -> Dán nhãn hồ sơ."
  },
  {
    "id": "tm-90",
    "level": 90,
    "title": "Dây Chuyền Lạnh Bảo Quản Vaccine Vận Chuyển Xa",
    "category": "medical",
    "categoryName": "Bác Sĩ Cấp Cứu",
    "icon": "💉",
    "difficulty": 4,
    "description": "Quy trình giữ nhiệt độ 2°C - 8°C cho hàng ngàn liều vaccine vận chuyển về vùng cao.",
    "tasks": [
      {
        "id": "t1",
        "text": "Lấy các bình tích lạnh trong tủ đông ra để trên bàn chờ tan sương",
        "icon": "🧊",
        "hint": "Làm tan sương giá bề mặt để bình không làm đông băng vaccine."
      },
      {
        "id": "t2",
        "text": "Lắc bình nghe tiếng nước óc ách là bình tích lạnh đạt chuẩn 0°C",
        "icon": "👂",
        "requires": [
          "t1"
        ],
        "hint": "Nhiệt độ bề mặt bình lúc này ổn định ở mức an toàn."
      },
      {
        "id": "t3",
        "text": "Lót các bình tích lạnh xung quanh 4 vách và đáy thùng giữ nhiệt",
        "icon": "📦",
        "requires": [
          "t2"
        ],
        "hint": "Tạo lớp khiên nhiệt bao bọc bốn phía."
      },
      {
        "id": "t4",
        "text": "Đặt nhiệt kế tự ghi nhiệt độ kỹ thuật số vào trung tâm thùng",
        "icon": "🌡️",
        "requires": [
          "t3"
        ],
        "hint": "Ghi lại nhật ký nhiệt độ liên tục trong hành trình."
      },
      {
        "id": "t5",
        "text": "Xếp các hộp vaccine bọc màng xốp vào giữa, không chạm trực tiếp bình lạnh",
        "icon": "💉",
        "requires": [
          "t4"
        ],
        "hint": "Tránh để lọ vaccine chạm sát bình đông lạnh."
      },
      {
        "id": "t6",
        "text": "Đậy kín nắp thùng xốp, dán băng keo niêm phong và dán nhãn dây chuyền lạnh",
        "icon": "🔒",
        "requires": [
          "t5"
        ],
        "hint": "Thùng lạnh sẵn sàng vận chuyển an toàn 48 giờ."
      }
    ],
    "lesson": "Tan sương bình tích lạnh -> Lót vách thùng -> Đặt nhiệt kế tự ghi -> Xếp vaccine ở giữa -> Niêm phong cách nhiệt."
  },
  {
    "id": "tm-91",
    "level": 91,
    "title": "Trang Bị Thiết Bị Cứu Sinh Trên Xe Cứu Thương",
    "category": "medical",
    "categoryName": "Bác Sĩ Cấp Cứu",
    "icon": "🚑",
    "difficulty": 3,
    "description": "Kiểm tra và nạp đủ oxy, máy sốc tim trước khi xe xuất bến trực chiến.",
    "tasks": [
      {
        "id": "t1",
        "text": "Kiểm tra áp suất đồng hồ bình oxy trung tâm đạt mức 150 bar",
        "icon": "🤿",
        "hint": "Oxy y tế là nguồn sống cứu nguy cho bệnh nhân suy hô hấp."
      },
      {
        "id": "t2",
        "text": "Bật máy thở cơ học thử test phổi giả kiểm tra van xả áp",
        "icon": "🫁",
        "requires": [
          "t1"
        ],
        "hint": "Đảm bảo máy thở cung cấp đủ thể tích khí lưu thông."
      },
      {
        "id": "t3",
        "text": "Kiểm tra dung lượng pin và điện cực của máy sốc tim khử rung AED",
        "icon": "⚡",
        "requires": [
          "t1"
        ],
        "hint": "Máy sốc tim sẵn sàng cấp cứu ngưng tim bất ngờ."
      },
      {
        "id": "t4",
        "text": "Bật máy hút đờm dịch áp lực âm kiểm tra ống thông sạch khuẩn",
        "icon": "🧪",
        "requires": [
          "t2"
        ],
        "hint": "Hút sạch dịch nhầy khai thông đường thở."
      },
      {
        "id": "t5",
        "text": "Kiểm tra vali thuốc cấp cứu: Adrenaline, dịch truyền NaCl 0.9%",
        "icon": "💼",
        "requires": [
          "t3"
        ],
        "hint": "Thuốc hồi sức cấp cứu phải đủ cơ số và còn hạn sử dụng."
      },
      {
        "id": "t6",
        "text": "Khóa chặt chốt an toàn cáng đẩy bánh xe vào sàn xe cứu thương",
        "icon": "🚑",
        "requires": [
          "t4",
          "t5"
        ],
        "hint": "Cáng đẩy được cố định không bị trượt khi xe phanh gấp."
      }
    ],
    "lesson": "Đồng hồ bình oxy -> Máy thở -> Máy sốc tim AED -> Máy hút đờm dịch -> Vali thuốc cấp cứu -> Chốt cáng đẩy."
  },
  {
    "id": "tm-92",
    "level": 92,
    "title": "Xử Lý Vết Thương Do Chó Cắn Phòng Dại",
    "category": "medical",
    "categoryName": "Bác Sĩ Cấp Cứu",
    "icon": "🐕",
    "difficulty": 3,
    "description": "Các bước rửa trôi virus dại và tiêm phòng kịp thời khi bị động vật cắn.",
    "tasks": [
      {
        "id": "t1",
        "text": "Rửa vết cắn dưới vòi nước chảy liên tục với xà phòng đặc trong 15 phút",
        "icon": "🧼",
        "hint": "Xà phòng phá hủy lớp vỏ lipid của virus dại hiệu quả nhất."
      },
      {
        "id": "t2",
        "text": "Rửa lại thật sạch vết thương bằng cồn đỏ povidone iodine sát khuẩn",
        "icon": "🧴",
        "requires": [
          "t1"
        ],
        "hint": "Tiêu diệt vi khuẩn kỵ khí uốn ván bám ở đáy vết cắn."
      },
      {
        "id": "t3",
        "text": "Dùng gạc vô trùng băng hở nhẹ nhàng, tuyệt đối không khâu kín vết thương",
        "icon": "🩹",
        "requires": [
          "t2"
        ],
        "hint": "Khâu kín sẽ tạo môi trường kỵ khí cho virus và vi khuẩn phát triển."
      },
      {
        "id": "t4",
        "text": "Đến trung tâm y tế tiêm ngay mũi huyết thanh kháng dại quanh vết thương",
        "icon": "💉",
        "requires": [
          "t3"
        ],
        "hint": "Huyết thanh cung cấp kháng thể tức thì bảo vệ cơ thể."
      },
      {
        "id": "t5",
        "text": "Tiêm mũi 1 vaccine phòng dại theo phác đồ tiêm bắp 5 mũi chuẩn",
        "icon": "🩺",
        "requires": [
          "t4"
        ],
        "hint": "Vaccine kích thích hệ miễn dịch tự tạo kháng thể lâu dài."
      },
      {
        "id": "t6",
        "text": "Nhốt theo dõi con chó trong 10-14 ngày xem có biểu hiện dại không",
        "icon": "🐕",
        "requires": [
          "t5"
        ],
        "hint": "Theo dõi thú cắn giúp bác sĩ quyết định các mũi tiêm tiếp theo."
      }
    ],
    "lesson": "Rửa xà phòng 15 phút -> Sát trùng cồn đỏ -> Băng hở không khâu -> Tiêm huyết thanh & vaccine -> Theo dõi chó."
  },
  {
    "id": "tm-93",
    "level": 93,
    "title": "Sơ Cứu Đúng Cách Khi Nghi Ngờ Ngộ Độc Thực Phẩm",
    "category": "medical",
    "categoryName": "Bác Sĩ Cấp Cứu",
    "icon": "🍄",
    "difficulty": 3,
    "description": "Quy tắc an toàn tối thượng của NHS: Không tự ý móc họng hay tự uống thuốc; báo người lớn và gọi 115 ngay.",
    "tasks": [
      {
        "id": "t1",
        "text": "Dừng ăn ngay lập tức và thu gom mẫu thức ăn thừa hoặc nấm độc nghi nhiễm vào túi sạch",
        "icon": "🍄",
        "hint": "Giữ lại mẫu vật phẩm và bao bì để bác sĩ xét nghiệm định danh chính xác loại độc tố."
      },
      {
        "id": "t2",
        "text": "Báo ngay cho người lớn và gọi đường dây nóng cấp cứu 115 hoặc Trung tâm Chống Độc",
        "icon": "📞",
        "requires": [
          "t1"
        ],
        "hint": "NHS hướng dẫn: Luôn tìm kiếm trợ giúp y tế khẩn cấp đầu tiên khi nghi ngộ độc."
      },
      {
        "id": "t3",
        "text": "Cung cấp rõ thông tin cho chuyên viên y tế: ăn món gì, lúc mấy giờ và triệu chứng hiện tại",
        "icon": "📋",
        "requires": [
          "t2"
        ],
        "hint": "Thời gian phơi nhiễm và triệu chứng giúp chuyên viên chỉ dẫn phương án xử lý phù hợp."
      },
      {
        "id": "t4",
        "text": "Đặt nạn nhân ở tư thế nằm nghiêng an toàn để thông thoáng đường thở nếu bị nôn tự nhiên",
        "icon": "🛌",
        "requires": [
          "t3"
        ],
        "hint": "Tư thế nằm nghiêng (Recovery position) ngăn nguy cơ hít sặc dịch nôn vào phổi."
      },
      {
        "id": "t5",
        "text": "Làm theo chỉ dẫn của chuyên viên y tế, tuyệt đối không tự ý móc họng hay tự cho uống thuốc",
        "icon": "🩺",
        "requires": [
          "t4"
        ],
        "hint": "NHS cảnh báo nghiêm cấm tự móc họng gây nôn hoặc tự uống than hoạt tính tại nhà."
      },
      {
        "id": "t6",
        "text": "Khẩn trương chuyển nạn nhân cùng mẫu thức ăn thừa đến bệnh viện theo chỉ dẫn cấp cứu",
        "icon": "🏥",
        "requires": [
          "t5"
        ],
        "hint": "Tại bệnh viện, các bác sĩ sẽ sử dụng thuốc giải độc đặc hiệu và theo dõi chuyên sâu."
      }
    ],
    "distractors": [
      {
        "id": "d1",
        "text": "Dùng ngón tay móc họng gây nôn hoặc tự ý cho uống than hoạt tính tại nhà",
        "icon": "🤮",
        "failReason": "NHS và các tổ chức y tế quốc tế nghiêm cấm tự móc họng gây nôn vì dễ làm trào ngược chất độc vào phổi gây ngạt thở, bỏng thực quản! Chỉ chuyên viên y tế mới được chỉ định phương pháp xử lý.",
        "scientificExplanation": "Kích thích gây nôn làm tăng nguy cơ hít sặc vào phế quản và tổn thương niêm mạc; than hoạt tính dùng sai thời điểm hoặc sai loại độc có thể gây tắc ruột."
      }
    ],
    "lesson": "Nghi ngộ độc: Dừng ăn & giữ mẫu vật -> Gọi 115 / Báo người lớn -> Nằm nghiêng an toàn -> Làm theo chuyên viên (Không tự móc họng)."
  },
  {
    "id": "tm-94",
    "level": 94,
    "title": "Thiết Lập Buồng Cách Ly Áp Lực Âm Phòng Dịch",
    "category": "medical",
    "categoryName": "Bác Sĩ Cấp Cứu",
    "icon": "☣️",
    "difficulty": 4,
    "description": "Cách ly bệnh nhân nhiễm virus đường hô hấp nguy hiểm không để lây lan ra ngoài.",
    "tasks": [
      {
        "id": "t1",
        "text": "Đóng kín toàn bộ cửa sổ và bịt kín các khe hở bằng gioăng cao su",
        "icon": "🚪",
        "hint": "Tạo không gian kín khí hoàn toàn."
      },
      {
        "id": "t2",
        "text": "Khởi động quạt hút khí công suất lớn xả khí qua màng lọc HEPA",
        "icon": "💨",
        "requires": [
          "t1"
        ],
        "hint": "Áp suất trong phòng thấp hơn hành lang bên ngoài 2.5 Pascal."
      },
      {
        "id": "t3",
        "text": "Kiểm tra máy đo chênh áp manometer thấy cột nước chỉ đúng vạch âm",
        "icon": "📟",
        "requires": [
          "t2"
        ],
        "hint": "Chắc chắn không khí chỉ hút vào phòng, không thổi ra ngoài."
      },
      {
        "id": "t4",
        "text": "Thiết lập buồng đệm khử khuẩn Anteroom hai lớp cửa ở lối ra vào",
        "icon": "🚪",
        "requires": [
          "t3"
        ],
        "hint": "Cửa ngoài chỉ mở được khi cửa trong đã đóng hoàn toàn."
      },
      {
        "id": "t5",
        "text": "Bác sĩ mặc bộ đồ bảo hộ cấp 4 chống dịch vi sinh và đeo khẩu trang N95",
        "icon": "🥼",
        "requires": [
          "t4"
        ],
        "hint": "Trang phục bảo vệ cá nhân ngăn chặn giọt bắn vi rút."
      },
      {
        "id": "t6",
        "text": "Đưa bệnh nhân vào phòng cách ly và kích hoạt camera quan sát từ xa 24/7",
        "icon": "📹",
        "requires": [
          "t5"
        ],
        "hint": "Theo dõi chỉ số sinh tồn liên tục qua màn hình trung tâm."
      }
    ],
    "lesson": "Kín khí phòng -> Quạt hút HEPA -> Kiểm tra áp suất âm -> Buồng đệm 2 cửa -> Mặc bảo hộ N95."
  },
  {
    "id": "tm-95",
    "level": 95,
    "title": "Cố Định Vận Chuyển Chấn Thương Cột Sống",
    "category": "medical",
    "categoryName": "Bác Sĩ Cấp Cứu",
    "icon": "🩹",
    "difficulty": 4,
    "description": "Nguyên tắc khúc gỗ (Log-roll) xoay người bệnh nhân nghi gãy đốt sống cổ.",
    "tasks": [
      {
        "id": "t1",
        "text": "Một người quỳ giữ chặt đầu nạn nhân theo trục thẳng, cấm lắc đầu",
        "icon": "💆",
        "hint": "Bảo vệ tủy sống cổ không bị chèn ép gây liệt tứ chi."
      },
      {
        "id": "t2",
        "text": "Lắp nẹp cổ cứng cổ cứng Philadelphia ôm khít cằm và gáy nạn nhân",
        "icon": "🦺",
        "requires": [
          "t1"
        ],
        "hint": "Khóa cứng chuyển động gập ngửa của đốt sống cổ."
      },
      {
        "id": "t3",
        "text": "Ba nhân viên y tế đứng cùng một bên nạn nhân đặt tay lên vai, hông, chân",
        "icon": "👥",
        "requires": [
          "t2"
        ],
        "hint": "Phối hợp nhịp nhàng theo khẩu lệnh của người giữ đầu."
      },
      {
        "id": "t4",
        "text": "Đếm 1-2-3 xoay toàn bộ thân mình nạn nhân nghiêng như một khúc gỗ",
        "icon": "🪵",
        "requires": [
          "t3"
        ],
        "hint": "Đầu, cổ và lưng luôn nằm trên một đường thẳng tuyệt đối."
      },
      {
        "id": "t5",
        "text": "Người thứ tư trượt nhanh cáng cứng cột sống vào dưới lưng nạn nhân",
        "icon": "📐",
        "requires": [
          "t4"
        ],
        "hint": "Đặt cáng cứng chuyên dụng bằng nhựa đúc chịu lực."
      },
      {
        "id": "t6",
        "text": "Hạ nạn nhân nằm ngửa trên cáng và cài đai dây an toàn chữ X qua ngực hông",
        "icon": "🔒",
        "requires": [
          "t5"
        ],
        "hint": "Cố định chắc chắn trước khi nhấc cáng lên xe cấp cứu."
      }
    ],
    "lesson": "Giữ thẳng trục đầu cổ -> Đeo nẹp cổ cứng -> Đội 3 người đứng cạnh -> Lăn khúc gỗ -> Trượt cáng cứng -> Cài đai chữ X."
  },
  {
    "id": "tm-96",
    "level": 96,
    "title": "Phân Loại Nạn Nhân Thảm Họa (START Triage)",
    "category": "medical",
    "categoryName": "Bác Sĩ Cấp Cứu",
    "icon": "🏷️",
    "difficulty": 4,
    "description": "Quy trình phân loại 4 màu sắc Đỏ - Vàng - Xanh - Đen cứu được nhiều người nhất khi tai nạn hàng loạt.",
    "tasks": [
      {
        "id": "t1",
        "text": "Hét to: Ai có thể đi lại được hãy di chuyển về phía gốc cây xanh",
        "icon": "🚶",
        "hint": "Tách ngay nhóm thương tích nhẹ (Nhãn Xanh)."
      },
      {
        "id": "t2",
        "text": "Tiếp cận nạn nhân nằm yên, kiểm tra nhịp thở hô hấp",
        "icon": "🫁",
        "requires": [
          "t1"
        ],
        "hint": "Nếu không thở, ngửa đầu mở đường thở; nếu vẫn không thở là Nhãn Đen."
      },
      {
        "id": "t3",
        "text": "Đếm nhịp thở: Nếu thở trên 30 lần/phút gắn ngay Thẻ Đỏ khẩn cấp",
        "icon": "🔴",
        "requires": [
          "t2"
        ],
        "hint": "Thở quá nhanh là dấu hiệu suy hô hấp hoặc sốc mất máu cấp."
      },
      {
        "id": "t4",
        "text": "Bấm đầu ngón tay kiểm tra mao mạch hồi máu (CRT) trên 2 giây",
        "icon": "👆",
        "requires": [
          "t2"
        ],
        "hint": "Mao mạch hồi máu chậm chứng tỏ tụt huyết áp nặng, gắn Thẻ Đỏ."
      },
      {
        "id": "t5",
        "text": "Kiểm tra thực hiện y lệnh đơn giản Nắm tay lại: Không làm được gắn Thẻ Đỏ",
        "icon": "✊",
        "requires": [
          "t3",
          "t4"
        ],
        "hint": "Rối loạn tri giác cần cấp cứu hồi sức ngay lập tức."
      },
      {
        "id": "t6",
        "text": "Nạn nhân thở đều, mạch rõ, tỉnh táo gắn Thẻ Vàng chờ điều trị",
        "icon": "🟡",
        "requires": [
          "t5"
        ],
        "hint": "Nhóm Thẻ Vàng có tổn thương nhưng chưa đe dọa tính mạng ngay."
      }
    ],
    "lesson": "Tách người đi lại (Xanh) -> Kiểm tra hô hấp -> Bắt mạch mao mạch -> Đánh giá tri giác -> Thẻ Đỏ ưu tiên số 1."
  },
  {
    "id": "tm-97",
    "level": 97,
    "title": "Chụp X-Quang Kỹ Thuật Số Tìm Dị Vật Phổi",
    "category": "medical",
    "categoryName": "Bác Sĩ Cấp Cứu",
    "icon": "🩻",
    "difficulty": 3,
    "description": "Vận hành máy phát tia X chẩn đoán hình ảnh xác định vị trí chiếc đinh ghim bé nuốt phải.",
    "tasks": [
      {
        "id": "t1",
        "text": "Tháo bỏ trang sức dây chuyền kim loại và mặc áo chì bảo vệ vùng bụng",
        "icon": "🦺",
        "hint": "Áo chì chắn tia X bảo vệ các cơ quan nhạy cảm phóng xạ."
      },
      {
        "id": "t2",
        "text": "Hướng dẫn bệnh nhân đứng áp sát ngực vào tấm cảm biến số DR",
        "icon": "🧍",
        "requires": [
          "t1"
        ],
        "hint": "Tư thế chụp tim phổi thẳng đứng chuẩn PA."
      },
      {
        "id": "t3",
        "text": "Bác sĩ bước vào phòng điều khiển sau bức tường kính chì bảo vệ",
        "icon": "🛡️",
        "requires": [
          "t2"
        ],
        "hint": "Tường chắn chì bảo vệ kỹ thuật viên khỏi tia phóng xạ tán xạ."
      },
      {
        "id": "t4",
        "text": "Qua micro nhắc bệnh nhân: Hít sâu vào... Nín thở lại!",
        "icon": "🎙️",
        "requires": [
          "t3"
        ],
        "hint": "Hít sâu làm nở căng lồng ngực tạo độ tương phản tối ưu trên phim."
      },
      {
        "id": "t5",
        "text": "Nhấn nút phát tia X trong 0.05 giây quét qua lồng ngực",
        "icon": "🔘",
        "requires": [
          "t4"
        ],
        "hint": "Tia X xuyên qua mô mềm và bị kim loại cản lại tạo bóng sáng."
      },
      {
        "id": "t6",
        "text": "Mở ảnh trên màn hình độ phân giải cao phóng to vị trí dị vật phế quản",
        "icon": "🖥️",
        "requires": [
          "t5"
        ],
        "hint": "Xác định chiếc đinh nằm ở phế quản gốc phải chuẩn bị nội soi gắp."
      }
    ],
    "lesson": "Mặc tạp dề chì -> Áp ngực cảm biến -> Vào buồng kính chì -> Hít sâu nín thở -> Phát tia X -> Đọc phim."
  },
  {
    "id": "tm-98",
    "level": 98,
    "title": "Pha Dung Dịch Oresol Chuẩn Nồng Độ Thẩm Thấu",
    "category": "medical",
    "categoryName": "Bác Sĩ Cấp Cứu",
    "icon": "🧂",
    "difficulty": 3,
    "description": "Khoa học pha gói oresol: Sai thể tích nước sẽ gây nguy hiểm tính mạng.",
    "tasks": [
      {
        "id": "t1",
        "text": "Rửa sạch tay bằng xà phòng và chuẩn bị bình thủy tinh có vạch chia ml",
        "icon": "🧼",
        "hint": "Bình có vạch đo thể tích giúp đo chuẩn xác không ước lượng."
      },
      {
        "id": "t2",
        "text": "Đọc kỹ hướng dẫn trên gói oresol: Pha trọn vẹn với đúng 1 lít nước",
        "icon": "📖",
        "requires": [
          "t1"
        ],
        "hint": "Tuyệt đối không chia nửa gói vì bột muối và đường không phân bố đều."
      },
      {
        "id": "t3",
        "text": "Đong đúng 1000ml (1 lít) nước đun sôi để nguội rót vào bình",
        "icon": "🥛",
        "requires": [
          "t2"
        ],
        "hint": "Dùng nước nguội, không dùng nước khoáng hay nước ngọt có ga."
      },
      {
        "id": "t4",
        "text": "Cắt góc gói oresol và đổ toàn bộ lượng bột trong gói vào bình nước",
        "icon": "✂️",
        "requires": [
          "t3"
        ],
        "hint": "Đổ hết toàn bộ gói để đảm bảo áp suất thẩm thấu đẳng trương 245 mOsm/L."
      },
      {
        "id": "t5",
        "text": "Dùng thìa sạch khuấy đều cho tới khi các hạt muối đường tan trong suốt",
        "icon": "🥄",
        "requires": [
          "t4"
        ],
        "hint": "Hòa tan hoàn toàn giúp ruột non hấp thu natri và glucose tối đa."
      },
      {
        "id": "t6",
        "text": "Cho bệnh nhân uống từng thìa nhỏ và đổ bỏ dung dịch sau 24 giờ",
        "icon": "🍼",
        "requires": [
          "t5"
        ],
        "hint": "Dung dịch để quá 24h dễ bị vi khuẩn xâm nhập lên men chua."
      }
    ],
    "distractors": [
      {
        "id": "d1",
        "text": "Pha gói oresol với một cốc nước nhỏ cho đậm đặc nhanh khỏi",
        "icon": "⚠️",
        "failReason": "Pha quá đặc làm tăng nồng độ muối máu gây teo tế bào não và co giật tử vong!",
        "scientificExplanation": "Dung dịch ưu trương hút nước từ tế bào ra ngoài mạch máu làm phù não và rối loạn điện giải nghiêm trọng."
      }
    ],
    "lesson": "Rửa tay -> Đọc chỉ định -> Đong chuẩn 1000ml nước nguội -> Đổ cả gói -> Khuấy tan -> Uống trong 24 giờ."
  },
  {
    "id": "tm-99",
    "level": 99,
    "title": "Quy Trình Lấy Máu Tĩnh Mạch Xét Nghiệm",
    "category": "medical",
    "categoryName": "Bác Sĩ Cấp Cứu",
    "icon": "💉",
    "difficulty": 4,
    "description": "Thao tác chuẩn lấy máu xét nghiệm đường huyết và men gan không gây vỡ hồng cầu.",
    "tasks": [
      {
        "id": "t1",
        "text": "Đối chiếu họ tên, ngày sinh của bệnh nhân với mã vạch trên ống nghiệm",
        "icon": "🏷️",
        "hint": "Quy tắc 5 đúng tránh nhầm lẫn mẫu máu giữa các bệnh nhân."
      },
      {
        "id": "t2",
        "text": "Buộc dây garô cách nếp gấp khuỷu tay 5-7cm và bảo bệnh nhân nắm chặt tay",
        "icon": "🎗️",
        "requires": [
          "t1"
        ],
        "hint": "Dây ga-rô làm tĩnh mạch nông nổi rõ dễ chọc kim."
      },
      {
        "id": "t3",
        "text": "Sát khuẩn vùng tĩnh mạch hình xoắn ốc từ trong ra ngoài bằng cồn 70 độ",
        "icon": "🧴",
        "requires": [
          "t2"
        ],
        "hint": "Sát khuẩn xoắn ốc đẩy vi khuẩn ra xa vị trí chọc kim."
      },
      {
        "id": "t4",
        "text": "Cầm kim ngửa mặt vát 15-30 độ chích nhẹ vào lòng tĩnh mạch",
        "icon": "💉",
        "requires": [
          "t3"
        ],
        "hint": "Thấy máu đỏ trào vào đốc kim là kim đã vào đúng lòng mạch."
      },
      {
        "id": "t5",
        "text": "Kéo nhẹ pít-tông lấy đủ 5ml máu rồi tháo dây ga-rô trước khi rút kim",
        "icon": "🩸",
        "requires": [
          "t4"
        ],
        "hint": "Tháo ga-rô trước để giải phóng áp lực tránh tạo vết bầm tím lớn."
      },
      {
        "id": "t6",
        "text": "Ấn gạc khô vô trùng lên vị trí chọc và bơm máu nhẹ nhàng vào ống chống đông",
        "icon": "🧪",
        "requires": [
          "t5"
        ],
        "hint": "Bơm nghiêng theo thành ống nghiệm tránh lực mạnh làm vỡ hồng cầu."
      }
    ],
    "lesson": "Đối soát mã vạch -> Buộc ga-rô -> Sát khuẩn xoắn ốc -> Chọc kim mặt vát -> Tháo ga-rô -> Bơm nhẹ vào ống nghiệm."
  },
  {
    "id": "tm-100",
    "level": 100,
    "title": "Màn Trùm: Điều Phối Trực Thăng Cứu Nạn Biển Đảo",
    "category": "medical",
    "categoryName": "Bác Sĩ Cấp Cứu",
    "icon": "🚁",
    "difficulty": 5,
    "description": "Sứ mệnh phối hợp giữa kíp mổ dã chiến và trực thăng EC-225 cứu ngư dân nguy kịch.",
    "tasks": [
      {
        "id": "t1",
        "text": "Tiếp nhận điện tín SOS khẩn cấp từ đảo Song Tử Tây và bật còi báo động",
        "icon": "📻",
        "hint": "Thu thập thông tin sinh tồn ban đầu của bệnh nhân."
      },
      {
        "id": "t2",
        "text": "Chuẩn bị vali cấp cứu hồi sức, máy thở xách tay và 4 đơn vị hồng cầu nhóm O",
        "icon": "💼",
        "requires": [
          "t1"
        ],
        "hint": "Trang bị đầy đủ thiết bị hồi sức bay cấp cứu."
      },
      {
        "id": "t3",
        "text": "Kíp cấp cứu lên trực thăng cất cánh vượt biển trong điều kiện gió cấp 6",
        "icon": "🚁",
        "requires": [
          "t2"
        ],
        "hint": "Phi công tính toán lượng dầu bay khứ hồi an toàn."
      },
      {
        "id": "t4",
        "text": "Hạ cánh xuống bãi đáp đảo, bác sĩ đặt nội khí quản và truyền dịch chống sốc",
        "icon": "🏝️",
        "requires": [
          "t3"
        ],
        "hint": "Hồi sức ổn định huyết áp cho bệnh nhân trước khi cất cánh về đất liền."
      },
      {
        "id": "t5",
        "text": "Đưa bệnh nhân lên cáng chuyên dụng của trực thăng và kết nối máy theo dõi SPO2",
        "icon": "📟",
        "requires": [
          "t4"
        ],
        "hint": "Giám sát nồng độ oxy máu liên tục trong khoang bay."
      },
      {
        "id": "t6",
        "text": "Đáp xuống nóc bệnh viện trung ương và chuyển thẳng bệnh nhân vào phòng mổ",
        "icon": "🏥",
        "requires": [
          "t5"
        ],
        "hint": "Ca cứu hộ thành công trọn vẹn đưa người bệnh đến bàn mổ vi phẫu."
      }
    ],
    "distractors": [
      {
        "id": "d1",
        "text": "Cho trực thăng cất cánh ngay mà không mang máy thở và máu dự trữ",
        "icon": "⚠️",
        "failReason": "Bệnh nhân suy hô hấp trên khoang bay thiếu oxy sẽ tử vong nếu không có máy thở chuyên dụng!"
      }
    ],
    "lesson": "Nhận SOS -> Chuẩn bị máy thở & máu O -> Trực thăng bay -> Ổn định huyết áp tại đảo -> Bay về thẳng phòng mổ."
  },
  {
    "id": "tm-101",
    "level": 101,
    "title": "Dây Chuyền Cấp Phôi Tự Động Máy Phay CNC",
    "category": "computing",
    "categoryName": "Nhà Máy Robot",
    "icon": "⚙️",
    "difficulty": 3,
    "description": "Tự động hóa nạp phôi nhôm nguyên khối vào buồng gia công cơ khí chính xác.",
    "tasks": [
      {
        "id": "t1",
        "text": "Băng tải con lăn vận chuyển phôi nhôm thô vào vị trí đón",
        "icon": "📦",
        "hint": "Băng chuyền đưa vật liệu thô đến phạm vi robot."
      },
      {
        "id": "t2",
        "text": "Cảm biến quang điện phát hiện phôi và kích hoạt chốt hãm dừng băng tải",
        "icon": "🔴",
        "requires": [
          "t1"
        ],
        "hint": "Cảm biến hồng ngoại xác định phôi đã đến đúng điểm hẹn."
      },
      {
        "id": "t3",
        "text": "Cánh tay robot hút chân không nhấc phôi nhôm lên xoay 90 độ",
        "icon": "🦾",
        "requires": [
          "t2"
        ],
        "hint": "Cốc hút chân không bám chặt bề mặt phẳng của phôi."
      },
      {
        "id": "t4",
        "text": "Cửa trượt buồng máy CNC mở ra đón tay robot đưa phôi vào etô kẹp",
        "icon": "🚪",
        "requires": [
          "t3"
        ],
        "hint": "Cửa máy tự động trượt mở nhịp nhàng."
      },
      {
        "id": "t5",
        "text": "Etô thủy lực kẹp chặt phôi và tay robot nhả hút rút về vị trí an toàn",
        "icon": "🗜️",
        "requires": [
          "t4"
        ],
        "hint": "Lực kẹp thủy lực hàng tấn giữ phôi không bị rung lắc."
      },
      {
        "id": "t6",
        "text": "Cửa CNC đóng kín và đầu dao phay xoay 24.000 vòng/phút bắt đầu cắt gọt",
        "icon": "⚡",
        "requires": [
          "t5"
        ],
        "hint": "Chất làm mát phun sương và dao phay tạo hình chi tiết."
      }
    ],
    "lesson": "Băng tải chạy -> Cảm biến dừng -> Robot hút phôi -> Cửa mở -> Etô kẹp chặt -> Đóng cửa dao phay quay."
  },
  {
    "id": "tm-102",
    "level": 102,
    "title": "Lắp Ráp Cánh Tay Robot Công Nghiệp 6 Trục (6-DOF)",
    "category": "computing",
    "categoryName": "Nhà Máy Robot",
    "icon": "🦾",
    "difficulty": 4,
    "description": "Lắp đặt cỗ máy robot 6 khớp xoay linh hoạt như cánh tay con người.",
    "tasks": [
      {
        "id": "t1",
        "text": "Cố định đế thép đúc của robot xuống sàn bê tông bằng bu-lông cường độ cao",
        "icon": "⚓",
        "hint": "Đế robot phải tuyệt đối vững chắc không rung lắc khi xoay nhanh."
      },
      {
        "id": "t2",
        "text": "Lắp động cơ servo trục 1 quay tròn 360 độ quanh trục thẳng đứng",
        "icon": "🔄",
        "requires": [
          "t1"
        ],
        "hint": "Trục 1 đảm nhiệm xoay cả cánh tay theo hướng ngang."
      },
      {
        "id": "t3",
        "text": "Gắn khớp vai trục 2 và khớp khuỷu trục 3 kèm hộp giảm tốc Harmonic",
        "icon": "💪",
        "requires": [
          "t2"
        ],
        "hint": "Hộp số giảm tốc biến tốc độ cao thành lực kéo mô-men xoắn lớn."
      },
      {
        "id": "t4",
        "text": "Lắp cổ tay linh hoạt gồm 3 trục xoay nhỏ (trục 4, 5, 6)",
        "icon": "🖐️",
        "requires": [
          "t3"
        ],
        "hint": "Cổ tay 3 trục cho phép robot xoay đầu kẹp theo mọi góc độ 3D."
      },
      {
        "id": "t5",
        "text": "Đi dây cáp truyền tín hiệu encoder và ống khí nén trong thân cánh tay",
        "icon": "🔌",
        "requires": [
          "t4"
        ],
        "hint": "Dây luồn kín bên trong tránh bị kẹp gãy khi cánh tay uốn lượn."
      },
      {
        "id": "t6",
        "text": "Chạy chương trình hiệu chuẩn Calibrate đưa 6 khớp về vị trí gốc Home",
        "icon": "🎯",
        "requires": [
          "t5"
        ],
        "hint": "Hiệu chuẩn điểm không tuyệt đối đạt độ chính xác 0.02mm."
      }
    ],
    "lesson": "Bắt bu-lông đế -> Lắp trục xoay đế -> Lắp khớp vai khuỷu -> Lắp cổ tay 3 trục -> Đi dây cáp -> Hiệu chuẩn Home."
  },
  {
    "id": "tm-103",
    "level": 103,
    "title": "Lập Trình Xe Tự Hành AGV Dò Đường Vạch Từ Tính",
    "category": "computing",
    "categoryName": "Nhà Máy Robot",
    "icon": "🚙",
    "difficulty": 3,
    "description": "Thuật toán điều khiển PID giúp xe robot chở hàng bám sát vạch từ trên sàn xưởng.",
    "tasks": [
      {
        "id": "t1",
        "text": "Dán dải băng từ tính màu xám chạy zíc zắc trên sàn nhà xưởng",
        "icon": "〰️",
        "hint": "Dải băng phát từ trường dẫn đường cho xe chở hàng."
      },
      {
        "id": "t2",
        "text": "Cụm cảm biến từ tính dưới gầm xe quét phát hiện cường độ từ trường",
        "icon": "📡",
        "requires": [
          "t1"
        ],
        "hint": "Cảm biến nhận biết xe đang lệch trái hay lệch phải bao nhiêu mm."
      },
      {
        "id": "t3",
        "text": "Bộ vi xử lý tính toán giải thuật PID điều chỉnh vi sai tốc độ 2 bánh",
        "icon": "🧠",
        "requires": [
          "t2"
        ],
        "hint": "Thuật toán PID bẻ lái bánh xe mượt mà không bị giật lắc."
      },
      {
        "id": "t4",
        "text": "Động cơ bước điều chỉnh tốc độ bánh trái bánh phải đưa xe về tim vạch",
        "icon": "🛞",
        "requires": [
          "t3"
        ],
        "hint": "Xe bám sát theo đường cong của dải từ trường."
      },
      {
        "id": "t5",
        "text": "Cảm biến LiDAR quét vật cản phía trước: Giảm tốc nếu có người đứng",
        "icon": "👁️",
        "requires": [
          "t4"
        ],
        "hint": "An toàn lao động: tự động phanh khi phát hiện chướng ngại vật."
      },
      {
        "id": "t6",
        "text": "Đến trạm nhận hàng đọc mã vạch QR code trên sàn và nâng bàn nâng hàng",
        "icon": "📦",
        "requires": [
          "t5"
        ],
        "hint": "Nhận diện đúng vị trí kho bãi và nâng kiện hàng lên."
      }
    ],
    "lesson": "Dán dải từ -> Cảm biến gầm đọc lệch -> Giải thuật PID -> Bẻ lái bánh -> Quét vật cản LiDAR -> Nâng hàng."
  },
  {
    "id": "tm-104",
    "level": 104,
    "title": "Bản Đồ Hóa 3D Không Gian Bằng Cảm Biến LiDAR (SLAM)",
    "category": "computing",
    "categoryName": "Nhà Máy Robot",
    "icon": "🌐",
    "difficulty": 4,
    "description": "Quy trình robot tự định vị và vẽ bản đồ số hóa nhà kho thông minh.",
    "tasks": [
      {
        "id": "t1",
        "text": "Khởi động mô-đun phát chùm tia laser xoay 360 độ với tần số 10Hz",
        "icon": "🟢",
        "hint": "Hàng ngàn tia laser quét quanh phòng đo khoảng cách tới các bức tường."
      },
      {
        "id": "t2",
        "text": "Đo thời gian bay của tia laser (Time-of-Flight) tính ra khoảng cách milimet",
        "icon": "⏱️",
        "requires": [
          "t1"
        ],
        "hint": "Vận tốc ánh sáng nhân thời gian chia đôi cho khoảng cách chính xác."
      },
      {
        "id": "t3",
        "text": "Tập hợp hàng triệu điểm phản xạ laser thành đám mây điểm (Point Cloud)",
        "icon": "☁️",
        "requires": [
          "t2"
        ],
        "hint": "Đám mây điểm phác họa hình dáng các kệ hàng và cột trụ."
      },
      {
        "id": "t4",
        "text": "Cảm biến quán tính IMU đo góc nghiêng và gia tốc dịch chuyển của xe",
        "icon": "🧭",
        "requires": [
          "t1"
        ],
        "hint": "Đo độ xoay của xe khi robot di chuyển trong phòng."
      },
      {
        "id": "t5",
        "text": "Thuật toán lọc Kalman kết hợp dữ liệu LiDAR và IMU triệt tiêu sai số",
        "icon": "📐",
        "requires": [
          "t3",
          "t4"
        ],
        "hint": "Hợp nhất cảm biến (Sensor Fusion) cho kết quả định vị cực chuẩn."
      },
      {
        "id": "t6",
        "text": "Xuất bản đồ lưới 2D/3D lưu vào bộ nhớ flash để robot tự động di chuyển",
        "icon": "🗺️",
        "requires": [
          "t5"
        ],
        "hint": "Bản đồ hoàn tất giúp robot tự dẫn đường không cần đường ray."
      }
    ],
    "lesson": "Bật laser LiDAR -> Đo thời gian bay ToF -> Tạo mây điểm 3D -> Đo góc IMU -> Hợp nhất Kalman -> Xuất bản đồ SLAM."
  },
  {
    "id": "tm-105",
    "level": 105,
    "title": "Hàn Laser Vỏ Thân Xe Ô Tô Điện Tự Động",
    "category": "computing",
    "categoryName": "Nhà Máy Robot",
    "icon": "⚡",
    "difficulty": 4,
    "description": "Tia laser sợi quang nung chảy mép thép siêu bền gắn kết khung xe nguyên khối.",
    "tasks": [
      {
        "id": "t1",
        "text": "Đồ gá Jig thủy lực ép chặt tấm trần xe và sườn xe khít khe hở dưới 0.1mm",
        "icon": "🗜️",
        "hint": "Hàn laser đòi hỏi hai mép kim loại phải khít tuyệt đối."
      },
      {
        "id": "t2",
        "text": "Thổi luồng khí trơ Argon che chắn vùng hàn chống oxy hóa",
        "icon": "💨",
        "requires": [
          "t1"
        ],
        "hint": "Khí trơ ngăn oxy trong không khí làm rỗ mối hàn kim loại."
      },
      {
        "id": "t3",
        "text": "Camera quang học trên đầu hàn bám theo rãnh nối định vị đường kính",
        "icon": "📷",
        "requires": [
          "t2"
        ],
        "hint": "Hệ thống bám rãnh Seam Tracking điều chỉnh chùm laser chính xác."
      },
      {
        "id": "t4",
        "text": "Phát chùm tia laser sợi quang công suất 6000W nung chảy mép thép",
        "icon": "🔥",
        "requires": [
          "t3"
        ],
        "hint": "Nhiệt độ tập trung làm hai mép kim loại hòa quyện vào nhau."
      },
      {
        "id": "t5",
        "text": "Đầu robot di chuyển đều đặn tốc độ 50mm/giây tạo vẩy hàn sáng bóng",
        "icon": "🦾",
        "requires": [
          "t4"
        ],
        "hint": "Tốc độ ổn định cho đường hàn phẳng mịn không cần mài lại."
      },
      {
        "id": "t6",
        "text": "Cảm biến siêu âm quét kiểm tra độ ngấu sâu và độ kín khít của mối hàn",
        "icon": "🔍",
        "requires": [
          "t5"
        ],
        "hint": "Bảo đảm thân xe đạt tiêu chuẩn an toàn va chạm 5 sao."
      }
    ],
    "lesson": "Đồ gá ép khít -> Thổi khí trơ Argon -> Bám rãnh quang học -> Bắn laser 6000W -> Di chuyển đều -> Quét siêu âm."
  },
  {
    "id": "tm-106",
    "level": 106,
    "title": "Camera AI Kiểm Tra Lỗi Sản Phẩm Trên Băng Chuyền",
    "category": "computing",
    "categoryName": "Nhà Máy Robot",
    "icon": "👁️",
    "difficulty": 3,
    "description": "Thị giác máy tính (Computer Vision) phát hiện chai nước bị thiếu nắp hoặc nứt vỡ.",
    "tasks": [
      {
        "id": "t1",
        "text": "Chai nước chạy qua buồng chụp ảnh có đèn LED vòng chiếu sáng đồng đều",
        "icon": "💡",
        "hint": "Ánh sáng đồng đều loại bỏ bóng đổ giúp ảnh chụp rõ nét."
      },
      {
        "id": "t2",
        "text": "Cảm biến quang kích hoạt camera công nghiệp chụp ảnh ở tốc độ 1/5000s",
        "icon": "📸",
        "requires": [
          "t1"
        ],
        "hint": "Tốc độ chụp siêu nhanh bắt dính vật thể chuyển động không bị nhòe."
      },
      {
        "id": "t3",
        "text": "Chuyển đổi ảnh chụp sang ma trận điểm ảnh và gửi về vi xử lý đồ họa GPU",
        "icon": "🖼️",
        "requires": [
          "t2"
        ],
        "hint": "Bộ xử lý GPU chuyên dụng cho thuật toán mạng nơ-ron tích chập CNN."
      },
      {
        "id": "t4",
        "text": "Mô hình AI so sánh hình ảnh với hàng triệu mẫu chai chuẩn và phát hiện vết nứt",
        "icon": "🧠",
        "requires": [
          "t3"
        ],
        "hint": "Mạng nơ-ron nhận diện khuyết tật nhỏ đến 0.1mm trong 10 mili-giây."
      },
      {
        "id": "t5",
        "text": "Hệ thống phát tín hiệu NG (Not Good) tới van khí nén đẩy sản phẩm lỗi",
        "icon": "⚠️",
        "requires": [
          "t4"
        ],
        "hint": "Phân loại sản phẩm đạt chuẩn OK và không đạt NG."
      },
      {
        "id": "t6",
        "text": "Vòi phun khí nén thổi luồng hơi cực mạnh đẩy chai nứt văng vào thùng loại",
        "icon": "💨",
        "requires": [
          "t5"
        ],
        "hint": "Loại bỏ tức thì chai lỗi mà không làm dừng băng chuyền."
      }
    ],
    "lesson": "Chiếu sáng đèn LED -> Chụp ảnh tốc độ cao -> Gửi về GPU -> AI nhận diện nứt -> Bắn khí nén loại bỏ."
  },
  {
    "id": "tm-107",
    "level": 107,
    "title": "Thuật Toán Sắp Xếp Kiện Hàng Kho Vận (Merge Sort)",
    "category": "computing",
    "categoryName": "Nhà Máy Robot",
    "icon": "📊",
    "difficulty": 4,
    "description": "Quy trình phân chia để trị (Divide & Conquer) sắp xếp hàng ngàn gói bưu phẩm theo mã vùng.",
    "tasks": [
      {
        "id": "t1",
        "text": "Tiếp nhận danh sách các kiện hàng với mã bưu chính lộn xộn",
        "icon": "📋",
        "hint": "Dữ liệu đầu vào cần được sắp xếp từ nhỏ đến lớn."
      },
      {
        "id": "t2",
        "text": "Chia đôi danh sách kiện hàng thành 2 nửa: nửa bên trái và nửa bên phải",
        "icon": "➗",
        "requires": [
          "t1"
        ],
        "hint": "Bước phân rã (Divide) chia bài toán lớn thành các bài toán nhỏ."
      },
      {
        "id": "t3",
        "text": "Tiếp tục đệ quy chia nhỏ cho tới khi mỗi nhóm chỉ còn đúng 1 kiện hàng",
        "icon": "📦",
        "requires": [
          "t2"
        ],
        "hint": "Một nhóm có 1 kiện hàng hiển nhiên đã được coi là sắp xếp xong."
      },
      {
        "id": "t4",
        "text": "So sánh mã số hai kiện hàng đơn lẻ và ghép lại thành cặp 2 kiện có thứ tự",
        "icon": "⚖️",
        "requires": [
          "t3"
        ],
        "hint": "Kiện nào có mã bưu chính nhỏ hơn thì xếp đứng trước."
      },
      {
        "id": "t5",
        "text": "Trộn (Merge) tuần tự các mảng đã có thứ tự lại thành danh sách hoàn chỉnh",
        "icon": "🔀",
        "requires": [
          "t4"
        ],
        "hint": "Bước tổng hợp (Merge) với độ phức tạp tối ưu O(N log N)."
      },
      {
        "id": "t6",
        "text": "Chuyển danh sách kiện hàng đã xếp thứ tự cho robot tự hành bốc dỡ vào xe",
        "icon": "🚚",
        "requires": [
          "t5"
        ],
        "hint": "Các kiện hàng xếp theo thứ tự địa chỉ giao hàng của tài xế."
      }
    ],
    "lesson": "Nhận danh sách -> Chia đôi -> Đệ quy tới mảng đơn -> So sánh cặp đôi -> Trộn mảng có thứ tự -> Bốc lên xe."
  },
  {
    "id": "tm-108",
    "level": 108,
    "title": "Cánh Tay Gắp Dán Linh Kiện Điện Tử SMT Siêu Tốc",
    "category": "computing",
    "categoryName": "Nhà Máy Robot",
    "icon": "📟",
    "difficulty": 3,
    "description": "Máy dán linh kiện SMD gắn 40.000 chip siêu nhỏ mỗi giờ lên bo mạch vi tính.",
    "tasks": [
      {
        "id": "t1",
        "text": "Máy in lưới phết một lớp kem thiếc hàn (Solder Paste) lên các chân đệm mạch",
        "icon": "🧈",
        "hint": "Kem thiếc gồm hạt kim loại và chất trợ hàn giữ linh kiện tạm thời."
      },
      {
        "id": "t2",
        "text": "Bo mạch xanh di chuyển vào vị trí làm việc của máy gắn linh kiện SMT",
        "icon": "🟩",
        "requires": [
          "t1"
        ],
        "hint": "Cảm biến chốt định vị bo mạch không bị xê dịch."
      },
      {
        "id": "t3",
        "text": "Đầu hút chân không gắp chip vi xử lý từ cuộn băng nạp linh kiện",
        "icon": "🤏",
        "requires": [
          "t2"
        ],
        "hint": "Đầu hút siêu nhỏ đường kính chỉ 0.3mm."
      },
      {
        "id": "t4",
        "text": "Camera quang học bay ngang soi chân chip và hiệu chỉnh góc xoay lệch 0.01 độ",
        "icon": "📐",
        "requires": [
          "t3"
        ],
        "hint": "Hiệu chỉnh vị trí trước khi hạ xuống bo mạch."
      },
      {
        "id": "t5",
        "text": "Đặt nhẹ nhàng chân chip khớp chính xác vào lớp kem thiếc trên bo mạch",
        "icon": "🎯",
        "requires": [
          "t4"
        ],
        "hint": "Độ dính của kem thiếc giữ chip cố định."
      },
      {
        "id": "t6",
        "text": "Bo mạch chạy qua lò sấy nhiệt hồng ngoại làm chảy thiếc hàn dính chặt",
        "icon": "🔥",
        "requires": [
          "t5"
        ],
        "hint": "Nhiệt độ lò hàn Reflow 250°C biến kem thiếc thành mối hàn kim loại bóng loáng."
      }
    ],
    "lesson": "In kem thiếc -> Định vị mạch -> Robot hút chip -> Camera chỉnh góc -> Đặt chip -> Lò hàn Reflow."
  },
  {
    "id": "tm-109",
    "level": 109,
    "title": "Nạp Firmware Và Kiểm Thử Vi Điều Khiển Nhúng",
    "category": "computing",
    "categoryName": "Nhà Máy Robot",
    "icon": "💾",
    "difficulty": 3,
    "description": "Ghi chương trình nhúng C++ vào chip nhớ flash và kiểm tra tín hiệu xung nhịp.",
    "tasks": [
      {
        "id": "t1",
        "text": "Đặt bo mạch vào đế cắm thử nghiệm kim lò xo (Bed of Nails)",
        "icon": "🛏️",
        "hint": "Hàng trăm chân kim lò xo chạm tiếp xúc vào các điểm test trên mạch."
      },
      {
        "id": "t2",
        "text": "Cấp nguồn điện áp ổn định 3.3V kiểm tra xem mạch có bị chập ngắn mạch không",
        "icon": "⚡",
        "requires": [
          "t1"
        ],
        "hint": "Bảo vệ chip khỏi quá dòng điện nếu có cầu thiếc chập."
      },
      {
        "id": "t3",
        "text": "Cắm cáp nạp JTAG/SWD kết nối vi điều khiển với máy tính chủ",
        "icon": "🔌",
        "requires": [
          "t2"
        ],
        "hint": "Giao thức truyền dữ liệu tốc độ cao ghi vào bộ nhớ flash."
      },
      {
        "id": "t4",
        "text": "Xóa sạch bộ nhớ chip và nạp mã nhị phân Firmware phiên bản mới nhất",
        "icon": "📥",
        "requires": [
          "t3"
        ],
        "hint": "Ghi từng khối sector dữ liệu mã máy vào chip vi xử lý."
      },
      {
        "id": "t5",
        "text": "Đọc lại toàn bộ mã đã ghi và tính mã băm kiểm tra MD5/CRC32",
        "icon": "🔒",
        "requires": [
          "t4"
        ],
        "hint": "Bảo đảm chương trình nạp chính xác 100% không bị mất bit dữ liệu."
      },
      {
        "id": "t6",
        "text": "Khởi động chip chạy thử: Đèn LED trạng thái chớp tắt nhịp điệu báo mạch hoạt động",
        "icon": "💡",
        "requires": [
          "t5"
        ],
        "hint": "Bo mạch hoàn tất kiểm tra sẵn sàng đóng gói xuất xưởng."
      }
    ],
    "lesson": "Đế cắm kim -> Cấp nguồn 3.3V -> Cáp JTAG -> Nạp Firmware -> Kiểm tra mã băm CRC -> Chạy thử đèn LED."
  },
  {
    "id": "tm-110",
    "level": 110,
    "title": "Trạm Sạc Không Dây Tự Động Cho Bầy Robot",
    "category": "computing",
    "categoryName": "Nhà Máy Robot",
    "icon": "🔋",
    "difficulty": 3,
    "description": "Robot tự phát hiện pin yếu, di chuyển về bến sạc cảm ứng từ trường.",
    "tasks": [
      {
        "id": "t1",
        "text": "Hệ thống BMS trên robot phát hiện dung lượng pin Li-ion giảm xuống dưới 15%",
        "icon": "🪫",
        "hint": "Mức cảnh báo pin yếu tự động kích hoạt chế độ về trạm sạc."
      },
      {
        "id": "t2",
        "text": "Robot tạm dừng nhiệm vụ hiện tại và gửi tín hiệu xin chỗ về máy chủ quản lý",
        "icon": "📡",
        "requires": [
          "t1"
        ],
        "hint": "Máy chủ điều phối robot tới trạm sạc đang còn trống."
      },
      {
        "id": "t3",
        "text": "Robot di chuyển theo bản đồ và lùi chính xác vào đế sạc cảm ứng",
        "icon": "🅿️",
        "requires": [
          "t2"
        ],
        "hint": "Cảm biến tiệm cận căn chỉnh vị trí sai số dưới 5mm."
      },
      {
        "id": "t4",
        "text": "Cuộn dây sơ cấp ở đế sạc phát ra từ trường biến thiên tần số cao",
        "icon": "🧲",
        "requires": [
          "t3"
        ],
        "hint": "Hiện tượng cảm ứng điện từ truyền năng lượng không dây qua khe hở không khí."
      },
      {
        "id": "t5",
        "text": "Cuộn dây thứ cấp dưới gầm robot cảm ứng sinh ra dòng điện nạp vào bình ắc quy",
        "icon": "⚡",
        "requires": [
          "t4"
        ],
        "hint": "Nạp dòng sạc nhanh 50 Ampe giúp đầy 80% pin trong 20 phút."
      },
      {
        "id": "t6",
        "text": "Pin báo đầy 100%, robot ngắt kết nối sạc và trở lại dây chuyền làm việc",
        "icon": "🔋",
        "requires": [
          "t5"
        ],
        "hint": "Bầy robot hoạt động liên tục 24/7 không cần người can thiệp."
      }
    ],
    "lesson": "Pin dưới 15% -> Xin trạm sạc -> Lùi vào đế sạc -> Từ trường cảm ứng -> Nạp dòng 50A -> Đầy pin làm việc."
  },
  {
    "id": "tm-111",
    "level": 111,
    "title": "Lập Trình Đèn Giao Thông Thông Minh Theo Lưu Lượng",
    "category": "computing",
    "categoryName": "Nhà Máy Robot",
    "icon": "🚦",
    "difficulty": 4,
    "description": "Thuật toán tối ưu hóa thời gian đèn xanh dựa trên số lượng ô tô chờ thực tế.",
    "tasks": [
      {
        "id": "t1",
        "text": "Camera AI gắn trên cột đèn đếm số lượng xe đang dừng ở mỗi làn đường",
        "icon": "📷",
        "hint": "Nhận diện mật độ xe theo thời gian thực thay vì chạy chu kỳ cố định."
      },
      {
        "id": "t2",
        "text": "Thuật toán tính toán lưu lượng giao thông: Làn Bắc-Nam đang đông gấp 3 lần làn Đông-Tây",
        "icon": "🧮",
        "requires": [
          "t1"
        ],
        "hint": "Tính toán trọng số ưu tiên cho làn có nguy cơ tắc đường."
      },
      {
        "id": "t3",
        "text": "Hệ thống điều khiển bật đèn Vàng cảnh báo làn Đông-Tây trong 3 giây",
        "icon": "🟡",
        "requires": [
          "t2"
        ],
        "hint": "Đèn vàng chuẩn bị dừng để đảm bảo an toàn cho xe đang qua dở."
      },
      {
        "id": "t4",
        "text": "Chuyển đèn làn Đông-Tây sang Đỏ và giữ khoảng đệm 1 giây an toàn",
        "icon": "🔴",
        "requires": [
          "t3"
        ],
        "hint": "Khoảng đệm an toàn All-Red đảm bảo ngã tư thông thoáng hoàn toàn."
      },
      {
        "id": "t5",
        "text": "Bật đèn Xanh làn Bắc-Nam và tự động kéo dài thêm 20 giây giải tỏa xe",
        "icon": "🟢",
        "requires": [
          "t4"
        ],
        "hint": "Tự động điều chỉnh thời gian đèn xanh theo lượng xe thực tế."
      },
      {
        "id": "t6",
        "text": "Khi lượng xe giảm xuống ngưỡng bình thường, chuyển chu kỳ sang các nhánh khác",
        "icon": "🔄",
        "requires": [
          "t5"
        ],
        "hint": "Giảm thiểu ùn tắc giao thông và tiết kiệm nhiên liệu cho xe cộ."
      }
    ],
    "lesson": "Camera đếm xe -> Thuật toán tính trọng số -> Đèn vàng 3s -> Đèn đỏ đệm 1s -> Kéo dài đèn xanh -> Chuyển luồng."
  },
  {
    "id": "tm-112",
    "level": 112,
    "title": "Mã Hóa Và Giải Mã Mật Mã Khóa Công Khai RSA",
    "category": "computing",
    "categoryName": "Nhà Máy Robot",
    "icon": "🔐",
    "difficulty": 4,
    "description": "Khoa học toán học bảo mật giao dịch ngân hàng bằng tích hai số nguyên tố lớn.",
    "tasks": [
      {
        "id": "t1",
        "text": "Chọn ngẫu nhiên 2 số nguyên tố siêu lớn p và q",
        "icon": "🔢",
        "hint": "Số nguyên tố là nền tảng của thuật toán mật mã RSA."
      },
      {
        "id": "t2",
        "text": "Tính tích số n = p * q làm độ dài chìa khóa mã hóa",
        "icon": "✖️",
        "requires": [
          "t1"
        ],
        "hint": "Nhân hai số rất nhanh nhưng phân tích ngược ra thừa số cực kỳ khó."
      },
      {
        "id": "t3",
        "text": "Tạo ra Khóa công khai (Public Key) dùng để khóa hòm thư mật",
        "icon": "📢",
        "requires": [
          "t2"
        ],
        "hint": "Khóa công khai có thể gửi cho bất kỳ ai trên Internet muốn gửi tin nhắn."
      },
      {
        "id": "t4",
        "text": "Tạo ra Khóa bí mật (Private Key) được giữ bí mật tuyệt đối trên máy chủ",
        "icon": "🔑",
        "requires": [
          "t3"
        ],
        "hint": "Chỉ có khóa bí mật này mới có thể mở khóa thông điệp."
      },
      {
        "id": "t5",
        "text": "Người gửi dùng Khóa công khai mã hóa bức thư thành chuỗi số ngẫu nhiên",
        "icon": "🔒",
        "requires": [
          "t3"
        ],
        "hint": "Tin tặc chặn đường truyền cũng không thể đọc hiểu chuỗi ký tự hỗn loạn."
      },
      {
        "id": "t6",
        "text": "Người nhận dùng Khóa bí mật giải mã chuỗi số trở lại nội dung bức thư ban đầu",
        "icon": "🔓",
        "requires": [
          "t4",
          "t5"
        ],
        "hint": "Giao dịch tài chính được bảo mật an toàn tuyệt đối."
      }
    ],
    "lesson": "Chọn số nguyên tố -> Tính tích n -> Tạo khóa công khai -> Tạo khóa bí mật -> Mã hóa tin nhắn -> Giải mã bằng khóa bí mật."
  },
  {
    "id": "tm-113",
    "level": 113,
    "title": "Tường Lửa Chống Cuộc Tấn Công Mạng DDoS",
    "category": "computing",
    "categoryName": "Nhà Máy Robot",
    "icon": "🛡️",
    "difficulty": 4,
    "description": "Hệ thống bảo vệ máy chủ trước hàng triệu gói tin rác làm nghẽn mạng.",
    "tasks": [
      {
        "id": "t1",
        "text": "Cảm biến lưu lượng mạng phát hiện số lượng truy cập tăng vọt 500% trong 1 giây",
        "icon": "📈",
        "hint": "Dấu hiệu cảnh báo cuộc tấn công từ chối dịch vụ phân tán DDoS."
      },
      {
        "id": "t2",
        "text": "Kích hoạt hệ thống phân tích gói tin sâu DPI (Deep Packet Inspection)",
        "icon": "🔍",
        "requires": [
          "t1"
        ],
        "hint": "Soi cấu trúc gói tin tìm dấu hiệu của mạng máy tính ma botnet."
      },
      {
        "id": "t3",
        "text": "Xác định các địa chỉ IP phát tán hàng triệu gói tin rác SYN Flood",
        "icon": "🌐",
        "requires": [
          "t2"
        ],
        "hint": "Lọc ra danh sách đen IP độc hại từ các nguồn tấn công."
      },
      {
        "id": "t4",
        "text": "Tường lửa cấu hình quy tắc chặn tức thì danh sách IP độc hại tại cổng Gateway",
        "icon": "🚫",
        "requires": [
          "t3"
        ],
        "hint": "Thả rơi gói tin (Drop Packet) ngay tại cửa ngõ không cho vào máy chủ."
      },
      {
        "id": "t5",
        "text": "Kích hoạt mạng phân phối nội dung CDN Anycast chia tải sang 50 cụm máy chủ toàn cầu",
        "icon": "🌍",
        "requires": [
          "t4"
        ],
        "hint": "Pha loãng lưu lượng truy cập khổng lồ trên mạng lưới đám mây."
      },
      {
        "id": "t6",
        "text": "Máy chủ chính hạ tải về mức an toàn và người dùng thực tế truy cập bình thường",
        "icon": "✅",
        "requires": [
          "t5"
        ],
        "hint": "Bảo vệ hệ thống ngân hàng trực tuyến thông suốt liên tục."
      }
    ],
    "lesson": "Cảnh báo lưu lượng -> Phân tích sâu DPI -> Tìm IP botnet -> Tường lửa chặn IP -> Chia tải CDN -> Hệ thống an toàn."
  },
  {
    "id": "tm-114",
    "level": 114,
    "title": "Thử Nghiệm Va Đập Và Tản Nhiệt Pin Xe Điện",
    "category": "computing",
    "categoryName": "Nhà Máy Robot",
    "icon": "🔋",
    "difficulty": 4,
    "description": "Kiểm tra độ an toàn tuyệt đối chống cháy nổ cho khối pin Li-ion 100 kWh.",
    "tasks": [
      {
        "id": "t1",
        "text": "Đặt khối pin vào buồng kín chịu lực chống nổ có camera nhiệt",
        "icon": "📦",
        "hint": "Buồng thí nghiệm bảo vệ an toàn cho các kỹ sư."
      },
      {
        "id": "t2",
        "text": "Kết nối cảm biến nhiệt độ vào từng tế bào pin Cell đo đạc nhiệt độ từng giây",
        "icon": "🌡️",
        "requires": [
          "t1"
        ],
        "hint": "Theo dõi hiện tượng thoát nhiệt (Thermal Runaway)."
      },
      {
        "id": "t3",
        "text": "Bật máy nạp xả dòng điện cực đại 400A mô phỏng xe tăng tốc kịch sàn",
        "icon": "⚡",
        "requires": [
          "t2"
        ],
        "hint": "Dòng xả cực lớn sinh ra lượng nhiệt khổng lồ."
      },
      {
        "id": "t4",
        "text": "Kích hoạt bơm tuần hoàn dung dịch tản nhiệt Glycol làm mát qua các tấm đệm nhôm",
        "icon": "❄️",
        "requires": [
          "t3"
        ],
        "hint": "Dung dịch tản nhiệt giữ pin luôn ở khoảng nhiệt độ tối ưu 25-35°C."
      },
      {
        "id": "t5",
        "text": "Thực hiện thả quả nặng 1 tấn từ độ cao 5 mét va đập thử nghiệm vỏ bảo vệ",
        "icon": "🔨",
        "requires": [
          "t4"
        ],
        "hint": "Kiểm tra khung hợp kim nhôm titan chịu lực va chạm tai nạn giao thông."
      },
      {
        "id": "t6",
        "text": "Khối pin không bốc khói, không tăng nhiệt độ quá mức và đạt chuẩn an toàn UN38.3",
        "icon": "🏅",
        "requires": [
          "t5"
        ],
        "hint": "Khối pin được cấp chứng nhận an toàn xuất xưởng."
      }
    ],
    "lesson": "Vào buồng chống nổ -> Gắn cảm biến nhiệt -> Xả dòng 400A -> Bơm nước làm mát Glycol -> Thử va đập 1 tấn -> Đạt chuẩn."
  },
  {
    "id": "tm-115",
    "level": 115,
    "title": "Buồng Sơn Tĩnh Điện Vỏ Xe Bằng Robot Tự Động",
    "category": "computing",
    "categoryName": "Nhà Máy Robot",
    "icon": "🎨",
    "difficulty": 3,
    "description": "Ứng dụng lực hút tĩnh điện giữa các điện tích trái dấu để sơn phủ bóng loáng.",
    "tasks": [
      {
        "id": "t1",
        "text": "Thân vỏ xe kim loại được rửa sạch bụi dầu và nối với cực âm (tiếp địa)",
        "icon": "🚿",
        "hint": "Khử dầu mỡ để hạt sơn bám dính hoàn hảo vào kim loại."
      },
      {
        "id": "t2",
        "text": "Vỏ xe đi qua buồng sấy khô không khí nóng 120°C để bốc hơi hết giọt nước",
        "icon": "💨",
        "requires": [
          "t1"
        ],
        "hint": "Bề mặt khô ráo ngăn ngừa rỗ bọt khí dưới lớp sơn."
      },
      {
        "id": "t3",
        "text": "Đầu súng phun robot tích điện tích dương cao thế 60.000V cho hạt sơn",
        "icon": "⚡",
        "requires": [
          "t2"
        ],
        "hint": "Hạt sơn mang điện tích dương sẽ bị vỏ xe mang điện tích âm hút chặt."
      },
      {
        "id": "t4",
        "text": "Robot phun sương sơn nano quay ly tâm tốc độ 40.000 vòng/phút",
        "icon": "🌀",
        "requires": [
          "t3"
        ],
        "hint": "Tạo màn sương sơn siêu mịn phủ đều mọi ngóc ngách của khung xe."
      },
      {
        "id": "t5",
        "text": "Hạt sơn tích điện bay thẳng và bám đều tăm tắp vào bề mặt vỏ xe",
        "icon": "🧲",
        "requires": [
          "t4"
        ],
        "hint": "Lực hút tĩnh điện giúp hầu như không có giọt sơn nào bị rơi vương vãi ra ngoài."
      },
      {
        "id": "t6",
        "text": "Đưa vỏ xe vào lò hấp nhiệt 180°C làm lớp sơn đóng rắn tạo màng bóng bền đẹp",
        "icon": "✨",
        "requires": [
          "t5"
        ],
        "hint": "Nhiệt độ đóng rắn tạo lớp áo giáp chống rỉ sét suốt 15 năm."
      }
    ],
    "lesson": "Tẩy dầu nối cực âm -> Sấy khô -> Súng phun nạp điện dương 60kV -> Phun ly tâm -> Hút tĩnh điện -> Hấp nhiệt 180°C."
  },
  {
    "id": "tm-116",
    "level": 116,
    "title": "Thuật Toán Dijkstra Tìm Đường Giao Hàng Cho Drone",
    "category": "computing",
    "categoryName": "Nhà Máy Robot",
    "icon": "🚁",
    "difficulty": 4,
    "description": "Tìm lộ trình ngắn nhất và an toàn nhất qua đồ thị các tòa nhà cao tầng.",
    "tasks": [
      {
        "id": "t1",
        "text": "Mô hình hóa không gian thành phố thành đồ thị gồm các đỉnh và cạnh khoảng cách",
        "icon": "🕸️",
        "hint": "Mỗi ngã tư và bãi đáp là một đỉnh (Node) trên đồ thị."
      },
      {
        "id": "t2",
        "text": "Đánh dấu khoảng cách từ điểm xuất phát tới chính nó là 0 và tới các điểm khác là vô cùng",
        "icon": "0️⃣",
        "requires": [
          "t1"
        ],
        "hint": "Khởi tạo mảng khoảng cách ban đầu của thuật toán Dijkstra."
      },
      {
        "id": "t3",
        "text": "Cập nhật trọng số khoảng cách: Trừ các khu vực cấm bay (vùng gió xoáy)",
        "icon": "🌪️",
        "requires": [
          "t2"
        ],
        "hint": "Khu vực gió giật được gán chi phí di chuyển cực lớn để drone tránh."
      },
      {
        "id": "t4",
        "text": "Duyệt tìm đỉnh có chi phí nhỏ nhất chưa thăm và cập nhật khoảng cách các điểm lân cận",
        "icon": "🔍",
        "requires": [
          "t3"
        ],
        "hint": "Thuật toán tìm kiếm từng bước tối ưu cục bộ."
      },
      {
        "id": "t5",
        "text": "Lặp lại quá trình cho đến khi tìm được đường đi ngắn nhất tới điểm nhận hàng",
        "icon": "🎯",
        "requires": [
          "t4"
        ],
        "hint": "Lộ trình tối ưu tiết kiệm pin và thời gian giao hàng."
      },
      {
        "id": "t6",
        "text": "Nạp tọa độ bay Waypoint vào bộ nhớ Drone và kích hoạt động cơ cất cánh",
        "icon": "🚁",
        "requires": [
          "t5"
        ],
        "hint": "Drone bay tự động lách qua các tòa nhà giao kiện hàng trong 15 phút."
      }
    ],
    "lesson": "Đồ thị thành phố -> Đặt mốc 0 -> Gán vật cản gió -> Duyệt khoảng cách nhỏ nhất -> Tìm đường ngắn nhất -> Nạp tọa độ Drone."
  },
  {
    "id": "tm-117",
    "level": 117,
    "title": "Lắp Ráp Cảm Biến Siêu Âm Và Radar Cho Xe Tự Lái",
    "category": "computing",
    "categoryName": "Nhà Máy Robot",
    "icon": "📡",
    "difficulty": 3,
    "description": "Trang bị giác quan phát hiện vật cản 360 độ quanh thân xe thông minh.",
    "tasks": [
      {
        "id": "t1",
        "text": "Khoan 12 lỗ định vị trên cản trước và cản sau xe với độ nghiêng chuẩn xác",
        "icon": "🕳️",
        "hint": "Vị trí chuẩn đảm bảo chùm sóng siêu âm bao phủ đều không có góc chết."
      },
      {
        "id": "t2",
        "text": "Lắp 12 mắt cảm biến siêu âm Ultrasonic đo khoảng cách gần 0-3 mét",
        "icon": "🔉",
        "requires": [
          "t1"
        ],
        "hint": "Cảm biến siêu âm hỗ trợ đỗ xe tự động cực kỳ tin cậy."
      },
      {
        "id": "t3",
        "text": "Gắn cụm radar sóng milimet 77GHz ở giữa lưới tản nhiệt cản trước",
        "icon": "📻",
        "requires": [
          "t1"
        ],
        "hint": "Sóng radar xuyên qua mưa gió, sương mù dày đặc đo vận tốc xe phía trước."
      },
      {
        "id": "t4",
        "text": "Kết nối dây mạng CAN-Bus tốc độ cao từ các cảm biến về hộp điều khiển ECU",
        "icon": "🔌",
        "requires": [
          "t2",
          "t3"
        ],
        "hint": "Mạng CAN truyền hàng ngàn tín hiệu mỗi giây chống nhiễu điện từ."
      },
      {
        "id": "t5",
        "text": "Chạy phần mềm hiệu chỉnh góc quét radar trước gương phản xạ chuẩn",
        "icon": "🎯",
        "requires": [
          "t4"
        ],
        "hint": "Căn chỉnh trục quang học của radar khớp với hướng lái xe."
      },
      {
        "id": "t6",
        "text": "Chạy thử trên đường nghiệm thu: Xe tự động phanh khi phát hiện ma-nơ-canh chắn đường",
        "icon": "🛑",
        "requires": [
          "t5"
        ],
        "hint": "Hệ thống phanh tự động khẩn cấp AEB kích hoạt bảo vệ an toàn."
      }
    ],
    "lesson": "Khoan cản xe -> Gắn 12 mắt siêu âm -> Gắn radar 77GHz -> Đấu cáp CAN-Bus -> Hiệu chỉnh góc quét -> Thử phanh khẩn cấp."
  },
  {
    "id": "tm-118",
    "level": 118,
    "title": "Sao Lưu Dữ Liệu Đám Mây Đa Vùng Chống Thảm Họa",
    "category": "computing",
    "categoryName": "Nhà Máy Robot",
    "icon": "☁️",
    "difficulty": 4,
    "description": "Bảo vệ kho dữ liệu hàng triệu khách hàng khi một trung tâm dữ liệu gặp sự cố mất điện.",
    "tasks": [
      {
        "id": "t1",
        "text": "Ghi nhận dữ liệu giao dịch mới vào cơ sở dữ liệu chính tại Trung tâm Hà Nội",
        "icon": "📝",
        "hint": "Máy chủ chính xử lý giao dịch thời gian thực."
      },
      {
        "id": "t2",
        "text": "Tự động ghi đồng bộ nhật ký giao dịch (Write-Ahead Log) lưu vào ổ SSD NVMe",
        "icon": "💾",
        "requires": [
          "t1"
        ],
        "hint": "Nhật ký WAL đảm bảo dữ liệu không bị mất dù sập nguồn đột ngột."
      },
      {
        "id": "t3",
        "text": "Mã hóa luồng dữ liệu bằng chuẩn mã hóa quân sự AES-256 trước khi truyền đi",
        "icon": "🔒",
        "requires": [
          "t2"
        ],
        "hint": "Bảo mật chống nghe lén dữ liệu trên đường truyền cáp quang."
      },
      {
        "id": "t4",
        "text": "Nhân bản dữ liệu theo thời gian thực qua cáp quang ngầm tới trung tâm Đà Nẵng",
        "icon": "🌐",
        "requires": [
          "t3"
        ],
        "hint": "Trung tâm dự phòng cách xa 800km phòng trường hợp thiên tai diện rộng."
      },
      {
        "id": "t5",
        "text": "Lập lịch chụp ảnh nhanh (Snapshot) toàn bộ hệ thống lưu vào kho lạnh S3 Glacier",
        "icon": "📸",
        "requires": [
          "t4"
        ],
        "hint": "Bản sao lưu dài hạn bất biến chống virus tống tiền mã hóa dữ liệu."
      },
      {
        "id": "t6",
        "text": "Mô phỏng ngắt điện trung tâm chính: Hệ thống tự động chuyển vùng trong 3 giây",
        "icon": "⚡",
        "requires": [
          "t5"
        ],
        "hint": "Kiểm tra tính năng tự động chuyển vùng (Failover) sẵn sàng 99.999%."
      }
    ],
    "lesson": "Ghi dữ liệu chính -> Ghi nhật ký WAL -> Mã hóa AES-256 -> Nhân bản đa vùng -> Chụp Snapshot kho lạnh -> Kiểm tra Failover."
  },
  {
    "id": "tm-119",
    "level": 119,
    "title": "Bóc Tách Và Tái Chế Kim Loại Quý Từ Rác Điện Tử",
    "category": "computing",
    "categoryName": "Nhà Máy Robot",
    "icon": "♻️",
    "difficulty": 4,
    "description": "Thu hồi vàng, bạc và đồng từ 1 tấn bảng mạch điện thoại cũ hỏng.",
    "tasks": [
      {
        "id": "t1",
        "text": "Tháo rời pin Li-ion và vỏ nhựa của điện thoại phân loại riêng",
        "icon": "🔋",
        "hint": "Tháo pin trước để tránh cháy nổ khi cho vào máy nghiền."
      },
      {
        "id": "t2",
        "text": "Cho bo mạch xanh vào máy nghiền búa đập vỡ thành hạt vụn nhỏ 2mm",
        "icon": "🔨",
        "requires": [
          "t1"
        ],
        "hint": "Nghiền nhỏ giải phóng các hạt kim loại bám trong lớp nhựa epoxy."
      },
      {
        "id": "t3",
        "text": "Băng chuyền từ tính hút toàn bộ sắt và niken tách riêng ra một thùng",
        "icon": "🧲",
        "requires": [
          "t2"
        ],
        "hint": "Tách kim loại từ tính bằng nam châm vĩnh cửu."
      },
      {
        "id": "t4",
        "text": "Dùng dòng điện cảm ứng xoáy Eddy Current hất các mảnh nhôm và đồng văng ra",
        "icon": "⚡",
        "requires": [
          "t3"
        ],
        "hint": "Dòng Foucault đẩy các kim loại dẫn điện phi từ tính."
      },
      {
        "id": "t5",
        "text": "Ngâm bột kim loại quý còn lại vào dung dịch sinh học vi sinh vật hòa tan vàng bạc",
        "icon": "🧪",
        "requires": [
          "t4"
        ],
        "hint": "Công nghệ luyện kim vi sinh (Bioleaching) thân thiện môi trường không dùng axit độc."
      },
      {
        "id": "t6",
        "text": "Điện phân dung dịch thu được những thỏi vàng 24K và bạc nguyên chất 99.9%",
        "icon": "🥇",
        "requires": [
          "t5"
        ],
        "hint": "1 tấn mạch điện tử thu hồi được lượng vàng gấp 50 lần quặng tự nhiên."
      }
    ],
    "lesson": "Tháo pin an toàn -> Nghiền nhỏ 2mm -> Nam châm hút sắt -> Dòng Eddy tách đồng -> Vi sinh hòa tan -> Điện phân thu vàng."
  },
  {
    "id": "tm-120",
    "level": 120,
    "title": "Màn Trùm: Dây Chuyền Hợp Nhất Xuất Xưởng Xe Tự Lái",
    "category": "computing",
    "categoryName": "Nhà Máy Robot",
    "icon": "🚗",
    "difficulty": 5,
    "description": "Màn trùm phân luồng song song: Đội Phần Cứng Alpha và Đội Phần Mềm Beta hợp nhất tại trạm kiểm định!",
    "tracks": {
      "alpha": "Đội Cơ Khí & Phần Cứng",
      "beta": "Đội Điện Tử & AI",
      "merge": "Hợp Nhất Xuất Xưởng"
    },
    "tasks": [
      {
        "id": "t1",
        "text": "Đội Alpha: Lắp ráp khung gầm và hệ thống treo giảm xóc khí nén",
        "icon": "🛞",
        "track": "alpha",
        "hint": "Nền tảng cơ khí chịu tải trọng cho toàn bộ xe."
      },
      {
        "id": "t2",
        "text": "Đội Alpha: Đặt khối pin 100 kWh vào gầm xe và siết 48 bu-lông chống nước",
        "icon": "🔋",
        "track": "alpha",
        "requires": [
          "t1"
        ],
        "hint": "Khối pin hạ thấp trọng tâm giúp xe bám đường."
      },
      {
        "id": "t3",
        "text": "Đội Beta: Nạp hệ điều hành tự lái Drive-OS vào máy tính trung tâm AI",
        "icon": "💻",
        "track": "beta",
        "hint": "Bộ não số hóa với 2 chip AI dự phòng xử lý 500 nghìn tỷ phép tính/giây."
      },
      {
        "id": "t4",
        "text": "Đội Beta: Kết nối mạng cảm biến LiDAR và 8 camera 360 độ vào máy tính AI",
        "icon": "👁️",
        "track": "beta",
        "requires": [
          "t3"
        ],
        "hint": "Kết nối giác quan thu nhận hình ảnh với bộ não AI."
      },
      {
        "id": "t5",
        "text": "Hợp Nhất: Nối cáp điện cao áp giữa pin gầm xe và hệ thống máy tính điều khiển",
        "icon": "🔌",
        "track": "merge",
        "requires": [
          "t2",
          "t4"
        ],
        "hint": "Điểm hội tụ khi cơ khí và phần mềm kết nối làm một."
      },
      {
        "id": "t6",
        "text": "Xe tự lăn bánh khỏi dây chuyền chạy thử 5km trên đường piste xuất xưởng",
        "icon": "🚗",
        "track": "merge",
        "requires": [
          "t5"
        ],
        "hint": "Cỗ xe tự lái thông minh hoàn thành kiểm tra chất lượng lăn bánh ra cổng nhà máy!"
      }
    ],
    "lesson": "Đội Alpha lắp khung pin gầm + Đội Beta cài phần mềm AI -> Hợp nhất kết nối cáp điện -> Xe tự lăn bánh xuất xưởng."
  }
];
