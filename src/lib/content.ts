export const site = {
  name: "Kushagra Mishra",
  role: "Web Developer",
  location: "Noida, Uttar Pradesh, India",
  email: "kushagramishraofficial@gmail.com",
  phone: "+91 90266-78031",
  phoneHref: "tel:+919026678031",
  availability: "Open to Web, Frontend, and Full Stack roles",
  summary:
    "2026 B.Tech Computer Science graduate who builds and ships full-stack web applications end to end — Python/Flask backends with authentication, role-based access, and SQL data models, and responsive frontends in HTML, CSS, JavaScript, React, and Next.js/TypeScript.",
  pitch:
    "I take products from schema to deploy: routing, auth, SQL models, and a frontend recruiters can actually use.",
  links: {
    github: "https://github.com/kushagramishra1",
    linkedin: "https://www.linkedin.com/in/kushagra-mishra-308510420/",
    resume: "/kushagra-mishra-resume.pdf",
  },
} as const;

export const nav = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;

export const projects = [
  {
    id: "01",
    title: "Nexora AI",
    icon: "workspace",
    category: "AI knowledge workspace",
    role: "Full-stack product",
    summary:
      "A team workspace with searchable knowledge bases, an AI assistant, API key management, usage reporting, and member settings.",
    outcome:
      "Brings team knowledge and AI-assisted discovery into one connected workspace.",
    stack: ["TanStack Start", "React", "TypeScript", "PostgreSQL", "Better Auth"],
    github: "https://github.com/kushagramishra1/nextaura-ai",
    live: "https://nextaura-ai.vercel.app/",
  },
  {
    id: "02",
    title: "Deepfake Detection & Explainability",
    icon: "media",
    category: "Computer vision · media authenticity",
    role: "Team lead",
    summary:
      "A web app that classifies images with a CNN and uses occlusion sensitivity to show which regions influenced its prediction.",
    outcome:
      "Pairs each real-or-fake result with a visual explanation instead of a score alone.",
    stack: ["CNN", "ONNX Runtime", "Flask", "React", "OpenCV"],
    github:
      "https://github.com/kushagramishra1/DeepFake-Detection-System-using-CNNs-and-Explainable-AI",
    live: "https://deepfake-detection-system-pi.vercel.app/",
  },
  {
    id: "03",
    title: "Client Project Tracking & Billing",
    icon: "operations",
    category: "Business operations",
    role: "Full-stack developer",
    summary:
      "A role-aware platform for client projects, employee assignments, timesheets, and automated billing reports.",
    outcome:
      "Connects project delivery, team workload, and billing in one operations dashboard.",
    stack: ["Python", "Flask", "SQLAlchemy", "SQLite / MySQL", "Chart.js"],
    github:
      "https://github.com/kushagramishra1/Client-Project-Tracking-Billing-System",
    live: "https://client-project-tracking-billing-sys.vercel.app/",
  },
  {
    id: "04",
    title: "PeopleHub HRMS",
    icon: "people",
    category: "People operations",
    role: "Full-stack developer",
    summary:
      "A focused HR portal for workforce overview, employee records, daily attendance, and leave request reviews.",
    outcome:
      "Moves routine people operations into a clear dashboard with SQLite-backed records.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SQLite"],
    github: "https://github.com/kushagramishra1/HRMS-Portal",
    live: "https://people-hub-navy.vercel.app/",
  },
  {
    id: "05",
    title: "Kushagra Mishra Portfolio",
    icon: "portfolio",
    category: "Personal site · product storytelling",
    role: "Design + frontend",
    summary:
      "A responsive portfolio presenting projects, technical skills, education, and experience for quick recruiter review.",
    outcome:
      "Turns a broad technical background into a concise, easy-to-explore story.",
    stack: ["React", "TypeScript", "TanStack Start", "Tailwind CSS", "Vercel"],
    github: "https://github.com/kushagramishra1/Portfolio",
    live: "https://portfolio-kushagra14.vercel.app/",
  },
] as const;

export const experience = [
  {
    org: "AICTE–EduSkills, supported by Palo Alto Networks",
    role: "Cybersecurity Virtual Intern",
    dates: "Sep – Nov 2023",
    place: "Remote — India",
    points: [
      "Completed a 10-week structured cybersecurity program under the AICTE–EduSkills NEAT initiative, combining assessed coursework with a mentored project phase.",
      "Applied secure development awareness — authentication, access control, and common web vulnerabilities — to subsequent full-stack project work.",
    ],
  },
] as const;

export const skillGroups = [
  {
    title: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Bootstrap 5",
      "Chart.js",
      "Responsive design",
      "Jinja2",
    ],
  },
  {
    title: "Backend",
    items: [
      "Python",
      "Flask",
      "Flask-Login",
      "REST APIs",
      "JSON",
      "CORS",
      "Session auth",
      "RBAC",
      "MVC",
    ],
  },
  {
    title: "Databases",
    items: [
      "SQL",
      "MySQL",
      "SQLite",
      "SQLAlchemy",
      "Schema design",
      "Aggregate queries",
      "CRUD",
    ],
  },
  {
    title: "Tools",
    items: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "Vercel",
      "Render",
      "gunicorn",
      "VS Code",
      "npm",
      "Vite",
      "Chrome DevTools",
    ],
  },
] as const;

export const education = {
  school: "GL Bajaj Institute of Technology and Management",
  degree: "B.Tech in Computer Science and Engineering",
  dates: "2022 – 2026",
  place: "Greater Noida, Uttar Pradesh, India",
  gpa: "CGPA 7.05 / 10",
  coursework: [
    "Data Structures and Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
    "Software Engineering",
  ],
} as const;

export const certifications = [
  "Python Essentials 1 & 2 — Cisco Networking Academy",
  "Introduction to MongoDB — MongoDB University",
  "Google Cloud Study Jams — GDSC",
  "CCNA: Introduction to Networks — Cisco",
  "Cyber Security Training — MeitY, Government of India",
] as const;

export const activities = [
  "Team Lead, Deepfake Detection Major Project — coordinated a four-member team, assigned development tasks, tracked progress, and presented technical work at faculty reviews.",
  "Continuous DSA practice on LeetCode and GeeksforGeeks; participant in college hackathons and coding events.",
] as const;
