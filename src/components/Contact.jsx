import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    setStatus(`Thanks${name ? `, ${name}` : ''}! Your message is on its way.`);
    e.currentTarget.reset();
    setTimeout(() => setStatus(''), 4000);
  }

  return (
    <div className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Let’s collaborate</h2>
          <p className="mt-3 text-white/60">Have a product idea, research challenge, or scaling need? I’d love to help.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={onSubmit} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/70">Name</label>
                  <input
                    name="name"
                    type="text"
                    className="mt-1 w-full rounded-md bg-neutral-900/60 border border-white/10 px-3 py-2 outline-none focus:ring-2 ring-indigo-500/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/70">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="mt-1 w-full rounded-md bg-neutral-900/60 border border-white/10 px-3 py-2 outline-none focus:ring-2 ring-indigo-500/50"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm text-white/70">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="mt-1 w-full rounded-md bg-neutral-900/60 border border-white/10 px-3 py-2 outline-none focus:ring-2 ring-indigo-500/50"
                  placeholder="Tell me about your project or idea..."
                />
              </div>
              <div className="mt-6 flex items-center justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-400 transition-colors"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
                {status && <p className="text-sm text-white/70">{status}</p>}
              </div>
            </form>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-medium">Expertise</h3>
              <ul className="mt-3 text-sm text-white/70 space-y-2 list-disc list-inside">
                <li>LLM product engineering and prompt systems</li>
                <li>Retrieval, agents, and evaluation</li>
                <li>GPU inference, optimization, and MLOps</li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-medium">Availability</h3>
              <p className="mt-2 text-sm text-white/70">Open to consulting and full-time roles. Remote-first, SF/NY/LDN friendly.</p>
            </div>
          </div>
        </div>

        <footer className="mt-16 border-t border-white/10 pt-6 text-sm text-white/60">
          © {new Date().getFullYear()} Aiden Clarke. Built with React, Tailwind, and Spline.
        </footer>
      </div>
    </div>
  );
}
