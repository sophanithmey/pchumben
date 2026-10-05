import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import { usePchumBenJourney } from '../journey/use-pchum-ben-journey';
import { ProgressBar } from '../../components/ui/progress-bar';
import { useI18n } from '../../i18n/i18n-context';

export const JourneyPreview: React.FC = () => {
  const { days, progress, summary } = usePchumBenJourney();
  const { t, locale } = useI18n();

  return (
    <div className="bg-white/90 backdrop-blur-sm border border-warmth-200/90 rounded-3xl p-5 sm:p-6 shadow-sm mb-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-bold text-warmth-900">{t('progress.title')}</h2>
          <p className="text-xs text-warmth-600">
            {t('progress.daysCount', { completed: summary.daysCompleted, total: summary.totalDays })}
          </p>
        </div>
        <Link
          to="/journey"
          className="inline-flex items-center gap-1 text-xs font-semibold text-lotus-700 hover:text-lotus-800 bg-lotus-50 px-3 py-1.5 rounded-xl border border-lotus-200/60 transition"
        >
          <span>{t('action.viewAllDays')}</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="mb-6">
        <ProgressBar
          value={summary.percentage}
          label=""
          subLabel={`${summary.percentage}%`}
          size="md"
        />
      </div>

      {/* 15 Days Horizontal Scrolling / Grid */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {days.map((day) => {
          const isCompleted = progress.completedDayNumbers.includes(day.dayNumber);
          return (
            <Link
              key={day.id}
              to={`/journey/${day.dayNumber}`}
              className={`flex-shrink-0 w-20 p-2.5 rounded-2xl border text-center transition transform hover:-translate-y-0.5 ${
                isCompleted
                  ? 'bg-lotus-50/90 border-lotus-300 text-lotus-900 shadow-xs'
                  : 'bg-warmth-50 border-warmth-200 text-warmth-700 hover:bg-white'
              }`}
            >
              <div className="flex items-center justify-center mb-1">
                {isCompleted ? (
                  <CheckCircle2 className="w-4 h-4 text-lotus-600" />
                ) : (
                  <span className="text-xs font-bold text-warmth-500">#{day.dayNumber}</span>
                )}
              </div>
              <div className="text-[11px] font-bold truncate">
                {day.dayNumber === 15 ? 'ភ្ជុំធំ' : `បិណ្ឌ ${day.dayNumber}`}
              </div>
              <div className="text-[9px] text-warmth-500 truncate mt-0.5">
                {locale === 'kh' ? (day.dayNumber === 15 ? 'Pchum' : `Day ${day.dayNumber}`) : `Day ${day.dayNumber}`}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
