import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Heart, Sparkles } from 'lucide-react';
import { TRADITIONS_FAQ } from '../../data/traditions';
import { useI18n } from '../../i18n/i18n-context';

export const AboutPage: React.FC = () => {
  const { t, locale } = useI18n();
  const [openIds, setOpenIds] = useState<string[]>(['faq-what-is-pchum-ben', 'faq-why-celebrate']);

  const toggleOpen = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm border border-warmth-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-sm">
        <span className="text-xs font-bold text-lotus-700 bg-lotus-50 px-3 py-1 rounded-full border border-lotus-200">
          {t('nav.about')}
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-warmth-950 mt-2 mb-2">
          {locale === 'kh' ? 'ស្វែងយល់អំពីបុណ្យភ្ជុំបិណ្ឌ' : 'About Pchum Ben Festival'}
        </h1>
        <p className="text-xs sm:text-sm text-warmth-600 leading-relaxed">
          {t('hero.mission')}
        </p>
      </div>

      {/* Core Values Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        <div className="bg-lotus-50/70 border border-lotus-200/80 rounded-2xl p-4 text-center">
          <Heart className="w-6 h-6 text-lotus-600 mx-auto mb-2" />
          <h3 className="text-xs sm:text-sm font-bold text-lotus-900 mb-1">
            {locale === 'kh' ? 'កតញ្ញូតាធម៌' : 'Filial Gratitude'}
          </h3>
          <p className="text-[11px] text-lotus-800">
            {locale === 'kh' ? 'ការរលឹកដឹងគុណចំពោះមាតាបិតា និងបុព្វការីជន' : 'Honoring the sacrifices of parents and ancestors'}
          </p>
        </div>

        <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 text-center">
          <Sparkles className="w-6 h-6 text-amber-600 mx-auto mb-2" />
          <h3 className="text-xs sm:text-sm font-bold text-amber-900 mb-1">
            {locale === 'kh' ? 'ទានមេត្តាធម៌' : 'Boundless Generosity'}
          </h3>
          <p className="text-[11px] text-amber-800">
            {locale === 'kh' ? 'ការចែករំលែកម្ហូបអាហារ និងការឧទ្ទិសកុសល' : 'Sharing food with the community and departed souls'}
          </p>
        </div>

        <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-4 text-center">
          <BookOpen className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
          <h3 className="text-xs sm:text-sm font-bold text-emerald-900 mb-1">
            {locale === 'kh' ? 'ការបន្តវេន' : 'Cultural Preservation'}
          </h3>
          <p className="text-[11px] text-emerald-800">
            {locale === 'kh' ? 'ការផ្ទេរទំនៀមទម្លាប់ល្អដល់កូនចៅជំនាន់ក្រោយ' : 'Passing timeless traditions to the next generation'}
          </p>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-3">
        {TRADITIONS_FAQ.map((faq) => {
          const isOpen = openIds.includes(faq.id);
          const question = locale === 'kh' ? faq.defaultQuestionKhmer : faq.defaultQuestionEnglish;
          const answer = locale === 'kh' ? faq.defaultAnswerKhmer : faq.defaultAnswerEnglish;

          return (
            <div
              key={faq.id}
              className="bg-white rounded-2xl border border-warmth-200/90 overflow-hidden shadow-xs transition"
            >
              <button
                type="button"
                onClick={() => toggleOpen(faq.id)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-warmth-900 hover:text-lotus-800 transition"
              >
                <span>{question}</span>
                {isOpen ? (
                  <ChevronUp className="w-4 h-4 text-warmth-500 flex-shrink-0 ml-2" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-warmth-500 flex-shrink-0 ml-2" />
                )}
              </button>

              {isOpen && (
                <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-warmth-700 leading-relaxed border-t border-warmth-100 pt-3">
                  {answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
