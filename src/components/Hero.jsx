import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Brain } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(27,27,35,0.2),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
              <Brain className="w-3.5 h-3.5" /> AI Engineer • Generative Systems • MLOps
            </span>
            <h1 className="mt-5 text-4xl sm:text-6xl font-semibold tracking-tight leading-tight">
              Building intelligent products that ship
            </h1>
            <p className="mt-4 text-white/70 max-w-xl">
              I design, train, and deploy end-to-end AI systems: from fast prototypes to production-grade LLM and vision pipelines. I care about real-world impact, clean abstractions, and delightful UX.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-400 transition-colors"
              >
                <Rocket className="w-4 h-4" /> View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-neutral-950 to-transparent" />
    </div>
  );
}
