export interface PchumBenDay {
  id: string;
  dayNumber: number;
  title: string;
  khmerTitle: string;
  description: string;
  khmerDescription?: string;
  tradition: string;
  khmerTradition?: string;
  activities: string[];
  khmerActivities?: string[];
  preparation: string[];
  khmerPreparation?: string[];
  reflection?: string;
  khmerReflection?: string;
  isPchumBenFinalDay?: boolean;
}

export type DayStatus = 'completed' | 'current' | 'locked' | 'available';
