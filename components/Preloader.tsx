"use client";
import { useEffect, useRef, useState } from "react";

const MIN_MS = 3000;
const MAX_MS = 8000;

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);
  const [exiting, setExiting] = useState(false);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number>(0);
  const doneCalledRef = useRef(false);
  const ANIM_DURATION = 3600; // cosmetic counter always takes this long

  const finish = (onDoneCallback: () => void) => {
    if (doneCalledRef.current) return;
    doneCalledRef.current = true;
    setExiting(true);
    setTimeout(onDoneCallback, 950);
  };

  useEffect(() => {
    const startTime = Date.now();

    // Animate counter cosmetically — always smooth regardless of load state
    const animate = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const progress = Math.min(elapsed / ANIM_DURATION, 1);
      const eased = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      setCount(Math.round(eased * 100));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };
    rafRef.current = requestAnimationFrame(animate);

    // Hard max timeout — never block user longer than MAX_MS
    const maxTimer = setTimeout(() => finish(onDone), MAX_MS);

    // Wait for fonts + window load, but respect MIN time
    const tryFinish = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, MIN_MS - elapsed);
      setTimeout(() => finish(onDone), remaining);
    };

    // Wait for both fonts AND window load
    let fontsReady = false;
    let windowLoaded = false;

    const check = () => {
      if (fontsReady && windowLoaded) tryFinish();
    };

    document.fonts.ready.then(() => {
      fontsReady = true;
      check();
    }).catch(() => {
      fontsReady = true;
      check();
    });

    if (document.readyState === "complete") {
      windowLoaded = true;
      check();
    } else {
      window.addEventListener("load", () => {
        windowLoaded = true;
        check();
      }, { once: true });
    }

    return () => {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(maxTimer);
    };
  }, [onDone]);

  const display = String(count).padStart(3, "0");

  return (
    <div className={`pre${exiting ? " out" : ""}`} style={{ willChange: "clip-path" }}>
      <div className="pre-count" style={{ willChange: "transform" }}>{display}</div>
      <div className="pre-brand">
        KRI<span style={{ fontStyle: "italic", color: "var(--ac)" }}>4</span>TIV
      </div>
      <div className="pre-bar">
        <div className="pre-bar-fill" style={{ width: `${count}%` }} />
      </div>
    </div>
  );
}
