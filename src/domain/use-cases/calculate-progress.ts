import { ProgressSummary, UserProgress } from '../entities/progress';

export function calculateProgressSummary(
  progress: UserProgress,
  memoriesCount: number,
  totalDays = 15,
): ProgressSummary {
  const daysCompleted = progress.completedDayNumbers.length;
  const activitiesCompleted = progress.completedActivityIds.length;
  const familyChallengesCompleted = progress.completedFamilyChallengeIds.length;
  const percentage = Math.round((Math.min(daysCompleted, totalDays) / totalDays) * 100);

  return {
    daysCompleted,
    totalDays,
    activitiesCompleted,
    memoriesCreated: memoriesCount,
    familyChallengesCompleted,
    percentage,
  };
}
