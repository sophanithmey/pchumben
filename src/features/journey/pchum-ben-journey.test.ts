import { describe, it, expect } from 'vitest';
import { PCHUM_BEN_DAYS, getDayByNumber } from '../../data/pchum-ben-days';

describe('PCHUM_BEN_DAYS data integrity', () => {
  it('should have exactly 15 days', () => {
    expect(PCHUM_BEN_DAYS.length).toBe(15);
  });

  it('should have day 1 to 15 in correct order', () => {
    PCHUM_BEN_DAYS.forEach((day, idx) => {
      expect(day.dayNumber).toBe(idx + 1);
      expect(day.title).toBeDefined();
      expect(day.khmerTitle).toBeDefined();
      expect(day.tradition).toBeDefined();
      expect(day.activities.length).toBeGreaterThan(0);
      expect(day.preparation.length).toBeGreaterThan(0);
    });
  });

  it('should identify day 15 as Pchum Ben final day', () => {
    const day15 = getDayByNumber(15);
    expect(day15?.isPchumBenFinalDay).toBe(true);
  });
});
