import React from "react";
import "../CSS/Skills.css";
import { skills } from "../Data/MySkills";

function Skills() {
  {
    document.title = "Skills";
  }
  return (
    <section className="skills">
      <h1>My Skills</h1>
      <h5>Things I am good at</h5>
      <div className="skill">
        {skills.map(({ id, img, techName, rating }) => {
          return (
            <div className="BOX" key={id}>
              <img src={img} height="50px" width="50px" />
              <p>{techName} </p>
              <p>{rating}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
