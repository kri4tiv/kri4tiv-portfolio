"use client";
import { useEffect, useRef } from "react";

const TRAIL_COUNT = 7;

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    // Hide on touch devices
    if (typeof window !== "undefined" && "ontouchstart" in window) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    let cursorX = 0, cursorY = 0;
    let targetX = 0, targetY = 0;
    const trail = Array.from({ length: TRAIL_COUNT }, () => ({ x: 0, y: 0 }));
    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      cursor.classList.add("visible");
    };

    const onLeave = () => cursor.classList.remove("visible");
    const onEnter = () => cursor.classList.add("visible");

    const animate = () => {
      cursorX += (targetX - cursorX) * 0.28;
      cursorY += (targetY - cursorY) * 0.28;
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;

      trail.forEach((point, index) => {
        const lead = index === 0 ? { x: cursorX, y: cursorY } : trail[index - 1];
        const follow = 0.22 - index * 0.018;
        point.x += (lead.x - point.x) * follow;
        point.y += (lead.y - point.y) * follow;
        const el = trailRefs.current[index];
        if (el) el.style.transform = `translate3d(${point.x}px, ${point.y}px, 0) rotate(${-18 + index * 5}deg)`;
      });

      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as Element;
      const isClickable = target.closest(
        "a, button, [role='button'], input, textarea, select, .exploration-wall-item, .work-row, .explore-strip, .explore-visual, .carousel-slide, .work-film-thumb"
      );
      cursor.classList.toggle("is-hovering", Boolean(isClickable));
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onMouseOver);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  // Don't render on touch devices (SSR safe)
  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" aria-hidden="true">
        <span className="cursor-mark" />
      </div>
      <div className="cursor-trail" aria-hidden="true">
        {Array.from({ length: TRAIL_COUNT }).map((_, index) => (
          <span
            key={index}
            ref={(el) => { trailRefs.current[index] = el; }}
            style={{ opacity: 0.18 - index * 0.018, width: `${24 - index * 2}px` }}
          />
        ))}
      </div>
    </>
  );
}
