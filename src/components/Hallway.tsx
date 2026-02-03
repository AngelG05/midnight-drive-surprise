import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { DoorClosed } from "lucide-react";

interface HallwayProps {
  onGoBackInside: () => void;
}

const Hallway = ({ onGoBackInside }: HallwayProps) => {
  const [currentMessage, setCurrentMessage] = useState(-1);
  const [showButton, setShowButton] = useState(false);

  const messages = [
    "Hey!",
    "Maybe it's a bit late to move in the hallway,",
    "Things are creepy here...",
    "I think we should go back inside."
  ];

  useEffect(() => {
    // Show messages sequentially with 5 second intervals (matching original)
    const timers: NodeJS.Timeout[] = [];
    
    // Start first message after a brief delay
    timers.push(setTimeout(() => setCurrentMessage(0), 500));
    
    messages.forEach((_, index) => {
      if (index > 0) {
        timers.push(
          setTimeout(() => {
            setCurrentMessage(index);
          }, 500 + 5000 * index)
        );
      }
    });

    // Show button after all messages
    timers.push(
      setTimeout(() => {
        setShowButton(true);
      }, 500 + 5000 * messages.length)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Hallway background - dark and creepy */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(transparent, #000), linear-gradient(180deg, hsl(220 30% 8%) 0%, hsl(222 40% 5%) 50%, hsl(220 35% 3%) 100%)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      {/* Spooky ambient particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-foreground/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 w-full max-w-4xl">
        {/* Sequential messages */}
        {messages.map((message, index) => (
          <motion.p
            key={index}
            className="font-display text-2xl md:text-4xl lg:text-5xl text-foreground absolute left-1/2 top-[20%] -translate-x-1/2 -translate-y-1/2 w-[80vw]"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentMessage >= index ? 1 : 0,
              display: currentMessage === index ? "block" : "none"
            }}
            transition={{ duration: 1 }}
          >
            {message}
          </motion.p>
        ))}

        {/* Door Button - to go back inside */}
        <motion.button
          onClick={onGoBackInside}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group"
          initial={{ opacity: 0 }}
          animate={{ opacity: showButton ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Door icon */}
          <DoorClosed 
            className="w-16 h-16 md:w-20 md:h-20 text-foreground/60 group-hover:text-foreground transition-colors duration-300"
            strokeWidth={1.5}
          />
        </motion.button>

        {/* CTA Text */}
        <motion.p
          className="absolute left-1/2 bottom-1/4 -translate-x-1/2 font-body text-lg md:text-xl text-foreground/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: showButton ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Click to go back inside
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Hallway;
