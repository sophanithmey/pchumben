import { describe, it, expect } from 'vitest';
import {
  getPchumBenDate,
  getPchumBenCountdown,
  getBuddhistEraYear,
  toKhmerDigits,
  formatBuddhistEraYear,
} from './calendar-service';

describe('calendar-service', () => {
  it('should return configured dates for known years', () => {
    const info2026 = getPchumBenDate(2026);
    expect(info2026.year).toBe(2026);
    expect(info2026.kanBenStartDate.getFullYear()).toBe(2026);
    expect(info2026.pchumBenDate.getFullYear()).toBe(2026);
  });

  it('should return fallback dates for unlisted years', () => {
    const info2035 = getPchumBenDate(2035);
    expect(info2035.year).toBe(2035);
    expect(info2035.kanBenStartDate).toBeInstanceOf(Date);
    expect(info2035.pchumBenDate).toBeInstanceOf(Date);
  });

  it('should compute upcoming countdown correctly', () => {
    const beforeDate = new Date('2026-09-01T00:00:00+07:00');
    const result = getPchumBenCountdown(beforeDate, 2026);
    expect(result.status).toBe('upcoming');
    expect(result.days).toBeGreaterThan(0);
    expect(result.currentDayNumber).toBeNull();
  });

  it('should compute ongoing festival correctly when inside 15-day window', () => {
    const ongoingDate = new Date('2026-09-28T10:00:00+07:00');
    const result = getPchumBenCountdown(ongoingDate, 2026);
    expect(result.status).toBe('ongoing');
    expect(result.currentDayNumber).toBeGreaterThanOrEqual(1);
    expect(result.currentDayNumber).toBeLessThanOrEqual(15);
  });

  it('should accurately identify October 5, 2026 as Kan Ben 9', () => {
    const oct5 = new Date('2026-10-05T09:54:00+07:00');
    const result = getPchumBenCountdown(oct5, 2026);
    expect(result.status).toBe('ongoing');
    expect(result.currentDayNumber).toBe(9);
  });

  it('should compute ended status after festival concludes', () => {
    const afterDate = new Date('2026-10-15T00:00:00+07:00');
    const result = getPchumBenCountdown(afterDate, 2026);
    expect(result.status).toBe('ended');
    expect(result.days).toBe(0);
    expect(result.buddhistYear).toBe(2570);
  });

  describe('Buddhist Era (B.E.) conversions', () => {
    it('should correctly convert Gregorian 2026 to B.E. 2570', () => {
      expect(getBuddhistEraYear(2026)).toBe(2570);
    });

    it('should convert digits to Khmer numerals accurately', () => {
      expect(toKhmerDigits(2570)).toBe('២៥៧០');
      expect(toKhmerDigits('2026')).toBe('២០២៦');
    });

    it('should format Buddhist Era label in Khmer and English', () => {
      expect(formatBuddhistEraYear(2026, 'kh')).toBe('ព.ស. ២៥៧០');
      expect(formatBuddhistEraYear(2026, 'en')).toBe('B.E. 2570');
      // Verify no '។' character is present in Khmer output
      expect(formatBuddhistEraYear(2026, 'kh')).not.toContain('។');
    });
  });
});
