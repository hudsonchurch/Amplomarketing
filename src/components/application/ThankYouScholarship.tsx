import { Button } from '@/components/ui/button';
import { CheckCircle, Star, Phone } from 'lucide-react';
import Testimonial from '@/components/Testimonial';
import { trackCalendlyClick, newEventId } from '@/lib/metaPixel';

const ThankYouScholarship = () => {
  const handleScheduleCall = () => {
    trackCalendlyClick({
      content_name: 'Thank You Scholarship CTA',
      location: 'ThankYouScholarship'
    }, newEventId());
    
    // Open Calendly in a popup for better UX
    window.open('https://calendly.com/brody-amplomarketing/30min?month=2026-01', 'calendly', 'width=800,height=700,scrollbars=yes,resizable=yes');
  };

  const handleEmailRedirect = () => {
    window.open('mailto:', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-3xl md:text-5xl font-montserrat font-bold text-black mb-6">
            Application Received - Under Review for Scholarship
          </h1>
          
          <div className="text-lg md:text-xl text-black mb-12 max-w-2xl mx-auto">
            <p className="mb-6">Thanks for applying!</p>
            <p>Here's what happens next:</p>
          </div>

          {/* Next Steps */}
          <div className="text-left max-w-3xl mx-auto mb-16">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-black">
                    <strong>We'll review your application + scholarship request within 24-48 hours</strong>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-black">
                    <strong>If you qualify for the scholarship:</strong><br />
                    We'll email you with confirmation + calendar link for your strategy call
                  </p>
                  
                  {/* Second Schedule Call Button */}
                  <div className="mt-4">
                    <Button
                      onClick={handleScheduleCall}
                      className="btn-primary px-6 py-2 text-sm"
                    >
                      Or Schedule Call Now
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-black">
                    <strong>If you DON'T qualify for the scholarship (but you're still a fit):</strong><br />
                    We'll email you with standard partnership pricing + calendar link
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-black">
                    <strong>If you're not a fit right now:</strong><br />
                    We'll let you know honestly and might refer you to someone better suited
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gold/10 border border-gold rounded-lg p-6 mb-16">
            <p className="text-xl font-bold text-black">
              Check your email in the next 24-48 hours.
            </p>
          </div>

          {/* What to Do While You Wait */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-black mb-8">
              In the Meantime, Get a Head Start
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Button variant="outline" className="p-6 h-auto flex flex-col items-center text-center">
                <div className="font-bold mb-2">Watch: How Amplo Builds Revenue Engines</div>
                <div className="text-sm text-black">(3 Min Video)</div>
              </Button>
              
              <Button variant="outline" className="p-6 h-auto flex flex-col items-center text-center">
                <div className="font-bold mb-2">Download: Case Study</div>
                <div className="text-sm text-black">How We Took Client From $45K to $185K/Mo</div>
              </Button>
              
              <Button variant="outline" className="p-6 h-auto flex flex-col items-center text-center">
                <div className="font-bold mb-2">Read: Our 90-Day Growth Blueprint</div>
                <div className="text-sm text-black">(Free Guide)</div>
              </Button>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 mb-16 max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold fill-current" />
              ))}
            </div>
            <blockquote className="text-lg text-black mb-6 italic">
              "The strategy call was incredible. They asked questions I'd never even thought about. 
              By the end, I knew EXACTLY what was broken in my business and how to fix it. I signed up on the spot."
            </blockquote>
            <Testimonial
              quote=""
              name="Mike T."
              title="SaaS CEO"
              result="(Revenue: $80K/mo → $240K/mo in 120 days)"
              photoUrl="./images/testimonials/mike-t.jpg"
              initials="MT"
              gradientFrom="from-green-400"
              gradientTo="to-blue-500"
            />
          </div>

          {/* Urgency Reminder */}
          <div className="bg-gold text-white p-8 rounded-lg mb-8">
            <div className="text-2xl font-bold mb-4">
              ⏰ Reminder: Only 5 Partnerships Left for Q1
            </div>
            <p className="mb-4">
              Scholarship or not, spots are filling fast. We'll prioritize your application review.
            </p>
            <p className="text-sm">[Current applications in queue: 18]</p>
          </div>

          {/* Final CTA */}
          <div className="space-y-4">
            <Button onClick={handleScheduleCall} className="btn-primary text-xl px-12 py-6 w-full flex items-center justify-center gap-3">
              <Phone className="w-6 h-6" />
              Schedule Your Free Strategy Call →
            </Button>
            <p className="text-sm text-gray-600 text-center">
              Or <button onClick={handleEmailRedirect} className="text-[hsl(var(--gold-accent))] hover:underline">check your email</button> to schedule there
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouScholarship;