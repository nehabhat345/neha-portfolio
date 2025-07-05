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
    title: "React (Basic) Certificate",
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

  <div className="experience-card">
    <h3><strong>Senior Software Engineer</strong></h3>
    <p>
      <span style={{ fontWeight: '600' }}>Credit Agricole Corporate & Investment Bank</span> &nbsp;|&nbsp; Singapore &nbsp;|&nbsp; <em>May 2022 - Present</em>
    </p>
    <ul>
      <li>Lead development of Trade Finance application, delivering responsive front-end interfaces and robust back-end modules using Java & Angular.</li>
      <li>Architected and implemented a Spring Boot Microservices-based Billing Module, reducing manual effort by 30% and improving operational efficiency.</li>
      <li>Designed and developed Bank Guarantee UI for a critical front-office application, enhancing user experience and workflow speed.</li>
      <li>Provide Level 3 production support, quickly resolving high-priority incidents to ensure system stability.</li>
      <li>Collaborate closely with cross-functional teams and business stakeholders to define clear, actionable requirements.</li>
    </ul>
    <p><strong>Tech Stack:</strong> Java, Angular, Spring Boot, SQL, REST API, CI/CD</p>
  </div>

  <div className="experience-card">
    <h3><strong>Senior Engineer</strong></h3>
    <p>
      <span style={{ fontWeight: '600' }}>L&T Technology Services</span> &nbsp;|&nbsp; Bengaluru, India &nbsp;|&nbsp; <em>Feb 2021 - May 2022</em>
    </p>
    <ul>
      <li>Developed high-quality UI applications for telecom projects using React.js, delivering seamless user experiences.</li>
      <li>Integrated React front-end with Spring Boot Microservices back-end, ensuring robust and scalable architecture.</li>
      <li>Boosted code coverage by 20% by writing automated tests with Jest and React Testing Library, improving product reliability.</li>
    </ul>
    <p><strong>Tech Stack:</strong> React.js, Redux, Spring Boot, Jest, REST API, CI/CD</p>
  </div>

  <div className="experience-card">
    <h3><strong>Software Engineer</strong></h3>
    <p>
      <span style={{ fontWeight: '600' }}>Newgen Software Technologies</span> &nbsp;|&nbsp; Noida, India &nbsp;|&nbsp; <em>Apr 2019 - Jan 2021</em>
    </p>
    <ul>
      <li>Developed efficient Java algorithms and JavaScript validation for Bank Guarantee modules, improving accuracy and speed.</li>
      <li>Resolved critical UI bugs, significantly enhancing application responsiveness and user satisfaction.</li>
      <li>Created detailed MIS dashboards using Oracle SQL, streamlining reporting and decision-making processes.</li>
    </ul>
    <p><strong>Tech Stack:</strong> Java, Angular, Oracle SQL, JavaScript</p>
  </div>

  <div className="experience-card">
    <h3><strong>Software Developer</strong></h3>
    <p>
      <span style={{ fontWeight: '600' }}>Silverskills Private Limited</span> &nbsp;|&nbsp; Gurgaon, India &nbsp;|&nbsp; <em>May 2017 - Apr 2019</em>
    </p>
    <ul>
      <li>Automated data entry workflows with Java and Selenium, reducing manual errors by 25% and boosting efficiency.</li>
      <li>Developed a full-stack financial web application leveraging Node.js, Express.js, and React.</li>
      <li>Designed interactive dashboards using D3.js to visualize financial KPIs for management insights.</li>
    </ul>
    <p><strong>Tech Stack:</strong> Node.js, React, D3.js, Selenium</p>
  </div>
</section>


<section id="projects" className="section fadeIn" style={{ color: textColor }}>
  <h2 className="subheading">Projects</h2>
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
