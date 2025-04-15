import { ArrowRight, Building2, User, Award, GraduationCap, BookOpen, School, BookMarked } from "lucide-react";
import buildingImg from "../assets/bg1.jpg";
import jssmvpImg from "@assets/JSSMVP.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* JSS Mahavidyapeetha Section */}
        <div id="jss-mahavidyapeetha" className="mb-24">
          <div className="mx-auto mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#0A2463] dark:text-white md:text-4xl">JSS Mahavidyapeetha</h2>
            <div className="mx-auto h-1 w-24 bg-[#D8315B]"></div>
          </div>
          
          <div className="mb-12 overflow-hidden rounded-lg shadow-lg">
            <img 
              src={jssmvpImg} 
              alt="JSS Mahavidyapeetha Building" 
              className="h-full w-full object-cover"
            />
          </div>
          
          <div className="animate-on-scroll space-y-6">
            <p className="text-gray-700 dark:text-gray-300">
              The Jagadguru Veerasimhaasana Peetha was established in the 11th Century A.D. at Sutturu by Adi Jagadguru Sri Shivarathreeshwara Shivayogi Mahaswamiji. Sutturu is a village in Nanjangud taluk, Mysuru District in Karnataka. It is about 28 km from Mysuru city, in the south east direction.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300">
              The Peetha with its high ideals has been making remarkable contribution in religious, social, educational and economic spheres in the state and across the country. It is striving for social development by responding to the community needs. It strongly believes that, unless the problems of the socially backward communities and the poor are taken care, there will not be social development.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300">
              The establishment of the Samskritha Paathashala by the 22nd Pontiff Sri Shivarathreeshwara Mahaswamiji who was popularly known as the Mantra Maharshi is a landmark in the history of the Sree Math. When the 23rd Pontiff Jagadguru Dr. Sri Shivaratri Rajendra Mahaswamiji came to Mysuru in 1926 to pursue higher education, he observed that many rural students were in need of food and shelter. He gave them shelter at his own place and this marked the beginning of offering education to the needy.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300">
              Instead of making students come to cities for education, Jagadguru Dr. Sri Shivarathri Rajendra Mahaswamiji thought of starting educational institutions in rural areas. In order to make this possible, he started Jagadguru Sri Shivarathreeshwara Mahavidya-peetha in 1954.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300">
              JSS Mahavidyapeetha which took its first step in the field of education with the starting of a high school has now forayed into Crèches, Primary schools, High schools, Pre-university and Degree Colleges, Law, Engineering, Medicine, Dental Sciences and Pharmacy and has thus provided all classes of the society easy access to educational opportunities.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300">
              A young child who joins a JSS Institution seeking education may go on to become a scientist, or an engineer or a technologist or a doctor or a philosopher. Jagadguru Sri Shivarathreeshwara Mahavidyapeetha thus has all the facilities that shape the youngster into a good citizen of the country.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300">
              Under the leadership of the present pontiff, the 24th Peethadhyaksha, His Holiness Jagadguru Sri Shivarathri Deshikendra Mahaswamiji, the Mahavidyapeetha has not only established educational institutions in places where necessary, it has also made sure that all these institutions impart quality education. Engineering, Medical, Dental and Law colleges run by JSS are reputed to be the best educational institutions of their kind in the state and country.
            </p>
          </div>
          
          {/* JSS Mahavidyapeetha Stats */}
          <div className="mt-12 grid gap-6 rounded-lg bg-[#F3F4F6] dark:bg-gray-800 p-8 md:grid-cols-3">
            <div className="animate-on-scroll text-center">
              <School className="mx-auto mb-4 h-12 w-12 text-[#3E92CC]" />
              <h4 className="mb-2 text-xl font-semibold text-[#0A2463] dark:text-white">Established 1954</h4>
              <p className="text-gray-700 dark:text-gray-300">By Jagadguru Dr. Sri Shivarathri Rajendra Mahaswamiji</p>
            </div>
            
            <div className="animate-on-scroll text-center">
              <BookOpen className="mx-auto mb-4 h-12 w-12 text-[#3E92CC]" />
              <h4 className="mb-2 text-xl font-semibold text-[#0A2463] dark:text-white">300+ Institutions</h4>
              <p className="text-gray-700 dark:text-gray-300">From primary schools to professional colleges</p>
            </div>
            
            <div className="animate-on-scroll text-center">
              <BookMarked className="mx-auto mb-4 h-12 w-12 text-[#3E92CC]" />
              <h4 className="mb-2 text-xl font-semibold text-[#0A2463] dark:text-white">Quality Education</h4>
              <p className="text-gray-700 dark:text-gray-300">Commitment to excellence in all disciplines</p>
            </div>
          </div>
        </div>
        
        {/* Technical Education under JSSMVP */}
        <div id="technical-education" className="mb-24">
          <div className="mx-auto mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#0A2463] dark:text-white md:text-4xl">Technical Education under JSSMVP</h2>
            <div className="mx-auto h-1 w-24 bg-[#D8315B]"></div>
          </div>
          
          <div className="animate-on-scroll space-y-6">
            <p className="text-gray-700 dark:text-gray-300">
              JSS Mahavidyapeetha has made significant contributions to technical education in India through its network of engineering colleges, polytechnics, and technical training institutes. The organization recognized early the importance of technical education in nation-building and economic development.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300">
              With a focus on providing quality technical education to students from all backgrounds, JSS Mahavidyapeetha has established numerous technical institutions across Karnataka and other states. These institutions offer a wide range of technical programs in various disciplines including engineering, computer science, electronics, mechanical engineering, and more.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300">
              What sets JSS technical institutions apart is their strong industry connections, state-of-the-art infrastructure, experienced faculty, and commitment to practical, hands-on learning. Students at JSS technical institutions benefit from industry-aligned curricula, internship opportunities, and placement support.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300">
              JSS Polytechnic For Women is one such pioneering institution that focuses exclusively on providing technical education to women, empowering them to excel in fields traditionally dominated by men. The institution offers diploma programs in various engineering disciplines and has been instrumental in increasing women's participation in technical fields.
            </p>
          </div>
          
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="animate-on-scroll rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md">
              <h4 className="mb-3 text-xl font-semibold text-[#0A2463] dark:text-white">Engineering Colleges</h4>
              <p className="text-gray-700 dark:text-gray-300">Offering undergraduate and postgraduate programs in various engineering disciplines.</p>
            </div>
            
            <div className="animate-on-scroll rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md">
              <h4 className="mb-3 text-xl font-semibold text-[#0A2463] dark:text-white">Polytechnics</h4>
              <p className="text-gray-700 dark:text-gray-300">Providing diploma-level technical education with a focus on practical skills and industry readiness.</p>
            </div>
            
            <div className="animate-on-scroll rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md">
              <h4 className="mb-3 text-xl font-semibold text-[#0A2463] dark:text-white">Technical Training Centers</h4>
              <p className="text-gray-700 dark:text-gray-300">Offering short-term courses and certifications in technical skills for immediate employment.</p>
            </div>
            
            <div className="animate-on-scroll rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md">
              <h4 className="mb-3 text-xl font-semibold text-[#0A2463] dark:text-white">Research Facilities</h4>
              <p className="text-gray-700 dark:text-gray-300">Supporting innovation and technological advancement through well-equipped research centers.</p>
            </div>
          </div>
        </div>
      
        {/* JSS Polytechnic For Women Section */}
        <div id="about-college">
          <div className="mx-auto mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#0A2463] dark:text-white md:text-4xl">About JSS Polytechnic For Women</h2>
            <div className="mx-auto h-1 w-24 bg-[#D8315B]"></div>
          </div>
          
          <div className="grid gap-12 md:grid-cols-2">
            <div className="animate-on-scroll">
              <h3 className="mb-6 text-2xl font-semibold text-[#0A2463] dark:text-white">Our Mission & Vision</h3>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                JSS Polytechnic For Women is dedicated to empowering women through quality technical education, fostering innovation, and developing industry-ready professionals. Our vision is to be a premier technical institution that transforms young women into skilled, confident, and socially responsible engineers.
              </p>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
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
              <p className="text-gray-700 dark:text-gray-300">Under JSS Mahavidyapeetha, a premier educational group</p>
            </div>
            
            <div className="animate-on-scroll text-center">
              <User className="mx-auto mb-4 h-12 w-12 text-[#3E92CC]" />
              <h4 className="mb-2 text-xl font-semibold text-[#0A2463] dark:text-white">1000+ Students</h4>
              <p className="text-gray-700 dark:text-gray-300">Focused exclusively on women's technical education</p>
            </div>
            
            <div className="animate-on-scroll text-center">
              <Award className="mx-auto mb-4 h-12 w-12 text-[#3E92CC]" />
              <h4 className="mb-2 text-xl font-semibold text-[#0A2463] dark:text-white">#1 in Region</h4>
              <p className="text-gray-700 dark:text-gray-300">For women's technical education and placement</p>
            </div>
            
            <div className="animate-on-scroll text-center">
              <GraduationCap className="mx-auto mb-4 h-12 w-12 text-[#3E92CC]" />
              <h4 className="mb-2 text-xl font-semibold text-[#0A2463] dark:text-white">95% Placement</h4>
              <p className="text-gray-700 dark:text-gray-300">Excellent industry connections for career growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
