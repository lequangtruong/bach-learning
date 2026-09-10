# AGY task: build the first detailed textbook-aligned learning slice

Work directly in `/Volumes/DATA/Github/ToolbyMyself/Bach-learning`. Do not change the architecture, add a framework, add a database, reproduce textbook pages, or add API keys. Do not call Astra. The child uses the Vietnamese national textbook set **Kết nối tri thức với cuộc sống** and is transitioning from grade 3 to grade 4.

## Required outcome

Turn the first six bridge weeks from a high-level outline into a usable day-by-day learning slice. Keep the existing 36-week structure, but add structured content for weeks 1–6:

- For Math: six daily slots per week, each with a clear objective, a small worked example, 3 basic mental/calculation exercises, 1 applied problem, one gentle reasoning prompt, and a self-check. Include the 8–10 minute accuracy-first mental-calculation warm-up every day. Use grade 3 prerequisites before grade 4 material. No calculator.
- For Vietnamese: six daily slots per week, each with reading/talking/writing/editing work appropriate to grade 3–4, one short model example, a child-sized output, and a self-check. Preserve Bách's own voice; do not provide a copyable model essay.
- Use high-level topic alignment labels to the Kết nối tri thức set (e.g. number/place value, four operations, measurement/geometry, reading comprehension, vocabulary/sentence, paragraph/story writing), without copying textbook wording or copyrighted exercises.
- Make the content data-driven and render it in the existing Math and Vietnamese pages as a compact expandable “Kế hoạch từng ngày · Tuần 1–6” section. It must remain usable on iPad and offline.

## Google login UX fix

In `app.js`, the end user must never be prompted to paste a Google OAuth Web Client ID. If `public-config.js` still has a placeholder, show a clear configuration message and keep local learning available. If a real Client ID is configured, the existing Google Identity Services button should open the normal Google sign-in/consent flow.

## Scope and checks

Edit only `data/curriculum.js`, `app.js`, `styles.css`, `data/data-core.js` if schema support is needed, `REQUIREMENTS.md`, `content/requirements.md`, `README.md`, `sw.js`, and `test/smoke.test.mjs`. Add tests for six-week daily content, textbook metadata, no runtime Client-ID prompt, and schema compatibility. Run `npm test` and `git diff --check`. Return changed files and test results. Do not modify OAuth server behavior.
