// js/make-24-bank-part1.js - 40 Thử thách tinh hoa Mục tiêu 24 (Đã tinh giản phần dễ)
export const MAKE_24_BANK_PART1 = [
  // --- CẤP ĐỘ 1: Khởi động (Tạo cặp số vàng 3 × 8 hoặc 4 × 6 trực tiếp) ---
  {
    id: "make24-1",
    index: 0,
    difficulty: 1,
    cards: [3, 8, 1, 1],
    sampleSolution: "(3 × 8) × (1 : 1) = 24",
    hint: "Nhân 3 × 8 = 24, sau đó xử lý hai số 1 bằng phép chia (1 : 1 = 1)!"
  },
  {
    id: "make24-2",
    index: 1,
    difficulty: 1,
    cards: [2, 3, 4, 1],
    sampleSolution: "(2 + 4) × (3 + 1) = 24",
    hint: "Tạo ra 6 và 4: (2 + 4) = 6 và (3 + 1) = 4, rồi nhân 6 × 4 = 24!"
  },
  {
    id: "make24-3",
    index: 2,
    difficulty: 1,
    cards: [5, 1, 4, 6],
    sampleSolution: "(5 − 1) × 6 = 24",
    hint: "Lấy (5 − 1) = 4 rồi nhân với 6 = 24!"
  },
  {
    id: "make24-4",
    index: 3,
    difficulty: 1,
    cards: [8, 3, 2, 2],
    sampleSolution: "(8 × 3) × (2 : 2) = 24",
    hint: "Nhóm 8 × 3 = 24, và 2 : 2 = 1."
  },
  {
    id: "make24-5",
    index: 4,
    difficulty: 1,
    cards: [4, 6, 3, 3],
    sampleSolution: "(4 × 6) + (3 − 3) = 24",
    hint: "Tập trung vào 4 × 6 = 24, hai số 3 trừ nhau bằng 0!"
  },
  {
    id: "make24-6",
    index: 5,
    difficulty: 1,
    cards: [2, 2, 6, 2],
    sampleSolution: "(2 + 2) × 6 = 24",
    hint: "Tạo số 4 từ 2 + 2, rồi nhân với 6!"
  },

  // --- CẤP ĐỘ 2: Tạo số trung gian (Gộp hiệu & tổng để nhân) ---
  {
    id: "make24-7",
    index: 6,
    difficulty: 2,
    cards: [3, 8, 4, 6],
    sampleSolution: "(8 − 4) × 6 = 24",
    hint: "Lấy 8 − 4 = 4, rồi lấy 4 × 6 = 24! (Hoặc (6 − 3) × 8 = 24)."
  },
  {
    id: "make24-8",
    index: 7,
    difficulty: 2,
    cards: [2, 3, 5, 9],
    sampleSolution: "(9 − 5) × 3 × 2 = 24",
    hint: "Lấy 9 − 5 = 4, sau đó 4 × 3 × 2 = 24!"
  },
  {
    id: "make24-9",
    index: 8,
    difficulty: 2,
    cards: [3, 5, 7, 9],
    sampleSolution: "(9 − 5) × (7 − 3) = 24",
    hint: "Tạo hai số: 9 − 5 = 4 và 7 − 3 = 4, hoặc nhóm: (9 + 7) : 2 × 3!"
  },
  {
    id: "make24-10",
    index: 9,
    difficulty: 2,
    cards: [3, 4, 5, 6],
    sampleSolution: "6 × (5 + 3 − 4) = 24",
    hint: "Trong ngoặc tính ra 4: 5 + 3 − 4 = 4, rồi nhân với 6!"
  },
  {
    id: "make24-11",
    index: 10,
    difficulty: 2,
    cards: [2, 4, 6, 8],
    sampleSolution: "(8 − 4) × 6 = 24",
    hint: "Lấy (8 − 4) = 4, rồi nhân với 6 = 24!"
  },
  {
    id: "make24-12",
    index: 11,
    difficulty: 2,
    cards: [2, 5, 6, 9],
    sampleSolution: "(9 + 5 − 2) × 2 = 24",
    hint: "9 + 5 − 2 = 12, rồi nhân đôi: 12 × 2 = 24!"
  },

  // --- CẤP ĐỘ 3: Phép tính kết hợp & Đóng mở ngoặc ---
  {
    id: "make24-13",
    index: 12,
    difficulty: 3,
    cards: [5, 5, 5, 1],
    sampleSolution: "5 × 5 − (5 : 5) = 24",
    hint: "Bộ số kinh điển thế giới: 5 × 5 = 25, bớt đi 1 bằng (5 : 5)!"
  },
  {
    id: "make24-14",
    index: 13,
    difficulty: 3,
    cards: [4, 4, 7, 7],
    sampleSolution: "(7 − 4) × (7 + 1) = 24",
    hint: "Lấy (7 − 4) = 3 và (7 + 1) = 8, rồi nhân 3 × 8 = 24!"
  },
  {
    id: "make24-15",
    index: 14,
    difficulty: 3,
    cards: [2, 2, 8, 8],
    sampleSolution: "(2 × 8) + 8 = 24",
    hint: "2 × 8 = 16, cộng thêm 8 = 24!"
  },
  {
    id: "make24-16",
    index: 15,
    difficulty: 3,
    cards: [3, 3, 6, 6],
    sampleSolution: "3 × 6 + 6 = 24",
    hint: "Nhân 3 × 6 = 18, cộng thêm 6 = 24!"
  },
  {
    id: "make24-17",
    index: 16,
    difficulty: 3,
    cards: [2, 6, 8, 12],
    sampleSolution: "12 + 8 + 6 − 2 = 24",
    hint: "Cộng trừ liên tiếp: 12 + 8 = 20, 20 + 6 − 2 = 24!"
  },
  {
    id: "make24-18",
    index: 17,
    difficulty: 3,
    cards: [3, 4, 7, 8],
    sampleSolution: "(7 − 4) × 8 = 24",
    hint: "(7 − 4) = 3, sau đó 3 × 8 = 24!"
  },
  {
    id: "make24-19",
    index: 18,
    difficulty: 3,
    cards: [2, 5, 8, 9],
    sampleSolution: "(9 − 5) × (8 − 2) = 24",
    hint: "9 − 5 = 4 và 8 − 2 = 6. Nhân 4 × 6 = 24!"
  },
  {
    id: "make24-20",
    index: 19,
    difficulty: 3,
    cards: [1, 5, 6, 7],
    sampleSolution: "(7 − 5 + 1) × 8 = 24",
    hint: "(7 − 5 + 1) = 3, rồi nhân 3 × 8 = 24!"
  },

  // --- CẤP ĐỘ 4: Phép nhân chia phức hợp ---
  {
    id: "make24-21",
    index: 20,
    difficulty: 4,
    cards: [3, 5, 8, 10],
    sampleSolution: "(10 − 5) × 5 − 1 = 24",
    hint: "(10 − 5) × 5 − 1 = 24 hoặc (8 − 5) × (10 − 2) = 24!"
  },
  {
    id: "make24-22",
    index: 21,
    difficulty: 4,
    cards: [4, 5, 7, 9],
    sampleSolution: "(9 − 5) × (7 − 1) = 24",
    hint: "9 − 5 = 4, 7 − 1 = 6. 4 × 6 = 24!"
  },
  {
    id: "make24-23",
    index: 22,
    difficulty: 4,
    cards: [2, 6, 9, 11],
    sampleSolution: "(11 − 9) × (6 + 6) = 24",
    hint: "11 − 9 = 2, nhân với 12!"
  },
  {
    id: "make24-24",
    index: 23,
    difficulty: 4,
    cards: [3, 4, 9, 10],
    sampleSolution: "(10 − 4) × (9 − 5) = 24",
    hint: "10 − 4 = 6 và (9 − 5) = 4. 6 × 4 = 24!"
  },
  {
    id: "make24-25",
    index: 24,
    difficulty: 4,
    cards: [1, 8, 9, 10],
    sampleSolution: "(10 − 8 + 1) × 8 = 24",
    hint: "10 − 8 + 1 = 3. 3 × 8 = 24!"
  },
  {
    id: "make24-26",
    index: 25,
    difficulty: 4,
    cards: [3, 7, 9, 11],
    sampleSolution: "(11 − 7) × (9 − 3) = 24",
    hint: "11 − 7 = 4 và 9 − 3 = 6. 4 × 6 = 24!"
  },
  {
    id: "make24-27",
    index: 26,
    difficulty: 4,
    cards: [4, 5, 8, 11],
    sampleSolution: "(11 − 5) × 4 = 24",
    hint: "11 − 5 = 6, 6 × 4 = 24!"
  },
  {
    id: "make24-28",
    index: 27,
    difficulty: 4,
    cards: [2, 4, 9, 13],
    sampleSolution: "(13 − 9 + 2) × 4 = 24",
    hint: "13 − 9 + 2 = 6, 6 × 4 = 24!"
  },
  {
    id: "make24-29",
    index: 28,
    difficulty: 4,
    cards: [3, 4, 11, 13],
    sampleSolution: "(13 − 11) × (3 × 4) = 24",
    hint: "13 − 11 = 2, 3 × 4 = 12. 2 × 12 = 24!"
  },
  {
    id: "make24-30",
    index: 29,
    difficulty: 4,
    cards: [5, 6, 7, 8],
    sampleSolution: "(8 − 5) × (7 + 1) = 24",
    hint: "8 − 5 = 3, 7 + 1 = 8. 3 × 8 = 24!"
  },

  // --- CẤP ĐỘ 5 (OLYMPIC MASTER 🔥): Tạo phân số trung gian & kết hợp lắt léo ---
  {
    id: "make24-31",
    index: 30,
    difficulty: 5,
    cards: [4, 4, 10, 10],
    sampleSolution: "(10 × 10 − 4) : 4 = 24",
    hint: "10 × 10 = 100. 100 − 4 = 96. Lấy 96 : 4 = 24!"
  },
  {
    id: "make24-32",
    index: 31,
    difficulty: 5,
    cards: [3, 3, 8, 8],
    sampleSolution: "8 : (3 − 8 : 3) = 24",
    hint: "Bài toán huyền thoại thế giới: Tạo phân số 8/3! 3 − 8/3 = 1/3, sau đó lấy 8 chia cho 1/3!"
  },
  {
    id: "make24-33",
    index: 32,
    difficulty: 5,
    cards: [1, 5, 5, 5],
    sampleSolution: "(5 − 1 : 5) × 5 = 24",
    hint: "Lấy 1 : 5 = 1/5. Sau đó 5 − 1/5 = 24/5. Nhân với 5 sẽ triệt tiêu mẫu số!"
  },
  {
    id: "make24-34",
    index: 33,
    difficulty: 5,
    cards: [3, 3, 7, 7],
    sampleSolution: "(3 + 3 : 7) × 7 = 24",
    hint: "Lấy 3 : 7 = 3/7. Cộng với 3 thành 24/7. Nhân với 7 sẽ ra đúng 24!"
  },
  {
    id: "make24-35",
    index: 34,
    difficulty: 5,
    cards: [1, 4, 5, 6],
    sampleSolution: "4 : (1 − 5 : 6) = 24",
    hint: "Tạo phân số: 5 : 6 = 5/6. 1 − 5/6 = 1/6. Lấy 4 chia cho 1/6 = 24!"
  },
  {
    id: "make24-36",
    index: 35,
    difficulty: 5,
    cards: [1, 3, 4, 6],
    sampleSolution: "6 : (1 − 3 : 4) = 24",
    hint: "3 : 4 = 3/4. 1 − 3/4 = 1/4. 6 chia cho 1/4 bằng 24!"
  },
  {
    id: "make24-37",
    index: 36,
    difficulty: 5,
    cards: [4, 7, 8, 8],
    sampleSolution: "(7 − 8 : 8) × 4 = 24",
    hint: "8 : 8 = 1. Lấy 7 − 1 = 6, sau đó 6 × 4 = 24!"
  },
  {
    id: "make24-38",
    index: 37,
    difficulty: 5,
    cards: [4, 6, 7, 9],
    sampleSolution: "(9 + 7) × 6 : 4 = 24",
    hint: "9 + 7 = 16. 16 × 6 = 96. Lấy 96 : 4 = 24!"
  },
  {
    id: "make24-39",
    index: 38,
    difficulty: 5,
    cards: [4, 5, 6, 11],
    sampleSolution: "(11 + 5) × 6 : 4 = 24",
    hint: "11 + 5 = 16. Lấy 16 × 6 : 4 = 24!"
  },
  {
    id: "make24-40",
    index: 39,
    difficulty: 5,
    cards: [3, 7, 8, 12],
    sampleSolution: "12 : (7 − 3) × 8 = 24",
    hint: "7 − 3 = 4. 12 : 4 = 3. 3 × 8 = 24!"
  }
];
