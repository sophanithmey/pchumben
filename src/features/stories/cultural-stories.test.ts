import { describe, it, expect } from 'vitest';
import { CULTURAL_STORIES, getStoryById } from '../../data/cultural-stories';

describe('Cultural Stories Data', () => {
  it('contains the essential traditional stories and legends', () => {
    expect(CULTURAL_STORIES.length).toBeGreaterThanOrEqual(5);

    const storyIds = CULTURAL_STORIES.map((s) => s.id);
    expect(storyIds).toContain('story-bimbisara');
    expect(storyIds).toContain('story-preta-bayben');
    expect(storyIds).toContain('story-num-ansom');
    expect(storyIds).toContain('story-seven-generations');
    expect(storyIds).toContain('story-ploy-kantoang');
    expect(storyIds).toContain('story-water-libation');
  });

  it('ensures each story has complete bilingual content and moral lesson', () => {
    for (const story of CULTURAL_STORIES) {
      expect(story.id).toBeTruthy();
      expect(story.khmerTitle).toBeTruthy();
      expect(story.englishTitle).toBeTruthy();
      expect(story.khmerSubtitle).toBeTruthy();
      expect(story.englishSubtitle).toBeTruthy();
      expect(story.khmerContent.length).toBeGreaterThan(0);
      expect(story.englishContent.length).toBeGreaterThan(0);
      expect(story.khmerMoralLesson).toBeTruthy();
      expect(story.englishMoralLesson).toBeTruthy();
      expect(story.readTimeMinutes).toBeGreaterThan(0);
      expect(['ORIGIN', 'RITUAL', 'FOOD', 'ANCESTORS']).toContain(story.category);
    }
  });

  it('retrieves story by id with getStoryById', () => {
    const story = getStoryById('story-bimbisara');
    expect(story).toBeDefined();
    expect(story?.category).toBe('ORIGIN');

    const unknownStory = getStoryById('unknown-story-id');
    expect(unknownStory).toBeUndefined();
  });
});
