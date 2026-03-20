import { useState } from "react";
import { T, grad } from "../utils/tokens";

// ── PROFILE CARD ──
export default function ProfileCard() {
  const [hovGh, setHovGh] = useState(false);
  const [hovIg, setHovIg] = useState(false);
  const [hovLi, setHovLi] = useState(false);

  const socials = [
    {
      key: "gh", hov: hovGh, setHov: setHovGh,
      href: "https://github.com/Atishsharma04",
      color: "#e2e8f0", bg: "rgba(255,255,255,0.06)", label: "GitHub",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33s1.7.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48C19.14 20.16 22 16.42 22 12c0-5.52-4.48-10-10-10z"/>
        </svg>
      ),
    },
    {
      key: "ig", hov: hovIg, setHov: setHovIg,
      href: "https://www.instagram.com/atish4144/",
      color: "#f56565", bg: "rgba(245,101,101,0.08)", label: "Instagram",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
    },
    {
      key: "li", hov: hovLi, setHov: setHovLi,
      href: "https://linkedin.com/in/atishsharma",
      color: "#63b3ed", bg: "rgba(99,179,237,0.08)", label: "LinkedIn",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
  ];

  return (
    <div style={{
      background: "rgba(13,16,23,0.85)", border: "1px solid rgba(99,179,237,0.18)",
      borderRadius: 24, overflow: "hidden", backdropFilter: "blur(20px)",
      boxShadow: "0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(99,179,237,0.06)",
      width: "100%", maxWidth: 360, margin: "0 auto",
      animation: "fadeUp 0.8s 0.3s ease both", animationFillMode: "both",
    }}>
      {/* Banner */}
      <div style={{ height: 110, background: "linear-gradient(135deg, rgba(99,179,237,0.25), rgba(159,122,234,0.2), rgba(104,211,145,0.15))", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 30% 50%, rgba(99,179,237,0.15) 0%, transparent 60%), radial-gradient(circle at 80% 30%, rgba(159,122,234,0.12) 0%, transparent 50%)" }} />
        {/* Status badge */}
        <div style={{ position: "absolute", top: 14, right: 14, display: "flex", alignItems: "center", gap: 6, background: "rgba(5,8,16,0.6)", backdropFilter: "blur(8px)", border: "1px solid rgba(104,211,145,0.3)", borderRadius: 100, padding: "0.28rem 0.75rem" }}>
          <span style={{ width: 6, height: 6, background: T.accent3, borderRadius: "50%", animation: "blink 2s infinite" }} />
          <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.62rem", color: T.accent3 }}>Open to work</span>
        </div>
      </div>

      {/* Avatar */}
      <div style={{ padding: "0 1.5rem", marginTop: -40, marginBottom: "0.75rem" }}>
        <div style={{ width: 80, height: 80, borderRadius: "50%", border: "3px solid #0c1018", background: grad(), display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "1.8rem", color: T.bg, boxShadow: "0 0 0 2px rgba(99,179,237,0.3)" }}>
          AS
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: "0 1.5rem 1.5rem" }}>
        <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "1.2rem", marginBottom: "0.2rem" }}>Atish Sharma</div>
        <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.68rem", color: T.accent, marginBottom: "0.6rem", lineHeight: 1.6 }}>AI / ML Engineer · Full Stack Developer</div>
        <div style={{ fontSize: "0.8rem", color: T.muted, marginBottom: "1.2rem", lineHeight: 1.6 }}>B.Tech CSE (AI & ML) · JNGEC</div>

        {/* Stats */}
        <div style={{ display: "flex", gap: "0.6rem", marginBottom: "1.25rem" }}>
          {[["3+", "Projects"], ["AI/ML", "Focus"]].map(([val, label]) => (
            <div key={label} style={{ flex: 1, textAlign: "center", background: "rgba(255,255,255,0.03)", border: `1px solid ${T.border}`, borderRadius: 10, padding: "0.6rem 0.3rem" }}>
              <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "0.95rem", background: grad(), WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{val}</div>
              <div style={{ fontSize: "0.65rem", color: T.muted, marginTop: 2 }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: T.border, marginBottom: "1.25rem" }} />

        {/* Social links */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          {socials.map(s => (
            <a key={s.key} href={s.href} target="_blank" rel="noreferrer"
              onMouseEnter={() => s.setHov(true)} onMouseLeave={() => s.setHov(false)}
              style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.6rem 0.85rem", borderRadius: 10, border: `1px solid ${s.hov ? s.color + "55" : T.border}`, background: s.hov ? s.bg : "rgba(255,255,255,0.02)", textDecoration: "none", transition: "all 0.22s", transform: s.hov ? "translateX(4px)" : "none" }}>
              <span style={{ color: s.hov ? s.color : T.muted, transition: "color 0.22s", display: "flex" }}>{s.icon}</span>
              <span style={{ fontSize: "0.82rem", color: s.hov ? s.color : T.muted, fontFamily: "'DM Sans',sans-serif", transition: "color 0.22s" }}>
                {s.label === "GitHub" ? "github.com/Atishsharma04" : s.label === "Instagram" ? "instagram.com/atish4144" : "linkedin.com/in/atishsharma"}
              </span>
              <span style={{ marginLeft: "auto", fontSize: "0.75rem", color: s.hov ? s.color : T.muted, opacity: 0.6 }}>↗</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}