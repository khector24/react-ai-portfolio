import { useState } from "react";
import "./App.css";

const projects = [
  {
    title: "Splash Zone Aquatics Website",
    tech: "React, Material UI, AWS S3, Lambda, DynamoDB",
    description:
      "Responsive, customer-centric website with dynamic sections and AWS backend. Resulted in 13 early signups.",
    link: "https://github.com/khector24/splash-zone-aquatics",
    tags: ["react", "aws", "dynamodb", "lambda", "material-ui"],
  },
  {
    title: "Theft Tracker Application",
    tech: "React, Material UI, AWS S3, Lambda, DynamoDB",
    description:
      "Dynamic theft reporting with file upload, AWS integration, and real-time updates. 33% faster police reporting.",
    link: "https://github.com/khector24/theft-tracker",
    tags: ["react", "aws", "file-upload", "lambda", "material-ui"],
  },
  {
    title: "Delivery Management App",
    tech: "React, Node.js, Express, DynamoDB",
    description:
      "Full-stack delivery platform with auth, real-time tracking, and alerts. Reduced delivery errors to near-zero.",
    link: "https://github.com/khector24/delivery-manager",
    tags: ["react", "node", "express", "dynamodb", "authentication"],
  },
  {
    title: "Weather Project",
    tech: "Node.js, Express, EJS, CSS",
    description:
      "Weather app that fetches real-time data via OpenWeatherMap API based on user-inputted city.",
    link: "https://github.com/khector24/weather-project",
    tags: ["node", "express", "ejs", "api", "css"],
  },
  {
    title: "Band Name Generator",
    tech: "Express.js, EJS, JavaScript",
    description:
      "Generates random band names using Express and EJS templates. Great for creative project showcases.",
    link: "https://github.com/khector24/Band-Name-Generator",
    tags: ["node", "express", "ejs", "random-generator"],
  },
  {
    title: "Simple To-Do List",
    tech: "Node.js, EJS, CSS, JavaScript",
    description:
      "Basic to-do app using EJS templates. Shows route handling and dynamic list rendering.",
    link: "https://github.com/khector24/simple-to-do-list",
    tags: ["node", "ejs", "todo", "express"],
  },
  {
    title: "Simon Says Game",
    tech: "JavaScript, HTML, CSS",
    description:
      "Classic memory game rebuilt with custom sound, animations, and game logic.",
    link: "https://github.com/khector24/simon-says-game",
    tags: ["javascript", "game", "css", "html"],
  },
  {
    title: "Dice Challenge",
    tech: "JavaScript, HTML, CSS",
    description:
      "Interactive dice game that uses random logic to simulate a player vs. player dice roll.",
    link: "https://github.com/khector24/dice-challenge",
    tags: ["javascript", "game", "html", "css"],
  },
  {
    title: "My Site CSS",
    tech: "HTML, CSS",
    description:
      "Personal static site showcasing layout skills and responsiveness using only HTML and CSS.",
    link: "https://github.com/khector24/my-site-css",
    tags: ["css", "html", "responsive-design"],
  },
  {
    title: "Newsletter Signup Example",
    tech: "HTML, CSS, JavaScript, Node.js, Mailchimp API",
    description:
      "Signup form project that integrates with the Mailchimp API to store user emails.",
    link: "https://github.com/khector24/newsletter-signup-eg",
    tags: ["html", "css", "javascript", "node", "api", "mailchimp"],
  },
];

export default function Portfolio() {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagChange = (e) => {
    const { options } = e.target;
    const values = Array.from(options)
      .filter((o) => o.selected)
      .map((o) => o.value);
    setSelectedTags(values);
  };

  const filteredProjects =
    selectedTags.length > 0
      ? projects.filter((proj) =>
          selectedTags.every((tag) => proj.tags.includes(tag))
        )
      : projects;

  return (
    <main className="portfolio-header">
      <section className="max-w-4xl mx-auto text-left">
        <h1 className="text-4xl font-bold mb-2">Kenny F. Hector</h1>
        <p className="text-lg mb-6">
          Full-Stack Developer | AWS Certified | React | Node.js | DynamoDB
        </p>
        <div className="mb-4">
          <a
            href="mailto:kennyhector24@gmail.com"
            className="text-blue-500 hover:underline"
          >
            kennyhector24@gmail.com
          </a>
          {" | "}
          <a
            href="https://github.com/khector24"
            className="text-blue-500 hover:underline"
            target="_blank"
          >
            GitHub
          </a>
        </div>
        <div className="dropdown-filter">
          <label htmlFor="tech-select">Filter by tech:</label>
          <select
            id="tech-select"
            multiple
            value={selectedTags}
            onChange={handleTagChange}
          >
            {[
              "react",
              "node",
              "javascript",
              "aws",
              "ejs",
              "html",
              "css",
              "api",
            ].map((tag) => (
              <option key={tag} value={tag}>
                {tag.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </section>

      <section className="projects-grid">
        {filteredProjects.map((proj, i) => (
          <div key={i} className="project-card">
            <h3 className="project-title">{proj.title}</h3>
            <p className="project-tech">{proj.tech}</p>
            <p className="project-desc">{proj.description}</p>
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </section>
    </main>
  );
}
