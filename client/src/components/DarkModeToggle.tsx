import React, { useState } from 'react';
import { Moon, Sun, Settings } from 'lucide-react';
import { useDarkMode } from '@/lib/DarkModeContext';
import { AnimatePresence, motion } from 'framer-motion';

const DarkModeToggle: React.FC = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed z-50 right-0 top-1/3 transform -translate-y-1/3">
      {/* Tab that sticks out from right side */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-12 w-10 items-center justify-center rounded-l-md bg-[#0A2463] text-white shadow-md transition-colors hover:bg-[#0A2463]/90 dark:bg-[#D8315B] dark:text-white dark:hover:bg-[#D8315B]/90"
        aria-label="Toggle theme settings"
      >
        <Settings className="h-5 w-5" />
      </button>
      
      {/* Panel that slides out when clicked */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 150, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute top-0 right-0 mt-14 bg-white dark:bg-gray-800 rounded-l-md shadow-lg p-4 w-36"
          >
            <div className="flex flex-col items-center gap-3">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Theme Mode</h3>
              <button
                onClick={toggleDarkMode}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-800 shadow-md transition-all duration-300 hover:scale-110 dark:bg-gray-700 dark:text-gray-200"
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
              </button>
              <span className="text-xs text-gray-600 dark:text-gray-400">
                {darkMode ? "Light Mode" : "Dark Mode"}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DarkModeToggle;