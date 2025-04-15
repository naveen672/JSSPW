import { ArrowLeft, Download, Phone, Mail, User, BookOpen, Building, Image, CalendarClock, FileText } from "lucide-react";
import { useState } from "react";
import buildingImg from "../../assets/bg1.jpg";
import facultyImg from "../../assets/prin.jpg";

// Tab interface
type TabType = 'about' | 'facilities' | 'faculty' | 'gallery' | 'activities' | 'contact' | 'syllabus';

const ComputerScience = () => {
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
          <h1 className="text-3xl font-bold text-[#0A2463] dark:text-white md:text-4xl">Computer Science & Engineering</h1>
        </div>
        
        {/* Featured Image */}
        <div className="mb-10 overflow-hidden rounded-lg shadow-lg">
          <img 
            src={buildingImg} 
            alt="Computer Science Department" 
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
                <h2 className="text-2xl font-bold text-[#0A2463] dark:text-white mb-4">About the Computer Science Program</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The Computer Science & Engineering program at JSS Polytechnic for Women provides comprehensive education in computing fundamentals, programming, and software development. The program equips students with technical skills needed to excel in the rapidly evolving IT industry.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  With a blend of theoretical knowledge and practical training, our program prepares students for careers in software development, web design, database administration, and various other IT domains.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Vision</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  To foster innovation and excellence in computer science education, producing skilled professionals who contribute to technological advancements and societal progress.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Mission</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Providing high-quality education in computer science that meets industry standards and future needs.</li>
                  <li>Developing technical and problem-solving skills through hands-on training and practical projects.</li>
                  <li>Fostering innovation and creativity in software development and computing solutions.</li>
                  <li>Encouraging ethical practices and social responsibility in the application of technology.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Program Educational Objectives</h3>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li>
                    <span className="font-semibold">PEO - 1:</span> To provide a strong foundation in computer science fundamentals and programming.
                  </li>
                  <li>
                    <span className="font-semibold">PEO - 2:</span> To develop proficiency in software development and problem-solving skills.
                  </li>
                  <li>
                    <span className="font-semibold">PEO - 3:</span> To cultivate innovative thinking and adaptability to emerging technologies.
                  </li>
                  <li>
                    <span className="font-semibold">PEO - 4:</span> To instill professional ethics and teamwork essential for a successful career in IT.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Program Outcomes</h3>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li>
                    <span className="font-semibold">PO - 1: Computing Knowledge:</span> Apply knowledge of computing principles to solve technical problems.
                  </li>
                  <li>
                    <span className="font-semibold">PO - 2: Problem Analysis:</span> Identify and analyze complex computing problems with appropriate solution techniques.
                  </li>
                  <li>
                    <span className="font-semibold">PO - 3: Design/Development:</span> Design and develop software solutions for specific requirements.
                  </li>
                  <li>
                    <span className="font-semibold">PO - 4: Modern Tools:</span> Use modern programming languages, frameworks, and development environments.
                  </li>
                  <li>
                    <span className="font-semibold">PO - 5: Professional Ethics:</span> Understand and apply ethical principles in the computing profession.
                  </li>
                  <li>
                    <span className="font-semibold">PO - 6: Teamwork:</span> Function effectively in diverse teams and collaborative environments.
                  </li>
                  <li>
                    <span className="font-semibold">PO - 7: Life-long learning:</span> Engage in continuous learning to adapt to evolving technologies and computing paradigms.
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
                  <h4 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-3">Programming Lab</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>60 high-configuration computers with latest hardware</li>
                    <li>Development environments for C, C++, Java, Python</li>
                    <li>High-speed internet connectivity</li>
                    <li>LCD projector for demonstrations</li>
                  </ul>
                </div>
                
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h4 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-3">Web Development Lab</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Advanced web development tools and frameworks</li>
                    <li>Frontend and backend development environments</li>
                    <li>Web servers and testing environments</li>
                    <li>UI/UX design tools and resources</li>
                  </ul>
                </div>
                
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h4 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-3">Networking Lab</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Routers, switches, and networking equipment</li>
                    <li>Network simulation software</li>
                    <li>Security and penetration testing tools</li>
                    <li>Server administration environments</li>
                  </ul>
                </div>
                
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h4 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-3">Project Lab</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Dedicated space for student projects</li>
                    <li>IoT devices and components</li>
                    <li>Version control systems</li>
                    <li>Collaboration and project management tools</li>
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
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-2 text-center">Dr. Suresh Kumar</h3>
                  <p className="text-[#D8315B] dark:text-[#ff7f9c] mb-4 text-center">Head of Department</p>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><span className="font-semibold">Educational Qualification:</span> Ph.D. in Computer Science</p>
                    <p><span className="font-semibold">Area of Specialization:</span> Machine Learning, AI</p>
                    <p className="flex items-center">
                      <Mail className="mr-2 h-4 w-4 text-[#3E92CC]" />
                      <a href="mailto:suresh@jsspwmys.org" className="text-[#3E92CC] hover:underline">suresh@jsspwmys.org</a>
                    </p>
                  </div>
                </div>

                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <div className="mb-4 flex justify-center">
                    <img src={facultyImg} alt="Faculty Member" className="h-32 w-32 rounded-full object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-2 text-center">Prof. Anita Desai</h3>
                  <p className="text-[#D8315B] dark:text-[#ff7f9c] mb-4 text-center">Associate Professor</p>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><span className="font-semibold">Educational Qualification:</span> M.Tech in Computer Science</p>
                    <p><span className="font-semibold">Area of Specialization:</span> Database Systems, Web Technologies</p>
                    <p className="flex items-center">
                      <Mail className="mr-2 h-4 w-4 text-[#3E92CC]" />
                      <a href="mailto:anita@jsspwmys.org" className="text-[#3E92CC] hover:underline">anita@jsspwmys.org</a>
                    </p>
                  </div>
                </div>

                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <div className="mb-4 flex justify-center">
                    <img src={facultyImg} alt="Faculty Member" className="h-32 w-32 rounded-full object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-2 text-center">Prof. Ramesh Nair</h3>
                  <p className="text-[#D8315B] dark:text-[#ff7f9c] mb-4 text-center">Assistant Professor</p>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><span className="font-semibold">Educational Qualification:</span> M.Tech in Computer Engineering</p>
                    <p><span className="font-semibold">Area of Specialization:</span> Computer Networks, Cybersecurity</p>
                    <p className="flex items-center">
                      <Mail className="mr-2 h-4 w-4 text-[#3E92CC]" />
                      <a href="mailto:ramesh@jsspwmys.org" className="text-[#3E92CC] hover:underline">ramesh@jsspwmys.org</a>
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
                  <img src={buildingImg} alt="Computer Science Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src={buildingImg} alt="Computer Science Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src={buildingImg} alt="Computer Science Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src={buildingImg} alt="Computer Science Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src={buildingImg} alt="Computer Science Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src={buildingImg} alt="Computer Science Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
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
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Coding Competitions</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Regular coding contests and hackathons to enhance programming skills and problem-solving abilities.</p>
                  <a href="#" className="inline-flex items-center text-[#3E92CC] hover:text-[#0A2463]">
                    <Download className="mr-2 h-4 w-4" />
                    Download Competition Details (PDF)
                  </a>
                </div>
                
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Technical Workshops</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Hands-on workshops on emerging technologies like AI, cloud computing, and blockchain.</p>
                  <a href="#" className="inline-flex items-center text-[#3E92CC] hover:text-[#0A2463]">
                    <Download className="mr-2 h-4 w-4" />
                    Download Workshop Schedule (PDF)
                  </a>
                </div>
                
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Industry Visits</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Regular visits to IT companies and tech parks to gain practical insights into the industry.</p>
                  <a href="#" className="inline-flex items-center text-[#3E92CC] hover:text-[#0A2463]">
                    <Download className="mr-2 h-4 w-4" />
                    Download Visit Reports (PDF)
                  </a>
                </div>
                
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Project Exhibitions</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Annual exhibitions showcasing student projects and innovations in computer science.</p>
                  <a href="#" className="inline-flex items-center text-[#3E92CC] hover:text-[#0A2463]">
                    <Download className="mr-2 h-4 w-4" />
                    Download Exhibition Brochure (PDF)
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
                      <p className="font-semibold text-[#0A2463] dark:text-white">Dr. Suresh Kumar</p>
                      <p className="text-gray-700 dark:text-gray-300">HOD, Computer Science & Engineering</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="mr-3 h-5 w-5 text-[#3E92CC]" />
                    <a href="tel:9876543211" className="text-gray-700 dark:text-gray-300 hover:text-[#3E92CC]">9876543211</a>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="mr-3 h-5 w-5 text-[#3E92CC]" />
                    <a href="mailto:cse@jsspwmys.org" className="text-gray-700 dark:text-gray-300 hover:text-[#3E92CC]">cse@jsspwmys.org</a>
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
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Computer Science & Engineering Diploma Program Syllabus</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">Access the complete syllabus for the Computer Science & Engineering Diploma Program.</p>
                
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

export default ComputerScience;