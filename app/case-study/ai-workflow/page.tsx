import Image from "next/image";
import Link from "next/link";

export default function AIWorkflowCaseStudyPage() {
  return (
    <>
      <div className="cs-hero">
        <div className="cs-hero-left">
          <p className="cs-eyebrow">Case Study</p>
          <h1 className="cs-title">
            How I Use AI to Create <em>High-Quality</em> First Drafts — Fast
          </h1>
          <div className="cs-meta">
            <span>March 2026</span>
            <span className="cs-meta-sep">·</span>
            <span>4–6 min read</span>
          </div>
        </div>
        <div className="cs-hero-right">
          <Image
            src="/media/case-study/ai-workflow/9.png"
            alt="AI Workflow First Draft"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center center" }}
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        </div>
      </div>

      <article className="cs-body">
        
        <p style={{ fontSize: "1.2rem", fontWeight: 500, color: "var(--t0)", marginBottom: "3rem" }}>
          A KRI4TIV workflow for rapid concept development
        </p>

        <h2 style={{ fontFamily: "var(--fd)", fontSize: "clamp(1.3rem, 2vw, 1.6rem)", fontWeight: 600, color: "var(--t0)", marginTop: "2.5rem", marginBottom: "1rem" }}>The Challenge</h2>
        
        <p>In most design projects, the hardest part isn&apos;t execution — it&apos;s the beginning.</p>
        <p>Translating a vague idea into a strong visual direction often takes the most time. You&apos;re balancing strategy, aesthetics, messaging, and layout all at once.</p>
        <p>I found that this slowed down momentum.</p>
        <p>So instead of starting in design tools, I built a workflow that allows me to quickly move from strategy → concept → visual draft.</p>
        <p>The goal is simple:</p>
        <p>Create strong, high-quality first drafts in hours, not days.</p>

        <h2 style={{ fontFamily: "var(--fd)", fontSize: "clamp(1.3rem, 2vw, 1.6rem)", fontWeight: 600, color: "var(--t0)", marginTop: "2.5rem", marginBottom: "1rem" }}>The Approach</h2>
        
        <p>This workflow is designed to separate three key stages:</p>
        <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", listStyleType: "disc" }}>
          <li>Thinking (strategy & direction)</li>
          <li>Exploration (visual generation)</li>
          <li>Execution (design refinement)</li>
        </ul>
        <p>By breaking these apart, I can focus on each step with more clarity and speed.</p>

        <h2 style={{ fontFamily: "var(--fd)", fontSize: "clamp(1.3rem, 2vw, 1.6rem)", fontWeight: 600, color: "var(--t0)", marginTop: "2.5rem", marginBottom: "1rem" }}>Step 1 — Defining the Brand Context</h2>
        
        <p>Every project starts with structured input.</p>
        <p>I provide:</p>
        <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", listStyleType: "disc" }}>
          <li>Company name and website</li>
          <li>Key notes about positioning and audience</li>
          <li>A few reference images</li>
        </ul>

        <figure className="cs-figure">
          <Image
            src="/media/case-study/ai-workflow/1.jpg"
            alt="Brand Context Input"
            width={1200}
            height={800}
            style={{ width: "100%", height: "auto", borderRadius: "6px" }}
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 100vw, 720px"
          />
        </figure>

        <p>This is processed through my research system, which builds a foundational understanding of:</p>
        <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", listStyleType: "disc" }}>
          <li>Tone of voice</li>
          <li>Brand personality</li>
          <li>Market positioning</li>
        </ul>
        <p>For this case, the objective was to reposition JLT from a functional location into:</p>
        <p>A premium, future-facing urban ecosystem.</p>

        <h2 style={{ fontFamily: "var(--fd)", fontSize: "clamp(1.3rem, 2vw, 1.6rem)", fontWeight: 600, color: "var(--t0)", marginTop: "2.5rem", marginBottom: "1rem" }}>Step 2 — Translating Strategy Into Creative Direction</h2>
        
        <p>The system outputs a structured strategy report, including:</p>
        <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", listStyleType: "disc" }}>
          <li>Campaign directions</li>
          <li>Messaging frameworks</li>
          <li>Visual territories</li>
        </ul>

        <figure className="cs-figure" style={{ marginTop: "2.5rem" }}>
          <Image
            src="/media/case-study/ai-workflow/2.jpg"
            alt="Strategy Report Output"
            width={1200}
            height={800}
            style={{ width: "100%", height: "auto", borderRadius: "6px" }}
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 100vw, 720px"
          />
        </figure>

        <p>This removes guesswork and gives me a clear starting point.</p>
        <p>From here, I select a strong direction to develop further.</p>
        <p>One of the chosen concepts was:</p>
        <p>“The Visionary — Investor & Future-Forward Focus”</p>

        <figure className="cs-figure" style={{ marginTop: "2.5rem" }}>
          <Image
            src="/media/case-study/ai-workflow/3.jpg"
            alt="The Visionary Concept"
            width={1200}
            height={800}
            style={{ width: "100%", height: "auto", borderRadius: "6px" }}
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 100vw, 720px"
          />
        </figure>

        <p>At this stage, the focus is still conceptual — no design decisions yet.</p>

        <h2 style={{ fontFamily: "var(--fd)", fontSize: "clamp(1.3rem, 2vw, 1.6rem)", fontWeight: 600, color: "var(--t0)", marginTop: "2.5rem", marginBottom: "1rem" }}>Step 3 — Converting Ideas Into Production-Ready Prompts</h2>
        
        <p>Strong visuals require precise inputs.</p>
        <p>So I pass the selected concept into my prompt enhancement system, trained on high-performing visual prompts.</p>

        <figure className="cs-figure" style={{ marginTop: "2.5rem" }}>
          <Image
            src="/media/case-study/ai-workflow/4.jpg"
            alt="Prompt Enhancement System"
            width={1200}
            height={800}
            style={{ width: "100%", height: "auto", borderRadius: "6px" }}
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 100vw, 720px"
          />
        </figure>

        <p>This transforms basic ideas into detailed, production-level prompts by defining:</p>
        <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", listStyleType: "disc" }}>
          <li>Camera and lens styles</li>
          <li>Lighting conditions</li>
          <li>Composition and framing</li>
          <li>Color and atmosphere</li>
        </ul>

        <figure className="cs-figure" style={{ marginTop: "2.5rem" }}>
          <Image
            src="/media/case-study/ai-workflow/5.jpg"
            alt="Detailed Production-Level Prompts"
            width={1200}
            height={800}
            style={{ width: "100%", height: "auto", borderRadius: "6px" }}
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 100vw, 720px"
          />
        </figure>

        <p>The result is a set of prompts that are specific enough to generate high-quality, consistent outputs.</p>

        <h2 style={{ fontFamily: "var(--fd)", fontSize: "clamp(1.3rem, 2vw, 1.6rem)", fontWeight: 600, color: "var(--t0)", marginTop: "2.5rem", marginBottom: "1rem" }}>Step 4 — Rapid Visual Exploration</h2>
        
        <p>These prompts are then used to generate multiple visual directions.</p>

        <figure className="cs-figure" style={{ marginTop: "2.5rem" }}>
          <Image
            src="/media/case-study/ai-workflow/7.jpg"
            alt="Rapid Visual Exploration Outputs"
            width={1200}
            height={800}
            style={{ width: "100%", height: "auto", borderRadius: "6px" }}
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 100vw, 720px"
          />
        </figure>

        <p>This stage is about exploration, not perfection.</p>
        <p>It allows me to quickly evaluate:</p>
        <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", listStyleType: "disc" }}>
          <li>Mood and atmosphere</li>
          <li>Visual hierarchy</li>
          <li>Brand alignment</li>
        </ul>
        <p>Instead of imagining ideas, I can now see them.</p>
        <p>This significantly improves decision-making early in the process.</p>

        <h2 style={{ fontFamily: "var(--fd)", fontSize: "clamp(1.3rem, 2vw, 1.6rem)", fontWeight: 600, color: "var(--t0)", marginTop: "2.5rem", marginBottom: "1rem" }}>Step 5 — Building a Functional First Draft</h2>
        
        <p>Once a direction is selected, I move into layout.</p>
        <p>Using my design system, I quickly:</p>
        <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", listStyleType: "disc" }}>
          <li>Apply headline and messaging</li>
          <li>Position the logo</li>
          <li>Establish composition</li>
        </ul>

        <figure className="cs-figure" style={{ marginTop: "2.5rem" }}>
          <Image
            src="/media/case-study/ai-workflow/6.jpg"
            alt="Building First Draft Layout 1"
            width={1200}
            height={800}
            style={{ width: "100%", height: "auto", borderRadius: "6px" }}
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 100vw, 720px"
          />
        </figure>

        <figure className="cs-figure" style={{ marginTop: "2.5rem" }}>
          <Image
            src="/media/case-study/ai-workflow/8.jpg"
            alt="Building First Draft Layout 2"
            width={1200}
            height={800}
            style={{ width: "100%", height: "auto", borderRadius: "6px" }}
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 100vw, 720px"
          />
        </figure>

        <p>This creates a functional first draft — something that looks and feels like a real asset.</p>
        <p>At this point, I can assess:</p>
        <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", listStyleType: "disc" }}>
          <li>Readability</li>
          <li>Balance and spacing</li>
          <li>Overall impact</li>
        </ul>

        <h2 style={{ fontFamily: "var(--fd)", fontSize: "clamp(1.3rem, 2vw, 1.6rem)", fontWeight: 600, color: "var(--t0)", marginTop: "2.5rem", marginBottom: "1rem" }}>Step 6 — The Output</h2>
        
        <p>The result is a clean, high-quality first draft that captures both the strategy and the visual direction.</p>

        <figure className="cs-figure" style={{ marginTop: "2.5rem" }}>
          <Image
            src="/media/case-study/ai-workflow/9.png"
            alt="The Output: Clean High-Quality Draft"
            width={1200}
            height={800}
            style={{ width: "100%", height: "auto", borderRadius: "6px" }}
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 100vw, 720px"
          />
        </figure>

        <p>This is not the final design — but it&apos;s a strong foundation.</p>

        <h2 style={{ fontFamily: "var(--fd)", fontSize: "clamp(1.3rem, 2vw, 1.6rem)", fontWeight: 600, color: "var(--t0)", marginTop: "2.5rem", marginBottom: "1rem" }}>Refinement and Final Execution</h2>
        
        <p>Once the direction is validated, I move into refinement using tools like:</p>
        <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", listStyleType: "disc" }}>
          <li>Photoshop</li>
          <li>Canva</li>
          <li>Other design platforms</li>
        </ul>
        <p>Here, I focus on craft:</p>
        <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", listStyleType: "disc" }}>
          <li>Typography precision</li>
          <li>Spacing and alignment</li>
          <li>Color grading</li>
          <li>Image quality</li>
          <li>Detail refinement</li>
        </ul>
        <p>This is where the design evolves from a strong draft into a polished, production-ready asset.</p>

        <h2 style={{ fontFamily: "var(--fd)", fontSize: "clamp(1.3rem, 2vw, 1.6rem)", fontWeight: 600, color: "var(--t0)", marginTop: "2.5rem", marginBottom: "1rem" }}>Why This Workflow Matters</h2>
        
        <p>This approach fundamentally changes how I work.</p>
        <p>Instead of spending time trying to “figure things out” inside design tools, I:</p>
        <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", listStyleType: "disc" }}>
          <li>Generate multiple directions quickly</li>
          <li>Make decisions earlier</li>
          <li>Reduce creative friction</li>
        </ul>
        <p>Most importantly:</p>
        <p>It allows me to focus more on quality refinement rather than initial guesswork.</p>

        <h2 style={{ fontFamily: "var(--fd)", fontSize: "clamp(1.3rem, 2vw, 1.6rem)", fontWeight: 600, color: "var(--t0)", marginTop: "2.5rem", marginBottom: "1rem" }}>Final Thought</h2>
        
        <p>AI is not replacing the design process — it&apos;s restructuring it.</p>
        <p>It accelerates the early stages, where uncertainty is highest.</p>
        <p>And by doing that, it gives me more time to focus on what truly matters:</p>
        <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", listStyleType: "disc" }}>
          <li>Craft</li>
          <li>Detail</li>
          <li>Final execution</li>
        </ul>
        <p style={{ fontSize: "1.1rem", fontWeight: 500, color: "var(--t0)", marginTop: "2rem" }}>
          Because a great design doesn&apos;t start perfect —<br />
          it starts with a strong, clear direction.
        </p>

        <div className="cs-back" style={{ marginTop: "4rem" }}>
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
        <span>Case Study — AI Workflow</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </>
  );
}
