import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ScreenLayout from '../../components/ScreenLayout';
import { ArrowLeft, Heart } from 'lucide-react';

interface AboutPageProps {
  onBack: () => void;
  onNavigateToSafety: () => void;
}

export default function AboutPage({ onBack, onNavigateToSafety }: AboutPageProps) {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname)
    : 'unknown-app';

  return (
    <ScreenLayout title="About" showDisclaimer={false} onNavigateToSafety={onNavigateToSafety}>
      <div className="space-y-6 max-w-2xl mx-auto">
        <Button
          onClick={onBack}
          variant="ghost"
          className="text-app-text hover:bg-app-button/20"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Go back
        </Button>

        <Card className="bg-app-card border-2 border-app-text/10 rounded-3xl p-6 space-y-4">
          <div className="flex justify-center pb-4">
            <img 
              src="/assets/generated/pulse-star.dim_512x512.png" 
              alt="Luma" 
              className="w-24 h-24 object-contain animate-pulse-gentle"
            />
          </div>
          <h2 className="text-xl font-bold text-app-text text-center">Hi, I'm Luma!</h2>
          <p className="text-app-text/80 leading-relaxed">
            I was made to help children like you show grown-ups how you feel when it's hard to find the words.
          </p>
          <p className="text-app-text/80 leading-relaxed">
            Sometimes your tummy hurts, or your head feels funny, or you just need a break. That's okay! I'm here to help you tell someone.
          </p>
        </Card>

        <Card className="bg-app-card border-2 border-app-text/10 rounded-3xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-app-text">Why I was made</h2>
          <p className="text-app-text/80 leading-relaxed">
            Some children find it tricky to speak up when they don't feel well. Maybe they're shy, or worried, or just don't know how to explain it.
          </p>
          <p className="text-app-text/80 leading-relaxed">
            I help by giving you buttons to press and pictures to show. Then a grown-up can see what you need and help you feel better.
          </p>
        </Card>

        <Card className="bg-app-card border-2 border-app-text/10 rounded-3xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-app-text">You're doing great</h2>
          <p className="text-app-text/80 leading-relaxed">
            Remember: it's always okay to tell someone when you need help. You're being really brave by using this app.
          </p>
          <p className="text-app-text/80 leading-relaxed">
            The grown-ups around you care about you and want to make sure you're okay. 💚
          </p>
        </Card>

        {/* Attribution footer */}
        <div className="pt-8 pb-4 text-center space-y-2">
          <p className="text-app-text/60 text-sm">
            © {currentYear} My Health Buddy
          </p>
          <p className="text-app-text/60 text-sm flex items-center justify-center space-x-1">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-app-important fill-current" />
            <span>using</span>
            <a 
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-app-text/80 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </ScreenLayout>
  );
}
