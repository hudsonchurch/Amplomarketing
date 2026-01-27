import { useState, useEffect } from 'react';
import { metaTrackCustom, newEventId } from '@/lib/metaPixel';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const FAQ = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  useEffect(() => {
    // Page view is handled by MetaPageViewTracker
  }, []);

  const faqs = [
    {
      question: "How are you different from every other agency that says they're 'different'?",
      answer: `Fair question. Every agency claims they're unique.

Here's how we actually are:
✅ Month-to-month only (no 6-12 month contracts)
✅ 30-day out clause (walk if we don't perform)
✅ You own everything (accounts, creative, data-all yours)
✅ Full-funnel accountability (we're responsible for the entire journey, not just ads)
✅ Real-time transparency (live dashboards, weekly calls, direct Slack access)

Most agencies lock you in because they know they're not that good.
We earn your business every 30 days by actually delivering.`
    },
    {
      question: "What if this doesn't work for my business?",
      answer: `Then you leave.

We have a 30-day out clause. If you're not seeing progress, value, or results-cancel with 30 days' notice. No penalties. No fees.

Why?
Because we only want to work with businesses we're actually helping.

If we're not delivering, keeping your money would be... well, scammy.
We're allergic to scam.`
    },
    {
      question: "I've been burned by 2-3 agencies already. Why should I trust you?",
      answer: `You shouldn't. Not yet.

Don't trust our promises. Trust our proof.

Here's what we suggest:
• Read our case studies (real businesses, real numbers)
• Watch our video testimonials
• Schedule a free strategy call (we'll audit your business, no pitch)
• (Optional) We'll connect you with 2-3 current partners in your industry-ask them anything

Then make a rational decision based on evidence.
We're not asking for a leap of faith. We're asking you to look at the data.`
    },
    {
      question: "How fast will I see results?",
      answer: `Depends on your starting point.

Typical timeline:
• Week 1-2: Strategy finalized, campaigns launched
• Week 3-4: First qualified leads arrive
• Month 2: Lead flow becomes predictable
• Month 3: Meaningful revenue lift (most partners see 50-150% growth here)
• Month 4+: Scale and compound

Real talk:
We're not selling "10X in 30 days" BS.
We're building a revenue engine. Engines take time to install and optimize.
But once it's running? It prints.

Average result: 127% revenue increase in 90 days.`
    },
    {
      question: "What's the investment? Can I afford this?",
      answer: `Our retainers range from $1,000-$10,000/month depending on:
• Your business size & revenue
• Scope of services needed
• Your industry complexity
• How fast you want to scale

Is it worth it?
Our average partner sees 127% revenue increase in 90 days.

Even if you're conservative and only see a 50% lift:
$100K/month → $150K/month
That's $50K in new monthly revenue
Your investment: ~$15K over 3 months
ROI: 3.3x

Not the cheapest. But the best ROI.

Strategy calls are free. We'll give you exact pricing based on your needs-zero pressure.

Can't afford full investment yet?
Apply for a Founder's Scholarship (50% off first 3 months). Only 2 per quarter.`
    },
    {
      question: "Do I get locked into a long contract?",
      answer: `Never.

Month-to-month only. Cancel with 30 days' notice. No penalties. No fees.

If you cancel:
• You keep all accounts, creative, data, systems
• We'll do a handoff call to ensure smooth transition
• No hard feelings

Why no contracts?
Because long contracts are what agencies use when they know they're not that good.

We're confident. If we're delivering, you'll stay. If we're not, you shouldn't have to.`
    },
    {
      question: "Will I actually know what you're doing? Or is it a black box?",
      answer: `You'll know obsessively.

✅ Live dashboard access (see performance 24/7)
✅ Weekly strategy calls (30-60 min deep-dives)
✅ Direct Slack access (questions answered in hours, not days)
✅ Monthly performance reviews (comprehensive breakdowns)
✅ Full account access (you have admin to everything)

Most agencies keep you in the dark because they don't want you to see how little they're doing.
We want you under the hood.

If we're not comfortable showing you what we're doing, we shouldn't be doing it.`
    },
    {
      question: "What if I'm in a 'weird' or 'difficult' niche?",
      answer: `We love weird.

Niche businesses often have the best ROI because:
• Competitors use generic strategies
• Customer intent is crystal clear
• Less noise to break through

We've worked with:
• Industrial B2B (laser cutting services)
• Luxury pet accessories ($400 dog beds)
• B2B SaaS for dental practices
• Local HVAC ("everyone says it's too competitive")
• E-commerce selling... let's just say "adult wellness products"

Our process:
• Week 1: Deep market research (your customers, competitors, forums)
• Week 2: Craft positioning using their language
• Week 3: Test messaging until we find winners

If you have customers, we can reach them.`
    },
    {
      question: "Do you work with businesses outside the U.S.?",
      answer: `Yes-if you're selling to English-speaking markets (U.S., Canada, UK, Australia, New Zealand).

Why English-speaking?
Because copy is 60% of conversion.

We write killer direct-response copy (belief-shifting, objection-handling, psychology-driven). That requires native-level language understanding.

If you're selling in non-English markets, we're probably not the best fit.`
    },
    {
      question: "What if I just need ONE service (like just ads)?",
      answer: `Then we're not a fit.

We don't do à la carte.

Why?
We've seen too many businesses waste money on "just ads" when the real problem was:
• Landing page (conversion issue)
• Offer (positioning issue)
• Follow-up (nurture issue)

Example:
Client wanted "just Meta ads." We ran them. Got traffic. Zero conversions.
Why? Landing page was broken.

If we'd been "just the ads guy," we'd have shrugged.
Instead, we rebuilt the page, fixed the offer, implemented email follow-up-and tripled ROAS.

Full-funnel accountability = no finger-pointing.

If you want someone to "run ads and send reports," hire a freelancer. Save money.
But if you want someone to own your growth? We're your people.`
    },
    // Strategy Call FAQ
    {
      question: "Is this a sales pitch?",
      answer: `Nope.

It's a strategy session.

We'll audit your marketing, identify what's broken, and build a custom 90-day roadmap.

You'll walk away with actionable insights whether you hire us or not.

If we're a fit, great. If not, we'll tell you honestly and might refer you elsewhere.

No pitch. No pressure. Just real talk.`
    },
    {
      question: "How long is the call?",
      answer: `45-60 minutes.

We don't rush. We want to actually understand your business, not just check boxes.`
    },
    {
      question: "What will we cover on the strategy call?",
      answer: `On the call, we'll:
✅ Audit your current marketing (what's working, what's broken)
✅ Identify your biggest growth bottleneck
✅ Build a custom 90-day growth roadmap
✅ Give you exact pricing based on your goals
✅ Answer all your questions

You'll leave knowing exactly what needs to happen to scale regardless of who does it.`
    },
    {
      question: "Do I need to prepare anything for the call?",
      answer: `Not required, but helpful:
✅ Access to your ad accounts (if you have them)
✅ Rough idea of your current revenue
✅ Your top 1-2 goals for the next 90 days
✅ Any specific challenges you're facing

But honestly? Just show up. We'll figure it out together.`
    },
    {
      question: "What happens after the call?",
      answer: `You decide.

If you want to move forward:
• We send contract + onboarding docs
• You get access to our systems (Slack, dashboards)
• We start in 7-10 days

If you don't want to move forward:
• No hard feelings (seriously)
• You keep the strategy we built for you
• We might refer you to someone better suited

If you need time to think:
• We'll follow up in a week
• We won't hound you`
    },
    {
      question: "Is there any obligation to hire you after the call?",
      answer: `Zero.

The strategy call is free. No strings attached.

If we're a fit, you'll know. If we're not, you'll know.

We only want partners who are excited to work with us not people we closed.`
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              No fluff. Just straight answers to everything you want to know.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4 mb-12">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  className="w-full text-left p-6 hover:bg-gray-50 transition-colors"
                  onClick={() => {
                    metaTrackCustom('FAQInteraction', {
                      question: faq.question,
                      source: 'FAQPage'
                    }, newEventId());
                    setOpenFaq(openFaq === index ? null : index);
                  }}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold text-black pr-4">{faq.question}</h3>
                    <span className="text-2xl text-gray-400">{openFaq === index ? '-' : '+'}</span>
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <div className="text-gray-700 whitespace-pre-line">{faq.answer}</div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Final Statement */}
          <div className="text-center mb-8">
            <p className="text-xl font-bold text-black mb-6">
              "Still skeptical? Good. You should be.
              <br />That's exactly why we built Amplo differently."
            </p>
            <Button 
              onClick={() => navigate('/apply')} 
              className="btn-primary px-12 py-4 text-lg"
            >
              Apply Now - See If You Qualify →
            </Button>
          </div>

          {/* Back to Home */}
          <div className="text-center">
            <button
              onClick={() => navigate('/')}
              className="text-gray-600 hover:text-black underline"
            >
              ← Back to Homepage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;