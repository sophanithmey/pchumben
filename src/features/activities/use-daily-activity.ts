import { useState, useMemo } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { localActivityRepository } from '../../infrastructure/repositories/local-activity-repository';
import { localProgressRepository } from '../../infrastructure/repositories/local-progress-repository';
import { ActivityCategory } from '../../domain/entities/activity';
import { getPchumBenCountdown } from '../../domain/services/calendar-service';

export function useDailyActivity() {
  const queryClient = useQueryClient();
  const [selectedCategory, setSelectedCategory] = useState<ActivityCategory | 'ALL'>('ALL');

  const activitiesQuery = useQuery({
    queryKey: ['activities'],
    queryFn: () => localActivityRepository.getAllActivities(),
  });

  const progressQuery = useQuery({
    queryKey: ['user-progress'],
    queryFn: () => localProgressRepository.getProgress(),
  });

  const toggleMutation = useMutation({
    mutationFn: (activityId: string) =>
      localProgressRepository.toggleActivityCompletion(activityId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-progress'] });
    },
  });

  const activities = useMemo(() => activitiesQuery.data ?? [], [activitiesQuery.data]);
  const completedIds = useMemo(
    () => progressQuery.data?.completedActivityIds ?? [],
    [progressQuery.data?.completedActivityIds],
  );

  const filteredActivities = useMemo(() => {
    if (selectedCategory === 'ALL') return activities;
    return activities.filter((a) => a.category === selectedCategory);
  }, [activities, selectedCategory]);

  const todayDayNumber = useMemo(() => {
    const cd = getPchumBenCountdown();
    return cd.currentDayNumber ?? 1;
  }, []);

  const todayActivities = useMemo(() => {
    return activities.filter((a) => a.dayNumbers.includes(todayDayNumber));
  }, [activities, todayDayNumber]);

  const primaryTodayActivity = todayActivities[0] ?? activities[0];

  return {
    activities,
    filteredActivities,
    todayActivities,
    primaryTodayActivity,
    selectedCategory,
    setSelectedCategory,
    completedIds,
    isCompleted: (id: string) => completedIds.includes(id),
    toggleActivity: (id: string) => toggleMutation.mutate(id),
    isLoading: activitiesQuery.isLoading || progressQuery.isLoading,
    isError: activitiesQuery.isError || progressQuery.isError,
  };
}
