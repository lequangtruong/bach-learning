// Lesson plan chuẩn dùng chung cho 36 tuần × 2 môn.
// Nội dung lấy trực tiếp từ chủ đề/trọng tâm tuần và được tách thành
// tám hành động rõ ràng để phụ huynh và Bách học theo từng bước.
const LESSON_FIELDS = [
  ["objective", "Mục tiêu"],
  ["keyKnowledge", "Kiến thức cần nhớ"],
  ["sampleExample", "Ví dụ mẫu"],
  ["practiceBasic", "Bài cơ bản"],
  ["practiceApplied", "Bài vận dụng"],
  ["challengeOlympic", "Thử thách / suy luận"],
  ["selfCheck", "Tự kiểm tra và sửa lỗi"],
  ["completionCriteria", "Tiêu chí hoàn thành"]
];

function mathLessonVariant(title, phaseId) {
  const singaporeLens = phaseId === "P1"
    ? "Góc nhìn Singapore: dùng vật thật, sơ đồ phần–toàn thể hoặc bảng trước khi chuyển sang ký hiệu."
    : phaseId === "P2" || phaseId === "P3"
      ? "Góc nhìn Singapore: thử CPA, sơ đồ thanh, làm ngược hoặc kiểm tra bằng một biểu diễn khác."
      : "Góc nhìn Singapore: chọn heuristic phù hợp như lập bảng, thử–kiểm tra, chia trường hợp hoặc tìm quy luật; nói rõ vì sao chọn nó.";
  const gentleChallenge = phaseId === "P1"
    ? `Thử thách nhẹ: đổi một dữ kiện hoặc tự đặt một câu hỏi mới từ đề; chỉ cần giải thích lựa chọn, chưa cần cách giải Olympic. ${singaporeLens}`
    : phaseId === "P2" || phaseId === "P3"
      ? `Thử thách mở rộng: tìm một trường hợp đặc biệt, vẽ thêm một biểu diễn hoặc kiểm tra kết quả bằng cách thứ hai. ${singaporeLens}`
      : `Thử thách Olympic: chia trường hợp có tổ chức, tìm quy luật hoặc so sánh hai chiến lược; ghi rõ vì sao không bỏ sót trường hợp. ${singaporeLens}`;
  if (title.includes("Đọc đề")) return {
    sampleExample: "Ví dụ mẫu: gạch dữ kiện, khoanh điều phải tìm, viết câu hỏi bằng lời của mình rồi chọn sơ đồ đoạn thẳng.",
    practiceBasic: "Bài cơ bản: với 3 đề ngắn, chỉ tóm tắt và chọn phép tính, chưa cần tính ngay.",
    practiceApplied: "Bài vận dụng: giải một đề hai bước; sau mỗi phép tính ghi câu trả lời có đơn vị.",
    challengeOlympic: gentleChallenge
  };
  if (/(Chu vi|Diện tích|Góc|hình|Suy luận từ hình)/i.test(title)) return {
    sampleExample: "Ví dụ mẫu: vẽ hình có đủ ký hiệu, đo hoặc đếm phần đã biết, rồi nói quan hệ giữa các cạnh/góc trước khi dùng công thức.",
    practiceBasic: "Bài cơ bản: nhận dạng 3 hình và tính đại lượng trực tiếp từ dữ kiện đã cho.",
    practiceApplied: "Bài vận dụng: che một dữ kiện và tìm ngược cạnh, góc hoặc diện tích; kiểm tra bằng hình vẽ.",
    challengeOlympic: gentleChallenge
  };
  if (/(Bảng|biểu đồ|Đề mô phỏng)/i.test(title)) return {
    sampleExample: "Ví dụ mẫu: đọc tên, đơn vị và chú giải của bảng/biểu đồ trước; sau đó trả lời một câu hỏi chỉ dùng một và một câu dùng hai dữ kiện.",
    practiceBasic: "Bài cơ bản: đọc 3 giá trị và viết 2 câu hỏi có thể trả lời từ dữ liệu.",
    practiceApplied: "Bài vận dụng: so sánh hai nhóm dữ liệu, nêu một nhận xét và chỉ ra bằng chứng.",
    challengeOlympic: gentleChallenge
  };
  if (/(Bội|Dãy số|Phân số|Số tự nhiên|Số thập phân|Chẵn lẻ)/i.test(title)) return {
    sampleExample: "Ví dụ mẫu: viết vài trường hợp nhỏ vào bảng, đánh dấu điều luôn đúng và nói quy tắc bằng một câu.",
    practiceBasic: "Bài cơ bản: làm 3 câu tăng dần, dùng hình hoặc tia số trước khi chuyển sang ký hiệu.",
    practiceApplied: "Bài vận dụng: thay một điều kiện của bài mẫu, dự đoán kết quả rồi kiểm tra bằng bảng nhỏ.",
    challengeOlympic: gentleChallenge
  };
  if (/(Tổ hợp|Dirichlet|trường hợp|Tối ưu|nhiều lời giải|làm việc ngược|thử giá trị)/i.test(title)) return {
    sampleExample: title.includes("Dirichlet")
      ? "Ví dụ mẫu: dùng 5 que tính và 4 chiếc cốc, xếp thử rồi nói điều chắc chắn xảy ra bằng lời của mình; chưa dùng ký hiệu khó."
      : "Ví dụ mẫu: làm một trường hợp rất nhỏ bằng vật thật/bảng, liệt kê có thứ tự rồi rút ra chiến lược.",
    practiceBasic: title.includes("Dirichlet")
      ? "Bài cơ bản: xếp 4–6 đồ vật vào 2–3 nhóm, vẽ lại một cách xếp và chỉ ra nhóm có nhiều đồ vật hơn."
      : "Bài cơ bản: giải phiên bản có ít đồ vật hoặc ít điều kiện hơn và đánh dấu từng trường hợp đã xét.",
    practiceApplied: title.includes("Dirichlet")
      ? "Bài vận dụng: đổi số đồ vật hoặc số nhóm, dự đoán trước rồi kiểm chứng bằng bảng; nếu khó có thể dừng ở trường hợp nhỏ."
      : "Bài vận dụng: giải phiên bản lớp 4 có thêm một điều kiện; trình bày bằng bảng hoặc sơ đồ.",
    challengeOlympic: gentleChallenge
  };
  return {
    sampleExample: `Ví dụ mẫu: làm một bài ngắn về “${title}”, nói rõ dữ kiện nào được dùng ở từng bước rồi kiểm tra kết quả.`,
    practiceBasic: "Bài cơ bản: làm 3 câu từ dễ đến vừa, chỉ đổi một dữ kiện mỗi lần.",
    practiceApplied: "Bài vận dụng: đưa kiến thức vào một tình huống đời sống, chọn cách biểu diễn phù hợp và viết kết luận.",
    challengeOlympic: gentleChallenge
  };
}

function vietnameseLessonVariant(title) {
  if (/(Đọc|Tóm tắt|văn bản|Cảm nhận)/i.test(title)) return {
    sampleExample: "Ví dụ mẫu: đọc một văn bản ngắn, đánh dấu ý chính, chi tiết làm bằng chứng và từ nối giữa các ý.",
    practiceBasic: "Bài cơ bản: trả lời 3 câu hỏi bằng câu trọn ý và chỉ ra dòng/chi tiết làm căn cứ.",
    practiceApplied: "Bài vận dụng: tóm tắt hoặc nêu cảm nhận bằng lời của Bách, giữ lại các chi tiết không thể bỏ.",
    challengeOlympic: "Thử thách diễn đạt: đổi một câu trả lời chung chung thành câu có bằng chứng cụ thể, không chép nguyên văn.",
    completionCriteria: "Hoàn thành khi Bách nói được ý chính, chọn đúng ít nhất hai chi tiết làm căn cứ và viết câu trả lời mạch lạc."
  };
  if (/(Tả|quan sát)/i.test(title)) return {
    sampleExample: "Ví dụ mẫu: quan sát một đồ vật/người/cảnh thật, ghi nhanh chi tiết nhìn–nghe–chạm rồi chọn chi tiết có ích nhất.",
    practiceBasic: "Bài cơ bản: viết 5–7 câu theo trật tự đã chọn, tránh liệt kê quá nhiều đặc điểm.",
    practiceApplied: "Bài vận dụng: thêm hành động, công dụng hoặc cảm xúc để người đọc hình dung rõ đối tượng.",
    challengeOlympic: "Thử thách diễn đạt: bỏ hai tính từ chung chung và thay bằng chi tiết quan sát được; giữ giọng kể của Bách.",
    completionCriteria: "Hoàn thành khi bài có trình tự quan sát, ít nhất ba chi tiết cụ thể và một câu thể hiện cảm nhận riêng."
  };
  if (/(Kể|chuyện|Đối thoại)/i.test(title)) return {
    sampleExample: "Ví dụ mẫu: lập ba mốc mở đầu–sự việc chính–kết thúc; mỗi lời nói phải gắn với người nói và hành động.",
    practiceBasic: "Bài cơ bản: kể lại một việc bằng 5–7 câu theo đúng trình tự thời gian.",
    practiceApplied: "Bài vận dụng: đổi góc nhìn hoặc thêm một lựa chọn của nhân vật nhưng vẫn giữ nguyên nhân–kết quả.",
    challengeOlympic: "Thử thách diễn đạt: cắt một sự việc không làm câu chuyện tiến lên và thay bằng một chi tiết có tác dụng.",
    completionCriteria: "Hoàn thành khi câu chuyện có vấn đề, diễn biến, kết quả rõ; lời kể và đối thoại phù hợp lứa tuổi."
  };
  if (/(từ|vốn từ|Câu|Liên kết|Sửa|Biên tập|Chính tả)/i.test(title)) return {
    sampleExample: `Ví dụ mẫu cho “${title}”: so sánh một câu mơ hồ với câu đã sửa; chỉ ra từ/cấu trúc nào làm ý rõ hơn.`,
    practiceBasic: `Bài cơ bản: sửa 3 câu hoặc dùng 3 từ mới trong những câu do Bách tự đặt, đúng mục tiêu “${title}”.`,
    practiceApplied: "Bài vận dụng: biên tập một đoạn ngắn, giữ nguyên ý của mình nhưng làm câu chính xác và liên kết hơn.",
    challengeOlympic: "Thử thách diễn đạt: tìm hai cách viết cùng một ý, chọn cách tự nhiên hơn và giải thích lý do.",
    completionCriteria: "Hoàn thành khi Bách dùng từ đúng nghĩa, câu đủ ý, sửa được lỗi chính và nói được vì sao mình sửa."
  };
  return {
    sampleExample: `Ví dụ mẫu: đọc một đoạn ngắn về “${title}”, cùng lập dàn ý và nhận diện câu giúp đoạn văn tiến về ý chính.`,
    practiceBasic: "Bài cơ bản: lập dàn ý 3–5 ý rồi viết đoạn 5–7 câu, mỗi câu phục vụ một ý.",
    practiceApplied: "Bài vận dụng: viết bản thứ hai sau khi thêm chi tiết thật và một câu chuyển ý.",
    challengeOlympic: "Thử thách diễn đạt: chọn một câu quan trọng, viết hai phiên bản rồi giữ phiên bản rõ và tự nhiên hơn.",
    completionCriteria: "Hoàn thành khi bài có mở ý, phát triển và kết; Bách chỉ ra được một câu hay và một câu đã sửa."
  };
}

function createLessonPlan(item, subject, weekNumber, phase) {
  const title = item[0];
  const focus = item[1];
  const bridgePrompt = phase.id === "P1"
    ? "Nếu còn quên nền lớp 3, quay lại ví dụ nhỏ hơn trước khi tăng độ khó."
    : "Luôn nói lại cách nghĩ bằng lời của mình trước khi xem gợi ý.";
  const variant = subject === "math"
    ? mathLessonVariant(title, phase.id)
    : vietnameseLessonVariant(title);

  if (subject === "math") {
    const mentalMathNote = phase.id === "P1"
      ? " Mỗi buổi dành 8–10 phút cho Nền tính toán nhanh: chính xác trước, giải thích chiến lược rồi mới tăng tốc; không dùng máy tính."
      : "";
    return {
      objective: `Sau tuần ${weekNumber}, Bách làm được dạng “${title}”, trình bày đủ bước và giải thích được vì sao chọn cách làm.`,
      keyKnowledge: `${focus} ${bridgePrompt}${mentalMathNote}`,
      sampleExample: variant.sampleExample,
      practiceBasic: variant.practiceBasic,
      practiceApplied: variant.practiceApplied,
      challengeOlympic: variant.challengeOlympic,
      selfCheck: "Tự kiểm tra: ước lượng trước, đối chiếu đơn vị/dữ kiện, làm ngược hoặc thay lại kết quả; sửa tối đa 3 lỗi quan trọng.",
      completionCriteria: "Hoàn thành khi Bách tự tóm tắt đề, làm đúng phần cơ bản, giải thích được một bước cốt lõi và biết cách kiểm tra kết quả."
    };
  }

  return {
    objective: `Sau tuần ${weekNumber}, Bách viết được một đoạn/bài về “${title}” rõ ý, có trình tự và vẫn giữ giọng kể tự nhiên đúng tuổi.`,
    keyKnowledge: `${focus} ${bridgePrompt}`,
    sampleExample: variant.sampleExample,
    practiceBasic: variant.practiceBasic,
    practiceApplied: variant.practiceApplied,
    challengeOlympic: `${variant.challengeOlympic} Góc nhìn văn học thế giới: đọc một đoạn hợp pháp, chọn một kỹ thuật kể/miêu tả đáng học rồi thử viết phiên bản của chính Bách, không sao chép câu chữ.`,
    selfCheck: "Tự kiểm tra: đọc thành tiếng, rà ý–câu–từ–chính tả, gạch câu lặp hoặc mơ hồ; chọn tối đa 3 chỗ để viết lại.",
    completionCriteria: variant.completionCriteria
  };
}

