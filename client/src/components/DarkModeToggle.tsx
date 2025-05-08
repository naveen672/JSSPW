import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useDarkMode } from '@/lib/DarkModeContext';

const DarkModeToggle: React.FC = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-800 shadow-md transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
};

export default DarkModeToggle;