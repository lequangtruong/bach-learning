# Hợp đồng nhiệm vụ (Task Contract): Đồng hồ đếm ngược bài học hàng ngày (Durable Lesson Timer)

## 1. Phạm vi thực hiện (Scope)
- Bổ sung thành phần đồng hồ bấm giờ (Lesson Timer) bền vững cho giao diện bài học hàng ngày (`renderDailyPlan`) tại `app.js`.
- Mỗi bài học hàng ngày (định danh theo `${weekId}-${subject}-${dayIndex + 1}`) có bộ đếm giờ độc lập.
- Thời lượng mặc định:
  - Ngày thường (Thứ 2 đến Thứ 6, `dayIndex 0..4`): 25 phút (1500 giây, hiển thị `25:00`).
  - Thứ 7 (`dayIndex 5` hoặc `day.day === "Thứ 7"`): 50 phút (3000 giây, hiển thị `50:00`).
- Lưu trữ trạng thái timer trong `db.lessonTimers` (local-first trong IndexedDB và localStorage fallback qua `data/data-core.js`):
  - `status`: `"idle" | "running" | "paused" | "completed"`
  - `remainingSeconds`: số giây còn lại (integer, 0 <= remainingSeconds <= duration)
  - `durationSeconds`: tổng thời lượng bài học (1500 hoặc 3000)
  - `lastStartedAt`: timestamp ISO string khi bấm Bắt đầu/Tiếp tục (dùng để tính delta theo wall clock `Date.now()`)
  - `updatedAt`: timestamp ISO string
- Khả năng phục hồi (Durable & Wall-clock calculation):
  - Khi reload trang hoặc chuyển tab/khóa màn hình iPad rồi quay lại (`visibilitychange`, `pagehide`), số giây còn lại được tính lại chính xác theo đồng hồ thực tế (`Date.now() - Date.parse(lastStartedAt)`).
  - Không bao giờ bị đếm gấp đôi (không chồng chéo `setInterval`).
  - Không bị mất thời gian đã trôi qua khi iPad ở chế độ nền.
- Trạng thái hết giờ:
  - Khi còn 00:00: Chuyển sang trạng thái completed ("hết giờ"), dừng bộ đếm, hiển thị thông báo rõ ràng "Hết giờ học bài này!".
  - Tuyệt đối không tự động nộp bài, không khóa thao tác, không ẩn nội dung bài học hay bài làm của Bách.
- Giao diện người dùng & Khả năng tiếp cận (Accessibility):
  - Nhãn tiếng Việt thân thiện với trẻ em lớp 4: "Bắt đầu", "Tạm dừng", "Tiếp tục", "Đặt lại", "Hết giờ học bài này!".
  - Kích thước nút bấm và vùng chạm (touch target) tối thiểu 44px trên iPad.
  - Không tự động phát âm thanh, không xung đột với nhận dạng giọng nói (Voice STT) hay Trợ giảng AI (Gemini).
- Tương thích ngược (Backward Compatibility):
  - Giữ nguyên schema v2 hiện tại, `STORAGE_SCHEMA_VERSION = 2`.
  - Dữ liệu cũ không có trường `lessonTimers` vẫn được coi là hợp lệ (`validateDatabasePayload` chấp nhận `data.lessonTimers` là optional plain object).
- Kiểm thử và bộ nhớ đệm (Cache):
  - Thêm test case vào `test/smoke.test.mjs` kiểm tra validation, migration, tính toán wall clock và timer UI contract.
  - Tăng phiên bản cache trong `sw.js` (từ `v27` lên `v28`).

## 2. Tiêu chí nghiệm thu (Acceptance Criteria)
1. **Khởi tạo độc lập**: Mỗi buổi học (Toán/Tiếng Việt, Tuần 1-36, Ngày 1-6) có timer riêng biệt. Ngày thường bắt đầu ở 25:00, Thứ 7 bắt đầu ở 50:00.
2. **Không tự động chạy**: Timer không bao giờ tự đếm khi mở trang hoặc mở chi tiết ngày; Bách phải chủ động bấm "Bắt đầu".
3. **Điều khiển đầy đủ**: Bách có thể Bắt đầu (Start), Tạm dừng (Pause), Tiếp tục (Resume), và Đặt lại (Reset).
4. **Bền vững qua Wall Clock**: Khi timer đang chạy mà trang bị reload, đóng mở lại hoặc iPad sleep, thời gian còn lại phản ánh đúng thời gian thực đã trôi qua; nếu thời gian trôi qua vượt quá thời gian còn lại thì timer chuyển về 00:00 và dừng.
5. **Thông báo hết giờ an toàn**: Khi về 00:00, hiển thị rõ ràng "Hết giờ học bài này!", không cưỡng chế nộp bài, không giấu ô nhập đáp số, cách giải hay bài làm.
6. **Thân thiện iPad & Không xung đột**: Vùng bấm đạt chuẩn cảm ứng, phím bấm rõ ràng, không làm gián đoạn Web Speech API hay luồng chat AI.
7. **Bảo toàn dữ liệu cũ**: Cơ sở dữ liệu cũ tải lên không bị lỗi schema hay mất dữ liệu hiện có.
8. **Tất cả test vượt qua**: Lệnh `npm test` và `git diff --check` thực thi thành công không lỗi.

## 3. Các bất biến hệ thống (Invariants)
- `db.version` giữ nguyên `2`.
- `lessonTimers` nếu có phải là object với key có định dạng `w{week}-{subject}-{day}` (ví dụ: `w1-math-1`).
- Mỗi entry trong `lessonTimers` có `status` nằm trong `["idle", "running", "paused", "completed"]`.
- `remainingSeconds` là số nguyên không âm và không vượt quá `durationSeconds`.
- Timer không phát sinh network request hay gửi dữ liệu nhạy cảm ra ngoài.
- `app.js` dọn dẹp interval sạch sẽ khi component render lại hoặc timer dừng.

## 4. Các thay đổi bị cấm (Forbidden Changes)
- KHÔNG chỉnh sửa nội dung chương trình học (`data/curriculum.js`).
- KHÔNG thay đổi logic xác thực Google OAuth, Google Drive sync hay Gemini API (`api/tutor.js`, server-side handlers).
- KHÔNG thay đổi cấu hình triển khai, Vercel config, package.json hoặc thêm dependency npm bên ngoài.
- KHÔNG sửa các giao diện không liên quan (Parent summary, Mental math foundation, Hero banner, Topbar, v.v.).

## 5. Lệnh kiểm chứng chuẩn xác (Exact Validation Command)
```bash
npm test && git diff --check
```
