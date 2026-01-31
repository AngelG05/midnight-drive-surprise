import { motion } from "framer-motion";
import f1CarImage from "@/assets/f1-car-night.jpg";

interface F1CarRevealProps {
  isVisible: boolean;
}

const F1CarReveal = ({ isVisible }: F1CarRevealProps) => {
  return (
    <motion.div
      className="relative w-full max-w-5xl mx-auto"
      initial={{ opacity: 0, scale: 0.8, x: 100, filter: "blur(10px)" }}
      animate={isVisible ? { 
        opacity: 1, 
        scale: 1, 
        x: 0, 
        filter: "blur(0px)" 
      } : {}}
      transition={{ 
        duration: 1.5, 
        ease: [0.16, 1, 0.3, 1] 
      }}
    >
      {/* Car glow effect */}
      <motion.div
        className="absolute inset-0 -m-8 rounded-3xl"
        style={{
          background: "radial-gradient(ellipse at center, hsl(0 100% 50% / 0.3) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main car image */}
      <motion.div
        className="relative rounded-2xl overflow-hidden car-glow"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={f1CarImage}
          alt="Red F1 Sports Car on Night Streets"
          className="w-full h-auto object-cover"
        />

        {/* Overlay gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

        {/* Bottom reflection */}
        <div className="absolute bottom-0 left-0 right-0 h-1/4 street-reflection" />
      </motion.div>

      {/* Ground reflection */}
      <motion.div
        className="relative h-24 overflow-hidden opacity-30"
        style={{
          transform: "scaleY(-1)",
          maskImage: "linear-gradient(to top, transparent, black)",
          WebkitMaskImage: "linear-gradient(to top, transparent, black)",
        }}
      >
        <img
          src={f1CarImage}
          alt=""
          className="w-full h-auto object-cover blur-sm"
        />
      </motion.div>
    </motion.div>
  );
};

export default F1CarReveal;