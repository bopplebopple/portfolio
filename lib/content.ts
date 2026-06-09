// Single source of truth for all portfolio content.
// Derived directly from Matthew Brian Khoe Munandar's résumé — no invented data.

export const profile = {
  name: "Matthew Brian Khoe Munandar",
  shortName: "Matthew Munandar",
  firstName: "Matthew",
  lastName: "Munandar",
  monogram: "MM",
  title: "Back-End Engineer",
  location: "Jakarta, Indonesia",
  available: true,
  email: "matthewmunandar18@gmail.com",
  phone: "+62 812 8980 2926",
  phoneHref: "+6281289802926",
  linkedin: "https://linkedin.com/in/matthew-munandar-5b51b1209",
  linkedinLabel: "matthew-munandar",
  currentCompany: "Pharos Indonesia",
  tagline: "I build reliable, high-performance backend systems in Go.",
  // A short editorial statement used in the About section. Grounded in résumé.
  statement:
    "Computer Science graduate from BINUS University with 3+ years building production backends. I care about scalable architecture, efficient APIs, and systems that stay reliable under load.",
  intro:
    "Computer Science graduate from BINUS University with 3+ years of experience in backend development. I specialize in building reliable, high-performance backend systems using Golang — passionate about scalable architecture, efficient APIs, and contributing to innovative engineering teams.",
} as const;

export const stats = [
  { value: "3+", label: "Years building backends" },
  { value: "Go", label: "Primary language" },
  { value: "3.61", label: "GPA / 4.00" },
] as const;

// Words used for the kinetic infinite marquee strip.
export const marqueeWords = [
  "Golang",
  "PostgreSQL",
  "REST APIs",
  "Microservices",
  "Clean Architecture",
  "Docker",
  "AWS",
  "Concurrency",
  "High-Volume Data",
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
      "Develop and maintain production backend services using Golang.",
      "Implement clean architecture and repository patterns with sqlx.",
      "Design and optimize PostgreSQL queries and transactions for high-volume data operations.",
      "Collaborate closely with frontend teams to build scalable, well-documented APIs.",
    ],
  },
  {
    role: "Back-End Developer Intern",
    company: "PT. Pharos Indonesia",
    period: "Sept 2022 — Feb 2023",
    points: [
      "Built and maintained backend modules using Golang and Node.js.",
      "Helped transition API services to Golang, improving response efficiency.",
      "Implemented database operations using GORM and PostgreSQL.",
    ],
  },
  {
    role: "Intern",
    company: "PT. Guna Elektro (GAE)",
    period: "Apr 2019 — May 2019",
    points: [
      "Assisted with hardware testing and documentation tasks.",
      "Supported engineers in project maintenance and basic system setup.",
    ],
  },
];

export type Project = {
  index: string;
  title: string;
  summary: string;
  tags: string[];
  context: string;
};

// "Selected Work" — engineering themes reframed strictly from the résumé's
// production experience at Pharos Indonesia. No invented projects or metrics.
export const projects: Project[] = [
  {
    index: "01",
    title: "Service Migration to Go",
    summary:
      "Helped transition API services from Node.js to Golang, improving response efficiency across core backend modules now running in production.",
    tags: ["Golang", "Node.js", "APIs"],
    context: "Pharos Indonesia",
  },
  {
    index: "02",
    title: "High-Volume Data Layer",
    summary:
      "Designed and optimized PostgreSQL queries and transactions built to stay reliable under high-volume data operations.",
    tags: ["PostgreSQL", "sqlx", "Transactions"],
    context: "Pharos Indonesia",
  },
  {
    index: "03",
    title: "Clean Architecture Foundation",
    summary:
      "Implemented clean architecture and repository patterns with sqlx — keeping services modular, testable, and maintainable as they grew.",
    tags: ["Clean Architecture", "Repository Pattern", "Go"],
    context: "Pharos Indonesia",
  },
  {
    index: "04",
    title: "Scalable API Platform",
    summary:
      "Built scalable, well-documented APIs in close collaboration with frontend teams, keeping integration fast and predictable.",
    tags: ["REST", "Microservices", "Documentation"],
    context: "Pharos Indonesia",
  },
];

export type SkillGroup = {
  title: string;
  blurb: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Back-End Development",
    blurb: "Building and maintaining backend systems with Go.",
    items: ["Golang", "Node.js", "Concurrency"],
  },
  {
    title: "Database Management",
    blurb: "Query optimization, transactions, and high-volume data.",
    items: ["PostgreSQL", "SQL", "sqlx", "GORM"],
  },
  {
    title: "API Development",
    blurb: "Designing and implementing RESTful APIs and microservices.",
    items: ["REST APIs", "Microservices", "JSON"],
  },
  {
    title: "System Architecture",
    blurb: "Clean architecture, repository patterns, and modular design.",
    items: ["Clean Architecture", "Repository Pattern", "Modular Design"],
  },
  {
    title: "Cloud & Tooling",
    blurb: "Containerized workflows and day-to-day engineering tools.",
    items: ["Docker", "AWS", "Postman", "DBeaver", "Git"],
  },
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
      "Focused on software development, machine learning, backend systems, and data management. Relevant coursework: Algorithm & Programming, Database Systems, Machine Learning, Software Engineering.",
  },
  {
    school: "Dankook University",
    program: "Computer Science — Exchange",
    period: "Mar — Jun 2022",
    meta: "South Korea",
    detail:
      "Participated in an exchange program focused on Cloud Computing and Amazon Web Services (AWS).",
  },
];

export const navLinks = [
  { href: "#about", label: "About", index: "01" },
  { href: "#work", label: "Work", index: "02" },
  { href: "#experience", label: "Experience", index: "03" },
  { href: "#skills", label: "Skills", index: "04" },
  { href: "#contact", label: "Contact", index: "05" },
] as const;
