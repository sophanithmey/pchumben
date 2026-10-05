import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Circle, ArrowRight, Sparkles } from 'lucide-react';
import { PchumBenDay } from '../../domain/entities/pchum-ben-day';
import { Badge } from '../../components/ui/badge';
import { useI18n } from '../../i18n/i18n-context';

interface DayCardProps {
  day: PchumBenDay;
  isCompleted: boolean;
  isCurrent: boolean;
  onToggle: (dayNumber: number) => void;
}

export const DayCard: React.FC<DayCardProps> = ({
  day,
  isCompleted,
  isCurrent,
  onToggle,
}) => {
  const { t, locale } = useI18n();

  return (
    <div
      className={`group relative rounded-3xl p-5 border transition-all duration-300 ${
        isCompleted
          ? 'bg-lotus-50/60 border-lotus-200/90 shadow-xs'
          : isCurrent
            ? 'bg-white border-amber-300 shadow-md ring-2 ring-amber-200/50'
            : 'bg-white/80 border-warmth-200/80 hover:border-warmth-300 hover:shadow-xs'
      }`}
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex items-center gap-2">
          <span
            className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold ${
              day.isPchumBenFinalDay
                ? 'bg-amber-100 text-amber-900 border border-amber-300'
                : 'bg-warmth-100 text-warmth-800'
            }`}
          >
            {day.dayNumber}
          </span>

          {day.isPchumBenFinalDay && (
            <Badge variant="gold" size="sm">
              <Sparkles className="w-3 h-3 mr-1" />
              <span>បុណ្យភ្ជុំធំ (Pchum Ben)</span>
            </Badge>
          )}

          {isCurrent && (
            <Badge variant="lotus" size="sm">
              <span>{t('status.current')}</span>
            </Badge>
          )}
        </div>

        <button
          type="button"
          onClick={() => onToggle(day.dayNumber)}
          aria-label={isCompleted ? t('action.markIncomplete') : t('action.markCompleted')}
          className={`p-1.5 rounded-full transition ${
            isCompleted
              ? 'text-emerald-600 hover:text-emerald-700 bg-emerald-50'
              : 'text-warmth-400 hover:text-warmth-700 hover:bg-warmth-100'
          }`}
        >
          {isCompleted ? <CheckCircle2 className="w-6 h-6" /> : <Circle className="w-6 h-6" />}
        </button>
      </div>

      <h3 className="text-base sm:text-lg font-bold text-warmth-900 mb-1 group-hover:text-lotus-800 transition">
        {locale === 'kh' ? day.khmerTitle : day.title}
      </h3>

      <p className="text-xs sm:text-sm text-warmth-600 mb-4 line-clamp-2 leading-relaxed">
        {day.description}
      </p>

      <div className="flex items-center justify-between pt-3 border-t border-warmth-100">
        <span className="text-xs text-warmth-500 font-medium">
          {day.activities.length} {t('nav.activities')}
        </span>

        <Link
          to={`/journey/${day.dayNumber}`}
          className="inline-flex items-center gap-1 text-xs font-semibold text-lotus-700 hover:text-lotus-900 transition"
        >
          <span>{t('action.learnMore')}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
