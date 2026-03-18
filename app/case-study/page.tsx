export default function CaseStudyPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: "clamp(7rem,14vw,12rem)", minHeight: "70vh", display: "flex", alignItems: "center" }}>
        <div className="sec-head">
          <span className="sec-num" style={{ color: "var(--ac)" }}>CS</span>
          <div>
            <p className="sec-eyebrow">Case Study</p>
            <h1 className="sec-h2">
              Case Study —<br />
              <em>Coming Soon</em>
            </h1>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span className="footer-logo">KRI<span style={{ fontStyle: "italic", color: "var(--ac)" }}>4</span>TIV</span>
        <span>Case Study</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </>
  );
}
