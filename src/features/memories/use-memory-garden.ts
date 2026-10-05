import { useState, useMemo } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { localMemoryRepository } from '../../infrastructure/repositories/local-memory-repository';
import { CreateMemoryInput } from '../../domain/repositories/memory-repository';
import { MemoryFilter, MemoryVisualType } from '../../domain/entities/memory';

export function useMemoryGarden() {
  const queryClient = useQueryClient();
  const [filter, setFilter] = useState<MemoryFilter>('all');
  const [visualFilter, setVisualFilter] = useState<MemoryVisualType | 'ALL'>('ALL');

  const memoriesQuery = useQuery({
    queryKey: ['memories'],
    queryFn: () => localMemoryRepository.getAllMemories(),
  });

  const createMutation = useMutation({
    mutationFn: (input: CreateMemoryInput) => localMemoryRepository.createMemory(input),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['memories'] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => localMemoryRepository.deleteMemory(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['memories'] });
    },
  });

  const memories = useMemo(() => memoriesQuery.data ?? [], [memoriesQuery.data]);

  const filteredMemories = useMemo(() => {
    return memories.filter((m) => {
      if (filter === 'private' && !m.isPrivate) return false;
      if (filter === 'public' && m.isPrivate) return false;
      if (visualFilter !== 'ALL' && m.visualType !== visualFilter) return false;
      return true;
    });
  }, [memories, filter, visualFilter]);

  return {
    memories,
    filteredMemories,
    filter,
    setFilter,
    visualFilter,
    setVisualFilter,
    createMemory: createMutation.mutateAsync,
    deleteMemory: deleteMutation.mutateAsync,
    isCreating: createMutation.isPending,
    isDeleting: deleteMutation.isPending,
    isLoading: memoriesQuery.isLoading,
    isError: memoriesQuery.isError,
    totalCount: memories.length,
  };
}
