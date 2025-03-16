import React from 'react';

const Portfolio = () => {
  return (
    <div style={styles.portfolio}>
      <h1 style={styles.heading}>Neha Bhat - Full Stack Developer</h1>
      <p>With 8 years of experience in software development, I specialize in building robust web applications using modern technologies.</p>
      <h2 style={styles.subheading}>Skills</h2>
      <ul style={styles.list}>
        <li>JavaScript, TypeScript</li>
        <li>React, Redux</li>
        <li>Node.js, Express</li>
        <li>HTML, CSS, SASS</li>
        <li>SQL, NoSQL Databases</li>
        <li>RESTful APIs, GraphQL</li>
        <li>Git, Docker, CI/CD</li>
      </ul>
      <h2 style={styles.subheading}>Experience</h2>
      <div style={styles.experience}>
        <h3 style={styles.jobTitle}>Senior Software Engineer at XYZ Corp</h3>
        <p style={styles.jobDuration}>Jan 2020 - Present</p>
        <ul style={styles.list}>
          <li>Lead a team of developers to build scalable web applications.</li>
          <li>Architected and implemented RESTful APIs and GraphQL services.</li>
          <li>Collaborated with cross-functional teams to deliver high-quality products.</li>
        </ul>
      </div>
      <div style={styles.experience}>
        <h3 style={styles.jobTitle}>Software Engineer at ABC Inc</h3>
        <p style={styles.jobDuration}>Jan 2017 - Dec 2019</p>
        <ul style={styles.list}>
          <li>Developed and maintained web applications using React and Node.js.</li>
          <li>Optimized application performance and improved user experience.</li>
          <li>Worked closely with designers and product managers to define project requirements.</li>
        </ul>
      </div>
      <h2 style={styles.subheading}>Education</h2>
      <p>Bachelor of Technology in Computer Science</p>
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