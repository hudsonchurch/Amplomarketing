import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const StickyCallButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScheduleCall = () => {
    // Open Calendly in a popup window for better UX
    window.open('https://calendly.com/hudson-amplomarketing/30min', 'calendly', 'width=800,height=700,scrollbars=yes,resizable=yes');
  };

  const handleApplyNow = () => {
    navigate('/apply');
  };

  // Only show Apply Now button on homepage
  const showApplyButton = location.pathname === '/';

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

          {/* Right side - Buttons */}
          <div className="flex items-center gap-3">
            {showApplyButton && (
              <Button
                onClick={handleApplyNow}
                variant="outline"
                className="border-[hsl(var(--gold-accent))] text-[hsl(var(--gold-accent))] hover:bg-[hsl(var(--gold-accent))] hover:text-[hsl(var(--navy-primary))] font-apple font-semibold px-4 py-2 rounded-full text-sm bg-transparent"
              >
                Apply Now
              </Button>
            )}
            <Button
              onClick={handleScheduleCall}
              className="bg-[hsl(var(--gold-accent))] hover:bg-[hsl(var(--gold-accent))]/90 text-[hsl(var(--navy-primary))] font-apple font-semibold px-6 py-2 rounded-full flex items-center gap-2 text-sm"
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