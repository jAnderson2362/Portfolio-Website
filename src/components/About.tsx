export default function About() {
  return (
    <section id="about" className="py-20 border-t border-border">
      <h2 className="text-2xl font-bold mb-8">About</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-4 text-muted leading-relaxed">
          <p>
            Write a couple of paragraphs about yourself here. What drives you,
            what you&apos;re working on, and what you care about as a developer.
          </p>
          <p>
            Keep it human — this is the section where someone decides whether
            they want to work with you.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Technologies I work with</h3>
          <ul className="grid grid-cols-2 gap-2 text-sm text-muted font-mono">
            {[
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Tailwind CSS",
              "PostgreSQL",
            ].map((tech) => (
              <li key={tech} className="flex items-center gap-2">
                <span className="text-accent">▸</span> {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
