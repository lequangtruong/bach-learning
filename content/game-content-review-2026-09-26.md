# Review nội dung trò chơi — 2026-09-26

## Phạm vi

Chỉ review nội dung học tập và tính đúng đắn sư phạm của game; không review UI. Mục tiêu là giúp Bách (chuẩn bị lớp 4) tiến bộ thực chất trong học tập. Không xem điểm game là thước đo IQ.

## Tóm tắt kiểm chứng

- Có 3 game đều tập trung vào Toán: Speed Math, Bar Model và Spot The Bug.
- Ngân hàng có quy mô tốt: 120 Bar Model (9 nhóm) và 120 Spot The Bug (12 nhóm); Speed Math sinh câu theo 4 mức.
- Test hiện có đã pass, nhưng test chủ yếu kiểm tra dữ liệu/cơ chế; không thay thế kiểm định ý nghĩa biểu diễn toán học hay chất lượng đo năng lực.

## Lỗi nội dung cần sửa trước

### P1 — Bar Model biểu diễn sai bài Hiệu–Tỉ

Xác minh Astra low: có **47** thử thách vừa dùng tỉ số phần vừa có hiệu. Ví dụ `challenge-31` ở `js/bar-model-studio.js:661`: cấu hình chấp nhận 2:1 và hiệu 18, nhưng phép dựng SVG cộng thêm đoạn hiệu vào sau thanh đã có 2 phần (`renderSvgMarkup`, dòng 2445 trở đi). Kết quả là mô hình không còn biểu diễn đúng tỉ lệ 2:1. Đoạn hiệu phải đánh dấu phần chênh lệch vốn có giữa các thanh, không được cộng như một phần mới.

### P1 — Speed Math tiết lộ đáp án trước lượt trả lời

`js/render-games.js:316` và 325 luôn hiển thị toàn bộ `strategy`. Nhiều strategy chứa cả đáp án, ví dụ `js/speed-math.js:25`. Vì vậy điểm có thể đo việc đọc gợi ý thay vì tính nhẩm. Cần: gợi ý không có đáp án, chỉ mở lời giải sau khi nộp, rồi một câu cùng kỹ năng làm độc lập.

### P1 — Spot The Bug gọi hệ quả của lỗi là đúng

Mỗi case chỉ gắn `isBug` cho lỗi gốc. Các bước sau có kết luận sai do lỗi gốc được gắn `false`; `selectStep()` tại `js/spot-the-bug.js:3445` phản hồi rằng mọi bước `false` đều “hoàn toàn chính xác”. Cần phân biệt: `lỗi gốc`, `hệ quả của lỗi trước`, và `bước đúng`; hỏi rõ “bước sai đầu tiên”.

### P1 — Bar Model chấp nhận đoạn hiệu thừa

Theo kiểm chứng Astra low, `checkSolution()` tại `js/bar-model-studio.js:2416` đặt `diffMatch = true` khi bài không có hiệu. Vì vậy mô hình tổng–tỉ có thể được chấp nhận dù người học bật thêm đoạn chênh lệch; Astra đã tái hiện với challenge-16 và nhãn `+999`. Phải yêu cầu không có đoạn hiệu với các bài không có hiệu. Tương tự, dòng 2417 không cấm nhãn tổng thừa khi đề không có tổng.

## Điểm mạnh và khoảng thiếu

- Mạnh: Speed Math rèn chiến lược nhẩm; Bar Model rèn biểu diễn; Spot The Bug rèn kiểm tra lỗi. Đây là ba vai trò bổ sung tốt trong Toán.
- Chưa đủ rộng: chưa có trò chơi cho đọc hiểu bằng chứng, diễn đạt/biên tập Tiếng Việt, tư duy không gian, dữ liệu–khoa học, hoặc lập luận mở/nhiều cách giải.
- Độ khó không cân bằng cho giai đoạn chuyển lớp 3→4: Bar Model mức 1–5 là 8/22/41/38/11; Spot The Bug là 9/19/29/37/26. Cần đánh giá đầu vào và mastery theo kỹ năng, thay vì chỉ lịch và streak.
- Việc hoàn thành hiện chưa chứng minh vận dụng độc lập: Bar Model chủ yếu chấm cấu hình; Spot The Bug chủ yếu chọn một bước. Mỗi hoạt động nên có chuỗi: làm → giải thích → sửa/kiểm tra → bài chuyển dạng.

## Hướng dạy hiệu quả

Đặt mục tiêu quan sát được: giải bài mới, giải thích chiến lược, nhớ sau một khoảng thời gian, tự phát hiện/sửa lỗi. Không đặt KPI “tăng IQ” từ game: bằng chứng về chuyển giao sang trí tuệ chung còn hạn chế. Dùng game trong bài học cụ thể, có hướng dẫn chiến lược, thực hành độc lập và tự đánh giá.

Nguồn tham chiếu:

