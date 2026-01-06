import { Button } from '@/components/ui/button';
import { CheckCircle, Star, Clock, Mail, Phone } from 'lucide-react';
import Testimonial from '@/components/Testimonial';

interface ThankYouApprovedProps {
  businessModel: string;
}

const ThankYouApproved = ({ businessModel }: ThankYouApprovedProps) => {
  const handleScheduleCall = () => {
    // Open Calendly in a popup for better UX
    window.open('https://calendly.com/hudson-amplomarketing/30min', 'calendly', 'width=800,height=700,scrollbars=yes,resizable=yes');
  };

  const handleEmailRedirect = () => {
    window.open('mailto:', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Confetti Animation */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="animate-pulse">
          {/* Simple confetti effect */}
          <div className="absolute top-10 left-10 w-2 h-2 bg-gold rounded-full animate-bounce"></div>
          <div className="absolute top-20 right-20 w-2 h-2 bg-gold rounded-full animate-bounce delay-100"></div>
          <div className="absolute top-32 left-1/3 w-2 h-2 bg-gold rounded-full animate-bounce delay-200"></div>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-black mb-6">
            🎉 You're Approved!
          </h1>
          
          <p className="text-xl md:text-2xl text-black mb-12">
            Welcome to the Amplo family. Here's what happens next.
          </p>

          {/* Next Steps */}
          <div className="text-left max-w-3xl mx-auto mb-16">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">
                    STEP 1: Check Your Email (Within 4 Hours)
                  </h3>
                  <p className="text-black mb-2">
                    We're reviewing your application right now. You'll get an email from our team with:
                  </p>
                  <ul className="text-black space-y-1 ml-4">
                    <li>• Confirmation that you're approved</li>
                    <li>• Calendar link to schedule your free strategy call</li>
                    <li>• Short video explaining what to expect on the call</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">
                    STEP 2: Schedule Your Strategy Call (45-60 Min)
                  </h3>
                  <p className="text-black mb-2">On this call, we'll:</p>
                  <ul className="text-black space-y-1 ml-4">
                    <li>• Audit your current marketing (what's broken, what's working)</li>
                    <li>• Identify your biggest growth bottlenecks</li>
                    <li>• Build a custom 90-day roadmap just for you</li>
                    <li>• Give you exact pricing based on your goals</li>
                    <li>• Answer all your questions</li>
                  </ul>
                  <p className="text-black mt-2 font-semibold">No pitch. No pressure. Just real talk.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">
                    STEP 3: You Decide
                  </h3>
                  <p className="text-black">After the call, you decide if we're a fit.</p>
                  <ul className="text-black space-y-1 ml-4 mt-2">
                    <li>• If YES → We start in 7-10 days</li>
                    <li>• If NO → No hard feelings</li>
                    <li>• If MAYBE → We'll follow up in a week (but won't hound you)</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">
                    STEP 4: Onboarding & Launch (If You Move Forward)
                  </h3>
                  <ul className="text-black space-y-1 ml-4">
                    <li>• We send contract + onboarding docs</li>
                    <li>• You get access to our systems (Slack, dashboards, project management)</li>
                    <li>• Week 1: Strategy finalization + account setup</li>
                    <li>• Week 2: Campaigns launch</li>
                  </ul>
                </div>
              </div>
            </div>
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
              You're approved, but spots are filling fast. If you want to guarantee your spot, schedule your call ASAP.
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

export default ThankYouApproved;