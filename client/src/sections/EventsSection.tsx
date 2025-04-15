import { ArrowRight, Clock, MapPin } from "lucide-react";

const eventsData = [
  {
    id: 1,
    title: "Industry Expert Workshop",
    description: "Join us for a hands-on workshop with Infosys experts on \"The Future of Cloud Computing and DevOps.\"",
    date: { day: "15", month: "OCT" },
    time: "2:00 PM - 4:00 PM",
    location: "IT Seminar Hall",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 2,
    title: "Annual Technical Fest",
    description: "Join our exciting 3-day technical fest featuring competitions, exhibitions, and technical paper presentations.",
    date: { day: "21", month: "OCT" },
    time: "9:00 AM - 5:00 PM",
    location: "College Auditorium",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 3,
    title: "Campus Recruitment Drive",
    description: "Connect with over 30 top companies recruiting for technical positions and internships in engineering fields.",
    date: { day: "28", month: "OCT" },
    time: "10:00 AM - 3:00 PM",
    location: "Training & Placement Cell",
    image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80"
  }
];

const EventsSection = () => {
  return (
    <section id="events" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#0A2463] dark:text-white md:text-4xl">Upcoming Events</h2>
          <div className="mx-auto h-1 w-24 bg-[#D8315B]"></div>
          <p className="mx-auto mt-6 max-w-3xl text-gray-700 dark:text-gray-300">
            Stay connected with the latest technical events, workshops, and opportunities at JSS Polytechnic For Women.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {eventsData.map((event) => (
            <div key={event.id} className="animate-on-scroll group rounded-lg bg-white dark:bg-gray-800 p-0 shadow-md transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="relative">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="h-52 w-full rounded-t-lg object-cover"
                />
                <div className="absolute -bottom-6 left-6 flex h-16 w-16 flex-col items-center justify-center rounded bg-[#D8315B] text-white">
                  <span className="text-xl font-bold">{event.date.day}</span>
                  <span className="text-sm">{event.date.month}</span>
                </div>
              </div>
              <div className="p-6 pt-10">
                <div className="mb-3 flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Clock className="mr-2 h-4 w-4" />
                  <span>{event.time}</span>
                  <MapPin className="ml-4 mr-2 h-4 w-4" />
                  <span>{event.location}</span>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-[#0A2463] dark:text-white">{event.title}</h3>
                <p className="mb-4 text-gray-700 dark:text-gray-300">{event.description}</p>
                <a href="#" className="inline-flex items-center font-medium text-[#3E92CC] hover:text-[#0A2463] dark:text-blue-400 dark:hover:text-blue-300">
                  Event details & Registration
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="rounded-full bg-[#0A2463] px-8 py-3 font-medium text-white transition-colors hover:bg-[#0A2463]/90">
            View All Events
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
