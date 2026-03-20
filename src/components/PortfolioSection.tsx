import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";
import p7 from "@/assets/portfolio-7.jpg";
import p8 from "@/assets/portfolio-8.jpg";
import p9 from "@/assets/portfolio-9.jpg";
import p10 from "@/assets/portfolio-10.jpg";
import p11 from "@/assets/portfolio-11.jpg";
import p12 from "@/assets/portfolio-12.jpg";
import p13 from "@/assets/portfolio-13.jpg";
import p14 from "@/assets/portfolio-14.jpg";
import p15 from "@/assets/portfolio-15.jpg";
import p16 from "@/assets/portfolio-16.jpg";
import p17 from "@/assets/portfolio-17.jpg";
import p18 from "@/assets/portfolio-18.jpg";
import p19 from "@/assets/portfolio-19.jpg";

const images = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19];

const getSpan = (i: number) => {
  const pattern = [false, true, false, false, true, false, true, false, false, false];
  return pattern[i % pattern.length] ? "md:row-span-2" : "";
};

const GalleryImage = ({
  img,
  index,
  onClick,
  inView,
}: {
  img: string;
  index: number;
  onClick: () => void;
  inView: boolean;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
    setTilt({ x: y, y: x });
  }, []);

  const handleMouseLeave = useCallback(() => setTilt({ x: 0, y: 0 }), []);

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden cursor-pointer group rounded-lg ${getSpan(index)}`}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: 0.05 * Math.min(index, 12),
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.2s ease-out",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <img
        src={img}
        alt={`Interior project ${index + 1}`}
        className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-primary/0 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/40 group-hover:shadow-[inset_0_0_20px_hsl(45_60%_53%/0.15)] transition-all duration-500" />

      <div className="absolute inset-0 flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
  <span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-black/75 text-white text-[10px] sm:text-sm font-medium tracking-[0.12em] uppercase border border-white/20 shadow-lg">
    Click to View
  </span>
</div>
    </motion.div>
  );
};

const PortfolioSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => ((prev ?? 0) + 1) % images.length);
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => ((prev ?? 0) - 1 + images.length) % images.length);
      } else if (e.key === "Escape") {
        setLightboxIndex(null);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex]);

  const touchStart = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null || lightboxIndex === null) return;

    const diff = e.changedTouches[0].clientX - touchStart.current;

    if (Math.abs(diff) > 50) {
      setLightboxIndex(
        diff > 0
          ? (lightboxIndex - 1 + images.length) % images.length
          : (lightboxIndex + 1) % images.length
      );
    }

    touchStart.current = null;
  };

  return (
    <section id="portfolio" className="section-padding relative" ref={ref}>
      <div className="container mx-auto">
        <motion.h2
          className="font-display text-3xl md:text-5xl lg:text-6xl font-light text-center gold-text-gradient mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Our Works
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[220px] md:auto-rows-[260px]">
          {images.map((img, i) => (
            <GalleryImage
              key={i}
              img={img}
              index={i}
              inView={inView}
              onClick={() => setLightboxIndex(i)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/92 backdrop-blur-md px-3 sm:px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="absolute inset-0"
              onClick={() => setLightboxIndex(null)}
              aria-hidden="true"
            />

            <div className="relative z-20 flex items-center justify-center w-full max-w-6xl px-10 sm:px-16">
              <motion.img
                key={lightboxIndex}
                src={images[lightboxIndex]}
                alt={`Project detail ${lightboxIndex + 1}`}
                className="max-w-[92vw] sm:max-w-[88vw] max-h-[78vh] sm:max-h-[84vh] object-contain rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                initial={{ scale: 0.94, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.94, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              />

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(null);
                }}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 md:top-5 md:right-5 z-50 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-black border-2 border-white text-white shadow-[0_12px_35px_rgba(0,0,0,0.65)] hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"
                aria-label="Close image preview"
                type="button"
              >
                <X strokeWidth={3} size={26} />
              </button>
            </div>

            <div className="absolute z-30 bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm sm:text-base font-medium">
              {lightboxIndex + 1} / {images.length}
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
              }}
              className="absolute z-30 left-2 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-black/70 border border-white/20 text-white hover:text-primary hover:border-primary/60 transition-all duration-300"
              aria-label="Previous image"
              type="button"
            >
              <ChevronLeft strokeWidth={2.5} size={28} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((lightboxIndex + 1) % images.length);
              }}
              className="absolute z-30 right-2 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-black/70 border border-white/20 text-white hover:text-primary hover:border-primary/60 transition-all duration-300"
              aria-label="Next image"
              type="button"
            >
              <ChevronRight strokeWidth={2.5} size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
