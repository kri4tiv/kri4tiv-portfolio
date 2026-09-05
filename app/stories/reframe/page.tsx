import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why I Built Reframe | AI Creative Adaptation Tool | KRI4TIV",
  description:
    "Reframe is an AI marketing tool that adapts one creative into every format a campaign needs. Here is why I built it and how it works.",
  keywords: [
    "AI marketing tools",
    "AI creative workflow",
    "creative adaptation",
    "multi-format ads",
    "marketing automation",
    "AI image resizing",
    "campaign production",
    "creative ops",
    "AI tools for marketers",
    "Reframe",
  ],
  openGraph: {
    title: "Why I Built Reframe: AI Tool for Multi-Format Creative",
    description:
      "One upload, every format. An AI tool for marketing teams who need consistent creatives across every campaign ratio.",
    type: "article",
  },
};

const FORMATS = ["16:9", "9:16", "1:1", "3:4", "21:9"];

export default function ReframePage() {
  return (
    <>
      {/* Hero */}
      <div className="cs-hero">
        <div className="cs-hero-left">
          <p className="cs-eyebrow">Product Story</p>
          <h1 className="cs-title">
            Why I Built Reframe:<br />
            <em>One Upload, Every Format</em>
          </h1>
          <div className="cs-meta">
            <span>May 2026</span>
            <span className="cs-meta-sep">·</span>
            <span>3 min read</span>
            <span className="cs-meta-sep">·</span>
            <span>AI Marketing Tools</span>
          </div>
        </div>

        {/* Branded visual card in place of a photo */}
        <div className="cs-hero-right" style={{ background: "#050505", display: "flex", alignItems: "center", justifyContent: "center", padding: "3rem", position: "relative", overflow: "hidden" }}>
          {/* Background grid lines */}
          <div aria-hidden="true" style={{
            position: "absolute", inset: 0,
            backgroundImage: "linear-gradient(rgba(210,243,77,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(210,243,77,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }} />
          {/* Glow */}
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 60% 50%, rgba(210,243,77,0.08) 0%, transparent 65%)" }} />
          {/* Content */}
          <div style={{ position: "relative", textAlign: "center" }}>
            <p style={{ fontFamily: "var(--fm)", fontSize: "0.5rem", letterSpacing: "0.5em", textTransform: "uppercase", color: "var(--ac)", marginBottom: "1rem" }}>
              kri4tiv
            </p>
            <h2 style={{ fontFamily: "var(--fd)", fontSize: "clamp(2.8rem, 6vw, 5.2rem)", fontWeight: 700, letterSpacing: "-0.055em", lineHeight: 0.9, color: "var(--t0)", margin: 0 }}>
              Re<span style={{ color: "var(--ac)" }}>frame</span>
            </h2>
            <p style={{ fontFamily: "var(--fb)", fontSize: "clamp(0.8rem, 1.1vw, 0.95rem)", color: "var(--t2)", marginTop: "1rem", fontWeight: 300 }}>
              One upload. Every format.
            </p>
            <div style={{ display: "flex", gap: "0.4rem", justifyContent: "center", marginTop: "1.4rem", flexWrap: "wrap" }}>
              {FORMATS.map((f) => (
                <span key={f} style={{
                  fontFamily: "var(--fm)", fontSize: "0.48rem", letterSpacing: "0.1em",
                  padding: "0.32rem 0.6rem",
                  border: "1px solid rgba(210,243,77,0.18)",
                  borderRadius: "999px",
                  color: "var(--t3)",
                }}>
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Article body */}
      <article className="cs-body">

        <p>
          Two weeks ago I was in a marketing interview. The conversation moved quickly through the usual ground, strategy, performance, brand. Then we landed on AI workflows and what they can realistically take off a team&apos;s plate.
        </p>

        <p>
          The Associate Director of Brand said something straightforward. The kind of thing that sounds obvious when you hear it but points at a real, persistent problem.
        </p>

        <p>
          He was talking about creative adaptation. Taking one approved piece of creative and producing every format a campaign needs from it. 16:9 for YouTube. 9:16 for Reels and Stories. 1:1 for feed. 3:4 for display. And sometimes more on top of that.
        </p>

        <h2 style={{ fontFamily: "var(--fd)", fontSize: "clamp(1.3rem,2vw,1.6rem)", fontWeight: 600, color: "var(--t0)", marginTop: "2.5rem", marginBottom: "1rem" }}>
          The Real Problem
        </h2>

        <p>
          The work itself is not hard. There is no real creativity involved. It is cropping, repositioning, adjusting composition to fit a ratio. But when a single campaign needs eight or ten format variants across social, paid, and display, that repetitive work stacks up fast.
        </p>

        <p>
          Designers get pulled into production. Timelines get longer. Last-minute format requests become a standard part of the process. The creative is approved, but it takes another day or two before it is actually ready to run everywhere it needs to.
        </p>

        <p>
          This is a solved problem in theory. In practice, most teams are still doing it by hand.
        </p>

        <h2 style={{ fontFamily: "var(--fd)", fontSize: "clamp(1.3rem,2vw,1.6rem)", fontWeight: 600, color: "var(--t0)", marginTop: "2.5rem", marginBottom: "1rem" }}>
          What Reframe Does
        </h2>

        <p>
          I built Reframe around that conversation.
        </p>

        <p>
          You upload one image. You select the output formats you need. Reframe uses AI to recompose the creative for each ratio, keeping subject placement, layout, and visual hierarchy as consistent as possible across every variant.
        </p>

        <p>
          The goal is simple: reduce the time between &ldquo;creative approved&rdquo; and &ldquo;campaign live&rdquo; without introducing new inconsistencies between formats.
        </p>

        {/* Link callout */}
        <div style={{
          margin: "2.5rem 0",
          padding: "1.5rem 1.8rem",
          border: "1px solid rgba(210,243,77,0.18)",
          borderRadius: "8px",
          background: "rgba(210,243,77,0.04)",
          display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem",
        }}>
          <div>
            <p style={{ fontFamily: "var(--fd)", fontSize: "1.1rem", fontWeight: 600, letterSpacing: "-0.03em", color: "var(--t0)", margin: 0 }}>
              Try Reframe
            </p>
            <p style={{ fontFamily: "var(--fb)", fontSize: "0.88rem", color: "var(--t2)", margin: "0.25rem 0 0", fontWeight: 300 }}>
              One upload. Choose your formats. Download your variants.
            </p>
          </div>
          <a
            href="https://reframe.rent/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--fm)", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase",
              color: "var(--b0)", background: "var(--ac)",
              padding: "0.7rem 1.4rem", borderRadius: "999px",
              textDecoration: "none", fontWeight: 700,
              whiteSpace: "nowrap",
            }}
          >
            reframe.rent &#x2197;
          </a>
        </div>

        <h2 style={{ fontFamily: "var(--fd)", fontSize: "clamp(1.3rem,2vw,1.6rem)", fontWeight: 600, color: "var(--t0)", marginTop: "2.5rem", marginBottom: "1rem" }}>
          Who It Is Built For
        </h2>

        <p>
          Marketing teams managing multi-platform campaigns. Creative ops and production managers dealing with format requests across channels. Freelancers producing content for multiple clients and platforms. Anyone who has spent hours on format adaptation that could have been spent on something that actually needed their judgment.
        </p>

        <p>
          If your workflow involves getting one creative to work across six different placements, Reframe is built for exactly that.
        </p>

        <h2 style={{ fontFamily: "var(--fd)", fontSize: "clamp(1.3rem,2vw,1.6rem)", fontWeight: 600, color: "var(--t0)", marginTop: "2.5rem", marginBottom: "1rem" }}>
          Where It Is Now
        </h2>

        <p>
          It is still early. The tool runs on Google&apos;s API, which means speed is not where I want it yet. I am working on that and exploring better integrations that will make the output faster and the composition more precise.
        </p>

        <p>
          I know this is not an entirely new idea. Similar workflows exist across automation tools and some enterprise platforms. But most of those require setup, technical knowledge, or a large subscription.
        </p>

        <p>
          Reframe is meant to be one simple place. Upload. Pick formats. Download. No setup. No automation stack needed.
        </p>

        <p>
          If you work in marketing, creative, or design ops, I would genuinely love your feedback on it.
        </p>

        <hr className="cs-rule" />

        <p style={{ color: "var(--t2)", fontStyle: "italic" }}>
          Built by Anirudh Kandpal. Creative marketer. AI-first production, brand strategy, motion, and campaign work.
        </p>

        <div className="cs-article-footer">
          <span>KRI4TIV</span>
          <span>·</span>
          <span>Product Story</span>
          <span>·</span>
          <span>May 2026</span>
          <span>·</span>
          <span>AI Marketing Tools</span>
        </div>

        <div className="cs-back">
          <Link href="/stories" className="cs-back-link">
            &#8592; &nbsp; Back to Stories
          </Link>
        </div>

      </article>

      <footer className="footer">
        <span className="footer-logo">KRI<span style={{ fontStyle: "italic", color: "var(--ac)" }}>4</span>TIV</span>
        <span>Reframe, AI Marketing Tool</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </>
  );
}
