import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1>Neha Bhat - Full Stack Developer</h1>
      <p>With 8 years of experience in software development, I specialize in building robust web applications using modern technologies.</p>
      <h2>Skills</h2>
      <ul>
        <li>JavaScript, TypeScript</li>
        <li>React, Redux</li>
        <li>Node.js, Express</li>
        <li>HTML, CSS, SASS</li>
        <li>SQL, NoSQL Databases</li>
        <li>RESTful APIs, GraphQL</li>
        <li>Git, Docker, CI/CD</li>
      </ul>
      <h2>Experience</h2>
      <div className="experience">
        <h3>Senior Software Engineer at XYZ Corp</h3>
        <p>Jan 2020 - Present</p>
        <ul>
          <li>Lead a team of developers to build scalable web applications.</li>
          <li>Architected and implemented RESTful APIs and GraphQL services.</li>
          <li>Collaborated with cross-functional teams to deliver high-quality products.</li>
        </ul>
      </div>
      <div className="experience">
        <h3>Software Engineer at ABC Inc</h3>
        <p>Jan 2017 - Dec 2019</p>
        <ul>
          <li>Developed and maintained web applications using React and Node.js.</li>
          <li>Optimized application performance and improved user experience.</li>
          <li>Worked closely with designers and product managers to define project requirements.</li>
        </ul>
      </div>
      <h2>Education</h2>
      <p>Bachelor of Technology in Computer Science</p>
    </div>
  );
};

export default Portfolio;