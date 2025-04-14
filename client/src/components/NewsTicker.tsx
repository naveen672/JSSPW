import { useState, useEffect, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";

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
        x: ["100%", "-100%"],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
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
    <div className="fixed top-[80px] z-30 w-full lg:top-[80px]">
      <div className="bg-[#0A2463] overflow-hidden whitespace-nowrap py-2 shadow-md">
        <motion.div
          animate={controls}
          className="inline-block"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="mr-8 font-bold text-white">FLASH NEWS:</span>
          {newsItems.map((item) => (
            <a 
              key={item.id} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mr-8 cursor-pointer text-white hover:text-[#D8315B] inline-block"
            >
              {item.text}
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default NewsTicker;
