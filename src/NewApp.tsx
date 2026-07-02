import Hero from "./components/new/Hero";
import About from "./components/new/About";
import Projects from "./components/new/Projects";
import CaseStudies from "./components/new/CaseStudies";
import { BrowserRouter } from "react-router-dom";
import Skills from "./components/new/Skils";
import Nav from "./components/new/Nav";
import "../src/styles/index.css";
import Contact from "./components/new/Experience";
import Finish from "./components/new/Finish";

function NewApp() {
  return (
    <BrowserRouter>
      <Nav />
      <div id="home" className="scroll-mt-16">
        <Hero />
      </div>
      <div id="about" className="scroll-mt-16">
        <About />
      </div>
      <div id="projects" className="scroll-mt-16">
        <Projects />
        <CaseStudies />
      </div>
      <div id="skills" className="scroll-mt-16">
        <Skills />
      </div>
      <div id="contact" className="scroll-mt-16">
        <Contact />
      </div>
      <div>
        <Finish />
      </div>
    </BrowserRouter>
  );
}

export default NewApp;
