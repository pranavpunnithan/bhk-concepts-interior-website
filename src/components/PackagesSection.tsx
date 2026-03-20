import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Crown, Star, Gem } from "lucide-react";

const packages = [
  {
    icon: Star,
    title: "Essential",
    price: "₹3,26,500",
    desc: "Furnish 2 BHK with wardrobes, kitchen, TV unit, hand wash unit and pooja unit.",
  },
  {
    icon: Crown,
    title: "Standard",
    price: "₹3,70,250",
    desc: "Furnish 3 BHK with wardrobes, kitchen, TV unit, hand wash unit and pooja unit.",
    featured: true,
  },
  {
    icon: Gem,
    title: "Luxury",
    price: "₹5,65,499",
    desc: "Unlimited designs and materials for a complete premium interior experience.",
  },
];

const PackagesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="packages" className="section-padding relative" ref={ref}>
      <div className="container mx-auto">
        <motion.h2
          className="font-display text-3xl md:text-5xl lg:text-6xl font-light text-center gold-text-gradient mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Our Packages
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.title}
              className={`glass-card p-8 text-center relative overflow-hidden ${
                pkg.featured
                  ? "gold-border-glow gold-glow-strong"
                  : "gold-border-glow"
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.03, y: -5 }}
              style={pkg.featured ? { animation: "pulse-gold 3s ease-in-out infinite" } : {}}
            >
              <pkg.icon className="mx-auto mb-4 text-primary" size={36} strokeWidth={1} />
              <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2">{pkg.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{pkg.desc}</p>
              <p className="font-display text-3xl md:text-4xl gold-text-gradient tracking-tight" style={{ fontVariantNumeric: "tabular-nums", letterSpacing: "-0.05em" }}>
                {pkg.price}
              </p>
              <p className="text-xs text-muted-foreground mt-1">Starting price</p>

              <motion.a
                href="https://wa.me/918075765780"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 border border-primary/50 px-6 py-3 text-xs uppercase tracking-[0.2em] text-primary relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
              >
                <span className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                <span className="relative z-10 group-hover:text-primary-foreground transition-colors duration-500">
                  Get Started
                </span>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
