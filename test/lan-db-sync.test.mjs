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
