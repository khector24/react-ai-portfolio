import { useState, useEffect } from "react";
import "./ContactForm.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (pretend)");
  };

  return (
    <main className="contact-container">
      <h2 data-aos="fade-down">Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form" data-aos="zoom-in">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          onChange={handleChange}
          value={formData.name}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          onChange={handleChange}
          value={formData.email}
          required
        />
        <textarea
          name="message"
          placeholder="Your message"
          onChange={handleChange}
          value={formData.message}
          rows="6"
          required
        />
        <button type="submit">Send</button>
      </form>
    </main>
  );
}
