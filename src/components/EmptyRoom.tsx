import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface EmptyRoomProps {
  onMoveOutside: () => void;
}

const EmptyRoom = ({ onMoveOutside }: EmptyRoomProps) => {
  const [showFirstText, setShowFirstText] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Sequential text reveal
    const timer1 = setTimeout(() => setShowFirstText(true), 500);
    const timer2 = setTimeout(() => setShowSecondText(true), 3500);
    const timer3 = setTimeout(() => setShowButton(true), 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Warm room background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-background to-muted" />
      
      {/* Subtle light rays from above */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, hsl(var(--foreground) / 0.05) 0%, transparent 60%)"
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        {/* First text - fade in and out */}
        <motion.p
          className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: showFirstText ? [0, 1, 1, 0] : 0,
          }}
          transition={{ 
            duration: 2.5,
            times: [0, 0.2, 0.7, 1],
          }}
        >
          Look around... it's empty.
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
          Let's move outside
        </motion.p>

        {/* CTA Button */}
        <motion.button
          onClick={onMoveOutside}
          className="font-display text-xl md:text-2xl text-foreground/90 px-8 py-3 border border-foreground/30 rounded-full hover:border-foreground/60 hover:text-foreground transition-all duration-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: showButton ? 1 : 0 }}
          transition={{ duration: 1.5 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Step outside →
        </motion.button>
      </div>
    </motion.div>
  );
};

export default EmptyRoom;
