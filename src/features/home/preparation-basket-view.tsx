import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';
import { CHECKLIST_ITEMS } from './pagoda-preparation.constants';

interface PreparationBasketViewProps {
  readyItemIds: string[];
  toggleItemReady: (id: string) => void;
  allItemsReady: boolean;
  locale: string;
}

export const PreparationBasketView: React.FC<PreparationBasketViewProps> = ({
  readyItemIds,
  toggleItemReady,
  allItemsReady,
  locale,
}) => {
  return (
    <div className="space-y-4">
      {/* Status Banner */}
      <div className="bg-warmth-50/80 border border-warmth-200/80 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="text-sm sm:text-base font-bold text-warmth-950 font-khmer">
            {allItemsReady
              ? locale === 'kh'
                ? '🙏 រួចរាល់គ្រប់យ៉ាងសម្រាប់ដំណើរទៅវត្ត!'
                : '🙏 Everything is lovingly prepared for the Pagoda!'
              : locale === 'kh'
                ? 'របស់របរចាំបាច់ ៦ យ៉ាងត្រូវរៀបចំក្នុងកន្ត្រក ៖'
                : '6 Essential items to prepare in your morning basket:'}
          </h3>
          <p className="text-xs text-warmth-600 font-khmer mt-0.5">
            {locale === 'kh'
              ? 'ចុចលើរបស់របរនីមួយៗពេលបានរៀបចំរួចរាល់'
              : 'Tap each item as you pack it into your tiffin or offering tray.'}
          </p>
        </div>

        <div className="text-xs font-bold text-lotus-800 bg-lotus-100/90 px-3 py-1 rounded-full border border-lotus-200 font-khmer self-start sm:self-auto">
          {readyItemIds.length} / {CHECKLIST_ITEMS.length} {locale === 'kh' ? 'បានរៀបចំ' : 'Packed'}
        </div>
      </div>

      {/* Interactive Offering Basket Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3.5">
        {CHECKLIST_ITEMS.map((item) => {
          const isReady = readyItemIds.includes(item.id);
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              onClick={() => toggleItemReady(item.id)}
              className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between select-none ${
                isReady
                  ? 'bg-lotus-50/80 border-lotus-300 shadow-2xs'
                  : 'bg-white hover:bg-warmth-50/80 border-warmth-200/80'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                      isReady ? 'bg-lotus-200/80 text-lotus-900' : 'bg-warmth-100 text-warmth-700'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>

                  <button
                    type="button"
                    aria-label={isReady ? 'Mark as not ready' : 'Mark as ready'}
                    className="text-lotus-700 focus:outline-hidden"
                  >
                    {isReady ? (
                      <CheckCircle2 className="w-5 h-5 fill-lotus-600 text-white" />
                    ) : (
                      <Circle className="w-5 h-5 text-warmth-400" />
                    )}
                  </button>
                </div>

                <h4
                  className={`text-sm font-bold font-khmer leading-snug mb-1 ${
                    isReady ? 'text-lotus-950' : 'text-warmth-900'
                  }`}
                >
                  {locale === 'kh' ? item.titleKh : item.titleEn}
                </h4>

                <p className="text-xs text-warmth-600 font-khmer leading-relaxed">
                  {locale === 'kh' ? item.detailKh : item.detailEn}
                </p>
              </div>

              <div className="pt-2.5 mt-2.5 border-t border-warmth-200/50 flex items-center justify-between text-[11px]">
                <span className="text-warmth-500 font-khmer">
                  {locale === 'kh' ? item.badgeKh : item.badgeEn}
                </span>
                <span className={`font-semibold font-khmer ${isReady ? 'text-lotus-700' : 'text-warmth-400'}`}>
                  {isReady ? (locale === 'kh' ? 'រួចរាល់' : 'Ready') : locale === 'kh' ? 'មិនទាន់រៀបចំ' : 'Pending'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Celebratory Blessing */}
      {allItemsReady && (
        <div className="bg-emerald-50/90 border border-emerald-200 rounded-2xl p-3.5 text-center text-xs text-emerald-900 font-khmer">
          {locale === 'kh'
            ? '🎉 សូមអនុមោទនាបុណ្យ! របស់របរ និងទឹកចិត្តជ្រះថ្លាបានត្រៀមរួចរាល់ ១០០% សម្រាប់ដំណើរទៅកាន់វត្តអារាម'
            : '🎉 Auspicious blessings! All offerings and pure intentions are ready for your pagoda pilgrimage.'}
        </div>
      )}
    </div>
  );
};
