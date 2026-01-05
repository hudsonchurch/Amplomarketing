import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Star, CheckCircle, Clock, Lock } from 'lucide-react';

interface EnhancedApplicationProps {
  route: 'qualified' | 'scholarship';
  onSubmit: (formData: any) => void;
  onBack: () => void;
  userAnswers: {
    revenue: string;
    businessModel: string;
    seriousness: string;
  };
}

const EnhancedApplication = ({ route, onSubmit, onBack, userAnswers }: EnhancedApplicationProps) => {
  const [formData, setFormData] = useState({
    // Basic Info
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    
    // Goals
    primaryGoals: [] as string[],
    customGoal: '',
    successDefinition: '',
    
    // Timeline & Budget
    timeline: '',
    budget: '',
    
    // Context
    whyNow: '',
    previousAgency: '',
    previousAgencyDetails: '',
    biggestSkepticism: '',
    customSkepticism: '',
    
    // How they found us
    howHeard: '',
    customSource: '',
    referralName: '',
    
    // Agreement
    agreement: false,
    
    // Scholarship fields
    whyInvest: '',
    useOfSavings: '',
    scholarshipSource: ''
  });

  const goalOptions = [
    'Increase revenue (I need more money in the bank)',
    'Get more qualified leads (my pipeline is too thin)',
    'Build organic audience (I want social/SEO growth)',
    'Fix/build my website or funnel (my conversion sucks)',
    'Scale what\'s already working (I have something that works, just need to 10x it)',
    'Automate manual processes (I\'m drowning in busywork)'
  ];

  const handleGoalChange = (goal: string, checked: boolean) => {
    if (checked) {
      if (formData.primaryGoals.length < 2) {
        setFormData(prev => ({
          ...prev,
          primaryGoals: [...prev.primaryGoals, goal]
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        primaryGoals: prev.primaryGoals.filter(g => g !== goal)
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const isFormValid = formData.name && formData.email && formData.phone && 
                     formData.company && formData.timeline && formData.budget && 
                     formData.whyNow && formData.previousAgency && formData.biggestSkepticism &&
                     formData.howHeard && formData.agreement &&
                     (route !== 'scholarship' || (formData.whyInvest && formData.useOfSavings));

  return (
    <div className="min-h-screen bg-white">
      {/* Progress Bar */}
      <div className="w-full bg-white border-b border-[hsl(var(--border-subtle))] py-6">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-apple font-medium text-[hsl(var(--text-primary))]">Final Step</span>
            <span className="text-sm font-apple text-[hsl(var(--text-secondary))]">100%</span>
          </div>
          <Progress value={100} className="h-2" />
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-5 gap-16 max-w-7xl mx-auto">
          {/* Left Sidebar - Sticky Trust Content */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-8 space-y-8">
              {/* Main Headline */}
              <div>
                <h1 className="text-3xl md:text-4xl font-apple font-bold text-[hsl(var(--text-primary))] mb-4">
                  {route === 'qualified' ? '🎉 You Qualify!' : 'You Might Qualify for a Scholarship!'}
                </h1>
                <p className="text-lg font-apple text-[hsl(var(--text-secondary))]">
                  {route === 'qualified' 
                    ? "Based on your answers, you're a perfect fit for Amplo. Let's make this official."
                    : "Based on your revenue, you may be eligible for our Founder's Scholarship (50% off for 3 months). Fill out the form and we'll let you know."
                  }
                </p>
              </div>

              {/* What Happens Next */}
              <div className="space-y-4">
                <h3 className="text-xl font-apple font-semibold text-[hsl(var(--text-primary))]">
                  What Happens Next
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[hsl(var(--green-success))] mt-0.5 flex-shrink-0" />
                    <span className="font-apple text-[hsl(var(--text-primary))]">You fill out this form (2-3 minutes)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[hsl(var(--green-success))] mt-0.5 flex-shrink-0" />
                    <span className="font-apple text-[hsl(var(--text-primary))]">We review within 24 hours</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[hsl(var(--green-success))] mt-0.5 flex-shrink-0" />
                    <span className="font-apple text-[hsl(var(--text-primary))]">You get a calendar link for your free strategy call</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[hsl(var(--green-success))] mt-0.5 flex-shrink-0" />
                    <span className="font-apple text-[hsl(var(--text-primary))]">No pitch, no pressure—just real talk about growth</span>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="card-apple">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[hsl(var(--gold-accent))] fill-current" />
                  ))}
                </div>
                <blockquote className="text-[hsl(var(--text-primary))] mb-4 font-apple italic">
                  "The application was so easy. Within 48 hours, I had my strategy call booked. Within 2 weeks, we were live. Within 90 days, we'd doubled revenue. Best decision I ever made."
                </blockquote>
                <div className="space-y-1">
                  <div className="font-apple font-semibold text-[hsl(var(--text-primary))]">— Sarah K.</div>
                  <div className="font-apple text-sm text-[hsl(var(--text-secondary))]">Founder, E-Commerce Brand</div>
                  <div className="font-apple text-sm text-[hsl(var(--text-secondary))]">($45K/mo → $185K/mo in 90 days)</div>
                </div>
              </div>

              {/* Urgency Reminder */}
              <div className="bg-[hsl(var(--gold-accent))] text-white p-6 rounded-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-apple font-semibold">Reminder:</span>
                </div>
                <div className="space-y-1 font-apple">
                  <p className="font-medium">Only 5 partnerships left for Q1 2026</p>
                  <p className="text-sm opacity-90">Current applications in queue: 18</p>
                  <p className="text-sm opacity-90">Spots are first-come, first-served.</p>
                </div>
              </div>

              {/* Guarantee */}
              <div className="bg-[hsl(var(--medium-gray))] p-6 rounded-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <Lock className="w-5 h-5 text-[hsl(var(--text-secondary))]" />
                  <span className="font-apple font-semibold text-[hsl(var(--text-primary))]">Your info is safe.</span>
                </div>
                <div className="space-y-1 font-apple text-sm text-[hsl(var(--text-secondary))]">
                  <p>We won't spam you or sell your data.</p>
                  <p>We'll contact you once with our decision.</p>
                  <p>That's it.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Application Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Form Header */}
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-apple font-bold text-[hsl(var(--text-primary))] mb-3">
                  Let's Get You Started
                </h2>
                <p className="text-lg font-apple text-[hsl(var(--text-secondary))]">
                  Just a few more details so we can build your custom growth plan.
                </p>
              </div>

              {/* Section 1: Basic Info */}
              <div className="space-y-6">
                <h3 className="text-xl font-apple font-semibold text-[hsl(var(--text-primary))]">
                  Basic Info
                </h3>
                <div className="grid gap-6">
                  <div>
                    <label className="block text-sm font-apple font-medium text-[hsl(var(--text-primary))] mb-2">
                      Your Name *
                    </label>
                    <Input
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="font-apple"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-apple font-medium text-[hsl(var(--text-primary))] mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="font-apple"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-apple font-medium text-[hsl(var(--text-primary))] mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="font-apple"
                      required
                    />
                    <p className="text-sm font-apple text-[hsl(var(--text-secondary))] mt-1">
                      We'll text you updates—way faster than email
                    </p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-apple font-medium text-[hsl(var(--text-primary))] mb-2">
                      Company Name *
                    </label>
                    <Input
                      placeholder="Acme Co"
                      value={formData.company}
                      onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                      className="font-apple"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-apple font-medium text-[hsl(var(--text-primary))] mb-2">
                      Website URL (if you have one)
                    </label>
                    <Input
                      type="url"
                      placeholder="https://yourwebsite.com"
                      value={formData.website}
                      onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
                      className="font-apple"
                    />
                    <p className="text-sm font-apple text-[hsl(var(--text-secondary))] mt-1">
                      No website yet? No problem. Just leave this blank.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 2: Your Goals */}
              <div className="space-y-6">
                <h3 className="text-xl font-apple font-semibold text-[hsl(var(--text-primary))]">
                  What Do You Want to Achieve?
                </h3>
                
                <div>
                  <label className="block text-sm font-apple font-medium text-[hsl(var(--text-primary))] mb-3">
                    What's your PRIMARY goal in the next 90 days? * (Select up to 2)
                  </label>
                  <div className="space-y-3">
                    {goalOptions.map((goal) => (
                      <div key={goal} className="flex items-start space-x-3">
                        <Checkbox
                          id={goal}
                          checked={formData.primaryGoals.includes(goal)}
                          onCheckedChange={(checked) => handleGoalChange(goal, checked as boolean)}
                          disabled={!formData.primaryGoals.includes(goal) && formData.primaryGoals.length >= 2}
                        />
                        <label htmlFor={goal} className="font-apple text-[hsl(var(--text-primary))] leading-relaxed">
                          {goal}
                        </label>
                      </div>
                    ))}
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="other-goal"
                        checked={formData.primaryGoals.includes('other')}
                        onCheckedChange={(checked) => handleGoalChange('other', checked as boolean)}
                        disabled={!formData.primaryGoals.includes('other') && formData.primaryGoals.length >= 2}
                      />
                      <Input
                        placeholder="Other:"
                        value={formData.customGoal}
                        onChange={(e) => setFormData(prev => ({ ...prev, customGoal: e.target.value }))}
                        className="flex-1 font-apple"
                      />
                    </div>
                  </div>
                  <p className="text-sm font-apple text-[hsl(var(--text-secondary))] mt-2">
                    Pick the top 1-2. We'll tackle the rest after we fix these.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-apple font-medium text-[hsl(var(--text-primary))] mb-2">
                    What would success look like in 90 days? *
                  </label>
                  <Textarea
                    placeholder="E.g., 'Revenue at $150K/month, 50+ qualified leads per month, ads running profitably at 3x ROAS'"
                    value={formData.successDefinition}
                    onChange={(e) => setFormData(prev => ({ ...prev, successDefinition: e.target.value }))}
                    rows={3}
                    className="font-apple"
                    required
                  />
                  <p className="text-sm font-apple text-[hsl(var(--text-secondary))] mt-1">
                    Be specific. Numbers are good.
                  </p>
                </div>
              </div>

              {/* Section 3: Timeline & Budget */}
              <div className="space-y-6">
                <h3 className="text-xl font-apple font-semibold text-[hsl(var(--text-primary))]">
                  Let's Talk Logistics
                </h3>
                
                <div>
                  <label className="block text-sm font-apple font-medium text-[hsl(var(--text-primary))] mb-2">
                    When do you want to start? *
                  </label>
                  <Select value={formData.timeline} onValueChange={(value) => setFormData(prev => ({ ...prev, timeline: value }))}>
                    <SelectTrigger className="font-apple">
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">ASAP (next 7-14 days)</SelectItem>
                      <SelectItem value="30-days">Within 30 days</SelectItem>
                      <SelectItem value="60-days">Within 60 days</SelectItem>
                      <SelectItem value="deciding">Still deciding / need to see pricing first</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-apple font-medium text-[hsl(var(--text-primary))] mb-2">
                    What's your realistic monthly marketing budget? *
                  </label>
                  <Select value={formData.budget} onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}>
                    <SelectTrigger className="font-apple">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="foundation">$1,000-$2,500/month (Foundation Tier)</SelectItem>
                      <SelectItem value="growth">$3,000-$5,000/month (Growth Tier)</SelectItem>
                      <SelectItem value="scale">$6,000-$8,000/month (Scale Tier)</SelectItem>
                      <SelectItem value="domination">$9,000-$10,000/month (Domination Tier)</SelectItem>
                      <SelectItem value="enterprise">$10,000+/month (Enterprise)</SelectItem>
                      <SelectItem value="scholarship">I'm hoping to qualify for a Founder's Scholarship (50% off first 3 months)</SelectItem>
                      <SelectItem value="unsure">Not sure yet—tell me more on the strategy call</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-sm font-apple text-[hsl(var(--text-secondary))] mt-1">
                    Be honest. We'd rather build the right plan than oversell you something you can't afford.
                  </p>
                </div>
              </div>

              {/* Section 4: Context */}
              <div className="space-y-6">
                <h3 className="text-xl font-apple font-semibold text-[hsl(var(--text-primary))]">
                  Help Us Understand Your Situation
                </h3>
                
                <div>
                  <label className="block text-sm font-apple font-medium text-[hsl(var(--text-primary))] mb-2">
                    Why now? What's pushing you to finally fix your marketing? *
                  </label>
                  <Textarea
                    placeholder="I'm tired of inconsistent revenue. I need predictable growth so I can hire and scale."
                    value={formData.whyNow}
                    onChange={(e) => setFormData(prev => ({ ...prev, whyNow: e.target.value }))}
                    rows={4}
                    className="font-apple"
                    required
                  />
                  <p className="text-sm font-apple text-[hsl(var(--text-secondary))] mt-1">
                    The more honest you are, the better we can help. There's no "wrong" answer here.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-apple font-medium text-[hsl(var(--text-primary))] mb-3">
                    Have you worked with a marketing agency before? *
                  </label>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="agency-good"
                        name="previousAgency"
                        value="good"
                        checked={formData.previousAgency === 'good'}
                        onChange={(e) => setFormData(prev => ({ ...prev, previousAgency: e.target.value }))}
                        className="w-4 h-4"
                      />
                      <label htmlFor="agency-good" className="font-apple text-[hsl(var(--text-primary))]">
                        Yes, and it went well (I just need someone better/bigger)
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="agency-bad"
                        name="previousAgency"
                        value="bad"
                        checked={formData.previousAgency === 'bad'}
                        onChange={(e) => setFormData(prev => ({ ...prev, previousAgency: e.target.value }))}
                        className="w-4 h-4"
                      />
                      <label htmlFor="agency-bad" className="font-apple text-[hsl(var(--text-primary))]">
                        Yes, but it was a disaster (I got burned)
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="agency-first"
                        name="previousAgency"
                        value="first"
                        checked={formData.previousAgency === 'first'}
                        onChange={(e) => setFormData(prev => ({ ...prev, previousAgency: e.target.value }))}
                        className="w-4 h-4"
                      />
                      <label htmlFor="agency-first" className="font-apple text-[hsl(var(--text-primary))]">
                        No, this would be my first time
                      </label>
                    </div>
                  </div>
                </div>

                {formData.previousAgency === 'bad' && (
                  <div>
                    <label className="block text-sm font-apple font-medium text-[hsl(var(--text-primary))] mb-2">
                      What went wrong? (Optional but helpful)
                    </label>
                    <Textarea
                      placeholder="E.g., 'They kept my ad account hostage, delivered zero results, blamed me when things didn't work, locked me into a 12-month contract'"
                      value={formData.previousAgencyDetails}
                      onChange={(e) => setFormData(prev => ({ ...prev, previousAgencyDetails: e.target.value }))}
                      rows={3}
                      className="font-apple"
                    />
                    <p className="text-sm font-apple text-[hsl(var(--text-secondary))] mt-1">
                      This helps us avoid repeating their mistakes.
                    </p>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-apple font-medium text-[hsl(var(--text-primary))] mb-2">
                    What's the #1 thing you're most skeptical about? *
                  </label>
                  <Select value={formData.biggestSkepticism} onValueChange={(value) => setFormData(prev => ({ ...prev, biggestSkepticism: value }))}>
                    <SelectTrigger className="font-apple">
                      <SelectValue placeholder="Select your biggest concern" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="will-it-work">Will this actually work for MY business?</SelectItem>
                      <SelectItem value="afford">Can I afford this?</SelectItem>
                      <SelectItem value="contract">What if I get locked into another bad contract?</SelectItem>
                      <SelectItem value="results">Will I actually get results, or just more reports?</SelectItem>
                      <SelectItem value="niche">Will they understand my niche/industry?</SelectItem>
                      <SelectItem value="trust">Can I trust them not to disappear after I pay?</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {formData.biggestSkepticism === 'other' && (
                    <Input
                      placeholder="Please specify..."
                      value={formData.customSkepticism}
                      onChange={(e) => setFormData(prev => ({ ...prev, customSkepticism: e.target.value }))}
                      className="mt-2 font-apple"
                    />
                  )}
                  <p className="text-sm font-apple text-[hsl(var(--text-secondary))] mt-1">
                    We'll address this directly on your strategy call.
                  </p>
                </div>
              </div>

              {/* Section 5: How Did You Find Us */}
              <div className="space-y-6">
                <h3 className="text-xl font-apple font-semibold text-[hsl(var(--text-primary))]">
                  Last Question (We Promise)
                </h3>
                
                <div>
                  <label className="block text-sm font-apple font-medium text-[hsl(var(--text-primary))] mb-2">
                    How did you hear about Amplo? *
                  </label>
                  <Select value={formData.howHeard} onValueChange={(value) => setFormData(prev => ({ ...prev, howHeard: value }))}>
                    <SelectTrigger className="font-apple">
                      <SelectValue placeholder="Select source" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="google">Google Search</SelectItem>
                      <SelectItem value="social">Social Media (Instagram, TikTok, LinkedIn, etc.)</SelectItem>
                      <SelectItem value="referral">Referral from a friend/colleague</SelectItem>
                      <SelectItem value="youtube">YouTube</SelectItem>
                      <SelectItem value="podcast">Podcast</SelectItem>
                      <SelectItem value="ad">Ad (Facebook, Google, etc.)</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {formData.howHeard === 'other' && (
                    <Input
                      placeholder="Please specify..."
                      value={formData.customSource}
                      onChange={(e) => setFormData(prev => ({ ...prev, customSource: e.target.value }))}
                      className="mt-2 font-apple"
                    />
                  )}
                  {formData.howHeard === 'referral' && (
                    <div className="mt-2">
                      <label className="block text-sm font-apple font-medium text-[hsl(var(--text-primary))] mb-2">
                        Who referred you?
                      </label>
                      <Input
                        placeholder="Name of person or company"
                        value={formData.referralName}
                        onChange={(e) => setFormData(prev => ({ ...prev, referralName: e.target.value }))}
                        className="font-apple"
                      />
                      <p className="text-sm font-apple text-[hsl(var(--text-secondary))] mt-1">
                        We like to thank people who send us great partners.
                      </p>
                    </div>
                  )}
                  <p className="text-sm font-apple text-[hsl(var(--text-secondary))] mt-1">
                    Just curious. This helps us know what's working.
                  </p>
                </div>
              </div>

              {/* Scholarship Section */}
              {route === 'scholarship' && (
                <div className="space-y-6 border-t border-[hsl(var(--border-subtle))] pt-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-apple font-bold text-[hsl(var(--text-primary))] mb-2">
                      🎓 Founder's Scholarship Application
                    </h3>
                    <p className="font-apple text-[hsl(var(--text-secondary))]">
                      We offer 2 scholarships per quarter (50% off retainer for first 3 months) to early-stage businesses with huge potential. Answer these questions to be considered:
                    </p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-apple font-medium text-[hsl(var(--text-primary))] mb-2">
                      1. Why should we invest in YOUR growth? What makes your business special? *
                    </label>
                    <Textarea
                      placeholder="E.g., 'We're solving [problem] for [market]. We've already proven product-market fit with $40K/mo revenue from referrals alone. With proper marketing, we could 10x in a year. We're bootstrapped and capital-efficient, we just need help scaling customer acquisition.'"
                      value={formData.whyInvest}
                      onChange={(e) => setFormData(prev => ({ ...prev, whyInvest: e.target.value }))}
                      rows={4}
                      className="font-apple"
                      required
                    />
                    <p className="text-sm font-apple text-[hsl(var(--text-secondary))] mt-1">
                      Be specific. Tell us about your market, your traction, your vision. Make us believe in you.
                    </p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-apple font-medium text-[hsl(var(--text-primary))] mb-2">
                      2. If we gave you 50% off, what would you do with the money you save? *
                    </label>
                    <Textarea
                      placeholder="E.g., 'Reinvest it into more ad spend to scale faster,' 'Hire my first full-time employee,' 'Buy inventory so I can fulfill more orders,' 'Pay myself a salary for the first time in 2 years'"
                      value={formData.useOfSavings}
                      onChange={(e) => setFormData(prev => ({ ...prev, useOfSavings: e.target.value }))}
                      rows={2}
                      className="font-apple"
                      required
                    />
                    <p className="text-sm font-apple text-[hsl(var(--text-secondary))] mt-1">
                      We want to know this discount would have real impact, not just save you money.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-apple font-medium text-[hsl(var(--text-primary))] mb-3">
                      3. How did you hear about the Founder's Scholarship? *
                    </label>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="scholarship-website"
                          name="scholarshipSource"
                          value="website"
                          checked={formData.scholarshipSource === 'website'}
                          onChange={(e) => setFormData(prev => ({ ...prev, scholarshipSource: e.target.value }))}
                          className="w-4 h-4"
                        />
                        <label htmlFor="scholarship-website" className="font-apple text-[hsl(var(--text-primary))]">
                          Mentioned on your website
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="scholarship-referral"
                          name="scholarshipSource"
                          value="referral"
                          checked={formData.scholarshipSource === 'referral'}
                          onChange={(e) => setFormData(prev => ({ ...prev, scholarshipSource: e.target.value }))}
                          className="w-4 h-4"
                        />
                        <label htmlFor="scholarship-referral" className="font-apple text-[hsl(var(--text-primary))]">
                          Referral from a friend
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="scholarship-social"
                          name="scholarshipSource"
                          value="social"
                          checked={formData.scholarshipSource === 'social'}
                          onChange={(e) => setFormData(prev => ({ ...prev, scholarshipSource: e.target.value }))}
                          className="w-4 h-4"
                        />
                        <label htmlFor="scholarship-social" className="font-apple text-[hsl(var(--text-primary))]">
                          Social media post
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="scholarship-other"
                          name="scholarshipSource"
                          value="other"
                          checked={formData.scholarshipSource === 'other'}
                          onChange={(e) => setFormData(prev => ({ ...prev, scholarshipSource: e.target.value }))}
                          className="w-4 h-4"
                        />
                        <label htmlFor="scholarship-other" className="font-apple text-[hsl(var(--text-primary))]">
                          Other
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Agreement */}
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="agreement"
                  checked={formData.agreement}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreement: checked as boolean }))}
                  required
                />
                <label htmlFor="agreement" className="font-apple text-sm text-[hsl(var(--text-primary))] leading-relaxed">
                  I understand that Amplo works month-to-month and I can cancel with 30 days' notice if it's not working. I'm applying because I'm serious about growth, not just browsing. *
                </label>
              </div>

              {/* Submit Button */}
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Button
                    type="button"
                    onClick={onBack}
                    variant="outline"
                    className="px-8 py-4 font-apple"
                  >
                    ← Back
                  </Button>
                  
                  <Button
                    type="submit"
                    disabled={!isFormValid}
                    className="btn-primary flex-1 py-4 font-apple text-lg"
                  >
                    {route === 'scholarship' ? 'Submit Application + Scholarship Request →' : 'Submit My Application →'}
                  </Button>
                </div>
                
                <p className="text-sm font-apple text-[hsl(var(--text-secondary))] text-center">
                  We'll review and email you within {route === 'scholarship' ? '24-48' : '24'} hours
                </p>

                {/* Trust Signals */}
                <div className="flex justify-center items-center gap-8 text-sm font-apple text-[hsl(var(--text-secondary))] pt-4">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    <span>Your data is encrypted and secure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📧</span>
                    <span>We'll only email you once with our decision</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>🚫</span>
                    <span>No spam. Ever.</span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedApplication;