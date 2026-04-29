import React, { useMemo, useState } from "react";

const Icon = ({ children, size = 18 }) => (
  <span className="icon" style={{ fontSize: size }} aria-hidden="true">
    {children}
  </span>
);

const profile = {
  name: "R. Rahmat Rifai Arsandi",
  headline: "Fullstack Developer & AI Engineer",
  location: "Yogyakarta, Indonesia",
  email: "rifaiarsaa@gmail.com",
  phone: "085156760841",
  github: "https://github.com/svjat4",
  linkedin: "https://www.linkedin.com/in/rrfaiarsa/",
  summary:
    "I build modern web applications, AI-powered systems, and data-driven digital solutions with strong engineering, security, and business perspective.",
};

const categories = [
  { id: "engineering", label: "Engineering", subtitle: "Fullstack, security, system architecture", icon: "⌘" },
  { id: "ai", label: "AI Engineering", subtitle: "Machine learning, NLP, data mining", icon: "🧠" },
  { id: "marketing", label: "Digital Marketing", subtitle: "Growth, analytics, campaign strategy", icon: "📈" },
  { id: "wordpress", label: "WordPress", subtitle: "Landing pages, company profile, CMS", icon: "🌐" },
];

const normalizeCategories = (item) => {
  const raw = item.categories ?? item.category ?? [];
  return Array.isArray(raw) ? raw.flat().filter(Boolean) : [raw].filter(Boolean);
};

const getCategoryLabels = (item) =>
  normalizeCategories(item)
    .map((id) => categories.find((cat) => cat.id === id)?.label)
    .filter(Boolean);

const skills = [
  { title: "Frontend", icon: "⚡", items: ["React", "Next.js", "Vue", "TypeScript", "Tailwind", "Inertia.js"] },
  { title: "Backend", icon: "🧩", items: ["Laravel", "Flask", "Django", "Node.js", "REST API", "MySQL"] },
  { title: "AI & Data", icon: "🧠", items: ["TensorFlow", "NLP", "LDA", "Naive Bayes", "SVM", "Data Pipeline"] },
  { title: "Ops & Strategy", icon: "🛡", items: ["Supabase","Docker", "Git", "VPS", "Grafana", "Kibana", "Google/Meta/TikTok Ads"] },
];

