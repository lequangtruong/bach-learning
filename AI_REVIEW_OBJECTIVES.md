# BẢN ĐÁNH GIÁ VÀ CHỈ DẪN KỸ THUẬT CUỐI CÙNG
## DỰ ÁN: BÁCH LEARNING LAB (LỚP 4)
**Tài liệu tham chiếu gốc (Source of Truth):** `/Users/macbook/.codex/attachments/92545d58-d1f2-450f-a47b-4367ffc5d506/goal-objective.md`  
**Quy chuẩn kỹ thuật:** AI Support Kit (Task Contracts, Invariants, Flow Evidence, Five-point Closure)  
**Hội đồng Thẩm định:** Phụ huynh · DeepSeek V4 Pro · DeepSeek Flash · Antigravity Lead  
**Thời điểm cập nhật & phê duyệt:** 2026-09-11  
**Trạng thái:** **READY FOR PRODUCTION & MULTI-AGENT REVIEW GATES**

---

## I. ĐẶT HÀNG & BỐI CẢNH SỬ DỤNG (BẮT BUỘC AI CODE PHẢI NẮM RÕ)

1. **Bản chất phiên học (Deliberate Micro-learning):**
   - Ban ngày Bách đã học chính khóa ở trường. Buổi tối tại nhà là phiên **rèn luyện có chủ đích 25 phút/môn/ngày (Thứ 2–6)** và **50 phút/môn (Thứ 7)**.
   - Mục tiêu: Kích hoạt tư duy bậc cao, bứt phá năng lực cho học sinh giỏi vì bài tập đại trà ở lớp không đủ độ sâu. Tuyệt đối không dạy lại từ số 0 theo kiểu mất gốc.
2. **Nguyên tắc môn Toán (`MATH-4`):**
   - SGK Kết nối tri thức là trục tiến độ; phương pháp Singapore (CPA, Bar Model, Heuristics, Polya) là công cụ tư duy.
   - Làm thật chặt chẽ, chú trọng lập luận và bản chất; tuyệt đối không dạy mẹo vặt cơ học.
   - 6 tuần đầu là cầu nối (Bridge) và chẩn đoán nền tính toán nhanh (8–10 phút: Chính xác $\rightarrow$ Chiến lược $\rightarrow$ Lưu loát $\rightarrow$ Kiểm tra).
   - Bảo toàn bất biến số học: Kết quả luôn là số nguyên dương ($> 0$), phép chia hết ($remainder = 0$), số bị trừ lớn hơn số trừ.
3. **Nguyên tắc môn Tiếng Việt (`VI-4`):**
   - **Xóa bỏ văn mẫu sáo rỗng nhưng KHÔNG tạo ra "văn mẫu mới" (Anti-Meta-Template Trap):** Tránh áp đặt các cụm từ "đắt giá" của người lớn (như "vết xước hộp bút", "tiếng dép của bố") thành khuôn mẫu bắt chước mới. Thay vào đó, tập trung vào **Bể quan sát cá nhân (Personal Observation Pool)**: khơi gợi chi tiết từ chính trải nghiệm thật của Bách qua 3 kênh giác quan (Thị giác, Thính giác, Xúc giác).
   - **Kỹ thuật Đọc to (Oral Rehearsal)**: Kỹ thuật tư duy ngôn ngữ bắt buộc. Quy trình: Viết nháp trên giấy $\rightarrow$ Đọc to vào máy (STT) $\rightarrow$ Tự rà soát sửa lỗi $\rightarrow$ Lưu bản hoàn thiện. Bàn phím/chụp ảnh là phương án dự phòng.
4. **Quy tắc dừng an toàn (Stop Rule):**
   - Hết đúng thời gian (25 phút ngày thường, 50 phút Thứ 7) thì dừng ngay, không ép học bù.
5. **Chính sách nghỉ học linh hoạt (No Streak Pressure):**
   - Việc nghỉ là hoàn toàn bình thường khi mệt hoặc bận việc gia đình, **không tính vào tiến độ và không bị phạt**.
   - Tuyệt đối không tạo áp lực chuỗi ngày liên tục (No streak shaming/guilt), không gán nhãn bỏ lỡ hay thất bại.
   - Tuyệt đối không dồn bài của ngày nghỉ vào buổi sau để bảo toàn giới hạn 25 phút.

---

## II. ĐỐI SOÁT HIỆN TRẠNG KỸ THUẬT & TOÁN HỌC

Hệ thống đã triển khai đầy đủ và vượt qua **109/109 automated unit & integration tests** (`npm test` exit 0):

| Thành phần | Tệp tin đảm nhiệm | Hiện trạng kiểm chứng |
| :--- | :--- | :--- |
| **Curriculum 36 tuần** | `data/curriculum.js`, `data/curriculum-factory.js` | 36 tuần $\times$ 6 ngày độc lập, bài tập tự chứa, không dùng shell rỗng. Pass test #1–#7. |
| **Bộ 3 Game Toán Lớp 4** | `js/speed-math.js`, `js/render-games.js` | • **Speed Math Sprint**: 5.500+ bài toán tự sinh, đa đại lượng, 3-5 số hạng, 100% nghiệm nguyên dương.<br>• **Bar Model Studio**: 120 bài (2 số và 3 số, chuẩn hóa dạng Tổng - Hiệu vs Tỉ số).<br>• **Thám Tử Bắt Lỗi Sai**: 120 vụ án bẫy lỗi sư phạm, chuẩn hóa số liệu hàng nghìn đến trăm nghìn. |
| **Định Lượng Độ Khó & Giao Bài** | `js/render-games.js` | Độ khó 1-5 sao; phân bổ chính xác 2 bài ngày thường (Bài 1 Dễ $\le$ Bài 2 Khó) và 3 bài Thứ 7 (Bài 1 Dễ $\le$ Bài 2 Khó $\le$ Bài 3 Olympic); độ khó tăng đơn điệu qua 24 tuần. |
| **Local-First DB** | `data/data-core.js` | Schema v2, `validateDatabasePayload()` nghiêm ngặt, `mergeDatabases()` bảo vệ dữ liệu Drive. |
| **Durable Timer & Navigation** | `data/data-core.js`, `app.js` | Nút "Bài học hôm nay cho Bách" tự động nhảy tới bài tiếp theo; timer wall-clock không spam Drive. |
| **Gemini OAuth REST** | `api/tutor.js` | Serverless function refresh token server-side, rate limit 25 req/phút, Socratic prompt chặn giải hộ. |

---

## III. ĐIỀU CẤM & RANH GIỚI BẢO VỆ (CRITICAL INVARIANTS)

Bất kỳ AI nào khi chỉnh sửa hoặc mở rộng mã nguồn **TUYỆT ĐỐI KHÔNG ĐƯỢC VI PHẠM**:

1. **BẢO MẬT CREDENTIALS:**
   - Tuyệt đối KHÔNG đặt Gemini API Key, OAuth Client Secret hoặc Refresh Token ở client-side (`app.js`, `index.html`, `public-config.js`).
   - Mọi tương tác Gemini AI phải đi qua server-side endpoint `/api/tutor`.
2. **TÍNH TOÀN VẸN DỮ LIỆU DRIVE:**
   - Google Drive sync chỉ tương tác đúng file `Bach Learning DB.json`.
   - Phải luôn chạy qua `validateDatabasePayload()` trước khi nạp vào state hoặc ghi vào Drive.
   - Không được ghi đè (overwrite) dữ liệu Drive nếu local database là bản rỗng mới khởi tạo.
