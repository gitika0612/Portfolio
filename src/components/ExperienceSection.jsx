import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Kynamite",
    role: "Full Stack Developer",
    period: "March 2025 – Present",
    location: "Remote",
    highlights: [
      "Developing a feature-rich trading web application using Next.js and Tailwind CSS.",
      "Built backend APIs for authentication, trading, and core financial operations.",
      "Built and deployed multiple websites using Next.js and Prisma.",
    ],
  },
  {
    company: "iDesign.Market",
    role: "Frontend Developer",
    period: "Nov 2023 – Feb 2025",
    location: "Delhi",
    highlights: [
      "Developed and maintained SaaS-based ERP solutions using React, Redux, and Bootstrap.",
      "Led development of key features: File Manager, Inventory, Item Master, Global & Project BOM, and LMS.",
      "Built LMS and global components with AG-Grid, React, and TypeScript for seamless course management.",
      "Integrated real-time data updates using Redux, reducing unnecessary API calls.",
    ],
  },
  {
    company: "HKS Manpower Group",
    role: "Frontend Developer",
    period: "May 2023 – Nov 2023",
    location: "Gurugram",
    highlights: [
      "Built and deployed multiple websites using React.js and Tailwind CSS with responsive UI/UX.",
      "Developed a GYM App in React Native with workout tracking, authentication, and personalised fitness plans.",
      "Collaborated with backend teams to optimise API integration and data-fetching performance.",
    ],
  },
  {
    company: "Samrika Critique Services Pvt Ltd",
    role: "Frontend Developer (Internship)",
    period: "July 2022 – Jan 2023",
    location: "Gurugram",
    highlights: [
      "Developed and designed multiple websites using React.js and Material UI.",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Where I've shipped real products
        </p>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border ml-[7px] hidden sm:block" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, index) => (
              <div key={index} className="flex gap-6 group">
                {/* dot */}
                <div className="hidden sm:flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary mt-1 shrink-0 group-hover:scale-125 transition-transform duration-300" />
                </div>

                {/* card */}
                <div className="flex-1 bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {exp.company}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar size={12} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <Briefcase size={13} className="text-primary" />
                    <span className="text-sm text-primary font-medium">
                      {exp.role}
                    </span>
                    <span className="text-muted-foreground text-xs">
                      · {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((point, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm text-muted-foreground text-left items-start"
                      >
                        <span className="text-primary mt-1 shrink-0">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
