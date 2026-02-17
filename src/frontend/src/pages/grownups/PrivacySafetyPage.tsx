import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ScreenLayout from '../../components/ScreenLayout';
import { ArrowLeft } from 'lucide-react';

interface PrivacySafetyPageProps {
  onBack: () => void;
  onNavigateToSafety: () => void;
  onNavigateToAboutCreator?: () => void;
}

export default function PrivacySafetyPage({ onBack, onNavigateToSafety, onNavigateToAboutCreator }: PrivacySafetyPageProps) {
  return (
    <ScreenLayout title="Privacy Policy – My Health Buddy" showDisclaimer={false} onNavigateToSafety={onNavigateToSafety} onNavigateToAboutCreator={onNavigateToAboutCreator}>
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
          <h2 className="text-xl font-bold text-app-text">No Personal Data Collection</h2>
          <p className="text-app-text/80 leading-relaxed">
            My Health Buddy does not collect any personal data from you or your child.
          </p>
          <p className="text-app-text/80 leading-relaxed">
            We do not collect:
          </p>
          <ul className="space-y-2 text-app-text/80 ml-4">
            <li>• Names</li>
            <li>• Email addresses</li>
            <li>• Location data</li>
            <li>• Contacts</li>
            <li>• Photos</li>
            <li>• Microphone recordings</li>
            <li>• Health data</li>
            <li>• Analytics</li>
            <li>• Device identifiers</li>
            <li>• Cookies</li>
            <li>• Tracking information</li>
          </ul>
          <p className="text-app-text/80 leading-relaxed">
            No personal information is collected, stored, or shared at any time.
          </p>
        </Card>

        <Card className="bg-app-card border-2 border-app-text/10 rounded-3xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-app-text">Offline Use</h2>
          <p className="text-app-text/80 leading-relaxed">
            My Health Buddy works completely offline.
          </p>
          <p className="text-app-text/80 leading-relaxed">
            The app does not connect to the internet and nothing leaves your device.
          </p>
          <p className="text-app-text/80 leading-relaxed">
            All interactions stay private on your device.
          </p>
        </Card>

        <Card className="bg-app-card border-2 border-app-text/10 rounded-3xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-app-text">Children's Privacy</h2>
          <p className="text-app-text/80 leading-relaxed">
            My Health Buddy is designed for children to use with parent, teacher, or carer supervision.
          </p>
          <p className="text-app-text/80 leading-relaxed">
            This app complies with COPPA (Children's Online Privacy Protection Act) and GDPR-K (General Data Protection Regulation for children) because no personal data is collected.
          </p>
          <p className="text-app-text/80 leading-relaxed">
            We take children's privacy seriously. Since we collect no data at all, there is nothing to share, sell, or misuse.
          </p>
        </Card>

        <Card className="bg-app-card border-2 border-app-text/10 rounded-3xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-app-text">Data Storage</h2>
          <p className="text-app-text/80 leading-relaxed">
            Any selections made in the app (such as daily feelings tracker entries) remain stored locally on your device only.
          </p>
          <p className="text-app-text/80 leading-relaxed">
            This data never leaves your device and is not shared with anyone.
          </p>
          <p className="text-app-text/80 leading-relaxed">
            You can reset all saved data at any time through the Grown-ups Area settings.
          </p>
        </Card>

        <Card className="bg-app-card border-2 border-app-text/10 rounded-3xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-app-text">Medical Disclaimer</h2>
          <p className="text-app-text/80 leading-relaxed">
            My Health Buddy is a communication tool to help children express how they feel.
          </p>
          <p className="text-app-text/80 leading-relaxed">
            This app is not medical advice and does not diagnose, treat, or prevent any medical condition.
          </p>
          <p className="text-app-text/80 leading-relaxed">
            If you have concerns about a child's health or wellbeing, please consult appropriate healthcare professionals.
          </p>
        </Card>

        <Card className="bg-app-card border-2 border-app-text/10 rounded-3xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-app-text">Third-Party Services</h2>
          <p className="text-app-text/80 leading-relaxed">
            My Health Buddy does not use any third-party services.
          </p>
          <p className="text-app-text/80 leading-relaxed">
            There are:
          </p>
          <ul className="space-y-2 text-app-text/80 ml-4">
            <li>• No advertisements</li>
            <li>• No analytics SDKs</li>
            <li>• No tracking tools</li>
            <li>• No third-party data sharing</li>
          </ul>
          <p className="text-app-text/80 leading-relaxed">
            The app is completely self-contained and private.
          </p>
        </Card>

        <Card className="bg-app-card border-2 border-app-text/10 rounded-3xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-app-text">Changes</h2>
          <p className="text-app-text/80 leading-relaxed">
            This Privacy Policy may be updated if app features change.
          </p>
          <p className="text-app-text/80 leading-relaxed">
            Any updates will be posted here and will continue to protect your privacy.
          </p>
        </Card>

        <Card className="bg-app-card border-2 border-app-text/10 rounded-3xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-app-text">Contact</h2>
          <p className="text-app-text/80 leading-relaxed">
            If you have questions about this Privacy Policy, please contact us at:
          </p>
          <p className="text-app-text/80 leading-relaxed font-medium">
            support@myhealthbuddy.app
          </p>
        </Card>

        <Card className="bg-app-card border-2 border-app-text/10 rounded-3xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-app-text">Ownership</h2>
          <p className="text-app-text/80 leading-relaxed">
            © Gabriella Gayle — My Health Buddy and Luma character are original creations.
          </p>
        </Card>
      </div>
    </ScreenLayout>
  );
}
