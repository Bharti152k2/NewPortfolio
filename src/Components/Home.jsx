import React from "react";
import "../CSS/Home.css";
import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import { IoMdDownload } from "react-icons/io";
import cv from "../assets/CV.pdf";

function Home() {
  {
    document.title = "Home";
  }
  return (
    <>
      <section className="main-sec">
        <div className="intro">
          <h1>Hii, I'm Bharti</h1>
          <span>I'm a Frontend Developer</span>
          <h3>I have good Knowledge in Html, Css, Javascript, and React</h3>
          <a href={cv} className="resumebtn">
            Resume <IoMdDownload />
          </a>
        </div>
      </section>
      <Skills />
      <Projects />
      <About />
      <Contact />
    </>
  );
}

export default Home;
