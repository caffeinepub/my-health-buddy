import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ScreenLayout from '../components/ScreenLayout';
import { ArrowLeft } from 'lucide-react';

interface FeelBetterPageProps {
  onBack: () => void;
  onNavigateToSafety: () => void;
}

export default function FeelBetterPage({ onBack, onNavigateToSafety }: FeelBetterPageProps) {
  return (
    <ScreenLayout helperMessage="You're doing the right thing." onNavigateToSafety={onNavigateToSafety}>
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

        {/* Breathing star */}
        <div className="flex flex-col items-center space-y-4">
          <p className="text-xl font-semibold text-app-text text-center">Follow the breathing star</p>
          <div className="w-48 h-48">
            <img 
              src="/assets/generated/pulse-star.dim_512x512.png" 
              alt="Breathing star" 
              className="w-full h-full object-contain animate-breathe"
            />
          </div>
          <p className="text-app-text/70 text-center">Breathe in... and out... slowly</p>
        </div>

        {/* Helpful suggestions */}
        <div className="space-y-4 max-w-md mx-auto">
          <Card className="bg-app-card border-2 border-app-text/10 rounded-3xl p-6">
            <div className="flex items-center space-x-4">
              <span className="text-4xl">💧</span>
              <div>
                <h3 className="text-lg font-bold text-app-text">Drink some water</h3>
                <p className="text-app-text/70">Take small sips</p>
              </div>
            </div>
          </Card>

          <Card className="bg-app-card border-2 border-app-text/10 rounded-3xl p-6">
            <div className="flex items-center space-x-4">
              <span className="text-4xl">🪑</span>
              <div>
                <h3 className="text-lg font-bold text-app-text">Sit and rest</h3>
                <p className="text-app-text/70">Find a comfy spot</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </ScreenLayout>
  );
}
