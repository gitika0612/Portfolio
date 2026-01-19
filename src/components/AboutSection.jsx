import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="max-w-xl space-y-6">
            <h3 className="text-2xl font-semibold">
              Full-Stack Developer | Problem Solver
            </h3>

            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                With{" "}
                <span className="font-medium text-foreground">
                  3+ years of hands-on experience
                </span>
                , I work as a Full-Stack Developer building scalable,
                production-ready web applications. I specialize in creating
                modern, responsive frontends using React and Next.js, while also
                designing and developing robust backend systems using Node.js,
                Express, and REST APIs.
              </p>

              <p>
                I have experience working with databases, managing application
                state, and ensuring smooth communication between frontend and
                backend. I’ve contributed to SaaS-based ERP platforms and
                complex web applications in fast-paced environments, where clean
                architecture, performance, and reliability are critical. I enjoy
                taking ownership of features end-to-end—from UI development to
                backend logic and data handling.
              </p>
            </div>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/Gitika_CV.pdf"
                download
                className="rounded-full border border-primary px-6 py-2 text-primary transition-colors duration-300 hover:bg-primary/10"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border card-hover p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Web Development</h4>
                  <p className="text-muted-foreground">
                    Building full-stack web applications with modern frontend
                    frameworks and scalable backend architectures.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border card-hover p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">
                    Performance Optimization
                  </h4>
                  <p className="text-muted-foreground">
                    Optimizing both frontend performance and backend API
                    efficiency for fast, reliable user experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border card-hover p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Project Management</h4>
                  <p className="text-muted-foreground">
                    Delivering end-to-end features by managing frontend, backend
                    APIs, and database interactions using agile practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
