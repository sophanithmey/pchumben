import React from 'react';
import { useI18n } from '../../i18n/i18n-context';

interface LoadingStateProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const LoadingState: React.FC<LoadingStateProps> = ({ message, size = 'md' }) => {
  const { t } = useI18n();

  const sizeClass = {
    sm: 'w-6 h-6 border-2',
    md: 'w-10 h-10 border-3',
    lg: 'w-16 h-16 border-4',
  }[size];

  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-col items-center justify-center p-8 text-center"
    >
      <div
        className={`${sizeClass} border-lotus-200 border-t-lotus-600 rounded-full animate-spin mb-3`}
      />
      <p className="text-sm font-medium text-warmth-700 animate-pulse">
        {message || t('status.loading')}
      </p>
    </div>
  );
};
