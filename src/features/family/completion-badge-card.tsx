import React, { useRef, useState } from 'react';
import { Download, Share2, Check, Sparkles, Heart } from 'lucide-react';
import { useI18n } from '../../i18n/i18n-context';
import { formatBuddhistEraYear, toKhmerDigits } from '../../domain/services/calendar-service';

interface CompletionBadgeCardProps {
  completedCount: number;
  total: number;
}

export const CompletionBadgeCard: React.FC<CompletionBadgeCardProps> = ({
  completedCount,
  total,
}) => {
  const { t, locale } = useI18n();
  const cardRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const text =
      locale === 'kh'
        ? 'ក្រុមគ្រួសារយើងបានរួមគ្នាបំពេញកុសលប្រពៃណីភ្ជុំបិណ្ឌពេញបរិបូរណ៍ 🪷 ដំណើរបុណ្យភ្ជុំបិណ្ឌ'
        : 'Our family completed all Pchum Ben traditions! 🪷 Digital Pchum Ben Journey';

    if (navigator.share) {
      try {
        await navigator.share({
          title: locale === 'kh' ? 'ប័ណ្ណកុសលកតញ្ញូគ្រួសារភ្ជុំបិណ្ឌ' : 'Pchum Ben Family Merit Certificate',
          text,
          url: window.location.origin,
        });
      } catch {
        // user cancelled or share failed
      }
    } else {
      navigator.clipboard.writeText(`${text} ${window.location.origin}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 760;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Background Parchment Gradient
    const bgGrad = ctx.createLinearGradient(0, 0, 1200, 760);
    bgGrad.addColorStop(0, '#fdfbf7');
    bgGrad.addColorStop(0.5, '#fbf5ea');
    bgGrad.addColorStop(1, '#f5ebe0');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1200, 760);

    // Outer Crimson Border
    ctx.strokeStyle = '#a52549';
    ctx.lineWidth = 14;
    ctx.strokeRect(28, 28, 1144, 704);

    // Inner Gold Filigree Border
    ctx.strokeStyle = '#ca8a04';
    ctx.lineWidth = 3;
    ctx.strokeRect(44, 44, 1112, 672);

    // Inner Thin Inset Border
    ctx.strokeStyle = '#e8dbca';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(52, 52, 1096, 656);

    // Corner Ornaments (Khmer Kbach style)
    const drawCorner = (x: number, y: number, angle: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.fillStyle = '#ca8a04';
      ctx.beginPath();
      ctx.arc(0, 0, 14, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#a52549';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();
    };

    drawCorner(44, 44, 0);
    drawCorner(1156, 44, 0);
    drawCorner(44, 716, 0);
    drawCorner(1156, 716, 0);

    // Top Emblem: Sacred Lotus
    ctx.textAlign = 'center';

    ctx.font = '48px serif';
    ctx.fillText('🪷', 600, 140);

    // Main Header: Khmer Title
    ctx.fillStyle = '#2e211b';
    ctx.font = 'bold 44px "Kantumruy Pro", serif, system-ui';
    ctx.fillText('ប័ណ្ណកុសលកតញ្ញូគ្រួសារ', 600, 210);

    // English Subtitle
    ctx.fillStyle = '#a52549';
    ctx.font = 'bold 20px "Inter", sans-serif';
    ctx.fillText('PCHUM BEN FAMILY MERIT & HONOR CERTIFICATE', 600, 255);

    // Cultural Motto
    ctx.fillStyle = '#78350f';
    ctx.font = 'bold 24px "Kantumruy Pro", sans-serif';
    ctx.fillText('« រំលឹកគុណដូនតា • សាងកុសលបច្ចុប្បន្ន • ថែរក្សាប្រពៃណីខ្មែរ »', 600, 320);

    ctx.fillStyle = '#815c48';
    ctx.font = 'italic 18px "Inter", serif';
    ctx.fillText('"Remember the Past • Celebrate the Present • Pass On Tradition"', 600, 355);

    // Merit Dedication Inscription
    ctx.fillStyle = '#2e211b';
    ctx.font = '22px "Kantumruy Pro", sans-serif';
    ctx.fillText('សូមឧទ្ទិសកុសលផលបុណ្យ ជូនចំពោះបុព្វការីជនគ្រប់ជំនាន់ប្រកបដោយកតញ្ញូតាធម៌ដ៏ជ្រាលជ្រៅ', 600, 430);

    // Achievement Badge Ribbon on Canvas
    ctx.fillStyle = '#fce7eb';
    ctx.strokeStyle = '#ea7c9b';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(380, 480, 440, 56, 28);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#732138';
    ctx.font = 'bold 22px "Kantumruy Pro", sans-serif';
    const progressCountStr =
      locale === 'kh'
        ? `${toKhmerDigits(completedCount)} / ${toKhmerDigits(total)}`
        : `${completedCount} / ${total}`;
    ctx.fillText(`✨ បានបំពេញប្រពៃណីគ្រួសារ ${progressCountStr} យ៉ាងបរិបូរណ៍`, 600, 516);

    // Bottom Decorative Divider
    ctx.strokeStyle = '#ca8a04';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(300, 585);
    ctx.lineTo(900, 585);
    ctx.stroke();

    ctx.fillStyle = '#a52549';
    ctx.font = '20px serif';
    ctx.fillText('🪷', 600, 592);

    // Official Seal on the Bottom Right
    ctx.fillStyle = '#a52549';
    ctx.strokeStyle = '#ca8a04';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(980, 620, 52, 0, Math.PI * 2);
    ctx.stroke();
    ctx.font = 'bold 12px "Kantumruy Pro", sans-serif';
    ctx.fillText('ត្រាកុសល', 980, 614);
    ctx.font = '10px "Inter", sans-serif';
    ctx.fillText('PCHUM BEN', 980, 628);
    ctx.font = locale === 'kh' ? '10px "Kantumruy Pro", sans-serif' : '10px "Inter", sans-serif';
    ctx.fillText(formatBuddhistEraYear(new Date().getFullYear(), locale), 980, 642);

    // Date & App Info Bottom Left
    ctx.textAlign = 'left';
    ctx.fillStyle = '#815c48';
    ctx.font = '16px "Kantumruy Pro", sans-serif';
    ctx.fillText('កម្មវិធីបុណ្យភ្ជុំបិណ្ឌ • Pchum Ben Companion', 100, 640);
    ctx.font = '14px "Inter", sans-serif';
    ctx.fillText('Sacred Cultural & Merit Dedication', 100, 665);

    const a = document.createElement('a');
    a.download = 'pchum-ben-family-merit-certificate.png';
    a.href = canvas.toDataURL('image/png');
    a.click();
  };

  return (
    <div className="space-y-4 sm:space-y-5">
      {/* Authentic Cambodian Merit Certificate Card */}
      <div
        ref={cardRef}
        className="relative p-4 sm:p-7 md:p-9 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#fdfbf7] via-[#faf5ec] to-[#f4ebe0] border-2 border-lotus-700/60 shadow-lg text-center overflow-hidden"
      >
        {/* Ornate Gold Inner Inset Border */}
        <div className="absolute inset-1.5 sm:inset-3 rounded-xl sm:rounded-2xl border border-amber-500/50 pointer-events-none" />
        <div className="absolute inset-2.5 sm:inset-4 rounded-xl sm:rounded-2xl border border-warmth-200/80 pointer-events-none" />

        {/* Traditional Khmer Corner Accents */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 text-amber-600 text-[10px] sm:text-sm select-none">
          ❖
        </div>
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 text-amber-600 text-[10px] sm:text-sm select-none">
          ❖
        </div>
        <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 text-amber-600 text-[10px] sm:text-sm select-none">
          ❖
        </div>
        <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 text-amber-600 text-[10px] sm:text-sm select-none">
          ❖
        </div>

        {/* Sacred Golden Lotus Emblem with Halo */}
        <div className="relative inline-flex items-center justify-center mb-2.5 sm:mb-3">
          <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-amber-100 via-lotus-50 to-amber-200 border-2 border-amber-400/80 flex items-center justify-center shadow-md animate-lotus-float">
            <span className="text-2xl sm:text-4xl">🪷</span>
          </div>
          {/* Subtle merit sparkle */}
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 absolute -top-1 -right-1 animate-pulse" />
        </div>

        {/* Main Certificate Title */}
        <h3 className="text-lg sm:text-2xl font-black text-warmth-950 font-khmer mb-0.5 sm:mb-1 tracking-tight leading-snug">
          ប័ណ្ណកុសលកតញ្ញូគ្រួសារ
        </h3>

        <div className="text-[10px] sm:text-xs font-bold text-lotus-800 uppercase tracking-widest font-sans mb-2 sm:mb-3">
          Pchum Ben Family Merit Certificate
        </div>

        {/* Cultural Motto */}
        <p className="text-xs sm:text-sm text-warmth-900 font-khmer font-semibold leading-relaxed mb-1 px-1">
          « {t('sloganLine1')} • {t('sloganLine2')} • {t('sloganLine3')} »
        </p>

        {/* Dedication Text */}
        <p className="text-[10px] sm:text-xs text-warmth-600 font-khmer max-w-md mx-auto leading-relaxed mb-3 sm:mb-4 px-1">
          សូមឧទ្ទិសកុសលផលបុណ្យ ជូនចំពោះបុព្វការីជនគ្រប់ជំនាន់ប្រកបដោយសេចក្តីកតញ្ញូតាធម៌
        </p>

        {/* Achievement Badge Pill */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-lotus-100/90 border border-lotus-300 text-lotus-900 text-[11px] sm:text-xs font-bold shadow-2xs font-khmer max-w-full">
          <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-lotus-600 fill-lotus-600 flex-shrink-0" />
          <span className="truncate">
            បានបំពេញប្រពៃណី {locale === 'kh' ? `${toKhmerDigits(completedCount)} / ${toKhmerDigits(total)}` : `${completedCount} / ${total}`} យ៉ាងបរិបូរណ៍
          </span>
        </div>

        {/* Traditional Merit Seal */}
        <div className="mt-4 sm:mt-5 pt-2.5 sm:pt-3 border-t border-warmth-200/80 flex items-center justify-between text-xs text-warmth-600">
          <div className="text-left font-khmer text-[10px] sm:text-[11px]">
            <span className="block font-bold text-warmth-900">បុណ្យភ្ជុំបិណ្ឌ • ប្រពៃណីជាតិខ្មែរ</span>
            <span className="text-warmth-500 font-sans">
              Pchum Ben Companion • {formatBuddhistEraYear(new Date().getFullYear(), locale)}
            </span>
          </div>

          <div className="flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-[9px] sm:text-[10px] font-bold">
            <span>✨ ត្រាកុសល</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3">
        <button
          type="button"
          onClick={handleDownload}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl bg-lotus-700 hover:bg-lotus-800 text-white font-semibold text-xs sm:text-sm shadow-md transition active:scale-95 font-khmer cursor-pointer"
        >
          <Download className="w-4 h-4" />
          <span>{t('action.downloadCard')} (PNG)</span>
        </button>

        <button
          type="button"
          onClick={handleShare}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl bg-white hover:bg-warmth-100 text-warmth-900 border border-warmth-300 font-semibold text-xs sm:text-sm shadow-2xs transition active:scale-95 font-khmer cursor-pointer"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4 text-warmth-700" />}
          <span>{copied ? (locale === 'kh' ? 'បានចម្លងតំណភ្ជាប់រួចរាល់' : 'Link Copied!') : t('action.share')}</span>
        </button>
      </div>
    </div>
  );
};
