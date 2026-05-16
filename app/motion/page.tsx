"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import VideoLightbox from "@/components/VideoLightbox";
import { MOTION_VIDEOS } from "@/data/projects";
import { useHoverSound } from "@/components/HoverSound";

const CATEGORIES = ["Cinematic", "Brand & Commercial", "Motion & Animation", "Social & Reels"];

const CATEGORY_COPY: Record<string, { label: string; title: string; text: string }> = {
  "Cinematic": {
    label: "Film Direction",
    title: "Cinematic films",
    text: "Atmospheric films, sports edits, and story-led visual experiments built around pace, mood, and impact.",
  },
  "Brand & Commercial": {
    label: "Campaign Work",
    title: "Brand and commercial motion",
    text: "Spec ads, product films, campaign ideas, and video concepts made for brands, launches, and social campaigns.",
  },
  "Motion & Animation": {
    label: "Design in Motion",
    title: "Motion graphics and animation",
    text: "Animated visual systems, brand movement, product loops, and motion-led design experiments.",
  },
  "Social & Reels": {
    label: "Short Form",
    title: "Social video and reels",
    text: "Short-form AI edits for Instagram, TikTok, Reels, and fast campaign storytelling.",
  },
};

type MotionProject = (typeof MOTION_VIDEOS)[number];

function MotionThumb({
  project,
  onWatch,
}: {
  project: MotionProject;
  onWatch: (project: MotionProject) => void;
}) {
  const playTick = useHoverSound();
  const canWatch = Boolean(project.youtubeId);

  return (
    <article className="motion-thumb-card">
      <div className="motion-thumb-media">
        <Image
          src={project.poster}
          alt={`${project.title} video thumbnail`}
          fill
          loading="lazy"
          decoding="async"
          sizes="(max-width: 768px) 86vw, 28vw"
          style={{ objectFit: "cover" }}
        />
        <span>{project.aspectRatio}</span>
      </div>
      <div className="motion-thumb-copy">
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
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);

  const groupedProjects = useMemo(() => (
    CATEGORIES.map(category => ({
      category,
      projects: MOTION_VIDEOS.filter(project => project.category === category),
    })).filter(group => group.projects.length > 0)
  ), []);

  const activeGroup = groupedProjects.find(group => group.category === activeCategory) ?? groupedProjects[0];
  const activeCopy = CATEGORY_COPY[activeGroup.category];

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
          <div className="sec-bg-img" style={{ backgroundImage: `url(/media/section-bg-optimized/04-motion.webp)` }} />
          <div className="section" style={{ paddingBottom: "clamp(2rem,4vw,3rem)" }}>
            <div className="sec-head">
              <span className="sec-num">04</span>
              <div>
                <p className="sec-eyebrow">Video Lab</p>
                <h1 className="sec-h2">
                  Video work for<br />
                  <em>films, brands and reels</em>
                </h1>
                <p className="sec-desc">
                  A focused video portfolio for AI films, commercial concepts, motion graphics, edits, and short-form social work.
                </p>
                <div className="motion-hero-actions">
                  <a href="#motion-library">Browse Video Work</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main id="motion-library" className="motion-library-wrap">
        <Reveal>
          <section className="motion-library-panel" aria-label="Video project library">
            <div className="motion-library-intro">
              <p className="sec-eyebrow">Choose the work you want to see</p>
              <h2>One studio, four clear lanes.</h2>
              <p>
                Select a category, then open the video work that matches what you want to review.
              </p>
            </div>

            <div className="motion-selector">
              <div className="motion-selector-tabs" role="tablist" aria-label="Video work categories">
                {groupedProjects.map((group, index) => (
                  <button
                    key={group.category}
                    type="button"
                    className={group.category === activeGroup.category ? "active" : ""}
                    onClick={() => setActiveCategory(group.category)}
                    role="tab"
                    aria-selected={group.category === activeGroup.category}
                    aria-controls="motion-category-panel"
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {group.category}
                  </button>
                ))}
              </div>

              <div id="motion-category-panel" className="motion-category-panel" role="tabpanel">
                <div className="motion-category-copy">
                  <p className="motion-project-kicker">{activeCopy.label}</p>
                  <h3>{activeCopy.title}</h3>
                  <p>{activeCopy.text}</p>
                </div>
                <div className="motion-thumb-grid">
                  {activeGroup.projects.map(project => (
                    <MotionThumb key={project.id} project={project} onWatch={setVideo} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      </main>

      <footer className="footer">
        <span className="footer-logo">KRI<span style={{ fontStyle:"italic", color:"var(--ac)" }}>4</span>TIV</span>
        <span>Video Lab</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </>
  );
}
