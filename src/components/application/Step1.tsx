import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface Step1Props {
  onNext: (revenue: string) => void;
}

const Step1 = ({ onNext }: Step1Props) => {
  const [selectedRevenue, setSelectedRevenue] = useState<string>('');

  const revenueOptions = [
    { value: 'early-stage', label: '$0 - $25K/month', range: '$0-$25K' },
    { value: 'early-growth', label: '$25K - $50K/month', range: '$25K-$50K' },
    { value: 'growth', label: '$50K - $100K/month', range: '$50K-$100K' },
    { value: 'established', label: '$100K - $250K/month', range: '$100K-$250K' },
    { value: 'scale', label: '$250K - $500K/month', range: '$250K-$500K' },
    { value: 'enterprise', label: '$500K - $1M/month', range: '$500K-$1M' },
    { value: 'enterprise-plus', label: '$1M+/month', range: '$1M+' }
  ];

  const handleOptionClick = (value: string) => {
    setSelectedRevenue(value);
    // Auto-advance after a short delay for visual feedback
    setTimeout(() => {
      onNext(value);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Progress Bar */}
      <div className="w-full bg-white border-b border-gray-100 py-4">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-black">Step 1 of 3</span>
            <span className="text-sm text-black">25%</span>
          </div>
          <Progress value={25} className="h-2" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center py-12">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-montserrat font-bold text-black mb-6">
            Let's See If You're a Fit for Amplo
          </h1>
          
          <p className="text-lg md:text-xl text-black mb-12">
            This takes 60 seconds. No sales calls. No pressure. Just 3 quick questions to see if we can help.
          </p>

          <h2 className="text-2xl md:text-4xl font-bold text-black mb-8">
            What's your current monthly revenue?
          </h2>

          <div className="grid gap-4 mb-8">
            {revenueOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleOptionClick(option.value)}
                className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                  selectedRevenue === option.value
                    ? 'border-gold bg-gold/10 text-black'
                    : 'border-gray-200 hover:border-gold/50 text-black'
                }`}
              >
                <div className="font-semibold text-lg">{option.range}</div>
              </button>
            ))}
          </div>

          <p className="text-sm text-black mb-8">
            Don't worry—there's no "wrong" answer. We work with businesses at different stages.
          </p>

          <p className="text-xs text-gray-500 text-center">
            Click any option to continue
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step1;