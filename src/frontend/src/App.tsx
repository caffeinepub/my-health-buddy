import { useState } from 'react';
import SplashScreen from './pages/SplashScreen';
import WelcomePage from './pages/WelcomePage';
import MenuPage from './pages/MenuPage';
import FeelingsButtonPage from './pages/FeelingsButtonPage';
import FeelingConfirmationPage from './pages/FeelingConfirmationPage';
import LocationPage from './pages/LocationPage';
import AdultMessagePage from './pages/AdultMessagePage';
import EnergyCheckPage from './pages/EnergyCheckPage';
import DailyFeelingsTrackerPage from './pages/DailyFeelingsTrackerPage';
import FeelBetterPage from './pages/FeelBetterPage';
import GrownUpsLockPage from './pages/grownups/GrownUpsLockPage';
import GrownUpsAreaPage from './pages/grownups/GrownUpsAreaPage';
import ForParentsTeachersPage from './pages/grownups/ForParentsTeachersPage';
import TeacherQuickGuidePage from './pages/grownups/TeacherQuickGuidePage';
import AboutPage from './pages/grownups/AboutPage';
import PrivacySafetyPage from './pages/grownups/PrivacySafetyPage';
import SafetyNoticePage from './pages/SafetyNoticePage';

type Screen = 
  | 'splash'
  | 'welcome'
  | 'menu'
  | 'feelings'
  | 'confirmation'
  | 'location'
  | 'adult-message'
  | 'energy-check'
  | 'tracker'
  | 'feel-better'
  | 'grownups-lock'
  | 'grownups-area'
  | 'grownups-parents'
  | 'grownups-teacher'
  | 'grownups-about'
  | 'grownups-privacy'
  | 'safety-notice';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [selectedFeeling, setSelectedFeeling] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [previousScreen, setPreviousScreen] = useState<Screen>('menu');

  const navigateTo = (screen: Screen) => {
    if (screen === 'safety-notice') {
      setPreviousScreen(currentScreen);
    }
    setCurrentScreen(screen);
  };

  const handleFeelingSelected = (feeling: string) => {
    setSelectedFeeling(feeling);
    navigateTo('confirmation');
  };

  const handleLocationSelected = (location: string) => {
    setSelectedLocation(location);
    navigateTo('adult-message');
  };

  const handleSafetyNoticeBack = () => {
    navigateTo(previousScreen);
  };

  return (
    <div className="min-h-screen">
      {currentScreen === 'splash' && <SplashScreen onComplete={() => navigateTo('welcome')} />}
      {currentScreen === 'welcome' && <WelcomePage onStart={() => navigateTo('menu')} onNavigateToSafety={() => navigateTo('safety-notice')} />}
      {currentScreen === 'menu' && <MenuPage onNavigate={navigateTo} onNavigateToSafety={() => navigateTo('safety-notice')} />}
      {currentScreen === 'feelings' && <FeelingsButtonPage onFeelingSelected={handleFeelingSelected} onBack={() => navigateTo('menu')} onNavigateToSafety={() => navigateTo('safety-notice')} />}
      {currentScreen === 'confirmation' && <FeelingConfirmationPage feeling={selectedFeeling} onContinue={() => navigateTo('location')} onNavigateToSafety={() => navigateTo('safety-notice')} />}
      {currentScreen === 'location' && <LocationPage onLocationSelected={handleLocationSelected} onNavigateToSafety={() => navigateTo('safety-notice')} />}
      {currentScreen === 'adult-message' && <AdultMessagePage onComplete={() => navigateTo('menu')} onNavigateToSafety={() => navigateTo('safety-notice')} />}
      {currentScreen === 'energy-check' && <EnergyCheckPage onBack={() => navigateTo('menu')} onNavigateToSafety={() => navigateTo('safety-notice')} />}
      {currentScreen === 'tracker' && <DailyFeelingsTrackerPage onBack={() => navigateTo('menu')} onNavigateToSafety={() => navigateTo('safety-notice')} />}
      {currentScreen === 'feel-better' && <FeelBetterPage onBack={() => navigateTo('menu')} onNavigateToSafety={() => navigateTo('safety-notice')} />}
      {currentScreen === 'grownups-lock' && <GrownUpsLockPage onSuccess={() => navigateTo('grownups-area')} onBack={() => navigateTo('menu')} onNavigateToSafety={() => navigateTo('safety-notice')} />}
      {currentScreen === 'grownups-area' && <GrownUpsAreaPage onNavigate={navigateTo} onBack={() => navigateTo('menu')} onNavigateToSafety={() => navigateTo('safety-notice')} />}
      {currentScreen === 'grownups-parents' && <ForParentsTeachersPage onBack={() => navigateTo('grownups-area')} onNavigateToSafety={() => navigateTo('safety-notice')} />}
      {currentScreen === 'grownups-teacher' && <TeacherQuickGuidePage onBack={() => navigateTo('grownups-area')} onNavigateToSafety={() => navigateTo('safety-notice')} />}
      {currentScreen === 'grownups-about' && <AboutPage onBack={() => navigateTo('grownups-area')} onNavigateToSafety={() => navigateTo('safety-notice')} />}
      {currentScreen === 'grownups-privacy' && <PrivacySafetyPage onBack={() => navigateTo('grownups-area')} onNavigateToSafety={() => navigateTo('safety-notice')} />}
      {currentScreen === 'safety-notice' && <SafetyNoticePage onBack={handleSafetyNoticeBack} />}
    </div>
  );
}

export default App;
