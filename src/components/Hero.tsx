import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative px-5 pt-36 pb-20 sm:px-10 sm:pt-44 sm:pb-28">
      {/* meta column, offset right */}
      <div className="mb-10 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
        <Reveal>
          <p>
            Auckland, New Zealand
            <br />
            <span className="text-faint">36.85° S / 174.76° E</span>
          </p>
        </Reveal>
      </div>

      <h1 className="font-serif leading-[0.92] tracking-tight">
        <Reveal>
          <span className="flex items-center gap-5 sm:gap-8">
            <span className="text-[15vw] sm:text-[11vw]">James</span>
            <span className="hidden shrink-0 sm:inline-block">
              <span className="inline-block h-40 w-40 overflow-hidden rounded-full border border-line-strong lg:h-52 lg:w-52">
                <img
                  src="/profile.jpg"
                  alt="James Anderson"
                  className="h-full w-full object-cover"
                />
              </span>
            </span>
          </span>
        </Reveal>
        <Reveal delay={0.12}>
          <span className="block pl-[12vw] text-[15vw] sm:text-[11vw]">
            Anderson<span className="text-accent">.</span>
          </span>
        </Reveal>
      </h1>

      <div className="mt-14 grid grid-cols-12 gap-6">
        <Reveal delay={0.25} className="col-span-12 sm:col-span-6 sm:col-start-6 lg:col-span-5 lg:col-start-7">
          <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.2em]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
            </span>
            <span className="text-muted">Open to internships &amp; junior roles</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
