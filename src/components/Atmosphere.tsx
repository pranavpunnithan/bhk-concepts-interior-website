import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const particles = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  delay: Math.random() * 15,
  duration: 10 + Math.random() * 15,
  size: 1 + Math.random() * 2,
}));

const GoldParticles = () => (
  <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
    {particles.map((p) => (
      <motion.div
        key={p.id}
        className="absolute rounded-sm bg-primary"
        style={{
          width: p.size,
          height: p.size,
          left: `${p.x}%`,
          bottom: -10,
        }}
        animate={{
          y: [0, -window.innerHeight - 100],
          rotate: [0, 720],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: p.duration,
          delay: p.delay,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    ))}
  </div>
);

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50 hidden md:block"
      style={{
        left: pos.x - 20,
        top: pos.y - 20,
        width: 40,
        height: 40,
        background: "radial-gradient(circle, hsl(45 60% 53% / 0.15) 0%, transparent 70%)",
        borderRadius: "50%",
        filter: "blur(8px)",
      }}
    />
  );
};

const GradientBackground = () => (
  <div
    className="fixed inset-0 pointer-events-none z-0"
    style={{
      background: "radial-gradient(ellipse at 20% 50%, hsl(45 60% 53% / 0.04) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, hsl(45 60% 53% / 0.03) 0%, transparent 50%)",
    }}
  />
);

export { GoldParticles, CursorGlow, GradientBackground };
