import React from "react";

const projects = [
  {
    title: "AI Website Builder",
    description:
      "An AI-powered tool that generates complete website layouts, content, and sections from a single prompt.",
    tech: ["React", "Tailwind CSS", "AI API"],
    link: "#",
  },
  {
    title: "AI Saas",
    description:
      "A fast, responsive personal portfolio built to showcase projects, skills, and contact information.",
    tech: ["React", "Vite", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Fast Chat",
    description:
      "A backend-connected contact form with email notifications and validation.",
    tech: ["React", "Node.js", "Email API"],
    link: "#",
  },
  {
    title: "Movie App",
    description: "",
    tech: ["React JS", "Node.js", "Tailwind CSS"],
    link: "#"
  },
  {
    title: "Portfolio",
    description: "",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "#"
  },
  
];

const Projects = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16 text-slate-800">
      {/* Header */}
      <header className="mb-14">
        <h1 className="text-4xl font-bold mb-4">My Best Projects</h1>
        <p className="text-slate-600 max-w-2xl">
          A selection of projects I’ve built. Each one solves a real problem.
          No filler. No fake demos.
        </p>
      </header>

      {/* Project Grid */}
      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-2">
              {project.title}
            </h2>

            <p className="text-slate-600 mb-4">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((item, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 bg-slate-100 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Link */}
            <a
              href={project.link}
              className="text-sm font-medium text-indigo-600 hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Projects;