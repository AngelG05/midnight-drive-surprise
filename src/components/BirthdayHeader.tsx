import { motion } from "framer-motion";
import { PartyPopper } from "lucide-react";

interface BirthdayHeaderProps {
  isVisible: boolean;
  recipientName?: string;
}

const BirthdayHeader = ({ isVisible, recipientName = "Champion" }: BirthdayHeaderProps) => {
  return (
    <motion.header
      className="text-center pt-8 md:pt-12 px-4"
      initial={{ opacity: 0, y: -30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Party icons */}
      <motion.div
        className="flex justify-center items-center gap-4 mb-4"
        initial={{ scale: 0 }}
        animate={isVisible ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div
          animate={{ rotate: [-10, 10, -10] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <PartyPopper className="w-8 h-8 md:w-10 md:h-10 text-gold" />
        </motion.div>
        
        <motion.span
          className="text-sm md:text-base font-body tracking-widest text-muted-foreground uppercase"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          A Special Surprise Awaits
        </motion.span>

        <motion.div
          animate={{ rotate: [10, -10, 10] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <PartyPopper className="w-8 h-8 md:w-10 md:h-10 text-gold transform scale-x-[-1]" />
        </motion.div>
      </motion.div>

      {/* Main title */}
      <motion.h1
        className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <span className="block text-muted-foreground text-xl md:text-2xl font-light mb-2 font-body">
          Step Outside,
        </span>
        <motion.span
          className="text-primary neon-text inline-block"
          animate={{
            textShadow: [
              "0 0 20px hsl(0 100% 50% / 0.6)",
              "0 0 40px hsl(0 100% 50% / 0.8)",
              "0 0 20px hsl(0 100% 50% / 0.6)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {recipientName}
        </motion.span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="font-body text-lg md:text-xl text-muted-foreground mt-4 max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Something incredible is waiting for you on the streets tonight...
      </motion.p>
    </motion.header>
  );
};

export default BirthdayHeader;