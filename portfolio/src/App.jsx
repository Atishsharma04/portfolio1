import useReveal from "./utils/useReveal";
import Blobs from "./components/Blobs";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
 
// ── APP ──
export default function App() {
  useReveal();
  return (
    <div style={{ minHeight: "100vh" }}>
      <Blobs />
      <Nav />
      <Hero />
      <Services />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}