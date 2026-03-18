import Image from "next/image";
import Link from "next/link";

const STATS = [
  { val: "398.4K", label: "Views" },
  { val: "7.8K",   label: "Likes" },
  { val: "1.2K",   label: "Bookmarks" },
  { val: "559",    label: "Reposts" },
];

export default function CaseStudyPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <div className="cs-hero">
        <Image
          src="/media/case-study/hero.webp"
          alt="From Idea to Half a Million Views"
          fill
          priority
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
        <div className="cs-hero-overlay" />
        <div className="cs-hero-content">
          <p className="cs-eyebrow">Case Study</p>
          <h1 className="cs-title">
            From Idea to Half a Million Views ≈ 503K:<br />
            How I Built a Viral<br />
            <em>Football Edit</em>
          </h1>
          <div className="cs-meta">
            <span>August 19, 2025</span>
            <span className="cs-meta-sep">·</span>
            <span>4–7 min read</span>
          </div>
        </div>
      </div>

      {/* ── Article body ─────────────────────────────────────────── */}
      <article className="cs-body">

        <p>I&apos;m a United fan, and when I saw David Ornstein&apos;s tweets about Benjamin Sesko to United gaining momentum, I had a feeling this was happening. On Football Twitter/X, player compilations usually blow up when a transfer is close, so I thought I should get started on one for Sesko.</p>

        <p>But here&apos;s the thing, I didn&apos;t just want a random highlight reel. I wanted a story. A plot. Around the same time, the news broke that Gyokeres was joining Arsenal. He was actually United&apos;s first choice, an ex-Amorim player who became a 90-goal striker under him. Arsenal got him, while we were getting Sesko, who Arteta wanted. Basically, both managers ended up with each other&apos;s targets.</p>

        <p>That gave me the idea. The storyline should connect the two, maybe even create a rivalry from the start.</p>

        <figure className="cs-figure">
          <Image
            src="/media/case-study/01.png"
            alt="Edit structure planning"
            width={1165}
            height={768}
            style={{ width: "100%", height: "auto", borderRadius: "6px" }}
            sizes="(max-width: 768px) 100vw, 720px"
          />
        </figure>

        <p>I remembered a Gyokeres celebration compilation trending on X. It was his unique mask celebration, with clips of fans and kids copying him before it cut to his goals. The video was by an editor called 1899INE. Since Gyokeres chose Arsenal over United, I thought starting my Sesko edit with that celebration, then flipping it into Sesko goals and his play, would be perfect.</p>

        <p>So that&apos;s how I built the structure. I collected short clips of his goals, one-touch linkups, interviews, and press conferences where he explained his playing style. At one point, I remembered a United fan channel, Muppetiers saying Sesko doesn&apos;t score &ldquo;striker goals.&rdquo; I decided to layer that audio over a clip of him scoring a trademark striker&apos;s goal. That contrast worked perfectly.</p>

        <figure className="cs-figure">
          <Image
            src="/media/case-study/02.png"
            alt="Clip selection and structure"
            width={591}
            height={801}
            style={{ width: "100%", height: "auto", borderRadius: "6px" }}
            sizes="(max-width: 768px) 100vw, 720px"
          />
        </figure>

        <p>For the soundtrack, the choice was obvious. 1899INE used &ldquo;Shook Ones, Part II&rdquo; by Mobb Deep, so I went with the same track to create a direct comparison. The challenge was figuring out how to transition from Gyokeres to Sesko. Then it hit me; celebration for celebration. Sesko&apos;s signature is his sprint to the corner flag and huge leap with a raised fist. I needed a stop-gap before that moment, so I used a short cut of Drake&apos;s Passionfruit where he says, &ldquo;Hold on, hold on, f that, f that shit.&rdquo; Not meant disrespectfully, it&apos;s just a famous line that worked as a &ldquo;forget that, here&apos;s ours&rdquo; moment.</p>

        <p>From there, I showed Sesko arriving at Berlin Airport. The airport itself wasn&apos;t visible, just him coming out and getting into a van. I then cut in Manchester videos of Old Trafford to make it look as if he was on his way there. After that, I switched to clips of him at Leipzig&apos;s stadium; in reality, his old ground, but in the edit, it gave the impression he was visiting Old Trafford.</p>

        <figure className="cs-figure">
          <Image
            src="/media/case-study/03.png"
            alt="Timeline and transitions in Premiere Pro"
            width={1200}
            height={800}
            style={{ width: "100%", height: "auto", borderRadius: "6px" }}
            sizes="(max-width: 768px) 100vw, 720px"
          />
        </figure>

        <p>Once that transition was set, I brought in his signature jump celebration. To strengthen the storyline, I mixed it with Zlatan; his role model, showing their similar leaps and cutting between the two. From there, I moved into a sequence of his goals, linkups, and interviews where he explained his playing style, making the clips flow with his finishes.</p>

        <p>Toward the end, I tied it back to Zlatan again: Sesko scoring a long-range strike, then Zlatan scoring from the exact same position for United. I mirrored this with their celebrations too, cutting between Sesko&apos;s jump and Zlatan&apos;s landing. The aim was to frame Sesko as a striker following in Zlatan&apos;s footsteps.</p>

        <figure className="cs-figure">
          <Image
            src="/media/case-study/04.png"
            alt="Sesko and Zlatan parallel edit"
            width={1200}
            height={800}
            style={{ width: "100%", height: "auto", borderRadius: "6px" }}
            sizes="(max-width: 768px) 100vw, 720px"
          />
        </figure>

        <p>The outro was a montage of seven to eight clips of Sesko&apos;s jumps, closing with him signing a jersey marked &ldquo;2028.&rdquo;</p>

        <hr className="cs-rule" />

        <p>Once I finished the edit, I posted it from my own X account. For a new account like mine, I thought it did pretty well: 28K views, 193 likes, and 34 reposts. But that wasn&apos;t the full story.</p>

        <p>Around the same time, an Arsenal fan had made a Sesko compilation because they thought he was signing for Arsenal. A United fan came across it and reshared it, which started getting good engagement. But then the Arsenal fan deleted the original video out of spite. He didn&apos;t want United fans enjoying the work he had put together for Arsenal. Once he deleted it, the United fan&apos;s repost also became invisible since the source was gone.</p>

        <p>That&apos;s when I stepped in. I commented, &ldquo;I got you,&rdquo; and shared my own video, pointing out that I had also made a compilation, and in my view, a better one. Soon after, a United fan account picked it up and reposted it with the caption, &ldquo;We got the receipts, don&apos;t worry.&rdquo;</p>

        <figure className="cs-figure">
          <Image
            src="/media/case-study/05.png"
            alt="The viral repost — receipts caption"
            width={591}
            height={602}
            style={{ width: "100%", height: "auto", borderRadius: "6px" }}
            sizes="(max-width: 768px) 100vw, 720px"
          />
        </figure>

        <p>Here&apos;s the twist: he thought I had simply downloaded the Arsenal fan&apos;s deleted video and reposted it myself, which is why he used that caption. Since he didn&apos;t realize I was the original creator, he didn&apos;t give me credit. But the repost blew up anyway; 398.4K views, 7.8K likes, 559 reposts, 21 comments, and 1.2K bookmarks. Later, when he found out the video was mine, he apologized for not crediting me. He even mentioned me in the comments and followed me back.</p>

        <figure className="cs-figure">
          <Image
            src="/media/case-study/06.png"
            alt="Post stats and engagement"
            width={593}
            height={584}
            style={{ width: "100%", height: "auto", borderRadius: "6px" }}
            sizes="(max-width: 768px) 100vw, 720px"
          />
        </figure>

        <p>For me, the numbers weren&apos;t the main thing. What mattered was that my idea worked. The storyline, the Gyokeres-to-Sesko transition, the Zlatan parallels, it all landed exactly how I thought it would. That reinforced something I&apos;ve always believed: I understand what an audience wants.</p>

        <p>Whether it&apos;s a video, copywriting, emails, or marketing campaigns, I know how to create content that connects. My strengths are creativity, persistence, and thinking differently.</p>

        <p>On the technical side, I made the edit in Adobe Premiere Pro, using effects and transitions to shape the story. The project took me about 5–7 hours. It could have been done faster, but I spent time carefully cutting and matching clips because the small details are what make a piece stand out.</p>

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
          <Link href="/" className="cs-back-link">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M11 7H3M3 7L7 3M3 7L7 11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Home
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
