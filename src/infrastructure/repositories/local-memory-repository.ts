import { Memory } from '../../domain/entities/memory';
import { CreateMemoryInput, MemoryRepository } from '../../domain/repositories/memory-repository';
import { appStorage } from '../storage/local-storage-service';

const STORAGE_KEY = 'pchum_ben_memories_v1';

const INITIAL_MEMORIES: Memory[] = [
  {
    id: 'mem-initial-1',
    name: 'លោកយាយ គឹម ស៊ាង (Grandmother Kim Seang)',
    relationship: 'Grandmother (ជីដូន)',
    memory:
      'She always woke up at 4 AM to prepare coconut sticky rice and Bay Ben for the pagoda during Kan Ben.',
    date: '2024-10-02',
    isPrivate: false,
    visualType: 'lotus',
    createdAt: new Date('2024-10-02T04:30:00Z').toISOString(),
  },
  {
    id: 'mem-initial-2',
    name: 'លោកតា អ៊ុំ ម៉ៅ (Grandfather Oum Mao)',
    relationship: 'Grandfather (ជីតា)',
    memory:
      'He taught us the importance of katannuta (gratitude) and walking gently on pagoda grounds.',
    date: '2025-09-22',
    isPrivate: false,
    visualType: 'candle',
    createdAt: new Date('2025-09-22T06:00:00Z').toISOString(),
  },
];

export class LocalMemoryRepository implements MemoryRepository {
  async getAllMemories(): Promise<Memory[]> {
    return appStorage.getItem<Memory[]>(STORAGE_KEY, INITIAL_MEMORIES);
  }

  async getMemoryById(id: string): Promise<Memory | null> {
    const list = await this.getAllMemories();
    const item = list.find((m) => m.id === id);
    return item ? { ...item } : null;
  }

  async createMemory(input: CreateMemoryInput): Promise<Memory> {
    const list = await this.getAllMemories();
    const newMemory: Memory = {
      ...input,
      id: `mem-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      createdAt: new Date().toISOString(),
    };
    const updated = [newMemory, ...list];
    appStorage.setItem(STORAGE_KEY, updated);
    return newMemory;
  }

  async deleteMemory(id: string): Promise<boolean> {
    const list = await this.getAllMemories();
    const updated = list.filter((m) => m.id !== id);
    appStorage.setItem(STORAGE_KEY, updated);
    return true;
  }

  async getMemoryCount(): Promise<number> {
    const list = await this.getAllMemories();
    return list.length;
  }
}

export const localMemoryRepository = new LocalMemoryRepository();
