import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { localPchumBenRepository } from '../../infrastructure/repositories/local-pchum-ben-repository';
import { localProgressRepository } from '../../infrastructure/repositories/local-progress-repository';
import { localMemoryRepository } from '../../infrastructure/repositories/local-memory-repository';
import { calculateProgressSummary } from '../../domain/use-cases/calculate-progress';
import { getPchumBenCountdown } from '../../domain/services/calendar-service';

export function usePchumBenJourney() {
  const queryClient = useQueryClient();

  const daysQuery = useQuery({
    queryKey: ['pchum-ben-days'],
    queryFn: () => localPchumBenRepository.getAllDays(),
  });

  const progressQuery = useQuery({
    queryKey: ['user-progress'],
    queryFn: () => localProgressRepository.getProgress(),
  });

  const memoriesQuery = useQuery({
    queryKey: ['memories'],
    queryFn: () => localMemoryRepository.getAllMemories(),
  });

  const toggleDayMutation = useMutation({
    mutationFn: (dayNumber: number) => localProgressRepository.toggleDayCompletion(dayNumber),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-progress'] });
    },
  });

  const progress = progressQuery.data ?? {
    completedDayNumbers: [],
    completedActivityIds: [],
    completedFamilyChallengeIds: [],
    lastActiveDate: new Date().toISOString(),
  };

  const memoriesCount = memoriesQuery.data?.length ?? 0;
  const summary = calculateProgressSummary(progress, memoriesCount, 15);
  const countdown = getPchumBenCountdown();

  return {
    days: daysQuery.data ?? [],
    isLoading: daysQuery.isLoading || progressQuery.isLoading,
    isError: daysQuery.isError || progressQuery.isError,
    progress,
    summary,
    countdown,
    toggleDay: (dayNumber: number) => toggleDayMutation.mutate(dayNumber),
    isTogglingDay: toggleDayMutation.isPending,
  };
}
