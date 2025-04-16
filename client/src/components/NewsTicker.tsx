import { useState, useEffect } from "react";
import { Bell, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { FlashNews } from "@shared/schema";

interface NewsItem {
  id: number;
  text: string;
  link: string | null;
  attachmentPath: string | null;
}

const NewsTicker = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Fetch active flash news from API
  const { data: newsItems = [], isLoading } = useQuery<FlashNews[]>({
    queryKey: ["/api/flash-news"],
    refetchInterval: 60000, // Refetch every minute
  });
  
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

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
          
          <div className="overflow-hidden flex-1">
            <div 
              className={`whitespace-nowrap ${isPaused ? '' : (isMobile ? 'animate-marquee-fast' : 'animate-marquee')}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleMouseEnter}
              onTouchEnd={handleMouseLeave}
            >
              {newsItems.length === 0 ? (
                <span className="mr-12 text-white inline-block">Welcome to JSS Polytechnic for Women</span>
              ) : (
                <>
                  {newsItems.map((item) => (
                    <a 
                      key={item.id} 
                      href={item.link || item.attachmentPath || "#"} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mr-12 cursor-pointer text-white hover:text-[#D8315B] inline-block"
                    >
                      {item.text}
                    </a>
                  ))}
                  
                  {/* Duplicate items for seamless looping */}
                  {newsItems.map((item) => (
                    <a 
                      key={`repeat-${item.id}`} 
                      href={item.link || item.attachmentPath || "#"} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mr-12 cursor-pointer text-white hover:text-[#D8315B] inline-block"
                    >
                      {item.text}
                    </a>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
