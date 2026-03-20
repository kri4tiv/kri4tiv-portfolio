import Image from "next/image";
import Link from "next/link";
import AudioPlayer from "@/components/AudioPlayer";

const STATS = [
  { val: "503.5K", label: "Views" },
  { val: "8K",     label: "Likes" },
  { val: "1.2K",   label: "Bookmarks" },
  { val: "559",    label: "Reposts" },
];

export default function CaseStudyPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <div className="cs-hero">
        <div className="cs-hero-left">
          <p className="cs-eyebrow">Case Study</p>
          <h1 className="cs-title">
            From Idea to Half a Million Views ≈ 498.7K:<br />
            Engineering a Viral<br />
            <em>Long-Form Video</em>
          </h1>
          <div className="cs-meta">
            <span>August 19, 2025</span>
            <span className="cs-meta-sep">·</span>
            <span>4–7 min read</span>
          </div>
        </div>
        <div className="cs-hero-right">
          <Image
            src="/media/case-study/hero.webp"
            alt="From Idea to Half a Million Views"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center center" }}
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        </div>
      </div>

      {/* ── Audio player ─────────────────────────────────────────── */}
      <div style={{ marginTop: "2rem" }}>
        <AudioPlayer src="/media/case-study/narration.mp3" />
      </div>

      {/* ── Article body ─────────────────────────────────────────── */}
      <article className="cs-body">

        <h2 style={{ fontFamily: "var(--fd)", fontSize: "clamp(1.3rem, 2vw, 1.6rem)", fontWeight: 600, color: "var(--t0)", marginTop: "2.5rem", marginBottom: "1rem" }}>How I Made a Football Edit That Hit 400K Views, And Why It Worked</h2>

        <p>I&apos;m a Manchester United fan. So when journalist David Ornstein reported that striker Benjamin Sesko was close to signing for United, I wanted to be ready. On Football Twitter/X, player highlight compilations tend to blow up right when a transfer is about to happen. I decided to make one but I didn&apos;t want a random highlight reel. I wanted a story.</p>

        <figure className="cs-figure">
          <Image
            src="/media/case-study/01.png"
            alt="Edit structure planning"
            width={1165}
            height={768}
            style={{ width: "100%", height: "auto", borderRadius: "6px" }}
            loading="lazy"
            decoding="async"            sizes="(max-width: 768px) 100vw, 720px"
          />
        </figure>

        <h2 style={{ fontFamily: "var(--fd)", fontSize: "clamp(1.3rem, 2vw, 1.6rem)", fontWeight: 600, color: "var(--t0)", marginTop: "2.5rem", marginBottom: "1rem" }}>The Storyline</h2>

        <p>Around the same time, news broke that Viktor Gyokeres, a striker United actually wanted first, was joining Arsenal instead. Arsenal are United&apos;s biggest rivals. Meanwhile, Sesko, who Arsenal&apos;s manager wanted, was heading to United. Both managers ended up with each other&apos;s top targets. That swap gave me the whole idea for the video.</p>

        <p>I remembered a trending compilation of Gyokeres by an editor called 1899INE. It was built around his signature mask celebration, with clips of fans and kids copying it before cutting to his goals. Since Gyokeres chose Arsenal over United, I thought: what if I opened my Sesko edit with that celebration, then flipped it into Sesko&apos;s world? A direct comparison. Their guy versus ours.</p>

        <h2 style={{ fontFamily: "var(--fd)", fontSize: "clamp(1.3rem, 2vw, 1.6rem)", fontWeight: 600, color: "var(--t0)", marginTop: "2.5rem", marginBottom: "1rem" }}>Building the Edit</h2>

        <p>For the soundtrack, 1899INE had used &ldquo;Shook Ones, Part II&rdquo; by Mobb Deep. I went with the same track so the comparison would hit right away. The hard part was the transition. How do you shift from one player to another without it feeling forced? The answer: celebration for celebration. Sesko&apos;s signature move is a sprint to the corner flag followed by a huge leap with a raised fist.</p>

        <p>Before that moment, I dropped in a short cut of Drake&apos;s &ldquo;Passionfruit,&rdquo; the line where he says &ldquo;hold on, hold on, f that.&rdquo; It worked as a clean switch: forget their guy, here&apos;s ours.</p>

        <p>From there, I showed Sesko arriving at an airport. In reality, it was Berlin. But by cutting in shots of Manchester and Old Trafford (United&apos;s stadium) right after, it looked like he was arriving at United. I then used clips from Leipzig&apos;s stadium, his actual home ground in Germany, but in the edit, it gave the feeling he was stepping into Old Trafford for the first time.</p>

        <figure className="cs-figure">
          <Image
            src="/media/case-study/02.png"
            alt="Clip selection and structure"
            width={591}
            height={801}
            style={{ width: "100%", height: "auto", borderRadius: "6px" }}
            loading="lazy"
            decoding="async"            sizes="(max-width: 768px) 100vw, 720px"
          />
        </figure>

        <h2 style={{ fontFamily: "var(--fd)", fontSize: "clamp(1.3rem, 2vw, 1.6rem)", fontWeight: 600, color: "var(--t0)", marginTop: "2.5rem", marginBottom: "1rem" }}>The Zlatan Connection</h2>

        <p>To add another layer, I brought in Zlatan Ibrahimovic, a legendary striker who played for United and is also Sesko&apos;s idol growing up. I cut between their similar celebration leaps, side by side. Later, I matched a Sesko long-range goal with Zlatan scoring from the exact same spot for United, then lined up their celebrations again. The idea was to show Sesko as a striker following in Zlatan&apos;s footsteps at the same club.</p>

        <p>I also added audio from a United fan channel called Muppetiers, where someone said Sesko doesn&apos;t score &ldquo;striker goals.&rdquo; I placed that over a clip of him scoring a textbook striker&apos;s goal. That contrast worked perfectly.</p>

        <p>The outro was a montage of seven or eight clips of Sesko&apos;s signature leap, ending with him signing a jersey marked &ldquo;2028.&rdquo;</p>

        <figure className="cs-figure">
          <Image
            src="/media/case-study/03.png"
            alt="Timeline and transitions in Premiere Pro"
            width={1200}
            height={800}
            style={{ width: "100%", height: "auto", borderRadius: "6px" }}
            loading="lazy"
            decoding="async"            sizes="(max-width: 768px) 100vw, 720px"
          />
        </figure>

        <figure className="cs-figure">
          <Image
            src="/media/case-study/04.png"
            alt="Sesko and Zlatan parallel edit"
            width={1200}
            height={800}
            style={{ width: "100%", height: "auto", borderRadius: "6px" }}
            loading="lazy"
            decoding="async"            sizes="(max-width: 768px) 100vw, 720px"
          />
        </figure>

        <h2 style={{ fontFamily: "var(--fd)", fontSize: "clamp(1.3rem, 2vw, 1.6rem)", fontWeight: 600, color: "var(--t0)", marginTop: "2.5rem", marginBottom: "1rem" }}>How It Went Viral</h2>

        <p>I posted the edit from my own X account. For a new account, it did well: 28K views, 193 likes, 34 reposts. But the real story happened next.</p>

        <p>An Arsenal fan had made his own Sesko compilation, thinking Sesko was joining Arsenal. A United fan found it and reshared it, and it started getting good numbers. But then the Arsenal fan deleted the original out of spite, he didn&apos;t want United fans enjoying work he&apos;d put together for Arsenal. Once the source was gone, the repost disappeared too.</p>

        <p>That&apos;s when I stepped in. I commented &ldquo;I got you&rdquo; and shared my video. Soon after, a United fan account picked it up and reposted it with the caption: &ldquo;We got the receipts, don&apos;t worry.&rdquo; He thought I&apos;d just saved the deleted Arsenal video and reposted it. He didn&apos;t realise it was my own original work, so he didn&apos;t credit me. But the repost took off: 398.4K views, 7.8K likes, 559 reposts, and 1.2K bookmarks.</p>

        <figure className="cs-figure">
          <Image
            src="/media/case-study/05.png"
            alt="The viral repost, receipts caption"
            width={591}
            height={602}
            style={{ width: "100%", height: "auto", borderRadius: "6px" }}
            loading="lazy"
            decoding="async"            sizes="(max-width: 768px) 100vw, 720px"
          />
        </figure>

        <p>When he later found out the video was actually mine, he apologised, credited me in the comments, and followed me.</p>

        <figure className="cs-figure">
          <Image
            src="/media/case-study/06.png"
            alt="Post stats and engagement"
            width={593}
            height={584}
            style={{ width: "100%", height: "auto", borderRadius: "6px" }}
            loading="lazy"
            decoding="async"            sizes="(max-width: 768px) 100vw, 720px"
          />
        </figure>

        <h2 style={{ fontFamily: "var(--fd)", fontSize: "clamp(1.3rem, 2vw, 1.6rem)", fontWeight: 600, color: "var(--t0)", marginTop: "2.5rem", marginBottom: "1rem" }}>What This Showed Me</h2>

        <p>The numbers were great. But what mattered more was that the idea worked. The Gyokeres-to-Sesko transition, the Zlatan connection, the audio layering, it all landed the way I planned it. That proved something I&apos;ve always believed: I understand what an audience wants to see.</p>

        <p>Whether it&apos;s a video edit, copywriting, email campaigns, or marketing content, I know how to build something that connects with people. My strengths are creativity, persistence, and thinking differently. I made this edit in Adobe Premiere Pro over about five to seven hours. It could have been faster, but I spent time on the small cuts and details, because that&apos;s what makes a piece stand out.</p>

        {/* ── Stats grid ─────────────────────────────────────────── */}
        <div className="cs-stats">
          {STATS.map(s => (
            <div key={s.label} className="cs-stat-card">
              <div className="cs-stat-val">{s.val}</div>
              <div className="cs-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── Article footer ─────────────────────────────────────── */}
        <div className="cs-article-footer">
          <span>Tools Used: Adobe Premiere Pro</span>
          <span className="cs-meta-sep">·</span>
          <span>Time: 5–7 hours</span>
        </div>

        <div className="cs-back">
          <Link href="/case-study" className="cs-back-link">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M11 7H3M3 7L7 3M3 7L7 11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Case Studies
          </Link>
        </div>

      </article>

      <footer className="footer">
        <span className="footer-logo">KRI<span style={{ fontStyle: "italic", color: "var(--ac)" }}>4</span>TIV</span>
        <span>Case Study — Sesko Edit</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </>
  );
}
