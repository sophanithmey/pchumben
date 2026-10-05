import React from 'react';
import { useDailyActivity } from './use-daily-activity';
import { ActivityCard } from './activity-card';
import { CategoryFilter } from './category-filter';
import { LoadingState } from '../../components/ui/loading-state';
import { ErrorState } from '../../components/ui/error-state';
import { EmptyState } from '../../components/ui/empty-state';
import { useI18n } from '../../i18n/i18n-context';

export const ActivitiesPage: React.FC = () => {
  const {
    filteredActivities,
    selectedCategory,
    setSelectedCategory,
    isCompleted,
    toggleActivity,
    isLoading,
    isError,
  } = useDailyActivity();
  const { t } = useI18n();

  if (isLoading) return <LoadingState />;
  if (isError) return <ErrorState />;

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm border border-warmth-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xs">
        <span className="text-xs font-bold text-lotus-700 bg-lotus-50 px-3 py-1 rounded-full border border-lotus-200">
          {t('nav.activities')}
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-warmth-950 mt-2 mb-2 font-khmer">
          {t('activities.title')}
        </h1>
        <p className="text-xs sm:text-sm text-warmth-600 mb-6 leading-relaxed max-w-3xl font-khmer">
          {t('activities.subtitle')}
        </p>

        <CategoryFilter selected={selectedCategory} onChange={setSelectedCategory} />
      </div>

      {/* Activities Grid */}
      {filteredActivities.length === 0 ? (
        <EmptyState title={t('status.empty')} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
          {filteredActivities.map((act) => (
            <ActivityCard
              key={act.id}
              activity={act}
              isCompleted={isCompleted(act.id)}
              onToggle={toggleActivity}
            />
          ))}
        </div>
      )}
    </div>
  );
};
