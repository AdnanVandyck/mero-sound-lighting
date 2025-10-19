// import { motion } from 'framer-motion';
// import { useScrollAnimation } from '../hooks/useScrollAnimation';

// const Portfolio = () => {
//   const [ref, controls] = useScrollAnimation();

//   const projects = [
//     {
//       title: 'SYMPHONY HALL',
//       category: 'Concert Venue',
//       year: '2024',
//     },
//     {
//       title: 'TECH SUMMIT',
//       category: 'Corporate Event',
//       year: '2024',
//     },
//     {
//       title: 'AURORA FESTIVAL',
//       category: 'Music Festival',
//       year: '2023',
//     },
//     {
//       title: 'GRAND GALA',
//       category: 'Private Event',
//       year: '2023',
//     },
//   ];

//   return (
//     <section id="portfolio" className="py-24 lg:py-32 bg-mero-black/50">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12">
//         <motion.div
//           ref={ref}
//           animate={controls}
//           initial="hidden"
//           variants={{
//             hidden: { opacity: 0 },
//             visible: {
//               opacity: 1,
//               transition: { staggerChildren: 0.2 },
//             },
//           }}
//         >
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-extralight tracking-wider mb-4">
//               PORTFOLIO
//             </h2>
//             <div className="w-16 h-px bg-mero-gold mx-auto" />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-mero-white/10">
//             {projects.map((project, index) => (
//               <motion.div
//                 key={index}
//                 variants={{
//                   hidden: { opacity: 0, scale: 0.95 },
//                   visible: { opacity: 1, scale: 1 },
//                 }}
//                 className="bg-mero-black p-12 lg:p-16 group cursor-pointer hover:bg-mero-black/70 transition-colors duration-500"
//               >
//                 <div className="flex justify-between items-start mb-4">
//                   <div>
//                     <h3 className="text-2xl font-light tracking-wider mb-2 group-hover:text-mero-gold transition-colors">
//                       {project.title}
//                     </h3>
//                     <p className="text-sm font-extralight text-mero-white/60">
//                       {project.category}
//                     </p>
//                   </div>
//                   <span className="text-sm font-extralight text-mero-white/40">
//                     {project.year}
//                   </span>
//                 </div>
//                 <div className="w-full h-px bg-mero-white/10 group-hover:bg-mero-gold/30 transition-colors duration-500" />
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Portfolio;

import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Portfolio = () => {
  const [ref, controls] = useScrollAnimation();

  const projects = [
    {
      title: 'SYMPHONY HALL',
      category: 'Concert Venue',
      year: '2024',
    },
    {
      title: 'TECH SUMMIT',
      category: 'Corporate Event',
      year: '2024',
    },
    {
      title: 'AURORA FESTIVAL',
      category: 'Music Festival',
      year: '2023',
    },
    {
      title: 'GRAND GALA',
      category: 'Private Event',
      year: '2023',
    },
  ];

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-mero-black/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight tracking-wider mb-4">
              PORTFOLIO
            </h2>
            <div className="w-16 h-px bg-mero-white mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-mero-white/10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: { opacity: 1, scale: 1 },
                }}
                className="bg-mero-black p-12 lg:p-16 group cursor-pointer hover:bg-mero-white/5 transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-light tracking-wider mb-2 group-hover:text-mero-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-extralight text-mero-white/60">
                      {project.category}
                    </p>
                  </div>
                  <span className="text-sm font-extralight text-mero-white/40">
                    {project.year}
                  </span>
                </div>
                <div className="w-full h-px bg-mero-white/10 group-hover:bg-mero-white/30 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;