import { useState } from 'react';
import { ArrowLeft, Download, Mail, User, BookOpen, Building, Image, CalendarClock, FileText, Plus, Minus } from 'lucide-react';
import buildingImg from "@assets/bg1.jpg";
import facultyImg from "@assets/prin.jpg";

type SectionType = 'about' | 'facilities' | 'faculty' | 'gallery' | 'activities' | 'contact' | 'syllabus';

const ComputerScience = () => {
  const [expandedSections, setExpandedSections] = useState<Set<SectionType>>(new Set());

  const toggleSection = (section: SectionType) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(section)) {
        newSet.delete(section);
      } else {
        newSet.add(section);
      }
      return newSet;
    });
  };

  const isSectionExpanded = (section: SectionType) => expandedSections.has(section);

  return (
    <div className="bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <div className="mb-8">
          <div className="mb-4">
            <a 
              href="/#programs" 
              className="inline-flex items-center text-[#0A2463] dark:text-blue-400 hover:text-[#D8315B]"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back
            </a>
          </div>
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
        
        {/* Collapsible Sections */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md divide-y divide-gray-200 dark:divide-gray-700">
          {/* About Section */}
          <div className="border-b border-gray-200 dark:border-gray-700">
            <button
              className="w-full flex items-center justify-between p-5 text-left"
              onClick={() => toggleSection('about')}
            >
              <h2 className="text-2xl font-semibold text-[#0A2463] dark:text-white">About</h2>
              {isSectionExpanded('about') ? (
                <Minus className="h-5 w-5 text-[#D8315B] dark:text-[#ff7f9c]" />
              ) : (
                <Plus className="h-5 w-5 text-[#0A2463] dark:text-white" />
              )}
            </button>
            
            {isSectionExpanded('about') && (
              <div className="px-5 pb-5 pt-1 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-4">About the Computer Science & Engineering Department</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    The Department of Computer Science & Engineering was established in the year 1985 with an intake of 25 students. Currently, the intake capacity has increased to 60 students. The department provides comprehensive education in computer science fundamentals, programming languages, database management, networking, software engineering, and emerging technologies.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Our curriculum blends theoretical knowledge with practical labs and projects to prepare students for successful careers in the IT industry. We emphasize problem-solving skills, analytical thinking, and hands-on experience with contemporary technologies used in the industry.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Vision</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    To empower young women to become technically competent, globally competitive, ethically strong computer science professionals who contribute to the advancement of society and industry.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Mission</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>To provide quality technical education in computer science with emphasis on practical skills and theoretical foundations.</li>
                    <li>To foster a learning environment that encourages innovation, critical thinking, and problem-solving abilities.</li>
                    <li>To develop professionals who can adapt to rapidly evolving technology landscapes.</li>
                    <li>To instill ethical values and social responsibility among students.</li>
                    <li>To establish strong industry connections for enhancing employability and exposure to real-world challenges.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Programme Educational Objectives</h3>
                  <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                    <li>
                      <span className="font-semibold">PEO - 1:</span> To provide students with strong foundation in computer science fundamentals and programming skills.
                    </li>
                    <li>
                      <span className="font-semibold">PEO - 2:</span> To develop technical competence in designing and implementing software solutions for real-world problems.
                    </li>
                    <li>
                      <span className="font-semibold">PEO - 3:</span> To equip students with professional skills required for successful careers in the IT industry or higher education.
                    </li>
                    <li>
                      <span className="font-semibold">PEO - 4:</span> To nurture innovation, teamwork, and ethical practices in computing.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Programme Outcomes</h3>
                  <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                    <li>
                      <span className="font-semibold">PO - 1: Programming Skills:</span> Ability to design and develop computer programs for solving complex problems.
                    </li>
                    <li>
                      <span className="font-semibold">PO - 2: Problem Analysis:</span> Ability to analyze problems and identify computing requirements appropriate to their solutions.
                    </li>
                    <li>
                      <span className="font-semibold">PO - 3: Design/Development of Solutions:</span> Ability to design and develop software systems that meet specified needs.
                    </li>
                    <li>
                      <span className="font-semibold">PO - 4: Modern Tool Usage:</span> Ability to use modern computing tools and techniques necessary for computing practice.
                    </li>
                    <li>
                      <span className="font-semibold">PO - 5: Computing Ethics:</span> Understanding of professional and ethical responsibilities in computing.
                    </li>
                    <li>
                      <span className="font-semibold">PO - 6: Teamwork and Project Management:</span> Ability to work as a team member or leader to manage projects and communicate effectively.
                    </li>
                    <li>
                      <span className="font-semibold">PO - 7: Lifelong Learning:</span> Recognition of the need for and ability to engage in lifelong learning in the context of technological changes.
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Facilities Section */}
          <div className="border-b border-gray-200 dark:border-gray-700">
            <button
              className="w-full flex items-center justify-between p-5 text-left"
              onClick={() => toggleSection('facilities')}
            >
              <h2 className="text-2xl font-semibold text-[#0A2463] dark:text-white">Facilities</h2>
              {isSectionExpanded('facilities') ? (
                <Minus className="h-5 w-5 text-[#D8315B] dark:text-[#ff7f9c]" />
              ) : (
                <Plus className="h-5 w-5 text-[#0A2463] dark:text-white" />
              )}
            </button>
            
            {isSectionExpanded('facilities') && (
              <div className="px-5 pb-5 pt-1 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <h4 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-3">Computer Labs</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>3 fully equipped computer laboratories with 60 systems</li>
                      <li>High-speed internet connectivity</li>
                      <li>Latest hardware and software configurations</li>
                      <li>Regular upgrades to maintain industry standards</li>
                    </ul>
                  </div>
                  
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <h4 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-3">Software & Programming Tools</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>Programming environments for C, C++, Java, Python</li>
                      <li>Database systems (MySQL, PostgreSQL, Oracle)</li>
                      <li>Web development tools and frameworks</li>
                      <li>Development IDEs and text editors</li>
                    </ul>
                  </div>
                  
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <h4 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-3">Networking Lab</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>Networking equipment for practical training</li>
                      <li>Routers, switches, and network simulation tools</li>
                      <li>Network security tools and firewalls</li>
                      <li>Wireshark and other network analysis software</li>
                    </ul>
                  </div>
                  
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <h4 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-3">Digital Learning Resources</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>Digital library with e-books and journals</li>
                      <li>Video tutorials and online learning materials</li>
                      <li>Access to programming and development forums</li>
                      <li>Industry certifications preparation resources</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Faculty Section */}
          <div className="border-b border-gray-200 dark:border-gray-700">
            <button
              className="w-full flex items-center justify-between p-5 text-left"
              onClick={() => toggleSection('faculty')}
            >
              <h2 className="text-2xl font-semibold text-[#0A2463] dark:text-white">Faculty</h2>
              {isSectionExpanded('faculty') ? (
                <Minus className="h-5 w-5 text-[#D8315B] dark:text-[#ff7f9c]" />
              ) : (
                <Plus className="h-5 w-5 text-[#0A2463] dark:text-white" />
              )}
            </button>
            
            {isSectionExpanded('faculty') && (
              <div className="px-5 pb-5 pt-1 space-y-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <div className="mb-4 flex justify-center">
                      <img src={facultyImg} alt="Faculty Member" className="h-32 w-32 rounded-full object-cover" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-2 text-center">Prof. Anitha K</h3>
                    <p className="text-[#D8315B] dark:text-[#ff7f9c] mb-4 text-center">Head of Department</p>
                    <div className="space-y-2 text-gray-700 dark:text-gray-300">
                      <p><span className="font-semibold">Educational Qualification:</span> M.Tech in Computer Science</p>
                      <p><span className="font-semibold">Area of Specialization:</span> Database Systems, Software Engineering</p>
                      <p className="flex items-center">
                        <Mail className="mr-2 h-4 w-4 text-[#3E92CC]" />
                        <a href="mailto:anitha@jsspwmys.org" className="text-[#3E92CC] hover:underline">anitha@jsspwmys.org</a>
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <div className="mb-4 flex justify-center">
                      <img src={facultyImg} alt="Faculty Member" className="h-32 w-32 rounded-full object-cover" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-2 text-center">Prof. Deepa R</h3>
                    <p className="text-[#D8315B] dark:text-[#ff7f9c] mb-4 text-center">Assistant Professor</p>
                    <div className="space-y-2 text-gray-700 dark:text-gray-300">
                      <p><span className="font-semibold">Educational Qualification:</span> M.Tech in Computer Networks</p>
                      <p><span className="font-semibold">Area of Specialization:</span> Networking, Cybersecurity</p>
                      <p className="flex items-center">
                        <Mail className="mr-2 h-4 w-4 text-[#3E92CC]" />
                        <a href="mailto:deepa@jsspwmys.org" className="text-[#3E92CC] hover:underline">deepa@jsspwmys.org</a>
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <div className="mb-4 flex justify-center">
                      <img src={facultyImg} alt="Faculty Member" className="h-32 w-32 rounded-full object-cover" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-2 text-center">Prof. Ramesh S</h3>
                    <p className="text-[#D8315B] dark:text-[#ff7f9c] mb-4 text-center">Assistant Professor</p>
                    <div className="space-y-2 text-gray-700 dark:text-gray-300">
                      <p><span className="font-semibold">Educational Qualification:</span> M.E in Software Engineering</p>
                      <p><span className="font-semibold">Area of Specialization:</span> Programming Languages, Algorithms</p>
                      <p className="flex items-center">
                        <Mail className="mr-2 h-4 w-4 text-[#3E92CC]" />
                        <a href="mailto:ramesh@jsspwmys.org" className="text-[#3E92CC] hover:underline">ramesh@jsspwmys.org</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Gallery Section */}
          <div className="border-b border-gray-200 dark:border-gray-700">
            <button
              className="w-full flex items-center justify-between p-5 text-left"
              onClick={() => toggleSection('gallery')}
            >
              <h2 className="text-2xl font-semibold text-[#0A2463] dark:text-white">Gallery</h2>
              {isSectionExpanded('gallery') ? (
                <Minus className="h-5 w-5 text-[#D8315B] dark:text-[#ff7f9c]" />
              ) : (
                <Plus className="h-5 w-5 text-[#0A2463] dark:text-white" />
              )}
            </button>
            
            {isSectionExpanded('gallery') && (
              <div className="px-5 pb-5 pt-1 space-y-6">
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                  {/* Using the building image as placeholder for the gallery */}
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img src={buildingImg} alt="Computer Lab" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img src={buildingImg} alt="Programming Competition" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img src={buildingImg} alt="Student Projects" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img src={buildingImg} alt="Industry Visit" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Activities Section */}
          <div className="border-b border-gray-200 dark:border-gray-700">
            <button
              className="w-full flex items-center justify-between p-5 text-left"
              onClick={() => toggleSection('activities')}
            >
              <h2 className="text-2xl font-semibold text-[#0A2463] dark:text-white">Activities</h2>
              {isSectionExpanded('activities') ? (
                <Minus className="h-5 w-5 text-[#D8315B] dark:text-[#ff7f9c]" />
              ) : (
                <Plus className="h-5 w-5 text-[#0A2463] dark:text-white" />
              )}
            </button>
            
            {isSectionExpanded('activities') && (
              <div className="px-5 pb-5 pt-1 space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Technical Workshops</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">Regular workshops on emerging technologies like cloud computing, artificial intelligence, machine learning, and cybersecurity to enhance students' technical skills.</p>
                  </div>
                  
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Coding Competitions</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">Annual coding competitions, hackathons, and debugging challenges to promote algorithmic thinking and problem-solving abilities among students.</p>
                  </div>
                  
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Industry Visits</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">Regular visits to leading IT companies and software development organizations to give students exposure to professional work environments and industry practices.</p>
                  </div>
                  
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Guest Lectures</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">Series of guest lectures by industry professionals and academic experts to provide insights on current trends and developments in the IT sector.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Contact Section */}
          <div className="border-b border-gray-200 dark:border-gray-700">
            <button
              className="w-full flex items-center justify-between p-5 text-left"
              onClick={() => toggleSection('contact')}
            >
              <h2 className="text-2xl font-semibold text-[#0A2463] dark:text-white">Contact</h2>
              {isSectionExpanded('contact') ? (
                <Minus className="h-5 w-5 text-[#D8315B] dark:text-[#ff7f9c]" />
              ) : (
                <Plus className="h-5 w-5 text-[#0A2463] dark:text-white" />
              )}
            </button>
            
            {isSectionExpanded('contact') && (
              <div className="px-5 pb-5 pt-1 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-4">Department Contact Information</h3>
                    <div className="space-y-4 text-gray-700 dark:text-gray-300">
                      <p><span className="font-semibold">Department:</span> Computer Science & Engineering</p>
                      <p><span className="font-semibold">Email:</span> cse@jsspwmys.org</p>
                      <p><span className="font-semibold">Phone:</span> +91-821-2548234</p>
                      <p><span className="font-semibold">Office Hours:</span> Monday to Friday, 9:00 AM to 5:00 PM</p>
                      <p><span className="font-semibold">Location:</span> Third Floor, Main Building, JSS Polytechnic for Women</p>
                    </div>
                  </div>
                  
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-4">Contact the HOD</h3>
                    <div className="space-y-4 text-gray-700 dark:text-gray-300">
                      <p><span className="font-semibold">Name:</span> Prof. Anitha K</p>
                      <p><span className="font-semibold">Email:</span> anitha@jsspwmys.org</p>
                      <p><span className="font-semibold">Phone:</span> +91-821-2548235</p>
                      <p><span className="font-semibold">Office:</span> Room 304, Computer Science Department</p>
                      <p><span className="font-semibold">Office Hours:</span> Monday to Friday, 10:00 AM to 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Syllabus Section */}
          <div>
            <button
              className="w-full flex items-center justify-between p-5 text-left"
              onClick={() => toggleSection('syllabus')}
            >
              <h2 className="text-2xl font-semibold text-[#0A2463] dark:text-white">Syllabus</h2>
              {isSectionExpanded('syllabus') ? (
                <Minus className="h-5 w-5 text-[#D8315B] dark:text-[#ff7f9c]" />
              ) : (
                <Plus className="h-5 w-5 text-[#0A2463] dark:text-white" />
              )}
            </button>
            
            {isSectionExpanded('syllabus') && (
              <div className="px-5 pb-5 pt-1 space-y-6">
                <div className="space-y-6">
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-4">Diploma in Computer Science & Engineering</h3>
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
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComputerScience;