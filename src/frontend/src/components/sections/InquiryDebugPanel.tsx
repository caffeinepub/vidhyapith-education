import { useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useInternetIdentity } from '@/hooks/useInternetIdentity';
import { useGetInquiry } from '@/hooks/useGetInquiry';

export function InquiryDebugPanel() {
  const { identity } = useInternetIdentity();
  const principal = identity?.getPrincipal();

  const { data: inquiry, isLoading, refetch } = useGetInquiry(principal);

  useEffect(() => {
    if (principal) {
      refetch();
    }
  }, [principal, refetch]);

  if (isLoading) {
    return (
      <div className="mt-6 bg-muted/30 border border-border rounded-lg p-6">
        <p className="text-sm text-muted-foreground">Verifying submission...</p>
      </div>
    );
  }

  if (!inquiry) {
    return null;
  }

  return (
    <div className="mt-6 bg-primary/5 border border-primary/20 rounded-lg p-6">
      <div className="flex items-start gap-3 mb-4">
        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-semibold text-foreground mb-1">Inquiry Confirmed</h4>
          <p className="text-sm text-muted-foreground">
            Your inquiry has been successfully stored and our team will review it shortly.
          </p>
        </div>
      </div>
      <div className="bg-background/50 rounded-lg p-4 space-y-2 text-sm">
        <div>
          <span className="text-muted-foreground">Name:</span>{' '}
          <span className="font-medium text-foreground">{inquiry.name}</span>
        </div>
        <div>
          <span className="text-muted-foreground">Email:</span>{' '}
          <span className="font-medium text-foreground">{inquiry.email}</span>
        </div>
      </div>
    </div>
  );
}
