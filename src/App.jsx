import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Skills from "./Components/Skills";
function App() {
  {
    document.title = "Home";
  }
  return (
    <>
      <Router>
        <Navbar links={["Home", "Skills", "Projects", "About", "Contact"]} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
