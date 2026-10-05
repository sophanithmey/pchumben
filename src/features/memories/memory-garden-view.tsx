import React, { useState } from 'react';
import { Memory } from '../../domain/entities/memory';
import { MemoryVisualIcon } from './memory-visual-icon';
import { Modal } from '../../components/ui/modal';
import { useI18n } from '../../i18n/i18n-context';

interface MemoryGardenViewProps {
  memories: Memory[];
  onDelete: (id: string) => void;
}

export const MemoryGardenView: React.FC<MemoryGardenViewProps> = ({ memories, onDelete }) => {
  const { t } = useI18n();
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

  return (
    <div>
      {/* Peaceful Garden Canvas */}
      <div className="relative min-h-[380px] sm:min-h-[460px] rounded-3xl bg-gradient-to-b from-amber-50/60 via-warmth-100/70 to-lotus-100/60 border border-warmth-200/90 p-6 sm:p-10 overflow-hidden shadow-inner flex flex-wrap items-center justify-around gap-6">
        {/* Soft background glow circles */}
        <div className="absolute top-10 left-10 w-48 h-48 bg-lotus-200/30 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />

        {memories.map((m, idx) => (
          <button
            key={m.id}
            type="button"
            onClick={() => setSelectedMemory(m)}
            className="group relative flex flex-col items-center p-3 rounded-2xl bg-white/70 hover:bg-white/95 border border-warmth-200/80 shadow-xs hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1.5 focus:outline-hidden focus:ring-2 focus:ring-lotus-400"
            style={{ animationDelay: `${(idx % 5) * 150}ms` }}
          >
            <div className="relative">
              <MemoryVisualIcon type={m.visualType} size="lg" />
              {/* Subtle pulsing lotus halo */}
              <span className="absolute -inset-1 rounded-full bg-lotus-400/20 animate-ping pointer-events-none" />
            </div>

            <span className="mt-2 text-xs font-bold text-warmth-900 group-hover:text-lotus-800 max-w-[100px] truncate">
              {m.name}
            </span>
            <span className="text-[10px] text-warmth-600 font-medium">
              {m.relationship}
            </span>
          </button>
        ))}
      </div>

      {/* Selected Memory Modal */}
      <Modal
        isOpen={!!selectedMemory}
        onClose={() => setSelectedMemory(null)}
        title={
          selectedMemory && (
            <div className="flex items-center gap-2">
              <MemoryVisualIcon type={selectedMemory.visualType} size="md" />
              <span>{selectedMemory.name}</span>
            </div>
          )
        }
      >
        {selectedMemory && (
          <div className="space-y-4">
            <div className="text-xs font-semibold text-lotus-700 bg-lotus-50 px-3 py-1 rounded-full inline-block">
              {selectedMemory.relationship}
            </div>

            <p className="text-sm sm:text-base text-warmth-800 italic leading-relaxed whitespace-pre-wrap font-serif bg-warmth-50 p-4 rounded-2xl border border-warmth-200/60">
              "{selectedMemory.memory}"
            </p>

            <div className="flex items-center justify-between text-xs text-warmth-500 pt-2 border-t border-warmth-100">
              <span>{selectedMemory.date}</span>
              <button
                type="button"
                onClick={() => {
                  if (window.confirm(t('memory.deleteConfirm'))) {
                    onDelete(selectedMemory.id);
                    setSelectedMemory(null);
                  }
                }}
                className="text-red-600 hover:text-red-700 font-semibold transition"
              >
                {t('action.delete')}
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
