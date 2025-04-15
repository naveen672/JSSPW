import { Code, Cpu, LineChart, Building, Wrench, CircuitBoard, ArrowRight, Check } from "lucide-react";
import { useLocation } from "wouter";

const programData = [
  {
    id: 1,
    icon: <Code className="text-3xl" />,
    title: "Computer Science & Engineering",
    description: "Cutting-edge curriculum covering programming, software development, database management, and networking.",
    features: ["3-year Diploma Program", "Industry-Aligned Curriculum", "Hands-on Lab Experience"],
    link: "/programs/computer-science"
  },
  {
    id: 2,
    icon: <Cpu className="text-3xl" />,
    title: "Electronics & Communication",
    description: "Comprehensive training in electronic circuits, communication systems, embedded systems, and signal processing.",
    features: ["3-year Diploma Program", "Modern Electronics Labs", "Industry Projects"],
    link: "/programs/electronics-communication"
  },
  {
    id: 3,
    icon: <CircuitBoard className="text-3xl" />,
    title: "Electrical & Electronics",
    description: "Programs covering electrical machines, power systems, control systems, and electronics fundamentals.",
    features: ["3-year Diploma Program", "Practical Training", "Industry Visits"],
    link: "/programs/electronics-instrumentation"
  },
  {
    id: 4,
    icon: <LineChart className="text-3xl" />,
    title: "Information Science & Technology",
    description: "Studies focused on information systems, data science, web development, and IT infrastructure.",
    features: ["3-year Diploma Program", "Software Project Experience", "Industry Internships"],
    link: "/programs/information-science"
  },
  {
    id: 5,
    icon: <Building className="text-3xl" />,
    title: "Civil Engineering",
    description: "Programs in structural design, construction management, surveying, and infrastructure development.",
    features: ["3-year Diploma Program", "Field Work & Surveying", "Design Projects"],
    link: "/programs/architecture"
  },
  {
    id: 6,
    icon: <Wrench className="text-3xl" />,
    title: "Mechanical Engineering",
    description: "Training in mechanical design, manufacturing processes, thermal engineering, and materials science.",
    features: ["3-year Diploma Program", "Workshop Practice", "CAD/CAM Training"],
    link: "/programs/commercial-practice"
  }
];

const ProgramsSection = () => {
  const [, navigate] = useLocation();

  return (
    <section id="programs" className="bg-[#F3F4F6] py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#0A2463] md:text-4xl">Diploma Programs</h2>
          <div className="mx-auto h-1 w-24 bg-[#D8315B]"></div>
          <p className="mx-auto mt-6 max-w-3xl text-[#1C1C1C]">
            Discover our range of AICTE-approved diploma programs in engineering designed specifically for women to excel in technical fields and build rewarding careers.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programData.map((program) => (
            <div key={program.id} className="animate-on-scroll group rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#0A2463]/10 text-[#0A2463] transition-all group-hover:bg-[#0A2463] group-hover:text-white">
                {program.icon}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-[#0A2463]">{program.title}</h3>
              <p className="mb-4 text-[#1C1C1C]">{program.description}</p>
              <ul className="mb-6 space-y-2 text-sm text-[#1C1C1C]">
                {program.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-[#3E92CC]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href={program.link}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(program.link);
                }}
                className="inline-flex items-center font-medium text-[#3E92CC] hover:text-[#0A2463]"
              >
                Program details
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="/admission"
            onClick={(e) => {
              e.preventDefault();
              navigate("/admission");
            }}
            className="rounded-full bg-[#0A2463] px-8 py-3 font-medium text-white transition-colors hover:bg-[#0A2463]/90"
          >
            Admission Information
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