- EEF, [Metacognition and Self-Regulated Learning](https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/metacognition).
- Singapore MOE, [Primary Mathematics Syllabus](https://www.moe.gov.sg/-/media/files/primary/2021-primary-mathematics-syllabus-p1-to-p6-updated-dec-2024.pdf).
- APA, [Children’s and adolescents’ learning with educational technology](https://www.apa.org/pubs/reports/children-adolescent-learning-educational-technology).

## Trạng thái Astra low nghiêm ngặt

Đã kiểm chứng độc lập tại commit `b10f93a`, sau `git pull`:

- Các lỗi biểu diễn, lộ đáp án, phản hồi sai và chấm mô hình thừa đều **confirmed**; mức ưu tiên phù hợp là P1.
- Có thích ứng hiện hữu theo streak và lịch. Nhận định đúng là chưa có thích ứng theo lỗi/kỹ năng mastery, không phải “không có thích ứng”.
- Thiếu đa dạng môn chỉ đúng trong phạm vi bộ ba game, không suy rộng sang curriculum toàn ứng dụng.
- Phân bố độ khó là dữ kiện, chưa thể kết luận không phù hợp với Bách khi chưa có dữ liệu chẩn đoán thực tế.

## Cập nhật sau pull — commit `80baff7`

Pull đã đưa về một đợt sửa lớn và bổ sung game mới. `npm test` pass **198/198**; riêng Astra low xác nhận 53 test mục tiêu pass.

- Đã sửa hoàn toàn **2/4** lỗi P1 cũ: Bar Model Hiệu–Tỉ không còn gắn đoạn hiệu vào cuối thanh tỉ lệ; Speed Math không còn lộ đáp án trực tiếp trong strategy và có phân biệt dùng gợi ý.
- Spot The Bug **mới sửa một phần**: đã phân biệt lỗi gốc/hệ quả, nhưng đang coi mọi bước sau lỗi gốc là “sai kéo theo”. Ví dụ ở bug-1, phép `3.200 : 8 = 400` là bước độc lập và đúng, không phải hệ quả sai. Cần gắn trạng thái từng bước theo nội dung thực tế, không theo vị trí sau lỗi.
- Bar Model vẫn chấp nhận/hiển thị **nhãn tổng thừa** khi bài không có tổng; cần bắt buộc nhãn tổng rỗng nếu `target.totalValue` không tồn tại.
- Lỗi mới P1: `LogicGridSession.checkSolution()` (`js/logic-grid.js:84–109`) chấp nhận cả 9 ô đều CHECK cho `lg-01` qua chuỗi toggle thực, dù vi phạm tính duy nhất. Cần từ chối lựa chọn thừa và kiểm tra chính xác nghiệm.
- Độ rộng game đã cải thiện mạnh: ngoài bộ Toán gốc còn có cân thăng bằng, Make 24, không gian 3D, logic grid, Rush Hour, trí nhớ, Tangram. Đây mở rộng sang suy luận, không gian và trí nhớ; vẫn chưa thay thế game đọc hiểu/diễn đạt Tiếng Việt.

## Rà soát tiếp sau commit `87a88c4`

Các lỗi P1 đã theo dõi (Spot The Bug bước đúng độc lập, Bar Model nhãn thừa, Logic Grid all-check) đã được sửa và toàn bộ 200 test pass.

Tuy nhiên còn hai việc nội dung quan trọng:

1. **P1 — Không được suy ra “IQ” từ điểm game.** `js/adaptive-engine.js:202–215` tự tạo chỉ số 100–145 từ số bài/điểm game, trong khi `js/render-games.js:212–224` trình bày nó như “5 Trụ Cột Trí Tuệ” và “Chỉ số”. Đây không phải thước đo CHC/IQ đã chuẩn hóa, có thể làm phụ huynh hoặc Bách hiểu sai năng lực. Đổi thành bảng tiến bộ theo kỹ năng game, không dùng IQ/CHC như kết quả đánh giá.

2. **P2 — Dữ liệu Spot The Bug chưa được phân loại đầy đủ.** Sau sửa, `bug-1` có cờ `isValid`/`isConsequential` đúng. Nhưng kiểm tra toàn bộ ngân hàng cho thấy còn 120 bước sau lỗi gốc không có cờ phân loại, ví dụ `bug-2` bước 2–3 tại `js/spot-the-bug-cases.js:104–113`. Fallback trong `js/spot-the-bug.js:38–39` sẽ xem các bước sau lỗi gốc là hệ quả. Nhiều trường hợp có thể đúng, nhưng cần gắn nhãn từng bước hoặc có audit nội dung kiểm chứng, để không tái diễn lỗi phân loại sai.

Khoảng thiếu chiến lược vẫn còn: trò chơi chưa có game chuyên biệt cho đọc hiểu bằng chứng và diễn đạt/biên tập Tiếng Việt; đây là khoảng thiếu về độ rộng, không phải lỗi code.
