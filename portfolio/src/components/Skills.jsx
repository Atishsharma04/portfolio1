import { useState } from "react";
import { T } from "../utils/tokens";
import { Pill } from "./UI";

const skillGroups = [
  { title: "💻 Programming Languages", color: "accent",  pills: ["Python", "C++", "JavaScript"] },
  { title: "🛠️ Frameworks & Libraries", color: "purple", pills: ["React.js", "Flutter", "FastAPI", "Scikit-learn", "Pandas", "NumPy"] },
  { title: "🌐 Web & Databases",        color: "green",  pills: ["HTML", "CSS", "Node.js", "Express.js", "MySQL"] },
  { title: "⚙️ Tools & Platforms",      color: "default",pills: ["Git", "GitHub", "VS Code", "Postman"] },
];

function SkillCard({ title, color, pills }) {
  const [hov, setHov] = useState(false);
  return (
    <div className="reveal" style={{ background: "rgba(13,16,23,0.8)", border: `1px solid ${hov ? "rgba(99,179,237,0.3)" : T.border}`, borderRadius: 16, padding: "1.7rem", transition: "all 0.3s", transform: hov ? "translateY(-5px)" : "none" }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "0.98rem", marginBottom: "1.1rem" }}>{title}</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
        {pills.map(p => <Pill key={p} color={color}>{p}</Pill>)}
      </div>
    </div>
  );
}

// ── SKILLS ──
export default function Skills() {
  return (
    <section id="skills" style={{ padding: "6rem 0", background: T.surface, position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.72rem", color: T.accent, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Technical Arsenal</div>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(1.9rem,3.5vw,2.8rem)", letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>Skills</h2>
          <p style={{ color: T.muted, maxWidth: 480, margin: "0 auto" }}>A curated stack of tools, frameworks, and technologies I work with daily.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "1.2rem" }}>
          {skillGroups.map(g => <SkillCard key={g.title} {...g} />)}
        </div>
      </div>
    </section>
  );
}