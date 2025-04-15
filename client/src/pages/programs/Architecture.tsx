import { ArrowLeft, Download, Phone, Mail, User, BookOpen, Building, Image, CalendarClock, FileText } from "lucide-react";
import { useState } from "react";
import buildingImg from "../../assets/bg1.jpg";
import facultyImg from "../../assets/prin.jpg";

// Tab interface
type TabType = 'about' | 'facilities' | 'faculty' | 'gallery' | 'activities' | 'contact' | 'syllabus';

const Architecture = () => {
  const [activeTab, setActiveTab] = useState<TabType>('about');

  return (
    <div className="bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <div className="mb-8 flex items-center">
          <a 
            href="/#programs" 
            className="mr-4 inline-flex items-center text-[#0A2463] dark:text-blue-400 hover:text-[#D8315B]"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back
          </a>
          <h1 className="text-3xl font-bold text-[#0A2463] dark:text-white md:text-4xl">Architecture</h1>
        </div>
        
        {/* Featured Image */}
        <div className="mb-10 overflow-hidden rounded-lg shadow-lg">
          <img 
            src={buildingImg} 
            alt="Architecture Department" 
            className="h-full w-full object-cover"
          />
        </div>

        {/* Tabs navigation */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 border-b">
            <button 
              onClick={() => setActiveTab('about')}
              className={`px-4 py-2 font-medium ${activeTab === 'about' ? 'border-b-2 border-[#D8315B] text-[#0A2463] dark:text-white' : 'text-gray-500 dark:text-gray-400 hover:text-[#0A2463] dark:hover:text-gray-300'}`}
            >
              <span className="flex items-center">
                <BookOpen className="mr-2 h-4 w-4" />
                About
              </span>
            </button>
            <button 
              onClick={() => setActiveTab('facilities')}
              className={`px-4 py-2 font-medium ${activeTab === 'facilities' ? 'border-b-2 border-[#D8315B] text-[#0A2463] dark:text-white' : 'text-gray-500 dark:text-gray-400 hover:text-[#0A2463] dark:hover:text-gray-300'}`}
            >
              <span className="flex items-center">
                <Building className="mr-2 h-4 w-4" />
                Facilities
              </span>
            </button>
            <button 
              onClick={() => setActiveTab('faculty')}
              className={`px-4 py-2 font-medium ${activeTab === 'faculty' ? 'border-b-2 border-[#D8315B] text-[#0A2463] dark:text-white' : 'text-gray-500 dark:text-gray-400 hover:text-[#0A2463] dark:hover:text-gray-300'}`}
            >
              <span className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                Faculty
              </span>
            </button>
            <button 
              onClick={() => setActiveTab('gallery')}
              className={`px-4 py-2 font-medium ${activeTab === 'gallery' ? 'border-b-2 border-[#D8315B] text-[#0A2463] dark:text-white' : 'text-gray-500 dark:text-gray-400 hover:text-[#0A2463] dark:hover:text-gray-300'}`}
            >
              <span className="flex items-center">
                <Image className="mr-2 h-4 w-4" />
                Gallery
              </span>
            </button>
            <button 
              onClick={() => setActiveTab('activities')}
              className={`px-4 py-2 font-medium ${activeTab === 'activities' ? 'border-b-2 border-[#D8315B] text-[#0A2463] dark:text-white' : 'text-gray-500 dark:text-gray-400 hover:text-[#0A2463] dark:hover:text-gray-300'}`}
            >
              <span className="flex items-center">
                <CalendarClock className="mr-2 h-4 w-4" />
                Activities
              </span>
            </button>
            <button 
              onClick={() => setActiveTab('contact')}
              className={`px-4 py-2 font-medium ${activeTab === 'contact' ? 'border-b-2 border-[#D8315B] text-[#0A2463] dark:text-white' : 'text-gray-500 dark:text-gray-400 hover:text-[#0A2463] dark:hover:text-gray-300'}`}
            >
              <span className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                Contact
              </span>
            </button>
            <button 
              onClick={() => setActiveTab('syllabus')}
              className={`px-4 py-2 font-medium ${activeTab === 'syllabus' ? 'border-b-2 border-[#D8315B] text-[#0A2463] dark:text-white' : 'text-gray-500 dark:text-gray-400 hover:text-[#0A2463] dark:hover:text-gray-300'}`}
            >
              <span className="flex items-center">
                <FileText className="mr-2 h-4 w-4" />
                Syllabus
              </span>
            </button>
          </div>
        </div>
        
        {/* Tab content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          {/* About Tab */}
          {activeTab === 'about' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#0A2463] dark:text-white mb-4">About the Architecture Program</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The Architecture program was started at JSS Polytechnic for women, Mysore in the academic year 1983-1984 to facilitate the architectural education at diploma level. We started the diploma program in architecture with the intake of 20 and later the intake was enhanced to 30 meet the growing demand.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Vision</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  To create globally and intellectually competent, professionally skilled, ethically strong, morally upright, socially responsive, culturally tolerant professionals.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Mission</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Imparting Knowledge with Academic Excellence by incorporating competitive curriculum and to make students excellent Designers and Professionals, so that they chart out their own path of success and possess perfection in their endeavors.</li>
                  <li>Develop professionally skilled and innovative planners, designers, constructors and operators of society's economic and social engine.</li>
                  <li>Creating learning environment with technological orientation to maximize Individual potential.</li>
                  <li>To ensure, students of all ability levels are well equipped to meet the contemporary challenges of Architectural education, profession and life.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Programme Educational Objectives</h3>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li>
                    <span className="font-semibold">PEO - 1:</span> To educate students in the fundamental principles of architecture.
                  </li>
                  <li>
                    <span className="font-semibold">PEO - 2:</span> To challenge students to develop the ability to use architectural principles in analyzing and solving problems of practical importance in the built environment and society at large.
                  </li>
                  <li>
                    <span className="font-semibold">PEO - 3:</span> To educate students about the need for lifelong learning and professional development after diploma programme.
                  </li>
                  <li>
                    <span className="font-semibold">PEO - 4:</span> Educating students in skills and knowledge required to improve the quality of the built environment on both national and international level.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Programme Outcomes</h3>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li>
                    <span className="font-semibold">PO - 1: Basic and Discipline specific knowledge:</span> Apply knowledge of basic mathematics, science and engineering fundamentals and engineering specialization to solve the engineering problems.
                  </li>
                  <li>
                    <span className="font-semibold">PO - 2: Problem analysis:</span> Identify and analyse well-defined engineering problems using codified standard methods.
                  </li>
                  <li>
                    <span className="font-semibold">PO - 3: Design/development of solutions:</span> Design solutions for well-defined technical problems and assist with the design of systems components or processes to meet specified needs.
                  </li>
                  <li>
                    <span className="font-semibold">PO - 4: Engineering Tools, Experimentation and Testing:</span> Apply modern engineering tools and appropriate technique to conduct standard tests and measurements.
                  </li>
                  <li>
                    <span className="font-semibold">PO - 5: Engineering practices for society, sustainability and environment:</span> Apply appropriate technology in context of society, sustainability, environment and ethical practices.
                  </li>
                  <li>
                    <span className="font-semibold">PO - 6: Project Management:</span> Use engineering management principles individually, as a team member or a leader to manage projects and effectively communicate about well-defined engineering activities.
                  </li>
                  <li>
                    <span className="font-semibold">PO - 7: Life-long learning:</span> Ability to analyse individual needs and engage in updating in the context of technological changes.
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Facilities Tab */}
          {activeTab === 'facilities' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#0A2463] dark:text-white mb-4">Facilities</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">The total building area is 600 square metres.</p>
              
              <div>
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-4">Major Equipments</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Sl No</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Quantity</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">1</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">LCD Projector</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">01</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">2</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">Computers</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">35</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">3</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">10KV UPS</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">01</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">4</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">Nikon D60 Digital Camera</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">01</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">5</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">Nikon D750 Camera</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">01</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">6</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">Nikon-AC-2S Auto level</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">03</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">7</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">Trimble M3DR 5" Total Station</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">01</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">8</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">Theodolite</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">06</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">9</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">HP Design jet 110+ Plotter</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">01</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">10</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">Epson L220 Printer</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">01</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Faculty Tab */}
          {activeTab === 'faculty' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#0A2463] dark:text-white mb-4">Faculty</h2>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <div className="mb-4 flex justify-center">
                    <img src={facultyImg} alt="DEVIKA S J" className="h-32 w-32 rounded-full object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-2 text-center">DEVIKA S J</h3>
                  <p className="text-[#D8315B] dark:text-[#ff7f9c] mb-4 text-center">Head of Department</p>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><span className="font-semibold">Educational Qualification:</span> B.Arch</p>
                    <p><span className="font-semibold">Area of Specialization:</span> Architecture & Interiors</p>
                    <p className="flex items-center">
                      <Mail className="mr-2 h-4 w-4 text-[#3E92CC]" />
                      <a href="mailto:devikajram@gmail.com" className="text-[#3E92CC] hover:underline">devikajram@gmail.com</a>
                    </p>
                  </div>
                </div>

                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <div className="mb-4 flex justify-center">
                    <img src={facultyImg} alt="ANUSHA G" className="h-32 w-32 rounded-full object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-2 text-center">ANUSHA G</h3>
                  <p className="text-[#D8315B] dark:text-[#ff7f9c] mb-4 text-center">Lecturer</p>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><span className="font-semibold">Educational Qualification:</span> B.Arch</p>
                    <p><span className="font-semibold">Area of Specialization:</span> ARCHITECTURE</p>
                    <p className="flex items-center">
                      <Mail className="mr-2 h-4 w-4 text-[#3E92CC]" />
                      <a href="mailto:anuguru29@jsspwmys.org" className="text-[#3E92CC] hover:underline">anuguru29@jsspwmys.org</a>
                    </p>
                  </div>
                </div>

                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <div className="mb-4 flex justify-center">
                    <img src={facultyImg} alt="William Kadam" className="h-32 w-32 rounded-full object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-2 text-center">William Kadam</h3>
                  <p className="text-[#D8315B] dark:text-[#ff7f9c] mb-4 text-center">Lecturer</p>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><span className="font-semibold">Educational Qualification:</span> B.Arch</p>
                    <p><span className="font-semibold">Area of Specialization:</span> Architecture</p>
                    <p className="flex items-center">
                      <Mail className="mr-2 h-4 w-4 text-[#3E92CC]" />
                      <a href="mailto:williamkdm@gmail.com" className="text-[#3E92CC] hover:underline">williamkdm@gmail.com</a>
                    </p>
                  </div>
                </div>

                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <div className="mb-4 flex justify-center">
                    <img src={facultyImg} alt="PALLAVI H S" className="h-32 w-32 rounded-full object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-2 text-center">PALLAVI H S</h3>
                  <p className="text-[#D8315B] dark:text-[#ff7f9c] mb-4 text-center">Lecturer</p>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><span className="font-semibold">Educational Qualification:</span> B.Arch</p>
                    <p><span className="font-semibold">Area of Specialization:</span> Architecture</p>
                    <p className="flex items-center">
                      <Mail className="mr-2 h-4 w-4 text-[#3E92CC]" />
                      <a href="mailto:pallavihs@jsspwmys.org" className="text-[#3E92CC] hover:underline">pallavihs@jsspwmys.org</a>
                    </p>
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
                  <img src={buildingImg} alt="Architecture Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src={buildingImg} alt="Architecture Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src={buildingImg} alt="Architecture Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src={buildingImg} alt="Architecture Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src={buildingImg} alt="Architecture Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src={buildingImg} alt="Architecture Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
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
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Annual Workshop</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Architecture Department conducts annual workshops for students to enhance their practical skills.</p>
                  <a href="#" className="inline-flex items-center text-[#3E92CC] hover:text-[#0A2463]">
                    <Download className="mr-2 h-4 w-4" />
                    Download Details (PDF)
                  </a>
                </div>
                
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Technical Seminar</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Regular technical seminars are organized to keep students updated with latest trends in architecture.</p>
                  <a href="#" className="inline-flex items-center text-[#3E92CC] hover:text-[#0A2463]">
                    <Download className="mr-2 h-4 w-4" />
                    Download Schedule (PDF)
                  </a>
                </div>
                
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Design Competition</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Annual design competitions are conducted to promote creativity and innovation among students.</p>
                  <a href="#" className="inline-flex items-center text-[#3E92CC] hover:text-[#0A2463]">
                    <Download className="mr-2 h-4 w-4" />
                    Download Results (PDF)
                  </a>
                </div>
                
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Industrial Visits</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Regular industrial visits are organized to expose students to real-world architectural practices.</p>
                  <a href="#" className="inline-flex items-center text-[#3E92CC] hover:text-[#0A2463]">
                    <Download className="mr-2 h-4 w-4" />
                    Download Report (PDF)
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
                      <p className="font-semibold text-[#0A2463] dark:text-white">DEVIKA S J</p>
                      <p className="text-gray-700 dark:text-gray-300">HOD</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="mr-3 h-5 w-5 text-[#3E92CC]" />
                    <a href="tel:8217621733" className="text-gray-700 dark:text-gray-300 hover:text-[#3E92CC]">8217621733</a>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="mr-3 h-5 w-5 text-[#3E92CC]" />
                    <a href="mailto:devikajram@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-[#3E92CC]">devikajram@gmail.com</a>
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
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Architecture Diploma Program Syllabus</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">Access the complete syllabus for the Architecture Diploma Program.</p>
                
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

export default Architecture;