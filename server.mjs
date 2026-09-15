import { createServer } from "node:http";
import { readFile, writeFile, rename } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

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
  server.listen(port, host, () => console.log(`Bách Learning Lab: http://${host}:${port}`));
}

export default server;

