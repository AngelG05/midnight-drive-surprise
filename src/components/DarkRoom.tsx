import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Lightbulb } from "lucide-react";

interface DarkRoomProps {
  onLightsOn: () => void;
  recipientName?: string;
}

const DarkRoom = ({ onLightsOn, recipientName = "Friend" }: DarkRoomProps) => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [messagesComplete, setMessagesComplete] = useState(false);

  const messages = [
    "Hey!",
    "Why is it so dark here?",
    `${recipientName}! Can you please switch on the lights?`
  ];

  useEffect(() => {
    // Show messages sequentially with 5 second intervals (matching original)
    const timers: NodeJS.Timeout[] = [];
    
    messages.forEach((_, index) => {
      timers.push(
        setTimeout(() => {
          setCurrentMessage(index);
          if (index === messages.length - 1) {
            setMessagesComplete(true);
            setTimeout(() => setShowButton(true), 1000);
          }
        }, 5000 * index)
      );
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "#000" }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      {/* Sequential messages */}
      <div className="relative z-10 text-center px-4 w-full max-w-4xl">
        {messages.map((message, index) => (
          <motion.p
            key={index}
            className="font-display text-2xl md:text-4xl lg:text-5xl text-foreground absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 w-[80vw]"
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

        {/* Light Bulb Button */}
        <motion.button
          onClick={onLightsOn}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group"
          initial={{ opacity: 0 }}
          animate={{ opacity: showButton ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Bulb container */}
          <div className="relative">
            {/* Glow effect on hover */}
            <motion.div
              className="absolute inset-0 rounded-full blur-xl"
              initial={{ opacity: 0 }}
              whileHover={{ 
                opacity: 1,
                backgroundColor: "hsl(45 100% 50% / 0.4)"
              }}
              style={{ 
                width: "120px", 
                height: "120px",
                left: "-20px",
                top: "-20px"
              }}
            />
            
            {/* Bulb icon */}
            <Lightbulb 
              className="w-16 h-16 md:w-20 md:h-20 text-foreground/60 group-hover:text-gold transition-colors duration-300"
              strokeWidth={1.5}
            />
          </div>
        </motion.button>

        {/* CTA Text */}
        <motion.p
          className="absolute left-1/2 bottom-1/4 -translate-x-1/2 font-body text-lg md:text-xl text-foreground/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: showButton ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Click the Light Bulb.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default DarkRoom;
