import React from 'react';
import { Sparkles, Cpu, Database } from 'lucide-react';

const items = [
  {
    title: 'Realtime RAG Orchestrator',
    icon: Database,
    desc:
      'A production-ready Retrieval Augmented Generation stack with hybrid search, reranking, function calling, and streaming UI. Built with vector DBs and resilient observability.',
    tags: ['RAG', 'LLM', 'Embeddings', 'Observability'],
    link: '#',
  },
  {
    title: 'Multimodal Agentic UI',
    icon: Sparkles,
    desc:
      'An agent that understands images, audio, and text to automate creative workflows. Tool-use via structured prompts and constrained decoding.',
    tags: ['Agents', 'Vision', 'Audio', 'Tool Use'],
    link: '#',
  },
  {
    title: 'Low-latency Model Serving',
    icon: Cpu,
    desc:
      'GPU-optimized inference with batching, quantization, and KV cache management. Sub-100ms P95 for chat and generation workloads at scale.',
    tags: ['Triton', 'vLLM', 'CUDA', 'MLOps'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <div className="relative py-24 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Selected Work</h2>
          <p className="mt-3 text-white/60">A few projects that showcase my approach to product-focused AI engineering.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <a
              key={item.title}
              href={item.link}
              className="group relative rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-5 hover:border-indigo-400/40 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-indigo-500/15 text-indigo-300 p-2.5 ring-1 ring-inset ring-indigo-500/20">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-lg group-hover:text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-white/65 leading-relaxed">{item.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <span key={t} className="text-[11px] px-2 py-1 rounded-md border border-white/10 text-white/70">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
