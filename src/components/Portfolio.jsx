import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profilePic from '../assets/profile.jpeg';
import './Portfolio.css';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode(!darkMode);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const skills = [
    "Java", "Angular", "Spring Boot", "React", "REST APIs", "TypeScript",
    "Microservices", "HTML5/CSS3/JavaScript", "Maven", "JBoss", "Oracle SQL",
    "MySQL", "Component Architecture", "Git", "CI/CD", "Postman", "Jira",
    "UI Performance Optimization", "GitHub Copilot", "Selenium"
  ];

  const certifications = [
    {
      title: "AI with GitHub Copilot for Java & Spring Boot",
      issuer: "Udemy",
      date: "Feb 2025",
      id: "3be2c887-f919-4f2e-b314-ecd995dcfe7b",
      link: "https://www.udemy.com/certificate/UC-3be2c887-f919-4f2e-b314-ecd995dcfe7b/",
      icon: "https://img.icons8.com/clouds/100/000000/github.png",
    },
    {
      title: "Building Scalable Java Microservices with Spring Boot and Spring Cloud",
      issuer: "Google Cloud (via Coursera)",
      date: "Nov 17, 2024",
      name: "Neha Bhat",
      id: "RP4UUU8HJIK2",
      link: "https://www.coursera.org/account/accomplishments/verify/RP4UUU8HJIK2",
      icon: "https://img.icons8.com/color/96/000000/google-cloud-platform.png",
    },
    {
      title: "React Certificate",
      issuer: "HackerRank",
      name: "Neha Bhat",
      link: "https://www.hackerrank.com/certificates/46ad8de62e0a",
      icon: "https://img.icons8.com/clouds/100/000000/react.png",
    },
    {
      title: "Java Smart Professional",
      issuer: "Aptech",
      icon: "https://img.icons8.com/clouds/100/000000/code.png",
    }
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <div className="portfolio">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleTheme}
        className="theme-toggle"
        aria-label="Toggle theme"
      >
        {darkMode ? '☀️ Light' : '🌙 Dark'}
      </motion.button>

      <motion.nav
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="navbar"
      >
        {['home', 'about', 'work-experience', 'skills', 'projects', 'personal-projects', 'education', 'certifications', 'contact'].map((section) => (
          <a key={section} href={`#${section}`} className="nav-link">
            {section.replace('-', ' ').replace(/\b\w/g, c => c.toUpperCase())}
          </a>
        ))}
      </motion.nav>

      <motion.header
        id="home"
        className="header"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={profilePic}
          alt="Neha Bhat's profile"
          className="profilePic"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.h1
          className="heading"
          initial={{ letterSpacing: '0px' }}
          whileInView={{ letterSpacing: '2px' }}
        >
          Neha Bhat
        </motion.h1>
        <h2 className="subheading-header">
          Senior Software Engineer | Java | React | Angular | Spring Boot
        </h2>
        <p className="summary-text" style={{ maxWidth: '800px', margin: '0 auto 25px', lineHeight: '1.6' }}>
          8+ years of experience building enterprise full-stack applications in Banking, Capital Markets, and Telecom.
          Skilled in UI/UX architecture, Microservices, and Performance Optimization.
        </p>
        <motion.div className="cta-buttons" whileHover={{ scale: 1.05 }}>
          <a
            href={`${import.meta.env.BASE_URL}Neha_Bhat_Resume.pdf`}
            download
            className="nav-link"
            style={{ background: 'var(--accent-color)', color: 'white', padding: '12px 24px' }}
          >
            📑 Download Resume
          </a>
        </motion.div>
      </motion.header>

      <motion.section
        id="about"
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 className="subheading" variants={itemVariants}>Professional Summary</motion.h2>
        <motion.p variants={itemVariants}>
          Senior Software Engineer with 8+ years of experience building enterprise full-stack applications.
          Expertise in Angular, React, TypeScript, Java, and Spring Boot microservices.
          Proven track record in driving AI innovation and optimizing UI performance for large-scale financial systems.
        </motion.p>
        <motion.div style={{ marginTop: '20px' }} variants={itemVariants}>
          <p>📧 <strong>Email:</strong> nehabhat345@gmail.com | 📞 <strong>Phone:</strong> +65 82877436</p>
          <p>📍 <strong>Location:</strong> Singapore</p>
          <p>
            🔗 <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/neha-bhat-855441105" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)' }}>neha-bhat-855441105</a>
          </p>
        </motion.div>
      </motion.section>

      <section id="work-experience" className="section">
        <h2 className="subheading">Work Experience</h2>
        <div className="work-experience-cards">
          {[
            { title: "Senior Software Engineer", org: "Credit Agricole CIB", location: "Singapore", period: "2022 - Present", tasks: ["Develop Angular modules for Data Regulatory Reporting with Spring Boot microservices.", "Built Bank Guarantee UI in Angular, reducing user actions by 25%.", "Developed Spring Boot billing module, cutting manual effort by 30%."] },
            { title: "Senior Engineer", org: "L&T Technology Services", location: "Bengaluru", period: "2021 - 2022", tasks: ["Developed React-based Micro Frontend-aligned UI modules.", "Built reusable React components, reducing load time by 40%.", "Implemented automated UI testing using Jest and React Testing Library."] },
            { title: "Software Engineer", org: "Newgen Software Technologies", location: "Noida", period: "2019 - 2021", tasks: ["Developed Angular modules for trade finance applications.", "Implemented JavaScript validations and client-side business rules.", "Built regulatory reports using Oracle SQL."] },
            { title: "Software Developer", org: "Silverskills Private Limited", location: "Gurgaon", period: "2017 - 2019", tasks: ["Developed React and Node.js web applications.", "Built interactive dashboards using D3.js.", "Automated regression flows using Java and Selenium."] }
          ].map((exp, i) => (
            <motion.div
              key={i}
              className="experience-card"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02, boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
            >
              <h3>{exp.title}</h3>
              <p><strong>{exp.org}</strong> | {exp.location} | {exp.period}</p>
              <ul>{exp.tasks.map((task, j) => <li key={j}>{task}</li>)}</ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <h2 className="subheading">Technical Skills</h2>
        <motion.div
          className="skills-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
        >
          {skills.map(skill => (
            <motion.span
              key={skill}
              className="skill-tag"
              variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1 } }}
              whileHover={{ scale: 1.2, rotate: 2 }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </section>

      <section id="projects" className="section">
        <h2 className="subheading">Professional Projects</h2>
        <div className="project-cards">
          {[
            { title: "Data Regulatory Reporting (CACIB)", desc: "Spring Boot microservices & Angular UI from Figma designs." },
            { title: "Global Trade Portal (CACIB)", desc: "Full-stack modules for Bank Guarantee workflows." },
            { title: "Digital Transformation (CACIB)", desc: "Angular UI and backend microservices for OCR automation." },
            { title: "Migration & User Management (L&T)", desc: "Scalable React UI integrated with BPM and backend APIs." },
            { title: "Bank Guarantee (Newgen)", desc: "Front-end and back-end modules for ICICI Bank." }
          ].map((proj, i) => (
            <motion.div
              key={i}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="personal-projects" className="section">
        <h2 className="subheading">Personal Projects</h2>
        <div className="project-cards">
          <motion.div className="project-card" whileHover={{ scale: 1.03 }}>
            <div>
              <h3>Family Chatbot</h3>
              <p>Chatbot UI focusing on seamless user experience.</p>
            </div>
            <div className="project-links">
              <motion.a whileTap={{ scale: 0.9 }} href="https://nehabhat345.github.io/family-chatbot-ui/" target="_blank" rel="noopener noreferrer" className="skill-tag" style={{ textDecoration: 'none' }}>🌐 Demo</motion.a>
              <motion.a whileTap={{ scale: 0.9 }} href={`${import.meta.env.BASE_URL}family-chatbot.apk`} download className="skill-tag" style={{ textDecoration: 'none', background: 'var(--nav-bg)' }}>📱 APK</motion.a>
            </div>
          </motion.div>
          <motion.div className="project-card" whileHover={{ scale: 1.03 }}>
            <div>
              <h3>UI Portfolio</h3>
              <p>This modern, responsive portfolio website.</p>
            </div>
            <div className="project-links">
              <motion.a whileTap={{ scale: 0.9 }} href="https://nehabhat345.github.io/neha-portfolio/" target="_blank" rel="noopener noreferrer" className="skill-tag" style={{ textDecoration: 'none' }}>🌐 Demo</motion.a>
              <motion.a whileTap={{ scale: 0.9 }} href="https://github.com/nehabhat345/neha-portfolio" target="_blank" rel="noopener noreferrer" className="skill-tag" style={{ textDecoration: 'none', background: 'var(--nav-bg)' }}>📂 GitHub</motion.a>
            </div>
          </motion.div>
          <motion.div className="project-card" whileHover={{ scale: 1.03 }}>
            <div>
              <h3>Weather Dashboard</h3>
              <p>Real-time weather app using Open-Meteo API.</p>
            </div>
            <div className="project-links">
              <motion.a whileTap={{ scale: 0.9 }} href="https://nehabhat345.github.io/weather-app/" target="_blank" rel="noopener noreferrer" className="skill-tag" style={{ textDecoration: 'none' }}>🌐 Demo</motion.a>
              <motion.a whileTap={{ scale: 0.9 }} href="https://github.com/nehabhat345/weather-app" target="_blank" rel="noopener noreferrer" className="skill-tag" style={{ textDecoration: 'none', background: 'var(--nav-bg)' }}>📂 GitHub</motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section
        id="education"
        className="section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="subheading">Education</h2>
        <div className="experience-card">
          <h3>Bachelor of Engineering</h3>
          <p><strong>Model Institute of Engineering and Technology</strong> | 2012 - 2016</p>
          <p>Electronics and Communication | Jammu, India</p>
        </div>
      </motion.section>

      <section id="certifications" className="section">
        <h2 className="subheading">Achievements</h2>
        <div className="certifications-container">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="certification-card"
              whileHover={{ rotateY: 10, rotateX: 10, scale: 1.05 }}
              style={{ perspective: 1000 }}
            >
              <img src={cert.icon} alt={cert.title} className="cert-icon" />
              <h4>{cert.title}</h4>
              <p style={{ fontSize: '0.9rem' }}>{cert.issuer}</p>
              {cert.link && <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', color: 'var(--accent-color)' }}>Verify</a>}
            </motion.div>
          ))}
        </div>
      </section>

      <footer id="contact" className="section fadeIn" style={{ textAlign: 'center' }}>
        <h2 className="subheading">Contact Me</h2>
        <p>Singapore | nehabhat345@gmail.com | +65 82877436</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '10px' }}>
          <motion.a
            whileHover={{ scale: 1.2, color: '#0077b5' }}
            href="https://linkedin.com/in/neha-bhat-855441105"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--accent-color)', fontSize: '1.2rem' }}
          >
            LinkedIn
          </motion.a>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
