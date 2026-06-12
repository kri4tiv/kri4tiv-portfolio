"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import Lightbox from "@/components/Lightbox";

type BrandingProject = {
  id: string;
  number: string;
  title: string;
  eyebrow: string;
  summary: string;
  palette: string[];
  details: { label: string; value: string }[];
  images: string[];
  paragraphs: string[];
};

const BRANDING_PROJECTS: BrandingProject[] = [
  {
    id: "adidas-coca-cola",
    number: "01",
    title: "Adidas Originals x Coca-Cola: The First Sip Before Glory",
    eyebrow: "Football culture campaign",
    summary:
      "A fictional World Cup campaign built around the ritual before the match: the tunnel, the boots, the bottle, and the quiet moment before kick-off.",
    palette: ["#d71920", "#050505", "#f4f1e8", "#1f5d3b", "#c7c8c2"],
    details: [
      { label: "Typography", value: "Condensed sport headlines with stadium-scale supporting labels." },
      { label: "System", value: "Bottle-cap badges, pitch lines, red three-stripe taping, and matchday marks." },
      { label: "Formats", value: "Tunnel stills, merch boards, city carousel, fan-zone experience, and social posters." },
    ],
    images: Array.from({ length: 9 }, (_, i) => `/media/branding/adidas-coca-cola/${String(i + 1).padStart(2, "0")}.webp`),
    paragraphs: [
      "With the World Cup only days away, I wanted to explore what a fictional Adidas Originals x Coca-Cola campaign could look like if it focused on the ritual before the match, not just the match itself.",
      "The idea became The First Sip Before Glory. Adidas brings the movement: the boots, the kit, the tunnel, the warm-up, and football culture. Coca-Cola brings the feeling: the cold bottle, the shared moment, the sound of the cap opening, and the anticipation before kick-off.",
      "The campaign starts with a cinematic tunnel still at MetLife Stadium. Boots, a match ball, a Coke bottle, a jacket, ice, crates, and wet concrete create a quiet pre-match atmosphere. From there, the identity system turns the idea into a full brand language with red, black, stadium white, bottle green, silver, and pitch-line details.",
      "Each creative expands the same world. The ambassador grid turns players and cultural figures into matchday archetypes. The limited-edition bottle poster makes Coca-Cola feel like a collectible World Cup object. The jersey board shows how the idea could move into merch, using bottle-cap badges, red three-stripe taping, and pitch-line details.",
      "The city carousel takes the ritual global, showing how every city has its own version of the moment before the whistle. The Ritual Room turns the campaign into a fan-zone experience with a lace-up wall, cold bottle bar, matchday mirror, badge printer, and 360 camera.",
      "Overall, this concept is about anticipation. Before every roar, there is a ritual. This campaign turns that small moment into a visual world that feels cinematic, collectible, social, and made for football culture.",
    ],
  },
  {
    id: "whoop-rebranded",
    number: "02",
    title: "WHOOP Rebranded",
    eyebrow: "Performance identity system",
    summary:
      "A premium wearable strap and performance accessories concept built around product clarity, movement, packaging, social design, and AI campaign stills.",
    palette: ["#070707", "#f3efe6", "#4b4d4f", "#1f7cff", "#71d66b", "#b67858"],
    details: [
      { label: "Typography", value: "Space Grotesk for bold headlines, with Inter for clean product information and digital layouts." },
      { label: "System", value: "Connected loop mark, strap tags, product stamps, colour codes, packaging sleeves, and campaign end frames." },
      { label: "Formats", value: "Brand identity, packaging, Instagram feed, story assets, product cards, social design, and AI lifestyle campaign stills." },
    ],
    images: Array.from({ length: 11 }, (_, i) => `/media/branding/whoop-rebranded/${String(i + 1).padStart(2, "0")}.webp`),
    paragraphs: [
      "WHOOP & CO was developed as a premium wearable strap and performance accessories concept, built around one simple idea: a strap should feel as considered as the technology it supports.",
      "The goal was to move the brand away from generic fitness accessory design and give it a sharper, more ownable identity. The visual direction sits between Apple-level product clarity and Nike-style movement: clean, bold, tactile, and performance-led, but still wearable enough for everyday life.",
      "The identity begins with a custom WHOOP & CO wordmark. The rounded, connected letterforms create a sense of flow and motion, while the double OO becomes the brand's most recognisable symbol.",
      "This connected loop mark was then developed as a short-form logo for packaging, social icons, strap tags, product stamps, and campaign end frames.",
      "The colour system was built to balance performance with lifestyle. Core Black, Warm Off-White, and Graphite Grey create a premium base, while Signal Blue, Recovery Green, and Motion Clay add controlled moments of energy, recovery, and human warmth.",
      "The palette was designed to work across product cards, campaign stills, packaging, and digital applications without feeling loud or overdesigned.",
      "For typography, Space Grotesk gives the brand a strong headline voice, while Inter keeps product information clean and readable across packaging, captions, and digital layouts. The system is intentionally simple: bold where it needs impact, quiet where the product needs space.",
      "The brand was then extended into real-world applications. The Instagram feed and story assets show the strap in use through movement, recovery, sweat, texture, and daily wear.",
      "The packaging system turns the identity into a physical product experience, using clean cards, sleeves, labels, colour codes, and material details to make the strap feel premium and considered.",
      "The AI lifestyle stills push the brand into campaign territory. Each image was built around realistic skin texture, product clarity, cinematic lighting, and different use cases: track starts, recovery stretches, gym pressure, poolside recovery, and everyday movement.",
      "The result is a compact but complete identity system for WHOOP & CO: bold enough to stand out, clean enough to feel premium, and flexible enough to work across packaging, social, campaign stills, and short-form video. Designed for movement. Built for everyday.",
    ],
  },
  {
    id: "tabby-card",
    number: "03",
    title: "Tabby Card: Making Flexible Payments Feel Simple",
    eyebrow: "Fintech campaign system",
    summary:
      "A light, friendly campaign system that makes flexible payments feel clear, controlled, and easy to understand at a glance.",
    palette: ["#50e3b0", "#2b145f", "#cfc0ff", "#f5f2eb", "#1d1d1f"],
    details: [
      { label: "Typography", value: "Rounded fintech headlines with soft UI labels and short product lines." },
      { label: "System", value: "Pill tags, dotted paths, payment cards, icon blocks, and modular layouts." },
      { label: "Formats", value: "Campaign posters, wallet flow, education boards, and tone-of-voice assets." },
    ],
    images: Array.from({ length: 7 }, (_, i) => `/media/branding/tabby-card/${String(i + 1).padStart(2, "0")}.webp`),
    paragraphs: [
      "For this Tabby Card concept, I wanted the campaign to feel clear, light, and easy to understand at a glance. The main idea was built around one simple line: Keep the Moment Light.",
      "Instead of making payments feel serious or complicated, the design system turns the product into something friendly, flexible, and part of an everyday shopping moment.",
      "The visual direction uses Tabby's mint green, deep purple, soft lilac, off-white, charcoal, and light grey. The colours feel fresh and fintech-led, but not cold. Mint gives the system energy and recognition, purple adds contrast, and the soft lilac cards make the payment information feel lighter.",
      "The first visual works as the main system board. It sets the foundation for colour, typography, card shape, payment blocks, and voice. The card is treated as the hero object, while the payment blocks explain the product benefit without overloading the viewer.",
      "The campaign posters then turn that system into different use cases. Checkout should not kill the mood connects the product to a real shopping moment where the user wants the experience to stay smooth, not stressful.",
      "The Split it into 4 visual breaks the payment structure into four clear blocks: today, month two, month three, and month four. The How Tabby Card Works poster explains the full flow with simple steps, rounded cards, iconography, dotted arrows, and strong headline hierarchy.",
      "The Tabby Speaks Clearly poster focuses on tone of voice. Short lines like Tap now. Pay later. and Less stress. More control. turn copy into a design asset across social, app, and campaign surfaces.",
      "Overall, this concept is designed to make flexible payments feel simple, controlled, and emotionally lighter. The result is a visual system that feels practical, social-ready, and easy to extend across ads, app education, campaign pages, and product marketing.",
    ],
  },
  {
    id: "heinz-rebrand",
    number: "04",
    title: "Heinz Rebrand Concept: Sauce That Starts Things",
    eyebrow: "Food culture rebrand",
    summary:
      "A bolder Heinz identity concept built around everyday food moments, sharper campaign lines, and a louder shelf presence.",
    palette: ["#d71920", "#2f6b3f", "#fff4df", "#f2b705", "#202020"],
    details: [
      { label: "Typography", value: "Bold condensed type designed for shelves, billboards, packaging, and social posts." },
      { label: "System", value: "Keystone frames, edition labels, sauce streaks, sticker badges, and food-moment lockups." },
      { label: "Formats", value: "Packaging, ingredient posters, OOH, retail POS, tray liners, and social campaign boards." },
    ],
    images: Array.from({ length: 10 }, (_, i) => `/media/branding/heinz-rebrand/${String(i + 1).padStart(2, "0")}.webp`),
    paragraphs: [
      "For this Heinz rebrand concept, I wanted to take an iconic brand and make it feel louder, sharper, and more present in modern food culture. Heinz is already instantly recognisable, but the idea here was to move it from something that sits in the background of a meal to something that starts the moment.",
      "The campaign idea became Sauce That Starts Things, supported by the bolder line Don't Eat It Dry. It is simple, memorable, and built around a truth everyone understands: some food just feels incomplete without sauce.",
      "Fries, burgers, nuggets, eggs, grilled cheese, hot dogs, samosas, and pizza crusts all become small everyday moments where Heinz can own the role of making food better.",
      "The visual identity system keeps the classic Heinz cues, but makes them more direct and social-ready. The palette uses Heinz red, pickle green, creamy label white, mustard yellow, fry gold, tomato pink, and charcoal black.",
      "The typography is bold, condensed, and high-impact, designed to be read quickly on packaging, posters, shelves, billboards, and social posts. The keystone label shape becomes a flexible brand frame across packaging, stickers, badges, campaign lockups, and point-of-sale material.",
      "The packaging system builds on the idea of New Look. Same Icon. It keeps Heinz recognisable through the bottle shape, label structure, and 57 Varieties mark, but adds clearer hierarchy, stronger shelf blocking, and food-moment editions like Fries Edition, Burger Edition, Late Night Edition, and Breakfast Edition.",
      "The ingredient poster adds a more honest product story. Tomatoes with a point to prove gives the brand a sharper voice while still highlighting real flavour, tomatoes, vinegar, sea salt, onions, and spices. It balances personality with trust, which matters for a heritage food brand.",
      "The social campaign system turns the rebrand into bite-sized culture. Lines like Fries need backup, Blandness cancelled, Dip first, Bottle service, and Good food deserves good sauce are designed to work as bold, simple posts.",
      "The out-of-home and retail systems show how the identity could work beyond social. The billboards are built for fast reading, using big type, simple food truths, and high-contrast product visuals. The retail and POS board brings the system closer to the shelf through tray liners, aisle displays, checkout stands, takeaway bags, sachet boxes, menu screens, and price strips.",
      "Overall, this concept keeps Heinz iconic but gives it a stronger modern voice. It is bolder on shelf, clearer in campaign, more flexible for social, and more connected to everyday food culture. Same Heinz, bigger attitude.",
    ],
  },
  {
    id: "sands",
    number: "05",
    title: "SANDS: Personal Shopping With a Quiet Luxury Language",
    eyebrow: "Luxury service campaign",
    summary:
      "A refined personal shopping campaign built around taste, access, restraint, and the feeling of a private appointment.",
    palette: ["#090807", "#f0e7d6", "#b79761", "#6f6255", "#2c2018"],
    details: [
      { label: "Typography", value: "Elegant serif headlines with quiet service notes and refined campaign copy." },
      { label: "System", value: "Thin CTAs, muted gold accents, marble surfaces, silk textures, and client-file details." },
      { label: "Formats", value: "Editorial posters, private shopping notes, Dubai lifestyle visuals, and system boards." },
    ],
    images: Array.from({ length: 5 }, (_, i) => `/media/branding/sands/${String(i + 1).padStart(2, "0")}.webp`),
    paragraphs: [
      "For this SANDS concept, I wanted the campaign to feel less like a traditional fashion ad and more like a private appointment. The core idea was simple: luxury should feel sourced, not sold.",
      "The visual system is built around quiet luxury, warm interiors, soft natural light, and refined product staging. Instead of loud styling or heavy promotional design, the posters use restraint: generous negative space, elegant serif typography, thin-line CTAs, muted gold accents, marble surfaces, silk textures, leather details, and a calm black, cream, taupe, and espresso palette.",
      "The campaign line, Sourced like it was made for you, became the main creative anchor. It gives the brand a personal, curated feeling and makes the service feel intimate rather than transactional.",
      "The first two posters focus on editorial product styling, using handbags, folded garments, jewellery, sunglasses, and branded packaging to create a boutique-like world. Another poster introduces a private shopping note, almost like a luxury client file, which makes the sourcing process feel personal and considered.",
      "The Dubai visual brings in the skyline and warm evening light, connecting SANDS to a premium UAE lifestyle without making the composition feel too obvious.",
      "The final campaign system board brings the whole identity together. It defines the palette, typography, image direction, layout rules, and social applications, making the project feel like a complete brand campaign rather than a set of standalone posters.",
      "Overall, this concept positions SANDS as a refined personal shopping and curated fashion service built around taste, access, and attention. The design language is minimal, cinematic, and tactile.",
    ],
  },
  {
    id: "cleaneats",
    number: "06",
    title: "CleanEats: Turning Food Labels Into Clearer Choices",
    eyebrow: "Health-tech product campaign",
    summary:
      "A simple food-scanning campaign that makes ingredients, sugar, additives, and nutrition choices easier to understand.",
    palette: ["#6fcf97", "#eaf4ea", "#f8f4ec", "#24382f", "#c9d9ca"],
    details: [
      { label: "Typography", value: "Clear health-tech hierarchy with soft product UI and direct campaign lines." },
      { label: "System", value: "Rounded scan cards, nutrition blocks, ingredient callouts, and app-led proof points." },
      { label: "Formats", value: "App posters, product scans, lifestyle kitchen visuals, and educational social assets." },
    ],
    images: Array.from({ length: 4 }, (_, i) => `/media/branding/cleaneats/${String(i + 1).padStart(2, "0")}.webp`),
    paragraphs: [
      "For this CleanEats concept, I wanted the campaign to feel simple, useful, and easy to trust. The idea was built around a common everyday problem: food packaging can look clean on the front, but the real story is usually hidden in the ingredients, sugar levels, additives, and nutrition label.",
      "The visual direction uses a fresh green palette, soft off-white backgrounds, rounded UI cards, and clear product-focused layouts to make the app feel approachable rather than clinical.",
      "The posters are designed to show the full scanning journey. Some visuals focus on the product and phone together, making the barcode scan feel instant and useful. Others explain what CleanEats checks in one scan, including ingredients, sugar, calories, additives, nutrition fit, and better choices.",
      "The lifestyle poster adds a more human layer, showing the app in a real kitchen moment where someone checks a snack before deciding.",
      "The main copy lines, like Don't guess what's inside, The front label is not the full story, and Looks healthy? Scan it first, are meant to be direct and easy to remember. They make the campaign educational without making it feel heavy or fear-based.",
      "Overall, this concept positions CleanEats as a smart food-scanning companion that helps people understand what they are eating in seconds. The design system is clean, friendly, and product-led, with the app UI acting as the main proof point across the campaign.",
    ],
  },
];

