import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bhkLogoSvg from "@/assets/bhk-logo.svg";

import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const heroImages = [portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6];

const wordVariants = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: 0,
    transition: {
      duration: 0.8,
      delay: 3.0 + i * 0.1,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const line1 = ["Giving", "Your", "Home"];
  const line2 = ["A", "New", "Style"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative isolate h-[100svh] min-h-[100svh] overflow-hidden bg-background"
    >
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentImage}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.5 },
            scale: { duration: 8, ease: "linear" },
          }}
        >
          <img
            src={heroImages[currentImage]}
            alt="Luxury interior"
            className="w-full h-full object-cover brightness-110 contrast-105"
          />
        </motion.div>
      </AnimatePresence>

      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.62) 35%, rgba(0,0,0,0.72) 70%, rgba(0,0,0,0.86) 100%)",
        }}
      />

      <div className="relative z-20 h-[100svh] flex items-center justify-center px-4 sm:px-6 md:px-8">
        <div className="w-full max-w-4xl h-full flex flex-col items-center justify-center text-center pt-[74px] sm:pt-[80px] md:pt-[86px] pb-[18px] sm:pb-[22px] md:pb-[26px]">
          
          <motion.img
            src={bhkLogoSvg}
            alt="BHK Concepts - Interior Design Studio"
            className="w-[220px] sm:w-[250px] md:w-[285px] lg:w-[320px] h-auto shrink-0"
            style={{
              filter:
                "drop-shadow(0px 10px 30px rgba(0,0,0,0.78)) brightness(1.24) contrast(1.16) saturate(1.1)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: -8 }}
            transition={{ duration: 1, delay: 2.5, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="h-1.5 sm:h-2 md:h-3 shrink-0" />

          <h1 className="font-display text-[clamp(1.18rem,2.9vw,2.5rem)] font-semibold leading-[1.2] shrink-0 overflow-visible py-1">
            <span className="block">
              {line1.map((word, i) => (
                <span key={i} className="inline-block overflow-visible mr-2 sm:mr-3 py-[2px]">
                  <motion.span
                    className="inline-block gold-text-gradient"
                    style={{ textShadow: "0 4px 18px rgba(0,0,0,0.45)" }}
                    variants={wordVariants}
                    initial="hidden"
                    animate="visible"
                    custom={i}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </span>

            <span className="block mt-0.5">
              {line2.map((word, i) => (
                <span key={i} className="inline-block overflow-visible mr-2 sm:mr-3 py-[2px]">
                  <motion.span
                    className="inline-block gold-text-gradient"
                    style={{ textShadow: "0 4px 18px rgba(0,0,0,0.45)" }}
                    variants={wordVariants}
                    initial="hidden"
                    animate="visible"
                    custom={i + line1.length}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </span>
          </h1>

          <div className="h-2 sm:h-3 md:h-4 shrink-0" />

          <motion.p
            className="text-foreground text-[0.76rem] sm:text-sm md:text-[0.95rem] max-w-3xl mx-auto leading-[1.42] px-3 sm:px-4 font-semibold shrink-0"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.72)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.8, ease: [0.22, 1, 0.36, 1] }}
          >
            BHK Concepts delivers affordable home interiors without compromising on quality and
            materials. We create functional and reliable homes in Bangalore and Kerala.
          </motion.p>

          <div className="h-3 sm:h-4 md:h-4 shrink-0" />

          <motion.a
            href="https://wa.me/918075765780"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border-2 border-primary px-6 sm:px-8 py-3 sm:py-3.5 min-h-[48px] text-[0.72rem] sm:text-xs font-semibold uppercase tracking-[0.2em] text-primary relative overflow-hidden group shrink-0"
            style={{
              boxShadow:
                "0 0 0 1px rgba(255,215,0,0.22), 0 8px 24px rgba(0,0,0,0.28)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.03 }}
          >
            <span className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            <span className="relative z-10 group-hover:text-primary-foreground transition-colors duration-500">
              Book Consultation
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
