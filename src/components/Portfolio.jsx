import React from 'react';

const Portfolio = () => {
  return (
    <div style={styles.portfolio}>
      <h1 style={styles.heading}>Neha Bhat - Full Stack Developer</h1>
      <p>Full Stack Software Engineer with 8 years of experience in Java, Angular, Spring Boot Microservices, React, and SQL. Proficient in delivering scalable solutions in Banking, Finance, and Telecommunication sectors. Adept at collaborating with cross-functional teams and driving agile development practices to meet business objectives.</p>
      <p>Email: nehabhat345@gmail.com | Phone: +65 82877436 | Location: Singapore</p>
      <p>LinkedIn: <a href="https://linkedin.com/in/neha-bhat-855441105" target="_blank" rel="noopener noreferrer">linkedin.com/in/neha-bhat-855441105</a></p>
      
      <h2 style={styles.subheading}>Skills</h2>
      <ul style={styles.list}>
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
      
      <h2 style={styles.subheading}>Experience</h2>
      <div style={styles.experience}>
        <h3 style={styles.jobTitle}>Senior Software Engineer at Credit Agricole Corporate & Investment Bank</h3>
        <p style={styles.jobDuration}>May 2022 - Present, Singapore</p>
        <ul style={styles.list}>
          <li>Leading development of Trade Finance application, delivering frontend interfaces and back-end modules using Java & Angular.</li>
          <li>Led the creation of a Billing Module leveraging Spring Boot Microservices and Maven, reducing manual processes by 30%.</li>
          <li>Developed Bank Guarantee UI for a front-office application.</li>
          <li>Provide L3 support and resolve critical production issues.</li>
          <li>Collaborate with stakeholders to develop business requirements.</li>
          <li>Tech Stack: Java, Angular, Spring Boot, SQL, REST API, CI/CD.</li>
        </ul>
      </div>
      <div style={styles.experience}>
        <h3 style={styles.jobTitle}>Senior Engineer at L&T Technology Services</h3>
        <p style={styles.jobDuration}>Feb 2021 - May 2022, Bengaluru, India</p>
        <ul style={styles.list}>
          <li>Developed UI applications for Telecom Project using React JS.</li>
          <li>Integrated front-end interfaces with back-end APIs built on Spring Boot Microservices.</li>
          <li>Automated test cases using Jest and React Testing Library, improving code coverage by 20%.</li>
          <li>Tech Stack: React.js, Redux, Spring Boot, Jest, REST API, CI/CD.</li>
        </ul>
      </div>
      <div style={styles.experience}>
        <h3 style={styles.jobTitle}>Software Engineer at Newgen Software Technologies</h3>
        <p style={styles.jobDuration}>Apr 2019 - Jan 2021, Noida, India</p>
        <ul style={styles.list}>
          <li>Created robust Java algorithms and JavaScript validations for the Bank Guarantee module.</li>
          <li>Fixed UI bugs, enhancing application performance and user experience.</li>
          <li>Built MIS dashboards using Oracle SQL to improve reporting accuracy.</li>
          <li>Tech Stack: Java, Angular, Oracle SQL, JavaScript.</li>
        </ul>
      </div>
      <div style={styles.experience}>
        <h3 style={styles.jobTitle}>Software Developer at Silverskills Private Limited</h3>
        <p style={styles.jobDuration}>May 2017 - Apr 2019, Gurgaon, India</p>
        <ul style={styles.list}>
          <li>Automated data entry processes using Java and Selenium, reducing manual errors by 25%.</li>
          <li>Developed a financial software web application utilizing Node.js, Express.js, and React.</li>
          <li>Built dashboards using D3.js to visualize financial metrics.</li>
          <li>Tech Stack: Node.js, React, D3.js, Selenium.</li>
        </ul>
      </div>
      
      <h2 style={styles.subheading}>Education</h2>
      <p>Bachelor of Engineering (Electronics and Communication), Model Institute of Engineering and Technology, Sep 2012 - Sep 2016, Jammu, India</p>
      
      <h2 style={styles.subheading}>Projects</h2>
      <ul style={styles.list}>
        <li>Trade Finance Project for CACIB, Singapore (Jun 2023 - Present): Developed front-end and back-end components for the Trade Finance Application using Angular and Spring Boot.</li>
        <li>Digital Transformation Project for CACIB, Singapore (Jun 2023 - Present): Created user interfaces and microservices to enhance OCR accuracy.</li>
        <li>Global Trade Portal (May 2022 - Jun 2023): Developed Bank Guarantee modules using Angular and Java.</li>
        <li>Migration and User Management Project for Sky, London (Feb 2021 - May 2022): Developed UI and integrated BPM APIs for a User Management Module in React JS.</li>
        <li>Bank Guarantee Project for ICICI Bank, India (Nov 2019 - Jan 2021): Designed and developed user interface using inhouse technology.</li>
      </ul>
      
      <h2 style={styles.subheading}>Achievements</h2>
      <ul style={styles.list}>
        <li>AI with GitHub Copilot for Java & Spring Boot Developers</li>
        <li>Google Cloud Course: Java Microservices with Spring Boot and Spring Cloud</li>
        <li>React JS Certification (HackerRank)</li>
        <li>Java Smart Professional (Aptech)</li>
      </ul>
    </div>
  );
};

const styles = {
  portfolio: {
    padding: '20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#f4f4f9',
    color: '#333',
    maxWidth: '800px',
    margin: '0 auto',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    animation: 'fadeIn 1s ease-in-out',
  },
  heading: {
    fontSize: '2.5em',
    marginBottom: '10px',
    color: '#007acc',
    textAlign: 'center',
    animation: 'slideIn 1s ease-in-out',
  },
  subheading: {
    fontSize: '1.5em',
    marginTop: '20px',
    color: '#007acc',
    animation: 'slideIn 1s ease-in-out',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
    animation: 'fadeIn 1s ease-in-out',
  },
  experience: {
    marginTop: '10px',
    animation: 'fadeIn 1s ease-in-out',
  },
  jobTitle: {
    fontSize: '1.2em',
    marginBottom: '5px',
    color: '#007acc',
    animation: 'slideIn 1s ease-in-out',
  },
  jobDuration: {
    margin: '0',
    fontStyle: 'italic',
    animation: 'fadeIn 1s ease-in-out',
  },
};

export default Portfolio;