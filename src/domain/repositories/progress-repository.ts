import { UserProgress } from '../entities/progress';

export interface ProgressRepository {
  getProgress(): Promise<UserProgress>;
  toggleDayCompletion(dayNumber: number): Promise<UserProgress>;
  toggleActivityCompletion(activityId: string): Promise<UserProgress>;
  toggleFamilyChallenge(challengeId: string): Promise<UserProgress>;
  resetProgress(): Promise<UserProgress>;
}
