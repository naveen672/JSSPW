import { useState } from 'react';
import { ArrowLeft, Download, Mail, Plus, Minus } from 'lucide-react';

type SectionType = 'about' | 'facilities' | 'faculty' | 'gallery' | 'activities' | 'contact' | 'syllabus';

const InformationScience = () => {
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
          <h1 className="text-3xl font-bold text-[#0A2463] dark:text-white md:text-4xl">Information Science and Technology</h1>
          
          {/* Department photo below title */}
          <div className="mt-6 overflow-hidden rounded-lg shadow-md">
            <img src="/images/department-ist.jpg" alt="Information Science and Technology Department" className="w-full object-cover" />
            <div className="p-3 bg-gray-50 dark:bg-gray-800">
              <p className="text-lg text-[#0A2463] dark:text-white">Information Science and Technology Department Students and Faculty</p>
            </div>
          </div>
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
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-4">About the Information Science and Technology Program</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    The Information Science and Technology program at JSS Polytechnic for Women provides a comprehensive education in information management, data systems, and knowledge organization. The program prepares students for careers in the rapidly evolving field of information technology and data management.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Our curriculum combines theoretical principles with practical applications, covering areas such as database management, information retrieval, data analytics, and information security. Students gain hands-on experience with modern information systems and technologies through laboratory sessions and project work.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Vision</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    To be a leading center for information science education, producing graduates who drive innovation in information management and contribute to the digital transformation of society.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Mission</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Providing quality education in information science and technology with a focus on both theoretical foundations and practical applications.</li>
                    <li>Equipping students with the skills to design, implement, and manage information systems that meet organizational needs.</li>
                    <li>Fostering analytical thinking and problem-solving abilities in the context of information challenges.</li>
                    <li>Promoting ethical considerations in information handling, privacy, and security.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Program Educational Objectives</h3>
                  <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                    <li>
                      <span className="font-semibold">PEO - 1:</span> To provide a strong foundation in information science and technology principles and methodologies.
                    </li>
                    <li>
                      <span className="font-semibold">PEO - 2:</span> To develop technical skills in information system design, implementation, and management.
                    </li>
                    <li>
                      <span className="font-semibold">PEO - 3:</span> To enhance analytical abilities for addressing information organization and retrieval challenges.
                    </li>
                    <li>
                      <span className="font-semibold">PEO - 4:</span> To instill ethical awareness and professional responsibility in information handling.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Program Outcomes</h3>
                  <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                    <li>
                      <span className="font-semibold">PO - 1: Information Science and Technology Knowledge:</span> Apply knowledge of information science and technology principles to solve real-world information management problems.
                    </li>
                    <li>
                      <span className="font-semibold">PO - 2: Problem Analysis:</span> Identify and analyze information organization and retrieval challenges using systematic approaches.
                    </li>
                    <li>
                      <span className="font-semibold">PO - 3: Design/Development:</span> Design information systems and solutions tailored to specific user and organizational requirements.
                    </li>
                    <li>
                      <span className="font-semibold">PO - 4: Modern Tools:</span> Use contemporary information technologies and tools for data management and analysis.
                    </li>
                    <li>
                      <span className="font-semibold">PO - 5: Information Ethics:</span> Understand and apply ethical principles in information collection, storage, and dissemination.
                    </li>
                    <li>
                      <span className="font-semibold">PO - 6: Teamwork:</span> Function effectively in multidisciplinary teams on information-related projects.
                    </li>
                    <li>
                      <span className="font-semibold">PO - 7: Life-long learning:</span> Engage in continuous learning to adapt to evolving information technologies and methodologies.
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
                    <h4 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-3">Information Systems Lab</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>Modern computer systems with latest configurations</li>
                      <li>Database management systems software</li>
                      <li>Information retrieval tools</li>
                      <li>Knowledge organization systems</li>
                    </ul>
                  </div>
                  
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <h4 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-3">Data Analytics Lab</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>Data visualization software</li>
                      <li>Statistical analysis tools</li>
                      <li>Data mining platforms</li>
                      <li>Business intelligence applications</li>
                    </ul>
                  </div>
                  
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <h4 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-3">Digital Library Lab</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>Digital content management systems</li>
                      <li>Metadata creation and management tools</li>
                      <li>Institutional repository software</li>
                      <li>Digital preservation technologies</li>
                    </ul>
                  </div>
                  
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <h4 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-3">Information Security Lab</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>Network security monitoring tools</li>
                      <li>Encryption and cryptography software</li>
                      <li>Authentication and access control systems</li>
                      <li>Security audit and compliance tools</li>
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
                      <img src="/images/faculty/tejaswini.jpg" alt="Tejaswini R.G." className="h-32 w-32 rounded-full object-cover" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-2 text-center">Tejaswini R.G.</h3>
                    <p className="text-[#D8315B] dark:text-[#ff7f9c] mb-4 text-center">HOD</p>
                    <div className="space-y-2 text-gray-700 dark:text-gray-300">
                      <p><span className="font-semibold">Educational Qualification:</span> M.Tech</p>
                      <p><span className="font-semibold">Area of Specialization:</span> VLSI and Embedded System</p>
                      <p className="flex items-center">
                        <Mail className="mr-2 h-4 w-4 text-[#3E92CC]" />
                        <a href="mailto:teju.rg57@gmail.com" className="text-[#3E92CC] hover:underline">teju.rg57@gmail.com</a>
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <div className="mb-4 flex justify-center">
                      <img src="/images/faculty/nandashree.jpg" alt="Nandashree H M" className="h-32 w-32 rounded-full object-cover" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-2 text-center">Nandashree H M</h3>
                    <p className="text-[#D8315B] dark:text-[#ff7f9c] mb-4 text-center">Lecturer</p>
                    <div className="space-y-2 text-gray-700 dark:text-gray-300">
                      <p><span className="font-semibold">Educational Qualification:</span> M.Tech</p>
                      <p><span className="font-semibold">Area of Specialization:</span> Software Engineering</p>
                      <p className="flex items-center">
                        <Mail className="mr-2 h-4 w-4 text-[#3E92CC]" />
                        <a href="mailto:nandashree@jsspwmys.org" className="text-[#3E92CC] hover:underline">nandashree@jsspwmys.org</a>
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <div className="mb-4 flex justify-center">
                      <img src="/images/faculty/asha.jpg" alt="Asha L" className="h-32 w-32 rounded-full object-cover" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-2 text-center">Asha L</h3>
                    <p className="text-[#D8315B] dark:text-[#ff7f9c] mb-4 text-center">Lecturer</p>
                    <div className="space-y-2 text-gray-700 dark:text-gray-300">
                      <p><span className="font-semibold">Educational Qualification:</span> BE</p>
                      <p><span className="font-semibold">Area of Specialization:</span> Computer Science and Engineering</p>
                      <p className="flex items-center">
                        <Mail className="mr-2 h-4 w-4 text-[#3E92CC]" />
                        <a href="mailto:ashal.0708@gmail.com" className="text-[#3E92CC] hover:underline">ashal.0708@gmail.com</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <div className="mb-4 flex justify-center">
                      <img src="/images/faculty/nayana.jpg" alt="Nayana K G" className="h-32 w-32 rounded-full object-cover" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-2 text-center">Nayana K G</h3>
                    <p className="text-[#D8315B] dark:text-[#ff7f9c] mb-4 text-center">Lecturer</p>
                    <div className="space-y-2 text-gray-700 dark:text-gray-300">
                      <p><span className="font-semibold">Educational Qualification:</span> BE</p>
                      <p><span className="font-semibold">Area of Specialization:</span> Information Science and Technology</p>
                      <p className="flex items-center">
                        <Mail className="mr-2 h-4 w-4 text-[#3E92CC]" />
                        <a href="mailto:nayana.kg2001@gmail.com" className="text-[#3E92CC] hover:underline">nayana.kg2001@gmail.com</a>
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
                <div className="grid gap-6 grid-cols-1">
                  {/* Featured image - IST department with students and faculty */}
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img src="/images/department-ist.jpg" alt="Information Science and Technology Department Students and Faculty" className="w-full object-cover hover:scale-105 transition-transform duration-300" />
                    <div className="p-4 bg-gray-50 dark:bg-gray-800">
                      <h4 className="text-lg font-semibold text-[#0A2463] dark:text-white">Information Science and Technology Department Students and Faculty</h4>
                    </div>
                  </div>
                  
                  <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    <div className="overflow-hidden rounded-lg shadow-md">
                      <img src="/images/lab-ist.jpg" alt="Information Science Lab" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="overflow-hidden rounded-lg shadow-md">
                      <img src="/images/project-ist.jpg" alt="Student Projects" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="overflow-hidden rounded-lg shadow-md">
                      <img src="/images/computer-lab.jpg" alt="Computer Lab" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
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
                    <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Innovation Challenge Achievement</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">Kum Akshatha of 6th sem IS&T participated in state level "INNOVATION CHALLENGE" organized by Dept of Computer Science and Engg, JSS Polytechnic Mysuru and won first prize.</p>
                  </div>
                  
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Ideathon Event</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">Under Dyuthi Student Forum an "Ideathon" was conducted on 18-Jan-2025.</p>
                  </div>
                  
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Guest Lecture on Cloud Computing</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">A guest lecture on Cloud computing was delivered by Mrs Sudhamani N, Cloud engineer, Ellucian higher education system on 18th March 2025 for the benefit of 4th sem students of IS&T.</p>
                  </div>
                  
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">National Level Project Competition</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">IS students won the third prize in National level project presentation computation held by Bharathi Vidhyapeeta college of Engineering, Pune on 12-04-2025 which included 5000rs cash prize.</p>
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
                      <p><span className="font-semibold">Department:</span> Information Science and Technology</p>
                      <p><span className="font-semibold">Email:</span> infoscience@jsspwmys.org</p>
                      <p><span className="font-semibold">Phone:</span> +91-821-2548236</p>
                      <p><span className="font-semibold">Office Hours:</span> Monday to Friday, 9:00 AM to 5:00 PM</p>
                      <p><span className="font-semibold">Location:</span> Third Floor, Main Building, JSS Polytechnic for Women</p>
                    </div>
                  </div>
                  
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-4">Contact the HOD</h3>
                    <div className="space-y-4 text-gray-700 dark:text-gray-300">
                      <p><span className="font-semibold">Name:</span> Tejaswini R.G.</p>
                      <p><span className="font-semibold">Email:</span> teju.rg57@gmail.com</p>
                      <p><span className="font-semibold">Phone:</span> +91-821-2548237</p>
                      <p><span className="font-semibold">Office:</span> Room 304, Information Science Department</p>
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
                    <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-4">Diploma in Information Science</h3>
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
                          <li>Introduction to Information Science</li>
                          <li>Database Management Systems</li>
                          <li>Information Retrieval Systems</li>
                          <li>Data Analytics and Visualization</li>
                          <li>Knowledge Organization Systems</li>
                          <li>Digital Libraries and Archives</li>
                          <li>Information Security and Privacy</li>
                          <li>Information Architecture</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-medium text-[#0A2463] dark:text-white mb-2">Elective Courses</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                          <li>Data Mining and Knowledge Discovery</li>
                          <li>Web Information Systems</li>
                          <li>Metadata and Semantic Technologies</li>
                          <li>Information Policy and Ethics</li>
                          <li>User Experience Design</li>
                          <li>Information Behavior and User Studies</li>
                          <li>Information Project Management</li>
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

export default InformationScience;