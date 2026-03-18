"use client";
import { useRef, useState, useEffect } from "react";

export default function MusicToggle() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeRef = useRef<number | null>(null);

  useEffect(() => {
    const audio = new Audio("/media/ambient.mp3");
    audio.loop = true;
    audio.volume = 0;
    audioRef.current = audio;
    return () => { audio.pause(); };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (fadeRef.current) cancelAnimationFrame(fadeRef.current);

    if (!playing) {
      audio.volume = 0;
      audio.play().catch(() => {});
      const target = 0.3;
      const duration = 500;
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        audio.volume = t * target;
        if (t < 1) fadeRef.current = requestAnimationFrame(step);
        else { audio.volume = target; fadeRef.current = null; }
      };
      fadeRef.current = requestAnimationFrame(step);
      setPlaying(true);
    } else {
      const startVol = audio.volume;
      const duration = 500;
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        audio.volume = startVol * (1 - t);
        if (t < 1) fadeRef.current = requestAnimationFrame(step);
        else { audio.pause(); audio.volume = 0; fadeRef.current = null; }
      };
      fadeRef.current = requestAnimationFrame(step);
      setPlaying(false);
    }
  };

  return (
    <button
      className="music-toggle"
      onClick={toggle}
      aria-label="Toggle music"
      title={playing ? "Pause music" : "Play music"}
    >
      <div className={`music-bars${playing ? " playing" : ""}`}>
        {[0,1,2,3].map(i => <span key={i} className="music-bar" />)}
      </div>
    </button>
  );
}
