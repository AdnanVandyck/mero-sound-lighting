// import { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const linkVariants = {
//   hidden: { opacity: 0, y: -10 },
//   show: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.08, duration: 0.25 },
//   }),
// };

// const Navigation = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Prevent background scroll when mobile menu open
//   useEffect(() => {
//     const root = document.documentElement;
//     if (isMobileMenuOpen) root.classList.add("overflow-hidden");
//     else root.classList.remove("overflow-hidden");
//     return () => root.classList.remove("overflow-hidden");
//   }, [isMobileMenuOpen]);

//   const navLinks = ["About" , "Services", "Gallery", "Contact"];

//   return (
//     <nav
//       role="navigation"
//       aria-label="Main"
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         isScrolled ? "bg-mero-black/95 backdrop-blur-md py-4" : "bg-transparent py-6"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 lg:px-12">
//         <div className="flex justify-between items-center">
//           {/* Clickable logo -> scroll to top */}
//           <motion.a
//             href="#top"
//             onClick={(e) => {
//               e.preventDefault();
//               window.scrollTo({ top: 0, behavior: "smooth" });
//             }}
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="flex items-center gap-3"
//             aria-label="Mero Sound & Lighting — back to top"
//           >
//             <img
//               src="/logo-mero.png"            /* put your logo file in /public as logo-mero.png */
//               alt="Mero Sound & Lighting"
//               className="h-10 w-auto object-contain"
//             />
//             <span className="text-mero-white text-sm tracking-widest uppercase font-light hidden sm:block">
//               Mero Sound & Lighting
//             </span>
//           </motion.a>

//           {/* Desktop links */}
//           <div className="hidden md:flex items-center space-x-10">
//             {navLinks.map((link, i) => (
//               <motion.a
//                 key={link}
//                 href={`#${link.toLowerCase()}`}
//                 variants={linkVariants}
//                 initial="hidden"
//                 animate="show"
//                 custom={i}
//                 className="text-sm font-light tracking-wider text-mero-white/70 hover:text-mero-white transition-colors duration-300"
//               >
//                 {link.toUpperCase()}
//               </motion.a>
//             ))}
//           </div>

//           {/* Mobile menu button */}
//           <button
//             onClick={() => setIsMobileMenuOpen((v) => !v)}
//             className="md:hidden text-mero-white p-2"
//             type="button"
//             aria-label="Toggle menu"
//             aria-expanded={isMobileMenuOpen}
//             aria-controls="mobile-menu"
//           >
//             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile menu */}
//         <AnimatePresence>
//           {isMobileMenuOpen && (
//             <motion.div
//               id="mobile-menu"
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               className="md:hidden mt-4 border-t border-white/10"
//             >
//               <ul className="py-2">
//                 {navLinks.map((link, i) => (
//                   <li key={link}>
//                     <motion.a
//                       href={`#${link.toLowerCase()}`}
//                       onClick={() => setIsMobileMenuOpen(false)}
//                       variants={linkVariants}
//                       initial="hidden"
//                       animate="show"
//                       custom={i}
//                       className="block py-3 text-sm font-light tracking-wider text-mero-white/80 hover:text-mero-white transition-colors"
//                     >
//                       {link.toUpperCase()}
//                     </motion.a>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </nav>
//   );
// };

// export default Navigation;


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

  // Prevent background scroll when mobile menu open
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
            <img
              src="/logo-mero.png"
              alt="Mero Sound & Lighting"
              className="h-9 w-auto object-contain"
            />
            <span className="text-mero-white text-xs tracking-widest uppercase font-light hidden sm:block">
              Mero Sound & Lighting
            </span>
          </motion.a>

          {/* CENTER: Desktop links (perfectly centered) */}
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

          {/* RIGHT: CTA (desktop) + Mobile menu button */}
          <div className="flex items-center justify-end gap-2">
            {/* CTA (hidden on small screens) */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-sm font-light tracking-wide text-mero-white/90 hover:text-mero-black hover:bg-mero-gold transition"
            >
              Get a Quote
            </a>

            {/* Mobile menu button */}
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

        {/* Mobile sheet */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-3 border-t border-white/10"
            >
              <ul className="py-2 text-center">
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
                <li className="px-4 pt-1 pb-3">
                  <a
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-4 py-2 text-sm font-light tracking-wide text-mero-white/90 hover:text-mero-black hover:bg-mero-gold transition"
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

