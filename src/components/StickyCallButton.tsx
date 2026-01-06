import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const StickyCallButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScheduleCall = () => {
    // Open Calendly in a popup window for better UX
    window.open('https://calendly.com/brody-amplomarketing/30min?month=2026-01', 'calendly', 'width=800,height=700,scrollbars=yes,resizable=yes');
  };



  // Only show Apply Now button on homepage (HashRouter uses hash, so pathname is always /)
  const showApplyButton = !window.location.hash || window.location.hash === '#/' || window.location.hash === '#';

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[hsl(var(--navy-primary))] border-b border-[hsl(var(--gold-accent))]/20 shadow-lg">
      <div className="container-custom py-3 relative">
        <div className="flex items-center justify-between">
          {/* Left side - Logo/Brand */}
          <div className="flex items-center gap-2">
            <span className="text-[hsl(var(--gold-accent))] font-apple font-bold text-lg">
              AMPLO
            </span>
          </div>

          {/* Center - Apply Now Button */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <button
              className="bg-[hsl(var(--gold-accent))] hover:bg-[hsl(var(--gold-accent))]/90 text-[hsl(var(--navy-primary))] font-apple font-bold px-8 py-3 rounded-full text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              onClick={() => {
                window.location.href = '/#/apply';
              }}
            >
              Apply Now
            </button>
          </div>

          {/* Right side - Schedule Button */}
          <div className="flex items-center gap-3">
            <Button
              onClick={handleScheduleCall}
              className="bg-transparent border-2 border-[hsl(var(--gold-accent))] text-[hsl(var(--gold-accent))] hover:bg-[hsl(var(--gold-accent))] hover:text-[hsl(var(--navy-primary))] font-apple font-semibold px-6 py-2 rounded-full flex items-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4" />
              Schedule Free Call
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyCallButton;