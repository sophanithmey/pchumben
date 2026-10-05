import React from 'react';
import { Clock, BookOpen, Crown, Flame, Utensils, Users, Sparkles } from 'lucide-react';
import { CulturalStory } from '../../domain/entities/story';
import { Badge } from '../../components/ui/badge';
import { useI18n } from '../../i18n/i18n-context';
import { toKhmerDigits } from '../../domain/services/calendar-service';

interface StoryCardProps {
  story: CulturalStory;
  onRead: (story: CulturalStory) => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Crown,
  Flame,
  Utensils,
  Users,
  Sparkles,
};

export const StoryCard: React.FC<StoryCardProps> = ({ story, onRead }) => {
  const { locale } = useI18n();
  const IconComponent = ICON_MAP[story.iconName] || BookOpen;

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-6 border border-warmth-200/90 shadow-xs hover:shadow-md transition duration-300 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="w-10 h-10 rounded-2xl bg-lotus-50 border border-lotus-200 text-lotus-700 flex items-center justify-center">
            <IconComponent className="w-5 h-5" />
          </div>
          <Badge variant="lotus" size="sm">
            {story.category === 'ORIGIN'
              ? (locale === 'kh' ? 'ប្រវត្តិដើម' : 'Origins')
              : story.category === 'RITUAL'
              ? (locale === 'kh' ? 'ពិធីសាសនា' : 'Rituals')
              : story.category === 'FOOD'
              ? (locale === 'kh' ? 'នំប្រពៃណី' : 'Delicacies')
              : (locale === 'kh' ? 'បុព្វការីជន' : 'Ancestors')}
          </Badge>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-warmth-950 mb-1 leading-snug">
          {locale === 'kh' ? story.khmerTitle : story.englishTitle}
        </h3>

        <p className="text-xs text-warmth-600 mb-4 leading-relaxed line-clamp-2">
          {locale === 'kh' ? story.khmerSubtitle : story.englishSubtitle}
        </p>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-warmth-100">
        <div className="flex items-center gap-1.5 text-xs text-warmth-500 font-medium font-khmer">
          <Clock className="w-3.5 h-3.5" />
          <span>
            {locale === 'kh'
              ? `${toKhmerDigits(story.readTimeMinutes)} នាទី`
              : `${story.readTimeMinutes} mins`}
          </span>
        </div>

        <button
          type="button"
          onClick={() => onRead(story)}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-lotus-600 hover:bg-lotus-700 text-white text-xs font-semibold shadow-xs transition"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>{locale === 'kh' ? 'អានរឿង' : 'Read Story'}</span>
        </button>
      </div>
    </div>
  );
};
