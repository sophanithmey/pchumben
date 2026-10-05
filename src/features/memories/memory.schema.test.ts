import { describe, it, expect } from 'vitest';
import { memorySchema } from './memory.schema';

describe('memorySchema', () => {
  it('should validate valid memory input successfully', () => {
    const validData = {
      name: 'Grandmother Kim',
      relationship: 'Grandmother',
      memory: 'She taught me how to make traditional sticky rice cake.',
      date: '2026-10-01',
      isPrivate: true,
      visualType: 'lotus' as const,
    };
    const result = memorySchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('should fail when name is too short', () => {
    const invalidData = {
      name: 'A',
      relationship: 'Mother',
      memory: 'A very long memory text here to satisfy the requirement.',
      date: '2026-10-01',
      isPrivate: true,
      visualType: 'lotus' as const,
    };
    const result = memorySchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('should fail when memory content is less than 10 characters', () => {
    const invalidData = {
      name: 'Grandmother',
      relationship: 'Grandmother',
      memory: 'Too short',
      date: '2026-10-01',
      isPrivate: true,
      visualType: 'lotus' as const,
    };
    const result = memorySchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });
});
