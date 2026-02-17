import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ScreenLayout from '../components/ScreenLayout';
import { ArrowLeft } from 'lucide-react';
import { addTrackerEntry, getRecentEntries, type TrackerEntry } from '../state/tracker';

interface DailyFeelingsTrackerPageProps {
  onBack: () => void;
  onNavigateToSafety: () => void;
  onNavigateToAboutCreator?: () => void;
}

export default function DailyFeelingsTrackerPage({ onBack, onNavigateToSafety, onNavigateToAboutCreator }: DailyFeelingsTrackerPageProps) {
  const [recentEntries, setRecentEntries] = useState<TrackerEntry[]>([]);
  const [justAdded, setJustAdded] = useState(false);

  useEffect(() => {
    setRecentEntries(getRecentEntries());
  }, []);

  const handleFeelingSelect = (feeling: 'good' | 'okay' | 'not-good') => {
    addTrackerEntry(feeling);
    setRecentEntries(getRecentEntries());
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  const feelings = [
    { value: 'good' as const, emoji: '🙂', label: 'Good' },
    { value: 'okay' as const, emoji: '😐', label: 'Okay' },
    { value: 'not-good' as const, emoji: '😟', label: 'Not good' },
  ];

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
  };

  return (
    <ScreenLayout title="Daily feelings" helperMessage="How are you feeling today?" onNavigateToSafety={onNavigateToSafety} onNavigateToAboutCreator={onNavigateToAboutCreator}>
      <div className="space-y-8">
        {/* Back button */}
        <Button
          onClick={onBack}
          variant="ghost"
          className="text-app-text hover:bg-app-button/20"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Go back
        </Button>

        {/* Feeling selection */}
        <div className="flex justify-center space-x-4">
          {feelings.map((feeling) => (
            <button
              key={feeling.value}
              onClick={() => handleFeelingSelect(feeling.value)}
              className="flex flex-col items-center space-y-2 p-4 rounded-2xl bg-app-card hover:bg-app-button/20 transition-all hover:scale-105 active:scale-95 border-2 border-app-text/10"
            >
              <span className="text-5xl">{feeling.emoji}</span>
              <span className="text-sm font-medium text-app-text">{feeling.label}</span>
            </button>
          ))}
        </div>

        {/* Confirmation message */}
        {justAdded && (
          <p className="text-center text-app-text/80 animate-fade-in">
            Saved! 💛
          </p>
        )}

        {/* Recent entries */}
        {recentEntries.length > 0 && (
          <Card className="bg-app-card border-2 border-app-text/10 rounded-3xl p-6 max-w-md mx-auto">
            <h3 className="text-lg font-bold text-app-text mb-4">Recent feelings</h3>
            <div className="space-y-3">
              {recentEntries.map((entry, index) => {
                const feeling = feelings.find(f => f.value === entry.feeling);
                return (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{feeling?.emoji}</span>
                      <span className="text-app-text/80">{feeling?.label}</span>
                    </div>
                    <span className="text-sm text-app-text/60">{formatDate(entry.date)}</span>
                  </div>
                );
              })}
            </div>
          </Card>
        )}
      </div>
    </ScreenLayout>
  );
}
