// import { useState } from "react";
// import { T } from "../utils/tokens";
// import { SectionTag, SectionTitle } from "./UI";

// function ContactItem({ icon, label, value, href }) {
//   const [hov, setHov] = useState(false);
//   return (
//     <a href={href}
//       style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem 1.2rem", background: "rgba(13,16,23,0.8)", border: `1px solid ${hov ? "rgba(99,179,237,0.3)" : T.border}`, borderRadius: 12, textDecoration: "none", transition: "all 0.3s", transform: hov ? "translateX(5px)" : "none" }}
//       onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
//       <div style={{ width: 40, height: 40, background: "rgba(99,179,237,0.1)", border: "1px solid rgba(99,179,237,0.2)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.05rem", flexShrink: 0 }}>{icon}</div>
//       <div>
//         <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.68rem", color: T.muted, textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</div>
//         <div style={{ fontSize: "0.88rem", color: T.text, marginTop: 2 }}>{value}</div>
//       </div>
//     </a>
//   );
// }

// // ── CONTACT ──
// export default function Contact() {
//   const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
//   const [sent, setSent] = useState(false);

//   const handle = (e) => {
//     e.preventDefault();
//     setSent(true);
//     setForm({ name: "", email: "", subject: "", message: "" });
//     setTimeout(() => setSent(false), 3500);
//   };

//   const inputStyle = {
//     background: "rgba(13,16,23,0.8)", border: `1px solid ${T.border}`,
//     borderRadius: 10, padding: "0.82rem 1rem", color: T.text,
//     fontFamily: "'DM Sans',sans-serif", fontSize: "0.9rem", outline: "none",
//     transition: "all 0.25s", width: "100%",
//   };

//   const contactItems = [
//     { icon: "✉", label: "Email",    value: "atisharma112004@gmail.com",   href: "mailto:atisharma112004@gmail.com" },
//     { icon: "in", label: "LinkedIn", value: "linkedin.com/in/atishsharma", href: "#" },
//     { icon: "⌥", label: "GitHub",   value: "github.com/Atishsharma04",    href: "https://github.com/Atishsharma04" },
//   ];

//   return (
//     <section id="contact" style={{ padding: "6rem 0", background: T.surface, position: "relative", zIndex: 1 }}>
//       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }} className="contact-grid">

//           {/* Left info */}
//           <div className="reveal">
//             <SectionTag>Get In Touch</SectionTag>
//             <SectionTitle>Let's Build<br />Something Together</SectionTitle>
//             <p style={{ color: T.muted, marginBottom: "2.2rem", lineHeight: 1.75, fontSize: "0.95rem" }}>
//               Whether it's a collaborative project, internship opportunity, research idea, or just a chat about AI — I'm always open to connecting.
//             </p>
//             <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
//               {contactItems.map(it => <ContactItem key={it.label} {...it} />)}
//             </div>
//           </div>

//           {/* Right form */}
//           <div className="reveal">
//             <form onSubmit={handle} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
//               {[
//                 { label: "YOUR NAME",     key: "name",    type: "text",  placeholder: "Rahul Kumar",                        required: true },
//                 { label: "EMAIL ADDRESS", key: "email",   type: "email", placeholder: "rahul@example.com",                  required: true },
//                 { label: "SUBJECT",       key: "subject", type: "text",  placeholder: "Collaboration / Internship / Project",required: false },
//               ].map(f => (
//                 <div key={f.key} style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
//                   <label style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.72rem", color: T.muted, letterSpacing: "0.06em" }}>{f.label}</label>
//                   <input type={f.type} placeholder={f.placeholder} value={form[f.key]} required={f.required}
//                     onChange={e => setForm({ ...form, [f.key]: e.target.value })}
//                     style={inputStyle}
//                     onFocus={e => { e.target.style.borderColor = "rgba(99,179,237,0.5)"; e.target.style.boxShadow = "0 0 0 3px rgba(99,179,237,0.08)"; }}
//                     onBlur={e =>  { e.target.style.borderColor = T.border; e.target.style.boxShadow = "none"; }}
//                   />
//                 </div>
//               ))}
//               <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
//                 <label style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.72rem", color: T.muted, letterSpacing: "0.06em" }}>MESSAGE</label>
//                 <textarea placeholder="Tell me about your idea or opportunity..." value={form.message}
//                   onChange={e => setForm({ ...form, message: e.target.value })}
//                   style={{ ...inputStyle, minHeight: 120, resize: "none" }}
//                   onFocus={e => { e.target.style.borderColor = "rgba(99,179,237,0.5)"; e.target.style.boxShadow = "0 0 0 3px rgba(99,179,237,0.08)"; }}
//                   onBlur={e =>  { e.target.style.borderColor = T.border; e.target.style.boxShadow = "none"; }}
//                 />
//               </div>
//               <button type="submit"
//                 style={{ background: sent ? T.accent3 : T.accent, color: T.bg, border: "none", borderRadius: 100, padding: "0.82rem 2rem", fontFamily: "'DM Sans',sans-serif", fontSize: "0.9rem", fontWeight: 600, cursor: "pointer", transition: "all 0.25s", alignSelf: "flex-start" }}
//                 onMouseEnter={e => { if (!sent) { e.target.style.background = "#90cdf4"; e.target.style.transform = "translateY(-2px)"; }}}
//                 onMouseLeave={e => { if (!sent) { e.target.style.background = T.accent;  e.target.style.transform = "none"; }}}>
//                 {sent ? "Sent! ✓" : "Send Message →"}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//       <style>{`@media(max-width:900px){.contact-grid{grid-template-columns:1fr !important;gap:3rem !important;}}`}</style>
//     </section>
//   );
// }


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
      <div style={{ maxWidth: 600, margin: "0 auto", padding: "0 2rem" }}>
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