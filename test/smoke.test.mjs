import test from "node:test";
import assert from "node:assert/strict";
import {
  curriculumSource,
  appSource,
  cleanAppSource,
  loadCurriculum,
  coreBindings
} from "./helpers/curriculum-fixture.js";
import {
  createEmptyDatabase,
  validateDatabasePayload,
  WEEKDAY_LESSON_SECONDS,
  SATURDAY_LESSON_SECONDS
} from "../data/data-core.js";

// スモークテストおよび後方互換性エントリーポイント
test("smoke: curriculum fixture loads cleanly without global leaks", () => {
  assert.ok(curriculumSource.length > 0, "curriculumSource must be loaded");
  assert.ok(appSource.length > 0, "appSource must be loaded");
  assert.equal(typeof cleanAppSource, "function");

  const { curriculum, window } = loadCurriculum();
  assert.ok(curriculum, "curriculum must be returned");
  assert.equal(curriculum.phases.length, 6, "curriculum must have 6 phases");
  assert.ok(window.BACH_CURRICULUM, "sandbox window must hold BACH_CURRICULUM");

  // グローバル汚染が存在しないことを保証
  assert.equal(globalThis.window, undefined, "globalThis.window must not leak");
  assert.equal(globalThis.BACH_CURRICULUM, undefined, "globalThis.BACH_CURRICULUM must not leak");
});

test("smoke: core bindings and database validation are initialized correctly", () => {
  assert.equal(typeof coreBindings.escapeHtml, "function");
  assert.equal(typeof coreBindings.renderInstructionSteps, "function");
  assert.equal(typeof coreBindings.allWeeks, "function");

  const db = createEmptyDatabase();
  assert.equal(validateDatabasePayload(db), true);
  assert.equal(WEEKDAY_LESSON_SECONDS, 25 * 60);
  assert.equal(SATURDAY_LESSON_SECONDS, 50 * 60);
});
