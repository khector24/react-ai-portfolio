import resumePDF from "./assets/Best Resume - KFH.pdf";
import "./About.css";
import Accordion from "./Accordion"; // Assuming you have an Accordion component
import { faqs } from "./assets/content.js";

export default function About() {
  return (
    <main className="about-container">
      <h2>About Me</h2>
      <p>
        Hi, I'm <strong>Kenny Hector</strong>, a multilingual full-stack
        developer from Haiti with a passion for building clean, scalable, and
        user-centered web applications. I hold a Bachelor’s in Computer Science
        from Saint Thomas Aquinas College and speak three languages. My work
        blends creativity, performance, and problem-solving.
      </p>

      <p>
        I’m AWS Certified and have built real-world systems for both businesses
        and clients. While working at Rainbow Ace Hardware, I led a team of 25+
        and developed internal applications using JavaFX and MySQL, improving
        inventory accuracy and streamlining in-store logistics. My technical
        solutions helped cut checkout times by 47% and eliminated repeated
        manual processes.
      </p>

      <p>
        On the client side, I designed and deployed responsive websites like the{" "}
        <strong>Splash Zone Aquatics</strong> platform using React, Material UI,
        AWS Lambda, and DynamoDB—resulting in 13 early client signups. I've also
        built cloud-first applications for theft reporting and delivery tracking
        using secure AWS services, JWT authentication, and real-time updates.
      </p>

      <p>
        I’m experienced with RESTful APIs, automation tools, and secure system
        design, and I always prioritize maintainability and performance. My
        projects often involve tight integration between frontend UI and backend
        logic to create seamless, reliable systems.
      </p>

      <p>
        When I’m not coding, I enjoy hiking, reading, and diving into new tech
        trends. I value continuous learning and am always seeking to grow,
        collaborate, and build meaningful solutions.
      </p>

      <p>
        Let's connect and build something impactful together! Feel free to reach
        out at{" "}
        <a href="mailto:kennyhector24@gmail.com">kennyhector24@gmail.com</a>
      </p>

      <a href={resumePDF} download className="resume-button">
        Download Resume (PDF)
      </a>

      <section className="achievements-section">
        <h2>Key Achievements</h2>
        <ul className="achievements-list">
          <li>
            🚀 Boosted early client engagement by building the Splash Zone
            Aquatics platform — resulting in 13 newsletter signups before
            launch.
          </li>
          <li>
            🛠️ Developed a delivery management system that reduced order errors
            and improved tracking — cutting delivery creation time by 38%.
          </li>
          <li>
            🔐 Implemented theft tracking software with secure AWS integration,
            speeding up reporting by 33% and improving file-based evidence
            handling.
          </li>
          <li>
            🧾 Streamlined POS operations by designing a code/image-saving
            module, reducing repeat inventory checks and checkout time by 47%.
          </li>
        </ul>
      </section>

      <section className="skills-section">
        <div className="skill-category">
          <h3>Technical Skills</h3>
          <ul className="skill-list">
            <li>React (Hooks, Router, Vite)</li>
            <li>Node.js & Express</li>
            <li>AWS (Lambda, DynamoDB, S3, SES)</li>
            <li>API Development & Integration</li>
            <li>MongoDB & SQL</li>
            <li>HTML5 & CSS3</li>
            <li>Responsive Design & Flexbox/Grid</li>
            <li>Git & GitHub (Branching, Merging)</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Leadership & Business Skills</h3>
          <ul className="skill-list">
            <li>Team Leadership (25+ staff)</li>
            <li>Client Communication</li>
            <li>Technical Troubleshooting</li>
            <li>Retail Operations Optimization</li>
            <li>Project Management & Delivery</li>
          </ul>
        </div>
      </section>
      <section className="faq-section">
        <h2>FAQs</h2>
        {faqs.map((faq, idx) => (
          <Accordion key={idx} title={faq.question} content={faq.answer} />
        ))}
      </section>
    </main>
  );
}
