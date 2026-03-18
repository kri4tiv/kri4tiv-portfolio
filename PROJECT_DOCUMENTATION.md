# KRI4TIV Portfolio — Complete Project Documentation

## Project Overview

| Field | Value |
|-------|-------|
| Brand | KRI4TIV |
| Owner | Anirudh Kandpal |
| Location | Based in Dubai, UAE (previously 2 years in London) |
| Qualification | MSc Marketing and Management, University of Manchester |
| Tech Stack | Next.js 16, TypeScript, CSS (no Tailwind, no UI libraries) |
| Fonts | Clash Display, Satoshi, Cabinet Grotesk, General Sans (Fontshare CDN) |
| Deployment | Vercel (recommended) |

---

## Site Structure

| Route | Page | Section Number |
|-------|------|----------------|
| `/` | Home | 01 About |
| `/work` | Selected Work | 02 |
| `/exploration` | Passion Projects | 03 |
| `/motion` | Motion and Wall | 04 |
| `/contact` | Get In Touch | 05 |

---

## Design Features

- **Custom circular cursor** — hollow 20px circle, 0.15 lerp trailing, grows lime on hover, hidden on touch
- **Lenis smooth scroll** — duration 1.8, luxury easing, replaces native scroll feel
- **Letter-shuffle nav hover** — characters cycle randomly then resolve to label
- **Blurred wallpaper strip backgrounds** — first image of each project blurred at 15px behind strip
- **Image lightbox** — fullscreen with prev/next arrows + keyboard navigation (←→ Esc)
- **Video lightbox** — fullscreen with controls, "Coming Soon" fallback for missing files
- **Preloader** — counting animation 000→100 with clip-path exit
- **Film grain overlay** — fixed SVG noise layer, animated at 0.3s steps
- **Ambient music toggle** — fade in/out over 500ms, loop, persists across pages
- **Hover tick sound** — Web Audio API sine wave (3200Hz, 0.03 gain, 60ms) on work/exploration/motion cards and tool pills
- **Scroll reveal animations** — IntersectionObserver, translateY(55px) → 0
- **Mobile responsive** — hamburger menu, stacked layouts, filmstrip hidden on mobile
- **Page transitions** — split horizontal wipe (left+right panels)

---

## File Structure

```
kri4tiv/
├── app/
│   ├── globals.css                  ← All styles (single file, ~720 lines)
│   ├── layout.tsx                   ← Root layout: Nav, Grain, CustomCursor, MusicToggle, SmoothScroll
│   ├── page.tsx                     ← Home: hero video, marquee, about, services, tools, stats
│   ├── contact/
│   │   └── page.tsx                 ← Contact: email, instagram, linkedin
│   ├── exploration/
│   │   └── page.tsx                 ← Exploration: accordion strips with image grids
│   ├── motion/
│   │   └── page.tsx                 ← Motion: 3 scroll rows + stacked video cards
│   └── work/
│       └── page.tsx                 ← Work: project strips with filmstrip + carousel
│
├── components/
│   ├── Carousel.tsx                 ← Horizontal scroll carousel overlay (opens from Work strips)
│   ├── CustomCursor.tsx             ← Custom hollow circle cursor with lerp movement
│   ├── Grain.tsx                    ← Fixed SVG film grain overlay
│   ├── HoverSound.tsx               ← useHoverSound() hook — Web Audio API tick
│   ├── Lightbox.tsx                 ← Fullscreen image lightbox with prev/next
│   ├── MusicToggle.tsx              ← Ambient audio player with fade in/out
│   ├── Nav.tsx                      ← Fixed nav with shuffle effect + mobile hamburger
│   ├── Preloader.tsx                ← 000→100 count animation, clip-path exit
│   ├── Reveal.tsx                   ← IntersectionObserver scroll reveal wrapper
│   ├── SmoothScroll.tsx             ← Lenis smooth scroll initializer
│   └── VideoLightbox.tsx            ← Fullscreen video lightbox with controls
│
├── data/
│   └── projects.ts                  ← All content: WORK_PROJECTS, EXPLORE_PROJECTS,
│                                       MOTION_VIDEOS, WALL_ITEMS, SERVICES, TOOLS, NAV_LINKS
│
└── public/
    └── media/
        ├── README.md                ← Image placement guide
        ├── ambient.mp3              ← Background music
        ├── hero/
        │   └── showreel.mp4         ← Hero background video (muted autoplay)
        ├── work/
        │   ├── fyonlli/             01.jpeg – 11.jpeg (Fashion, 2024)
        │   ├── evision-legal/       01.jpg – 05.jpg (Legal Tech, 2024)
        │   ├── healf/               01.png – 07.png (Wellness, 2023)
        │   ├── surreal/             01.jpg – 03.jpg (FMCG, 2023)
        │   ├── boldcube/            01.jpeg – 04.jpeg (E-Commerce, 2023)
        │   └── notwoway/            01.jpg – 05.jpg (Footwear, 2022)
        ├── exploration/
        │   ├── dmcc/                01.png – 40.png (Corporate)
        │   ├── cartier/             01.jpeg – 04.jpeg (Luxury)
        │   ├── lamborghini/         01.png – 05.png (Automotive)
        │   ├── louis-vuitton/       01.jpeg – 05.png (Fashion)
        │   ├── mfk/                 01.png – 02.png (Fragrance)
        │   ├── nike/                01.png – 02.jpeg (Sportswear)
        │   ├── north-face/          01.jpeg – 04.jpeg (Outdoor)
        │   ├── rolex/               01.jpeg – 02.jpeg (Horology)
        │   ├── venum/               01.jpeg – 02.png (Combat Sports)
        │   └── vogue/               01.jpeg – 02.png (Fashion Media)
        ├── motion/
        │   ├── sesko/video.mp4      Campaign, 16:9
        │   ├── fyonlli.mp4          Fashion, 9:16
        │   ├── nike-ad.mp4          Campaign, 21:9
        │   ├── bluewater.mp4        Corporate, 16:9
        │   ├── jubel.mp4            Brand, 16:9
        │   ├── inception.mp4        Film, 4:3
        │   └── evision-legal.mp4    Legal Tech, 16:9
        └── creative-wall/
            └── 01.png – 15.png      Mixed creative images for scroll rows
```

