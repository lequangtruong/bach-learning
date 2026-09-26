# scripts/make_part4.py
import json

# Import chang8_levels
from add_chang8 import chang8_levels

# Import 20 levels from original generate_part4
with open("scripts/generate_part4.py", "r", encoding="utf-8") as f:
    text = f.read()

# Grab levels before chang8
first_part = text.split("# --- Chặng 8: 141-160")[0]
# In first_part, replace 'true' / 'false' if any or just run exec in a safe dict
safe_globals = {"true": True, "false": False, "null": None}
exec(first_part, safe_globals)
part4_levels = safe_globals["levels"]

# Now add chang8_levels
part4_levels.extend(chang8_levels)

print(f"Total levels in Part 4: {len(part4_levels)}")

content = "// js/task-master-levels-part4.js - Ngân hàng 40 Màn chơi Part 4: Sinh Thái & Đại Đô Thị Thông Minh (Màn 121 -> 160)\n\n"
content += "export const TASK_MASTER_LEVELS_PART4 = " + json.dumps(part4_levels, ensure_ascii=False, indent=2) + ";\n"

with open("js/task-master-levels-part4.js", "w", encoding="utf-8") as f:
    f.write(content)

print("Generated js/task-master-levels-part4.js successfully!")
