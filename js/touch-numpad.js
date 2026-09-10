// js/touch-numpad.js - Bàn phím số cảm ứng lớn (Big Touch Numpad) cho iPad Safari PWA
// Tối ưu hóa phản xạ tính toán 0ms, không phụ thuộc Web Speech STT của Apple

let activeTargetInput = null;
let numpadContainer = null;
let audioCtx = null;

function playNumpadChime(freq = 660) {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    if (!audioCtx) audioCtx = new AudioContextClass();
    if (audioCtx.state === "suspended") audioCtx.resume();

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.06);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.06);
  } catch {
    // Trình duyệt không cho phép audio context khi chưa tương tác
  }
}

export function createTouchNumpadElement() {
  if (document.querySelector("#touchNumpad")) {
    return document.querySelector("#touchNumpad");
  }

  const el = document.createElement("div");
  el.id = "touchNumpad";
  el.className = "touch-numpad-drawer";
  el.hidden = true;
  el.setAttribute("role", "dialog");
  el.setAttribute("aria-label", "Bàn phím số lớn cho iPad");

  el.innerHTML = `
    <div class="touch-numpad-header">
      <span class="touch-numpad-title">🔢 Bàn phím số Bách Lab</span>
      <button type="button" class="touch-numpad-close" aria-label="Đóng bàn phím số">✕</button>
    </div>
    <div class="touch-numpad-grid">
      <button type="button" class="numpad-key" data-key="1">1</button>
      <button type="button" class="numpad-key" data-key="2">2</button>
      <button type="button" class="numpad-key" data-key="3">3</button>
      <button type="button" class="numpad-key" data-key="4">4</button>
      <button type="button" class="numpad-key" data-key="5">5</button>
      <button type="button" class="numpad-key" data-key="6">6</button>
      <button type="button" class="numpad-key" data-key="7">7</button>
      <button type="button" class="numpad-key" data-key="8">8</button>
      <button type="button" class="numpad-key" data-key="9">9</button>
      <button type="button" class="numpad-key numpad-key-op" data-key=".">.</button>
      <button type="button" class="numpad-key" data-key="0">0</button>
      <button type="button" class="numpad-key numpad-key-del" data-key="backspace" aria-label="Xóa lùi">⌫</button>
      <button type="button" class="numpad-key numpad-key-op" data-key="/" aria-label="Phân số">/</button>
      <button type="button" class="numpad-key numpad-key-clear" data-key="clear" aria-label="Xóa hết">C</button>
      <button type="button" class="numpad-key numpad-key-confirm" data-key="confirm" aria-label="Xác nhận">✓</button>
    </div>
  `;

  // Bắt sự kiện bàn phím
  el.addEventListener("click", (e) => {
    const closeBtn = e.target.closest(".touch-numpad-close");
    if (closeBtn) {
      hideTouchNumpad();
      return;
    }

    const keyBtn = e.target.closest(".numpad-key");
    if (!keyBtn || !activeTargetInput) return;

    const key = keyBtn.getAttribute("data-key");
    handleNumpadInput(key);
  });

  document.body.appendChild(el);
  numpadContainer = el;
  return el;
}

export function handleNumpadInput(key) {
  if (!activeTargetInput) return;

  const currentVal = activeTargetInput.value || "";
  let newVal = currentVal;

  if (key === "backspace") {
    newVal = currentVal.slice(0, -1);
    playNumpadChime(440);
  } else if (key === "clear") {
    newVal = "";
    playNumpadChime(350);
  } else if (key === "confirm") {
    playNumpadChime(880);
    hideTouchNumpad();
    activeTargetInput.focus();
    return;
  } else {
    // 0-9, dot, slash
    newVal = currentVal + key;
    playNumpadChime(660);
  }

  activeTargetInput.value = newVal;
  activeTargetInput.dispatchEvent(new Event("input", { bubbles: true }));
  activeTargetInput.dispatchEvent(new Event("change", { bubbles: true }));
}

export function showTouchNumpadFor(inputElement) {
  if (!inputElement) return;
  activeTargetInput = inputElement;
  const numpad = createTouchNumpadElement();
  numpad.hidden = false;
  numpad.classList.add("visible");
}

export function hideTouchNumpad() {
  if (numpadContainer) {
    numpadContainer.hidden = true;
    numpadContainer.classList.remove("visible");
  }
}

export function initTouchNumpadListener() {
  createTouchNumpadElement();

  document.addEventListener("focusin", (e) => {
    const input = e.target;
    if (input && input.matches && (input.matches("[data-lesson-answer]") || input.matches(".touch-numpad-input"))) {
      showTouchNumpadFor(input);
    }
  });

  document.addEventListener("click", (e) => {
    const toggleBtn = e.target.closest("[data-open-numpad]");
    if (toggleBtn) {
      const targetSelector = toggleBtn.getAttribute("data-open-numpad");
      const target = document.querySelector(targetSelector);
      if (target) {
        showTouchNumpadFor(target);
      }
    }
  });
}
