import { readFile } from "node:fs/promises";
import vm from "node:vm";
import * as core from "../../js/core.js";

// コアバインディングの集約定義
export const coreBindings = {
  ...core,
  escapeHtml: core.escapeHtml,
  splitInlineItems: core.splitInlineItems,
  renderInstructionSteps: core.renderInstructionSteps,
  allWeeks: core.allWeeks,
  doneCount: core.doneCount,
  percent: core.percent,
  buildLearningContext: core.buildLearningContext,
  buildWeeklySummaryPrompt: core.buildWeeklySummaryPrompt,
  PHOTO_BOUNDS: core.PHOTO_BOUNDS,
  validatePhotoFile: core.validatePhotoFile
};

// カリキュラムおよびアプリケーションのソース読み込み
export const curriculumSource = await readFile(new URL("../../data/curriculum.js", import.meta.url), "utf8");
export const appSource = await readFile(new URL("../../app.js", import.meta.url), "utf8");

// app.jsのexport構文を除去してVM実行可能にするヘルパー
export function cleanAppSource(source = appSource) {
  return source.replace(/export\s+/g, "");
}

// カリキュラムソースを取得
export function getCurriculumSource() {
  return curriculumSource;
}

// アプリケーションソースを取得
export function getAppSource() {
  return appSource;
}

// 隔離されたVMコンテキストでカリキュラムを実行
export function loadCurriculum(extraGlobals = {}) {
  const sandbox = { window: {}, ...extraGlobals };
  vm.runInNewContext(curriculumSource, sandbox);
  return {
    sandbox,
    window: sandbox.window,
    curriculum: sandbox.window.BACH_CURRICULUM
  };
}

// 安全なVMサンドボックスを構築
export function createSafeVmSandbox(extraGlobals = {}) {
  return {
    ...coreBindings,
    window: {},
    ...extraGlobals
  };
}

// グローバルスコープを汚染せずに安全にカリキュラムを実行するライフサイクルヘルパー
export async function withCurriculumGlobal(fn) {
  const previousWindow = globalThis.window;
  const previousCurriculum = globalThis.BACH_CURRICULUM;
  try {
    const { window, curriculum } = loadCurriculum();
    globalThis.window = window;
    globalThis.BACH_CURRICULUM = curriculum;
    return await fn({ window, curriculum });
  } finally {
    if (previousWindow === undefined) {
      delete globalThis.window;
    } else {
      globalThis.window = previousWindow;
    }
    if (previousCurriculum === undefined) {
      delete globalThis.BACH_CURRICULUM;
    } else {
      globalThis.BACH_CURRICULUM = previousCurriculum;
    }
  }
}

// 任意の一時的グローバル変数を安全に適用および復元するヘルパー
export async function withSafeGlobals(overrides, fn) {
  const saved = new Map();
  for (const key of Object.keys(overrides)) {
    saved.set(key, globalThis[key]);
    globalThis[key] = overrides[key];
  }
  try {
    return await fn();
  } finally {
    for (const [key, val] of saved.entries()) {
      if (val === undefined) {
        delete globalThis[key];
      } else {
        globalThis[key] = val;
      }
    }
  }
}

// テストスイート用の安全なカリキュラムフィクスチャライフサイクルを登録
export function registerCurriculumFixtureLifecycle(testRunner) {
  let prevWindow;
  let prevCurriculum;

  testRunner.before(() => {
    prevWindow = globalThis.window;
    prevCurriculum = globalThis.BACH_CURRICULUM;
    const { window, curriculum } = loadCurriculum();
    globalThis.window = window;
    globalThis.BACH_CURRICULUM = curriculum;
  });

  testRunner.after(() => {
    if (prevWindow === undefined) {
      delete globalThis.window;
    } else {
      globalThis.window = prevWindow;
    }
    if (prevCurriculum === undefined) {
      delete globalThis.BACH_CURRICULUM;
    } else {
      globalThis.BACH_CURRICULUM = prevCurriculum;
    }
  });
}
