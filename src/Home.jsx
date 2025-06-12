import { Link } from "react-router-dom";
import profilePic from "./assets/profile-pic.jpeg";
import "./Home.css";
import resumePDF from "./assets/Best Resume - KFH.pdf";

export default function Home() {
  return (
    <main className="home-hero">
      <section className="home-hero-content">
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
            <a href={resumePDF} download className="cta-button">
              Download Resume
            </a>
          </div>

          <p className="zen-joke">
            "Zen mode: Activated. No bugs, only features."
          </p>
        </div>
      </section>
      <section className="home-hero-quote">
        <p>"The best way to predict the future is to invent it." - Alan Kay</p>
      </section>
    </main>
  );
}
