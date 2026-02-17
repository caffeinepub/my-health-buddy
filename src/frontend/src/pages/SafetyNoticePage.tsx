import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ScreenLayout from '../components/ScreenLayout';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

interface SafetyNoticePageProps {
  onBack: () => void;
}

export default function SafetyNoticePage({ onBack }: SafetyNoticePageProps) {
  return (
    <ScreenLayout title="Safety Notice" showDisclaimer={false}>
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
          <div className="flex items-center space-x-3">
            <AlertTriangle className="w-8 h-8 text-app-important" />
            <h2 className="text-xl font-bold text-app-text">Medical Disclaimer</h2>
          </div>
          <p className="text-app-text/80 leading-relaxed">
            My Health Buddy is designed to help children communicate how they feel. It does not provide medical advice, diagnosis, or treatment.
          </p>
          <p className="text-app-text/80 leading-relaxed">
            This app is not a substitute for professional medical care. If you have concerns about a child's health or wellbeing, please consult a qualified healthcare professional.
          </p>
        </Card>

        <Card className="bg-app-card border-2 border-app-text/10 rounded-3xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-app-text">Age Range</h2>
          <p className="text-app-text/80 leading-relaxed">
            Designed for children ages 4–12 with adult supervision.
          </p>
        </Card>

        <Card className="bg-app-card border-2 border-app-text/10 rounded-3xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-app-text">Emergency Guidance</h2>
          <p className="text-app-text/80 leading-relaxed">
            If a child is experiencing a medical emergency or is in immediate danger, seek emergency help right away.
          </p>
          <p className="text-app-text/80 leading-relaxed">
            If you are in immediate danger, call your local emergency number. In many countries this is 112 or 911. Ask a grown-up to help you call.
          </p>
          <p className="text-app-text/80 leading-relaxed">
            Contact your local emergency services immediately if:
          </p>
          <ul className="space-y-2 text-app-text/80 pl-4">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>The child is having difficulty breathing</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>The child is unconscious or unresponsive</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>The child has severe pain or injury</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>You believe the child is in immediate danger</span>
            </li>
          </ul>
        </Card>

        <Card className="bg-app-card border-2 border-app-text/10 rounded-3xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-app-text">How to Use This App Safely</h2>
          <p className="text-app-text/80 leading-relaxed">
            This app is a communication tool to help children express their feelings and physical sensations to trusted adults.
          </p>
          <p className="text-app-text/80 leading-relaxed">
            Always ensure a responsible adult is available to respond appropriately when a child uses this app to communicate their needs.
          </p>
        </Card>
      </div>
    </ScreenLayout>
  );
}
