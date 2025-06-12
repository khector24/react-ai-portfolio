import resumePDF from "./assets/Best Resume - KFH.pdf";
import "./About.css";

export default function About() {
  return (
    <main className="about-container">
      <h2>About Me</h2>
      <p>
        Hi, I'm <strong>Kenny Hector</strong>, a multilingual full-stack
        developer from Haiti with a passion for clean, scalable, and
        user-focused web applications. I graduated from Saint Thomas Aquinas
        College with a Bachelor’s in Computer Science. I speak three languages
        and take pride in blending creativity with performance in every project
        I touch.
      </p>
      <p>
        My experience spans building internal systems for hardware stores to
        deploying scalable cloud apps for client engagement. I'm AWS certified
        and fluent in React, Node.js, and automation tooling—equipped for both
        frontend finesse and backend logic.
      </p>
      <p>
        When I'm not coding, you can find me exploring new tech trends, hiking,
        or enjoying a good book. I believe in continuous learning and am always
        looking for ways to improve my skills and contribute to exciting
        projects.
      </p>
      <p>
        Let's connect and build something amazing together! Feel free to reach
        out via email at:{" "}
        <a href="mailto:kennyhector24@gmail.com">kennyhector24@gmail.com</a>
      </p>

      <a href={resumePDF} download className="resume-button">
        Download Resume (PDF)
      </a>

      <section className="skills-section">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>React (Hooks, Router, Vite)</li>
          <li>Node.js & Express</li>
          <li>AWS (Lambda, DynamoDB, S3, SES)</li>
          <li>API Development & Integration</li>
          <li>Python (Scripting, Automation)</li>
          <li>MongoDB & SQL</li>
          <li>HTML5 & CSS3</li>
          <li>Responsive Design & Flexbox/Grid</li>
          <li>Git & GitHub (Branching, Merging)</li>
          <li>Agile Collaboration</li>
        </ul>
      </section>
    </main>
  );
}
