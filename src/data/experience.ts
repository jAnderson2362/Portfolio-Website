export type Role = {
  title: string;
  org: string;
  period: string;
  notes: string[];
};

export const experience: Role[] = [
  {
    title: "Full-stack Developer",
    org: "Web Development Consulting Club (WDCC)",
    period: "Apr 2026 – Present",
    notes: [
      "Building a client website for Studio Rapture with React, TypeScript, Tailwind CSS, Payload CMS, and MongoDB",
      "Team-based development workflows: code reviews, iteration on feedback",
    ],
  },
  {
    title: "Dispatch & Production Technician",
    org: "Phytomed / Kiwiherb",
    period: "Mar 2024 – Sep 2025",
    notes: [
      "End-to-end dispatch operations using SAP for stock movement, purchase orders, and inventory records",
      "Quality control and stock rotation to maintain compliance standards",
    ],
  },
  {
    title: "Front Desk Assistant",
    org: "Ploy Thai Health Massage",
    period: "Jan 2022 – Present",
    notes: [
      "Front desk operations: bookings, scheduling, staff timetable coordination",
      "First point of contact for clients, handling enquiries and requests",
    ],
  },
];

export const education = {
  school: "Auckland University of Technology",
  degree: "Bachelor of Computer and Information Sciences",
  detail: "Major in Computer Science · Minor in Software Development",
  period: "2025 – 2027 (expected)",
};
