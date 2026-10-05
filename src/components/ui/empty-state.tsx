import React from 'react';
import { useI18n } from '../../i18n/i18n-context';

interface EmptyStateProps {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  action?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  action,
}) => {
  const { t } = useI18n();

  return (
    <div className="flex flex-col items-center justify-center p-8 text-center bg-white/60 border border-warmth-200/80 rounded-2xl max-w-lg mx-auto my-6 shadow-sm backdrop-blur-sm">
      <div className="text-4xl mb-3 text-lotus-600">
        {icon || '🪷'}
      </div>
      <h3 className="text-lg font-semibold text-warmth-900 mb-1">
        {title || t('status.empty')}
      </h3>
      {description && (
        <p className="text-sm text-warmth-600 mb-4 max-w-sm">
          {description}
        </p>
      )}
      {action && <div className="mt-2">{action}</div>}
    </div>
  );
};
