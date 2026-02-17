import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ScreenLayout from '../components/ScreenLayout';
import { ArrowLeft } from 'lucide-react';
import { addTrackerEntry, getRecentEntries, type TrackerEntry } from '../state/tracker';

interface DailyFeelingsTrackerPageProps {
  onBack: () => void;
}

export default function DailyFeelingsTrackerPage({ onBack }: DailyFeelingsTrackerPageProps) {
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
    <ScreenLayout title="Daily feelings" helperMessage="How are you feeling today?">
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

        {/* Success message */}
        {justAdded && (
          <div className="bg-app-button rounded-2xl p-4 text-center animate-fade-in">
            <p className="text-app-text font-medium">Thank you for sharing! 💚</p>
          </div>
        )}

        {/* Feeling options */}
        <div className="flex flex-col space-y-4 max-w-md mx-auto">
          {feelings.map((feeling) => (
            <button
              key={feeling.value}
              onClick={() => handleFeelingSelect(feeling.value)}
              className="h-20 bg-app-card hover:bg-app-button rounded-3xl border-2 border-app-text/10 hover:border-app-text/30 transition-all hover:scale-105 active:scale-95 flex items-center justify-center space-x-4"
            >
              <span className="text-4xl">{feeling.emoji}</span>
              <span className="text-xl font-bold text-app-text">{feeling.label}</span>
            </button>
          ))}
        </div>

        {/* Recent entries */}
        {recentEntries.length > 0 && (
          <div className="max-w-md mx-auto pt-4">
            <h3 className="text-lg font-semibold text-app-text mb-3 text-center">Your recent feelings</h3>
            <div className="space-y-2">
              {recentEntries.map((entry, index) => {
                const feeling = feelings.find(f => f.value === entry.feeling);
                return (
                  <Card key={index} className="bg-app-card border-app-text/10 rounded-2xl p-4 flex items-center justify-between">
                    <span className="text-2xl">{feeling?.emoji}</span>
                    <span className="text-app-text font-medium">{feeling?.label}</span>
                    <span className="text-app-text/60 text-sm">{formatDate(entry.date)}</span>
                  </Card>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </ScreenLayout>
  );
}
