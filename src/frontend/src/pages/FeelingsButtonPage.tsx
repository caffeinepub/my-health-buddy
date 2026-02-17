import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ScreenLayout from '../components/ScreenLayout';
import { ArrowLeft } from 'lucide-react';

interface FeelingsButtonPageProps {
  onFeelingSelected: (feeling: string) => void;
  onBack: () => void;
  onNavigateToSafety: () => void;
}

const feelings = [
  { label: 'My head hurts', icon: '/assets/generated/feel-head-hurts.dim_256x256.png' },
  { label: 'My tummy hurts', icon: '/assets/generated/feel-tummy-hurts.dim_256x256.png' },
  { label: 'I feel sick', icon: '/assets/generated/feel-sick.dim_256x256.png' },
  { label: 'I feel dizzy', icon: '/assets/generated/feel-dizzy.dim_256x256.png' },
  { label: 'I feel worried', icon: '/assets/generated/feel-worried.dim_256x256.png' },
  { label: "I'm very tired", icon: '/assets/generated/feel-tired.dim_256x256.png' },
  { label: 'My heart is racing', icon: '/assets/generated/feel-heart-racing.dim_256x256.png' },
  { label: 'Hard to breathe', icon: '/assets/generated/feel-hard-to-breathe.dim_256x256.png' },
  { label: 'My legs aching', icon: '/assets/generated/feel-legs-aching.dim_256x256.png' },
  { label: 'I need a break', icon: '/assets/generated/feel-need-break.dim_256x256.png' },
];

export default function FeelingsButtonPage({ onFeelingSelected, onBack, onNavigateToSafety }: FeelingsButtonPageProps) {
  return (
    <ScreenLayout title="What hurts?" noScroll={true} onNavigateToSafety={onNavigateToSafety}>
      <div className="space-y-4">
        {/* Back button */}
        <Button
          onClick={onBack}
          variant="ghost"
          className="text-app-text hover:bg-app-button/20"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Go back
        </Button>

        {/* Feelings grid - compact to fit all on screen */}
        <div className="grid grid-cols-2 gap-3 max-w-2xl mx-auto">
          {feelings.map((feeling) => (
            <Card
              key={feeling.label}
              onClick={() => onFeelingSelected(feeling.label)}
              className="bg-app-card hover:bg-app-card/80 cursor-pointer transition-all hover:scale-105 active:scale-95 border-2 border-app-text/10 rounded-2xl p-3 flex flex-col items-center justify-center space-y-2 min-h-[120px]"
            >
              <img 
                src={feeling.icon} 
                alt={feeling.label}
                className="w-14 h-14 object-contain"
              />
              <p className="text-center text-app-text font-medium text-sm leading-tight">
                {feeling.label}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </ScreenLayout>
  );
}
