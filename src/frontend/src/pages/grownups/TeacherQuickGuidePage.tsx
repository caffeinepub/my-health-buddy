import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ScreenLayout from '../../components/ScreenLayout';
import { ArrowLeft } from 'lucide-react';

interface TeacherQuickGuidePageProps {
  onBack: () => void;
  onNavigateToSafety: () => void;
}

export default function TeacherQuickGuidePage({ onBack, onNavigateToSafety }: TeacherQuickGuidePageProps) {
  return (
    <ScreenLayout title="Teacher Quick Guide" showDisclaimer={false} onNavigateToSafety={onNavigateToSafety}>
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
          <h2 className="text-xl font-bold text-app-text">Using in the classroom</h2>
          <p className="text-app-text/80 leading-relaxed">
            My Health Buddy can help children who struggle to speak up when they're unwell or need support.
          </p>
        </Card>

        <Card className="bg-app-card border-2 border-app-text/10 rounded-3xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-app-text">Setup suggestions</h2>
          <ul className="space-y-3 text-app-text/80">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Introduce the app to the whole class so everyone knows it's available</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Keep a device with the app accessible but not distracting</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Explain that it's for when they really need help, not for everyday requests</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Make sure children know they can always speak to you directly too</span>
            </li>
          </ul>
        </Card>

        <Card className="bg-app-card border-2 border-app-text/10 rounded-3xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-app-text">When a child uses it</h2>
          <ul className="space-y-3 text-app-text/80">
            <li className="flex items-start">
              <span className="mr-3">1.</span>
              <span>Respond promptly and calmly</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">2.</span>
              <span>Check in with the child privately if possible</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">3.</span>
              <span>Follow your school's health and safeguarding procedures</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">4.</span>
              <span>Document the incident according to your school policy</span>
            </li>
          </ul>
        </Card>

        <Card className="bg-app-card border-2 border-app-text/10 rounded-3xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-app-text">Remember</h2>
          <p className="text-app-text/80 leading-relaxed">
            This app is a communication aid, not a medical tool. Always use your professional judgment and follow your school's policies for child health and welfare.
          </p>
        </Card>
      </div>
    </ScreenLayout>
  );
}
