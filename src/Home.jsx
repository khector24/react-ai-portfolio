import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

import Typewriter from "typewriter-effect";
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

  const [showTypewriter, setShowTypewriter] = useState(false);

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

    AOS.init({ duration: 1000, once: true });

    setTimeout(() => {
      setShowTypewriter(true);
    }, 1500); // match AOS delay

    fetchZenQuote();
  }, []);

  return (
    <main className="home-hero">
      <section className="home-hero-content" data-aos="fade-up">
        <img src={profilePic} alt="Kenny Hector" className="profile-pic" />
        <div className="intro-text">
          <h2 className="hero-intro">Welcome,</h2>
          <h1 className="name-heading">
            I'm{" "}
            <span className="name-placeholder">
              {showTypewriter ? (
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString("Kenny").start();
                  }}
                  options={{
                    autoStart: true,
                    loop: false,
                    delay: 75,
                    cursor: "|",
                  }}
                />
              ) : (
                <span className="underline-placeholder">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              )}
            </span>
          </h1>

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

      {/* SVG WAVE */}
      <div className="wave-divider">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M0,96L48,90.7C96,85,192,75,288,85.3C384,96,480,128,576,128C672,128,768,96,864,85.3C960,75,1056,85,1152,85.3C1248,85,1344,75,1392,69.3L1440,64V0H0Z"
          ></path>
        </svg>
      </div>

      <section className="what-i-do-section" data-aos="fade-right">
        <div className="what-i-do">
          <h2 className="section-heading">What I Do</h2>
          <p>
            I build fast, scalable, and secure web applications — from
            responsive front-end interfaces with React to AWS-backed cloud
            solutions. Whether it's automating internal tools or launching
            client-facing platforms, I deliver full-stack solutions that solve
            real problems.
          </p>
        </div>
      </section>

      {/* SVG WAVE */}
      <div className="wave-divider flipped">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M0,96L48,90.7C96,85,192,75,288,85.3C384,96,480,128,576,128C672,128,768,96,864,85.3C960,75,1056,85,1152,85.3C1248,85,1344,75,1392,69.3L1440,64V0H0Z"
          ></path>
        </svg>
      </div>

      <section className="tech-logos-section" data-aos="fade-left">
        <div className="tech-logos">
          <h2 className="section-heading">Tech I Use</h2>
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
