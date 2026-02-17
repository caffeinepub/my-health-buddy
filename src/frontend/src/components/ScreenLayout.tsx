import { ReactNode } from 'react';
import AppFooter from './AppFooter';

interface ScreenLayoutProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  helperMessage?: string;
  showDisclaimer?: boolean;
  disclaimerText?: string;
  noScroll?: boolean;
  onNavigateToSafety?: () => void;
  onNavigateToAboutCreator?: () => void;
}

export default function ScreenLayout({ 
  title, 
  subtitle,
  children, 
  helperMessage, 
  showDisclaimer = true, 
  disclaimerText,
  noScroll = false, 
  onNavigateToSafety,
  onNavigateToAboutCreator
}: ScreenLayoutProps) {
  const defaultDisclaimer = "Not medical advice";
  const displayDisclaimer = disclaimerText || defaultDisclaimer;

  return (
    <div className="min-h-screen flex flex-col bg-app-background">
      {/* Header logo */}
      <div className="pt-4 pb-2 px-6 flex justify-center">
        <img 
          src="/assets/file_0000000024fc724396b15f7fc4188f76.png" 
          alt="My Health Buddy" 
          className="h-16 object-contain"
        />
      </div>

      {/* Title and subtitle */}
      {title && (
        <div className="pt-2 pb-4 px-6 space-y-2">
          <h1 className="text-2xl font-bold text-app-text text-center">{title}</h1>
          {subtitle && (
            <p className="text-center text-app-text/70 text-base leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Main content in middle */}
      <div className={`flex-1 flex flex-col ${noScroll ? 'justify-start' : 'justify-center'} px-6 pb-6 ${noScroll ? 'overflow-hidden' : ''}`}>
        {children}
      </div>

      {/* Helper message, disclaimer, and footer at bottom */}
      <div className="pb-4 px-6 space-y-3">
        {helperMessage && (
          <p className="text-center text-app-text/80 text-base leading-relaxed">
            {helperMessage}
          </p>
        )}
        {showDisclaimer && (
          <p className="text-center text-app-text/50 text-xs leading-relaxed">
            {displayDisclaimer}
          </p>
        )}
        {onNavigateToSafety && (
          <div className="flex justify-center pt-2">
            <button
              onClick={onNavigateToSafety}
              className="text-app-text/60 hover:text-app-text/80 text-xs underline transition-colors"
            >
              Safety Notice
            </button>
          </div>
        )}
      </div>

      {/* App-wide footer */}
      <AppFooter onNavigateToAboutCreator={onNavigateToAboutCreator} />
    </div>
  );
}
