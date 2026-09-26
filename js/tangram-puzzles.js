// js/tangram-puzzles.js - Ngân hàng 25 Thử Thách Tangram Trí Uẩn Chuẩn Singapore GEP
// Mỗi bài gồm: ID, tên, độ khó (★1-★5), chủ đề, hình bóng Silhouette SVG, và vị trí mục tiêu 7 mảnh ghép

export const TANGRAM_PIECES_CONFIG = {
  t1: { id: "t1", name: "Tam giác lớn 1", type: "large-triangle", color: "#3b82f6", stroke: "#1d4ed8" },
  t2: { id: "t2", name: "Tam giác lớn 2", type: "large-triangle", color: "#60a5fa", stroke: "#2563eb" },
  tm: { id: "tm", name: "Tam giác vừa", type: "med-triangle", color: "#10b981", stroke: "#059669" },
  ts1: { id: "ts1", name: "Tam giác nhỏ 1", type: "small-triangle", color: "#f59e0b", stroke: "#d97706" },
  ts2: { id: "ts2", name: "Tam giác nhỏ 2", type: "small-triangle", color: "#fbbf24", stroke: "#b45309" },
  sq: { id: "sq", name: "Hình vuông", type: "square", color: "#ef4444", stroke: "#dc2626" },
  para: { id: "para", name: "Hình bình hành", type: "parallelogram", color: "#8b5cf6", stroke: "#7c3aed" }
};

