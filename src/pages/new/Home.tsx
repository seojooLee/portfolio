import React from "react";
import Layout from "../../components/new/Layout";
import Hero from "../../components/new/Hero";
import Projects from "../../components/new/Projects";
import Skills from "../../components/new/Skils";
import About from "../../components/new/About";
import Contact from "../../components/new/Experience";
const Home = () => {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </Layout>
  );
};

export default Home;
