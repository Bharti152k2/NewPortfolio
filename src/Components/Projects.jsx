import React from "react";
import "../CSS/Projects.css";
import { projects } from "../Data/SingleProject";
import Button from "./Button";
function Projects() {
  {
    document.title = "Projects";
  }
  return (
    <section className="projects">
      <h1>Projects</h1>
      <div className="cards">
        {projects.map(({ id, title, tech, img }) => {
          return (
            <div className="card" key={id}>
              <h3>{title}</h3>
              <h3>{tech}</h3>
              <img src={img} />
              <Button classname={"btn"}>Visit</Button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
