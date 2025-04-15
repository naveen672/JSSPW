import { useState, useEffect, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { Bell } from "lucide-react";

interface NewsItem {
  id: number;
  text: string;
  link: string;
}

const NewsTicker = () => {
  const controls = useAnimationControls();
  const [isPaused, setIsPaused] = useState(false);
  
  const newsItems: NewsItem[] = [
    { id: 1, text: "Summer admissions now open for 2025-2026 academic year", link: "/admissions" },
    { id: 2, text: "⭐ Dr. Rajeshwari awarded National Teaching Excellence Medal", link: "/faculty" },
    { id: 3, text: "New Engineering Building opening September 1st", link: "/campus" },
    { id: 4, text: "JSS Polytechnic For Women ranks #5 in Best Technical Institutions", link: "/rankings" }
  ];

  useEffect(() => {
    if (!isPaused) {
      controls.start({
        x: ["100%", "-150%"],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear"
          }
        }
      });
    } else {
      controls.stop();
    }
  }, [isPaused, controls]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="w-full bg-[#0A2463] dark:bg-gray-900">
      <div className="relative overflow-hidden py-2 h-10">
        <div className="container mx-auto px-6 flex items-center h-full">
          <div className="flex-shrink-0 z-10 mr-4 flex items-center">
            <Bell className="h-4 w-4 mr-2 text-[#D8315B] animate-pulse" />
            <span className="font-bold text-white">FLASH NEWS:</span>
          </div>
          
          <div className="overflow-hidden flex-1 relative">
            <motion.div
              animate={controls}
              initial={{ x: "100%" }}
              className="whitespace-nowrap absolute top-0"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {newsItems.map((item) => (
                <a 
                  key={item.id} 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mr-12 cursor-pointer text-white hover:text-[#D8315B] inline-block"
                >
                  {item.text}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
