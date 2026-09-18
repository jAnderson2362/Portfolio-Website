import { education } from "@/data/experience";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="px-5 py-24 sm:px-10 sm:py-32">
      <div className="grid grid-cols-12 gap-x-6 gap-y-12">
        <Reveal className="col-span-12 sm:col-span-2">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
            ( About )
          </p>
        </Reveal>

        <Reveal delay={0.1} className="col-span-12 sm:col-span-6">
          <p className="font-serif text-2xl leading-snug tracking-tight sm:text-4xl">
            I like building products end to end. That means{" "}
            <em className="not-italic text-accent">talking to the people</em> who&rsquo;ll
            use them, then writing the code that makes it real.
          </p>
          <div className="mt-8 max-w-xl space-y-5 leading-relaxed text-muted">
            <p>
              CS student at AUT. I founded Prep, an exam-prep app, and lead a
              five-person team building it. I am also helping build a client's website through
              University of Auckland&rsquo;s Web Development Consulting Club.
            </p>
            <p>
              Before software I worked dispatch and front-desk jobs, which taught
              me how to keep accurate records, communicate clearly, and care about
              the person on the other end.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="col-span-12 sm:col-span-4">
          <div className="border-l border-line pl-6 font-mono text-sm leading-relaxed tracking-wide text-muted">
            <p className="mb-8">
              <span className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-faint">
                Education
              </span>
              <span className="font-sans text-lg text-foreground">{education.school}</span>
              <br />
              {education.degree}
              <br />
              {education.major}
              <br />
              {education.minor}
              <br />
              <span className="text-faint">{education.period}</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