const projects = [
  {
  categories: ["engineering"],
  title: "UMKM Jajanan Magetan Platform",
  type: "Fullstack Web Application",
  image: "https://github.com/user-attachments/assets/610ed022-af31-4648-9252-52f748777cf4",
  description: "A fullstack web platform built with Next.js to showcase and promote local culinary businesses in Magetan, featuring modern UI, dynamic content rendering, and scalable architecture.",
  impact: "Helps local businesses increase digital presence and accessibility, enabling users to explore and discover regional culinary products online.",
  highlights: [
    "Built using Next.js with modern App Router architecture",
    "Dynamic content rendering for showcasing products and vendors",
    "Responsive and SEO-friendly design for better discoverability",
    "Optimized performance for fast loading and smooth user experience",
    "Scalable frontend structure for future feature expansion"
  ],
  stack: ["Next.js", "React", "JavaScript", "SEO Optimization", "Web Performance"],
  github: "https://github.com/svjat4",
  demo: "https://www.jajananmagetan.biz.id/"
  },
  {
    categories: ["engineering", "ai"],
    title: "Brain TOEFL Listening",
    type: "AI / EdTech Web App",
    image: "https://github.com/user-attachments/assets/fa95d7f2-9bf1-436f-9ca5-938ddab38cc5?q=80&w=1200&auto=format&fit=crop",
    description: "A web-based TOEFL Listening learning platform focused on structured practice, modern UI, and accessible learning experience.",
    impact: "Showcases product thinking, frontend engineering, and education technology use case.",
    highlights: ["Interactive learning experience", "Modern TypeScript-based interface", "Education-focused product design"],
    stack: ["React", "TypeScript", "Education", "Web App"],
    github: "https://github.com/svjat4/brain-listening-partB-TOEFL",
    demo: "https://github.com/svjat4/brain-listening-partB-TOEFL",
  },
  {
    categories: ["engineering"],
    title: "Aplikasi Bursa Kerja Khusus",
    type: "Fullstack Web Application",
    image: "https://github.com/user-attachments/assets/b7c47e9f-dcb3-4443-8a4a-1ad62ff7af57?q=80&w=1200&auto=format&fit=crop",
    description: "A fullstack job-board and alumni tracer system for managing vacancies, applicants, admin dashboards, and recruitment workflows.",
    impact: "Digitizes school career center operations and simplifies applicant management.",
    highlights: ["Admin dashboard", "Job posting management", "Applicant registration", "Applicant detail tracking"],
    stack: ["React", "Flask", "Python", "REST API"],
    github: "https://github.com/svjat4/APLIKASI-BURSA-KERJA-KHUSUS",
    demo: "https://github.com/svjat4/APLIKASI-BURSA-KERJA-KHUSUS",
  },
  {
    categories: ["engineering", "ai"],
    title: "Platform Tryout Master",
    type: "Fullstack Web Application",
    image: "https://github.com/user-attachments/assets/f54fb505-ec25-44dc-b0f0-cde0e8eff2e6",
    description: "A fullstack online tryout platform designed to simulate real exam environments with interactive sessions, automated scoring, and performance tracking.",
    impact: "Improves student readiness through real-time evaluation, structured practice, and scalable online assessments.",
    highlights: ["Timer-based tryout sessions", "Automated scoring", "Dashboard system", "Admin panel for exam management"],
    stack: ["React", "Flask", "Python", "REST API"],
    github: "https://tryoutmasterofficial.com/",
    demo: "https://tryoutmasterofficial.com/",
  },
  {
    categories: ["engineering"],
    title: "ArsipGaji",
    type: "Payroll Automation System",
    image: "https://github.com/user-attachments/assets/3782de16-9ae2-449e-9b23-c00c6395830c?q=80&w=1200&auto=format&fit=crop",
    description: "Automated payroll slip delivery and archive system designed to improve administrative efficiency and document traceability.",
    impact: "Reduces repetitive HR administration and improves salary slip documentation.",
    highlights: ["Payroll slip automation", "Document archive", "Operational workflow", "Backend process automation"],
    stack: ["Web App", "Automation", "Backend", "Archive System"],
    github: "https://github.com/svjat4/Arsip-Gaji---Sistem-Kirim-Arsip-Slip-Gaji-Otomatis",
    demo: "https://github.com/svjat4/Arsip-Gaji---Sistem-Kirim-Arsip-Slip-Gaji-Otomatis",
  },
  {
    categories: ["ai"],
    title: "Gojek Sentiment Analysis",
    type: "NLP / Data Mining",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    description: "Sentiment analysis on Gojek app reviews from Google Play and App Store using NLP and machine learning workflow.",
    impact: "Transforms raw user reviews into product insight and sentiment intelligence.",
    highlights: ["Review scraping", "Text preprocessing", "Sentiment classification", "Insight visualization"],
    stack: ["Python", "Jupyter", "NLP", "Data Mining"],
    github: "https://github.com/svjat4/gojek-sentiment-analysis-using-the-model",
    demo: "https://github.com/svjat4/gojek-sentiment-analysis-using-the-model",
  },
  {
    categories: ["ai"],
    title: "RKUHP & KUHP Sentiment Analysis",
    type: "Machine Learning / NLP",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
    description: "Public-opinion analysis using Latent Dirichlet Allocation and Naive Bayes Classifier for topic modeling and sentiment classification.",
    impact: "Combines topic discovery and classification to understand public discourse.",
    highlights: ["Topic modeling with LDA", "Naive Bayes classification", "Text analytics pipeline", "Public opinion analysis"],
    stack: ["Python", "LDA", "Naive Bayes", "NLP"],
    github: "https://github.com/svjat4/analisis-sentimen-RKUHP-KUHP",
    demo: "https://github.com/svjat4/analisis-sentimen-RKUHP-KUHP",
  },
  {
    categories: ["ai"],
    title: "Sentiment Classifier Comparison",
    type: "ML Experiment",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1200&auto=format&fit=crop",
    description: "Comparative experiment of Logistic Regression, Support Vector Machine, and Naive Bayes for text sentiment classification.",
    impact: "Demonstrates model evaluation, experiment design, and machine learning benchmarking.",
    highlights: ["Model comparison", "Evaluation metrics", "Classification experiment", "Machine learning workflow"],
    stack: ["Python", "Scikit-learn", "LR", "SVM", "NBC"],
    github: "https://github.com/svjat4/Sentimen-LR-SVM-NBC",
    demo: "https://github.com/svjat4/Sentimen-LR-SVM-NBC",
  },
  {
    categories: ["wordpress"],
    title: "Tour dan Travel Website",
    type: "WordPress / Business Website",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop",
    description: "WordPress website for travel business presentation, service catalog, and customer acquisition landing page.",
    impact: "Supports brand credibility and lead generation through a professional web presence.",
    highlights: ["Business landing page", "Service architecture", "Responsive CMS", "SEO-friendly structure"],
    stack: ["WordPress", "CMS", "Landing Page", "SEO"],
    github: "https://github.com/svjat4",
    demo: "https://github.com/svjat4",
  },
  {
    categories: ["wordpress"],
    title: "Company & Community Websites",
    type: "WordPress / CMS Portfolio",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
    description: "WordPress projects including JubeJam, AdiraKreasi, CahayaIbu, TryoutMaster, and masjidarraudhah.",
    impact: "Covers practical CMS delivery for organizations, communities, and business use cases.",
    highlights: ["Company profile", "Community website", "Content management", "Responsive design"],
    stack: ["WordPress", "Elementor", "CMS", "Web Design"],
    github: "https://github.com/svjat4",
    demo: "https://github.com/svjat4",
  },
  {
  categories: ["marketing"],
  title: "Digital Marketing Campaign & Performance Optimization",
  type: "Paid Ads & Analytics Project",
  image: "https://github.com/user-attachments/assets/8aa46241-0b0d-49c8-87a5-fdd5af95c510?q=80&w=1200&auto=format&fit=crop",
  description: "Managed and optimized large-scale digital advertising campaigns across multiple audiences using data-driven strategies, focusing on engagement, conversions, and cost efficiency.",
  impact: "Successfully handled over Rp 200M+ in ad spend, generating 45M+ impressions, 10M+ reach, and 37K+ conversions with optimized cost-per-click and engagement rates.",
  highlights: [
    "Managed advertising budget exceeding Rp 200,000,000",
    "Achieved 45M+ total impressions and 10M+ audience reach",
    "Generated 37,000+ conversions (message interactions)",
    "Optimized CTR up to 6.44% across campaigns",
    "Maintained low CPC averaging around Rp 189 per click",
    "Performed campaign analysis and performance optimization across multiple segments"
  ],
  stack: ["Meta Ads", "Google Analytics", "Data Analysis", "A/B Testing", "Audience Targeting"],
  shopee: "https://www.instagram.com/asccomputer/",
  demo: "https://github.com/svjat4",
  },
  {
  categories: ["marketing"],
  title: "Google Ads Campaign & Conversion Optimization",
  type: "Search Ads & Performance Marketing",
  image: "https://github.com/user-attachments/assets/bd2a2383-ef1c-41cd-a10a-d37287fca1ea?q=80&w=1200&auto=format&fit=crop",
  description: "Designed and optimized Google Ads campaigns focusing on high-intent search traffic to drive conversions efficiently through keyword targeting and performance analysis.",
  impact: "Generated 57 conversions from 302 clicks with a high conversion rate (~18%) while maintaining low acquisition cost (~Rp 4K per conversion).",
  highlights: [
    "Managed Google Ads search campaign with targeted keyword strategy",
    "Achieved high conversion rate (~18%) from intent-based traffic",
    "Optimized cost-per-conversion to remain highly efficient",
    "Performed keyword targeting, bidding optimization, and campaign analysis",
    "Analyzed user intent and refined ads for better performance"
  ],
  stack: ["Google Ads", "Keyword Research", "Conversion Tracking", "Analytics", "Performance Optimization"],
  github: "https://github.com/svjat4",
  demo: "https://github.com/svjat4",
  },
];

const experiences = [
  {
    categories: ["engineering", "ai"],
    title: "Fullstack 24/7",
    company: "PT Botika Indonesia",
    period: "Jan 2024 - Jan 2025",
    description: "Built and supported internal systems for calendar management, omnichannel monitoring, and chatbot operations.",
    points: ["Developed custom admin calendar using Vue, Inertia, Next.js, and Laravel.", "Integrated internal calendar workflows with Laravel-based systems.", "Monitored omnichannel and chatbot operations using Grafana and Kibana."],
  },
  {
    categories: ["engineering"],
    title: "Fullstack & Network Engineering Intern",
    company: "PT SYDECO",
    period: "Sep - Des 2023",
    description: "Worked across security hardening, VPS architecture, and Django-based internal dashboard development.",
    points: ["Implemented iptables and infrastructure hardening.", "Managed and audited corporate VPS security.", "Designed internal dashboard using Django and Python."],
  },
  {
    categories: ["engineering"],
    title: "Security Engineer Intern",
    company: "PT Teknologi Server Indonesia",
    period: "Jul 2023 - Sep 2023",
    description: "Contributed to server security, system architecture, and internal information system development.",
    points: ["Audited and strengthened company server infrastructure.", "Designed employee information system using Laravel.", "Produced professional company profile video content."],
  },
  {
    categories: ["ai"],
    title: "Machine Learning Student",
    company: "Bangkit Academy 2023",
    period: "Feb 2023 - Jun 2023",
    description: "Completed machine learning track with focus on TensorFlow modeling, data pipelines, and end-to-end ML application.",
    points: ["Built scalable deep learning models with TensorFlow.", "Engineered data cleaning and validation pipelines.", "Contributed to Android-based skin diagnosis application architecture."],
  },
  {
    categories: ["ai", "engineering"],
    title: "Data Visualization & Corporate Educator",
    company: "PT Kode Inovasi Teknologi",
    period: "Apr 2023 - Jun 2023",
    description: "Built data visualization dashboard and supported corporate education and bootcamp development.",
    points: ["Developed student dashboard for Yogyakarta using Python and Flask.", "Presented company and industry insights to audiences.", "Supported bootcamp and upskilling program management."],
  },
  {
    categories: ["marketing"],
    title: "Digital Marketing Manager",
    company: "Professional Experience",
    period: "Feb 2024 - Feb 2025",
    description: "Led growth strategy, paid ads, branding, analytics, and omnichannel performance improvements.",
    points: ["Increased revenue from Rp150M to Rp500M through data-driven marketing strategy.", "Managed Google, Meta, and TikTok Ads with ROI/ROAS focus.", "Led content, branding, analytics, market intelligence, and cross-channel optimization."],
  },
  {
    categories: ["marketing"],
    title: "Digital Marketing Specialist",
    company: "FTTI Universitas Jenderal Achmad Yani Yogyakarta",
    period: "Aug 2021 - Mar 2023",
    description: "Managed full-cycle content production, paid ads strategy, analytics, and SEO/SEM execution for faculty growth.",
    points: ["Handled video production from ideation to editing.", "Implemented paid ads and SEO/SEM strategy.", "Analyzed ROI/ROAS and Google Analytics performance data."],
  },
  {
    categories: ["marketing"],
    title: "Marketplace Specialist",
    company: "CV Sinar Surya",
    period: "Aug 2022 - Sep 2022",
    description: "Managed marketplace operations, paid ads execution, content planning, and store performance monitoring.",
    points: ["Optimized e-commerce operations across marketplaces and social media.", "Executed paid ads to increase conversion.", "Coordinated performance monitoring and logistics with operational teams."],
  },
  {
    categories: ["marketing"],
    title: "Digital Marketing & Temporary Teacher",
    company: "SMK YKP Magetan",
    period: "Jul 2019 - Aug 2020",
    description: "Combined technical teaching with visual content production and digital marketing support.",
    points: ["Taught computer and networking materials.", "Created promotional graphic design and video content.", "Managed digital content strategy and ads optimization."],
  },
];

