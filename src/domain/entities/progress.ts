export interface UserProgress {
  completedDayNumbers: number[];
  completedActivityIds: string[];
  completedFamilyChallengeIds: string[];
  lastActiveDate: string;
}

export interface ProgressSummary {
  daysCompleted: number;
  totalDays: number;
  activitiesCompleted: number;
  memoriesCreated: number;
  familyChallengesCompleted: number;
  percentage: number;
}
