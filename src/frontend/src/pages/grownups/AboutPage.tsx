import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ScreenLayout from '../../components/ScreenLayout';
import { ArrowLeft } from 'lucide-react';

interface AboutPageProps {
  onBack: () => void;
}

export default function AboutPage({ onBack }: AboutPageProps) {
  return (
    <ScreenLayout title="About" showDisclaimer={false}>
      <div className="space-y-6 max-w-2xl mx-auto">
        <Button
          onClick={onBack}
          variant="ghost"
          className="text-app-text hover:bg-app-button/20"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Go back
        </Button>

        <div className="flex justify-center py-4">
          <img 
            src="/assets/generated/pulse-star.dim_512x512.png" 
            alt="Pulse" 
            className="w-32 h-32 object-contain"
          />
        </div>

        <Card className="bg-app-card border-2 border-app-text/10 rounded-3xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-app-text text-center">Hi, I'm Amanda (Pulse) 💫</h2>
          <div className="space-y-4 text-app-text/80 leading-relaxed">
            <p>
              I was made by someone who wanted to help kids like you.
            </p>
            <p>
              Sometimes it's really hard to explain how your body feels, especially when you're not feeling well or you're worried about something.
            </p>
            <p>
              I'm here to help you show grown-ups what's going on, so they can understand and help you feel better.
            </p>
            <p>
              You're never alone, and it's always okay to ask for help. 💚
            </p>
          </div>
        </Card>

        <Card className="bg-app-card border-2 border-app-text/10 rounded-3xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-app-text">Why I was made</h2>
          <p className="text-app-text/80 leading-relaxed">
            Every child deserves to be understood. This app was created to give children a voice when words feel too hard, and to help grown-ups know when a child needs support.
          </p>
        </Card>

        <div className="text-center pt-4">
          <p className="text-app-text/60 text-sm">
            Built with love using{' '}
            <a 
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-app-text/80"
            >
              caffeine.ai
            </a>
          </p>
          <p className="text-app-text/60 text-xs mt-2">
            © {new Date().getFullYear()} My Health Buddy
          </p>
        </div>
      </div>
    </ScreenLayout>
  );
}
