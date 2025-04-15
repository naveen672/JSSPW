import { ArrowRight, Building2, User, Award, GraduationCap } from "lucide-react";
import buildingImg from "../assets/bg1.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#0A2463] dark:text-white md:text-4xl">About JSS Polytechnic For Women</h2>
          <div className="mx-auto h-1 w-24 bg-[#D8315B]"></div>
        </div>
        
        <div className="grid gap-12 md:grid-cols-2">
          <div className="animate-on-scroll">
            <h3 className="mb-6 text-2xl font-semibold text-[#0A2463] dark:text-white">Our Mission & Vision</h3>
            <p className="mb-6 text-[#1C1C1C] dark:text-gray-300">
              JSS Polytechnic For Women is dedicated to empowering women through quality technical education, fostering innovation, and developing industry-ready professionals. Our vision is to be a premier technical institution that transforms young women into skilled, confident, and socially responsible engineers.
            </p>
            <p className="mb-6 text-[#1C1C1C] dark:text-gray-300">
              Established under the JSS Mahavidyapeetha, we have been committed to providing exceptional technical education exclusively for women. Our institute has consistently maintained excellence in academics, placement, and creating a supportive environment for women to excel in STEM fields.
            </p>
            <div className="mt-8">
              <a href="#" className="inline-flex items-center font-medium text-[#0A2463] dark:text-blue-400 hover:text-[#D8315B] dark:hover:text-[#D8315B]">
                Learn more about our institution
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div className="animate-on-scroll overflow-hidden rounded-lg shadow-lg">
            <img 
              src={buildingImg} 
              alt="JSS Polytechnic For Women campus building" 
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
        
        {/* Key Stats */}
        <div className="mt-20 grid gap-6 rounded-lg bg-[#F3F4F6] dark:bg-gray-800 p-8 md:grid-cols-4">
          <div className="animate-on-scroll text-center">
            <Building2 className="mx-auto mb-4 h-12 w-12 text-[#3E92CC]" />
            <h4 className="mb-2 text-xl font-semibold text-[#0A2463] dark:text-white">Established</h4>
            <p className="text-[#1C1C1C] dark:text-gray-300">Under JSS Mahavidyapeetha, a premier educational group</p>
          </div>
          
          <div className="animate-on-scroll text-center">
            <User className="mx-auto mb-4 h-12 w-12 text-[#3E92CC]" />
            <h4 className="mb-2 text-xl font-semibold text-[#0A2463] dark:text-white">1000+ Students</h4>
            <p className="text-[#1C1C1C] dark:text-gray-300">Focused exclusively on women's technical education</p>
          </div>
          
          <div className="animate-on-scroll text-center">
            <Award className="mx-auto mb-4 h-12 w-12 text-[#3E92CC]" />
            <h4 className="mb-2 text-xl font-semibold text-[#0A2463] dark:text-white">#1 in Region</h4>
            <p className="text-[#1C1C1C] dark:text-gray-300">For women's technical education and placement</p>
          </div>
          
          <div className="animate-on-scroll text-center">
            <GraduationCap className="mx-auto mb-4 h-12 w-12 text-[#3E92CC]" />
            <h4 className="mb-2 text-xl font-semibold text-[#0A2463] dark:text-white">95% Placement</h4>
            <p className="text-[#1C1C1C] dark:text-gray-300">Excellent industry connections for career growth</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
