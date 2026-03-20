import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Droplets, DoorClosed, LayoutGrid, Wrench, Clock, Paintbrush, HeartHandshake } from "lucide-react";

const features = [
  { icon: Droplets, title: "Water Resistant Kitchens" },
  { icon: DoorClosed, title: "Soft Close Shutters" },
  { icon: LayoutGrid, title: "Soft Close Drawers" },
  { icon: Wrench, title: "SS-304 Kitchen Hinges" },
  { icon: Clock, title: "Delivery Within 35–40 Days" },
  { icon: Paintbrush, title: "100% Custom Made Interiors" },
  { icon: HeartHandshake, title: "Lifetime Service Support" },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative" ref={ref}>
      <div className="container mx-auto">
        <motion.h2
          className="font-display text-3xl md:text-5xl lg:text-6xl font-light text-center gold-text-gradient mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Why Choose Us
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="glass-card p-6 text-center group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
            >
              <motion.div
                className="mx-auto mb-3 w-12 h-12 rounded-full flex items-center justify-center border border-primary/30"
                whileHover={{ scale: 1.1, boxShadow: "0 0 20px hsl(45 60% 53% / 0.3)" }}
              >
                <f.icon size={20} strokeWidth={1} className="text-primary" />
              </motion.div>
              <p className="text-sm text-muted-foreground">{f.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
