export type StoryCategory = 'ORIGIN' | 'RITUAL' | 'FOOD' | 'ANCESTORS';

export interface CulturalStory {
  id: string;
  category: StoryCategory;
  khmerTitle: string;
  englishTitle: string;
  khmerSubtitle: string;
  englishSubtitle: string;
  khmerContent: string[];
  englishContent: string[];
  khmerMoralLesson: string;
  englishMoralLesson: string;
  readTimeMinutes: number;
  iconName: string;
}
