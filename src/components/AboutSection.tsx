import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: 80 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="h-[1px] bg-primary mx-auto mb-8"
        />
        <motion.h2
          className="font-display text-3xl md:text-5xl lg:text-6xl font-light gold-text-gradient mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Let's Get To Know More About Us
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          BHK Concepts is a dedicated team delivering home interiors in Bangalore and Kerala. We design minimal and space-managing interiors to maximize the usage of every corner of your home. Our approach combines functionality with aesthetics, ensuring every space reflects your personality while maintaining the highest standards of craftsmanship.
        </motion.p>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: 80 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="h-[1px] bg-primary mx-auto mt-8"
        />
      </div>
    </section>
  );
};

export default AboutSection;
