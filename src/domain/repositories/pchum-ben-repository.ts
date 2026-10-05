import { PchumBenDay } from '../entities/pchum-ben-day';

export interface PchumBenRepository {
  getAllDays(): Promise<PchumBenDay[]>;
  getDayByNumber(dayNumber: number): Promise<PchumBenDay | null>;
  getCurrentDay(): Promise<PchumBenDay>;
}
