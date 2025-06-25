import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectsTimeline from "./components/ProjectsTimeline";
import About from "./components/About";
import SkillsTimeline from "./components/SkillsTimeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StickyButtons from "./components/StickyButtons";

function App() {
  const heroRef = useRef(null);

  return (
    <>
      <Navbar heroRef={heroRef} />
      <Hero heroRef={heroRef} />
      <main>
        <ProjectsTimeline />
        <About />
        <SkillsTimeline />
        <Contact />
      </main>
      <Footer />
      <StickyButtons heroRef={heroRef} />
    </>
  );
}

export default App;