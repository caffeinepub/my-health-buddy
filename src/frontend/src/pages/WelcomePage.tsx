import { Button } from '@/components/ui/button';
import ScreenLayout from '../components/ScreenLayout';

interface WelcomePageProps {
  onStart: () => void;
  onNavigateToSafety: () => void;
}

export default function WelcomePage({ onStart, onNavigateToSafety }: WelcomePageProps) {
  return (
    <ScreenLayout showDisclaimer={false} onNavigateToSafety={onNavigateToSafety}>
      <div className="flex flex-col items-center space-y-8">
        {/* Luma character */}
        <div className="w-48 h-48">
          <img 
            src="/assets/generated/pulse-star.dim_512x512.png" 
            alt="Luma the helper" 
            className="w-full h-full object-contain animate-pulse-gentle"
          />
        </div>

        {/* Welcome message */}
        <div className="text-center space-y-3">
          <p className="text-2xl text-app-text leading-relaxed px-4">
            Hi, I'm Luma. I help you show how you feel.
          </p>
        </div>

        {/* Single Start button */}
        <div className="w-full max-w-sm pt-6">
          <Button 
            onClick={onStart}
            className="w-full h-20 text-2xl font-bold bg-app-button hover:bg-app-button/90 text-app-text rounded-3xl shadow-lg"
          >
            Start
          </Button>
        </div>
      </div>
    </ScreenLayout>
  );
}
