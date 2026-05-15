"use client";
import { useEffect } from "react";

interface VideoLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  youtubeId?: string | null;
  title?: string;
}

export default function VideoLightbox({ isOpen, onClose, youtubeId, title }: VideoLightboxProps) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="vlb-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={title ? `Watch ${title}` : "Watch video"}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">x</button>
      <div className="vlb-content" onClick={e => e.stopPropagation()}>
        {youtubeId ? (
          <iframe
            className="vlb-frame"
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={title ?? "KRI4TIV motion project"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <div className="vlb-coming-soon">
            <span className="vlb-soon-label">YouTube ID Needed</span>
            {title && <span className="vlb-soon-title">{title}</span>}
          </div>
        )}
      </div>
    </div>
  );
}
