import { PchumBenDay } from '../domain/entities/pchum-ben-day';
import { PCHUM_BEN_DAYS_PART1 } from './pchum-ben-days-part1';
import { PCHUM_BEN_DAYS_PART2 } from './pchum-ben-days-part2';

export const PCHUM_BEN_DAYS: PchumBenDay[] = [
  ...PCHUM_BEN_DAYS_PART1,
  ...PCHUM_BEN_DAYS_PART2,
];

export function getDayByNumber(dayNumber: number): PchumBenDay | undefined {
  return PCHUM_BEN_DAYS.find((d) => d.dayNumber === dayNumber);
}
