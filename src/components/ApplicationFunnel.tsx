import { useState } from 'react';
import Step1 from '@/components/application/Step1';
import Step2 from '@/components/application/Step2';
import Step3 from '@/components/application/Step3';
import TransitionScreen from '@/components/application/TransitionScreen';
import ValueRevealPage from '@/components/application/ValueRevealPage';
import SimplifiedApplication from '@/components/application/SimplifiedApplication';
import ThankYouApproved from '@/components/application/ThankYouApproved';
import ThankYouScholarship from '@/components/application/ThankYouScholarship';
import AlternativeOffer from '@/components/application/AlternativeOffer';

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
    console.log('Step 3 Next clicked with seriousness:', seriousness);
    console.log('Current application data:', applicationData);
    
    setApplicationData(prev => ({ ...prev, seriousness }));
    setPendingSeriousness(seriousness);
    
    // Show transition screen first
    setCurrentStep(4); // Transition screen
  };

  const handleTransitionComplete = () => {
    console.log('Transition complete - determining route');
    
    // Determine routing logic based on user answers
    const revenueLevel = applicationData.revenue;
    const seriousnessLevel = pendingSeriousness || applicationData.seriousness;
    
    console.log('Revenue level:', revenueLevel);
    console.log('Seriousness level:', seriousnessLevel);
    console.log('Full application data:', applicationData);
    
    // Route C: Not Qualified
    if (seriousnessLevel === 'exploring' || seriousnessLevel === 'curious') {
      console.log('Route C: Not qualified - not serious enough');
      setRoute('alternative');
      setCurrentStep(9); // Alternative Offer
      return;
    }
    
    // Route C: Too early (very low revenue)
    if (revenueLevel === 'early-stage' && (seriousnessLevel === 'exploring' || seriousnessLevel === 'curious')) {
      console.log('Route C: Too early - low revenue and not serious');
      setRoute('alternative');
      setCurrentStep(9); // Alternative Offer
      return;
    }
    
    // Route B: Scholarship Potential
    if ((revenueLevel === 'early-stage' || revenueLevel === 'early-growth') && 
        (seriousnessLevel === 'extremely-serious' || seriousnessLevel === 'serious')) {
      console.log('Route B: Scholarship potential');
      setRoute('scholarship');
      setCurrentStep(5); // Value Reveal Page
      return;
    }
    
    // Route A: Qualified
    if ((revenueLevel === 'growth' || revenueLevel === 'established' || 
         revenueLevel === 'scale' || revenueLevel === 'enterprise' || 
         revenueLevel === 'enterprise-plus') && 
        (seriousnessLevel === 'extremely-serious' || seriousnessLevel === 'serious')) {
      console.log('Route A: Qualified');
      setRoute('qualified');
      setCurrentStep(5); // Value Reveal Page
      return;
    }
    
    // Default to alternative if no clear match
    console.log('Default: Alternative offer');
    setRoute('alternative');
    setCurrentStep(9); // Alternative Offer
  };

  const handleValueRevealContinue = () => {
    setCurrentStep(6); // Simplified Application Form
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