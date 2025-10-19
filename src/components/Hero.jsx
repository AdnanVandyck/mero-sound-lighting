import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-mero-black via-mero-black/95 to-mero-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-wider mb-6">
            ELEVATE YOUR
            <span className="block mt-2 text-mero-white">EXPERIENCE</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-xl font-extralight tracking-wide text-mero-white/70 max-w-2xl mx-auto mb-12"
          >
            Premium audiovisual solutions for unforgettable events
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-mero-white text-mero-black font-light tracking-wider hover:bg-mero-white/90 transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mero-white/60"
              aria-label="Start your project"
            >
              START YOUR PROJECT
            </motion.a>

            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border border-mero-white/30 text-mero-white font-light tracking-wider hover:bg-mero-white/10 transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mero-white/40"
              aria-label="View our work"
            >
              VIEW OUR WORK
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          aria-hidden="true"
        >
          <ArrowDown className="text-mero-white/50 animate-bounce" size={24} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
