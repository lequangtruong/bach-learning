import { createServer, request } from "node:http";
import { readFile, writeFile, rename } from "node:fs/promises";
import { watch } from "node:fs";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import { networkInterfaces } from "node:os";

// Tự động nạp cấu hình từ .env nếu có (Node.js 20+)
try { process.loadEnvFile(); } catch {}

import tutorHandler from "./api/tutor.js";
import ttsHandler from "./api/tts.js";
import { validateDatabasePayload } from "./data/data-core.js";

const root = fileURLToPath(new URL(".", import.meta.url));
const port = Number(process.env.BACH_PORT || 4173);
const host = process.env.BACH_HOST || "0.0.0.0";

// STRICT STATIC ASSET ALLOWLIST:
// Chỉ phục vụ đúng các file công khai phục vụ frontend, TUYỆT ĐỐI không expose repo internals
// như server.mjs, api/, test/, content/, package.json, spec.json, .git khi chạy LAN.
const PUBLIC_ALLOWLIST = new Set([
  "",
  "index.html",
  "styles.css",
  "public-config.js",
  "app.js",
  "data/curriculum-factory.js",
  "data/curriculum.js",
  "data/data-core.js",
  "manifest.webmanifest",
  "sw.js",
  "icon-192.png",
  "icon-512.png",
  "apple-touch-icon.png"
]);

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png"
};

// Quản lý kết nối SSE Live-Reload tự động refresh khi mã nguồn thay đổi
const liveReloadClients = new Set();

function handleLiveReload(req, res) {
  res.writeHead(200, {
    "Content-Type": "text/event-stream; charset=utf-8",
    "Cache-Control": "no-cache, no-transform",
    "Connection": "keep-alive",
    "Access-Control-Allow-Origin": "*"
  });
  res.write("retry: 2000\n\n");
  res.write("data: connected\n\n");

  liveReloadClients.add(res);

  req.on("close", () => {
    liveReloadClients.delete(res);
  });
}

export function broadcastReload() {
  if (liveReloadClients.size === 0) return;
  for (const client of liveReloadClients) {
    try {
      client.write("data: reload\n\n");
    } catch {
      liveReloadClients.delete(client);
    }
  }
}

// Watch các file frontend chính để tự động kích hoạt refresh
let debounceTimer = null;
function triggerReloadDebounced(filename) {
  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    const fn = String(filename || "");
    if (
      fn.includes("db-lan") ||
      fn.includes(".git") ||
      fn.includes(".tmp") ||
      fn.endsWith(".log") ||
      fn.startsWith(".")
    ) {
      return;
    }
    broadcastReload();
  }, 200);
}

export function startLiveReloadWatcher() {
  try {
    const watchDirs = [root, join(root, "js"), join(root, "styles"), join(root, "data")];
    for (const dir of watchDirs) {
      const w = watch(dir, { recursive: false }, (_eventType, filename) => {
        triggerReloadDebounced(filename);
      });
      if (w && typeof w.unref === "function") {
        w.unref();
      }
    }
  } catch {
    // Bỏ qua nếu watcher không được hệ điều hành cấp quyền
  }
}

async function handleApi(req, res) {
  let urlPath = (req.url || "").split("?")[0];
  if (urlPath.startsWith("/bach-learning/api/")) {
    urlPath = urlPath.replace(/^\/bach-learning/, "");
  }
  if (req.method === "GET" && urlPath === "/api/live-reload") {
    handleLiveReload(req, res);
    return true;
  }
  if (req.method === "GET" && urlPath === "/api/ping") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end(JSON.stringify({ status: "ok", mode: "local-mac", time: new Date().toISOString() }));
    return true;
  }
  if (req.method === "POST" && (urlPath === "/api/tutor" || urlPath === "/api/gemini")) {
    await tutorHandler(req, res);
    return true;
  }
  if (urlPath === "/api/tts") {
    await ttsHandler(req, res);
    return true;
  }
  if (urlPath === "/api/db") {
    const dbPath = join(root, "data", "db-lan.json");
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
      res.statusCode = 204;
      res.end();
      return true;
    }
    if (req.method === "GET") {
      try {
        const content = await readFile(dbPath, "utf8");
        res.statusCode = 200;
        res.end(content);
      } catch (err) {
        if (err.code === "ENOENT") {
          res.statusCode = 200;
          res.end(JSON.stringify(null));
        } else {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: err.message }));
        }
      }
      return true;
    }
    if (req.method === "POST") {
      let body = "";
      for await (const chunk of req) {
        body += chunk;
        if (body.length > 5 * 1024 * 1024) {
          res.statusCode = 413;
          res.end(JSON.stringify({ error: "Payload quá lớn" }));
          return true;
        }
      }
      try {
        const parsed = JSON.parse(body);
        if (!validateDatabasePayload(parsed)) {
          res.statusCode = 400;
          res.end(JSON.stringify({ error: "Dữ liệu cơ sở dữ liệu không hợp lệ" }));
          return true;
        }
        const tmpPath = `${dbPath}.tmp`;
        await writeFile(tmpPath, JSON.stringify(parsed, null, 2), "utf8");
        await rename(tmpPath, dbPath);
        res.statusCode = 200;
        res.end(JSON.stringify({ status: "ok", updatedAt: parsed.updatedAt }));
      } catch (err) {
        res.statusCode = 500;
        res.end(JSON.stringify({ error: err.message }));
      }
      return true;
    }
  }
  return false;
}

