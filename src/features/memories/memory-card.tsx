import React from 'react';
import { Trash2, Lock, Globe, Calendar } from 'lucide-react';
import { Memory } from '../../domain/entities/memory';
import { MemoryVisualIcon } from './memory-visual-icon';
import { useI18n } from '../../i18n/i18n-context';

interface MemoryCardProps {
  memory: Memory;
  onDelete: (id: string) => void;
}

export const MemoryCard: React.FC<MemoryCardProps> = ({ memory, onDelete }) => {
  const { t } = useI18n();

  const handleDelete = () => {
    if (window.confirm(t('memory.deleteConfirm'))) {
      onDelete(memory.id);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-5 border border-warmth-200/90 shadow-xs hover:shadow-md transition duration-300 flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-11 h-11 rounded-2xl bg-warmth-50 border border-warmth-200/70 flex items-center justify-center">
              <MemoryVisualIcon type={memory.visualType} size="md" />
            </div>
            <div>
              <h3 className="text-base font-bold text-warmth-900 leading-tight">
                {memory.name}
              </h3>
              <p className="text-xs text-lotus-700 font-semibold mt-0.5">
                {memory.relationship}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleDelete}
            aria-label="Delete memory"
            className="p-1.5 rounded-full text-warmth-400 hover:text-red-600 hover:bg-red-50 transition"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs sm:text-sm text-warmth-700 italic leading-relaxed mb-4 whitespace-pre-wrap font-serif">
          "{memory.memory}"
        </p>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-warmth-100 text-[11px] text-warmth-500 font-medium">
        <div className="flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5" />
          <span>{memory.date}</span>
        </div>

        <div className="flex items-center gap-1 text-xs">
          {memory.isPrivate ? (
            <span className="inline-flex items-center gap-1 text-warmth-600 bg-warmth-100 px-2 py-0.5 rounded-full">
              <Lock className="w-3 h-3" />
              <span>Private</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
              <Globe className="w-3 h-3" />
              <span>Shared</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
