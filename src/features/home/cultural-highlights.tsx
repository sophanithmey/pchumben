import React from 'react';
import { Link } from 'react-router-dom';
import { Droplet, BookOpen, Sunrise, ArrowRight, Sparkles } from 'lucide-react';
import { useI18n } from '../../i18n/i18n-context';

export const CulturalHighlights: React.FC = () => {
  const { locale } = useI18n();

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
      {/* Bay Ben Dawn Ritual Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500/10 via-amber-100/30 to-white p-6 border border-amber-200/90 shadow-xs flex flex-col justify-between group hover:shadow-md transition">
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 border border-amber-300 text-amber-800 flex items-center justify-center">
              <Sunrise className="w-5 h-5 text-amber-700" />
            </div>
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-800 bg-amber-100/90 px-2.5 py-0.5 rounded-full border border-amber-200">
              <Sparkles className="w-3 h-3 text-amber-600" />
              <span>{locale === 'kh' ? 'ពិធីពេលទៀបភ្លឺ' : 'Pre-Dawn Ritual'}</span>
            </span>
          </div>

          <h3 className="text-lg font-bold text-warmth-950 mb-1 leading-snug font-khmer">
            {locale === 'kh' ? 'ពិធីបោះបាយបិណ្ឌ' : 'Bos Bay Ben Ceremony'}
          </h3>
          <p className="text-xs sm:text-sm text-warmth-600 leading-relaxed mb-4 font-khmer">
            {locale === 'kh'
              ? 'ពួតដុំបាយដំណើបលាយល្ងខ្មៅ ដើរប្រទក្សិណ ៣ ជុំ និងបោះឧទ្ទិសកុសលដល់ដូនតានាវេលាម៉ោង ៤ ទៀបភ្លឺ'
              : 'Shape sesame sticky rice, walk 3 rounds around the temple, and offer merits to ancestors before dawn.'}
          </p>
        </div>

        <Link
          to="/bay-ben"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-800 hover:text-amber-900 group-hover:translate-x-0.5 transition"
        >
          <span>{locale === 'kh' ? 'ចូលរួមពិធីបោះបាយបិណ្ឌ' : 'Explore Bay Ben Ritual'}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Water Libation Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-500/10 via-sky-100/30 to-white p-6 border border-sky-200/90 shadow-xs flex flex-col justify-between group hover:shadow-md transition">
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-2xl bg-sky-100 border border-sky-300 text-sky-800 flex items-center justify-center">
              <Droplet className="w-5 h-5 fill-sky-700 text-sky-700" />
            </div>
            <span className="text-[11px] font-bold text-sky-800 bg-sky-100/80 px-2.5 py-0.5 rounded-full border border-sky-200">
              {locale === 'kh' ? 'ពិធីសាសនា' : 'Sacred Ritual'}
            </span>
          </div>

          <h3 className="text-lg font-bold text-warmth-950 mb-1 leading-snug font-khmer">
            {locale === 'kh' ? 'ពិធីច្រូចទឹកឧទ្ទិសកុសល' : 'Water Libation Ceremony'}
          </h3>
          <p className="text-xs sm:text-sm text-warmth-600 leading-relaxed mb-4 font-khmer">
            {locale === 'kh'
              ? 'អនុវត្តពិធីច្រូចទឹកតំណក់ទឹកបរិសុទ្ធ ស្វាធ្យាយធម៌បាលី និងឧទ្ទិសផលបុណ្យជូនដល់ដូនតា ៧ សន្តាន'
              : 'Experience the drop-by-drop water pouring ritual, recite Pali verses, and dedicate merit to 7 generations.'}
          </p>
        </div>

        <Link
          to="/libation"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-sky-800 hover:text-sky-900 group-hover:translate-x-0.5 transition"
        >
          <span>{locale === 'kh' ? 'ចូលរួមពិធីច្រូចទឹក' : 'Begin Water Libation'}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Stories Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-lotus-500/10 via-lotus-100/30 to-white p-6 border border-lotus-200/90 shadow-xs flex flex-col justify-between group hover:shadow-md transition">
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-2xl bg-lotus-100 border border-lotus-300 text-lotus-800 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-lotus-700" />
            </div>
            <span className="text-[11px] font-bold text-lotus-800 bg-lotus-100/80 px-2.5 py-0.5 rounded-full border border-lotus-200">
              {locale === 'kh' ? 'រឿងនិទាន និងគម្ពីរ' : 'Legends & Lore'}
            </span>
          </div>

          <h3 className="text-lg font-bold text-warmth-950 mb-1 leading-snug font-khmer">
            {locale === 'kh' ? 'រឿងរ៉ាវ និងប្រវត្តិបុណ្យភ្ជុំបិណ្ឌ' : 'Stories Behind Pchum Ben'}
          </h3>
          <p className="text-xs sm:text-sm text-warmth-600 leading-relaxed mb-4 font-khmer">
            {locale === 'kh'
              ? 'ស្វែងយល់រឿងព្រះបាទពិម្ពិសារ ប្រេតទាំង ៤ ពួក អត្ថន័យនំអន្សម និងហេតុអ្វីបានជាខ្មែរឧទ្ទិសកុសល ៧ សន្តាន'
              : 'Discover King Bimbisara, the 4 types of Petas, the meaning of Num Ansom, and 7-generation merit dedication.'}
          </p>
        </div>

        <Link
          to="/stories"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-lotus-700 hover:text-lotus-800 group-hover:translate-x-0.5 transition"
        >
          <span>{locale === 'kh' ? 'អានរឿងនិទាន' : 'Explore Stories'}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};
