import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { Menu, ChevronDown } from "lucide-react";
import DarkModeToggle from "@/components/DarkModeToggle";

// Navigation structure
const navItems = [
  {
    title: "HOME",
    href: "/",
    children: []
  },
  {
    title: "ABOUT",
    href: "#about",
    children: [
      { title: "JSS MAHAVIDYAPEETHA", href: "/jss-mahavidyapeetha" },
      { title: "Technical Education under JSSMVP", href: "/technical-education" },
      { title: "About the College", href: "/about-college" }
    ]
  },
  {
    title: "PROGRAMMES",
    href: "#programs",
    children: [
      { title: "Architecture", href: "/programs/architecture" },
      { title: "Apparel Design and Fabrication Technology", href: "/programs/apparel-design" },
      { title: "Commercial Practice", href: "/programs/commercial-practice" },
      { title: "Computer Science & Engineering", href: "/programs/computer-science" },
      { title: "Electronics & Communication Engineering", href: "/programs/electronics-communication" },
      { title: "Electronics Instrumentation and Control ENGG", href: "/programs/electronics-instrumentation" },
      { title: "Interior Design", href: "/programs/interior-design" },
      { title: "Information Science", href: "/programs/information-science" }
    ]
  },
  {
    title: "ADMISSION",
    href: "/admission",
    children: []
  },
  {
    title: "SUPPORTS",
    href: "#supports",
    children: [
      { title: "III Cell (Placements & Training Cell)", href: "/supports/iii-cell" },
      { title: "Hostel", href: "/supports/hostel" },
      { title: "Library", href: "/supports/library" },
      { title: "NSS", href: "/supports/nss" },
      { title: "NCC", href: "/supports/ncc" },
      { title: "ISTE Chapter", href: "/supports/iste-chapter" },
      { title: "Community Development Through Polytechnic", href: "/supports/community-development" }
    ]
  },
  {
    title: "EXAMS",
    href: "/exams",
    children: []
  },
  {
    title: "CIRCULARS",
    href: "#circulars",
    children: [
      { title: "Academic Calendar", href: "/circulars/academic-calendar" },
      { title: "Exam", href: "/circulars/exam" },
      { title: "Scholarship", href: "/circulars/scholarship" },
      { title: "III Cell", href: "/circulars/iii-cell" },
      { title: "NCC", href: "/circulars/ncc" },
      { title: "NSS", href: "/circulars/nss" },
      { title: "Cultural", href: "/circulars/cultural" },
      { title: "Sports", href: "/circulars/sports" },
      { title: "Alumni", href: "/circulars/alumni" },
      { title: "Hostel", href: "/circulars/hostel" }
    ]
  },
  {
    title: "ALUMNI",
    href: "/alumni",
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
      className={`sticky top-0 z-50 bg-white dark:bg-gray-900 transition-all duration-300 ${
        isScrolled ? "py-2 shadow-lg" : "py-4 shadow-md"
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between py-4 lg:py-0">
          {/* Logo and Accreditation */}
          <div className="flex items-center shrink-0">
            <div 
              className="flex items-center cursor-pointer" 
              onClick={() => navigate("/")}
            >
              <img 
                src="/logo_jss.jpeg" 
                alt="JSS Polytechnic Logo" 
                className="mr-2 h-10 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xs text-[#0A2463]/80 dark:text-gray-400">JSS Mahavidyapeetha</span>
                <span className="text-base font-bold text-[#0A2463] dark:text-white">JSS Polytechnic for Women</span>
              </div>
            </div>
            
            {/* Accreditation Logos (visible only on larger screens) */}
            <div className="hidden xl:flex items-center ml-2 pl-2 border-l border-gray-300 dark:border-gray-700">
              <a href="/#accreditations" className="flex items-center group">
                <img 
                  src="./NAACAlogo-1.png" 
                  alt="NAAC A+ Accredited" 
                  className="h-6 w-auto object-contain mr-1" 
                />
                <img 
                  src="./smalllogo2.png" 
                  alt="NBA Accredited" 
                  className="h-6 w-auto object-contain mr-1" 
                />
                <img 
                  src="./smalllogo1.png" 
                  alt="AICTE Approved" 
                  className="h-6 w-auto object-contain" 
                />
                <span className="ml-1 text-xs text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  View Accreditations
                </span>
              </a>
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
          <nav className="hidden lg:flex justify-end flex-1 overflow-x-auto">
            <ul className="flex items-center space-y-0 space-x-3 xl:space-x-5">
              {navItems.map((item, index) => (
                <li key={index} className="relative">
                  <div
                    ref={(el) => (dropdownRefs.current[index] = el)}
                    className="relative"
                  >
                    <a 
                      href={item.children.length > 0 ? "#" : item.href}
                      className={`flex items-center py-6 px-2 md:px-3 font-medium text-gray-700 dark:text-gray-200 border-b-2 ${
                        index === 0 ? "text-[#0A2463] dark:text-white" : ""
                      } ${
                        activeDropdown === index ? "border-[#D8315B]" : "border-transparent"
                      } hover:border-[#D8315B] transition-all duration-200 whitespace-nowrap text-[13px] md:text-sm`}
                      onClick={(e) => {
                        if (item.children.length > 0) {
                          e.preventDefault();
                          toggleDropdown(index);
                        } else if (item.href.startsWith('/')) {
                          e.preventDefault();
                          navigate(item.href);
                        }
                      }}
                    >
                      <span>{item.title}</span>
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
                        className={`absolute left-0 z-10 mt-1 w-auto min-w-[200px] max-w-[300px] rounded-md bg-white dark:bg-gray-800 py-2 shadow-lg transition-all ${
                          activeDropdown === index ? "visible opacity-100" : "invisible opacity-0"
                        }`}
                      >
                        {item.children.map((child, childIndex) => (
                          <a
                            key={childIndex}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-[#0A2463]/5 dark:hover:bg-gray-700 hover:text-[#0A2463] dark:hover:text-white overflow-hidden text-ellipsis"
                            onClick={(e) => {
                              setActiveDropdown(null);
                              // If it's an external page (not a hash link), use navigate
                              if (child.href.startsWith('/')) {
                                e.preventDefault();
                                navigate(child.href);
                              }
                            }}
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
        <div className={`border-t-2 dark:border-gray-700 py-4 px-6 lg:hidden ${isMobileMenuOpen ? "block" : "hidden"} max-h-[calc(100vh-80px)] overflow-y-auto absolute left-0 right-0 top-[calc(100%)] bg-white dark:bg-gray-900 shadow-lg`}>
          <ul className="space-y-4 pb-12">
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
                        if (item.href.startsWith('/')) {
                          e.preventDefault();
                          navigate(item.href);
                        }
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
                          onClick={(e) => {
                            closeMobileMenu();
                            // If it's an external page (not a hash link), use navigate
                            if (child.href.startsWith('/')) {
                              e.preventDefault();
                              navigate(child.href);
                            }
                          }}
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
