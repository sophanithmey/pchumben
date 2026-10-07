import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import { useI18n } from '../../i18n/i18n-context';
import { BayBenSection } from './bay-ben-section';

export const BayBenPage: React.FC = () => {
  const { locale } = useI18n();

  return (
    <div className="max-w-7xl mx-auto space-y-4">
      {/* Navigation Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-semibold text-warmth-600 font-khmer px-1">
        <Link
          to="/"
          className="inline-flex items-center gap-1 hover:text-warmth-900 transition"
        >
          <Home className="w-3.5 h-3.5" />
          <span>{locale === 'kh' ? 'ទំព័រដើម' : 'Home'}</span>
        </Link>
        <span>/</span>
        <span className="text-warmth-900">
          {locale === 'kh' ? 'ពិធីបោះបាយបិណ្ឌ' : 'Bos Bay Ben'}
        </span>
      </div>

      {/* Return Button for Mobile */}
      <div className="sm:hidden">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-warmth-700 hover:text-warmth-950 font-khmer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{locale === 'kh' ? 'ត្រឡប់ទៅទំព័រដើម' : 'Back to Home'}</span>
        </Link>
      </div>

      {/* Main Bay Ben SVG Section */}
      <BayBenSection />
    </div>
  );
};
