export default function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-border">
      <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
      <p className="text-muted max-w-md leading-relaxed mb-8">
        I&apos;m currently open to new opportunities. Whether you have a
        question or just want to say hi, my inbox is open.
      </p>
      <a
        href="mailto:you@example.com"
        className="inline-block bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg font-medium transition-colors"
      >
        Say hello
      </a>
      <div className="flex gap-6 mt-8 text-sm text-muted">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          Twitter
        </a>
      </div>
    </section>
  );
}
