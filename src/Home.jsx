import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import profilePic from "./assets/profile-pic.jpeg";
import "./Home.css";
import resumePDF from "./assets/Best Resume - KFH.pdf";

import reactLogo from "./assets/logos/react.svg";
import nodeLogo from "./assets/logos/nodejs.svg";
import awsLogo from "./assets/logos/aws.svg";
import javaLogo from "./assets/logos/java.svg";
import mysqlLogo from "./assets/logos/mysql.svg";
import htmlLogo from "./assets/logos/html.svg";
import cssLogo from "./assets/logos/css.svg";
import gitLogo from "./assets/logos/git.svg";
import expressLogo from "./assets/logos/express.svg";

export default function Home() {
  const [zenQuote, setZenQuote] = useState(
    "Zen mode: Activated. No bugs, only features."
  );

  useEffect(() => {
    async function fetchZenQuote() {
      try {
        const res = await axios.get("https://zenquotes.io/api/random");
        if (res.data && res.data[0]) {
          const { q, a } = res.data[0];
          setZenQuote(`"${q}" - ${a}`);
        }
      } catch (error) {
        console.error("Failed to fetch Zen quote:", error);
      }
    }

    fetchZenQuote();
  }, []);

  return (
    <main className="home-hero">
      <section className="home-hero-content">
        <img src={profilePic} alt="Kenny Hector" className="profile-pic" />
        <div className="intro-text">
          <h2 className="hero-intro">Welcome,</h2>
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
          <p className="zen-joke">{zenQuote}</p>
        </div>
      </section>

      <section className="what-i-do-section">
        <div className="what-i-do">
          <h2>What I Do</h2>
          <p>
            I build fast, scalable, and secure web applications — from
            responsive front-end interfaces with React to AWS-backed cloud
            solutions. Whether it's automating internal tools or launching
            client-facing platforms, I deliver full-stack solutions that solve
            real problems.
          </p>
        </div>
      </section>

      <section className="tech-logos-section">
        <div className="tech-logos">
          <h2>Tech I Use</h2>
          <div className="logo-grid">
            <img src={reactLogo} alt="React" />
            <img src={nodeLogo} alt="Node.js" />
            <img src={awsLogo} alt="AWS" />
            <img src={javaLogo} alt="Java" />
            <img src={mysqlLogo} alt="MySQL" />
            <img src={htmlLogo} alt="HTML" />
            <img src={cssLogo} alt="CSS" />
            <img src={gitLogo} alt="Git" />
            <img src={expressLogo} alt="Express.js" />
          </div>
        </div>
      </section>
    </main>
  );
}
