import Reveal from "@/components/Reveal";

export default function ContactPage() {
  const links = [
    { href: "mailto:kandpalanirudh00@gmail.com", label: "kandpalanirudh00@gmail.com", tag: "Email" },
    { href: "https://www.instagram.com/kri4tiv/", label: "@kri4tiv", tag: "Instagram" },
    { href: "https://www.linkedin.com/in/anirudhkandpal/", label: "Anirudh Kandpal", tag: "LinkedIn" },
  ];

  return (
    <>
      <div className="sec-header-wrap" style={{ paddingTop: "clamp(7rem, 14vw, 12rem)" }}>
        <div className="sec-bg-img" style={{ backgroundImage: `url(/media/section-bg/05-contact.jpg)` }} />
        <section className="section contact-section" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ width: "100%" }}>
          <div className="sec-head" style={{ marginBottom: "2rem" }}>
            <span className="sec-num">05</span>
            <div>
              <p className="sec-eyebrow">Get in Touch</p>
            </div>
          </div>

          <Reveal>
            <a href="mailto:kandpalanirudh00@gmail.com" className="contact-big">
              Let&apos;s Talk
            </a>
            <p className="contact-desc">
              <span style={{ background: "rgba(210,243,77,0.15)", padding: "0.2rem 0.6rem", borderRadius: "3px", color: "var(--ac)", fontWeight: 500 }}>Available for marketing, brand strategy, creative campaigns, AI integration, and other projects. Based in Dubai; working globally.</span>
            </p>
            <div className="contact-links">
              {links.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  {l.label}
                  <span>{l.tag}</span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
        </section>
      </div>

      <footer className="footer">
        <span className="footer-logo">KRI<span style={{ fontStyle: "italic", color: "var(--ac)" }}>4</span>TIV</span>
        <span>Anirudh Kandpal, Dubai</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </>
  );
}
