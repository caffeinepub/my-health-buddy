export interface TrackerEntry {
  date: string;
  feeling: 'good' | 'okay' | 'not-good';
}

const TRACKER_KEY = 'myHealthBuddy_tracker';

export function getRecentEntries(limit: number = 7): TrackerEntry[] {
  try {
    const stored = localStorage.getItem(TRACKER_KEY);
    if (stored) {
      const entries: TrackerEntry[] = JSON.parse(stored);
      return entries.slice(0, limit);
    }
  } catch (error) {
    console.error('Error loading tracker entries:', error);
  }
  return [];
}

export function addTrackerEntry(feeling: 'good' | 'okay' | 'not-good'): void {
  try {
    const entries = getRecentEntries(100);
    const today = new Date().toISOString().split('T')[0];
    
    // Remove any existing entry for today
    const filtered = entries.filter(e => !e.date.startsWith(today));
    
    // Add new entry at the beginning
    const newEntry: TrackerEntry = {
      date: new Date().toISOString(),
      feeling,
    };
    
    const updated = [newEntry, ...filtered];
    localStorage.setItem(TRACKER_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error('Error saving tracker entry:', error);
  }
}

export function resetTracker(): void {
  try {
    localStorage.removeItem(TRACKER_KEY);
  } catch (error) {
    console.error('Error resetting tracker:', error);
  }
}
