"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import VideoLightbox from "@/components/VideoLightbox";
import Lightbox from "@/components/Lightbox";
import { MOTION_VIDEOS, EXPLORE_PROJECTS, WALL_ITEMS } from "@/data/projects";
import { useHoverSound } from "@/components/HoverSound";

const CATEGORIES = ["Cinematic", "Brand & Commercial", "Motion & Animation", "Social & Reels"];
const SCROLL_BRANDS = ["cartier", "north-face", "rolex", "nike", "mfk", "louis-vuitton"];

const brandGroups = SCROLL_BRANDS.map(
  slug => (EXPLORE_PROJECTS.find(p => p.slug === slug)?.images ?? [])
    .map(src => src.replace("/media/exploration/", "/media/scroll-row/"))
);
const maxLen = Math.max(...brandGroups.map(g => g.length));
const brandInterleaved: string[] = [];
for (let i = 0; i < maxLen; i++) {
  for (const group of brandGroups) {
    if (i < group.length) brandInterleaved.push(group[i]);
  }
}
const allScrollImages: string[] = [];
let wallIdx = 0;
for (let i = 0; i < brandInterleaved.length; i++) {
  allScrollImages.push(brandInterleaved[i]);
  if ((i + 1) % 3 === 0 && wallIdx < WALL_ITEMS.length) {
    allScrollImages.push(WALL_ITEMS[wallIdx++].replace("/media/creative-wall/", "/media/scroll-row/wall/"));
  }
}
while (wallIdx < WALL_ITEMS.length) allScrollImages.push(WALL_ITEMS[wallIdx++].replace("/media/creative-wall/", "/media/scroll-row/wall/"));

const rowSize = Math.ceil(allScrollImages.length / 3);
const ROWS = [
  allScrollImages.slice(0, rowSize),
  allScrollImages.slice(rowSize, rowSize * 2),
  allScrollImages.slice(rowSize * 2),
];

type MotionProject = (typeof MOTION_VIDEOS)[number];

function MotionCard({
  project,
  featured = false,
  onWatch,
}: {
  project: MotionProject;
  featured?: boolean;
  onWatch: (project: MotionProject) => void;
}) {
  const playTick = useHoverSound();
  const canWatch = Boolean(project.youtubeId);

  return (
    <article className={`motion-project-card${featured ? " featured" : ""}`}>
      <div className="motion-project-poster">
        <Image
          src={project.poster}
          alt={`${project.title} thumbnail`}
          fill
          loading={featured ? undefined : "lazy"}
          priority={featured}
          decoding="async"
          sizes={featured ? "(max-width: 900px) 100vw, 55vw" : "(max-width: 768px) 100vw, 33vw"}
          style={{ objectFit: "cover" }}
        />
        <span className="motion-project-ratio">{project.aspectRatio}</span>
      </div>
      <div className="motion-project-copy">
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
  const [imgLb, setImgLb] = useState<string | null>(null);

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
      <Lightbox
        isOpen={imgLb !== null}
        onClose={() => setImgLb(null)}
        src={imgLb ?? undefined}
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
                  A curated collection of AI-led films, brand visuals, motion experiments, and short-form creative work built for campaigns, social content, and visual storytelling.
                </p>
                <div className="motion-hero-actions">
                  <a href="#motion-projects">View Motion Projects</a>
                  <a href="#concept-wall">Explore Visual Wall</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main id="motion-projects" className="motion-projects-wrap">
        <Reveal>
          <section className="motion-featured-section" aria-label="Featured motion project">
            <div className="motion-section-intro">
              <p className="sec-eyebrow">Featured Motion Project</p>
              <h2>Start with the film work.</h2>
            </div>
            <MotionCard project={featuredProject} featured onWatch={setVideo} />
          </section>
        </Reveal>

        <nav className="motion-category-nav" aria-label="Motion project categories">
          {groupedProjects.map(group => (
            <a key={group.category} href={`#${group.category.toLowerCase().replaceAll(" & ", "-").replaceAll(" ", "-")}`}>
              {group.category}
            </a>
          ))}
        </nav>

        {groupedProjects.map(group => (
          <Reveal key={group.category}>
            <section
              id={group.category.toLowerCase().replaceAll(" & ", "-").replaceAll(" ", "-")}
              className="motion-project-section"
            >
              <div className="motion-section-intro">
                <p className="sec-eyebrow">{group.category}</p>
                <h2>{group.category}</h2>
              </div>
              <div className="motion-project-grid">
                {group.projects.map(project => (
                  <MotionCard key={project.id} project={project} onWatch={setVideo} />
                ))}
              </div>
            </section>
          </Reveal>
        ))}
      </main>

      <section id="concept-wall" className="motion-wall-section">
        <div className="section motion-wall-head">
          <div className="motion-section-intro">
            <p className="sec-eyebrow">Concept Frames & Visual Tests</p>
            <h2>Visual exploration wall.</h2>
            <p>
              A moving archive of AI-generated frames, campaign moods, product concepts, and visual experiments.
            </p>
          </div>
        </div>
        <div className="motion-rows" aria-label="Concept frames and visual tests">
          {ROWS.map((row, rowIdx) => (
            <div key={rowIdx} className="motion-scroll-row">
              <div className={`motion-scroll-track ${rowIdx === 1 ? "rtl" : "ltr"}`}>
                {[...row, ...row].map((src, i) => (
                  <button
                    key={`${src}-${i}`}
                    className="motion-scroll-item"
                    type="button"
                    onClick={() => setImgLb(src)}
                    aria-label={`Open concept frame ${i + 1}`}
                  >
                    <Image
                      src={src}
                      alt={`KRI4TIV concept frame ${i + 1}`}
                      fill
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
                      className="motion-scroll-img"
                      sizes="(max-width: 768px) 240px, 340px"
                    />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <span className="footer-logo">KRI<span style={{ fontStyle:"italic", color:"var(--ac)" }}>4</span>TIV</span>
        <span>AI Video & Motion Studio</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </>
  );
}
