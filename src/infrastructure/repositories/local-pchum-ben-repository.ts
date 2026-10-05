import { PchumBenDay } from '../../domain/entities/pchum-ben-day';
import { PchumBenRepository } from '../../domain/repositories/pchum-ben-repository';
import { PCHUM_BEN_DAYS } from '../../data/pchum-ben-days';
import { getPchumBenCountdown } from '../../domain/services/calendar-service';

export class LocalPchumBenRepository implements PchumBenRepository {
  async getAllDays(): Promise<PchumBenDay[]> {
    return [...PCHUM_BEN_DAYS];
  }

  async getDayByNumber(dayNumber: number): Promise<PchumBenDay | null> {
    const found = PCHUM_BEN_DAYS.find((d) => d.dayNumber === dayNumber);
    return found ? { ...found } : null;
  }

  async getCurrentDay(): Promise<PchumBenDay> {
    const countdown = getPchumBenCountdown();
    const targetDayNumber = countdown.currentDayNumber ?? 1;
    const found = PCHUM_BEN_DAYS.find((d) => d.dayNumber === targetDayNumber);
    const firstDay = PCHUM_BEN_DAYS[0];
    if (found) {
      return { ...found };
    }
    if (firstDay) {
      return { ...firstDay };
    }
    throw new Error('No Pchum Ben days configured');
  }
}

export const localPchumBenRepository = new LocalPchumBenRepository();
