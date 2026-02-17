import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ScreenLayout from '../../components/ScreenLayout';
import { ArrowLeft } from 'lucide-react';

interface TeacherQuickGuidePageProps {
  onBack: () => void;
  onNavigateToSafety: () => void;
  onNavigateToAboutCreator?: () => void;
}

export default function TeacherQuickGuidePage({ onBack, onNavigateToSafety, onNavigateToAboutCreator }: TeacherQuickGuidePageProps) {
  return (
    <ScreenLayout title="Teacher Quick Guide" showDisclaimer={false} onNavigateToSafety={onNavigateToSafety} onNavigateToAboutCreator={onNavigateToAboutCreator}>
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
          <h2 className="text-xl font-bold text-app-text">In the classroom</h2>
          <p className="text-app-text/80 leading-relaxed">
            My Health Buddy can help children who struggle to speak up when they're unwell or need support.
          </p>
          <ul className="space-y-3 text-app-text/80">
            <li className="flex items-start">
              <span className="mr-3">✓</span>
              <span>Show children how to use it during a calm teaching moment</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">✓</span>
              <span>Let them know they can use it anytime they need help</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">✓</span>
              <span>Respond promptly and calmly when a child shows you a message</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">✓</span>
              <span>Follow your school's safeguarding and first aid procedures</span>
            </li>
          </ul>
        </Card>

        <Card className="bg-app-card border-2 border-app-text/10 rounded-3xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-app-text">Helpful for</h2>
          <ul className="space-y-3 text-app-text/80">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Children who are shy or anxious about speaking up</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Children with communication difficulties</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Children who need a simple way to express discomfort</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Building a culture where asking for help is encouraged</span>
            </li>
          </ul>
        </Card>

        <Card className="bg-app-card border-2 border-app-text/10 rounded-3xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-app-text">Remember</h2>
          <p className="text-app-text/80 leading-relaxed">
            This is a communication aid, not a medical tool. Always use your professional judgment and follow school policies for health and safeguarding concerns.
          </p>
        </Card>
      </div>
    </ScreenLayout>
  );
}
