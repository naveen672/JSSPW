import { ArrowRight } from "lucide-react";

const CampusLifeSection = () => {
  return (
    <section id="campus" className="bg-[#0A2463] py-20 text-white">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Campus Life</h2>
          <div className="mx-auto h-1 w-24 bg-[#D8315B]"></div>
          <p className="mx-auto mt-6 max-w-3xl text-white/80">
            Experience a vibrant campus environment that fosters personal growth, technical development, and lasting friendships among women in engineering.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Campus Life Card 1 */}
          <div className="animate-on-scroll group rounded-lg bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/15">
            <div className="mb-6 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80" 
                alt="Students working in modern computer lab" 
                className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-white">Technical Clubs</h3>
            <p className="mb-4 text-white/80">
              Join our specialized technical clubs like Coding Club, Robotics Society, and Electronics Club to enhance your practical skills and participate in competitions.
            </p>
            <a href="#" className="inline-flex items-center font-medium text-[#D8315B] hover:text-[#D8315B]/80">
              Explore Technical Clubs
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          
          {/* Campus Life Card 2 */}
          <div className="animate-on-scroll group rounded-lg bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/15">
            <div className="mb-6 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1591117207239-788bf8de6c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80" 
                alt="Students participating in sports activities" 
                className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-white">Sports & Fitness</h3>
            <p className="mb-4 text-white/80">
              Stay active and healthy with our range of sporting facilities including basketball, badminton, volleyball courts, and a modern fitness center for physical well-being.
            </p>
            <a href="#" className="inline-flex items-center font-medium text-[#D8315B] hover:text-[#D8315B]/80">
              View Sports Facilities
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          
          {/* Campus Life Card 3 */}
          <div className="animate-on-scroll group rounded-lg bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/15">
            <div className="mb-6 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80" 
                alt="Women's hostel building" 
                className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-white">Hostel & Amenities</h3>
            <p className="mb-4 text-white/80">
              Our secure, modern hostel facilities provide a comfortable living environment with Wi-Fi, dining hall, recreation rooms, and 24-hour security for students.
            </p>
            <a href="#" className="inline-flex items-center font-medium text-[#D8315B] hover:text-[#D8315B]/80">
              Explore Hostel Facilities
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
        
        {/* Campus Life Gallery */}
        <div className="mt-16">
          <h3 className="mb-8 text-center text-2xl font-semibold text-white">Campus Gallery</h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="College computer lab" 
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="College training session" 
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="Students working on project" 
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="College library" 
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a href="#" className="rounded-full border-2 border-white bg-transparent px-8 py-3 font-medium text-white transition-colors hover:bg-white/10">
              View Full Gallery
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusLifeSection;
