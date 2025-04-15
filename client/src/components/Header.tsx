import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { Menu, ChevronDown } from "lucide-react";
import DarkModeToggle from "@/components/DarkModeToggle";

// Navigation structure
const navItems = [
  {
    title: "HOME",
    href: "#home",
    children: []
  },
  {
    title: "ABOUT US",
    href: "#about",
    children: [
      { title: "JSS MAHAVIDYAPEETHA", href: "#jss-mahavidyapeetha" },
      { title: "Technical Education under JSSMVP", href: "#technical-education" },
      { title: "About the College", href: "#about-college" }
    ]
  },
  {
    title: "PROGRAMMES",
    href: "#programs",
    children: [
      { title: "Architecture", href: "#architecture" },
      { title: "Apparel Design and Fabrication Technology", href: "#apparel-design" },
      { title: "Commercial Practice", href: "#commercial-practice" },
      { title: "Computer Science & Engineering", href: "#computer-science" },
      { title: "Electronics & Communication Engineering", href: "#electronics-communication" },
      { title: "Electronics Instrumentation and Control ENGG", href: "#electronics-instrumentation" },
      { title: "Interior Design", href: "#interior-design" },
      { title: "Information Science", href: "#information-science" }
    ]
  },
  {
    title: "ADMISSION",
    href: "#admission",
    children: []
  },
  {
    title: "SUPPORTS",
    href: "#supports",
    children: [
      { title: "III Cell (Placements & Training Cell)", href: "#iii-cell" },
      { title: "Hostel", href: "#hostel" },
      { title: "Library", href: "#library" },
      { title: "NSS", href: "#nss" },
      { title: "NCC", href: "#ncc" },
      { title: "ISTE Chapter", href: "#iste" },
      { title: "Community Development Through Polytechnic", href: "#community-development" }
    ]
  },
  {
    title: "EXAMS",
    href: "#exams",
    children: []
  },
  {
    title: "CIRCULARS",
    href: "#circulars",
    children: [
      { title: "Academic Calendar", href: "#academic-calendar" },
      { title: "Exam", href: "#exam-circular" },
      { title: "Scholarship", href: "#scholarship" },
      { title: "III Cell", href: "#iii-cell-circular" },
      { title: "NCC", href: "#ncc-circular" },
      { title: "NSS", href: "#nss-circular" },
      { title: "Cultural", href: "#cultural" },
      { title: "Sports", href: "#sports" },
      { title: "Alumni", href: "#alumni-circular" },
      { title: "Hostel", href: "#hostel-circular" }
    ]
  },
  {
    title: "ALUMNI",
    href: "#alumni",
    children: []
  }
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileOpenDropdowns, setMobileOpenDropdowns] = useState<Set<number>>(new Set());
  const [, navigate] = useLocation();
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown !== null) {
        const currentRef = dropdownRefs.current[activeDropdown];
        if (currentRef && !currentRef.contains(event.target as Node)) {
          setActiveDropdown(null);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdown]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const toggleMobileDropdown = (index: number) => {
    setMobileOpenDropdowns(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <header 
      className={`relative z-50 bg-white dark:bg-gray-900 transition-all duration-300 ${
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
              <span className="text-xs text-[#0A2463]/80 dark:text-gray-400">JSS Mahavidyapeetha</span>
              <span className="text-xl font-bold text-[#0A2463] dark:text-white">JSS Polytechnic For Women</span>
            </div>
          </div>

          {/* Mobile Menu Button and Dark Mode Toggle */}
          <div className="flex items-center space-x-4">
            <DarkModeToggle />
            <button 
              className="text-gray-800 focus:outline-none lg:hidden dark:text-gray-200"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex">
            <ul className="flex flex-col items-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4">
              {navItems.map((item, index) => (
                <li key={index} className="relative">
                  <div
                    ref={(el) => (dropdownRefs.current[index] = el)}
                    className="relative"
                  >
                    <a 
                      href={item.children.length > 0 ? "#" : item.href}
                      className={`flex items-center py-6 font-medium text-gray-700 dark:text-gray-200 border-b-2 ${
                        index === 0 ? "text-[#0A2463] dark:text-white" : ""
                      } ${
                        activeDropdown === index ? "border-[#D8315B]" : "border-transparent"
                      } hover:border-[#D8315B] transition-all duration-200`}
                      onClick={(e) => {
                        if (item.children.length > 0) {
                          e.preventDefault();
                          toggleDropdown(index);
                        }
                      }}
                    >
                      {item.title}
                      {item.children.length > 0 && (
                        <ChevronDown 
                          className={`ml-1 h-4 w-4 transition-transform ${
                            activeDropdown === index ? "rotate-180" : ""
                          }`} 
                        />
                      )}
                    </a>
                    
                    {/* Dropdown Menu */}
                    {item.children.length > 0 && (
                      <div 
                        className={`absolute left-0 z-10 mt-1 min-w-[250px] rounded-md bg-white dark:bg-gray-800 py-2 shadow-lg transition-all ${
                          activeDropdown === index ? "visible opacity-100" : "invisible opacity-0"
                        }`}
                      >
                        {item.children.map((child, childIndex) => (
                          <a
                            key={childIndex}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-[#1C1C1C] dark:text-gray-200 hover:bg-[#0A2463]/5 dark:hover:bg-gray-700 hover:text-[#0A2463] dark:hover:text-white"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {child.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile Menu (Toggleable) */}
        <div className={`border-t-2 dark:border-gray-700 py-4 lg:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <ul className="space-y-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <div>
                  <a 
                    href={item.children.length > 0 ? "#" : item.href}
                    onClick={(e) => {
                      if (item.children.length > 0) {
                        e.preventDefault();
                        toggleMobileDropdown(index);
                      } else {
                        closeMobileMenu();
                      }
                    }}
                    className={`flex items-center justify-between font-medium ${
                      index === 0 ? "text-[#0A2463] dark:text-white" : "text-gray-700 dark:text-gray-200"
                    } hover:text-[#D8315B] dark:hover:text-[#D8315B]`}
                  >
                    <span>{item.title}</span>
                    {item.children.length > 0 && (
                      <ChevronDown 
                        className={`ml-1 h-4 w-4 transition-transform ${
                          mobileOpenDropdowns.has(index) ? "rotate-180" : ""
                        }`} 
                      />
                    )}
                  </a>
                  
                  {/* Mobile Submenu */}
                  {item.children.length > 0 && mobileOpenDropdowns.has(index) && (
                    <div className="mt-2 space-y-2 pl-4">
                      {item.children.map((child, childIndex) => (
                        <a
                          key={childIndex}
                          href={child.href}
                          className="block py-1 text-sm text-gray-700 dark:text-gray-300 hover:text-[#D8315B] dark:hover:text-[#D8315B]"
                          onClick={closeMobileMenu}
                        >
                          {child.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))}

          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
