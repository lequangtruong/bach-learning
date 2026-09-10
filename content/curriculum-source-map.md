# Bản Đồ Ánh Xạ Nguồn Vào Chương Trình Học (Curriculum Source Map)
**Dự án**: Bách Learning Lab · Lớp 4  
**Trạng thái**: Tài liệu truy xuất nguồn gốc (Source-to-Curriculum Traceability Artifact)  
**Nguyên tắc cốt lõi**: Phân định ranh giới rõ ràng giữa **Nguồn đã xác minh (VERIFIED SOURCE)**, **Quyết định thiết kế dự án (PROJECT DECISION)** và **Hạng mục chờ kiểm chứng (PENDING VALIDATION)**; tách biệt rạch ròi giữa Mỏ neo tiến trình (Anchor), Phương pháp sư phạm (Pedagogy) và Cảm hứng kỹ thuật (Engineering).

---

## 1. Khung Tham Chiếu 4 Trụ Cột (Four-Pillar Framework)

Mỗi nội dung bài học, phiếu bài tập và luồng tương tác trong `data/curriculum.js` được định hình bởi 4 trụ cột với thẩm quyền và trạng thái kiểm định rõ ràng:

```
┌───────────────────────────────────────────────────────────────────────────────┐
│ TRỤ CỔT 1: MỎ NEO TIẾN TRÌNH DO GIA ĐÌNH CHỌN (FAMILY-SELECTED ANCHOR)        │
│ CTGDPT 2018 (Khung chuẩn đầu ra) & SGK "Kết nối tri thức" (Mỏ neo gia đình)   │
│ ➔ Trạng thái: VERIFIED SOURCE (CTGDPT 2018 tổng thể) + PENDING VALIDATION      │
│   (cần phụ huynh/giáo viên đối soát phân phối chương trình thực tế tại trường)│
└──────────────────────────────────────┬────────────────────────────────────────┘
                                       │ (Định vị nội dung & chuỗi bài học)
                                       ▼
┌──────────────────────────────────────┴────────────────────────────────────────┐
│ PHƯƠNG PHÁP SƯ PHẠM ĐỘC LẬP VỀ CÁCH DẠY & HỌC (METHOD-ONLY INPUTS)            │
├──────────────────────────────────────┬────────────────────────────────────────┤
│ TRỤ CỘT 2: TOÁN TIỂU HỌC SINGAPORE   │ TRỤ CỘT 3: TIẾNG ANH TIỂU HỌC SINGAPORE│
│ (Singapore MOE Primary Mathematics)  │ (Singapore MOE Primary English)        │
│ ➔ Trạng thái: VERIFIED SOURCE        │ ➔ Trạng thái: VERIFIED SOURCE          │
│ • Tiếp cận CPA (Concrete-Pictorial-  │ • Tích hợp Receptive (Đọc)             │
│   Abstract)                          │   & Productive (Nói, Viết)             │
│ • Mô hình hóa trực quan (Bar Model)  │ • Luyện nói trước khi viết (Oral       │
│ • Heuristic Families (Lập bảng, làm  │   rehearsal & Speech-to-Text)          │
│   ngược, chia trường hợp, bất biến)  │ • Quy trình viết & biên tập nhiều lớp  │
│ • Siêu nhận thức (Metacognition)     │   (Drafting, Checklist 4 lớp, sửa sâu)│
└──────────────────────────────────────┴────────────────────────────────────────┘
                                       │
                                       │ (Hiện thực hóa giao diện & trải nghiệm)
                                       ▼
┌───────────────────────────────────────────────────────────────────────────────┐
│ TRỤ CỘT 4: CẢM HỨNG KỸ THUẬT & TRẢI NGHIỆM (ENGINEERING INSPIRATION ONLY)     │
│ math-challenge, Literacy For Kids, barabara, openSRS                          │
│ ➔ Trạng thái: PROJECT DECISION (Triển khai mã nguồn & tính năng độc lập)     │
│ ➔ Gợi ý: Nấc thang thử thách, nhịp học ngắn gọn, Local-first/Offline-first.    │
│ ➔ TUYỆT ĐỐI KHÔNG CÓ THẨM QUYỀN NỘI DUNG CHƯƠNG TRÌNH HỌC (ZERO AUTHORITY).   │
└───────────────────────────────────────────────────────────────────────────────┘
```

### Chi tiết các nguồn tham chiếu chính thức:
1. **Trụ cột 1 (Mỏ neo tiến trình do gia đình lựa chọn)**:
   - [Bộ GD&ĐT - Chương trình Giáo dục Phổ thông 2018 (Chương trình tổng thể PDF)](https://moet.gov.vn/content/tintuc/Lists/News/Attachments/8421/chuong-trinh-tong-the-ctgdpt-2018.pdf): **[VERIFIED SOURCE]** Xác định mục tiêu, phẩm chất, năng lực cốt lõi và định hướng chuẩn đầu ra chung. *(Lưu ý: Không dùng văn bản tổng thể này để khẳng định tiến độ bài học cụ thể từng tuần).*
   - [NXB Giáo dục Việt Nam - Bộ SGK Kết nối tri thức với cuộc sống](https://nxbgd.vn): **[PROJECT DECISION / PENDING VALIDATION]** Mỏ neo tiến trình do gia đình lựa chọn để sắp xếp mạch bài học từ tuần 1 đến tuần 36. Do kho lưu trữ mã nguồn chưa lưu bản mục lục đối soát phân phối chương trình chi tiết của trường, tiến trình tuần 1–36 này **phải được phụ huynh và giáo viên trực tiếp xác nhận, đối soát lại với kế hoạch dạy học thực tế của nhà trường**.
2. **Trụ cột 2 (Phương pháp Toán)**:
   - [Singapore MOE Primary Mathematics Syllabus (Updated Dec 2024)](https://www.moe.gov.sg/-/media/files/primary/2021-primary-mathematics-syllabus-p1-to-p6-updated-dec-2024.pdf): **[VERIFIED SOURCE]** Khung ngũ giác sư phạm (Concepts, Skills, Processes, Metacognition, Attitudes) và hệ thống chiến lược Heuristics.
3. **Trụ cột 3 (Phương pháp Ngôn ngữ)**:
   - [Singapore MOE English Language Syllabus 2020 (Primary)](https://www.moe.gov.sg/-/media/files/primary/2020-english-language-primary.ashx): **[VERIFIED SOURCE]** Nguyên lý tích hợp kỹ năng tiếp nhận – sản sinh ngôn ngữ, tập dượt phát âm/nói và vòng lặp soạn thảo - phản hồi nhiều lớp.
4. **Trụ cột 4 (Cảm hứng kỹ thuật phần mềm)**:
   - [kilowatto/math-challenge](https://github.com/kilowatto/math-challenge): **[PROJECT DECISION]** Cảm hứng về cấu trúc nấc thang (`challengeLadder`). Toàn bộ mã nguồn bài tập do lab tự cài đặt độc lập.
   - [Literacy For Kids](https://github.com/literacy-for-kids): **[PROJECT DECISION]** Cảm hứng về nhịp học tương tác phân đoạn thời gian.
   - [megafarad/barabara](https://github.com/megafarad/barabara): **[PROJECT DECISION]** Cảm hứng về kiến trúc Local-First, bảo vệ quyền riêng tư không theo dõi.
   - [openSRS](https://github.com/openSRS-App/openSRS): **[PROJECT DECISION]** Cảm hứng về nguyên lý gợi nhớ ngắt quãng ở các buổi ôn tập cuối tuần.

---

## 2. Tuyên Bố Bản Quyền Về Bài Tập & Tính Độc Lập Nội Dung (Bounded Scope & Integrity)

> [!IMPORTANT]
> **Tuyên bố minh bạch về nội dung trong `data/curriculum.js`**:
> 1. **Bài tập biên soạn độc lập (Authored Tasks)**: Đề bài, phiếu học tập và ngữ liệu đọc hiểu do dự án tự biên soạn hoặc chọn lọc độc lập, phục vụ nhu cầu học tập cá nhân hóa của học sinh.
> 2. **Không sao chép đề thi thật (Past Papers)**: Tuyệt đối không sao chép đề thi chính thức của các kỳ thi SASMO, AMC, Kangaroo, APMOPS hay các kỳ thi quốc gia của Singapore/Trung Quốc.
> 3. **Không tuyên bố liên kết chính thức (No Official Endorsement)**: Các đề mục ghi "Mô phỏng Singapore" hoặc "Mô phỏng Trung Quốc" chỉ phản ánh phong cách sư phạm tiếp cận (Singapore chú trọng Bar Model, dữ liệu đa bước; Trung Quốc chú trọng suy luận chia có dư, hình học tổ hợp). Dự án hoàn toàn độc lập, không đại diện và không có chứng nhận chính thức từ Bộ Giáo dục Singapore hay bất kỳ hội đồng khảo thí nào.
> 4. **Hạng mục chờ kiểm chứng thực tế (Pending Validation)**: Cần phụ huynh/giáo viên rà soát định kỳ nội dung câu hỏi và phân phối tuần với tình hình học tập tại lớp thực tế của học sinh.

---

## 3. Ma Trận Truy Xuất Nguồn Theo Nhóm Tuần (Curriculum Traceability Matrix)

Bản đồ phân loại rõ từng nguồn tham chiếu và trạng thái xác minh cho 6 nhóm tuần (Giai đoạn P1 → P6) ở cả hai môn **Toán** và **Tiếng Việt**:
- **[VERIFIED SOURCE]**: Nguồn chuẩn đã xác thực tài liệu công khai chính thức.
- **[PROJECT DECISION]**: Thiết kế sư phạm và giải pháp kỹ thuật do dự án tự quyết định và triển khai độc lập.
- **[PENDING VALIDATION]**: Hạng mục cần đối soát thêm với phân phối chương trình thực tế tại trường.

### Nhóm 1: Tuần 1–6 (Giai đoạn P1: Xây nền thông minh & Cầu nối Lớp 3 → Lớp 4)

| Môn | Trụ cột 1: Mỏ neo CTGDPT 2018 / Kết nối tri thức | Trụ cột 2 & 3: Phương pháp Singapore MOE (Method-Only) | Trụ cột 4: Cảm hứng Kỹ thuật Open-Source | Lựa chọn áp dụng cụ thể trong `data/curriculum.js` |
| :--- | :--- | :--- | :--- | :--- |
| **Toán** | **[PENDING VALIDATION]**<br>Chẩn đoán số và phép tính: Ôn số đến 100.000, mở rộng hàng triệu; củng cố 4 phép tính, biểu thức có ngoặc; giải toán 1-2 bước. *(Cần GV/PH xác nhận thứ tự bài học với lớp)* | **[VERIFIED SOURCE]**<br>Phương pháp CPA & Tia số: Biểu diễn giá trị hàng số bằng tia số và khối chục/trăm. Heuristic: Sơ đồ đoạn thẳng (Part-Whole), bù trừ làm tròn, kiểm tra ngược. | **[PROJECT DECISION]**<br>kilowatto/math-challenge: Gợi ý cấu trúc bậc thang 5 nấc (`challengeLadder`). Tự viết mã lưu chẩn đoán lỗi cục bộ trên client. | - `meta.bridge.math`: 5 mạch cầu nối chẩn đoán.<br>- `mentalMathFoundation.weeks[0..5]`: Luyện tính nhanh chiến lược 8-10 phút.<br>- `bridgeDailyLessons.math[0..5]`: Bài học Thứ 2→7 (Thứ 6 sửa lỗi, Thứ 7 mini-test chẩn đoán). |
| **Tiếng Việt** | **[PENDING VALIDATION]**<br>Củng cố câu & đoạn: Câu đủ CN-VN, cấu trúc đoạn 5-7 câu; đọc hiểu tìm chi tiết trực tiếp trong văn bản; kể lại việc đáng nhớ. *(Cần GV/PH xác nhận thứ tự bài học với lớp)* | **[VERIFIED SOURCE]**<br>Oral Rehearsal: Nói thành tiếng ý chính trước khi viết; đọc to câu văn phát hiện câu cụt.<br>Drafting Cycle: Nháp → tự rà soát theo chứng cứ văn bản. | **[PROJECT DECISION]**<br>Literacy For Kids: Gợi ý chia nhỏ phiên học đọc - lập ý - viết - sửa (nhịp 5-5-9-6 phút). Tự thiết kế rubric đánh giá. | - `phases[0].vietnamese`: 6 chủ đề tuần (Câu rõ ý, Đoạn 5-7 câu, Đọc tìm bằng chứng, Kể việc đáng nhớ, Dùng từ chính xác, Kiểm tra nền).<br>- `routines.vietnamese`: Quy trình 4 bước chuẩn hóa thời gian.<br>- Rubric đánh giá 0-3 điểm (`rubrics`). |

---

### Nhóm 2: Tuần 7–12 (Giai đoạn P2: Số, phân số và sức mạnh biểu diễn)

| Môn | Trụ cột 1: Mỏ neo CTGDPT 2018 / Kết nối tri thức | Trụ cột 2 & 3: Phương pháp Singapore MOE (Method-Only) | Trụ cột 4: Cảm hứng Kỹ thuật Open-Source | Lựa chọn áp dụng cụ thể trong `data/curriculum.js` |
| :--- | :--- | :--- | :--- | :--- |
| **Toán** | **[PENDING VALIDATION]**<br>Dãy số, chia hết, phân số: Khái niệm phân số, phân số bằng nhau, cộng trừ phân số cùng mẫu số; làm quen số thập phân qua đo lường; đọc bảng và biểu đồ cột. | **[VERIFIED SOURCE]**<br>Biểu diễn đa kênh: Phân số qua dải giấy gập và mảng ô vuông. Heuristic: Lập bảng tìm quy luật (Tabulation), phân tích chia hết, ước lượng trước khi tính. | **[PROJECT DECISION]**<br>kilowatto/math-challenge & openSRS: Cảm hứng về hiển thị dạng thanh chia đều và nhịp nhắc lại ngắt quãng ở mini-test cuối tuần. | - `phases[1].math`: 6 chủ đề tuần (Dãy số, Bội ước và chia hết, Phân số qua hình ảnh, Cộng trừ phân số cùng mẫu, Số thập phân, Bảng và biểu đồ).<br>- `AUTHORED_MATH_KITS`: Bộ sinh bài tập tự biên soạn độc lập (ví dụ: gập thanh giấy 8 phần, giữ nguyên mẫu số). |
| **Tiếng Việt** | **[PENDING VALIDATION]**<br>Miêu tả và văn bản thông tin: Tả đồ vật (trình tự toàn thể - bộ phận - công dụng), tả người (ngoại hình gắn hành động); đọc văn bản thông tin; viết hướng dẫn các bước. | **[VERIFIED SOURCE]**<br>Receptive to Productive: Chuyển bảng thông tin "ý chính - từ khóa - bằng chứng" thành văn bản tóm tắt.<br>Multimodal drafting: Hướng dẫn có số thứ tự logic và lưu ý. | **[PROJECT DECISION]**<br>Literacy For Kids: Cảm hứng về cấu trúc khối thông tin tuần tự (Sequencing). Dự án tự biên soạn ngữ liệu. | - `phases[1].vietnamese`: Tả đồ vật, tả người, đọc văn bản thông tin, viết hướng dẫn, liên kết câu, biên tập đoạn.<br>- `AUTHORED_VIETNAMESE_KITS`: Ngữ liệu tự biên soạn về quan sát hộp bút cũ, người thân buổi sáng, tóm tắt bài cây xanh. |

---

### Nhóm 3: Tuần 13–18 (Giai đoạn P3: Đo lường, hình học và câu chuyện có chiều sâu)

| Môn | Trụ cột 1: Mỏ neo CTGDPT 2018 / Kết nối tri thức | Trụ cột 2 & 3: Phương pháp Singapore MOE (Method-Only) | Trụ cột 4: Cảm hứng Kỹ thuật Open-Source | Lựa chọn áp dụng cụ thể trong `data/curriculum.js` |
| :--- | :--- | :--- | :--- | :--- |
| **Toán** | **[PENDING VALIDATION]**<br>Hình học & Đo lường: Bảng đơn vị đo độ dài, khối lượng, thời gian; chu vi và diện tích hình chữ nhật/vuông; góc nhọn, tù, bẹt; hai đường thẳng vuông góc/song song. | **[VERIFIED SOURCE]**<br>Heuristic Cắt ghép & Biểu diễn: Chia hình phức tạp thành hình chữ nhật nhỏ; nhận diện cạnh chung; giải bài toán ngược (Working Backwards: biết diện tích tìm cạnh). | **[PROJECT DECISION]**<br>kilowatto/math-challenge: Gợi ý kỹ thuật phân rã hình học (Geometric decomposition). Bài tập do lab tự xây dựng. | - `phases[2].math`: Đơn vị và đổi đơn vị, Chu vi hình, Diện tích hình chữ nhật, Góc và đường thẳng, Thời gian và lịch, Sơ đồ hóa bài khó.<br>- `AUTHORED_MATH_KITS`: Bài tập cắt ghép hình chữ nhật, tính khoảng thời gian qua các mốc giờ. |
| **Tiếng Việt** | **[PENDING VALIDATION]**<br>Kể chuyện & Miêu tả nâng cao: Kể chuyện theo điểm nút (vấn đề - trở ngại - lựa chọn - kết quả); mở bài trực tiếp/gián tiếp; viết đối thoại; tả cảnh từ xa đến gần. | **[VERIFIED SOURCE]**<br>Oral Rehearsal: Đọc to lời thoại kiểm tra độ tự nhiên lứa tuổi.<br>Drafting Checklist: Lập dàn ý 3 phần (5 phút), viết (25 phút), sửa (10 phút). | **[PROJECT DECISION]**<br>Literacy For Kids: Gợi ý kỹ thuật dẫn dắt cốt truyện theo điểm nút (Story arc & turning point). Ngữ liệu tự biên soạn hoàn toàn. | - `phases[2].vietnamese`: Kể chuyện điểm nút, Mở bài tự nhiên, Đối thoại, Tả cảnh, Cảm nhận nhân vật, Bài văn 3 phần.<br>- `AUTHORED_VIETNAMESE_KITS`: Tình huống rơi thẻ thư viện, quan sát sân trường sau mưa, viết cảm nhận về bạn bè. |

---

### Nhóm 4: Tuần 19–24 (Giai đoạn P4: Tư duy chiến lược và văn bản mạch lạc)

| Môn | Trụ cột 1: Mỏ neo CTGDPT 2018 / Kết nối tri thức | Trụ cột 2 & 3: Phương pháp Singapore MOE (Method-Only) | Trụ cột 4: Cảm hứng Kỹ thuật Open-Source | Lựa chọn áp dụng cụ thể trong `data/curriculum.js` |
| :--- | :--- | :--- | :--- | :--- |
| **Toán** | **[PENDING VALIDATION]**<br>Mở rộng tư duy số học & tổ hợp sơ cấp: Bảng số liệu, làm việc ngược, tính chẵn lẻ, bài toán suy luận logic trong phạm vi số học lớp 4. | **[VERIFIED SOURCE]**<br>Heuristics nâng cao: Thử và kiểm tra có hệ thống (Systematic trial/Tabulation), làm việc ngược (Work backwards), nguyên lý bất biến, suy luận Dirichlet trực quan. | **[PROJECT DECISION]**<br>kilowatto/math-challenge & openSRS: Cảm hứng thiết kế mini-test Olympic 4 câu bao quát 4 mạch tư duy. | - `phases[3].math`: Bảng và thử giá trị, Làm việc ngược, Chẵn lẻ và bất biến, Dirichlet trực quan, Tổ hợp cơ bản, Olympic mini set 1.<br>- `AUTHORED_MATH_KITS`: Bài toán quả táo và giỏ đồ vật, đếm số cách phối đồ, tìm số bị che qua phép tính ngược. |
| **Tiếng Việt** | **[PENDING VALIDATION]**<br>Văn bản nghị luận & giải thích: Viết đoạn văn nêu ý kiến có lí lẽ và dẫn chứng; giải thích hiện tượng tự nhiên; so sánh hai sự vật theo tiêu chí; tóm tắt văn bản. | **[VERIFIED SOURCE]**<br>Reasoning & Evidence: Cấu trúc đoạn lập luận: Luận điểm → 2 Lí lẽ → Dẫn chứng thực tế → Khẳng định lại.<br>Oral Reading: Đọc to nghe nhịp điệu câu. | **[PROJECT DECISION]**<br>Literacy For Kids: Gợi ý cấu trúc viết thể hiện quan điểm phản biện (Opinion writing scaffold). Dự án tự viết đề tài. | - `phases[3].vietnamese`: Văn bản giải thích, So sánh có căn cứ, Viết ý kiến, Tóm tắt, Câu văn có nhịp, Bài viết có phản hồi.<br>- `AUTHORED_VIETNAMESE_KITS`: So sánh sách giấy và sách điện tử, giải thích việc uống nước, ý kiến góc đọc sách. |

---

### Nhóm 5: Tuần 25–30 (Giai đoạn P5: Rèn luyện nâng cao và kỹ năng viết hoàn thiện)

| Môn | Trụ cột 1: Mỏ neo CTGDPT 2018 / Kết nối tri thức | Trụ cột 2 & 3: Phương pháp Singapore MOE (Method-Only) | Trụ cột 4: Cảm hứng Kỹ thuật Open-Source | Lựa chọn áp dụng cụ thể trong `data/curriculum.js` |
| :--- | :--- | :--- | :--- | :--- |
| **Toán** | **[PENDING VALIDATION]**<br>Toán nâng cao bám sát mạch chuẩn: Phân loại trường hợp số học, hình học suy luận có đường phụ, tối ưu hóa chu vi/diện tích, giải toán bằng nhiều cách. | **[VERIFIED SOURCE]**<br>Metacognition & Multi-heuristic: So sánh tối thiểu 2 chiến lược giải khác nhau; chiến thuật làm bài 3 lượt (Chắc - Vừa - Khó); kiểm soát thời gian dừng 8 phút. | **[PROJECT DECISION]**<br>kilowatto/math-challenge: Gợi ý bảng phân loại lỗi (Lỗi kiến thức, Lỗi chiến lược, Lỗi cẩu thả). | - `phases[4].math`: Phân tích trường hợp, Suy luận từ hình, Tối ưu hóa đơn giản, Bài toán nhiều lời giải, Thi thử có chiến thuật, Olympic mini set 2.<br>- `AUTHORED_MATH_KITS`: Bộ đề 25 phút phân hóa, bài toán que tính tìm diện tích lớn nhất, đếm hình chữ nhật lưới 2x3. |
| **Tiếng Việt** | **[PENDING VALIDATION]**<br>Hoàn thiện phong cách ngôn ngữ: Mở rộng vốn từ theo chủ đề; tả người qua hành động và đối thoại; kể chuyện thay đổi góc nhìn; sửa câu mơ hồ; viết đoạn có luận điểm. | **[VERIFIED SOURCE]**<br>Perspective taking & Revision: Rèn tư duy đồng cảm qua đổi góc nhìn người kể.<br>Multi-pass Editing: Rà soát độc lập qua 4 lượt (Ý, Cấu trúc, Từ ngữ, Chính tả). | **[PROJECT DECISION]**<br>Literacy For Kids: Gợi ý bài tập quan sát hành động thay vì liệt kê tính từ tĩnh. | - `phases[4].vietnamese`: Vốn từ theo chủ đề, Tả người có hành động, Kể chuyện đổi góc nhìn, Sửa câu mơ hồ, Viết đoạn có luận điểm, Bài tuyển chọn.<br>- `AUTHORED_VIETNAMESE_KITS`: Kể chuyện chiếc ô cho mượn từ 2 góc nhìn, sửa đại từ mơ hồ, lưu bài tuyển chọn vào portfolio. |

---

### Nhóm 6: Tuần 31–36 (Giai đoạn P6: Tổng hợp và dự án cá nhân)

| Môn | Trụ cột 1: Mỏ neo CTGDPT 2018 / Kết nối tri thức | Trụ cột 2 & 3: Phương pháp Singapore MOE (Method-Only) | Trụ cột 4: Cảm hứng Kỹ thuật Open-Source | Lựa chọn áp dụng cụ thể trong `data/curriculum.js` |
| :--- | :--- | :--- | :--- | :--- |
| **Toán** | **[PENDING VALIDATION]**<br>Tổng kết cuối năm & Vận dụng thực tiễn: Ôn tập toàn diện số học, hình học, đo lường, xác suất thống kê; dự án đo lường và khảo sát số liệu đời sống. | **[VERIFIED SOURCE / PROJECT DECISION]**<br>Mô phỏng phong cách quốc tế (biên soạn độc lập):<br>• Đề mô phỏng Singapore: Bar model nhiều bước, đọc biểu đồ thực tế.<br>• Đề mô phỏng Trung Quốc: Chia có dư, logic hình học.<br>Metacognition: Thuyết trình giải thích bằng lời 60-90 giây. | **[PROJECT DECISION]**<br>megafarad/barabara & math-challenge: Cảm hứng lưu trữ portfolio giải toán độc lập trên client và sổ tay chiến lược cá nhân. | - `phases[5].math`: Chẩn đoán lỗ hổng, Sổ tay chiến lược, Đề mô phỏng Singapore, Đề mô phỏng Trung Quốc, Dự án Toán quanh nhà, Ngày hội Bách giải thích.<br>- `AUTHORED_MATH_KITS`: Đo đạc bàn học thật, bài toán dung tích bể nước, bài toán chia 5 dư 2 chia 3 dư 1, thu âm cách giải 60-90s. |
| **Tiếng Việt** | **[PENDING VALIDATION]**<br>Đọc sâu, liên môn & Tuyển tập cá nhân: Đọc sâu tác phẩm văn học; quan sát thực tế; viết theo đề mở; viết văn bản giải thích khoa học (liên môn); hoàn thiện Portfolio bài viết lớp 4. | **[VERIFIED SOURCE]**<br>Receptive-Productive Synthesis: Đọc tư liệu khoa học ngắn rồi chuyển dịch thành bài giải thích dễ hiểu.<br>Authentic Audience: Thuyết trình bài viết trước người thân trong ngày hội kể chuyện. | **[PROJECT DECISION]**<br>Literacy For Kids: Gợi ý đánh giá quá trình tiến bộ của cá nhân dựa trên bằng chứng Portfolio sản phẩm. | - `phases[5].vietnamese`: Đọc sâu một truyện, Viết từ quan sát thật, Bài văn đề mở, Đọc-viết liên môn, Portfolio và tự nhận xét, Ngày hội kể chuyện.<br>- `AUTHORED_VIETNAMESE_KITS`: Ghi 10 chi tiết quan sát ban công/sân trường, sơ đồ chu trình nước, tuyển chọn 3 bài viết của năm học. |

---

## 4. Bảng Kiểm Định Tính Hợp Chuẩn & Việc Cần Làm (Validation Checklist & Pending Work)

Bảng kiểm này phân định rõ các tiêu chí đã được xác thực và các nội dung còn tồn đọng cần xác nhận trong thực tế:

- [x] **1. Ranh giới Phương pháp Sư phạm (Method-Only Boundary - VERIFIED SOURCE)**: Các tài liệu Singapore MOE (Math & English) chỉ được kế thừa ở tầng phương pháp (CPA, Bar Model, Heuristics, Oral Rehearsal, Drafting Cycle), không sao chép nguyên trạng phân phối chương trình của Singapore. Các URL tham khảo đã trỏ chính xác về tài liệu chính thức của Singapore MOE.
- [x] **2. Ranh giới Khung Chuẩn Đầu Ra (Curricular Anchor Integrity - VERIFIED SOURCE)**: Sử dụng văn bản công khai chính thức Chương trình tổng thể CTGDPT 2018 của Bộ GD&ĐT để định hướng năng lực và chuẩn đầu ra.
- [x] **3. Ranh giới Kỹ thuật Mã Nguồn Mở (Engineering Inspiration - PROJECT DECISION)**: Các dự án mã nguồn mở (`math-challenge`, `literacy-for-kids`, `barabara`, `openSRS`) chỉ cung cấp cảm hứng kiến trúc và trải nghiệm; toàn bộ mã nguồn bài tập, rubric và logic trong lab là triển khai độc lập, không sao chép trực tiếp.
- [x] **4. Ranh giới Bản Quyền & Tính Độc Lập Bài Tập (Authored Tasks Scope)**: Bài tập do lab tự biên soạn/chọn lọc; các đề "mô phỏng" không sao chép đề thi thật trong quá khứ (no past papers) và không nhận bất kỳ sự ủy quyền chính thức nào.
- [ ] **5. Đối Soát Phân Phối Chương Trình Thực Tế (PENDING VALIDATION - Việc cần làm)**: Bộ sách Kết nối tri thức là mỏ neo do gia đình lựa chọn; phụ huynh và giáo viên cần đối soát phân phối tuần 1–36 hiện tại với kế hoạch dạy học và thời khóa biểu thực tế của trường lớp Bách theo học để tinh chỉnh các tuần học cho khớp thực tế.
- [x] **6. Bất Biến Mã Nguồn Ứng Dụng (Zero Code Drift)**: Quá trình chuẩn hóa tài liệu này tuyệt đối không chỉnh sửa `app.js`, CSS, tests, hay cấu trúc dữ liệu đang chạy của `data/curriculum.js`.

