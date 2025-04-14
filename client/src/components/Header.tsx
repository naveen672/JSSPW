import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Menu } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [, navigate] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`relative bg-white transition-all duration-300 ${
        isScrolled ? "py-2 shadow-lg" : "py-4 shadow-md"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4 lg:py-0">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => navigate("/")}
          >
            <img 
              src="/logo_jss.jpeg" 
              alt="JSS Polytechnic Logo" 
              className="mr-3 h-12 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="text-xs text-[#0A2463]/80">JSS Mahavidyapeetha</span>
              <span className="text-xl font-bold text-[#0A2463]">JSS Polytechnic For Women</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="text-dark focus:outline-none lg:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex">
            <ul className="flex flex-col items-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-8">
              <li><a href="#home" className="block py-6 font-medium text-[#0A2463] border-b-2 border-transparent hover:border-[#D8315B] transition-all duration-200">Home</a></li>
              <li><a href="#about" className="block py-6 font-medium text-[#1C1C1C] border-b-2 border-transparent hover:border-[#D8315B] transition-all duration-200">About</a></li>
              <li><a href="#programs" className="block py-6 font-medium text-[#1C1C1C] border-b-2 border-transparent hover:border-[#D8315B] transition-all duration-200">Programs</a></li>
              <li><a href="#faculty" className="block py-6 font-medium text-[#1C1C1C] border-b-2 border-transparent hover:border-[#D8315B] transition-all duration-200">Faculty</a></li>
              <li><a href="#campus" className="block py-6 font-medium text-[#1C1C1C] border-b-2 border-transparent hover:border-[#D8315B] transition-all duration-200">Campus Life</a></li>
              <li><a href="#events" className="block py-6 font-medium text-[#1C1C1C] border-b-2 border-transparent hover:border-[#D8315B] transition-all duration-200">Events</a></li>
              <li><a href="#contact" className="block py-6 font-medium text-[#1C1C1C] border-b-2 border-transparent hover:border-[#D8315B] transition-all duration-200">Contact</a></li>
              <li>
                <a href="#apply" className="rounded-full bg-[#D8315B] px-6 py-2 font-medium text-white transition-colors hover:bg-[#D8315B]/90">
                  Apply Now
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Menu (Toggleable) */}
        <div className={`border-t-2 py-4 lg:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <ul className="space-y-4">
            <li><a href="#home" onClick={closeMobileMenu} className="block font-medium text-[#0A2463] hover:text-[#D8315B]">Home</a></li>
            <li><a href="#about" onClick={closeMobileMenu} className="block font-medium text-[#1C1C1C] hover:text-[#D8315B]">About</a></li>
            <li><a href="#programs" onClick={closeMobileMenu} className="block font-medium text-[#1C1C1C] hover:text-[#D8315B]">Programs</a></li>
            <li><a href="#faculty" onClick={closeMobileMenu} className="block font-medium text-[#1C1C1C] hover:text-[#D8315B]">Faculty</a></li>
            <li><a href="#campus" onClick={closeMobileMenu} className="block font-medium text-[#1C1C1C] hover:text-[#D8315B]">Campus Life</a></li>
            <li><a href="#events" onClick={closeMobileMenu} className="block font-medium text-[#1C1C1C] hover:text-[#D8315B]">Events</a></li>
            <li><a href="#contact" onClick={closeMobileMenu} className="block font-medium text-[#1C1C1C] hover:text-[#D8315B]">Contact</a></li>
            <li className="pt-2">
              <a href="#apply" onClick={closeMobileMenu} className="inline-block rounded-full bg-[#D8315B] px-6 py-2 font-medium text-white transition-colors hover:bg-[#D8315B]/90">
                Apply Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
