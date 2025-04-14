import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SplashScreen = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    // Force the component to render and be visible
    setLoaded(true);
  }, []);
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A2463]">
      {loaded && (
        <div className="text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-auto h-32 w-32 overflow-hidden rounded-lg"
          >
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpFbO4BNxXEa_XROvxd81wZE5qHkBjTnm9Zw&usqp=CAU" 
              alt="JSS Polytechnic Logo" 
              className="h-full w-full object-contain"
            />
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-sm font-medium text-white"
          >
            JSS Mahavidyapeetha
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-2 text-3xl font-bold text-white"
          >
            JSS Polytechnic For Women
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-2 text-white"
          >
            Empowering Women Through Technical Education
          </motion.p>
        </div>
      )}
    </div>
  );
};

export default SplashScreen;
