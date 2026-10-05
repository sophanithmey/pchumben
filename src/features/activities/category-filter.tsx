import React from 'react';
import { ActivityCategory } from '../../domain/entities/activity';
import { useI18n } from '../../i18n/i18n-context';

interface CategoryFilterProps {
  selected: ActivityCategory | 'ALL';
  onChange: (category: ActivityCategory | 'ALL') => void;
}

const CATEGORIES: (ActivityCategory | 'ALL')[] = [
  'ALL',
  'LEARN',
  'FAMILY',
  'MERIT',
  'MEMORY',
  'TRADITION',
  'COMMUNITY',
];

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ selected, onChange }) => {
  const { t } = useI18n();

  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
      {CATEGORIES.map((cat) => {
        const isSelected = selected === cat;
        const label = cat === 'ALL' ? t('action.filterAll') : t(`category.${cat}` as const);
        return (
          <button
            key={cat}
            type="button"
            onClick={() => onChange(cat)}
            className={`px-3.5 py-1.5 rounded-2xl text-xs font-semibold whitespace-nowrap transition ${
              isSelected
                ? 'bg-lotus-600 text-white shadow-xs'
                : 'bg-white text-warmth-700 border border-warmth-200/90 hover:bg-warmth-100'
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};
