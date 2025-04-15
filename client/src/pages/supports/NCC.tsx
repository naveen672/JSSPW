import { ArrowLeft, Flag, Award, Target, Shield, Calendar, MapPin, BookOpen, Users, Star } from "lucide-react";
import buildingImg from "@assets/bg2.jpg";

const NCC = () => {
  // Sample certificates and exams
  const nccCertificates = [
    {
      name: "NCC 'A' Certificate",
      eligibility: "After one year of training",
      benefits: "Preference in admissions, additional marks in some institutions"
    },
    {
      name: "NCC 'B' Certificate",
      eligibility: "After two years of training",
      benefits: "Preference in government jobs, exemptions in certain exams"
    },
    {
      name: "NCC 'C' Certificate",
      eligibility: "After three years of training",
      benefits: "Direct entry in Officer Training Academy, bonus marks in competitive exams"
    }
  ];

  // Sample recent activities
  const recentActivities = [
    {
      title: "Annual Training Camp",
      date: "February 5-15, 2025",
      location: "Mysore Military Station",
      description: "10-day residential training focusing on drill, weapon training, map reading, and other military skills."
    },
    {
      title: "Republic Day Parade",
      date: "January 26, 2025",
      location: "Mysore Palace Grounds",
      description: "Our cadets participated in the district-level Republic Day parade, showcasing precision drill movements."
    },
    {
      title: "Adventure Trekking Expedition",
      date: "December 10-15, 2024",
      location: "Western Ghats, Karnataka",
      description: "Five-day trekking expedition for senior cadets to develop leadership and survival skills in challenging terrains."
    }
  ];

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
          <h1 className="text-3xl font-bold text-[#0A2463] dark:text-white md:text-4xl">National Cadet Corps (NCC)</h1>
        </div>
        
        {/* Featured Image */}
        <div className="mb-12 overflow-hidden rounded-lg shadow-lg">
          <img 
            src={buildingImg} 
            alt="NCC Activities at JSS Polytechnic" 
            className="h-64 w-full object-cover"
          />
        </div>
        
        {/* Introduction */}
        <div className="mb-12">
          <div className="rounded-lg bg-white dark:bg-gray-800 p-8 shadow-md border border-gray-100 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <Flag className="h-10 w-10 text-[#D8315B] mr-4" />
              <h2 className="text-2xl font-bold text-[#0A2463] dark:text-white">Unity and Discipline</h2>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The National Cadet Corps (NCC) at JSS Polytechnic for Women instills values of character, discipline, leadership, and a spirit of selfless service among students. Our NCC unit provides unique opportunities for personal growth through military training, adventure activities, and community service.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300">
              The NCC program aims to develop leadership qualities, character, comradeship, courage, discipline, a secular outlook, and the spirit of adventure among youth. Through its structured training curriculum, cadets develop a sense of patriotism, service orientation, and become capable leaders in all walks of life.
            </p>
          </div>
        </div>
        
        {/* NCC Aims and Objectives */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-[#0A2463] dark:text-white">Aims and Objectives</h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md border border-gray-100 dark:border-gray-700">
              <Shield className="h-10 w-10 text-[#3E92CC] mb-4" />
              <h3 className="mb-2 text-lg font-semibold text-[#0A2463] dark:text-white">Character Development</h3>
              <p className="text-gray-700 dark:text-gray-300">Developing qualities of character, courage, comradeship, discipline, leadership, secular outlook, spirit of adventure, and ideals of selfless service.</p>
            </div>
            
            <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md border border-gray-100 dark:border-gray-700">
              <Target className="h-10 w-10 text-[#3E92CC] mb-4" />
              <h3 className="mb-2 text-lg font-semibold text-[#0A2463] dark:text-white">Leadership Training</h3>
              <p className="text-gray-700 dark:text-gray-300">Creating a trained human resource with leadership qualities and motivating youth to choose the Armed Forces as a career.</p>
            </div>
            
            <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md border border-gray-100 dark:border-gray-700">
              <Users className="h-10 w-10 text-[#3E92CC] mb-4" />
              <h3 className="mb-2 text-lg font-semibold text-[#0A2463] dark:text-white">Social Service</h3>
              <p className="text-gray-700 dark:text-gray-300">Engaging cadets in social service activities and community development, instilling values of selfless service and contribution to nation-building.</p>
            </div>
          </div>
        </div>
        
        {/* NCC Unit Details */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-[#0A2463] dark:text-white">NCC Unit at JSS Polytechnic</h2>
          
          <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md border border-gray-100 dark:border-gray-700">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-semibold text-[#0A2463] dark:text-white">Unit Information</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li><span className="font-semibold">Unit Type:</span> Girls Battalion (Army Wing)</li>
                  <li><span className="font-semibold">Company:</span> 3 Karnataka Girls Battalion NCC</li>
                  <li><span className="font-semibold">Strength:</span> 50 Cadets</li>
                  <li><span className="font-semibold">Enrollment:</span> Open to all first-year students</li>
                </ul>
              </div>
              
              <div>
                <h3 className="mb-4 text-xl font-semibold text-[#0A2463] dark:text-white">NCC Officers</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li><span className="font-semibold">Associate NCC Officer:</span> Lt. Meenakshi Sharma</li>
                  <li><span className="font-semibold">Department:</span> Electronics & Communication Engineering</li>
                  <li><span className="font-semibold">Contact:</span> ncc@jsspwmys.org</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Training and Activities */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-[#0A2463] dark:text-white">Training and Activities</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md border border-gray-100 dark:border-gray-700">
              <h3 className="mb-4 text-xl font-semibold text-[#0A2463] dark:text-white">Regular Training</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#3E92CC] mr-2">•</span>
                  <span>Weekly parade training (Saturdays, 2:00 PM - 5:00 PM)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3E92CC] mr-2">•</span>
                  <span>Drill and physical training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3E92CC] mr-2">•</span>
                  <span>Weapon training and firing practice</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3E92CC] mr-2">•</span>
                  <span>Map reading and navigation skills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3E92CC] mr-2">•</span>
                  <span>Disaster management training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3E92CC] mr-2">•</span>
                  <span>First aid and health awareness</span>
                </li>
              </ul>
            </div>
            
            <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md border border-gray-100 dark:border-gray-700">
              <h3 className="mb-4 text-xl font-semibold text-[#0A2463] dark:text-white">Annual Camps</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#3E92CC] mr-2">•</span>
                  <span>Annual Training Camp (ATC) - 10 days</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3E92CC] mr-2">•</span>
                  <span>Combined Annual Training Camp (CATC)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3E92CC] mr-2">•</span>
                  <span>Republic Day Camp (RDC) Selection Camps</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3E92CC] mr-2">•</span>
                  <span>Trekking and adventurous activities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3E92CC] mr-2">•</span>
                  <span>National Integration Camps (NIC)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Certificates and Examinations */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-[#0A2463] dark:text-white">NCC Certificates</h2>
          
          <div className="space-y-6">
            {nccCertificates.map((certificate, index) => (
              <div key={index} className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-[#D8315B] mr-3" />
                  <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white">{certificate.name}</h3>
                </div>
                <div className="ml-9 space-y-2 text-gray-700 dark:text-gray-300">
                  <p><span className="font-semibold">Eligibility:</span> {certificate.eligibility}</p>
                  <p><span className="font-semibold">Benefits:</span> {certificate.benefits}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Recent Activities */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-[#0A2463] dark:text-white">Recent Activities</h2>
          
          <div className="space-y-6">
            {recentActivities.map((activity, index) => (
              <div key={index} className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-[#0A2463] dark:text-white">{activity.title}</h3>
                <div className="flex flex-wrap mb-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center mr-6 mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{activity.date}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{activity.location}</span>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Achievements */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-[#0A2463] dark:text-white">Notable Achievements</h2>
          
          <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md border border-gray-100 dark:border-gray-700">
            <div className="space-y-4">
              <div className="flex items-start">
                <Star className="h-5 w-5 text-[#D8315B] mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-[#0A2463] dark:text-white">Republic Day Camp Participation</h3>
                  <p className="text-gray-700 dark:text-gray-300">Two cadets selected for the prestigious Republic Day Camp in New Delhi in 2025.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Star className="h-5 w-5 text-[#D8315B] mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-[#0A2463] dark:text-white">Best Cadet Award</h3>
                  <p className="text-gray-700 dark:text-gray-300">Cadet Anjali Sharma received the Best Cadet Award at the Karnataka & Goa Directorate level in 2024.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Star className="h-5 w-5 text-[#D8315B] mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-[#0A2463] dark:text-white">Inter-Group Competition</h3>
                  <p className="text-gray-700 dark:text-gray-300">Our drill squad secured first place in the Inter-Group Competition held at Mysore in 2024.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Star className="h-5 w-5 text-[#D8315B] mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-[#0A2463] dark:text-white">Thal Sainik Camp</h3>
                  <p className="text-gray-700 dark:text-gray-300">Three cadets represented Karnataka & Goa Directorate at the Thal Sainik Camp in Delhi.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Join NCC */}
        <div className="rounded-lg bg-gradient-to-r from-[#0A2463] to-[#3E92CC] p-8 shadow-lg text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h2 className="text-2xl font-bold mb-2">Join NCC</h2>
              <p className="text-gray-100">
                Enrollment for NCC is conducted at the beginning of each academic year for first-year students. Interested students can contact the NCC office or the Associate NCC Officer for application details and selection process.
              </p>
            </div>
            <div className="flex-shrink-0">
              <button className="bg-white text-[#0A2463] px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                Contact NCC Office
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NCC;