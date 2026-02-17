import { Button } from '@/components/ui/button';
import ScreenLayout from '../components/ScreenLayout';

type Screen = 
  | 'splash'
  | 'welcome'
  | 'menu'
  | 'feelings'
  | 'confirmation'
  | 'location'
  | 'adult-message'
  | 'energy-check'
  | 'tracker'
  | 'feel-better'
  | 'grownups-lock'
  | 'grownups-area'
  | 'grownups-parents'
  | 'grownups-teacher'
  | 'grownups-about'
  | 'grownups-privacy'
  | 'safety-notice';

interface MenuPageProps {
  onNavigate: (screen: Screen) => void;
  onNavigateToSafety: () => void;
  onNavigateToAboutCreator?: () => void;
}

export default function MenuPage({ onNavigate, onNavigateToSafety, onNavigateToAboutCreator }: MenuPageProps) {
  return (
    <ScreenLayout 
      showDisclaimer={true}
      onNavigateToSafety={onNavigateToSafety}
      onNavigateToAboutCreator={onNavigateToAboutCreator}
    >
      <div className="flex flex-col items-center space-y-6">
        {/* Luma character */}
        <div className="w-32 h-32">
          <img 
            src="/assets/generated/pulse-star.dim_512x512.png" 
            alt="Luma" 
            className="w-full h-full object-contain animate-pulse-gentle"
          />
        </div>

        {/* Main action buttons */}
        <div className="w-full max-w-sm space-y-4 pt-2">
          <Button 
            onClick={() => onNavigate('feelings')}
            className="w-full h-16 text-xl font-semibold bg-app-button hover:bg-app-button/90 text-app-text rounded-3xl shadow-lg"
          >
            How I feel
          </Button>

          <Button 
            onClick={() => onNavigate('energy-check')}
            className="w-full h-14 text-lg font-medium bg-app-button hover:bg-app-button/90 text-app-text rounded-3xl"
          >
            My energy today
          </Button>

          <Button 
            onClick={() => onNavigate('tracker')}
            className="w-full h-14 text-lg font-medium bg-app-button hover:bg-app-button/90 text-app-text rounded-3xl"
          >
            Daily feelings
          </Button>

          <Button 
            onClick={() => onNavigate('feel-better')}
            className="w-full h-14 text-lg font-medium bg-app-button hover:bg-app-button/90 text-app-text rounded-3xl"
          >
            Feel better
          </Button>
        </div>

        {/* Grown-ups access button */}
        <div className="pt-6">
          <Button
            onClick={() => onNavigate('grownups-lock')}
            variant="ghost"
            className="flex flex-col items-center space-y-2 hover:bg-app-button/20 rounded-2xl p-4"
          >
            <div className="w-16 h-16">
              <img 
                src="/assets/generated/pulse-star.dim_512x512.png" 
                alt="Parents, Teachers & Caregivers Only" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-sm font-medium text-app-text/70">
              Parents, Teachers & Caregivers Only
            </span>
          </Button>
        </div>
      </div>
    </ScreenLayout>
  );
}
