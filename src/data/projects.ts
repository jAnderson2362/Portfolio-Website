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
    index: "01",
    title: "Prep",
    role: "Founder & Product Lead",
    status: "Ongoing",
    year: "2026",
    description:
      "An exam preparation app that generates syllabus-aligned quizzes, revision notes, and practice exams tailored to specific exam systems — built for secondary and university students who need structured revision.",
    details: [
      "Founded and lead a five-person team across design, frontend, and backend",
      "Full-stack development with React, FastAPI, and Supabase",
      "AI API integration for quiz and content generation",
      "Product strategy and cross-functional coordination",
    ],
    stack: ["React", "TypeScript", "Python", "FastAPI", "Supabase", "AI APIs"],
  },
  {
    index: "02",
    title: "Studio Rapture",
    role: "Web Developer — WDCC",
    status: "In progress",
    year: "2026",
    description:
      "A client website delivered through AUT's Web Development Consulting Club — a responsive, CMS-driven site built by a collaborative student team for a real client.",
    details: [
      "Integrating front-end components into a cohesive, responsive homepage",
      "Translating designs into clean, reusable React components with Tailwind",
      "Configuring Payload CMS: user setup, data structuring, content management",
      "Contributing to code reviews and iterating on team feedback",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Payload CMS", "MongoDB"],
  },
  {
    index: "03",
    title: "Inventory Management System",
    role: "Solo Developer",
    status: "Completed",
    year: "2025",
    description:
      "A Java-based system for managing stock data — core CRUD operations for inventory items with accurate tracking of stock levels and consistent record maintenance.",
    details: [
      "Add, update, delete, and search inventory items",
      "User input validation and consistent product data",
      "Accurate tracking of inventory levels",
    ],
    stack: ["Java"],
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
  "Tailwind CSS",
  "FastAPI",
  "Supabase",
  "PostgreSQL",
  "MongoDB",
  "Payload CMS",
  "Git",
  "SAP ERP",
];
