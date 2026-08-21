export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-20">
      <p className="text-muted font-mono text-sm mb-4">Hi, my name is</p>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
        Your Name
      </h1>
      <p className="text-muted text-lg sm:text-xl max-w-xl leading-relaxed mb-8">
        I build things for the web. Currently focused on building accessible,
        human-centered products.
      </p>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          See my work
        </a>
        <a
          href="#contact"
          className="border border-border hover:border-accent text-foreground px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
