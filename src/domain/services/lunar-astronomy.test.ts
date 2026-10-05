import { describe, it, expect } from 'vitest';
import { getNewMoonsForYear, getMoonPhaseInfo } from './lunar-astronomy';
import { calculateAstronomicalPchumBen } from './khmer-lunar-calendar';

describe('lunar-astronomy & khmer-lunar-calendar', () => {
  it('should calculate new moons for historical, current, and distant future years', () => {
    [2024, 2026, 2035, 2050, 2100].forEach((year) => {
      const newMoons = getNewMoonsForYear(year);
      expect(newMoons.length).toBeGreaterThanOrEqual(12);
      expect(newMoons.length).toBeLessThanOrEqual(14);
    });
  });

  it('should accurately calculate Pchum Ben 15-day span for distant future years', () => {
    [2027, 2035, 2042, 2060, 2100].forEach((year) => {
      const res = calculateAstronomicalPchumBen(year);
      expect(res.year).toBe(year);
      expect(res.isAstronomical).toBe(true);
      expect(res.kanBenStartDate.getFullYear()).toBe(year);
      expect(res.pchumBenDate.getFullYear()).toBe(year);

      // Kan Ben 1 to Day 15 must span exactly 14 full days
      const diffDays = Math.round(
        (res.pchumBenDate.getTime() - res.kanBenStartDate.getTime()) / 86400000,
      );
      expect(diffDays).toBe(15); // inclusive span from 00:00 start to 23:59 end
    });
  });

  it('should calculate real-time moon phase info', () => {
    const info = getMoonPhaseInfo(new Date('2026-10-05T10:00:00+07:00'));
    expect(info.fraction).toBeGreaterThanOrEqual(0);
    expect(info.fraction).toBeLessThanOrEqual(1);
    expect(info.khmerPhase).toBeDefined();
    expect(info.englishPhase).toBeDefined();
    expect(typeof info.isWaxing).toBe('boolean');
  });
});
