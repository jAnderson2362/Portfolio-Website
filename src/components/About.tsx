import { education } from "@/data/experience";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="px-5 py-24 sm:px-10 sm:py-32">
      <div className="grid grid-cols-12 gap-x-6 gap-y-12">
        <Reveal className="col-span-12 sm:col-span-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
            ( About )
          </p>
        </Reveal>

        <Reveal delay={0.1} className="col-span-12 sm:col-span-7">
          <p className="font-serif text-2xl leading-snug tracking-tight sm:text-4xl">
            I like building products end to end — from{" "}
            <em className="italic text-accent">talking to the people</em> who will
            use them, to shipping the code that makes them real.
          </p>
          <div className="mt-8 max-w-xl space-y-5 leading-relaxed text-muted">
            <p>
              I&rsquo;m a computer science student at Auckland University of
              Technology with a habit of turning ideas into working software. I
              founded Prep, an exam-prep app, and lead its five-person team while
              writing a good share of the code myself. Through AUT&rsquo;s Web
              Development Consulting Club I build real client websites in a team
              that reviews each other&rsquo;s work properly.
            </p>
            <p>
              Before software, I ran dispatch operations and front-desk systems —
              work that taught me the unglamorous skills that make projects
              actually finish: keeping accurate records, communicating clearly,
              and caring about the person on the other end.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="col-span-12 sm:col-span-2">
          <div className="border-l border-line pl-5 font-mono text-[11px] leading-loose tracking-wide text-muted">
            <p className="mb-4">
              <span className="mb-1 block uppercase tracking-[0.2em] text-faint">
                Education
              </span>
              {education.school}
              <br />
              {education.degree}
              <br />
              <span className="text-faint">{education.period}</span>
            </p>
            <p>
              <span className="mb-1 block uppercase tracking-[0.2em] text-faint">
                Currently
              </span>
              Prep — Founder
              <br />
              WDCC — Web Dev
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