type LbState = { projectTitle: string; images: string[]; index: number };

type WindowWithLenis = Window & {
  __kriLenis?: {
    scrollTo: (target: HTMLElement | number, options?: { offset?: number; duration?: number }) => void;
  };
};

export default function BrandingPage() {
  const [lb, setLb] = useState<LbState | null>(null);

  const scrollToProject = (event: React.MouseEvent<HTMLButtonElement>, id: string) => {
    event.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;

    window.history.replaceState(null, "", `#${id}`);
    const lenis = (window as WindowWithLenis).__kriLenis;

    if (lenis) {
      lenis.scrollTo(target, { offset: -88, duration: 1 });
      return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Lightbox
        isOpen={lb !== null}
        onClose={() => setLb(null)}
        src={lb ? lb.images[lb.index] : undefined}
        label={lb ? `${lb.projectTitle} - Frame ${lb.index + 1}` : undefined}
        images={lb?.images}
        imageIndex={lb?.index}
        onPrev={lb && lb.index > 0 ? () => setLb(prev => prev ? { ...prev, index: prev.index - 1 } : null) : undefined}
        onNext={lb && lb.index < lb.images.length - 1 ? () => setLb(prev => prev ? { ...prev, index: prev.index + 1 } : null) : undefined}
      />

      <section className="branding-hero section">
        <div className="sec-head branding-head">
          <span className="sec-num">04</span>
          <div>
            <p className="sec-eyebrow">Branding</p>
            <h1 className="sec-h2">
              Branding systems<br />
              <em>and design case studies</em>
            </h1>
            <p className="sec-desc">
              Fictional campaigns, identity systems, launch visuals, and product-led brand worlds built to show strategy, layout, tone, and visual direction.
            </p>
          </div>
        </div>

        <Reveal>
          <div className="branding-index">
            {BRANDING_PROJECTS.map(project => (
              <button
                key={project.id}
                type="button"
                className="branding-index-card"
                aria-label={`Jump to ${project.title}`}
                onClick={event => scrollToProject(event, project.id)}
              >
                <div className="branding-index-media">
                  <Image
                    src={project.images[0]}
                    alt={`${project.title} thumbnail`}
                    className="branding-index-img"
                    fill
                    priority={project.number === "01"}
                    sizes="(max-width: 768px) 90vw, 24vw"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="branding-index-copy">
                  <span>{project.number}</span>
                  <h2>{project.title}</h2>
                  <p>{project.summary}</p>
                </div>
              </button>
            ))}
          </div>
        </Reveal>
      </section>

      <main className="branding-case-wrap">
        {BRANDING_PROJECTS.map(project => (
          <Reveal key={project.id}>
            <article id={project.id} className="branding-case">
              <aside className="branding-case-side">
                <p className="sec-eyebrow">{project.eyebrow}</p>
                <h2>{project.title}</h2>
                <p>{project.summary}</p>
                <div className="branding-palette" aria-label={`${project.title} palette`}>
                  {project.palette.map(color => (
                    <span key={color} style={{ backgroundColor: color }} />
                  ))}
                </div>
                <dl className="branding-spec-list">
                  {project.details.map(detail => (
                    <div key={detail.label}>
                      <dt>{detail.label}</dt>
                      <dd>{detail.value}</dd>
                    </div>
                  ))}
                </dl>
              </aside>

              <div className="branding-case-main">
                <button
                  className="branding-hero-frame"
                  type="button"
                  onClick={() => setLb({ projectTitle: project.title, images: project.images, index: 0 })}
                >
                  <Image
                    src={project.images[0]}
                    alt={`${project.title} main brand visual`}
                    fill
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 768px) 92vw, 58vw"
                    style={{ objectFit: "contain" }}
                  />
                </button>

                <div className="branding-copy">
                  {project.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                <div className="branding-gallery" aria-label={`${project.title} image gallery`}>
                  {project.images.map((src, index) => (
                    <button
                      key={src}
                      className={`branding-gallery-item${index === 0 ? " is-main" : ""}`}
                      type="button"
                      onClick={() => setLb({ projectTitle: project.title, images: project.images, index })}
                    >
                      <Image
                        src={src}
                        alt={`${project.title} frame ${index + 1}`}
                        fill
                        loading="lazy"
                        decoding="async"
                        sizes="(max-width: 768px) 46vw, 25vw"
                        style={{ objectFit: "contain" }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </main>

      <footer className="footer">
        <span className="footer-logo">KRI<span style={{ fontStyle: "italic", color: "var(--ac)" }}>4</span>TIV</span>
        <span>Branding and Design Case Studies</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </>
  );
}
