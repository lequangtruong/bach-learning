// 音声入力（STT）、音声読み上げ（TTS）、効果音（Web Audio API）モジュール
import { state } from "./core.js";
import { appendVoiceTranscript } from "../data/data-core.js";

// --- Voice STT Adapter: Progressive enhancement qua Web Speech API (Safari iPad) ---
export const voiceInput = {
  checkSupport() {
    const SpeechClass = typeof window !== "undefined" ? (window.SpeechRecognition || window.webkitSpeechRecognition) : null;
    state.voice.supported = Boolean(SpeechClass);
    return state.voice.supported;
  },

  start(targetSelector, onTextCallback) {
    const SpeechClass = typeof window !== "undefined" ? (window.SpeechRecognition || window.webkitSpeechRecognition) : null;
    if (!SpeechClass) {
      alert("Trình duyệt hiện tại chưa hỗ trợ nhận dạng giọng nói. Bách và phụ huynh hãy dùng bàn phím nhé!");
      return;
    }

    if (typeof navigator !== "undefined" && navigator.onLine === false) {
      alert("Nhận dạng giọng nói trên Safari cần kết nối mạng. Bách có thể dùng bàn phím khi đang offline.");
      return;
    }

    if (state.voice.isListening) {
      this.stop();
      return;
    }

    try {
      const recognition = new SpeechClass();
      recognition.lang = "vi-VN";
      recognition.continuous = true;
      recognition.interimResults = true;
      state.voice.finalTranscript = "";

      recognition.onstart = () => {
        state.voice.isListening = true;
        state.voice.activeTargetId = targetSelector;
        state.voice.statusText = "Đang nghe Bách nói… (bấm lần nữa để dừng)";
        updateVoiceUi(true);
      };

      recognition.onresult = (event) => {
        let interim = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const trans = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            state.voice.finalTranscript = appendVoiceTranscript(state.voice.finalTranscript, trans);
          } else {
            interim += trans;
          }
        }
        const fullLiveText = appendVoiceTranscript(state.voice.finalTranscript, interim);
        if (fullLiveText && typeof onTextCallback === "function") {
          onTextCallback(fullLiveText);
        }
      };

      recognition.onerror = (event) => {
        console.warn("Lỗi nhận dạng giọng nói:", event.error);
        if (event.error === "not-allowed") {
          alert("Quyền truy cập micro đã bị từ chối. Vui lòng bật micro trong Cài đặt Safari để nói hoặc dùng bàn phím.");
        } else if (event.error === "network") {
          alert("Nhận dạng giọng nói cần kết nối mạng để xử lý.");
        } else if (event.error === "no-speech") {
          alert("Chưa nghe thấy Bách nói. Hãy thử bấm micro và nói gần hơn.");
        } else if (["audio-capture", "service-not-allowed", "language-not-supported", "aborted"].includes(event.error)) {
          alert(`Không thể nhận dạng giọng nói (${event.error}). Bách có thể dùng bàn phím.`);
        }
        this.stop();
      };

      recognition.onend = () => {
        this.stop();
      };

      state.voice.recognition = recognition;
      recognition.start();
    } catch (err) {
      console.warn("Không thể bật micro:", err);
      this.stop();
    }
  },

  stop() {
    if (state.voice.recognition) {
      try {
        state.voice.recognition.stop();
      } catch {}
      state.voice.recognition = null;
    }
    state.voice.isListening = false;
    state.voice.activeTargetId = null;
    state.voice.statusText = "";
    updateVoiceUi(false);
  }
};

// --- Tutor TTS: lightweight, explicit, local browser speech ---
export const tutorSpeech = {
  get synthesis() {
    return typeof window !== "undefined" ? window.speechSynthesis : null;
  },

  isSupported() {
    return typeof window !== "undefined" &&
      "speechSynthesis" in window &&
      typeof window.SpeechSynthesisUtterance === "function";
  },

  stop() {
    if (this.synthesis) this.synthesis.cancel();
  },

  chooseVietnameseVoice() {
    const voices = this.synthesis?.getVoices?.() || [];
    const vietnamese = voices.filter(voice => /^vi(?:-|_)/i.test(voice.lang || ""));
    if (!vietnamese.length) return null;
    const femaleHints = /(female|nữ|nu|hoai|mai|linh|uyen|huyen|my|thuy|google vietnamese)/i;
    return vietnamese.find(voice => femaleHints.test(`${voice.name} ${voice.voiceURI}`)) || vietnamese[0];
  },

  speak(text) {
    if (!this.isSupported() || typeof text !== "string" || !text.trim()) return false;
    const synthesis = this.synthesis;
    this.stop();
    const utterance = new window.SpeechSynthesisUtterance(text.trim().slice(0, 6000));
    utterance.lang = "vi-VN";
    utterance.rate = 0.92;
    utterance.pitch = 1.08;
    utterance.volume = 0.9;
    const voice = this.chooseVietnameseVoice();
    if (voice) utterance.voice = voice;
    synthesis.speak(utterance);
    return true;
  }
};

// --- Web Audio chime effect ---
export const tutorAudio = {
  ctx: null,
  init() {
    if (typeof window === "undefined") return;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    if (!this.ctx) {
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }
  },
  playSuccessChime() {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const freqs = [523.25, 659.25, 783.99, 1046.50];
      freqs.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        gain.gain.setValueAtTime(0.12, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.3);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.3);
      });
    } catch {
      // safe fallback if audio context is blocked
    }
  }
};

export function updateVoiceUi(isListening) {
  if (typeof document === "undefined") return;
  const micButtons = document.querySelectorAll("[data-voice-for]");
  micButtons.forEach(btn => {
    btn.classList.toggle("listening", isListening);
    if (!btn.dataset.idleLabel) btn.dataset.idleLabel = btn.textContent;
    const isActive = isListening && btn.dataset.voiceFor === state.voice.activeTargetId;
    btn.textContent = isActive ? "⏹ Dừng đọc" : btn.dataset.idleLabel;
    btn.setAttribute("aria-pressed", String(isActive));
    btn.title = isActive ? "Đang nghe… bấm để dừng" : "Nhập bằng giọng nói (Tiếng Việt)";
  });
  const voiceIndicator = document.querySelector("#voiceIndicator");
  if (voiceIndicator) {
    voiceIndicator.hidden = !isListening;
  }
}
