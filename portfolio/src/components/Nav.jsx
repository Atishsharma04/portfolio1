import { useState, useEffect } from "react";
import { T } from "../utils/tokens";
import globalStyles from "../utils/globalStyles";

// ── NAV ──
export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handler = () => {
      const ids = ["hero", "services", "about", "skills", "projects", "contact"];
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 130) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = ["Home|hero", "Services|services", "About|about", "Skills|skills", "Projects|projects"];

  const navStyle = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "0.9rem 2rem",
    backdropFilter: "blur(24px)",
    background: "rgba(5,8,16,0.75)",
    borderBottom: `1px solid ${T.border}`,
  };

  return (
    <>
      <style>{globalStyles}</style>
      <nav style={navStyle}>
        <a href="#hero" style={{ fontFamily: "'Space Mono',monospace", fontWeight: 700, fontSize: "1.1rem", color: T.accent, textDecoration: "none", letterSpacing: "-0.02em" }}>
          AS.
        </a>

        {/* Desktop links */}
        <ul style={{ display: "flex", gap: "0.2rem", listStyle: "none", background: "rgba(255,255,255,0.04)", border: `1px solid ${T.border}`, borderRadius: 100, padding: "0.3rem" }}>
          {links.map((l) => {
            const [label, id] = l.split("|");
            const isActive = active === id;
            return (
              <li key={id}>
                <a href={`#${id}`} style={{
                  color: isActive ? T.text : T.muted,
                  textDecoration: "none", fontSize: "0.82rem",
                  padding: "0.38rem 0.95rem", borderRadius: 100, display: "block",
                  background: isActive ? "rgba(99,179,237,0.12)" : "transparent",
                  transition: "all 0.22s", fontFamily: "'DM Sans',sans-serif",
                }}>
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        <a href="#contact"
          style={{ background: T.accent, color: T.bg, padding: "0.48rem 1.3rem", borderRadius: 100, fontWeight: 600, fontSize: "0.82rem", textDecoration: "none", transition: "all 0.22s", whiteSpace: "nowrap" }}
          onMouseEnter={e => { e.target.style.background = "#90cdf4"; e.target.style.transform = "translateY(-2px)"; }}
          onMouseLeave={e => { e.target.style.background = T.accent; e.target.style.transform = "translateY(0)"; }}>
          Let's Connect
        </a>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} style={{ display: "none", flexDirection: "column", gap: 5, border: "none", background: "transparent", cursor: "pointer", padding: 4 }} className="hamburger-btn">
          {[0, 1, 2].map(i => <span key={i} style={{ width: 24, height: 2, background: T.text, borderRadius: 2, display: "block", transition: "all 0.3s" }} />)}
        </button>
      </nav>

      {/* Mobile nav */}
      {open && (
        <div style={{ position: "fixed", top: 62, left: 0, right: 0, background: "rgba(5,8,16,0.97)", backdropFilter: "blur(24px)", borderBottom: `1px solid ${T.border}`, padding: "1.5rem", zIndex: 99, display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          {[...links, "Contact|contact"].map((l) => {
            const [label, id] = l.split("|");
            return (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)}
                style={{ color: id === "contact" ? T.accent : T.text, textDecoration: "none", padding: "0.8rem 0", borderBottom: `1px solid ${T.border}`, fontSize: "1rem" }}>
                {label} {id === "contact" ? "→" : ""}
              </a>
            );
          })}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          nav ul { display: none !important; }
          nav > a[href="#contact"] { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}