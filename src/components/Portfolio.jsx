import React, { useState } from 'react';
import profilePic from '../assets/profile.jpeg';
import './Portfolio.css';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode(!darkMode);

  const textColor = darkMode ? 'white' : '#222';
  const gradientBackground = darkMode
    ? 'linear-gradient(to right, #6dd5fa, #2980b9)'
    : 'linear-gradient(to right, #f0f4f8, #d9e2ec)';

  const certifications = [
    {
      title: "GitHub Copilot for Java & Spring Boot",
      issuer: "GitHub (Udemy)",
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
    }
  ];

  return (
    <div className={`portfolio ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <button
        onClick={toggleTheme}
        className="theme-toggle"
        aria-label="Toggle theme"
      >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

      <nav className="navbar">
        {['home', 'about', 'summary', 'highlights', 'work-experience', 'projects', 'certifications', 'contact'].map((section) => (
          <a key={section} href={`#${section}`} className="nav-link">
            {section.replace('-', ' ').replace(/\b\w/g, c => c.toUpperCase())}
          </a>
        ))}
      </nav>

      <section
        id="home"
        className="section home-section fadeIn"
        style={{ color: textColor, background: gradientBackground }}
      >
        <div className="header">
          <img src={profilePic} alt="Neha Bhat's profile" className="profilePic" />
          <h1 className="heading">Neha Bhat</h1>
          <h2 className="subheading">
            Building impactful enterprise software | Java | React | Spring Boot
          </h2>
          <a
            href={`${import.meta.env.BASE_URL}Neha_Bhat_Resume.pdf`}
            download
            className="resume-button"
            aria-label="Download Resume PDF"
          >
            📑 Download Resume
          </a>
        </div>
      </section>

      <section id="summary" className="section fadeIn" style={{ color: textColor }}>
        <h2 className="subheading">Summary</h2>
        <p>👩‍💻 8+ years of experience as a Full Stack Developer in Banking, Finance & Telecom.</p>
        <p>💡 Expert in scalable microservices & UIs using Java, Angular, React, Spring Boot.</p>
        <p>🚀 Currently at Credit Agricole CIB, Singapore.</p>
      </section>

      <section id="highlights" className="section fadeIn" style={{ color: textColor }}>
        <h2 className="subheading">Career Highlights</h2>
        <ul className="highlight-list">
          <p>✅ Revamped billing module; reduced 30% manual effort (Spring Boot)</p>
          <p>📈 Boosted test coverage by 20% (React Testing Library)</p>
          <p>🌏 Developed core banking modules in Singapore, Paris, and India, and telecom solutions in London, UK.</p>
        </ul>
      </section>

      <section id="about" className="section fadeIn" style={{ color: textColor }}>
        <h2 className="subheading">About</h2>
        <p>
          Full Stack Software Engineer with 8 years in Java, Angular, React, Spring Boot Microservices, and SQL.
          Experienced in scalable solutions in BFSI and telecom sectors. Agile team player.
        </p>
        <p>Email: nehabhat345@gmail.com | Phone: +65 82877436 | Location: Singapore</p>
        <p>
          LinkedIn: <a href="https://linkedin.com/in/neha-bhat-855441105" target="_blank" rel="noopener noreferrer">linkedin.com/in/neha-bhat-855441105</a>
        </p>
      </section>

      <section id="work-experience" className="section fadeIn" style={{ color: textColor }}>
  <h2 className="subheading">Work Experience</h2>
  <div className="work-experience-cards">
    <div className="experience-card">
      <h3><strong>Senior Software Engineer</strong></h3>
      <p>
        <span style={{ fontWeight: '600' }}>CACIB</span> | Singapore | <em>May 2022 - Present</em>
      </p>
      <ul>
        <li>Led development of Trade Finance app with Java & Angular.</li>
        <li>Implemented Spring Boot Microservices billing module; cut manual effort by 30%.</li>
        <li>Delivered Bank Guarantee UI, improving user experience.</li>
        <li>Provided Level 3 production support ensuring system stability.</li>
      </ul>
      <p><strong>Tech Stack:</strong> Java, Angular, Spring Boot, SQL, REST API, CI/CD</p>
    </div>

    <div className="experience-card">
      <h3><strong>Senior Engineer</strong></h3>
      <p>
        <span style={{ fontWeight: '600' }}>L&T Technology Services</span> | Bengaluru, India | <em>Feb 2021 - May 2022</em>
      </p>
      <ul>
        <li>Built telecom UI apps using React.js.</li>
        <li>Integrated React front-end with Spring Boot backend.</li>
        <li>Boosted code coverage by 20% with automated tests.</li>
      </ul>
      <p><strong>Tech Stack:</strong> React.js, Redux, Spring Boot, Jest, REST API, CI/CD</p>
    </div>

    <div className="experience-card">
      <h3><strong>Software Engineer</strong></h3>
      <p>
        <span style={{ fontWeight: '600' }}>Newgen Software Technologies</span> | Noida, India | <em>Apr 2019 - Jan 2021</em>
      </p>
      <ul>
        <li>Developed Java algorithms & JS validation for Bank Guarantee.</li>
        <li>Resolved critical UI bugs improving UX.</li>
        <li>Created MIS dashboards with Oracle SQL.</li>
      </ul>
      <p><strong>Tech Stack:</strong> Java, Angular, Oracle SQL, JavaScript</p>
    </div>

    <div className="experience-card">
      <h3><strong>Software Developer</strong></h3>
      <p>
        <span style={{ fontWeight: '600' }}>Silverskills Private Limited</span> | Gurgaon, India | <em>May 2017 - Apr 2019</em>
      </p>
      <ul>
        <li>Automated data entry with Java & Selenium; cut errors by 25%.</li>
        <li>Built full-stack financial web app with Node.js & React.</li>
        <li>Designed dashboards using D3.js for KPI visualization.</li>
      </ul>
      <p><strong>Tech Stack:</strong> Node.js, React, D3.js, Selenium</p>
    </div>
  </div>
