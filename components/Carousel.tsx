"use client";
import { useState } from "react";
import Image from "next/image";
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
  note?: string;
  onClose: () => void;
}

export default function Carousel({ title, tag, slides, note, onClose }: CarouselProps) {
  const [lbIndex, setLbIndex] = useState<number | null>(null);
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});
  const srcs = slides.map(s => s.src ?? "");
  const backgroundSrc = slides.find(slide => slide.src)?.src;

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
        {backgroundSrc && (
          <img className="carousel-backdrop-img" src={backgroundSrc} alt="" aria-hidden="true" />
        )}
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
                <>
                  <Image
                    src={slide.src}
                    alt=""
                    fill
                    aria-hidden="true"
                    className="carousel-slide-bg"
                    sizes="(max-width: 768px) 90vw, 620px"
                  />
                  <Image
                    src={slide.src}
                    alt={slide.label}
                    fill
                    className="carousel-slide-img"
                    sizes="(max-width: 768px) 90vw, 620px"
                    onLoad={() => setLoaded(p => ({ ...p, [i]: true }))}
                  />
                </>
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
        {note && (
          <aside className="project-note" aria-label={`${title} creative direction`}>
            <span className="project-note-kicker">Creative direction</span>
            <p>{note}</p>
          </aside>
        )}
        <div className="carousel-footer">
          <span className="carousel-count">{slides.length} frames</span>
          <span className="carousel-hint">click image to expand</span>
        </div>
      </div>
    </>
  );
}
