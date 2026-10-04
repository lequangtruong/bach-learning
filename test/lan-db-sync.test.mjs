import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createEmptyDatabase, validateDatabasePayload } from "../data/data-core.js";

test("server.mjs exports valid static and API route logic for /api/db", async () => {
  const serverSource = await readFile(new URL("../server.mjs", import.meta.url), "utf8");
  assert.match(serverSource, /urlPath === "\/api\/db"/);
  assert.match(serverSource, /validateDatabasePayload\(parsed\)/);
  assert.match(serverSource, /dbPath = join\(root, "data", "db-lan\.json"\)/);
});

test("app.js implements dual-write storage: localStorage and LAN server sync", async () => {
  const appSource = await readFile(new URL("../app.js", import.meta.url), "utf8");
  assert.match(appSource, /function scheduleLanSync/);
  assert.match(appSource, /fetch\("\/api\/db"/);
  assert.match(appSource, /function syncWithLanServer/);
  assert.match(appSource, /mergeDatabases\(state\.db, remoteDb\)/);
});

test("database payload validation rejects corrupted database and accepts standard database", () => {
  const emptyDb = createEmptyDatabase();
  assert.equal(validateDatabasePayload(emptyDb), true);

  const corruptedDb = { version: 99, progress: "corrupted" };
  assert.equal(validateDatabasePayload(corruptedDb), false);
});

test("server.mjs security: enforces isAllowedOrigin and strictly forbids wildcard CORS (*)", async () => {
  const { isAllowedOrigin } = await import("../server.mjs");
  const serverSource = await readFile(new URL("../server.mjs", import.meta.url), "utf8");

  // 1. Phải không có bất kỳ Access-Control-Allow-Origin: * nào trong server.mjs
  assert.ok(!serverSource.includes('"Access-Control-Allow-Origin", "*"'), "server.mjs must NOT contain wildcard Access-Control-Allow-Origin: *");
  assert.ok(!serverSource.includes('"Access-Control-Allow-Origin": "*"'), "server.mjs must NOT contain wildcard in header maps");

  // 2. Cho phép local / loopback
  assert.equal(isAllowedOrigin("http://localhost:4173"), true);
  assert.equal(isAllowedOrigin("http://127.0.0.1:4173"), true);

  // 3. Cho phép private LAN IP
  assert.equal(isAllowedOrigin("http://192.168.1.100:4173"), true);
  assert.equal(isAllowedOrigin("http://10.0.1.50:4173"), true);
  assert.equal(isAllowedOrigin("http://172.20.0.2:4173"), true);
  assert.equal(isAllowedOrigin("http://bach-macbook.local:4173"), true);

  // 4. Cho phép khớp Host header
  assert.equal(isAllowedOrigin("http://mycustomhost.internal:4173", "mycustomhost.internal:4173"), true);

  // 5. Chặn tuyệt đối web lạ ngoài Internet
  assert.equal(isAllowedOrigin("https://evil-attacker.com"), false);
  assert.equal(isAllowedOrigin("http://phishing.xyz:4173"), false);
  assert.equal(isAllowedOrigin("https://malicious.org"), false);
});
