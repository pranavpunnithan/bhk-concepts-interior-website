import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Home, Sofa, UtensilsCrossed, Baby, BedDouble, Church, ChefHat } from "lucide-react";

const services = [
  { icon: Home, title: "Foyer Design" },
  { icon: Sofa, title: "Living Room Interiors" },
  { icon: UtensilsCrossed, title: "Dining Room Interiors" },
  { icon: Baby, title: "Kids Bedroom" },
  { icon: BedDouble, title: "Guest Bedroom" },
  { icon: Church, title: "Prayer / Pooja Room" },
  { icon: ChefHat, title: "Customized Kitchen" },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative" ref={ref}>
      <div className="container mx-auto">
        <motion.h2
          className="font-display text-3xl md:text-5xl lg:text-6xl font-light text-center gold-text-gradient mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="glass-card gold-border-glow p-8 text-center group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, boxShadow: "0 0 30px hsl(45 60% 53% / 0.2)" }}
            >
              <service.icon
                className="mx-auto mb-4 text-primary transition-transform duration-400 group-hover:scale-110"
                size={36}
                strokeWidth={1}
              />
              <h3 className="font-display text-xl text-foreground">{service.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
