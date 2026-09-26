// js/task-master.js - Logic và Mô hình Vận hành Trò Chơi Bậc Thầy Kế Hoạch (Task Master)
import { TASK_MASTER_LEVELS, getLevelByIndex } from "./task-master-levels.js";

export { TASK_MASTER_LEVELS };

/**
 * Xáo trộn mảng ngẫu nhiên (Fisher-Yates) có seed ổn định
 */
function shuffleTasks(tasks) {
  const arr = [...tasks];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export class TaskMasterSession {
  constructor({ levelIndex = 0, onWin = null, onStateChange = null } = {}) {
    this.levelIndex = Math.max(0, Math.min(TASK_MASTER_LEVELS.length - 1, Number(levelIndex) || 0));
    this.onWin = onWin;
    this.onStateChange = onStateChange;
    this.attemptsCount = 0;
    this.moveCount = 0;
    this.hintCount = 0;
    this.startTime = Date.now();
    this.isSolved = false;
    this.isSimulating = false;
    this.simulationStep = -1;
    this.simulationResult = null;
    this.timeline = []; // mảng các taskId theo thứ tự người chơi chọn
    this.initLevel();
  }

  get currentLevel() {
    return getLevelByIndex(this.levelIndex);
  }

  initLevel() {
    this.timeline = [];
    this.isSolved = false;
    this.isSimulating = false;
    this.simulationStep = -1;
    this.simulationResult = null;
    this.attemptsCount = 0;
    this.moveCount = 0;
    this.hintCount = 0;
    this.startTime = Date.now();

    const level = this.currentLevel;
    const all = [...(level.tasks || []), ...(level.distractors || [])];
    // Xáo trộn ngẫu nhiên để trẻ không thể chỉ bấm theo thứ tự hiển thị sẵn
    this.availableTasks = shuffleTasks(all);
  }

  setLevel(index) {
    this.levelIndex = Math.max(0, Math.min(TASK_MASTER_LEVELS.length - 1, Number(index) || 0));
    this.initLevel();
    this.notifyChange();
  }

  nextLevel() {
    if (this.levelIndex < TASK_MASTER_LEVELS.length - 1) {
      this.setLevel(this.levelIndex + 1);
    }
  }

  prevLevel() {
    if (this.levelIndex > 0) {
      this.setLevel(this.levelIndex - 1);
    }
  }

  getTaskById(taskId) {
    const level = this.currentLevel;
    const found = level.tasks?.find(t => t.id === taskId);
    if (found) return found;
    return level.distractors?.find(t => t.id === taskId) || null;
  }

  addTaskToTimeline(taskId) {
    if (this.isSimulating || this.isSolved) return;
    if (this.timeline.includes(taskId)) return; // không lặp lại thẻ đã chọn

    const task = this.getTaskById(taskId);
    if (!task) return;

    this.timeline.push(taskId);
    this.simulationResult = null;
    this.notifyChange();
  }

  removeTaskFromTimeline(index) {
    if (this.isSimulating || this.isSolved) return;
    if (index >= 0 && index < this.timeline.length) {
      this.timeline.splice(index, 1);
      this.simulationResult = null;
      this.notifyChange();
    }
  }

  moveTask(fromIndex, toIndex) {
    if (this.isSimulating || this.isSolved) return;
    if (fromIndex < 0 || fromIndex >= this.timeline.length) return;
    if (toIndex < 0 || toIndex >= this.timeline.length) return;
    if (fromIndex === toIndex) return;

    this.moveCount++;
    const [moved] = this.timeline.splice(fromIndex, 1);
    this.timeline.splice(toIndex, 0, moved);
    this.simulationResult = null;
    this.notifyChange();
  }

  clearTimeline() {
    if (this.isSimulating || this.isSolved) return;
    this.timeline = [];
    this.moveCount = 0;
    this.hintCount = 0;
    this.simulationResult = null;
    this.notifyChange();
  }

  /**
   * Tự động phân tích và đưa ra gợi ý chiến thuật gián tiếp (phạt 1 sao khi dùng)
   */
  getHint() {
    this.hintCount++;
    this.notifyChange();
    const level = this.currentLevel;
    const placedSet = new Set(this.timeline);

    // Tìm nhiệm vụ hợp lệ tiếp theo mà mọi điều kiện tiên quyết đã có trong timeline
    for (const task of level.tasks) {
      if (!placedSet.has(task.id)) {
        const reqs = task.requires || [];
        const allReqsMet = reqs.every(r => placedSet.has(r));
        if (allReqsMet) {
          return {
            taskId: task.id,
            taskText: task.text,
            taskIcon: task.icon,
            hint: task.hint || "Bước này có thể thực hiện được ngay bây giờ!",
            indirectClue: `Tìm bước có biểu tượng ${task.icon || "✨"}: ${task.hint || "Bước này đã hội tụ đủ điều kiện để thực hiện!"}`
          };
        }
      }
    }

    return null;
  }

  /**
   * Kiểm tra tính đúng đắn logic của chuỗi kế hoạch
   */
  validateTimeline() {
    const level = this.currentLevel;
    const requiredTasks = level.tasks || [];
    const timeline = this.timeline;

    // 1. Kiểm tra đủ số lượng bước bắt buộc
    if (timeline.length < requiredTasks.length) {
      return {
        status: "incomplete",
        success: false,
        message: `Kế hoạch chưa đủ bước: Màn này cần hoàn thành ${requiredTasks.length} bước công việc, con mới xếp được ${timeline.length} bước!`
      };
    }

    const executedSet = new Set();

    // 2. Duyệt từng bước theo thời gian thực
    for (let i = 0; i < timeline.length; i++) {
      const taskId = timeline[i];
      const task = this.getTaskById(taskId);

      if (!task) {
        return {
          status: "failed",
          success: false,
          failedIndex: i,
          reason: "Hành động không xác định trong hệ thống!"
        };
      }

      // Kiểm tra xem có phải thẻ bẫy (distractor) không
      const isDistractor = level.distractors?.some(d => d.id === taskId);
      if (isDistractor) {
        return {
          status: "failed",
          success: false,
          failedIndex: i,
          failedTask: task,
          reason: task.failReason || `Ối Bách ơi! Bước “${task.text}” là hành động bẫy làm hỏng toàn bộ công việc!`
        };
      }

      // Kiểm tra các điều kiện tiên quyết
      const reqs = task.requires || [];
      for (const reqId of reqs) {
        if (!executedSet.has(reqId)) {
          const reqTask = this.getTaskById(reqId);
          const reqName = reqTask ? reqTask.text : reqId;
          return {
            status: "failed",
            success: false,
            failedIndex: i,
            failedTask: task,
            missingRequirement: reqTask,
            reason: `Ối Bách ơi! Bạn chưa làm bước “${reqName}” mà đã vội làm “${task.text}” rồi!`
          };
        }
      }

      executedSet.add(taskId);
    }

    // 3. Kiểm tra xem có bỏ sót nhiệm vụ bắt buộc nào không
    const missingTasks = requiredTasks.filter(t => !executedSet.has(t.id));
    if (missingTasks.length > 0) {
      return {
        status: "incomplete",
        success: false,
        message: `Con vẫn còn thiếu bước “${missingTasks[0].text}” chưa được đưa vào kế hoạch!`
      };
    }

    // Tính điểm sao dựa trên số lần thử, số lần đổi chỗ (moveCount), và số gợi ý (hintCount)
    let stars = 3;
    if (this.attemptsCount === 2) stars = 2;
    else if (this.attemptsCount >= 3) stars = 1;

    // Phạt đổi chỗ quá nhiều (thử - sai bừa bãi không tính trước): >3 lần trừ 1 sao, >6 lần tối đa 1 sao
    if (this.moveCount > 6) {
      stars = Math.min(stars, 1);
    } else if (this.moveCount > 3) {
      stars = Math.min(stars, 2);
    }

    // Phạt dùng gợi ý (mỗi lần xem gợi ý trừ 1 sao)
    if (this.hintCount > 0) {
      stars = Math.max(1, stars - this.hintCount);
    }

    // Soft timer cho chặng 3 & 4 (Engineering & Mission, level >= 41 hoặc difficulty >= 3)
    const elapsedSeconds = Math.floor((Date.now() - (this.startTime || Date.now())) / 1000);
    const targetTime = level.targetTime || (level.difficulty >= 4 ? 120 : (level.difficulty >= 3 ? 90 : 0));
    let timeExceeded = false;
    if (targetTime > 0 && elapsedSeconds > targetTime) {
      stars = Math.max(1, stars - 1);
      timeExceeded = true;
    }

    return {
      status: "success",
      success: true,
      stars,
      moveCount: this.moveCount,
      hintCount: this.hintCount,
      elapsedSeconds,
      targetTime,
      timeExceeded,
      message: "Tuyệt vời! Con đã tư duy thấu đáo từng bước và hoàn thành kế hoạch xuất sắc!",
      levelId: level.id
    };
  }

  /**
   * Bắt đầu chạy mô phỏng từng bước
   */
  async runSimulation(onStepUpdate = null) {
    if (this.isSimulating || this.timeline.length === 0) return;

    this.attemptsCount++;
    this.isSimulating = true;
    this.simulationResult = null;
    this.simulationStep = 0;
    this.notifyChange();

    const validation = this.validateTimeline();

    // Mô phỏng chạy từng bước với độ trễ trực quan
    const maxSteps = validation.success ? this.timeline.length : (validation.failedIndex !== undefined ? validation.failedIndex + 1 : this.timeline.length);

    for (let step = 0; step < maxSteps; step++) {
      this.simulationStep = step;
      if (typeof onStepUpdate === "function") {
        onStepUpdate(step);
      }
      this.notifyChange();
      await new Promise(r => setTimeout(r, 450));
    }

    this.isSimulating = false;
    this.simulationResult = validation;

    if (validation.success) {
      this.isSolved = true;
      if (typeof this.onWin === "function") {
        this.onWin({
          levelId: this.currentLevel.id,
          levelIndex: this.levelIndex,
          stars: validation.stars,
          attempts: this.attemptsCount,
          moves: this.moveCount,
          hints: this.hintCount,
          timeline: [...this.timeline]
        });
      }
    }

    this.notifyChange();
    return validation;
  }

  notifyChange() {
    if (typeof this.onStateChange === "function") {
      this.onStateChange(this);
    }
  }
}
