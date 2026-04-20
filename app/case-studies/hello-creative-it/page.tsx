"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
export default function HelloCaseStudy() {
  return (
    <main className="min-h-screen bg-[#000] pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-muted">
        <Link href="/" className="inline-flex text-brand hover:text-white mb-12"><ArrowLeft className="w-5 h-5 mr-2" /> Back</Link>
        <AnimatedElement>
          <h1 className="text-5xl text-white font-bold mb-8">Hello Creative IT ERP</h1>
          <p className="border-l-4 border-brand pl-6 mb-12 text-xl">A complete custom double-entry accounting module, HR suite, and Kanban pipeline built ground-up in PHP/Vue.</p>
          <div className="prose prose-invert max-w-none text-muted">
            <h2>The Challenge</h2>
            <p>Off-the-shelf CRM solutions either lacked localized HR tracking or overcomplicated accounting. The objective was to build an internal tool tightly coupling employee shifts with client billing.</p>
            <h2>The Architecture</h2>
            <p>Utilized a dual-stack monolith connecting Laravel with a dynamic Vue.js frontend powered by Redis session stores. Engineered a strictly atomic double-entry accounting database structure.</p>
          </div>
        </AnimatedElement>
      </div>
    </main>
  );
}
