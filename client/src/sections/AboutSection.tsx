import { ArrowRight, Building2, User, Globe } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#0A2463] md:text-4xl">About Horizon College</h2>
          <div className="mx-auto h-1 w-24 bg-[#D8315B]"></div>
        </div>
        
        <div className="grid gap-12 md:grid-cols-2">
          <div className="animate-on-scroll">
            <h3 className="mb-6 text-2xl font-semibold text-[#0A2463]">Our Mission & Vision</h3>
            <p className="mb-6 text-[#1C1C1C]">
              Horizon College is dedicated to fostering intellectual growth, cultivating leadership, and promoting the pursuit of knowledge in service to society. Our vision is to be a dynamic community where innovation, creativity, and excellence thrive.
            </p>
            <p className="mb-6 text-[#1C1C1C]">
              Founded in 1905, we have a rich history of academic excellence and community engagement that spans over a century. Our campus community embraces diversity, inclusivity, and a shared commitment to making a positive impact on the world.
            </p>
            <div className="mt-8">
              <a href="#" className="inline-flex items-center font-medium text-[#0A2463] hover:text-[#D8315B]">
                Learn more about our history
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div className="animate-on-scroll overflow-hidden rounded-lg shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Horizon College campus main building with historic architecture" 
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
        
        {/* Key Stats */}
        <div className="mt-20 grid gap-6 rounded-lg bg-[#F3F4F6] p-8 md:grid-cols-3">
          <div className="animate-on-scroll text-center">
            <Building2 className="mx-auto mb-4 h-12 w-12 text-[#3E92CC]" />
            <h4 className="mb-2 text-xl font-semibold text-[#0A2463]">Established 1905</h4>
            <p className="text-[#1C1C1C]">Over a century of academic excellence and tradition</p>
          </div>
          
          <div className="animate-on-scroll text-center">
            <User className="mx-auto mb-4 h-12 w-12 text-[#3E92CC]" />
            <h4 className="mb-2 text-xl font-semibold text-[#0A2463]">12,000+ Students</h4>
            <p className="text-[#1C1C1C]">A diverse community from 80+ countries</p>
          </div>
          
          <div className="animate-on-scroll text-center">
            <Globe className="mx-auto mb-4 h-12 w-12 text-[#3E92CC]" />
            <h4 className="mb-2 text-xl font-semibold text-[#0A2463]">Top 5% Globally</h4>
            <p className="text-[#1C1C1C]">Consistently ranked among the world's best</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
