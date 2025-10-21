import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full basis-full flex-none min-h-screen overflow-hidden bg-mero-black text-center pt-24 md:pt-32">
      {/* Background */}
      <div className="absolute inset-0">
        <picture className="block h-full w-full">
          <source media="(max-width: 768px)" srcSet="/hero-mobile-blur.jpg" />
          <img
            src="/hero-desktop.png"  // or /hero-desktop.jpg if that’s the real type
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center"
            onError={(e) => {
              console.error("Hero image failed to load:", e.currentTarget.src);
              e.currentTarget.src = "/hero-mobile-blur.png";
            }}
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 lg:px-12 flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl md:text-5xl lg:text-6xl font-light tracking-wide text-mero-white/90 max-w-5xl"
        >
          We Bring Your Vision To Light
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="mt-8 flex flex-col sm:flex-row gap-6 justify-center"
        >
          <motion.a href="#contact" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            className="px-8 py-4 bg-mero-white text-mero-black font-light tracking-wider rounded-lg hover:bg-mero-white/90 transition">
            START YOUR PROJECT
          </motion.a>
          <motion.a href="#portfolio" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            className="px-8 py-4 border border-mero-white/30 text-mero-white font-light tracking-wider rounded-lg hover:bg-mero-white/10 transition">
            VIEW OUR WORK
          </motion.a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2" aria-hidden="true">
          <ArrowDown className="text-mero-white/60 animate-bounce" size={24} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
