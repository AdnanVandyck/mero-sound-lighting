// import { motion } from 'framer-motion';
// import { useScrollAnimation } from '../hooks/useScrollAnimation';

// const About = () => {
//   const [ref, controls] = useScrollAnimation();

//   const stats = [
//     { number: '15+', label: 'Years Experience' },
//     { number: '500+', label: 'Events Delivered' },
//     { number: '100%', label: 'Client Satisfaction' },
//     { number: '24/7', label: 'Support Available' },
//   ];

//   return (
//     <section id="about" className="py-24 lg:py-32">
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
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
//             <div>
//               <h2 className="text-4xl md:text-5xl font-extralight tracking-wider mb-8">
//                 ABOUT <span className="text-mero-gold">MERO</span>
//               </h2>
//               <p className="text-lg font-extralight leading-relaxed text-mero-white/70 mb-6">
//                 We are pioneers in audiovisual excellence, transforming ordinary events 
//                 into extraordinary experiences through cutting-edge technology and 
//                 artistic vision.
//               </p>
//               <p className="text-lg font-extralight leading-relaxed text-mero-white/70">
//                 Our team of experts combines technical precision with creative innovation 
//                 to deliver solutions that exceed expectations and create lasting impressions.
//               </p>
//             </div>

//             <div className="grid grid-cols-2 gap-8">
//               {stats.map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   className="text-center lg:text-left"
//                 >
//                   <div className="text-3xl md:text-4xl font-light text-mero-gold mb-2">
//                     {stat.number}
//                   </div>
//                   <div className="text-sm font-extralight text-mero-white/60 tracking-wider">
//                     {stat.label.toUpperCase()}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;


import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const [ref, controls] = useScrollAnimation();

  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '500+', label: 'Events Delivered' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
  ];

  return (
    <section id="about" className="py-24 lg:py-32">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="text-4xl md:text-5xl font-extralight tracking-wider mb-8">
                ABOUT <span className="text-mero-white">MERO</span>
              </h2>
              <p className="text-lg font-extralight leading-relaxed text-mero-white/70 mb-6">
                We are pioneers in audiovisual excellence, transforming ordinary events 
                into extraordinary experiences through cutting-edge technology and 
                artistic vision.
              </p>
              <p className="text-lg font-extralight leading-relaxed text-mero-white/70">
                Our team of experts combines technical precision with creative innovation 
                to deliver solutions that exceed expectations and create lasting impressions.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="text-3xl md:text-4xl font-light text-mero-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm font-extralight text-mero-white/60 tracking-wider">
                    {stat.label.toUpperCase()}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
