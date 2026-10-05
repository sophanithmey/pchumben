/**
 * Astronomical Moon calculation based on Jean Meeus algorithms.
 * Accurately determines New Moon dates and lunar phases for any Gregorian year.
 */

const DEG2RAD = Math.PI / 180;

/**
 * Calculates the Julian Ephemeris Day of a New Moon for lunation index k.
 * Lunation k = 0 corresponds to the New Moon of January 6, 2000.
 */
export function getNewMoonJDE(k: number): number {
  const T = k / 1236.85;
  const T2 = T * T;
  const T3 = T2 * T;

  // Mean New Moon
  const jde0 =
    2451549.59289 +
    29.530588853 * k +
    0.0001337 * T2 -
    0.00000015 * T3;

  // Planetary & Solar Anomalies in degrees
  const M = (2.5534 + 29.10535669 * k - 0.0000218 * T2) * DEG2RAD;
  const Mp = (201.5643 + 385.81693528 * k + 0.0107438 * T2) * DEG2RAD;
  const F = (160.7108 + 390.67050274 * k - 0.0016341 * T2) * DEG2RAD;

  // Major periodic perturbation corrections (days)
  const correction =
    -0.4072 * Math.sin(Mp) +
    0.17241 * Math.sin(M) +
    0.01608 * Math.sin(2 * Mp) +
    0.01039 * Math.sin(2 * F) +
    0.00739 * Math.sin(Mp - M) -
    0.00514 * Math.sin(Mp + M) +
    0.00208 * Math.sin(2 * M) -
    0.00111 * Math.sin(2 * Mp - 2 * F);

  return jde0 + correction;
}

/**
 * Converts Julian Day number to standard JavaScript Date.
 */
export function julianDayToDate(jd: number): Date {
  const timeMs = (jd - 2440587.5) * 86400000;
  return new Date(timeMs);
}

/**
 * Finds all New Moons in Cambodia local time (UTC+7) for a given calendar year.
 */
export function getNewMoonsForYear(year: number): Date[] {
  // Approximate k index around January of given year
  const approxK = Math.round((year - 2000) * 12.3685);
  const newMoons: Date[] = [];

  // Search through 16 lunations around this year
  for (let k = approxK - 2; k <= approxK + 14; k++) {
    const jd = getNewMoonJDE(k);
    const date = julianDayToDate(jd);

    // Convert to Indochina Time (+07:00) to inspect year
    const ictYear = new Date(date.getTime() + 7 * 3600000).getUTCFullYear();
    if (ictYear === year) {
      newMoons.push(date);
    }
  }

  return newMoons.sort((a, b) => a.getTime() - b.getTime());
}

/**
 * Calculates real-time Moon illumination fraction (0 to 1) and phase name.
 */
export function getMoonPhaseInfo(date: Date = new Date()): {
  fraction: number;
  ageDays: number;
  isWaxing: boolean;
  khmerPhase: string;
  englishPhase: string;
} {
  // Reference known New Moon: Jan 11, 2024, 11:57 UTC
  const synodicMonth = 29.530588853;
  const refNewMoon = new Date('2024-01-11T11:57:00Z').getTime();
  const diffDays = (date.getTime() - refNewMoon) / 86400000;
  const ageDays = ((diffDays % synodicMonth) + synodicMonth) % synodicMonth;
  const phaseAngle = (ageDays / synodicMonth) * 2 * Math.PI;
  const fraction = (1 - Math.cos(phaseAngle)) / 2;
  const isWaxing = ageDays < synodicMonth / 2;

  let khmerPhase = 'ខ្នើត';
  let englishPhase = 'Waxing';

  if (ageDays < 1 || ageDays > 28.5) {
    khmerPhase = 'ដាច់ខែ (New Moon)';
    englishPhase = 'New Moon';
  } else if (Math.abs(ageDays - synodicMonth / 2) < 0.8) {
    khmerPhase = 'ពេញបូណ៌មី (Full Moon)';
    englishPhase = 'Full Moon';
  } else if (isWaxing) {
    khmerPhase = 'រះឡើង (ខ្នើត)';
    englishPhase = 'Waxing Moon';
  } else {
    khmerPhase = 'ស្រុតចុះ (រោច)';
    englishPhase = 'Waning Moon';
  }

  return {
    fraction: Math.round(fraction * 100) / 100,
    ageDays: Math.round(ageDays * 10) / 10,
    isWaxing,
    khmerPhase,
    englishPhase,
  };
}
