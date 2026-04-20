"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import { AnimatedElement } from "@/components/ui/AnimatedElement";

export default function Blog1MUsers() {
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
            <span className="text-white/40 text-sm font-medium">Read time: 4 mins</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 mb-6 leading-tight">
            How I Handled 1M Users on Laravel using SQL Server
          </h1>
          <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-8">
            <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center font-bold text-xl text-white">RA</div>
            <div>
              <div className="font-bold text-white tracking-wide">Reyyan Alam</div>
              <div className="text-sm text-muted">Backend Engineer @ PomPak Project</div>
            </div>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={0.1} className="prose prose-invert prose-lg max-w-none prose-p:text-muted prose-headings:text-white prose-a:text-brand prose-strong:text-white">
          <p>
            When you're building a B2G (Business to Government) educational platform endorsed by the State Bank of Pakistan, failure is not an option. You cannot afford an error screen when entire districts of students log into the portal simultaneously at 9:00 AM on a Monday. 
          </p>

          <p>
            During my time as a Full Stack Engineer at Seven Koncepts, we hit exactly this scaling challenge with <strong>PomPak</strong>, a financial literacy application that quickly accrued over 1 million users and 750,000 active students. The stack? <strong>Laravel/PHP running against SQL Server</strong>.
          </p>

          <h3>The ORM Bottleneck</h3>
          <p>
            Initially, the platform leaned heavily on Laravel's Eloquent ORM. For standard CRUD operations covering single users, Eloquent is incredible. But when generating complex state-wide analytics, grading millions of exam attempts, and tracking multi-tenant organization access... Eloquent started showing its limits. 
          </p>
          <p>
            We noticed query execution times drifting into the multi-second territory during peak <code>N+1</code> query traps. Wait logic and transaction limits started rejecting new student signups.
          </p>

          <h3>The Fix: Moving Logic to the Database</h3>
          <p>
            Instead of trying to scale the EC2 instances endlessly (which raises the burn rate significantly), we looked downward: at the database. I initiated a refactor to move heavy aggregation logic entirely out of the PHP memory lifecycle and directly into <strong>SQL Server Stored Procedures</strong>.
          </p>
          
          <pre className="bg-[#111] p-4 rounded-lg border border-white/10 overflow-x-auto text-sm text-[#ffaa00] my-8">
            <code>
{`-- A conceptual example of shifting computation to SQL
CREATE PROCEDURE CalculateDistrictGrades
    @DistrictID INT
AS
BEGIN
    SET NOCOUNT ON;
    
    -- Heavy JOINs run infinitely faster in the SQL engine 
    -- rather than instantiating 10,000 Eloquent objects in memory
    SELECT s.SchoolName, AVG(e.Score) as DistrictAverage
    FROM Students s
    INNER JOIN Exams e ON s.StudentID = e.StudentID
    WHERE s.DistrictID = @DistrictID
    GROUP BY s.SchoolName;
END`}
            </code>
          </pre>

          <p>
            By executing these procedures asynchronously via Laravel, we eliminated the catastrophic PHP memory allocations. What used to be a 4-second API response dropping a payload of JSON data became a <strong>50ms</strong> execution cycle on the database layer.
          </p>

          <h3>Docker and Caching Completes the Flow</h3>
          <p>
            Combining the raw speed of SQL Stored Procedures with a Redis caching layer for read-heavy routes, Laravel was finally free to do what it does best: routing and auth. We dockerized the API nodes so AWS could spin up horizontal stateless copies to handle pure traffic volume.
          </p>
          <p>
            The lesson? An ORM is a tool, not a religion. When you hit a million users, knowing how to write pure SQL and architecting directly on engine primitives is the difference between a system crash and a promotion.
          </p>
        </AnimatedElement>
        
      </div>
    </main>
  );
}
