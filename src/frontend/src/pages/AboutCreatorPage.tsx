import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ScreenLayout from '../components/ScreenLayout';
import { ArrowLeft } from 'lucide-react';

interface AboutCreatorPageProps {
  onBack: () => void;
  onNavigateToSafety: () => void;
  onNavigateToAboutCreator?: () => void;
}

export default function AboutCreatorPage({ onBack, onNavigateToSafety, onNavigateToAboutCreator }: AboutCreatorPageProps) {
  return (
    <ScreenLayout title="About the Creator" showDisclaimer={false} onNavigateToSafety={onNavigateToSafety} onNavigateToAboutCreator={onNavigateToAboutCreator}>
      <div className="space-y-6 max-w-2xl mx-auto">
        <Button
          onClick={onBack}
          variant="ghost"
          className="text-app-text hover:bg-app-button/20"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Go back
        </Button>

        <Card className="bg-app-card border-2 border-app-text/10 rounded-3xl p-8 space-y-4">
          <p className="text-app-text/80 text-sm leading-relaxed">
            Hi, I'm Gabriella Gayle and I'm 9 years old.
          </p>
          <p className="text-app-text/80 text-sm leading-relaxed">
            I created My Health Buddy because I have health issue so I have to visit hospital a lot and sometimes it is hard to explain how my body feels.
          </p>
          <p className="text-app-text/80 text-sm leading-relaxed">
            I wanted to help children like me show their feelings quickly so trusted adults can understand and help.
          </p>
          <p className="text-app-text/80 text-sm leading-relaxed">
            This app was my idea and I helped design how it works.
          </p>
          <p className="text-app-text/80 text-sm leading-relaxed">
            Thank you for using my app 💛
          </p>
          
          <div className="pt-6 border-t border-app-text/10">
            <p className="text-app-text/50 text-xs text-center">
              © 2026 Gabriella Gayle. All rights reserved.
            </p>
          </div>
        </Card>
      </div>
    </ScreenLayout>
  );
}
