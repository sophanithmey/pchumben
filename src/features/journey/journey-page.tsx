import React from 'react';
import { usePchumBenJourney } from './use-pchum-ben-journey';
import { DayCard } from './day-card';
import { ProgressBar } from '../../components/ui/progress-bar';
import { LoadingState } from '../../components/ui/loading-state';
import { ErrorState } from '../../components/ui/error-state';
import { useI18n } from '../../i18n/i18n-context';

export const JourneyPage: React.FC = () => {
  const { days, progress, summary, countdown, toggleDay, isLoading, isError } =
    usePchumBenJourney();
  const { t } = useI18n();

  if (isLoading) return <LoadingState />;
  if (isError) return <ErrorState />;

  const currentDayNum = countdown.currentDayNumber ?? 1;

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header banner */}
      <div className="bg-white/90 backdrop-blur-sm border border-warmth-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-lotus-700 bg-lotus-50 px-3 py-1 rounded-full border border-lotus-200">
              {t('nav.journey')}
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-warmth-950 mt-2 mb-2 font-khmer">
              {t('journey.title')}
            </h1>
            <p className="text-xs sm:text-sm text-warmth-600 leading-relaxed font-khmer">
              {t('journey.subtitle')}
            </p>
          </div>

          <div className="w-full lg:w-80 flex-shrink-0 bg-warmth-50/80 p-4 rounded-2xl border border-warmth-200/70 shadow-2xs">
            <ProgressBar
              value={summary.percentage}
              label={t('progress.daysCount', {
                completed: summary.daysCompleted,
                total: summary.totalDays,
              })}
              subLabel={`${summary.percentage}%`}
            />
          </div>
        </div>
      </div>

      {/* Grid of 15 Days */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
        {days.map((day) => {
          const isCompleted = progress.completedDayNumbers.includes(day.dayNumber);
          const isCurrent = day.dayNumber === currentDayNum && countdown.status === 'ongoing';
          return (
            <DayCard
              key={day.id}
              day={day}
              isCompleted={isCompleted}
              isCurrent={isCurrent}
              onToggle={toggleDay}
            />
          );
        })}
      </div>
    </div>
  );
};
