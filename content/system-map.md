# Sơ đồ hệ thống

- `index.html`: vỏ giao diện responsive, Google Identity Services SDK.
- `styles.css`: giao diện paper/notebook, mobile/iPad-first, mic toolbar & drive sync bar.
- `data/curriculum.js`: dữ liệu chương trình 36 tuần Toán + Văn, phiếu bài học 6 ngày/tuần, nhịp 25/50 phút, bài nâng cao và rubric.
- `data/data-core.js`: pure logic cho data model, versioning, sync merge (last-write-wins), weekly summaries, lesson responses và voice text combiner.
- `app.js`: render route, IndexedDB cache v2, sync Google Drive visible file (`Bach Learning DB.json`), Web Speech STT, gọi `/api/tutor`, hiển thị và lưu báo cáo tuần cho phụ huynh.
- `api/tutor.js`: Vercel Serverless Function gọi Gemini REST qua OAuth refresh token; fallback local dev agy CLI.
- `server.mjs`: static server Node.js cục bộ tích hợp `/api/tutor`.
- `sw.js`: Service Worker PWA cache tĩnh an toàn, không cache API/token/DB.
