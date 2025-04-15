import { useState } from "react";
import { ArrowLeft, Mail, Download } from "lucide-react";

const facultyImg = "/dhananjaya.jpg"; // default faculty image
const buildingImg = "/bg2.jpg"; // default building image

// Define the tab types
type TabType = 'about' | 'facilities' | 'faculty' | 'gallery' | 'activities' | 'contact' | 'syllabus';

const ElectronicsInstrumentation = () => {
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
          <h1 className="text-3xl font-bold text-[#0A2463] dark:text-white md:text-4xl">Electronics Instrumentation and Control Engineering</h1>
        </div>
        
        {/* Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap border-b border-gray-200 dark:border-gray-700">
            <button
              className={`inline-block p-4 ${
                activeTab === 'about'
                  ? 'text-[#D8315B] border-b-2 border-[#D8315B] dark:text-[#ff7f9c] dark:border-[#ff7f9c]'
                  : 'border-b-2 border-transparent hover:text-[#D8315B] hover:border-[#D8315B] dark:hover:text-[#ff7f9c] dark:hover:border-[#ff7f9c]'
              }`}
              onClick={() => setActiveTab('about')}
            >
              <span className="text-gray-900 dark:text-white">
                About
              </span>
            </button>
            <button
              className={`inline-block p-4 ${
                activeTab === 'facilities'
                  ? 'text-[#D8315B] border-b-2 border-[#D8315B] dark:text-[#ff7f9c] dark:border-[#ff7f9c]'
                  : 'border-b-2 border-transparent hover:text-[#D8315B] hover:border-[#D8315B] dark:hover:text-[#ff7f9c] dark:hover:border-[#ff7f9c]'
              }`}
              onClick={() => setActiveTab('facilities')}
            >
              <span className="text-gray-900 dark:text-white">
                Facilities
              </span>
            </button>
            <button
              className={`inline-block p-4 ${
                activeTab === 'faculty'
                  ? 'text-[#D8315B] border-b-2 border-[#D8315B] dark:text-[#ff7f9c] dark:border-[#ff7f9c]'
                  : 'border-b-2 border-transparent hover:text-[#D8315B] hover:border-[#D8315B] dark:hover:text-[#ff7f9c] dark:hover:border-[#ff7f9c]'
              }`}
              onClick={() => setActiveTab('faculty')}
            >
              <span className="text-gray-900 dark:text-white">
                Faculty
              </span>
            </button>
            <button
              className={`inline-block p-4 ${
                activeTab === 'gallery'
                  ? 'text-[#D8315B] border-b-2 border-[#D8315B] dark:text-[#ff7f9c] dark:border-[#ff7f9c]'
                  : 'border-b-2 border-transparent hover:text-[#D8315B] hover:border-[#D8315B] dark:hover:text-[#ff7f9c] dark:hover:border-[#ff7f9c]'
              }`}
              onClick={() => setActiveTab('gallery')}
            >
              <span className="text-gray-900 dark:text-white">
                Gallery
              </span>
            </button>
            <button
              className={`inline-block p-4 ${
                activeTab === 'activities'
                  ? 'text-[#D8315B] border-b-2 border-[#D8315B] dark:text-[#ff7f9c] dark:border-[#ff7f9c]'
                  : 'border-b-2 border-transparent hover:text-[#D8315B] hover:border-[#D8315B] dark:hover:text-[#ff7f9c] dark:hover:border-[#ff7f9c]'
              }`}
              onClick={() => setActiveTab('activities')}
            >
              <span className="text-gray-900 dark:text-white">
                Activities
              </span>
            </button>
            <button
              className={`inline-block p-4 ${
                activeTab === 'contact'
                  ? 'text-[#D8315B] border-b-2 border-[#D8315B] dark:text-[#ff7f9c] dark:border-[#ff7f9c]'
                  : 'border-b-2 border-transparent hover:text-[#D8315B] hover:border-[#D8315B] dark:hover:text-[#ff7f9c] dark:hover:border-[#ff7f9c]'
              }`}
              onClick={() => setActiveTab('contact')}
            >
              <span className="text-gray-900 dark:text-white">
                Contact
              </span>
            </button>
            <button
              className={`inline-block p-4 ${
                activeTab === 'syllabus'
                  ? 'text-[#D8315B] border-b-2 border-[#D8315B] dark:text-[#ff7f9c] dark:border-[#ff7f9c]'
                  : 'border-b-2 border-transparent hover:text-[#D8315B] hover:border-[#D8315B] dark:hover:text-[#ff7f9c] dark:hover:border-[#ff7f9c]'
              }`}
              onClick={() => setActiveTab('syllabus')}
            >
              <span className="text-gray-900 dark:text-white">
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
                <h2 className="text-2xl font-bold text-[#0A2463] dark:text-white mb-4">About the Electronics Instrumentation Program</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The Electronics Instrumentation program at JSS Polytechnic for Women focuses on providing students with a strong foundation in instrumentation principles, control systems, and automation techniques. Our curriculum combines theoretical knowledge with practical skills needed for industrial applications.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Students receive hands-on training with modern equipment and industry-standard software, preparing them for careers in process control, industrial automation, and measurement systems across various industries.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Vision</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  To be a center of excellence in electronics instrumentation education, creating technically proficient professionals who contribute to industrial advancement through innovation and precision.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Mission</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Providing quality education in instrumentation and control systems with industry-relevant curriculum.</li>
                  <li>Developing technical skills through hands-on training with modern equipment and software.</li>
                  <li>Fostering problem-solving abilities and analytical thinking in measurement and control applications.</li>
                  <li>Creating awareness about industrial automation and its importance in manufacturing sectors.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Program Educational Objectives</h3>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li>
                    <span className="font-semibold">PEO - 1:</span> To provide strong foundation in instrumentation principles and control system design.
                  </li>
                  <li>
                    <span className="font-semibold">PEO - 2:</span> To develop technical skills in calibration, testing, and troubleshooting of instrumentation systems.
                  </li>
                  <li>
                    <span className="font-semibold">PEO - 3:</span> To enhance problem-solving abilities for industrial automation challenges.
                  </li>
                  <li>
                    <span className="font-semibold">PEO - 4:</span> To instill professional ethics and teamwork essential for industrial environments.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Program Outcomes</h3>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li>
                    <span className="font-semibold">PO - 1: Instrumentation Knowledge:</span> Apply knowledge of sensors, transducers, and measurement systems to industrial applications.
                  </li>
                  <li>
                    <span className="font-semibold">PO - 2: Problem Analysis:</span> Identify and analyze instrumentation problems using technical knowledge and systematic approaches.
                  </li>
                  <li>
                    <span className="font-semibold">PO - 3: Design/Development:</span> Design instrumentation systems and control loops for specific industrial requirements.
                  </li>
                  <li>
                    <span className="font-semibold">PO - 4: Modern Tools:</span> Use industry-standard software and hardware for instrumentation system design and testing.
                  </li>
                  <li>
                    <span className="font-semibold">PO - 5: Professional Ethics:</span> Understand and apply ethical principles in instrumentation applications and industrial safety.
                  </li>
                  <li>
                    <span className="font-semibold">PO - 6: Teamwork:</span> Function effectively in multidisciplinary teams in industrial settings.
                  </li>
                  <li>
                    <span className="font-semibold">PO - 7: Life-long learning:</span> Engage in continuous learning to adapt to evolving technologies in instrumentation and control systems.
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
                  <h4 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-3">Instrumentation Lab</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Sensors and transducers training kits</li>
                    <li>Calibration equipment</li>
                    <li>Industrial measurement devices</li>
                    <li>Process control trainers</li>
                  </ul>
                </div>
                
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h4 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-3">Control Systems Lab</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>PLC training modules</li>
                    <li>SCADA systems</li>
                    <li>Feedback control systems</li>
                    <li>Controller tuning equipment</li>
                  </ul>
                </div>
                
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h4 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-3">Process Simulation Lab</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Process simulation software</li>
                    <li>Industrial process models</li>
                    <li>Control loop simulators</li>
                    <li>Virtual instrumentation tools</li>
                  </ul>
                </div>
                
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h4 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-3">Industrial Automation Lab</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Industrial IoT devices</li>
                    <li>Pneumatic and hydraulic systems</li>
                    <li>Industrial networking equipment</li>
                    <li>Energy management systems</li>
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
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-2 text-center">Prof. Mohan Kumar</h3>
                  <p className="text-[#D8315B] dark:text-[#ff7f9c] mb-4 text-center">Head of Department</p>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><span className="font-semibold">Educational Qualification:</span> M.Tech in Instrumentation</p>
                    <p><span className="font-semibold">Area of Specialization:</span> Process Control, Industrial Automation</p>
                    <p className="flex items-center">
                      <Mail className="mr-2 h-4 w-4 text-[#3E92CC]" />
                      <a href="mailto:mohan@jsspwmys.org" className="text-[#3E92CC] hover:underline">mohan@jsspwmys.org</a>
                    </p>
                  </div>
                </div>

                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <div className="mb-4 flex justify-center">
                    <img src={facultyImg} alt="Faculty Member" className="h-32 w-32 rounded-full object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-2 text-center">Prof. Lakshmi Devi</h3>
                  <p className="text-[#D8315B] dark:text-[#ff7f9c] mb-4 text-center">Associate Professor</p>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><span className="font-semibold">Educational Qualification:</span> M.Tech in Control Systems</p>
                    <p><span className="font-semibold">Area of Specialization:</span> PLC Programming, SCADA Systems</p>
                    <p className="flex items-center">
                      <Mail className="mr-2 h-4 w-4 text-[#3E92CC]" />
                      <a href="mailto:lakshmi@jsspwmys.org" className="text-[#3E92CC] hover:underline">lakshmi@jsspwmys.org</a>
                    </p>
                  </div>
                </div>

                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <div className="mb-4 flex justify-center">
                    <img src={facultyImg} alt="Faculty Member" className="h-32 w-32 rounded-full object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-2 text-center">Prof. Ajay Prakash</h3>
                  <p className="text-[#D8315B] dark:text-[#ff7f9c] mb-4 text-center">Assistant Professor</p>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><span className="font-semibold">Educational Qualification:</span> M.Tech in Industrial Electronics</p>
                    <p><span className="font-semibold">Area of Specialization:</span> Sensors and Transducers, Signal Conditioning</p>
                    <p className="flex items-center">
                      <Mail className="mr-2 h-4 w-4 text-[#3E92CC]" />
                      <a href="mailto:ajay@jsspwmys.org" className="text-[#3E92CC] hover:underline">ajay@jsspwmys.org</a>
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
                  <img src={buildingImg} alt="Instrumentation Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src={buildingImg} alt="Instrumentation Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src={buildingImg} alt="Instrumentation Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src={buildingImg} alt="Instrumentation Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src={buildingImg} alt="Instrumentation Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src={buildingImg} alt="Instrumentation Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
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
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Industrial Visits</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Regular visits to process industries and manufacturing plants to gain practical exposure to industrial instrumentation systems.</p>
                  <a href="#" className="inline-flex items-center text-[#3E92CC] hover:text-[#0A2463]">
                    <Download className="mr-2 h-4 w-4" />
                    Download Visit Schedule (PDF)
                  </a>
                </div>
                
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Technical Workshops</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Hands-on workshops on PLC programming, SCADA systems, and industrial automation technologies.</p>
                  <a href="#" className="inline-flex items-center text-[#3E92CC] hover:text-[#0A2463]">
                    <Download className="mr-2 h-4 w-4" />
                    Download Workshop Details (PDF)
                  </a>
                </div>
                
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Project Competitions</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Annual project competition where students showcase innovative instrumentation and control systems they have developed.</p>
                  <a href="#" className="inline-flex items-center text-[#3E92CC] hover:text-[#0A2463]">
                    <Download className="mr-2 h-4 w-4" />
                    Download Competition Rules (PDF)
                  </a>
                </div>
                
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Guest Lectures</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Industry experts and professionals are invited to share insights about the latest trends in instrumentation and control engineering.</p>
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
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-4">Department Contact Information</h3>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p><span className="font-semibold">Department:</span> Electronics Instrumentation and Control Engineering</p>
                    <p><span className="font-semibold">Email:</span> instrumentation@jsspwmys.org</p>
                    <p><span className="font-semibold">Phone:</span> +91-821-2548234</p>
                    <p><span className="font-semibold">Office Hours:</span> Monday to Friday, 9:00 AM to 5:00 PM</p>
                    <p><span className="font-semibold">Location:</span> Second Floor, Main Building, JSS Polytechnic for Women</p>
                  </div>
                </div>
                
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-4">Contact the HOD</h3>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p><span className="font-semibold">Name:</span> Prof. Mohan Kumar</p>
                    <p><span className="font-semibold">Email:</span> mohan@jsspwmys.org</p>
                    <p><span className="font-semibold">Phone:</span> +91-821-2548235</p>
                    <p><span className="font-semibold">Office:</span> Room 204, Instrumentation Department</p>
                    <p><span className="font-semibold">Office Hours:</span> Monday to Friday, 10:00 AM to 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Syllabus Tab */}
          {activeTab === 'syllabus' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#0A2463] dark:text-white mb-4">Syllabus</h2>
              
              <div className="space-y-6">
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-4">Diploma in Electronics Instrumentation and Control Engineering</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">Below is the semester-wise syllabus for the Diploma program. Click on the links to download detailed syllabus for each semester.</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-medium text-[#0A2463] dark:text-white mb-2">First Year (Semesters 1 & 2)</h4>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <li className="flex items-center">
                          <Download className="mr-2 h-4 w-4 text-[#3E92CC]" />
                          <a href="#" className="text-[#3E92CC] hover:underline">1st Semester Syllabus (PDF)</a>
                        </li>
                        <li className="flex items-center">
                          <Download className="mr-2 h-4 w-4 text-[#3E92CC]" />
                          <a href="#" className="text-[#3E92CC] hover:underline">2nd Semester Syllabus (PDF)</a>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium text-[#0A2463] dark:text-white mb-2">Second Year (Semesters 3 & 4)</h4>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <li className="flex items-center">
                          <Download className="mr-2 h-4 w-4 text-[#3E92CC]" />
                          <a href="#" className="text-[#3E92CC] hover:underline">3rd Semester Syllabus (PDF)</a>
                        </li>
                        <li className="flex items-center">
                          <Download className="mr-2 h-4 w-4 text-[#3E92CC]" />
                          <a href="#" className="text-[#3E92CC] hover:underline">4th Semester Syllabus (PDF)</a>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium text-[#0A2463] dark:text-white mb-2">Third Year (Semesters 5 & 6)</h4>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <li className="flex items-center">
                          <Download className="mr-2 h-4 w-4 text-[#3E92CC]" />
                          <a href="#" className="text-[#3E92CC] hover:underline">5th Semester Syllabus (PDF)</a>
                        </li>
                        <li className="flex items-center">
                          <Download className="mr-2 h-4 w-4 text-[#3E92CC]" />
                          <a href="#" className="text-[#3E92CC] hover:underline">6th Semester Syllabus (PDF)</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-4">Key Subjects Covered</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="text-lg font-medium text-[#0A2463] dark:text-white mb-2">Core Courses</h4>
                      <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                        <li>Transducers and Measurement Systems</li>
                        <li>Process Control Fundamentals</li>
                        <li>Industrial Automation</li>
                        <li>Control System Design</li>
                        <li>Signal Conditioning and Processing</li>
                        <li>Programmable Logic Controllers</li>
                        <li>SCADA Systems</li>
                        <li>Process Instrumentation</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium text-[#0A2463] dark:text-white mb-2">Elective Courses</h4>
                      <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                        <li>Industrial IoT</li>
                        <li>Advanced Control Systems</li>
                        <li>Embedded System Design</li>
                        <li>Industrial Communication Protocols</li>
                        <li>Biomedical Instrumentation</li>
                        <li>Energy Management Systems</li>
                        <li>Instrumentation Project Management</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ElectronicsInstrumentation;