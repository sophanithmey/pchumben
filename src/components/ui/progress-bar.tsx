import React from 'react';

interface ProgressBarProps {
  value: number; // 0 to 100
  label?: string;
  subLabel?: string;
  size?: 'sm' | 'md' | 'lg';
  colorClassName?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  label,
  subLabel,
  size = 'md',
  colorClassName = 'bg-gradient-to-r from-lotus-500 to-amber-500',
}) => {
  const clamped = Math.min(100, Math.max(0, value));

  const heightClass = {
    sm: 'h-2',
    md: 'h-3.5',
    lg: 'h-5',
  }[size];

  return (
    <div className="w-full">
      {(label || subLabel) && (
        <div className="flex justify-between items-center text-xs md:text-sm font-medium text-warmth-800 mb-1.5">
          <span>{label}</span>
          <span>{subLabel ?? `${clamped}%`}</span>
        </div>
      )}
      <div
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label || 'Progress'}
        className={`w-full bg-warmth-200/80 rounded-full overflow-hidden ${heightClass} shadow-inner`}
      >
        <div
          className={`${heightClass} rounded-full transition-all duration-500 ease-out ${colorClassName}`}
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
};
