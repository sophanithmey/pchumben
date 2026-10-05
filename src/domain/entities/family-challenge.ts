export interface FamilyChallengeItem {
  id: string;
  titleKey: string;
  descriptionKey: string;
  defaultTitleKhmer: string;
  defaultTitleEnglish: string;
  iconName: string;
}

export interface FamilyChallengeProgress {
  completedIds: string[];
  badgeUnlocked: boolean;
  unlockedAt?: string;
}
