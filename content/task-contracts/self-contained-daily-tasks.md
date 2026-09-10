# AGY task: Bài học hằng ngày phải tự chứa

## Lỗi cần sửa

Preview có các bài Toán hiện “Sắp xếp 5 số theo thứ tự tăng dần”, “Chọn gói đồ
dùng học tập rẻ hơn từ bảng giá”, “Tìm một số nằm giữa hai số đã cho” nhưng
không có năm số, bảng giá hay hai số. Đây không phải bài có thể làm được.

## Mục tiêu

Trong `data/curriculum.js`, bảo đảm mọi `concrete.exerciseItems`, `variant`,
`drill`, `challenge`, `hint` và `check` cho Toán tuần 1–36 có dữ kiện thật khi
nhiệm vụ yêu cầu số, bảng, hình hoặc tình huống. Không dùng các câu “sắp xếp N
số”, “từ bảng cho trước”, “hai số đã cho”, “một bài nền”, “một bài thử thách”
nếu không cung cấp ngay dữ kiện tiếp theo.

Ưu tiên cải thiện `createConcreteLesson` / bộ tạo dữ liệu, không phải chép tay
216 buổi. Dữ liệu phải ổn định theo tuần/ngày, tiếng Việt lớp 4, số dùng dấu
chấm ngăn nghìn. Các buổi cùng tuần không dùng lại nguyên câu. Giữ mức khá–giỏi;
không biến thành bài quá dễ.

## Phạm vi tuyệt đối

Chỉ sửa:

- `data/curriculum.js`
- `test/smoke.test.mjs`

Không sửa `app.js`, `styles.css`, OAuth, API, Drive, schema DB, timer, service
worker, package, README hay contract khác.

## Tiêu chí kiểm tra

1. Viết test chạy qua 36 tuần × 6 buổi Toán, kiểm tra không còn các mẫu mơ hồ
   nêu trên ở `concrete` đã materialize.
2. Test phải kiểm tra riêng ba dạng bị lỗi: so sánh số có dãy số thật, bảng giá
   có ít nhất hai giá thật, và tìm số giữa có cận dưới/cận trên thật.
3. Dữ liệu tạo ra không chứa dấu phẩy kiểu ngăn nghìn `1,000`.
4. Chạy `npm test` và `git diff --check`.

## Cấm

- Không đổi khung chương trình 36 tuần.
- Không thêm dependency.
- Không tự thêm nhãn đề Singapore/Trung Quốc hoặc sao chép đề.
