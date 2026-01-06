import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';

interface Step2Props {
  onNext: (businessModel: string, customModel?: string) => void;
  onBack: () => void;
}

const Step2 = ({ onNext, onBack }: Step2Props) => {
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [customModel, setCustomModel] = useState<string>('');
  const [showCustomInput, setShowCustomInput] = useState(false);

  const businessModels = [
    { value: 'ecommerce-physical', label: 'E-Commerce (Physical Products)', icon: '🛒' },
    { value: 'ecommerce-digital', label: 'E-Commerce (Digital Products / Courses)', icon: '💻' },
    { value: 'b2b-saas', label: 'B2B SaaS', icon: '🏢' },
    { value: 'b2b-services', label: 'B2B Services / Consulting', icon: '📊' },
    { value: 'local-services', label: 'Local Services (HVAC, Plumbing, Contractors)', icon: '🔧' },
    { value: 'coaching', label: 'Coaching / Education', icon: '🎓' },
    { value: 'other', label: 'Other', icon: '📱' }
  ];

  const handleModelSelect = (value: string) => {
    setSelectedModel(value);
    if (value === 'other') {
      setShowCustomInput(true);
    } else {
      setShowCustomInput(false);
      setCustomModel('');
      // Auto-advance after a short delay for visual feedback
      setTimeout(() => {
        onNext(value, '');
      }, 300);
    }
  };

  const handleCustomSubmit = () => {
    if (selectedModel === 'other' && customModel.trim()) {
      onNext(selectedModel, customModel);
    }
  };

  const handleNext = () => {
    if (selectedModel) {
      onNext(selectedModel, customModel);
    }
  };

  const canProceed = selectedModel && (selectedModel !== 'other' || customModel.trim());

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Progress Bar */}
      <div className="w-full bg-white border-b border-gray-100 py-4">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-black">Step 2 of 3</span>
            <span className="text-sm text-black">50%</span>
          </div>
          <Progress value={50} className="h-2" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center py-12">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-montserrat font-bold text-black mb-6">
            Perfect. Now let's get specific.
          </h1>

          <h2 className="text-2xl md:text-4xl font-bold text-black mb-8">
            What type of business are you running?
          </h2>

          <div className="grid gap-4 mb-8">
            {businessModels.map((model) => (
              <button
                key={model.value}
                onClick={() => handleModelSelect(model.value)}
                className={`p-4 rounded-lg border-2 transition-all duration-200 text-left flex items-center gap-4 ${
                  selectedModel === model.value
                    ? 'border-gold bg-gold/10 text-black'
                    : 'border-gray-200 hover:border-gold/50 text-black'
                }`}
              >
                <span className="text-2xl">{model.icon}</span>
                <span className="font-semibold text-lg">{model.label}</span>
              </button>
            ))}
          </div>

          {showCustomInput && (
            <div className="mb-8 space-y-4">
              <Input
                placeholder="Tell us more about your business..."
                value={customModel}
                onChange={(e) => setCustomModel(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleCustomSubmit()}
                className="text-center text-lg p-4"
              />
              <Button
                onClick={handleCustomSubmit}
                disabled={!customModel.trim()}
                className="btn-primary px-8 py-3"
              >
                Continue →
              </Button>
            </div>
          )}

          {!showCustomInput && (
            <p className="text-xs text-gray-500 text-center mb-4">
              Click any option to continue
            </p>
          )}
          
          <div className="flex justify-center">
            <Button
              onClick={onBack}
              variant="outline"
              className="px-8 py-3 text-sm"
            >
              ← Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;