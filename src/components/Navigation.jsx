import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const linkVariants = {
  hidden: { opacity: 0, y: -10 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.22, ease: "easeOut" },
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

  useEffect(() => {
    const root = document.documentElement;
    if (isMobileMenuOpen) root.classList.add("overflow-hidden");
    else root.classList.remove("overflow-hidden");
    return () => root.classList.remove("overflow-hidden");
  }, [isMobileMenuOpen]);

  const navLinks = ["About", "Services", "Gallery", "Contact"];

  return (
    <nav
      role="navigation"
      aria-label="Main"
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-mero-black/95 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split layout: left / center / right */}
        <div className="grid grid-cols-3 items-center">
          {/* LEFT: Logo */}
          <motion.a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 justify-self-start"
            aria-label="Mero Sound & Lighting — back to top"
          >
            <img src="/logo-mero.png" alt="Mero Sound & Lighting" className="h-9 w-auto object-contain" />
            <span className="text-mero-white text-xs tracking-widest uppercase font-light hidden sm:block">
              Mero Sound & Lighting
            </span>
          </motion.a>

          {/* MOBILE SPACER keeps 3 columns so the right cell doesn't fall into the middle */}
          <div className="block md:hidden" aria-hidden="true" />

          {/* CENTER: Desktop links */}
          <div className="hidden md:flex justify-center">
            <ul className="flex items-center gap-8">
              {navLinks.map((link, i) => (
                <li key={link}>
                  <motion.a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm font-light tracking-wider text-mero-white/80 hover:text-mero-white transition-colors"
                    variants={linkVariants}
                    initial="hidden"
                    animate="show"
                    custom={i}
                  >
                    {link.toUpperCase()}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: CTA + Mobile button */}
          <div className="flex items-center justify-end gap-2 justify-self-end">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-sm font-light tracking-wide text-mero-white/90 hover:text-mero-black hover:bg-mero-gold transition"
            >
              Get a Quote
            </a>

            <button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="md:hidden text-mero-white p-1"
              type="button"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile sheet - RIGHT ALIGNED (remove container padding with negative margins) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-3 border-t border-white/10 -mx-4 sm:-mx-6 lg:-mx-8"
            >
              <ul className="py-2 flex flex-col items-end pr-4 sm:pr-6 lg:pr-8">
                {navLinks.map((link, i) => (
                  <li key={link} className="w-full">
                    <motion.a
                      href={`#${link.toLowerCase()}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      variants={linkVariants}
                      initial="hidden"
                      animate="show"
                      custom={i}
                      className="block py-3 text-right text-sm font-light tracking-wider text-mero-white/80 hover:text-mero-white transition-colors"
                    >
                      {link.toUpperCase()}
                    </motion.a>
                  </li>
                ))}
                <li className="w-full pt-1 pb-3 flex justify-end">
                  <a
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-2 text-sm font-light tracking-wide text-mero-white/90 hover:text-mero-black hover:bg-mero-gold transition"
                  >
                    Get a Quote
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
