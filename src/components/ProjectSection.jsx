import {
  ArrowRight,
  ExternalLink,
  Github,
  Sparkles,
  Zap,
  Linkedin,
} from "lucide-react";
import { useState } from "react";

const ledgerStack = [
  { label: "React + TypeScript", cat: "frontend" },
  { label: "Tailwind CSS + shadcn/ui", cat: "frontend" },
  { label: "Clerk Auth", cat: "frontend" },
  { label: "Node + Express", cat: "backend" },
  { label: "MongoDB", cat: "backend" },
  { label: "LangGraph", cat: "ai" },
  { label: "LangChain", cat: "ai" },
  { label: "OpenAI", cat: "ai" },
  { label: "RAG Pipeline", cat: "ai" },
  { label: "Vercel + Render", cat: "infra" },
  { label: "Resend (Email)", cat: "infra" },
];

const catColor = {
  frontend: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  backend: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  ai: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  infra: "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

const upcoming = [
  "Multi-currency analytics dashboard",
  "Automatic payment reminders for overdue invoices",
];

const projects = [
  {
    id: 1,
    title: "YT Shorts Clone",
    description:
      "YouTube Shorts Clone from scratch using Next.js 15, TypeScript, Prisma, and PostgreSQL (NeonDB), along with ImageKit.io for optimized image and video storage.",
    tags: ["Next.js", "TypeScript", "NeonDB"],
    demoUrl: "https://yt-shorts-one.vercel.app/",
    githubUrl: "https://github.com/gitika0612/YT-Shorts",
  },
  {
    id: 2,
    title: "ByteCode Website",
    description:
      "Integrated Clerk for secure authentication and session management. Used Zod for type-safe validation. Built full Create, Edit, Delete flows for articles with Prisma and PostgreSQL.",
    tags: ["Next.js", "Prisma", "Zod"],
    demoUrl: "https://bytecodeapp.netlify.app/",
    githubUrl: "https://github.com/gitika0612/byteCode_full_stack_application",
  },
  {
    id: 3,
    title: "AakashLife Website",
    description:
      "Developed the About page using React, Tailwind CSS, and Redux. Focused on responsive layout, clean design, and smooth UX to communicate the brand's mission.",
    tags: ["React", "Tailwind CSS", "Redux"],
    demoUrl: "https://www.aakashlife.in/about",
  },
  {
    id: 4,
    title: "iDesign.Market",
    description:
      "ERP dashboard for a design marketplace. Built with React and Bootstrap with complex state managed via Redux. Role: Frontend Engineer at previous company.",
    tags: ["React", "Bootstrap", "Redux"],
    demoUrl: "https://erp.production.idesign.market/",
  },
];

export const ProjectsSection = () => {
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    const video = document.getElementById("ledger-demo-video");
    if (!video) return;
    if (playing) {
      video.pause();
    } else {
      video.play();
    }
    setPlaying(!playing);
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Here are some of my recent projects. Each was carefully crafted with
          attention to detail, performance, and user experience.
        </p>

        <div className="relative mb-20 rounded-2xl overflow-hidden border border-primary/20 bg-card shadow-lg">
          <div className="h-1 w-full bg-gradient-to-r from-violet-500 via-primary to-blue-500" />
          <div className="p-8 md:p-10 flex flex-col gap-8">
            <div className="max-w-2xl flex flex-col justify-center items-center mx-auto">
              <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">
                AI-Powered SaaS
              </p>
              <h3 className="text-3xl font-bold mb-3">Ledger</h3>
              <p className="text-muted-foreground leading-relaxed">
                An intelligent invoicing platform built for users. Ledger uses a{" "}
                <span className="text-foreground font-medium">
                  LangGraph agentic pipeline
                </span>{" "}
                to let you describe an invoice in plain English — it handles
                generation, editing, copying, multi-invoice batches, and
                tax-aware calculations across INR, USD, and EUR — all through a
                conversational interface.
              </p>
            </div>

            {/* ── Middle: video full width ── */}
            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                Demo Video
              </p>
              <div
                className="relative rounded-xl overflow-hidden bg-secondary/40 border border-border cursor-pointer group"
                onClick={togglePlay}
              >
                <video
                  id="ledger-demo-video"
                  src="/Untitled_design.mp4"
                  className="w-full rounded-xl"
                  playsInline
                  onEnded={() => setPlaying(false)}
                />
                {!playing && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity group-hover:bg-black/40">
                    <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center shadow-lg">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-primary-foreground ml-1"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
              <p className="text-xs text-muted-foreground text-center">
                Click to play · Full walkthrough of the agentic pipeline
              </p>
            </div>

            {/* ── Bottom: 3-col info row ── */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-3">
                  What it does
                </p>
                <ul className="space-y-2">
                  {[
                    "Chat-to-invoice: describe it, get a structured invoice instantly",
                    "Smart tax engine — GST, VAT, and USD Tax auto-applied",
                    "Edit, copy, and batch-generate invoices via natural language",
                    "RAG-powered context: remembers your clients and rates",
                    "One-click PDF export and email delivery via Resend",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Zap size={13} className="text-primary mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack */}
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-3">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {ledgerStack.map(({ label, cat }) => (
                    <span
                      key={label}
                      className={`px-2.5 py-1 text-xs font-medium border rounded-full ${catColor[cat]}`}
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Coming soon + CTAs */}
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-3">
                    Coming Soon
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {upcoming.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 text-xs font-medium border border-dashed border-muted-foreground/30 rounded-full text-muted-foreground/70"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <a
                    href="https://ledgerbrain.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="cosmic-button flex items-center justify-center gap-2 text-sm"
                  >
                    <ExternalLink size={14} />
                    Live Project
                  </a>
                  <a
                    href="https://www.linkedin.com/posts/gitika-bhatia-432b10244_buildinpublic-ai-langchain-activity-7470057187952820224-1BG5?utm_source=share&utm_medium=member_desktop&rcm=ACoAADytV2YBhRD5l1LOySiNe0XkLy3U2hG5sFc"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 text-sm px-4 py-2 rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-300"
                  >
                    <Linkedin size={14} />
                    LinkedIn Post
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-8 text-muted-foreground">
          Other Work
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/gitika0612"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