3. **TÍNH SƯ PHẠM TRỢ GIẢNG & VAI TRÒ SOCRATIC:**
   - System prompt của AI Tutor: **Gợi ý từng nấc nhỏ (scaffolding), là người đối thoại gợi mở giác quan, tuyệt đối không làm bài hộ, không đưa ngay đáp số, không viết văn mẫu thay trẻ**.
   - Tuyệt đối từ chối các yêu cầu viết code, lập trình hoặc giải đáp ngoài phạm vi Toán & Tiếng Việt lớp 4.
4. **KHÔNG DÙNG TIMER GÂY ÁP LỰC TRONG MINI-GAME:**
   - Mini-game là hoạt động củng cố tư duy và thư giãn; chuyển cơ chế đếm ngược gấp gáp thành cơ chế **gợi ý mở dần khi bí** (Hint Ladder).
5. **CHỐNG BẪY "VĂN MẪU MỚI" (ANTI-META-TEMPLATE):**
   - Tuyệt đối không xem các chi tiết "vết xước hộp bút", "tiếng dép của bố" là đáp án đúng duy nhất.
   - Phải có cơ chế chấp nhận mọi chi tiết quan sát xuất phát từ trải nghiệm giác quan thật của học sinh.
6. **KHÔNG DỒN BÀI BÙ & KHÔNG PHẠT CHUỖI:**
   - Tuyệt đối không tự động dồn bài của những ngày nghỉ vào buổi sau.
   - Data model không được sinh các trường đếm chuỗi làm căn cứ cảnh báo mất chuỗi.

---

## IV. QUY CHUẨN MASTER PROMPT REVIEW (MULTI-AI GATES)

Để rà soát toàn bộ bài học và tính năng mới một cách khách quan, hệ thống thiết lập quy trình review 4 tầng:

```
Tầng L0: Deterministic Linters (Code/Regex kiểm tra cứng)
   │     • Miền số nguyên dương, chia hết, số dư hợp lệ
   │     • Rò rỉ đáp án trên 7 bề mặt (stem, option, hint, alt, metadata, filename, order)
   │     • Tỷ lệ đáp án dài nhất ≤ 45%, vị trí đáp án đúng rải đều (≤ 40%/vị trí)
   ▼
Tầng L1: Domain Pack Review (LLM chuyên sâu theo môn)
   │     • MATH-4: Khớp mục tiêu SGK Kết nối tri thức, tiến trình CPA, không mẹo vặt
   │     • VI-4: Thuật ngữ SGK 2018, kiểm tra 3 kênh giác quan, chống văn mẫu sáo rỗng
   ▼
Tầng L2: Adversarial Pass (Thử thách phản biện bắt buộc)
   │     • Nêu ≥ 2 cách hiểu khác của đề bài (nếu có cách hiểu thứ 2 hợp lý ➔ câu hỏi chưa chặt)
   │     • Chỉ ra 1 "đường tắt" học sinh có thể đoán đúng mà không cần hiểu bản chất
   │     • Đảo thứ tự phương án và kiểm tra lại: Nếu verdict thay đổi ➔ gắn nhãn Position Bias
   ▼
Tầng L3: Human-in-the-loop (Phụ huynh duyệt mẫu & can thiệp các cảnh báo WARN)
```

### 1. Phân định Domain Packs
- **`MATH-4` Invariants**: 
  - $Answer \in \mathbb{Z}^+$, $a > b$ trong phép trừ, $a \pmod b = 0$ trong phép chia cơ bản.
  - Biểu thức nhiều số phải có chiến lược tính nhanh (cặp số vàng, phân phối).
  - Độ khó bài học: Bài cơ bản $\le$ Bài vận dụng $\le$ Thử thách Olympic.
