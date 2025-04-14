import { motion } from "framer-motion";

const ParallaxCTA = () => {
  return (
    <section className="relative py-32 bg-fixed bg-center bg-cover" 
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}>
      <div className="absolute inset-0 bg-[#0A2463]/70"></div>
      <div className="container relative mx-auto px-6 text-center text-white">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-6 text-3xl font-bold md:text-4xl"
        >
          Ready to Begin Your Journey?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mb-8 max-w-2xl text-lg text-white/90"
        >
          Join our community of scholars, innovators, and leaders who are shaping the future. Applications for the Fall 2025 semester are now open.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href="#" id="apply" className="rounded-full bg-[#D8315B] px-8 py-3 font-medium text-white transition-colors hover:bg-[#D8315B]/90">
            Apply Now
          </a>
          <a href="#" className="rounded-full border-2 border-white bg-transparent px-8 py-3 font-medium text-white transition-colors hover:bg-white/10">
            Request Information
          </a>
          <a href="#" className="rounded-full border-2 border-white bg-transparent px-8 py-3 font-medium text-white transition-colors hover:bg-white/10">
            Schedule a Visit
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ParallaxCTA;
