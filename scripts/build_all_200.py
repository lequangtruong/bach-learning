# scripts/build_all_200.py
import json
import os
import sys

def check_level(lvl):
    task_map = {t["id"]: t for t in lvl["tasks"]}
    for t in lvl["tasks"]:
        for r in t.get("requires", []):
            if r not in task_map:
                raise ValueError(f"Level {lvl['id']}: task {t['id']} requires missing {r}")
    
    visiting = set()
    visited = set()
    order = []
    def dfs(tid):
        if tid in visited:
            return
        if tid in visiting:
            raise ValueError(f"Level {lvl['id']}: loop at {tid}")
        visiting.add(tid)
        for r in task_map[tid].get("requires", []):
            dfs(r)
        visiting.remove(tid)
        visited.add(tid)
        order.append(tid)
    for tid in task_map:
        dfs(tid)
    if len(order) != len(task_map):
        raise ValueError(f"Level {lvl['id']} unresolved")

print("Base tester OK")