// Nội dung tuần 7–36 được biên soạn theo từng chủ đề, thay cho các câu mẫu
// chung. Mỗi kit có một tình huống neo, bài luyện, vận dụng và thử thách đủ
// dữ kiện để Bách có thể học ngay trên màn hình mà không phải đoán “đề nào?”.
const AUTHORED_MATH_KITS = {
  "Dãy số và quy luật": ["2, 6, 12, 20, 30: hiệu lần lượt là 4, 6, 8, 10; số tiếp theo là 42.", "Điền ba số tiếp theo: 5, 9, 15, 23, 33, …; viết các hiệu trước khi kết luận.", "Một rạp xếp hàng ghế: hàng 1 có 8 ghế, hàng 2 có 11 ghế, hàng 3 có 14 ghế. Hàng 10 có bao nhiêu ghế?", "Tìm hai quy luật khác nhau cùng cho ba số đầu 3, 6, 9; giải thích vì sao cần nhiều dữ kiện hơn.", "Bạn An viết 1, 4, 9, 16 rồi nói ‘mỗi lần cộng 3’. Chỉ ra dòng đầu tiên không đúng.", "Mini-test: một dãy cộng đều, một dãy hiệu tăng đều và một bài tự tạo quy luật."] ,
  "Bội, ước và chia hết": ["24 có các ước 1, 2, 3, 4, 6, 8, 12, 24; các cặp ước nhân với nhau bằng 24.", "Liệt kê các ước của 18 và 30 theo cặp; khoanh ước chung.", "36 chiếc huy hiệu được chia đều vào túi 4, 6 hoặc 9 chiếc. Mỗi cách có bao nhiêu túi?", "Tìm số nhỏ nhất lớn hơn 20 vừa chia hết cho 3 vừa chia hết cho 4; giải thích bằng bảng bội.", "Một bạn nói 15 là ước của 5. Sửa câu đó bằng phép nhân kiểm tra.", "Mini-test: ước, bội, chia hết và một câu tìm số thỏa hai điều kiện."] ,
  "Phân số qua hình ảnh": ["Một thanh giấy chia 8 phần bằng nhau, tô 3 phần: phần tô là 3/8; mẫu số luôn là số phần bằng nhau.", "Vẽ hai hình bằng nhau, tô 1/2 ở hình thứ nhất và 2/4 ở hình thứ hai; ghi điều giống nhau.", "Lan ăn 3 trong 8 miếng bánh bằng nhau, Minh ăn 1 trong 4 miếng của chiếc bánh bằng nhau. Ai ăn nhiều hơn? Dùng hình trước.", "Không vẽ hình, tìm ba phân số bằng 1/2 có mẫu số nhỏ hơn 13 và giải thích cách tạo.", "Bạn Bình tô 3 ô trong 8 ô rồi viết 8/3. Chỉ ra tử số và mẫu số bị đổi ở đâu.", "Mini-test: đọc phân số từ hình, so sánh bằng hình và tạo phân số bằng nhau."] ,
  "Cộng trừ phân số cùng mẫu": ["3/8 + 2/8 = 5/8 vì số phần bằng nhau vẫn là tám; chỉ gộp số phần được tô.", "Tính 1/7 + 3/7, 6/9 − 2/9 và giải thích vì sao mẫu số không cộng.", "Một cuộn ruy băng dài 9 phần bằng nhau. Dùng 2/9 buộc quà và 4/9 trang trí. Còn lại bao nhiêu phần?", "Tìm một phép cộng hai phân số cùng mẫu có tổng bằng 1 nhưng cả hai phân số đều khác 1/2.", "Bạn viết 2/5 + 1/5 = 3/10. Hãy sửa bằng hình năm phần.", "Mini-test: ba phép tính cùng mẫu, một bài lời văn và một câu tự tạo."] ,
  "Số thập phân làm quen": ["25.000 đồng = 25 nghìn đồng; 2 m 50 cm có thể đọc là 2,5 m khi đơn vị là mét.", "Đổi 1,2 m thành m và cm; đọc đúng 3,05 kg và 0,75 lít.", "Một chai nước 0,5 lít, một bình có 1,5 lít. Rót đầy được mấy chai? Minh họa bằng vạch chia lít.", "Sắp xếp 0,8; 0,75; 0,805 từ bé đến lớn và giải thích bằng cùng số chữ số sau dấu phẩy.", "Bạn nói 0,4 m = 4 cm. Hãy kiểm tra bằng thước có 100 cm.", "Mini-test: tiền, độ dài, thứ tự số thập phân và một đổi đơn vị."] ,
  "Bảng và biểu đồ": ["Bảng sách mượn: Toán 18, Khoa học 24, Truyện 31. Truyện nhiều hơn Toán 13 quyển.", "Trả lời: môn nào nhiều nhất, tổng ba loại là bao nhiêu, chênh lệch hai loại bất kỳ.", "Khảo sát 12 bạn thích cam, 9 bạn thích táo, 15 bạn thích chuối. Vẽ bảng rồi viết hai nhận xét có số liệu.", "Nếu thêm 4 bạn thích táo, thứ hạng có đổi không? Dự đoán rồi tính.", "Bạn kết luận ‘truyện gấp đôi toán’ từ 31 và 18. Chỉ ra vì sao không đúng.", "Mini-test: đọc bảng, dựng biểu đồ cột đơn giản và đặt một câu hỏi hai bước."] ,
  "Đơn vị và đổi đơn vị": ["3 m 45 cm = 345 cm vì 3 m = 300 cm; chỉ cộng khi đã cùng đơn vị.", "Đổi 4 kg 250 g, 2 giờ 35 phút và 5 m 8 cm sang đơn vị nhỏ hơn.", "Một cuộn dây dài 8 m 40 cm, cắt 2 m 75 cm. Còn lại bao nhiêu xăng-ti-mét?", "Có 2 l 250 ml nước, chia đều vào 5 chai. Mỗi chai bao nhiêu ml?", "Bạn cộng 2 m 30 cm + 75 cm = 2 m 105 cm. Viết lại kết quả chuẩn hơn.", "Mini-test: đổi đơn vị, cộng trừ khác đơn vị và một bài chia."] ,
  "Chu vi hình": ["Hình chữ nhật dài 14 cm, rộng 9 cm: chu vi = (14 + 9) × 2 = 46 cm.", "Tính chu vi hình vuông cạnh 8 cm và hai hình chữ nhật 12×5, 15×4 cm.", "Một mảnh vườn chữ nhật chu vi 36 m, dài 11 m. Tìm chiều rộng rồi kiểm tra bằng chu vi.", "Ghép hai hình vuông cạnh 4 cm sát nhau. Chu vi hình mới là bao nhiêu? Vẽ để không đếm cạnh chung.", "Bạn tính chu vi 12×5 là 60 cm. Sửa bằng cách nêu các cạnh được cộng.", "Mini-test: chu vi trực tiếp, tìm cạnh thiếu, hình ghép."] ,
  "Diện tích hình chữ nhật": ["Hình chữ nhật 9 cm × 6 cm có 54 ô vuông đơn vị, nên diện tích là 54 cm².", "Tính diện tích các hình 7×8, 12×5 cm; ghi đúng cm².", "Một tấm bìa diện tích 72 cm², rộng 8 cm. Tìm chiều dài và kiểm tra bằng phép nhân.", "Tìm ba cặp số nguyên có diện tích 36 cm²; cặp nào có chu vi nhỏ nhất?", "Bạn viết diện tích 8×5 là 40 cm. Chỉ ra đơn vị còn thiếu và vì sao.", "Mini-test: diện tích, bài ngược, so sánh hai hình cùng diện tích."] ,
  "Góc và đường thẳng": ["Góc vuông bằng một góc của tờ giấy; hai đường cùng tạo bốn góc vuông là vuông góc.", "Dùng êke tìm 5 góc vuông trong phòng và vẽ một cặp đường song song, một cặp vuông góc.", "Vẽ hình chữ nhật ABCD, chỉ ra các cặp cạnh song song và các góc vuông.", "Một hình có bốn góc vuông nhưng các cạnh kề không bằng nhau: đó có thể là hình gì? Giải thích.", "Bạn gọi hai đường cắt nhau là song song. Vẽ phản ví dụ để sửa.", "Mini-test: nhận dạng góc, song song/vuông góc và vẽ theo yêu cầu."] ,
  "Thời gian và lịch": ["Phim bắt đầu 14:35, dài 1 giờ 45 phút, kết thúc lúc 16:20.", "Tính khoảng thời gian: 7:25–8:10; 9:50–11:05; 13:40–15:15.", "Bách đọc 18 trang mỗi ngày từ thứ Hai đến thứ Sáu, cuối tuần đọc thêm 25 trang. Cả tuần đọc bao nhiêu trang?", "Một tàu chạy mỗi 18 phút từ 7:00. Chuyến thứ 6 rời ga lúc mấy giờ?", "Bạn trừ 14:10 − 13:45 = 1:35. Chỉ lỗi khi mượn giờ.", "Mini-test: thời lượng, lịch tuần, quy luật thời điểm."] ,
  "Sơ đồ hóa bài khó": ["An có 36 nhãn vở, Bình có ít hơn An 8 nhãn; tổng hai bạn là 64. Vẽ sơ đồ đoạn thẳng để kiểm tra dữ kiện.", "Vẽ sơ đồ cho ba bài: hơn/kém, gấp/lần, tổng–hiệu; chưa cần giải ngay.", "Một bể có 120 lít nước, dùng 1/4 số nước rồi thêm 18 lít. Còn bao nhiêu lít? Chọn sơ đồ hoặc bảng.", "Tự tạo một bài có hai cách biểu diễn: sơ đồ thanh và phép tính. So sánh cách nào nhìn quan hệ rõ hơn.", "Một lời giải lấy 120 − 1/4 + 18. Giải thích vì sao cần biết 1/4 của số nào.", "Mini-test: chọn đúng mô hình cho ba đề và giải một đề hai bước."] ,
  "Bảng và thử giá trị": ["Tìm hai số có tổng 20, số lớn hơn số bé 4: thử cặp 8–12 rồi kiểm tra cả tổng lẫn hiệu.", "Lập bảng các cặp số có tổng 18; khoanh các cặp có hiệu 6.", "Ba hộp có tổng 30 viên bi. Hộp đỏ hơn hộp xanh 4 viên, hộp vàng có 10 viên. Tìm hai hộp còn lại.", "Tìm số hai chữ số có tổng chữ số 9 và lớn hơn 60; liệt kê có thứ tự, không đoán.", "Bạn thử 9 và 11 cho tổng 20 rồi kết luận ngay. Nêu điều kiện còn thiếu.", "Mini-test: bảng cặp số, số hai chữ số, bài lời văn."] ,
  "Làm việc ngược": ["Một số nhân 3 rồi cộng 7 được 31. Làm ngược: 31 − 7 = 24, 24 : 3 = 8.", "Tìm x: x + 28 = 65; 4×x = 52; x : 6 = 9.", "Sau khi mua vở hết 18.000 đồng, Nam còn 27.000 đồng. Lúc đầu Nam có bao nhiêu tiền? Viết phép ngược.", "Một số qua hai bước ‘gấp đôi rồi bớt 5’ được 37. Tìm số ban đầu và tự kiểm tra.", "Bạn làm ngược 37 : 2 + 5. Chỉ ra thứ tự đảo phép đúng.", "Mini-test: số bị che một bước, hai bước và bài tiền."] ,
  "Chẵn lẻ và bất biến": ["Tổng hai số chẵn là chẵn; chẵn + lẻ là lẻ. Ví dụ 14 + 9 = 23.", "Phân loại 12, 17, 25, 40 theo chẵn/lẻ rồi dự đoán tính chẵn lẻ của ba tổng.", "Có 15 bạn bắt tay từng người đúng một lần với một bạn khác. Có thể không ai lẻ lượt bắt tay không? Thử trường hợp nhỏ.", "Đổi chỗ hai chữ số của số có hai chữ số: tổng hai chữ số có đổi không? Kiểm tra 34 và 43.", "Bạn nói lẻ + lẻ = lẻ. Phản ví dụ nhỏ nhất là gì?", "Mini-test: chẵn lẻ của tổng/tích, một bất biến đơn giản."] ,
  "Nguyên lý Dirichlet trực quan": ["5 quả táo bỏ vào 4 giỏ thì chắc chắn có một giỏ có ít nhất 2 quả.", "Với 7 chiếc tất đỏ/xanh, có chắc lấy được 2 chiếc cùng màu không? Vẽ các trường hợp xấu nhất.", "Trong 13 tháng sinh của 14 bạn (tính theo 12 tháng), vì sao chắc có hai bạn cùng tháng sinh?", "Có 10 viên bi bỏ vào 3 hộp. Ít nhất một hộp có bao nhiêu viên? Dự đoán rồi chia đều nhất có thể.", "Bạn nói 4 đồ vật vào 4 hộp chắc có một hộp 2 đồ vật. Vẽ cách xếp phản ví dụ.", "Mini-test: ba tình huống giỏ–đồ vật bằng lời, không dùng thuật ngữ khó."] ,
  "Tổ hợp cơ bản": ["Áo đỏ/xanh và quần đen/xám tạo 4 bộ: liệt kê theo bảng 2×2.", "Liệt kê các số hai chữ số từ 1, 2, 3 không lặp chữ số; đếm rồi kiểm tra bằng nhánh cây.", "Quán có 3 loại bánh và 2 loại nước. Có bao nhiêu cách chọn một bánh, một nước? Viết toàn bộ.", "Từ A, B, C đi qua hai trạm X, Y bằng hai tuyến khác nhau. Vẽ sơ đồ nhánh và tính số lộ trình.", "Bạn đếm 3×2 nhưng một lựa chọn bị cấm. Cách sửa bảng đếm là gì?", "Mini-test: bảng, nhánh cây, một điều kiện loại trừ."] ,
  "Olympic mini set 1": ["Set gồm: số bị che 3×□+5=29; hình chữ nhật chu vi 30 cm; dãy 1,4,9,16; đếm bộ áo-quần 3×2.", "Làm bốn câu theo thứ tự câu chắc → câu cần sơ đồ → câu cần bảng → câu khó.", "Chọn một câu sai, viết lại lời giải chỉ giữ các bước cần thiết.", "Giải câu dãy số bằng cách hiệu và cách nhận dạng số chính phương đơn giản.", "Một lời giải chỉ ghi đáp số cho câu hình. Thêm dữ kiện và kết luận đủ để người khác chấm.", "Mini-test 25 phút: bốn câu mới cùng bốn kiểu tư duy."] ,
  "Phân tích trường hợp": ["Tìm các số hai chữ số có tổng chữ số 7: 16,25,34,43,52,61,70; lập theo hàng chục để không sót.", "Tìm các số hai chữ số có chữ số hàng chục lớn hơn hàng đơn vị và tổng bằng 9.", "Ba bạn chọn một trong hai trò chơi. Liệt kê các cách có đúng hai bạn chọn cờ vua.", "Tìm số lẻ nhỏ hơn 50 chia 3 dư 1; chia theo các bội của 3 trước.", "Bạn liệt kê 16,25,34 rồi dừng. Cách kiểm tra điểm bắt đầu–kết thúc là gì?", "Mini-test: số chữ số, lựa chọn, điều kiện dư."] ,
  "Suy luận từ hình": ["Một hình chữ nhật 10×6 cm bị cắt bỏ một hình vuông 3×3 cm ở góc: diện tích còn lại 51 cm².", "Vẽ ba hình ghép ô vuông, đếm diện tích bằng tách thành hình chữ nhật nhỏ.", "Một hình vuông cạnh 8 cm được kẻ hai đường chia thành bốn hình chữ nhật bằng nhau. Mỗi phần có chu vi bao nhiêu?", "Cắt một hình chữ nhật 12×8 thành hai phần có diện tích bằng nhau theo hai cách.", "Bạn cộng chu vi các phần sau khi ghép rồi gọi là chu vi hình lớn. Vẽ cạnh trong bị đếm thừa.", "Mini-test: hình ghép, phần bị cắt, đường phụ."] ,
  "Tối ưu hóa đơn giản": ["Dùng 24 que tạo hình chữ nhật có cạnh nguyên. Các cặp 1×11, 2×10, 3×9, 4×8, 5×7, 6×6; diện tích lớn nhất là 36.", "Lập bảng các hình chữ nhật chu vi 20 cm và tìm diện tích lớn nhất.", "Có 30.000 đồng mua bút 4.000 và vở 6.000 đồng. Tìm cách mua nhiều món nhất nhưng không vượt tiền.", "Tìm hai số có tổng 30 để tích lớn nhất bằng bảng nhỏ.", "Bạn chọn ngay 1 và 14 vì tổng 15. Thiếu tiêu chí nào để biết tốt nhất?", "Mini-test: tối đa/tối thiểu với bảng các trường hợp."] ,
  "Bài toán nhiều lời giải": ["48×25 = 48×100:4 = 1.200; cũng có thể 50×25 − 2×25 = 1.200.", "Tính 36×15 bằng hai cách; gạch bước nào cả hai cách đều dựa vào.", "Một lớp xếp 84 học sinh thành hàng đều. Tìm ba cách xếp hàng và giải thích cách nào dễ quan sát.", "Tổng 1+2+…+10 có thể ghép đầu–cuối. Tự vẽ cách ghép và kiểm tra.", "Một cách giải dài nhưng đúng có nên bỏ? Viết tiêu chí: đúng, rõ, kiểm tra được.", "Mini-test: một phép tính hai cách, một bài lời văn hai sơ đồ."] ,
  "Thi thử có chiến thuật": ["Đề 25 phút: 3.998+2.007; phân số 3/8+2/8; chu vi 14×9; một dãy số; một bài bảng trường hợp.", "Đánh dấu C (chắc), V (vừa), K (khó); làm C trước, sau 8 phút đổi câu nếu bế tắc.", "Chữa một câu sai bằng bảng lỗi: đọc đề, mô hình, tính, kiểm tra.", "Tự đặt thời gian 6 phút cho câu C và chỉ tính giờ khi đã tóm tắt xong.", "Bạn bỏ trống câu khó mà không ghi hướng. Viết một hình/sơ đồ hoặc điều đã biết để còn điểm lập luận.", "Mini-test mới 25 phút và so sánh chiến lược, không chỉ so điểm."] ,
  "Olympic mini set 2": ["Set: tìm x từ (x+5)×3=36; đếm hình chữ nhật trong lưới 2×3; số có tổng chữ số 10; bài chia có dư.", "Làm từng câu, ghi heuristic đã chọn: làm ngược, vẽ hình, lập bảng hay kiểm tra dư.", "Chữa sâu câu đếm hình: chia theo kích thước hình chữ nhật để không trùng.", "Viết lời giải cho một bạn lớp 4 khác hiểu, không dùng ‘rõ ràng là’ mà không giải thích.", "Một đáp án có đúng số nhưng sai lý do. Tìm chỗ thiếu lập luận.", "Mini-test: một bài mỗi mạch số–hình–đếm–logic."] ,
  "Chẩn đoán lỗ hổng": ["Làm 6 câu chẩn đoán: số lớn, cộng trừ, phân số, diện tích, dãy số, bài lời văn; ghi loại lỗi thay vì chỉ đáp án.", "Với mỗi câu sai, chọn một nhãn: chưa hiểu, sai chiến lược, tính ẩu, đọc thiếu điều kiện.", "Làm lại duy nhất hai câu sai cùng loại, đổi số để kiểm tra đã hiểu hay chỉ nhớ đáp án.", "Tạo sổ lỗi: dấu hiệu nhận biết, ví dụ sai, bước phòng tránh.", "Nếu làm nhanh nhưng thiếu lời giải, xếp đó vào lỗi nào? Viết cách nâng tiêu chuẩn.", "Mini-test cá nhân hóa dựa trên hai nhãn lỗi nhiều nhất."] ,
  "Sổ tay chiến lược": ["Trang mẫu: ‘bù trừ’ — dấu hiệu: số gần tròn; ví dụ 498+37; kiểm tra: cộng ngược.", "Viết ba trang: sơ đồ thanh, lập bảng, làm việc ngược; mỗi trang có dấu hiệu và một ví dụ tự tạo.", "Nhìn ba đề không giải, chọn chiến lược phù hợp và giải thích lựa chọn.", "Một đề có thể dùng hai chiến lược. Viết lúc nào nên đổi cách để không mắc kẹt.", "Sửa một trang sổ tay có ví dụ sai hoặc quá chung chung.", "Mini-test: nhận diện chiến lược trước, giải sau."] ,
  "Đề mô phỏng Singapore": ["Một bể có 3/5 dung tích là 120 lít. Hỏi đầy bể có bao nhiêu lít? Vẽ sơ đồ thanh 5 phần.", "Giải ba bài mô hình phần–toàn thể, so sánh, tỉ số đơn giản bằng sơ đồ trước phép tính.", "Cửa hàng giảm 20.000 đồng cho một cặp vở, mua 3 cặp và một bút 7.000 đồng. Lập bảng tiền rồi tính.", "Tạo bài ‘có dữ kiện thừa’ và chỉ ra dữ kiện nào không dùng.", "Một sơ đồ thanh chia phần không đều nhưng ghi 5 phần bằng nhau. Chỉ lỗi bằng hình.", "Mini-test 25 phút: hai bài bar model, một bài dữ liệu, một bài suy luận."] ,
  "Đề mô phỏng Trung Quốc": ["Tìm số tự nhiên nhỏ nhất có hai chữ số, chia 5 dư 2 và chia 3 dư 1. Lập bảng các số dư.", "Giải ba bài số học/hình học có yêu cầu nêu điều kiện và kiểm tra từng trường hợp.", "Một hình vuông cạnh 10 cm cắt thành bốn hình chữ nhật bằng nhau. Tìm chu vi mỗi hình trong hai kiểu cắt.", "Viết lời giải ngắn: giả thiết, các bước, kết luận; không bỏ trường hợp đã loại.", "Bạn thử số ngẫu nhiên rồi gặp đáp án. Chuyển thành bảng có điểm bắt đầu và quy tắc dừng.", "Mini-test: một bài số, một hình, một quy luật; ưu tiên lời giải đủ."] ,
  "Dự án Toán quanh nhà": ["Đo bàn học: dài, rộng, cao; chọn một đại lượng có ích để tính, ví dụ diện tích mặt bàn.", "Lập bảng số liệu thật gồm ít nhất 5 dòng: vật, số đo, đơn vị, cách đo.", "Dùng số liệu để giải một câu hỏi hai bước, ví dụ tính số giấy phủ mặt bàn và tiền mua.", "Vẽ biểu đồ cột nhỏ từ một dữ liệu thật: số trang đọc, số bước đi hoặc chi tiêu nhỏ.", "Kiểm tra dự án: đơn vị thống nhất, số liệu hợp lý, có ảnh/chú thích nếu cần.", "Trình bày dự án 3 phút: câu hỏi, số liệu, cách tính, điều Bách phát hiện."] ,
  "Ngày hội Bách giải thích": ["Chọn ba bài đại diện: một tính nhẩm, một sơ đồ, một suy luận; mỗi bài phải có bản nháp đã sửa.", "Thu âm/đọc lời giải 60–90 giây cho một bài: nêu dữ kiện, chiến lược, kiểm tra.", "Một người nghe hỏi ‘vì sao?’ ở bất kỳ bước nào; Bách bổ sung lời giải nếu bước đó chưa rõ.", "So sánh lời giải tuần đầu và tuần cuối: phần nào gọn hơn, phần nào chắc hơn.", "Chọn một lỗi cũ và minh họa cách Bách nay tự phát hiện lỗi đó.", "Ngày hội: trình bày ba bài, tự nhận xét một điểm mạnh và một mục tiêu kế tiếp."]
};

