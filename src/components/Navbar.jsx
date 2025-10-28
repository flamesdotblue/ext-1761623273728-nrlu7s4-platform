import React from 'react';
import { Github, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-neutral-950/60 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-white text-lg">Aiden Clarke<span className="text-indigo-400">.ai</span></a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#home" className="hover:text-indigo-300 transition-colors">Home</a>
          <a href="#projects" className="hover:text-indigo-300 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-indigo-300 transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="mailto:hello@aiden.ai"
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm hover:bg-white/10 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">Email</span>
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm hover:bg-white/10 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
}
