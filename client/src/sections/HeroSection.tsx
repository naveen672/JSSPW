import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import buildingImg from "../assets/bg1.jpg";
import labImg from "../assets/bg2.jpg";
import assemblyImg from "../assets/bg3.jpg";

const slideImages = [
  {
    id: 1,
    url: buildingImg,
    title: "Welcome to JSS Polytechnic for Women",
    description: "Empowering women through quality technical education and holistic development in a supportive learning environment."
  },
  {
    id: 2,
    url: labImg,
    title: "State-of-the-Art Computer Labs",
    description: "Our modern facilities and innovative teaching methods prepare students for successful careers in engineering and technology."
  },
  {
    id: 3,
    url: assemblyImg,
    title: "Vibrant Student Community",
    description: "Join a diverse community of motivated students participating in academic and cultural activities that foster leadership and teamwork."
  },
  {
    id: 4,
    url: buildingImg,
    title: "JSS Mahavidyapeetha Excellence",
    description: "Developing technical expertise, leadership skills, and confidence in women to excel in their chosen fields under the guidance of JSS Mahavidyapeetha."
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slideImages.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  return (
    <section id="home" className="relative h-[90vh] md:h-[80vh] overflow-hidden bg-gray-900 pt-16 md:pt-8">
      {/* Hero Slides */}
      {slideImages.map((slide, index) => (
        <div 
          key={slide.id}
          className={`hero-slide absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`} 
          style={{ backgroundImage: typeof slide.url === 'string' ? `url('${slide.url}')` : `url(${slide.url})` }}
        >
          <div className="absolute inset-0 bg-[#0A2463]/60"></div>
          <div className="container relative mx-auto h-full px-4 md:px-6">
            <div className="flex h-full flex-col items-start justify-center pt-12 md:pt-0">
              <motion.h1 
                key={`title-${slide.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={currentSlide === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl font-bold text-white md:text-4xl lg:text-5xl xl:text-6xl"
              >
                {slide.title}
              </motion.h1>
              <motion.p 
                key={`desc-${slide.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={currentSlide === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="my-4 md:my-6 max-w-2xl text-base md:text-lg text-white"
              >
                {slide.description}
              </motion.p>
              <motion.div 
                key={`buttons-${slide.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={currentSlide === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-3 md:gap-4"
              >
                <a href="#programs" className="rounded-full bg-[#D8315B] px-6 py-2 md:px-8 md:py-3 text-sm md:text-base font-medium text-white transition-colors hover:bg-[#D8315B]/90">
                  Explore Programs
                </a>
                <a href="#campus" className="rounded-full border-2 border-white bg-transparent px-6 py-2 md:px-8 md:py-3 text-sm md:text-base font-medium text-white transition-colors hover:bg-white/10">
                  Campus Tour
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Slide Navigation Arrows */}
      <button 
        onClick={goToPrevSlide} 
        className="absolute left-2 md:left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-1 md:p-2 text-white backdrop-blur-sm transition-all hover:bg-white/40"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
      </button>
      <button 
        onClick={goToNextSlide} 
        className="absolute right-2 md:right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-1 md:p-2 text-white backdrop-blur-sm transition-all hover:bg-white/40"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
      </button>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-28 md:bottom-24 left-0 right-0 z-10 flex justify-center gap-1 md:gap-2">
        {slideImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 md:h-2 w-6 md:w-8 rounded-full transition-all ${
              currentSlide === index ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Hero Stats */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 py-3 md:py-4 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 gap-3 md:gap-6 md:grid-cols-4">
            <div className="text-center">
              <h4 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#0A2463] dark:text-white">95%</h4>
              <p className="text-xs md:text-sm text-[#1C1C1C] dark:text-gray-300">Graduate Placement</p>
            </div>
            <div className="text-center">
              <h4 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#0A2463] dark:text-white">12+</h4>
              <p className="text-xs md:text-sm text-[#1C1C1C] dark:text-gray-300">Technical Programs</p>
            </div>
            <div className="text-center">
              <h4 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#0A2463] dark:text-white">15:1</h4>
              <p className="text-xs md:text-sm text-[#1C1C1C] dark:text-gray-300">Student-Faculty Ratio</p>
            </div>
            <div className="text-center">
              <h4 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#0A2463] dark:text-white">50+</h4>
              <p className="text-xs md:text-sm text-[#1C1C1C] dark:text-gray-300">Campus Activities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
