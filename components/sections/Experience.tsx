"use client";

import { Section } from "@/components/ui/Section";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const experiences = [
  {
    company: "Creative IT Park",
    role: "Backend Developer",
    date: "Jan 2026 – Present",
    impact: "Maintained ≥99% uptime across live systems, standardized deployments, and built full HR/ERP platforms serving 12,000+ users.",
  },
  {
    company: "Nodescale LLC (US)",
    role: "Backend Engineer (Remote)",
    date: "Oct 2025 – Jan 2026",
    impact: "Built a real-time event-discovery production backend (BuzzMap) delivering geolocation APIs to US standards in an async team.",
  },
  {
    company: "Seven Koncepts",
    role: "Full Stack Software Engineer",
    date: "Aug 2025 – Dec 2025",
    impact: "Led backend on a national platform for 1M+ users (PomPak). Containerized services with Docker to AWS EC2/S3.",
  },
  {
    company: "National Testing Service (NTS)",
    role: "Full Stack Developer",
    date: "Jun 2025 – Aug 2025",
    impact: "Improved page load times by 25% for 100,000+ active users. Integrated React with Laravel via JWT/OAuth.",
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Section id="experience">
      <AnimatedElement className="w-full mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Experience</h2>
        <p className="text-muted max-w-2xl text-lg">
          A track record of engineering scalable platforms and leading backend architectures.
        </p>
      </AnimatedElement>

      <div ref={containerRef} className="w-full relative ml-3 md:ml-4 pl-8 space-y-16">
        {/* The Animated Glowing Data Stream Line */}
        <div className="absolute top-0 bottom-0 left-[2px] w-px bg-white/10" />
        <motion.div 
          className="absolute top-0 bottom-0 left-[1px] w-[3px] bg-gradient-to-b from-brand via-brand to-transparent origin-top shadow-[0_0_15px_1px_rgba(59,130,246,0.5)]"
          style={{ scaleY }}
        />

        {experiences.map((exp, index) => (
          <AnimatedElement key={index} delay={0.1} className="relative z-10">
            {/* Timeline DOT glowing depending on index is too complex without local ref, so we make it intrinsically glow */}
            <div className="absolute -left-[40px] top-1.5 h-4 w-4 rounded-full bg-black border-2 border-brand flex items-center justify-center shadow-[0_0_10px_0px_rgba(59,130,246,0.8)] z-20">
              <div className="h-1.5 w-1.5 rounded-full bg-brand" />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-3">
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">{exp.role}</h3>
              <span className="text-brand font-bold text-lg">{exp.company}</span>
              <span className="text-sm font-medium text-muted/60 sm:ml-auto border border-white/5 bg-white/5 py-1 px-3 rounded-full">{exp.date}</span>
            </div>
            
            <p className="text-muted leading-relaxed max-w-3xl text-lg relative group">
              {exp.impact}
            </p>
          </AnimatedElement>
        ))}
      </div>
    </Section>
  );
}
