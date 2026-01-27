import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { trackSchedule, trackContact, newEventId, metaTrackCustom } from '@/lib/metaPixel';

const Contact = () => {
  useEffect(() => {
    // Page view is handled by MetaPageViewTracker
  }, []);
  
  const handleScheduleCall = () => {
    trackSchedule({
      schedule_stage: 'click',
      content_name: 'Schedule Free Call - Contact Page',
      method: 'calendly'
    }, newEventId());
    
    window.open('https://calendly.com/brody-amplomarketing/30min?month=2026-01', 'calendly', 'width=800,height=700,scrollbars=yes,resizable=yes');
  };
  
  const handleEmailClick = () => {
    trackContact({
      method: 'email',
      content_name: 'Contact Email Click'
    }, newEventId());
  };
  
  const handlePhoneClick = () => {
    trackContact({
      method: 'phone',
      content_name: 'Contact Phone Click'
    }, newEventId());
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Ready to grow your business? Let's talk.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Schedule Call */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">
                Schedule a Strategy Call
              </h3>
              <p className="text-gray-600 mb-6">
                Free 30-minute strategy session. We'll audit your marketing and build a custom roadmap.
              </p>
              <Button
                onClick={handleScheduleCall}
                className="btn-primary px-8 py-4 text-lg"
              >
                Schedule Free Call
              </Button>
            </div>

            {/* Email */}
            <div className="text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">
                Send Us an Email
              </h3>
              <p className="text-gray-600 mb-6">
                Have a specific question? Drop us a line and we'll get back to you within 24 hours.
              </p>
              <a 
                href="mailto:hello@amplomarketing.com"
                onClick={handleEmailClick}
                className="inline-block bg-navy hover:bg-navy/90 text-white font-bold px-8 py-4 rounded-full text-lg transition-colors"
              >
                hello@amplomarketing.com
              </a>
            </div>
          </div>

          {/* FAQ Preview */}
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-black mb-4">
              Have Questions First?
            </h3>
            <p className="text-gray-600 mb-6">
              Check out our comprehensive FAQ page for answers to all your questions.
            </p>
            <a 
              href="#/faq"
              onClick={() => metaTrackCustom('ButtonClick', {
                button_name: 'View FAQ',
                location: 'ContactPage',
                destination: '/faq'
              }, newEventId())}
              className="inline-block bg-gold hover:bg-gold/90 text-white font-bold px-8 py-4 rounded-full text-lg transition-colors"
            >
              View FAQ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;