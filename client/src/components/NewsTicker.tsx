import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface NewsItem {
  id: number;
  text: string;
}

const NewsTicker = () => {
  const newsItems: NewsItem[] = [
    { id: 1, text: "Summer admissions now open for 2023-2024 academic year" },
    { id: 2, text: "⭐ Professor Jane Smith awarded National Science Medal" },
    { id: 3, text: "New Computer Science Building opening September 1st" },
    { id: 4, text: "Horizon College ranks #5 in Best Liberal Arts Colleges" }
  ];

  return (
    <div className="fixed top-[72px] z-30 w-full bg-[#0A2463] text-white lg:top-[80px]">
      <div className="overflow-hidden whitespace-nowrap py-2">
        <motion.div
          animate={{
            x: ["100%", "-100%"]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear"
            }
          }}
          className="inline-block"
        >
          <span className="mr-8 font-bold">FLASH NEWS:</span>
          {newsItems.map((item) => (
            <span key={item.id} className="mr-8">{item.text}</span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default NewsTicker;
