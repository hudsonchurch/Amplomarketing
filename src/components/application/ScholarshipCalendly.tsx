import { Button } from '@/components/ui/button';
import { CheckCircle, Star, Clock, Lock } from 'lucide-react';
import Testimonial from '@/components/Testimonial';
import { trackCalendlyClick, newEventId } from '@/lib/metaPixel';

const ScholarshipCalendly = () => {
  const handleScheduleCall = () => {
    // Track Schedule event
    trackCalendlyClick({
      content_name: 'Scholarship CTA',
      location: 'ScholarshipCalendly'
    }, newEventId());
    
    // Open Calendly in a popup for better UX
    window.open('https://calendly.com/brody-amplomarketing/30min?month=2026-01', 'calendly', 'width=800,height=700,scrollbars=yes,resizable=yes');
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              You Might Qualify for Our Founder's Scholarship
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Let's get you started with a free strategy call to see if you qualify for 50% off your first 3 months.
            </p>
          </div>

          {/* Main CTA */}
          <div className="mb-16">
            <Button
              onClick={handleScheduleCall}
              className="btn-primary text-2xl px-16 py-6 mb-6"
            >
              Schedule Your Free Strategy Call
            </Button>
            <p className="text-sm text-gray-500">
              30-minute call • No pressure • Free strategy session
            </p>
          </div>

          {/* What Happens Next */}
          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold text-black mb-6">What Happens Next:</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gold text-white rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-black mb-2">Book Your Call</h4>
                  <p className="text-gray-600 text-sm">
                    Choose a time that works for you. We'll send calendar details immediately.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gold text-white rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-black mb-2">Strategy Session</h4>
                  <p className="text-gray-600 text-sm">
                    We'll audit your marketing, identify bottlenecks, and build a custom roadmap.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gold text-white rounded-full flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-black mb-2">Scholarship Decision</h4>
                  <p className="text-gray-600 text-sm">
                    If you qualify, we'll offer 50% off your first 3 months. No pressure.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 mb-12 max-w-2xl mx-auto">
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

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Your Info is Safe */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="w-5 h-5 text-gray-600" />
                <span className="font-bold text-black">Your info is safe.</span>
              </div>
              <div className="space-y-1 text-sm text-gray-600">
                <p>We won't spam you or sell your data.</p>
                <p>We'll contact you once with our decision.</p>
              </div>
            </div>

            {/* Limited Partnerships */}
            <div className="bg-gold text-white p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5" />
                <span className="font-bold">Only 5 Partnerships Left for Q1</span>
              </div>
              <p className="text-sm">
                We limit partnerships to ensure quality. Don't wait if you're serious about growth.
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <Button
              onClick={handleScheduleCall}
              className="btn-primary px-12 py-4 text-lg"
            >
              Schedule Your Free Strategy Call
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipCalendly;