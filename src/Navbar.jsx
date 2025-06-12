import { Link } from "react-router-dom";
import "./App.css";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="site-name">Kenny Hector</span>
      </div>
      <div className="nav-right">
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}
