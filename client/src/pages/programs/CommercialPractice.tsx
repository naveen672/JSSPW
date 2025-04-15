import { ArrowLeft, Download, Phone, Mail, User, BookOpen, Building, Image, CalendarClock, FileText } from "lucide-react";
import { useState } from "react";
import buildingImg from "../../assets/bg3.jpg";
import facultyImg from "../../assets/prin.jpg";

// Tab interface
type TabType = 'about' | 'facilities' | 'faculty' | 'gallery' | 'activities' | 'contact' | 'syllabus';

const CommercialPractice = () => {
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
          <h1 className="text-3xl font-bold text-[#0A2463] dark:text-white md:text-4xl">Commercial Practice</h1>
        </div>
        
        {/* Featured Image */}
        <div className="mb-10 overflow-hidden rounded-lg shadow-lg">
          <img 
            src={buildingImg} 
            alt="Commercial Practice Department" 
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
                <h2 className="text-2xl font-bold text-[#0A2463] dark:text-white mb-4">About the Commercial Practice Program</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The Commercial Practice program at JSS Polytechnic for Women provides comprehensive education in commercial and business practices. The program is designed to equip students with essential skills needed for various administrative and commercial roles.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Vision</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  To develop globally competent commercial professionals with strong ethical values who contribute significantly to the business world and society.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Mission</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Providing high-quality education in commercial practices that meets industry standards.</li>
                  <li>Fostering an environment of continuous learning and professional development.</li>
                  <li>Equipping students with practical skills through hands-on training and industry exposure.</li>
                  <li>Promoting ethical business practices and social responsibility.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Program Educational Objectives</h3>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li>
                    <span className="font-semibold">PEO - 1:</span> To provide students with a strong foundation in commercial concepts and practices.
                  </li>
                  <li>
                    <span className="font-semibold">PEO - 2:</span> To develop practical skills in accounting, finance, and business administration.
                  </li>
                  <li>
                    <span className="font-semibold">PEO - 3:</span> To nurture entrepreneurial mindset and problem-solving abilities.
                  </li>
                  <li>
                    <span className="font-semibold">PEO - 4:</span> To instill professional ethics and values essential for a successful career in commerce.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Program Outcomes</h3>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li>
                    <span className="font-semibold">PO - 1: Knowledge Application:</span> Apply commercial and business principles to solve real-world problems.
                  </li>
                  <li>
                    <span className="font-semibold">PO - 2: Technical Skills:</span> Demonstrate proficiency in accounting, business communication, and office management.
                  </li>
                  <li>
                    <span className="font-semibold">PO - 3: Analysis and Evaluation:</span> Analyze business scenarios and evaluate appropriate solutions.
                  </li>
                  <li>
                    <span className="font-semibold">PO - 4: Modern Tools:</span> Use contemporary software and tools relevant to commercial practices.
                  </li>
                  <li>
                    <span className="font-semibold">PO - 5: Professional Ethics:</span> Understand and apply ethical principles in business contexts.
                  </li>
                  <li>
                    <span className="font-semibold">PO - 6: Communication:</span> Communicate effectively in professional environments.
                  </li>
                  <li>
                    <span className="font-semibold">PO - 7: Life-long learning:</span> Engage in continuous learning to adapt to changing business landscapes.
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
                  <h4 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-3">Computer Lab</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Modern computers with latest software</li>
                    <li>Internet connectivity for research</li>
                    <li>Accounting and business management software</li>
                    <li>Comfortable workstations for students</li>
                  </ul>
                </div>
                
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h4 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-3">Library Resources</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Extensive collection of business and commerce books</li>
                    <li>Digital resources and e-journals</li>
                    <li>Business magazines and periodicals</li>
                    <li>Study area for individual and group work</li>
                  </ul>
                </div>
                
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h4 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-3">Business Simulation Lab</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Mock office setup for practical training</li>
                    <li>Business simulation software</li>
                    <li>Financial market simulation tools</li>
                    <li>Presentation equipment</li>
                  </ul>
                </div>
                
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h4 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-3">Additional Facilities</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Seminar hall for guest lectures</li>
                    <li>Career guidance cell</li>
                    <li>Industry interaction center</li>
                    <li>Entrepreneurship development cell</li>
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
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-2 text-center">Dr. Rajesh Kumar</h3>
                  <p className="text-[#D8315B] dark:text-[#ff7f9c] mb-4 text-center">Head of Department</p>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><span className="font-semibold">Educational Qualification:</span> Ph.D. in Commerce</p>
                    <p><span className="font-semibold">Area of Specialization:</span> Finance and Accounting</p>
                    <p className="flex items-center">
                      <Mail className="mr-2 h-4 w-4 text-[#3E92CC]" />
                      <a href="mailto:rajesh@jsspwmys.org" className="text-[#3E92CC] hover:underline">rajesh@jsspwmys.org</a>
                    </p>
                  </div>
                </div>

                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <div className="mb-4 flex justify-center">
                    <img src={facultyImg} alt="Faculty Member" className="h-32 w-32 rounded-full object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-2 text-center">Prof. Meena Sharma</h3>
                  <p className="text-[#D8315B] dark:text-[#ff7f9c] mb-4 text-center">Associate Professor</p>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><span className="font-semibold">Educational Qualification:</span> M.Com, MBA</p>
                    <p><span className="font-semibold">Area of Specialization:</span> Business Administration</p>
                    <p className="flex items-center">
                      <Mail className="mr-2 h-4 w-4 text-[#3E92CC]" />
                      <a href="mailto:meena@jsspwmys.org" className="text-[#3E92CC] hover:underline">meena@jsspwmys.org</a>
                    </p>
                  </div>
                </div>

                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <div className="mb-4 flex justify-center">
                    <img src={facultyImg} alt="Faculty Member" className="h-32 w-32 rounded-full object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-2 text-center">Prof. Sanjay Patel</h3>
                  <p className="text-[#D8315B] dark:text-[#ff7f9c] mb-4 text-center">Assistant Professor</p>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><span className="font-semibold">Educational Qualification:</span> M.Com, CA</p>
                    <p><span className="font-semibold">Area of Specialization:</span> Taxation and Auditing</p>
                    <p className="flex items-center">
                      <Mail className="mr-2 h-4 w-4 text-[#3E92CC]" />
                      <a href="mailto:sanjay@jsspwmys.org" className="text-[#3E92CC] hover:underline">sanjay@jsspwmys.org</a>
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
                  <img src={buildingImg} alt="Commercial Practice Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src={buildingImg} alt="Commercial Practice Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src={buildingImg} alt="Commercial Practice Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src={buildingImg} alt="Commercial Practice Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src={buildingImg} alt="Commercial Practice Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src={buildingImg} alt="Commercial Practice Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
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
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Business Workshop</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Regular workshops on business skills, entrepreneurship, and financial literacy.</p>
                  <a href="#" className="inline-flex items-center text-[#3E92CC] hover:text-[#0A2463]">
                    <Download className="mr-2 h-4 w-4" />
                    Download Event Details (PDF)
                  </a>
                </div>
                
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Industry Visits</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Regular visits to companies and businesses to gain practical insights.</p>
                  <a href="#" className="inline-flex items-center text-[#3E92CC] hover:text-[#0A2463]">
                    <Download className="mr-2 h-4 w-4" />
                    Download Visit Schedule (PDF)
                  </a>
                </div>
                
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Business Competitions</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Annual business plan and case study competitions to develop problem-solving skills.</p>
                  <a href="#" className="inline-flex items-center text-[#3E92CC] hover:text-[#0A2463]">
                    <Download className="mr-2 h-4 w-4" />
                    Download Competition Rules (PDF)
                  </a>
                </div>
                
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Guest Lectures</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Regular lectures by industry experts and business leaders.</p>
                  <a href="#" className="inline-flex items-center text-[#3E92CC] hover:text-[#0A2463]">
                    <Download className="mr-2 h-4 w-4" />
                    Download Lecture Series (PDF)
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
                      <p className="font-semibold text-[#0A2463] dark:text-white">Dr. Rajesh Kumar</p>
                      <p className="text-gray-700 dark:text-gray-300">HOD, Commercial Practice Department</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="mr-3 h-5 w-5 text-[#3E92CC]" />
                    <a href="tel:9876543210" className="text-gray-700 dark:text-gray-300 hover:text-[#3E92CC]">9876543210</a>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="mr-3 h-5 w-5 text-[#3E92CC]" />
                    <a href="mailto:commercialpractice@jsspwmys.org" className="text-gray-700 dark:text-gray-300 hover:text-[#3E92CC]">commercialpractice@jsspwmys.org</a>
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
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Commercial Practice Diploma Program Syllabus</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">Access the complete syllabus for the Commercial Practice Diploma Program.</p>
                
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

export default CommercialPractice;