const AUTHORED_VIETNAMESE_KITS = {
  "Tả đồ vật": ["Đề: tả chiếc hộp bút đã dùng lâu. Ghi 6 chi tiết theo thứ tự ngoài → trong → kỉ niệm.", "Viết câu chủ đề và 4 câu phát triển, không dùng ‘rất đẹp’ hoặc ‘rất thích’.", "Chọn một vết xước, mùi giấy hoặc âm thanh khóa kéo để viết đoạn 8–10 câu.", "Viết hai câu tả cùng chiếc hộp: một câu liệt kê, một câu có hành động; chọn câu có hình hơn.", "Sửa đoạn có ba tính từ chung chung thành chi tiết quan sát được.", "Mini-test: quan sát một đồ vật mới, lập ý 4 dòng, viết và sửa 3 lỗi."] ,
  "Đoạn văn tả người": ["Đề: tả một người thân qua việc họ làm vào buổi sáng, không liệt kê ngoại hình.", "Ghi 2 nét nhìn thấy, 2 hành động và 1 câu nói đặc trưng của người đó.", "Viết đoạn 8–10 câu, dùng hành động để người đọc tự nhận ra tính cách.", "Đổi câu ‘bà rất yêu em’ thành một hành động có thể nhìn thấy.", "Cắt một câu khen chung chung, thay bằng chi tiết đúng trải nghiệm của Bách.", "Mini-test: tả một người ở trường bằng chi tiết và trình tự rõ."] ,
  "Đọc văn bản thông tin": ["Đoạn gốc: ‘Cây xanh giữ đất bằng rễ. Lá cây làm không khí mát hơn. Vì vậy sân trường có nhiều cây thường dễ chịu vào trưa nắng.’", "Trả lời: đoạn giải thích điều gì, hai tác dụng của cây là gì, câu nào là kết luận.", "Lập bảng ‘ý chính – chi tiết – từ khóa’ cho đoạn và nói lại bằng 3 câu.", "Viết một câu nguyên nhân–kết quả mới về nước sạch, không thêm thông tin chưa có.", "Bạn tóm tắt ‘cây rất tốt’. Chỉ ra vì sao thiếu ý và viết lại có căn cứ.", "Mini-test: đọc một thông tin ngắn, tìm ý chính và viết tóm tắt 35–45 chữ."] ,
  "Viết hướng dẫn": ["Đề: hướng dẫn chuẩn bị cặp sách cho sáng hôm sau. Người đọc phải làm được ngay mà không hỏi lại.", "Liệt kê vật cần có, sắp xếp 4 bước theo thứ tự và thêm một lưu ý an toàn/gọn gàng.", "Viết hướng dẫn 6–8 câu có số thứ tự, động từ rõ và một bước kiểm tra cuối.", "Đổi câu mơ hồ ‘làm cho xong’ thành hành động cụ thể có đối tượng.", "Sửa hướng dẫn thiếu bước giữa hoặc dùng hai việc trong một câu.", "Mini-test: viết hướng dẫn chăm một cây nhỏ hoặc gấp áo, sau đó nhờ người lớn đọc để tìm chỗ mơ hồ."] ,
  "Liên kết câu": ["Bản nháp: ‘Trời mưa. Em mang áo mưa. Em vẫn đến lớp.’ Hãy nối bằng quan hệ nguyên nhân và đối lập.", "Dùng vì, nên, nhưng, sau đó để nối 4 cặp câu; nói quan hệ từng cặp.", "Viết đoạn 6 câu về giờ ra chơi, mỗi câu sau phải nối được với câu trước.", "Thay một từ lặp bằng từ thay thế nhưng không làm người đọc nhầm đối tượng.", "Sửa đoạn có từ nối sai khiến nguyên nhân–kết quả bị đảo.", "Mini-test: sắp xếp câu lộn xộn, thêm từ nối, viết câu kết."] ,
  "Biên tập đoạn văn": ["Đoạn nháp: ‘Sân trường rất đẹp. Sân trường rất rộng. Em rất thích sân trường.’ Chỉ ra câu lặp và ý còn thiếu.", "Rà theo bốn lượt: ý, câu, từ, chính tả; mỗi lượt chỉ sửa một loại.", "Viết bản 2 cho đoạn 7 câu, giữ một câu có giọng riêng và sửa tối đa 3 điểm lớn.", "So sánh hai câu: câu nào ngắn hơn nhưng mất hình ảnh, câu nào rõ hơn? Giải thích.", "Đọc thành tiếng để tìm nơi vấp; viết lại duy nhất câu đó.", "Mini-test: biên tập một đoạn 90 chữ, ghi ba thay đổi và lý do."] ,
  "Kể chuyện theo điểm nút": ["Đề: Bách làm rơi thẻ thư viện trước giờ mượn sách. Điểm nút: tìm, nhờ giúp hay nói thật?","Lập 4 mốc: việc xảy ra, trở ngại, lựa chọn, kết quả; mỗi mốc chỉ ghi 1–2 từ khóa.", "Viết đoạn diễn biến 10–12 câu, có một hành động làm câu chuyện thay đổi.", "Đổi lựa chọn của nhân vật ở điểm nút và dự đoán kết thúc khác đi thế nào.", "Sửa bài kể có sự việc thú vị nhưng không dẫn đến kết quả.", "Mini-test: kể một việc thật có vấn đề, lựa chọn và thay đổi sau đó."] ,
  "Mở bài không khuôn mẫu": ["Đề: kể một lần đi học muộn. Mở bằng tiếng chuông, một câu hỏi hoặc hành động đang xảy ra; không mở bằng ‘Hôm nay em…’.", "Viết ba mở bài 2 câu theo ba cách: âm thanh, hành động, chi tiết lạ.", "Chọn một mở bài rồi nối nó với mốc sự việc đầu tiên sao cho không bị nhảy cảnh.", "So sánh mở bài hấp dẫn và mở bài làm màu: câu nào hứa hẹn đúng nội dung bài?", "Cắt một câu giới thiệu dài mà người đọc có thể hiểu qua hành động.", "Mini-test: viết hai mở bài cho cùng đề, đọc to và chọn bản tự nhiên nhất."] ,
  "Đối thoại đúng tuổi": ["Tình huống: bạn làm rách tờ trực nhật rồi ngại nói. Viết 4 lượt thoại ngắn có tên người nói.", "Đặt lời thoại vào gạch đầu dòng; thêm một hành động nhỏ trước hoặc sau lời nói.", "Viết đoạn 8 câu có đối thoại làm câu chuyện tiến lên, không để nhân vật nói thay lời kể dài.", "Cùng một câu ‘Mình xin lỗi’, viết với ba sắc thái phù hợp: lo, thật thà, vui.", "Sửa đoạn mà người đọc không biết ai đang nói hoặc lời thoại quá người lớn.", "Mini-test: đối thoại 6 lượt về một việc ở lớp, có dấu câu đúng."] ,
  "Tả cảnh": ["Đề: tả sân trường sau cơn mưa. Chọn điểm nhìn ở hành lang, đi từ xa đến gần.", "Ghi 5 chi tiết thuộc nhìn, nghe, ngửi; bỏ chi tiết không thật với buổi mưa.", "Viết đoạn 8–10 câu có một câu chuyển từ cảnh rộng sang một chi tiết gần.", "Viết hai câu về vũng nước: một câu chỉ kể, một câu có hình ảnh vừa đủ.", "Sửa bài tả cảnh đổi liên tục từ trời sang lớp học khiến góc nhìn đứt.", "Mini-test: tả một góc quen thuộc trong 10 phút từ 5 chi tiết đã ghi."] ,
  "Cảm nhận nhân vật": ["Đoạn gốc: ‘Hà thấy bạn quên hộp bút. Hà chia đôi bút chì của mình rồi ngồi kèm bạn chép bài.’", "Viết nhận xét ‘Hà là người…’ và chọn hai chi tiết làm bằng chứng.", "Viết đoạn 6–8 câu nêu phẩm chất, dẫn chứng, suy nghĩ riêng; không kể lại cả đoạn.", "So sánh hai nhận xét ‘Hà tốt’ và ‘Hà biết quan tâm’; nhận xét nào chính xác hơn?", "Sửa câu cảm nhận có ý kiến nhưng không có dẫn chứng.", "Mini-test: đọc nhân vật ngắn, nêu một phẩm chất bằng hai bằng chứng."] ,
  "Bài văn 3 phần": ["Đề: kể một buổi cùng gia đình làm việc nhà. Lập mở bài 1–2 câu, thân bài 3 mốc, kết bài 1–2 câu.", "Viết dàn ý 5 gạch đầu dòng có sự việc chứ không chỉ tên phần.", "Viết bài 12–15 câu theo dàn ý; dành 3 phút cuối đọc lại mạch thời gian.", "Tìm một chỗ có thể chuyển cảnh bằng thời gian hoặc hành động, không chỉ dùng ‘sau đó’ nhiều lần.", "Sửa bài có mở và kết nhưng thân bài chỉ là một danh sách việc làm.", "Mini-test 25 phút: dàn ý 5 phút, viết 15 phút, sửa 5 phút."] ,
  "Văn bản giải thích": ["Đề: giải thích vì sao cần uống đủ nước. Bố cục: hiện tượng → nguyên nhân → ví dụ → lời khuyên.", "Đặt ba câu hỏi ‘vì sao’, ‘điều gì xảy ra’, ‘nên làm gì’ rồi trả lời bằng câu ngắn.", "Viết đoạn 8 câu giải thích một hiện tượng gần gũi: bóng râm, cầu vồng hoặc tiết kiệm điện.", "Phân biệt giải thích có căn cứ với câu khuyên chung chung ‘hãy làm điều tốt’.", "Sửa đoạn có nhiều ví dụ nhưng chưa nêu nguyên nhân.", "Mini-test: giải thích một thói quen tốt bằng 2 nguyên nhân và 1 ví dụ."] ,
  "So sánh có căn cứ": ["Đề: so sánh đọc sách giấy và đọc sách điện tử theo ba tiêu chí: mắt, tiện mang theo, cách ghi chú.", "Lập bảng giống/khác, mỗi ô phải có ví dụ hoặc lý do.", "Viết đoạn 8 câu so sánh hai nơi học quen thuộc, không dùng ‘cái này tốt hơn’ khi chưa nêu tiêu chí.", "Đổi tiêu chí rồi xem kết luận có đổi không; ví dụ tiện mang theo khác với khả năng tập trung.", "Sửa bài chỉ nêu hai danh sách mà không kết nối chúng.", "Mini-test: so sánh hai đồ vật theo cùng ba tiêu chí và rút kết luận có điều kiện."] ,
  "Viết ý kiến": ["Đề: ‘Có nên có một góc đọc sách yên tĩnh trong lớp không?’ Viết quan điểm, hai lý do và một ví dụ.", "Viết câu nêu ý kiến không mở bằng ‘Em nghĩ là rất hay’ mà nói rõ đồng ý/không đồng ý.", "Viết đoạn 8–10 câu có một lý do về việc học và một ví dụ ở lớp.", "Viết một câu thừa nhận ý khác rồi trả lời lịch sự, không công kích.", "Sửa bài có nhiều khẩu hiệu nhưng không có lý do cụ thể.", "Mini-test: nêu ý kiến về thời gian dùng thiết bị, có hai lý do và câu kết."] ,
  "Tóm tắt không mất ý chính": ["Đoạn gốc: ‘Sáng thứ bảy, Nam cùng bố trồng cây trước ngõ. Nam xới đất, đặt cây non, tưới nước. Một tuần sau, cây có lá mới; Nam hiểu cần chăm cây đều đặn.’", "Gạch 5 từ khóa rồi kể lại trong 2 câu, không thêm nhận xét ngoài đoạn.", "Rút một đoạn 90 chữ xuống khoảng 30 chữ, vẫn giữ người, việc, kết quả.", "So sánh bản tóm tắt quá ngắn mất kết quả và bản quá dài chép lại câu chữ.", "Sửa bản tóm tắt đổi ‘một tuần sau’ thành ‘ngày hôm sau’ làm sai sự việc.", "Mini-test: đọc đoạn mới, viết tóm tắt bằng một phần ba độ dài."] ,
  "Câu văn có nhịp": ["Hai câu: ‘Em chạy. Em chạy rất nhanh. Em chạy đến lớp.’ Hãy gộp hoặc đổi nhịp mà vẫn rõ.", "Viết một câu ngắn tạo nhịp nhanh và một câu dài vừa phải tả cảnh chậm.", "Viết đoạn 7 câu, xen câu ngắn–vừa, sau đó đọc thành tiếng để tìm chỗ vấp.", "Đổi một câu quá nhiều dấu phẩy thành hai câu đầy đủ.", "Sửa đoạn câu nào cũng dài gần bằng nhau hoặc câu nào cũng bắt đầu bằng ‘Em’.", "Mini-test: viết đoạn ngắn, đánh dấu câu cần ngắt/ghép và giải thích."] ,
  "Bài viết có phản hồi": ["Đề: kể về lần giúp một người. Bản 1 phải hoàn thành trước khi nhận góp ý.", "Tự hỏi ba câu: người đọc hiểu sự việc chưa, chi tiết nào thật, chỗ nào cần nối ý?", "Nhờ người lớn chỉ hỏi ba câu, không viết hộ; Bách chọn tối đa ba điểm để sửa bản 2.", "Viết phiếu phản hồi: giữ câu nào, sửa câu nào, vì sao.", "Sửa phản hồi kiểu ‘viết hay hơn’ thành một gợi ý cụ thể nhưng không áp đặt.", "Mini-test: lưu bản 1/bản 2 và đọc so sánh một thay đổi quan trọng."] ,
  "Mở rộng vốn từ theo chủ đề": ["Chủ đề thiên nhiên: rì rào, lấp lánh, lặng im, xanh rì, se lạnh. Mỗi từ phải đi cùng một câu thật.", "Lập mạng từ 10 từ cho trường học hoặc gia đình, chia từ chỉ sự vật/hoạt động/đặc điểm.", "Viết đoạn 7 câu dùng ba từ mới đúng nghĩa, không nhồi tất cả vào một câu.", "Tìm hai từ gần nghĩa nhưng khác sắc thái, ví dụ ‘đi’ và ‘bước khẽ’.", "Sửa đoạn dùng từ đẹp nhưng không hợp sự vật hoặc cảm xúc.", "Mini-test: chọn 5 từ theo một chủ đề, đặt câu và viết đoạn."] ,
  "Tả người có hành động": ["Đề: tả thầy/cô khi giúp một bạn trong giờ học. Chọn hành động, giọng nói, nét mặt.", "Viết 5 chi tiết quan sát; khoanh hai chi tiết bộc lộ tính cách hơn là tả ngoại hình.", "Viết đoạn 10 câu, để người đọc tự thấy sự tận tình thay vì gọi tên phẩm chất ngay.", "Đổi câu ‘cô hiền’ thành một hành động và lời nói có thể nghe thấy.", "Sửa bài chỉ liệt kê tóc, áo, khuôn mặt mà không có việc diễn ra.", "Mini-test: tả một người qua một việc họ làm, có một câu cảm nhận cuối."] ,
  "Kể chuyện đổi góc nhìn": ["Sự việc: một bạn quên mang áo mưa. Kể lần 1 từ Bách; lần 2 từ chiếc ô được cho mượn.", "Lập hai cột: điều cả hai người biết và điều chỉ một người thấy.", "Viết hai đoạn 6 câu cùng sự việc, giữ thời gian và kết quả không mâu thuẫn.", "Chọn góc nhìn nào tạo cảm xúc rõ hơn, nhưng không được bịa thêm sự việc.", "Sửa bài đổi góc nhìn nhưng vẫn gọi ‘em’ khiến người đọc nhầm người kể.", "Mini-test: kể một việc ở sân trường từ hai nhân vật khác nhau."] ,
  "Sửa câu mơ hồ": ["Câu mơ hồ: ‘Bạn ấy làm nó ở đó rồi rất vui.’ Hỏi ai, làm gì, cái gì, ở đâu, vì sao.", "Sửa 4 câu mơ hồ bằng cách thêm đúng một dữ kiện cần thiết, không kéo dài vô ích.", "Viết đoạn 6 câu về một việc ở nhà, mỗi câu phải xác định được chủ thể chính.", "So sánh câu nhiều thông tin nhưng rõ với câu dài mà vẫn không có đối tượng.", "Sửa đoạn đổi liên tục ‘nó’, ‘cái đó’, ‘họ’ khiến người đọc lạc.", "Mini-test: biên tập đoạn 80 chữ, gạch chân mọi đại từ chưa rõ."] ,
  "Viết đoạn có luận điểm": ["Đề: Vì sao nên giữ lời hứa? Câu chủ đề nêu ý kiến, hai câu sau đưa ví dụ, câu cuối khép lại.", "Lập khung 4 câu: ý kiến – lý do 1 – lý do 2/ví dụ – kết.", "Viết đoạn 8 câu về một thói quen có ích, mỗi lý do phải trả lời được ‘vì sao’.", "Viết một câu phản biện nhẹ: khi nào lời hứa khó giữ và nên làm gì?", "Sửa đoạn chỉ kể chuyện mà chưa nêu ý chính.", "Mini-test: một đoạn có luận điểm, hai bằng chứng và câu kết nối."] ,
  "Bài văn tuyển chọn": ["Chọn bài Bách thích nhất trong học kì; đặt tiêu đề phản ánh đúng sự việc/ý chính.", "Đọc lại bằng bốn bút màu: ý, chi tiết, câu, chính tả; chỉ khoanh chứ chưa sửa ngay.", "Sửa hai vòng: vòng 1 mạch/chi tiết, vòng 2 câu/từ/dấu câu; giữ lại bản cũ.", "Viết lời giới thiệu 3 câu: bài nói về gì, điểm Bách muốn giữ, điều đã sửa.", "So sánh bản cũ–mới, không thay giọng thật bằng câu quá hoa mỹ.", "Mini-test: hoàn thiện một bài để lưu portfolio kèm tự nhận xét."] ,
  "Đọc sâu một truyện": ["Đoạn gốc: ‘Linh định giữ chiếc ví nhặt được, nhưng thấy tấm ảnh gia đình bên trong, em đem đến cô trực. Chiều đó, một chú công nhân đến nhận ví và cảm ơn Linh.’", "Lập bảng nhân vật – mong muốn – lựa chọn – kết quả; dẫn đúng một chi tiết cho mỗi ô.", "Viết đoạn 8 câu về sự thay đổi trong suy nghĩ của Linh, không kể lại toàn bộ.", "Chọn một chi tiết đắt giá và giải thích nếu bỏ đi truyện mất điều gì.", "Sửa cảm nhận chỉ khen Linh mà không nói lựa chọn nào chứng minh.", "Mini-test: đọc truyện ngắn, trả lời bằng chứng và một suy nghĩ riêng."] ,
  "Viết từ quan sát thật": ["Bài tập ngoài màn hình: đứng ở ban công/sân trong 3 phút, ghi 10 chi tiết không đánh giá.", "Phân loại chi tiết theo nhìn, nghe, chạm, mùi; chọn 5 chi tiết phục vụ một góc nhìn.", "Viết đoạn 8–10 câu từ các ghi chép, không đưa chi tiết chưa quan sát.", "Đổi thứ tự chi tiết để đi từ xa đến gần hoặc theo thời gian; chọn một trật tự.", "Sửa bài biến ghi chép thành danh sách, thêm một câu nối và một cảm nhận thật.", "Mini-test: quan sát một vật mới 5 phút, ghi chép rồi viết."] ,
  "Bài văn theo đề mở": ["Đề: ‘Một điều em muốn thay đổi ở góc học tập của mình’. Bách được chọn cách kể, tả hoặc giải thích nhưng phải có mạch.", "Chọn một thể loại và viết dàn ý 5 ý; ghi vì sao thể loại đó hợp đề.", "Viết bài 12–15 câu có ít nhất một chi tiết thật và một câu chuyển ý.", "Thử một mở bài bằng câu hỏi hoặc hình ảnh, rồi kiểm tra nó có dẫn đúng vào nội dung không.", "Sửa bài nhiều ý hay nhưng không có trục chính; cắt hoặc gộp một ý.", "Mini-test: đề mở mới, lập ý trước và tự nêu tiêu chí thành công."] ,
  "Đọc–viết liên môn": ["Đoạn gốc: ‘Nước bốc hơi khi nhận nhiệt. Hơi nước gặp lạnh tạo thành giọt nhỏ; nhiều giọt tạo mây.’", "Tìm ba bước của quá trình, viết lại bằng sơ đồ mũi tên và từ khóa.", "Viết đoạn giải thích cho em nhỏ hơn bằng 6–8 câu, không dùng từ khó mà không giải nghĩa.", "Đổi một ví dụ đời sống: nắp nồi, quần áo phơi, kính có hơi nước.", "Sửa đoạn khoa học có câu khẳng định nhưng không nêu quá trình.", "Mini-test: đọc thông tin ngắn, vẽ sơ đồ và giải thích lại."] ,
  "Portfolio và tự nhận xét": ["Chọn 3 bài: một đọc hiểu, một kể/tả, một bài đã sửa. Mỗi bài phải có ngày và bản gốc nếu có.", "Viết ba câu cho mỗi bài: con đã làm gì, tiến bộ ở đâu, lỗi nào còn lặp.", "Chọn một lỗi chung, ví dụ lặp từ hoặc nhảy ý, và viết kế hoạch sửa trong tuần tới.", "Đọc hai bài cách nhau nhiều tuần, chỉ ra bằng chứng cụ thể về tiến bộ thay vì tự khen chung.", "Sửa tự nhận xét ‘con viết hay hơn’ thành nhận xét có ví dụ câu/đoạn.", "Mini-test: trình bày portfolio 3 phút và nhận một câu hỏi phản hồi."] ,
  "Ngày hội kể chuyện": ["Chọn một bài kể/tả Bách muốn đọc; cắt những câu chỉ để kéo dài nhưng không đổi ý.", "Đánh dấu chỗ ngắt, nhấn và lời thoại trước khi đọc thành tiếng.", "Thu âm/đọc bài 2 phút, nghe lại và ghi một chỗ rõ, một chỗ cần sửa.", "Viết câu giới thiệu ngắn cho người nghe: bài kể về điều gì và vì sao Bách chọn.", "Sửa một câu cuối để bài khép lại tự nhiên, không rút ra bài học quá người lớn.", "Ngày hội: đọc, nhận một phản hồi, tự chọn một sửa đổi cuối cùng."]
};

const MATH_WEEK7_VISUAL = { type: "sequence", sequence: [2, 6, 12, 20, 30, 42], steps: ["+4", "+6", "+8", "+10", "+12"] };

const AUTHORED_P2_WEEK7_MATH = [
  {
    day: "Thứ 2",
    title: "Hiểu trọng tâm · Dãy số tăng dần khoảng cách",
    objective: "Nhận biết quy luật hiệu giữa hai số hạng liền kề tăng đều 1 đơn vị: +1, +2, +3, +4...",
    example: "Quan sát dãy số: 1, 2, 4, 7, 11, 16. Khoảng cách giữa các số lần lượt là 1, 2, 3, 4, 5. Số tiếp theo là 16 + 6 = 22.",
    basic: "1. Tìm hai số tiếp theo của dãy số sau: 3, 4, 6, 9, 13, 18, ..., ...",
    applied: "1. Bác An xếp các chậu hoa theo hàng: hàng thứ nhất 2 chậu, hàng thứ hai 4 chậu, hàng thứ ba 7 chậu, hàng thứ tư 11 chậu. Hỏi hàng thứ sáu có bao nhiêu chậu hoa?",
    challenge: "1. Cho dãy số: 1, 3, 7, 13, 21, 31, ... Tìm số hạng thứ 10 của dãy số.",
    visual: MATH_WEEK7_VISUAL,
    reasoning: "Tìm hiệu giữa số liền sau và số liền trước để xác định quy luật tăng dần 1 đơn vị của khoảng cách.",
    selfCheck: "Kiểm tra lại xem khoảng cách mới tìm được có đúng thứ tự tăng dần 1 đơn vị không.",
    drill: "1. Điền số thích hợp vào chỗ trống: 5, 6, 8, 11, 15, ..., 26.",
    variant: "1. Tìm số thứ 7 của dãy số giảm dần khoảng cách: 50, 40, 31, 23, 16, ...",
    advanced: "1. Cho dãy số: 2, 5, 10, 17, 26, ... Hỏi số 101 là số hạng thứ bao nhiêu của dãy?"
  },
  {
    day: "Thứ 3",
    title: "Luyện kỹ thuật · Dãy số cách đều",
    objective: "Vận dụng thành thạo công thức tìm số số hạng và số hạng thứ n của dãy số cách đều.",
    example: "Dãy số cách đều 4 đơn vị: 3, 7, 11, 15, 19. Số hạng thứ n = 3 + (n - 1) x 4. Số hạng thứ 20 là 3 + 19 x 4 = 79.",
    basic: "1. Cho dãy số cách đều: 4, 9, 14, 19, 24, ... Tìm số hạng thứ 25 của dãy số.",
    applied: "1. Một cuộn vé xem phim đánh số liên tiếp từ số 105 đến số 245. Hỏi cuộn vé đó có tất cả bao nhiêu vé?",
    challenge: "1. Tính tổng của 30 số hạng đầu tiên của dãy số: 2, 6, 10, 14, 18, ...",
    visual: MATH_WEEK7_VISUAL,
    reasoning: "Khoảng cách giữa hai số hạng liền kề không đổi: d = 4 đơn vị. Số hạng thứ n = a1 + (n - 1) x d.",
    selfCheck: "Lấy số hạng vừa tính trừ đi số liền trước xem hiệu có đúng bằng khoảng cách 4 đơn vị không.",
    drill: "1. Dãy số 7, 10, 13, 16, ..., 94 có bao nhiêu số hạng?",
    variant: "1. Tìm số hạng đầu tiên của một dãy số cách đều 5 đơn vị, biết số hạng thứ 15 là 78.",
    advanced: "1. Cho dãy số: 1, 4, 7, 10, ..., 298. Tìm số hạng chính giữa của dãy số này."
  },
  {
    day: "Thứ 4",
    title: "Vận dụng · Xếp hàng ghế hội trường",
    objective: "Ứng dụng quy luật dãy số vào bài toán thực tế xếp hàng ghế tăng dần số chỗ ngồi.",
    example: "Một phòng chiếu phim có 12 hàng ghế. Hàng 1 có 18 ghế, mỗi hàng sau nhiều hơn hàng trước 2 ghế. Hàng 12 có: 18 + (12 - 1) x 2 = 40 ghế.",
    basic: "1. Hàng đầu tiên của một khán đài có 20 ghế, mỗi hàng tiếp theo nhiều hơn hàng trước 3 ghế. Hỏi hàng thứ 8 có bao nhiêu ghế?",
    applied: "1. Hội trường trường tiểu học có 15 hàng ghế. Hàng thứ nhất có 16 ghế, mỗi hàng sau hơn hàng trước 2 ghế. Hỏi cả hội trường có tất cả bao nhiêu ghế ngồi?",
    challenge: "1. Một rạp hát có 20 hàng ghế, hàng cuối cùng có 70 ghế. Biết mỗi hàng sau hơn hàng liền trước 2 ghế. Hỏi hàng đầu tiên có bao nhiêu ghế và rạp hát có bao nhiêu chỗ ngồi?",
    visual: MATH_WEEK7_VISUAL,
    reasoning: "Xác định số ghế hàng 1 là 18, số ghế tăng thêm mỗi hàng là 2, số hàng là 12 rồi áp dụng công thức dãy số.",
    selfCheck: "Kiểm tra xem số ghế mỗi hàng có tăng đều 2 đơn vị và kết quả tổng số ghế có hợp lý không.",
    drill: "1. Một lớp xếp 6 hàng tập thể dục: hàng 1 có 4 bạn, mỗi hàng sau nhiều hơn hàng trước 1 bạn. Hỏi cả lớp có bao nhiêu học sinh?",
    variant: "1. Tủ sách có 5 tầng, tầng 1 có 45 cuốn, mỗi tầng trên ít hơn tầng dưới 4 cuốn. Hỏi tầng 5 có bao nhiêu cuốn sách?",
    advanced: "1. Sân vận động có một khu khán đài hình thang: hàng đầu có 25 chỗ, hàng cuối có 85 chỗ, mỗi hàng hơn nhau 3 chỗ. Hỏi khu khán đài có bao nhiêu hàng ghế?"
  },
  {
    day: "Thứ 5",
    title: "Thử thách · Dãy hai quy luật đan xen",
    objective: "Phát hiện và phân tích dãy số kết hợp từ hai quy luật hoặc hai dãy con xen kẽ.",
    example: "Dãy số: 1, 3, 2, 6, 3, 9, 4, 12. Tách thành hai dãy: vị trí lẻ là 1, 2, 3, 4 (tăng 1); vị trí chẵn là 3, 6, 9, 12 (nhân 3 hoặc cộng 3). Số tiếp theo là 5.",
    basic: "1. Tìm số tiếp theo của dãy số đan xen sau: 2, 5, 4, 10, 6, 15, 8, ...",
    applied: "1. Cho dãy số: 100, 2, 95, 4, 90, 6, 85, 8, ... Tìm số hạng thứ 11 và thứ 12 của dãy số.",
    challenge: "1. Cho dãy số: 1, 2, 4, 7, 11, 16, 22, ... và dãy số: 2, 4, 8, 16, 32, ... Viết 8 số đầu tiên của dãy tạo bởi tổng các số hạng tương ứng của hai dãy trên.",
    visual: MATH_WEEK7_VISUAL,
    reasoning: "Tách dãy số thành các số ở vị trí lẻ (1, 3, 5...) và vị trí chẵn (2, 4, 6...) để tìm quy luật riêng của từng nhánh.",
    selfCheck: "Thử ghép lại 2 quy luật xem 8 số hạng đã cho có khớp hoàn toàn theo thứ tự không.",
    drill: "1. Điền hai số thích hợp tiếp theo: 1, 20, 3, 18, 5, 16, 7, ..., ...",
    variant: "1. Cho dãy số có quy luật nhân 2 rồi cộng 1: 1, 3, 7, 15, 31, ... Tìm số hạng thứ 7 của dãy số.",
    advanced: "1. Cho dãy số Fibonacci mở rộng: 1, 2, 3, 5, 8, 13, 21, 34, ... Tìm số dư của số hạng thứ 20 khi chia cho 2."
  },
  {
    day: "Thứ 6",
    title: "Chữa lỗi · Phát hiện và sửa số sai quy luật",
    objective: "Kiểm tra tính nhất quán của khoảng cách để phát hiện một số sai trong dãy và sửa lại cho đúng.",
    example: "Cho dãy số: 4, 7, 11, 16, 21, 29. Hiệu các số: 3, 4, 5, 5, 8. Số 21 sai quy luật tăng dần khoảng cách (+3, +4, +5, +6, +7). Sửa 21 thành 22 (16 + 6 = 22, 22 + 7 = 29).",
    basic: "1. Trong dãy số sau có một số không đúng quy luật: 3, 8, 13, 19, 23, 28. Hãy tìm số sai đó và sửa lại cho đúng.",
    applied: "1. Một bảng ghi số lượng cây trồng mỗi ngày trong tuần: 5, 9, 14, 20, 26, 35. Bạn Nam phát hiện ngày thứ 5 ghi sai. Hỏi số đúng phải là bao nhiêu?",
    challenge: "1. Cho dãy số: 2, 6, 12, 20, 31, 42, 56. Chỉ ra một số duy nhất viết sai, giải thích vì sao sai và viết lại dãy số đúng.",
    visual: MATH_WEEK7_VISUAL,
    reasoning: "Lập bảng khoảng cách giữa từng cặp số liên tiếp; vị trí nào làm đứt gãy quy luật tăng đều 1 đơn vị thì số ở giữa hai khoảng cách bất thường chính là số sai.",
    selfCheck: "Sau khi thay số mới vào, tính lại cả khoảng cách phía trước và phía sau xem đã khớp quy luật 1 đơn vị chưa.",
    drill: "1. Tìm và sửa số sai trong dãy cách đều: 6, 12, 18, 25, 30, 36.",
    variant: "1. Cho dãy số giảm dần: 80, 71, 63, 56, 49, 45. Tìm số không phù hợp quy luật hiệu giảm dần và sửa lại.",
    advanced: "1. Dãy số: 1, 2, 4, 8, 15, 32, 64 có một số sai quy luật gấp đôi. Tìm số đó, sửa lại và tính tổng của dãy đúng."
  },
  {
    day: "Thứ 7",
    title: "Mini-test 50 phút · Dãy số và quy luật",
    objective: "Đánh giá toàn diện kỹ năng phân tích quy luật, tính số hạng, tính tổng và giải bài toán thực tế trong 50 phút.",
    example: "1. Dãy số cách đều 5 đơn vị: 5, 10, 15, 20, ...\n2. Dãy số tăng khoảng cách: 1, 2, 4, 7, 11, ...\n3. Bài toán thực tế 16 hàng ghế khán đài.\n4. Phát hiện số sai và tính tổng 4 số.",
    basic: "1. Viết tiếp ba số hạng vào dãy số sau: 2, 7, 12, 17, 22, ..., ..., ...\n2. Tìm số hạng thứ 30 của dãy số cách đều: 5, 9, 13, 17, 21, ...\n3. Tính số số hạng của dãy số: 11, 14, 17, 20, ..., 101.\n4. Tìm số hạng thứ 8 của dãy số tăng khoảng cách: 1, 2, 4, 7, 11, 16, ...",
    applied: "1. Một khán đài có 16 hàng ghế, hàng đầu có 24 ghế, mỗi hàng sau hơn hàng trước 2 ghế. Hỏi hàng thứ 16 có bao nhiêu ghế?\n2. Tính tổng số ghế của cả 16 hàng ghế trên khán đài đó.\n3. Nếu ban tổ chức cần 650 chỗ ngồi thì khán đài này có đủ chỗ cho khán giả không?\n4. Muốn có đúng 700 chỗ ngồi thì cần kê thêm bao nhiêu ghế vào các hàng?",
    challenge: "1. Cho dãy số: 3, 8, 15, 24, 35, 48, ... Tìm số hạng thứ 10 của dãy số.\n2. Dãy số: 2, 5, 11, 23, 47, ... có quy luật gì? Tìm số hạng thứ 7.\n3. Cho dãy: 4, 9, 15, 22, 30, 39, 49. Chỉ ra số sai quy luật và sửa lại.\n4. Tính tổng 20 số hạng đầu tiên của dãy số cách đều: 3, 7, 11, 15, 19, ...",
    visual: MATH_WEEK7_VISUAL,
    reasoning: "1. Phân bổ 50 phút: Bài 1 (10 phút), Bài 2 (10 phút), Bài 3 (15 phút), Bài 4 (10 phút), soát bài (5 phút).\n2. Nhận diện dạng dãy số trước khi áp dụng công thức tính số hạng hoặc tính tổng.\n3. Kiểm tra lại phép nhân và cộng dồn từng bước tính.",
    selfCheck: "1. Đã hoàn thành đủ 4 bài toán và ghi rõ số thứ tự câu chưa?\n2. Các phép tính có đầy đủ lời giải, phép tính và danh số đơn vị không?\n3. Đáp số của bài toán thực tế đã kiểm tra tính hợp lý chưa?\n4. Các phép tính cộng trừ nhân chia đã nháp lại độc lập chưa?",
    drill: "1. Tính nhẩm nhanh số số hạng của: 10, 20, 30, ..., 200.\n2. Tìm số tiếp theo của: 1, 4, 9, 16, 25, ...\n3. Tìm số tiếp theo của: 2, 6, 18, 54, ...\n4. Tìm số trung bình cộng của 5 số: 12, 14, 16, 18, 20.",
    variant: "1. Cho dãy số: 1, 5, 9, 13, 17, ... Số 2021 có thuộc dãy số này không?\n2. Tìm số hạng thứ 50 của dãy số: 3, 8, 13, 18, 23, ...\n3. Một đội xếp hàng hình tam giác: hàng 1 có 1 người, hàng 2 có 2 người, ..., hàng 12 có 12 người. Đội có bao nhiêu người?\n4. Tìm và sửa số sai trong dãy: 1, 3, 6, 10, 16, 21, 28.",
    advanced: "1. Cho dãy số: 1, 2, 3, 5, 8, 13, 21, ... Tìm số dư của số hạng thứ 50 khi chia cho 3.\n2. Tính tổng: S = 1 + 3 + 5 + 7 + ... + 99.\n3. Có bao nhiêu số có 3 chữ số chia hết cho 5 và tận cùng bằng chữ số 5?\n4. Tìm số hạng thứ 100 của dãy số: 2, 4, 6, 8, ..., biết dãy số bắt đầu từ số 2."
  }
];

const AUTHORED_P2_WEEK7_VIETNAMESE = [
  {
    day: "Thứ 2",
    title: "Quan sát và ghi chép · Chiếc hộp bút",
    objective: "Quan sát trực tiếp chiếc hộp bút thật và ghi chép lại chính xác 6 chi tiết đặc trưng theo từng giác quan.",
    example: "Quan sát thực tế chiếc hộp bút vải canvas màu xanh thẫm: dài khoảng 20 cm, sờ mặt vải hơi ráp nhẹ; khóa kéo kim loại màu bạc sáng loáng; mở ra có ngăn chính sâu và một ngăn lưới phụ gắn ở nắp.",
    basic: "1. Quan sát chiếc hộp bút của em và ghi lại 6 chi tiết cụ thể: hình dáng chiều dài, màu sắc chất liệu, chiếc khóa kéo, ngăn chứa bên trong, các đồ dùng bên trong, một dấu vết riêng như hình dán hoặc vết mực.",
    applied: "1. Chọn 3 chi tiết em thấy thú vị nhất trong 6 chi tiết vừa ghi chép và viết thành 3 câu miêu tả có sử dụng từ ngữ gợi cảm giác (mịn màng, sột soạt, trơn tru).",
    challenge: "1. Viết một câu văn miêu tả âm thanh tiếng mở khóa kéo của chiếc hộp bút khi bắt đầu bước vào tiết học buổi sáng.",
    reasoning: "Quan sát lần lượt từ cái nhìn tổng thể bên ngoài rồi mới mở khóa khám phá các chi tiết bên trong.",
    selfCheck: "Đã ghi đủ 6 chi tiết chưa, có chi tiết nào bị trùng lặp hoặc phỏng đoán không đúng mắt thấy không?",
    drill: "1. Tìm 4 từ gợi tả màu sắc và bề mặt chất liệu cho chiếc hộp bút: xanh thẫm, ráp nhẹ, trơn nhẵn, bóng loáng.",
    variant: "1. Nếu chiếc hộp bút làm bằng nhựa cứng hoặc sắt tây thì những chi tiết về âm thanh và độ bền sẽ thay đổi như thế nào?",
    advanced: "1. So sánh chiếc hộp bút hiện tại với chiếc hộp bút hồi lớp 1 của em bằng một đoạn văn ngắn 3 câu."
  },
  {
    day: "Thứ 3",
    title: "Lập ý 4 phần · Chiếc hộp bút",
    objective: "Sắp xếp các chi tiết quan sát thành dàn ý mạch lạc gồm 4 phần: bao quát bên ngoài, chi tiết bên trong, công dụng mỗi ngày, kỷ niệm gắn bó.",
    example: "Khung dàn ý 4 phần chi tiết: Phần 1 (bên ngoài: dạng hộp chữ nhật dài 20 cm, vải canvas xanh); Phần 2 (bên trong: ngăn chính đựng bút chì bút mực, ngăn phụ đựng tẩy và compa); Phần 3 (công dụng: giữ bàn học gọn gàng, giúp lấy đồ nhanh); Phần 4 (kỷ niệm: món quà mẹ tặng đầu năm học lớp 4).",
    basic: "1. Quan sát chiếc hộp bút thật của em và hoàn thành dàn ý 4 phần: 1. Hình dáng và chất liệu bên ngoài; 2. Cấu tạo và các ngăn bên trong; 3. Cách em sử dụng hộp bút trong giờ học; 4. Kỷ niệm hoặc cảm nghĩ đối với chiếc hộp bút.",
    applied: "1. Viết 2 câu mở bài trực tiếp giới thiệu chiếc hộp bút và 2 câu kết bài nêu tình cảm gắn bó của em.",
    challenge: "1. Thử viết một câu chuyển ý nối liền mạch từ phần tả bên ngoài sang phần mở nắp khám phá bên trong hộp bút.",
    reasoning: "Dàn ý như một bản đồ dẫn đường, giúp bài viết không bị nhảy ý hoặc bỏ quên những chi tiết quan trọng.",
    selfCheck: "Kiểm tra xem mỗi phần trong dàn ý đã có ít nhất 2 ý nhỏ cụ thể chưa.",
    drill: "1. Sắp xếp lại thứ tự hợp lý cho 4 ý sau: (A) Giữ gìn hộp bút cẩn thận; (B) Hộp bút màu xanh dài 20 cm; (C) Ngăn trong chia hai ngăn tiện lợi; (D) Mỗi tiết học hộp bút luôn nằm cạnh em.",
    variant: "1. Lập dàn ý cho bài văn tả một đồ dùng học tập khác như chiếc cặp sách hoặc cây bút máy theo đúng 4 phần trên.",
    advanced: "1. Chọn một chi tiết kỷ niệm đặc biệt (như hôm làm rơi hộp bút được bạn nhặt giúp) để phát triển thành ý đắt giá trong phần kết bài."
  },
  {
    day: "Thứ 4",
    title: "Viết bản 1 · Chiếc hộp bút",
    objective: "Viết đoạn văn 8–10 câu miêu tả chi tiết các bộ phận và công dụng của chiếc hộp bút, giữ giọng kể tự nhiên của học sinh lớp 4.",
    example: "Đoạn văn tham khảo: ‘Chiếc hộp bút của em có hình khối hộp chữ nhật nhỏ gọn, nằm ngoan ngoãn ở góc bàn học. Toàn thân hộp được may bằng vải canvas màu xanh thẫm, sờ vào thấy hơi ráp nhưng rất bền. Nổi bật nhất là đường khóa kéo kim loại màu bạc, kéo một đường nhẹ tanh tách là mở ra. Bên trong hộp chia làm hai ngăn rõ rệt. Ngăn chính rộng rãi, em để vừa ba chiếc bút mực, hai cây bút chì và chiếc thước kẻ hai mươi xăng-ti-mét. Ngăn lưới nhỏ xíu gắn phía trên là nơi nằm yên ổn của cục tẩy trắng tinh và chiếc gọt chì hình chú thỏ. Nhờ có hộp bút, các đồ dùng của em không còn bị rơi hay thất lạc mỗi khi chuyển tiết học.’",
    basic: "1. Viết đoạn văn 8–10 câu miêu tả chiếc hộp bút theo dàn ý đã lập ở Thứ 3, có chi tiết tả bên ngoài, bên trong và ích lợi của nó đối với việc học.",
    applied: "1. Đếm số câu trong đoạn văn vừa viết, gạch chân dưới các từ chỉ hình dáng, màu sắc và âm thanh mà em đã sử dụng.",
    challenge: "1. Thêm một câu sử dụng biện pháp nhân hóa để tả hành động của những chiếc bút nằm bên trong hộp bút.",
    reasoning: "Liên kết các câu bằng các từ nối chỉ không gian: bên ngoài, mở khóa ra, phía bên trong, ngăn lưới phía trên...",
    selfCheck: "Đoạn văn đã đủ từ 8 đến 10 câu chưa, có câu nào bị cụt chủ ngữ hoặc lặp từ ‘em’ quá nhiều lần không?",
    drill: "1. Ghép 2 câu đơn sau thành 1 câu ghép tự nhiên: ‘Chiếc khóa kéo rất trơn.’ và ‘Em mở hộp bút rất dễ dàng.’",
    variant: "1. Viết lại đoạn văn theo hướng tập trung tả chiếc hộp bút vào khoảnh khắc chuẩn bị tan học cất đồ vào cặp.",
    advanced: "1. Sử dụng một câu văn có hình ảnh so sánh độc đáo để miêu tả hình dáng hoặc màu sắc của chiếc hộp bút."
  },
  {
    day: "Thứ 5",
    title: "Thử nghiệm cách viết · Từ ngữ giác quan",
    objective: "Biết thay thế các câu văn nhận xét chung chung, sáo rỗng bằng câu văn chứa chi tiết giác quan và hành động chân thật.",
    example: "Câu chung chung: ‘Chiếc hộp bút của em rất đẹp và tiện lợi.’ Sửa thành câu cụ thể: ‘Mỗi lần chạm tay vào lớp vải canvas màu xanh mát mắt và nghe tiếng then khóa lướt êm ru, em lại thấy hào hứng mở vở bắt đầu bài học mới.’",
    basic: "1. Thay thế câu chung chung sau thành một câu cụ thể có hình ảnh và giác quan: ‘Chiếc khóa kéo của hộp bút rất tốt.’",
    applied: "1. Đọc lại đoạn văn viết hôm Thứ 4, tìm 2 câu còn chung chung hoặc đơn điệu và viết lại thành 2 câu sống động hơn bằng từ ngữ gợi tả thị giác hoặc xúc giác.",
    challenge: "1. Viết một câu văn diễn tả cảm giác ngón tay chạm vào chất liệu vải của hộp bút khi trời lạnh vào buổi sáng mùa đông.",
    reasoning: "Thay vì khẳng định ‘đẹp’, ‘tốt’, hãy kể cụ thể mắt nhìn thấy màu gì, tay sờ thấy thế nào, tai nghe thấy âm thanh gì.",
    selfCheck: "Câu văn viết lại đã loại bỏ được từ khen chung chung chưa, người đọc có hình dung ra đồ vật thật không?",
    drill: "1. Thay từ ‘rất đẹp’ trong câu ‘Bên trong hộp bút rất đẹp.’ bằng chi tiết các chiếc bút nằm ngay ngắn thẳng hàng.",
    variant: "1. Thử thay đổi cách viết một câu miêu tả cục tẩy hình con gấu nằm trong ngăn lưới từ góc nhìn hành động.",
    advanced: "1. Viết đoạn 3 câu miêu tả vết mực nhỏ dính trên nắp hộp bút gợi nhớ buổi học vẽ cùng bạn bàn bên."
  },
  {
    day: "Thứ 6",
    title: "Biên tập · Chữa đoạn văn còn yếu",
    objective: "Phát hiện các lỗi liệt kê khô khan, lặp từ và thiếu liên kết trong một đoạn văn ngắn cho trước để biên tập lại hoàn chỉnh.",
    example: "Đoạn văn yếu cho trước: ‘Em có một cái hộp bút. Hộp bút của em màu xanh. Hộp bút của em đựng bút mực và thước kẻ. Em rất yêu hộp bút của em.’ Lỗi: Lặp cụm từ ‘hộp bút của em’ 4 lần, câu ngắn rời rạc như danh sách liệt kê, thiếu từ nối và hình ảnh cụ thể.",
    basic: "1. Đọc đoạn văn yếu cho trước trong ví dụ, gạch chân các từ bị lặp và viết lại thành một đoạn văn 3 câu mạch lạc, tự nhiên.",
    applied: "1. Chữa lại đoạn văn sau để bài viết có hình ảnh cụ thể: ‘Chiếc hộp bút em để trên bàn. Nó đựng nhiều thứ. Giờ học em lấy đồ ra dùng. Dùng xong em cất đi.’ Hãy thêm các từ gợi tả đồ dùng và hành động sắp xếp.",
    challenge: "1. Biên tập lại một đoạn văn 5 câu của bạn Nam bị lỗi nhảy ý: đang tả ngăn trong bỗng quay lại tả màu sắc bên ngoài rồi nhảy sang khen bạn tặng.",
    reasoning: "Khi biên tập, dùng đại từ thay thế (nó, đồ vật này, người bạn nhỏ), gộp các câu đơn ngắn thành câu có nhiều vế nối nhau bằng quan hệ từ.",
    selfCheck: "Đoạn văn sau khi chữa có còn bị lặp từ không, các câu nối tiếp nhau có mượt mà và tự nhiên không?",
    drill: "1. Thay thế đại từ thích hợp vào chỗ trống để tránh lặp từ ‘hộp bút’: ‘Chiếc hộp bút nằm ở góc bàn. ... luôn là bạn đồng hành tin cậy của em.’",
    variant: "1. Viết lại đoạn văn theo giọng tâm sự nhẹ nhàng của một người bạn gắn bó.",
    advanced: "1. Tìm và sửa 3 lỗi dùng từ sai ngữ cảnh trong đoạn văn miêu tả đồ vật: ‘Chiếc hộp bút hùng vĩ nằm trên mặt bàn rộng mênh mông.’"
  },
  {
    day: "Thứ 7",
    title: "Mini-test 50 phút · Tả chiếc hộp bút",
    objective: "Thực hiện bài kiểm tra hoàn chỉnh 50 phút gồm đúng 3 phần: lập dàn ý, viết bài văn 12–15 câu và tự đánh giá theo bảng tiêu chí.",
    example: "1. Phần 1 (10 phút): Lập dàn ý 4 phần vắn tắt.\n2. Phần 2 (30 phút): Viết bài văn hoàn chỉnh 12–15 câu tả chiếc hộp bút.\n3. Phần 3 (10 phút): Đọc soát bài và ghi 3 điểm tự chỉnh sửa theo bảng tiêu chí.",
    basic: "1. Lập dàn ý vắn tắt cho bài văn tả chiếc hộp bút gồm 4 phần: Mở bài, Tả bên ngoài, Tả bên trong và công dụng, Kết bài.\n2. Viết bài văn hoàn chỉnh từ 12 đến 15 câu theo dàn ý trên, có câu mở bài hấp dẫn và chi tiết giác quan cụ thể.\n3. Đọc lại bài viết, chỉ ra một lỗi chính tả hoặc từ ngữ lặp và viết lại câu đó cho hoàn chỉnh hơn.",
    applied: "1. Lập dàn ý chi tiết có ghi rõ ít nhất 3 từ ngữ gợi tả màu sắc, chất liệu và âm thanh em sẽ dùng trong bài.\n2. Viết bài văn 12–15 câu tả chiếc hộp bút thật của em, sử dụng ít nhất một phép so sánh và một phép nhân hóa tự nhiên.\n3. Điền bảng tự đánh giá 3 tiêu chí: bài viết đủ 3 phần chưa, câu văn có rõ ý không, có chi tiết nào em tâm đắc nhất.",
    challenge: "1. Lập dàn ý mở bài gián tiếp từ một kỷ niệm ngày khai giảng đầu năm lớp 4.\n2. Viết bài văn tả chiếc hộp bút với điểm nhấn là sự thay đổi cách sắp xếp ngăn nắp của em sau một học kỳ.\n3. Tự viết đoạn nhận xét 3 câu về sự tiến bộ trong cách dùng từ gợi cảm giác so với bài viết đầu năm.",
    reasoning: "1. Phân bổ thời gian: 10 phút lập ý chọn từ, 30 phút viết bài hoàn chỉnh, 10 phút đọc lại soát lỗi.\n2. Giữ nguyên giọng kể tự nhiên, mộc mạc của lứa tuổi học sinh lớp 4 thay vì sao chép các câu văn mẫu.\n3. Tập trung làm nổi bật một chi tiết em yêu thích nhất để tạo điểm nhấn riêng cho bài văn.",
    selfCheck: "1. Bài làm đã hoàn thành đủ cả 3 phần đánh số theo yêu cầu chưa?\n2. Bài văn có đạt độ dài yêu cầu từ 12 đến 15 câu và có câu mở bài, kết bài trọn ý không?\n3. Em đã tự phát hiện và sửa được ít nhất một lỗi chính tả hoặc cách dùng từ trực tiếp trên bài chưa?",
    drill: "1. Viết nhanh 1 câu mở bài gián tiếp cho bài văn tả chiếc hộp bút.\n2. Viết nhanh 1 câu kết bài mở rộng nêu lời hứa giữ gìn đồ dùng học tập.\n3. Gạch chân và sửa lỗi chính tả trong câu: ‘Chiếc khoá kéo kim loại sáng loáng sột soạt mở ra.’",
    variant: "1. Lập dàn ý 3 phần cho đề bài tả hộp bút màu sáp 24 màu của em.\n2. Viết đoạn 10 câu tả hộp màu vẽ với điểm nhấn là sự phong phú của các thỏi màu.\n3. Tự chấm điểm bài viết theo thang điểm 10 với các tiêu chí rõ ràng.",
    advanced: "1. Lập dàn ý cho bài văn kết hợp giữa tả chiếc hộp bút và kể lại kỷ niệm cùng bạn cùng bàn tìm lại nắp bút bị rơi.\n2. Viết bài văn 15 câu hoàn chỉnh thể hiện tình bạn qua món đồ dùng học tập.\n3. Đóng vai chiếc hộp bút viết lời tự giới thiệu 4 câu gửi tới bạn học sinh lớp 4."
  }
];

