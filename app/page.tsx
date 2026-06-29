import Hero from "@/components/sections/Hero";
import MetricsStrip from "@/components/sections/MetricsStrip";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import AboutContact from "@/components/sections/AboutContact";

export const dynamic = "force-dynamic";

export default function Home() {
  console.log(`[portfolio] homepage rendered at ${new Date().toISOString()}`);

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* <Hero /> */}
      <MetricsStrip />
      <Projects />
      <Testimonials />
      <Skills />
      <Experience />
      <AboutContact />
    </main>
  );
}