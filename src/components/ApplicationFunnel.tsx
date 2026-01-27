import { useState, useEffect } from 'react';
import { 
  trackQuizStarted, 
  trackQuizQuestionAnswered, 
  trackQuizCompleted, 
  trackQuizResultViewed,
  trackLead,
  newEventId,
  getStoredTrackingData
} from '@/lib/metaPixel';
import Step1 from '@/components/application/Step1';
import Step2 from '@/components/application/Step2';
import Step3 from '@/components/application/Step3';
import TransitionScreen from '@/components/application/TransitionScreen';
import ValueRevealPage from '@/components/application/ValueRevealPage';
import SimplifiedApplication from '@/components/application/SimplifiedApplication';
import ThankYouApproved from '@/components/application/ThankYouApproved';
import ThankYouScholarship from '@/components/application/ThankYouScholarship';
import AlternativeOffer from '@/components/application/AlternativeOffer';
import ScholarshipCalendly from '@/components/application/ScholarshipCalendly';
import QualifiedCalendly from '@/components/application/QualifiedCalendly';

interface ApplicationData {
  revenue: string;
  businessModel: string;
  customBusinessModel?: string;
  seriousness: string;
  formData?: any;
}

const ApplicationFunnel = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [applicationData, setApplicationData] = useState<ApplicationData>({
    revenue: '',
    businessModel: '',
    seriousness: ''
  });
  const [route, setRoute] = useState<'qualified' | 'scholarship' | 'alternative' | null>(null);
  const [pendingSeriousness, setPendingSeriousness] = useState<string>('');
  const [quizStartTime, setQuizStartTime] = useState<number>(Date.now());
  const [quizEventId, setQuizEventId] = useState<string>(newEventId());

  // Auto-scroll to top when step changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Track quiz start with comprehensive data
    if (currentStep === 1) {
      setQuizStartTime(Date.now());
      const trackingData = getStoredTrackingData();
      trackQuizStarted({
        quiz_name: 'Amplo Growth Audit Quiz',
        quiz_version: 'v1',
        traffic_source: trackingData.utm_source || 'direct',
        page_url: window.location.href
      }, quizEventId);
    }
  }, [currentStep]);

  const handleStep1Next = (revenue: string) => {
    trackQuizQuestionAnswered({
      quiz_name: 'Amplo Growth Audit Quiz',
      question_number: 1,
      question_id: 'revenue',
      answer_id: revenue,
      total_questions: 3
    }, `${quizEventId}-q1`);
    
    setApplicationData(prev => ({ ...prev, revenue }));
    setCurrentStep(2);
  };

  const handleStep2Next = (businessModel: string, customModel?: string) => {
    trackQuizQuestionAnswered({
      quiz_name: 'Amplo Growth Audit Quiz',
      question_number: 2,
      question_id: 'business_model',
      answer_id: customModel || businessModel,
      total_questions: 3
    }, `${quizEventId}-q2`);
    
    setApplicationData(prev => ({ 
      ...prev, 
      businessModel,
      customBusinessModel: customModel 
    }));
    setCurrentStep(3);
  };

  const handleStep3Next = (seriousness: string) => {
    trackQuizQuestionAnswered({
      quiz_name: 'Amplo Growth Audit Quiz',
      question_number: 3,
      question_id: 'seriousness',
      answer_id: seriousness,
      total_questions: 3
    }, `${quizEventId}-q3`);
    
    setApplicationData(prev => ({ ...prev, seriousness }));
    setPendingSeriousness(seriousness);
    
    // Show transition screen first
    setCurrentStep(4); // Transition screen
  };

  const handleTransitionComplete = () => {
    // Determine routing logic based on user answers
    const revenueLevel = applicationData.revenue;
    const seriousnessLevel = pendingSeriousness || applicationData.seriousness;
    
    // Route C: Not Qualified
    if (seriousnessLevel === 'exploring' || seriousnessLevel === 'curious') {
      setRoute('alternative');
      setCurrentStep(9); // Alternative Offer
      return;
    }
    
    // Route C: Too early (very low revenue)
    if (revenueLevel === 'early-stage' && (seriousnessLevel === 'exploring' || seriousnessLevel === 'curious')) {
      setRoute('alternative');
      
      // Track quiz completion for alternative route
      const completionTime = Math.round((Date.now() - quizStartTime) / 1000);
      const trackingData = getStoredTrackingData();
      
      trackQuizCompleted({
        quiz_name: 'Amplo Growth Audit Quiz',
        quiz_version: 'v1',
        total_questions: 3,
        completion_time_sec: completionTime,
        result_type: 'Alternative',
        traffic_source: trackingData.utm_source || 'direct',
        page_url: window.location.href
      }, `${quizEventId}-complete`);
      
      setCurrentStep(9); // Alternative Offer
      return;
    }
    
    // Route B: Scholarship Potential - Go directly to Calendly
    if ((revenueLevel === 'early-stage' || revenueLevel === 'early-growth') && 
        (seriousnessLevel === 'extremely-serious' || seriousnessLevel === 'serious')) {
      setRoute('scholarship');
      
      // Track quiz completion for scholarship route
      const completionTime = Math.round((Date.now() - quizStartTime) / 1000);
      const trackingData = getStoredTrackingData();
      
      trackQuizCompleted({
        quiz_name: 'Amplo Growth Audit Quiz',
        quiz_version: 'v1',
        total_questions: 3,
        completion_time_sec: completionTime,
        result_type: 'Scholarship',
        traffic_source: trackingData.utm_source || 'direct',
        page_url: window.location.href
      }, `${quizEventId}-complete`);
      
      setCurrentStep(10); // Scholarship Calendly Page
      return;
    }
    
    // Route A: Qualified
    if ((revenueLevel === 'growth' || revenueLevel === 'established' || 
         revenueLevel === 'scale' || revenueLevel === 'enterprise' || 
         revenueLevel === 'enterprise-plus') && 
        (seriousnessLevel === 'extremely-serious' || seriousnessLevel === 'serious')) {
      setRoute('qualified');
      
      // Track qualified user - this is our highest value conversion
      const completionTime = Math.round((Date.now() - quizStartTime) / 1000);
      const trackingData = getStoredTrackingData();
      
      // Track quiz completion
      trackQuizCompleted({
        quiz_name: 'Amplo Growth Audit Quiz',
        quiz_version: 'v1',
        total_questions: 3,
        completion_time_sec: completionTime,
        result_type: 'Qualified',
        traffic_source: trackingData.utm_source || 'direct',
        page_url: window.location.href
      }, `${quizEventId}-complete`);
      
      // Track as qualified lead (no value to avoid Purchase events)
      trackLead({
        content_name: 'Amplo Growth Audit Quiz',
        lead_type: 'quiz_result'
      }, `${quizEventId}-lead`);
      
      setCurrentStep(5); // Value Reveal Page
      return;
    }
    
    // Default to alternative if no clear match
    setRoute('alternative');
    setCurrentStep(9); // Alternative Offer
  };

  const handleValueRevealContinue = () => {
    // Track result viewing
    trackQuizResultViewed({
      quiz_name: 'Amplo Growth Audit Quiz',
      result_type: route || 'unknown',
      recommendations_shown: route === 'qualified' ? 5 : 3
    }, `${quizEventId}-result`);
    
    if (route === 'qualified') {
      setCurrentStep(11); // Qualified Calendly Page with FAQ
    } else {
      setCurrentStep(6); // Simplified Application Form (for other routes)
    }
  };

  const handleValueRevealResources = () => {
    setCurrentStep(9); // Alternative Offer (free resources)
  };

  const handleApplicationSubmit = (formData: any) => {
    setApplicationData(prev => ({ ...prev, formData }));
    
    if (route === 'qualified') {
      setCurrentStep(7); // Thank You Approved
    } else if (route === 'scholarship') {
      setCurrentStep(8); // Thank You Scholarship
    }
  };

  const handleBack = () => {
    if (currentStep > 1 && currentStep !== 4) { // Don't allow back from transition
      setCurrentStep(currentStep - 1);
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 onNext={handleStep1Next} />;
      
      case 2:
        return <Step2 onNext={handleStep2Next} onBack={handleBack} />;
      
      case 3:
        return <Step3 onNext={handleStep3Next} onBack={handleBack} />;
      
      case 4:
        return <TransitionScreen onComplete={handleTransitionComplete} />;
      
      case 5:
        return (
          <ValueRevealPage 
            onContinue={handleValueRevealContinue}
            onGetResources={handleValueRevealResources}
            route={route}
          />
        );
      
      case 6:
        return (
          <SimplifiedApplication 
            route={route as 'qualified' | 'scholarship'} 
            onSubmit={handleApplicationSubmit}
            onBack={handleBack}
            userAnswers={{
              revenue: applicationData.revenue,
              businessModel: applicationData.businessModel,
              seriousness: applicationData.seriousness
            }}
          />
        );
      
      case 7:
        return <ThankYouApproved businessModel={applicationData.businessModel} />;
      
      case 8:
        return <ThankYouScholarship />;
      
      case 9:
        return <AlternativeOffer />;
      
      case 10:
        return <ScholarshipCalendly />;
      
      case 11:
        return <QualifiedCalendly />;
      
      default:
        return <Step1 onNext={handleStep1Next} />;
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {renderCurrentStep()}
    </div>
  );
};

export default ApplicationFunnel;