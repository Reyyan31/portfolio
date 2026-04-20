"use client";

import { useState } from "react";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { ArrowRight, Terminal, FileText, LayoutDashboard, Briefcase } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import Link from "next/link";
import { LiveLogTerminal } from "@/components/ui/LiveLogTerminal";
import { CVModal } from "@/components/ui/CVModal";
import { useRecruiterMode } from "@/components/providers/RecruiterModeProvider";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [isCVOpen, setIsCVOpen] = useState(false);
  const { isRecruiterMode, toggleRecruiterMode } = useRecruiterMode();

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full pt-28">
        {/* Deep, glowing, premium background effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-brand/10 via-[#000] to-[#000] -z-10" />
        <div className={`absolute top-0 right-0 w-[800px] h-[800px] blur-[150px] rounded-full translate-x-1/2 -translate-y-1/3 -z-10 pointer-events-none transition-colors duration-1000 ${isRecruiterMode ? 'bg-[#ffaa00]/10' : 'bg-brand/5'}`} />

        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center justify-center z-10 py-12">
          {/* Left Content Area (7 columns) */}
          <div className="flex flex-col items-start justify-center lg:col-span-7">
            <AnimatedElement delay={0.1} direction="up" className="mb-6 flex flex-col items-start gap-4">
              <button 
                onClick={toggleRecruiterMode}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-bold tracking-wide transition-all shadow-lg ${isRecruiterMode ? 'bg-[#ffaa00]/20 border-[#ffaa00]/50 text-[#ffaa00] shadow-[#ffaa00]/20' : 'bg-white/5 border-white/10 text-white/50 hover:bg-white/10'}`}
              >
                {isRecruiterMode ? <Briefcase className="w-4 h-4" /> : <LayoutDashboard className="w-4 h-4" />}
                {isRecruiterMode ? "Recruiter View: Active" : "Switch to Recruiter View"}
              </button>

              <h1 className="text-7xl md:text-[8rem] lg:text-[10rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40 pb-2 leading-[0.85] uppercase mt-2">
                Reyyan<br />Alam<span className={isRecruiterMode ? "text-[#ffaa00]" : "text-brand"}>.</span>
              </h1>
            </AnimatedElement>

            <AnimatedElement delay={0.2} direction="up" className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight flex items-center gap-4">
                <Terminal className={`w-8 h-8 md:w-10 md:h-10 ${isRecruiterMode ? "text-[#ffaa00]" : "text-brand"}`} />
                Backend Engineer
              </h2>
            </AnimatedElement>

            <AnimatedElement delay={0.3} direction="up" className="max-w-xl mb-10">
              <p className="text-lg md:text-xl text-muted leading-relaxed font-medium">
                {isRecruiterMode ? (
                  <>I architect high-performance data systems. From powering national platforms with <strong className="text-white">1M+ users</strong> to scaling distributed enterprise ERPs. Zero downtime, proven ROI, and excellent cross-timezone async communication.</>
                ) : (
                  <>I architect high-performance data systems. From powering national platforms with <strong className="text-white">1M+ users</strong> to scaling distributed enterprise ERPs. Production grade, zero compromise.</>
                )}
              </p>
            </AnimatedElement>

            <AnimatedElement delay={0.4} direction="up" className="flex flex-col sm:flex-row gap-4 w-full flex-wrap sm:w-auto">
              <Link
                href="#projects"
                className="group px-8 py-4 rounded-full bg-white text-black font-semibold flex items-center justify-center gap-3 hover:bg-neutral-200 transition-colors shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)] hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.6)]"
              >
                Deployments & Impact
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button
                onClick={() => setIsCVOpen(true)}
                className={`group px-8 py-4 rounded-full text-white font-semibold flex items-center justify-center gap-2 transition-colors ${isRecruiterMode ? 'bg-[#ffaa00] hover:bg-[#e69900]' : 'bg-brand hover:bg-blue-600'}`}
              >
                <FileText className="w-5 h-5" />
                View / Download CV
              </button>

              <div className="flex gap-4 items-center pl-2">
                <a
                  href="https://github.com/Reyyan31"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-full bg-neutral-900 border border-neutral-800 text-white hover:bg-neutral-800 hover:border-neutral-700 transition-colors ${isRecruiterMode ? 'hover:text-[#ffaa00]' : 'hover:text-brand'}`}
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/reyyan-alam-a23679363/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-neutral-900 border border-neutral-800 text-white hover:bg-neutral-800 hover:border-neutral-700 hover:text-[#0a66c2] transition-colors"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href="/api/status"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3.5 rounded-full bg-neutral-900 border border-neutral-800 text-white hover:bg-neutral-800 hover:border-neutral-700 hover:text-green-400 transition-colors group font-mono text-sm"
                  title="Test my public backend API"
                >
                  <span className="text-green-500 opacity-70 group-hover:opacity-100">{'GET'}</span>
                  <span className="font-bold">/api/status</span>
                </a>
              </div>
            </AnimatedElement>
          </div>

          {/* Right WOW Factor Area (5 columns) */}
          <div className="hidden lg:flex w-full h-full lg:col-span-5 relative items-center">
            <AnimatePresence mode="wait">
              {!isRecruiterMode ? (
                <motion.div
                  key="terminal"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  transition={{ duration: 0.4 }}
                  className="w-full relative z-20"
                >
                  <LiveLogTerminal />
                </motion.div>
              ) : (
                <motion.div
                  key="recruiter-stats"
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="w-full relative z-20 flex flex-col gap-6"
                >
                  <div className="p-8 rounded-3xl border border-[#ffaa00]/20 bg-[#ffaa00]/10 backdrop-blur-md shadow-2xl shadow-[#ffaa00]/5 flex flex-col justify-center items-center text-center">
                    <div className="text-6xl font-black text-[#ffaa00] tracking-tighter mb-2">100%</div>
                    <div className="text-white/80 font-bold uppercase tracking-widest text-sm">Delivery Rate</div>
                    <p className="text-[#ffaa00]/60 mt-4 text-sm font-medium">Tested environments, clean PRs, zero delays.</p>
                  </div>
                  
                  <div className="p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-md shadow-2xl flex flex-col justify-center items-center text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] -z-10" />
                    <div className="text-6xl font-black text-white tracking-tighter mb-2">≤ 2h</div>
                    <div className="text-brand font-bold uppercase tracking-widest text-sm">Response Time</div>
                    <p className="text-white/40 mt-4 text-sm font-medium">Highly communicative across global timezones.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </>
  );
}
