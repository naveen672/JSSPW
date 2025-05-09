import { useState } from 'react';
import { ArrowLeft, Download, Mail, User, BookOpen, Building, Image, CalendarClock, FileText, Plus, Minus } from 'lucide-react';
import buildingImg from "@assets/bg3.jpg";
import jssLogo from "@assets/logo_jss.jpeg";

// Faculty images
import varalakmiFacultyImg from '/images/faculty/commercial-practice/varalakshmi.png';
import madhusudhanFacultyImg from '/images/faculty/commercial-practice/madhusudhan.png';
import vaishaliFacultyImg from '/images/faculty/commercial-practice/vaishali.png';
import shilpashreeFacultyImg from '/images/faculty/commercial-practice/shilpashree.png';
import sandhyaFacultyImg from '/images/faculty/commercial-practice/sandhya.png';
import jyothiFacultyImg from '/images/faculty/commercial-practice/jyothi.png';
import savithaFacultyImg from '/images/faculty/commercial-practice/savitha.png';

// Gallery images
// Computer Lab
import computerLab1 from '/images/gallery/commercial-practice/computer-lab-1.jpg';
import computerLab2 from '/images/gallery/commercial-practice/computer-lab-2.jpg';
import computerLab3 from '/images/gallery/commercial-practice/computer-lab-3.jpg';
import computerLab4 from '/images/gallery/commercial-practice/computer-lab-4.jpg';
import computerLab5 from '/images/gallery/commercial-practice/computer-lab-5.jpg';

// Industrial Visits
import industrialVisit1 from '/images/gallery/commercial-practice/industrial-visit-1.jpg';
import industrialVisit2 from '/images/gallery/commercial-practice/industrial-visit-2.jpg';
import industrialVisit3 from '/images/gallery/commercial-practice/industrial-visit-3.jpg';
import industrialVisit4 from '/images/gallery/commercial-practice/industrial-visit-4.jpg';
import industrialVisit5 from '/images/gallery/commercial-practice/industrial-visit-5.jpg';
import industrialVisit6 from '/images/gallery/commercial-practice/industrial-visit-6.jpg';

// Cultural Events
import dance1 from '/images/gallery/commercial-practice/dance-1.jpg';
import dance2 from '/images/gallery/commercial-practice/dance-2.jpg';

// Internship and Guest Lectures
import internship1 from '/images/gallery/commercial-practice/internship-1.jpg';
import guestLecture1 from '/images/gallery/commercial-practice/guest-lecture-1.jpg';

// College Day Events
import collegeDay5 from '/images/gallery/commercial-practice/college-day-5.jpg';



type SectionType = 'about' | 'facilities' | 'faculty' | 'gallery' | 'activities' | 'contact' | 'syllabus';

