import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ScreenLayout from '../components/ScreenLayout';
import { ArrowLeft, AlertCircle } from 'lucide-react';

interface SafetyNoticePageProps {
  onBack: () => void;
  onNavigateToAboutCreator?: () => void;
}

export default function SafetyNoticePage({ onBack, onNavigateToAboutCreator }: SafetyNoticePageProps) {
  return (
    <ScreenLayout title="Safety Notice" showDisclaimer={false} onNavigateToAboutCreator={onNavigateToAboutCreator}>
      <div className="space-y-6 max-w-2xl mx-auto">
        <Button
          onClick={onBack}
          variant="ghost"
          className="text-app-text hover:bg-app-button/20"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Go back
        </Button>

        <Card className="bg-app-important/10 border-2 border-app-important/30 rounded-3xl p-6 space-y-4">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-6 h-6 text-app-important flex-shrink-0 mt-1" />
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-app-text">Not medical advice</h2>
              <p className="text-app-text/80 leading-relaxed">
                This app is a communication tool, not a medical device. It does not diagnose conditions or provide medical advice.
              </p>
            </div>
          </div>
        </Card>

        <Card className="bg-app-card border-2 border-app-text/10 rounded-3xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-app-text">Age range</h2>
          <p className="text-app-text/80 leading-relaxed">
            Designed for children aged 4-12 with adult supervision. Younger children may need help using the app.
          </p>
        </Card>

        <Card className="bg-app-card border-2 border-app-text/10 rounded-3xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-app-text">In an emergency</h2>
          <ul className="space-y-3 text-app-text/80">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>If someone is seriously ill or injured, call emergency services immediately (112 in Europe, 911 in North America, or your local emergency number)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Do not rely on this app in emergency situations</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Always seek professional medical help for health concerns</span>
            </li>
          </ul>
        </Card>

        <Card className="bg-app-card border-2 border-app-text/10 rounded-3xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-app-text">Safe usage</h2>
          <ul className="space-y-3 text-app-text/80">
            <li className="flex items-start">
              <span className="mr-3">✓</span>
              <span>Use as a communication aid to help children express how they feel</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">✓</span>
              <span>Always respond to a child's message with care and appropriate action</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">✓</span>
              <span>Follow safeguarding and health procedures in your setting</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">✓</span>
              <span>Encourage children to also speak to trusted adults when they can</span>
            </li>
          </ul>
        </Card>
      </div>
    </ScreenLayout>
  );
}
