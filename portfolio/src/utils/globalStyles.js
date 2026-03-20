// ── GLOBAL STYLES ──
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,400&display=swap');
 
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    background: #050810;
    color: #e2e8f0;
    font-family: 'DM Sans', sans-serif;
    overflow-x: hidden;
  }
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
    background-size: 44px 44px;
    pointer-events: none;
    z-index: 0;
  }
  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: #050810; }
  ::-webkit-scrollbar-thumb { background: rgba(99,179,237,0.3); border-radius: 4px; }
 
  @keyframes drift {
    0% { transform: translateY(0) scale(1); }
    100% { transform: translateY(-50px) scale(1.1); }
  }
  @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  @keyframes spinRev { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
  @keyframes nodePulse { 0%,100% { transform: scale(1); opacity:0.7; } 50% { transform: scale(2); opacity:1; } }
  @keyframes blink { 0%,100% { opacity:1; } 50% { opacity:0.2; } }
  @keyframes fadeUp { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
  @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
  @keyframes borderGlow { 0%,100% { box-shadow: 0 0 0 0 rgba(99,179,237,0); } 50% { box-shadow: 0 0 20px 4px rgba(99,179,237,0.15); } }
 
  .reveal { opacity:0; transform:translateY(32px); transition: opacity 0.7s ease, transform 0.7s ease; }
  .reveal.visible { opacity:1; transform:translateY(0); }
`;
 
export default globalStyles;