function authoredP2DailyPlan(item, subject, weekNumber, phase) {
  const w = Number(weekNumber);
  if (w !== 7 || subject !== "math") return null;
  return {
    alignment: "Tuần 7: nhận ra quy luật qua hiệu, dãy cách đều, dãy đan xen và bài toán hàng ghế.",
    days: AUTHORED_P2_WEEK7_MATH
  };
}

function authoredDailyPlan(item, subject, weekNumber, phase) {
  const p2Plan = authoredP2DailyPlan(item, subject, weekNumber, phase);
  if (p2Plan) return p2Plan;

  const title = item[0];
  const kit = (subject === "math" ? AUTHORED_MATH_KITS : AUTHORED_VIETNAMESE_KITS)[title];
  if (!kit) return null;
  const [example, basic, applied, challenge, repair, test] = kit;
  const isMath = subject === "math";

  const dayTitles = isMath
    ? [`Hiểu trọng tâm · ${title}`, `Luyện kỹ thuật · ${title}`, `Vận dụng · ${title}`, `Thử thách · ${title}`, `Chữa lỗi · ${title}`, `Mini-test 50 phút · ${title}`]
    : [`Đọc và nói · ${title}`, `Lập ý · ${title}`, `Viết bản 1 · ${title}`, `Thử nghiệm cách viết · ${title}`, `Biên tập · ${title}`, `Mini-test 50 phút · ${title}`];

  const dayObjectives = isMath
    ? [
      `Nắm vững bản chất và quy tắc cốt lõi của “${title}” qua ví dụ mẫu.`,
      `Rèn luyện thành thạo kỹ thuật tính toán và giải các bài tập cơ bản về “${title}”.`,
      `Vận dụng kiến thức “${title}” để giải quyết bài toán thực tế có lời văn.`,
      `Thử sức với bài toán nâng cao, rèn luyện tư duy heuristic và mô hình hóa.`,
      `Phát hiện bẫy sai lầm, phân tích nguyên nhân và trình bày lại lời giải chuẩn.`,
      `Đánh giá năng lực toàn diện tuần ${weekNumber} với đề kiểm tra 50 phút đa mức độ.`
    ]
    : [
      `Đọc kỹ yêu cầu và ngữ liệu “${title}”, phát hiện chi tiết đắt giá và nói trọn ý.`,
      `Lập dàn ý rõ ràng cho chủ đề “${title}”, phân biệt ý chính và chi tiết phụ.`,
      `Viết đoạn văn bản nháp đầu tiên với chi tiết chân thật và mạch liên kết tự nhiên.`,
      `Thử nghiệm biện pháp nghệ thuật và cách diễn đạt mới để làm sáng tỏ ý văn.`,
      `Rà soát và biên tập câu văn theo tiêu chí cụ thể: ý–câu–từ–chính tả.`,
      `Hoàn thành bài viết kiểm tra 50 phút theo thang điểm 10 và tự đánh giá sản phẩm.`
    ];

  // Đảm bảo bài vận dụng môn Toán luôn có dữ liệu số và ngữ cảnh cụ thể
  const getMathAppliedForDay2 = () => {
    const hasNum = /\d+/.test(applied) || /\b(?:một|hai|ba|bốn|năm|sáu|bảy|tám|chín|mười)\s+(?:bạn|người|hộp|quả|chiếc|cái|thùng|bao|con|đội|nhóm|lớp|viên)\b/i.test(applied);
    const isMeta = /^chọn một câu sai|^chữa (?:sâu |một )?câu sai|^làm lại duy nhất hai câu sai|^nhìn \w+ đề không giải/i.test(applied.trim());
    if (hasNum && !isMeta) {
      return applied;
    }
    return `Bài toán vận dụng thực tế tuần ${weekNumber} (${title}): Dựa vào số liệu từ ví dụ (${example}), hãy giải bài toán trong tình huống thực tế gồm 2 bước tính với đầy đủ đơn vị và đáp số.`;
  };

  const getMathAppliedForDay4 = () => {
    const hasNum = /\d+/.test(repair) || /\b(?:một|hai|ba|bốn|năm|sáu|bảy|tám|chín|mười)\s+(?:bạn|người|hộp|quả|chiếc|cái|thùng|bao|con|đội|nhóm|lớp|viên)\b/i.test(repair);
    if (hasNum) {
      return `Thực hiện chữa lại bài toán tuần ${weekNumber}: ${repair} Viết lời giải đúng hoàn chỉnh gồm 2 bước tính cụ thể kèm đáp số.`;
    }
    return `Thực hiện chữa lại bài toán tuần ${weekNumber} (${title}): ${repair} Vận dụng số liệu từ ví dụ (${example}) để sửa lại lời giải hoàn chỉnh gồm 2 bước tính có số liệu rõ ràng.`;
  };

  const mathDays = [
    {
      example: example,
      basic: `Phân tích ví dụ mẫu: ${example}. Viết lại các bước tính trung gian và giải thích quy tắc tìm ra kết quả.`,
      applied: `Áp dụng quy tắc từ ví dụ (${example}): Nếu mở rộng thêm 2 bước tính nữa với cùng quy luật số liệu thì giá trị tiếp theo là bao nhiêu? Giải thích bằng phép tính cụ thể.`,
      challenge: `Dựa vào ví dụ mẫu “${example}”, thử tìm một trường hợp đặc biệt hoặc số liệu lớn hơn có cùng quy luật.`,
      reasoning: `Trong ví dụ “${example}”, bước biến đổi nào là quan trọng nhất để tìm ra kết quả đúng?`,
      selfCheck: "Kiểm tra lại xem con đã hiểu rõ vì sao có từng con số trong ví dụ mẫu chưa.",
      drill: example,
      variant: basic,
      advanced: `Mở rộng từ ví dụ: ${example}`
    },
    {
      example: `Bài toán mẫu định hướng phương pháp: ${basic}`,
      basic: basic,
      applied: `Đổi dữ kiện trong bài tập “${basic}”: Nếu cộng thêm 5 đơn vị vào số liệu ban đầu hoặc thay đổi một điều kiện, kết quả thay đổi thế nào? Thực hiện phép tính chi tiết.`,
      challenge: `Thử giải bài toán “${basic}” bằng một cách khác hoặc nhẩm nhanh xem có rút ngắn được bước tính nào không.`,
      reasoning: `Khi thực hiện bài tập “${basic}”, con làm thế nào để kiểm tra tính chính xác của từng bước tính?`,
      selfCheck: "Dừng 1 phút: đối chiếu từng phép tính với thứ tự thực hiện phép toán.",
      drill: basic,
      variant: applied,
      advanced: `Biến thể kỹ thuật: ${basic}`
    },
    {
      example: `Tình huống thực tế mẫu cần giải quyết: ${applied}`,
      basic: `Tóm tắt bài toán thực tế sau bằng sơ đồ đoạn thẳng hoặc bảng số liệu: ${applied}. Ghi rõ đại lượng đã biết và đại lượng cần tìm.`,
      applied: getMathAppliedForDay2(),
      challenge: `Nếu bài toán “${applied}” có thêm một điều kiện phụ trong thực tế, hướng giải sẽ cần điều chỉnh thế nào?`,
      reasoning: `Với bài toán “${applied}”, vì sao việc tóm tắt hoặc vẽ mô hình giúp con chọn đúng phép tính?`,
      selfCheck: "Đọc lại câu hỏi của bài toán thực tế: đáp số đã có danh số và đơn vị đo chưa?",
      drill: applied,
      variant: challenge,
      advanced: `Nâng cao bài toán thực tế: ${applied}`
    },
    {
      example: `Thử thách tư duy cần tìm chiến lược: ${challenge}`,
      basic: `Thử nghiệm với trường hợp số nhỏ hơn của bài toán “${challenge}” để tìm quy luật trước khi giải trọn vẹn.`,
      applied: `Giải bài toán thử thách sau bằng ít nhất 1 chiến lược (lập bảng, vẽ sơ đồ hoặc thử ngược): ${challenge}`,
      challenge: challenge,
      reasoning: `Chiến lược hoặc heuristic nào đã giúp con mở nút thắt của bài toán “${challenge}”?`,
      selfCheck: "Ghi lại tên chiến lược tư duy con đã áp dụng để mở bài toán khó này.",
      drill: challenge,
      variant: basic,
      advanced: `Thử thách Olympic mở rộng: ${challenge}`
    },
    {
      example: `Tình huống có lỗi sai điển hình cần phân tích: ${repair}`,
      basic: repair,
      applied: getMathAppliedForDay4(),
      challenge: `Chỉ ra nguyên nhân sâu xa vì sao học sinh hay nhầm lẫn ở bước này và đặt ra 1 mẹo để ghi nhớ không mắc lại.`,
      reasoning: `Vì sao học sinh dễ mắc lỗi trong trường hợp “${repair}” và con làm thế nào để không lặp lại lỗi đó?`,
      selfCheck: "Kiểm tra lại lời giải đã chữa: đã thay thế hoàn toàn bước suy luận sai chưa?",
      drill: repair,
      variant: example,
      advanced: `Chữa sâu và phòng tránh lỗi: ${repair}`
    },
    {
      example: `Đề bài tổng hợp và trọng tâm ôn tập tuần ${weekNumber} (50 phút): Dựa trên ví dụ trọng tâm (${example}), thực hiện kiểm tra các nội dung: ${test}`,
      basic: `Đề thi Mini-test 50 phút (Tuần ${weekNumber}):\n- Câu 1 (Cơ bản - 3đ): Dựa vào ví dụ “${example}”, giải bài toán tương tự khi đổi số liệu.\n- Câu 2 (Kỹ thuật tính - 3đ): ${basic}\n- Câu 3 (Vận dụng - 2đ): ${applied}\n- Câu 4 (Olympic thử thách - 2đ): ${challenge}`,
      applied: `Tự chấm điểm bài thi tuần ${weekNumber} theo thang 10 điểm: Hoàn thành bài toán thực tế “${applied}” (3đ), câu thử thách “${challenge}” (2đ) và các câu nền (5đ). Trình bày sạch đẹp có danh số.`,
      challenge: `Câu hỏi điểm 10 trong đề thi: ${challenge}`,
      reasoning: `Sau khi hoàn thành đề kiểm tra về “${title}”, câu nào làm con mất nhiều thời gian nhất và vì sao?`,
      selfCheck: "Tự chấm điểm theo thang 10: Cơ bản (6đ), Vận dụng (2đ), Nâng cao (2đ). Trình bày sạch đẹp, có danh số rõ ràng.",
      drill: test,
      variant: challenge,
      advanced: `Tổng hợp năng lực tuần ${weekNumber}: ${test}`
    }
  ];

  const vietnameseDays = [
    {
      example: example,
      basic: `Đọc kỹ ngữ liệu hoặc yêu cầu mẫu: ${example}. Tìm 2 chi tiết quan trọng và nói thành 3 câu trọn ý trước khi viết.`,
      applied: `Dựa trên yêu cầu mẫu “${example}”, hãy nói 1 đoạn 4–5 câu cho bạn cùng bàn nghe, nêu rõ trình tự quan sát hoặc cảm nhận của con.`,
      challenge: `Tìm thêm 1 từ ngữ gợi cảm hoặc hình ảnh liên tưởng độc đáo phù hợp với ngữ liệu “${example}”.`,
      reasoning: `Trong phần mở đầu của bài “${title}”, chi tiết hoặc từ ngữ nào giúp người nghe hình dung rõ nhất?`,
      selfCheck: "Tự nói to trước gương hoặc nhờ người thân nghe 1 lượt để kiểm tra độ trôi chảy.",
      drill: example,
      variant: basic,
      advanced: `Mở rộng ngữ liệu đọc hiểu: ${example}`
    },
    {
      example: `Ngữ liệu định hướng lập dàn ý: ${basic}`,
      basic: basic,
      applied: `Thực hiện lập dàn ý theo yêu cầu “${basic}”: Viết 4 gạch đầu dòng tương ứng 4 ý chính vào vở, mỗi gạch đầu dòng là 1 câu ngắn gọn.`,
      challenge: `Sắp xếp lại trật tự 4 ý vừa lập theo trình tự thời gian hoặc không gian để bài viết logic hơn.`,
      reasoning: `Khi sắp xếp các ý cho chủ đề “${title}”, ý nào đóng vai trò làm trục chính xuyên suốt bài viết?`,
      selfCheck: "Đọc lại dàn ý: các ý đã nối tiếp nhau tự nhiên chưa, có ý nào bị trùng lặp không?",
      drill: basic,
      variant: applied,
      advanced: `Kỹ thuật lập dàn ý nâng cao: ${basic}`
    },
    {
      example: `Đề bài và ngữ cảnh viết đoạn văn: ${applied}`,
      basic: `Chuẩn bị viết theo yêu cầu “${applied}”: Viết 1 câu mở đoạn trực tiếp giới thiệu đối tượng và 1 câu kết đoạn nêu cảm nghĩ riêng.`,
      applied: applied,
      challenge: `Thêm 1 biện pháp so sánh hoặc nhân hóa vào đoạn văn “${applied}” để câu văn sinh động hơn.`,
      reasoning: `Đoạn văn viết cho chủ đề “${title}”, câu nào có hình ảnh hoặc chi tiết chân thật làm con hài lòng nhất?`,
      selfCheck: "Đọc liền mạch bản nháp: không dừng lại sửa từ khi đang viết để giữ mạch cảm xúc.",
      drill: applied,
      variant: challenge,
      advanced: `Bản viết hoàn chỉnh có cảm xúc: ${applied}`
    },
    {
      example: `Kỹ thuật viết sáng tạo mở rộng: ${challenge}`,
      basic: `Thử nghiệm cách diễn đạt mới: ${challenge}. Viết 2 phương án câu khác nhau rồi chọn phương án giàu hình ảnh hơn.`,
      applied: `Áp dụng cách viết sáng tạo vào bài văn: ${challenge}. Viết hoàn chỉnh 1 đoạn 5–6 câu gửi cho người thân hoặc thầy cô đọc.`,
      challenge: challenge,
      reasoning: `Cách diễn đạt thử nghiệm trong bài “${title}”, con thấy điều gì giúp câu văn khác biệt và truyền cảm hơn?`,
      selfCheck: "Kiểm tra xem câu văn sáng tạo có tự nhiên và phù hợp với lứa tuổi học sinh lớp 4 không.",
      drill: challenge,
      variant: basic,
      advanced: `Thử nghiệm phong cách diễn đạt: ${challenge}`
    },
    {
      example: `Mẫu câu hoặc đoạn văn cần soát lỗi: ${repair}`,
      basic: repair,
      applied: `Thực hiện biên tập và nâng cấp: ${repair}. Viết lại thành bản hoàn chỉnh gồm 5–7 câu rõ ý, không mắc lỗi lặp từ hay câu què.`,
      challenge: `Đọc to bản đã sửa thành tiếng, phát hiện 1 chỗ ngắt nghỉ chưa hợp lý và điều chỉnh dấu câu thích hợp.`,
      reasoning: `Sau khi chỉnh sửa bài viết về “${title}”, lỗi nào con thấy cần chú ý tránh nhất trong những bài viết sau?`,
      selfCheck: "Rà soát 4 bước: đúng ý, câu đủ thành phần, dùng từ chính xác, không sai chính tả.",
      drill: repair,
      variant: example,
      advanced: `Biên tập chuyên sâu: ${repair}`
    },
    {
      example: `Khung đề kiểm tra Tiếng Việt tổng hợp tuần ${weekNumber} (50 phút): Dựa trên ngữ liệu trọng tâm (${example}), hoàn thành các phần kiểm tra: ${test}`,
      basic: `Đề kiểm tra Tiếng Việt 50 phút (Tuần ${weekNumber}):\n- Phần 1 - Đọc hiểu & Phân tích (15 phút): Đọc văn bản ngữ liệu về “${title}” (ngữ liệu: “${example}”) và trả lời 3 câu hỏi trọn ý: nêu ý chính, tìm 2 chi tiết đắt giá và nêu cảm nhận.\n- Phần 2 - Luyện câu & Viết đoạn (25 phút): ${applied}\n- Phần 3 - Soát lỗi 4 bước (10 phút): ${repair}`,
      applied: `Tự chấm điểm bài thi tuần ${weekNumber} theo thang điểm 10: Đọc hiểu (3đ), Viết đoạn văn theo đề “${applied}” (5đ), Chính tả và soát lỗi “${repair}” (2đ). Đạt tối đa 10/10.`,
      challenge: `Yêu cầu sáng tạo đạt điểm tối đa: ${challenge}`,
      reasoning: `Đọc to toàn bộ bài viết kiểm tra tuần này về “${title}”, con tự đánh giá bài làm đạt mức mấy trên thang điểm 10?`,
      selfCheck: "Tự chấm điểm theo thang 10: Đọc hiểu (3đ), Viết đoạn văn (5đ), Chính tả và chữ đẹp (2đ). Đạt tối đa 10/10.",
      drill: test,
      variant: challenge,
      advanced: `Đánh giá năng lực Tiếng Việt tuần ${weekNumber}: ${test}`
    }
  ];

  const daysData = isMath ? mathDays : vietnameseDays;

  const getVisualForTopic = (t, s) => {
    if (s !== "math") return null;
    if (/dãy số|quy luật/i.test(t)) return { type: "sequence", sequence: [2, 6, 12, 20, 30, 42], steps: ["+4", "+6", "+8", "+10", "+12"] };
    if (/phân số qua hình ảnh/i.test(t)) return { type: "fraction", numerator: 3, denominator: 8, label: "Phân số 3/8" };
    if (/cộng trừ phân số/i.test(t)) return { type: "fraction", numerator: 5, denominator: 8, label: "3/8 + 2/8 = 5/8" };
    if (/chu vi/i.test(t)) return { type: "grid-area", length: 14, width: 9, area: 126, unit: "cm" };
    if (/diện tích/i.test(t)) return { type: "grid-area", length: 9, width: 6, area: 54, unit: "cm" };
    if (/sơ đồ hóa|bài khó|tổng.*hiệu/i.test(t)) return { type: "sum-diff", larger: 36, smaller: 28, diff: 8, total: 64, labelA: "Số lớn (An)", labelB: "Số bé (Bình)" };
    if (/singapore|phần.*toàn thể/i.test(t)) return { type: "part-whole", total: 120, parts: 5, filledParts: 3, unitLabel: "1 phần", wholeLabel: "Dung tích bể" };
    return null;
  };

  return {
    alignment: `Kết nối tri thức lớp 4 là trục; tuần ${weekNumber} mở rộng bằng ${isMath ? "mô hình hóa và suy luận phù hợp học sinh giỏi" : "đọc sâu, quan sát và biên tập đúng lứa tuổi"}.`,
    days: daysData.map((d, index) => ({
      day: ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"][index],
      title: dayTitles[index],
      objective: dayObjectives[index],
      example: d.example,
      basic: d.basic,
      applied: d.applied,
      challenge: d.challenge,
      visual: getVisualForTopic(title, subject),
      reasoning: d.reasoning,
      selfCheck: d.selfCheck,
      drill: d.drill,
      variant: d.variant,
      advanced: d.advanced
    }))
  };
}

