import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const linkVariants = {
  hidden: { opacity: 0, y: -10 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.25 },
  }),
};

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu open
  useEffect(() => {
    const root = document.documentElement;
    if (isMobileMenuOpen) root.classList.add("overflow-hidden");
    else root.classList.remove("overflow-hidden");
    return () => root.classList.remove("overflow-hidden");
  }, [isMobileMenuOpen]);

  const navLinks = ["Services", "Portfolio", "About", "Contact"];

  return (
    <nav
      role="navigation"
      aria-label="Main"
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-mero-black/95 backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-light tracking-wider"
          >
            <span className="text-mero-white">Mero</span>
            <span className="text-mero-white/50 ml-2">Sound & Lighting</span>
          </motion.div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                variants={linkVariants}
                initial="hidden"
                animate="show"
                custom={i}
                className="text-sm font-light tracking-wider text-mero-white/70 hover:text-mero-white transition-colors duration-300"
              >
                {link.toUpperCase()}
              </motion.a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="md:hidden text-mero-white p-2"
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 border-t border-white/10"
            >
              <ul className="py-2">
                {navLinks.map((link, i) => (
                  <li key={link}>
                    <motion.a
                      href={`#${link.toLowerCase()}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      variants={linkVariants}
                      initial="hidden"
                      animate="show"
                      custom={i}
                      className="block py-3 text-sm font-light tracking-wider text-mero-white/80 hover:text-mero-white transition-colors"
                    >
                      {link.toUpperCase()}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
