"use client";
import { useState } from "react";
import Lightbox from "@/components/Lightbox";

interface Slide {
  n: number;
  label: string;
  bg?: string;
  src?: string;
}

interface CarouselProps {
  title: string;
  tag: string;
  slides: Slide[];
  onClose: () => void;
}

export default function Carousel({ title, tag, slides, onClose }: CarouselProps) {
  const [lbIndex, setLbIndex] = useState<number | null>(null);
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});
  const srcs = slides.map(s => s.src ?? "");

  return (
    <>
      <Lightbox
        isOpen={lbIndex !== null}
        onClose={() => setLbIndex(null)}
        label={lbIndex !== null ? slides[lbIndex]?.label : undefined}
        src={lbIndex !== null ? slides[lbIndex]?.src : undefined}
        images={srcs}
        imageIndex={lbIndex ?? undefined}
        onPrev={lbIndex !== null && lbIndex > 0 ? () => setLbIndex(i => (i ?? 1) - 1) : undefined}
        onNext={lbIndex !== null && lbIndex < slides.length - 1 ? () => setLbIndex(i => (i ?? 0) + 1) : undefined}
      />

      <div className="carousel-overlay" role="dialog" aria-modal="true">
        <div className="carousel-header">
          <div>
            <span className="carousel-title">{title}</span>
            <span className="carousel-tag">{tag}</span>
          </div>
          <button className="carousel-close" onClick={onClose} aria-label="Close gallery">
            ✕
          </button>
        </div>
        <div className="carousel-body">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="carousel-slide"
              style={slide.bg ? { background: slide.bg } : undefined}
              onClick={() => setLbIndex(i)}
              title="Click to expand"
            >
              {slide.src ? (
                <img
                  src={slide.src}
                  alt={slide.label}
                  className="carousel-slide-img"
                  onLoad={() => setLoaded(p => ({ ...p, [i]: true }))}
                  onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                />
              ) : null}
              {!loaded[i] && (
                <>
                  <span className="carousel-slide-num">{String(slide.n).padStart(2, "0")}</span>
                  <span className="carousel-slide-label">{slide.label}</span>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="carousel-footer">
          <span className="carousel-count">{slides.length} frames</span>
          <span className="carousel-hint">click image to expand</span>
        </div>
      </div>
    </>
  );
}
