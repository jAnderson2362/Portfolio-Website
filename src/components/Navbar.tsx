import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line bg-background/80 backdrop-blur-sm">
      <nav className="flex items-center justify-between px-5 py-4 sm:px-10">
        <a href="#top" className="font-serif text-lg tracking-tight">
          James Anderson
        </a>
        <div className="flex items-center gap-6">
          <div className="hidden items-baseline gap-8 font-mono text-sm uppercase tracking-[0.15em] text-muted sm:flex">
            <a href="#work" className="link-sweep hover:text-foreground">
              Work
            </a>
            <a href="#about" className="link-sweep hover:text-foreground">
              About
            </a>
            <a href="#experience" className="link-sweep hover:text-foreground">
              Experience
            </a>
            <a href="#contact" className="link-sweep hover:text-foreground">
              Contact
            </a>
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
