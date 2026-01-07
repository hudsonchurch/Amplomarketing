import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Star } from 'lucide-react';

interface FullApplicationProps {
  route: 'qualified' | 'scholarship';
  onSubmit: (formData: any) => void;
  onBack: () => void;
}

const FullApplication = ({ route, onSubmit, onBack }: FullApplicationProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    goals: [] as string[],
    customGoal: '',
    timeline: '',
    budget: '',
    whyNow: '',
    agreement: false,
    // Scholarship fields
    whyInvest: '',
    useOfSavings: ''
  });

  const goalOptions = [
    'Increase revenue',
    'Get more qualified leads',
    'Build organic audience (social, SEO)',
    'Fix/build my website or funnel',
    'Scale what\'s already working',
    'Automate manual processes'
  ];

  const handleGoalChange = (goal: string, checked: boolean) => {
    if (checked) {
      if (formData.goals.length < 2) {
        setFormData(prev => ({
          ...prev,
          goals: [...prev.goals, goal]
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        goals: prev.goals.filter(g => g !== goal)
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const isFormValid = formData.name && formData.email && formData.phone && 
                     formData.company && formData.timeline && formData.budget && 
                     formData.whyNow && formData.agreement &&
                     (route !== 'scholarship' || (formData.whyInvest && formData.useOfSavings));

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Progress Bar */}
      <div className="w-full bg-white border-b border-gray-100 py-4">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-black">Final Step</span>
            <span className="text-sm text-black">100%</span>
          </div>
          <Progress value={100} className="h-2" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 py-12">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Left Side - Trust Signals */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-black mb-4">
                  You Qualify! Let's Make This Official.
                </h1>
                <div className="space-y-3 text-black">
                  <p>Based on your answers, you're a perfect fit for Amplo.</p>
                  <p>Here's what happens next:</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✅</span>
                      <span>Fill out this quick form (2 minutes)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✅</span>
                      <span>We'll review within 24 hours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✅</span>
                      <span>You'll get a calendar link for your free strategy call</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✅</span>
                      <span>No pitch, no pressure-just real talk</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-current" />
                  ))}
                </div>
                <blockquote className="text-black mb-4 italic">
                  "The application process was so easy. Within 48 hours, I had my strategy call booked. 
                  Within 2 weeks, we were live. Best decision I made for my business."
                </blockquote>
                <div className="font-bold text-black">- Sarah K., E-Commerce Founder</div>
              </div>

              {/* Guarantee */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-2 text-black">
                  <span>🔒</span>
                  <span className="text-sm">
                    Your info is safe. We won't spam you or sell your data. 
                    We'll contact you ONCE with our decision. That's it.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Section 1: Your Info */}
                <div>
                  <h3 className="text-xl font-bold text-black mb-4">Your Info</h3>
                  <div className="grid gap-4">
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Your Name *
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        required
                      />
                      <p className="text-sm text-black mt-1">
                        (We'll text you updates-way faster than email)
                      </p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Company Name *
                      </label>
                      <Input
                        value={formData.company}
                        onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Website URL (if you have one)
                      </label>
                      <Input
                        type="url"
                        value={formData.website}
                        onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: Goals & Timeline */}
                <div>
                  <h3 className="text-xl font-bold text-black mb-4">Goals & Timeline</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        What's your PRIMARY goal in the next 90 days? * (Select up to 2)
                      </label>
                      <div className="space-y-2">
                        {goalOptions.map((goal) => (
                          <div key={goal} className="flex items-center space-x-2">
                            <Checkbox
                              id={goal}
                              checked={formData.goals.includes(goal)}
                              onCheckedChange={(checked) => handleGoalChange(goal, checked as boolean)}
                              disabled={!formData.goals.includes(goal) && formData.goals.length >= 2}
                            />
                            <label htmlFor={goal} className="text-black">{goal}</label>
                          </div>
                        ))}
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="other-goal"
                            checked={formData.goals.includes('other')}
                            onCheckedChange={(checked) => handleGoalChange('other', checked as boolean)}
                            disabled={!formData.goals.includes('other') && formData.goals.length >= 2}
                          />
                          <Input
                            placeholder="Other:"
                            value={formData.customGoal}
                            onChange={(e) => setFormData(prev => ({ ...prev, customGoal: e.target.value }))}
                            className="flex-1"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        When do you want to start? *
                      </label>
                      <Select value={formData.timeline} onValueChange={(value) => setFormData(prev => ({ ...prev, timeline: value }))}>
                        <SelectTrigger>
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
                  </div>
                </div>

                {/* Section 3: Budget */}
                <div>
                  <h3 className="text-xl font-bold text-black mb-4">Budget</h3>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      What's your realistic monthly marketing budget? *
                    </label>
                    <Select value={formData.budget} onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="foundation">$1,000-$2,500/month (Foundation)</SelectItem>
                        <SelectItem value="growth">$3,000-$5,000/month (Growth)</SelectItem>
                        <SelectItem value="scale">$6,000-$8,000/month (Scale)</SelectItem>
                        <SelectItem value="domination">$9,000-$10,000/month (Domination)</SelectItem>
                        <SelectItem value="scholarship">Hoping to qualify for Founder's Scholarship (50% off)</SelectItem>
                        <SelectItem value="unsure">Not sure-tell me more on the call</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Section 4: The Big Question */}
                <div>
                  <h3 className="text-xl font-bold text-black mb-4">The Big Question</h3>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Why now? What's pushing you to finally fix your marketing? *
                    </label>
                    <Textarea
                      value={formData.whyNow}
                      onChange={(e) => setFormData(prev => ({ ...prev, whyNow: e.target.value }))}
                      placeholder="Be honest. There's no 'right' answer. The more we understand your situation, the better we can help."
                      rows={4}
                      required
                    />
                    <div className="text-sm text-black mt-2">
                      <p className="font-medium mb-1">Examples:</p>
                      <ul className="space-y-1 text-black/80">
                        <li>• "I'm tired of inconsistent revenue. I need predictable growth."</li>
                        <li>• "I just got burned by another agency and I'm desperate for someone who actually cares."</li>
                        <li>• "We're about to raise a Series A and investors want to see scalable acquisition."</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Scholarship Section */}
                {route === 'scholarship' && (
                  <div>
                    <h3 className="text-xl font-bold text-black mb-4">Founder's Scholarship Application</h3>
                    <p className="text-black mb-4">
                      Based on your revenue, you might qualify for our Founder's Scholarship (50% off for 3 months).
                    </p>
                    <p className="text-black mb-6">To be considered, answer these two questions:</p>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-black mb-2">
                          1. Why should we invest in YOUR growth? What makes your business special? *
                        </label>
                        <Textarea
                          value={formData.whyInvest}
                          onChange={(e) => setFormData(prev => ({ ...prev, whyInvest: e.target.value }))}
                          placeholder="Be specific. We want to know what makes you different, what problem you solve, and why you're going to crush it with our help."
                          rows={3}
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-black mb-2">
                          2. If we gave you 50% off, what would you do with the money you save? *
                        </label>
                        <Textarea
                          value={formData.useOfSavings}
                          onChange={(e) => setFormData(prev => ({ ...prev, useOfSavings: e.target.value }))}
                          placeholder='Examples: "Reinvest into more ad spend," "Hire my first employee," "Buy inventory to scale faster"'
                          rows={2}
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Agreement */}
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="agreement"
                    checked={formData.agreement}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreement: checked as boolean }))}
                    required
                  />
                  <label htmlFor="agreement" className="text-sm text-black">
                    I understand that Amplo is month-to-month and I can cancel with 30 days' notice if it's not working. *
                  </label>
                </div>

                {/* Submit Button */}
                <div className="flex gap-4">
                  <Button
                    type="button"
                    onClick={onBack}
                    variant="outline"
                    className="px-8 py-4 text-lg"
                  >
                    ← Back
                  </Button>
                  
                  <Button
                    type="submit"
                    disabled={!isFormValid}
                    className="btn-primary flex-1 py-4 text-lg"
                  >
                    {route === 'scholarship' ? 'Submit Application + Scholarship Request →' : 'Submit Application →'}
                  </Button>
                </div>
                
                <p className="text-sm text-black text-center">
                  We'll email you within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullApplication;