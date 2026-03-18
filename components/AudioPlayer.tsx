"use client";
import { useRef, useState, useCallback } from "react";

function fmt(s: number) {
  if (!isFinite(s)) return "0:00";
  const m = Math.floor(s / 60);
  const sec = String(Math.floor(s % 60)).padStart(2, "0");
  return `${m}:${sec}`;
}

export default function AudioPlayer({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  const toggle = useCallback(() => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) { a.pause(); setPlaying(false); }
    else { a.play(); setPlaying(true); }
  }, [playing]);

  const seek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const a = audioRef.current;
    if (!a || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    a.currentTime = ratio * duration;
  }, [duration]);

  const pct = duration ? (current / duration) * 100 : 0;

  return (
    <div className="cs-audio-wrap">
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        onTimeUpdate={e => setCurrent(e.currentTarget.currentTime)}
        onLoadedMetadata={e => setDuration(e.currentTarget.duration)}
        onEnded={() => setPlaying(false)}
      />
      <div className="cs-audio">
        <button className="cs-audio-btn" onClick={toggle} aria-label={playing ? "Pause" : "Play"}>
          {playing ? (
            <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
              <rect x="1" y="1" width="3.5" height="12" rx="1" fill="currentColor"/>
              <rect x="7.5" y="1" width="3.5" height="12" rx="1" fill="currentColor"/>
            </svg>
          ) : (
            <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
              <path d="M2 1.5L11 7L2 12.5V1.5Z" fill="currentColor"/>
            </svg>
          )}
        </button>

        <span className="cs-audio-label">Listen to this story</span>

        <div className="cs-audio-progress-wrap">
          <div className="cs-audio-track" onClick={seek}>
            <div className="cs-audio-fill" style={{ width: `${pct}%` }} />
          </div>
          <span className="cs-audio-time">{fmt(current)} / {fmt(duration)}</span>
        </div>
      </div>
    </div>
  );
}
