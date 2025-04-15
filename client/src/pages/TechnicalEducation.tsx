import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import dhananjayaImg from "@assets/dhananjaya.jpg";

const TechnicalEducation = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <div className="mb-8 flex items-center">
          <Link href="/#about">
            <a className="mr-4 inline-flex items-center text-[#0A2463] dark:text-blue-400 hover:text-[#D8315B]">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back
            </a>
          </Link>
          <h1 className="text-3xl font-bold text-[#0A2463] dark:text-white md:text-4xl">Technical Education under JSSMVP</h1>
        </div>
        
        {/* Advisor Profile */}
        <div className="mb-12 rounded-lg bg-white dark:bg-gray-800 p-8 shadow-lg">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex justify-center">
              <div className="overflow-hidden rounded-lg border-4 border-[#0A2463] dark:border-blue-400 shadow-lg h-80 w-64">
                <img 
                  src={dhananjayaImg} 
                  alt="Prof. M H Dhananjaya" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h2 className="mb-4 text-2xl font-bold text-[#0A2463] dark:text-white">Prof. M H Dhananjaya</h2>
              <h3 className="mb-6 text-xl font-semibold text-[#D8315B] dark:text-[#D8315B]">Advisor, Technical Education Division, JSSMVP</h3>
              
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                In its National Education Policy, the Central Government has accorded great importance to technical education. In keeping with the national policy and responding to the local needs of the society, the JSS Mahavidyapeetha has given importance to technical education. At a time when there were not many facilities for technical education, the establishment of Sri Jayachamarajendra College of Engineering in Mysore in the early 1960s by the JSS MVP laid a firm foundation for technical education in the private sector.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300">
                The Technical Education Division of JSSMVP provides guidance to the technical education institutes. Under the Division, there were 4 engineering colleges, including those in Mauritius and NOIDA, 4 polytechnics (1 for women and 1 for the differently abled students), 3 Industrial Training Centres, 1 International Institutes of Professional Studies and 3 STEPS (Science and Technology Entrepreneurs' Park) attached to engineering colleges and some other institutions. Under the able guidance of Prof. M.H. Dhananjaya, Director of Technical Education and Dr. C Ranganathaiah, Director (Academic & Administrative) these institutions is achieving its goal in providing trained technical manpower to the country through the qualified and committed staff members with the state-of-the-art infrastructure.
              </p>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="space-y-6">
          <h2 className="mb-6 text-2xl font-semibold text-[#0A2463] dark:text-white">Technical Education at JSS</h2>
          
          <p className="text-gray-700 dark:text-gray-300">
            JSS Mahavidyapeetha has made significant contributions to technical education in India through its network of engineering colleges, polytechnics, and technical training institutes. The organization recognized early the importance of technical education in nation-building and economic development.
          </p>
          
          <p className="text-gray-700 dark:text-gray-300">
            With a focus on providing quality technical education to students from all backgrounds, JSS Mahavidyapeetha has established numerous technical institutions across Karnataka and other states. These institutions offer a wide range of technical programs in various disciplines including engineering, computer science, electronics, mechanical engineering, and more.
          </p>
          
          <p className="text-gray-700 dark:text-gray-300">
            What sets JSS technical institutions apart is their strong industry connections, state-of-the-art infrastructure, experienced faculty, and commitment to practical, hands-on learning. Students at JSS technical institutions benefit from industry-aligned curricula, internship opportunities, and placement support.
          </p>
          
          <p className="text-gray-700 dark:text-gray-300">
            JSS Polytechnic For Women is one such pioneering institution that focuses exclusively on providing technical education to women, empowering them to excel in fields traditionally dominated by men. The institution offers diploma programs in various engineering disciplines and has been instrumental in increasing women's participation in technical fields.
          </p>
        </div>
        
        {/* Technical Education Categories */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md">
            <h4 className="mb-3 text-xl font-semibold text-[#0A2463] dark:text-white">Engineering Colleges</h4>
            <p className="text-gray-700 dark:text-gray-300">Offering undergraduate and postgraduate programs in various engineering disciplines.</p>
          </div>
          
          <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md">
            <h4 className="mb-3 text-xl font-semibold text-[#0A2463] dark:text-white">Polytechnics</h4>
            <p className="text-gray-700 dark:text-gray-300">Providing diploma-level technical education with a focus on practical skills and industry readiness.</p>
          </div>
          
          <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md">
            <h4 className="mb-3 text-xl font-semibold text-[#0A2463] dark:text-white">Technical Training Centers</h4>
            <p className="text-gray-700 dark:text-gray-300">Offering short-term courses and certifications in technical skills for immediate employment.</p>
          </div>
          
          <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md">
            <h4 className="mb-3 text-xl font-semibold text-[#0A2463] dark:text-white">Research Facilities</h4>
            <p className="text-gray-700 dark:text-gray-300">Supporting innovation and technological advancement through well-equipped research centers.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalEducation;