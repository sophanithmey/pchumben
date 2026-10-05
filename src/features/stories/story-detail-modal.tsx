import React from 'react';
import { CulturalStory } from '../../domain/entities/story';
import { Modal } from '../../components/ui/modal';
import { Lightbulb } from 'lucide-react';
import { useI18n } from '../../i18n/i18n-context';

interface StoryDetailModalProps {
  story: CulturalStory | null;
  onClose: () => void;
}

export const StoryDetailModal: React.FC<StoryDetailModalProps> = ({ story, onClose }) => {
  const { locale } = useI18n();

  if (!story) return null;

  const content = locale === 'kh' ? story.khmerContent : story.englishContent;
  const moral = locale === 'kh' ? story.khmerMoralLesson : story.englishMoralLesson;

  return (
    <Modal
      isOpen={!!story}
      onClose={onClose}
      title={locale === 'kh' ? story.khmerTitle : story.englishTitle}
      maxWidth="lg"
    >
      <div className="space-y-4">
        <p className="text-xs sm:text-sm font-semibold text-lotus-700 pb-2 border-b border-warmth-100">
          {locale === 'kh' ? story.khmerSubtitle : story.englishSubtitle}
        </p>

        <div className="space-y-3.5 text-xs sm:text-sm text-warmth-800 leading-relaxed font-normal">
          {content.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Moral Lesson */}
        <div className="bg-lotus-50/80 border border-lotus-200/80 rounded-2xl p-4 sm:p-5 flex items-start gap-3 mt-4">
          <Lightbulb className="w-5 h-5 text-lotus-600 flex-shrink-0 mt-0.5" />
          <div>
            <div className="text-xs font-bold text-lotus-900 uppercase tracking-wide mb-1">
              {locale === 'kh' ? 'សារដាស់តឿនចិត្ត (Moral Lesson)' : 'Moral Lesson'}
            </div>
            <p className="text-xs sm:text-sm text-lotus-950 italic leading-relaxed">
              "{moral}"
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};
