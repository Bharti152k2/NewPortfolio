import React from "react";
import "../CSS/About.css";
function About() {
  {
    document.title = "About me";
  }
  return (
    <section className="about">
      <div className="about-main">
        <div className="con">
          <h1>So, who am I ?</h1>
          <p className="info">
            Hey Guys..How're you? Hope so You're well and doing good. I'm Bharti
            and I'm from Punjab.Basically I belong to Rajasthan and recently
            staying in Bangalore for studies. Currently I'm Btech in computer
            science and engineering. Also I'm persuing training in MERN stack
            development from Jspiders. Now I have good knowledge Technologies
            such as HTML,CSS,Javascript and React and so I can call myself as a
            frontend developer..... <br />
            So this is little introduction about me..
            <br />
            <br />
            Thankyou for reading💟
          </p>
        </div>

        <div className="img"></div>
      </div>
    </section>
  );
}

export default About;
