import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const FORMATS = ["16:9", "9:16", "1:1", "3:4"];

function ReframeThumbnail() {
  return (
    <div style={{
      width: "100%", aspectRatio: "16/10", position: "relative",
      background: "#050505", overflow: "hidden",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(210,243,77,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(210,243,77,0.05) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 55% 50%, rgba(210,243,77,0.1) 0%, transparent 65%)" }} />
      <div style={{ position: "relative", textAlign: "center", padding: "1.5rem" }}>
        <p style={{ fontFamily: "var(--fm)", fontSize: "0.45rem", letterSpacing: "0.5em", textTransform: "uppercase", color: "var(--ac)", marginBottom: "0.7rem" }}>kri4tiv</p>
        <p style={{ fontFamily: "var(--fd)", fontSize: "clamp(2rem,5vw,3.8rem)", fontWeight: 700, letterSpacing: "-0.055em", lineHeight: 0.9, color: "var(--t0)", margin: 0 }}>
          Re<span style={{ color: "var(--ac)" }}>frame</span>
        </p>
        <p style={{ fontFamily: "var(--fb)", fontSize: "0.78rem", color: "var(--t3)", marginTop: "0.75rem", fontWeight: 300 }}>One upload. Every format.</p>
        <div style={{ display: "flex", gap: "0.35rem", justifyContent: "center", marginTop: "1rem", flexWrap: "wrap" }}>
          {FORMATS.map((f) => (
            <span key={f} style={{ fontFamily: "var(--fm)", fontSize: "0.42rem", letterSpacing: "0.1em", padding: "0.28rem 0.5rem", border: "1px solid rgba(210,243,77,0.2)", borderRadius: "999px", color: "var(--t3)" }}>{f}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

const STORIES = [
  {
    href: "/stories/reframe",
    date: "May 2026",
    tag: "AI Marketing Tool",
    title: "Why I Built Reframe: One Upload, Every Format",
    desc: "An AI tool for marketing teams who spend too much time adapting one creative across every campaign format. Here is why I built it.",
    custom: true,
  },
  {
    href: "/stories/ai-workflow",
    date: "March 2026",
    tag: "Workflow",
    title: "How I Build High-Quality First Drafts with AI",
    desc: "A practical KRI4TIV workflow for turning early prompts, references, and creative direction into stronger first drafts faster.",
    img: "/media/case-study/ai-workflow/9.png",
    imgFit: "contain" as const,
    imgPad: true,
  },
  {
    href: "/stories/sesko",
    date: "August 2025",
    tag: "Viral Video Edit",
    title: "From Idea to Half a Million Views",
    desc: "A closer look at the structure, editing choices, and storytelling behind a high-performing football video.",
    img: "/media/case-study/hero.webp",
    imgFit: "cover" as const,
    imgPad: false,
  },
];

export default function CaseStudiesListingPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: "clamp(7rem, 14vw, 11rem)", paddingBottom: "3rem" }}>
        <div className="sec-head stories-head">
          <div>
            <p className="sec-eyebrow">Insights and Breakdowns</p>
            <h1 className="sec-h2">
              Creative stories and <em>process breakdowns</em>
            </h1>
            <p className="sec-desc">
              Workflow notes, campaign thinking, video breakdowns, and the process behind KRI4TIV work.
            </p>
          </div>
        </div>

        <Reveal>
          <div className="stories-listing">
            {STORIES.map((s) => (
              <Link key={s.href} href={s.href} className="stories-card">
                <div className="stories-card-img">
                  {"custom" in s && s.custom ? (
                    <ReframeThumbnail />
                  ) : (
                    <Image
                      src={(s as { img: string }).img}
                      alt={s.title}
                      fill
                      loading="lazy"
                      decoding="async"
                      style={{
                        objectFit: (s as { imgFit: "cover" | "contain" }).imgFit,
                        padding: (s as { imgPad: boolean }).imgPad ? "2rem" : undefined,
                      }}
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  )}
                </div>
                <div className="stories-card-body">
                  <div className="stories-card-meta">
                    <time>{s.date}</time>
                    <span>&#x2022;</span>
                    <span style={{ color: "var(--ac)" }}>{s.tag}</span>
                  </div>
                  <h2 className="stories-card-title">{s.title}</h2>
                  <p className="stories-card-desc">{s.desc}</p>
                  <span className="stories-card-arrow">Read more &nbsp;&#x2192;</span>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      <footer className="footer">
        <span className="footer-logo">KRI<span style={{ fontStyle: "italic", color: "var(--ac)" }}>4</span>TIV</span>
        <span>Insights and Creative Breakdowns</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </>
  );
}
