// js/balance-scale-detective.js - Game Cân bóng giả Logic (The Weighing Detective Puzzle)
// Bài toán chia ba (Trisection) kinh điển trong Olympic Toán quốc tế (SASMO, AMC 8, Kangaroo)

export const DETECTIVE_PUZZLES = [
  {
    "id": "detective-1",
    "index": 0,
    "difficulty": 1,
    "level": "Cấp 1: Thám Tử Tập Sự",
    "ballCount": 9,
    "fakeBallIndex": 5,
    "fakeType": "lighter",
    "maxWeighsAllowed": 2,
    "title": "Vụ án 1: Quả bóng số 5 bí ẩn (9 bóng - 2 lần cân)",
    "problem": "Có 9 quả bóng đánh số từ 1 đến 9 giống hệt nhau về hình dạng và kích thước. Trong đó có đúng 1 QUẢ BÓNG GIẢ BỊ RỖNG nên NHẸ HƠN các quả còn lại. Bằng chiếc cân đĩa, thám tử Bách hãy tìm ra quả bóng giả trong TỐI ĐA 2 LẦN CÂN!",
    "hint": "Chiến thuật chia 3: Chia 9 quả bóng thành 3 nhóm đều nhau: (1, 2, 3), (4, 5, 6) và (7, 8, 9). Đặt nhóm 1 lên đĩa trái, nhóm 2 lên đĩa phải!",
    "solution": "Lần 1: Cân (1,2,3) vs (4,5,6). Cân nghiêng về bên (1,2,3) chứng tỏ bên (4,5,6) nhẹ hơn => bóng giả nằm ở nhóm (4,5,6). Lần 2: Cân quả 4 vs quả 5. Cân nghiêng về quả 4 => Quả 5 nhẹ hơn chính là quả bóng giả!"
  },
  {
    "id": "detective-2",
    "index": 1,
    "difficulty": 1,
    "level": "Cấp 1: Thám Tử Tập Sự",
    "ballCount": 9,
    "fakeBallIndex": 8,
    "fakeType": "lighter",
    "maxWeighsAllowed": 2,
    "title": "Vụ án 2: Đồng xu vàng rỗng ruột (9 đồng xu)",
    "problem": "Nhà vua có 9 đồng tiền vàng đánh số 1..9, trong đó thợ rèn lỡ làm 1 ĐỒNG XU NHẸ HƠN. Thám tử Bách chỉ được dùng cân đĩa đúng 2 lần để tìm ra đồng xu nhẹ hơn đó!",
    "hint": "Lần 1: Cân (1, 2, 3) với (4, 5, 6). Nếu cân thăng bằng tuyệt đối thì sao? Đồng xu giả chắc chắn nằm ở nhóm (7, 8, 9)!",
    "solution": "Lần 1: Cân (1,2,3) vs (4,5,6) thấy thăng bằng => Đồng xu giả ở nhóm (7,8,9). Lần 2: Cân quả 7 vs quả 8. Quả 7 nặng hơn quả 8 => Đồng xu 8 nhẹ hơn chính là đồng xu giả!"
  },
  {
    "id": "detective-3",
    "index": 2,
    "difficulty": 1,
    "level": "Cấp 1: Thám Tử Tập Sự",
    "ballCount": 8,
    "fakeBallIndex": 3,
    "fakeType": "lighter",
    "maxWeighsAllowed": 2,
    "title": "Vụ án 3: Tám viên ngọc bích (8 viên - 2 lần cân)",
    "problem": "Có 8 viên ngọc bích giống nhau (đánh số 1 đến 8), trong đó có 1 viên ngọc giả nhẹ hơn. Hãy tìm viên ngọc giả trong tối đa 2 lần cân!",
    "hint": "Chia 8 viên thành 3 nhóm: 3 viên - 3 viên - 2 viên! Lần 1: Cân (1, 2, 3) với (4, 5, 6).",
    "solution": "Lần 1: Cân (1,2,3) vs (4,5,6). Nhóm (1,2,3) nhẹ hơn => ngọc giả ở (1,2,3). Lần 2: Cân viên 1 vs viên 2. Hai viên thăng bằng => Viên ngọc 3 chính là viên giả!"
  },
  {
    "id": "detective-4",
    "index": 3,
    "difficulty": 1,
    "level": "Cấp 1: Thám Tử Tập Sự",
    "ballCount": 9,
    "fakeBallIndex": 2,
    "fakeType": "heavier",
    "maxWeighsAllowed": 2,
    "title": "Vụ án 4: Viên bi sắt đặc NẶNG HƠN (9 viên bi)",
    "problem": "Trong 9 viên bi đất nung đánh số 1..9, có đúng 1 viên bi lẫn lõi sắt nên NẶNG HƠN các viên còn lại. Hãy tìm viên bi nặng hơn trong tối đa 2 lần cân!",
    "hint": "Lưu ý đề bài: Viên bi giả lần này NẶNG HƠN! Chia 9 viên thành 3 nhóm (1,2,3), (4,5,6), (7,8,9).",
    "solution": "Lần 1: Cân (1,2,3) vs (4,5,6). Đĩa bên (1,2,3) chúi xuống nặng hơn => Bi giả ở nhóm (1,2,3). Lần 2: Cân bi 1 vs bi 2. Đĩa bên 2 chúi xuống => Bi số 2 nặng hơn chính là bi giả!"
  },
  {
    "id": "detective-5",
    "index": 4,
    "difficulty": 1,
    "level": "Cấp 1: Thám Tử Tập Sự",
    "ballCount": 8,
    "fakeBallIndex": 7,
    "fakeType": "lighter",
    "maxWeighsAllowed": 2,
    "title": "Vụ án 5: Tám thỏi bạc triều đình (8 thỏi)",
    "problem": "Có 8 thỏi bạc đánh số 1..8, 1 thỏi bị thiếu bạc nhẹ hơn. Tối đa 2 lần cân hãy tìm thỏi bạc thiếu!",
    "hint": "Chia 3 - 3 - 2: Cân (1,2,3) vs (4,5,6). Nếu thăng bằng thì thỏi bạc thiếu nằm ở nhóm 2 thỏi còn lại (7, 8)!",
    "solution": "Lần 1: Cân (1,2,3) vs (4,5,6) thăng bằng => Thỏi thiếu là 7 hoặc 8. Lần 2: Cân thỏi 7 vs thỏi 8. Thỏi 7 nhẹ hơn => Thỏi 7 là thỏi thiếu!"
  },
  {
    "id": "detective-6",
    "index": 5,
    "difficulty": 1,
    "level": "Cấp 1: Thám Tử Tập Sự",
    "ballCount": 9,
    "fakeBallIndex": 1,
    "fakeType": "heavier",
    "maxWeighsAllowed": 2,
    "title": "Vụ án 6: Quả cầu thạch anh số 1 nặng hơn (9 quả)",
    "problem": "Trong 9 quả cầu thạch anh số 1..9, quả số 1 bị đọng quặng chì nên NẶNG HƠN. Tối đa 2 lần cân hãy vạch mặt quả cầu này!",
    "hint": "Cân (1,2,3) vs (4,5,6). Đĩa trái chúi xuống nặng hơn nghĩa là quả số 1 nằm ở nhánh bên trái!",
    "solution": "Lần 1: Cân (1,2,3) vs (4,5,6) => Đĩa trái nặng hơn. Lần 2: Cân quả 1 vs 2 => Đĩa 1 nặng hơn. Vậy quả số 1 là quả nặng hơn!"
  },
  {
    "id": "detective-7",
    "index": 6,
    "difficulty": 2,
    "level": "Cấp 2: Thám Tử Phố Baker",
    "ballCount": 10,
    "fakeBallIndex": 6,
    "fakeType": "lighter",
    "maxWeighsAllowed": 3,
    "title": "Vụ án 7: Mười lọ độc dược hoàng gia (10 lọ - 3 lần cân)",
    "problem": "Trong phòng thí nghiệm hoàng gia có 10 lọ độc dược đánh số 1..10. Kẻ gian đã pha loãng 1 lọ khiến nó NHẸ HƠN. Thám tử Huy hãy dùng cân đĩa tối đa 3 lần để tìm lọ bị pha loãng!",
    "hint": "Chia 10 lọ thành: 3 lọ - 3 lọ - 4 lọ! Cân (1,2,3) vs (4,5,6) trước.",
    "solution": "Lần 1: Cân (1,2,3) vs (4,5,6) thấy (4,5,6) nhẹ hơn => Lọ giả ở (4,5,6). Lần 2: Cân 4 vs 5 => Thăng bằng thì lọ giả là 6, hoặc cân 5 vs 6 => Lọ 6 nhẹ hơn!"
  },
  {
    "id": "detective-8",
    "index": 7,
    "difficulty": 2,
    "level": "Cấp 2: Thám Tử Phố Baker",
    "ballCount": 10,
    "fakeBallIndex": 10,
    "fakeType": "heavier",
    "maxWeighsAllowed": 3,
    "title": "Vụ án 8: Mười phong bao lì xì kim tiền (Lọ số 10)",
    "problem": "Có 10 phong bao tiền xu số 1..10, một phong bao có thêm đồng vàng nên NẶNG HƠN. Bằng 3 lần cân hãy chỉ ra phong bao may mắn này!",
    "hint": "Cân (1,2,3) vs (4,5,6). Nếu thăng bằng, bao nặng hơn nằm trong nhóm 4 bao (7,8,9,10)! Sau đó cân 7,8 vs 9,10.",
    "solution": "Lần 1: Cân (1..3) vs (4..6) thăng bằng => Thuộc (7..10). Lần 2: Cân (7,8) vs (9,10) => (9,10) nặng hơn. Lần 3: Cân 9 vs 10 => Bao 10 nặng hơn!"
  },
  {
    "id": "detective-9",
    "index": 8,
    "difficulty": 2,
    "level": "Cấp 2: Thám Tử Phố Baker",
    "ballCount": 12,
    "fakeBallIndex": 11,
    "fakeType": "lighter",
    "maxWeighsAllowed": 3,
    "title": "Vụ án 9: Mười hai túi bột ngũ cốc (12 túi)",
    "problem": "Có 12 túi bột ngũ cốc đánh số 1..12. Một túi bị vơi bớt nên NHẸ HƠN. Triết hãy tìm túi nhẹ hơn trong tối đa 3 lần cân!",
    "hint": "Chia 12 túi thành 3 nhóm: 4 túi - 4 túi - 4 túi. Lần 1 cân 4 túi vs 4 túi!",
    "solution": "Lần 1: Cân (1..4) vs (5..8) thăng bằng => Thuộc (9..12). Lần 2: Cân (9,10) vs (11,12) => (11,12) nhẹ hơn. Lần 3: Cân 11 vs 12 => Túi 11 chính là túi nhẹ hơn!"
  },
  {
    "id": "detective-10",
    "index": 9,
    "difficulty": 2,
    "level": "Cấp 2: Thám Tử Phố Baker",
    "ballCount": 12,
    "fakeBallIndex": 4,
    "fakeType": "heavier",
    "maxWeighsAllowed": 3,
    "title": "Vụ án 10: Quả cầu vàng chứa kho báu số 4 (12 quả)",
    "problem": "Có 12 quả cầu kim loại mạ vàng, đúng 1 quả giấu viên đá quý bên trong nên NẶNG HƠN. Tối đa 3 lần cân tìm ra viên đá quý!",
    "hint": "Chia 4 - 4 - 4: Lần 1 cân (1..4) vs (5..8). Đĩa bên (1..4) chúi xuống chứng tỏ quả nặng ở nhóm đầu tiên!",
    "solution": "Lần 1: Cân (1..4) vs (5..8) => (1..4) nặng hơn. Lần 2: Cân (1,2) vs (3,4) => (3,4) nặng hơn. Lần 3: Cân 3 vs 4 => Quả 4 nặng hơn!"
  },
  {
    "id": "detective-11",
    "index": 10,
    "difficulty": 2,
    "level": "Cấp 2: Thám Tử Phố Baker",
    "ballCount": 11,
    "fakeBallIndex": 9,
    "fakeType": "lighter",
    "maxWeighsAllowed": 3,
    "title": "Vụ án 11: Mười một thỏi vàng ròng (Thỏi số 9 nhẹ hơn)",
    "problem": "Ngân khố có 11 thỏi vàng số 1..11, 1 thỏi bị mài bớt nên nhẹ hơn. 3 lần cân hãy tìm thỏi vàng này!",
    "hint": "Chia 11 thành 4 - 4 - 3: Lần 1 cân (1..4) vs (5..8). Nếu cân thăng bằng thì thỏi nhẹ nằm ở nhóm 3 thỏi (9, 10, 11)!",
    "solution": "Lần 1: Cân (1..4) vs (5..8) thăng bằng => Thỏi nhẹ ở (9,10,11). Lần 2: Cân 9 vs 10 => Thỏi 9 nhẹ hơn chính là thỏi bị mài bớt!"
  },
  {
    "id": "detective-12",
    "index": 11,
    "difficulty": 2,
    "level": "Cấp 2: Thám Tử Phố Baker",
    "ballCount": 12,
    "fakeBallIndex": 1,
    "fakeType": "lighter",
    "maxWeighsAllowed": 3,
    "title": "Vụ án 12: Mười hai quân cờ ngà voi (Quân số 1 nhẹ hơn)",
    "problem": "Bàn cờ có 12 quân ngà voi, quân số 1 bị xốp nhẹ hơn. Huy hãy lập kế hoạch cân hoàn hảo!",
    "hint": "Cân 4 quân vs 4 quân: (1..4) vs (5..8). Đĩa trái nhẹ hơn!",
    "solution": "Lần 1: Cân (1..4) vs (5..8) => (1..4) nhẹ hơn. Lần 2: Cân (1,2) vs (3,4) => (1,2) nhẹ hơn. Lần 3: Cân 1 vs 2 => Quân 1 nhẹ hơn!"
  },
  {
    "id": "detective-13",
    "index": 12,
    "difficulty": 3,
    "level": "Cấp 3: Trưởng Ban Điều Tra",
    "ballCount": 13,
    "fakeBallIndex": 13,
    "fakeType": "lighter",
    "maxWeighsAllowed": 3,
    "title": "Vụ án 13: Mười ba viên ruby của Nữ Hoàng (Viên số 13)",
    "problem": "Kho báu cung điện có 13 viên ruby số 1..13. Kẻ trộm đánh tráo viên số 13 bằng ngọc nhân tạo NHẸ HƠN. Chỉ với 3 lần cân, thám tử tài ba Triết hãy tìm ra nó!",
    "hint": "Chia 13 viên thành: 4 viên - 4 viên - 5 viên! (hoặc cân 4 vs 4, nếu bằng cân tiếp nhóm còn lại).",
    "solution": "Lần 1: Cân (1..4) vs (5..8) thăng bằng. Lần 2: Cân (9,10) vs (11,12) thăng bằng => Chắc chắn là viên 13! Cân kiểm tra viên 13 với viên 1 chuẩn."
  },
  {
    "id": "detective-14",
    "index": 13,
    "difficulty": 3,
    "level": "Cấp 3: Trưởng Ban Điều Tra",
    "ballCount": 14,
    "fakeBallIndex": 8,
    "fakeType": "heavier",
    "maxWeighsAllowed": 3,
    "title": "Vụ án 14: Mười bốn phong thư mật vụ (Phong số 8 nặng hơn)",
    "problem": "Có 14 phong thư mật mã, riêng bức thư số 8 có kẹp vi mạch nên NẶNG HƠN. Tối đa 3 lần cân hãy định vị chính xác bức thư này!",
    "hint": "Chia 14 thành 5 - 5 - 4. Lần 1 cân 5 bức thư (1..5) vs (6..10). Đĩa bên phải nặng hơn!",
    "solution": "Lần 1: Cân (1..5) vs (6..10) => (6..10) nặng hơn. Lần 2: Cân 6,7 vs 8,9 => (8,9) nặng hơn. Lần 3: Cân 8 vs 9 => Thư số 8 nặng hơn!"
  },
  {
    "id": "detective-15",
    "index": 14,
    "difficulty": 3,
    "level": "Cấp 3: Trưởng Ban Điều Tra",
    "ballCount": 14,
    "fakeBallIndex": 14,
    "fakeType": "lighter",
    "maxWeighsAllowed": 3,
    "title": "Vụ án 15: Mười bốn quả tạ mini của viện đo lường",
    "problem": "Viện đo lường có 14 quả tạ chuẩn số 1..14, quả số 14 bị khuyết nhẹ hơn. Bằng 3 lần cân thông minh hãy tìm quả số 14!",
    "hint": "Cân (1..5) vs (6..10). Cân thăng bằng => Quả khuyết nằm trong nhóm (11, 12, 13, 14)! Cân tiếp (11,12) vs (13,14).",
    "solution": "Lần 1: Cân (1..5) vs (6..10) thăng bằng => Thuộc (11..14). Lần 2: Cân (11,12) vs (13,14) => (13,14) nhẹ hơn. Lần 3: Cân 13 vs 14 => Quả 14 nhẹ hơn!"
  },
  {
    "id": "detective-16",
    "index": 15,
    "difficulty": 3,
    "level": "Cấp 3: Trưởng Ban Điều Tra",
    "ballCount": 13,
    "fakeBallIndex": 7,
    "fakeType": "heavier",
    "maxWeighsAllowed": 3,
    "title": "Vụ án 16: Mười ba thỏi vàng thau lẫn lộn",
    "problem": "Trong 13 thỏi kim loại số 1..13, thỏi số 7 đúc đặc bằng vàng nên NẶNG HƠN các thỏi thau còn lại. Hãy tìm thỏi vàng thật sau tối đa 3 lần cân!",
    "hint": "Cân (1..4) vs (5..8). Đĩa bên phải nặng hơn => Thỏi vàng ở nhóm (5, 6, 7, 8).",
    "solution": "Lần 1: Cân (1..4) vs (5..8) => (5..8) nặng hơn. Lần 2: Cân (5,6) vs (7,8) => (7,8) nặng hơn. Lần 3: Cân 7 vs 8 => Thỏi 7 nặng hơn!"
  },
  {
    "id": "detective-17",
    "index": 16,
    "difficulty": 3,
    "level": "Cấp 3: Trưởng Ban Điều Tra",
    "ballCount": 12,
    "fakeBallIndex": 7,
    "fakeType": "heavier",
    "maxWeighsAllowed": 3,
    "title": "Vụ án 17: Bí ẩn lăng mộ Pharaoh (12 bức tượng)",
    "problem": "Có 12 bức tượng nhân sư nhỏ đánh số 1..12, một bức tượng chứa ngọc bích bên trong nên NẶNG HƠN. Hãy tìm ra bức tượng chứa ngọc!",
    "hint": "Chia 4 - 4 - 4: Cân (1..4) vs (5..8). Đĩa (5..8) chìm xuống!",
    "solution": "Lần 1: Cân (1..4) vs (5..8) => Bên (5..8) nặng hơn. Lần 2: Cân (5,6) vs (7,8) => (7,8) nặng hơn. Lần 3: Cân 7 vs 8 => Tượng 7 nặng hơn!"
  },
  {
    "id": "detective-18",
    "index": 17,
    "difficulty": 3,
    "level": "Cấp 3: Trưởng Ban Điều Tra",
    "ballCount": 14,
    "fakeBallIndex": 3,
    "fakeType": "lighter",
    "maxWeighsAllowed": 3,
    "title": "Vụ án 18: Mười bốn chiếc nhẫn kim cương (Chiếc số 3 nhẹ hơn)",
    "problem": "Tiệm kim hoàn có 14 chiếc nhẫn, chiếc số 3 gắn kim cương nhân tạo nhẹ hơn. 3 lần cân hãy giúp chủ tiệm phân biệt!",
    "hint": "Lần 1 cân 5 nhẫn vs 5 nhẫn: (1..5) vs (6..10). Đĩa trái nhẹ hơn!",
    "solution": "Lần 1: Cân (1..5) vs (6..10) => Đĩa trái nhẹ hơn. Lần 2: Cân (1,2) vs (3,4) => (3,4) nhẹ hơn. Lần 3: Cân 3 vs 4 => Chiếc 3 nhẹ hơn!"
  },
  {
    "id": "detective-19",
    "index": 18,
    "difficulty": 4,
    "level": "Cấp 4: Thám Tử Bậc Thầy Olympic",
    "ballCount": 15,
    "fakeBallIndex": 12,
    "fakeType": "lighter",
    "maxWeighsAllowed": 3,
    "title": "Vụ án 19: Mười lăm quả cầu năng lượng (15 quả - 3 lần cân)",
    "problem": "Trên tàu vũ trụ có 15 lõi năng lượng số 1..15. Đúng 1 lõi bị cạn pin nên NHẸ HƠN. Thám tử Huy chỉ có đúng 3 lần cân đĩa để cứu con tàu!",
    "hint": "Chiến thuật chia 3: Chia 15 thành 3 nhóm đều nhau 5 - 5 - 5! Lần 1 cân 5 quả vs 5 quả: (1..5) vs (6..10).",
    "solution": "Lần 1: Cân (1..5) vs (6..10) thăng bằng => Lõi cạn ở nhóm (11..15). Lần 2: Cân (11,12) vs (13,14) => (11,12) nhẹ hơn. Lần 3: Cân 11 vs 12 => Quả 12 nhẹ hơn!"
  },
  {
    "id": "detective-20",
    "index": 19,
    "difficulty": 4,
    "level": "Cấp 4: Thám Tử Bậc Thầy Olympic",
    "ballCount": 18,
    "fakeBallIndex": 16,
    "fakeType": "lighter",
    "maxWeighsAllowed": 3,
    "title": "Vụ án 20: Mười tám viên ngọc trai đen (18 viên - 3 lần cân)",
    "problem": "Thương nhân mang về 18 viên ngọc trai đen quý hiếm đánh số 1..18, 1 viên bị rỗng nhẹ hơn. Với 3 lần cân, thám tử Triết hãy chứng minh đẳng cấp!",
    "hint": "Chia 18 thành 3 nhóm đều nhau: 6 viên - 6 viên - 6 viên! Lần 1 cân 6 viên vs 6 viên.",
    "solution": "Lần 1: Cân (1..6) vs (7..12) thăng bằng => Ngọc giả ở (13..18). Lần 2: Chia 6 viên thành 2-2-2, cân (13,14) vs (15,16) => (15,16) nhẹ hơn. Lần 3: Cân 15 vs 16 => Viên 16 nhẹ hơn!"
  },
  {
    "id": "detective-21",
    "index": 20,
    "difficulty": 4,
    "level": "Cấp 4: Thám Tử Bậc Thầy Olympic",
    "ballCount": 20,
    "fakeBallIndex": 9,
    "fakeType": "heavier",
    "maxWeighsAllowed": 3,
    "title": "Vụ án 21: Hai mươi thỏi vàng của ngân khố La Mã (Thỏi số 9)",
    "problem": "Trong 20 thỏi vàng La Mã đánh số 1..20, có 1 thỏi đúc lẫn đá quý nên NẶNG HƠN. Tối đa 3 lần cân hãy phát hiện thỏi vàng đặc biệt này!",
    "hint": "Chia 20 thành 7 - 7 - 6: Lần 1 cân 7 thỏi (1..7) vs (8..14). Đĩa bên phải nặng hơn!",
    "solution": "Lần 1: Cân (1..7) vs (8..14) => (8..14) nặng hơn. Lần 2: Cân (8,9) vs (10,11) => (8,9) nặng hơn. Lần 3: Cân 8 vs 9 => Thỏi 9 nặng hơn!"
  },
  {
    "id": "detective-22",
    "index": 21,
    "difficulty": 4,
    "level": "Cấp 4: Thám Tử Bậc Thầy Olympic",
    "ballCount": 24,
    "fakeBallIndex": 21,
    "fakeType": "lighter",
    "maxWeighsAllowed": 3,
    "title": "Vụ án 22: Hai mươi tư đồng tiền cổ Triều Nguyễn (24 đồng xu)",
    "problem": "Viện cổ vật có 24 đồng tiền đồng số 1..24, 1 đồng bị rỉ sét bào mòn nên NHẸ HƠN. Chỉ với 3 lần cân đĩa hãy vạch trần đồng tiền này!",
    "hint": "Chia 24 thành 3 nhóm chuẩn mực: 8 đồng - 8 đồng - 8 đồng! Lần 1 cân (1..8) vs (9..16).",
    "solution": "Lần 1: Cân (1..8) vs (9..16) thăng bằng => Đồng nhẹ ở nhóm (17..24). Lần 2: Chia 8 thành 3-3-2, cân (17..19) vs (20..22) => (20..22) nhẹ hơn. Lần 3: Cân 20 vs 21 => Đồng 21 nhẹ hơn!"
  },
  {
    "id": "detective-23",
    "index": 22,
    "difficulty": 4,
    "level": "Cấp 4: Thám Tử Bậc Thầy Olympic",
    "ballCount": 27,
    "fakeBallIndex": 14,
    "fakeType": "lighter",
    "maxWeighsAllowed": 3,
    "title": "Vụ án 23: Bài toán kinh điển SASMO: 27 quả bóng - 3 lần cân",
    "problem": "Đây là bài thi toán Olympic SASMO danh tiếng: Có 27 quả bóng giống hệt nhau số 1..27. Có đúng 1 QUẢ BÓNG NHẸ HƠN. Với thuật toán lũy thừa ba (3^3 = 27), thám tử Huy hãy tìm ra quả bóng giả trong đúng 3 LẦN CÂN!",
    "hint": "Thuật toán chia 3 hoàn hảo: Lần 1 cân 9 quả vs 9 quả: (1..9) vs (10..18). Nhóm bên nào nhẹ hơn, hoặc nếu bằng nhau thì ở nhóm còn lại!",
    "solution": "Lần 1: Cân (1..9) vs (10..18) => (10..18) nhẹ hơn => Xác định được trong 9 quả. Lần 2: Cân (10..12) vs (13..15) => (13..15) nhẹ hơn => Xác định trong 3 quả. Lần 3: Cân 13 vs 14 => Quả 14 nhẹ hơn chính là quả bóng giả!"
  },
  {
    "id": "detective-24",
    "index": 23,
    "difficulty": 4,
    "level": "Cấp 4: Thám Tử Bậc Thầy Olympic",
    "ballCount": 27,
    "fakeBallIndex": 26,
    "fakeType": "heavier",
    "maxWeighsAllowed": 3,
    "title": "Vụ án 24: Đỉnh cao AMC 8: Viên ngọc rồng 27 bóng NẶNG HƠN",
    "problem": "Thử thách cuối cùng: 27 viên ngọc số 1..27, viên số 26 hấp thụ linh khí nên NẶNG HƠN. Đúng 3 lần cân hãy tìm ra viên ngọc rồng vĩ đại!",
    "hint": "Lần 1: Cân (1..9) vs (10..18). Hai đĩa thăng bằng chứng tỏ viên ngọc rồng nằm ở nhóm 9 viên cuối cùng (19..27)!",
    "solution": "Lần 1: Cân (1..9) vs (10..18) thăng bằng => Thuộc (19..27). Lần 2: Cân (19..21) vs (25..27) => (25..27) nặng hơn. Lần 3: Cân 25 vs 26 => Viên 26 nặng hơn chính là viên ngọc rồng!"
  }
];

export class DetectiveScaleSession {
  constructor(initialIndex = 0) {
    this.currentIndex = initialIndex;
    this.loadPuzzle(this.currentIndex);
  }

  loadPuzzle(index) {
    this.currentIndex = Math.max(0, Math.min(DETECTIVE_PUZZLES.length - 1, index));
    this.leftPan = [];
    this.rightPan = [];
    this.weighedHistory = [];
    this.weighCount = 0;
    this.currentTilt = 0;
    this.isSolved = false;
    this.lastWeighResult = null;
  }

  getCurrentPuzzle() {
    return DETECTIVE_PUZZLES[this.currentIndex];
  }

  toggleBallOnLeft(ballNum) {
    this.rightPan = this.rightPan.filter(b => b !== ballNum);
    if (this.leftPan.includes(ballNum)) {
      this.leftPan = this.leftPan.filter(b => b !== ballNum);
    } else {
      this.leftPan.push(ballNum);
      this.leftPan.sort((a, b) => a - b);
    }
  }

  toggleBallOnRight(ballNum) {
    this.leftPan = this.leftPan.filter(b => b !== ballNum);
    if (this.rightPan.includes(ballNum)) {
      this.rightPan = this.rightPan.filter(b => b !== ballNum);
    } else {
      this.rightPan.push(ballNum);
      this.rightPan.sort((a, b) => a - b);
    }
  }

