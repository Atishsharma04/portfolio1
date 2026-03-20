// import { T } from "../utils/tokens";
// import { Btn } from "./UI";
// import ProfileCard from "./profilecard";

// // ── HERO ──
// export default function Hero() {
//   return (
//     <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 80, position: "relative", zIndex: 1 }}>
//       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", width: "100%" }}>
//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="hero-grid">
//           <div>
//             {/* Badge */}
//             <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontFamily: "'Space Mono',monospace", fontSize: "0.75rem", color: T.accent, background: "rgba(99,179,237,0.08)", border: "1px solid rgba(99,179,237,0.25)", borderRadius: 100, padding: "0.38rem 1rem", marginBottom: "1.5rem", animation: "fadeUp 0.6s ease both" }}>
//               <span style={{ width: 7, height: 7, background: T.accent3, borderRadius: "50%", animation: "blink 2s infinite" }} />
//               B.Tech CSE (AI & ML)
//             </div>

//             {/* Heading */}
//             <h1 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(2.8rem,5.5vw,4.8rem)", lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "0.85rem", animation: "fadeUp 0.6s 0.1s ease both", animationFillMode: "both" }}>
//               <span style={{ display: "block", fontSize: "clamp(0.95rem,1.5vw,1.1rem)", fontWeight: 500, color: T.muted, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "0.5rem", fontFamily: "'Space Mono',monospace" }}>Hello, I'm</span>
//               <span style={{ color: "#ffffff" }}>Atish</span>{" "}Sharma
//             </h1>

//             {/* Subtitle */}
//             <p style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(1rem,2vw,1.35rem)", fontWeight: 600, color: T.muted, marginBottom: "1.1rem", animation: "fadeUp 0.6s 0.2s ease both", animationFillMode: "both" }}>
//               AI / ML · Full Stack Developer
//             </p>

//             {/* Description */}
//             <p style={{ fontSize: "0.97rem", color: T.muted, maxWidth: 470, marginBottom: "2.2rem", lineHeight: 1.75, animation: "fadeUp 0.6s 0.3s ease both", animationFillMode: "both" }}>
//               CS student with hands-on experience building secure, scalable applications. Passionate about Python, web development, ML, and peer-to-peer systems — seeking internships to contribute to real-world solutions.
//             </p>

//             {/* CTA */}
//             <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap", animation: "fadeUp 0.6s 0.4s ease both", animationFillMode: "both" }}>
//               <Btn href="#projects" primary>View Projects →</Btn>
//             </div>
//           </div>

//           {/* Profile Card */}
//           <div style={{ display: "flex", justifyContent: "center", alignItems: "center", animation: "fadeUp 0.8s 0.3s ease both", animationFillMode: "both" }}>
//             <ProfileCard />
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @media (max-width: 900px) {
//           .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
//           .hero-grid > div:last-child { order: -1; }
//         }
//         @media (max-width: 480px) {
//           .hero-grid { gap: 2rem !important; }
//         }
//       `}</style>
//     </section>
//   );
// }



import { T } from "../utils/tokens";
import { Btn } from "./UI";
import ProfileCard from "./profilecard";

// ── HERO ──
export default function Hero() {
  return (
    <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 80, position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.25rem", width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="hero-grid">
          <div>
            {/* Badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontFamily: "'Space Mono',monospace", fontSize: "0.75rem", color: T.accent, background: "rgba(99,179,237,0.08)", border: "1px solid rgba(99,179,237,0.25)", borderRadius: 100, padding: "0.38rem 1rem", marginBottom: "1.5rem", animation: "fadeUp 0.6s ease both" }}>
              <span style={{ width: 7, height: 7, background: T.accent3, borderRadius: "50%", animation: "blink 2s infinite" }} />
              B.Tech CSE (AI & ML) · HPTU, Hamirpur
            </div>

            {/* Heading */}
            <h1 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(2.8rem,5.5vw,4.8rem)", lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "0.85rem", animation: "fadeUp 0.6s 0.1s ease both", animationFillMode: "both" }}>
              <span style={{ display: "block", fontSize: "clamp(0.95rem,1.5vw,1.1rem)", fontWeight: 500, color: T.muted, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "0.5rem", fontFamily: "'Space Mono',monospace" }}>Hello, I'm</span>
              <span style={{ color: "#ffffff" }}>Atish</span>{" "}Sharma
            </h1>

            {/* Subtitle */}
            <p style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(1rem,2vw,1.35rem)", fontWeight: 600, color: T.muted, marginBottom: "1.1rem", animation: "fadeUp 0.6s 0.2s ease both", animationFillMode: "both" }}>
              AI / ML · Full Stack · Security Enthusiast
            </p>

            {/* Description */}
            <p style={{ fontSize: "0.97rem", color: T.muted, maxWidth: 470, marginBottom: "2.2rem", lineHeight: 1.75, animation: "fadeUp 0.6s 0.3s ease both", animationFillMode: "both" }}>
              CS student with hands-on experience building secure, scalable applications. Passionate about Python, web development, ML, and peer-to-peer systems — seeking internships to contribute to real-world solutions.
            </p>

            {/* CTA */}
            <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap", animation: "fadeUp 0.6s 0.4s ease both", animationFillMode: "both" }}>
              <Btn href="#projects" primary>View Projects →</Btn>
            </div>
          </div>

          {/* Profile Card */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", animation: "fadeUp 0.8s 0.3s ease both", animationFillMode: "both" }}>
            <ProfileCard />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-grid > div:last-child { order: -1; }
        }
        @media (max-width: 480px) {
          .hero-grid { gap: 2rem !important; }
          #hero { padding-top: 70px !important; }
          #hero p { font-size: 0.88rem !important; }
        }
      `}</style>
    </section>
  );
}