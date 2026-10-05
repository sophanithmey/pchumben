import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Utensils, Sparkles, Droplet, BookOpen, ArrowRight } from 'lucide-react';
import { useI18n } from '../../i18n/i18n-context';
import { Delicacy, DELICACIES, CHECKLIST_ITEMS } from './pagoda-preparation.constants';
import { PreparationHearthView } from './preparation-hearth-view';
import { PreparationBasketView } from './preparation-basket-view';
import { TempleEtiquetteCard } from './temple-etiquette-card';

type ViewMode = 'cooking' | 'basket';

export const PagodaPreparationSection: React.FC = () => {
  const { locale } = useI18n();
  const [viewMode, setViewMode] = useState<ViewMode>('cooking');
  const [selectedDelicacyId, setSelectedDelicacyId] = useState<string>('ansom-chrouk');
  const [readyItemIds, setReadyItemIds] = useState<string[]>(['attire', 'tiffin', 'flowers']);

  const toggleItemReady = (id: string) => {
    setReadyItemIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const selectedDelicacy: Delicacy =
    DELICACIES.find((d) => d.id === selectedDelicacyId) ?? DELICACIES[0]!;

  const allItemsReady = readyItemIds.length === CHECKLIST_ITEMS.length;

  return (
    <section className="relative overflow-hidden bg-white/95 backdrop-blur-sm border border-warmth-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xs space-y-6">
      {/* Ambient Num Ansom Chrouk Seamless Repeating Background Pattern */}
      <div
        className="absolute inset-0 bg-ansom-pattern opacity-[0.04] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 space-y-6">
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-warmth-100 pb-5">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100/90 text-amber-900 border border-amber-200/80 shadow-2xs">
              <span>🪷</span>
              <span className="font-khmer">
                {locale === 'kh'
                  ? 'ផ្ទះបាយបុណ្យ និងការត្រៀមចង្ហាន់'
                  : 'The Festival Hearth & Morning Alms'}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-warmth-950 font-khmer tracking-tight leading-snug">
              {locale === 'kh'
                ? 'កិច្ចចម្អិនម្ហូប និងការរៀបចំខ្លួនមុនទៅវត្ត'
                : 'Traditional Cooking & Pagoda Preparation'}
            </h2>

            <p className="text-xs sm:text-sm text-warmth-600 font-khmer max-w-2xl leading-relaxed">
              {locale === 'kh'
                ? 'ក្លិនផ្សែងអុស ស្លឹកចេក និងសម្លៀកបំពាក់សស្អាតបាត — ការត្រៀមរៀបចំដោយទឹកចិត្តជ្រះថ្លា មុនពេលព្រះអាទិត្យរះ'
                : 'The scent of woodsmoke, freshly wrapped banana leaves, and pure white garments prepared with reverence before sunrise.'}
            </p>
          </div>

          {/* Organic 2-Way View Switcher */}
          <div className="flex items-center gap-1 bg-warmth-100/80 p-1.5 rounded-2xl border border-warmth-200/80 self-start md:self-auto flex-shrink-0">
            <button
              type="button"
              onClick={() => setViewMode('cooking')}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                viewMode === 'cooking'
                  ? 'bg-lotus-700 text-white shadow-xs'
                  : 'text-warmth-700 hover:text-warmth-950 hover:bg-white/60'
              }`}
            >
              <Utensils className="w-4 h-4" />
              <span className="font-khmer">
                {locale === 'kh' ? 'ចង្ក្រាន & នំអន្សម' : 'Hearth & Delicacies'}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode('basket')}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                viewMode === 'basket'
                  ? 'bg-lotus-700 text-white shadow-xs'
                  : 'text-warmth-700 hover:text-warmth-950 hover:bg-white/60'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span className="font-khmer">
                {locale === 'kh' ? 'រៀបចំទៅវត្ត' : 'Pagoda Basket'}
              </span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                  viewMode === 'basket' ? 'bg-white/20 text-white' : 'bg-warmth-200 text-warmth-800'
                }`}
              >
                {readyItemIds.length}/{CHECKLIST_ITEMS.length}
              </span>
            </button>
          </div>
        </div>

        {/* View 1: Hearth & Traditional Delicacies (with Ansom Chrouk Watermark) */}
        {viewMode === 'cooking' && (
          <PreparationHearthView
            selectedDelicacyId={selectedDelicacyId}
            setSelectedDelicacyId={setSelectedDelicacyId}
            selectedDelicacy={selectedDelicacy}
            locale={locale}
          />
        )}

        {/* View 2: Morning Pagoda Basket Checklist */}
        {viewMode === 'basket' && (
          <PreparationBasketView
            readyItemIds={readyItemIds}
            toggleItemReady={toggleItemReady}
            allItemsReady={allItemsReady}
            locale={locale}
          />
        )}

        {/* Grandmothers' Whispers: 4 Temple Manners */}
        <TempleEtiquetteCard locale={locale} />

        {/* Footer Navigation Links */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-warmth-600">
          <div className="flex items-center gap-2">
            <span>{locale === 'kh' ? 'ស្វែងយល់បន្ថែម ៖' : 'Explore further:'}</span>
            <Link
              to="/libation"
              className="inline-flex items-center gap-1 font-bold text-amber-800 hover:text-amber-950 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200 transition"
            >
              <Droplet className="w-3.5 h-3.5 text-amber-600" />
              <span className="font-khmer">{locale === 'kh' ? 'ពិធីច្រូចទឹក' : 'Libation'}</span>
            </Link>
            <Link
              to="/stories"
              className="inline-flex items-center gap-1 font-bold text-lotus-700 hover:text-lotus-900 bg-lotus-50 px-2.5 py-1 rounded-lg border border-lotus-200 transition"
            >
              <BookOpen className="w-3.5 h-3.5 text-lotus-600" />
              <span className="font-khmer">{locale === 'kh' ? 'រឿងនំអន្សម' : 'Lore'}</span>
            </Link>
          </div>

          <Link
            to="/activities"
            className="inline-flex items-center gap-1.5 font-bold text-lotus-700 hover:text-lotus-900 group transition"
          >
            <span className="font-khmer">
              {locale === 'kh' ? 'មើលកិច្ចការបុណ្យទាំងអស់' : 'All Festival Merits'}
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
          </Link>
        </div>
      </div>
    </section>
  );
};
