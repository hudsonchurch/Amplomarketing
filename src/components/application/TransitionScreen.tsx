import { useEffect, useState } from 'react';

interface TransitionScreenProps {
  onComplete: () => void;
}

const TransitionScreen = ({ onComplete }: TransitionScreenProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    "✨ Analyzing your answers...",
    "Perfect! Let's get you set up."
  ];

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setCurrentStep(1);
    }, 2000);

    const timer2 = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center space-y-8 max-w-md mx-auto px-6">
        {/* Loading Animation */}
        <div className="relative">
          <div className="w-16 h-16 mx-auto">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-[hsl(var(--gold-accent))]"></div>
          </div>
        </div>

        {/* Text */}
        <div className="space-y-4">
          <p className="text-xl font-apple font-medium text-[hsl(var(--text-primary))] transition-opacity duration-500">
            {steps[currentStep]}
          </p>
          
          {currentStep === 1 && (
            <div className="animate-fade-in">
              <div className="w-12 h-1 bg-[hsl(var(--gold-accent))] rounded-full mx-auto"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransitionScreen;