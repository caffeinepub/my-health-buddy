import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ScreenLayout from '../components/ScreenLayout';
import { ArrowLeft } from 'lucide-react';

interface EnergyCheckPageProps {
  onBack: () => void;
  onNavigateToSafety: () => void;
}

export default function EnergyCheckPage({ onBack, onNavigateToSafety }: EnergyCheckPageProps) {
  const [energy, setEnergy] = useState<'full' | 'okay' | 'low'>('okay');

  const energyOptions = [
    { value: 'full' as const, label: 'Full', emoji: '⚡' },
    { value: 'okay' as const, label: 'Okay', emoji: '👍' },
    { value: 'low' as const, label: 'Low', emoji: '😴' },
  ];

  return (
    <ScreenLayout title="How much energy?" helperMessage="Tap how much energy you have right now." onNavigateToSafety={onNavigateToSafety}>
      <div className="space-y-8">
        {/* Back button */}
        <Button
          onClick={onBack}
          variant="ghost"
          className="text-app-text hover:bg-app-button/20"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Go back
        </Button>

        {/* Energy options - reduced size */}
        <div className="flex flex-col space-y-4 max-w-md mx-auto">
          {energyOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setEnergy(option.value)}
              className={`
                h-20 rounded-3xl border-4 transition-all
                flex items-center justify-center space-x-4
                ${energy === option.value 
                  ? 'bg-app-button border-app-star scale-105 shadow-lg' 
                  : 'bg-app-card border-app-text/10 hover:border-app-text/30'
                }
              `}
            >
              <span className="text-4xl">{option.emoji}</span>
              <span className={`text-xl font-bold ${energy === option.value ? 'text-app-text' : 'text-app-text/70'}`}>
                {option.label}
              </span>
            </button>
          ))}
        </div>

        {/* Visual indicator */}
        <div className="flex justify-center pt-4">
          <div className="w-24 h-24">
            <img 
              src="/assets/generated/pulse-star.dim_512x512.png" 
              alt="Luma" 
              className={`w-full h-full object-contain transition-opacity ${
                energy === 'full' ? 'opacity-100 animate-pulse-gentle' :
                energy === 'okay' ? 'opacity-70' :
                'opacity-40'
              }`}
            />
          </div>
        </div>
      </div>
    </ScreenLayout>
  );
}
