"use client";
import { useEffect, useRef, useState } from "react";

interface VideoLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  src?: string;
  title?: string;
}

export default function VideoLightbox({ isOpen, onClose, src, title }: VideoLightboxProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => { setVideoError(false); }, [src]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleClose = () => {
    if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="vlb-overlay" onClick={handleClose} role="dialog" aria-modal="true">
      <button className="lightbox-close" onClick={handleClose} aria-label="Close">✕</button>
      <div className="vlb-content" onClick={e => e.stopPropagation()}>
        {videoError ? (
          <div className="vlb-coming-soon">
            <span className="vlb-soon-label">Coming Soon</span>
            {title && <span className="vlb-soon-title">{title}</span>}
          </div>
        ) : (
          <video
            ref={videoRef}
            className="vlb-video"
            src={src}
            controls
            autoPlay
            playsInline
            onError={() => setVideoError(true)}
          />
        )}
      </div>
    </div>
  );
}
