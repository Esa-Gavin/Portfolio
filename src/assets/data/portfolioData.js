// Portfolio Data
export const personalInfo = {
  name: "Gavin Kariuki",
  title: "Frontend Developer",
  subtitle: "ReactJS Specialist",
  location: "Nairobi, Kenya",
  email: "esa.dev@icloud.com",
  github: "https://github.com/Esa-Gavin",
  linkedin: "https://www.linkedin.com/in/gavin-kariuki/",
  bio: {
    intro: "I'm a passionate Frontend Developer based in Nairobi, specializing in building exceptional digital experiences with React and modern web technologies. With a strong foundation in JavaScript and a keen eye for design, I transform ideas into elegant, user-friendly applications.",
    detail: "My journey in web development has led me to master the React ecosystem, including hooks, context API, and state management patterns. I'm equally comfortable working with backend technologies like PHP and Laravel, enabling me to build full-stack solutions. I believe in writing clean, maintainable code and staying current with the latest industry trends and best practices.",
    passion: "When I'm not coding, I'm exploring new technologies, contributing to open-source projects, and continuously learning to expand my skill set. I'm particularly interested in creating immersive user experiences that blend functionality with aesthetic appeal."
  },
  resumeUrl: "#" // Add your resume URL here
};

export const skills = {
  frontend: [
    { name: "React", icon: "FaReact" },
    { name: "JavaScript", icon: "SiJavascript" },
    { name: "HTML5", icon: "FaHtml5" },
    { name: "CSS3", icon: "FaCss3Alt" },
    { name: "Vue.js", icon: "FaVuejs" },
    { name: "React Native", icon: "FaReact" },
    { name: "Tailwind CSS", icon: "SiTailwindcss" }
  ],
  backend: [
    { name: "Node.js", icon: "FaNodeJs" },
    { name: "PHP", icon: "FaPhp" },
    { name: "Laravel", icon: "FaLaravel" },
    { name: "GraphQL", icon: "SiGraphql" }
  ],
  tools: [
    { name: "Git", icon: "FaGitAlt" },
    { name: "GitHub", icon: "FaGithub" },
    { name: "VS Code", icon: "FaCode" },
    { name: "npm", icon: "FaNpm" },
    { name: "Webpack", icon: "SiWebpack" }
  ],
  concepts: [
    { name: "Context API", icon: "FaReact" },
    { name: "Hooks", icon: "FaReact" },
    { name: "Reducers", icon: "FaReact" },
    { name: "REST APIs", icon: "FaServer" },
    { name: "Responsive Design", icon: "FaMobile" }
  ]
};

