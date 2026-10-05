import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { MemoryForm } from './memory-form';
import { MemoryFormData } from './memory.schema';
import { useMemoryGarden } from './use-memory-garden';
import { useI18n } from '../../i18n/i18n-context';

export const CreateMemoryPage: React.FC = () => {
  const navigate = useNavigate();
  const { createMemory } = useMemoryGarden();
  const { t } = useI18n();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data: MemoryFormData) => {
    setIsSubmitting(true);
    try {
      await createMemory({
        name: data.name,
        relationship: data.relationship,
        memory: data.memory,
        date: data.date,
        isPrivate: data.isPrivate,
        visualType: data.visualType,
        photo: data.photo,
      });
      navigate('/memories');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
      <Link
        to="/memories"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-warmth-700 hover:text-warmth-950 bg-white px-3 py-1.5 rounded-xl border border-warmth-200 transition shadow-xs active:scale-95"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>{t('action.back')}</span>
      </Link>

      <div className="bg-white/95 backdrop-blur-sm border border-warmth-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-sm max-w-3xl mx-auto w-full">
        <h1 className="text-xl sm:text-2xl font-extrabold text-warmth-950 mb-1">
          {t('memory.createTitle')}
        </h1>
        <p className="text-xs sm:text-sm text-warmth-600 mb-6 leading-relaxed">
          {t('memory.subtitle')}
        </p>

        <MemoryForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
      </div>
    </div>
  );
};
