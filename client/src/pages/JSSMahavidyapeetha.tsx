import { ArrowLeft, School, BookOpen, BookMarked } from "lucide-react";
import { Link } from "wouter";
import jssmvpImg from "@assets/JSSMVP.jpg";

const JSSMahavidyapeetha = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <div className="mb-8 flex items-center">
          <Link href="/#about">
            <a className="mr-4 inline-flex items-center text-[#0A2463] dark:text-blue-400 hover:text-[#D8315B]">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back
            </a>
          </Link>
          <h1 className="text-3xl font-bold text-[#0A2463] dark:text-white md:text-4xl">JSS Mahavidyapeetha</h1>
        </div>
        
        {/* Featured Image */}
        <div className="mb-12 overflow-hidden rounded-lg shadow-lg">
          <img 
            src={jssmvpImg} 
            alt="JSS Mahavidyapeetha Building" 
            className="h-full w-full object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="space-y-6">
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
          <div className="text-center">
            <School className="mx-auto mb-4 h-12 w-12 text-[#3E92CC]" />
            <h4 className="mb-2 text-xl font-semibold text-[#0A2463] dark:text-white">Established 1954</h4>
            <p className="text-gray-700 dark:text-gray-300">By Jagadguru Dr. Sri Shivarathri Rajendra Mahaswamiji</p>
          </div>
          
          <div className="text-center">
            <BookOpen className="mx-auto mb-4 h-12 w-12 text-[#3E92CC]" />
            <h4 className="mb-2 text-xl font-semibold text-[#0A2463] dark:text-white">300+ Institutions</h4>
            <p className="text-gray-700 dark:text-gray-300">From primary schools to professional colleges</p>
          </div>
          
          <div className="text-center">
            <BookMarked className="mx-auto mb-4 h-12 w-12 text-[#3E92CC]" />
            <h4 className="mb-2 text-xl font-semibold text-[#0A2463] dark:text-white">Quality Education</h4>
            <p className="text-gray-700 dark:text-gray-300">Commitment to excellence in all disciplines</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JSSMahavidyapeetha;