import { CulturalStory } from '../domain/entities/story';
import { CULTURAL_STORIES_PART1 } from './cultural-stories-part1';
import { CULTURAL_STORIES_PART2 } from './cultural-stories-part2';

export const CULTURAL_STORIES: CulturalStory[] = [
  ...CULTURAL_STORIES_PART1,
  ...CULTURAL_STORIES_PART2,
];

export function getStoryById(id: string): CulturalStory | undefined {
  return CULTURAL_STORIES.find((s) => s.id === id);
}
