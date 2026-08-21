import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-border">
      <h2 className="text-2xl font-bold mb-8">Projects</h2>
      <div className="grid gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-card border border-border rounded-xl p-6 hover:border-accent/40 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <div className="flex gap-3 text-sm text-muted">
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    Code
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    Live ↗
                  </a>
                )}
              </div>
            </div>
            <p className="text-muted text-sm leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2.5 py-1 rounded-full bg-accent/10 text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
