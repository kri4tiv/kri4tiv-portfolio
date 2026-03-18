"use client";
import { useEffect, useState } from "react";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  label?: string;
  src?: string;
  images?: string[];
  imageIndex?: number;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function Lightbox({ isOpen, onClose, label, src, images, imageIndex, onPrev, onNext }: LightboxProps) {
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => { setImgFailed(false); }, [src]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft" && onPrev) onPrev();
      else if (e.key === "ArrowRight" && onNext) onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen) return null;

  const showPrev = onPrev && images && imageIndex !== undefined && imageIndex > 0;
  const showNext = onNext && images && imageIndex !== undefined && imageIndex < images.length - 1;

  return (
    <div className="lightbox-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <button className="lightbox-close" onClick={onClose} aria-label="Close">✕</button>
      {showPrev && (
        <button className="lb-nav-btn lb-prev" onClick={e => { e.stopPropagation(); onPrev!(); }} aria-label="Previous">
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
            <path d="M8 1L2 8L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
      {showNext && (
        <button className="lb-nav-btn lb-next" onClick={e => { e.stopPropagation(); onNext!(); }} aria-label="Next">
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
            <path d="M2 1L8 8L2 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
      <div className="lightbox-content" onClick={e => e.stopPropagation()}>
        {src && !imgFailed ? (
          <img key={src} src={src} alt={label || ""} className="lightbox-img" onError={() => setImgFailed(true)} />
        ) : (
          <div className="lightbox-placeholder">
            {label && <span className="lightbox-label">{label}</span>}
          </div>
        )}
      </div>
    </div>
  );
}
