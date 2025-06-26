"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";
import { Howl } from "howler";

const AudioPlayer = () => {
  const [isMuted, setIsMuted] = useState(false); // Should show VolumeX initially
  const [isPlaying, setIsPlaying] = useState(false);
  const soundRef = useRef<Howl | null>(null);
  const hasInteractedRef = useRef(false);

  useEffect(() => {
    // Create the audio object - start muted
    soundRef.current = new Howl({
      src: ["/audio/beats.mp3"],
      loop: true,
      volume: 0.5,
      mute: true, // Start muted
      autoplay: true,
      onplay: () => setIsPlaying(true),
      onpause: () => setIsPlaying(false),
      onstop: () => setIsPlaying(false),
    });

    const tryPlay = () => {
      if (!soundRef.current || hasInteractedRef.current) return;

      hasInteractedRef.current = true;
      // Unmute and play on first interaction
      soundRef.current.mute(false);
      soundRef.current.play();
    };

    // Try auto-play immediately
    tryPlay();

    // If autoplay blocked, play on first interaction
    window.addEventListener("click", tryPlay, { once: true });
    window.addEventListener("scroll", tryPlay, { once: true });

    return () => {
      window.removeEventListener("click", tryPlay);
      window.removeEventListener("scroll", tryPlay);
      soundRef.current?.unload();
    };
  }, []);

  const toggleMute = () => {
    if (!soundRef.current) return;

    const newMuted = !isMuted;
    soundRef.current.mute(newMuted);
    setIsMuted(newMuted);

    // If unmuting and not playing, start playing
    if (!newMuted && !isPlaying) {
      soundRef.current.play();
    }
  };

  return (
    <div className="fixed top-6 right-6 z-50 p-1">
      <Button variant="ghost" size="icon" onClick={toggleMute}>
        {isMuted ? (
          <VolumeX className="w-6 h-6 text-muted-foreground transition-all hover:scale-110" />
        ) : (
          <Volume2 className="w-6 h-6 text-primary transition-all hover:scale-110" />
        )}
      </Button>
    </div>
  );
};

export default AudioPlayer;
