"use client";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function CaseStudiesListingPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: "clamp(6rem, 12vw, 10rem)", paddingBottom: "3rem" }}>
        <div className="sec-head">
          <span className="sec-num" style={{ opacity: 0 }}>00</span>
          <div>
            <p className="sec-eyebrow">Insights & Breakdowns</p>
            <h1 className="sec-h2" style={{ fontFamily: "var(--fh)", fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              Case <em>Studies</em>
            </h1>
            <p className="sec-desc" style={{ marginTop: "1rem" }}>
              Deep dives into strategy, creative processes, and results.
            </p>
          </div>
        </div>

        <Reveal>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
            gap: "2rem", 
            marginTop: "4rem",
            maxWidth: "1200px" 
          }}>
            
            {/* AI Workflow Card */}
            <Link href="/case-study/ai-workflow" style={{ 
              display: "flex", 
              flexDirection: "column",
              background: "rgba(255, 255, 255, 0.02)", 
              border: "1px solid rgba(255, 255, 255, 0.05)",
              borderRadius: "16px", 
              overflow: "hidden", 
              textDecoration: "none", 
              color: "inherit",
              transition: "transform 0.3s ease, background 0.3s ease",
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)"; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)"; }}
            >
              <div style={{ position: "relative", width: "100%", aspectRatio: "16/10", backgroundColor: "#0a0a0a" }}>
                <Image src="/media/case-study/ai-workflow/9.png" alt="AI Workflow first draft" fill style={{ objectFit: "contain", padding: "2rem" }} />
              </div>
              <div style={{ padding: "1.5rem 1.5rem 2rem 1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem", fontSize: "0.85rem", color: "var(--ac)", fontWeight: 500 }}>
                  <span>March 2026</span>
                  <span>·</span>
                  <span>Workflow</span>
                </div>
                <h3 style={{ fontSize: "1.4rem", marginBottom: "0.5rem", fontFamily: "var(--fd)", fontWeight: 500, lineHeight: 1.3 }}>How I Use AI to Create High-Quality First Drafts - Fast</h3>
                <p style={{ color: "var(--t1)", fontSize: "0.95rem", lineHeight: 1.5 }}>A KRI4TIV workflow for rapid concept development resulting in production-ready drafts.</p>
              </div>
            </Link>

            {/* Sesko Edit Card */}
            <Link href="/case-study/sesko" style={{ 
              display: "flex", 
              flexDirection: "column",
              background: "rgba(255, 255, 255, 0.02)", 
              border: "1px solid rgba(255, 255, 255, 0.05)",
              borderRadius: "16px", 
              overflow: "hidden", 
              textDecoration: "none", 
              color: "inherit",
              transition: "transform 0.3s ease, background 0.3s ease",
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)"; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)"; }}
            >
              <div style={{ position: "relative", width: "100%", aspectRatio: "16/10" }}>
                <Image src="/media/case-study/hero.webp" alt="Sesko Edit" fill style={{ objectFit: "cover", objectPosition: "center center" }} />
              </div>
              <div style={{ padding: "1.5rem 1.5rem 2rem 1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem", fontSize: "0.85rem", color: "var(--ac)", fontWeight: 500 }}>
                  <span>August 2025</span>
                  <span>·</span>
                  <span>Viral Video Edit</span>
                </div>
                <h3 style={{ fontSize: "1.4rem", marginBottom: "0.5rem", fontFamily: "var(--fd)", fontWeight: 500, lineHeight: 1.3 }}>From Idea to Half a Million Views ≈ 498.7K</h3>
                <p style={{ color: "var(--t1)", fontSize: "0.95rem", lineHeight: 1.5 }}>Engineering a Viral Long-Form Video and the methodology behind the storytelling.</p>
              </div>
            </Link>

          </div>
        </Reveal>
      </section>

      <footer className="footer">
        <span className="footer-logo">KRI<span style={{ fontStyle: "italic", color: "var(--ac)" }}>4</span>TIV</span>
        <span>Case Studies</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </>
  );
}
