import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "TypeScript", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Redux", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Material UI", category: "frontend" },
  { name: "Bootstrap", category: "frontend" },
  { name: "HTML/CSS", category: "frontend" },

  // Backend
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "Prisma", category: "backend" },
  { name: "REST APIs", category: "backend" },

  // AI
  { name: "LangChain", category: "ai" },
  { name: "LangGraph", category: "ai" },
  { name: "RAG Pipeline", category: "ai" },
  { name: "Prompt Engineering", category: "ai" },
  { name: "OpenAI API", category: "ai" },

  // Tools
  { name: "Vercel", category: "tools" },
  { name: "Render", category: "tools" },
  { name: "Cursor", category: "tools" },
  { name: "Postman", category: "tools" },
  { name: "Git/GitHub", category: "tools" },
  { name: "VS Code", category: "tools" },
];

const categories = ["frontend", "backend", "ai", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const filteredSkills = skills.filter(
    (skill) => skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category === "ai" ? "AI / LLM" : category}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {filteredSkills.map((skill, key) => (
            <span
              key={key}
              className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium card-hover cursor-default"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
