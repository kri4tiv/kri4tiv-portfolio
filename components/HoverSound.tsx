'use client';
import { useCallback, useRef } from 'react';

export function useHoverSound() {
  const audioCtxRef = useRef<AudioContext | null>(null);

  const playTick = useCallback(() => {
    if (typeof window === 'undefined') return;
    if ('ontouchstart' in window) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContext();
      }
      const ctx = audioCtxRef.current;
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.frequency.setValueAtTime(3200, ctx.currentTime);
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(0.03, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);

      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + 0.06);
    } catch {
      // AudioContext blocked or unavailable — silently ignore
    }
  }, []);

  return playTick;
}
