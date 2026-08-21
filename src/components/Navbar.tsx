export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line bg-background/80 backdrop-blur-sm">
      <nav className="flex items-baseline justify-between px-5 py-4 sm:px-10">
        <a href="#top" className="font-serif text-lg italic tracking-tight">
          James Anderson
        </a>
        <div className="hidden items-baseline gap-8 font-mono text-[11px] uppercase tracking-[0.18em] text-muted sm:flex">
          <a href="#work" className="link-sweep hover:text-foreground">
            Work
          </a>
          <a href="#about" className="link-sweep hover:text-foreground">
            About
          </a>
          <a href="#experience" className="link-sweep hover:text-foreground">
            Experience
          </a>
          <a href="#contact" className="link-sweep text-accent hover:text-accent-soft">
            Contact
          </a>
        </div>
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint sm:hidden">
          Folio / 2026
        </span>
      </nav>
    </header>
  );
}