// Mỗi tuần đều có một nhịp học cụ thể. Sáu tuần đầu dùng nội dung cầu nối
// viết tay ở trên; các tuần còn lại được dựng từ mục tiêu tuần để không có
// mục tiêu nào chỉ là một tiêu đề trống trong giao diện.
function createDetailedDailyPlan(item, subject, weekNumber, phase) {
  const authored = authoredDailyPlan(item, subject, weekNumber, phase);
  if (authored) return authored;
  const title = item[0];
  const focus = item[1];
  const isMath = subject === "math";
  const phaseLens = {
    P1: "bắt đầu bằng hình vẽ hoặc ví dụ nhỏ của lớp 3 rồi mới tăng độ khó",
    P2: "dùng bảng, tia số hoặc sơ đồ thanh trước khi viết phép tính",
    P3: "vẽ hình và ghi đơn vị ở từng bước trước khi tính",
    P4: "thử một trường hợp nhỏ, lập bảng và nói điều luôn đúng",
    P5: "chia trường hợp có tổ chức, tìm ít nhất hai hướng giải",
    P6: "chọn chiến lược, giải độc lập rồi viết lại lời giải cho người khác hiểu"
  }[phase.id] || "nói lại cách nghĩ bằng lời của mình";

  if (isMath) {
    const example = /phân số/i.test(title)
      ? "Tô cùng một phần của hai dải giấy, chẳng hạn 2/4 và 1/2, rồi giải thích vì sao chúng bằng nhau."
      : /hình|góc|chu vi|diện tích/i.test(title)
        ? "Vẽ một hình đơn giản có số đo đã biết, ghi số đo lên hình rồi kiểm tra kết quả bằng cách đếm/đo lại."
        : /bảng|biểu đồ|dữ liệu/i.test(title)
          ? "Đọc tên bảng, đơn vị và chú giải; nêu một câu trả lời chỉ dùng một dữ kiện và một câu dùng hai dữ kiện."
          : /đếm|tổ hợp/i.test(title)
            ? "Lập bảng lựa chọn cho một tình huống nhỏ, đánh số từng trường hợp để không bỏ sót hoặc đếm lặp."
            : `Làm một ví dụ nhỏ về “${title}”, gạch dữ kiện đã dùng và nói vì sao bước đầu tiên hợp lý.`;
    const basic = /hình|góc|chu vi|diện tích/i.test(title)
      ? "Làm 3 hình từ dễ đến vừa; vẽ đủ ký hiệu, ghi đơn vị và kiểm tra một cạnh/góc còn thiếu."
      : /bảng|biểu đồ|dữ liệu/i.test(title)
        ? "Đọc 4–6 giá trị, sắp xếp hoặc so sánh, rồi tự đặt 2 câu hỏi có thể trả lời từ bảng."
        : `Làm 3 bài cơ bản về “${title}”; sau mỗi bài viết một dòng nêu quy tắc hoặc phép tính đã dùng.`;
    const applied = /bảng|biểu đồ|dữ liệu/i.test(title)
      ? "Tạo một bảng nhỏ từ số liệu trong gia đình/lớp học và rút ra hai nhận xét có bằng chứng."
      : `Đưa “${title}” vào một tình huống đời sống; dùng sơ đồ, bảng hoặc hình vẽ trước khi tính và ghi kết luận có đơn vị.`;
    const challenge = phase.id === "P1"
      ? "Thử thách nhẹ: đổi một dữ kiện, dự đoán đáp án thay đổi thế nào rồi kiểm tra bằng ví dụ nhỏ."
      : phase.id === "P2" || phase.id === "P3"
        ? "Thử thách mở rộng: giải một biến thể bằng sơ đồ thanh hoặc hình vẽ, sau đó kiểm tra bằng cách thứ hai."
        : "Thử thách Olympic vừa sức: chia trường hợp, tìm quy luật hoặc giải theo hai cách; ghi rõ vì sao không bỏ sót trường hợp.";
    return {
      alignment: `Kết nối tri thức lớp 3–4 · tuần ${weekNumber}: ${focus} · ${phaseLens}.`,
      days: [
        { day: "Thứ 2", title: `Hiểu lõi · ${title}`, objective: `Nắm ý chính của “${title}” và nói lại bằng lời của Bách.`, example, basic: "Làm 2 câu khởi động từ kiến thức đã biết; chỉ dùng giấy, bút và vật thật nếu cần.", applied: "Vẽ hoặc lập mô hình cho một tình huống ngắn trước khi giải.", reasoning: "Điều gì luôn đúng trong bài này? Điều gì chỉ đúng vì dữ kiện cụ thể?", selfCheck: "Khoanh dữ kiện, gạch câu hỏi và kiểm tra mình có dùng đúng đơn vị không." },
        { day: "Thứ 3", title: `Luyện có hướng dẫn · ${title}`, objective: "Chuyển từ hình/bảng/lời nói sang phép tính hoặc lập luận rõ ràng.", example: "Giải lại ví dụ mẫu nhưng che lời giải; Bách nói từng bước trước khi viết.", basic, applied: "Làm một bài có dữ kiện thay đổi; giữ nguyên cách nghĩ nhưng điều chỉnh bước tính.", reasoning: "Vì sao chọn cách này thay vì thử ngẫu nhiên hoặc làm thật dài?", selfCheck: "So sánh với ví dụ mẫu, chỉ sửa tối đa 3 lỗi và ghi nguyên nhân từng lỗi." },
        { day: "Thứ 4", title: `Vận dụng thực tế · ${title}`, objective: "Dùng kiến thức trong một bài toán có lời văn hoặc nhiều dữ kiện hơn.", example: "Đọc đề hai lần: lần một hiểu tình huống, lần hai gạch số liệu và điều phải tìm.", basic, applied, reasoning: "Nếu bỏ một dữ kiện thì bài còn giải được không? Nếu không, dữ kiện đó giữ vai trò gì?", selfCheck: "Ước lượng trước; đáp số phải hợp lý với cỡ số và câu hỏi." },
        { day: "Thứ 5", title: `Thử thách Singapore/Olympic · ${title}`, objective: "Chọn một heuristic phù hợp và trình bày được chiến lược.", example: "Làm phiên bản nhỏ trước, lập bảng hoặc dùng sơ đồ thanh; sau đó quay lại bài chính.", basic: "Làm một bài nền để chắc kỹ thuật trước khi thử bài lạ.", applied: "Giải bài thử thách ở mức vừa sức; được nhận tối đa hai gợi ý theo từng nấc.", reasoning: "Có cách giải khác không? Cách nào ngắn hơn, cách nào dễ kiểm tra hơn?", selfCheck: "Ghi chiến lược đã thử, chỗ bế tắc và bước tiếp theo thay vì chỉ ghi đáp số." },
        { day: "Thứ 6", title: `Chữa lỗi và dạy lại · ${title}`, objective: "Nhận diện lỗi kiến thức, lỗi chiến lược và lỗi cẩu thả.", example: "Đọc một lời giải sai, tìm đúng dòng sai rồi sửa bằng lời của mình.", basic: "Làm lại 2 câu từng sai mà không xem đáp án.", applied: "Tự tạo một bài tương tự, đổi ít nhất một điều kiện và giải cho người khác hiểu.", reasoning: "Lỗi này sẽ xuất hiện lại trong tình huống nào? Cách phòng tránh là gì?", selfCheck: "Đọc lời giải thành tiếng, kiểm tra phép ngược và câu kết luận." },
        { day: "Thứ 7", title: `Mini-test tuần ${weekNumber} · ${title}`, objective: "Đo mức hiểu thật qua câu cơ bản, vận dụng và một câu suy luận.", example: "Làm theo ba lượt: câu chắc, câu vừa, câu khó; không mắc kẹt quá 8 phút.", basic: "4–6 câu cơ bản, không dùng máy tính bỏ túi.", applied: "Một bài thực tế hai bước hoặc một bài cần mô hình hóa.", reasoning: "Chọn một câu khó để viết hướng giải dù chưa giải xong.", selfCheck: "Chấm riêng độ đúng, chiến lược, trình bày và ghi mục tiêu ôn lại tuần sau." }
      ]
    };
  }

  const readingLens = /Đọc|văn bản|truyện|Cảm nhận/i.test(title)
    ? "tìm ý chính, chi tiết làm bằng chứng và điều nhân vật/người viết muốn nói"
    : /Tả|quan sát/i.test(title)
      ? "quan sát thật bằng nhiều giác quan nhưng chỉ chọn chi tiết có ích"
      : "giữ một ý chính, sắp xếp câu theo trình tự và đọc thành tiếng để tự sửa";
  return {
    alignment: `Kết nối tri thức lớp 3–4 · tuần ${weekNumber}: ${focus} · ${readingLens}.`,
    days: [
      { day: "Thứ 2", title: `Đọc và nói · ${title}`, objective: `Hiểu yêu cầu “${title}” và nói được dàn ý bằng 3–5 câu.`, example: "Đọc một văn bản/đoạn mẫu ngắn, gạch từ khóa và chỉ ra một chi tiết đáng nhớ.", basic: "Trả lời 3 câu hỏi bằng câu trọn ý; không chép nguyên văn khi không cần.", applied: "Kể lại hoặc mô tả bằng lời của Bách, giữ đúng trình tự.", reasoning: "Chi tiết nào là bằng chứng? Nếu bỏ chi tiết đó, ý chính có thay đổi không?", selfCheck: "Nói lại mục tiêu bài bằng một câu và kiểm tra mọi nhận xét đều có căn cứ." },
      { day: "Thứ 3", title: `Lập dàn ý · ${title}`, objective: "Chọn ý chính, sắp xếp 3–5 ý và bỏ ý lặp.", example: "Viết các từ khóa lên giấy, nối bằng mũi tên rồi chuyển thành câu mở–phát triển–kết.", basic: "Lập hai dàn ý ngắn cho cùng chủ đề, mỗi dàn ý không quá 5 ý.", applied: "Chọn dàn ý tự nhiên hơn và giải thích vì sao chọn.", reasoning: "Ý nào làm đoạn/bài tiến lên? Ý nào chỉ lặp lại điều đã nói?", selfCheck: "Đọc dàn ý thành tiếng; nếu nhảy ý, thêm một từ nối hoặc đổi thứ tự." },
      { day: "Thứ 4", title: `Viết bản nháp · ${title}`, objective: "Viết đoạn/bài theo dàn ý, ưu tiên câu rõ và chi tiết thật.", example: "Viết câu mở nêu chủ đề, sau đó thêm 2–3 chi tiết nhìn/nghe/hành động phù hợp.", basic: "Viết 7–10 câu, mỗi câu phục vụ một ý; dùng ít nhất hai từ nối đúng nghĩa.", applied: "Thêm một chi tiết riêng của Bách và một câu thể hiện cảm xúc vừa đủ.", reasoning: "Câu nào là trục chính? Câu nào có thể cắt mà ý không mất?", selfCheck: "Đọc liền mạch một lượt, chưa sửa từng chữ khi đang viết." },
      { day: "Thứ 5", title: `Góc nhìn văn học thế giới · ${title}`, objective: "Học một kỹ thuật kể/miêu tả từ tác phẩm phù hợp lứa tuổi rồi tự viết bản riêng.", example: "Quan sát cách một tác giả mở cảnh, tạo hình ảnh hoặc cho nhân vật lựa chọn; không chép câu chữ.", basic: "Viết lại 3 câu theo kỹ thuật vừa học nhưng dùng nhân vật và trải nghiệm của Bách.", applied: "Đổi góc nhìn, thêm đối thoại hoặc tạo một hình ảnh so sánh tự nhiên.", reasoning: "Kỹ thuật nào giúp bài rõ hơn, kỹ thuật nào chỉ làm câu dài hơn?", selfCheck: "Bỏ câu bắt chước văn mẫu; giữ giọng kể hồn nhiên, đúng tuổi và logic." },
      { day: "Thứ 6", title: `Biên tập · ${title}`, objective: "Sửa ba điểm ảnh hưởng lớn nhất đến mạch lạc và độ chính xác.", example: "Đánh dấu I–C–T–CT: ý, câu, từ, chính tả; mỗi lượt chỉ sửa một loại lỗi.", basic: "Tìm và sửa một câu lặp, một từ mơ hồ và một lỗi dấu câu.", applied: "Viết bản 2, giữ lại ý hay của bản 1 nhưng làm câu sáng rõ hơn.", reasoning: "Bản 2 tốt hơn ở đâu? Chỗ nào vẫn cần người đọc hỏi lại?", selfCheck: "Đọc thành tiếng, gạch câu vấp và chọn tối đa 3 chỗ để viết lại." },
      { day: "Thứ 7", title: `Mini-test tuần ${weekNumber} · ${title}`, objective: "Đọc, lập ý, viết và tự nhận xét bằng tiêu chí lớp 4.", example: "Làm theo nhịp: đọc 10 phút, lập ý 5 phút, viết 20 phút, sửa 10 phút.", basic: "Một bài đọc hiểu ngắn hoặc bài tập dùng từ/câu đúng mục tiêu tuần.", applied: "Viết đoạn/bài 8–12 câu theo đề mới nhưng cùng kỹ năng.", reasoning: "Chọn một câu hay và một câu cần viết lại; nói rõ lý do.", selfCheck: "Chấm mạch lạc, diễn đạt, chính tả và tính riêng; lưu bản 1 và bản 2." }
    ]
  };
}

function cleanExample(text) {
  if (typeof text !== "string" || !text) return text || "";
  return text
    .replace(/^(?:Ví dụ(?: của ngày| đã giải| mẫu)?:\s*)+/i, "")
    .replace(/^Neo lại ví dụ:\s*/i, "")
    .trim();
}

function getMathSkillType(day, item) {
  const fullText = [
    day?.title,
    day?.objective,
    day?.example,
    day?.basic,
    day?.applied,
    item?.[0],
    item?.[1]
  ].filter(Boolean).join(" ");

  if (/so sánh|sắp xếp|thứ tự|lớn hơn|bé hơn|tăng dần|giảm dần|hàng cao nhất|nằm giữa/i.test(fullText) && !/cộng|trừ|bù trừ|tách số/i.test(day?.title || "")) {
    return "comparison";
  }
  if (/làm tròn|ước lượng/i.test(fullText)) {
    return "rounding";
  }
  if (/đọc số|viết số|cấu tạo số|hàng và lớp|giá trị hàng|chữ số|triệu|nghìn|trăm/i.test(fullText)) {
    return "place_value";
  }
  if (/bù trừ|tách số|gộp số|cộng|trừ|tổng|hiệu|số tròn/i.test(fullText)) {
    return "addition_subtraction";
  }
  if (/nhân|chia|gấp đôi|gấp ba|chia đều|thương|số dư|tích|thừa số|bảng nhân|bảng chia|phân phối/i.test(fullText)) {
    return "multiplication_division";
  }
  if (/biểu thức|tìm x|số bị che|dấu ngoặc/i.test(fullText)) {
    return "expressions";
  }
  if (/dãy số|quy luật|chẵn lẻ|bội|ước|tổ hợp|trường hợp|ngăn kéo|dirichlet/i.test(fullText)) {
    return "sequences_patterns";
  }
  if (/phân số|thập phân/i.test(fullText)) {
    return "fractions_decimals";
  }
  if (/hình|chu vi|diện tích|góc|đơn vị|thời gian|đo lường|mét|vuông|cm/i.test(fullText)) {
    return "geometry_measurement";
  }
  return "general_problem_solving";
}

