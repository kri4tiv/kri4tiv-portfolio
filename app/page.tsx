"use client";
import { useState, useCallback } from "react";
import Link from "next/link";
import Preloader from "@/components/Preloader";
import Reveal from "@/components/Reveal";
import { SERVICES, TOOLS } from "@/data/projects";
import { useHoverSound } from "@/components/HoverSound";

const MARQUEE_ITEMS = [
  "Creative Production","Brand Strategy","Generative AI","Motion and Editing",
  "Key Visuals","AI Automation","Paid Ads","Copywriting","Analytics and Insights",
];

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const handleDone = useCallback(() => setLoaded(true), []);
  const playTick = useHoverSound();

  return (
    <>
      {!loaded && <Preloader onDone={handleDone} />}

      {/* HERO */}
      <section className="hero">
        {/* Video background */}
        <div className="hero-bg">
          <div className="hero-placeholder">
            <video className="hero-video" autoPlay muted loop playsInline preload="metadata" src="/media/hero/showreel.mp4" />
          </div>
          <div className="hero-video-overlay" />
        </div>
        <div className="hero-content">
          <p className="hero-eyebrow">
            <span>Marketer &amp; Creative Designer</span>
          </p>
          <h1 className="hero-h1">
            <span className="hero-line">
              <span>Creative that</span>
            </span>
            <span className="hero-line">
              <span>
                <em className="italic">converts</em>&nbsp;&amp;&nbsp;
                <span className="accent">resonates</span>
              </span>
            </span>
          </h1>
          <div className="hero-footer">
            <p className="hero-desc">
              Brand strategy, creative production, and AI-powered marketing built to stop the scroll and drive results.
            </p>
            <div className="scroll-indicator">
              <span>Scroll</span>
              <div className="scroll-line" />
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="marquee-item">
              <span>{item}</span>
              <span className="marquee-sep">&#x2022;</span>
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="sec-head">
          <span className="sec-num">01</span>
          <div>
            <p className="sec-eyebrow">About</p>
            <h2 className="sec-h2">
              The intersection of<br />
              <em>creativity</em> and performance
            </h2>
            <p className="sec-desc">Creative Marketer based in Dubai, worked with 20+ global brands</p>
          </div>
        </div>

        <Reveal>
          <div className="about-grid">
            <div>
              <div className="about-bio">
                <p>
                  I&apos;m a creative marketer passionate about <strong>next-gen marketing</strong>; from Generative AI and autonomous AI Agents to motion, brand identity, and high-impact content that stops the scroll.
                </p>
                <p>
                  With <strong>2 years of experience in London</strong> and an <strong>MSc in Marketing and Management</strong> from the University of Manchester, my work sits at the intersection of creativity and performance, blending traditional brand strategy with the tools reshaping how brands communicate.
                </p>
                <p>
                  Every project I take on is built to <strong>convert, resonate, and last</strong>.
                </p>
              </div>
              <br />
              <p className="about-sub">Stack and Tools</p>
              <div className="tools-list">
                {TOOLS.map(t => (
                  <span key={t} className="tool-pill" onMouseEnter={playTick}>{t}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="stats-grid">
                {[
                  { val: "2+",  label: "Years in London" },
                  { val: "20+", label: "Brands Worked With" },
                  { val: "MSc", label: "Marketing and Management" },
                  { val: "AI",  label: "First Approach" },
                ].map(s => (
                  <div key={s.label} className="stat-card">
                    <div className="stat-val">{s.val}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
              <p className="about-sub">Services</p>
              <div className="services-list">
                {SERVICES.map((svc, i) => (
                  <div key={svc} className="service-row">
                    <span className="service-name">{svc}</span>
                    <span className="service-num">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div style={{ marginTop: "clamp(3rem, 6vw, 5rem)" }}>
            <Link href="/work" className="home-cta">
              <span className="home-cta-text">See the Work</span>
              <span className="home-cta-arrow">→</span>
            </Link>
          </div>
        </Reveal>
      </section>

      <footer className="footer">
        <span className="footer-logo">KRI<span style={{ fontStyle: "italic", color: "var(--ac)" }}>4</span>TIV</span>
        <span>Anirudh Kandpal, Dubai, UAE</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </>
  );
}
