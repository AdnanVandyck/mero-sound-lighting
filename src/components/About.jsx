import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ClientMarquee from '../components/ClientMarquee';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, when: 'beforeChildren' },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

const clients = [
  "Skinny's Cantina",
  "El Coco",
  "Meli Estiatorio",
  "Panda",
  "Delmonico",
  "Pappas",
  "Marbella",
  "Rosewood Theater", // fixed typo from “Theather”
  "Katina Kitten",
  "Cabinet",
  "Maze",
  "Mojo",
];

const About = () => {
  const [ref, controls] = useScrollAnimation();

  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={container}
        >
          {/* Section Header */}
          <motion.div className="mb-16" variants={item}>
            <motion.h2
              className="text-4xl md:text-5xl font-extralight tracking-wider mb-4"
              variants={item}
            >
              WE BRING YOUR VISION TO LIGHT
            </motion.h2>
            <motion.div className="w-16 h-px bg-mero-white mx-auto" variants={item} />
          </motion.div>

          {/* The Mero Way */}
          <motion.div className="mb-16" variants={container}>
            <motion.h3
              className="text-3xl md:text-4xl font-extralight tracking-wider mb-8"
              variants={item}
            >
              The Mero Way
            </motion.h3>
            <motion.p
              className="text-lg font-extralight leading-relaxed text-mero-white/70 mb-6"
              variants={item}
            >
              At Mero Sound and Lighting, we specialize in transforming spaces with
              cutting-edge technology and seamless design. Whether it’s enhancing a
              restaurant, nightclub, or home, or providing the right equipment for your
              next event, we deliver solutions that are tailored to your needs.
            </motion.p>
          </motion.div>



          {/* What We Do */}
          <motion.div variants={container}>
            <motion.h3
              className="text-3xl md:text-4xl font-extralight tracking-wider mb-8"
              variants={item}
            >
              What We Do
            </motion.h3>
            <motion.p
              className="text-lg font-extralight leading-relaxed text-mero-white/70 mb-6"
              variants={item}
            >
              From powerful professional sound systems to immersive LED lighting designs,
              we bring clarity, atmosphere, and energy into every environment. Our team
              also provides modern business solutions such as point-of-sale and camera
              systems to help operations run smoothly and securely.
            </motion.p>
            <motion.p
              className="text-lg font-extralight leading-relaxed text-mero-white/70"
              variants={item}
            >
              Planning a wedding, conference, or private event? We offer everything from
              PA and microphone rentals to DJ gear, photo booths, and more—all backed by
              reliable setup and support, so you can focus on your guests and your moment.
              Whether it’s a permanent installation or a one-time rental, our mission is
              simple: bring your vision to life with sound, light, and technology that
              impresses.
            </motion.p>
          </motion.div>

          <ClientMarquee items={clients} />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
