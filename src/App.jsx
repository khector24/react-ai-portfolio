import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import ContactForm from "./ContactForm";
import "./App.css";

import "./App.css";

function App() {
  const searchParams = new URLSearchParams(window.location.search);
  const filter = searchParams.get("filter");

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Portfolio filter={filter} />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
