import { useState } from "react";
// import { T, grad } from "../utils/tokens";
import { T } from "../utils/tokens";

// ── BUTTON ──
export function Btn({ href, primary, children }) {
  const [hov, setHov] = useState(false);
  const base = {
    padding: "0.72rem 1.65rem", borderRadius: 100, fontSize: "0.88rem",
    fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.4rem",
    transition: "all 0.22s", fontFamily: "'DM Sans',sans-serif",
  };
  const style = primary
    ? { ...base, background: hov ? "#90cdf4" : T.accent, color: T.bg, transform: hov ? "translateY(-2px)" : "none", boxShadow: hov ? "0 8px 28px rgba(99,179,237,0.28)" : "none" }
    : { ...base, border: `1px solid ${hov ? T.accent : T.border}`, color: hov ? T.accent : T.text, transform: hov ? "translateY(-2px)" : "none", background: "transparent" };
  return <a href={href} style={style} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>{children}</a>;
}

// ── SOCIAL ICON ──
export function SocialIcon({ label, href }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} style={{
      width: 40, height: 40, border: `1px solid ${hov ? T.accent : T.border}`,
      borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
      color: hov ? T.accent : T.muted, textDecoration: "none", fontSize: "0.95rem",
      transition: "all 0.22s", transform: hov ? "translateY(-2px)" : "none",
    }} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      {label}
    </a>
  );
}

// ── SECTION TAG ──
export function SectionTag({ children }) {
  return (
    <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.72rem", color: T.accent, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
      <span style={{ flex: "0 0 24px", height: 1, background: T.accent }} />
      {children}
    </div>
  );
}

// ── SECTION TITLE ──
export function SectionTitle({ children }) {
  return (
    <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(1.9rem,3.5vw,2.8rem)", letterSpacing: "-0.02em", marginBottom: "0.9rem", lineHeight: 1.1 }}>
      {children}
    </h2>
  );
}

// ── PILL ──
export function Pill({ children, color }) {
  const [hov, setHov] = useState(false);
  const colorMap = {
    accent:  { border: "rgba(99,179,237,0.35)",  text: T.accent,  bg: "rgba(99,179,237,0.08)"  },
    purple:  { border: "rgba(159,122,234,0.35)", text: T.accent2, bg: "rgba(159,122,234,0.08)" },
    green:   { border: "rgba(104,211,145,0.35)", text: T.accent3, bg: "rgba(104,211,145,0.08)" },
    default: { border: T.border,                 text: T.muted,   bg: "rgba(255,255,255,0.02)" },
  };
  const c = colorMap[color] || colorMap.default;
  return (
    <span style={{
      padding: "0.32rem 0.8rem", borderRadius: 100, fontSize: "0.74rem",
      fontFamily: "'Space Mono',monospace",
      border: `1px solid ${hov ? T.accent : c.border}`,
      color: hov ? T.accent : c.text,
      background: hov ? "rgba(99,179,237,0.1)" : c.bg,
      transition: "all 0.2s", cursor: "default",
    }} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      {children}
    </span>
  );
}