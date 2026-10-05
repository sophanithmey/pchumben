import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { useI18n } from '../../i18n/i18n-context';

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({ message, onRetry }) => {
  const { t } = useI18n();

  return (
    <div
      role="alert"
      className="flex flex-col items-center justify-center p-8 text-center bg-red-50/70 border border-red-200 rounded-2xl max-w-md mx-auto my-6"
    >
      <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 mb-3">
        <AlertCircle className="w-6 h-6" />
      </div>
      <p className="text-base font-medium text-warmth-900 mb-2">
        {message || t('status.error')}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          type="button"
          className="mt-2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-warmth-800 bg-white border border-warmth-300 rounded-xl hover:bg-warmth-100 transition shadow-sm"
        >
          <RefreshCw className="w-4 h-4" />
          <span>ព្យាយាមម្តងទៀត (Retry)</span>
        </button>
      )}
    </div>
  );
};
