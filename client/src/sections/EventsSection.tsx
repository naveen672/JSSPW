import { ArrowRight, Clock, MapPin, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Event } from "@shared/schema";
import { format } from "date-fns";

// Fallback function to get image
const getEventImage = (event: Event) => {
  return event.image 
    ? event.image 
    : "https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80";
};

const EventsSection = () => {
  // Fetch active events from API
  const { data: events = [], isLoading } = useQuery<Event[]>({
    queryKey: ["/api/events"],
    refetchInterval: 300000, // Refetch every 5 minutes
  });

  // Format the date to display day and month
  const formatEventDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return {
        day: format(date, "dd"),
        month: format(date, "MMM").toUpperCase()
      };
    } catch (error) {
      return {
        day: "01",
        month: "JAN"
      };
    }
  };

  return (
    <section id="events" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#0A2463] dark:text-white md:text-4xl">Upcoming Events</h2>
          <div className="mx-auto h-1 w-24 bg-[#D8315B]"></div>
          <p className="mx-auto mt-6 max-w-3xl text-gray-700 dark:text-gray-300">
            Stay connected with the latest technical events, workshops, and opportunities at JSS Polytechnic for Women.
          </p>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : events.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <p>No upcoming events scheduled at this time. Check back soon!</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => {
              const eventDate = formatEventDate(event.date);
              return (
                <div key={event.id} className="animate-on-scroll group rounded-lg bg-white dark:bg-gray-800 p-0 shadow-md transition-all hover:shadow-lg hover:-translate-y-1">
                  <div className="relative">
                    <img 
                      src={getEventImage(event)} 
                      alt={event.title} 
                      className="h-52 w-full rounded-t-lg object-cover"
                    />
                    <div className="absolute -bottom-6 left-6 flex h-16 w-16 flex-col items-center justify-center rounded bg-[#D8315B] text-white">
                      <span className="text-xl font-bold">{eventDate.day}</span>
                      <span className="text-sm">{eventDate.month}</span>
                    </div>
                  </div>
                  <div className="p-6 pt-10">
                    <div className="mb-3 flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Clock className="mr-2 h-4 w-4" />
                      <span>{event.time || "All Day"}</span>
                      <MapPin className="ml-4 mr-2 h-4 w-4" />
                      <span>{event.location || "Main Campus"}</span>
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-[#0A2463] dark:text-white">{event.title}</h3>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">{event.description}</p>
                    <a 
                      href="#"
                      className="inline-flex items-center font-medium text-[#3E92CC] hover:text-[#0A2463] dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      Event details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        
        {events.length > 0 && (
          <div className="mt-12 text-center">
            <a href="#" className="rounded-full bg-[#0A2463] px-8 py-3 font-medium text-white transition-colors hover:bg-[#0A2463]/90">
              View All Events
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsSection;
