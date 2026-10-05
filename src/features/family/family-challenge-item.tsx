import React from 'react';
import { CheckCircle2, Circle, Church, Utensils, Flame, Camera, HeartHandshake, BookOpen } from 'lucide-react';
import { FamilyChallengeItem } from '../../domain/entities/family-challenge';
import { useI18n } from '../../i18n/i18n-context';

interface FamilyChallengeItemProps {
  item: FamilyChallengeItem & { isCompleted: boolean };
  index?: number;
  onToggle: (id: string) => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Church,
  Utensils,
  Flame,
  Camera,
  HeartHandshake,
  BookOpen,
};

const KHMER_DIGITS = ['១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩', '១០'];

export const FamilyChallengeRow: React.FC<FamilyChallengeItemProps> = ({
  item,
  index,
  onToggle,
}) => {
  const { locale } = useI18n();
  const IconComponent = ICON_MAP[item.iconName] || BookOpen;
  const indexLabel = index
    ? locale === 'kh'
      ? KHMER_DIGITS[index - 1] ?? `${index}`
      : `#${index}`
    : null;

  return (
    <div
      onClick={() => onToggle(item.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onToggle(item.id);
        }
      }}
      className={`group flex items-center justify-between p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-200 cursor-pointer select-none active:scale-[0.98] touch-manipulation shadow-2xs ${
        item.isCompleted
          ? 'bg-gradient-to-r from-lotus-50/80 to-amber-50/40 border-lotus-300/80 text-warmth-900'
          : 'bg-white/95 hover:bg-warmth-50/90 border-warmth-200/90 hover:border-warmth-300'
      }`}
    >
      <div className="flex items-center gap-3 sm:gap-3.5 min-w-0 flex-1 pr-2">
        {/* Leading Icon & Index */}
        <div className="relative flex-shrink-0">
          <div
            className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-colors ${
              item.isCompleted
                ? 'bg-lotus-100 text-lotus-800'
                : 'bg-warmth-100 text-warmth-600 group-hover:bg-warmth-200/80 group-hover:text-warmth-800'
            }`}
          >
            <IconComponent className="w-5 h-5" />
          </div>

          {indexLabel && (
            <span
              className={`absolute -top-1.5 -left-1.5 min-w-[18px] h-[18px] px-1 rounded-full text-[10px] font-extrabold flex items-center justify-center border font-khmer shadow-2xs ${
                item.isCompleted
                  ? 'bg-lotus-700 text-white border-white'
                  : 'bg-warmth-200 text-warmth-700 border-white'
              }`}
            >
              {indexLabel}
            </span>
          )}
        </div>

        {/* Challenge Title */}
        <div className="min-w-0 flex-1">
          <h4
            className={`text-xs sm:text-sm md:text-[15px] font-bold transition font-khmer leading-snug break-words ${
              item.isCompleted
                ? 'text-warmth-700 line-through decoration-lotus-500/60'
                : 'text-warmth-950'
            }`}
          >
            {locale === 'kh' ? item.defaultTitleKhmer : item.defaultTitleEnglish}
          </h4>
        </div>
      </div>

      {/* Completion Indicator */}
      <div className="flex-shrink-0 ml-1.5 sm:ml-2">
        {item.isCompleted ? (
          <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-lotus-600 fill-lotus-100 animate-scale-in" />
        ) : (
          <Circle className="w-5 h-5 sm:w-6 sm:h-6 text-warmth-300 group-hover:text-warmth-400 transition-colors" />
        )}
      </div>
    </div>
  );
};