export function isStaticAllowed(relativeNormalizedPath) {
  const clean = relativeNormalizedPath.replace(/^\/+/, "");
  if (PUBLIC_ALLOWLIST.has(clean)) return true;
  if (/^js\/[a-zA-Z0-9_\-]+\.js$/.test(clean)) return true;
  if (/^styles\/[a-zA-Z0-9_\-]+\.css$/.test(clean)) return true;
  if (/^data\/phases\/[a-zA-Z0-9_\-]+\.js$/.test(clean)) return true;
  return false;
}

const server = createServer(async (req, res) => {
  if (await handleApi(req, res)) return;

  let requested;
  try {
    requested = decodeURIComponent((req.url || "/").split("?")[0]);
  } catch {
    res.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("400 Bad Request: Đường dẫn URL không hợp lệ.");
    return;
  }

  // Proxy /kikitori sang máy chủ Kikitori (port 8088)
  if (requested === "/kikitori" || requested.startsWith("/kikitori/")) {
    const proxyReq = request({
      hostname: "127.0.0.1",
      port: 8088,
      path: req.url,
      method: req.method,
      headers: req.headers
    }, (proxyRes) => {
      res.writeHead(proxyRes.statusCode, proxyRes.headers);
      proxyRes.pipe(res);
    });
    proxyReq.on("error", () => {
      res.writeHead(502, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("502 Bad Gateway: Kikitori server (port 8088) chưa khởi động.");
    });
    req.pipe(proxyReq);
    return;
  }


  const rawUrl = (req.url || "/").split("?")[0];
  const hasBachPrefix = rawUrl === "/bach-learning" || rawUrl.startsWith("/bach-learning/");

  // Tự động strip prefix /bach-learning hoặc /bach-learning/
  if (requested === "/bach-learning" || requested === "/bach-learning/") {
    requested = "/";
  } else if (requested.startsWith("/bach-learning/")) {
    requested = requested.slice("/bach-learning".length);
  }

  // Tự động chuyển hướng các đường dẫn SPA sạch (ví dụ /bach-learning/games/task-master -> /bach-learning/#games/task-master)
  const cleanRoute = requested.replace(/^\/+/, "");
  if (
    !isStaticAllowed(cleanRoute) &&
    !cleanRoute.includes(".") &&
    (cleanRoute.startsWith("games") || cleanRoute === "plan" || cleanRoute === "guide" || cleanRoute.startsWith("math") || cleanRoute.startsWith("vietnamese"))
  ) {
    const prefix = hasBachPrefix ? "/bach-learning" : "";
    res.writeHead(302, { "Location": `${prefix}/#${cleanRoute}` });
    res.end();
    return;
  }

  const relative = requested === "/" ? "index.html" : requested.replace(/^\/+/, "");
  const normalizedRelative = normalize(relative);

  // Chặn dotfiles, thư mục cha traversal hoặc đường dẫn không nằm trong allowlist
  if (
    normalizedRelative.startsWith("..") ||
    normalizedRelative.includes("/.") ||
    normalizedRelative.startsWith(".") ||
    !isStaticAllowed(normalizedRelative)
  ) {
    res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("403 Forbidden: Tài nguyên không thuộc danh mục công khai.");
    return;
  }

  const file = normalize(join(root, normalizedRelative));
  if (!file.startsWith(root)) {
    res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Forbidden");
    return;
  }

  // Tự động inject Client ID từ .env vào public-config.js nếu có cấu hình thật
  if (normalizedRelative === "public-config.js") {
    const envClientId = process.env.GOOGLE_TUTOR_CLIENT_ID || process.env.GEMINI_CLIENT_ID;
    if (envClientId && !envClientId.includes("your-google-oauth") && !envClientId.startsWith("PLACEHOLDER")) {
      res.writeHead(200, {
        "Content-Type": "text/javascript; charset=utf-8",
        "Cache-Control": "no-cache"
      });
      res.end(`// Cấu hình động từ biến môi trường máy chủ\nwindow.BACH_GOOGLE_CLIENT_ID = ${JSON.stringify(envClientId.trim())};\n`);
      return;
    }
  }

  try {
    const body = await readFile(file);
    res.writeHead(200, {
      "Content-Type": MIME_TYPES[extname(file)] || "application/octet-stream",
      "Cache-Control": "no-cache"
    });
    res.end(body);
  } catch {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Không tìm thấy trang");
  }
});

// Chỉ listen khi chạy trực tiếp qua node server.mjs
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  server.listen(port, host, () => {
    startLiveReloadWatcher();
    console.log(`\n🚀 Bách Learning Lab đang chạy:`);
    console.log(`   - Local: http://localhost:${port}`);
    if (host === "0.0.0.0") {
      const interfaces = networkInterfaces();
      const addresses = [];
      for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name] || []) {
          if (iface.family === "IPv4" && !iface.internal) {
            addresses.push(iface.address);
          }
        }
      }
      if (addresses.length > 0) {
        addresses.forEach((ip) => {
          console.log(`   - LAN:   http://${ip}:${port}`);
        });
      } else {
        console.log(`   - LAN:   http://${host}:${port}`);
      }
    } else {
      console.log(`   - LAN:   http://${host}:${port}`);
    }
    console.log(`\n   Nhấn Ctrl+C để dừng máy chủ.\n`);
  });
}

export default server;

