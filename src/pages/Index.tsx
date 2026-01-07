import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import CountdownTimer from '@/components/CountdownTimer';
import Testimonial from '@/components/Testimonial';
import { CheckCircle, X, AlertTriangle, Target, DollarSign, TrendingUp, Users, Star, Play, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Index = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const goToApplication = () => {
    navigate('/apply');
  };
  const scrollToProof = () => {
    const element = document.getElementById('proof');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <div className="min-h-screen bg-white pt-16">
      <Navigation />
      
      {/* HERO SECTION */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white">
        <div className="container-custom">
          <div className="text-center space-y-8 md:space-y-12 max-w-5xl mx-auto animate-fade-in">
            {/* DEBUG: Files Updated Indicator */}
            
            {/* Headline */}
            <h1 className="text-hero font-apple text-[hsl(var(--text-primary))] leading-[1.05]"> Tired of Agencies That Pocket Your Retainer <span className="text-[hsl(var(--gold-accent))]"> & </span> Deliver Mediocre Results?</h1>
            
            {/* Subheadline */}
            <p className="text-subheadline font-apple max-w-4xl mx-auto">Most marketing agencies collect their $5K/month and hope you don't notice the leads never come... We're not most agencies. Full-funnel managment.Real growth. Month-to-month. You walk if we don't deliver.</p>
              
            {/* Trust Stack */}
            <div className="space-y-4 text-left max-w-3xl mx-auto">
              <div className="flex items-center gap-4">
                <CheckCircle className="text-[hsl(var(--green-success))] w-6 h-6 flex-shrink-0" />
                <span className="font-semibold text-[rgb(0,0,0)]"><span className="font-semibold text-[rgb(0,0,0)]">30M+ Views Generated</span> in Last 90 Days (We Know Organic + Paid)</span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle className="text-[hsl(var(--green-success))] w-6 h-6 flex-shrink-0" />
                <span className="font-apple font-medium text-[hsl(var(--text-primary))]"><span className="font-semibold text-[hsl(var(--gold-accent))]">Month-to-Month Only</span> (No 12-Month Prison Sentences)</span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle className="text-[hsl(var(--green-success))] w-6 h-6 flex-shrink-0" />
                <span className="font-apple font-medium text-[hsl(var(--text-primary))]"><span className="font-semibold text-[hsl(var(--gold-accent))]">You Own Everything</span> (Accounts, Creative, Data-Forever)</span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle className="text-[hsl(var(--green-success))] w-6 h-6 flex-shrink-0" />
                <span className="font-semibold text-[rgb(0,0,0)]"><span className="font-semibold text-[rgb(0,0,0)]">30-Day Out Clause</span> (Walk If We Don't Perform)</span>
              </div>
            </div>
              
            {/* CTAs */}
            <div className="space-y-6 mt-12">
              <Button onClick={goToApplication} className="btn-primary text-lg px-12 py-4">
                See If You Qualify
              </Button>
              <div className="text-sm font-apple font-medium text-[hsl(var(--text-secondary))]">
                Only 5 partnerships available this quarter
              </div>
              <button onClick={scrollToProof} className="text-[hsl(var(--navy-primary))] font-apple font-medium hover:text-[hsl(var(--gold-accent))] transition-colors duration-200">
                Show Me Proof First (30 Sec Video) →
              </button>
            </div>
            
            {/* Countdown Timer */}
            <CountdownTimer className="mt-8" />
          </div>
        </div>
      </section>
      
      {/* ANTI-AGENCY MANIFESTO */}
      <section id="how-it-works" className="section-padding bg-[hsl(var(--light-gray))]">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center space-y-12 animate-fade-in">
            <h2 className="text-headline font-apple text-[hsl(var(--text-primary))]">
              Let's Talk About What 'Marketing Agency' Actually Means to You Right Now
            </h2>
            
            <div className="text-body-large font-apple leading-relaxed space-y-8 text-left max-w-4xl mx-auto">
              <p>Let me guess.</p>
              <p>You've been burned before.</p>
              <p>
                Some agency with a slick website promised you the moon. "We'll 10X your business!" 
                "Guaranteed results!" "Industry-leading experts!"
              </p>
              <p>You signed the 12-month contract. Paid the $5K/month retainer.</p>
              
              <div className="space-y-4 my-8">
                <p><span className="font-bold">Month 1:</span> They sent you a "strategy document" that looked suspiciously like a template.</p>
                <p><span className="font-bold">Month 2:</span> You asked about results. They showed you a report full of "impressions" and "reach" and other metrics that didn't put a single dollar in your bank account.</p>
                <p><span className="font-bold">Month 3:</span> You knew it wasn't working. But you were locked in. So they kept taking your money while delivering... what exactly?</p>
              </div>
              
              <h3 className="text-2xl font-bold text-black">Sound familiar?</h3>
              
              <p>Here's what actually happened:</p>
              <p className="font-bold text-xl">They never cared about <span className="text-[hsl(var(--gold-accent))]">your outcome.</span></p>
              <p>
                They cared about their retainer. Their MRR. Their revenue targets. You were a line item. 
                A subscription. A number in their CRM that auto-renewed every month.
              </p>
              
              <div className="pull-quote">
                "The marketing agency industrial complex is built on one simple premise: 
                Get the retainer. Keep the retainer. Do just enough to avoid getting fired."
              </div>
              
              <p>We built Amplo because we were sick of watching this happen.</p>
              <p className="font-bold text-xl">Here's our philosophy:</p>
              <p className="text-2xl font-bold text-black">
                If we don't make you money, <span className="text-gold">we don't deserve yours.</span>
              </p>
            </div>
            
            {/* The Amplo Difference Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="card-hover">
                <CardContent className="p-6 text-center">
                  <X className="w-12 h-12 text-black mx-auto mb-4" />
                  <h4 className="font-bold text-lg mb-2">NO LONG-TERM CONTRACTS</h4>
                  <p className="text-sm">
                    Month-to-month only. We earn your business every 30 days. 
                    Don't like what we're doing? Leave. No penalties. No hard feelings.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardContent className="p-6 text-center">
                  <Target className="w-12 h-12 text-black mx-auto mb-4" />
                  <h4 className="font-bold text-lg mb-2">NO VANITY METRIC BS</h4>
                  <p className="text-base text-black">
                    We don't care about impressions, reach, or engagement. We care about 
                    <span className="font-bold"> leads, sales, and revenue.</span> If the numbers don't go up, we're not doing our job.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="w-12 h-12 text-[hsl(var(--green-success))] mx-auto mb-4" />
                  <h4 className="font-bold text-lg mb-2">YOU OWN EVERYTHING</h4>
                  <p className="text-base text-black">
                    Your ad accounts. Your creative. Your data. Your automations. 
                    If you leave, you take it all with you. We're not holding anything hostage.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-navy text-white p-8 rounded-lg mt-12">
              <p className="text-2xl font-bold text-center text-[rgb(223,178,42)]">
                "We only work with businesses who refuse to settle for mediocrity. 
                Because we refuse to settle, too."
              </p>
            </div>
            
            <Button onClick={goToApplication} className="btn-primary mt-8">
              I'm Ready to Stop Settling - Apply Now →
            </Button>
          </div>
        </div>
      </section>
      
      {/* PROBLEM AGITATION - AGENCY GRAVEYARD */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-headline font-apple text-[hsl(var(--text-primary))] mb-6">
              We Know Exactly What You're Thinking Right Now
            </h2>
            <p className="text-subheadline font-apple">
              Because every business owner tells us the same stories before they finally find Amplo.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
            icon: <DollarSign className="w-8 h-8 text-black" />,
            title: "Paid $5K/Month for 6 Months-Got Zero ROI",
            content: "You handed over your hard-earned money. They gave you dashboards that looked impressive. Your revenue? Still flat. You kept asking, 'When do we see results?' They kept saying, 'Give it time.'"
          }, {
            icon: <TrendingUp className="w-8 h-8 text-black" />,
            title: "Buried in Reports That Mean Nothing",
            content: "'Impressions up 40%!' 'Engagement increased 127%!' Cool. Did that pay your mortgage? They fed you vanity metrics while your competitors ate your lunch with actual sales."
          }, {
            icon: <AlertTriangle className="w-8 h-8 text-black" />,
            title: "Locked Into a 12-Month Contract With No Results",
            content: "You knew by Month 2 it wasn't working. But you were stuck. The contract was ironclad. So they kept auto-billing your card while you watched your cash reserves drain."
          }, {
            icon: <X className="w-8 h-8 text-black" />,
            title: "Zero Transparency-Felt Like I Was Being Scammed",
            content: "You'd ask, 'What exactly are you doing this month?' They'd dodge. They'd deflect. Translation: They weren't doing much, and they knew you'd figure it out."
          }, {
            icon: <Users className="w-8 h-8 text-black" />,
            title: "Everyone Blamed Everyone Else",
            content: "The ads guy blamed the creative. The creative blamed the landing page. The strategist blamed the market. Nobody owned the outcome. You paid for all of them. None delivered."
          }, {
            icon: <Target className="w-8 h-8 text-black" />,
            title: "Promised 'Results in 90 Days'-Still Waiting After 9 Months",
            content: "'Just give it a little more time.' 'The funnel needs to warm up.' Meanwhile, you're bleeding cash and patience. And they keep cashing your checks."
          }].map((pain, index) => <Card key={index} className="card-hover border-2 border-navy">
                <CardContent className="p-6">
                  <div className="mb-4">{pain.icon}</div>
                  <h4 className="font-bold text-lg mb-3 text-black">{pain.title}</h4>
                  <p className="text-base text-black">{pain.content}</p>
                </CardContent>
              </Card>)}
          </div>
          
          <div className="text-center mt-16">
            <p className="text-xl md:text-2xl font-bold text-black mb-8">
              If You've Thought Even ONE of These Things... 
              You're Exactly Who We Built Amplo For.
            </p>
            <Button onClick={goToApplication} className="btn-primary">
              Show Me How Amplo Is Different →
            </Button>
          </div>
        </div>
      </section>
      
      {/* FULL-FUNNEL SOLUTION */}
      <section id="services" className="section-padding bg-navy text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="font-montserrat font-bold text-[rgb(255,255,255)]">We Don't Do 'A Little Bit of Everything.' We Do Your Entire Revenue Engine.</h2>
              
              <p className="text-xl text-gold">
                Most agencies are like mechanics who only fix transmissions. When your engine fails, 
                they shrug and say 'not my department.' 
                <span className="text-white font-bold"> We're not mechanics. We're the entire pit crew.</span>
              </p>
              
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold text-gold border-b-4 border-gold inline-block pb-2">This is Full-Funnel Accountability™</h3>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-[rgb(222,222,222)]">
                  Here's how every other agency works: You hire one company for ads. Another for your website. 
                  A freelancer for creative. An SEO consultant. An email marketer.
                </p>
                
                <p className="text-lg font-bold text-[rgb(223,178,42)]">
                  When revenue doesn't grow, everyone points fingers:
                </p>
                
                <ul className="space-y-2 text-lg">
                  <li>• The ads guy says the landing page is broken</li>
                  <li>• The landing page guy says the offer sucks</li>
                  <li>• The offer consultant says the creative is weak</li>
                  <li>• The creative says the targeting is off</li>
                </ul>
                
                <p className="text-xl font-bold text-gold">Round and round. Nobody owns the outcome. YOU pay for all of it. We don't want that for you...</p>
              </div>
            </div>
            
            <div className="bg-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-gold">AMPLO IS DIFFERENT:</h3>
              <div className="space-y-4">
                <p className="text-lg font-bold text-[rgb(252,224,127)]">
                  We own the entire journey-from the first click to cash in your bank.
                </p>
                <div className="space-y-3">
                  <p className="text-[rgb(252,224,127)]">If the ads work but the landing page doesn't convert? <span className="text-gold font-bold">Our problem.</span></p>
                  <p className="text-[rgb(252,224,127)]">If the landing page converts but the follow-up emails fail? <span className="text-gold font-bold">Our problem.</span></p>
                  <p className="text-[rgb(252,224,127)]">If everything else works but the offer isn't compelling? <span className="text-gold font-bold">Our problem.</span></p>
                </div>
                <p className="text-xl font-bold text-gold mt-6">
                  One team. One system. One throat to choke if it doesn't work.
                </p>
              </div>
            </div>
          </div>
          
          <div className="pull-quote text-gold text-center mt-16">
            "You don't need more vendors. You need one partner who gives a damn about the scoreboard."
          </div>
        </div>
      </section>
      
      {/* THE 3 PILLARS */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-black text-center mb-16">
            The 3 Pillars of Full-Funnel Ownership
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Pillar 1: Acquisition */}
            <Card className="card-hover">
              <CardContent className="p-8">
                <Target className="w-16 h-16 text-gold mb-6" />
                <h3 className="text-2xl font-bold text-black mb-4">We Flood Your Pipeline</h3>
                <p className="text-lg mb-6">
                  You don't have a "traffic problem." You have a <span className="font-bold">scalable acquisition system</span> problem. 
                  We build <span className="font-bold">predictable lead machines</span> that run 24/7.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[hsl(var(--green-success))] mt-1" />
                    <div>
                      <span className="font-bold">Paid Ads Across Every Platform</span>
                      <p className="text-sm text-black">
                        Meta, Google, TikTok, LinkedIn-wherever your customers are, we dominate.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[hsl(var(--green-success))] mt-1" />
                    <div>
                      <span className="font-bold">30M+ Views Generated in Last 90 Days</span>
                      <p className="text-sm text-black">
                        We know how to make content spread. We've cracked the algorithm.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[hsl(var(--green-success))] mt-1" />
                    <div>
                      <span className="font-bold">20-100+ Qualified Leads Per Month</span>
                      <p className="text-sm text-black">
                        Predictable. Scalable. Not "a couple here and there."
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-light-gray rounded-lg">
                  <p className="font-bold text-black">
                    "We want your top-of-funnel full. Because when you have quantity without sacrificing quality, you have options. And options = power."
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Pillar 2: Conversion */}
            <Card className="card-hover">
              <CardContent className="p-8">
                <DollarSign className="w-16 h-16 text-gold mb-6" />
                <h3 className="text-2xl font-bold text-black mb-4">We Turn Clicks Into Customers</h3>
                <p className="text-lg mb-6">
                  Most agencies drive traffic and call it a day. <span className="font-bold">Cool. You got 1,000 clicks. How many bought?</span> 
                  We are accountable for the entire conversion path from the first click to the "thank you for your purchase" page.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[hsl(var(--green-success))] mt-1" />
                    <div>
                      <span className="font-bold">High-Converting Websites & Landing Pages</span>
                      <p className="text-sm text-black">
                        Not templates. Conversion-optimized builds designed to sell.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[hsl(var(--green-success))] mt-1" />
                    <div>
                      <span className="font-bold">Email & SMS Systems That Print Money</span>
                      <p className="text-sm text-black">
                        Not "newsletters." Revenue-generating systems.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[hsl(var(--green-success))] mt-1" />
                    <div>
                      <span className="font-bold">Creative That Converts</span>
                      <p className="text-sm text-black">
                        Ads, videos, graphics-all designed for results, not awards.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-light-gray rounded-lg">
                  <p className="font-bold text-black">
                    "Most agencies get you in the door. We make sure you close the deal and get paid."
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Pillar 3: Scale & Automation */}
            <Card className="card-hover">
              <CardContent className="p-8">
                <TrendingUp className="w-16 h-16 text-gold mb-6" />
                <h3 className="text-2xl font-bold text-black mb-4">We Make You Unstoppable</h3>
                <p className="text-lg mb-6">
                  You didn't start a business to spend 60 hours a week manually chasing leads. 
                  We automate 70% of your busywork so you can focus on what actually grows the business.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[hsl(var(--green-success))] mt-1" />
                    <div>
                      <span className="font-bold">AI Automations</span>
                      <p className="text-sm text-black">
                        Lead qualification bots, CRM integrations-cut manual work by 70%.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[hsl(var(--green-success))] mt-1" />
                    <div>
                      <span className="font-bold">Real-Time Dashboards</span>
                      <p className="text-sm text-black">
                        See exactly what we're doing and where every dollar is going. Zero secrets.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[hsl(var(--green-success))] mt-1" />
                    <div>
                      <span className="font-bold">Weekly Strategy Calls + Direct Access</span>
                      <p className="text-sm text-black">
                        Work directly with senior strategists. Slack access. No runaround.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-light-gray rounded-lg">
                  <p className="font-bold text-black">
                    "We're not here to help you 'survive slow months.' We're here to make you the category leader."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-16">
            <div className="bg-gold text-white p-8 rounded-lg inline-block">
              <p className="text-2xl font-bold">
                "We don't want clients who are wishy-washy about growth. 
                We want PARTNERS ready to dominate."
              </p>
            </div>
            
            <div className="mt-8">
              <Button onClick={goToApplication} className="btn-primary">
                Build My Revenue Engine - Apply Now →
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* SOCIAL PROOF FORTRESS */}
      <section id="proof" className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-montserrat font-bold text-black mb-4">
              30M+ Views. $12.4M Revenue Generated. 
              1,000+ Businesses Recovered From Agency Trauma.
            </h2>
            <p className="text-xl text-black">
              Here's what happens when you stop settling for mediocrity.
            </p>
          </div>
          
          {/* Big Numbers */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
            {[{
            icon: <DollarSign className="w-12 h-12 text-gold" />,
            number: "$12.4M+",
            label: "Revenue Generated for Partners"
          }, {
            icon: <TrendingUp className="w-12 h-12 text-gold" />,
            number: "127%",
            label: "Average Revenue Increase (90 Days)"
          }, {
            icon: <Target className="w-12 h-12 text-gold" />,
            number: "30M+",
            label: "Views Generated (Last 90 Days)"
          }, {
            icon: <Star className="w-12 h-12 text-gold" />,
            number: "4.9/5",
            label: "Partner Satisfaction Rating"
          }, {
            icon: <CheckCircle className="w-12 h-12 text-gold" />,
            number: "87%",
            label: "Success Rate"
          }].map((stat, index) => <div key={index} className="text-center">
                <div className="mb-4">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-black mb-2">{stat.number}</div>
                <div className="text-sm text-black">{stat.label}</div>
              </div>)}
          </div>
          
          {/* Case Studies */}
          <div className="space-y-12">
            {/* Case Study 1 */}
            <Card className="card-hover">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <Badge className="mb-4 bg-gold text-white">E-COMMERCE SUCCESS</Badge>
                    <h3 className="text-2xl font-bold text-black mb-4">
                      Sarah K., Women's Activewear Brand
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-lg mb-2">THE SITUATION (BEFORE AMPLO):</h4>
                        <p className="text-black">
                          Sarah had already fired two agencies. When she came to us, she was spending $8K/month on ads, 
                          getting 12-15 sales/month, and revenue was stuck at $45K/month for 8 months.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-lg mb-2">RESULTS (AFTER 90 DAYS):</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-[hsl(var(--green-success))] text-white p-4 rounded">
                            <div className="text-2xl font-bold">$185K/month</div>
                            <div className="text-sm">Revenue (+311%)</div>
                          </div>
                          <div className="bg-[hsl(var(--green-success))] text-white p-4 rounded">
                            <div className="text-2xl font-bold">4.2x</div>
                            <div className="text-sm">ROAS (up from 1.8x)</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-light-gray p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-4">IN SARAH'S WORDS:</h4>
                    <blockquote className="italic text-black mb-6">
                      "I'd fired 2 agencies before Amplo. I was ready to give up on paid ads entirely. 
                      Within 60 days, they'd turned my business into a machine. I went from struggling to pay myself 
                      to hiring 3 full-time employees. I literally cried when I saw my revenue dashboard hit $200K for the first time."
                    </blockquote>
                    <Testimonial quote="" name="Sarah K." title="Founder" photoUrl="./images/testimonials/sarah-k.jpg" initials="SK" gradientFrom="from-pink-400" gradientTo="to-purple-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Case Study 2 */}
            <Card className="card-hover">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <Badge className="mb-4 bg-navy text-white">B2B SAAS SUCCESS</Badge>
                    <h3 className="text-2xl font-bold text-black mb-4">
                      Mike T., Project Management Software
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-lg mb-2">THE SITUATION (BEFORE AMPLO):</h4>
                        <p className="text-black">
                          Mike's SaaS was stuck at $80K MRR, 100% reliant on referrals. 
                          He was spending 20+ hours/week on manual outreach with 5-10 demo requests/month.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-lg mb-2">RESULTS (AFTER 120 DAYS):</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-[hsl(var(--green-success))] text-white p-4 rounded">
                            <div className="text-2xl font-bold">$240K</div>
                            <div className="text-sm">MRR (+200%)</div>
                          </div>
                          <div className="bg-[hsl(var(--green-success))] text-white p-4 rounded">
                            <div className="text-2xl font-bold">50+</div>
                            <div className="text-sm">Qualified demos/month</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-light-gray p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-4">IN MIKE'S WORDS:</h4>
                    <blockquote className="italic text-black mb-6">
                      "Amplo didn't just get us leads-they gave me my life back. I was drowning in manual sales processes. 
                      Now we have a system that runs itself. We just closed our Series A because investors finally saw 
                      predictable, scalable growth."
                    </blockquote>
                    <Testimonial quote="" name="Mike T." title="CEO" photoUrl="./images/testimonials/mike-t.jpg" initials="MT" gradientFrom="from-blue-400" gradientTo="to-green-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Testimonial Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {[{
            stars: 5,
            quote: "After 3 failed agencies, I was DONE with marketing companies. Amplo's transparency from Day 1 changed everything. Finally, a partner I can trust.",
            author: "Amanda R., Founder, Skincare Brand"
          }, {
            stars: 5,
            quote: "We saw our first qualified lead in Week 1. By Month 2, our pipeline was FULL. By Month 3, we'd doubled revenue. These guys don't waste time.",
            author: "Carlos D., VP of Sales, B2B SaaS"
          }, {
            stars: 5,
            quote: "They asked better questions about my customers than I did. The strategy was laser-focused from Day 1. It's like they'd been in my industry for 10 years.",
            author: "Jennifer L., CEO, Consulting Firm"
          }, {
            stars: 5,
            quote: "Best ROI I've EVER gotten from a marketing investment. Within 90 days, we'd made back our investment 5x over. Now it's pure profit every month.",
            author: "Tom H., Owner, E-Commerce"
          }, {
            stars: 5,
            quote: "I give them 30 minutes a week for our strategy call. That's IT. Everything else runs on autopilot. First time in 10 years I'm not the bottleneck.",
            author: "Rachel S., Founder, Coaching Business"
          }, {
            stars: 5,
            quote: "The 30-day out clause made me feel safe trying them. Turns out, I'll never use it. They're the first marketing team that's actually delivered.",
            author: "Mark W., Director, Manufacturing"
          }].map((testimonial, index) => <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.stars)].map((_, i) => <Star key={i} className="w-5 h-5 text-gold fill-current" />)}
                  </div>
                  <blockquote className="italic text-black mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${index === 0 ? 'from-pink-400 to-purple-500' : index === 1 ? 'from-blue-500 to-cyan-400' : index === 2 ? 'from-purple-500 to-pink-400' : index === 3 ? 'from-green-500 to-emerald-400' : index === 4 ? 'from-orange-500 to-red-400' : 'from-indigo-500 to-blue-400'} flex items-center justify-center text-white font-bold text-sm`}>
                      {testimonial.author.split(' ')[0][0]}{testimonial.author.split(' ')[1] ? testimonial.author.split(' ')[1][0] : testimonial.author.split(' ')[0][1]}
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-sm text-black">{testimonial.author}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
          
          <div className="text-center mt-16">
            <Button onClick={goToApplication} className="btn-primary">
              I Want Results Like These - See If I Qualify →
            </Button>
          </div>
        </div>
      </section>
      
      {/* FAQ SECTION */}
      <section id="faq" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* FAQ Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl font-apple font-bold text-[hsl(var(--navy-primary))] mb-4">
                Questions?
                <br />Here's What Everyone Asks.
              </h2>
              <p className="text-xl text-gray-600">
                No fluff. Just straight answers.
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4 mb-12">
              {[
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
                  answer: `Our retainers range from $1,000–$10,000/month depending on:
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
                }
              ].map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    className="w-full text-left p-6 hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
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
              <Button onClick={goToApplication} className="btn-primary px-12 py-4 text-lg">
                Apply Now - See If You Qualify →
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* FINAL CTA SECTION */}
      <section className="section-padding bg-navy text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-montserrat font-bold mb-8">
            Partnership Deadline: Only 5 Spots Left for Q1 2026
          </h2>
          
          <p className="text-xl text-gold mb-12">
            We're capping our roster at 5 new partnerships this quarter. 
            When they're gone, applications close until Q2 (April 2026).
          </p>
          
          <CountdownTimer className="mb-12" />
          
          {/* Value Recap */}
          <div className="max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl font-bold mb-8">When You Partner With <span className="text-[hsl(var(--gold-accent))]">Amplo</span>, You Get:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              {["Full-Funnel Ownership (traffic → leads → sales → revenue)", "30M+ Views Worth of Expertise (organic + paid mastery)", "Month-to-Month Terms (no 12-month prison sentences)", "Real-Time Transparency (live dashboards, weekly calls)", "Senior Team (not 23-year-old account managers)", "87% Success Rate (vs. 20-30% industry average)", "30-Day Out Clause (walk if we don't perform-zero risk)", "You Own Everything (accounts, creative, data-forever)"].map((benefit, index) => <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>)}
            </div>
          </div>
          
          <div className="space-y-6">
            <Button onClick={goToApplication} className="btn-primary text-2xl px-16 py-6">
              Apply Now - See If You Qualify →
            </Button>
            
            <p className="text-lg text-white">
              Free strategy call. No pitch. No pressure. Just real talk about your growth.
            </p>
            
            {/* Scholarship Offer */}
            <div className="bg-gold text-black p-8 rounded-lg max-w-2xl mx-auto">
              <h4 className="text-2xl font-bold mb-4">Can't Afford Full Investment Yet?</h4>
              <h5 className="text-xl font-bold mb-4">Apply for a Founder's Scholarship</h5>
              <div className="space-y-3 text-left">
                <p>🎁 <span className="font-bold">50% off retainer for first 3 months</span></p>
                <p>✅ Same full-service support (zero reduction in quality)</p>
                <p>✅ Month-to-month terms still apply</p>
                <p>⚠️ Only 2 scholarships available per quarter</p>
              </div>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg max-w-2xl mx-auto">
              <h4 className="text-lg font-bold mb-4 text-white">What You'll Get on the Strategy Call:</h4>
              <div className="space-y-2 text-left">
                <p className="text-white">✅ Free audit of your current marketing</p>
                <p className="text-white">✅ Custom 90-day growth roadmap</p>
                <p className="text-white">✅ Honest assessment (if we're not a fit, we'll tell you)</p>
                <p className="text-white">✅ Zero-pressure conversation</p>
              </div>
            </div>
            
            <Button onClick={goToApplication} className="btn-primary">
              Apply Now Before Spots Are Gone →
            </Button>
            
            <p className="text-sm text-gold">
              Join 1,000+ businesses who stopped settling for mediocre marketing
            </p>
          </div>
        </div>
      </section>
      
      {/* FOOTER */}
      <footer className="text-white py-16 bg-[rgb(0,0,0)]">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Column 1: Logo & Tagline */}
            <div className="bg-[rgb(0,0,0)]">
              <div className="text-2xl font-montserrat font-bold mb-4 bg-[rgb(0,0,0)]">AMPLO</div>
              <p className="text-white mb-6">Full-Funnel Ownership. Real Growth. No BS.</p>
              
            </div>
            
            {/* Column 2: Quick Links */}
            <div>
              <h4 className="font-bold mb-4 text-[rgb(255,255,255)]">Quick Links</h4>
              <div className="space-y-2 text-white">
                <button onClick={() => scrollToSection('how-it-works')} className="block hover:text-white transition-colors text-[rgb(255,255,255)]">How It Works</button>
                <button onClick={() => scrollToSection('proof')} className="block hover:text-white transition-colors">Case Studies</button>
                <button onClick={() => scrollToSection('services')} className="block hover:text-white transition-colors">What You Get</button>
                <button onClick={goToApplication} className="block hover:text-white transition-colors">Apply Now</button>
              </div>
            </div>
            
            {/* Column 3: Resources */}
            <div>
              <h4 className="font-bold mb-4 text-[rgb(255,255,255)]">Resources</h4>
              <div className="space-y-2 text-white">
                <a href="#" className="block hover:text-white transition-colors">Blog</a>
                <a href="#" className="block hover:text-white transition-colors">Free Case Study Download</a>
                <a href="#" className="block hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="block hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
            
            {/* Column 4: Contact */}
            <div>
              <h4 className="font-bold mb-4 text-[rgb(255,255,255)]">Contact</h4>
              <div className="space-y-2 text-white">
                <p className="text-[rgb(255,255,255)]">Email: hello@amplomarketing.com</p>
                <p className="text-[rgb(255,255,255)]">Hours: Mon-Fri: 9am-6pm PST</p>
                <p className="text-[rgb(255,255,255)]">(We actually answer)</p>
              </div>
            </div>
          </div>
          
          {/* Trust Footer Bar */}
          <div className="border-t border-white/20 mt-12 pt-8 text-center">
            <div className="flex flex-wrap justify-center gap-8 text-sm text-white mb-4">
              <span>✅ 30M+ Views Generated</span>
              <span>✅ $12.4M+ Revenue for Partners</span>
              <span>✅ 87% Success Rate</span>
              <span>✅ 1,000+ Businesses Recovered</span>
            </div>
            <p className="text-gold font-bold mb-4">"Only 5 Partnerships Available for Q1 2026"</p>
            
            <Button onClick={goToApplication} className="btn-primary mb-6">
              Apply Before Spots Are Gone →
            </Button>
            
            <div className="text-xs text-white">
              <p className="text-[rgb(255,255,255)]">© 2026 Amplo Marketing. All Rights Reserved.</p>
              <p className="mt-2 text-[rgb(255,255,255)]">We don't do retainers for the sake of retainers. We do revenue. Month-to-month. You walk if we don't deliver.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;