---

## How to Run

```bash
# Development (hot reload)
cd /Users/uchiha7/kri4tiv
npm run dev
# → Open http://localhost:3000

# Production build
npm run build

# Static export (for hosting without Node.js)
# 1. Add output: 'export' to next.config.ts
# 2. npm run build
# 3. Files go to kri4tiv/out/
```

---

## How to Add / Change Content

### Add a new Work project
1. Add images to `public/media/work/{slug}/01.jpg, 02.jpg ...`
2. Add entry to `WORK_PROJECTS` in `data/projects.ts`:
```ts
{
  id: 7, name: "Project Name", type: "Industry", year: "2024",
  slug: "project-slug", bg: "#1b1b1b",
  images: ["/media/work/project-slug/01.jpg", ...]
}
```

### Add a new Exploration project
1. Add images to `public/media/exploration/{slug}/`
2. Add entry to `EXPLORE_PROJECTS` in `data/projects.ts`
3. Add strip color to `STRIP_COLORS` in `app/exploration/page.tsx`

### Add a new Motion video
1. Copy video to `public/media/motion/{name}.mp4`
2. Add entry to `MOTION_VIDEOS` in `data/projects.ts`

### Edit About text / stats / services / tools
- All in `app/page.tsx` (bio paragraphs, stats array) and `data/projects.ts` (SERVICES, TOOLS arrays)

### Change hero video
- Replace `public/media/hero/showreel.mp4`

### Change ambient music
- Replace `public/media/ambient.mp3`

---

## How to Deploy on Vercel (Free)

1. Push project to GitHub
2. Go to vercel.com → New Project → Import from GitHub
3. Framework: Next.js (auto-detected)
4. Click Deploy — done
5. To add domain: Settings → Domains → Add domain → Update DNS at registrar

---

## Key CSS Variables (globals.css)

```css
--b0: #050505   /* Background (darkest) */
--b1: #0a0a0a   /* Card backgrounds */
--b2: #111      /* Subtle surfaces */
--b3: #191919   /* Section numbers */
--t0: #f4f1e8   /* Primary text */
--t1: #c8c4b8   /* Secondary text */
--t2: #7d7a70   /* Body text */
--t3: #4a4840   /* Muted text */
--t4: #2e2d28   /* Faintest text */
--ac: #d2f34d   /* Lime accent (hover, highlight) */
--rd: #e84040   /* Red (close buttons) */
```

---

## Revision History

| Version | Changes |
|---------|---------|
| v1 | Initial build — Next.js 16, 5 pages, preloader (000→100), nav with shuffle effect, page transitions, grain overlay, music toggle stub |
| v2 | Location Dubai, hero video background (muted autoplay), tools list update, font size adjustments, NoTwoWays project fix |
| v3 | Eyebrow text fixes, hero sizing, bio copy, stats cards, services list font, tool pills, nav sizing, exploration card fixes, contact font |
| v4 | Image lightbox, exploration grid gap fix, new projects added, media folder structure established |
| v5 | Image filmstrips on work rows, full media organization, README.md for images |
| v6 | Blurred wallpaper backgrounds on strips, lightbox prev/next navigation, motion page consolidation (3 scroll rows), video lightbox, ambient audio wired to music toggle |
| v7 | Edge-to-edge Work strips, strips 30% taller, hover underline + text shift animation, blur reduced, motion scroll improvements |
| v8 | Sesko video downloaded and wired, hero play button removed, strips 40% taller, custom circular cursor, Lenis smooth scroll |
| v9 | Lenis at duration 1.8, cursor `!important` fix, section headings +10% larger, hover tick sound (Web Audio API), contact links larger |
| v10 | Hover sound removed from nav + services, motion video cards edge-to-edge, final backup + docs + export |
| v11 | Section background images added (02-05) — `.sec-bg-img` CSS, `brightness(0.70)` darkening, black fallback for missing images, edge-to-edge on all inner pages |
| v12 | Section numbers (01–05) changed from grey `var(--b3)` to lime `var(--ac)`. Highlighted subtitle text on Work, Exploration, Contact pages — lime glow `rgba(210,243,77,0.15)` background |
| v13 | Strip wallpaper blur reduced 70% (15px→5px default, 9px→3px hover), brightness increased 80% (Work: 0.3→0.54 / 0.4→0.72, Exploration: 0.25→0.45 / 0.35→0.63) |
| v14 | New hero video replaced (18MB), hero video plays at 1.05x speed via playbackRate ref. Work company names matched to Exploration size (clamp(2rem,4vw,3.5rem)). Work + Exploration sector labels +20% larger and lime green. Contact page new background image |
| v15 | Hero overlay removed completely — both .hero-bg::after and .hero-video-overlay set to background:none |
| v16 | Vercel Speed Insights + Analytics added to root layout |
| Final | GitHub: github.com/kri4tiv/kri4tiv-portfolio (main). All old backups deleted. Live at Vercel. Desktop reference: ~/Desktop/KRI4TIV-Portfolio/ |
