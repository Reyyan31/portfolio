"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import { AnimatedElement } from "@/components/ui/AnimatedElement";

export default function BlogWebSockets() {
  return (
    <main className="min-h-screen bg-[#000] text-foreground pt-32 pb-24 px-6 md:px-12 selection:bg-brand selection:text-white">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-brand hover:text-white transition-colors mb-12 font-semibold">
          <ArrowLeft className="w-5 h-5" />
          Back to Portfolio
        </Link>
        
        <AnimatedElement>
          <div className="flex gap-4 items-center mb-6">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-500 text-sm font-bold uppercase tracking-widest flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> Technical Blog
            </span>
            <span className="text-white/40 text-sm font-medium">Read time: 3 mins</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 mb-6 leading-tight">
            Scaling WebSockets Streams with Redis Pub/Sub
          </h1>
          <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-8">
            <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center font-bold text-xl text-white">RA</div>
            <div>
              <div className="font-bold text-white tracking-wide">Reyyan Alam</div>
              <div className="text-sm text-muted">Backend Engineer @ Nodescale LLC</div>
            </div>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={0.1} className="prose prose-invert prose-lg max-w-none prose-p:text-muted prose-headings:text-white prose-a:text-brand prose-strong:text-white">
          <p>When you attempt to connect 10,000 concurrent mobile clients to a single Node.js instance tracking geolocation data, a massive memory bottleneck inevitably forms. Socket.io instances cannot indefinitely scale vertically.</p>
          <h3>Enter Redis Pub/Sub</h3>
          <p>By leveraging Redis as a central publisher/subscriber message broker, we were able to run a swarm of stateless Node.js gateways. When an event fires, it doesn't try to loop through every connected client in memory. Instead, it fires to Redis, which then hyper-distributes the payload to the specific Node instances holding the relevant clients.</p>
          <p>This offloaded the connection bottleneck to the infrastructure layer, dropping WebSocket broadcast latency to below 50ms consistently.</p>
        </AnimatedElement>
      </div>
    </main>
  );
}
