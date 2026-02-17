import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ScreenLayout from '../../components/ScreenLayout';
import { ArrowLeft } from 'lucide-react';

interface AboutPageProps {
  onBack: () => void;
  onNavigateToSafety: () => void;
  onNavigateToAboutCreator?: () => void;
}

export default function AboutPage({ onBack, onNavigateToSafety, onNavigateToAboutCreator }: AboutPageProps) {
  return (
    <ScreenLayout title="About this app" showDisclaimer={false} onNavigateToSafety={onNavigateToSafety} onNavigateToAboutCreator={onNavigateToAboutCreator}>
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
          <h2 className="text-xl font-bold text-app-text">Why this app exists</h2>
          <p className="text-app-text/80 leading-relaxed">
            Sometimes children find it hard to tell adults when they're not feeling well or need help. They might feel shy, worried, or just not know how to explain what's wrong.
          </p>
          <p className="text-app-text/80 leading-relaxed">
            My Health Buddy gives children a simple, gentle way to show how they feel. It's designed to make asking for help easier and less scary.
          </p>
        </Card>

        <Card className="bg-app-card border-2 border-app-text/10 rounded-3xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-app-text">What it does</h2>
          <ul className="space-y-3 text-app-text/80">
            <li className="flex items-start">
              <span className="mr-3">💛</span>
              <span>Helps children express physical discomfort</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">💛</span>
              <span>Provides a calm, reassuring interface</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">💛</span>
              <span>Creates a clear message for adults to see</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">💛</span>
              <span>Includes tools for daily mood tracking and calming exercises</span>
            </li>
          </ul>
        </Card>

        <Card className="bg-app-card border-2 border-app-text/10 rounded-3xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-app-text">Made with care</h2>
          <p className="text-app-text/80 leading-relaxed">
            This app was created with children's wellbeing at heart. It's free, private, and designed to be a helpful tool for communication between children and the adults who care for them.
          </p>
        </Card>
      </div>
    </ScreenLayout>
  );
}
