import {
  calculateAstronomicalPchumBen,
  getMoonPhaseInfo,
} from './khmer-lunar-calendar';

export interface PchumBenDateInfo {
  year: number;
  kanBenStartDate: Date;
  pchumBenDate: Date; // Day 15 (Final Pchum Ben day)
}

export type CountdownStatus = 'upcoming' | 'ongoing' | 'ended';

export interface CountdownResult {
  status: CountdownStatus;
  currentDayNumber: number | null;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  year: number;
  buddhistYear: number;
  moonPhase: {
    fraction: number;
    ageDays: number;
    isWaxing: boolean;
    khmerPhase: string;
    englishPhase: string;
  };
}

/**
 * Converts a Gregorian CE year to the corresponding Buddhist Era (B.E.) year
 * for the Pchum Ben season (occurring in the 10th lunar month Bhadrapada, after Visakha Bochea).
 * Standard Cambodian Buddhist formula: CE year + 544
 */
export function getBuddhistEraYear(gregorianYear: number): number {
  return gregorianYear + 544;
}

export function toKhmerDigits(value: number | string): string {
  const KHMER_NUMERALS = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];
  return String(value).replace(/[0-9]/g, (d) => KHMER_NUMERALS[parseInt(d, 10)] ?? d);
}

export function formatBuddhistEraYear(gregorianYear: number, locale: string = 'en'): string {
  const beYear = getBuddhistEraYear(gregorianYear);
  if (locale === 'kh') {
    return `ព.ស. ${toKhmerDigits(beYear)}`;
  }
  return `B.E. ${beYear}`;
}

/**
 * Dynamically computes Pchum Ben dates for ANY Gregorian year using
 * astronomical Moon ephemeris calculations.
 */
export function getPchumBenDate(year: number): PchumBenDateInfo {
  const result = calculateAstronomicalPchumBen(year);
  return {
    year: result.year,
    kanBenStartDate: result.kanBenStartDate,
    pchumBenDate: result.pchumBenDate,
  };
}

/**
 * Computes live real-time festival countdown, active festival status,
 * current Kan Ben day number, and lunar phase.
 */
export function getPchumBenCountdown(
  now: Date = new Date(),
  targetYear?: number,
): CountdownResult {
  const year = targetYear ?? now.getFullYear();
  const { kanBenStartDate, pchumBenDate } = getPchumBenDate(year);
  const moonPhase = getMoonPhaseInfo(now);

  const nowMs = now.getTime();
  const startMs = kanBenStartDate.getTime();
  const endMs = pchumBenDate.getTime();

  const buddhistYear = getBuddhistEraYear(year);

  if (nowMs < startMs) {
    const diff = Math.max(0, startMs - nowMs);
    return {
      status: 'upcoming',
      currentDayNumber: null,
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      year,
      buddhistYear,
      moonPhase,
    };
  }

  if (nowMs <= endMs) {
    const dayIndex = Math.min(
      15,
      Math.floor((nowMs - startMs) / (1000 * 60 * 60 * 24)) + 1,
    );
    const diff = Math.max(0, endMs - nowMs);
    return {
      status: 'ongoing',
      currentDayNumber: dayIndex,
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      year,
      buddhistYear,
      moonPhase,
    };
  }

  return {
    status: 'ended',
    currentDayNumber: null,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    year,
    buddhistYear,
    moonPhase,
  };
}
