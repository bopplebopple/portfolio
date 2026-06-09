// Single source of truth — derived directly from the résumé. No invented data.

export const profile = {
  name: "Matthew Brian Khoe Munandar",
  shortName: "Matthew Munandar",
  title: "Back-End Engineer",
  location: "Jakarta, Indonesia",
  available: true,
  email: "matthewmunandar18@gmail.com",
  phone: "+62 812 8980 2926",
  phoneHref: "+6281289802926",
  linkedin: "https://linkedin.com/in/matthew-munandar-5b51b1209",
  linkedinLabel: "matthew-munandar",
  currentCompany: "Pharos Indonesia",
  // The hero statement — concise, specific, first-person.
  headline: "Reliable, high-performance backends in Go.",
  // About copy, grounded in the résumé.
  bio: [
    "I'm a back-end engineer in Jakarta. For the past three years I've been at Pharos Indonesia, building and maintaining production services in Go.",
    "Most of my work lives in the data layer and the APIs on top of it — writing PostgreSQL queries and transactions for high-volume operations, keeping services on a clean, repository-based architecture, and shipping documented endpoints other teams build on. I came up through an internship there, where I helped move API services over to Go.",
  ],
} as const;

export const stats = [
  { value: "3+", label: "Years in production" },
  { value: "Go", label: "Primary stack" },
  { value: "3.61", label: "GPA · BINUS CS" },
] as const;

export type Experience = {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Back-End Developer",
    company: "PT. Pharos Indonesia",
    period: "Feb 2023 — Present",
    current: true,
    points: [
      "Develop and maintain production backend services in Go.",
      "Design and optimize PostgreSQL queries and transactions for high-volume data operations.",
      "Implement clean architecture and repository patterns with sqlx.",
      "Work with frontend teams to build scalable, well-documented APIs.",
    ],
  },
  {
    role: "Back-End Developer Intern",
    company: "PT. Pharos Indonesia",
    period: "Sept 2022 — Feb 2023",
    points: [
      "Built and maintained backend modules in Go and Node.js.",
      "Helped transition API services to Go, improving response efficiency.",
      "Implemented database operations with GORM and PostgreSQL.",
    ],
  },
  {
    role: "Intern",
    company: "PT. Guna Elektro (GAE)",
    period: "Apr 2019 — May 2019",
    points: [
      "Assisted with hardware testing and documentation.",
      "Supported engineers on project maintenance and system setup.",
    ],
  },
];

export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  meta: string;
};

// "Selected work" — the systems I own day to day at Pharos, framed honestly
// from the résumé. Production code, so no public repos or invented metrics.
export const projects: Project[] = [
  {
    title: "Production services in Go",
    blurb:
      "Backend services I develop and maintain in Go — the core of what runs in production at Pharos.",
    tags: ["Go", "Services", "Production"],
    meta: "Pharos Indonesia",
  },
  {
    title: "High-volume data layer",
    blurb:
      "PostgreSQL queries and transactions designed and tuned to stay correct and fast under high-volume operations.",
    tags: ["PostgreSQL", "sqlx", "Transactions"],
    meta: "Pharos Indonesia",
  },
  {
    title: "Clean, modular architecture",
    blurb:
      "Clean architecture and repository patterns with sqlx that keep services modular and testable as they grow.",
    tags: ["Clean Architecture", "Repository Pattern"],
    meta: "Pharos Indonesia",
  },
  {
    title: "APIs teams build on",
    blurb:
      "Scalable, well-documented APIs built with frontend teams — including the early effort to move services from Node.js to Go.",
    tags: ["REST", "Microservices", "Go"],
    meta: "Pharos Indonesia",
  },
];

export type StackGroup = { label: string; items: string[] };

export const stack: StackGroup[] = [
  { label: "Languages", items: ["Go", "Node.js", "SQL"] },
  { label: "Data", items: ["PostgreSQL", "sqlx", "GORM"] },
  {
    label: "Architecture",
    items: [
      "REST APIs",
      "Microservices",
      "Clean Architecture",
      "Repository Pattern",
      "Concurrency",
    ],
  },
  { label: "Tooling", items: ["Docker", "AWS", "Git", "Postman", "DBeaver"] },
];

export type Education = {
  school: string;
  program: string;
  period: string;
  detail: string;
  meta?: string;
};

export const education: Education[] = [
  {
    school: "BINUS University",
    program: "B.Sc. Computer Science",
    period: "2019 — 2023",
    meta: "GPA 3.61 / 4.00",
    detail:
      "Algorithms, database systems, machine learning, and software engineering.",
  },
  {
    school: "Dankook University",
    program: "Computer Science (Exchange)",
    period: "2022",
    meta: "South Korea",
    detail: "A semester focused on cloud computing and Amazon Web Services.",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;
