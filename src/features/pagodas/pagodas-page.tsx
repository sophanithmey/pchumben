import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { usePagodas } from './use-pagodas';
import { PagodaCard } from './pagoda-card';
import { PagodaDirectionsModal } from './pagoda-directions-modal';
import { Pagoda } from '../../domain/entities/pagoda';
import { LoadingState } from '../../components/ui/loading-state';
import { ErrorState } from '../../components/ui/error-state';
import { EmptyState } from '../../components/ui/empty-state';
import { useI18n } from '../../i18n/i18n-context';

export const PagodasPage: React.FC = () => {
  const {
    pagodas,
    provinces,
    province,
    setProvince,
    searchQuery,
    setSearchQuery,
    isLoading,
    isError,
  } = usePagodas();
  const { t } = useI18n();
  const [selectedPagoda, setSelectedPagoda] = useState<Pagoda | null>(null);

  if (isLoading) return <LoadingState />;
  if (isError) return <ErrorState />;

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm border border-warmth-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xs">
        <span className="text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
          {t('nav.pagodas')}
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-warmth-950 mt-2 mb-2 font-khmer">
          {t('pagodas.title')}
        </h1>
        <p className="text-xs sm:text-sm text-warmth-600 mb-6 leading-relaxed max-w-3xl font-khmer">
          {t('pagodas.subtitle')}
        </p>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-warmth-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('pagodas.searchPlaceholder')}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-warmth-200 bg-warmth-50/70 focus:bg-white focus:border-lotus-500 focus:ring-2 focus:ring-lotus-200 outline-hidden text-sm transition"
            />
          </div>

          <div className="w-full sm:w-56">
            <select
              value={province}
              onChange={(e) => setProvince(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-2xl border border-warmth-200 bg-warmth-50/70 focus:bg-white text-xs sm:text-sm font-medium text-warmth-800 outline-hidden transition cursor-pointer"
            >
              <option value="all">
                {t('action.filterAll')} {t('pagodas.provinceFilter')}
              </option>
              {provinces.map((prov) => (
                <option key={prov} value={prov}>
                  {prov}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Grid of Pagodas */}
      {pagodas.length === 0 ? (
        <EmptyState
          icon={<MapPin className="w-8 h-8 text-warmth-400" />}
          title={t('status.empty')}
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
          {pagodas.map((p) => (
            <PagodaCard key={p.id} pagoda={p} onOpenDirections={setSelectedPagoda} />
          ))}
        </div>
      )}

      {/* Directions modal */}
      <PagodaDirectionsModal pagoda={selectedPagoda} onClose={() => setSelectedPagoda(null)} />
    </div>
  );
};
