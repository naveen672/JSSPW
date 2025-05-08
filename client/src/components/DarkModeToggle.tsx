import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useDarkMode } from '@/lib/DarkModeContext';
import { motion } from 'framer-motion';

const DarkModeToggle: React.FC = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <motion.button
      onClick={toggleDarkMode}
      className="fixed z-50 bottom-10 right-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#0A2463] text-white shadow-lg transition-all duration-300 hover:scale-110 dark:bg-[#D8315B]"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? <Sun className="h-8 w-8" /> : <Moon className="h-8 w-8" />}
    </motion.button>
  );
};

export default DarkModeToggle;