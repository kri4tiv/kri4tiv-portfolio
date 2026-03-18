"use client";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import VideoLightbox from "@/components/VideoLightbox";
import Lightbox from "@/components/Lightbox";
import { MOTION_VIDEOS, EXPLORE_PROJECTS, WALL_ITEMS } from "@/data/projects";
import { useHoverSound } from "@/components/HoverSound";

// Build interleaved scroll images from specific brands + wall items
const SCROLL_BRANDS = ["cartier", "north-face", "rolex", "nike", "mfk", "louis-vuitton"];
const brandGroups = SCROLL_BRANDS.map(
  slug => EXPLORE_PROJECTS.find(p => p.slug === slug)?.images ?? []
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
    allScrollImages.push(WALL_ITEMS[wallIdx++]);
  }
}
while (wallIdx < WALL_ITEMS.length) allScrollImages.push(WALL_ITEMS[wallIdx++]);

const rowSize = Math.ceil(allScrollImages.length / 3);
const ROWS = [
  allScrollImages.slice(0, rowSize),
  allScrollImages.slice(rowSize, rowSize * 2),
  allScrollImages.slice(rowSize * 2),
];

export default function MotionPage() {
  const [vlb, setVlb]   = useState<{ src: string; title: string } | null>(null);
  const [imgLb, setImgLb] = useState<string | null>(null);
  const playTick = useHoverSound();

  return (
    <>
      <VideoLightbox
        isOpen={vlb !== null}
        onClose={() => setVlb(null)}
        src={vlb?.src}
        title={vlb?.title}
      />
      <Lightbox
        isOpen={imgLb !== null}
        onClose={() => setImgLb(null)}
        src={imgLb ?? undefined}
      />

      <section>
        <div className="sec-header-wrap" style={{ paddingTop: "clamp(7rem,14vw,12rem)" }}>
          <div className="sec-bg-img" style={{ backgroundImage: `url(/media/section-bg/04-motion.jpg)` }} />
          <div className="section" style={{ paddingBottom: "clamp(2rem,4vw,3rem)" }}>
            <div className="sec-head">
              <span className="sec-num">04</span>
              <div>
                <p className="sec-eyebrow">Motion and Wall</p>
                <h1 className="sec-h2">
                  Moving images and<br />
                  <em>creative archive</em>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 alternating scroll rows with real images */}
      <div className="motion-rows">
        {ROWS.map((row, rowIdx) => (
          <div key={rowIdx} className="motion-scroll-row">
            <div className={`motion-scroll-track ${rowIdx === 1 ? "rtl" : "ltr"}`}>
              {[...row, ...row].map((src, i) => (
                <div
                  key={i}
                  className="motion-scroll-item"
                  onClick={() => setImgLb(src)}
                >
                  <img
                    src={src}
                    alt=""
                    className="motion-scroll-img"
                    onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Stacked video boxes — edge-to-edge, no section padding */}
      <div style={{ marginTop: "clamp(2rem,4vw,3rem)" }}>
        <Reveal>
          <div className="video-stack">
            {MOTION_VIDEOS.map((v) => (
              <div
                key={v.id}
                className="video-box"
                onClick={() => setVlb({ src: v.src, title: v.name })}
                onMouseEnter={playTick}
              >
                <video
                  className="video-bg"
                  src={v.src}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onMouseEnter={e => (e.currentTarget as HTMLVideoElement).play()}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLVideoElement; el.pause(); el.currentTime = 0; }}
                />
                <div className="vplay">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5 3L13 8L5 13V3Z" fill="currentColor" />
                  </svg>
                </div>
                <div className="vmeta">
                  <span className="vname">{v.name}</span>
                  <div className="vtags">
                    <span>{v.type}</span>
                    <span>{v.ratio}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <footer className="footer">
        <span className="footer-logo">KRI<span style={{ fontStyle:"italic", color:"var(--ac)" }}>4</span>TIV</span>
        <span>Motion and Creative Archive</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </>
  );
}
