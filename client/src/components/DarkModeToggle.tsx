import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useDarkMode } from '@/lib/DarkModeContext';
import { motion } from 'framer-motion';

const DarkModeToggle: React.FC = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <motion.button
      onClick={toggleDarkMode}
      className="fixed z-50 bottom-6 right-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#0A2463] text-white shadow-xl border-4 border-white dark:border-gray-800 transition-all duration-300 hover:scale-110 dark:bg-[#D8315B]"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative">
        {darkMode ? <Sun className="h-10 w-10" /> : <Moon className="h-10 w-10" />}
        <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 text-xs bg-black/80 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </span>
      </div>
    </motion.button>
  );
};

export default DarkModeToggle;