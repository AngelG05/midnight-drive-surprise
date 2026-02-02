import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import f1CarImage from "@/assets/f1-car-night.jpg";
import CarExteriorScene from "@/components/CarExteriorScene";
import CarInteriorScene from "@/components/CarInteriorScene";
import ConfettiCelebration from "@/components/ConfettiCelebration";
import BackgroundMusic from "@/components/BackgroundMusic";

type Scene = "exterior" | "interior";

const Index = () => {
  const [currentScene, setCurrentScene] = useState<Scene>("exterior");
  const [showConfetti, setShowConfetti] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);

  const handleAcceptRide = () => {
    setMusicStarted(true);
    setShowConfetti(true);
    setTimeout(() => {
      setCurrentScene("interior");
      setTimeout(() => setShowConfetti(false), 3000);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Full background F1 car image */}
      <motion.div 
        className="fixed inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <img
          src={f1CarImage}
          alt="Red F1 Sports Car on Night Streets"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Stars overlay */}
      <div className="fixed inset-0 z-5 pointer-events-none overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-foreground/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 30}%`,
            }}
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Confetti */}
      <AnimatePresence>
        {showConfetti && <ConfettiCelebration />}
      </AnimatePresence>

      {/* Scenes */}
      <AnimatePresence mode="wait">
        {currentScene === "exterior" && (
          <CarExteriorScene onAcceptRide={handleAcceptRide} />
        )}
      </AnimatePresence>

      <CarInteriorScene isVisible={currentScene === "interior"} />

      {/* Background Music */}
      <BackgroundMusic isPlaying={musicStarted} />

      {/* Footer - only show on exterior */}
      {currentScene === "exterior" && (
        <motion.footer
          className="fixed bottom-4 left-0 right-0 text-center z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <p className="font-body text-sm text-muted-foreground/60">
            Made with <span className="text-primary">❤️</span> for your special day
          </p>
        </motion.footer>
      )}
    </div>
  );
};

export default Index;