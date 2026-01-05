import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const StickyCallButton = () => {
  const handleScheduleCall = () => {
    // You can replace this with your actual calendar booking link
    window.open('https://calendly.com/amplo-marketing/strategy-call', '_blank');
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[hsl(var(--navy-primary))] border-b border-[hsl(var(--gold-accent))]/20 shadow-lg">
      <div className="container-custom py-3">
        <div className="flex items-center justify-between">
          {/* Left side - Logo/Brand */}
          <div className="flex items-center gap-2">
            <span className="text-[hsl(var(--gold-accent))] font-apple font-bold text-lg">
              AMPLO
            </span>
          </div>

          {/* Right side - Call Button */}
          <Button
            onClick={handleScheduleCall}
            className="bg-[hsl(var(--gold-accent))] hover:bg-[hsl(var(--gold-accent))]/90 text-[hsl(var(--navy-primary))] font-apple font-semibold px-6 py-2 rounded-full flex items-center gap-2 text-sm"
          >
            <Phone className="w-4 h-4" />
            Schedule Free Strategy Call
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyCallButton;