// import { useState } from "react";
// import { T, grad } from "../utils/tokens";
// import { SectionTag, SectionTitle } from "./UI";

// const steps = [
//   { num: "01", title: "Understand the problem", desc: "Deep-dive into the domain, define clear objectives and success metrics." },
//   { num: "02", title: "Explore & prepare data", desc: "Thorough EDA, cleaning, and feature engineering for quality inputs." },
//   { num: "03", title: "Build & iterate models", desc: "Experiment, evaluate, tune, and select the optimal approach." },
//   { num: "04", title: "Deploy & monitor", desc: "Robust deployment with performance monitoring and continuous improvement." },
// ];

// function Step({ num, title, desc }) {
//   const [hov, setHov] = useState(false);
//   return (
//     <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", background: "rgba(13,16,23,0.8)", border: `1px solid ${hov ? "rgba(99,179,237,0.3)" : T.border}`, borderRadius: 12, padding: "1.05rem 1.2rem", transition: "all 0.3s", transform: hov ? "translateX(5px)" : "none" }}
//       onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
//       <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.7rem", color: T.accent, background: "rgba(99,179,237,0.1)", border: "1px solid rgba(99,179,237,0.2)", borderRadius: 8, padding: "0.22rem 0.5rem", flexShrink: 0 }}>{num}</span>
//       <div>
//         <div style={{ fontWeight: 600, fontSize: "0.9rem", marginBottom: "0.15rem" }}>{title}</div>
//         <div style={{ fontSize: "0.85rem", color: T.muted }}>{desc}</div>
//       </div>
//     </div>
//   );
// }

// // ── ABOUT ──
// export default function About() {
//   return (
//     <section id="about" style={{ padding: "6rem 0", position: "relative", zIndex: 1 }}>
//       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="about-grid">
//           <div className="reveal">
//             <SectionTag>About Me</SectionTag>
//             <SectionTitle>Turning Data<br />Into Intelligence</SectionTitle>
//             <p style={{ color: T.muted, marginBottom: "1rem", lineHeight: 1.75, fontSize: "0.95rem" }}>
//               I'm a B.Tech Computer Science student (AI & ML) at JNGEC. I'm passionate about building secure, scalable applications and leveraging Python, web technologies, and ML to solve real-world problems.
//             </p>
//             <p style={{ color: T.muted, lineHeight: 1.75, fontSize: "0.95rem" }}>
//               My interests span Machine Learning, System Design, Network Security, and Peer-to-Peer Systems. I thrive at the intersection of software engineering and AI, bringing strong teamwork, problem-solving, and self-motivation to every project.
//             </p>
//             <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "0.85rem", marginTop: "2.2rem" }}>
//               {[{ num: "AI/ML", label: "Specialization" }, { num: "3+", label: "Projects Built" }, { num: "2027", label: "Graduating" }].map(s => (
//                 <div key={s.label} style={{ background: "rgba(13,16,23,0.8)", border: `1px solid ${T.border}`, borderRadius: 12, padding: "1.1rem", textAlign: "center" }}>
//                   <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "1.6rem", background: grad(), WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.num}</div>
//                   <div style={{ fontSize: "0.72rem", color: T.muted, marginTop: "0.2rem" }}>{s.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="reveal">
//             <p style={{ color: T.muted, marginBottom: "1rem", fontSize: "0.9rem" }}>My approach to every problem:</p>
//             <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
//               {steps.map(s => <Step key={s.num} {...s} />)}
//             </div>
//           </div>
//         </div>
//       </div>
//       <style>{`@media(max-width:900px){.about-grid{grid-template-columns:1fr !important;gap:3rem !important;}}`}</style>
//     </section>
//   );
// }



//--------------
import { useState } from "react";
import { T, grad } from "../utils/tokens";
import { SectionTag, SectionTitle } from "./UI";

const steps = [
  { num: "01", title: "Understand the problem", desc: "Deep-dive into the domain, define clear objectives and success metrics." },
  { num: "02", title: "Explore & prepare data", desc: "Thorough EDA, cleaning, and feature engineering for quality inputs." },
  { num: "03", title: "Build & iterate models", desc: "Experiment, evaluate, tune, and select the optimal approach." },
  { num: "04", title: "Deploy & monitor", desc: "Robust deployment with performance monitoring and continuous improvement." },
];

function Step({ num, title, desc }) {
  const [hov, setHov] = useState(false);
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", background: "rgba(13,16,23,0.8)", border: `1px solid ${hov ? "rgba(99,179,237,0.3)" : T.border}`, borderRadius: 12, padding: "1.05rem 1.2rem", transition: "all 0.3s", transform: hov ? "translateX(5px)" : "none" }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.7rem", color: T.accent, background: "rgba(99,179,237,0.1)", border: "1px solid rgba(99,179,237,0.2)", borderRadius: 8, padding: "0.22rem 0.5rem", flexShrink: 0 }}>{num}</span>
      <div>
        <div style={{ fontWeight: 600, fontSize: "0.9rem", marginBottom: "0.15rem" }}>{title}</div>
        <div style={{ fontSize: "0.85rem", color: T.muted }}>{desc}</div>
      </div>
    </div>
  );
}

// ── ABOUT ──
export default function About() {
  return (
    <section id="about" style={{ padding: "6rem 0", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.25rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="about-grid">
          <div className="reveal">
            <SectionTag>About Me</SectionTag>
            <SectionTitle>Turning Data<br />Into Intelligence</SectionTitle>
            <p style={{ color: T.muted, marginBottom: "1rem", lineHeight: 1.75, fontSize: "0.92rem", wordBreak: "break-word" }}>
              I'm a B.Tech Computer Science student (AI & ML) at Himachal Pradesh Technical University, Hamirpur. I'm passionate about building secure, scalable applications and leveraging Python, web technologies, and ML to solve real-world problems.
            </p>
            <p style={{ color: T.muted, lineHeight: 1.75, fontSize: "0.92rem", wordBreak: "break-word" }}>
              My interests span Machine Learning, System Design, Network Security, and Peer-to-Peer Systems. I thrive at the intersection of software engineering and AI, bringing strong teamwork, problem-solving, and self-motivation to every project.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "0.65rem", marginTop: "2.2rem" }}>
              {[{ num: "AI/ML", label: "Specialization" }, { num: "3+", label: "Projects Built" }, { num: "2027", label: "Graduating" }].map(s => (
                <div key={s.label} style={{ background: "rgba(13,16,23,0.8)", border: `1px solid ${T.border}`, borderRadius: 12, padding: "0.9rem 0.5rem", textAlign: "center", minWidth: 0 }}>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(1rem,3vw,1.6rem)", background: grad(), WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.num}</div>
                  <div style={{ fontSize: "0.65rem", color: T.muted, marginTop: "0.2rem" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal">
            <p style={{ color: T.muted, marginBottom: "1rem", fontSize: "0.9rem" }}>My approach to every problem:</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {steps.map(s => <Step key={s.num} {...s} />)}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:900px){
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
        @media(max-width:480px){
          #about { padding: 4rem 0 !important; }
        }
      `}</style>
    </section>
  );
}