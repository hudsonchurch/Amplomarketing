import { useState, useEffect } from 'react';
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

  // Auto-scroll to top when step changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep]);

  const handleStep1Next = (revenue: string) => {
    setApplicationData(prev => ({ ...prev, revenue }));
    setCurrentStep(2);
  };

  const handleStep2Next = (businessModel: string, customModel?: string) => {
    setApplicationData(prev => ({ 
      ...prev, 
      businessModel,
      customBusinessModel: customModel 
    }));
    setCurrentStep(3);
  };

  const handleStep3Next = (seriousness: string) => {
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
      setCurrentStep(9); // Alternative Offer
      return;
    }
    
    // Route B: Scholarship Potential - Go directly to Calendly
    if ((revenueLevel === 'early-stage' || revenueLevel === 'early-growth') && 
        (seriousnessLevel === 'extremely-serious' || seriousnessLevel === 'serious')) {
      setRoute('scholarship');
      setCurrentStep(10); // Scholarship Calendly Page
      return;
    }
    
    // Route A: Qualified
    if ((revenueLevel === 'growth' || revenueLevel === 'established' || 
         revenueLevel === 'scale' || revenueLevel === 'enterprise' || 
         revenueLevel === 'enterprise-plus') && 
        (seriousnessLevel === 'extremely-serious' || seriousnessLevel === 'serious')) {
      setRoute('qualified');
      setCurrentStep(5); // Value Reveal Page
      return;
    }
    
    // Default to alternative if no clear match
    setRoute('alternative');
    setCurrentStep(9); // Alternative Offer
  };

  const handleValueRevealContinue = () => {
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