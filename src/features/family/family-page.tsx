import React, { useState } from 'react';
import { Award } from 'lucide-react';
import { useFamilyChallenge } from './use-family-challenge';
import { FamilyChallengeRow } from './family-challenge-item';
import { CompletionBadgeCard } from './completion-badge-card';
import { ProgressBar } from '../../components/ui/progress-bar';
import { Modal } from '../../components/ui/modal';
import { useI18n } from '../../i18n/i18n-context';

export const FamilyPage: React.FC = () => {
  const { challenges, completedCount, total, isBadgeUnlocked, toggleChallenge } =
    useFamilyChallenge();
  const { t, locale } = useI18n();
  const [showShareModal, setShowShareModal] = useState(false);

  const percentage = Math.round((completedCount / total) * 100);

  return (
    <div className="max-w-7xl mx-auto space-y-3.5 sm:space-y-6 pb-6 sm:pb-4">
      {/* Header Card */}
      <div className="bg-white/95 backdrop-blur-sm border border-warmth-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-2 sm:mb-3">
          <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-amber-800 bg-amber-100/90 px-2.5 sm:px-3 py-1 rounded-full border border-amber-200 shadow-2xs">
            <span>🪷</span>
            <span>{t('nav.family')}</span>
          </span>
          <span className="text-[11px] sm:text-xs font-bold text-warmth-700 font-khmer bg-warmth-100/80 px-2.5 sm:px-3 py-1 rounded-full border border-warmth-200/70">
            {completedCount} / {total} {locale === 'kh' ? 'បានបញ្ចប់' : 'Completed'}
          </span>
        </div>

        <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-warmth-950 font-khmer mt-1 mb-1.5 leading-snug">
          {t('family.title')}
        </h1>
        <p className="text-xs sm:text-sm text-warmth-600 font-khmer mb-4 leading-relaxed">
          {t('family.subtitle')}
        </p>

        {/* Progress Section */}
        <div className="bg-warmth-50/70 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-warmth-100">
          <ProgressBar
            value={percentage}
            label={t('family.progress', { completed: completedCount, total })}
            subLabel={`${percentage}%`}
            colorClassName="bg-gradient-to-r from-lotus-500 via-rose-500 to-amber-500"
          />

          <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs text-warmth-500 font-khmer mt-2.5 pt-2 border-t border-warmth-200/50">
            <span>
              {completedCount === total
                ? (locale === 'kh' ? '🎉 អបអរសាទរ! បានបំពេញគ្រប់សកម្មភាព' : '🎉 Congratulations! All traditions completed!')
                : (locale === 'kh' ? '💡 ចុចលើសកម្មភាពនីមួយៗពេលបានធ្វើរួច' : '💡 Tap each activity when completed together')}
            </span>

            <button
              type="button"
              onClick={() => setShowShareModal(true)}
              className="text-lotus-700 hover:text-lotus-800 font-bold inline-flex items-center gap-1 cursor-pointer transition active:scale-95"
            >
              <span>{locale === 'kh' ? 'មើលប័ណ្ណកុសល' : 'View Certificate'}</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Unlocked Banner when all tasks completed */}
      {isBadgeUnlocked && (
        <div className="bg-gradient-to-br from-lotus-50 via-warmth-50 to-amber-50/80 border border-lotus-200/90 rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 shadow-xs animate-fade-in">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-amber-100 to-lotus-100 border border-amber-300 flex items-center justify-center text-2xl shadow-2xs flex-shrink-0 animate-lotus-float">
                🪷
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs sm:text-sm font-bold text-warmth-950 font-khmer">
                  {t('family.badgeUnlocked')}
                </div>
                <div className="text-[11px] sm:text-xs text-lotus-800 font-khmer truncate">
                  {t('sloganLine1')} • {t('sloganLine2')} • {t('sloganLine3')}
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setShowShareModal(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-lotus-700 to-lotus-800 hover:from-lotus-800 hover:to-lotus-900 text-white font-semibold text-xs sm:text-sm shadow-xs transition active:scale-95 flex-shrink-0 cursor-pointer"
            >
              <Award className="w-4 h-4 text-amber-300" />
              <span className="font-khmer">{t('action.share')}</span>
            </button>
          </div>
        </div>
      )}

      {/* Checklist Grid: 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3.5">
        {challenges.map((ch, idx) => (
          <FamilyChallengeRow
            key={ch.id}
            item={ch}
            index={idx + 1}
            onToggle={toggleChallenge}
          />
        ))}
      </div>

      {/* Share / Certificate Modal */}
      <Modal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        title={t('family.badgeTitle')}
        maxWidth="lg"
      >
        <CompletionBadgeCard completedCount={completedCount} total={total} />
      </Modal>
    </div>
  );
};
