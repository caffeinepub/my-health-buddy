import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ScreenLayout from '../../components/ScreenLayout';
import { ArrowLeft } from 'lucide-react';

interface GrownUpsLockPageProps {
  onSuccess: () => void;
  onBack: () => void;
  onNavigateToSafety: () => void;
}

export default function GrownUpsLockPage({ onSuccess, onBack, onNavigateToSafety }: GrownUpsLockPageProps) {
  const [stage, setStage] = useState<'hold' | 'math'>('hold');
  const [isHolding, setIsHolding] = useState(false);
  const [holdProgress, setHoldProgress] = useState(0);
  const [mathAnswer, setMathAnswer] = useState('');
  const [mathQuestion, setMathQuestion] = useState({ num1: 0, num2: 0, answer: 0 });
  const [errorMessage, setErrorMessage] = useState('');
  const holdTimerRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Generate math question on mount
    generateMathQuestion();
    
    return () => {
      if (holdTimerRef.current) clearTimeout(holdTimerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, []);

  const generateMathQuestion = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setMathQuestion({ num1, num2, answer: num1 + num2 });
  };

  const handlePressStart = () => {
    setIsHolding(true);
    setHoldProgress(0);

    // Progress animation
    progressIntervalRef.current = setInterval(() => {
      setHoldProgress(prev => {
        if (prev >= 100) {
          if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
          return 100;
        }
        return prev + (100 / 30); // 3 seconds = 30 intervals at 100ms each
      });
    }, 100);

    // Complete after 3 seconds
    holdTimerRef.current = setTimeout(() => {
      setIsHolding(false);
      setHoldProgress(0);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      setStage('math');
    }, 3000);
  };

  const handlePressEnd = () => {
    setIsHolding(false);
    setHoldProgress(0);
    if (holdTimerRef.current) clearTimeout(holdTimerRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
  };

  const handleMathSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (parseInt(mathAnswer) === mathQuestion.answer) {
      onSuccess();
    } else {
      setErrorMessage('Try again, grown-ups only');
      setMathAnswer('');
      setTimeout(() => setErrorMessage(''), 2000);
    }
  };

  // Check if press-and-hold is supported (skip on touch devices that might not support it well)
  const skipHold = 'ontouchstart' in window && stage === 'hold';

  return (
    <ScreenLayout showDisclaimer={false} onNavigateToSafety={onNavigateToSafety}>
      <div className="flex flex-col items-center space-y-8">
        {/* Back button */}
        <div className="w-full max-w-md">
          <Button
            onClick={onBack}
            variant="ghost"
            className="text-app-text hover:bg-app-button/20"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go back
          </Button>
        </div>

        {stage === 'hold' && !skipHold ? (
          <>
            {/* Star hold step */}
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold text-app-text">
                Press and hold the star for 3 seconds
              </h2>
            </div>

            <div className="relative">
              <button
                onMouseDown={handlePressStart}
                onMouseUp={handlePressEnd}
                onMouseLeave={handlePressEnd}
                onTouchStart={handlePressStart}
                onTouchEnd={handlePressEnd}
                className="relative flex flex-col items-center space-y-2 group"
              >
                <div className="relative w-32 h-32">
                  {/* Progress ring */}
                  {isHolding && (
                    <svg className="absolute inset-0 w-full h-full -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="60"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="none"
                        className="text-app-star"
                        strokeDasharray={`${2 * Math.PI * 60}`}
                        strokeDashoffset={`${2 * Math.PI * 60 * (1 - holdProgress / 100)}`}
                        style={{ transition: 'stroke-dashoffset 0.1s linear' }}
                      />
                    </svg>
                  )}
                  <img 
                    src="/assets/generated/pulse-star.dim_512x512.png" 
                    alt="Hold the star" 
                    className={`w-full h-full object-contain transition-transform ${isHolding ? 'scale-90' : 'group-hover:scale-110'}`}
                  />
                </div>
                {isHolding && (
                  <span className="text-base text-app-text/80 font-medium">
                    Keep holding...
                  </span>
                )}
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Math question step */}
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold text-app-text">
                Quick question
              </h2>
              <p className="text-app-text/70">
                Just to make sure you're a grown-up
              </p>
            </div>

            <form onSubmit={handleMathSubmit} className="w-full max-w-md space-y-6">
              <div className="text-center space-y-4">
                <p className="text-4xl font-bold text-app-text">
                  {mathQuestion.num1} + {mathQuestion.num2} = ?
                </p>
                <Input
                  type="number"
                  value={mathAnswer}
                  onChange={(e) => setMathAnswer(e.target.value)}
                  placeholder="Your answer"
                  className="text-center text-2xl h-16 bg-app-card border-2 border-app-text/20 rounded-2xl"
                  autoFocus
                />
              </div>

              {errorMessage && (
                <p className="text-center text-app-important font-medium animate-fade-in">
                  {errorMessage}
                </p>
              )}

              <Button
                type="submit"
                className="w-full h-14 text-lg font-semibold bg-app-button hover:bg-app-button/90 text-app-text rounded-3xl"
              >
                Check answer
              </Button>
            </form>
          </>
        )}
      </div>
    </ScreenLayout>
  );
}
