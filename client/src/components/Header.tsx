import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { Menu, ChevronDown } from "lucide-react";
import DarkModeToggle from "@/components/DarkModeToggle";

// Default CSS classes for navigation items
const NAV_LINK_CLASSES = "px-2 py-2 text-[13px] font-medium transition-colors duration-200 ease-in-out text-gray-700 dark:text-gray-200 hover:text-[#D8315B] dark:hover:text-[#D8315B]";
const NAV_LINK_ACTIVE_CLASSES = "text-[#0A2463] dark:text-white";
const NAV_DROPDOWN_TRIGGER_CLASSES = "flex items-center gap-1 whitespace-nowrap";
const NAV_DROPDOWN_ITEM_CLASSES = "block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700";

// Navigation structure
const navItems = [
  {
    title: "HOME",
    href: "/",
    children: [
      { title: "About JSSMVP", href: "/home/about-jssmvp" },
      { title: "Technical Education under JSSMVP", href: "/home/technical-education" },
      { title: "About JSSPW", href: "/home/about-jsspw" },
      { title: "Vision, Mission", href: "/home/vision-mission" },
      { title: "Messages", href: "/home/messages" },
      { title: "Administration", href: "/home/administration" }
    ]
  },
  {
    title: "ADMISSION",
    href: "/admission",
    children: [
      { title: "Diploma Programs", href: "/admission/diploma-programs" },
      { title: "Admission Help Desk/Contact", href: "/admission/help-desk" }
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
      { title: "Electronics Instrumentation and Control Engg.", href: "/programs/electronics-instrumentation" },
      { title: "Interior Decoration", href: "/programs/interior-decoration" },
      { title: "Information Science and Technology", href: "/programs/information-science" }
    ]
  },
  {
    title: "FACILITIES",
    href: "/facilities",
    children: [
      { title: "Hostel", href: "/facilities/hostel" },
      { title: "Peripheral OPD", href: "/facilities/peripheral-opd" },
      { title: "Sports", href: "/facilities/sports" },
      { title: "Library", href: "/facilities/library" }
    ]
  },
  {
    title: "SUPPORTS",
    href: "#supports",
    children: [
      { title: "III Cell", href: "/supports/iii-cell" },
      { title: "ISTE Chapter", href: "/supports/iste-chapter" },
      { title: "NSS", href: "/supports/nss" },
      { title: "NCC", href: "/supports/ncc" }
    ]
  },
  {
    title: "EXAMS",
    href: "/exams",
    children: [
      { title: "Brief", href: "/exams/brief" },
      { title: "Notification", href: "/exams/notification" },
      { title: "Syllabus", href: "/exams/syllabus" },
      { title: "Time Table", href: "/exams/time-table" },
      { title: "IA Marks", href: "/exams/ia-marks" },
      { title: "Results", href: "/exams/results" },
      { title: "Contact", href: "/exams/contact" }
    ]
  },
  {
    title: "ALUMNI",
    href: "/alumni",
    children: [
      { title: "Brief", href: "/alumni/brief" },
      { title: "Distinguished Alumni", href: "/alumni/distinguished" },
      { title: "Form", href: "/alumni/form" },
      { title: "Photo Gallery", href: "/alumni/gallery" },
      { title: "Contact", href: "/alumni/contact" },
      { title: "Reports", href: "/alumni/reports" }
    ]
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
    title: "CONTACT",
    href: "/contact",
    children: []
  },
  {
    title: "MORE",
    href: "#more",
    children: [
      { title: "RTI", href: "/more/rti" },
      { title: "Photo Gallery", href: "/more/gallery" },
      { title: "Grievance Cell", href: "/more/grievance" }
    ]
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
    <header className="bg-white dark:bg-gray-900 shadow-md py-2 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Logo area */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/logo_jss.jpeg" 
              alt="JSS Logo" 
              className="h-10 mr-3 cursor-pointer"
              onClick={() => navigate("/")}
            />
            <div className="flex flex-col">
              <div className="text-xs text-gray-600 dark:text-gray-400">JSS Mahavidyapeetha</div>
              <div className="text-base font-bold text-[#0A2463] dark:text-white">JSS Polytechnic for Women</div>
            </div>
            
            {/* Accreditation Logo */}
            <div className="hidden md:flex items-center ml-3 pl-3 border-l border-gray-300 dark:border-gray-700">
              <a href="/#accreditations" className="flex items-center group">
                <img 
                  src="./smalllogo1.png" 
                  alt="AICTE Approved" 
                  className="h-7 w-auto" 
                />
                <span className="ml-2 text-xs text-gray-600 dark:text-gray-400 hidden lg:inline-block">
                  AICTE Approved
                </span>
              </a>
            </div>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-0.5">
            {navItems.map((item, index) => (
              <div key={index} className="relative" ref={(el) => (dropdownRefs.current[index] = el)}>
                {item.children.length > 0 ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className={`${NAV_LINK_CLASSES} ${index === 0 ? NAV_LINK_ACTIVE_CLASSES : ""} ${NAV_DROPDOWN_TRIGGER_CLASSES}`}
                    >
                      {item.title}
                      <ChevronDown 
                        className={`w-3 h-3 transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {activeDropdown === index && (
                      <div className="absolute left-0 mt-1 w-56 bg-white dark:bg-gray-800 rounded shadow-lg z-10">
                        {item.children.map((child, childIndex) => (
                          <a
                            key={childIndex}
                            href={child.href}
                            className={`${NAV_DROPDOWN_ITEM_CLASSES}`}
                            onClick={(e) => {
                              if (child.href.startsWith('/')) {
                                e.preventDefault();
                                setActiveDropdown(null);
                                navigate(child.href);
                              }
                            }}
                          >
                            {child.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className={`${NAV_LINK_CLASSES} ${index === 0 ? NAV_LINK_ACTIVE_CLASSES : ""}`}
                    onClick={(e) => {
                      if (item.href.startsWith('/')) {
                        e.preventDefault();
                        navigate(item.href);
                      }
                    }}
                  >
                    {item.title}
                  </a>
                )}
              </div>
            ))}
            <DarkModeToggle />
          </div>
          
          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <DarkModeToggle />
            <button 
              onClick={toggleMobileMenu}
              className="ml-2 p-2 rounded-md text-gray-700 dark:text-gray-200"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        {/* Mobile navigation menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">
            <nav className="grid gap-y-1">
              {navItems.map((item, index) => (
                <div key={index}>
                  {item.children.length > 0 ? (
                    <>
                      <button
                        onClick={() => toggleMobileDropdown(index)}
                        className="flex items-center justify-between w-full py-2 px-4 text-left"
                      >
                        <span className="font-medium">{item.title}</span>
                        <ChevronDown 
                          className={`w-5 h-5 transition-transform ${mobileOpenDropdowns.has(index) ? 'rotate-180' : ''}`}
                        />
                      </button>
                      
                      {mobileOpenDropdowns.has(index) && (
                        <div className="pl-4 pr-2 py-1 space-y-1">
                          {item.children.map((child, childIndex) => (
                            <a
                              key={childIndex}
                              href={child.href}
                              className="block py-2 px-4 text-sm"
                              onClick={(e) => {
                                if (child.href.startsWith('/')) {
                                  e.preventDefault();
                                  closeMobileMenu();
                                  navigate(child.href);
                                }
                              }}
                            >
                              {child.title}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="block py-2 px-4 font-medium"
                      onClick={(e) => {
                        if (item.href.startsWith('/')) {
                          e.preventDefault();
                          closeMobileMenu();
                          navigate(item.href);
                        }
                      }}
                    >
                      {item.title}
                    </a>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
