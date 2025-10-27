import { motion } from "framer-motion";

const rowVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function ClientMarquee({ items = [] }) {
  // Duplicate list for seamless looping
  const loop = [...items, ...items];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h3
          className="text-3xl md:text-4xl font-extralight tracking-wider mb-10"
          variants={rowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Our Clients
        </motion.h3>

        <div
          className="relative group overflow-hidden"
          aria-label="Client logos and names scrolling marquee"
        >
          {/* Edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-mero-black to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-mero-black to-transparent" />

          {/* Track */}
          <div
            className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]"
            role="list"
          >
            {loop.map((name, i) => (
              <span
                key={`${name}-${i}`}
                role="listitem"
                className="mx-6 md:mx-10 text-sm md:text-base font-extralight tracking-wide text-mero-white/80 hover:text-mero-gold transition-colors"
              >
                {name}
              </span>
            ))}
          </div>

          {/* Reduced motion: show static grid instead */}
          <noscript />
        </div>

        {/* Static fallback for prefers-reduced-motion users */}
        <div className="sr-only">
          <ul>
            {items.map((name, i) => (
              <li key={`sr-${name}-${i}`}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
