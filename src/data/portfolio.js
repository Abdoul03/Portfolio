// Shared bilingual content for Abdoul Ibrahima Samaké's portfolio
const PORTFOLIO = {
  profile: {
    name: "Abdoul Ibrahima Samaké",
    initials: "AS",
    avatar: "https://avatars.githubusercontent.com/u/101934271?v=4",
    location: "Bamako, Mali",
    email: "samabdoul03@gmail.com",
    phone: "+223 71 26 78 13",
    github: "https://github.com/Abdoul03",
    linkedin: "https://www.linkedin.com/in/doul/",
    cv: "cv.pdf",
    role: { fr: "Développeur Full Stack", en: "Full Stack Developer" },
    tagline: {
      fr: "Je conçois des applications web & mobiles complètes — du backend Spring Boot & Node aux interfaces React & Flutter.",
      en: "I build complete web & mobile apps — from Spring Boot & Node backends to React & Flutter interfaces.",
    },
    available: { fr: "Ouvert aux opportunités", en: "Open to opportunities" },
  },
  about: {
    fr: [
      "Développeur full stack basé à Bamako, je transforme des idées en produits web et mobiles utilisables. Je travaille aujourd'hui à la Fondation Tuwindi après un parcours à l'Orange Digital Center.",
      "J'aime autant structurer une API propre côté serveur que soigner une interface fluide côté client. Mon terrain de jeu : Java/Spring Boot, l'écosystème JavaScript (React, Node) et le mobile avec Flutter et React Native.",
    ],
    en: [
      "Full stack developer based in Bamako, I turn ideas into usable web and mobile products. I currently work at the Tuwindi Foundation after training at the Orange Digital Center.",
      "I enjoy designing clean server-side APIs as much as crafting smooth client interfaces. My playground: Java/Spring Boot, the JavaScript ecosystem (React, Node), and mobile with Flutter and React Native.",
    ],
  },
  stats: [
    { value: "3+", label: { fr: "ans d'expérience", en: "years of experience" } },
    { value: "61", label: { fr: "dépôts GitHub", en: "GitHub repositories" } },
    { value: "15+", label: { fr: "technologies", en: "technologies" } },
    { value: "3", label: { fr: "langues parlées", en: "spoken languages" } },
  ],
  skills: [
    { key: "frontend", title: { fr: "Frontend", en: "Frontend" }, items: ["React", "Angular", "React Native", "Flutter", "Ionic", "HTML5", "CSS3"] },
    { key: "backend", title: { fr: "Backend", en: "Backend" }, items: ["Spring Boot", "Node.js", "Express.js", "REST API", "NestJS"] },
    { key: "lang", title: { fr: "Langages", en: "Languages" }, items: ["Java", "JavaScript", "TypeScript", "Dart", "Python", "UML"] },
    { key: "tools", title: { fr: "Outils & Design", en: "Tools & Design" }, items: ["MongoDB", "MySQL", "WordPress", "Figma", "Canva", "Git"] },
  ],
  projects: [
    {
      name: "Kle",
      stack: "NestJS · Flutter ",
      lang: "TypeScript · Dart",
      url: "https://github.com/Abdoul03/Kle_backend",
      desc: {
        fr: "Plateforme de location de véhicules : catalogue de voitures, réservation par dates, gestion des disponibilités et des clients.",
        en: "Vehicle rental platform: car catalog, date-based booking, availability management and customer handling.",
      },
      tags: ["NestJS", "Spring Boot", "Booking"],
    },
    {
      name: "Deez",
      stack: "Flutter · Spring Boot",
      lang: "Dart · Java",
      url: "https://github.com/Abdoul03/Dealz",
      desc: {
        fr: "Application de revente d'objets d'occasion entre particuliers : dépôt d'annonces, recherche par catégorie, messagerie et transactions sécurisées.",
        en: "Peer-to-peer marketplace for second-hand items, in the spirit of Vinted: listings, category search, messaging and secure transactions.",
      },
      tags: ["Flutter", "Marketplace", "Mobile"],
    },
    {
      name: "GlobalShopper",
      stack: "Java · Spring Boot",
      lang: "Java",
      url: "https://github.com/Abdoul03/GlobalShopper",
      desc: {
        fr: "Backend d'une plateforme e-commerce : gestion du catalogue, des commandes et des utilisateurs, construit avec Java et Spring Boot.",
        en: "Backend of an e-commerce platform: catalog, orders and user management, built with Java and Spring Boot.",
      },
      tags: ["Spring Boot", "REST", "Java"],
    },
    {
      name: "Book-Store",
      stack: "MERN Stack",
      lang: "JavaScript",
      url: "https://github.com/Abdoul03/Book-Store",
      desc: {
        fr: "Application de gestion de livres (titre, auteur, année de publication) développée en stack MERN — MongoDB, Express, React, Node.",
        en: "Book management app (title, author, publication year) built with the MERN stack — MongoDB, Express, React, Node.",
      },
      tags: ["MongoDB", "React", "Express", "Node"],
    },
    {
      name: "SpringSecurity",
      stack: "Java · Spring Security",
      lang: "Java",
      url: "https://github.com/Abdoul03/SpringSecurity",
      desc: {
        fr: "Démonstration d'authentification et de contrôle d'accès avec Spring Security : gestion des rôles et sécurisation des routes.",
        en: "Authentication and access-control demo with Spring Security: role management and route protection.",
      },
      tags: ["Spring Security", "Auth", "Java"],
    },
    {
      name: "simple_node_API",
      stack: "Node.js",
      lang: "JavaScript",
      url: "https://github.com/Abdoul03/simple_node_API",
      desc: {
        fr: "API REST légère en Node.js — un point de départ propre pour exposer des ressources et pratiquer les bonnes conventions REST.",
        en: "Lightweight REST API in Node.js — a clean starting point to expose resources and practice solid REST conventions.",
      },
      tags: ["Node.js", "REST", "API"],
    },
  ],
  experience: [
    {
      org: "Fondation Tuwindi",
      place: "Bamako",
      period: { fr: "Jan. 2026 — Présent", en: "Jan 2026 — Present" },
      current: true,
      role: { fr: "Développeur Full Stack", en: "Full Stack Developer" },
      desc: {
        fr: "Conception et développement d'applications web et mobiles au service de projets civiques et technologiques.",
        en: "Design and development of web and mobile applications for civic and tech projects.",
      },
    },
    {
      org: "Orange Digital Center (ODC)",
      place: "Bamako",
      period: { fr: "Fév. 2025 — Déc. 2025", en: "Feb 2025 — Dec 2025" },
      current: false,
      role: { fr: "Développeur Full Stack", en: "Full Stack Developer" },
      desc: {
        fr: "Développement d'applications web et mobiles en parallèle d'une formation qualifiante en développement.",
        en: "Building web and mobile applications alongside a professional development program.",
      },
    },
    {
      org: "Fondation Tuwindi",
      place: "Bamako",
      period: { fr: "Mai 2024 — Fév. 2025", en: "May 2024 — Feb 2025" },
      current: false,
      role: { fr: "Stagiaire développeur web", en: "Web Developer Intern" },
      desc: {
        fr: "Première expérience professionnelle : contribution au développement front et back d'applications internes.",
        en: "First professional experience: contributing to front and back development of internal applications.",
      },
    },
  ],
  education: [
    {
      school: "Orange Digital Center (ODC)",
      place: "Bamako",
      period: { fr: "Fév. 2025 — Déc. 2025", en: "Feb 2025 — Dec 2025" },
      title: { fr: "Certificat en développement web & mobile", en: "Certificate in Web & Mobile Development" },
      note: { fr: "Qualification et formation professionnelles", en: "Professional qualification & training" },
    },
    {
      school: "Institut Universitaire de Gestion (IUG)",
      place: "Bamako",
      period: { fr: "Fév. 2020 — Avr. 2024", en: "Feb 2020 — Apr 2024" },
      title: { fr: "Licence Professionnelle en Informatique de Gestion", en: "Professional Bachelor in Management Computing" },
      note: { fr: "", en: "" },
    },
  ],
  languages: [
    { name: { fr: "Bambara", en: "Bambara" }, level: { fr: "Langue maternelle", en: "Native" }, pct: 100 },
    { name: { fr: "Français", en: "French" }, level: { fr: "Courant", en: "Fluent" }, pct: 95 },
    { name: { fr: "Anglais", en: "English" }, level: { fr: "Intermédiaire", en: "Intermediate" }, pct: 50 },
  ],
  ui: {
    nav: {
      home: { fr: "Accueil", en: "Home" },
      about: { fr: "À propos", en: "About" },
      skills: { fr: "Compétences", en: "Skills" },
      projects: { fr: "Projets", en: "Projects" },
      experience: { fr: "Parcours", en: "Experience" },
      education: { fr: "Formations", en: "Education" },
      contact: { fr: "Contact", en: "Contact" },
    },
    viewProjects: { fr: "Voir les projets", en: "View projects" },
    downloadCv: { fr: "Télécharger le CV", en: "Download CV" },
    viewCode: { fr: "Voir le code", en: "View code" },
    sectionAbout: { fr: "À propos de moi", en: "About me" },
    sectionSkills: { fr: "Stack technique", en: "Tech stack" },
    sectionProjects: { fr: "Projets sélectionnés", en: "Selected projects" },
    sectionExp: { fr: "Expériences", en: "Experience" },
    sectionEdu: { fr: "Formations", en: "Education" },
    sectionContact: { fr: "Travaillons ensemble", en: "Let's work together" },
    contactLead: {
      fr: "Une idée, un poste, une collaboration ? Écrivez-moi, je réponds rapidement.",
      en: "An idea, a role, a collaboration? Drop me a line, I reply quickly.",
    },
    formName: { fr: "Votre nom", en: "Your name" },
    formEmail: { fr: "Votre email", en: "Your email" },
    formMsg: { fr: "Votre message", en: "Your message" },
    formSend: { fr: "Envoyer le message", en: "Send message" },
    formSent: { fr: "Merci ! Votre message est prêt à être envoyé.", en: "Thanks! Your message is ready to send." },
    languagesTitle: { fr: "Langues", en: "Languages" },
    scrollHint: { fr: "Défiler", en: "Scroll" },
  },
}

export default PORTFOLIO
