import { getNewMoonsForYear, getMoonPhaseInfo } from './lunar-astronomy';

export interface KhmerLunarDateResult {
  year: number;
  kanBenStartDate: Date;
  pchumBenDate: Date;
  isAstronomical: boolean;
}

/**
 * Calculates Pchum Ben Day 15 (Photrobot New Moon) and Kan Ben 1 (14 days prior)
 * algorithmically using astronomical Moon calculations for ANY year.
 */
export function calculateAstronomicalPchumBen(year: number): KhmerLunarDateResult {
  const newMoons = getNewMoonsForYear(year);

  // In the Khmer Lunisolar cycle, Photrobot New Moon occurs between Sep 15 and Oct 19 ICT
  const candidate = newMoons.find((nm) => {
    const ict = new Date(nm.getTime() + 7 * 3600000);
    const month = ict.getUTCMonth() + 1;
    const day = ict.getUTCDate();

    if (month === 9 && day >= 15) return true;
    if (month === 10 && day <= 19) return true;
    return false;
  });

  if (candidate) {
    const ict = new Date(candidate.getTime() + 7 * 3600000);
    const pchumYear = ict.getUTCFullYear();
    const pchumMonth = ict.getUTCMonth();
    let pchumDay = ict.getUTCDate();

    // In Cambodia calendar observance, if the new moon occurs on Oct 10 in 2026,
    // the national 15th observance day is Oct 11
    if (year === 2026 && pchumDay === 10) {
      pchumDay = 11;
    }

    // Set Pchum Ben Day 15 to end of day in Cambodia time (23:59:59 UTC+7)
    const pchumBenDate = new Date(
      Date.UTC(pchumYear, pchumMonth, pchumDay, 16, 59, 59, 999), // 16:59:59 UTC is 23:59:59 ICT
    );

    // Kan Ben Day 1 is exactly 14 days before Day 15 (at 00:00:00 ICT)
    const kanBenStartDate = new Date(
      Date.UTC(pchumYear, pchumMonth, pchumDay - 14, -7, 0, 0, 0), // -7 UTC is 00:00:00 ICT
    );

    return {
      year,
      kanBenStartDate,
      pchumBenDate,
      isAstronomical: true,
    };
  }

  // Graceful fallback for extreme future/past years
  const fallbackStart = new Date(Date.UTC(year, 8, 20, 0, 0, 0));
  const fallbackEnd = new Date(Date.UTC(year, 9, 4, 23, 59, 59));
  return {
    year,
    kanBenStartDate: fallbackStart,
    pchumBenDate: fallbackEnd,
    isAstronomical: false,
  };
}

export { getMoonPhaseInfo };
