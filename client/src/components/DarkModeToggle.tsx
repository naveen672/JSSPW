import React, { useState } from 'react';
import { Moon, Sun, ArrowLeft } from 'lucide-react';
import { useDarkMode } from '@/lib/DarkModeContext';
import { motion, AnimatePresence } from 'framer-motion';

const DarkModeToggle: React.FC = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {/* Arrow button that's always visible */}
      <motion.button
        onClick={toggleVisibility}
        className="fixed z-50 bottom-[30%] right-0 flex h-10 w-8 items-center justify-center bg-[#0A2463] text-white shadow-lg rounded-l-lg border-l-2 border-t-2 border-b-2 border-white dark:border-gray-800 dark:bg-[#D8315B]"
        whileHover={{ width: 12, x: -4 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Show theme toggle"
      >
        <ArrowLeft className={`h-4 w-4 transition-transform duration-300 ${isVisible ? 'rotate-180' : ''}`} />
        <div className="absolute top-1/2 -left-16 transform -translate-y-1/2 bg-black/70 text-white px-2 py-1 rounded-lg text-xs opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          {isVisible ? "Hide Theme" : "Show Theme"}
        </div>
      </motion.button>

      {/* Dark mode toggle button that slides in/out */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={toggleDarkMode}
            className="fixed z-50 bottom-[30%] right-14 flex h-12 w-12 items-center justify-center rounded-full bg-[#0A2463] text-white shadow-lg border-2 border-white dark:border-gray-800 transition-colors dark:bg-[#D8315B]"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            <div className="relative">
              {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
              <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 text-xs bg-black/80 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
                {darkMode ? "Light Mode" : "Dark Mode"}
              </span>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default DarkModeToggle;