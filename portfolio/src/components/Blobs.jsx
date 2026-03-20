// ── BACKGROUND BLOBS ──
export default function Blobs() {
  return (
    <>
      {/* top-left: deep navy blue */}
      <div style={{
        position: "fixed", borderRadius: "50%", filter: "blur(140px)", opacity: 0.22,
        pointerEvents: "none", zIndex: 0,
        width: 700, height: 700,
        background: "#1a2744",
        top: -250, left: -200,
        animation: "drift 20s ease-in-out infinite alternate",
      }} />
      {/* bottom-right: very dark indigo */}
      <div style={{
        position: "fixed", borderRadius: "50%", filter: "blur(130px)", opacity: 0.18,
        pointerEvents: "none", zIndex: 0,
        width: 500, height: 500,
        background: "#1e1b3a",
        bottom: -100, right: -100,
        animation: "drift 24s ease-in-out infinite alternate",
        animationDelay: "-8s",
      }} />
      {/* center: near-black teal tint */}
      <div style={{
        position: "fixed", borderRadius: "50%", filter: "blur(160px)", opacity: 0.12,
        pointerEvents: "none", zIndex: 0,
        width: 400, height: 400,
        background: "#0d2233",
        top: "45%", left: "45%",
        transform: "translate(-50%,-50%)",
        animation: "drift 16s ease-in-out infinite alternate",
        animationDelay: "-14s",
      }} />
    </>
  );
}