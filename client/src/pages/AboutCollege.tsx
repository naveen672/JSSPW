import { ArrowLeft, Building2, User, Award, GraduationCap } from "lucide-react";
import { Link } from "wouter";
import buildingImg from "../assets/bg1.jpg";
import principalImg from "@assets/prin.jpg";

const AboutCollege = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <div className="mb-8 flex items-center">
          <a 
            href="/#about" 
            className="mr-4 inline-flex items-center text-[#0A2463] dark:text-blue-400 hover:text-[#D8315B]"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back
          </a>
          <h1 className="text-3xl font-bold text-[#0A2463] dark:text-white md:text-4xl">About JSS Polytechnic For Women</h1>
        </div>
        
        {/* Featured Image */}
        <div className="mb-12 overflow-hidden rounded-lg shadow-lg">
          <img 
            src={buildingImg} 
            alt="JSS Polytechnic For Women campus" 
            className="h-full w-full object-cover"
          />
        </div>
        
        {/* Principal Profile */}
        <div className="mb-12 rounded-lg bg-white dark:bg-gray-800 p-8 shadow-lg">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex justify-center">
              <div className="overflow-hidden rounded-lg border-4 border-[#0A2463] dark:border-blue-400 shadow-lg h-80 w-64">
                <img 
                  src={principalImg} 
                  alt="Principal, JSS Polytechnic For Women" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h2 className="mb-4 text-2xl font-bold text-[#0A2463] dark:text-white">Principal's Message</h2>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                Welcome to JSS Polytechnic for Women, a premier institution dedicated to empowering women through quality technical education. Our commitment to excellence, innovation, and holistic development has positioned us as a leading polytechnic institution for women in the region.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300">
                At JSS Polytechnic for Women, we believe in nurturing not just technical skills but also fostering leadership qualities, entrepreneurial spirit, and a sense of social responsibility among our students. Our dedicated faculty, state-of-the-art infrastructure, and supportive learning environment ensure that our students receive the best education and training to excel in their chosen fields.
              </p>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="space-y-6">
          <h2 className="mb-6 text-2xl font-semibold text-[#0A2463] dark:text-white">Our History and Mission</h2>
          
          <p className="text-gray-700 dark:text-gray-300">
            JSS Polytechnic for women was established in the year 1980 and the institution is located in a sprawling campus of 55 acres at Manasagangothri, Mysore. The Polytechnic is governed by the Grant-In - Aid rules of Government of Karnataka and is under the purview of Directorate of Technical Education, Government of Karnataka.
          </p>
          
          <p className="text-gray-700 dark:text-gray-300">
            The Polytechnic is in the premises of the JSS Technical Institutions Campus and has a commendable infrastructure supported with full fledged staff, state-of-the-art laboratory and library. The Institution was started with Two courses in the year 1980 and now has Eight courses with a total strength of 887 students. The Institution was admitted to Grant-in-Aid status in 1983 and is receiving grants from Government since then.
          </p>
          
          <p className="text-gray-700 dark:text-gray-300">
            In addition to imparting diploma education, non-formal training programs are being organized, which are sponsored by Government of India/ World Bank/ State Government/ Community Development Through Polytechnic Schemes.
          </p>
          
          <p className="text-gray-700 dark:text-gray-300">
            The Institution has a sanctioned intake of 410 students. An adorable number of successful outgoing students are well placed in different Central/State Government Departments, MultiNational Companies, Public/Private Sector Industries, etc., and many are pursuing higher education in reputed colleges. Academic excellence achieved by our Polytechnic has made it as one of the most sought after Institutions in Karnataka.
          </p>
          
          <h2 className="mt-8 mb-6 text-2xl font-semibold text-[#0A2463] dark:text-white">Our Vision & Values</h2>
          
          <p className="text-gray-700 dark:text-gray-300">
            JSS Polytechnic For Women is dedicated to empowering women through quality technical education, fostering innovation, and developing industry-ready professionals. Our vision is to be a premier technical institution that transforms young women into skilled, confident, and socially responsible engineers.
          </p>
          
          <p className="text-gray-700 dark:text-gray-300">
            Established under the JSS Mahavidyapeetha, we have been committed to providing exceptional technical education exclusively for women. Our institute has consistently maintained excellence in academics, placement, and creating a supportive environment for women to excel in STEM fields.
          </p>
        </div>
        
        {/* Key Stats */}
        <div className="mt-12 grid gap-6 rounded-lg bg-[#F3F4F6] dark:bg-gray-800 p-8 md:grid-cols-4">
          <div className="text-center">
            <Building2 className="mx-auto mb-4 h-12 w-12 text-[#3E92CC]" />
            <h4 className="mb-2 text-xl font-semibold text-[#0A2463] dark:text-white">Established 1980</h4>
            <p className="text-gray-700 dark:text-gray-300">Located in a 55-acre campus at Manasagangothri, Mysore</p>
          </div>
          
          <div className="text-center">
            <User className="mx-auto mb-4 h-12 w-12 text-[#3E92CC]" />
            <h4 className="mb-2 text-xl font-semibold text-[#0A2463] dark:text-white">887 Students</h4>
            <p className="text-gray-700 dark:text-gray-300">Across eight technical diploma programs</p>
          </div>
          
          <div className="text-center">
            <Award className="mx-auto mb-4 h-12 w-12 text-[#3E92CC]" />
            <h4 className="mb-2 text-xl font-semibold text-[#0A2463] dark:text-white">Premier Institution</h4>
            <p className="text-gray-700 dark:text-gray-300">One of the most sought after polytechnics in Karnataka</p>
          </div>
          
          <div className="text-center">
            <GraduationCap className="mx-auto mb-4 h-12 w-12 text-[#3E92CC]" />
            <h4 className="mb-2 text-xl font-semibold text-[#0A2463] dark:text-white">Excellent Placement</h4>
            <p className="text-gray-700 dark:text-gray-300">In government departments, MNCs, and public sector industries</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCollege;