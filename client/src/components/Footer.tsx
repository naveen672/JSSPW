import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0A2463] py-12 text-white">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-6 flex items-center">
              <div className="mr-3 h-10 w-10 rounded-full bg-white"></div>
              <span className="text-xl font-bold text-white">Horizon College</span>
            </div>
            <p className="mb-6 text-white/80">
              Empowering minds and shaping futures since 1905. Horizon College is committed to excellence in education, research, and community engagement.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#D8315B]" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#D8315B]" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#D8315B]" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#D8315B]" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#D8315B]" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-white/80 hover:text-[#D8315B]">About Us</a></li>
              <li><a href="#programs" className="text-white/80 hover:text-[#D8315B]">Academic Programs</a></li>
              <li><a href="#" className="text-white/80 hover:text-[#D8315B]">Admissions</a></li>
              <li><a href="#" className="text-white/80 hover:text-[#D8315B]">Financial Aid</a></li>
              <li><a href="#campus" className="text-white/80 hover:text-[#D8315B]">Campus Life</a></li>
              <li><a href="#" className="text-white/80 hover:text-[#D8315B]">Research</a></li>
              <li><a href="#" className="text-white/80 hover:text-[#D8315B]">Career Services</a></li>
              <li><a href="#" className="text-white/80 hover:text-[#D8315B]">Alumni</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-[#D8315B]">Academic Calendar</a></li>
              <li><a href="#" className="text-white/80 hover:text-[#D8315B]">Library</a></li>
              <li><a href="#" className="text-white/80 hover:text-[#D8315B]">Campus Map</a></li>
              <li><a href="#" className="text-white/80 hover:text-[#D8315B]">Student Portal</a></li>
              <li><a href="#faculty" className="text-white/80 hover:text-[#D8315B]">Faculty Directory</a></li>
              <li><a href="#events" className="text-white/80 hover:text-[#D8315B]">News & Events</a></li>
              <li><a href="#" className="text-white/80 hover:text-[#D8315B]">Giving</a></li>
              <li><a href="#" className="text-white/80 hover:text-[#D8315B]">COVID-19 Information</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">Stay Connected</h4>
            <p className="mb-6 text-white/80">Subscribe to our newsletter to receive updates on news, events, and opportunities.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full rounded-l-lg border-none bg-white/10 p-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#D8315B]" 
                required
              />
              <button 
                type="submit" 
                className="rounded-r-lg bg-[#D8315B] px-4 font-medium text-white transition-colors hover:bg-[#D8315B]/90"
              >
                Subscribe
              </button>
            </form>
            <div className="mt-6">
              <h5 className="mb-2 font-semibold text-white">Download Our App</h5>
              <div className="flex space-x-3">
                <a href="#" className="inline-flex items-center rounded bg-white/10 px-4 py-2 hover:bg-white/20">
                  <span className="mr-2">App Store</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a href="#" className="inline-flex items-center rounded bg-white/10 px-4 py-2 hover:bg-white/20">
                  <span className="mr-2">Google Play</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-white/20 pt-6">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="text-sm text-white/80">
              &copy; {currentYear} Horizon College. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-white/80">
              <a href="#" className="hover:text-[#D8315B]">Privacy Policy</a>
              <a href="#" className="hover:text-[#D8315B]">Terms of Use</a>
              <a href="#" className="hover:text-[#D8315B]">Accessibility</a>
              <a href="#" className="hover:text-[#D8315B]">Consumer Information</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
