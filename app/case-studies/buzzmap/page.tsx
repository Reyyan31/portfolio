"use client";

import Link from "next/link";
import { ArrowLeft, Server, Database, Shield, Zap, Network, TrendingUp } from "lucide-react";
import { AnimatedElement } from "@/components/ui/AnimatedElement";

export default function BuzzMapCaseStudy() {
  return (
    <main className="min-h-screen bg-[#000] text-foreground pt-32 pb-24 px-6 md:px-12 selection:bg-brand selection:text-white">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-brand hover:text-white transition-colors mb-12 font-semibold">
          <ArrowLeft className="w-5 h-5" />
          Back to Portfolio
        </Link>
        
        <AnimatedElement>
          <div className="flex gap-4 items-center mb-6">
            <span className="px-3 py-1 rounded-full bg-[#ffaa00]/10 border border-[#ffaa00]/30 text-[#ffaa00] text-sm font-bold uppercase tracking-widest">Case Study</span>
            <span className="text-white/40 text-sm font-medium">SaaS / WebSockets</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 mb-8 leading-tight">
            BuzzMap Real-Time API
          </h1>
          <p className="text-xl text-muted leading-relaxed mb-12 font-medium border-l-4 border-brand pl-6">
            Building a sub-50ms live geolocation event stream for the US market. Handling 10,000+ requests per second via Redis pub/sub and Node.js.
          </p>
        </AnimatedElement>

        {/* Global Impact Grid */}
        <AnimatedElement delay={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-start">
            <Zap className="w-6 h-6 text-[#ffaa00] mb-4" />
            <div className="text-3xl font-black text-white mb-1">{"<"}50ms</div>
            <div className="text-sm font-semibold text-white/50 uppercase tracking-wide">Socket Latency</div>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-start">
            <TrendingUp className="w-6 h-6 text-brand mb-4" />
            <div className="text-3xl font-black text-white mb-1">10k+</div>
            <div className="text-sm font-semibold text-white/50 uppercase tracking-wide">Reqs / Second</div>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-start">
            <Network className="w-6 h-6 text-green-500 mb-4" />
            <div className="text-3xl font-black text-white mb-1">99.99%</div>
            <div className="text-sm font-semibold text-white/50 uppercase tracking-wide">Node Uptime</div>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-start">
            <Shield className="w-6 h-6 text-purple-500 mb-4" />
            <div className="text-3xl font-black text-white mb-1">OAuth 2</div>
            <div className="text-sm font-semibold text-white/50 uppercase tracking-wide">Secured Auth</div>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={0.2} className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-white mb-6">The Challenge</h2>
          <p className="text-muted leading-relaxed mb-8">
            Event discovery applications instantly lose their market value if data isn't propagated in true real-time. When building the BuzzMap backend for Nodescale LLC (US), the core challenge was handling highly concurrent geospacial queries without choking the MongoDB primary cluster.
          </p>

          <h2 className="text-3xl font-bold text-white mb-6">The Architecture</h2>
          
          <div className="w-full bg-[#111] border border-white/10 rounded-2xl p-8 mb-8 my-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 blur-[80px] -z-10" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                  <Network className="w-8 h-8 text-blue-400" />
                </div>
                <div className="font-bold text-white">Client Socket.io</div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-[#ffaa00]/10 border border-[#ffaa00]/30 flex items-center justify-center">
                  <Server className="w-8 h-8 text-[#ffaa00]" />
                </div>
                <div className="font-bold text-white">Node.js Gateway</div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                  <Database className="w-8 h-8 text-red-400" />
                </div>
                <div className="font-bold text-white">Redis Pub/Sub</div>
              </div>
            </div>
          </div>

          <p className="text-muted leading-relaxed mb-6">
            The solution involved abstracting the read-layer away from MongoDB entirely using Redis Pub/Sub streams:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-muted mb-12">
            <li><strong>Redis Geospacial Indexes:</strong> Used `GEOADD` and `GEORADIUS` directly in Redis to calculate proximities instantly in-memory rather than relying on heavy Mongo aggregations.</li>
            <li><strong>OAuth 2.0 Standardization:</strong> Built a strict, bulletproof stateless JWT layer matching US security audit standards.</li>
            <li><strong>Async Delivery:</strong> Working fully remotely alongside US-based teams via rigorous PR reviews and CI test pipelines.</li>
          </ul>
        </AnimatedElement>
        
      </div>
    </main>
  );
}
