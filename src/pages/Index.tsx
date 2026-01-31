import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NightStreetScene from "@/components/NightStreetScene";
import BirthdayHeader from "@/components/BirthdayHeader";
import F1CarReveal from "@/components/F1CarReveal";
import RideQuestion from "@/components/RideQuestion";
import ConfettiCelebration from "@/components/ConfettiCelebration";

const Index = () => {
  const [sceneReady, setSceneReady] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Start the reveal sequence
    const timer = setTimeout(() => {
      setSceneReady(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleRideAccept = () => {
    setShowConfetti(true);
    // Hide confetti after celebration
    setTimeout(() => setShowConfetti(false), 8000);
  };

  return (
    <NightStreetScene>
      <AnimatePresence>
        {showConfetti && <ConfettiCelebration />}
      </AnimatePresence>

      <div className="min-h-screen flex flex-col">
        {/* Header section */}
        <BirthdayHeader isVisible={sceneReady} />

        {/* Main content */}
        <motion.main
          className="flex-1 flex flex-col items-center justify-center px-4 py-8 md:py-12"
          initial={{ opacity: 0 }}
          animate={sceneReady ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* The F1 Car Reveal */}
          <F1CarReveal isVisible={sceneReady} />

          {/* The Question */}
          <RideQuestion isVisible={sceneReady} onAccept={handleRideAccept} />
        </motion.main>

        {/* Footer */}
        <motion.footer
          className="text-center py-6 text-muted-foreground font-body text-sm"
          initial={{ opacity: 0 }}
          animate={sceneReady ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <p className="flex items-center justify-center gap-2">
            Made with <span className="text-primary animate-pulse">❤️</span> for your special day
          </p>
        </motion.footer>
      </div>
    </NightStreetScene>
  );
};

export default Index;