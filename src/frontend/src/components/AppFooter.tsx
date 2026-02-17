import { Button } from '@/components/ui/button';

interface AppFooterProps {
  onNavigateToAboutCreator?: () => void;
}

export default function AppFooter({ onNavigateToAboutCreator }: AppFooterProps) {
  return (
    <div className="pb-4 px-6 space-y-2">
      <p className="text-center text-app-text/50 text-xs leading-relaxed">
        © 2026 Gabriella Gayle. My Health Buddy and the Luma character are original creations. All rights reserved.
      </p>
      {onNavigateToAboutCreator && (
        <div className="flex justify-center">
          <Button
            onClick={onNavigateToAboutCreator}
            variant="ghost"
            className="text-app-text/60 hover:text-app-text/80 text-xs h-auto py-1 px-2"
          >
            About the Creator
          </Button>
        </div>
      )}
    </div>
  );
}
