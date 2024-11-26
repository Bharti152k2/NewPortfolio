import React from "react";
import "../CSS/Footer.css";
import { NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Icons from "./Icons";

function Footer() {
  return (
    <footer className="footer">
      <Icons className={"app"} />
      <div className="routes">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div>Copyright © 2024; Designed by Bharti</div>
    </footer>
  );
}

export default Footer;
