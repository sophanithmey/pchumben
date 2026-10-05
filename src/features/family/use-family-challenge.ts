import { useMemo } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import confetti from 'canvas-confetti';
import { localProgressRepository } from '../../infrastructure/repositories/local-progress-repository';
import { FAMILY_CHALLENGES_DATA } from '../../data/family-challenges';

export function useFamilyChallenge() {
  const queryClient = useQueryClient();

  const progressQuery = useQuery({
    queryKey: ['user-progress'],
    queryFn: () => localProgressRepository.getProgress(),
  });

  const completedIds = useMemo(
    () => progressQuery.data?.completedFamilyChallengeIds ?? [],
    [progressQuery.data?.completedFamilyChallengeIds],
  );
  const total = FAMILY_CHALLENGES_DATA.length;
  const completedCount = completedIds.length;
  const isBadgeUnlocked = completedCount >= total;

  const toggleMutation = useMutation({
    mutationFn: (id: string) => localProgressRepository.toggleFamilyChallenge(id),
    onSuccess: (updatedProgress) => {
      queryClient.invalidateQueries({ queryKey: ['user-progress'] });
      if (updatedProgress.completedFamilyChallengeIds.length >= total) {
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#dc5078', '#f1de4d', '#ab810b', '#48bb78'],
          });
        } catch {
          // ignore
        }
      }
    },
  });

  const challengesWithStatus = useMemo(() => {
    return FAMILY_CHALLENGES_DATA.map((ch) => ({
      ...ch,
      isCompleted: completedIds.includes(ch.id),
    }));
  }, [completedIds]);

  return {
    challenges: challengesWithStatus,
    completedCount,
    total,
    isBadgeUnlocked,
    toggleChallenge: (id: string) => toggleMutation.mutate(id),
    isToggling: toggleMutation.isPending,
    isLoading: progressQuery.isLoading,
  };
}
