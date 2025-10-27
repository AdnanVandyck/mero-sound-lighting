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

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight tracking-wider mb-4">
              WE BRING YOUR VISION TO LIGHT
            </h2>
            <div className="w-16 h-px bg-mero-white mx-auto" />
          </div>


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="text-4xl md:text-5xl font-extralight tracking-wider mb-8">
                The Mero Way{/*  <span className="text-mero-white">MERO</span> */}
              </h2>
              <p className="text-lg font-extralight leading-relaxed text-mero-white/70 mb-6">
                At Mero Sound and Lighting, we specialize in transforming spaces with cutting-edge technology and seamless design. 
                Whether it’s enhancing a restaurant, nightclub, or home, or providing the right equipment for your next event, 
                we deliver solutions that are tailored to your needs.
              </p>
                <h2 className="text-4xl md:text-5xl font-extralight tracking-wider mb-8">
                What We Do
              </h2>
              <p className="text-lg font-extralight leading-relaxed text-mero-white/70 mb-6">
                From powerful professional sound systems to immersive LED lighting designs, we bring clarity, atmosphere, and energy into every environment. 
                Our team also provides modern business solutions such as point-of-sale and camera systems to help operations run smoothly and securely.
                Planning a wedding, conference, or private event? We offer everything from PA and microphone rentals to DJ gear, photo booths, and more- 
                all backed by reliable setup and support, so you can focus on your guests and your moment.
                Whether it’s a permanent installation or a one-time rental, our mission is simple: 
                bring your vision to life with sound, light, and technology that impresses.
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
