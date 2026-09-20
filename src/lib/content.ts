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
    category: "Full-stack operations platform",
    role: "Lead developer",
    outcome: "Streamlined project tracking, staffing, and invoice visibility for internal operations.",
    blurb:
      "Full-stack Flask application built to manage client work, employee assignments, logged hours, and billing from a single system.",
    stack: [
      "Python",
      "Flask",
      "SQLAlchemy",
      "MySQL",
      "Bootstrap 5",
      "Chart.js",
    ],
    highlights: [
      "Modeled a relational data layer with users, projects, assignments, timesheets, and billing records to keep reporting and access control consistent.",
      "Added session-based authentication and role-aware routes so admins, employees, and managers only see the actions relevant to them.",
      "Built dashboards and project filters to help teams review workload and financial health without manual spreadsheet maintenance.",
    ],
    github:
      "https://github.com/kushagramishra1/Client-Project-Tracking-Billing-System",
    live: null,
  },
  {
    id: "02",
    title: "Personal Portfolio Site",
    year: "2025",
    category: "Portfolio / product marketing",
    role: "Designer + frontend engineer",
    outcome: "Created a polished portfolio that gives recruiters a clear snapshot of work and capability in under a minute.",
    blurb:
      "A responsive portfolio built to communicate strong frontend judgment, product thinking, and technical execution in a hiring-friendly layout.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Vercel"],
    highlights: [
      "Built a modular single-page portfolio with accessible navigation, strong spacing, and concise content hierarchy for quick scanning.",
      "Structured the content into reusable data objects so project, experience, and skill sections are easier to maintain and extend.",
      "Prepared it for deployment with a mobile-friendly layout and a clean public-facing presentation.",
    ],
    github: "https://github.com/kushagramishra1/Kushagra-Mishra",
    live: "https://kushagra-mishra.vercel.app",
  },
  {
    id: "03",
    title: "Deepfake Detection System using Explainable AI",
    year: "2025",
    category: "AI / media safety",
    role: "Team lead",
    outcome: "Delivered a working prototype for media classification with a clear prediction workflow and team-driven delivery.",
    blurb:
      "A team project combining a Flask backend and React frontend to process uploaded media and surface model predictions in a user-friendly flow.",
    stack: ["TensorFlow", "Vision Transformer", "Flask", "React", "OpenCV"],
    highlights: [
      "Designed the API layer for file upload, inference, and JSON-based prediction responses for a simple front-end consumption flow.",
      "Coordinated implementation tasks across the team, kept milestones aligned with academic review checkpoints, and presented results clearly.",
      "Used computer vision pipelines and explainability-focused workflows to create a credible proof of concept around media authenticity analysis.",
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
