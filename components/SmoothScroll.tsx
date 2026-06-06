'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type WindowWithLenis = Window & {
  __kriLenis?: Pick<Lenis, "scrollTo">;
};

export default function SmoothScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
    });

    document.documentElement.classList.add("has-smooth-scroll");
    (window as WindowWithLenis).__kriLenis = lenis;

    const onTick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);
    lenis.on('scroll', ScrollTrigger.update);

    return () => {
      gsap.ticker.remove(onTick);
      document.documentElement.classList.remove("has-smooth-scroll");
      delete (window as WindowWithLenis).__kriLenis;
      lenis.destroy();
    };
  }, []);

  return null;
}
