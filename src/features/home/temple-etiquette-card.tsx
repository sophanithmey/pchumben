import React from 'react';
import { Landmark } from 'lucide-react';

interface TempleEtiquetteCardProps {
  locale: string;
}

export const TempleEtiquetteCard: React.FC<TempleEtiquetteCardProps> = ({ locale }) => {
  return (
    <div className="relative overflow-hidden bg-warmth-50/80 border border-warmth-200/80 rounded-2xl p-4 sm:p-5 space-y-3">
      <div className="flex items-center gap-2">
        <Landmark className="w-4 h-4 text-amber-700" />
        <h3 className="text-xs sm:text-sm font-bold text-warmth-950 font-khmer">
          {locale === 'kh'
            ? 'ដំបូន្មានចាស់ទុំ ៖ សុជីវធម៌ទាំង ៤ ពេលទៅដល់វត្តអារាម'
            : 'Grandmother’s Guidance: 4 Mindful Temple Etiquette Reminders'}
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 text-xs">
        <div className="bg-white p-3 rounded-xl border border-warmth-200/70 shadow-2xs space-y-1">
          <div className="font-bold text-warmth-900 font-khmer flex items-center gap-1.5">
            <span>👟</span>
            <span>{locale === 'kh' ? 'ដោះស្បែកជើង និងមួក' : 'Remove Shoes & Hats'}</span>
          </div>
          <p className="text-warmth-600 font-khmer text-[11px] leading-relaxed">
            {locale === 'kh'
              ? 'ដោះមុននឹងឈានជើងឡើងខឿនព្រះវិហារ និងសាលាឆាន់'
              : 'Take off footwear and headwear before stepping onto temple terraces.'}
          </p>
        </div>

        <div className="bg-white p-3 rounded-xl border border-warmth-200/70 shadow-2xs space-y-1">
          <div className="font-bold text-warmth-900 font-khmer flex items-center gap-1.5">
            <span>🙏</span>
            <span>{locale === 'kh' ? 'សំពះក្រាបថ្វាយបង្គំ ៣ ដង' : 'Lotus Sampeah & 3 Bows'}</span>
          </div>
          <p className="text-warmth-600 font-khmer text-[11px] leading-relaxed">
            {locale === 'kh'
              ? 'លើកដៃប្រណម្យជាផ្កាឈូក ថ្វាយបង្គំព្រះរតនត្រ័យ'
              : 'Bow reverently three times to the Buddha and Venerable Sangha.'}
          </p>
        </div>

        <div className="bg-white p-3 rounded-xl border border-warmth-200/70 shadow-2xs space-y-1">
          <div className="font-bold text-warmth-900 font-khmer flex items-center gap-1.5">
            <span>🤫</span>
            <span>{locale === 'kh' ? 'រក្សាភាពស្ងប់ស្ងាត់' : 'Quiet Phones & Speak Softly'}</span>
          </div>
          <p className="text-warmth-600 font-khmer text-[11px] leading-relaxed">
            {locale === 'kh'
              ? 'បិទសំឡេងទូរសព្ទដៃ និងសន្ទនាដោយសំឡេងស្រទន់សមរម្យ'
              : 'Silence mobile phones and speak in gentle, considerate tones.'}
          </p>
        </div>

        <div className="bg-white p-3 rounded-xl border border-warmth-200/70 shadow-2xs space-y-1">
          <div className="font-bold text-warmth-900 font-khmer flex items-center gap-1.5">
            <span>🧘</span>
            <span>{locale === 'kh' ? 'អង្គុយបត់ជើងសមរម្យ' : 'Sit in Bot Poun Posture'}</span>
          </div>
          <p className="text-warmth-600 font-khmer text-[11px] leading-relaxed">
            {locale === 'kh'
              ? 'អង្គុយបត់ជើងរៀបរយ មិនបែរបាតជើងឆ្ពោះទៅរកព្រះសង្ឃ ឬព្រះពុទ្ធបដិមា'
              : 'Fold both legs neatly to one side without pointing feet at altars.'}
          </p>
        </div>
      </div>
    </div>
  );
};
