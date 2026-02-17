import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ScreenLayout from '../../components/ScreenLayout';
import { ArrowLeft } from 'lucide-react';

interface PrivacySafetyPageProps {
  onBack: () => void;
  onNavigateToSafety: () => void;
}

export default function PrivacySafetyPage({ onBack, onNavigateToSafety }: PrivacySafetyPageProps) {
  return (
    <ScreenLayout title="Privacy & Safety" showDisclaimer={false} onNavigateToSafety={onNavigateToSafety}>
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
          <h2 className="text-xl font-bold text-app-text">No data collection or tracking</h2>
          <p className="text-app-text/80 leading-relaxed">
            My Health Buddy does not collect, store, or share any personal information. There is no data collection of any kind, and no tracking or analytics.
          </p>
          <p className="text-app-text/80 leading-relaxed">
            Everything stays on your device. We do not know who uses this app, when they use it, or what they select.
          </p>
          <p className="text-app-text/80 leading-relaxed">
            The app works fully offline and does not send information anywhere.
          </p>
        </Card>

        <Card className="bg-app-card border-2 border-app-text/10 rounded-3xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-app-text">How it works</h2>
          <ul className="space-y-3 text-app-text/80">
            <li className="flex items-start">
              <span className="mr-3">✓</span>
              <span>Works completely offline</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">✓</span>
              <span>No accounts or sign-ins required</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">✓</span>
              <span>No ads or tracking</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">✓</span>
              <span>No analytics or data collection</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">✓</span>
              <span>Daily feelings saved only on this device</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">✓</span>
              <span>You can reset all saved data anytime</span>
            </li>
          </ul>
        </Card>

        <Card className="bg-app-card border-2 border-app-text/10 rounded-3xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-app-text">Safe to use</h2>
          <p className="text-app-text/80 leading-relaxed">
            This app is designed to be a safe, gentle helper. It doesn't diagnose medical conditions or replace professional advice.
          </p>
          <p className="text-app-text/80 leading-relaxed">
            If you have concerns about a child's health or wellbeing, please consult appropriate healthcare or safeguarding professionals.
          </p>
        </Card>

        <Card className="bg-app-card border-2 border-app-text/10 rounded-3xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-app-text">Questions?</h2>
          <p className="text-app-text/80 leading-relaxed">
            This app was created with care to help children communicate. It's free, private, and designed with children's wellbeing at heart.
          </p>
        </Card>
      </div>
    </ScreenLayout>
  );
}
