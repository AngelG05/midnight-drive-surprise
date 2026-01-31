import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import carInteriorImage from "@/assets/car-interior.jpg";
import whiteFlowersImage from "@/assets/white-flowers.jpg";

interface CarInteriorSceneProps {
  isVisible: boolean;
}

const CarInteriorScene = ({ isVisible }: CarInteriorSceneProps) => {
  const [showWelcome, setShowWelcome] = useState(false);
  const [showGiftPrompt, setShowGiftPrompt] = useState(false);
  const [flowersClaimed, setFlowersClaimed] = useState(false);
  const [showFlowersModal, setShowFlowersModal] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);

  useEffect(() => {
    if (isVisible) {
      // Sequential text reveal
      const timer1 = setTimeout(() => setShowWelcome(true), 500);
      const timer2 = setTimeout(() => setShowWelcome(false), 3500);
      const timer3 = setTimeout(() => setShowGiftPrompt(true), 4000);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [isVisible]);

  const handleClaimFlowers = () => {
    setShowFlowersModal(true);
  };

  const handleAcceptFlowers = () => {
    setFlowersClaimed(true);
    setShowFlowersModal(false);
    setTimeout(() => setShowFinalMessage(true), 500);
  };

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Car interior background */}
      <div className="absolute inset-0">
        <img
          src={carInteriorImage}
          alt="Inside the Ferrari"
          className="w-full h-full object-cover"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        {/* Welcome text - fade in/out */}
        <motion.p
          className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground text-center leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: showWelcome ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          Welcome aboard...
        </motion.p>

        {/* Gift prompt */}
        {!flowersClaimed && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: showGiftPrompt && !showWelcome ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <p className="font-display text-2xl md:text-4xl lg:text-5xl text-foreground mb-8 leading-relaxed">
              There's something on the seat for you...
            </p>

            <motion.button
              onClick={handleClaimFlowers}
              className="font-display text-xl md:text-2xl text-foreground px-8 py-4 border-2 border-foreground/50 rounded-full hover:bg-foreground/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Take a look
            </motion.button>
          </motion.div>
        )}

        {/* Final celebration */}
        {flowersClaimed && showFinalMessage && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Flowers image */}
            <motion.div
              className="mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={whiteFlowersImage}
                alt="White Flowers"
                className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full mx-auto border-4 border-foreground/20"
              />
            </motion.div>

            <motion.p
              className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <span className="flex items-center justify-center gap-4">
                <Heart className="w-8 h-8 md:w-12 md:h-12 text-primary fill-primary" />
                Happy Birthday!
                <Heart className="w-8 h-8 md:w-12 md:h-12 text-primary fill-primary" />
              </span>
            </motion.p>

            <motion.p
              className="font-display text-xl md:text-2xl text-foreground/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              These white roses are for you, with love.
            </motion.p>
          </motion.div>
        )}
      </div>

      {/* Flowers reveal modal */}
      {showFlowersModal && (
        <motion.div
          className="fixed inset-0 z-60 flex items-center justify-center bg-background/90 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="text-center max-w-md"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Flowers image */}
            <motion.img
              src={whiteFlowersImage}
              alt="White Flowers"
              className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full mx-auto mb-8 border-4 border-foreground/20"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />

            <motion.p
              className="font-display text-2xl md:text-4xl text-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              White roses, just for you.
            </motion.p>

            <motion.button
              onClick={handleAcceptFlowers}
              className="font-display text-xl md:text-2xl text-foreground px-8 py-4 border-2 border-foreground/50 rounded-full hover:bg-foreground/10 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Accept with love ❤️
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default CarInteriorScene;