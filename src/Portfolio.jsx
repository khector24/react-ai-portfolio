import { useState } from "react";
import "./Portfolio.css";

import { projects } from "./assets/content.js";
const availableTags = [
  "react",
  "node",
  "javascript",
  "aws",
  "ejs",
  "html",
  "css",
  "api",
];

export default function Portfolio() {
  const [selectedTags, setSelectedTags] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredProjects =
    selectedTags.length > 0
      ? projects.filter((proj) =>
          selectedTags.every((tag) => proj.tags.includes(tag))
        )
      : projects;

  return (
    <main className="portfolio-header">
      <div className="filter-dropdown">
        <button
          className="filter-toggle"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          Filter by Tech ▾
        </button>

        {showDropdown && (
          <div className="filter-options">
            {availableTags.map((tag) => (
              <label key={tag} className="filter-option">
                <input
                  type="checkbox"
                  checked={selectedTags.includes(tag)}
                  onChange={() => toggleTag(tag)}
                />
                {tag.toUpperCase()}
              </label>
            ))}
            <button
              className="clear-filter-btn"
              onClick={() => setSelectedTags([])}
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
      <section className="projects-grid">
        {filteredProjects.map((proj, i) => (
          <div key={i} className="project-card">
            <h3 className="project-title">{proj.title}</h3>
            <p className="project-tech">{proj.tech}</p>
            <p className="project-desc">{proj.description}</p>
            <a href={proj.link} target="_blank" className="github-btn">
              View on GitHub
            </a>
          </div>
        ))}
      </section>
    </main>
  );
}
