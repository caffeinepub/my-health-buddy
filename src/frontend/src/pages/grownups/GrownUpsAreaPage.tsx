import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import ScreenLayout from '../../components/ScreenLayout';
import { ArrowLeft, Volume2, VolumeX, RotateCcw } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getPreferences, setPreferences } from '../../state/preferences';
import { resetTracker } from '../../state/tracker';

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

interface GrownUpsAreaPageProps {
  onNavigate: (screen: Screen) => void;
  onBack: () => void;
  onNavigateToSafety: () => void;
  onNavigateToAboutCreator?: () => void;
}

export default function GrownUpsAreaPage({ onNavigate, onBack, onNavigateToSafety, onNavigateToAboutCreator }: GrownUpsAreaPageProps) {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  useEffect(() => {
    const prefs = getPreferences();
    setSoundEnabled(prefs.soundEnabled);
  }, []);

  const handleSoundToggle = (checked: boolean) => {
    setSoundEnabled(checked);
    setPreferences({ soundEnabled: checked });
  };

  const handleResetTracker = () => {
    if (showResetConfirm) {
      resetTracker();
      setShowResetConfirm(false);
    } else {
      setShowResetConfirm(true);
      setTimeout(() => setShowResetConfirm(false), 3000);
    }
  };

  return (
    <ScreenLayout title="Grown-ups Area" showDisclaimer={false} onNavigateToSafety={onNavigateToSafety} onNavigateToAboutCreator={onNavigateToAboutCreator}>
      <div className="space-y-6 max-w-2xl mx-auto">
        <Button
          onClick={onBack}
          variant="ghost"
          className="text-app-text hover:bg-app-button/20"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Go back
        </Button>

        {/* Controls */}
        <Card className="bg-app-card border-2 border-app-text/10 rounded-3xl p-6 space-y-6">
          <h2 className="text-xl font-bold text-app-text">Settings</h2>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {soundEnabled ? <Volume2 className="w-5 h-5 text-app-text" /> : <VolumeX className="w-5 h-5 text-app-text/50" />}
              <span className="text-app-text font-medium">Sound effects</span>
            </div>
            <Switch checked={soundEnabled} onCheckedChange={handleSoundToggle} />
          </div>

          <div className="pt-4 border-t border-app-text/10">
            <Button
              onClick={handleResetTracker}
              variant="outline"
              className="w-full flex items-center justify-center space-x-2 border-2 border-app-text/20 hover:bg-app-button/20"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{showResetConfirm ? 'Click again to confirm reset' : 'Reset daily feelings tracker'}</span>
            </Button>
          </div>
        </Card>

        {/* Information pages */}
        <div className="space-y-3">
          <Button
            onClick={() => onNavigate('grownups-parents')}
            className="w-full h-14 text-lg font-medium bg-app-button hover:bg-app-button/90 text-app-text rounded-3xl justify-start px-6"
          >
            For Parents & Teachers
          </Button>

          <Button
            onClick={() => onNavigate('grownups-teacher')}
            className="w-full h-14 text-lg font-medium bg-app-button hover:bg-app-button/90 text-app-text rounded-3xl justify-start px-6"
          >
            Teacher Quick Guide
          </Button>

          <Button
            onClick={() => onNavigate('grownups-about')}
            className="w-full h-14 text-lg font-medium bg-app-button hover:bg-app-button/90 text-app-text rounded-3xl justify-start px-6"
          >
            About this app
          </Button>

          <Button
            onClick={() => onNavigate('grownups-privacy')}
            className="w-full h-14 text-lg font-medium bg-app-button hover:bg-app-button/90 text-app-text rounded-3xl justify-start px-6"
          >
            Privacy Policy
          </Button>
        </div>
      </div>
    </ScreenLayout>
  );
}
