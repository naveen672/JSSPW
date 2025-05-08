import React, { useState } from 'react';
import { Moon, Sun, PanelRight, X } from 'lucide-react';
import { useDarkMode } from '@/lib/DarkModeContext';
import { AnimatePresence, motion } from 'framer-motion';

const DarkModeToggle: React.FC = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed z-50 right-0 top-1/2 transform -translate-y-1/2">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-10 items-center justify-center rounded-l-lg bg-gray-100 text-gray-800 shadow-md transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
        aria-label="Toggle theme settings"
      >
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <PanelRight className="h-5 w-5" />
        )}
      </button>

      {/* Popup Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-12 p-4 rounded-l-lg bg-white shadow-lg dark:bg-gray-800 w-48"
          >
            <div className="flex flex-col items-center gap-3">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Toggle Theme
              </span>
              <button
                onClick={() => {
                  toggleDarkMode();
                  setIsOpen(false);
                }}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-800 shadow-md transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
              </button>
              <span className="text-xs text-gray-500 dark:text-gray-400">
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