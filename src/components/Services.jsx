// import { motion } from 'framer-motion';
// import { useScrollAnimation } from '../hooks/useScrollAnimation';
// import { Music, Lightbulb, Users, Settings } from 'lucide-react';

// const Services = () => {
//   const [ref, controls] = useScrollAnimation();

//   const services = [
//     {
//       icon: <Music size={32} />,
//       title: 'SOUND DESIGN',
//       description: 'Crystal-clear audio systems tailored to your venue',
//     },
//     {
//       icon: <Lightbulb size={32} />,
//       title: 'LIGHTING DESIGN',
//       description: 'Atmospheric lighting that transforms spaces',
//     },
//     {
//       icon: <Users size={32} />,
//       title: 'EVENT PRODUCTION',
//       description: 'Full-service coordination for flawless execution',
//     },
//     {
//       icon: <Settings size={32} />,
//       title: 'TECHNICAL SUPPORT',
//       description: '24/7 professional support for peace of mind',
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <section id="services" className="py-24 lg:py-32">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12">
//         <motion.div
//           ref={ref}
//           animate={controls}
//           initial="hidden"
//           variants={containerVariants}
//         >
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-extralight tracking-wider mb-4">
//               OUR SERVICES
//             </h2>
//             <div className="w-16 h-px bg-mero-gold mx-auto" />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 className="text-center group"
//               >
//                 <div className="text-mero-gold mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
//                   {service.icon}
//                 </div>
//                 <h3 className="text-lg font-light tracking-wider mb-3">
//                   {service.title}
//                 </h3>
//                 <p className="text-sm font-extralight text-mero-white/60 leading-relaxed">
//                   {service.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Services;

import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Music, Lightbulb, Users, Settings } from 'lucide-react';

const Services = () => {
  const [ref, controls] = useScrollAnimation();

  const services = [
    {
      icon: <Music size={32} />,
      title: 'SOUND DESIGN',
      description: 'Crystal-clear audio systems tailored to your venue',
    },
    {
      icon: <Lightbulb size={32} />,
      title: 'LIGHTING DESIGN',
      description: 'Atmospheric lighting that transforms spaces',
    },
    {
      icon: <Users size={32} />,
      title: 'EVENT PRODUCTION',
      description: 'Full-service coordination for flawless execution',
    },
    {
      icon: <Settings size={32} />,
      title: 'TECHNICAL SUPPORT',
      description: '24/7 professional support for peace of mind',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={containerVariants}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight tracking-wider mb-4">
              OUR SERVICES
            </h2>
            <div className="w-16 h-px bg-mero-white mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="text-mero-white mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-light tracking-wider mb-3">
                  {service.title}
                </h3>
                <p className="text-sm font-extralight text-mero-white/60 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;