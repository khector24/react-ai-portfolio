import { useEffect } from "react";
import "./Testimonials.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { testimonials } from "./assets/content.js";

export default function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <main className="testimonials-container">
      <h2 className="testimonial-heading" data-aos="fade-up">
        Testimonials
      </h2>
      {testimonials.map((t, i) => (
        <div
          className="testimonial"
          key={i}
          data-aos="fade-up"
          data-aos-delay={i * 100}
        >
          <p>"{t.text}"</p>
          <span>{t.author}</span>
        </div>
      ))}
    </main>
  );
}
