// test/adaptive-games.test.mjs - Kiểm thử Động cơ Độ khó Tương thích & Hệ thống Huy chương CHC
import test from "node:test";
import assert from "node:assert/strict";

import { 
  CHC_PILLARS, 
  getAdaptiveProfile, 
  recordGameOutcome, 
  calculateChcPillars, 
  getSmartDailyRecommendation 
} from "../js/adaptive-engine.js";

import { 
  BADGES_DEFINITION, 
  checkAndAwardBadges, 
  getBadgesStatus 
} from "../js/badge-system.js";

test("adaptive: getAdaptiveProfile initializes default profile with 10 games", () => {
  const profile = getAdaptiveProfile({});
  assert.equal(typeof profile.levels, "object");
  assert.equal(profile.levels.speedMath, 2);
  assert.equal(profile.levels.barModel, 2);
  assert.equal(profile.levels.spatial3D, 2);
  assert.equal(profile.levels.tangram, 2);
  assert.equal(profile.levels.logicGrid, 2);
  assert.equal(profile.levels.rushHour, 2);
  assert.equal(profile.streaks.spatial3D, 0);
  assert.equal(Array.isArray(profile.history), true);
});

test("adaptive: recordGameOutcome promotes level on 2 consecutive wins (ZPD)", () => {
  const state = { db: { gameRecords: {} } };
  
  // Ván 1: Thắng
  const res1 = recordGameOutcome(state, "spatial3D", { success: true, difficulty: 2 });
  assert.equal(res1.newLvl, 2);
  assert.equal(res1.newStreak, 1);
  assert.equal(res1.status, "steady");

  // Ván 2: Thắng liên tiếp -> Thăng hạng lên ★3
  const res2 = recordGameOutcome(state, "spatial3D", { success: true, difficulty: 2 });
  assert.equal(res2.newLvl, 3);
  assert.equal(res2.newStreak, 0); // streak reset sau khi nâng cấp
  assert.equal(res2.status, "promoted");
  assert.ok(res2.message.includes("★3"));
  assert.equal(state.db.gameRecords.adaptiveProfile.levels.spatial3D, 3);
});

test("adaptive: recordGameOutcome demotes level on 2 consecutive losses to consolidate confidence", () => {
  const state = { 
    db: { 
      gameRecords: { 
        adaptiveProfile: { 
          levels: { logicGrid: 4 }, 
          streaks: { logicGrid: 0 } 
        } 
      } 
    } 
  };

  // Ván 1: Thua
  const res1 = recordGameOutcome(state, "logicGrid", { success: false, difficulty: 4 });
  assert.equal(res1.newLvl, 4);
  assert.equal(res1.newStreak, -1);

  // Ván 2: Thua liên tiếp -> Hạ xuống ★3 để củng cố
  const res2 = recordGameOutcome(state, "logicGrid", { success: false, difficulty: 4 });
  assert.equal(res2.newLvl, 3);
  assert.equal(res2.status, "demoted");
  assert.ok(res2.message.includes("★3"));
  assert.equal(state.db.gameRecords.adaptiveProfile.levels.logicGrid, 3);
});

test("adaptive: calculateChcPillars accurately scores 5 cognitive pillars", () => {
  const records = {
    speedMath: { highScore: 360, bestStreak: 8 },
    barModel: { completedChallenges: new Array(12).fill(0) },
    spotTheBug: { solvedCount: 15 },
    balanceScale: { completedChallenges: new Array(10).fill(0) },
    make24: { solvedCount: 14 },
    spatial3D: { completedChallenges: new Array(20).fill(0) },
    logicGrid: { completedCases: new Array(8).fill(0) },
    rushHour: { completedBoards: new Array(15).fill(0) },
    chimpMemory: { highScore: 450, maxLevel: 7 },
    tangram: { completedPuzzles: new Array(6).fill(0) }
  };

  const analysis = calculateChcPillars(records);
  assert.equal(typeof analysis.pillars.fluid.score, "number");
  assert.ok(analysis.pillars.fluid.score > 40, "Fluid intelligence score should reflect logic and rush hour solves");
  assert.ok(analysis.pillars.spatial.score > 40, "Spatial score should reflect 3D and Tangram solves");
  assert.ok(analysis.pillars.speed.score > 50, "Speed score should reflect 360 high score");
  assert.ok(analysis.pillars.memory.score > 50, "Memory score should reflect level 7 in Chimp memory");
  assert.ok(analysis.pillars.math.score > 40, "Math score should reflect Bar Model and Make 24 solves");
  assert.ok(analysis.averageScore >= 50, "Average skill mastery score should reflect strong all-round performance");
});

test("adaptive: getSmartDailyRecommendation recommends the weakest pillar to balance growth", () => {
  // Bách mạnh Toán, Logic & Tốc độ nhưng chưa chơi Không Gian (Spatial)
  const records = {
    speedMath: { highScore: 300, bestStreak: 6 },
    barModel: { completedChallenges: [0, 1, 2, 3, 4] },
    logicGrid: { completedCases: [0, 1, 2] },
    chimpMemory: { highScore: 200, maxLevel: 4 },
    spatial3D: { completedChallenges: [] },
    tangram: { completedPuzzles: [] }
  };

  const rec = getSmartDailyRecommendation(records);
  assert.equal(rec.pillarKey, "spatial");
  assert.ok(rec.title.includes("Không Gian 3D") || rec.title.includes("Thị Giác"));
  assert.ok(rec.route.includes("spatial-3d"));
});

test("badges: checkAndAwardBadges awards badges and tracks progress", () => {
  const state = {
    db: {
      gameRecords: {
        speedMath: { highScore: 320, bestStreak: 9, gamesPlayed: 5 },
        barModel: { completedChallenges: new Array(10).fill(0) },
        spotTheBug: { solvedCount: 12 },
        balanceScale: { completedChallenges: new Array(10).fill(0) },
        make24: { solvedCount: 10 },
        spatial3D: { completedChallenges: new Array(10).fill(0) },
        logicGrid: { completedCases: new Array(5).fill(0) },
        rushHour: { completedBoards: new Array(10).fill(0) },
        chimpMemory: { highScore: 200, maxLevel: 6 },
        tangram: { completedPuzzles: new Array(5).fill(0) }
      }
    }
  };

  const newlyUnlocked = checkAndAwardBadges(state);
  assert.ok(newlyUnlocked.length >= 8, "Should unlock at least 8 badges based on achievements");
  assert.ok(state.db.gameRecords.unlockedBadges.includes("speed_demon"));
  assert.ok(state.db.gameRecords.unlockedBadges.includes("streak_master"));
  assert.ok(state.db.gameRecords.unlockedBadges.includes("bar_architect"));
  assert.ok(state.db.gameRecords.unlockedBadges.includes("tangram_artisan"));
  assert.ok(state.db.gameRecords.unlockedBadges.includes("olympic_allrounder"));

  const allBadges = getBadgesStatus(state.db.gameRecords);
  assert.equal(allBadges.length, BADGES_DEFINITION.length);
  const speedDemon = allBadges.find(b => b.id === "speed_demon");
  assert.equal(speedDemon.isUnlocked, true);
  assert.equal(speedDemon.currentProgress, 100);
});
