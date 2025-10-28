import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-indigo-500/30 selection:text-white">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="projects" className="relative z-0">
          <Projects />
        </section>
        <section id="contact" className="relative z-0">
          <Contact />
        </section>
      </main>
    </div>
  );
}
