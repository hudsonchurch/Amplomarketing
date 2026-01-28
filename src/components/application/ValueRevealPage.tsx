import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Testimonial from '@/components/Testimonial';
import { 
  Target, 
  Phone, 
  BarChart3, 
  Unlock, 
  Users, 
  Star,
  ChevronDown,
  ChevronUp,
  Lock,
  Clock
} from 'lucide-react';
import { useState } from 'react';
import { trackCalendlyClick, newEventId } from '@/lib/metaPixel';

interface ValueRevealPageProps {
  onContinue: () => void;
  onGetResources: () => void;
  route?: string;
}

const ValueRevealPage = ({ onContinue, onGetResources, route }: ValueRevealPageProps) => {
  const handleScheduleCall = () => {
    trackCalendlyClick({
      content_name: 'Value Reveal CTA',
      location: 'ValueRevealPage'
    }, newEventId());
    
    // Open Calendly in a popup for better UX
    window.open('https://calendly.com/brody-amplomarketing/30min?month=2026-01', 'calendly', 'width=800,height=700,scrollbars=yes,resizable=yes');
  };
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [openStrategyFaq, setOpenStrategyFaq] = useState<number | null>(null);

  const valueElements = [
    {
      icon: Target,
      title: "Complete Marketing System",
      emoji: "🎯",
      description: "We handle everything:",
      bullets: [
        "Paid ads (Meta, Google, TikTok, LinkedIn)",
        "Organic growth (SEO, content, social media)",
        "Websites & funnels that actually convert",
        "Email & SMS that sell",
        "Creative that doesn't suck"
      ],
      footer: "One team owns it all. No finger-pointing."
    },
    {
      icon: Phone,
      title: "Weekly Calls + Daily Access",
      emoji: "📞",
      description: "We don't ghost you for weeks:",
      bullets: [
        "Weekly strategy calls (30-60 min)",
        "Direct Slack access (questions answered same-day)",
        "Email us anytime (no ticket systems)",
        "Need an extra call? Just ask."
      ],
      footer: "You work with senior strategists, not 23-year-old account managers."
    },
    {
      icon: BarChart3,
      title: "Full Transparency",
      emoji: "📊",
      description: "See exactly what we're doing:",
      bullets: [
        "Live dashboard (updated 24/7)",
        "Full access to all your accounts (you own them)",
        "Weekly performance updates",
        "No secrets. No black boxes."
      ],
      footer: "If we can't show you what we're doing, we shouldn't be doing it."
    },
    {
      icon: Unlock,
      title: "Month-to-Month (30-Day Out)",
      emoji: "🔓",
      description: "No prison contracts:",
      bullets: [
        "Cancel anytime with 30 days' notice",
        "No cancellation fees",
        "You keep everything (accounts, creative, data)",
        "We earn your business every month"
      ],
      footer: "If we don't deliver, you walk. Simple."
    },
    {
      icon: Users,
      title: "Senior Team (Not Juniors)",
      emoji: "👥",
      description: "Work with people who've actually done this:",
      bullets: [
        "$12.4M+ generated for clients",
        "30M+ views in last 90 days",
        "15+ years experience each",
        "You get experts, not interns"
      ],
      footer: "This isn't their first rodeo. You're their next win."
    }
  ];

  const faqItems = [
    {
      question: "What if this doesn't work?",
      answer: "30-day out clause. You can cancel with 30 days' notice. No penalties."
    },
    {
      question: "I've been burned before. Why are you different?",
      answer: "Month-to-month terms. Full transparency. You own everything. We prove it every 30 days."
    },
    {
      question: "How fast will I see results?",
      answer: "First leads in 2-3 weeks. Meaningful revenue lift in 60-90 days."
    },
    {
      question: "Do I get locked into a contract?",
      answer: "Never. Month-to-month only. Cancel anytime with 30 days' notice."
    },
    {
      question: "What's included in my retainer?",
      answer: "Everything above. Full-funnel marketing, weekly calls, live dashboards, senior team, month-to-month terms."
    }
  ];

  return (
    <div className="min-h-screen bg-[hsl(var(--navy-primary))] text-white">
      <div className="container-custom py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-apple font-bold text-white">
              Here's What You Get
            </h1>
            <p className="text-xl md:text-2xl font-apple text-[hsl(var(--gold-accent))]">
              No contracts. No BS. Just everything you need to grow.
            </p>
          </div>

          {/* Value Stack - 5 Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueElements.map((element, index) => (
              <Card key={index} className="bg-white text-[hsl(var(--text-primary))] border-0 shadow-lg hover:shadow-xl transition-all duration-200">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    {/* Icon & Title */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{element.emoji}</span>
                      <h3 className="text-xl font-apple font-bold text-[hsl(var(--text-primary))]">
                        {element.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="font-apple font-medium text-[hsl(var(--text-primary))] mb-3">
                      {element.description}
                    </p>

                    {/* Bullets */}
                    <div className="space-y-2">
                      {element.bullets.map((bullet, bulletIndex) => (
                        <div key={bulletIndex} className="flex items-start gap-2">
                          <span className="text-[hsl(var(--green-success))] mt-1">✅</span>
                          <span className="font-apple text-sm text-[hsl(var(--text-primary))]">
                            {bullet}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Footer */}
                    <p className="font-apple font-medium text-[hsl(var(--text-primary))] pt-3 border-t border-gray-100">
                      {element.footer}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA After Value Stack */}
          <div className="text-center">
            <Button 
              onClick={onContinue}
              className="bg-[hsl(var(--gold-accent))] hover:bg-[hsl(var(--gold-accent))]/90 text-[hsl(var(--navy-primary))] font-apple font-bold text-lg md:text-xl px-6 md:px-12 py-4 md:py-6 rounded-full"
            >
              <span className="hidden sm:inline">Ready to Grow? Continue Application →</span>
              <span className="sm:hidden">Continue Application →</span>
            </Button>
            <p className="font-apple text-white/80 mt-3">
              Takes 2 minutes. See if you qualify.
            </p>
          </div>

          {/* Testimonial */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white text-[hsl(var(--text-primary))] border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-[hsl(var(--gold-accent))] fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg md:text-xl font-apple text-[hsl(var(--text-primary))] mb-6 italic">
                  "Weekly calls, Slack access, live dashboards, month-to-month terms-they actually DO what other agencies promise. Revenue up 311% in 90 days."
                </blockquote>
                <Testimonial
                  quote=""
                  name="Sarah K."
                  title="E-Commerce Founder"
                  photoUrl="./images/testimonials/sarah-k.jpg"
                  initials="SK"
                  gradientFrom="from-blue-400"
                  gradientTo="to-purple-500"
                />
              </CardContent>
            </Card>
          </div>

          {/* CTA After Testimonial */}
          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={onContinue}
                variant="outline"
                className="border-2 border-[hsl(var(--gold-accent))] text-[hsl(var(--gold-accent))] hover:bg-[hsl(var(--gold-accent))] hover:text-[hsl(var(--navy-primary))] font-apple font-semibold text-lg px-10 py-4 rounded-full bg-transparent"
              >
                I Want Results Like This →
              </Button>
              <Button 
                onClick={handleScheduleCall}
                className="bg-white text-[hsl(var(--navy-primary))] hover:bg-white/90 font-apple font-semibold text-lg px-10 py-4 rounded-full flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Skip to Strategy Call
              </Button>
            </div>
            <p className="font-apple text-white/70 text-sm">
              Apply first (2 min) or schedule call directly
            </p>
          </div>

          {/* Investment */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-apple font-bold text-white">
              Investment: $1,000–$10,000/month
            </h2>
            <p className="text-lg md:text-xl font-apple text-white max-w-3xl mx-auto">
              Depends on your business size and what you need. On your free strategy call, we'll give you exact pricing.
            </p>
            <p className="text-lg font-apple text-white">
              <span className="font-semibold">Average ROI:</span> 127% revenue increase in 90 days.
            </p>

            {/* Scholarship Note */}
            <div className="bg-[hsl(var(--gold-accent))] text-[hsl(var(--navy-primary))] p-6 rounded-2xl max-w-2xl mx-auto">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">💡</span>
                <span className="font-apple font-semibold">Early-stage or bootstrapped?</span>
              </div>
              <p className="font-apple">
                You might qualify for 50% off (first 3 months). We'll tell you when you apply.
              </p>
            </div>
            
            {/* CTA After Investment */}
            <div className="mt-8">
              <Button 
                onClick={onContinue}
                className="bg-[hsl(var(--gold-accent))] hover:bg-[hsl(var(--gold-accent))]/90 text-[hsl(var(--navy-primary))] font-apple font-bold text-lg px-10 py-5 rounded-full"
              >
                Get My Custom Pricing →
              </Button>
              <p className="font-apple text-white/80 mt-2">
                Free strategy call included
              </p>
            </div>
          </div>

          {/* Urgency */}
          <div className="bg-[hsl(var(--red-urgency))] text-white p-8 rounded-2xl text-center max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="text-2xl">⏰</span>
                <span className="font-apple font-bold text-xl">Only 5 partnerships left for Q1</span>
              </div>
              <p className="font-apple">Current applications: 18</p>
            </div>
          </div>

          {/* Quick Questions FAQ */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-apple font-bold text-white text-center mb-8">
              Quick Questions
            </h3>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <Card key={index} className="bg-white/10 border-white/20 text-white">
                  <CardContent className="p-0">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <span className="font-apple font-medium text-lg">{item.question}</span>
                      {expandedFaq === index ? (
                        <ChevronUp className="w-5 h-5 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 flex-shrink-0" />
                      )}
                    </button>
                    {expandedFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="font-apple text-white/90">{item.answer}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* CTA After FAQ */}
            <div className="text-center mt-8">
              <Button 
                onClick={onContinue}
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white hover:text-[hsl(var(--navy-primary))] font-apple font-medium text-lg px-8 py-4 rounded-full bg-transparent"
              >
                Questions Answered? Let's Continue →
              </Button>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-apple font-bold text-white">
              Ready?
            </h2>
            
            <Button 
              onClick={onContinue}
              className="bg-[hsl(var(--gold-accent))] hover:bg-[hsl(var(--gold-accent))]/90 text-[hsl(var(--navy-primary))] font-apple font-bold text-lg md:text-xl px-6 md:px-12 py-4 md:py-6 rounded-full"
            >
              <span className="hidden sm:inline">Continue Application →</span>
              <span className="sm:hidden">Continue →</span>
            </Button>
            
            <p className="font-apple text-white/80">
              2 minutes. No credit card.
            </p>
          </div>
          
          {/* Qualified Content - Only for qualified routes */}
          {route === 'qualified' && (
            <div className="bg-white py-16">
              <div className="container-custom">
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
                      className="btn-primary text-xl md:text-2xl px-6 md:px-16 py-6 mb-6"
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
                            onClick={() => setOpenStrategyFaq(openStrategyFaq === index ? null : index)}
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
                      ))}
                    </div>
                  </div>

                  {/* Trust Indicators */}
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
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

                  {/* Final Statement */}
                  <div className="text-center mb-8">
                    <p className="text-lg font-bold text-black mb-6">
                      Only 5 spots left. 18 applications in queue.
                      <br />If you're serious, schedule before they're gone.
                    </p>
                  </div>

                  {/* Final CTA */}
                  <div className="text-center">
                    <Button
                      onClick={handleScheduleCall}
                      className="btn-primary px-6 md:px-12 py-4 text-base md:text-lg mb-4"
                    >
                      Schedule My Strategy Call →
                    </Button>
                    <p className="text-sm text-gray-500">
                      Check your email for the calendar link
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className="text-center mt-8">
            <button 
              onClick={onGetResources}
              className="font-apple text-white/80 hover:text-white underline transition-colors"
            >
              Not ready yet? Get free resources instead
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueRevealPage;