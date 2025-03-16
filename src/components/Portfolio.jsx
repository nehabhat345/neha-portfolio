import React from 'react';
import profilePic from '../assets/profile.jpeg';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#work-experience">Work Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact Me</a>
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
        <ul className="list fadeIn">
          <li>Java, JavaScript</li>
          <li>Oracle SQL, MySQL</li>
          <li>REST API, Angular</li>
          <li>React, Spring Boot</li>
          <li>JBOSS, Maven</li>
          <li>Visual Studio Code, IntelliJ</li>
          <li>Eclipse IDE, Git</li>
          <li>SVN, Postman</li>
          <li>Agile, Jira</li>
          <li>GitHub Copilot</li>
        </ul>
      </section>

      <section id="work-experience" className="section work-experience-section">
        <h2 className="subheading">Work Experience</h2>
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
      </section>

      <section id="projects" className="section projects-section">
        <h2 className="subheading">Projects</h2>
        <ul className="list fadeIn">
          <li>Trade Finance Project for CACIB, Singapore (Jun 2023 - Present): Developed front-end and back-end components for the Trade Finance Application using Angular and Spring Boot.</li>
          <li>Digital Transformation Project for CACIB, Singapore (Jun 2023 - Present): Created user interfaces and microservices to enhance OCR accuracy.</li>
          <li>Global Trade Portal (May 2022 - Jun 2023): Developed Bank Guarantee modules using Angular and Java.</li>
          <li>Migration and User Management Project for Sky, London (Feb 2021 - May 2022): Developed UI and integrated BPM APIs for a User Management Module in React JS.</li>
          <li>Bank Guarantee Project for ICICI Bank, India (Nov 2019 - Jan 2021): Designed and developed user interface using inhouse technology.</li>
        </ul>
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