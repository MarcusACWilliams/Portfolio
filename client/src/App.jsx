import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Set year in footer
    // The Footer component will handle this
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      
      <Hero />
      
      <main id="main-content">
        <Summary />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
}

export default App;
