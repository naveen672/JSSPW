import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useDarkMode } from '@/lib/DarkModeContext';

const DarkModeToggle: React.FC = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#0A2463] text-white shadow-xl transition-all duration-300 hover:bg-[#0A2463]/90 hover:scale-110 dark:bg-[#D8315B] dark:hover:bg-[#D8315B]/90"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? <Sun className="h-7 w-7" /> : <Moon className="h-7 w-7" />}
    </button>
  );
};

export default DarkModeToggle;