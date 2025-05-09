import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "YT Shorts Clone",
        description: "YouTube Shorts Clone from scratch using Next.js 15, TypeScript, Prisma, and PostgreSQL (NeonDB), along with ImageKit.io for optimized image and video storage",
        tags: ["Next Js", "Typescript", "Neon DB"],
        demoUrl: "https://yt-shorts-one.vercel.app/",
        githubUrl: "https://github.com/gitika0612/YT-Shorts",
    },
    {
        id: 2,
        title: "ByteCode Website",
        description: "Integrated Clerk for secure authentication and user session management. Used Zod for type-safe form validation in both frontend and backend. Designed and implemented Create, Edit, Delete functionalities for articles using Prisma and PostgreSQL.",
        tags: ["Next Js", "Prisma", "Zod"],
        demoUrl: "https://bytecodeapp.netlify.app/",
        githubUrl: "https://github.com/gitika0612/byteCode_full_stack_application",
    },
    {
        id: 3,
        title: "AakashLife Website",
        description:
            "Developed the About page for AakashLife’s official website using React, Tailwind CSS, and Redux. Focused on responsive layout, clean design, and smooth user experience to effectively communicate the brand’s mission and values.",
        tags: ["React Js", "Tailwind CSS", "Redux"],
        demoUrl: "https://www.aakashlife.in/about",
    },
    {
        id: 4,
        title: "iDesign.Market",
        description: `Previous Company <br/> Credentials: <br/> Email - "rahul@idesign.market" <br/> Password - "Uat@1234"`,
        tags: ["React Js", "BootStrap", "Redux"],
        demoUrl: "https://erp.production.idesign.market/",
        htmlDescription: true,
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Featured <span className="text-primary"> Projects </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully
                    crafted with attention to detail, performance, and user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            {/* <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div> */}

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.htmlDescription ? (
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: project.description,
                                            }}
                                        />
                                    ) : (
                                        <p>{project.description}</p>
                                    )}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            >
                                                <Github size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        href="https://github.com/gitika0612"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};