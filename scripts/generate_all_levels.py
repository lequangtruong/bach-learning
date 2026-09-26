# scripts/generate_all_levels.py
# Generator and validator for Task Master Levels 81 to 200
import json
import os
import sys

def validate_level(lvl):
    task_ids = {t["id"]: t for t in lvl["tasks"]}
    # Check requires
    for t in lvl["tasks"]:
        for r in t.get("requires", []):
            if r not in task_ids:
                raise ValueError(f"Level {lvl['id']} ({lvl['title']}): Task {t['id']} requires missing task {r}")
    
    # Topological sort to check for circular dependencies
    visited = set()
    visiting = set()
    order = []
    
    def visit(tid):
        if tid in order:
            return
        if tid in visiting:
            raise ValueError(f"Level {lvl['id']} ({lvl['title']}): Circular dependency detected at {tid}")
        visiting.add(tid)
        for req in task_ids[tid].get("requires", []):
            visit(req)
        visiting.remove(tid)
        order.append(tid)
        
    for tid in task_ids:
        visit(tid)
        
    if len(order) != len(task_ids):
        raise ValueError(f"Level {lvl['id']} unsolvable: ordered {len(order)} vs expected {len(task_ids)}")

print("Python validator ready")
