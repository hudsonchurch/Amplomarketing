import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';

const AlternativeOffer = () => {
  const [caseStudyForm, setCaseStudyForm] = useState({ email: '', name: '' });
  const [courseForm, setCourseForm] = useState({ email: '', name: '' });
  const [caseStudySubmitted, setCaseStudySubmitted] = useState(false);
  const [courseSubmitted, setCourseSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCaseStudySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!caseStudyForm.email) {
      alert('Please enter your email address.');
      return;
    }
    
    if (!caseStudyForm.email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }
    
    setIsLoading(true);
    try {
      console.log('Sending email to:', caseStudyForm.email);
      
      const { data, error } = await supabase.functions.invoke('email_capture_correct_domain_2026_01_06_19_18', {
        body: { email: caseStudyForm.email }
      });
      
      console.log('Response:', { data, error });
      
      if (error) {
        console.error('Supabase function error:', error);
        throw new Error(error.message || 'Failed to send email');
      }
      
      if (data && data.error) {
        console.error('Function returned error:', data.error);
        throw new Error(data.error);
      }
      
      setCaseStudySubmitted(true);
      console.log('Email sent successfully!');
    } catch (error: any) {
      console.error('Error sending email:', error);
      alert(`Sorry, there was an error: ${error.message}. Please try again or contact support.`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCourseSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!courseForm.email) {
      alert('Please enter your email address.');
      return;
    }
    
    if (!courseForm.email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }
    
    setIsLoading(true);
    try {
      console.log('Sending email to:', courseForm.email);
      
      const { data, error } = await supabase.functions.invoke('email_capture_correct_domain_2026_01_06_19_18', {
        body: { email: courseForm.email }
      });
      
      console.log('Response:', { data, error });
      
      if (error) {
        console.error('Supabase function error:', error);
        throw new Error(error.message || 'Failed to send email');
      }
      
      if (data && data.error) {
        console.error('Function returned error:', data.error);
        throw new Error(data.error);
      }
      
      setCourseSubmitted(true);
      console.log('Email sent successfully!');
    } catch (error: any) {
      console.error('Error sending email:', error);
      alert(`Sorry, there was an error: ${error.message}. Please try again or contact support.`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReApply = () => {
    // Navigate back to application
    window.location.href = '/apply';
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-3xl md:text-5xl font-montserrat font-bold text-black mb-6">
            You're Not Quite Ready for Amplo Yet<br />
            <span className="text-2xl md:text-3xl">(But Here's How We Can Still Help)</span>
          </h1>
          
          <div className="text-lg md:text-xl text-black mb-12 max-w-3xl mx-auto">
            <p className="mb-4">
              Based on your answers, you're a bit earlier in your journey than the businesses we typically partner with.
            </p>
            <p className="mb-4">That doesn't mean we can't help.</p>
            <p className="font-bold">We built something specifically for businesses at your stage:</p>
          </div>

          {/* Offers */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Offer 1: Case Study */}
            <Card className="text-left">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-full h-32 bg-gradient-to-r from-navy to-gold rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-2xl font-bold">CASE STUDY</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-black mb-4">
                    How We Took a $45K/Month E-Commerce Brand to $185K/Month in 90 Days
                  </h3>
                  
                  <div className="text-black space-y-2 mb-6">
                    <p>This 12-page case study breaks down:</p>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-green-500">✅</span>
                        <span>The exact funnel we built</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-500">✅</span>
                        <span>Ad creative that converted at 4.2x ROAS</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-500">✅</span>
                        <span>Email sequences that generated $40K in recovered revenue</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-500">✅</span>
                        <span>Organic TikTok strategy that hit 3M views</span>
                      </div>
                    </div>
                    <p className="font-semibold mt-4">Download it for free. No credit card required.</p>
                  </div>
                </div>

                {!caseStudySubmitted ? (
                  <form onSubmit={handleCaseStudySubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Your Email: *
                      </label>
                      <Input
                        type="email"
                        value={caseStudyForm.email}
                        onChange={(e) => setCaseStudyForm(prev => ({ ...prev, email: e.target.value }))}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Your Name:
                      </label>
                      <Input
                        value={caseStudyForm.name}
                        onChange={(e) => setCaseStudyForm(prev => ({ ...prev, name: e.target.value }))}
                      />
                    </div>
                    
                    <Button type="submit" className="btn-primary w-full py-3" disabled={isLoading}>
                      {isLoading ? 'Sending...' : 'Send Me the Case Study →'}
                    </Button>
                  </form>
                ) : (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                    <div className="text-green-600 font-bold mb-2">✅ Success!</div>
                    <p className="text-black">Check your email for the case study download link.</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Offer 2: Mini-Course */}
            <Card className="text-left">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-full h-32 bg-gradient-to-r from-gold to-navy rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-2xl font-bold">5-DAY COURSE</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-black mb-4">
                    The 5-Day Revenue Engine Blueprint
                  </h3>
                  
                  <div className="text-black space-y-2 mb-6">
                    <p>A free email course that teaches you:</p>
                    <div className="space-y-1">
                      <div><strong>Day 1:</strong> How to audit your current marketing (and find what's broken)</div>
                      <div><strong>Day 2:</strong> The 3 traffic sources that actually convert</div>
                      <div><strong>Day 3:</strong> Landing pages that sell (without being salesy)</div>
                      <div><strong>Day 4:</strong> Email sequences that print money</div>
                      <div><strong>Day 5:</strong> How to scale without burning cash</div>
                    </div>
                  </div>
                </div>

                {!courseSubmitted ? (
                  <form onSubmit={handleCourseSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Your Email: *
                      </label>
                      <Input
                        type="email"
                        value={courseForm.email}
                        onChange={(e) => setCourseForm(prev => ({ ...prev, email: e.target.value }))}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Your Name:
                      </label>
                      <Input
                        value={courseForm.name}
                        onChange={(e) => setCourseForm(prev => ({ ...prev, name: e.target.value }))}
                      />
                    </div>
                    
                    <Button type="submit" className="btn-primary w-full py-3" disabled={isLoading}>
                      {isLoading ? 'Sending...' : 'Start the Free Course →'}
                    </Button>
                  </form>
                ) : (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                    <div className="text-green-600 font-bold mb-2">✅ Success!</div>
                    <p className="text-black">You'll receive Day 1 in your inbox within the next few minutes.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Come Back When Ready */}
          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-black mb-6">
              We'd Love to Work With You - When the Time Is Right
            </h2>
            
            <div className="text-lg text-black mb-6">
              <p className="mb-4">Right now, you're not quite at the stage where Amplo makes sense.</p>
              <p className="mb-4">But here's when you SHOULD re-apply:</p>
            </div>
            
            <div className="space-y-2 text-left max-w-2xl mx-auto mb-8">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✅</span>
                <span className="text-black">When you're doing $25K+/month in revenue</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✅</span>
                <span className="text-black">When you have $1,000+/month to invest in marketing</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✅</span>
                <span className="text-black">When you're serious about scaling (not just exploring)</span>
              </div>
            </div>
            
            <p className="text-black mb-6">
              Bookmark this page. Come back when you hit those milestones.<br />
              We'll be here.
            </p>
            
            <Button onClick={handleReApply} variant="outline" className="px-8 py-3">
              Re-Apply When I'm Ready →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlternativeOffer;