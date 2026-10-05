export type ActivityCategory =
  | 'LEARN'
  | 'FAMILY'
  | 'MERIT'
  | 'MEMORY'
  | 'TRADITION'
  | 'COMMUNITY';

export interface Activity {
  id: string;
  title: string;
  khmerTitle: string;
  description: string;
  khmerDescription: string;
  category: ActivityCategory;
  estimatedMinutes: number;
  dayNumbers: number[];
  practicalTip?: string;
  khmerPracticalTip?: string;
}
