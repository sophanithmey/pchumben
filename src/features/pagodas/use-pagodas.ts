import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { localPagodaRepository } from '../../infrastructure/repositories/local-pagoda-repository';

export function usePagodas() {
  const [province, setProvince] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const pagodasQuery = useQuery({
    queryKey: ['pagodas', province, searchQuery],
    queryFn: () => localPagodaRepository.searchPagodas({ province, searchQuery }),
  });

  const provincesQuery = useQuery({
    queryKey: ['pagoda-provinces'],
    queryFn: () => localPagodaRepository.getProvinces(),
  });

  return {
    pagodas: pagodasQuery.data ?? [],
    provinces: provincesQuery.data ?? [],
    province,
    setProvince,
    searchQuery,
    setSearchQuery,
    isLoading: pagodasQuery.isLoading,
    isError: pagodasQuery.isError,
  };
}
