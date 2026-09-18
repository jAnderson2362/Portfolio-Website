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
    role: "Solo Developed",
    status: "Ongoing",
    year: "2026",
    description:
      "A race simulation engine that works out race outcomes from real car performance data, then plays the result back as a sped-up live race. Pick your cars and a circuit, and the sim uses horsepower, weight, and grip to decide who wins, the lap times, and the gaps.",
    details: [
      "Lap simulation engine built from track geometry and car physics data",
      "REST API with Express and MongoDB for cars, circuits, and race history",
      "Live race playback drawn on HTML5 Canvas, with motion.dev for UI animation",
      "Car and circuit setup pages with search, filters, and a table view",
    ],
    stack: ["React", "Vite", "Node.js", "Express", "MongoDB", "HTML5 Canvas", "Tailwind CSS"],
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
