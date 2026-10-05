import { UserProgress } from '../../domain/entities/progress';
import { ProgressRepository } from '../../domain/repositories/progress-repository';
import { appStorage } from '../storage/local-storage-service';

const STORAGE_KEY = 'pchum_ben_user_progress_v1';

const DEFAULT_PROGRESS: UserProgress = {
  completedDayNumbers: [1, 2], // Initial sample progress so landing page isn't totally blank
  completedActivityIds: ['act-visit-pagoda', 'act-make-offering'],
  completedFamilyChallengeIds: ['fc-pagoda', 'fc-food'],
  lastActiveDate: new Date().toISOString(),
};

export class LocalProgressRepository implements ProgressRepository {
  async getProgress(): Promise<UserProgress> {
    return appStorage.getItem<UserProgress>(STORAGE_KEY, DEFAULT_PROGRESS);
  }

  async toggleDayCompletion(dayNumber: number): Promise<UserProgress> {
    const progress = await this.getProgress();
    const exists = progress.completedDayNumbers.includes(dayNumber);
    const updatedDays = exists
      ? progress.completedDayNumbers.filter((d) => d !== dayNumber)
      : [...progress.completedDayNumbers, dayNumber].sort((a, b) => a - b);

    const updated: UserProgress = {
      ...progress,
      completedDayNumbers: updatedDays,
      lastActiveDate: new Date().toISOString(),
    };
    appStorage.setItem(STORAGE_KEY, updated);
    return updated;
  }

  async toggleActivityCompletion(activityId: string): Promise<UserProgress> {
    const progress = await this.getProgress();
    const exists = progress.completedActivityIds.includes(activityId);
    const updatedIds = exists
      ? progress.completedActivityIds.filter((id) => id !== activityId)
      : [...progress.completedActivityIds, activityId];

    const updated: UserProgress = {
      ...progress,
      completedActivityIds: updatedIds,
      lastActiveDate: new Date().toISOString(),
    };
    appStorage.setItem(STORAGE_KEY, updated);
    return updated;
  }

  async toggleFamilyChallenge(challengeId: string): Promise<UserProgress> {
    const progress = await this.getProgress();
    const exists = progress.completedFamilyChallengeIds.includes(challengeId);
    const updatedIds = exists
      ? progress.completedFamilyChallengeIds.filter((id) => id !== challengeId)
      : [...progress.completedFamilyChallengeIds, challengeId];

    const updated: UserProgress = {
      ...progress,
      completedFamilyChallengeIds: updatedIds,
      lastActiveDate: new Date().toISOString(),
    };
    appStorage.setItem(STORAGE_KEY, updated);
    return updated;
  }

  async resetProgress(): Promise<UserProgress> {
    const emptyProgress: UserProgress = {
      completedDayNumbers: [],
      completedActivityIds: [],
      completedFamilyChallengeIds: [],
      lastActiveDate: new Date().toISOString(),
    };
    appStorage.setItem(STORAGE_KEY, emptyProgress);
    return emptyProgress;
  }
}

export const localProgressRepository = new LocalProgressRepository();
