import { ArrowLeft, Download, Phone, Mail, User, BookOpen, Building, Image, CalendarClock, FileText } from "lucide-react";
import { useState } from "react";
import buildingImg from "../../assets/bg2.jpg";
import facultyImg from "../../assets/prin.jpg";

// Tab interface
type TabType = 'about' | 'facilities' | 'faculty' | 'gallery' | 'activities' | 'contact' | 'syllabus';

const ApparelDesign = () => {
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
          <h1 className="text-3xl font-bold text-[#0A2463] dark:text-white md:text-4xl">Apparel Design and Fabrication Technology</h1>
        </div>
        
        {/* Featured Image */}
        <div className="mb-10 overflow-hidden rounded-lg shadow-lg">
          <img 
            src={buildingImg} 
            alt="Apparel Design Department" 
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
                <h2 className="text-2xl font-bold text-[#0A2463] dark:text-white mb-4">About the Program</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The Dept. of Apparel Design and Fabrication Technology was established in the year 1984-85 to provide the creative avenue which an individual requires.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The Apparel Design & Fabrication Technology Programme aims at educating individuals to be creative and responsible designers who will be competent to handle diverse areas of need/ situations in today's, highly competitive and diverse, Apparel Design Industry.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The Apparel Design Programme commences with a foundation programme in design. Area specific inputs begin in the first semester gradually increasing in complexity as the programme advances. Skills and conceptual abilities are also developed through project-based learning wherein students are individually guided and encouraged to pursue and develop their own creative abilities.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The program enables the students for careers in apparel and soft goods design and development. The syllabus includes Apparel Construction, Patternmaking, Textile Designing  and Computer Aided Design. Fashion designers use their creative and technical skills to design products, develop patterns, monitor quality control and assurance and coordinate sourcing activities. Students who are creative and technologically savvy have an advantage in today's global fashion industry.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  On completion of the course, students can choose from diverse employment opportunities in the industry such as – Assistant Designer, Production Assistant, Fabric Specialist, Trend Manager and Assistant Manager of Quality Assurance, Costume Designer for Film/ Theatre, Bridal Designer, Illustrator, Pattern Maker, Stylist, Retail Merchandiser, Visual merchandiser and CAD Designer. Pursue higher Education- BSc FAD, MSc etc.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Vision</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  "Offer professional programs and offering to enable, empower and inspire to fulfill their aspirations to the best of their ability".
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Mission</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>"Enhancing value such as style and research, creative and innovation, technology and craftsmanship, the skill to merge many spirits into a harmonious balance".</li>
                  <li>"Adopt unique blend of fashion designing and management skills and mould them as complete professionals with knowledge, skills and competencies enabling them to be socially responsible entrepreneurs to meet the diverse demands of the fashion industry through research and development."</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Program Outcomes</h3>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li>
                    <span className="font-semibold">1. Basic and Discipline specific knowledge:</span> Apply knowledge of basic designing, pattern making and apparel construction for fashion industry.
                  </li>
                  <li>
                    <span className="font-semibold">2. Problem Analysis:</span> Identify target consumers, study economic conditions, standard of living and design the garments as per their need.
                  </li>
                  <li>
                    <span className="font-semibold">3. Design / Development of solutions:</span> Specify and design the styles for advanced garments, analyse and evaluate methodology and create mass and high fashion garments.
                  </li>
                  <li>
                    <span className="font-semibold">4. Modern tools, experimentation and testing:</span> Select advanced industrial sewing machine, CAD software's, Modern cutting techniques needed for modern methods of production.
                  </li>
                  <li>
                    <span className="font-semibold">5. Best practices for society, sustainability and environment:</span> Work in team using artistic endeavours and environment to achieve project objectives.
                  </li>
                  <li>
                    <span className="font-semibold">6. Project Management:</span> Analyze modern management and communicate various apparel construction techniques to complete the project.
                  </li>
                  <li>
                    <span className="font-semibold">7. Life-long learning:</span> Pursue lifelong learning as a means of enhancing the knowledge and skills. Recognize the professional and personal responsibility of designers to the community.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Program Educational Objectives</h3>
                <ul className="list-decimal pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Apparel Design and Fabrication Technology students will contribute to the Apparel Industry as Designers, Merchandisers, CAD Designers, CAD Pattern Makers, Textile Designers, Knitwear and Quality Controllers.</li>
                  <li>Diploma holders will pursue lifelong learning process as a means of enhancing the knowledge base and skills competence to contribute to the improvement of their profession and community.</li>
                  <li>Diploma holders will be committed to the improvement of Business communities while maintaining high professional ethical standards.</li>
                </ul>
              </div>
            </div>
          )}

          {/* Facilities Tab */}
          {activeTab === 'facilities' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#0A2463] dark:text-white mb-4">Facilities</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6"><strong>Building area:</strong> 600 Square Meters</p>
              
              <div>
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-4">Major Equipments</h3>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <h4 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-3">Sewing & Embroidery</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>Power Operated Sewing machine - 15 No.</li>
                      <li>Power Operated Embroidery Machine - 5 No.</li>
                    </ul>
                  </div>
                  
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <h4 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-3">Computer Lab</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>High-end configuration Computer Systems - 30 No.</li>
                      <li>Garment CAD, Fashion & Textile CAD software</li>
                      <li>Inkjet printer</li>
                      <li>Internet facility</li>
                    </ul>
                  </div>
                  
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <h4 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-3">Textile Science Lab</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>Yarn Twist Tester - 01 no.</li>
                      <li>Micro Vision - 01 no.</li>
                      <li>Crock-o-Meter - 01 no.</li>
                      <li>Prespirometer - 01 no.</li>
                      <li>Water Bath - 02 no.</li>
                      <li>Beesley Balance - 01 no.</li>
                    </ul>
                  </div>
                  
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                    <h4 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-3">Additional Facilities</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>Apparel Manufacturing Studio equipped with Power Operated & High Speed sewing Machines</li>
                      <li>Departmental library with latest Magazines & Journals subscribed for the benefit of both staff & students</li>
                    </ul>
                  </div>
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
                    <img src={facultyImg} alt="Meera V" className="h-32 w-32 rounded-full object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-2 text-center">Meera V</h3>
                  <p className="text-[#D8315B] dark:text-[#ff7f9c] mb-4 text-center">Head of Department</p>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><span className="font-semibold">Educational Qualification:</span> Dip in CDDM, MA</p>
                    <p><span className="font-semibold">Area of Specialization:</span> Pattern Illustration Apparel CAD Embellishment</p>
                    <p className="flex items-center">
                      <Mail className="mr-2 h-4 w-4 text-[#3E92CC]" />
                      <a href="mailto:meera5871@gmail.com" className="text-[#3E92CC] hover:underline">meera5871@gmail.com</a>
                    </p>
                  </div>
                </div>

                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <div className="mb-4 flex justify-center">
                    <img src={facultyImg} alt="Roopashree" className="h-32 w-32 rounded-full object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-2 text-center">Roopashree</h3>
                  <p className="text-[#D8315B] dark:text-[#ff7f9c] mb-4 text-center">Lecturer</p>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><span className="font-semibold">Educational Qualification:</span> M. Sc-ATM, B. Sc FAD, Dip in ADFT</p>
                    <p><span className="font-semibold">Area of Specialization:</span> Technical textiles</p>
                    <p className="flex items-center">
                      <Mail className="mr-2 h-4 w-4 text-[#3E92CC]" />
                      <a href="mailto:roopahsk9@gmail.com" className="text-[#3E92CC] hover:underline">roopahsk9@gmail.com</a>
                    </p>
                  </div>
                </div>

                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <div className="mb-4 flex justify-center">
                    <img src={facultyImg} alt="Deepika T H" className="h-32 w-32 rounded-full object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-2 text-center">Deepika T H</h3>
                  <p className="text-[#D8315B] dark:text-[#ff7f9c] mb-4 text-center">Lecturer</p>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><span className="font-semibold">Educational Qualification:</span> MSc-FT</p>
                    <p><span className="font-semibold">Area of Specialization:</span> Art and craft pattern making</p>
                    <p className="flex items-center">
                      <Mail className="mr-2 h-4 w-4 text-[#3E92CC]" />
                      <a href="mailto:deepikasathist@gmail.com" className="text-[#3E92CC] hover:underline">deepikasathist@gmail.com</a>
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
                  <img src={buildingImg} alt="Apparel Design Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src={buildingImg} alt="Apparel Design Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src={buildingImg} alt="Apparel Design Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src={buildingImg} alt="Apparel Design Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src={buildingImg} alt="Apparel Design Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img src={buildingImg} alt="Apparel Design Department" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
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
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Annual Fashion Show</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Students showcase their designs at the annual fashion show, displaying their creativity and skills.</p>
                  <a href="#" className="inline-flex items-center text-[#3E92CC] hover:text-[#0A2463]">
                    <Download className="mr-2 h-4 w-4" />
                    Download Event Details (PDF)
                  </a>
                </div>
                
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Design Workshop</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Regular design workshops are conducted to enhance students' creative abilities.</p>
                  <a href="#" className="inline-flex items-center text-[#3E92CC] hover:text-[#0A2463]">
                    <Download className="mr-2 h-4 w-4" />
                    Download Workshop Schedule (PDF)
                  </a>
                </div>
                
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Industry Visits</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Students are taken to textile and garment manufacturing industries to gain practical exposure.</p>
                  <a href="#" className="inline-flex items-center text-[#3E92CC] hover:text-[#0A2463]">
                    <Download className="mr-2 h-4 w-4" />
                    Download Visit Reports (PDF)
                  </a>
                </div>
                
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Technical Seminar</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Regular technical seminars are organized to keep students updated with latest trends in fashion technology.</p>
                  <a href="#" className="inline-flex items-center text-[#3E92CC] hover:text-[#0A2463]">
                    <Download className="mr-2 h-4 w-4" />
                    Download Seminar Materials (PDF)
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
                      <p className="font-semibold text-[#0A2463] dark:text-white">Meera V</p>
                      <p className="text-gray-700 dark:text-gray-300">HOD</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="mr-3 h-5 w-5 text-[#3E92CC]" />
                    <a href="tel:9480967228" className="text-gray-700 dark:text-gray-300 hover:text-[#3E92CC]">9480967228</a>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="mr-3 h-5 w-5 text-[#3E92CC]" />
                    <a href="mailto:meera5871@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-[#3E92CC]">meera5871@gmail.com</a>
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
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Apparel Design and Fabrication Technology Diploma Program Syllabus</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">Access the complete syllabus for the Apparel Design and Fabrication Technology Diploma Program.</p>
                
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

export default ApparelDesign;