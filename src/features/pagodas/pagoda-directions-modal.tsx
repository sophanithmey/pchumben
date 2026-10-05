import React from 'react';
import { ExternalLink, MapPin, Navigation } from 'lucide-react';
import { Pagoda } from '../../domain/entities/pagoda';
import { Modal } from '../../components/ui/modal';
import { useI18n } from '../../i18n/i18n-context';

interface PagodaDirectionsModalProps {
  pagoda: Pagoda | null;
  onClose: () => void;
}

export const PagodaDirectionsModal: React.FC<PagodaDirectionsModalProps> = ({
  pagoda,
  onClose,
}) => {
  const { t, locale } = useI18n();

  if (!pagoda) return null;

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${pagoda.latitude},${pagoda.longitude}`;
  const osmUrl = `https://www.openstreetmap.org/?mlat=${pagoda.latitude}&mlon=${pagoda.longitude}#map=16/${pagoda.latitude}/${pagoda.longitude}`;

  return (
    <Modal
      isOpen={!!pagoda}
      onClose={onClose}
      title={locale === 'kh' ? pagoda.khmerName : pagoda.name}
    >
      <div className="space-y-4">
        {/* Map placeholder */}
        <div className="relative h-44 rounded-2xl bg-warmth-100 border border-warmth-200/90 flex flex-col items-center justify-center text-center p-4 overflow-hidden">
          <div className="w-12 h-12 rounded-full bg-lotus-100 border border-lotus-200 flex items-center justify-center text-lotus-600 mb-2">
            <MapPin className="w-6 h-6 animate-bounce" />
          </div>
          <div className="text-xs font-mono text-warmth-700">
            GPS: {pagoda.latitude}° N, {pagoda.longitude}° E
          </div>
          <div className="text-[11px] text-warmth-500 mt-1">
            {locale === 'kh' ? pagoda.khmerProvince : pagoda.province} • Cambodia
          </div>
        </div>

        <p className="text-xs sm:text-sm text-warmth-700 leading-relaxed">
          {locale === 'kh' ? pagoda.khmerDescription : pagoda.description}
        </p>

        <p className="text-[11px] text-warmth-500 italic">
          {t('pagodas.distanceNote')}
        </p>

        <div className="flex flex-col sm:flex-row gap-2 pt-2 border-t border-warmth-100">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-lotus-600 hover:bg-lotus-700 text-white font-semibold text-xs transition shadow-xs"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3 h-3 ml-1 opacity-70" />
          </a>

          <a
            href={osmUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white hover:bg-warmth-100 text-warmth-800 border border-warmth-300 font-semibold text-xs transition"
          >
            <span>OpenStreetMap</span>
            <ExternalLink className="w-3 h-3 ml-1 opacity-70" />
          </a>
        </div>
      </div>
    </Modal>
  );
};
