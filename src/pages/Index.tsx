import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import f1CarImage from "@/assets/f1-car-night.jpg";
import DarkRoom from "@/components/DarkRoom";
import EmptyRoom from "@/components/EmptyRoom";
import CarExteriorScene from "@/components/CarExteriorScene";
import CarInteriorScene from "@/components/CarInteriorScene";
import ConfettiCelebration from "@/components/ConfettiCelebration";
import BackgroundMusic from "@/components/BackgroundMusic";

type Scene = "dark" | "empty" | "exterior" | "interior";

const Index = () => {
  const [currentScene, setCurrentScene] = useState<Scene>("dark");
  const [showConfetti, setShowConfetti] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);
  const [showF1Background, setShowF1Background] = useState(false);

  const handleLightsOn = () => {
    setCurrentScene("empty");
  };

  const handleMoveOutside = () => {
    setShowF1Background(true);
    setTimeout(() => {
      setCurrentScene("exterior");
    }, 500);
  };

  const handleAcceptRide = () => {
    setMusicStarted(true);
    setShowConfetti(true);
    setTimeout(() => {
      setCurrentScene("interior");
      setTimeout(() => setShowConfetti(false), 3000);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Full background F1 car image - only show after moving outside */}
      <AnimatePresence>
        {showF1Background && (
          <motion.div 
            className="fixed inset-0 z-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <img
              src={f1CarImage}
              alt="Red F1 Sports Car on Night Streets"
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stars overlay - only show on exterior scenes */}
      {(currentScene === "exterior" || currentScene === "interior") && (
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
      )}

      {/* Confetti */}
      <AnimatePresence>
        {showConfetti && <ConfettiCelebration />}
      </AnimatePresence>

      {/* Scenes */}
      <AnimatePresence mode="wait">
        {currentScene === "dark" && (
          <DarkRoom onLightsOn={handleLightsOn} />
        )}
        {currentScene === "empty" && (
          <EmptyRoom onMoveOutside={handleMoveOutside} />
        )}
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
