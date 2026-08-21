import Reveal from "./Reveal";

export default function Contact() {
  return (
    <footer id="contact" className="px-5 pt-24 sm:px-10 sm:pt-32">
      <Reveal>
        <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
          ( Contact )
        </p>
        <h2 className="font-serif leading-[0.95] tracking-tight">
          <span className="block text-[10vw] sm:text-[7vw]">Let&rsquo;s make</span>
          <span className="block pl-[8vw] text-[10vw] italic text-accent sm:text-[7vw]">
            something.
          </span>
        </h2>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-14 grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-7">
            <a
              href="mailto:jamesa2362@gmail.com"
              className="link-sweep break-all text-xl text-foreground sm:text-2xl"
            >
              jamesa2362@gmail.com
            </a>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              Open to internships, junior developer roles, and interesting
              collaborations — based in Auckland, happy to work anywhere.
            </p>
          </div>
          <div className="col-span-12 flex flex-col gap-3 font-mono text-[11px] uppercase tracking-[0.2em] sm:col-span-5 sm:items-end">
            <a
              href="https://github.com/jAnderson2362"
              target="_blank"
              rel="noopener noreferrer"
              className="link-sweep text-muted hover:text-foreground"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/james-anderson-a5a723317/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-sweep text-muted hover:text-foreground"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </Reveal>

      <div className="mt-24 flex flex-wrap items-baseline justify-between gap-4 border-t border-line py-6 font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
        <span>© 2026 James Anderson</span>
        <span>Designed &amp; built in Auckland, NZ</span>
        <a href="#top" className="link-sweep hover:text-foreground">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
