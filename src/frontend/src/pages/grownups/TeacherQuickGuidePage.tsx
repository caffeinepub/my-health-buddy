import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ScreenLayout from '../../components/ScreenLayout';
import { ArrowLeft } from 'lucide-react';

interface TeacherQuickGuidePageProps {
  onBack: () => void;
}

export default function TeacherQuickGuidePage({ onBack }: TeacherQuickGuidePageProps) {
  return (
    <ScreenLayout title="Teacher Quick Guide" showDisclaimer={false}>
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
            My Health Buddy can help children who find it difficult to express how they're feeling, especially during busy school days.
          </p>
        </Card>

        <Card className="bg-app-card border-2 border-app-text/10 rounded-3xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-app-text">Quick steps</h2>
          <ol className="space-y-3 text-app-text/80 list-decimal list-inside">
            <li>Show children where the app is available</li>
            <li>Explain it's a helper for when they need to tell you something</li>
            <li>Let them know you'll check on them if they use it</li>
            <li>Respond calmly and kindly when a child shows you a message</li>
          </ol>
        </Card>

        <Card className="bg-app-card border-2 border-app-text/10 rounded-3xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-app-text">Privacy</h2>
          <p className="text-app-text/80 leading-relaxed">
            The app works offline and doesn't collect or share any information. All data stays on the device.
          </p>
        </Card>

        <Card className="bg-app-card border-2 border-app-text/10 rounded-3xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-app-text">Remember</h2>
          <p className="text-app-text/80 leading-relaxed">
            This is a communication tool, not a medical assessment. Follow your school's safeguarding procedures if you have concerns about a child's wellbeing.
          </p>
        </Card>
      </div>
    </ScreenLayout>
  );
}
