import { T } from "../utils/tokens";

// ── FOOTER ──
export default function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${T.border}`, padding: "1.8rem 2rem", textAlign: "center", fontFamily: "'Space Mono',monospace", fontSize: "0.78rem", color: T.muted, position: "relative", zIndex: 1 }}>
      Designed & built by <span style={{ color: T.accent }}>Atish Sharma</span>
    </footer>
  );
}