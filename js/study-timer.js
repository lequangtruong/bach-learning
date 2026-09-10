// js/study-timer.js - Bộ quản lý đồng hồ đếm ngược bài học (Durable Wall-Clock Timer)
import { state, escapeHtml } from "./core.js";
import {
  getLessonDefaultSeconds,
  formatTimerSeconds,
  computeCurrentTimerState
} from "../data/data-core.js";

let _saveLocal = () => Promise.resolve();
let _render = () => {};

export function setTimerCallbacks({ saveLocal, render } = {}) {
  if (typeof saveLocal === "function") _saveLocal = saveLocal;
  if (typeof render === "function") _render = render;
}

export const lessonTimerManager = {
  intervalId: null,

  init() {
    this.recomputeAll();
    this.ensureTicker();

    if (typeof document !== "undefined") {
      document.addEventListener("visibilitychange", () => {
        this.recomputeAll();
        this.updateActiveElements();
        this.ensureTicker();
        if (document.visibilityState === "hidden") {
          this.persistActiveRunning();
        }
      });
    }

    if (typeof window !== "undefined") {
      window.addEventListener("pagehide", () => {
        this.recomputeAll();
        this.persistActiveRunning();
      });
    }
  },

  recomputeAll() {
    if (!state.db.lessonTimers) return;
    const now = Date.now();
    let hasChanges = false;
    for (const [key, timer] of Object.entries(state.db.lessonTimers)) {
      if (timer && timer.status === "running") {
        const computed = computeCurrentTimerState(timer, now);
        if (computed.status !== timer.status || computed.remainingSeconds !== timer.remainingSeconds) {
          state.db.lessonTimers[key] = {
            ...timer,
            status: computed.status,
            remainingSeconds: computed.remainingSeconds,
            lastStartedAt: computed.status === "running" ? new Date(now).toISOString() : null,
            updatedAt: new Date(now).toISOString()
          };
          hasChanges = true;
        }
      }
    }
    return hasChanges;
  },

  hasRunningTimers() {
    if (!state.db.lessonTimers) return false;
    return Object.values(state.db.lessonTimers).some(t => t?.status === "running");
  },

  ensureTicker() {
    if (this.hasRunningTimers()) {
      if (!this.intervalId && typeof setInterval !== "undefined") {
        this.intervalId = setInterval(() => {
          this.tick();
        }, 1000);
      }
    } else {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    }
  },

  tick() {
    if (!state.db.lessonTimers) return;
    const now = Date.now();
    let hasCompletedTransition = false;

    for (const [key, timer] of Object.entries(state.db.lessonTimers)) {
      if (timer && timer.status === "running") {
        const computed = computeCurrentTimerState(timer, now);
        state.db.lessonTimers[key] = {
          ...timer,
          status: computed.status,
          remainingSeconds: computed.remainingSeconds,
          lastStartedAt: computed.status === "running" ? new Date(now).toISOString() : null,
          updatedAt: new Date(now).toISOString()
        };
        if (computed.status === "completed") {
          hasCompletedTransition = true;
        }
      }
    }

    this.updateActiveElements();
    this.ensureTicker();

    if (hasCompletedTransition) {
      _saveLocal(true).catch(err => console.warn("Lỗi lưu trạng thái timer hết giờ:", err));
      _render();
    }
  },

  async persistActiveRunning() {
    if (this.hasRunningTimers()) {
      try {
        await _saveLocal(true);
      } catch (err) {
        console.warn("Lỗi lưu timer khi ẩn trang:", err);
      }
    }
  },

  updateActiveElements() {
    if (typeof document === "undefined") return;
    document.querySelectorAll("[data-timer-container]").forEach(container => {
      const key = container.dataset.timerContainer;
      const dayLabel = container.dataset.dayLabel || "";
      const defaultSecs = getLessonDefaultSeconds(dayLabel);
      const savedTimer = state.db.lessonTimers?.[key] || {
        status: "idle",
        remainingSeconds: defaultSecs,
        durationSeconds: defaultSecs
      };
      const current = computeCurrentTimerState(savedTimer);
      const isRunning = current.status === "running";
      const isPaused = current.status === "paused";
      const isCompleted = current.status === "completed";
      const timeDisplay = formatTimerSeconds(current.remainingSeconds);

      const clockEl = container.querySelector("[data-timer-display]");
      if (clockEl) {
        clockEl.textContent = timeDisplay;
        clockEl.setAttribute("aria-label", `Thời gian còn lại ${timeDisplay}`);
        clockEl.classList.toggle("time-up", isCompleted);
      }

      const badgeEl = container.querySelector(".lesson-timer-badge");
      if (badgeEl) {
        badgeEl.textContent = isCompleted ? "Hết giờ học bài này!" : isRunning ? "Đang bấm giờ" : isPaused ? "Tạm dừng" : "Chưa bấm giờ";
        badgeEl.classList.toggle("completed", isCompleted);
        badgeEl.classList.toggle("running", isRunning);
      }

      const controlsEl = container.querySelector(".lesson-timer-controls");
      if (controlsEl) {
        controlsEl.innerHTML = `
          ${!isRunning ? `<button class="timer-btn timer-btn-primary" data-timer-action="start" data-timer-key="${escapeHtml(key)}" type="button">${isPaused ? "Tiếp tục" : isCompleted ? "Làm lại từ đầu" : "Bắt đầu"}</button>` : `<button class="timer-btn timer-btn-pause" data-timer-action="pause" data-timer-key="${escapeHtml(key)}" type="button">Tạm dừng</button>`}
          <button class="timer-btn timer-btn-reset" data-timer-action="reset" data-timer-key="${escapeHtml(key)}" type="button" ${current.status === "idle" ? "disabled" : ""}>Đặt lại</button>
        `;
      }

      let noticeEl = container.querySelector(".lesson-timer-notice");
      if (isCompleted) {
        if (!noticeEl) {
          noticeEl = document.createElement("div");
          noticeEl.className = "lesson-timer-notice";
          noticeEl.setAttribute("role", "status");
          noticeEl.textContent = "Hết giờ học bài này! Bách có thể thư thả xem lại, hoàn thành phần đang làm hoặc nộp bài; không bị ép nộp ngay.";
          container.appendChild(noticeEl);
        }
      } else if (noticeEl) {
        noticeEl.remove();
      }
    });
  },

  async start(key, dayLabel = "") {
    if (!state.db.lessonTimers) state.db.lessonTimers = {};
    const defaultSecs = getLessonDefaultSeconds(dayLabel);
    const existing = state.db.lessonTimers[key] || {
      status: "idle",
      remainingSeconds: defaultSecs,
      durationSeconds: defaultSecs
    };

    const duration = existing.durationSeconds || defaultSecs;
    let remaining = Number.isInteger(existing.remainingSeconds) ? existing.remainingSeconds : duration;

    if (existing.status === "completed" || remaining <= 0) {
      remaining = duration;
    }

    const now = new Date().toISOString();
    state.db.lessonTimers[key] = {
      status: "running",
      remainingSeconds: remaining,
      durationSeconds: duration,
      lastStartedAt: now,
      updatedAt: now
    };

    this.ensureTicker();
    this.updateActiveElements();
    await _saveLocal(true);
  },

  async pause(key) {
    if (!state.db.lessonTimers?.[key]) return;
    const current = computeCurrentTimerState(state.db.lessonTimers[key]);
    const now = new Date().toISOString();
    state.db.lessonTimers[key] = {
      ...state.db.lessonTimers[key],
      status: current.remainingSeconds <= 0 ? "completed" : "paused",
      remainingSeconds: current.remainingSeconds,
      lastStartedAt: null,
      updatedAt: now
    };

    this.ensureTicker();
    this.updateActiveElements();
    await _saveLocal(true);
  },

  async reset(key, dayLabel = "") {
    if (!state.db.lessonTimers) state.db.lessonTimers = {};
    const defaultSecs = getLessonDefaultSeconds(dayLabel);
    const duration = state.db.lessonTimers[key]?.durationSeconds || defaultSecs;
    const now = new Date().toISOString();

    state.db.lessonTimers[key] = {
      status: "idle",
      remainingSeconds: duration,
      durationSeconds: duration,
      lastStartedAt: null,
      updatedAt: now
    };

    this.ensureTicker();
    this.updateActiveElements();
    await _saveLocal(true);
  }
};
