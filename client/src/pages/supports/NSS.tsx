import { ArrowLeft, Heart, Users, MapPin, Calendar, Award, BookOpen } from "lucide-react";
import buildingImg from "@assets/bg3.jpg";

const NSS = () => {
  // Sample recent activities - these would typically come from your database
  const recentActivities = [
    {
      title: "Tree Plantation Drive",
      date: "March 12, 2025",
      location: "JSS Campus & Surrounding Areas",
      description: "Planted over 200 saplings around the campus and nearby communities to promote environmental conservation and combat climate change."
    },
    {
      title: "Health Awareness Camp",
      date: "February 8, 2025",
      location: "Mysore Rural Areas",
      description: "Organized a health camp in collaboration with JSS Hospital to provide basic health checkups and awareness about common health issues in rural areas."
    },
    {
      title: "Blood Donation Camp",
      date: "January 25, 2025",
      location: "JSS Polytechnic Campus",
      description: "Conducted a successful blood donation drive with over 100 donors, contributing to the local blood bank's reserves."
    },
    {
      title: "Digital Literacy Workshop",
      date: "December 15, 2024",
      location: "Government Schools, Mysore",
      description: "Conducted workshops to teach basic computer skills to school children from underprivileged backgrounds."
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <div className="mb-8">
          <div className="mb-4">
            <a 
              href="/#supports" 
              className="inline-flex items-center text-[#0A2463] dark:text-blue-400 hover:text-[#D8315B]"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back
            </a>
          </div>
          <h1 className="text-3xl font-bold text-[#0A2463] dark:text-white md:text-4xl">National Service Scheme (NSS)</h1>
        </div>
        
        {/* Featured Image */}
        <div className="mb-12 overflow-hidden rounded-lg shadow-lg">
          <img 
            src={buildingImg} 
            alt="NSS Activities at JSS Polytechnic" 
            className="h-64 w-full object-cover"
          />
        </div>
        
        {/* Introduction */}
        <div className="mb-12">
          <div className="rounded-lg bg-white dark:bg-gray-800 p-8 shadow-md border border-gray-100 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <Heart className="h-10 w-10 text-[#D8315B] mr-4" />
              <h2 className="text-2xl font-bold text-[#0A2463] dark:text-white">Not Me But You</h2>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The National Service Scheme (NSS) at JSS Polytechnic for Women is an active unit dedicated to the motto "Not Me But You" - reflecting the essence of democratic living and the need for selfless service. Our NSS unit provides an opportunity for students to develop leadership skills, social awareness, and a sense of responsibility through community service.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300">
              The primary objective of NSS is to develop the personality and character of student volunteers through community service. The NSS unit of JSS Polytechnic for Women has been actively engaged in various community development programs, social service activities, and awareness campaigns since its inception.
            </p>
          </div>
        </div>
        
        {/* Key Objectives */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-[#0A2463] dark:text-white">Key Objectives</h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md border border-gray-100 dark:border-gray-700">
              <BookOpen className="h-10 w-10 text-[#3E92CC] mb-4" />
              <h3 className="mb-2 text-lg font-semibold text-[#0A2463] dark:text-white">Personality Development</h3>
              <p className="text-gray-700 dark:text-gray-300">Developing leadership qualities, character, and democratic values in students through service to the community.</p>
            </div>
            
            <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md border border-gray-100 dark:border-gray-700">
              <Users className="h-10 w-10 text-[#3E92CC] mb-4" />
              <h3 className="mb-2 text-lg font-semibold text-[#0A2463] dark:text-white">Community Service</h3>
              <p className="text-gray-700 dark:text-gray-300">Understanding the community in which they work and understanding themselves in relation to their community.</p>
            </div>
            
            <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md border border-gray-100 dark:border-gray-700">
              <Award className="h-10 w-10 text-[#3E92CC] mb-4" />
              <h3 className="mb-2 text-lg font-semibold text-[#0A2463] dark:text-white">Skill Development</h3>
              <p className="text-gray-700 dark:text-gray-300">Developing skills in practicing national integration and social harmony, and acquiring leadership qualities and democratic attitudes.</p>
            </div>
          </div>
        </div>
        
        {/* Unit Details */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-[#0A2463] dark:text-white">NSS Unit Details</h2>
          
          <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md border border-gray-100 dark:border-gray-700">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-semibold text-[#0A2463] dark:text-white">Program Officer</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li><span className="font-semibold">Name:</span> Prof. Deepa Lakshmi</li>
                  <li><span className="font-semibold">Department:</span> Computer Science & Engineering</li>
                  <li><span className="font-semibold">Contact:</span> nss@jsspwmys.org</li>
                </ul>
              </div>
              
              <div>
                <h3 className="mb-4 text-xl font-semibold text-[#0A2463] dark:text-white">Unit Information</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li><span className="font-semibold">Unit Code:</span> KAR/MDL/53</li>
                  <li><span className="font-semibold">Registered Volunteers:</span> 100</li>
                  <li><span className="font-semibold">Annual Service Hours:</span> 120 hours per volunteer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Activities */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-[#0A2463] dark:text-white">Regular Activities</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md border border-gray-100 dark:border-gray-700">
              <h3 className="mb-4 text-xl font-semibold text-[#0A2463] dark:text-white">Regular Programs</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex">
                  <span className="text-[#3E92CC] mr-2">•</span>
                  <span>Campus cleaning and beautification drives</span>
                </li>
                <li className="flex">
                  <span className="text-[#3E92CC] mr-2">•</span>
                  <span>Tree plantation and environmental awareness campaigns</span>
                </li>
                <li className="flex">
                  <span className="text-[#3E92CC] mr-2">•</span>
                  <span>Blood donation camps in collaboration with local hospitals</span>
                </li>
                <li className="flex">
                  <span className="text-[#3E92CC] mr-2">•</span>
                  <span>Health and hygiene awareness programs in neighboring communities</span>
                </li>
                <li className="flex">
                  <span className="text-[#3E92CC] mr-2">•</span>
                  <span>Digital literacy workshops for underprivileged communities</span>
                </li>
                <li className="flex">
                  <span className="text-[#3E92CC] mr-2">•</span>
                  <span>Road safety awareness campaigns</span>
                </li>
              </ul>
            </div>
            
            <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md border border-gray-100 dark:border-gray-700">
              <h3 className="mb-4 text-xl font-semibold text-[#0A2463] dark:text-white">Special Camps</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Each NSS volunteer is required to participate in a Special Camp of 7 days duration in a rural area. During this camp, volunteers engage in:
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex">
                  <span className="text-[#3E92CC] mr-2">•</span>
                  <span>Community development projects in adopted villages</span>
                </li>
                <li className="flex">
                  <span className="text-[#3E92CC] mr-2">•</span>
                  <span>Conducting surveys on rural problems and needs</span>
                </li>
                <li className="flex">
                  <span className="text-[#3E92CC] mr-2">•</span>
                  <span>Implementing small-scale infrastructure improvements</span>
                </li>
                <li className="flex">
                  <span className="text-[#3E92CC] mr-2">•</span>
                  <span>Organizing awareness programs on government schemes</span>
                </li>
                <li className="flex">
                  <span className="text-[#3E92CC] mr-2">•</span>
                  <span>Cultural exchange and integration activities</span>
                </li>
              </ul>
            </div>
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
        
        {/* Join NSS */}
        <div className="rounded-lg bg-gradient-to-r from-[#0A2463] to-[#3E92CC] p-8 shadow-lg text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h2 className="text-2xl font-bold mb-2">Join the NSS Unit</h2>
              <p className="text-gray-100">
                Become a part of our NSS family and contribute to society while developing leadership skills and creating lasting friendships. Enrollment is open for first-year students at the beginning of each academic year.
              </p>
            </div>
            <div className="flex-shrink-0">
              <button className="bg-white text-[#0A2463] px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                Contact NSS Office
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NSS;