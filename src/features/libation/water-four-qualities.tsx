import React from'react';
import { Droplet, Sparkles, Heart, Sprout, Info, CheckCircle2 } from'lucide-react';
import { WATER_QUALITIES_DATA } from'../../data/water-libation-qualities';
import { useI18n } from'../../i18n/i18n-context';

const ICON_MAP = {
  Sparkles,
  Droplet,
  Heart,
  Sprout,
};

export const WaterFourQualities: React.FC = () => {
  const { locale } = useI18n();

  return (
    <div className="space-y-4">
      {/* Container */}
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-7 border border-warmth-200/90 shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center border border-amber-200">
            <Info className="w-4.5 h-4.5" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-warmth-950 font-khmer">
              {locale ==='kh'
                ?'អត្ថន័យនៃការច្រូចទឹក (ទឹក ៤ យ៉ាង)'
                :'Meaning of Water Libation (The 4 Sacred Waters)'}
            </h2>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-warmth-600 leading-relaxed font-khmer max-w-2xl mb-5">
          {locale ==='kh'
            ?'ក្នុងគម្ពីរ និងទំនៀមពុទ្ធសាសនាខ្មែរ ទឹកដែលយកមកច្រូចមានអត្ថន័យធម៌ ៤ យ៉ាងដ៏ជ្រាលជ្រៅ ៖'
            :'In Buddhist doctrine and Khmer tradition, the poured libation water embodies four sacred dimensions:'}
        </p>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {WATER_QUALITIES_DATA.map((q) => {
            const Icon = ICON_MAP[q.iconName] || Sparkles;
            return (
              <div
                key={q.id}
                className={`relative overflow-hidden rounded-3xl p-5 sm:p-6 border transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between group ${q.bgGrad} ${q.borderColor}`}
              >
                <div>
                  {/* Top Bar: Icon + Number and Pill Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-9 h-9 rounded-2xl flex items-center justify-center border shadow-2xs group-hover:scale-105 transition ${q.iconBg}`}
                      >
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-warmth-400 tracking-wider">
                        {locale ==='kh' ? q.numberKh : q.numberEn}
                      </span>
                    </div>

                    <span
                      className={`text-[11px] font-bold px-3 py-1 rounded-full border shadow-2xs whitespace-nowrap flex-shrink-0 ${q.badgeStyle}`}
                    >
                      {locale ==='kh' ? q.badgeKh : q.badgeEn}
                    </span>
                  </div>

                  {/* Title & Transliteration */}
                  <h3 className="text-base sm:text-lg font-bold text-warmth-950 mb-1 leading-snug flex items-baseline gap-2 flex-wrap">
                    <span className="font-khmer font-extrabold">{q.paliName}</span>
                    <span className="text-xs font-serif italic text-warmth-500 font-normal">
                      ({q.transliteration})
                    </span>
                  </h3>

                  {/* Meaning Content */}
                  <p className="text-xs sm:text-sm text-warmth-800 leading-relaxed font-khmer mt-2">
                    {locale ==='kh' ? q.khmerMeaning : q.englishMeaning}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Traditional Posture Etiquette */}
        <div className="mt-5 p-5 rounded-3xl bg-gradient-to-r from-amber-50/90 via-warmth-50/60 to-amber-50/80 border border-amber-200/90 text-xs text-warmth-800 space-y-2">
          <div className="font-bold text-amber-950 flex items-center gap-2 text-sm">
            <CheckCircle2 className="w-4.5 h-4.5 text-amber-700 flex-shrink-0" />
            <span className="font-khmer">
              {locale ==='kh' ?'កាយវិការច្រូចទឹកតាមប្រពៃណី ៖' :'Traditional Libation Posture:'}
            </span>
          </div>
          <p className="text-warmth-700 leading-relaxed font-khmer pl-6 text-xs sm:text-sm">
            {locale ==='kh'
              ?'ដៃស្តាំកាន់ផ្តិលទឹក ចង្អុលដៃឆ្វេងទ្រ ឬប៉ះនឹងកដៃស្តាំ (តំណាងឱ្យការផ្ចង់ស្មារតីមូលតែមួយ) ចាក់ទឹកបង្ហូរជាខ្សែតូចមួយស្មើល្អដោយស្ងប់ចិត្ត នឹកដល់ដូនតា មិនត្រូវប្រើទឹកក្តៅ ឬទឹកកករឹងឡើយ'
              :'Hold the vessel with your right hand, resting your left index finger gently on the right wrist (symbolizing focused unison). Pour a steady, thin trickle silently, holding ancestors in loving thought. Never use boiling or frozen water.'}
          </p>
        </div>
      </div>
    </div>
  );
};
