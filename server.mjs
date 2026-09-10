import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import tutorHandler from "./api/tutor.js";

const root = fileURLToPath(new URL(".", import.meta.url));
const port = Number(process.env.BACH_PORT || 4173);
const host = process.env.BACH_HOST || "127.0.0.1";

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

async function handleApi(req, res) {
  const urlPath = (req.url || "").split("?")[0];
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
  server.listen(port, host, () => console.log(`Bách Learning Lab: http://${host}:${port}`));
}

export default server;

