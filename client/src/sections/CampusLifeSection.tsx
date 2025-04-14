import { ArrowRight } from "lucide-react";

const CampusLifeSection = () => {
  return (
    <section id="campus" className="bg-[#0A2463] py-20 text-white">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Campus Life</h2>
          <div className="mx-auto h-1 w-24 bg-[#D8315B]"></div>
          <p className="mx-auto mt-6 max-w-3xl text-white/80">
            Experience a vibrant campus community with endless opportunities for growth, connection, and exploration.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Campus Life Card 1 */}
          <div className="animate-on-scroll group rounded-lg bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/15">
            <div className="mb-6 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80" 
                alt="Students studying in the modern library" 
                className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-white">Student Organizations</h3>
            <p className="mb-4 text-white/80">
              Join one of our 200+ student clubs and organizations to pursue your interests, develop leadership skills, and build lasting friendships.
            </p>
            <a href="#" className="inline-flex items-center font-medium text-[#D8315B] hover:text-[#D8315B]/80">
              Explore Organizations
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          
          {/* Campus Life Card 2 */}
          <div className="animate-on-scroll group rounded-lg bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/15">
            <div className="mb-6 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1591117207239-788bf8de6c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80" 
                alt="Students participating in athletic activities" 
                className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-white">Athletics & Recreation</h3>
            <p className="mb-4 text-white/80">
              Stay active and competitive with our NCAA Division I sports teams, intramural leagues, and state-of-the-art recreation facilities.
            </p>
            <a href="#" className="inline-flex items-center font-medium text-[#D8315B] hover:text-[#D8315B]/80">
              View Athletic Programs
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          
          {/* Campus Life Card 3 */}
          <div className="animate-on-scroll group rounded-lg bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/15">
            <div className="mb-6 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80" 
                alt="Campus dormitory buildings" 
                className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-white">Housing & Dining</h3>
            <p className="mb-4 text-white/80">
              Experience comfortable living options and diverse dining experiences designed to make campus feel like home.
            </p>
            <a href="#" className="inline-flex items-center font-medium text-[#D8315B] hover:text-[#D8315B]/80">
              Explore Housing Options
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
        
        {/* Campus Life Gallery */}
        <div className="mt-16">
          <h3 className="mb-8 text-center text-2xl font-semibold text-white">Campus Gallery</h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            <div className="animate-on-scroll aspect-square overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="Main campus building" 
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="animate-on-scroll aspect-square overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="Science lab facility" 
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="animate-on-scroll aspect-square overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1574331909276-e16ff705ce4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="Student union building" 
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="animate-on-scroll aspect-square overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1601600576337-c1d8a1b85fb7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="Campus library" 
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
