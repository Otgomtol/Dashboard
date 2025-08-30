import { useState, useEffect, useCallback } from 'react';

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window === 'undefined') {
      return false;
    }
    // Check localStorage first for user preference
    const savedPreference = localStorage.getItem('theme');
    if (savedPreference === 'dark') {
      return true;
    }
    if (savedPreference === 'light') {
      return false;
    }
    // If no preference, use system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Function to apply the theme to the document element
  const applyTheme = useCallback((dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Effect to apply theme on initial load and when isDarkMode changes
  useEffect(() => {
    applyTheme(isDarkMode);
  }, [isDarkMode, applyTheme]);

  // Effect to listen for system preference changes, but only if no manual preference is set
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const savedPreference = localStorage.getItem('theme');
    if (savedPreference !== null) { // If user has a saved preference, don't listen to system changes
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []); // Empty dependency array, runs once

  // Function to toggle theme manually
  const toggleTheme = useCallback(() => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light'); // Save preference
      return newMode;
    });
  }, []);

  return { isDarkMode, toggleTheme }; // Return both state and toggle function
}
