// js/task-master-levels.js - Tích hợp toàn bộ 80 Màn chơi Bậc Thầy Kế Hoạch (Task Master)
import { TASK_MASTER_LEVELS_PART1 } from "./task-master-levels-part1.js";
import { TASK_MASTER_LEVELS_PART2 } from "./task-master-levels-part2.js";

export const TASK_MASTER_LEVELS = [
  ...TASK_MASTER_LEVELS_PART1,
  ...TASK_MASTER_LEVELS_PART2
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
