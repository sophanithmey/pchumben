import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Clock, CheckCircle2, Circle, ArrowRight } from 'lucide-react';
import { useDailyActivity } from '../activities/use-daily-activity';
import { Badge } from '../../components/ui/badge';
import { useI18n } from '../../i18n/i18n-context';

export const TodaysActivityCard: React.FC = () => {
  const { primaryTodayActivity, isCompleted, toggleActivity } = useDailyActivity();
  const { t, locale } = useI18n();

  if (!primaryTodayActivity) return null;

  const completed = isCompleted(primaryTodayActivity.id);

  return (
    <div className="bg-gradient-to-r from-lotus-50/70 via-white to-amber-50/50 border border-warmth-200/90 rounded-3xl p-5 sm:p-6 shadow-sm mb-8">
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-xl bg-lotus-100 text-lotus-700">
            <Sparkles className="w-4 h-4" />
          </span>
          <span className="text-xs font-bold text-lotus-900 uppercase tracking-wide">
            {t('journey.todayActivity')}
          </span>
        </div>

        <Badge variant="lotus" size="sm">
          {t(`category.${primaryTodayActivity.category}` as const)}
        </Badge>
      </div>

      <h3 className="text-lg font-bold text-warmth-950 mb-1">
        {locale === 'kh' ? primaryTodayActivity.khmerTitle : primaryTodayActivity.title}
      </h3>

      <p className="text-sm text-warmth-700 mb-4 line-clamp-2 leading-relaxed">
        {locale === 'kh'
          ? primaryTodayActivity.khmerDescription
          : primaryTodayActivity.description}
      </p>

      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-warmth-100">
        <div className="flex items-center gap-1.5 text-xs text-warmth-600">
          <Clock className="w-3.5 h-3.5" />
          <span>
            {t('activities.estimatedTime', { minutes: primaryTodayActivity.estimatedMinutes })}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => toggleActivity(primaryTodayActivity.id)}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
              completed
                ? 'bg-emerald-600 text-white'
                : 'bg-warmth-100 hover:bg-warmth-200 text-warmth-800'
            }`}
          >
            {completed ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
            <span>{completed ? t('action.markCompleted') : t('action.markCompleted')}</span>
          </button>

          <Link
            to={`/activities/${primaryTodayActivity.id}`}
            className="p-1.5 text-warmth-600 hover:text-lotus-700 transition"
            aria-label="View activity details"
          >
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
