import { Link } from "react-router-dom";
import "./App.css";

export default function Home() {
  return (
    <main>
      <section className="intro-header">
        <h1 className="name-heading">Kenny F. Hector</h1>
        <p className="subtitle">
          Full-Stack Developer | AWS Certified | React | Node.js | DynamoDB
        </p>
        <div className="contact-links">
          <a href="mailto:kennyhector24@gmail.com">kennyhector24@gmail.com</a>
          {" | "}
          <a href="https://github.com/khector24" target="_blank">
            GitHub
          </a>
        </div>
      </section>

      <h1>Welcome to My Portfolio</h1>
      <p>
        Hi, I'm Kenny Hector, a software engineer specializing in AI and web
        development. Explore my projects and get in touch!
      </p>
      <section className="projects">
        <h2>Featured Projects</h2>
        <ul>
          <li>AI Chatbot</li>
          <li>Portfolio Website</li>
          <li>Data Analysis Tool</li>
        </ul>
      </section>

      <div className="home-buttons">
        <Link to="/portfolio" className="cta-button">
          View My Work
        </Link>
        <Link to="/contact" className="cta-button">
          Contact Me
        </Link>
      </div>

      <p className="zen-joke">"Zen mode: Activated. No bugs, only features."</p>

      <section>
        skills: React, Node.js, AWS, DynamoDB, Python, JavaScript, HTML, CSS
        <h2>Skills</h2>
        <ul>
          <li>React</li>
          <li>Node.js</li>
          <li>AWS (Lambda, DynamoDB)</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>HTML & CSS</li>
          <li>API Development</li>
          <li>Responsive Design</li>
          <li>Version Control (Git)</li>
          <li>Agile Methodologies</li>
          <li>Problem Solving</li>
        </ul>
      </section>
    </main>
  );
}
