import { experience } from "@/data/experience";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="px-5 py-24 sm:px-10 sm:py-32">
      <Reveal>
        <h2 className="mb-16 font-serif text-4xl tracking-tight sm:text-6xl">
          Where I&rsquo;ve <em className="italic text-accent">worked</em>
        </h2>
      </Reveal>

      <div>
        {experience.map((role, i) => (
          <Reveal key={role.org} delay={i * 0.05}>
            <div className="group grid grid-cols-12 gap-x-6 gap-y-3 border-t border-line py-10 last:border-b">
              <p className="col-span-12 font-mono text-[11px] uppercase tracking-[0.2em] text-faint sm:col-span-3">
                {role.period}
              </p>
              <div className="col-span-12 sm:col-span-4">
                <h3 className="font-serif text-2xl tracking-tight transition-colors duration-300 group-hover:text-accent-soft">
                  {role.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{role.org}</p>
              </div>
              <ul className="col-span-12 space-y-2 text-sm leading-relaxed text-muted sm:col-span-5">
                {role.notes.map((note) => (
                  <li key={note} className="flex gap-3">
                    <span className="mt-[2px] text-accent" aria-hidden>
                      —
                    </span>
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
