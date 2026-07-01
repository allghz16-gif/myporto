import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PipelineRail from "./components/PipelineRail";

export default function App() {
  return (
    <div className="min-h-screen">
      <PipelineRail />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Journey />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
