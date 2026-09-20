export type Project = {
  index: string;
  title: string;
  role: string;
  status: string;
  year: string;
  description: string;
  details: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    index: "1",
    title: "Prep",
    role: "Founder & Product Lead",
    status: "Ongoing",
    year: "2026",
    description:
      "An exam-prep app that generates syllabus-aligned quizzes, revision notes, and practice exams for specific exam systems. Built for secondary and university students who want structured revision.",
    details: [
      "Founded and lead a five-person team across design, frontend, and backend",
      "Full-stack development with React, FastAPI, and Supabase",
      "AI API integration for quiz and content generation",
      "Product strategy and cross-functional coordination",
    ],
    stack: ["React", "TypeScript", "Python", "FastAPI", "Supabase", "AI APIs"],
  },
  {
    index: "2",
    title: "Studio Rapture",
    role: "Full-stack Developer, WDCC",
    status: "Ongoing",
    year: "2026",
    description:
      "A client website delivered through University of Auckland's Web Development Consulting Club. A responsive, CMS-driven site built by a student team for a real client.",
    details: [
      "Integrating front-end components into a cohesive, responsive homepage",
      "Translating designs into clean, reusable React components with Tailwind",
      "Configuring Payload CMS: user setup, data structuring, content management",
      "Contributing to code reviews and iterating on team feedback",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Payload CMS", "MongoDB"],
  },
  {
    index: "3",
    title: "SpendWise",
    role: "Full-stack Developer, COMP602",
    status: "Ongoing",
    year: "2026",
    description:
      "A web app that helps people track recurring bills and subscriptions, spot services they no longer use, and get alerts before free trials end. A team project for COMP602 at AUT, built using React, Node.js, Express, and Firebase.",
    details: [
      "Authentication with Firebase Auth and protected frontend routes",
      "Backend services following a 3-tier architecture",
      "UI designed in Figma, styled with shadcn/ui and Tailwind CSS",
    ],
    stack: ["React", "Node.js", "Express", "Firebase", "Tailwind CSS", "shadcn/ui"],
  },
  {
    index: "4",
    title: "OvertakeJS",
    role: "Personal Project",
    status: "Ongoing",
    year: "2026",
    description:
      "A physics-based race simulation engine. A lap-time solver derives results from real car data via tyre grip, power, and aerodynamic drag, then scales into a deterministic race engine simulating multi-car races at 50 ms resolution with overtaking, tyre wear, and fuel burn.",
    details: [
      "Physics-based lap-time solver and deterministic multi-car race engine",
      "React frontend with Vite, Tailwind, and Framer Motion animating each race",
      "JWT and bcrypt authentication with a collectible card system",
      "Full-stack app persisted in MongoDB with Express REST API",
    ],
    stack: ["React", "Vite", "Node.js", "Express", "MongoDB", "Framer Motion", "Tailwind CSS"],
  },
];

export const skills = [
  "Python",
  "Java",
  "C",
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "FastAPI",
  "Tailwind CSS",
  "Firebase",
  "Supabase",
  "PostgreSQL",
  "MongoDB",
  "Payload CMS",
  "Git",
  "SAP ERP",
];
