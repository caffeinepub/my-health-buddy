interface Preferences {
  soundEnabled: boolean;
}

const PREFERENCES_KEY = 'myHealthBuddy_preferences';

const defaultPreferences: Preferences = {
  soundEnabled: true,
};

export function getPreferences(): Preferences {
  try {
    const stored = localStorage.getItem(PREFERENCES_KEY);
    if (stored) {
      return { ...defaultPreferences, ...JSON.parse(stored) };
    }
  } catch (error) {
    console.error('Error loading preferences:', error);
  }
  return defaultPreferences;
}

export function setPreferences(prefs: Partial<Preferences>): void {
  try {
    const current = getPreferences();
    const updated = { ...current, ...prefs };
    localStorage.setItem(PREFERENCES_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error('Error saving preferences:', error);
  }
}
