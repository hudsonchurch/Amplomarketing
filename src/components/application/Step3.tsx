import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';

interface Step3Props {
  onNext: (seriousness: string) => void;
  onBack: () => void;
}

const Step3 = ({ onNext, onBack }: Step3Props) => {
  const [selectedSeriousness, setSelectedSeriousness] = useState<string>('');
  const navigate = useNavigate();

  const seriousnessOptions = [
    {
      value: 'extremely-serious',
      emoji: '🔥',
      title: 'Extremely Serious - I\'m Ready to Move FAST',
      description: 'I need this fixed yesterday. Let\'s get started ASAP.'
    },
    {
      value: 'serious',
      emoji: '✅',
      title: 'Serious - Ready Within 30 Days',
      description: 'I\'m committed, just need a bit of time to get things in order.'
    },
    {
      value: 'exploring',
      emoji: '🤔',
      title: 'Exploring Options - No Rush',
      description: 'I\'m researching solutions but not ready to commit yet.'
    },
    {
      value: 'curious',
      emoji: '💡',
      title: 'Just Curious - Gathering Info',
      description: 'I\'m in early research mode. Just want to see what\'s out there.'
    }
  ];

  const handleOptionClick = (value: string) => {
    setSelectedSeriousness(value);
    // Auto-advance after a short delay for visual feedback
    setTimeout(() => {
      onNext(value);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col relative">
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
      <div className="w-full bg-white border-b border-gray-100 py-4">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-black">Step 3 of 3</span>
            <span className="text-sm text-black">75%</span>
          </div>
          <Progress value={75} className="h-2" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center py-12">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-montserrat font-bold text-black mb-6">
            Last question (we promise).
          </h1>

          <h2 className="text-2xl md:text-4xl font-bold text-black mb-8">
            How serious are you about fixing your marketing RIGHT NOW?
          </h2>

          <div className="grid gap-4 mb-8">
            {seriousnessOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleOptionClick(option.value)}
                className={`p-6 rounded-lg border-2 transition-all duration-200 text-left ${
                  selectedSeriousness === option.value
                    ? 'border-gold bg-gold/10 text-black'
                    : 'border-gray-200 hover:border-gold/50 text-black'
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{option.emoji}</span>
                  <div>
                    <div className="font-bold text-lg mb-2">{option.title}</div>
                    <div className="text-black/80">{option.description}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4">
            <p className="text-xs text-gray-500 text-center">
              Click any option to see if you qualify
            </p>
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

export default Step3;