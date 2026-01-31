import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ConfettiCelebration = () => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    delay: number;
    duration: number;
    color: string;
    size: number;
    rotation: number;
  }>>([]);

  useEffect(() => {
    const colors = [
      "hsl(0 85% 50%)", // red
      "hsl(45 100% 50%)", // gold
      "hsl(0 0% 100%)", // white
      "hsl(0 90% 60%)", // light red
      "hsl(220 60% 50%)", // blue accent
    ];

    const newParticles = Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 6 + Math.random() * 10,
      rotation: Math.random() * 360,
    }));

    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: -20,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            borderRadius: Math.random() > 0.5 ? "50%" : "2px",
            rotate: particle.rotation,
          }}
          initial={{ y: -20, opacity: 1, rotate: particle.rotation }}
          animate={{
            y: "100vh",
            opacity: [1, 1, 0],
            rotate: particle.rotation + 720,
            x: [0, Math.sin(particle.id) * 100, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            ease: "easeIn",
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
};

export default ConfettiCelebration;