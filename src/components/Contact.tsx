import Reveal from "./Reveal";

export default function Contact() {
  return (
    <footer id="contact" className="px-5 pt-24 sm:px-10 sm:pt-32">
      <Reveal>
        <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
          ( Contact )
        </p>
        <h2 className="font-serif leading-[0.95] tracking-tight">
          <span className="block text-[10vw] sm:text-[7vw]">Let&rsquo;s work</span>
          <span className="block pl-[8vw] text-[10vw] text-accent sm:text-[7vw]">
            together.
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
              collaborations. Based in Auckland, happy to work anywhere.
            </p>
          </div>
          <div className="col-span-12 flex flex-col items-start gap-4 sm:col-span-5 sm:ml-auto">
            <a
              href="https://github.com/jAnderson2362"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-muted transition-all duration-300 hover:text-foreground"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line-strong transition-all duration-300 hover:border-foreground hover:scale-110">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </span>
              <span className="font-mono text-sm uppercase tracking-[0.15em]">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/james-anderson-a5a723317/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-muted transition-all duration-300 hover:text-foreground"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line-strong transition-all duration-300 hover:border-foreground hover:scale-110">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </span>
              <span className="font-mono text-sm uppercase tracking-[0.15em]">LinkedIn</span>
            </a>
          </div>
        </div>
      </Reveal>

      <div className="mt-24 flex flex-wrap items-baseline justify-between gap-4 border-t border-line py-6 font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
        <span>© 2026 James Anderson</span>
        <a href="#top" className="link-sweep hover:text-foreground">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
