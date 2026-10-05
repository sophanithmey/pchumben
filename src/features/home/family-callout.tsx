import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Trees, ArrowRight, Heart } from 'lucide-react';
import { useFamilyChallenge } from '../family/use-family-challenge';
import { useMemoryGarden } from '../memories/use-memory-garden';
import { useI18n } from '../../i18n/i18n-context';

export const FamilyCallout: React.FC = () => {
  const { completedCount, total, isBadgeUnlocked } = useFamilyChallenge();
  const { totalCount } = useMemoryGarden();
  const { t } = useI18n();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
      {/* Family Challenge Box */}
      <div className="bg-white/90 backdrop-blur-sm border border-warmth-200/90 rounded-3xl p-5 sm:p-6 shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-100/80 text-amber-700 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            {isBadgeUnlocked ? (
              <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-1 rounded-full border border-amber-200">
                🏆 Badge Unlocked
              </span>
            ) : (
              <span className="text-xs font-semibold text-warmth-600 bg-warmth-100 px-2.5 py-1 rounded-full">
                {completedCount} / {total} {t('status.completed')}
              </span>
            )}
          </div>

          <h3 className="text-base font-bold text-warmth-900 mb-1">
            {t('family.title')}
          </h3>
          <p className="text-xs sm:text-sm text-warmth-600 mb-4 leading-relaxed">
            {t('family.subtitle')}
          </p>
        </div>

        <Link
          to="/family"
          className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-2xl bg-warmth-100/80 hover:bg-warmth-200 text-warmth-800 font-semibold text-xs sm:text-sm transition"
        >
          <span>{t('nav.family')}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Memory Garden Box */}
      <div className="bg-white/90 backdrop-blur-sm border border-warmth-200/90 rounded-3xl p-5 sm:p-6 shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-2xl bg-lotus-100/80 text-lotus-700 flex items-center justify-center">
              <Trees className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold text-lotus-800 bg-lotus-50 px-2.5 py-1 rounded-full border border-lotus-200">
              {totalCount} {t('nav.memories')}
            </span>
          </div>

          <h3 className="text-base font-bold text-warmth-900 mb-1">
            {t('memory.title')}
          </h3>
          <p className="text-xs sm:text-sm text-warmth-600 mb-4 leading-relaxed">
            {t('memory.subtitle')}
          </p>
        </div>

        <Link
          to="/memories"
          className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-2xl bg-lotus-50 hover:bg-lotus-100 text-lotus-800 font-semibold text-xs sm:text-sm border border-lotus-200/60 transition"
        >
          <div className="flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 fill-lotus-600 text-lotus-600" />
            <span>{t('action.createMemory')}</span>
          </div>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
