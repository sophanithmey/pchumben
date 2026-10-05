import React, { useState } from'react';
import { Link } from'react-router-dom';
import {
  Utensils,
  CheckCircle2,
  Circle,
  Sparkles,
  Flame,
  Droplet,
  BookOpen,
  ArrowRight,
  Clock,
  Heart,
  Landmark,
} from'lucide-react';
import { useI18n } from'../../i18n/i18n-context';
import {
  Delicacy,
  DELICACIES,
  CHECKLIST_ITEMS,
} from'./pagoda-preparation.constants';

type ViewMode ='cooking' |'basket';

export const PagodaPreparationSection: React.FC = () => {
  const { locale } = useI18n();
  const [viewMode, setViewMode] = useState<ViewMode>('cooking');
  const [selectedDelicacyId, setSelectedDelicacyId] = useState<string>('ansom-chrouk');
  const [readyItemIds, setReadyItemIds] = useState<string[]>([
'attire',
'tiffin',
'flowers',
  ]);

  const toggleItemReady = (id: string) => {
    setReadyItemIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const selectedDelicacy: Delicacy =
    DELICACIES.find((d) => d.id === selectedDelicacyId) ?? DELICACIES[0]!;

  const allItemsReady = readyItemIds.length === CHECKLIST_ITEMS.length;

  return (
    <section className="bg-white/95 backdrop-blur-sm border border-warmth-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xs space-y-6">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-warmth-100 pb-5">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100/90 text-amber-900 border border-amber-200/80 shadow-2xs">
            <span>🪷</span>
            <span className="font-khmer">
              {locale ==='kh'
                ?'ផ្ទះបាយបុណ្យ និងការត្រៀមចង្ហាន់'
                :'The Festival Hearth & Morning Alms'}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-warmth-950 font-khmer tracking-tight leading-snug">
            {locale ==='kh'
              ?'កិច្ចចម្អិនម្ហូប និងការរៀបចំខ្លួនមុនទៅវត្ត'
              :'Traditional Cooking & Pagoda Preparation'}
          </h2>

          <p className="text-xs sm:text-sm text-warmth-600 font-khmer max-w-2xl leading-relaxed">
            {locale ==='kh'
              ?'ក្លិនផ្សែងអុស ស្លឹកចេក និងសម្លៀកបំពាក់សស្អាតបាត — ការត្រៀមរៀបចំដោយទឹកចិត្តជ្រះថ្លា មុនពេលព្រះអាទិត្យរះ'
              :'The scent of woodsmoke, freshly wrapped banana leaves, and pure white garments prepared with reverence before sunrise.'}
          </p>
        </div>

        {/* Organic 2-Way View Switcher */}
        <div className="flex items-center gap-1 bg-warmth-100/80 p-1.5 rounded-2xl border border-warmth-200/80 self-start md:self-auto flex-shrink-0">
          <button
            type="button"
            onClick={() => setViewMode('cooking')}
            className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              viewMode ==='cooking'
                ?'bg-lotus-700 text-white shadow-xs'
                :'text-warmth-700 hover:text-warmth-950 hover:bg-white/60'
            }`}
          >
            <Utensils className="w-4 h-4" />
            <span className="font-khmer">
              {locale ==='kh' ?'ចង្ក្រាន & នំអន្សម' :'Hearth & Delicacies'}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setViewMode('basket')}
            className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              viewMode ==='basket'
                ?'bg-lotus-700 text-white shadow-xs'
                :'text-warmth-700 hover:text-warmth-950 hover:bg-white/60'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span className="font-khmer">
              {locale ==='kh' ?'រៀបចំទៅវត្ត' :'Pagoda Basket'}
            </span>
            <span
              className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                viewMode ==='basket' ?'bg-white/20 text-white' :'bg-warmth-200 text-warmth-800'
              }`}
            >
              {readyItemIds.length}/{CHECKLIST_ITEMS.length}
            </span>
          </button>
        </div>
      </div>

      {/* VIEW 1: THE WOODFIRE HEARTH & TRADITIONAL DELICACIES */}
      {viewMode ==='cooking' && (
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
                    {locale ==='kh' ?'ស្ងោរឆ្លងរាត្រី' :'Overnight Woodfire'}
                  </span>
                </div>
              </div>

              {/* Heartfelt Caption */}
              <p className="text-xs text-warmth-600 font-khmer italic leading-relaxed px-1 text-center sm:text-left">
                {locale ==='kh'
                  ?'« ការវេចនំអន្សម ជាពេលដែលសមាជិកគ្រួសារគ្រប់ជំនាន់អង្គុយជុំគ្នា ហាលស្លឹកចេក ឆាអង្ករ និងនិយាយរឿងបុរាណ »'
                  :'“Wrapping Num Ansom brings every generation around the fire, sharing ancient stories as woodsmoke fills the night.”'}
              </p>
            </div>

            {/* Delicacies Culinary Card */}
            <div className="lg:col-span-7 space-y-3.5">
              {/* Selector Pills */}
              <div>
                <div className="text-[11px] font-bold text-warmth-500 uppercase tracking-wider mb-2 font-khmer">
                  {locale ==='kh' ?'ជ្រើសរើសមុខម្ហូបប្រពៃណី ៖' :'Traditional Pchum Ben Delicacies:'}
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

              {/* Curated Story Card for Selected Delicacy */}
              <div className="bg-warmth-50/70 border border-warmth-200/90 rounded-2xl p-4 sm:p-5 space-y-3.5">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-warmth-200/70 pb-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-warmth-950 font-khmer leading-snug">
                      {locale ==='kh' ? selectedDelicacy.nameKh : selectedDelicacy.nameEn}
                    </h3>
                    <div className="text-xs text-lotus-700 font-semibold font-khmer mt-0.5">
                      {locale ==='kh' ? selectedDelicacy.categoryKh : selectedDelicacy.categoryEn}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-amber-800 bg-amber-100/90 px-3 py-1 rounded-xl border border-amber-200 font-medium">
                    <Clock className="w-3.5 h-3.5 text-amber-700" />
                    <span className="font-khmer">
                      {locale ==='kh' ? selectedDelicacy.cookTimeKh : selectedDelicacy.cookTimeEn}
                    </span>
                  </div>
                </div>

                {/* Cultural Symbolism */}
                <div className="bg-white/80 border border-warmth-200/80 rounded-xl p-3 flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs text-warmth-900 font-khmer leading-relaxed">
                    <span className="font-bold text-amber-900">
                      {locale ==='kh' ?'អត្ថន័យទស្សនវិជ្ជា ៖' :'Symbolic Heritage:'}
                    </span>
                    <span>
                      {locale ==='kh' ? selectedDelicacy.symbolismKh : selectedDelicacy.symbolismEn}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-warmth-700 font-khmer leading-relaxed">
                  {locale ==='kh' ? selectedDelicacy.descriptionKh : selectedDelicacy.descriptionEn}
                </p>

                {/* Ingredients Tags */}
                <div>
                  <div className="text-[11px] font-bold text-warmth-800 mb-1.5 font-khmer">
                    {locale ==='kh' ?'គ្រឿងផ្សំចម្បង ៖' :'Main Ingredients:'}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {(locale ==='kh'
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
                    {locale ==='kh' ? selectedDelicacy.proTipKh : selectedDelicacy.proTipEn}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: THE MORNING PAGODA BASKET CHECKLIST */}
      {viewMode ==='basket' && (
        <div className="space-y-4">
          {/* Gentle Status Banner */}
          <div className="bg-warmth-50/80 border border-warmth-200/80 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-sm sm:text-base font-bold text-warmth-950 font-khmer">
                {allItemsReady
                  ? (locale ==='kh' ?'🙏 រួចរាល់គ្រប់យ៉ាងសម្រាប់ដំណើរទៅវត្ត!' :'🙏 Everything is lovingly prepared for the Pagoda!')
                  : (locale ==='kh' ?'របស់របរចាំបាច់ ៦ យ៉ាងត្រូវរៀបចំក្នុងកន្ត្រក ៖' :'6 Essential items to prepare in your morning basket:')}
              </h3>
              <p className="text-xs text-warmth-600 font-khmer mt-0.5">
                {locale ==='kh'
                  ?'ចុចលើរបស់របរនីមួយៗពេលបានរៀបចំរួចរាល់'
                  :'Tap each item as you pack it into your tiffin or offering tray.'}
              </p>
            </div>

            <div className="text-xs font-bold text-lotus-800 bg-lotus-100/90 px-3 py-1 rounded-full border border-lotus-200 font-khmer self-start sm:self-auto">
              {readyItemIds.length} / {CHECKLIST_ITEMS.length} {locale ==='kh' ?'បានរៀបចំ' :'Packed'}
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
                      ?'bg-lotus-50/80 border-lotus-300 shadow-2xs'
                      :'bg-white hover:bg-warmth-50/80 border-warmth-200/80'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                          isReady ?'bg-lotus-200/80 text-lotus-900' :'bg-warmth-100 text-warmth-700'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>

                      <button
                        type="button"
                        aria-label={isReady ?'Mark as not ready' :'Mark as ready'}
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
                        isReady ?'text-lotus-950' :'text-warmth-900'
                      }`}
                    >
                      {locale ==='kh' ? item.titleKh : item.titleEn}
                    </h4>

                    <p className="text-xs text-warmth-600 font-khmer leading-relaxed">
                      {locale ==='kh' ? item.detailKh : item.detailEn}
                    </p>
                  </div>

                  <div className="pt-2.5 mt-2.5 border-t border-warmth-200/50 flex items-center justify-between text-[11px]">
                    <span className="text-warmth-500 font-khmer">
                      {locale ==='kh' ? item.badgeKh : item.badgeEn}
                    </span>
                    <span className={`font-semibold font-khmer ${isReady ?'text-lotus-700' :'text-warmth-400'}`}>
                      {isReady ? (locale ==='kh' ?'រួចរាល់' :'Ready') : (locale ==='kh' ?'មិនទាន់រៀបចំ' :'Pending')}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Celebratory Blessing when all are packed */}
          {allItemsReady && (
            <div className="bg-emerald-50/90 border border-emerald-200 rounded-2xl p-3.5 text-center text-xs text-emerald-900 font-khmer">
              {locale ==='kh'
                ?'🎉 សូមអនុមោទនាបុណ្យ! របស់របរ និងទឹកចិត្តជ្រះថ្លាបានត្រៀមរួចរាល់ ១០០% សម្រាប់ដំណើរទៅកាន់វត្តអារាម'
                :'🎉 Auspicious blessings! All offerings and pure intentions are ready for your pagoda pilgrimage.'}
            </div>
          )}
        </div>
      )}

      {/* GRANDMOTHERS' WHISPERS: 4 GENTLE TEMPLE MANNERS */}
      <div className="bg-warmth-50/80 border border-warmth-200/80 rounded-2xl p-4 sm:p-5 space-y-3">
        <div className="flex items-center gap-2">
          <Landmark className="w-4 h-4 text-amber-700" />
          <h3 className="text-xs sm:text-sm font-bold text-warmth-950 font-khmer">
            {locale ==='kh'
              ?'ពាក្យដាស់តឿនចាស់ទុំ ៖ ៤ ទំនៀមទម្លាប់ល្អពេលដល់វត្តអារាម'
              :'Grandmother’s Guidance: 4 Mindful Temple Etiquette Reminders'}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 text-xs">
          <div className="bg-white p-3 rounded-xl border border-warmth-200/70 shadow-2xs space-y-1">
            <div className="font-bold text-warmth-900 font-khmer flex items-center gap-1.5">
              <span>👟</span>
              <span>{locale ==='kh' ?'ដោះស្បែកជើង និងមួក' :'Remove Shoes & Hats'}</span>
            </div>
            <p className="text-warmth-600 font-khmer text-[11px] leading-relaxed">
              {locale ==='kh'
                ?'ដោះមុននឹងឈានជើងឡើងខឿនព្រះវិហារ និងសាលាឆាន់'
                :'Take off footwear and headwear before stepping onto temple terraces.'}
            </p>
          </div>

          <div className="bg-white p-3 rounded-xl border border-warmth-200/70 shadow-2xs space-y-1">
            <div className="font-bold text-warmth-900 font-khmer flex items-center gap-1.5">
              <span>🙏</span>
              <span>{locale ==='kh' ?'សំពះក្រាបថ្វាយបង្គំ ៣ ដង' :'Lotus Sampeah & 3 Bows'}</span>
            </div>
            <p className="text-warmth-600 font-khmer text-[11px] leading-relaxed">
              {locale ==='kh'
                ?'លើកដៃប្រណម្យជាផ្កាឈូក ថ្វាយបង្គំព្រះរតនត្រ័យ'
                :'Bow reverently three times to the Buddha and Venerable Sangha.'}
            </p>
          </div>

          <div className="bg-white p-3 rounded-xl border border-warmth-200/70 shadow-2xs space-y-1">
            <div className="font-bold text-warmth-900 font-khmer flex items-center gap-1.5">
              <span>🤫</span>
              <span>{locale ==='kh' ?'រក្សាភាពស្ងប់ស្ងាត់' :'Quiet Phones & Speak Softly'}</span>
            </div>
            <p className="text-warmth-600 font-khmer text-[11px] leading-relaxed">
              {locale ==='kh'
                ?'បិទសំឡេងទូរសព្ទដៃ និងសន្ទនាដោយសម្លេងពិរោះពិសា'
                :'Silence mobile phones and speak in gentle, considerate tones.'}
            </p>
          </div>

          <div className="bg-white p-3 rounded-xl border border-warmth-200/70 shadow-2xs space-y-1">
            <div className="font-bold text-warmth-900 font-khmer flex items-center gap-1.5">
              <span>🧘</span>
              <span>{locale ==='kh' ?'អង្គុយបត់ជើងសមរម្យ' :'Sit in Bot Poun Posture'}</span>
            </div>
            <p className="text-warmth-600 font-khmer text-[11px] leading-relaxed">
              {locale ==='kh'
                ?'បត់ជើងបែរទិសសមរម្យ មិនចង្អុលបាតជើងទៅកាន់ព្រះសង្ឃ'
                :'Fold both legs neatly to one side without pointing feet at altars.'}
            </p>
          </div>
        </div>
      </div>

      {/* Gentle Navigation Footnote */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-warmth-600">
        <div className="flex items-center gap-2">
          <span>{locale ==='kh' ?'ស្វែងយល់បន្ថែម ៖' :'Explore further:'}</span>
          <Link
            to="/libation"
            className="inline-flex items-center gap-1 font-bold text-amber-800 hover:text-amber-950 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200 transition"
          >
            <Droplet className="w-3.5 h-3.5 text-amber-600" />
            <span className="font-khmer">{locale ==='kh' ?'ពិធីច្រូចទឹក' :'Libation'}</span>
          </Link>
          <Link
            to="/stories"
            className="inline-flex items-center gap-1 font-bold text-lotus-700 hover:text-lotus-900 bg-lotus-50 px-2.5 py-1 rounded-lg border border-lotus-200 transition"
          >
            <BookOpen className="w-3.5 h-3.5 text-lotus-600" />
            <span className="font-khmer">{locale ==='kh' ?'រឿងនំអន្សម' :'Lore'}</span>
          </Link>
        </div>

        <Link
          to="/activities"
          className="inline-flex items-center gap-1.5 font-bold text-lotus-700 hover:text-lotus-900 group transition"
        >
          <span className="font-khmer">
            {locale ==='kh' ?'មើលកិច្ចការបុណ្យទាំងអស់' :'All Festival Merits'}
          </span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
        </Link>
      </div>
    </section>
  );
};
