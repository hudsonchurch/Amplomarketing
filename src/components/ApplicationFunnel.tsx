import { useState } from 'react';
import Step1 from '@/components/application/Step1';
import Step2 from '@/components/application/Step2';
import Step3 from '@/components/application/Step3';
import FullApplication from '@/components/application/FullApplication';
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
    
    // Determine routing logic
    const revenueLevel = prev.revenue;
    const seriousnessLevel = seriousness;
    
    // Route C: Not Qualified
    if (seriousnessLevel === 'exploring' || seriousnessLevel === 'curious') {
      setRoute('alternative');
      setCurrentStep(7); // Alternative offer page
      return;
    }
    
    // Route C: Too early (very low revenue)
    if (revenueLevel === 'early-stage' && (seriousnessLevel === 'exploring' || seriousnessLevel === 'curious')) {
      setRoute('alternative');
      setCurrentStep(7);
      return;
    }
    
    // Route B: Scholarship Potential
    if ((revenueLevel === 'early-stage' || revenueLevel === 'early-growth') && 
        (seriousnessLevel === 'extremely-serious' || seriousnessLevel === 'serious')) {
      setRoute('scholarship');
      setCurrentStep(4);
      return;
    }
    
    // Route A: Qualified
    if ((revenueLevel === 'growth' || revenueLevel === 'established' || 
         revenueLevel === 'scale' || revenueLevel === 'enterprise' || 
         revenueLevel === 'enterprise-plus') && 
        (seriousnessLevel === 'extremely-serious' || seriousnessLevel === 'serious')) {
      setRoute('qualified');
      setCurrentStep(4);
      return;
    }
    
    // Default to alternative if no clear match
    setRoute('alternative');
    setCurrentStep(7);
  };

  const handleApplicationSubmit = (formData: any) => {
    setApplicationData(prev => ({ ...prev, formData }));
    
    if (route === 'qualified') {
      setCurrentStep(5); // Thank You Approved
    } else if (route === 'scholarship') {
      setCurrentStep(6); // Thank You Scholarship
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
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
        return (
          <FullApplication 
            route={route as 'qualified' | 'scholarship'} 
            onSubmit={handleApplicationSubmit}
            onBack={handleBack}
          />
        );
      
      case 5:
        return <ThankYouApproved businessModel={applicationData.businessModel} />;
      
      case 6:
        return <ThankYouScholarship />;
      
      case 7:
        return <AlternativeOffer />;
      
      default:
        return <Step1 onNext={handleStep1Next} />;
    }
  };

  return (
    <div className="min-h-screen">
      {renderCurrentStep()}
    </div>
  );
};

export default ApplicationFunnel;