import { motion } from "framer-motion";
import { useState } from "react";
import { Sparkles, Zap, Heart } from "lucide-react";

interface RideQuestionProps {
  isVisible: boolean;
  onAccept: () => void;
}

const RideQuestion = ({ isVisible, onAccept }: RideQuestionProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hasAccepted, setHasAccepted] = useState(false);

  const handleAccept = () => {
    setHasAccepted(true);
    onAccept();
  };

  return (
    <motion.div
      className="text-center mt-12 px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      {/* Question text */}
      <motion.h2
        className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4 neon-text tracking-wider"
        initial={{ opacity: 0, letterSpacing: "0.5em" }}
        animate={isVisible ? { opacity: 1, letterSpacing: "0.1em" } : {}}
        transition={{ duration: 1, delay: 1 }}
      >
        Ready for the Ride of Your Life?
      </motion.h2>

      <motion.p
        className="font-body text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1.3 }}
      >
        This is your birthday surprise. The keys are waiting. 
        <span className="text-primary font-semibold"> Will you take the wheel?</span>
      </motion.p>

      {/* CTA Button */}
      {!hasAccepted ? (
        <motion.button
          className="relative group px-12 py-5 rounded-full font-display text-lg md:text-xl font-bold text-primary-foreground overflow-hidden"
          style={{
            background: "linear-gradient(135deg, hsl(0 85% 45%) 0%, hsl(0 90% 55%) 50%, hsl(0 80% 40%) 100%)",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleAccept}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 1.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: isHovered
                ? "0 0 40px hsl(0 100% 50% / 0.8), 0 0 80px hsl(0 100% 50% / 0.4)"
                : "0 0 20px hsl(0 100% 50% / 0.4), 0 0 40px hsl(0 100% 50% / 0.2)",
            }}
          />

          {/* Button content */}
          <span className="relative z-10 flex items-center gap-3">
            <Zap className="w-6 h-6" />
            Let's Go!
            <Sparkles className="w-6 h-6" />
          </span>

          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: "-100%" }}
            animate={isHovered ? { x: "100%" } : { x: "-100%" }}
            transition={{ duration: 0.6 }}
          />
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="flex flex-col items-center gap-4"
        >
          <motion.div
            className="flex items-center gap-2 text-primary text-2xl md:text-3xl font-display font-bold"
            animate={{ 
              textShadow: [
                "0 0 20px hsl(0 100% 50% / 0.8)",
                "0 0 40px hsl(0 100% 50% / 1)",
                "0 0 20px hsl(0 100% 50% / 0.8)",
              ]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Heart className="w-8 h-8 fill-primary" />
            Happy Birthday!
            <Heart className="w-8 h-8 fill-primary" />
          </motion.div>
          
          <motion.p
            className="text-muted-foreground font-body text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Buckle up and enjoy your special day! 🎂
          </motion.p>
        </motion.div>
      )}

      {/* Decorative elements */}
      <motion.div
        className="flex justify-center gap-8 mt-8"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        {["🏎️", "🎉", "🎁", "✨", "🏁"].map((emoji, i) => (
          <motion.span
            key={i}
            className="text-2xl md:text-3xl"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          >
            {emoji}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default RideQuestion;