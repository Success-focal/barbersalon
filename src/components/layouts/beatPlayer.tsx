"use client";

import { useEffect, useRef, useState } from "react";
import { Howl } from "howler";
import { Volume2, VolumeOff } from "lucide-react";
import { Button } from "../ui/button";

/**
 * AudioPlayer – Background audio controller component.
 *
 * Features:
 * - Automatically attempts to autoplay a looping background audio track ("/audio/beats.ogg") on page load.
 * - Starts muted to comply with browser autoplay restrictions.
 * - Listens for first user interaction (click or scroll) to unmute and start playback if autoplay was blocked.
 * - Provides a toggle button in the top-right corner to mute/unmute audio manually.
 * - Uses Howler.js for reliable cross-browser audio control.
 *
 * Notes:
 * - The component manages playback and mute state internally.
 * - Uses refs to track sound instance and user interaction state for smooth UX.
 */

export default function AudioPlayer() {
  // State to track whether audio is muted or not
  const [muted, setMuted] = useState(true);

  // Ref to hold the Howl sound instance so it persists across renders
  const soundRef = useRef<Howl | null>(null);

  // Ref to know if the user has interacted (clicked or scrolled)
  const interactedRef = useRef(false);

  // Function to toggle mute/unmute when user clicks the button
  function toggleMute() {
    if (!soundRef.current) return;

    if (muted) {
      // If currently muted, unmute and play the sound
      soundRef.current.mute(false);
      soundRef.current.play();
      setMuted(false);
    } else {
      // If currently unmuted, mute the sound
      soundRef.current.mute(true);
      setMuted(true);
    }
  }

  useEffect(() => {
    // Initialize the Howl sound instance with the audio file
    soundRef.current = new Howl({
      src: ["/audio/beats.ogg"],
      loop: true,
      volume: 0.25,
      mute: true, // Start muted because browsers block autoplay with sound
    });

    // Try to autoplay the sound immediately (muted)
    soundRef.current.play();

    // Handler for first user interaction - unmute and play sound
    function handleUserInteraction() {
      if (interactedRef.current || !soundRef.current) return;

      // Mark as interacted to avoid multiple triggers
      interactedRef.current = true;

      // Unmute and play sound on user interaction
      soundRef.current.mute(false);
      soundRef.current.play();
      setMuted(false);

      // Remove event listeners after first interaction
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("scroll", handleUserInteraction);
    }

    // Listen for user click or scroll to enable sound
    window.addEventListener("click", handleUserInteraction);
    window.addEventListener("scroll", handleUserInteraction);

    // Clean up on component unmount
    return () => {
      if (soundRef.current) {
        soundRef.current.unload();
        soundRef.current = null;
      }
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("scroll", handleUserInteraction);
    };
  }, []);

  return (
    // Mute/unmute button fixed at top-right corner
    <Button
      aria-label={muted ? "Unmute background audio" : "Mute background audio"}
      onClick={toggleMute}
      size="icon"
      className="fixed top-4 right-4 rounded-full p-3 shadow-md bg-muted/90 text-muted-foreground hover:text-accent transition-colors z-50"
    >
      {muted ? (
        <VolumeOff className="w-6 h-6" />
      ) : (
        <Volume2 className="w-6 h-6" />
      )}
    </Button>
  );
}
