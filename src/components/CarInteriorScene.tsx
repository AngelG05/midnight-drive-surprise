import { motion } from "framer-motion";
import { useState } from "react";
import { Gift, Heart, Sparkles } from "lucide-react";
import carInteriorImage from "@/assets/car-interior.jpg";
import whiteFlowersImage from "@/assets/white-flowers.jpg";

interface CarInteriorSceneProps {
  isVisible: boolean;
}

const CarInteriorScene = ({ isVisible }: CarInteriorSceneProps) => {
  const [flowersClaimed, setFlowersClaimed] = useState(false);
  const [showFlowersModal, setShowFlowersModal] = useState(false);

  const handleClaimFlowers = () => {
    setShowFlowersModal(true);
  };

  const handleAcceptFlowers = () => {
    setFlowersClaimed(true);
    setShowFlowersModal(false);
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
        {/* Overlay for ambiance */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        {!flowersClaimed ? (
          <>
            {/* Welcome text */}
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-3">
                Welcome Aboard
              </h2>
              <p className="font-body text-lg md:text-xl text-muted-foreground">
                Something special is waiting for you...
              </p>
            </motion.div>

            {/* Flowers claim card */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {/* Glowing card */}
              <motion.div
                className="relative bg-card/90 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-foreground/10 max-w-md mx-auto"
                animate={{
                  boxShadow: [
                    "0 0 30px hsl(0 0% 100% / 0.1)",
                    "0 0 50px hsl(0 0% 100% / 0.2)",
                    "0 0 30px hsl(0 0% 100% / 0.1)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {/* Gift icon */}
                <motion.div
                  className="flex justify-center mb-4"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/20 flex items-center justify-center">
                    <Gift className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                  </div>
                </motion.div>

                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground text-center mb-2">
                  A Gift Awaits
                </h3>
                <p className="font-body text-muted-foreground text-center mb-6">
                  On the passenger seat, there's something beautiful just for you.
                </p>

                <motion.button
                  onClick={handleClaimFlowers}
                  className="w-full py-4 rounded-2xl font-display text-lg font-bold text-foreground border-2 border-foreground/30 hover:border-foreground/60 transition-colors bg-foreground/5 hover:bg-foreground/10"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Claim Your Gift
                    <Sparkles className="w-5 h-5" />
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>
          </>
        ) : (
          /* Flowers claimed state */
          <motion.div
            className="text-center max-w-lg mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Flowers image */}
            <motion.div
              className="relative mb-6"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <motion.div
                className="absolute inset-0 -m-4 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 40px hsl(0 0% 100% / 0.2)",
                    "0 0 80px hsl(0 0% 100% / 0.4)",
                    "0 0 40px hsl(0 0% 100% / 0.2)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <img
                src={whiteFlowersImage}
                alt="White Flowers"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl mx-auto"
              />
            </motion.div>

            <motion.h2
              className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4"
              animate={{
                textShadow: [
                  "0 0 20px hsl(0 0% 100% / 0.3)",
                  "0 0 40px hsl(0 0% 100% / 0.5)",
                  "0 0 20px hsl(0 0% 100% / 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="flex items-center justify-center gap-3">
                <Heart className="w-8 h-8 md:w-10 md:h-10 text-primary fill-primary" />
                Happy Birthday!
                <Heart className="w-8 h-8 md:w-10 md:h-10 text-primary fill-primary" />
              </span>
            </motion.h2>

            <motion.p
              className="font-body text-lg md:text-xl text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              These beautiful white roses are for you. 
              <br />
              <span className="text-foreground font-semibold">May your day be as special as you are!</span>
            </motion.p>

            {/* Celebration emojis */}
            <motion.div
              className="flex justify-center gap-4 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {["🌹", "🎂", "🎉", "💝", "✨"].map((emoji, i) => (
                <motion.span
                  key={i}
                  className="text-2xl md:text-3xl"
                  animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
                >
                  {emoji}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Flowers reveal modal */}
      {showFlowersModal && (
        <motion.div
          className="fixed inset-0 z-60 flex items-center justify-center bg-background/90 backdrop-blur-md p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="bg-card/95 backdrop-blur-lg rounded-3xl p-6 md:p-10 max-w-md w-full border border-foreground/10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Flowers image */}
            <motion.div
              className="mb-6"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.img
                src={whiteFlowersImage}
                alt="White Flowers"
                className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-2xl mx-auto"
                animate={{
                  boxShadow: [
                    "0 0 30px hsl(0 0% 100% / 0.2)",
                    "0 0 60px hsl(0 0% 100% / 0.4)",
                    "0 0 30px hsl(0 0% 100% / 0.2)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            <motion.h3
              className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              White Roses for You
            </motion.h3>

            <motion.p
              className="font-body text-muted-foreground text-center mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              A symbol of pure love and new beginnings. 
              These are yours to keep.
            </motion.p>

            <motion.button
              onClick={handleAcceptFlowers}
              className="w-full py-4 rounded-2xl font-display text-lg font-bold text-primary-foreground overflow-hidden"
              style={{
                background: "linear-gradient(135deg, hsl(0 85% 45%) 0%, hsl(0 90% 55%) 50%, hsl(0 80% 40%) 100%)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center justify-center gap-2">
                <Heart className="w-5 h-5" />
                Accept with Love
                <Heart className="w-5 h-5" />
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default CarInteriorScene;