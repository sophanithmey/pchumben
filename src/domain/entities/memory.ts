export type MemoryVisualType = 'lotus' | 'candle' | 'flower' | 'tree';

export interface Memory {
  id: string;
  name: string;
  relationship: string;
  memory: string;
  photo?: string;
  date: string;
  isPrivate: boolean;
  visualType: MemoryVisualType;
  createdAt: string;
}

export type MemoryFilter = 'all' | 'private' | 'public';
