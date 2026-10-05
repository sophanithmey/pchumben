import React from 'react';
import { MapPin, Navigation, Landmark } from 'lucide-react';
import { Pagoda } from '../../domain/entities/pagoda';
import { Badge } from '../../components/ui/badge';
import { useI18n } from '../../i18n/i18n-context';

interface PagodaCardProps {
  pagoda: Pagoda;
  onOpenDirections: (pagoda: Pagoda) => void;
}

export const PagodaCard: React.FC<PagodaCardProps> = ({ pagoda, onOpenDirections }) => {
  const { t, locale } = useI18n();

  return (
    <div className="bg-white rounded-3xl p-5 border border-warmth-200/90 shadow-xs hover:shadow-md transition duration-300 flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
            <Landmark className="w-5 h-5" />
          </div>

          <Badge variant="gold" size="sm">
            {locale === 'kh' ? pagoda.khmerProvince : pagoda.province}
          </Badge>
        </div>

        <h3 className="text-base font-bold text-warmth-950 mb-1">
          {locale === 'kh' ? pagoda.khmerName : pagoda.name}
        </h3>

        <div className="flex items-center gap-1.5 text-xs text-warmth-600 mb-3">
          <MapPin className="w-3.5 h-3.5 text-warmth-500" />
          <span>
            {locale === 'kh'
              ? `${pagoda.khmerDistrict ? `${pagoda.khmerDistrict}, ` : ''}${pagoda.khmerProvince}`
              : `${pagoda.district ? `${pagoda.district}, ` : ''}${pagoda.province}`}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-warmth-600 line-clamp-2 leading-relaxed mb-4">
          {locale === 'kh' ? pagoda.khmerDescription : pagoda.description}
        </p>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-warmth-100">
        <span className="text-[11px] text-warmth-500 font-mono">
          {pagoda.latitude.toFixed(4)}°, {pagoda.longitude.toFixed(4)}°
        </span>

        <button
          type="button"
          onClick={() => onOpenDirections(pagoda)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-warmth-100 hover:bg-lotus-50 text-warmth-800 hover:text-lotus-800 text-xs font-semibold border border-warmth-200 transition"
        >
          <Navigation className="w-3.5 h-3.5 text-lotus-600" />
          <span>{t('action.getDirections')}</span>
        </button>
      </div>
    </div>
  );
};
