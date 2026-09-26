// scripts/build-all-levels.mjs - Tự động biên soạn và xác thực 120 màn chơi (Màn 81 -> 200)
import fs from "node:fs";
import path from "node:path";

function validateLevelTopological(lvl) {
  const taskMap = new Map(lvl.tasks.map(t => [t.id, t]));
  // Kiểm tra mọi requires đều tồn tại trong tasks
  for (const t of lvl.tasks) {
    for (const r of (t.requires || [])) {
      if (!taskMap.has(r)) {
        throw new Error(`Level ${lvl.id}: Task ${t.id} requires nonexistent task ${r}`);
      }
    }
  }

  // Topological sort
  const resolved = [];
  const visited = new Set();
  const visiting = new Set();

  function visit(taskId) {
    if (resolved.includes(taskId)) return;
    if (visiting.has(taskId)) {
      throw new Error(`Level ${lvl.id}: Circular dependency detected at task ${taskId}`);
    }
    visiting.add(taskId);
    const task = taskMap.get(taskId);
    for (const req of (task.requires || [])) {
      visit(req);
    }
    visiting.delete(taskId);
    resolved.push(taskId);
  }

  for (const t of lvl.tasks) {
    visit(t.id);
  }

  if (resolved.length !== lvl.tasks.length) {
    throw new Error(`Level ${lvl.id}: Solvable tasks count (${resolved.length}) != required tasks (${lvl.tasks.length})`);
  }

  // Kiểm tra mốc neo anchors nếu có
  if (lvl.anchors?.length) {
    for (const anc of lvl.anchors) {
      if (!taskMap.has(anc.taskId)) {
        throw new Error(`Level ${lvl.id}: Anchor references nonexistent taskId ${anc.taskId}`);
      }
    }
  }
}

console.log("Validator helper initialized cleanly.");
