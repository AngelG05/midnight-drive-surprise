import { motion } from "framer-motion";
import { useState } from "react";

interface DarkRoomProps {
  onLightsOn: () => void;
}

const DarkRoom = ({ onLightsOn }: DarkRoomProps) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-background flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      {/* Ambient glow effect when hovering switch */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: isHovering 
            ? "radial-gradient(circle at center, hsl(var(--primary) / 0.1) 0%, transparent 50%)" 
            : "transparent"
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Hint text */}
        <motion.p
          className="font-display text-xl md:text-2xl text-muted-foreground mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          It's dark in here...
        </motion.p>

        {/* Light Switch */}
        <motion.button
          onClick={onLightsOn}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="relative group"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Switch plate */}
          <div className="w-20 h-32 md:w-24 md:h-40 bg-muted rounded-lg border-2 border-border flex items-center justify-center shadow-lg group-hover:border-primary/50 transition-colors duration-300">
            {/* Switch toggle */}
            <motion.div 
              className="w-8 h-16 md:w-10 md:h-20 bg-card rounded border border-border shadow-inner"
              animate={{ 
                y: isHovering ? -4 : 4,
                boxShadow: isHovering 
                  ? "0 0 20px hsl(var(--primary) / 0.5)" 
                  : "inset 0 2px 4px rgba(0,0,0,0.3)"
              }}
              transition={{ duration: 0.2 }}
            />
          </div>
          
          {/* Glow effect on hover */}
          <motion.div
            className="absolute -inset-4 rounded-xl pointer-events-none"
            animate={{
              boxShadow: isHovering 
                ? "0 0 40px hsl(var(--primary) / 0.3)" 
                : "none"
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>

        {/* Instruction */}
        <motion.p
          className="font-display text-lg md:text-xl text-foreground/60 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          Switch on the lights
        </motion.p>
      </div>
    </motion.div>
  );
};

export default DarkRoom;
