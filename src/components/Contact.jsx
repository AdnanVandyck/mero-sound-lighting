// import { motion } from 'framer-motion';
// import { useScrollAnimation } from '../hooks/useScrollAnimation';
// import { Mail, Phone, MapPin } from 'lucide-react';

// const Contact = () => {
//   const [ref, controls] = useScrollAnimation();

//   return (
//     <section id="contact" className="py-24 lg:py-32 bg-mero-black/50">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12">
//         <motion.div
//           ref={ref}
//           animate={controls}
//           initial="hidden"
//           variants={{
//             hidden: { opacity: 0 },
//             visible: { opacity: 1 },
//           }}
//         >
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-extralight tracking-wider mb-4">
//               GET IN TOUCH
//             </h2>
//             <div className="w-16 h-px bg-mero-gold mx-auto" />
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
//             <div className="text-center">
//               <Mail className="text-mero-gold mx-auto mb-4" size={24} />
//               <p className="text-sm font-light tracking-wider">hello@merosound.com</p>
//             </div>
//             <div className="text-center">
//               <Phone className="text-mero-gold mx-auto mb-4" size={24} />
//               <p className="text-sm font-light tracking-wider">+1 (555) 123-4567</p>
//             </div>
//             <div className="text-center">
//               <MapPin className="text-mero-gold mx-auto mb-4" size={24} />
//               <p className="text-sm font-light tracking-wider">New York, NY</p>
//             </div>
//           </div>

//           <div className="max-w-2xl mx-auto">
//             <form className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <input
//                   type="text"
//                   placeholder="NAME"
//                   className="bg-transparent border-b border-mero-white/20 py-4 text-sm font-light tracking-wider placeholder-mero-white/40 focus:border-mero-gold focus:outline-none transition-colors"
//                 />
//                 <input
//                   type="email"
//                   placeholder="EMAIL"
//                   className="bg-transparent border-b border-mero-white/20 py-4 text-sm font-light tracking-wider placeholder-mero-white/40 focus:border-mero-gold focus:outline-none transition-colors"
//                 />
//               </div>
//               <input
//                 type="text"
//                 placeholder="SUBJECT"
//                 className="w-full bg-transparent border-b border-mero-white/20 py-4 text-sm font-light tracking-wider placeholder-mero-white/40 focus:border-mero-gold focus:outline-none transition-colors"
//               />
//               <textarea
//                 placeholder="MESSAGE"
//                 rows={4}
//                 className="w-full bg-transparent border-b border-mero-white/20 py-4 text-sm font-light tracking-wider placeholder-mero-white/40 focus:border-mero-gold focus:outline-none transition-colors resize-none"
//               />
//               <button
//                 type="submit"
//                 className="w-full md:w-auto px-12 py-4 bg-mero-gold text-mero-black font-light tracking-wider hover:bg-mero-gold/90 transition-colors duration-300"
//               >
//                 SEND MESSAGE
//               </button>
//             </form>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [ref, controls] = useScrollAnimation();

  return (
    <section id="contact" className="py-24 lg:py-32 bg-mero-black/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight tracking-wider mb-4">
              GET IN TOUCH
            </h2>
            <div className="w-16 h-px bg-mero-white mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
            <div className="text-center">
              <Mail className="text-mero-white mx-auto mb-4" size={24} />
              <p className="text-sm font-light tracking-wider">hello@merosound.com</p>
            </div>
            <div className="text-center">
              <Phone className="text-mero-white mx-auto mb-4" size={24} />
              <p className="text-sm font-light tracking-wider">+1 (555) 123-4567</p>
            </div>
            <div className="text-center">
              <MapPin className="text-mero-white mx-auto mb-4" size={24} />
              <p className="text-sm font-light tracking-wider">New York, NY</p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="NAME"
                  className="bg-transparent border-b border-mero-white/20 py-4 text-sm font-light tracking-wider placeholder-mero-white/40 focus:border-mero-white focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="EMAIL"
                  className="bg-transparent border-b border-mero-white/20 py-4 text-sm font-light tracking-wider placeholder-mero-white/40 focus:border-mero-white focus:outline-none transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="SUBJECT"
                className="w-full bg-transparent border-b border-mero-white/20 py-4 text-sm font-light tracking-wider placeholder-mero-white/40 focus:border-mero-white focus:outline-none transition-colors"
              />
              <textarea
                placeholder="MESSAGE"
                rows={4}
                className="w-full bg-transparent border-b border-mero-white/20 py-4 text-sm font-light tracking-wider placeholder-mero-white/40 focus:border-mero-white focus:outline-none transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full md:w-auto px-12 py-4 bg-mero-white text-mero-black font-light tracking-wider hover:bg-mero-white/90 transition-colors duration-300"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;