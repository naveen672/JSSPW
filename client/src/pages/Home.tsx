import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ProgramsSection from "@/sections/ProgramsSection";
import FacultySection from "@/sections/FacultySection";
import CampusLifeSection from "@/sections/CampusLifeSection";
import EventsSection from "@/sections/EventsSection";
import ParallaxCTA from "@/sections/ParallaxCTA";
import ContactSection from "@/sections/ContactSection";
import { useEffect } from "react";
import { useLocation } from "wouter";
import { useInView } from "framer-motion";

const Home = () => {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    // Initialize animation observers
    const scrollElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
        }
      });
    }, { threshold: 0.1 });
    
    scrollElements.forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      scrollElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <FacultySection />
      <CampusLifeSection />
      <EventsSection />
      <ParallaxCTA />
      <ContactSection />
    </>
  );
};

export default Home;
