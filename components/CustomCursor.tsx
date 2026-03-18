"use client";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Hide on touch devices
    if (typeof window !== "undefined" && "ontouchstart" in window) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    let cursorX = 0, cursorY = 0;
    let targetX = 0, targetY = 0;
    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!visible) setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const animate = () => {
      cursorX += (targetX - cursorX) * 0.15;
      cursorY += (targetY - cursorY) * 0.15;
      cursor.style.left = cursorX + "px";
      cursor.style.top  = cursorY + "px";
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as Element;
      const isClickable = target.closest(
        "a, button, [role='button'], input, textarea, select, .motion-scroll-item, .work-row, .explore-strip, .explore-visual, .video-box, .carousel-slide, .work-film-thumb"
      );
      if (isClickable) {
        cursor.style.width  = "40px";
        cursor.style.height = "40px";
        cursor.style.borderColor = "rgba(210,243,77,0.8)";
        cursor.style.background  = "rgba(210,243,77,0.05)";
      } else {
        cursor.style.width  = "20px";
        cursor.style.height = "20px";
        cursor.style.borderColor = "rgba(255,255,255,0.6)";
        cursor.style.background  = "transparent";
      }
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
    <div
      ref={cursorRef}
      className="custom-cursor"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "20px",
        height: "20px",
        border: "1.5px solid rgba(255,255,255,0.6)",
        borderRadius: "50%",
        background: "transparent",
        transform: "translate(-50%, -50%)",
        zIndex: 99999,
        pointerEvents: "none",
        opacity: visible ? 1 : 0,
        transition: "width 0.2s ease, height 0.2s ease, border-color 0.2s ease, background 0.2s ease, opacity 0.3s ease",
      }}
    />
  );
}
