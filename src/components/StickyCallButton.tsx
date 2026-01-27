import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { trackCalendlyClick, newEventId, metaTrackCustom } from '@/lib/metaPixel';
const StickyCallButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleScheduleCall = () => {
    trackCalendlyClick({
      content_name: 'Sticky Bar CTA',
      location: 'StickyCallButton'
    }, newEventId());
    
    // Open Calendly in a popup window for better UX
    window.open('https://calendly.com/brody-amplomarketing/30min?month=2026-01', 'calendly', 'width=800,height=700,scrollbars=yes,resizable=yes');
  };

  // State to track if we're on homepage
  const [isHomepage, setIsHomepage] = useState(true);

  // Check if we're on homepage (no hash or root hash)
  useEffect(() => {
    const checkHomepage = () => {
      const hash = window.location.hash;
      // Show Apply Now button only on homepage (not on /apply page)
      const isOnHomepage = !hash || hash === '#/' || hash === '#';
      const isOnApplyPage = hash === '#/apply';
      setIsHomepage(isOnHomepage && !isOnApplyPage);
    };

    // Check initially
    checkHomepage();

    // Listen for hash changes
    window.addEventListener('hashchange', checkHomepage);
    return () => {
      window.removeEventListener('hashchange', checkHomepage);
    };
  }, []);
  return <div className="fixed top-0 left-0 right-0 z-50 bg-[hsl(var(--navy-primary))] border-b border-[hsl(var(--gold-accent))]/20 shadow-lg">
      <div className="container-custom py-3 relative">
        <div className="flex items-center justify-between">
          {/* Left side - Logo/Brand */}
          <div className="flex items-center gap-2">
            <span className="text-[hsl(var(--gold-accent))] font-apple font-bold text-lg">
              AMPLO
            </span>
          </div>

          {/* Center - Apply Now Button (only on homepage) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
            {isHomepage && (
              <button
                onClick={() => {
                  metaTrackCustom('ButtonClick', {
                    button_name: 'Apply Now',
                    location: 'StickyBar',
                    destination: '/apply'
                  }, newEventId());
                  window.location.href = window.location.origin + window.location.pathname + '#/apply';
                }}
                className="bg-[hsl(var(--gold-accent))] hover:bg-[hsl(var(--gold-accent))]/90 text-[hsl(var(--navy-primary))] font-apple font-bold px-6 py-2 rounded-full text-sm transition-colors"
              >
                Apply Now
              </button>
            )}
          </div>
          
          {/* Mobile Apply Now Button */}
          <div className="md:hidden">
            {isHomepage && (
              <button
                onClick={() => {
                  metaTrackCustom('ButtonClick', {
                    button_name: 'Apply Now',
                    location: 'StickyBar Mobile',
                    destination: '/apply'
                  }, newEventId());
                  window.location.href = window.location.origin + window.location.pathname + '#/apply';
                }}
                className="bg-[hsl(var(--gold-accent))] hover:bg-[hsl(var(--gold-accent))]/90 text-[hsl(var(--navy-primary))] font-apple font-bold px-4 py-1 rounded-full text-xs transition-colors mr-2"
              >
                Apply
              </button>
            )}
          </div>

          {/* Right side - Contact + Schedule Button */}
          <div className="flex items-center gap-3">
            <a href="#/contact" className="text-white hover:text-[hsl(var(--gold-accent))] font-apple font-medium text-sm transition-colors">
              Contact
            </a>
            <Button onClick={handleScheduleCall} className="bg-transparent border-2 border-[hsl(var(--gold-accent))] text-[hsl(var(--gold-accent))] hover:bg-[hsl(var(--gold-accent))] hover:text-[hsl(var(--navy-primary))] font-apple font-semibold px-6 py-2 rounded-full flex items-center gap-2 text-sm">
              <Phone className="w-4 h-4" />
              Schedule Free Call
            </Button>
          </div>
        </div>
      </div>
    </div>;
};
export default StickyCallButton;