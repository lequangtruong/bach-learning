// Service Worker cho Bach Learning Lab (PWA Offline Static Assets)
// Chỉ cache tài nguyên tĩnh same-origin thuộc danh mục cho phép.
// TUYỆT ĐỐI KHÔNG cache API (/api/*), Authorization header, Google APIs, token hoặc DB riêng tư.

const CACHE_NAME = "bach-learning-v41";
const STATIC_ASSETS = [
  "./",
  "index.html",
  "styles.css",
  "styles/base.css",
  "styles/components.css",
  "styles/lessons.css",
  "styles/responsive.css",
  "styles/games.css",
  "public-config.js",
  "app.js",
  "js/core.js",
  "js/storage.js",
  "js/drive-sync.js",
  "js/study-timer.js",
  "js/touch-numpad.js",
  "js/keyboard-adapt.js",
  "js/render-views.js",
  "js/render-games.js",
  "js/render-balance-scale.js",
  "js/render-make-24.js",
  "js/speed-math.js",
  "js/speed-math-generators.js",
  "js/spot-the-bug.js",
  "js/spot-the-bug-cases.js",
  "js/bar-model-studio.js",
  "js/bar-model-challenges.js",
  "js/balance-scale.js",
  "js/balance-scale-challenges-part1.js",
  "js/balance-scale-challenges-part2.js",
  "js/balance-scale-challenges-part3.js",
  "js/balance-scale-challenges.js",
  "js/balance-scale-dual-challenges.js",
  "js/balance-scale-detective.js",
  "js/make-24.js",
  "js/make-24-bank-part1.js",
  "js/make-24-bank-part2.js",
  "js/make-24-bank.js",
  "js/spatial-3d.js",
  "js/spatial-3d-challenges-part1.js",
  "js/spatial-3d-challenges-part2.js",
  "js/spatial-3d-challenges.js",
  "js/render-spatial-3d.js",
  "js/logic-grid.js",
  "js/logic-grid-cases-part1.js",
  "js/logic-grid-cases-part2.js",
  "js/logic-grid-cases.js",
  "js/render-logic-grid.js",
  "js/rush-hour.js",
  "js/rush-hour-boards-part1.js",
  "js/rush-hour-boards-part2.js",
  "js/rush-hour-boards.js",
  "js/render-rush-hour.js",
  "js/chimp-memory.js",
  "js/render-chimp-memory.js",
  "js/adaptive-engine.js",
  "js/badge-system.js",
  "js/tangram-puzzles.js",
  "js/tangram.js",
  "js/render-tangram.js",
  "js/voice-input.js",
  "js/ai-client.js",
  "data/curriculum-factory.js",
  "data/curriculum.js",
  "data/data-core.js",
  "manifest.webmanifest",
  "apple-touch-icon.png",
  "icon-192.png",
  "icon-512.png"
];

// Helper kiểm tra request có hợp lệ để cache hay không (dùng cho cả test & runtime)
export function shouldCacheRequest(request) {
  if (!request || request.method !== "GET") return false;

  const workerOrigin = typeof self !== "undefined" && self.location ? self.location.origin : "http://localhost";
  const url = new URL(request.url, workerOrigin);

  // Chỉ cho phép same-origin (chặn Google APIs, Google Drive, fonts cdn, v.v. vào cache tĩnh này)
  if (typeof self !== "undefined" && self.location && url.origin !== self.location.origin) {
    return false;
  }

  // Chặn Authorization header
  if (request.headers && (request.headers.has("authorization") || request.headers.has("x-google-id-token"))) {
    return false;
  }

  // Chặn endpoint API và các request có chứa token hoặc auth
  if (
    url.pathname.startsWith("/api/") ||
    url.pathname.startsWith("/api") ||
    url.searchParams.has("token") ||
    url.searchParams.has("auth") ||
    url.searchParams.has("access_token") ||
    url.searchParams.has("id_token")
  ) {
    return false;
  }

  const relativePath = url.pathname.replace(/^\/+/, "") || "index.html";
  if (!STATIC_ASSETS.includes(relativePath) && relativePath !== ".") {
    return false;
  }

  return true;
}

if (typeof self !== "undefined") self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      // Dùng nạp an toàn từng asset để không bị fail cả cụm nếu thiếu icon
      for (const asset of STATIC_ASSETS) {
        try {
          await cache.add(asset);
        } catch {
          // Bỏ qua nếu asset tùy chọn chưa có (ví dụ icon png)
        }
      }
    }).then(() => self.skipWaiting())
  );
});

if (typeof self !== "undefined") self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

if (typeof self !== "undefined") self.addEventListener("message", event => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

if (typeof self !== "undefined") self.addEventListener("fetch", event => {
  if (!shouldCacheRequest(event.request)) {
    return;
  }

  // Network-first với fallback cache cho tài nguyên tĩnh
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Chỉ lưu cache các phản hồi hợp lệ (HTTP 200, loại basic cùng origin)
        if (response && response.status === 200 && response.type === "basic") {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, clone);
          });
        }
        return response;
      })
      .catch(() => {
        return caches.match(event.request).then(cached => {
          if (cached) return cached;
          if (event.request.mode === "navigate") {
            return caches.match("index.html") || caches.match("./");
          }
          return new Response("Mất kết nối mạng", { status: 503, statusText: "Offline" });
        });
      })
  );
});
