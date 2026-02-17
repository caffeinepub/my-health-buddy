import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import ScreenLayout from '../components/ScreenLayout';
import { getPreferences } from '../state/preferences';

interface AdultMessagePageProps {
  onComplete: () => void;
  onNavigateToSafety: () => void;
}

export default function AdultMessagePage({ onComplete, onNavigateToSafety }: AdultMessagePageProps) {
  const [showEncouragement, setShowEncouragement] = useState(false);

  useEffect(() => {
    // Play gentle chime if sound is enabled
    const prefs = getPreferences();
    if (prefs.soundEnabled) {
      playGentleChime();
    }

    // Trigger vibration if available
    if ('vibrate' in navigator) {
      navigator.vibrate(100);
    }

    // Show encouragement after a moment
    const timer = setTimeout(() => {
      setShowEncouragement(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const playGentleChime = () => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = 523.25; // C5 note
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.5);
    } catch (error) {
      console.log('Audio not available');
    }
  };

  return (
    <ScreenLayout showDisclaimer={false} onNavigateToSafety={onNavigateToSafety}>
      <div className="flex flex-col items-center space-y-8">
        {/* Alert icon */}
        <div className="w-32 h-32 bg-app-important rounded-full flex items-center justify-center">
          <span className="text-6xl">🤚</span>
        </div>

        {/* Main message */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-app-text px-6">
            I need help. Please check on me.
          </h2>

          {showEncouragement && (
            <div className="pt-6 space-y-3 animate-fade-in">
              <p className="text-2xl text-app-text/80 leading-relaxed px-6">
                You did the right thing 💛
              </p>
            </div>
          )}
        </div>

        {/* Done button */}
        {showEncouragement && (
          <Button 
            onClick={onComplete}
            className="w-full max-w-sm h-16 text-xl font-semibold bg-app-button hover:bg-app-button/90 text-app-text rounded-3xl shadow-lg animate-fade-in"
          >
            All done
          </Button>
        )}
      </div>
    </ScreenLayout>
  );
}
