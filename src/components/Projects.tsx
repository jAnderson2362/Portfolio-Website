import { projects } from "@/data/projects";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="px-5 py-24 sm:px-10 sm:py-32">
      <Reveal>
        <div className="mb-16 flex items-end justify-between">
          <h2 className="font-serif text-4xl tracking-tight sm:text-6xl">
            Projects
          </h2>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-faint sm:block">
            ( Projects )
          </span>
        </div>
      </Reveal>

      <div className="flex flex-col">
        {projects.map((project, i) => (
          <Reveal key={project.index} delay={i * 0.05}>
            <article
              className={`group grid grid-cols-12 gap-x-6 gap-y-8 border-t border-line py-14 last:border-b sm:py-20 ${
                i % 2 === 1 ? "sm:text-left" : ""
              }`}
            >
              {/* index — swaps side on alternating rows */}
              <div
                className={`col-span-2 font-serif text-5xl text-faint transition-colors duration-500 group-hover:text-accent sm:text-7xl ${
                  i % 2 === 1 ? "sm:order-3 sm:text-right" : ""
                }`}
              >
                {project.index}
              </div>

              <div
                className={`col-span-10 sm:col-span-6 ${
                  i % 2 === 1 ? "sm:order-1" : ""
                }`}
              >
                <div className="mb-3 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="font-serif text-3xl tracking-tight sm:text-5xl">
                    {project.title}
                  </h3>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                    {project.status}
                  </span>
                </div>
                <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                  {project.role} / {project.year}
                </p>
                <p className="max-w-xl leading-relaxed text-muted">
                  {project.description}
                </p>
              </div>

              <div
                className={`col-span-12 sm:col-span-4 ${
                  i % 2 === 1 ? "sm:order-2" : ""
                }`}
              >
                <ul className="mb-6 space-y-2 text-sm leading-relaxed text-muted">
                  {project.details.map((detail) => (
                    <li key={detail} className="flex gap-3">
                      <span className="mt-[2px] text-faint" aria-hidden>
                        ·
                      </span>
                      {detail}
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-line-strong px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted transition-colors duration-300 group-hover:border-accent/40"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
