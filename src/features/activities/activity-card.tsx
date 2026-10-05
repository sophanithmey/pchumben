import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, CheckCircle2, Circle, ArrowRight } from 'lucide-react';
import { Activity } from '../../domain/entities/activity';
import { Badge } from '../../components/ui/badge';
import { useI18n } from '../../i18n/i18n-context';

interface ActivityCardProps {
  activity: Activity;
  isCompleted: boolean;
  onToggle: (id: string) => void;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({
  activity,
  isCompleted,
  onToggle,
}) => {
  const { t, locale } = useI18n();

  return (
    <div
      className={`rounded-3xl p-5 border transition-all duration-300 flex flex-col justify-between ${
        isCompleted
          ? 'bg-lotus-50/50 border-lotus-200 shadow-xs'
          : 'bg-white border-warmth-200/80 hover:shadow-xs'
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <Badge variant="lotus" size="sm">
            {t(`category.${activity.category}` as const)}
          </Badge>

          <button
            type="button"
            onClick={() => onToggle(activity.id)}
            aria-label={isCompleted ? t('action.markIncomplete') : t('action.markCompleted')}
            className={`p-1 rounded-full transition ${
              isCompleted
                ? 'text-emerald-600 hover:text-emerald-700 bg-emerald-50'
                : 'text-warmth-400 hover:text-warmth-700'
            }`}
          >
            {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
          </button>
        </div>

        <h3 className="text-base font-bold text-warmth-900 mb-1.5 leading-snug">
          {locale === 'kh' ? activity.khmerTitle : activity.title}
        </h3>

        <p className="text-xs sm:text-sm text-warmth-600 line-clamp-2 mb-4 leading-relaxed">
          {locale === 'kh' ? activity.khmerDescription : activity.description}
        </p>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-warmth-100">
        <div className="flex items-center gap-1.5 text-xs text-warmth-500 font-medium">
          <Clock className="w-3.5 h-3.5" />
          <span>{t('activities.estimatedTime', { minutes: activity.estimatedMinutes })}</span>
        </div>

        <Link
          to={`/activities/${activity.id}`}
          className="inline-flex items-center gap-1 text-xs font-semibold text-lotus-700 hover:text-lotus-900 transition"
        >
          <span>{t('action.learnMore')}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
