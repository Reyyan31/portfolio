"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
export default function SLSTechBlog() {
  return (
    <main className="min-h-screen bg-[#000] pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-muted">
        <Link href="/" className="inline-flex text-brand hover:text-white mb-12"><ArrowLeft className="w-5 h-5 mr-2" /> Back</Link>
        <AnimatedElement>
          <h1 className="text-4xl text-white font-bold mb-6">Automating Mass ERP Audits in Laravel</h1>
          <p>Generating PDFs for 12,000 students at the end of the month instantly hits the memory limit of standard PHP processes. Instead of synchronously executing DOMpdf, I utilized Laravel Queues alongside Supervisor to dispatch the PDF compilation to background workers.</p>
          <p>By chunking queries into manageable sets of 500, we prevented memory exhaustion and guaranteed safe generation within the background pipeline, ensuring accountants could download zip files of perfectly formatted financial audits without server crashes.</p>
        </AnimatedElement>
      </div>
    </main>
  );
}
