"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Lightbox from "@/components/Lightbox";
import { EXPLORE_PROJECTS, OPTIMIZED_WALL_ITEMS } from "@/data/projects";
import { useHoverSound } from "@/components/HoverSound";

const STRIP_COLORS: Record<string, string> = {
  "DMCC":                     "rgba(60,80,140,0.06)",
  "Cartier":                  "rgba(180,140,100,0.06)",
  "Lamborghini":              "rgba(200,180,30,0.06)",
  "Louis Vuitton":            "rgba(140,110,70,0.06)",
  "Maison Francis Kurkdjian": "rgba(160,80,120,0.06)",
  "Nike":                     "rgba(40,40,40,0.06)",
  "North Face":               "rgba(40,100,60,0.06)",
  "Rolex":                    "rgba(60,120,80,0.06)",
  "Venum":                    "rgba(160,30,30,0.06)",
  "Vogue":                    "rgba(180,40,80,0.06)",
};

type LbState = { projectName: string; images: string[]; index: number };

const optimizeExploreSrc = (src: string) => (
  src
    .replace("/media/exploration/", "/media/exploration-optimized/")
    .replace(/\.(png|jpe?g|webp)$/i, ".webp")
);

const wallRowSize = Math.ceil(OPTIMIZED_WALL_ITEMS.length / 3);
const WALL_ROWS = [
  OPTIMIZED_WALL_ITEMS.slice(0, wallRowSize),
  OPTIMIZED_WALL_ITEMS.slice(wallRowSize, wallRowSize * 2),
  OPTIMIZED_WALL_ITEMS.slice(wallRowSize * 2),
];

export default function ExplorationPage() {
  const [openId, setOpenId]           = useState<number | null>(null);
  const [lb, setLb]                   = useState<LbState | null>(null);
  // First 2 strips visible immediately; rest revealed by IntersectionObserver
  const [visibleStrips, setVisibleStrips] = useState<Set<number>>(new Set([0, 1]));
  const stripRefs = useRef<(HTMLDivElement | null)[]>([]);
  const playTick = useHoverSound();

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const idx = Number(e.target.getAttribute("data-strip-idx"));
            setVisibleStrips(prev => new Set([...prev, idx]));
          }
        });
      },
      { rootMargin: "200px" }
    );
    stripRefs.current.forEach((el, i) => {
      if (el && i >= 2) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const toggle = (id: number) => setOpenId(prev => (prev === id ? null : id));

  const openLightbox = (e: React.MouseEvent, images: string[], index: number, projectName: string) => {
    e.stopPropagation();
    setLb({ images, index, projectName });
  };

  const lbSrc   = lb ? lb.images[lb.index] : undefined;
  const lbLabel = lb ? `${lb.projectName} - Visual ${lb.index + 1}` : undefined;

  return (
    <>
      {/* Preload first strip wallpaper */}
      <link rel="preload" as="image" href={optimizeExploreSrc(EXPLORE_PROJECTS[0].images[0])} />

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
          <div className="sec-bg-img" style={{ backgroundImage: `url(/media/section-bg-optimized/03-exploration.webp)` }} />
          <div className="section" style={{ paddingBottom: "clamp(2rem,4vw,3rem)" }}>
            <div className="sec-head">
              <span className="sec-num">03</span>
              <div>
                <p className="sec-eyebrow">Exploration</p>
                <h1 className="sec-h2">
                  Passion Projects and<br />
                  <em>Creative Exploration</em>
                </h1>
                <p className="sec-desc">
                  <span style={{ background: "rgba(210,243,77,0.15)", padding: "0.2rem 0.6rem", borderRadius: "3px", color: "var(--ac)", fontWeight: 500 }}>Unsolicited concepts for brands I admire</span>
                </p>
                <div className="exploration-hero-actions">
                  <a href="#concept-wall">View Concept Wall</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Reveal>
          <div className="explore-strips">
            {EXPLORE_PROJECTS.map((p, i) => {
              const isOpen = openId === p.id;
              const optimizedImages = p.images.map(optimizeExploreSrc);
              return (
                <div
                  key={p.id}
                  ref={el => { stripRefs.current[i] = el; }}
                  data-strip-idx={String(i)}
                  className={`explore-strip${isOpen ? " open" : ""}`}
                  style={{ background: isOpen ? STRIP_COLORS[p.name] : undefined }}
                  onClick={() => toggle(p.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={e => e.key === "Enter" && toggle(p.id)}
                  onMouseEnter={playTick}
                >
                  {/* Wallpaper: inject src only once in viewport; first 2 get fetchPriority high */}
                  {p.images[0] && visibleStrips.has(i) && (
                    <img
                      src={optimizedImages[0]}
                      alt=""
                      className="explore-strip-bg"
                      fetchPriority={i < 2 ? "high" : "low"}
                    />
                  )}
                  <div className="explore-strip-header">
                    <span className="explore-strip-name">{p.name}</span>
                    <div className="explore-strip-meta">
                      <span className="explore-strip-cat">{p.sub}</span>
                      <div className="explore-strip-toggle">
                        {isOpen ? (
                          <svg width="10" height="2" viewBox="0 0 10 2" fill="none">
                            <path d="M1 1H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                          </svg>
                        ) : (
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M5 1V9M1 5H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>

                  {isOpen && (
                    <div className="explore-strip-visuals" onClick={e => e.stopPropagation()}>
                      {optimizedImages.map((src, i) => (
                        <div
                          key={i}
                          className="explore-visual"
                          onClick={e => openLightbox(e, optimizedImages, i, p.name)}
                        >
                          <Image
                            src={src}
                            alt={`${p.name} visual ${i + 1}`}
                            fill
                            loading="lazy"
                            decoding="async"
                            style={{ objectFit: "cover" }}
                            sizes="(max-width: 768px) 50vw, 33vw"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>

      <Reveal>
        <section id="concept-wall" className="exploration-wall-section">
          <div className="exploration-wall-intro">
            <p className="sec-eyebrow">Concept Frames & Visual Tests</p>
            <h2>From individual projects into one moving wall.</h2>
            <p>
              A compact archive of AI-generated frames, campaign moods, product concepts, and visual tests from across the exploration work.
            </p>
          </div>

          <div className="exploration-wall-wrap" aria-label="Concept frames and visual tests">
            {WALL_ROWS.map((row, rowIdx) => (
              <div key={rowIdx} className="exploration-wall-row">
                <div className={`exploration-wall-track ${rowIdx === 1 ? "reverse" : ""}`}>
                  {[...row, ...row].map((src, i) => (
                    <button
                      key={`${src}-${i}`}
                      className="exploration-wall-item"
                      type="button"
                      onClick={() => setLb({ projectName: "Concept Wall", images: OPTIMIZED_WALL_ITEMS, index: OPTIMIZED_WALL_ITEMS.indexOf(src) })}
                      aria-label={`Open concept wall frame ${i + 1}`}
                    >
                      <img
                        src={src}
                        alt={`KRI4TIV concept wall frame ${i + 1}`}
                        loading="lazy"
                        decoding="async"
                        className="exploration-wall-img"
                      />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <footer className="footer">
        <span className="footer-logo">KRI<span style={{ fontStyle:"italic", color:"var(--ac)" }}>4</span>TIV</span>
        <span>Speculative, Passion Projects</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </>
  );
}
