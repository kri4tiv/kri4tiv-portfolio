"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState, useCallback } from "react";

const NAV_LINKS = [
  { label: "Home",        href: "/" },
  { label: "Work",        href: "/work" },
  { label: "Exploration", href: "/exploration" },
  { label: "Motion",      href: "/motion" },
  { label: "Contact",     href: "/contact" },
];

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function ShuffleLink({
  label,
  href,
  active,
  onClick,
}: {
  label: string;
  href: string;
  active: boolean;
  onClick?: () => void;
}) {
  const [display, setDisplay] = useState(label);
  const ivRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const shuffle = useCallback(() => {
    let iter = 0;
    const max = 9;
    if (ivRef.current) clearInterval(ivRef.current);
    ivRef.current = setInterval(() => {
      iter++;
      if (iter >= max) {
        clearInterval(ivRef.current!);
        setDisplay(label);
        return;
      }
      setDisplay(
        label
          .split("")
          .map((c) =>
            c === " " ? " " : CHARS[Math.floor(Math.random() * CHARS.length)]
          )
          .join("")
      );
    }, 45);
  }, [label]);

  const stop = useCallback(() => {
    if (ivRef.current) clearInterval(ivRef.current);
    setDisplay(label);
  }, [label]);

  useEffect(() => () => { if (ivRef.current) clearInterval(ivRef.current); }, []);

  return (
    <Link
      href={href}
      className={`nav-link${active ? " active" : ""}`}
      onMouseEnter={shuffle}
      onMouseLeave={stop}
      onClick={onClick}
    >
      {display}
    </Link>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    router.push(href);
  };

  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <Link href="/" className="nav-logo">
          KRI<span className="ac">4</span>TIV
        </Link>
        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <ShuffleLink
              key={link.href}
              label={link.label}
              href={link.href}
              active={pathname === link.href}
            />
          ))}
        </div>
        <Link href="/contact" className="nav-cta nav-cta-desktop">
          Let&apos;s Talk
        </Link>
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span />
          <span />
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <button
            className="mobile-menu-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
          {NAV_LINKS.map((link, i) => (
            <button
              key={link.href}
              className="mobile-menu-row"
              onClick={() => handleNav(link.href)}
            >
              <span className="mm-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="mm-name">{link.label}</span>
            </button>
          ))}
        </div>
      )}
    </>
  );
}
