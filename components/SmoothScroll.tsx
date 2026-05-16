'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SmoothScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const lenis = new Lenis({
      duration: 1.25,
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.82,
      touchMultiplier: 1.15,
    });

    document.documentElement.classList.add("has-smooth-scroll");
    lenis.on("scroll", ScrollTrigger.update);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      document.documentElement.classList.remove("has-smooth-scroll");
      lenis.destroy();
    };
  }, []);

  return null;
}