</section>

<section id="projects" className="section fadeIn" style={{ color: textColor }}>
  <h2 className="subheading">Projects</h2>
  <div className="project-cards">
    <div className="project-card">
      <h3>Trade Finance Project, Singapore</h3>
      <p><em>Jun 2023 – Present</em></p>
      <p>Developed front-end and back-end components for the Trade Finance Application using Angular and Spring Boot.</p>
    </div>
    <div className="project-card">
      <h3>Digital Transformation Project, Singapore</h3>
      <p><em>Jun 2023 – Present</em></p>
      <p>Created user interfaces and microservices to enhance OCR accuracy.</p>
    </div>
    <div className="project-card">
      <h3>Global Trade Portal</h3>
      <p><em>May 2022 – Jun 2023</em></p>
      <p>Developed Bank Guarantee modules using Angular and Java.</p>
    </div>
    <div className="project-card">
      <h3>Migration and User Management Project, London</h3>
      <p><em>Feb 2021 – May 2022</em></p>
      <p>Developed UI and integrated BPM APIs for a User Management Module in React JS.</p>
    </div>
    <div className="project-card">
      <h3>Bank Guarantee Project, India</h3>
      <p><em>Nov 2019 – Jan 2021</em></p>
      <p>Designed and developed user interface using in-house technology.</p>
    </div>
  </div>
</section>


      <section
        id="certifications"
        className="section fadeIn"
        style={{ color: textColor, background: gradientBackground }}
      >
        <h2 className="subheading">Licenses and Certifications</h2>
        <div className="certifications-container">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <img
                src={cert.icon || "https://img.icons8.com/clouds/100/000000/certificate.png"}
                alt={`${cert.title} icon for ${cert.issuer}`}
                className="cert-icon"
              />
              <h3>{cert.title}</h3>
              {cert.name && <p><strong>Name:</strong> {cert.name}</p>}
              {cert.date && <p><strong>Issued:</strong> {cert.date} — {cert.issuer}</p>}
              {!cert.date && <p><strong>Issuer:</strong> {cert.issuer}</p>}
              {cert.id && <p><strong>ID:</strong> {cert.id}</p>}
              {cert.link && (
                <p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View certificate for ${cert.title}`}
                  >
                    {cert.link.includes("verify") ? "Verify Certificate" : "View Certificate"}
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section fadeIn" style={{ color: textColor }}>
        <h2 className="subheading">Contact Me</h2>
        <p>Feel free to reach out via email or phone.</p>
        <p>
          Email: nehabhat345@gmail.com | Phone: +65 82877436 | LinkedIn:{' '}
          <a href="https://linkedin.com/in/neha-bhat-855441105" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/neha-bhat-855441105
          </a>
        </p>
      </section>
    </div>
  );
};

export default Portfolio;
