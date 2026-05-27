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
      /* Section hero backgrounds — subtle parallax */
      gsap.utils.toArray<HTMLElement>(".sec-bg-img").forEach((bg) => {
        gsap.fromTo(
          bg,
          { scale: 1.06, yPercent: -3 },
          {
            scale: 1,
            yPercent: 6,
            ease: "none",
            scrollTrigger: {
              trigger: bg.parentElement,
              start: "top top",
              end: "bottom top",
              scrub: 1.2,
            },
          }
        );
      });

      /* Exploration strips — staggered lift on enter */
      gsap.utils.toArray<HTMLElement>(".explore-strip").forEach((strip, index) => {
        gsap.fromTo(
          strip,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: "power3.out",
            delay: Math.min(index * 0.04, 0.24),
            scrollTrigger: {
              trigger: strip,
              start: "top 90%",
              once: true,
            },
          }
        );
      });

      /* Motion selector panel — clean reveal */
      gsap.fromTo(
        ".motion-selector",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".motion-selector",
            start: "top 84%",
            once: true,
          },
        }
      );

      /* Motion tab buttons — cascade left-to-right */
      gsap.utils.toArray<HTMLElement>(".motion-selector-tabs button").forEach((button, index) => {
        gsap.fromTo(
          button,
          { x: -20, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            delay: 0.1 + index * 0.08,
            scrollTrigger: {
              trigger: ".motion-selector",
              start: "top 84%",
              once: true,
            },
          }
        );
      });

      /* Concept wall intro — lead with text, wall follows */
      gsap.fromTo(
        ".exploration-wall-intro",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".exploration-wall-section",
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".exploration-wall-wrap",
        { y: 48, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power2.out",
          delay: 0.18,
          scrollTrigger: {
            trigger: ".exploration-wall-section",
            start: "top 78%",
            once: true,
          },
        }
      );

      /* Work rows — lift on enter */
      gsap.utils.toArray<HTMLElement>(".work-row").forEach((row, index) => {
        gsap.fromTo(
          row,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            delay: Math.min(index * 0.04, 0.2),
            scrollTrigger: {
              trigger: row,
              start: "top 92%",
              once: true,
            },
          }
        );
      });

      /* Stat cards — staggered pop on enter */
      const statCards = gsap.utils.toArray<HTMLElement>(".stat-card");
      if (statCards.length) {
        gsap.fromTo(
          statCards,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: statCards[0],
              start: "top 88%",
              once: true,
            },
          }
        );
      }

      /* Tool pills — cascade in */
      const pills = gsap.utils.toArray<HTMLElement>(".tool-pill");
      if (pills.length) {
        gsap.fromTo(
          pills,
          { scale: 0.85, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.45,
            ease: "back.out(1.4)",
            stagger: 0.025,
            scrollTrigger: {
              trigger: pills[0],
              start: "top 90%",
              once: true,
            },
          }
        );
      }

      /* Stories cards — lift stagger */
      gsap.utils.toArray<HTMLElement>(".stories-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 32, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power3.out",
            delay: index * 0.12,
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            },
          }
        );
      });
    });

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return null;
}
