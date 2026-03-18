"use client";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import Lightbox from "@/components/Lightbox";
import { EXPLORE_PROJECTS } from "@/data/projects";
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

export default function ExplorationPage() {
  const [openId, setOpenId] = useState<number | null>(null);
  const [lb, setLb]         = useState<LbState | null>(null);
  const playTick = useHoverSound();

  const toggle = (id: number) => setOpenId(prev => (prev === id ? null : id));

  const openLightbox = (e: React.MouseEvent, images: string[], index: number, projectName: string) => {
    e.stopPropagation();
    setLb({ images, index, projectName });
  };

  const lbSrc   = lb ? lb.images[lb.index] : undefined;
  const lbLabel = lb ? `${lb.projectName} — Visual ${lb.index + 1}` : undefined;

  return (
    <>
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
          <div className="sec-bg-img" style={{ backgroundImage: `url(/media/section-bg/03-exploration.jpg)` }} />
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
              </div>
            </div>
          </div>
        </div>

        <Reveal>
          <div className="explore-strips">
            {EXPLORE_PROJECTS.map((p) => {
              const isOpen = openId === p.id;
              return (
                <div
                  key={p.id}
                  className={`explore-strip${isOpen ? " open" : ""}`}
                  style={{ background: isOpen ? STRIP_COLORS[p.name] : undefined }}
                  onClick={() => toggle(p.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={e => e.key === "Enter" && toggle(p.id)}
                  onMouseEnter={playTick}
                >
                  {p.images[0] && (
                    <img src={p.images[0]} alt="" className="explore-strip-bg" />
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
                      {p.images.map((src, i) => (
                        <div
                          key={i}
                          className="explore-visual"
                          onClick={e => openLightbox(e, p.images, i, p.name)}
                        >
                          <img
                            src={src}
                            alt={`${p.name} visual ${i + 1}`}
                            className="explore-visual-img"
                            onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
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

      <footer className="footer">
        <span className="footer-logo">KRI<span style={{ fontStyle:"italic", color:"var(--ac)" }}>4</span>TIV</span>
        <span>Speculative, Passion Projects</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </>
  );
}
