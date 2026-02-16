import { AlertCircle, CheckCircle } from 'lucide-react';

interface InlineNoticeProps {
  type: 'success' | 'error';
  message: string;
}

export function InlineNotice({ type, message }: InlineNoticeProps) {
  const isSuccess = type === 'success';

  return (
    <div
      role="alert"
      className={`flex items-start gap-3 p-4 rounded-lg border ${
        isSuccess
          ? 'bg-primary/10 border-primary/20 text-primary-foreground'
          : 'bg-destructive/10 border-destructive/20 text-destructive-foreground'
      }`}
    >
      {isSuccess ? (
        <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
      ) : (
        <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
      )}
      <p className="text-sm leading-relaxed">{message}</p>
    </div>
  );
}