const CommercialPractice = () => {
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
          <h1 className="text-3xl font-bold text-[#0A2463] dark:text-white md:text-4xl">Commercial Practice</h1>
        </div>
        
        {/* Featured Image - Smaller size */}
        <div className="mb-6 overflow-hidden rounded-lg shadow-lg max-w-3xl mx-auto">
          <img 
            src={buildingImg} 
            alt="Commercial Practice Department" 
            className="h-64 w-full object-cover"
          />
        </div>
        
        {/* About Department Section (Not Collapsible) */}
        <div className="mb-10">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-[#0A2463] dark:text-white mb-4">About the Commercial Practice Department</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Department of Commercial Practice (CP) was established in JSS Polytechnic for Women in the year 1980 with an intake of 30. Considering the demand for the Programme, the intake was increased to 60. Being a Veteran Programme, it is a Six Semester Diploma Programme, providing a broad based training in both theoretical and practical aspects related to Accounting, Commerce, Management, Secretarial Services, Documentation, Communication, Economics, Business Law, Professional Ethics and Computers.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              With a view to provide quality education and overall improvement of the students, the Strengths and Weaknesses of the students are assessed and Counseling and Mentoring is done to overcome the weaknesses and build their personality.
            </p>
          </div>
        </div>
        
        {/* HOD Message Section (Not Collapsible) */}
        <div className="mb-10">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-[#0A2463] dark:text-white mb-4">Message from HOD</h2>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="flex-shrink-0">
                <img src={savithaFacultyImg} alt="SAVITHA M - HOD" className="h-32 w-32 rounded-full object-cover border-4 border-[#0A2463] dark:border-[#3E92CC]" />
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                  "The world is changing fast with new innovations and technologies every day. These newer technologies are helping the people to improve their standards of lives. The Department of Commercial Practice always keeps a watch on this and updates itself with respect to the Curriculum, Faculty, Technical Staff, Infrastructure and Pedagogy, so that its Students become very competitive with regard to Knowledge and Skill and get better jobs and live a comfortable life."
                </p>
                <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                  "After assessing the requirements of Industries, the Curriculum is changed through the Faculty who are Members in the State Level Curriculum Revision Committee. All Faculty and Technical Staff update themselves accordingly, so that effective teaching is done with most appropriate Teaching Methods. Correspondingly, Infrastructural facilities like Computer Center, Class Rooms, Laboratories, Library, etc., are developed with the support of Management of the Polytechnic."
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 text-right font-semibold">
                  - SAVITHA M, HOD Commercial Practice
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Collapsible Sections */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md divide-y divide-gray-200 dark:divide-gray-700">
          {/* About Section (Details) */}
          <div className="border-b border-gray-200 dark:border-gray-700">
            <button
              className="w-full flex items-center justify-between p-5 text-left"
              onClick={() => toggleSection('about')}
            >
              <h2 className="text-2xl font-semibold text-[#0A2463] dark:text-white">Department Details</h2>
              {isSectionExpanded('about') ? (
                <Minus className="h-5 w-5 text-[#D8315B] dark:text-[#ff7f9c]" />
              ) : (
                <Plus className="h-5 w-5 text-[#0A2463] dark:text-white" />
              )}
            </button>
            
            {isSectionExpanded('about') && (
              <div className="px-5 pb-5 pt-1 space-y-6">
                <div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    The Department prides in having very good infrastructure, and dedicated and qualified Faculty and Supporting staff. Parents-Teachers Meeting is organized periodically to have good rapport amongst Teachers, Parents and Students. Also, the Department is in constant touch with its Alumni.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Regular Guest lectures and Workshops are arranged by inviting Academicians and Industrial experts by entering into MOUs with organizations and professional bodies like National Institute of Personnel Management. Industrial visits and Career Guidance Programms are arranged to Final year students with a view to give practical exposure of working environment.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Since 2015, the Department has moved towards Goal-oriented approach, by adopting Outcome Based Education System. Further inclusion of In-plant training and Project work in the curriculum has facilitated our students in enhancing their employability skills.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Keeping in pace with National Education Policy 2020 and technological advancement, the curriculum is being revised with more stress on Practical aspects.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    The successful students of CP get jobs easily in both Government and Private Sectors. Many successful students of our Polytechnic are now well settled in their lives by working in reputed Organizations like Wipro, Accenture, Reserve Bank of India, Indian Institute of Management, Banks, Courts (including High Court), Legal Offices, Financial Offices, etc, at Supervisory and Middle level management levels.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    For the students who are knowledge thirsty, the Department has another avenue of Higher Studies. Commercial Practice Diploma holders can pursue their higher education by getting lateral entry directly to second year B.Com and BBM.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Vision of Department</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Establish as a hallmark institute to equip diligent, ethically strong, socially responsible, potentially upright professionals in office administration cognizant with the emerging requirements of Governmental, Non-governmental and Corporate sectors.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Mission of Department</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>To impart high quality teaching and practices in an excellent ambience fortified by well thought of curriculum, competent faculty and infrastructure with state of art services.</li>
                    <li>To foster students' learning in respect of organizational modules covering the areas of management, Finance, Communication, Trading, Human Resource, Legal aspects.</li>
                    <li>To promote acquisition of secretarial skills, adaptability to trends, exposure to industrial arena, job market and corporate world.</li>
                    <li>To enable overall personality development by acquiring hands on expertise, etiquettes, soft skills through vigilance over changing scenario for employability and promote the culture of entrepreneurship.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Program Educational Objectives of Department</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>To prepare students for a continuous learning in order to meet changing demands of the Industry and make them successful Professionals</li>
                    <li>To provide students a strong foundation in the core areas of business and Industry</li>
                    <li>To inculcate team work, Life skills, environmental issues and professional ethics, social responsibilities and need for life time learning</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Program Specific Objectives</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">Students will be able to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Acquire Skill based knowledge in core areas of Commerce, Management, Communication, Accounts, Law, Tax and Computers</li>
                    <li>Demonstrate knowledge of Principles of Management required to combat the challenges in workplace</li>
                    <li>Develop an ability to make proper decisions at right time in personal and professional life</li>
                    <li>Strengthen their Multitasking ability, so that they can adapt themselves to the changing technological needs in their career with confidence</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Program Outcomes</h3>
                  <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                    <li>
                      <span className="font-semibold">Basic and Discipline specific knowledge:</span> An ability to apply Commerce skills, Statistics and office operation skills for Corporate and Government sectors to assist in the solution of the Managerial activities
                    </li>
                    <li>
                      <span className="font-semibold">Problem analysis:</span> Identify and analyze well-defined problems by using Management Techniques and Accounting Rules and Conventions
                    </li>
                    <li>
                      <span className="font-semibold">Design/development of solutions:</span> An ability to apply office operation skills and execute jobs independently at all levels of management
                    </li>
                    <li>
                      <span className="font-semibold">Managerial/Secretarial Tools:</span> Apply appropriate technologies and tools with an understanding of their merits and limitations
                    </li>
                    <li>
                      <span className="font-semibold">Best practices for society, sustainability and environment:</span> Apply appropriate technology in context of society, sustainability, environment and ethical Practices
                    </li>
                    <li>
                      <span className="font-semibold">Project Management:</span> Use management principles individually, as a team member or a leader to manage projects and effectively communicate about well-defined commercial activities
                    </li>
                    <li>
                      <span className="font-semibold">Life-long learning:</span> Ability to analyze the individual needs and to upgrade in the context of technological changes
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
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The department offers excellent infrastructure with state-of-the-art equipment and laboratory facilities, spacious classrooms, and a well-stocked department library with 130 books.
                </p>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <h4 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-3">Computer Application in Office</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>DELL Computers, Intel i5</li>
                      <li>Canon Printer</li>
                      <li>Networking with Optical Cables, Cat-6</li>
                      <li>10 KV UPS</li>
                    </ul>
                  </div>
                  
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <h4 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-3">DeskTop Publishing</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>HCL Computers</li>
                      <li>Publishing software</li>
                      <li>Document processing tools</li>
                      <li>Layout and design software</li>
                    </ul>
                  </div>
                  
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <h4 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-3">E-Office</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>Digital document management</li>
                      <li>Electronic file tracking</li>
                      <li>Virtual meeting tools</li>
                      <li>Paperless office systems</li>
                    </ul>
                  </div>
                  
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <h4 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-3">Tally Accounting</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>Tally ERP software</li>
                      <li>Financial accounting modules</li>
                      <li>Inventory management</li>
                      <li>Payroll and taxation tools</li>
                    </ul>
                  </div>
                  
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <h4 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-3">Typographical Laboratory</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>Facit Typewriters</li>
                      <li>Typing practice stations</li>
                      <li>Speed and accuracy training tools</li>
                    </ul>
                  </div>
                  
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <h4 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-3">Smart Classroom</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>LCD Projector facility for Audio-Visual purposes</li>
                      <li>Green glass board</li>
                      <li>Podium in each classroom</li>
                      <li>Blended learning support</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <h4 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-3">Department Library</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>130 specialized books</li>
                      <li>Previous year project reports and synopsis</li>
                      <li>Laboratory Manuals</li>
                      <li>Reference materials</li>
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
                      <img src={savithaFacultyImg} alt="SAVITHA M" className="h-32 w-32 rounded-full object-cover" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-2 text-center">SAVITHA M</h3>
                    <p className="text-[#D8315B] dark:text-[#ff7f9c] mb-4 text-center">HOD</p>
                    <div className="space-y-2 text-gray-700 dark:text-gray-300">
                      <p><span className="font-semibold">Educational Qualification:</span> M.Com</p>
                      <p><span className="font-semibold">Area of Specialization:</span> Costing</p>
                      <p className="flex items-center">
                        <Mail className="mr-2 h-4 w-4 text-[#3E92CC]" />
                        <a href="mailto:msavitha.devaru@gmail.com" className="text-[#3E92CC] hover:underline">msavitha.devaru@gmail.com</a>
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <div className="mb-4 flex justify-center">
                      <img src={varalakmiFacultyImg} alt="VARALAKSHMI B" className="h-32 w-32 rounded-full object-cover" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-2 text-center">VARALAKSHMI B</h3>
                    <p className="text-[#D8315B] dark:text-[#ff7f9c] mb-4 text-center">Lecturer</p>
                    <div className="space-y-2 text-gray-700 dark:text-gray-300">
                      <p><span className="font-semibold">Educational Qualification:</span> M.Com, PGDBA</p>
                      <p><span className="font-semibold">Area of Specialization:</span> Management</p>
                      <p className="flex items-center">
                        <Mail className="mr-2 h-4 w-4 text-[#3E92CC]" />
                        <a href="mailto:varalakshmi972015@gmail.com" className="text-[#3E92CC] hover:underline">varalakshmi972015@gmail.com</a>
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <div className="mb-4 flex justify-center">
                      <img src={madhusudhanFacultyImg} alt="Madhu Sudhan T" className="h-32 w-32 rounded-full object-cover" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-2 text-center">Madhu Sudhan T</h3>
                    <p className="text-[#D8315B] dark:text-[#ff7f9c] mb-4 text-center">Lecturer</p>
                    <div className="space-y-2 text-gray-700 dark:text-gray-300">
                      <p><span className="font-semibold">Educational Qualification:</span> M.Com</p>
                      <p><span className="font-semibold">Area of Specialization:</span> Management Accounting</p>
                      <p className="flex items-center">
                        <Mail className="mr-2 h-4 w-4 text-[#3E92CC]" />
                        <a href="mailto:madhusudhan.t24@gmail.com" className="text-[#3E92CC] hover:underline">madhusudhan.t24@gmail.com</a>
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <div className="mb-4 flex justify-center">
                      <img src={vaishaliFacultyImg} alt="VAISHALI B C" className="h-32 w-32 rounded-full object-cover" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-2 text-center">VAISHALI B C</h3>
                    <p className="text-[#D8315B] dark:text-[#ff7f9c] mb-4 text-center">Lecturer</p>
                    <div className="space-y-2 text-gray-700 dark:text-gray-300">
                      <p><span className="font-semibold">Educational Qualification:</span> M.Com</p>
                      <p><span className="font-semibold">Area of Specialization:</span> Management</p>
                      <p className="flex items-center">
                        <Mail className="mr-2 h-4 w-4 text-[#3E92CC]" />
                        <a href="mailto:vaishali4satish@gmail.com" className="text-[#3E92CC] hover:underline">vaishali4satish@gmail.com</a>
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <div className="mb-4 flex justify-center">
                      <img src={shilpashreeFacultyImg} alt="Shilpashree" className="h-32 w-32 rounded-full object-cover" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-2 text-center">Shilpashree</h3>
                    <p className="text-[#D8315B] dark:text-[#ff7f9c] mb-4 text-center">Lecturer</p>
                    <div className="space-y-2 text-gray-700 dark:text-gray-300">
                      <p><span className="font-semibold">Educational Qualification:</span> M.Com</p>
                      <p><span className="font-semibold">Area of Specialization:</span> Taxation</p>
                      <p className="flex items-center">
                        <Mail className="mr-2 h-4 w-4 text-[#3E92CC]" />
                        <a href="mailto:shilpashreek22@gmail.com" className="text-[#3E92CC] hover:underline">shilpashreek22@gmail.com</a>
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <div className="mb-4 flex justify-center">
                      <img src={sandhyaFacultyImg} alt="SANDHYA R K" className="h-32 w-32 rounded-full object-cover" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-2 text-center">SANDHYA R K</h3>
                    <p className="text-[#D8315B] dark:text-[#ff7f9c] mb-4 text-center">Lecturer</p>
                    <div className="space-y-2 text-gray-700 dark:text-gray-300">
                      <p><span className="font-semibold">Educational Qualification:</span> M.Com</p>
                      <p><span className="font-semibold">Area of Specialization:</span> Management</p>
                      <p className="flex items-center">
                        <Mail className="mr-2 h-4 w-4 text-[#3E92CC]" />
                        <a href="mailto:sandhyak2019@gmail.com" className="text-[#3E92CC] hover:underline">sandhyak2019@gmail.com</a>
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <div className="mb-4 flex justify-center">
                      <img src={jyothiFacultyImg} alt="JYOTHI N" className="h-32 w-32 rounded-full object-cover" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-2 text-center">JYOTHI N</h3>
                    <p className="text-[#D8315B] dark:text-[#ff7f9c] mb-4 text-center">Lecturer</p>
                    <div className="space-y-2 text-gray-700 dark:text-gray-300">
                      <p><span className="font-semibold">Educational Qualification:</span> M.A. in English, B.Ed.</p>
                      <p><span className="font-semibold">Area of Specialization:</span> Literature</p>
                      <p className="flex items-center">
                        <Mail className="mr-2 h-4 w-4 text-[#3E92CC]" />
                        <a href="mailto:jyothinagesh9593@gmail.com" className="text-[#3E92CC] hover:underline">jyothinagesh9593@gmail.com</a>
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
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Computer Labs</h3>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img src={computerLab1} alt="Computer Lab 1" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img src={computerLab2} alt="Computer Lab 2" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img src={computerLab3} alt="Computer Lab 3" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3 mt-8">Industrial Visits</h3>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img src={industrialVisit1} alt="Industrial Visit 1" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img src={industrialVisit2} alt="Industrial Visit 2" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img src={industrialVisit3} alt="Industrial Visit 3" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img src={industrialVisit4} alt="Industrial Visit 4" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img src={industrialVisit5} alt="Industrial Visit 5" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3 mt-8">Internships & Placements</h3>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img src={internship1} alt="Student Internship" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img src="/attached_assets/Internship 2.jpg" alt="Student Internship at Mysore Chamber of Commerce" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img src="/attached_assets/Internship 3.jpg" alt="Students working during internship" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img src="/attached_assets/Receiving offer letter by company.jpg" alt="Student receiving offer letter" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img src={guestLecture1} alt="Guest Lecture" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img src="/attached_assets/Seminar hall.jpg" alt="Seminar in progress" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3 mt-8">Cultural Events</h3>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img src={dance1} alt="Cultural Performance 1" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img src={dance2} alt="Cultural Performance 2" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3 mt-8">College Day Celebrations</h3>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img src="/attached_assets/College day 1.jpg" alt="College Day 1" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img src="/attached_assets/College day 2.jpg" alt="College Day 2" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img src="/attached_assets/College day 3.jpg" alt="College Day 3" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img src="/attached_assets/College day 4.jpg" alt="College Day 4" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img src={collegeDay5} alt="College Day 5" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3 mt-8">Sports Activities</h3>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img src="/attached_assets/Sports 1.jpg" alt="Students playing Carrom" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img src="/attached_assets/Sports 2.png" alt="Badminton Match" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img src="/attached_assets/Sports 3.jpg" alt="Outdoor Sports" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img src="/attached_assets/Sports 4.png" alt="Chess Tournament" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3 mt-8">Classrooms</h3>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img src="/attached_assets/Class Room.jpg" alt="Modern Classroom" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img src="/attached_assets/Class Room (2).jpg" alt="Lecture in Progress" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
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
                    <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Business Competitions</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">Regular business plan competitions, marketing strategy contests, and case study competitions to enhance practical knowledge and analytical skills.</p>
                  </div>
                  
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Industry Visits</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">Organized visits to various businesses, financial institutions, and companies to provide students with real-world exposure to commercial operations.</p>
                  </div>
                  
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Guest Lectures</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">Regular sessions by industry experts, successful entrepreneurs, and corporate professionals to share insights on current business trends and practices.</p>
                  </div>
                  
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Business Workshops</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">Hands-on workshops on digital marketing, accounting software, entrepreneurship, and financial literacy to enhance students' practical skills.</p>
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
                      <p><span className="font-semibold">Department:</span> Commercial Practice</p>
                      <p><span className="font-semibold">Email:</span> jsspw_cp@yahoo.co.in</p>
                      <p><span className="font-semibold">Phone:</span> +91-821-2548238</p>
                      <p><span className="font-semibold">Office Hours:</span> Monday to Friday, 9:00 AM to 5:00 PM</p>
                      <p><span className="font-semibold">Location:</span> Commercial Practice Department, JSS Polytechnic for Women</p>
                    </div>
                  </div>
                  
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-4">Contact the HOD</h3>
                    <div className="space-y-4 text-gray-700 dark:text-gray-300">
                      <p><span className="font-semibold">Name:</span> SAVITHA M</p>
                      <p><span className="font-semibold">Email:</span> msavitha.devaru@gmail.com</p>
                      <p><span className="font-semibold">Mobile:</span> 9591650765</p>
                      <p><span className="font-semibold">Office:</span> Commercial Practice Department</p>
                      <p><span className="font-semibold">Office Hours:</span> Monday to Friday, 9:00 AM to 5:00 PM</p>
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
                    <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-4">Diploma in Commercial Practice</h3>
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

export default CommercialPractice;