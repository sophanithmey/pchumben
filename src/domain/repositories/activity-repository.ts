import { Activity, ActivityCategory } from '../entities/activity';

export interface ActivityRepository {
  getAllActivities(): Promise<Activity[]>;
  getActivityById(id: string): Promise<Activity | null>;
  getActivitiesForDay(dayNumber: number): Promise<Activity[]>;
  getActivitiesByCategory(category: ActivityCategory): Promise<Activity[]>;
}
