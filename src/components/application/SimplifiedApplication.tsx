import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Star, CheckCircle, Clock, Lock, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SimplifiedApplicationProps {
  route: 'qualified' | 'scholarship';
  onSubmit: (formData: any) => void;
  onBack: () => void;
  userAnswers: {
    revenue: string;
    businessModel: string;
    seriousness: string;
  };
}

const SimplifiedApplication = ({ route, onSubmit, onBack, userAnswers }: SimplifiedApplicationProps) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // Basic Info
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    
    // Goals & Budget
    primaryGoal: '',
    timeline: '',
    budget: '',
    
    // Context
    whyNow: '',
    
    // Agreement
    agreement: false,
    
    // Scholarship fields (if applicable)
    whyInvest: '',
    useOfSavings: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const isFormValid = formData.name && formData.email && formData.phone && 
                     formData.company && formData.primaryGoal && formData.timeline && 
                     formData.budget && formData.whyNow && formData.agreement &&
                     (route !== 'scholarship' || (formData.whyInvest && formData.useOfSavings));

  return (
    <div className="min-h-screen bg-white relative">
      {/* Home Button */}
      <div className="absolute top-4 left-4 z-10">
        <Button
          onClick={() => navigate('/')}
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
        >
          <Home className="w-4 h-4" />
          Home
        </Button>
      </div>
      
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
                    : "Based on your revenue, you may be eligible for our Founder's Scholarship (50% off for 3 months)."
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
                    <span className="font-apple text-[hsl(var(--text-primary))]">Fill out this quick form (2 minutes)</span>
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
                    <span className="font-apple text-[hsl(var(--text-primary))]">No pitch, no pressure—just real talk</span>
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
                  "The application was so easy. Within 48 hours, I had my strategy call booked. Within 2 weeks, we were live. Best decision I made for my business."
                </blockquote>
                <div className="space-y-1">
                  <div className="font-apple font-semibold text-[hsl(var(--text-primary))]">— Sarah K.</div>
                  <div className="font-apple text-sm text-[hsl(var(--text-secondary))]">E-Commerce Founder</div>
                </div>
              </div>

              {/* Urgency Reminder */}
              <div className="bg-[hsl(var(--gold-accent))] text-white p-6 rounded-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-apple font-semibold">Only 5 partnerships left for Q1</span>
                </div>
                <div className="space-y-1 font-apple text-sm">
                  <p>Current applications in queue: 18</p>
                  <p>Spots are first-come, first-served.</p>
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
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Simplified Application Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Form Header */}
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-apple font-bold text-[hsl(var(--text-primary))] mb-3">
                  Let's Get You Started
                </h2>
                <p className="text-lg font-apple text-[hsl(var(--text-secondary))]">
                  Just the basics so we can build your custom growth plan.
                </p>
              </div>

              {/* Basic Info */}
              <div className="space-y-6">
                <h3 className="text-xl font-apple font-semibold text-[hsl(var(--text-primary))]">
                  Your Info
                </h3>
                <div className="grid gap-4">
                  <div>
                    <label className="block text-sm font-apple font-medium text-[hsl(var(--text-primary))] mb-2">
                      Your Name *
                    </label>
                    <Input
                      placeholder=""
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="font-apple"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-apple font-medium text-[hsl(var(--text-primary))] mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      placeholder=""
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="font-apple"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-apple font-medium text-[hsl(var(--text-primary))] mb-2">
                      Phone *
                    </label>
                    <Input
                      type="tel"
                      placeholder=""
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="font-apple"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-apple font-medium text-[hsl(var(--text-primary))] mb-2">
                      Company Name *
                    </label>
                    <Input
                      placeholder=""
                      value={formData.company}
                      onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                      className="font-apple"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-apple font-medium text-[hsl(var(--text-primary))] mb-2">
                      Website (optional)
                    </label>
                    <Input
                      type="url"
                      placeholder=""
                      value={formData.website}
                      onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
                      className="font-apple"
                    />
                  </div>
                </div>
              </div>

              {/* Goals & Logistics */}
              <div className="space-y-6">
                <h3 className="text-xl font-apple font-semibold text-[hsl(var(--text-primary))]">
                  Goals & Logistics
                </h3>
                
                <div>
                  <label className="block text-sm font-apple font-medium text-[hsl(var(--text-primary))] mb-2">
                    What's your #1 goal? *
                  </label>
                  <Select value={formData.primaryGoal} onValueChange={(value) => setFormData(prev => ({ ...prev, primaryGoal: value }))}>
                    <SelectTrigger className="font-apple">
                      <SelectValue placeholder="Select your primary goal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="revenue">Increase revenue</SelectItem>
                      <SelectItem value="leads">Get more qualified leads</SelectItem>
                      <SelectItem value="organic">Build organic audience</SelectItem>
                      <SelectItem value="conversion">Fix/build website or funnel</SelectItem>
                      <SelectItem value="scale">Scale what's already working</SelectItem>
                      <SelectItem value="automate">Automate manual processes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

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
                      <SelectItem value="deciding">Still deciding</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-apple font-medium text-[hsl(var(--text-primary))] mb-2">
                    Monthly marketing budget? *
                  </label>
                  <Select value={formData.budget} onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}>
                    <SelectTrigger className="font-apple">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1k-2.5k">$1,000-$2,500/month</SelectItem>
                      <SelectItem value="3k-5k">$3,000-$5,000/month</SelectItem>
                      <SelectItem value="6k-8k">$6,000-$8,000/month</SelectItem>
                      <SelectItem value="9k-10k">$9,000-$10,000/month</SelectItem>
                      <SelectItem value="10k+">$10,000+/month</SelectItem>
                      <SelectItem value="scholarship">Hoping for Founder's Scholarship</SelectItem>
                      <SelectItem value="unsure">Not sure—tell me on the call</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Context */}
              <div className="space-y-6">
                <h3 className="text-xl font-apple font-semibold text-[hsl(var(--text-primary))]">
                  Quick Context
                </h3>
                
                <div>
                  <label className="block text-sm font-apple font-medium text-[hsl(var(--text-primary))] mb-2">
                    Why now? What's pushing you to fix your marketing? *
                  </label>
                  <Textarea
                    placeholder=""
                    value={formData.whyNow}
                    onChange={(e) => setFormData(prev => ({ ...prev, whyNow: e.target.value }))}
                    rows={3}
                    className="font-apple"
                    required
                  />
                </div>
              </div>

              {/* Scholarship Section */}
              {route === 'scholarship' && (
                <div className="space-y-6 border-t border-[hsl(var(--border-subtle))] pt-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-apple font-bold text-[hsl(var(--text-primary))] mb-2">
                      🎓 Scholarship Application
                    </h3>
                    <p className="font-apple text-[hsl(var(--text-secondary))]">
                      50% off for 3 months. Just 2 quick questions:
                    </p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-apple font-medium text-[hsl(var(--text-primary))] mb-2">
                      Why should we invest in YOUR growth? *
                    </label>
                    <Textarea
                      placeholder=""
                      value={formData.whyInvest}
                      onChange={(e) => setFormData(prev => ({ ...prev, whyInvest: e.target.value }))}
                      rows={3}
                      className="font-apple"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-apple font-medium text-[hsl(var(--text-primary))] mb-2">
                      What would you do with the money you save? *
                    </label>
                    <Textarea
                      placeholder=""
                      value={formData.useOfSavings}
                      onChange={(e) => setFormData(prev => ({ ...prev, useOfSavings: e.target.value }))}
                      rows={2}
                      className="font-apple"
                      required
                    />
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
                  I understand Amplo is month-to-month and I can cancel with 30 days' notice. I'm applying because I'm serious about growth. *
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
                    {route === 'scholarship' ? 'Submit Application + Scholarship Request →' : 'Submit Application →'}
                  </Button>
                </div>
                
                <p className="text-sm font-apple text-[hsl(var(--text-secondary))] text-center">
                  We'll email you within 24 hours
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimplifiedApplication;