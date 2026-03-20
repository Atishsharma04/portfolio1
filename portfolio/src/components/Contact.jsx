// import { useState } from "react";
// import { T } from "../utils/tokens";
// import { SectionTag, SectionTitle } from "./UI";
 
// function ContactItem({ icon, label, value, href }) {
//   const [hov, setHov] = useState(false);
//   return (
//     <a href={href} target="_blank" rel="noreferrer"
//       style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1.1rem 1.4rem", background: "rgba(13,16,23,0.8)", border: `1px solid ${hov ? "rgba(99,179,237,0.3)" : T.border}`, borderRadius: 14, textDecoration: "none", transition: "all 0.3s", transform: hov ? "translateX(6px)" : "none" }}
//       onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
//       <div style={{ width: 44, height: 44, background: "rgba(99,179,237,0.1)", border: "1px solid rgba(99,179,237,0.2)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", flexShrink: 0 }}>{icon}</div>
//       <div>
//         <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.68rem", color: T.muted, textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</div>
//         <div style={{ fontSize: "0.92rem", color: T.text, marginTop: 3 }}>{value}</div>
//       </div>
//       <span style={{ marginLeft: "auto", color: hov ? T.accent : T.muted, fontSize: "1rem", transition: "color 0.22s" }}>↗</span>
//     </a>
//   );
// }
 
// // ── CONTACT ──
// export default function Contact() {
//   const items = [
//     { icon: "✉",  label: "Email",    value: "atisharma112004@gmail.com",   href: "mailto:atisharma112004@gmail.com" },
//     { icon: "in", label: "LinkedIn", value: "linkedin.com/in/atishsharma", href: "https://linkedin.com/in/atishsharma" },
//     { icon: "⌥",  label: "GitHub",   value: "github.com/Atishsharma04",    href: "https://github.com/Atishsharma04" },
//   ];
 
//   return (
//     <section id="contact" style={{ padding: "6rem 0", background: T.surface, position: "relative", zIndex: 1 }}>
//       <div style={{ maxWidth: 600, margin: "0 auto", padding: "0 2rem" }}>
//         <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
//           <SectionTag>Get In Touch</SectionTag>
//           <SectionTitle>Let's Connect</SectionTitle>
//           <p style={{ color: T.muted, lineHeight: 1.75, fontSize: "0.95rem" }}>
//             Open to internships, collaborations, and interesting projects. Feel free to reach out on any platform!
//           </p>
//         </div>
//         <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
//           {items.map(it => <ContactItem key={it.label} {...it} />)}
//         </div>
//       </div>
//     </section>
//   );
// }



//------------------------------------


import { useState } from "react";
import { T } from "../utils/tokens";
import { SectionTag, SectionTitle } from "./UI";

function ContactItem({ icon, label, value, href }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} target="_blank" rel="noreferrer"
      style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1.1rem 1.4rem", background: "rgba(13,16,23,0.8)", border: `1px solid ${hov ? "rgba(99,179,237,0.3)" : T.border}`, borderRadius: 14, textDecoration: "none", transition: "all 0.3s", transform: hov ? "translateX(6px)" : "none" }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <div style={{ width: 44, height: 44, background: "rgba(99,179,237,0.1)", border: "1px solid rgba(99,179,237,0.2)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", flexShrink: 0 }}>{icon}</div>
      <div>
        <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.68rem", color: T.muted, textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</div>
        <div style={{ fontSize: "0.92rem", color: T.text, marginTop: 3 }}>{value}</div>
      </div>
      <span style={{ marginLeft: "auto", color: hov ? T.accent : T.muted, fontSize: "1rem", transition: "color 0.22s" }}>↗</span>
    </a>
  );
}

// ── CONTACT ──
export default function Contact() {
  const items = [
    { icon: "✉",  label: "Email",    value: "atisharma112004@gmail.com",   href: "mailto:atisharma112004@gmail.com" },
    { icon: "in", label: "LinkedIn", value: "linkedin.com/in/atishsharma", href: "https://linkedin.com/in/atishsharma" },
    { icon: "⌥",  label: "GitHub",   value: "github.com/Atishsharma04",    href: "https://github.com/Atishsharma04" },
  ];

  return (
    <section id="contact" style={{ padding: "6rem 0", background: T.surface, position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 600, margin: "0 auto", padding: "0 1.25rem" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
          <SectionTag>Get In Touch</SectionTag>
          <SectionTitle>Let's Connect</SectionTitle>
          <p style={{ color: T.muted, lineHeight: 1.75, fontSize: "0.95rem" }}>
            Open to internships, collaborations, and interesting projects. Feel free to reach out on any platform!
          </p>
        </div>
        <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {items.map(it => <ContactItem key={it.label} {...it} />)}
        </div>
      </div>
    </section>
  );
}