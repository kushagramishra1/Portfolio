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
    linkedin: "https://linkedin.com/in/kushagra-mishra",
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
    title: "Client Project Tracking & Billing System",
    year: "2025",
    blurb:
      "Full-stack Flask app for tracking client projects, employee assignments, logged hours, and billing — gated by role from the first request.",
    stack: [
      "Python",
      "Flask",
      "SQLAlchemy",
      "MySQL",
      "Bootstrap 5",
      "Chart.js",
    ],
    highlights: [
      "Server-rendered Jinja2 views with a responsive Bootstrap 5 interface for admins and employees.",
      "Flask-Login session auth with hashed passwords and role-based access on every admin and employee route.",
      "Admin and employee dashboards with Chart.js visualizations and dynamic project search in JavaScript.",
      "Five-table relational schema (users, projects, assignments, timesheets, billing) including a many-to-many employee-to-project model.",
    ],
    github:
      "https://github.com/kushagramishra1/Client-Project-Tracking-Billing-System",
    live: null,
  },
  {
    id: "02",
    title: "Personal Portfolio Site",
    year: "2025",
    blurb:
      "Component-based personal site in Next.js and TypeScript, designed to be scanned in seconds by a hiring manager.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    highlights: [
      "Built and shipped a production portfolio in Next.js and TypeScript with Tailwind CSS.",
      "Responsive, component-based layouts and accessible semantic markup across breakpoints.",
      "Deployed to Vercel with a clean public URL for applications and interviews.",
    ],
    github: "https://github.com/kushagramishra1/Kushagra-Mishra",
    live: "https://kushagra-mishra.vercel.app",
  },
  {
    id: "03",
    title: "Deepfake Detection System using Explainable AI",
    year: "2025",
    blurb:
      "Team-led major project: a Flask REST API and React client that classify uploaded media and return live predictions as JSON.",
    stack: ["TensorFlow", "Vision Transformer", "Flask", "React", "OpenCV"],
    highlights: [
      "Flask REST API with CORS that accepts uploaded media, runs model inference, and returns JSON predictions.",
      "React + Vite client for image upload and live prediction display, consuming the Flask API.",
      "Led a four-member team: assigned development tasks, tracked progress, and presented at faculty reviews.",
    ],
    github:
      "https://github.com/kushagramishra1/DeepFake-Detection-System-using-CNNs-and-Explainable-AI",
    live: null,
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
