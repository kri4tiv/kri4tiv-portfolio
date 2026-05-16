"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import VideoLightbox from "@/components/VideoLightbox";
import { MOTION_VIDEOS } from "@/data/projects";
import { useHoverSound } from "@/components/HoverSound";

const CATEGORIES = ["Cinematic", "Brand & Commercial", "Motion & Animation", "Social & Reels"];

const CATEGORY_NOTES: Record<string, string> = {
  "Cinematic": "Film-led experiments with atmosphere, pacing, and visual tension.",
  "Brand & Commercial": "Campaign concepts, spec ads, product films, and brand-led motion.",
  "Motion & Animation": "Design movement, visual systems, product loops, and motion graphics.",
  "Social & Reels": "Short-form edits shaped for fast recognition and social rhythm.",
};

const slugFor = (value: string) => value.toLowerCase().replaceAll(" & ", "-").replaceAll(" ", "-");

type MotionProject = (typeof MOTION_VIDEOS)[number];

function MotionProjectPanel({
  project,
  index,
  featured = false,
  onWatch,
}: {
  project: MotionProject;
  index: number;
  featured?: boolean;
  onWatch: (project: MotionProject) => void;
}) {
  const playTick = useHoverSound();
  const canWatch = Boolean(project.youtubeId);

  return (
    <article className={`motion-editorial-card${featured ? " featured" : ""}${index % 2 === 1 ? " alternate" : ""}`}>
      <div className="motion-editorial-media">
        <Image
          src={project.poster}
          alt={`${project.title} thumbnail`}
          fill
          loading={featured ? undefined : "lazy"}
          priority={featured}
          decoding="async"
          sizes={featured ? "(max-width: 900px) 100vw, 64vw" : "(max-width: 768px) 100vw, 52vw"}
          style={{ objectFit: "cover" }}
        />
        <div className="motion-media-shade" />
        <span className="motion-editorial-index">{String(index + 1).padStart(2, "0")}</span>
        <span className="motion-editorial-ratio">{project.aspectRatio}</span>
      </div>
      <div className="motion-editorial-copy">
        <p className="motion-project-kicker">{project.category}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <button
          className="motion-watch-btn"
          type="button"
          disabled={!canWatch}
          onMouseEnter={playTick}
          onClick={() => canWatch && onWatch(project)}
          aria-label={canWatch ? `Watch ${project.title}` : `${project.title} YouTube ID needed`}
        >
          <span className="motion-watch-icon" aria-hidden="true" />
          {canWatch ? "Watch Video" : "YouTube ID Needed"}
        </button>
      </div>
    </article>
  );
}

export default function MotionPage() {
  const [video, setVideo] = useState<MotionProject | null>(null);

  const featuredProject = MOTION_VIDEOS.find(project => project.featured) ?? MOTION_VIDEOS[0];
  const groupedProjects = useMemo(() => (
    CATEGORIES.map(category => ({
      category,
      projects: MOTION_VIDEOS.filter(project => project.category === category),
    })).filter(group => group.projects.length > 0)
  ), []);

  return (
    <>
      <VideoLightbox
        isOpen={video !== null}
        onClose={() => setVideo(null)}
        youtubeId={video?.youtubeId}
        title={video?.title}
      />

      <section>
        <div className="sec-header-wrap motion-hero" style={{ paddingTop: "clamp(7rem,14vw,12rem)" }}>
          <div className="sec-bg-img" style={{ backgroundImage: `url(/media/section-bg/04-motion.jpg)` }} />
          <div className="section" style={{ paddingBottom: "clamp(2rem,4vw,3rem)" }}>
            <div className="sec-head">
              <span className="sec-num">04</span>
              <div>
                <p className="sec-eyebrow">AI Motion Studio</p>
                <h1 className="sec-h2">
                  AI Video &<br />
                  <em>Motion Studio</em>
                </h1>
                <p className="sec-desc">
                  AI-led films, brand visuals, motion experiments, and short-form creative work built for campaigns, social content, and visual storytelling.
                </p>
                <div className="motion-hero-actions">
                  <a href="#motion-projects">View Motion Projects</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main id="motion-projects" className="motion-editorial-wrap">
        <Reveal>
          <section className="motion-featured-section" aria-label="Featured motion project">
            <div className="motion-section-intro">
              <p className="sec-eyebrow">Featured Motion Project</p>
              <h2>Film work first, framed with intent.</h2>
            </div>
            <MotionProjectPanel project={featuredProject} index={0} featured onWatch={setVideo} />
          </section>
        </Reveal>

        <nav className="motion-category-nav" aria-label="Motion project categories">
          {groupedProjects.map(group => (
            <a key={group.category} href={`#${slugFor(group.category)}`}>
              {group.category}
            </a>
          ))}
        </nav>

        {groupedProjects.map(group => (
          <Reveal key={group.category}>
            <section id={slugFor(group.category)} className="motion-editorial-section">
              <div className="motion-section-intro">
                <p className="sec-eyebrow">{group.category}</p>
                <h2>{group.category}</h2>
                <p>{CATEGORY_NOTES[group.category]}</p>
              </div>
              <div className="motion-editorial-list">
                {group.projects.map((project, index) => (
                  <MotionProjectPanel
                    key={project.id}
                    project={project}
                    index={index}
                    onWatch={setVideo}
                  />
                ))}
              </div>
            </section>
          </Reveal>
        ))}
      </main>

      <footer className="footer">
        <span className="footer-logo">KRI<span style={{ fontStyle:"italic", color:"var(--ac)" }}>4</span>TIV</span>
        <span>AI Video & Motion Studio</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </>
  );
}
