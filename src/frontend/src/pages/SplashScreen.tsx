import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [fadeState, setFadeState] = useState<'in' | 'visible' | 'out'>('in');

  useEffect(() => {
    // Fade in
    const fadeInTimer = setTimeout(() => {
      setFadeState('visible');
    }, 100);

    // Start fade out
    const fadeOutTimer = setTimeout(() => {
      setFadeState('out');
    }, 2000);

    // Navigate to welcome
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#D4E8F5] transition-opacity duration-500"
         style={{ opacity: fadeState === 'in' ? 0 : fadeState === 'out' ? 0 : 1 }}>
      <div className="flex flex-col items-center space-y-6">
        <img 
          src="/assets/file_0000000024fc724396b15f7fc4188f76.png" 
          alt="My Health Buddy Logo" 
          className="w-80 h-80 object-contain"
        />
        <h1 className="text-3xl font-bold text-app-text text-center px-8">
          My Health Buddy
        </h1>
      </div>
    </div>
  );
}
