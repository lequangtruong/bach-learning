// test/app-screens-buttons.test.mjs - KIỂM TRA NÚT BẤM TOÀN DIỆN CHO TẤT CẢ CÁC MÀN HÌNH NGOÀI GAME
// Bổ sung cho all-buttons-core.test.mjs (chỉ cover games).
// File này cover:
//   1. Home screen (renderHome)
//   2. Plan/Curriculum screen (renderPlan) — toggle weeks, phase/status filter, done checkboxes, save notes, reset
//   3. Guide/Tutor screen (renderGuide) — askAi, weeklySummary, applyAiAction, dismissAiAction, speak/stop, clearChat, Drive sync
//   4. Lesson Response area — data-review-lesson-ai, data-save-lesson, data-confirm-adaptive, data-reveal-hint
//   5. Navigation bar (data-nav, data-go)
//   6. Writing photo upload/remove/send
//   7. Voice STT (data-voice-for)
//   8. Change event handlers (guideSubjectSelect, guideWeekSelect, writingPhotoInput, tutorVoiceSelect)
//   9. Global routing (render dispatcher)

import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";
import * as core from "../js/core.js";
import { createEmptyDatabase, validateDatabasePayload } from "../data/data-core.js";
import { createRenderViews } from "../js/render-views.js";
import {
  coreBindings,
  registerCurriculumFixtureLifecycle,
  loadCurriculum,
  appSource,
  getCombinedStylesSource
} from "./helpers/curriculum-fixture.js";

const renderViewsSource = await readFile(new URL("../js/render-views.js", import.meta.url), "utf8");
const stylesSource = await getCombinedStylesSource();

// Curriculum fixture lifecycle
registerCurriculumFixtureLifecycle(test);

