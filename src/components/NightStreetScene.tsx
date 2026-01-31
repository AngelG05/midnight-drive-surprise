import { motion } from "framer-motion";
import { ReactNode } from "react";

interface NightStreetSceneProps {
  children: ReactNode;
}

const NightStreetScene = ({ children }: NightStreetSceneProps) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden night-scene">
      {/* Stars layer */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-foreground/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 40}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* City glow on horizon */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-night-street via-transparent to-transparent" />
      </div>

      {/* Street light reflections */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent 0%, hsl(45 100% 50% / 0.05) 25%, transparent 50%, hsl(45 100% 50% / 0.05) 75%, transparent 100%)",
          backgroundSize: "200% 100%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "200% 0%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Neon red ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2"
          style={{
            background: "radial-gradient(ellipse at center bottom, hsl(0 100% 50% / 0.15) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default NightStreetScene;