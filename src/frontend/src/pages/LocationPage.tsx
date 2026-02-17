import { Button } from '@/components/ui/button';
import ScreenLayout from '../components/ScreenLayout';

interface LocationPageProps {
  onLocationSelected: (location: string) => void;
  onNavigateToSafety: () => void;
}

export default function LocationPage({ onLocationSelected, onNavigateToSafety }: LocationPageProps) {
  return (
    <ScreenLayout showDisclaimer={false} onNavigateToSafety={onNavigateToSafety}>
      <div className="flex flex-col items-center space-y-8">
        {/* Luma */}
        <div className="w-32 h-32">
          <img 
            src="/assets/generated/pulse-star.dim_512x512.png" 
            alt="Luma" 
            className="w-full h-full object-contain animate-pulse-gentle"
          />
        </div>

        {/* Question */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-app-text">
            Where are you?
          </h2>
        </div>

        {/* Location buttons */}
        <div className="w-full max-w-sm space-y-4 pt-4">
          <Button 
            onClick={() => onLocationSelected('At school')}
            className="w-full h-20 text-2xl font-semibold bg-app-button hover:bg-app-button/90 text-app-text rounded-3xl shadow-lg"
          >
            At school
          </Button>

          <Button 
            onClick={() => onLocationSelected('At home')}
            className="w-full h-20 text-2xl font-semibold bg-app-button hover:bg-app-button/90 text-app-text rounded-3xl shadow-lg"
          >
            At home
          </Button>

          <Button 
            onClick={() => onLocationSelected('Outside')}
            className="w-full h-20 text-2xl font-semibold bg-app-button hover:bg-app-button/90 text-app-text rounded-3xl shadow-lg"
          >
            Outside
          </Button>
        </div>
      </div>
    </ScreenLayout>
  );
}
