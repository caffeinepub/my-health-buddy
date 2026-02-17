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
  | 'grownups-privacy';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [selectedFeeling, setSelectedFeeling] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<string>('');

  const navigateTo = (screen: Screen) => {
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

  return (
    <div className="min-h-screen">
      {currentScreen === 'splash' && <SplashScreen onComplete={() => navigateTo('welcome')} />}
      {currentScreen === 'welcome' && <WelcomePage onStart={() => navigateTo('menu')} />}
      {currentScreen === 'menu' && <MenuPage onNavigate={navigateTo} />}
      {currentScreen === 'feelings' && <FeelingsButtonPage onFeelingSelected={handleFeelingSelected} onBack={() => navigateTo('menu')} />}
      {currentScreen === 'confirmation' && <FeelingConfirmationPage feeling={selectedFeeling} onContinue={() => navigateTo('location')} />}
      {currentScreen === 'location' && <LocationPage onLocationSelected={handleLocationSelected} />}
      {currentScreen === 'adult-message' && <AdultMessagePage onComplete={() => navigateTo('menu')} />}
      {currentScreen === 'energy-check' && <EnergyCheckPage onBack={() => navigateTo('menu')} />}
      {currentScreen === 'tracker' && <DailyFeelingsTrackerPage onBack={() => navigateTo('menu')} />}
      {currentScreen === 'feel-better' && <FeelBetterPage onBack={() => navigateTo('menu')} />}
      {currentScreen === 'grownups-lock' && <GrownUpsLockPage onSuccess={() => navigateTo('grownups-area')} onBack={() => navigateTo('menu')} />}
      {currentScreen === 'grownups-area' && <GrownUpsAreaPage onNavigate={navigateTo} onBack={() => navigateTo('menu')} />}
      {currentScreen === 'grownups-parents' && <ForParentsTeachersPage onBack={() => navigateTo('grownups-area')} />}
      {currentScreen === 'grownups-teacher' && <TeacherQuickGuidePage onBack={() => navigateTo('grownups-area')} />}
      {currentScreen === 'grownups-about' && <AboutPage onBack={() => navigateTo('grownups-area')} />}
      {currentScreen === 'grownups-privacy' && <PrivacySafetyPage onBack={() => navigateTo('grownups-area')} />}
    </div>
  );
}

export default App;
