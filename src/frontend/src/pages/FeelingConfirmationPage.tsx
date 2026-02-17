import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ScreenLayout from '../components/ScreenLayout';
import { AlertCircle } from 'lucide-react';

interface FeelingConfirmationPageProps {
  feeling: string;
  onContinue: () => void;
  onNavigateToSafety: () => void;
  onNavigateToAboutCreator?: () => void;
}

export default function FeelingConfirmationPage({ feeling, onContinue, onNavigateToSafety, onNavigateToAboutCreator }: FeelingConfirmationPageProps) {
  return (
    <ScreenLayout 
      title={feeling}
      subtitle="It's okay — I can help you 💛"
      onNavigateToSafety={onNavigateToSafety}
      onNavigateToAboutCreator={onNavigateToAboutCreator}
    >
      <div className="flex flex-col items-center space-y-8">
        {/* Luma */}
        <div className="w-32 h-32">
          <img 
            src="/assets/generated/pulse-star.dim_512x512.png" 
            alt="Luma" 
            className="w-full h-full object-contain animate-pulse-gentle"
          />
        </div>

        {/* Emergency guidance */}
        <Card className="bg-app-important/10 border-2 border-app-important/30 rounded-2xl p-4 max-w-md">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-app-important flex-shrink-0 mt-0.5" />
            <div className="space-y-2">
              <p className="text-sm text-app-text/80 leading-relaxed">
                If you feel very sick, cannot breathe, or are unsafe, call your local emergency number (for example 999 or 911) or ask a trusted adult to help you.
              </p>
            </div>
          </div>
        </Card>

        {/* Continue button - LARGEST button in the app */}
        <Button 
          onClick={onContinue}
          className="w-full max-w-md h-24 text-2xl font-bold bg-app-important hover:bg-app-important/90 text-app-text rounded-3xl shadow-2xl scale-105"
        >
          Show this to a trusted adult
        </Button>
      </div>
    </ScreenLayout>
  );
}
