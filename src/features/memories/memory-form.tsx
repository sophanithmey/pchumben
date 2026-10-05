import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Lock, Sparkles } from 'lucide-react';
import { memorySchema, MemoryFormData } from './memory.schema';
import { MemoryVisualSelector } from './memory-visual-selector';
import { useI18n } from '../../i18n/i18n-context';

interface MemoryFormProps {
  onSubmit: (data: MemoryFormData) => Promise<void>;
  isSubmitting?: boolean;
}

export const MemoryForm: React.FC<MemoryFormProps> = ({ onSubmit, isSubmitting }) => {
  const { t, locale } = useI18n();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<MemoryFormData>({
    resolver: zodResolver(memorySchema),
    defaultValues: {
      name: '',
      relationship: '',
      memory: '',
      date: new Date().toISOString().split('T')[0],
      isPrivate: true,
      visualType: 'lotus',
    },
  });

  const selectedVisual = watch('visualType');
  const isPrivate = watch('isPrivate');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Name Input */}
      <div>
        <label className="block text-xs sm:text-sm font-bold text-warmth-900 mb-1.5">
          {t('memory.nameLabel')} *
        </label>
        <input
          {...register('name')}
          placeholder={t('memory.namePlaceholder')}
          className="w-full px-4 py-2.5 rounded-2xl border border-warmth-300 focus:border-lotus-500 focus:ring-2 focus:ring-lotus-200 outline-hidden transition text-sm bg-white"
        />
        {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name.message}</p>}
      </div>

      {/* Relationship Input */}
      <div>
        <label className="block text-xs sm:text-sm font-bold text-warmth-900 mb-1.5">
          {t('memory.relationshipLabel')} *
        </label>
        <input
          {...register('relationship')}
          placeholder={t('memory.relationshipPlaceholder')}
          className="w-full px-4 py-2.5 rounded-2xl border border-warmth-300 focus:border-lotus-500 focus:ring-2 focus:ring-lotus-200 outline-hidden transition text-sm bg-white"
        />
        {errors.relationship && (
          <p className="text-xs text-red-600 mt-1">{errors.relationship.message}</p>
        )}
      </div>

      {/* Visual Type Selector */}
      <MemoryVisualSelector
        selected={selectedVisual}
        onSelect={(type) => setValue('visualType', type)}
      />

      {/* Memory Content */}
      <div>
        <label className="block text-xs sm:text-sm font-bold text-warmth-900 mb-1.5">
          {t('memory.contentLabel')} *
        </label>
        <textarea
          rows={4}
          {...register('memory')}
          placeholder={t('memory.contentPlaceholder')}
          className="w-full px-4 py-2.5 rounded-2xl border border-warmth-300 focus:border-lotus-500 focus:ring-2 focus:ring-lotus-200 outline-hidden transition text-sm bg-white leading-relaxed"
        />
        {errors.memory && <p className="text-xs text-red-600 mt-1">{errors.memory.message}</p>}
      </div>

      {/* Date & Privacy */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-warmth-800 mb-1 font-khmer">
            {locale === 'kh' ? 'កាលបរិច្ឆេទ' : 'Date'}
          </label>
          <input
            type="date"
            {...register('date')}
            className="w-full px-3 py-2 rounded-xl border border-warmth-300 text-sm bg-white"
          />
        </div>

        <div className="flex items-center pt-5">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              {...register('isPrivate')}
              checked={isPrivate}
              className="w-4 h-4 text-lotus-600 rounded-md border-warmth-300 focus:ring-lotus-500"
            />
            <span className="text-xs font-semibold text-warmth-800 flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-warmth-600" />
              <span>{t('memory.isPrivate')}</span>
            </span>
          </label>
        </div>
      </div>

      <div className="p-3 rounded-xl bg-warmth-100/80 border border-warmth-200/80 text-[11px] text-warmth-600">
        🛡️ {t('memory.privacyNotice')}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-2xl bg-lotus-600 hover:bg-lotus-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition disabled:opacity-50"
      >
        <Sparkles className="w-4 h-4" />
        <span>{isSubmitting ? t('status.loading') : t('action.save')}</span>
      </button>
    </form>
  );
};
