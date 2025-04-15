import { Twitter, Linkedin, Mail } from "lucide-react";
import principalImg from "../assets/prin.jpg";

const facultyData = [
  {
    id: 1,
    name: "Dr. B.G. Lokesha",
    title: "Principal",
    bio: "Ph.D. in Engineering with extensive experience in technical education and leadership at JSS Mahavidyapeetha institutions.",
    image: principalImg
  },
  {
    id: 2,
    name: "Prof. Nandini S",
    title: "HOD, Computer Science",
    bio: "M.Tech in Computer Science with expertise in database systems and programming languages.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    name: "Prof. Deepika M",
    title: "HOD, Electronics & Communication",
    bio: "Leading expert in communication systems with industry experience at top electronics firms.",
    image: "https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 4,
    name: "Prof. Sunitha R",
    title: "HOD, Electrical Engineering",
    bio: "Specialist in power systems and electrical machines with numerous research publications.",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  }
];

const FacultySection = () => {
  return (
    <section id="faculty" className="py-20 bg-gradient-to-b from-white to-[#f5f7fa] dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#D8315B] md:text-4xl">Our Experienced Faculty</h2>
          <div className="mx-auto h-1 w-24 bg-[#3E92CC]"></div>
          <p className="mx-auto mt-6 max-w-3xl text-[#1C1C1C] dark:text-gray-300">
            Learn from dedicated educators with extensive academic and industry experience who are committed to empowering women in technical education.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {facultyData.map((faculty) => (
            <div key={faculty.id} className="animate-on-scroll group overflow-hidden rounded-lg bg-white shadow-lg border border-[#3E92CC]/10 hover:shadow-xl transition-all duration-300 dark:bg-gray-800 dark:border-gray-700">
              <div className="relative overflow-hidden">
                <img 
                  src={faculty.image} 
                  alt={faculty.name} 
                  className="h-80 w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A2463]/90 to-transparent p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-sm leading-relaxed">{faculty.bio}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-semibold text-[#D8315B]">{faculty.name}</h3>
                <p className="mb-4 text-sm font-medium text-[#3E92CC]">{faculty.title}</p>
                <div className="flex space-x-3">
                  <a href="#" className="text-[#0A2463] hover:text-[#D8315B] transition-colors" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-[#0A2463] hover:text-[#D8315B] transition-colors" aria-label="Twitter">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-[#0A2463] hover:text-[#D8315B] transition-colors" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="rounded-full bg-[#D8315B] px-8 py-3 font-medium text-white transition-all hover:bg-[#D8315B]/90 hover:shadow-lg">
            View Full Faculty Directory
          </a>
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
