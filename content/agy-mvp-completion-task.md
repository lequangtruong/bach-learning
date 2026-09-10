# AGY coding task: finish the Bách Learning Lab MVP

Work directly in the current workspace: `/Volumes/DATA/Github/ToolbyMyself/Bach-learning`.
This is a small vanilla-JS iPad-first app. Implement the code, do not only give a plan.
Do not reset, revert, or overwrite existing user changes. Do not call Astra.

## Product direction (fixed)

- Bách is transitioning from grade 3 to grade 4.
- Vietnamese textbook alignment is **Kết nối tri thức với cuộc sống**, but enrich it with
  Singapore/Chinese-style mathematical thinking and age-appropriate world-literature craft.
- The app is a web app for Safari on iPad, deployable to Vercel, with local-first IndexedDB
  and visible JSON backup/sync in Google Drive.
- Gemini is the online AI tutor. OAuth is mandatory; never put an API key in browser code.
- AGY is a development tool only. It must not become a Vercel runtime dependency.
- Do not add a framework, database server, or heavy dependency.

## Goal of this pass

Finish the smallest coherent end-to-end MVP while preserving the current Paper/Notebook visual
language and existing architecture. Inspect the current implementation first because substantial
features already exist; extend or correct them instead of duplicating them.

### 1. Learning flow and screens

- `#home` is a useful dashboard: show Bách's current progress, next recommended action, and
  clear links to `#plan`, `#math`, `#vietnamese`, and `#guide`.
- Keep `#plan` as the complete 36-week roadmap. Keep `#math` and `#vietnamese` as focused
  subject workspaces; their purpose and content must be visibly different.
- Math must put “Nền tính toán nhanh” before the normal weekly list. Keep accuracy before speed,
  mental calculation, estimation, inverse-checking, and no-calculator practice.
- Weeks 1–6 must render a compact expandable “Kế hoạch từng ngày” section for both subjects.
  Each daily card must expose objective, example, basic practice, applied problem, reasoning,
  self-check, and a local completion control. Keep it touch-friendly and not visually overwhelming.
- A completed daily/weekly action must persist through the existing local storage path.

### 2. AI tutor as an active learning coach

- `#guide` must clearly explain that Gemini is the tutor, accept keyboard text and Vietnamese
  voice transcript, and show loading/error states without losing the question.
- Send the existing learning context to `/api/tutor`; do not bypass OAuth or expose credentials.
- Render the returned adaptive learning action when present (method, pace, focus, week to review,
  reason, next step). Let the parent apply or dismiss it. Applying it must persist to the existing
  database and visibly affect the selected learning focus.
- If Gemini/OAuth is unavailable, keep the study UI and local progress fully usable.
- The end user must never be asked to paste a Google OAuth Client ID. A placeholder config should
  produce a clear setup message; a real deployment config should use normal Google sign-in.
- Add simple text-to-speech for tutor answers using the browser `SpeechSynthesis` API as progressive
  enhancement. The tutor answer must remain readable and usable if speech is unsupported. Use
  `vi-VN`, a calm teacher-like pace/pitch, prefer a Vietnamese female-sounding voice when the
  device exposes one, and provide explicit “Đọc câu trả lời” / “Dừng đọc” controls. Never start
  speaking automatically and never upload audio to the server.

### 3. iPad, Vietnamese, and offline quality

- Preserve the existing Web Speech API progressive enhancement: explicit mic button, listening
  state, editable transcript, keyboard fallback, no auto microphone.
- Check buttons/inputs have comfortable touch targets and focus states. Vietnamese diacritics must
  not be clipped; use generous line-height and vertical spacing for multi-line labels/cards.
- Do not cache API calls, OAuth tokens, or private data in the service worker.

## Scope

Use only these project files unless a test genuinely requires another existing file:
`app.js`, `styles.css`, `data/curriculum.js`, `data/data-core.js`, `api/tutor.js`, `README.md`,
`REQUIREMENTS.md`, `content/requirements.md`, `sw.js`, and `test/smoke.test.mjs`.
Do not change OAuth server behavior or add secrets. Do not copy textbook pages or copyrighted
exercise sets. Do not create a new backend.

## Acceptance checks

Run all of these before finishing:

1. `npm test`
2. `node --check app.js`
3. `git diff --check`

Report exact files changed, tests run, and any remaining limitation. If a requirement is already
implemented, verify it rather than rewriting it.
