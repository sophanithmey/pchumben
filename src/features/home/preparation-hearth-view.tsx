import React from 'react';
import { Flame, Sparkles, Clock, Heart } from 'lucide-react';
import { Delicacy, DELICACIES } from './pagoda-preparation.constants';
import { AnsomChroukSvg } from '../../components/ui/ansom-chrouk-svg';

interface PreparationHearthViewProps {
  selectedDelicacyId: string;
  setSelectedDelicacyId: (id: string) => void;
  selectedDelicacy: Delicacy;
  locale: string;
}

export const PreparationHearthView: React.FC<PreparationHearthViewProps> = ({
  selectedDelicacyId,
  setSelectedDelicacyId,
  selectedDelicacy,
  locale,
}) => {
  return (
    <div className="space-y-6">
      {/* Split Showcase: Authentic Image + Cultural Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-start">
        {/* Visual Photography Card */}
        <div className="lg:col-span-5 space-y-3">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-warmth-200/90 shadow-sm group">
            <img
              src="/images/pchum-ben-cooking-preparation.jpg"
              alt="Cambodian family wrapping Num Ansom together around the hearth"
              className="w-full h-56 sm:h-72 lg:h-80 object-cover object-center group-hover:scale-103 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/95 text-amber-950 shadow-xs">
              <Flame className="w-3.5 h-3.5 fill-amber-950" />
              <span className="font-khmer">
                {locale === 'kh' ? 'ស្ងោរឆ្លងរាត្រី' : 'Overnight Woodfire'}
              </span>
            </div>
          </div>

          {/* Heartfelt Caption */}
          <p className="text-xs text-warmth-600 font-khmer italic leading-relaxed px-1 text-center sm:text-left">
            {locale === 'kh'
              ? '« ការវេចនំអន្សម ជាពេលដែលសមាជិកគ្រួសារគ្រប់ជំនាន់អង្គុយជុំគ្នា ហាលស្លឹកចេក ឆាអង្ករ និងនិយាយរឿងបុរាណ »'
              : '“Wrapping Num Ansom brings every generation around the fire, sharing ancient stories as woodsmoke fills the night.”'}
          </p>
        </div>

        {/* Delicacies Culinary Card */}
        <div className="lg:col-span-7 space-y-3.5">
          {/* Selector Pills */}
          <div>
            <div className="text-[11px] font-bold text-warmth-500 uppercase tracking-wider mb-2 font-khmer">
              {locale === 'kh' ? 'ជ្រើសរើសមុខម្ហូបប្រពៃណី ៖' : 'Traditional Pchum Ben Delicacies:'}
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1.5 scrollbar-thin">
              {DELICACIES.map((item) => {
                const isSelected = item.id === selectedDelicacyId;
                const displayName = locale === 'kh' ? item.shortNameKh : item.shortNameEn;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedDelicacyId(item.id)}
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-lotus-700 text-white shadow-xs ring-1 ring-lotus-400'
                        : 'bg-warmth-100/90 text-warmth-800 hover:bg-warmth-200 border border-warmth-200/80'
                    }`}
                  >
                    <span className="text-sm select-none">{item.icon}</span>
                    <span className="font-khmer">{displayName}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Curated Story Card for Selected Delicacy with Ansom Chrouk Watermark */}
          <div className="relative overflow-hidden bg-warmth-50/80 border border-warmth-200/90 rounded-2xl p-4 sm:p-5 space-y-3.5">
            {/* Ambient Num Ansom Chrouk SVG Watermark */}
            <AnsomChroukSvg
              watermark
              className="absolute -right-8 -bottom-8 w-48 h-48 opacity-[0.09] rotate-12 pointer-events-none"
            />

            <div className="relative z-10 space-y-3.5">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-warmth-200/70 pb-3">
                <div>
                  <h3 className="text-base sm:text-lg font-black text-warmth-950 font-khmer leading-snug">
                    {locale === 'kh' ? selectedDelicacy.nameKh : selectedDelicacy.nameEn}
                  </h3>
                  <div className="text-xs text-lotus-700 font-semibold font-khmer mt-0.5">
                    {locale === 'kh' ? selectedDelicacy.categoryKh : selectedDelicacy.categoryEn}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-amber-800 bg-amber-100/90 px-3 py-1 rounded-xl border border-amber-200 font-medium">
                  <Clock className="w-3.5 h-3.5 text-amber-700" />
                  <span className="font-khmer">
                    {locale === 'kh' ? selectedDelicacy.cookTimeKh : selectedDelicacy.cookTimeEn}
                  </span>
                </div>
              </div>

              {/* Cultural Symbolism */}
              <div className="bg-white/80 border border-warmth-200/80 rounded-xl p-3 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-warmth-900 font-khmer leading-relaxed">
                  <span className="font-bold text-amber-900">
                    {locale === 'kh' ? 'អត្ថន័យទស្សនវិជ្ជា ៖' : 'Symbolic Heritage:'}
                  </span>
                  <span>
                    {locale === 'kh' ? selectedDelicacy.symbolismKh : selectedDelicacy.symbolismEn}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-warmth-700 font-khmer leading-relaxed">
                {locale === 'kh' ? selectedDelicacy.descriptionKh : selectedDelicacy.descriptionEn}
              </p>

              {/* Ingredients Tags */}
              <div>
                <div className="text-[11px] font-bold text-warmth-800 mb-1.5 font-khmer">
                  {locale === 'kh' ? 'គ្រឿងផ្សំចម្បង ៖' : 'Main Ingredients:'}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {(locale === 'kh'
                    ? selectedDelicacy.ingredientsKh
                    : selectedDelicacy.ingredientsEn
                  ).map((ing, i) => (
                    <span
                      key={i}
                      className="text-xs text-warmth-800 bg-white px-2.5 py-0.5 rounded-lg border border-warmth-200/80 shadow-2xs font-khmer"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* Elder's Wisdom Note */}
              <div className="pt-2 border-t border-warmth-200/50 text-xs text-lotus-900 font-khmer italic flex items-start gap-2">
                <Heart className="w-3.5 h-3.5 text-lotus-600 flex-shrink-0 mt-0.5" />
                <span>
                  {locale === 'kh' ? selectedDelicacy.proTipKh : selectedDelicacy.proTipEn}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
