"use client";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import Carousel from "@/components/Carousel";
import { EXPLORE_PROJECTS } from "@/data/projects";

export default function ExplorativePage() {
  const [active, setActive] = useState<null | typeof EXPLORE_PROJECTS[0]>(null);

  return (
    <>
      {active && (
        <Carousel
          title={active.name}
          tag={active.sub}
          slides={active.images.map((src, i) => ({
            n: i + 1,
            label: `${active.name}, Concept ${i + 1}`,
            src,
          }))}
          onClose={() => setActive(null)}
        />
      )}

      <section className="section" style={{ paddingTop: "clamp(7rem, 14vw, 12rem)" }}>
        <div className="sec-head">
          <span className="sec-num">03</span>
          <div>
            <p className="sec-eyebrow">/* Explorative */</p>
            <h1 className="sec-h2">
              Passion projects &amp;<br />
              <em>speculative work</em>
            </h1>
            <p className="sec-desc">
              /* Unsolicited concepts for brands I admire */
            </p>
          </div>
        </div>

        <Reveal>
          <div className="explore-grid">
            {EXPLORE_PROJECTS.map(p => (
              <div
                key={p.id}
                className="explore-card"
                role="button"
                tabIndex={0}
                onClick={() => setActive(p)}
                onKeyDown={e => e.key === "Enter" && setActive(p)}
              >
                <div className="explore-corner">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M1.5 6.5L6.5 1.5M6.5 1.5H2.5M6.5 1.5V5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="explore-sub">{p.sub}</span>
                <span className="explore-name">{p.name}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <footer className="footer">
        <span className="footer-logo">KRI<span style={{ fontStyle: "italic", color: "var(--ac)" }}>4</span>TIV</span>
        <span>/* Speculative / Passion Projects */</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </>
  );
}
