// js/task-master-levels.js - Tích hợp toàn bộ 200 Màn chơi Bậc Thầy Kế Hoạch (Task Master)
import { TASK_MASTER_LEVELS_PART1 } from "./task-master-levels-part1.js";
import { TASK_MASTER_LEVELS_PART2 } from "./task-master-levels-part2.js";
import { TASK_MASTER_LEVELS_PART3 } from "./task-master-levels-part3.js";
import { TASK_MASTER_LEVELS_PART4 } from "./task-master-levels-part4.js";
import { TASK_MASTER_LEVELS_PART5 } from "./task-master-levels-part5.js";

export const TASK_MASTER_LEVELS = [
  ...TASK_MASTER_LEVELS_PART1,
  ...TASK_MASTER_LEVELS_PART2,
  ...TASK_MASTER_LEVELS_PART3,
  ...TASK_MASTER_LEVELS_PART4,
  ...TASK_MASTER_LEVELS_PART5
];

export const TASK_CATEGORIES = {
  routine: {
    id: "routine",
    title: "Chặng 1: Sinh Hoạt & Tự Lập",
    badge: "🎒 TỰ LẬP",
    icon: "🎒",
    color: "#0284c7",
    bg: "#e0f2fe",
    range: "Màn 1 – 20",
    description: "Rèn thói quen tự chăm sóc bản thân, soạn đồ dùng và xử lý các tình huống đời sống khoa học."
  },
  cooking: {
    id: "cooking",
    title: "Chặng 2: Đầu Bếp Nhí & Ẩm Thực",
    badge: "🍳 ĐẦU BẾP NHÍ",
    icon: "🍳",
    color: "#d97706",
    bg: "#fef3c7",
    range: "Màn 21 – 40",
    description: "Nắm vững quy tắc nhiệt độ, thời gian và công thức nấu nướng tuần tự để tạo nên món ăn ngon lành."
  },
  engineering: {
    id: "engineering",
    title: "Chặng 3: Xưởng Sáng Chế & Kỹ Sư",
    badge: "⚙️ KỸ SƯ NHÍ",
    icon: "⚙️",
    color: "#7c3aed",
    bg: "#f3e8ff",
    range: "Màn 41 – 60",
    description: "Tư duy kỹ thuật, cơ học đòn bẩy, mạch điện tử và nguyên lý chế tạo máy móc thông minh."
  },
  mission: {
    id: "mission",
    title: "Chặng 4: Chỉ Huy Sứ Mệnh & Vũ Trụ",
    badge: "🚀 ĐẠI CHIẾN LƯỢC",
    icon: "🚀",
    color: "#dc2626",
    bg: "#fee2e2",
    range: "Màn 61 – 80",
    description: "Bài toán lập kế hoạch đa bước, dự phòng rủi ro và điều phối sứ mệnh cứu hộ, thám hiểm không gian."
  },
  medical: {
    id: "medical",
    title: "Chặng 5: Y Học & Cứu Thương Dã Chiến",
    badge: "🏥 BÁC SĨ NHÍ",
    icon: "🏥",
    color: "#e11d48",
    bg: "#ffe4e6",
    range: "Màn 81 – 100",
    description: "Kỹ năng sơ cứu khẩn cấp, nguyên tắc vô trùng, phân loại thương binh và vạch trần các ngộ nhận sai lầm."
  },
  computing: {
    id: "computing",
    title: "Chặng 6: Lập Trình & Siêu Nhà Máy Robot",
    badge: "🤖 LẬP TRÌNH VIÊN",
    icon: "🤖",
    color: "#2563eb",
    bg: "#dbeafe",
    range: "Màn 101 – 120",
    description: "Thuật toán sắp xếp, an ninh mạng, thị giác máy tính AI và dây chuyền lắp ráp xe tự lái tự động hóa."
  },
  ecology: {
    id: "ecology",
    title: "Chặng 7: Sinh Thái & Khu Bảo Tồn Rừng",
    badge: "🌿 NHÀ SINH THÁI",
    icon: "🌿",
    color: "#059669",
    bg: "#d1fae5",
    range: "Màn 121 – 140",
    description: "Hồi sinh rạn san hô, theo dõi bầy thú GPS, nông nghiệp tuần hoàn và bảo tồn thiên nhiên hoang dã."
  },
  architecture: {
    id: "architecture",
    title: "Chặng 8: Kiến Trúc & Đại Đô Thị Thông Minh",
    badge: "🏙️ TỔNG KIẾN TRÚC",
    icon: "🏙️",
    color: "#7c3aed",
    bg: "#ede9fe",
    range: "Màn 141 – 160",
    description: "Quy hoạch hầm tàu điện ngầm, tháp gió ngoài khơi, móng cọc khoan nhồi và các mốc neo kỹ thuật kiên cố."
  },
  detective: {
    id: "detective",
    title: "Chặng 9: Thám Tử & Giám Định Pháp Y",
    badge: "🕵️ THÁM TỬ NHÍ",
    icon: "🕵️",
    color: "#0f766e",
    bg: "#ccfbf1",
    range: "Màn 161 – 180",
    description: "Khám nghiệm hiện trường, phân tích ADN, phục hồi dữ liệu số và giải mã vụ án căn phòng khóa kín."
  },
  megaproject: {
    id: "megaproject",
    title: "Chặng 10: Đại Dự Án Trạm Căn Cứ Mặt Trăng",
    badge: "🌕 CHỈ HUY MẶT TRĂNG",
    icon: "🚀",
    color: "#d97706",
    bg: "#fef3c7",
    range: "Màn 181 – 200",
    description: "Công trình vĩ đại nhất: từ bệ phóng Trái Đất, đổ bộ Cực Nam, khai thác băng ngầm đến vận hành căn cứ tự chủ vĩnh viễn!"
  }
};

export function getLevelById(id) {
  return TASK_MASTER_LEVELS.find(l => l.id === id) || null;
}

export function getLevelByIndex(index) {
  const safeIdx = Math.max(0, Math.min(TASK_MASTER_LEVELS.length - 1, Number(index) || 0));
  return TASK_MASTER_LEVELS[safeIdx];
}

export function getLevelsByCategory(categoryId) {
  return TASK_MASTER_LEVELS.filter(l => l.category === categoryId);
}
