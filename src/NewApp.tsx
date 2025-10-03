import ReactFullpage from "@fullpage/react-fullpage";
import { motion } from "framer-motion";
import Hero from "./components/new/Hero";
import About from "./components/new/About";
import Projects from "./components/new/Projects";
import { BrowserRouter } from "react-router-dom";
import Skills from "./components/new/Skils";
import "../src/styles/index.css";
import Contact from "./components/new/Contact";
function NewApp() {
  return (
    <BrowserRouter>
      <ReactFullpage
        credits={{ enabled: false, label: "" }}
        licenseKey={""}
        scrollingSpeed={1000}
        render={({ fullpageApi }: any) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section w-screen h-screen">
                <Hero />
              </div>
              <div className="section">
                <About />
              </div>
              <div className="section">
                <Projects />
              </div>
              <div className="section">
                <Skills />
              </div>
              <div className="section">
                <Contact />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </BrowserRouter>
  );
}

function Section({ children, bg }: { children: React.ReactNode; bg: string }) {
  return (
    <section
      className={`h-screen snap-start flex items-center justify-center ${bg}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
      >
        {children}
      </motion.div>
    </section>
  );
}

export default NewApp;