export const projects = [
  {
    id: 1,
    title: "MerchandiseCentral",
    description: "A full-stack e-commerce platform for merchandise management built with React and PHP. Features include product catalog, shopping cart functionality, and admin dashboard for inventory management.",
    longDescription: "MerchandiseCentral is a comprehensive e-commerce solution that combines a modern React frontend with a robust PHP backend. The application provides seamless product browsing, advanced search capabilities, and a secure checkout process. The admin panel allows for easy product management, order tracking, and customer analytics.",
    technologies: ["React", "PHP", "JavaScript", "CSS3", "MySQL"],
    githubUrl: "https://github.com/Esa-Gavin/MerchandiseCentral",
    liveUrl: null,
    image: "/project-placeholder-1.jpg",
    featured: true,
    category: "Full-Stack"
  },
  {
    id: 2,
    title: "WorkFlowHub",
    description: "A collaborative workflow management application built with Laravel and Vue.js. Streamlines project management with task tracking, team collaboration features, and real-time updates.",
    longDescription: "WorkFlowHub is designed to enhance team productivity by providing an intuitive interface for managing projects and tasks. Built with Laravel's powerful backend and Vue.js's reactive frontend, it offers features like task assignment, progress tracking, deadline management, and team communication tools. The application supports multiple projects and provides detailed analytics for project performance.",
    technologies: ["Laravel", "Vue.js", "JavaScript", "PHP", "MySQL"],
    githubUrl: "https://github.com/Esa-Gavin/WorkFlowHub",
    liveUrl: null,
    image: "/project-placeholder-2.jpg",
    featured: true,
    category: "Full-Stack"
  },
  {
    id: 3,
    title: "Login-App",
    description: "A React authentication application demonstrating advanced state management using Context API, useReducer hooks, and side effects handling. Features secure login/logout functionality with form validation.",
    longDescription: "This project showcases modern React patterns and best practices for handling authentication flows. It implements the Context API for global state management, useReducer for complex state logic, and useEffect for side effects. The application includes form validation, protected routes, session management, and demonstrates clean code architecture with reusable components.",
    technologies: ["React", "JavaScript", "Context API", "Hooks", "CSS3"],
    githubUrl: "https://github.com/Esa-Gavin/Login-App",
    liveUrl: null,
    image: "/project-placeholder-3.jpg",
    featured: true,
    category: "Frontend"
  },
  {
    id: 4,
    title: "React Design Patterns",
    description: "A comprehensive exploration of React design patterns and best practices. Includes implementations of common patterns like HOCs, Render Props, Compound Components, and Custom Hooks.",
    longDescription: "This educational project serves as a reference for React developers looking to implement advanced design patterns. It covers various architectural approaches, component composition techniques, and performance optimization strategies. Each pattern is demonstrated with practical examples and detailed explanations.",
    technologies: ["React", "JavaScript", "Design Patterns"],
    githubUrl: "https://github.com/Esa-Gavin/React-design-patterns",
    liveUrl: null,
    image: "/project-placeholder-4.jpg",
    featured: false,
    category: "Frontend"
  },
  {
    id: 5,
    title: "GraphQL-React Integration",
    description: "A project demonstrating GraphQL integration with React for efficient data fetching. Showcases query optimization, mutations, and real-time subscriptions.",
    longDescription: "This application explores the power of GraphQL in modern React applications. It demonstrates how to set up Apollo Client, write efficient queries and mutations, handle caching, and implement real-time features using subscriptions. The project highlights the benefits of GraphQL over traditional REST APIs.",
    technologies: ["React", "GraphQL", "Apollo Client", "JavaScript"],
    githubUrl: "https://github.com/Esa-Gavin/GraphQL-React",
    liveUrl: null,
    image: "/project-placeholder-5.jpg",
    featured: false,
    category: "Frontend"
  },
  {
    id: 6,
    title: "Fetchify",
    description: "A React Native mobile application for consuming and displaying data from various APIs. Features include data caching, offline support, and smooth animations.",
    longDescription: "Fetchify is a cross-platform mobile application built with React Native that demonstrates best practices for API integration in mobile apps. It includes features like pull-to-refresh, infinite scrolling, image optimization, and offline data persistence. The app showcases responsive design principles adapted for mobile interfaces.",
    technologies: ["React Native", "JavaScript", "REST API", "AsyncStorage"],
    githubUrl: "https://github.com/Esa-Gavin/Fetchify",
    liveUrl: null,
    image: "/project-placeholder-6.jpg",
    featured: false,
    category: "Mobile"
  }
];

export const experience = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Freelance",
    location: "Nairobi, Kenya",
    period: "2021 - Present",
    description: "Developing modern web applications using React, Vue.js, and other cutting-edge technologies. Working with clients to transform their ideas into functional, beautiful digital products.",
    responsibilities: [
      "Building responsive web applications with React and Vue.js",
      "Implementing modern UI/UX designs with attention to detail",
      "Collaborating with clients to understand requirements and deliver solutions",
      "Writing clean, maintainable, and well-documented code"
    ]
  }
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Esa-Gavin",
    icon: "FaGithub"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/gavin-kariuki/",
    icon: "FaLinkedin"
  }
];
