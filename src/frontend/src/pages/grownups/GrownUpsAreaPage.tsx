import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import ScreenLayout from '../../components/ScreenLayout';
import { ArrowLeft } from 'lucide-react';
import { getPreferences, setPreferences } from '../../state/preferences';
import { resetTracker } from '../../state/tracker';
import { useState } from 'react';

type Screen = 
  | 'splash'
  | 'welcome'
  | 'feelings'
  | 'confirmation'
  | 'adult-message'
  | 'energy-check'
  | 'tracker'
  | 'feel-better'
  | 'grownups-area'
  | 'grownups-parents'
  | 'grownups-teacher'
  | 'grownups-about'
  | 'grownups-privacy';

interface GrownUpsAreaPageProps {
  onNavigate: (screen: Screen) => void;
  onBack: () => void;
}

export default function GrownUpsAreaPage({ onNavigate, onBack }: GrownUpsAreaPageProps) {
  const [soundEnabled, setSoundEnabled] = useState(getPreferences().soundEnabled);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const handleSoundToggle = (checked: boolean) => {
    setSoundEnabled(checked);
    setPreferences({ soundEnabled: checked });
  };

  const handleResetTracker = () => {
    if (showResetConfirm) {
      resetTracker();
      setShowResetConfirm(false);
      alert('Tracker has been reset');
    } else {
      setShowResetConfirm(true);
      setTimeout(() => setShowResetConfirm(false), 3000);
    }
  };

  return (
    <ScreenLayout title="Grown-ups area" showDisclaimer={false}>
      <div className="space-y-6 max-w-md mx-auto">
        {/* Back button */}
        <Button
          onClick={onBack}
          variant="ghost"
          className="text-app-text hover:bg-app-button/20"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Go back
        </Button>

        {/* Sound toggle */}
        <Card className="bg-app-card border-2 border-app-text/10 rounded-3xl p-6">
          <div className="flex items-center justify-between">
            <Label htmlFor="sound-toggle" className="text-lg font-semibold text-app-text cursor-pointer">
              Sound
            </Label>
            <Switch
              id="sound-toggle"
              checked={soundEnabled}
              onCheckedChange={handleSoundToggle}
            />
          </div>
          <p className="text-app-text/70 text-sm mt-2">
            {soundEnabled ? 'Gentle chimes are on' : 'Gentle chimes are off'}
          </p>
        </Card>

        {/* Reset tracker */}
        <Card className="bg-app-card border-2 border-app-text/10 rounded-3xl p-6">
          <Button
            onClick={handleResetTracker}
            variant="outline"
            className={`w-full h-12 text-base font-semibold rounded-2xl ${
              showResetConfirm ? 'bg-app-important border-app-important' : ''
            }`}
          >
            {showResetConfirm ? 'Tap again to confirm' : 'Reset tracker'}
          </Button>
          <p className="text-app-text/70 text-sm mt-2 text-center">
            Clear all saved daily feelings
          </p>
        </Card>

        {/* Information pages */}
        <div className="space-y-3 pt-4">
          <Button
            onClick={() => onNavigate('grownups-parents')}
            className="w-full h-14 text-base font-medium bg-app-button hover:bg-app-button/90 text-app-text rounded-3xl"
          >
            For Parents & Teachers
          </Button>

          <Button
            onClick={() => onNavigate('grownups-teacher')}
            className="w-full h-14 text-base font-medium bg-app-button hover:bg-app-button/90 text-app-text rounded-3xl"
          >
            Teacher Quick Guide
          </Button>

          <Button
            onClick={() => onNavigate('grownups-about')}
            className="w-full h-14 text-base font-medium bg-app-button hover:bg-app-button/90 text-app-text rounded-3xl"
          >
            About
          </Button>

          <Button
            onClick={() => onNavigate('grownups-privacy')}
            className="w-full h-14 text-base font-medium bg-app-button hover:bg-app-button/90 text-app-text rounded-3xl"
          >
            Privacy & Safety
          </Button>
        </div>
      </div>
    </ScreenLayout>
  );
}
