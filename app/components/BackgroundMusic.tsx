"use client";
import { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play();
        setIsPlaying(true);
      }
      window.removeEventListener("click", handleFirstInteraction);
    };

    window.addEventListener("click", handleFirstInteraction);

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music/IThinkTheyCallThisLove.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={togglePlay}
        className="bg-[#DF4758] text-white p-3 rounded-full shadow-lg hover:bg-[#b18c85] transition"
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    </>
  );
}
