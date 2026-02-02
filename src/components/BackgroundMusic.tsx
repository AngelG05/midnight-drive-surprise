import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

interface BackgroundMusicProps {
  isPlaying: boolean;
}

const BackgroundMusic = ({ isPlaying }: BackgroundMusicProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying && hasInteracted) {
      audio.play().catch(console.error);
    } else {
      audio.pause();
    }
  }, [isPlaying, hasInteracted]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = isMuted;
  }, [isMuted]);

  // Handle first user interaction to enable audio
  useEffect(() => {
    const handleInteraction = () => {
      setHasInteracted(true);
      if (audioRef.current && isPlaying) {
        audioRef.current.play().catch(console.error);
      }
    };

    document.addEventListener("click", handleInteraction, { once: true });
    return () => document.removeEventListener("click", handleInteraction);
  }, [isPlaying]);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  return (
    <>
      {/* Audio element - user should upload music to /public/music/background.mp3 */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="/music/background.mp3"
      />
      
      {/* Mute/Unmute button */}
      <motion.button
        onClick={toggleMute}
        className="fixed bottom-4 right-4 z-50 p-3 rounded-full bg-background/30 backdrop-blur-sm border border-foreground/20 hover:border-foreground/40 transition-all duration-300"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-foreground/70" />
        ) : (
          <Volume2 className="w-5 h-5 text-foreground/70" />
        )}
      </motion.button>
    </>
  );
};

export default BackgroundMusic;
