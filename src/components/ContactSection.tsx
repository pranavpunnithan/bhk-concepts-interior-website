import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="font-display text-3xl md:text-5xl lg:text-6xl font-light text-center gold-text-gradient mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Phone */}
          <motion.div
            className="glass-card gold-border-glow p-6"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Phone className="text-primary mb-3" size={24} strokeWidth={1} />
            <h3 className="font-display text-xl text-foreground mb-2">Phone</h3>
            <a href="tel:8075765780" className="block text-muted-foreground hover:text-primary transition-colors">8075765780</a>
            <a href="tel:6282640508" className="block text-muted-foreground hover:text-primary transition-colors">6282640508</a>
          </motion.div>

          {/* Email */}
          <motion.div
            className="glass-card gold-border-glow p-6"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Mail className="text-primary mb-3" size={24} strokeWidth={1} />
            <h3 className="font-display text-xl text-foreground mb-2">Email</h3>
            <a href="mailto:bhkconcepts@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              bhkconcepts@gmail.com
            </a>
          </motion.div>

          {/* Locations */}
          <motion.div
            className="glass-card gold-border-glow p-6"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <MapPin className="text-primary mb-3" size={24} strokeWidth={1} />
            <h3 className="font-display text-xl text-foreground mb-2">Locations</h3>
            <p className="text-muted-foreground text-sm">Brookfield, Bangalore</p>
            <p className="text-muted-foreground text-sm">Chemperi, Kannur (Opposite Vimal Jyothi Engineering College)</p>
          </motion.div>

          {/* Social */}
          <motion.div
            className="glass-card gold-border-glow p-6"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Instagram className="text-primary mb-3" size={24} strokeWidth={1} />
            <h3 className="font-display text-xl text-foreground mb-2">Follow Us</h3>
            <a
              href="https://www.instagram.com/bhkconcepts?igsh=eHN4Z2JuZGZlN3Bu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              @bhkconcepts
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
