# Review request: durable lesson timer

You are the independent reviewer (Sol low), not the implementer. Do not edit files.

Review the current working tree at `/Volumes/DATA/Github/ToolbyMyself/Bach-learning` against the timer contract at `content/task-contracts/lesson-timer.md`. Limit review to these files:

- `app.js`
- `data/data-core.js`
- `styles.css`
- `test/smoke.test.mjs`
- `sw.js`

Check, with concrete evidence:

1. Each Math/Vietnamese daily lesson has an independent 25-minute timer, except Saturday at 50 minutes.
2. It does not auto-start; start, pause/resume, reset and time-up behaviour are correct.
3. A running timer remains correct after reload, background/sleep and does not create duplicate intervals or write to Drive every second.
4. Existing saved databases without `lessonTimers` remain valid; malformed timer records reject safely.
5. The controls are viable on iPad and do not auto-speak or interfere with STT/TTS/Gemini.
6. Tests substantively cover the risky pure logic, not just text presence.

Return only findings, ranked P0/P1/P2, followed by `APPROVE` if no P0/P1 remains, or `CHANGES REQUIRED` otherwise. Do not assume untested browser behaviour is proven; call it out if relevant.
