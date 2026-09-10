# AGY task: Add a fast-calculation foundation to Bách Learning Lab

## Context

This is a small vanilla-JS, iPad-first learning app for Bách, moving from grade 3 to grade 4. The existing product has a 36-week curriculum, a Math page, weekly lesson plans, local-first storage, voice input, Google Drive sync, and a Gemini tutor. Preserve the existing architecture and do not add a framework or server.

## Product requirement

Add a clearly visible, age-appropriate foundation track for mental calculation and calculation fluency. The goal is accurate, flexible number sense and explaining efficient strategies, not racing or memorising tricks. It must explicitly reduce dependence on a pocket calculator while still teaching estimation and inverse-checking.

## Pedagogy and content

Add a six-week bridge sequence for weeks 1–6, aligned to grade 3 foundations and grade 4 readiness:

1. Number sense: compose/decompose to 10, 100, 1,000; place value; friendly numbers.
2. Addition/subtraction: compensation, make-a-round-number, split and recombine; estimate first.
3. Multiplication: facts through 10×10, distributive property, doubling/halving, ×10/×100.
4. Division: fact families, inverse operations, sharing/grouping, remainder reasonableness.
5. Mixed operations: mental order of operations, missing numbers, patterns, fractions/decimals in familiar contexts.
6. Fluency and verification: choose a strategy, estimate, calculate, check by inverse or a second method; a gentle mini-check.

Every week must include a short daily protocol: 8–10 minutes, 3 accuracy-first warm-ups, 1 strategy explanation, then a small fluency round. Do not make time the only success measure. Use progressive time only after accuracy is stable, with a “no calculator” and “explain your way” cue.

## UX/design constraints

- On the Math page, add a distinct panel titled “Nền tính toán nhanh” before the normal weekly curriculum.
- Show the purpose, the 8–10 minute daily routine, and six expandable week cards with focus, sample mental strategies, and a simple completion check.
- Keep the existing Paper/Notebook visual language, responsive iPad layout, keyboard accessibility, and voice-input architecture.
- The panel must not overwhelm the existing 36-week list; use compact cards and clear hierarchy.
- Reuse existing state/progress patterns where practical. Do not create a new backend or store answers remotely.

## Implementation scope

Inspect `data/curriculum.js`, `app.js`, `styles.css`, `REQUIREMENTS.md`, and `test/smoke.test.mjs`. Implement the smallest coherent change. Update tests for the six-week sequence and its presence in the Math view. Update requirements/docs briefly.

## Acceptance checks

- `npm test` passes.
- `node --check app.js` passes.
- The Math view visibly contains “Nền tính toán nhanh”.
- The six sequence entries are present and are not generic duplicates.
- The feature remains useful offline and does not touch OAuth, Drive sync, Gemini API, or the server.
- Return a concise summary of files changed and tests run. Edit the files directly in the current workspace.
