import { Activity, ActivityCategory } from '../../domain/entities/activity';
import { ActivityRepository } from '../../domain/repositories/activity-repository';
import { ACTIVITIES_DATA } from '../../data/activities';

export class LocalActivityRepository implements ActivityRepository {
  async getAllActivities(): Promise<Activity[]> {
    return [...ACTIVITIES_DATA];
  }

  async getActivityById(id: string): Promise<Activity | null> {
    const activity = ACTIVITIES_DATA.find((a) => a.id === id);
    return activity ? { ...activity } : null;
  }

  async getActivitiesForDay(dayNumber: number): Promise<Activity[]> {
    return ACTIVITIES_DATA.filter((a) => a.dayNumbers.includes(dayNumber));
  }

  async getActivitiesByCategory(category: ActivityCategory): Promise<Activity[]> {
    return ACTIVITIES_DATA.filter((a) => a.category === category);
  }
}

export const localActivityRepository = new LocalActivityRepository();
