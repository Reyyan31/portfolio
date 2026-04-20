"use client";
import Link from "next/link";
import { ArrowLeft, Server, Database, Shield, Zap, TrendingUp, BookOpen } from "lucide-react";
import { AnimatedElement } from "@/components/ui/AnimatedElement";

export default function SLSCaseStudy() {
  return (
    <main className="min-h-screen bg-[#000] text-foreground pt-32 pb-24 px-6 md:px-12 selection:bg-brand selection:text-white">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-brand hover:text-white transition-colors mb-12 font-semibold">
          <ArrowLeft className="w-5 h-5" /> Back to Portfolio
        </Link>
        <AnimatedElement>
          <h1 className="text-5xl md:text-7xl font-black mb-8">SLS School ERP</h1>
          <p className="text-xl text-muted border-l-4 border-brand pl-6 mb-12">Architecting a unified management portal serving 12,000+ students and powering rigid daily financial audits.</p>
          <div className="prose prose-invert max-w-none text-muted">
            <h2>The Scope</h2>
            <p>Creative IT Park needed a monolithic, hyper-reliable ERP to replace fragmented Excel sheets. The system required 8 distinct role portals (Admins, Accountants, Teachers, Students), and complex state management for fee collection and grading.</p>
            <h2>The Solution</h2>
            <p>Utilized PHP Laravel for robust multi-tenant routing. Implemented extensive Cron Jobs on the Linux layer to automate nightly fee challan generation, cutting manual accountant labor by 95%.</p>
          </div>
        </AnimatedElement>
      </div>
    </main>
  );
}
