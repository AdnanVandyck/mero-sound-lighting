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
            src="/hero-desktop.png"
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
      <div className="relative z-10 px-6 lg:px-12 flex flex-col items-center justify-center h-full">
        {/* Optional space for logo or main heading */}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <ArrowDown className="text-mero-white/60 animate-bounce" size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;