  clearPans() {
    this.leftPan = [];
    this.rightPan = [];
    this.currentTilt = 0;
  }

  weigh() {
    const p = this.getCurrentPuzzle();
    if (this.leftPan.length === 0 && this.rightPan.length === 0) {
      return { ok: false, message: "Bách hãy đặt các quả bóng lên 2 đĩa cân trước khi bấm Cân nhé!" };
    }
    if (this.leftPan.length !== this.rightPan.length) {
      return { ok: false, message: "Để so sánh công bằng theo mẹo chia 3, số lượng bóng ở 2 đĩa cân phải bằng nhau!" };
    }

    const standardWeight = 10;
    const fakeWeight = p.fakeType === "lighter" ? 7 : 13;
    const calcWeight = arr => arr.reduce((acc, num) => acc + (num === p.fakeBallIndex ? fakeWeight : standardWeight), 0);

    const leftTotal = calcWeight(this.leftPan);
    const rightTotal = calcWeight(this.rightPan);
    this.weighCount++;

    let outcome = "balanced";
    if (leftTotal > rightTotal) {
      outcome = "left_heavier";
      this.currentTilt = -10;
    } else if (leftTotal < rightTotal) {
      outcome = "right_heavier";
      this.currentTilt = 10;
    } else {
      outcome = "balanced";
      this.currentTilt = 0;
    }

    const summaryText = outcome === "balanced"
      ? `Lần cân ${this.weighCount}: [${this.leftPan.join(",")}] = [${this.rightPan.join(",")}] (Hai đĩa THĂNG BẰNG)`
      : (outcome === "left_heavier"
        ? `Lần cân ${this.weighCount}: [${this.leftPan.join(",")}] NẶNG HƠN [${this.rightPan.join(",")}]`
        : `Lần cân ${this.weighCount}: [${this.leftPan.join(",")}] NHẸ HƠN [${this.rightPan.join(",")}]`);

    const logEntry = {
      weighNumber: this.weighCount,
      left: [...this.leftPan],
      right: [...this.rightPan],
      outcome,
      summary: summaryText
    };

    this.weighedHistory.push(logEntry);
    this.lastWeighResult = logEntry;

    return {
      ok: true,
      logEntry,
      weighCount: this.weighCount,
      maxAllowed: p.maxWeighsAllowed,
      tilt: this.currentTilt
    };
  }

