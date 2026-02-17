import { ReactNode } from 'react';

interface ScreenLayoutProps {
  title?: string;
  children: ReactNode;
  helperMessage?: string;
  showDisclaimer?: boolean;
  disclaimerText?: string;
  noScroll?: boolean;
  onNavigateToSafety?: () => void;
}

export default function ScreenLayout({ 
  title, 
  children, 
  helperMessage, 
  showDisclaimer = true, 
  disclaimerText,
  noScroll = false, 
  onNavigateToSafety 
}: ScreenLayoutProps) {
  const defaultDisclaimer = "This app helps children show how you feel. It does not give medical advice.";
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

      {/* Title */}
      {title && (
        <div className="pt-2 pb-4 px-6">
          <h1 className="text-2xl font-bold text-app-text text-center">{title}</h1>
        </div>
      )}

      {/* Main content in middle */}
      <div className={`flex-1 flex flex-col ${noScroll ? 'justify-start' : 'justify-center'} px-6 pb-6 ${noScroll ? 'overflow-hidden' : ''}`}>
        {children}
      </div>

      {/* Helper message, disclaimer, and footer at bottom */}
      <div className="pb-8 px-6 space-y-3">
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
    </div>
  );
}
