import { Section } from "@/components/ui/Section";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { ProjectCard } from "@/components/ui/ProjectCard";

const projects = [
  {
    title: "PomPak – National Platform",
    description: "National financial literacy platform backed by State Bank of Pakistan & JazzCash. Handled scale for 1M+ users, 750k+ students across 45+ districts.",
    tech: ["PHP/Laravel", "SQL Server", "JavaScript", "Docker", "AWS"],
    metrics: "1M+ Users • 750k+ Students",
    live: "https://nflpy.knowledgeplatform.com",
    github: null,
    caseStudyHref: "/case-studies/pompak",
    blogHref: "/blog/1m-users-laravel",
  },
  {
    title: "BuzzMap",
    description: "Engineered real-time event discovery backend delivering geolocation APIs. Achieved <50ms WebSocket latency, 99.99% uptime, and scaled Redis caching for 10k+ req/sec to meet strict US production requirements.",
    tech: ["Node.js", "Express", "MongoDB", "Redis", "WebSockets"],
    metrics: "<50ms Latency • 99.99% Uptime",
    live: "https://buzzmap.org",
    github: null,
    caseStudyHref: "/case-studies/buzzmap",
    blogHref: "/blog/scaling-websockets",
  },
  {
    title: "SLS – School Management",
    description: "Comprehensive school ERP managing 12,000+ students across 8 portals. Includes full financial audit suite and bulk challenge printing.",
    tech: ["PHP/Laravel", "MySQL", "Bootstrap"],
    metrics: "12,000+ Students",
    live: "https://sls.creativeitpark.org",
    github: null,
    caseStudyHref: "/case-studies/sls",
    blogHref: "/blog/automating-erp-audits",
  },
  {
    title: "Hello Creative IT Portal",
    description: "Company-wide CRM/ERP managing HR, payroll, deal pipelines, and a full double-entry accounting module (ledger, P&L, balance sheet).",
    tech: ["PHP/Laravel", "MySQL", "Vue.js", "Redis"],
    metrics: "Double-Entry Accounting",
    live: "https://hello.creativeitpark.org",
    github: null,
    caseStudyHref: "/case-studies/hello-creative-it",
    blogHref: "/blog/double-entry-accounting-php",
  },
];

export default function Projects() {
  return (
    <Section id="projects">
      <AnimatedElement className="w-full mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Mission Critical Deployments</h2>
        <p className="text-muted max-w-2xl text-lg">
          A showcase of production systems I have built and maintained, focusing on backend scale, data management, and absolute system reliability.
        </p>
      </AnimatedElement>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {projects.map((project, index) => (
          <AnimatedElement
            key={index}
            delay={index * 0.1}
            className="flex w-full"
          >
             <ProjectCard project={project} />
          </AnimatedElement>
        ))}
      </div>
    </Section>
  );
}
