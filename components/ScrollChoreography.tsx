"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollChoreography() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".sec-bg-img").forEach((bg) => {
        gsap.fromTo(
          bg,
          { scale: 1.08, yPercent: -4 },
          {
            scale: 1,
            yPercent: 7,
            ease: "none",
            scrollTrigger: {
              trigger: bg.parentElement,
              start: "top top",
              end: "bottom top",
              scrub: 0.8,
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(".explore-strip").forEach((strip, index) => {
        gsap.fromTo(
          strip,
          { y: 34, opacity: 0.65 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            delay: Math.min(index * 0.025, 0.2),
            scrollTrigger: {
              trigger: strip,
              start: "top 88%",
              once: true,
            },
          }
        );
      });

      gsap.fromTo(
        ".motion-selector",
        { y: 50, opacity: 0, clipPath: "inset(0 0 18% 0)" },
        {
          y: 0,
          opacity: 1,
          clipPath: "inset(0 0 0% 0)",
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".motion-selector",
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.utils.toArray<HTMLElement>(".motion-selector-tabs button").forEach((button, index) => {
        gsap.fromTo(
          button,
          { x: -24, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.65,
            ease: "power3.out",
            delay: index * 0.07,
            scrollTrigger: {
              trigger: ".motion-selector",
              start: "top 82%",
              once: true,
            },
          }
        );
      });

      gsap.fromTo(
        ".exploration-wall-wrap",
        { y: 56, opacity: 0.78 },
        {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".exploration-wall-section",
            start: "top 80%",
            end: "bottom 70%",
            scrub: 0.7,
          },
        }
      );
    });

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return null;
}
