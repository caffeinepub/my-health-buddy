import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ScreenLayout from '../../components/ScreenLayout';
import { ArrowLeft } from 'lucide-react';

interface ForParentsTeachersPageProps {
  onBack: () => void;
  onNavigateToSafety: () => void;
  onNavigateToAboutCreator?: () => void;
}

export default function ForParentsTeachersPage({ onBack, onNavigateToSafety, onNavigateToAboutCreator }: ForParentsTeachersPageProps) {
  return (
    <ScreenLayout title="For Parents & Teachers" showDisclaimer={false} onNavigateToSafety={onNavigateToSafety} onNavigateToAboutCreator={onNavigateToAboutCreator}>
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
            My Health Buddy is a simple communication tool designed to help children express physical discomfort and emotional needs when they find it difficult to speak up.
          </p>
          <p className="text-app-text/80 leading-relaxed">
            The app guides children through selecting how they feel and where they are, then displays a clear message for an adult to see.
          </p>
        </Card>

        <Card className="bg-app-card border-2 border-app-text/10 rounded-3xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-app-text">How to use it</h2>
          <ul className="space-y-3 text-app-text/80">
            <li className="flex items-start">
              <span className="mr-3">1.</span>
              <span>Let the child explore the app in a calm moment so they know how it works</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">2.</span>
              <span>When they use it to show you something, respond with care and attention</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">3.</span>
              <span>Use it as a starting point for conversation, not a replacement for talking</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">4.</span>
              <span>The daily feelings tracker can help spot patterns over time</span>
            </li>
          </ul>
        </Card>

        <Card className="bg-app-card border-2 border-app-text/10 rounded-3xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-app-text">Important notes</h2>
          <ul className="space-y-3 text-app-text/80">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>This app does not diagnose medical conditions</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Always follow your professional judgment and safeguarding procedures</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>If you have concerns about a child's health or safety, seek appropriate professional support</span>
            </li>
          </ul>
        </Card>
      </div>
    </ScreenLayout>
  );
}
