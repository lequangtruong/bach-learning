// js/balance-scale-challenges.js - Ngân hàng 100 thử thách Cân Bằng Bí Mật (Tìm x trực quan Singapore)
// Phân bổ qua 10 cấp độ từ cơ bản đến tư duy tiền đại số và Olympic CLC

import { BALANCE_SCALE_CHALLENGES_PART1 } from "./balance-scale-challenges-part1.js";
import { BALANCE_SCALE_CHALLENGES_PART2 } from "./balance-scale-challenges-part2.js";
import { BALANCE_SCALE_CHALLENGES_PART3 } from "./balance-scale-challenges-part3.js";

export const BALANCE_SCALE_LEVELS = [
  { name: "Cấp độ 1: Khởi động Cân Đĩa (1 bước)", count: 10 },
  { name: "Cấp độ 2: Bớt đều 2 vế (Nhiều quả cân)", count: 10 },
  { name: "Cấp độ 3: Nhiều túi bí mật (2X, 3X)", count: 10 },
  { name: "Cấp độ 4: Khối lượng thực tế (kg, gam)", count: 10 },
  { name: "Cấp độ 5: Đại số Singapore (2 vế có X)", count: 10 },
  { name: "Cấp độ 6: Đổi đơn vị Yến, Tạ, Tấn, Gam", count: 10 },
  { name: "Cấp độ 7: Cân đối xứng đa túi (3X, 4X, 5X)", count: 10 },
  { name: "Cấp độ 8: Triệt tiêu ẩn số 2 vế nâng cao", count: 10 },
  { name: "Cấp độ 9: Bài toán Thùng hàng & Hòm báu Olympic", count: 10 },
  { name: "Cấp độ 10: Đỉnh cao Đại số Cân đĩa Tuyển chọn CLC", count: 10 }
];

export const BALANCE_SCALE_CHALLENGES = [
  ...BALANCE_SCALE_CHALLENGES_PART1,
  ...BALANCE_SCALE_CHALLENGES_PART2,
  ...BALANCE_SCALE_CHALLENGES_PART3
];
