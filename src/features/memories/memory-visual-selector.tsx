import React from 'react';
import { MemoryVisualType } from '../../domain/entities/memory';
import { useI18n } from '../../i18n/i18n-context';

interface MemoryVisualSelectorProps {
  selected: MemoryVisualType;
  onSelect: (type: MemoryVisualType) => void;
}

const VISUAL_OPTIONS: { type: MemoryVisualType; emoji: string }[] = [
  { type: 'lotus', emoji: '🪷' },
  { type: 'candle', emoji: '🕯️' },
  { type: 'flower', emoji: '🌸' },
  { type: 'tree', emoji: '🌳' },
];

export const MemoryVisualSelector: React.FC<MemoryVisualSelectorProps> = ({
  selected,
  onSelect,
}) => {
  const { t } = useI18n();

  return (
    <div>
      <label className="block text-xs sm:text-sm font-bold text-warmth-900 mb-1.5">
        {t('memory.visualTypeLabel')}
      </label>
      <div className="grid grid-cols-4 gap-2">
        {VISUAL_OPTIONS.map((opt) => (
          <button
            key={opt.type}
            type="button"
            onClick={() => onSelect(opt.type)}
            className={`flex flex-col items-center justify-center p-3 rounded-2xl border transition ${
              selected === opt.type
                ? 'bg-lotus-50 border-lotus-400 ring-2 ring-lotus-200 text-lotus-900 font-bold'
                : 'bg-white border-warmth-200 text-warmth-700 hover:bg-warmth-50'
            }`}
          >
            <span className="text-2xl mb-1">{opt.emoji}</span>
            <span className="text-[11px]">{t(`memory.visual.${opt.type}` as const)}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
