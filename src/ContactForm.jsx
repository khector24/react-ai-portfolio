import { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (pretend)");
  };

  return (
    <main>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
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
          required
        />
        <button type="submit">Send</button>
      </form>
    </main>
  );
}