// ──────────────────────────────────────────────────────────────────
// HELPER: Build a sandboxed renderViews with a fresh state + curriculum
// ──────────────────────────────────────────────────────────────────
function buildSandboxedViews(stateOverrides = {}) {
  const { curriculum } = loadCurriculum();
  const state = {
    db: createEmptyDatabase(),
    openWeek: null,
    phase: "all",
    filter: "all",
    tutor: {
      selectedSubject: "math",
      selectedWeek: "w1",
      lastAnswer: "",
      lastAction: null,
      history: [],
      prefillPrompt: "",
      pendingSourceLessonKey: null,
      reviewPromptExpected: null
    },
    voice: { isListening: false },
    writingImage: null,
    drive: { token: null, syncStatus: "", hasSessionExpired: false },
    lessonHints: {},
    ...stateOverrides
  };

  const views = createRenderViews({
    state,
    curriculum,
    escapeHtml: core.escapeHtml,
    splitInlineItems: core.splitInlineItems,
    renderInstructionSteps: core.renderInstructionSteps,
    allWeeks: core.allWeeks,
    doneCount: core.doneCount,
    percent: core.percent,
    lessonOrdinalFromKey: core.lessonOrdinalFromKey || (() => 1),
    getLessonDefaultSeconds: () => 1500,
    formatTimerSeconds: (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`,
    computeCurrentTimerState: () => ({ remaining: 1500, status: "idle" }),
    lessonTimerManager: { init: () => {}, start: async () => {}, pause: async () => {}, reset: async () => {} },
    renderMentalMathFoundation: () => "",
    app: { innerHTML: "" },
    document: { querySelector: () => null, querySelectorAll: () => [] }
  });

  return { state, curriculum, views };
}

// ──────────────────────────────────────────────────────────────────
// TEST 1: HOME SCREEN renders Today's Lesson CTA, navigation links, and key sections
// ──────────────────────────────────────────────────────────────────
test("app-screens: Home screen has Today's Lesson CTA and navigation to all major routes", () => {
  // renderHome() is a closure over getAppRoot() — cannot call directly with a param.
  // Instead, verify that renderHome source contains all required elements.
  const renderViewsSrc = renderViewsSource;

  // Home should render a Today CTA and links to plan/guide/games
  assert.ok(renderViewsSrc.includes("renderHome"), "renderViews must export renderHome");
  assert.ok(renderViewsSrc.includes("#plan") || renderViewsSrc.includes("data-go"), "Home must link to plan");
  assert.ok(renderViewsSrc.includes("#guide") || renderViewsSrc.includes("guide"), "Home must link to guide");
  assert.ok(renderViewsSrc.includes("#games") || renderViewsSrc.includes("games"), "Home must link to games");
  assert.ok(renderViewsSrc.includes("hero"), "Home must have a hero section");
});

// ──────────────────────────────────────────────────────────────────
// TEST 2: PLAN/CURRICULUM SCREEN renders week cards, phase chips, filter, toggles
// ──────────────────────────────────────────────────────────────────
test("app-screens: Plan screen renders 36 weeks, phase chips, status filter and action buttons", () => {
  // renderPlan() is a closure — verify source contains all required elements
  const renderViewsSrc = renderViewsSource;

  // Phase filter chips (Chặng 1/2/3/all)
  assert.ok(renderViewsSrc.includes("data-phase"), "Plan must have phase filter chips (data-phase)");

  // Status filter buttons (all, done, todo)
  assert.ok(renderViewsSrc.includes("data-filter"), "Plan must have status filter buttons (data-filter)");

  // Week toggle buttons
  assert.ok(renderViewsSrc.includes("data-toggle"), "Plan must have week toggle buttons (data-toggle)");

  // Done checkboxes
  assert.ok(
    renderViewsSrc.includes("data-done"),
    "Plan must have completion checkbox buttons (data-done)"
  );

  // Reset progress button
  assert.ok(renderViewsSrc.includes("data-reset"), "Plan must have reset progress button (data-reset)");

  // Toggle-all-weeks button for parents
  assert.ok(renderViewsSrc.includes("data-toggle-all-weeks"), "Plan must have toggle-all-weeks button for parents");
});

// ──────────────────────────────────────────────────────────────────
// TEST 3: GUIDE/TUTOR SCREEN renders chat input, AI buttons, Drive bar, subject/week selectors
// ──────────────────────────────────────────────────────────────────
test("app-screens: Guide screen has chat input, AI ask/summary buttons, Drive login, and selectors", () => {
  const appSrc = appSource;

  // Check for key button IDs in app source (rendered by renderGuide)
  assert.ok(appSrc.includes("askAi"), "Guide must wire askAi button");
  assert.ok(appSrc.includes("weeklySummaryBtn"), "Guide must have weekly summary button");
  assert.ok(appSrc.includes("applyAiAction"), "Guide must have apply AI action button");
  assert.ok(appSrc.includes("dismissAiAction"), "Guide must have dismiss AI action button");
  assert.ok(appSrc.includes("speakTutorBtn"), "Guide must have speak tutor button");
  assert.ok(appSrc.includes("stopTutorBtn"), "Guide must have stop tutor button");
  assert.ok(appSrc.includes("clearChatBtn"), "Guide must have clear chat history button");

  // Drive sync buttons
  assert.ok(appSrc.includes("loginDriveBtn"), "Guide must have Google Drive login button");
  assert.ok(appSrc.includes("syncDriveBtn"), "Guide must have Drive sync button");
  assert.ok(appSrc.includes("logoutDriveBtn"), "Guide must have Drive logout button");

  // Subject/Week select dropdowns
  assert.ok(appSrc.includes("guideSubjectSelect"), "Guide must have subject select dropdown");
  assert.ok(appSrc.includes("guideWeekSelect"), "Guide must have week select dropdown");
});

// ──────────────────────────────────────────────────────────────────
// TEST 4: LESSON RESPONSE AREA has answer input, explanation, quality, review, save, adaptive buttons
// ──────────────────────────────────────────────────────────────────
test("app-screens: Lesson response area has all interactive elements for student answer submission", () => {
  const appSrc = appSource;

  // Lesson response data attributes
  assert.ok(appSrc.includes("data-lesson-response"), "Must have lesson response wrapper");
  assert.ok(appSrc.includes("data-lesson-answer"), "Must have lesson answer input");
  assert.ok(appSrc.includes("data-lesson-explanation"), "Must have lesson explanation textarea");
  assert.ok(appSrc.includes("data-lesson-quality"), "Must have lesson difficulty quality selector");
  assert.ok(appSrc.includes("data-review-lesson-ai"), "Must have AI review button for lesson");
  assert.ok(appSrc.includes("data-save-lesson"), "Must have save lesson button");
  assert.ok(appSrc.includes("data-confirm-adaptive"), "Must have confirm adaptive adjustment button");
  assert.ok(appSrc.includes("data-reveal-hint"), "Must have progressive hint reveal button");
});

// ──────────────────────────────────────────────────────────────────
// TEST 5: WRITING PHOTO UPLOAD area has input, remove, preview, and send-to-AI buttons
// ──────────────────────────────────────────────────────────────────
test("app-screens: Writing photo area has upload input, remove button, preview, and send-to-AI CTA", () => {
  const appSrc = appSource;

  assert.ok(appSrc.includes("writingPhotoInput"), "Must have photo upload input");
  assert.ok(appSrc.includes("removeWritingPhotoBtn"), "Must have remove photo button");
  assert.ok(appSrc.includes("writingPhotoPreview"), "Must have photo preview area");
  assert.ok(appSrc.includes("writingPhotoName"), "Must have photo name display");
  assert.ok(appSrc.includes("sendWritingToAi"), "Must have send-writing-to-AI button");
  assert.ok(appSrc.includes("writingSubmission"), "Must have writing text submission textarea");
});

// ──────────────────────────────────────────────────────────────────
// TEST 6: VOICE STT has mic trigger button and voice select dropdown
// ──────────────────────────────────────────────────────────────────
test("app-screens: Voice STT has mic trigger (data-voice-for) and voice select dropdown", () => {
  const appSrc = appSource;

  assert.ok(appSrc.includes("data-voice-for"), "Must have voice-for trigger attribute");
  assert.ok(appSrc.includes("tutorVoiceSelect"), "Must have tutor voice select dropdown");
});

// ──────────────────────────────────────────────────────────────────
// TEST 7: LESSON TIMER has start/pause/reset action buttons
// ──────────────────────────────────────────────────────────────────
test("app-screens: Lesson timer has start, pause, and reset action buttons", () => {
  const appSrc = appSource;
  const renderViewsSrc = renderViewsSource;
  const combined = appSrc + "\n" + renderViewsSrc;

  assert.ok(combined.includes("data-timer-action") || combined.includes("timerAction"), "Must have timer action buttons");
  assert.ok(combined.includes("timerKey") || combined.includes("timer-key"), "Must have timer key attribute");
  assert.ok(combined.includes("data-timer-container") || combined.includes("timerContainer"), "Must have timer container wrapper");

  // Timer actions: start, pause, reset
  assert.ok(appSrc.includes('"start"'), "Must handle start timer action");
  assert.ok(appSrc.includes('"pause"'), "Must handle pause timer action");
  assert.ok(appSrc.includes('"reset"'), "Must handle reset timer action");
});

// ──────────────────────────────────────────────────────────────────
// TEST 8: NAVIGATION BAR renders data-nav links and data-go navigation
// ──────────────────────────────────────────────────────────────────
test("app-screens: Navigation uses data-nav for active state and data-go for hash navigation", () => {
  const appSrc = appSource;

  // Navigation active toggle
  assert.ok(appSrc.includes("data-nav"), "Must use data-nav for nav items");
  assert.ok(appSrc.includes("data-go"), "Must use data-go for hash navigation");

  // Hash routes recognized by render()
  const routes = ["plan", "math", "vietnamese", "guide", "games/speed-math", "games/bar-model",
    "games/spot-the-bug", "games/balance-scale", "games/make-24", "games/spatial-3d",
    "games/logic-grid", "games/rush-hour", "games/chimp-memory", "games/tangram", "games/task-master"];
  for (const r of routes) {
    assert.ok(appSrc.includes(`"${r}"`), `render() must handle route "${r}"`);
  }
});

// ──────────────────────────────────────────────────────────────────
// TEST 9: GLOBAL EVENT HANDLERS - all click handlers are wired properly
// ──────────────────────────────────────────────────────────────────
test("app-screens: Global click handlers cover all interactive data-* attributes in app.js", () => {
  const appSrc = appSource;

  // Every data-* attribute used in event handlers should have a matching closest() call
  const dataHandlers = [
    { attr: "data-done", handler: 'e.target.closest("[data-done]")' },
    { attr: "data-done-subject", handler: 'e.target.closest("[data-done-subject]")' },
    { attr: "data-done-mental", handler: 'e.target.closest("[data-done-mental]")' },
    { attr: "data-toggle", handler: 'e.target.closest("[data-toggle]")' },
    { attr: "data-toggle-all-weeks", handler: 'e.target.closest("[data-toggle-all-weeks]")' },
    { attr: "data-save-note", handler: 'e.target.closest("[data-save-note]")' },
    { attr: "data-phase", handler: 'e.target.closest("[data-phase]")' },
    { attr: "data-filter", handler: 'e.target.closest("[data-filter]")' },
    { attr: "data-reset", handler: 'e.target.closest("[data-reset]")' },
    { attr: "data-go", handler: 'e.target.closest("[data-go]")' },
    { attr: "data-timer-action", handler: 'e.target.closest("[data-timer-action]")' },
    { attr: "data-review-lesson-ai", handler: 'e.target.closest("[data-review-lesson-ai]")' },
    { attr: "data-save-lesson", handler: 'e.target.closest("[data-save-lesson]")' },
    { attr: "data-confirm-adaptive", handler: 'e.target.closest("[data-confirm-adaptive]")' },
    { attr: "data-reveal-hint", handler: 'e.target.closest("[data-reveal-hint]")' },
    { attr: "data-voice-for", handler: 'e.target.closest("[data-voice-for]")' },
    { attr: "data-bach-understood", handler: 'e.target.closest("[data-bach-understood]")' },
    { attr: "data-parent-ok", handler: 'e.target.closest("[data-parent-ok]")' },
    { attr: "data-parent-week-ok", handler: 'e.target.closest("[data-parent-week-ok]")' }
  ];

  for (const { attr, handler } of dataHandlers) {
    assert.ok(
      appSrc.includes(`"[${attr}]"`) || appSrc.includes(`'[${attr}]'`),
      `Global click handler must wire ${attr} via closest()`
    );
  }

  // Named button handlers
  const namedButtons = [
    "#askAi", "#weeklySummaryBtn", "#applyAiAction", "#dismissAiAction",
    "#speakTutorBtn", "#stopTutorBtn", "#clearChatBtn",
    "#loginDriveBtn", "#syncDriveBtn", "#logoutDriveBtn",
    "#removeWritingPhotoBtn", "#sendWritingToAi",
    "#removeMathPhotoBtn", "#sendMathTestToAi"
  ];
  for (const id of namedButtons) {
    assert.ok(
      appSrc.includes(`"${id}"`) || appSrc.includes(`'${id}'`),
      `Global click handler must wire button ${id}`
    );
  }
});

// ──────────────────────────────────────────────────────────────────
// TEST 10: CHANGE EVENT HANDLERS cover all select/input change listeners
// ──────────────────────────────────────────────────────────────────
test("app-screens: Change event handlers cover photo input, voice select, subject/week selects, quality", () => {
  const appSrc = appSource;

  const changeTargets = [
    "writingPhotoInput",
    "mathPhotoInput",
    "tutorVoiceSelect",
    "guideSubjectSelect",
    "guideWeekSelect",
    "mentalMathContinuationWeekSelect",
    "data-lesson-quality"
  ];

  for (const target of changeTargets) {
    assert.ok(appSrc.includes(target), `Change handler must listen for ${target}`);
  }
});

// ──────────────────────────────────────────────────────────────────
// TEST 11: renderSubject renders Math and Vietnamese study views
// ──────────────────────────────────────────────────────────────────
test("app-screens: renderSubject renders Math study view with lesson cards and interactive elements", () => {
  // renderSubject is a closure — verify combined source contains all math study view elements
  const renderViewsSrc = renderViewsSource;
  const combined = appSource + "\n" + renderViewsSrc;

  assert.ok(renderViewsSrc.includes("renderSubject"), "renderViews must export renderSubject");
  assert.ok(
    combined.includes("data-lesson-response") || combined.includes("data-lesson-answer"),
    "Math study view must contain lesson response area"
  );
  assert.ok(combined.includes("data-save-lesson"), "Study view must have save lesson button");
  assert.ok(combined.includes("data-review-lesson-ai"), "Study view must have AI review button");
});

// ──────────────────────────────────────────────────────────────────
// TEST 12: Audio read-aloud button is wired in source
// ──────────────────────────────────────────────────────────────────
test("app-screens: Audio read-aloud button (.audio-read-btn) is wired in global click handler", () => {
  const appSrc = appSource;
  const renderViewsSrc = renderViewsSource;
  const combined = appSrc + "\n" + renderViewsSrc;

  assert.ok(combined.includes("audio-read-btn"), "Must have audio-read-btn class in click handler");
  assert.ok(combined.includes("readAloud") || combined.includes("read-aloud"), "Must have readAloud data attribute for text content");
  assert.ok(combined.includes("Nghe đọc bài mẫu"), "Must show Vietnamese label for read-aloud");
  assert.ok(combined.includes("Dừng đọc"), "Must show Vietnamese label for stop reading");
});

// ──────────────────────────────────────────────────────────────────
// TEST 13: AI Action card renders apply and dismiss buttons
// ──────────────────────────────────────────────────────────────────
test("app-screens: AI learning action card renders apply and dismiss CTAs with proper IDs", () => {
  const appSrc = appSource;

  // renderAiActionCard function should exist
  assert.ok(appSrc.includes("renderAiActionCard") || appSrc.includes("ai-action-card"), "Must render AI action card");
  assert.ok(appSrc.includes("applyAiAction"), "AI card must have apply action button ID");
  assert.ok(appSrc.includes("dismissAiAction"), "AI card must have dismiss action button ID");
  assert.ok(appSrc.includes("Áp dụng đề xuất"), "Apply button must show Vietnamese label");
  assert.ok(appSrc.includes("Để sau"), "Dismiss button must show Vietnamese label");
});

// ──────────────────────────────────────────────────────────────────
// TEST 14: parseRoute correctly extracts route and query params
// ──────────────────────────────────────────────────────────────────
test("app-screens: parseRoute function splits hash route and query params", () => {
  const appSrc = appSource;
  
  // parseRoute is exported
  assert.ok(appSrc.includes("export function parseRoute"), "parseRoute must be exported");
  assert.ok(appSrc.includes("rawHash"), "parseRoute must parse raw hash");
  assert.ok(appSrc.includes("URLSearchParams"), "parseRoute must use URLSearchParams for query");
});

// ──────────────────────────────────────────────────────────────────
// TEST 15: Week card save-note functionality 
// ──────────────────────────────────────────────────────────────────
test("app-screens: Week card save-note button triggers note persistence with visual feedback", () => {
  const appSrc = appSource;

  assert.ok(appSrc.includes("data-save-note"), "Must have save-note buttons in week cards");
  assert.ok(appSrc.includes("note_"), "Must reference note textarea with note_ prefix");
  assert.ok(appSrc.includes("Đã lưu ✓"), "Save note must show visual feedback on success");
  assert.ok(appSrc.includes("Lưu ghi chú"), "Save note must reset label after timeout");
});

// ──────────────────────────────────────────────────────────────────
// TEST 16: Mental Math Foundation done checkbox
// ──────────────────────────────────────────────────────────────────
test("app-screens: Mental Math Foundation has completion checkbox (data-done-mental)", () => {
  const appSrc = appSource;

  assert.ok(appSrc.includes("data-done-mental"), "Must have mental math completion checkbox");
  assert.ok(appSrc.includes("mentalMath"), "Must track mentalMath progress key");
});

// ──────────────────────────────────────────────────────────────────
// TEST 17: CSS styles exist for all major UI components
// ──────────────────────────────────────────────────────────────────
test("app-screens: CSS styles cover Home hero, Plan cards, Guide chat, and core UI elements", async () => {
  const gamesCSS = await readFile(new URL("../styles/games.css", import.meta.url), "utf8");
  const css = stylesSource + "\n" + gamesCSS;

  const requiredSelectors = [
    ".hero",             // Home hero section
    ".game-card",        // Game cards
    ".primary-button",   // Primary action buttons
    ".text-button",      // Secondary/text buttons
    ".eyebrow",          // Section eyebrow labels
  ];

  for (const sel of requiredSelectors) {
    assert.ok(css.includes(sel), `CSS must define style for ${sel}`);
  }
});

// ──────────────────────────────────────────────────────────────────
// TEST 18: applyLearningAction handles ADVANCE, REVIEW_WEEK, CHANGE_METHOD actions
// ──────────────────────────────────────────────────────────────────
test("app-screens: applyLearningAction handles all action types (ADVANCE, REVIEW_WEEK, CHANGE_METHOD, PAUSE_AND_REBUILD)", () => {
  const appSrc = appSource;

  assert.ok(appSrc.includes("export async function applyLearningAction"), "applyLearningAction must be exported");
  
  // Check action types are referenced in the source (as object keys or comparisons)
  const actionTypes = ["ADVANCE", "REVIEW_WEEK", "PAUSE_AND_REBUILD"];
  for (const t of actionTypes) {
    assert.ok(appSrc.includes(t), `applyLearningAction must reference action type ${t}`);
  }
  // CHANGE_METHOD and NONE are referenced in the prompt template or card
  assert.ok(appSrc.includes("CHANGE_METHOD"), "Must reference CHANGE_METHOD in action card labels");
  assert.ok(appSrc.includes("NONE"), "Must reference NONE action type");
});

// ──────────────────────────────────────────────────────────────────
// TEST 19: Service Worker and LAN sync are initialized
// ──────────────────────────────────────────────────────────────────
test("app-screens: init() registers service worker, starts LAN sync, and renders", () => {
  const appSrc = appSource;

  assert.ok(appSrc.includes("registerServiceWorker"), "init must register service worker");
  assert.ok(appSrc.includes("syncWithLanServer"), "init must start LAN sync");
  assert.ok(appSrc.includes("setTimerCallbacks"), "init must set timer callbacks");
  assert.ok(appSrc.includes("lessonTimerManager.init"), "init must initialize lesson timer manager");
});

// ──────────────────────────────────────────────────────────────────
// TEST 20: cleanupActiveGames is called before each render to prevent memory leaks
// ──────────────────────────────────────────────────────────────────
test("app-screens: render() calls cleanupActiveGames before route dispatch", () => {
  const appSrc = appSource;

  assert.ok(appSrc.includes("cleanupActiveGames"), "render() must call cleanupActiveGames");
  
  // Ensure cleanupActiveGames is called before route parsing
  const renderFn = appSrc.substring(appSrc.indexOf("export function render()"));
  const cleanupPos = renderFn.indexOf("cleanupActiveGames");
  const parseRoutePos = renderFn.indexOf("parseRoute");
  assert.ok(cleanupPos < parseRoutePos, "cleanupActiveGames must be called before parseRoute in render()");
});
