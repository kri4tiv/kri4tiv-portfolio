"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Carousel from "@/components/Carousel";
import Lightbox from "@/components/Lightbox";
import { WORK_PROJECTS } from "@/data/projects";
import { useHoverSound } from "@/components/HoverSound";

type LbState = { projectName: string; images: string[]; index: number };

export default function WorkPage() {
  const [active, setActive]           = useState<null | typeof WORK_PROJECTS[0]>(null);
  const [lb, setLb]                   = useState<LbState | null>(null);
  // First 2 rows visible immediately; rest revealed by IntersectionObserver
  const [visibleRows, setVisibleRows] = useState<Set<number>>(new Set([0, 1]));
  // Filmstrip expands from 3 → all on hover
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const playTick = useHoverSound();

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const idx = Number(e.target.getAttribute("data-row-idx"));
            setVisibleRows(prev => new Set([...prev, idx]));
          }
        });
      },
      { rootMargin: "200px" }
    );
    rowRefs.current.forEach((el, i) => {
      if (el && i >= 2) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const openThumb = (e: React.MouseEvent, projectName: string, images: string[], index: number) => {
    e.stopPropagation();
    setLb({ projectName, images, index });
  };

  const lbSrc   = lb ? lb.images[lb.index] : undefined;
  const lbLabel = lb ? `${lb.projectName} — Frame ${lb.index + 1}` : undefined;

  return (
    <>
      {/* Preload first strip wallpaper — starts downloading before React renders */}
      <link rel="preload" as="image" href={WORK_PROJECTS[0].images[0]} />

      {active && (
        <Carousel
          title={active.name}
          tag={active.type}
          slides={active.images.map((src, i) => ({
            n: i + 1,
            label: `${active.name} — Frame ${i + 1}`,
            bg: active.bg,
            src,
          }))}
          onClose={() => setActive(null)}
        />
      )}

      <Lightbox
        isOpen={lb !== null}
        onClose={() => setLb(null)}
        src={lbSrc}
        label={lbLabel}
        images={lb?.images}
        imageIndex={lb?.index}
        onPrev={lb && lb.index > 0 ? () => setLb(p => p ? { ...p, index: p.index - 1 } : null) : undefined}
        onNext={lb && lb.index < (lb.images.length - 1) ? () => setLb(p => p ? { ...p, index: p.index + 1 } : null) : undefined}
      />

      <section>
        <div className="sec-header-wrap" style={{ paddingTop: "clamp(7rem, 14vw, 12rem)" }}>
          <div className="sec-bg-img" style={{ backgroundImage: `url(/media/section-bg/02-work.jpg)` }} />
          <div className="section" style={{ paddingBottom: "clamp(2rem,4vw,3rem)" }}>
            <div className="sec-head">
              <span className="sec-num">02</span>
              <div>
                <p className="sec-eyebrow">Selected Work</p>
                <h1 className="sec-h2">
                  Projects that<br />
                  <em>convert &amp; resonate</em>
                </h1>
                <p className="sec-desc">
                  <span style={{ background: "rgba(210,243,77,0.15)", padding: "0.2rem 0.6rem", borderRadius: "3px", color: "var(--ac)", fontWeight: 500 }}>2+ years, 20+ brands, Dubai, London and global</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <Reveal>
          <div className="work-list">
            {WORK_PROJECTS.map((p, i) => {
              const filmSrcs = expandedRows.has(p.id) ? p.images : p.images.slice(0, 3);
              return (
                <div
                  key={p.id}
                  ref={el => { rowRefs.current[i] = el; }}
                  data-row-idx={String(i)}
                  className="work-row"
                  role="button"
                  tabIndex={0}
                  onClick={() => setActive(p)}
                  onKeyDown={e => e.key === "Enter" && setActive(p)}
                  onMouseEnter={() => {
                    playTick();
                    setExpandedRows(prev => new Set([...prev, p.id]));
                  }}
                >
                  {/* Wallpaper: only inject src once in viewport; first 2 get fetchPriority high */}
                  {p.images[0] && visibleRows.has(i) && (
                    <img
                      src={p.images[0]}
                      alt=""
                      className="work-row-bg"
                      fetchPriority={i < 2 ? "high" : "low"}
                    />
                  )}
                  <span className="work-num">{String(i + 1).padStart(2, "0")}</span>
                  <div className="work-mid">
                    <span className="work-name">{p.name}</span>
                    <span className="work-type">{p.type}</span>
                  </div>
                  <div className="work-right">
                    {p.images.length > 0 && (
                      <div className="work-filmstrip">
                        <div className="work-filmstrip-track">
                          {filmSrcs.map((src, idx) => (
                            <div
                              key={idx}
                              className="work-film-thumb"
                              style={{ background: p.bg, position: "relative" }}
                              onClick={e => openThumb(e, p.name, p.images, idx)}
                              title={`Frame ${idx + 1}`}
                            >
                              <Image
                                src={src}
                                alt=""
                                fill
                                quality={40}
                                style={{ objectFit: "cover" }}
                                sizes="120px"
                              />
                            </div>
                          ))}
                        </div>
                        <div className="work-filmstrip-fade" />
                      </div>
                    )}
                    <div className="work-arrow">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>

      <footer className="footer">
        <span className="footer-logo">KRI<span style={{ fontStyle: "italic", color: "var(--ac)" }}>4</span>TIV</span>
        <span>Selected Work, 2022 to 2024</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </>
  );
}
