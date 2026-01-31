import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface CarExteriorSceneProps {
  onAcceptRide: () => void;
}

const CarExteriorScene = ({ onAcceptRide }: CarExteriorSceneProps) => {
  const [showFirstText, setShowFirstText] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Sequential text reveal like the original
    const timer1 = setTimeout(() => setShowFirstText(true), 500);
    const timer2 = setTimeout(() => setShowSecondText(true), 4000);
    const timer3 = setTimeout(() => setShowButton(true), 7000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <motion.div
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/70 to-background/80 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* First text - fade in and out style */}
        <motion.p
          className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: showFirstText ? [0, 1, 1, 0] : 0,
          }}
          transition={{ 
            duration: 3,
            times: [0, 0.2, 0.8, 1],
          }}
        >
          Oh well well, now that's what we are talking about.
        </motion.p>

        {/* Second text - fade in and stay */}
        <motion.p
          className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: showSecondText ? 1 : 0,
          }}
          transition={{ duration: 1.5 }}
        >
          Do you mind a ride?
        </motion.p>

        {/* CTA Button - simple elegant style */}
        <motion.button
          onClick={onAcceptRide}
          className="font-display text-2xl md:text-3xl text-foreground px-10 py-4 border-2 border-foreground/50 rounded-full hover:bg-foreground/10 transition-all duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: showButton ? 1 : 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.8)" }}
          whileTap={{ scale: 0.95 }}
        >
          Yes, let's go!
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CarExteriorScene;