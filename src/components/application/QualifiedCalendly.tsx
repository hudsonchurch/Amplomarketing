import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Star, Clock, Lock } from 'lucide-react';
import Testimonial from '@/components/Testimonial';
import { trackCalendlyClick, metaTrackCustom, newEventId } from '@/lib/metaPixel';

const QualifiedCalendly = () => {
  const [openStrategyFaq, setOpenStrategyFaq] = useState<number | null>(null);
  
  const handleScheduleCall = () => {
    trackCalendlyClick({
      content_name: 'Qualified CTA',
      location: 'QualifiedCalendly'
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
              You Qualify! Let's Build Your Revenue Engine
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Based on your answers, you're a perfect fit for our full-service marketing partnership. Let's schedule your free strategy call to get started.
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
              30-minute call • No pressure • Custom roadmap included
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
                  <h4 className="font-bold text-black mb-2">Strategy Session</h4>
                  <p className="text-gray-600 text-sm">
                    We'll audit your current marketing, identify bottlenecks, and build a custom 90-day roadmap.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gold text-white rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-black mb-2">Custom Proposal</h4>
                  <p className="text-gray-600 text-sm">
                    We'll create a tailored proposal with exact pricing based on your goals and budget.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gold text-white rounded-full flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-black mb-2">Partnership Decision</h4>
                  <p className="text-gray-600 text-sm">
                    You decide if we're the right fit. No pressure, no long-term contracts.
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

          {/* Strategy Call FAQ */}
          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold text-black mb-6">What to Expect on Your Strategy Call</h3>
            <p className="text-gray-600 mb-8">Here's what people usually ask before they schedule.</p>
            
            <div className="space-y-4 text-left">
              {[
                {
                  question: "Is this a sales pitch?",
                  answer: "Nope.\n\nIt's a strategy session.\n\nWe'll audit your marketing, identify what's broken, and build a custom 90-day roadmap.\n\nYou'll walk away with actionable insights whether you hire us or not.\n\nIf we're a fit, great. If not, we'll tell you honestly and might refer you elsewhere.\n\nNo pitch. No pressure. Just real talk."
                },
                {
                  question: "How long is the call?",
                  answer: "45-60 minutes.\n\nWe don't rush. We want to actually understand your business, not just check boxes."
                },
                {
                  question: "What will we cover?",
                  answer: "On the call, we'll:\n✅ Audit your current marketing (what's working, what's broken)\n✅ Identify your biggest growth bottleneck\n✅ Build a custom 90-day growth roadmap\n✅ Give you exact pricing based on your goals\n✅ Answer all your questions\n\nYou'll leave knowing exactly what needs to happen to scale regardless of who does it."
                },
                {
                  question: "Do I need to prepare anything?",
                  answer: "Not required, but helpful:\n✅ Access to your ad accounts (if you have them)\n✅ Rough idea of your current revenue\n✅ Your top 1-2 goals for the next 90 days\n✅ Any specific challenges you're facing\n\nBut honestly? Just show up. We'll figure it out together."
                },
                {
                  question: "What happens after the call?",
                  answer: "You decide.\n\nIf you want to move forward:\n• We send contract + onboarding docs\n• You get access to our systems (Slack, dashboards)\n• We start in 7-10 days\n\nIf you don't want to move forward:\n• No hard feelings (seriously)\n• You keep the strategy we built for you\n• We might refer you to someone better suited\n\nIf you need time to think:\n• We'll follow up in a week\n• We won't hound you"
                },
                {
                  question: "Is there any obligation to hire you after the call?",
                  answer: "Zero.\n\nThe strategy call is free. No strings attached.\n\nIf we're a fit, you'll know. If we're not, you'll know.\n\nWe only want partners who are excited to work with us not people we closed."
                }
              ].map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    className="w-full text-left p-4 hover:bg-gray-100 transition-colors"
                    onClick={() => {
                      metaTrackCustom('FAQInteraction', {
                        question: faq.question,
                        source: 'QualifiedPage'
                      }, newEventId());
                      setOpenStrategyFaq(openStrategyFaq === index ? null : index);
                    }}
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-bold text-black pr-4">{faq.question}</h4>
                      <span className="text-xl text-gray-400">{openStrategyFaq === index ? '-' : '+'}</span>
                    </div>
                  </button>
                  {openStrategyFaq === index && (
                    <div className="px-4 pb-4">
                      <div className="text-gray-700 whitespace-pre-line text-sm">{faq.answer}</div>
                    </div>
                  )}
                </div>
              ))
            }
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

export default QualifiedCalendly;