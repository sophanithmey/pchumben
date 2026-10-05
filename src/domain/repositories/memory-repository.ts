import { Memory } from '../entities/memory';

export type CreateMemoryInput = Omit<Memory, 'id' | 'createdAt'>;

export interface MemoryRepository {
  getAllMemories(): Promise<Memory[]>;
  getMemoryById(id: string): Promise<Memory | null>;
  createMemory(input: CreateMemoryInput): Promise<Memory>;
  deleteMemory(id: string): Promise<boolean>;
  getMemoryCount(): Promise<number>;
}