function normalizeMathTask(text, weekNumber = 1, dayIndex = 0) {
  if (typeof text !== "string" || !text) return text;
  let res = text;

  // 1. Ordering normalization: Replace vague ordering prompts with concrete data
  const hasOrderingList =
    /(?:sắp xếp|thứ tự)[^:：\n]*[:：]\s*[\d(]/i.test(res) ||
    /(?:sắp xếp|thứ tự)[^(\n]*\(\s*\d+(?:[.,]\d+)*(?:\s*[,;]\s*\d+(?:[.,]\d+)*)+\s*\)/i.test(res) ||
    /(?:sắp xếp|thứ tự)\s+\d+(?:[.,]\d+)*(?:\s*[,;]\s*\d+(?:[.,]\d+)*)+/i.test(res) ||
    /\b(?:cho\s+)?(?:các\s+|dãy\s+)?số[^:：\n]*[:：]\s*\d+(?:[.,]\d+)*(?:\s*[,;]\s*\d+(?:[.,]\d+)*)+/i.test(res) ||
    /\d+(?:[.,]\d+)*(?:\s*[,;]\s*\d+(?:[.,]\d+)*)+[\s,;]*(?:hãy\s+)?(?:sắp xếp|thứ tự)/i.test(res) ||
    /\(\s*\d+(?:[.,]\d+)*(?:\s*[,;]\s*\d+(?:[.,]\d+)*)+\s*\)[^.!?\n]*(?:sắp xếp|thứ tự)/i.test(res);

  if (!hasOrderingList) {
    let orderingNormalized = false;
    res = res.replace(
      /(?:đọc\s+)?4[–-]6\s*giá trị,\s*sắp xếp(?:(?:\s*hoặc\s*so sánh)?(?:\s+theo\s+thứ\s+tự)?(?:\s+(?:đề\s+bài\s+)?yêu\s+cầu)?(?:\s+(?:tăng|giảm)\s+dần)?(?:\s+từ\s+(?:bé\s+đến\s+lớn|lớn\s+đến\s+bé))?)*(?:[;,]\s*sắp xếp(?:\s+theo\s+thứ\s+tự)?(?:\s+(?:tăng|giảm)\s+dần)?)?/i,
      (match) => {
        orderingNormalized = true;
        const base = 10000 + weekNumber * 1500 + dayIndex * 300;
        const nums = [base + 200, base + 1800, base - 500, base + 2400, base + 900].map(n => n.toLocaleString("vi-VN"));
        const dir = /giảm\s+dần|lớn\s+đến\s+bé/i.test(match) ? "giảm dần" : "tăng dần";
        return `đọc 5 giá trị (${nums.join("; ")}), sắp xếp theo thứ tự ${dir}`;
      }
    );
    if (!orderingNormalized) {
      res = res.replace(
        /sắp xếp hoặc so sánh(?:(?:\s+theo\s+thứ\s+tự)?(?:\s+(?:đề\s+bài\s+)?yêu\s+cầu)?(?:\s+(?:tăng|giảm)\s+dần)?)*(?:[;,]\s*sắp xếp(?:\s+(?:các|\d+)\s+số)?\s+theo\s+thứ\s+tự(?:\s+(?:tăng|giảm)\s+dần)?)?(?!\s*[:：\d(])/i,
        (match) => {
          orderingNormalized = true;
          const base = 12000 + weekNumber * 1000 + dayIndex * 250;
          const nums = [base + 450, base + 2100, base - 800, base + 3500, base + 1200].map(n => n.toLocaleString("vi-VN"));
          const dir = /giảm\s+dần|lớn\s+đến\s+bé/i.test(match) ? "giảm dần" : "tăng dần";
          return `sắp xếp 5 số theo thứ tự ${dir} (${nums.join("; ")})`;
        }
      );
    }
    if (!orderingNormalized) {
      res = res.replace(
        /sắp xếp(?:\s+(?:các|\d+)\s+số)?\s+theo\s+thứ\s+tự(?:\s+(?:đề\s+bài\s+)?yêu\s+cầu)?(?:\s+(?:tăng|giảm)\s+dần)?(?:\s+theo\s+thứ\s+tự(?:\s+(?:đề\s+bài\s+)?yêu\s+cầu)?(?:\s+(?:tăng|giảm)\s+dần)?)*(?:[;,]\s*sắp xếp(?:\s+(?:các|\d+)\s+số)?\s+theo\s+thứ\s+tự(?:\s+(?:tăng|giảm)\s+dần)?)*(?!\s*[:：\d(])/i,
        (match) => {
          orderingNormalized = true;
          const base = 15000 + weekNumber * 800 + dayIndex * 400;
          const nums = [base + 320, base + 1540, base - 410, base + 2100, base + 950].map(n => n.toLocaleString("vi-VN"));
          const dir = /giảm\s+dần|lớn\s+đến\s+bé/i.test(match) ? "giảm dần" : "tăng dần";
          return `sắp xếp 5 số theo thứ tự ${dir} (${nums.join("; ")})`;
        }
      );
    }
  }

  // 2. Prices & Money normalization: Replace vague price/money prompts with real amounts and items
  res = res.replace(/và bài tiền(?!\s*[:：\d(])/gi, "và bài toán mua 3 quyển vở giá 12.000 đồng/quyển từ tờ 50.000 đồng");
  res = res.replace(/ví dụ tính số giấy phủ mặt bàn và tiền mua(?!\s*[:：\d(])/gi, "ví dụ tính diện tích phủ mặt bàn 2 m² và tiền mua giấy 45.000 đồng (đơn giá 22.500 đồng/m²)");
  res = res.replace(/bài toán (?:về giá|tiền)(?!\s*[:：\d(])/gi, "bài toán mua hàng với giá 35.000 đồng và 65.000 đồng từ tờ 100.000 đồng");
  res = res.replace(
    /bảng giá(?:\s*đồ\s*dùng)?(?!\s*trị|\s*đồ\s*dùng\s*\(|\s*[:：\d(])(?![^.!?\n]*\b\d+[\d.,]*\s*(?:đồng|đ)\b)/gi,
    "bảng giá đồ dùng (vở 12.000 đồng, bút 8.000 đồng)"
  );

  // 3. Between numbers normalization: Replace vague between prompts with concrete boundaries
  res = res.replace(/tìm (?:một )?số(?: tròn trăm| tròn chục)? nằm giữa(?!\s*(?:hai số )?\d)/gi, () => {
    const low = 20000 + weekNumber * 1000 + dayIndex * 100;
    const high = low + 3000;
    return `tìm một số tròn trăm nằm giữa hai số ${low.toLocaleString("vi-VN")} và ${high.toLocaleString("vi-VN")}`;
  });
  res = res.replace(/nằm giữa hai số(?!\s*[:：\d])/gi, () => {
    const low = 15000 + weekNumber * 500;
    const high = low + 2500;
    return `nằm giữa hai số ${low.toLocaleString("vi-VN")} và ${high.toLocaleString("vi-VN")}`;
  });
  res = res.replace(/số ở giữa(?!\s*[:：\d])/gi, () => {
    const low = 10000 + weekNumber * 500;
    const high = low + 1000;
    return `số ở giữa hai mốc ${low.toLocaleString("vi-VN")} và ${high.toLocaleString("vi-VN")}`;
  });

  // 4. Vague phrase normalization
  res = res.replace(/ví dụ của ngày/gi, "ví dụ");
  res = res.replace(/bài tập bên dưới|bài bên dưới/gi, "bài tập");
  res = res.replace(/hai số đã cho(?!\s*[:：\d(])/gi, () => {
    const n1 = (25000 + weekNumber * 1200).toLocaleString("vi-VN");
    const n2 = (38000 + weekNumber * 1400).toLocaleString("vi-VN");
    return `hai số ${n1} và ${n2}`;
  });
  res = res.replace(/từ hai số trên(?!\s*[:：\d(])/gi, "từ hai số 307.406 và 8.594");

  return res;
}

function normalizeMathDay(day, weekNumber, dayIndex) {
  if (!day || typeof day !== "object") return day;
  const copy = { ...day };
  const keys = ["title", "objective", "example", "basic", "applied", "reasoning", "selfCheck", "drill", "variant", "advanced", "challenge", "hint", "warmup", "discover", "lesson", "worked", "exercises"];
  for (const k of keys) {
    if (typeof copy[k] === "string") {
      copy[k] = normalizeMathTask(copy[k], weekNumber, dayIndex);
    }
  }
  return copy;
}

function createConcreteLesson(item, subject, weekNumber, dayIndex, rawDay = null) {
  const day = subject === "math" ? normalizeMathDay(rawDay, weekNumber, dayIndex) : rawDay;
  const title = item[0];
  if (subject === "math") {
    const skillType = getMathSkillType(day, item);

    const domainDefaults = {
      comparison: {
        discover: "So sánh các số cùng số chữ số từ hàng cao nhất bên trái sang phải; khi gặp hàng đầu tiên có chữ số khác nhau, số nào có chữ số lớn hơn thì số đó lớn hơn.",
        warmup: "Đọc các số cần so sánh; xác định hàng cao nhất và tìm hàng đầu tiên có chữ số khác nhau trước khi chọn dấu so sánh.",
        hint: "Gợi ý 1: Đếm số chữ số của mỗi số.\nGợi ý 2: So sánh lần lượt từng hàng từ trái sang phải.\nGợi ý 3: Chọn dấu thích hợp hoặc sắp xếp theo thứ tự đề bài yêu cầu.",
        variant: "Đổi một chữ số ở hàng cao nhất của một số rồi so sánh lại các số mới.",
        drill: "So sánh 52.080 và 49.999; giải thích vì sao chữ số hàng chục nghìn quyết định kết quả.",
        check: "Khoanh chữ số ở hàng đầu tiên khác nhau từ trái sang phải để đối chiếu lại kết quả.",
        challenge: "Tìm chữ số thích hợp để điền vào ô trống sao cho thứ tự so sánh luôn đúng."
      },
      rounding: {
        discover: "Quan sát chữ số ngay bên phải hàng cần làm tròn: nếu từ 5 trở lên thì tăng 1 đơn vị ở hàng làm tròn; nếu bé hơn 5 thì giữ nguyên.",
        warmup: "Xác định đúng hàng cần làm tròn và quan sát chữ số ngay bên phải của hàng đó.",
        hint: "Gợi ý 1: Gạch chân chữ số ở hàng cần làm tròn.\nGợi ý 2: So sánh chữ số ngay bên phải với 5.\nGợi ý 3: Viết lại số đã làm tròn với các chữ số hàng sau chuyển thành 0.",
        variant: "Đổi chữ số ngay bên phải hàng làm tròn thành 5 rồi làm tròn lại.",
        drill: "Làm tròn 3.648 đến hàng trăm (3.600) và hàng nghìn (4.000).",
        check: "Kiểm tra chữ số ngay bên phải hàng làm tròn đã xét đúng điều kiện chưa.",
        challenge: "Tìm số tự nhiên lớn nhất và bé nhất khi làm tròn đến hàng trăm đều được 3.500."
      },
      place_value: {
        discover: "Dùng bảng Hàng chục nghìn | nghìn | trăm | chục | đơn vị. Đặt từng chữ số vào đúng cột rồi đọc và phân tích giá trị từng hàng từ trái sang phải.",
        warmup: "Không nhìn máy tính: đọc số 48.305 trong ví dụ. Sau đó nói chữ số ở hàng chục nghìn, hàng nghìn, hàng trăm, hàng chục và hàng đơn vị.",
        hint: "Gợi ý 1: Viết số vào bảng giá trị hàng.\nGợi ý 2: Xác định giá trị của từng chữ số.\nGợi ý 3: Viết thành tổng các hàng.",
        variant: "Đổi vị trí hai chữ số để tạo số mới rồi phân tích lại giá trị từng hàng.",
        drill: "48.305 = 40.000 + 8.000 + 300 + 5; chỉ ra chữ số hàng chục nghìn và hàng trăm.",
        check: "Đếm đủ số chữ số để không bỏ sót chữ số 0 ở các hàng giữa.",
        challenge: "Dùng các chữ số đã cho lập số lớn nhất và số bé nhất có năm chữ số khác nhau."
      },
      addition_subtraction: {
        discover: "Nhận diện số gần tròn để dùng phương pháp bù trừ hoặc tách số theo hàng, sau đó kiểm tra lại bằng phép tính ngược.",
        warmup: "Tìm số hạng gần số tròn nhất để xác định phần bù cần thêm hoặc bớt trước khi tính.",
        hint: "Gợi ý 1: Làm tròn số gần nhất.\nGợi ý 2: Bù hoặc trừ phần đã làm tròn.\nGợi ý 3: Kiểm tra bằng phép tính ngược.",
        variant: "Đổi một số hạng trong phép tính thành số tròn gần nhất rồi tính nhẩm lại.",
        drill: "398 + 27 = 400 + 27 − 2 = 425; giải thích vì sao phải trừ 2.",
        check: "Ước lượng tổng hoặc hiệu trước khi kết luận đáp số.",
        challenge: "Tính nhanh tổng dãy số bằng cách nhóm các cặp số tạo thành số tròn."
      },
      multiplication_division: {
        discover: "Dùng tính chất phân phối hoặc gấp đôi liên tiếp để nhân nhẩm; khi chia, ước lượng thương và nhớ số dư luôn bé hơn số chia.",
        warmup: "Xác định phép tính chính, nhẩm bảng nhân hoặc ước lượng thương gần đúng trước khi đặt tính.",
        hint: "Gợi ý 1: Tách thừa số thành số tròn và đơn vị.\nGợi ý 2: Nhân từng phần rồi cộng lại.\nGợi ý 3: Thử lại bằng phép chia ngược.",
        variant: "Tách một thừa số thành tích của hai số nhỏ hơn rồi tính nhẩm theo thứ tự mới.",
        drill: "15 × 16 = 15 × 2 × 8 = 30 × 8 = 240; giải thích từng bước nhẩm.",
        check: "Kiểm tra tích bằng phép chia hoặc kiểm tra thương nhân số chia cộng số dư.",
        challenge: "Tính nhanh biểu thức bằng cách đưa thừa số chung ra ngoài."
      },
      expressions: {
        discover: "Thực hiện trong ngoặc trước, ngoài ngoặc sau; nhân chia trước, cộng trừ sau. Muốn tìm thành phần chưa biết, dùng phép tính ngược.",
        warmup: "Gạch chân phép tính cần thực hiện đầu tiên theo quy tắc thứ tự phép tính.",
        hint: "Gợi ý 1: Xác định thứ tự các phép tính.\nGợi ý 2: Tính từng bước và ghi rõ giá trị trung gian.\nGợi ý 3: Thay kết quả vào biểu thức ban đầu để kiểm tra.",
        variant: "Thêm dấu ngoặc đơn vào biểu thức để thay đổi thứ tự và ra kết quả mới.",
        drill: "6 + 4 × 5 = 6 + 20 = 26; giải thích vì sao không tính (6 + 4) trước.",
        check: "Kiểm tra đã tuân thủ đúng thứ tự phép tính và dấu ngoặc chưa.",
        challenge: "Điền các dấu phép tính thích hợp để biểu thức đạt giá trị yêu cầu."
      },
      sequences_patterns: {
        discover: "Lập bảng hoặc tính khoảng cách giữa các số liên tiếp để tìm quy luật; chỉ kết luận khi quy luật đúng với ít nhất ba bước.",
        warmup: "Quan sát ba số đầu tiên của dãy và tìm quy tắc thay đổi giữa hai số liền nhau.",
        hint: "Gợi ý 1: Tính hiệu giữa các số liền kề.\nGợi ý 2: Xác định quy luật tăng, giảm hoặc lặp lại.\nGợi ý 3: Thử quy luật với số hạng tiếp theo.",
        variant: "Thay đổi khoảng cách quy luật thêm 1 đơn vị rồi viết 3 số tiếp theo.",
        drill: "Dãy 4, 9, 14, 19, 24 tăng 5 mỗi bước; tìm số hạng thứ 10 của dãy.",
        check: "Đọc lại từng số hạng và kiểm tra khoảng cách có đồng nhất không.",
        challenge: "Tìm số hạng thứ 20 của dãy số cách đều và nêu công thức tổng quát."
      },
      fractions_decimals: {
        discover: "Dùng sơ đồ dải giấy hoặc hình vẽ chia phần bằng nhau để nối phân số với số đo thực tế trước khi so sánh hoặc tính toán.",
        warmup: "Xác định mẫu số (số phần bằng nhau) và tử số (số phần lấy) trên hình vẽ hoặc dải giấy.",
        hint: "Gợi ý 1: Vẽ hình biểu diễn phân số.\nGợi ý 2: Quy đồng mẫu số nếu cần so sánh.\nGợi ý 3: Rút gọn phân số về dạng tối giản.",
        variant: "Tìm một phân số bằng phân số đã cho nhưng có mẫu số gấp đôi.",
        drill: "Tô 3/8 hình chữ nhật và tìm phân số bằng 1/2 có mẫu số 10.",
        check: "Mẫu số là số phần bằng nhau; kiểm tra đúng đơn vị đo.",
        challenge: "Tạo hai cách biểu diễn cùng một lượng rồi giải thích cách nào giúp tính nhanh hơn."
      },
      geometry_measurement: {
        discover: "Vẽ hình phác thảo, ghi đầy đủ kích thước và đơn vị đo lên hình trước khi áp dụng công thức tính chu vi hoặc diện tích.",
        warmup: "Đọc kĩ đề bài, kiểm tra đơn vị đo của các kích thước và đổi về cùng một đơn vị nếu cần.",
        hint: "Gợi ý 1: Vẽ hình và ghi số đo.\nGợi ý 2: Chọn công thức tính chu vi hoặc diện tích phù hợp.\nGợi ý 3: Ghi đúng đơn vị đo độ dài hoặc diện tích.",
        variant: "Giữ nguyên diện tích nhưng thay đổi chiều dài và chiều rộng rồi tính lại chu vi.",
        drill: "Hình chữ nhật dài 15 cm, rộng 8 cm: tính chu vi và diện tích.",
        check: "Chu vi dùng đơn vị độ dài; diện tích dùng đơn vị vuông; kiểm tra đơn vị đo.",
        challenge: "Tìm các kích thước nguyên của hình chữ nhật có chu vi 24 cm sao cho diện tích lớn nhất."
      },
      general_problem_solving: {
        discover: "Vẽ sơ đồ đoạn thẳng hoặc lập bảng tóm tắt hai cột ‘điều đã biết’ và ‘điều cần tìm’ trước khi viết phép tính.",
        warmup: "Đọc kĩ tình huống bài toán, gạch chân các dữ kiện số liệu và xác định câu hỏi chính của đề.",
        hint: "Gợi ý 1: Tóm tắt đề bài bằng sơ đồ hoặc bảng.\nGợi ý 2: Xác định bước tính trung gian trước khi tìm đáp số chính.\nGợi ý 3: Thay đáp số vào đề bài để kiểm tra tính hợp lý.",
        variant: "Đổi một dữ kiện trong bài toán lời văn và dự đoán đáp số thay đổi như thế nào.",
        drill: "Một cửa hàng có 120 kg gạo, đã bán 45 kg; tính số gạo còn lại.",
        check: "Ước lượng trước, kiểm tra bằng phép tính ngược và viết câu trả lời có kèm đơn vị.",
        challenge: "Giải bài toán bằng hai cách khác nhau và so sánh xem cách nào ngắn gọn hơn."
      }
    };

    const fallback = domainDefaults[skillType] || domainDefaults.general_problem_solving;

    const mathTemplate = {
      lesson: `Học trọng tâm “${title}” bằng một ví dụ có số liệu; Bách phải nói dữ kiện nào dẫn đến từng bước.`,
      worked: fallback.drill,
      exercises: `Bách tự làm: (1) 307.406 + 8.594; (2) 900.000 − 47.285; (3) viết một câu hỏi hai bước từ hai số 307.406 và 8.594.`,
      challenge: fallback.challenge,
      check: fallback.check
    };

    if (day?.objective && day?.example && day?.basic && day?.applied) {
      mathTemplate.lesson = `${day.objective} Trọng tâm hôm nay: “${day.title || title}”.`;
      mathTemplate.worked = cleanExample(day.example);
      mathTemplate.exercises = `Bách tự làm về “${day.title || title}”: ${day.basic}; ${day.applied}; ${day.reasoning || "Nói rõ vì sao chọn cách làm này."}`;
      mathTemplate.exerciseItems = [
        ...String(day.basic).split(/\n+/).map(item => item.trim()).filter(Boolean),
        day.applied,
        day.reasoning
      ].filter(Boolean);
      mathTemplate.check = day.selfCheck || fallback.check;
      mathTemplate.challenge = day.challenge || fallback.challenge;
    }

    const isOpeningPlaceValueLesson = weekNumber === 1 && dayIndex === 0 && /Đọc số/i.test(day?.title || "");

    mathTemplate.warmup = isOpeningPlaceValueLesson
      ? "Không nhìn máy tính: đọc số 48.305 trong ví dụ. Sau đó nói chữ số ở hàng chục nghìn, hàng nghìn, hàng trăm, hàng chục và hàng đơn vị."
      : (day?.warmup || fallback.warmup);

    mathTemplate.discover = isOpeningPlaceValueLesson
      ? "Dùng bảng Hàng chục nghìn | nghìn | trăm | chục | đơn vị. Ví dụ: 27.046 đọc là “hai mươi bảy nghìn không trăm bốn mươi sáu” vì hàng trăm là 0 nhưng phía sau vẫn còn 4 và 6."
      : (day?.discover || fallback.discover);

    mathTemplate.hint = day?.hint
      ? day.hint.replace(/\s+Gợi ý ([2-9]):/g, "\nGợi ý $1:")
      : fallback.hint;

    if (!mathTemplate.exerciseItems) {
      mathTemplate.exerciseItems = mathTemplate.exercises.replace(/^Bách tự làm:\s*/i, "").split(/;\s*/).filter(Boolean);
    }
    mathTemplate.variant = day?.variant || fallback.variant;
    mathTemplate.drill = day?.drill || fallback.drill;

    const dayFocus = [
      "đọc ví dụ và tự vẽ/lập bảng trước khi xem cách giải",
      "che phần lời giải, làm lại ví dụ rồi đối chiếu từng bước",
      "giải bài vận dụng độc lập và viết câu kết luận",
      "thử bài nâng tầm, được nhận tối đa hai gợi ý",
      "chữa một lời giải sai và viết lại dòng sai",
      "làm mini-test, đánh dấu câu chắc và câu cần ôn"
    ][dayIndex] || "nói lại chiến lược bằng lời của mình";

    const norm = (str) => normalizeMathTask(str, weekNumber, dayIndex);
    return {
      lesson: norm(`${mathTemplate.lesson} Hôm nay Bách sẽ ${dayFocus}.`),
      worked: norm(cleanExample(mathTemplate.worked)),
      exercises: norm(mathTemplate.exercises),
      exerciseItems: Array.isArray(mathTemplate.exerciseItems)
        ? mathTemplate.exerciseItems.map(item => norm(item))
        : mathTemplate.exerciseItems,
      variant: norm(mathTemplate.variant),
      drill: norm(mathTemplate.drill),
      challenge: norm(mathTemplate.challenge),
      check: norm(mathTemplate.check),
      warmup: norm(mathTemplate.warmup),
      discover: norm(mathTemplate.discover),
      hint: norm(mathTemplate.hint)
    };
  }

  const vietnameseSeeds = [
    "Chiều muộn, vệt nắng cuối ngày nằm trên bậc cửa; con mèo vẫn kiên nhẫn chờ tiếng mở cổng.",
    "Trong ngăn bàn, Bách tìm thấy một mảnh giấy có dòng nhắn ngắn của người bạn đã giúp mình hôm qua.",
    "Sau cơn mưa, sân trường phản chiếu những đám mây trắng và tiếng guốc chạy rộn ràng ngoài hành lang.",
    "Bà đặt rổ rau bên hiên, vừa nhặt lá vừa kể chuyện khu vườn đã đổi khác qua từng mùa.",
    "Chiếc đèn bàn sáng lên khi trời tối; trang vở còn dang dở bỗng trở thành lời hẹn với ngày mai.",
    "Cậu bé đứng trước cây non bị gió nghiêng, im lặng một lúc rồi tìm một chiếc que nhỏ để dựng cây."
  ];
  const readingSeed = vietnameseSeeds[(weekNumber * 2 + dayIndex) % vietnameseSeeds.length];
  const vietnameseTemplate = /Tả|quan sát/i.test(title)
    ? {
        lesson: "Quan sát một đối tượng thật theo một trật tự; chọn chi tiết nhìn, nghe hoặc hành động có tác dụng, không liệt kê lan man.",
        worked: "“Chiếc cặp mở ra, mùi giấy mới còn thơm. Quai cặp hơi sờn nhưng vẫn ôm gọn vai em.”",
        exercises: "Bách tự làm: ghi 8 chi tiết về một đồ vật/người/cảnh; chọn 4 chi tiết và viết đoạn 8–10 câu.",
        challenge: "Bài nâng cao: bỏ hai tính từ chung chung, thay bằng một hành động hoặc chi tiết giác quan cụ thể.",
        check: "Kiểm tra: đoạn có trình tự, ít nhất ba chi tiết thật và một câu cảm nhận riêng."
      }
    : /Đọc|văn bản|Cảm nhận|Tóm tắt/i.test(title)
      ? {
          lesson: "Đọc chậm, gạch ý chính, khoanh hai chi tiết làm bằng chứng và phân biệt điều văn bản nói với điều mình suy ra.",
          worked: "“Nam thấy chiếc cây non bị nghiêng sau trận mưa. Em dựng lại cây và buộc một sợi dây mềm.” Bằng chứng cho thấy Nam biết quan tâm là hành động dựng cây.",
          exercises: "Bách tự làm: đặt 3 câu hỏi cho đoạn trên; trả lời bằng câu trọn ý; tóm tắt đoạn bằng 2 câu.",
          challenge: "Bài nâng cao: viết hai cách hiểu khác nhau, rồi chỉ ra cách nào có bằng chứng chắc hơn.",
          check: "Kiểm tra: mỗi nhận xét quan trọng phải kèm chi tiết làm căn cứ; không chép cả đoạn."
        }
      : /Kể|chuyện|Đối thoại/i.test(title)
        ? {
            lesson: "Xây câu chuyện bằng vấn đề, lựa chọn của nhân vật và kết quả; lời thoại phải gắn với người nói và hành động.",
            worked: "Làm mất quyển sách → tìm manh mối → nói thật với bạn → cùng sửa sai; mỗi mốc làm câu chuyện tiến lên.",
            exercises: "Bách tự làm: lập 4 mốc cho một việc thật; viết đoạn 10–12 câu, có một lời thoại và một hành động thể hiện cảm xúc.",
          challenge: "Bài nâng cao: kể lại cùng việc đó từ góc nhìn của người bạn hoặc đồ vật, nhưng không làm sai trình tự.",
            check: "Kiểm tra: có mở đầu, diễn biến, kết quả; không thêm sự việc không liên quan."
          }
        : /từ|vốn từ|Câu|Liên kết|Sửa|Biên tập|Chính tả/i.test(title)
          ? {
              lesson: "Chọn từ đúng nghĩa, viết câu đủ ý và dùng từ nối để đoạn văn tiến theo một mạch; sửa từng loại lỗi theo lượt.",
              worked: "“Bạn ấy rất tốt.” → “Bạn Minh lặng lẽ nhường chỗ gần cửa sổ cho bạn bị say xe.” Câu sau có bằng chứng cụ thể hơn.",
              exercises: "Bách tự làm: (1) sửa 3 câu mơ hồ; (2) dùng 3 từ mới trong câu riêng; (3) nối thành đoạn 6 câu.",
          challenge: "Bài nâng cao: viết hai phiên bản cùng một ý, chọn bản tự nhiên hơn và giải thích lựa chọn từ/câu.",
              check: "Kiểm tra: đọc thành tiếng, rà ý–câu–từ–chính tả; không sửa quá nhiều điểm cùng lúc."
            }
          : {
              lesson: `Luyện trọng tâm “${title}” bằng một đoạn ngắn, sau đó tự lập ý và viết bản riêng.`,
              worked: "Câu mở nêu rõ chủ đề, hai câu phát triển có chi tiết, câu cuối khép ý và thể hiện suy nghĩ.",
              exercises: "Bách tự làm: lập dàn ý 4 ý; viết đoạn 8–10 câu; gạch chân câu chủ đề và khoanh một từ nối.",
          challenge: "Bài nâng cao: đổi góc nhìn hoặc thêm một chi tiết có tác dụng nhưng vẫn giữ giọng văn đúng tuổi.",
              check: "Kiểm tra: bài rõ ý, có trình tự, câu không lặp và có ít nhất một chi tiết riêng."
            };
  if (day?.objective && day?.example && day?.basic && day?.applied) {
    vietnameseTemplate.lesson = `${day.objective} Trọng tâm hôm nay: “${title}”.`;
    vietnameseTemplate.worked = cleanExample(day.example);
    vietnameseTemplate.exercises = `Bách tự làm về “${title}”: ${day.basic}; ${day.applied}; ${day.reasoning || "Nói rõ vì sao sắp xếp ý như vậy."}`;
    vietnameseTemplate.exerciseItems = [day.basic, day.applied, day.reasoning].filter(Boolean);
    vietnameseTemplate.check = day.selfCheck || vietnameseTemplate.check;
    vietnameseTemplate.challenge = day.advanced || `Bài nâng cao cho “${title}”: viết một phiên bản riêng, thêm một chi tiết có tác dụng và giải thích lựa chọn.`;
  }
  if (!day?.advanced) {
    vietnameseTemplate.worked = `${vietnameseTemplate.worked} Đoạn luyện riêng hôm nay: “${readingSeed}”`;
    vietnameseTemplate.exercises = `${vietnameseTemplate.exercises} Dùng đoạn luyện riêng hôm nay: đặt một câu hỏi, chọn một từ khóa và viết một câu phát triển ý.`;
    vietnameseTemplate.challenge = `${vietnameseTemplate.challenge} Không dùng lại câu mẫu; viết một câu mới dựa trên chi tiết của đoạn luyện riêng hôm nay.`;
  }
  const vietnameseWarmups = [
    "Đọc đoạn luyện một lần để hiểu ý, lần hai đọc thành tiếng và khoanh một chi tiết làm mình chú ý.",
    "Nói lại đề bằng một câu đủ ý; chọn ba từ khóa trước khi viết.",
    "Sắp xếp ba mảnh ý lộn xộn thành trình tự hợp lý rồi giải thích lựa chọn.",
    "Tìm một câu còn chung chung và thay bằng chi tiết nhìn, nghe hoặc hành động cụ thể.",
    "Đọc lại bản nháp như một người bạn; đánh dấu chỗ bị lặp hoặc khiến người đọc phải đoán.",
    "Chọn một câu hay nhất và một câu cần sửa; nói rõ bằng chứng trước khi tự chấm."
  ];
  const vietnameseDiscoveries = [
    "Gạch dưới ý chính, khoanh chi tiết làm bằng chứng và nối chúng bằng mũi tên; chưa cần viết bài ngay.",
    "Đặt các ý vào ba ô mở đoạn – phát triển – kết đoạn để nhìn thấy mạch trước khi viết.",
    "Quan sát cách câu mở dẫn người đọc vào chủ đề; sau đó tạo một câu mở mới bằng trải nghiệm của Bách.",
    "Thử một kỹ thuật kể hoặc miêu tả, nhưng chỉ giữ lại nếu nó làm ý rõ hơn và vẫn đúng giọng trẻ em.",
    "Sửa theo một lượt: ý trước, câu sau, từ và chính tả cuối cùng; không sửa tất cả cùng lúc.",
    "Đọc bản 1 và bản 2 cạnh nhau, chỉ ra một thay đổi làm bài mạch lạc hơn."
  ];
  const vietnameseHints = [
    "Gợi ý 1: nói thành tiếng. Gợi ý 2: viết từ khóa. Gợi ý 3: chọn một chi tiết làm bằng chứng.",
    "Gợi ý 1: chia 3 phần. Gợi ý 2: mỗi ý viết một câu. Gợi ý 3: thêm từ nối nếu mạch bị nhảy.",
    "Gợi ý 1: bỏ câu lặp. Gợi ý 2: thay từ mơ hồ bằng hành động. Gợi ý 3: đọc lại như người chưa biết câu chuyện.",
    "Gợi ý 1: viết bản ngắn trước. Gợi ý 2: thêm một chi tiết riêng. Gợi ý 3: kiểm tra chi tiết đó có phục vụ ý không.",
    "Gợi ý 1: tìm dòng làm người đọc vấp. Gợi ý 2: sửa một lỗi mỗi lượt. Gợi ý 3: đọc to để kiểm tra.",
    "Gợi ý 1: giữ câu chắc trước. Gợi ý 2: viết hướng sửa. Gợi ý 3: không chép văn mẫu."
  ];
  const isAuthoredUnit = Boolean(day?.advanced);
  vietnameseTemplate.warmup = isAuthoredUnit
    ? "Đọc đề/đoạn luyện hai lượt: lượt đầu hiểu sự việc hoặc ý chính; lượt sau khoanh một chi tiết sẽ dùng trong bài của mình."
    : vietnameseWarmups[dayIndex] || vietnameseWarmups[0];
  vietnameseTemplate.discover = isAuthoredUnit
    ? `Khám phá từ ví dụ: ${day.objective} Ghi từ khóa trước, chỉ chuyển sang câu hoàn chỉnh khi đã biết mỗi ý phục vụ phần nào của bài.`
    : vietnameseDiscoveries[dayIndex] || vietnameseDiscoveries[0];
  vietnameseTemplate.hint = isAuthoredUnit
    ? "Gợi ý 1: nói ý bằng lời của mình. Gợi ý 2: chọn một chi tiết thật hoặc dẫn chứng. Gợi ý 3: đọc thành tiếng để tìm chỗ người đọc sẽ vấp."
    : vietnameseHints[dayIndex] || vietnameseHints[0];
  const dayFocus = [
    "đọc/nói lại yêu cầu bằng 3–5 câu",
    "lập dàn ý 3–5 ý trước khi viết",
    "viết bản nháp liền mạch",
    "thử một kỹ thuật kể/miêu tả từ văn học phù hợp lứa tuổi",
    "biên tập và viết bản 2",
    "đọc lại sản phẩm và tự nhận xét"
  ][dayIndex] || "nói lại cách làm bằng lời của mình";
  return { lesson: `${vietnameseTemplate.lesson} Hôm nay Bách sẽ ${dayFocus}.`, warmup: vietnameseTemplate.warmup, discover: vietnameseTemplate.discover, worked: vietnameseTemplate.worked, exercises: vietnameseTemplate.exercises, exerciseItems: vietnameseTemplate.exerciseItems, challenge: vietnameseTemplate.challenge, hint: vietnameseTemplate.hint, check: vietnameseTemplate.check };
}

function formatMentalNumber(value) {
  return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function createContinuationMentalGroup(week, dayIndex) {
  const seed = week * 19 + dayIndex * 7;
  const day = `Buổi ${dayIndex + 1}`;
  const families = [
    () => {
      const near = 300 + (seed % 6) * 100 + 98;
      const add = 27 + (seed % 41);
      return { title: "Cộng bù về số tròn", hint: "Đưa số có tận cùng 8 hoặc 9 về chục/trăm gần nhất, rồi trả lại phần đã thêm.", questions: [`${formatMentalNumber(near)} + ${add} = ?`, `${formatMentalNumber(near + 200)} + ${add + 31} = ?`, `${formatMentalNumber(near + 400)} − ${add} = ?`, `Giải thích vì sao ${formatMentalNumber(near)} + ${add} có thể tính bằng ${formatMentalNumber(near + 2)} + ${add} − 2.`] };
    },
    () => {
      const a = 420 + (seed % 8) * 70;
      const b = 198 + (seed % 5) * 100;
      return { title: "Trừ bằng làm tròn và điều chỉnh", hint: "Khi làm tròn số trừ lên, nhớ cộng lại đúng phần đã trừ lố.", questions: [`${formatMentalNumber(a)} − ${formatMentalNumber(b)} = ?`, `${formatMentalNumber(a + 300)} − ${formatMentalNumber(b + 101)} = ?`, `${formatMentalNumber(a + 500)} − ${formatMentalNumber(b + 299)} = ?`, `Với ${formatMentalNumber(a)} − ${formatMentalNumber(b)}, em bù bao nhiêu để số trừ thành số tròn? Vì sao cuối cùng phải cộng phần đó trở lại?`] };
    },
    () => {
      const x = 125 + (seed % 7) * 25;
      const y = 375 + (seed % 8) * 25;
      return { title: "Nhóm số hạng tạo mốc", hint: "Tìm hai số có tổng tròn trăm trước, rồi cộng số còn lại.", questions: [`${x} + ${y} + 200 = ?`, `${x + 17} + ${y - 17} + 300 = ?`, `${formatMentalNumber(x + 425)} + ${formatMentalNumber(y + 575)} = ?`, `Trong ${x} + ${y} + 200, em nên nhóm hai số nào trước? Giải thích vì sao.`] };
    },
    () => {
      const n = 12 + (seed % 19);
      return { title: "Nhân với 25, 50 và 125", hint: "Ghép 4 với 25 thành 100; ghép 8 với 125 thành 1.000; nhân với 50 là nhân 100 rồi chia 2.", questions: [`${n} × 25 = ?`, `${n + 8} × 50 = ?`, `${n + 3} × 125 = ?`, `Để tính ${n} × 25, em có thể chia ${n} cho 4 trước hay nhân ${n} với 100 rồi chia 4 sau? Khi nào mỗi cách thuận tiện?`] };
    },
    () => {
      const n = 17 + (seed % 23);
      return { title: "Nhân qua mốc 9 và 11", hint: "Nhân 9 là nhân 10 rồi bớt đi một lần số đó; nhân 11 là nhân 10 rồi thêm một lần số đó.", questions: [`${n} × 9 = ?`, `${n + 6} × 11 = ?`, `${n + 12} × 19 = ?`, `Không tính từng tích, hai kết quả ${n} × 9 và ${n} × 11 chênh nhau bao nhiêu? Vì sao?`] };
    },
    () => {
      const divisor = 4 + (seed % 6);
      const quotient = 12 + (seed % 11);
      const dividend = divisor * quotient;
      return { title: "Chia bằng tách và phép ngược", hint: "Tách số bị chia thành các phần đều chia hết, hoặc hỏi ngược: số nào nhân với số chia thì được số bị chia?", questions: [`${formatMentalNumber(dividend)} ÷ ${divisor} = ?`, `${formatMentalNumber(dividend + divisor * 10)} ÷ ${divisor} = ?`, `${formatMentalNumber(dividend + divisor * 3 + 1)} ÷ ${divisor} = ? (dư ?)`, `Dùng phép nhân nào để kiểm tra kết quả của ${formatMentalNumber(dividend)} ÷ ${divisor}?`] };
    },
    () => {
      const a = 24 + (seed % 18);
      const b = 6 + (seed % 4);
      return { title: "Biểu thức và phân phối", hint: "Tìm thừa số chung hoặc nhóm cặp tạo 10, 100 trước khi nhân tính nhiều dòng.", questions: [`${a} × ${b} + ${a} × ${10 - b} = ?`, `${a + 5} × 7 − ${a + 5} × 2 = ?`, `(${a} + ${10 - b}) × ${b} = ?`, `Viết ${a} × ${b} + ${a} × ${10 - b} thành một phép nhân gọn hơn. Vì sao được phép làm vậy?`] };
    },
    () => {
      const numerator = 2 + (seed % 4);
      const denominator = 8;
      return { title: "Phân số cùng mẫu và phần còn lại", hint: "Cùng mẫu số thì gộp hoặc bớt tử số; luôn hình dung cả đơn vị được chia thành bao nhiêu phần bằng nhau.", questions: [`${numerator}/${denominator} + ${3}/${denominator} = ?`, `${7}/${denominator} − ${numerator}/${denominator} = ?`, `Một dải giấy tô ${numerator}/${denominator}, rồi tô thêm ${2}/${denominator}. Đã tô mấy phần tám?`, `Vì sao ${numerator}/${denominator} + ${3}/${denominator} không cộng mẫu số thành ${denominator + denominator}?`] };
    },
    () => {
      const thousands = 20 + (seed % 18) * 5;
      const price = thousands * 1000;
      return { title: "Tiền, số thập phân và ước lượng", hint: "Làm tròn giá tiền về nghìn hoặc chục nghìn để đoán trước; sau đó tính chính xác.", questions: [`${formatMentalNumber(price)} đồng + ${formatMentalNumber(15000 + (seed % 5) * 1000)} đồng = ?`, `Một món giá ${formatMentalNumber(price)} đồng, giảm 5.000 đồng. Giá mới là ?`, `${(12 + (seed % 6))},5 + 3,5 = ?`, `Không tính chính xác, tổng ${formatMentalNumber(price)} đồng và 17.000 đồng gần ${formatMentalNumber(price + 20000)} đồng hay ${formatMentalNumber(price + 50000)} đồng hơn? Vì sao?`] };
    },
    () => {
      const length = 12 + (seed % 12);
      const width = 5 + (seed % 7);
      return { title: "Đo lường và hình học tính nhanh", hint: "Tách công thức thành phần dễ: chu vi là hai lần tổng dài và rộng; diện tích là dài nhân rộng.", questions: [`Hình chữ nhật dài ${length} cm, rộng ${width} cm. Chu vi là ? cm.`, `Cùng hình đó, diện tích là ? cm².`, `Nếu tăng chiều dài thêm 2 cm, chu vi tăng bao nhiêu cm?`, `Không tính lại toàn bộ, giải thích vì sao tăng chiều dài 2 cm thì chu vi chỉ tăng 4 cm.`] };
    },
    () => {
      const start = 3 + (seed % 7);
      const step = 4 + (seed % 6);
      return { title: "Dãy số và quy luật", hint: "So sánh hiệu giữa hai số liền nhau trước; sau đó kiểm tra quy luật với ít nhất ba bước.", questions: [`Dãy ${start}, ${start + step}, ${start + 2 * step}, ${start + 3 * step}, ? Số tiếp theo là ?`, `Dãy ${start * 2}, ${start * 4}, ${start * 8}, ? Số tiếp theo là ?`, `Điền số: ? + ${start + step} = ${start + 3 * step}.`, `Hãy nói quy luật của dãy đầu bằng một câu, không chỉ nêu đáp số.`] };
    },
    () => {
      const total = 120 + (seed % 8) * 25;
      const red = 35 + (seed % 6) * 10;
      return { title: "Đọc dữ liệu và kiểm tra hợp lý", hint: "Đọc đúng đơn vị, ước lượng khoảng kết quả trước rồi mới cộng trừ.", questions: [`Một bảng ghi tổng ${total} quyển sách; đã mượn ${red} quyển. Còn lại ? quyển.`, `Nếu hôm sau mượn thêm ${red - 10} quyển, tổng số đã mượn là ? quyển.`, `Số sách còn lại có thể lớn hơn ${total} không?`, `Một bạn nói ${total} − ${red} gần bằng 20. Dùng ước lượng để giải thích vì sao nhận xét đó hợp lý hay không.`] };
    }
  ];
  const group = families[(week + dayIndex) % families.length]();
  group.questions[group.questions.length - 1] = `Tuần ${week}, ${group.questions[group.questions.length - 1]}`;
  return { day, ...group };
}

function createMentalMathContinuation() {
  return {
    title: "Kho tính nhẩm tiếp nối",
    intro: "Từ tuần 7, Bách tiếp tục 8–10 phút mỗi buổi với số mới và chiến lược phù hợp mạch Toán đang học. Không quay lại một bộ bài cố định.",
    weeks: Array.from({ length: 30 }, (_, index) => {
      const week = index + 7;
      const groups = Array.from({ length: 5 }, (_, dayIndex) => createContinuationMentalGroup(week, dayIndex));
      return {
        week,
        title: `Tăng tốc tuần ${week}`,
        focus: `Năm buổi tính nhẩm có chiến lược, xen kẽ số học, biểu thức, đo lường và suy luận phù hợp lớp 4.`,
        groups
      };
    })
  };
}

function addAdvancedLayer(days, item, subject, weekNumber, phase) {
  const advanced = subject === "math"
    ? phase.id === "P1"
      ? "Nâng tầm học sinh giỏi: sau bài chính, giải thêm một biến thể có số lớn hơn hoặc hai bước; ưu tiên tìm cách nhẩm gọn, nhưng phải giải thích và kiểm tra."
      : phase.id === "P6"
        ? "Nâng tầm: viết lời giải ngắn như đang trình bày trong đề thi chọn học sinh giỏi; nêu điều kiện, không bỏ trường hợp và thử một cách kiểm tra độc lập."
        : "Nâng tầm học sinh giỏi: giải một bài biến thể khó hơn, tìm cách thứ hai hoặc chứng minh vì sao cách làm không bỏ sót; không tăng số lượng bài một cách máy móc."
    : phase.id === "P1"
      ? "Nâng tầm: giữ yêu cầu diễn đạt ở mức lớp 4 khá–giỏi; thêm một chi tiết có chủ đích, một câu chuyển ý và tự giải thích lựa chọn, không viết bài mẫu rập khuôn."
      : "Nâng tầm: tạo một phiên bản có góc nhìn hoặc cách diễn đạt riêng, giữ mạch logic; chọn một câu giàu hình ảnh nhưng vẫn tự nhiên, đúng tuổi.";
  return days.map((rawDay, index) => {
    const day = subject === "math" ? normalizeMathDay(rawDay, weekNumber, index) : rawDay;
    return {
      ...day,
      advanced: day.advanced || `${advanced} (nấc ${index + 1}/6 của tuần ${weekNumber})`,
      concrete: createConcreteLesson(item, subject, weekNumber, index, day)
    };
  });
}

function resolveDailyPlan(item, subject, weekNumber, phase) {
  const bridge = window.BACH_CURRICULUM.bridgeDailyLessons[subject].find(x => x.week === weekNumber);
  const detailed = bridge || createDetailedDailyPlan(item, subject, weekNumber, phase);
  return {
    dailyPlan: addAdvancedLayer(detailed.days, item, subject, weekNumber, phase),
    textbookAlignment: detailed.alignment
  };
}

function materializeCurriculum(curriculum) {
  const root = curriculum || (typeof window !== "undefined" ? window.BACH_CURRICULUM : null) || (typeof globalThis !== "undefined" ? globalThis.BACH_CURRICULUM : null);
  if (!root || !root.phases) return;
  if (typeof window !== "undefined") window.BACH_CURRICULUM = root;
  root.lessonFields = LESSON_FIELDS;
  window.BACH_CURRICULUM.phases.forEach(phase => {
    const firstWeek = Number(phase.weeks.split("–")[0]);
    phase.math = phase.math.map((item, index) => ({
      ...item,
      lesson: createLessonPlan(item, "math", firstWeek + index, phase),
      ...resolveDailyPlan(item, "math", firstWeek + index, phase, root)
    }));
    phase.vietnamese = phase.vietnamese.map((item, index) => ({
      ...item,
      lesson: createLessonPlan(item, "vietnamese", firstWeek + index, phase),
      ...resolveDailyPlan(item, "vietnamese", firstWeek + index, phase, root)
    }));
  });
  root.mentalMathContinuation = createMentalMathContinuation();
  return root;
}

const CurriculumFactory = {
  LESSON_FIELDS,
  mathLessonVariant,
  vietnameseLessonVariant,
  createLessonPlan,
  AUTHORED_MATH_KITS,
  AUTHORED_VIETNAMESE_KITS,
  AUTHORED_P2_WEEK7_MATH,
  authoredP2DailyPlan,
  authoredDailyPlan,
  createDetailedDailyPlan,
  cleanExample,
  getMathSkillType,
  normalizeMathTask,
  normalizeMathDay,
  createConcreteLesson,
  createContinuationMentalGroup,
  createMentalMathContinuation,
  addAdvancedLayer,
  resolveDailyPlan,
  materializeCurriculum
};

if (typeof window !== "undefined") {
  window.BACH_CURRICULUM_FACTORY = CurriculumFactory;
  if (window.BACH_CURRICULUM && !window.BACH_CURRICULUM.lessonFields) {
    materializeCurriculum(window.BACH_CURRICULUM);
  }
}
if (typeof globalThis !== "undefined") {
  globalThis.BACH_CURRICULUM_FACTORY = CurriculumFactory;
  if (globalThis.BACH_CURRICULUM && !globalThis.BACH_CURRICULUM.lessonFields) {
    materializeCurriculum(globalThis.BACH_CURRICULUM);
  }
}
