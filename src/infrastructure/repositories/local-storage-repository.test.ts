import { describe, it, expect, beforeEach } from 'vitest';
import { localProgressRepository } from './local-progress-repository';
import { localMemoryRepository } from './local-memory-repository';

describe('Local Repositories', () => {
  beforeEach(async () => {
    localStorage.clear();
    await localProgressRepository.resetProgress();
  });

  it('should toggle day completion in progress repository', async () => {
    let progress = await localProgressRepository.getProgress();
    expect(progress.completedDayNumbers).not.toContain(5);

    progress = await localProgressRepository.toggleDayCompletion(5);
    expect(progress.completedDayNumbers).toContain(5);

    progress = await localProgressRepository.toggleDayCompletion(5);
    expect(progress.completedDayNumbers).not.toContain(5);
  });

  it('should toggle activity and family challenge completion', async () => {
    let progress = await localProgressRepository.toggleActivityCompletion('act-test');
    expect(progress.completedActivityIds).toContain('act-test');

    progress = await localProgressRepository.toggleFamilyChallenge('fc-test');
    expect(progress.completedFamilyChallengeIds).toContain('fc-test');
  });

  it('should create and delete a memory in memory repository', async () => {
    const initialCount = await localMemoryRepository.getMemoryCount();

    const created = await localMemoryRepository.createMemory({
      name: 'Ancestor Test',
      relationship: 'Ancestor',
      memory: 'A testing memory description.',
      date: '2026-10-05',
      isPrivate: true,
      visualType: 'lotus',
    });

    expect(created.id).toBeDefined();
    expect(created.name).toBe('Ancestor Test');

    const newCount = await localMemoryRepository.getMemoryCount();
    expect(newCount).toBe(initialCount + 1);

    const deleted = await localMemoryRepository.deleteMemory(created.id);
    expect(deleted).toBe(true);

    const finalCount = await localMemoryRepository.getMemoryCount();
    expect(finalCount).toBe(initialCount);
  });
});
