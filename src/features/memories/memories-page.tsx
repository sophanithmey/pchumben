import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Trees, LayoutGrid } from 'lucide-react';
import { useMemoryGarden } from './use-memory-garden';
import { MemoryGardenView } from './memory-garden-view';
import { MemoryCard } from './memory-card';
import { LoadingState } from '../../components/ui/loading-state';
import { ErrorState } from '../../components/ui/error-state';
import { EmptyState } from '../../components/ui/empty-state';
import { useI18n } from '../../i18n/i18n-context';

export const MemoriesPage: React.FC = () => {
  const { filteredMemories, deleteMemory, isLoading, isError } = useMemoryGarden();
  const { t, locale } = useI18n();
  const [viewMode, setViewMode] = useState<'garden' | 'cards'>('garden');

  if (isLoading) return <LoadingState />;
  if (isError) return <ErrorState />;

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm border border-warmth-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-lotus-700 bg-lotus-50 px-3 py-1 rounded-full border border-lotus-200">
            {t('nav.memories')}
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-warmth-950 mt-2 mb-1">
            {t('memory.title')}
          </h1>
          <p className="text-xs sm:text-sm text-warmth-600 max-w-lg leading-relaxed">
            {t('memory.subtitle')}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* View toggle */}
          <div className="flex bg-warmth-100 p-1 rounded-2xl border border-warmth-200">
            <button
              type="button"
              onClick={() => setViewMode('garden')}
              className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1 transition ${
                viewMode === 'garden'
                  ? 'bg-white text-lotus-700 shadow-xs'
                  : 'text-warmth-600 hover:text-warmth-900'
              }`}
              title={locale === 'kh' ? 'មើលជាសួន' : 'Garden View'}
            >
              <Trees className="w-4 h-4" />
              <span className="hidden sm:inline font-khmer">
                {locale === 'kh' ? 'សួនអនុស្សាវរីយ៍' : 'Garden'}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('cards')}
              className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1 transition ${
                viewMode === 'cards'
                  ? 'bg-white text-lotus-700 shadow-xs'
                  : 'text-warmth-600 hover:text-warmth-900'
              }`}
              title={locale === 'kh' ? 'មើលជាកាត' : 'Cards View'}
            >
              <LayoutGrid className="w-4 h-4" />
              <span className="hidden sm:inline font-khmer">
                {locale === 'kh' ? 'កាតអនុស្សាវរីយ៍' : 'Cards'}
              </span>
            </button>
          </div>

          <Link
            to="/memories/create"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-lotus-600 hover:bg-lotus-700 text-white font-semibold text-xs sm:text-sm shadow-md transition"
          >
            <Plus className="w-4 h-4" />
            <span>{t('action.createMemory')}</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      {filteredMemories.length === 0 ? (
        <EmptyState
          title={t('memory.empty')}
          action={
            <Link
              to="/memories/create"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-lotus-600 text-white font-semibold text-sm shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>{t('action.createMemory')}</span>
            </Link>
          }
        />
      ) : viewMode === 'garden' ? (
        <MemoryGardenView memories={filteredMemories} onDelete={deleteMemory} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
          {filteredMemories.map((m) => (
            <MemoryCard key={m.id} memory={m} onDelete={deleteMemory} />
          ))}
        </div>
      )}
    </div>
  );
};
