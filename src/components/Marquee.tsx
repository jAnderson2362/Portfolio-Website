import { skills } from "@/data/projects";

export default function Marquee() {
  const row = [...skills, ...skills];
  return (
    <div className="overflow-hidden border-y border-line py-4" aria-label="Skills">
      <div className="marquee-track flex w-max items-center">
        {row.map((skill, i) => (
          <span
            key={i}
            aria-hidden={i >= skills.length}
            className="flex items-center whitespace-nowrap font-mono text-xs uppercase tracking-[0.2em] text-muted"
          >
            <span className="px-6">{skill}</span>
            <span className="text-accent">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}