export const TANGRAM_PUZZLES = [
  // CẤP 1 (★1) - Khởi Động & Cơ Bản
  {
    id: "tangram-01",
    name: "Thiên Nga Soi Bóng",
    difficulty: 1,
    topic: "Động vật",
    description: "Xếp 7 mảnh ghép để tạo thành hình chú thiên nga đang kiêu hãnh bơi trên mặt hồ.",
    silhouettePath: "M 160 60 L 200 60 L 160 100 L 160 160 L 120 200 L 60 200 L 100 160 L 160 160 Z",
    targetLayout: {
      t1: { x: 120, y: 160, rot: 0, flipped: false },
      t2: { x: 160, y: 120, rot: 90, flipped: false },
      tm: { x: 140, y: 180, rot: 45, flipped: false },
      ts1: { x: 180, y: 80, rot: 180, flipped: false },
      ts2: { x: 160, y: 80, rot: 0, flipped: false },
      sq: { x: 180, y: 60, rot: 45, flipped: false },
      para: { x: 80, y: 180, rot: 0, flipped: false }
    },
    hint: "Hình vuông tạo thành đầu thiên nga, tam giác nhỏ tạo mỏ, các tam giác lớn tạo thân và đuôi."
  },
  {
    id: "tangram-02",
    name: "Ngôi Nhà Cổ Tích",
    difficulty: 1,
    topic: "Kiến trúc",
    description: "Một mái ấm xinh xắn với mái ngói tam giác và ống khói ấm áp đón mùa đông.",
    silhouettePath: "M 150 40 L 230 120 L 70 120 Z M 90 120 L 210 120 L 210 240 L 90 240 Z",
    targetLayout: {
      t1: { x: 150, y: 80, rot: 0, flipped: false },
      t2: { x: 150, y: 160, rot: 180, flipped: false },
      tm: { x: 110, y: 200, rot: 90, flipped: false },
      ts1: { x: 190, y: 200, rot: 270, flipped: false },
      ts2: { x: 150, y: 200, rot: 0, flipped: false },
      sq: { x: 150, y: 160, rot: 0, flipped: false },
      para: { x: 150, y: 220, rot: 45, flipped: false }
    },
    hint: "Hai tam giác lớn ghép lại có thể tạo thành một hình vuông lớn cho tường nhà hoặc mái nhà."
  },
  {
    id: "tangram-03",
    name: "Cây Thông Noel",
    difficulty: 1,
    topic: "Thiên nhiên",
    description: "Cây thông Noel 3 tầng xanh mướt với thân gỗ vững chãi.",
    silhouettePath: "M 150 40 L 190 90 L 170 90 L 210 150 L 180 150 L 220 210 L 80 210 L 120 150 L 90 150 L 130 90 L 110 90 Z",
    targetLayout: {
      t1: { x: 150, y: 170, rot: 0, flipped: false },
      t2: { x: 150, y: 120, rot: 0, flipped: false },
      tm: { x: 150, y: 70, rot: 0, flipped: false },
      ts1: { x: 120, y: 190, rot: 180, flipped: false },
      ts2: { x: 180, y: 190, rot: 180, flipped: false },
      sq: { x: 150, y: 230, rot: 0, flipped: false },
      para: { x: 150, y: 190, rot: 90, flipped: false }
    },
    hint: "Các tam giác xếp tầng từ nhỏ đến lớn hướng lên trên, hình vuông làm gốc cây."
  },

  // CẤP 2 (★2) - Vừa Sức
  {
    id: "tangram-04",
    name: "Thuyền Buồm Vượt Sóng",
    difficulty: 2,
    topic: "Phương tiện",
    description: "Cánh buồm no gió đưa con thuyền lướt sóng ra khơi xa.",
    silhouettePath: "M 150 40 L 150 170 L 80 170 Z M 160 90 L 210 170 L 160 170 Z M 70 180 L 230 180 L 200 220 L 100 220 Z",
    targetLayout: {
      t1: { x: 115, y: 105, rot: 270, flipped: false },
      t2: { x: 185, y: 130, rot: 90, flipped: false },
      tm: { x: 150, y: 200, rot: 180, flipped: false },
      ts1: { x: 85, y: 200, rot: 90, flipped: false },
      ts2: { x: 215, y: 200, rot: 270, flipped: false },
      sq: { x: 150, y: 180, rot: 45, flipped: false },
      para: { x: 150, y: 210, rot: 0, flipped: false }
    },
    hint: "Thân thuyền ở dưới dạng hình thang, cánh buồm đứng thẳng vuông góc."
  },
  {
    id: "tangram-05",
    name: "Chú Mèo Tinh Nghịch",
    difficulty: 2,
    topic: "Động vật",
    description: "Chú mèo đang ngồi chăm chú nhìn ngó với đôi tai vểnh cao.",
    silhouettePath: "M 120 70 L 140 50 L 160 70 L 180 50 L 200 70 L 190 120 L 130 120 Z",
    targetLayout: {
      t1: { x: 150, y: 180, rot: 180, flipped: false },
      t2: { x: 180, y: 150, rot: 90, flipped: false },
      tm: { x: 160, y: 80, rot: 0, flipped: false },
      ts1: { x: 130, y: 60, rot: 45, flipped: false },
      ts2: { x: 190, y: 60, rot: 315, flipped: false },
      sq: { x: 160, y: 100, rot: 0, flipped: false },
      para: { x: 210, y: 210, rot: 45, flipped: false }
    },
    hint: "Hai tam giác nhỏ đóng vai đôi tai xinh xắn, hình bình hành uốn lượn thành chiếc đuôi dài."
  },
  {
    id: "tangram-06",
    name: "Tên Lửa Khám Phá Vũ Trụ",
    difficulty: 2,
    topic: "Khoa học",
    description: "Con tàu vũ trụ phóng vút lên không gian đưa ước mơ khám phá các vì sao.",
    silhouettePath: "M 150 30 L 190 90 L 190 190 L 220 230 L 180 210 L 120 210 L 80 230 L 110 190 L 110 90 Z",
    targetLayout: {
      t1: { x: 150, y: 130, rot: 180, flipped: false },
      t2: { x: 150, y: 150, rot: 0, flipped: false },
      tm: { x: 150, y: 60, rot: 0, flipped: false },
      ts1: { x: 95, y: 210, rot: 225, flipped: false },
      ts2: { x: 205, y: 210, rot: 135, flipped: false },
      sq: { x: 150, y: 190, rot: 45, flipped: false },
      para: { x: 150, y: 100, rot: 90, flipped: false }
    },
    hint: "Mũi tên lửa nhọn hướng lên trên, 2 cánh đuôi xòe ra cân đối 2 bên."
  },

  // CẤP 3 (★3) - Khá (Tư duy kết hợp)
  {
    id: "tangram-07",
    name: "Chú Thỏ Trắng Vui Vẻ",
    difficulty: 3,
    topic: "Động vật",
    description: "Chú thỏ với đôi tai dài đang ngẩng cao đầu chuẩn bị nhảy tung tăng.",
    silhouettePath: "M 100 40 L 120 90 L 140 70 L 160 110 L 130 140 L 170 180 L 190 230 L 130 230 Z",
    targetLayout: {
      t1: { x: 160, y: 180, rot: 45, flipped: false },
      t2: { x: 140, y: 190, rot: 225, flipped: false },
      tm: { x: 120, y: 120, rot: 135, flipped: false },
      ts1: { x: 110, y: 60, rot: 90, flipped: false },
      ts2: { x: 135, y: 75, rot: 45, flipped: false },
      sq: { x: 140, y: 100, rot: 45, flipped: false },
      para: { x: 180, y: 220, rot: 0, flipped: false }
    },
    hint: "Hai tam giác nhỏ tạo thành đôi tai thỏ dài hướng về bên trái."
  },
  {
    id: "tangram-08",
    name: "Chiến Mã Dũng Mãnh",
    difficulty: 3,
    topic: "Động vật",
    description: "Chú ngựa phi nước đại trên thảo nguyên rộng lớn.",
    silhouettePath: "M 70 80 L 110 50 L 150 90 L 130 130 L 210 130 L 240 210 L 190 210 L 170 170 L 110 170 L 90 210 L 60 210 Z",
    targetLayout: {
      t1: { x: 160, y: 150, rot: 0, flipped: false },
      t2: { x: 130, y: 120, rot: 270, flipped: false },
      tm: { x: 90, y: 80, rot: 45, flipped: false },
      ts1: { x: 75, y: 190, rot: 270, flipped: false },
      ts2: { x: 215, y: 190, rot: 90, flipped: false },
      sq: { x: 105, y: 70, rot: 45, flipped: false },
      para: { x: 195, y: 150, rot: 45, flipped: false }
    },
    hint: "Bốn chân ngựa được chống đỡ bởi các tam giác nhỏ và hình bình hành."
  },
  {
    id: "tangram-09",
    name: "Ngọn Hải Đăng Dẫn Lối",
    difficulty: 3,
    topic: "Kiến trúc",
    description: "Tháp hải đăng cao vút chiếu rọi ánh sáng dẫn đường cho tàu bè cập bến an toàn.",
    silhouettePath: "M 130 40 L 170 40 L 170 60 L 190 220 L 110 220 L 130 60 Z",
    targetLayout: {
      t1: { x: 150, y: 140, rot: 180, flipped: false },
      t2: { x: 150, y: 180, rot: 0, flipped: false },
      tm: { x: 150, y: 90, rot: 180, flipped: false },
      ts1: { x: 130, y: 210, rot: 270, flipped: false },
      ts2: { x: 170, y: 210, rot: 90, flipped: false },
      sq: { x: 150, y: 50, rot: 0, flipped: false },
      para: { x: 150, y: 70, rot: 90, flipped: false }
    },
    hint: "Hình vuông làm đài hải đăng phía trên cùng, thân tháp phình nhẹ ở chân đế."
  },
  {
    id: "tangram-10",
    name: "Người Trượt Tuyết Tốc Độ",
    difficulty: 3,
    topic: "Thể thao",
    description: "Vận động viên đang nghiêng người lướt trên sườn dốc băng tuyết trắng xóa.",
    silhouettePath: "M 170 50 L 190 70 L 170 90 L 150 70 Z M 130 100 L 170 120 L 150 170 L 100 150 Z M 80 200 L 220 220 L 210 230 L 70 210 Z",
    targetLayout: {
      t1: { x: 140, y: 130, rot: 135, flipped: false },
      t2: { x: 120, y: 160, rot: 45, flipped: false },
      tm: { x: 100, y: 190, rot: 315, flipped: false },
      ts1: { x: 160, y: 100, rot: 45, flipped: false },
      ts2: { x: 180, y: 210, rot: 15, flipped: false },
      sq: { x: 170, y: 70, rot: 45, flipped: false },
      para: { x: 140, y: 215, rot: 15, flipped: false }
    },
    hint: "Thanh trượt ván tuyết dài nghiêng 15 độ nâng đỡ cả tư thế cơ thể."
  },

  // CẤP 4 (★4) - Nâng Cao (Chuẩn AMC / GEP)
  {
    id: "tangram-11",
    name: "Cối Xay Gió Hà Lan",
    difficulty: 4,
    topic: "Kiến trúc",
    description: "Bốn cánh cối xay gió khổng lồ quay đều trong làn gió mát của xứ sở hoa tulip.",
    silhouettePath: "M 150 150 L 230 110 L 230 150 Z M 150 150 L 190 230 L 150 230 Z M 150 150 L 70 190 L 70 150 Z M 150 150 L 110 70 L 150 70 Z",
    targetLayout: {
      t1: { x: 190, y: 130, rot: 60, flipped: false },
      t2: { x: 110, y: 170, rot: 240, flipped: false },
      tm: { x: 170, y: 190, rot: 150, flipped: false },
      ts1: { x: 130, y: 110, rot: 330, flipped: false },
      ts2: { x: 150, y: 150, rot: 45, flipped: false },
      sq: { x: 150, y: 150, rot: 0, flipped: false },
      para: { x: 150, y: 150, rot: 45, flipped: false }
    },
    hint: "Các mảnh ghép tỏa đều quanh tâm trục quay của cối xay gió."
  },
  {
    id: "tangram-12",
    name: "Vũ Công Ba Lê Uyển Chuyển",
    difficulty: 4,
    topic: "Nghệ thuật",
    description: "Tư thế xoay kiễng chân arabesque tuyệt đẹp trên sân khấu kịch nghệ hoàng gia.",
    silhouettePath: "M 130 50 L 150 30 L 170 50 L 150 70 Z M 150 80 L 190 120 L 140 150 L 110 110 Z M 140 160 L 180 200 L 140 240 Z",
    targetLayout: {
      t1: { x: 150, y: 120, rot: 135, flipped: false },
      t2: { x: 140, y: 170, rot: 225, flipped: false },
      tm: { x: 180, y: 130, rot: 45, flipped: false },
      ts1: { x: 110, y: 100, rot: 315, flipped: false },
      ts2: { x: 140, y: 220, rot: 0, flipped: false },
      sq: { x: 150, y: 50, rot: 45, flipped: false },
      para: { x: 170, y: 180, rot: 135, flipped: false }
    },
    hint: "Đầu vũ công là hình vuông, váy xòe ballet tạo bởi 2 tam giác lớn."
  },
  {
    id: "tangram-13",
    name: "Cầu Thủ Sút Bóng Vô Lê",
    difficulty: 4,
    topic: "Thể thao",
    description: "Pha bay người bắt vô-lê móc bóng trên không trung điệu nghệ như danh thủ thế giới.",
    silhouettePath: "M 90 70 L 110 50 L 130 70 L 110 90 Z M 120 100 L 180 120 L 160 170 L 100 130 Z M 170 150 L 220 130 L 200 180 Z",
    targetLayout: {
      t1: { x: 140, y: 130, rot: 105, flipped: false },
      t2: { x: 170, y: 150, rot: 285, flipped: false },
      tm: { x: 200, y: 140, rot: 45, flipped: false },
      ts1: { x: 110, y: 70, rot: 45, flipped: false },
      ts2: { x: 80, y: 150, rot: 195, flipped: false },
      sq: { x: 110, y: 70, rot: 0, flipped: false },
      para: { x: 130, y: 170, rot: 75, flipped: false }
    },
    hint: "Toàn bộ cơ thể cầu thủ nghiêng chéo để mô phỏng cú bay người trên không."
  },
  {
    id: "tangram-14",
    name: "Lâu Đài Cổ Kính",
    difficulty: 4,
    topic: "Kiến trúc",
    description: "Tòa lâu đài nguy nga với các ngọn tháp canh kiên cố bảo vệ vương quốc.",
    silhouettePath: "M 80 120 L 110 80 L 140 120 L 140 220 L 80 220 Z M 160 120 L 190 80 L 220 120 L 220 220 L 160 220 Z M 140 140 L 160 140 L 160 220 L 140 220 Z",
    targetLayout: {
      t1: { x: 110, y: 170, rot: 0, flipped: false },
      t2: { x: 190, y: 170, rot: 0, flipped: false },
      tm: { x: 150, y: 190, rot: 180, flipped: false },
      ts1: { x: 110, y: 100, rot: 0, flipped: false },
      ts2: { x: 190, y: 100, rot: 0, flipped: false },
      sq: { x: 150, y: 150, rot: 0, flipped: false },
      para: { x: 150, y: 170, rot: 90, flipped: false }
    },
    hint: "Hai ngọn tháp đối xứng ở 2 bên với chóp nhọn là tam giác nhỏ."
  },

  // CẤP 5 (★5) - Olympic Thượng Thừa (Singapore GEP / Mensa Level)
  {
    id: "tangram-15",
    name: "Phượng Hoàng Lửa Tái Sinh",
    difficulty: 5,
    topic: "Huyền thoại",
    description: "Thần điểu Phượng Hoàng rực rỡ dang đôi cánh lửa bay vút lên từ tro tàn huyền thoại.",
    silhouettePath: "M 150 40 L 180 70 L 150 90 L 120 70 Z M 150 90 L 240 70 L 190 140 Z M 150 90 L 60 70 L 110 140 Z M 150 120 L 180 220 L 120 220 Z",
    targetLayout: {
      t1: { x: 195, y: 105, rot: 330, flipped: false },
      t2: { x: 105, y: 105, rot: 30, flipped: false },
      tm: { x: 150, y: 160, rot: 180, flipped: false },
      ts1: { x: 135, y: 200, rot: 210, flipped: false },
      ts2: { x: 165, y: 200, rot: 150, flipped: false },
      sq: { x: 150, y: 65, rot: 45, flipped: false },
      para: { x: 150, y: 105, rot: 90, flipped: true }
    },
    hint: "Đôi cánh dang rộng cân xứng, đuôi phượng hoàng chia làm 2 dải lông dài kiêu hãnh."
  },
  {
    id: "tangram-16",
    name: "Đại Bàng Tung Cánh",
    difficulty: 5,
    topic: "Động vật",
    description: "Chúa tể bầu trời lao vút xuống như mũi tên với cặp móng vuốt thép săn mồi.",
    silhouettePath: "M 150 50 L 170 70 L 150 80 Z M 150 80 L 250 80 L 180 130 Z M 150 80 L 50 80 L 120 130 Z M 150 110 L 170 190 L 130 190 Z",
    targetLayout: {
      t1: { x: 200, y: 105, rot: 0, flipped: false },
      t2: { x: 100, y: 105, rot: 180, flipped: false },
      tm: { x: 150, y: 140, rot: 180, flipped: false },
      ts1: { x: 160, y: 65, rot: 45, flipped: false },
      ts2: { x: 140, y: 180, rot: 225, flipped: false },
      sq: { x: 150, y: 95, rot: 45, flipped: false },
      para: { x: 160, y: 180, rot: 45, flipped: false }
    },
    hint: "Mỏ đại bàng tạo từ tam giác nhỏ hướng góc nhọn xuống."
  },
  {
    id: "tangram-17",
    name: "Thần Kim Quy (Rùa Vàng)",
    difficulty: 5,
    topic: "Dân gian",
    description: "Thần Kim Quy bơi trên sóng nước Hồ Gươm mang gươm báu bảo vệ non sông.",
    silhouettePath: "M 60 140 L 90 120 L 90 160 Z M 90 140 L 130 90 L 210 90 L 230 140 L 200 180 L 120 180 Z M 230 140 L 260 130 L 250 150 Z",
    targetLayout: {
      t1: { x: 150, y: 120, rot: 0, flipped: false },
      t2: { x: 190, y: 140, rot: 90, flipped: false },
      tm: { x: 130, y: 160, rot: 270, flipped: false },
      ts1: { x: 75, y: 140, rot: 180, flipped: false },
      ts2: { x: 245, y: 140, rot: 0, flipped: false },
      sq: { x: 170, y: 160, rot: 0, flipped: false },
      para: { x: 110, y: 110, rot: 135, flipped: false }
    },
    hint: "Mai rùa khum tròn vững chắc cấu thành từ 2 tam giác lớn và hình vuông."
  },
  {
    id: "tangram-18",
    name: "Nhà Du Hành Không Gian",
    difficulty: 5,
    topic: "Khoa học",
    description: "Phi hành gia lơ lửng ngoài vũ trụ bao la với bộ đồ bảo hộ công nghệ cao.",
    silhouettePath: "M 130 50 L 170 50 L 170 90 L 130 90 Z M 110 100 L 190 100 L 180 180 L 120 180 Z M 100 120 L 70 150 L 80 170 L 110 140 Z M 190 120 L 220 150 L 210 170 L 180 140 Z",
    targetLayout: {
      t1: { x: 150, y: 130, rot: 180, flipped: false },
      t2: { x: 150, y: 150, rot: 0, flipped: false },
      tm: { x: 150, y: 200, rot: 180, flipped: false },
      ts1: { x: 90, y: 140, rot: 225, flipped: false },
      ts2: { x: 210, y: 140, rot: 135, flipped: false },
      sq: { x: 150, y: 70, rot: 0, flipped: false },
      para: { x: 150, y: 175, rot: 90, flipped: false }
    },
    hint: "Chiếc mũ bảo hộ tròn là hình vuông, 2 cánh tay vươn ra trong không gian không trọng lực."
  },
  {
    id: "tangram-19",
    name: "Ngọn Đuốc Olympic Rực Sáng",
    difficulty: 5,
    topic: "Thể thao",
    description: "Biểu tượng của tinh thần thể thao cao thượng, ý chí vươn lên đỉnh cao trí tuệ và nghị lực.",
    silhouettePath: "M 150 40 L 180 80 L 160 80 L 190 120 L 110 120 L 140 80 L 120 80 Z M 130 120 L 170 120 L 160 240 L 140 240 Z",
    targetLayout: {
      t1: { x: 150, y: 170, rot: 180, flipped: false },
      t2: { x: 150, y: 210, rot: 0, flipped: false },
      tm: { x: 150, y: 90, rot: 0, flipped: false },
      ts1: { x: 130, y: 60, rot: 45, flipped: false },
      ts2: { x: 170, y: 60, rot: 315, flipped: false },
      sq: { x: 150, y: 110, rot: 45, flipped: false },
      para: { x: 150, y: 140, rot: 90, flipped: false }
    },
    hint: "Ngọn lửa bốc cháy hướng lên với các tam giác nhọn, tay cầm đuốc thon dài ở phía dưới."
  }
];
