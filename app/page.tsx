"use client";
import { useState, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import Preloader from "@/components/Preloader";
import Reveal from "@/components/Reveal";
import ToolLogoRail from "@/components/ToolLogoRail";
import { SERVICES, TOOLS } from "@/data/projects";

const MARQUEE_ITEMS = [
  "Creative Production","Brand Strategy","Generative AI","Motion and Editing",
  "Key Visuals","AI Automation","Paid Ads","Copywriting","Analytics and Insights",
];

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [playHeroVideo, setPlayHeroVideo] = useState(false);
  // Skip preloader on repeat visits within the same session
  useEffect(() => {
    if (sessionStorage.getItem("pre_shown") !== "1") return;
    const frame = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(frame);
  }, []);
  const handleDone = useCallback(() => {
    sessionStorage.setItem("pre_shown", "1");
    setLoaded(true);
  }, []);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (!loaded) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const loadVideo = () => setPlayHeroVideo(true);
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(loadVideo, { timeout: 1200 });
    } else {
      timeoutId = setTimeout(loadVideo, 700);
    }

    return () => {
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, [loaded]);

  useEffect(() => { if (heroVideoRef.current) heroVideoRef.current.playbackRate = 1.05; }, [playHeroVideo]);

  return (
    <>
      {!loaded && <Preloader onDone={handleDone} />}

      {/* HERO */}
      <section className="hero">
        {/* Video background */}
        <div className="hero-bg">
          <div className="hero-placeholder">
            {playHeroVideo && (
              <video ref={heroVideoRef} className="hero-video" autoPlay muted loop playsInline preload="none" src="/media/hero/showreel.mp4" />
            )}
          </div>
          <div className="hero-video-overlay" />
        </div>
        <div className="hero-content">
          <p className="hero-eyebrow">
            <span>AI Creative Marketer</span>
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
              Brand strategy, AI-powered creative production, and motion work that stops the scroll and stays in the mind.
            </p>
          </div>
        </div>
        <ToolLogoRail />
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
            <p className="sec-desc">AI Creative Marketer working across Delhi, Dubai, and global markets</p>
          </div>
        </div>

        <Reveal>
          <div className="about-grid">
            <div>
              <div className="about-bio">
                <p>
                  I&apos;m a creative marketer who works at the edge of <strong>brand strategy and generative AI</strong>. My work covers motion, key visuals, campaign concepts, and AI-first production pipelines built for modern brands.
                </p>
                <p>
                  With <strong>2 years of experience in London</strong> and an <strong>MSc in Marketing and Management</strong> from the University of Manchester, I bring together creative direction, performance thinking, and the tools that are reshaping how brands communicate.
                </p>
                <p>
                  Available globally. Every project is built to <strong>convert, resonate, and last</strong>.
                </p>
              </div>
              <br />
              <p className="about-sub">Stack and Tools</p>
              <div className="tools-list">
                {TOOLS.map(t => (
                  <span key={t} className="tool-pill">{t}</span>
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
                  { val: "ImagineArt, OpenArt & Pollo AI", label: "Creative Content Partner", featured: true },
                ].map(s => (
                  <div key={s.label} className={`stat-card${s.featured ? " stat-card-featured" : ""}`}>
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
        <span>Anirudh Kandpal</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </>
  );
}
