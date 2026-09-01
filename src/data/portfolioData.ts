export interface Experience {
  company: string;
  title: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  highlights: string[];
  architecture?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Achievement {
  title: string;
  source: string;
  date?: string;
  icon?: string;
}

export const portfolioData = {
  personal: {
    name: "Mihir Singh Chouhan",
    title: "Full Stack Developer",
    email: "mschouhan6855@gmail.com",
    linkedin: "https://www.linkedin.com/in/mihir-singh-chouhan",
    github: "",
    location: "India",
    availability: "Available for opportunities",
    yearsExperience: "1.8+",
  },
  hero: {
    badge: "FULL STACK DEVELOPER",
    heading: "Building scalable software for real-world problems.",
    highlightText: "scalable software",
    description: "I build production-ready applications using Java, Spring Boot, React, Microservices and cloud-native technologies.",
  },
  about: {
    title: "Engineering with purpose.",
    description: "I enjoy turning complex requirements into simple, scalable and maintainable software. My focus is backend architecture, distributed systems, APIs and seamless frontend experiences.",
    stats: [
      { value: "1.5+", label: "Years Experience" },
      { value: "10M+", label: "Users Supported" },
      { value: "90%+", label: "Unit Test Coverage" },
      { value: "30%", label: "API Latency Improvement" },
    ],
  },
  philosophy: [
    {
      title: "Scalable",
      description: "Design systems that can handle growing traffic and users.",
      icon: "TrendingUp",
    },
    {
      title: "Reliable",
      description: "Focus on testing, error handling, observability and fault tolerance.",
      icon: "Shield",
    },
    {
      title: "Secure",
      description: "Build APIs using JWT, OAuth2 and secure authentication practices.",
      icon: "Lock",
    },
    {
      title: "Maintainable",
      description: "Apply SOLID principles and modular architecture.",
      icon: "Code",
    },
  ],
  experience: [
    {
      company: "Digi Mantra Labs",
      title: "Java Full Stack Developer",
      period: "December 2024 – Present",
      description: "Building scalable backend systems and interactive frontends",
      responsibilities: [
        "Built REST APIs using Spring Boot, JPA and MySQL",
        "Implemented JWT authentication",
        "Implemented global exception handling",
        "Added structured logging using SLF4J and Log4j",
        "Built reusable React components",
        "Used Redux for state management",
        "Optimized SQL queries and database indexing",
        "Reduced API latency by 30%",
        "Documented APIs using Swagger/OpenAPI",
        "Worked in Agile development and Git-based CI workflows",
      ],
      technologies: ["Java", "Spring Boot", "React", "Redux", "MySQL", "JWT", "REST APIs"],
    },
    {
      company: "Coding Blocks",
      title: "Summer Internship — Web Development",
      period: "June 2024 – July 2024",
      description: "Developed responsive web applications",
      responsibilities: [
        "Built responsive React applications",
        "Worked with HTML, CSS and JavaScript",
        "Implemented REST integrations",
        "Improved UI performance and user experience",
        "Used Bootstrap",
      ],
      technologies: ["React", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
    },
  ] as Experience[],
  projects: [
    {
      id: "gcash",
      title: "GCash",
      category: "Fintech / Distributed Systems",
      shortDescription: "Fintech Microservices Payment Platform",
      description: "Designed and enhanced a microservices-based payment platform supporting high-volume transactions for systems serving 80M+ users.",
      technologies: [
        "Java",
        "Spring Boot",
        "Next.js",
        "Redis",
        "Kafka",
        "Kubernetes",
        "Docker",
        "Jenkins",
        "GitLab",
        "Microservices",
        "Material UI",
      ],
      highlights: [
        "Payment, Users, Ledger and Notifications microservices",
        "Event-driven architecture using Kafka",
        "Redis distributed caching",
        "Idempotent payment APIs",
        "SOLID-based modular architecture",
        "90%+ unit test coverage",
        "Docker containerization",
        "Kubernetes orchestration",
        "CI/CD with Jenkins and GitLab",
      ],
      architecture: "Client → API Gateway → Payment Service → Kafka → Ledger Service → Notification Service",
    },
    {
      id: "earthlink",
      title: "Earthlink",
      category: "Customer Communication / Enterprise Platform",
      shortDescription: "Customer Support & Communication Platform",
      description: "Developed scalable dashboard modules for managing customer tickets, profiles and communication workflows.",
      technologies: [
        "React",
        "Redux Toolkit",
        "Fastify",
        "GraphQL",
        "Microsoft Azure AD",
        "Google APIs",
        "Formik",
        "Material UI",
        "Microservices",
      ],
      highlights: [
        "React dashboard modules",
        "GraphQL APIs with Fastify",
        "Azure AD authentication",
        "JWT and OAuth2",
        "Google Calling integration",
        "Google Maps integration",
        "Dynamic forms using Formik",
        "Material UI components",
      ],
    },
  ] as Project[],
  skills: [
    {
      category: "Languages",
      items: ["Java", "JavaScript", "C++", "C"],
    },
    {
      category: "Backend",
      items: ["Spring Boot", "Spring Cloud", "REST APIs", "JPA", "Hibernate", "Microservices", "gRPC"],
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "Redux Toolkit", "HTML5", "CSS3", "Tailwind", "Material UI"],
    },
    {
      category: "Databases",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    },
    {
      category: "DevOps & Cloud",
      items: ["Docker", "Kubernetes", "Rancher", "Argo CD", "Jenkins", "GitLab CI/CD"],
    },
    {
      category: "Security",
      items: ["JWT", "OAuth2", "Azure AD"],
    },
    {
      category: "Tools",
      items: ["Git", "Jira", "Postman", "IntelliJ", "Swagger", "JUnit", "Mockito", "Log4j", "SLF4J"],
    },
  ] as Skill[],
  achievements: [
    {
      title: "5★ HackerRank — C++",
      source: "HackerRank",
      icon: "Star",
    },
    {
      title: "4★ HackerRank — Java",
      source: "HackerRank",
      icon: "Star",
    },
    {
      title: "120+ Active Problem-Solving Days",
      source: "LeetCode",
      icon: "TrendingUp",
    },
  ] as Achievement[],
  education: [
    {
      institution: "Lovely Professional University",
      degree: "Master of Computer Applications — MCA",
      cgpa: "8.00",
      year: "August 2023",
    },
  ],
  certifications: [
    {
      title: "SQL Injection Attack",
      issuer: "EC Council",
      date: "November 2024",
    },
    {
      title: "Summer Internship — Web Development",
      issuer: "Coding Blocks",
      date: "June 2024",
    },
  ],
  technologies: [
    "Java",
    "Spring Boot",
    "React",
    "Next.js",
    "Microservices",
    "Kafka",
    "Redis",
    "Docker",
    "Kubernetes",
    "AWS",
    "Git",
    "Jenkins",
  ],
};
