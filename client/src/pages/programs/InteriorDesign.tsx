import { useState } from "react";
import { ArrowLeft, Mail, Download } from "lucide-react";

const facultyImg = "/dhananjaya.jpg"; // default faculty image
const buildingImg = "/bg2.jpg"; // default building image

// Define the tab types
type TabType = 'about' | 'facilities' | 'faculty' | 'gallery' | 'activities' | 'contact' | 'syllabus';

const InteriorDesign = () => {
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
          <h1 className="text-3xl font-bold text-[#0A2463] dark:text-white md:text-4xl">Interior Design</h1>
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
                <h2 className="text-2xl font-bold text-[#0A2463] dark:text-white mb-4">About the Interior Design Program</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The Interior Design program at JSS Polytechnic for Women provides comprehensive education in spatial design, aesthetics, and functionality. Our program equips students with the technical knowledge and creative skills needed for successful careers in residential and commercial interior design.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The curriculum combines theoretical concepts with practical applications, covering areas such as space planning, color theory, materials and finishes, lighting design, and computer-aided design. Students develop their design sensibilities through studio work, site visits, and collaborative projects.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Vision</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  To be a center of excellence in interior design education, producing creative professionals who transform spaces into functional, aesthetically pleasing, and sustainable environments.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Mission</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Providing quality education in interior design principles with emphasis on both technical proficiency and creative expression.</li>
                  <li>Developing design sensibilities that balance aesthetics, functionality, and sustainability.</li>
                  <li>Fostering problem-solving abilities and innovative thinking in spatial design challenges.</li>
                  <li>Promoting awareness of cultural diversity, historical contexts, and ethical considerations in design practice.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Program Educational Objectives</h3>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li>
                    <span className="font-semibold">PEO - 1:</span> To provide a strong foundation in interior design principles, elements, and methodologies.
                  </li>
                  <li>
                    <span className="font-semibold">PEO - 2:</span> To develop technical skills in space planning, material selection, and design representation.
                  </li>
                  <li>
                    <span className="font-semibold">PEO - 3:</span> To enhance creative abilities for addressing diverse interior design challenges.
                  </li>
                  <li>
                    <span className="font-semibold">PEO - 4:</span> To instill professional ethics and client-centered approaches in design practice.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Program Outcomes</h3>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li>
                    <span className="font-semibold">PO - 1: Design Knowledge:</span> Apply knowledge of interior design principles to create functional and aesthetically pleasing spaces.
                  </li>
                  <li>
                    <span className="font-semibold">PO - 2: Problem Analysis:</span> Identify and analyze interior design challenges using systematic and creative approaches.
                  </li>
                  <li>
                    <span className="font-semibold">PO - 3: Design/Development:</span> Create interior design solutions tailored to client needs, spatial constraints, and contextual factors.
                  </li>
                  <li>
                    <span className="font-semibold">PO - 4: Modern Tools:</span> Use contemporary design software, visualization techniques, and material resources.
                  </li>
                  <li>
                    <span className="font-semibold">PO - 5: Sustainability:</span> Understand and apply sustainable practices in interior design solutions.
                  </li>
                  <li>
                    <span className="font-semibold">PO - 6: Professional Ethics:</span> Function responsibly with attention to client needs, budgetary constraints, and ethical considerations.
                  </li>
                  <li>
                    <span className="font-semibold">PO - 7: Life-long learning:</span> Engage in continuous learning to adapt to evolving design trends and technologies.
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
                  <h4 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-3">Design Studio</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Spacious workstations for individual and group projects</li>
                    <li>Drawing tables and ergonomic seating</li>
                    <li>Presentation and critique space</li>
                    <li>Display areas for material samples and models</li>
                  </ul>
                </div>
                
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h4 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-3">Digital Design Lab</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Computer workstations with industry-standard software</li>
                    <li>CAD and 3D modeling applications</li>
                    <li>Rendering and visualization tools</li>
                    <li>Digital presentation equipment</li>
                  </ul>
                </div>
                
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h4 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-3">Materials Library</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Extensive collection of material samples</li>
                    <li>Fabric and textile resources</li>
                    <li>Finishes and surface treatments</li>
                    <li>Sustainable and innovative material examples</li>
                  </ul>
                </div>
                
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h4 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-3">Model Making Workshop</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Tools and equipment for physical model construction</li>
                    <li>Prototyping materials and supplies</li>
                    <li>Safety equipment and ventilation systems</li>
                    <li>Storage space for ongoing projects</li>
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
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-2 text-center">Prof. Anjali Sharma</h3>
                  <p className="text-[#D8315B] dark:text-[#ff7f9c] mb-4 text-center">Head of Department</p>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><span className="font-semibold">Educational Qualification:</span> M.Des. in Interior Design</p>
                    <p><span className="font-semibold">Area of Specialization:</span> Residential Design, Sustainable Interiors</p>
                    <p className="flex items-center">
                      <Mail className="mr-2 h-4 w-4 text-[#3E92CC]" />
                      <a href="mailto:anjali@jsspwmys.org" className="text-[#3E92CC] hover:underline">anjali@jsspwmys.org</a>
                    </p>
                  </div>
                </div>

                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <div className="mb-4 flex justify-center">
                    <img src={facultyImg} alt="Faculty Member" className="h-32 w-32 rounded-full object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-2 text-center">Prof. Rajesh Patel</h3>
                  <p className="text-[#D8315B] dark:text-[#ff7f9c] mb-4 text-center">Associate Professor</p>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><span className="font-semibold">Educational Qualification:</span> M.Arch with Interior Design focus</p>
                    <p><span className="font-semibold">Area of Specialization:</span> Commercial Spaces, Hospitality Design</p>
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
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-2 text-center">Prof. Priya Verma</h3>
                  <p className="text-[#D8315B] dark:text-[#ff7f9c] mb-4 text-center">Assistant Professor</p>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><span className="font-semibold">Educational Qualification:</span> M.Des. in Furniture Design</p>
                    <p><span className="font-semibold">Area of Specialization:</span> Furniture Design, Material Studies</p>
                    <p className="flex items-center">
                      <Mail className="mr-2 h-4 w-4 text-[#3E92CC]" />
                      <a href="mailto:priya@jsspwmys.org" className="text-[#3E92CC] hover:underline">priya@jsspwmys.org</a>
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
                  <img src={buildingImg} alt="Interior Design Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src={buildingImg} alt="Interior Design Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src={buildingImg} alt="Interior Design Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src={buildingImg} alt="Interior Design Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src={buildingImg} alt="Interior Design Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src={buildingImg} alt="Interior Design Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
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
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Design Exhibitions</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Annual exhibitions showcasing student projects, including conceptual designs, drawings, and models of residential and commercial interiors.</p>
                  <a href="#" className="inline-flex items-center text-[#3E92CC] hover:text-[#0A2463]">
                    <Download className="mr-2 h-4 w-4" />
                    Download Exhibition Details (PDF)
                  </a>
                </div>
                
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Industry Workshops</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Hands-on workshops led by design professionals, focusing on trends, materials, sustainability, and specialized techniques.</p>
                  <a href="#" className="inline-flex items-center text-[#3E92CC] hover:text-[#0A2463]">
                    <Download className="mr-2 h-4 w-4" />
                    Download Workshop Schedule (PDF)
                  </a>
                </div>
                
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Site Visits</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Educational visits to construction sites, designed spaces, showrooms, and material suppliers to gain practical insights into interior design applications.</p>
                  <a href="#" className="inline-flex items-center text-[#3E92CC] hover:text-[#0A2463]">
                    <Download className="mr-2 h-4 w-4" />
                    Download Visit Schedule (PDF)
                  </a>
                </div>
                
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Design Competitions</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Participation in institutional, regional, and national interior design competitions to challenge students' creativity and problem-solving abilities.</p>
                  <a href="#" className="inline-flex items-center text-[#3E92CC] hover:text-[#0A2463]">
                    <Download className="mr-2 h-4 w-4" />
                    Download Competition Details (PDF)
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
                    <p><span className="font-semibold">Department:</span> Interior Design</p>
                    <p><span className="font-semibold">Email:</span> interiordesign@jsspwmys.org</p>
                    <p><span className="font-semibold">Phone:</span> +91-821-2548238</p>
                    <p><span className="font-semibold">Office Hours:</span> Monday to Friday, 9:00 AM to 5:00 PM</p>
                    <p><span className="font-semibold">Location:</span> First Floor, Design Building, JSS Polytechnic for Women</p>
                  </div>
                </div>
                
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-4">Contact the HOD</h3>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p><span className="font-semibold">Name:</span> Prof. Anjali Sharma</p>
                    <p><span className="font-semibold">Email:</span> anjali@jsspwmys.org</p>
                    <p><span className="font-semibold">Phone:</span> +91-821-2548239</p>
                    <p><span className="font-semibold">Office:</span> Room 104, Interior Design Department</p>
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
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-4">Diploma in Interior Design</h3>
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
                        <li>Design Fundamentals</li>
                        <li>Drawing and Visualization</li>
                        <li>Space Planning</li>
                        <li>Materials and Finishes</li>
                        <li>Color Theory and Application</li>
                        <li>Furniture Design</li>
                        <li>Lighting Design</li>
                        <li>Computer-Aided Design</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium text-[#0A2463] dark:text-white mb-2">Elective Courses</h4>
                      <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                        <li>Residential Design</li>
                        <li>Commercial Design</li>
                        <li>Exhibition and Display Design</li>
                        <li>Sustainable Interior Design</li>
                        <li>Historic Interiors</li>
                        <li>Retail Design</li>
                        <li>Healthcare Design</li>
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

export default InteriorDesign;