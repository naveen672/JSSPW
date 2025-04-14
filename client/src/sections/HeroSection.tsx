import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-[80vh] overflow-hidden bg-gray-900">
      {/* Hero Slide */}
      <div className="hero-slide absolute inset-0 bg-cover bg-center bg-no-repeat" 
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="absolute inset-0 bg-[#0A2463]/60"></div>
        <div className="container relative mx-auto h-full px-6">
          <div className="flex h-full flex-col items-start justify-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              Welcome to Horizon College
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="my-6 max-w-2xl text-lg text-white"
            >
              Empowering minds, inspiring futures. Experience excellence in education at one of the nation's leading institutions.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#programs" className="rounded-full bg-[#D8315B] px-8 py-3 font-medium text-white transition-colors hover:bg-[#D8315B]/90">
                Explore Programs
              </a>
              <a href="#campus" className="rounded-full border-2 border-white bg-transparent px-8 py-3 font-medium text-white transition-colors hover:bg-white/10">
                Campus Tour
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Hero Stats */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/90 py-4 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="text-center">
              <h4 className="text-3xl font-bold text-[#0A2463]">95%</h4>
              <p className="text-sm text-[#1C1C1C]">Graduate Employment</p>
            </div>
            <div className="text-center">
              <h4 className="text-3xl font-bold text-[#0A2463]">150+</h4>
              <p className="text-sm text-[#1C1C1C]">Academic Programs</p>
            </div>
            <div className="text-center">
              <h4 className="text-3xl font-bold text-[#0A2463]">12:1</h4>
              <p className="text-sm text-[#1C1C1C]">Student-Faculty Ratio</p>
            </div>
            <div className="text-center">
              <h4 className="text-3xl font-bold text-[#0A2463]">200+</h4>
              <p className="text-sm text-[#1C1C1C]">Campus Organizations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
