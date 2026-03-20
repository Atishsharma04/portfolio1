// ── DESIGN TOKENS ──
export const T = {
  bg: "#050810",
  surface: "#0c1018",
  surface2: "#111827",
  border: "rgba(99,179,237,0.12)",
  accent: "#63b3ed",
  accent2: "#9f7aea",
  accent3: "#68d391",
  text: "#e2e8f0",
  muted: "#718096",
};
 
export const grad = (a = T.accent, b = T.accent2) =>
  `linear-gradient(135deg, ${a}, ${b})`;
 