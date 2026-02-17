import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ScreenLayout from '../../components/ScreenLayout';
import { ArrowLeft } from 'lucide-react';

interface ForParentsTeachersPageProps {
  onBack: () => void;
}

export default function ForParentsTeachersPage({ onBack }: ForParentsTeachersPageProps) {
  return (
    <ScreenLayout title="For Parents & Teachers" showDisclaimer={false}>
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
          <h2 className="text-xl font-bold text-app-text">What is My Health Buddy?</h2>
          <p className="text-app-text/80 leading-relaxed">
            My Health Buddy is a gentle helper app designed to support children in communicating how they feel when words are hard to find.
          </p>
          <p className="text-app-text/80 leading-relaxed">
            It's not a medical tool and doesn't diagnose anything. Instead, it provides a safe, friendly way for children to show trusted grown-ups what their body is experiencing.
          </p>
        </Card>

        <Card className="bg-app-card border-2 border-app-text/10 rounded-3xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-app-text">How to use it</h2>
          <ul className="space-y-3 text-app-text/80">
            <li className="flex items-start">
              <span className="mr-3 text-xl">👉</span>
              <span>Let the child explore the app at their own pace</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-xl">👉</span>
              <span>When they tap a feeling, be ready to check on them</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-xl">👉</span>
              <span>Use it as a starting point for conversation</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-xl">👉</span>
              <span>The app works offline and collects no data</span>
            </li>
          </ul>
        </Card>

        <Card className="bg-app-card border-2 border-app-text/10 rounded-3xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-app-text">Important</h2>
          <p className="text-app-text/80 leading-relaxed">
            This app is a communication helper, not a replacement for medical advice. If a child is unwell or in distress, please seek appropriate professional support.
          </p>
        </Card>
      </div>
    </ScreenLayout>
  );
}