- **`VI-4` Invariants**:
  - **Tuyệt đối không dùng nhãn "Thử thách Olympic" cho môn Tiếng Việt**: Thay bằng **"Thử thách diễn đạt & sáng tạo"** hoặc **"Góc sáng tạo"** (mở rộng cảm xúc, quan sát giác quan chân thực).
  - Tiến trình bài học: Bài cơ bản $\le$ Bài vận dụng $\le$ Thử thách diễn đạt & sáng tạo.
  - Whitelist thuật ngữ Tiếng Việt lớp 4 CT 2018 (Từ đơn/phức, từ ghép, từ láy âm đầu/vần/toàn bộ).
  - Đố mẹo phải thỏa mãn *"Định lý lời giải"* (suy ra tất yếu từ từ ngữ đa nghĩa/đồng âm sau khi lật thẻ, không phải nhớ vẹt lookup).
  - Mọi bài tập sửa câu sáo rỗng phải gắn với 3 kênh giác quan: Thính giác (nghe), Thị giác (thấy), Xúc giác (chạm).

### 2. Bảng Invariants cốt lõi (Review Checklist)

| Mã ID | Tên Invariant | Phương pháp kiểm tra | Ngưỡng vi phạm | Mức độ |
|:---:|:---|:---|:---|:---:|
| **I-01** | Không rò rỉ đáp số trên 7 bề mặt | Linter Regex + Hint check | Rò rỉ từ khóa đáp án | **BLOCK** |
| **I-02** | Khớp mục tiêu bài học | L1 LLM Review | Bài tập không phục vụ mục tiêu | **BLOCK** |
| **I-03** | Bảo toàn số nguyên dương Toán Lớp 4 | L0 Code Linter | Nghiệm $\le 0$, số thập phân | **BLOCK** |
| **I-04** | An toàn nội dung trẻ em | L0 Keyword Blacklist | Thuốc lá, cồn, bạo lực | **BLOCK** |
| **I-05** | Chống văn mẫu mới (Anti-meta-template) | L1 Semantic Check | Cụm từ người lớn lặp > 2 lần | **BLOCK** |
| **I-06** | Định lý lời giải câu đố ngôn từ | L2 Adversarial Pass | Đáp án không thể suy luận ra | **BLOCK** |
| **I-07** | Phân bố vị trí đáp án đúng | L0 Script Statistic | Vị trí bất kỳ $> 40\%$ | **WARN** |
| **I-08** | Cảnh báo phương án dài nhất | L0 Script Statistic | Phương án dài nhất đúng $> 45\%$ | **WARN** |

---

## V. ĐỊNH HƯỚNG BỘ TRÒ CHƠI TIẾNG VIỆT HOÀN THIỆN

Để bảo đảm thời lượng 25 phút không bị quá tải chuyển cảnh:
1. **Lịch xoay vòng 1 game/buổi (6–8 phút)**:
   - **Thứ 2**: 🔍 *Thám Tử Luyện Từ & Câu* (kích hoạt vốn từ, phân loại từ láy/ghép, săn từ gợi cảm giác).
   - **Thứ 4**: 🧩 *Thách Trí Dân Gian & Nghịch Lý* (đố mẹo chơi chữ, thẻ "Bí mật ngôn ngữ" giải mã từ đa nghĩa).
   - **Thứ 6**: 🩺 *Bác Sĩ Bắt Bệnh Câu Văn* (bắt bệnh câu què, bệnh sáo rỗng, lắp ráp chi tiết giác quan).
2. **Tối ưu trật tự sư phạm**:
   - Trò chơi hiệu chỉnh tiêu chí câu văn (*Bác sĩ bắt bệnh*) được đặt **TRƯỚC** lúc viết nháp để nạp tiêu chuẩn vào nhận thức.
   - Trò chơi giải đố thư giãn (*Thách trí dân gian*) được đặt ở **CUỐI** buổi để kết thúc phiên học bằng tiếng cười và sự hứng thú.

---

## VI. KẾT LUẬN

Bản đánh giá kỹ thuật này kết tinh phản biện sâu sắc từ cả hai mô hình **DeepSeek Flash** và **DeepSeek V4 Pro**. Mọi bài học và tính năng mới trước khi bàn giao đều phải trải qua cổng kiểm định của quy chuẩn Master Prompt này.
