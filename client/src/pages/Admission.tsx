import { ArrowLeft, FileText, GraduationCap, ClipboardList, AlertCircle, Calendar, CheckCircle, Building } from "lucide-react";
import buildingImg from "@assets/bg1.jpg";

const Admission = () => {
  // Sample diploma programs
  const diplomaPrograms = [
    {
      name: "Architecture",
      code: "AR",
      duration: "3 Years",
      seats: 60,
    },
    {
      name: "Commercial Practice",
      code: "CP",
      duration: "3 Years",
      seats: 60,
    },
    {
      name: "Computer Science & Engineering",
      code: "CS",
      duration: "3 Years",
      seats: 60,
    },
    {
      name: "Electronics & Communication Engineering",
      code: "EC",
      duration: "3 Years",
      seats: 60,
    },
    {
      name: "Electronics & Instrumentation Engineering",
      code: "EI",
      duration: "3 Years",
      seats: 30,
    },
    {
      name: "Information Science Engineering",
      code: "IS",
      duration: "3 Years",
      seats: 60,
    },
    {
      name: "Interior Design",
      code: "ID",
      duration: "3 Years",
      seats: 40,
    },
    {
      name: "Apparel Design & Fabrication Technology",
      code: "AT",
      duration: "3 Years",
      seats: 40,
    },
  ];

  // Important dates for the admission process
  const importantDates = [
    {
      event: "Online Application Portal Opens",
      date: "May 1, 2025"
    },
    {
      event: "Application Submission Deadline",
      date: "June 15, 2025"
    },
    {
      event: "Publication of Merit List",
      date: "June 30, 2025"
    },
    {
      event: "First Round of Admission Counseling",
      date: "July 10-15, 2025"
    },
    {
      event: "Second Round of Admission Counseling",
      date: "July 25-30, 2025"
    },
    {
      event: "Classes Begin for First Year",
      date: "August 10, 2025"
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <div className="mb-8 flex items-center">
          <a 
            href="/#admission" 
            className="mr-4 inline-flex items-center text-[#0A2463] dark:text-blue-400 hover:text-[#D8315B]"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back
          </a>
          <h1 className="text-3xl font-bold text-[#0A2463] dark:text-white md:text-4xl">Admission</h1>
        </div>
        
        {/* Featured Image */}
        <div className="mb-12 overflow-hidden rounded-lg shadow-lg">
          <img 
            src={buildingImg} 
            alt="JSS Polytechnic For Women Campus" 
            className="h-64 w-full object-cover"
          />
        </div>
        
        {/* Introduction */}
        <div className="mb-12">
          <div className="rounded-lg bg-white dark:bg-gray-800 p-8 shadow-md border border-gray-100 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <GraduationCap className="h-10 w-10 text-[#3E92CC] mr-4" />
              <h2 className="text-2xl font-bold text-[#0A2463] dark:text-white">Admission Process 2025-26</h2>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              JSS Polytechnic for Women, Mysore invites applications for admission to various Diploma Programs for the academic year 2025-26. The institution is committed to providing quality technical education exclusively for women, with a focus on academic excellence and industry-ready skill development.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300">
              Admissions to all diploma programs are based on merit and in accordance with the guidelines provided by the Directorate of Technical Education, Government of Karnataka. The selection process ensures equal opportunities for all eligible candidates.
            </p>
          </div>
        </div>
        
        {/* Programs Offered */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-[#0A2463] dark:text-white">Programs Offered</h2>
          
          <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 shadow-md">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Program</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Code</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Duration</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Seats</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                {diplomaPrograms.map((program, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{program.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{program.code}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{program.duration}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{program.seats}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Eligibility Criteria */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-[#0A2463] dark:text-white">Eligibility Criteria</h2>
          
          <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md border border-gray-100 dark:border-gray-700">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Academic Qualifications</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Pass in SSLC (10th Standard) or equivalent examination with English as one of the languages.</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Minimum aggregate of 35% marks in all subjects (for General Category).</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Relaxation in minimum marks for SC/ST/OBC candidates as per Government of Karnataka norms.</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Age Limit</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Candidate should be at least 16 years of age as on August 1, 2025.</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Upper age limit relaxation as per Government norms.</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mb-3">Gender</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  As JSS Polytechnic for Women is exclusively for female candidates, only women candidates are eligible to apply.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Application Process */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-[#0A2463] dark:text-white">Application Process</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md border border-gray-100 dark:border-gray-700">
              <ClipboardList className="h-10 w-10 text-[#3E92CC] mb-4" />
              <h3 className="mb-4 text-xl font-semibold text-[#0A2463] dark:text-white">How to Apply</h3>
              <ol className="space-y-3 text-gray-700 dark:text-gray-300 list-decimal pl-5">
                <li>
                  <span className="font-semibold">Online Application:</span> Fill the online application form available on the official website of the Directorate of Technical Education, Karnataka.
                </li>
                <li>
                  <span className="font-semibold">Document Upload:</span> Upload scanned copies of all required documents (SSLC marks card, caste certificate if applicable, etc.).
                </li>
                <li>
                  <span className="font-semibold">Application Fee:</span> Pay the application fee online (₹300 for General & OBC, ₹100 for SC/ST/Category-I candidates).
                </li>
                <li>
                  <span className="font-semibold">Submission:</span> Submit the application and take a printout of the confirmation page for future reference.
                </li>
              </ol>
            </div>
            
            <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md border border-gray-100 dark:border-gray-700">
              <FileText className="h-10 w-10 text-[#3E92CC] mb-4" />
              <h3 className="mb-4 text-xl font-semibold text-[#0A2463] dark:text-white">Required Documents</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#3E92CC] mr-2">•</span>
                  <span>SSLC (10th) marks card</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3E92CC] mr-2">•</span>
                  <span>Transfer Certificate from last attended school</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3E92CC] mr-2">•</span>
                  <span>Caste Certificate (if applicable)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3E92CC] mr-2">•</span>
                  <span>Income Certificate (if applicable)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3E92CC] mr-2">•</span>
                  <span>Aadhar Card</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3E92CC] mr-2">•</span>
                  <span>Recent passport size photographs (4 copies)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3E92CC] mr-2">•</span>
                  <span>Migration Certificate (if applicable)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Admission Categories */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-[#0A2463] dark:text-white">Admission Categories</h2>
          
          <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md border border-gray-100 dark:border-gray-700">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-semibold text-[#0A2463] dark:text-white">Government Quota (75%)</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  75% of the total seats are filled through centralized admission process conducted by the Directorate of Technical Education, Government of Karnataka.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  These seats are allocated based on the merit list prepared by the DTE, with reservations for different categories as per government norms.
                </p>
              </div>
              
              <div>
                <h3 className="mb-4 text-xl font-semibold text-[#0A2463] dark:text-white">Management Quota (25%)</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  25% of the seats are filled through Management Quota admission process conducted by the JSS Mahavidyapeetha.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Interested candidates can apply directly to the institution for Management Quota seats. Selection will be based on merit and interview performance.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Important Dates */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-[#0A2463] dark:text-white">Important Dates</h2>
          
          <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 shadow-md">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Event</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                {importantDates.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{item.event}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 italic">
            Note: Dates are tentative and subject to change. Please visit the official website for the latest updates.
          </p>
        </div>
        
        {/* Fee Structure */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-[#0A2463] dark:text-white">Fee Structure</h2>
          
          <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md border border-gray-100 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The fee structure is determined by the Government of Karnataka and JSS Mahavidyapeetha. The following is the approximate annual fee structure for the academic year 2025-26:
            </p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Category</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Tuition Fee</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Special Fee</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Total</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Government Quota (General/OBC)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">₹8,000</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">₹5,000</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">₹13,000</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Government Quota (SC/ST)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">As per Govt. norms</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">₹5,000</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">₹5,000</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Management Quota</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">₹25,000</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">₹5,000</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">₹30,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Note: Additional fees may apply for hostel accommodation, transportation, and other facilities. The above fee structure is subject to revision as per the directives of the Government of Karnataka and JSS Mahavidyapeetha.
            </p>
          </div>
        </div>
        
        {/* Scholarship & Financial Aid */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-[#0A2463] dark:text-white">Scholarship & Financial Aid</h2>
          
          <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md border border-gray-100 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Various scholarships and financial aid options are available for eligible students:
            </p>
            
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-[#3E92CC] mr-2">•</span>
                <div>
                  <span className="font-semibold">Government Scholarships:</span> SC/ST/OBC scholarships as per government norms.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#3E92CC] mr-2">•</span>
                <div>
                  <span className="font-semibold">Merit Scholarships:</span> For academically excellent students.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#3E92CC] mr-2">•</span>
                <div>
                  <span className="font-semibold">Fee Concession:</span> For economically backward students based on family income.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#3E92CC] mr-2">•</span>
                <div>
                  <span className="font-semibold">JSS Mahavidyapeetha Scholarships:</span> Special scholarships for deserving students from rural backgrounds.
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md border border-gray-100 dark:border-gray-700">
          <h2 className="mb-6 text-2xl font-semibold text-[#0A2463] dark:text-white">Contact for Admission Enquiries</h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <Building className="h-10 w-10 text-[#3E92CC] mb-4" />
              <h3 className="mb-4 text-xl font-semibold text-[#0A2463] dark:text-white">Admission Office</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li><span className="font-semibold">Address:</span> JSS Polytechnic for Women, JSS Technical Institutions Campus, Manasagangothri, Mysore - 570006</li>
                <li><span className="font-semibold">Phone:</span> +91-821-2548235</li>
                <li><span className="font-semibold">Email:</span> admissions@jsspwmys.org</li>
                <li><span className="font-semibold">Office Hours:</span> Monday to Friday (9:00 AM to 5:00 PM)</li>
              </ul>
            </div>
            
            <div>
              <AlertCircle className="h-10 w-10 text-[#D8315B] mb-4" />
              <h3 className="mb-4 text-xl font-semibold text-[#0A2463] dark:text-white">Important Notice</h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>
                  <span className="font-semibold">Beware of Fraudulent Activities:</span> The institution does not authorize any agent or individual to process admissions on its behalf. All admissions are conducted through official channels only.
                </p>
                <p>
                  <span className="font-semibold">Original Documents:</span> Always verify the authenticity of admission-related communications by contacting the official admission office.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;