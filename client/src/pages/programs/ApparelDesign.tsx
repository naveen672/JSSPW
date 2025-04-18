import { 
  ArrowLeft, Download, Phone, Mail, User, BookOpen, Building, Image, CalendarClock, 
  FileText, Calendar, Users, Briefcase, Plus, Minus, ChevronDown, ChevronRight, Award,
  Scissors, Palette, GraduationCap, PenTool
} from "lucide-react";
import { useState } from "react";
import buildingImg from "../../assets/bg2.jpg";
import facultyImg from "../../assets/prin.jpg";

// Tab interface
type TabType = 'about' | 'facilities' | 'faculty' | 'gallery' | 'activities' | 'contact' | 'syllabus';

const ApparelDesign = () => {
  const [activeTab, setActiveTab] = useState<TabType>('about');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    intro: true,
    vision: false,
    mission: false,
    outcomes: false,
    objectives: false
  });
  
  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: `url(${buildingImg})`,
            transform: 'translateZ(0)',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 h-full flex flex-col justify-end pb-10 relative z-10">
          <a 
            href="/#programs" 
            className="mb-4 inline-flex items-center text-white hover:text-[#D8315B] transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Programs
          </a>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              <span className="inline-block relative">
                Apparel Design 
                <div className="absolute w-full h-1 bg-[#D8315B] bottom-0 left-0 transform -translate-y-2"></div>
              </span>
              <br />
              <span className="text-[#3E92CC]">& Fabrication Technology</span>
            </h1>
            <p className="text-lg text-gray-200">Where creativity meets craftsmanship in fashion</p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-16 relative">
        {/* Floating Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-20 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 transform transition-transform hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-[#0A2463]/10 dark:bg-[#0A2463]/30 rounded-full mr-4">
                <Calendar className="h-6 w-6 text-[#0A2463] dark:text-[#3E92CC]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">Since 1984</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Established Excellence</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 transform transition-transform hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-[#D8315B]/10 dark:bg-[#D8315B]/30 rounded-full mr-4">
                <Users className="h-6 w-6 text-[#D8315B]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">Expert Faculty</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Industry Veterans</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 transform transition-transform hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-[#3E92CC]/10 dark:bg-[#3E92CC]/30 rounded-full mr-4">
                <Briefcase className="h-6 w-6 text-[#3E92CC]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">100% Placement</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Career Opportunities</p>
              </div>
            </div>
          </div>
        </div>

        {/* Animated tab navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mx-auto max-w-4xl">
            {[
              { id: 'about', icon: BookOpen, label: 'About' },
              { id: 'facilities', icon: Building, label: 'Facilities' },
              { id: 'faculty', icon: User, label: 'Faculty' },
              { id: 'gallery', icon: Image, label: 'Gallery' },
              { id: 'activities', icon: CalendarClock, label: 'Activities' },
              { id: 'contact', icon: Phone, label: 'Contact' },
              { id: 'syllabus', icon: FileText, label: 'Syllabus' }
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabType)}
                  className={`relative group flex flex-col items-center p-4 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'bg-[#0A2463] text-white transform scale-105 shadow-lg'
                      : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <div className={`p-3 rounded-full mb-2 transition-colors duration-300 ${
                    isActive 
                      ? 'bg-[#3E92CC]/20' 
                      : 'bg-gray-100 dark:bg-gray-700 group-hover:bg-[#0A2463]/10 dark:group-hover:bg-[#3E92CC]/20'
                  }`}>
                    <Icon className={`h-6 w-6 ${
                      isActive 
                        ? 'text-white' 
                        : 'text-[#0A2463] dark:text-[#3E92CC] group-hover:text-[#D8315B]'
                    }`} />
                  </div>
                  <span className="text-sm font-medium">{tab.label}</span>
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-6 rotate-45 bg-white dark:bg-gray-800 border-t border-l border-gray-200 dark:border-gray-700"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
        
        {/* Tab content with animation */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 relative overflow-hidden">
          {/* About Tab */}
          {activeTab === 'about' && (
            <div className="space-y-6">
              {/* Introduction Section */}
              <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                <button 
                  onClick={() => toggleSection('intro')}
                  className="w-full flex items-center justify-between p-5 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex items-center">
                    <div className="p-2 bg-[#0A2463]/10 dark:bg-[#0A2463]/30 rounded-full mr-4">
                      <BookOpen className="h-6 w-6 text-[#0A2463] dark:text-[#3E92CC]" />
                    </div>
                    <h2 className="text-xl font-bold text-[#0A2463] dark:text-white">About the Program</h2>
                  </div>
                  <div className={`p-2 rounded-full transition-all duration-300 ${expandedSections.intro ? 'bg-[#D8315B]/10 rotate-45' : 'bg-gray-100 dark:bg-gray-700'}`}>
                    {expandedSections.intro ? (
                      <Minus className="h-5 w-5 text-[#D8315B]" />
                    ) : (
                      <Plus className="h-5 w-5 text-[#0A2463] dark:text-[#3E92CC]" />
                    )}
                  </div>
                </button>
                
                {expandedSections.intro && (
                  <div className="p-5 pt-0 border-t border-gray-100 dark:border-gray-700 animate-slideDown">
                    <div className="pl-14">
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        The Dept. of Apparel Design and Fabrication Technology was established in the year 1984-85 to provide the creative avenue which an individual requires.
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        The Apparel Design & Fabrication Technology Programme aims at educating individuals to be creative and responsible designers who will be competent to handle diverse areas of need/ situations in today's, highly competitive and diverse, Apparel Design Industry.
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        The Apparel Design Programme commences with a foundation programme in design. Area specific inputs begin in the first semester gradually increasing in complexity as the programme advances. Skills and conceptual abilities are also developed through project-based learning wherein students are individually guided and encouraged to pursue and develop their own creative abilities.
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        The program enables the students for careers in apparel and soft goods design and development. The syllabus includes Apparel Construction, Patternmaking, Textile Designing and Computer Aided Design. Fashion designers use their creative and technical skills to design products, develop patterns, monitor quality control and assurance and coordinate sourcing activities.
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        On completion of the course, students can choose from diverse employment opportunities in the industry such as – Assistant Designer, Production Assistant, Fabric Specialist, Trend Manager and Assistant Manager of Quality Assurance, Costume Designer for Film/ Theatre, Bridal Designer, Illustrator, Pattern Maker, Stylist, Retail Merchandiser, Visual merchandiser and CAD Designer. Pursue higher Education- BSc FAD, MSc etc.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Vision Section */}
              <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                <button 
                  onClick={() => toggleSection('vision')}
                  className="w-full flex items-center justify-between p-5 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex items-center">
                    <div className="p-2 bg-[#D8315B]/10 dark:bg-[#D8315B]/30 rounded-full mr-4">
                      <Award className="h-6 w-6 text-[#D8315B]" />
                    </div>
                    <h2 className="text-xl font-bold text-[#0A2463] dark:text-white">Vision</h2>
                  </div>
                  <div className={`p-2 rounded-full transition-all duration-300 ${expandedSections.vision ? 'bg-[#D8315B]/10 rotate-45' : 'bg-gray-100 dark:bg-gray-700'}`}>
                    {expandedSections.vision ? (
                      <Minus className="h-5 w-5 text-[#D8315B]" />
                    ) : (
                      <Plus className="h-5 w-5 text-[#0A2463] dark:text-[#3E92CC]" />
                    )}
                  </div>
                </button>
                
                {expandedSections.vision && (
                  <div className="p-5 pt-0 border-t border-gray-100 dark:border-gray-700 animate-slideDown">
                    <div className="pl-14">
                      <p className="text-gray-700 dark:text-gray-300 italic">
                        "Offer professional programs and offering to enable, empower and inspire to fulfill their aspirations to the best of their ability."
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Mission Section */}
              <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                <button 
                  onClick={() => toggleSection('mission')}
                  className="w-full flex items-center justify-between p-5 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex items-center">
                    <div className="p-2 bg-[#3E92CC]/10 dark:bg-[#3E92CC]/30 rounded-full mr-4">
                      <GraduationCap className="h-6 w-6 text-[#3E92CC]" />
                    </div>
                    <h2 className="text-xl font-bold text-[#0A2463] dark:text-white">Mission</h2>
                  </div>
                  <div className={`p-2 rounded-full transition-all duration-300 ${expandedSections.mission ? 'bg-[#D8315B]/10 rotate-45' : 'bg-gray-100 dark:bg-gray-700'}`}>
                    {expandedSections.mission ? (
                      <Minus className="h-5 w-5 text-[#D8315B]" />
                    ) : (
                      <Plus className="h-5 w-5 text-[#0A2463] dark:text-[#3E92CC]" />
                    )}
                  </div>
                </button>
                
                {expandedSections.mission && (
                  <div className="p-5 pt-0 border-t border-gray-100 dark:border-gray-700 animate-slideDown">
                    <div className="pl-14">
                      <ul className="list-disc space-y-3 text-gray-700 dark:text-gray-300">
                        <li className="italic">"Enhancing value such as style and research, creative and innovation, technology and craftsmanship, the skill to merge many spirits into a harmonious balance."</li>
                        <li className="italic">"Adopt unique blend of fashion designing and management skills and mould them as complete professionals with knowledge, skills and competencies enabling them to be socially responsible entrepreneurs to meet the diverse demands of the fashion industry through research and development."</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* Program Outcomes Section */}
              <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                <button 
                  onClick={() => toggleSection('outcomes')}
                  className="w-full flex items-center justify-between p-5 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex items-center">
                    <div className="p-2 bg-[#0A2463]/10 dark:bg-[#0A2463]/30 rounded-full mr-4">
                      <Palette className="h-6 w-6 text-[#0A2463] dark:text-[#3E92CC]" />
                    </div>
                    <h2 className="text-xl font-bold text-[#0A2463] dark:text-white">Program Outcomes</h2>
                  </div>
                  <div className={`p-2 rounded-full transition-all duration-300 ${expandedSections.outcomes ? 'bg-[#D8315B]/10 rotate-45' : 'bg-gray-100 dark:bg-gray-700'}`}>
                    {expandedSections.outcomes ? (
                      <Minus className="h-5 w-5 text-[#D8315B]" />
                    ) : (
                      <Plus className="h-5 w-5 text-[#0A2463] dark:text-[#3E92CC]" />
                    )}
                  </div>
                </button>
                
                {expandedSections.outcomes && (
                  <div className="p-5 pt-0 border-t border-gray-100 dark:border-gray-700 animate-slideDown">
                    <div className="pl-14">
                      <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                        <li>
                          <span className="font-semibold">1. Basic and Discipline specific knowledge:</span> Apply knowledge of basic designing, pattern making and apparel construction for fashion industry.
                        </li>
                        <li>
                          <span className="font-semibold">2. Problem Analysis:</span> Identify target consumers, study economic conditions, standard of living and design the garments as per their need.
                        </li>
                        <li>
                          <span className="font-semibold">3. Design / Development of solutions:</span> Specify and design the styles for advanced garments, analyse and evaluate methodology and create mass and high fashion garments.
                        </li>
                        <li>
                          <span className="font-semibold">4. Modern tools, experimentation and testing:</span> Select advanced industrial sewing machine, CAD software's, Modern cutting techniques needed for modern methods of production.
                        </li>
                        <li>
                          <span className="font-semibold">5. Best practices for society, sustainability and environment:</span> Work in team using artistic endeavours and environment to achieve project objectives.
                        </li>
                        <li>
                          <span className="font-semibold">6. Project Management:</span> Analyze modern management and communicate various apparel construction techniques to complete the project.
                        </li>
                        <li>
                          <span className="font-semibold">7. Life-long learning:</span> Pursue lifelong learning as a means of enhancing the knowledge and skills. Recognize the professional and personal responsibility of designers to the community.
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* Program Educational Objectives Section */}
              <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                <button 
                  onClick={() => toggleSection('objectives')}
                  className="w-full flex items-center justify-between p-5 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex items-center">
                    <div className="p-2 bg-[#D8315B]/10 dark:bg-[#D8315B]/30 rounded-full mr-4">
                      <PenTool className="h-6 w-6 text-[#D8315B]" />
                    </div>
                    <h2 className="text-xl font-bold text-[#0A2463] dark:text-white">Program Educational Objectives</h2>
                  </div>
                  <div className={`p-2 rounded-full transition-all duration-300 ${expandedSections.objectives ? 'bg-[#D8315B]/10 rotate-45' : 'bg-gray-100 dark:bg-gray-700'}`}>
                    {expandedSections.objectives ? (
                      <Minus className="h-5 w-5 text-[#D8315B]" />
                    ) : (
                      <Plus className="h-5 w-5 text-[#0A2463] dark:text-[#3E92CC]" />
                    )}
                  </div>
                </button>
                
                {expandedSections.objectives && (
                  <div className="p-5 pt-0 border-t border-gray-100 dark:border-gray-700 animate-slideDown">
                    <div className="pl-14">
                      <ul className="list-decimal space-y-3 text-gray-700 dark:text-gray-300">
                        <li>Apparel Design and Fabrication Technology students will contribute to the Apparel Industry as Designers, Merchandisers, CAD Designers, CAD Pattern Makers, Textile Designers, Knitwear and Quality Controllers.</li>
                        <li>Diploma holders will pursue lifelong learning process as a means of enhancing the knowledge base and skills competence to contribute to the improvement of their profession and community.</li>
                        <li>Diploma holders will be committed to the improvement of Business communities while maintaining high professional ethical standards.</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Facilities Tab */}
          {activeTab === 'facilities' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#0A2463] dark:text-white mb-4">Facilities</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6"><strong>Building area:</strong> 600 Square Meters</p>
              
              <div>
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-4">Major Equipments</h3>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <h4 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-3">Sewing & Embroidery</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>Power Operated Sewing machine - 15 No.</li>
                      <li>Power Operated Embroidery Machine - 5 No.</li>
                    </ul>
                  </div>
                  
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <h4 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-3">Computer Lab</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>High-end configuration Computer Systems - 30 No.</li>
                      <li>Garment CAD, Fashion & Textile CAD software</li>
                      <li>Inkjet printer</li>
                      <li>Internet facility</li>
                    </ul>
                  </div>
                  
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <h4 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-3">Textile Science Lab</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>Yarn Twist Tester - 01 no.</li>
                      <li>Micro Vision - 01 no.</li>
                      <li>Crock-o-Meter - 01 no.</li>
                      <li>Prespirometer - 01 no.</li>
                      <li>Water Bath - 02 no.</li>
                      <li>Beesley Balance - 01 no.</li>
                    </ul>
                  </div>
                  
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <h4 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-3">Additional Facilities</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>Apparel Manufacturing Studio equipped with Power Operated & High Speed sewing Machines</li>
                      <li>Departmental library with latest Magazines & Journals subscribed for the benefit of both staff & students</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Faculty Tab */}
          {activeTab === 'faculty' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-[#0A2463] dark:text-white">Our Expert Faculty</h2>
                <div className="flex items-center space-x-2 text-sm">
                  <span className="flex items-center text-gray-500 dark:text-gray-400">
                    <Users className="w-4 h-4 mr-1" />
                    <span>3 Faculty Members</span>
                  </span>
                </div>
              </div>
              
              <div className="grid gap-8 md:grid-cols-3">
                {/* Faculty Card 1 - Department Head */}
                <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2463]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img 
                      src={facultyImg} 
                      alt="Meera V" 
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110" 
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent pt-10">
                      <h3 className="text-xl font-semibold text-white">Meera V</h3>
                      <div className="flex items-center text-[#D8315B] font-medium">
                        <span className="bg-white/20 px-2 py-0.5 rounded text-sm backdrop-blur-sm">Head of Department</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="p-1.5 bg-[#0A2463]/10 dark:bg-[#0A2463]/30 rounded-full mr-3">
                          <BookOpen className="h-4 w-4 text-[#0A2463] dark:text-[#3E92CC]" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Qualification</p>
                          <p className="text-sm text-gray-900 dark:text-white">Dip in CDDM, MA</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="p-1.5 bg-[#D8315B]/10 dark:bg-[#D8315B]/30 rounded-full mr-3">
                          <Briefcase className="h-4 w-4 text-[#D8315B]" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Specialization</p>
                          <p className="text-sm text-gray-900 dark:text-white">Pattern Illustration, Apparel CAD</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-5 pt-5 border-t border-gray-200 dark:border-gray-700">
                      <a 
                        href="mailto:meera5871@gmail.com" 
                        className="flex items-center justify-center w-full py-2 px-4 bg-[#0A2463] hover:bg-[#0A2463]/90 text-white rounded-md transition-colors"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Contact Faculty
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Faculty Card 2 */}
                <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2463]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img 
                      src={facultyImg} 
                      alt="Roopashree" 
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110" 
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent pt-10">
                      <h3 className="text-xl font-semibold text-white">Roopashree</h3>
                      <div className="flex items-center text-[#D8315B] font-medium">
                        <span className="bg-white/20 px-2 py-0.5 rounded text-sm backdrop-blur-sm">Lecturer</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="p-1.5 bg-[#0A2463]/10 dark:bg-[#0A2463]/30 rounded-full mr-3">
                          <BookOpen className="h-4 w-4 text-[#0A2463] dark:text-[#3E92CC]" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Qualification</p>
                          <p className="text-sm text-gray-900 dark:text-white">M.Sc-ATM, B.Sc FAD, Dip in ADFT</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="p-1.5 bg-[#D8315B]/10 dark:bg-[#D8315B]/30 rounded-full mr-3">
                          <Briefcase className="h-4 w-4 text-[#D8315B]" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Specialization</p>
                          <p className="text-sm text-gray-900 dark:text-white">Technical textiles</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-5 pt-5 border-t border-gray-200 dark:border-gray-700">
                      <a 
                        href="mailto:roopahsk9@gmail.com" 
                        className="flex items-center justify-center w-full py-2 px-4 bg-[#0A2463] hover:bg-[#0A2463]/90 text-white rounded-md transition-colors"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Contact Faculty
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Faculty Card 3 */}
                <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2463]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img 
                      src={facultyImg} 
                      alt="Deepika T H" 
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110" 
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent pt-10">
                      <h3 className="text-xl font-semibold text-white">Deepika T H</h3>
                      <div className="flex items-center text-[#D8315B] font-medium">
                        <span className="bg-white/20 px-2 py-0.5 rounded text-sm backdrop-blur-sm">Lecturer</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="p-1.5 bg-[#0A2463]/10 dark:bg-[#0A2463]/30 rounded-full mr-3">
                          <BookOpen className="h-4 w-4 text-[#0A2463] dark:text-[#3E92CC]" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Qualification</p>
                          <p className="text-sm text-gray-900 dark:text-white">MSc-FT</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="p-1.5 bg-[#D8315B]/10 dark:bg-[#D8315B]/30 rounded-full mr-3">
                          <Briefcase className="h-4 w-4 text-[#D8315B]" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Specialization</p>
                          <p className="text-sm text-gray-900 dark:text-white">Art and craft pattern making</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-5 pt-5 border-t border-gray-200 dark:border-gray-700">
                      <a 
                        href="mailto:deepikasathist@gmail.com" 
                        className="flex items-center justify-center w-full py-2 px-4 bg-[#0A2463] hover:bg-[#0A2463]/90 text-white rounded-md transition-colors"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Contact Faculty
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Gallery Tab */}
          {activeTab === 'gallery' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#0A2463] dark:text-white mb-4">Gallery</h2>
              
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {/* Using the building image as placeholder for the gallery */}
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src={buildingImg} alt="Apparel Design Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src={buildingImg} alt="Apparel Design Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src={buildingImg} alt="Apparel Design Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src={buildingImg} alt="Apparel Design Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src={buildingImg} alt="Apparel Design Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src={buildingImg} alt="Apparel Design Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
            </div>
          )}

          {/* Activities Tab */}
          {activeTab === 'activities' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#0A2463] dark:text-white mb-4">Activities</h2>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Annual Fashion Show</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Students showcase their designs at the annual fashion show, displaying their creativity and skills.</p>
                  <a href="#" className="inline-flex items-center text-[#3E92CC] hover:text-[#0A2463]">
                    <Download className="mr-2 h-4 w-4" />
                    Download Event Details (PDF)
                  </a>
                </div>
                
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Design Workshop</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Regular design workshops are conducted to enhance students' creative abilities.</p>
                  <a href="#" className="inline-flex items-center text-[#3E92CC] hover:text-[#0A2463]">
                    <Download className="mr-2 h-4 w-4" />
                    Download Workshop Schedule (PDF)
                  </a>
                </div>
                
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Industry Visits</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Students are taken to textile and garment manufacturing industries to gain practical exposure.</p>
                  <a href="#" className="inline-flex items-center text-[#3E92CC] hover:text-[#0A2463]">
                    <Download className="mr-2 h-4 w-4" />
                    Download Visit Reports (PDF)
                  </a>
                </div>
                
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Technical Seminar</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Regular technical seminars are organized to keep students updated with latest trends in fashion technology.</p>
                  <a href="#" className="inline-flex items-center text-[#3E92CC] hover:text-[#0A2463]">
                    <Download className="mr-2 h-4 w-4" />
                    Download Seminar Materials (PDF)
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Contact Tab */}
          {activeTab === 'contact' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#0A2463] dark:text-white mb-4">Contact</h2>
              
              <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Department Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <User className="mr-3 h-5 w-5 mt-0.5 text-[#3E92CC]" />
                    <div>
                      <p className="font-semibold text-[#0A2463] dark:text-white">Meera V</p>
                      <p className="text-gray-700 dark:text-gray-300">HOD</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="mr-3 h-5 w-5 text-[#3E92CC]" />
                    <a href="tel:9480967228" className="text-gray-700 dark:text-gray-300 hover:text-[#3E92CC]">9480967228</a>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="mr-3 h-5 w-5 text-[#3E92CC]" />
                    <a href="mailto:meera5871@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-[#3E92CC]">meera5871@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Syllabus Tab */}
          {activeTab === 'syllabus' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#0A2463] dark:text-white mb-4">Syllabus</h2>
              
              <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Apparel Design and Fabrication Technology Diploma Program Syllabus</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">Access the complete syllabus for the Apparel Design and Fabrication Technology Diploma Program.</p>
                
                <a 
                  href="#" 
                  className="inline-flex items-center px-6 py-3 bg-[#0A2463] text-white rounded-md hover:bg-[#0A2463]/90 transition-colors"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Syllabus (PDF)
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApparelDesign;