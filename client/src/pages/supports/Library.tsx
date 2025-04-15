import { ArrowLeft, Book, BookOpen, GraduationCap, Clock, Database, Newspaper } from "lucide-react";
import buildingImg from "@assets/bg2.jpg";

const Library = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <div className="mb-8 flex items-center">
          <a 
            href="/#supports" 
            className="mr-4 inline-flex items-center text-[#0A2463] dark:text-blue-400 hover:text-[#D8315B]"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back
          </a>
          <h1 className="text-3xl font-bold text-[#0A2463] dark:text-white md:text-4xl">Library</h1>
        </div>
        
        {/* Featured Image */}
        <div className="mb-12 overflow-hidden rounded-lg shadow-lg">
          <img 
            src={buildingImg} 
            alt="JSS Polytechnic Library" 
            className="h-64 w-full object-cover"
          />
        </div>
        
        {/* Introduction */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-[#0A2463] dark:text-white">About Our Library</h2>
          
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            The Library at JSS Polytechnic for Women serves as a central hub for academic resources, fostering intellectual growth and supporting the educational journey of our students. Established along with the founding of the institution, our library has grown into a comprehensive resource center with a vast collection of books, journals, and digital resources.
          </p>
          
          <p className="text-gray-700 dark:text-gray-300">
            Our library is designed to provide a conducive environment for study and research, with spacious reading areas, dedicated reference sections, and modern digital facilities. We are committed to supporting the diverse academic needs of our students and faculty across all technical programs.
          </p>
        </div>
        
        {/* Library Collection */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-[#0A2463] dark:text-white">Library Collection</h2>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md text-center">
              <Book className="mx-auto mb-4 h-12 w-12 text-[#3E92CC]" />
              <h3 className="mb-2 text-xl font-semibold text-[#0A2463] dark:text-white">15,000+</h3>
              <p className="text-gray-700 dark:text-gray-300">Books covering technical subjects, reference materials, and general knowledge</p>
            </div>
            
            <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md text-center">
              <Newspaper className="mx-auto mb-4 h-12 w-12 text-[#3E92CC]" />
              <h3 className="mb-2 text-xl font-semibold text-[#0A2463] dark:text-white">50+</h3>
              <p className="text-gray-700 dark:text-gray-300">Journals and periodicals in technical and non-technical fields</p>
            </div>
            
            <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md text-center">
              <Database className="mx-auto mb-4 h-12 w-12 text-[#3E92CC]" />
              <h3 className="mb-2 text-xl font-semibold text-[#0A2463] dark:text-white">Digital Resources</h3>
              <p className="text-gray-700 dark:text-gray-300">Access to e-books, online journals, and research databases</p>
            </div>
          </div>
        </div>
        
        {/* Library Facilities */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-[#0A2463] dark:text-white">Facilities</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold text-[#0A2463] dark:text-white">Reading Area</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Spacious, well-lit reading areas with seating capacity for 100+ students simultaneously. The quiet environment is perfect for focused study and research.
              </p>
            </div>
            
            <div className="rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold text-[#0A2463] dark:text-white">Digital Section</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Computer terminals with internet access for online research, digital resource access, and catalog searching. Wi-Fi connectivity throughout the library.
              </p>
            </div>
            
            <div className="rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold text-[#0A2463] dark:text-white">Reference Section</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Dedicated area for reference materials, including encyclopedias, dictionaries, handbooks, and rare technical publications that are available for in-library use.
              </p>
            </div>
            
            <div className="rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold text-[#0A2463] dark:text-white">Photocopy & Printing</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Photocopying and printing services available at nominal rates for academic purposes, helping students access materials they need for coursework.
              </p>
            </div>
          </div>
        </div>
        
        {/* Library Hours & Rules */}
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl font-semibold text-[#0A2463] dark:text-white">Library Hours</h2>
            
            <div className="rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Clock className="mr-3 h-6 w-6 text-[#3E92CC]" />
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white">Operating Hours</h3>
              </div>
              
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><span className="font-semibold">Monday to Friday:</span> 9:00 AM to 5:00 PM</p>
                <p><span className="font-semibold">Saturday:</span> 9:00 AM to 1:00 PM</p>
                <p><span className="font-semibold">Sundays & Public Holidays:</span> Closed</p>
                <p className="mt-4"><span className="font-semibold">Extended Hours During Exams:</span> 8:00 AM to 7:00 PM (Monday to Friday)</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="mb-6 text-2xl font-semibold text-[#0A2463] dark:text-white">Borrowing Rules</h2>
            
            <div className="rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <BookOpen className="mr-3 h-6 w-6 text-[#3E92CC]" />
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white">Lending Policy</h3>
              </div>
              
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><span className="font-semibold">Students:</span> Can borrow up to 3 books for 14 days</p>
                <p><span className="font-semibold">Faculty:</span> Can borrow up to 5 books for 30 days</p>
                <p><span className="font-semibold">Reference Materials:</span> For in-library use only</p>
                <p><span className="font-semibold">Late Fees:</span> ₹1 per day per book</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Library Staff & Contact */}
        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-semibold text-[#0A2463] dark:text-white">Library Staff & Contact</h2>
          
          <div className="rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-semibold text-[#0A2463] dark:text-white">Staff</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li><span className="font-semibold">Chief Librarian:</span> Mr. Ramesh Kumar</li>
                  <li><span className="font-semibold">Assistant Librarian:</span> Ms. Priya Sharma</li>
                  <li><span className="font-semibold">Library Assistants:</span> 3</li>
                </ul>
              </div>
              
              <div>
                <h3 className="mb-4 text-xl font-semibold text-[#0A2463] dark:text-white">Contact Information</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li><span className="font-semibold">Email:</span> library@jsspwmys.org</li>
                  <li><span className="font-semibold">Phone:</span> +91-821-2548245</li>
                  <li><span className="font-semibold">Location:</span> Ground Floor, Main Building</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;