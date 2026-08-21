import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative px-5 pt-36 pb-20 sm:px-10 sm:pt-44 sm:pb-28">
      {/* meta column, offset right */}
      <div className="mb-10 flex flex-wrap items-start justify-between gap-6 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
        <Reveal>
          <p>
            Auckland, New Zealand
            <br />
            <span className="text-faint">36.85° S / 174.76° E</span>
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-right">
            Portfolio — 2026
            <br />
            <span className="text-faint">Software / Product</span>
          </p>
        </Reveal>
      </div>

      <h1 className="font-serif leading-[0.92] tracking-tight">
        <Reveal>
          <span className="block text-[15vw] sm:text-[11vw]">James</span>
        </Reveal>
        <Reveal delay={0.12}>
          <span className="block pl-[12vw] text-[15vw] sm:text-[11vw]">
            Anderson<span className="text-accent">.</span>
          </span>
        </Reveal>
      </h1>

      <div className="mt-14 grid grid-cols-12 gap-6">
        <Reveal delay={0.25} className="col-span-12 sm:col-span-6 sm:col-start-6 lg:col-span-5 lg:col-start-7">
          <p className="text-lg leading-relaxed text-muted sm:text-xl">
            Software developer building{" "}
            <em className="font-serif italic text-foreground">useful things with care</em>{" "}
            — currently studying computer science at AUT, founding{" "}
            <a
              href="#work"
              className="link-sweep text-foreground underline decoration-line-strong underline-offset-4"
            >
              Prep
            </a>
            , and shipping client work with WDCC.
          </p>
          <div className="mt-8 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.2em]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
            </span>
            <span className="text-muted">Open to internships &amp; junior roles</span>
          </div>
        </Reveal>
      </div>

      {/* rotated marginalia */}
      <span
        aria-hidden
        className="absolute right-4 top-1/2 hidden origin-right -rotate-90 font-mono text-[10px] uppercase tracking-[0.3em] text-faint lg:block"
      >
        Scroll for selected work ↓
      </span>
    </section>
  );
}
