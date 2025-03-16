import React from 'react';
import profilePic from '../assets/profile.jpeg';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#work-experience" className="nav-link">Work Experience</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#contact" className="nav-link">Contact Me</a>
      </nav>

      <section id="home" className="section home-section">
        <div className="header">
          <img src={profilePic} alt="Neha Bhat" className="profilePic" />
          <h1 className="heading">Neha Bhat - Full Stack Developer</h1>
        </div>
      </section>

      <section id="about" className="section about-section">
        <h2 className="subheading">About</h2>
        <p className="fadeIn">Full Stack Software Engineer with 8 years of experience in Java, Angular, Spring Boot Microservices, React, and SQL. Proficient in delivering scalable solutions in Banking, Finance, and Telecommunication sectors. Adept at collaborating with cross-functional teams and driving agile development practices to meet business objectives.</p>
        <p className="fadeIn">Email: nehabhat345@gmail.com | Phone: +65 82877436 | Location: Singapore</p>
        <p className="fadeIn">LinkedIn: <a href="https://linkedin.com/in/neha-bhat-855441105" target="_blank" rel="noopener noreferrer">linkedin.com/in/neha-bhat-855441105</a></p>
        
        <h2 className="subheading">Skills</h2>
        <div className="skills-container">
          <ul className="skills-grid fadeIn">
            <li>Java</li>
            <li>JavaScript</li>
            <li>Oracle SQL</li>
            <li>MySQL</li>
            <li>REST API</li>
            <li>Angular</li>
            <li>React</li>
            <li>Spring Boot</li>
            <li>JBOSS</li>
            <li>Maven</li>
            <li>Visual Studio Code</li>
            <li>IntelliJ</li>
            <li>Eclipse IDE</li>
            <li>Git</li>
            <li>SVN</li>
            <li>Postman</li>
            <li>Agile</li>
            <li>Jira</li>
            <li>GitHub Copilot</li>
          </ul>
        </div>
      </section>

      <section id="work-experience" className="section work-experience-section">
        <h2 className="subheading">Work Experience</h2>
        <div className="experience-container">
          <div className="experience fadeIn">
            <h3 className="jobTitle">Senior Software Engineer at Credit Agricole Corporate & Investment Bank</h3>
            <p className="jobDuration">May 2022 - Present, Singapore</p>
            <ul className="list">
              <li>Leading development of Trade Finance application, delivering frontend interfaces and back-end modules using Java & Angular.</li>
              <li>Led the creation of a Billing Module leveraging Spring Boot Microservices and Maven, reducing manual processes by 30%.</li>
              <li>Developed Bank Guarantee UI for a front-office application.</li>
              <li>Provide L3 support and resolve critical production issues.</li>
              <li>Collaborate with stakeholders to develop business requirements.</li>
              <li>Tech Stack: Java, Angular, Spring Boot, SQL, REST API, CI/CD.</li>
            </ul>
          </div>
          <div className="experience fadeIn">
            <h3 className="jobTitle">Senior Engineer at L&T Technology Services</h3>
            <p className="jobDuration">Feb 2021 - May 2022, Bengaluru, India</p>
            <ul className="list">
              <li>Developed UI applications for Telecom Project using React JS.</li>
              <li>Integrated front-end interfaces with back-end APIs built on Spring Boot Microservices.</li>
              <li>Automated test cases using Jest and React Testing Library, improving code coverage by 20%.</li>
              <li>Tech Stack: React.js, Redux, Spring Boot, Jest, REST API, CI/CD.</li>
            </ul>
          </div>
          <div className="experience fadeIn">
            <h3 className="jobTitle">Software Engineer at Newgen Software Technologies</h3>
            <p className="jobDuration">Apr 2019 - Jan 2021, Noida, India</p>
            <ul className="list">
              <li>Created robust Java algorithms and JavaScript validations for the Bank Guarantee module.</li>
              <li>Fixed UI bugs, enhancing application performance and user experience.</li>
              <li>Built MIS dashboards using Oracle SQL to improve reporting accuracy.</li>
              <li>Tech Stack: Java, Angular, Oracle SQL, JavaScript.</li>
            </ul>
          </div>
          <div className="experience fadeIn">
            <h3 className="jobTitle">Software Developer at Silverskills Private Limited</h3>
            <p className="jobDuration">May 2017 - Apr 2019, Gurgaon, India</p>
            <ul className="list">
              <li>Automated data entry processes using Java and Selenium, reducing manual errors by 25%.</li>
              <li>Developed a financial software web application utilizing Node.js, Express.js, and React.</li>
              <li>Built dashboards using D3.js to visualize financial metrics.</li>
              <li>Tech Stack: Node.js, React, D3.js, Selenium.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <h2 className="subheading">Projects</h2>
        <div className="projects-container">
          <div className="project-card fadeIn">
            <h3>Trade Finance Project for CACIB, Singapore</h3>
            <p>(Jun 2023 - Present): Developed front-end and back-end components for the Trade Finance Application using Angular and Spring Boot.</p>
          </div>
          <div className="project-card fadeIn">
            <h3>Digital Transformation Project for CACIB, Singapore</h3>
            <p>(Jun 2023 - Present): Created user interfaces and microservices to enhance OCR accuracy.</p>
          </div>
          <div className="project-card fadeIn">
            <h3>Global Trade Portal</h3>
            <p>(May 2022 - Jun 2023): Developed Bank Guarantee modules using Angular and Java.</p>
          </div>
          <div className="project-card fadeIn">
            <h3>Migration and User Management Project for Sky, London</h3>
            <p>(Feb 2021 - May 2022): Developed UI and integrated BPM APIs for a User Management Module in React JS.</p>
          </div>
          <div className="project-card fadeIn">
            <h3>Bank Guarantee Project for ICICI Bank, India</h3>
            <p>(Nov 2019 - Jan 2021): Designed and developed user interface using inhouse technology.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <h2 className="subheading">Contact Me</h2>
        <p className="fadeIn">Feel free to reach out to me via email or phone.</p>
        <p className="fadeIn">Email: nehabhat345@gmail.com</p>
        <p className="fadeIn">Phone: +65 82877436</p>
        <p className="fadeIn">LinkedIn: <a href="https://linkedin.com/in/neha-bhat-855441105" target="_blank" rel="noopener noreferrer">linkedin.com/in/neha-bhat-855441105</a></p>
      </section>
    </div>
  );
};

export default Portfolio;