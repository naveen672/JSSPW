import { ArrowLeft, Download, Phone, Mail, User, BookOpen, Building, Image, CalendarClock, FileText } from "lucide-react";
import { useState } from "react";
import buildingImg from "../../assets/bg2.jpg";
import facultyImg from "../../assets/prin.jpg";

// Tab interface
type TabType = 'about' | 'facilities' | 'faculty' | 'gallery' | 'activities' | 'contact' | 'syllabus';

const ElectronicsCommunication = () => {
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
          <h1 className="text-3xl font-bold text-[#0A2463] dark:text-white md:text-4xl">Electronics & Communication Engineering</h1>
        </div>
        
        {/* Featured Image */}
        <div className="mb-10 overflow-hidden rounded-lg shadow-lg">
          <img 
            src={buildingImg} 
            alt="Electronics & Communication Department" 
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
                <h2 className="text-2xl font-bold text-[#0A2463] dark:text-white mb-4">About the Electronics & Communication Program</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The Electronics & Communication Engineering program at JSS Polytechnic for Women provides a comprehensive education in electronic systems, communication networks, and signal processing. Our program equips students with the technical knowledge and practical skills needed for careers in the rapidly evolving field of electronics and telecommunications.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  With a focus on both theoretical concepts and practical applications, our curriculum covers digital electronics, communication systems, microprocessors, embedded systems, and more. The program prepares students for careers in sectors like telecommunications, consumer electronics, semiconductor manufacturing, and IoT.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Vision</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  To be a center of excellence in electronics and communication engineering education, producing skilled professionals who contribute to technological innovation and sustainable development.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Mission</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Providing quality education in electronics and communication engineering with a focus on practical skills.</li>
                  <li>Fostering innovation and research in emerging areas of electronics and communication technologies.</li>
                  <li>Developing strong industry connections to enhance student employability and professional growth.</li>
                  <li>Promoting ethical practices and environmental consciousness in technological applications.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Program Educational Objectives</h3>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li>
                    <span className="font-semibold">PEO - 1:</span> To provide a strong foundation in electronics and communication principles and their applications.
                  </li>
                  <li>
                    <span className="font-semibold">PEO - 2:</span> To develop proficiency in designing and analyzing electronic systems and communication networks.
                  </li>
                  <li>
                    <span className="font-semibold">PEO - 3:</span> To cultivate problem-solving skills and adaptability to technological advancements.
                  </li>
                  <li>
                    <span className="font-semibold">PEO - 4:</span> To instill professional ethics and teamwork essential for a successful career in the electronics industry.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Program Outcomes</h3>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li>
                    <span className="font-semibold">PO - 1: Engineering Knowledge:</span> Apply knowledge of electronics and communication principles to solve technical problems.
                  </li>
                  <li>
                    <span className="font-semibold">PO - 2: Problem Analysis:</span> Identify and analyze complex electronics and communication problems with appropriate solution techniques.
                  </li>
                  <li>
                    <span className="font-semibold">PO - 3: Design/Development:</span> Design and develop electronic systems and communication networks for specific requirements.
                  </li>
                  <li>
                    <span className="font-semibold">PO - 4: Modern Tools:</span> Use modern electronics tools, simulation software, and testing equipment.
                  </li>
                  <li>
                    <span className="font-semibold">PO - 5: Professional Ethics:</span> Understand and apply ethical principles in the electronics and communication profession.
                  </li>
                  <li>
                    <span className="font-semibold">PO - 6: Teamwork:</span> Function effectively in diverse teams and collaborative environments.
                  </li>
                  <li>
                    <span className="font-semibold">PO - 7: Life-long learning:</span> Engage in continuous learning to adapt to evolving technologies in electronics and communication.
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Facilities Tab */}
          {activeTab === 'facilities' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#0A2463] dark:text-white mb-4">Facilities</h2>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h4 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-3">Electronics Lab</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Digital and analog electronic components</li>
                    <li>Circuit design and testing equipment</li>
                    <li>Microprocessor and microcontroller kits</li>
                    <li>PCB design and fabrication facilities</li>
                  </ul>
                </div>
                
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h4 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-3">Communication Lab</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Communication systems training kits</li>
                    <li>Signal generators and analyzers</li>
                    <li>Antenna design and testing equipment</li>
                    <li>RF and microwave components</li>
                  </ul>
                </div>
                
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h4 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-3">Embedded Systems Lab</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Arduino, Raspberry Pi, and other development boards</li>
                    <li>Embedded programming environments</li>
                    <li>IoT modules and sensors</li>
                    <li>Real-time operating systems</li>
                  </ul>
                </div>
                
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h4 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-3">Simulation Lab</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Computer-aided design (CAD) software</li>
                    <li>Circuit simulation tools</li>
                    <li>FPGA development systems</li>
                    <li>VLSI design tools</li>
                  </ul>
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
                    <img src={facultyImg} alt="Faculty Member" className="h-32 w-32 rounded-full object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-2 text-center">Dr. Priya Sharma</h3>
                  <p className="text-[#D8315B] dark:text-[#ff7f9c] mb-4 text-center">Head of Department</p>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><span className="font-semibold">Educational Qualification:</span> Ph.D. in Electronics</p>
                    <p><span className="font-semibold">Area of Specialization:</span> VLSI Design, Embedded Systems</p>
                    <p className="flex items-center">
                      <Mail className="mr-2 h-4 w-4 text-[#3E92CC]" />
                      <a href="mailto:priya@jsspwmys.org" className="text-[#3E92CC] hover:underline">priya@jsspwmys.org</a>
                    </p>
                  </div>
                </div>

                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <div className="mb-4 flex justify-center">
                    <img src={facultyImg} alt="Faculty Member" className="h-32 w-32 rounded-full object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-2 text-center">Prof. Rahul Verma</h3>
                  <p className="text-[#D8315B] dark:text-[#ff7f9c] mb-4 text-center">Associate Professor</p>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><span className="font-semibold">Educational Qualification:</span> M.Tech in Communication Systems</p>
                    <p><span className="font-semibold">Area of Specialization:</span> Wireless Communications, Signal Processing</p>
                    <p className="flex items-center">
                      <Mail className="mr-2 h-4 w-4 text-[#3E92CC]" />
                      <a href="mailto:rahul@jsspwmys.org" className="text-[#3E92CC] hover:underline">rahul@jsspwmys.org</a>
                    </p>
                  </div>
                </div>

                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <div className="mb-4 flex justify-center">
                    <img src={facultyImg} alt="Faculty Member" className="h-32 w-32 rounded-full object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-2 text-center">Prof. Neha Gupta</h3>
                  <p className="text-[#D8315B] dark:text-[#ff7f9c] mb-4 text-center">Assistant Professor</p>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><span className="font-semibold">Educational Qualification:</span> M.Tech in Digital Electronics</p>
                    <p><span className="font-semibold">Area of Specialization:</span> Microprocessors, Microcontrollers</p>
                    <p className="flex items-center">
                      <Mail className="mr-2 h-4 w-4 text-[#3E92CC]" />
                      <a href="mailto:neha@jsspwmys.org" className="text-[#3E92CC] hover:underline">neha@jsspwmys.org</a>
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
                  <img src={buildingImg} alt="Electronics Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src={buildingImg} alt="Electronics Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src={buildingImg} alt="Electronics Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src={buildingImg} alt="Electronics Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src={buildingImg} alt="Electronics Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src={buildingImg} alt="Electronics Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
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
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Technical Symposium</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Annual technical symposium featuring paper presentations, circuit design contests, and technical quizzes.</p>
                  <a href="#" className="inline-flex items-center text-[#3E92CC] hover:text-[#0A2463]">
                    <Download className="mr-2 h-4 w-4" />
                    Download Symposium Brochure (PDF)
                  </a>
                </div>
                
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">IoT Workshops</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Regular hands-on workshops on Internet of Things technologies and applications.</p>
                  <a href="#" className="inline-flex items-center text-[#3E92CC] hover:text-[#0A2463]">
                    <Download className="mr-2 h-4 w-4" />
                    Download Workshop Details (PDF)
                  </a>
                </div>
                
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Industry Visits</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Regular visits to electronics manufacturing units and communication companies.</p>
                  <a href="#" className="inline-flex items-center text-[#3E92CC] hover:text-[#0A2463]">
                    <Download className="mr-2 h-4 w-4" />
                    Download Visit Reports (PDF)
                  </a>
                </div>
                
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Project Exhibition</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Annual exhibition showcasing innovative student projects in electronics and communication.</p>
                  <a href="#" className="inline-flex items-center text-[#3E92CC] hover:text-[#0A2463]">
                    <Download className="mr-2 h-4 w-4" />
                    Download Exhibition Catalogue (PDF)
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
                      <p className="font-semibold text-[#0A2463] dark:text-white">Dr. Priya Sharma</p>
                      <p className="text-gray-700 dark:text-gray-300">HOD, Electronics & Communication Engineering</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="mr-3 h-5 w-5 text-[#3E92CC]" />
                    <a href="tel:9876543212" className="text-gray-700 dark:text-gray-300 hover:text-[#3E92CC]">9876543212</a>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="mr-3 h-5 w-5 text-[#3E92CC]" />
                    <a href="mailto:ece@jsspwmys.org" className="text-gray-700 dark:text-gray-300 hover:text-[#3E92CC]">ece@jsspwmys.org</a>
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
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Electronics & Communication Engineering Diploma Program Syllabus</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">Access the complete syllabus for the Electronics & Communication Engineering Diploma Program.</p>
                
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

export default ElectronicsCommunication;