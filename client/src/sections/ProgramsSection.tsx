import { Code, FlaskRound, BookOpen, LineChart, Building, Heart, ArrowRight, Check } from "lucide-react";

const programData = [
  {
    id: 1,
    icon: <Code className="text-3xl" />,
    title: "Computer Science",
    description: "Cutting-edge curriculum covering software development, AI, cybersecurity, and data science.",
    degrees: ["Bachelor of Science", "Master of Science", "Ph.D. Program"]
  },
  {
    id: 2,
    icon: <FlaskRound className="text-3xl" />,
    title: "Biological Sciences",
    description: "Comprehensive programs in molecular biology, genetics, ecology, and biotechnology.",
    degrees: ["Bachelor of Science", "Master of Science", "Ph.D. Program"]
  },
  {
    id: 3,
    icon: <BookOpen className="text-3xl" />,
    title: "Liberal Arts",
    description: "Interdisciplinary programs in humanities, social sciences, and creative arts.",
    degrees: ["Bachelor of Arts", "Master of Arts", "Ph.D. Program"]
  },
  {
    id: 4,
    icon: <LineChart className="text-3xl" />,
    title: "Business Administration",
    description: "Programs in management, finance, marketing, and entrepreneurship.",
    degrees: ["Bachelor of Business", "MBA Program", "Executive Education"]
  },
  {
    id: 5,
    icon: <Building className="text-3xl" />,
    title: "Engineering",
    description: "Programs in mechanical, electrical, civil, and chemical engineering disciplines.",
    degrees: ["Bachelor of Engineering", "Master of Engineering", "Ph.D. Program"]
  },
  {
    id: 6,
    icon: <Heart className="text-3xl" />,
    title: "Health Sciences",
    description: "Programs in nursing, public health, pre-med, and health administration.",
    degrees: ["Bachelor of Science", "Master's Programs", "Professional Certificates"]
  }
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="bg-[#F3F4F6] py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#0A2463] md:text-4xl">Academic Programs</h2>
          <div className="mx-auto h-1 w-24 bg-[#D8315B]"></div>
          <p className="mx-auto mt-6 max-w-3xl text-[#1C1C1C]">
            Discover our diverse range of undergraduate, graduate, and doctoral programs designed to prepare you for success in your chosen field.
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
                {program.degrees.map((degree, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-[#3E92CC]" />
                    <span>{degree}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="inline-flex items-center font-medium text-[#3E92CC] hover:text-[#0A2463]">
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="rounded-full bg-[#0A2463] px-8 py-3 font-medium text-white transition-colors hover:bg-[#0A2463]/90">
            View All Programs
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
