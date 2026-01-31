import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface CarExteriorSceneProps {
  onAcceptRide: () => void;
}

const CarExteriorScene = ({ onAcceptRide }: CarExteriorSceneProps) => {
  return (
    <motion.div
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-background/60 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Main exclamation */}
        <motion.h1
          className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.span
            className="block text-gold mb-2"
            animate={{
              textShadow: [
                "0 0 20px hsl(45 100% 50% / 0.6)",
                "0 0 40px hsl(45 100% 50% / 0.9)",
                "0 0 20px hsl(45 100% 50% / 0.6)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Oh well well,
          </motion.span>
          <span className="text-foreground">now that's what we are </span>
          <motion.span
            className="text-primary neon-text"
            animate={{
              textShadow: [
                "0 0 20px hsl(0 100% 50% / 0.6)",
                "0 0 40px hsl(0 100% 50% / 0.9)",
                "0 0 20px hsl(0 100% 50% / 0.6)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            talking about.
          </motion.span>
        </motion.h1>

        {/* Question */}
        <motion.p
          className="font-body text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Do you mind a ride?
        </motion.p>

        {/* CTA Button */}
        <motion.button
          onClick={onAcceptRide}
          className="group relative px-10 md:px-14 py-4 md:py-5 rounded-full font-display text-lg md:text-xl font-bold text-primary-foreground overflow-hidden"
          style={{
            background: "linear-gradient(135deg, hsl(0 85% 45%) 0%, hsl(0 90% 55%) 50%, hsl(0 80% 40%) 100%)",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Animated glow */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: [
                "0 0 20px hsl(0 100% 50% / 0.4)",
                "0 0 40px hsl(0 100% 50% / 0.7)",
                "0 0 20px hsl(0 100% 50% / 0.4)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          <span className="relative z-10 flex items-center gap-3">
            <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
            Let's Go!
            <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
          </span>

          {/* Shine effect on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6 }}
          />
        </motion.button>

        {/* Decorative emojis */}
        <motion.div
          className="flex justify-center gap-6 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          {["🏎️", "✨", "🔥"].map((emoji, i) => (
            <motion.span
              key={i}
              className="text-2xl md:text-3xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CarExteriorScene;