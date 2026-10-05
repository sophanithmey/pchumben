import { describe, it, expect } from 'vitest';
import { calculateProgressSummary } from './calculate-progress';
import { UserProgress } from '../entities/progress';

describe('calculateProgressSummary', () => {
  it('should calculate 0% when no days are completed', () => {
    const progress: UserProgress = {
      completedDayNumbers: [],
      completedActivityIds: [],
      completedFamilyChallengeIds: [],
      lastActiveDate: new Date().toISOString(),
    };
    const summary = calculateProgressSummary(progress, 0, 15);
    expect(summary.daysCompleted).toBe(0);
    expect(summary.percentage).toBe(0);
    expect(summary.memoriesCreated).toBe(0);
  });

  it('should calculate percentage and counts correctly', () => {
    const progress: UserProgress = {
      completedDayNumbers: [1, 2, 3, 4, 5],
      completedActivityIds: ['act-1', 'act-2'],
      completedFamilyChallengeIds: ['fc-1'],
      lastActiveDate: new Date().toISOString(),
    };
    const summary = calculateProgressSummary(progress, 3, 15);
    expect(summary.daysCompleted).toBe(5);
    expect(summary.totalDays).toBe(15);
    expect(summary.percentage).toBe(33); // 5/15 = 33.33% => 33%
    expect(summary.activitiesCompleted).toBe(2);
    expect(summary.memoriesCreated).toBe(3);
    expect(summary.familyChallengesCompleted).toBe(1);
  });

  it('should cap percentage at 100%', () => {
    const progress: UserProgress = {
      completedDayNumbers: Array.from({ length: 15 }, (_, i) => i + 1),
      completedActivityIds: [],
      completedFamilyChallengeIds: [],
      lastActiveDate: new Date().toISOString(),
    };
    const summary = calculateProgressSummary(progress, 0, 15);
    expect(summary.percentage).toBe(100);
  });
});
