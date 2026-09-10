# AGY task: content coherence gate for daily lessons

## Scope

AGY may edit **only**:

- `data/curriculum.js`
- `test/smoke.test.mjs`

Do not edit UI, styles, API/OAuth/Drive, service worker, package files, docs other than this pre-existing task contract, or any project configuration.

## Problem to solve

The current Math lesson renderer can combine unrelated generic text with a real daily lesson. Example: a lesson about comparing five-digit numbers says “tách số thành phần tròn” and asks the child to “che kết quả”, while the example has only one comparison. It also displays `Ví dụ: Ví dụ của ngày:`.

## Acceptance criteria

1. For every Math day with raw daily content, `warmup`, `discover`, `worked`, exercises, variant, challenge, hint, and check must be coherent with the same mathematical skill.
2. A comparison/order lesson must teach comparison by the first different place value; it must not use addition/subtraction language such as `tách số`, `tổng mới`, `bù trừ`, or `tính phần còn lại` unless that operation is genuinely part of its supplied task.
3. `worked` must be the example itself, without redundant prefixes such as `Ví dụ của ngày:` or `Ví dụ đã giải:` because the UI already labels this section.
4. Every displayed exercise must be self-contained: real numbers for order/between tasks; named items and at least two amounts for money tasks; explicit data for extensions/challenges.
5. Keep instructions short, one action per line/item, understandable by a capable Grade-4 Vietnamese pupil. Do not use vague references such as `ví dụ của ngày`, `bài bên dưới`, `hai số đã cho`, `bảng giá` without including the referenced data in that same item.
6. Add regression tests that audit all 36 weeks × 6 Math days and explicitly assert the Week 1 Wednesday comparison lesson:
   - has no redundant example prefix;
   - has a comparison-specific discovery statement;
   - each exercise contains its own data;
   - contains none of the four unrelated addition phrases above.
7. Run `npm test`.

## Implementation guidance

Make the smallest reusable change near `normalizeMathDay` / `createConcreteLesson`. Do not rewrite the curriculum or invent a second curriculum architecture. Use `grep_search` and `sed_file` for targeted discovery; do not call `view_file` on the whole curriculum file.
