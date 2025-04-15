import { motion } from "framer-motion";

const AccreditationSection = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800" id="accreditations">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold text-[#0A2463] dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Accreditations & Recognitions
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            JSS Polytechnic for Women is proud to be recognized by the following national accreditation and certification bodies, reflecting our commitment to educational excellence.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* NAAC Accreditation */}
          <motion.div 
            className="flex flex-col items-center bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="h-32 flex items-center justify-center">
              <img 
                src="/NAACAlogo-1.png" 
                alt="NAAC A+ Accreditation" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
            <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mt-4 mb-2 text-center">NAAC A+ Accreditation</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
              National Assessment and Accreditation Council has awarded our institution with an A+ grade for academic excellence.
            </p>
          </motion.div>
          
          {/* NBA Accreditation */}
          <motion.div 
            className="flex flex-col items-center bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="h-32 flex items-center justify-center">
              <img 
                src="/smalllogo2.png" 
                alt="NBA Accreditation" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
            <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mt-4 mb-2 text-center">NBA Accreditation</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
              National Board of Accreditation has accredited our engineering programs, ensuring they meet global education standards.
            </p>
          </motion.div>
          
          {/* AICTE Approval */}
          <motion.div 
            className="flex flex-col items-center bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="h-32 flex items-center justify-center">
              <img 
                src="/smalllogo1.png" 
                alt="AICTE Approval" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
            <h3 className="text-xl font-semibold text-[#0A2463] dark:text-white mt-4 mb-2 text-center">AICTE Approved</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
              All our technical programs are approved by the All India Council for Technical Education, ensuring quality technical education.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            These recognitions reflect our ongoing commitment to providing high-quality education and maintaining the highest standards of academic excellence.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AccreditationSection;