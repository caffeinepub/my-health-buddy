import { Button } from '@/components/ui/button';
import ScreenLayout from '../components/ScreenLayout';

interface FeelingConfirmationPageProps {
  feeling: string;
  onContinue: () => void;
}

export default function FeelingConfirmationPage({ feeling, onContinue }: FeelingConfirmationPageProps) {
  return (
    <ScreenLayout helperMessage="Let's tell a grown-up">
      <div className="flex flex-col items-center space-y-8">
        {/* Luma */}
        <div className="w-32 h-32">
          <img 
            src="/assets/generated/pulse-star.dim_512x512.png" 
            alt="Luma" 
            className="w-full h-full object-contain animate-pulse-gentle"
          />
        </div>

        {/* Selected feeling */}
        <div className="text-center">
          <p className="text-2xl font-bold text-app-text">
            {feeling}
          </p>
        </div>

        {/* Continue button - LARGEST button in the app */}
        <Button 
          onClick={onContinue}
          className="w-full max-w-md h-24 text-2xl font-bold bg-app-important hover:bg-app-important/90 text-app-text rounded-3xl shadow-2xl scale-105"
        >
          Show this to an adult
        </Button>
      </div>
    </ScreenLayout>
  );
}
