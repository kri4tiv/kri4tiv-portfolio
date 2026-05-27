import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const STORIES = [
  {
    href: "/case-study/ai-workflow",
    date: "March 2026",
    tag: "Workflow",
    title: "How I Build High-Quality First Drafts with AI",
    desc: "A practical KRI4TIV workflow for turning early prompts, references, and creative direction into stronger first drafts faster.",
    img: "/media/case-study/ai-workflow/9.png",
    imgFit: "contain" as const,
    imgPad: true,
  },
  {
    href: "/case-study/sesko",
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
                <div className="stories-card-img" style={{ background: s.imgPad ? "var(--b1)" : undefined }}>
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    loading="lazy"
                    decoding="async"
                    style={{ objectFit: s.imgFit, padding: s.imgPad ? "2rem" : undefined }}
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="stories-card-body">
                  <div className="stories-card-meta">
                    <time>{s.date}</time>
                    <span>&#x2022;</span>
                    <span style={{ color: "var(--ac)" }}>{s.tag}</span>
                  </div>
                  <h2 className="stories-card-title">{s.title}</h2>
                  <p className="stories-card-desc">{s.desc}</p>
                  <span className="stories-card-arrow">
                    Read more &nbsp;&#x2192;
                  </span>
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
