import { useState } from 'react';
import { ArrowLeft, Download, Mail, User, BookOpen, Building, Image, CalendarClock, FileText, Plus, Minus } from 'lucide-react';
import buildingImg from "@assets/bg1.jpg";
import facultyImg from "@assets/prin.jpg";

type SectionType = 'about' | 'facilities' | 'faculty' | 'gallery' | 'activities' | 'contact' | 'syllabus';

const Architecture = () => {
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
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-4">About the Architecture Program</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    The Architecture program was started at JSS Polytechnic for women, Mysore in the academic year 1983-1984 to facilitate the architectural education at diploma level. We started the diploma program in architecture with the intake of 20 and later the intake was enhanced to 30 meet the growing demand. The institute takes very special care in selecting students for admission to various academic programmes based on the merit with the objective of providing better technical education.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    The programme focuses in training the students for acquiring the skills on drafting and design development of various types of buildings according to user requirement. During the course of study, the students are made to understand the design concepts adopted in ancient and modern buildings.
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
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-4">Facilities</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">The total building area is 600 square metres.</p>
                
                <div>
                  <h4 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-4">Major Equipments</h4>
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
                      </tbody>
                    </table>
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
                    <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-2 text-center">Prof. Vijayalakshmi G C</h3>
                    <p className="text-[#D8315B] dark:text-[#ff7f9c] mb-4 text-center">Head of Department</p>
                    <div className="space-y-2 text-gray-700 dark:text-gray-300">
                      <p><span className="font-semibold">Educational Qualification:</span> M.Tech in Construction Technology</p>
                      <p><span className="font-semibold">Area of Specialization:</span> Construction Technology, Design</p>
                      <p className="flex items-center">
                        <Mail className="mr-2 h-4 w-4 text-[#3E92CC]" />
                        <a href="mailto:vijayalakshmi@jsspwmys.org" className="text-[#3E92CC] hover:underline">vijayalakshmi@jsspwmys.org</a>
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <div className="mb-4 flex justify-center">
                      <img src={facultyImg} alt="Faculty Member" className="h-32 w-32 rounded-full object-cover" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-2 text-center">Prof. Manjula S</h3>
                    <p className="text-[#D8315B] dark:text-[#ff7f9c] mb-4 text-center">Assistant Professor</p>
                    <div className="space-y-2 text-gray-700 dark:text-gray-300">
                      <p><span className="font-semibold">Educational Qualification:</span> B.Arch</p>
                      <p><span className="font-semibold">Area of Specialization:</span> Architectural Design, Building Services</p>
                      <p className="flex items-center">
                        <Mail className="mr-2 h-4 w-4 text-[#3E92CC]" />
                        <a href="mailto:manjula@jsspwmys.org" className="text-[#3E92CC] hover:underline">manjula@jsspwmys.org</a>
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
                    <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Design Workshops</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">Regular workshops on architectural design, drafting, and model making to develop students' technical and creative skills.</p>
                  </div>
                  
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Site Visits</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">Regular visits to construction sites, architectural landmarks, and urban spaces to understand real-world applications.</p>
                  </div>
                  
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Guest Lectures</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">Series of lectures by practicing architects and industry professionals to provide industry insights.</p>
                  </div>
                  
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Student Exhibitions</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">Annual exhibitions featuring student projects, design competitions, and architectural models.</p>
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
                      <p><span className="font-semibold">Department:</span> Architecture</p>
                      <p><span className="font-semibold">Email:</span> architecture@jsspwmys.org</p>
                      <p><span className="font-semibold">Phone:</span> +91-821-2548230</p>
                      <p><span className="font-semibold">Office Hours:</span> Monday to Friday, 9:00 AM to 5:00 PM</p>
                      <p><span className="font-semibold">Location:</span> Second Floor, Main Building, JSS Polytechnic for Women</p>
                    </div>
                  </div>
                  
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-4">Contact the HOD</h3>
                    <div className="space-y-4 text-gray-700 dark:text-gray-300">
                      <p><span className="font-semibold">Name:</span> Prof. Vijayalakshmi G C</p>
                      <p><span className="font-semibold">Email:</span> vijayalakshmi@jsspwmys.org</p>
                      <p><span className="font-semibold">Phone:</span> +91-821-2548231</p>
                      <p><span className="font-semibold">Office:</span> Room 204, Architecture Department</p>
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
                    <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-4">Diploma in Architecture</h3>
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

export default Architecture;