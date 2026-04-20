"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
export default function HelloBlog() {
  return (
    <main className="min-h-screen bg-[#000] pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-muted">
        <Link href="/" className="inline-flex text-brand hover:text-white mb-12"><ArrowLeft className="w-5 h-5 mr-2" /> Back</Link>
        <AnimatedElement>
          <h1 className="text-4xl text-white font-bold mb-6">Building Double-Entry Accounting in SQL</h1>
          <p>Accounting code cannot fail. A single missing decimal due to floating-point drift can corrupt a ledger. In building the Hello Creative IT ERP, all financial tables were designed using strictly `DECIMAL(15,2)` types—never `FLOAT`.</p>
          <p>Every transaction record automatically spins up two ledger entries (Credit and Debit) bound inside a monolithic database transaction. If the summation of the dual-entry doesn't equal zero, the database rolls back instantly. Strict backend discipline makes it impossible to mutate the financial state improperly.</p>
        </AnimatedElement>
      </div>
    </main>
  );
}
