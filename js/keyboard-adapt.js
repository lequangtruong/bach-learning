// js/keyboard-adapt.js - Tối ưu hóa hiển thị khi gõ chữ/số trên iPad Safari nằm ngang (Landscape)
// Ngăn chặn bàn phím ảo (Virtual Keyboard) che khuất ô nhập liệu, đề bài, sơ đồ và nút nộp bài.

let blurTimeout = null;

export function initKeyboardAdaptation() {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  // 1. Lắng nghe sự kiện Focus vào bất kỳ Input / Textarea nào
  document.addEventListener("focusin", (e) => {
    const target = e.target;
    if (!target || !target.tagName) return;

    const isInput = target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.tagName === "SELECT";
    if (!isInput) return;

    if (blurTimeout) {
      clearTimeout(blurTimeout);
      blurTimeout = null;
    }

    // Đánh dấu trạng thái bàn phím đang mở
    document.body.classList.add("keyboard-open");
    target.classList.add("input-focused-highlight");

    // Cuộn thông minh để đưa ô nhập liệu và khu vực xung quanh lên vị trí 25% - 35% trên cùng màn hình
    // Đợi 260ms để hoạt ảnh trượt lên của bàn phím ảo iOS Safari hoàn tất
    setTimeout(() => {
      if (document.activeElement === target) {
        scrollInputIntoComfortZone(target);
      }
    }, 260);
  });

  // 2. Lắng nghe sự kiện Blur khi kết thúc gõ
  document.addEventListener("focusout", (e) => {
    const target = e.target;
    if (target && target.classList) {
      target.classList.remove("input-focused-highlight");
    }

    // Trì hoãn 150ms phòng trường hợp chuyển nhanh sang ô nhập liệu khác
    blurTimeout = setTimeout(() => {
      const active = document.activeElement;
      const isStillInput = active && (active.tagName === "INPUT" || active.tagName === "TEXTAREA" || active.tagName === "SELECT");
      if (!isStillInput) {
        document.body.classList.remove("keyboard-open");
      }
    }, 150);
  });

  // 3. Hỗ trợ Visual Viewport API (iOS Safari 13+)
  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", () => {
      const active = document.activeElement;
      if (active && (active.tagName === "INPUT" || active.tagName === "TEXTAREA")) {
        scrollInputIntoComfortZone(active);
      }
    });
  }
}

/**
 * Cuộn phần tử vào vùng an toàn (Comfort Zone):
 * Trên iPad nằm ngang (Landscape), bàn phím chiếm khoảng 50% màn hình phía dưới.
 * Đưa ô nhập liệu vào khoảng 25% - 35% từ đỉnh màn hình để cả đề bài phía trên
 * và ô nhập liệu + nút bấm đều hiển thị rõ ràng, không bị bàn phím che mất.
 */
export function scrollInputIntoComfortZone(element) {
  if (!element || typeof element.getBoundingClientRect !== "function") return;

  try {
    const rect = element.getBoundingClientRect();
    const viewportHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;
    
    // Vị trí mục tiêu: cách đỉnh viewport nhìn thấy khoảng 28%
    const targetTop = Math.max(70, viewportHeight * 0.28);
    const offsetDiff = rect.top - targetTop;

    if (Math.abs(offsetDiff) > 20) {
      window.scrollBy({
        top: offsetDiff,
        behavior: "smooth"
      });
    }

    // Nếu phần tử nằm trong một form hoặc card có nút submit ngay bên dưới,
    // đảm bảo cả cụm nút submit cũng được kéo lên
    const formRow = element.closest(".answer-input-row, form, .lesson-response, .bug-problem-card");
    if (formRow) {
      const formRect = formRow.getBoundingClientRect();
      if (formRect.bottom > viewportHeight - 20) {
        formRow.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
  } catch {
    // Fallback an toàn nếu trình duyệt cũ
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}