const certificates = [
  "TensorFlow: Data and Deployment - Coursera",
  "MikroTik Certified Network Associate - MikroTik",
  "Cyber Security Foundation Professional Certificate - CertiProf",
  "Network Administrator - BNSP",
];

function Tabs({ active, setActive, label }) {
  return (
    <div className="tabs" aria-label={label}>
      {categories.map((cat) => (
        <button key={cat.id} className={`tab ${active === cat.id ? "active" : ""}`} onClick={() => setActive(cat.id)}>
          <span>{cat.icon}</span>
          <strong>{cat.label}</strong>
          <small>{cat.subtitle}</small>
        </button>
      ))}
    </div>
  );
}

function CategoryBadges({ item }) {
  return (
    <div className="category-badges">
      {getCategoryLabels(item).map((label) => (
        <span key={label}>{label}</span>
      ))}
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose} aria-label="Close project detail">
          ×
        </button>
        <img className="modal-image" src={project.image} alt={project.title} />

        <div className="modal-content">
          <CategoryBadges item={project} />
          <span className="eyebrow">{project.type}</span>
          <h3>{project.title}</h3>
          <p>{project.description}</p>

          <div className="impact-box">
            <strong>Impact:</strong> {project.impact}
          </div>

          <div className="detail-grid">
            <div>
              <h4>Key Highlights</h4>
              <ul>{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>

            <div>
              <h4>Tech Stack</h4>
              <div className="tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
            </div>
          </div>

          <div className="modal-actions">
            <a href={project.github} target="_blank" rel="noreferrer" className="btn primary">
              View Project <Icon>↗</Icon>
            </a>
            <a href={project.demo} target="_blank" rel="noreferrer" className="btn ghost">
              Open Detail <Icon>↗</Icon>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [activeProject, setActiveProject] = useState("engineering");
  const [activeExperience, setActiveExperience] = useState("engineering");
  const [selectedProject, setSelectedProject] = useState(null);

  const activeProjectInfo = categories.find((cat) => cat.id === activeProject);
  const activeExperienceInfo = categories.find((cat) => cat.id === activeExperience);

  const filteredProjects = useMemo(
    () => projects.filter((p) => normalizeCategories(p).includes(activeProject)),
    [activeProject]
  );

  const filteredExperiences = useMemo(
    () => experiences.filter((e) => normalizeCategories(e).includes(activeExperience)),
    [activeExperience]
  );

  return (
    <main>
      <section className="hero section" id="home">
        <div className="hero-bg hero-bg-one" />
        <div className="hero-bg hero-bg-two" />

        <nav className="nav">
          <a href="#home" className="brand">sifay</a>
          <div className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy reveal">
            <div className="status-pill">
              <Icon>✦</Icon> Available for impactful tech roles
            </div>

            <h1>
              Building <span className="text-glow">digital products</span> with code, AI, and growth mindset.
            </h1>

            <h2>{profile.headline}</h2>
            <p>{profile.summary}</p>

            <div className="hero-metrics">
              <div><strong>Rp150M → Rp500M</strong><span>Growth impact</span></div>
              <div><strong>Fullstack + AI</strong><span>Core specialization</span></div>
              <div><strong>Security-aware</strong><span>Engineering mindset</span></div>
            </div>

            <div className="hero-actions">
              <a className="btn primary" href="/CV-Rahmat-Rifai-Arsandi.pdf" target="_blank" rel="noreferrer">
                Download CV <Icon>↓</Icon>
              </a>
              <a className="btn ghost" href={profile.github} target="_blank" rel="noreferrer">
                GitHub <Icon>↗</Icon>
              </a>
              <a className="btn ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn <Icon>in</Icon>
              </a>
            </div>
          </div>

          <div className="hero-card reveal delay">
            <div className="orb" />
            <div className="avatar">R</div>
            <span className="eyebrow">R. Rahmat Rifai Arsandi</span>
            <span className="eyebrow">Professional Focus</span>
            <h3>Tech + AI + Business Hybrid</h3>
            <p>
              Building practical products with engineering depth, AI capability, security awareness, and growth-oriented business thinking.
            </p>

            <div className="hero-stack">
              <span>React</span>
              <span>Laravel</span>
              <span>Flask</span>
              <span>TensorFlow</span>
              <span>Security</span>
              <span>Growth</span>
            </div>

            <div className="meta">
              <Icon>📍</Icon> {profile.location}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="section-heading">
          <span className="eyebrow">About</span>
          <h2>Engineer who understands product, data, security, and growth.</h2>
        </div>

        <div className="about-card">
          <p>
            Fullstack Developer dan AI Engineer yang berfokus pada pengembangan aplikasi web modern, sistem internal, otomasi workflow, serta solusi berbasis data dan machine learning. Saya memiliki pengalaman dalam membangun dashboard, backend system, integrasi frontend, security hardening, dan analisis NLP. Dengan kombinasi kemampuan engineering, AI, dan business strategy, saya mampu merancang solusi teknologi yang scalable, aman, user-friendly, dan berdampak langsung pada kebutuhan bisnis.
          </p>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section-heading">
          <span className="eyebrow">Capabilities</span>
          <h2>Technical stack aligned with real-world product delivery.</h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.title}>
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <div className="tags">{skill.items.map((item) => <span key={item}>{item}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-heading row">
          <div>
            <span className="eyebrow">Selected Projects</span>
            <h2>Curated works by specialization.</h2>
            <p className="section-note">
              Showing: <strong>{activeProjectInfo?.label}</strong> — {filteredProjects.length} selected project{filteredProjects.length > 1 ? "s" : ""}
            </p>
          </div>

          <a href={profile.github} target="_blank" rel="noreferrer" className="inline-link">
            View all repositories <Icon>↗</Icon>
          </a>
        </div>

        <Tabs active={activeProject} setActive={setActiveProject} label="Project categories" />

        <div className="project-grid">
          {filteredProjects.map((project) => (
            <button className="project-card" key={project.title} onClick={() => setSelectedProject(project)}>
              <img src={project.image} alt={project.title} />
              <div className="project-body">
                <CategoryBadges item={project} />
                <span className="eyebrow">{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">{project.stack.slice(0, 4).map((item) => <span key={item}>{item}</span>)}</div>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="section" id="experience">
        <div className="section-heading">
          <span className="eyebrow">Experience</span>
          <h2>Professional journey mapped by expertise.</h2>
          <p className="section-note">
            Showing: <strong>{activeExperienceInfo?.label}</strong> — {filteredExperiences.length} experience{filteredExperiences.length > 1 ? "s" : ""}
          </p>
        </div>

        <Tabs active={activeExperience} setActive={setActiveExperience} label="Experience categories" />

        <div className="timeline">
          {filteredExperiences.map((exp) => (
            <article className="timeline-item" key={`${exp.title}-${exp.period}`}>
              <div className="timeline-dot">•</div>
              <div>
                <CategoryBadges item={exp} />
                <span>{exp.period}</span>
                <h3>{exp.title}</h3>
                <strong>{exp.company}</strong>
                <p>{exp.description}</p>
                <ul>{exp.points.map((point) => <li key={point}>{point}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section split" id="education">
        <div className="panel">
          <div className="skill-icon">🎓</div>
          <span className="eyebrow">Education</span>
          <h2>Universitas Jenderal Achmad Yani Yogyakarta</h2>
          <p>S-1 Informatika · IPK 3.63</p>
          <p>SMK YKP Magetan · Teknik Komputer Jaringan</p>
        </div>

        <div className="panel">
          <div className="skill-icon">🏅</div>
          <span className="eyebrow">Certificates</span>
          <ul className="cert-list">{certificates.map((cert) => <li key={cert}>{cert}</li>)}</ul>
        </div>
      </section>

      <section className="section contact" id="contact">
        <span className="eyebrow">Contact</span>
        <h2>Let’s build useful, secure, and intelligent products.</h2>
        <p>Open for Fullstack Developer, AI Engineer, Software Engineer, and technology-driven strategic roles.</p>

        <div className="contact-actions">
          <a className="btn primary" href={`mailto:${profile.email}`}>
            Email Me <Icon>✉</Icon>
          </a>
          <a className="btn ghost" href={`https://wa.me/62${profile.phone.substring(1)}`} target="_blank" rel="noreferrer">
            WhatsApp <Icon>☎</Icon>
          </a>
          <a className="btn ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <Icon>in</Icon>
          </a>
        </div>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} R.M.T Rahmat Rifai Arsandi. Built with React.</p>
      </footer>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </main>
  );
}
