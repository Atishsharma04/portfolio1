import { useState } from "react";
import { T } from "../utils/tokens";
import { Pill, SectionTag, SectionTitle } from "./UI";

const projects = [
  {
    emoji: "🔒", type: "P2P / Security", status: "Completed", statusColor: T.accent3,
    title: "Peer-to-Peer Messaging App",
    desc: "Secure messaging app with RSA encryption for private communication, peer discovery over local network using mDNS, and a built-in file sharing system with in-app preview support.",
    stack: [["Python","accent"],["Flutter","purple"],["React","green"],["RSA","default"]],
    grad: "rgba(99,179,237,0.12), rgba(159,122,234,0.12)",
    github: "https://github.com/Atishsharma04",
  },
  {
    emoji: "🚫", type: "Machine Learning", status: "Completed", statusColor: T.accent3,
    title: "Spam Detection Application",
    desc: "ML-powered spam detection system that classifies messages and emails with high accuracy using natural language processing and classification algorithms.",
    stack: [["Python","accent"],["scikit-learn","purple"],["NLP","green"]],
    grad: "rgba(104,211,145,0.12), rgba(99,179,237,0.12)",
    github: "https://github.com/Atishsharma04",
  },
  {
    emoji: "🎙️", type: "AI / NLP", status: "In Progress", statusColor: T.accent2,
    title: "Emotion-Aware Multilingual Voice Translator",
    desc: "An AI-powered voice translator that detects the speaker's emotion and preserves it across multilingual translations in real time.",
    stack: [["Python","accent"],["FastAPI","purple"],["NLP","green"]],
    grad: "rgba(159,122,234,0.12), rgba(104,211,145,0.12)",
    github: "https://github.com/Atishsharma04",
  },
];

function ProjectCard({ emoji, type, status, statusColor, title, desc, stack, grad: g, github }) {
  const [hov, setHov] = useState(false);
  return (
    <div className="reveal" style={{ background: "rgba(13,16,23,0.8)", border: `1px solid ${hov ? "rgba(99,179,237,0.3)" : T.border}`, borderRadius: 20, overflow: "hidden", transition: "all 0.3s", transform: hov ? "translateY(-6px)" : "none", boxShadow: hov ? "0 20px 60px rgba(0,0,0,0.45)" : "none", display: "flex", flexDirection: "column" }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <div style={{ height: 130, background: `linear-gradient(135deg, ${g})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.8rem", position: "relative" }}>
        {emoji}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent, rgba(13,16,23,0.8))" }} />
      </div>
      <div style={{ padding: "1.4rem", flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.7rem" }}>
          <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.66rem", color: T.accent, textTransform: "uppercase", letterSpacing: "0.1em" }}>{type}</span>
          <span style={{ fontSize: "0.68rem", padding: "0.18rem 0.6rem", borderRadius: 100, border: `1px solid ${statusColor}44`, color: statusColor, background: `${statusColor}12` }}>{status}</span>
        </div>
        <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.55rem" }}>{title}</div>
        <p style={{ fontSize: "0.855rem", color: T.muted, flex: 1, marginBottom: "1.1rem", lineHeight: 1.65 }}>{desc}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.1rem" }}>
          {stack.map(([label, color]) => <Pill key={label} color={color}>{label}</Pill>)}
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <a href={github} target="_blank" rel="noreferrer"
            style={{ fontSize: "0.8rem", color: T.muted, textDecoration: "none", display: "flex", alignItems: "center", gap: "0.3rem", transition: "color 0.2s" }}
            onMouseEnter={e => e.target.style.color = T.accent}
            onMouseLeave={e => e.target.style.color = T.muted}>
            ⬡ GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

// ── PROJECTS ──
export default function Projects() {
  return (
    <section id="projects" style={{ padding: "6rem 0", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
        <div className="reveal" style={{ marginBottom: "3rem" }}>
          <SectionTag>Work</SectionTag>
          <SectionTitle>Projects</SectionTitle>
          <p style={{ color: T.muted, maxWidth: 500 }}>A selection of projects that showcase my engineering and research capabilities.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "1.4rem" }}>
          {projects.map(p => <ProjectCard key={p.title} {...p} />)}
        </div>
      </div>
    </section>
  );
}