  submitGuess(ballNum) {
    const p = this.getCurrentPuzzle();
    const guessed = Number(ballNum);

    if (guessed === p.fakeBallIndex) {
      this.isSolved = true;
      const isWithinQuota = this.weighCount <= p.maxWeighsAllowed;
      return {
        isCorrect: true,
        isWithinQuota,
        message: isWithinQuota
          ? `🎉 CHÍNH XÁC TUYỆT ĐỐI! Quả bóng số ${p.fakeBallIndex} chính là quả bóng giả! Bách đã phá án chỉ sau ${this.weighCount}/${p.maxWeighsAllowed} lần cân chuẩn Olympic!`
          : `Đúng là quả bóng số ${p.fakeBallIndex}, nhưng Bách đã dùng ${this.weighCount} lần cân (vượt mức chuẩn ${p.maxWeighsAllowed} lần). Hãy thử lại với thuật toán chia 3 nhé!`,
        solution: p.solution
      };
    }

    return {
      isCorrect: false,
      message: `Chưa đúng rồi! Quả bóng số ${guessed} là quả bóng thật tiêu chuẩn. Bách hãy xem lại kết quả các lần cân để suy luận tiếp nhé!`,
      hint: p.hint
    };
  }

  renderSvgMarkup() {
    const svgWidth = 560;
    const svgHeight = 260;
    const angle = this.currentTilt || 0;
    const rad = (angle * Math.PI) / 180;

    const beamHalf = 170;
    const pivotX = svgWidth / 2;
    const pivotY = 110;

    const leftX = pivotX - beamHalf * Math.cos(rad);
    const leftY = pivotY + beamHalf * Math.sin(rad);
    const rightX = pivotX + beamHalf * Math.cos(rad);
    const rightY = pivotY - beamHalf * Math.sin(rad);

    const ropeLen = 65;
    const leftPanY = leftY + ropeLen;
    const rightPanY = rightY + ropeLen;

    const renderBalls = (list) => {
      const count = list ? list.length : 0;
      const spacing = count > 5 ? Math.min(24, 96 / (count - 1)) : 25;
      const r = count > 6 ? 10.5 : 12;
      const fontSize = count > 6 ? 9.5 : 11;
      return (list || []).map((bNum, i) => {
        const offset = (i - (count - 1) / 2) * spacing;
        return `
          <g transform="translate(${offset}, -16)">
            <circle cx="0" cy="0" r="${r}" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1.8" />
            <text x="0" y="${r * 0.35}" font-size="${fontSize}" font-weight="900" fill="#ffffff" text-anchor="middle">${bNum}</text>
          </g>
        `;
      }).join("");
    };

    return `
      <svg viewBox="0 0 ${svgWidth} ${svgHeight}" class="balance-scale-svg" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cân đĩa tìm bóng giả">
        <rect x="230" y="235" width="100" height="15" rx="5" fill="#475569" />
        <rect x="272" y="110" width="16" height="130" rx="3" fill="#64748b" />
        <circle cx="${pivotX}" cy="${pivotY}" r="12" fill="#0284c7" stroke="#0369a1" stroke-width="2.5" />
        <line x1="${pivotX}" y1="${pivotY}" x2="${pivotX + Math.sin(rad) * 45}" y2="${pivotY - Math.cos(rad) * 45}" stroke="#ef4444" stroke-width="3" stroke-linecap="round" />
        <line x1="${leftX}" y1="${leftY}" x2="${rightX}" y2="${rightY}" stroke="#334155" stroke-width="6" stroke-linecap="round" />
        <line x1="${leftX}" y1="${leftY}" x2="${leftX - 44}" y2="${leftPanY}" stroke="#94a3b8" stroke-width="1.8" />
        <line x1="${leftX}" y1="${leftY}" x2="${leftX + 44}" y2="${leftPanY}" stroke="#94a3b8" stroke-width="1.8" />
        <path d="M ${leftX - 58} ${leftPanY} Q ${leftX} ${leftPanY + 18} ${leftX + 58} ${leftPanY} Z" fill="#e2e8f0" stroke="#475569" stroke-width="2.2" />
        <g transform="translate(${leftX}, ${leftPanY})">${renderBalls(this.leftPan)}</g>
        <line x1="${rightX}" y1="${rightY}" x2="${rightX - 44}" y2="${rightPanY}" stroke="#94a3b8" stroke-width="1.8" />
        <line x1="${rightX}" y1="${rightY}" x2="${rightX + 44}" y2="${rightPanY}" stroke="#94a3b8" stroke-width="1.8" />
        <path d="M ${rightX - 58} ${rightPanY} Q ${rightX} ${rightPanY + 18} ${rightX + 58} ${rightPanY} Z" fill="#e2e8f0" stroke="#475569" stroke-width="2.2" />
        <g transform="translate(${rightX}, ${rightPanY})">${renderBalls(this.rightPan)}</g>
      </svg>
    `;
  }
}
