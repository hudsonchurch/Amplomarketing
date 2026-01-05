import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Target, 
  Phone, 
  BarChart3, 
  Unlock, 
  Users, 
  Star,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { useState } from 'react';

interface ValueRevealPageProps {
  onContinue: () => void;
  onGetResources: () => void;
}

const ValueRevealPage = ({ onContinue, onGetResources }: ValueRevealPageProps) => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

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
              className="bg-[hsl(var(--gold-accent))] hover:bg-[hsl(var(--gold-accent))]/90 text-[hsl(var(--navy-primary))] font-apple font-bold text-xl px-12 py-6 rounded-full"
            >
              Ready to Grow? Continue Application →
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
                <blockquote className="text-lg md:text-xl font-apple text-[hsl(var(--text-primary))] mb-4 italic">
                  "Weekly calls, Slack access, live dashboards, month-to-month terms—they actually DO what other agencies promise. Revenue up 311% in 90 days."
                </blockquote>
                <div className="font-apple font-semibold text-[hsl(var(--text-primary))]">
                  — Sarah K., E-Commerce Founder
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA After Testimonial */}
          <div className="text-center">
            <Button 
              onClick={onContinue}
              variant="outline"
              className="border-2 border-[hsl(var(--gold-accent))] text-[hsl(var(--gold-accent))] hover:bg-[hsl(var(--gold-accent))] hover:text-[hsl(var(--navy-primary))] font-apple font-semibold text-lg px-10 py-4 rounded-full bg-transparent"
            >
              I Want Results Like This →
            </Button>
            <p className="font-apple text-white/70 mt-2 text-sm">
              Skip to application - 2 minutes to qualify
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
              className="bg-[hsl(var(--gold-accent))] hover:bg-[hsl(var(--gold-accent))]/90 text-[hsl(var(--navy-primary))] font-apple font-bold text-xl px-12 py-6 rounded-full text-lg"
            >
              Continue Application →
            </Button>
            
            <p className="font-apple text-white/80">
              2 minutes. No credit card.
            </p>
            
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