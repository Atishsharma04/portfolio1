import { useState } from "react";
import { T, grad } from "../utils/tokens";
import { Pill } from "./UI";

const services = [
  { icon: "🌐", title: "Full Stack Web Development", desc: "Building end-to-end web applications using React.js, Node.js, Express.js, and MySQL with clean, scalable architecture.", tags: ["React.js", "Node.js", "Express.js", "MySQL"] },
  { icon: "🤖", title: "Machine Learning & Data Science", desc: "Developing ML models for real-world problems using scikit-learn, Pandas, and NumPy with thorough data preprocessing.", tags: ["scikit-learn", "Pandas", "NumPy"] },
  { icon: "🔐", title: "Secure Application Development", desc: "Building privacy-first apps with end-to-end encryption, RSA cryptography, and secure peer-to-peer communication protocols.", tags: ["RSA Encryption", "mDNS", "P2P Systems"] },
  { icon: "📱", title: "Cross-Platform App Development", desc: "Crafting mobile and desktop apps with Flutter and FastAPI backends, supporting file sharing and real-time communication features.", tags: ["Flutter", "FastAPI", "Python"] },
];

function ServiceCard({ icon, title, desc, tags }) {
  const [hov, setHov] = useState(false);
  return (
    <div className="reveal" style={{ background: "rgba(13,16,23,0.8)", border: `1px solid ${hov ? "rgba(99,179,237,0.3)" : T.border}`, borderRadius: 16, padding: "1.7rem", transition: "all 0.3s", transform: hov ? "translateY(-5px)" : "none", position: "relative", overflow: "hidden" }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: grad(), transform: `scaleX(${hov ? 1 : 0})`, transition: "transform 0.3s", transformOrigin: "left" }} />
      <div style={{ width: 44, height: 44, background: "rgba(99,179,237,0.1)", border: "1px solid rgba(99,179,237,0.2)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", marginBottom: "1rem" }}>{icon}</div>
      <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1.02rem", marginBottom: "0.5rem" }}>{title}</div>
      <p style={{ fontSize: "0.862rem", color: T.muted, marginBottom: "1.2rem", lineHeight: 1.65 }}>{desc}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
        {tags.map(t => <Pill key={t}>{t}</Pill>)}
      </div>
    </div>
  );
}

// ── SERVICES ──
export default function Services() {
  return (
    <section id="services" style={{ padding: "6rem 0", background: T.surface, position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.72rem", color: T.accent, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.5rem" }}>What I Do</div>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(1.9rem,3.5vw,2.8rem)", letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>Services</h2>
          <p style={{ color: T.muted, maxWidth: 480, margin: "0 auto" }}>Applying cutting-edge AI & ML to solve real-world problems with precision and efficiency.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "1.2rem" }}>
          {services.map(s => <ServiceCard key={s.title} {...s} />)}
        </div>
      </div>
    </section>
  );
}