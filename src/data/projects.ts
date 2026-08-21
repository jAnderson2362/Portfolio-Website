export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A brief description of what this project does, the problem it solves, and what you learned building it.",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "https://example.com",
    repo: "https://github.com/yourusername/project-one",
  },
  {
    title: "Project Two",
    description:
      "Another project summary. Keep these to 1–2 sentences that highlight the interesting part.",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    repo: "https://github.com/yourusername/project-two",
  },
  {
    title: "Project Three",
    description:
      "One more project. Swap these out with your real work — the structure is ready to go.",
    tags: ["Python", "FastAPI", "Docker"],
    link: "https://example.com",
  },
];
