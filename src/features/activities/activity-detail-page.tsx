import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, CheckCircle2, Circle, Lightbulb, Calendar } from 'lucide-react';
import { useDailyActivity } from './use-daily-activity';
import { Badge } from '../../components/ui/badge';
import { LoadingState } from '../../components/ui/loading-state';
import { ErrorState } from '../../components/ui/error-state';
import { useI18n } from '../../i18n/i18n-context';

export const ActivityDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { activities, isCompleted, toggleActivity, isLoading } = useDailyActivity();
  const { t, locale } = useI18n();

  if (isLoading) return <LoadingState />;

  const activity = activities.find((a) => a.id === id);
  if (!activity) return <ErrorState message={t('errors.notFound')} />;

  const completed = isCompleted(activity.id);

  return (
    <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        <Link
          to="/activities"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-warmth-700 hover:text-warmth-950 bg-white px-3 py-1.5 rounded-xl border border-warmth-200 transition shadow-xs active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t('action.back')}</span>
        </Link>

        <button
          type="button"
          onClick={() => toggleActivity(activity.id)}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold transition shadow-xs active:scale-95 cursor-pointer ${
            completed
              ? 'bg-emerald-600 text-white'
              : 'bg-white text-warmth-800 border border-warmth-300 hover:bg-warmth-100'
          }`}
        >
          {completed ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
          <span>{completed ? t('status.completed') : t('action.markCompleted')}</span>
        </button>
      </div>

      {/* Main Details */}
      <div className="bg-white/90 backdrop-blur-sm border border-warmth-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="lotus" size="sm">
            {t(`category.${activity.category}` as const)}
          </Badge>
          <div className="flex items-center gap-1 text-xs text-warmth-600 font-medium ml-2">
            <Clock className="w-3.5 h-3.5" />
            <span>{t('activities.estimatedTime', { minutes: activity.estimatedMinutes })}</span>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-warmth-950 mb-2">
          {locale === 'kh' ? activity.khmerTitle : activity.title}
        </h1>

        <p className="text-sm sm:text-base text-warmth-700 leading-relaxed mb-6 font-normal">
          {locale === 'kh' ? activity.khmerDescription : activity.description}
        </p>

        {/* Practical Tip */}
        <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 sm:p-5 flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <div className="text-xs font-bold text-amber-900 uppercase tracking-wide mb-1">
              {t('activities.tips')}
            </div>
            <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
              {locale === 'kh' ? activity.khmerPracticalTip : activity.practicalTip}
            </p>
          </div>
        </div>

        {/* Recommended Journey Days */}
        <div className="mt-6 pt-6 border-t border-warmth-100">
          <div className="flex items-center gap-2 text-xs font-bold text-warmth-800 uppercase tracking-wide mb-3">
            <Calendar className="w-4 h-4 text-lotus-600" />
            <span>{t('journey.day')} (Recommended Days):</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {activity.dayNumbers.map((d) => (
              <Link
                key={d}
                to={`/journey/${d}`}
                className="px-3 py-1 rounded-xl bg-warmth-100 hover:bg-lotus-50 text-xs font-semibold text-warmth-800 hover:text-lotus-800 border border-warmth-200/80 transition"
              >
                {t('journey.day')} {d}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
