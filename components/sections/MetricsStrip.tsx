import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const metrics = [
  { label: "Active Users Served", value: 1, suffix: "M+" },
  { label: "Student ERP Implemented", value: 12000, suffix: "+" },
  { label: "Platform Users", value: 100000, suffix: "+" },
  { label: "Performance Boost", value: 25, suffix: "%" },
];

export default function MetricsStrip() {
  return (
    <section className="w-full py-16 border-y border-white/5 bg-white/[0.02]">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <AnimatedElement
              key={index}
              delay={0.1 * index}
              direction="up"
              className="group flex flex-col items-start md:items-center md:text-center p-6 rounded-2xl transition-colors duration-300 hover:bg-white/[0.03]"
            >
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 mb-2 transition-transform duration-300 group-hover:scale-105">
                <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              </div>
              <div className="text-sm font-bold text-brand uppercase tracking-[0.2em]">
                {metric.label}
              </div>
              <div className="mt-3 h-px w-8 bg-brand/40 transition-all duration-300 group-hover:w-12" />
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}