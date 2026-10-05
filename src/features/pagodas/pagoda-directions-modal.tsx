import React, { useState } from 'react';
import {
  ExternalLink,
  MapPin,
  Navigation,
  Copy,
  Check,
  Compass,
  Landmark,
  Sparkles,
  Info,
} from 'lucide-react';
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
  const { locale } = useI18n();
  const [copied, setCopied] = useState(false);

  if (!pagoda) return null;

  // Navigation Links
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${pagoda.latitude},${pagoda.longitude}`;
  const appleMapsUrl = `https://maps.apple.com/?daddr=${pagoda.latitude},${pagoda.longitude}&q=${encodeURIComponent(
    locale === 'kh' ? pagoda.khmerName : pagoda.name,
  )}`;
  const osmUrl = `https://www.openstreetmap.org/?mlat=${pagoda.latitude}&mlon=${pagoda.longitude}#map=16/${pagoda.latitude}/${pagoda.longitude}`;

  // Interactive OpenStreetMap Embed Bounding Box
  const deltaLon = 0.007;
  const deltaLat = 0.004;
  const bbox = `${pagoda.longitude - deltaLon}%2C${pagoda.latitude - deltaLat}%2C${pagoda.longitude + deltaLon}%2C${pagoda.latitude + deltaLat}`;
  const embedMapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${pagoda.latitude}%2C${pagoda.longitude}`;

  const copyCoordinates = async () => {
    try {
      await navigator.clipboard.writeText(`${pagoda.latitude}, ${pagoda.longitude}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // clipboard fallback
    }
  };

  const modalTitle = (
    <div className="flex items-center gap-2.5 text-left">
      <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-100 via-amber-200 to-amber-300 border border-amber-400/80 flex items-center justify-center text-amber-900 shadow-xs flex-shrink-0">
        <Landmark className="w-5 h-5 text-amber-900" />
      </div>
      <div className="min-w-0">
        <h3 className="text-base sm:text-lg font-black text-warmth-950 font-khmer leading-snug truncate">
          {locale === 'kh' ? pagoda.khmerName : pagoda.name}
        </h3>
        <p className="text-xs text-warmth-600 font-sans truncate">
          {locale === 'kh' ? pagoda.name : pagoda.khmerName}
          {pagoda.highlightTag && (
            <span className="text-lotus-700 font-medium ml-1">• {pagoda.highlightTag}</span>
          )}
        </p>
      </div>
    </div>
  );

  return (
    <Modal isOpen={!!pagoda} onClose={onClose} title={modalTitle} maxWidth="lg">
      <div className="space-y-4 pt-1">
        {/* Live Interactive Map Box */}
        <div className="relative rounded-2xl sm:rounded-3xl border border-warmth-200/90 overflow-hidden shadow-sm bg-warmth-100">
          <iframe
            title={pagoda.name}
            src={embedMapUrl}
            className="w-full h-52 sm:h-60 border-0 filter saturate-105"
            loading="lazy"
          />

          {/* Map Top Status Pill */}
          <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-warmth-200 shadow-2xs text-[11px] font-bold text-warmth-800 pointer-events-none">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-khmer">
              {locale === 'kh' ? 'ផែនទីជាក់ស្តែង' : 'Live Interactive Map'}
            </span>
          </div>

          {/* Quick Compass Tag Top Right */}
          <div className="absolute top-2.5 right-2.5">
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/95 backdrop-blur-md border border-warmth-200 shadow-2xs text-[10px] font-mono text-warmth-700">
              <Compass className="w-3 h-3 text-amber-600" />
              <span>
                {pagoda.latitude.toFixed(4)}°, {pagoda.longitude.toFixed(4)}°
              </span>
            </span>
          </div>

          {/* Bottom Map Overlay Bar with Quick Copy & OSM Link */}
          <div className="absolute bottom-2 inset-x-2 flex items-center justify-between gap-2 p-1.5 sm:p-2 rounded-xl bg-white/95 backdrop-blur-md border border-warmth-200/90 shadow-md">
            <div className="flex items-center gap-1.5 min-w-0 pl-1">
              <MapPin className="w-3.5 h-3.5 text-lotus-600 flex-shrink-0" />
              <span className="text-[11px] sm:text-xs font-medium text-warmth-800 font-khmer truncate">
                {locale === 'kh'
                  ? `${pagoda.khmerDistrict ? `${pagoda.khmerDistrict}, ` : ''}${pagoda.khmerProvince}`
                  : `${pagoda.district ? `${pagoda.district}, ` : ''}${pagoda.province}`}
              </span>
            </div>

            <div className="flex items-center gap-1 flex-shrink-0">
              <button
                type="button"
                onClick={copyCoordinates}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-warmth-100 hover:bg-warmth-200 text-warmth-800 text-[11px] font-medium transition cursor-pointer active:scale-95"
                title="Copy coordinates"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-600" />
                    <span className="text-emerald-700 font-bold font-khmer">
                      {locale === 'kh' ? 'បានចម្លង' : 'Copied'}
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 text-warmth-600" />
                    <span className="font-khmer">{locale === 'kh' ? 'ចម្លង GPS' : 'Copy GPS'}</span>
                  </>
                )}
              </button>

              <a
                href={osmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-warmth-100 hover:bg-warmth-200 text-warmth-800 text-[11px] font-medium transition"
                title="Expand OpenStreetMap"
              >
                <span>OSM</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>
        </div>

        {/* Location & Heritage Meta Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
          <div className="bg-warmth-50 border border-warmth-200/80 rounded-xl p-2.5">
            <div className="text-[10px] text-warmth-500 font-khmer mb-0.5">
              {locale === 'kh' ? 'រាជធានី / ខេត្ត' : 'Province / City'}
            </div>
            <div className="font-bold text-warmth-900 font-khmer truncate">
              {locale === 'kh' ? pagoda.khmerProvince : pagoda.province}
            </div>
          </div>

          <div className="bg-warmth-50 border border-warmth-200/80 rounded-xl p-2.5">
            <div className="text-[10px] text-warmth-500 font-khmer mb-0.5">
              {locale === 'kh' ? 'ខណ្ឌ / ស្រុក' : 'District'}
            </div>
            <div className="font-bold text-warmth-900 font-khmer truncate">
              {locale === 'kh'
                ? pagoda.khmerDistrict || 'ទីរួមខេត្ត'
                : pagoda.district || 'City Center'}
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1 bg-amber-50/70 border border-amber-200/80 rounded-xl p-2.5">
            <div className="text-[10px] text-amber-700 font-khmer mb-0.5 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-600" />
              <span>{locale === 'kh' ? 'ចំណុចលេចធ្លោ' : 'Highlight'}</span>
            </div>
            <div className="font-bold text-amber-950 font-khmer truncate text-[11px] sm:text-xs">
              {pagoda.highlightTag || (locale === 'kh' ? 'អារាមប្រវត្តិសាស្ត្រ' : 'Historical Wat')}
            </div>
          </div>
        </div>

        {/* Pagoda Description & Cultural Narrative */}
        <div className="bg-gradient-to-br from-[#faf6f0] via-[#f7f1e6] to-[#f4ebe0] border border-amber-200/70 rounded-2xl p-3.5 sm:p-4 space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-lotus-800 font-khmer">
            <Info className="w-3.5 h-3.5 text-lotus-700" />
            <span>{locale === 'kh' ? 'ប្រវត្តិ និងសារៈសំខាន់' : 'Heritage & Significance'}</span>
          </div>
          <p className="text-xs sm:text-sm text-warmth-900 leading-relaxed font-khmer">
            {locale === 'kh' ? pagoda.khmerDescription : pagoda.description}
          </p>
          {locale === 'kh' && pagoda.description && (
            <p className="text-[11px] text-warmth-600 font-sans italic pt-1 border-t border-amber-200/40">
              {pagoda.description}
            </p>
          )}
        </div>

        {/* Cultural Visiting Etiquette Note */}
        <div className="rounded-xl border border-warmth-200/80 bg-warmth-50/80 p-3 text-[11px] text-warmth-700 font-khmer leading-relaxed space-y-1">
          <div className="font-bold text-warmth-900 flex items-center gap-1.5">
            <span>🪷</span>
            <span>{locale === 'kh' ? 'ការរៀបចំទៅវត្ត' : 'Visitor Etiquette'}</span>
          </div>
          <p className="text-warmth-600">
            {locale === 'kh'
              ? 'សូមស្លៀកពាក់សំពត់ប្រពៃណី ឬអាវពណ៌សសមរម្យ ដោះស្បែកជើង និងមួកមុនចូលព្រះវិហារ និងរៀបចំផ្កាឈូក ទៀន ធូប និងចង្ហាន់ប្រគេនព្រះសង្ឃដោយសេចក្តីជ្រះថ្លា'
              : 'Please wear modest white or traditional attire, remove shoes and hats before entering the sanctuary, and prepare lotus flowers, incense, candles, and tiffin offerings with joyful reverence.'}
          </p>
        </div>

        {/* Navigation Action Buttons */}
        <div className="pt-2 border-t border-warmth-100 flex flex-col sm:flex-row gap-2">
          {/* Google Maps Directions */}
          <a
            href={googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-lotus-700 hover:bg-lotus-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer font-khmer"
          >
            <Navigation className="w-4 h-4 fill-white" />
            <span>
              {locale === 'kh' ? 'បើកផ្លូវក្នុង Google Maps' : 'Directions in Google Maps'}
            </span>
            <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-80" />
          </a>

          {/* Apple Maps */}
          <a
            href={appleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-white hover:bg-warmth-50 text-warmth-900 border border-warmth-300 font-semibold text-xs sm:text-sm shadow-2xs transition active:scale-95 font-khmer"
          >
            <span>Apple Maps</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>
      </div>
    </Modal>
  );
};
