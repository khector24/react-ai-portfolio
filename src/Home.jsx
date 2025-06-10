import { Link } from "react-router-dom";
import profilePic from "./assets/profile-pic.jpeg";
import "./App.css";

export default function Home() {
  return (
    <main className="home-container">
      <section className="home-hero">
        <img src={profilePic} alt="Kenny Hector" className="profile-pic" />
        <div className="intro-text">
          <h1 className="name-heading">Kenny F. Hector</h1>
          <p className="subtitle">
            Full-Stack Developer | AWS Certified | React | Node.js | DynamoDB
          </p>
          <div className="contact-links">
            <a href="mailto:kennyhector24@gmail.com">kennyhector24@gmail.com</a>{" "}
            |{" "}
            <a
              href="https://github.com/khector24"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>

          <div className="home-buttons">
            <Link to="/portfolio" className="cta-button">
              View My Work
            </Link>
            <Link to="/contact" className="cta-button">
              Contact Me
            </Link>
          </div>

          <p className="zen-joke">
            "Zen mode: Activated. No bugs, only features."
          </p>
        </div>
      </section>

      <section className="skills-section">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>React</li>
          <li>Node.js</li>
          <li>AWS (Lambda, DynamoDB)</li>
          <li>JavaScript</li>
          <li>Python</li>
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
